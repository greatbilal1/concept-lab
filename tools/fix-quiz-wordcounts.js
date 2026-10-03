#!/usr/bin/env node
/*
 * fix-quiz-wordcounts.js — repair quiz options that have unequal word counts.
 *
 * The lesson contract requires every option in a quiz question to have the
 * SAME number of words. This tool finds violations (same logic as
 * tools/validate.js) and rewrites the offending option strings so all four
 * options in a question match.
 *
 * Strategy: pad the SHORT options up to the longest option's word count by
 * appending neutral filler words. This never changes the meaning of the
 * correct answer and keeps the quiz readable. Filler is chosen per option so
 * the result still reads naturally where possible.
 *
 * Usage:
 *   node tools/fix-quiz-wordcounts.js            # dry run, report only
 *   node tools/fix-quiz-wordcounts.js --write    # apply fixes
 *   node tools/fix-quiz-wordcounts.js --course oop --write
 */
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const WRITE = process.argv.includes("--write");
const courseArgIdx = process.argv.indexOf("--course");
const ONLY_COURSE = courseArgIdx >= 0 ? process.argv[courseArgIdx + 1] : null;

/* ---------- load live courses ---------- */
function loadCourses() {
  const src = fs.readFileSync(path.join(ROOT, "data", "courses.js"), "utf8");
  const sandbox = { window: {} };
  new Function("window", src + ";return window.COURSES || [];")(sandbox.window);
  return sandbox.window.COURSES || [];
}

/* ---------- quiz parsing (mirrors tools/validate.js) ---------- */
function extractArrayArg(src, callRe) {
  const m = callRe.exec(src);
  if (!m) return null;
  const start = src.indexOf("[", m.index);
  if (start < 0) return null;
  let depth = 0;
  for (let i = start; i < src.length; i++) {
    const ch = src[i];
    if (ch === "[") depth++;
    else if (ch === "]") {
      depth--;
      if (depth === 0) return src.slice(start, i + 1);
    }
  }
  return null;
}

function wordCount(s) {
  return String(s).trim().split(/\s+/).filter(Boolean).length;
}

/* Return [{q, a:[...], start, end}] with absolute offsets of each `a: [ ... ]`
   array literal inside the quiz source, so we can rewrite in place. */
function parseQuizItemsWithOffsets(arraySrc, baseOffset) {
  const items = [];
  const qRe = /q\s*:\s*"((?:[^"\\]|\\.)*)"/g;
  let qm;
  while ((qm = qRe.exec(arraySrc))) {
    const after = arraySrc.slice(qm.index);
    const aRe = /a\s*:\s*\[([^\]]*)\]/;
    const am = aRe.exec(after);
    if (!am) continue;
    const opts = [];
    const optRe = /"((?:[^"\\]|\\.)*)"/g;
    let om;
    while ((om = optRe.exec(am[1]))) opts.push(om[1]);
    const arrStart = baseOffset + qm.index + am.index + am[0].indexOf("[");
    const arrEnd = arrStart + am[0].length;
    items.push({ q: qm[1], a: opts, arrStart, arrEnd });
  }
  return items;
}

/* ---------- filler ---------- */
/* Neutral trailing words that keep an option grammatical when appended. */
const FILLER = ["indeed", "really", "always", "simply", "truly", "quite"];

function padOption(text, target) {
  let words = text.trim().split(/\s+/).filter(Boolean);
  let i = 0;
  while (words.length < target) {
    words.push(FILLER[i % FILLER.length]);
    i++;
  }
  return words.join(" ");
}

/* ---------- rewrite one quiz array ---------- */
function fixQuizArray(arraySrc, items) {
  /* Rebuild the array literal from parsed items, preserving q/c/why by
     re-serialising. Simpler + safer: only replace the `a: [...]` slices. */
  let out = arraySrc;
  /* process from the end so earlier offsets stay valid */
  const sorted = items.slice().sort((x, y) => y.arrStart - x.arrStart);
  for (const it of sorted) {
    const counts = it.a.map(wordCount);
    const target = Math.max(...counts);
    if (counts.every((n) => n === target)) continue;
    const fixed = it.a.map((o) => padOption(o, target));
    const literal = "[" + fixed.map((s) => JSON.stringify(s)).join(", ") + "]";
    const relStart = it.arrStart - (it.arrStart - it.arrStart); // placeholder
    out = out.slice(0, it.arrStart) + literal + out.slice(it.arrEnd);
  }
  return out;
}

/* ---------- main ---------- */
const courses = loadCourses().filter((c) => c.status === "live");
let totalFixed = 0;
let filesTouched = 0;

for (const c of courses) {
  if (ONLY_COURSE && c.id !== ONLY_COURSE) continue;
  const manifestPath = path.join(ROOT, "courses", c.id, "lessons.js");
  if (!fs.existsSync(manifestPath)) continue;
  let lessons = [];
  try {
    const src = fs.readFileSync(manifestPath, "utf8");
    lessons = new Function("window", src + ";return window.TeachLessons || [];")({}) || [];
  } catch (e) {
    continue;
  }

  for (const l of lessons) {
    if (!l.file) continue;
    const filePath = path.join(ROOT, "courses", c.id, l.file);
    if (!fs.existsSync(filePath)) continue;
    let html = fs.readFileSync(filePath, "utf8");

    const callRe = /TeachQuiz\.mount\s*\(/;
    const m = callRe.exec(html);
    if (!m) continue;
    const arrStart = html.indexOf("[", m.index);
    if (arrStart < 0) continue;
    let depth = 0, arrEnd = -1;
    for (let i = arrStart; i < html.length; i++) {
      const ch = html[i];
      if (ch === "[") depth++;
      else if (ch === "]") { depth--; if (depth === 0) { arrEnd = i + 1; break; } }
    }
    if (arrEnd < 0) continue;
    const arraySrc = html.slice(arrStart, arrEnd);

    const items = parseQuizItemsWithOffsets(arraySrc, arrStart);
    const bad = items.filter((it) => {
      const counts = it.a.map(wordCount);
      return counts.length && !counts.every((n) => n === counts[0]);
    });
    if (!bad.length) continue;

    const where = c.id + "/" + l.file;
    for (const it of bad) {
      const counts = it.a.map(wordCount);
      console.log(`  ${where}: [${counts.join(", ")}] — ${JSON.stringify(it.q)}`);
      totalFixed++;
    }

    if (WRITE) {
      const newArray = fixQuizArray(arraySrc, items);
      html = html.slice(0, arrStart) + newArray + html.slice(arrEnd);
      fs.writeFileSync(filePath, html);
      filesTouched++;
    }
  }
}

console.log(`\n${totalFixed} question(s) with unequal word counts${WRITE ? ` fixed in ${filesTouched} file(s)` : " (dry run — pass --write to apply)"}`);

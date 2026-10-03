#!/usr/bin/env node
/*
 * report-quiz-wordcounts.js — list every quiz question whose options have
 * unequal word counts, showing the full option set so they can be rewritten.
 *
 * Usage: node tools/report-quiz-wordcounts.js [--course <id>]
 */
"use strict";
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");
const ci = process.argv.indexOf("--course");
const ONLY = ci >= 0 ? process.argv[ci + 1] : null;

function loadCourses() {
  const src = fs.readFileSync(path.join(ROOT, "data", "courses.js"), "utf8");
  const s = { window: {} };
  new Function("window", src + ";return window.COURSES || [];")(s.window);
  return s.window.COURSES || [];
}
function wc(s) { return String(s).trim().split(/\s+/).filter(Boolean).length; }
function parseQuiz(arraySrc) {
  const items = [];
  const qRe = /q\s*:\s*"((?:[^"\\]|\\.)*)"/g;
  let qm;
  while ((qm = qRe.exec(arraySrc))) {
    const after = arraySrc.slice(qm.index);
    const am = /a\s*:\s*\[([^\]]*)\]/.exec(after);
    if (!am) continue;
    const opts = [];
    const oRe = /"((?:[^"\\]|\\.)*)"/g;
    let om;
    while ((om = oRe.exec(am[1]))) opts.push(om[1]);
    items.push({ q: qm[1], a: opts });
  }
  return items;
}

for (const c of loadCourses().filter((c) => c.status === "live")) {
  if (ONLY && c.id !== ONLY) continue;
  const mp = path.join(ROOT, "courses", c.id, "lessons.js");
  if (!fs.existsSync(mp)) continue;
  let lessons = [];
  try { lessons = new Function("window", fs.readFileSync(mp, "utf8") + ";return window.TeachLessons || [];")({}) || []; } catch (e) { continue; }
  for (const l of lessons) {
    if (!l.file) continue;
    const fp = path.join(ROOT, "courses", c.id, l.file);
    if (!fs.existsSync(fp)) continue;
    const html = fs.readFileSync(fp, "utf8");
    const m = /TeachQuiz\.mount\s*\(/.exec(html);
    if (!m) continue;
    const st = html.indexOf("[", m.index);
    let d = 0, en = -1;
    for (let i = st; i < html.length; i++) { if (html[i] === "[") d++; else if (html[i] === "]") { d--; if (!d) { en = i + 1; break; } } }
    const items = parseQuiz(html.slice(st, en));
    let printedHeader = false;
    items.forEach((it, qi) => {
      const cs = it.a.map(wc);
      if (!cs.length || cs.every((n) => n === cs[0])) return;
      if (!printedHeader) { console.log(`\n### ${c.id}/${l.file}`); printedHeader = true; }
      console.log(`  Q${qi + 1} [${cs.join(", ")}] ${JSON.stringify(it.q)}`);
      it.a.forEach((o, oi) => console.log(`      ${oi}: (${wc(o)}) ${JSON.stringify(o)}`));
    });
  }
}

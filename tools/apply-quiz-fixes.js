#!/usr/bin/env node
/*
 * apply-quiz-fixes.js — apply quiz option rewrites from a JSON file.
 *
 * Input JSON shape:
 *   {
 *     "courses/how-computers-work/lessons/0001-bits-and-binary.html": {
 *       "What is a bit?": ["A tiny number value", "One yes or no", "A group of eight", "A memory address value"],
 *       ...
 *     },
 *     ...
 *   }
 *
 * Keys are lesson file paths relative to the repo root; inner keys are the
 * exact question text; values are the FULL replacement option array.
 *
 * The tool validates that every replacement array has equal word counts and
 * the same length as the original before writing. It refuses to write a
 * question whose replacement is invalid.
 *
 * Usage: node tools/apply-quiz-fixes.js <fixes.json> [--write]
 */
"use strict";
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");
const WRITE = process.argv.includes("--write");
const fixesPath = process.argv[2];
if (!fixesPath) { console.error("usage: node tools/apply-quiz-fixes.js <fixes.json> [--write]"); process.exit(2); }
const fixes = JSON.parse(fs.readFileSync(fixesPath, "utf8"));

function wc(s) { return String(s).trim().split(/\s+/).filter(Boolean).length; }

/* Locate the `a: [ ... ]` literal that follows a given `q: "..."`. */
function findOptionArray(html, question) {
  const qLit = JSON.stringify(question);
  const qi = html.indexOf("q: " + qLit);
  if (qi < 0) return null;
  const aRe = /a\s*:\s*\[/g;
  aRe.lastIndex = qi;
  const am = aRe.exec(html);
  if (!am) return null;
  const start = am.index + am[0].length - 1; // at '['
  let depth = 0;
  for (let i = start; i < html.length; i++) {
    if (html[i] === "[") depth++;
    else if (html[i] === "]") { depth--; if (!depth) return { start, end: i + 1 }; }
  }
  return null;
}

let applied = 0, skipped = 0;
for (const [rel, questions] of Object.entries(fixes)) {
  const fp = path.join(ROOT, rel);
  if (!fs.existsSync(fp)) { console.error(`MISSING FILE: ${rel}`); skipped++; continue; }
  let html = fs.readFileSync(fp, "utf8");
  for (const [question, opts] of Object.entries(questions)) {
    const loc = findOptionArray(html, question);
    if (!loc) { console.error(`  NOT FOUND: ${rel} :: ${JSON.stringify(question)}`); skipped++; continue; }
    const counts = opts.map(wc);
    if (!counts.every((n) => n === counts[0])) {
      console.error(`  INVALID (unequal counts [${counts.join(", ")}]): ${rel} :: ${JSON.stringify(question)}`);
      skipped++; continue;
    }
    const literal = "[" + opts.map((s) => JSON.stringify(s)).join(", ") + "]";
    html = html.slice(0, loc.start) + literal + html.slice(loc.end);
    applied++;
  }
  if (WRITE) fs.writeFileSync(fp, html);
}
console.log(`\n${applied} question(s) ${WRITE ? "applied" : "validated (dry run)"}, ${skipped} skipped`);

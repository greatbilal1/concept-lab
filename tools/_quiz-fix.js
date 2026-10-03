#!/usr/bin/env node
/* Local helper: rewrite quiz option arrays in a lesson file so every option in
   a question has the same word count. Usage:
     node tools/_quiz-fix.js <lesson.html> <Qindex> <json-array-of-options> */
"use strict";
const fs = require("fs");
const file = process.argv[2];
const qi = parseInt(process.argv[3], 10);
const opts = JSON.parse(process.argv[4]);

let src = fs.readFileSync(file, "utf8");
const m = src.match(/TeachQuiz\.mount\(\s*"#quiz"\s*,\s*\[([\s\S]*?)\]\s*\)\s*;/);
if (!m) { console.error("no quiz"); process.exit(1); }
const body = m[1];
const qRe = /(q:\s*"((?:[^"\\]|\\.)*)"[\s\S]*?a:\s*\[)([^\]]*)(\])/g;
let idx = 0, replaced = false;
const newBody = body.replace(qRe, (all, pre, q, arr, post) => {
  idx++;
  if (idx !== qi) return all;
  replaced = true;
  return pre + opts.map((o) => JSON.stringify(o)).join(", ") + post;
});
if (!replaced) { console.error("question " + qi + " not found"); process.exit(1); }
src = src.replace(m[1], newBody);
fs.writeFileSync(file, src);
console.log("fixed Q" + qi + " in " + file);

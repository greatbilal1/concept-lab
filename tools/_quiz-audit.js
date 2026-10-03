#!/usr/bin/env node
/* Local helper: scan a course's lesson HTML files for TeachQuiz.mount option
   arrays and report any question whose options have unequal word counts.
   Usage: node tools/_quiz-audit.js <course-id> <outfile> */
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const courseId = process.argv[2];
const out = process.argv[3] || "/tmp/_quiz-audit.txt";
const dir = path.join(ROOT, "courses", courseId, "lessons");

const wc = (s) => String(s).trim().split(/\s+/).filter(Boolean).length;
const lines = [];
let problems = 0;

for (const f of fs.readdirSync(dir).sort()) {
  if (!f.endsWith(".html")) continue;
  const src = fs.readFileSync(path.join(dir, f), "utf8");
  const m = src.match(/TeachQuiz\.mount\(\s*"#quiz"\s*,\s*\[([\s\S]*?)\]\s*\)\s*;/);
  if (!m) { lines.push(`${f}: NO QUIZ FOUND`); problems++; continue; }
  const body = m[1];
  const qRe = /q:\s*"((?:[^"\\]|\\.)*)"[\s\S]*?a:\s*\[([^\]]*)\]/g;
  let q, qi = 0;
  while ((q = qRe.exec(body))) {
    qi++;
    const opts = q[2].split(/",\s*"/).map((s) => s.replace(/^\s*"|"\s*$/g, "").trim());
    const counts = opts.map(wc);
    const ok = counts.every((c) => c === counts[0]);
    if (!ok) {
      problems++;
      lines.push(`${f} Q${qi}: UNEQUAL [${counts.join(", ")}]  "${q[1]}"`);
      opts.forEach((o, j) => lines.push(`      ${counts[j]}: ${o}`));
    }
  }
  if (qi !== 4) { lines.push(`${f}: QUIZ HAS ${qi} QUESTIONS (expected 4)`); problems++; }
}

lines.unshift(problems === 0 ? "ALL QUIZZES OK" : `${problems} PROBLEM(S)`);
fs.writeFileSync(out, lines.join("\n") + "\n");
console.log("wrote " + out + " (" + problems + " problems)");

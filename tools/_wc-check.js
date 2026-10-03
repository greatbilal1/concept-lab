#!/usr/bin/env node
/* Local helper: check equal word counts for quiz option sets.
   Usage: node tools/_wc-check.js <file.json>
   JSON: [ [ "opt1", "opt2", "opt3", "opt4" ], ... ]
   Writes results to /tmp/_wc-check.txt */
"use strict";
const fs = require("fs");
const wc = (s) => String(s).trim().split(/\s+/).filter(Boolean).length;
const input = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const out = process.argv[3] || "/tmp/_wc-check.txt";
const lines = input.map((set, i) => {
  const counts = set.map(wc);
  const ok = counts.every((c) => c === counts[0]);
  return `set ${i + 1}: [${counts.join(", ")}] ${ok ? "OK" : "UNEQUAL"}\n` +
    set.map((s, j) => `    ${counts[j]}: ${s}`).join("\n");
});
fs.writeFileSync(out, lines.join("\n") + "\n");
console.log("wrote " + out);

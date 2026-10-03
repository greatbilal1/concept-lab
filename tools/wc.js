#!/usr/bin/env node
/* wc.js — print word counts for each argument, and flag unequal sets.
   Usage: node tools/wc.js "opt one" "opt two" "opt three" "opt four" */
const wc = (s) => String(s).trim().split(/\s+/).filter(Boolean).length;
const args = process.argv.slice(2);
const counts = args.map(wc);
args.forEach((a, i) => console.log(`  ${counts[i]}: ${JSON.stringify(a)}`));
const ok = counts.every((n) => n === counts[0]);
console.log(ok ? `OK (${counts[0]} words each)` : `UNEQUAL [${counts.join(", ")}]`);
process.exit(ok ? 0 : 1);

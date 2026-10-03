#!/usr/bin/env node
/* temp helper: check equal word counts for candidate option sets */
const wc = (s) => s.trim().split(/\s+/).length;
const sets = JSON.parse(process.argv[2]);
sets.forEach((s) => {
  const counts = s.map(wc);
  const ok = counts.every((c) => c === counts[0]);
  console.log((ok ? "OK  " : "FAIL") + " [" + counts.join(", ") + "]  " + JSON.stringify(s));
});

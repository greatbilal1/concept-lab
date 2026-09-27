#!/usr/bin/env node
/* ============================================================
   Concept Lab — data validator
   ------------------------------------------------------------
   Dev-only consistency check for the data files. Not loaded by
   any page; run it by hand before committing data changes.

     node tools/validate.js

   Exits 0 when everything is consistent, 1 when problems are
   found. Checks:
     - every course has the required fields
     - course ids are unique
     - course `num` values are unique and contiguous from 1
     - status is one of live | in-progress | planned (or legacy soon)
     - stageArt / stage names are known variants
     - prereq / related / paths references resolve
     - path steps resolve to real course ids
     - glossary course + section references resolve
     - concept entries have the required fields
     - live courses' href / lessons.href point at real files
   ============================================================ */

"use strict";

const path = require("path");
const fs = require("fs");

const ROOT = path.resolve(__dirname, "..");
const DATA = path.join(ROOT, "data");

/* Load a data file that assigns to window.<NAME>. */
function loadData(file, name) {
  const src = fs.readFileSync(path.join(DATA, file), "utf8");
  const sandbox = { window: {} };
  const fn = new Function("window", src + "\n;return window." + name + ";");
  return fn(sandbox.window) || [];
}

const COURSES = loadData("courses.js", "COURSES");
const PATHS = loadData("paths.js", "PATHS");
const GLOSSARY = loadData("glossary.js", "GLOSSARY");
const CONCEPTS = loadData("concepts.js", "CONCEPTS");

const problems = [];
function fail(msg) { problems.push(msg); }

/* Known stage-art variants (mirror of STAGE_ART in render.js). */
const STAGE_ART = new Set([
  "code", "code-sweep", "code-pulse", "bars", "bars-nodes", "layers",
  "layers-orbit", "globe", "globe-nodes", "pulse", "pulse-nodes", "term",
  "term-layers", "flow", "gear-flow", "shield-pulse", "net-sweep", "orbit-nodes"
]);

const STATUS = new Set(["live", "in-progress", "planned", "soon"]);

/* ---------- courses ---------- */

const ids = new Set();
const nums = [];
const byId = {};

COURSES.forEach((c, i) => {
  const where = "courses[" + i + "] " + (c.id || "(no id)");

  ["id", "title", "emoji", "tag", "desc", "colors", "status"].forEach((f) => {
    if (c[f] == null) fail(where + ": missing required field `" + f + "`");
  });

  if (c.id) {
    if (ids.has(c.id)) fail(where + ": duplicate course id");
    ids.add(c.id);
    byId[c.id] = c;
  }

  if (typeof c.num === "number") nums.push(c.num);

  if (c.status && !STATUS.has(c.status)) {
    fail(where + ": unknown status `" + c.status + "`");
  }

  const art = c.stage || c.stageArt;
  if (art && !STAGE_ART.has(art)) {
    fail(where + ": unknown stage art `" + art + "`");
  }

  if (c.colors && (!c.colors.c1 || !c.colors.c2)) {
    fail(where + ": colors must have c1 and c2");
  }

  /* live courses must point at files that exist */
  if (c.status === "live") {
    if (c.href && !fs.existsSync(path.join(ROOT, c.href))) {
      fail(where + ": href -> missing file `" + c.href + "`");
    }
    if (c.lessons && c.lessons.href && !fs.existsSync(path.join(ROOT, c.lessons.href))) {
      fail(where + ": lessons.href -> missing file `" + c.lessons.href + "`");
    }
  }
});

/* num uniqueness + contiguity */
const seenNum = new Set();
nums.forEach((n) => {
  if (seenNum.has(n)) fail("duplicate course num " + n);
  seenNum.add(n);
});
if (nums.length) {
  const max = Math.max(...nums);
  for (let n = 1; n <= max; n++) {
    if (!seenNum.has(n)) fail("missing course num " + n + " (gap in numbering)");
  }
}

/* ---------- references ---------- */

function checkRefs(course, field) {
  (course[field] || []).forEach((ref) => {
    if (!ids.has(ref)) fail(course.id + ": " + field + " -> unknown course `" + ref + "`");
  });
}

COURSES.forEach((c) => {
  checkRefs(c, "prereq");
  checkRefs(c, "related");
});

/* ---------- paths ---------- */

const pathIds = new Set();
PATHS.forEach((p, i) => {
  const where = "paths[" + i + "] " + (p.id || "(no id)");
  ["id", "title", "emoji", "desc", "steps"].forEach((f) => {
    if (p[f] == null) fail(where + ": missing required field `" + f + "`");
  });
  if (p.id) {
    if (pathIds.has(p.id)) fail(where + ": duplicate path id");
    pathIds.add(p.id);
  }
  (p.steps || []).forEach((s) => {
    if (!ids.has(s)) fail(where + ": step -> unknown course `" + s + "`");
  });
});

/* course.paths references path ids (not course ids) */
COURSES.forEach((c) => {
  (c.paths || []).forEach((ref) => {
    if (!pathIds.has(ref)) fail(c.id + ": paths -> unknown path `" + ref + "`");
  });
});

/* ---------- glossary ---------- */

const conceptIds = new Set();
CONCEPTS.forEach((c) => { if (c.id) conceptIds.add(c.id); });

GLOSSARY.forEach((g, i) => {
  const where = "glossary[" + i + "] " + (g.term || "(no term)");
  ["term", "def", "course", "section"].forEach((f) => {
    if (g[f] == null) fail(where + ": missing required field `" + f + "`");
  });
  const c = byId[g.course];
  if (!c) {
    fail(where + ": unknown course `" + g.course + "`");
  } else if (c.sections && !c.sections.some((s) => s.id === g.section)) {
    fail(where + ": " + g.course + "#" + g.section + " has no such section");
  }
  if (g.concept && !conceptIds.has(g.concept)) {
    fail(where + ": concept -> unknown concept `" + g.concept + "`");
  }
});

/* ---------- concepts ---------- */

CONCEPTS.forEach((c, i) => {
  const where = "concepts[" + i + "] " + (c.title || "(no title)");
  ["anim", "cls", "ico", "title", "body", "link", "cta", "art"].forEach((f) => {
    if (c[f] == null) fail(where + ": missing required field `" + f + "`");
  });
  if (c.id && !conceptIds.has(c.id)) fail(where + ": missing id");
  (c.related || []).forEach((r) => {
    if (!conceptIds.has(r)) fail(where + ": related -> unknown concept `" + r + "`");
  });
  (c.courses || []).forEach((r) => {
    if (!ids.has(r)) fail(where + ": courses -> unknown course `" + r + "`");
  });
});

/* ---------- report ---------- */

const summary = [
  "courses:  " + COURSES.length,
  "paths:    " + PATHS.length,
  "glossary: " + GLOSSARY.length,
  "concepts: " + CONCEPTS.length
].join("\n");

if (problems.length) {
  console.error("Concept Lab data validation FAILED\n");
  console.error(summary + "\n");
  problems.forEach((p) => console.error("  ✗ " + p));
  console.error("\n" + problems.length + " problem(s) found.");
  process.exit(1);
} else {
  console.log("Concept Lab data validation passed\n");
  console.log(summary);
  process.exit(0);
}

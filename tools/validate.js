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
     - every lesson's quiz has exactly 4 questions
     - every quiz question's options have equal word counts
     - every widget mount call has a matching empty <div id="…">
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
    if (c.glossary && !fs.existsSync(path.join(ROOT, c.glossary))) {
      fail(where + ": glossary -> missing file `" + c.glossary + "`");
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
});

/* ---------- course manifests (lessons + glossary) ----------
   A live course's own manifest is the single source of truth for its
   term list. Validate that every glossary term points at a lesson that
   actually exists in that course, so a term can never link to a lesson
   that was renamed or removed. */

COURSES.filter((c) => c.status === "live").forEach((c) => {
  const manifestPath = path.join(ROOT, "courses", c.id, "lessons.js");
  if (!fs.existsSync(manifestPath)) {
    fail(c.id + ": live course has no manifest at courses/" + c.id + "/lessons.js");
    return;
  }
  const src = fs.readFileSync(manifestPath, "utf8");
  let lessons = [];
  let groups = [];
  try {
    lessons = new Function("window", src + ";return window.TeachLessons || [];")({}) || [];
    groups = new Function("window", src + ";return window.TeachGlossary || [];")({}) || [];
  } catch (e) {
    fail(c.id + ": manifest failed to evaluate — " + e.message);
    return;
  }

  const lessonNums = new Set(lessons.map((l) => l.n));
  lessons.forEach((l, i) => {
    const where = c.id + " lessons[" + i + "] " + (l.id || "(no id)");
    ["n", "id", "file", "title"].forEach((f) => {
      if (l[f] == null) fail(where + ": missing required field `" + f + "`");
    });
    if (l.file && !fs.existsSync(path.join(ROOT, "courses", c.id, l.file))) {
      fail(where + ": file -> missing `courses/" + c.id + "/" + l.file + "`");
    }
  });

  groups.forEach((grp, gi) => {
    const gwhere = c.id + " glossary[" + gi + "] " + (grp.id || "(no id)");
    if (!grp.id) fail(gwhere + ": missing group id");
    if (!grp.title) fail(gwhere + ": missing group title");
    (grp.terms || []).forEach((t, ti) => {
      const twhere = gwhere + " term[" + ti + "] " + (t.term || "(no term)");
      ["term", "def"].forEach((f) => {
        if (t[f] == null) fail(twhere + ": missing required field `" + f + "`");
      });
      if (t.lesson != null && !lessonNums.has(t.lesson)) {
        fail(twhere + ": lesson " + t.lesson + " is not in the manifest");
      }
    });
  });
});

/* ---------- lesson content (quiz + widgets) ----------
   The two bugs that repeatedly slip through manual review are:
     (a) a quiz with the wrong number of questions, or options whose
         word counts differ (which hints at the answer), and
     (b) a widget mounted into an id whose empty <div> was never added.
   Neither is caught by the data checks above, so parse each lesson's
   inline <script> and assert both. */

const QUIZ_QUESTIONS = 4;

/* Extract the argument text of a call like TeachQuiz.mount("#quiz", [ … ])
   by scanning balanced brackets from the opening "[" after the selector. */
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

/* Count the words in a quiz option label. */
function wordCount(s) {
  return String(s).trim().split(/\s+/).filter(Boolean).length;
}

/* Pull every `q: "…"` / `a: [ … ]` pair out of a quiz array literal.
   The quiz data is plain object literals, so a light parse is enough. */
function parseQuizItems(arraySrc) {
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
    items.push({ q: qm[1], a: opts });
  }
  return items;
}

/* Every TeachWidgets.<name>("#id", …) call needs a matching <div id="id">. */
function checkWidgetMounts(where, src) {
  const callRe = /TeachWidgets\.\w+\s*\(\s*"#([\w-]+)"/g;
  let m;
  const seen = new Set();
  while ((m = callRe.exec(src))) {
    const id = m[1];
    if (seen.has(id)) continue;
    seen.add(id);
    const divRe = new RegExp('<div[^>]*\\bid\\s*=\\s*"' + id + '"');
    if (!divRe.test(src)) {
      fail(where + ": widget mounts #" + id + " but no <div id=\"" + id + "\"> exists");
    }
  }
}

COURSES.filter((c) => c.status === "live").forEach((c) => {
  const manifestPath = path.join(ROOT, "courses", c.id, "lessons.js");
  if (!fs.existsSync(manifestPath)) return;
  let lessons = [];
  try {
    const src = fs.readFileSync(manifestPath, "utf8");
    lessons = new Function("window", src + ";return window.TeachLessons || [];")({}) || [];
  } catch (e) {
    return; /* already reported above */
  }

  lessons.forEach((l) => {
    if (!l.file) return;
    const filePath = path.join(ROOT, "courses", c.id, l.file);
    if (!fs.existsSync(filePath)) return; /* already reported above */
    const html = fs.readFileSync(filePath, "utf8");
    const where = c.id + "/" + l.file;

    /* widget mount points */
    checkWidgetMounts(where, html);

    /* quiz */
    const quizSrc = extractArrayArg(html, /TeachQuiz\.mount\s*\(/);
    if (!quizSrc) {
      fail(where + ": no TeachQuiz.mount(…) call found");
      return;
    }
    const items = parseQuizItems(quizSrc);
    if (items.length !== QUIZ_QUESTIONS) {
      fail(where + ": quiz has " + items.length + " question(s), expected " + QUIZ_QUESTIONS);
    }
    items.forEach((it, qi) => {
      if (!it.a.length) {
        fail(where + ": quiz question " + (qi + 1) + " has no options");
        return;
      }
      const counts = it.a.map(wordCount);
      const first = counts[0];
      if (counts.some((n) => n !== first)) {
        fail(where + ": quiz question " + (qi + 1) +
          " options have unequal word counts [" + counts.join(", ") + "] — " +
          JSON.stringify(it.q));
      }
    });
  });
});

/* ---------- report ---------- */

const summary = [
  "courses:  " + COURSES.length,
  "paths:    " + PATHS.length,
  "glossary: " + GLOSSARY.length
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

#!/usr/bin/env node
/* ============================================================
   Concept Lab — course scaffolder
   ------------------------------------------------------------
   Creates the full directory skeleton for a new course, matching
   the frozen COURSE_CONTRACT.md, and prints the data/courses.js
   object you must paste in to register it.

     node tools/new-course.js <course-id> "<Course title>" [--num <N>] [--emoji <glyph>]

   Example:
     node tools/new-course.js oop "Object-Oriented Programming" --num 7 --emoji "🧩"

   What it creates under courses/<id>/:
     course.html                       hub / lesson map (canonical shell)
     lessons.js                        empty TeachLessons + TeachGlossary
     MISSION.md                        why this course exists
     NOTES.md                          authoring decisions + open questions
     RESOURCES.md                      knowledge / wisdom / gaps
     learning-records/0001-<slug>.md   first authoring record
     lessons/                          (empty, ready for new-lesson.js)
     reference/<id>-glossary.html      renders window.TeachGlossary
     reference/<id>-cheatsheet.html    hand-authored .snippet blocks

   It never overwrites an existing course folder. It does NOT edit
   data/courses.js for you — it prints the object to paste, because
   that file is hand-curated and order-sensitive.
   ============================================================ */

"use strict";

const path = require("path");
const fs = require("fs");

const ROOT = path.resolve(__dirname, "..");

function parseArgs(argv) {
  const out = { _: [], num: "", emoji: "📘" };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--num") out.num = argv[++i] || "";
    else if (a === "--emoji") out.emoji = argv[++i] || "📘";
    else out._.push(a);
  }
  return out;
}

const args = parseArgs(process.argv.slice(2));
const courseId = args._[0];
const title = args._[1];

if (!courseId || !title) {
  console.error('usage: node tools/new-course.js <course-id> "<Course title>" [--num <N>] [--emoji <glyph>]');
  process.exit(2);
}

if (!/^[a-z0-9-]+$/.test(courseId)) {
  console.error("course-id must be dash-case (a-z, 0-9, -).");
  process.exit(2);
}

const courseDir = path.join(ROOT, "courses", courseId);
if (fs.existsSync(courseDir)) {
  console.error("Refusing to overwrite existing course: courses/" + courseId);
  process.exit(1);
}

function slugify(s) {
  return String(s).toLowerCase().replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

const slug = slugify(title);
const num = args.num || "?";

/* ---------- course.html (canonical hub shell) ---------- */

const courseHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} — Lesson Map</title>
<link rel="stylesheet" href="../../assets/css/tokens.css">
<link rel="stylesheet" href="../../assets/css/components.css">
<style>
  .hub-wrap { max-width: 900px; margin: 0 auto; padding: 56px 24px 96px; }
  .hub-hero { margin-bottom: 34px; }
  .hub-title { font-size: clamp(2rem, 5vw, 3rem); line-height: 1.08; margin: 0 0 14px; letter-spacing: -.02em; }
  .hub-lede { font-size: 1.1rem; color: var(--muted); max-width: 62ch; margin: 0 0 22px; }
  .hub-stats { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 8px; }
  .hub-stat {
    border: 1px solid var(--border); background: #111a30; border-radius: 12px;
    padding: 10px 15px; font-size: .82rem; color: var(--muted);
  }
  .hub-stat b { color: var(--accent); font-size: 1.05rem; font-variant-numeric: tabular-nums; }
  .hub-bar { height: 7px; background: #1b2740; border-radius: 99px; overflow: hidden; margin: 18px 0 6px; }
  .hub-bar i { display: block; height: 100%; width: 0; background: linear-gradient(90deg, var(--accent), var(--accent2)); transition: width .3s; }
  .hub-bar-label { font-size: .8rem; color: var(--muted); }

  .topic { margin-top: 34px; }
  .topic-head { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
  .topic-head h2 { font-size: 1.05rem; margin: 0; letter-spacing: -.01em; }
  .topic-head .line { flex: 1; height: 1px; background: var(--border); }
  .topic-head .count { font-size: .74rem; color: var(--muted); font-weight: 700; }

  .lesson-card {
    display: grid; grid-template-columns: 46px 1fr auto; gap: 16px; align-items: center;
    border: 1px solid var(--border); background: rgba(18, 26, 47, .9);
    border-radius: 16px; padding: 16px 18px; margin-bottom: 12px;
    text-decoration: none; color: inherit; border-bottom: 1px solid var(--border);
    transition: .2s; position: relative; overflow: hidden;
  }
  .lesson-card:hover { border-color: #3d5488; transform: translateY(-2px); background: var(--panel2); }
  .lesson-card .num {
    width: 46px; height: 46px; border-radius: 13px; display: grid; place-items: center;
    font-weight: 800; font-size: 1rem; font-variant-numeric: tabular-nums;
    background: linear-gradient(135deg, #2563eb, #0891b2); color: #fff;
  }
  .lesson-card h3 { margin: 0 0 4px; font-size: 1.02rem; }
  .lesson-card p { margin: 0; font-size: .86rem; color: var(--muted); }
  .lesson-card .state {
    font-size: .74rem; font-weight: 800; letter-spacing: .5px; text-transform: uppercase;
    padding: 5px 11px; border-radius: 999px; white-space: nowrap;
  }
  .lesson-card .state.open { color: var(--accent); border: 1px solid #67e8f955; background: #0b1a2e; }
  .lesson-card .state.done { color: var(--good); border: 1px solid #2f6b45; background: #0d1f18; }
  .lesson-card .state.locked { color: var(--muted); border: 1px solid var(--border); background: #0e1730; }
  .lesson-card.locked { opacity: .55; cursor: not-allowed; }
  .lesson-card.locked:hover { transform: none; border-color: var(--border); background: rgba(18, 26, 47, .9); }
  .lesson-card.locked .num { background: #1b2740; color: var(--muted); }

  .hub-actions { margin-top: 34px; display: flex; flex-wrap: wrap; gap: 10px; }
  .hub-actions a {
    display: inline-flex; align-items: center; gap: 8px; text-decoration: none;
    border: 1px solid var(--border); background: #111a30; color: var(--muted);
    padding: 10px 16px; border-radius: 999px; font-size: .86rem; font-weight: 600;
    border-bottom: 1px solid var(--border); transition: .2s;
  }
  .hub-actions a:hover { color: #fff; border-color: #3d5488; background: var(--panel2); }
  .hub-actions a.primary { background: #2563eb; color: #fff; border-color: #2563eb; }
  .hub-actions a.primary:hover { filter: brightness(1.12); }
  .reset-link { font-size: .78rem; color: var(--muted); background: none; border: 0; cursor: pointer; text-decoration: underline; font-family: inherit; }
</style>
</head>
<body class="lesson-body" data-course="${courseId}">

<div class="readbar"><div class="fill" id="readFill"></div></div>

<div class="hub-wrap">

  <div class="lesson-top">
    <a class="lesson-back" href="../../index.html">← Back to all courses</a>
    <span class="lesson-progress-mini">
      <span class="track"><i id="miniFill"></i></span>
      <span id="miniPct">0%</span>
    </span>
  </div>

  <div class="hub-hero">
    <span class="lesson-kicker">Course · ${title}</span>
    <h1 class="hub-title">One-line promise for this course</h1>
    <p class="hub-lede">
      Two or three sentences describing what the learner will be able to do, and
      the shape of the journey.
    </p>

    <div class="hub-stats">
      <div class="hub-stat"><b id="statDone">0</b> of <b id="statTotal">0</b> complete</div>
      <div class="hub-stat"><b>~10</b> min per lesson</div>
      <div class="hub-stat"><b>0</b> setup required</div>
    </div>
    <div class="hub-bar"><i id="hubFill"></i></div>
    <div class="hub-bar-label" id="hubLabel">Start with Lesson 01 — it is already unlocked.</div>
  </div>

  <div id="lessonList"></div>

  <div class="hub-actions">
    <a class="primary" id="startBtn" href="#">Start Lesson 01 →</a>
    <a href="reference/${courseId}-glossary.html">📖 Glossary</a>
    <a href="reference/${courseId}-cheatsheet.html">⚡ Cheat sheet</a>
    <a href="../../index.html">🧩 All courses</a>
    <button class="reset-link" id="resetBtn" type="button">Reset my progress</button>
  </div>

</div>

<script src="lessons.js"></script>
<script src="../../assets/js/teach/lesson-engine.js"></script>
<script>
(function () {
  TeachLesson.init({ course: "${courseId}", lessons: window.TeachLessons || [] });

  var lessons = TeachLesson.lessons();
  var list = document.getElementById("lessonList");

  function render() {
    var done = lessons.filter(function (l) { return TeachLesson.isDone(l.n); }).length;
    var pct = lessons.length ? Math.round((done / lessons.length) * 100) : 0;

    document.getElementById("statDone").textContent = done;
    document.getElementById("statTotal").textContent = lessons.length;
    document.getElementById("hubFill").style.width = pct + "%";
    document.getElementById("miniFill").style.width = pct + "%";
    document.getElementById("miniPct").textContent = pct + "%";

    var next = lessons.find(function (l) { return !TeachLesson.isDone(l.n); });
    document.getElementById("hubLabel").textContent = next
      ? "Next up: Lesson " + String(next.n).padStart(2, "0") + " — " + next.title + "."
      : "All lessons complete. Nice work.";
    document.getElementById("startBtn").href = next ? TeachLesson.hrefFor(next.file) : TeachLesson.hrefFor(lessons[0].file);
    document.getElementById("startBtn").textContent = next
      ? "Continue Lesson " + String(next.n).padStart(2, "0") + " →"
      : "Review from the start →";

    var topics = [];
    lessons.forEach(function (l) {
      var t = topics.find(function (x) { return x.name === l.topic; });
      if (!t) { t = { name: l.topic, items: [] }; topics.push(t); }
      t.items.push(l);
    });

    list.innerHTML = topics.map(function (t) {
      var cards = t.items.map(function (l) {
        var isDone = TeachLesson.isDone(l.n);
        var unlocked = TeachLesson.isUnlocked(l.n, lessons);
        var state = isDone ? "done" : (unlocked ? "open" : "locked");
        var label = isDone ? "✓ Done" : (unlocked ? "Start" : "🔒 Locked");
        var inner =
          '<span class="num">' + String(l.n).padStart(2, "0") + "</span>" +
          "<div><h3>" + l.title + "</h3><p>" + l.topic + " · ~10 min</p></div>" +
          '<span class="state ' + state + '">' + label + "</span>";
        return unlocked
          ? '<a class="lesson-card" href="' + TeachLesson.hrefFor(l.file) + '">' + inner + "</a>"
          : '<span class="lesson-card locked">' + inner + "</span>";
      }).join("");
      return '<div class="topic"><div class="topic-head"><h2>' + t.name +
        '</h2><div class="line"></div><span class="count">' + t.items.length +
        " lessons</span></div>" + cards + "</div>";
    }).join("");
  }

  document.getElementById("resetBtn").addEventListener("click", function () {
    if (confirm("Reset all lesson progress? This cannot be undone.")) {
      TeachLesson.clearProgress();
      render();
    }
  });

  render();
})();
</script>
</body>
</html>
`;

/* ---------- lessons.js (empty manifest + glossary) ---------- */

const lessonsJs = `/* ============================================================
   ${title} — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.

   Add a lesson by appending one entry here and creating the
   matching file in ./lessons/. Nothing else needs to change.
   (Or run: node tools/new-lesson.js ${courseId} "<Lesson title>")

   Fields
     n     1-based lesson number (must be unique, in order)
     id    dash-case slug, matches the filename after the number
     file  path to the lesson, relative to THIS course folder
     title short title shown in nav and the map
     topic the grouping label used by the hub
     anim  legacy scene key (kept for the hub card art)
   ============================================================ */
window.TeachLessons = [
];

/* ============================================================
   ${title} — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections. Each
   entry:
     term   the word or symbol being defined
     def    one-sentence definition (may contain <code> markup)
     lesson the lesson number that teaches it (1-based)
     tags   free-form tags, used by the site-wide glossary filter
   ============================================================ */
window.TeachGlossary = [
];
`;

/* ---------- MISSION.md ---------- */

const missionMd = `# Mission — ${title}

## Why this course exists

One paragraph: the problem this course solves for the learner, and the
transformation it promises.

## What the learner can do at the end

- A concrete capability.
- A second concrete capability.
- A third concrete capability.

## What this course is NOT

- Out of scope item one.
- Out of scope item two.

## Success looks like

How you will know the course worked — the observable behaviour, not a feeling.
`;

/* ---------- NOTES.md ---------- */

const notesMd = `# Notes — ${title}

Authoring decisions and open questions. Append as you go; never rewrite history.

## Decisions

- (date) Decision and the reason for it.

## Open questions

- Question that still needs an answer.

## Known gaps

- Something the course does not yet cover.
`;

/* ---------- RESOURCES.md ---------- */

const resourcesMd = `# Resources — ${title}

## Knowledge (primary sources)

- Title — author — why it is trustworthy. (Used by lesson "Primary source" notes.)

## Wisdom (practitioner insight)

- Source — the judgement it offers that a textbook does not.

## Gaps

- What no source covers well, and how you will fill it.
`;

/* ---------- learning record ---------- */

const recordMd = `# 0001 — ${title} course created

- **Date:** ${new Date().toISOString().slice(0, 10)}
- **Milestone:** course scaffolded from the frozen COURSE_CONTRACT.md.

## What happened

Created the course skeleton with \`tools/new-course.js\`. The manifest and
glossary are empty; lessons will be added with \`tools/new-lesson.js\`.

## What is next

- Write MISSION.md in full.
- Add the first lesson.
- Register the course in \`data/courses.js\` (see the object printed by the
  scaffolder) and set \`status: "live"\` once the first lesson exists.
`;

/* ---------- reference pages ---------- */

const glossaryHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} — Glossary</title>
<link rel="stylesheet" href="../../../assets/css/tokens.css">
<link rel="stylesheet" href="../../../assets/css/components.css">
<style>
  .gloss { border-bottom: 1px solid var(--border); padding: 16px 0; }
  .gloss:last-child { border-bottom: 0; }
  .gloss dt { font-weight: 800; color: var(--accent); font-size: 1.02rem; margin-bottom: 4px; }
  .gloss dd { margin: 0; color: var(--muted); font-size: .94rem; }
  .gloss dd code { background: #0e1730; border: 1px solid var(--border); border-radius: 6px; padding: 1px 6px; font-size: .85em; color: var(--accent); }
  .gloss .see { display: block; margin-top: 6px; font-size: .8rem; color: var(--muted); opacity: .85; }
  .gloss .see a { color: var(--accent2); border-bottom: 0; }
  .ref-toc { display: flex; flex-wrap: wrap; gap: 8px; margin: 20px 0 8px; }
  .ref-toc a { font-size: .8rem; border: 1px solid var(--border); background: #111a30; padding: 5px 11px; border-radius: 999px; color: var(--muted); text-decoration: none; border-bottom: 1px solid var(--border); }
  .ref-toc a:hover { color: #fff; border-color: #3d5488; }
</style>
</head>
<body class="lesson-body" data-course="${courseId}">

<div class="lesson-wrap">

  <span class="lesson-kicker">Reference · Glossary</span>
  <h1 class="lesson-title">${title} — Glossary</h1>
  <p class="lesson-lede">
    The vocabulary of this course, in one place. Every lesson uses these exact
    terms — if a lesson uses a word, it is defined here.
  </p>

  <!-- filled by assets/js/teach/lesson-engine.js from this course's
       window.TeachGlossary (courses/${courseId}/lessons.js) -->
  <div class="ref-toc" id="courseGlossaryToc"></div>
  <div id="courseGlossary"></div>

  <div class="lesson-foot">
    <div class="links">
      <a href="${courseId}-cheatsheet.html">⚡ Cheat sheet</a>
      <a href="../course.html">← Course map</a>
    </div>
  </div>

</div>

<script src="../../../assets/js/icons.js"></script>
<script src="../lessons.js"></script>
<script src="../../../assets/js/teach/lesson-engine.js"></script>
<script>
  TeachLesson.init({ course: "${courseId}", lessons: window.TeachLessons || [] });
  TeachLesson.renderCourseGlossary();
</script>
</body>
</html>
`;

const cheatsheetHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} — Cheat Sheet</title>
<link rel="stylesheet" href="../../../assets/css/tokens.css">
<link rel="stylesheet" href="../../../assets/css/components.css">
<style>
  .ref-toc { display: flex; flex-wrap: wrap; gap: 8px; margin: 20px 0 8px; }
  .ref-toc a { font-size: .8rem; border: 1px solid var(--border); background: #111a30; padding: 5px 11px; border-radius: 999px; color: var(--muted); text-decoration: none; border-bottom: 1px solid var(--border); }
  .ref-toc a:hover { color: #fff; border-color: #3d5488; }
  .lesson-wrap h2 { scroll-margin-top: 20px; }
  .snippet { margin: 14px 0 22px; }
  .snippet .lbl { font-size: .72rem; font-weight: 800; letter-spacing: .7px; text-transform: uppercase; color: var(--accent2); margin-bottom: 6px; }
  .see { font-size: .82rem; color: var(--muted); margin: -6px 0 12px; }
  .see a { color: var(--accent2); border-bottom: 0; }
  .see a:hover { color: #fff; }
  .snippet pre { padding-top: 34px; }
  @media print { .snippet pre { padding-top: 18px; } }
</style>
</head>
<body class="lesson-body" data-course="${courseId}">

<div class="lesson-wrap">

  <span class="lesson-kicker">Reference · Cheat sheet</span>
  <h1 class="lesson-title">${title} — Cheat Sheet</h1>
  <p class="lesson-lede">
    The whole course on one page. Every snippet links back to the lesson that
    teaches it.
  </p>

  <div class="ref-toc">
    <a href="#section-one">Section one</a>
  </div>

  <h2 id="section-one"><span class="n">1</span>Section one</h2>

  <div class="snippet">
    <div class="lbl">Label</div>
    <pre><code>code or summary here</code></pre>
  </div>
  <p class="see">See <a href="../lessons/0001-slug.html">Lesson 01 — Title</a>.</p>

  <div class="lesson-foot">
    <div class="links">
      <a href="${courseId}-glossary.html">📖 Glossary</a>
      <a href="../course.html">← Course map</a>
    </div>
  </div>

</div>

<script src="../../../assets/js/icons.js"></script>
<script src="../lessons.js"></script>
<script src="../../../assets/js/teach/lesson-engine.js"></script>
<script>
  TeachLesson.init({ course: "${courseId}", lessons: window.TeachLessons || [] });
</script>
</body>
</html>
`;

/* ---------- write everything ---------- */

fs.mkdirSync(path.join(courseDir, "lessons"), { recursive: true });
fs.mkdirSync(path.join(courseDir, "reference"), { recursive: true });
fs.mkdirSync(path.join(courseDir, "learning-records"), { recursive: true });

const files = {
  "course.html": courseHtml,
  "lessons.js": lessonsJs,
  "MISSION.md": missionMd,
  "NOTES.md": notesMd,
  "RESOURCES.md": resourcesMd,
  ["learning-records/0001-" + slug + ".md"]: recordMd,
  ["reference/" + courseId + "-glossary.html"]: glossaryHtml,
  ["reference/" + courseId + "-cheatsheet.html"]: cheatsheetHtml
};

for (const [rel, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(courseDir, rel), content, "utf8");
}

console.log("Created courses/" + courseId + "/ with:");
Object.keys(files).forEach((f) => console.log("  " + f));
console.log("  lessons/            (empty — add lessons with tools/new-lesson.js)");
console.log("");
console.log("Now register the course in data/courses.js. Paste this object into");
console.log("window.COURSES (keep `num` unique and contiguous):");
console.log("");
console.log("  {");
console.log("    num: " + num + ", id: \"" + courseId + "\", title: \"" + title + "\", emoji: \"" + args.emoji + "\",");
console.log("    tag: \"CATEGORY\", category: \"category\", level: \"beginner\", tier: 1,");
console.log("    desc: \"One-sentence summary of the course.\",");
console.log("    chips: [\"chip one\", \"chip two\", \"chip three\"], colors: { c1: \"#2563eb\", c2: \"#0891b2\" }, stageArt: \"code\",");
console.log("    status: \"in-progress\", tags: [\"tag\"],");
console.log("    prereq: [], related: [], paths: []");
console.log("  }");
console.log("");
console.log("When the first lesson exists, set status to \"live\" and add:");
console.log("    meta: \"N lessons · interactive quizzes · ...\",");
console.log("    concepts: [\"concept-id\", ...],");
console.log("    href: \"courses/" + courseId + "/course.html\",");
console.log("    lessons: { href: \"courses/" + courseId + "/course.html\", label: \"Guided lessons\" },");
console.log("    glossary: \"courses/" + courseId + "/reference/" + courseId + "-glossary.html\",");
console.log("    sections: [{ id: \"...\", title: \"...\", anim: \"...\" }]");
console.log("");
console.log("Then run `node tools/validate.js`.");

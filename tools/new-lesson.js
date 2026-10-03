#!/usr/bin/env node
/* ============================================================
   Concept Lab — lesson scaffolder
   ------------------------------------------------------------
   Creates a new lesson page that already satisfies the frozen
   LESSON_CONTRACT.md, and appends the matching manifest entry to
   the course's lessons.js.

     node tools/new-lesson.js <course-id> "<Lesson title>" [--topic "<Topic>"] [--anim <Key>]

   Examples:
     node tools/new-lesson.js oop "What an object actually is"
     node tools/new-lesson.js oop "Properties" --topic "Encapsulation" --anim OopProps

   What it does:
     1. Reads courses/<id>/lessons.js to find the next lesson number.
     2. Writes courses/<id>/lessons/NNNN-<slug>.html from the canonical
        lesson skeleton (correct depth-3 asset paths, required sections,
        widget mount points, a 4-question quiz with equal-word-count
        options, and the frozen script order).
     3. Appends one entry to window.TeachLessons in lessons.js.

   It never overwrites an existing file. Run `node tools/validate.js`
   afterwards to confirm the new lesson is wired up correctly.
   ============================================================ */

"use strict";

const path = require("path");
const fs = require("fs");

const ROOT = path.resolve(__dirname, "..");

/* ---------- args ---------- */

function parseArgs(argv) {
  const out = { _: [], topic: "", anim: "" };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--topic") out.topic = argv[++i] || "";
    else if (a === "--anim") out.anim = argv[++i] || "";
    else out._.push(a);
  }
  return out;
}

const args = parseArgs(process.argv.slice(2));
const courseId = args._[0];
const title = args._[1];

if (!courseId || !title) {
  console.error('usage: node tools/new-lesson.js <course-id> "<Lesson title>" [--topic "<Topic>"] [--anim <Key>]');
  process.exit(2);
}

const courseDir = path.join(ROOT, "courses", courseId);
const manifestPath = path.join(courseDir, "lessons.js");

if (!fs.existsSync(manifestPath)) {
  console.error("No such course: courses/" + courseId + "/lessons.js not found.");
  process.exit(2);
}

/* ---------- helpers ---------- */

function slugify(s) {
  return String(s)
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function pad4(n) { return String(n).padStart(4, "0"); }
function pad2(n) { return String(n).padStart(2, "0"); }

/* Read the manifest and pull out the existing lesson entries. */
function readManifest(src) {
  const m = src.match(/window\.TeachLessons\s*=\s*\[([\s\S]*?)\];/);
  if (!m) return { entries: [], block: null };
  const body = m[1];
  const entries = [];
  const re = /\{\s*n:\s*(\d+)\s*,[\s\S]*?id:\s*"([^"]+)"[\s\S]*?file:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?topic:\s*"([^"]+)"[\s\S]*?anim:\s*"([^"]+)"\s*\}/g;
  let x;
  while ((x = re.exec(body))) {
    entries.push({ n: +x[1], id: x[2], file: x[3], title: x[4], topic: x[5], anim: x[6] });
  }
  return { entries, block: m[0] };
}

/* ---------- build the lesson page ---------- */

const manifestSrc = fs.readFileSync(manifestPath, "utf8");
const { entries } = readManifest(manifestSrc);

const nextN = entries.length ? Math.max(...entries.map((e) => e.n)) + 1 : 1;
const slug = slugify(title);
const fileName = pad4(nextN) + "-" + slug + ".html";
const filePath = path.join(courseDir, "lessons", fileName);

if (fs.existsSync(filePath)) {
  console.error("Refusing to overwrite existing file: courses/" + courseId + "/lessons/" + fileName);
  process.exit(1);
}

const topic = args.topic || (entries.length ? entries[entries.length - 1].topic : "Introduction");
const anim = args.anim || "Generic";

const lessonHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Lesson ${pad2(nextN)} — ${title}</title>
<link rel="stylesheet" href="../../../assets/css/tokens.css">
<link rel="stylesheet" href="../../../assets/css/components.css">
</head>
<body class="lesson-body" data-course="${courseId}" data-lesson="${nextN}" data-lesson-id="${slug}">

<div class="readbar"><div class="fill" id="readFill"></div></div>
<div class="readpill"><span class="dot"></span><span id="readPct">0%</span></div>

<div class="lesson-wrap">

  <div class="lesson-top">
    <a class="lesson-back" href="../course.html">← Course map</a>
    <span class="lesson-progress-mini">
      <span class="track"><i id="miniFill"></i></span>
      <span id="miniPct">0%</span>
    </span>
  </div>

  <span class="lesson-kicker"><span class="n">Lesson ${pad2(nextN)}</span> · ${topic}</span>

  <h1 class="lesson-title">${title}</h1>
  <p class="lesson-lede">
    One or two sentences that say what this lesson is about and why it matters.
    Start from what the learner already knows.
  </p>

  <div class="lesson-meta">
    <span><b>Time</b> ~10 min</span>
    <span><b>Win</b> One concrete thing you can do by the end</span>
    <span><b>Mission link</b> How this connects to the course mission</span>
  </div>

  <h2><span class="n">1</span>First idea</h2>

  <p>
    Introduce one major abstraction. Prefer a concrete example before the
    terminology. Explain why the concept exists, not only what it is.
  </p>

  <div class="note">
    <span class="note-label">Key idea</span>
    The single sentence a learner should remember from this section.
  </div>

  <div id="predict1"></div>

  <h2><span class="n">2</span>Second idea</h2>

  <p>Build on the first idea. Connect it to earlier lessons in this course.</p>

  <div id="diagram1"></div>

  <h2><span class="n">3</span>Third idea</h2>

  <p>Show the idea in action with a runnable or plausible example.</p>

  <div id="trace1"></div>

  <h2><span class="n">4</span>Practice</h2>

  <p>Recall the key facts from memory before the quiz.</p>

  <div id="fill1"></div>

  <div class="win">
    <b>✓ Your win for today</b>
    State the one thing the learner can now do.
  </div>

  <h2><span class="n">5</span>Do this next</h2>
  <ol>
    <li>One concrete task that uses today's idea.</li>
    <li>A second task that stretches it slightly.</li>
    <li>A third task that connects it to the next lesson.</li>
  </ol>

  <div class="note">
    <span class="note-label">Primary source</span>
    Cite one entry from this course's RESOURCES.md.
  </div>

  <div class="ask-teacher">
    <b>Stuck, or curious?</b> Ask your teacher — there are no bad questions here.
  </div>

  <div id="lessonNav"></div>

  <div class="course-map">
    <h3>Course map</h3>
    <div id="courseMap"></div>
  </div>

</div>

<script src="../../../assets/js/icons.js"></script>
<script src="../lessons.js"></script>
<script src="../../../assets/js/teach/lesson-engine.js"></script>
<script src="../../../assets/js/teach/quiz.js"></script>
<script src="../../../assets/js/teach/widgets.js"></script>
<script>
  TeachWidgets.predict("#predict1", {
    q: "A question that reveals a common misconception.",
    a: ["First option here", "Second option here", "Third option here"],
    c: 0,
    why: "Explain why the correct answer is correct and the others are not."
  });

  TeachWidgets.diagram("#diagram1", {
    boxes: [
      { title: "Step one", lines: ["detail", "detail"] },
      { title: "Step two", lines: ["detail", "detail"] }
    ]
  });

  TeachWidgets.trace("#trace1", {
    code: [
      "line one",
      "line two",
      "line three"
    ],
    steps: [
      { line: 0, vars: { x: "1" } },
      { line: 1, vars: { x: "1", y: "2" } },
      { line: 2, vars: { x: "1", y: "2", z: "3" } }
    ]
  });

  TeachWidgets.fill("#fill1", {
    label: "From memory — fill in the blanks",
    lines: [
      "The first key term is <0>.",
      "The second key term is <1>."
    ],
    blanks: [
      { a: ["term one"], why: "Why this is the answer." },
      { a: ["term two"], why: "Why this is the answer." }
    ]
  });

  /* the quiz — four questions, each with four options */
  TeachQuiz.mount("#quiz", [
    {
      q: "First question?",
      a: ["Option one here", "Option two here", "Option three here", "Option four here"],
      c: 0,
      why: "Why the correct option is correct."
    },
    {
      q: "Second question?",
      a: ["Option one here", "Option two here", "Option three here", "Option four here"],
      c: 1,
      why: "Why the correct option is correct."
    },
    {
      q: "Third question?",
      a: ["Option one here", "Option two here", "Option three here", "Option four here"],
      c: 2,
      why: "Why the correct option is correct."
    },
    {
      q: "Fourth question?",
      a: ["Option one here", "Option two here", "Option three here", "Option four here"],
      c: 3,
      why: "Why the correct option is correct."
    }
  ]);
</script>
</body>
</html>
`;

/* The quiz mount point must exist in the body. */
const withQuiz = lessonHtml.replace(
  '  <div id="lessonNav"></div>',
  '  <div id="quiz"></div>\n\n  <div id="lessonNav"></div>'
);

fs.mkdirSync(path.join(courseDir, "lessons"), { recursive: true });
fs.writeFileSync(filePath, withQuiz, "utf8");

/* ---------- append the manifest entry ---------- */

const entryLine =
  '  { n: ' + nextN + ', id: "' + slug + '", file: "lessons/' + fileName +
  '", title: "' + title + '", topic: "' + topic + '", anim: "' + anim + '" }';

const blockRe = /(window\.TeachLessons\s*=\s*\[)([\s\S]*?)(\n\];)/;
if (!blockRe.test(manifestSrc)) {
  console.error("Could not find window.TeachLessons array in lessons.js — add the entry by hand:");
  console.error(entryLine);
  process.exit(1);
}

const newManifest = manifestSrc.replace(blockRe, (full, open, body, close) => {
  const trimmed = body.replace(/\s+$/, "");
  const needsComma = trimmed.length > 0 && !/,\s*$/.test(trimmed);
  return open + trimmed + (needsComma ? "," : "") + "\n" + entryLine + close;
});

fs.writeFileSync(manifestPath, newManifest, "utf8");

console.log("Created courses/" + courseId + "/lessons/" + fileName);
console.log("Added manifest entry: n=" + nextN + ", id=" + slug + ", topic=" + topic);
console.log("Next: fill in the content, then run `node tools/validate.js`.");

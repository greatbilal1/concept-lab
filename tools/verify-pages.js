#!/usr/bin/env node
/* ============================================================
   Concept Lab — batch page verifier
   ------------------------------------------------------------
   Structural audit of every live course page (hub, lessons,
   reference). This is the layer validate.js does NOT cover:
   validate.js checks DATA (courses.js, glossary, manifests) and
   quiz/widget correctness; this checks the HTML PAGES themselves.

     node tools/verify-pages.js [--course <id>] [--quiet]

   Exit 0 = every page passed. Exit 1 = at least one problem.

   Checks per page type
   --------------------
   ALL pages
     - <!DOCTYPE html>, <html lang>, <meta charset>, viewport
     - a <title>
     - asset paths resolve on disk (every href/src to assets/…)
     - no nested <a> inside <a> (invalid HTML, breaks the hub cards)
     - no leftover scaffold placeholders ("Option one here", "TODO", …)

   LESSON pages (courses/<id>/lessons/*.html)
     - <body class="lesson-body" data-course data-lesson data-lesson-id>
     - data-course matches the folder, data-lesson matches the filename
     - data-lesson-id matches the filename slug
     - required elements: #readFill, #readPct, #miniFill, #miniPct,
       #lessonNav, #courseMap, .lesson-back -> ../course.html
     - the frozen script order (icons, lessons.js, lesson-engine,
       quiz, widgets)
     - a TeachQuiz.mount("#quiz") call and a <div id="quiz">

   HUB pages (courses/<id>/course.html)
     - <body class="lesson-body" data-course="<id>">
     - loads lessons.js and lesson-engine.js
     - has #lessonList, #statDone, #statTotal, #hubFill, #startBtn
     - links to the course's glossary and cheatsheet

   REFERENCE pages (courses/<id>/reference/*.html)
     - <body class="lesson-body" data-course="<id>">
     - loads lessons.js and lesson-engine.js
     - a link back to ../course.html
   ============================================================ */

"use strict";

const path = require("path");
const fs = require("fs");

const ROOT = path.resolve(__dirname, "..");

/* ---------- args ---------- */

function parseArgs(argv) {
  const out = { _: [], course: "", quiet: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--course") out.course = argv[++i] || "";
    else if (a === "--quiet") out.quiet = true;
    else out._.push(a);
  }
  return out;
}

const args = parseArgs(process.argv.slice(2));

/* ---------- load courses.js ---------- */

function loadCourses() {
  const src = fs.readFileSync(path.join(ROOT, "data", "courses.js"), "utf8");
  return new Function("window", src + ";return window.COURSES || [];")({}) || [];
}

const COURSES = loadCourses().filter((c) => c.status === "live");
const selected = args.course ? COURSES.filter((c) => c.id === args.course) : COURSES;

if (args.course && !selected.length) {
  console.error("No live course with id \"" + args.course + "\".");
  process.exit(2);
}

/* ---------- problem collection ---------- */

const problems = [];
function fail(where, msg) { problems.push(where + ": " + msg); }

/* ---------- helpers ---------- */

const PLACEHOLDERS = [
  "Option one here", "Option two here", "Option three here", "Option four here",
  "First option here", "Second option here", "Third option here",
  "One or two sentences that say what this lesson is about",
  "Introduce one major abstraction",
  "State the one thing the learner can now do",
  "One-sentence summary of the course",
  "One-line promise for this course",
  "code or summary here",
  "The single sentence a learner should remember",
  "A question that reveals a common misconception",
  "First question?", "Second question?", "Third question?", "Fourth question?"
];

function checkPlaceholders(where, html) {
  PLACEHOLDERS.forEach((p) => {
    if (html.includes(p)) fail(where, "leftover scaffold placeholder: \"" + p + "\"");
  });
}

/* Every href/src that points into assets/ must exist on disk. */
function checkAssetPaths(where, html, pageDir) {
  const re = /(?:href|src)\s*=\s*"([^"]+)"/g;
  let m;
  const seen = new Set();
  while ((m = re.exec(html))) {
    const url = m[1];
    if (seen.has(url)) continue;
    seen.add(url);
    if (/^(https?:|data:|mailto:|#|javascript:)/.test(url)) continue;
    if (!url.includes("assets/")) continue;
    const clean = url.split("?")[0].split("#")[0];
    const abs = path.resolve(pageDir, clean);
    if (!fs.existsSync(abs)) {
      fail(where, "asset path does not resolve: " + url);
    }
  }
}

/* Nested <a> inside <a> is invalid and breaks card layouts. */
function checkNestedAnchors(where, html) {
  const re = /<a\b[^>]*>([\s\S]*?)<\/a>/g;
  let m;
  while ((m = re.exec(html))) {
    if (/<a\b/i.test(m[1])) {
      fail(where, "nested <a> inside <a>");
      return;
    }
  }
}

function checkHead(where, html) {
  if (!/<!DOCTYPE html>/i.test(html)) fail(where, "missing <!DOCTYPE html>");
  if (!/<html[^>]*\blang\s*=/i.test(html)) fail(where, "missing <html lang=…>");
  if (!/<meta[^>]*charset/i.test(html)) fail(where, "missing <meta charset>");
  if (!/<meta[^>]*name\s*=\s*"viewport"/i.test(html)) fail(where, "missing viewport meta");
  if (!/<title>[^<]+<\/title>/i.test(html)) fail(where, "missing or empty <title>");
}

function checkScriptOrder(where, html) {
  const order = [
    "assets/js/icons.js",
    "lessons.js",
    "assets/js/teach/lesson-engine.js",
    "assets/js/teach/quiz.js",
    "assets/js/teach/widgets.js"
  ];
  let last = -1;
  order.forEach((needle) => {
    const idx = html.indexOf(needle);
    if (idx === -1) {
      fail(where, "missing script: " + needle);
      return;
    }
    if (idx < last) fail(where, "script out of order: " + needle);
    last = idx;
  });
}

/* ---------- per-page checks ---------- */

function verifyLesson(course, file, html) {
  const where = course.id + "/" + file;
  const pageDir = path.join(ROOT, "courses", course.id, "lessons");
  const base = path.basename(file, ".html");
  const numMatch = base.match(/^(\d+)-(.+)$/);

  checkHead(where, html);
  checkAssetPaths(where, html, pageDir);
  checkNestedAnchors(where, html);
  checkPlaceholders(where, html);

  const bodyRe = /<body\b([^>]*)>/i;
  const bm = html.match(bodyRe);
  if (!bm) { fail(where, "no <body> tag"); return; }
  const body = bm[1];
  if (!/class\s*=\s*"[^"]*\blesson-body\b/.test(body)) fail(where, "body missing class=\"lesson-body\"");
  const dc = body.match(/data-course\s*=\s*"([^"]*)"/);
  if (!dc) fail(where, "body missing data-course");
  else if (dc[1] !== course.id) fail(where, "data-course=\"" + dc[1] + "\" != \"" + course.id + "\"");
  const dl = body.match(/data-lesson\s*=\s*"([^"]*)"/);
  if (!dl) fail(where, "body missing data-lesson");
  else if (numMatch && dl[1] !== String(+numMatch[1])) {
    fail(where, "data-lesson=\"" + dl[1] + "\" != filename number " + (+numMatch[1]));
  }
  const di = body.match(/data-lesson-id\s*=\s*"([^"]*)"/);
  if (!di) fail(where, "body missing data-lesson-id");
  else if (numMatch && di[1] !== numMatch[2]) {
    fail(where, "data-lesson-id=\"" + di[1] + "\" != filename slug \"" + numMatch[2] + "\"");
  }

  ["readFill", "readPct", "miniFill", "miniPct", "lessonNav", "courseMap"].forEach((id) => {
    if (!new RegExp('id\\s*=\\s*"' + id + '"').test(html)) fail(where, "missing #" + id);
  });

  if (!/class\s*=\s*"lesson-back"[^>]*href\s*=\s*"\.\.\/course\.html"/.test(html) &&
      !/href\s*=\s*"\.\.\/course\.html"[^>]*class\s*=\s*"lesson-back"/.test(html)) {
    fail(where, ".lesson-back does not link to ../course.html");
  }

  checkScriptOrder(where, html);

  if (!/TeachQuiz\.mount\s*\(\s*"#quiz"/.test(html)) fail(where, "no TeachQuiz.mount(\"#quiz\") call");
  if (!/id\s*=\s*"quiz"/.test(html)) fail(where, "no <div id=\"quiz\">");
}

function verifyHub(course, html) {
  const where = course.id + "/course.html";
  const pageDir = path.join(ROOT, "courses", course.id);

  checkHead(where, html);
  checkAssetPaths(where, html, pageDir);
  checkNestedAnchors(where, html);
  checkPlaceholders(where, html);

  const bm = html.match(/<body\b([^>]*)>/i);
  if (!bm) { fail(where, "no <body> tag"); return; }
  const body = bm[1];
  if (!/class\s*=\s*"[^"]*\blesson-body\b/.test(body)) fail(where, "body missing class=\"lesson-body\"");
  const dc = body.match(/data-course\s*=\s*"([^"]*)"/);
  if (!dc) fail(where, "body missing data-course");
  else if (dc[1] !== course.id) fail(where, "data-course=\"" + dc[1] + "\" != \"" + course.id + "\"");

  ["lessonList", "statDone", "statTotal", "hubFill", "startBtn"].forEach((id) => {
    if (!new RegExp('id\\s*=\\s*"' + id + '"').test(html)) fail(where, "missing #" + id);
  });

  if (!/src\s*=\s*"lessons\.js"/.test(html)) fail(where, "does not load lessons.js");
  if (!/assets\/js\/teach\/lesson-engine\.js/.test(html)) fail(where, "does not load lesson-engine.js");

  if (!html.includes(course.id + "-glossary.html")) fail(where, "no link to the course glossary");
  if (!html.includes(course.id + "-cheatsheet.html")) fail(where, "no link to the course cheatsheet");
}

function verifyReference(course, file, html) {
  const where = course.id + "/" + file;
  const pageDir = path.join(ROOT, "courses", course.id, "reference");

  checkHead(where, html);
  checkAssetPaths(where, html, pageDir);
  checkNestedAnchors(where, html);
  checkPlaceholders(where, html);

  const bm = html.match(/<body\b([^>]*)>/i);
  if (!bm) { fail(where, "no <body> tag"); return; }
  const body = bm[1];
  if (!/class\s*=\s*"[^"]*\blesson-body\b/.test(body)) fail(where, "body missing class=\"lesson-body\"");
  const dc = body.match(/data-course\s*=\s*"([^"]*)"/);
  if (!dc) fail(where, "body missing data-course");
  else if (dc[1] !== course.id) fail(where, "data-course=\"" + dc[1] + "\" != \"" + course.id + "\"");

  if (!/href\s*=\s*"\.\.\/course\.html"/.test(html)) fail(where, "no link back to ../course.html");

  /* A glossary renders from window.TeachGlossary, so it must load the
     manifest and the engine. A cheatsheet is static and needs neither. */
  const isGlossary = /-glossary\.html$/.test(file);
  if (isGlossary) {
    if (!/src\s*=\s*"\.\.\/lessons\.js"/.test(html)) fail(where, "glossary does not load ../lessons.js");
    if (!/assets\/js\/teach\/lesson-engine\.js/.test(html)) fail(where, "glossary does not load lesson-engine.js");
  }
}

/* ---------- run ---------- */

let pages = 0;

selected.forEach((course) => {
  const dir = path.join(ROOT, "courses", course.id);

  const hub = path.join(dir, "course.html");
  if (fs.existsSync(hub)) { verifyHub(course, fs.readFileSync(hub, "utf8")); pages++; }
  else fail(course.id, "missing course.html");

  const lessonsDir = path.join(dir, "lessons");
  if (fs.existsSync(lessonsDir)) {
    fs.readdirSync(lessonsDir).filter((f) => f.endsWith(".html")).sort().forEach((f) => {
      verifyLesson(course, "lessons/" + f, fs.readFileSync(path.join(lessonsDir, f), "utf8"));
      pages++;
    });
  }

  const refDir = path.join(dir, "reference");
  if (fs.existsSync(refDir)) {
    fs.readdirSync(refDir).filter((f) => f.endsWith(".html")).sort().forEach((f) => {
      verifyReference(course, "reference/" + f, fs.readFileSync(path.join(refDir, f), "utf8"));
      pages++;
    });
  }
});

/* ---------- report ---------- */

if (problems.length) {
  problems.forEach((p) => console.log("  ✗ " + p));
  console.log("");
  console.log(problems.length + " problem(s) across " + pages + " page(s).");
  process.exit(1);
}

if (!args.quiet) {
  console.log("Page verification passed");
  console.log("");
  console.log("courses: " + selected.length);
  console.log("pages:   " + pages);
}
process.exit(0);

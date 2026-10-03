"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "../..");

function pad2(n) { return String(n).padStart(2, "0"); }
function pad4(n) { return String(n).padStart(4, "0"); }

function generateCourse(courseData) {
  const { id, title, num, emoji, desc, topics, lessons, glossaryGroups, cheatsheetSections, mission, notes, resources } = courseData;
  const courseDir = path.join(ROOT, "courses", id);
  const lessonsDir = path.join(courseDir, "lessons");
  const refDir = path.join(courseDir, "reference");
  const recordsDir = path.join(courseDir, "learning-records");

  fs.mkdirSync(lessonsDir, { recursive: true });
  fs.mkdirSync(refDir, { recursive: true });
  fs.mkdirSync(recordsDir, { recursive: true });

  // 1. lessons.js
  const manifestLessons = lessons.map(l => {
    return `  { n: ${l.n}, id: "${l.id}", file: "lessons/${pad4(l.n)}-${l.id}.html", title: "${l.title.replace(/"/g, '\\"')}", topic: "${l.topic.replace(/"/g, '\\"')}", anim: "${l.anim || 'Generic'}" }`;
  }).join(",\n");

  const manifestGlossary = glossaryGroups.map(g => {
    const terms = g.terms.map(t => {
      const defEscaped = t.def.replace(/"/g, '\\"');
      const tagsJson = JSON.stringify(t.tags || []);
      return `      { term: "${t.term.replace(/"/g, '\\"')}", def: "${defEscaped}", lesson: ${t.lesson}, tags: ${tagsJson} }`;
    }).join(",\n");
    return `  {\n    id: "${g.id}", title: "${g.title.replace(/"/g, '\\"')}",\n    terms: [\n${terms}\n    ]\n  }`;
  }).join(",\n");

  const lessonsJsContent = `/* ============================================================
   ${title} — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
${manifestLessons}
];

/* ============================================================
   ${title} — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
${manifestGlossary}
];
`;
  fs.writeFileSync(path.join(courseDir, "lessons.js"), lessonsJsContent, "utf8");

  // 2. course.html
  const courseHtmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} — Lesson Map</title>
<link rel="icon" type="image/svg+xml" href="../../assets/icons/favicon.svg">
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
<body class="lesson-body" data-course="${id}">

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
    <h1 class="hub-title">${title}</h1>
    <p class="hub-lede">${desc}</p>

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
    <a href="reference/${id}-glossary.html">📖 Glossary</a>
    <a href="reference/${id}-cheatsheet.html">⚡ Cheat sheet</a>
    <a href="../../index.html">🧩 All courses</a>
    <button class="reset-link" id="resetBtn" type="button">Reset my progress</button>
  </div>

</div>

<script src="lessons.js"></script>
<script src="../../assets/js/teach/lesson-engine.js"></script>
<script>
(function () {
  TeachLesson.init({ course: "${id}", lessons: window.TeachLessons || [] });

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
        (t.items.length === 1 ? " lesson" : " lessons") + "</span></div>" + cards + "</div>";
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
  fs.writeFileSync(path.join(courseDir, "course.html"), courseHtmlContent, "utf8");

  // 3. reference/<id>-glossary.html
  const glossaryHtmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} — Glossary</title>
<link rel="icon" type="image/svg+xml" href="../../../assets/icons/favicon.svg">
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
<body class="lesson-body" data-course="${id}">

<div class="lesson-wrap">

  <span class="lesson-kicker">Reference · Glossary</span>
  <h1 class="lesson-title">${title} — Glossary</h1>
  <p class="lesson-lede">
    The vocabulary of this course, in one place. Every lesson uses these exact
    terms — if a lesson uses a word, it is defined here.
  </p>

  <div class="ref-toc" id="courseGlossaryToc"></div>
  <div id="courseGlossary"></div>

  <div class="lesson-foot">
    <div class="links">
      <a href="${id}-cheatsheet.html">⚡ Cheat sheet</a>
      <a href="../course.html">← Course map</a>
    </div>
  </div>

</div>

<script src="../../../assets/js/icons.js"></script>
<script src="../lessons.js"></script>
<script src="../../../assets/js/teach/lesson-engine.js"></script>
<script>
  TeachLesson.init({ course: "${id}", lessons: window.TeachLessons || [] });
  TeachLesson.renderCourseGlossary();
</script>
</body>
</html>
`;
  fs.writeFileSync(path.join(refDir, `${id}-glossary.html`), glossaryHtmlContent, "utf8");

  // 4. reference/<id>-cheatsheet.html
  const cheatToc = cheatsheetSections.map((sec, i) => {
    return `    <a href="#sec-${i + 1}">${sec.title}</a>`;
  }).join("\n");

  const cheatBody = cheatsheetSections.map((sec, i) => {
    return `  <h2 id="sec-${i + 1}"><span class="n">${i + 1}</span>${sec.title}</h2>
  <div class="snippet">
    <div class="lbl">${sec.label}</div>
    <pre><code>${sec.code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>
  </div>
  <p class="see">See <a href="../lessons/${pad4(sec.lessonN)}-${sec.lessonSlug}.html">Lesson ${pad2(sec.lessonN)} — ${sec.lessonTitle}</a>.</p>`;
  }).join("\n\n");

  const cheatsheetHtmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} — Cheat Sheet</title>
<link rel="icon" type="image/svg+xml" href="../../../assets/icons/favicon.svg">
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
<body class="lesson-body" data-course="${id}">

<div class="lesson-wrap">

  <span class="lesson-kicker">Reference · Cheat sheet</span>
  <h1 class="lesson-title">${title} — Cheat Sheet</h1>
  <p class="lesson-lede">
    The whole course on one page. Every snippet links back to the lesson that
    teaches it.
  </p>

  <div class="ref-toc">
${cheatToc}
  </div>

${cheatBody}

  <div class="lesson-foot">
    <div class="links">
      <a href="${id}-glossary.html">📖 Glossary</a>
      <a href="../course.html">← Course map</a>
    </div>
  </div>

</div>
</body>
</html>
`;
  fs.writeFileSync(path.join(refDir, `${id}-cheatsheet.html`), cheatsheetHtmlContent, "utf8");

  // 5. Lessons
  lessons.forEach(l => {
    const fileName = `${pad4(l.n)}-${l.id}.html`;
    const filePath = path.join(lessonsDir, fileName);

    const quizScriptItems = l.quiz.map(q => {
      const optsJson = JSON.stringify(q.a);
      return `    {
      q: "${q.q.replace(/"/g, '\\"')}",
      a: ${optsJson},
      c: ${q.c},
      why: "${q.why.replace(/"/g, '\\"')}"
    }`;
    }).join(",\n");

    const predictScript = `  TeachWidgets.predict("#predict1", {
    q: "${l.predict.q.replace(/"/g, '\\"')}",
    a: ${JSON.stringify(l.predict.a)},
    c: ${l.predict.c},
    why: "${l.predict.why.replace(/"/g, '\\"')}"
  });`;

    const diagramScript = `  TeachWidgets.diagram("#diagram1", {
    boxes: ${JSON.stringify(l.diagram.boxes, null, 6)}
  });`;

    const traceScript = `  TeachWidgets.trace("#trace1", {
    code: ${JSON.stringify(l.trace.code, null, 6)},
    steps: ${JSON.stringify(l.trace.steps, null, 6)}
  });`;

    const fillScript = `  TeachWidgets.fill("#fill1", {
    label: "${l.fill.label || 'From memory — fill in the blanks'}",
    lines: ${JSON.stringify(l.fill.lines, null, 6)},
    blanks: ${JSON.stringify(l.fill.blanks, null, 6)}
  });`;

    const nextTasksList = l.nextTasks.map(t => `    <li>${t}</li>`).join("\n");

    const lessonHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Lesson ${pad2(l.n)} — ${l.title}</title>
<link rel="icon" type="image/svg+xml" href="../../../assets/icons/favicon.svg">
<link rel="stylesheet" href="../../../assets/css/tokens.css">
<link rel="stylesheet" href="../../../assets/css/components.css">
</head>
<body class="lesson-body" data-course="${id}" data-lesson="${l.n}" data-lesson-id="${l.id}">

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

  <span class="lesson-kicker"><span class="n">Lesson ${pad2(l.n)}</span> · ${l.topic}</span>

  <h1 class="lesson-title">${l.title}</h1>
  <p class="lesson-lede">
    ${l.lede}
  </p>

  <div class="lesson-meta">
    <span><b>Time</b> ~10 min</span>
    <span><b>Win</b> ${l.winShort}</span>
    <span><b>Mission link</b> ${l.missionLink}</span>
  </div>

  <h2><span class="n">1</span>${l.sec1.title}</h2>
  ${l.sec1.content}

  <div class="note">
    <span class="note-label">Key idea</span>
    ${l.sec1.keyIdea}
  </div>

  <div id="predict1"></div>

  <h2><span class="n">2</span>${l.sec2.title}</h2>
  ${l.sec2.content}

  <div id="diagram1"></div>

  <h2><span class="n">3</span>${l.sec3.title}</h2>
  ${l.sec3.content}

  <div id="trace1"></div>

  <h2><span class="n">4</span>Practice</h2>
  <p>${l.practiceIntro || 'Recall the essential ideas before attempting the quiz.'}</p>

  <div id="fill1"></div>

  <div class="win">
    <h3>✓ Your win for today</h3>
    <p>${l.win}</p>
  </div>

  <h2><span class="n">5</span>Do this next</h2>
  <ol>
${nextTasksList}
  </ol>

  <div class="note">
    <span class="note-label">Primary source</span>
    ${l.primarySource}
  </div>

  <div class="ask-teacher">
    <b>Stuck, or curious?</b> Ask your teacher — there are no bad questions here.
  </div>

  <div id="quiz"></div>

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
${predictScript}

${diagramScript}

${traceScript}

${fillScript}

  TeachQuiz.mount("#quiz", [
${quizScriptItems}
  ]);
</script>
</body>
</html>
`;
    fs.writeFileSync(filePath, lessonHtml, "utf8");
  });

  // 6. Markdown docs
  fs.writeFileSync(path.join(courseDir, "MISSION.md"), mission, "utf8");
  fs.writeFileSync(path.join(courseDir, "NOTES.md"), notes, "utf8");
  fs.writeFileSync(path.join(courseDir, "RESOURCES.md"), resources, "utf8");
  fs.writeFileSync(path.join(recordsDir, `0001-${id}.md`), `# 0001 — ${title} course created\n\n- **Date:** ${new Date().toISOString().slice(0, 10)}\n- **Milestone:** All 8 lessons, glossary, cheatsheet, and hub created.\n\n## What was built\n- Complete 8-lesson curriculum with interactive widgets and verified quizzes.\n- Reference glossary and cheat sheet.\n`, "utf8");

  console.log(`Generated course ${id} (${title}) successfully.`);
}

module.exports = { generateCourse };

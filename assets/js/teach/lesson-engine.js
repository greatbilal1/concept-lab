/* ============================================================
   Concept Lab — lesson engine
   ------------------------------------------------------------
   One shared script every course links. It gives the lessons the
   same behaviour the course pages have, plus the gating that
   turns a pile of pages into a course:

     - Python syntax highlighting on <pre><code> blocks
     - copy buttons on every code block
     - reading-progress bar + "back to course" pill
     - lesson completion tracking (localStorage)
     - GATING: a lesson is locked until the previous one is done
     - a "Mark lesson complete" control that unlocks the next one
     - the course map (prev / next / locked) in the footer

   A lesson opts in with:

     <body class="lesson-body" data-course="oop" data-lesson="3"
           data-lesson-id="self-and-attributes">

   `data-course` namespaces progress, so two courses never collide.
   The lesson number is 1-based and must match the order in the
   course's own manifest (courses/<id>/lessons.js). Progress is
   stored under "teachlab:<course>:progress" as a JSON array of
   completed numbers.

   Nothing is sent anywhere — it is all localStorage.
   ============================================================ */
(function (global) {
  "use strict";

  /* ---------- course identity ----------
     Read from <body data-course="…">. Falls back to "default" so a
     page that forgets the attribute still works (just shares one
     progress bucket). */
  function courseId() {
    var b = global.document && global.document.body;
    return (b && b.dataset && b.dataset.course) || "default";
  }

  var STORE_KEY = "teachlab:" + courseId() + ":progress";

  /* ---------- manifest ----------
     The lesson list can arrive two ways:
       1. injected:  TeachLesson.init({ course: "oop", lessons: [...] })
       2. global:    window.TeachLessons  (a course's lessons.js)
     Injection wins, so a hub can load any course's manifest by name
     without the engine knowing which course it is. */
  var injected = null;

  function lessons() {
    return injected || global.TeachLessons || [];
  }

  /* ---------- path resolution ----------
     Manifest `file` paths are relative to the COURSE folder
     (e.g. "lessons/0002-self-and-attributes.html"). Pages live at
     different depths inside the course folder:

       courses/oop/course.html          -> depth 0 (course root)
       courses/oop/lessons/0001-*.html  -> depth 1 (one level down)
       courses/oop/reference/*.html     -> depth 1

     So a course-relative path needs "../" only from a subfolder.
     Detect the depth from the current page's own path. */
  function rootPrefix() {
    var path = (global.location && global.location.pathname) || "";
    return /\/(lessons|reference)\//.test(path) ? "../" : "";
  }

  function hrefFor(file) {
    return rootPrefix() + file;
  }

  /* ---------- progress store ---------- */

  function readProgress() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      var arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr : [];
    } catch (e) {
      return [];
    }
  }

  function writeProgress(arr) {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(arr));
    } catch (e) { /* private mode — gating degrades to "all open" */ }
  }

  function isDone(n) {
    return readProgress().indexOf(n) !== -1;
  }

  function markDone(n) {
    var arr = readProgress();
    if (arr.indexOf(n) === -1) {
      arr.push(n);
      arr.sort(function (a, b) { return a - b; });
      writeProgress(arr);
    }
  }

  function clearProgress() {
    writeProgress([]);
  }

  /* ---------- syntax highlighting (same tokens as course.css) ---------- */

  var PY_KEYWORDS = ("False None True and as assert async await break class continue def del elif else except " +
    "finally for from global if import in is lambda nonlocal not or pass raise return try while with yield " +
    "match case").split(" ");

  var PY_BUILTINS = ("print len range str int float bool list dict set tuple type isinstance issubclass " +
    "super self cls object enumerate zip map filter sum min max abs sorted reversed open input " +
    "ValueError TypeError Exception AttributeError KeyError IndexError").split(" ");

  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function highlightPython(src) {
    var out = "";
    var i = 0;
    var n = src.length;

    function isWordChar(c) { return /[A-Za-z0-9_]/.test(c); }

    while (i < n) {
      var c = src[i];

      if (c === "#") {
        var j = src.indexOf("\n", i);
        if (j === -1) j = n;
        out += '<span class="tok-com">' + escapeHtml(src.slice(i, j)) + "</span>";
        i = j;
        continue;
      }

      if (c === '"' || c === "'") {
        var quote = c;
        var triple = src.slice(i, i + 3) === quote + quote + quote;
        var k = i + (triple ? 3 : 1);
        while (k < n) {
          if (src[k] === "\\") { k += 2; continue; }
          if (triple) {
            if (src.slice(k, k + 3) === quote + quote + quote) { k += 3; break; }
          } else if (src[k] === quote || src[k] === "\n") {
            k += 1;
            break;
          }
          k += 1;
        }
        out += '<span class="tok-str">' + escapeHtml(src.slice(i, k)) + "</span>";
        i = k;
        continue;
      }

      if (c === "@" && isWordChar(src[i + 1] || "")) {
        var d = i + 1;
        while (d < n && (isWordChar(src[d]) || src[d] === ".")) d++;
        out += '<span class="tok-dec">' + escapeHtml(src.slice(i, d)) + "</span>";
        i = d;
        continue;
      }

      if (/[0-9]/.test(c)) {
        var m = i;
        while (m < n && /[0-9._]/.test(src[m])) m++;
        out += '<span class="tok-num">' + escapeHtml(src.slice(i, m)) + "</span>";
        i = m;
        continue;
      }

      if (/[A-Za-z_]/.test(c)) {
        var w = i;
        while (w < n && isWordChar(src[w])) w++;
        var word = src.slice(i, w);
        var cls = null;
        if (PY_KEYWORDS.indexOf(word) !== -1) cls = "tok-kw";
        else if (word === "self" || word === "cls") cls = "tok-self";
        else if (PY_BUILTINS.indexOf(word) !== -1) cls = "tok-bi";
        else if (src[w] === "(") cls = "tok-fn";
        else if (/^[A-Z]/.test(word)) cls = "tok-cls";
        out += cls ? '<span class="' + cls + '">' + escapeHtml(word) + "</span>" : escapeHtml(word);
        i = w;
        continue;
      }

      if (/[+\-*/%=<>!&|^~]/.test(c)) {
        out += '<span class="tok-op">' + escapeHtml(c) + "</span>";
        i += 1;
        continue;
      }
      if (/[(){}\[\],:.;]/.test(c)) {
        out += '<span class="tok-punc">' + escapeHtml(c) + "</span>";
        i += 1;
        continue;
      }

      out += escapeHtml(c);
      i += 1;
    }
    return out;
  }

  function highlightAll(root) {
    (root || document).querySelectorAll("pre code").forEach(function (code) {
      if (code.dataset.hl) return;
      code.dataset.hl = "1";
      code.innerHTML = highlightPython(code.textContent);
    });
  }

  /* ---------- copy buttons ---------- */

  function addCopyButtons(root) {
    (root || document).querySelectorAll("pre").forEach(function (pre) {
      if (pre.querySelector(".copy-btn")) return;
      var btn = document.createElement("button");
      btn.className = "copy-btn";
      btn.type = "button";
      btn.textContent = "Copy";
      btn.addEventListener("click", function () {
        var code = pre.querySelector("code");
        var text = code ? code.textContent : pre.textContent;
        var done = function () {
          btn.textContent = "Copied";
          btn.classList.add("done");
          setTimeout(function () {
            btn.textContent = "Copy";
            btn.classList.remove("done");
          }, 1400);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, done);
        } else {
          var ta = document.createElement("textarea");
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand("copy"); } catch (e) {}
          document.body.removeChild(ta);
          done();
        }
      });
      pre.appendChild(btn);
    });
  }

  /* ---------- reading progress ---------- */

  function initProgress() {
    var fill = document.getElementById("readFill");
    var pill = document.getElementById("readPct");
    if (!fill && !pill) return;
    function update() {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      var p = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
      var pct = Math.round(p * 100) + "%";
      if (fill) fill.style.width = pct;
      if (pill) pill.textContent = pct;
    }
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  /* ---------- gating ---------- */

  /* Master switch. While the course is still being developed, lessons
     should all be open. Flip this to `true` to re-enable sequential
     locking (lesson N unlocks only after N-1 is marked complete). */
  var GATING_ENABLED = false;

  /* A lesson is unlocked when it is the first, or the previous one
     is complete. `force` (from ?unlock=all) opens everything. */
  function isUnlocked(n, lessons) {
    if (!GATING_ENABLED) return true;
    if (n <= 1) return true;
    if (global.TeachLesson && global.TeachLesson.forceUnlock) return true;
    return isDone(n - 1);
  }

  function applyGate() {
    var body = document.body;
    var n = parseInt(body.dataset.lesson, 10);
    if (isNaN(n)) return;
    var list = lessons();
    if (isUnlocked(n, list)) return;

    /* Locked: replace the page with a gate card. */
    var prev = list[n - 2];
    var wrap = document.querySelector(".lesson-wrap");
    if (!wrap) return;
    wrap.innerHTML =
      '<div class="gate">' +
        '<div class="gate-ico">🔒</div>' +
        '<h1 class="gate-title">This lesson is locked</h1>' +
        '<p class="gate-lede">Lessons open in order, so each one builds on the last. ' +
          'Finish the previous lesson to unlock this one.</p>' +
        (prev
          ? '<a class="gate-btn" href="' + hrefFor(prev.file) + '">Go to Lesson ' +
              String(prev.n).padStart(2, "0") + " — " + prev.title + "</a>"
          : "") +
        '<a class="gate-link" href="' + hrefFor("course.html") + '">← Back to the course map</a>' +
      "</div>";
    document.body.classList.add("gated");
  }

  /* ---------- completion control + course map ---------- */

  function renderFooterNav() {
    var host = document.getElementById("lessonNav");
    if (!host) return;
    var list = lessons();
    var n = parseInt(document.body.dataset.lesson, 10);
    if (isNaN(n) || !list.length) return;

    var prev = list[n - 2];
    var next = list[n];
    var done = isDone(n);

    var html = '<div class="lnav">';
    html += prev
      ? '<a class="lnav-prev" href="' + hrefFor(prev.file) + '">← ' + String(prev.n).padStart(2, "0") + " " + prev.title + "</a>"
      : '<span class="lnav-prev disabled">← Start of course</span>';

    html += '<button class="lnav-done' + (done ? " is-done" : "") + '" id="markDone" type="button">' +
      (done ? "✓ Completed" : "Mark lesson complete") + "</button>";

    if (next) {
      var unlocked = !GATING_ENABLED || isDone(n);
      html += unlocked
        ? '<a class="lnav-next" href="' + hrefFor(next.file) + '">' + String(next.n).padStart(2, "0") + " " + next.title + " →</a>"
        : '<span class="lnav-next locked">🔒 ' + String(next.n).padStart(2, "0") + " " + next.title + "</span>";
    } else {
      html += '<span class="lnav-next disabled">End of course →</span>';
    }
    html += "</div>";

    host.innerHTML = html;

    var btn = document.getElementById("markDone");
    if (btn) {
      btn.addEventListener("click", function () {
        if (isDone(n)) {
          /* allow un-completing so the user can re-lock if they want */
          var arr = readProgress().filter(function (x) { return x !== n; });
          writeProgress(arr);
        } else {
          markDone(n);
        }
        renderFooterNav();
        renderCourseMap();
      });
    }
  }

  function renderCourseMap() {
    var host = document.getElementById("courseMap");
    if (!host) return;
    var list = lessons();
    if (!list.length) return;
    var current = parseInt(document.body.dataset.lesson, 10);

    host.innerHTML = list.map(function (l) {
      var done = isDone(l.n);
      var unlocked = isUnlocked(l.n, list);
      var cls = "cm-item";
      if (done) cls += " done";
      if (l.n === current) cls += " current";
      if (!unlocked) cls += " locked";
      var inner = '<span class="cm-n">' + String(l.n).padStart(2, "0") + "</span>" +
        '<span class="cm-t">' + l.title + "</span>" +
        '<span class="cm-s">' + (done ? "✓" : (unlocked ? "→" : "🔒")) + "</span>";
      return unlocked
        ? '<a class="' + cls + '" href="' + hrefFor(l.file) + '">' + inner + "</a>"
        : '<span class="' + cls + '">' + inner + "</span>";
    }).join("");
  }

  /* ---------- course glossary ----------
     A course's reference glossary page is a shell: it declares
     <div id="courseGlossary"></div> and this renders the term list
     from the course's own manifest (window.TeachGlossary, defined
     in courses/<id>/lessons.js).

     Each entry is { id, title, terms: [{ term, def, lesson, tags }] }.
     `lesson` is a 1-based lesson number, resolved to a real link via
     the manifest, so a term can never point at a lesson that moved.

     The same data feeds the site-wide glossary (data/glossary.js
     links back here), so the term list is written exactly once. */
  function glossary() {
    return global.TeachGlossary || [];
  }

  function renderCourseGlossary() {
    var host = document.getElementById("courseGlossary");
    if (!host) return;
    var groups = glossary();
    if (!groups.length) return;

    var list = lessons();

    function lessonLink(n) {
      var l = null;
      for (var i = 0; i < list.length; i++) if (list[i].n === n) l = list[i];
      if (!l) return "";
      return '<span class="see">See <a href="' + hrefFor(l.file) + '">Lesson ' +
        String(l.n).padStart(2, "0") + " — " + l.title + "</a></span>";
    }

    /* table of contents, one chip per group */
    var toc = document.getElementById("courseGlossaryToc");
    if (toc) {
      toc.innerHTML = groups.map(function (g) {
        return '<a href="#' + escapeHtml(g.id) + '">' + g.title + "</a>";
      }).join("");
    }

    host.innerHTML = groups.map(function (g) {
      var terms = (g.terms || []).map(function (t) {
        return '<div class="gloss">' +
          "<dt>" + t.term + "</dt>" +
          "<dd>" + t.def + lessonLink(t.lesson) + "</dd>" +
        "</div>";
      }).join("");
      return '<h2 id="' + escapeHtml(g.id) + '">' + g.title + "</h2>" +
        "<dl>" + terms + "</dl>";
    }).join("");
  }

  /* ---------- boot ---------- */

  function boot() {
    /* ?unlock=all is a teacher escape hatch for previewing */
    try {
      var params = new URLSearchParams(location.search);
      if (params.get("unlock") === "all") global.TeachLesson.forceUnlock = true;
    } catch (e) {}

    applyGate();
    if (document.body.classList.contains("gated")) return;

    highlightAll();
    addCopyButtons();
    initProgress();
    renderFooterNav();
    renderCourseMap();
    renderCourseGlossary();
  }

  global.TeachLesson = {
    isDone: isDone,
    markDone: markDone,
    clearProgress: clearProgress,
    isUnlocked: isUnlocked,
    forceUnlock: false,
    hrefFor: hrefFor,
    lessons: lessons,
    /* Inject a manifest (and optionally a course id) before boot.
       Call this from a hub that loads a course's lessons.js itself. */
    init: function (opts) {
      opts = opts || {};
      if (opts.lessons) injected = opts.lessons;
      if (opts.course) STORE_KEY = "teachlab:" + opts.course + ":progress";
      return global.TeachLesson;
    },
    highlightAll: highlightAll,
    addCopyButtons: addCopyButtons,
    glossary: glossary,
    renderCourseGlossary: renderCourseGlossary
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})(window);
(function() {
  var rootPath = "../../";
  var engineScript = document.querySelector('script[src*="lesson-engine.js"]');
  if (engineScript) {
    rootPath = engineScript.src.split('assets/js/teach/lesson-engine.js')[0];
  }
  var s = document.createElement("script");
  s.src = rootPath + "assets/js/chat-buddy.js";
  document.head.appendChild(s);
})();

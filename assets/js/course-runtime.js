/* ============================================================
   Concept Lab — generic course page runtime
   ------------------------------------------------------------
   Everything that is specific to a course *page* rather than to
   the catalogue, and that is the SAME for every course:

     - Python syntax highlighting
     - copy buttons on <pre> blocks
     - reading-progress bar + sidebar scroll-spy
     - back-to-top button
     - starting the animation stages the renderer created

   Course-specific interactive widgets (quiz / lab / risk) are
   NOT hard-coded here. They are supplied as data through the
   global `window.COURSE_WIDGETS`, keyed by course id, e.g.

     window.COURSE_WIDGETS = {
       oop: {
         quiz: [ { q, a: [...], c: <index> }, ... ],
         lab:  { starter: "..." },
         risk: { ... }
       }
     };

   A course page opts in by setting <body data-course="<id>">.
   If no widget data exists for the course, the widget areas are
   simply left empty — no errors.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Python syntax highlighting ---------- */

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

    function isWordChar(c) {
      return /[A-Za-z0-9_]/.test(c);
    }

    while (i < n) {
      var c = src[i];

      /* comment */
      if (c === "#") {
        var j = src.indexOf("\n", i);
        if (j === -1) j = n;
        out += '<span class="tok-com">' + escapeHtml(src.slice(i, j)) + "</span>";
        i = j;
        continue;
      }

      /* string */
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

      /* decorator */
      if (c === "@" && isWordChar(src[i + 1] || "")) {
        var d = i + 1;
        while (d < n && (isWordChar(src[d]) || src[d] === ".")) d++;
        out += '<span class="tok-dec">' + escapeHtml(src.slice(i, d)) + "</span>";
        i = d;
        continue;
      }

      /* number */
      if (/[0-9]/.test(c)) {
        var m = i;
        while (m < n && /[0-9._]/.test(src[m])) m++;
        out += '<span class="tok-num">' + escapeHtml(src.slice(i, m)) + "</span>";
        i = m;
        continue;
      }

      /* identifier / keyword */
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

      /* operators / punctuation */
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

  function highlightAll() {
    document.querySelectorAll("pre code").forEach(function (code) {
      if (code.dataset.hl) return;
      code.dataset.hl = "1";
      code.innerHTML = highlightPython(code.textContent);
    });
  }

  /* ---------- copy buttons ---------- */

  function addCopyButtons() {
    document.querySelectorAll("pre").forEach(function (pre) {
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

  /* ---------- progress bar + sidebar scroll-spy ---------- */

  function initProgress() {
    var fill = document.getElementById("readFill");
    var pill = document.getElementById("readPill");
    var pct = document.getElementById("readPct");
    var bar = document.getElementById("bar");
    var navLinks = [].slice.call(document.querySelectorAll("#courseNav a"));
    var sections = navLinks.map(function (a) {
      return document.getElementById(a.getAttribute("href").slice(1));
    }).filter(Boolean);

    function update() {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      var p = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
      var pctText = Math.round(p * 100) + "%";
      if (fill) fill.style.width = pctText;
      if (bar) bar.style.width = pctText;
      if (pct) pct.textContent = pctText;
      if (pill) pill.classList.toggle("done", p > 0.98);

      /* scroll-spy */
      var current = null;
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top <= 140) current = i;
      }
      navLinks.forEach(function (a, i) {
        a.classList.toggle("active", i === current);
      });
    }

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  /* ---------- back to top ---------- */

  function initToTop() {
    var toTop = document.getElementById("toTop");
    if (!toTop) return;
    window.addEventListener("scroll", function () {
      toTop.classList.toggle("show", window.scrollY > 500);
    }, { passive: true });
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- animation stages ----------
     Delegated to the shared assets/js/anim/start.js module, which
     finds every [data-anim] element on the page and resolves its
     scene from the namespace in <body data-course>. */

  function startExplainers() {
    if (window.Animations) window.Animations.start(document);
  }

  /* ---------- course-specific widgets (data-driven) ----------
     Widget data lives in window.COURSE_WIDGETS[courseId]. The
     runtime only knows how to *render* the shapes; it never
     contains course content itself. */

  function widgetsFor(courseId) {
    var all = window.COURSE_WIDGETS || {};
    return all[courseId] || {};
  }

  function courseId() {
    return (document.body && document.body.dataset.course) || "";
  }

  var answers = {};

  function initQuiz(quiz) {
    var area = document.getElementById("quizArea");
    if (!area || !quiz || !quiz.length) return;
    area.innerHTML = "";
    quiz.forEach(function (item, i) {
      var wrap = document.createElement("div");
      wrap.className = "card";
      var h = document.createElement("h3");
      h.textContent = (i + 1) + ". " + item.q;
      wrap.appendChild(h);
      item.a.forEach(function (choice, j) {
        var btn = document.createElement("button");
        btn.className = "choice";
        btn.type = "button";
        btn.textContent = choice;
        btn.addEventListener("click", function () {
          answers[i] = j;
          wrap.querySelectorAll(".choice").forEach(function (b) {
            b.classList.toggle("picked", b === btn);
          });
        });
        wrap.appendChild(btn);
      });
      area.appendChild(wrap);
    });
  }

  function gradeQuiz(quiz) {
    var result = document.getElementById("quizResult");
    if (!result || !quiz || !quiz.length) return;
    var score = 0;
    quiz.forEach(function (item, i) {
      if (answers[i] === item.c) score++;
    });
    var pct = Math.round((score / quiz.length) * 100);
    result.textContent = "You scored " + score + " / " + quiz.length + " (" + pct + "%). " +
      (pct >= 75 ? "Solid — you have the mental model." : "Worth re-reading the sections above.");
  }

  function show(id) {
    var el = document.getElementById(id);
    if (el) el.classList.toggle("hidden");
  }

  function runRisk(risk) {
    var out = document.getElementById("riskOutput");
    if (!out || !risk) return;
    var country = (document.getElementById("country") || {}).value || "";
    var base = parseInt((document.getElementById("risk") || {}).value, 10);
    if (isNaN(base)) base = 0;
    var score = base;
    if ((risk.highRiskCountries || []).indexOf(country) !== -1) score += (risk.bump || 20);
    score = Math.min(score, 100);
    out.textContent = "Final score: " + score + "  \u2022  High risk: " + (score >= 70 ? "yes" : "no");
  }

  /* A deliberately tiny Python-ish interpreter: enough to run the
     lab examples, not a real Python. */
  function runLab() {
    var out = document.getElementById("labOutput");
    var src = (document.getElementById("labCode") || {}).value || "";
    if (!out) return;
    var lines = [];
    var classes = {};
    var vars = {};
    var currentClass = null;

    src.split("\n").forEach(function (raw) {
      var line = raw.replace(/\t/g, "    ");
      var indent = line.length - line.trimStart().length;
      var t = line.trim();
      if (!t || t.charAt(0) === "#") return;

      var mClass = t.match(/^class\s+(\w+)/);
      if (mClass) { currentClass = mClass[1]; classes[currentClass] = {}; return; }

      var mAttr = t.match(/^(\w+)\s*=\s*(.+)$/);
      if (mAttr && indent > 0 && currentClass) {
        classes[currentClass][mAttr[1]] = mAttr[2].replace(/^["']|["']$/g, "");
        return;
      }

      var mInst = t.match(/^(\w+)\s*=\s*(\w+)\(\)$/);
      if (mInst) { vars[mInst[1]] = mInst[2]; return; }

      var mPrint = t.match(/^print\((.+)\)$/);
      if (mPrint) {
        var expr = mPrint[1].trim();
        var mDot = expr.match(/^(\w+)\.(\w+)$/);
        if (mDot) {
          var cls = vars[mDot[1]];
          var val = cls && classes[cls] ? classes[cls][mDot[2]] : undefined;
          lines.push(val !== undefined ? val : "<unknown>");
        } else {
          lines.push(expr.replace(/^["']|["']$/g, ""));
        }
        return;
      }
      lines.push("(skipped) " + t);
    });

    out.textContent = lines.length ? lines.join("\n") : "Nothing to run.";
  }

  /* ---------- boot ---------- */

  function boot() {
    var w = widgetsFor(courseId());
    highlightAll();
    addCopyButtons();
    initProgress();
    initToTop();
    initQuiz(w.quiz);
    startExplainers();
  }

  /* expose the inline onclick handlers used in the markup */
  window.show = show;
  window.gradeQuiz = function () { gradeQuiz(widgetsFor(courseId()).quiz); };
  window.runRisk = function () { runRisk(widgetsFor(courseId()).risk); };
  window.runLab = runLab;

  document.addEventListener("conceptlab:rendered", function () {
    highlightAll();
    addCopyButtons();
    initProgress();
    startExplainers();
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();

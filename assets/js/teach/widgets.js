/* ============================================================
   Concept Lab — interactive widgets
   ------------------------------------------------------------
   Small, self-contained learning widgets a lesson can mount,
   shared by every course. Each one is a tight feedback loop:
   the learner acts, and gets an answer immediately.

     TeachWidgets.predict("#sel", {
       q: "What does this print?",
       a: ["2", "3", "error"],
       c: 1,
       why: "…"
     });

     TeachWidgets.fill("#sel", {
       lines: ["class Book:", "    def __init__(self, title):", "        <0>.title = title"],
       blanks: [{ a: ["self"], why: "…" }]
     });

     TeachWidgets.lab("#sel", { starter: "…" });

     TeachWidgets.trace("#sel", {
       code: ["x = 1", "x = x + 1", "print(x)"],
       steps: [ { line: 0, vars: { x: "1" } }, … ]
     });

   All widgets are idempotent and safe to mount on any page.
   ============================================================ */
(function (global) {
  "use strict";

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function host(sel) {
    return typeof sel === "string" ? document.querySelector(sel) : sel;
  }

  /* ---------- predict-then-reveal ---------- */

  function predict(sel, cfg) {
    var h = host(sel);
    if (!h || !cfg) return;
    h.innerHTML = "";
    h.classList.add("predict");

    h.appendChild(el("span", "p-label", cfg.label || "Predict first"));
    h.appendChild(el("p", "p-q", cfg.q));

    var opts = el("div", "p-opts");
    var why = el("p", "p-why");
    var answered = false;

    cfg.a.forEach(function (choice, i) {
      var b = el("button", "p-opt", choice);
      b.type = "button";
      b.addEventListener("click", function () {
        if (answered) return;
        answered = true;
        var right = i === cfg.c;
        opts.querySelectorAll(".p-opt").forEach(function (x, xi) {
          x.disabled = true;
          if (xi === cfg.c) x.classList.add("right");
          else if (xi === i) x.classList.add("wrong");
        });
        why.className = "p-why show " + (right ? "ok" : "no");
        why.textContent = (right ? "Correct. " : "Not quite. ") + (cfg.why || "");
      });
      opts.appendChild(b);
    });

    h.appendChild(opts);
    h.appendChild(why);
  }

  /* ---------- fill-in-the-blank ---------- */

  function fill(sel, cfg) {
    var h = host(sel);
    if (!h || !cfg) return;
    h.innerHTML = "";
    h.classList.add("fill");

    h.appendChild(el("span", "f-label", cfg.label || "Fill in the blank"));

    var line = el("div", "f-line");
    var inputs = [];

    cfg.lines.forEach(function (raw, li) {
      var frag = document.createDocumentFragment();
      var parts = String(raw).split(/(<\d+>)/);
      parts.forEach(function (p) {
        var m = p.match(/^<(\d+)>$/);
        if (m) {
          var idx = parseInt(m[1], 10);
          var inp = document.createElement("input");
          inp.type = "text";
          inp.autocomplete = "off";
          inp.spellcheck = false;
          inp.dataset.blank = String(idx);
          inputs.push(inp);
          frag.appendChild(inp);
        } else if (p) {
          frag.appendChild(document.createTextNode(p));
        }
      });
      var row = el("div");
      row.appendChild(frag);
      line.appendChild(row);
    });

    h.appendChild(line);

    var actions = el("div", "f-actions");
    var btn = el("button", null, "Check");
    btn.type = "button";
    var score = el("span", "f-score", "");
    actions.appendChild(btn);
    actions.appendChild(score);
    h.appendChild(actions);

    btn.addEventListener("click", function () {
      var right = 0;
      inputs.forEach(function (inp) {
        var blank = cfg.blanks[parseInt(inp.dataset.blank, 10)];
        if (!blank) return;
        var ok = (blank.a || []).some(function (ans) {
          return inp.value.trim().toLowerCase() === String(ans).toLowerCase();
        });
        inp.classList.toggle("right", ok);
        inp.classList.toggle("wrong", !ok);
        if (ok) right++;
      });
      score.textContent = right + " / " + inputs.length + " correct";
      score.style.color = right === inputs.length ? "var(--good)" : "var(--muted)";
    });
  }

  /* ---------- runnable lab (tiny Python-ish interpreter) ---------- */

  function runLab(src) {
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

    return lines.length ? lines.join("\n") : "Nothing to run.";
  }

  function lab(sel, cfg) {
    var h = host(sel);
    if (!h || !cfg) return;
    h.innerHTML = "";
    h.classList.add("lab");

    h.appendChild(el("span", "l-label", cfg.label || "Try it"));

    var ta = document.createElement("textarea");
    ta.value = cfg.starter || "";
    ta.spellcheck = false;
    h.appendChild(ta);

    var actions = el("div", "l-actions");
    var btn = el("button", null, "Run");
    btn.type = "button";
    actions.appendChild(btn);
    h.appendChild(actions);

    var out = el("div", "l-out", "Click Run.");
    h.appendChild(out);

    btn.addEventListener("click", function () {
      out.textContent = runLab(ta.value);
    });
  }

  /* ---------- step-through trace ---------- */

  function trace(sel, cfg) {
    var h = host(sel);
    if (!h || !cfg) return;
    h.innerHTML = "";
    h.classList.add("trace");

    h.appendChild(el("span", "t-label", cfg.label || "Step through it"));

    var code = el("div", "t-code");
    var lineEls = cfg.code.map(function (src) {
      var ln = el("span", "ln", src);
      code.appendChild(ln);
      return ln;
    });
    h.appendChild(code);

    var state = el("div", "t-state");
    h.appendChild(state);

    var actions = el("div", "t-actions");
    var prev = el("button", null, "← Back");
    var next = el("button", null, "Step →");
    var step = el("span", "t-step", "");
    prev.type = next.type = "button";
    actions.appendChild(prev);
    actions.appendChild(next);
    actions.appendChild(step);
    h.appendChild(actions);

    var i = -1;

    function render() {
      lineEls.forEach(function (ln, li) {
        ln.classList.toggle("active", li === (cfg.steps[i] || {}).line);
      });
      state.innerHTML = "";
      var vars = (cfg.steps[i] || {}).vars || {};
      Object.keys(vars).forEach(function (k) {
        var v = el("span", "t-var");
        v.innerHTML = "<b>" + k + "</b> = " + vars[k];
        state.appendChild(v);
      });
      step.textContent = i < 0 ? "not started" : "step " + (i + 1) + " / " + cfg.steps.length;
      prev.disabled = i < 0;
      next.disabled = i >= cfg.steps.length - 1;
    }

    prev.addEventListener("click", function () { if (i >= 0) { i--; render(); } });
    next.addEventListener("click", function () { if (i < cfg.steps.length - 1) { i++; render(); } });
    render();
  }

  global.TeachWidgets = { predict: predict, fill: fill, lab: lab, trace: trace };
})(window);

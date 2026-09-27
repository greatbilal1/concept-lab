/* ============================================================
   Concept Lab — quiz component
   ------------------------------------------------------------
   A reusable, self-contained quiz component shared by every
   course. Drop a mount point in a lesson and call:

     TeachQuiz.mount("#quiz", [
       { q: "…", a: ["…", "…", "…"], c: 1, why: "…" },
       …
     ]);

   Design rules (from the teach skill):
     - Every answer option must be the SAME number of words, so
       formatting never hints at the right answer.
     - Feedback is immediate and automatic: clicking an option
       grades it on the spot, no "check answers" button.
     - A short `why` explains the answer once it is revealed.
   ============================================================ */
(function (global) {
  "use strict";

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function mount(selector, items) {
    var host = typeof selector === "string"
      ? document.querySelector(selector)
      : selector;
    if (!host || !items || !items.length) return;

    host.innerHTML = "";
    host.classList.add("tq");

    var state = { answered: 0, correct: 0 };

    var head = el("div", "tq-head");
    head.appendChild(el("span", "tq-title", "Retrieval practice"));
    var score = el("span", "tq-score", "0 / " + items.length);
    head.appendChild(score);
    host.appendChild(head);

    var bar = el("div", "tq-bar");
    var fill = el("i");
    bar.appendChild(fill);
    host.appendChild(bar);

    items.forEach(function (item, qi) {
      var card = el("div", "tq-card");

      var q = el("p", "tq-q");
      q.appendChild(el("span", "tq-n", String(qi + 1)));
      q.appendChild(document.createTextNode(item.q));
      card.appendChild(q);

      var opts = el("div", "tq-opts");
      var why = el("p", "tq-why");
      why.hidden = true;

      item.a.forEach(function (choice, ci) {
        var btn = el("button", "tq-opt", choice);
        btn.type = "button";
        btn.addEventListener("click", function () {
          if (card.dataset.done) return;
          card.dataset.done = "1";

          var right = ci === item.c;
          state.answered++;
          if (right) state.correct++;

          opts.querySelectorAll(".tq-opt").forEach(function (b, bi) {
            b.disabled = true;
            if (bi === item.c) b.classList.add("right");
            else if (bi === ci) b.classList.add("wrong");
          });

          why.hidden = false;
          why.className = "tq-why " + (right ? "ok" : "no");
          why.textContent = (right ? "Correct. " : "Not quite. ") + (item.why || "");

          score.textContent = state.correct + " / " + items.length;
          fill.style.width = Math.round((state.answered / items.length) * 100) + "%";
          if (state.answered === items.length) {
            host.classList.add("tq-done");
            score.textContent = state.correct + " / " + items.length +
              (state.correct === items.length ? " — perfect" : "");
          }
        });
        opts.appendChild(btn);
      });

      card.appendChild(opts);
      card.appendChild(why);
      host.appendChild(card);
    });
  }

  global.TeachQuiz = { mount: mount };
})(window);

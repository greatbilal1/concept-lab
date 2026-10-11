/* ============================================================
   Concept Lab — motion engine
   ------------------------------------------------------------
   The behaviour half of assets/css/motion.css. It is deliberately
   small and dependency-free, and it degrades to a static page if
   anything is missing.

   What it does
     1. Stagger      — numbers every `.reveal` inside a container so
                       the CSS `--mo-i` variable produces a cascade.
     2. Hero         — tags hero children with `data-mo-hero` and an
                       index so they play in on load.
     3. Scroll state — toggles `body.mo-scrolled` past the fold.
     4. Progress     — drives the #moProgress bar from scroll offset.
     5. Pointer glow — feeds `--mo-mx/--mo-my` to `.stat` cards.
     6. Grid enter   — replays a small entrance when a filter changes
                       the visible set of cards.
     7. Re-scan      — listens for `conceptlab:rendered` so anything
                       the renderer builds later is picked up too.

   Everything is skipped when the user prefers reduced motion.
   ============================================================ */
(function (global) {
  "use strict";

  var doc = document;
  var reduce = global.matchMedia
    ? global.matchMedia("(prefers-reduced-motion: reduce)")
    : { matches: false };

  /* ---------- 1. stagger ---------- */

  /* Containers whose direct children should cascade in. */
  var STAGGER_HOSTS = [
    ".courses",
    ".paths",
    ".steps",
    ".faq",
    ".glossary",
    ".news-grid",
    ".stats",
    ".hero-actions"
  ];

  function applyStagger(root) {
    STAGGER_HOSTS.forEach(function (sel) {
      (root || doc).querySelectorAll(sel).forEach(function (host) {
        var kids = host.querySelectorAll(":scope > .reveal, :scope > .course, :scope > .path, :scope > .step, :scope > .gloss, :scope > .news-card, :scope > .stat");
        kids.forEach(function (el, i) {
          /* cap the cascade so long grids do not crawl in */
          el.style.setProperty("--mo-i", Math.min(i, 8));
        });
      });
    });
  }

  /* ---------- 2. hero entrance ---------- */

  function tagHero() {
    var hero = doc.querySelector("header.hero");
    if (!hero) return;
    var kids = hero.querySelectorAll(".badge, h1, p.lead, .hero-actions, .stats");
    kids.forEach(function (el, i) {
      el.setAttribute("data-mo-hero", "");
      el.style.setProperty("--mo-i", i);
    });
  }

  /* ---------- 3 + 4. scroll state and progress ---------- */

  var progressEl = null;
  var ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    global.requestAnimationFrame(function () {
      var y = global.scrollY || doc.documentElement.scrollTop || 0;

      doc.body.classList.toggle("mo-scrolled", y > 24);

      if (progressEl) {
        var max = doc.documentElement.scrollHeight - global.innerHeight;
        var p = max > 0 ? Math.min(y / max, 1) : 0;
        progressEl.style.transform = "scaleX(" + p + ")";
      }

      ticking = false;
    });
  }

  function mountProgress() {
    if (reduce.matches) return;
    if (doc.getElementById("moProgress")) return;
    progressEl = doc.createElement("div");
    progressEl.id = "moProgress";
    progressEl.setAttribute("aria-hidden", "true");
    doc.body.appendChild(progressEl);
  }

  /* ---------- 5. pointer glow on stat cards ---------- */

  function wirePointerGlow(root) {
    if (reduce.matches) return;
    (root || doc).querySelectorAll(".stat").forEach(function (card) {
      if (card.dataset.moGlow) return;
      card.dataset.moGlow = "1";
      card.addEventListener("pointermove", function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty("--mo-mx", ((e.clientX - r.left) / r.width) * 100 + "%");
        card.style.setProperty("--mo-my", ((e.clientY - r.top) / r.height) * 100 + "%");
      });
      card.addEventListener("pointerleave", function () {
        card.style.removeProperty("--mo-mx");
        card.style.removeProperty("--mo-my");
      });
    });
  }

  /* ---------- 6. grid entrance on filter change ---------- */

  /* The renderer re-runs on filter clicks; watch the grids and
     replay a short entrance for cards that just became visible. */
  function wireGridEnter(root) {
    if (reduce.matches) return;
    (root || doc).querySelectorAll(".courses, .glossary, .news-grid").forEach(function (host) {
      if (host.dataset.moEnter) return;
      host.dataset.moEnter = "1";

      var mo = new MutationObserver(function (records) {
        var touched = false;
        records.forEach(function (rec) {
          if (rec.type === "attributes" && rec.attributeName === "class") {
            var el = rec.target;
            var wasHidden = (rec.oldValue || "").split(/\s+/).indexOf("hidden") !== -1;
            if (wasHidden && !el.classList.contains("hidden")) touched = true;
          }
        });
        if (!touched) return;
        host.querySelectorAll(":scope > :not(.hidden)").forEach(function (el, i) {
          el.classList.remove("mo-enter");
          /* force a reflow so the animation restarts */
          void el.offsetWidth;
          el.style.animationDelay = Math.min(i, 10) * 28 + "ms";
          el.classList.add("mo-enter");
        });
      });

      mo.observe(host, { attributes: true, attributeFilter: ["class"], attributeOldValue: true, subtree: true });
    });
  }

  /* ---------- 7. boot + re-scan ---------- */

  function enhance(root) {
    applyStagger(root);
    wirePointerGlow(root);
    wireGridEnter(root);
  }

  function boot() {
    tagHero();
    mountProgress();
    enhance(doc);
    onScroll();
    global.addEventListener("scroll", onScroll, { passive: true });
    global.addEventListener("resize", onScroll, { passive: true });
  }

  /* the renderer announces when it has rebuilt the DOM */
  doc.addEventListener("conceptlab:rendered", function () {
    enhance(doc);
  });

  if (doc.readyState === "loading") {
    doc.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  global.Motion = { enhance: enhance, reduce: reduce };
})(window);

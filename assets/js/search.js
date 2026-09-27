/* ============================================================
   Concept Lab — global search
   ------------------------------------------------------------
   A tiny, dependency-free search over the site's data globals:

     window.COURSES   (data/courses.js)
     window.GLOSSARY  (data/glossary.js)
     window.CONCEPTS  (data/concepts.js)

   It builds a flat index once, then filters it as the user types.
   No network, no libraries, works from file://.

   Usage (markup):
     <input id="siteSearch" ...>
     <div id="searchResults" ...></div>

   The module wires itself up automatically if those elements
   exist. It also exposes window.Search = { index, query, open }.
   ============================================================ */
(function (global) {
  "use strict";

  var INDEX = [];

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* Resolve a course id to its page href, matching render.js. */
  function hrefOf(id) {
    var list = global.COURSES || [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) return list[i].href || (id + ".html");
    }
    return id + ".html";
  }

  /* ---------- index building ---------- */

  function addEntry(kind, title, sub, href, haystack) {
    INDEX.push({
      kind: kind,
      title: title,
      sub: sub || "",
      href: href,
      hay: (title + " " + (sub || "") + " " + (haystack || "")).toLowerCase()
    });
  }

  function buildIndex() {
    INDEX = [];

    (global.COURSES || []).forEach(function (c) {
      var href = c.status === "live" ? hrefOf(c.id) : "#courses";
      addEntry(
        "Course",
        c.title,
        (c.tag || "") + (c.level ? " · " + c.level : ""),
        href,
        [c.desc, (c.chips || []).join(" "), (c.tags || []).join(" "), c.category].join(" ")
      );
    });

    (global.GLOSSARY || []).forEach(function (g) {
      var href = g.course
        ? (hrefOf(g.course) + (g.section ? "#" + g.section : ""))
        : "glossary.html";
      addEntry("Glossary", g.term, g.short || g.def || "", href, g.def || g.short || "");
    });

    (global.CONCEPTS || []).forEach(function (c) {
      addEntry("Concept", c.title, c.body || "", c.link || "#concepts", c.body || "");
    });
  }

  /* ---------- querying ---------- */

  function query(q) {
    var term = String(q || "").trim().toLowerCase();
    if (!term) return [];
    var words = term.split(/\s+/);
    var hits = [];
    for (var i = 0; i < INDEX.length; i++) {
      var e = INDEX[i];
      var ok = true;
      for (var w = 0; w < words.length; w++) {
        if (e.hay.indexOf(words[w]) === -1) { ok = false; break; }
      }
      if (ok) hits.push(e);
    }
    /* title matches rank first */
    hits.sort(function (a, b) {
      var at = a.title.toLowerCase().indexOf(term) !== -1 ? 0 : 1;
      var bt = b.title.toLowerCase().indexOf(term) !== -1 ? 0 : 1;
      return at - bt;
    });
    return hits;
  }

  /* ---------- rendering ---------- */

  function renderResults(host, hits, term) {
    if (!host) return;
    if (!term) { host.innerHTML = ""; host.classList.remove("open"); return; }
    if (!hits.length) {
      host.innerHTML = '<div class="sr-empty">No matches for “' + esc(term) + '”.</div>';
      host.classList.add("open");
      return;
    }
    host.innerHTML = hits.slice(0, 20).map(function (e) {
      return '<a class="sr-item" href="' + esc(e.href) + '">' +
        '<span class="sr-kind">' + esc(e.kind) + "</span>" +
        '<span class="sr-title">' + esc(e.title) + "</span>" +
        (e.sub ? '<span class="sr-sub">' + esc(e.sub) + "</span>" : "") +
      "</a>";
    }).join("");
    host.classList.add("open");
  }

  /* ---------- wiring ---------- */

  function wire() {
    var input = document.getElementById("siteSearch");
    var host = document.getElementById("searchResults");
    if (!input || !host) return;

    buildIndex();

    function run() {
      var term = input.value;
      renderResults(host, query(term), term.trim());
    }

    input.addEventListener("input", run);
    input.addEventListener("focus", run);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { input.value = ""; run(); input.blur(); }
      if (e.key === "Enter") {
        var first = host.querySelector(".sr-item");
        if (first) { window.location.href = first.getAttribute("href"); }
      }
    });
    document.addEventListener("click", function (e) {
      if (!host.contains(e.target) && e.target !== input) {
        host.classList.remove("open");
      }
    });
  }

  global.Search = { buildIndex: buildIndex, query: query, wire: wire };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wire);
  } else {
    wire();
  }
})(window);

/* ============================================================
   Concept Lab — renderer
   ------------------------------------------------------------
   Reads data/courses.js, data/paths.js and data/glossary.js and
   builds the DOM for every page. Pages are thin shells: they
   declare empty mount points and this file fills them.

   Mount points (all optional — only what exists is rendered)
     #courseGrid   hub course cards
     #pathGrid     hub learning-path cards
     #statCourses  hub "courses planned" counter
     #courseNav    course page sidebar
     #glossaryList glossary page term list
     #glossaryCount glossary page result count
     #glossarySearch / #glossaryTags  glossary page controls
     #rails        course page prereq/related rails
   ============================================================ */
(function (global) {
  "use strict";

  var COURSES = global.COURSES || [];
  var PATHS = global.PATHS || [];
  var GLOSSARY = global.GLOSSARY || [];

  /* ---------- helpers ---------- */

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* Section titles may contain `backticks` for code spans. Escape
     everything, then turn the backtick pairs into <code>. */
  function richText(s) {
    return esc(s).replace(/`([^`]+)`/g, "<code>$1</code>");
  }

  function byId(id) {
    for (var i = 0; i < COURSES.length; i++) {
      if (COURSES[i].id === id) return COURSES[i];
    }
    return null;
  }

  function hrefOf(course) {
    return course.href || (course.id + ".html");
  }

  function $(sel) {
    return document.querySelector(sel);
  }

  /* ---------- stage art ----------
     Each variant is a small HTML fragment animated purely by the
     keyframes in assets/css/site.css. Variants compose from a few
     primitives so new ones are cheap to add. */

  var ART = {
    code: '<div class="code-line l1"></div><div class="code-line l2"></div><div class="code-line l3"></div><div class="caret"></div>',
    bars: '<div class="bars"><i></i><i></i><i></i><i></i></div>',
    layers: '<div class="layers"><i></i><i></i><i></i></div>',
    globe: '<div class="globe"></div>',
    pulse: '<div class="pulse"></div><div class="pulse p2"></div>',
    term: '<div class="term"><span class="cur"></span></div>',
    flow: '<div class="flow"><i></i><i></i><i></i></div>',
    gear: '<div class="gear">⚙</div>',
    shield: '<div class="shield">🛡</div>',
    net: '<div class="net"><i></i><i></i><i></i><i></i></div>',
    orbit: '<div class="orbit"><i></i></div>',
    sweep: '<div class="sweep"></div>',
    nodes: '<div class="node n1"></div><div class="node n2"></div><div class="node n3"></div>'
  };

  /* variant name -> list of primitive keys */
  var STAGE_ART = {
    "code": ["code"],
    "code-sweep": ["code", "sweep"],
    "code-pulse": ["code", "pulse"],
    "bars": ["bars"],
    "bars-nodes": ["bars", "nodes"],
    "layers": ["layers"],
    "layers-orbit": ["layers", "orbit"],
    "globe": ["globe"],
    "globe-nodes": ["globe", "nodes"],
    "pulse": ["pulse"],
    "pulse-nodes": ["pulse", "nodes"],
    "term": ["term"],
    "term-layers": ["term", "layers"],
    "flow": ["flow"],
    "gear-flow": ["gear", "flow"],
    "shield-pulse": ["shield", "pulse"],
    "net-sweep": ["net", "sweep"],
    "orbit-nodes": ["orbit", "nodes"]
  };

  function stageArt(variant) {
    var keys = STAGE_ART[variant] || ["code"];
    var html = "";
    for (var i = 0; i < keys.length; i++) html += ART[keys[i]];
    return html;
  }

  /* ---------- hub: course cards ---------- */

  /* Status indicator: live / in-progress / planned. */
  function statusBadge(c) {
    var s = c.status || "planned";
    var label = s === "live" ? "Ready" : (s === "in-progress" ? "In progress" : "Planned");
    var icon = s === "live" ? "play" : (s === "in-progress" ? "clock" : "lock");
    return '<span class="status status-' + esc(s) + '">' +
      Icons.svg(icon, "ic") + esc(label) + "</span>";
  }

  function courseCard(c) {
    var live = c.status === "live";
    var attrs = 'class="course reveal' + (live ? "" : " soon") + '"' +
      ' data-level="' + esc(c.level || "") + '"' +
      ' data-tier="' + esc(c.tier || "") + '"' +
      ' data-status="' + esc(c.status || "") + '"' +
      ' style="--c1:' + esc(c.colors.c1) + ';--c2:' + esc(c.colors.c2) + '"' +
      (live ? "" : ' aria-disabled="true"');

    var chips = (c.chips || []).map(function (t) {
      return '<span class="chip">' + esc(t) + "</span>";
    }).join("");

    /* The card is a <div> so it can hold more than one link. The primary
       destination is a stretched overlay link; secondary links sit above it. */
    var hit = live
      ? '<a class="course-hit" href="' + esc(hrefOf(c)) + '" aria-label="' +
          esc(c.title) + '"></a>'
      : "";

    var lessonsLink = (live && c.lessons && c.lessons.href && c.lessons.href !== hrefOf(c))
      ? '<a class="course-lessons" href="' + esc(c.lessons.href) + '">' +
          Icons.svg("list-check", "ic") + esc(c.lessons.label || "Guided lessons") +
        "</a>"
      : "";

    return "<div " + attrs + ">" +
      hit +
      '<div class="thumb">' +
        '<div class="blob"></div><div class="blob two"></div>' +
        '<div class="glyph">' + esc(c.emoji) + "</div>" +
        '<div class="tag">' + esc(c.tag) + "</div>" +
        (c.level ? '<div class="lvl lvl-' + esc(c.level) + '">' + esc(c.level) + "</div>" : "") +
        '<div class="stage-art">' + stageArt(c.stage || c.stageArt) + "</div>" +
      "</div>" +
      '<div class="body">' +
        "<h3>" + esc(c.title) + "</h3>" +
        "<p>" + esc(c.desc) + "</p>" +
        '<div class="chips">' + chips + "</div>" +
        lessonsLink +
        '<div class="foot">' +
          statusBadge(c) +
          '<span class="go">' + (live
            ? 'Start learning ' + Icons.svg("arrow-right", "ic")
            : "Coming soon") + "</span>" +
        "</div>" +
      "</div>" +
    "</div>";
  }

  function renderCourseGrid() {
    var host = $("#courseGrid");
    if (!host) return;

    /* The home page shows a curated set of featured starter courses.
       The full 100-course catalogue with complete filtering lives on courses.html. */
    var isFeatured = host.dataset.featured === "true";
    var list;
    if (isFeatured) {
      var featuredIds = [
        "how-computers-work",
        "python-fundamentals",
        "data-structures",
        "oop",
        "rest-apis-json",
        "first-llm-application",
        "ai-agents",
        "system-design"
      ];
      list = featuredIds.map(byId).filter(Boolean);
    } else if (host.dataset.liveOnly === "true") {
      list = COURSES.filter(function (c) { return c.status === "live"; });
    } else {
      list = COURSES;
    }
    host.innerHTML = list.map(courseCard).join("");

    /* ---- filter bar: difficulty + tier + status ----
       Built from the data, mirrors the glossary tag filter.
       On the featured grid, we suppress the 15-chip filter bar
       to keep the homepage clean, fast, and focused. */
    var bar = $("#courseLevels");
    if (!bar) return;
    if (isFeatured) {
      bar.innerHTML = "";
      return;
    }

    var levelOrder = ["beginner", "intermediate", "advanced"];
    var levelCounts = {};
    var tierCounts = {};
    var statusCounts = {};
    list.forEach(function (c) {
      if (c.level) levelCounts[c.level] = (levelCounts[c.level] || 0) + 1;
      if (c.tier) tierCounts[c.tier] = (tierCounts[c.tier] || 0) + 1;
      if (c.status) statusCounts[c.status] = (statusCounts[c.status] || 0) + 1;
    });
    var levels = levelOrder.filter(function (l) { return levelCounts[l]; });
    var tiers = Object.keys(tierCounts).map(Number).sort(function (a, b) { return a - b; });

    function group(label, attr, items) {
      return '<div class="fgroup"><span class="flabel">' + esc(label) + "</span>" +
        '<button class="chip active" data-' + attr + '="">All</button>' +
        items.join("") + "</div>";
    }

    /* The status group is only useful when more than one status is on
       the page — on the live-only home grid it would be a single chip. */
    var statusGroup = Object.keys(statusCounts).length > 1
      ? group("Status", "status", ["live", "in-progress", "planned"].filter(function (s) {
          return statusCounts[s];
        }).map(function (s) {
          return '<button class="chip" data-status="' + esc(s) + '">' + esc(s) +
            ' <span class="c">' + statusCounts[s] + "</span></button>";
        }))
      : "";

    bar.innerHTML =
      group("Level", "level", levels.map(function (l) {
        return '<button class="chip" data-level="' + esc(l) + '">' + esc(l) +
          ' <span class="c">' + levelCounts[l] + "</span></button>";
      })) +
      group("Tier", "tier", tiers.map(function (t) {
        return '<button class="chip" data-tier="' + t + '">' + t +
          ' <span class="c">' + tierCounts[t] + "</span></button>";
      })) +
      statusGroup;

    var active = { level: "", tier: "", status: "" };

    function apply() {
      var cards = host.querySelectorAll(".course");
      for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var ok = (!active.level || card.dataset.level === active.level) &&
                 (!active.tier || card.dataset.tier === active.tier) &&
                 (!active.status || card.dataset.status === active.status);
        card.classList.toggle("hidden", !ok);
      }
    }

    bar.addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-level],button[data-tier],button[data-status]");
      if (!btn) return;
      var key = btn.dataset.level != null ? "level"
        : (btn.dataset.tier != null ? "tier" : "status");
      active[key] = btn.dataset[key] || "";
      /* reset the other buttons in the same group */
      var grp = btn.parentNode;
      grp.querySelectorAll("button").forEach(function (b) {
        b.classList.toggle("active", b === btn);
      });
      apply();
    });
  }

  /* ---------- hub: stats ---------- */

  function renderStats() {
    var el = $("#statCourses");
    if (el) el.textContent = COURSES.length;
    var ready = $("#statReady");
    if (ready) ready.textContent = COURSES.filter(function (c) { return c.status === "live"; }).length;
    var lessonsEl = $("#statLessons");
    if (lessonsEl) {
      var total = COURSES.reduce(function (sum, c) {
        var m = c.meta && c.meta.match(/(\d+)\s+lessons/);
        return sum + (m ? parseInt(m[1], 10) : 8);
      }, 0);
      lessonsEl.textContent = total + "+";
    }
  }

  /* ---------- hub: learning paths ---------- */

  function renderPaths() {
    var host = $("#pathGrid");
    if (!host) return;
    host.innerHTML = PATHS.map(function (p) {
      var steps = p.steps.map(function (id, i) {
        var c = byId(id);
        var label = c ? c.title : id;
        var live = c && c.status === "live";
        var inner = '<span class="n">' + (i + 1) + "</span>" +
          (c ? '<span class="em">' + esc(c.emoji) + "</span>" : "") +
          "<span>" + esc(label) + "</span>";
        return live
          ? '<li><a href="' + esc(hrefOf(c)) + '">' + inner + "</a></li>"
          : '<li class="soon">' + inner + "</li>";
      }).join("");

      var liveCount = p.steps.filter(function (id) {
        var c = byId(id);
        return c && c.status === "live";
      }).length;

      return '<div class="path reveal">' +
        '<div class="path-head"><span class="em">' + esc(p.emoji) + "</span>" +
        "<h3>" + esc(p.title) + "</h3></div>" +
        "<p>" + esc(p.desc) + "</p>" +
        "<ol>" + steps + "</ol>" +
        '<div class="path-foot">' + liveCount + " of " + p.steps.length + " available</div>" +
      "</div>";
    }).join("");
  }

  /* ---------- course page: sidebar nav ----------
     Generated from sections[] so numbering can never drift from
     the headings, and no section can be missing from the nav. */

  function renderCourseNav() {
    var host = $("#courseNav");
    if (!host) return;
    var courseId = host.dataset.course || "oop";
    var course = byId(courseId);
    if (!course || !course.sections) return;

    var html = '<div class="nav-title">Contents</div>';
    course.sections.forEach(function (s, i) {
      var n = i === 0 ? "" : '<span class="n">' + i + ".</span> ";
      html += '<a href="#' + esc(s.id) + '">' + n + richText(s.title) + "</a>";
    });
    host.innerHTML = html;
  }

  /* ---------- course page: section headings ----------
     The data owns the titles; the renderer writes them into the
     <h2> so there is exactly one source of truth. */

  function renderSectionHeads() {
    var courseId = document.body.dataset.course;
    if (!courseId) return;
    var course = byId(courseId);
    if (!course || !course.sections) return;

    course.sections.forEach(function (s, i) {
      var sec = document.getElementById(s.id);
      if (!sec) return;
      var head = sec.querySelector(".sec-head");
      var h2 = sec.querySelector("h2");
      if (!h2) return;

      var n = i === 0 ? "" : (i + ".");
      h2.innerHTML = (n ? '<span class="n">' + n + "</span> " : "") + richText(s.title);

      /* Build a proper explainer block: a titled panel that holds the
         animated stage, placed above the section heading. The stage
         element already exists in the markup (data-anim); we wrap it
         in chrome so it reads as an explainer, not a thumbnail. */
      if (!head) return;
      var stage = head.querySelector(".sec-stage");
      if (!stage) return;

      var icon = s.icon || "spark";
      var panel = document.createElement("figure");
      panel.className = "explainer";
      panel.innerHTML =
        '<figcaption class="explainer-bar">' +
          '<span class="explainer-ico">' + Icons.svg(icon, "ic") + "</span>" +
          '<span class="explainer-kind">Explainer</span>' +
          '<span class="explainer-topic">' + richText(s.title) + "</span>" +
          '<span class="explainer-live"><span class="dot"></span>animated</span>' +
        "</figcaption>";

      /* move the stage into the panel, then the panel into the head */
      head.insertBefore(panel, stage);
      panel.appendChild(stage);

      /* A plain-language "key idea" strip under the animation, so the
         takeaway is readable even if the animation is paused. */
      if (s.takeaway) {
        var idea = document.createElement("div");
        idea.className = "explainer-idea";
        idea.innerHTML =
          '<span class="explainer-idea-ico">' + Icons.svg("spark", "ic") + "</span>" +
          '<span class="explainer-idea-label">Key idea</span>' +
          '<span class="explainer-idea-text">' + richText(s.takeaway) + "</span>";
        panel.appendChild(idea);
      }
    });
  }

  /* ---------- course page: relationship rails ---------- */

  function rail(title, ids, emptyNote) {
    var items = ids.map(function (id) {
      var c = byId(id);
      if (!c) return "";
      var live = c.status === "live";
      var inner = '<span class="em">' + esc(c.emoji) + "</span><span>" + esc(c.title) + "</span>";
      return live
        ? '<li><a href="' + esc(hrefOf(c)) + '">' + inner + "</a></li>"
        : '<li class="soon">' + inner + '<span class="pill">soon</span></li>';
    }).join("");
    if (!items) return "";
    return '<div class="rail"><h4>' + esc(title) + "</h4><ul>" + items + "</ul>" +
      (emptyNote ? '<p class="small">' + esc(emptyNote) + "</p>" : "") + "</div>";
  }

  function renderRails() {
    var host = $("#rails");
    if (!host) return;
    var courseId = host.dataset.course || document.body.dataset.course;
    var course = byId(courseId);
    if (!course) return;
    host.innerHTML =
      rail("Before this", course.prereq || []) +
      rail("Go deeper", course.related || []);
  }

  /* ---------- glossary page ---------- */

  function glossaryCard(g) {
    var c = byId(g.course);
    /* Link to the course's own glossary page when it has one — that page
       renders the full term list from the course manifest, so the site
       glossary and the course glossary can never drift apart. Fall back
       to the course page + section anchor for courses without one. */
    var link = "#";
    if (c) {
      link = c.glossary
        ? c.glossary
        : hrefOf(c) + "#" + g.section;
    }
    var source = c ? c.title : g.course;
    var tags = (g.tags || []).map(function (t) {
      return '<span class="chip" data-tag="' + esc(t) + '">' + esc(t) + "</span>";
    }).join("");
    return '<div class="gloss reveal" data-tags="' + esc((g.tags || []).join(" ")) + '"' +
      ' data-course="' + esc(g.course) + '">' +
      '<div class="gloss-head"><h3>' + esc(g.term) + "</h3>" +
        '<a class="src" href="' + esc(link) + '">' + esc(source) + " →</a></div>" +
      "<p>" + esc(g.def) + "</p>" +
      '<div class="chips">' + tags + "</div>" +
    "</div>";
  }

  function renderGlossary() {
    var host = $("#glossaryList");
    if (!host) return;

    var search = $("#glossarySearch");
    var tagBar = $("#glossaryTags");
    var count = $("#glossaryCount");

    /* build the tag filter bar from the data */
    var tagSet = {};
    GLOSSARY.forEach(function (g) {
      (g.tags || []).forEach(function (t) { tagSet[t] = (tagSet[t] || 0) + 1; });
    });
    var tags = Object.keys(tagSet).filter(function (t) {
      return tagSet[t] >= 8;
    }).sort();
    var activeTag = "";

    if (tagBar) {
      tagBar.innerHTML = '<button class="chip active" data-tag="">All</button>' +
        tags.map(function (t) {
          return '<button class="chip" data-tag="' + esc(t) + '">' + esc(t) +
            ' <span class="c">' + tagSet[t] + "</span></button>";
        }).join("");
    }

    function apply() {
      var q = (search && search.value || "").trim().toLowerCase();
      var shown = 0;
      var cards = host.querySelectorAll(".gloss");
      for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var text = card.textContent.toLowerCase();
        var tagOk = !activeTag || (" " + card.dataset.tags + " ").indexOf(" " + activeTag + " ") !== -1;
        var qOk = !q || text.indexOf(q) !== -1;
        var ok = tagOk && qOk;
        card.classList.toggle("hidden", !ok);
        if (ok) shown++;
      }
      if (count) count.textContent = shown;
    }

    host.innerHTML = GLOSSARY.map(glossaryCard).join("");

    if (search) search.addEventListener("input", apply);
    if (tagBar) {
      tagBar.addEventListener("click", function (e) {
        var btn = e.target.closest("[data-tag]");
        if (!btn) return;
        activeTag = btn.dataset.tag;
        tagBar.querySelectorAll(".chip").forEach(function (b) {
          b.classList.toggle("active", b === btn);
        });
        apply();
      });
    }
    apply();
  }

  /* ---------- boot ---------- */

  function boot() {
    renderStats();
    renderCourseGrid();
    renderPaths();
    renderCourseNav();
    renderSectionHeads();
    renderRails();
    renderGlossary();

    /* reveal-on-scroll for everything the renderer just created */
    if (global.IntersectionObserver) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e, i) {
          if (e.isIntersecting) {
            setTimeout(function () { e.target.classList.add("in"); }, i * 70);
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
    } else {
      document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
    }

    /* count-up for the stats */
    document.querySelectorAll(".stat b").forEach(function (el) {
      var raw = el.textContent.trim();
      var target = parseFloat(raw);
      if (isNaN(target)) return;
      var suffix = raw.replace(/[\d.]/g, "");
      var start = null;
      var dur = 900;
      function tick(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });

    /* tell the page the DOM is ready for animation stages */
    document.dispatchEvent(new CustomEvent("conceptlab:rendered"));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  global.Render = {
    boot: boot,
    esc: esc,
    richText: richText,
    byId: byId,
    hrefOf: hrefOf,
    stageArt: stageArt,
    STAGE_ART: STAGE_ART
  };
})(window);

/* ============================================================
   Concept Lab — local SVG icon helper
   ------------------------------------------------------------
   Loads assets/icons/sprite.svg and inlines it into the document
   so that <use href="#i-..."> references resolve. This is needed
   because external <use> references are blocked on file:// by
   the browser's same-origin rules — inlining sidesteps that and
   keeps the site fully offline.

   Usage:
     <svg class="ic"><use href="#i-search"/></svg>

   Exposes window.Icons = { mount, svg }.
     Icons.svg("search", "ic")  ->  '<svg class="ic"><use href="#i-search"/></svg>'
   ============================================================ */
(function (global) {
  "use strict";

  /* Resolve the sprite paths relative to THIS script's own URL, so
     the helper works from any page depth (root pages, lessons/,
     reference/, …) without each page having to configure a base. */
  var BASE = (function () {
    var s = document.currentScript;
    if (!s) {
      var all = document.getElementsByTagName("script");
      for (var i = all.length - 1; i >= 0; i--) {
        if (/icons\.js(\?|$)/.test(all[i].src || "")) { s = all[i]; break; }
      }
    }
    if (s && s.src) return s.src.replace(/js\/icons\.js(\?.*)?$/, "");
    return "assets/";
  })();

  var SPRITE = BASE + "icons/sprite.svg";
  var TABLER = BASE + "icons/tabler-sprite.svg";
  var mounted = false;

  /* Inline a sprite file into a hidden holder at the top of <body>.
     External <use href="file.svg#id"> is blocked on file://, so we
     inline the markup and reference symbols by id instead. */
  function inline(url, holderId) {
    if (document.getElementById(holderId)) return;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function () {
      if (xhr.status === 0 || (xhr.status >= 200 && xhr.status < 300)) {
        var holder = document.createElement("div");
        holder.id = holderId;
        holder.setAttribute("aria-hidden", "true");
        holder.style.display = "none";
        holder.innerHTML = xhr.responseText;
        document.body.insertBefore(holder, document.body.firstChild);
      }
    };
    try { xhr.send(); } catch (e) { /* offline file:// fallback: icons simply absent */ }
  }

  /* Inline both sprites once, at the top of <body>. */
  function mount() {
    if (mounted) return;
    mounted = true;
    inline(SPRITE, "cl-icon-sprite");
    inline(TABLER, "cl-tabler-sprite");
  }

  /* Build an inline <svg> string for a named UI icon (sprite.svg). */
  function svg(name, cls) {
    return '<svg class="' + (cls || "ic") + '" aria-hidden="true">' +
      '<use href="#i-' + name + '"/></svg>';
  }

  /* Build an inline <svg> string for a named Tabler icon. */
  function tabler(name, cls) {
    return '<svg class="' + (cls || "ic") + '" aria-hidden="true">' +
      '<use href="#tb-' + name + '"/></svg>';
  }

  global.Icons = { mount: mount, svg: svg, tabler: tabler };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})(window);

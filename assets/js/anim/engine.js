/* ============================================================
   Concept Lab — explainer animation engine
   ------------------------------------------------------------
   A tiny, dependency-free runtime that plays the same explainer
   scenes the Remotion project used to render to MP4 — but as live
   DOM and CSS, so there are no video files and no HTTP server.

   How it works
   ------------
   Each explainer is a list of "scenes". A scene is a function of
   normalised time t in [0,1) that returns a flat list of elements
   to draw. The engine ticks once per frame, calls the active
   scene, and reconciles the returned list against the DOM.

   Reconciliation is keyed: an element with the same `k` keeps its
   DOM node, so CSS transitions animate between frames instead of
   the node being recreated. That is what makes the motion smooth.

   Everything is periodic over the scene duration, so the loop is
   seamless — the last frame flows back into the first.
   ============================================================ */
(function (global) {
  "use strict";

  /* ---------- style handling ----------
     Numeric style values are treated as pixels, except for the
     properties below, which are unitless in CSS. */
  const UNITLESS = {
    opacity: 1, zIndex: 1, lineHeight: 1, flexGrow: 1, flexShrink: 1,
    order: 1, zoom: 1, fontWeight: 1, columnCount: 1, tabSize: 1,
  };

  /* ---------- easing ---------- */
  const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
  const lerp = (a, b, t) => a + (b - a) * t;
  const easeInOut = (t) => 0.5 - 0.5 * Math.cos(Math.PI * clamp01(t));
  const easeOut = (t) => 1 - Math.pow(1 - clamp01(t), 3);
  const easeIn = (t) => Math.pow(clamp01(t), 3);

  /** A smooth 0 -> 1 -> 0 pulse over the unit interval. */
  const wave = (t) => 0.5 - 0.5 * Math.cos(2 * Math.PI * clamp01(t));

  /** Progress of a sub-window [a,b] within the unit interval. */
  const span = (t, a, b) => clamp01((t - a) / (b - a || 1e-6));

  /** A value that ramps up, holds, then ramps down — for "appear" beats. */
  const beat = (t, inAt, outAt, fade) => {
    fade = fade == null ? 0.08 : fade;
    return Math.min(span(t, inAt, inAt + fade), 1 - span(t, outAt - fade, outAt));
  };

  /* ---------- element helpers ---------- */
  const el = (k, style, extra) => Object.assign({ k, style: style || {} }, extra || {});
  const text = (k, str, style, extra) =>
    Object.assign({ k, text: str, style: style || {} }, extra || {});

  /* ---------- the engine ---------- */
  function createStage(host, scenes, opts) {
    opts = opts || {};
    const duration = opts.duration || 6000; // ms per scene
    const once = !!opts.once; // play a single pass, then hold the last frame
    const reduce = global.matchMedia
      ? global.matchMedia("(prefers-reduced-motion: reduce)")
      : { matches: false };

    const layer = document.createElement("div");
    layer.className = "xa-layer";
    host.appendChild(layer);

    // Scenes are authored in a 960x540 space; scale the layer to fit
    // the host tile so the whole composition stays visible.
    function fit() {
      const w = host.clientWidth;
      if (!w) return;
      layer.style.setProperty("--xa-scale", w / 960);
    }
    fit();
    if (global.ResizeObserver) {
      new ResizeObserver(fit).observe(host);
    } else {
      global.addEventListener("resize", fit);
    }

    let nodes = new Map(); // key -> DOM node
    let sceneIndex = -1;
    let start = 0;
    let raf = 0;
    let visible = false;
    let lastT = -1;

    function mount(item) {
      let node = nodes.get(item.k);
      if (!node) {
        node = document.createElement(item.tag || "div");
        node.className = "xa";
        node.dataset.k = item.k;
        nodes.set(item.k, node);
        layer.appendChild(node);
      }
      return node;
    }

    function apply(node, item) {
      const s = item.style || {};
      for (const prop in s) {
        const v = s[prop];
        node.style[prop] =
          typeof v === "number" && !UNITLESS[prop] ? v + "px" : v;
      }
      // `html` wins over `text` when both are present.
      if (item.html != null) {
        if (node.__html !== item.html) {
          node.innerHTML = item.html;
          node.__html = item.html;
        }
      } else if (item.text != null) {
        if (node.textContent !== item.text) {
          node.textContent = item.text;
        }
      }
      if (item.cls) node.className = "xa " + item.cls;
    }

    function draw(t) {
      if (t === lastT) return;
      lastT = t;

      const scene = scenes[sceneIndex];
      const items = scene(t) || [];
      const seen = new Set();

      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (!item || item.k == null) continue;
        seen.add(item.k);
        apply(mount(item), item);
      }

      // Anything the scene no longer returns is removed.
      nodes.forEach((node, k) => {
        if (!seen.has(k)) {
          node.remove();
          nodes.delete(k);
        }
      });
    }

    function clear() {
      nodes.forEach((n) => n.remove());
      nodes = new Map();
      lastT = -1;
    }

    function tick(now) {
      if (!visible) return;
      if (!start) start = now;
      const elapsed = now - start;

      // `once`: run through every scene a single time, then stop on
      // the final frame instead of looping back to the start.
      if (once) {
        const total = duration * scenes.length;
        if (elapsed >= total) {
          sceneIndex = scenes.length - 1;
          draw(1);
          visible = false;
          return;
        }
        const idx = Math.floor(elapsed / duration);
        if (idx !== sceneIndex) {
          sceneIndex = idx;
          clear();
        }
        draw((elapsed % duration) / duration);
        raf = requestAnimationFrame(tick);
        return;
      }

      const idx = Math.floor(elapsed / duration) % scenes.length;
      if (idx !== sceneIndex) {
        sceneIndex = idx;
        clear();
      }
      draw((elapsed % duration) / duration);
      raf = requestAnimationFrame(tick);
    }

    function play() {
      if (visible) return;
      visible = true;
      start = 0;
      raf = requestAnimationFrame(tick);
    }

    function pause() {
      visible = false;
      cancelAnimationFrame(raf);
    }

    // Reduced motion: draw one representative frame and stop.
    if (reduce.matches) {
      sceneIndex = 0;
      draw(0.5);
      const still = {
        play() {},
        pause() {},
        destroy() { clear(); layer.remove(); },
      };
      host.__xaStage = still;
      return still;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? play() : pause()));
      },
      { threshold: 0.2 }
    );
    io.observe(host);

    const handle = {
      play,
      pause,
      destroy() {
        pause();
        io.disconnect();
        clear();
        layer.remove();
      },
    };
    host.__xaStage = handle;
    return handle;
  }

  global.Explainer = {
    createStage,
    el,
    text,
    clamp01,
    lerp,
    easeInOut,
    easeOut,
    easeIn,
    wave,
    span,
    beat,
  };
})(window);

/* ============================================================
   Concept Lab — explainer scene definitions
   ------------------------------------------------------------
   Ports of the 25 Remotion compositions (6 hub + 19 OOP) into
   live DOM scenes. Each scene is a function of normalised time
   t in [0,1) returning a flat list of elements.

   Coordinates are in the 960x540 space the videos used, and the
   host tile scales them down with a CSS transform, so the layout
   matches the original frames exactly.
   ============================================================ */
(function (global) {
  "use strict";

  const E = global.Explainer;
  const { el, text, wave, span, beat, easeInOut, easeOut, clamp01, lerp } = E;

  /* ---------- palette (mirrors remotion/src/theme.ts) ---------- */
  const T = {
    bg: "#0b1020",
    panel: "#121a2f",
    panel2: "#18223c",
    text: "#edf2ff",
    muted: "#aeb9d6",
    accent: "#67e8f9",
    accent2: "#a78bfa",
    good: "#4ade80",
    warn: "#fbbf24",
    bad: "#fb7185",
    border: "#2b3859",
    code: "#0a0f1d",
  };

  /* ---------- motion helpers (mirror remotion/src/anim.tsx) ---------- */

  /** useLoop: a looping sine in [0,1] with an optional phase offset. */
  const loop = (t, cycles, phase) => wave(t * cycles + (phase || 0) / 120);

  /** useBob: bob up by `amount` px. */
  const bob = (t, amount, cycles, phase) => -amount * loop(t, cycles, phase);

  /** useSpin: continuous rotation in degrees. */
  const spin = (t, turns) => t * 360 * turns;

  /** usePulse: expanding, fading ring. */
  const pulse = (t, cycles, phase) => {
    const w = loop(t, cycles, phase);
    return { scale: 0.6 + w * 1.1, opacity: 0.8 * (1 - w) };
  };

  /** useBlink: opacity oscillating between 1 and `min`. */
  const blink = (t, cycles, min, phase) => 1 - (1 - min) * loop(t, cycles, phase);

  /** useTravel: a packet crossing a track, with fade at both ends. */
  const travel = (t, cycles, phase) => {
    const p = ((t * cycles + (phase || 0) / 120) % 1 + 1) % 1;
    const eased = 0.5 - 0.5 * Math.cos(p * Math.PI * 2);
    const opacity = p < 0.12 ? p / 0.12 : p > 0.88 ? (1 - p) / 0.12 : 1;
    return { t: eased, opacity };
  };

  /** useGrow: a bar that grows and shrinks. */
  const grow = (t, min, max, cycles, phase) =>
    min + (max - min) * loop(t, cycles, phase);

  /* ---------- shared building blocks ---------- */

  /** The caption strip along the bottom of the frame. */
  const caption = (t, html, color) =>
    el("cap", { left: 0, right: 0, bottom: 0 }, {
      cls: "xa-cap",
      html,
      style: { color: color || T.accent, opacity: easeOut(span(t, 0, 0.2)) },
    });

  /** A code panel with one highlighted line. */
  const codePanel = (k, t, lines, o) => {
    o = o || {};
    const hl = o.highlight == null ? -1 : o.highlight;
    const glow = hl >= 0 ? 0.55 + 0.45 * loop(t, 2) : 0;
    const body = lines
      .map((l, i) => {
        if (i === hl) {
          const a = Math.round(glow * 26).toString(16).padStart(2, "0");
          return '<span class="hl" style="background:#67e8f9' + a + '">' + esc(l || " ") + "</span>";
        }
        return esc(l || " ");
      })
      .join("\n");
    return el(k, Object.assign({}, o.style), { cls: "xa-code", html: body });
  };

  /** An object card: a titled box listing attributes. */
  const objectCard = (k, title, rows, o) => {
    o = o || {};
    const color = o.color || T.accent;
    const body = rows.map((r) => esc(r)).join("<br>");
    return el(k, Object.assign({}, o.style), {
      cls: "xa-card",
      html:
        '<div class="xa-card-h" style="background:linear-gradient(90deg,' +
        color +
        "33,transparent);color:" +
        color +
        '">' +
        esc(title) +
        '</div><div class="xa-card-b">' +
        body +
        "</div>",
    });
  };

  /** A rounded chip with a label. */
  const chip = (k, label, o) => {
    o = o || {};
    return el(k, Object.assign({}, o.style), {
      cls: "xa-chip",
      text: label,
      style: Object.assign({ color: o.color || T.accent }, o.style),
    });
  };

  /** A glowing dot. */
  const dot = (k, o) => {
    o = o || {};
    const size = o.size || 14;
    const color = o.color || T.accent;
    return el(k, Object.assign({ width: size, height: size, background: color, boxShadow: "0 0 " + size + "px " + color }, o.style), {
      cls: "xa-dot",
    });
  };

  /** A gradient tile with an emoji glyph. */
  const core = (k, glyph, o) => {
    o = o || {};
    const size = o.size || 76;
    const from = o.from || "#2563eb";
    const to = o.to || "#7c3aed";
    const glow = o.glow || "#7c3aed88";
    return el(k, Object.assign({ width: size, height: size, borderRadius: size * 0.3, fontSize: size * 0.46, background: "linear-gradient(135deg," + from + "," + to + ")", boxShadow: "0 0 28px " + glow }, o.style), {
      cls: "xa-box",
      text: glyph,
    });
  };

  /** A horizontal gradient track with a travelling packet. */
  const track = (k, t, o) => {
    o = o || {};
    const tr = travel(t, o.cycles || 1.2, o.phase);
    const from = o.from || T.accent;
    const to = o.to || T.accent2;
    return [
      el(k + "-bar", { left: o.left, top: o.top, width: o.width, height: 4, borderRadius: 4, background: "linear-gradient(90deg," + from + "," + to + ")" }),
      dot(k + "-pkt", {
        size: 16,
        color: "#fff",
        style: { left: o.left + tr.t * o.width, top: o.top - 6, opacity: tr.opacity },
      }),
    ];
  };

  const esc = (s) =>
    String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  /* ---------- icon vocabulary ----------
     Inline SVG icons from the local Tabler sprite, drawn inside a
     scene element. The sprite is inlined into the document by
     icons.js, so <use href="#tb-..."> resolves offline. `size` is
     in the 960x540 scene space. */
  const icon = (name, size, color) =>
    '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size +
    '" fill="none" stroke="' + (color || "currentColor") +
    '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ' +
    'style="display:block">' +
    '<use href="#tb-' + name + '"/></svg>';

  /** A diagram node: an icon tile with a title and optional rows.
      Used for the "real thing" boxes (Customer, BankAccount, ...). */
  const node = (k, o) => {
    o = o || {};
    const color = o.color || T.accent;
    const rows = (o.rows || [])
      .map((r) => '<div class="xa-node-r">' + esc(r) + "</div>")
      .join("");
    const head =
      '<div class="xa-node-h">' +
      (o.icon ? '<span class="xa-node-ic">' + icon(o.icon, 22, color) + "</span>" : "") +
      '<span class="xa-node-t">' + esc(o.title || "") + "</span>" +
      (o.tag ? '<span class="xa-node-tag">' + esc(o.tag) + "</span>" : "") +
      "</div>";
    return el(k, Object.assign({}, o.style), {
      cls: "xa-node" + (o.cls ? " " + o.cls : ""),
      style: Object.assign({ borderColor: color + "66" }, o.style),
      html: head + (rows ? '<div class="xa-node-b">' + rows + "</div>" : ""),
    });
  };

  /** A container: a labelled boundary that groups nodes (a class
      body, an object's memory, a module). */
  const container = (k, o) => {
    o = o || {};
    const color = o.color || T.border;
    const label = o.label
      ? '<div class="xa-cont-l">' +
        (o.icon ? icon(o.icon, 15, color) : "") +
        "<span>" + esc(o.label) + "</span></div>"
      : "";
    return el(k, Object.assign({}, o.style), {
      cls: "xa-cont" + (o.cls ? " " + o.cls : ""),
      style: Object.assign({ borderColor: color }, o.style),
      html: label,
    });
  };

  /** A connection: a line between two points with an optional
      travelling packet and an optional label. `dir` is "v" or "h". */
  const connection = (k, t, o) => {
    o = o || {};
    const color = o.color || T.border;
    const vertical = o.dir !== "h";
    const len = o.len || 80;
    const tr = o.flow ? travel(t, o.cycles || 1.5, o.phase) : null;
    const line = el(k, Object.assign({
      width: vertical ? 2 : len,
      height: vertical ? len : 2,
      background: color,
      borderRadius: 2,
    }, o.style), { cls: "xa-arrow " + (vertical ? "v" : "h") });
    const out = [line];
    if (tr) {
      out.push(dot(k + "-pkt", {
        size: 14,
        color: o.pktColor || "#fff",
        style: vertical
          ? { left: (o.style && o.style.left || 0) - 6, top: (o.style && o.style.top || 0) + tr.t * len, opacity: tr.opacity }
          : { left: (o.style && o.style.left || 0) + tr.t * len, top: (o.style && o.style.top || 0) - 6, opacity: tr.opacity },
      }));
    }
    if (o.label) {
      out.push(el(k + "-l", Object.assign({
        fontSize: 14, fontWeight: 700, color: T.muted, whiteSpace: "nowrap",
      }, o.labelStyle), { text: o.label }));
    }
    return out;
  };

  /** A badge: a small pill for status/verdict (ok / no / info). */
  const badge = (k, label, o) => {
    o = o || {};
    const tone = o.tone || "info";
    return el(k, Object.assign({}, o.style), {
      cls: "xa-badge " + tone,
      text: label,
    });
  };

  /** A message: a callout strip for a note, warning or result. */
  const message = (k, html, o) => {
    o = o || {};
    const tone = o.tone || "info";
    const ic = o.icon ? '<span class="xa-msg-ic">' + icon(o.icon, 18) + "</span>" : "";
    return el(k, Object.assign({}, o.style), {
      cls: "xa-msg " + tone,
      html: ic + '<span class="xa-msg-t">' + html + "</span>",
    });
  };

  /** A small labelled arrow between two points (vertical or horizontal). */
  const arrow = (k, o) => {
    o = o || {};
    const color = o.color || T.border;
    const vertical = o.dir !== "right";
    return el(k, Object.assign({
      width: vertical ? 2 : (o.len || 60),
      height: vertical ? (o.len || 60) : 2,
      background: color,
      borderRadius: 2,
    }, o.style), { cls: "xa-arrow" + (vertical ? " v" : " h") });
  };

  /* ---------- story primitives (Class vs Object) ----------
     A calm, textbook visual language. One idea per scene, large
     type, generous space, and only motion that teaches. */

  /** The scene title: the single idea on screen right now. */
  const title = (k, main, sub, o) =>
    el(k, Object.assign({}, o && o.style), {
      cls: "xa-title",
      html: esc(main) + (sub ? '<span class="xa-title-sub">' + esc(sub) + "</span>" : ""),
    });

  /** The blueprint: the class, drawn as a clean technical drawing.
      `rows` are the members; `behavior` marks the last one(s) as
      behavior (a method) rather than data. `rowOpacity` (optional)
      reveals members one at a time. */
  const bp = (k, o) => {
    o = o || {};
    const rowOp = o.rowOpacity || [];
    const rows = (o.rows || [])
      .map((r, i) => {
        const isBehavior = /\(\)/.test(r);
        const op = rowOp[i] == null ? 1 : rowOp[i];
        return (
          '<div class="xa-bp-row' + (isBehavior ? " behavior" : "") +
          '" style="opacity:' + op + '">' +
          '<span class="xa-bp-dot"></span>' + esc(r) + "</div>"
        );
      })
      .join("");
    return el(k, Object.assign({}, o.style), {
      cls: "xa-bp",
      html:
        '<div class="xa-bp-h">' +
        '<span class="xa-bp-ic">' + icon(o.icon || "box", 34) + "</span>" +
        '<span class="xa-bp-name">' + esc(o.name || "") + "</span>" +
        '<span class="xa-bp-kind">' + esc(o.kind || "blueprint") + "</span>" +
        "</div>" +
        '<div class="xa-bp-b">' + rows + "</div>",
    });
  };

  /** An object: an individual thing built from the blueprint.
      `rows` are [key, value, changed?] triples. */
  const obj = (k, o) => {
    o = o || {};
    const rows = (o.rows || [])
      .map((r) => {
        const key = Array.isArray(r) ? r[0] : r;
        const val = Array.isArray(r) ? r[1] : "";
        const changed = Array.isArray(r) && r[2] ? " changed" : "";
        return (
          '<div class="xa-obj-row"><span class="xa-obj-k">' + esc(key) +
          '</span><span class="xa-obj-v' + changed + '">' + esc(val) + "</span></div>"
        );
      })
      .join("");
    return el(k, Object.assign({}, o.style), {
      cls: "xa-obj",
      html:
        '<div class="xa-obj-h">' +
        '<span class="xa-obj-ic">' + icon(o.icon || "user", 32) + "</span>" +
        '<span class="xa-obj-name">' + esc(o.name || "") + "</span>" +
        '<span class="xa-obj-kind">' + esc(o.kind || "object") + "</span>" +
        "</div>" +
        '<div class="xa-obj-b">' + rows + "</div>",
    });
  };

  /** A single meaningful connector: a line with an arrowhead and an
      optional short label. `dir` is "v" (down) or "h" (right). */
  const link = (k, o) => {
    o = o || {};
    const vertical = o.dir !== "h";
    const out = [
      el(k, Object.assign({
        width: vertical ? 3 : (o.len || 80),
        height: vertical ? (o.len || 80) : 3,
      }, o.style), { cls: "xa-link " + (vertical ? "v" : "h") + (o.on ? " on" : "") }),
    ];
    if (o.label) {
      out.push(el(k + "-l", Object.assign({
        fontSize: 16, fontWeight: 800, color: T.accent2, whiteSpace: "nowrap",
      }, o.labelStyle), { cls: "xa-link-l", text: o.label }));
    }
    return out;
  };

  /** The one-line takeaway under a scene. */
  const say = (k, html, o) =>
    el(k, Object.assign({}, o && o.style), {
      cls: "xa-say",
      html,
    });

  /** A slim, unclipped progress bar for the whole story. */
  const prog = (k, p, o) =>
    el(k, Object.assign({}, o && o.style), {
      cls: "xa-prog",
      html: '<i style="width:' + Math.round(clamp01(p) * 100) + '%"></i>',
    });

  /* ============================================================
     HUB EXPLAINERS (6)
     ============================================================ */

  /* 1. Mental models — brain core with orbiting idea nodes */
  function mentalModels(t) {
    const b = bob(t, 8, 1.33);
    const sp = spin(t, 1);
    const fade = easeOut(span(t, 0, 0.15));
    const nodes = [
      { left: 210, top: 140, color: T.accent, phase: 0 },
      { right: 190, top: 184, color: T.accent2, phase: 36 },
      { left: 288, bottom: 118, color: T.accent, phase: 72 },
      { right: 250, bottom: 140, color: T.good, phase: 108 },
    ];
    return [
      el("ring", { left: "50%", top: "50%", width: 190, height: 190, marginLeft: -95, marginTop: -95, transform: "rotate(" + sp + "deg)" }, { cls: "xa-ring" }),
      core("core", "🧠", { size: 88, style: { left: "50%", top: "50%", transform: "translate(-50%,-50%) translateY(" + b + "px)", opacity: fade } }),
      ...nodes.map((n, i) => {
        const w = loop(t, 1, n.phase);
        return dot("n" + i, {
          size: 14,
          color: n.color,
          style: Object.assign({}, n, { transform: "translate(" + w * 12 + "px," + -w * 12 + "px)" }),
        });
      }),
      caption(t, "A <b>mental model</b> is the picture in your head that makes the code make sense"),
    ];
  }

  /* 2. State & behavior — data chip linked to action chip */
  function stateBehavior(t) {
    const bA = bob(t, 7, 1.7);
    const bB = bob(t, 7, 1.7, 51);
    const tr = travel(t, 1.67);
    return [
      chip("data", "balance = 1000", { color: T.accent, style: { left: 70, top: "50%", transform: "translateY(-50%) translateY(" + bA + "px)" } }),
      chip("act", "deposit(500)", { color: T.accent2, style: { right: 70, top: "50%", transform: "translateY(-50%) translateY(" + bB + "px)" } }),
      ...track("link", t, { left: "50%", top: "50%", width: 150, cycles: 1.67, from: T.accent, to: T.accent2 }),
      caption(t, "<b>State</b> is what an object knows · <b>behavior</b> is what it can do"),
    ];
  }

  /* 3. Abstraction — messy internals behind a clean panel */
  function abstraction(t) {
    const b = bob(t, 7, 1.6);
    const p = pulse(t, 1.54);
    const mess = [
      { left: 115, top: 119, phase: 0 },
      { left: 288, top: 281, phase: 15 },
      { left: 154, top: 400, phase: 30 },
      { right: 134, top: 162, phase: 45 },
      { right: 250, top: 356, phase: 60 },
    ];
    return [
      ...mess.map((m, i) =>
        el("m" + i, Object.assign({ width: 52, height: 16, borderRadius: 8, background: "#3b4a72", opacity: blink(t, 1.54, 0.25, m.phase) * 0.55 }, m))
      ),
      el("halo", { left: "50%", top: "50%", width: 200, height: 100, marginLeft: -100, marginTop: -50, borderRadius: 26, border: "2px solid #67e8f966", transform: "scale(" + p.scale + ")", opacity: p.opacity }),
      chip("api", "calculate()", { color: "#fff", style: { left: "50%", top: "50%", transform: "translate(-50%,-50%) translateY(" + b + "px)", background: "linear-gradient(135deg,#2563eb,#7c3aed)", border: "none", fontSize: 24, boxShadow: "0 0 30px #2563eb77" } }),
      caption(t, "A clean <b>interface</b> hides messy internals — you use it without reading it"),
    ];
  }

  /* 4. Composition — small blocks assembling into one */
  function composition(t) {
    const bW = bob(t, 8, 1.5);
    const blocks = [
      { left: 154, top: 130, label: "A", phase: 0 },
      { left: 154, bottom: 119, label: "B", phase: 30 },
      { left: 365, top: 270, label: "C", phase: 60 },
    ];
    return [
      ...blocks.map((bl, i) =>
        el("b" + i, Object.assign({ width: 62, height: 62, borderRadius: 18, border: "1px solid " + T.border, background: T.panel2, fontSize: 22, fontWeight: 800, color: T.accent, transform: "translateY(" + bob(t, 7, 1.71, bl.phase) + "px)" }, bl), { cls: "xa-box", text: bl.label })
      ),
      core("whole", "📦", { size: 110, from: "#059669", to: "#0891b2", glow: "#0891b277", style: { right: 154, top: "50%", marginTop: -55, borderRadius: 28, fontSize: 46, transform: "translateY(" + bW + "px)" } }),
      caption(t, "<b>Composition</b> builds big things out of small, focused parts"),
    ];
  }

  /* 5. Experimentation — knobs driving a live bar */
  function experimentation(t) {
    const g = grow(t, 0.24, 0.82, 1.11);
    const bl = blink(t, 2.22, 0.3);
    const knob = (k, glyph, color, deg, style) =>
      el(k, Object.assign({ width: 72, height: 72, borderRadius: "50%", border: "3px solid " + color, background: "#0e1730", fontSize: 30, color, transform: "rotate(" + deg + "deg)" }, style), { cls: "xa-box", text: glyph });
    return [
      knob("k1", "↻", T.accent, spin(t, 1), { left: 154, top: 140 }),
      knob("k2", "↺", T.accent2, -spin(t, 1), { left: 154, bottom: 130 }),
      el("track", { left: 326, right: 154, top: "50%", height: 22, marginTop: -11, borderRadius: 99, background: "#0e1730", border: "1px solid " + T.border, overflow: "hidden" }),
      el("fill", { left: 327, top: "50%", height: 20, marginTop: -10, width: "calc((100% - 480px) * " + g + ")", borderRadius: 99, background: "linear-gradient(90deg," + T.accent + "," + T.accent2 + ")" }),
      el("readout", { right: 134, top: 119, fontSize: 20, fontWeight: 800, color: T.good, opacity: bl }, { text: "result: 87" }),
      caption(t, "<b>Experiment</b>: change one thing, run it, watch what happens"),
    ];
  }

  /* 6. Design trade-offs — a balance beam tilting between two pans */
  function designTradeoffs(t) {
    const w = loop(t, 1);
    const tilt = -8 + w * 16;
    const bL = bob(t, 6, 2);
    const bR = bob(t, 6, 2, 60);
    const pan = (k, label, color, style) =>
      el(k, Object.assign({ top: "calc(44% + 14px)", width: 90, height: 60, borderRadius: "0 0 24px 24px", border: "1px solid " + T.border, background: T.panel2, fontSize: 16, fontWeight: 800, color }, style), { cls: "xa-box", text: label });
    return [
      el("beam", { left: "50%", top: "44%", width: 260, height: 6, marginLeft: -130, borderRadius: 6, background: "linear-gradient(90deg," + T.accent + "," + T.accent2 + ")", transform: "rotate(" + tilt + "deg)" }),
      dot("pivot", { size: 20, color: "#fff", style: { left: "50%", top: "44%", marginLeft: -10, marginTop: -10, boxShadow: "0 0 20px #fff" } }),
      el("stand", { left: "50%", top: "calc(44% + 8px)", width: 4, height: 70, marginLeft: -2, background: "#3d5488" }),
      pan("panL", "simple", T.accent, { left: "calc(50% - 130px)", transform: "translateY(" + bL + "px)" }),
      pan("panR", "flexible", T.accent2, { left: "calc(50% + 40px)", transform: "translateY(" + bR + "px)" }),
      caption(t, "Every design choice <b>trades</b> one quality for another"),
    ];
  }

  /* ============================================================
     OOP COURSE EXPLAINERS (19)
     ============================================================ */

  /* 1. Mental model — state + behavior in one object */
  function oopMentalModel(t) {
    const b = bob(t, 8, 1.25);
    return [
      objectCard("c1", "Customer", ["name", "country", "risk_score"], { style: { left: 90, top: 130, transform: "translateY(" + b + "px)" } }),
      ...track("l1", t, { left: 320, top: 232, width: 130, cycles: 1.67 }),
      objectCard("c2", "Behavior", ["deposit()", "withdraw()", "is_high_risk()"], { color: T.accent2, style: { right: 90, top: 130, transform: "translateY(" + -b + "px)" } }),
      caption(t, "An object = <b>state</b> (data) + <b>behavior</b> (actions)"),
    ];
  }

  /* 2. Class vs object — one blueprint, many objects.
     A five-scene story on one t in [0,1). Each scene owns a slice
     and shows ONE idea, so a beginner can follow it without the
     paragraph below the animation:
       1. the blueprint      (a class describes structure + behavior)
       2. create Alice       (an object is made from the blueprint)
       3. create Bob         (one class -> many objects)
       4. same structure     (both came from the same class)
       5. different state    (each object keeps its own state)
     Motion is only used to show cause -> effect. */
  function oopClassVsObject(t) {
    /* ---- scene windows ---- */
    const s1 = span(t, 0.00, 0.20);   // the blueprint
    const s2 = span(t, 0.20, 0.40);   // create Alice
    const s3 = span(t, 0.40, 0.60);   // create Bob
    const s4 = span(t, 0.60, 0.78);   // same structure
    const s5 = span(t, 0.78, 1.00);   // different state

    /* ---- scene 1: the blueprint, alone and large ---- */
    const bpIn = easeOut(span(t, 0.00, 0.08));
    // members reveal one at a time
    const r1 = easeOut(span(t, 0.05, 0.10));
    const r2 = easeOut(span(t, 0.08, 0.13));
    const r3 = easeOut(span(t, 0.11, 0.16));
    const rowOp = [r1, r2, r3];

    /* ---- the blueprint moves to the top as objects appear ---- */
    const move = easeInOut(span(t, 0.20, 0.30));
    const bpW = 420 - move * 120;      // 420 -> 300
    const bpX = 480 - bpW / 2;         // keep it centered over the fork
    const bpY = 130 - move * 70;       // 130 -> 60
    const bpScale = bpW / 420;

    /* ---- scene 2: create Alice ---- */
    const aliceIn = easeOut(span(t, 0.26, 0.36));
    const linkA = easeOut(span(t, 0.22, 0.30));
    // the scene-1 line clears out before Alice arrives
    const s1SayOut = 1 - easeInOut(span(t, 0.20, 0.26));

    /* ---- scene 3: create Bob ---- */
    const bobIn = easeOut(span(t, 0.46, 0.56));
    const linkB = easeOut(span(t, 0.42, 0.50));
    // objects slide apart to make room for the fork
    const spread = easeInOut(span(t, 0.40, 0.50));

    /* ---- scene 4: same structure ---- */
    const structHi = easeInOut(span(t, 0.62, 0.72));

    /* ---- scene 5: different state ---- */
    const change = easeInOut(span(t, 0.82, 0.90));
    const aliceBal = Math.round(100 + change * 100);   // 100 -> 200
    const sayIn = easeOut(span(t, 0.94, 0.99));
    const finalIn = easeOut(span(t, 0.94, 1.00));

    /* ---- object positions ---- */
    // Alice starts centered under the blueprint, then slides left.
    const aliceX = 330 - spread * 200;   // 330 -> 130
    const bobX = 330 + spread * 200;     // 330 -> 530
    const objY = 300;
    const objW = 300;

    /* ---- the blueprint ---- */
    const blueprint = bp("bp", {
      icon: "box",
      name: "Customer",
      kind: "blueprint",
      rows: ["name", "country", "deposit()"],
      rowOpacity: rowOp,
      style: {
        left: bpX, top: bpY, width: bpW,
        opacity: bpIn,
        transform: "scale(" + bpScale + ")",
        transformOrigin: "top center",
      },
    });

    /* ---- the two objects ---- */
    const alice = obj("alice", {
      icon: "user", name: "Alice", kind: "object",
      rows: [
        ["name", '"Alice"', structHi > 0.5],
        ["balance", String(aliceBal), change > 0.5],
      ],
      style: {
        left: aliceX, top: objY, width: objW,
        opacity: aliceIn,
        transform: "translateY(" + (1 - aliceIn) * 24 + "px)",
      },
    });
    const bob = obj("bob", {
      icon: "user", name: "Bob", kind: "object",
      rows: [
        ["name", '"Bob"', structHi > 0.5],
        ["balance", "500", false],
      ],
      style: {
        left: bobX, top: objY, width: objW,
        opacity: bobIn,
        transform: "translateY(" + (1 - bobIn) * 24 + "px)",
      },
    });

    /* ---- connectors: the blueprint "creates" each object ---- */
    // A vertical link from the blueprint (or the fork bus) down to an object.
    // The "creates" label sits in the clear gap just above the object, so it
    // never collides with the blueprint above it. It fades out in scene 4.
    const labelFade = 1 - easeInOut(span(t, 0.60, 0.66));
    const labelIn = easeOut(span(t, 0.30, 0.36));
    const dropLink = (k, x, on, label, fromBus) => {
      const top = bpY + 210 * bpScale + (fromBus ? 26 : 0);
      const len = objY - top - 6;
      return link(k, {
        dir: "v", len: len, on: on > 0.5,
        style: { left: x, top: top, opacity: on },
        label: label,
        labelStyle: { left: x + 14, top: objY - 34, opacity: on * labelFade * labelIn },
      });
    };

    /* ---- scene 5: the working diagram clears away as the model lands ---- */
    const workFade = 1 - easeInOut(span(t, 0.88, 0.96));

    /* ---- the story ---- */
    const out = [
      /* the blueprint (present from scene 1 onward) */
      Object.assign({}, blueprint, {
        style: Object.assign({}, blueprint.style, { opacity: bpIn * workFade }),
      }),

      /* scene 1 — the one-line idea, under the blueprint */
      say("s1-say", "A class describes the <b>structure</b> and <b>behavior</b> of a Customer", {
        style: {
          left: 180, top: 430, width: 600,
          opacity: easeOut(span(t, 0.12, 0.18)) * s1SayOut,
        },
      }),

      /* scene 2 — create Alice */
      ...(s2 > 0 ? dropLink("la", aliceX + objW / 2, linkA * workFade, "creates", s3 > 0) : []),
      Object.assign({}, alice, {
        style: Object.assign({}, alice.style, { opacity: aliceIn * workFade }),
      }),

      /* scene 3 — create Bob: a bus under the class forks to both */
      ...(s3 > 0 ? [
        el("bus", {
          left: aliceX + objW / 2, top: bpY + 210 * bpScale + 26,
          width: (bobX - aliceX), height: 3,
          background: T.border,
          opacity: easeOut(span(t, 0.40, 0.46)) * workFade,
        }),
        el("bus-stem", {
          left: (aliceX + bobX + objW) / 2 - 1, top: bpY + 210 * bpScale,
          width: 3, height: 26,
          background: T.border,
          opacity: easeOut(span(t, 0.40, 0.46)) * workFade,
        }),
      ] : []),
      ...(s3 > 0 ? dropLink("lb", bobX + objW / 2, linkB * workFade, "creates", true) : []),
      Object.assign({}, bob, {
        style: Object.assign({}, bob.style, { opacity: bobIn * workFade }),
      }),

      /* scene 4 — same structure: a bracket linking both objects */
      ...(s4 > 0 ? [
        el("struct-bar", {
          left: aliceX + objW / 2, top: objY - 12,
          width: (bobX - aliceX), height: 3,
          background: structHi > 0.5 ? T.accent : T.border,
          opacity: easeOut(span(t, 0.60, 0.66)) * workFade,
        }),
        el("struct-stem", {
          left: (aliceX + bobX + objW) / 2 - 1, top: objY - 12,
          width: 3, height: 12,
          background: structHi > 0.5 ? T.accent : T.border,
          opacity: easeOut(span(t, 0.60, 0.66)) * workFade,
        }),
      ] : []),

      /* scene 5 — the payoff line, in the clear band under the objects */
      say("s5-say",
        change > 0.5
          ? "<b>Alice</b> changed. <b>Bob</b> didn't."
          : "Each object keeps its <b>own</b> state",
        {
          style: {
            left: 180, top: 310, width: 600,
            opacity: sayIn * workFade,
          },
        }),

      /* the final mental model, centered once the diagram has cleared */
      el("final", {
        left: 180, top: 240, width: 600, textAlign: "center",
        opacity: finalIn,
      }, {
        cls: "xa-final",
        html: "One class. <span class='accent'>Many objects.</span>",
      }),

      /* the scene title (top-left) + progress (top-right) */
      title("title",
        t < 0.20 ? "The blueprint" :
        t < 0.40 ? "Create an object" :
        t < 0.60 ? "Create another" :
        t < 0.78 ? "Same structure" :
                   "Different state",
        null,
        { style: { left: 40, top: 30 } }),
      prog("prog", t, { style: { left: 700, top: 40, width: 220 } }),
    ];

    return out;
  }

  /* 3. self & attributes — parameter flows into the object */
  function oopSelfAttributes(t) {
    const b = bob(t, 7, 1.25);
    const flow = travel(t, 1.54);
    return [
      /* the parameter arrives from the call */
      node("param", {
        icon: "variable",
        title: "full_name",
        tag: "parameter",
        color: T.warn,
        rows: ['"Bilal"'],
        style: { left: 60, top: 130, width: 220, transform: "translateY(" + b + "px)" },
      }),
      el("plabel", { left: 60, top: 250, width: 220, textAlign: "center", fontSize: 14, color: T.muted }, { text: "a local name, gone after __init__" }),

      /* the copy: parameter -> attribute */
      el("wire", { left: 280, top: 178, width: 120, height: 2, background: T.border }),
      dot("pkt", { size: 14, color: "#fff", style: { left: 280 + flow.t * 120, top: 172, opacity: flow.opacity } }),
      el("flabel", { left: 300, top: 150, fontSize: 13, fontWeight: 700, color: T.muted }, { text: "copied onto" }),

      /* the object keeps the value as an attribute */
      node("self", {
        icon: "user",
        title: "self",
        tag: "object",
        color: T.accent,
        rows: ["user_name = 'Bilal'"],
        style: { left: 420, top: 130, width: 240, transform: "translateY(" + b + "px)" },
      }),
      el("alabel", { left: 420, top: 250, width: 240, textAlign: "center", fontSize: 14, color: T.muted }, { text: "an attribute, lives with the object" }),

      codePanel("code", t, ["def __init__(self, full_name):", "    self.user_name = full_name"], { highlight: 1, style: { left: 60, bottom: 100 } }),
      caption(t, "The parameter is copied onto the object — the two names need not match"),
    ];
  }

  /* 4. __init__ — the object is built, then initialized */
  function oopInitMethod(t) {
    const build = easeOut(span(t, 0, 0.25));
    const fill = easeInOut(span(t, 0.33, 0.67));
    const p = pulse(t, 1.67);
    return [
      /* the empty object appears */
      container("shell", {
        label: "new object", icon: "box", color: T.border,
        style: { left: 90, top: 110, width: 250, height: 250, opacity: 0.35 + build * 0.65, transform: "scale(" + (0.9 + build * 0.1) + ")" },
      }),
      el("halo", { left: 90, top: 110, width: 250, height: 250, borderRadius: 18, border: "2px solid " + T.accent, transform: "scale(" + p.scale + ")", opacity: p.opacity * 0.6 }),
      el("empty", { left: 90, top: 110, width: 250, height: 250, display: "grid", placeItems: "center", opacity: 1 - fill }, { html: '<span style="opacity:.5">' + icon("box", 54, T.muted) + "</span>" }),

      /* __init__ fills in the state */
      el("wire", { left: 350, top: 150, width: 2, height: 170, background: T.border }),
      dot("pkt", { size: 16, color: T.accent, style: { left: 343, top: 150 + fill * 170, opacity: 0.4 + fill * 0.6 } }),
      el("flabel", { left: 366, top: 220, fontSize: 14, fontWeight: 700, color: T.muted, opacity: fill }, { text: "__init__ fills state" }),

      node("card", {
        icon: "building-community",
        title: "BankAccount",
        tag: "object",
        color: T.accent,
        rows: ["owner = 'Bilal'", "balance = 1000"],
        style: { left: 470, top: 130, width: 250, opacity: 0.25 + fill * 0.75 },
      }),
      caption(t, "<b>__init__</b> runs automatically and fills in the object's state"),
    ];
  }

  /* 5. Methods — calling a method on an object */
  function oopMethods(t) {
    const b = bob(t, 7, 1.25);
    const balance = 1000 + Math.round(loop(t, 1.43) * 500);
    const flow = travel(t, 1.43);
    return [
      node("acct", {
        icon: "building-community",
        title: "account",
        tag: "object",
        color: T.accent,
        rows: ["balance = " + balance],
        style: { left: 70, top: 130, width: 240, transform: "translateY(" + b + "px)" },
      }),
      el("wire", { left: 310, top: 178, width: 130, height: 2, background: T.border }),
      dot("pkt", { size: 14, color: "#fff", style: { left: 310 + flow.t * 130, top: 172, opacity: flow.opacity } }),
      el("flabel", { left: 330, top: 150, fontSize: 13, fontWeight: 700, color: T.muted }, { text: "call" }),

      node("call", {
        icon: "function",
        title: "account.deposit(500)",
        tag: "method",
        color: T.accent2,
        rows: ["self = account", "amount = 500"],
        style: { left: 460, top: 130, width: 260, transform: "translateY(" + -b + "px)" },
      }),
      message("note", "Python passes the object as <b>self</b> automatically", {
        tone: "info", icon: "arrow-right",
        style: { left: 70, top: 300, width: 400 },
      }),
      codePanel("code", t, ["def deposit(self, amount):", "    self.balance += amount"], { highlight: 1, style: { left: 70, bottom: 90 } }),
      caption(t, "A method always receives the object it was called on"),
    ];
  }

  /* 6. Encapsulation — the object guards its own rules */
  function oopEncapsulation(t) {
    const blocked = t > 0.5;
    const shake = blocked ? Math.sin(t * 60) * 6 : 0;
    const p = pulse(t, 1.82);
    return [
      el("halo", { left: 90, top: 110, width: 250, height: 250, borderRadius: 20, border: "2px solid " + T.accent, transform: "scale(" + p.scale + ")", opacity: p.opacity * 0.5 }),
      node("vault", {
        icon: "lock",
        title: "BankAccount",
        tag: "guarded",
        color: T.accent,
        rows: ["balance = 1000", "withdraw() checks rules"],
        style: { left: 90, top: 110, width: 250 },
      }),
      el("vlabel", { left: 90, top: 260, width: 250, textAlign: "center", fontSize: 14, color: T.muted }, { text: "state + rules live together" }),

      message("verdict", blocked
        ? "withdraw(-50) <b>rejected</b> — amount must be positive"
        : "withdraw(200) <b>allowed</b> — amount &le; balance", {
        tone: blocked ? "no" : "ok",
        icon: blocked ? "circle-x" : "circle-check",
        style: { left: 420, top: 150, width: 400, transform: "translateX(" + shake + "px)" },
      }),
      caption(t, "State and the rules that change it live together — callers can't bypass them"),
    ];
  }

  /* 7. Inheritance — child reuses and extends the parent */
  function oopInheritance(t) {
    const bP = bob(t, 6, 1.25);
    const bC = bob(t, 6, 1.25, 48);
    const tr = travel(t, 1.67);
    return [
      node("parent", {
        icon: "user",
        title: "Customer",
        tag: "parent",
        color: T.accent,
        rows: ["name", "introduce()"],
        style: { left: "50%", top: 70, marginLeft: -130, width: 260, transform: "translateY(" + bP + "px)" },
      }),
      el("stem", { left: "50%", top: 232, width: 2, height: 90, marginLeft: -1, background: "linear-gradient(180deg," + T.accent + "," + T.accent2 + ")" }),
      dot("pkt", { size: 16, color: "#fff", style: { left: "50%", marginLeft: -8, top: 232 + tr.t * 90, opacity: tr.opacity } }),
      el("ilabel", { left: "50%", top: 258, marginLeft: 16, fontSize: 13, fontWeight: 700, color: T.muted }, { text: "inherits" }),

      node("child", {
        icon: "building-community",
        title: "BusinessCustomer",
        tag: "child",
        color: T.accent2,
        rows: ["company", "name  (inherited)", "introduce()  (inherited)"],
        style: { left: "50%", top: 330, marginLeft: -130, width: 260, transform: "translateY(" + bC + "px)" },
      }),
      message("super", "<b>super().__init__(name)</b> reuses the parent's setup", {
        tone: "info", icon: "arrow-up",
        style: { left: 60, top: 380, width: 300 },
      }),
      caption(t, "The child gets everything the parent has, then adds its own"),
    ];
  }

  /* 8. Polymorphism — same call, different behavior */
  function oopPolymorphism(t) {
    const active = Math.floor(t * 3) % 3;
    const shapes = [
      { label: "Individual", icon: "user", color: T.accent, result: '"Individual risk model"' },
      { label: "Business", icon: "building-community", color: T.accent2, result: '"Business risk model"' },
      { label: "Trust", icon: "shield-check", color: T.good, result: '"Trust risk model"' },
    ];
    return [
      node("call", {
        icon: "function",
        title: "customer.risk_type()",
        tag: "one call",
        color: "#fff",
        style: { left: "50%", top: 50, marginLeft: -140, width: 280 },
      }),
      el("stem", { left: "50%", top: 128, width: 2, height: 34, marginLeft: -1, background: T.border }),
      ...shapes.map((s, i) => {
        const on = i === active;
        return node("s" + i, {
          icon: s.icon,
          title: s.label,
          tag: on ? "active" : "",
          color: s.color,
          rows: [s.result],
          style: {
            left: 70 + i * 285, top: 170, width: 250,
            transform: "translateY(" + bob(t, 6, 1.33, i * 30) + "px) scale(" + (on ? 1.04 : 1) + ")",
            boxShadow: on ? "0 0 26px " + s.color + "55" : "none",
            opacity: on ? 1 : 0.72,
          },
        });
      }),
      caption(t, "One call, many behaviors — the object decides how it responds"),
    ];
  }

  /* 9. Abstraction — a promise, not an implementation */
  function oopAbstraction(t) {
    const p = pulse(t, 1.54);
    const b = bob(t, 7, 1.25);
    return [
      node("abc", {
        icon: "file-code",
        title: "RiskModel",
        tag: "ABC",
        color: T.accent2,
        rows: ["@abstractmethod", "calculate(customer): ..."],
        cls: "ghost",
        style: { left: 70, top: 110, width: 280 },
      }),
      el("alabel", { left: 70, top: 250, width: 280, textAlign: "center", fontSize: 14, color: T.muted }, { text: "the promise — no body" }),

      el("wire", { left: 360, top: 178, width: 110, height: 2, background: "linear-gradient(90deg," + T.accent2 + "," + T.accent + ")" }),
      el("flabel", { left: 372, top: 150, fontSize: 13, fontWeight: 700, color: T.muted }, { text: "implements" }),

      node("impl", {
        icon: "calculator",
        title: "KYCModel",
        tag: "concrete",
        color: T.accent,
        rows: ["def calculate(self, c):", "    return c.risk_score * 1.2"],
        style: { left: 480, top: 110, width: 300, transform: "translateY(" + b + "px)", boxShadow: "0 0 26px #67e8f933" },
      }),
      el("ilabel", { left: 480, top: 250, width: 300, textAlign: "center", fontSize: 14, color: T.muted }, { text: "the implementation — hidden detail" }),

      el("halo", { left: "50%", top: 320, width: 260, height: 70, marginLeft: -130, borderRadius: 16, border: "2px solid " + T.accent, transform: "scale(" + p.scale + ")", opacity: p.opacity * 0.5 }),
      message("use", "Callers depend on <b>RiskModel</b>, not on KYCModel", {
        tone: "info", icon: "eye",
        style: { left: "50%", top: 335, marginLeft: -180, width: 360 },
      }),
      caption(t, "Callers depend on the interface, not on how it is implemented"),
    ];
  }

  /* 10. Composition — an object that contains another object */
  function oopComposition(t) {
    const b = bob(t, 7, 1.25);
    const flow = travel(t, 1.67);
    return [
      node("c1", {
        icon: "user",
        title: "Customer",
        tag: "object",
        color: T.accent,
        rows: ["name = 'Bilal'", "address →"],
        style: { left: 70, top: 130, width: 250, transform: "translateY(" + b + "px)" },
      }),
      el("wire", { left: 320, top: 178, width: 130, height: 2, background: T.border }),
      dot("pkt", { size: 14, color: "#fff", style: { left: 320 + flow.t * 130, top: 172, opacity: flow.opacity } }),
      el("flabel", { left: 340, top: 150, fontSize: 13, fontWeight: 700, color: T.muted }, { text: "has-a" }),

      node("c2", {
        icon: "world",
        title: "Address",
        tag: "object",
        color: T.good,
        rows: ["country = 'SE'", "city = 'Stockholm'"],
        style: { left: 470, top: 130, width: 260, transform: "translateY(" + -b + "px)" },
      }),
      message("rel", "Customer <b>has-a</b> Address — a small part inside a bigger whole", {
        tone: "ok", icon: "components",
        style: { left: 70, top: 300, width: 460 },
      }),
      caption(t, "Composition builds big things from small, focused parts"),
    ];
  }

  /* 11. Dunder methods — Python hooks into your object */
  function oopDunder(t) {
    const showStr = t > 0.375;
    const fill = easeInOut(span(t, 0.17, 0.375));
    return [
      codePanel("code", t, ["def __str__(self):", '    return f"Customer: {self.name}"'], { highlight: 1, style: { left: 70, top: 80 } }),
      node("call", {
        icon: "function",
        title: "print(c)",
        tag: "built-in",
        color: T.accent2,
        style: { left: 70, top: 210, width: 260 },
      }),
      el("wire", { left: 200, top: 290, width: 2, height: 60, background: T.border }),
      dot("pkt", { size: 16, color: T.accent, style: { left: 193, top: 290 + fill * 60, opacity: 0.4 + fill * 0.6 } }),
      el("flabel", { left: 216, top: 310, fontSize: 13, fontWeight: 700, color: T.muted }, { text: "Python calls __str__" }),

      message("out", showStr ? "<b>Customer: Bilal</b>" : "…", {
        tone: showStr ? "ok" : "info",
        icon: showStr ? "circle-check" : "clock",
        style: { left: 430, top: 300, width: 380, fontFamily: "monospace" },
      }),
      caption(t, "Dunder methods let your objects plug into Python's built-in syntax"),
    ];
  }

  /* 12. Properties — attribute syntax, method logic */
  function oopProperties(t) {
    const rejected = t > 0.583;
    const shake = rejected ? Math.sin(t * 60) * 5 : 0;
    const b = bob(t, 6, 1.25);
    return [
      node("attr", {
        icon: "variable",
        title: "account.balance",
        tag: "looks plain",
        color: T.accent,
        rows: ["reads like an attribute"],
        style: { left: 70, top: 130, width: 260, transform: "translateY(" + b + "px)" },
      }),
      el("wire", { left: 340, top: 178, width: 120, height: 2, background: "linear-gradient(90deg," + T.accent + "," + T.accent2 + ")" }),
      el("flabel", { left: 352, top: 150, fontSize: 13, fontWeight: 700, color: T.muted }, { text: "runs" }),

      node("setter", {
        icon: "settings",
        title: "@balance.setter",
        tag: "logic",
        color: T.accent2,
        rows: ["if value < 0:", "    raise ValueError(...)"],
        style: { left: 470, top: 130, width: 290 },
      }),
      message("verdict", rejected
        ? "account.balance = -5 <b>rejected</b>"
        : "account.balance = 1500 <b>accepted</b>", {
        tone: rejected ? "no" : "ok",
        icon: rejected ? "circle-x" : "circle-check",
        style: { left: 470, top: 300, width: 290, transform: "translateX(" + shake + "px)" },
      }),
      caption(t, "Clean attribute syntax, with real logic and validation underneath"),
    ];
  }

  /* 13. Instance / class / static methods */
  function oopMethodKinds(t) {
    const active = Math.floor(t * 3) % 3;
    const kinds = [
      { tag: "self", name: "Instance", icon: "user", color: T.accent, note: "needs object state" },
      { tag: "cls", name: "Class", icon: "box", color: T.accent2, note: "alternate constructor" },
      { tag: "—", name: "Static", icon: "tool", color: T.good, note: "plain utility" },
    ];
    return [
      ...kinds.map((k, i) => {
        const on = i === active;
        return node("k" + i, {
          icon: k.icon,
          title: k.name,
          tag: k.tag,
          color: k.color,
          rows: [k.note],
          style: {
            left: 60 + i * 290, top: 130, width: 260,
            transform: "translateY(" + bob(t, 6, 1.33, i * 30) + "px) scale(" + (on ? 1.04 : 1) + ")",
            boxShadow: on ? "0 0 28px " + k.color + "55" : "none",
            opacity: on ? 1 : 0.72,
          },
        });
      }),
      caption(t, "Same class, three kinds of method — pick by what the behavior needs"),
    ];
  }

  /* 14. Dataclasses — boilerplate collapses into a declaration */
  function oopDataclasses(t) {
    const collapse = easeInOut(span(t, 0.25, 0.625));
    return [
      el("before", { left: 60, top: 100, opacity: 1 - collapse, transform: "translateX(" + -collapse * 40 + "px)" }, {
        html: '<div class="xa-code">' + esc("class Customer:\n    def __init__(self, name, country):\n        self.name = name\n        self.country = country\n    def __repr__(self): ...") + "</div><div style='font-size:15px;color:" + T.muted + ";margin-top:10px'>lots of boilerplate</div>",
      }),
      el("after", { right: 60, top: 100, opacity: collapse, transform: "translateX(" + (1 - collapse) * 40 + "px)" }, {
        html: '<div class="xa-code"><span class="hl">@dataclass</span>' + esc("\nclass Customer:\n    name: str\n    country: str") + "</div><div style='font-size:15px;color:" + T.good + ";margin-top:10px'>same result, far less code</div>",
      }),
      el("arrow", { left: "50%", top: 250, marginLeft: -30, fontSize: 34, color: T.accent, opacity: 0.4 + collapse * 0.6 }, { text: "→" }),
      caption(t, "<b>@dataclass</b> writes the boring methods for you"),
    ];
  }

  /* 15. Designing a system — nouns, data, actions, relationships */
  function oopDesignSystem(t) {
    const step = Math.min(3, Math.floor(t * 4));
    const steps = [
      { n: "1", t: "Nouns", icon: "box", d: "Customer, Account, Alert" },
      { n: "2", t: "Data", icon: "database", d: "id, country, balance" },
      { n: "3", t: "Actions", icon: "function", d: "deposit, calculate_risk" },
      { n: "4", t: "Relationships", icon: "git-branch", d: "Customer has Accounts" },
    ];
    return [
      ...steps.map((s, i) => {
        const on = i <= step;
        return node("s" + i, {
          icon: s.icon,
          title: s.t,
          tag: s.n,
          color: on ? T.accent : T.border,
          rows: [s.d],
          style: {
            left: 60 + i * 220, top: 150, width: 195,
            opacity: on ? 1 : 0.4,
            transform: "translateY(" + bob(t, 5, 1.33, i * 24) + "px)",
            boxShadow: on ? "0 0 22px #67e8f933" : "none",
          },
        });
      }),
      caption(t, "Break the problem into concepts before you write a single class"),
    ];
  }

  /* 16. KYC risk model — the pieces working together */
  function oopKyc(t) {
    const score = Math.round(lerp(0, 87, easeInOut(span(t, 0.33, 1))));
    const high = score >= 70;
    const b = bob(t, 6, 1.25);
    const flow = travel(t, 1.67);
    return [
      node("c1", {
        icon: "user",
        title: "Customer",
        tag: "state",
        color: T.accent,
        rows: ["country = 'SE'", "risk_score = 65"],
        style: { left: 60, top: 110, width: 250, transform: "translateY(" + b + "px)" },
      }),
      el("wire", { left: 310, top: 158, width: 120, height: 2, background: "linear-gradient(90deg," + T.accent + "," + T.accent2 + ")" }),
      dot("pkt", { size: 14, color: "#fff", style: { left: 310 + flow.t * 120, top: 152, opacity: flow.opacity } }),
      el("flabel", { left: 330, top: 130, fontSize: 13, fontWeight: 700, color: T.muted }, { text: "scores" }),

      node("c2", {
        icon: "calculator",
        title: "RiskModel",
        tag: "behavior",
        color: T.accent2,
        rows: ["calculate(customer)"],
        style: { left: 450, top: 110, width: 250, transform: "translateY(" + -b + "px)" },
      }),

      el("score", { right: 60, top: 120, width: 190, textAlign: "center", fontSize: 62, fontWeight: 800, color: high ? T.bad : T.good, fontVariantNumeric: "tabular-nums" }, { text: String(score) }),
      el("slabel", { right: 60, top: 195, width: 190, textAlign: "center", fontSize: 14, color: T.muted }, { text: "final score" }),
      badge("badge", high ? "HIGH RISK" : "normal", { tone: high ? "no" : "ok", style: { right: 95, top: 224 } }),
      message("note", "Customer holds <b>state</b> · RiskModel holds <b>one responsibility</b>", {
        tone: "info", icon: "components",
        style: { left: 60, top: 300, width: 500 },
      }),
      caption(t, "Separate responsibilities: the customer knows itself, the model scores it"),
    ];
  }

  /* 17. Knowledge check — questions resolving into answers */
  function oopKnowledgeCheck(t) {
    const solved = Math.floor(t * 4) % 4;
    return [
      ...[0, 1, 2, 3].map((i) => {
        const on = i === solved;
        return el("q" + i, { left: 110 + i * 190, top: 170, width: 130, height: 130, borderRadius: 24, border: "2px solid " + (on ? T.good : T.border), background: on ? "#12251c" : "#131c33", fontSize: 46, fontWeight: 800, color: on ? T.good : T.muted, transform: "translateY(" + bob(t, 6, 1.5, i * 20) + "px) scale(" + (on ? 1.06 : 1) + ")", boxShadow: on ? "0 0 26px #4ade8055" : "none" }, { cls: "xa-box", text: on ? "✓" : "?" });
      }),
      caption(t, "Check yourself as you go — the score updates instantly"),
    ];
  }

  /* 18. Experiment lab — change, run, observe */
  function oopExperimentLab(t) {
    const run = (t * 1.33) % 1;
    const bubbling = run > 0.33;
    const b = bob(t, 7, 1.33);
    return [
      el("flask", { left: 110, top: 120, width: 180, height: 200, borderRadius: "16px 16px 40px 40px", border: "2px solid " + T.accent, background: "#0e1730", overflow: "hidden", transform: "translateY(" + b + "px)" }),
      el("liquid", { left: 111, right: 111, bottom: 121, height: (bubbling ? 55 : 20) + "%", background: "linear-gradient(180deg," + T.accent + "55," + T.accent2 + "88)" }),
      ...[0, 1, 2].map((i) =>
        dot("bub" + i, { size: 10, color: T.accent, style: { left: 140 + i * 55, bottom: 20 + ((run * 100 * (1 + i * 0.4)) % 60) + "%", opacity: bubbling ? 0.9 : 0.2 } })
      ),
      el("flabel", { left: 110, top: 336, fontSize: 16, color: T.muted }, { text: "🧪 change one thing" }),
      codePanel("code", t, ["class Customer:", '    name = "Bilal"', "", "print(customer.name)"], { highlight: bubbling ? 3 : 1, style: { right: 90, top: 130 } }),
      el("out", { right: 90, top: 300, width: 300, padding: "14px 18px", borderRadius: 12, border: "1px solid " + T.border, background: T.code, fontFamily: "monospace", fontSize: 18, color: bubbling ? T.good : T.muted }, { text: bubbling ? "Bilal" : "…" }),
      caption(t, "Run a tiny example, watch what happens, then change one thing"),
    ];
  }

  /* 19. Cheat sheet — the terms stacking up */
  function oopCheatSheet(t) {
    const rows = [
      { t: "Class", s: "class Customer:" },
      { t: "Object", s: "c = Customer()" },
      { t: "Attribute", s: "self.name" },
      { t: "Method", s: "def deposit(self):" },
      { t: "Inheritance", s: "class B(A):" },
    ];
    return [
      ...rows.map((r, i) => {
        const appear = easeOut(span(t, i * 0.1, i * 0.1 + 0.17));
        return el("r" + i, { left: 90, right: 90, top: 70 + i * 74, padding: "14px 20px", borderRadius: 12, border: "1px solid " + T.border, background: T.panel2, opacity: appear, transform: "translateX(" + (1 - appear) * -24 + "px)" }, {
          html: "<div style='display:flex;align-items:center;justify-content:space-between'><span style='color:" + T.accent + ";font-weight:800;font-size:20px'>" + r.t + "</span><span style='font-family:monospace;font-size:17px;color:#c8d3f0'>" + esc(r.s) + "</span></div>",
        });
      }),
      caption(t, "The vocabulary you'll use every day, in one place"),
    ];
  }

  /* ---------- registry ---------- */
  global.ExplainerScenes = {
    hub: {
      MentalModels: mentalModels,
      StateBehavior: stateBehavior,
      Abstraction: abstraction,
      Composition: composition,
      Experimentation: experimentation,
      DesignTradeoffs: designTradeoffs,
    },
    oop: {
      OopMentalModel: oopMentalModel,
      OopClassVsObject: oopClassVsObject,
      OopSelfAttributes: oopSelfAttributes,
      OopInitMethod: oopInitMethod,
      OopMethods: oopMethods,
      OopEncapsulation: oopEncapsulation,
      OopInheritance: oopInheritance,
      OopPolymorphism: oopPolymorphism,
      OopAbstraction: oopAbstraction,
      OopComposition: oopComposition,
      OopDunderMethods: oopDunder,
      OopProperties: oopProperties,
      OopMethodKinds: oopMethodKinds,
      OopDataclasses: oopDataclasses,
      OopDesignSystem: oopDesignSystem,
      OopKycRiskModel: oopKyc,
      OopKnowledgeCheck: oopKnowledgeCheck,
      OopExperimentLab: oopExperimentLab,
      OopCheatSheet: oopCheatSheet,
    },
  };
})(window);

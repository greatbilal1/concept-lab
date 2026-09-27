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

  /* 2. Class vs object — one blueprint, many instances */
  function oopClassVsObject(t) {
    const b1 = bob(t, 7, 1.33);
    const b2 = bob(t, 7, 1.33, 45);
    return [
      el("cls", { left: 80, top: 150, width: 150, height: 190, borderRadius: 18, transform: "translateY(" + b1 + "px)" }, { cls: "xa-box dashed", html: "class<br>Customer<div style='font-size:13px;font-weight:500;color:" + T.muted + ";margin-top:6px'>blueprint</div>" }),
      ...track("l1", t, { left: 240, top: 245, width: 150, cycles: 1.82 }),
      objectCard("o1", "customer1", ["name = 'Bilal'", "country = 'SE'"], { style: { right: 130, top: 90, transform: "translateY(" + b1 + "px)" } }),
      objectCard("o2", "customer2", ["name = 'Ada'", "country = 'NO'"], { color: T.good, style: { right: 130, top: 290, transform: "translateY(" + b2 + "px)" } }),
      caption(t, "A <b>class</b> is the blueprint; each <b>object</b> is a separate thing built from it"),
    ];
  }

  /* 3. self & attributes — parameter flows into the object */
  function oopSelfAttributes(t) {
    const b = bob(t, 7, 1.25);
    return [
      chip("param", 'full_name = "Bilal"', { color: T.warn, style: { left: 70, top: 120, fontSize: 18 } }),
      el("plabel", { left: 70, top: 168, fontSize: 15, color: T.muted }, { text: "parameter" }),
      ...track("l1", t, { left: 300, top: 145, width: 150, cycles: 1.54, from: T.warn, to: T.accent }),
      objectCard("self", "self", ["user_name = 'Bilal'"], { style: { right: 90, top: 110, transform: "translateY(" + b + "px)" } }),
      el("alabel", { right: 90, top: 218, fontSize: 15, color: T.muted }, { text: "attribute on the object" }),
      codePanel("code", t, ["def __init__(self, full_name):", "    self.user_name = full_name"], { highlight: 1, style: { left: 70, bottom: 110 } }),
      caption(t, "The parameter is copied onto the object — the two names need not match"),
    ];
  }

  /* 4. __init__ — the object is built, then initialized */
  function oopInitMethod(t) {
    const build = easeOut(span(t, 0, 0.25));
    const fill = easeInOut(span(t, 0.33, 0.67));
    const p = pulse(t, 1.67);
    return [
      el("ghost", { left: 120, top: 130, width: 200, height: 200, borderRadius: 24, border: "2px dashed " + T.border, opacity: 0.35 + build * 0.65, transform: "scale(" + (0.85 + build * 0.15) + ")" }),
      el("halo", { left: 120, top: 130, width: 200, height: 200, borderRadius: 24, border: "2px solid " + T.accent, transform: "scale(" + p.scale + ")", opacity: p.opacity * 0.7 }),
      el("obj", { left: 120, top: 130, width: 200, height: 200, borderRadius: 24, background: T.panel2, border: "1px solid " + T.border, fontSize: 46 }, { cls: "xa-box", text: "✨" }),
      el("olabel", { left: 120, top: 348, fontSize: 16, color: T.muted }, { text: "object created" }),
      el("wire", { left: 380, top: 150, width: 4, height: 160, borderRadius: 4, background: T.border }),
      dot("pkt", { size: 16, color: T.accent, style: { left: 374, top: 150 + fill * 160, opacity: 0.4 + fill * 0.6 } }),
      objectCard("card", "BankAccount", ["owner = 'Bilal'", "balance = 1000"], { style: { right: 90, top: 130, opacity: 0.25 + fill * 0.75 } }),
      el("flabel", { right: 90, top: 238, fontSize: 16, color: T.muted, opacity: fill }, { text: "state filled in by __init__" }),
      caption(t, "<b>__init__</b> runs automatically and fills in the object's state"),
    ];
  }

  /* 5. Methods — calling a method on an object */
  function oopMethods(t) {
    const b = bob(t, 7, 1.25);
    const balance = 1000 + Math.round(loop(t, 1.43) * 500);
    return [
      objectCard("acct", "account", ["balance = " + balance], { style: { left: 90, top: 140, transform: "translateY(" + b + "px)" } }),
      ...track("l1", t, { left: 320, top: 190, width: 170, cycles: 1.43 }),
      chip("call", "account.deposit(500)", { color: T.accent2, style: { right: 90, top: 160, fontSize: 20 } }),
      el("note", { right: 90, top: 214, fontSize: 15, color: T.muted }, { html: "Python passes the object as <span style='font-family:monospace'>self</span>" }),
      codePanel("code", t, ["def deposit(self, amount):", "    self.balance += amount"], { highlight: 1, style: { left: 90, bottom: 110 } }),
      caption(t, "A method always receives the object it was called on"),
    ];
  }

  /* 6. Encapsulation — the object guards its own rules */
  function oopEncapsulation(t) {
    const blocked = t > 0.5;
    const shake = blocked ? Math.sin(t * 60) * 6 : 0;
    const p = pulse(t, 1.82);
    return [
      el("halo", { left: 110, top: 120, width: 230, height: 230, borderRadius: 28, border: "2px solid " + T.accent, transform: "scale(" + p.scale + ")", opacity: p.opacity * 0.6 }),
      el("vault", { left: 110, top: 120, width: 230, height: 230, borderRadius: 28, background: T.panel2, border: "2px solid " + T.accent, fontSize: 54, boxShadow: "0 0 34px #67e8f933" }, { cls: "xa-box", text: "🔒" }),
      el("vlabel", { left: 110, top: 362, fontSize: 16, color: T.muted }, { text: "BankAccount owns the rules" }),
      el("verdict", { right: 90, top: 150, width: 300, padding: "16px 18px", borderRadius: 14, border: "1px solid " + (blocked ? T.bad : T.good), background: blocked ? "#2a1420" : "#12251c", color: blocked ? T.bad : T.good, fontSize: 18, fontWeight: 700, transform: "translateX(" + shake + "px)" }, {
        html: (blocked ? "✕ withdraw(-50) rejected" : "✓ withdraw(200) allowed") + "<div style='font-size:14px;font-weight:500;color:" + T.muted + ";margin-top:6px'>" + (blocked ? "amount must be positive" : "amount &lt;= balance") + "</div>",
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
      objectCard("parent", "Customer", ["name", "introduce()"], { style: { left: "50%", top: 70, marginLeft: -105, transform: "translateY(" + bP + "px)" } }),
      el("stem", { left: "50%", top: 232, width: 4, height: 90, marginLeft: -2, borderRadius: 4, background: "linear-gradient(180deg," + T.accent + "," + T.accent2 + ")" }),
      dot("pkt", { size: 16, color: "#fff", style: { left: "50%", marginLeft: -8, top: 232 + tr.t * 90, opacity: tr.opacity } }),
      objectCard("child", "BusinessCustomer", ["company", "inherits Customer"], { color: T.accent2, style: { left: "50%", top: 330, marginLeft: -105, transform: "translateY(" + bC + "px)" } }),
      el("super", { right: 70, top: 300, fontFamily: "monospace", fontSize: 17, color: T.good }, { text: "super().__init__(name)" }),
      caption(t, "The child gets everything the parent has, then adds its own"),
    ];
  }

  /* 8. Polymorphism — same call, different behavior */
  function oopPolymorphism(t) {
    const active = Math.floor(t * 3) % 3;
    const shapes = [
      { label: "Individual", color: T.accent, result: '"Individual risk model"' },
      { label: "Business", color: T.accent2, result: '"Business risk model"' },
      { label: "Trust", color: T.good, result: '"Trust risk model"' },
    ];
    return [
      chip("call", "customer.risk_type()", { color: "#fff", style: { left: "50%", top: 60, marginLeft: -110, fontSize: 20, background: "#1b2745" } }),
      el("stem", { left: "50%", top: 108, width: 2, height: 40, marginLeft: -1, background: T.border }),
      ...shapes.map((s, i) => {
        const on = i === active;
        return el("s" + i, { left: 90 + i * 270, top: 170, width: 230, borderRadius: 16, border: "2px solid " + (on ? s.color : T.border), background: on ? "#1b2745" : "#131c33", padding: "14px 16px", transform: "translateY(" + bob(t, 6, 1.33, i * 30) + "px) scale(" + (on ? 1.04 : 1) + ")", boxShadow: on ? "0 0 26px " + s.color + "55" : "none" }, {
          html: "<div style='color:" + s.color + ";font-weight:800;font-size:19px'>" + s.label + "</div><div style='font-family:monospace;font-size:14px;color:" + T.muted + ";margin-top:8px'>" + esc(s.result) + "</div>",
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
      el("abc", { left: 90, top: 110, width: 260, borderRadius: 16, border: "2px dashed " + T.accent2, background: "#131c33", padding: "16px 18px" }, {
        html: "<div style='color:" + T.accent2 + ";font-weight:800;font-size:19px'>RiskModel (ABC)</div><div style='font-family:monospace;font-size:15px;color:" + T.muted + ";margin-top:10px'>@abstractmethod<br>def calculate(self, customer): ...</div><div style='font-size:14px;color:" + T.muted + ";margin-top:10px'>the promise — no body</div>",
      }),
      el("wire", { left: 380, top: 190, width: 120, height: 4, borderRadius: 4, background: "linear-gradient(90deg," + T.accent2 + "," + T.accent + ")" }),
      el("impl", { right: 90, top: 130, width: 260, borderRadius: 16, border: "2px solid " + T.accent, background: T.panel2, padding: "16px 18px", transform: "translateY(" + b + "px)", boxShadow: "0 0 26px #67e8f933" }, {
        html: "<div style='color:" + T.accent + ";font-weight:800;font-size:19px'>KYCModel</div><div style='font-family:monospace;font-size:15px;color:#c8d3f0;margin-top:10px'>def calculate(self, customer):<br>&nbsp;&nbsp;&nbsp;&nbsp;return customer.risk_score * 1.2</div><div style='font-size:14px;color:" + T.muted + ";margin-top:10px'>the implementation — hidden detail</div>",
      }),
      el("halo", { left: "50%", top: 300, width: 220, height: 90, marginLeft: -110, borderRadius: 20, border: "2px solid " + T.accent, transform: "scale(" + p.scale + ")", opacity: p.opacity * 0.5 }),
      chip("use", "model.calculate(c)", { color: "#fff", style: { left: "50%", top: 330, marginLeft: -95, background: "linear-gradient(135deg,#2563eb,#7c3aed)", border: "none", fontSize: 20 } }),
      caption(t, "Callers depend on the interface, not on how it is implemented"),
    ];
  }

  /* 10. Composition — an object that contains another object */
  function oopComposition(t) {
    const b = bob(t, 7, 1.25);
    return [
      objectCard("c1", "Customer", ["name = 'Bilal'", "address →"], { style: { left: 90, top: 140, transform: "translateY(" + b + "px)" } }),
      ...track("l1", t, { left: 320, top: 190, width: 170, cycles: 1.67, to: T.good }),
      objectCard("c2", "Address", ["country = 'SE'", "city = 'Stockholm'"], { color: T.good, style: { right: 90, top: 140, transform: "translateY(" + -b + "px)" } }),
      el("rel", { left: "50%", top: 330, marginLeft: -150, width: 300, textAlign: "center", fontSize: 20, fontWeight: 800, color: T.good }, { html: "Customer <span style='color:" + T.muted + "'>has-a</span> Address" }),
      caption(t, "Composition builds big things from small, focused parts"),
    ];
  }

  /* 11. Dunder methods — Python hooks into your object */
  function oopDunder(t) {
    const showStr = t > 0.375;
    const fill = easeInOut(span(t, 0.17, 0.375));
    return [
      codePanel("code", t, ["def __str__(self):", '    return f"Customer: {self.name}"'], { highlight: 1, style: { left: 80, top: 90 } }),
      el("call", { left: 80, top: 210, fontFamily: "monospace", fontSize: 18, color: T.accent2 }, { text: "print(c)" }),
      el("wire", { left: 80, top: 250, width: 4, height: 60, borderRadius: 4, background: T.border }),
      dot("pkt", { size: 16, color: T.accent, style: { left: 74, top: 250 + fill * 60 } }),
      el("out", { right: 80, top: 250, width: 330, padding: "18px 20px", borderRadius: 14, border: "1px solid " + (showStr ? T.good : T.border), background: showStr ? "#12251c" : "#131c33", fontFamily: "monospace", fontSize: 19, color: showStr ? T.good : T.muted }, { text: showStr ? "Customer: Bilal" : "…" }),
      el("note", { right: 80, top: 320, fontSize: 15, color: T.muted }, { html: "Python calls <span style='font-family:monospace'>__str__</span> for you" }),
      caption(t, "Dunder methods let your objects plug into Python's built-in syntax"),
    ];
  }

  /* 12. Properties — attribute syntax, method logic */
  function oopProperties(t) {
    const rejected = t > 0.583;
    const shake = rejected ? Math.sin(t * 60) * 5 : 0;
    const b = bob(t, 6, 1.25);
    return [
      el("attr", { left: 90, top: 130, width: 250, borderRadius: 16, border: "1px solid " + T.border, background: T.panel2, padding: "16px 18px", transform: "translateY(" + b + "px)" }, {
        html: "<div style='color:" + T.accent + ";font-weight:800;font-size:19px'>account.balance</div><div style='font-size:15px;color:" + T.muted + ";margin-top:8px'>looks like a plain attribute</div>",
      }),
      el("wire", { left: 360, top: 190, width: 130, height: 4, borderRadius: 4, background: "linear-gradient(90deg," + T.accent + "," + T.accent2 + ")" }),
      el("setter", { right: 80, top: 120, width: 300, borderRadius: 16, border: "2px solid " + T.accent2, background: "#131c33", padding: "16px 18px" }, {
        html: "<div style='color:" + T.accent2 + ";font-weight:800;font-size:19px'>@balance.setter</div><div style='font-family:monospace;font-size:15px;color:#c8d3f0;margin-top:10px'>if value &lt; 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;raise ValueError(...)</div><div style='font-size:14px;color:" + T.muted + ";margin-top:10px'>validation runs behind the scenes</div>",
      }),
      el("verdict", { right: 80, top: 300, width: 300, padding: "12px 16px", borderRadius: 12, border: "1px solid " + (rejected ? T.bad : T.good), background: rejected ? "#2a1420" : "#12251c", color: rejected ? T.bad : T.good, fontSize: 17, fontWeight: 700, transform: "translateX(" + shake + "px)" }, { text: rejected ? "✕ account.balance = -5" : "✓ account.balance = 1500" }),
      caption(t, "Clean attribute syntax, with real logic and validation underneath"),
    ];
  }

  /* 13. Instance / class / static methods */
  function oopMethodKinds(t) {
    const active = Math.floor(t * 3) % 3;
    const kinds = [
      { tag: "self", name: "Instance", color: T.accent, note: "needs object state" },
      { tag: "cls", name: "Class", color: T.accent2, note: "alternate constructor" },
      { tag: "—", name: "Static", color: T.good, note: "plain utility" },
    ];
    return [
      ...kinds.map((k, i) => {
        const on = i === active;
        return el("k" + i, { left: 70 + i * 285, top: 120, width: 250, borderRadius: 18, border: "2px solid " + (on ? k.color : T.border), background: on ? "#1b2745" : "#131c33", padding: "18px 18px 20px", transform: "translateY(" + bob(t, 6, 1.33, i * 30) + "px) scale(" + (on ? 1.04 : 1) + ")", boxShadow: on ? "0 0 28px " + k.color + "55" : "none" }, {
          html: "<div style='display:inline-block;padding:3px 12px;border-radius:999px;background:" + k.color + "22;color:" + k.color + ";font-family:monospace;font-size:15px;font-weight:700'>" + k.tag + "</div><div style='color:" + k.color + ";font-weight:800;font-size:21px;margin-top:12px'>" + k.name + "</div><div style='font-size:15px;color:" + T.muted + ";margin-top:8px'>" + k.note + "</div>",
        });
      }),
      caption(t, "Same class, three kinds of method — pick by what the behavior needs"),
    ];
  }

  /* 14. Dataclasses — boilerplate collapses into a declaration */
  function oopDataclasses(t) {
    const collapse = easeInOut(span(t, 0.25, 0.625));
    return [
      el("before", { left: 70, top: 100, opacity: 1 - collapse, transform: "translateX(" + -collapse * 40 + "px)" }, {
        html: '<div class="xa-code">' + esc("class Customer:\n    def __init__(self, name, country):\n        self.name = name\n        self.country = country\n    def __repr__(self): ...") + "</div><div style='font-size:15px;color:" + T.muted + ";margin-top:10px'>lots of boilerplate</div>",
      }),
      el("after", { right: 70, top: 100, opacity: collapse, transform: "translateX(" + (1 - collapse) * 40 + "px)" }, {
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
      { n: "1", t: "Nouns", d: "Customer, Account, Alert" },
      { n: "2", t: "Data", d: "id, country, balance" },
      { n: "3", t: "Actions", d: "deposit, calculate_risk" },
      { n: "4", t: "Relationships", d: "Customer has Accounts" },
    ];
    return [
      ...steps.map((s, i) => {
        const on = i <= step;
        return el("s" + i, { left: 70 + i * 215, top: 150, width: 190, borderRadius: 16, border: "2px solid " + (on ? T.accent : T.border), background: on ? "#1b2745" : "#131c33", padding: "16px 16px 18px", opacity: on ? 1 : 0.4, transform: "translateY(" + bob(t, 5, 1.33, i * 24) + "px)", boxShadow: on ? "0 0 22px #67e8f933" : "none" }, {
          html: "<div style='width:30px;height:30px;border-radius:50%;background:" + (on ? T.accent : T.border) + ";color:#0b1020;display:grid;place-items:center;font-weight:800;font-size:16px'>" + s.n + "</div><div style='color:" + (on ? T.accent : T.muted) + ";font-weight:800;font-size:19px;margin-top:12px'>" + s.t + "</div><div style='font-size:14px;color:" + T.muted + ";margin-top:8px'>" + s.d + "</div>",
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
    return [
      objectCard("c1", "Customer", ["country = 'SE'", "risk_score = 65"], { style: { left: 70, top: 110, transform: "translateY(" + b + "px)" } }),
      el("wire", { left: 300, top: 160, width: 130, height: 4, borderRadius: 4, background: "linear-gradient(90deg," + T.accent + "," + T.accent2 + ")" }),
      objectCard("c2", "RiskModel", ["calculate(customer)"], { color: T.accent2, style: { left: 440, top: 110, transform: "translateY(" + -b + "px)" } }),
      el("score", { right: 70, top: 130, width: 190, textAlign: "center", fontSize: 62, fontWeight: 800, color: high ? T.bad : T.good, fontVariantNumeric: "tabular-nums" }, { text: String(score) }),
      el("slabel", { right: 70, top: 205, width: 190, textAlign: "center", fontSize: 15, color: T.muted }, { text: "final score" }),
      el("badge", { right: 108, top: 232, padding: "8px 14px", borderRadius: 999, background: high ? "#2a1420" : "#12251c", color: high ? T.bad : T.good, fontWeight: 800, fontSize: 16 }, { text: high ? "HIGH RISK" : "normal" }),
      el("note", { left: 70, bottom: 120, fontSize: 17, color: T.muted }, { html: "Customer holds <span style='color:" + T.accent + "'>state</span> · RiskModel holds <span style='color:" + T.accent2 + "'>one responsibility</span>" }),
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

/* ============================================================
   Concept Lab — concept explorer
   ------------------------------------------------------------
   The "concept explorer" cards on the hub. These are editorial
   (hand-authored) rather than derived from the catalogue, so they
   live in their own data file instead of inside the renderer.

   Each entry:
     anim     scene name registered in assets/js/anim/scenes.js
     cls      CSS class for the stage styling (anim-*)
     ico      emoji shown in the card body
     title    card heading (may contain HTML entities)
     body     one-paragraph explanation
     link     where "learn more" points
     cta      label for the link
     art      inline HTML for the animated stage
     related  ids of related concepts (by `id`)
     courses  ids of courses that use this concept (used-by-course)
   ============================================================ */

window.CONCEPTS = [
  {
    id: "mental-models",
    anim: "MentalModels", cls: "anim-mental", ico: "🧠", title: "Mental models",
    body: "Build the right picture before memorizing syntax. A good model predicts how code behaves — so you stop guessing and start reasoning.",
    link: "oop_interactive_course.html#intro", cta: "See it in OOP",
    related: ["state-behavior", "abstraction"],
    courses: ["oop", "programming-computational-thinking"],
    art: '<div class="ring"></div><div class="core">🧠</div><div class="node n1"></div><div class="node n2"></div><div class="node n3"></div><div class="node n4"></div>'
  },
  {
    id: "state-behavior",
    anim: "StateBehavior", cls: "anim-state", ico: "🔁", title: "State &amp; behavior",
    body: "Data plus the operations that act on it. Keeping them together is what turns a loose variable into a self-contained object.",
    link: "oop_interactive_course.html#mental", cta: "See it in OOP",
    related: ["mental-models", "abstraction", "composition"],
    courses: ["oop", "variables-types-memory"],
    art: '<div class="chip data">balance = 1000</div><div class="link"></div><div class="chip act">deposit(500)</div>'
  },
  {
    id: "abstraction",
    anim: "Abstraction", cls: "anim-abstract", ico: "🧱", title: "Abstraction",
    body: "Hide the details, expose the interface. Callers depend on a promise, not on how the promise is kept — so internals can change freely.",
    link: "oop_interactive_course.html#abstract", cta: "See it in OOP",
    related: ["composition", "design-tradeoffs", "mental-models"],
    courses: ["oop", "functions-modular-thinking"],
    art: '<div class="mess"><span></span><span></span><span></span><span></span><span></span></div><div class="panel">calculate()</div>'
  },
  {
    id: "composition",
    anim: "Composition", cls: "anim-compose", ico: "🔗", title: "Composition",
    body: "Build big things out of small, focused parts. A “has-a” relationship is usually more flexible than an “is-a” one.",
    link: "oop_interactive_course.html#composition", cta: "See it in OOP",
    related: ["abstraction", "design-tradeoffs"],
    courses: ["oop", "functions-modular-thinking"],
    art: '<div class="wire w1"></div><div class="wire w2"></div><div class="wire w3"></div><div class="wire w4"></div><div class="blk b1">A</div><div class="blk b2">B</div><div class="blk b3">C</div><div class="whole">📦</div>'
  },
  {
    id: "experimentation",
    anim: "Experimentation", cls: "anim-experiment", ico: "🧪", title: "Experimentation",
    body: "Change one thing, observe, repeat. Running a tiny example teaches faster than reading ten paragraphs about it.",
    link: "oop_interactive_course.html#play", cta: "Try the lab",
    related: ["mental-models", "design-tradeoffs"],
    courses: ["oop"],
    art: '<div class="knob k1">↻</div><div class="knob k2">↺</div><div class="track"><div class="fill"></div></div><div class="readout">result: 87</div>'
  },
  {
    id: "design-tradeoffs",
    anim: "DesignTradeoffs", cls: "anim-trade", ico: "📐", title: "Design trade-offs",
    body: "Every choice buys something and costs something. The skill is naming the trade-off out loud instead of pretending it isn’t there.",
    link: "oop_interactive_course.html#design", cta: "See it in OOP",
    related: ["abstraction", "composition", "experimentation"],
    courses: ["oop", "system-design"],
    art: '<div class="stand"></div><div class="beam"></div><div class="pivot"></div><div class="pan left">simple</div><div class="pan right">flexible</div>'
  }
];

/* ============================================================
   CSS & Layout Systems — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "the-box-model-content-padding-border-margin", file: "lessons/0001-the-box-model-content-padding-border-margin.html", title: "The box model: content, padding, border, margin", topic: "The Box Model", anim: "PulseNodes" },
  { n: 2, id: "box-sizing-border-box-versus-content-box", file: "lessons/0002-box-sizing-border-box-versus-content-box.html", title: "Box-sizing: border-box versus content-box", topic: "The Box Model", anim: "PulseNodes" },
  { n: 3, id: "display-inline-block-and-flow", file: "lessons/0003-display-inline-block-and-flow.html", title: "Display: inline, block, and normal flow", topic: "Normal Flow & Positioning", anim: "PulseNodes" },
  { n: 4, id: "positioning-relative-absolute-fixed-sticky", file: "lessons/0004-positioning-relative-absolute-fixed-sticky.html", title: "Positioning: relative, absolute, fixed, sticky", topic: "Normal Flow & Positioning", anim: "PulseNodes" },
  { n: 5, id: "flexbox-one-dimensional-layout", file: "lessons/0005-flexbox-one-dimensional-layout.html", title: "Flexbox: one-dimensional layout", topic: "Modern Layout (Flex/Grid)", anim: "PulseNodes" },
  { n: 6, id: "css-grid-two-dimensional-layout", file: "lessons/0006-css-grid-two-dimensional-layout.html", title: "CSS Grid: two-dimensional layout", topic: "Modern Layout (Flex/Grid)", anim: "PulseNodes" },
  { n: 7, id: "media-queries-and-responsive-units", file: "lessons/0007-media-queries-and-responsive-units.html", title: "Media queries and responsive units", topic: "Responsive Design & Debugging", anim: "PulseNodes" },
  { n: 8, id: "debugging-css-layout-bugs", file: "lessons/0008-debugging-css-layout-bugs.html", title: "Debugging CSS layout bugs", topic: "Responsive Design & Debugging", anim: "PulseNodes" }
];

/* ============================================================
   CSS & Layout Systems — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "box-model", title: "The Box Model",
    terms: [
      { term: "Box model", def: "The foundational CSS layout geometry defining an element's content area, padding, border, and margin.", lesson: 1, tags: ["box-model"] },
      { term: "border-box", def: "A box-sizing mode where declared width and height include padding and borders, preventing expansion.", lesson: 2, tags: ["sizing"] },
      { term: "Margin collapsing", def: "The layout behavior where adjacent vertical margins combine into a single margin equal to the largest value.", lesson: 1, tags: ["layout"] },
      { term: "Normal flow", def: "The default browser placement algorithm laying block elements vertically and inline elements horizontally.", lesson: 3, tags: ["flow"] }
    ]
  },
  {
    id: "flow-position", title: "Normal Flow & Positioning",
    terms: [
      { term: "Containing block", def: "The ancestor box that serves as the coordinate frame of reference for sizing and positioning an element.", lesson: 4, tags: ["positioning"] },
      { term: "Stacking context", def: "A three-dimensional conceptual layering along the z-axis determining which elements render in front.", lesson: 4, tags: ["z-index"] },
      { term: "Sticky positioning", def: "A hybrid positioning mode where an element behaves as relative until a scroll threshold, then sticks like fixed.", lesson: 4, tags: ["positioning"] },
      { term: "Inline-block", def: "A display mode formatting as an inline box outwardly while accepting width, height, and vertical margins inwardly.", lesson: 3, tags: ["display"] }
    ]
  },
  {
    id: "modern-layout", title: "Flexbox & CSS Grid",
    terms: [
      { term: "Flexbox", def: "A one-dimensional layout model optimized for distributing space and aligning items along a main axis.", lesson: 5, tags: ["flexbox"] },
      { term: "Main axis", def: "The primary direction along which flex items are placed, defined by flex-direction (row or column).", lesson: 5, tags: ["flexbox"] },
      { term: "CSS Grid", def: "A two-dimensional layout system that organizes content into intersecting rows and columns simultaneously.", lesson: 6, tags: ["grid"] },
      { term: "Fractional unit (fr)", def: "A flexible grid unit representing a proportional share of available space in the grid container.", lesson: 6, tags: ["grid"] }
    ]
  },
  {
    id: "responsive-design", title: "Responsive Design & Debugging",
    terms: [
      { term: "Media query", def: "A CSS technique applying styles conditionally based on device characteristics like viewport width.", lesson: 7, tags: ["responsive"] },
      { term: "Fluid typography", def: "Text sizing that scales smoothly between minimum and maximum bounds using the clamp() function.", lesson: 7, tags: ["typography"] },
      { term: "Horizontal overflow", def: "A visual defect where content exceeds the viewport width, creating an unwanted horizontal scrollbar.", lesson: 8, tags: ["debugging"] },
      { term: "DevTools Layout overlays", def: "Interactive browser tooling displaying flexbox axes, grid tracks, and box model boundaries.", lesson: 8, tags: ["tools"] }
    ]
  }
];

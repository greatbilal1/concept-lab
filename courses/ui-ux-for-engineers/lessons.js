/* ============================================================
   UI & UX for Engineers — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "design-thinking-and-affordances", file: "lessons/0001-design-thinking-and-affordances.html", title: "Design Thinking, Affordances & Signifiers", topic: "Design Fundamentals & Mental Models", anim: "Layers" },
  { n: 2, id: "visual-hierarchy-and-scanning", file: "lessons/0002-visual-hierarchy-and-scanning.html", title: "Visual Hierarchy, Scanning Patterns & Gestalt", topic: "Visual Hierarchy, Spacing & Layout", anim: "LayersOrbit" },
  { n: 3, id: "spacing-systems-and-grids", file: "lessons/0003-spacing-systems-and-grids.html", title: "Spacing Systems & The 8pt Grid", topic: "Visual Hierarchy, Spacing & Layout", anim: "Bars" },
  { n: 4, id: "layout-composition-and-responsive", file: "lessons/0004-layout-composition-and-responsive.html", title: "Layout Composition & Cognitive Load", topic: "Visual Hierarchy, Spacing & Layout", anim: "CodePulse" },
  { n: 5, id: "typography-scale-and-readability", file: "lessons/0005-typography-scale-and-readability.html", title: "Typography Scales & Readability", topic: "Typography, Color Systems & Contrast", anim: "Flow" },
  { n: 6, id: "color-systems-and-semantic-palettes", file: "lessons/0006-color-systems-and-semantic-palettes.html", title: "Color Systems & Semantic Palettes", topic: "Typography, Color Systems & Contrast", anim: "LayersOrbit" },
  { n: 7, id: "interaction-feedback-and-loading-states", file: "lessons/0007-interaction-feedback-and-loading-states.html", title: "Interaction Feedback, Skeletons & Latency", topic: "Feedback, Micro-Interactions & Usability Testing", anim: "CodePulse" },
  { n: 8, id: "design-systems-and-usability-testing", file: "lessons/0008-design-systems-and-usability-testing.html", title: "Design Tokens & Usability Heuristics", topic: "Feedback, Micro-Interactions & Usability Testing", anim: "Layers" }
];

/* ============================================================
   UI & UX for Engineers — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "design-thinking-and-affordances", title: "Design Thinking & Affordances",
    terms: [
      { term: "Affordance", def: "The perceived and actual properties of an object that determine how it could possibly be used (e.g. a flat plate affords pushing).", lesson: 1, tags: ["psychology","ux"] },
      { term: "Signifier", def: "Any perceivable indicator that communicates where action should take place (e.g. a drop shadow on a button indicating it is clickable).", lesson: 1, tags: ["design","ui"] },
      { term: "Mental model", def: "A user's internal conceptual understanding of how a system works, built from past experiences with real-world objects and other software.", lesson: 1, tags: ["psychology"] },
      { term: "Norman door", def: "A door with confusing visual signifiers (such as a handle that you must push instead of pull), symbolizing flawed interface design.", lesson: 1, tags: ["usability"] }
    ]
  },
  {
    id: "hierarchy-and-spacing", title: "Visual Hierarchy & Spacing",
    terms: [
      { term: "Visual hierarchy", def: "The intentional arrangement of visual elements on a screen to signify their order of importance using size, weight, color, and spacing.", lesson: 2, tags: ["layout","hierarchy"] },
      { term: "F-Pattern", def: "The natural eye-tracking pattern where web users read horizontally across the top, down the left edge, and horizontally across the middle.", lesson: 2, tags: ["reading","ux"] },
      { term: "8pt Grid", def: "A design system layout standard where all element dimensions, paddings, and margins are multiples of 8 pixels (with 4px half-steps).", lesson: 3, tags: ["spacing","grid"] },
      { term: "Whitespace", def: "Negative space around and between user interface elements, used to declutter layouts, separate groups, and focus attention.", lesson: 3, tags: ["design"] }
    ]
  },
  {
    id: "typography-and-color", title: "Typography & Color Systems",
    terms: [
      { term: "Typographic scale", def: "A harmonious progression of font sizes derived from a mathematical ratio (e.g. Major Third 1.25) to ensure consistent text hierarchy.", lesson: 5, tags: ["typography"] },
      { term: "Measure", def: "The length of a line of text, ideally maintained between 45 and 75 characters for comfortable horizontal reading tracking.", lesson: 5, tags: ["typography","readability"] },
      { term: "60-30-10 Rule", def: "A classic interior and UI color distribution rule: 60% dominant neutral background, 30% secondary surface structure, and 10% accent color.", lesson: 6, tags: ["color","ui"] },
      { term: "Semantic color", def: "Colors assigned explicit functional meanings in an interface (e.g. red for danger/destruction, green for success, blue for information).", lesson: 6, tags: ["color","tokens"] }
    ]
  },
  {
    id: "feedback-and-usability", title: "Interaction Feedback & Usability",
    terms: [
      { term: "Progressive disclosure", def: "A technique that defers advanced or rarely used features to secondary screens or dropdowns to prevent initial cognitive overload.", lesson: 4, tags: ["ux","patterns"] },
      { term: "Optimistic UI", def: "A frontend pattern where the UI updates immediately upon user action before the server network response arrives, rolling back if an error occurs.", lesson: 7, tags: ["frontend","feedback"] },
      { term: "Skeleton screen", def: "A low-fidelity wireframe placeholder displayed while content loads, reducing perceived wait time compared to spinning spinners.", lesson: 7, tags: ["loading","feedback"] },
      { term: "Hick's Law", def: "A psychological law stating that the time it takes to make a decision increases logarithmically with the number and complexity of choices.", lesson: 8, tags: ["psychology","laws"] }
    ]
  }
];

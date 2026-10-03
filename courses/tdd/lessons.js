/* ============================================================
   Test-Driven Development — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "red-green-refactor", file: "lessons/0001-red-green-refactor.html", title: "The TDD Rhythm: Red, Green, Refactor", topic: "TDD Rhythm", anim: "Generic" },
  { n: 2, id: "writing-the-failing-test", file: "lessons/0002-writing-the-failing-test.html", title: "Writing the Failing Test First", topic: "Test First", anim: "Generic" },
  { n: 3, id: "simplest-thing-that-could-work", file: "lessons/0003-simplest-thing-that-could-work.html", title: "The Simplest Thing That Could Possibly Work", topic: "Minimalism", anim: "Generic" },
  { n: 4, id: "the-refactor-step", file: "lessons/0004-the-refactor-step.html", title: "The Refactor Step: Improving Without Breaking", topic: "Refactoring", anim: "Generic" },
  { n: 5, id: "tdd-as-a-design-tool", file: "lessons/0005-tdd-as-a-design-tool.html", title: "TDD as a Design Tool: Interface-First Thinking", topic: "Design Impact", anim: "Generic" },
  { n: 6, id: "inside-out-vs-outside-in", file: "lessons/0006-inside-out-vs-outside-in.html", title: "Inside-Out vs Outside-In TDD", topic: "TDD Styles", anim: "Generic" },
  { n: 7, id: "tdd-traps-and-dogmatism", file: "lessons/0007-tdd-traps-and-dogmatism.html", title: "Common TDD Traps and Dogmatism", topic: "Anti-Patterns", anim: "Generic" },
  { n: 8, id: "when-tdd-shines", file: "lessons/0008-when-tdd-shines.html", title: "When TDD Shines and When to Prototype", topic: "Pragmatic Practice", anim: "Generic" }
];

/* ============================================================
   Test-Driven Development — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "rhythm", title: "TDD Rhythm & Cycles",
    terms: [
      { term: "Red-Green-Refactor", def: "The core three-phase micro-cycle of TDD: write a failing test (Red), make it pass (Green), and clean up the design (Refactor).", lesson: 1, tags: ["tdd","patterns"] },
      { term: "Test-First", def: "The discipline of authoring an automated test before writing the production code required to satisfy it.", lesson: 2, tags: ["tdd","methodology"] },
      { term: "Triangulation", def: "Driving the generalization of production algorithms by introducing two or more specific tests that refute hardcoded returns.", lesson: 3, tags: ["tdd","techniques"] }
    ]
  },
  {
    id: "design", title: "Design & Principles",
    terms: [
      { term: "Refactoring", def: "Modifying internal software structure to improve maintainability and readability without altering observable behavior.", lesson: 4, tags: ["tdd","craft"] },
      { term: "YAGNI", def: "'You Aren't Gonna Need It' — the principle of implementing functionality only when tests or requirements strictly demand it.", lesson: 3, tags: ["tdd","principles"] },
      { term: "Interface-First Design", def: "Designing APIs from the perspective of the caller by writing consumer test cases before implementation.", lesson: 2, tags: ["tdd","architecture"] }
    ]
  },
  {
    id: "schools", title: "Schools of TDD",
    terms: [
      { term: "Chicago School", def: "Classicist inside-out TDD focusing on real domain models, state verification, and minimal mocking.", lesson: 6, tags: ["tdd","schools"] },
      { term: "London School", def: "Mockist outside-in TDD focusing on top-down interface discovery and interaction verification using mocks.", lesson: 6, tags: ["tdd","schools"] },
      { term: "Spike Solution", def: "A time-boxed, throwaway prototype written to explore an unfamiliar technology or problem before TDD.", lesson: 7, tags: ["tdd","prototyping"] }
    ]
  },
  {
    id: "quality", title: "Quality & Regressions",
    terms: [
      { term: "Defect Reproduction Test", def: "A test written specifically to recreate a reported bug before implementing the bug fix.", lesson: 8, tags: ["tdd","debugging"] },
      { term: "Test Friction", def: "Difficulty encountered when writing a test, which serves as early diagnostic feedback of architectural debt.", lesson: 5, tags: ["tdd","architecture"] },
      { term: "Code Smell", def: "A surface indication in source code that usually corresponds to a deeper architectural problem or design weakness.", lesson: 4, tags: ["tdd","quality"] }
    ]
  }
];

/* ============================================================
   Refactoring & Technical Debt — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "what-is-technical-debt", file: "lessons/0001-what-is-technical-debt.html", title: "What Is Technical Debt? Deliberate vs Accidental", topic: "Debt Concepts", anim: "Generic" },
  { n: 2, id: "the-refactoring-discipline", file: "lessons/0002-the-refactoring-discipline.html", title: "The Refactoring Discipline: Preserving Observable Behavior", topic: "Discipline", anim: "Generic" },
  { n: 3, id: "characterization-tests", file: "lessons/0003-characterization-tests.html", title: "Characterization Tests: Safety Nets for Legacy Code", topic: "Legacy Code", anim: "Generic" },
  { n: 4, id: "extract-method-rename-variable", file: "lessons/0004-extract-method-rename-variable.html", title: "Extract Method and Rename Variable", topic: "Workhorse Refactorings", anim: "Generic" },
  { n: 5, id: "replace-primitives-with-objects", file: "lessons/0005-replace-primitives-with-objects.html", title: "Replacing Primitives with Objects and Value Objects", topic: "Primitive Obsession", anim: "Generic" },
  { n: 6, id: "the-strangler-fig-pattern", file: "lessons/0006-the-strangler-fig-pattern.html", title: "The Strangler Fig Pattern for Large Refactors", topic: "Architectural Refactoring", anim: "Generic" },
  { n: 7, id: "the-boy-scout-rule", file: "lessons/0007-the-boy-scout-rule.html", title: "Paying Down Debt in Iterative Slices (Boy Scout Rule)", topic: "Continuous Cleanup", anim: "Generic" },
  { n: 8, id: "communicating-debt-to-stakeholders", file: "lessons/0008-communicating-debt-to-stakeholders.html", title: "Communicating Debt and Quality to Stakeholders", topic: "Engineering Leadership", anim: "Generic" }
];

/* ============================================================
   Refactoring & Technical Debt — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "concepts", title: "Debt Concepts & Models",
    terms: [
      { term: "Technical Debt", def: "A metaphor coined by Ward Cunningham reflecting the implied cost of future rework caused by taking expedients shortcuts now.", lesson: 1, tags: ["craft","architecture"] },
      { term: "Debt Quadrant", def: "Martin Fowler's framework categorizing technical debt along Deliberate/Inadvertent and Prudent/Reckless axes.", lesson: 1, tags: ["craft","management"] },
      { term: "Cognitive Drag", def: "The mental overhead required to read, understand, and safely modify convoluted or poorly structured code.", lesson: 1, tags: ["craft","readability"] }
    ]
  },
  {
    id: "discipline", title: "Refactoring Discipline",
    terms: [
      { term: "Two Hats Discipline", def: "Kent Beck's rule of strictly separating adding new functionality from improving existing internal structure.", lesson: 2, tags: ["refactoring","discipline"] },
      { term: "Extract Method", def: "The refactoring technique of turning a cohesive block of code into a standalone, named helper function.", lesson: 4, tags: ["refactoring","techniques"] },
      { term: "Rename Symbol", def: "Updating an identifier across a codebase to reveal its true intention and domain meaning.", lesson: 4, tags: ["refactoring","naming"] }
    ]
  },
  {
    id: "patterns", title: "Smells & Migration",
    terms: [
      { term: "Primitive Obsession", def: "A code smell characterized by relying excessively on raw primitives rather than dedicated domain objects.", lesson: 5, tags: ["craft","smells"] },
      { term: "Value Object", def: "A small, immutable object whose equality is determined by its property values rather than identity.", lesson: 5, tags: ["architecture","domain"] },
      { term: "Strangler Fig Pattern", def: "An architectural pattern that incrementally replaces a legacy system by routing slices of traffic to new services.", lesson: 6, tags: ["architecture","migration"] }
    ]
  },
  {
    id: "practice", title: "Continuous Practice",
    terms: [
      { term: "Characterization Test", def: "A test that documents and locks down the existing behavior of legacy software before refactoring.", lesson: 3, tags: ["testing","legacy"] },
      { term: "Boy Scout Rule", def: "The continuous cleanup principle: always leave the code cleaner than you found it on every commit.", lesson: 7, tags: ["craft","culture"] },
      { term: "Cycle Time", def: "The total elapsed time from the start of development on a task until it is running in production.", lesson: 8, tags: ["metrics","management"] }
    ]
  }
];

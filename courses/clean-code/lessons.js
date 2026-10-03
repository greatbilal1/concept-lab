/* ============================================================
   Clean Code & Code Smells — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "meaningful-names-and-intention", file: "lessons/0001-meaningful-names-and-intention.html", title: "Meaningful names and intention", topic: "Meaningful Names & Simplicity", anim: "Code" },
  { n: 2, id: "small-functions-and-doing-one-thing", file: "lessons/0002-small-functions-and-doing-one-thing.html", title: "Small functions and doing one thing", topic: "Meaningful Names & Simplicity", anim: "Code" },
  { n: 3, id: "guard-clauses-and-reducing-nesting", file: "lessons/0003-guard-clauses-and-reducing-nesting.html", title: "Guard clauses and reducing nesting", topic: "Small Functions & Guards", anim: "Code" },
  { n: 4, id: "command-query-separation-and-side-effects", file: "lessons/0004-command-query-separation-and-side-effects.html", title: "Command Query Separation and side effects", topic: "Small Functions & Guards", anim: "Code" },
  { n: 5, id: "classic-code-smells-and-heuristics", file: "lessons/0005-classic-code-smells-and-heuristics.html", title: "Classic code smells and heuristics", topic: "Recognizing Code Smells", anim: "Code" },
  { n: 6, id: "shotgun-surgery-and-divergent-change", file: "lessons/0006-shotgun-surgery-and-divergent-change.html", title: "Shotgun surgery and divergent change", topic: "Recognizing Code Smells", anim: "Code" },
  { n: 7, id: "the-mechanics-of-safe-refactoring", file: "lessons/0007-the-mechanics-of-safe-refactoring.html", title: "The mechanics of safe refactoring", topic: "The Refactoring Discipline", anim: "Code" },
  { n: 8, id: "the-boy-scout-rule-and-continuous-refactoring", file: "lessons/0008-the-boy-scout-rule-and-continuous-refactoring.html", title: "The Boy Scout rule and continuous refactoring", topic: "The Refactoring Discipline", anim: "Code" }
];

/* ============================================================
   Clean Code & Code Smells — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "names-simplicity", title: "Meaningful Names & Simplicity",
    terms: [
      { term: "Intention-revealing name", def: "An identifier whose name explicitly answers why it exists, what it does, and how it is used.", lesson: 1, tags: ["naming"] },
      { term: "Magic number", def: "A raw numeric literal in code without an explanatory named constant, obscuring its meaning.", lesson: 1, tags: ["smells"] },
      { term: "Single responsibility", def: "The principle that a function or class should do exactly one thing and have one reason to change.", lesson: 2, tags: ["principles"] },
      { term: "Flag argument", def: "A boolean parameter passed to a function that forces it to do two completely different things based on true/false.", lesson: 2, tags: ["smells"] }
    ]
  },
  {
    id: "functions-nesting", title: "Small Functions & Guards",
    terms: [
      { term: "Guard clause", def: "A conditional statement at the beginning of a function that returns or exits early on invalid conditions.", lesson: 3, tags: ["refactoring"] },
      { term: "Pyramid of Doom", def: "Deeply nested, arrow-shaped conditional blocks that strain human working memory to parse.", lesson: 3, tags: ["smells"] },
      { term: "Side effect", def: "An unadvertised modification of state outside a function that violates caller expectations.", lesson: 4, tags: ["clean-code"] },
      { term: "Command Query Separation", def: "CQS: A principle stating a function should either perform an action OR return data, but never both.", lesson: 4, tags: ["principles"] }
    ]
  },
  {
    id: "code-smells", title: "Recognizing Code Smells",
    terms: [
      { term: "Code smell", def: "A surface symptom in code that often indicates a deeper architectural or design weakness.", lesson: 5, tags: ["smells"] },
      { term: "Feature Envy", def: "A smell where a method seems more interested in the data of another class than the class it belongs to.", lesson: 5, tags: ["smells"] },
      { term: "Shotgun Surgery", def: "A smell where making one conceptual change requires making tiny edits across dozens of separate files.", lesson: 6, tags: ["smells"] },
      { term: "Primitive Obsession", def: "The reluctance to create small domain types, instead using raw primitives (strings, ints) for complex concepts.", lesson: 6, tags: ["smells"] }
    ]
  },
  {
    id: "refactoring-discipline", title: "The Refactoring Discipline",
    terms: [
      { term: "Refactoring", def: "The process of restructuring existing computer code without changing its external observable behavior.", lesson: 7, tags: ["refactoring"] },
      { term: "Boy Scout Rule", def: "The practice of leaving the codebase cleaner than you found it on every task or commit.", lesson: 8, tags: ["craft"] },
      { term: "Dead code", def: "Commented-out code, unused functions, or unreachable branches that clutter the repository.", lesson: 7, tags: ["hygiene"] },
      { term: "Technical debt", def: "The implied cost of future rework caused by choosing an easy solution now instead of a better approach.", lesson: 8, tags: ["craft"] }
    ]
  }
];

/* ============================================================
   Composition vs Inheritance — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "the-inheritance-trap-and-is-a-versus-has-a", file: "lessons/0001-the-inheritance-trap-and-is-a-versus-has-a.html", title: "The inheritance trap and 'is-a' versus 'has-a'", topic: "Inheritance & The Coupling Trap", anim: "Scale" },
  { n: 2, id: "the-fragile-base-class-problem", file: "lessons/0002-the-fragile-base-class-problem.html", title: "The fragile base class problem", topic: "The Fragile Base Class Problem", anim: "Scale" },
  { n: 3, id: "the-deadly-diamond-of-death", file: "lessons/0003-the-deadly-diamond-of-death.html", title: "The Deadly Diamond of Death", topic: "The Fragile Base Class Problem", anim: "Scale" },
  { n: 4, id: "delegation-and-the-wrapper-pattern", file: "lessons/0004-delegation-and-the-wrapper-pattern.html", title: "Delegation and the wrapper pattern", topic: "Delegation & Wrapper Patterns", anim: "Scale" },
  { n: 5, id: "the-strategy-pattern-pluggable-behavior", file: "lessons/0005-the-strategy-pattern-pluggable-behavior.html", title: "The Strategy pattern: pluggable behavior", topic: "Delegation & Wrapper Patterns", anim: "Scale" },
  { n: 6, id: "the-liskov-substitution-principle-lsp", file: "lessons/0006-the-liskov-substitution-principle-lsp.html", title: "The Liskov Substitution Principle (LSP)", topic: "LSP & Legitimate Inheritance", anim: "Scale" },
  { n: 7, id: "when-inheritance-is-actually-appropriate", file: "lessons/0007-when-inheritance-is-actually-appropriate.html", title: "When inheritance is actually appropriate", topic: "LSP & Legitimate Inheritance", anim: "Scale" },
  { n: 8, id: "refactoring-inheritance-trees-into-components", file: "lessons/0008-refactoring-inheritance-trees-into-components.html", title: "Refactoring inheritance trees into components", topic: "LSP & Legitimate Inheritance", anim: "Scale" }
];

/* ============================================================
   Composition vs Inheritance — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "inheritance-basics", title: "Inheritance & The Coupling Trap",
    terms: [
      { term: "Inheritance", def: "A mechanism where a new class derives properties and behaviors from an existing base class (is-a relationship).", lesson: 1, tags: ["oop"] },
      { term: "Composition", def: "A design technique combining simple independent objects to build complex behaviors (has-a relationship).", lesson: 1, tags: ["oop"] },
      { term: "Tight coupling", def: "The condition where a subclass is intimately dependent on the internal implementation mechanics of its base class.", lesson: 1, tags: ["coupling"] },
      { term: "Class explosion", def: "An exponential proliferation of subclasses trying to represent every combination of features (e.g. FlyingSwimmingBird).", lesson: 2, tags: ["smells"] }
    ]
  },
  {
    id: "fragile-base", title: "The Fragile Base Class Problem",
    terms: [
      { term: "Fragile base class", def: "A fundamental architectural flaw where seemingly safe modifications to a base class break subclasses unexpectedly.", lesson: 2, tags: ["antipattern"] },
      { term: "Encapsulation breach", def: "The loss of private encapsulation occurring when subclasses depend on base class internal execution order.", lesson: 2, tags: ["oop"] },
      { term: "Override", def: "Providing a specialized implementation of a method that is already defined in a superclass.", lesson: 3, tags: ["oop"] },
      { term: "super keyword", def: "A keyword used inside a subclass to invoke constructor or method implementations from the parent base class.", lesson: 3, tags: ["oop"] }
    ]
  },
  {
    id: "delegation-wrappers", title: "Delegation & Wrapper Patterns",
    terms: [
      { term: "Delegation", def: "A technique where an object handles a request by handing off execution to a secondary collaborator object.", lesson: 4, tags: ["patterns"] },
      { term: "Wrapper pattern", def: "An object containing an underlying instance, intercepting calls to add features before delegating.", lesson: 4, tags: ["patterns"] },
      { term: "Strategy pattern", def: "A behavioral pattern defining a family of interchangeable algorithms encapsulated in pluggable classes.", lesson: 5, tags: ["patterns"] },
      { term: "Mixin", def: "A class or trait providing methods that can be borrowed or mixed into other classes without full inheritance.", lesson: 5, tags: ["oop"] }
    ]
  },
  {
    id: "liskov-substitution", title: "LSP & Legitimate Inheritance",
    terms: [
      { term: "Liskov Substitution Principle", def: "LSP: Subtypes must be substitutable for their base types without altering program correctness.", lesson: 6, tags: ["solid"] },
      { term: "Precondition", def: "A requirement that must be satisfied before a method executes; subtypes cannot strengthen preconditions.", lesson: 6, tags: ["contracts"] },
      { term: "Postcondition", def: "A guarantee that must hold true after a method finishes; subtypes cannot weaken postconditions.", lesson: 6, tags: ["contracts"] },
      { term: "Abstract class", def: "A base class that cannot be instantiated directly, designed strictly to be subclassed with abstract methods.", lesson: 7, tags: ["oop"] }
    ]
  }
];

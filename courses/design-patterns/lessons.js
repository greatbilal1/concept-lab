/* ============================================================
   Design Patterns — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "the-gang-of-four-and-pattern-taxonomy", file: "lessons/0001-the-gang-of-four-and-pattern-taxonomy.html", title: "The Gang of Four and pattern taxonomy", topic: "Pattern Taxonomy & Creational", anim: "Puzzle" },
  { n: 2, id: "creational-patterns-factory-and-builder", file: "lessons/0002-creational-patterns-factory-and-builder.html", title: "Creational patterns: Factory and Builder", topic: "Pattern Taxonomy & Creational", anim: "Puzzle" },
  { n: 3, id: "structural-patterns-adapter-and-facade", file: "lessons/0003-structural-patterns-adapter-and-facade.html", title: "Structural patterns: Adapter and Facade", topic: "Structural Patterns", anim: "Puzzle" },
  { n: 4, id: "proxy-and-decorator-patterns", file: "lessons/0004-proxy-and-decorator-patterns.html", title: "Proxy and Decorator patterns", topic: "Structural Patterns", anim: "Puzzle" },
  { n: 5, id: "behavioral-patterns-observer-and-pub-sub", file: "lessons/0005-behavioral-patterns-observer-and-pub-sub.html", title: "Behavioral patterns: Observer and Pub/Sub", topic: "Behavioral Patterns", anim: "Puzzle" },
  { n: 6, id: "behavioral-patterns-command-and-state", file: "lessons/0006-behavioral-patterns-command-and-state.html", title: "Behavioral patterns: Command and State", topic: "Behavioral Patterns", anim: "Puzzle" },
  { n: 7, id: "the-singleton-pattern-and-why-it-is-mostly-an-antipattern", file: "lessons/0007-the-singleton-pattern-and-why-it-is-mostly-an-antipattern.html", title: "The Singleton pattern and why it is mostly an antipattern", topic: "Pattern Overuse & Real-World Craft", anim: "Puzzle" },
  { n: 8, id: "patternitis-and-knowing-when-not-to-use-patterns", file: "lessons/0008-patternitis-and-knowing-when-not-to-use-patterns.html", title: "Patternitis and knowing when not to use patterns", topic: "Pattern Overuse & Real-World Craft", anim: "Puzzle" }
];

/* ============================================================
   Design Patterns — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "pattern-basics", title: "Pattern Taxonomy & Creational",
    terms: [
      { term: "Design pattern", def: "A general, reusable solution to a commonly occurring problem within a given context in software design.", lesson: 1, tags: ["patterns"] },
      { term: "Creational pattern", def: "A category of design patterns (Factory, Builder, Singleton) dealing with object creation mechanisms.", lesson: 2, tags: ["creational"] },
      { term: "Factory Method", def: "A creational pattern providing an interface for creating objects in a superclass, letting subclasses alter the type.", lesson: 2, tags: ["creational"] },
      { term: "Builder pattern", def: "A creational pattern allowing the step-by-step construction of complex objects using chained methods.", lesson: 2, tags: ["creational"] }
    ]
  },
  {
    id: "structural-patterns", title: "Structural Patterns",
    terms: [
      { term: "Structural pattern", def: "A category of patterns (Adapter, Facade, Decorator, Proxy) explaining how to assemble objects into larger structures.", lesson: 3, tags: ["structural"] },
      { term: "Adapter pattern", def: "A structural pattern converting the interface of a class into another interface clients expect.", lesson: 3, tags: ["structural"] },
      { term: "Facade pattern", def: "A structural pattern providing a simplified, high-level interface to a complex library, framework, or subsystem.", lesson: 3, tags: ["structural"] },
      { term: "Proxy pattern", def: "A structural pattern providing a surrogate or placeholder for another object to control access, caching, or logging.", lesson: 4, tags: ["structural"] }
    ]
  },
  {
    id: "behavioral-patterns", title: "Behavioral Patterns",
    terms: [
      { term: "Behavioral pattern", def: "A category of patterns (Observer, Strategy, Command, State) concerned with algorithms and assignment of responsibilities.", lesson: 5, tags: ["behavioral"] },
      { term: "Observer pattern", def: "A behavioral pattern defining a subscription mechanism to notify multiple objects about any events that happen.", lesson: 5, tags: ["behavioral"] },
      { term: "Command pattern", def: "A behavioral pattern encapsulating a request as a standalone object containing all information about the request.", lesson: 6, tags: ["behavioral"] },
      { term: "State pattern", def: "A behavioral pattern allowing an object to alter its behavior when its internal state changes, appearing to change its class.", lesson: 6, tags: ["behavioral"] }
    ]
  },
  {
    id: "antipatterns-overuse", title: "Pattern Overuse & Real-World Craft",
    terms: [
      { term: "Patternitis", def: "The antipattern of prematurely forcing design patterns into simple code where they add unnecessary complexity.", lesson: 8, tags: ["antipattern"] },
      { term: "YAGNI", def: "You Aren't Gonna Need It: an extreme programming principle stating functionality should not be added until required.", lesson: 8, tags: ["principles"] },
      { term: "Singleton pattern", def: "A creational pattern ensuring a class has only one instance while providing a global access point to it.", lesson: 7, tags: ["creational"] },
      { term: "Null Object pattern", def: "A pattern substituting a neutral, do-nothing object in place of null to eliminate null-check boilerplate.", lesson: 7, tags: ["patterns"] }
    ]
  }
];

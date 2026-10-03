/* ============================================================
   Dependency Injection — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "passing-collaborators-versus-hardcoded-new", file: "lessons/0001-passing-collaborators-versus-hardcoded-new.html", title: "Passing collaborators versus hardcoded 'new'", topic: "Dependency Injection & IoC", anim: "Syringe" },
  { n: 2, id: "inversion-of-control-the-hollywood-principle", file: "lessons/0002-inversion-of-control-the-hollywood-principle.html", title: "Inversion of Control: the Hollywood Principle", topic: "Dependency Injection & IoC", anim: "Syringe" },
  { n: 3, id: "the-composition-root-pattern", file: "lessons/0003-the-composition-root-pattern.html", title: "The Composition Root pattern", topic: "Wiring & Composition Root", anim: "Syringe" },
  { n: 4, id: "the-service-locator-antipattern", file: "lessons/0004-the-service-locator-antipattern.html", title: "The Service Locator antipattern", topic: "Wiring & Composition Root", anim: "Syringe" },
  { n: 5, id: "object-lifecycles-transient-scoped-singleton", file: "lessons/0005-object-lifecycles-transient-scoped-singleton.html", title: "Object lifecycles: transient, scoped, singleton", topic: "Containers & Lifecycles", anim: "Syringe" },
  { n: 6, id: "captive-dependencies-and-concurrency-bugs", file: "lessons/0006-captive-dependencies-and-concurrency-bugs.html", title: "Captive dependencies and concurrency bugs", topic: "Containers & Lifecycles", anim: "Syringe" },
  { n: 7, id: "testability-mocks-stubs-and-fakes", file: "lessons/0007-testability-mocks-stubs-and-fakes.html", title: "Testability: mocks, stubs, and fakes", topic: "Testability & Test Doubles", anim: "Syringe" },
  { n: 8, id: "when-di-becomes-over-engineering", file: "lessons/0008-when-di-becomes-over-engineering.html", title: "When DI becomes over-engineering", topic: "Testability & Test Doubles", anim: "Syringe" }
];

/* ============================================================
   Dependency Injection — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "di-foundations", title: "Dependency Injection & IoC",
    terms: [
      { term: "Dependency Injection", def: "A design pattern where an object receives its dependencies from the outside rather than creating them internally.", lesson: 1, tags: ["di"] },
      { term: "Inversion of Control", def: "IoC: a design principle inverting the control flow so a framework or caller drives execution (the Hollywood Principle).", lesson: 2, tags: ["ioc"] },
      { term: "Pure DI", def: "Practicing dependency injection by hand using plain constructors without any third-party framework or container.", lesson: 1, tags: ["di"] },
      { term: "Collaborator", def: "An external service or object required by a class to perform its business responsibilities.", lesson: 1, tags: ["design"] }
    ]
  },
  {
    id: "wiring-patterns", title: "Wiring & Composition Root",
    terms: [
      { term: "Composition Root", def: "The single location in an application near the entry point where the entire object dependency graph is wired together.", lesson: 3, tags: ["patterns"] },
      { term: "Constructor injection", def: "The practice of supplying all required dependencies through a class constructor method.", lesson: 2, tags: ["injection"] },
      { term: "Method injection", def: "Passing a dependency as an argument to a specific method call rather than storing it in the constructor.", lesson: 4, tags: ["injection"] },
      { term: "Service Locator", def: "An architectural antipattern where classes query a global registry to locate dependencies, obscuring couplings.", lesson: 4, tags: ["antipattern"] }
    ]
  },
  {
    id: "containers-lifecycles", title: "Containers & Lifecycles",
    terms: [
      { term: "IoC Container", def: "A library or framework automatically resolving, instantiating, and wiring object dependencies based on registered types.", lesson: 5, tags: ["containers"] },
      { term: "Transient lifecycle", def: "An object lifecycle where a brand new instance is instantiated on every single injection request.", lesson: 5, tags: ["lifecycles"] },
      { term: "Scoped lifecycle", def: "An object lifecycle where a single instance is shared within a bounded context (like a single HTTP request).", lesson: 5, tags: ["lifecycles"] },
      { term: "Singleton lifecycle", def: "An object lifecycle where a single instance is instantiated once and shared across the entire application runtime.", lesson: 5, tags: ["lifecycles"] }
    ]
  },
  {
    id: "testability-doubles", title: "Testability & Test Doubles",
    terms: [
      { term: "Test double", def: "A generic term for any surrogate object used in place of a real dependency during testing (fakes, mocks, stubs).", lesson: 7, tags: ["testing"] },
      { term: "Mock", def: "A test double pre-programmed with expectations about which method calls it should receive, verifying interactions.", lesson: 7, tags: ["testing"] },
      { term: "Stub", def: "A test double providing canned answers to calls made during the test, with zero behavior verification.", lesson: 7, tags: ["testing"] },
      { term: "Captive dependency", def: "A concurrency bug where a longer-lived service (Singleton) holds onto a shorter-lived service (Scoped).", lesson: 6, tags: ["bugs"] }
    ]
  }
];

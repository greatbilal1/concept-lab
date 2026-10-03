/* ============================================================
   Separation of Concerns — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "high-cohesion-and-low-coupling", file: "lessons/0001-high-cohesion-and-low-coupling.html", title: "High cohesion and low coupling", topic: "Cohesion & Coupling Foundations", anim: "Compass" },
  { n: 2, id: "the-single-responsibility-principle-deep-dive", file: "lessons/0002-the-single-responsibility-principle-deep-dive.html", title: "The Single Responsibility Principle deep dive", topic: "Single Responsibility & Actors", anim: "Compass" },
  { n: 3, id: "god-objects-and-information-hiding", file: "lessons/0003-god-objects-and-information-hiding.html", title: "God objects and information hiding", topic: "Single Responsibility & Actors", anim: "Compass" },
  { n: 4, id: "presentation-domain-and-persistence-boundaries", file: "lessons/0004-presentation-domain-and-persistence-boundaries.html", title: "Presentation, domain, and persistence boundaries", topic: "Single Responsibility & Actors", anim: "Compass" },
  { n: 5, id: "cross-cutting-concerns-and-decorators", file: "lessons/0005-cross-cutting-concerns-and-decorators.html", title: "Cross-cutting concerns and decorators", topic: "Cross-Cutting Concerns & Layers", anim: "Compass" },
  { n: 6, id: "aspect-oriented-programming-and-middleware-pipelines", file: "lessons/0006-aspect-oriented-programming-and-middleware-pipelines.html", title: "Aspect-Oriented Programming and middleware pipelines", topic: "Cross-Cutting Concerns & Layers", anim: "Compass" },
  { n: 7, id: "leaky-abstractions-and-boundary-erosion", file: "lessons/0007-leaky-abstractions-and-boundary-erosion.html", title: "Leaky abstractions and boundary erosion", topic: "Boundaries & Abstractions", anim: "Compass" },
  { n: 8, id: "bounded-contexts-and-vertical-slice-architecture", file: "lessons/0008-bounded-contexts-and-vertical-slice-architecture.html", title: "Bounded contexts and vertical slice architecture", topic: "Boundaries & Abstractions", anim: "Compass" }
];

/* ============================================================
   Separation of Concerns — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "cohesion-coupling", title: "Cohesion & Coupling Foundations",
    terms: [
      { term: "Separation of concerns", def: "A design principle dividing a system into distinct parts where each part addresses a separate concern.", lesson: 1, tags: ["principles"] },
      { term: "Cohesion", def: "The degree to which the elements inside a single module or class belong together and share a focused purpose.", lesson: 1, tags: ["metrics"] },
      { term: "Coupling", def: "The degree of direct interdependence between separate software modules.", lesson: 1, tags: ["metrics"] },
      { term: "Parnas partitioning", def: "Decomposing systems into modules by hiding design decisions that are likely to change behind stable interfaces.", lesson: 1, tags: ["theory"] }
    ]
  },
  {
    id: "srp-actors", title: "Single Responsibility & Actors",
    terms: [
      { term: "Single Responsibility Principle", def: "SRP: a module should be responsible to one, and only one, actor or business stakeholder.", lesson: 2, tags: ["srp"] },
      { term: "Actor", def: "A single person or group of stakeholders (e.g. accounting, operations) who require a specific business policy.", lesson: 2, tags: ["srp"] },
      { term: "God object", def: "An architectural antipattern where a single class or module knows too much or does too much.", lesson: 3, tags: ["antipattern"] },
      { term: "Information hiding", def: "The principle of concealing internal data representation and algorithms behind private module boundaries.", lesson: 3, tags: ["principles"] }
    ]
  },
  {
    id: "cross-cutting", title: "Cross-Cutting Concerns & Layers",
    terms: [
      { term: "Cross-cutting concern", def: "A feature (like logging, authentication, caching) that spans across multiple modules and layers.", lesson: 5, tags: ["architecture"] },
      { term: "Decorator pattern", def: "A structural pattern wrapping an object to add new behavior dynamically without altering the original class.", lesson: 5, tags: ["patterns"] },
      { term: "Aspect-Oriented Programming", def: "A paradigm (AOP) separating cross-cutting concerns by applying interceptors at join points.", lesson: 6, tags: ["paradigms"] },
      { term: "Middleware pipeline", def: "A series of sequential filters processing requests before business handlers and responses afterward.", lesson: 6, tags: ["middleware"] }
    ]
  },
  {
    id: "boundaries-leaks", title: "Boundaries & Abstractions",
    terms: [
      { term: "Leaky abstraction", def: "An abstraction that fails to completely conceal its underlying implementation details from consumers.", lesson: 7, tags: ["abstractions"] },
      { term: "Law of Demeter", def: "The principle of least knowledge: a method should only talk to its immediate friends, never strangers (a.b.c.d()).", lesson: 7, tags: ["principles"] },
      { term: "Bounded context", def: "A linguistic and conceptual boundary within which a specific domain model applies consistently.", lesson: 8, tags: ["ddd"] },
      { term: "Vertical slice", def: "Architecting features end-to-end across UI, logic, and database per business capability rather than technical layers.", lesson: 8, tags: ["architecture"] }
    ]
  }
];

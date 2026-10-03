/* ============================================================
   Backend Architecture — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "the-layered-architecture-pattern", file: "lessons/0001-the-layered-architecture-pattern.html", title: "The layered architecture pattern", topic: "Layers & Architectural Boundaries", anim: "Layers" },
  { n: 2, id: "the-dependency-rule-and-clean-architecture", file: "lessons/0002-the-dependency-rule-and-clean-architecture.html", title: "The Dependency Rule and Clean Architecture", topic: "Layers & Architectural Boundaries", anim: "Layers" },
  { n: 3, id: "hexagonal-architecture-ports-and-adapters", file: "lessons/0003-hexagonal-architecture-ports-and-adapters.html", title: "Hexagonal architecture: ports and adapters", topic: "Hexagonal Architecture & Ports", anim: "Layers" },
  { n: 4, id: "dependency-inversion-principle-solid", file: "lessons/0004-dependency-inversion-principle-solid.html", title: "The Dependency Inversion Principle (SOLID)", topic: "Hexagonal Architecture & Ports", anim: "Layers" },
  { n: 5, id: "the-repository-pattern", file: "lessons/0005-the-repository-pattern.html", title: "The repository pattern", topic: "Services & Repositories", anim: "Layers" },
  { n: 6, id: "domain-services-application-services-and-dtos", file: "lessons/0006-domain-services-application-services-and-dtos.html", title: "Domain services, application services, and DTOs", topic: "Services & Repositories", anim: "Layers" },
  { n: 7, id: "configuration-boundaries-and-twelve-factor-apps", file: "lessons/0007-configuration-boundaries-and-twelve-factor-apps.html", title: "Configuration boundaries and Twelve-Factor apps", topic: "Configuration & Observability", anim: "Layers" },
  { n: 8, id: "logging-metrics-and-observability", file: "lessons/0008-logging-metrics-and-observability.html", title: "Logging, metrics, and observability", topic: "Configuration & Observability", anim: "Layers" }
];

/* ============================================================
   Backend Architecture — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "layers-boundaries", title: "Layers & Architectural Boundaries",
    terms: [
      { term: "Layered architecture", def: "An architectural pattern organizing code into horizontal layers where each layer has a specific responsibility.", lesson: 1, tags: ["architecture"] },
      { term: "Separation of concerns", def: "A design principle separating a program into distinct sections where each addresses a separate concern.", lesson: 1, tags: ["principles"] },
      { term: "Dependency rule", def: "The rule stating that source code dependencies must only point inward toward higher-level business policies.", lesson: 2, tags: ["clean-arch"] },
      { term: "Domain model", def: "The representation of real-world business concepts, rules, and logic isolated from delivery frameworks.", lesson: 2, tags: ["domain"] }
    ]
  },
  {
    id: "hexagonal-ports", title: "Hexagonal Architecture & Ports",
    terms: [
      { term: "Hexagonal Architecture", def: "An architecture (Ports and Adapters) isolating application core logic from external tools and delivery mechanisms.", lesson: 3, tags: ["hexagonal"] },
      { term: "Port", def: "An interface defined by the application core specifying how it interacts with external components.", lesson: 3, tags: ["hexagonal"] },
      { term: "Adapter", def: "A concrete implementation translating between an external technology (like HTTP or SQL) and an application port.", lesson: 3, tags: ["hexagonal"] },
      { term: "Dependency Inversion", def: "A design principle stating high-level modules should not depend on low-level modules; both depend on abstractions.", lesson: 4, tags: ["solid"] }
    ]
  },
  {
    id: "services-repositories", title: "Services & Repositories",
    terms: [
      { term: "Service Layer", def: "A boundary layer establishing available operations and coordinating application business logic.", lesson: 5, tags: ["services"] },
      { term: "Repository pattern", def: "An abstraction layer mediating between domain logic and data storage, mimicking an in-memory collection.", lesson: 5, tags: ["repositories"] },
      { term: "DTO", def: "Data Transfer Object: a simple object carrying data between processes or layers with zero business logic.", lesson: 6, tags: ["dto"] },
      { term: "Domain Service", def: "A service encapsulating business logic that naturally involves multiple domain entities.", lesson: 6, tags: ["services"] }
    ]
  },
  {
    id: "config-observability", title: "Configuration & Observability",
    terms: [
      { term: "Structured logging", def: "Emitting log messages as machine-readable JSON key-value pairs rather than unstructured plain text lines.", lesson: 8, tags: ["observability"] },
      { term: "Health check", def: "A dedicated endpoint (/healthz) used by load balancers and orchestrators to verify service readiness.", lesson: 8, tags: ["operations"] },
      { term: "Graceful shutdown", def: "The orderly process of stopping a server: refusing new requests, completing in-flight requests, and closing pools.", lesson: 8, tags: ["operations"] },
      { term: "Circuit breaker", def: "A stability pattern halting calls to a failing remote service to prevent cascading outages.", lesson: 7, tags: ["resilience"] }
    ]
  }
];

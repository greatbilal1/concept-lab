/* ============================================================
   Software Architecture Patterns — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "what-is-software-architecture-and-why-it-matters", file: "lessons/0001-what-is-software-architecture-and-why-it-matters.html", title: "What is software architecture and why it matters", topic: "Macro Architecture & Monoliths", anim: "Columns" },
  { n: 2, id: "monoliths-modular-monoliths-and-microservices", file: "lessons/0002-monoliths-modular-monoliths-and-microservices.html", title: "Monoliths, modular monoliths, and microservices", topic: "Macro Architecture & Monoliths", anim: "Columns" },
  { n: 3, id: "event-driven-architecture-and-message-brokers", file: "lessons/0003-event-driven-architecture-and-message-brokers.html", title: "Event-driven architecture and message brokers", topic: "Event-Driven Architecture", anim: "Columns" },
  { n: 4, id: "broker-versus-mediator-event-topologies", file: "lessons/0004-broker-versus-mediator-event-topologies.html", title: "Broker versus mediator event topologies", topic: "Event-Driven Architecture", anim: "Columns" },
  { n: 5, id: "cqrs-command-query-responsibility-segregation", file: "lessons/0005-cqrs-command-query-responsibility-segregation.html", title: "CQRS: Command Query Responsibility Segregation", topic: "CQRS & Event Sourcing", anim: "Columns" },
  { n: 6, id: "event-sourcing-and-immutable-logs", file: "lessons/0006-event-sourcing-and-immutable-logs.html", title: "Event Sourcing and immutable logs", topic: "CQRS & Event Sourcing", anim: "Columns" },
  { n: 7, id: "the-cap-theorem-and-distributed-trade-offs", file: "lessons/0007-the-cap-theorem-and-distributed-trade-offs.html", title: "The CAP theorem and distributed trade-offs", topic: "Distributed Trade-offs & Conway's Law", anim: "Columns" },
  { n: 8, id: "conways-law-and-architecture-selection", file: "lessons/0008-conways-law-and-architecture-selection.html", title: "Conway's Law and architecture selection", topic: "Distributed Trade-offs & Conway's Law", anim: "Columns" }
];

/* ============================================================
   Software Architecture Patterns — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "macro-architecture", title: "Macro Architecture & Monoliths",
    terms: [
      { term: "Software architecture", def: "The fundamental organization of a system embodied in its components, relationships, and design principles.", lesson: 1, tags: ["architecture"] },
      { term: "Monolith", def: "An architectural style where all user interface, business logic, and data access code are packaged into a single deployment unit.", lesson: 2, tags: ["architecture"] },
      { term: "Modular monolith", def: "A single deployable application with strictly enforced internal module boundaries and private domain models.", lesson: 2, tags: ["architecture"] },
      { term: "Microservices", def: "An architectural style structuring an application as a collection of small, independently deployable, loosely coupled services.", lesson: 2, tags: ["microservices"] }
    ]
  },
  {
    id: "event-driven", title: "Event-Driven Architecture",
    terms: [
      { term: "Event-Driven Architecture", def: "An architectural pattern (EDA) where decoupled software components produce and consume state-change events asynchronously.", lesson: 3, tags: ["eda"] },
      { term: "Domain event", def: "A record representing a significant business event that occurred in the past (e.g. OrderPlaced, PaymentDeclined).", lesson: 3, tags: ["eda"] },
      { term: "Message broker", def: "An intermediary software system (like Apache Kafka or RabbitMQ) routing and persisting asynchronous event messages.", lesson: 3, tags: ["eda"] },
      { term: "Mediator topology", def: "An event-driven pattern using a central workflow orchestrator to coordinate complex multi-step processes.", lesson: 4, tags: ["patterns"] }
    ]
  },
  {
    id: "cqrs-sourcing", title: "CQRS & Event Sourcing",
    terms: [
      { term: "CQRS", def: "Command Query Responsibility Segregation: separating read operations from write operations into distinct models.", lesson: 5, tags: ["cqrs"] },
      { term: "Event Sourcing", def: "An architectural pattern storing the state of a system as an append-only log of immutable historical events.", lesson: 6, tags: ["event-sourcing"] },
      { term: "Read model", def: "A denormalized, query-optimized data store projected from domain events specifically tailored for UI reads.", lesson: 5, tags: ["cqrs"] },
      { term: "Snapshot", def: "A periodic state checkpoint in event sourcing avoiding replaying an entire event log from the beginning of time.", lesson: 6, tags: ["event-sourcing"] }
    ]
  },
  {
    id: "conway-cap", title: "Distributed Trade-offs & Conway's Law",
    terms: [
      { term: "CAP theorem", def: "A theorem stating a distributed data store can simultaneously provide at most two of: Consistency, Availability, and Partition Tolerance.", lesson: 7, tags: ["distributed"] },
      { term: "Conway's Law", def: "An observation that organizations design systems that mirror their internal communication and organizational structures.", lesson: 8, tags: ["principles"] },
      { term: "Reverse Conway Maneuver", def: "Reorganizing team communication structures to naturally drive the desired software architecture.", lesson: 8, tags: ["strategy"] },
      { term: "PACELC theorem", def: "An extension to CAP stating: if there is a Partition (P), trade A or C; Else (E), trade Latency (L) or Consistency (C).", lesson: 7, tags: ["distributed"] }
    ]
  }
];

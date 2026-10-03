/* ============================================================
   Unit Testing & Integration Testing — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "defining-the-unit", file: "lessons/0001-defining-the-unit.html", title: "What Is a Unit? Defining Boundaries", topic: "Unit Boundaries", anim: "Generic" },
  { n: 2, id: "fast-in-memory-unit-tests", file: "lessons/0002-fast-in-memory-unit-tests.html", title: "Fast In-Memory Unit Tests", topic: "Test Performance", anim: "Generic" },
  { n: 3, id: "mocking-external-boundaries", file: "lessons/0003-mocking-external-boundaries.html", title: "Mocking External I/O and Network Boundaries", topic: "Mocking Boundaries", anim: "Generic" },
  { n: 4, id: "what-integration-tests-verify", file: "lessons/0004-what-integration-tests-verify.html", title: "What Integration Tests Actually Verify", topic: "Integration Testing", anim: "Generic" },
  { n: 5, id: "ephemeral-databases-testcontainers", file: "lessons/0005-ephemeral-databases-testcontainers.html", title: "Testing with Ephemeral Databases and Testcontainers", topic: "Database Testing", anim: "Generic" },
  { n: 6, id: "testing-http-apis-pipelines", file: "lessons/0006-testing-http-apis-pipelines.html", title: "Testing HTTP APIs and Request Pipelines", topic: "API Testing", anim: "Generic" },
  { n: 7, id: "pyramid-vs-trophy", file: "lessons/0007-pyramid-vs-trophy.html", title: "The Testing Pyramid vs The Testing Trophy", topic: "Methodology", anim: "Generic" },
  { n: 8, id: "balancing-speed-isolation-realism", file: "lessons/0008-balancing-speed-isolation-realism.html", title: "Balancing Speed, Isolation, and Realism", topic: "Engineering Practice", anim: "Generic" }
];

/* ============================================================
   Unit Testing & Integration Testing — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "boundaries", title: "Unit Boundaries & Performance",
    terms: [
      { term: "Unit of Behavior", def: "A cohesive block of functionality under test, which may comprise a single function or collaborating in-memory classes.", lesson: 1, tags: ["testing","units"] },
      { term: "Sociable Unit Test", def: "A unit test that uses real in-memory collaborator classes instead of replacing every dependency with a mock.", lesson: 1, tags: ["testing","architecture"] },
      { term: "In-Memory Testing", def: "Executing tests entirely within RAM to achieve microsecond feedback loops without disk or network I/O.", lesson: 2, tags: ["testing","performance"] }
    ]
  },
  {
    id: "doubles", title: "Mocks & Network Seams",
    terms: [
      { term: "Transport Interception", def: "Mocking HTTP requests at the adapter level to test serialization and error handling without opening real sockets.", lesson: 3, tags: ["testing","http"] },
      { term: "Architectural Seam", def: "An interface boundary where two software modules or systems connect and can be isolated for testing.", lesson: 4, tags: ["testing","patterns"] },
      { term: "Fake", def: "A working in-memory implementation of a dependency (such as an in-memory repository) used during testing.", lesson: 1, tags: ["testing","mocks"] }
    ]
  },
  {
    id: "containers", title: "Databases & Testcontainers",
    terms: [
      { term: "Testcontainers", def: "A testing library that provisions disposable Docker containers for databases and message brokers during integration tests.", lesson: 5, tags: ["testing","docker"] },
      { term: "Ephemeral Database", def: "A temporary database instance spun up strictly for the duration of a test run and discarded immediately after.", lesson: 5, tags: ["testing","databases"] },
      { term: "In-Process Test Client", def: "A simulated HTTP client (like Starlette TestClient) that invokes web application handlers in memory.", lesson: 6, tags: ["testing","api"] }
    ]
  },
  {
    id: "philosophy", title: "Testing Philosophy",
    terms: [
      { term: "Testing Trophy", def: "A testing model emphasizing integration tests as the primary source of confidence and return on investment.", lesson: 7, tags: ["testing","strategy"] },
      { term: "Static Analysis", def: "Verifying code quality, types, and syntax rules without executing the program using linters and type checkers.", lesson: 7, tags: ["testing","tooling"] },
      { term: "Test Isolation", def: "The principle that each test executes independently without relying on or mutating shared global state.", lesson: 8, tags: ["testing","determinism"] }
    ]
  }
];

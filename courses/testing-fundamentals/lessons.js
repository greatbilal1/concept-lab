/* ============================================================
   Testing Fundamentals — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "why-we-test-code", file: "lessons/0001-why-we-test-code.html", title: "Why We Test Code", topic: "Confidence & Regressions", anim: "Generic" },
  { n: 2, id: "arrange-act-assert", file: "lessons/0002-arrange-act-assert.html", title: "The Anatomy of a Test: Arrange, Act, Assert", topic: "Test Structure", anim: "Generic" },
  { n: 3, id: "assertions-and-failure-messages", file: "lessons/0003-assertions-and-failure-messages.html", title: "Assertions and Informative Failure Messages", topic: "Assertions", anim: "Generic" },
  { n: 4, id: "test-fixtures-and-setup", file: "lessons/0004-test-fixtures-and-setup.html", title: "Test Fixtures and Setup/Teardown", topic: "Fixtures", anim: "Generic" },
  { n: 5, id: "test-doubles-stubs-mocks", file: "lessons/0005-test-doubles-stubs-mocks.html", title: "Test Doubles: Stubs, Fakes, and Mocks", topic: "Test Doubles", anim: "Generic" },
  { n: 6, id: "code-coverage-and-test-quality", file: "lessons/0006-code-coverage-and-test-quality.html", title: "Code Coverage vs Test Quality", topic: "Coverage & Quality", anim: "Generic" },
  { n: 7, id: "flaky-tests-and-determinism", file: "lessons/0007-flaky-tests-and-determinism.html", title: "Flaky Tests and Non-Determinism", topic: "Determinism", anim: "Generic" },
  { n: 8, id: "testing-strategy-and-roi", file: "lessons/0008-testing-strategy-and-roi.html", title: "Testing Strategy: What to Test and What to Skip", topic: "Testing Strategy", anim: "Generic" }
];

/* ============================================================
   Testing Fundamentals — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "fundamentals", title: "Testing Fundamentals",
    terms: [
      { term: "Regression", def: "A software bug introduced into previously working features by a recent code modification.", lesson: 1, tags: ["testing","quality"] },
      { term: "Automated Testing", def: "The practice of running software to verify that code satisfies requirements without manual intervention.", lesson: 1, tags: ["testing","automation"] },
      { term: "Living Documentation", def: "Test suites that describe system behavior accurately because failing tests halt the build.", lesson: 1, tags: ["testing","docs"] }
    ]
  },
  {
    id: "structure", title: "Test Structure & Mechanics",
    terms: [
      { term: "Arrange-Act-Assert", def: "The universal 3-phase test structure: setting up preconditions, triggering behavior, and asserting outcomes.", lesson: 2, tags: ["testing","patterns"] },
      { term: "Assertion", def: "A boolean check in a test that verifies the actual output matches expected specifications.", lesson: 3, tags: ["testing","assertions"] },
      { term: "Fixture", def: "A reproducible environment or data dependency prepared before a test and cleaned up afterward.", lesson: 4, tags: ["testing","fixtures"] }
    ]
  },
  {
    id: "doubles", title: "Test Doubles & Metrics",
    terms: [
      { term: "Test Double", def: "A generic term for any object that replaces a real production component during automated testing.", lesson: 5, tags: ["testing","mocks"] },
      { term: "Mock", def: "A test double configured with pre-programmed expectations that verifies method invocations.", lesson: 5, tags: ["testing","mocks"] },
      { term: "Code Coverage", def: "The percentage of production code statements or branches executed during a test suite run.", lesson: 6, tags: ["testing","metrics"] }
    ]
  },
  {
    id: "strategy", title: "Determinism & Strategy",
    terms: [
      { term: "Flaky Test", def: "A non-deterministic test that produces different results on the same commit without code changes.", lesson: 7, tags: ["testing","ci"] },
      { term: "Mutation Testing", def: "A technique that injects deliberate bugs into source code to verify that tests catch them.", lesson: 6, tags: ["testing","quality"] },
      { term: "Test Pyramid", def: "A model advocating many fast unit tests, fewer integration tests, and very few end-to-end tests.", lesson: 8, tags: ["testing","architecture"] }
    ]
  }
];

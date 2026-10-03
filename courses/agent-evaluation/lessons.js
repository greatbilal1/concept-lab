/* ============================================================
   Agent Evaluation — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "evaluating-multi-step-agency", file: "lessons/0001-evaluating-multi-step-agency.html", title: "The Challenge of Evaluating Multi-Step Agency", topic: "Agency Evaluation", anim: "Generic" },
  { n: 2, id: "task-success-and-pass-at-k", file: "lessons/0002-task-success-and-pass-at-k.html", title: "Task Success and Pass@K Metrics", topic: "Pass@K", anim: "Generic" },
  { n: 3, id: "tool-calling-accuracy-argument-correctness", file: "lessons/0003-tool-calling-accuracy-argument-correctness.html", title: "Tool Calling Accuracy and Argument Correctness", topic: "Tool Evaluation", anim: "Generic" },
  { n: 4, id: "step-efficiency-trajectory-analysis", file: "lessons/0004-step-efficiency-trajectory-analysis.html", title: "Step Efficiency and Trajectory Analysis", topic: "Trajectory Analysis", anim: "Generic" },
  { n: 5, id: "evaluating-failure-recovery-resilience", file: "lessons/0005-evaluating-failure-recovery-resilience.html", title: "Evaluating Failure Recovery and Error Resilience", topic: "Failure Resilience", anim: "Generic" },
  { n: 6, id: "mock-environments-sandboxes-replay", file: "lessons/0006-mock-environments-sandboxes-replay.html", title: "Mock Environments, Sandboxes, and Deterministic Replay", topic: "Hermetic Sandboxes", anim: "Generic" },
  { n: 7, id: "benchmarking-agents-swe-bench", file: "lessons/0007-benchmarking-agents-swe-bench.html", title: "Benchmarking Autonomous Agents with SWE-bench", topic: "SWE-bench", anim: "Generic" },
  { n: 8, id: "building-custom-agent-eval-harness", file: "lessons/0008-building-custom-agent-eval-harness.html", title: "Building an Agent Evaluation Harness for Your Repository", topic: "Custom Agent Evals", anim: "Generic" }
];

/* ============================================================
   Agent Evaluation — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "agency-eval", title: "Agency & Trajectories",
    terms: [
      { term: "Agent Evaluation", def: "The discipline of quantitatively measuring multi-step autonomous behavior, tool correctness, and end-state task success.", lesson: 1, tags: ["agents","evals"] },
      { term: "End-State Principle", def: "Evaluating agents based on the final physical and digital state of the environment rather than intermediate thoughts.", lesson: 1, tags: ["methodology","evals"] },
      { term: "Trajectory Analysis", def: "Evaluating the sequence of tool calls and actions an agent takes to measure efficiency, redundancy, and cost.", lesson: 4, tags: ["agents","trajectories"] }
    ]
  },
  {
    id: "metrics-pass", title: "Pass Metrics & Tools",
    terms: [
      { term: "Pass@1", def: "The percentage of benchmark problems an agent successfully resolves on its first single autonomous attempt.", lesson: 2, tags: ["metrics","reliability"] },
      { term: "Pass@K", def: "A metric measuring whether at least one correct solution is found across K independent candidate attempts.", lesson: 2, tags: ["metrics","sampling"] },
      { term: "Tool Selection Accuracy", def: "The proportion of agent turns where the model selects the optimal tool for the active problem state.", lesson: 3, tags: ["tools","metrics"] }
    ]
  },
  {
    id: "resilience-bench", title: "Resilience & SWE-bench",
    terms: [
      { term: "Fault Injection", def: "Deliberately introducing broken syntax, timeouts, or permission errors to test agent self-healing resilience.", lesson: 5, tags: ["testing","resilience"] },
      { term: "SWE-bench", def: "The gold-standard benchmark testing agents on resolving 2,294 real-world GitHub issues from open-source Python repos.", lesson: 7, tags: ["benchmarks","swe-bench"] },
      { term: "Hermetic Sandbox", def: "An isolated, disposable container environment providing deterministic starting state for reproducible testing.", lesson: 6, tags: ["docker","sandboxes"] }
    ]
  },
  {
    id: "internal-harness", title: "Internal Harness & Operations",
    terms: [
      { term: "Internal Task Card", def: "A structured benchmark specification drawn from real company tickets containing starting commits and verification commands.", lesson: 8, tags: ["internal","benchmarks"] },
      { term: "Cost-to-Solution", def: "The total financial dollar cost of API tokens consumed by an agent across an entire multi-turn trajectory.", lesson: 4, tags: ["economics","metrics"] },
      { term: "Session Replay", def: "Recording and stepping through an agent's historical thoughts and tool calls in a visual debugger.", lesson: 6, tags: ["debugging","tooling"] }
    ]
  }
];

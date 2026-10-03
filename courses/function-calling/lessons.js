/* ============================================================
   Function Calling & Tool Use — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "what-is-function-calling-dispatcher", file: "lessons/0001-what-is-function-calling-dispatcher.html", title: "What Is Function Calling? The Model as a Dispatcher", topic: "Function Calling", anim: "Generic" },
  { n: 2, id: "defining-tool-schemas", file: "lessons/0002-defining-tool-schemas.html", title: "Defining Tool Schemas: Names, Descriptions, and Parameters", topic: "Tool Schemas", anim: "Generic" },
  { n: 3, id: "inspecting-tool-call-response", file: "lessons/0003-inspecting-tool-call-response.html", title: "Inspecting the Tool Call Response from the Model", topic: "Tool Response", anim: "Generic" },
  { n: 4, id: "executing-tool-and-formatting-result", file: "lessons/0004-executing-tool-and-formatting-result.html", title: "Executing the Tool and Formatting the Tool Result", topic: "Tool Results", anim: "Generic" },
  { n: 5, id: "execution-loop-multi-turn", file: "lessons/0005-execution-loop-multi-turn.html", title: "The Execution Loop: Multi-Turn Tool Interactions", topic: "Agent Loops", anim: "Generic" },
  { n: 6, id: "parallel-tool-calling", file: "lessons/0006-parallel-tool-calling.html", title: "Multiple Tool Calls in a Single Turn (Parallel Calling)", topic: "Parallel Tools", anim: "Generic" },
  { n: 7, id: "tool-error-handling-self-correction", file: "lessons/0007-tool-error-handling-self-correction.html", title: "Tool Error Handling: Passing Errors Back to the Model", topic: "Error Feedback", anim: "Generic" },
  { n: 8, id: "security-guardrails-confirmations-boundaries", file: "lessons/0008-security-guardrails-confirmations-boundaries.html", title: "Security: Guardrails, Confirmations, and Read-Only Boundaries", topic: "Tool Security", anim: "Generic" }
];

/* ============================================================
   Function Calling & Tool Use — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "dispatch", title: "Dispatch & Schemas",
    terms: [
      { term: "Function Calling", def: "A mechanism where models emit structured JSON arguments to invoke external host application tools.", lesson: 1, tags: ["tools","architecture"] },
      { term: "Tool Schema", def: "A formal JSON Schema specifying a tool's name, purpose description, and parameter types.", lesson: 2, tags: ["schemas","tools"] },
      { term: "Tool Call ID", def: "A unique string identifier binding a model's tool execution request to its subsequent result message.", lesson: 3, tags: ["api","protocols"] }
    ]
  },
  {
    id: "execution", title: "Execution & Concurrency",
    terms: [
      { term: "Tool Message Role", def: "The dedicated message role (role='tool') used to return function results back into conversation context.", lesson: 4, tags: ["api","roles"] },
      { term: "Parallel Tool Calling", def: "The capability of a model to request multiple independent tools in a single turn for concurrent execution.", lesson: 6, tags: ["performance","concurrency"] },
      { term: "Agent Execution Loop", def: "An iterative cycle executing tool calls and feeding results back until the model determines completion.", lesson: 5, tags: ["agents","loops"] }
    ]
  },
  {
    id: "resilience", title: "Resilience & Recovery",
    terms: [
      { term: "Circuit Breaker", def: "A maximum turn ceiling (e.g. 10 turns) halting agent loops to prevent infinite execution and runaway bills.", lesson: 5, tags: ["safety","limits"] },
      { term: "Autonomous Self-Correction", def: "The ability of a model to read tool error feedback and emit corrected arguments in a subsequent turn.", lesson: 7, tags: ["agents","resilience"] },
      { term: "Actionable Error", def: "An error message containing explicit guidance and expected formats that allows models to self-correct.", lesson: 7, tags: ["debugging","tools"] }
    ]
  },
  {
    id: "security", title: "Security & Boundaries",
    terms: [
      { term: "Confirmation Gate", def: "A mandatory manual approval checkpoint requiring human authorization before executing destructive write tools.", lesson: 8, tags: ["security","governance"] },
      { term: "Least Privilege", def: "Restricting an agent's available tools and data access strictly to what is necessary for the active task.", lesson: 8, tags: ["security","architecture"] },
      { term: "Read-Only Boundary", def: "Separating autonomous read queries from sensitive state-mutating write operations.", lesson: 8, tags: ["architecture","security"] }
    ]
  }
];

/* ============================================================
   How AI Coding Agents Work — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "from-autocomplete-to-agent", file: "lessons/0001-from-autocomplete-to-agent.html", title: "From Autocomplete to Autonomous Agent", topic: "Agent Evolution", anim: "Generic" },
  { n: 2, id: "core-agent-loop", file: "lessons/0002-core-agent-loop.html", title: "The Core Agent Loop: Read, Plan, Act, Observe", topic: "Agent Loop", anim: "Generic" },
  { n: 3, id: "reading-the-repository", file: "lessons/0003-reading-the-repository.html", title: "Reading the Repository: File Tree, Grep, Semantic Search", topic: "Code Navigation", anim: "Generic" },
  { n: 4, id: "tool-calling-edits-terminals", file: "lessons/0004-tool-calling-edits-terminals.html", title: "Tool Calling: Editing Files and Running Terminals", topic: "Tool Execution", anim: "Generic" },
  { n: 5, id: "working-memory-vs-history", file: "lessons/0005-working-memory-vs-history.html", title: "Working Memory vs Conversation History", topic: "Agent Memory", anim: "Generic" },
  { n: 6, id: "context-exhaustion-and-compaction", file: "lessons/0006-context-exhaustion-and-compaction.html", title: "Context Window Exhaustion and Compaction", topic: "Context Budget", anim: "Generic" },
  { n: 7, id: "error-recovery-loops", file: "lessons/0007-error-recovery-loops.html", title: "Error Recovery Loops: When the Agent Breaks the Build", topic: "Error Recovery", anim: "Generic" },
  { n: 8, id: "human-in-the-loop-steering", file: "lessons/0008-human-in-the-loop-steering.html", title: "Human-in-the-Loop: Guiding and Steering the Agent", topic: "Collaboration", anim: "Generic" }
];

/* ============================================================
   How AI Coding Agents Work — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "agents", title: "Agents & Agency",
    terms: [
      { term: "AI Coding Agent", def: "An autonomous AI system that reasons, uses tools (file edits, terminals), and iterates to achieve software engineering goals.", lesson: 1, tags: ["ai","agents"] },
      { term: "ReAct Pattern", def: "An architecture interleaving verbal reasoning ('Thoughts') with environmental tool invocations ('Actions') and feedback ('Observations').", lesson: 2, tags: ["ai","patterns"] },
      { term: "Agency", def: "The capacity of an automated system to act independently upon its environment to achieve a specified objective.", lesson: 1, tags: ["ai","theory"] }
    ]
  },
  {
    id: "tools", title: "Tools & Execution",
    terms: [
      { term: "Tool Calling", def: "A mechanism allowing language models to emit structured arguments to invoke predefined host functions.", lesson: 4, tags: ["ai","tools"] },
      { term: "Exact String Replacement", def: "A safe file-editing technique that substitutes a target code block identified by surrounding context lines.", lesson: 4, tags: ["ai","editing"] },
      { term: "Lexical Search", def: "Exact text and regular-expression searching (grep) across files to locate specific symbols and patterns.", lesson: 3, tags: ["ai","search"] }
    ]
  },
  {
    id: "memory", title: "Memory & Context",
    terms: [
      { term: "Working Memory", def: "Dynamic, in-session state tracking (such as todo lists and scratchpads) used during active execution.", lesson: 5, tags: ["ai","memory"] },
      { term: "Persistent Memory", def: "Repository-scoped markdown files documenting architectural rules, conventions, and verified facts across sessions.", lesson: 5, tags: ["ai","memory"] },
      { term: "Context Compaction", def: "Summarizing or pruning conversation history when approaching token window limits to preserve capacity.", lesson: 6, tags: ["ai","context"] }
    ]
  },
  {
    id: "reliability", title: "Reliability & Steering",
    terms: [
      { term: "Agent Thrashing", def: "A failure mode where an agent makes circular, guessing edits that break tests in an endless loop.", lesson: 7, tags: ["ai","debugging"] },
      { term: "Circuit Breaker", def: "A mechanism that halts automated agent repair loops after a threshold of failed attempts to request human input.", lesson: 7, tags: ["ai","safety"] },
      { term: "Human-in-the-Loop", def: "An engineering workflow where a human guides architecture, sets boundaries, and reviews agent diffs.", lesson: 8, tags: ["ai","collaboration"] }
    ]
  }
];

/* ============================================================
   AI Agents & Agent Loops — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "from-chatbot-to-agent", file: "lessons/0001-from-chatbot-to-agent.html", title: "From Chatbot to Agent: The Autonomy Spectrum", topic: "Agent Spectrum", anim: "Generic" },
  { n: 2, id: "core-agent-loop-goal-plan-act-observe", file: "lessons/0002-core-agent-loop-goal-plan-act-observe.html", title: "The Core Agent Loop: Goal, Plan, Act, Observe", topic: "Agent Loop", anim: "Generic" },
  { n: 3, id: "planning-and-task-decomposition", file: "lessons/0003-planning-and-task-decomposition.html", title: "Planning and Task Decomposition: ReAct and Plan-and-Solve", topic: "Task Decomposition", anim: "Generic" },
  { n: 4, id: "tool-orchestration-environment-execution", file: "lessons/0004-tool-orchestration-environment-execution.html", title: "Tool Orchestration and Environment Execution", topic: "Tool Orchestration", anim: "Generic" },
  { n: 5, id: "state-management-agent-working-memory", file: "lessons/0005-state-management-agent-working-memory.html", title: "State Management and Agent Working Memory", topic: "State Management", anim: "Generic" },
  { n: 6, id: "self-correction-circuit-breakers", file: "lessons/0006-self-correction-circuit-breakers.html", title: "Self-Correction, Error Recovery, and Circuit Breakers", topic: "Error Recovery", anim: "Generic" },
  { n: 7, id: "human-in-the-loop-approval-gates", file: "lessons/0007-human-in-the-loop-approval-gates.html", title: "Human-in-the-Loop Approval and Steering Gates", topic: "Human-in-the-Loop", anim: "Generic" },
  { n: 8, id: "building-autonomous-production-agent", file: "lessons/0008-building-autonomous-production-agent.html", title: "Building an Autonomous Production Agent", topic: "Production Agent", anim: "Generic" }
];

/* ============================================================
   AI Agents & Agent Loops — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "autonomy", title: "Autonomy & Loops",
    terms: [
      { term: "AI Agent", def: "An autonomous AI system that pursues an objective by perceiving its environment, planning actions, and using tools.", lesson: 1, tags: ["agents","architecture"] },
      { term: "ReAct Loop", def: "An execution cycle interleaving verbal reasoning ('Thoughts') with environmental tool actions ('Actions') and feedback ('Observations').", lesson: 2, tags: ["agents","patterns"] },
      { term: "Agency", def: "The capacity of an automated software system to act independently upon an external environment to achieve a goal.", lesson: 1, tags: ["theory","agents"] }
    ]
  },
  {
    id: "planning", title: "Planning & Orchestration",
    terms: [
      { term: "Plan-and-Solve", def: "A planning paradigm generating an upfront multi-step blueprint before beginning execution.", lesson: 3, tags: ["planning","agents"] },
      { term: "Tool Registry", def: "A centralized architectural catalog managing tool schemas, permissions, argument validation, and dispatchers.", lesson: 4, tags: ["tools","architecture"] },
      { term: "Dynamic Replanning", def: "Updating and adapting an existing execution plan when unexpected roadblocks or errors are observed.", lesson: 3, tags: ["planning","adaptation"] }
    ]
  },
  {
    id: "state", title: "State & Recovery",
    terms: [
      { term: "Agent State", def: "A centralized, typed data structure tracking message history, working scratchpads, and execution variables.", lesson: 5, tags: ["state","langgraph"] },
      { term: "State Checkpoint", def: "A serialized snapshot of agent state saved to a database after each turn to enable pause, resume, and rewinds.", lesson: 5, tags: ["persistence","databases"] },
      { term: "Circuit Breaker", def: "A safety mechanism that halts agent execution when error thresholds, token budgets, or turn counts are exceeded.", lesson: 6, tags: ["safety","limits"] }
    ]
  },
  {
    id: "collaboration", title: "Safety & Human Gates",
    terms: [
      { term: "Interruptibility", def: "The capability of an agent workflow to pause execution safely for human authorization and resume cleanly.", lesson: 7, tags: ["governance","safety"] },
      { term: "Confirmation Gate", def: "A mandatory manual approval checkpoint requiring human authorization before executing high-consequence write tools.", lesson: 7, tags: ["security","governance"] },
      { term: "Thrashing", def: "A failure state where an agent makes circular, repetitive edits without resolving root causes.", lesson: 6, tags: ["debugging","pitfalls"] }
    ]
  }
];

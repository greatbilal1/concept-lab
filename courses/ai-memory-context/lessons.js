/* ============================================================
   AI Memory & Context Management — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "stateless-nature-of-llms", file: "lessons/0001-stateless-nature-of-llms.html", title: "The Stateless Nature of LLMs: Why Models Forget", topic: "Stateless Nature", anim: "Generic" },
  { n: 2, id: "short-term-vs-long-term-memory", file: "lessons/0002-short-term-vs-long-term-memory.html", title: "Short-Term vs Long-Term Memory Architecture", topic: "Memory Types", anim: "Generic" },
  { n: 3, id: "conversation-buffers-windows-fifo", file: "lessons/0003-conversation-buffers-windows-fifo.html", title: "Conversation Buffers, Windows, and FIFO Truncation", topic: "Buffer Management", anim: "Generic" },
  { n: 4, id: "rolling-summarization-checkpoints", file: "lessons/0004-rolling-summarization-checkpoints.html", title: "Rolling Summarization and Checkpoint Memory", topic: "Summarization", anim: "Generic" },
  { n: 5, id: "external-entity-semantic-memory", file: "lessons/0005-external-entity-semantic-memory.html", title: "External Entity and Semantic Memory (Vector Stores)", topic: "Semantic Memory", anim: "Generic" },
  { n: 6, id: "working-memory-scratchpad-state", file: "lessons/0006-working-memory-scratchpad-state.html", title: "Working Memory and Scratchpad State Management", topic: "Scratchpads", anim: "Generic" },
  { n: 7, id: "memory-retrieval-runtime-injection", file: "lessons/0007-memory-retrieval-runtime-injection.html", title: "Memory Retrieval: Re-Injecting Facts at Runtime", topic: "Memory Injection", anim: "Generic" },
  { n: 8, id: "memory-hygiene-forgetting-privacy", file: "lessons/0008-memory-hygiene-forgetting-privacy.html", title: "Memory Hygiene, Forgetting, and Privacy Compliance", topic: "Memory Governance", anim: "Generic" }
];

/* ============================================================
   AI Memory & Context Management — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "nature", title: "Stateless Physics & Architecture",
    terms: [
      { term: "Stateless Model", def: "A model architecture where every API call is an independent mathematical evaluation retaining zero internal memory.", lesson: 1, tags: ["ai","architecture"] },
      { term: "Short-Term Memory", def: "The active prompt context window holding immediate dialogue turns and working state.", lesson: 2, tags: ["memory","context"] },
      { term: "Long-Term Memory", def: "External persistent data stores (databases, vector tables) holding historical facts across sessions.", lesson: 2, tags: ["memory","storage"] }
    ]
  },
  {
    id: "buffers", title: "Buffers & Summarization",
    terms: [
      { term: "Sliding Window", def: "A buffer management pattern that keeps the newest turns within a token limit while evicting older messages.", lesson: 3, tags: ["context","buffers"] },
      { term: "Rolling Summarization", def: "Compressing older evicted conversation turns into a persistent summary block pinned in the prompt.", lesson: 4, tags: ["context","summaries"] },
      { term: "System Prompt Pinning", def: "Ensuring the system prompt is never evicted by FIFO buffer algorithms, preserving core instructions.", lesson: 3, tags: ["prompting","safety"] }
    ]
  },
  {
    id: "entities", title: "Entities & Working State",
    terms: [
      { term: "Semantic Entity Memory", def: "Extracting atomic user facts and preferences and storing them in vector databases for future retrieval.", lesson: 5, tags: ["memory","vectors"] },
      { term: "Working Memory Scratchpad", def: "A structured todo checklist tracking subtask progress and state transitions during multi-step tasks.", lesson: 6, tags: ["agents","working-memory"] },
      { term: "Memory Reconciliation", def: "Detecting and resolving conflicting memories when updated facts contradict older stored records.", lesson: 5, tags: ["memory","hygiene"] }
    ]
  },
  {
    id: "governance", title: "Governance & Privacy",
    terms: [
      { term: "Right to be Forgotten", def: "A GDPR privacy mandate requiring systems to permanently delete personal user data upon request.", lesson: 8, tags: ["compliance","privacy"] },
      { term: "Memory TTL", def: "Time-to-Live expiration timestamps automatically purging temporary facts after a set duration.", lesson: 8, tags: ["storage","hygiene"] },
      { term: "PII Scrubbing", def: "Filtering out credit cards, passwords, and sensitive identifiers before writing memories to databases.", lesson: 8, tags: ["security","privacy"] }
    ]
  }
];

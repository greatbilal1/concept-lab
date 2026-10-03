/* ============================================================
   Building Reliable AI Systems — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "three-pillars-ai-reliability", file: "lessons/0001-three-pillars-ai-reliability.html", title: "The Three Pillars of AI Reliability: Failure, Drift, and Non-Determinism", topic: "Three Pillars", anim: "Generic" },
  { n: 2, id: "idempotent-ai-workflows-deduplication", file: "lessons/0002-idempotent-ai-workflows-deduplication.html", title: "Designing Idempotent AI Workflows and Deduplication", topic: "Idempotency", anim: "Generic" },
  { n: 3, id: "circuit-breakers-graceful-degradation", file: "lessons/0003-circuit-breakers-graceful-degradation.html", title: "Circuit Breakers and Graceful Degradation", topic: "Resilience Patterns", anim: "Generic" },
  { n: 4, id: "model-drift-concept-drift-monitoring", file: "lessons/0004-model-drift-concept-drift-monitoring.html", title: "Model Drift and Concept Drift Monitoring in Production", topic: "Drift Monitoring", anim: "Generic" },
  { n: 5, id: "self-healing-automated-retry-strategies", file: "lessons/0005-self-healing-automated-retry-strategies.html", title: "Self-Healing and Automated Retry Strategies", topic: "Self-Healing", anim: "Generic" },
  { n: 6, id: "shadow-deployments-canary-testing", file: "lessons/0006-shadow-deployments-canary-testing.html", title: "Shadow Deployments and Canary Testing for AI", topic: "Canary Deployments", anim: "Generic" },
  { n: 7, id: "chaos-engineering-simulating-outages", file: "lessons/0007-chaos-engineering-simulating-outages.html", title: "Chaos Engineering for AI: Simulating Degradation and Outages", topic: "AI Chaos", anim: "Generic" },
  { n: 8, id: "engineering-five-nines-reliability", file: "lessons/0008-engineering-five-nines-reliability.html", title: "Engineering Five-Nines Reliability in Modern AI Systems", topic: "Five-Nines Synthesis", anim: "Generic" }
];

/* ============================================================
   Building Reliable AI Systems — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "reliability-foundations", title: "Pillars & Idempotency",
    terms: [
      { term: "AI Reliability", def: "The discipline of engineering systems that remain dependable, safe, and available despite probabilistic non-determinism and outages.", lesson: 1, tags: ["reliability","systems"] },
      { term: "Silent Semantic Failure", def: "A failure where a system returns HTTP 200 without code errors, but the generated answer is factually false or harmful.", lesson: 1, tags: ["failures","semantics"] },
      { term: "Idempotent Action", def: "An operation that produces the exact same state mutation when executed once or multiple times with the same key.", lesson: 2, tags: ["idempotency","architecture"] }
    ]
  },
  {
    id: "resilience-degradation", title: "Resilience & Degradation",
    terms: [
      { term: "Graceful Degradation", def: "Maintaining core user functionality using cached answers or rule-based search during upstream AI outages.", lesson: 3, tags: ["resilience","fallbacks"] },
      { term: "Degradation Pyramid", def: "A multi-tier resilience hierarchy: Frontier LLM -> Backup LLM -> Semantic Cache -> Deterministic Search.", lesson: 3, tags: ["architecture","pyramid"] },
      { term: "Exponential Backoff with Full Jitter", def: "A retry algorithm combining exponential wait times with randomized time spread to prevent thundering herds.", lesson: 5, tags: ["retries","algorithms"] }
    ]
  },
  {
    id: "drift-release", title: "Drift & Safe Releases",
    terms: [
      { term: "Data Drift", def: "A shift in the distribution of incoming user prompts (new slang, languages, speech-to-text typos) over time.", lesson: 4, tags: ["monitoring","drift"] },
      { term: "Concept Drift", def: "A shift in real-world ground-truth rules where previously correct answers become factually obsolete.", lesson: 4, tags: ["monitoring","drift"] },
      { term: "Shadow Deployment", def: "Duplicating live user traffic to test a new candidate model in the background with zero user exposure.", lesson: 6, tags: ["releases","devops"] }
    ]
  },
  {
    id: "chaos-fivenines", title: "Chaos & Five-Nines",
    terms: [
      { term: "Canary Rollout", def: "Incrementally routing a tiny percentage of live user traffic (1% -> 5% -> 100%) to a new model candidate.", lesson: 6, tags: ["releases","canary"] },
      { term: "AI Chaos Engineering", def: "Proactively injecting synthetic rate limits, latency delays, and corrupted payloads into staging to verify defenses.", lesson: 7, tags: ["chaos","testing"] },
      { term: "Five-Nines Availability", def: "99.999% operational uptime, allowing no more than 5.26 minutes of total unplanned downtime per year.", lesson: 8, tags: ["sla","availability"] }
    ]
  }
];

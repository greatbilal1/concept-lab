/* ============================================================
   Production AI Architecture — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "anatomy-production-ai-platform", file: "lessons/0001-anatomy-production-ai-platform.html", title: "The Anatomy of a Production AI Platform", topic: "Platform Anatomy", anim: "Generic" },
  { n: 2, id: "async-job-queues-decoupled-processing", file: "lessons/0002-async-job-queues-decoupled-processing.html", title: "Async Job Queues and Decoupled Processing (Celery, BullMQ)", topic: "Job Queues", anim: "Generic" },
  { n: 3, id: "real-time-stateful-streaming-sse-websockets", file: "lessons/0003-real-time-stateful-streaming-sse-websockets.html", title: "Real-Time Stateful Streaming with WebSockets and SSE", topic: "Streaming Architecture", anim: "Generic" },
  { n: 4, id: "distributed-context-session-storage", file: "lessons/0004-distributed-context-session-storage.html", title: "Distributed Context and Session Storage (Redis, PostgreSQL)", topic: "Session Storage", anim: "Generic" },
  { n: 5, id: "rate-limiting-throttling-fair-share", file: "lessons/0005-rate-limiting-throttling-fair-share.html", title: "Rate Limiting, Throttling, and Fair-Share Scheduling", topic: "Rate Limiting", anim: "Generic" },
  { n: 6, id: "multi-tenant-isolation-data-partitioning", file: "lessons/0006-multi-tenant-isolation-data-partitioning.html", title: "Multi-Tenant Isolation and Data Partitioning", topic: "Tenant Isolation", anim: "Generic" },
  { n: 7, id: "deployment-topology-hybrid-private-edge", file: "lessons/0007-deployment-topology-hybrid-private-edge.html", title: "Deployment Topology: Hybrid Cloud, Private Endpoints, and Edge", topic: "Deployment Topology", anim: "Generic" },
  { n: 8, id: "architecting-enterprise-ai-service", file: "lessons/0008-architecting-enterprise-ai-service.html", title: "Architecting an Enterprise AI Service from Scratch", topic: "Enterprise Architecture", anim: "Generic" }
];

/* ============================================================
   Production AI Architecture — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "platform-queues", title: "Platform & Queues",
    terms: [
      { term: "Decoupled Architecture", def: "Separating slow model inference from web request threads using asynchronous queues and streaming proxies.", lesson: 1, tags: ["architecture","systems"] },
      { term: "Async Job Queue", def: "A distributed background worker pool (Celery, BullMQ) executing long-running tasks beyond HTTP timeouts.", lesson: 2, tags: ["queues","scaling"] },
      { term: "HTTP 202 Accepted", def: "The standard HTTP status returned when a task has been successfully enqueued for background execution.", lesson: 2, tags: ["http","standards"] }
    ]
  },
  {
    id: "streaming-sessions", title: "Streaming & Sessions",
    terms: [
      { term: "Ghost Stream", def: "An orphaned server generation loop that continues wasting tokens after a client closes their browser tab.", lesson: 3, tags: ["streaming","pitfalls"] },
      { term: "Stateless Session Hydration", def: "Fetching recent conversation turns from Redis at the start of a request so any pod can serve any turn.", lesson: 4, tags: ["sessions","stateless"] },
      { term: "Context Pruning", def: "Summarizing older conversation turns into compact paragraphs to bound prompt token volume.", lesson: 4, tags: ["context","memory"] }
    ]
  },
  {
    id: "limits-isolation", title: "Limits & Multi-Tenancy",
    terms: [
      { term: "Tokens-Per-Minute", def: "A rate-limiting metric tracking cumulative input and output token consumption per tenant.", lesson: 5, tags: ["rate-limiting","quotas"] },
      { term: "Noisy Neighbor Problem", def: "When an unconstrained tenant monopolizes shared GPU compute or databases, degrading performance for others.", lesson: 5, tags: ["scaling","tenancy"] },
      { term: "Row-Level Security", def: "A PostgreSQL engine feature evaluating security policies per query to restrict row access by tenant.", lesson: 6, tags: ["security","databases"] }
    ]
  },
  {
    id: "topologies", title: "Topologies & Cloud",
    terms: [
      { term: "AWS PrivateLink", def: "Private cloud connectivity routing API traffic across cloud backbones without public internet exposure.", lesson: 7, tags: ["cloud","security"] },
      { term: "WebGPU", def: "A modern web standard enabling direct browser execution of machine learning models on client GPU hardware.", lesson: 7, tags: ["edge","browsers"] },
      { term: "Bring Your Own Key", def: "An enterprise security model where customers control the master cryptographic keys in their own KMS.", lesson: 6, tags: ["security","encryption"] }
    ]
  }
];

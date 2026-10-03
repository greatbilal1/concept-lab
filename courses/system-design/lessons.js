/* ============================================================
   System Design: From Idea to Production — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "the-system-design-framework-scale-estimation", file: "lessons/0001-the-system-design-framework-scale-estimation.html", title: "The System Design Framework: Requirements, Scale, and Estimation", topic: "System Design Framework", anim: "Generic" },
  { n: 2, id: "high-level-architecture-gateways-stateless", file: "lessons/0002-high-level-architecture-gateways-stateless.html", title: "High-Level Architecture: API Gateways, Load Balancers, and Stateless Services", topic: "High-Level Blueprint", anim: "Generic" },
  { n: 3, id: "storage-tier-sql-nosql-sharding", file: "lessons/0003-storage-tier-sql-nosql-sharding.html", title: "The Storage Tier: Relational, NoSQL, and Sharded Databases", topic: "Storage Tier", anim: "Generic" },
  { n: 4, id: "caching-strategies-invalidation-patterns", file: "lessons/0004-caching-strategies-invalidation-patterns.html", title: "Caching Strategies: Read-Through, Write-Behind, and Cache Invalidation", topic: "Caching Strategies", anim: "Generic" },
  { n: 5, id: "asynchronous-messaging-queues-kafka", file: "lessons/0005-asynchronous-messaging-queues-kafka.html", title: "Asynchronous Messaging: Message Queues, Pub/Sub, and Event Streams (Kafka)", topic: "Messaging & Streams", anim: "Generic" },
  { n: 6, id: "resilient-communication-circuit-breakers-bulkheads", file: "lessons/0006-resilient-communication-circuit-breakers-bulkheads.html", title: "Resilient Communication: Circuit Breakers, Bulkheads, and Backpressure", topic: "Resilient Communication", anim: "Generic" },
  { n: 7, id: "monitoring-slos-incident-response", file: "lessons/0007-monitoring-slos-incident-response.html", title: "Monitoring, SLOs, and Incident Response in Production", topic: "SLOs & Incident Response", anim: "Generic" },
  { n: 8, id: "designing-planetary-scale-system-end-to-end", file: "lessons/0008-designing-planetary-scale-system-end-to-end.html", title: "Designing a Planetary-Scale Distributed System End-to-End", topic: "Planetary System Design", anim: "Generic" }
];

/* ============================================================
   System Design: From Idea to Production — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "framework-scale", title: "Framework & Scale",
    terms: [
      { term: "System Design", def: "The process of defining architecture, components, modules, interfaces, and data for a system to satisfy specified requirements.", lesson: 1, tags: ["design","architecture"] },
      { term: "Back-of-the-Envelope Math", def: "Rapid mathematical estimations of QPS, storage capacity, and bandwidth using foundational constants.", lesson: 1, tags: ["estimation","math"] },
      { term: "Non-Functional Requirements", def: "System operational qualities such as latency, availability, fault tolerance, consistency, and security.", lesson: 1, tags: ["requirements","sla"] }
    ]
  },
  {
    id: "infrastructure-storage", title: "Infrastructure & Storage",
    terms: [
      { term: "Stateless Architecture", def: "Designing application servers to hold zero session state in local memory, enabling horizontal scale-out.", lesson: 2, tags: ["scaling","stateless"] },
      { term: "Database Sharding", def: "Partitioning a database horizontally across multiple physical servers using a high-cardinality shard key.", lesson: 3, tags: ["databases","sharding"] },
      { term: "Hot Shard", def: "A single database partition overwhelmed by traffic due to an unevenly distributed shard key.", lesson: 3, tags: ["databases","pitfalls"] }
    ]
  },
  {
    id: "caching-messaging", title: "Caching & Messaging",
    terms: [
      { term: "Cache-Aside", def: "A caching pattern querying cache first, lazily loading data from the database on miss, and evicting on write.", lesson: 4, tags: ["caching","patterns"] },
      { term: "Apache Kafka", def: "A distributed, partitioned, append-only commit log platform optimized for high-throughput event streaming.", lesson: 5, tags: ["messaging","kafka"] },
      { term: "Bulkhead Pattern", def: "Isolating thread and connection pools into discrete compartments so failure in one cannot sink the system.", lesson: 6, tags: ["resilience","patterns"] }
    ]
  },
  {
    id: "sre-synthesis", title: "SRE & Planetary Scale",
    terms: [
      { term: "Service Level Objective", def: "A target reliability goal (e.g. 99.9% uptime) agreed upon by engineering and product teams (SLO).", lesson: 7, tags: ["sre","metrics"] },
      { term: "Error Budget", def: "The allowable margin of failure (100% - SLO) used to balance rapid feature deployment against stability.", lesson: 7, tags: ["sre","governance"] },
      { term: "Planetary-Scale Architecture", def: "A distributed system architecture combining global Anycast CDNs, multi-region replication, and zero-trust security.", lesson: 8, tags: ["architecture","planetary"] }
    ]
  }
];

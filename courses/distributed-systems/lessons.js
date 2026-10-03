/* ============================================================
   Distributed Systems & Scalability — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "reality-distributed-systems-fallacies", file: "lessons/0001-reality-distributed-systems-fallacies.html", title: "The Reality of Distributed Systems: Network Fallacies and Partial Failure", topic: "Network Fallacies", anim: "Generic" },
  { n: 2, id: "cap-theorem-and-pacelc", file: "lessons/0002-cap-theorem-and-pacelc.html", title: "The CAP Theorem and PACELC: Consistency vs Availability", topic: "CAP & PACELC", anim: "Generic" },
  { n: 3, id: "consensus-algorithms-raft-paxos", file: "lessons/0003-consensus-algorithms-raft-paxos.html", title: "Consensus Algorithms: Paxos, Raft, and Distributed State Machines", topic: "Consensus & Raft", anim: "Generic" },
  { n: 4, id: "data-partitioning-consistent-hashing", file: "lessons/0004-data-partitioning-consistent-hashing.html", title: "Data Partitioning and Consistent Hashing", topic: "Consistent Hashing", anim: "Generic" },
  { n: 5, id: "replication-single-multi-leaderless", file: "lessons/0005-replication-single-multi-leaderless.html", title: "Replication Strategies: Single-Leader, Multi-Leader, and Leaderless", topic: "Replication", anim: "Generic" },
  { n: 6, id: "distributed-transactions-2pc-saga-pattern", file: "lessons/0006-distributed-transactions-2pc-saga-pattern.html", title: "Distributed Transactions: Two-Phase Commit (2PC) and the Saga Pattern", topic: "Distributed Transactions", anim: "Generic" },
  { n: 7, id: "eventual-consistency-vector-clocks-crdts", file: "lessons/0007-eventual-consistency-vector-clocks-crdts.html", title: "Eventual Consistency, Vector Clocks, and CRDTs", topic: "Eventual Consistency", anim: "Generic" },
  { n: 8, id: "engineering-resilient-distributed-systems", file: "lessons/0008-engineering-resilient-distributed-systems.html", title: "Engineering Resilient Distributed Systems", topic: "Distributed Systems Synthesis", anim: "Generic" }
];

/* ============================================================
   Distributed Systems & Scalability — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "fallacies-cap", title: "Fallacies & CAP",
    terms: [
      { term: "Partial Failure", def: "A condition in distributed computing where components fail independently while the system continues in an uncertain state.", lesson: 1, tags: ["distributed","failures"] },
      { term: "CAP Theorem", def: "The mathematical proof that distributed stores must choose between Consistency and Availability during network Partitions.", lesson: 2, tags: ["theory","cap"] },
      { term: "PACELC Theorem", def: "An extension of CAP modeling the trade-off between Latency and Consistency during normal non-partitioned operation.", lesson: 2, tags: ["theory","pacelc"] }
    ]
  },
  {
    id: "consensus-partition", title: "Consensus & Hashing",
    terms: [
      { term: "Raft Consensus", def: "A distributed consensus algorithm decomposing agreement into Leader Election, Log Replication, and Safety.", lesson: 3, tags: ["consensus","raft"] },
      { term: "Split-Brain", def: "A failure state where two competing nodes both declare themselves leader, accepting conflicting mutations.", lesson: 3, tags: ["failures","splitbrain"] },
      { term: "Consistent Hashing", def: "Mapping nodes and keys onto a circular ring to ensure adding/removing nodes relocates only K/N keys.", lesson: 4, tags: ["scaling","hashing"] }
    ]
  },
  {
    id: "replication-tx", title: "Replication & Sagas",
    terms: [
      { term: "Quorum (W + R > N)", def: "The condition where read and write replica subsets overlap, guaranteeing reads observe the latest write.", lesson: 5, tags: ["replication","quorum"] },
      { term: "Saga Pattern", def: "A sequence of local microservice transactions coordinated by events, using compensating transactions to undo failures.", lesson: 6, tags: ["transactions","sagas"] },
      { term: "Compensating Transaction", def: "An explicit undo operation (like a refund) executed to reverse the business effects of an earlier step.", lesson: 6, tags: ["transactions","rollback"] }
    ]
  },
  {
    id: "causality", title: "Causality & CRDTs",
    terms: [
      { term: "Clock Skew", def: "The physical time drift between server quartz clocks that makes wall-clock timestamps unreliable for ordering.", lesson: 7, tags: ["time","clocks"] },
      { term: "Vector Clock", def: "An array of logical clocks tracking causality across distributed nodes to determine 'happened-before' relationships.", lesson: 7, tags: ["time","causality"] },
      { term: "CRDT", def: "Conflict-Free Replicated Data Type — data structures with commutative merge operations that converge deterministically.", lesson: 7, tags: ["crdt","concurrency"] }
    ]
  }
];

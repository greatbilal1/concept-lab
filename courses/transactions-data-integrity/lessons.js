/* ============================================================
   Transactions & Data Integrity — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "the-acid-guarantees-explained", file: "lessons/0001-the-acid-guarantees-explained.html", title: "The ACID guarantees explained", topic: "The ACID Properties", anim: "Lock" },
  { n: 2, id: "durability-wal-and-crash-recovery", file: "lessons/0002-durability-wal-and-crash-recovery.html", title: "Durability: Write-Ahead Logs (WAL) and recovery", topic: "The ACID Properties", anim: "Lock" },
  { n: 3, id: "the-four-ansi-isolation-levels", file: "lessons/0003-the-four-ansi-isolation-levels.html", title: "The four ANSI isolation levels", topic: "Isolation Levels & Anomalies", anim: "Lock" },
  { n: 4, id: "mvcc-multi-version-concurrency-control", file: "lessons/0004-mvcc-multi-version-concurrency-control.html", title: "MVCC: Multi-Version Concurrency Control", topic: "Isolation Levels & Anomalies", anim: "Lock" },
  { n: 5, id: "locking-pessimistic-versus-optimistic", file: "lessons/0005-locking-pessimistic-versus-optimistic.html", title: "Locking: pessimistic versus optimistic", topic: "Locking & Concurrency Control", anim: "Lock" },
  { n: 6, id: "deadlocks-detection-and-prevention", file: "lessons/0006-deadlocks-detection-and-prevention.html", title: "Deadlocks: detection and prevention", topic: "Locking & Concurrency Control", anim: "Lock" },
  { n: 7, id: "distributed-transactions-and-two-phase-commit", file: "lessons/0007-distributed-transactions-and-two-phase-commit.html", title: "Distributed transactions and two-phase commit", topic: "Durability & Recovery", anim: "Lock" },
  { n: 8, id: "eventual-consistency-and-the-saga-pattern", file: "lessons/0008-eventual-consistency-and-the-saga-pattern.html", title: "Eventual consistency and the Saga pattern", topic: "Durability & Recovery", anim: "Lock" }
];

/* ============================================================
   Transactions & Data Integrity — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "acid-foundations", title: "The ACID Properties",
    terms: [
      { term: "Transaction", def: "A logical unit of work comprising one or more database operations executed with ACID guarantees.", lesson: 1, tags: ["transactions"] },
      { term: "Atomicity", def: "The guarantee that all operations in a transaction either complete entirely or are completely rolled back (all-or-nothing).", lesson: 1, tags: ["acid"] },
      { term: "Consistency", def: "The guarantee that a transaction transitions the database from one valid state to another, obeying all constraints.", lesson: 1, tags: ["acid"] },
      { term: "Durability", def: "The guarantee that committed data changes will survive permanent server crashes, power losses, and reboots.", lesson: 2, tags: ["acid"] }
    ]
  },
  {
    id: "isolation-anomalies", title: "Isolation Levels & Anomalies",
    terms: [
      { term: "Isolation", def: "The guarantee that concurrently executing transactions do not interfere with each other's intermediate state.", lesson: 3, tags: ["acid"] },
      { term: "Dirty read", def: "A concurrency anomaly where a transaction reads uncommitted, temporary data written by another active transaction.", lesson: 3, tags: ["anomalies"] },
      { term: "Non-repeatable read", def: "An anomaly where reading the same row twice within a transaction yields different values because another committed an update.", lesson: 3, tags: ["anomalies"] },
      { term: "Phantom read", def: "An anomaly where re-running a range query yields new 'phantom' rows inserted and committed by another transaction.", lesson: 4, tags: ["anomalies"] }
    ]
  },
  {
    id: "locking-concurrency", title: "Locking & Concurrency Control",
    terms: [
      { term: "MVCC", def: "Multi-Version Concurrency Control: a technique allowing readers to not block writers, and writers to not block readers.", lesson: 4, tags: ["mvcc"] },
      { term: "Pessimistic locking", def: "A strategy that locks rows explicitly (SELECT FOR UPDATE) to prevent concurrent modifications.", lesson: 5, tags: ["locking"] },
      { term: "Optimistic locking", def: "A strategy that detects concurrent collisions at write time using a version or timestamp column without locking.", lesson: 5, tags: ["locking"] },
      { term: "Deadlock", def: "A circular dependency deadlock where two transactions each hold a lock the other needs, blocking each other forever.", lesson: 6, tags: ["deadlocks"] }
    ]
  },
  {
    id: "durability-wal", title: "Durability & Recovery",
    terms: [
      { term: "WAL", def: "Write-Ahead Logging: a durability mechanism writing changes sequentially to an append-only log before modifying heap data.", lesson: 2, tags: ["durability"] },
      { term: "fsync", def: "An operating system system call flushing volatile hard drive write cache buffers to permanent non-volatile storage.", lesson: 2, tags: ["storage"] },
      { term: "Two-Phase Commit", def: "A distributed protocol (2PC) coordinating atomic transaction commits across multiple independent databases.", lesson: 7, tags: ["distributed"] },
      { term: "Saga pattern", def: "An architectural pattern managing distributed transactions through a sequence of local transactions and compensations.", lesson: 8, tags: ["patterns"] }
    ]
  }
];

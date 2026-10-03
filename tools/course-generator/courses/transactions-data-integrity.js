"use strict";

module.exports = {
  id: "transactions-data-integrity",
  title: "Transactions & Data Integrity",
  num: 35,
  emoji: "🔒",
  desc: "ACID, isolation levels, locking and constraints — keeping data correct when many things happen at once.",
  mission: `# Mission — Transactions & Data Integrity

## Why this course exists

When only one user accesses a database, keeping data correct is easy. But in production, hundreds of concurrent users buy tickets, transfer money, and update inventories simultaneously while servers crash and power fails. Without transactions and concurrency control, systems suffer from dirty reads, lost updates, and phantom bookings. This course teaches the ACID guarantees, transaction isolation levels, row-level locking, and deadlocks.

## What the learner can do at the end

- Group operations into atomic database transactions using BEGIN, COMMIT, and ROLLBACK.
- Explain each of the four ACID guarantees (Atomicity, Consistency, Isolation, Durability) concretely.
- Select the appropriate Isolation Level (Read Committed, Repeatable Read, Serializable) for business operations.
- Prevent lost updates and race conditions using pessimistic locking (SELECT FOR UPDATE) and optimistic locking.
- Diagnose and resolve database deadlocks and lock contention.

## What this course is NOT

- Not a distributed consensus algorithm course (Raft, Paxos).
- Not an operating system kernel thread synchronization guide.

## Success looks like

When designing a high-concurrency balance transfer or seat reservation feature, the learner writes transaction blocks with appropriate isolation and locking that prevent double-spending and deadlocks under heavy concurrent load.
`,
  notes: `# Notes — Transactions & Data Integrity

## Decisions
- Group into four themes: The ACID Properties, Concurrency Anomalies & Isolation, Locking Strategies, and Distributed Integrity.
- Focus on practical SQL transaction syntax and standard ANSI isolation levels.
`,
  resources: `# Resources — Transactions & Data Integrity

## Knowledge (primary sources)
- Jim Gray, *The Transaction Concept: Virtues and Limitations* (VLDB, 1981).
- Martin Kleppmann, *Designing Data-Intensive Applications* (O'Reilly, Chapter 7: 'Transactions').
- PostgreSQL Documentation: *Concurrency Control* (postgresql.org/docs/current/mvcc.html).

## Wisdom
- A transaction is an all-or-nothing guarantee. In banking and inventory, there is no such thing as 'half-saved'.
`,
  cheatsheetSections: [
    {
      title: "Transaction Syntax",
      label: "All-or-nothing execution block",
      code: `BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
-- If any error occurs:
-- ROLLBACK;
-- Otherwise:
COMMIT;`,
      lessonN: 1,
      lessonSlug: "the-acid-guarantees-explained",
      lessonTitle: "The ACID guarantees explained"
    },
    {
      title: "Isolation Levels",
      label: "ANSI SQL concurrency levels",
      code: `SET TRANSACTION ISOLATION LEVEL READ COMMITTED;   -- Default: prevents dirty reads
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;  -- Snapshot: prevents non-repeatable reads
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;     -- Strict: prevents all concurrency anomalies`,
      lessonN: 3,
      lessonSlug: "the-four-ansi-isolation-levels",
      lessonTitle: "The four ANSI isolation levels"
    },
    {
      title: "Pessimistic Locking",
      label: "SELECT FOR UPDATE",
      code: `BEGIN;
-- Lock the specific row against concurrent modifications
SELECT balance FROM accounts WHERE id = 1 FOR UPDATE;

UPDATE accounts SET balance = balance - 50 WHERE id = 1;
COMMIT; -- lock released upon commit or rollback!`,
      lessonN: 5,
      lessonSlug: "locking-pessimistic-versus-optimistic",
      lessonTitle: "Locking: pessimistic versus optimistic"
    },
    {
      title: "Optimistic Locking",
      label: "Version column pattern",
      code: `-- 1. Read current version
SELECT id, balance, version FROM accounts WHERE id = 1;

-- 2. Update with version guard
UPDATE accounts 
SET balance = balance - 50, version = version + 1
WHERE id = 1 AND version = 3;

-- If rows affected == 0, another transaction won; retry!`,
      lessonN: 6,
      lessonSlug: "deadlocks-detection-and-prevention",
      lessonTitle: "Deadlocks: detection and prevention"
    }
  ],
  glossaryGroups: [
    {
      id: "acid-foundations",
      title: "The ACID Properties",
      terms: [
        { term: "Transaction", def: "A logical unit of work comprising one or more database operations executed with ACID guarantees.", lesson: 1, tags: ["transactions"] },
        { term: "Atomicity", def: "The guarantee that all operations in a transaction either complete entirely or are completely rolled back (all-or-nothing).", lesson: 1, tags: ["acid"] },
        { term: "Consistency", def: "The guarantee that a transaction transitions the database from one valid state to another, obeying all constraints.", lesson: 1, tags: ["acid"] },
        { term: "Durability", def: "The guarantee that committed data changes will survive permanent server crashes, power losses, and reboots.", lesson: 2, tags: ["acid"] }
      ]
    },
    {
      id: "isolation-anomalies",
      title: "Isolation Levels & Anomalies",
      terms: [
        { term: "Isolation", def: "The guarantee that concurrently executing transactions do not interfere with each other's intermediate state.", lesson: 3, tags: ["acid"] },
        { term: "Dirty read", def: "A concurrency anomaly where a transaction reads uncommitted, temporary data written by another active transaction.", lesson: 3, tags: ["anomalies"] },
        { term: "Non-repeatable read", def: "An anomaly where reading the same row twice within a transaction yields different values because another committed an update.", lesson: 3, tags: ["anomalies"] },
        { term: "Phantom read", def: "An anomaly where re-running a range query yields new 'phantom' rows inserted and committed by another transaction.", lesson: 4, tags: ["anomalies"] }
      ]
    },
    {
      id: "locking-concurrency",
      title: "Locking & Concurrency Control",
      terms: [
        { term: "MVCC", def: "Multi-Version Concurrency Control: a technique allowing readers to not block writers, and writers to not block readers.", lesson: 4, tags: ["mvcc"] },
        { term: "Pessimistic locking", def: "A strategy that locks rows explicitly (SELECT FOR UPDATE) to prevent concurrent modifications.", lesson: 5, tags: ["locking"] },
        { term: "Optimistic locking", def: "A strategy that detects concurrent collisions at write time using a version or timestamp column without locking.", lesson: 5, tags: ["locking"] },
        { term: "Deadlock", def: "A circular dependency deadlock where two transactions each hold a lock the other needs, blocking each other forever.", lesson: 6, tags: ["deadlocks"] }
      ]
    },
    {
      id: "durability-wal",
      title: "Durability & Recovery",
      terms: [
        { term: "WAL", def: "Write-Ahead Logging: a durability mechanism writing changes sequentially to an append-only log before modifying heap data.", lesson: 2, tags: ["durability"] },
        { term: "fsync", def: "An operating system system call flushing volatile hard drive write cache buffers to permanent non-volatile storage.", lesson: 2, tags: ["storage"] },
        { term: "Two-Phase Commit", def: "A distributed protocol (2PC) coordinating atomic transaction commits across multiple independent databases.", lesson: 7, tags: ["distributed"] },
        { term: "Saga pattern", def: "An architectural pattern managing distributed transactions through a sequence of local transactions and compensations.", lesson: 8, tags: ["patterns"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "the-acid-guarantees-explained",
      title: "The ACID guarantees explained",
      topic: "The ACID Properties",
      anim: "Lock",
      lede: "What happens when the server loses power midway through a balance transfer? Discover the four ACID guarantees that keep enterprise data correct.",
      winShort: "Explain the four ACID database guarantees and group operations into atomic transactions",
      missionLink: "The fundamental trust contract between application developers and database storage",
      sec1: {
        title: "All or nothing: The bank transfer",
        content: `<p>Consider transferring $100 from Account 1 to Account 2. This requires two operations: <b>1.</b> Deduct $100 from Account 1, and <b>2.</b> Add $100 to Account 2. What happens if the server loses power or crashes between step 1 and step 2?</p><p>Without transactions, $100 vanishes into thin air! A <b>Transaction</b> wraps both statements into an atomic unit: <code>BEGIN; ... COMMIT;</code>. If an error or crash occurs anywhere before COMMIT, the database automatically rolls back step 1, leaving the database completely uncorrupted.</p>`,
        keyIdea: "A transaction guarantees atomicity: all operations succeed together, or all fail together."
      },
      predict: {
        q: "What does the 'A' in ACID stand for?",
        a: [
          "Atomicity (the transaction executes as an indivisible unit: all-or-nothing)",
          "Authentication (verifying user passwords)",
          "Asynchronous (executing in the background)",
          "Algorithms (using mathematical formulas)"
        ],
        c: 0,
        why: "Atomicity ensures operations are indivisible; partial execution is impossible."
      },
      sec2: {
        title: "The four ACID pillars",
        content: `<p>Understand the exact definition of each pillar in the ACID guarantee.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Atomicity (A)", lines: ["All or nothing", "failure rolls back everything"] },
          { title: "Consistency (C)", lines: ["enforces constraints (NOT NULL, CHECK)", "never leaves database in invalid state"] },
          { title: "Isolation (I)", lines: ["concurrent transactions cannot see", "each other's uncommitted intermediate state"] },
          { title: "Durability (D)", lines: ["committed data survives power loss", "written to Write-Ahead Log (WAL) on disk"] }
        ]
      },
      sec3: {
        title: "Tracing an atomic rollback",
        content: `<p>Trace how an error during step 2 triggers an automatic rollback of step 1.</p>`,
      },
      trace: {
        code: [
          "BEGIN TRANSACTION;",
          "UPDATE accounts SET balance = balance - 100 WHERE id = 1;",
          "UPDATE accounts SET balance = balance + 100 WHERE id = 999; # id 999 not found -> ERROR!",
          "ROLLBACK; # Database restores Account 1's $100 instantly!"
        ],
        steps: [
          { line: 0, vars: { transaction: "active block started" } },
          { line: 1, vars: { step_1: "Account 1 decremented in transaction sandbox" } },
          { line: 2, vars: { step_2: "Account 999 check fails; error raised" } },
          { line: 3, vars: { rollback: "all changes undone; database state clean" } }
        ]
      },
      practiceIntro: "Test your memory of the ACID acronym.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The guarantee that all operations succeed or all fail is <0>.",
          "The guarantee that concurrent transactions do not interfere is <1>.",
          "The guarantee that committed data survives power outages is <2>."
        ],
        blanks: [
          { a: ["Atomicity"], why: "Atomicity enforces all-or-nothing." },
          { a: ["Isolation"], why: "Isolation separates concurrent transactions." },
          { a: ["Durability"], why: "Durability guarantees persistence across crashes." }
        ]
      },
      win: "You can explain the four ACID guarantees and wrap dependent multi-statement operations into atomic transaction blocks.",
      nextTasks: [
        "Wrap a multi-step financial transfer inside BEGIN ... COMMIT in your database.",
        "Trigger an intentional error after step 1 and execute ROLLBACK.",
        "Verify that the database state remains completely untouched after a rollback."
      ],
      primarySource: "Jim Gray, *The Transaction Concept: Virtues and Limitations* (IEEE, 1981).",
      quiz: [
        {
          q: "What is the primary role of 'Atomicity' in database transactions?",
          a: [
            "It guarantees that all statements in a transaction complete successfully, or all changes are rolled back completely",
            "It ensures that numbers are stored as atomic subatomic particles",
            "It speeds up queries by fifty percent",
            "It allows multiple users to share a single database password"
          ],
          c: 0,
          why: "Atomicity eliminates intermediate half-executed states during software crashes or errors."
        },
        {
          q: "What does 'Durability' guarantee in an ACID-compliant database?",
          a: [
            "Once a transaction commits, its changes are written to non-volatile storage and will survive even a sudden power loss",
            "The physical computer hard drive will never break",
            "The database software will never need updates",
            "The database is immune to internet network outages"
          ],
          c: 0,
          why: "Durability guarantees that committed data is safely persisted to disk and recoverable after power cuts."
        },
        {
          q: "What happens if a database client loses its network connection in the middle of an uncommitted transaction?",
          a: [
            "The database detects the disconnection and automatically executes a ROLLBACK, discarding all uncommitted changes",
            "The database commits the partial changes automatically",
            "The database waits forever and blocks all other users",
            "The computer server crashes"
          ],
          c: 0,
          why: "Uncommitted transactions are automatically aborted and rolled back if the client disconnects."
        },
        {
          q: "What command in SQL permanently seals a transaction's changes into the database?",
          a: [
            "COMMIT",
            "SAVE",
            "PUSH",
            "CLOSE"
          ],
          c: 0,
          why: "COMMIT marks the successful end of a transaction and persists changes to disk."
        }
      ]
    },
    {
      n: 2,
      id: "durability-wal-and-crash-recovery",
      title: "Durability: Write-Ahead Logs (WAL) and recovery",
      topic: "The ACID Properties",
      anim: "Lock",
      lede: "How does a database guarantee data is safe without waiting for slow random disk writes? Master the Write-Ahead Log (WAL), checkpoints, and crash recovery.",
      winShort: "Explain how Write-Ahead Logging (WAL) and fsync ensure durability with high performance",
      missionLink: "The low-level storage mechanism that makes ACID durability physically possible",
      sec1: {
        title: "The disk I/O bottleneck",
        content: `<p>Modifying a table requires writing to random 8KB disk pages in the table heap and updating several B-tree indexes across disk. If the database waited for every random disk seek before returning <code>COMMIT</code>, writes would slow to a crawl (100 writes/sec).</p><p>Instead, relational databases use a <b>Write-Ahead Log (WAL)</b>. Before touching any table data pages, changes are appended sequentially to a single append-only log file. Sequential disk writes are blazing fast (thousands per second). Once the log record is flushed with <code>fsync</code>, the commit is durable!</p>`,
        keyIdea: "WAL appends changes sequentially to a log first; table data pages are updated lazily in memory."
      },
      predict: {
        q: "If the server power cord is pulled 1 millisecond AFTER a COMMIT returns success, is data lost?",
        a: [
          "No, because the commit was written and flushed to the Write-Ahead Log before returning success",
          "Yes, all unwritten data in RAM is permanently lost",
          "Only half the data is preserved",
          "The database will refuse to start up again"
        ],
        c: 0,
        why: "A COMMIT only confirms success after the WAL entry has been flushed to physical non-volatile disk."
      },
      sec2: {
        title: "The WAL and Checkpoint cycle",
        content: `<p>How memory buffers, WAL logs, and periodic checkpoints coordinate crash resilience.</p>`,
      },
      diagram: {
        boxes: [
          { title: "1. Append to WAL", lines: ["sequential append to WAL file", "flushed to disk via fsync -> COMMIT!"] },
          { title: "2. Dirty Pages in RAM", lines: ["table pages modified in buffer cache", "heap file on disk not touched yet!"] },
          { title: "3. Checkpoint Flush", lines: ["periodic background flush", "syncs dirty RAM pages to heap on disk"] }
        ]
      },
      sec3: {
        title: "Tracing crash recovery replay",
        content: `<p>Trace how a database recovers after a sudden power loss by replaying the Write-Ahead Log.</p>`,
      },
      trace: {
        code: [
          "# Sudden server reboot after power outage!",
          "Engine boot: checks last clean checkpoint record on disk",
          "Engine replaying WAL: finds committed transactions since checkpoint",
          "Engine executes REDO: applies missing changes to table heap pages",
          "# Recovery complete in 2 seconds: zero committed data lost!"
        ],
        steps: [
          { line: 0, vars: { state: "recovering from unclean shutdown" } },
          { line: 1, vars: { anchor: "locates last clean checkpoint timestamp" } },
          { line: 2, vars: { replay: "scans WAL forward, finding committed transactions" } },
          { line: 4, vars: { restored: "all committed writes recovered; database opens for traffic" } }
        ]
      },
      practiceIntro: "Test your memory of database crash recovery.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The sequential append-only log ensuring durability is the Write-<0> Log.",
          "The acronym WAL stands for Write-Ahead <1>.",
          "The OS call ensuring bytes are physically flushed to non-volatile disk is <2>."
        ],
        blanks: [
          { a: ["Ahead"], why: "Write-Ahead Logging writes logs before data pages." },
          { a: ["Log", "Logging"], why: "WAL stands for Write-Ahead Logging." },
          { a: ["fsync"], why: "fsync flushes disk controller cache buffers to storage." }
        ]
      },
      win: "You can explain the physics of Write-Ahead Logging, checkpoints, and how databases recover instantly from sudden power failure.",
      nextTasks: [
        "Locate the pg_wal directory in a local PostgreSQL installation.",
        "Check checkpoint configuration settings (checkpoint_timeout, max_wal_size) in postgresql.conf.",
        "Explain why setting fsync=off in production is dangerous."
      ],
      primarySource: "C. Mohan et al., *ARIES: A Transaction Recovery Method Supporting Fine-Granularity Locking* (ACM Transactions on Database Systems, 1992).",
      quiz: [
        {
          q: "What is the core principle of Write-Ahead Logging (WAL)?",
          a: [
            "Log records describing a change must be flushed to non-volatile disk BEFORE the actual table data pages are written",
            "Logs must be written in alphabetical order",
            "Logs are only written once per month",
            "Logs are stored in the client web browser"
          ],
          c: 0,
          why: "Flushing the log first ensures that if a crash occurs while writing table pages, changes can be replayed."
        },
        {
          q: "What is a database 'checkpoint'?",
          a: [
            "A periodic event where all dirty data pages in memory buffers are flushed to disk, advancing the recovery point",
            "A security scanner that checks user passwords",
            "A tool that deletes old database tables",
            "A checkpoint where users are logged out"
          ],
          c: 0,
          why: "Checkpoints bound recovery time by syncing memory pages, allowing old WAL logs to be recycled."
        },
        {
          q: "Why is 'fsync' critical for database durability?",
          a: [
            "Modern hard drives hold data in volatile volatile write caches; fsync forces bytes to physical storage media",
            "It speeds up network data downloads",
            "It encrypts database tables with TLS",
            "It turns off the computer cooling fans"
          ],
          c: 0,
          why: "Without fsync, drive write caches lose data on power failure even if the OS reported success."
        },
        {
          q: "What would happen if you set 'fsync = off' in a production database?",
          a: [
            "Write throughput would skyrocket, but any sudden power outage or OS crash would result in catastrophic unrecoverable data corruption",
            "The database would immediately shut down and refuse to run",
            "All SQL queries would throw syntax errors",
            "The database would automatically back up to Google Drive"
          ],
          c: 0,
          why: "Disabling fsync leaves writes in volatile drive cache, guaranteeing corruption on power loss."
        }
      ]
    },
    {
      n: 3,
      id: "the-four-ansi-isolation-levels",
      title: "The four ANSI isolation levels",
      topic: "Isolation Levels & Anomalies",
      anim: "Lock",
      lede: "What happens when two people book the last airline seat at the exact same millisecond? Explore the four ANSI isolation levels and the concurrency anomalies they prevent.",
      winShort: "Select between Read Committed, Repeatable Read, and Serializable isolation levels",
      missionLink: "Prevents race conditions and dirty reads in multi-user concurrent applications",
      sec1: {
        title: "The spectrum of isolation",
        content: `<p>The 'I' in ACID stands for <b>Isolation</b>: ideally, every transaction should execute as if it were the only transaction in the universe (<b>Serializable</b>). But perfect isolation is computationally expensive and reduces throughput.</p><p>To balance performance with correctness, ANSI SQL defined four standard <b>Isolation Levels</b>: <b>Read Uncommitted</b>, <b>Read Committed</b> (industry default), <b>Repeatable Read</b>, and <b>Serializable</b>. Higher levels prevent more concurrency anomalies at the expense of concurrency.</p>`,
        keyIdea: "Higher isolation levels prevent concurrency anomalies at the expense of throughput and locking."
      },
      predict: {
        q: "What is the default transaction isolation level in PostgreSQL and most enterprise databases?",
        a: [
          "Read Committed (transactions only see data that has already been committed)",
          "Read Uncommitted (dirty reads allowed)",
          "Serializable (perfect isolation)",
          "Repeatable Read"
        ],
        c: 0,
        why: "Read Committed is the default in PostgreSQL, SQL Server, and Oracle, balancing safety and speed."
      },
      sec2: {
        title: "The anomaly and isolation matrix",
        content: `<p>Memorise which concurrency anomalies are prevented by each ANSI isolation level.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Read Uncommitted", lines: ["vulnerable to Dirty Reads", "rarely used in production"] },
          { title: "Read Committed (Default)", lines: ["prevents Dirty Reads", "vulnerable to Non-Repeatable Reads & Phantoms"] },
          { title: "Repeatable Read", lines: ["prevents Dirty & Non-Repeatable Reads", "consistent snapshot view"] },
          { title: "Serializable (Strict)", lines: ["prevents ALL anomalies including Phantoms", "transactions execute as if in serial order!"] }
        ]
      },
      sec3: {
        title: "Tracing a Non-Repeatable Read anomaly",
        content: `<p>Trace how a row's value changes between two identical SELECT queries under Read Committed.</p>`,
      },
      trace: {
        code: [
          "# Transaction 1: SELECT balance FROM accounts WHERE id = 1; -> returns $100",
          "# Transaction 2 (concurrent): UPDATE accounts SET balance = $50 WHERE id = 1; COMMIT;",
          "# Transaction 1: SELECT balance FROM accounts WHERE id = 1; -> returns $50!",
          "# Anomaly: The same query returned two different values in the same transaction!"
        ],
        steps: [
          { line: 0, vars: { tx1_first_read: "balance = $100" } },
          { line: 1, vars: { tx2_mutation: "concurrent update committed" } },
          { line: 2, vars: { tx1_second_read: "balance = $50 (non-repeatable read occurred)" } }
        ]
      },
      practiceIntro: "Test your memory of ANSI isolation levels.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Reading uncommitted data written by another transaction is a <0> read.",
          "The default isolation level in PostgreSQL is Read <1>.",
          "The strictest isolation level preventing all anomalies is <2>."
        ],
        blanks: [
          { a: ["dirty"], why: "Dirty reads expose uncommitted changes." },
          { a: ["Committed"], why: "Read Committed guarantees seeing only committed data." },
          { a: ["Serializable"], why: "Serializable simulates serial execution order." }
        ]
      },
      win: "You can evaluate concurrency requirements and configure appropriate transaction isolation levels for sensitive workflows.",
      nextTasks: [
        "Check your current database isolation level using SHOW transaction_isolation.",
        "Set transaction isolation level using SET TRANSACTION ISOLATION LEVEL REPEATABLE READ.",
        "Demonstrate a non-repeatable read across two concurrent psql terminal sessions."
      ],
      primarySource: "ANSI/ISO SQL-92 Standard: *Transaction Isolation Levels* & Berenson et al., *A Critique of ANSI SQL Isolation Levels* (SIGMOD, 1995).",
      quiz: [
        {
          q: "What is a 'Dirty Read' in database concurrency?",
          a: [
            "A transaction reads uncommitted data written by another active transaction that might later be rolled back",
            "A query that contains syntax errors",
            "A read from a hard drive with bad sectors",
            "A query that returns more than 100 rows"
          ],
          c: 0,
          why: "If Transaction B reads Transaction A's uncommitted write, and A rolls back, B acted on phantom data."
        },
        {
          q: "How does 'Repeatable Read' isolation prevent non-repeatable reads?",
          a: [
            "It creates a consistent snapshot of the database at transaction start; all queries see the database frozen at that instant",
            "It locks the entire database against all other users",
            "It prevents other users from logging in",
            "It caches queries in the client web browser"
          ],
          c: 0,
          why: "Snapshot isolation guarantees that re-reading a row returns the exact same snapshot version."
        },
        {
          q: "What error does PostgreSQL throw if two concurrent transactions conflict under Serializable isolation?",
          a: [
            "ERROR: could not serialize access due to read/write dependencies (40001 serialization_failure)",
            "FATAL: Database corrupted",
            "A NullPointerException",
            "The query hangs forever"
          ],
          c: 0,
          why: "Serializable engines abort one of the conflicting transactions, requiring the application to retry."
        },
        {
          q: "Why isn't 'Serializable' used as the default isolation level everywhere if it is the safest?",
          a: [
            "It incurs significant performance overhead, higher abort rates, and requires application-level retry logic",
            "Because Serializable was removed from modern SQL standards",
            "Because it can only store text, not numbers",
            "Because it only works on single-core computers"
          ],
          c: 0,
          why: "High abort rates and dependency tracking overhead make Serializable overkill for routine read traffic."
        }
      ]
    },
    {
      n: 4,
      id: "mvcc-multi-version-concurrency-control",
      title: "MVCC: Multi-Version Concurrency Control",
      topic: "Isolation Levels & Anomalies",
      anim: "Lock",
      lede: "How does PostgreSQL allow readers to never block writers, and writers to never block readers? Discover Multi-Version Concurrency Control (MVCC) and transaction snapshots.",
      winShort: "Explain how Multi-Version Concurrency Control (MVCC) eliminates read-write lock contention",
      missionLink: "The architectural foundation of modern high-concurrency database engines",
      sec1: {
        title: "Readers do not block writers",
        content: `<p>In older database engines, reading a table acquired a shared lock that blocked anyone from writing, and writing acquired an exclusive lock that blocked anyone from reading. Under heavy traffic, databases ground to a halt.</p><p>Modern databases (PostgreSQL, MySQL InnoDB, Oracle) solve this with <b>Multi-Version Concurrency Control (MVCC)</b>. When a row is updated, the database <i>does not overwrite the old row</i>: it writes a new version of the row with an active transaction ID. <b>Readers look at an older snapshot version, while writers create new versions.</b></p>`,
        keyIdea: "MVCC maintains multiple versions of rows so readers never block writers and writers never block readers."
      },
      predict: {
        q: "In an MVCC database, does a slow 10-minute reporting query block other users from updating rows?",
        a: [
          "No, the reporting query reads an older consistent snapshot of rows without blocking concurrent updates",
          "Yes, all updates are queued and blocked for 10 minutes",
          "The database automatically terminates the reporting query after 5 seconds",
          "The database converts all updates into deletes"
        ],
        c: 0,
        why: "MVCC readers read snapshot versions without acquiring exclusive table locks."
      },
      sec2: {
        title: "Row tuple versioning (xmin and xmax)",
        content: `<p>How PostgreSQL uses hidden system columns (xmin and xmax) to determine row visibility.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Row Version 1", lines: ["xmin: 100 (created by tx 100)", "xmax: 105 (deleted/updated by tx 105)", "visible to transactions < 105"] },
          { title: "Row Version 2", lines: ["xmin: 105 (created by tx 105)", "xmax: 0 (active)", "visible to transactions >= 105"] }
        ]
      },
      sec3: {
        title: "Tracing MVCC tuple visibility",
        content: `<p>Trace how Transaction 102 continues reading Version 1 even after Transaction 105 committed Version 2.</p>`,
      },
      trace: {
        code: [
          "# Transaction 102 starts (snapshot takes note: active tx is 102)",
          "# Transaction 105 updates balance from $100 to $200 and COMMITS",
          "# Transaction 102 queries balance:",
          "# MVCC check: xmin 105 was created AFTER tx 102 snapshot!",
          "# Result: Transaction 102 reads Version 1 ($100) — consistent snapshot preserved!"
        ],
        steps: [
          { line: 0, vars: { tx_102: "snapshot established" } },
          { line: 1, vars: { tx_105: "created new version in heap" } },
          { line: 3, vars: { visibility_rules: "tuple version 2 invisible to older snapshot" } },
          { line: 4, vars: { outcome: "reads version 1 without lock contention" } }
        ]
      },
      practiceIntro: "Test your memory of MVCC mechanics.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The architecture maintaining multiple row versions is Multi-Version <0> Control.",
          "The acronym MVCC stands for Multi-Version <1> Control.",
          "The cleanup process that purges old dead row versions is <2>."
        ],
        blanks: [
          { a: ["Concurrency"], why: "MVCC stands for Multi-Version Concurrency Control." },
          { a: ["Concurrency"], why: "Concurrency control regulates simultaneous operations." },
          { a: ["VACUUM"], why: "VACUUM in PostgreSQL reclaims dead tuple storage." }
        ]
      },
      win: "You can explain MVCC visibility rules and understand how databases deliver consistent snapshots without blocking concurrent writes.",
      nextTasks: [
        "Inspect hidden MVCC system columns in PostgreSQL using SELECT cmin, cmax, xmin, xmax FROM table.",
        "Demonstrate concurrent read-write execution across two terminal sessions.",
        "Explain why frequent updates create dead tuples that require autovacuum cleanup."
      ],
      primarySource: "PostgreSQL Documentation: *Concurrency Control — MVCC* (postgresql.org/docs/current/mvcc-intro.html).",
      quiz: [
        {
          q: "What is the primary benefit of Multi-Version Concurrency Control (MVCC)?",
          a: [
            "Readers never block writers, and writers never block readers, maximizing concurrency and throughput",
            "It eliminates the need for hard drives",
            "It automatically writes unit tests for all database queries",
            "It converts relational tables into NoSQL documents"
          ],
          c: 0,
          why: "By serving snapshot copies to readers, MVCC eliminates read-write lock contention."
        },
        {
          q: "What are 'dead tuples' in PostgreSQL MVCC storage?",
          a: [
            "Older versions of rows that were deleted or superseded by an update, and are no longer visible to any active transaction",
            "Rows containing numbers below zero",
            "Corrupted rows caused by hard drive physical damage",
            "Rows with NULL values in their primary key"
          ],
          c: 0,
          why: "When a row updates, the old version becomes a dead tuple once all older snapshots complete."
        },
        {
          q: "What role does the PostgreSQL 'autovacuum' background daemon perform?",
          a: [
            "It scans tables, marks dead tuple space as reusable for future inserts, and updates table statistics",
            "It deletes old user accounts after 30 days of inactivity",
            "It resets forgotten database passwords",
            "It reboots the server computer once a week"
          ],
          c: 0,
          why: "Autovacuum cleans up dead tuple bloat and updates statistical histograms automatically."
        },
        {
          q: "What hidden column in PostgreSQL records the transaction ID that created a row?",
          a: [
            "xmin",
            "xmax",
            "ctid",
            "created_by"
          ],
          c: 0,
          why: "xmin stores the creating transaction ID; xmax stores the deleting/updating transaction ID."
        }
      ]
    },
    {
      n: 5,
      id: "locking-pessimistic-versus-optimistic",
      title: "Locking: pessimistic versus optimistic",
      topic: "Locking & Concurrency Control",
      anim: "Lock",
      lede: "How do you prevent two users from booking the exact same seat? Compare pessimistic locking (SELECT FOR UPDATE) with optimistic locking (version columns).",
      winShort: "Implement pessimistic and optimistic locking strategies to eliminate lost updates",
      missionLink: "Prevents race conditions in ticketing, inventory, and balance systems",
      sec1: {
        title: "The lost update problem",
        content: `<p>Two users click 'Buy' on the last concert seat at the exact same second. Both transactions read <code>available = true</code>. Both proceed to charge the card. Both write <code>available = false</code>. The seat was sold twice! This is a <b>Lost Update anomaly</b>.</p><p>You can prevent this using <b>Pessimistic Locking</b> (<code>SELECT ... FOR UPDATE</code> locks the row immediately until transaction commit) or <b>Optimistic Locking</b> (checking a <code>version</code> column at write time: <code>UPDATE ... WHERE id = 1 AND version = 3</code>).</p>`,
        keyIdea: "Use pessimistic locking for high-contention writes; use optimistic locking for low-contention reads."
      },
      predict: {
        q: "What does 'SELECT * FROM seats WHERE id = 42 FOR UPDATE' do?",
        a: [
          "Locks row 42 with an exclusive write lock, forcing any other transaction trying to modify it to wait",
          "Updates row 42 immediately to NULL",
          "Deletes row 42 permanently",
          "Converts row 42 into an Excel file"
        ],
        c: 0,
        why: "FOR UPDATE acquires an exclusive row-level lock that blocks other writers until COMMIT."
      },
      sec2: {
        title: "Pessimistic versus Optimistic comparison",
        content: `<p>Evaluate the trade-offs between locking upfront versus checking versions on commit.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Pessimistic (FOR UPDATE)", lines: ["locks rows upfront at read time", "ideal for high contention (concert seats)", "trade-off: blocks concurrent workers"] },
          { title: "Optimistic (Version Column)", lines: ["zero locks; checks version on write", "ideal for low contention (editing documents)", "trade-off: requires retry loop if conflict occurs"] }
        ]
      },
      sec3: {
        title: "Tracing optimistic lock conflict detection",
        content: `<p>Trace how a version column detects concurrent edits and rejects the second writer cleanly.</p>`,
      },
      trace: {
        code: [
          "# User A and User B both load Doc #1 (version = 3)",
          "# User A saves first: UPDATE docs SET text='A', version=4 WHERE id=1 AND version=3; # Success (rows=1)",
          "# User B saves second: UPDATE docs SET text='B', version=4 WHERE id=1 AND version=3;",
          "# Result: rows affected = 0! (version is already 4, not 3!)",
          "# App notifies User B: 'Conflict: document was modified by another user. Reload?'"
        ],
        steps: [
          { line: 0, vars: { initial: "both users read version 3" } },
          { line: 1, vars: { user_a_commit: "User A updates row and advances version to 4" } },
          { line: 2, vars: { user_b_attempt: "WHERE version = 3 fails to match any row" } },
          { line: 4, vars: { outcome: "collision detected cleanly with zero data loss" } }
        ]
      },
      practiceIntro: "Test your memory of locking strategies.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Locking rows explicitly with SELECT ... FOR <0> is pessimistic locking.",
          "Verifying a version column at write time is <1> locking.",
          "The clause skipping already-locked rows without waiting is SKIP <2>."
        ],
        blanks: [
          { a: ["UPDATE"], why: "SELECT FOR UPDATE acquires exclusive row locks." },
          { a: ["optimistic"], why: "Optimistic locking checks version without acquiring locks." },
          { a: ["LOCKED"], why: "SKIP LOCKED allows job workers to grab unassigned tasks." }
        ]
      },
      win: "You can select and implement the right locking pattern to eliminate race conditions and double-spending bugs.",
      nextTasks: [
        "Implement a balance debit transaction using SELECT ... FOR UPDATE.",
        "Add a version INTEGER column to an existing table for optimistic locking.",
        "Use SKIP LOCKED to build a high-performance background worker task queue."
      ],
      primarySource: "Martin Fowler, *Patterns of Enterprise Application Architecture*, Chapter 16: 'Pessimistic Offline Lock' & 'Optimistic Offline Lock'.",
      quiz: [
        {
          q: "When is Optimistic Locking superior to Pessimistic Locking?",
          a: [
            "In read-heavy applications with low write collision rates (e.g. users editing wiki pages over minutes)",
            "When two people try to book the exact same concert seat at the same millisecond",
            "When the database has zero indexes",
            "When the database is running on a battery-powered laptop"
          ],
          c: 0,
          why: "Optimistic locking avoids holding database locks open while humans think or edit forms."
        },
        {
          q: "What does the 'SKIP LOCKED' clause do in PostgreSQL (e.g. SELECT ... FOR UPDATE SKIP LOCKED)?",
          a: [
            "Skips any rows currently locked by other concurrent transactions, immediately returning available rows",
            "Turns off all database security locks permanently",
            "Deletes locked rows from the table",
            "Causes queries to fail with an error"
          ],
          c: 0,
          why: "SKIP LOCKED allows concurrent queue workers to claim distinct jobs without blocking each other."
        },
        {
          q: "How does an application know that an Optimistic Lock conflict occurred?",
          a: [
            "The UPDATE statement reports that 0 rows were affected/updated (rows_affected == 0)",
            "The database server crashes with an error",
            "The computer screen turns red",
            "The user receives an email alert"
          ],
          c: 0,
          why: "If WHERE version = N matches zero rows, another transaction has already bumped the version."
        },
        {
          q: "When are locks acquired by 'SELECT FOR UPDATE' physically released?",
          a: [
            "When the enclosing transaction ends with either a COMMIT or a ROLLBACK",
            "Immediately after the SELECT query finishes executing",
            "After exactly five seconds",
            "Only when the database administrator runs UNLOCK"
          ],
          c: 0,
          why: "Row-level locks are held for the entire transaction lifetime and released at commit/rollback."
        }
      ]
    },
    {
      n: 6,
      id: "deadlocks-detection-and-prevention",
      title: "Deadlocks: detection and prevention",
      topic: "Locking & Concurrency Control",
      anim: "Lock",
      lede: "Transaction A waits for Transaction B; Transaction B waits for Transaction A. Learn how circular lock dependencies cause deadlocks, and the golden rule to prevent them.",
      winShort: "Diagnose and prevent database deadlocks using ordered resource acquisition",
      missionLink: "Eliminates frustrating deadlock exceptions in concurrent multi-row transactions",
      sec1: {
        title: "The deadly embrace",
        content: `<p>A <b>Deadlock</b> occurs when two transactions each hold a lock the other transaction needs, and neither can proceed. Transaction 1 locks Account A and waits for Account B. Transaction 2 locks Account B and waits for Account A. Both transactions are frozen in a circular lock wait.</p><p>The database engine detects this cycle using a background <b>Deadlock Detector</b>. After a timeout (e.g. 1 second), the engine breaks the deadlock by forcibly aborting one transaction with: <code>ERROR: deadlock detected</code>.</p>`,
        keyIdea: "A deadlock is a circular lock dependency; databases break them by aborting one transaction."
      },
      predict: {
        q: "What is the single most effective engineering rule for completely preventing deadlocks across your codebase?",
        a: [
          "Always acquire locks in the exact same deterministic order everywhere (e.g. sort resource IDs from lowest to highest)",
          "Never use transactions in your code",
          "Set the database timeout to zero milliseconds",
          "Reboot the database server every hour"
        ],
        c: 0,
        why: "If all transactions acquire locks in strictly sorted order (Lock A before B), a circular cycle is mathematically impossible."
      },
      sec2: {
        title: "The circular deadlock cycle",
        content: `<p>Visualise the circular dependency cycle between two concurrent transactions.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Tx 1: Transfer A -> B", lines: ["1. Locks Account A", "2. Requests lock on Account B (waits...)"] },
          { title: "Deadlock Cycle", lines: ["Tx 1 waits for Tx 2", "Tx 2 waits for Tx 1", "DEADLOCK DETECTED!"] },
          { title: "Tx 2: Transfer B -> A", lines: ["1. Locks Account B", "2. Requests lock on Account A (waits...)"] }
        ]
      },
      sec3: {
        title: "Tracing deterministic lock ordering",
        content: `<p>Trace how sorting resource IDs before locking eliminates deadlocks completely.</p>`,
      },
      trace: {
        code: [
          "# Goal: Transfer between Account 5 and Account 2",
          "# Golden Rule: Always lock the smaller ID first!",
          "accounts_to_lock = sorted([5, 2]) # [2, 5]",
          "SELECT * FROM accounts WHERE id = 2 FOR UPDATE; # locks 2 first",
          "SELECT * FROM accounts WHERE id = 5 FOR UPDATE; # locks 5 second",
          "# Because all transactions lock in order (2 then 5), circular deadlocks CANNOT occur!"
        ],
        steps: [
          { line: 2, vars: { sorted_ids: "[2, 5]" } },
          { line: 3, vars: { lock_step_1: "locks account 2 first" } },
          { line: 4, vars: { lock_step_2: "locks account 5 second" } },
          { line: 5, vars: { mathematical_proof: "circular dependency eliminated by monotonic ordering" } }
        ]
      },
      practiceIntro: "Test your memory of deadlock prevention.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A circular lock dependency between transactions is a <0>.",
          "Deadlocks are prevented by acquiring locks in a consistent, <1> order.",
          "When a deadlock is detected, the database <2> one of the transactions."
        ],
        blanks: [
          { a: ["deadlock"], why: "Deadlocks freeze two transactions mutually." },
          { a: ["sorted", "deterministic"], why: "Ordered acquisition prevents circular cycles." },
          { a: ["aborts", "terminates", "cancels"], why: "The engine aborts one transaction with an error." }
        ]
      },
      win: "You can write concurrent multi-row transaction logic that is mathematically immune to database deadlocks.",
      nextTasks: [
        "Sort IDs in your application code before acquiring SELECT FOR UPDATE locks.",
        "Inspect the deadlock_timeout setting in PostgreSQL (default 1000ms).",
        "Implement an automated retry loop around transactions that catch serialization or deadlock errors."
      ],
      primarySource: "PostgreSQL Documentation: *Explicit Locking — Deadlocks* (postgresql.org/docs/current/explicit-locking.html#LOCKING-DEADLOCKS).",
      quiz: [
        {
          q: "How does a relational database engine handle a deadlock when it occurs?",
          a: [
            "It detects the circular wait cycle and aborts one transaction with an error, allowing the other to proceed",
            "It turns off the database server",
            "It deletes both tables involved in the deadlock",
            "It waits forever until a human administrator intervenes"
          ],
          c: 0,
          why: "The deadlock detector timer triggers, identifies the cycle, and rolls back the victim transaction."
        },
        {
          q: "Why does sorting IDs (e.g. Lock ID 1 then ID 2) prevent deadlocks during balance transfers?",
          a: [
            "Both transactions attempt to acquire Lock 1 first; the second waits for Lock 1 rather than holding Lock 2, preventing a cycle",
            "Sorting numbers makes queries run ten times faster",
            "The database only allows primary keys in numerical order",
            "It converts the transactions into read-only queries"
          ],
          c: 0,
          why: "Consistent ordering breaks the circular wait condition (one of Coffman's four deadlock conditions)."
        },
        {
          q: "What should an application do when it catches a deadlock error from the database?",
          a: [
            "Retry the entire transaction from the beginning with exponential backoff",
            "Show a fatal crash screen to the user and log them out",
            "Ignore the error and pretend the transaction succeeded",
            "Reboot the application server container"
          ],
          c: 0,
          why: "Deadlocks are transient concurrency collisions; retrying the transaction will almost always succeed."
        },
        {
          q: "What PostgreSQL setting controls how long the engine waits before searching for deadlocks?",
          a: [
            "deadlock_timeout (default: 1s)",
            "lock_timeout",
            "statement_timeout",
            "max_connections"
          ],
          c: 0,
          why: "deadlock_timeout caps how long a transaction can wait on a lock before checking for cycles."
        }
      ]
    },
    {
      n: 7,
      id: "distributed-transactions-and-two-phase-commit",
      title: "Distributed transactions and two-phase commit",
      topic: "Durability & Recovery",
      anim: "Lock",
      lede: "What happens when a transaction spans three different microservices with three different databases? Discover Two-Phase Commit (2PC) and why distributed transactions are hard.",
      winShort: "Explain the two phases of Two-Phase Commit (2PC) and its operational vulnerabilities",
      missionLink: "Bridges single-node database ACID guarantees and distributed microservices",
      sec1: {
        title: "When one database isn't enough",
        content: `<p>Single-node databases give you ACID guarantees for free. But in modern distributed architectures, an order might involve deducting inventory in the <b>Inventory Service</b>, charging a card in the <b>Payment Service</b>, and creating an order in the <b>Order Service</b>.</p><p>How do you ensure all three databases commit or abort atomically? The classical distributed protocol is <b>Two-Phase Commit (2PC)</b>: a coordinator manages a <b>Prepare Phase</b> (asking all nodes <i>'Can you commit?'</i>) followed by a <b>Commit Phase</b> (commanding <i>'Commit now!'</i>).</p>`,
        keyIdea: "Two-Phase Commit coordinates atomic all-or-nothing commits across multiple independent databases."
      },
      predict: {
        q: "What is the primary vulnerability of the classical Two-Phase Commit (2PC) protocol?",
        a: [
          "It is a blocking protocol: if the coordinator crashes during phase 2, participant databases are locked in limbo forever",
          "It can only be used on computers running Microsoft Windows",
          "It deletes all network connection logs",
          "It allows users to steal passwords"
        ],
        c: 0,
        why: "2PC is blocking: nodes hold locks during the prepare phase until the coordinator returns."
      },
      sec2: {
        title: "The two phases of 2PC",
        content: `<p>Observe the voting and commit phases between the coordinator and participants.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Phase 1: Prepare (Vote)", lines: ["Coordinator asks: 'Can you commit?'", "Nodes lock resources and vote YES or NO"] },
          { title: "Phase 2: Commit (Decision)", lines: ["If ALL voted YES: Coordinator sends 'COMMIT!'", "If ANY voted NO: Coordinator sends 'ABORT!'"] },
          { title: "The Limbo Risk", lines: ["If coordinator dies after Prepare:", "participants remain locked waiting for verdict!"] }
        ]
      },
      sec3: {
        title: "Tracing a 2PC abort sequence",
        content: `<p>Trace how a single 'NO' vote from an inventory service aborts the entire distributed transaction.</p>`,
      },
      trace: {
        code: [
          "Coordinator -> Payment Service: 'Prepare?' -> Payment votes YES (funds locked)",
          "Coordinator -> Inventory Service: 'Prepare?' -> Inventory votes NO (out of stock!)",
          "# Consensus failed! Coordinator broadcasts ABORT:",
          "Coordinator -> Payment Service: 'ABORT!' (funds unlocked)",
          "# Result: Zero money lost; clean rollback across microservices"
        ],
        steps: [
          { line: 0, vars: { node_1: "Payment votes YES" } },
          { line: 1, vars: { node_2: "Inventory votes NO (insufficient stock)" } },
          { line: 3, vars: { decision: "unanimous consensus failed; ABORT broadcast" } },
          { line: 4, vars: { recovery: "all participants abort local transactions cleanly" } }
        ]
      },
      practiceIntro: "Test your memory of 2PC mechanics.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The two phases of 2PC are the Prepare phase and the <0> phase.",
          "The node managing the distributed transaction is the <1>.",
          "The state where a participant is locked waiting for a coordinator verdict is <2>."
        ],
        blanks: [
          { a: ["Commit"], why: "Phase 1 is Prepare; Phase 2 is Commit." },
          { a: ["coordinator"], why: "The coordinator orchestrates voting." },
          { a: ["limbo"], why: "In-doubt/limbo states occur when coordinators crash." }
        ]
      },
      win: "You can explain the mechanics of Two-Phase Commit and understand why modern distributed systems avoid it due to blocking locks.",
      nextTasks: [
        "Sketch the message exchange diagram of a successful Two-Phase Commit.",
        "Explain what happens if one database node votes NO during Phase 1.",
        "Contrast distributed ACID with the CAP theorem and eventual consistency."
      ],
      primarySource: "Martin Kleppmann, *Designing Data-Intensive Applications*, Chapter 9: 'Consistency and Consensus' (Two-Phase Commit).",
      quiz: [
        {
          q: "What happens in Phase 1 (Prepare Phase) of a Two-Phase Commit?",
          a: [
            "The coordinator asks all participating databases if they are able to commit; each node acquires local locks and votes YES or NO",
            "All participant databases immediately write data to permanent storage",
            "The coordinator reboots all database servers",
            "The client user is prompted for their password"
          ],
          c: 0,
          why: "Phase 1 is a voting phase: participants verify constraints and lock resources before voting."
        },
        {
          q: "Why do modern high-throughput microservice architectures avoid Two-Phase Commit?",
          a: [
            "Holding distributed locks across network calls introduces massive latency, high failure rates, and low availability",
            "Two-Phase Commit is illegal under cloud provider regulations",
            "Modern databases no longer support transactions",
            "2PC can only transmit 10 bytes of data per second"
          ],
          c: 0,
          why: "Distributed locks couple system availability; if one network link hangs, all systems stall."
        },
        {
          q: "What does it mean for a participant database to be 'in doubt' or 'in limbo'?",
          a: [
            "It voted YES in Phase 1, but the coordinator crashed before sending the Phase 2 COMMIT/ABORT decision",
            "The database does not know which language to use",
            "The database hard drive is full",
            "The database is disconnected from power"
          ],
          c: 0,
          why: "A node that voted YES cannot unilaterally commit or abort; it must wait for the coordinator."
        },
        {
          q: "If any single participant node votes NO in Phase 1, what must the coordinator do?",
          a: [
            "Broadcast an ABORT command to all participants, rolling back the transaction across the entire system",
            "Force the remaining nodes to commit anyway",
            "Delete the node that voted NO",
            "Retry Phase 1 fifty times"
          ],
          c: 0,
          why: "2PC requires unanimous consensus; a single NO vote mandates a global rollback."
        }
      ]
    },
    {
      n: 8,
      id: "eventual-consistency-and-the-saga-pattern",
      title: "Eventual consistency and the Saga pattern",
      topic: "Durability & Recovery",
      anim: "Lock",
      lede: "How do giants like Uber, Netflix, and Amazon handle distributed transactions without 2PC? Master eventual consistency, Sagas, and compensating transactions.",
      winShort: "Architect distributed workflows using the Saga pattern and compensating transactions",
      missionLink: "The industry standard pattern for distributed business workflows across microservices",
      sec1: {
        title: "Trading ACID for BASE",
        content: `<p>Because distributed locks (2PC) kill throughput, large distributed systems embrace <b>Eventual Consistency (BASE: Basically Available, Soft state, Eventual consistency)</b>. Instead of locking all databases simultaneously, services commit their changes locally and immediately.</p><p>Distributed transactions are coordinated using the <b>Saga Pattern</b>: a sequence of independent local transactions. If step 3 fails (e.g. payment rejected), the saga executes <b>Compensating Transactions</b> backwards (releasing inventory, canceling shipping) to restore consistency.</p>`,
        keyIdea: "A Saga coordinates distributed workflows using local transactions and compensating rollbacks."
      },
      predict: {
        q: "In the Saga pattern, how do you 'rollback' an order that already committed in a local database?",
        a: [
          "Execute a compensating transaction that semantically reverses the change (e.g. issuing a refund for a charge)",
          "Roll back the physical disk drive to yesterday's snapshot",
          "Shut down the database server",
          "There is no way to undo a committed local transaction"
        ],
        c: 0,
        why: "Compensating transactions apply forward semantic corrections (e.g. refunding or restocking)."
      },
      sec2: {
        title: "The Saga execution flow",
        content: `<p>Observe how a failed flight booking executes compensating steps across microservices.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Step 1: Hotel", lines: ["Book Hotel (Committed!)", "Compensate: Cancel Hotel"] },
          { title: "Step 2: Flight", lines: ["Book Flight -> FAILS!", "out of seats!"] },
          { title: "Compensate Backwards", lines: ["Saga triggers: Cancel Hotel", "system returns to consistent state!"] }
        ]
      },
      sec3: {
        title: "Tracing orchestration versus choreography",
        content: `<p>Trace how an orchestrator workflow engine dispatches steps and handles compensations.</p>`,
      },
      trace: {
        code: [
          "Orchestrator -> OrderService: createOrder() [OK]",
          "Orchestrator -> PaymentService: chargeCard() [OK]",
          "Orchestrator -> DeliveryService: dispatchDriver() [FAILED: No drivers]",
          "# Failure! Orchestrator triggers compensating steps backwards:",
          "Orchestrator -> PaymentService: refundCard() [OK]",
          "Orchestrator -> OrderService: cancelOrder() [OK]"
        ],
        steps: [
          { line: 0, vars: { step_1: "Order created locally" } },
          { line: 1, vars: { step_2: "Payment charged locally" } },
          { line: 2, vars: { failure: "Delivery dispatch failed" } },
          { line: 4, vars: { compensation_1: "Payment refunded via compensating transaction" } },
          { line: 5, vars: { compensation_2: "Order marked cancelled; consistency restored" } }
        ]
      },
      practiceIntro: "Test your memory of the Saga pattern.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A sequence of local transactions managing distributed workflows is the <0> pattern.",
          "An operation that semantically reverses a previously committed step is a <1> transaction.",
          "A central service directing a Saga's steps is a Saga <2>."
        ],
        blanks: [
          { a: ["Saga"], why: "The Saga pattern coordinates distributed operations." },
          { a: ["compensating"], why: "Compensating transactions undo committed actions." },
          { a: ["orchestrator"], why: "Saga orchestrators manage workflow state machines." }
        ]
      },
      win: "You can design resilient distributed workflows across microservices using Sagas, message brokers, and compensating transactions.",
      nextTasks: [
        "Design a 3-step Saga for an e-commerce checkout flow with compensating actions.",
        "Compare choreography (event-driven) versus orchestration (central state machine) Sagas.",
        "Implement an idempotency key check to ensure compensating transactions can be safely retried."
      ],
      primarySource: "Hector Garcia-Molina & Kenneth Salem, *Sagas* (ACM SIGMOD Record, 1987) & Chris Richardson, *Microservices Patterns*.",
      quiz: [
        {
          q: "What is a 'compensating transaction' in the Saga pattern?",
          a: [
            "An explicit forward transaction that semantically reverses the business effect of an earlier committed transaction (e.g. issuing a refund)",
            "A bonus paid to software engineers for writing good code",
            "A query that runs twice as fast",
            "A transaction that compresses database files"
          ],
          c: 0,
          why: "Because local transactions already committed, reversal requires a compensating business action."
        },
        {
          q: "What is the difference between Saga Choreography and Saga Orchestration?",
          a: [
            "Choreography uses event publishing between services without central coordination; Orchestration uses a central orchestrator state machine",
            "Choreography is for audio; Orchestration is for video",
            "Choreography only works on AWS; Orchestration only works on Azure",
            "There is no difference between them"
          ],
          c: 0,
          why: "Choreography is decentralized event-driven; orchestration uses a central coordinator."
        },
        {
          q: "What does 'Eventual Consistency' mean in distributed systems?",
          a: [
            "If no new updates are made, all replicas and services will eventually converge to have identical, consistent data",
            "Data will be permanently inconsistent forever",
            "The database will eventually crash",
            "Queries only work on event days"
          ],
          c: 0,
          why: "Eventual consistency guarantees that all nodes converge to identical state over time."
        },
        {
          q: "Why must compensating transactions in a Saga be idempotent?",
          a: [
            "Network failures can cause the orchestrator to retry the compensation; executing it twice must produce the same result (e.g. refund only once)",
            "Because non-idempotent code runs too slowly",
            "Because SQL databases forbid retrying queries",
            "To encrypt the compensation message"
          ],
          c: 0,
          why: "Retrying compensation over unreliable networks must not duplicate side effects (like double refunds)."
        }
      ]
    }
  ]
};

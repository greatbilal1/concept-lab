# Mission — Transactions & Data Integrity

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

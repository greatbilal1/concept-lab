# Mission — PostgreSQL

## Why this course exists

PostgreSQL is widely hailed as the world's most advanced open-source relational database. Beyond standard SQL, PostgreSQL is an extensible data platform: it offers native binary JSON (JSONB), array types, custom full-text search, powerful extensions like PostGIS and pgvector, connection pooling, and fine-grained role-based security. This course teaches how to harness PostgreSQL's advanced capabilities in production systems.

## What the learner can do at the end

- Store, query, and index semi-structured documents using native JSONB columns and operators.
- Leverage specialized native types including arrays, ranges, UUIDs, and network types.
- Install and configure PostgreSQL extensions (pg_trgm, pgcrypto, vector).
- Manage database security through roles, permissions, and Row-Level Security (RLS).
- Execute disaster recovery backups and point-in-time recovery (PITR) using pg_dump and WAL archiving.

## What this course is NOT

- Not a generic introductory SQL syntax course.
- Not a Linux kernel tuning manual. It focuses on practical PostgreSQL features and operations.

## Success looks like

When designing a production service requiring both structured relational integrity and flexible JSON attributes, the learner designs a PostgreSQL schema utilizing JSONB, GIN indexes, and Row-Level Security policies in under fifteen minutes.

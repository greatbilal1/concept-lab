# Mission — ORMs & Database Abstraction

## Why this course exists

Object-Relational Mapping (ORM) libraries like SQLAlchemy, Prisma, Hibernate, and ActiveRecord promise to free developers from writing raw SQL by mapping database rows directly into object-oriented classes. But this convenience comes at a price: the Object-Relational Impedance Mismatch. Developers unaware of what their ORM is doing under the hood trigger catastrophic N+1 query storms, memory bloat, and accidental full-table locks. This course teaches how ORMs work under the hood, how to optimize queries, and when to drop down to raw SQL.

## What the learner can do at the end

- Map domain classes and relationships to relational tables using Data Mapper and Active Record patterns.
- Diagnose and eliminate the notorious N+1 query problem using eager loading (JOINs and prefetching).
- Manage database schema lifecycles using automated migration tools (Alembic, Prisma Migrate).
- Control session identity maps, change tracking (Unit of Work), and transaction boundaries.
- Know when an ORM helps and when dropping to raw parameterized SQL or query builders is the right engineering decision.

## What this course is NOT

- Not a single-framework tutorial (SQLAlchemy-only or Prisma-only).
- Not an anti-ORM screed. It treats ORMs as powerful tools with explicit performance trade-offs.

## Success looks like

When an application endpoint slows down due to ORM queries, the learner inspects the emitted SQL in logs, spots the N+1 query pattern, and fixes it with eager loading in under five minutes.

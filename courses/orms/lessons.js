/* ============================================================
   ORMs & Database Abstraction — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "the-object-relational-impedance-mismatch", file: "lessons/0001-the-object-relational-impedance-mismatch.html", title: "The Object-Relational Impedance Mismatch", topic: "The Impedance Mismatch & Patterns", anim: "Tools" },
  { n: 2, id: "active-record-versus-data-mapper", file: "lessons/0002-active-record-versus-data-mapper.html", title: "Active Record versus Data Mapper", topic: "The Impedance Mismatch & Patterns", anim: "Tools" },
  { n: 3, id: "the-n-plus-1-query-problem-and-eager-loading", file: "lessons/0003-the-n-plus-1-query-problem-and-eager-loading.html", title: "The N+1 query problem and eager loading", topic: "The N+1 Problem & Loading", anim: "Tools" },
  { n: 4, id: "query-logging-and-inspecting-emitted-sql", file: "lessons/0004-query-logging-and-inspecting-emitted-sql.html", title: "Query logging and inspecting emitted SQL", topic: "The N+1 Problem & Loading", anim: "Tools" },
  { n: 5, id: "unit-of-work-and-the-identity-map", file: "lessons/0005-unit-of-work-and-the-identity-map.html", title: "Unit of Work and the Identity Map", topic: "Unit of Work & Identity Map", anim: "Tools" },
  { n: 6, id: "cascade-rules-and-orphan-removal", file: "lessons/0006-cascade-rules-and-orphan-removal.html", title: "Cascade rules and orphan removal", topic: "Unit of Work & Identity Map", anim: "Tools" },
  { n: 7, id: "automated-migrations-with-alembic-and-prisma", file: "lessons/0007-automated-migrations-with-alembic-and-prisma.html", title: "Automated migrations with Alembic and Prisma", topic: "Migrations & Trade-offs", anim: "Tools" },
  { n: 8, id: "when-to-use-an-orm-and-when-to-use-raw-sql", file: "lessons/0008-when-to-use-an-orm-and-when-to-use-raw-sql.html", title: "When to use an ORM and when to use raw SQL", topic: "Migrations & Trade-offs", anim: "Tools" }
];

/* ============================================================
   ORMs & Database Abstraction — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "orm-foundations", title: "The Impedance Mismatch & Patterns",
    terms: [
      { term: "ORM", def: "Object-Relational Mapping: software library converting data between relational tables and object-oriented models.", lesson: 1, tags: ["orm"] },
      { term: "Impedance mismatch", def: "The fundamental conceptual mismatch between object-oriented models (graphs, inheritance) and relational sets.", lesson: 1, tags: ["theory"] },
      { term: "Active Record", def: "An architectural pattern where an entity class encapsulates both database access and domain business logic.", lesson: 2, tags: ["patterns"] },
      { term: "Data Mapper", def: "An architectural pattern isolating pure domain models from database persistence mechanics via a separate mapper.", lesson: 2, tags: ["patterns"] }
    ]
  },
  {
    id: "query-performance", title: "The N+1 Problem & Loading",
    terms: [
      { term: "N+1 query problem", def: "A severe performance antipattern where fetching a collection of N items triggers N additional queries for child data.", lesson: 3, tags: ["performance"] },
      { term: "Lazy loading", def: "An ORM pattern deferring the database loading of related child entities until the property is first accessed.", lesson: 3, tags: ["orm"] },
      { term: "Eager loading", def: "A pattern fetching parent and child entities together upfront using a JOIN or prefetch to avoid N+1 queries.", lesson: 3, tags: ["performance"] },
      { term: "Query logging", def: "A configuration mode in ORMs printing the exact underlying SQL statements emitted to the database.", lesson: 4, tags: ["debugging"] }
    ]
  },
  {
    id: "unit-of-work", title: "Unit of Work & Identity Map",
    terms: [
      { term: "Unit of Work", def: "A pattern maintaining a list of objects affected by a business transaction and coordinating write flushes atomically.", lesson: 5, tags: ["patterns"] },
      { term: "Identity Map", def: "An in-memory registry ensuring each database record is loaded into exactly one object instance per session.", lesson: 5, tags: ["patterns"] },
      { term: "Dirty checking", def: "The automatic detection of modified object attributes by comparing current state against original loaded state.", lesson: 5, tags: ["orm"] },
      { term: "Session flush", def: "The moment an ORM translates in-memory object mutations into pending SQL INSERT, UPDATE, and DELETE statements.", lesson: 5, tags: ["orm"] }
    ]
  },
  {
    id: "migrations-tradeoffs", title: "Migrations & Trade-offs",
    terms: [
      { term: "Automated migration", def: "Tool-assisted generation of schema migration files by comparing ORM model code against database schemas.", lesson: 7, tags: ["migrations"] },
      { term: "Query builder", def: "A programmatic, chainable interface (like Knex or Kysely) constructing SQL queries without full ORM overhead.", lesson: 8, tags: ["tooling"] },
      { term: "Object inflation", def: "The CPU and memory overhead of instantiating hundreds of heavy class instances from raw database rows.", lesson: 8, tags: ["performance"] },
      { term: "Bulk update", def: "An SQL operation updating thousands of rows in a single query without inflating each row into an in-memory object.", lesson: 8, tags: ["sql"] }
    ]
  }
];

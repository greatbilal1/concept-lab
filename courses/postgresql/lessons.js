/* ============================================================
   PostgreSQL — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "rich-native-types-arrays-ranges-and-uuids", file: "lessons/0001-rich-native-types-arrays-ranges-and-uuids.html", title: "Rich native types: arrays, ranges, and UUIDs", topic: "Advanced Types & JSONB", anim: "Code" },
  { n: 2, id: "jsonb-semi-structured-data-in-sql", file: "lessons/0002-jsonb-semi-structured-data-in-sql.html", title: "JSONB: semi-structured data in SQL", topic: "Advanced Types & JSONB", anim: "Code" },
  { n: 3, id: "full-text-search-tsvector-and-tsquery", file: "lessons/0003-full-text-search-tsvector-and-tsquery.html", title: "Full-text search: tsvector and tsquery", topic: "Extensions & Search", anim: "Code" },
  { n: 4, id: "postgresql-extensions-and-ecosystem", file: "lessons/0004-postgresql-extensions-and-ecosystem.html", title: "PostgreSQL extensions and ecosystem", topic: "Extensions & Search", anim: "Code" },
  { n: 5, id: "roles-permissions-and-security", file: "lessons/0005-roles-permissions-and-security.html", title: "Roles, permissions, and security", topic: "Security & Permissions", anim: "Code" },
  { n: 6, id: "roles-permissions-and-row-level-security", file: "lessons/0006-roles-permissions-and-row-level-security.html", title: "Row-Level Security (RLS)", topic: "Security & Permissions", anim: "Code" },
  { n: 7, id: "connection-pooling-and-pgbouncer", file: "lessons/0007-connection-pooling-and-pgbouncer.html", title: "Connection pooling and PgBouncer", topic: "Operations & Backups", anim: "Code" },
  { n: 8, id: "backups-disaster-recovery-and-vacuum", file: "lessons/0008-backups-disaster-recovery-and-vacuum.html", title: "Backups, disaster recovery, and vacuum", topic: "Operations & Backups", anim: "Code" }
];

/* ============================================================
   PostgreSQL — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "types-jsonb", title: "Advanced Types & JSONB",
    terms: [
      { term: "JSONB", def: "PostgreSQL's binary parsed JSON format: slightly slower to write than plain JSON, but vastly faster to query and index.", lesson: 2, tags: ["jsonb"] },
      { term: "Array type", def: "A native PostgreSQL column type (e.g. integer[] or text[]) storing ordered collections of scalar values.", lesson: 1, tags: ["types"] },
      { term: "Range type", def: "A native type representing a continuous range of values (e.g. daterange or int4range) supporting overlap checks.", lesson: 1, tags: ["types"] },
      { term: "Existence operator (?)", def: "A JSONB operator testing whether a specified top-level key exists inside a document.", lesson: 2, tags: ["operators"] }
    ]
  },
  {
    id: "extensions-search", title: "Extensions & Search",
    terms: [
      { term: "Extension", def: "A packaged bundle of functions, data types, and operators adding specialized capabilities to PostgreSQL.", lesson: 4, tags: ["extensions"] },
      { term: "pg_trgm", def: "A popular extension providing trigram matching for fast fuzzy string searches and regex indexes.", lesson: 4, tags: ["search"] },
      { term: "tsvector", def: "A native full-text search data type storing normalized, sorted, pre-stemmed lexemes with word positions.", lesson: 3, tags: ["search"] },
      { term: "tsquery", def: "A full-text search query type containing Boolean search terms (e.g. 'cat & dog') evaluated against tsvectors.", lesson: 3, tags: ["search"] }
    ]
  },
  {
    id: "security-rls", title: "Security & Permissions",
    terms: [
      { term: "Role", def: "A PostgreSQL database user or group possessing specific login rights and resource permissions.", lesson: 5, tags: ["security"] },
      { term: "Row-Level Security", def: "A database security feature (RLS) restricting which table rows a user query can read or modify via security policies.", lesson: 6, tags: ["security"] },
      { term: "GRANT", def: "An SQL command conferring specific privileges (SELECT, INSERT, UPDATE) on database objects to roles.", lesson: 5, tags: ["permissions"] },
      { term: "REVOKE", def: "An SQL command withdrawing previously granted privileges from a database role.", lesson: 5, tags: ["permissions"] }
    ]
  },
  {
    id: "operations-backups", title: "Operations & Backups",
    terms: [
      { term: "pg_dump", def: "The standard PostgreSQL command-line utility for exporting database schemas and data into backup files.", lesson: 8, tags: ["backups"] },
      { term: "PITR", def: "Point-in-Time Recovery: restoring a database to any specific historical millisecond using base backups and WAL logs.", lesson: 8, tags: ["recovery"] },
      { term: "Connection pooler", def: "An intermediary service (like PgBouncer) multiplexing thousands of client connections onto a small set of backend processes.", lesson: 7, tags: ["scaling"] },
      { term: "Autovacuum", def: "A background daemon in PostgreSQL that automatically removes dead row versions and updates statistical tables.", lesson: 8, tags: ["maintenance"] }
    ]
  }
];

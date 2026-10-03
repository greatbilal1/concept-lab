/* ============================================================
   Database Design & Relationships — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "from-business-domain-to-entities", file: "lessons/0001-from-business-domain-to-entities.html", title: "From business domain to entities", topic: "Domain Modeling & Cardinality", anim: "Layers" },
  { n: 2, id: "one-to-one-and-one-to-many-relationships", file: "lessons/0002-one-to-one-and-one-to-many-relationships.html", title: "One-to-one and one-to-many relationships", topic: "Domain Modeling & Cardinality", anim: "Layers" },
  { n: 3, id: "many-to-many-relationships-and-junction-tables", file: "lessons/0003-many-to-many-relationships-and-junction-tables.html", title: "Many-to-many relationships and junction tables", topic: "Many-to-Many & Keys", anim: "Layers" },
  { n: 4, id: "surrogate-keys-versus-natural-keys", file: "lessons/0004-surrogate-keys-versus-natural-keys.html", title: "Surrogate keys versus natural keys", topic: "Many-to-Many & Keys", anim: "Layers" },
  { n: 5, id: "third-normal-form-3nf-and-transitive-dependencies", file: "lessons/0005-third-normal-form-3nf-and-transitive-dependencies.html", title: "Third normal form (3NF) and transitive dependencies", topic: "Normalization Forms & Anomalies", anim: "Layers" },
  { n: 6, id: "data-anomalies-insertion-update-deletion", file: "lessons/0006-data-anomalies-insertion-update-deletion.html", title: "Data anomalies: insertion, update, deletion", topic: "Normalization Forms & Anomalies", anim: "Layers" },
  { n: 7, id: "schema-migrations-and-versioning", file: "lessons/0007-schema-migrations-and-versioning.html", title: "Schema migrations and versioning", topic: "Anomalies & Denormalization", anim: "Layers" },
  { n: 8, id: "intentional-denormalization-and-trade-offs", file: "lessons/0008-intentional-denormalization-and-trade-offs.html", title: "Intentional denormalization and trade-offs", topic: "Anomalies & Denormalization", anim: "Layers" }
];

/* ============================================================
   Database Design & Relationships — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "modeling-cardinality", title: "Domain Modeling & Cardinality",
    terms: [
      { term: "Cardinality", def: "The numerical relationship between occurrences in two entities (1:1, 1:N, or N:M).", lesson: 1, tags: ["modeling"] },
      { term: "Entity", def: "A distinct real-world thing, concept, or event represented as a relational table.", lesson: 1, tags: ["modeling"] },
      { term: "One-to-many", def: "A relationship where one parent record can be associated with multiple child records.", lesson: 2, tags: ["relationships"] },
      { term: "One-to-one", def: "A relationship where each record in table A corresponds to at most one record in table B.", lesson: 2, tags: ["relationships"] }
    ]
  },
  {
    id: "junction-tables", title: "Many-to-Many & Keys",
    terms: [
      { term: "Many-to-many", def: "A relationship where multiple records in table A associate with multiple records in table B.", lesson: 3, tags: ["relationships"] },
      { term: "Junction table", def: "An intermediary table containing foreign keys linking two tables in a many-to-many relationship.", lesson: 3, tags: ["tables"] },
      { term: "Composite key", def: "A primary key formed by combining two or more columns to guarantee unique identity.", lesson: 3, tags: ["keys"] },
      { term: "Surrogate key", def: "An artificial, system-generated primary key (like an auto-incrementing ID or UUID).", lesson: 4, tags: ["keys"] }
    ]
  },
  {
    id: "normalization", title: "Normalization Forms & Anomalies",
    terms: [
      { term: "Normalization", def: "The systematic process of organizing database schema to eliminate data redundancy and anomalies.", lesson: 5, tags: ["normalization"] },
      { term: "First Normal Form", def: "1NF: every column contains atomic values, with no repeating groups or arrays.", lesson: 5, tags: ["normalization"] },
      { term: "Second Normal Form", def: "2NF: in 1NF and all non-key columns depend on the entire primary key, not a part of it.", lesson: 5, tags: ["normalization"] },
      { term: "Third Normal Form", def: "3NF: in 2NF and no non-key column depends on another non-key column (no transitive dependencies).", lesson: 5, tags: ["normalization"] }
    ]
  },
  {
    id: "anomalies-denorm", title: "Anomalies & Denormalization",
    terms: [
      { term: "Update anomaly", def: "Data inconsistency occurring when duplicate copies of data are not updated simultaneously.", lesson: 6, tags: ["anomalies"] },
      { term: "Deletion anomaly", def: "Accidental loss of valid data when deleting a record that also held unrelated information.", lesson: 6, tags: ["anomalies"] },
      { term: "Denormalization", def: "The deliberate reintroduction of redundancy into a schema to optimize read query performance.", lesson: 8, tags: ["performance"] },
      { term: "Natural key", def: "A unique attribute that exists in the real world (such as an email or ISBN) used as an identifier.", lesson: 4, tags: ["keys"] }
    ]
  }
];

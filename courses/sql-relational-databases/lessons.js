/* ============================================================
   SQL & Relational Databases — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "the-relational-model-and-tables", file: "lessons/0001-the-relational-model-and-tables.html", title: "The relational model and tables", topic: "The Relational Model & Tables", anim: "Code" },
  { n: 2, id: "tables-data-types-and-constraints", file: "lessons/0002-tables-data-types-and-constraints.html", title: "Tables, data types, and constraints", topic: "The Relational Model & Tables", anim: "Code" },
  { n: 3, id: "querying-data-with-select-and-where", file: "lessons/0003-querying-data-with-select-and-where.html", title: "Querying data with SELECT and WHERE", topic: "Declarative Querying & Filtering", anim: "Code" },
  { n: 4, id: "the-mystery-of-null-and-three-valued-logic", file: "lessons/0004-the-mystery-of-null-and-three-valued-logic.html", title: "The mystery of NULL and three-valued logic", topic: "Declarative Querying & Filtering", anim: "Code" },
  { n: 5, id: "inserting-updating-and-deleting-records", file: "lessons/0005-inserting-updating-and-deleting-records.html", title: "Inserting, updating, and deleting records", topic: "Data Manipulation & Constraints", anim: "Code" },
  { n: 6, id: "foreign-keys-and-referential-integrity", file: "lessons/0006-foreign-keys-and-referential-integrity.html", title: "Foreign keys and referential integrity", topic: "Data Manipulation & Constraints", anim: "Code" },
  { n: 7, id: "aggregations-count-sum-and-group-by", file: "lessons/0007-aggregations-count-sum-and-group-by.html", title: "Aggregations: COUNT, SUM, and GROUP BY", topic: "Aggregations & Analytics", anim: "Code" },
  { n: 8, id: "filtering-groups-with-having", file: "lessons/0008-filtering-groups-with-having.html", title: "Filtering groups with HAVING", topic: "Aggregations & Analytics", anim: "Code" }
];

/* ============================================================
   SQL & Relational Databases — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "relational-foundations", title: "The Relational Model & Tables",
    terms: [
      { term: "RDBMS", def: "Relational Database Management System: software managing structured data organized into relations (tables).", lesson: 1, tags: ["rdbms"] },
      { term: "Table", def: "A structured two-dimensional relation comprising columns with defined datatypes and rows of data.", lesson: 1, tags: ["database"] },
      { term: "Primary key", def: "A column (or set of columns) that uniquely identifies each individual row in a table.", lesson: 2, tags: ["keys"] },
      { term: "Foreign key", def: "A column referencing the primary key of another table, enforcing referential integrity.", lesson: 2, tags: ["keys"] }
    ]
  },
  {
    id: "sql-queries", title: "Declarative Querying & Filtering",
    terms: [
      { term: "SQL", def: "Structured Query Language: a standardized declarative language for querying and mutating relational data.", lesson: 3, tags: ["sql"] },
      { term: "WHERE clause", def: "A filter predicate specifying Boolean conditions that rows must satisfy to be returned by a query.", lesson: 3, tags: ["sql"] },
      { term: "NULL", def: "A special SQL marker indicating the absence of any value or an unknown data state.", lesson: 4, tags: ["data"] },
      { term: "Three-valued logic", def: "The SQL logic system where Boolean expressions evaluate to TRUE, FALSE, or UNKNOWN (due to NULLs).", lesson: 4, tags: ["logic"] }
    ]
  },
  {
    id: "dml-mutations", title: "Data Manipulation & Constraints",
    terms: [
      { term: "DML", def: "Data Manipulation Language: SQL commands (INSERT, UPDATE, DELETE) modifying row data inside tables.", lesson: 5, tags: ["dml"] },
      { term: "CHECK constraint", def: "A database rule restricting the allowed values in a column using a Boolean expression.", lesson: 5, tags: ["constraints"] },
      { term: "Cascade delete", def: "A foreign key rule automatically deleting child rows when the referenced parent row is deleted.", lesson: 6, tags: ["integrity"] },
      { term: "Referential integrity", def: "The guarantee that every foreign key reference points to an existing, valid parent row.", lesson: 6, tags: ["integrity"] }
    ]
  },
  {
    id: "aggregations", title: "Aggregations & Analytics",
    terms: [
      { term: "Aggregate function", def: "A function (like COUNT, SUM, AVG, MAX, MIN) computing a single summary value from multiple rows.", lesson: 7, tags: ["aggregations"] },
      { term: "GROUP BY", def: "A clause grouping rows sharing identical values in specified columns into summary rows.", lesson: 7, tags: ["sql"] },
      { term: "HAVING clause", def: "A filter predicate applied to aggregated groups after the GROUP BY calculation is performed.", lesson: 8, tags: ["sql"] },
      { term: "Query planner", def: "The internal database engine component compiling declarative SQL into an optimal execution plan.", lesson: 8, tags: ["engine"] }
    ]
  }
];

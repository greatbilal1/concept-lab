"use strict";

module.exports = {
  id: "sql-relational-databases",
  title: "SQL & Relational Databases",
  num: 31,
  emoji: "🗄️",
  desc: "Tables, rows, keys and queries — storing data so it stays correct and stays findable.",
  mission: `# Mission — SQL & Relational Databases

## Why this course exists

Structured Query Language (SQL) and relational databases (RDBMS) have powered the world's financial, commercial, and operational infrastructure for fifty years. While trendy storage formats come and go, relational tables with strict schemas and mathematical set theory remain the gold standard for data durability. This course builds a rigorous mental model of tables, datatypes, primary keys, foreign key constraints, and declarative query execution.

## What the learner can do at the end

- Create and modify relational tables with appropriate data types and column constraints.
- Query datasets declaratively using SELECT, WHERE, ORDER BY, and LIMIT.
- Enforce relational integrity using PRIMARY KEY, FOREIGN KEY, and UNIQUE constraints.
- Perform data mutations safely using INSERT, UPDATE, and DELETE with transaction awareness.
- Aggregate and summarize tabular records using COUNT, SUM, AVG, and GROUP BY.

## What this course is NOT

- Not a database administration guide for disk partition striping.
- Not a NoSQL comparison course. It focuses on the relational model and ANSI SQL.

## Success looks like

When handed a raw dataset, the learner designs a normalized schema with constraints and writes precise, declarative SQL queries to answer complex business questions in under five minutes.
`,
  notes: `# Notes — SQL & Relational Databases

## Decisions
- Group into four themes: Relational Model & Tables, Querying with SELECT, Data Manipulation & Constraints, and Aggregations & Grouping.
- Standard ANSI SQL focus, illustrated with PostgreSQL / SQLite compatible syntax.
`,
  resources: `# Resources — SQL & Relational Databases

## Knowledge (primary sources)
- E.F. Codd, *A Relational Model of Data for Large Shared Data Banks* (Communications of the ACM, 1970).
- *SQL Antipatterns* by Bill Karwin (Pragmatic Bookshelf).
- *Learning SQL* by Alan Beaulieu (O'Reilly).

## Wisdom
- SQL is declarative, not procedural. You tell the database WHAT data you want; the query planner figures out HOW to fetch it.
`,
  cheatsheetSections: [
    {
      title: "Table Creation & Constraints",
      label: "Schema definition DDL",
      code: `CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  total_cents INTEGER NOT NULL CHECK (total_cents >= 0)
);`,
      lessonN: 2,
      lessonSlug: "tables-data-types-and-constraints",
      lessonTitle: "Tables, data types, and constraints"
    },
    {
      title: "Declarative Queries",
      label: "SELECT, WHERE, and sorting",
      code: `SELECT id, email, created_at
FROM users
WHERE email LIKE '%@gmail.com'
  AND created_at >= '2026-01-01'
ORDER BY created_at DESC
LIMIT 10 OFFSET 0;`,
      lessonN: 3,
      lessonSlug: "querying-data-with-select-and-where",
      lessonTitle: "Querying data with SELECT and WHERE"
    },
    {
      title: "Data Manipulation (DML)",
      label: "Insert, update, delete",
      code: `-- Insert single or multiple rows
INSERT INTO users (email) VALUES ('ada@example.com') RETURNING id;

-- Safe update with WHERE filter
UPDATE users SET email = 'new@example.com' WHERE id = 42;

-- Delete record
DELETE FROM users WHERE id = 42;`,
      lessonN: 5,
      lessonSlug: "inserting-updating-and-deleting-records",
      lessonTitle: "Inserting, updating, and deleting records"
    },
    {
      title: "Aggregations & Grouping",
      label: "GROUP BY and HAVING",
      code: `SELECT user_id, COUNT(*) AS order_count, SUM(total_cents) AS total_spent
FROM orders
GROUP BY user_id
HAVING COUNT(*) > 5
ORDER BY total_spent DESC;`,
      lessonN: 7,
      lessonSlug: "aggregations-count-sum-and-group-by",
      lessonTitle: "Aggregations: COUNT, SUM, and GROUP BY"
    }
  ],
  glossaryGroups: [
    {
      id: "relational-foundations",
      title: "The Relational Model & Tables",
      terms: [
        { term: "RDBMS", def: "Relational Database Management System: software managing structured data organized into relations (tables).", lesson: 1, tags: ["rdbms"] },
        { term: "Table", def: "A structured two-dimensional relation comprising columns with defined datatypes and rows of data.", lesson: 1, tags: ["database"] },
        { term: "Primary key", def: "A column (or set of columns) that uniquely identifies each individual row in a table.", lesson: 2, tags: ["keys"] },
        { term: "Foreign key", def: "A column referencing the primary key of another table, enforcing referential integrity.", lesson: 2, tags: ["keys"] }
      ]
    },
    {
      id: "sql-queries",
      title: "Declarative Querying & Filtering",
      terms: [
        { term: "SQL", def: "Structured Query Language: a standardized declarative language for querying and mutating relational data.", lesson: 3, tags: ["sql"] },
        { term: "WHERE clause", def: "A filter predicate specifying Boolean conditions that rows must satisfy to be returned by a query.", lesson: 3, tags: ["sql"] },
        { term: "NULL", def: "A special SQL marker indicating the absence of any value or an unknown data state.", lesson: 4, tags: ["data"] },
        { term: "Three-valued logic", def: "The SQL logic system where Boolean expressions evaluate to TRUE, FALSE, or UNKNOWN (due to NULLs).", lesson: 4, tags: ["logic"] }
      ]
    },
    {
      id: "dml-mutations",
      title: "Data Manipulation & Constraints",
      terms: [
        { term: "DML", def: "Data Manipulation Language: SQL commands (INSERT, UPDATE, DELETE) modifying row data inside tables.", lesson: 5, tags: ["dml"] },
        { term: "CHECK constraint", def: "A database rule restricting the allowed values in a column using a Boolean expression.", lesson: 5, tags: ["constraints"] },
        { term: "Cascade delete", def: "A foreign key rule automatically deleting child rows when the referenced parent row is deleted.", lesson: 6, tags: ["integrity"] },
        { term: "Referential integrity", def: "The guarantee that every foreign key reference points to an existing, valid parent row.", lesson: 6, tags: ["integrity"] }
      ]
    },
    {
      id: "aggregations",
      title: "Aggregations & Analytics",
      terms: [
        { term: "Aggregate function", def: "A function (like COUNT, SUM, AVG, MAX, MIN) computing a single summary value from multiple rows.", lesson: 7, tags: ["aggregations"] },
        { term: "GROUP BY", def: "A clause grouping rows sharing identical values in specified columns into summary rows.", lesson: 7, tags: ["sql"] },
        { term: "HAVING clause", def: "A filter predicate applied to aggregated groups after the GROUP BY calculation is performed.", lesson: 8, tags: ["sql"] },
        { term: "Query planner", def: "The internal database engine component compiling declarative SQL into an optimal execution plan.", lesson: 8, tags: ["engine"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "the-relational-model-and-tables",
      title: "The relational model and tables",
      topic: "The Relational Model & Tables",
      anim: "Code",
      lede: "Why have relational databases outlived every competing technology for 50 years? Discover Codd's relational model: tables, rows, columns, and declarative sets.",
      winShort: "Explain the mathematical relational model of tables, tuples, and attributes",
      missionLink: "The architectural foundation of all relational data storage",
      sec1: {
        title: "Codd's mathematical breakthrough",
        content: `<p>In 1970, IBM researcher Edgar F. Codd published a revolutionary paper proposing the <b>relational model</b>. Before Codd, databases were hierarchical trees or network graphs where programmers had to navigate pointers by hand.</p><p>Codd proposed that all data should be represented in <b>Relations (Tables)</b>, consisting of unordered <b>Tuples (Rows)</b> and typed <b>Attributes (Columns)</b>. Because the model is based on mathematical set theory, you query data declaratively without caring how data is physically arranged on disk.</p>`,
        keyIdea: "The relational model separates logical data representation from physical disk storage using set theory."
      },
      predict: {
        q: "In pure relational theory, does the order of rows inside a table matter?",
        a: [
          "No, a relational table is an unordered mathematical set of rows; ordering is only applied when you write ORDER BY",
          "Yes, rows are permanently ordered by the timestamp they were created",
          "Yes, rows must always be sorted alphabetically",
          "Only in MySQL databases"
        ],
        c: 0,
        why: "In set theory, {A, B} equals {B, A}; rows have no intrinsic order without an ORDER BY clause."
      },
      sec2: {
        title: "Relational anatomy",
        content: `<p>Observe how relations translate into everyday database concepts.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Relation (Table)", lines: ["named dataset: 'users'", "schema defines columns"] },
          { title: "Tuple (Row / Record)", lines: ["single instance: id 42", "contains values for all columns"] },
          { title: "Attribute (Column / Field)", lines: ["typed property: 'email'", "enforces data type rules"] }
        ]
      },
      sec3: {
        title: "Tracing declarative query execution",
        content: `<p>Trace how a declarative SQL query tells the engine WHAT to find while the engine chooses HOW to find it.</p>`,
      },
      trace: {
        code: [
          "# Declarative Query: SELECT name FROM users WHERE id = 42;",
          "Engine step 1: Parse and validate SQL syntax",
          "Engine step 2: Query planner checks B-tree index on 'id'",
          "Engine step 3: Direct indexed seek fetches row in 0.05 milliseconds!",
          "Engine step 4: Projects 'name' column and returns result set"
        ],
        steps: [
          { line: 0, vars: { query: "declarative request: what data is needed" } },
          { line: 2, vars: { planner: "optimizes path: uses index instead of full table scan" } },
          { line: 3, vars: { fetch: "row retrieved in sub-millisecond seek" } }
        ]
      },
      practiceIntro: "Test your memory of relational terminology.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The creator of the relational database model is E.F. <0>.",
          "In relational theory, a row is formally called a <1>.",
          "A relational database management system is abbreviated as <2>."
        ],
        blanks: [
          { a: ["Codd"], why: "Edgar F. Codd invented the relational model in 1970." },
          { a: ["tuple"], why: "Tuple is the formal mathematical term for a row." },
          { a: ["RDBMS"], why: "RDBMS stands for Relational Database Management System." }
        ]
      },
      win: "You can explain the mathematical principles of the relational model and understand why SQL queries are declarative.",
      nextTasks: [
        "Open a local SQLite or PostgreSQL database shell and inspect table schemas using \\d or .schema.",
        "Verify that querying a table without ORDER BY can return rows in non-deterministic order.",
        "Explain why spreadsheets are not relational databases."
      ],
      primarySource: "E.F. Codd, *A Relational Model of Data for Large Shared Data Banks* (ACM, 1970).",
      quiz: [
        {
          q: "What makes SQL a 'declarative' language compared to procedural languages like Python?",
          a: [
            "In SQL, you declare WHAT data you want; the database query planner determines HOW to retrieve it",
            "SQL code can only be written in capital letters",
            "SQL cannot perform mathematical calculations",
            "SQL does not require a computer processor to run"
          ],
          c: 0,
          why: "Declarative programming specifies the desired outcome rather than step-by-step algorithms."
        },
        {
          q: "Why are duplicate identical rows forbidden in pure relational theory?",
          a: [
            "A relation is a mathematical set, and sets cannot contain duplicate elements; every row must have a unique identity",
            "Duplicate rows cause hard drives to corrupt",
            "Computers cannot store more than 1,000 rows in memory",
            "Duplicate rows are illegal under international copyright law"
          ],
          c: 0,
          why: "Mathematical sets contain distinct items; Primary Keys enforce this uniqueness in RDBMS."
        },
        {
          q: "What is an RDBMS schema?",
          a: [
            "The blueprint defining tables, column data types, constraints, and relationships in the database",
            "The physical motherboard circuit board inside the server",
            "The user manual printed in PDF format",
            "The username and password of the database administrator"
          ],
          c: 0,
          why: "A schema specifies the structural metadata that governs all stored records."
        },
        {
          q: "What does the query planner inside a database engine do?",
          a: [
            "Analyzes table statistics and available indexes to construct the most cost-effective physical execution plan",
            "Schedules calendar appointments for the engineering team",
            "Deletes old tables when the database is idle",
            "Converts SQL into JavaScript code"
          ],
          c: 0,
          why: "The query planner evaluates algorithms (index seek, sequential scan, hash join) to execute queries efficiently."
        }
      ]
    },
    {
      n: 2,
      id: "tables-data-types-and-constraints",
      title: "Tables, data types, and constraints",
      topic: "The Relational Model & Tables",
      anim: "Code",
      lede: "Garbage in, garbage out. Learn how strict column datatypes and database constraints (PRIMARY KEY, NOT NULL, UNIQUE, CHECK) protect data integrity at the lowest level.",
      winShort: "Design robust relational tables using appropriate data types and column constraints",
      missionLink: "Prevents corrupted, inconsistent data from entering database storage",
      sec1: {
        title: "Guarding data at the gate",
        content: `<p>Application validation code can have bugs, but database constraints never lie. <b>Constraints</b> are rules enforced by the database engine on every single write operation: <code>NOT NULL</code> forbids missing values, <code>UNIQUE</code> prevents duplicates, and <code>CHECK</code> enforces domain limits (e.g. <code>price >= 0</code>).</p><p>Every table should have a <b>Primary Key</b>: a non-null, unique column (such as an auto-incrementing integer or UUID) that permanently identifies each row for references.</p>`,
        keyIdea: "Database constraints enforce business rules at the storage engine level, making bad data impossible to store."
      },
      predict: {
        q: "What happens if an application tries to INSERT a negative number into a column with 'CHECK (amount >= 0)'?",
        a: [
          "The database engine rejects the INSERT immediately with a constraint violation error",
          "The database changes the number to 0 silently and inserts it",
          "The database deletes the table",
          "The query executes normally without checking"
        ],
        c: 0,
        why: "CHECK constraints are strictly enforced by the RDBMS engine; invalid data is rejected with an error."
      },
      sec2: {
        title: "The core constraint family",
        content: `<p>Understand the four primary column constraints that protect data integrity.</p>`,
      },
      diagram: {
        boxes: [
          { title: "PRIMARY KEY", lines: ["unique row identifier", "NOT NULL + UNIQUE automatically", "creates clustered/primary index"] },
          { title: "NOT NULL & UNIQUE", lines: ["NOT NULL: value must exist", "UNIQUE: no two rows can match"] },
          { title: "CHECK & FOREIGN KEY", lines: ["CHECK (age >= 18): custom rules", "FOREIGN KEY: references valid parent"] }
        ]
      },
      sec3: {
        title: "Tracing DDL table creation",
        content: `<p>Trace how a table creation statement defines types and constraints simultaneously.</p>`,
      },
      trace: {
        code: [
          "CREATE TABLE accounts (",
          "    id SERIAL PRIMARY KEY,",
          "    email VARCHAR(255) NOT NULL UNIQUE,",
          "    balance INTEGER NOT NULL DEFAULT 0 CHECK (balance >= 0)",
          ");"
        ],
        steps: [
          { line: 1, vars: { pk: "auto-incrementing integer primary key defined" } },
          { line: 2, vars: { email_rules: "mandatory string, duplicate emails rejected" } },
          { line: 3, vars: { balance_rules: "integer cents, defaults to 0, negative values blocked" } }
        ]
      },
      practiceIntro: "Test your memory of SQL data types and constraints.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The constraint guaranteeing unique row identity is PRIMARY <0>.",
          "The constraint preventing empty missing values in a column is NOT <1>.",
          "The constraint enforcing custom validation expressions is a <2> constraint."
        ],
        blanks: [
          { a: ["KEY"], why: "PRIMARY KEY identifies each row uniquely." },
          { a: ["NULL"], why: "NOT NULL forbids missing data." },
          { a: ["CHECK"], why: "CHECK enforces arbitrary boolean expressions." }
        ]
      },
      win: "You can write robust Data Definition Language (DDL) schemas that eliminate invalid data through constraints.",
      nextTasks: [
        "Create a table in PostgreSQL or SQLite with PRIMARY KEY, NOT NULL, and UNIQUE constraints.",
        "Add a CHECK constraint to ensure an end date is after a start date.",
        "Attempt to insert a duplicate value into a UNIQUE column to verify the error."
      ],
      primarySource: "Alan Beaulieu, *Learning SQL*, Chapter 2: 'Creating and Populating a Database'.",
      quiz: [
        {
          q: "Why is storing monetary currency as a floating-point number (FLOAT/REAL) considered dangerous?",
          a: [
            "Binary floating-point math causes rounding precision errors (e.g. 0.1 + 0.2 != 0.3); store as INTEGER cents or NUMERIC/DECIMAL instead",
            "Floating-point numbers use too much hard drive space",
            "SQL databases forbid floats in financial tables",
            "Floating point numbers can only store negative numbers"
          ],
          c: 0,
          why: "Binary floating point cannot accurately represent base-10 fractions; use DECIMAL or integer cents."
        },
        {
          q: "What is the difference between VARCHAR(255) and TEXT in modern PostgreSQL?",
          a: [
            "In PostgreSQL, both use the exact same underlying storage and performance; VARCHAR(255) merely enforces a length limit",
            "TEXT is fifty times slower than VARCHAR",
            "VARCHAR can only store English letters",
            "TEXT cannot be indexed by B-trees"
          ],
          c: 0,
          why: "Modern Postgres stores both identically; VARCHAR simply checks maximum character bounds."
        },
        {
          q: "Can a table have multiple PRIMARY KEY constraints?",
          a: [
            "No, a table can have only ONE primary key (though it can be a composite key of multiple columns)",
            "Yes, a table can have up to ten primary keys",
            "Only on Tuesdays",
            "Yes, if the table has no foreign keys"
          ],
          c: 0,
          why: "A table has exactly one primary key; multiple unique columns are configured via UNIQUE constraints."
        },
        {
          q: "What does the 'DEFAULT' clause do in a column definition?",
          a: [
            "Specifies a fallback value to insert if the INSERT statement does not provide a value for that column",
            "Forces all rows to have the same value permanently",
            "Deletes the column if it is empty",
            "Sets the text color to black"
          ],
          c: 0,
          why: "DEFAULT supplies values automatically (e.g. DEFAULT NOW() or DEFAULT 0)."
        }
      ]
    },
    {
      n: 3,
      id: "querying-data-with-select-and-where",
      title: "Querying data with SELECT and WHERE",
      topic: "Declarative Querying & Filtering",
      anim: "Code",
      lede: "How do you ask the database for exactly what you need? Master the SELECT projection, filtering with WHERE, sorting with ORDER BY, and pagination with LIMIT/OFFSET.",
      winShort: "Write expressive declarative SQL queries with precise filtering and sorting",
      missionLink: "The primary daily tool for extracting business data from relational databases",
      sec1: {
        title: "The clauses of a query",
        content: `<p>A basic SQL query contains four clauses: <code>SELECT</code> (which columns to return), <code>FROM</code> (which table to read), <code>WHERE</code> (which rows to include), and <code>ORDER BY</code> (how to sort them).</p><p>A critical insight: <b>The database does NOT execute clauses in the order you write them!</b> Although you write SELECT first, the database evaluates <code>FROM</code> first, then <code>WHERE</code>, then aggregates, then <code>SELECT</code>, and finally <code>ORDER BY</code> and <code>LIMIT</code>.</p>`,
        keyIdea: "SQL is written SELECT -> FROM -> WHERE, but executed FROM -> WHERE -> SELECT -> ORDER BY."
      },
      predict: {
        q: "Why can't you use a column alias declared in SELECT (e.g. 'SELECT price * 2 AS double_price') inside the WHERE clause?",
        a: [
          "Because the WHERE clause executes BEFORE the SELECT projection calculates the alias",
          "Because aliases are only permitted in the ORDER BY clause",
          "Because double quotes are required around all numbers",
          "Because SQL engines do not support multiplication"
        ],
        c: 0,
        why: "Query execution order: FROM -> WHERE -> SELECT. Aliases don't exist yet during WHERE filtering."
      },
      sec2: {
        title: "SQL execution order versus written order",
        content: `<p>Memorise the actual order in which the database engine processes query clauses.</p>`,
      },
      diagram: {
        boxes: [
          { title: "1. FROM & JOIN", lines: ["identifies source tables", "gathers raw row sets"] },
          { title: "2. WHERE", lines: ["filters individual rows", "discards non-matching rows"] },
          { title: "3. SELECT", lines: ["computes expressions & aliases", "projects required columns"] },
          { title: "4. ORDER BY & LIMIT", lines: ["sorts the final result set", "slices pagination window"] }
        ]
      },
      sec3: {
        title: "Tracing query execution",
        content: `<p>Trace how a filtered, sorted query narrows 10,000 users down to the top 3 active accounts.</p>`,
      },
      trace: {
        code: [
          "SELECT id, name, score",
          "FROM users",
          "WHERE active = true AND score >= 100",
          "ORDER BY score DESC",
          "LIMIT 3;"
        ],
        steps: [
          { line: 1, vars: { from: "accesses 10,000 rows in users table" } },
          { line: 2, vars: { where: "filters to 450 active users with score >= 100" } },
          { line: 0, vars: { select: "extracts id, name, score attributes" } },
          { line: 3, vars: { order_by: "sorts 450 candidates from highest to lowest score" } },
          { line: 4, vars: { limit: "delivers exactly the top 3 rows" } }
        ]
      },
      practiceIntro: "Test your memory of SQL query clauses.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The clause specifying which table to query is <0>.",
          "The clause specifying row filtering criteria is <1>.",
          "The clause controlling row output sort sequence is <2> BY."
        ],
        blanks: [
          { a: ["FROM"], why: "FROM identifies the source relation." },
          { a: ["WHERE"], why: "WHERE filters rows before projection." },
          { a: ["ORDER"], why: "ORDER BY sorts the returned result set." }
        ]
      },
      win: "You can write high-performance SQL queries with exact filtering, pattern matching, and deterministic sorting.",
      nextTasks: [
        "Write a query using LIKE '%term%' to search for strings.",
        "Sort results by multiple columns (e.g. ORDER BY status ASC, created_at DESC).",
        "Observe an error when trying to use a SELECT alias inside a WHERE clause."
      ],
      primarySource: "Alan Beaulieu, *Learning SQL*, Chapter 3: 'Query Primer' & Chapter 4: 'Filtering'.",
      quiz: [
        {
          q: "What is the true logical execution order of an SQL query?",
          a: [
            "FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT",
            "SELECT -> FROM -> WHERE -> ORDER BY -> LIMIT",
            "LIMIT -> ORDER BY -> SELECT -> FROM -> WHERE",
            "WHERE -> FROM -> SELECT -> ORDER BY"
          ],
          c: 0,
          why: "Logical query processing gathers tables (FROM), filters rows (WHERE), projects columns (SELECT), and sorts (ORDER BY)."
        },
        {
          q: "What does the SQL operator 'IN' do in a WHERE clause (e.g. WHERE status IN ('active', 'pending'))?",
          a: [
            "Checks if the column value matches ANY item in the specified list of values",
            "Checks if the column value matches ALL items in the list simultaneously",
            "Translates the column text into Spanish",
            "Calculates the logarithm of the numbers"
          ],
          c: 0,
          why: "IN is shorthand for multiple OR equality checks: (status = 'active' OR status = 'pending')."
        },
        {
          q: "What does 'SELECT *' do, and why is it discouraged in production application code?",
          a: [
            "Returns every column in the table, wasting network bandwidth and breaking code if table schemas change",
            "Deletes all rows from the table",
            "Multiplies all numbers by two",
            "SELECT * is actually recommended everywhere in production"
          ],
          c: 0,
          why: "Explicit column projection (SELECT id, name) avoids transferring unnecessary columns and protects contracts."
        },
        {
          q: "How does the 'LIKE' operator with the '%' wildcard behave in SQL?",
          a: [
            "The '%' wildcard matches any sequence of zero or more characters (e.g. '%@gmail.com')",
            "The '%' wildcard calculates a percentage discount",
            "The '%' wildcard matches exactly one character only",
            "The '%' wildcard reverses the text"
          ],
          c: 0,
          why: "'%' matches arbitrary character sequences; '_' matches a single character."
        }
      ]
    },
    {
      n: 4,
      id: "the-mystery-of-null-and-three-valued-logic",
      title: "The mystery of NULL and three-valued logic",
      topic: "Declarative Querying & Filtering",
      anim: "Code",
      lede: "Why does 'val = NULL' never evaluate to true? Master SQL's three-valued logic (TRUE, FALSE, UNKNOWN), IS NULL, and the COALESCE function.",
      winShort: "Handle missing values correctly using IS NULL, IS NOT NULL, and COALESCE",
      missionLink: "Prevents subtle query bugs where missing data causes records to vanish from results",
      sec1: {
        title: "NULL is not a value; it is an unknown",
        content: `<p>In SQL, <code>NULL</code> does not mean zero, false, or an empty string. <b>NULL represents the complete absence of data, or an unknown value</b>.</p><p>Because NULL is unknown, you cannot compare it with equality: <code>NULL = NULL</code> does NOT return true — it returns <b>UNKNOWN</b>! Because WHERE clauses only keep rows that evaluate strictly to TRUE, writing <code>WHERE status = NULL</code> returns zero rows forever. You must use <code>IS NULL</code>.</p>`,
        keyIdea: "NULL means unknown; always compare with IS NULL or IS NOT NULL, never equality (=)."
      },
      predict: {
        q: "What does 'SELECT * FROM users WHERE middle_name != 'Smith'' return for a user whose middle_name is NULL?",
        a: [
          "The row is NOT returned, because comparing NULL with anything returns UNKNOWN, which WHERE treats as false",
          "The row is returned because NULL is not 'Smith'",
          "An error is thrown",
          "The middle_name is converted to 'Smith'"
        ],
        c: 0,
        why: "Any comparison with NULL yields UNKNOWN; WHERE only accepts expressions that evaluate to TRUE."
      },
      sec2: {
        title: "Three-valued logic truth table",
        content: `<p>Understand how SQL's three-valued logic handles AND, OR, and NOT with UNKNOWN.</p>`,
      },
      diagram: {
        boxes: [
          { title: "NULL = NULL", lines: ["evaluates to UNKNOWN", "never true, never false!"] },
          { title: "IS NULL / IS NOT NULL", lines: ["evaluates strictly to TRUE or FALSE", "the only safe check for absence"] },
          { title: "COALESCE(val, fallback)", lines: ["returns first non-NULL value", "COALESCE(middle_name, '')"] }
        ]
      },
      sec3: {
        title: "Tracing COALESCE default value substitution",
        content: `<p>Trace how COALESCE provides safe fallbacks for missing data in calculations.</p>`,
      },
      trace: {
        code: [
          "# Table: users (id=1, bonus=NULL), (id=2, bonus=500)",
          "# Query: SELECT id, salary + bonus AS total FROM users;",
          "# Problem: 50,000 + NULL = NULL! (salary wiped out for user 1)",
          "# Solution: SELECT id, salary + COALESCE(bonus, 0) AS total FROM users;",
          "# Result: User 1 total = 50,000; User 2 total = 50,500"
        ],
        steps: [
          { line: 2, vars: { arithmetic_trap: "any math operation with NULL produces NULL" } },
          { line: 3, vars: { fix: "COALESCE replaces NULL bonus with 0" } },
          { line: 4, vars: { outcome: "salaries calculated accurately for all employees" } }
        ]
      },
      practiceIntro: "Test your memory of NULL behavior.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "To test if a column has an absent value, use the operator IS <0>.",
          "SQL logic has three states: TRUE, FALSE, and <1>.",
          "The function returning the first non-null argument is <2>()."
        ],
        blanks: [
          { a: ["NULL"], why: "IS NULL checks for missing values." },
          { a: ["UNKNOWN"], why: "Three-valued logic includes UNKNOWN." },
          { a: ["COALESCE"], why: "COALESCE(a, b, c) returns the first non-null expression." }
        ]
      },
      win: "You can navigate three-valued logic and write queries that handle missing data without silent row-omission bugs.",
      nextTasks: [
        "Run SELECT NULL = NULL in your database and observe that it does not return true.",
        "Use COALESCE to provide a default string when querying an optional column.",
        "Check how COUNT(*) counts rows while COUNT(column) ignores NULL rows."
      ],
      primarySource: "Bill Karwin, *SQL Antipatterns*, Chapter 13: 'Fear of the Unknown'.",
      quiz: [
        {
          q: "Why does 'WHERE column = NULL' always return zero rows in SQL?",
          a: [
            "Because equality comparison with NULL evaluates to UNKNOWN, and WHERE clauses only retain rows evaluating to TRUE",
            "Because NULL deletes records from the query result set",
            "Because SQL requires column names to be enclosed in brackets",
            "Because the equals sign is reserved only for mathematical calculations"
          ],
          c: 0,
          why: "In three-valued logic, any comparison with NULL yields UNKNOWN, which fails the WHERE filter."
        },
        {
          q: "What does the function 'COALESCE(a, b, c)' do?",
          a: [
            "Evaluates arguments from left to right and returns the first argument that is not NULL",
            "Concatenates the three values into a single text string",
            "Sorts the three values from lowest to highest",
            "Calculates the average of the three numbers"
          ],
          c: 0,
          why: "COALESCE returns the first non-null parameter, providing clean fallback values."
        },
        {
          q: "What is the difference between COUNT(*) and COUNT(email)?",
          a: [
            "COUNT(*) counts all rows including those with NULLs; COUNT(email) counts only rows where email IS NOT NULL",
            "COUNT(*) only works on numbers; COUNT(email) works on text",
            "COUNT(email) runs twice as fast as COUNT(*)",
            "There is no difference between them"
          ],
          c: 0,
          why: "COUNT(column) ignores NULL values in that specific column; COUNT(*) counts total rows."
        },
        {
          q: "What does the expression '10 + NULL' evaluate to in SQL arithmetic?",
          a: [
            "NULL",
            "10",
            "0",
            "An error is thrown"
          ],
          c: 0,
          why: "Any mathematical operation with an unknown value produces an unknown value (NULL)."
        }
      ]
    },
    {
      n: 5,
      id: "inserting-updating-and-deleting-records",
      title: "Inserting, updating, and deleting records",
      topic: "Data Manipulation & Constraints",
      anim: "Code",
      lede: "Mutating data safely is a craft. Master INSERT, the disaster of UPDATE without WHERE, soft deletes versus hard deletes, and the RETURNING clause.",
      winShort: "Execute data mutations safely using parameterized DML statements and RETURNING clauses",
      missionLink: "The core statements for modifying persistent data in relational databases",
      sec1: {
        title: "The three mutation verbs: INSERT, UPDATE, DELETE",
        content: `<p>Data Manipulation Language (DML) provides three verbs to alter rows: <code>INSERT INTO</code> adds new rows, <code>UPDATE ... SET</code> modifies existing rows, and <code>DELETE FROM</code> removes rows.</p><p>A terrifying danger: <b>If you run UPDATE or DELETE without a WHERE clause, you update or delete EVERY SINGLE ROW in the entire table!</b> Always test your WHERE clause with a SELECT query first before executing destructive mutations.</p>`,
        keyIdea: "An UPDATE or DELETE statement without a WHERE clause mutates every row in the entire table."
      },
      predict: {
        q: "What happens if you run 'DELETE FROM users;' without a WHERE clause in a database shell?",
        a: [
          "Every single row in the users table is permanently deleted",
          "The database asks for confirmation before deleting anything",
          "Only the first row is deleted",
          "A syntax error is thrown"
        ],
        c: 0,
        why: "Standard SQL executes DELETE on the entire table unless constrained by a WHERE filter."
      },
      sec2: {
        title: "The RETURNING clause superpower",
        content: `<p>Modern databases (PostgreSQL, SQLite) let you return the newly generated ID or mutated values in one round-trip.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Standard INSERT", lines: ["INSERT INTO users (name)...", "requires separate query to get generated ID"] },
          { title: "INSERT ... RETURNING id", lines: ["delivers generated SERIAL / UUID id", "one round-trip; eliminates race conditions!"] },
          { title: "Soft Delete (Alternative)", lines: ["UPDATE users SET deleted_at = NOW()", "preserves row history; hides from UI"] }
        ]
      },
      sec3: {
        title: "Tracing an atomic transaction mutation",
        content: `<p>Trace how wrapping an UPDATE inside a transaction protects against accidental data loss.</p>`,
      },
      trace: {
        code: [
          "BEGIN TRANSACTION;",
          "UPDATE users SET active = false WHERE last_login < '2025-01-01';",
          "# Check modified row count: 'UPDATE 42'",
          "COMMIT; # or ROLLBACK if count looks incorrect!"
        ],
        steps: [
          { line: 0, vars: { transaction: "active; lock held" } },
          { line: 1, vars: { execution: "updates 42 inactive accounts" } },
          { line: 2, vars: { check: "row count verified as expected" } },
          { line: 3, vars: { commit: "changes written permanently to disk" } }
        ]
      },
      practiceIntro: "Test your memory of DML mutation statements.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The SQL statement used to add new rows to a table is <0> INTO.",
          "The SQL statement used to modify existing row values is <1>.",
          "The clause returning generated values from an INSERT or UPDATE is <2>."
        ],
        blanks: [
          { a: ["INSERT"], why: "INSERT INTO creates new table rows." },
          { a: ["UPDATE"], why: "UPDATE sets new values for existing rows." },
          { a: ["RETURNING"], why: "RETURNING delivers mutated rows in the response." }
        ]
      },
      win: "You can perform data mutations safely with parameterized SQL and verify outcomes using RETURNING clauses.",
      nextTasks: [
        "Insert a row and retrieve its generated primary key using INSERT ... RETURNING id.",
        "Perform a multi-row INSERT with a single SQL statement.",
        "Implement a soft-delete column (deleted_at TIMESTAMP) instead of destructive DELETE."
      ],
      primarySource: "Alan Beaulieu, *Learning SQL*, Chapter 15: 'Metadata and Transactions'.",
      quiz: [
        {
          q: "What is a 'soft delete' in database architecture?",
          a: [
            "Setting a 'deleted_at' timestamp on the row instead of physically removing it from the database table",
            "Deleting a row from memory but leaving it on disk",
            "Deleting a row with lowercase letters",
            "Deleting only the primary key column"
          ],
          c: 0,
          why: "Soft deletes preserve historical records for audits while filtering them from normal user queries."
        },
        {
          q: "Why is the RETURNING clause (e.g. INSERT INTO users ... RETURNING id) valuable?",
          a: [
            "It returns the generated primary key or calculated columns in a single round-trip without race conditions",
            "It runs fifty percent faster than regular SQL",
            "It automatically formats output as HTML",
            "It prevents the server from needing a CPU"
          ],
          c: 0,
          why: "RETURNING eliminates the race condition of querying SELECT MAX(id) after an insert."
        },
        {
          q: "What should you always do before running an UPDATE or DELETE statement on a production database?",
          a: [
            "Run a SELECT query with the exact same WHERE clause to verify which rows will be affected, and wrap in a transaction",
            "Reboot the production server",
            "Delete all indexes to speed up the write",
            "Email all users that the database is updating"
          ],
          c: 0,
          why: "Checking with SELECT and wrapping in a transaction allows rolling back if the row count is wrong."
        },
        {
          q: "How can you insert multiple rows in a single SQL statement?",
          a: [
            "INSERT INTO items (name, price) VALUES ('Book', 10), ('Pen', 2), ('Pad', 5);",
            "Type the word INSERT three times in a row",
            "Multiple rows can only be inserted using CSV files",
            "Separate each INSERT statement with a comma"
          ],
          c: 0,
          why: "Batch inserts use comma-separated tuple values to minimize network round-trips."
        }
      ]
    },
    {
      n: 6,
      id: "foreign-keys-and-referential-integrity",
      title: "Foreign keys and referential integrity",
      topic: "Data Manipulation & Constraints",
      anim: "Code",
      lede: "How do tables link together without creating orphan records? Master foreign keys, referential integrity, and CASCADE versus RESTRICT deletion behaviors.",
      winShort: "Enforce referential integrity using foreign keys and configure cascade deletion rules",
      missionLink: "Prevents orphaned records and keeps relational models consistent across deletions",
      sec1: {
        title: "The relational glue: Foreign Keys",
        content: `<p>A database is not just independent tables: it is a web of relationships. A <b>Foreign Key</b> is a column in a child table that stores the Primary Key value of a parent table (e.g. <code>orders.user_id</code> references <code>users.id</code>).</p><p>The database enforces <b>Referential Integrity</b>: you cannot insert an order for a <code>user_id</code> that does not exist, and you cannot delete a user if they have orders, unless you specify an automated rule like <code>ON DELETE CASCADE</code>.</p>`,
        keyIdea: "Foreign keys enforce referential integrity, preventing invalid references and orphan records."
      },
      predict: {
        q: "What happens by default if you attempt to DELETE a parent user who has existing child orders?",
        a: [
          "The database rejects the delete with a foreign key constraint violation error",
          "The database silently deletes the user and all orders without warning",
          "The orders are converted into user records",
          "The database crashes"
        ],
        c: 0,
        why: "Default RESTRICT / NO ACTION prevents parent deletion to protect child rows from becoming orphans."
      },
      sec2: {
        title: "ON DELETE actions compared",
        content: `<p>Understand the four options for handling child records when a parent record is deleted.</p>`,
      },
      diagram: {
        boxes: [
          { title: "RESTRICT / NO ACTION", lines: ["default behavior", "rejects delete if child records exist"] },
          { title: "CASCADE", lines: ["automatically deletes child records", "danger: deleting 1 parent might erase 10,000 rows!"] },
          { title: "SET NULL", lines: ["sets child foreign key column to NULL", "disowns record without deleting it"] }
        ]
      },
      sec3: {
        title: "Tracing foreign key validation",
        content: `<p>Trace how the database validates foreign key references before accepting an INSERT.</p>`,
      },
      trace: {
        code: [
          "# Table: users (id=1, id=2)",
          "# Command: INSERT INTO orders (user_id, total) VALUES (99, 500);",
          "# Engine checks users table for id = 99 -> NOT FOUND!",
          "# Error: insert or update on table 'orders' violates foreign key constraint 'orders_user_id_fkey'"
        ],
        steps: [
          { line: 0, vars: { existing_users: "[id: 1, id: 2]" } },
          { line: 1, vars: { attempted_insert: "order referencing non-existent user_id: 99" } },
          { line: 2, vars: { integrity_check: "database checks parent table via index" } },
          { line: 3, vars: { rejected: "transaction aborted; orphan order prevented" } }
        ]
      },
      practiceIntro: "Test your memory of foreign key rules.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A column referencing another table's primary key is a <0> key.",
          "The rule that references must point to existing rows is referential <1>.",
          "The action that automatically deletes child rows with parents is ON DELETE <2>."
        ],
        blanks: [
          { a: ["foreign"], why: "Foreign keys bind child rows to parent rows." },
          { a: ["integrity"], why: "Referential integrity guarantees reference validity." },
          { a: ["CASCADE"], why: "CASCADE propagates deletions down to child rows." }
        ]
      },
      win: "You can design relational models with explicit foreign key constraints that eliminate orphan records permanently.",
      nextTasks: [
        "Create a foreign key linking an orders table to a users table in SQL.",
        "Configure ON DELETE CASCADE on a comments table linked to an articles table.",
        "Observe an integrity violation error when attempting to insert an invalid parent ID."
      ],
      primarySource: "PostgreSQL Documentation: *Foreign Keys* (postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-FK).",
      quiz: [
        {
          q: "What is an 'orphan record' in database terminology?",
          a: [
            "A child row whose foreign key references a parent row that no longer exists in the database",
            "A record that has never been queried by a user",
            "A record that contains negative numbers",
            "A database table with zero columns"
          ],
          c: 0,
          why: "Orphans occur when parents are deleted without cleaning up referencing child rows."
        },
        {
          q: "What does 'ON DELETE CASCADE' do on a foreign key definition?",
          a: [
            "Automatically deletes all child rows when their referenced parent row is deleted",
            "Prevents the parent row from being deleted forever",
            "Backs up child rows to an external cloud archive",
            "Converts the foreign key column into a primary key"
          ],
          c: 0,
          why: "CASCADE propagates parent deletions automatically to all dependent child rows."
        },
        {
          q: "When is 'ON DELETE SET NULL' an appropriate foreign key strategy?",
          a: [
            "When child records should be preserved even if the parent is removed (e.g. keeping audit logs when an admin user is deleted)",
            "When the foreign key column has a NOT NULL constraint",
            "When the database runs low on disk storage space",
            "Only on mobile SQLite databases"
          ],
          c: 0,
          why: "SET NULL disassociates the child from the deleted parent while preserving the child record."
        },
        {
          q: "Should foreign key columns typically have an index created on them?",
          a: [
            "Yes, indexing foreign keys speeds up joins and prevents slow table scans during parent deletes",
            "No, indexing foreign keys is illegal in SQL standards",
            "Only if the column contains text characters",
            "No, foreign keys are automatically indexed in all databases"
          ],
          c: 0,
          why: "Postgres and MySQL do not auto-index foreign keys; indexing them is essential for JOIN performance."
        }
      ]
    },
    {
      n: 7,
      id: "aggregations-count-sum-and-group-by",
      title: "Aggregations: COUNT, SUM, and GROUP BY",
      topic: "Aggregations & Analytics",
      anim: "Code",
      lede: "Turn millions of rows into actionable business metrics. Master aggregate functions (COUNT, SUM, AVG, MIN, MAX) and the power of GROUP BY.",
      winShort: "Summarize relational datasets using aggregate functions and GROUP BY clauses",
      missionLink: "The foundation of all business intelligence, metrics, and reporting queries",
      sec1: {
        title: "Collapsing rows into summaries",
        content: `<p>Relational databases do more than store individual records: they are high-performance analytical engines. <b>Aggregate functions</b> collapse multiple rows into a single summary scalar: <code>COUNT(*)</code>, <code>SUM()</code>, <code>AVG()</code>, <code>MIN()</code>, and <code>MAX()</code>.</p><p>When combined with <code>GROUP BY</code>, the database partitions rows into distinct buckets based on matching values (e.g. group orders by <code>user_id</code> or <code>country</code>) and calculates the aggregate separately for each bucket.</p>`,
        keyIdea: "GROUP BY partitions rows into category buckets; aggregate functions compute metrics per bucket."
      },
      predict: {
        q: "In 'SELECT department, AVG(salary) FROM employees GROUP BY department', what does each output row represent?",
        a: [
          "One department and the average salary calculated across all employees in that department",
          "Every individual employee row with their salary doubled",
          "The highest paid employee across the entire company",
          "The total number of departments"
        ],
        c: 0,
        why: "GROUP BY collapses all employees in each department into a single aggregated summary row."
      },
      sec2: {
        title: "The aggregation pipeline",
        content: `<p>Visualise how GROUP BY partitions rows into buckets before calculating summary functions.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Raw Rows", lines: ["Dept A: $50k, $70k", "Dept B: $60k, $80k, $100k"] },
          { title: "GROUP BY department", lines: ["Bucket 1: Dept A", "Bucket 2: Dept B"] },
          { title: "Aggregate Outputs", lines: ["Dept A: AVG = $60k, COUNT = 2", "Dept B: AVG = $80k, COUNT = 3"] }
        ]
      },
      sec3: {
        title: "Tracing GROUP BY execution",
        content: `<p>Trace how a sales query groups 10,000 orders into total revenue per country.</p>`,
      },
      trace: {
        code: [
          "SELECT country, COUNT(*) AS orders_count, SUM(amount) AS total_revenue",
          "FROM sales",
          "GROUP BY country",
          "ORDER BY total_revenue DESC;"
        ],
        steps: [
          { line: 1, vars: { source: "accesses sales relation (10,000 rows)" } },
          { line: 2, vars: { partition: "partitions rows into distinct country buckets (US, UK, DE...)" } },
          { line: 0, vars: { calculation: "computes COUNT and SUM for each country bucket" } },
          { line: 3, vars: { sort: "orders countries from highest total revenue to lowest" } }
        ]
      },
      practiceIntro: "Test your memory of SQL aggregate functions.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The clause that partitions rows into category buckets is <0> BY.",
          "The aggregate function that calculates arithmetic mean is <1>().",
          "To count only unique non-duplicate values, write COUNT(<2> column)."
        ],
        blanks: [
          { a: ["GROUP"], why: "GROUP BY partitions rows into summary buckets." },
          { a: ["AVG"], why: "AVG() calculates the average value." },
          { a: ["DISTINCT"], why: "COUNT(DISTINCT col) counts unique values." }
        ]
      },
      win: "You can write analytical SQL queries that calculate summary statistics, totals, and averages across categories.",
      nextTasks: [
        "Calculate the total number of orders and total spend per customer.",
        "Find the minimum and maximum prices in a product catalog using MIN() and MAX().",
        "Count unique active users using COUNT(DISTINCT user_id)."
      ],
      primarySource: "Alan Beaulieu, *Learning SQL*, Chapter 8: 'Grouping and Aggregates'.",
      quiz: [
        {
          q: "What rule governs which non-aggregated columns can appear in a SELECT clause with GROUP BY?",
          a: [
            "Any column in the SELECT list that is not wrapped in an aggregate function MUST be included in the GROUP BY clause",
            "You can select any random column without including it in GROUP BY",
            "Non-aggregated columns are strictly forbidden in all SQL queries",
            "Columns can only be selected if they contain numbers"
          ],
          c: 0,
          why: "If a column isn't aggregated, the engine must know which value to represent the collapsed bucket."
        },
        {
          q: "What does COUNT(DISTINCT country) calculate?",
          a: [
            "The count of unique, non-duplicate country values, ignoring repetitions",
            "The total number of rows in the table",
            "The alphabetized list of country names",
            "The total population of all countries"
          ],
          c: 0,
          why: "DISTINCT filters out repeated values before the aggregate function counts."
        },
        {
          q: "How does the AVG() function handle NULL values in its calculation?",
          a: [
            "It ignores NULL rows completely, calculating the average based only on rows that contain numbers",
            "It treats NULL as zero, dragging down the average",
            "It returns NULL if any single row contains a NULL",
            "It throws an unhandled mathematical exception"
          ],
          c: 0,
          why: "Standard SQL aggregate functions (except COUNT(*)) silently skip NULL values."
        },
        {
          q: "What is the difference between MAX(date) and MIN(date)?",
          a: [
            "MAX returns the most recent (latest) date; MIN returns the earliest (oldest) date",
            "MAX only works on numbers; MIN only works on dates",
            "MAX deletes old dates from the table",
            "There is no difference between them"
          ],
          c: 0,
          why: "Chronologically, later dates are greater than earlier dates."
        }
      ]
    },
    {
      n: 8,
      id: "filtering-groups-with-having",
      title: "Filtering groups with HAVING",
      topic: "Aggregations & Analytics",
      anim: "Code",
      lede: "Why can't you use 'WHERE COUNT(*) > 5'? Learn the crucial difference between WHERE (filtering rows before grouping) and HAVING (filtering groups after aggregation).",
      winShort: "Filter aggregated datasets using HAVING clauses and optimize analytical queries",
      missionLink: "Completes the logical SQL execution pipeline for advanced data analysis",
      sec1: {
        title: "WHERE filters rows; HAVING filters groups",
        content: `<p>A common beginner mistake is writing <code>WHERE COUNT(*) > 5</code>. The database immediately throws an error: <i>'aggregate functions are not allowed in WHERE'</i>.</p><p>Why? Because the <code>WHERE</code> clause runs <b>before</b> rows are grouped! To filter aggregated buckets, SQL provides the <b>HAVING</b> clause. <code>WHERE</code> filters individual rows <i>before</i> grouping; <code>HAVING</code> filters summary groups <i>after</i> grouping.</p>`,
        keyIdea: "WHERE filters raw rows before grouping; HAVING filters aggregated groups after grouping."
      },
      predict: {
        q: "Which clause filters out customers who have spent less than $1,000 total across all their orders?",
        a: [
          "HAVING SUM(orders.total) >= 1000",
          "WHERE SUM(orders.total) >= 1000",
          "ORDER BY SUM(orders.total) >= 1000",
          "GROUP BY total >= 1000"
        ],
        c: 0,
        why: "Total spend is an aggregate calculation (SUM); filtering aggregates requires the HAVING clause."
      },
      sec2: {
        title: "The complete 6-clause pipeline",
        content: `<p>Review the full logical execution order of an advanced SQL query.</p>`,
      },
      diagram: {
        boxes: [
          { title: "1. FROM -> 2. WHERE", lines: ["gather source tables", "filter raw rows (active = true)"] },
          { title: "3. GROUP BY -> 4. HAVING", lines: ["partition into buckets (by user_id)", "filter aggregate buckets (COUNT(*) > 5)"] },
          { title: "5. SELECT -> 6. ORDER BY", lines: ["project columns and expressions", "sort final result set (LIMIT n)"] }
        ]
      },
      sec3: {
        title: "Tracing WHERE and HAVING together",
        content: `<p>Trace how a query filters recent orders first with WHERE, then filters high-volume buyers with HAVING.</p>`,
      },
      trace: {
        code: [
          "SELECT customer_id, COUNT(*) AS recent_orders",
          "FROM orders",
          "WHERE order_date >= '2026-01-01'  # 1. Filter raw rows first",
          "GROUP BY customer_id              # 2. Group by customer",
          "HAVING COUNT(*) >= 3              # 3. Filter groups with >= 3 orders",
          "ORDER BY recent_orders DESC;"
        ],
        steps: [
          { line: 2, vars: { where: "discards orders before 2026" } },
          { line: 3, vars: { group: "groups remaining 2026 orders by customer_id" } },
          { line: 4, vars: { having: "keeps only customers who placed at least 3 orders" } },
          { line: 5, vars: { sort: "presents top repeat customers in 2026" } }
        ]
      },
      practiceIntro: "Test your memory of WHERE versus HAVING.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "To filter individual rows before grouping, use the <0> clause.",
          "To filter aggregated summary groups after grouping, use the <1> clause.",
          "Aggregate functions like COUNT and SUM are forbidden inside the <2> clause."
        ],
        blanks: [
          { a: ["WHERE"], why: "WHERE operates on raw un-grouped rows." },
          { a: ["HAVING"], why: "HAVING operates on aggregated groups." },
          { a: ["WHERE"], why: "WHERE cannot evaluate aggregate functions." }
        ]
      },
      win: "You can combine WHERE and HAVING clauses to author sophisticated analytical reporting queries without syntax errors.",
      nextTasks: [
        "Write a query finding departments with more than 5 employees using HAVING COUNT(*) > 5.",
        "Combine WHERE (filter active accounts) with HAVING (filter high balances) in a single query.",
        "Observe the error thrown when attempting to place an aggregate function in a WHERE clause."
      ],
      primarySource: "Alan Beaulieu, *Learning SQL*, Chapter 8: 'Grouping Conditions with the HAVING Clause'.",
      quiz: [
        {
          q: "What is the primary difference between WHERE and HAVING in SQL?",
          a: [
            "WHERE filters individual rows before grouping; HAVING filters aggregated groups after grouping",
            "WHERE is for numbers; HAVING is for text strings",
            "WHERE runs after SELECT; HAVING runs before FROM",
            "There is no difference between them"
          ],
          c: 0,
          why: "WHERE evaluates row-by-row before grouping; HAVING evaluates summary groups."
        },
        {
          q: "Why can't you write 'WHERE COUNT(*) > 10'?",
          a: [
            "Because the WHERE clause executes before rows are grouped, so the count does not exist yet",
            "Because COUNT is not supported on modern databases",
            "Because 10 is too large a number for SQL",
            "Because WHERE can only be used with primary keys"
          ],
          c: 0,
          why: "Aggregates are calculated after WHERE finishes; filtering aggregates must happen in HAVING."
        },
        {
          q: "Can you use a non-aggregated column in a HAVING clause?",
          a: [
            "Only if that column is included in the GROUP BY clause (otherwise filter it in WHERE instead)",
            "Yes, any column from any table can be used in HAVING",
            "No, HAVING can only contain numbers",
            "Only on SQLite databases"
          ],
          c: 0,
          why: "Raw row filters belong in WHERE; HAVING should only reference grouped columns or aggregates."
        },
        {
          q: "Why is filtering rows with WHERE before grouping more efficient than filtering in HAVING?",
          a: [
            "WHERE reduces the number of rows before grouping and aggregating, saving CPU and memory",
            "WHERE automatically bypasses disk reads",
            "HAVING causes database queries to time out",
            "There is no performance difference"
          ],
          c: 0,
          why: "Filtering early with WHERE reduces the volume of data that the engine must sort and aggregate."
        }
      ]
    }
  ]
};

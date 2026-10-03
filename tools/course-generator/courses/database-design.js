"use strict";

module.exports = {
  id: "database-design",
  title: "Database Design & Relationships",
  num: 32,
  emoji: "🧱",
  desc: "Normalisation, one-to-many and many-to-many relationships, and modelling a domain in tables.",
  mission: `# Mission — Database Design & Relationships

## Why this course exists

Bad database design haunts projects for years. When data is stuffed into bloated tables, updated in multiple places, or tangled with circular dependencies, applications suffer from update anomalies, data corruption, and catastrophic query slowdowns. This course teaches how to model real-world business domains into clean, normalized relational schemas with clear cardinalities (one-to-one, one-to-many, many-to-many).

## What the learner can do at the end

- Analyze domain requirements and produce entity-relationship models (ER diagrams).
- Implement one-to-one, one-to-many, and many-to-many relationships with junction tables.
- Normalize schemas through First (1NF), Second (2NF), and Third Normal Form (3NF).
- Eliminate insertion, update, and deletion data anomalies.
- Apply intentional denormalization strategies for high-throughput read optimization with eyes wide open.

## What this course is NOT

- Not a database server tuning or disk hardware course.
- Not a document-database NoSQL guide. It focuses on relational modeling.

## Success looks like

When presented with a complex domain description (e.g. an e-commerce subscription marketplace), the learner designs a 3NF relational schema with correct junction tables, primary keys, and foreign keys on paper in under fifteen minutes.
`,
  notes: `# Notes — Database Design & Relationships

## Decisions
- Group into four themes: Modeling & Cardinality, Normalization Forms, Many-to-Many & Junctions, and Denormalization.
- Emphasize practical trade-offs between clean 3NF normalization and read performance.
`,
  resources: `# Resources — Database Design & Relationships

## Knowledge (primary sources)
- *Database Design for Mere Mortals* by Michael J. Hernandez (Addison-Wesley).
- *SQL Antipatterns* by Bill Karwin (Pragmatic Bookshelf).
- C.J. Date, *An Introduction to Database Systems* (8th Edition).

## Wisdom
- Normalize until it hurts; denormalize only when measurements prove you must.
`,
  cheatsheetSections: [
    {
      title: "Cardinality Implementations",
      label: "Foreign key placement patterns",
      code: `-- 1:1 Relationship (Users & Profiles)
CREATE TABLE profiles (
  user_id INTEGER PRIMARY KEY REFERENCES users(id),
  bio TEXT
);

-- 1:N Relationship (Author & Books)
CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  author_id INTEGER NOT NULL REFERENCES authors(id),
  title TEXT NOT NULL
);`,
      lessonN: 2,
      lessonSlug: "one-to-one-and-one-to-many-relationships",
      lessonTitle: "One-to-one and one-to-many relationships"
    },
    {
      title: "Many-to-Many (N:M)",
      label: "Junction table pattern",
      code: `CREATE TABLE students (id SERIAL PRIMARY KEY, name TEXT);
CREATE TABLE courses (id SERIAL PRIMARY KEY, title TEXT);

-- Junction / Join Table
CREATE TABLE enrollments (
  student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
  course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
  enrolled_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (student_id, course_id)
);`,
      lessonN: 3,
      lessonSlug: "many-to-many-relationships-and-junction-tables",
      lessonTitle: "Many-to-many relationships and junction tables"
    },
    {
      title: "Normalization Checklist",
      label: "1NF, 2NF, and 3NF rules",
      code: `1NF: Atomic values only (no comma-separated lists); unique primary key
2NF: In 1NF + no partial dependencies (all non-keys depend on whole PK)
3NF: In 2NF + no transitive dependencies (non-keys depend ONLY on PK)
Rule of thumb: "Every attribute depends on the key, the whole key, and nothing but the key, so help me Codd."`,
      lessonN: 5,
      lessonSlug: "third-normal-form-3nf-and-transitive-dependencies",
      lessonTitle: "Third normal form (3NF) and transitive dependencies"
    },
    {
      title: "Intentional Denormalization",
      label: "Read optimization trade-offs",
      code: `-- Denormalized cached counter
ALTER TABLE posts ADD COLUMN cached_comment_count INTEGER DEFAULT 0;

-- Maintenance via trigger or transaction:
-- Incremented on comment INSERT; decremented on comment DELETE.
-- Trade-off: Instant O(1) reads; write overhead and risk of desync.`,
      lessonN: 8,
      lessonSlug: "intentional-denormalization-and-trade-offs",
      lessonTitle: "Intentional denormalization and trade-offs"
    }
  ],
  glossaryGroups: [
    {
      id: "modeling-cardinality",
      title: "Domain Modeling & Cardinality",
      terms: [
        { term: "Cardinality", def: "The numerical relationship between occurrences in two entities (1:1, 1:N, or N:M).", lesson: 1, tags: ["modeling"] },
        { term: "Entity", def: "A distinct real-world thing, concept, or event represented as a relational table.", lesson: 1, tags: ["modeling"] },
        { term: "One-to-many", def: "A relationship where one parent record can be associated with multiple child records.", lesson: 2, tags: ["relationships"] },
        { term: "One-to-one", def: "A relationship where each record in table A corresponds to at most one record in table B.", lesson: 2, tags: ["relationships"] }
      ]
    },
    {
      id: "junction-tables",
      title: "Many-to-Many & Keys",
      terms: [
        { term: "Many-to-many", def: "A relationship where multiple records in table A associate with multiple records in table B.", lesson: 3, tags: ["relationships"] },
        { term: "Junction table", def: "An intermediary table containing foreign keys linking two tables in a many-to-many relationship.", lesson: 3, tags: ["tables"] },
        { term: "Composite key", def: "A primary key formed by combining two or more columns to guarantee unique identity.", lesson: 3, tags: ["keys"] },
        { term: "Surrogate key", def: "An artificial, system-generated primary key (like an auto-incrementing ID or UUID).", lesson: 4, tags: ["keys"] }
      ]
    },
    {
      id: "normalization",
      title: "Normalization Forms & Anomalies",
      terms: [
        { term: "Normalization", def: "The systematic process of organizing database schema to eliminate data redundancy and anomalies.", lesson: 5, tags: ["normalization"] },
        { term: "First Normal Form", def: "1NF: every column contains atomic values, with no repeating groups or arrays.", lesson: 5, tags: ["normalization"] },
        { term: "Second Normal Form", def: "2NF: in 1NF and all non-key columns depend on the entire primary key, not a part of it.", lesson: 5, tags: ["normalization"] },
        { term: "Third Normal Form", def: "3NF: in 2NF and no non-key column depends on another non-key column (no transitive dependencies).", lesson: 5, tags: ["normalization"] }
      ]
    },
    {
      id: "anomalies-denorm",
      title: "Anomalies & Denormalization",
      terms: [
        { term: "Update anomaly", def: "Data inconsistency occurring when duplicate copies of data are not updated simultaneously.", lesson: 6, tags: ["anomalies"] },
        { term: "Deletion anomaly", def: "Accidental loss of valid data when deleting a record that also held unrelated information.", lesson: 6, tags: ["anomalies"] },
        { term: "Denormalization", def: "The deliberate reintroduction of redundancy into a schema to optimize read query performance.", lesson: 8, tags: ["performance"] },
        { term: "Natural key", def: "A unique attribute that exists in the real world (such as an email or ISBN) used as an identifier.", lesson: 4, tags: ["keys"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "from-business-domain-to-entities",
      title: "From business domain to entities",
      topic: "Domain Modeling & Cardinality",
      anim: "Layers",
      lede: "How do you turn a messy real-world problem into clean relational tables? Learn how to identify entities, attributes, and business relationships.",
      winShort: "Extract entities, attributes, and relationships from business requirements",
      missionLink: "The initial conceptual phase of all software data modeling",
      sec1: {
        title: "Extracting nouns and verbs",
        content: `<p>Database design begins with human language. When domain experts describe a business, their sentences hold the architecture: <b>nouns become Entities (Tables)</b>, <b>adjectives become Attributes (Columns)</b>, and <b>verbs become Relationships (Foreign Keys)</b>.</p><p>'A <i>customer</i> places multiple <i>orders</i>. Each order contains several <i>line items</i> of <i>products</i>.' That single sentence defines four distinct tables and three relationships.</p>`,
        keyIdea: "Domain nouns map to tables; adjectives map to columns; verbs map to relationships."
      },
      predict: {
        q: "In the sentence 'Students enroll in multiple courses', what are the entities versus the relationship?",
        a: [
          "Students and Courses are entities (tables); 'enroll in' is the many-to-many relationship",
          "Enroll is an entity; Students and Courses are columns",
          "There is only one entity called School",
          "Multiple is an attribute"
        ],
        c: 0,
        why: "Students and Courses are independent domain nouns; enrollment is the relationship connecting them."
      },
      sec2: {
        title: "The Entity-Relationship blueprint",
        content: `<p>Visualise how domain entities connect through cardinalities.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Customer (1)", lines: ["id, name, email", "places orders"] },
          { title: "Order (N)", lines: ["id, customer_id, total", "belongs to customer, contains items"] },
          { title: "Line Item (N)", lines: ["id, order_id, product_id", "quantities and prices"] }
        ]
      },
      sec3: {
        title: "Tracing entity decomposition",
        content: `<p>Trace how a single unorganized spreadsheet row is broken down into separate normalized entities.</p>`,
      },
      trace: {
        code: [
          "# Raw spreadsheet: 'Order #101, Ada Lovelace, ada@email.com, Book, $20'",
          "# Entity 1: User (id: 1, name: 'Ada Lovelace', email: 'ada@email.com')",
          "# Entity 2: Product (id: 42, title: 'Book', price: 20)",
          "# Entity 3: Order (id: 101, user_id: 1, total: 20)"
        ],
        steps: [
          { line: 0, vars: { raw_row: "all domain concepts conflated in one row" } },
          { line: 1, vars: { entity_user: "user identity extracted" } },
          { line: 2, vars: { entity_product: "product catalog extracted" } },
          { line: 3, vars: { entity_order: "transaction links entities via foreign keys" } }
        ]
      },
      practiceIntro: "Test your memory of domain modeling fundamentals.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A distinct real-world concept modeled as a table is an <0>.",
          "A property or field describing an entity is an <1>.",
          "A visual diagram depicting tables and connections is an <2> diagram."
        ],
        blanks: [
          { a: ["entity"], why: "Entities represent core domain concepts." },
          { a: ["attribute"], why: "Attributes become table columns." },
          { a: ["ER", "Entity-Relationship"], why: "ER diagrams model entities and cardinalities." }
        ]
      },
      win: "You can dissect complex business specifications into clean entity definitions and relationship diagrams.",
      nextTasks: [
        "Take an invoice receipt and extract all distinct entities and attributes.",
        "Sketch an Entity-Relationship (ER) diagram for a music streaming platform.",
        "Identify the primary key column for each extracted entity."
      ],
      primarySource: "Michael J. Hernandez, *Database Design for Mere Mortals*, Chapter 3: 'Terminology and Relational Concepts'.",
      quiz: [
        {
          q: "What is an 'Entity' in relational database design?",
          a: [
            "A distinct person, place, item, event, or concept about which data is stored",
            "A software license agreement for the database",
            "A physical computer cable connecting the server",
            "A mathematical function that multiplies numbers"
          ],
          c: 0,
          why: "Entities represent distinct real-world concepts modeled as individual relational tables."
        },
        {
          q: "Why shouldn't user contact details and product inventory data be stored in the same table?",
          a: [
            "They represent distinct domain entities with different lifecycles; mixing them causes redundancy and update bugs",
            "Relational databases cannot store words from different categories",
            "It causes the computer screen to flicker",
            "Tables can only have a maximum of four columns"
          ],
          c: 0,
          why: "Conflating entities violates single responsibility and causes severe data duplication."
        },
        {
          q: "What is 'cardinality' in database design?",
          a: [
            "The numerical relationship between occurrences of one entity and occurrences of another (e.g. 1:1, 1:N, N:M)",
            "The total number of CPU processors on the server",
            "The font size of column names",
            "The color of the database user interface"
          ],
          c: 0,
          why: "Cardinality expresses how many instances of entity B relate to an instance of entity A."
        },
        {
          q: "What part of speech in a business description typically indicates an attribute?",
          a: [
            "Adjectives or descriptive nouns (e.g. status, color, price, creation_date)",
            "Transitive action verbs",
            "Prepositions like with and from",
            "Conjunctions like and or but"
          ],
          c: 0,
          why: "Adjectives and descriptive values qualify an entity and translate directly to column attributes."
        }
      ]
    },
    {
      n: 2,
      id: "one-to-one-and-one-to-many-relationships",
      title: "One-to-one and one-to-many relationships",
      topic: "Domain Modeling & Cardinality",
      anim: "Layers",
      lede: "Where does the foreign key go? Master the placement rules for one-to-one (1:1) and one-to-many (1:N) relationships without circular dependencies.",
      winShort: "Implement one-to-one and one-to-many relationships with correct foreign key placement",
      missionLink: "The architectural blueprint for linking 90% of relational tables",
      sec1: {
        title: "The foreign key placement rule",
        content: `<p>In a <b>One-to-Many (1:N)</b> relationship (e.g. one Author has many Books), a simple rule governs schema design: <b>The foreign key ALWAYS lives on the 'many' side</b>. A book belongs to one author, so <code>books</code> holds the <code>author_id</code> column.</p><p>Putting foreign keys on the 'one' side (trying to store an array of book IDs on the author) breaks relational theory and creates unqueryable comma-separated strings.</p>`,
        keyIdea: "In a 1:N relationship, the foreign key column always belongs in the child (many) table."
      },
      predict: {
        q: "A customer has many orders. Which table must hold the foreign key column?",
        a: [
          "The orders table holds the customer_id column",
          "The customers table holds an array of order_id numbers",
          "Both tables must hold foreign keys referencing each other",
          "A separate third table is required"
        ],
        c: 0,
        why: "In 1:N, the foreign key sits on the child 'many' side: each order references its parent customer."
      },
      sec2: {
        title: "One-to-One (1:1) architecture",
        content: `<p>For 1:1 relationships (e.g. User and UserProfile), make the foreign key also serve as the Primary Key.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Parent (users)", lines: ["id SERIAL PRIMARY KEY", "email, password_hash"] },
          { title: "Child (profiles)", lines: ["user_id INTEGER PRIMARY KEY", "FOREIGN KEY (user_id) REFERENCES users(id)", "enforces exactly 1:1 mapping!"] }
        ]
      },
      sec3: {
        title: "Tracing 1:N foreign key validation",
        content: `<p>Trace how a single customer record links to multiple distinct order records.</p>`,
      },
      trace: {
        code: [
          "# users table: (id: 1, name: 'Ada')",
          "# orders table: (id: 101, user_id: 1, total: 50)",
          "# orders table: (id: 102, user_id: 1, total: 35)",
          "# Result: Querying WHERE user_id = 1 retrieves both orders cleanly"
        ],
        steps: [
          { line: 0, vars: { parent: "Customer #1 exists in users table" } },
          { line: 1, vars: { child_1: "Order 101 links to user_id: 1" } },
          { line: 2, vars: { child_2: "Order 102 links to user_id: 1" } },
          { line: 3, vars: { relationship: "one-to-many established without modifying users table" } }
        ]
      },
      practiceIntro: "Test your memory of relationship placement.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "In a one-to-many relationship, the foreign key belongs in the <0> table.",
          "A relationship where one user has at most one profile is one-to-<1>.",
          "Storing multiple IDs as a comma-separated string in a column violates <2>NF."
        ],
        blanks: [
          { a: ["many", "child"], why: "Foreign keys live on the 'many' child side." },
          { a: ["one", "1"], why: "1:1 limits relationships to a single matching record." },
          { a: ["1", "first"], why: "1NF mandates atomic, indivisible column values." }
        ]
      },
      win: "You can position foreign key columns correctly across one-to-one and one-to-many relational tables.",
      nextTasks: [
        "Create an authors and books schema with a foreign key constraint.",
        "Implement a 1:1 user_preferences table where the primary key is a foreign key to users.",
        "Query all children for a parent using a simple WHERE foreign_key = parent_id clause."
      ],
      primarySource: "C.J. Date, *An Introduction to Database Systems*, Chapter 4: 'Relational Integrity Constraints'.",
      quiz: [
        {
          q: "Why shouldn't you store multiple child IDs as a comma-separated string (e.g. '1,4,12') in a parent column?",
          a: [
            "It breaks 1NF, prevents indexing, prevents foreign key constraints, and makes joins impossible",
            "It makes the SQL file download too fast",
            "Strings cannot contain commas in SQL",
            "It causes database servers to catch on fire"
          ],
          c: 0,
          why: "Comma-separated values destroy indexing, integrity constraints, and query performance."
        },
        {
          q: "How do you enforce a strict 1:1 relationship between a 'users' table and a 'profiles' table in SQL?",
          a: [
            "Make profiles.user_id the PRIMARY KEY of profiles while referencing users(id)",
            "Add ten foreign key columns to both tables",
            "Use a CHECK constraint checking user_id > 0",
            "Set the table background color to blue"
          ],
          c: 0,
          why: "Making the foreign key also be the unique primary key guarantees at most one profile per user."
        },
        {
          q: "Can a child row in a 1:N relationship reference more than one parent row simultaneously in its foreign key column?",
          a: [
            "No, a foreign key column holds a single scalar value referencing exactly one parent primary key",
            "Yes, foreign keys can hold multiple parents at once",
            "Only on Sundays",
            "Yes, if the database is running on Linux"
          ],
          c: 0,
          why: "A foreign key holds one scalar value, binding the child to exactly one parent record."
        },
        {
          q: "When is it appropriate to split data into a 1:1 relationship rather than keeping it in a single table?",
          a: [
            "When isolating rarely used large columns (like binary blobs), or separating sensitive security data",
            "Whenever a table has more than two columns",
            "Never; 1:1 relationships are completely forbidden in SQL",
            "Only for tables that store numbers"
          ],
          c: 0,
          why: "Vertical partitioning into 1:1 tables optimizes memory caching and security boundaries."
        }
      ]
    },
    {
      n: 3,
      id: "many-to-many-relationships-and-junction-tables",
      title: "Many-to-many relationships and junction tables",
      topic: "Many-to-Many & Keys",
      anim: "Layers",
      lede: "Students have many courses; courses have many students. How do you model many-to-many relationships without breaking the relational model? Master junction tables.",
      winShort: "Design many-to-many relationships using junction tables with composite primary keys",
      missionLink: "The universal design pattern for representing multi-directional relationships",
      sec1: {
        title: "The many-to-many dilemma",
        content: `<p>In a <b>Many-to-Many (N:M)</b> relationship, entities on both sides can have multiple partners: an Article has multiple Tags, and a Tag applies to multiple Articles. Neither table can hold the foreign key without storing invalid arrays.</p><p>The relational solution is an intermediary <b>Junction Table</b> (also called a join or pivot table). The junction table decomposes one N:M relationship into <b>two 1:N relationships</b>: Article (1) &rarr; ArticleTags (N) &larr; (1) Tag.</p>`,
        keyIdea: "A junction table converts an impossible N:M relationship into two clean 1:N relationships."
      },
      predict: {
        q: "What columns must a junction table linking 'students' and 'courses' contain at minimum?",
        a: [
          "student_id and course_id (both as foreign keys referencing their respective tables)",
          "Only student_id",
          "The entire student name and course syllabus text duplicated",
          "A password column"
        ],
        c: 0,
        why: "A junction table links foreign keys from both participating parent tables."
      },
      sec2: {
        title: "The junction table architecture",
        content: `<p>Observe how the junction table bridges two entities while supporting relationship metadata.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Articles Table", lines: ["id: 1, title: 'Learn SQL'", "parent entity A"] },
          { title: "Article_Tags (Junction)", lines: ["article_id: 1, tag_id: 5", "composite PK: (article_id, tag_id)", "optional metadata: created_at"] },
          { title: "Tags Table", lines: ["id: 5, name: 'Databases'", "parent entity B"] }
        ]
      },
      sec3: {
        title: "Tracing junction table querying",
        content: `<p>Trace how a junction table allows querying all tags for an article in a single join.</p>`,
      },
      trace: {
        code: [
          "SELECT tags.name",
          "FROM tags",
          "JOIN article_tags ON tags.id = article_tags.tag_id",
          "WHERE article_tags.article_id = 42;"
        ],
        steps: [
          { line: 0, vars: { target: "fetch tag names" } },
          { line: 2, vars: { join: "connects tags to junction table" } },
          { line: 3, vars: { filter: "article_id = 42 yields tags: ['SQL', 'Databases', 'Web']" } }
        ]
      },
      practiceIntro: "Test your memory of many-to-many modeling.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The table used to resolve a many-to-many relationship is a <0> table.",
          "A primary key composed of multiple columns together is a <1> key.",
          "Additional columns on a junction table (e.g. enrolled_at) represent relationship <2>."
        ],
        blanks: [
          { a: ["junction", "join", "pivot"], why: "Junction tables mediate many-to-many associations." },
          { a: ["composite"], why: "Composite keys combine multiple foreign keys into a unique PK." },
          { a: ["metadata", "attributes"], why: "Junction tables can store attributes of the relationship itself." }
        ]
      },
      win: "You can design and query many-to-many relationships using junction tables with composite primary keys.",
      nextTasks: [
        "Create an articles, tags, and article_tags schema with composite primary key.",
        "Add a metadata column (like enrolled_at TIMESTAMP) to an enrollments junction table.",
        "Query all students enrolled in a specific course using an INNER JOIN through the junction table."
      ],
      primarySource: "Alan Beaulieu, *Learning SQL*, Chapter 10: 'Joins Revisited'.",
      quiz: [
        {
          q: "What should serve as the PRIMARY KEY of a junction table in clean relational design?",
          a: [
            "A composite primary key combining both foreign key columns: PRIMARY KEY (student_id, course_id)",
            "A random text string",
            "No primary key is permitted on junction tables",
            "The student name"
          ],
          c: 0,
          why: "A composite PK guarantees that a student cannot be enrolled in the exact same course twice."
        },
        {
          q: "Can a junction table store additional attributes besides foreign keys?",
          a: [
            "Yes, attributes that describe the relationship itself (e.g. role, created_at, grade) belong on the junction table",
            "No, junction tables are strictly limited to two columns only",
            "Only on Oracle databases",
            "Only if the attributes contain numbers"
          ],
          c: 0,
          why: "Junction tables often carry payload metadata describing the relationship (e.g. course grade)."
        },
        {
          q: "Why is an index essential on BOTH foreign key columns in a junction table?",
          a: [
            "To ensure fast queries in both directions: finding all tags for an article, AND finding all articles for a tag",
            "Because SQL crashes if both columns are not indexed",
            "To encrypt the data on disk",
            "Indexes are not needed on junction tables"
          ],
          c: 0,
          why: "Bidirectional lookups require indexing both (A, B) and (B) to avoid table scans."
        },
        {
          q: "What cascade deletion rule should usually be configured on a junction table's foreign keys?",
          a: [
            "ON DELETE CASCADE on both foreign keys so deleting either parent cleanly purges the junction link",
            "ON DELETE RESTRICT permanently",
            "ON DELETE NO ACTION",
            "ON DELETE SET NULL"
          ],
          c: 0,
          why: "If a student or course is deleted, the enrollment association should be deleted automatically."
        }
      ]
    },
    {
      n: 4,
      id: "surrogate-keys-versus-natural-keys",
      title: "Surrogate keys versus natural keys",
      topic: "Many-to-Many & Keys",
      anim: "Layers",
      lede: "Should you use email addresses and SSNs as primary keys, or auto-incrementing integers and UUIDs? Discover the trade-offs of surrogate versus natural keys.",
      winShort: "Select between surrogate IDs, natural keys, and UUIDs based on architectural requirements",
      missionLink: "Determines primary key durability and refactoring safety across schemas",
      sec1: {
        title: "The fragility of natural keys",
        content: `<p>A <b>Natural Key</b> is a unique attribute that exists in the real world: a social security number, an email address, or an ISBN. It seems tempting to use <code>email</code> as a primary key, but real-world data changes: users update their email addresses, companies rebrand, and typos happen.</p><p>If a natural key changes, every foreign key in dozens of child tables must be updated! A <b>Surrogate Key</b> (like an auto-incrementing <code>id SERIAL</code> or <code>UUID</code>) has zero business meaning: it never changes, isolating database structure from business reality.</p>`,
        keyIdea: "Natural keys change in the real world; surrogate keys never change, keeping relations stable."
      },
      predict: {
        q: "Why is using a user's email address as a Primary Key risky in relational database design?",
        a: [
          "Users occasionally change their email address, requiring expensive cascading updates across all foreign key tables",
          "Email addresses cannot be indexed by SQL databases",
          "Email addresses can only be stored on mobile phones",
          "The @ symbol is illegal in primary key columns"
        ],
        c: 0,
        why: "When a primary key mutates, every child record referencing it must be updated, risking deadlocks."
      },
      sec2: {
        title: "Surrogate key variants: Integers versus UUIDs",
        content: `<p>Compare auto-incrementing integers with globally unique UUID identifiers.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Integer (SERIAL / BIGINT)", lines: ["4 or 8 bytes (compact)", "fastest B-tree indexing", "leaks business volume (order #101)"] },
          { title: "UUID v4 (Random)", lines: ["16 bytes, globally unique", "safe for distributed generation", "causes B-tree index fragmentation"] },
          { title: "UUID v7 (Time-Ordered)", lines: ["combines timestamp + randomness", "fast B-tree indexing + global uniqueness!", "modern standard"] }
        ]
      },
      sec3: {
        title: "Tracing integer sequence leakage",
        content: `<p>Trace how sequential integer IDs reveal proprietary business metrics to competitors.</p>`,
      },
      trace: {
        code: [
          "# Competitor places order on Monday: receives order ID #1000",
          "# Competitor places order on Tuesday: receives order ID #1250",
          "# Deduction: 250 orders were placed in 24 hours!",
          "# Remedy: Use non-sequential UUIDs (e.g. UUIDv7) for external URLs"
        ],
        steps: [
          { line: 0, vars: { monday_order: "id: 1000" } },
          { line: 1, vars: { tuesday_order: "id: 1250" } },
          { line: 2, vars: { vulnerability: "business sales volume exposed to anyone who orders" } },
          { line: 3, vars: { fix: "use UUIDs for public facing identifiers" } }
        ]
      },
      practiceIntro: "Test your memory of key selection trade-offs.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "An artificial primary key with no business meaning is a <0> key.",
          "A real-world unique attribute (like an ISBN) is a <1> key.",
          "A 128-bit globally unique identifier is a <2>."
        ],
        blanks: [
          { a: ["surrogate"], why: "Surrogate keys isolate schemas from business edits." },
          { a: ["natural"], why: "Natural keys originate from domain attributes." },
          { a: ["UUID"], why: "UUID stands for Universally Unique Identifier." }
        ]
      },
      win: "You can choose the optimal primary key strategy, balancing indexing performance with privacy and stability.",
      nextTasks: [
        "Generate a UUID in PostgreSQL using gen_random_uuid().",
        "Explain why UUIDv7 is superior to UUIDv4 for database B-tree indexing.",
        "Ensure natural unique attributes (like email) have a UNIQUE constraint while using a surrogate PK."
      ],
      primarySource: "Bill Karwin, *SQL Antipatterns*, Chapter 4: 'Keyless Entry' & Chapter 5: 'Pseudokey Neat-Freak'.",
      quiz: [
        {
          q: "What is a surrogate primary key?",
          a: [
            "An artificial identifier (like an auto-incrementing ID or UUID) that has no business meaning and never changes",
            "A temporary key that expires after 24 hours",
            "A key used only during database software upgrades",
            "A key shared across multiple competing companies"
          ],
          c: 0,
          why: "Surrogate keys provide permanent, immutable identity divorced from real-world attribute changes."
        },
        {
          q: "Why do purely random UUIDv4 identifiers degrade database insert performance at scale?",
          a: [
            "Randomness scatters new rows across random B-tree leaf pages, causing heavy page splits and cache churn",
            "UUIDs cannot be stored on modern SSD drives",
            "Random numbers cause CPU processors to overheat",
            "UUIDs require manual compilation by developers"
          ],
          c: 0,
          why: "Random keys break sequential clustering, causing expensive random disk I/O during B-tree insertion."
        },
        {
          q: "What advantage does modern UUIDv7 offer over legacy UUIDv4?",
          a: [
            "It prefixes a Unix timestamp, making UUIDs time-ordered and friendly to B-tree indexes while staying unique",
            "It reduces the UUID size to 2 bytes",
            "It converts UUIDs into plain text English words",
            "It runs without needing an operating system"
          ],
          c: 0,
          why: "UUIDv7 embeds a millisecond timestamp, combining monotonic ordering with global uniqueness."
        },
        {
          q: "If you use a surrogate 'id' column, what should you do with a natural unique attribute like 'email'?",
          a: [
            "Add a UNIQUE constraint on the email column to prevent duplicates",
            "Leave the email column unconstrained",
            "Delete the email column",
            "Make email a foreign key"
          ],
          c: 0,
          why: "Surrogate keys supply identity, but unique constraints must still enforce domain business rules."
        }
      ]
    },
    {
      n: 5,
      id: "third-normal-form-3nf-and-transitive-dependencies",
      title: "Third normal form (3NF) and transitive dependencies",
      topic: "Normalization Forms & Anomalies",
      anim: "Layers",
      lede: "Every non-key attribute must depend on the key, the whole key, and nothing but the key. Master 1NF, 2NF, and 3NF to eliminate duplicate data and design flaws.",
      winShort: "Normalize messy relational schemas into Third Normal Form (3NF)",
      missionLink: "The core mathematical discipline for durable relational schema design",
      sec1: {
        title: "The three normal forms in plain English",
        content: `<p>Database normalization is a step-by-step process to eliminate redundant data. Bill Kent summarized it in one famous sentence: <i>'Every non-key attribute must provide a fact about the key, the whole key, and nothing but the key, so help me Codd.'</i></p><p><b>1NF (The Key):</b> All values are atomic; no repeating groups. <b>2NF (The Whole Key):</b> No partial dependencies on composite keys. <b>3NF (Nothing But the Key):</b> No transitive dependencies — columns cannot depend on other non-key columns.</p>`,
        keyIdea: "3NF ensures every non-key column depends solely on the primary key, eliminating redundancy."
      },
      predict: {
        q: "A table has columns: (order_id, user_id, user_email). What normal form violation exists?",
        a: [
          "3NF violation: user_email depends on user_id (a non-key), not on order_id",
          "1NF violation: user_id is not a number",
          "There is no violation; this schema is perfect",
          "2NF violation because order_id is too short"
        ],
        c: 0,
        why: "Transitive dependency: user_email depends on user_id; if user_id changes, email is duplicated."
      },
      sec2: {
        title: "The Normalization Ladder",
        content: `<p>Ascend the normalization ladder from unnormalized sheets to clean 3NF relations.</p>`,
      },
      diagram: {
        boxes: [
          { title: "1NF (Atomic)", lines: ["eliminate comma-separated lists", "ensure unique primary key"] },
          { title: "2NF (Whole Key)", lines: ["eliminate partial dependencies", "relevant for composite keys"] },
          { title: "3NF (Nothing But Key)", lines: ["eliminate transitive dependencies", "move user_email into users table!"] }
        ]
      },
      sec3: {
        title: "Tracing a 3NF decomposition",
        content: `<p>Trace how splitting a transitive dependency eliminates duplicate data across thousands of orders.</p>`,
      },
      trace: {
        code: [
          "# Un-normalized orders: (id, user_id, user_city, user_zip)",
          "# If Ada moves from London to Paris, we must UPDATE 500 order rows!",
          "# Decomposed into 3NF:",
          "# users table: (id, city, zip) -> update ONCE!",
          "# orders table: (id, user_id, total) -> zero redundant user data!"
        ],
        steps: [
          { line: 0, vars: { redundancy: "user_city repeated on every order" } },
          { line: 1, vars: { anomaly: "update anomaly risk if one row update fails" } },
          { line: 3, vars: { normalized_users: "city lives strictly in users table" } },
          { line: 4, vars: { normalized_orders: "orders references user_id only" } }
        ]
      },
      practiceIntro: "Test your memory of normalization forms.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The requirement that all column values must be atomic is <0>NF.",
          "When a column depends on another non-key column, it is a <1> dependency.",
          "Third Normal Form is abbreviated as <2>NF."
        ],
        blanks: [
          { a: ["1", "First"], why: "1NF mandates scalar atomic values." },
          { a: ["transitive"], why: "Transitive dependencies violate 3NF." },
          { a: ["3", "Third"], why: "3NF is the standard target for relational schemas." }
        ]
      },
      win: "You can audit and normalize any database schema into Third Normal Form to eliminate data redundancy.",
      nextTasks: [
        "Audit a table in your project to verify that no non-key column depends on another non-key column.",
        "Refactor a table with comma-separated values into a clean 1NF relationship.",
        "Recite the Bill Kent mnemonic: 'the key, the whole key, and nothing but the key'."
      ],
      primarySource: "William Kent, *A Simple Guide to Five Normal Forms in Relational Database Theory* (Communications of the ACM, 1983).",
      quiz: [
        {
          q: "What does First Normal Form (1NF) require?",
          a: [
            "Every column must hold atomic (indivisible) scalar values with no repeating arrays or comma lists, and each row must be uniquely identifiable",
            "Every table must have at least ten columns",
            "All text must be written in uppercase",
            "The database must run on a single computer"
          ],
          c: 0,
          why: "1NF eliminates repeating groups and enforces atomic data values."
        },
        {
          q: "What is a 'transitive dependency' in relational theory?",
          a: [
            "When column C depends on column B, which in turn depends on primary key A (A -> B -> C)",
            "When a query takes more than 10 seconds to execute",
            "When a foreign key references a table on another physical server",
            "When an SQL query contains more than three joins"
          ],
          c: 0,
          why: "Transitive dependencies violate 3NF because attribute C does not depend directly on the primary key."
        },
        {
          q: "What is the primary benefit of reaching Third Normal Form (3NF)?",
          a: [
            "Every fact is stored in exactly ONE place, eliminating update, insertion, and deletion anomalies",
            "The database uses fifty percent less internet bandwidth",
            "SQL queries no longer require WHERE clauses",
            "All numbers are automatically formatted as currency"
          ],
          c: 0,
          why: "Single-source-of-truth storage ensures updates can never leave data in inconsistent states."
        },
        {
          q: "Why does Second Normal Form (2NF) only matter for tables with composite primary keys?",
          a: [
            "If a primary key consists of a single column, partial dependency on 'part of the key' is mathematically impossible",
            "Because 2NF was deprecated in modern SQL",
            "Because composite keys cannot be indexed",
            "Because single-column keys violate 1NF"
          ],
          c: 0,
          why: "Partial key dependencies can only exist when the primary key comprises multiple columns."
        }
      ]
    },
    {
      n: 6,
      id: "data-anomalies-insertion-update-deletion",
      title: "Data anomalies: insertion, update, deletion",
      topic: "Normalization Forms & Anomalies",
      anim: "Layers",
      lede: "What happens when bad design corrupts your business records? Discover the three classic database anomalies and how normalized schemas protect data integrity.",
      winShort: "Identify and eliminate insertion, update, and deletion anomalies in unnormalized tables",
      missionLink: "Explains the concrete catastrophic consequences that normalization prevents",
      sec1: {
        title: "The three classic anomalies",
        content: `<p>When a database schema is not normalized, it falls victim to three classic data anomalies: <b>Update Anomaly</b> (changing a customer address requires updating 50 rows; if one update fails, the database has contradictory addresses).</p><p><b>Insertion Anomaly</b> (you cannot add a new course unless at least one student is enrolled). <b>Deletion Anomaly</b> (deleting the last student enrolled in a course accidentally erases the entire course from the database!).</p>`,
        keyIdea: "Unnormalized schemas cause update contradictions, insertion blocks, and accidental data loss."
      },
      predict: {
        q: "In an unnormalized table holding students and courses, what happens if the only student in 'Physics 101' drops the class?",
        a: [
          "Deleting the student's row deletes the entire existence of Physics 101 from the database (Deletion Anomaly)",
          "The database assigns a ghost student automatically",
          "The course is archived into a separate table",
          "A warning is printed in the server logs"
        ],
        c: 0,
        why: "When course details only exist on student enrollment rows, deleting the student deletes the course."
      },
      sec2: {
        title: "The anomaly trio",
        content: `<p>Understand how conflating two entities into one table triggers all three anomalies.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Update Anomaly", lines: ["data stored in multiple rows", "inconsistent updates cause contradictions"] },
          { title: "Insertion Anomaly", lines: ["cannot insert course without student", "forces fake dummy data"] },
          { title: "Deletion Anomaly", lines: ["deleting one entity accidentally", "destroys unrelated entity data"] }
        ]
      },
      sec3: {
        title: "Tracing an update anomaly",
        content: `<p>Trace how updating a customer's address in an unnormalized table produces inconsistent data.</p>`,
      },
      trace: {
        code: [
          "# Row 1: Order #1, User: Ada, Address: London",
          "# Row 2: Order #2, User: Ada, Address: London",
          "# UPDATE orders SET address = 'Paris' WHERE id = 1; # row 2 forgotten!",
          "# Inconsistent state: Where does Ada live? London or Paris? Contradiction!"
        ],
        steps: [
          { line: 0, vars: { initial: "address duplicated on every order" } },
          { line: 2, vars: { partial_update: "order 1 updated to Paris; order 2 remains London" } },
          { line: 3, vars: { corruption: "database contains conflicting truth for same user" } }
        ]
      },
      practiceIntro: "Test your recall of database anomalies.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Contradictory data resulting from partial edits is an <0> anomaly.",
          "Being unable to record a fact without creating dummy data is an <1> anomaly.",
          "Losing unrelated facts when removing a row is a <2> anomaly."
        ],
        blanks: [
          { a: ["update"], why: "Update anomalies cause contradictory records." },
          { a: ["insertion"], why: "Insertion anomalies block recording independent facts." },
          { a: ["deletion"], why: "Deletion anomalies cause accidental data destruction." }
        ]
      },
      win: "You can spot data anomalies in flawed schemas and refactor them into safe, normalized architectures.",
      nextTasks: [
        "Audit a spreadsheet and identify an update anomaly where data is repeated.",
        "Demonstrate a deletion anomaly by deleting a parent row in an unnormalized table.",
        "Refactor the table into two separate entities to eliminate all three anomalies."
      ],
      primarySource: "C.J. Date, *Database in Depth: Relational Theory for Practitioners*, Chapter 6: 'Redundancy and Anomalies'.",
      quiz: [
        {
          q: "What causes an update anomaly in a database table?",
          a: [
            "Data redundancy: the same fact is stored in multiple rows, so partial updates leave contradictory values",
            "The database server clock is out of sync",
            "The table contains more than 10,000 rows",
            "The user did not include a semicolon at the end of the query"
          ],
          c: 0,
          why: "When duplicate copies of data exist, updating some but not all creates conflicting records."
        },
        {
          q: "What is an insertion anomaly?",
          a: [
            "Being unable to insert an independent fact into a table without artificially inventing dummy data for an unrelated entity",
            "Inserting data into a table on a Saturday",
            "Inserting numbers into a text column",
            "A hardware write failure on an SSD drive"
          ],
          c: 0,
          why: "Conflating two entities forces developers to insert fake records to satisfy primary keys."
        },
        {
          q: "How does normalizing a schema into Third Normal Form resolve deletion anomalies?",
          a: [
            "Each entity lives in its own table, so deleting a child record does not delete the parent entity's definition",
            "It makes all DELETE queries illegal in the database",
            "It turns off the hard drive's ability to delete data",
            "It converts deleted rows into encrypted archives"
          ],
          c: 0,
          why: "Independent tables decouple entity lifecycles, ensuring deleting an enrollment preserves the course."
        },
        {
          q: "Which principle is the ultimate defense against all three data anomalies?",
          a: [
            "The Single Source of Truth: every fact is stored in exactly one place in the database",
            "Duplicating data across three backup tables in real time",
            "Writing all queries in Python instead of SQL",
            "Disabling foreign key constraints"
          ],
          c: 0,
          why: "When every fact lives in exactly one place, contradictions and accidental deletions become impossible."
        }
      ]
    },
    {
      n: 7,
      id: "schema-migrations-and-versioning",
      title: "Schema migrations and versioning",
      topic: "Anomalies & Denormalization",
      anim: "Layers",
      lede: "Code is versioned in git; how do you version a live database without losing data? Master evolutionary database migrations, up/down scripts, and non-blocking DDL.",
      winShort: "Design and execute reversible database schema migrations without downtime",
      missionLink: "Ensures database schemas evolve safely across production deployments",
      sec1: {
        title: "The problem of stateful migrations",
        content: `<p>If you break code, you can roll back your git commit in seconds. But a database is <b>stateful</b>: you cannot simply 'roll back' a table drop that deleted 5 million customer records.</p><p>Database changes must be managed via <b>Schema Migrations</b>: versioned, incremental, reversible scripts (like Alembic, Prisma, or Flyway) that transition database state from version N to N+1. Every migration has an <code>up</code> (apply change) and a <code>down</code> (revert change) script.</p>`,
        keyIdea: "Database schemas evolve through incremental, versioned, reversible migration scripts."
      },
      predict: {
        q: "Why is running 'ALTER TABLE users ADD COLUMN age INTEGER NOT NULL;' dangerous on a 10-million-row production table?",
        a: [
          "It fails because existing rows have no value for 'age', and it locks the table, blocking all application traffic",
          "It permanently corrupts the database indexes",
          "The column name 'age' is reserved by SQL",
          "It forces the database to shut down"
        ],
        c: 0,
        why: "Adding NOT NULL without a default to an existing table fails and locks the table during evaluation."
      },
      sec2: {
        title: "The migration lifecycle",
        content: `<p>Observe how migration tools track applied schema versions using a dedicated database table.</p>`,
      },
      diagram: {
        boxes: [
          { title: "schema_migrations Table", lines: ["version: 20261003_01", "applied_at: 2026-10-03 14:00:00"] },
          { title: "Pending Migration", lines: ["20261003_02_add_phone.sql", "engine compares with table"] },
          { title: "Execution", lines: ["runs inside transaction", "updates version upon success!"] }
        ]
      },
      sec3: {
        title: "Tracing the expand-and-contract pattern",
        content: `<p>Trace how a non-blocking column rename executes safely across multi-server deployments.</p>`,
      },
      trace: {
        code: [
          "# Step 1 (Expand): Add new column 'full_name' alongside legacy 'name'",
          "# Step 2: Code writes to BOTH columns; reads fallback from old",
          "# Step 3: Backfill historical rows from 'name' into 'full_name'",
          "# Step 4: Deploy code reading exclusively from 'full_name'",
          "# Step 5 (Contract): Drop legacy 'name' column cleanly!"
        ],
        steps: [
          { line: 0, vars: { phase_1: "add new column without breaking old code" } },
          { line: 2, vars: { phase_2: "backfill data asynchronously in background" } },
          { line: 4, vars: { phase_3: "safely drop legacy column once all servers updated" } }
        ]
      },
      practiceIntro: "Test your memory of database migration practices.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A versioned script applying an incremental schema change is a <0>.",
          "The migration script that reverts a change is the <1> script.",
          "Deploying changes in non-breaking phases is the expand-and-<2> pattern."
        ],
        blanks: [
          { a: ["migration"], why: "Migrations version database state evolution." },
          { a: ["down"], why: "Down scripts reverse migration changes." },
          { a: ["contract"], why: "Expand-and-contract enables zero-downtime schema evolution." }
        ]
      },
      win: "You can write reversible database migrations and evolve production schemas with zero user downtime.",
      nextTasks: [
        "Create an up/down migration script to add a nullable column to a table.",
        "Inspect the schema_migrations or alembic_version table in your database.",
        "Demonstrate rolling back a migration cleanly using the down script."
      ],
      primarySource: "Martin Fowler: *Evolutionary Database Design* (martinfowler.com/articles/evodb.html).",
      quiz: [
        {
          q: "What is the 'Expand and Contract' pattern in database schema migrations?",
          a: [
            "A zero-downtime deployment pattern: first expand the schema to support old and new code, then contract legacy elements later",
            "Compressing and uncompressing the database backup file",
            "Resizing the database memory cache dynamically",
            "A technique for deleting old database logs"
          ],
          c: 0,
          why: "Expand and contract ensures old and new application server versions can run simultaneously during deploys."
        },
        {
          q: "How does a migration tool (like Flyway or Alembic) know which migrations have already run?",
          a: [
            "It queries a dedicated tracking table (e.g. schema_migrations) stored directly inside the database",
            "It scans the local computer hard drive for text files",
            "It asks the database administrator via email",
            "It checks the computer git log commit messages"
          ],
          c: 0,
          why: "Migration runners inspect an internal tracking table to determine unapplied migration versions."
        },
        {
          q: "Why should database migrations always be wrapped in a transaction when supported?",
          a: [
            "If an intermediate DDL command fails, the transaction rolls back cleanly, avoiding a half-migrated broken state",
            "It speeds up internet connection bandwidth",
            "Transactions automatically format SQL in capital letters",
            "It prevents developers from making syntax errors"
          ],
          c: 0,
          why: "Transactional DDL (supported in PostgreSQL) prevents databases from getting stuck in half-applied states."
        },
        {
          q: "What should you do before dropping a column in a production database?",
          a: [
            "Ensure that zero active application servers or background workers reference that column in their queries",
            "Reboot all client computers",
            "Delete all indexes in the database",
            "Convert the column to a primary key"
          ],
          c: 0,
          why: "Dropping a column while older code is still querying it causes immediate 500 crashes."
        }
      ]
    },
    {
      n: 8,
      id: "intentional-denormalization-and-trade-offs",
      title: "Intentional denormalization and trade-offs",
      topic: "Anomalies & Denormalization",
      anim: "Layers",
      lede: "Normalization is for data correctness; denormalization is for read speed. Learn when, why, and how to intentionally introduce redundancy with eyes wide open.",
      winShort: "Evaluate and apply intentional denormalization strategies to solve proven query bottlenecks",
      missionLink: "Balances theoretical purity with real-world high-throughput performance",
      sec1: {
        title: "When 3NF meets high traffic",
        content: `<p>In pure 3NF, querying an article with its author, category, tags, and comment count requires joining five tables. At 50,000 queries per second, calculating <code>COUNT(comments.id)</code> on every page render will melt your database CPU.</p><p><b>Intentional Denormalization</b> is the deliberate introduction of duplicate data or precomputed values (such as adding a <code>cached_comment_count</code> directly onto the <code>articles</code> table). It is not sloppy design: it is an intentional trade-off that trades write complexity for instant $O(1)$ read speed.</p>`,
        keyIdea: "Denormalization trades write overhead and synchronization complexity for instant read performance."
      },
      predict: {
        q: "What is the primary risk introduced when adding a 'cached_comment_count' column to an articles table?",
        a: [
          "The cached count can get out of sync with the actual number of comments if insert/delete logic has bugs",
          "The database will automatically delete the comments table",
          "SQL queries will become illegal syntax",
          "The computer screen will display numbers in reverse"
        ],
        c: 0,
        why: "Redundancy creates synchronization responsibility: every insert and delete must maintain the counter."
      },
      sec2: {
        title: "Common denormalization patterns",
        content: `<p>Understand the standard techniques for optimizing high-throughput read operations.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Cached Counters", lines: ["posts.comment_count", "updated via database trigger or app transaction", "eliminates expensive COUNT() queries"] },
          { title: "Materialized Views", lines: ["precomputed snapshot of complex joins", "refreshed periodically in background"] },
          { title: "Snapshot Duplication", lines: ["saving price_at_purchase on order_items", "historical audit stability; intentional redundancy"] }
        ]
      },
      sec3: {
        title: "Tracing snapshot data preservation",
        content: `<p>Trace why an order must intentionally copy the product price rather than referencing the live catalog.</p>`,
      },
      trace: {
        code: [
          "# Product Catalog: Book price = $20",
          "# Ada buys Book today -> order_items copies price_cents = 2000",
          "# Next month: Publisher raises Book price to $30 in catalog",
          "# Ada's past invoice still displays $20! (Intentional snapshot redundancy preserves legal truth)"
        ],
        steps: [
          { line: 0, vars: { catalog_price: "$20" } },
          { line: 1, vars: { order_snapshot: "price copied permanently to order_items row" } },
          { line: 2, vars: { catalog_change: "live product price updated to $30" } },
          { line: 3, vars: { historical_integrity: "past invoice remains legally accurate at $20" } }
        ]
      },
      practiceIntro: "Test your memory of denormalization trade-offs.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The deliberate reintroduction of redundancy for performance is <0>.",
          "A precomputed cached query stored as a table is a <1> view.",
          "Denormalization improves read speed at the expense of <2> complexity."
        ],
        blanks: [
          { a: ["denormalization"], why: "Denormalization trades redundancy for speed." },
          { a: ["materialized"], why: "Materialized views persist query results on disk." },
          { a: ["write"], why: "Writes must now update multiple redundant locations." }
        ]
      },
      win: "You can make disciplined engineering decisions to denormalize specific bottlenecks while maintaining strict synchronization safeguards.",
      nextTasks: [
        "Identify an expensive COUNT() query in your application that could benefit from a cached counter.",
        "Create a Materialized View in PostgreSQL and refresh it using REFRESH MATERIALIZED VIEW.",
        "Ensure your order invoice schemas copy product prices as immutable historical snapshots."
      ],
      primarySource: "Bill Karwin, *SQL Antipatterns*, Chapter 10: 'Phantom Files' & Chapter 21: 'Cryptic Column'.",
      quiz: [
        {
          q: "When is denormalization justified in professional software engineering?",
          a: [
            "Only when real-world production performance measurements prove a specific normalized query is a bottleneck",
            "At the very beginning of a project before writing any code",
            "Whenever you want to avoid writing SQL joins",
            "Only on databases with fewer than 100 users"
          ],
          c: 0,
          why: "Premature denormalization introduces bugs; only optimize when real metrics justify the trade-off."
        },
        {
          q: "Why is copying 'price_at_purchase' into an order_items table considered a necessary denormalization?",
          a: [
            "It preserves historical financial truth: if the catalog price changes next year, past invoices remain accurate",
            "Because SQL databases forbid referencing product tables from orders",
            "It saves hard drive storage space",
            "It prevents the server from needing memory"
          ],
          c: 0,
          why: "Historical snapshots are business requirements: past financial records must not mutate when prices change."
        },
        {
          q: "What is a Materialized View?",
          a: [
            "A query result physically computed and stored on disk like a table, refreshed on a periodic schedule",
            "A 3D virtual reality display for database administrators",
            "A view that deletes all data after twenty seconds",
            "A visual chart showing database CPU usage"
          ],
          c: 0,
          why: "Materialized views persist precalculated complex joins to provide instant read performance."
        },
        {
          q: "What mechanism is commonly used inside databases to keep denormalized counters synchronized automatically?",
          a: [
            "Database Triggers (executing trigger functions on INSERT or DELETE)",
            "Cron jobs running once per month",
            "Sending emails to database users",
            "Manual daily spreadsheets"
          ],
          c: 0,
          why: "Triggers run automatically on table mutations, guaranteeing redundant counters update atomically."
        }
      ]
    }
  ]
};

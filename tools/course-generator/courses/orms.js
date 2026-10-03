"use strict";

module.exports = {
  id: "orms",
  title: "ORMs & Database Abstraction",
  num: 37,
  emoji: "🧰",
  desc: "Mapping objects to tables, migrations and the trade-offs of letting a library write your SQL.",
  mission: `# Mission — ORMs & Database Abstraction

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
`,
  notes: `# Notes — ORMs & Database Abstraction

## Decisions
- Group into four themes: The Impedance Mismatch & Patterns, The N+1 Problem & Eager Loading, The Unit of Work & Identity Map, and Migrations & Trade-offs.
- Illustrate concepts with universal patterns found across SQLAlchemy, Prisma, and Hibernate.
`,
  resources: `# Resources — ORMs & Database Abstraction

## Knowledge (primary sources)
- Martin Fowler, *Patterns of Enterprise Application Architecture* (Addison-Wesley, Chapters on Object-Relational Mapping).
- Ted Neward, *The Vietnam of Computer Science* (Classic essay on the Object-Relational Impedance Mismatch).
- SQLAlchemy Documentation: *The Unit of Work and Identity Map Architecture*.

## Wisdom
- An ORM does not eliminate SQL; it generates SQL. If you cannot read the SQL your ORM produces, you cannot debug your application.
`,
  cheatsheetSections: [
    {
      title: "Data Mapper vs Active Record",
      label: "Architectural patterns compared",
      code: `// Active Record (Ruby on Rails, Django models)
// Model carries both business data AND database query methods
user = User.find(42)
user.save()

// Data Mapper (SQLAlchemy, Prisma, Hibernate)
// Domain model is pure data; separate Repository/Session handles I/O
user = session.get(User, 42)
user.email = "new@example.com"
session.commit()`,
      lessonN: 2,
      lessonSlug: "active-record-versus-data-mapper",
      lessonTitle: "Active Record versus Data Mapper"
    },
    {
      title: "Fixing the N+1 Query Problem",
      label: "Eager loading patterns",
      code: `-- The N+1 Disaster:
SELECT * FROM users;            -- 1 query (returns 100 users)
-- Then in a loop:
SELECT * FROM orders WHERE user_id = 1; -- N queries! (100 extra round-trips)

-- The Fix: Eager Loading (SQLAlchemy / Prisma)
-- SQLAlchemy: select(User).options(joinedload(User.orders))
-- Emits: SELECT * FROM users LEFT JOIN orders ON ... (1 query!)`,
      lessonN: 3,
      lessonSlug: "the-n-plus-1-query-problem-and-eager-loading",
      lessonTitle: "The N+1 query problem and eager loading"
    },
    {
      title: "Identity Map Pattern",
      label: "In-memory entity deduplication",
      code: `// Both queries fetch User #42 within the same transaction session:
const userA = session.get(User, 42);
const userB = session.get(User, 42);

// Identity Map guarantees identical memory reference!
assert(userA === userB); // TRUE! Zero duplicate query overhead.`,
      lessonN: 5,
      lessonSlug: "unit-of-work-and-the-identity-map",
      lessonTitle: "Unit of Work and the Identity Map"
    },
    {
      title: "When to Drop to Raw SQL",
      label: "Performance escape hatch",
      code: `-- Complex reporting, bulk updates, and window functions:
-- Do NOT instantiate 100,000 ORM objects into memory!
-- Use raw parameterized queries or query builders:
UPDATE accounts SET balance = balance * 1.05 WHERE active = true;`,
      lessonN: 8,
      lessonSlug: "when-to-use-an-orm-and-when-to-use-raw-sql",
      lessonTitle: "When to use an ORM and when to use raw SQL"
    }
  ],
  glossaryGroups: [
    {
      id: "orm-foundations",
      title: "The Impedance Mismatch & Patterns",
      terms: [
        { term: "ORM", def: "Object-Relational Mapping: software library converting data between relational tables and object-oriented models.", lesson: 1, tags: ["orm"] },
        { term: "Impedance mismatch", def: "The fundamental conceptual mismatch between object-oriented models (graphs, inheritance) and relational sets.", lesson: 1, tags: ["theory"] },
        { term: "Active Record", def: "An architectural pattern where an entity class encapsulates both database access and domain business logic.", lesson: 2, tags: ["patterns"] },
        { term: "Data Mapper", def: "An architectural pattern isolating pure domain models from database persistence mechanics via a separate mapper.", lesson: 2, tags: ["patterns"] }
      ]
    },
    {
      id: "query-performance",
      title: "The N+1 Problem & Loading",
      terms: [
        { term: "N+1 query problem", def: "A severe performance antipattern where fetching a collection of N items triggers N additional queries for child data.", lesson: 3, tags: ["performance"] },
        { term: "Lazy loading", def: "An ORM pattern deferring the database loading of related child entities until the property is first accessed.", lesson: 3, tags: ["orm"] },
        { term: "Eager loading", def: "A pattern fetching parent and child entities together upfront using a JOIN or prefetch to avoid N+1 queries.", lesson: 3, tags: ["performance"] },
        { term: "Query logging", def: "A configuration mode in ORMs printing the exact underlying SQL statements emitted to the database.", lesson: 4, tags: ["debugging"] }
      ]
    },
    {
      id: "unit-of-work",
      title: "Unit of Work & Identity Map",
      terms: [
        { term: "Unit of Work", def: "A pattern maintaining a list of objects affected by a business transaction and coordinating write flushes atomically.", lesson: 5, tags: ["patterns"] },
        { term: "Identity Map", def: "An in-memory registry ensuring each database record is loaded into exactly one object instance per session.", lesson: 5, tags: ["patterns"] },
        { term: "Dirty checking", def: "The automatic detection of modified object attributes by comparing current state against original loaded state.", lesson: 5, tags: ["orm"] },
        { term: "Session flush", def: "The moment an ORM translates in-memory object mutations into pending SQL INSERT, UPDATE, and DELETE statements.", lesson: 5, tags: ["orm"] }
      ]
    },
    {
      id: "migrations-tradeoffs",
      title: "Migrations & Trade-offs",
      terms: [
        { term: "Automated migration", def: "Tool-assisted generation of schema migration files by comparing ORM model code against database schemas.", lesson: 7, tags: ["migrations"] },
        { term: "Query builder", def: "A programmatic, chainable interface (like Knex or Kysely) constructing SQL queries without full ORM overhead.", lesson: 8, tags: ["tooling"] },
        { term: "Object inflation", def: "The CPU and memory overhead of instantiating hundreds of heavy class instances from raw database rows.", lesson: 8, tags: ["performance"] },
        { term: "Bulk update", def: "An SQL operation updating thousands of rows in a single query without inflating each row into an in-memory object.", lesson: 8, tags: ["sql"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "the-object-relational-impedance-mismatch",
      title: "The Object-Relational Impedance Mismatch",
      topic: "The Impedance Mismatch & Patterns",
      anim: "Tools",
      lede: "Why is mapping objects to tables so painful? Discover the Object-Relational Impedance Mismatch: relational sets versus object graphs, pointers, and inheritance.",
      winShort: "Articulate the fundamental structural differences between relational sets and object graphs",
      missionLink: "Explains why every ORM involves fundamental design trade-offs",
      sec1: {
        title: "Two different mental models",
        content: `<p>Object-Oriented Programming (OOP) and Relational Databases (RDBMS) were designed for two completely different purposes based on different mathematical paradigms. This tension is known as the <b>Object-Relational Impedance Mismatch</b>.</p><p>Objects have <b>identity and memory pointers</b>; relational tables have <b>keys and values</b>. Objects use <b>encapsulation and inheritance</b>; relational databases use <b>normalization and foreign keys</b>. An ORM is a bridge over this chasm, but the bridge is never completely seamless.</p>`,
        keyIdea: "OOP deals with bidirectional pointer graphs; relational databases deal with normalized sets and foreign keys."
      },
      predict: {
        q: "How does a standard relational database represent class inheritance (e.g. Employee extends Person)?",
        a: [
          "Relational databases have no native concept of inheritance; tables must emulate it via single-table or joined-table patterns",
          "Relational databases have native 'extends' keywords on tables",
          "Inheritance is completely forbidden in database applications",
          "Tables inherit columns automatically over Wi-Fi"
        ],
        c: 0,
        why: "Relational theory has no concept of OOP subclassing; schemas must emulate it through design patterns."
      },
      sec2: {
        title: "The core mismatches",
        content: `<p>Examine the four fundamental fault lines between object models and relational schemas.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Identity", lines: ["Objects: memory reference (a === b)", "Relational: primary key value (id = 42)"] },
          { title: "Navigation", lines: ["Objects: follow pointers (user.orders)", "Relational: declarative joins (JOIN ON)"] },
          { title: "Inheritance", lines: ["Objects: subclasses, polymorphism", "Relational: flat rectangular tables"] }
        ]
      },
      sec3: {
        title: "Tracing pointer navigation versus SQL joins",
        content: `<p>Trace how accessing an object property triggers an unexpected secondary network query.</p>`,
      },
      trace: {
        code: [
          "user = session.get(User, 1); # Emits: SELECT * FROM users WHERE id = 1",
          "# In memory, user.orders is an unloaded proxy pointer",
          "print(user.orders); # Surprise! Accessing property triggers hidden query:",
          "# Emits: SELECT * FROM orders WHERE user_id = 1"
        ],
        steps: [
          { line: 0, vars: { initial_fetch: "user object loaded from database" } },
          { line: 2, vars: { proxy_trap: "accessing property looks like reading memory, but executes network I/O" } },
          { line: 3, vars: { hidden_sql: "secondary SQL query executed implicitly behind the scenes" } }
        ]
      },
      practiceIntro: "Test your memory of the impedance mismatch.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The friction between objects and relational tables is the <0> mismatch.",
          "The library bridging objects and database tables is an <1>.",
          "Relational databases operate on mathematical <2> theory."
        ],
        blanks: [
          { a: ["impedance"], why: "Impedance mismatch describes the paradigm clash." },
          { a: ["ORM"], why: "ORM stands for Object-Relational Mapping." },
          { a: ["set"], why: "Relational databases are grounded in mathematical set theory." }
        ]
      },
      win: "You can identify the architectural boundaries between object models and relational tables and avoid naive mapping assumptions.",
      nextTasks: [
        "Map a class hierarchy (Vehicle -> Car, Truck) into relational table designs.",
        "Observe how an ORM represents a many-to-many relationship using an entity collection.",
        "Read Ted Neward's classic essay *The Vietnam of Computer Science*."
      ],
      primarySource: "Ted Neward: *The Vietnam of Computer Science* (Neward & Associates, 2006).",
      quiz: [
        {
          q: "What is the 'Object-Relational Impedance Mismatch'?",
          a: [
            "The fundamental conceptual difficulty of mapping object-oriented models (classes, references, inheritance) into relational tables (rows, columns, foreign keys)",
            "A hardware failure when connecting database cables",
            "An error that happens when an SQL query is too long",
            "A security vulnerability in password hashing"
          ],
          c: 0,
          why: "It describes the deep paradigm conflict between object-oriented programming and relational set theory."
        },
        {
          q: "How does an ORM typically represent a 1:N relationship in an object model?",
          a: [
            "The parent object holds an in-memory collection or list of child objects, such as user.orders",
            "The parent object stores a foreign key integer",
            "The parent object deletes the child objects",
            "Objects cannot represent relationships"
          ],
          c: 0,
          why: "OOP represents relationships as collections of references, contrasting with relational foreign keys."
        },
        {
          q: "Why is 'lazy loading' dangerous if developers are unaware it is happening?",
          a: [
            "Accessing a property in a loop unexpectedly fires hundreds of individual database network queries (N+1 problem)",
            "Lazy loading deletes records from the database table",
            "Lazy loading is forbidden by web browser security rules",
            "It turns off database backups"
          ],
          c: 0,
          why: "Property access looks like reading memory, hiding the fact that it is triggering database network calls."
        },
        {
          q: "What is the 'Single Table Inheritance' pattern in ORM mapping?",
          a: [
            "All subclasses in an inheritance hierarchy are stored in a single table, using a 'type' discriminator column",
            "Every table in the database is merged into one gigantic table",
            "Tables can only have a single row",
            "Inheritance is handled by duplicating the database"
          ],
          c: 0,
          why: "Single Table Inheritance stores all subclass fields in one table with a discriminator column."
        }
      ]
    },
    {
      n: 2,
      id: "active-record-versus-data-mapper",
      title: "Active Record versus Data Mapper",
      topic: "The Impedance Mismatch & Patterns",
      anim: "Tools",
      lede: "How should an ORM be structured? Compare the Active Record pattern (Django, Rails) with the Data Mapper pattern (SQLAlchemy, Prisma, Hibernate).",
      winShort: "Contrast Active Record and Data Mapper architectures and select the right tool for your project",
      missionLink: "Guides framework selection and domain model architecture",
      sec1: {
        title: "Two competing ORM philosophies",
        content: `<p>In Martin Fowler's <i>Patterns of Enterprise Application Architecture</i>, two distinct ORM patterns emerged: <b>Active Record</b> and <b>Data Mapper</b>.</p><p>In <b>Active Record</b> (Ruby on Rails, Django models), the entity class <i>knows how to save itself</i>: <code>user = User.find(1); user.save()</code>. It is simple, rapid to build, and tightly couples domain logic to the database. In <b>Data Mapper</b> (SQLAlchemy, Hibernate, Prisma), the domain model is pure data; a separate <code>Session</code> or <code>EntityManager</code> handles all database I/O.</p>`,
        keyIdea: "Active Record models save themselves; Data Mapper keeps domain models pure and delegates I/O to a session."
      },
      predict: {
        q: "Which pattern provides cleaner separation of concerns for complex enterprise domain logic: Active Record or Data Mapper?",
        a: [
          "Data Mapper, because domain model classes have zero knowledge of or dependency on the database",
          "Active Record, because all code lives in one giant class",
          "Neither, they are identical patterns",
          "Only raw SQL can provide separation of concerns"
        ],
        c: 0,
        why: "Data Mapper decouples business entities from persistence, enabling clean domain modeling."
      },
      sec2: {
        title: "Active Record versus Data Mapper architecture",
        content: `<p>Observe the architectural difference between coupled persistence and isolated domain models.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Active Record (Coupled)", lines: ["class User inherits Model", "user.save(), user.delete()", "fast prototyping, tight coupling"] },
          { title: "Data Mapper (Decoupled)", lines: ["class User (pure domain data)", "Session / Repository handles I/O", "session.add(user); session.commit();"] }
        ]
      },
      sec3: {
        title: "Tracing Data Mapper session persistence",
        content: `<p>Trace how a Data Mapper session tracks modified entities and flushes changes in a batch.</p>`,
      },
      trace: {
        code: [
          "user = session.get(User, 42); # pure domain instance",
          "user.email = 'new@example.com'; # modify property in memory",
          "# No SQL emitted yet! Session tracks user as 'dirty'",
          "session.commit(); # Session emits UPDATE users SET email = ... WHERE id = 42"
        ],
        steps: [
          { line: 0, vars: { loaded: "user entity loaded into session identity map" } },
          { line: 1, vars: { mutated: "memory property changed; zero network I/O" } },
          { line: 3, vars: { flush: "commit() flushes all dirty changes in an atomic transaction" } }
        ]
      },
      practiceIntro: "Test your memory of ORM patterns.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The pattern where models contain save() and find() methods is Active <0>.",
          "The pattern keeping models decoupled from database I/O is Data <1>.",
          "The architectural author who documented these patterns is Martin <2>."
        ],
        blanks: [
          { a: ["Record"], why: "Active Record couples models to database tables." },
          { a: ["Mapper"], why: "Data Mapper isolates domain models from persistence." },
          { a: ["Fowler"], why: "Martin Fowler authored Patterns of Enterprise Application Architecture." }
        ]
      },
      win: "You can articulate the architectural trade-offs between rapid Active Record prototyping and scalable Data Mapper decoupling.",
      nextTasks: [
        "Inspect an Active Record model (e.g. in Django or Rails) and identify persistence methods.",
        "Inspect a Data Mapper model (e.g. in SQLAlchemy or Prisma) and observe its pure data structure.",
        "Explain to a peer why Data Mapper models are easier to unit test without database mocks."
      ],
      primarySource: "Martin Fowler, *Patterns of Enterprise Application Architecture*, Chapter 10: 'Data Mapper' & 'Active Record'.",
      quiz: [
        {
          q: "What is the defining characteristic of the Active Record pattern?",
          a: [
            "An object wraps a single database row, and its class contains database query and persistence methods (e.g. user.save())",
            "It only works on active internet connections",
            "It records sound audio files inside the database",
            "It automatically logs all queries to a public website"
          ],
          c: 0,
          why: "In Active Record, the model class represents both database access and domain data."
        },
        {
          q: "What is the primary advantage of the Data Mapper pattern over Active Record?",
          a: [
            "It decouples business domain logic from database persistence, allowing models to be tested and refactored independently of SQL tables",
            "It eliminates the need for database indexes",
            "It runs on client mobile web browsers without a server",
            "It converts Python models into C++ binaries"
          ],
          c: 0,
          why: "Data Mapper enforces strict separation of concerns, keeping domain models independent of database schemas."
        },
        {
          q: "Which popular framework famously popularized the Active Record pattern?",
          a: [
            "Ruby on Rails (ActiveRecord) and Django (django.db.models)",
            "PostgreSQL core server",
            "React.js",
            "Docker Containers"
          ],
          c: 0,
          why: "Ruby on Rails and Django are the most famous practitioners of the Active Record pattern."
        },
        {
          q: "Why are Data Mapper models easier to unit test than Active Record models?",
          a: [
            "Data Mapper models are plain in-memory objects that do not attempt to connect to a real database when instantiated",
            "Data Mapper models have built-in unit test runners",
            "Active Record models cannot be used in Python",
            "Data Mapper models are written in JSON"
          ],
          c: 0,
          why: "Active Record models often attempt database connection on instantiation, making unit testing difficult."
        }
      ]
    },
    {
      n: 3,
      id: "the-n-plus-1-query-problem-and-eager-loading",
      title: "The N+1 query problem and eager loading",
      topic: "The N+1 Problem & Loading",
      anim: "Tools",
      lede: "The #1 performance killer in modern web applications. Discover why lazy loading turns a single page render into 500 individual database queries, and how to fix it with eager loading.",
      winShort: "Diagnose and eliminate N+1 query storms using eager loading and joined loads",
      missionLink: "The single most common database performance bug in web application development",
      sec1: {
        title: "The accidental query storm",
        content: `<p>Consider rendering a list of 100 blog posts with their author names. You query all posts: <code>posts = Post.all()</code> (<b>1 query</b>). Then in your template loop, you write: <code>for p in posts: print(p.author.name)</code>.</p><p>Because <code>author</code> is lazy-loaded, the ORM fires a separate query <b>for every single post</b>: <code>SELECT * FROM authors WHERE id = ?</code>. 1 initial query + 100 author queries = <b>101 queries (N+1)</b>! A page that should take 5ms now takes 2 seconds.</p>`,
        keyIdea: "The N+1 problem occurs when lazy-loading related entities inside a loop, firing N extra queries."
      },
      predict: {
        q: "If an endpoint fetches 250 orders and accesses 'order.customer.email' in a loop with lazy loading, how many total queries are sent to the database?",
        a: [
          "251 queries (1 query for orders + 250 individual queries for customers)",
          "1 query",
          "2 queries",
          "250 queries"
        ],
        c: 0,
        why: "1 query to fetch the 250 orders, plus 250 individual queries to fetch each customer = 251 queries."
      },
      sec2: {
        title: "Lazy loading versus Eager loading",
        content: `<p>Contrast lazy query storms with high-performance eager loading strategies.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Lazy Loading (N+1 Storm)", lines: ["SELECT * FROM posts;", "100 iterations -> 100 x SELECT FROM authors", "101 network round-trips!"] },
          { title: "Eager Joined (1 Query)", lines: ["SELECT * FROM posts LEFT JOIN authors ON...", "fetches posts and authors in ONE query!", "1 network round-trip!"] },
          { title: "Eager Subquery (2 Queries)", lines: ["SELECT * FROM posts;", "SELECT * FROM authors WHERE id IN (1, 2, 3...)", "2 network round-trips total!"] }
        ]
      },
      sec3: {
        title: "Tracing the N+1 fix with joinedload",
        content: `<p>Trace how instructing the ORM to eager load collapses 101 queries down to a single JOIN.</p>`,
      },
      trace: {
        code: [
          "# Bad: Post.query.all() -> 101 queries in template loop",
          "# Fixed with Eager Loading (SQLAlchemy):",
          "query = select(Post).options(joinedload(Post.author))",
          "posts = session.scalars(query).all()",
          "# Emits strictly 1 query: SELECT posts.*, authors.* FROM posts JOIN authors..."
        ],
        steps: [
          { line: 0, vars: { problem: "101 queries saturates connection pool" } },
          { line: 2, vars: { fix: "joinedload option instructs ORM to fetch relation upfront" } },
          { line: 4, vars: { executed: "single optimized JOIN query executed in 4ms" } }
        ]
      },
      practiceIntro: "Test your memory of the N+1 query problem.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Fetching child entities on-demand inside a loop causes the N+<0> problem.",
          "Loading related data upfront in a single query is <1> loading.",
          "Deferring data loading until property access is <2> loading."
        ],
        blanks: [
          { a: ["1", "one"], why: "N+1 query problem is the universal terminology." },
          { a: ["eager"], why: "Eager loading loads related records upfront." },
          { a: ["lazy"], why: "Lazy loading waits until property access." }
        ]
      },
      win: "You can detect N+1 query storms in application logs and eliminate them using eager loading joins or prefetching.",
      nextTasks: [
        "Enable SQL logging in your ORM to observe the queries emitted during a page render.",
        "Identify an N+1 query loop and fix it using eager loading (joinedload, select_related, or include).",
        "Install an automated N+1 detection tool (like django-debug-toolbar or bullet gem)."
      ],
      primarySource: "Martin Fowler, *Patterns of Enterprise Application Architecture*, Chapter 11: 'Lazy Load'.",
      quiz: [
        {
          q: "What is the root cause of the N+1 query problem?",
          a: [
            "Looping over N parent entities and accessing a lazy-loaded relationship property on each item, triggering N individual queries",
            "Writing an SQL query that contains the number 1",
            "A database server running out of disk space",
            "Using PostgreSQL instead of MySQL"
          ],
          c: 0,
          why: "Lazy loading triggers a separate network query for each element in the loop."
        },
        {
          q: "How does 'joined loading' solve the N+1 problem?",
          a: [
            "It generates a single SQL query using an INNER or LEFT JOIN to retrieve parent and child records together in one round-trip",
            "It cancels all child queries and returns empty objects",
            "It speeds up the computer processor clock speed",
            "It caches queries in the client web browser"
          ],
          c: 0,
          why: "Joined eager loading fetches parents and children in a single SQL statement."
        },
        {
          q: "What is 'subquery / prefetch loading' in ORMs (e.g. select_related vs prefetch_related)?",
          a: [
            "It executes 2 queries total: one query for parents, and one query fetching all related children using 'WHERE id IN (...)', then stitches them in memory",
            "It runs fifty queries in parallel",
            "It converts SQL into JSON format",
            "It deletes duplicate records"
          ],
          c: 0,
          why: "Prefetch loading runs 2 queries total, avoiding massive duplicate column data on 1:N joins."
        },
        {
          q: "Why can the N+1 query problem slip past developers unnoticed in local testing?",
          a: [
            "Local databases run on localhost with 0ms network latency and small datasets; in production, 100 network round-trips cause massive lag",
            "Local databases do not execute SQL queries",
            "Local databases automatically disable lazy loading",
            "N+1 only happens on mobile phones"
          ],
          c: 0,
          why: "Zero latency on localhost hides hundreds of sequential round-trips until deployed across real networks."
        }
      ]
    },
    {
      n: 4,
      id: "query-logging-and-inspecting-emitted-sql",
      title: "Query logging and inspecting emitted SQL",
      topic: "The N+1 Problem & Loading",
      anim: "Tools",
      lede: "Never trust an ORM blindly. Learn how to configure SQL query logging, read the emitted SQL statements, and identify hidden performance disasters.",
      winShort: "Enable SQL logging in ORMs and evaluate emitted statements for inefficiencies",
      missionLink: "The essential debugging practice for validating ORM behavior",
      sec1: {
        title: "Peeking behind the magic curtain",
        content: `<p>An ORM is a code generator: you write high-level method calls, and the ORM translates them into SQL strings sent over the wire. If you never look at those SQL strings, you are flying blind.</p><p>Every professional developer enables <b>SQL Query Logging</b> in development. By watching your terminal console, you instantly spot redundant queries, missing indexes, Cartesian product joins, and columns selected that you never use.</p>`,
        keyIdea: "Always enable SQL query logging in development: inspect what the ORM is actually emitting."
      },
      predict: {
        q: "What does setting 'echo=True' in SQLAlchemy or 'DEBUG = True' in Django ORM do?",
        a: [
          "Prints every raw SQL query and execution parameter directly to the terminal stdout console",
          "Deletes all database tables",
          "Doubles the speed of the queries",
          "Turns off all database security checks"
        ],
        c: 0,
        why: "echo=True enables real-time SQL statement logging to stdout."
      },
      sec2: {
        title: "What to look for in ORM logs",
        content: `<p>Learn the three common red flags to look for when inspecting emitted SQL logs.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Query Storms (N+1)", lines: ["repeating identical queries", "SELECT FROM authors WHERE id = ?"] },
          { title: "Giant Projections", lines: ["selecting 40 columns including TEXT/BLOBs", "when you only needed 'name'"] },
          { title: "Missing Transactions", lines: ["multiple individual auto-commit writes", "instead of one batched transaction"] }
        ]
      },
      sec3: {
        title: "Tracing query emission in terminal logs",
        content: `<p>Trace how a single ORM call prints its compiled SQL query and bound parameters.</p>`,
      },
      trace: {
        code: [
          "# Python code: session.query(User).filter_by(email='ada@example.com').first()",
          "# Terminal Log Output:",
          "INFO:sqlalchemy.engine:SELECT users.id, users.name, users.email",
          "FROM users WHERE users.email = %(email_1)s LIMIT 1",
          "INFO:sqlalchemy.engine:[generated in 0.00042s] {'email_1': 'ada@example.com'}"
        ],
        steps: [
          { line: 0, vars: { code: "high-level ORM method invoked" } },
          { line: 2, vars: { emitted_sql: "verified query structure and column projection" } },
          { line: 4, vars: { parameterized_binding: "verified value passed via safe parameter, preventing SQL injection" } }
        ]
      },
      practiceIntro: "Test your memory of ORM debugging habits.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Printing all emitted database queries to the console is query <0>.",
          "In SQLAlchemy, enabling SQL logging uses the engine parameter <1>=True.",
          "Inspecting logs ensures ORMs use <2> bindings to prevent SQL injection."
        ],
        blanks: [
          { a: ["logging"], why: "Query logging displays real-time SQL execution." },
          { a: ["echo"], why: "create_engine(..., echo=True) prints SQL." },
          { a: ["parameterized", "parameter"], why: "Parameterized bindings prevent SQL injection." }
        ]
      },
      win: "You can configure SQL logging, inspect emitted queries, and catch performance bottlenecks before code reaches production.",
      nextTasks: [
        "Enable echo=True in your local ORM configuration and watch the queries generated by your app.",
        "Identify an endpoint that emits more than 10 SQL queries for a single HTTP request.",
        "Verify that your ORM parameterizes variables rather than string-concatenating them."
      ],
      primarySource: "SQLAlchemy Documentation: *Configuring Logging* (docs.sqlalchemy.org/en/20/core/engines.html#configuring-logging).",
      quiz: [
        {
          q: "Why should SQL query logging be disabled or restricted in production environments?",
          a: [
            "Logging every query produces massive disk I/O log volume and risks logging sensitive customer personal data or passwords",
            "It turns off database encryption",
            "It causes the database server to shut down",
            "SQL logging is illegal in production"
          ],
          c: 0,
          why: "High-volume logging degrades performance and risks exposing sensitive customer data in plain text logs."
        },
        {
          q: "What does it mean when an ORM query log shows ':param_1' or '?' instead of raw values?",
          a: [
            "The query is properly parameterized, preventing SQL injection attacks and enabling prepared statement reuse",
            "The query has a syntax error",
            "The data was lost in transit",
            "The database cannot read the value"
          ],
          c: 0,
          why: "Parameter placeholders ensure the database treats input strictly as data, never executable code."
        },
        {
          q: "What red flag in query logs indicates that an application is missing a batch transaction?",
          a: [
            "Dozens of individual INSERT statements each followed immediately by an individual COMMIT",
            "A query that uses an INNER JOIN",
            "A query that selects a primary key",
            "Queries written in lowercase"
          ],
          c: 0,
          why: "Committing after every single insert forces repetitive disk flushes; batching in one transaction is vastly faster."
        },
        {
          q: "How can you print the compiled SQL string of an ORM query in SQLAlchemy without executing it?",
          a: [
            "print(str(query.statement.compile(compile_kwargs={'literal_binds': True})))",
            "print(query.delete())",
            "SELECT query.text",
            "There is no way to see the SQL without running it"
          ],
          c: 0,
          why: "Compiling the query statement allows inspecting generated SQL text offline."
        }
      ]
    },
    {
      n: 5,
      id: "unit-of-work-and-the-identity-map",
      title: "Unit of Work and the Identity Map",
      topic: "Unit of Work & Identity Map",
      anim: "Tools",
      lede: "How does an ORM know what changed without querying the database? Discover the Unit of Work pattern, dirty checking, the Identity Map, and session flushes.",
      winShort: "Explain the Unit of Work lifecycle, dirty checking, and Identity Map deduplication",
      missionLink: "The architectural core of enterprise Data Mapper ORMs like SQLAlchemy and Hibernate",
      sec1: {
        title: "The in-memory transaction sandbox",
        content: `<p>In modern Data Mapper ORMs, when you load an entity and modify <code>user.email = 'new@email.com'</code>, the ORM does not immediately send an <code>UPDATE</code> to the database. Instead, it operates inside a <b>Unit of Work</b> pattern managed by the <b>Session</b>.</p><p>The session tracks all loaded objects in an <b>Identity Map</b>. When you call <code>session.commit()</code>, the Unit of Work performs <b>dirty checking</b> (comparing current values against loaded snapshots), calculates the minimal SQL statements needed, orders them to satisfy foreign keys, and flushes them in a single batch.</p>`,
        keyIdea: "Unit of Work batches changes and flushes minimal SQL statements atomically upon commit."
      },
      predict: {
        q: "If you query the same user twice in the same session: 'a = session.get(User, 1); b = session.get(User, 1);', does 'a === b'?",
        a: [
          "Yes, the Identity Map guarantees that exactly one object instance exists in memory for row 1",
          "No, it creates two separate objects at different memory addresses",
          "A throws an error",
          "B is set to null"
        ],
        c: 0,
        why: "The Identity Map acts as an in-memory registry, returning the existing object instance on repeat reads."
      },
      sec2: {
        title: "The Unit of Work lifecycle",
        content: `<p>Observe the stages an entity passes through inside an active ORM session.</p>`,
      },
      diagram: {
        boxes: [
          { title: "1. Loaded / Clean", lines: ["entity fetched from DB", "snapshot stored in Identity Map"] },
          { title: "2. Mutated / Dirty", lines: ["user.name = 'New Name'", "dirty checking flags entity as changed"] },
          { title: "3. Flush & Commit", lines: ["calculates minimal UPDATE", "executes in atomic transaction", "marks entity clean again"] }
        ]
      },
      sec3: {
        title: "Tracing dirty checking and flush",
        content: `<p>Trace how a session detects modifications and generates an optimized UPDATE upon commit.</p>`,
      },
      trace: {
        code: [
          "user = session.get(User, 101); # loaded: name='Ada', age=30",
          "user.age = 31; # attribute mutated in memory",
          "# Session compares user.age (31) with original snapshot (30) -> DIRTY!",
          "session.commit();",
          "# Generated SQL: UPDATE users SET age = 31 WHERE id = 101;"
        ],
        steps: [
          { line: 0, vars: { initial: "original snapshot recorded in Identity Map" } },
          { line: 1, vars: { mutation: "in-memory value changed" } },
          { line: 2, vars: { dirty_check: "ORM detects age difference" } },
          { line: 4, vars: { flush: "minimal UPDATE emitted; name is omitted because it didn't change" } }
        ]
      },
      practiceIntro: "Test your memory of Unit of Work concepts.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The pattern coordinating in-memory changes into a database write is Unit of <0>.",
          "The in-memory cache ensuring one instance per database row is the <1> Map.",
          "The process comparing current state against loaded snapshots is <2> checking."
        ],
        blanks: [
          { a: ["Work"], why: "Unit of Work coordinates atomic database writes." },
          { a: ["Identity"], why: "Identity Map ensures reference uniqueness." },
          { a: ["dirty"], why: "Dirty checking detects modified entity fields." }
        ]
      },
      win: "You can reason about session lifecycles, dirty checking, and avoid detached-instance bugs in ORM applications.",
      nextTasks: [
        "Verify that two queries for the same primary key return the identical object reference in your ORM.",
        "Inspect the session.dirty set in SQLAlchemy before calling commit.",
        "Observe the error thrown when attempting to access a lazy-loaded property on a closed/detached session."
      ],
      primarySource: "Martin Fowler, *Patterns of Enterprise Application Architecture*, Chapter 11: 'Unit of Work' & 'Identity Map'.",
      quiz: [
        {
          q: "What is the primary role of the 'Identity Map' pattern in an ORM?",
          a: [
            "To ensure that each database record is represented by exactly one in-memory object instance per session, preventing conflicting updates",
            "To store GPS coordinates of user locations",
            "To encrypt primary keys in the database",
            "To assign passwords to database users"
          ],
          c: 0,
          why: "Identity Map ensures reference consistency: modifying user in one place updates all references in that session."
        },
        {
          q: "What happens during a session 'flush' in a Data Mapper ORM?",
          a: [
            "The ORM inspects all dirty objects, calculates the necessary SQL statements, and executes them within the database transaction",
            "The database deletes all table data",
            "The browser clears its cache cookies",
            "The server operating system reboots"
          ],
          c: 0,
          why: "Flushing translates in-memory changes into pending SQL statements in the database transaction."
        },
        {
          q: "What causes a 'DetachedInstanceError' in SQLAlchemy?",
          a: [
            "Attempting to access an unloaded lazy property on an object whose database session has already been closed",
            "The database server running out of disk space",
            "A syntax error in an SQL query",
            "A corrupted B-tree index"
          ],
          c: 0,
          why: "Once the session closes, the object is detached; it cannot open a new connection to lazy-load attributes."
        },
        {
          q: "Why is the Unit of Work pattern more efficient than immediate autocommit writes?",
          a: [
            "It consolidates multiple object updates into batched SQL statements and flushes them in a single transaction",
            "It turns off foreign key checks",
            "It bypasses disk writes entirely",
            "It runs on the client browser"
          ],
          c: 0,
          why: "Batching writes at the end of a transaction reduces network round-trips and disk sync overhead."
        }
      ]
    },
    {
      n: 6,
      id: "cascade-rules-and-orphan-removal",
      title: "Cascade rules and orphan removal",
      topic: "Unit of Work & Identity Map",
      anim: "Tools",
      lede: "What happens when you delete an order from memory? Master ORM cascade options (save-update, delete, all) and orphan removal without corrupting relationships.",
      winShort: "Configure ORM cascade options and orphan removal to manage dependent object lifecycles",
      missionLink: "Prevents in-memory object graphs from drifting out of sync with database foreign keys",
      sec1: {
        title: "Cascading operations through the object graph",
        content: `<p>In an object model, entities contain collections of other entities: an <code>Order</code> contains a list of <code>LineItems</code>. When you add a new LineItem to <code>order.items</code>, should you have to explicitly call <code>session.add(line_item)</code>?</p><p><b>ORM Cascades</b> propagate operations from parents to children across the in-memory object graph. With <code>cascade="all, delete-orphan"</code>, adding an item to the collection saves it automatically, and removing an item from the collection <b>deletes it from the database</b>!</p>`,
        keyIdea: "ORM cascades propagate persist, merge, and delete operations across in-memory object relationships."
      },
      predict: {
        q: "If an order has 'delete-orphan' cascade, what happens in the database when you run 'order.items.pop(0); session.commit();'?",
        a: [
          "The removed line item is automatically DELETED from the database table",
          "The item remains in the database with user_id set to NULL",
          "An error is thrown because items cannot be removed from lists",
          "The entire order is deleted"
        ],
        c: 0,
        why: "delete-orphan detects when a child is disowned by its parent and issues a DELETE statement automatically."
      },
      sec2: {
        title: "Standard ORM cascade options",
        content: `<p>Understand the standard cascade behaviors available in modern ORM mapping configurations.</p>`,
      },
      diagram: {
        boxes: [
          { title: "save-update", lines: ["adding child to parent collection", "marks child for INSERT automatically"] },
          { title: "delete", lines: ["deleting parent entity", "propagates DELETE to all child entities"] },
          { title: "delete-orphan", lines: ["removing child from parent collection", "deletes child from database!"] }
        ]
      },
      sec3: {
        title: "Tracing orphan removal execution",
        content: `<p>Trace how removing an item from a Python list translates to an SQL DELETE statement.</p>`,
      },
      trace: {
        code: [
          "# Relationship: items = relationship('Item', cascade='all, delete-orphan')",
          "order = session.get(Order, 1);",
          "order.items.remove(unwanted_item); # item disowned in memory",
          "session.commit();",
          "# ORM generates: DELETE FROM items WHERE id = unwanted_item.id;"
        ],
        steps: [
          { line: 1, vars: { order_loaded: "order with 3 items loaded into session" } },
          { line: 2, vars: { disowned: "unwanted_item removed from list" } },
          { line: 4, vars: { sql_emitted: "DELETE statement executed automatically for orphaned item" } }
        ]
      },
      practiceIntro: "Test your memory of cascade configurations.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The setting that automatically deletes a child when removed from a parent list is delete-<0>.",
          "Propagating parent actions down to child entities is called <1>.",
          "Database foreign key cascades happen on disk; ORM cascades happen in <2>."
        ],
        blanks: [
          { a: ["orphan"], why: "delete-orphan purges disowned children." },
          { a: ["cascade", "cascading"], why: "Cascades propagate operations through object graphs." },
          { a: ["memory", "ORM"], why: "ORM cascades evaluate in-memory collections before flushing." }
        ]
      },
      win: "You can configure relationship cascades and orphan removal rules to maintain pristine object-relational consistency.",
      nextTasks: [
        "Configure cascade='all, delete-orphan' on a parent-child relationship in your ORM.",
        "Remove an item from a parent's collection and verify in query logs that a DELETE is emitted.",
        "Distinguish between database ON DELETE CASCADE and ORM delete cascade."
      ],
      primarySource: "SQLAlchemy Documentation: *Cascades* (docs.sqlalchemy.org/en/20/orm/cascades.html).",
      quiz: [
        {
          q: "What is the difference between database-level 'ON DELETE CASCADE' and ORM-level 'delete cascade'?",
          a: [
            "Database ON DELETE CASCADE is executed by the SQL engine on disk; ORM cascade is managed in application memory by loading and deleting objects",
            "Database cascades only work on numbers; ORM cascades only work on text",
            "ORM cascades are fifty times faster",
            "There is no difference between them"
          ],
          c: 0,
          why: "ORM cascades load children into memory to trigger events and hooks; DB cascades execute directly in SQL."
        },
        {
          q: "What does 'delete-orphan' accomplish that standard 'delete' cascade does NOT?",
          a: [
            "It deletes a child record when it is disassociated/removed from its parent collection, even if the parent itself is not deleted",
            "It deletes the parent table from disk",
            "It deletes all users with unverified emails",
            "It converts child rows into JSON files"
          ],
          c: 0,
          why: "Standard delete cascade only fires when the parent is deleted; orphan removal fires when items are unlinked."
        },
        {
          q: "Why can naive ORM delete cascades cause unexpected performance collapse on large datasets?",
          a: [
            "The ORM may load thousands of child objects into memory one by one to delete them individually, instead of running one fast SQL query",
            "It turns off the database server",
            "It causes computer monitors to turn off",
            "It corrupts B-tree index files"
          ],
          c: 0,
          why: "Loading 50,000 children into memory just to issue 50,000 DELETE statements melts server RAM."
        },
        {
          q: "What happens if a child entity in a 1:N relationship has a NOT NULL foreign key, but lacks orphan removal?",
          a: [
            "Removing the child from the list attempts to set foreign_key = NULL on flush, causing a database constraint violation error",
            "The child is deleted automatically",
            "The parent entity is deleted",
            "The database server crashes"
          ],
          c: 0,
          why: "Without delete-orphan, the ORM disowns by setting FK=NULL, which fails on NOT NULL columns."
        }
      ]
    },
    {
      n: 7,
      id: "automated-migrations-with-alembic-and-prisma",
      title: "Automated migrations with Alembic and Prisma",
      topic: "Migrations & Trade-offs",
      anim: "Tools",
      lede: "Code is in models; schema is in SQL. Learn how tools like Alembic, Prisma Migrate, and Django Migrations autogenerate DDL scripts by diffing models against databases.",
      winShort: "Generate, review, and execute automated database migrations using ORM tooling",
      missionLink: "Bridges Python/TypeScript model declarations and persistent SQL table schemas",
      sec1: {
        title: "Autogenerating schema diffs",
        content: `<p>Writing manual <code>ALTER TABLE</code> scripts for every model change is tedious and error-prone. Modern ORM ecosystems provide migration tools (like <b>Alembic</b> in Python, <b>Prisma Migrate</b> in TypeScript, or <b>Django Migrations</b>).</p><p>These tools inspect your code models, inspect your live database catalog, calculate the mathematical <b>schema diff</b>, and autogenerate an incremental migration script. However: <b>You must ALWAYS review autogenerated migrations before running them!</b> Autogenerators can mistake a column rename for a DROP and ADD, destroying production data!</p>`,
        keyIdea: "Migration tools generate schema diffs automatically, but developers must always review generated scripts."
      },
      predict: {
        q: "What catastrophic mistake can an automated migration tool make when you rename a column from 'first_name' to 'given_name' in your model?",
        a: [
          "It might generate 'DROP COLUMN first_name' followed by 'ADD COLUMN given_name', permanently destroying all existing names!",
          "It might delete the entire operating system",
          "It might convert all names into numbers",
          "It will refuse to generate any migration"
        ],
        c: 0,
        why: "Autogenerators cannot infer human intent: they see a deleted column and a new column, risking data loss."
      },
      sec2: {
        title: "The migration generation pipeline",
        content: `<p>Follow the workflow from model editing through schema diffing to database execution.</p>`,
      },
      diagram: {
        boxes: [
          { title: "1. Edit Model Code", lines: ["add 'phone_number' to User class", "pure code edit in editor"] },
          { title: "2. Autogenerate Diff", lines: ["alembic revision --autogenerate -m 'add phone'", "creates versioned Python/SQL script"] },
          { title: "3. Review & Apply", lines: ["developer verifies script safety", "alembic upgrade head (applies to DB!)"] }
        ]
      },
      sec3: {
        title: "Tracing an Alembic migration script",
        content: `<p>Trace the upgrade() and downgrade() functions inside an autogenerated migration file.</p>`,
      },
      trace: {
        code: [
          "# alembic/versions/20261003_add_phone.py",
          "def upgrade():",
          "    op.add_column('users', sa.Column('phone', sa.String(20), nullable=True))",
          "def downgrade():",
          "    op.drop_column('users', 'phone')"
        ],
        steps: [
          { line: 1, vars: { apply: "upgrade() adds nullable column safely" } },
          { line: 3, vars: { revert: "downgrade() reverses change if deploy fails" } }
        ]
      },
      practiceIntro: "Test your memory of migration tools.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The standard migration tool for SQLAlchemy is <0>.",
          "The command in Alembic to apply all pending migrations is alembic upgrade <1>.",
          "Autogenerating migrations works by calculating a schema <2>."
        ],
        blanks: [
          { a: ["Alembic"], why: "Alembic is the official SQLAlchemy migration framework." },
          { a: ["head"], why: "upgrade head brings the database to the latest version." },
          { a: ["diff"], why: "Tools calculate the difference between code models and DB schema." }
        ]
      },
      win: "You can generate, audit, and deploy automated schema migrations while catching dangerous DROP COLUMN traps.",
      nextTasks: [
        "Generate a migration using alembic revision --autogenerate -m 'add bio'.",
        "Inspect the generated migration script and verify upgrade() and downgrade() functions.",
        "Apply the migration using alembic upgrade head and verify table columns in psql."
      ],
      primarySource: "Alembic Documentation: *Auto Generating Migrations* (alembic.sqlalchemy.org/en/latest/autogenerate.html).",
      quiz: [
        {
          q: "Why should you never blindly run autogenerated migrations in production without human review?",
          a: [
            "Autogenerators often misinterpret column renames as DROP and ADD, which would delete all existing column data",
            "Autogenerated migrations are written in encrypted binary code",
            "Migration tools cannot connect to production databases",
            "Autogenerated migrations delete all database indexes automatically"
          ],
          c: 0,
          why: "Autogenerators cannot detect renames; they generate destructive drops unless manually edited."
        },
        {
          q: "What does 'alembic upgrade head' do?",
          a: [
            "Runs all unapplied migration scripts in chronological order up to the latest revision",
            "Deletes the database head table",
            "Restores a database from a backup file",
            "Converts the database to SQLite"
          ],
          c: 0,
          why: "'head' represents the latest revision in the migration graph."
        },
        {
          q: "What table does Alembic use to record which migrations have already run?",
          a: [
            "alembic_version",
            "schema_migrations",
            "migrations_log",
            "pg_alembic"
          ],
          c: 0,
          why: "Alembic stores the current revision hash in a single-row table named alembic_version."
        },
        {
          q: "What is a 'squashed migration' in mature projects?",
          a: [
            "Combining 100 historical incremental migration files into a single baseline schema file to speed up test database creation",
            "Deleting all migration files permanently",
            "Compressing migration scripts with gzip",
            "Running migrations on mobile phones"
          ],
          c: 0,
          why: "Squashing combines years of legacy migrations into a clean baseline, accelerating fresh test setups."
        }
      ]
    },
    {
      n: 8,
      id: "when-to-use-an-orm-and-when-to-use-raw-sql",
      title: "When to use an ORM and when to use raw SQL",
      topic: "Migrations & Trade-offs",
      anim: "Tools",
      lede: "ORMs are great for OLTP CRUD, but terrible for bulk analytics and complex reports. Master the pragmatic spectrum: ORMs, Query Builders, and raw parameterized SQL.",
      winShort: "Select between ORMs, Query Builders, and raw SQL based on performance and complexity",
      missionLink: "Fosters pragmatic engineering judgment over dogmatic tool loyalty",
      sec1: {
        title: "The pragmatic spectrum",
        content: `<p>Junior developers argue over ORM versus raw SQL as an all-or-nothing religious war. Senior engineers treat them as a spectrum of tools suited for different jobs.</p><p><b>ORMs excel at:</b> Interactive OLTP web apps, single-row CRUD, form validation, and schema migrations. <b>Raw SQL / Query Builders excel at:</b> Bulk updates (updating 100,000 rows in one query), complex analytical reporting with window functions, performance-critical hot paths, and multi-table aggregations.</p>`,
        keyIdea: "Use ORMs for transactional CRUD; drop to raw SQL or query builders for bulk operations and analytics."
      },
      predict: {
        q: "You need to increase the price of 500,000 products by 5%. Which approach is vastly faster and uses 99% less memory?",
        a: [
          "A single raw SQL statement: UPDATE products SET price = price * 1.05;",
          "Loading all 500,000 Product ORM objects into Python memory, updating product.price in a loop, and calling session.commit()",
          "Exporting the table to CSV, editing in Excel, and re-importing",
          "Both take the exact same time"
        ],
        c: 0,
        why: "A single SQL update executes on disk in 100ms; instantiating 500k ORM objects exhausts gigabytes of RAM."
      },
      sec2: {
        title: "The database interaction spectrum",
        content: `<p>Choose the right level of abstraction for each specific database requirement.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Full ORM (High Abstraction)", lines: ["SQLAlchemy, Prisma, Hibernate", "ideal for web app CRUD & validation", "trade-off: object inflation overhead"] },
          { title: "Query Builder (Mid-Level)", lines: ["Kysely, Knex, SQLAlchemy Core", "type-safe composable SQL generation", "zero object inflation!"] },
          { title: "Raw SQL (Zero Abstraction)", lines: ["psycopg3, pgx, Dapper", "maximum performance, full SQL power", "trade-off: manual schema mapping"] }
        ]
      },
      sec3: {
        title: "Tracing the memory cost of object inflation",
        content: `<p>Trace why instantiating 100,000 ORM class instances consumes 800 MB of RAM while raw tuples use 15 MB.</p>`,
      },
      trace: {
        code: [
          "# Scenario: Fetch 100,000 rows for export",
          "# Approach A (ORM): Product.query.all()",
          "# Engine allocates 100,000 heavy Python class objects with tracking state -> 800 MB RAM!",
          "# Approach B (Raw SQL): cursor.execute('SELECT id, name, price FROM products')",
          "# Engine streams raw tuples directly -> 15 MB RAM (50x less memory!)"
        ],
        steps: [
          { line: 0, vars: { dataset: "100,000 rows" } },
          { line: 2, vars: { orm_cost: "object inflation allocates 800 MB memory" } },
          { line: 4, vars: { raw_sql: "streaming tuples uses 15 MB; finishes 10x faster" } }
        ]
      },
      practiceIntro: "Test your memory of database tool trade-offs.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The CPU and memory cost of allocating classes from rows is object <0>.",
          "A library providing type-safe chainable SQL without full ORM tracking is a query <1>.",
          "High-volume single-statement modifications across tables are <2> updates."
        ],
        blanks: [
          { a: ["inflation"], why: "Object inflation consumes memory for heavy classes." },
          { a: ["builder"], why: "Query builders generate SQL without entity tracking." },
          { a: ["bulk"], why: "Bulk updates execute in one query on the database engine." }
        ]
      },
      win: "You can wield ORMs effectively for domain logic while fluently dropping to raw SQL for high-throughput batch operations.",
      nextTasks: [
        "Benchmark the memory usage of loading 10,000 rows via an ORM versus raw database driver tuples.",
        "Refactor an inefficient loop of individual ORM updates into a single bulk UPDATE query.",
        "Experiment with a modern lightweight query builder like Kysely or SQLAlchemy Core."
      ],
      primarySource: "Martin Fowler: *OrmHate* (martinfowler.com/bliki/OrmHate.html).",
      quiz: [
        {
          q: "What is 'Object Inflation' in ORM performance analysis?",
          a: [
            "The CPU and RAM overhead required to convert raw database byte rows into fully-featured in-memory class instances with change tracking",
            "The monetary cost of buying database server hardware",
            "The expansion of table files on physical disk storage",
            "An error that happens when database column names are too long"
          ],
          c: 0,
          why: "Creating thousands of complex class instances with identity maps consumes massive CPU and memory."
        },
        {
          q: "What is the primary advantage of a Query Builder (like Kysely or Knex) over a full ORM?",
          a: [
            "It provides programmatic, type-safe SQL query construction without the memory bloat and hidden behaviors of an ORM session",
            "It eliminates the need for SQL syntax completely",
            "It turns off database security firewalls",
            "It allows databases to run without an operating system"
          ],
          c: 0,
          why: "Query builders give you type-safety and composability while staying close to explicit SQL."
        },
        {
          q: "Why is an ORM ideal for typical web application CRUD operations?",
          a: [
            "It handles validation, input mapping, relationship hydration, and database portability for individual records rapidly",
            "It makes the web server immune to power outages",
            "It speeds up network data transmission speeds",
            "It eliminates the need to create database indexes"
          ],
          c: 0,
          why: "For single-record web transactions, ORM developer velocity and validation benefits far outweigh minor overhead."
        },
        {
          q: "When dropping to raw SQL, how should user-supplied input values be passed to avoid SQL injection?",
          a: [
            "Always pass inputs as parameterized query arguments (for example, cursor.execute with a params tuple)",
            "Use string formatting (e.g. f'SELECT * FROM users WHERE id = {user_id}')",
            "Concatenate strings with the '+' operator",
            "Encrypt the user input with Base64"
          ],
          c: 0,
          why: "Parameterized arguments ensure the database driver treats input strictly as data, defeating SQL injection."
        }
      ]
    }
  ]
};

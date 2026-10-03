"use strict";

module.exports = {
  id: "postgresql",
  title: "PostgreSQL",
  num: 36,
  emoji: "🐘",
  desc: "The practical side of a real database: types, extensions, JSON columns, roles and backups.",
  mission: `# Mission — PostgreSQL

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
`,
  notes: `# Notes — PostgreSQL

## Decisions
- Group into four themes: Advanced Types & JSONB, Extensions & Search, Security & Permissions, and Operations & Backups.
- Focus on modern PostgreSQL (v14-v16) features and idioms.
`,
  resources: `# Resources — PostgreSQL

## Knowledge (primary sources)
- *PostgreSQL 14 Internals* by Egor Rogov (Postgres Professional).
- Official PostgreSQL Documentation (postgresql.org/docs/).
- *The Art of PostgreSQL* by Dimitri Fontaine.

## Wisdom
- PostgreSQL is not just an RDBMS; it is a programmable platform that can replace your document store, search engine, and vector database.
`,
  cheatsheetSections: [
    {
      title: "JSONB Querying & Indexing",
      label: "Semi-structured document storage",
      code: `-- Query nested JSONB properties
SELECT data->>'name' AS name, (data->'age')::int AS age
FROM profiles
WHERE data @> '{"role": "admin"}';

-- GIN Index for fast key/value queries
CREATE INDEX idx_profiles_data ON profiles USING GIN (data);`,
      lessonN: 2,
      lessonSlug: "jsonb-semi-structured-data-in-sql",
      lessonTitle: "JSONB: semi-structured data in SQL"
    },
    {
      title: "Essential Extensions",
      label: "pg_trgm and pgcrypto",
      code: `-- Enable extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Fuzzy text matching with trigrams
SELECT name, similarity(name, 'postgresql') AS score
FROM software
WHERE name % 'postgresql'
ORDER BY score DESC;`,
      lessonN: 4,
      lessonSlug: "postgresql-extensions-and-ecosystem",
      lessonTitle: "PostgreSQL extensions and ecosystem"
    },
    {
      title: "Row-Level Security (RLS)",
      label: "Multi-tenant data isolation",
      code: `ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY tenant_isolation_policy ON documents
  FOR ALL
  USING (tenant_id = current_setting('app.current_tenant_id')::int);`,
      lessonN: 6,
      lessonSlug: "roles-permissions-and-row-level-security",
      lessonTitle: "Roles, permissions, and Row-Level Security"
    },
    {
      title: "Backups & Maintenance",
      label: "pg_dump and vacuum",
      code: `# Dump database to compressed custom format
pg_dump -Fc -h localhost -U postgres -d my_db > backup.dump

# Restore dump
pg_restore -d my_db_restored backup.dump

-- Reclaim storage and update statistics
VACUUM (VERBOSE, ANALYZE);`,
      lessonN: 8,
      lessonSlug: "backups-disaster-recovery-and-vacuum",
      lessonTitle: "Backups, disaster recovery, and vacuum"
    }
  ],
  glossaryGroups: [
    {
      id: "types-jsonb",
      title: "Advanced Types & JSONB",
      terms: [
        { term: "JSONB", def: "PostgreSQL's binary parsed JSON format: slightly slower to write than plain JSON, but vastly faster to query and index.", lesson: 2, tags: ["jsonb"] },
        { term: "Array type", def: "A native PostgreSQL column type (e.g. integer[] or text[]) storing ordered collections of scalar values.", lesson: 1, tags: ["types"] },
        { term: "Range type", def: "A native type representing a continuous range of values (e.g. daterange or int4range) supporting overlap checks.", lesson: 1, tags: ["types"] },
        { term: "Existence operator (?)", def: "A JSONB operator testing whether a specified top-level key exists inside a document.", lesson: 2, tags: ["operators"] }
      ]
    },
    {
      id: "extensions-search",
      title: "Extensions & Search",
      terms: [
        { term: "Extension", def: "A packaged bundle of functions, data types, and operators adding specialized capabilities to PostgreSQL.", lesson: 4, tags: ["extensions"] },
        { term: "pg_trgm", def: "A popular extension providing trigram matching for fast fuzzy string searches and regex indexes.", lesson: 4, tags: ["search"] },
        { term: "tsvector", def: "A native full-text search data type storing normalized, sorted, pre-stemmed lexemes with word positions.", lesson: 3, tags: ["search"] },
        { term: "tsquery", def: "A full-text search query type containing Boolean search terms (e.g. 'cat & dog') evaluated against tsvectors.", lesson: 3, tags: ["search"] }
      ]
    },
    {
      id: "security-rls",
      title: "Security & Permissions",
      terms: [
        { term: "Role", def: "A PostgreSQL database user or group possessing specific login rights and resource permissions.", lesson: 5, tags: ["security"] },
        { term: "Row-Level Security", def: "A database security feature (RLS) restricting which table rows a user query can read or modify via security policies.", lesson: 6, tags: ["security"] },
        { term: "GRANT", def: "An SQL command conferring specific privileges (SELECT, INSERT, UPDATE) on database objects to roles.", lesson: 5, tags: ["permissions"] },
        { term: "REVOKE", def: "An SQL command withdrawing previously granted privileges from a database role.", lesson: 5, tags: ["permissions"] }
      ]
    },
    {
      id: "operations-backups",
      title: "Operations & Backups",
      terms: [
        { term: "pg_dump", def: "The standard PostgreSQL command-line utility for exporting database schemas and data into backup files.", lesson: 8, tags: ["backups"] },
        { term: "PITR", def: "Point-in-Time Recovery: restoring a database to any specific historical millisecond using base backups and WAL logs.", lesson: 8, tags: ["recovery"] },
        { term: "Connection pooler", def: "An intermediary service (like PgBouncer) multiplexing thousands of client connections onto a small set of backend processes.", lesson: 7, tags: ["scaling"] },
        { term: "Autovacuum", def: "A background daemon in PostgreSQL that automatically removes dead row versions and updates statistical tables.", lesson: 8, tags: ["maintenance"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "rich-native-types-arrays-ranges-and-uuids",
      title: "Rich native types: arrays, ranges, and UUIDs",
      topic: "Advanced Types & JSONB",
      anim: "Code",
      lede: "Beyond numbers and text: explore PostgreSQL's extraordinary native type system, including true array columns, date ranges, and network addresses.",
      winShort: "Implement native arrays, range types, and UUIDs in table schemas",
      missionLink: "Eliminates redundant junction tables for simple tags and temporal intervals",
      sec1: {
        title: "Beyond scalar columns",
        content: `<p>Most databases only support basic primitives (ints, floats, strings). PostgreSQL treat types as first-class citizens, providing native support for <b>Arrays</b> (<code>text[]</code>, <code>integer[]</code>), <b>UUIDs</b>, and continuous <b>Range Types</b> (<code>daterange</code>, <code>numrange</code>).</p><p>Range types are particularly powerful: instead of storing <code>start_date</code> and <code>end_date</code> separately, a single <code>daterange</code> column allows you to query overlaps with the <code>&&</code> operator and enforce non-overlapping bookings via exclusion constraints!</p>`,
        keyIdea: "PostgreSQL's rich type system replaces complex application logic with native database operators."
      },
      predict: {
        q: "How do you check if two daterange values overlap in PostgreSQL?",
        a: [
          "Using the native overlap operator '&&' (e.g. range1 && range2)",
          "Writing four separate <= and >= comparisons by hand",
          "Converting the dates to strings and matching with LIKE",
          "Overlap checks are forbidden in SQL"
        ],
        c: 0,
        why: "The '&&' operator tests for set intersection and overlap natively across all range types."
      },
      sec2: {
        title: "The PostgreSQL native type catalogue",
        content: `<p>Examine specialized native data types that eliminate custom validation logic.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Arrays (text[], int[])", lines: ["ordered lists inside a single column", "operators: @> (contains), = ANY(arr)"] },
          { title: "Range Types (daterange)", lines: ["discrete or continuous bounds", "operators: && (overlap), @> (contains)"] },
          { title: "Network Types (inet, cidr)", lines: ["IPv4 and IPv6 addresses with subnets", "enforces valid IP syntax automatically"] }
        ]
      },
      sec3: {
        title: "Tracing exclusion constraint validation",
        content: `<p>Trace how a PostgreSQL exclusion constraint prevents double-booking hotel rooms.</p>`,
      },
      trace: {
        code: [
          "CREATE TABLE bookings (",
          "    room_id INT,",
          "    during DATERANGE,",
          "    EXCLUDE USING gist (room_id WITH =, during WITH &&)",
          ");",
          "# Booking 1: room 101, [2026-06-01, 2026-06-05) -> Accepted",
          "# Booking 2: room 101, [2026-06-03, 2026-06-07) -> REJECTED (conflicting key: overlap detected!)"
        ],
        steps: [
          { line: 0, vars: { schema: "exclusion constraint created on room_id and date overlap" } },
          { line: 5, vars: { insert_1: "initial booking inserted cleanly" } },
          { line: 6, vars: { insert_2: "overlapping booking rejected by database engine in 0.1ms" } }
        ]
      },
      practiceIntro: "Test your memory of PostgreSQL native types.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "An array of text in PostgreSQL is declared with the type <0>[].",
          "The native type representing a date interval is date<1>.",
          "The operator testing whether two ranges overlap is <2>."
        ],
        blanks: [
          { a: ["text"], why: "text[] declares an array of strings." },
          { a: ["range"], why: "daterange represents date bounds." },
          { a: ["&&"], why: "&& is the overlap operator." }
        ]
      },
      win: "You can leverage arrays, range types, and exclusion constraints to solve complex scheduling and categorization requirements natively.",
      nextTasks: [
        "Create a table with a tags text[] array column and query it using ANY(tags).",
        "Implement a daterange column and test whether two dates overlap using the && operator.",
        "Generate a random UUID using gen_random_uuid() as a column default."
      ],
      primarySource: "PostgreSQL Documentation: *Range Types* (postgresql.org/docs/current/rangetypes.html).",
      quiz: [
        {
          q: "What is an exclusion constraint (EXCLUDE) in PostgreSQL?",
          a: [
            "A constraint that prevents rows from having overlapping ranges or conflicting values across specified operators",
            "A rule that deletes users who have not logged in for 30 days",
            "A constraint that blocks all SELECT queries on weekends",
            "A password validation check"
          ],
          c: 0,
          why: "Exclusion constraints generalize uniqueness to arbitrary operators (like range overlaps)."
        },
        {
          q: "How do you query if the string 'python' exists inside an array column named 'skills'?",
          a: [
            "'python' = ANY(skills)",
            "skills CONTAINS 'python'",
            "skills LIKE '%python%'",
            "search(skills, 'python')"
          ],
          c: 0,
          why: "'value = ANY(array)' is the standard PostgreSQL idiom to test for array membership."
        },
        {
          q: "What does the 'inet' data type enforce in PostgreSQL?",
          a: [
            "Valid IPv4 or IPv6 network addresses, and allows subnet inclusion queries (e.g. <<=)",
            "Internet browser bookmark URLs",
            "Credit card numbers",
            "Email address syntax"
          ],
          c: 0,
          why: "inet stores and validates host IP addresses and subnet masks natively."
        },
        {
          q: "Why use native UUID types instead of VARCHAR(36) to store UUIDs in PostgreSQL?",
          a: [
            "The native UUID type stores the identifier as a compact 16-byte binary integer, saving 55% disk space and speeding up index lookups",
            "VARCHAR cannot store hyphens",
            "VARCHAR is forbidden in modern PostgreSQL",
            "There is no difference in storage size"
          ],
          c: 0,
          why: "Native UUID is 16 bytes; storing it as a 36-character string wastes memory and disk bandwidth."
        }
      ]
    },
    {
      n: 2,
      id: "jsonb-semi-structured-data-in-sql",
      title: "JSONB: semi-structured data in SQL",
      topic: "Advanced Types & JSONB",
      anim: "Code",
      lede: "The best of both worlds: relational schema when you want it, document freedom when you need it. Master PostgreSQL's binary JSONB format, operators, and GIN indexing.",
      winShort: "Query, mutate, and index semi-structured JSONB documents inside relational tables",
      missionLink: "Eliminates the need to maintain separate NoSQL document databases",
      sec1: {
        title: "JSON versus JSONB",
        content: `<p>PostgreSQL has two JSON types: <code>json</code> (plain text copy of the string, slow to query) and <b>JSONB (binary format)</b>. JSONB parses the text into decomposed binary trees, strips whitespace, and deduplicates keys on write.</p><p>Because JSONB is stored in a structured binary format, querying nested properties (<code>data->>'email'</code>) is blazingly fast. More importantly, <b>JSONB documents can be indexed with GIN indexes</b>, allowing instant queries across arbitrary unstructured JSON attributes.</p>`,
        keyIdea: "Always use JSONB: it stores parsed binary representations that support instant indexing."
      },
      predict: {
        q: "What is the difference between the '->' and '->>' operators in PostgreSQL JSONB?",
        a: [
          "'->' returns JSONB; '->>' extracts the value as plain text",
          "'->' extracts text; '->>' returns JSONB",
          "'->' modifies data; '->>' is read-only",
          "There is no difference between them"
        ],
        c: 0,
        why: "'->' preserves JSON typing for chaining; '->>' extracts the scalar as plain SQL text."
      },
      sec2: {
        title: "The JSONB operator toolkit",
        content: `<p>Learn the standard operators for traversing, searching, and mutating JSONB documents.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Extraction (-> vs ->>)", lines: ["data->'address' -> returns JSONB", "data->'address'->>'city' -> returns text"] },
          { title: "Containment (@>)", lines: ["WHERE data @> '{\"role\": \"admin\"}'", "accelerated by GIN index!"] },
          { title: "Key Existence (?)", lines: ["WHERE data ? 'phone'", "checks if key exists in document"] }
        ]
      },
      sec3: {
        title: "Tracing a GIN-indexed JSONB query",
        content: `<p>Trace how a GIN index evaluates a JSON containment query without scanning table heap pages.</p>`,
      },
      trace: {
        code: [
          "CREATE INDEX idx_meta ON events USING GIN (metadata);",
          "SELECT id, metadata->>'action' AS action",
          "FROM events",
          "WHERE metadata @> '{\"service\": \"billing\", \"status\": \"failed\"}';"
        ],
        steps: [
          { line: 0, vars: { gin_index: "GIN index decomposes all JSON keys and values" } },
          { line: 1, vars: { query: "containment check looking for service=billing and status=failed" } },
          { line: 3, vars: { result: "GIN index seek locates exact matching rows in 0.08ms" } }
        ]
      },
      practiceIntro: "Test your memory of JSONB operators.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The binary decomposed JSON type in PostgreSQL is <0>.",
          "The operator that extracts a JSON value as plain text is -><1>.",
          "The JSON containment operator is @<2>."
        ],
        blanks: [
          { a: ["JSONB"], why: "JSONB is the optimized binary JSON format." },
          { a: [">"], why: "->> extracts values as text." },
          { a: [">"], why: "@> checks if the left document contains the right document." }
        ]
      },
      win: "You can store semi-structured payloads in JSONB columns and query them with indexed sub-millisecond performance.",
      nextTasks: [
        "Create a table with a JSONB column and insert nested JSON objects.",
        "Extract nested properties using the -> and ->> operators.",
        "Create a GIN index on the JSONB column and verify its usage with EXPLAIN."
      ],
      primarySource: "PostgreSQL Documentation: *JSON Types* (postgresql.org/docs/current/datatype-json.html).",
      quiz: [
        {
          q: "Why should you virtually always choose JSONB over plain JSON in PostgreSQL?",
          a: [
            "JSONB is pre-parsed into binary format, supports GIN indexing, and is vastly faster to query",
            "JSONB takes up less RAM memory",
            "Plain JSON is deprecated in modern SQL standards",
            "JSONB allows users to store video files"
          ],
          c: 0,
          why: "JSON stores raw text requiring re-parsing on every query; JSONB is parsed and indexable."
        },
        {
          q: "What does the operator 'data @> '{\"active\": true}'' do?",
          a: [
            "Returns true if the JSONB document 'data' contains the top-level key 'active' with value true",
            "Appends active: true to the document",
            "Deletes the active property from the document",
            "Converts the document into XML"
          ],
          c: 0,
          why: "@> is the containment operator, which can be fully accelerated by a GIN index."
        },
        {
          q: "How can you update a single nested key inside a JSONB document without overwriting the whole object?",
          a: [
            "Using the jsonb_set() function or the '||' concatenation operator",
            "By deleting the table and recreating it",
            "By writing a Python script",
            "It is impossible; JSONB documents are immutable"
          ],
          c: 0,
          why: "jsonb_set(data, '{address,city}', '\"Paris\"') surgically mutates a nested path."
        },
        {
          q: "What does the 'jsonb_build_object()' function do?",
          a: [
            "Constructs a valid JSONB object from alternating key and value arguments in SQL",
            "Validates an external JSON file on disk",
            "Compiles C++ code into a JSON schema",
            "Generates random test data"
          ],
          c: 0,
          why: "jsonb_build_object('id', id, 'name', name) builds JSONB structures directly in queries."
        }
      ]
    },
    {
      n: 3,
      id: "full-text-search-tsvector-and-tsquery",
      title: "Full-text search: tsvector and tsquery",
      topic: "Extensions & Search",
      anim: "Code",
      lede: "LIKE '%search%' is slow and ignores language morphology. Master PostgreSQL's built-in full-text search engine: stemming, stop words, tsvector, and tsquery.",
      winShort: "Implement fast full-text search queries with stemming and relevance ranking in SQL",
      missionLink: "Provides Google-like search capabilities directly inside your relational database",
      sec1: {
        title: "The limitations of LIKE '%query%'",
        content: `<p>Searching text with <code>LIKE '%jump%'</code> has two major flaws: <b>1.</b> It cannot use B-tree indexes, forcing slow sequential scans across all text, and <b>2.</b> It has zero linguistic awareness: searching for 'jump' will never match 'jumping' or 'jumped'.</p><p>PostgreSQL includes a complete, enterprise-grade <b>Full-Text Search Engine</b>. It parses text into <b>tsvector</b> (a sorted array of stemmed word lexemes with positions) and matches them using <b>tsquery</b> (Boolean search expressions), enabling fast ranked search across gigabytes of text.</p>`,
        keyIdea: "tsvector stems words and strips stop words; tsquery matches linguistic lexemes via GIN indexes."
      },
      predict: {
        q: "What does to_tsvector('english', 'The quick brown foxes were jumping') produce?",
        a: [
          "'brown':3 'fox':4 'jump':6 'quick':2 (stop words like 'The' and 'were' stripped; words stemmed to roots)",
          "The exact original string unchanged",
          "An encrypted hash of the sentence",
          "A list of character word counts"
        ],
        c: 0,
        why: "Full-text indexing strips noise words ('the', 'were') and stems words ('foxes' -> 'fox', 'jumping' -> 'jump')."
      },
      sec2: {
        title: "Full-text search architecture",
        content: `<p>Observe how text is processed into search vectors and matched against query tokens.</p>`,
      },
      diagram: {
        boxes: [
          { title: "to_tsvector('english', text)", lines: ["stems words to root lexemes", "removes stop words (the, a, is)", "records word position"] },
          { title: "to_tsquery('english', 'cats & dogs')", lines: ["Boolean search query", "supports AND (&), OR (|), NOT (!), FOLLOWED BY (<->)"] },
          { title: "Match Operator (@@)", lines: ["tsvector @@ tsquery", "accelerated by GIN index!"] }
        ]
      },
      sec3: {
        title: "Tracing ranked search query execution",
        content: `<p>Trace how ts_rank orders search results based on keyword frequency and proximity.</p>`,
      },
      trace: {
        code: [
          "SELECT title, ts_rank(search_vector, query) AS rank",
          "FROM articles, to_tsquery('english', 'database & performance') query",
          "WHERE search_vector @@ query",
          "ORDER BY rank DESC",
          "LIMIT 5;"
        ],
        steps: [
          { line: 1, vars: { query_token: "'database' & 'performance'" } },
          { line: 2, vars: { match: "GIN index finds articles matching both root lexemes" } },
          { line: 0, vars: { ranking: "ts_rank scores documents based on frequency and prominence" } },
          { line: 4, vars: { output: "top 5 most relevant articles delivered" } }
        ]
      },
      practiceIntro: "Test your memory of full-text search syntax.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The data type representing a document search vector is ts<0>.",
          "The data type representing a search query expression is ts<1>.",
          "The full-text search matching operator is <2>."
        ],
        blanks: [
          { a: ["vector"], why: "tsvector stores document lexemes." },
          { a: ["query"], why: "tsquery stores search expressions." },
          { a: ["@@"], why: "@@ evaluates if a tsvector matches a tsquery." }
        ]
      },
      win: "You can implement fast, ranked full-text search directly inside PostgreSQL without running a separate Elasticsearch cluster.",
      nextTasks: [
        "Generate a tsvector from a sample paragraph and inspect the stemmed lexemes.",
        "Perform a Boolean search using the @@ operator and to_tsquery('english', 'postgres & index').",
        "Create a GIN index on a tsvector generated column."
      ],
      primarySource: "PostgreSQL Documentation: *Full Text Search* (postgresql.org/docs/current/textsearch.html).",
      quiz: [
        {
          q: "What is 'stemming' in full-text search engines?",
          a: [
            "Reducing grammatical word variants to their base morphological root (e.g. 'running', 'runs' -> 'run')",
            "Removing vowels from words to save disk space",
            "Translating words into computer binary code",
            "Capitalizing the first letter of each sentence"
          ],
          c: 0,
          why: "Stemming ensures searches for 'run' naturally match 'running', 'runner', and 'runs'."
        },
        {
          q: "What are 'stop words' in full-text search?",
          a: [
            "Extremely common words (like 'the', 'is', 'and', 'at') that are stripped because they carry almost zero search specificity",
            "Profanity words blocked by content filters",
            "Punctuation symbols like periods and question marks",
            "Words that trigger database errors"
          ],
          c: 0,
          why: "Stripping stop words keeps search indexes compact and eliminates noise."
        },
        {
          q: "How can you keep a tsvector column synchronized with text columns automatically in PostgreSQL 12+?",
          a: [
            "Use a Generated Column: search_vec tsvector GENERATED ALWAYS AS (to_tsvector('english', title || ' ' || body)) STORED",
            "Manually update the column in a Python cron job every night",
            "Set the column type to auto_sync",
            "It is impossible; users must run manual queries"
          ],
          c: 0,
          why: "Stored Generated Columns compute and persist the tsvector automatically whenever source text changes."
        },
        {
          q: "What operator in tsquery specifies phrase search (words directly adjacent to each other)?",
          a: [
            "The followed-by operator '<->' (e.g. 'quick <-> fox')",
            "The plus operator '+'",
            "The double quotes operator '\"\"'",
            "The exclamation mark '!'"
          ],
          c: 0,
          why: "phrase search in tsquery uses the '<->' operator to specify word distance."
        }
      ]
    },
    {
      n: 4,
      id: "postgresql-extensions-and-ecosystem",
      title: "PostgreSQL extensions and ecosystem",
      topic: "Extensions & Search",
      anim: "Code",
      lede: "PostgreSQL is modular. Discover how to install and leverage extensions like pg_trgm for fuzzy search, pgcrypto for hashing, and pgvector for AI embeddings.",
      winShort: "Install and utilize PostgreSQL extensions including pg_trgm and pgvector",
      missionLink: "Unlocks the vast ecosystem of pluggable PostgreSQL capabilities",
      sec1: {
        title: "The superpower of pluggable C extensions",
        content: `<p>Most databases are closed monoliths. PostgreSQL was designed from day one to be extended: third parties can write C extensions that register new data types, index access methods, and functions directly into the database engine.</p><p>With a single command (<code>CREATE EXTENSION name;</code>), you can add <b>pg_trgm</b> (fuzzy typo-tolerant string matching), <b>pgcrypto</b> (cryptographic functions), or <b>pgvector</b> (high-performance vector similarity search for AI embeddings).</p>`,
        keyIdea: "PostgreSQL extensions run natively in the engine, adding new types, indexes, and capabilities."
      },
      predict: {
        q: "What command enables a pre-installed extension in a PostgreSQL database?",
        a: [
          "CREATE EXTENSION IF NOT EXISTS extension_name;",
          "INSTALL PLUGIN extension_name;",
          "npm install extension_name",
          "pip install postgres-extension"
        ],
        c: 0,
        why: "CREATE EXTENSION is the standard DDL command to activate extensions in a database."
      },
      sec2: {
        title: "Popular extension ecosystem",
        content: `<p>Examine the most impactful extensions used in production PostgreSQL architectures.</p>`,
      },
      diagram: {
        boxes: [
          { title: "pg_trgm", lines: ["trigram fuzzy matching", "typo tolerance, speeds up LIKE '%q%'"] },
          { title: "pgvector", lines: ["vector embeddings (AI/LLM)", "cosine distance, HNSW indexes"] },
          { title: "PostGIS", lines: ["geographic information systems", "spatial polygons, GPS calculations"] }
        ]
      },
      sec3: {
        title: "Tracing pg_trgm fuzzy matching",
        content: `<p>Trace how trigrams match misspelled search terms against a database table.</p>`,
      },
      trace: {
        code: [
          "CREATE EXTENSION IF NOT EXISTS pg_trgm;",
          "SELECT name, similarity(name, 'posgresql') AS score",
          "FROM software",
          "WHERE name % 'posgresql' # typo: missing 't'",
          "ORDER BY score DESC;"
        ],
        steps: [
          { line: 0, vars: { extension: "pg_trgm activated in database" } },
          { line: 1, vars: { search_term: "'posgresql' (missing letter 't')" } },
          { line: 3, vars: { trigram_match: "% operator finds 'PostgreSQL' with 0.82 similarity score" } },
          { line: 4, vars: { result: "typo corrected and matched in 0.2ms" } }
        ]
      },
      practiceIntro: "Test your memory of PostgreSQL extensions.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The SQL command to enable an extension is CREATE <0>.",
          "The extension providing trigram fuzzy search matching is pg_<1>.",
          "The extension providing vector embeddings search for AI is pg<2>."
        ],
        blanks: [
          { a: ["EXTENSION"], why: "CREATE EXTENSION registers extensions." },
          { a: ["trgm"], why: "pg_trgm splits words into 3-letter trigrams." },
          { a: ["vector"], why: "pgvector provides vector distance search." }
        ]
      },
      win: "You can enhance PostgreSQL with extensions to support fuzzy search, cryptographic hashing, and AI vector similarity.",
      nextTasks: [
        "Enable the pg_trgm extension in a test database using CREATE EXTENSION pg_trgm.",
        "Calculate the similarity between two words using the similarity() function.",
        "List all active extensions in your database using \\dx in psql."
      ],
      primarySource: "PostgreSQL Documentation: *Packaging Related Objects into an Extension* & *pg_trgm* (postgresql.org/docs/current/pgtrgm.html).",
      quiz: [
        {
          q: "How does the 'pg_trgm' extension speed up 'LIKE %pattern%' queries?",
          a: [
            "It decomposes strings into 3-character trigrams and indexes them in a GIN index, enabling index seeks for wildcard searches",
            "It turns off the database firewall",
            "It converts text into numbers",
            "It removes all spaces from strings"
          ],
          c: 0,
          why: "Trigram GIN indexes allow fast indexed lookups even with leading wildcards (%term%)."
        },
        {
          q: "What capability does the 'pgvector' extension add to PostgreSQL?",
          a: [
            "Stores and queries high-dimensional vector embeddings with cosine and L2 distance metrics for AI applications",
            "Allows the database to draw SVG graphics on the screen",
            "Converts SQL into Python scripts",
            "Translates text into audio files"
          ],
          c: 0,
          why: "pgvector adds native vector types and HNSW/IVFFlat indexes for generative AI retrieval."
        },
        {
          q: "What command in psql lists all currently installed extensions in the database?",
          a: [
            "\\dx",
            "\\dt",
            "\\l",
            "\\du"
          ],
          c: 0,
          why: "\\dx displays all enabled extensions, their versions, and schemas."
        },
        {
          q: "Are PostgreSQL extensions global to the cluster or scoped to individual databases?",
          a: [
            "Scoped to individual databases; each database must explicitly run CREATE EXTENSION",
            "Global across all servers in the company",
            "They are installed on the client's laptop only",
            "They only exist in the master template1 database"
          ],
          c: 0,
          why: "Extensions are enabled per-database, ensuring clean isolation between applications."
        }
      ]
    },
    {
      n: 5,
      id: "roles-permissions-and-security",
      title: "Roles, permissions, and security",
      topic: "Security & Permissions",
      anim: "Code",
      lede: "Stop connecting your web application as the 'postgres' superuser. Master PostgreSQL role-based security: users, groups, GRANT, REVOKE, and the Principle of Least Privilege.",
      winShort: "Configure dedicated database application roles with least-privilege permissions",
      missionLink: "Prevents accidental database drops and limits blast radius during application compromises",
      sec1: {
        title: "The danger of the superuser",
        content: `<p>Connecting an application as the <code>postgres</code> superuser is an enormous security vulnerability. If an SQL injection flaw exists in your app, an attacker has full root access: they can read any table, drop the entire database, and even execute shell commands on the server via <code>COPY PROGRAM</code>!</p><p>Security mandates the <b>Principle of Least Privilege</b>: create dedicated application roles with permission to access <i>only the specific tables they need</i>, with zero superuser or schema alteration privileges.</p>`,
        keyIdea: "Never run applications as superusers; grant only the minimum necessary privileges to dedicated roles."
      },
      predict: {
        q: "What is the difference between a 'User' and a 'Group' in modern PostgreSQL?",
        a: [
          "They are both 'Roles'; a user is simply a role configured with the LOGIN attribute",
          "Users are stored on disk; groups are stored in memory",
          "Groups can only have up to five members",
          "There is no role concept in PostgreSQL"
        ],
        c: 0,
        why: "In PostgreSQL, users and groups are unified under 'Roles'; LOGIN allows connecting as a user."
      },
      sec2: {
        title: "The privilege delegation workflow",
        content: `<p>Learn the standard sequence for configuring secure application roles.</p>`,
      },
      diagram: {
        boxes: [
          { title: "1. Create Role", lines: ["CREATE ROLE app_user WITH LOGIN PASSWORD 'secret';", "no superuser, no create-db privileges"] },
          { title: "2. Grant Connect", lines: ["GRANT CONNECT ON DATABASE my_db TO app_user;", "grants entry to database"] },
          { title: "3. Table Privileges", lines: ["GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA public TO app_user;", "strictly limits mutation capabilities"] }
        ]
      },
      sec3: {
        title: "Tracing permission enforcement",
        content: `<p>Trace how PostgreSQL rejects a DROP TABLE command attempted by an application role.</p>`,
      },
      trace: {
        code: [
          "# Attacker attempts SQL injection via compromised web app:",
          "DROP TABLE users;",
          "# Engine checks role permissions for 'app_user':",
          "# Error: permission denied for table users (must be table owner!)",
          "# Result: Attack thwarted at the database security gate!"
        ],
        steps: [
          { line: 0, vars: { injection_attempt: "DROP TABLE users;" } },
          { line: 2, vars: { check: "app_user role lacks DROP privilege on relation" } },
          { line: 3, vars: { denied: "query rejected; database schema protected" } }
        ]
      },
      practiceIntro: "Test your memory of PostgreSQL security commands.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The SQL command conferring access rights to a role is <0>.",
          "The SQL command withdrawing access rights from a role is <1>.",
          "A role permitted to initiate a database session must have the <2> attribute."
        ],
        blanks: [
          { a: ["GRANT"], why: "GRANT confers table and schema privileges." },
          { a: ["REVOKE"], why: "REVOKE withdraws permissions." },
          { a: ["LOGIN"], why: "WITH LOGIN enables authenticating as that role." }
        ]
      },
      win: "You can design and enforce least-privilege role hierarchies that protect databases from destructive attacks.",
      nextTasks: [
        "Create a read-only reporting role that only possesses SELECT permissions.",
        "Create a dedicated application user with a strong password and test connecting.",
        "Inspect all roles in psql using the \\du command."
      ],
      primarySource: "PostgreSQL Documentation: *Database Roles* (postgresql.org/docs/current/user-manag.html).",
      quiz: [
        {
          q: "What is the Principle of Least Privilege in database security?",
          a: [
            "A role should only be granted the minimum permissions strictly necessary to perform its required job",
            "All users should be granted superuser privileges to avoid permission errors",
            "Passwords should be as short as possible to type quickly",
            "The database should be restarted after every query"
          ],
          c: 0,
          why: "Least privilege minimizes the blast radius if an application account is compromised."
        },
        {
          q: "Why is connecting an application as the 'postgres' superuser dangerous?",
          a: [
            "Superusers bypass all permission checks, can read any database, drop tables, and execute OS shell commands",
            "Superusers consume twice as much network bandwidth",
            "Superusers cannot use B-tree indexes",
            "The postgres user cannot run SELECT queries"
          ],
          c: 0,
          why: "Superusers have god-mode authority, enabling full system takeover through SQL injection."
        },
        {
          q: "How do you give a read-only role access to all future tables created in a schema?",
          a: [
            "ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO readonly_role;",
            "By running GRANT every five minutes in a cron job",
            "By setting the table background color to grey",
            "Future tables cannot be granted permissions automatically"
          ],
          c: 0,
          why: "ALTER DEFAULT PRIVILEGES automatically applies grants to newly created tables."
        },
        {
          q: "What file configures client authentication methods (md5, scram-sha-256) and network IP access in PostgreSQL?",
          a: [
            "pg_hba.conf (Host-Based Authentication)",
            "postgresql.conf",
            "nginx.conf",
            "/etc/hosts"
          ],
          c: 0,
          why: "pg_hba.conf controls client IP access, database permissions, and authentication mechanisms."
        }
      ]
    },
    {
      n: 6,
      id: "roles-permissions-and-row-level-security",
      title: "Row-Level Security (RLS)",
      topic: "Security & Permissions",
      anim: "Code",
      lede: "What if the database automatically ensured tenant A could never see tenant B's data, even if your backend had a bug? Master PostgreSQL Row-Level Security (RLS).",
      winShort: "Implement multi-tenant data isolation using PostgreSQL Row-Level Security policies",
      missionLink: "Provides defense-in-depth tenant isolation directly inside the database engine",
      sec1: {
        title: "Defense in depth at the row level",
        content: `<p>In standard SQL permissions, GRANT is all-or-nothing: if you can <code>SELECT</code> from <code>documents</code>, you can select every row in the table. If an application developer forgets <code>WHERE tenant_id = 42</code>, one customer's private data is leaked to another!</p><p><b>Row-Level Security (RLS)</b> moves isolation into the database engine. When enabled, every query (even <code>SELECT * FROM documents;</code>) is automatically rewritten by PostgreSQL to filter only rows permitted by active <b>Security Policies</b>.</p>`,
        keyIdea: "Row-Level Security rewrites queries at the engine level to ensure users only see their own rows."
      },
      predict: {
        q: "Under Row-Level Security, what happens if an application runs 'SELECT * FROM documents' without a WHERE clause?",
        a: [
          "The database automatically filters the query to return only the rows matching the active user's RLS policy",
          "It returns all rows across all customers",
          "The query throws an unhandled error",
          "The database deletes all unowned rows"
        ],
        c: 0,
        why: "RLS policies inject security predicates transparently, filtering results at the engine level."
      },
      sec2: {
        title: "The RLS configuration steps",
        content: `<p>Follow the two-step sequence to enforce row-level security on a table.</p>`,
      },
      diagram: {
        boxes: [
          { title: "1. Enable RLS", lines: ["ALTER TABLE documents", "ENABLE ROW LEVEL SECURITY;"] },
          { title: "2. Define Policy", lines: ["CREATE POLICY user_policy ON documents", "USING (owner_id = current_user_id())"] },
          { title: "3. Automatic Filter", lines: ["SELECT * FROM documents;", "automatically runs as: WHERE owner_id = 42"] }
        ]
      },
      sec3: {
        title: "Tracing session variable RLS enforcement",
        content: `<p>Trace how setting an application context variable enforces tenant isolation across queries.</p>`,
      },
      trace: {
        code: [
          "# Policy: USING (tenant_id = current_setting('app.tenant_id')::int)",
          "# App sets context for current request:",
          "SET LOCAL app.tenant_id = '5';",
          "SELECT title FROM documents; # Automatically restricted to tenant_id = 5!",
          "# Tenant 4 documents are completely invisible and unmodifiable"
        ],
        steps: [
          { line: 0, vars: { policy: "evaluates app.tenant_id session parameter" } },
          { line: 2, vars: { context: "app sets tenant_id = 5 for transaction" } },
          { line: 3, vars: { filtered: "PostgreSQL transparently adds WHERE tenant_id = 5" } }
        ]
      },
      practiceIntro: "Test your memory of Row-Level Security syntax.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The command to activate row filters on a table is ENABLE ROW LEVEL <0>.",
          "The database rule defining row access conditions is a <1>.",
          "The clause in a policy defining visible rows for SELECT is <2>."
        ],
        blanks: [
          { a: ["SECURITY"], why: "ENABLE ROW LEVEL SECURITY activates RLS." },
          { a: ["POLICY"], why: "CREATE POLICY defines the filtering rules." },
          { a: ["USING"], why: "USING (expression) specifies which rows are accessible." }
        ]
      },
      win: "You can implement multi-tenant architectures where data isolation is guaranteed by database engine policies.",
      nextTasks: [
        "Enable Row-Level Security on a table using ALTER TABLE ... ENABLE ROW LEVEL SECURITY.",
        "Create a policy using CREATE POLICY ... USING (user_id = current_user).",
        "Test running SELECT * as different database roles to verify isolation."
      ],
      primarySource: "PostgreSQL Documentation: *Row Security Policies* (postgresql.org/docs/current/ddl-rowsecurity.html).",
      quiz: [
        {
          q: "What is the primary architectural benefit of Row-Level Security (RLS)?",
          a: [
            "It provides bulletproof multi-tenant isolation at the database layer, protecting data even if application code has missing WHERE clauses",
            "It speeds up queries by fifty percent",
            "It eliminates the need for database backups",
            "It automatically translates text into foreign languages"
          ],
          c: 0,
          why: "RLS is defense-in-depth: bugs in application code cannot leak rows filtered by database policy."
        },
        {
          q: "Do table owners or database superusers get filtered by Row-Level Security by default?",
          a: [
            "No, superusers and table owners bypass RLS policies by default unless 'FORCE ROW LEVEL SECURITY' is enabled",
            "Yes, RLS filters all users including superusers equally",
            "Superusers cannot access tables with RLS",
            "Only on SQLite databases"
          ],
          c: 0,
          why: "Table owners and superusers bypass policies; testing RLS requires non-owner roles or FORCE."
        },
        {
          q: "What is the difference between the 'USING' and 'WITH CHECK' clauses in a policy?",
          a: [
            "USING filters existing rows for SELECT/UPDATE/DELETE; WITH CHECK validates new rows being inserted or updated",
            "USING is for numbers; WITH CHECK is for text",
            "USING only works in PostgreSQL 10",
            "There is no difference between them"
          ],
          c: 0,
          why: "USING controls visibility of existing records; WITH CHECK validates newly written records."
        },
        {
          q: "How can a web application pass the current authenticated user ID to PostgreSQL RLS policies in a pooled connection?",
          a: [
            "Using transaction-scoped session settings: SET LOCAL app.current_user_id = '42';",
            "By recreating the database connection on every request",
            "By emailing the user ID to the database administrator",
            "By writing the user ID to a text file on the desktop"
          ],
          c: 0,
          why: "SET LOCAL binds the variable strictly to the current transaction, safely resetting upon commit."
        }
      ]
    },
    {
      n: 7,
      id: "connection-pooling-and-pgbouncer",
      title: "Connection pooling and PgBouncer",
      topic: "Operations & Backups",
      anim: "Code",
      lede: "PostgreSQL processes are not lightweight threads. Discover why opening 500 connections exhausts memory and CPU, and how connection poolers like PgBouncer enable 10,000 clients.",
      winShort: "Configure connection pooling with PgBouncer to prevent database process exhaustion",
      missionLink: "Prevents database crashes caused by connection spikes in modern serverless and container apps",
      sec1: {
        title: "The cost of a PostgreSQL connection",
        content: `<p>Unlike some databases that use lightweight threads, <b>PostgreSQL forks an entire operating system process for every connection</b>. Each connection consumes about 10MB of RAM and incurs CPU overhead during context switching. If 500 clients connect simultaneously, memory is exhausted and the CPU spends all its time switching processes.</p><p>A <b>Connection Pooler</b> (like <b>PgBouncer</b>) sits between clients and PostgreSQL. It holds a small pool of active database connections (e.g. 20) and multiplexes thousands of incoming client requests over them seamlessly.</p>`,
        keyIdea: "PostgreSQL uses heavy OS processes; connection poolers multiplex thousands of clients over a few connections."
      },
      predict: {
        q: "What happens if a serverless backend spawns 2,000 Lambda functions that each open a direct PostgreSQL connection?",
        a: [
          "The database exhausts max_connections, runs out of memory, and crashes with connection refused errors",
          "PostgreSQL smoothly handles all 2,000 connections with zero latency",
          "The server automatically downloads more RAM",
          "The queries run in reverse order"
        ],
        c: 0,
        why: "Direct connections from serverless bursts overwhelm PostgreSQL process limits instantly."
      },
      sec2: {
        title: "The three PgBouncer pooling modes",
        content: `<p>Understand the three pooling levels supported by PgBouncer and their trade-offs.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Session Pooling", lines: ["connection kept for entire client session", "safest, supports all features", "limits total concurrent clients"] },
          { title: "Transaction Pooling (Most Popular)", lines: ["connection released after each COMMIT", "maximum client multiplexing!", "cannot use SET or prepared statements"] },
          { title: "Statement Pooling", lines: ["connection released after each statement", "no multi-statement transactions!", "rarely used"] }
        ]
      },
      sec3: {
        title: "Tracing connection multiplexing",
        content: `<p>Trace how PgBouncer multiplexes 500 web clients across only 15 real PostgreSQL server processes.</p>`,
      },
      trace: {
        code: [
          "# 500 web app containers connect to PgBouncer on port 6432",
          "# PgBouncer holds exactly 15 persistent connections to PostgreSQL on port 5432",
          "# Client A sends: BEGIN; UPDATE ...; COMMIT; -> uses Conn #1 for 5ms, then releases it!",
          "# Client B immediately grabs Conn #1 -> 15 server connections easily serve 5,000 req/sec!"
        ],
        steps: [
          { line: 0, vars: { frontend_load: "500 concurrent client connections" } },
          { line: 1, vars: { backend_pool: "strictly 15 backend processes in PostgreSQL" } },
          { line: 2, vars: { multiplex: "transactions claim and release connections in milliseconds" } },
          { line: 3, vars: { result: "CPU load stays below 20%; zero connection exhaustion" } }
        ]
      },
      practiceIntro: "Test your memory of connection pooling concepts.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The standard lightweight connection pooler for PostgreSQL is Pg<0>.",
          "PostgreSQL allocates a dedicated OS <1> for every client connection.",
          "The pooling mode that reassigns connections upon COMMIT is <2> pooling."
        ],
        blanks: [
          { a: ["Bouncer"], why: "PgBouncer is the industry standard pooler." },
          { a: ["process"], why: "Postgres uses heavy processes rather than light threads." },
          { a: ["transaction"], why: "Transaction pooling multiplexes at transaction boundaries." }
        ]
      },
      win: "You can architect high-concurrency systems using PgBouncer to protect PostgreSQL from connection exhaustion.",
      nextTasks: [
        "Check your current connection limit using SHOW max_connections in PostgreSQL.",
        "Inspect active connections using SELECT count(*) FROM pg_stat_activity.",
        "Configure PgBouncer in transaction pooling mode for a containerized backend."
      ],
      primarySource: "PgBouncer Documentation: *Features and Architecture* (pgbouncer.org).",
      quiz: [
        {
          q: "Why shouldn't you simply increase 'max_connections = 5000' in postgresql.conf to handle traffic spikes?",
          a: [
            "Thousands of PostgreSQL backend processes cause devastating CPU context switching overhead and memory exhaustion",
            "PostgreSQL strictly limits max_connections to 100 by law",
            "Increasing connections deletes table indexes",
            "It turns off the database query cache"
          ],
          c: 0,
          why: "Process thrashing and memory bloat cause severe performance collapse past a few hundred connections."
        },
        {
          q: "What is the restriction of using PgBouncer in 'Transaction Pooling' mode?",
          a: [
            "Session-level features like named prepared statements and SET commands do not persist across transactions",
            "You cannot write INSERT or UPDATE queries",
            "Transactions can only contain one line of SQL",
            "It only works with SQLite databases"
          ],
          c: 0,
          why: "Because subsequent transactions run on different backend connections, session state is lost."
        },
        {
          q: "What system view in PostgreSQL shows all currently active queries and connection states?",
          a: [
            "pg_stat_activity",
            "pg_connections",
            "pg_active_queries",
            "pg_stat_tables"
          ],
          c: 0,
          why: "pg_stat_activity reports client IPs, active queries, states, and transaction durations."
        },
        {
          q: "How does a connection pooler improve application latency during traffic surges?",
          a: [
            "It eliminates the expensive CPU overhead of repeatedly establishing and tearing down TCP/TLS connections to PostgreSQL",
            "It increases the internet download speed of client computers",
            "It compresses query text by eighty percent",
            "It automatically fixes slow SQL queries"
          ],
          c: 0,
          why: "Reusing persistent backend connections saves tens of milliseconds on every database interaction."
        }
      ]
    },
    {
      n: 8,
      id: "backups-disaster-recovery-and-vacuum",
      title: "Backups, disaster recovery, and vacuum",
      topic: "Operations & Backups",
      anim: "Code",
      lede: "There are two kinds of engineers: those who have lost data, and those who will. Master logical backups with pg_dump, physical Point-In-Time Recovery (PITR), and VACUUM maintenance.",
      winShort: "Execute database backups, perform Point-In-Time Recovery, and manage vacuum maintenance",
      missionLink: "The ultimate operational safeguard protecting enterprise data from permanent loss",
      sec1: {
        title: "Logical dumps versus Physical backups",
        content: `<p>A database backup is only as good as your ability to restore it. PostgreSQL provides two backup mechanisms: <b>Logical Backups (pg_dump)</b> and <b>Physical Backups with WAL Archiving (Point-In-Time Recovery / PITR)</b>.</p><p><code>pg_dump</code> exports the database as SQL scripts or a compressed custom archive. It is perfect for small-to-medium databases. For large terabyte databases, continuous WAL archiving allows <b>Point-in-Time Recovery</b>: you can roll back the database to <i>any exact historical second</i> (e.g. 1 minute before a junior developer accidentally ran DROP TABLE)!</p>`,
        keyIdea: "Use pg_dump for logical backups; use WAL archiving for continuous Point-in-Time Recovery (PITR)."
      },
      predict: {
        q: "Does running 'pg_dump' lock the database and block other users from reading or writing data?",
        a: [
          "No, pg_dump uses an MVCC snapshot to export a consistent point-in-time backup without blocking writes",
          "Yes, it locks the entire database exclusively for the entire duration of the dump",
          "It blocks reads, but allows writes",
          "It forces the database to restart"
        ],
        c: 0,
        why: "Thanks to MVCC, pg_dump reads a consistent snapshot while normal write traffic continues undisturbed."
      },
      sec2: {
        title: "The backup strategy comparison",
        content: `<p>Evaluate logical dumps versus physical continuous archiving.</p>`,
      },
      diagram: {
        boxes: [
          { title: "pg_dump (Logical)", lines: ["exports SQL / custom archive (-Fc)", "portable across Postgres versions", "slower on large terabyte tables"] },
          { title: "WAL Archiving + Basebackup (PITR)", lines: ["continuous physical backup", "restore to any exact historical second!", "essential for mission-critical enterprise data"] }
        ]
      },
      sec3: {
        title: "Tracing a Point-in-Time Recovery (PITR)",
        content: `<p>Trace how a company recovers from an accidental table drop at 14:05:00 using PITR.</p>`,
      },
      trace: {
        code: [
          "# Disaster: Malicious script dropped 'orders' table at 2026-10-03 14:05:22",
          "# Recovery Step 1: Restore midnight base backup",
          "# Recovery Step 2: Configure recovery_target_time = '2026-10-03 14:05:00' (22 seconds before drop!)",
          "# Recovery Step 3: Engine replays WAL logs and halts right before the DROP TABLE statement!",
          "# Result: Database restored to perfection with zero lost data!"
        ],
        steps: [
          { line: 0, vars: { incident: "accidental drop at 14:05:22" } },
          { line: 1, vars: { restore_base: "unpacks physical basebackup" } },
          { line: 2, vars: { target_time: "target set to 14:05:00" } },
          { line: 3, vars: { replay: "replays WAL sequentially, stopping 22 seconds before disaster" } }
        ]
      },
      practiceIntro: "Test your memory of backup and maintenance commands.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The CLI utility to create a logical database backup is pg_<0>.",
          "Restoring a database to a specific historical second is Point-In-Time <1>.",
          "The maintenance command that reclaims dead tuple storage is <2>."
        ],
        blanks: [
          { a: ["dump"], why: "pg_dump creates logical database backups." },
          { a: ["Recovery", "PITR"], why: "PITR enables second-by-second rollbacks." },
          { a: ["VACUUM"], why: "VACUUM frees dead row versions." }
        ]
      },
      win: "You can design and execute robust disaster recovery plans using pg_dump and Point-in-Time Recovery.",
      nextTasks: [
        "Create a compressed custom backup using pg_dump -Fc mydb > mydb.dump.",
        "Restore the backup into a new test database using pg_restore.",
        "Run VACUUM (VERBOSE, ANALYZE) on a table and inspect dead tuple cleanup in output."
      ],
      primarySource: "PostgreSQL Documentation: *Backup and Restore* (postgresql.org/docs/current/backup.html).",
      quiz: [
        {
          q: "What does Point-in-Time Recovery (PITR) allow you to do after an operational disaster?",
          a: [
            "Replay WAL logs on top of a base backup to restore the database to the exact second right before the disaster occurred",
            "Undo the physical passage of time on the server clock",
            "Restore deleted files from the user web browser cache",
            "Convert PostgreSQL into an Oracle database"
          ],
          c: 0,
          why: "PITR replays WAL transactions forward to an exact specified timestamp, avoiding data loss."
        },
        {
          q: "Why is the custom format (-Fc) preferred when running pg_dump?",
          a: [
            "It is compressed, supports parallel multi-threaded restore with pg_restore, and allows selective table restoration",
            "It converts all tables into PDF documents",
            "It is the only format supported on Apple Mac computers",
            "It deletes old backups automatically"
          ],
          c: 0,
          why: "The custom format (-Fc) is compact and enables fast parallel restores via pg_restore -j."
        },
        {
          q: "What is the difference between standard VACUUM and VACUUM FULL in PostgreSQL?",
          a: [
            "VACUUM reclaims dead space for future table inserts without locking; VACUUM FULL rewrites the table to disk and requires an exclusive lock",
            "VACUUM only works on numbers; VACUUM FULL works on text",
            "VACUUM FULL is automatic; VACUUM must be run manually",
            "There is no difference between them"
          ],
          c: 0,
          why: "VACUUM FULL rewrites the entire table file to reclaim OS disk space, but locks out all reads and writes."
        },
        {
          q: "What is the golden rule of database disaster recovery?",
          a: [
            "An untested backup is not a backup: you must routinely practice restoring backups into test environments to prove they work",
            "Backups should only be created on December 31st",
            "Never store backups on external hard drives",
            "Always store database passwords inside the backup filename"
          ],
          c: 0,
          why: "Backups often fail during restore if unverified; regular restore drills are mandatory for reliability."
        }
      ]
    }
  ]
};

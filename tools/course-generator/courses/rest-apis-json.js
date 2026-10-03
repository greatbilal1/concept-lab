"use strict";

module.exports = {
  id: "rest-apis-json",
  title: "REST APIs & JSON",
  num: 28,
  emoji: "🧾",
  desc: "Design resources, verbs, status codes and versioning — then consume and build real APIs.",
  mission: `# Mission — REST APIs & JSON

## Why this course exists

Representational State Transfer (REST) and JavaScript Object Notation (JSON) are the lingua franca of modern distributed systems. Every mobile app, single-page application, and third-party webhook integration communicates through JSON over HTTP. Yet many developers design fragile, inconsistent endpoints that mix actions into URLs, return confusing status codes, or fail to handle versioning. This course teaches how to design, consume, and document clean, idiomatic RESTful APIs.

## What the learner can do at the end

- Model domain entities as clean, noun-based RESTful resources with hierarchical URI patterns.
- Apply standard HTTP verbs (GET, POST, PUT, PATCH, DELETE) to collection and item endpoints.
- Parse, serialize, and validate JSON payloads with proper content negotiation headers.
- Design consistent error response envelopes and standard pagination query parameters.
- Implement API versioning strategies (URI path, header, query param) and document schemas with OpenAPI.

## What this course is NOT

- Not a framework-specific tutorial (Express, Django, Spring).
- Not a GraphQL or gRPC course. It focuses strictly on RESTful HTTP architecture.

## Success looks like

When given a new product feature requirement, the learner designs a complete, RESTful API resource specification with exact URIs, verbs, request bodies, and status codes in under ten minutes.
`,
  notes: `# Notes — REST APIs & JSON

## Decisions
- Group into four themes: REST Principles & Resources, JSON & Serialization, API Design Patterns, and Versioning & Documentation.
- Emphasize standard REST constraints (statelessness, resource-oriented URIs, uniform interface).
`,
  resources: `# Resources — REST APIs & JSON

## Knowledge (primary sources)
- Roy Fielding, *Architectural Styles and the Design of Network-based Software Architectures* (Dissertation, 2000).
- Leonard Richardson and Sam Ruby, *RESTful Web Services* (O'Reilly).
- ECMA-404: *The JSON Data Interchange Syntax*.
- OpenAPI Specification 3.1.0 (spec.openapis.org).

## Wisdom
- URIs are nouns; HTTP verbs are actions. Keep verbs out of your endpoint paths.
`,
  cheatsheetSections: [
    {
      title: "Resource URI Patterns",
      label: "Standard collection & item endpoints",
      code: `GET    /api/v1/articles          # List articles (filterable)
POST   /api/v1/articles          # Create new article
GET    /api/v1/articles/42       # Retrieve single article
PATCH  /api/v1/articles/42       # Partial update article
DELETE /api/v1/articles/42       # Remove article
GET    /api/v1/articles/42/comments # Sub-resource collection`,
      lessonN: 2,
      lessonSlug: "resource-oriented-uri-design",
      lessonTitle: "Resource-oriented URI design"
    },
    {
      title: "Standard JSON Error Envelope",
      label: "Consistent error responses",
      code: `HTTP/1.1 422 Unprocessable Entity
Content-Type: application/problem+json

{
  "type": "https://api.example.com/errors/validation",
  "title": "Invalid Input Data",
  "status": 422,
  "detail": "Email address is already registered.",
  "instance": "/users/signup"
}`,
      lessonN: 5,
      lessonSlug: "error-handling-and-problem-details",
      lessonTitle: "Error handling and Problem Details"
    },
    {
      title: "Pagination Patterns",
      label: "Offset versus cursor query parameters",
      code: `// Offset pagination
GET /items?offset=20&limit=10

// Cursor-based pagination (scale-friendly)
GET /items?cursor=eyJpZCI6NDJ9&limit=10

Response Envelope:
{
  "data": [...],
  "pagination": { "next_cursor": "eyJpZCI6NTJ9", "has_more": true }
}`,
      lessonN: 6,
      lessonSlug: "pagination-filtering-and-sorting",
      lessonTitle: "Pagination, filtering, and sorting"
    },
    {
      title: "API Versioning",
      label: "Evolution strategies",
      code: `// 1. URI path versioning (most popular)
https://api.example.com/v1/users

// 2. Custom header versioning
X-API-Version: 2026-05-01

// 3. Accept header content negotiation
Accept: application/vnd.example.v2+json`,
      lessonN: 7,
      lessonSlug: "api-versioning-strategies",
      lessonTitle: "API versioning strategies"
    }
  ],
  glossaryGroups: [
    {
      id: "rest-foundations",
      title: "REST Architecture & Resources",
      terms: [
        { term: "REST", def: "Representational State Transfer: an architectural style for distributed hypermedia systems based on resource abstractions.", lesson: 1, tags: ["architecture"] },
        { term: "Resource", def: "Any named concept that can be identified, addressed, and manipulated via a URI (e.g. user, order, invoice).", lesson: 1, tags: ["resources"] },
        { term: "Uniform interface", def: "The core REST constraint mandating standardized resource identification, representations, and self-descriptive messages.", lesson: 1, tags: ["architecture"] },
        { term: "Collection URI", def: "A pluralized endpoint representing a set of resources (e.g. /api/users).", lesson: 2, tags: ["uri"] }
      ]
    },
    {
      id: "json-data",
      title: "JSON & Data Representations",
      terms: [
        { term: "JSON", def: "JavaScript Object Notation: a lightweight, text-based, language-independent data interchange format.", lesson: 3, tags: ["json"] },
        { term: "Serialization", def: "The process of converting in-memory data structures into a string format (like JSON) for storage or transmission.", lesson: 3, tags: ["data"] },
        { term: "application/json", def: "The standard IANA MIME media type declaring that an HTTP payload contains JSON formatted text.", lesson: 3, tags: ["mime"] },
        { term: "Idempotency key", def: "A unique client-generated token attached to POST requests allowing safe deduplication and retries.", lesson: 4, tags: ["api"] }
      ]
    },
    {
      id: "api-patterns",
      title: "API Design Patterns & Errors",
      terms: [
        { term: "Problem Details", def: "RFC 7807 / 9457 standard JSON format providing structured machine-readable error details.", lesson: 5, tags: ["errors"] },
        { term: "Cursor pagination", def: "A pagination technique using an opaque pointer to a record rather than an offset index for stable querying.", lesson: 6, tags: ["pagination"] },
        { term: "Rate limiting", def: "A server policy restricting the number of API requests a client can make within a specified time window.", lesson: 6, tags: ["security"] },
        { term: "Sub-resource", def: "A resource existing only within the context of a parent resource (e.g. /users/1/orders).", lesson: 2, tags: ["uri"] }
      ]
    },
    {
      id: "versioning-docs",
      title: "Evolution & Documentation",
      terms: [
        { term: "API versioning", def: "The practice of managing non-backwards-compatible changes to an API contract across service updates.", lesson: 7, tags: ["evolution"] },
        { term: "Breaking change", def: "A modification to an API endpoint, field, or behavior that breaks existing client integrations.", lesson: 7, tags: ["design"] },
        { term: "OpenAPI", def: "A standardized, vendor-neutral specification format for describing and documenting RESTful APIs.", lesson: 8, tags: ["docs"] },
        { term: "HATEOAS", def: "Hypermedia as the Engine of Application State: a REST constraint where clients navigate APIs via hypermedia links.", lesson: 8, tags: ["rest"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "the-six-guiding-constraints-of-rest",
      title: "The six guiding constraints of REST",
      topic: "REST Architecture & Resources",
      anim: "Code",
      lede: "What actually makes an API 'RESTful'? Discover the six architectural constraints defined by Roy Fielding that ensure internet-scale longevity.",
      winShort: "Articulate the six fundamental architectural constraints of REST systems",
      missionLink: "The theoretical foundation separating genuine REST from ad-hoc HTTP endpoints",
      sec1: {
        title: "Fielding's architectural constraints",
        content: `<p>In his 2000 doctoral dissertation, Roy Fielding analyzed what made the World Wide Web so resilient and scalable. He codified these properties into an architectural style called <b>REST (Representational State Transfer)</b>.</p><p>A system is genuinely RESTful only if it adheres to six core constraints: <b>Client-Server</b>, <b>Stateless</b>, <b>Cacheable</b>, <b>Uniform Interface</b>, <b>Layered System</b>, and optional <b>Code on Demand</b>. Together, these constraints enable independent evolution without breaking clients.</p>`,
        keyIdea: "REST is an architectural style defined by six constraints that guarantee scalability and longevity."
      },
      predict: {
        q: "Why is statelessness mandatory in RESTful architecture?",
        a: [
          "It allows any server in a cluster to handle any request, enabling seamless horizontal scalability",
          "It prevents the server from storing records in relational databases",
          "It forces users to enter passwords on every single mouse click",
          "It reduces client computer screen power consumption"
        ],
        c: 0,
        why: "Statelessness eliminates server-side session stickiness, allowing effortless load balancing."
      },
      sec2: {
        title: "The six constraints breakdown",
        content: `<p>Examine how each architectural constraint contributes to system stability.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Client-Server & Stateless", lines: ["separation of UI from data", "every request contains all credentials"] },
          { title: "Cacheable & Layered", lines: ["responses declare cache rules", "proxies/CDNs operate transparently"] },
          { title: "Uniform Interface", lines: ["URIs identify resources", "standard HTTP verbs & self-descriptive messages"] }
        ]
      },
      sec3: {
        title: "Tracing an RPC versus RESTful request",
        content: `<p>Compare an ad-hoc Remote Procedure Call (RPC) with an idiomatic RESTful resource invocation.</p>`,
      },
      trace: {
        code: [
          "# Bad RPC style (actions in URL):",
          "POST /api/deleteUser?id=42",
          "# Clean RESTful style (noun URI + standard verb):",
          "DELETE /api/v1/users/42"
        ],
        steps: [
          { line: 1, vars: { anti_pattern: "uses POST for deletion; action verb embedded in URL" } },
          { line: 3, vars: { rest_idiom: "standard DELETE verb applied to unique noun resource URI" } }
        ]
      },
      practiceIntro: "Test your recall of REST architectural constraints.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The author who coined the REST architectural style is Roy <0>.",
          "The constraint requiring that every request contain all necessary context is <1>.",
          "The constraint mandating standard verbs and resource URIs is the <2> interface."
        ],
        blanks: [
          { a: ["Fielding"], why: "Roy Fielding introduced REST in his 2000 dissertation." },
          { a: ["stateless", "statelessness"], why: "Statelessness forbids server session memory." },
          { a: ["uniform"], why: "Uniform interface standardizes interactions across all resources." }
        ]
      },
      win: "You can evaluate APIs against the six REST architectural constraints and articulate the benefits of resource-oriented design.",
      nextTasks: [
        "Audit an API you use daily and check if its endpoints follow REST or RPC style.",
        "List three benefits of separating client UI from server persistence.",
        "Explain why caching constraints are critical for public web APIs."
      ],
      primarySource: "Roy Fielding, *Architectural Styles and the Design of Network-based Software Architectures* (Chapter 5: 'Representational State Transfer').",
      quiz: [
        {
          q: "What does the 'Uniform Interface' constraint in REST mandate?",
          a: [
            "A standardized convention for identifying resources, manipulating them via representations, and self-descriptive messages",
            "Every web page must use the exact same visual CSS theme",
            "All API responses must be formatted as plain text without JSON",
            "Every database table must have the same column names"
          ],
          c: 0,
          why: "Uniform interface decouples clients from implementation by standardizing HTTP verbs and representations."
        },
        {
          q: "Why is 'POST /api/updateUser' considered non-RESTful?",
          a: [
            "It puts the action verb 'update' in the URI instead of using the standard PATCH/PUT HTTP method on a noun resource",
            "Because updateUser is too short to be a valid endpoint",
            "Because POST requests cannot be sent over internet connections",
            "Because JSON does not support the word user"
          ],
          c: 0,
          why: "URIs should name resources (nouns); HTTP verbs should specify the action."
        },
        {
          q: "What is a 'Layered System' in REST architecture?",
          a: [
            "A client cannot tell whether it is connected directly to the end server or an intermediary proxy/CDN/load balancer",
            "A system where databases are layered on top of web browsers",
            "A software architecture containing at least twenty microservices",
            "A computer with multiple physical hard drives"
          ],
          c: 0,
          why: "Layered systems allow inserting caches, security gateways, and load balancers transparently."
        },
        {
          q: "Which of the six REST constraints is designated as optional?",
          a: [
            "Code on Demand (e.g. delivering executable JavaScript or applets)",
            "Statelessness",
            "Client-Server separation",
            "Uniform Interface"
          ],
          c: 0,
          why: "Fielding noted Code on Demand as the sole optional constraint in the REST style."
        }
      ]
    },
    {
      n: 2,
      id: "resource-oriented-uri-design",
      title: "Resource-oriented URI design",
      topic: "REST Architecture & Resources",
      anim: "Code",
      lede: "URIs are nouns; verbs are methods. Learn how to structure clean, predictable REST endpoints for collections, individual items, and nested sub-resources.",
      winShort: "Design clean, noun-based RESTful URI hierarchies for complex domain models",
      missionLink: "Eliminates messy URL endpoints and establishes intuitive API conventions",
      sec1: {
        title: "Nouns, pluralization, and identifiers",
        content: `<p>A well-designed REST API reads like an organized library catalogue. Endpoints identify <b>resources (nouns)</b>, never operations (verbs). By industry convention, collection URIs use lowercase plural nouns: <code>/users</code>, <code>/orders</code>, <code>/articles</code>.</p><p>Individual items are accessed by appending their unique identifier: <code>/users/42</code>. Nested sub-resources express ownership: <code>/users/42/orders</code> clearly identifies the orders belonging to user 42.</p>`,
        keyIdea: "Use plural nouns for collections, identifiers for items, and nest only when strict ownership exists."
      },
      predict: {
        q: "Which URI pattern is the most idiomatic RESTful design for fetching comments on article 15?",
        a: [
          "GET /api/v1/articles/15/comments",
          "GET /api/v1/getCommentsForArticle?articleId=15",
          "POST /api/v1/fetch_comments/15",
          "GET /api/v1/article_comments_15"
        ],
        c: 0,
        why: "Nesting /articles/15/comments cleanly reflects the parent-child relationship using noun paths."
      },
      sec2: {
        title: "The standard resource matrix",
        content: `<p>Combine plural noun endpoints with the five standard HTTP verbs to cover full CRUD operations.</p>`,
      },
      diagram: {
        boxes: [
          { title: "GET /articles", lines: ["list collection items", "supports filter query params"] },
          { title: "POST /articles", lines: ["create new item", "returns 201 Created + Location"] },
          { title: "GET/PATCH/DELETE /articles/:id", lines: ["retrieve, update, or delete single item", "identified by unique ID"] }
        ]
      },
      sec3: {
        title: "Tracing nested sub-resource limits",
        content: `<p>Avoid nesting deeper than two levels; flatten deep relationships to keep URIs maintainable.</p>`,
      },
      trace: {
        code: [
          "# Bad: Over-nested URI (too deep!):",
          "# GET /orgs/1/departments/4/teams/12/members/99/tasks/3",
          "# Clean: Flattened resource reference:",
          "# GET /tasks/3 (task IDs are globally unique!)"
        ],
        steps: [
          { line: 1, vars: { anti_pattern: "deep nesting creates fragile, brittle URLs" } },
          { line: 3, vars: { best_practice: "flatten once you reach unique entity identifiers" } }
        ]
      },
      practiceIntro: "Test your memory of URI design conventions.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "REST endpoint paths should be composed of <0>, not verbs.",
          "By standard convention, resource collections are named with <1> nouns.",
          "A resource owned by another entity is a <2>-resource."
        ],
        blanks: [
          { a: ["nouns"], why: "URIs name resources (nouns); HTTP methods supply actions." },
          { a: ["plural", "pluralized"], why: "Collections use plural nouns like /users, /products." },
          { a: ["sub"], why: "Sub-resources represent nested child relationships." }
        ]
      },
      win: "You can design intuitive, scalable URI hierarchies that require minimal documentation for developers to understand.",
      nextTasks: [
        "Take a messy RPC-style API and refactor it into clean noun-based REST endpoints.",
        "Flatten a URI nested deeper than two levels into a top-level resource endpoint.",
        "Verify that your collection endpoints use plural nouns consistently."
      ],
      primarySource: "Leonard Richardson & Sam Ruby, *RESTful Web Services*, Chapter 4: 'The Resource-Oriented Architecture'.",
      quiz: [
        {
          q: "Why should collection URIs use plural nouns (e.g. /customers instead of /customer)?",
          a: [
            "To consistently represent that the endpoint is a container of multiple resource entities",
            "Because singular words are not supported in HTTP paths",
            "To prevent database queries from crashing",
            "Plural nouns use less network bandwidth"
          ],
          c: 0,
          why: "Plural nouns clearly indicate a collection from which individual items can be addressed."
        },
        {
          q: "What is the recommended maximum nesting depth for REST sub-resource paths?",
          a: [
            "Two levels maximum (e.g. /parents/:id/children); deeper hierarchies should be flattened",
            "At least ten levels deep",
            "Nesting is forbidden entirely in REST",
            "Infinite levels"
          ],
          c: 0,
          why: "Nesting past two levels (/a/1/b/2/c/3) produces fragile URLs; top-level IDs are preferred."
        },
        {
          q: "How should non-CRUD operations (like 'archive' or 'publish') be modeled in REST?",
          a: [
            "Model them as sub-resource transitions (e.g. POST /articles/42/publications) or PATCH state fields",
            "Invent new HTTP methods like ARCHIVE or PUBLISH",
            "Use GET requests with actions in query parameters",
            "Send an email to the server administrator"
          ],
          c: 0,
          why: "Treating actions as state updates (PATCH status: 'archived') or sub-resources preserves REST semantics."
        },
        {
          q: "Which casing convention is standard for RESTful URI path segments?",
          a: [
            "kebab-case (lowercase with hyphens: /user-profiles)",
            "camelCase (/userProfiles)",
            "UPPER_SNAKE_CASE (/USER_PROFILES)",
            "TitleCase (/UserProfiles)"
          ],
          c: 0,
          why: "kebab-case is standard for URIs because URLs are case-insensitive on some servers."
        }
      ]
    },
    {
      n: 3,
      id: "json-structure-types-and-serialization",
      title: "JSON structure, types, and serialization",
      topic: "JSON & Data Representations",
      anim: "Code",
      lede: "JSON is the universal payload format of the web. Learn the six data types supported by ECMA-404, escaping rules, and how to safely serialize and parse data.",
      winShort: "Serialize, parse, and validate JSON payloads across clients and servers",
      missionLink: "The primary data interchange format across all modern web APIs",
      sec1: {
        title: "The six native JSON types",
        content: `<p>Defined in ECMA-404, <b>JSON (JavaScript Object Notation)</b> is a text format containing exactly six data types: <b>string</b> (double-quoted), <b>number</b> (integer or floating point), <b>boolean</b> (<code>true</code> or <code>false</code>), <b>null</b>, <b>object</b> (key-value dictionary), and <b>array</b> (ordered list).</p><p>Notice what is missing: <b>JSON has no native Date, RegExp, or Function types</b>. Dates must be serialized as ISO 8601 strings (e.g. <code>"2026-10-03T12:00:00Z"</code>) and parsed explicitly by the receiver.</p>`,
        keyIdea: "JSON supports only six types; dates and binary buffers must be serialized as strings."
      },
      predict: {
        q: "What does JSON.stringify({ d: new Date(), f: () => {} }) produce?",
        a: [
          "Date converts to an ISO string, while the function property 'f' is completely omitted",
          "An error is thrown because dates cannot be serialized",
          "Both are converted to string code representations",
          "A binary array buffer"
        ],
        c: 0,
        why: "Dates serialize to ISO strings via toJSON(); functions are non-JSON types and are stripped."
      },
      sec2: {
        title: "The JSON syntax rules",
        content: `<p>Memorise the strict formatting rules that separate valid JSON from loose JavaScript object syntax.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Keys Must Be Quoted", lines: ["{\"name\": \"Ada\"} is valid", "{name: \"Ada\"} is INVALID JSON!"] },
          { title: "Double Quotes Only", lines: ["\"text\" is valid", "'text' single quotes are INVALID!"] },
          { title: "No Trailing Commas", lines: ["[1, 2, 3] is valid", "[1, 2, 3,] is INVALID JSON!"] }
        ]
      },
      sec3: {
        title: "Tracing safe JSON parsing with try/catch",
        content: `<p>Trace how JSON.parse handles malformed syntax without crashing the application.</p>`,
      },
      trace: {
        code: [
          "try {",
          "    const data = JSON.parse(rawIncomingPayload);",
          "    processOrder(data);",
          "} catch (err) {",
          "    return res.status(400).json({ error: 'Malformed JSON payload' });",
          "}"
        ],
        steps: [
          { line: 0, vars: { input: "raw string from network body" } },
          { line: 1, vars: { check: "JSON.parse evaluates syntax" } },
          { line: 4, vars: { safeguard: "SyntaxError caught; 400 Bad Request returned cleanly" } }
        ]
      },
      practiceIntro: "Test your memory of JSON formatting rules.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The MIME type identifying JSON payloads is application/<0>.",
          "JSON string values must strictly be enclosed in <1> quotes.",
          "The standard format for serializing timestamps into JSON strings is ISO <2>."
        ],
        blanks: [
          { a: ["json"], why: "application/json is the registered media type." },
          { a: ["double"], why: "Single quotes are strictly illegal in JSON syntax." },
          { a: ["8601"], why: "ISO 8601 provides unambiguous global date serialization." }
        ]
      },
      win: "You can serialize and deserialize JSON safely while avoiding trailing comma and type conversion pitfalls.",
      nextTasks: [
        "Test an invalid JSON string in JSONLint or your browser console.",
        "Serialize a complex object with indentation using JSON.stringify(obj, null, 2).",
        "Parse an ISO 8601 date string back into a native Date object using new Date(str)."
      ],
      primarySource: "ECMA-404: *The JSON Data Interchange Syntax* (ecma-international.org).",
      quiz: [
        {
          q: "Which of the following is valid JSON syntax?",
          a: [
            "{\"user\": \"Ada\", \"active\": true}",
            "{'user': 'Ada', 'active': true}",
            "{user: \"Ada\", active: true}",
            "{\"user\": \"Ada\", \"active\": true,}"
          ],
          c: 0,
          why: "Keys must have double quotes, strings must have double quotes, and trailing commas are forbidden."
        },
        {
          q: "How should timestamps and calendar dates be formatted in JSON APIs?",
          a: [
            "As ISO 8601 strings in UTC format (e.g. '2026-10-03T12:00:00Z')",
            "As local computer time strings like 'Saturday noon'",
            "As raw binary millisecond memory addresses",
            "Dates cannot be transmitted over internet connections"
          ],
          c: 0,
          why: "ISO 8601 strings provide an unambiguous, timezone-aware global standard for dates."
        },
        {
          q: "What does JSON.parse() throw when passed an ill-formed string with a trailing comma?",
          a: [
            "A SyntaxError exception",
            "A NullPointerException",
            "A NetworkTimeoutError",
            "It returns null silently"
          ],
          c: 0,
          why: "JSON.parse strictly enforces ECMA-404; any syntax error throws a SyntaxError."
        },
        {
          q: "Can a JSON payload natively serialize circular references (an object that points to itself)?",
          a: [
            "No, attempting to stringify circular references throws a TypeError: Converting circular structure to JSON",
            "Yes, JSON automatically handles circular pointers with pointers",
            "Only on Linux servers",
            "Yes, if the object has fewer than five keys"
          ],
          c: 0,
          why: "JSON is a pure tree format and cannot represent cyclic directed graphs natively."
        }
      ]
    },
    {
      n: 4,
      id: "crud-operations-and-http-verb-mapping",
      title: "CRUD operations and HTTP verb mapping",
      topic: "JSON & Data Representations",
      anim: "Code",
      lede: "How do database operations map to network requests? Learn how Create, Read, Update, and Delete map cleanly to POST, GET, PUT, PATCH, and DELETE.",
      winShort: "Map database CRUD operations to standard RESTful HTTP methods and status responses",
      missionLink: "The architectural bridge between database persistence and API endpoints",
      sec1: {
        title: "The CRUD to HTTP translation",
        content: `<p>Database operations follow the CRUD acronym: <b>Create</b>, <b>Read</b>, <b>Update</b>, and <b>Delete</b>. In RESTful API design, these database operations map directly to standard HTTP methods.</p><p>Creating an item maps to <code>POST /resources</code> (returning <code>201 Created</code>). Reading maps to <code>GET</code>. Deleting maps to <code>DELETE</code> (returning <code>204 No Content</code>). Updating maps to either <code>PUT</code> (full replacement) or <code>PATCH</code> (partial field update).</p>`,
        keyIdea: "Map CRUD operations to standardized HTTP verbs and return matching 2xx status codes."
      },
      predict: {
        q: "When a POST request successfully creates a new user, what status code and header should the server return?",
        a: [
          "Status 201 Created with a Location header pointing to the new user URI (e.g. /users/42)",
          "Status 200 OK with an empty body",
          "Status 204 No Content with a Refresh header",
          "Status 301 Moved Permanently"
        ],
        c: 0,
        why: "RFC 9110 specifies 201 Created paired with a Location header identifying the created resource."
      },
      sec2: {
        title: "The CRUD mapping matrix",
        content: `<p>Memorise the standard mapping between database actions, HTTP verbs, and responses.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Create (INSERT)", lines: ["POST /items", "Body: new item payload", "Response: 201 Created + Location"] },
          { title: "Read (SELECT)", lines: ["GET /items/:id", "Safe & Idempotent", "Response: 200 OK"] },
          { title: "Update (UPDATE)", lines: ["PATCH /items/:id (partial)", "PUT /items/:id (replace)", "Response: 200 OK"] },
          { title: "Delete (DELETE)", lines: ["DELETE /items/:id", "Idempotent", "Response: 204 No Content"] }
        ]
      },
      sec3: {
        title: "Tracing a complete CRUD lifecycle",
        content: `<p>Trace an entity from creation through update and deletion over HTTP.</p>`,
      },
      trace: {
        code: [
          "POST /api/v1/notes {'title': 'Buy milk'} -> 201 Created (Location: /notes/101)",
          "GET /api/v1/notes/101 -> 200 OK {'id': 101, 'title': 'Buy milk'}",
          "PATCH /api/v1/notes/101 {'done': true} -> 200 OK (updated)",
          "DELETE /api/v1/notes/101 -> 204 No Content (resource removed)"
        ],
        steps: [
          { line: 0, vars: { action: "Create: note #101 created" } },
          { line: 1, vars: { action: "Read: note fetched via ID" } },
          { line: 2, vars: { action: "Update: done field patched" } },
          { line: 3, vars: { action: "Delete: record deleted cleanly" } }
        ]
      },
      practiceIntro: "Test your memory of CRUD HTTP mappings.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The HTTP status code for successful creation of a resource is <0>.",
          "The header indicating the URI of a newly created resource is <1>.",
          "The status code indicating successful deletion without a response body is <2>."
        ],
        blanks: [
          { a: ["201"], why: "201 Created is the standard creation response." },
          { a: ["Location"], why: "The Location header points to the new resource." },
          { a: ["204"], why: "204 No Content indicates success with an empty body." }
        ]
      },
      win: "You can implement clean REST endpoints covering all database CRUD requirements with standardized HTTP responses.",
      nextTasks: [
        "Audit your API endpoints to ensure DELETE returns 204 No Content.",
        "Add a Location header to all successful POST creation responses.",
        "Verify that PUT requests replace the full resource entity while PATCH updates fields."
      ],
      primarySource: "IETF RFC 9110: *HTTP Semantics*, Section 9.3: 'Method Definitions'.",
      quiz: [
        {
          q: "What header should accompany a '201 Created' response?",
          a: [
            "Location: /api/v1/resources/:id",
            "Content-Disposition: attachment",
            "Server-Timing: total",
            "Authorization: Bearer"
          ],
          c: 0,
          why: "The Location header informs the client of the URI where the new resource lives."
        },
        {
          q: "Why is 204 No Content preferred over 200 OK for successful DELETE operations?",
          a: [
            "The resource was deleted, so returning no body payload is intuitive and saves network bandwidth",
            "200 OK is illegal for DELETE requests in HTTP/2",
            "204 encrypts the network packet",
            "200 OK causes browsers to refresh the page automatically"
          ],
          c: 0,
          why: "204 confirms successful deletion without transmitting redundant body bytes."
        },
        {
          q: "How should an API respond if a client tries to DELETE a resource ID that does not exist?",
          a: [
            "Return 404 Not Found (or 204 if treating delete as strictly idempotent state)",
            "Return 500 Internal Server Error",
            "Hang the connection for sixty seconds",
            "Crash the database server"
          ],
          c: 0,
          why: "404 Not Found signals the targeted item does not exist."
        },
        {
          q: "What is an idempotency key in payment API POST requests?",
          a: [
            "A client-generated UUID sent in headers so retried POST requests do not double-charge customers",
            "A secret password known only to payment card companies",
            "An encryption key that speeds up SQL queries",
            "A tracking cookie used for marketing advertisements"
          ],
          c: 0,
          why: "Idempotency keys let servers detect duplicate POST requests and return cached results."
        }
      ]
    },
    {
      n: 5,
      id: "error-handling-and-problem-details",
      title: "Error handling and Problem Details",
      topic: "API Design Patterns & Errors",
      anim: "Code",
      lede: "Stop inventing custom error JSON shapes. Master RFC 7807 / 9457 Problem Details for HTTP APIs to deliver consistent, machine-readable error responses.",
      winShort: "Implement standardized RFC 9457 Problem Details error responses across APIs",
      missionLink: "Provides predictable error contracts that automated clients can parse reliably",
      sec1: {
        title: "The problem with ad-hoc error formats",
        content: `<p>In most poorly designed APIs, error responses are chaotic: one endpoint returns <code>{"error": "bad"}</code>, another returns <code>{"message": "failed"}</code>, and another returns plain HTML error pages.</p><p>To fix this, the IETF standardized <b>RFC 7807 (updated by RFC 9457): Problem Details for HTTP APIs</b>. It specifies the <code>application/problem+json</code> media type with standard fields: <code>type</code>, <code>title</code>, <code>status</code>, <code>detail</code>, and <code>instance</code>.</p>`,
        keyIdea: "Standardize API errors using RFC 9457 Problem Details so clients parse errors uniformly."
      },
      predict: {
        q: "What is the standard MIME type for RFC 9457 Problem Details responses?",
        a: ["application/problem+json", "text/plain", "application/error+xml", "application/json-error"],
        c: 0,
        why: "RFC 9457 defines the registered media type application/problem+json."
      },
      sec2: {
        title: "The Problem Details schema",
        content: `<p>Understand the standard fields of an RFC 9457 Problem Details JSON payload.</p>`,
      },
      diagram: {
        boxes: [
          { title: "type (URI)", lines: ["URI reference identifying error type", "https://api.example.com/errors/out-of-credit"] },
          { title: "title & status", lines: ["short human-readable summary", "matches HTTP status code (e.g. 403)"] },
          { title: "detail & instance", lines: ["specific explanation for this occurrence", "URI identifying the specific resource request"] }
        ]
      },
      sec3: {
        title: "Tracing validation error responses",
        content: `<p>Trace a validation error payload providing field-specific error feedback to an API consumer.</p>`,
      },
      trace: {
        code: [
          "HTTP/1.1 422 Unprocessable Entity",
          "Content-Type: application/problem+json",
          "{",
          "  'type': 'https://api.example.com/errors/validation',",
          "  'title': 'Your request parameters failed validation',",
          "  'invalid-params': [ { 'name': 'age', 'reason': 'must be >= 18' } ]",
          "}"
        ],
        steps: [
          { line: 0, vars: { status: "422 Unprocessable Entity" } },
          { line: 1, vars: { mime: "application/problem+json" } },
          { line: 3, vars: { doc_type: "standard problem type URI" } },
          { line: 5, vars: { field_errors: "granular array detailing which inputs failed" } }
        ]
      },
      practiceIntro: "Test your memory of standard API error handling.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The IETF standard for HTTP error responses is Problem <0>.",
          "The MIME type for Problem Details is application/problem+<1>.",
          "The HTTP status code for semantic validation failure is <2>."
        ],
        blanks: [
          { a: ["Details"], why: "RFC 7807 / 9457 is titled Problem Details for HTTP APIs." },
          { a: ["json"], why: "application/problem+json specifies JSON formatting." },
          { a: ["422"], why: "422 Unprocessable Entity is standard for schema validation errors." }
        ]
      },
      win: "You can implement consistent, machine-readable error responses using standard Problem Details specifications.",
      nextTasks: [
        "Adopt application/problem+json as the error response format across your backend.",
        "Include granular invalid-params arrays when returning 422 validation errors.",
        "Ensure your error handler never returns sensitive database stack traces in production."
      ],
      primarySource: "IETF RFC 9457: *Problem Details for HTTP APIs* (2023).",
      quiz: [
        {
          q: "What is the primary benefit of adopting RFC 9457 Problem Details across an API?",
          a: [
            "All endpoints speak a standardized error contract, allowing client libraries to parse and handle errors uniformly",
            "It eliminates all bugs from backend server code",
            "It converts error messages into multiple spoken languages automatically",
            "It prevents web servers from ever crashing"
          ],
          c: 0,
          why: "Consistent error envelopes eliminate the chaos of different error formats across endpoints."
        },
        {
          q: "What should the 'status' member of a Problem Details JSON object contain?",
          a: [
            "The numeric HTTP status code generated by the origin server for this occurrence",
            "The string 'success' or 'error'",
            "The current time of day in milliseconds",
            "The user account balance"
          ],
          c: 0,
          why: "The status field explicitly mirrors the HTTP status code (e.g. 404, 422, 500)."
        },
        {
          q: "Why is returning stack traces in production API error responses dangerous?",
          a: [
            "Stack traces leak internal file paths, library versions, and database schemas to potential attackers",
            "Stack traces cause client mobile phones to run out of memory",
            "Browsers refuse to render JSON that contains line breaks",
            "It violates international domain registration agreements"
          ],
          c: 0,
          why: "Internal implementation details in stack traces expose valuable intelligence to attackers."
        },
        {
          q: "What is the difference between 400 Bad Request and 422 Unprocessable Entity?",
          a: [
            "400 is for malformed syntax (unparseable JSON); 422 is for valid syntax that violates business rules",
            "400 is a server crash; 422 is a client crash",
            "400 is used on mobile; 422 is used on desktop",
            "There is no difference between 400 and 422"
          ],
          c: 0,
          why: "400 handles malformed bytes; 422 handles syntactically valid JSON that fails domain validation."
        }
      ]
    },
    {
      n: 6,
      id: "pagination-filtering-and-sorting",
      title: "Pagination, filtering, and sorting",
      topic: "API Design Patterns & Errors",
      anim: "Code",
      lede: "Never return 100,000 records in one response. Master offset versus cursor pagination, query parameter filtering, and API rate limiting.",
      winShort: "Design scalable collection endpoints with cursor pagination, filtering, and rate limits",
      missionLink: "Protects databases from query exhaustion and keeps API responses fast",
      sec1: {
        title: "Offset versus cursor pagination",
        content: `<p>Returning unpaginated database collections is an invitation to server failure. APIs paginate collections using one of two strategies: <b>Offset pagination</b> (<code>?offset=20&limit=10</code>) or <b>Cursor pagination</b> (<code>?cursor=eyJpZCI6NDJ9&limit=10</code>).</p><p>Offset pagination is simple but suffers from two flaws: it becomes slow on large datasets (<code>OFFSET 100000</code> forces the database to scan 100,000 rows), and records can be skipped or duplicated if rows are inserted while paginating. Cursor pagination solves both by indexing from the last seen record.</p>`,
        keyIdea: "Cursor pagination provides stable, high-performance querying on high-volume datasets."
      },
      predict: {
        q: "What happens in offset pagination if a new item is inserted at the top while a user is reading page 1?",
        a: [
          "When the user requests page 2, the last item from page 1 is shifted down and appears a second time",
          "The database throws a concurrent modification error",
          "The user session is immediately logged out",
          "Page 2 loads with zero items"
        ],
        c: 0,
        why: "Offset shifts by row count; prepending a row causes duplicate records across page boundaries."
      },
      sec2: {
        title: "Query parameter conventions",
        content: `<p>Learn the standard URL query parameter conventions for filtering, sorting, and pagination.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Filtering", lines: ["GET /items?status=active", "GET /items?category=books"] },
          { title: "Sorting", lines: ["GET /items?sort=-created_at", "minus prefix denotes descending"] },
          { title: "Rate Limit Headers", lines: ["RateLimit-Limit: 100", "RateLimit-Remaining: 42", "RateLimit-Reset: 15"] }
        ]
      },
      sec3: {
        title: "Tracing cursor pagination response",
        content: `<p>Trace how a cursor-paginated response returns an opaque cursor token to fetch the next batch.</p>`,
      },
      trace: {
        code: [
          "GET /api/v1/posts?limit=2 -> returns posts [id: 100, id: 99]",
          "# Response contains next_cursor token encoding id=99",
          "GET /api/v1/posts?cursor=eyJpZCI6OTl9&limit=2",
          "# Database queries WHERE id < 99 ORDER BY id DESC LIMIT 2"
        ],
        steps: [
          { line: 0, vars: { initial_page: "fetched items 100 and 99" } },
          { line: 1, vars: { cursor: "token encodes reference to item 99" } },
          { line: 2, vars: { next_query: "fast indexed seek: WHERE id < 99" } },
          { line: 3, vars: { result: "delivers items 98 and 97 with zero row skipping" } }
        ]
      },
      practiceIntro: "Test your memory of pagination and filtering patterns.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The pagination method using an opaque record pointer is <0> pagination.",
          "Sorting in descending order in REST query params often uses a <1> prefix (e.g. -date).",
          "The HTTP status code returned when a client exceeds its rate limit is <2>."
        ],
        blanks: [
          { a: ["cursor"], why: "Cursor pagination uses a stable record pointer." },
          { a: ["-", "minus"], why: "Minus prefix denotes descending sort order." },
          { a: ["429"], why: "429 Too Many Requests indicates rate limit exhaustion." }
        ]
      },
      win: "You can implement performant collection endpoints featuring cursor pagination, expressive filtering, and rate limiting.",
      nextTasks: [
        "Inspect the Link or next_cursor headers returned by GitHub or Stripe APIs.",
        "Implement a cursor pagination query using a WHERE id < cursor condition in SQL.",
        "Return RateLimit-Remaining headers from an API endpoint."
      ],
      primarySource: "IETF RFC 6585: *Additional HTTP Status Codes* (Section 4: '429 Too Many Requests').",
      quiz: [
        {
          q: "Why is cursor pagination faster than offset pagination on large database tables?",
          a: [
            "It uses indexed WHERE clauses (e.g. id < 1000) instead of scanning and discarding thousands of offset rows",
            "It compresses SQL query text by fifty percent",
            "It runs entirely inside the client web browser",
            "It deletes old records from the database table"
          ],
          c: 0,
          why: "OFFSET N requires scanning N rows; cursor pagination seeks directly via B-tree index."
        },
        {
          q: "What status code should an API return when a client makes more requests than allowed by the rate limit?",
          a: [
            "429 Too Many Requests",
            "400 Bad Request",
            "503 Service Unavailable",
            "403 Forbidden"
          ],
          c: 0,
          why: "429 Too Many Requests is the standard status code for rate limit throttling."
        },
        {
          q: "What header informs the client how many seconds to wait before retrying after a 429 response?",
          a: [
            "Retry-After: 30",
            "RateLimit-Wait: 30",
            "Timeout: 30",
            "Connection: Keep-Alive"
          ],
          c: 0,
          why: "The Retry-After header indicates the duration to wait before issuing new requests."
        },
        {
          q: "What is an opaque cursor token in API pagination?",
          a: [
            "An encoded string (often Base64) containing internal query pointers that clients treat as a black box",
            "A visual mouse cursor icon displayed on the screen",
            "A cryptographic key that decrypts database passwords",
            "A cookie that expires after 1 second"
          ],
          c: 0,
          why: "Opaque cursors hide internal database columns while allowing clients to request the next page."
        }
      ]
    },
    {
      n: 7,
      id: "api-versioning-strategies",
      title: "API versioning strategies",
      topic: "Evolution & Documentation",
      anim: "Code",
      lede: "APIs evolve, but you cannot break existing mobile apps and integrations. Compare URI path versioning, header versioning, and content negotiation.",
      winShort: "Design and implement API versioning strategies to manage breaking contract changes",
      missionLink: "Ensures APIs can evolve features without breaking existing production clients",
      sec1: {
        title: "The inevitability of breaking changes",
        content: `<p>A public API is a promise: once third-party clients write code against your endpoints, renaming a field or deleting an endpoint breaks their business. Adding a new optional field is safe (backward-compatible), but changing data types or removing fields is a <b>breaking change</b>.</p><p>When breaking changes are unavoidable, you must version your API. The three major strategies are <b>URI Path Versioning</b> (<code>/v1/users</code>), <b>Custom Header Versioning</b> (<code>X-API-Version</code>), and <b>Content Negotiation</b> (<code>Accept: application/vnd.app.v1+json</code>).</p>`,
        keyIdea: "Add optional fields backward-compatibly; version the API only when breaking contracts."
      },
      predict: {
        q: "Which API versioning strategy is the most visible and widely adopted across the tech industry?",
        a: [
          "URI path versioning (e.g. https://api.example.com/v1/...)",
          "Accept header content negotiation",
          "Custom request cookies",
          "Sending an email to developers before each request"
        ],
        c: 0,
        why: "URI path versioning (/v1/) is clear, easy to test in browsers, and straightforward to route."
      },
      sec2: {
        title: "Versioning strategies compared",
        content: `<p>Evaluate the trade-offs of the three primary API versioning models.</p>`,
      },
      diagram: {
        boxes: [
          { title: "URI Path (/v1/)", lines: ["highly visible & cache-friendly", "easy to test with curl/browser", "slight violation of URI purism"] },
          { title: "Custom Header", lines: ["Stripe style (Stripe-Version: 2026-05)", "clean persistent URIs", "harder to test directly in browser"] },
          { title: "Accept Header", lines: ["application/vnd.myapi.v2+json", "strict REST purism", "requires complex client header setup"] }
        ]
      },
      sec3: {
        title: "Tracing version routing in an API gateway",
        content: `<p>Trace how a reverse proxy routes v1 and v2 requests to different backend service instances.</p>`,
      },
      trace: {
        code: [
          "Client 1: GET /api/v1/orders -> Gateway routes to legacy orders-service:v1",
          "Client 2: GET /api/v2/orders -> Gateway routes to modern orders-service:v2",
          "# Both clients run simultaneously without mutual interference"
        ],
        steps: [
          { line: 0, vars: { client_1: "v1 request routed to legacy container" } },
          { line: 1, vars: { client_2: "v2 request routed to new container" } },
          { line: 2, vars: { coexistence: "zero downtime transition across API generations" } }
        ]
      },
      practiceIntro: "Test your memory of API versioning practices.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Modifying an API in a way that breaks existing consumers is a <0> change.",
          "Embedding version numbers directly into the path is <1> versioning.",
          "Versioning via the Accept header uses content <2>."
        ],
        blanks: [
          { a: ["breaking"], why: "Breaking changes invalidate existing client code." },
          { a: ["URI", "path"], why: "URI path versioning places /v1/ directly in the path." },
          { a: ["negotiation"], why: "Content negotiation negotiates representations via Accept headers." }
        ]
      },
      win: "You can evaluate and implement API versioning architectures that allow systems to evolve while preserving backward compatibility.",
      nextTasks: [
        "Inspect the versioning strategy used by Stripe (date-based headers) and GitHub (Accept header).",
        "Design a backward-compatible addition to an existing JSON response.",
        "Document a deprecation policy giving clients 6 months before retiring an old version."
      ],
      primarySource: "Stripe API Documentation: *API Versioning and Upgrades* (stripe.com/docs/api/versioning).",
      quiz: [
        {
          q: "Which of the following modifications constitutes a breaking change in an API?",
          a: [
            "Renaming an existing response field from 'user_name' to 'username'",
            "Adding a brand new optional field to a response JSON object",
            "Adding a new endpoint that didn't exist before",
            "Improving database query performance on the server"
          ],
          c: 0,
          why: "Renaming fields breaks existing client code that expects the original key name."
        },
        {
          q: "What is the primary advantage of URI path versioning (/v1/users) over header versioning?",
          a: [
            "It is explicit, easy to explore in browsers, and straightforward to route at CDN and proxy layers",
            "It speeds up CPU clock frequencies on the server",
            "It prevents database crashes",
            "It eliminates the need for unit tests"
          ],
          c: 0,
          why: "URI versioning is transparent and requires no special header configuration in clients."
        },
        {
          q: "What header is used to signal to clients that an API endpoint is deprecated and will be removed?",
          a: [
            "Sunset: Wed, 11 Nov 2026 00:00:00 GMT",
            "Delete-After: 30",
            "Warning: Stop-Using",
            "Deprecated: True"
          ],
          c: 0,
          why: "RFC 8594 standardizes the 'Sunset' HTTP response header for service retirement dates."
        },
        {
          q: "Why is date-based versioning (e.g. Stripe-Version: 2026-05-01) popular in enterprise developer platforms?",
          a: [
            "It allows frequent, granular upgrades pinned to specific documentation release dates",
            "It automatically translates text into calendar appointments",
            "It works without internet connectivity",
            "It makes APIs free to use"
          ],
          c: 0,
          why: "Date-based versioning provides fine-grained immutability tied to documentation snapshots."
        }
      ]
    },
    {
      n: 8,
      id: "documenting-apis-with-openapi",
      title: "Documenting APIs with OpenAPI",
      topic: "Evolution & Documentation",
      anim: "Code",
      lede: "If it isn't documented, it doesn't exist. Learn how to write machine-readable OpenAPI 3 specifications and generate interactive Swagger documentation.",
      winShort: "Author OpenAPI 3 specifications that generate documentation, client SDKs, and mock servers",
      missionLink: "The industry standard for API contracts and developer experience",
      sec1: {
        title: "API contracts as single source of truth",
        content: `<p>Word documents and wiki pages are terrible places to document APIs: they get out of date the day after they are written. The industry standard is <b>OpenAPI Specification (OAS)</b> (formerly Swagger).</p><p>An OpenAPI document is a structured YAML or JSON file defining every path, operation, parameter, request body, and response schema. From this single source of truth, tools automatically generate interactive documentation, client SDKs, and mock test servers.</p>`,
        keyIdea: "OpenAPI specifications serve as executable contracts for documentation, testing, and SDK generation."
      },
      predict: {
        q: "What can you automatically generate from a valid OpenAPI 3 specification?",
        a: [
          "Interactive documentation (Swagger UI), typed client SDKs, and mock servers",
          "Physical computer motherboards",
          "Production database root passwords",
          "Operating system kernel drivers"
        ],
        c: 0,
        why: "OpenAPI enables rich tooling ecosystems including interactive UIs, mock servers, and SDKs."
      },
      sec2: {
        title: "Anatomy of an OpenAPI document",
        content: `<p>Understand the core sections that compose an OpenAPI 3.1 specification.</p>`,
      },
      diagram: {
        boxes: [
          { title: "openapi & info", lines: ["version: 3.1.0", "title, description, version"] },
          { title: "paths", lines: ["/users, /orders/{id}", "get, post, parameters, requestBody"] },
          { title: "components", lines: ["reusable schemas (JSON Schema)", "securitySchemes (BearerAuth)"] }
        ]
      },
      sec3: {
        title: "Tracing an OpenAPI endpoint definition",
        content: `<p>Trace a YAML snippet defining a GET endpoint with a 200 OK response schema.</p>`,
      },
      trace: {
        code: [
          "/users/{id}:",
          "  get:",
          "    summary: Get user by ID",
          "    parameters:",
          "      - name: id",
          "        in: path",
          "        required: true",
          "        schema: { type: integer }",
          "    responses:",
          "      '200':",
          "        description: User found",
          "        content:",
          "          application/json:",
          "            schema: { $ref: '#/components/schemas/User' }"
        ],
        steps: [
          { line: 0, vars: { path: "/users/{id} defined" } },
          { line: 3, vars: { param: "path parameter 'id' required as integer" } },
          { line: 8, vars: { response: "200 OK schema referenced from components" } }
        ]
      },
      practiceIntro: "Test your memory of OpenAPI concepts.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The standard specification format for REST APIs is <0>.",
          "The popular interactive documentation UI tool for OpenAPI is <1> UI.",
          "Reusable data schemas in OpenAPI are stored under the <2> section."
        ],
        blanks: [
          { a: ["OpenAPI"], why: "OpenAPI is the Linux Foundation standard." },
          { a: ["Swagger"], why: "Swagger UI renders interactive interactive API playgrounds." },
          { a: ["components"], why: "#/components/schemas holds reusable definitions." }
        ]
      },
      win: "You can author machine-readable OpenAPI specifications that provide interactive documentation and automatic SDK generation.",
      nextTasks: [
        "Open the Swagger Petstore demo (petstore.swagger.io) and test an endpoint interactively.",
        "Write a 15-line OpenAPI YAML file for an endpoint in your project.",
        "Generate a client SDK or mock server using openapi-generator."
      ],
      primarySource: "OpenAPI Initiative: *OpenAPI Specification v3.1.0* (spec.openapis.org/oas/v3.1.0).",
      quiz: [
        {
          q: "What is the primary benefit of the OpenAPI Specification (OAS)?",
          a: [
            "It provides a machine-readable description of an API that powers documentation, mocks, and code generators",
            "It speeds up internet connection bandwidth for local users",
            "It eliminates the need for software programming languages",
            "It encrypts database tables on the server"
          ],
          c: 0,
          why: "OpenAPI acts as a machine-readable contract enabling rich tooling ecosystems."
        },
        {
          q: "What section of an OpenAPI document holds reusable object schemas and security definitions?",
          a: [
            "components",
            "paths",
            "servers",
            "info"
          ],
          c: 0,
          why: "The components section holds reusable schemas, parameters, and security schemes."
        },
        {
          q: "What does the '$ref' keyword do in an OpenAPI document?",
          a: [
            "References an existing reusable schema definition located elsewhere in the document or externally",
            "Calculates a financial currency conversion in US dollars",
            "Refreshes the web browser page",
            "Sends an HTTP request to the server"
          ],
          c: 0,
          why: "$ref (JSON Reference) enables DRY schema composition by pointing to reusable definitions."
        },
        {
          q: "Why is generating interactive documentation (like Swagger UI) valuable for engineering teams?",
          a: [
            "It allows frontend and third-party developers to test API requests live in the browser without writing code",
            "It converts Python backends into C++ binaries automatically",
            "It eliminates the need to pay for cloud server hosting",
            "It automatically fixes database syntax errors"
          ],
          c: 0,
          why: "Interactive documentation provides a live testing sandbox, radically speeding up integration."
        }
      ]
    }
  ]
};

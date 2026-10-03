"use strict";

module.exports = {
  id: "reading-code",
  title: "Reading Code You Didn't Write",
  num: 17,
  emoji: "📖",
  desc: "How to orient in an unfamiliar codebase: entry points, data flow, naming and the questions to ask first.",
  mission: `# Mission — Reading Code You Didn't Write

## Why this course exists

Professional engineers spend far more time reading existing code than writing new code. Yet schools and tutorials almost exclusively teach writing from scratch. Confronted with a 100,000-line repository, engineers freeze or waste days reading sequentially from the top down. This course provides an active, investigative protocol for orienting, tracing, and understanding unfamiliar codebases quickly.

## What the learner can do at the end

- Locate the primary execution entry points of any backend, frontend, or CLI repository.
- Follow data lifecycles from input ingestion to database persistence.
- Map call hierarchies using grep, language server tools, and call graphs.
- Use automated test suites as living executable specifications of system intent.
- Extract accurate mental models while ignoring non-critical implementation details.

## What this course is NOT

- Not a speed-reading trick. It is an engineering method for selective attention and structural navigation.
- Not a critique of legacy software. It treats all existing code as working business truth.

## Success looks like

When given access to an unfamiliar production repository, the learner identifies where incoming requests are handled and where business decisions happen in under 15 minutes without asking a teammate for a walkthrough.
`,
  notes: `# Notes — Reading Code You Didn't Write

## Decisions
- Structure into four themes: Orientation, Tracing Flow, Mental Models, and System Navigation.
- Focus on tool-assisted exploration (grep, LSP, tests) rather than passive reading.
`,
  resources: `# Resources — Reading Code You Didn't Write

## Knowledge (primary sources)
- *The Programmer's Brain* by Felienne Hermans — Cognitive models of how developers read and comprehend syntax and architecture.
- *Working Effectively with Legacy Code* by Michael Feathers — Finding seams, entry points, and boundaries in untyped, untested code.

## Wisdom
- Never read an unfamiliar codebase like a novel; read it like an encyclopedia looking for specific answers.
`,
  cheatsheetSections: [
    {
      title: "Locating Entry Points",
      label: "Find where execution starts",
      code: `# Python CLI / Web
grep -rn "if __name__ == '__main__':" .
grep -rn "FastAPI(" . || grep -rn "Flask(" .

# Node.js
jq .main package.json
jq .scripts.start package.json`,
      lessonN: 2,
      lessonSlug: "finding-the-entry-point",
      lessonTitle: "Finding the entry point"
    },
    {
      title: "Data Path Tracing",
      label: "Follow records through the system",
      code: `# 1. Locate schema / model definition
# 2. Search for constructor / insertion points
# 3. Follow the return value across function boundaries`,
      lessonN: 3,
      lessonSlug: "following-the-data-path",
      lessonTitle: "Following the data path"
    },
    {
      title: "Tests as Specs",
      label: "Read intent before implementation",
      code: `# Run single test with verbose output
pytest tests/test_orders.py -k "test_discount" -vv
# Tests show:
# - Valid inputs
# - Expected outputs
# - Failure edge cases`,
      lessonN: 5,
      lessonSlug: "reading-tests-as-specifications",
      lessonTitle: "Reading tests as specifications"
    },
    {
      title: "Mental Model Distillation",
      label: "Documenting core abstractions",
      code: `/*
 Core Entities:
 - User (auth, billing_tier)
 - Subscription (status, renewal_date)
 - Invoice (amount, line_items)
*/`,
      lessonN: 8,
      lessonSlug: "building-a-system-mental-model",
      lessonTitle: "Building a system mental model"
    }
  ],
  glossaryGroups: [
    {
      id: "orientation",
      title: "Orientation & Entry Points",
      terms: [
        { term: "Entry point", def: "The initial function or file where an operating system or server passes control to user code.", lesson: 2, tags: ["architecture"] },
        { term: "Manifest file", def: "A metadata file (like package.json or pyproject.toml) listing project dependencies, scripts, and configuration.", lesson: 2, tags: ["project"] },
        { term: "Cognitive load", def: "The amount of working memory used while trying to parse and understand complex syntax.", lesson: 1, tags: ["theory"] },
        { term: "Top-down reading", def: "Beginning at high-level architecture before examining granular line-by-line mechanics.", lesson: 1, tags: ["technique"] }
      ]
    },
    {
      id: "data-flow",
      title: "Tracing Data & Call Paths",
      terms: [
        { term: "Data lifecycle", def: "The sequence of transformations a payload undergoes from ingress, to business logic, to storage.", lesson: 3, tags: ["data"] },
        { term: "Call hierarchy", def: "The tree structure of caller functions and their downstream callees across files.", lesson: 4, tags: ["navigation"] },
        { term: "Call site", def: "The exact line of code where a function or method invocation occurs.", lesson: 4, tags: ["code"] },
        { term: "Seam", def: "A boundary in code where behavior can be observed or altered without modifying the calling source.", lesson: 3, tags: ["architecture"] }
      ]
    },
    {
      id: "mental-models",
      title: "Mental Models & Tests",
      terms: [
        { term: "Mental model", def: "An internal conceptual simulation of how software subsystems behave and interact.", lesson: 8, tags: ["cognition"] },
        { term: "Executable specification", def: "An automated test suite that demonstrates precisely what behavior code is expected to produce.", lesson: 5, tags: ["testing"] },
        { term: "Skimming", def: "Rapidly scanning code structure, types, and comments to gain broad context without reading every statement.", lesson: 6, tags: ["reading"] },
        { term: "Deep reading", def: "Meticulous line-by-line analysis of a specific critical function or security algorithm.", lesson: 6, tags: ["reading"] }
      ]
    },
    {
      id: "conventions",
      title: "Conventions & Architecture",
      terms: [
        { term: "Domain model", def: "The collection of classes, entities, and business rules reflecting the real-world problem being solved.", lesson: 7, tags: ["domain"] },
        { term: "Naming convention", def: "A standardized pattern for naming variables, files, and classes that communicates their purpose.", lesson: 7, tags: ["clean-code"] },
        { term: "Spaghetti code", def: "Software with tangled, highly-coupled control flow that resists straightforward linear tracing.", lesson: 8, tags: ["anti-pattern"] },
        { term: "Architecture diagram", def: "A visual schematic depicting services, database connections, and primary communication flows.", lesson: 8, tags: ["documentation"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "code-is-read-more-than-written",
      title: "Code is read more than written",
      topic: "Orientation & Entry Points",
      anim: "CodeSweep",
      lede: "Studies show engineers spend 70% of their time reading and understanding code. Treat code reading as a primary professional discipline.",
      winShort: "Adopt an active inquiry strategy instead of passive reading",
      missionLink: "Sets the mindset for professional codebase comprehension",
      sec1: {
        title: "The reading imbalance",
        content: `<p>Most computer science curricula emphasize writing: syntax, loops, and fresh empty files. Yet on your first day at work, nobody hands you a blank editor. You are handed a repository with hundreds of thousands of lines of legacy code written by people who no longer work there.</p><p>Reading code requires different cognitive skills than writing. You cannot hold an entire repository in your head. You must learn to read selectively, asking specific questions rather than consuming files sequentially.</p>`,
        keyIdea: "Professional developers read selectively with an explicit question in mind."
      },
      predict: {
        q: "What is the most common mistake beginners make when opening a new codebase?",
        a: [
          "Running the test suite before looking at any files",
          "Attempting to read every source file from top to bottom like a book",
          "Checking git log to see recent commit messages",
          "Searching for main entry points using grep"
        ],
        c: 1,
        why: "Reading large codebases sequentially overwhelms working memory and yields almost zero retention."
      },
      sec2: {
        title: "Active versus passive reading",
        content: `<p>Passive reading treats code as static literature. Active reading treats code as a running machine: you ask questions, trace variables, execute tests, and form hypotheses.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Ask a Question", lines: ["e.g. where are orders saved?", "what triggers billing?"] },
          { title: "Locate Boundary", lines: ["find search keywords", "identify target files"] },
          { title: "Verify with Run", lines: ["run single test or trace", "confirm observation"] }
        ]
      },
      sec3: {
        title: "Tracking cognitive load",
        content: `<p>Notice how focusing only on function signatures reduces cognitive load compared to analyzing full implementation loops.</p>`,
      },
      trace: {
        code: [
          "# Step 1: Read signature only",
          "def calculate_tax(order: Order) -> Decimal: ...",
          "# Step 2: Form question: does it handle discounts?",
          "# Step 3: Inspect body only when question requires it"
        ],
        steps: [
          { line: 0, vars: { focus: "signature only" } },
          { line: 1, vars: { input: "Order", output: "Decimal" } },
          { line: 2, vars: { query: "tax calculation rules" } }
        ]
      },
      practiceIntro: "Test your understanding of the principles of active code reading.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Reading code with a specific goal is <0> reading.",
          "The limit on human working memory while reading is <1> load.",
          "A project's entry configuration is typically found in a <2> file."
        ],
        blanks: [
          { a: ["active"], why: "Active reading is guided by explicit questions and experiments." },
          { a: ["cognitive"], why: "Cognitive load refers to mental effort required to parse code." },
          { a: ["manifest"], why: "Manifest files describe project layout, dependencies, and commands." }
        ]
      },
      win: "You approach unfamiliar code with an active investigation mindset rather than passive linear reading.",
      nextTasks: [
        "Open an open-source project and write down three specific questions about its behavior.",
        "Attempt to answer just one question without reading unrelated files.",
        "Time how long you can investigate without getting lost in trivial details."
      ],
      primarySource: "Dr. Felienne Hermans, *The Programmer's Brain* (Chapter 1: 'Decoding and Reading Code').",
      quiz: [
        {
          q: "Why is reading code from start to finish ineffective for large repositories?",
          a: [
            "It rapidly exhausts working memory with irrelevant implementation details",
            "It automatically triggers compiler warning flags in the background",
            "It violates open-source software license copyright restrictions",
            "It causes modern IDE text editors to consume all system RAM"
          ],
          c: 0,
          why: "Human working memory can only track a few items at once; sequential reading floods it immediately."
        },
        {
          q: "What defines an active code reader?",
          a: [
            "Someone who types code faster than 100 words per minute",
            "Someone who investigates code by asking questions and running experiments",
            "Someone who only reads code written within the last twenty-four hours",
            "Someone who rewrites every file they open into a different language"
          ],
          c: 1,
          why: "Active readers formulate specific hypotheses and test them against the running codebase."
        },
        {
          q: "Roughly what proportion of an engineer's time is typically spent reading code?",
          a: [
            "Less than 5 percent",
            "Approximately 10 percent",
            "Around 70 percent",
            "Exactly 100 percent"
          ],
          c: 2,
          why: "Empirical software engineering studies consistently measure reading comprehension at ~70%."
        },
        {
          q: "What should you examine first when trying to understand a module's high-level purpose?",
          a: [
            "Every internal helper function line by line",
            "Public function signatures, types, and module docstrings",
            "The assembly bytecode generated by the runtime",
            "The git commit hash numbers in the log"
          ],
          c: 1,
          why: "Signatures and module headers explain what a module offers without entangling you in mechanics."
        }
      ]
    },
    {
      n: 2,
      id: "finding-the-entry-point",
      title: "Finding the entry point",
      topic: "Orientation & Entry Points",
      anim: "CodeSweep",
      lede: "Every program has a door. Learn how to discover where execution starts in web apps, CLIs, microservices, and frontend codebases.",
      winShort: "Locate the primary entry point file of any project in under two minutes",
      missionLink: "The necessary starting point for every data flow trace",
      sec1: {
        title: "The front door of a program",
        content: `<p>A codebase is not a tangled ball of string; it is a tree rooted at an entry point. In command-line tools, this is often <code>main.py</code> or <code>index.js</code>. In web servers, it is the file that binds HTTP routes to a network port.</p><p>Always inspect the project manifest first (such as <code>package.json</code>, <code>pyproject.toml</code>, or <code>Cargo.toml</code>). Manifests explicitly declare executable scripts, startup commands, and main modules.</p>`,
        keyIdea: "The manifest file tells you exactly which file the runtime executes first."
      },
      predict: {
        q: "In a Node.js repository, where is the application entry point most reliably defined?",
        a: [
          "In the node_modules directory README",
          "In the 'main' or 'scripts.start' field of package.json",
          "In the browser cookie store file",
          "In the git ignore configuration file"
        ],
        c: 1,
        why: "package.json defines project metadata including the main script and execution entry points."
      },
      sec2: {
        title: "Common entry point conventions",
        content: `<p>Different frameworks establish standard entry conventions. Learn where to look across common software ecosystems.</p>`,
      },
      diagram: {
        boxes: [
          { title: "CLI Tool", lines: ["__main__.py or bin/cli", "argparse or click"] },
          { title: "Web API", lines: ["app.py or server.ts", "app.listen or uvicorn"] },
          { title: "Frontend", lines: ["index.html -> src/main.tsx", "ReactDOM.render()"] }
        ]
      },
      sec3: {
        title: "Tracing boot sequence",
        content: `<p>Trace how a web service boot script initializes database pools, registers routers, and starts listening on a network socket.</p>`,
      },
      trace: {
        code: [
          "# entry: main.py",
          "config = load_config()",
          "db = connect_database(config.db_url)",
          "app = create_server(db)",
          "app.listen(8080)"
        ],
        steps: [
          { line: 1, vars: { config: "loaded from env" } },
          { line: 2, vars: { db: "pool connected" } },
          { line: 3, vars: { app: "routes mounted" } },
          { line: 4, vars: { status: "listening on port 8080" } }
        ]
      },
      practiceIntro: "Test your ability to spot project entry points quickly.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "In Python, a standalone module is executed via if __name__ == '__<0>__':.",
          "In Node.js, project startup scripts are listed in <1>.json.",
          "The file that binds routes and listens on ports is the server <2>."
        ],
        blanks: [
          { a: ["main"], why: "'__main__' is the namespace assigned to top-level executed scripts." },
          { a: ["package"], why: "package.json defines npm scripts and entry files." },
          { a: ["entry", "entry point"], why: "The entry point bootstraps dependencies and network listeners." }
        ]
      },
      win: "You can open any repository and immediately locate the exact file where execution begins.",
      nextTasks: [
        "Check package.json or pyproject.toml in three different projects to find their entry points.",
        "Locate where an HTTP router mounts its URL handlers in a web backend.",
        "Trace the first five lines of code executed when the application starts."
      ],
      primarySource: "Michael Feathers, *Working Effectively with Legacy Code* (Chapter on Seams and Entry Points).",
      quiz: [
        {
          q: "What is the primary role of an entry point file?",
          a: [
            "To contain all application business logic in a single file",
            "To bootstrap configuration, dependencies, and start listeners",
            "To store persistent customer data in plain text format",
            "To format source code according to style guidelines"
          ],
          c: 1,
          why: "Entry points orchestrate initialization and hand off control to routers or event loops."
        },
        {
          q: "Where should you look if a Python project does not have a main.py?",
          a: [
            "Look for setup.cfg or pyproject.toml under project.scripts",
            "Assume the project is unusable and delete it from disk",
            "Look inside the hidden .git object directories",
            "Check the system temporary folder for log files"
          ],
          c: 0,
          why: "Modern Python packaging specifies executable entry points inside pyproject.toml."
        },
        {
          q: "What line in a web server entry point signals that initialization is complete?",
          a: [
            "import os",
            "app.listen() or uvicorn.run()",
            "x = 10",
            "print('hello')"
          ],
          c: 1,
          why: "Listening on a network port marks the end of boot and the start of request handling."
        },
        {
          q: "Why is knowing the entry point crucial for code comprehension?",
          a: [
            "It gives you a deterministic starting node for tracing execution paths",
            "It guarantees that the software will never experience crashes",
            "It automatically generates unit tests for all classes",
            "It enables dark mode in all modern code editors"
          ],
          c: 0,
          why: "Without the entry point, you are guessing where dependencies and configurations originate."
        }
      ]
    },
    {
      n: 3,
      id: "following-the-data-path",
      title: "Following the data path",
      topic: "Tracing Data & Call Paths",
      anim: "CodeSweep",
      lede: "Code exists to transform data. Follow a single data structure from ingestion to storage to understand how the entire system works.",
      winShort: "Trace a data payload from user input across all architectural layers to storage",
      missionLink: "Provides structural understanding of end-to-end system mechanics",
      sec1: {
        title: "Follow the data, not the syntax",
        content: `<p>Syntax changes, patterns change, and frameworks come and go. But every business application fundamentally does one thing: it accepts data, validates it, transforms it, and stores or returns it.</p><p>Instead of trying to understand every class, pick one entity — like an <code>Order</code> or <code>User</code>. Trace its journey from the HTTP request body through the controller, service layer, and database query. Once you understand one entity's path, you understand the architecture of the entire app.</p>`,
        keyIdea: "Following a single business entity through the stack reveals the architectural pattern of the entire system."
      },
      predict: {
        q: "Why is following data more effective than memorising class hierarchies?",
        a: [
          "Data structures reveal the actual business transformations of the software",
          "Data structures are always written in assembly language",
          "Data structures do not require memory allocation in RAM",
          "Data structures eliminate all network communication latency"
        ],
        c: 0,
        why: "Software exists to process data; tracing data paths shows what the code actually accomplishes."
      },
      sec2: {
        title: "The standard four-layer path",
        content: `<p>Most applications structure data flow across four predictable architectural boundaries.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Transport", lines: ["HTTP handler / controller", "parse JSON request"] },
          { title: "Validation", lines: ["schema validation / DTO", "check business rules"] },
          { title: "Domain Service", lines: ["core calculations", "apply business logic"] },
          { title: "Persistence", lines: ["ORM / SQL query", "commit to database"] }
        ]
      },
      sec3: {
        title: "Tracing an order through the layers",
        content: `<p>Follow an order payload as it moves from raw JSON to a typed domain model and database row.</p>`,
      },
      trace: {
        code: [
          "raw = '{\"item\": \"Book\", \"price\": 20}'",
          "dto = parse_order(raw)     # validation layer",
          "order = apply_tax(dto)     # domain layer",
          "db_save(order)             # persistence layer"
        ],
        steps: [
          { line: 0, vars: { raw: "string payload" } },
          { line: 1, vars: { dto: "validated OrderDTO" } },
          { line: 2, vars: { order: "total with tax: $22" } },
          { line: 3, vars: { db: "INSERT INTO orders (id=101)" } }
        ]
      },
      practiceIntro: "Test your memory of the typical application data pipeline.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "An object used purely to carry data between processes is a <0>.",
          "The layer containing business logic and calculations is the <1> layer.",
          "The layer responsible for saving data to storage is the <2> layer."
        ],
        blanks: [
          { a: ["DTO", "data transfer object"], why: "DTOs transfer serialized data across boundaries." },
          { a: ["domain", "service"], why: "Domain services enforce business calculations and rules." },
          { a: ["persistence", "repository"], why: "Persistence handles database interactions and queries." }
        ]
      },
      win: "You can track any core domain entity across all architectural layers of an unfamiliar application.",
      nextTasks: [
        "Pick a primary entity in your repo and find where its database schema is defined.",
        "Find the API endpoint where that entity is created by a user.",
        "Trace every function the entity passes through between input and persistence."
      ],
      primarySource: "Martin Fowler, *Patterns of Enterprise Application Architecture* (Chapter 2: 'Organizing Domain Logic').",
      quiz: [
        {
          q: "What is the primary benefit of tracing an entity from input to database?",
          a: [
            "It exposes the architectural patterns shared by all other entities in the system",
            "It speeds up internet connection bandwidth for local users",
            "It prevents developers from needing to write automated tests",
            "It converts dynamic typed code into compiled binary machine code"
          ],
          c: 0,
          why: "Application architectures are repetitive: once you trace one entity, other entities follow the same path."
        },
        {
          q: "Where does input validation typically occur in modern web architectures?",
          a: [
            "Directly inside the physical network interface hardware card",
            "At the boundary layer right after receiving raw transport data",
            "Inside the database relational engine after writing records",
            "Only when the user closes their web browser window"
          ],
          c: 1,
          why: "Boundary validation protects internal domain logic from ill-formed or malicious data."
        },
        {
          q: "What is the role of the domain or service layer?",
          a: [
            "Rendering visual CSS animations on the client display",
            "Enforcing core business rules, logic, and state transitions",
            "Managing physical hard drive sector allocation tables",
            "Handling DNS domain name resolution over UDP protocols"
          ],
          c: 1,
          why: "Domain logic embodies business rules independent of transport or database technology."
        },
        {
          q: "What should you do if an entity passes through unfamiliar intermediary middleware?",
          a: [
            "Pause and understand what transformation the middleware performs on the data",
            "Delete the middleware file immediately to simplify the architecture",
            "Rewrite the entire application without using middleware",
            "Assume the middleware does nothing and ignore it forever"
          ],
          c: 0,
          why: "Middleware often handles authentication, logging, or transaction boundaries."
        }
      ]
    },
    {
      n: 4,
      id: "mapping-call-hierarchies",
      title: "Mapping call hierarchies",
      topic: "Tracing Data & Call Paths",
      anim: "CodeSweep",
      lede: "Code is a web of calls. Use your editor's language server and grep to navigate caller-callee relationships without losing your place.",
      winShort: "Map incoming and outgoing call hierarchies using LSP tools and ripgrep",
      missionLink: "Prevents disorientation while traversing multi-file function chains",
      sec1: {
        title: "Callers and callees",
        content: `<p>When looking at a function, two questions matter: <i>'Who calls this?'</i> (incoming calls) and <i>'What does this call?'</i> (outgoing calls).</p><p>Language Server Protocol (LSP) tools provide 'Find All References' and 'Show Call Hierarchy'. When LSP is unavailable, fast text search tools like <code>ripgrep</code> (<code>rg</code>) let you search for function names and import statements across thousands of files in milliseconds.</p>`,
        keyIdea: "Incoming calls show where behavior is used; outgoing calls show how behavior is implemented."
      },
      predict: {
        q: "You need to change a function signature. Which view is most critical before making the edit?",
        a: [
          "The file creation timestamp in the filesystem",
          "The incoming call hierarchy showing all current call sites",
          "The total number of comments written in the file",
          "The CPU temperature of the development computer"
        ],
        c: 1,
        why: "Changing a signature breaks every existing caller; finding all incoming references prevents regressions."
      },
      sec2: {
        title: "Navigating with bookmarks",
        content: `<p>When descending deeply into call chains, use editor navigation marks or jump stacks (e.g. Ctrl-O / Ctrl-I) so you can return to your origin without getting lost.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Origin Function", lines: ["process_payment()", "mark jump position"] },
          { title: "Callee 1", lines: ["validate_card()", "inspect implementation"] },
          { title: "Callee 2", lines: ["charge_stripe()", "return back up stack"] }
        ]
      },
      sec3: {
        title: "Call stack traversal",
        content: `<p>Trace how a developer steps through nested call sites while keeping track of the root caller.</p>`,
      },
      trace: {
        code: [
          "def checkout(): charge_user()",
          "def charge_user(): send_stripe_req()",
          "def send_stripe_req(): http_post('/v1/charges')",
          "# Call hierarchy: checkout -> charge_user -> send_stripe_req"
        ],
        steps: [
          { line: 0, vars: { root: "checkout()" } },
          { line: 1, vars: { depth_1: "charge_user()" } },
          { line: 2, vars: { depth_2: "send_stripe_req()" } },
          { line: 3, vars: { network: "http_post()" } }
        ]
      },
      practiceIntro: "Review call hierarchy navigation habits.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A tool that indexes code symbols and provides references is an <0> server.",
          "Functions that invoke a given function are its <1> callers.",
          "The history stack of code locations you have visited is the <2> stack."
        ],
        blanks: [
          { a: ["LSP", "language"], why: "Language Server Protocol powers reference search and autocompletion." },
          { a: ["incoming"], why: "Incoming calls represent all callers of a function." },
          { a: ["jump"], why: "Jump stacks record visited locations so you can navigate backwards." }
        ]
      },
      win: "You can navigate up and down call trees across dozens of files while always knowing your way back.",
      nextTasks: [
        "Use 'Find All References' on a central utility function in your codebase.",
        "Practice using editor jump keys (Ctrl-O / Ctrl-I or equivalent) to navigate back and forth.",
        "Map a 3-level call tree on a sheet of paper for an important business transaction."
      ],
      primarySource: "VS Code Documentation: *Call Hierarchy and Symbol Search* (code.visualstudio.com/docs/editor/editingevolved).",
      quiz: [
        {
          q: "What does 'Find All References' reveal about a function?",
          a: [
            "Every location across the workspace where that function is invoked or imported",
            "The memory address where the function binary is stored in RAM",
            "The total number of times the function was run in production yesterday",
            "The author's personal phone number and contact details"
          ],
          c: 0,
          why: "Find All References locates every usage site across the entire project."
        },
        {
          q: "Why are jump stacks essential when exploring call hierarchies?",
          a: [
            "They automatically optimize recursive loops into tail-calls",
            "They allow you to retrace your steps backward after descending into callees",
            "They prevent the computer from running out of disk storage space",
            "They encrypt source code files while you are reading them"
          ],
          c: 1,
          why: "Without jump stacks, deep exploration leads to disorientation and lost working context."
        },
        {
          q: "What is the difference between incoming and outgoing call hierarchies?",
          a: [
            "Incoming shows who calls the function; outgoing shows what the function calls",
            "Incoming is written in C; outgoing is written in JavaScript",
            "Incoming only applies to web APIs; outgoing only applies to mobile apps",
            "There is no difference between incoming and outgoing calls"
          ],
          c: 0,
          why: "Incoming maps upstream dependents; outgoing maps downstream dependencies."
        },
        {
          q: "When is ripgrep (rg) preferred over Language Server references?",
          a: [
            "When working in dynamic languages or codebases without configured language servers",
            "When you want the computer to compile faster",
            "When the repository contains only plain markdown text files",
            "When you are disconnected from power adapters"
          ],
          c: 0,
          why: "Fast text search works universally even when indexers or language servers fail to parse."
        }
      ]
    },
    {
      n: 5,
      id: "reading-tests-as-specifications",
      title: "Reading tests as specifications",
      topic: "Mental Models & Tests",
      anim: "CodeSweep",
      lede: "Documentation lies; tests run. When documentation is stale or absent, the test suite is the single most accurate specification of what the code does.",
      winShort: "Extract accurate business rules and expected edge cases by reading unit tests",
      missionLink: "Discovers the true business contract of unfamiliar modules",
      sec1: {
        title: "Tests as living documentation",
        content: `<p>Design documents, wiki pages, and inline comments quickly drift out of date as code evolves. But automated tests must pass every time CI runs. If a test is passing, the behavior it asserts is true right now.</p><p>Before reading a complex algorithm, open its accompanying test file. The test names, setups, and assertions show you the valid inputs, the expected outputs, and the edge cases the original author cared about.</p>`,
        keyIdea: "Tests are executable specifications: they describe intended behavior and never get out of date."
      },
      predict: {
        q: "Why is a passing test more trustworthy than an inline code comment?",
        a: [
          "Tests are verified by the runtime on every build; comments are ignored",
          "Tests are written in legal language approved by compliance teams",
          "Comments cannot be viewed in modern code editors",
          "Tests take up less space on developer hard drives"
        ],
        c: 0,
        why: "Comments easily drift from reality because outdated comments do not break the build."
      },
      sec2: {
        title: "Anatomy of an informative test",
        content: `<p>Well-written tests follow the Arrange-Act-Assert pattern, laying bare the setup conditions and the exact expected result.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Arrange", lines: ["given: a user with balance $50", "input conditions"] },
          { title: "Act", lines: ["when: user purchases $20 item", "call the method"] },
          { title: "Assert", lines: ["then: remaining balance is $30", "expected outcome"] }
        ]
      },
      sec3: {
        title: "Extracting business rules from tests",
        content: `<p>Observe how reading test cases reveals discount rules that would take hours to decipher from the implementation code.</p>`,
      },
      trace: {
        code: [
          "def test_order_over_100_gets_free_shipping():",
          "    order = Order(total=105)",
          "    assert order.shipping_cost == 0",
          "# Business rule: Orders > $100 receive free shipping"
        ],
        steps: [
          { line: 0, vars: { rule: "free shipping condition" } },
          { line: 1, vars: { threshold: "105 > 100" } },
          { line: 2, vars: { expected_shipping: "0" } }
        ]
      },
      practiceIntro: "Test your understanding of tests as specifications.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The three steps of a clear test are Arrange, <0>, and Assert.",
          "Tests that run in CI and prove current behavior are <1> specifications.",
          "Inputs chosen right at threshold boundaries test <2> cases."
        ],
        blanks: [
          { a: ["Act"], why: "Arrange sets up data; Act triggers execution; Assert verifies results." },
          { a: ["executable", "living"], why: "Executable specifications guarantee behavior matches code." },
          { a: ["edge"], why: "Edge cases verify boundary conditions like zero, empty lists, or limits." }
        ]
      },
      win: "You can open any test suite and extract the authoritative business rules of a feature in minutes.",
      nextTasks: [
        "Open a test file in your repository and list three business rules it defines.",
        "Find a test that checks an edge case or error condition.",
        "Run just that single test locally using your test runner CLI."
      ],
      primarySource: "Martin Fowler, *Given When Then & Executable Specifications* (martinfowler.com/bliki).",
      quiz: [
        {
          q: "What makes unit tests the most reliable documentation in a project?",
          a: [
            "They are continuously executed and must pass, ensuring they never drift from code",
            "They are automatically translated into multiple human spoken languages",
            "They are stored in external cloud databases rather than git repos",
            "They can only be authored by certified system architects"
          ],
          c: 0,
          why: "Tests cannot silently drift out of sync with code because stale tests cause CI failures."
        },
        {
          q: "What does the 'Assert' step in a unit test reveal to a reader?",
          a: [
            "The expected state, return value, or side effect of the operation",
            "The names of all developers who wrote the function",
            "The CPU clock speed of the production server",
            "The database connection string credentials"
          ],
          c: 0,
          why: "Assertions declare the exact outcome expected when the code runs correctly."
        },
        {
          q: "If an implementation is confusing but its tests are clear, what should you do?",
          a: [
            "Trust the tests to understand the intended contract and inputs/outputs",
            "Delete the tests and rewrite the algorithm from intuition",
            "File an issue claiming the code is completely broken",
            "Ignore both and read online blogs about software design"
          ],
          c: 0,
          why: "The tests define the contract: how it is achieved inside is secondary to what it achieves."
        },
        {
          q: "What can you learn from tests that assert exceptions are raised?",
          a: [
            "What invalid inputs the system explicitly rejects and how errors are handled",
            "That the author did not know how to handle errors properly",
            "That the software cannot be run in modern web browsers",
            "That the database tables are missing indexes"
          ],
          c: 0,
          why: "Negative tests document expected error boundaries and invalid input policies."
        }
      ]
    },
    {
      n: 6,
      id: "skimming-versus-deep-reading",
      title: "Skimming versus deep reading",
      topic: "Mental Models & Tests",
      anim: "CodeSweep",
      lede: "Knowing what to ignore is the superpower of fast comprehension. Learn how to skim for structure and only deep-read when you hit the critical seam.",
      winShort: "Categorize code into skimmable plumbing and critical business logic",
      missionLink: "Dramatically increases comprehension speed by filtering noise",
      sec1: {
        title: "Selective attention",
        content: `<p>A typical 500-line file contains about 50 lines of core business logic. The remaining 450 lines are boilerplate: error checking, logging, parameter serialization, imports, and plumbing.</p><p>If you read at full attention the entire time, mental fatigue sets in within thirty minutes. You must learn to <b>skim</b> the plumbing with low attention, slowing down to <b>deep read</b> only when you reach the core decision point.</p>`,
        keyIdea: "Skim the plumbing quickly; invest your deep attention only in the core decision logic."
      },
      predict: {
        q: "Which section of a file can usually be skimmed with minimal cognitive effort?",
        a: [
          "The core mathematical pricing algorithm",
          "Standard import statements and logging boilerplate",
          "Security authentication verification logic",
          "Database transaction rollback mechanisms"
        ],
        c: 1,
        why: "Imports and standard logging statements rarely contain unique domain logic."
      },
      sec2: {
        title: "The two gear speeds",
        content: `<p>Operate in two distinct reading speeds: Gear 1 (Skimming for shape and landmarks) and Gear 2 (Deep reading for correctness and state mutation).</p>`,
      },
      diagram: {
        boxes: [
          { title: "Gear 1: Skim", lines: ["class names, imports", "function signatures, layout"] },
          { title: "Locate Seam", lines: ["identify the critical logic", "switch gears"] },
          { title: "Gear 2: Deep", lines: ["variable mutations", "branching conditions, edge cases"] }
        ]
      },
      sec3: {
        title: "Filtering boilerplate",
        content: `<p>Observe how scanning past defensive checks isolates the single line where the key calculation occurs.</p>`,
      },
      trace: {
        code: [
          "if not user: raise ValueError('no user') # skim: defensive check",
          "logger.info('processing order for %s', user.id) # skim: logging",
          "tier_discount = 0.15 if user.is_vip else 0.0 # DEEP: key logic",
          "total = order.subtotal * (1 - tier_discount) # DEEP: calculation"
        ],
        steps: [
          { line: 0, vars: { type: "boilerplate guard" } },
          { line: 1, vars: { type: "boilerplate logging" } },
          { line: 2, vars: { type: "BUSINESS RULE: VIP discount is 15%" } },
          { line: 3, vars: { type: "BUSINESS RULE: apply discount formula" } }
        ]
      },
      practiceIntro: "Test your skill at distinguishing plumbing from core logic.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Rapidly scanning for file shape and headers is <0>.",
          "Meticulously analyzing state mutation line by line is <1> reading.",
          "Code dedicated to logging, guarding, and plumbing is <2>."
        ],
        blanks: [
          { a: ["skimming"], why: "Skimming navigates quickly across non-essential structure." },
          { a: ["deep"], why: "Deep reading focuses intense working memory on core logic." },
          { a: ["boilerplate", "plumbing"], why: "Boilerplate supports the runtime without defining business rules." }
        ]
      },
      win: "You can survey large files in seconds and zero in on the small percentage of code that actually matters.",
      nextTasks: [
        "Open a large file in your repo and highlight the boilerplate versus domain logic.",
        "Practice skimming a 300-line module in under two minutes to describe its purpose.",
        "Locate the single line where an essential decision is made."
      ],
      primarySource: "Hermans, *The Programmer's Brain*, Chapter 3: 'How to Read Code Efficiently'.",
      quiz: [
        {
          q: "What is the primary danger of reading all code at maximum deep attention?",
          a: [
            "Mental exhaustion and cognitive overload on non-essential boilerplate",
            "Causing code syntax to corrupt on the local file system",
            "Triggering automated security alerts in CI systems",
            "Slow internet download speeds during git fetches"
          ],
          c: 0,
          why: "Treating every line with equal focus burns mental energy on logging and guards."
        },
        {
          q: "What constitutes 'boilerplate' in typical backend files?",
          a: [
            "Imports, logging statements, standard parameter null-checks, and serialization",
            "The intellectual property and trade secret calculations",
            "The specific pricing formulas unique to the business",
            "The customer database schema migrations"
          ],
          c: 0,
          why: "Boilerplate handles routine system hygiene rather than specific business logic."
        },
        {
          q: "When should you switch from skimming to deep reading?",
          a: [
            "When you identify the function or conditional statement responsible for the target behavior",
            "As soon as you open the very first file in the repository",
            "Only after you have memorised all project variable names",
            "When the compiler issues a deprecation warning notice"
          ],
          c: 0,
          why: "Switch to deep reading once you have located the specific decision seam."
        },
        {
          q: "How does skimming aid code orientation?",
          a: [
            "It gives you a mental map of available symbols and structural layout",
            "It automatically refactors code to follow clean code standards",
            "It eliminates the need for automated test suites",
            "It generates documentation web pages without human intervention"
          ],
          c: 0,
          why: "Skimming builds high-level mental scaffolds without getting bogged down in mechanics."
        }
      ]
    },
    {
      n: 7,
      id: "decoding-naming-and-conventions",
      title: "Decoding naming and conventions",
      topic: "Conventions & Architecture",
      anim: "CodeSweep",
      lede: "Codebases develop their own dialects. Learn to identify project idioms, naming patterns, and architectural metaphors to read code like a native.",
      winShort: "Decode repository-specific naming idioms and ubiquitous language terms",
      missionLink: "Bridges the gap between code syntax and business domain semantics",
      sec1: {
        title: "The ubiquitous language of a codebase",
        content: `<p>Every mature software system is built around a domain vocabulary. Eric Evans called this the <b>Ubiquitous Language</b>. A financial app will have <code>Ledgers</code> and <code>Settlements</code>; a shipping app will have <code>Waybills</code> and <code>Manifests</code>.</p><p>If you do not understand these terms, the code will read like gibberish. Identifying the central domain nouns and verbs is the fastest way to translate code symbols into real-world meaning.</p>`,
        keyIdea: "Mastering the domain nouns and verbs turns cryptic variable names into obvious business stories."
      },
      predict: {
        q: "When reading an e-commerce codebase, what does an 'OrderFulfillmentHandler' likely do?",
        a: [
          "Renders 3D graphics on mobile screens",
          "Manages packaging, shipping, and delivery status after checkout",
          "Compiles JavaScript into WebAssembly binaries",
          "Calculates employee payroll tax deductions"
        ],
        c: 1,
        why: "In e-commerce domain language, fulfillment represents the process of shipping items to customers."
      },
      sec2: {
        title: "Structural naming prefixes and suffixes",
        content: `<p>Teams use naming suffixes to signal architectural roles. Learn to recognize standard role archetypes.</p>`,
      },
      diagram: {
        boxes: [
          { title: "*Service / *Manager", lines: ["business operations", "orchestrates entities"] },
          { title: "*Repository / *DAO", lines: ["data storage access", "executes queries"] },
          { title: "*Adapter / *Client", lines: ["external API calls", "transforms payloads"] }
        ]
      },
      sec3: {
        title: "Translating code to domain stories",
        content: `<p>Observe how naming conventions make the business transaction clear even without documentation.</p>`,
      },
      trace: {
        code: [
          "customer = customer_repo.get_by_id(user_id)",
          "invoice = billing_service.create_invoice(customer, cart)",
          "payment_gateway.charge(invoice.amount, customer.card_token)",
          "invoice.mark_settled()"
        ],
        steps: [
          { line: 0, vars: { repo: "fetches customer record" } },
          { line: 1, vars: { service: "generates invoice from cart items" } },
          { line: 2, vars: { gateway: "charges payment processor" } },
          { line: 3, vars: { state: "invoice status updated to settled" } }
        ]
      },
      practiceIntro: "Test your understanding of architectural naming conventions.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The shared domain vocabulary used across a team is the <0> language.",
          "A class suffix indicating data storage operations is <1>.",
          "A class suffix indicating an external third-party API wrapper is <2>."
        ],
        blanks: [
          { a: ["ubiquitous"], why: "Ubiquitous Language aligns domain models with business terminology." },
          { a: ["Repository", "DAO"], why: "Repositories mediate between the domain and data storage." },
          { a: ["Client", "Adapter"], why: "Clients and Adapters wrap external third-party communication." }
        ]
      },
      win: "You can decode unfamiliar repository conventions and translate domain-specific symbols into clear business meaning.",
      nextTasks: [
        "Create a glossary of 5 domain-specific terms used throughout your codebase.",
        "Identify three architectural suffixes (like *Service or *Repository) used in your project.",
        "Explain the lifecycle of an entity using only domain terminology."
      ],
      primarySource: "Eric Evans, *Domain-Driven Design* (Chapter 2: 'The Ubiquitous Language').",
      quiz: [
        {
          q: "What is 'Ubiquitous Language' in software engineering?",
          a: [
            "A shared vocabulary between developers and domain experts reflected in code",
            "A programming language that can run on any device without changes",
            "A translation tool that converts English into machine binary code",
            "A standard SQL dialect supported by all relational databases"
          ],
          c: 0,
          why: "Ubiquitous Language ensures code identifiers accurately mirror real business concepts."
        },
        {
          q: "What architectural role does a 'UserRepository' class typically perform?",
          a: [
            "Managing user interface layout themes and styles",
            "Encapsulating user data storage, retrieval, and queries",
            "Authenticating user passwords using cryptographic hashing",
            "Sending marketing emails to registered email addresses"
          ],
          c: 1,
          why: "Repositories abstract persistence mechanisms and collection-like data access."
        },
        {
          q: "Why do engineering teams establish strict naming conventions?",
          a: [
            "To allow readers to infer architectural roles without inspecting implementations",
            "To make source code files smaller in kilobyte file size",
            "To prevent the compiler from generating syntax warning errors",
            "To prevent unauthorized users from viewing source code"
          ],
          c: 0,
          why: "Consistent conventions let developers infer behavior and responsibilities at a glance."
        },
        {
          q: "What should you do when you encounter an unfamiliar acronym in code?",
          a: [
            "Look it up in project docs or ask teammates to define the domain meaning",
            "Rename the variable across the entire repository immediately",
            "Assume the acronym is meaningless and ignore it",
            "Delete the file that contains the acronym"
          ],
          c: 0,
          why: "Acronyms usually encode business domain concepts critical to understanding logic."
        }
      ]
    },
    {
      n: 8,
      id: "building-a-system-mental-model",
      title: "Building a system mental model",
      topic: "Conventions & Architecture",
      anim: "CodeSweep",
      lede: "You don't understand code by memorizing lines; you understand it by building a working mental model of how components interact. Learn how to synthesize the big picture.",
      winShort: "Synthesize an unfamiliar codebase into a concise, accurate architecture diagram",
      missionLink: "Transforms reading insights into enduring structural mastery",
      sec1: {
        title: "From lines to models",
        content: `<p>Comprehension is complete when you can simulate the system in your mind: if input X changes, component Y will transform it and component Z will store it. You no longer need to check every file because you understand the contracts between components.</p><p>Document your mental model as you explore. Draw simple block-and-arrow diagrams on paper. The act of externalizing your mental model exposes gaps in your understanding and anchors your memory.</p>`,
        keyIdea: "A reliable mental model allows you to reason about system behavior without re-reading the code."
      },
      predict: {
        q: "What is the best way to verify that your mental model of a codebase is accurate?",
        a: [
          "Make a prediction about where a change would be needed, then verify it",
          "Memorize every variable name in the main configuration file",
          "Read the commit history from the first commit ten years ago",
          "Reformat the entire codebase using an automated linter"
        ],
        c: 0,
        why: "Predicting where behavior lives and verifying your prediction tests your mental model."
      },
      sec2: {
        title: "The three-layer mental model",
        content: `<p>Structure your internal model into three levels: External Boundaries, Core Workflows, and Data Persistence.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Boundaries", lines: ["REST API, webhooks, CLI", "ingress points"] },
          { title: "Workflows", lines: ["domain orchestration", "business rule engines"] },
          { title: "Storage", lines: ["Postgres, Redis, S3", "state preservation"] }
        ]
      },
      sec3: {
        title: "Validating the model against a real bug",
        content: `<p>Trace how an engineer uses their mental model to deduce where a feature modification must take place.</p>`,
      },
      trace: {
        code: [
          "# Goal: Add a 5% handling fee to international orders",
          "# Mental model lookup: pricing logic lives in services/pricing.py",
          "# Prediction: edit calculate_shipping_and_fees()",
          "# Verification: tests/test_pricing.py confirms location"
        ],
        steps: [
          { line: 0, vars: { goal: "business requirement" } },
          { line: 1, vars: { model: "isolated to pricing service" } },
          { line: 2, vars: { targeted_file: "services/pricing.py" } },
          { line: 3, vars: { validated: "prediction correct in 2 minutes" } }
        ]
      },
      practiceIntro: "Confirm your understanding of building and verifying mental models.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "An internal cognitive simulation of a system is a <0> model.",
          "Verifying a mental model by guessing the location of logic is a <1>.",
          "Sketching boxes and arrows externalizes system <2>."
        ],
        blanks: [
          { a: ["mental"], why: "Mental models allow engineers to reason about systems abstractly." },
          { a: ["prediction"], why: "Making predictions tests whether your mental model matches reality." },
          { a: ["architecture"], why: "Architecture diagrams represent component boundaries and interactions." }
        ]
      },
      win: "You can build and test accurate mental models that allow you to navigate, modify, and explain any codebase with confidence.",
      nextTasks: [
        "Draw a one-page architecture diagram of your primary project from memory.",
        "Predict where an unfamiliar feature is implemented before searching for it.",
        "Walk a colleague through your mental model and update any misunderstandings."
      ],
      primarySource: "Simon Brown, *Software Architecture for Developers* (The C4 Model for Visualising Software).",
      quiz: [
        {
          q: "What is the ultimate purpose of building a system mental model?",
          a: [
            "To reason accurately about system behavior without inspecting every line of code",
            "To completely eliminate the need for version control backups",
            "To pass automated code style linting checks",
            "To avoid writing unit tests for new features"
          ],
          c: 0,
          why: "An accurate mental model lets you predict behavior and target changes quickly."
        },
        {
          q: "How can you test whether your mental model is flawed?",
          a: [
            "Make a prediction about system behavior; if execution disagrees, the model is flawed",
            "Check if your computer processor usage stays below fifty percent",
            "Ask if the codebase has been starred on GitHub more than a thousand times",
            "Verify whether all files have valid file extension names"
          ],
          c: 0,
          why: "Mismatches between predicted behavior and actual execution expose gaps in your model."
        },
        {
          q: "Why is sketching simple diagrams beneficial when reading code?",
          a: [
            "It externalizes relationships and relieves working memory strain",
            "It automatically generates production database indexes",
            "It speeds up network data transmission rates",
            "It forces the compiler to inline all function calls"
          ],
          c: 0,
          why: "External sketches free up cognitive capacity for deeper analytical reasoning."
        },
        {
          q: "What should you do when you discover code that contradicts your mental model?",
          a: [
            "Update your mental model to incorporate the newly discovered reality",
            "Assume the code author made a mistake and rewrite it immediately",
            "Delete your notes and stop investigating the system",
            "Pretend you never saw the contradictory code"
          ],
          c: 0,
          why: "Mental models must adapt to the ground truth of working software."
        }
      ]
    }
  ]
};

"use strict";

module.exports = {
  id: "dependency-injection",
  title: "Dependency Injection",
  num: 43,
  emoji: "💉",
  desc: "Passing collaborators in instead of constructing them — making code testable and swappable.",
  mission: `# Mission — Dependency Injection

## Why this course exists

Dependency Injection (DI) is one of the most misunderstood concepts in software engineering. Many developers view it as a terrifying, overly complex enterprise framework involving thousands of lines of XML or magic decorators. In reality, dependency injection is a simple, fundamental programming habit: passing collaborators in from the outside instead of constructing them inside with 'new'. This course demystifies DI, constructor injection, IoC containers, lifecycles, and test doubles.

## What the learner can do at the end

- Implement constructor injection and method injection without relying on complex frameworks.
- Understand the Inversion of Control (IoC) principle: the Hollywood Principle ('Don't call us, we'll call you').
- Configure and manage object lifecycles (Transient, Scoped, Singleton) in IoC containers.
- Decouple object construction from object execution using the Composition Root pattern.
- Leverage dependency injection to run comprehensive, lightning-fast unit tests using test doubles (mocks, fakes, stubs).

## What this course is NOT

- Not a Java Spring-only or C# .NET-only framework tutorial.
- Not an argument for over-engineering. It emphasizes pure dependency injection first.

## Success looks like

When writing a class that interacts with databases, external APIs, or system time, the learner passes collaborators in via constructor parameters, enabling seamless unit testing with in-memory test doubles in under five minutes.
`,
  notes: `# Notes — Dependency Injection

## Decisions
- Group into four themes: Pure DI & Inversion of Control, Injection Types & Composition Root, IoC Containers & Lifecycles, and Testability & Mocks.
- Contrast 'Pure DI' (no frameworks) with automated DI containers.
`,
  resources: `# Resources — Dependency Injection

## Knowledge (primary sources)
- Mark Seemann & Steven van Deursen, *Dependency Injection Principles, Practices, and Patterns* (Manning).
- Martin Fowler, *Inversion of Control Containers and the Dependency Injection Pattern* (martinfowler.com/articles/injection.html).
- Gerard Meszaros, *xUnit Test Patterns: Refactoring Test Code* (Addison-Wesley).

## Wisdom
- Dependency injection is simply passing an argument to a function or constructor. Never let a framework turn a simple concept into magic.
`,
  cheatsheetSections: [
    {
      title: "Hardcoded vs Injected",
      label: "The fundamental DI transition",
      code: `// BAD: Hardcoded dependency (coupled & untestable)
class OrderService {
  constructor() {
    this.mailer = new SmtpMailer(); // tight coupling!
  }
}

// GOOD: Injected collaborator (Pure DI)
class OrderService {
  constructor(mailer) {
    this.mailer = mailer; // passed in from the outside!
  }
}`,
      lessonN: 1,
      lessonSlug: "passing-collaborators-versus-hardcoded-new",
      lessonTitle: "Passing collaborators versus hardcoded 'new'"
    },
    {
      title: "The Composition Root",
      label: "Where the object graph is wired",
      code: `// Wire the entire application in ONE place at entry point (main.js):
const db = new PostgresDatabase(process.env.DATABASE_URL);
const repo = new SqlOrderRepository(db);
const mailer = new SendGridMailer(process.env.API_KEY);
const service = new OrderService(repo, mailer);
const controller = new OrderController(service);

app.post('/orders', (req, res) => controller.handle(req, res));`,
      lessonN: 3,
      lessonSlug: "the-composition-root-pattern",
      lessonTitle: "The Composition Root pattern"
    },
    {
      title: "Service Lifecycles",
      label: "Transient, Scoped, and Singleton",
      code: `Transient:
  A brand new instance is created every single time it is requested.
Scoped:
  Created once per HTTP request / transaction context, then disposed.
Singleton:
  Created once on application boot and shared across the entire runtime.`,
      lessonN: 5,
      lessonSlug: "object-lifecycles-transient-scoped-singleton",
      lessonTitle: "Object lifecycles: transient, scoped, singleton"
    },
    {
      title: "Test Doubles with DI",
      label: "Fakes, Stubs, and Mocks",
      code: `// Test using Fake in-memory collaborator in 1ms:
class FakeMailer {
  constructor() { this.sentMessages = []; }
  send(to, msg) { this.sentMessages.push({ to, msg }); }
}

const fakeMailer = new FakeMailer();
const service = new OrderService(fakeMailer);
service.checkout(cart);
assert.strictEqual(fakeMailer.sentMessages.length, 1);`,
      lessonN: 7,
      lessonSlug: "testability-mocks-stubs-and-fakes",
      lessonTitle: "Testability: mocks, stubs, and fakes"
    }
  ],
  glossaryGroups: [
    {
      id: "di-foundations",
      title: "Dependency Injection & IoC",
      terms: [
        { term: "Dependency Injection", def: "A design pattern where an object receives its dependencies from the outside rather than creating them internally.", lesson: 1, tags: ["di"] },
        { term: "Inversion of Control", def: "IoC: a design principle inverting the control flow so a framework or caller drives execution (the Hollywood Principle).", lesson: 2, tags: ["ioc"] },
        { term: "Pure DI", def: "Practicing dependency injection by hand using plain constructors without any third-party framework or container.", lesson: 1, tags: ["di"] },
        { term: "Collaborator", def: "An external service or object required by a class to perform its business responsibilities.", lesson: 1, tags: ["design"] }
      ]
    },
    {
      id: "wiring-patterns",
      title: "Wiring & Composition Root",
      terms: [
        { term: "Composition Root", def: "The single location in an application near the entry point where the entire object dependency graph is wired together.", lesson: 3, tags: ["patterns"] },
        { term: "Constructor injection", def: "The practice of supplying all required dependencies through a class constructor method.", lesson: 2, tags: ["injection"] },
        { term: "Method injection", def: "Passing a dependency as an argument to a specific method call rather than storing it in the constructor.", lesson: 4, tags: ["injection"] },
        { term: "Service Locator", def: "An architectural antipattern where classes query a global registry to locate dependencies, obscuring couplings.", lesson: 4, tags: ["antipattern"] }
      ]
    },
    {
      id: "containers-lifecycles",
      title: "Containers & Lifecycles",
      terms: [
        { term: "IoC Container", def: "A library or framework automatically resolving, instantiating, and wiring object dependencies based on registered types.", lesson: 5, tags: ["containers"] },
        { term: "Transient lifecycle", def: "An object lifecycle where a brand new instance is instantiated on every single injection request.", lesson: 5, tags: ["lifecycles"] },
        { term: "Scoped lifecycle", def: "An object lifecycle where a single instance is shared within a bounded context (like a single HTTP request).", lesson: 5, tags: ["lifecycles"] },
        { term: "Singleton lifecycle", def: "An object lifecycle where a single instance is instantiated once and shared across the entire application runtime.", lesson: 5, tags: ["lifecycles"] }
      ]
    },
    {
      id: "testability-doubles",
      title: "Testability & Test Doubles",
      terms: [
        { term: "Test double", def: "A generic term for any surrogate object used in place of a real dependency during testing (fakes, mocks, stubs).", lesson: 7, tags: ["testing"] },
        { term: "Mock", def: "A test double pre-programmed with expectations about which method calls it should receive, verifying interactions.", lesson: 7, tags: ["testing"] },
        { term: "Stub", def: "A test double providing canned answers to calls made during the test, with zero behavior verification.", lesson: 7, tags: ["testing"] },
        { term: "Captive dependency", def: "A concurrency bug where a longer-lived service (Singleton) holds onto a shorter-lived service (Scoped).", lesson: 6, tags: ["bugs"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "passing-collaborators-versus-hardcoded-new",
      title: "Passing collaborators versus hardcoded 'new'",
      topic: "Dependency Injection & IoC",
      anim: "Syringe",
      lede: "The root of all coupling: the 'new' keyword. Discover why hardcoding constructor calls inside classes freezes your architecture, and how passing arguments frees it.",
      winShort: "Replace hardcoded object instantiations with constructor parameter injection",
      missionLink: "The foundational habit that unlocks all software testability and flexibility",
      sec1: {
        title: "The problem with 'new'",
        content: `<p>Whenever you write <code>this.mailer = new SmtpMailer();</code> inside a class, you have welded that class to a concrete implementation. You cannot test your class without sending real emails! You cannot switch from SMTP to SendGrid without modifying every single class that uses it.</p><p><b>Dependency Injection (DI)</b> is simply the practice of passing that collaborator in from the outside: <code>constructor(mailer) { this.mailer = mailer; }</code>. Your class no longer knows or cares how the mailer was created; it simply uses the collaborator provided to it.</p>`,
        keyIdea: "Never construct collaborators with 'new' inside business classes; pass them in from the outside."
      },
      predict: {
        q: "How does a class that receives its database connection via constructor parameters differ from one that calls 'new Database()'?",
        a: [
          "It is completely decoupled from database construction and can be tested in 1ms with an in-memory test database",
          "It takes twice as much memory in RAM",
          "It cannot execute SQL queries",
          "It is slower to compile"
        ],
        c: 0,
        why: "Injected collaborators make classes easily testable and swappable without touching business logic."
      },
      sec2: {
        title: "Hardcoded construction versus Injection",
        content: `<p>Contrast the rigid coupling of internal instantiation with the flexibility of injected dependencies.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Hardcoded 'new' (Rigid)", lines: ["class OrderService {", "  this.db = new PostgresDb()", "tightly welded to Postgres; untestable!"] },
          { title: "Injected (Pure DI)", lines: ["class OrderService(db) {", "  this.db = db", "works with Postgres, SQLite, or MockDb!"] }
        ]
      },
      sec3: {
        title: "Tracing dependency injection in action",
        content: `<p>Trace how a single OrderService works seamlessly with both production and test collaborators.</p>`,
      },
      trace: {
        code: [
          "# Production Wiring:",
          "real_service = OrderService(db=PostgresDatabase(), mailer=SendGridMailer())",
          "# Automated Testing Wiring (zero network calls!):",
          "test_service = OrderService(db=InMemoryFakeDatabase(), mailer=MockMailer())",
          "test_service.checkout(cart) # runs in 0.002s in CI!"
        ],
        steps: [
          { line: 0, vars: { prod_wiring: "real database and cloud mailer passed in production" } },
          { line: 2, vars: { test_wiring: "fast in-memory doubles passed in test environment" } },
          { line: 4, vars: { execution: "identical business logic executes across both environments" } }
        ]
      },
      practiceIntro: "Test your memory of dependency injection basics.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Passing collaborators into an object from the outside is Dependency <0>.",
          "Instantiating dependencies inside a class using the <1> keyword creates tight coupling.",
          "Practicing DI by hand without third-party frameworks is <2> DI."
        ],
        blanks: [
          { a: ["Injection"], why: "Dependency Injection passes collaborators in." },
          { a: ["new"], why: "Hardcoded 'new' tightly couples classes." },
          { a: ["Pure"], why: "Pure DI uses plain language constructors." }
        ]
      },
      win: "You can free classes from hardcoded dependencies by injecting collaborators through constructors.",
      nextTasks: [
        "Audit a class that uses new Database() inside its constructor and refactor it to accept db as a parameter.",
        "Pass an in-memory dictionary mock into that class during a unit test.",
        "Observe how easy testing becomes when dependencies are injected."
      ],
      primarySource: "Mark Seemann & Steven van Deursen, *Dependency Injection Principles, Practices, and Patterns*, Chapter 1: 'A gentle introduction to Dependency Injection'.",
      quiz: [
        {
          q: "What is Dependency Injection in its simplest, most fundamental form?",
          a: [
            "Passing an object's collaborators to it as arguments, typically via its constructor, rather than having the object construct them itself",
            "A complex enterprise Java framework that requires XML files",
            "An operating system feature that injects binary code into running processes",
            "A database indexing technique"
          ],
          c: 0,
          why: "At its core, DI is simply passing dependencies as parameters rather than constructing them internally."
        },
        {
          q: "Why does hardcoding 'new HttpClient()' inside a service class make unit testing painful?",
          a: [
            "Unit tests will attempt to make real external network requests across the internet, making tests slow, flaky, and dependent on network availability",
            "Unit tests cannot run on computers that have network cards",
            "The compiler deletes test files",
            "It turns off the computer"
          ],
          c: 0,
          why: "Hardcoded clients force tests to hit real network infrastructure, breaking test isolation."
        },
        {
          q: "What is 'Pure DI' (or Poor Man's DI)?",
          a: [
            "Practicing dependency injection using plain language constructors and manual wiring, without any third-party DI container or framework",
            "A low-cost cloud hosting plan",
            "Writing code without any dependencies at all",
            "A deprecated programming technique"
          ],
          c: 0,
          why: "Pure DI proves that DI is an architectural design habit, not a library dependency."
        },
        {
          q: "What is a 'collaborator' in object-oriented design?",
          a: [
            "Another service or object that a class interacts with to accomplish its work (e.g. a repository or mailer)",
            "Another developer on your team who reviews your pull requests",
            "A compiler that translates code",
            "A database backup script"
          ],
          c: 0,
          why: "Collaborators are the peer services and objects that a class relies upon to execute behavior."
        }
      ]
    },
    {
      n: 2,
      id: "inversion-of-control-the-hollywood-principle",
      title: "Inversion of Control: the Hollywood Principle",
      topic: "Dependency Injection & IoC",
      anim: "Syringe",
      lede: "Don't call us, we'll call you. Discover Inversion of Control (IoC): how frameworks and dependency containers reverse the flow of control in software systems.",
      winShort: "Explain Inversion of Control and the distinction between libraries and frameworks",
      missionLink: "The architectural shift distinguishing modern extensible systems from traditional scripts",
      sec1: {
        title: "The Hollywood Principle",
        content: `<p>In traditional procedural programming, your code is in charge: it creates objects, calls library functions, and controls the program execution from start to finish. You call the library.</p><p><b>Inversion of Control (IoC)</b> flips this dynamic upside down. Coined as the <b>Hollywood Principle</b> (<i>'Don't call us, we'll call you'</i>), an IoC container or framework is in charge of the main control loop. You plug your components into the framework, and <b>the framework calls your code</b> when appropriate.</p>`,
        keyIdea: "With a library, your code is in control; with Inversion of Control, the framework is in control."
      },
      predict: {
        q: "What is the primary difference between a library and a framework in terms of control flow?",
        a: [
          "You call a library; a framework calls you (Inversion of Control)",
          "Libraries are written in C; frameworks are written in Python",
          "Frameworks do not use computer memory",
          "There is no difference between them"
        ],
        c: 0,
        why: "The defining characteristic of a framework is Inversion of Control: it owns the control loop and invokes your code."
      },
      sec2: {
        title: "Library versus Framework control flow",
        content: `<p>Visualise how Inversion of Control reverses the direction of the execution driver.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Traditional Library", lines: ["Your Code is in Control", "calls math.sqrt()", "calls json.loads()"] },
          { title: "Inversion of Control (Framework)", lines: ["Framework owns Main Loop (FastAPI / React)", "framework invokes your route: @app.get()", "framework injects dependencies!"] }
        ]
      },
      sec3: {
        title: "Tracing Inversion of Control in a web framework",
        content: `<p>Trace how a web framework listens for network requests and invokes your registered handler.</p>`,
      },
      trace: {
        code: [
          "# You register your handler with the framework:",
          "@app.get('/users/{id}')",
          "def get_user(id: int): return {'id': id}",
          "# Framework executes the infinite event loop: accepts socket -> parses HTTP -> CALLS YOUR FUNCTION!"
        ],
        steps: [
          { line: 0, vars: { registration: "user code registered as plugin callback" } },
          { line: 2, vars: { ioc_execution: "framework receives TCP packet, parses params, and calls get_user(42)" } }
        ]
      },
      practiceIntro: "Test your memory of Inversion of Control.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The design principle where frameworks call your code is Inversion of <0>.",
          "The Hollywood Principle says: 'Don't call us, we'll <1> you.'",
          "The acronym IoC stands for Inversion of <2>."
        ],
        blanks: [
          { a: ["Control"], why: "Inversion of Control reverses program flow." },
          { a: ["call"], why: "The Hollywood Principle describes framework callbacks." },
          { a: ["Control"], why: "IoC is the standard abbreviation." }
        ]
      },
      win: "You can articulate how Inversion of Control shifts architectural orchestration from user scripts to framework containers.",
      nextTasks: [
        "Explain to a peer the difference between calling a library function and registering a framework route.",
        "Observe how an HTTP framework manages the server event loop while your code remains passive.",
        "Read Martin Fowler's classic essay *Inversion of Control Containers and the Dependency Injection Pattern*."
      ],
      primarySource: "Martin Fowler: *Inversion of Control Containers and the Dependency Injection Pattern* (martinfowler.com, 2004).",
      quiz: [
        {
          q: "What is the 'Hollywood Principle' in software architecture?",
          a: [
            "'Don't call us, we'll call you': high-level frameworks control the execution loop and invoke low-level user code plugins when needed",
            "All software should be documented with movie analogies",
            "Every variable must have an audition before being declared",
            "Code must be written in Los Angeles, California"
          ],
          c: 0,
          why: "The Hollywood Principle encapsulates Inversion of Control: framework calls user code."
        },
        {
          q: "Is Dependency Injection the only way to achieve Inversion of Control?",
          a: [
            "No, DI is one specific implementation of IoC; other forms include Template Method, Strategy, and Event Callbacks",
            "Yes, DI and IoC are completely identical terms",
            "Only in object-oriented programming",
            "Yes, unless using C++"
          ],
          c: 0,
          why: "IoC is a broad architectural concept; DI is the specific practice of inverting dependency creation."
        },
        {
          q: "How does a web server framework (like FastAPI or Express) embody Inversion of Control?",
          a: [
            "The framework owns the main network socket loop and calls your route functions when matching HTTP requests arrive",
            "It turns off the database server",
            "It makes your Python code compile to binary",
            "It eliminates the need for HTTP headers"
          ],
          c: 0,
          why: "You don't call the server; the server loop listens and invokes your route callbacks."
        },
        {
          q: "What is the primary advantage of Inversion of Control in software frameworks?",
          a: [
            "Extensibility: common plumbing (networking, lifecycle, thread management) is handled centrally, letting developers focus strictly on business logic plugins",
            "It makes computers use fifty percent less electrical power",
            "It allows the computer to run without a CPU",
            "It makes code impossible to reverse engineer"
          ],
          c: 0,
          why: "Frameworks manage complex boilerplate lifecycles, calling custom user plugins as needed."
        }
      ]
    },
    {
      n: 3,
      id: "the-composition-root-pattern",
      title: "The Composition Root pattern",
      topic: "Wiring & Composition Root",
      anim: "Syringe",
      lede: "If classes don't create their own dependencies, who does? Discover Mark Seemann's Composition Root pattern: the single unified place where your entire application graph is wired.",
      winShort: "Implement the Composition Root pattern to centralize dependency instantiation and wiring",
      missionLink: "Prevents dependency wiring logic from contaminating business classes",
      sec1: {
        title: "Where do objects get created?",
        content: `<p>If classes are forbidden from using <code>new</code> internally, where does object creation happen? If you create dependencies all over the codebase, you have simply scattered the mess.</p><p>Mark Seemann formalized the answer: <b>The Composition Root</b>. A Composition Root is <i>a single, unified location in the application as close as possible to the entry point (e.g. main.py or index.js) where the entire dependency graph is wired together</i>.</p>`,
        keyIdea: "The Composition Root is the single place near the application entry point where the object graph is assembled."
      },
      predict: {
        q: "Where should the Composition Root live in a standard backend application?",
        a: [
          "In the main entry point file (e.g. main.py, server.ts, or Program.cs) during startup",
          "Inside the database driver",
          "Inside each individual controller file",
          "In the browser cookie jar"
        ],
        c: 0,
        why: "The Composition Root belongs as close as possible to the application startup entry point."
      },
      sec2: {
        title: "The Composition Root wiring diagram",
        content: `<p>Observe how the entire tree of services, repositories, and adapters is assembled in one place.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Entry Point: main.py (Composition Root)", lines: ["db = PostgresDatabase(URL)", "repo = SqlUserRepository(db)", "service = UserService(repo)", "app.include_router(UserController(service))"] },
          { title: "Runtime Execution", lines: ["HTTP requests arrive -> invoke pre-wired graph", "zero dependency creation during request handling!"] }
        ]
      },
      sec3: {
        title: "Tracing Pure DI wiring in a Composition Root",
        content: `<p>Trace how a complete application dependency graph is constructed in 6 lines of pure Python.</p>`,
      },
      trace: {
        code: [
          "# main.py - The Composition Root",
          "db_pool = create_postgres_pool(config.DB_URL)",
          "user_repo = SqlAlchemyUserRepository(db_pool)",
          "mailer = SendGridEmailAdapter(config.API_KEY)",
          "register_service = RegisterUserUseCase(user_repo, mailer)",
          "app = create_web_server(register_service)"
        ],
        steps: [
          { line: 1, vars: { infrastructure: "database connection pool initialized" } },
          { line: 2, vars: { adapters: "repositories and mailers instantiated with infrastructure" } },
          { line: 4, vars: { use_case: "business services wired with adapters" } },
          { line: 5, vars: { server: "application fully wired and ready to receive traffic" } }
        ]
      },
      practiceIntro: "Test your memory of the Composition Root pattern.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The unified location where the object graph is wired is the <0> Root.",
          "The author who coined the Composition Root term is Mark <1>.",
          "The Composition Root should be placed as close as possible to the <2> point."
        ],
        blanks: [
          { a: ["Composition"], why: "Composition Root assembles all application objects." },
          { a: ["Seemann"], why: "Mark Seemann authored Dependency Injection in .NET." },
          { a: ["entry"], why: "The entry point (main.py) bootstraps the application." }
        ]
      },
      win: "You can assemble clean, modular object graphs in a centralized Composition Root without scattering wiring logic.",
      nextTasks: [
        "Audit your application to identify where objects are constructed with 'new'.",
        "Centralize object instantiation into a dedicated main.py or bootstrap.ts file.",
        "Verify that your business service classes contain zero object wiring code."
      ],
      primarySource: "Mark Seemann: *Composition Root* (blog.ploeh.dk/2011/07/28/CompositionRoot/).",
      quiz: [
        {
          q: "What is a 'Composition Root' in software architecture?",
          a: [
            "A single, centralized location in an application near the entry point where the entire dependency graph is wired together",
            "The root directory of the hard drive",
            "The top-level table in a database schema",
            "A special type of CSS stylesheet"
          ],
          c: 0,
          why: "It is the unified bootstrap location responsible for assembling all application objects."
        },
        {
          q: "Why is scattering object construction across 50 different service classes harmful?",
          a: [
            "It couples classes to concrete implementations, making it impossible to reconfigure or test them in isolation",
            "It causes the computer screen to flicker",
            "It is forbidden by Python language syntax",
            "It deletes git commit history"
          ],
          c: 0,
          why: "Scattered construction breaks modularity; centralizing wiring isolates dependencies."
        },
        {
          q: "Do business logic classes inside the domain layer need to know about the Composition Root?",
          a: [
            "No, the Composition Root lives in the outermost infrastructure layer; domain classes have zero knowledge of it",
            "Yes, domain classes must import the Composition Root directly",
            "Only on Windows operating systems",
            "Only if the domain classes contain numbers"
          ],
          c: 0,
          why: "The Composition Root is in the outermost entry layer; domain logic remains completely decoupled."
        },
        {
          q: "How does the Composition Root pattern simplify switching from a mock database to a real database?",
          a: [
            "You only change a single line of code in the Composition Root to pass the real database adapter instead of the mock",
            "It automatically writes SQL queries for you",
            "It deletes old database tables",
            "It restarts the server computer"
          ],
          c: 0,
          why: "Because all wiring is in one place, swapping adapters touches exactly one bootstrap line."
        }
      ]
    },
    {
      n: 4,
      id: "the-service-locator-antipattern",
      title: "The Service Locator antipattern",
      topic: "Wiring & Composition Root",
      anim: "Syringe",
      lede: "The dark twin of Dependency Injection. Discover why the Service Locator pattern obscures class dependencies, creates runtime null crashes, and defeats compiler safety.",
      winShort: "Identify and refactor the Service Locator antipattern into explicit constructor injection",
      missionLink: "Prevents hidden dependencies from causing unexpected runtime crashes",
      sec1: {
        title: "The disguised global variable",
        content: `<p>At first glance, a <b>Service Locator</b> looks like dependency injection: you have a central registry (<code>ServiceLocator.get('Database')</code>). Instead of passing dependencies in the constructor, a class reaches out to the global locator to fetch what it needs.</p><p>Mark Seemann and Martin Fowler classify Service Locator as a dangerous <b>Antipattern</b>. Why? <b>Because it hides a class's true dependencies!</b> When you instantiate <code>new OrderService()</code>, the constructor takes zero arguments, lying to you that it has no dependencies. Then at runtime, it suddenly crashes because someone forgot to register the database in the global locator!</p>`,
        keyIdea: "Service Locator hides dependencies and defers missing-dependency errors to runtime crashes."
      },
      predict: {
        q: "Why is Constructor Injection superior to Service Locator when writing unit tests?",
        a: [
          "Constructor injection makes dependencies explicit in the method signature, so the compiler forces you to provide them; Service Locator crashes at runtime",
          "Service Locator uses more hard drive storage space",
          "Constructor injection only works on Fridays",
          "There is no difference between them"
        ],
        c: 0,
        why: "Constructors advertise dependencies explicitly; Service Locator hides them behind runtime lookups."
      },
      sec2: {
        title: "Constructor Injection versus Service Locator",
        content: `<p>Contrast honest, explicit constructor signatures with deceptive, hidden Service Locator lookups.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Service Locator (Dishonest)", lines: ["class OrderService() {", "  this.db = Locator.get('DB')", "constructor lies: claims zero dependencies! Crashes at runtime if Locator is empty!"] },
          { title: "Constructor Injection (Honest)", lines: ["class OrderService(db, mailer) {", "  this.db = db; this.mailer = mailer;", "signature tells truth: compiler guarantees dependencies are provided!"] }
        ]
      },
      sec3: {
        title: "Tracing a Service Locator runtime crash",
        content: `<p>Trace how a missing registration in a Service Locator leads to an unexpected runtime exception in production.</p>`,
      },
      trace: {
        code: [
          "# Developer writes test: service = OrderService() -> compiles cleanly!",
          "# Developer calls service.checkout() -> BOOM! Runtime Crash:",
          "# ServiceLocatorError: 'PaymentGateway' not found in locator!",
          "# Fix: Use Constructor Injection -> OrderService(payment_gateway)",
          "# Compiler now demands payment_gateway at test creation time!"
        ],
        steps: [
          { line: 0, vars: { deceptive_constructor: "OrderService() appears to need zero dependencies" } },
          { line: 2, vars: { runtime_crash: "crashes deep inside execution when querying global locator" } },
          { line: 3, vars: { refactoring: "constructor injection turns runtime crash into compile-time guarantee" } }
        ]
      },
      practiceIntro: "Test your memory of Service Locator pitfalls.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A global registry where classes reach out to fetch dependencies is a Service <0>.",
          "Service Locator is classified as an <1> because it hides dependencies.",
          "Passing dependencies explicitly in the constructor is <2> injection."
        ],
        blanks: [
          { a: ["Locator"], why: "Service Locator fetches dependencies globally." },
          { a: ["antipattern"], why: "Service Locator obscures dependencies." },
          { a: ["constructor"], why: "Constructor injection is honest and explicit." }
        ]
      },
      win: "You can spot the Service Locator antipattern in legacy code and refactor it into honest, explicit constructor injection.",
      nextTasks: [
        "Audit a class that calls a global ServiceLocator or Container.get() inside its methods.",
        "Refactor the class to accept those dependencies as constructor parameters.",
        "Observe how the refactored class can be instantiated in tests without setting up global container state."
      ],
      primarySource: "Mark Seemann: *Service Locator is an Anti-Pattern* (blog.ploeh.dk/2010/02/03/ServiceLocatorIsAnAntiPattern/).",
      quiz: [
        {
          q: "Why is the Service Locator pattern classified as an architectural antipattern?",
          a: [
            "It hides class dependencies from consumers, turning compile-time errors into unexpected runtime crashes",
            "It requires purchasing dedicated database servers",
            "It can only be used in C++ programming",
            "It deletes source code files automatically"
          ],
          c: 0,
          why: "Service Locator makes constructors lie about dependencies, causing unexpected runtime failures."
        },
        {
          q: "How does the Service Locator pattern violate encapsulation?",
          a: [
            "Classes have hidden couplings to a global locator registry, making them impossible to understand or reuse in isolation",
            "It makes all private variables public",
            "It turns off type checking in TypeScript",
            "It requires all classes to be written in a single file"
          ],
          c: 0,
          why: "A class that reaches into a global locator is tightly coupled to the locator's existence and contents."
        },
        {
          q: "What happens when you try to unit-test a class that uses the Service Locator pattern?",
          a: [
            "You must initialize the global locator with mock dependencies before every test, risking state pollution between tests",
            "Unit tests run twice as fast",
            "Unit tests are impossible to write",
            "The test runner deletes the test files"
          ],
          c: 0,
          why: "Global state in locators leaks across tests, causing brittle and order-dependent test suites."
        },
        {
          q: "What is the primary cure for the Service Locator antipattern?",
          a: [
            "Replace locator lookups with explicit Constructor Injection: declare all dependencies as parameters in the constructor",
            "Delete the class completely",
            "Use global variables instead",
            "Rename the class to Service"
          ],
          c: 0,
          why: "Constructor injection makes dependencies explicit, verifiable by compilers, and easy to inject in tests."
        }
      ]
    },
    {
      n: 5,
      id: "object-lifecycles-transient-scoped-singleton",
      title: "Object lifecycles: transient, scoped, singleton",
      topic: "Containers & Lifecycles",
      anim: "Syringe",
      lede: "When should an object be created, and when should it die? Master the three fundamental DI lifecycles: Transient (new every time), Scoped (per request), and Singleton (forever).",
      winShort: "Select and configure appropriate object lifecycles in dependency injection containers",
      missionLink: "Prevents memory leaks, stale state, and concurrency bugs in backend services",
      sec1: {
        title: "The three lifecycle tiers",
        content: `<p>When an IoC container or dependency system creates an object, it must decide how long that instance should live. There are three standard <b>Lifecycles</b>:</p><p><b>1. Transient:</b> A brand new instance is created every single time it is requested. <b>2. Scoped:</b> Created once per bounded context (typically once per incoming HTTP request) and shared among all components handling that request. <b>3. Singleton:</b> Created once when the server boots and shared globally across all requests for the entire life of the process.</p>`,
        keyIdea: "Transient creates new every time; Scoped lives for one HTTP request; Singleton lives forever."
      },
      predict: {
        q: "What lifecycle should a database transaction session (e.g. SQLAlchemy AsyncSession) have in a web API?",
        a: [
          "Scoped (created once per incoming HTTP request, shared by all services, and closed on response)",
          "Singleton (shared across all concurrent users forever)",
          "Transient (created anew on every single function call)",
          "It should never be closed"
        ],
        c: 0,
        why: "Database sessions must be isolated to a single HTTP request context to avoid sharing transactions across users."
      },
      sec2: {
        title: "The lifecycle comparison matrix",
        content: `<p>Understand the lifespan and use cases for the three container lifecycles.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Transient", lines: ["lifetime: single injection", "use for: lightweight stateless helpers", "new instance every call!"] },
          { title: "Scoped", lines: ["lifetime: single HTTP request", "use for: DB sessions, current user context", "disposed upon request completion!"] },
          { title: "Singleton", lines: ["lifetime: entire application runtime", "use for: thread-safe pools, config, caches", "created once on boot!"] }
        ]
      },
      sec3: {
        title: "Tracing scoped lifecycle disposal",
        content: `<p>Trace how a scoped database session is created on request arrival and cleanly disposed upon completion.</p>`,
      },
      trace: {
        code: [
          "# Request 1 arrives -> Scope 1 created:",
          "session_1 = get_scoped_db() # Instance A created",
          "# Request 2 arrives concurrently -> Scope 2 created:",
          "session_2 = get_scoped_db() # Instance B created (isolated from Request 1!)",
          "# Request 1 finishes -> Scope 1 disposed (Instance A closed!)"
        ],
        steps: [
          { line: 0, vars: { req_1: "HTTP Request 1 enters server" } },
          { line: 1, vars: { instance_a: "Scope 1 allocates dedicated database session A" } },
          { line: 3, vars: { instance_b: "Scope 2 allocates dedicated database session B (zero crosstalk!)" } },
          { line: 4, vars: { teardown: "Scope 1 ends; Session A committed and closed cleanly" } }
        ]
      },
      practiceIntro: "Test your memory of object lifecycles.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "An object instantiated anew on every single injection has a <0> lifecycle.",
          "An object shared within a single HTTP request has a <1> lifecycle.",
          "An object instantiated once and shared for the entire application life is a <2>."
        ],
        blanks: [
          { a: ["transient"], why: "Transient creates a new instance on every call." },
          { a: ["scoped"], why: "Scoped instances are bound to request contexts." },
          { a: ["singleton"], why: "Singletons live for the entire process duration." }
        ]
      },
      win: "You can configure object lifecycles with precision, ensuring thread safety and preventing memory leaks.",
      nextTasks: [
        "Audit the services in your application and identify which are Singletons versus Scoped.",
        "Ensure your database sessions are strictly Scoped to the HTTP request.",
        "Configure an in-memory cache as a thread-safe Singleton."
      ],
      primarySource: "Mark Seemann & Steven van Deursen, *Dependency Injection Principles, Practices, and Patterns*, Chapter 8: 'Object Lifetime'.",
      quiz: [
        {
          q: "What danger occurs if a database session is configured as a global Singleton across a multi-user web app?",
          a: [
            "Concurrent user requests will attempt to use the same database transaction simultaneously, causing race conditions, thread crashes, and data corruption",
            "The database server deletes all tables",
            "The computer CPU temperature drops to absolute zero",
            "Singletons cannot connect to database servers"
          ],
          c: 0,
          why: "Database sessions are not thread-safe; sharing one across concurrent users corrupts transactions."
        },
        {
          q: "When is a Singleton lifecycle appropriate in a backend application?",
          a: [
            "For stateless services, immutable configuration settings, or thread-safe shared connection pools (like a Redis client pool)",
            "For storing user shopping carts",
            "For user passwords",
            "Singletons should never be used under any circumstances"
          ],
          c: 0,
          why: "Immutable configurations and thread-safe resource pools are ideal Singletons."
        },
        {
          q: "What is a 'Scoped' lifecycle in web frameworks like ASP.NET or FastAPI?",
          a: [
            "An object is created when an HTTP request begins, shared across all components handling that request, and disposed when the response is sent",
            "An object that only works inside a telescope",
            "A variable that is visible only on mobile screens",
            "A temporary file on the desktop"
          ],
          c: 0,
          why: "Scoped binds an object's lifetime strictly to the lifecycle of a single HTTP transaction."
        },
        {
          q: "What happens if a Transient service is injected into three different classes during a single request?",
          a: [
            "Three completely separate instances of the service are created in memory",
            "Only one instance is created",
            "An error is thrown",
            "The service is deleted"
          ],
          c: 0,
          why: "Transient services are never reused; each injection request receives a brand new instance."
        }
      ]
    },
    {
      n: 6,
      id: "captive-dependencies-and-concurrency-bugs",
      title: "Captive dependencies and concurrency bugs",
      topic: "Containers & Lifecycles",
      anim: "Syringe",
      lede: "The silent killer of dependency injection. Learn what happens when a long-lived Singleton accidentally holds onto a short-lived Scoped service: the Captive Dependency bug.",
      winShort: "Detect and prevent captive dependency bugs across container lifecycle configurations",
      missionLink: "Prevents subtle multi-threading and memory leak bugs in production servers",
      sec1: {
        title: "The captive trap",
        content: `<p>A <b>Captive Dependency</b> is a severe lifecycle mismatch bug: it happens when <i>a service with a longer lifecycle holds onto a dependency with a shorter lifecycle</i>.</p><p>The classic disaster: you configure <code>CacheManager</code> as a <b>Singleton</b> (lives forever), but inject a <b>Scoped</b> <code>DatabaseSession</code> into it. The Singleton traps that database session forever! The session is never closed, memory leaks, and concurrent user requests end up sharing the exact same database connection!</p>`,
        keyIdea: "A service must never depend on a service with a shorter lifetime (e.g. Singleton depending on Scoped)."
      },
      predict: {
        q: "What happens if a Singleton service receives a Scoped database connection in its constructor on application boot?",
        a: [
          "The Singleton holds that single database connection forever (captive dependency), causing memory leaks and cross-request state pollution",
          "The database automatically restarts every five minutes",
          "The compiler rejects the application code",
          "There is no negative consequence"
        ],
        c: 0,
        why: "The singleton lives forever, keeping the scoped resource trapped and preventing its disposal."
      },
      sec2: {
        title: "The lifecycle compatibility rule",
        content: `<p>Dependencies can only point toward equal or LONGER lifecycles; pointing to shorter lifecycles is illegal.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Legal: Scoped -> Singleton", lines: ["Scoped RequestService depends on Singleton Pool", "Pool lives longer; completely safe!"] },
          { title: "Legal: Transient -> Scoped", lines: ["Transient Helper depends on Scoped DbSession", "Helper dies first; completely safe!"] },
          { title: "ILLEGAL: Singleton -> Scoped (Captive!)", lines: ["Singleton Manager depends on Scoped DbSession", "Traps scoped session forever! Memory leak & race conditions!"] }
        ]
      },
      sec3: {
        title: "Tracing captive dependency corruption",
        content: `<p>Trace how a captive dependency leaks User A's data to User B across requests.</p>`,
      },
      trace: {
        code: [
          "# Singleton Service: NotificationManager (created on boot)",
          "# Captive bug: Injected with Scoped CurrentUserContext from Request 1 (User A)",
          "# 5 minutes later, Request 2 arrives for User B:",
          "NotificationManager.send_alert('Your balance changed')",
          "# BUG: NotificationManager still holds User A's context! Sends alert to User A instead of User B!"
        ],
        steps: [
          { line: 0, vars: { singleton: "NotificationManager lives for entire server process" } },
          { line: 1, vars: { captive_leak: "trapped User A's scoped context in long-lived field" } },
          { line: 4, vars: { corruption: "stale captive context pollutes unrelated Request 2" } }
        ]
      },
      practiceIntro: "Test your memory of captive dependencies.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "When a longer-lived service traps a shorter-lived service, it is a <0> dependency.",
          "A Singleton must never depend on a service with a <1> lifecycle.",
          "Captive dependencies can cause severe memory <2>s and race conditions."
        ],
        blanks: [
          { a: ["captive"], why: "Captive dependencies trap short-lived instances." },
          { a: ["scoped", "shorter"], why: "Dependencies must have equal or longer lifespans." },
          { a: ["leak", "leaks"], why: "Trapped instances are never garbage collected." }
        ]
      },
      win: "You can audit dependency injection graphs and eliminate captive dependencies before they cause production memory leaks.",
      nextTasks: [
        "Audit your DI configuration to verify that no Singleton depends on a Scoped service.",
        "Enable container validation (e.g. ValidateScopes in .NET) to catch captive dependencies on startup.",
        "Refactor a captive service by passing the scoped dependency as a method parameter rather than constructor field."
      ],
      primarySource: "Mark Seemann: *Captive Dependency* (blog.ploeh.dk/2014/06/02/captive-dependency/).",
      quiz: [
        {
          q: "What is a 'Captive Dependency' in dependency injection architecture?",
          a: [
            "A dependency that is inadvertently kept alive longer than its intended lifetime because it was injected into a service with a longer lifecycle",
            "A dependency held hostage by a computer virus",
            "A dependency that can only be downloaded from GitHub",
            "A database password that cannot be changed"
          ],
          c: 0,
          why: "Longer-lived parent instances hold references to short-lived children, keeping them captive."
        },
        {
          q: "Which lifecycle combination creates a dangerous Captive Dependency?",
          a: [
            "A Singleton class depending on a Scoped class in its constructor",
            "A Scoped class depending on a Singleton class",
            "A Transient class depending on a Transient class",
            "A Scoped class depending on a Scoped class"
          ],
          c: 0,
          why: "Singletons live forever, trapping the scoped service and preventing its per-request teardown."
        },
        {
          q: "How can you safely provide a Scoped dependency to a Singleton service without creating a captive dependency?",
          a: [
            "Pass the scoped dependency as a parameter to the specific method call (Method Injection), or inject a factory that creates a scope",
            "Make all services in the application Singletons",
            "Store the scoped dependency in a global text file",
            "Delete the Singleton service"
          ],
          c: 0,
          why: "Method injection or factory scopes resolve the dependency dynamically without storing a persistent reference."
        },
        {
          q: "What feature in modern DI containers (like ASP.NET Core DI) detects captive dependencies automatically?",
          a: [
            "Scope Validation (ValidateScopes = true), which throws an exception on startup if a Singleton resolves a Scoped service",
            "Automated unit test generators",
            "The operating system firewall",
            "The hard drive defragmenter"
          ],
          c: 0,
          why: "Scope validation checks the dependency graph at startup and fails fast if captive dependencies exist."
        }
      ]
    },
    {
      n: 7,
      id: "testability-mocks-stubs-and-fakes",
      title: "Testability: mocks, stubs, and fakes",
      topic: "Testability & Test Doubles",
      anim: "Syringe",
      lede: "Stop making unit tests talk to Stripe and PostgreSQL. Master Gerard Meszaros's Test Double taxonomy: Fakes, Stubs, Mocks, Dummies, and Spies.",
      winShort: "Select and implement appropriate test doubles (fakes, stubs, mocks) to achieve fast, isolated unit tests",
      missionLink: "The ultimate payoff of dependency injection: fearless, sub-millisecond testing",
      sec1: {
        title: "The test double taxonomy",
        content: `<p>Why do we inject dependencies? The greatest practical payoff is <b>Testability</b>. If a class receives its collaborators as arguments, we can substitute them during automated tests with <b>Test Doubles</b>.</p><p>Gerard Meszaros categorized test doubles into five distinct roles: <b>Dummy</b> (filler object), <b>Stub</b> (provides canned responses), <b>Spy</b> (records calls), <b>Mock</b> (verifies expected interactions), and <b>Fake</b> (working in-memory implementation, like an in-memory SQLite database or dictionary store).</p>`,
        keyIdea: "Test doubles substitute real external dependencies in tests; DI makes substitution effortless."
      },
      predict: {
        q: "What is the difference between a Stub and a Mock in test double terminology?",
        a: [
          "A Stub provides canned data to the code under test; a Mock asserts that specific methods were called with expected arguments",
          "Stubs are written in Python; Mocks are written in Java",
          "Mocks run on real databases; Stubs run in memory",
          "There is no difference between them"
        ],
        c: 0,
        why: "Stubs verify state (returning canned answers); Mocks verify behavior (asserting call counts and arguments)."
      },
      sec2: {
        title: "The Test Double spectrum",
        content: `<p>Understand the specific capabilities of each test double archetype.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Stub (Canned Data)", lines: ["returns fixed answers", "e.g. stub_user_repo.find() -> User(name='Ada')", "verifies STATE"] },
          { title: "Mock (Behavior Check)", lines: ["pre-programmed with expectations", "e.g. mock_mailer.assert_called_with('ada@co.com')", "verifies BEHAVIOR"] },
          { title: "Fake (Working Alternative)", lines: ["real working lightweight implementation", "e.g. InMemoryDatabase with Python dict", "ideal for complex integration tests"] }
        ]
      },
      sec3: {
        title: "Tracing test double substitution",
        content: `<p>Trace how a Fake Payment Gateway allows testing checkout failure logic in 1 millisecond.</p>`,
      },
      trace: {
        code: [
          "class FakePaymentGateway:",
          "    def __init__(self, should_fail=False): self.should_fail = should_fail",
          "    def charge(self, amount):",
          "        if self.should_fail: raise PaymentDeclinedException('Card declined')",
          "        return 'charge_token_123'",
          "# Test: checkout with failing gateway -> assert order marked failed in 0.001s!"
        ],
        steps: [
          { line: 0, vars: { fake_defined: "FakePaymentGateway implements real interface without Stripe SDK" } },
          { line: 3, vars: { failure_mode: "simulates credit card decline deterministically" } },
          { line: 5, vars: { test_run: "order rollback and error handling verified without touching internet" } }
        ]
      },
      practiceIntro: "Test your memory of test double types.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The generic term for any surrogate object used in testing is a test <0>.",
          "A test double returning canned answers without verifying calls is a <1>.",
          "A lightweight, fully-working in-memory implementation is a <2>."
        ],
        blanks: [
          { a: ["double"], why: "Test double is the universal umbrella term." },
          { a: ["stub"], why: "Stubs provide canned data inputs." },
          { a: ["fake"], why: "Fakes have working business shortcuts (like dict stores)." }
        ]
      },
      win: "You can author fast, reliable unit test suites using the right test double archetype for each scenario.",
      nextTasks: [
        "Build a FakeUserRepository backed by an in-memory Python dictionary for testing.",
        "Write a test that uses a Mock to verify an alert email was sent on security failure.",
        "Refactor an integration test that hits a real database to use an in-memory fake."
      ],
      primarySource: "Gerard Meszaros, *xUnit Test Patterns: Refactoring Test Code*, Chapter 23: 'Test Double Patterns'.",
      quiz: [
        {
          q: "What is a 'Fake' in the Gerard Meszaros test double taxonomy?",
          a: [
            "A test double that has a working implementation, but takes shortcuts that make it unsuitable for production (like an in-memory dictionary database)",
            "A fake screenshot of a website",
            "A bug in the test runner",
            "A stolen password"
          ],
          c: 0,
          why: "Fakes have real working logic (like an in-memory repository) that is much faster and simpler than production."
        },
        {
          q: "What is the danger of overusing Mocks (Mockist testing) in unit tests?",
          a: [
            "Tests become tightly coupled to internal implementation details (asserting exact method calls), making refactoring difficult even when behavior is unchanged",
            "Mocks use too much internet bandwidth",
            "Mocks can only be used in C++ code",
            "Mocks delete database tables"
          ],
          c: 0,
          why: "Excessive mocking couples tests to exact private method calls, causing tests to break during harmless refactorings."
        },
        {
          q: "What is a 'Dummy' object in test double terminology?",
          a: [
            "An object passed to satisfy a required parameter list that is never actually accessed or called during the test",
            "A developer who doesn't write unit tests",
            "A computer that has no monitor",
            "A broken test that fails"
          ],
          c: 0,
          why: "Dummies are placeholders used strictly to fill mandatory function arguments."
        },
        {
          q: "Why is Dependency Injection essential for utilizing test doubles?",
          a: [
            "Because if a class hardcodes 'new RealMailer()', there is no way for the test to substitute a FakeMailer without rewriting the code",
            "DI makes the test files smaller in size",
            "DI is required by compiler regulations",
            "DI automatically runs tests in parallel"
          ],
          c: 0,
          why: "Constructor injection provides the seam that lets test runners inject test doubles cleanly."
        }
      ]
    },
    {
      n: 8,
      id: "when-di-becomes-over-engineering",
      title: "When DI becomes over-engineering",
      topic: "Testability & Test Doubles",
      anim: "Syringe",
      lede: "Should you inject the string library? Discover when dependency injection crosses the line into over-engineering, and the pragmatic boundaries of simplicity.",
      winShort: "Identify when dependency injection is unnecessary and apply pragmatic YAGNI boundaries",
      missionLink: "Prevents architectural bloat and preserves simplicity in software codebases",
      sec1: {
        title: "The abuse of abstraction",
        content: `<p>Like any good design principle, Dependency Injection can be taken to absurd extremes. Some developers create an <code>IStringConcatenator</code> interface, an <code>IConsoleWriter</code>, and an <code>IMathAdder</code>, injecting basic language operations through a 500-line DI container!</p><p>This is architecture astronautics. The rule of thumb: <b>Stable, deterministic, pure mathematical operations should NOT be injected.</b> You inject volatile collaborators (databases, networks, time, randomness, external APIs). You do not inject basic data structures, math libraries, or pure utility functions.</p>`,
        keyIdea: "Inject volatile dependencies that touch I/O or external systems; never inject pure deterministic utilities."
      },
      predict: {
        q: "Should a string trimming helper function or math rounding utility be injected via dependency injection?",
        a: [
          "No, pure deterministic utility functions have zero side effects and should be called directly",
          "Yes, every single function in the application must be injected through a container",
          "Only in enterprise banking software",
          "Only if the function is written in Java"
        ],
        c: 0,
        why: "Pure functions have no I/O, state, or randomness; injecting them adds pure noise with zero benefit."
      },
      sec2: {
        title: "What to inject versus What to call directly",
        content: `<p>Categorize dependencies into volatile collaborators (inject) versus stable utilities (direct call).</p>`,
      },
      diagram: {
        boxes: [
          { title: "INJECT (Volatile Collaborators)", lines: ["Databases & ORM sessions", "HTTP clients & Payment Gateways", "System Clock & Random generators", "File system I/O"] },
          { title: "CALL DIRECTLY (Stable Utilities)", lines: ["Math functions (Math.round)", "Data structures (Arrays, Sets, Maps)", "Pure string parsing helpers", "Pydantic / Zod schemas"] }
        ]
      },
      sec3: {
        title: "Tracing over-engineered DI bloat",
        content: `<p>Trace how removing an unnecessary interface simplifies code without losing any testability.</p>`,
      },
      trace: {
        code: [
          "# Over-engineered: class Order(IPriceCalculator, IDateProvider, ICurrencyFormatter)...",
          "# 4 interfaces, 4 mock setups, 40 lines of boilerplate to test 2 lines of math!",
          "# Pragmatic: Order takes plain data; calculates subtotal directly using standard Python math",
          "# Result: 5 lines of code, tested in 0.0001s with zero mocks!"
        ],
        steps: [
          { line: 0, vars: { bloat: "excessive interfaces add cognitive overhead and wiring noise" } },
          { line: 2, vars: { pragmatic: "pure domain math requires zero mocks or interfaces" } },
          { line: 3, vars: { outcome: "simple, maintainable code adhering to YAGNI" } }
        ]
      },
      practiceIntro: "Test your memory of pragmatic DI boundaries.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "You should inject dependencies that are volatile or perform <0>/O.",
          "Deterministic math utilities should be called <1> without injection.",
          "The principle 'You Aren't Gonna Need It' is abbreviated as <2>."
        ],
        blanks: [
          { a: ["I", "I/O"], why: "I/O operations (network, disk) require injection." },
          { a: ["directly"], why: "Pure functions should be invoked directly." },
          { a: ["YAGNI"], why: "YAGNI guards against premature over-engineering." }
        ]
      },
      win: "You can apply dependency injection with pragmatic discipline, knowing exactly when to inject and when to keep code simple.",
      nextTasks: [
        "Audit your DI container to see if any pure utility functions are being unnecessarily injected.",
        "Remove an interface that has only one implementation and will never have another.",
        "Explain the difference between a volatile collaborator and a stable dependency to a colleague."
      ],
      primarySource: "Mark Seemann: *Volatile Dependencies* (blog.ploeh.dk/2012/08/31/ConcreteDependencies/).",
      quiz: [
        {
          q: "What defines a 'Volatile Dependency' that SHOULD be injected via dependency injection?",
          a: [
            "A dependency that requires external infrastructure (DB, network), contains non-deterministic behavior (time, random), or is in active parallel development",
            "A dependency that changes every 5 seconds",
            "A variable that is deleted after each function call",
            "A file stored on a USB drive"
          ],
          c: 0,
          why: "Volatile dependencies involve I/O, external state, or volatility that obstructs deterministic testing."
        },
        {
          q: "Why is it considered bad practice to create an interface for every single class (e.g. IUserService for UserService) when only one implementation exists?",
          a: [
            "It doubles the number of files with zero abstraction benefit (Header Interfaces smell); extract interfaces only when multiple implementations exist",
            "Interfaces slow down database queries",
            "Compilers reject interfaces with the letter I",
            "Interfaces delete comments"
          ],
          c: 0,
          why: "1:1 interfaces that mirror classes are speculative clutter; create abstractions when real variability exists."
        },
        {
          q: "What does the YAGNI principle stand for in software architecture?",
          a: [
            "You Aren't Gonna Need It",
            "You Always Get New Interfaces",
            "Your Architecture Generates No Income",
            "Yield All Global Network Inputs"
          ],
          c: 0,
          why: "YAGNI reminds developers not to add speculative complexity until actually needed."
        },
        {
          q: "How should system time (e.g. datetime.now()) be handled in testable software?",
          a: [
            "Inject a clock interface or pass the timestamp as a parameter, so tests can freeze or simulate time deterministically",
            "Hardcode datetime.now() inside every function",
            "Change the physical computer server clock during tests",
            "Never use time in software applications"
          ],
          c: 0,
          why: "System time is non-deterministic; parameterizing or injecting the clock makes temporal logic 100% testable."
        }
      ]
    }
  ]
};

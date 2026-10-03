"use strict";

module.exports = {
  id: "backend-architecture",
  title: "Backend Architecture",
  num: 38,
  emoji: "🏗️",
  desc: "Layers, boundaries, services and configuration — structuring a server so it survives change.",
  mission: `# Mission — Backend Architecture

## Why this course exists

Anyone can write a web server that responds to an HTTP request in 50 lines of code. But as features multiply, deadlines loom, and teams grow, undisciplined codebases collapse into tangled 'Big Balls of Mud': database queries inside templates, business calculations scattered across routing handlers, and zero boundaries between subsystems. This course teaches how to architect production-grade backend servers using layered architectures, hexagonal boundaries, dependency inversion, and clean domain services.

## What the learner can do at the end

- Architect backend applications using the standard 3-layer architecture (Presentation, Business Logic, Persistence).
- Decouple business logic from external frameworks using the Hexagonal Architecture (Ports and Adapters) pattern.
- Implement the Service Layer and Repository patterns to isolate domain operations from database drivers.
- Manage configuration, secrets, and environment dependencies following Twelve-Factor guidelines.
- Structure error handling, logging, and observability boundaries across service lifecycles.

## What this course is NOT

- Not a cloud infrastructure or Kubernetes orchestration course.
- Not a microservice deployment guide. It focuses on the architectural structure of backend server codebases.

## Success looks like

When building a new backend service or refactoring a legacy controller, the learner cleanly isolates HTTP controllers, business service rules, and repository queries into distinct decoupled layers in under fifteen minutes.
`,
  notes: `# Notes — Backend Architecture

## Decisions
- Group into four themes: Layered Architecture & Boundaries, Ports and Adapters (Hexagonal), Services & Repositories, and Configuration & Observability.
- Emphasize framework-independent software architecture principles.
`,
  resources: `# Resources — Backend Architecture

## Knowledge (primary sources)
- Robert C. Martin, *Clean Architecture: A Craftsman's Guide to Software Structure and Design* (Prentice Hall).
- Alistair Cockburn, *Hexagonal Architecture (Ports and Adapters)* (alistair.cockburn.us/hexagonal-architecture/).
- Martin Fowler, *Patterns of Enterprise Application Architecture*.

## Wisdom
- The primary goal of architecture is to minimize the human lifetime effort required to build and maintain the system.
`,
  cheatsheetSections: [
    {
      title: "The 3-Layer Architecture",
      label: "Classic layered responsibilities",
      code: `1. Presentation Layer (Controllers / Routers)
   - HTTP, validation, status codes, JSON serialization
2. Business Logic Layer (Services / Domain)
   - Core business rules, calculations, workflows
3. Persistence Layer (Repositories / Database)
   - SQL queries, ORM sessions, external API clients`,
      lessonN: 1,
      lessonSlug: "the-layered-architecture-pattern",
      lessonTitle: "The layered architecture pattern"
    },
    {
      title: "Ports & Adapters (Hexagonal)",
      label: "Dependency Inversion in practice",
      code: `// Domain defines the Port (Interface):
interface PaymentGateway {
  charge(amount: number, token: string): Promise<PaymentReceipt>;
}

// Infrastructure provides the Adapter:
class StripePaymentAdapter implements PaymentGateway {
  async charge(amount: number, token: string) {
    return await stripe.charges.create(...);
  }
}`,
      lessonN: 3,
      lessonSlug: "hexagonal-architecture-ports-and-adapters",
      lessonTitle: "Hexagonal architecture: ports and adapters"
    },
    {
      title: "Repository Pattern",
      label: "Collection-like persistence abstraction",
      code: `class UserRepository:
    def get_by_id(self, user_id: int) -> User: ...
    def save(self, user: User) -> None: ...
    def find_by_email(self, email: str) -> Optional[User]: ...

# Service consumes Repository without knowing if it is SQL, Redis, or Mock!`,
      lessonN: 5,
      lessonSlug: "the-repository-pattern",
      lessonTitle: "The repository pattern"
    },
    {
      title: "Configuration & Boundaries",
      label: "Twelve-Factor settings and logging",
      code: `from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    database_url: str
    jwt_secret: str
    environment: str = "development"

settings = Settings() # loads from environment variables with validation`,
      lessonN: 7,
      lessonSlug: "configuration-boundaries-and-twelve-factor-apps",
      lessonTitle: "Configuration boundaries and Twelve-Factor apps"
    }
  ],
  glossaryGroups: [
    {
      id: "layers-boundaries",
      title: "Layers & Architectural Boundaries",
      terms: [
        { term: "Layered architecture", def: "An architectural pattern organizing code into horizontal layers where each layer has a specific responsibility.", lesson: 1, tags: ["architecture"] },
        { term: "Separation of concerns", def: "A design principle separating a program into distinct sections where each addresses a separate concern.", lesson: 1, tags: ["principles"] },
        { term: "Dependency rule", def: "The rule stating that source code dependencies must only point inward toward higher-level business policies.", lesson: 2, tags: ["clean-arch"] },
        { term: "Domain model", def: "The representation of real-world business concepts, rules, and logic isolated from delivery frameworks.", lesson: 2, tags: ["domain"] }
      ]
    },
    {
      id: "hexagonal-ports",
      title: "Hexagonal Architecture & Ports",
      terms: [
        { term: "Hexagonal Architecture", def: "An architecture (Ports and Adapters) isolating application core logic from external tools and delivery mechanisms.", lesson: 3, tags: ["hexagonal"] },
        { term: "Port", def: "An interface defined by the application core specifying how it interacts with external components.", lesson: 3, tags: ["hexagonal"] },
        { term: "Adapter", def: "A concrete implementation translating between an external technology (like HTTP or SQL) and an application port.", lesson: 3, tags: ["hexagonal"] },
        { term: "Dependency Inversion", def: "A design principle stating high-level modules should not depend on low-level modules; both depend on abstractions.", lesson: 4, tags: ["solid"] }
      ]
    },
    {
      id: "services-repositories",
      title: "Services & Repositories",
      terms: [
        { term: "Service Layer", def: "A boundary layer establishing available operations and coordinating application business logic.", lesson: 5, tags: ["services"] },
        { term: "Repository pattern", def: "An abstraction layer mediating between domain logic and data storage, mimicking an in-memory collection.", lesson: 5, tags: ["repositories"] },
        { term: "DTO", def: "Data Transfer Object: a simple object carrying data between processes or layers with zero business logic.", lesson: 6, tags: ["dto"] },
        { term: "Domain Service", def: "A service encapsulating business logic that naturally involves multiple domain entities.", lesson: 6, tags: ["services"] }
      ]
    },
    {
      id: "config-observability",
      title: "Configuration & Observability",
      terms: [
        { term: "Structured logging", def: "Emitting log messages as machine-readable JSON key-value pairs rather than unstructured plain text lines.", lesson: 8, tags: ["observability"] },
        { term: "Health check", def: "A dedicated endpoint (/healthz) used by load balancers and orchestrators to verify service readiness.", lesson: 8, tags: ["operations"] },
        { term: "Graceful shutdown", def: "The orderly process of stopping a server: refusing new requests, completing in-flight requests, and closing pools.", lesson: 8, tags: ["operations"] },
        { term: "Circuit breaker", def: "A stability pattern halting calls to a failing remote service to prevent cascading outages.", lesson: 7, tags: ["resilience"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "the-layered-architecture-pattern",
      title: "The layered architecture pattern",
      topic: "Layers & Architectural Boundaries",
      anim: "Layers",
      lede: "Controllers should not write SQL, and database models should not format HTML. Master the classic 3-tier layered architecture: Presentation, Business, and Persistence.",
      winShort: "Organize backend codebases into distinct Presentation, Service, and Persistence layers",
      missionLink: "The foundational architectural pattern used by the vast majority of enterprise backends",
      sec1: {
        title: "The classic three-layer pattern",
        content: `<p>The most widely adopted backend architecture divides software into three horizontal tiers: <b>1. Presentation Layer</b> (HTTP routing, JSON parsing, status codes), <b>2. Business Logic Layer</b> (pure domain rules, calculations, workflows), and <b>3. Persistence Layer</b> (database access, SQL queries, cache clients).</p><p>The golden rule of layered architecture: <b>Dependencies flow strictly downward</b>. The Presentation layer calls the Business layer; the Business layer calls the Persistence layer. The Business layer never knows about HTTP, and the Persistence layer never knows about web controllers.</p>`,
        keyIdea: "Dependencies flow downward: Presentation calls Business Services; Business Services call Persistence."
      },
      predict: {
        q: "What architectural violation occurs if an HTTP controller writes an SQL query directly inside its route handler?",
        a: [
          "It tightly couples the transport layer to the database, preventing reuse, complicating testing, and violating layer boundaries",
          "The query will fail to execute in modern web browsers",
          "The database will automatically delete the table",
          "The computer CPU will catch on fire"
        ],
        c: 0,
        why: "Mixing SQL into HTTP controllers prevents testing business logic without running a full web server."
      },
      sec2: {
        title: "The three horizontal tiers",
        content: `<p>Understand the strict separation of responsibilities across the three layers.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Presentation Layer", lines: ["REST controllers, GraphQL resolvers", "parse HTTP request, return 200/400"] },
          { title: "Business Logic Layer", lines: ["OrderService, BillingCalculator", "pure business rules; zero HTTP knowledge!"] },
          { title: "Persistence Layer", lines: ["UserRepository, OrderRepository", "SQL queries, ORM sessions, database connections"] }
        ]
      },
      sec3: {
        title: "Tracing a checkout request through the layers",
        content: `<p>Trace how a checkout request moves downward through the three layers to complete an order.</p>`,
      },
      trace: {
        code: [
          "# 1. Controller receives POST /checkout with JSON body",
          "# 2. Controller calls OrderService.place_order(user_id, cart_items)",
          "# 3. OrderService verifies discount rules and tax calculations",
          "# 4. OrderService calls OrderRepository.save(order)",
          "# 5. Controller receives saved Order and returns HTTP 201 Created"
        ],
        steps: [
          { line: 0, vars: { presentation: "parses HTTP JSON and extracts parameters" } },
          { line: 1, vars: { business_logic: "orchestrates business rules independently of HTTP" } },
          { line: 3, vars: { persistence: "executes SQL insert and commits transaction" } },
          { line: 4, vars: { response: "HTTP response constructed with 201 status and JSON payload" } }
        ]
      },
      practiceIntro: "Test your memory of layered architecture.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The layer handling HTTP routing and status codes is the <0> layer.",
          "The layer containing business calculation logic is the <1> layer.",
          "The layer responsible for SQL queries and data storage is the <2> layer."
        ],
        blanks: [
          { a: ["presentation", "controller"], why: "Presentation handles transport protocols." },
          { a: ["business", "service"], why: "Business layer holds domain rules." },
          { a: ["persistence", "data"], why: "Persistence layer interfaces with storage." }
        ]
      },
      win: "You can structure backend servers into clean horizontal layers with strict separation of concerns.",
      nextTasks: [
        "Audit a route handler in your project and extract any embedded SQL queries into a repository.",
        "Ensure your business logic functions take domain types rather than raw HTTP request objects.",
        "Write a unit test for your business service without spinning up an HTTP web server."
      ],
      primarySource: "Martin Fowler, *Patterns of Enterprise Application Architecture*, Chapter 2: 'Separation of Concerns and Layering'.",
      quiz: [
        {
          q: "Why shouldn't business logic services accept framework HTTP request objects (like Request or HttpRequest)?",
          a: [
            "It couples business logic to the web framework, preventing the same logic from being called via CLI, background workers, or unit tests",
            "HTTP request objects are deleted by the operating system after five seconds",
            "Business services cannot parse Python objects",
            "It causes database tables to be dropped"
          ],
          c: 0,
          why: "Passing domain primitives or DTOs allows business logic to be invoked by any transport (CLI, workers, tests)."
        },
        {
          q: "What is a 'sinkhole anti-pattern' in layered architectures?",
          a: [
            "When requests pass through multiple layers without performing any logic, acting as pure pass-through boilerplates",
            "When a database runs out of disk storage space",
            "When all network cables are unplugged",
            "When an SQL query contains a syntax error"
          ],
          c: 0,
          why: "Sinkholes occur when simple CRUD passes through layers that add zero value, adding unnecessary indirection."
        },
        {
          q: "Which layer in a 3-tier architecture owns the database transaction boundary?",
          a: [
            "The Business/Service layer, because a business transaction often spans multiple repository calls",
            "The Presentation controller layer",
            "The database client driver",
            "The operating system kernel"
          ],
          c: 0,
          why: "Business operations (like checkout) dictate atomic boundaries across multiple entity updates."
        },
        {
          q: "What is the primary benefit of the Layered Architecture pattern?",
          a: [
            "High maintainability: changes to database schemas or web frameworks are isolated to a single layer",
            "It eliminates the need for software testing",
            "It speeds up internet connection bandwidth",
            "It converts Python backends into C++ binaries automatically"
          ],
          c: 0,
          why: "Decoupled layers isolate changes: switching from Flask to FastAPI leaves persistence untouched."
        }
      ]
    },
    {
      n: 2,
      id: "the-dependency-rule-and-clean-architecture",
      title: "The Dependency Rule and Clean Architecture",
      topic: "Layers & Architectural Boundaries",
      anim: "Layers",
      lede: "High-level policy should not depend on low-level details. Master Robert C. Martin's Dependency Rule: why dependencies must strictly point inward toward business entities.",
      winShort: "Apply the Dependency Rule to protect business entities from database and UI framework changes",
      missionLink: "The core design principle of Clean Architecture and Onion Architecture",
      sec1: {
        title: "The inverted dependency flow",
        content: `<p>In traditional layered architectures, business logic depends on the database: if you change your ORM, your business services break. Robert C. Martin's <b>Clean Architecture</b> inverts this.</p><p>At the center of Clean Architecture sit <b>Entities and Use Cases</b>. At the outer edge sit <b>Frameworks, Web Servers, and Databases</b>. The central <b>Dependency Rule</b> states: <i>Source code dependencies must point strictly INWARD. Nothing in an inner circle can know anything about an outer circle.</i></p>`,
        keyIdea: "Source code dependencies must point inward: business rules never depend on databases or frameworks."
      },
      predict: {
        q: "In Clean Architecture, can a core business entity import the SQLAlchemy or Express library?",
        a: [
          "No, core business entities must have zero dependencies on external frameworks or databases",
          "Yes, entities must import all database drivers",
          "Only in development environments",
          "Yes, if the entity is written in TypeScript"
        ],
        c: 0,
        why: "Inner concentric circles must remain completely ignorant of outer delivery and database mechanisms."
      },
      sec2: {
        title: "The concentric circles of Clean Architecture",
        content: `<p>Observe how business logic is protected from outer technology churn.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Inner: Entities & Use Cases", lines: ["pure business policies", "zero external dependencies", "independent of UI & DB!"] },
          { title: "Middle: Interface Adapters", lines: ["controllers, presenters, gateways", "converts data between formats"] },
          { title: "Outer: Frameworks & Drivers", lines: ["FastAPI, PostgreSQL, Redis, Web", "details that change frequently"] }
        ]
      },
      sec3: {
        title: "Tracing the inward dependency path",
        content: `<p>Trace how dependency inversion allows high-level use cases to command repositories via interfaces.</p>`,
      },
      trace: {
        code: [
          "# Core Use Case (Inward): defines interface UserRepository",
          "class RegisterUserUseCase:",
          "    def __init__(self, repo: UserRepository): self.repo = repo",
          "    def execute(self, email): user = User(email); self.repo.save(user)",
          "# Outer Infrastructure: implements PostgresUserRepository",
          "# The database depends on the use case's interface, NOT vice-versa!"
        ],
        steps: [
          { line: 0, vars: { core_policy: "use case defines its own storage interface" } },
          { line: 2, vars: { decoupling: "receives repository via dependency injection" } },
          { line: 4, vars: { dependency_inversion: "Postgres adapter implements interface pointing INWARD" } }
        ]
      },
      practiceIntro: "Test your memory of Clean Architecture principles.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The rule that code dependencies must only point inward is the <0> Rule.",
          "The author who formalized Clean Architecture is Robert C. <1>.",
          "In Clean Architecture, web frameworks and databases are considered interchangeable <2>."
        ],
        blanks: [
          { a: ["Dependency"], why: "The Dependency Rule governs Clean Architecture." },
          { a: ["Martin"], why: "Uncle Bob (Robert C. Martin) authored Clean Architecture." },
          { a: ["details", "plugins"], why: "Frameworks and databases are low-level details." }
        ]
      },
      win: "You can design systems where business logic remains pristine and testable, completely decoupled from database libraries.",
      nextTasks: [
        "Audit a business entity to ensure it contains zero ORM or framework imports.",
        "Define an interface for a database repository inside your domain package.",
        "Implement an in-memory mock repository to run fast unit tests without a database."
      ],
      primarySource: "Robert C. Martin, *Clean Architecture: A Craftsman's Guide to Software Structure and Design* (Prentice Hall, 2017).",
      quiz: [
        {
          q: "What is the primary mandate of the Dependency Rule in Clean Architecture?",
          a: [
            "Source code dependencies must point strictly inward toward higher-level business policies",
            "Every function must have at least five dependencies",
            "Databases must be installed before writing code",
            "All dependencies must be downloaded from npm"
          ],
          c: 0,
          why: "Inner layers know nothing about outer layers; dependencies point inward toward business rules."
        },
        {
          q: "Why are frameworks and databases classified as 'details' in Clean Architecture?",
          a: [
            "Because technology choices (Postgres vs Mongo, FastAPI vs Django) should be swappable without rewriting business rules",
            "Because databases do not contain important information",
            "Because frameworks are illegal in enterprise software",
            "Because databases are only used for backups"
          ],
          c: 0,
          why: "A good architecture defers technology decisions and treats delivery mechanisms as plugins."
        },
        {
          q: "How does the Dependency Rule affect unit testing?",
          a: [
            "Business use cases can be unit-tested in milliseconds in memory by passing mock repositories without running a real database",
            "Unit testing is completely eliminated",
            "Tests must run on production servers",
            "Tests can only be executed once per week"
          ],
          c: 0,
          why: "Decoupling business logic from databases allows fast, isolated, deterministic unit testing."
        },
        {
          q: "What lives in the innermost core circle of Clean Architecture?",
          a: [
            "Entities (Enterprise Business Rules) and Use Cases (Application Business Rules)",
            "The PostgreSQL database driver",
            "The HTTP router and controller functions",
            "The CSS stylesheet files"
          ],
          c: 0,
          why: "Entities and Use Cases embody pure business policies with zero external framework dependencies."
        }
      ]
    },
    {
      n: 3,
      id: "hexagonal-architecture-ports-and-adapters",
      title: "Hexagonal architecture: ports and adapters",
      topic: "Hexagonal Architecture & Ports",
      anim: "Layers",
      lede: "Treat your application as an isolated hexagon. Discover Alistair Cockburn's Ports and Adapters architecture: how to plug in databases, HTTP APIs, and CLI tools with zero coupling.",
      winShort: "Implement Ports and Adapters to decouple core application logic from external technologies",
      missionLink: "The practical implementation pattern for Hexagonal and Clean Architecture",
      sec1: {
        title: "The application in the center",
        content: `<p>Alistair Cockburn created <b>Hexagonal Architecture (Ports and Adapters)</b> with a clear vision: an application should be equally driven by users, automated tests, or batch scripts, and developed and tested in isolation from its runtime devices and databases.</p><p>The application core sits inside a hexagon. To talk to the outside world, the core defines <b>Ports</b> (interfaces). External technologies connect through <b>Adapters</b> that translate between external drivers (HTTP, SQL, Stripe) and the core ports.</p>`,
        keyIdea: "The core defines Ports (interfaces); external technologies plug in via Adapters."
      },
      predict: {
        q: "In Hexagonal Architecture, what is a 'Port'?",
        a: [
          "An interface or contract defined by the application core that specifies an interaction boundary",
          "A physical USB port on the back of the server",
          "A TCP network port number like 8080",
          "A computer monitor connection cable"
        ],
        c: 0,
        why: "A port is a protocol/interface defining what the application expects from the outside world."
      },
      sec2: {
        title: "Driving versus Driven ports",
        content: `<p>Understand the two sides of the hexagon: Primary (Driving) and Secondary (Driven).</p>`,
      },
      diagram: {
        boxes: [
          { title: "Driving Adapters (Primary)", lines: ["HTTP Controller, CLI tool, Cron", "drives the application core inward"] },
          { title: "Application Core (Hexagon)", lines: ["Domain Models & Use Cases", "defines Ports (interfaces)"] },
          { title: "Driven Adapters (Secondary)", lines: ["PostgreSQL Adapter, Stripe Client", "driven by the core via outgoing ports"] }
        ]
      },
      sec3: {
        title: "Tracing port-and-adapter execution",
        content: `<p>Trace how a notifications use case sends an SMS through an adapter without knowing Twilio exists.</p>`,
      },
      trace: {
        code: [
          "# 1. Core defines Port: class NotificationSender(Protocol): def send(self, msg, to)"
          + "\n# 2. Infrastructure implements Adapter: class TwilioSmsAdapter(NotificationSender)"
          + "\n# 3. Core Use Case calls sender.send('Your order shipped', phone)"
          + "\n# Result: Swapping Twilio for AWS SNS requires editing ZERO lines of core logic!"
        ],
        steps: [
          { line: 0, vars: { port: "NotificationSender interface defined in core" } },
          { line: 1, vars: { adapter: "TwilioSmsAdapter implements port using Twilio SDK" } },
          { line: 2, vars: { execution: "core invokes interface without importing Twilio" } },
          { line: 3, vars: { swappability: "external third-party provider is completely swappable" } }
        ]
      },
      practiceIntro: "Test your memory of Hexagonal Architecture.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Hexagonal Architecture is also known as Ports and <0>.",
          "The interface defined by the core is a <1>.",
          "The concrete class translating external tech to a port is an <2>."
        ],
        blanks: [
          { a: ["Adapters"], why: "Ports and Adapters is the formal title." },
          { a: ["Port"], why: "Ports are internal interface specifications." },
          { a: ["Adapter"], why: "Adapters bridge external technologies to ports." }
        ]
      },
      win: "You can implement Hexagonal Architecture to make databases, messaging queues, and external APIs completely swappable plugins.",
      nextTasks: [
        "Define an email sender Port (interface) in your core domain package.",
        "Implement two Adapters: one using a real SMTP service and one printing to console for testing.",
        "Inject the console adapter during local development."
      ],
      primarySource: "Alistair Cockburn: *Hexagonal Architecture (Ports and Adapters)* (alistair.cockburn.us).",
      quiz: [
        {
          q: "What is the difference between a Driving (Primary) Adapter and a Driven (Secondary) Adapter?",
          a: [
            "Driving adapters initiate actions on the core (e.g. HTTP controller); Driven adapters are invoked by the core (e.g. database adapter)",
            "Driving adapters are written in C; Driven adapters are written in Python",
            "Driving adapters run on cars; Driven adapters run on servers",
            "There is no difference between them"
          ],
          c: 0,
          why: "Driving adapters trigger core use cases; driven adapters respond to core service calls."
        },
        {
          q: "Who defines the 'Port' interface in Hexagonal Architecture?",
          a: [
            "The application core defines the port, stating what contract it needs satisfied",
            "The third-party external vendor (like Stripe or AWS)",
            "The database software manufacturer",
            "The web browser"
          ],
          c: 0,
          why: "The core owns the port interface, forcing external adapters to conform to its domain rules."
        },
        {
          q: "How does Hexagonal Architecture facilitate automated testing?",
          a: [
            "You can plug in fake in-memory adapters for databases and external APIs, running tests in milliseconds without network I/O",
            "It automatically generates test assertions using AI",
            "It eliminates the need for unit testing",
            "Tests run without using CPU cycles"
          ],
          c: 0,
          why: "Swapping driven adapters with in-memory test doubles enables blazing-fast unit tests."
        },
        {
          q: "Why is a hexagon used to represent this architecture?",
          a: [
            "To visually emphasize that multiple ports and adapters can plug into the application across different sides",
            "Because computer memory is stored in hexagonal shapes",
            "Because Alistair Cockburn liked honeycombs",
            "Because 6 is a lucky number in computer science"
          ],
          c: 0,
          why: "The hexagon visually demonstrates multiple distinct interfaces (ports) connecting around a central core."
        }
      ]
    },
    {
      n: 4,
      id: "dependency-inversion-principle-solid",
      title: "The Dependency Inversion Principle (SOLID)",
      topic: "Hexagonal Architecture & Ports",
      anim: "Layers",
      lede: "High-level modules should not depend on low-level modules; both should depend on abstractions. Master the 'D' in SOLID and the mechanics of inversion.",
      winShort: "Invert code dependencies using interfaces and abstract base protocols",
      missionLink: "The object-oriented design principle powering Hexagonal and Clean architectures",
      sec1: {
        title: "The 'D' in SOLID",
        content: `<p>In naive software design, high-level business logic directly imports low-level details: <code>PaymentService</code> imports <code>StripeClient</code>. This creates direct coupling: if Stripe changes their SDK, your core business logic breaks.</p><p>The <b>Dependency Inversion Principle (DIP)</b> inverts this dependency graph using an <b>Abstraction (Interface)</b>: <code>PaymentService</code> defines and depends on a <code>PaymentGateway</code> interface. <code>StripeClient</code> implements that interface. Now, <b>both high-level and low-level modules depend on the abstraction</b>!</p>`,
        keyIdea: "High-level policy and low-level details both depend on abstractions; abstractions never depend on details."
      },
      predict: {
        q: "What direction does the source code dependency arrow point in a system with Dependency Inversion?",
        a: [
          "From the low-level infrastructure detail toward the high-level domain interface",
          "From the high-level business policy directly into the database driver",
          "Randomly in both directions simultaneously",
          "Dependencies do not exist in object-oriented code"
        ],
        c: 0,
        why: "Inversion points the dependency arrow from the detail inward toward the domain interface."
      },
      sec2: {
        title: "Direct coupling versus Inverted coupling",
        content: `<p>Contrast brittle direct coupling with the resilience of inverted dependency contracts.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Direct Coupling (Brittle)", lines: ["OrderService -> PostgresDatabase", "high-level depends directly on low-level!"] },
          { title: "Dependency Inversion (Resilient)", lines: ["OrderService -> OrderRepository (Interface)", "PostgresAdapter -> OrderRepository (Interface)", "both depend on the domain abstraction!"] }
        ]
      },
      sec3: {
        title: "Tracing dependency inversion in Python",
        content: `<p>Trace how a Python Protocol interface decouples a service from an SMS provider.</p>`,
      },
      trace: {
        code: [
          "from typing import Protocol",
          "class MessageSender(Protocol):",
          "    def send_message(self, text: str, recipient: str) -> bool: ...",
          "# High-level service depends solely on MessageSender protocol:",
          "class AlertService:",
          "    def __init__(self, sender: MessageSender): self.sender = sender",
          "    def alert_admin(self, err): self.sender.send_message(f'Error: {err}', 'admin@co.com')"
        ],
        steps: [
          { line: 1, vars: { abstraction: "MessageSender protocol defines contract" } },
          { line: 5, vars: { constructor: "AlertService receives sender conforming to protocol" } },
          { line: 6, vars: { invocation: "invokes protocol method with zero vendor SDK imports" } }
        ]
      },
      practiceIntro: "Test your memory of Dependency Inversion.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The 'D' in SOLID stands for Dependency <0>.",
          "High-level policies and low-level details should both depend on <1>.",
          "In Python, static structural interfaces are defined using typing.<2>."
        ],
        blanks: [
          { a: ["Inversion"], why: "Dependency Inversion inverts coupling direction." },
          { a: ["abstractions", "interfaces"], why: "Abstractions decouple components." },
          { a: ["Protocol"], why: "typing.Protocol enables structural duck-typed interfaces." }
        ]
      },
      win: "You can apply the Dependency Inversion Principle to eliminate direct vendor and database coupling from business logic.",
      nextTasks: [
        "Identify a service in your app that directly instantiates a third-party SDK and invert it with an interface.",
        "Define an abstract Protocol or Interface for an external payment gateway.",
        "Pass a test double implementing the interface into your service during testing."
      ],
      primarySource: "Robert C. Martin, *The Dependency Inversion Principle* (C++ Report, 1996).",
      quiz: [
        {
          q: "What is the primary mandate of the Dependency Inversion Principle?",
          a: [
            "High-level modules should not depend on low-level modules; both should depend on abstractions",
            "Every class must inherit from a parent class",
            "Functions must be inverted so the return statement is at the top",
            "Databases must be inverted using reverse indexes"
          ],
          c: 0,
          why: "DIP ensures core business policies are decoupled from volatile implementation details."
        },
        {
          q: "What is the difference between Dependency Inversion (DIP) and Dependency Injection (DI)?",
          a: [
            "DIP is the architectural principle (rely on abstractions); DI is the implementation technique (passing dependencies in from outside)",
            "DIP is for Python; DI is for Java",
            "DI is an architecture; DIP is a compiler flag",
            "There is no difference between them"
          ],
          c: 0,
          why: "DIP is the goal (inverted relationships); DI is the mechanism to supply those dependencies."
        },
        {
          q: "Why shouldn't domain abstractions depend on implementation details?",
          a: [
            "Because domain rules are stable business policies, while implementation details (libraries, vendors) change frequently",
            "Because abstractions are written in machine code",
            "Because details cannot be stored in computer memory",
            "It violates open-source software licenses"
          ],
          c: 0,
          why: "Stable business rules should dictate terms to volatile external tools, never vice-versa."
        },
        {
          q: "What happens if a third-party API changes its SDK methods in a system that follows Dependency Inversion?",
          a: [
            "Only the single outer Adapter class that wraps the vendor SDK needs updating; core business services are 100% unaffected",
            "The entire backend codebase must be rewritten from scratch",
            "The database table schemas must be dropped",
            "The computer operating system must be reinstalled"
          ],
          c: 0,
          why: "The adapter absorbs the vendor change, shielding the core domain from ripple effects."
        }
      ]
    },
    {
      n: 5,
      id: "the-repository-pattern",
      title: "The repository pattern",
      topic: "Services & Repositories",
      anim: "Layers",
      lede: "Isolate your database behind a clean in-memory collection facade. Discover the Repository pattern: why domain logic should never write SQL, and how to build testable repositories.",
      winShort: "Implement the Repository pattern to decouple domain services from database technologies",
      missionLink: "The standard persistence abstraction layer in enterprise backend systems",
      sec1: {
        title: "A collection-like interface to data",
        content: `<p>If every service writes raw SQL queries, changing database columns or optimizing queries requires editing dozens of business files. The <b>Repository Pattern</b> encapsulates data access behind a collection-like facade.</p><p>To the business service, the repository looks like a simple in-memory list: <code>repo.get_by_id(42)</code>, <code>repo.save(user)</code>, <code>repo.find_active()</code>. All SQL queries, ORM sessions, and database drivers are completely encapsulated inside the repository implementation.</p>`,
        keyIdea: "A repository presents a collection-like interface to the domain, hiding all database mechanics."
      },
      predict: {
        q: "What should a Repository method return to a calling domain service?",
        a: [
          "Pure domain entity objects or clean DTOs",
          "Raw database cursor connection handles",
          "HTTP 200 status code response objects",
          "HTML markup strings"
        ],
        c: 0,
        why: "Repositories translate raw database records into clean domain entities for business logic."
      },
      sec2: {
        title: "Repository abstraction architecture",
        content: `<p>Observe how the domain service interacts with a pure interface rather than a database.</p>`,
      },
      diagram: {
        boxes: [
          { title: "OrderService", lines: ["calls: order_repo.save(order)", "zero SQL or ORM knowledge!"] },
          { title: "OrderRepository (Interface)", lines: ["get_by_id(id) -> Order", "save(order) -> void", "find_by_customer(id) -> list[Order]"] },
          { title: "SqlAlchemyOrderRepository", lines: ["implements interface", "executes session.add() and SQL joins"] }
        ]
      },
      sec3: {
        title: "Tracing the swap to a MockRepository in testing",
        content: `<p>Trace how the repository pattern allows running unit tests in 2 milliseconds with an in-memory dictionary.</p>`,
      },
      trace: {
        code: [
          "class InMemoryUserRepo:",
          "    def __init__(self): self.users = {}",
          "    def get_by_id(self, uid): return self.users.get(uid)",
          "    def save(self, user): self.users[user.id] = user",
          "# In test: inject InMemoryUserRepo -> test runs in 2ms without Docker or SQL database!"
        ],
        steps: [
          { line: 0, vars: { test_double: "InMemoryUserRepo conforms to UserRepository interface" } },
          { line: 3, vars: { storage: "uses plain Python dictionary in memory" } },
          { line: 4, vars: { outcome: "service tested thoroughly with zero external infrastructure dependencies" } }
        ]
      },
      practiceIntro: "Test your memory of the Repository pattern.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The pattern mimicking an in-memory collection of entities is the <0> pattern.",
          "Repositories return domain <1> rather than raw SQL rows.",
          "For testing without a database, you can substitute an in-<2> repository."
        ],
        blanks: [
          { a: ["Repository"], why: "The Repository pattern abstracts data access." },
          { a: ["entities", "objects"], why: "Repositories map database data to domain entities." },
          { a: ["memory"], why: "In-memory repositories enable fast unit tests." }
        ]
      },
      win: "You can implement clean Repository interfaces that encapsulate all data access and enable blazing-fast testing.",
      nextTasks: [
        "Create an abstract UserRepository interface with get_by_id and save methods.",
        "Implement an SQLAlchemy or Prisma repository that fulfills that interface.",
        "Write a unit test for your service using a dictionary-backed in-memory repository."
      ],
      primarySource: "Martin Fowler, *Patterns of Enterprise Application Architecture*, Chapter 14: 'Repository'.",
      quiz: [
        {
          q: "What is the primary benefit of the Repository pattern?",
          a: [
            "It isolates domain logic from data persistence details, centralizing queries and making services easily testable with mock repositories",
            "It eliminates the need for database tables",
            "It automatically optimizes database hardware",
            "It makes queries run without needing network cables"
          ],
          c: 0,
          why: "Repositories centralize query logic and decouple business services from database drivers."
        },
        {
          q: "Should a Repository method contain business validation rules (like calculating discounts)?",
          a: [
            "No, repositories are strictly responsible for data retrieval and persistence; business calculations belong in domain services",
            "Yes, all business rules should live in repositories",
            "Only if the calculation involves numbers",
            "Only in microservices"
          ],
          c: 0,
          why: "Repositories handle data access; business logic belongs in domain entities or services."
        },
        {
          q: "What is the difference between a Repository and a Data Access Object (DAO)?",
          a: [
            "A DAO is table-centric (CRUD on database rows); a Repository is domain-centric (collection of aggregate domain entities)",
            "A DAO is for Python; a Repository is for Java",
            "A DAO runs on disk; a Repository runs in the browser",
            "There is no difference between them"
          ],
          c: 0,
          why: "DAOs map closely to database tables; repositories manage cohesive domain entity aggregates."
        },
        {
          q: "How does the Repository pattern protect code from database migrations or ORM upgrades?",
          a: [
            "Upgrading the ORM or switching databases only requires editing the repository implementation, leaving all business services 100% untouched",
            "It automatically translates SQL into Python code",
            "It backs up the database to Google Drive",
            "It makes database migrations unnecessary"
          ],
          c: 0,
          why: "Because services depend only on the repository interface, internal implementation changes do not propagate."
        }
      ]
    },
    {
      n: 6,
      id: "domain-services-application-services-and-dtos",
      title: "Domain services, application services, and DTOs",
      topic: "Services & Repositories",
      anim: "Layers",
      lede: "Where does the code go? Disentangle your services: Application Services for orchestration, Domain Services for business logic, and DTOs for safe data transfer.",
      winShort: "Differentiate between Application Services, Domain Services, and Data Transfer Objects",
      missionLink: "Prevents bloated god-services by establishing clear service boundaries",
      sec1: {
        title: "Disentangling the Service Layer",
        content: `<p>In many systems, everything is dumped into a massive <code>UserService</code> class that handles password hashing, sending emails, running SQL queries, and calculating billing. This creates bloated, untestable god-objects.</p><p>Domain-Driven Design (DDD) divides services into two distinct roles: <b>Application Services</b> (thin coordinators that orchestrate security, transactions, and notification dispatch) and <b>Domain Services</b> (pure business logic, like interest rate calculations, with zero I/O or email knowledge). <b>DTOs (Data Transfer Objects)</b> carry data safely across boundaries.</p>`,
        keyIdea: "Application services orchestrate workflows and I/O; Domain services execute pure business calculations."
      },
      predict: {
        q: "Where does sending a welcome email belong: in an Application Service or a Domain Service?",
        a: [
          "In an Application Service, because sending emails is an infrastructure I/O coordination task, not pure business domain policy",
          "In a Domain Service",
          "Directly inside the database table schema",
          "Inside the database trigger"
        ],
        c: 0,
        why: "Application services orchestrate external side effects like emails, notifications, and transactions."
      },
      sec2: {
        title: "The Service Layer hierarchy",
        content: `<p>Observe how Application Services coordinate Domain Services and Repositories.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Application Service (Orchestrator)", lines: ["RegisterUserUseCase", "manages transaction boundary", "dispatches welcome email via notification service"] },
          { title: "Domain Service (Pure Logic)", lines: ["TaxCalculationService", "enforces business calculations", "pure domain rules; zero I/O!"] },
          { title: "DTO (Data Transfer Object)", lines: ["UserRegistrationDTO", "clean data carrier across boundary", "no methods, no business logic"] }
        ]
      },
      sec3: {
        title: "Tracing DTO transformation across layers",
        content: `<p>Trace how incoming JSON is validated into a DTO before being passed to an Application Service.</p>`,
      },
      trace: {
        code: [
          "# Controller parses HTTP JSON into typed DTO:",
          "dto = UserRegistrationDTO(email=req.json['email'], plan=req.json['plan'])",
          "# Controller passes DTO to Application Service:",
          "user = register_user_service.execute(dto)",
          "# Application Service coordinates: validates domain -> saves repo -> triggers email"
        ],
        steps: [
          { line: 0, vars: { boundary: "controller validates schema into typed DTO" } },
          { line: 2, vars: { handoff: "Application Service invoked with DTO" } },
          { line: 4, vars: { orchestration: "service coordinates domain entity, repository, and email adapter" } }
        ]
      },
      practiceIntro: "Test your memory of service layer terminology.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The service that orchestrates transactions and external side effects is an <0> service.",
          "The service containing pure business rule calculations is a <1> service.",
          "An object that carries data across boundaries with no business logic is a <2>."
        ],
        blanks: [
          { a: ["application"], why: "Application services coordinate workflows." },
          { a: ["domain"], why: "Domain services enforce business logic." },
          { a: ["DTO"], why: "DTO stands for Data Transfer Object." }
        ]
      },
      win: "You can structure backend business logic cleanly into Application Services, Domain Services, and validated DTOs.",
      nextTasks: [
        "Refactor an oversized service class by separating orchestration (email, DB) from pure calculation logic.",
        "Create a typed DTO (using Pydantic or TypeScript interface) for incoming user registration data.",
        "Ensure your Domain Services have zero dependencies on notification or email libraries."
      ],
      primarySource: "Eric Evans, *Domain-Driven Design*, Chapter 5: 'A Model Expressed in Software — Services'.",
      quiz: [
        {
          q: "What is a Data Transfer Object (DTO)?",
          a: [
            "A plain object that carries data between processes or layers with no business logic of its own",
            "A database table stored on a flash drive",
            "An encryption algorithm used for passwords",
            "A file containing unit tests"
          ],
          c: 0,
          why: "DTOs transfer serialized data across architectural boundaries cleanly without leaking domain logic."
        },
        {
          q: "What is the primary role of a Domain Service in Domain-Driven Design?",
          a: [
            "To encapsulate domain business operations and calculations that naturally involve multiple entities and don't belong on a single entity",
            "To connect directly to the MySQL database server",
            "To parse incoming HTTP JSON headers",
            "To format CSS layout on the frontend"
          ],
          c: 0,
          why: "Domain services house business rules that do not belong to a single entity (like cross-account transfers)."
        },
        {
          q: "Why should Domain Services avoid making direct network calls (like sending emails or charging credit cards)?",
          a: [
            "Keeping domain services free of side effects keeps business logic pure, fast, deterministic, and easy to unit test",
            "Network calls are illegal in Python domain classes",
            "Domain services run inside the computer BIOS",
            "It causes database tables to corrupt"
          ],
          c: 0,
          why: "Pure domain logic without I/O side effects can be tested in milliseconds without external mocks."
        },
        {
          q: "What does an Application Service coordinate?",
          a: [
            "Use case workflows: loading entities via repositories, calling domain services, managing transactions, and triggering notifications",
            "Operating system memory allocation",
            "Computer monitor refresh rates",
            "Wi-Fi wireless radio signals"
          ],
          c: 0,
          why: "Application services act as conductors orchestrating infrastructure and domain operations for use cases."
        }
      ]
    },
    {
      n: 7,
      id: "configuration-boundaries-and-twelve-factor-apps",
      title: "Configuration boundaries and Twelve-Factor apps",
      topic: "Configuration & Observability",
      anim: "Layers",
      lede: "Never hardcode configuration. Master Factor III of the Twelve-Factor App: managing environment variables, secrets management, and circuit breakers for resilience.",
      winShort: "Implement validated configuration boundaries using environment variables and Pydantic",
      missionLink: "Prevents credential leaks and configuration drift across staging and production",
      sec1: {
        title: "Code is static; configuration varies",
        content: `<p>A production-grade backend codebase is compiled or built once, and deployed identically across multiple environments: local development, continuous integration, staging, and production. What changes between these environments?</p><p><b>Configuration</b>: database URLs, API credentials, cache hostnames, and logging levels. Following <b>Factor III of the Twelve-Factor App</b>, all configuration that varies across deploys must be injected via <b>environment variables</b>, never hardcoded in source files.</p>`,
        keyIdea: "Build one immutable artifact; inject environment-specific configuration via environment variables."
      },
      predict: {
        q: "Why is validating configuration on server startup (e.g. using Pydantic BaseSettings) critical?",
        a: [
          "It forces the application to fail fast immediately on boot if an environment variable is missing, before serving user traffic",
          "It automatically pays the monthly cloud hosting bill",
          "It converts configuration strings into machine code",
          "It allows the server to run without electricity"
        ],
        c: 0,
        why: "Failing fast on startup prevents runtime crashes hours later when a missing API key is first accessed."
      },
      sec2: {
        title: "The configuration validation boundary",
        content: `<p>Observe how a strongly-typed settings object parses and validates environment variables on boot.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Environment Variables", lines: ["DATABASE_URL=postgres://...", "PORT=8080, SECRET_KEY=xyz"] },
          { title: "Settings Validator (Boot)", lines: ["Pydantic / Zod schema check", "fails fast if SECRET_KEY is missing!"] },
          { title: "Validated App Settings", lines: ["injected as typed singleton", "immutable settings used across app"] }
        ]
      },
      sec3: {
        title: "Tracing circuit breaker protection",
        content: `<p>Trace how a circuit breaker halts requests to a failing third-party API to prevent cascading thread exhaustion.</p>`,
      },
      trace: {
        code: [
          "# Circuit Breaker: CLOSED (healthy)",
          "# Third-party payment API starts timing out on 5 consecutive requests...",
          "# Circuit trips: OPEN (unhealthy)!",
          "# Next 100 requests fail immediately in 0ms without waiting for timeouts!",
          "# After 30s: HALF-OPEN (tests 1 request to see if provider recovered)"
        ],
        steps: [
          { line: 0, vars: { initial: "circuit closed: calls allowed through" } },
          { line: 1, vars: { failure_threshold: "5 consecutive timeouts detected" } },
          { line: 2, vars: { tripped: "circuit opens; downstream calls short-circuited instantly" } },
          { line: 4, vars: { probe: "half-open probe tests if upstream recovered" } }
        ]
      },
      practiceIntro: "Test your memory of backend configuration rules.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The methodology defining 12 cloud architecture factors is the Twelve-<0> App.",
          "Failing on startup when settings are invalid is failing <1>.",
          "A pattern halting calls to failing remote services is a circuit <2>."
        ],
        blanks: [
          { a: ["Factor"], why: "The Twelve-Factor App defines cloud best practices." },
          { a: ["fast"], why: "Failing fast stops execution before corrupted states occur." },
          { a: ["breaker"], why: "Circuit breakers prevent cascading system exhaustion." }
        ]
      },
      win: "You can design fail-fast configuration boundaries and implement circuit breakers to guard against downstream service outages.",
      nextTasks: [
        "Create a validated Settings class using pydantic-settings in Python or Zod in TypeScript.",
        "Verify that your app refuses to start if a required database URL is omitted.",
        "Implement a simple circuit breaker state machine around an external HTTP API client."
      ],
      primarySource: "Adam Wiggins: *The Twelve-Factor App* (12factor.net).",
      quiz: [
        {
          q: "What does Factor III ('Config') of the Twelve-Factor App mandate?",
          a: [
            "Strict separation of config from code: store all config that varies between deploys in environment variables",
            "Store all passwords in a public git repository",
            "Hardcode database connection strings in application controllers",
            "Write configuration files in Microsoft Word format"
          ],
          c: 0,
          why: "Environment variables allow the exact same codebase artifact to be deployed anywhere."
        },
        {
          q: "What is a 'Circuit Breaker' in distributed backend architectures?",
          a: [
            "A design pattern that trips to stop making calls to a failing remote service, preventing resource starvation and cascading failures",
            "An electrical fuse in the building data center",
            "A tool that deletes database tables when full",
            "A security scanner that checks passwords"
          ],
          c: 0,
          why: "Circuit breakers protect applications from hanging all threads waiting on dead external services."
        },
        {
          q: "What are the three states of a Circuit Breaker?",
          a: [
            "Closed (normal operation), Open (tripped, short-circuiting calls), and Half-Open (testing recovery)",
            "Active, Inactive, and Deleted",
            "Read, Write, and Execute",
            "Start, Running, and Stopped"
          ],
          c: 0,
          why: "Closed allows traffic; Open blocks traffic; Half-Open probes service health."
        },
        {
          q: "Why is 'failing fast' on application startup preferable to discovering a missing configuration at runtime?",
          a: [
            "It alerts developers immediately during deployment before user traffic is served, rather than crashing on a customer hours later",
            "It speeds up network data downloads",
            "It turns off the database server",
            "It makes the application run without memory"
          ],
          c: 0,
          why: "Crashing on boot alerts CI/CD pipelines immediately; missing keys at runtime cause production incidents."
        }
      ]
    },
    {
      n: 8,
      id: "logging-metrics-and-observability",
      title: "Logging, metrics, and observability",
      topic: "Configuration & Observability",
      anim: "Layers",
      lede: "If you can't measure it, you can't manage it. Master structured JSON logging, correlation IDs, Prometheus metrics, health checks, and graceful shutdowns.",
      winShort: "Implement structured logging with correlation IDs, health checks, and graceful shutdown handlers",
      missionLink: "Provides real-time visibility into production server health and operational stability",
      sec1: {
        title: "The three pillars of observability",
        content: `<p>When an incident strikes production at 3:00 AM, you cannot attach an interactive debugger. You rely on the three pillars of observability: <b>Logs</b> (discrete event records), <b>Metrics</b> (aggregated numeric gauges and counters over time), and <b>Traces</b> (request journeys across distributed services).</p><p>Never use plain text <code>print('error')</code> statements. Production servers emit <b>Structured JSON Logging</b> tagged with a unique <b>Correlation ID (Request ID)</b> on every request, allowing you to trace all logs for a single user interaction across five different services.</p>`,
        keyIdea: "Emit structured JSON logs tagged with correlation IDs to track requests across distributed services."
      },
      predict: {
        q: "What is a 'Correlation ID' (Request ID) in backend observability?",
        a: [
          "A unique UUID generated at the API gateway and attached to all downstream logs and service calls for that single request",
          "The user's credit card expiration date",
          "The IP address of the local Wi-Fi router",
          "A hash of the database password"
        ],
        c: 0,
        why: "Correlation IDs tie together disparate log lines across multiple services for a single transaction."
      },
      sec2: {
        title: "The graceful shutdown protocol",
        content: `<p>How a production server terminates cleanly without dropping in-flight user requests.</p>`,
      },
      diagram: {
        boxes: [
          { title: "1. SIGTERM Received", lines: ["Kubernetes / Docker sends stop signal", "health check endpoint switches to 503 (stop routing new traffic)"] },
          { title: "2. Drain In-Flight", lines: ["finish active HTTP requests (e.g. 10s grace period)", "close keep-alive client sockets"] },
          { title: "3. Clean Teardown", lines: ["close database connection pools", "flush buffered logs -> process exit(0)"] }
        ]
      },
      sec3: {
        title: "Tracing structured JSON log emission",
        content: `<p>Trace how structured JSON logs allow automated log aggregators (Elasticsearch, Datadog) to index errors.</p>`,
      },
      trace: {
        code: [
          "logger.error('Payment failed', extra={",
          "    'correlation_id': 'a8f9-c2e1-482a',",
          "    'user_id': 42,",
          "    'gateway': 'stripe',",
          "    'error_code': 'card_declined'",
          "})"
        ],
        steps: [
          { line: 0, vars: { event: "structured error logged" } },
          { line: 1, vars: { correlation: "tied to request a8f9-c2e1-482a" } },
          { line: 4, vars: { indexing: "log aggregator can query WHERE error_code = 'card_declined' instantly" } }
        ]
      },
      practiceIntro: "Test your memory of backend observability.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Formatting log output as machine-readable JSON is <0> logging.",
          "The unique token tracing a request across multiple services is a <1> ID.",
          "Stopping a server without dropping active requests is a <2> shutdown."
        ],
        blanks: [
          { a: ["structured"], why: "Structured logging enables machine querying." },
          { a: ["correlation", "request"], why: "Correlation IDs tie distributed traces together." },
          { a: ["graceful"], why: "Graceful shutdowns drain active connections safely." }
        ]
      },
      win: "You can implement structured JSON logging, request tracing, health checks, and graceful shutdown handlers on production servers.",
      nextTasks: [
        "Configure your logger to output JSON logs with timestamp, level, and message fields.",
        "Implement a middleware that generates a unique X-Request-ID and attaches it to response headers.",
        "Implement a SIGTERM signal handler that drains database pools during shutdown."
      ],
      primarySource: "Google Site Reliability Engineering (SRE) Book: *Monitoring Distributed Systems* (sre.google/sre-book/monitoring-distributed-systems/).",
      quiz: [
        {
          q: "Why is structured JSON logging preferred over plain text lines (e.g. print statements) in production?",
          a: [
            "Log aggregators (like Datadog or Elasticsearch) can index, filter, and alert on specific JSON fields without fragile regex parsing",
            "JSON logs take up less memory on the server",
            "JSON logs prevent computers from crashing",
            "JSON logs are required by international law"
          ],
          c: 0,
          why: "Structured keys enable instant querying (e.g. status >= 500) across billions of log lines."
        },
        {
          q: "What does a 'Graceful Shutdown' handler do when receiving SIGTERM?",
          a: [
            "Stops accepting new connections, allows in-flight requests to complete within a timeout, closes database pools, and exits cleanly",
            "Terminates the process immediately, dropping all active user connections",
            "Reboots the physical server hardware",
            "Deletes all log files from disk"
          ],
          c: 0,
          why: "Graceful shutdowns ensure zero user requests are dropped during routine rolling deployments."
        },
        {
          q: "What is the difference between a Liveness probe and a Readiness probe in production health checks?",
          a: [
            "Liveness checks if the process is alive (restarts it if dead); Readiness checks if the process is ready to receive traffic (e.g. DB connected)",
            "Liveness is for mobile; Readiness is for desktop",
            "Liveness only runs once on startup; Readiness runs forever",
            "There is no difference between them"
          ],
          c: 0,
          why: "Liveness restarts frozen processes; readiness manages load balancer traffic routing."
        },
        {
          q: "What is a 'Metric' in observability terminology?",
          a: [
            "A numerical measurement aggregated over time intervals (e.g. requests_per_second counter, memory_usage gauge)",
            "A text paragraph describing a bug report",
            "A digital certificate signed by a Certificate Authority",
            "The distance from the server to the user"
          ],
          c: 0,
          why: "Metrics are numeric counters, gauges, and histograms evaluated for real-time alerting."
        }
      ]
    }
  ]
};

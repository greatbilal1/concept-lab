"use strict";

module.exports = {
  id: "separation-of-concerns",
  title: "Separation of Concerns",
  num: 42,
  emoji: "🧭",
  desc: "Giving each part of a system one reason to change — the principle behind most good architecture.",
  mission: `# Mission — Separation of Concerns

## Why this course exists

Separation of Concerns (SoC) is the meta-principle that underlies virtually every successful software design pattern, architectural style, and clean coding heuristic. Coined by Edsger W. Dijkstra, it demands that a software system be divided into distinct sections, where each section addresses a separate, focused concern. When concerns are tangled, a change to user authentication breaks the billing export. This course teaches high cohesion, low coupling, single-responsibility boundaries, and domain boundaries.

## What the learner can do at the end

- Diagnose and untangle coupled codebases using high cohesion and low coupling principles.
- Apply the Single Responsibility Principle (SRP): give each class and module one reason to change.
- Separate cross-cutting concerns (logging, authentication, caching) using decorators and middleware.
- Identify architectural boundaries between domain logic, data persistence, and user interfaces.
- Prevent leaky abstractions where low-level implementation details pollute high-level domain policies.

## What this course is NOT

- Not a syntax tutorial. It is a fundamental software design and architecture philosophy course.
- Not an anti-monolith guide. Separation of concerns applies identically to monoliths and microservices.

## Success looks like

When designing or reviewing a software feature, the learner identifies entangled responsibilities, extracts cross-cutting concerns into decorators or middleware, and ensures every module has a single, cohesive reason to change.
`,
  notes: `# Notes — Separation of Concerns

## Decisions
- Group into four themes: Cohesion & Coupling, Single Responsibility Principle, Cross-Cutting Concerns, and Boundary Enforcement.
- Illustrate with architectural diagrams and practical boundary refactorings.
`,
  resources: `# Resources — Separation of Concerns

## Knowledge (primary sources)
- Edsger W. Dijkstra, *On the role of scientific thought* (EWD 447, 1974).
- David Parnas, *On the Criteria To Be Used in Decomposing Systems into Modules* (Communications of the ACM, 1972).
- Robert C. Martin, *Clean Architecture*, Chapter 7: 'SRP: The Single Responsibility Principle'.

## Wisdom
- Separate what changes for one reason from what changes for another reason.
`,
  cheatsheetSections: [
    {
      title: "Cohesion & Coupling Metrics",
      label: "The architectural balance",
      code: `High Cohesion:
  Elements within a module belong together and serve one focus.
Low Coupling:
  Modules depend on each other through minimal, stable interfaces.

Target: Highly Cohesive modules with Loose Coupling between them.`,
      lessonN: 1,
      lessonSlug: "high-cohesion-and-low-coupling",
      lessonTitle: "High cohesion and low coupling"
    },
    {
      title: "Single Responsibility Principle (SRP)",
      label: "One reason to change",
      code: `// BAD: 3 reasons to change (actor conflicts)
class Employee {
  calculatePay()   // CFO / Accounting actor
  reportHours()    // COO / HR actor
  save()           // CTO / DBA actor
}

// GOOD: Separated by actor
class PayCalculator { calculatePay() }
class HourReporter  { reportHours() }
class EmployeeRepo  { save() }`,
      lessonN: 2,
      lessonSlug: "the-single-responsibility-principle-deep-dive",
      lessonTitle: "The Single Responsibility Principle deep dive"
    },
    {
      title: "Cross-Cutting Concerns",
      label: "Aspect-Oriented isolation",
      code: `# Use decorators or middleware for cross-cutting logging/auth:
@require_auth
@log_execution_time
@cached(ttl=300)
def get_user_profile(user_id: int):
    # Pure business calculation inside! Zero logging/auth boilerplate!
    return user_repo.find(user_id)`,
      lessonN: 5,
      lessonSlug: "cross-cutting-concerns-and-decorators",
      lessonTitle: "Cross-cutting concerns and decorators"
    },
    {
      title: "Leaky Abstractions",
      label: "Preventing detail contamination",
      code: `// Leaky Abstraction:
// Domain service catches SQLException or inspects HTTP headers directly!

// Clean Boundary:
// Domain catches domain exceptions (UserNotFoundException);
// Infrastructure adapters translate SQLException into domain exceptions.`,
      lessonN: 7,
      lessonSlug: "leaky-abstractions-and-boundary-erosion",
      lessonTitle: "Leaky abstractions and boundary erosion"
    }
  ],
  glossaryGroups: [
    {
      id: "cohesion-coupling",
      title: "Cohesion & Coupling Foundations",
      terms: [
        { term: "Separation of concerns", def: "A design principle dividing a system into distinct parts where each part addresses a separate concern.", lesson: 1, tags: ["principles"] },
        { term: "Cohesion", def: "The degree to which the elements inside a single module or class belong together and share a focused purpose.", lesson: 1, tags: ["metrics"] },
        { term: "Coupling", def: "The degree of direct interdependence between separate software modules.", lesson: 1, tags: ["metrics"] },
        { term: "Parnas partitioning", def: "Decomposing systems into modules by hiding design decisions that are likely to change behind stable interfaces.", lesson: 1, tags: ["theory"] }
      ]
    },
    {
      id: "srp-actors",
      title: "Single Responsibility & Actors",
      terms: [
        { term: "Single Responsibility Principle", def: "SRP: a module should be responsible to one, and only one, actor or business stakeholder.", lesson: 2, tags: ["srp"] },
        { term: "Actor", def: "A single person or group of stakeholders (e.g. accounting, operations) who require a specific business policy.", lesson: 2, tags: ["srp"] },
        { term: "God object", def: "An architectural antipattern where a single class or module knows too much or does too much.", lesson: 3, tags: ["antipattern"] },
        { term: "Information hiding", def: "The principle of concealing internal data representation and algorithms behind private module boundaries.", lesson: 3, tags: ["principles"] }
      ]
    },
    {
      id: "cross-cutting",
      title: "Cross-Cutting Concerns & Layers",
      terms: [
        { term: "Cross-cutting concern", def: "A feature (like logging, authentication, caching) that spans across multiple modules and layers.", lesson: 5, tags: ["architecture"] },
        { term: "Decorator pattern", def: "A structural pattern wrapping an object to add new behavior dynamically without altering the original class.", lesson: 5, tags: ["patterns"] },
        { term: "Aspect-Oriented Programming", def: "A paradigm (AOP) separating cross-cutting concerns by applying interceptors at join points.", lesson: 6, tags: ["paradigms"] },
        { term: "Middleware pipeline", def: "A series of sequential filters processing requests before business handlers and responses afterward.", lesson: 6, tags: ["middleware"] }
      ]
    },
    {
      id: "boundaries-leaks",
      title: "Boundaries & Abstractions",
      terms: [
        { term: "Leaky abstraction", def: "An abstraction that fails to completely conceal its underlying implementation details from consumers.", lesson: 7, tags: ["abstractions"] },
        { term: "Law of Demeter", def: "The principle of least knowledge: a method should only talk to its immediate friends, never strangers (a.b.c.d()).", lesson: 7, tags: ["principles"] },
        { term: "Bounded context", def: "A linguistic and conceptual boundary within which a specific domain model applies consistently.", lesson: 8, tags: ["ddd"] },
        { term: "Vertical slice", def: "Architecting features end-to-end across UI, logic, and database per business capability rather than technical layers.", lesson: 8, tags: ["architecture"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "high-cohesion-and-low-coupling",
      title: "High cohesion and low coupling",
      topic: "Cohesion & Coupling Foundations",
      anim: "Compass",
      lede: "The two eternal metrics of software quality. Discover why highly cohesive modules that are loosely coupled form the backbone of maintainable software.",
      winShort: "Evaluate software modules against cohesion and coupling metrics",
      missionLink: "The fundamental compass guiding all architectural design decisions",
      sec1: {
        title: "The eternal twin metrics",
        content: `<p>Every software architecture book talks about two fundamental metrics: <b>Cohesion</b> and <b>Coupling</b>.</p><p><b>Cohesion</b> is internal: <i>Do the functions and variables inside this module belong together?</i> A highly cohesive module does one thing and does it completely. <b>Coupling</b> is external: <i>How dependent is this module on other modules?</i> Tightly coupled code is like tangled Christmas lights: pull on one string and the whole tree shakes. The goal of architecture is <b>High Cohesion and Low Coupling</b>.</p>`,
        keyIdea: "High Cohesion means elements inside a module belong together; Low Coupling means modules are independent."
      },
      predict: {
        q: "What is the consequence of high coupling between modules in a large application?",
        a: [
          "A change made to one module accidentally breaks unrelated features in distant modules (spooky action at a distance)",
          "The computer compiler runs twice as fast",
          "The database requires fifty percent less memory",
          "There are no negative consequences"
        ],
        c: 0,
        why: "Tight coupling creates fragile dependency chains where changes ripple uncontrollably."
      },
      sec2: {
        title: "The Cohesion-Coupling matrix",
        content: `<p>Understand the ideal architectural target: High Cohesion paired with Low Coupling.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Worst (Low Cohesion, High Coupling)", lines: ["God classes, tangled spaghetti code", "every change causes five regressions"] },
          { title: "Ideal (High Cohesion, Low Coupling)", lines: ["focused, single-responsibility modules", "interact through minimal, stable interfaces", "isolated, testable, and swappable!"] }
        ]
      },
      sec3: {
        title: "Tracing decoupled module interaction",
        content: `<p>Trace how decoupling billing calculations from email notifications enables independent testing.</p>`,
      },
      trace: {
        code: [
          "# Tightly coupled: InvoiceCalculator imports SmtpEmailClient directly",
          "# Loosely coupled: InvoiceCalculator emits InvoiceCalculated event or returns DTO",
          "invoice = calculator.compute(order) # pure calculation, zero email coupling!",
          "notifier.send_receipt(invoice)       # notification service handles delivery independently"
        ],
        steps: [
          { line: 0, vars: { coupled_anti_pattern: "calculator cannot run in unit tests without SMTP server" } },
          { line: 2, vars: { high_cohesion: "calculator does only math" } },
          { line: 3, vars: { low_coupling: "notifier consumes pure invoice DTO" } }
        ]
      },
      practiceIntro: "Test your memory of cohesion and coupling.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The internal focus and relatedness of elements in a module is <0>.",
          "The degree of external interdependence between modules is <1>.",
          "Software architecture aims for high cohesion and <2> coupling."
        ],
        blanks: [
          { a: ["cohesion"], why: "Cohesion measures internal relatedness." },
          { a: ["coupling"], why: "Coupling measures external interdependence." },
          { a: ["low", "loose"], why: "Low coupling minimizes ripple effects." }
        ]
      },
      win: "You can evaluate codebases using cohesion and coupling metrics and separate tangled responsibilities into independent modules.",
      nextTasks: [
        "Audit a class that imports 20 different modules and evaluate its coupling.",
        "Refactor an entangled class by grouping related functions into a cohesive helper.",
        "Draw a module dependency graph showing coupling between your application packages."
      ],
      primarySource: "Edsger W. Dijkstra: *On the role of scientific thought* (EWD 447, 1974) & David Parnas (CACM, 1972).",
      quiz: [
        {
          q: "What does 'High Cohesion' mean in software design?",
          a: [
            "All the methods and data fields inside a class are closely related and work together to fulfill a single, well-defined purpose",
            "The code has zero comments",
            "The class has at least 1,000 lines of code",
            "The software runs on multiple cloud servers"
          ],
          c: 0,
          why: "High cohesion means a module has a clear, singular identity and internal unity."
        },
        {
          q: "Why is 'Low Coupling' desirable between software packages?",
          a: [
            "Modules can be modified, refactored, or replaced without causing unintended breaking changes in other modules",
            "It turns off the need for software licenses",
            "It reduces the size of the computer screen",
            "It forces all functions to be written in assembly"
          ],
          c: 0,
          why: "Loose coupling isolates changes, making software resilient to evolution."
        },
        {
          q: "What did David Parnas famously conclude about decomposing systems into modules in 1972?",
          a: [
            "Modules should be designed around information hiding: each module hides a difficult design decision or likely change from the rest of the system",
            "Every function must have five parameters",
            "All software should be written in a single file",
            "Databases should be abolished"
          ],
          c: 0,
          why: "Parnas introduced information hiding as the primary criterion for modular decomposition."
        },
        {
          q: "What is an indicator of 'Low Cohesion' in a class?",
          a: [
            "The class contains methods that operate on completely different sets of fields and serve unrelated business domains (e.g. UserBillingAndImageResizer)",
            "The class is smaller than 20 lines of code",
            "The class has unit tests",
            "The class uses type annotations"
          ],
          c: 0,
          why: "Disjoint methods operating on unrelated fields indicate multiple fragmented concerns mashed into one class."
        }
      ]
    },
    {
      n: 2,
      id: "the-single-responsibility-principle-deep-dive",
      title: "The Single Responsibility Principle deep dive",
      topic: "Single Responsibility & Actors",
      anim: "Compass",
      lede: "A class should have only one reason to change. But what is a 'reason to change'? Master Robert C. Martin's definition of SRP: separating code by business actors.",
      winShort: "Apply the Single Responsibility Principle by aligning class boundaries with business actors",
      missionLink: "Prevents merge conflicts and unintended regressions across different company departments",
      sec1: {
        title: "A reason to change is an Actor",
        content: `<p>The <b>Single Responsibility Principle (SRP)</b> is often misquoted as 'a class should do only one thing'. Robert C. Martin clarified the true definition: <b>A module should be responsible to one, and only one, actor</b>.</p><p>An <b>Actor</b> is a person or department who requests a change: the CFO (Accounting), the COO (Operations), or the CTO (IT/DBA). If a single <code>Employee</code> class contains <code>calculatePay()</code> (governed by CFO) and <code>reportHours()</code> (governed by COO), changes made for Accounting risk breaking Operations!</p>`,
        keyIdea: "A module should have only one reason to change, meaning it serves exactly one business actor."
      },
      predict: {
        q: "In a class with calculatePay() (Accounting) and generateTimesheet() (HR), what happens when HR requests a timesheet format change?",
        a: [
          "Developers editing the shared class risk accidentally breaking financial pay calculations used by Accounting",
          "Accounting automatically approves the change",
          "The database deletes the employee table",
          "Nothing, because Python code cannot have bugs"
        ],
        c: 0,
        why: "Shared classes serving multiple actors couple unrelated business policies together, risking regressions."
      },
      sec2: {
        title: "The Actor separation matrix",
        content: `<p>Observe how an oversized class is refactored into three actor-aligned classes.</p>`,
      },
      diagram: {
        boxes: [
          { title: "CFO Actor: PayCalculator", lines: ["calculatePay()", "enforces financial payroll policies", "changes ONLY when accounting rules change"] },
          { title: "COO Actor: HourReporter", lines: ["reportHours()", "enforces HR shift rules", "changes ONLY when operations rules change"] },
          { title: "CTO Actor: EmployeeRepository", lines: ["save(), findById()", "enforces database schemas", "changes ONLY when storage changes"] }
        ]
      },
      sec3: {
        title: "Tracing actor-aligned class decomposition",
        content: `<p>Trace how splitting by actor eliminates merge conflicts and unintended side effects.</p>`,
      },
      trace: {
        code: [
          "# Monolithic Employee class served CFO, COO, and DBA -> frequent merge conflicts!",
          "# Decomposed into actor-aligned domain services:",
          "payroll_service = PayrollCalculator() # CFO concern",
          "timesheet_service = TimesheetReporter() # COO concern",
          "employee_repo = EmployeeRepository()   # DBA concern",
          "# Now, a change requested by HR touches ONLY TimesheetReporter!"
        ],
        steps: [
          { line: 0, vars: { monolithic_risk: "conflicting edits from different business departments" } },
          { line: 2, vars: { separated_payroll: "payroll rules isolated in dedicated class" } },
          { line: 3, vars: { separated_hr: "timesheet rules isolated in dedicated class" } },
          { line: 5, vars: { outcome: "zero cross-department code coupling" } }
        ]
      },
      practiceIntro: "Test your memory of the Single Responsibility Principle.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The 'S' in the SOLID principles stands for Single <0>.",
          "A business stakeholder or department requesting a code change is an <1>.",
          "A module should have one, and only one, <2> to change."
        ],
        blanks: [
          { a: ["Responsibility"], why: "SRP stands for Single Responsibility Principle." },
          { a: ["actor"], why: "Actors represent business roles requesting changes." },
          { a: ["reason"], why: "One reason to change is the core definition of SRP." }
        ]
      },
      win: "You can identify actor boundaries in business requirements and structure classes so each has exactly one reason to change.",
      nextTasks: [
        "Audit a model class in your project and identify the different actors who request changes to it.",
        "Split an oversized class into two focused classes aligned with distinct business roles.",
        "Explain to your team why SRP is about actors and stakeholders, not just function line counts."
      ],
      primarySource: "Robert C. Martin, *Clean Architecture*, Chapter 7: 'SRP: The Single Responsibility Principle'.",
      quiz: [
        {
          q: "What is Robert C. Martin's authoritative definition of the Single Responsibility Principle?",
          a: [
            "A module should be responsible to one, and only one, actor (or business stakeholder)",
            "A function must not exceed five lines of code",
            "A class can only contain a single method",
            "Every developer can only edit one file per day"
          ],
          c: 0,
          why: "Uncle Bob defines SRP in terms of actors: software serves people, and changes stem from actors."
        },
        {
          q: "What problem arises when two developers from different feature teams edit the same class concurrently?",
          a: [
            "Git merge conflicts, overlapping assumptions, and accidental regressions of each other's business rules",
            "The compiler turns off",
            "The hard drive runs out of memory",
            "The computer screen locks"
          ],
          c: 0,
          why: "Classes serving multiple business concerns invite concurrent edits and painful merge collisions."
        },
        {
          q: "Is it possible for a class with only three methods to still violate the Single Responsibility Principle?",
          a: [
            "Yes, if those three methods serve different business actors (e.g. calculateTax, printHtml, saveToDb)",
            "No, small classes never violate SRP",
            "Only on Windows computers",
            "Yes, but only in Python"
          ],
          c: 0,
          why: "SRP is about reasons to change, not line counts; 3 methods serving 3 actors violates SRP."
        },
        {
          q: "How does adhering to SRP improve automated unit testing?",
          a: [
            "Classes have focused dependencies, requiring fewer complex mocks and enabling tight, fast tests",
            "It makes tests run without a CPU",
            "It eliminates the need to write test assertions",
            "Tests never fail"
          ],
          c: 0,
          why: "Focused classes have minimal dependencies, making setup and assertions straightforward."
        }
      ]
    },
    {
      n: 3,
      id: "god-objects-and-information-hiding",
      title: "God objects and information hiding",
      topic: "Single Responsibility & Actors",
      anim: "Compass",
      lede: "The monster class that knows everything and does everything. Learn how to slay the God Object antipattern and enforce David Parnas's Information Hiding principle.",
      winShort: "Slay God Objects by distributing responsibilities and encapsulating internal data structures",
      missionLink: "Eliminates bloated monolithic classes that paralyze software maintenance",
      sec1: {
        title: "The monster that ate your architecture",
        content: `<p>In decaying codebases, one class inevitably swells into a <b>God Object (Blob)</b>: <code>AppManager</code>, <code>SystemController</code>, or <code>UserDataContext</code>. It has 4,000 lines of code, holds 40 properties, and contains 60 methods. Every other class in the application depends on it.</p><p>The cure is David Parnas's foundational principle of <b>Information Hiding</b>: <i>Every module must hide a secret.</i> That secret might be a database schema, an algorithm, or a formatting rule. External classes must interact only through narrow, public interfaces, with zero access to internal data structures.</p>`,
        keyIdea: "A God Object knows and does too much; Information Hiding forces modules to encapsulate their secrets."
      },
      predict: {
        q: "What is the primary symptom of a 'God Object' in an architectural code audit?",
        a: [
          "A massive class that nearly every other class in the application imports and depends upon",
          "A class written in assembly language",
          "A class that has no methods",
          "A class that is completely empty"
        ],
        c: 0,
        why: "God Objects centralize all application logic, making the rest of the codebase dependent on them."
      },
      sec2: {
        title: "God Object versus Modular Decomposition",
        content: `<p>Contrast the central bottleneck of a God Object with decentralized, cohesive modules.</p>`,
      },
      diagram: {
        boxes: [
          { title: "God Object (The Blob)", lines: ["UserManager: 4,000 lines", "handles auth, billing, avatars, emails, DB", "every PR causes merge conflicts!"] },
          { title: "Modular Hiding (Parnas)", lines: ["AuthenticationService (hides JWT secret)", "BillingService (hides Stripe SDK)", "AvatarStorage (hides S3 bucket)"] }
        ]
      },
      sec3: {
        title: "Tracing God Object refactoring",
        content: `<p>Trace how extracting cohesive secrets from a God Object breaks it down into small modules.</p>`,
      },
      trace: {
        code: [
          "# Slaying AppManager (God Object):",
          "# Step 1: Extract email formatting -> NotificationModule",
          "# Step 2: Extract payment charging -> BillingModule",
          "# Step 3: Extract database connections -> DatabasePoolModule",
          "# Result: AppManager shrinks to a clean, 20-line orchestrator shell!"
        ],
        steps: [
          { line: 0, vars: { initial_smell: "4,000-line monolithic God Object" } },
          { line: 1, vars: { extraction_1: "notification concern isolated" } },
          { line: 2, vars: { extraction_2: "billing concern isolated" } },
          { line: 4, vars: { outcome: "god object dismantled into focused cohesive modules" } }
        ]
      },
      practiceIntro: "Test your memory of information hiding principles.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A class that knows and does too much is a <0> Object.",
          "The principle that every module must conceal an internal design choice is <1> hiding.",
          "The pioneer who formulated Information Hiding in 1972 is David <2>."
        ],
        blanks: [
          { a: ["God"], why: "God Objects centralize too much responsibility." },
          { a: ["information"], why: "Information hiding protects internal secrets." },
          { a: ["Parnas"], why: "David Parnas published the seminal 1972 paper." }
        ]
      },
      win: "You can identify God Objects and systematically dismantle them using information hiding and module extraction.",
      nextTasks: [
        "Find the largest class in your repository by line count using git or wc -l.",
        "Identify three distinct 'secrets' (e.g. file formats, third-party APIs) that class is failing to hide.",
        "Extract one secret into a standalone, encapsulated module with private internal state."
      ],
      primarySource: "David Parnas: *On the Criteria To Be Used in Decomposing Systems into Modules* (Communications of the ACM, 1972).",
      quiz: [
        {
          q: "What did David Parnas mean by 'hiding a secret' inside a module?",
          a: [
            "Encapsulating an implementation detail (like a data structure or file format) so that if it changes, only that single module needs editing",
            "Storing encrypted military passwords inside the source code",
            "Hiding software source code from company shareholders",
            "Deleting comments so competitors cannot read the logic"
          ],
          c: 0,
          why: "Information hiding encapsulates design decisions that are likely to change behind stable APIs."
        },
        {
          q: "Why do God Objects naturally emerge in neglected codebases over time?",
          a: [
            "It is psychologically easier for developers to add 'just one more method' to an existing familiar class than to architect a new class",
            "Programming language compilers force developers to use God Objects",
            "God Objects use less hard drive space",
            "Because God Objects run faster on multi-core processors"
          ],
          c: 0,
          why: "The path of least resistance tempts developers to append methods to existing central classes."
        },
        {
          q: "What is an effective strategy for refactoring an existing God Object without breaking production?",
          a: [
            "Extract one cohesive responsibility at a time into a new class, delegating calls from the God Object until it becomes an empty shell",
            "Delete the God Object on Friday afternoon and rewrite it over the weekend",
            "Rename the God Object to Helper",
            "Split the file randomly in half"
          ],
          c: 0,
          why: "Incremental extraction with delegation allows safe, continuous refactoring without breaking callers."
        },
        {
          q: "What role does public/private access modifiers (private, protected) play in Information Hiding?",
          a: [
            "They enforce compile-time or runtime barriers preventing external classes from directly accessing internal implementation fields",
            "They encrypt source code files on disk",
            "They prevent junior developers from opening the file",
            "They make functions run fifty percent faster"
          ],
          c: 0,
          why: "Access modifiers restrict visibility, forcing consumers to interact solely through the public interface."
        }
      ]
    },
    {
      n: 4,
      id: "presentation-domain-and-persistence-boundaries",
      title: "Presentation, domain, and persistence boundaries",
      topic: "Single Responsibility & Actors",
      anim: "Compass",
      lede: "Don't let your database leak into your HTML templates. Master the strict architectural boundaries between Presentation, Domain, and Persistence layers.",
      winShort: "Enforce strict boundary contracts between presentation views, domain entities, and database storage",
      missionLink: "Prevents UI and database frameworks from corrupting core business policies",
      sec1: {
        title: "The boundaries that protect the core",
        content: `<p>A software architecture is defined by the <b>boundaries</b> drawn through it. The two most critical boundaries in any web application are: <b>1. The Presentation Boundary</b> (separates the web/UI from domain logic) and <b>2. The Persistence Boundary</b> (separates domain logic from the database).</p><p>When these boundaries erode, chaos ensues: HTML templates execute SQL queries directly, and database models format currency symbols for web display. Crossing boundaries directly without Data Transfer Objects (DTOs) tightly couples the entire stack together.</p>`,
        keyIdea: "Boundaries isolate layers: domain logic must never touch HTTP requests or raw SQL connections."
      },
      predict: {
        q: "What happens if an HTML template executes a database query directly inside its template code (e.g. in Jinja or PHP)?",
        a: [
          "It destroys the persistence boundary, making caching impossible and triggering catastrophic N+1 query storms during rendering",
          "The template renders twice as fast",
          "The database engine automatically compiles the HTML into WebAssembly",
          "Nothing, this is standard best practice"
        ],
        c: 0,
        why: "Executing queries inside templates blurs UI and persistence, causing hidden N+1 storms and unmaintainable code."
      },
      sec2: {
        title: "Boundary crossing with DTOs",
        content: `<p>Observe how DTOs act as passports, translating data across layer boundaries safely.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Presentation (HTTP)", lines: ["JSON payload / Form input", "converts to RequestDTO", "Boundary: NO HTTP objects pass inward!"] },
          { title: "Domain (Core)", lines: ["executes business rules on DTO", "generates ResultDTO", "Boundary: NO SQL objects pass inward!"] },
          { title: "Persistence (DB)", lines: ["Repository maps ResultDTO to SQL", "commits transaction to Postgres"] }
        ]
      },
      sec3: {
        title: "Tracing boundary enforcement in a controller",
        content: `<p>Trace how a controller respects boundaries by mapping HTTP requests into clean domain parameters.</p>`,
      },
      trace: {
        code: [
          "# Presentation Layer (FastAPI / Express):",
          "@app.post('/transfer')",
          "async def transfer_money(payload: TransferRequestDTO):",
          "    # Boundary check: pass pure values inward; zero Request objects passed!",
          "    receipt = await transfer_service.execute(payload.from_id, payload.to_id, payload.amount)",
          "    return {'status': 'success', 'receipt_id': receipt.id}"
        ],
        steps: [
          { line: 2, vars: { presentation_boundary: "validates HTTP JSON into typed DTO" } },
          { line: 4, vars: { boundary_crossing: "calls domain service with pure scalar arguments" } },
          { line: 5, vars: { response_mapping: "maps domain receipt into HTTP JSON response" } }
        ]
      },
      practiceIntro: "Test your memory of architectural boundaries.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The boundary separating the web transport from logic is the <0> boundary.",
          "The boundary separating logic from database storage is the <1> boundary.",
          "Safe data carriers used to cross boundaries without leaking logic are <2>s."
        ],
        blanks: [
          { a: ["presentation"], why: "Presentation boundaries isolate HTTP/UI." },
          { a: ["persistence"], why: "Persistence boundaries isolate database drivers." },
          { a: ["DTO", "DTOs"], why: "Data Transfer Objects bridge layer boundaries." }
        ]
      },
      win: "You can erect and defend architectural boundaries that prevent database and web framework churn from polluting domain logic.",
      nextTasks: [
        "Audit your codebase to verify that no template or presentation file imports an SQL database connection.",
        "Ensure your domain entities return pure data rather than HTML-formatted strings.",
        "Define an explicit RequestDTO and ResponseDTO for a core API endpoint."
      ],
      primarySource: "Robert C. Martin, *Clean Architecture*, Chapter 17: 'Boundaries: Drawing Lines'.",
      quiz: [
        {
          q: "Why shouldn't domain entities format currency symbols (e.g. '$' or '€') for display?",
          a: [
            "Formatting for human display is a Presentation concern; domain logic should handle raw monetary numbers (e.g. cents) independently of display locale",
            "Computers cannot calculate numbers that have dollar signs",
            "Currencies are illegal in domain models",
            "It turns off database encryption"
          ],
          c: 0,
          why: "Currency formatting belongs in the Presentation layer; domain logic deals in raw numerical amounts."
        },
        {
          q: "What is an architectural 'boundary' in software design?",
          a: [
            "A structural separation that divides software elements and prevents knowledge on one side from leaking to the other",
            "A firewall that blocks internet connections",
            "The physical border of a data center building",
            "The maximum length of a string in memory"
          ],
          c: 0,
          why: "Boundaries enforce separation of concerns, ensuring changes on one side do not impact the other."
        },
        {
          q: "What role do Data Transfer Objects (DTOs) play at architectural boundaries?",
          a: [
            "They act as neutral data packets carrying serialized information across boundaries without exposing internal domain entity methods",
            "They translate Python into Java automatically",
            "They speed up network broadband connections",
            "They encrypt database backups"
          ],
          c: 0,
          why: "DTOs decouple layer representations: changes to an internal entity do not break the API contract."
        },
        {
          q: "What happens when an architectural boundary is eroded over time?",
          a: [
            "The codebase degrades into a tightly-coupled 'Big Ball of Mud' where every modification risks breaking unrelated subsystems",
            "The computer CPU runs at double clock speed",
            "The software becomes immune to all bugs",
            "The database drops all tables"
          ],
          c: 0,
          why: "Boundary erosion causes widespread coupling, turning the system into an unmaintainable monolith."
        }
      ]
    },
    {
      n: 5,
      id: "cross-cutting-concerns-and-decorators",
      title: "Cross-cutting concerns and decorators",
      topic: "Cross-Cutting Concerns & Layers",
      anim: "Compass",
      lede: "Logging, authentication, caching, and rate limiting don't belong inside your business logic. Learn how to extract cross-cutting concerns using Python decorators and wrapper functions.",
      winShort: "Extract cross-cutting concerns into reusable decorators and function wrappers",
      missionLink: "Keeps domain functions focused strictly on business calculations without infrastructure clutter",
      sec1: {
        title: "The tangle of cross-cutting concerns",
        content: `<p>A <b>Cross-Cutting Concern</b> is a requirement that spans across multiple modules and layers: logging, user authentication, timing metrics, input validation, and caching. If every function manually repeats 15 lines of logging and auth boilerplate, the actual 2 lines of business logic are buried.</p><p>The solution is the <b>Decorator Pattern</b>. In Python, decorators (<code>@decorator</code>) wrap around a function to inject cross-cutting behavior dynamically, leaving the core function 100% focused on business rules.</p>`,
        keyIdea: "Decorators wrap functions to execute cross-cutting concerns without modifying core business code."
      },
      predict: {
        q: "What does the '@cached(ttl=60)' decorator do when placed above a slow calculation function?",
        a: [
          "Intercepts the function call, returning cached results in 0ms on cache hits, and executing the function only on misses",
          "Deletes the function from memory after 60 seconds",
          "Calculates the result 60 times in parallel",
          "Prints the function source code to the terminal"
        ],
        c: 0,
        why: "Decorators intercept calls transparently, handling caching concerns without altering calculation logic."
      },
      sec2: {
        title: "The decorator wrapping layer",
        content: `<p>Visualise how nested decorators wrap cross-cutting behaviors around a pure domain core.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Outer: @require_auth", lines: ["checks user permissions", "aborts with 401 if unauthenticated"] },
          { title: "Middle: @log_execution_time", lines: ["measures start and end time", "emits metric to Datadog"] },
          { title: "Inner: Core Function", lines: ["calculate_interest_rate()", "pure mathematical formula!", "ZERO logging or auth clutter!"] }
        ]
      },
      sec3: {
        title: "Tracing decorator execution flow",
        content: `<p>Trace how a timing decorator wraps an existing function cleanly without modifying its source.</p>`,
      },
      trace: {
        code: [
          "def timeit(func):",
          "    def wrapper(*args, **kwargs):",
          "        start = time.perf_counter()",
          "        result = func(*args, **kwargs) # core function runs here",
          "        print(f'{func.__name__} took {time.perf_counter() - start:.4f}s')",
          "        return result",
          "    return wrapper"
        ],
        steps: [
          { line: 0, vars: { decorator_defined: "timeit takes target function as argument" } },
          { line: 2, vars: { pre_execution: "starts high-resolution timer" } },
          { line: 3, vars: { core_execution: "invokes original function with transparent arguments" } },
          { line: 4, vars: { post_execution: "logs execution time and returns original result" } }
        ]
      },
      practiceIntro: "Test your memory of cross-cutting concerns and decorators.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A concern that spans across multiple layers (like logging) is a <0>-cutting concern.",
          "The Python syntax used to wrap functions with decorators begins with the symbol <1>.",
          "Decorators wrap target functions to inject behavior without altering core <2>."
        ],
        blanks: [
          { a: ["cross"], why: "Cross-cutting concerns cut across module boundaries." },
          { a: ["@", "at"], why: "@decorator is Python's decorator syntax." },
          { a: ["code", "logic"], why: "Decorators preserve original function logic." }
        ]
      },
      win: "You can extract repetitive logging, authentication, and caching concerns into clean, reusable decorators.",
      nextTasks: [
        "Implement a custom @retry(attempts=3) decorator for network functions.",
        "Wrap an existing business calculation with a timing decorator.",
        "Ensure your decorators preserve function metadata using functools.wraps."
      ],
      primarySource: "Bruce Eckel: *Decorators I: Introduction to Python Decorators* (Python 3 Patterns & Idioms).",
      quiz: [
        {
          q: "Why is 'functools.wraps' strongly recommended when authoring Python decorators?",
          a: [
            "It copies original function metadata (like __name__, docstrings, and type annotations) onto the wrapper function, preventing debugging confusion",
            "It makes decorators execute on multiple CPU threads",
            "It turns off Python security warnings",
            "It compiles Python into C++ code"
          ],
          c: 0,
          why: "@wraps(func) ensures the decorated function retains its original name, docstring, and annotations."
        },
        {
          q: "Which of the following is a classic example of a cross-cutting concern?",
          a: [
            "Structured JSON logging, authorization checks, and performance metrics",
            "Calculating the sales tax on an invoice",
            "Rendering an HTML header template",
            "Defining a database table primary key"
          ],
          c: 0,
          why: "Logging and metrics apply universally across all features rather than belonging to one domain entity."
        },
        {
          q: "What architectural problem occurs when cross-cutting concerns are NOT separated?",
          a: [
            "Code Tangling: business logic becomes buried under dozens of lines of repetitive logging, auth, and error-handling boilerplate",
            "The computer runs out of physical hard drive space",
            "The database server reboots automatically",
            "All variables become global singletons"
          ],
          c: 0,
          why: "Tangling pollutes domain readability with infrastructure noise, making business logic hard to audit."
        },
        {
          q: "Can multiple decorators be stacked on top of a single function?",
          a: [
            "Yes, decorators can be stacked; they execute in bottom-up order (closest to the function first)",
            "No, Python strictly limits functions to a single decorator only",
            "Only on Linux computers",
            "Only if the decorators have identical names"
          ],
          c: 0,
          why: "Stacking applies wrappers in sequence: @dec1 over @dec2 wraps dec1(dec2(func))."
        }
      ]
    },
    {
      n: 6,
      id: "aspect-oriented-programming-and-middleware-pipelines",
      title: "Aspect-Oriented Programming and middleware pipelines",
      topic: "Cross-Cutting Concerns & Layers",
      anim: "Compass",
      lede: "How do you apply cross-cutting concerns across 500 endpoints at once? Discover Aspect-Oriented Programming (AOP) concepts and HTTP middleware pipelines.",
      winShort: "Design middleware pipelines that enforce cross-cutting policies across entire service applications",
      missionLink: "Scales cross-cutting concern management from individual functions to entire server fleets",
      sec1: {
        title: "Aspects and the pipeline pattern",
        content: `<p>Decorating 500 individual functions by hand is tedious. For application-wide cross-cutting concerns, software architectures use <b>Aspect-Oriented Programming (AOP)</b> or <b>Middleware Pipelines</b>.</p><p>In a middleware pipeline, every incoming HTTP request passes through a chain of composable filters: <b>1. RateLimiter &rarr; 2. RequestIdInjector &rarr; 3. Authenticator &rarr; 4. Logger &rarr; Route Handler</b>. Each middleware executes its cross-cutting concern centrally, keeping individual route functions 100% clean.</p>`,
        keyIdea: "Middleware pipelines centralize cross-cutting concerns across all routes without manual decoration."
      },
      predict: {
        q: "What happens if the RateLimiting middleware in a pipeline determines a client has exceeded its quota?",
        a: [
          "It short-circuits the pipeline immediately, returning HTTP 429 without invoking any downstream route handlers",
          "It forwards the request to the database anyway",
          "It crashes the server",
          "It sends an alert email to all users"
        ],
        c: 0,
        why: "Middleware can short-circuit early, rejecting unauthorized or throttled calls before hitting business logic."
      },
      sec2: {
        title: "The pipeline filter chain",
        content: `<p>Observe how requests flow through sequential middleware layers to the application handler and back.</p>`,
      },
      diagram: {
        boxes: [
          { title: "1. Rate Limiting", lines: ["checks client IP tokens", "short-circuits with 429 if exceeded"] },
          { title: "2. Auth Middleware", lines: ["validates Bearer token", "attaches request.user context"] },
          { title: "3. Timing & Logger", lines: ["times full round-trip", "logs structured JSON event"] }
        ]
      },
      sec3: {
        title: "Tracing pipeline short-circuiting",
        content: `<p>Trace how unauthenticated requests are stopped at the perimeter before consuming backend resources.</p>`,
      },
      trace: {
        code: [
          "Request -> Pipeline:",
          "  [1. CorrelationId]: Injects 'a8f9-42'",
          "  [2. AuthMiddleware]: Missing Authorization header! -> Short-circuit!",
          "  [Returns HTTP 401 Unauthorized immediately]",
          "  [Downstream Business Services and Database NEVER EXECUTED!]"
        ],
        steps: [
          { line: 1, vars: { correlation: "request ID tagged" } },
          { line: 2, vars: { auth_check: "security gate detects missing token" } },
          { line: 3, vars: { short_circuit: "401 returned at perimeter" } },
          { line: 4, vars: { resource_protection: "database queries and business services spared from processing" } }
        ]
      },
      practiceIntro: "Test your memory of middleware pipelines.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A chain of request filters is a middleware <0>.",
          "When a middleware returns early without calling downstream handlers, it <1>-circuits.",
          "Aspect-<2> Programming formalizes separating cross-cutting aspects."
        ],
        blanks: [
          { a: ["pipeline"], why: "Pipelines chain middleware filters sequentially." },
          { a: ["short"], why: "Short-circuiting terminates requests early." },
          { a: ["Oriented"], why: "Aspect-Oriented Programming (AOP) addresses cross-cutting aspects." }
        ]
      },
      win: "You can design and configure middleware pipelines that handle authentication, rate limiting, and observability centrally.",
      nextTasks: [
        "Implement a middleware that injects a unique correlation ID into every request context.",
        "Add a rate-limiting middleware that short-circuits with 429 Too Many Requests.",
        "Verify that order matters in your middleware pipeline (e.g. error handlers must wrap outer layers)."
      ],
      primarySource: "Gregor Kiczales et al., *Aspect-Oriented Programming* (ECOOP, 1997).",
      quiz: [
        {
          q: "What does 'short-circuiting' mean in a middleware pipeline?",
          a: [
            "A middleware halts execution and returns an HTTP response directly, bypassing all subsequent downstream middleware and route handlers",
            "An electrical fuse blowing in the server room",
            "An error that deletes database records",
            "A technique that increases CPU clock speed"
          ],
          c: 0,
          why: "Short-circuiting stops the pipeline early on failures (like unauthenticated requests or throttles)."
        },
        {
          q: "Why is the order of middleware registration critical in web frameworks?",
          a: [
            "Middleware executes in the order registered on entry, and in reverse order on exit; an error handler must wrap around all inner layers",
            "Alphabetical order is required by compilers",
            "Order does not matter at all",
            "Fastest middleware must always be registered last"
          ],
          c: 0,
          why: "Order determines execution hierarchy: outer middleware wraps inner middleware like onion layers."
        },
        {
          q: "What is an AOP 'Join Point' in Aspect-Oriented Programming theory?",
          a: [
            "A point in program execution (such as a method call or exception throw) where an aspect advice can be applied",
            "An SQL INNER JOIN condition",
            "A network cable splitter",
            "A database primary key"
          ],
          c: 0,
          why: "Join points are target execution moments where cross-cutting aspect interceptors hook in."
        },
        {
          q: "What is the primary architectural benefit of centralizing authentication in middleware rather than in each route handler?",
          a: [
            "Zero routes can accidentally forget to perform authentication; security is enforced uniformly by default at the application perimeter",
            "It turns off the need for passwords",
            "It speeds up internet connection bandwidth",
            "It allows databases to run without an operating system"
          ],
          c: 0,
          why: "Perimeter enforcement prevents human oversight where developers forget auth checks on new endpoints."
        }
      ]
    },
    {
      n: 7,
      id: "leaky-abstractions-and-boundary-erosion",
      title: "Leaky abstractions and boundary erosion",
      topic: "Boundaries & Abstractions",
      anim: "Compass",
      lede: "All non-trivial abstractions, to some degree, are leaky. Discover Joel Spolsky's Law of Leaky Abstractions and the Law of Demeter to prevent boundary erosion.",
      winShort: "Detect and repair leaky abstractions and eliminate Law of Demeter violations",
      missionLink: "Protects architectural abstractions from breaking down under edge-case pressures",
      sec1: {
        title: "The Law of Leaky Abstractions",
        content: `<p>Joel Spolsky coined the famous <b>Law of Leaky Abstractions</b>: <i>All non-trivial abstractions, to some degree, are leaky.</i> Abstractions save us time by hiding complexity, but the underlying implementation details always leak through eventually.</p><p>An example: TCP abstracts unreliable networks into a clean, ordered byte stream. But if someone unplugs the cable, the abstraction collapses into latency spikes and timeouts. In software architecture, a <b>leaky abstraction</b> happens when a low-level detail (like an SQL exception or HTTP header) leaks into your high-level domain services.</p>`,
        keyIdea: "Abstractions save time, but implementation details leak; defend boundaries with explicit exception mapping."
      },
      predict: {
        q: "What is a violation of the Law of Demeter in 'order.getCustomer().getAddress().getZipCode().getTaxRate()'?",
        a: [
          "The code traverses through multiple strangers, coupling the caller to the entire internal object navigation structure of four classes",
          "It uses too many dots",
          "Zip codes cannot have tax rates in SQL",
          "The code runs in reverse order"
        ],
        c: 0,
        why: "Train wreck method chaining couples the caller to internal object hierarchies, violating Demeter."
      },
      sec2: {
        title: "The Law of Demeter (Principle of Least Knowledge)",
        content: `<p>A method should only call methods on its immediate parameters, created objects, or direct fields — never strangers.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Violation (Train Wreck)", lines: ["a.getB().getC().getD().doSomething()", "couples 'a' to internal details of B, C, and D!"] },
          { title: "Law of Demeter Compliant", lines: ["a.doSomething()", "tells 'a' what to do directly;", "encapsulates internal navigation internally!"] }
        ]
      },
      sec3: {
        title: "Tracing leaky exception translation",
        content: `<p>Trace how an infrastructure repository catches database-specific errors and maps them to clean domain exceptions.</p>`,
      },
      trace: {
        code: [
          "# Leaky Repository (BAD): lets psycopg2.IntegrityError bubble to domain logic!",
          "# Encapsulated Repository (GOOD):",
          "try:",
          "    cursor.execute('INSERT INTO users...')",
          "except psycopg2.IntegrityError as err:",
          "    # Translate low-level driver error into clean domain exception:",
          "    raise DuplicateUserException('User already exists') from err"
        ],
        steps: [
          { line: 0, vars: { leak_risk: "raw database driver error breaks domain abstraction" } },
          { line: 4, vars: { boundary_catch: "repository catches low-level SQL error" } },
          { line: 6, vars: { translated: "emits clean domain-specific exception; abstraction preserved" } }
        ]
      },
      practiceIntro: "Test your memory of leaky abstractions.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The rule that all non-trivial abstractions leak is the Law of Leaky <0>.",
          "The principle of least knowledge is the Law of <1>.",
          "Repositories should translate low-level SQL errors into clean <2> exceptions."
        ],
        blanks: [
          { a: ["Abstractions"], why: "Joel Spolsky coined the Law of Leaky Abstractions." },
          { a: ["Demeter"], why: "The Law of Demeter discourages train wreck calls." },
          { a: ["domain"], why: "Domain exceptions isolate services from driver libraries." }
        ]
      },
      win: "You can identify leaky abstractions and enforce the Law of Demeter to keep interfaces resilient and decoupled.",
      nextTasks: [
        "Audit your service layer to verify that no psycopg2, sqlalchemy, or prisma exceptions bubble into business logic.",
        "Refactor a train wreck method chain (a.b.c.d()) into a single encapsulated method call.",
        "Read Joel Spolsky's classic essay *The Law of Leaky Abstractions*."
      ],
      primarySource: "Joel Spolsky: *The Law of Leaky Abstractions* (joelonsoftware.com, 2002).",
      quiz: [
        {
          q: "What is a 'Leaky Abstraction' in software architecture?",
          a: [
            "An abstraction that fails to completely hide its underlying implementation mechanics, forcing developers to understand the details it was meant to hide",
            "A memory leak in a computer processor",
            "A database table that loses records",
            "A computer monitor that leaks liquid crystal display"
          ],
          c: 0,
          why: "When abstractions leak, developers must understand the underlying plumbing to fix bugs."
        },
        {
          q: "What is the 'Law of Demeter' (Principle of Least Knowledge)?",
          a: [
            "A unit should have only limited knowledge about other units: only talk to your immediate friends, not strangers",
            "All variables must be declared as constants",
            "Databases can only hold Greek characters",
            "Every class must be named after a Roman god"
          ],
          c: 0,
          why: "Demeter avoids tight structural coupling by forbidding long method-chain navigations across strangers."
        },
        {
          q: "Why should a database repository translate raw SQL exceptions into domain exceptions?",
          a: [
            "To prevent database driver details from leaking into domain services, keeping business logic independent of storage technology",
            "Because SQL exceptions crash the computer processor",
            "To make error messages fifty percent shorter",
            "Domain exceptions run twice as fast"
          ],
          c: 0,
          why: "Domain services shouldn't know which database engine or driver library is running underneath."
        },
        {
          q: "What is a 'Train Wreck' in code refactoring?",
          a: [
            "A long chain of method calls (e.g. getA().getB().getC().getD()) that tightly couples the caller to intermediate object structures",
            "A fatal compile-time syntax error",
            "A server crash caused by electrical failure",
            "An infinite while loop"
          ],
          c: 0,
          why: "Method chains that navigate through object graphs like a line of train cars violate encapsulation."
        }
      ]
    },
    {
      n: 8,
      id: "bounded-contexts-and-vertical-slice-architecture",
      title: "Bounded contexts and vertical slice architecture",
      topic: "Boundaries & Abstractions",
      anim: "Compass",
      lede: "Moving beyond technical layers: explore Domain-Driven Design's Bounded Contexts and Vertical Slice Architecture to organize software by business capabilities.",
      winShort: "Design vertical slice architectures and define domain Bounded Context boundaries",
      missionLink: "The modern architectural paradigm organizing large software teams around business capabilities",
      sec1: {
        title: "From horizontal layers to vertical slices",
        content: `<p>In traditional horizontal architectures, adding a new feature requires editing five folders: <code>controllers/</code>, <code>services/</code>, <code>repositories/</code>, <code>models/</code>, and <code>dtos/</code>. Code that changes together is scattered far apart.</p><p><b>Vertical Slice Architecture</b> groups code by <b>Business Capability</b>: everything needed to execute 'PlaceOrder' (the endpoint, command handler, validator, and query) lives inside a single cohesive folder: <code>features/place_order/</code>. Paired with Domain-Driven Design's <b>Bounded Contexts</b>, systems evolve rapidly with zero cross-feature contamination.</p>`,
        keyIdea: "Vertical slices group code by business capability, keeping everything that changes together in one place."
      },
      predict: {
        q: "What is the primary benefit of Vertical Slice Architecture over horizontal layering?",
        a: [
          "Features are self-contained: modifying 'PlaceOrder' touches only files in features/place_order without rippling across horizontal layers",
          "It eliminates the need for software testing",
          "It converts Python into machine binary",
          "It makes the computer screen wider"
        ],
        c: 0,
        why: "High cohesion around business capabilities: everything related to a feature lives in one cohesive slice."
      },
      sec2: {
        title: "Horizontal Layers versus Vertical Slices",
        content: `<p>Contrast technical horizontal separation with business-aligned vertical feature slices.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Horizontal (Separated by Tech)", lines: ["controllers/ (all endpoints)", "services/ (all services)", "repositories/ (all SQL queries)", "changing 1 feature touches all folders!"] },
          { title: "Vertical Slice (By Feature)", lines: ["features/create_order/ (endpoint, logic, query)", "features/cancel_order/ (endpoint, logic, query)", "features/refund_order/ (isolated slices!)"] }
        ]
      },
      sec3: {
        title: "Tracing Bounded Context boundaries",
        content: `<p>Trace how the concept of 'User' changes meaning across different Bounded Contexts in an e-commerce platform.</p>`,
      },
      trace: {
        code: [
          "# Context 1 (Authentication): User = { id, email, password_hash, mfa_secret }",
          "# Context 2 (Shipping): Customer = { id, delivery_address, gate_code }",
          "# Context 3 (Support): Client = { id, ticket_history, satisfaction_score }",
          "# Result: Zero bloated god-models! Each context models exactly what it needs!"
        ],
        steps: [
          { line: 0, vars: { auth_context: "identity models credentials and login security" } },
          { line: 1, vars: { shipping_context: "shipping models physical address and delivery logistics" } },
          { line: 2, vars: { support_context: "support models customer satisfaction and ticket history" } },
          { line: 3, vars: { ddd_clarity: "bounded contexts eliminate bloated monolithic User models" } }
        ]
      },
      practiceIntro: "Test your memory of vertical slices and bounded contexts.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Organizing code by business feature rather than technical layer is <0> slice architecture.",
          "A linguistic and model boundary in Domain-Driven Design is a <1> context.",
          "The creator of Vertical Slice Architecture is Jimmy <2>."
        ],
        blanks: [
          { a: ["vertical"], why: "Vertical slices group code by feature." },
          { a: ["bounded"], why: "Bounded contexts isolate domain models." },
          { a: ["Bogard"], why: "Jimmy Bogard popularized Vertical Slice Architecture." }
        ]
      },
      win: "You can architect systems around cohesive vertical slices and bounded contexts, maximizing developer velocity and team autonomy.",
      nextTasks: [
        "Organize a new feature into a vertical slice folder containing route, handler, and query.",
        "Define the boundary between two Bounded Contexts (e.g. Billing vs Catalog) in your domain.",
        "Read Jimmy Bogard's foundational essay *Vertical Slice Architecture*."
      ],
      primarySource: "Eric Evans, *Domain-Driven Design*, Chapter 14: 'Maintaining Model Integrity — Bounded Context'.",
      quiz: [
        {
          q: "What is a 'Bounded Context' in Domain-Driven Design (DDD)?",
          a: [
            "A defined boundary within which a specific domain model applies consistently and words have exact, unambiguous meanings",
            "A database transaction timeout",
            "A firewall that blocks internet connections",
            "A memory limit on Docker containers"
          ],
          c: 0,
          why: "A bounded context provides a linguistic boundary where domain models remain pure and focused."
        },
        {
          q: "Why does Vertical Slice Architecture improve developer velocity on large teams?",
          a: [
            "Developers working on Feature A rarely touch files in Feature B, minimizing git merge conflicts and enabling independent deployment",
            "It turns off compiler syntax errors",
            "It speeds up CPU clock frequencies",
            "It eliminates the need for database migrations"
          ],
          c: 0,
          why: "Self-contained feature folders minimize file contention and blast radius across teams."
        },
        {
          q: "How does the concept of a 'Product' differ between a Sales Bounded Context and an Inventory Bounded Context?",
          a: [
            "Sales cares about price, marketing copy, and photos; Inventory cares about dimensions, weight, and warehouse shelf coordinates",
            "Sales uses numbers; Inventory uses text",
            "They are identical in all contexts",
            "Products are illegal in Sales contexts"
          ],
          c: 0,
          why: "Different contexts model different attributes of the same real-world entity, avoiding bloated monolithic models."
        },
        {
          q: "When is Vertical Slice Architecture preferred over traditional N-Tier Layered Architecture?",
          a: [
            "In complex, rapidly evolving business domains where feature teams need autonomy to modify features without navigating 10 layer folders",
            "Only on mobile devices",
            "Only when building static HTML websites",
            "Never; layered architecture is legally mandatory"
          ],
          c: 0,
          why: "Vertical slices optimize for change velocity around business capabilities rather than technical tiers."
        }
      ]
    }
  ]
};

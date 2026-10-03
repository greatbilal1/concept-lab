"use strict";

module.exports = {
  id: "design-patterns",
  title: "Design Patterns",
  num: 45,
  emoji: "🧩",
  desc: "Factory, observer, strategy, adapter and friends — reusable solutions to recurring problems.",
  mission: `# Mission — Design Patterns

## Why this course exists

Design patterns are not academic trivia or cargo-cult templates to be copied blindly. They are hard-won architectural solutions discovered by master practitioners over decades to solve recurring object-oriented problems. When developers lack design pattern fluency, they invent clunky, brittle custom solutions for problems already solved cleanly by Factory, Observer, Adapter, and Decorator. This course teaches the practical, modern application of the essential Gang of Four design patterns without over-engineering.

## What the learner can do at the end

- Categorize design patterns into Creational, Structural, and Behavioral families.
- Decouple object construction from business logic using Factory Method and Abstract Factory.
- Build event-driven pub/sub systems using the Observer pattern.
- Bridge incompatible interfaces cleanly using the Adapter and Facade patterns.
- Recognize when design patterns solve a real problem versus when they introduce premature over-engineering.

## What this course is NOT

- Not an exhaustive memorization of all 23 GoF patterns.
- Not a Java-specific boilerplate tutorial. It focuses on modern, idiomatic implementations across languages.

## Success looks like

When faced with a complex design challenge (like supporting multiple notification channels or third-party payment gateways), the learner selects the right design pattern (Factory + Strategy + Adapter) and implements it cleanly in under fifteen minutes.
`,
  notes: `# Notes — Design Patterns

## Decisions
- Group into four themes: Pattern Taxonomy & Creational, Structural Patterns, Behavioral Patterns, and Anti-Patterns & Overuse.
- Emphasize modern implementations (using lambdas and modules where appropriate).
`,
  resources: `# Resources — Design Patterns

## Knowledge (primary sources)
- Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides, *Design Patterns: Elements of Reusable Object-Oriented Software* (Addison-Wesley, 1994).
- Alexander Shvets, *Dive Into Design Patterns* (refactoring.guru).
- Martin Fowler, *Catalog of Patterns of Enterprise Application Architecture*.

## Wisdom
- A pattern is a signpost, not a straitjacket. Apply patterns to solve concrete problems, not to prove you know them.
`,
  cheatsheetSections: [
    {
      title: "Factory Pattern",
      label: "Decoupling creation from execution",
      code: `class PaymentFactory:
    @staticmethod
    def create(method: str) -> PaymentGateway:
        if method == "stripe": return StripeGateway()
        if method == "paypal": return PayPalGateway()
        raise ValueError(f"Unknown payment method: {method}")

gateway = PaymentFactory.create("stripe")
gateway.charge(amount)`,
      lessonN: 2,
      lessonSlug: "creational-patterns-factory-and-builder",
      lessonTitle: "Creational patterns: Factory and Builder"
    },
    {
      title: "Adapter & Facade",
      label: "Structural interface bridges",
      code: `// Adapter: Makes an incompatible interface compatible
class StripeAdapter implements PaymentProcessor {
  constructor(private stripe: ThirdPartyStripeSDK) {}
  pay(amountCents: number) {
    return this.stripe.makeCharge({ cents: amountCents });
  }
}

// Facade: Provides a simple front door to a complex subsystem
class VideoConverterFacade {
  convert(file: string, format: string) { ... }
}`,
      lessonN: 3,
      lessonSlug: "structural-patterns-adapter-and-facade",
      lessonTitle: "Structural patterns: Adapter and Facade"
    },
    {
      title: "Observer Pattern (Pub/Sub)",
      label: "Event notification decouple",
      code: `class EventEmitter {
    constructor() { this.events = {}; }
    on(event, listener) {
        (this.events[event] = this.events[event] || []).push(listener);
    }
    emit(event, data) {
        (this.events[event] || []).forEach(fn => fn(data));
    }
}`,
      lessonN: 5,
      lessonSlug: "behavioral-patterns-observer-and-pub-sub",
      lessonTitle: "Behavioral patterns: Observer and Pub/Sub"
    },
    {
      title: "When NOT to Use Patterns",
      label: "Preventing Patternitis",
      code: `// Don't create an AbstractFactoryProviderStrategyManager
// for a single if/else statement!
// Rule: Simple procedural code beats a design pattern
// until variability or complexity genuinely demands it.`,
      lessonN: 8,
      lessonSlug: "patternitis-and-knowing-when-not-to-use-patterns",
      lessonTitle: "Patternitis and knowing when not to use patterns"
    }
  ],
  glossaryGroups: [
    {
      id: "pattern-basics",
      title: "Pattern Taxonomy & Creational",
      terms: [
        { term: "Design pattern", def: "A general, reusable solution to a commonly occurring problem within a given context in software design.", lesson: 1, tags: ["patterns"] },
        { term: "Creational pattern", def: "A category of design patterns (Factory, Builder, Singleton) dealing with object creation mechanisms.", lesson: 2, tags: ["creational"] },
        { term: "Factory Method", def: "A creational pattern providing an interface for creating objects in a superclass, letting subclasses alter the type.", lesson: 2, tags: ["creational"] },
        { term: "Builder pattern", def: "A creational pattern allowing the step-by-step construction of complex objects using chained methods.", lesson: 2, tags: ["creational"] }
      ]
    },
    {
      id: "structural-patterns",
      title: "Structural Patterns",
      terms: [
        { term: "Structural pattern", def: "A category of patterns (Adapter, Facade, Decorator, Proxy) explaining how to assemble objects into larger structures.", lesson: 3, tags: ["structural"] },
        { term: "Adapter pattern", def: "A structural pattern converting the interface of a class into another interface clients expect.", lesson: 3, tags: ["structural"] },
        { term: "Facade pattern", def: "A structural pattern providing a simplified, high-level interface to a complex library, framework, or subsystem.", lesson: 3, tags: ["structural"] },
        { term: "Proxy pattern", def: "A structural pattern providing a surrogate or placeholder for another object to control access, caching, or logging.", lesson: 4, tags: ["structural"] }
      ]
    },
    {
      id: "behavioral-patterns",
      title: "Behavioral Patterns",
      terms: [
        { term: "Behavioral pattern", def: "A category of patterns (Observer, Strategy, Command, State) concerned with algorithms and assignment of responsibilities.", lesson: 5, tags: ["behavioral"] },
        { term: "Observer pattern", def: "A behavioral pattern defining a subscription mechanism to notify multiple objects about any events that happen.", lesson: 5, tags: ["behavioral"] },
        { term: "Command pattern", def: "A behavioral pattern encapsulating a request as a standalone object containing all information about the request.", lesson: 6, tags: ["behavioral"] },
        { term: "State pattern", def: "A behavioral pattern allowing an object to alter its behavior when its internal state changes, appearing to change its class.", lesson: 6, tags: ["behavioral"] }
      ]
    },
    {
      id: "antipatterns-overuse",
      title: "Pattern Overuse & Real-World Craft",
      terms: [
        { term: "Patternitis", def: "The antipattern of prematurely forcing design patterns into simple code where they add unnecessary complexity.", lesson: 8, tags: ["antipattern"] },
        { term: "YAGNI", def: "You Aren't Gonna Need It: an extreme programming principle stating functionality should not be added until required.", lesson: 8, tags: ["principles"] },
        { term: "Singleton pattern", def: "A creational pattern ensuring a class has only one instance while providing a global access point to it.", lesson: 7, tags: ["creational"] },
        { term: "Null Object pattern", def: "A pattern substituting a neutral, do-nothing object in place of null to eliminate null-check boilerplate.", lesson: 7, tags: ["patterns"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "the-gang-of-four-and-pattern-taxonomy",
      title: "The Gang of Four and pattern taxonomy",
      topic: "Pattern Taxonomy & Creational",
      anim: "Puzzle",
      lede: "In 1994, four authors changed software engineering forever. Discover the Gang of Four (GoF), the 23 classic design patterns, and their three fundamental categories.",
      winShort: "Classify design patterns into Creational, Structural, and Behavioral categories",
      missionLink: "The architectural taxonomy organizing all object-oriented design patterns",
      sec1: {
        title: "A shared architectural vocabulary",
        content: `<p>In 1994, Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides (the <b>Gang of Four / GoF</b>) published <i>Design Patterns</i>. They noticed that experienced software engineers repeatedly solved identical design problems using identical structural shapes.</p><p>By giving these solutions names (Factory, Observer, Strategy), they created a <b>shared vocabulary</b>: saying <i>'let's use an Adapter here'</i> communicates twenty lines of architectural intent in a single sentence. The 23 patterns fall into three categories: <b>Creational</b> (how objects are created), <b>Structural</b> (how objects are composed), and <b>Behavioral</b> (how objects communicate).</p>`,
        keyIdea: "Design patterns are categorized into Creational (creation), Structural (composition), and Behavioral (communication)."
      },
      predict: {
        q: "Into which category does the 'Observer' pattern fall: Creational, Structural, or Behavioral?",
        a: [
          "Behavioral, because it governs communication and event notification algorithms between objects",
          "Creational, because it creates new observers",
          "Structural, because it defines class structures",
          "It does not belong to any category"
        ],
        c: 0,
        why: "Behavioral patterns govern interaction, responsibility assignment, and communication protocols."
      },
      sec2: {
        title: "The Three Pattern Families",
        content: `<p>Understand the three broad categories that organize all classic design patterns.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Creational (Creation)", lines: ["Factory Method, Abstract Factory", "Builder, Prototype, Singleton", "decouples instantiation from use"] },
          { title: "Structural (Composition)", lines: ["Adapter, Bridge, Composite", "Decorator, Facade, Proxy", "assembles classes into larger systems"] },
          { title: "Behavioral (Communication)", lines: ["Observer, Strategy, Command", "State, Template Method, Iterator", "coordinates algorithms and messaging"] }
        ]
      },
      sec3: {
        title: "Tracing design pattern selection",
        content: `<p>Trace how a team maps an architectural problem to the appropriate design pattern family.</p>`,
      },
      trace: {
        code: [
          "# Problem: Need to create diverse report formats (PDF, CSV, HTML) without hardcoding classes",
          "# Diagnosis: This is an object CREATION challenge -> Creational Family",
          "# Pattern Selection: Factory Method pattern!",
          "# Problem: Need to notify 5 widgets when data updates -> Behavioral -> Observer pattern!"
        ],
        steps: [
          { line: 0, vars: { problem_1: "object creation variability" } },
          { line: 2, vars: { match_1: "Factory Method selected from Creational family" } },
          { line: 3, vars: { problem_2: "event notification decoupled from sender -> Observer selected" } }
        ]
      },
      practiceIntro: "Test your memory of pattern taxonomy.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Patterns dealing with object instantiation are <0> patterns.",
          "Patterns dealing with object composition and interfaces are <1> patterns.",
          "Patterns dealing with object communication and algorithms are <2> patterns."
        ],
        blanks: [
          { a: ["Creational"], why: "Creational patterns abstract object creation." },
          { a: ["Structural"], why: "Structural patterns organize object relationships." },
          { a: ["Behavioral"], why: "Behavioral patterns govern interaction protocols." }
        ]
      },
      win: "You can identify the three core design pattern families and select candidate patterns based on problem characteristics.",
      nextTasks: [
        "Classify three patterns you have used into Creational, Structural, or Behavioral.",
        "Browse the catalog at refactoring.guru/design-patterns to view visual diagrams of the 23 GoF patterns.",
        "Explain to a colleague why design patterns are solutions, not algorithms."
      ],
      primarySource: "Erich Gamma et al., *Design Patterns: Elements of Reusable Object-Oriented Software* (Addison-Wesley, 1994).",
      quiz: [
        {
          q: "What is a 'Design Pattern' in software engineering?",
          a: [
            "A reusable, named architectural description or template for solving a commonly occurring problem in software design",
            "A specific code library you install via npm or pip",
            "A visual graphic design layout in CSS",
            "A database indexing algorithm"
          ],
          c: 0,
          why: "Patterns are conceptual blueprints and architectural templates, not pre-packaged libraries."
        },
        {
          q: "Which group of patterns includes the Adapter, Facade, Decorator, and Proxy patterns?",
          a: [
            "Structural patterns (explaining how to assemble objects and classes into larger flexible structures)",
            "Creational patterns",
            "Behavioral patterns",
            "Concurrency patterns"
          ],
          c: 0,
          why: "Structural patterns focus on class composition and interface adaptation."
        },
        {
          q: "Who are the 'Gang of Four' (GoF)?",
          a: [
            "Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides, authors of the landmark 1994 Design Patterns book",
            "Four computer scientists who invented the Linux operating system",
            "The creators of the Python programming language",
            "The founders of Google and Microsoft"
          ],
          c: 0,
          why: "Gamma, Helm, Johnson, and Vlissides authored the definitive 1994 design pattern catalog."
        },
        {
          q: "Why is having a shared design pattern vocabulary valuable for engineering teams?",
          a: [
            "It allows developers to discuss complex architectural relationships in a single word (e.g. 'Use an Observer') with mutual understanding",
            "It reduces the size of compiled binaries",
            "It eliminates the need for unit testing",
            "It speeds up network data transfer rates"
          ],
          c: 0,
          why: "Pattern names act as high-bandwidth communication shortcuts for software architecture."
        }
      ]
    },
    {
      n: 2,
      id: "creational-patterns-factory-and-builder",
      title: "Creational patterns: Factory and Builder",
      topic: "Pattern Taxonomy & Creational",
      anim: "Puzzle",
      lede: "Stop writing constructors with 12 parameters. Master the Factory Method for decoupling instantiation, and the Builder pattern for constructing complex objects step-by-step.",
      winShort: "Implement Factory Method and Builder patterns to streamline complex object creation",
      missionLink: "Prevents constructor pollution and decouples callers from concrete implementation classes",
      sec1: {
        title: "Decoupling creation from business logic",
        content: `<p>When a client class directly calls <code>new SmtpTransport()</code>, it is tightly coupled to that concrete class. If you want to switch to a <code>SendGridTransport</code> based on configuration, you must modify the client class.</p><p>The <b>Factory Method</b> pattern delegates instantiation to a factory: the client asks for a transport, and the factory returns an object implementing the <code>Transport</code> interface. The <b>Builder Pattern</b> tackles a different creational problem: constructing complex objects with dozens of optional configurations using fluent chained methods.</p>`,
        keyIdea: "Factory decouples creation from usage; Builder constructs complex multi-step objects cleanly."
      },
      predict: {
        q: "What design pattern avoids the 'Telescoping Constructor' antipattern (constructors with 10 optional parameters)?",
        a: [
          "The Builder pattern (constructing the object step-by-step with chained methods)",
          "The Singleton pattern",
          "The Adapter pattern",
          "The Observer pattern"
        ],
        c: 0,
        why: "Builder allows fluent, optional parameter configuration without huge confusing argument lists."
      },
      sec2: {
        title: "Factory versus Builder roles",
        content: `<p>Contrast the polymorphic selection of Factory with the stepwise construction of Builder.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Factory Pattern", lines: ["Factory.create('pdf') -> returns PdfDocument", "Factory.create('html') -> returns HtmlDocument", "polymorphic type selection!"] },
          { title: "Builder Pattern", lines: ["QueryBuilder.select('*').from('users')", "  .where('active', true).limit(10).build();", "stepwise fluent assembly!"] }
        ]
      },
      sec3: {
        title: "Tracing a fluent Builder execution",
        content: `<p>Trace how a fluent Builder constructs an immutable HTTP request object cleanly.</p>`,
      },
      trace: {
        code: [
          "request = (HttpRequestBuilder()",
          "    .set_url('https://api.com/users')",
          "    .set_method('POST')",
          "    .add_header('Authorization', 'Bearer token')",
          "    .set_json_body({'name': 'Ada'})",
          "    .build())"
        ],
        steps: [
          { line: 0, vars: { builder: "builder instance holds pending configuration" } },
          { line: 3, vars: { chaining: "fluent methods return self, enabling readable chaining" } },
          { line: 5, vars: { built: "build() validates parameters and constructs immutable HttpRequest" } }
        ]
      },
      practiceIntro: "Test your memory of creational patterns.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The creational pattern delegating instance selection is the <0> pattern.",
          "The creational pattern assembling complex objects step-by-step is the <1> pattern.",
          "Method chaining where each method returns 'this' is a <2> interface."
        ],
        blanks: [
          { a: ["Factory"], why: "Factory patterns encapsulate instantiation logic." },
          { a: ["Builder"], why: "Builder patterns construct complex objects incrementally." },
          { a: ["fluent"], why: "Fluent interfaces allow readable method chaining." }
        ]
      },
      win: "You can implement Factory and Builder patterns to replace bloated constructors with elegant creational APIs.",
      nextTasks: [
        "Implement a NotificationFactory that creates Email, SMS, or Slack notification senders.",
        "Build a fluent QueryBuilder class that constructs an SQL SELECT query string.",
        "Refactor a constructor with 6 optional parameters into the Builder pattern."
      ],
      primarySource: "Joshua Bloch, *Effective Java*, Item 2: 'Consider a builder when faced with many constructor parameters'.",
      quiz: [
        {
          q: "What is the primary problem solved by the Builder pattern?",
          a: [
            "Constructing complex objects with many optional parameters without suffering from confusing 'telescoping constructors' (e.g. Foo(1, null, null, true, null))",
            "Building physical computer servers",
            "Encrypting data in relational database tables",
            "Translating Python into C++ code"
          ],
          c: 0,
          why: "Builder provides readable, step-by-step configuration of complex objects."
        },
        {
          q: "What is the difference between a Simple Factory and the Abstract Factory pattern?",
          a: [
            "A Simple Factory creates instances of a single class family; an Abstract Factory creates families of related or dependent objects (e.g. MacButton + MacWindow)",
            "Simple Factory is for Python; Abstract Factory is for Java",
            "Simple Factory runs in memory; Abstract Factory runs on disk",
            "There is no difference between them"
          ],
          c: 0,
          why: "Abstract Factory coordinates entire product families (like cross-platform UI suites)."
        },
        {
          q: "Why does the Factory Method pattern support the Open-Closed Principle?",
          a: [
            "You can add a new product type to your system by adding a new class and factory branch without modifying existing client code",
            "It closes files after reading them",
            "It turns off compiler warnings",
            "It makes objects immutable"
          ],
          c: 0,
          why: "Callers depend on the abstract product interface; adding new products leaves callers untouched."
        },
        {
          q: "What does the .build() method typically do in a Builder pattern implementation?",
          a: [
            "Validates that all required parameters are present and consistent, then constructs and returns the finalized object",
            "Compiles the program into machine binary",
            "Deletes the builder from memory",
            "Prints the object to the screen"
          ],
          c: 0,
          why: "build() validates invariants and returns the immutable finished product."
        }
      ]
    },
    {
      n: 3,
      id: "structural-patterns-adapter-and-facade",
      title: "Structural patterns: Adapter and Facade",
      topic: "Structural Patterns",
      anim: "Puzzle",
      lede: "How do you plug an incompatible third-party library into your clean architecture? Master the Adapter pattern to bridge interfaces, and the Facade pattern to simplify complex subsystems.",
      winShort: "Implement Adapter and Facade patterns to bridge interfaces and tame complex subsystems",
      missionLink: "The primary structural patterns for integrating third-party SDKs and legacy code",
      sec1: {
        title: "Adapting interfaces and simplifying systems",
        content: `<p>Two classic structural patterns solve interface incompatibility: <b>Adapter</b> and <b>Facade</b>.</p><p>An <b>Adapter</b> acts like a physical travel plug adapter: it converts an existing incompatible interface (like a third-party Stripe SDK) into an interface your application expects (<code>PaymentGateway</code>). A <b>Facade</b> provides a simple, unified front door to a complex subsystem (like wrapping 5 video codecs, audio decoders, and file parsers behind a single <code>VideoConverter.convert(file)</code> method).</p>`,
        keyIdea: "Adapter makes an incompatible interface work; Facade simplifies a complex subsystem."
      },
      predict: {
        q: "You have an existing application expecting 'send_email(to, body)'. A new third-party vendor SDK uses 'deliver_message(recipient_email, message_payload)'. Which pattern bridges them?",
        a: [
          "The Adapter pattern (wraps the third-party SDK and translates send_email to deliver_message)",
          "The Singleton pattern",
          "The Observer pattern",
          "The Builder pattern"
        ],
        c: 0,
        why: "Adapters translate calls between incompatible interfaces without modifying either original class."
      },
      sec2: {
        title: "Adapter versus Facade comparison",
        content: `<p>Understand the intent difference: interface translation versus subsystem simplification.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Adapter Pattern", lines: ["Intent: convert interface", "makes incompatible class B conform to interface A", "1-to-1 interface translation!"] },
          { title: "Facade Pattern", lines: ["Intent: simplify complexity", "wraps 10 complex subsystem classes behind 1 simple method", "simple high-level front door!"] }
        ]
      },
      sec3: {
        title: "Tracing the Adapter translation execution",
        content: `<p>Trace how an adapter translates domain calls into vendor-specific API formats.</p>`,
      },
      trace: {
        code: [
          "class StripeAdapter(PaymentGateway):",
          "    def __init__(self, stripe_sdk): self.sdk = stripe_sdk",
          "    def charge(self, amount, user): # Domain interface",
          "        # Translates domain parameters to vendor SDK format:",
          "        return self.sdk.create_charge(amount_cents=int(amount*100), customer_id=user.stripe_id)"
        ],
        steps: [
          { line: 0, vars: { adapter: "StripeAdapter implements domain PaymentGateway interface" } },
          { line: 2, vars: { incoming: "charge(amount=50.0, user=Ada)" } },
          { line: 4, vars: { translation: "converts dollars to cents and extracts customer_id for vendor SDK" } }
        ]
      },
      practiceIntro: "Test your memory of structural patterns.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The pattern converting an incompatible interface into another is the <0> pattern.",
          "The pattern providing a simplified front door to a complex subsystem is the <1> pattern.",
          "Adapters enable third-party libraries to satisfy internal domain <2>s."
        ],
        blanks: [
          { a: ["Adapter"], why: "Adapter bridges incompatible interfaces." },
          { a: ["Facade"], why: "Facade simplifies complex subsystems." },
          { a: ["interfaces", "contracts"], why: "Adapters adapt external classes to domain contracts." }
        ]
      },
      win: "You can bridge third-party vendor libraries cleanly using Adapters and provide intuitive interfaces to complex subsystems using Facades.",
      nextTasks: [
        "Wrap a third-party SMS or payment SDK in a clean Adapter class.",
        "Create a Facade that simplifies a multi-step image uploading and resizing workflow.",
        "Explain the difference between Adapter and Facade to a peer."
      ],
      primarySource: "Erich Gamma et al., *Design Patterns: Elements of Reusable Object-Oriented Software*, 'Adapter' & 'Facade'.",
      quiz: [
        {
          q: "What is the primary difference in intent between the Adapter and Facade patterns?",
          a: [
            "An Adapter makes an existing interface match an expected interface; a Facade provides a simplified high-level interface to an entire complex subsystem",
            "Adapter is for Python; Facade is for JavaScript",
            "Adapter runs on servers; Facade runs in web browsers",
            "There is no difference between them"
          ],
          c: 0,
          why: "Adapter matches an interface (1:1 translation); Facade simplifies complexity (1:many front door)."
        },
        {
          q: "Why does using the Adapter pattern protect your codebase from third-party vendor lock-in?",
          a: [
            "Your application code depends on your own domain interface; if you switch vendors, you only rewrite the single Adapter class",
            "Vendors cannot charge fees when adapters are used",
            "Adapters encrypt the vendor code",
            "It turns off vendor tracking"
          ],
          c: 0,
          why: "Adapters localize third-party dependencies to a single boundary class, shielding the application."
        },
        {
          q: "Can a Facade be bypassed if a client genuinely needs low-level access to the subsystem?",
          a: [
            "Yes, a Facade provides a convenient shortcut for common tasks, but does not block direct access to subsystem classes when advanced features are needed",
            "No, Facades permanently lock access to subsystem classes",
            "Only on Linux computers",
            "Only with administrator permissions"
          ],
          c: 0,
          why: "Facades offer convenience, not strict encapsulation; direct access remains available if required."
        },
        {
          q: "What real-world hardware item is the classic physical analogy for the Adapter pattern?",
          a: [
            "An international electrical plug adapter allowing an American laptop to plug into a European wall socket",
            "A computer monitor screen",
            "A keyboard keycap",
            "A mouse pad"
          ],
          c: 0,
          why: "The travel adapter converts one physical prong interface to another without modifying the laptop."
        }
      ]
    },
    {
      n: 4,
      id: "proxy-and-decorator-patterns",
      title: "Proxy and Decorator patterns",
      topic: "Structural Patterns",
      anim: "Puzzle",
      lede: "Control access or add behavior? Compare the Proxy pattern (controlling access, lazy loading, caching) with the Decorator pattern (adding dynamic responsibilities).",
      winShort: "Select between Proxy and Decorator patterns to control access or extend object behaviors",
      missionLink: "Provides non-invasive interception of object operations",
      sec1: {
        title: "Same structure, different intent",
        content: `<p>The <b>Proxy</b> and <b>Decorator</b> patterns have identical structural diagrams: both wrap an underlying target object and implement the exact same interface. What separates them is their <b>intent</b>.</p><p>A <b>Decorator</b> adds <i>new responsibilities or behaviors</i> to an object dynamically (e.g. adding compression and encryption to a data stream). A <b>Proxy</b> <i>controls access</i> to the underlying object (e.g. lazy-loading a heavy 50MB image on first access, caching results, or verifying user permissions before delegating).</p>`,
        keyIdea: "Decorator adds new behavior; Proxy controls access to the underlying object."
      },
      predict: {
        q: "An object intercepts calls to a database and checks if the user has admin rights before forwarding the call. Is this a Proxy or a Decorator?",
        a: [
          "A Protection Proxy (its primary intent is controlling access to the underlying object)",
          "A Decorator",
          "A Factory",
          "An Adapter"
        ],
        c: 0,
        why: "Controlling access and enforcing authorization without changing the interface is the hallmark of a Protection Proxy."
      },
      sec2: {
        title: "Proxy archetypes",
        content: `<p>Understand the four classic real-world applications of the Proxy pattern.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Virtual Proxy", lines: ["lazy initialization", "loads heavy 50MB file only on first call"] },
          { title: "Protection Proxy", lines: ["access control & auth", "verifies permissions before forwarding"] },
          { title: "Caching Proxy", lines: ["transparent memoization", "returns cached results for identical inputs"] },
          { title: "Remote Proxy", lines: ["RPC network client", "makes remote network call look like local object"] }
        ]
      },
      sec3: {
        title: "Tracing Virtual Proxy lazy loading",
        content: `<p>Trace how a Virtual Proxy delays loading an expensive high-resolution image until render time.</p>`,
      },
      trace: {
        code: [
          "class LazyImageProxy(ImageInterface):",
          "    def __init__(self, filename): self.filename = filename; self._real_image = None",
          "    def display(self):",
          "        if not self._real_image: # lazy load on first access!",
          "            self._real_image = HighResImage(self.filename)",
          "        self._real_image.display()"
        ],
        steps: [
          { line: 1, vars: { instantiation: "proxy created in 0.001ms; 50MB image NOT loaded yet" } },
          { line: 3, vars: { on_demand: "display() called -> loads heavy image from disk only now" } },
          { line: 5, vars: { delegation: "forwards render call to real image instance" } }
        ]
      },
      practiceIntro: "Test your memory of Proxy and Decorator patterns.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The pattern whose intent is controlling access to an object is the <0> pattern.",
          "The pattern whose intent is adding dynamic behavior to an object is the <1> pattern.",
          "A proxy that defers expensive loading until first use is a <2> proxy."
        ],
        blanks: [
          { a: ["Proxy"], why: "Proxies manage and guard access." },
          { a: ["Decorator"], why: "Decorators augment object behavior." },
          { a: ["Virtual", "virtual"], why: "Virtual proxies implement lazy loading." }
        ]
      },
      win: "You can implement Virtual, Protection, and Caching Proxies to guard access to sensitive or expensive resources.",
      nextTasks: [
        "Implement a CachingProxy that caches API responses in memory using the same interface.",
        "Implement a VirtualProxy that defers opening a database connection until the first query executes.",
        "Distinguish between JavaScript's native Proxy object and the GoF design pattern."
      ],
      primarySource: "Erich Gamma et al., *Design Patterns*, 'Proxy' & 'Decorator'.",
      quiz: [
        {
          q: "What separates a Proxy from a Decorator if their class diagrams look identical?",
          a: [
            "Their architectural intent: Decorators add new responsibilities to an object; Proxies control and manage access to the object",
            "Proxies are written in C; Decorators are written in Python",
            "Proxies run in the cloud; Decorators run on mobile devices",
            "There is no difference between them"
          ],
          c: 0,
          why: "Intent defines the pattern: Decorators augment features; Proxies control access and lifecycle."
        },
        {
          q: "What is a 'Virtual Proxy'?",
          a: [
            "A placeholder object that delays the creation and loading of an expensive resource until it is actually accessed for the first time",
            "A virtual reality headset",
            "A proxy that deletes files",
            "An anonymous internet VPN"
          ],
          c: 0,
          why: "Virtual proxies optimize performance by deferring expensive object construction until first use."
        },
        {
          q: "How does JavaScript's built-in 'new Proxy(target, handler)' relate to the GoF Proxy pattern?",
          a: [
            "It is a meta-programming mechanism that intercepts fundamental operations (get, set, apply) on objects, easily implementing the GoF Proxy pattern",
            "It is completely unrelated in every way",
            "It is a tool that deletes browser cookies",
            "It is deprecated in modern ECMAScript"
          ],
          c: 0,
          why: "JS Proxy traps provide native runtime hooks to implement logging, validation, and access proxies."
        },
        {
          q: "Can a client tell whether it is interacting with a Proxy or the Real Subject if properly designed?",
          a: [
            "No, both implement the exact same interface; the client cannot tell the difference (transparency)",
            "Yes, the proxy always adds 'Proxy_' to every method name",
            "Yes, proxies run in slow motion",
            "Clients must always be rewritten to support proxies"
          ],
          c: 0,
          why: "Interface polymorphism ensures that clients treat the proxy identically to the real object."
        }
      ]
    },
    {
      n: 5,
      id: "behavioral-patterns-observer-and-pub-sub",
      title: "Behavioral patterns: Observer and Pub/Sub",
      topic: "Behavioral Patterns",
      anim: "Puzzle",
      lede: "Don't poll; notify. Discover the Observer pattern and Publisher-Subscriber (Pub/Sub): building decoupled event-driven architectures that react to state changes.",
      winShort: "Implement event-driven notification systems using the Observer and Pub/Sub patterns",
      missionLink: "The architectural foundation of reactive programming, DOM events, and message brokers",
      sec1: {
        title: "The publish-subscribe revolution",
        content: `<p>How does a subject notify 10 different components that something happened without being coupled to them? If <code>UserService</code> had to import the <code>EmailService</code>, <code>AnalyticsTracker</code>, <code>SlackNotifier</code>, and <code>AuditLogger</code>, it would become a tangled mess.</p><p>The <b>Observer Pattern</b> decouples the subject from its observers. The subject maintains an internal list of listeners (observers). When an event occurs, it broadcasts: <code>notify(event)</code>. Each observer reacts independently. The subject has zero knowledge of who is listening!</p>`,
        keyIdea: "The Observer pattern decouples event producers from event consumers using subscription lists."
      },
      predict: {
        q: "What is the key structural difference between classic Observer and Publisher-Subscriber (Pub/Sub)?",
        a: [
          "Observer maintains direct references between Subject and Observers; Pub/Sub introduces an intermediary Event Channel / Message Broker",
          "Observer is for Python; Pub/Sub is for JavaScript",
          "Pub/Sub can only transmit numbers",
          "There is no difference between them"
        ],
        c: 0,
        why: "Classic Observer holds a listener list in the subject; Pub/Sub routes events through an external message broker."
      },
      sec2: {
        title: "Observer versus Pub/Sub architecture",
        content: `<p>Observe the architectural difference when an event broker is introduced.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Observer (In-Memory)", lines: ["Subject holds observers[]", "Subject.notify() calls observer.update()", "direct in-process reference!"] },
          { title: "Pub/Sub (Brokered)", lines: ["Publisher -> Event Channel (Kafka / Redis) -> Subscribers", "publishers & subscribers know NOTHING of each other!"] }
        ]
      },
      sec3: {
        title: "Tracing an in-memory EventEmitter",
        content: `<p>Trace how an EventEmitter registers listeners and dispatches events asynchronously.</p>`,
      },
      trace: {
        code: [
          "const bus = new EventEmitter();",
          "bus.on('order:placed', (order) => mailer.sendReceipt(order));",
          "bus.on('order:placed', (order) => warehouse.dispatch(order));",
          "# In checkout service:",
          "bus.emit('order:placed', { id: 101, total: 50 });",
          "# Both mailer and warehouse fire independently! Zero coupling in checkout service!"
        ],
        steps: [
          { line: 1, vars: { listener_1: "mailer registered for order:placed" } },
          { line: 2, vars: { listener_2: "warehouse registered for order:placed" } },
          { line: 4, vars: { broadcast: "emit iterates through listener array and invokes handlers" } },
          { line: 5, vars: { outcome: "subscribers execute without checkout service importing them" } }
        ]
      },
      practiceIntro: "Test your memory of event patterns.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The pattern where a subject notifies registered listeners is the <0> pattern.",
          "The intermediary broker routing messages in decoupled architectures is an event <1>.",
          "Listeners remove themselves from notification lists by <2>scribing."
        ],
        blanks: [
          { a: ["Observer"], why: "The Observer pattern manages subscriptions." },
          { a: ["bus", "channel", "broker"], why: "Event buses/brokers decouple publishers." },
          { a: ["unsub"], why: "Unsubscribing prevents memory leaks (the Lapsed Listener problem)." }
        ]
      },
      win: "You can implement decoupled event-driven architectures using Observer and Pub/Sub event emitters.",
      nextTasks: [
        "Implement a simple EventEmitter class with on(event, fn), off(event, fn), and emit(event, data).",
        "Explain why forgetting to unsubscribe event listeners causes memory leaks in single-page apps.",
        "Decouple a billing checkout function using an event notification bus."
      ],
      primarySource: "Erich Gamma et al., *Design Patterns*, 'Observer' & Martin Fowler: *Event-Driven Architecture*.",
      quiz: [
        {
          q: "What is the 'Lapsed Listener' problem in the Observer pattern?",
          a: [
            "A memory leak occurring when an observer fails to unsubscribe from a long-lived subject, preventing the observer from being garbage-collected",
            "An observer that falls asleep during execution",
            "A network timeout on Wi-Fi",
            "A bug in the computer speaker system"
          ],
          c: 0,
          why: "The subject holds a reference to the observer; if not unsubscribed, the observer cannot be freed."
        },
        {
          q: "How does the Observer pattern support the Open-Closed Principle?",
          a: [
            "New observers can be added to subscribe to events without modifying the subject class at all",
            "It closes the application at night",
            "It turns off database updates",
            "It encrypts event messages"
          ],
          c: 0,
          why: "The subject is closed for modification; new capabilities subscribe without altering the subject."
        },
        {
          q: "What is the difference between 'Push' and 'Pull' models in the Observer pattern?",
          a: [
            "In Push, the subject passes detailed event data to observers in the notification; in Pull, the subject notifies observers and they query the subject for details",
            "Push is for mobile; Pull is for desktop",
            "Push uses git push; Pull uses git pull",
            "There is no difference between them"
          ],
          c: 0,
          why: "Push delivers full payloads directly; pull delivers a minimal ping, letting observers fetch what they need."
        },
        {
          q: "Which standard browser API is a direct implementation of the Observer pattern?",
          a: [
            "EventTarget (addEventListener and removeEventListener)",
            "localStorage",
            "document.cookie",
            "JSON.stringify"
          ],
          c: 0,
          why: "DOM addEventListener registers observer callbacks on target elements."
        }
      ]
    },
    {
      n: 6,
      id: "behavioral-patterns-command-and-state",
      title: "Behavioral patterns: Command and State",
      topic: "Behavioral Patterns",
      anim: "Puzzle",
      lede: "How do you build undo/redo, transaction queues, and complex state machines? Master the Command pattern for encapsulating actions, and the State pattern for dynamic behavior.",
      winShort: "Implement undo/redo systems using the Command pattern and state machines with the State pattern",
      missionLink: "Essential for workflow orchestration, task queues, and complex UI state models",
      sec1: {
        title: "Commands as first-class objects",
        content: `<p>Normally, calling a method executes code immediately. But what if you want to <b>queue an action to execute later</b>, log it to an audit trail, or <b>support Undo/Redo</b>?</p><p>The <b>Command Pattern</b> encapsulates an action as an object: <code>class InsertTextCommand { execute(), undo() }</code>. By storing commands in an execution history stack, implementing Undo is as simple as popping the last command and calling <code>cmd.undo()</code>! Similarly, the <b>State Pattern</b> lets an object alter its behavior when its internal state changes (e.g. Draft &rarr; Moderation &rarr; Published) without messy if/else statements.</p>`,
        keyIdea: "Command turns actions into undoable objects; State turns internal state into polymorphic classes."
      },
      predict: {
        q: "How does the Command pattern implement multi-level Undo in an application?",
        a: [
          "It maintains a stack of executed command objects; pressing Undo pops the command and calls its undo() method",
          "It rolls back the computer operating system to a backup point",
          "It reboots the computer hardware",
          "It deletes the user's hard drive"
        ],
        c: 0,
        why: "Each command object stores the reverse operation in its undo() method, enabling infinite undo stacks."
      },
      sec2: {
        title: "The State pattern versus conditional flags",
        content: `<p>Contrast messy if/else state checks with clean polymorphic State pattern classes.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Messy Conditionals", lines: ["if (status == 'DRAFT') ...", "else if (status == 'REVIEW') ...", "else if (status == 'PUBLISHED') ...", "scattered switch statements everywhere!"] },
          { title: "State Pattern (Polymorphic)", lines: ["class Document { state: DocumentState }", "DraftState -> ReviewState -> PublishedState", "each state class encapsulates its own rules!"] }
        ]
      },
      sec3: {
        title: "Tracing Command execution and Undo",
        content: `<p>Trace how a text editor executes a command and rolls it back cleanly.</p>`,
      },
      trace: {
        code: [
          "class CutCommand(Command):",
          "    def __init__(self, editor): self.editor = editor; self.backup = ''",
          "    def execute(self): self.backup = self.editor.get_selection(); self.editor.delete_selection()",
          "    def undo(self): self.editor.insert_text(self.backup)",
          "# User presses Ctrl-Z -> history.pop().undo() restores text perfectly in 0.001ms!"
        ],
        steps: [
          { line: 0, vars: { command_created: "CutCommand captures editor context and backup buffer" } },
          { line: 2, vars: { executed: "execute() saves deleted text and removes selection" } },
          { line: 3, vars: { undo_capability: "undo() restores saved backup text flawlessly" } }
        ]
      },
      practiceIntro: "Test your memory of Command and State patterns.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Encapsulating a request as an object with execute() and undo() is the <0> pattern.",
          "Allowing an object to alter its behavior when internal state changes is the <1> pattern.",
          "An undo stack stores executed commands in a <2> (LIFO) data structure."
        ],
        blanks: [
          { a: ["Command"], why: "The Command pattern encapsulates actions." },
          { a: ["State"], why: "The State pattern encapsulates state transitions." },
          { a: ["stack"], why: "Stacks provide natural LIFO history tracking." }
        ]
      },
      win: "You can implement undoable command queues and model complex lifecycle workflows using the State pattern.",
      nextTasks: [
        "Implement a Command pattern undo stack for a simple text or counter application.",
        "Refactor an entity with a 'status' string (draft, review, published) into the State pattern.",
        "Explain how message queues (like Celery or SQS) embody the Command pattern over the network."
      ],
      primarySource: "Erich Gamma et al., *Design Patterns*, 'Command' & 'State'.",
      quiz: [
        {
          q: "What is the primary role of the Command pattern?",
          a: [
            "Encapsulates a request as an object, thereby letting you parameterize clients with different requests, queue requests, and support undoable operations",
            "Executes commands in the Linux bash terminal",
            "Encrypts database passwords",
            "Compresses image files"
          ],
          c: 0,
          why: "Turning actions into objects enables queuing, scheduling, logging, and undo/redo."
        },
        {
          q: "What is the difference between the State pattern and the Strategy pattern if their class diagrams are identical?",
          a: [
            "In Strategy, the client chooses the strategy upfront; in State, the context transitions between different state classes automatically as its internal state changes",
            "Strategy is for Python; State is for Java",
            "Strategy runs on disk; State runs in memory",
            "There is no difference between them"
          ],
          c: 0,
          why: "Intent differentiates them: Strategy is pluggable algorithms; State models dynamic lifecycle transitions."
        },
        {
          q: "How does the State pattern adhere to the Single Responsibility Principle?",
          a: [
            "It isolates the behavior and validation rules of each individual state into its own dedicated class",
            "It allows states to be saved to database tables",
            "It eliminates the need for unit testing",
            "It makes functions smaller by deleting code"
          ],
          c: 0,
          why: "Each state class has one reason to change: when the business rules for that specific state change."
        },
        {
          q: "What is a 'Macro Command' (or Composite Command)?",
          a: [
            "A command that contains and executes a sequential list of other commands in a batch (a transaction script)",
            "A command written in C++ macros",
            "A command that runs on supercomputers",
            "A command that takes more than five minutes to execute"
          ],
          c: 0,
          why: "Composite commands execute multiple sub-commands in order, like a recorded macro."
        }
      ]
    },
    {
      n: 7,
      id: "the-singleton-pattern-and-why-it-is-mostly-an-antipattern",
      title: "The Singleton pattern and why it is mostly an antipattern",
      topic: "Pattern Overuse & Real-World Craft",
      anim: "Puzzle",
      lede: "The most famous pattern is also the most abused. Discover the Singleton pattern, why it acts as a glorified global variable that breaks unit testing, and how to use it safely.",
      winShort: "Evaluate Singleton trade-offs and replace global singletons with dependency injection",
      missionLink: "Teaches critical evaluation of design patterns rather than dogmatic adoption",
      sec1: {
        title: "The dark side of the Singleton",
        content: `<p>The <b>Singleton Pattern</b> ensures that a class has only one instance and provides a global access point to it: <code>Database.getInstance()</code>. It is the easiest pattern to understand, which is why beginners use it everywhere.</p><p>However, modern software engineering classifies Singleton as an <b>antipattern</b> in most cases. Why? <b>Because it is a glorified global variable!</b> It introduces hidden dependencies, creates tight coupling, and destroys automated unit testing: state leaks across tests, making tests order-dependent and flaky.</p>`,
        keyIdea: "Singletons introduce hidden global state that breaks test isolation and tight-couples classes."
      },
      predict: {
        q: "Why do singletons cause automated unit tests to fail intermittently when tests run in random order?",
        a: [
          "State modified by Test A lingers in the global singleton instance, polluting the environment for Test B",
          "Unit test runners forbid the word Singleton",
          "Singletons use too much hard drive space",
          "Singletons cannot run in test environments"
        ],
        c: 0,
        why: "Global mutable state persists across test executions, causing order-dependent test pollution."
      },
      sec2: {
        title: "Singleton versus Dependency Injection",
        content: `<p>Contrast the hidden coupling of global Singletons with the testable isolation of DI singletons.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Global Singleton (Antipattern)", lines: ["class UserService {", "  db = Database.getInstance()", "hidden coupling, global state, untestable!"] },
          { title: "DI Managed Singleton (Clean)", lines: ["class UserService(db) { ... }", "Container manages single instance lifetime", "pass MockDatabase() in tests effortlessly!"] }
        ]
      },
      sec3: {
        title: "Tracing the thread-safe Double-Checked Locking trap",
        content: `<p>Trace the historic complexity of implementing a thread-safe singleton in multi-threaded runtimes.</p>`,
      },
      trace: {
        code: [
          "# Thread-safe Singleton requires complex locks:",
          "class DatabaseSingleton:",
          "    _instance = None; _lock = Lock()",
          "    @classmethod",
          "    def get_instance(cls):",
          "        if not cls._instance: # First check without lock",
          "            with cls._lock:   # Acquire lock",
          "                if not cls._instance: cls._instance = cls() # Double check!",
          "        return cls._instance"
        ],
        steps: [
          { line: 2, vars: { lock: "threading.Lock required to prevent race conditions" } },
          { line: 5, vars: { check_1: "avoids locking on repeat calls" } },
          { line: 6, vars: { double_check: "double-checked locking prevents duplicate instantiation" } },
          { line: 8, vars: { complexity: "massive boilerplate compared to simple dependency injection!" } }
        ]
      },
      practiceIntro: "Test your memory of Singleton trade-offs.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The pattern ensuring a class has only one global instance is the <0> pattern.",
          "Singletons harm unit testing because they introduce global mutable <1>.",
          "Instead of a class enforcing its own singleton, let a <2> container manage its lifetime."
        ],
        blanks: [
          { a: ["Singleton"], why: "Singleton restricts instantiation to one instance." },
          { a: ["state"], why: "Global mutable state breaks test isolation." },
          { a: ["DI", "dependency injection"], why: "Containers manage singletons without global access." }
        ]
      },
      win: "You can evaluate when a singleton is truly necessary and refactor global singletons into testable, injected services.",
      nextTasks: [
        "Audit a global Singleton in your project and refactor it into an injected collaborator.",
        "Demonstrate how two unit tests corrupt each other when sharing a mutable global singleton.",
        "Explain the difference between a Singleton class and a Singleton lifetime in a DI container."
      ],
      primarySource: "Miško Hevery: *Singletons are Pathological Liars* (Google Testing Blog, 2008).",
      quiz: [
        {
          q: "Why did Google's testing expert Miško Hevery call Singletons 'Pathological Liars'?",
          a: [
            "Constructors of classes using singletons hide their true dependencies, claiming to take zero arguments while secretly depending on global state",
            "Singletons delete source code files",
            "Singletons tell lies to the compiler",
            "Singletons are not supported in Google Cloud"
          ],
          c: 0,
          why: "Classes using singletons hide their collaborators, making dependencies invisible to callers."
        },
        {
          q: "What is the difference between the Singleton pattern and a Singleton lifetime in a DI container?",
          a: [
            "The pattern enforces global access via a static method (tight coupling); a DI container manages instance lifetime while keeping classes decoupled",
            "They are completely identical",
            "The pattern is for Java; DI lifetime is for Python",
            "DI lifetime runs in the browser"
          ],
          c: 0,
          why: "DI singletons keep classes testable: classes accept dependencies via constructor without knowing they are singletons."
        },
        {
          q: "When is a Singleton pattern actually legitimate and acceptable?",
          a: [
            "When representing a truly unique hardware device (like a printer spooler) or an immutable read-only logging facility with zero state mutation",
            "For storing user shopping cart data",
            "For every single service in the application",
            "Never under any circumstances"
          ],
          c: 0,
          why: "Immutable resources or true hardware singletons are legitimate candidates for single instances."
        },
        {
          q: "What is the 'Null Object' pattern?",
          a: [
            "A design pattern that provides a do-nothing object instead of null, eliminating tedious 'if (obj !== null)' checks",
            "An error that happens when memory is full",
            "A database primary key set to null",
            "A technique to delete objects from memory"
          ],
          c: 0,
          why: "Null Objects implement the interface with neutral/empty behavior, preventing NullPointerExceptions."
        }
      ]
    },
    {
      n: 8,
      id: "patternitis-and-knowing-when-not-to-use-patterns",
      title: "Patternitis and knowing when not to use patterns",
      topic: "Pattern Overuse & Real-World Craft",
      anim: "Puzzle",
      lede: "The disease of over-design. Learn to recognize 'Patternitis', why junior developers over-complicate simple code, and how to design for simplicity and clarity.",
      winShort: "Diagnose and prevent pattern overuse by applying simplicity and YAGNI principles",
      missionLink: "Cultivates mature engineering judgment over intellectual showing off",
      sec1: {
        title: "The disease of over-design",
        content: `<p>Every developer who reads the Gang of Four book catches a temporary disease known as <b>Patternitis</b>. Suddenly, every simple three-line function becomes an <code>AbstractFactoryStrategyVisitorObserverAdapter</code>! A simple shopping cart is buried under 15 layers of indirection.</p><p>Design patterns are <b>solutions to specific, proven problems</b>. If the problem does not exist, the pattern adds pure architectural debt and cognitive overhead. The mark of a true senior engineer is not how many patterns they can pack into a codebase, but <b>how simple they can keep the code while still solving the business problem</b>.</p>`,
        keyIdea: "Design patterns are solutions to specific problems; applying them without the problem is over-engineering."
      },
      predict: {
        q: "What is 'Patternitis' in software engineering culture?",
        a: [
          "The tendency of developers to over-engineer simple problems by forcing design patterns where simple code would suffice",
          "An inflammation of the wrists from typing",
          "A bug in the compiler",
          "A security vulnerability in web browsers"
        ],
        c: 0,
        why: "Patternitis occurs when developers treat patterns as goals rather than contextual tools."
      },
      sec2: {
        title: "The simplicity hierarchy",
        content: `<p>Choose the simplest solution that solves the current business problem cleanly.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Level 1: Plain Function", lines: ["simplest, zero indirection", "a simple pure function solves 80% of problems!"] },
          { title: "Level 2: Parameter / Strategy", lines: ["introduce variability when needed", "pass a callback function"] },
          { title: "Level 3: Full GoF Pattern", lines: ["use only when complexity demands it", "e.g. multi-step lifecycle state machines"] }
        ]
      },
      sec3: {
        title: "Tracing the cure for Patternitis",
        content: `<p>Trace how replacing an over-engineered Factory with a simple dictionary lookup deletes 80 lines of code.</p>`,
      },
      trace: {
        code: [
          "# Over-engineered: AbstractTaxCalculatorFactory, CanadianTaxStrategy, UsTaxStrategy...",
          "# 6 classes, 4 interfaces, 90 lines of boilerplate to calculate 2 percentages!",
          "# The Cure (Simple Dictionary Mapping):",
          "TAX_RATES = {'US': 0.08, 'CA': 0.12, 'UK': 0.20}",
          "def get_tax(subtotal, country): return subtotal * TAX_RATES.get(country, 0.0)",
          "# Result: 2 lines of readable, testable code that solves the exact same problem!"
        ],
        steps: [
          { line: 0, vars: { over_design: "90 lines of pattern boilerplate for static lookup" } },
          { line: 3, vars: { simple_refactoring: "dictionary mapping replaces 6 classes" } },
          { line: 5, vars: { outcome: "clarity restored; maintainability maximized" } }
        ]
      },
      practiceIntro: "Test your memory of design pattern discipline.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The over-application of design patterns to simple problems is <0>.",
          "The principle 'Keep It Simple, Stupid' is abbreviated as <1>.",
          "Patterns should be introduced through <2> when real friction appears, not upfront."
        ],
        blanks: [
          { a: ["Patternitis"], why: "Patternitis describes premature pattern addiction." },
          { a: ["KISS"], why: "KISS favors simplicity over cleverness." },
          { a: ["refactoring"], why: "Refactor toward patterns as code evolves." }
        ]
      },
      win: "You can balance design pattern knowledge with radical simplicity, choosing the right tool for the job without over-engineering.",
      nextTasks: [
        "Audit a complex class in your codebase and ask: 'Could this be replaced with a simple dictionary or function?'",
        "Refactor an over-engineered factory into a clean lookup map.",
        "Embrace the philosophy: 'Make it work, make it right, make it fast' in that strict order."
      ],
      primarySource: "Kevlin Henney, *97 Things Every Programmer Should Know*, 'Simplicity Before Generality' (O'Reilly).",
      quiz: [
        {
          q: "When should a design pattern be introduced into a codebase?",
          a: [
            "Through refactoring when actual complexity, duplication, or variability emerges and genuinely demands it",
            "At the very beginning of a project before writing any business logic",
            "Whenever you want to impress senior managers",
            "On every single function without exception"
          ],
          c: 0,
          why: "Patterns should emerge through refactoring to solve proven pain points, not speculative guesswork."
        },
        {
          q: "What is the KISS principle in software engineering?",
          a: [
            "Keep It Simple, Stupid: avoid unnecessary complexity and favor straightforward solutions",
            "Keep Interfaces Strictly Synchronous",
            "Keyboard Input Standardization System",
            "Kernel Instruction System Security"
          ],
          c: 0,
          why: "KISS reminds engineers that simple code is easier to read, test, and maintain."
        },
        {
          q: "Why is a simple dictionary lookup often better than a full Factory Method class hierarchy?",
          a: [
            "A dictionary accomplishes the mapping in two lines of code without creating multiple classes, interfaces, and boilerplate files",
            "Dictionaries run on quantum computers",
            "Factories are forbidden in Python",
            "Dictionaries delete memory leaks"
          ],
          c: 0,
          why: "When logic is static data mapping, a dictionary provides the simplest possible solution."
        },
        {
          q: "What is the ultimate mark of maturity in software architecture?",
          a: [
            "The ability to write simple, readable, maintainable code and resisting the urge to show off unnecessary complexity",
            "Using all 23 Gang of Four patterns in a single project",
            "Writing functions that have no comments",
            "Writing code using only single-letter variables"
          ],
          c: 0,
          why: "Simplicity is the hardest discipline; true craftsmanship solves hard problems with simple, elegant designs."
        }
      ]
    }
  ]
};

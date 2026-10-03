"use strict";

module.exports = {
  id: "composition-vs-inheritance",
  title: "Composition vs Inheritance",
  num: 44,
  emoji: "⚖️",
  desc: "When to reuse by containing and when to reuse by deriving — and why composition usually wins.",
  mission: `# Mission — Composition vs Inheritance

## Why this course exists

'Favor object composition over class inheritance' is the most famous design advice from the Gang of Four's 1994 classic book. Yet generations of developers still fall into the inheritance trap: building rigid 8-level class hierarchies (Animal &rarr; Mammal &rarr; Canine &rarr; Dog &rarr; HuntingDog) that shatter the moment requirements change. This course explores why class inheritance is the tightest form of coupling in object-oriented programming, how the Fragile Base Class problem strikes, and how composition ('has-a') provides flexible, dynamic behavior reuse.

## What the learner can do at the end

- Distinguish 'is-a' relationships (inheritance) from 'has-a' relationships (composition).
- Identify and avoid the Fragile Base Class problem and deep inheritance tree hierarchies.
- Refactor brittle subclass hierarchies into modular, composable component models.
- Apply the Liskov Substitution Principle (LSP) to ensure subclasses remain genuinely substitutable.
- Implement mixins, traits, and strategy delegation to reuse behavior without derivation.

## What this course is NOT

- Not an anti-OOP manifesto. Inheritance has legitimate uses (framework bases, AST nodes).
- Not a language-specific feature walkthrough. It focuses on object-oriented architectural design.

## Success looks like

When designing a system with polymorphic behaviors (like characters in a game or payment processors in a store), the learner chooses composition by default, modeling capabilities as pluggable components rather than rigid subclass trees.
`,
  notes: `# Notes — Composition vs Inheritance

## Decisions
- Group into four themes: The Inheritance Trap, The Fragile Base Class Problem, Composition & Delegation, and The Liskov Substitution Principle.
- Use classic real-world examples: the Game Character capability problem, the Stack extending Vector anti-pattern.
`,
  resources: `# Resources — Composition vs Inheritance

## Knowledge (primary sources)
- Erich Gamma et al., *Design Patterns: Elements of Reusable Object-Oriented Software* (Addison-Wesley, 1994).
- Joshua Bloch, *Effective Java*, Item 18: 'Favor composition over inheritance'.
- Barbara Liskov & Jeannette Wing, *A Behavioral Notion of Subtyping* (ACM TOPLAS, 1994).

## Wisdom
- Inheritance is about what an object IS; composition is about what an object HAS or DOES. When in doubt, prefer has-a over is-a.
`,
  cheatsheetSections: [
    {
      title: "is-a vs has-a",
      label: "Conceptual relationship test",
      code: `Inheritance (is-a):
  class Dog extends Animal {}
  // Rigid compile-time binding; subclasses inherit everything, wanted or not!

Composition (has-a):
  class Dog {
    constructor(barkBehavior, runBehavior) {
      this.barker = barkBehavior; // pluggable capability!
      this.runner = runBehavior;
    }
  }`,
      lessonN: 1,
      lessonSlug: "the-inheritance-trap-and-is-a-versus-has-a",
      lessonTitle: "The inheritance trap and 'is-a' versus 'has-a'"
    },
    {
      title: "The Fragile Base Class Problem",
      label: "Subclass breakage through parent edits",
      code: `// Parent class adds a new method or changes internal calling order:
class CustomSet extends HashSet {
  // Overriding add() breaks if addAll() calls add() internally!
  // Subclass logic depends on private implementation details of parent.
}`,
      lessonN: 2,
      lessonSlug: "the-fragile-base-class-problem",
      lessonTitle: "The fragile base class problem"
    },
    {
      title: "Forwarding & Delegation",
      label: "Safe wrapper pattern",
      code: `// Safe Wrapper using Composition + Forwarding:
class InstrumentedSet {
  constructor(set) { this.set = set; this.addCount = 0; }
  add(item) { this.addCount++; return this.set.add(item); }
  addAll(items) { this.addCount += items.length; return this.set.addAll(items); }
}`,
      lessonN: 4,
      lessonSlug: "delegation-and-the-wrapper-pattern",
      lessonTitle: "Delegation and the wrapper pattern"
    },
    {
      title: "Liskov Substitution Principle",
      label: "The 'L' in SOLID",
      code: `// The Classic Violation: Square extends Rectangle
// A Rectangle promises: setWidth(w) leaves height unchanged.
// A Square breaks this contract: setWidth(w) ALSO changes height!
// Square is NOT substitutable for Rectangle!`,
      lessonN: 6,
      lessonSlug: "the-liskov-substitution-principle-lsp",
      lessonTitle: "The Liskov Substitution Principle (LSP)"
    }
  ],
  glossaryGroups: [
    {
      id: "inheritance-basics",
      title: "Inheritance & The Coupling Trap",
      terms: [
        { term: "Inheritance", def: "A mechanism where a new class derives properties and behaviors from an existing base class (is-a relationship).", lesson: 1, tags: ["oop"] },
        { term: "Composition", def: "A design technique combining simple independent objects to build complex behaviors (has-a relationship).", lesson: 1, tags: ["oop"] },
        { term: "Tight coupling", def: "The condition where a subclass is intimately dependent on the internal implementation mechanics of its base class.", lesson: 1, tags: ["coupling"] },
        { term: "Class explosion", def: "An exponential proliferation of subclasses trying to represent every combination of features (e.g. FlyingSwimmingBird).", lesson: 2, tags: ["smells"] }
      ]
    },
    {
      id: "fragile-base",
      title: "The Fragile Base Class Problem",
      terms: [
        { term: "Fragile base class", def: "A fundamental architectural flaw where seemingly safe modifications to a base class break subclasses unexpectedly.", lesson: 2, tags: ["antipattern"] },
        { term: "Encapsulation breach", def: "The loss of private encapsulation occurring when subclasses depend on base class internal execution order.", lesson: 2, tags: ["oop"] },
        { term: "Override", def: "Providing a specialized implementation of a method that is already defined in a superclass.", lesson: 3, tags: ["oop"] },
        { term: "super keyword", def: "A keyword used inside a subclass to invoke constructor or method implementations from the parent base class.", lesson: 3, tags: ["oop"] }
      ]
    },
    {
      id: "delegation-wrappers",
      title: "Delegation & Wrapper Patterns",
      terms: [
        { term: "Delegation", def: "A technique where an object handles a request by handing off execution to a secondary collaborator object.", lesson: 4, tags: ["patterns"] },
        { term: "Wrapper pattern", def: "An object containing an underlying instance, intercepting calls to add features before delegating.", lesson: 4, tags: ["patterns"] },
        { term: "Strategy pattern", def: "A behavioral pattern defining a family of interchangeable algorithms encapsulated in pluggable classes.", lesson: 5, tags: ["patterns"] },
        { term: "Mixin", def: "A class or trait providing methods that can be borrowed or mixed into other classes without full inheritance.", lesson: 5, tags: ["oop"] }
      ]
    },
    {
      id: "liskov-substitution",
      title: "LSP & Legitimate Inheritance",
      terms: [
        { term: "Liskov Substitution Principle", def: "LSP: Subtypes must be substitutable for their base types without altering program correctness.", lesson: 6, tags: ["solid"] },
        { term: "Precondition", def: "A requirement that must be satisfied before a method executes; subtypes cannot strengthen preconditions.", lesson: 6, tags: ["contracts"] },
        { term: "Postcondition", def: "A guarantee that must hold true after a method finishes; subtypes cannot weaken postconditions.", lesson: 6, tags: ["contracts"] },
        { term: "Abstract class", def: "A base class that cannot be instantiated directly, designed strictly to be subclassed with abstract methods.", lesson: 7, tags: ["oop"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "the-inheritance-trap-and-is-a-versus-has-a",
      title: "The inheritance trap and 'is-a' versus 'has-a'",
      topic: "Inheritance & The Coupling Trap",
      anim: "Scale",
      lede: "Is a duck an animal, or does a duck have flying and quacking behaviors? Discover why modeling real-world taxonomies with class inheritance leads to architectural paralysis.",
      winShort: "Distinguish between 'is-a' inheritance and 'has-a' composition modeling",
      missionLink: "The foundational mental model distinguishing flexible systems from rigid hierarchies",
      sec1: {
        title: "The real-world taxonomy trap",
        content: `<p>When people learn object-oriented programming, they are taught biology examples: <code>Dog extends Animal</code>, <code>Cat extends Animal</code>. This leads developers to believe that inheritance is the primary way to model the world.</p><p>In reality, <b>class inheritance is the tightest form of coupling in all of object-oriented design</b>. When you inherit, you inherit <i>everything</i>: all fields, all methods, and all bugs, whether you want them or not. Furthermore, the binding is locked at compile-time: an object cannot change its superclass while running!</p>`,
        keyIdea: "Inheritance binds classes at compile-time; composition connects objects dynamically at runtime."
      },
      predict: {
        q: "What happens when you try to model a character that can both 'Fly' and 'Swim' using single inheritance?",
        a: [
          "You face the Deadly Diamond problem or are forced to duplicate code because a class cannot inherit from two parent branches",
          "The programming language compiler automatically merges the code with AI",
          "The computer turns off",
          "The classes run in parallel"
        ],
        c: 0,
        why: "Hierarchical trees cannot represent multi-dimensional capabilities without massive code duplication."
      },
      sec2: {
        title: "is-a versus has-a",
        content: `<p>Contrast the rigidity of subclassing with the modular freedom of component composition.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Inheritance (is-a)", lines: ["class FlyingMonster extends Monster", "rigid compile-time hierarchy", "subclass inherits all parent baggage"] },
          { title: "Composition (has-a)", lines: ["class Monster { capabilities: [] }", "monster.add(new FlyingBehavior())", "capabilities swappable at runtime!"] }
        ]
      },
      sec3: {
        title: "Tracing runtime behavior switching",
        content: `<p>Trace how composition allows an entity to alter its behavior while the application is running.</p>`,
      },
      trace: {
        code: [
          "# Composition allows dynamic runtime swapping:",
          "hero = Player(movement=WalkingBehavior())",
          "hero.move() # walks across grass",
          "# Player picks up a jetpack item in game:",
          "hero.movement = FlyingBehavior() # swapped in 0.001ms!",
          "hero.move() # now flies through the air! (Impossible with rigid class inheritance)"
        ],
        steps: [
          { line: 1, vars: { initial_behavior: "hero has WalkingBehavior" } },
          { line: 4, vars: { runtime_swap: "movement collaborator replaced with FlyingBehavior" } },
          { line: 5, vars: { dynamic_execution: "behavior changed dynamically without mutating player class" } }
        ]
      },
      practiceIntro: "Test your memory of inheritance versus composition.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Class inheritance represents an <0>-a relationship.",
          "Object composition represents a <1>-a relationship.",
          "The Gang of Four principle states: favor object composition over class <2>."
        ],
        blanks: [
          { a: ["is"], why: "is-a represents taxonomic inheritance." },
          { a: ["has"], why: "has-a represents compositional containment." },
          { a: ["inheritance"], why: "Favor composition over inheritance is the golden rule." }
        ]
      },
      win: "You can evaluate relationship models and default to composition ('has-a') to build flexible, runtime-swappable architectures.",
      nextTasks: [
        "Audit a 3-level class hierarchy in your project and identify if capabilities can be modeled as components.",
        "Refactor an inheritance tree into a parent class that holds pluggable strategy objects.",
        "Read Item 18 ('Favor composition over inheritance') in Joshua Bloch's *Effective Java*."
      ],
      primarySource: "Erich Gamma et al., *Design Patterns: Elements of Reusable Object-Oriented Software*, Chapter 1: 'Favoring Object Composition over Class Inheritance'.",
      quiz: [
        {
          q: "Why is class inheritance described as 'white-box reuse'?",
          a: [
            "Subclasses are exposed to the internal private implementation details of their superclass, violating encapsulation",
            "Because code must be printed on white paper",
            "Because it only works in light theme IDEs",
            "Because it runs without computer memory"
          ],
          c: 0,
          why: "In inheritance, the parent class's internal details are visible and leak to subclasses (white-box)."
        },
        {
          q: "Why is object composition described as 'black-box reuse'?",
          a: [
            "Objects interact strictly through well-defined public interfaces, without exposing internal implementation details",
            "Because the code is encrypted in binary",
            "Because it only runs inside airplane flight recorders",
            "Because it runs in dark mode"
          ],
          c: 0,
          why: "In composition, objects interact through interfaces without knowing how collaborators are implemented."
        },
        {
          q: "What is 'Class Explosion' in deep inheritance trees?",
          a: [
            "The exponential multiplication of subclasses required to support every permutation of features (e.g. ElectricFlyingCar, GasSwimmingCar)",
            "A compile error that deletes files",
            "A computer processor overheating from too many classes",
            "A database running out of disk space"
          ],
          c: 0,
          why: "Inheritance hierarchies multiply exponentially when trying to combine multiple independent traits."
        },
        {
          q: "Can an object change its superclass while running in standard object-oriented languages?",
          a: [
            "No, inheritance binds types permanently at compile-time; composition allows swapping behaviors dynamically at runtime",
            "Yes, by calling object.changeClass()",
            "Only on Linux computers",
            "Yes, if the class has fewer than ten methods"
          ],
          c: 0,
          why: "Subclass inheritance is static and fixed at compile-time; composition is dynamic and mutable."
        }
      ]
    },
    {
      n: 2,
      id: "the-fragile-base-class-problem",
      title: "The fragile base class problem",
      topic: "The Fragile Base Class Problem",
      anim: "Scale",
      lede: "You edit one private method in a base class, and five innocent subclasses break. Explore the Fragile Base Class problem and Joshua Bloch's famous CustomSet counter failure.",
      winShort: "Diagnose and explain the Fragile Base Class problem in subclass hierarchies",
      missionLink: "The architectural flaw that makes deep class inheritance dangerous to maintain",
      sec1: {
        title: "The innocent parent edit",
        content: `<p>The <b>Fragile Base Class Problem</b> is an architectural nightmare: seemingly safe, benign modifications to a base class can silently cause unexpected regressions and bugs in derived subclasses.</p><p>Joshua Bloch documented the classic example: you subclass <code>HashSet</code> to count how many items were added (<code>CustomSet</code>). You override <code>add()</code> to increment a counter. But in the base class, <code>addAll()</code> calls <code>add()</code> internally! When you call <code>addAll([1, 2, 3])</code>, your counter increments by 6 instead of 3! <b>Subclasses are vulnerable to the private implementation choices of their parents.</b></p>`,
        keyIdea: "Subclasses break when base classes modify internal self-use method invocations."
      },
      predict: {
        q: "In Joshua Bloch's HashSet example, why did overriding add() and addAll() double-count added items?",
        a: [
          "Because the superclass's addAll() method internally looped and called add(), triggering the subclass override a second time",
          "Because Java integers multiply automatically",
          "Because the computer RAM was corrupted",
          "Because HashSet is not thread-safe"
        ],
        c: 0,
        why: "Internal self-use of methods in the superclass causes subclass overrides to fire repeatedly."
      },
      sec2: {
        title: "The Fragile Base Class trap",
        content: `<p>Observe how internal parent implementation details leak into child behavior.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Base: HashSet", lines: ["addAll(items) {", "  for item in items: this.add(item) # hidden self-use!", "}"] },
          { title: "Child: CustomSet", lines: ["override add(): count++", "override addAll(): count += items.len", "Result: count is DOUBLED! (broken!)"] }
        ]
      },
      sec3: {
        title: "Tracing the double-count bug",
        content: `<p>Trace the execution steps demonstrating how self-use in the parent corrupts subclass accounting.</p>`,
      },
      trace: {
        code: [
          "custom_set = CustomSet() # count = 0",
          "custom_set.addAll([1, 2, 3])",
          "# 1. Subclass addAll runs: count += 3 (count = 3)",
          "# 2. Subclass calls super.addAll([1, 2, 3])",
          "# 3. Super addAll loops: calls this.add(1), this.add(2), this.add(3)",
          "# 4. Subclass add() override fires on each call: count increments 3 MORE times!",
          "# Final count = 6! (Double counting bug due to fragile base class)"
        ],
        steps: [
          { line: 0, vars: { initial: "count = 0" } },
          { line: 2, vars: { step_1: "custom addAll adds 3" } },
          { line: 4, vars: { hidden_loop: "super calls overridden add() three times" } },
          { line: 6, vars: { bug: "count reaches 6 instead of 3" } }
        ]
      },
      practiceIntro: "Test your memory of the Fragile Base Class problem.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "When parent changes break child classes, it is the <0> Base Class problem.",
          "When a method in a class calls another method in the same class, it is <1>-use.",
          "Subclassing breaks <2> because the child depends on parent implementation details."
        ],
        blanks: [
          { a: ["Fragile"], why: "Fragile base classes cause unexpected regressions." },
          { a: ["self"], why: "Internal self-use creates subtle override traps." },
          { a: ["encapsulation"], why: "Inheritance exposes internal implementation mechanics." }
        ]
      },
      win: "You can identify the Fragile Base Class problem and avoid building inheritance hierarchies vulnerable to parent self-use changes.",
      nextTasks: [
        "Read Item 18 in Joshua Bloch's *Effective Java* to review the InstrumentedHashSet case study.",
        "Demonstrate how composition and forwarding fixes the double-counting bug completely.",
        "Audit a class hierarchy to see if any subclass overrides depend on parent internal calling order."
      ],
      primarySource: "Joshua Bloch, *Effective Java* (3rd Edition, Addison-Wesley), Item 18: 'Favor composition over inheritance'.",
      quiz: [
        {
          q: "What is the 'Fragile Base Class' problem?",
          a: [
            "A design flaw where modifications to a base class unintentionally break derived subclasses because subclasses depend on parent implementation details",
            "A base class that has too many unit tests",
            "A class that cannot be saved to disk",
            "An error that happens when compiling C++ code"
          ],
          c: 0,
          why: "It describes the fragility of inheritance when superclasses evolve without knowing child assumptions."
        },
        {
          q: "Why does class inheritance break object-oriented encapsulation?",
          a: [
            "Subclasses must know how the parent implements its methods (e.g. does addAll call add?) to avoid duplicate accounting bugs",
            "Inheritance makes all private fields public",
            "Inheritance deletes comments",
            "Inheritance is forbidden by security standards"
          ],
          c: 0,
          why: "A subclass is coupled to the internal execution sequence of its superclass, violating black-box boundaries."
        },
        {
          q: "How does Java's Stack class extending Vector illustrate a historic inheritance mistake?",
          a: [
            "Stack is a LIFO structure, but because it inherits from Vector, users can call insertElementAt(index) and violate LIFO rules completely!",
            "Stack cannot store numbers",
            "Vector was deleted from Java",
            "Stack requires an internet connection"
          ],
          c: 0,
          why: "Inheriting gave Stack 50 Vector methods that allow breaking fundamental LIFO stack integrity."
        },
        {
          q: "How do modern languages like Kotlin, C#, and Java mitigate the fragile base class problem?",
          a: [
            "By making classes and methods 'final' (or non-open) by default, requiring explicit author permission to subclass",
            "By banning all object-oriented programming",
            "By making all variables global",
            "By deleting the extends keyword"
          ],
          c: 0,
          why: "Classes closed/final by default prevent uncontrolled subclassing and fragile base class traps."
        }
      ]
    },
    {
      n: 3,
      id: "the-deadly-diamond-of-death",
      title: "The Deadly Diamond of Death",
      topic: "The Fragile Base Class Problem",
      anim: "Scale",
      lede: "What happens when Class D inherits from both Class B and Class C, which both inherit from Class A? Discover the Deadly Diamond of multiple inheritance and Method Resolution Order.",
      winShort: "Explain the multiple inheritance Diamond Problem and Python's C3 Method Resolution Order",
      missionLink: "Explains why most modern programming languages forbid multiple class inheritance",
      sec1: {
        title: "The ambiguity of the diamond",
        content: `<p>In languages that support multiple class inheritance (like C++ or Python), a classic architectural trap emerges: <b>The Deadly Diamond of Death</b>.</p><p>Class <code>A</code> defines a method <code>save()</code>. Class <code>B</code> and Class <code>C</code> both inherit from <code>A</code> and both override <code>save()</code> with different logic. Now, Class <code>D</code> inherits from both <code>B</code> and <code>C</code>. When you call <code>d.save()</code>, <b>which version executes? B's or C's?</b> The ambiguity creates chaos.</p>`,
        keyIdea: "The Diamond Problem creates method ambiguity when multiple parent classes inherit from a common ancestor."
      },
      predict: {
        q: "Why do languages like Java, C#, and Rust forbid multiple class inheritance entirely?",
        a: [
          "To completely eliminate the Diamond Problem and the complexities of multiple state inheritance",
          "Because computers only have one monitor",
          "Because multiple inheritance was patented by Microsoft",
          "Because it causes hard drives to lose electrical power"
        ],
        c: 0,
        why: "Banning multiple class inheritance prevents method ambiguity and memory layout collisions."
      },
      sec2: {
        title: "The Diamond shape diagram",
        content: `<p>Visualise the diamond dependency shape that causes method resolution collisions.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Top: Class A", lines: ["defines method: process()", "root common ancestor"] },
          { title: "Left: Class B (overrides)", lines: ["process(): does B logic", "inherits from A"] },
          { title: "Right: Class C (overrides)", lines: ["process(): does C logic", "inherits from A"] },
          { title: "Bottom: Class D (Collision!)", lines: ["inherits from BOTH B and C!", "Which process() should D run?"] }
        ]
      },
      sec3: {
        title: "Tracing Python's C3 MRO resolution",
        content: `<p>Trace how Python uses the C3 Linearization algorithm (Method Resolution Order) to pick a deterministic winner.</p>`,
      },
      trace: {
        code: [
          "class A: def ping(self): print('A')",
          "class B(A): def ping(self): print('B')",
          "class C(A): def ping(self): print('C')",
          "class D(B, C): pass",
          "# In Python, check D.__mro__:",
          "# [D, B, C, A, object] -> D.ping() calls B.ping() because B was listed first!"
        ],
        steps: [
          { line: 3, vars: { diamond: "D inherits from B, then C" } },
          { line: 5, vars: { mro_chain: "Python C3 algorithm resolves: D -> B -> C -> A -> object" } },
          { line: 6, vars: { executed: "B executes; C's implementation is masked unless super() is coordinated" } }
        ]
      },
      practiceIntro: "Test your memory of the Diamond Problem.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The method collision problem in multiple inheritance is the Deadly <0>.",
          "In Python, the order in which base classes are searched is the <1> Resolution Order.",
          "The algorithm Python uses to compute MRO is the <2> linearization algorithm."
        ],
        blanks: [
          { a: ["Diamond"], why: "The Diamond problem describes multiple inheritance collisions." },
          { a: ["Method", "MRO"], why: "Method Resolution Order governs lookup order." },
          { a: ["C3"], why: "C3 Linearization guarantees monotonic class resolution." }
        ]
      },
      win: "You can explain the Diamond Problem and inspect Method Resolution Order (MRO) when navigating multiple inheritance in Python.",
      nextTasks: [
        "Inspect the __mro__ attribute on a Python class that uses multiple inheritance.",
        "Demonstrate how changing class D(B, C) to class D(C, B) alters which method runs.",
        "Explain why interfaces/protocols avoid the diamond problem by providing contracts without state."
      ],
      primarySource: "Michele Simionato: *The Python 2.3 Method Resolution Order (C3 Algorithm)* (python.org/download/releases/2.3/mro/).",
      quiz: [
        {
          q: "What is the 'Deadly Diamond of Death' in object-oriented programming?",
          a: [
            "An ambiguity that arises when a class inherits from two parent classes that both inherit from a common ancestor, creating conflicting method implementations",
            "A fatal hardware failure in computer monitors",
            "A memory leak that occurs every four days",
            "A software license dispute between companies"
          ],
          c: 0,
          why: "It describes the method resolution ambiguity in diamond-shaped multiple inheritance hierarchies."
        },
        {
          q: "How does Python solve the Diamond Problem deterministically?",
          a: [
            "Using the C3 Linearization algorithm to compute a deterministic, monotonic Method Resolution Order (MRO)",
            "By flipping a random coin at runtime",
            "By throwing a syntax error whenever multiple inheritance is written",
            "By executing both parent methods simultaneously in parallel"
          ],
          c: 0,
          why: "Python calculates a strict, deterministic search order (__mro__) using C3 linearization."
        },
        {
          q: "Why is multiple interface inheritance permitted in Java and C# while multiple class inheritance is forbidden?",
          a: [
            "Interfaces declare method signatures without state or field data; there is zero state collision or memory layout ambiguity",
            "Interfaces are written in English while classes are written in Latin",
            "Interfaces do not require compilation",
            "Interfaces can only have one method"
          ],
          c: 0,
          why: "Interfaces provide method contracts without state, eliminating field offset collisions."
        },
        {
          q: "What keyword in Python coordinates cooperative multiple inheritance across superclasses?",
          a: [
            "super()",
            "parent()",
            "base()",
            "this()"
          ],
          c: 0,
          why: "super() calls the next class in the computed MRO, enabling cooperative multiple inheritance."
        }
      ]
    },
    {
      n: 4,
      id: "delegation-and-the-wrapper-pattern",
      title: "Delegation and the wrapper pattern",
      topic: "Delegation & Wrapper Patterns",
      anim: "Scale",
      lede: "How do you reuse code without inheriting? Master Delegation and the Wrapper (Decorator) pattern: containing an instance and forwarding calls cleanly.",
      winShort: "Replace fragile inheritance with delegation and the wrapper pattern",
      missionLink: "The primary structural alternative to class subclassing for behavior reuse",
      sec1: {
        title: "Contain and delegate",
        content: `<p>Instead of subclassing a class to add a feature, use <b>Delegation</b>: contain the object inside your class (composition) and <b>forward calls to it</b>. Your class acts as a <b>Wrapper</b>.</p><p>Remember Joshua Bloch's broken <code>CustomSet</code> from Lesson 2? The cure is delegation: <code>class InstrumentedSet { constructor(set) { this.set = set; } }</code>. When <code>add()</code> is called, it increments its counter and calls <code>this.set.add()</code>. It has zero dependency on whether <code>HashSet</code>'s internal <code>addAll</code> calls <code>add</code>!</p>`,
        keyIdea: "Delegation contains an instance and forwards calls to it, preserving encapsulation completely."
      },
      predict: {
        q: "Why is the Wrapper pattern completely immune to the Fragile Base Class problem?",
        a: [
          "It interacts with the underlying instance strictly through its public interface; it has zero dependency on internal self-use methods",
          "It converts the underlying object into a string",
          "It runs on a separate physical server",
          "It eliminates the need for software testing"
        ],
        c: 0,
        why: "Wrappers treat collaborators as black boxes, immune to internal superclass implementation changes."
      },
      sec2: {
        title: "Subclassing versus Wrapping",
        content: `<p>Contrast the tight coupling of subclassing with the black-box safety of the Wrapper pattern.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Subclassing (Fragile)", lines: ["class Child extends Parent", "tight coupling to parent internals", "breaks when parent self-use changes!"] },
          { title: "Wrapper / Delegation (Robust)", lines: ["class Wrapper { constructor(inner) { this.inner = inner } }", "calls this.inner.method()", "pure black-box reuse!"] }
        ]
      },
      sec3: {
        title: "Tracing the robust InstrumentedSet",
        content: `<p>Trace how the wrapper pattern counts items accurately without double-counting bugs.</p>`,
      },
      trace: {
        code: [
          "class InstrumentedSet:",
          "    def __init__(self, s): self.s = s; self.count = 0",
          "    def add(self, item): self.count += 1; return self.s.add(item)",
          "    def addAll(self, items): self.count += len(items); return self.s.addAll(items)",
          "# Calling addAll([1, 2, 3]) increments count by exactly 3, regardless of HashSet's internals!"
        ],
        steps: [
          { line: 1, vars: { wrapper: "InstrumentedSet wraps any underlying Set implementation" } },
          { line: 3, vars: { forwarding: "addAll increments count by 3 and forwards directly to inner set" } },
          { line: 4, vars: { outcome: "final count is exactly 3; zero double-counting bugs!" } }
        ]
      },
      practiceIntro: "Test your memory of delegation patterns.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Passing a call to an internal collaborator object is <0>.",
          "An object that encloses another object to add functionality is a <1>.",
          "Delegation treats collaborators as <2>-box abstractions."
        ],
        blanks: [
          { a: ["delegation"], why: "Delegation hands off execution to an internal object." },
          { a: ["wrapper"], why: "Wrappers enclose underlying instances." },
          { a: ["black"], why: "Black-box reuse interacts strictly through public APIs." }
        ]
      },
      win: "You can apply delegation and the wrapper pattern to extend class behavior safely without touching inheritance.",
      nextTasks: [
        "Implement a LoggingList wrapper that prints every item added before forwarding to a real list.",
        "Refactor an inheritance-based class into a delegation-based wrapper class.",
        "Notice how your wrapper can wrap ANY object that satisfies the interface, not just one class."
      ],
      primarySource: "Joshua Bloch, *Effective Java*, Item 18: 'Favor composition over inheritance' (The Wrapper Pattern / Forwarding).",
      quiz: [
        {
          q: "What is 'Delegation' in object-oriented programming?",
          a: [
            "A design pattern where an object handles a method call by forwarding the operation to a helper or collaborator object",
            "Assigning coding tasks to junior developers",
            "A database replication technique",
            "A compiler optimization for loops"
          ],
          c: 0,
          why: "Delegation passes responsibility to an internal contained object."
        },
        {
          q: "What is the primary benefit of the Wrapper pattern (also known as the Decorator pattern)?",
          a: [
            "It allows adding new responsibilities to an object dynamically without modifying the original class or relying on subclassing",
            "It reduces the size of the computer screen",
            "It converts Python code into JavaScript",
            "It turns off database security"
          ],
          c: 0,
          why: "Wrappers extend functionality dynamically by wrapping instances rather than modifying classes."
        },
        {
          q: "Why can an InstrumentedSet wrapper wrap HashSet, TreeSet, or ANY Set implementation seamlessly?",
          a: [
            "Because it depends on the generic Set interface/protocol, not a single hardcoded concrete class",
            "Because Java converts all sets to arrays",
            "Because sets are stored in the cloud",
            "Only on Linux computers"
          ],
          c: 0,
          why: "Polymorphic delegation works with any object satisfying the interface, maximizing reuse."
        },
        {
          q: "What is the only disadvantage of the Wrapper pattern compared to inheritance?",
          a: [
            "Forwarding methods can involve minor boilerplate (forwarding calls) and wrappers are not well-suited for callback identity checks (the SELF problem)",
            "Wrappers use 100 times more memory",
            "Wrappers are illegal in modern programming languages",
            "Wrappers delete database records"
          ],
          c: 0,
          why: "Boilerplate forwarding methods and the 'SELF problem' (wrapped objects don't know their wrapper) are the trade-offs."
        }
      ]
    },
    {
      n: 5,
      id: "the-strategy-pattern-pluggable-behavior",
      title: "The Strategy pattern: pluggable behavior",
      topic: "Delegation & Wrapper Patterns",
      anim: "Scale",
      lede: "Never subclass just to change an algorithm. Master the Strategy pattern: encapsulating algorithms into swappable classes to change behavior at runtime.",
      winShort: "Replace rigid inheritance branching with pluggable Strategy pattern collaborators",
      missionLink: "The premier Gang of Four pattern embodying 'favor composition over inheritance'",
      sec1: {
        title: "Algorithms as swappable objects",
        content: `<p>A common beginner instinct when supporting multiple shipping calculation algorithms is subclassing: <code>AirOrder</code>, <code>GroundOrder</code>, <code>SeaOrder</code>. What happens when you also need different discount algorithms? You explode into <code>AirOrderWithHolidayDiscount</code>, <code>GroundOrderWithVipDiscount</code>!</p><p>The cure is the <b>Strategy Pattern</b>. Instead of subclassing, extract the algorithm into a family of pluggable classes: <code>ShippingStrategy</code> (Air, Ground, Sea). The <code>Order</code> simply holds a reference to a shipping strategy: <code>order.shipping_strategy.calculate(order)</code>.</p>`,
        keyIdea: "The Strategy pattern encapsulates interchangeable algorithms into pluggable collaborator objects."
      },
      predict: {
        q: "How does the Strategy pattern adhere to the Open-Closed Principle (OCP)?",
        a: [
          "You can add a brand new algorithm (e.g. DroneShippingStrategy) by writing a new class without modifying existing Order code",
          "It forces developers to close their code editors at 5:00 PM",
          "It requires all files to be marked read-only",
          "It prevents algorithms from using memory"
        ],
        c: 0,
        why: "New strategies are added by creating new classes, keeping existing context code closed for modification."
      },
      sec2: {
        title: "The Strategy pattern architecture",
        content: `<p>Observe how the Context class delegates its algorithm to a swappable Strategy interface.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Context (Order)", lines: ["holds strategy reference", "calls: this.shipping.calculate(this)"] },
          { title: "Strategy Interface", lines: ["calculate(order) -> number", "pluggable algorithm contract"] },
          { title: "Concrete Strategies", lines: ["AirShipping ($25)", "GroundShipping ($10)", "DroneShipping ($15)"] }
        ]
      },
      sec3: {
        title: "Tracing runtime strategy selection",
        content: `<p>Trace how an order delegates its shipping cost calculation to the chosen strategy.</p>`,
      },
      trace: {
        code: [
          "# Strategies implement calculate(order):",
          "order = Order(items=[...], shipping=GroundShippingStrategy())",
          "print(order.shipping_cost()) # returns $10.00",
          "# Customer selects Express Overnight at checkout:",
          "order.shipping = OvernightShippingStrategy()",
          "print(order.shipping_cost()) # returns $35.00 (swapped at runtime!)"
        ],
        steps: [
          { line: 1, vars: { initial: "order instantiated with Ground shipping strategy" } },
          { line: 2, vars: { calculation_1: "delegates to GroundShippingStrategy: $10.00" } },
          { line: 4, vars: { runtime_mutation: "strategy swapped dynamically to Overnight" } },
          { line: 5, vars: { calculation_2: "delegates to OvernightShippingStrategy: $35.00" } }
        ]
      },
      practiceIntro: "Test your memory of the Strategy pattern.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Encapsulating algorithms into interchangeable objects is the <0> pattern.",
          "The class that uses and delegates to a strategy is the <1>.",
          "Strategies can be swapped dynamically at <2> time."
        ],
        blanks: [
          { a: ["Strategy"], why: "The Strategy pattern encapsulates algorithms." },
          { a: ["Context"], why: "The Context delegates execution to the strategy." },
          { a: ["run", "runtime"], why: "Composition enables dynamic runtime swapping." }
        ]
      },
      win: "You can eliminate inheritance class explosion by encapsulating interchangeable algorithms into pluggable strategies.",
      nextTasks: [
        "Refactor an order pricing class that uses multiple if/elif branches into a Strategy pattern.",
        "Implement a DiscountStrategy interface with PercentageDiscount and FixedAmountDiscount classes.",
        "Swap a strategy dynamically at runtime based on user input."
      ],
      primarySource: "Erich Gamma et al., *Design Patterns: Elements of Reusable Object-Oriented Software*, 'Strategy'.",
      quiz: [
        {
          q: "What is the primary motivation for using the Strategy pattern?",
          a: [
            "To define a family of algorithms, encapsulate each one in a separate class, and make them interchangeable at runtime",
            "To speed up the computer processor",
            "To delete database tables",
            "To encrypt passwords in memory"
          ],
          c: 0,
          why: "Strategy isolates algorithmic variability behind a common interface, avoiding subclass proliferation."
        },
        {
          q: "How does the Strategy pattern eliminate massive if/else or switch statements?",
          a: [
            "Polymorphism replaces conditional branching: the Context simply invokes strategy.execute() regardless of which concrete strategy is active",
            "It converts conditionals into loops",
            "It turns off compiler warnings",
            "It runs all branches simultaneously"
          ],
          c: 0,
          why: "Polymorphism dispatches to the correct algorithm automatically, eliminating messy switch blocks."
        },
        {
          q: "Can first-class functions (lambdas) be used as strategies in modern languages without creating full classes?",
          a: [
            "Yes, in Python, JavaScript, and modern C#, passing a plain function (callback) acts as a lightweight Strategy pattern",
            "No, the Strategy pattern strictly requires twenty lines of boilerplate class code",
            "Only on Apple Mac computers",
            "Functions cannot calculate algorithms"
          ],
          c: 0,
          why: "In functional and multi-paradigm languages, a callable function is the simplest possible Strategy."
        },
        {
          q: "What is the relationship between the Strategy pattern and the Open-Closed Principle?",
          a: [
            "The Context is closed for modification, but open for extension by introducing new concrete Strategy classes",
            "They are completely unrelated concepts",
            "Strategy violates the Open-Closed Principle",
            "Both principles were invented by Microsoft"
          ],
          c: 0,
          why: "Adding a new algorithm requires zero changes to the context class, adhering perfectly to OCP."
        }
      ]
    },
    {
      n: 6,
      id: "the-liskov-substitution-principle-lsp",
      title: "The Liskov Substitution Principle (LSP)",
      topic: "LSP & Legitimate Inheritance",
      anim: "Scale",
      lede: "If it looks like a duck and quacks like a duck but needs batteries, you have the wrong abstraction. Discover the Liskov Substitution Principle and the famous Square-Rectangle trap.",
      winShort: "Evaluate inheritance hierarchies against the Liskov Substitution Principle (LSP)",
      missionLink: "The behavioral contract that governs when class inheritance is genuinely safe",
      sec1: {
        title: "Subtypes must be substitutable",
        content: `<p>Barbara Liskov formulated the <b>Liskov Substitution Principle (LSP)</b>, the 'L' in SOLID: <i>Subtypes must be substitutable for their base types without altering the correctness of the program.</i></p><p>If a function accepts a <code>Rectangle</code>, passing a <code>Square</code> should not break it. But in mathematics, a Square is a Rectangle; in object-oriented code, <b>Square violates LSP!</b> A Rectangle promises that setting width does not alter height. If Square overrides <code>setWidth(w)</code> to also set height, it breaks the caller's contract!</p>`,
        keyIdea: "Subtypes must honor all behavioral promises made by their superclass without surprise mutations."
      },
      predict: {
        q: "Why is 'class Square extends Rectangle' the classic violation of the Liskov Substitution Principle?",
        a: [
          "Rectangle promises that changing width leaves height unchanged; Square mutates both, violating caller assumptions",
          "Squares have four corners while rectangles have three",
          "Squares cannot be drawn on computer monitors",
          "Math formulas are forbidden in object-oriented design"
        ],
        c: 0,
        why: "Callers expecting rectangle behavior will have their invariants broken by a square's coupled sides."
      },
      sec2: {
        title: "The Square-Rectangle contract failure",
        content: `<p>Observe how mathematical taxonomy fails when translated naively into mutable code.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Rectangle Contract", lines: ["r.setWidth(5); r.setHeight(4);", "assert(r.area() === 20) -> PROMISED!"] },
          { title: "Square Violation", lines: ["s.setWidth(5); // sets height=5!", "s.setHeight(4); // sets width=4!", "s.area() === 16! (BROKEN CONTRACT!)"] }
        ]
      },
      sec3: {
        title: "Tracing the LSP contract breakdown",
        content: `<p>Trace how a test function expecting a Rectangle fails when passed a Square.</p>`,
      },
      trace: {
        code: [
          "def test_resize(rectangle):",
          "    rectangle.set_width(5)",
          "    rectangle.set_height(4)",
          "    # Caller contract: Area MUST be 5 * 4 = 20!",
          "    assert rectangle.area() == 20 # Passes for Rectangle; CRASHES for Square (area is 16)!"
        ],
        steps: [
          { line: 0, vars: { expectation: "function expects any valid Rectangle subtype" } },
          { line: 2, vars: { caller_assumption: "assumes width and height are independent dimensions" } },
          { line: 4, vars: { assertion_failed: "Square broke the behavioral contract; LSP violated!" } }
        ]
      },
      practiceIntro: "Test your memory of the Liskov Substitution Principle.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The 'L' in SOLID stands for the <0> Substitution Principle.",
          "Subtypes must be substitutable without altering program <1>.",
          "The Turing Award winner who formulated LSP is Barbara <2>."
        ],
        blanks: [
          { a: ["Liskov"], why: "Liskov Substitution Principle is the 'L' in SOLID." },
          { a: ["correctness"], why: "Substitutability preserves program correctness." },
          { a: ["Liskov"], why: "Dr. Barbara Liskov introduced the principle in 1987." }
        ]
      },
      win: "You can evaluate inheritance hierarchies against behavioral contracts and eliminate LSP violations.",
      nextTasks: [
        "Audit an inheritance hierarchy to ensure no subclass throws unexpected NotImplementedErrors for inherited methods.",
        "Refactor the Square/Rectangle problem into two independent classes implementing a Shape interface.",
        "Verify that subclasses do not strengthen preconditions or weaken postconditions."
      ],
      primarySource: "Barbara Liskov & Jeannette Wing: *A Behavioral Notion of Subtyping* (ACM TOPLAS, 1994).",
      quiz: [
        {
          q: "What is the core definition of the Liskov Substitution Principle (LSP)?",
          a: [
            "Functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it and without breaking correctness",
            "Every class must be substituted with an interface",
            "Classes can only inherit from one parent",
            "Variables must be substituted with constants"
          ],
          c: 0,
          why: "LSP guarantees that any subtype can stand in for its base type without breaking client expectations."
        },
        {
          q: "What is a sign that a class hierarchy violates LSP?",
          a: [
            "A subclass overrides a base class method with 'throw new NotImplementedException()' or does nothing (empty method)",
            "The class has unit tests",
            "The class is written in Python",
            "The class has more than two attributes"
          ],
          c: 0,
          why: "Throwing NotImplementedException proves the subclass cannot fulfill the base contract."
        },
        {
          q: "What are the rules regarding preconditions and postconditions in LSP?",
          a: [
            "Subtypes cannot strengthen preconditions (demand more), and cannot weaken postconditions (guarantee less)",
            "Preconditions must be written in HTML",
            "Postconditions are illegal in modern programming",
            "Subtypes can change conditions however they want"
          ],
          c: 0,
          why: "A subtype must accept everything the parent accepted and guarantee everything the parent guaranteed."
        },
        {
          q: "How does the 'Penguin is a Bird' dilemma violate LSP if Bird has a 'fly()' method?",
          a: [
            "Callers expect all Birds to fly; a Penguin cannot fly and either crashes or does nothing, violating the Bird contract",
            "Penguins do not exist in computer memory",
            "Birds cannot be represented in object-oriented code",
            "It turns off the database server"
          ],
          c: 0,
          why: "If Bird defines fly(), a non-flying Penguin breaks caller assumptions; separate flying into a capability interface."
        }
      ]
    },
    {
      n: 7,
      id: "when-inheritance-is-actually-appropriate",
      title: "When inheritance is actually appropriate",
      topic: "LSP & Legitimate Inheritance",
      anim: "Scale",
      lede: "Inheritance isn't evil; misapplied inheritance is evil. Discover the rare, legitimate use cases for class inheritance: Framework base classes, Template Method, and AST nodes.",
      winShort: "Identify the specific architectural scenarios where inheritance is genuinely superior to composition",
      missionLink: "Prevents dogmatic over-correction into 'anti-inheritance' extremes",
      sec1: {
        title: "The legitimate realm of inheritance",
        content: `<p>'Favor composition over inheritance' does not mean 'never use inheritance'. Inheritance is an extraordinarily powerful language feature when applied correctly.</p><p>When is inheritance appropriate? <b>1. True 'is-a' relationships that are immutable:</b> an <code>AST BinaryExpression</code> is genuinely an <code>AST Node</code>. <b>2. Framework base classes:</b> React's <code>Component</code> or Django's <code>View</code>. <b>3. The Template Method pattern:</b> where an abstract algorithm skeleton is fixed, and subclasses fill in specific steps.</p>`,
        keyIdea: "Inheritance shines in framework hooks, immutable syntax tree nodes, and the Template Method pattern."
      },
      predict: {
        q: "What pattern defines an algorithm skeleton in a base class while letting subclasses override specific steps?",
        a: [
          "The Template Method pattern",
          "The Singleton pattern",
          "The Proxy pattern",
          "The Observer pattern"
        ],
        c: 0,
        why: "Template Method uses inheritance to fix algorithm structure while delegating step details to subclasses."
      },
      sec2: {
        title: "The Template Method architecture",
        content: `<p>How an abstract base class locks in algorithm flow while allowing subclass customization.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Base: DataMiner (Template Method)", lines: ["mine(): openFile() -> extractData() -> parseData() -> closeFile()", "flow is FIXED and FINAL!"] },
          { title: "Subclass: PdfDataMiner", lines: ["overrides: extractData() for PDF", "inherits open, parse, and close"] },
          { title: "Subclass: CsvDataMiner", lines: ["overrides: extractData() for CSV", "inherits open, parse, and close"] }
        ]
      },
      sec3: {
        title: "Tracing the Template Method execution",
        content: `<p>Trace how the base class orchestrates execution order while calling subclass step overrides.</p>`,
      },
      trace: {
        code: [
          "class ReportGenerator:",
          "    def generate(self): # Template Method",
          "        self.fetch_data()",
          "        self.format_body() # overridden by subclass",
          "        self.export_file()",
          "# Subclass HtmlReportGenerator overrides ONLY format_body()!"
        ],
        steps: [
          { line: 1, vars: { skeleton: "generate() defines unalterable execution workflow" } },
          { line: 3, vars: { hook: "calls format_body() implemented by specific subclass" } },
          { line: 4, vars: { completion: "base class handles export and cleanup automatically" } }
        ]
      },
      practiceIntro: "Test your memory of appropriate inheritance use cases.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The pattern defining an algorithm skeleton in a base class is the <0> Method pattern.",
          "A class designed only to be subclassed that cannot be instantiated is an <1> class.",
          "Compilers can prevent further subclassing by marking classes as <2>."
        ],
        blanks: [
          { a: ["Template"], why: "Template Method locks in algorithm steps." },
          { a: ["abstract"], why: "Abstract base classes define subclass contracts." },
          { a: ["final", "sealed"], why: "final/sealed classes prohibit subclassing." }
        ]
      },
      win: "You can identify when inheritance is genuinely the best architectural tool and implement the Template Method pattern cleanly.",
      nextTasks: [
        "Implement a Template Method abstract class using Python's abc.ABC and @abstractmethod.",
        "Create an AST node hierarchy (LiteralNode, BinaryOpNode) using inheritance.",
        "Explain to your team why framework hooks (like React.Component) use inheritance legitimately."
      ],
      primarySource: "Erich Gamma et al., *Design Patterns: Elements of Reusable Object-Oriented Software*, 'Template Method'.",
      quiz: [
        {
          q: "What is the Template Method design pattern?",
          a: [
            "A behavioral design pattern that defines the skeleton of an algorithm in a superclass, but lets subclasses override specific steps of the algorithm without changing its structure",
            "A tool that creates HTML email templates",
            "A database backup script",
            "A compiler error in C++"
          ],
          c: 0,
          why: "Template Method enforces overall algorithm sequence while allowing subclasses to customize steps."
        },
        {
          q: "Why are Abstract Syntax Trees (ASTs) in compilers well-suited for class inheritance?",
          a: [
            "The grammar is fixed, types have a genuine immutable 'is-a' relationship (AddExpression IS an Expression), and polymorphism is natural",
            "Because compilers only work with inheritance",
            "Because ASTs cannot be represented in JSON",
            "Because inheritance makes compilers run fifty percent faster"
          ],
          c: 0,
          why: "Compiler AST node grammars are stable, deeply hierarchical, and fit pure mathematical subtyping."
        },
        {
          q: "What does Python's 'abc' module (Abstract Base Classes) provide?",
          a: [
            "Tools like @abstractmethod that prevent instantiating incomplete base classes and enforce subclass method implementation",
            "Alphabetical sorting of dictionary keys",
            "Basic text encryption algorithms",
            "Audio recording features"
          ],
          c: 0,
          why: "abc.ABC and @abstractmethod enforce compile-time/instantiation contracts on derived classes."
        },
        {
          q: "What is the recommended maximum inheritance depth in clean software architecture?",
          a: [
            "Shallow: rarely deeper than 2 or 3 levels (Base -> Concrete); avoid 6-level deep hierarchies",
            "At least 15 levels deep to maximize reuse",
            "Exactly 10 levels",
            "Depth does not matter at all"
          ],
          c: 0,
          why: "Deep inheritance trees compound cognitive load, fragile base class bugs, and tight coupling."
        }
      ]
    },
    {
      n: 8,
      id: "refactoring-inheritance-trees-into-components",
      title: "Refactoring inheritance trees into components",
      topic: "LSP & Legitimate Inheritance",
      anim: "Scale",
      lede: "Inherited a nightmare 8-level class hierarchy? Learn the step-by-step refactoring protocol to dismantle deep inheritance trees into composable component architectures.",
      winShort: "Dismantle rigid inheritance hierarchies into composable component-based architectures",
      missionLink: "The essential refactoring skill for modernizing legacy object-oriented codebases",
      sec1: {
        title: "The dismantling protocol",
        content: `<p>How do you escape an inheritance nightmare without rewriting the whole system? You follow a proven refactoring recipe: <b>Replace Inheritance with Delegation</b>.</p><p><b>Step 1:</b> Identify the capability that causes class explosion (e.g. movement, logging, serialization). <b>Step 2:</b> Extract that capability into a standalone Component or Strategy class. <b>Step 3:</b> Add a field on the original class to hold that component. <b>Step 4:</b> Delegate calls to the component. <b>Step 5:</b> Remove the subclass derivation!</p>`,
        keyIdea: "Dismantle deep trees by extracting capabilities into pluggable components and delegating calls."
      },
      predict: {
        q: "In game development, what architectural pattern famously replaced deep GameObject inheritance trees with composable components?",
        a: [
          "Entity Component System (ECS)",
          "The Singleton pattern",
          "Model-View-Controller",
          "The Factory Method pattern"
        ],
        c: 0,
        why: "ECS revolutionized game engines by replacing rigid inheritance with composable component bags."
      },
      sec2: {
        title: "The refactoring transition sequence",
        content: `<p>Visualise the evolution from a deep inheritance tree to a flat composable container.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Before: Deep Inheritance", lines: ["Entity -> Monster -> FlyingMonster -> Dragon", "brittle 4-level coupling!"] },
          { title: "After: Composable Entity", lines: ["class Entity { components: Map }", "entity.add(new FlyingComponent())", "entity.add(new FireBreathComponent())", "flat, modular, infinitely flexible!"] }
        ]
      },
      sec3: {
        title: "Tracing the component extraction",
        content: `<p>Trace how a rigid subclass is refactored into a composable component container.</p>`,
      },
      trace: {
        code: [
          "# Legacy: class Player(PhysicsObject, RenderableObject, AuditoryObject)",
          "# Refactored with Composable Components:",
          "class Player:",
          "    def __init__(self, physics, renderer, audio):",
          "        self.physics = physics",
          "        self.renderer = renderer",
          "        self.audio = audio",
          "# Player is now a pure coordinator; components are swappable and testable in isolation!"
        ],
        steps: [
          { line: 0, vars: { legacy: "multiple inheritance creates brittle diamond couplings" } },
          { line: 2, vars: { refactored: "Player becomes a cohesive container of components" } },
          { line: 7, vars: { outcome: "components can be mocked individually; zero inheritance baggage" } }
        ]
      },
      practiceIntro: "Test your memory of inheritance refactoring.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The refactoring replacing extends with a contained instance is Replace Inheritance with <0>.",
          "Game architectures that assemble entities from components use Entity <1> System.",
          "Composition allows combining features without class <2>."
        ],
        blanks: [
          { a: ["Delegation"], why: "Replace Inheritance with Delegation is Fowler's classic refactoring." },
          { a: ["Component"], why: "Entity Component System (ECS) favors composition." },
          { a: ["explosion"], why: "Composition avoids exponential class explosion." }
        ]
      },
      win: "You can systematically refactor legacy inheritance hierarchies into resilient, composable component models.",
      nextTasks: [
        "Take a subclass in your project and apply 'Replace Inheritance with Delegation'.",
        "Benchmark the flexibility of an Entity Component container versus a deep class hierarchy.",
        "Refactor an inheritance tree that was suffering from class explosion."
      ],
      primarySource: "Martin Fowler, *Refactoring: Improving the Design of Existing Code*, 'Replace Inheritance with Delegation'.",
      quiz: [
        {
          q: "What is Martin Fowler's 'Replace Inheritance with Delegation' refactoring?",
          a: [
            "A refactoring where a subclass creates a field to hold an instance of the superclass and delegates methods to it, removing the 'extends' relationship",
            "Deleting all classes and replacing them with global functions",
            "Renaming all variables to delegate",
            "Converting a class into an interface"
          ],
          c: 0,
          why: "It converts an is-a inheritance relationship into a clean has-a delegation relationship."
        },
        {
          q: "Why did the video game industry almost completely abandon deep inheritance hierarchies for Entity Component Systems (ECS)?",
          a: [
            "Game entities need combinations of capabilities (flying, invisible, burning) that change constantly; composition allows mixing traits without subclass explosion",
            "Video games are not allowed to use object-oriented programming",
            "Inheritance was banned by Sony and Microsoft consoles",
            "ECS makes games download faster over Wi-Fi"
          ],
          c: 0,
          why: "ECS allows composing arbitrary capabilities on game entities dynamically without rigid trees."
        },
        {
          q: "What is the primary indicator that an inheritance tree needs to be refactored into components?",
          a: [
            "Subclasses start overriding methods with empty bodies, or new feature requirements demand combinations from multiple branches of the tree",
            "The file size of the class exceeds 10 kilobytes",
            "The class has unit tests",
            "The class is written in Python"
          ],
          c: 0,
          why: "Empty overrides and combinatorial feature requests prove the tree cannot express the domain."
        },
        {
          q: "What is the ultimate takeaway of 'Favor Composition Over Inheritance'?",
          a: [
            "Composition gives you maximum flexibility, loose coupling, and runtime behavior modification with zero fragile base class risks",
            "Inheritance should never be used under any circumstances by any programmer",
            "Composition only works on front-end web development",
            "Inheritance is patented"
          ],
          c: 0,
          why: "Composition defaults keep systems modular, testable, and adaptable to change over time."
        }
      ]
    }
  ]
};

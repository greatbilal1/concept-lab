"use strict";

module.exports = {
  id: "clean-code",
  title: "Clean Code & Code Smells",
  num: 41,
  emoji: "🧹",
  desc: "Naming, small functions, removing duplication and recognising the smells that predict future pain.",
  mission: `# Mission — Clean Code & Code Smells

## Why this course exists

Any fool can write code that a computer can understand. Good programmers write code that humans can understand. When code is riddled with cryptic abbreviations, 500-line god functions, boolean flag arguments, and duplicate logic, progress grinds to a halt. Every change introduces three new bugs, and developer morale collapses. This course teaches the craft of clean code: intention-revealing names, small single-responsibility functions, the Boy Scout Rule, and recognizing the code smells that signal rot.

## What the learner can do at the end

- Choose intention-revealing, pronounceable, and searchable names for variables, functions, and classes.
- Refactor monolithic functions into small, single-responsibility units that do one thing well.
- Eliminate boolean flag arguments and deeply nested conditional pyramids using guard clauses.
- Detect the classic code smells (Feature Envy, Long Method, Shotgun Surgery, Primitive Obsession).
- Apply the Boy Scout Rule to leave code cleaner than you found it on every commit.

## What this course is NOT

- Not a dogmatic manifesto. It emphasizes practical readability and maintainability over rigid rules.
- Not a linter setup guide. It focuses on the cognitive ergonomics of code.

## Success looks like

When reviewing a PR or refactoring legacy code, the learner spots code smells instantly, eliminates flag arguments and nesting, and reduces cognitive load so team members can read the intent without explanations.
`,
  notes: `# Notes — Clean Code & Code Smells

## Decisions
- Group into four themes: Meaningful Names & Simplicity, Small Functions & Guards, Recognizing Code Smells, and The Refactoring Discipline.
- Ground lessons in before/after refactoring examples across modern languages.
`,
  resources: `# Resources — Clean Code & Code Smells

## Knowledge (primary sources)
- Robert C. Martin, *Clean Code: A Handbook of Agile Software Craftsmanship* (Prentice Hall).
- Martin Fowler, *Refactoring: Improving the Design of Existing Code* (2nd Edition, Addison-Wesley).
- Kevlin Henney, *97 Things Every Programmer Should Know* (O'Reilly).

## Wisdom
- The ratio of time spent reading versus writing code is well over 10 to 1. Making code easy to read makes it easy to write.
`,
  cheatsheetSections: [
    {
      title: "Intention-Revealing Naming",
      label: "Pronounceable, searchable, explicit",
      code: `// BAD: Cryptic abbreviations and mental mapping
const d = 86400; // time?
const fn = u.n.split(' ')[0];

// GOOD: Explicit intent and units
const SECONDS_PER_DAY = 86400;
const firstName = user.fullName.split(' ')[0];`,
      lessonN: 1,
      lessonSlug: "meaningful-names-and-intention",
      lessonTitle: "Meaningful names and intention"
    },
    {
      title: "Guard Clauses & Flattening",
      label: "Eliminating arrow anti-patterns",
      code: `// BAD: Nested pyramid of doom
if (user) {
  if (user.isActive) {
    if (user.hasPermission) {
      proceed();
    }
  }
}

// GOOD: Guard clauses (return early)
if (!user || !user.isActive || !user.hasPermission) return;
proceed();`,
      lessonN: 3,
      lessonSlug: "guard-clauses-and-reducing-nesting",
      lessonTitle: "Guard clauses and reducing nesting"
    },
    {
      title: "Classic Code Smells",
      label: "Diagnostic indicators of architectural debt",
      code: `1. Long Method: Functions > 25 lines doing multiple things
2. Primitive Obsession: Using strings for currencies/zipcodes
3. Feature Envy: A function calls methods on another class more than its own
4. Shotgun Surgery: One change forces tiny edits across 10 different files`,
      lessonN: 5,
      lessonSlug: "classic-code-smells-and-heuristics",
      lessonTitle: "Classic code smells and heuristics"
    },
    {
      title: "The Boy Scout Rule",
      label: "Continuous micro-refactoring",
      code: `// Always leave the code cleaner than you found it.
// Don't wait for a dedicated "refactoring sprint".
// On every ticket:
// - Rename 1 confusing variable
// - Extract 1 small helper function
// - Delete 1 block of commented-out dead code`,
      lessonN: 8,
      lessonSlug: "the-boy-scout-rule-and-continuous-refactoring",
      lessonTitle: "The Boy Scout rule and continuous refactoring"
    }
  ],
  glossaryGroups: [
    {
      id: "names-simplicity",
      title: "Meaningful Names & Simplicity",
      terms: [
        { term: "Intention-revealing name", def: "An identifier whose name explicitly answers why it exists, what it does, and how it is used.", lesson: 1, tags: ["naming"] },
        { term: "Magic number", def: "A raw numeric literal in code without an explanatory named constant, obscuring its meaning.", lesson: 1, tags: ["smells"] },
        { term: "Single responsibility", def: "The principle that a function or class should do exactly one thing and have one reason to change.", lesson: 2, tags: ["principles"] },
        { term: "Flag argument", def: "A boolean parameter passed to a function that forces it to do two completely different things based on true/false.", lesson: 2, tags: ["smells"] }
      ]
    },
    {
      id: "functions-nesting",
      title: "Small Functions & Guards",
      terms: [
        { term: "Guard clause", def: "A conditional statement at the beginning of a function that returns or exits early on invalid conditions.", lesson: 3, tags: ["refactoring"] },
        { term: "Pyramid of Doom", def: "Deeply nested, arrow-shaped conditional blocks that strain human working memory to parse.", lesson: 3, tags: ["smells"] },
        { term: "Side effect", def: "An unadvertised modification of state outside a function that violates caller expectations.", lesson: 4, tags: ["clean-code"] },
        { term: "Command Query Separation", def: "CQS: A principle stating a function should either perform an action OR return data, but never both.", lesson: 4, tags: ["principles"] }
      ]
    },
    {
      id: "code-smells",
      title: "Recognizing Code Smells",
      terms: [
        { term: "Code smell", def: "A surface symptom in code that often indicates a deeper architectural or design weakness.", lesson: 5, tags: ["smells"] },
        { term: "Feature Envy", def: "A smell where a method seems more interested in the data of another class than the class it belongs to.", lesson: 5, tags: ["smells"] },
        { term: "Shotgun Surgery", def: "A smell where making one conceptual change requires making tiny edits across dozens of separate files.", lesson: 6, tags: ["smells"] },
        { term: "Primitive Obsession", def: "The reluctance to create small domain types, instead using raw primitives (strings, ints) for complex concepts.", lesson: 6, tags: ["smells"] }
      ]
    },
    {
      id: "refactoring-discipline",
      title: "The Refactoring Discipline",
      terms: [
        { term: "Refactoring", def: "The process of restructuring existing computer code without changing its external observable behavior.", lesson: 7, tags: ["refactoring"] },
        { term: "Boy Scout Rule", def: "The practice of leaving the codebase cleaner than you found it on every task or commit.", lesson: 8, tags: ["craft"] },
        { term: "Dead code", def: "Commented-out code, unused functions, or unreachable branches that clutter the repository.", lesson: 7, tags: ["hygiene"] },
        { term: "Technical debt", def: "The implied cost of future rework caused by choosing an easy solution now instead of a better approach.", lesson: 8, tags: ["craft"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "meaningful-names-and-intention",
      title: "Meaningful names and intention",
      topic: "Meaningful Names & Simplicity",
      anim: "Code",
      lede: "You read names hundreds of times a day. Learn how intention-revealing, pronounceable, and searchable names make code self-documenting without comments.",
      winShort: "Select intention-revealing names that eliminate the need for explanatory comments",
      missionLink: "The single highest-leverage readability improvement you can make to any codebase",
      sec1: {
        title: "Names reveal intent",
        content: `<p>Choosing good names takes time, but it saves vastly more time than it costs. A name should tell you <b>why it exists, what it does, and how it is used</b>. If a variable requires a comment to explain what it holds, the name has failed.</p><p>Avoid cryptic abbreviations (<code>hp</code> vs <code>hit_points</code>), avoid mental mappings (using <code>i</code>, <code>j</code>, <code>k</code> for nested domain data), and replace <b>Magic Numbers</b> with named constants: <code>const MAX_LOGIN_ATTEMPTS = 5;</code>.</p>`,
        keyIdea: "If a variable or function requires a comment to explain what it is, its name has failed."
      },
      predict: {
        q: "What is wrong with the variable name 'const d = 86400;'?",
        a: [
          "It is an uninformative name with a magic number; 'const SECONDS_PER_DAY = 86400;' makes the meaning self-evident",
          "Variable names must be at least ten characters long",
          "86400 is not a valid integer in JavaScript",
          "There is nothing wrong with it"
        ],
        c: 0,
        why: "'d' reveals zero intent, and 86400 is a magic number requiring mental arithmetic to decode."
      },
      sec2: {
        title: "The naming rules checklist",
        content: `<p>Apply the four foundational naming heuristics across variables, functions, and classes.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Reveal Intent", lines: ["daysSinceModification", "not: d, elapsed, temp"] },
          { title: "Make Searchable", lines: ["MAX_RETRY_COUNT", "searchable across thousands of files; '7' is not!"] },
          { title: "Pronounceable", lines: ["generationTimestamp", "not: gen_ymd_hms_ts!"] }
        ]
      },
      sec3: {
        title: "Tracing code clarification through naming",
        content: `<p>Trace how renaming variables turns cryptic code into clear, fluent English.</p>`,
      },
      trace: {
        code: [
          "# Cryptic before:",
          "# for x in the_list: if x[0] == 4: res.append(x)",
          "# Clear after intention-revealing rename:",
          "flagged_cells = []",
          "for cell in game_board:",
          "    if cell.is_flagged(): flagged_cells.append(cell)"
        ],
        steps: [
          { line: 1, vars: { cryptic: "what is x? what is 4? what is the_list? Zero comprehension." } },
          { line: 3, vars: { readable: "game_board, cell, is_flagged, flagged_cells explain minesweeper logic instantly!" } }
        ]
      },
      practiceIntro: "Test your memory of naming rules.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A name that explains why an entity exists is an intention-<0> name.",
          "An unnamed numeric literal whose meaning is obscured is a <1> number.",
          "Names should be easily spoken aloud, meaning they are <2>."
        ],
        blanks: [
          { a: ["revealing"], why: "Intention-revealing names communicate purpose." },
          { a: ["magic"], why: "Magic numbers obscure calculation meaning." },
          { a: ["pronounceable"], why: "Pronounceable names facilitate team conversations." }
        ]
      },
      win: "You can write self-documenting code using intention-revealing, searchable, and pronounceable identifiers.",
      nextTasks: [
        "Audit a file in your project and replace all magic numbers with named constants.",
        "Rename three single-letter variables to descriptive domain names.",
        "Eliminate a comment whose only purpose was explaining an ambiguous variable name."
      ],
      primarySource: "Robert C. Martin, *Clean Code*, Chapter 2: 'Meaningful Names'.",
      quiz: [
        {
          q: "Why are single-letter variable names (like a, b, x, y) considered harmful outside of short loop counters?",
          a: [
            "They convey zero business intent, require mental mapping, and are impossible to search for across a large repository using grep",
            "They consume too much computer RAM memory",
            "They are rejected by modern language compilers",
            "They only work on Windows computers"
          ],
          c: 0,
          why: "Single-letter variables force readers to memorize mental mappings and cannot be searched with find/grep."
        },
        {
          q: "What is a 'Magic Number' in software craftsmanship?",
          a: [
            "A hardcoded numeric literal whose meaning, unit, or derivation is unexplained in code",
            "A prime number used in cryptography",
            "A number that speeds up database queries",
            "A number that cannot be divided by two"
          ],
          c: 0,
          why: "Magic numbers (like 86400 or 1.05) force readers to guess their meaning; named constants explain them."
        },
        {
          q: "How should boolean variable names be phrased in clean code?",
          a: [
            "As questions or predicates with prefixes like is, has, can, or should (e.g. isActive, hasPermission)",
            "As action verbs like run or calculate",
            "As single letters like b or flag",
            "In all capital letters with exclamation marks"
          ],
          c: 0,
          why: "Predicate prefixes (is, has, should) read naturally inside if statements (if isReady)."
        },
        {
          q: "Why should you avoid encodings and Hungarian notation (e.g. strName, iCount) in modern languages?",
          a: [
            "Modern IDEs and type systems provide instant type inspection; type prefixes add noisy clutter and get out of date",
            "Compilers reject words starting with str",
            "Hungarian notation was patented and is copyrighted",
            "It slows down internet connection speeds"
          ],
          c: 0,
          why: "Modern language tooling renders type prefixes redundant, adding clutter that resists refactoring."
        }
      ]
    },
    {
      n: 2,
      id: "small-functions-and-doing-one-thing",
      title: "Small functions and doing one thing",
      topic: "Meaningful Names & Simplicity",
      anim: "Code",
      lede: "The first rule of functions: they should be small. The second rule: they should be smaller than that. Master the Single Responsibility Principle and eliminate boolean flag arguments.",
      winShort: "Refactor multi-page monolithic functions into small, single-responsibility units",
      missionLink: "The primary structural technique for making code understandable and testable",
      sec1: {
        title: "Do one thing well",
        content: `<p>Functions should do <b>one thing</b>. They should do it well. They should do it only. When a function is 200 lines long, it is never doing one thing: it is parsing inputs, querying the database, sending emails, logging errors, and formatting HTML.</p><p>How do you know if a function does more than one thing? <b>If you can extract another function from it with a name that is not merely a restatement of its implementation, it was doing too much.</b></p>`,
        keyIdea: "Functions should do exactly one thing at a single level of abstraction."
      },
      predict: {
        q: "Why are boolean flag arguments (e.g. 'render(true)') considered a code smell in function design?",
        a: [
          "A boolean flag proves the function does two completely different things: one thing if true, another if false! Split into two functions instead",
          "Boolean values cannot be passed to functions in modern languages",
          "Booleans use too much memory on the heap",
          "Flags cause network latency"
        ],
        c: 0,
        why: "Flag arguments violate doing one thing: render(true) versus render(false) should be renderForAdmin() and renderForUser()."
      },
      sec2: {
        title: "The Step-Down rule",
        content: `<p>Code should read like a top-down newspaper article: high-level summaries descend into detailed helpers.</p>`,
      },
      diagram: {
        boxes: [
          { title: "High-Level: checkout()", lines: ["validate_cart()", "charge_payment()", "send_confirmation()"] },
          { title: "Mid-Level: charge_payment()", lines: ["calculate_taxes()", "invoke_gateway()"] },
          { title: "Low-Level: invoke_gateway()", lines: ["HTTP POST /v1/charges", "handle 402 card error"] }
        ]
      },
      sec3: {
        title: "Tracing function extraction",
        content: `<p>Trace how extracting a helper function clarifies the business intent of an order workflow.</p>`,
      },
      trace: {
        code: [
          "# Before: monolithic loop with embedded tax math",
          "# After: clean helper extraction",
          "def calculate_order_total(items, customer):",
          "    subtotal = sum(item.price for item in items)",
          "    tax = calculate_sales_tax(subtotal, customer.state) # extracted helper",
          "    discount = calculate_loyalty_discount(customer)     # extracted helper",
          "    return subtotal + tax - discount"
        ],
        steps: [
          { line: 2, vars: { core_intent: "order total formula is immediately readable in 4 lines" } },
          { line: 4, vars: { tax_isolated: "tax logic isolated in own testable unit" } },
          { line: 5, vars: { discount_isolated: "discount logic isolated in own testable unit" } }
        ]
      },
      practiceIntro: "Test your memory of function design rules.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The principle that a function should do one thing is the Single <0> Principle.",
          "Passing a boolean to change function behavior creates a <1> argument.",
          "Reading code from high-level policy down to low-level details is the <2>-down rule."
        ],
        blanks: [
          { a: ["Responsibility"], why: "Single Responsibility Principle (SRP) guides function scope." },
          { a: ["flag"], why: "Flag arguments should be split into distinct functions." },
          { a: ["step", "Step"], why: "The Step-Down rule organizes functions hierarchically." }
        ]
      },
      win: "You can decompose monolithic functions into small, expressive, and easily testable units.",
      nextTasks: [
        "Take a 100-line function and extract two sub-functions with clear domain names.",
        "Eliminate a boolean flag argument by creating two explicitly named functions.",
        "Ensure every function in a module operates at a single consistent level of abstraction."
      ],
      primarySource: "Robert C. Martin, *Clean Code*, Chapter 3: 'Functions'.",
      quiz: [
        {
          q: "What is the recommended ideal length for a clean function in modern software craftsmanship?",
          a: [
            "Small: ideally fitting on a single screen (typically under 20–25 lines of code)",
            "At least 500 lines to keep everything in one place",
            "Exactly one line only in all cases",
            "The length of a function does not matter at all"
          ],
          c: 0,
          why: "Small functions fit into human working memory and are easy to comprehend and test."
        },
        {
          q: "What does it mean for a function to operate at a 'Single Level of Abstraction' (SLA)?",
          a: [
            "All statements inside the function should be at the same conceptual level (e.g. not mixing high-level business rules with low-level string slicing)",
            "The function can only use single-character variables",
            "The function must be written in one programming language",
            "The function can only take one argument"
          ],
          c: 0,
          why: "Mixing high-level concepts with low-level plumbing confuses readers; extract plumbing into helpers."
        },
        {
          q: "How many arguments should an ideal clean function accept?",
          a: [
            "Zero to two arguments ideally (niladic, monadic, dyadic); avoid functions with 4+ arguments by grouping into an object",
            "At least ten arguments to provide full flexibility",
            "Exactly one hundred arguments",
            "Arguments should be passed via global variables instead"
          ],
          c: 0,
          why: "Functions with 4+ arguments are hard to remember, test, and read; encapsulate them in a parameter object."
        },
        {
          q: "Why is code duplication (copy-pasting logic) considered the root of all software evil?",
          a: [
            "When a bug is found or rules change, developers must remember to update every single duplicate copy; missed copies cause bugs",
            "Duplication increases hard drive physical weight",
            "Compilers delete duplicate code automatically",
            "Duplication is illegal in open-source software"
          ],
          c: 0,
          why: "Duplication multiplies maintenance burden and guarantees future inconsistency bugs."
        }
      ]
    },
    {
      n: 3,
      id: "guard-clauses-and-reducing-nesting",
      title: "Guard clauses and reducing nesting",
      topic: "Small Functions & Guards",
      anim: "Code",
      lede: "Flatten the Pyramid of Doom. Learn how early returns and guard clauses turn deeply nested arrow-shaped code into clean, readable linear pipelines.",
      winShort: "Flatten deeply nested conditional statements using guard clauses and early returns",
      missionLink: "Dramatically reduces cognitive load and cyclomatic complexity in logic",
      sec1: {
        title: "The arrow anti-pattern",
        content: `<p>Deeply nested code looks like an arrow pointing to the right: <code>if ... { if ... { if ... { if ... } } } }</code>. This is the <b>Pyramid of Doom</b>. To understand what happens on line 20, a reader must hold four nested boolean conditions in their working memory simultaneously.</p><p>You can eliminate nesting completely using <b>Guard Clauses (Return Early)</b>. Check error and boundary conditions at the very top of the function and return immediately. Once the guards are passed, the main happy path executes linearly down the left margin!</p>`,
        keyIdea: "Return early on failure conditions at the top of the function; keep the happy path unnested."
      },
      predict: {
        q: "What happens to code readability when you replace nested if/else statements with guard clauses?",
        a: [
          "The code flattens against the left margin, and readers can verify error exits quickly without nesting",
          "The code becomes three times longer",
          "The compiler rejects early return statements",
          "The function runs in reverse order"
        ],
        c: 0,
        why: "Early returns handle edge cases upfront, leaving the happy path linear and unindented."
      },
      sec2: {
        title: "Pyramid of Doom versus Guard Clauses",
        content: `<p>Contrast nested indentation with the clean linear execution of guard clauses.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Pyramid of Doom (Arrow)", lines: ["if (user) {", "  if (user.active) {", "    if (has_balance) { ... }", "strain on human working memory!"] },
          { title: "Guard Clauses (Linear)", lines: ["if (!user) return;", "if (!user.active) return;", "if (!has_balance) return;", "happyPathExecution();"] }
        ]
      },
      sec3: {
        title: "Tracing guard clause execution",
        content: `<p>Trace how invalid inputs are rejected early, leaving the core business action clean and visible.</p>`,
      },
      trace: {
        code: [
          "def cancel_order(order, user):",
          "    if not order: return {'error': 'Order not found'}",
          "    if order.status != 'pending': return {'error': 'Order already processed'}",
          "    if order.user_id != user.id: return {'error': 'Unauthorized'}",
          "    # Happy path: Clean, un-nested execution down the left margin!",
          "    order.mark_cancelled()",
          "    return {'status': 'success'}"
        ],
        steps: [
          { line: 1, vars: { guard_1: "null check rejected early" } },
          { line: 2, vars: { guard_2: "state check rejected early" } },
          { line: 3, vars: { guard_3: "permission check rejected early" } },
          { line: 5, vars: { happy_path: "core business operation executed at indent level 1" } }
        ]
      },
      practiceIntro: "Test your memory of guard clause patterns.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A conditional exit at the top of a function is a <0> clause.",
          "Exiting a function as soon as a failure is detected is returning <1>.",
          "The anti-pattern of deep nested indentation is the <2> of Doom."
        ],
        blanks: [
          { a: ["guard"], why: "Guard clauses protect functions from invalid states." },
          { a: ["early"], why: "Early returns eliminate trailing else blocks." },
          { a: ["Pyramid"], why: "Pyramid of Doom describes arrow-shaped nesting." }
        ]
      },
      win: "You can refactor deeply nested conditional code into flat, readable linear functions using guard clauses.",
      nextTasks: [
        "Take a function with 3 levels of nested if statements and refactor it using early returns.",
        "Remove all unnecessary 'else' blocks that follow an early return statement.",
        "Measure the reduction in cyclomatic complexity after applying guard clauses."
      ],
      primarySource: "Martin Fowler, *Refactoring: Improving the Design of Existing Code*, 'Replace Nested Conditional with Guard Clauses'.",
      quiz: [
        {
          q: "What is a 'Guard Clause' in clean code craftsmanship?",
          a: [
            "A conditional statement at the start of a function that checks for boundary or error conditions and returns immediately",
            "A security firewall rule on a server",
            "A software license agreement",
            "A password validation check in SQL"
          ],
          c: 0,
          why: "Guard clauses validate preconditions upfront and exit early, avoiding nested indentation."
        },
        {
          q: "Why is an 'else' block unnecessary when an 'if' block ends with a 'return' statement?",
          a: [
            "If the condition is met, the function exits immediately; code following the if block only runs if the condition was false",
            "Because else blocks are illegal in modern ECMAScript",
            "Because else blocks slow down the CPU",
            "Else blocks are always required by compilers"
          ],
          c: 0,
          why: "Early returns eliminate the need for else; subsequent code naturally acts as the alternative branch."
        },
        {
          q: "What is 'Cyclomatic Complexity' in software metrics?",
          a: [
            "A quantitative measurement of the number of linearly independent paths through program source code (branching complexity)",
            "The physical temperature of the CPU chip",
            "The number of lines of code in a file",
            "The time taken to download dependencies"
          ],
          c: 0,
          why: "Cyclomatic complexity measures branching paths; lower complexity means easier testing and reading."
        },
        {
          q: "How do guard clauses support the 'happy path' readability concept?",
          a: [
            "They discard all edge cases and error handling at the top, allowing the normal expected workflow to read linearly down the margin",
            "They make the computer screen display brighter colors",
            "They translate code into positive uplifting phrases",
            "They eliminate all error logging"
          ],
          c: 0,
          why: "Handling anomalies upfront leaves the main happy path prominent, clear, and unindented."
        }
      ]
    },
    {
      n: 4,
      id: "command-query-separation-and-side-effects",
      title: "Command Query Separation and side effects",
      topic: "Small Functions & Guards",
      anim: "Code",
      lede: "Asking a question shouldn't change the answer. Discover Bertrand Meyer's Command Query Separation (CQS) principle and eliminate hidden side effects.",
      winShort: "Enforce Command Query Separation to eliminate hidden mutation side effects",
      missionLink: "Prevents subtle bugs where reading data unexpectedly mutates system state",
      sec1: {
        title: "Asking a question must not change state",
        content: `<p>Bertrand Meyer introduced the <b>Command Query Separation (CQS)</b> principle: every method should either be a <b>Command</b> (performs an action and mutates state, returning void) OR a <b>Query</b> (calculates and returns data, with zero side effects).</p><p>A function called <code>is_valid_user()</code> should never secretly update the user's password or send an email! When queries cause hidden side effects, developers cannot trust their code to inspect state without accidentally triggering mutations.</p>`,
        keyIdea: "Commands change state but return void; Queries return data but cause zero side effects."
      },
      predict: {
        q: "What violates Command Query Separation in 'boolean is_authenticated = login_and_charge_card()'?",
        a: [
          "It mixes an informational query (is_authenticated) with a destructive financial mutation (charge_card) in one function",
          "It takes zero arguments",
          "It returns a boolean",
          "The function name has underscores"
        ],
        c: 0,
        why: "Calling a function that sounds like a check should not secretly charge a credit card."
      },
      sec2: {
        title: "Command versus Query contract",
        content: `<p>Understand the strict separation between state mutators and observational queries.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Command (Action)", lines: ["user.activate()", "mutates state", "returns void / status"] },
          { title: "Query (Observation)", lines: ["user.is_active()", "pure inspection", "zero state changes!"] },
          { title: "The CQS Guarantee", lines: ["Calling a query 100 times", "leaves system state 100% identical!"] }
        ]
      },
      sec3: {
        title: "Tracing CQS refactoring",
        content: `<p>Trace how separating a getter from a mutator makes code predictable and testable.</p>`,
      },
      trace: {
        code: [
          "# Bad (Violates CQS):",
          "# def get_next_token(user): user.token_count += 1; return generate_token()",
          "# Good (Separated):",
          "def generate_token(): return crypto_token() # pure query",
          "def record_token_usage(user): user.token_count += 1 # command"
        ],
        steps: [
          { line: 0, vars: { bad_cqs: "getter secretly mutates user.token_count" } },
          { line: 3, vars: { query: "generate_token is pure query; safe to call without mutating" } },
          { line: 4, vars: { command: "record_token_usage makes mutation explicit and visible" } }
        ]
      },
      practiceIntro: "Test your memory of Command Query Separation.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The principle dividing functions into mutators and getters is Command <0> Separation.",
          "A method that mutates state but returns void is a <1>.",
          "A method that returns data with zero side effects is a <2>."
        ],
        blanks: [
          { a: ["Query"], why: "CQS stands for Command Query Separation." },
          { a: ["command"], why: "Commands perform actions and mutate state." },
          { a: ["query"], why: "Queries inspect data without side effects." }
        ]
      },
      win: "You can write predictable functions following CQS that do not cause hidden state mutations when queried.",
      nextTasks: [
        "Audit a function in your codebase that returns data while secretly modifying state.",
        "Refactor it into two explicit functions: a command and a query.",
        "Ensure all getter functions in your classes are pure and idempotent."
      ],
      primarySource: "Bertrand Meyer, *Object-Oriented Software Construction* (Prentice Hall, 1988).",
      quiz: [
        {
          q: "What is the primary rule of the Command Query Separation (CQS) principle?",
          a: [
            "A method should either be a command that modifies state, or a query that returns data, but never both",
            "All SQL queries must be written in capital letters",
            "Commands and queries must be stored in separate database files",
            "Queries must run in separate operating system threads"
          ],
          c: 0,
          why: "CQS ensures asking a question does not change the answer by isolating mutations from reads."
        },
        {
          q: "Why are hidden side effects inside getter functions dangerous?",
          a: [
            "Developers assume reading data is safe; hidden mutations cause mysterious state corruptions and test failures",
            "They cause physical disk drives to overheat",
            "Browsers block getter functions with side effects",
            "They double the size of JavaScript files"
          ],
          c: 0,
          why: "Callers expect getters to be observational; unexpected mutations break program predictability."
        },
        {
          q: "What is an acceptable common exception to strict CQS in standard data structures?",
          a: [
            "Stack pop() or Queue dequeue(), which removes an item (command) and returns it (query) in one atomic call",
            "Writing to a relational database table",
            "Rendering an HTML web page",
            "Sending an HTTP request"
          ],
          c: 0,
          why: "Stack.pop() is a classic pragmatic exception combining mutation with item retrieval."
        },
        {
          q: "What is the modern architectural extension of CQS applied to distributed systems?",
          a: [
            "CQRS (Command Query Responsibility Segregation)",
            "REST APIs",
            "Model-View-Controller",
            "The Relational Model"
          ],
          c: 0,
          why: "CQRS scales CQS to entire system architectures, separating read and write data models."
        }
      ]
    },
    {
      n: 5,
      id: "classic-code-smells-and-heuristics",
      title: "Classic code smells and heuristics",
      topic: "Recognizing Code Smells",
      anim: "Code",
      lede: "Code doesn't stink; it smells. Learn Martin Fowler's classic code smells: Long Method, Large Class, Primitive Obsession, Feature Envy, and Data Clumps.",
      winShort: "Detect classic code smells in code reviews and identify the refactorings that fix them",
      missionLink: "The diagnostic vocabulary for identifying architectural rot before bugs appear",
      sec1: {
        title: "Smells are symptoms, not bugs",
        content: `<p>Kent Beck coined the term <b>Code Smell</b>: a surface indication that usually corresponds to a deeper problem in the system. A code smell is not an error (the code still runs and passes tests), but it indicates an architectural weakness that will slow down development or breed future bugs.</p><p>Learning to recognize smells gives your team a shared diagnostic vocabulary: <b>Feature Envy</b> (a class calling methods on another object more than its own), <b>Data Clumps</b> (three variables that always travel together), and <b>Primitive Obsession</b>.</p>`,
        keyIdea: "A code smell is a surface symptom that signals underlying architectural rot."
      },
      predict: {
        q: "What code smell is present when 'city, state, zipcode' are passed together as separate arguments across 10 functions?",
        a: [
          "Data Clumps (they should be packaged into an Address object or class)",
          "Shotgun Surgery",
          "Dead Code",
          "There is no code smell"
        ],
        c: 0,
        why: "Data Clumps: values that always travel together should be bundled into a cohesive domain object."
      },
      sec2: {
        title: "The code smell diagnostic index",
        content: `<p>Learn the symptoms and remedies for the classic Martin Fowler code smells.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Long Method", lines: ["functions > 25 lines", "does multiple things", "Fix: Extract Method"] },
          { title: "Feature Envy", lines: ["method accesses another class's fields more than its own", "Fix: Move Method to owner"] },
          { title: "Data Clumps", lines: ["same 3 params travel together", "Fix: Extract Class (e.g. Address)"] }
        ]
      },
      sec3: {
        title: "Tracing Feature Envy refactoring",
        content: `<p>Trace how moving an envious method to the class that owns the data fixes the smell.</p>`,
      },
      trace: {
        code: [
          "# Bad (Feature Envy): OrderService reaches into User for every detail",
          "# def get_user_label(user): return f'{user.first_name} {user.last_name} ({user.email})'",
          "# Good (Move Method to the data owner):",
          "class User:",
          "    def full_label(self): return f'{self.first_name} {self.last_name} ({self.email})'"
        ],
        steps: [
          { line: 0, vars: { smell: "OrderService envies User's internal properties" } },
          { line: 3, vars: { refactoring: "method moved directly onto User class" } },
          { line: 4, vars: { result: "encapsulation restored; external envy eliminated" } }
        ]
      },
      practiceIntro: "Test your memory of code smells.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A surface symptom indicating deeper design rot is a code <0>.",
          "A method that obsessively queries another object's data has Feature <1>.",
          "Variables that always travel together in parameter lists are Data <2>."
        ],
        blanks: [
          { a: ["smell"], why: "Code smells identify design weaknesses." },
          { a: ["Envy"], why: "Feature Envy indicates mislocated logic." },
          { a: ["Clumps"], why: "Data Clumps should be encapsulated into classes." }
        ]
      },
      win: "You can spot classic code smells during code reviews and prescribe the exact refactoring patterns to resolve them.",
      nextTasks: [
        "Audit a class in your project and check if any method exhibits Feature Envy.",
        "Bundle a set of 3 repeating parameters into a clean Data Clump object.",
        "Read Chapter 3 ('Bad Smells in Code') of Martin Fowler's *Refactoring*."
      ],
      primarySource: "Martin Fowler, *Refactoring: Improving the Design of Existing Code*, Chapter 3: 'Bad Smells in Code'.",
      quiz: [
        {
          q: "What is 'Feature Envy' in object-oriented code design?",
          a: [
            "A method in Class A that calls getters and inspects data on Class B more than its own data",
            "A software engineer wanting to work on a competitor's features",
            "A feature that takes more than a month to build",
            "A bug that crashes the compiler"
          ],
          c: 0,
          why: "Feature Envy indicates that the method is on the wrong class and should be moved to the data owner."
        },
        {
          q: "What is 'Primitive Obsession'?",
          a: [
            "Using raw primitive types (strings, numbers) for rich domain concepts (like currencies, phone numbers, or zip codes) instead of dedicated objects",
            "Writing code in ancient programming languages",
            "Refusing to use cloud servers",
            "Writing code using only lowercase letters"
          ],
          c: 0,
          why: "Primitive obsession spreads validation logic across the codebase instead of encapsulating it in a value object."
        },
        {
          q: "What refactoring technique is the primary cure for a 'Long Method' code smell?",
          a: [
            "Extract Method (extracting cohesive sub-sections into small, intention-revealing helper functions)",
            "Deleting the code completely",
            "Making the font size smaller in the editor",
            "Renaming the file"
          ],
          c: 0,
          why: "Extract Method isolates sub-tasks into small, descriptive, self-documenting functions."
        },
        {
          q: "Does the presence of a code smell mean the software contains a bug?",
          a: [
            "No, the code may run correctly and pass all tests; a smell indicates poor design that increases future maintenance risk",
            "Yes, a code smell is a fatal syntax error",
            "Yes, code smells cause physical hard drive damage",
            "Code smells only exist in Python"
          ],
          c: 0,
          why: "Smells are architectural warnings about design quality, not immediate functional bugs."
        }
      ]
    },
    {
      n: 6,
      id: "shotgun-surgery-and-divergent-change",
      title: "Shotgun surgery and divergent change",
      topic: "Recognizing Code Smells",
      anim: "Code",
      lede: "One change, twenty files. Master the twin architectural smells: Shotgun Surgery (one change forces edits across many files) and Divergent Change (one file changes for many reasons).",
      winShort: "Differentiate Shotgun Surgery from Divergent Change and consolidate fragmented responsibilities",
      missionLink: "Prevents high coupling and fragmented domain logic across backend modules",
      sec1: {
        title: "The twin coupling smells",
        content: `<p>Two classic smells represent opposite sides of the same coupling coin: <b>Divergent Change</b> happens when <i>one file suffers many different kinds of edits</i>. You edit <code>User.py</code> when database schemas change, when HTTP JSON formatting changes, AND when tax calculation rules change.</p><p><b>Shotgun Surgery</b> is the opposite: <i>one single business change forces you to make tiny edits across twenty different files</i>! Add a new user role, and you must edit the controller, the database model, the view template, the permission check, and the billing service.</p>`,
        keyIdea: "Divergent Change: one class has many reasons to change. Shotgun Surgery: one change touches many classes."
      },
      predict: {
        q: "If adding a new payment method forces you to edit 14 different files across the codebase, which smell is present?",
        a: [
          "Shotgun Surgery (the responsibility is fragmented across too many files)",
          "Divergent Change",
          "Dead Code",
          "There is no code smell"
        ],
        c: 0,
        why: "Shotgun Surgery: making one logical change fires like a shotgun across dozens of files."
      },
      sec2: {
        title: "Twin smells compared",
        content: `<p>Contrast the one-to-many relationship of changes to classes in both smells.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Divergent Change (1 Class, Many Reasons)", lines: ["One class suffers multiple types of edits", "violates Single Responsibility", "Fix: Split class by responsibility"] },
          { title: "Shotgun Surgery (Many Classes, 1 Reason)", lines: ["One business edit touches 15 files", "responsibility fragmented everywhere", "Fix: Move and consolidate into one module"] }
        ]
      },
      sec3: {
        title: "Tracing Shotgun Surgery consolidation",
        content: `<p>Trace how consolidating payment logic into a single Strategy module eliminates shotgun surgery.</p>`,
      },
      trace: {
        code: [
          "# Before: Payment checks scattered across 10 files (if payment_type == 'paypal' everywhere)",
          "# Adding 'apple_pay' requires editing all 10 files!",
          "# After: Consolidate into PaymentStrategy registry:",
          "class PaymentStrategyRegistry:",
          "    # New payment methods are registered here in ONE file, with ZERO edits to caller files!"
        ],
        steps: [
          { line: 0, vars: { smell: "fragmented switch statements scattered across codebase" } },
          { line: 2, vars: { refactoring: "consolidate logic into polymorphic strategy pattern" } },
          { line: 4, vars: { outcome: "adding payment methods now touches exactly one isolated file" } }
        ]
      },
      practiceIntro: "Test your memory of coupling smells.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "When one change forces edits across many files, it is <0> Surgery.",
          "When one class is modified for many unrelated reasons, it is <1> Change.",
          "Both smells are cured by aligning code with the Single <2> Principle."
        ],
        blanks: [
          { a: ["Shotgun"], why: "Shotgun Surgery fragments responsibilities." },
          { a: ["Divergent"], why: "Divergent Change overburdens a single class." },
          { a: ["Responsibility"], why: "SRP ensures one reason to change per class." }
        ]
      },
      win: "You can identify fragmented responsibilities and consolidate related logic so changes are localized to a single file.",
      nextTasks: [
        "Identify an area in your project where a single change previously required editing multiple files.",
        "Consolidate scattered conditional switch statements into a single polymorphic strategy module.",
        "Split a class suffering from Divergent Change into two single-responsibility classes."
      ],
      primarySource: "Martin Fowler, *Refactoring*, Chapter 3: 'Divergent Change' & 'Shotgun Surgery'.",
      quiz: [
        {
          q: "What is 'Shotgun Surgery' in software architecture?",
          a: [
            "Every time you make a modification, you have to make a lot of little changes across many different classes",
            "Shooting a server computer with a firearm",
            "A database backup script that runs in parallel",
            "A compiler optimization for game development"
          ],
          c: 0,
          why: "When responsibilities are fragmented, a single conceptual update scatters edits everywhere."
        },
        {
          q: "What is 'Divergent Change'?",
          a: [
            "When one single class is commonly changed in different ways for different reasons (e.g. changed for DB reasons AND financial reasons)",
            "When two branches in git are merged",
            "When an API changes its domain name",
            "When a variable changes from an integer to a float"
          ],
          c: 0,
          why: "Divergent Change violates SRP by forcing one class to serve multiple distinct business masters."
        },
        {
          q: "How does the Open-Closed Principle (OCP) help cure Shotgun Surgery?",
          a: [
            "By using polymorphism or plugins so new features are added by writing a new class, rather than editing 10 existing switch statements",
            "By locking files so other developers cannot edit them",
            "By closing the office on weekends",
            "By making all variables global"
          ],
          c: 0,
          why: "Polymorphism allows extending behavior through new classes rather than modifying existing files."
        },
        {
          q: "What is the primary danger of Shotgun Surgery for engineering teams?",
          a: [
            "Developers easily miss one of the 15 required edits, causing silent regressions and bugs in edge cases",
            "It deletes git commit history",
            "It slows down internet download bandwidth",
            "It causes text editors to crash"
          ],
          c: 0,
          why: "When changes must be made across dozens of files, human oversight guarantees missed edits."
        }
      ]
    },
    {
      n: 7,
      id: "the-mechanics-of-safe-refactoring",
      title: "The mechanics of safe refactoring",
      topic: "The Refactoring Discipline",
      anim: "Code",
      lede: "Refactoring without tests is just changing stuff and hoping it works. Master the safe refactoring discipline: automated test suites, baby steps, and zero behavior changes.",
      winShort: "Execute refactorings in small, verified micro-steps protected by automated test suites",
      missionLink: "Ensures code improvements never introduce accidental production regressions",
      sec1: {
        title: "Preserving external behavior",
        content: `<p>Martin Fowler defines <b>Refactoring</b> with mathematical precision: <i>A change made to the internal structure of software to make it easier to understand and cheaper to modify, without changing its observable behavior.</i></p><p>Refactoring is <b>not</b> rewriting. Refactoring is <b>not</b> bug fixing. When refactoring, you do not add features and you do not fix defects. You take tiny 'baby steps', running your automated test suite after each 10-second change. If a test fails, you know the exact 5 characters that broke it!</p>`,
        keyIdea: "Refactoring improves internal structure without altering external observable behavior."
      },
      predict: {
        q: "What is the prerequisite for performing safe, fearless refactoring on legacy code?",
        a: [
          "A fast, comprehensive automated test suite that catches regressions immediately",
          "Permission from the company chief executive officer",
          "A brand new computer with high RAM",
          "Working late at night when users are asleep"
        ],
        c: 0,
        why: "Without automated tests, you cannot know whether a refactoring altered external behavior."
      },
      sec2: {
        title: "The two hats of programming",
        content: `<p>Kent Beck's metaphor: wear the Adding Features hat OR the Refactoring hat, never both at once.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Hat 1: Adding Features", lines: ["write new tests", "make tests pass", "behavior CHANGES; structure may be rough"] },
          { title: "Hat 2: Refactoring", lines: ["tests remain unchanged", "restructure code for clarity", "behavior MUST NOT CHANGE!"] }
        ]
      },
      sec3: {
        title: "Tracing the micro-step refactoring loop",
        content: `<p>Trace how a developer renames a function across five safe, test-verified baby steps.</p>`,
      },
      trace: {
        code: [
          "Step 1: Run test suite -> ALL PASS (green baseline)",
          "Step 2: Rename internal variable 'd' -> 'discount_amount'",
          "Step 3: Run test suite -> ALL PASS (verified in 3 seconds)",
          "Step 4: Extract calculate_tax() helper function",
          "Step 5: Run test suite -> ALL PASS (clean commit!)"
        ],
        steps: [
          { line: 0, vars: { baseline: "automated tests prove current behavior works" } },
          { line: 1, vars: { micro_step_1: "small rename applied" } },
          { line: 2, vars: { verified_1: "test green" } },
          { line: 3, vars: { micro_step_2: "small extraction applied" } },
          { line: 4, vars: { verified_2: "test green; code committed with zero regression risk" } }
        ]
      },
      practiceIntro: "Test your memory of safe refactoring principles.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Restructuring code without altering external behavior is <0>.",
          "Refactoring safely requires a reliable suite of automated <1>.",
          "Taking tiny verified edits one at a time is the baby <2> discipline."
        ],
        blanks: [
          { a: ["refactoring"], why: "Refactoring improves internal structure." },
          { a: ["tests", "unit tests"], why: "Tests guard against regressions." },
          { a: ["steps"], why: "Baby steps isolate mistakes immediately." }
        ]
      },
      win: "You can refactor complex legacy code systematically in small, test-verified increments without introducing regressions.",
      nextTasks: [
        "Run your test suite before touching code to establish a green baseline.",
        "Perform an Extract Function refactoring and run tests after each micro-step.",
        "Practice switching strictly between the 'Feature' hat and the 'Refactoring' hat."
      ],
      primarySource: "Martin Fowler, *Refactoring: Improving the Design of Existing Code* (Chapter 1: 'Refactoring: A First Example').",
      quiz: [
        {
          q: "What is the strict definition of Refactoring?",
          a: [
            "Improving internal code structure to make it cleaner and cheaper to modify, without altering its observable behavior",
            "Rewriting an entire software system from scratch in a new language",
            "Fixing critical bugs in production software",
            "Adding new features requested by clients"
          ],
          c: 0,
          why: "Refactoring specifically preserves external behavior while cleaning internal architecture."
        },
        {
          q: "Why shouldn't you add new features at the exact same time you are refactoring?",
          a: [
            "If tests fail, you cannot tell whether the failure was caused by a regression from refactoring or a bug in the new feature",
            "Computers cannot compile both at once",
            "It violates git version control commit rules",
            "It doubles the size of database tables"
          ],
          c: 0,
          why: "Separating feature additions from refactorings keeps debugging simple and diffs reviewable."
        },
        {
          q: "What should you do if an automated test fails after a 30-second refactoring edit?",
          a: [
            "Undo the edit immediately (Ctrl-Z / git checkout) and take a smaller, safer step",
            "Delete the failing test so the build passes",
            "Spend four hours debugging why the large refactoring failed",
            "Deploy the code to production anyway"
          ],
          c: 0,
          why: "In baby-step refactoring, reverting to the last green state takes 2 seconds and avoids deep debugging."
        },
        {
          q: "What role do modern IDE automated refactoring tools (e.g. Rename Symbol, Extract Method) play?",
          a: [
            "They perform AST-aware code transformations across the entire project safely, avoiding manual find-and-replace typos",
            "They write code without human programmers",
            "They convert SQL into HTML",
            "They eliminate the need for version control"
          ],
          c: 0,
          why: "IDE refactoring tools understand language syntax trees, updating all references with mathematical precision."
        }
      ]
    },
    {
      n: 8,
      id: "the-boy-scout-rule-and-continuous-refactoring",
      title: "The Boy Scout rule and continuous refactoring",
      topic: "The Refactoring Discipline",
      anim: "Code",
      lede: "Always leave the campground cleaner than you found it. Discover the Boy Scout Rule: how continuous micro-cleanups prevent codebase rot without dedicated refactoring sprints.",
      winShort: "Apply the Boy Scout Rule on every commit to reverse technical debt continuously",
      missionLink: "The sustainable professional habit that keeps long-lived codebases healthy",
      sec1: {
        title: "Leave the code cleaner than you found it",
        content: `<p>Software inevitably decays if neglected. Managers rarely approve a dedicated 'three-month refactoring sprint' to clean up technical debt, because businesses demand features.</p><p>The sustainable solution is the <b>Boy Scout Rule</b>: <i>Always leave the campground cleaner than you found it.</i> When working on a feature or bug, spend 2 minutes cleaning up the immediate neighborhood: rename one confusing variable, extract one long function, or delete a chunk of commented-out dead code. Over time, the codebase gets healthier with every single commit.</p>`,
        keyIdea: "Practice continuous micro-refactoring: leave the code a little cleaner than you found it on every task."
      },
      predict: {
        q: "What happens to a codebase that relies only on dedicated 'refactoring sprints' every few years?",
        a: [
          "Technical debt accumulates relentlessly, slowing development to a crawl between infrequent, risky rewrites",
          "The codebase stays permanently clean with zero effort",
          "The code becomes immune to bugs",
          "The software runs faster automatically"
        ],
        c: 0,
        why: "Infrequent rewrites rarely happen and carry massive risk; continuous micro-refactoring keeps debt low."
      },
      sec2: {
        title: "Technical debt versus continuous cleanup",
        content: `<p>Contrast compounding technical debt rot with the compounding value of continuous micro-refactoring.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Neglect (Compounding Rot)", lines: ["quick hacks pile up", "each feature gets harder and slower", "eventual total codebase freeze"] },
          { title: "Boy Scout Rule (Continuous)", lines: ["rename 1 variable per commit", "extract 1 helper per PR", "codebase improves continuously!"] }
        ]
      },
      sec3: {
        title: "Tracing a Boy Scout micro-cleanup",
        content: `<p>Trace how a developer cleans up a small legacy function while working on a feature ticket.</p>`,
      },
      trace: {
        code: [
          "# Ticket: Add phone number to user profile",
          "# While touching user_service.py, developer notices: dead commented-out code from 2024",
          "# Boy Scout Action 1: Delete dead commented-out code (git history preserves it!)",
          "# Boy Scout Action 2: Rename 'usr' -> 'user'",
          "# Commit: Feature added + codebase left cleaner than before!"
        ],
        steps: [
          { line: 0, vars: { task: "assigned business feature ticket" } },
          { line: 2, vars: { hygiene_1: "purged dead zombie code" } },
          { line: 3, vars: { hygiene_2: "clarified variable naming in immediate neighborhood" } },
          { line: 4, vars: { compounding_gain: "PR delivers feature and leaves module healthier" } }
        ]
      },
      practiceIntro: "Test your memory of the Boy Scout Rule.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The practice of leaving code cleaner than you found it is the Boy <0> Rule.",
          "The implied cost of future rework caused by quick hacks is technical <1>.",
          "Unused commented-out code that clutters files is <2> code."
        ],
        blanks: [
          { a: ["Scout"], why: "The Boy Scout Rule encourages continuous micro-cleanups." },
          { a: ["debt"], why: "Technical debt accumulates interest over time." },
          { a: ["dead"], why: "Dead code should be deleted; git preserves history." }
        ]
      },
      win: "You can integrate continuous micro-refactoring into your daily workflow, reversing technical debt on every commit.",
      nextTasks: [
        "Delete a block of commented-out dead code in your project today.",
        "Rename an ambiguous variable in a file you touch on your next PR.",
        "Advocate for the Boy Scout Rule during code reviews."
      ],
      primarySource: "Robert C. Martin, *Clean Code*, Chapter 1: 'The Boy Scout Rule'.",
      quiz: [
        {
          q: "What is the 'Boy Scout Rule' in software engineering?",
          a: [
            "Always check in a module cleaner than you checked it out (leave the code cleaner than you found it)",
            "Always wear a uniform when writing code",
            "Write code that can run in outdoor wilderness camps",
            "Never write code after 5:00 PM"
          ],
          c: 0,
          why: "Coined by Uncle Bob Martin, it encourages small continuous cleanups with every task."
        },
        {
          q: "Why should commented-out code be deleted immediately rather than kept around 'just in case'?",
          a: [
            "Version control (git) already preserves complete historical records forever; commented code is dead noise that confuses readers",
            "Commented code increases the download file size of images",
            "Compilers delete files that contain comments",
            "Commented code causes security vulnerabilities"
          ],
          c: 0,
          why: "Git history exists for recovery; commented-out code creates visual clutter and rots quickly."
        },
        {
          q: "What is Ward Cunningham's metaphor of 'Technical Debt'?",
          a: [
            "Writing quick, dirty code borrows time against the future; until paid back via refactoring, it charges 'interest' in slower development",
            "The monetary amount owed to Amazon Web Services for cloud hosting",
            "The salary paid to junior developers",
            "A loan taken from a bank to purchase computers"
          ],
          c: 0,
          why: "Technical debt trades future velocity for short-term speed, charging interest on every subsequent task."
        },
        {
          q: "How does continuous micro-refactoring avoid the need for massive, risky rewrites?",
          a: [
            "Constant small improvements keep architectural entropy under control, preventing debt from reaching crisis levels",
            "It forces all developers to work on weekends",
            "It turns off software updates",
            "It deletes all old features"
          ],
          c: 0,
          why: "Daily micro-cleanups prevent rot from compounding into the unmanageable mess that triggers rewrites."
        }
      ]
    }
  ]
};

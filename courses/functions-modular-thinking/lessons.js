/* ============================================================
   Functions & Modular Thinking — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.

   Add a lesson by appending one entry here and creating the
   matching file in ./lessons/. Nothing else needs to change.

   Fields
     n     1-based lesson number (must be unique, in order)
     id    dash-case slug, matches the filename after the number
     file  path to the lesson, relative to THIS course folder
     title short title shown in nav and the map
     topic the layer of the machine it covers (for grouping)
     anim  legacy scene key (animations are not used by the lesson
           pages; kept for reference and for the hub card art)

   The same file also carries this course's GLOSSARY (window.TeachGlossary).
   It is the course's own vocabulary, grouped into sections, and it is the
   single source of truth for the term list: the course's reference page
   renders it, and the site-wide glossary links back into it.
   ============================================================ */
window.TeachLessons = [
  { n: 1,  id: "naming-a-block-of-work",   file: "lessons/0001-naming-a-block-of-work.html",   title: "Naming a block of work",   topic: "Defining", anim: "FmtDefine" },
  { n: 2,  id: "calling-a-function",       file: "lessons/0002-calling-a-function.html",       title: "Calling a function",       topic: "Defining", anim: "FmtCall" },
  { n: 3,  id: "parameters-and-arguments", file: "lessons/0003-parameters-and-arguments.html", title: "Parameters and arguments", topic: "Passing", anim: "FmtParams" },
  { n: 4,  id: "default-values",           file: "lessons/0004-default-values.html",           title: "Default values",           topic: "Passing", anim: "FmtDefaults" },
  { n: 5,  id: "returning-a-value",        file: "lessons/0005-returning-a-value.html",        title: "Returning a value",        topic: "Returning", anim: "FmtReturn" },
  { n: 6,  id: "multiple-returns-and-none", file: "lessons/0006-multiple-returns-and-none.html", title: "Multiple returns and None", topic: "Returning", anim: "FmtNone" },
  { n: 7,  id: "the-call-stack",           file: "lessons/0007-the-call-stack.html",           title: "The call stack",           topic: "Scope & the stack", anim: "FmtStack" },
  { n: 8,  id: "scope-local-and-global",   file: "lessons/0008-scope-local-and-global.html",   title: "Scope: local and global",  topic: "Scope & the stack", anim: "FmtScope" },
  { n: 9,  id: "contracts-docstrings-hints", file: "lessons/0009-contracts-docstrings-hints.html", title: "Contracts: docstrings and hints", topic: "Modular thinking", anim: "FmtContract" },
  { n: 10, id: "splitting-a-program",      file: "lessons/0010-splitting-a-program.html",      title: "Splitting a program",      topic: "Modular thinking", anim: "FmtSplit" }
];

/* ============================================================
   Functions & Modular Thinking — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections. Each
   entry:
     term   the word or symbol being defined
     def    one-sentence definition (may contain <code> markup)
     lesson the lesson number that teaches it (1-based)
     tags   free-form tags, used by the site-wide glossary filter

   The course's reference page renders this list, and the site
   glossary links each term back to the lesson that teaches it.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "defining", title: "Defining",
    terms: [
      { term: "Function", def: "A named block of code you define once and can run as many times as you like by calling its name.", lesson: 1, tags: ["functions", "fundamentals"] },
      { term: "def", def: "The keyword that starts a function definition: <code>def</code>, a name, parentheses, a colon, then an indented body.", lesson: 1, tags: ["functions", "syntax"] },
      { term: "Function body", def: "The indented block under a <code>def</code> line — the work that runs each time the function is called.", lesson: 1, tags: ["functions", "syntax"] },
      { term: "Function name", def: "The identifier bound to a function. Calling it means writing the name followed by parentheses.", lesson: 1, tags: ["functions", "syntax"] },
      { term: "Call", def: "Running a function by writing its name and a pair of parentheses, optionally with arguments inside.", lesson: 2, tags: ["functions", "calls"] },
      { term: "Call site", def: "The exact place in the code where a function is called — the line the program returns to when the call finishes.", lesson: 2, tags: ["functions", "calls"] },
      { term: "Definition vs call", def: "A definition says what the work is; a call does the work. Defining a function does not run its body.", lesson: 2, tags: ["functions", "calls"] }
    ]
  },
  {
    id: "passing", title: "Passing",
    terms: [
      { term: "Parameter", def: "A name in the function definition that receives a value when the function is called.", lesson: 3, tags: ["functions", "parameters"] },
      { term: "Argument", def: "The actual value supplied at the call site, which the matching parameter is bound to.", lesson: 3, tags: ["functions", "parameters"] },
      { term: "Positional argument", def: "An argument matched to a parameter by its position in the call, left to right.", lesson: 3, tags: ["functions", "parameters"] },
      { term: "Keyword argument", def: "An argument written as <code>name=value</code>, matched to the parameter by name rather than position.", lesson: 3, tags: ["functions", "parameters"] },
      { term: "Default value", def: "A value given to a parameter in the definition, used when the caller does not supply that argument.", lesson: 4, tags: ["functions", "parameters"] },
      { term: "Optional parameter", def: "A parameter with a default value, so the caller may leave it out entirely.", lesson: 4, tags: ["functions", "parameters"] },
      { term: "Mutable default trap", def: "The bug where a default list or dict is created once and shared across every call, so it accumulates.", lesson: 4, tags: ["functions", "pitfalls"] }
    ]
  },
  {
    id: "returning", title: "Returning",
    terms: [
      { term: "return", def: "The statement that ends a function immediately and hands a value back to the call site.", lesson: 5, tags: ["functions", "return"] },
      { term: "Return value", def: "The value a call evaluates to — what the call site receives in place of the call expression.", lesson: 5, tags: ["functions", "return"] },
      { term: "print vs return", def: "Printing shows a value on screen; returning hands it back to the program. Only a return can be used in further work.", lesson: 5, tags: ["functions", "return"] },
      { term: "Early return", def: "A <code>return</code> placed before the end of the body to leave as soon as the answer is known.", lesson: 6, tags: ["functions", "return"] },
      { term: "None", def: "Python's value for \"no value\". A function with no <code>return</code> hands back <code>None</code>.", lesson: 6, tags: ["functions", "return"] },
      { term: "Implicit None", def: "The <code>None</code> a function returns when its body finishes without reaching a <code>return</code>.", lesson: 6, tags: ["functions", "return"] }
    ]
  },
  {
    id: "scope", title: "Scope & the stack",
    terms: [
      { term: "Call stack", def: "The stack of active calls, newest on top. Each call adds a frame and each return removes one.", lesson: 7, tags: ["functions", "stack"] },
      { term: "Frame", def: "The record of one active call: its parameters, its local names, and the line it is currently on.", lesson: 7, tags: ["functions", "stack"] },
      { term: "Traceback", def: "The report Python prints when an error escapes, listing the frames from the outermost call to the failing line.", lesson: 7, tags: ["functions", "errors"] },
      { term: "Scope", def: "The region of a program where a name can be seen and used.", lesson: 8, tags: ["functions", "scope"] },
      { term: "Local variable", def: "A name created inside a function body. It exists only while that call is running.", lesson: 8, tags: ["functions", "scope"] },
      { term: "Global variable", def: "A name created at the top level of a module, visible to every function in that module.", lesson: 8, tags: ["functions", "scope"] },
      { term: "Shadowing", def: "When a local name hides a global name with the same spelling inside a function.", lesson: 8, tags: ["functions", "scope"] }
    ]
  },
  {
    id: "modular", title: "Modular thinking",
    terms: [
      { term: "Contract", def: "What a function promises: what it takes in, what it gives back, and what it does not do.", lesson: 9, tags: ["functions", "design"] },
      { term: "Docstring", def: "A string literal as the first line of a function body, describing what the function does.", lesson: 9, tags: ["functions", "documentation"] },
      { term: "Type hint", def: "An annotation such as <code>def f(x: int) -&gt; str</code> that records the intended types without enforcing them.", lesson: 9, tags: ["functions", "types"] },
      { term: "Pure function", def: "A function whose result depends only on its arguments and which changes nothing outside itself.", lesson: 9, tags: ["functions", "design"] },
      { term: "Side effect", def: "Any change a function makes beyond returning a value — printing, writing a file, mutating an argument.", lesson: 9, tags: ["functions", "design"] },
      { term: "Single responsibility", def: "The rule that a function should do one thing, so its name can describe it without the word \"and\".", lesson: 10, tags: ["functions", "design"] },
      { term: "Decomposition", def: "Breaking a long program into named functions, each with one clear job.", lesson: 10, tags: ["functions", "design"] },
      { term: "Refactoring", def: "Changing the shape of code without changing what it does — for example, extracting a function.", lesson: 10, tags: ["functions", "design"] }
    ]
  }
];

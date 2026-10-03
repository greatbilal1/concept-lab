/* ============================================================
   Python Errors & Exceptions — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.

   Add a lesson by appending one entry here and creating the
   matching file in ./lessons/. Nothing else needs to change.
   (Or run: node tools/new-lesson.js python-errors-exceptions "<Lesson title>")

   Fields
     n     1-based lesson number (must be unique, in order)
     id    dash-case slug, matches the filename after the number
     file  path to the lesson, relative to THIS course folder
     title short title shown in nav and the map
     topic the grouping label used by the hub
     anim  legacy scene key (kept for the hub card art)
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "what-an-error-actually-is", file: "lessons/0001-what-an-error-actually-is.html", title: "What an error actually is", topic: "Tracebacks", anim: "PyErrWhat" },
  { n: 2, id: "reading-a-traceback", file: "lessons/0002-reading-a-traceback.html", title: "Reading a traceback", topic: "Tracebacks", anim: "PyErrTrace" },
  { n: 3, id: "catching-what-you-expect", file: "lessons/0003-catching-what-you-expect.html", title: "Catching what you expect", topic: "Catching", anim: "PyErrCatch" },
  { n: 4, id: "catching-well", file: "lessons/0004-catching-well.html", title: "Catching well", topic: "Catching", anim: "PyErrCatchWell" },
  { n: 5, id: "raising-your-own", file: "lessons/0005-raising-your-own.html", title: "Raising your own", topic: "Raising", anim: "PyErrRaise" },
  { n: 6, id: "custom-exception-types", file: "lessons/0006-custom-exception-types.html", title: "Custom exception types", topic: "Raising", anim: "PyErrCustom" },
  { n: 7, id: "designing-failure", file: "lessons/0007-designing-failure.html", title: "Designing failure", topic: "Designing failure", anim: "PyErrDesign" },
  { n: 8, id: "putting-it-together", file: "lessons/0008-putting-it-together.html", title: "Putting it together", topic: "Putting it together", anim: "PyErrTogether" }
];

/* ============================================================
   Python Errors & Exceptions — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections. Each
   entry:
     term   the word or symbol being defined
     def    one-sentence definition (may contain <code> markup)
     lesson the lesson number that teaches it (1-based)
     tags   free-form tags, used by the site-wide glossary filter
   ============================================================ */
window.TeachGlossary = [
  {
    id: "tracebacks", title: "Tracebacks",
    terms: [
      { term: "Exception", def: "An object Python creates when something goes wrong at runtime. It carries a type, a message, and a traceback.", lesson: 1, tags: ["errors", "runtime"] },
      { term: "Syntax error", def: "A failure before the program runs at all: Python cannot parse the file, so nothing executes.", lesson: 1, tags: ["errors", "parsing"] },
      { term: "Runtime error", def: "A failure while the program is running, raised as an exception at the exact line that could not complete.", lesson: 1, tags: ["errors", "runtime"] },
      { term: "Traceback", def: "The report Python prints when an exception escapes: the call stack from the entry point down to the failing line.", lesson: 2, tags: ["traceback", "debugging"] },
      { term: "Call stack", def: "The chain of function calls currently in progress. Each frame is one function waiting for the one it called.", lesson: 2, tags: ["traceback", "runtime"] },
      { term: "Frame", def: "One entry in a traceback: a file, a line number, the function name, and the source line that was executing.", lesson: 2, tags: ["traceback", "runtime"] },
      { term: "Exception message", def: "The human-readable text after the exception type on the last line of a traceback, describing what specifically went wrong.", lesson: 2, tags: ["traceback", "debugging"] }
    ]
  },
  {
    id: "catching", title: "Catching",
    terms: [
      { term: "try", def: "The block that holds code which might raise. Python watches it and hands control to a matching <code>except</code> if it does.", lesson: 3, tags: ["try", "syntax"] },
      { term: "except", def: "The block that handles a specific exception type. Only the first matching clause runs.", lesson: 3, tags: ["except", "syntax"] },
      { term: "else", def: "An optional block after <code>except</code> that runs only when the <code>try</code> block finished with no exception.", lesson: 3, tags: ["else", "syntax"] },
      { term: "finally", def: "A block that always runs — whether the <code>try</code> succeeded, raised, or returned. Used for cleanup.", lesson: 4, tags: ["finally", "cleanup"] },
      { term: "Bare except", def: "An <code>except:</code> with no type. It catches everything, including <code>KeyboardInterrupt</code>, and hides real bugs.", lesson: 4, tags: ["except", "antipattern"] },
      { term: "Exception chaining", def: "Linking a new exception to the one that caused it with <code>raise ... from ...</code>, so the original cause is not lost.", lesson: 4, tags: ["raise", "debugging"] },
      { term: "Re-raise", def: "Catching an exception, doing something useful, then raising it again with a bare <code>raise</code> so it keeps propagating.", lesson: 4, tags: ["raise", "except"] }
    ]
  },
  {
    id: "raising", title: "Raising",
    terms: [
      { term: "raise", def: "The statement that creates an exception and starts it propagating up the call stack.", lesson: 5, tags: ["raise", "syntax"] },
      { term: "Fail fast", def: "Detecting a bad state at the moment it appears and raising immediately, rather than letting it corrupt later work.", lesson: 5, tags: ["design", "raising"] },
      { term: "Guard clause", def: "An early check at the top of a function that raises when its inputs are invalid, keeping the main body clean.", lesson: 5, tags: ["design", "raising"] },
      { term: "Built-in exception", def: "One of Python's ready-made exception types — <code>ValueError</code>, <code>TypeError</code>, <code>KeyError</code>, <code>FileNotFoundError</code> and friends.", lesson: 5, tags: ["raise", "types"] },
      { term: "Custom exception", def: "A class you define, usually subclassing <code>Exception</code>, so callers can catch your failure by name.", lesson: 6, tags: ["types", "design"] },
      { term: "Exception hierarchy", def: "The tree of exception classes rooted at <code>BaseException</code>. Catching a parent catches every descendant.", lesson: 6, tags: ["types", "design"] },
      { term: "Exception group", def: "A single exception that wraps several others, raised together with <code>except*</code> in Python 3.11 and later.", lesson: 6, tags: ["types", "modern"] }
    ]
  },
  {
    id: "design", title: "Designing failure",
    terms: [
      { term: "Error message", def: "The text a human reads when something fails. A good one names the value, the expectation, and the fix.", lesson: 7, tags: ["design", "messages"] },
      { term: "Look before you leap", def: "Checking conditions before acting (<code>if key in d</code>). The alternative is asking forgiveness afterwards.", lesson: 7, tags: ["design", "style"] },
      { term: "Easier to ask forgiveness", def: "The EAFP style: just try the operation and catch the exception if it fails. Often shorter and race-free.", lesson: 7, tags: ["design", "style"] },
      { term: "Silent failure", def: "Swallowing an exception with <code>pass</code> so the program continues with wrong data and no warning. Almost always a bug.", lesson: 7, tags: ["design", "antipattern"] },
      { term: "Logging", def: "Recording what happened, including the traceback, so a failure can be diagnosed after the fact without a debugger.", lesson: 7, tags: ["design", "observability"] },
      { term: "assert", def: "A statement that raises <code>AssertionError</code> if a condition is false. For internal invariants, not user input.", lesson: 7, tags: ["design", "checks"] }
    ]
  },
  {
    id: "together", title: "Putting it together",
    terms: [
      { term: "Error boundary", def: "A single place in a program where exceptions are caught and turned into a clean outcome, so the rest of the code stays simple.", lesson: 8, tags: ["design", "architecture"] },
      { term: "Retry", def: "Catching a transient failure and attempting the operation again, usually with a delay and a maximum attempt count.", lesson: 8, tags: ["design", "resilience"] },
      { term: "Cleanup", def: "Releasing resources — files, connections, locks — whether the work succeeded or failed. <code>finally</code> and <code>with</code> do this.", lesson: 8, tags: ["design", "resources"] },
      { term: "Context manager", def: "An object used with <code>with</code> that guarantees setup and teardown, running cleanup even when an exception escapes.", lesson: 8, tags: ["design", "resources"] }
    ]
  }
];

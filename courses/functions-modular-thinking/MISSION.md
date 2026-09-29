# Mission: Functions & Modular Thinking

## Why
I can write a program that decides and repeats, but it is one long scroll of
statements. When something breaks I cannot find the line, and when I need the same
work twice I copy it. I have never properly learned the one move that fixes both:
give a piece of work a **name**, and let the name stand in for the work. I want to
stop writing programs as a single stream and start writing them as a set of small,
named, testable pieces.

## Success looks like
- I can define a function, call it, and say what happens at the moment of the call.
- I can pass values in as parameters and get a value back with `return`.
- I can explain the difference between a parameter and an argument, and between
  printing a value and returning it.
- I can say what a default argument is for, and why a mutable default is a trap.
- I can read a traceback and follow the call stack to the line that actually failed.
- I can explain local vs global scope, and why a function cannot see a caller's
  local names.
- I can write a docstring and a type hint that describe a function's contract.
- I can take a long script and split it into named functions with clear jobs.
- I can recognise when two functions should be one, and when one should be two.

## Constraints
- Learning in short sessions; each lesson must be completable in one sitting.
- Prefer Python (the language I actually use), not a toy language.
- No build step, no accounts, no dependencies — everything runs offline from
  `file://` in the browser, matching the rest of this workspace.
- I want to *do* things, not just read. Every lesson should end with something
  I have built, called, or refactored.

## Out of scope
- Classes and objects — that is the OOP course. A method is a function with a
  receiver; this course teaches the function first.
- Decorators, closures and higher-order functions — a later topic, once the plain
  function is automatic.
- Recursion — it needs the call stack, which this course teaches, but the technique
  itself belongs with algorithms.
- Modules and packages as files (`import` from your own project) — a separate
  course. This course is about the *function* as the unit of modularity.
- Performance: which call is faster. This is about the mental model, not speed.

# Mission: Control Flow & Logic

## Why
I can write Python that runs, but I keep writing the same decision three times, or
a loop that never ends, or a chain of `if`s where the wrong branch fires. These are
not random — they all come from one thing I never properly learned: how a program
decides what to do next, and how to make it repeat work without repeating myself. I
want to stop guessing which branch runs and start predicting it.

## Success looks like
- I can say which values are truthy and which are falsy, and why `"0"` is true.
- I can predict the result of any comparison, including chained ones, without
  running it.
- I can build a truth table for `and`, `or` and `not`, and apply De Morgan's laws.
- I can explain why `False and expensive()` never calls `expensive()`.
- I can write an `if`/`elif`/`else` chain and say exactly which branch fires.
- I can write a `while` loop and point at the line that makes it stop.
- I can walk any iterable with `for`, and reduce a collection with an accumulator.
- I can use `break`, `continue` and the loop `else` deliberately.
- I can flatten deep nesting with early exits, and recognise a state machine.

## Constraints
- Learning in short sessions; each lesson must be completable in one sitting.
- Prefer Python (the language I actually use), not a toy language.
- No build step, no accounts, no dependencies — everything runs offline from
  `file://` in the browser, matching the rest of this workspace.
- I want to *do* things, not just read. Every lesson should end with something
  I have built, counted, or run.

## Out of scope
- `match`/`case` pattern matching — a later topic, once the basics are automatic.
- Generators, `yield`, and lazy iteration — a separate course.
- Exception handling as control flow (`try`/`except`/`finally`) — a separate topic.
- Comprehensions and functional tools (`map`, `filter`, `reduce`) — the accumulator
  pattern in this course is the foundation they build on.
- Performance: which loop is faster. This is about the mental model, not speed.

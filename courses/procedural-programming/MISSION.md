# Mission: Procedural Programming

## Why
I can write functions and control flow, but my programs are still one long script
that does everything at once. Every new feature means editing the same 200-line
block, and I cannot tell where one job ends and the next begins. I want to learn
the style that most real code actually starts in — a program as a sequence of
named steps — so I can break a problem into pieces, give each piece a name, and
run them in order. And I want to understand where that style starts to hurt, so I
know when to reach for something else.

## Success looks like
- I can explain what "procedural" means: a program as a sequence of steps that
  operate on shared data.
- I can take a messy script and split it into named procedures, each doing one job.
- I can pass data into a procedure and get a result back, instead of reaching for
  globals.
- I can explain why global state makes a program hard to reason about, and reduce
  it deliberately.
- I can group related procedures into a module and import them from another file.
- I can recognise the point where procedural code stops scaling — when the same
  data is passed to every function — and name the alternative.
- I can read a 100-line script and say, in one sentence, what each step does.

## Constraints
- Learning in short sessions; each lesson must be completable in one sitting.
- Prefer Python (the language I actually use), not a toy language.
- No build step, no accounts, no dependencies — everything runs offline from
  `file://` in the browser, matching the rest of this workspace.
- I want to *do* things, not just read. Every lesson should end with something I
  have built, refactored, or run.

## Out of scope
- Classes and objects — that is the OOP course, which this one prepares you for.
- Functional programming (pure functions, immutability, `map`/`filter`/`reduce`) —
  a separate style, covered elsewhere.
- Modules as packaging and distribution (`pip`, `pyproject.toml`) — this course
  covers importing your own files, not publishing them.
- Testing frameworks — the habit of small, single-job procedures is the
  prerequisite, but `pytest` itself is a later topic.
- Performance: which structure is faster. This is about the mental model, not speed.

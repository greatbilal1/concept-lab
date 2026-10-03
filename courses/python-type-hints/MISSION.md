# Mission — Python Type Hints

## Why this course exists

Most Python code runs fine without a single annotation, which is exactly why type
hints are so often skipped. The cost shows up later: a function's contract lives
only in the author's head, a refactor breaks a caller three files away, and the
only feedback arrives when a user hits the bug. This course closes that gap. It
takes the learner from "annotations are decoration" to "annotations are evidence a
tool can check", and gives them the vocabulary and the adoption plan to make a real
codebase safer without rewriting it.

## What the learner can do at the end

- Annotate any function, variable or class attribute correctly, and explain what an
  annotation does and does not do at runtime.
- Reach for the right type expression — unions, generics, protocols, aliases,
  `NewType`, `Literal`, `TypedDict` — instead of defaulting to `Any`.
- Run a static checker, read its output, and tighten strictness gradually.
- Explain how annotations are stored at runtime and why frameworks such as
  dataclasses, Pydantic and FastAPI depend on that.
- Plan an incremental adoption: annotate boundaries first, measure coverage, and
  know where to stop.

## What this course is NOT

- Not a runtime validation course. Annotations are not enforced; validation is a
  separate topic.
- Not a mypy configuration reference. It teaches how to read and act on checker
  output, not every flag.
- Not a performance course. Type hints do not make Python faster.
- Not a tour of every name in `typing`. Obscure constructs are deliberately left
  out.

## Success looks like

The learner annotates a module they already own, runs a checker, fixes what it
reports, and can explain to a colleague why the annotation was worth writing. They
stop reaching for `Any` by reflex, and they can say out loud what
`Optional[str]` really means.

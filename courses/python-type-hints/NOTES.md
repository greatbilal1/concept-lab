# Notes — Python Type Hints

Authoring decisions and open questions. Append as you go; never rewrite history.

## Decisions

- (2026-09-27) Ten lessons, grouped into four topics: Annotations (1–4), Generics
  (5–7), Checking (8–9), Together (10). The split follows the learner's questions in
  order: what is this, how do I write it, how do I express complex shapes, how do I
  get feedback, how do I use it for real.
- (2026-09-27) Lesson 1 deliberately spends its whole length on *why*, including
  what annotations are NOT. Learners who skip this lesson tend to expect runtime
  enforcement and get confused later.
- (2026-09-27) `Optional` gets its own lesson (4) rather than a paragraph, because
  "Optional does not mean the argument is optional" is the single most common
  misunderstanding in Python typing.
- (2026-09-27) `Any` vs `object` is taught explicitly in lesson 3. The honest use of
  `Any` is a judgement call, and learners need the vocabulary to make it.
- (2026-09-27) mypy is named as *the* checker in lesson 8, with a note that pyright
  exists. Naming one tool keeps the lesson concrete; the concepts transfer.
- (2026-09-27) Lesson 9 (runtime) comes after lesson 8 (checking) so that the
  learner already understands annotations are static before learning they are also
  stored as data.
- (2026-09-27) Lesson 10 is about adoption, not syntax. It is the only lesson that
  asks the learner to make a plan rather than write code.

## Open questions

- Should there be a lesson on `@overload`? It is genuinely useful but rare enough
  that it may belong in a follow-up course.
- Is `TypeVar` worth a full lesson, or should it fold into the generics lesson? It
  currently shares lesson 5 with collections.
- Should the course mention `pyright` and `pyre` by name, or keep mypy as the only
  named tool?

## Known gaps

- No coverage of `@overload`, `ParamSpec`, `Concatenate` or variadic generics.
- No coverage of `typing_extensions` backports for older Python versions.
- No coverage of PEP 649 / deferred annotation evaluation beyond a passing mention.
- No coverage of third-party runtime validation libraries (Pydantic is mentioned as
  a consumer of annotations, not taught).

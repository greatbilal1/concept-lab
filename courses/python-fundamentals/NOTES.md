# Notes — Python Fundamentals

Authoring decisions and open questions. Append as you go; never rewrite history.

## Decisions

- (2026-09-29) Ten lessons, one per concept cluster, grouped into six topics
  (`syntax`, `types`, `control`, `functions`, `modules`, `together`). Ten keeps
  each lesson under ~15 minutes while covering the whole beginner surface.
- (2026-09-29) Glossary is grouped by the same six topic ids so the glossary
  page and the course map share one vocabulary. Terms are defined in the lesson
  that first uses them.
- (2026-09-29) Every lesson ends with a "Primary source" note pointing at the
  official Python Tutorial section, so the course stays anchored to a
  high-trust reference rather than paraphrasing it.
- (2026-09-29) Quizzes use four options of equal word count so answer length
  never leaks the correct choice (also enforced by `tools/validate.js`).
- (2026-09-29) The `lab` widget is deliberately NOT used: its interpreter only
  understands class/attribute/instance/print, which does not fit a
  syntax-and-types course. `predict`, `fill`, `trace`, `diagram`, `introCards`
  and `cards` carry the interactivity instead.

## Open questions

- Should a later revision add a `dict`/`tuple` lesson, or leave those to the
  data-structures course? Currently out of scope.
- Is the mutable-default trap (Lesson 09) too advanced for a beginner tier-2
  course, or exactly the kind of "gotcha" that saves hours later?

## Known gaps

- No coverage of file I/O, exceptions (`try`/`except`), or comprehensions.
- No exercises with automated checking — practice is "do this next" prompts.
- Third-party packages and `pip` are mentioned only in passing.

# Notes — Python Files, JSON & Data

Authoring decisions and open questions. Append as you go; never rewrite history.

## Decisions

- (2026-09-27) Split the course into three glossary groups — `files`, `formats`,
  `together` — rather than four. Files and formats are genuinely distinct mental
  models, and the last three lessons are integration work that belongs together.
- (2026-09-27) Taught `with` as its own lesson (03) rather than folding it into
  reading and writing. The context-manager protocol is the concept; the syntax is
  incidental, and learners who only learn the syntax keep writing manual closes.
- (2026-09-27) Kept `pathlib` in the Files group rather than a separate "tooling"
  group. Paths are a file concept, and separating them would have made the group
  boundaries arbitrary.
- (2026-09-27) Used `DictReader`/`DictWriter` as the primary CSV API and treated
  `reader`/`writer` as the introduction. Column names are less error-prone than
  positions, and the conversion lesson depends on the dict shape.
- (2026-09-27) Made idempotency an explicit named concept in lesson 10 rather than
  an implicit property. It is the property that makes a pipeline safe to re-run,
  and it is easy to break accidentally.
- (2026-09-27) Every quiz option is written to the same word count, so the answer
  cannot be guessed from length alone.

## Open questions

- Should lesson 09 mention `pydantic` or schema libraries as a forward pointer, or
  does that pull focus from the standard library? Currently only mentioned in the
  ask-teacher prompt.
- Is `newline=""` explained well enough for a beginner, or does it need its own
  worked example showing the corruption it prevents?
- Should there be a lesson on streaming large files line by line instead of
  `read()`-ing everything into memory?

## Known gaps

- No coverage of binary files or `"rb"`/`"wb"` modes.
- No coverage of `tempfile`, atomic writes, or file locking.
- No coverage of YAML, TOML, XML or Parquet.
- No coverage of `pandas`, which many learners will meet immediately after this.
- Encoding is taught as "name utf-8", not as a deeper treatment of Unicode,
  normalisation or BOM handling.

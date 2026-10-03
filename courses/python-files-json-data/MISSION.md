# Mission — Python Files, JSON & Data

## Why this course exists

A program that cannot read or write files is a toy. The moment real work begins,
data lives on disk and travels between systems — as text files, JSON payloads and
CSV exports. Most beginners learn just enough to make it work once, then lose data
to a truncating `open()`, a platform-dependent encoding, or a `split(",")` that
breaks on the first quoted comma. This course closes that gap: it teaches file and
data handling as a set of deliberate choices, so the learner stops being lucky and
starts being correct.

## What the learner can do at the end

- Open, read and write files with the right mode and an explicit encoding, using
  `with` so cleanup is guaranteed even when the code raises.
- Build filesystem paths with `pathlib` that resolve correctly no matter where the
  program is launched from.
- Parse and produce JSON with the correct function for strings versus files, and
  explain the Python-to-JSON type mapping including where it is not reversible.
- Read and write CSV rows safely with `csv.reader`/`DictReader`, understanding why
  splitting on commas is a bug.
- Convert between CSV and JSON in both directions and verify the round trip.
- Validate data at the boundary and fail loudly, and assemble all of it into an
  idempotent read-transform-write pipeline.

## What this course is NOT

- Not a pandas or dataframe course. Everything here uses the standard library.
- Not a database course. Persistence beyond files is out of scope.
- Not a schema-design or serialisation-format survey (no XML, YAML, Parquet,
  protobuf).
- Not a performance course. Streaming and memory strategy for huge files is
  mentioned, not taught.

## Success looks like

The learner writes a script that reads a CSV, transforms it, writes JSON, and can
run it twice with identical results — and when the input is missing or malformed,
the program says so clearly instead of producing a wrong answer. They reach for
`with`, `pathlib` and the `csv` module by default, and they can explain why each
one is there.

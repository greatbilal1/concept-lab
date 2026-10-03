# Resources — Python Files, JSON & Data

## Knowledge (primary sources)

- Python docs — `open()` — the authoritative list of mode characters and the
  `encoding` argument. Used by lesson 02.
- Python docs — the `with` statement and the context manager protocol — the
  definition of `__enter__`/`__exit__`. Used by lesson 03.
- Python docs — `pathlib` — the `Path` class, the `/` operator, and filesystem
  methods. Used by lesson 04.
- json.org — the one-page specification defining all six JSON value types. Used by
  lesson 05.
- Python docs — the `json` module — the Python/JSON conversion table and the four
  functions. Used by lessons 06 and 08.
- Python docs — the `csv` module — `reader`, `DictReader`, `DictWriter`, and the
  `newline=""` requirement. Used by lessons 07 and 08.
- Python docs — `JSONDecodeError` and the errors tutorial — precise exception
  handling and exception chaining. Used by lesson 09.

## Wisdom (practitioner insight)

- The `newline=""` argument on CSV file handles is the single most commonly
  omitted detail in real code, and its absence produces corruption that only shows
  up on some platforms. Worth calling out explicitly rather than trusting the docs
  to be read.
- "Validate at the boundary, trust inside" is a design habit rather than a
  language feature. It is the difference between a script that works once and a
  tool that can be re-run.
- Idempotency is rarely taught but is what makes retries safe. Practitioners learn
  it after their first duplicated-output incident.
- The tuple-to-array round-trip loss in JSON is a real trap that documentation
  states but rarely emphasises.

## Gaps

- No single source covers the *combination* of files, formats and validation as
  one pipeline. That integration is the course's own contribution, built from the
  primary sources above.
- Streaming and memory behaviour for very large files is not covered well by any
  beginner-facing source; the course flags it as a known gap rather than teaching
  it badly.

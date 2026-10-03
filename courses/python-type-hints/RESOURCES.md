# Resources — Python Type Hints

## Knowledge (primary sources)

- PEP 484 — Guido van Rossum, Jukka Lehtosalo, Łukasz Langa — the original type
  hints specification. Authoritative for what an annotation is and why it is not
  enforced. (Used by lesson 1.)
- PEP 526 — the variable annotation syntax. Authoritative for `x: int = 0` and bare
  declarations. (Used by lesson 2.)
- PEP 604 — the `X | Y` union syntax. Authoritative for the modern union form.
  (Used by lesson 4.)
- PEP 544 — protocols and structural subtyping. Authoritative for `Protocol`.
  (Used by lesson 7.)
- PEP 563 — postponed evaluation of annotations. Authoritative for
  `from __future__ import annotations`. (Used by lesson 9.)
- The `typing` module documentation — CPython docs — the reference for every name
  used in the course. (Used by lessons 1–9.)
- mypy documentation — the reference implementation's own docs, including the
  strictness flags. (Used by lessons 8 and 10.)
- The Python typing spec — typing.readthedocs.io — the cross-implementation
  specification, useful when mypy and pyright disagree. (Used by lesson 10.)

## Wisdom (practitioner insight)

- The mypy strictness-flag documentation — the judgement it offers is *sequencing*:
  which flags to turn on in which order on a legacy codebase, and why turning them
  all on at once fails.
- The typing spec's "conformance" discussion — the judgement it offers is that
  checkers differ, and that portable annotations are the ones worth writing.
- Real-world adoption write-ups from large Python projects — the judgement they
  offer is where to stop annotating, which no specification states.

## Gaps

- No single source covers *adoption strategy* well. The specs describe the language;
  the checker docs describe the tool; neither describes the human process of typing
  an existing codebase. Lesson 10 fills this from practitioner experience.
- Runtime annotation consumption (dataclasses, Pydantic, FastAPI) is documented
  per-framework, never as one coherent story. Lesson 9 assembles it.
- The `Any` versus `object` judgement call is not stated plainly in any primary
  source; it is inferred from the semantics of each type.

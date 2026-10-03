# Notes — Python Modules & Packages

Authoring decisions and open questions. Append as you go; never rewrite history.

## Decisions

- (2026-09-27) Ten lessons in four topics — Imports, Packages, Environments,
  Together — so the course mirrors the actual dependency lifecycle rather than
  the order features appear in the docs.
- (2026-09-27) Lesson 3 covers `sys.path` and the module cache before packages
  are introduced, because every later trap is a consequence of that lookup.
- (2026-09-27) The `__main__` guard gets its own lesson (6) rather than a
  paragraph, because it is the single most-copied line beginners do not
  understand.
- (2026-09-27) Virtual environments (7) and pinning (8) are split: one is about
  isolation, the other about reproducibility. They are different ideas and
  conflating them is the usual source of confusion.
- (2026-09-27) Lesson 9 groups the three classic traps together so the learner
  sees they share one root cause — invisible name origins.
- (2026-09-27) Lesson 10 ends on `pyproject.toml` and a wheel build, closing the
  loop from "a module is a file" to "a distribution is installable".
- (2026-09-27) Every quiz option is written to the same word count, so the
  answer cannot be guessed from length alone.

## Open questions

- Should the course mention `uv` and modern lock files, or does that belong in a
  tooling course?
- Is `pip freeze` still the right recommendation, or should `pyproject.toml` +
  a lock file be the default taught here?
- Does the shadowing lesson need a concrete "how to find the offending file"
  technique (printing `module.__file__`)?

## Known gaps

- No coverage of namespace packages (PEP 420) — deliberately deferred.
- No coverage of editable installs (`pip install -e .`).
- No coverage of import hooks or `importlib`.
- No coverage of publishing to PyPI or versioning strategy.

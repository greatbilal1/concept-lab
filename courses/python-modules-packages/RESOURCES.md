# Resources — Python Modules & Packages

## Knowledge (primary sources)

- Python docs, "The import system" — docs.python.org/3/reference/import.html —
  the normative description of how imports resolve, including circular imports.
  Used by lessons 1, 3, 5 and 9.
- Python docs, "Modules" tutorial — docs.python.org/3/tutorial/modules.html —
  the gentlest correct introduction to modules and packages. Used by lessons 1,
  2 and 4.
- Python docs, "venv — Creation of virtual environments" —
  docs.python.org/3/library/venv.html — the exact commands and platform
  differences. Used by lesson 7.
- pip docs, "Requirements File Format" —
  pip.pypa.io/en/stable/reference/requirements-file-format/ — every specifier
  operator and its exact meaning. Used by lesson 8.
- PEP 8, "Imports" — peps.python.org/pep-0008/#imports — the style rules,
  including the outright ban on wildcard imports. Used by lessons 2 and 9.
- PyPA, "Packaging Python Projects" —
  packaging.python.org/en/latest/tutorials/packaging-projects/ — the canonical
  end-to-end build-and-publish walkthrough. Used by lesson 10.

## Wisdom (practitioner insight)

- The "never name a file after a module you import" rule is folklore that no
  spec states, but it prevents the single most confusing beginner bug. Lesson 9
  states it explicitly.
- The habit of running `which python` after activation is a practitioner
  convention, not documentation — it catches the most common environment
  mistake in one second.
- The distinction between pinning for applications and range-constraining for
  libraries is a judgement call that the docs describe but do not recommend.
  Lesson 8 makes the recommendation explicit.

## Gaps

- No source covers the *diagnosis* of shadowing well — how to find which file
  won. The course names the symptom but does not yet teach `module.__file__` as
  a debugging tool.
- Modern lock files (uv, poetry) are not covered by any single authoritative
  source yet; the landscape is still moving.
- Namespace packages (PEP 420) are documented but rarely needed, and no source
  explains when a beginner should care.

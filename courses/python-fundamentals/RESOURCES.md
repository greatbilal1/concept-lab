# Resources — Python Fundamentals

## Knowledge (primary sources)

- **The Python Tutorial** — Python Software Foundation —
  https://docs.python.org/3/tutorial/ — the official, versioned introduction.
  Trustworthy because it is maintained by the language's own core team. Cited by
  the "Primary source" note in every lesson (control flow §4, data structures
  §5, modules §6).
- **The Python Standard Library reference** — Python Software Foundation —
  https://docs.python.org/3/library/ — the authoritative index of every bundled
  module. Used by Lesson 10.
- **PEP 8 — Style Guide for Python Code** — Guido van Rossum, Barry Warsaw,
  Alyssa Coghlan — https://peps.python.org/0008/ — the canonical naming and
  layout conventions. Used by Lesson 02 for `lowercase_with_underscores`.
- **Built-in Types** — Python Software Foundation —
  https://docs.python.org/3/library/stdtypes.html — exact behaviour of `int`,
  `float`, `bool`, `str`, `list`, and the operators. Used by Lessons 03–05.

## Wisdom (practitioner insight)

- **Fluent Python** — Luciano Ramalho (2nd ed., O'Reilly) — the judgement a
  reference cannot give: *why* Python's data model works the way it does, and
  which idioms experienced Pythonistas actually reach for. Informs the
  "Key idea" and "Common trap" notes.
- **The Zen of Python** (`import this`) — Tim Peters — the design values behind
  the language; the source of "explicit is better than implicit", which motivates
  preferring `import math` over `from math import *` in Lesson 10.
- **Real Python tutorials** — https://realpython.com/ — practical, reviewed
  walkthroughs that show how concepts are used in real code, useful for the
  "Do this next" prompts.

## Gaps

- No single source teaches *beginners* the mutable-default trap well; it is
  usually buried in advanced material. Lesson 09 states it directly with a
  before/after example.
- Nothing authoritative covers "what to learn after this course" — the
  `related` courses (`python-modules-packages`, `oop`) fill that role in the
  catalog rather than in a book.

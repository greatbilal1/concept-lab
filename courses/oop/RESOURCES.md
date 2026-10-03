# Python OOP Resources

## Knowledge

- [Docs: The Python Tutorial — "Classes" (python.org)](https://docs.python.org/3/tutorial/classes.html)
  The canonical, primary source. Use for: the exact semantics of `self`, scopes,
  inheritance, and multiple inheritance. When a lesson makes a claim about how
  Python behaves, this is the source of truth.
- [Docs: Data model — "Special method names" (python.org)](https://docs.python.org/3/reference/datamodel.html#special-method-names)
  The reference for every dunder method. Use for: `__init__`, `__repr__`, `__eq__`,
  `__len__`, and anything that plugs into Python syntax.
- [Docs: `dataclasses` (python.org)](https://docs.python.org/3/library/dataclasses.html)
  Use for: when a class is mostly data, and what `@dataclass` generates for you.
- [Docs: `abc` — Abstract Base Classes (python.org)](https://docs.python.org/3/library/abc.html)
  Use for: defining interfaces and forcing subclasses to implement methods.
- [Book: _Fluent Python_ by Luciano Ramalho (2nd ed.)](https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/)
  The best deep-dive on Python's object model. Use for: when you want to know *why*
  Python's OOP works the way it does, not just the syntax. Chapters 1, 11–13.
- [Book: _Python Distilled_ by David Beazley](https://www.dabeaz.com/python-distilled/)
  Concise, expert-level. Use for: a fast, correct treatment of classes and objects
  without the beginner padding.
- [Article: "PEP 8 — Style Guide" (python.org)](https://peps.python.org/pep-0008/)
  Use for: naming conventions (`_private`, `__mangled`, `ClassName`, `method_name`).
- [Video: "Python OOP Tutorials" by Corey Schafer (YouTube)](https://www.youtube.com/playlist?list=PL-osiE80TeTsqhIuOqKhwlXsIBIdSeYtc)
  Clear, well-paced walkthroughs. Use for: a second explanation of any concept that
  did not land from the docs.

## Wisdom (Communities)

- [r/learnpython](https://reddit.com/r/learnpython)
  Large, friendly, well-moderated. Use for: "why does my class do this?" questions
  and code review of small examples.
- [r/Python](https://reddit.com/r/Python)
  Higher-signal discussion of real libraries and design. Use for: seeing how OOP is
  used in the wild, and reading critiques of over-engineering.
- [Stack Overflow — `python` + `oop` tags](https://stackoverflow.com/questions/tagged/python+oop)
  Use for: specific "is this the right way?" questions. Search first; the answer
  usually exists.
- [Python Discord](https://pythondiscord.com/)
  Real-time help in `#python-help`. Use for: getting unstuck quickly when a lesson
  exercise does not behave as expected.

## Gaps

- No single high-trust resource yet for **"when NOT to use OOP"** — the failure mode
  of over-abstraction. Candidates to evaluate: _A Philosophy of Software Design_
  (Ousterhout) and Jack Diederich's talk "Stop Writing Classes".
- No resource yet on **testing classes** (pytest fixtures, fakes). Needed once the
  mission reaches "ship a project".

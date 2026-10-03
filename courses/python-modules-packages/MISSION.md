# Mission — Python Modules & Packages

## Why this course exists

The moment a Python project grows past one file, a new set of rules appears —
and they are almost never taught explicitly. Why does `import json` sometimes
find your own file? Why does a package need `__init__.py`? Why does the same
code work in one terminal and fail in another? This course answers those
questions by following a single project from a lone script to an installable
package, so that imports stop being magic and start being a lookup you can
reason about.

## What the learner can do at the end

- Explain that a module is a file and an import is a lookup, and describe the
  three import forms and when each is appropriate.
- Trace how `sys.path` and the module cache decide which file an import
  resolves to, and predict the outcome before running the code.
- Build a package with `__init__.py`, use dotted paths, and choose correctly
  between absolute and relative imports.
- Use the `if __name__ == "__main__"` guard and explain what changes when a
  file is imported instead of run.
- Create a virtual environment, verify it is active, and explain what
  activation does to the shell `PATH`.
- Capture dependencies in a requirements file, read version specifiers, and
  rebuild an environment reproducibly.
- Recognise and fix the three classic import traps: circular imports,
  shadowing, and star imports.
- Describe a project in `pyproject.toml`, build a wheel, and wire a console
  command to a function.

## What this course is NOT

- Not a packaging deep dive — publishing to PyPI, signing, and CI release
  pipelines are out of scope.
- Not a dependency-manager comparison — poetry, pipenv, conda and uv are named
  only in passing.
- Not a testing course — pytest appears as an example dependency, not a topic.
- Not a project-layout course — the broader "how should a repo be organised"
  question belongs to a later course.

## Success looks like

The learner can take a folder of Python files, make it importable, isolate its
dependencies in a virtual environment, freeze them into a requirements file,
and build it into a wheel that installs and runs on another machine. When an
import fails, they can say which of the three traps it is and fix it without
guessing.

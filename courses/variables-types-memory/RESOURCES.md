# Resources: Variables, Types & Memory

One primary source per lesson. All are official Python documentation or PEPs —
read the source, not a tutorial about the source.

## Knowledge (primary sources)

| Lesson | Topic | Source |
|---|---|---|
| 01 | A name for a value | [Python — Execution model: Naming and binding](https://docs.python.org/3/reference/executionmodel.html#naming-and-binding) |
| 02 | Assignment is a binding | [Python — Assignment statements](https://docs.python.org/3/reference/simple_stmts.html#assignment-statements) |
| 03 | Types are rules | [Python — Built-in Types](https://docs.python.org/3/library/stdtypes.html) |
| 04 | Numbers and text | [Python — Floating Point Arithmetic: Issues and Limitations](https://docs.python.org/3/tutorial/floatingpoint.html) |
| 05 | Mutable and immutable | [Python — Data model: Objects, values and types](https://docs.python.org/3/reference/datamodel.html) |
| 06 | References, not copies | [Python — Data model: Objects, values and types](https://docs.python.org/3/reference/datamodel.html#objects-values-and-types) |
| 07 | The stack and the heap | [Python — Execution model](https://docs.python.org/3/reference/executionmodel.html) |
| 08 | Garbage and lifetime | [Python — gc: Garbage Collector interface](https://docs.python.org/3/library/gc.html) |
| 09 | Copying and sharing | [Python — copy: Shallow and deep copy operations](https://docs.python.org/3/library/copy.html) |
| 10 | Naming for humans | [PEP 8 — Naming Conventions](https://peps.python.org/pep-0008/#naming-conventions) |

## Wisdom (how to use these)
- Read the primary source *after* the lesson, not before. The lesson gives you the
  mental model; the docs give you the precise wording and the edge cases.
- The Python docs are unusually readable. If a section feels dense, it is usually
  because it is being precise about something the lesson simplified.
- When the docs and your intuition disagree, the docs are right — and the
  disagreement is exactly the thing worth learning.

## Gaps
- No single official source covers "the stack and the heap" for Python, because
  Python does not expose them directly. Lesson 07 draws on the Execution model's
  description of frames and the Data model's description of objects.
- Reference counting is documented in `gc` and in the C-API docs, but there is no
  beginner-facing official page. Lesson 08 uses `gc` as the closest primary source.

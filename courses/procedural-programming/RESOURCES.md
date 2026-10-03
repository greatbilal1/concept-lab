# Resources: Procedural Programming

One primary source per lesson. All are official Python documentation — read the
source, not a tutorial about the source.

## Knowledge (primary sources)

| Lesson | Topic | Source |
|---|---|---|
| 01 | A program is a sequence of steps | [Python — More Control Flow Tools](https://docs.python.org/3/tutorial/controlflow.html) |
| 02 | Naming a step | [Python — Defining Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions) |
| 03 | Passing data in | [Python — More on Defining Functions: Default Argument Values](https://docs.python.org/3/tutorial/controlflow.html#default-argument-values) |
| 04 | Getting data out | [Python — Defining Functions: return](https://docs.python.org/3/tutorial/controlflow.html#defining-functions) |
| 05 | One job per procedure | [Python — PEP 8: Function Names and Design](https://peps.python.org/pep-0008/#function-and-variable-names) |
| 06 | Shared state and globals | [Python — The global statement](https://docs.python.org/3/reference/simple_stmts.html#the-global-statement) |
| 07 | Grouping steps into a module | [Python — Modules](https://docs.python.org/3/tutorial/modules.html) |
| 08 | Importing and reusing | [Python — More on Modules](https://docs.python.org/3/tutorial/modules.html#more-on-modules) |
| 09 | Where procedural code breaks down | [Python — Classes](https://docs.python.org/3/tutorial/classes.html) |
| 10 | Putting it together | [Python — The Python Tutorial](https://docs.python.org/3/tutorial/index.html) |

## Wisdom (how to use these)
- Read the primary source *after* the lesson, not before. The lesson gives you the
  mental model; the docs give you the precise wording and the edge cases.
- The `tutorial/` pages are the explanation; the `reference/` pages are the
  grammar. When a lesson cites the tutorial, the reference page for the same
  construct is worth a look too.
- Lesson 09 cites the Classes chapter deliberately. Read the first few paragraphs
  and notice that it is describing the exact problem this course ends on — that is
  the bridge into the OOP course.

## Gaps
- "Procedural programming" is not a named section in the Python docs; it is a
  *style*, not a feature. Lesson 01 cites the More Control Flow Tools overview as
  the closest primary source for "a program is a sequence of statements".
- "One job per procedure" is a design principle, not a language feature, so it has
  no official Python page. Lesson 05 cites PEP 8's naming guidance as the closest
  primary source.
- "Where procedural code breaks down" is a judgement, not a feature. Lesson 09
  cites the Classes chapter because it is the docs' own answer to the problem.

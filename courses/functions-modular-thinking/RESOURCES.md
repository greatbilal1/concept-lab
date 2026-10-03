# Resources: Functions & Modular Thinking

One primary source per lesson. All are official Python documentation — read the
source, not a tutorial about the source.

## Knowledge (primary sources)

| Lesson | Topic | Source |
|---|---|---|
| 01 | Naming a block of work | [Python — More Control Flow Tools: Defining Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions) |
| 02 | Calling a function | [Python — Expressions: Calls](https://docs.python.org/3/reference/expressions.html#calls) |
| 03 | Parameters and arguments | [Python — More Control Flow Tools: More on Defining Functions](https://docs.python.org/3/tutorial/controlflow.html#more-on-defining-functions) |
| 04 | Default values | [Python — Compound Statements: Function definitions](https://docs.python.org/3/reference/compound_stmts.html#function-definitions) |
| 05 | Returning a value | [Python — Compound Statements: The return statement](https://docs.python.org/3/reference/simple_stmts.html#the-return-statement) |
| 06 | Multiple returns and None | [Python — Built-in Types: None](https://docs.python.org/3/library/constants.html#None) |
| 07 | The call stack | [Python — The Python Standard Library: traceback](https://docs.python.org/3/library/traceback.html) |
| 08 | Scope: local and global | [Python — Execution model: Naming and binding](https://docs.python.org/3/reference/executionmodel.html#naming-and-binding) |
| 09 | Contracts: docstrings and hints | [Python — More Control Flow Tools: Documentation Strings](https://docs.python.org/3/tutorial/controlflow.html#documentation-strings) |
| 10 | Splitting a program into functions | [Python — More Control Flow Tools: Intermezzo: Coding Style](https://docs.python.org/3/tutorial/controlflow.html#intermezzo-coding-style) |

## Wisdom (how to use these)
- Read the primary source *after* the lesson, not before. The lesson gives you the
  mental model; the docs give you the precise wording and the edge cases.
- The `tutorial/` pages are the explanation; the `reference/` pages are the grammar.
  When a lesson cites the tutorial, the reference page for the same construct is
  worth a look too.
- The mutable-default trap (Lesson 04) is the single most surprising thing in this
  course. Read the "Important warning" in the Function definitions section twice.

## Gaps
- "The call stack" is not a named section in the docs; it is described inside the
  Execution model and made visible by the `traceback` module. Lesson 07 cites the
  `traceback` page as the closest primary source.
- "Contract", "pure function" and "single responsibility" are patterns, not
  language features, so they have no official Python page. Lesson 09 cites the
  Documentation Strings section, and Lesson 10 cites the Coding Style intermezzo.

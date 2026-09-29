# Resources: Control Flow & Logic

One primary source per lesson. All are official Python documentation — read the
source, not a tutorial about the source.

## Knowledge (primary sources)

| Lesson | Topic | Source |
|---|---|---|
| 01 | Truth and falsity | [Python — Built-in Types: Truth Value Testing](https://docs.python.org/3/library/stdtypes.html#truth-value-testing) |
| 02 | Comparing values | [Python — Expressions: Comparisons](https://docs.python.org/3/reference/expressions.html#comparisons) |
| 03 | Combining conditions | [Python — Built-in Types: Boolean Operations](https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not) |
| 04 | Short-circuit evaluation | [Python — Expressions: Boolean operations](https://docs.python.org/3/reference/expressions.html#boolean-operations) |
| 05 | Choosing a path | [Python — More Control Flow Tools: if Statements](https://docs.python.org/3/tutorial/controlflow.html#if-statements) |
| 06 | Many branches | [Python — Compound Statements: The if Statement](https://docs.python.org/3/reference/compound_stmts.html#the-if-statement) |
| 07 | Repeating work | [Python — Compound Statements: The while Statement](https://docs.python.org/3/reference/compound_stmts.html#the-while-statement) |
| 08 | Looping over things | [Python — More Control Flow Tools: for Statements](https://docs.python.org/3/tutorial/controlflow.html#for-statements) |
| 09 | Leaving a loop early | [Python — break and continue Statements, and else Clauses on Loops](https://docs.python.org/3/tutorial/controlflow.html#break-and-continue-statements-and-else-clauses-on-loops) |
| 10 | Putting it together | [Python — More Control Flow Tools](https://docs.python.org/3/tutorial/controlflow.html) |

## Wisdom (how to use these)
- Read the primary source *after* the lesson, not before. The lesson gives you the
  mental model; the docs give you the precise wording and the edge cases.
- The `reference/` pages are the grammar; the `tutorial/` pages are the explanation.
  When a lesson cites the tutorial, the reference page for the same construct is
  worth a look too.
- The loop `else` clause (Lesson 09) is the single most surprising thing in this
  course. Read that section twice.

## Gaps
- "Short-circuit evaluation" is not a named section in the docs; it is described
  inside the Boolean operations section of the Expressions reference. Lesson 04
  cites that section.
- "Guard clause", "early exit", "sentinel value" and "state machine" are patterns,
  not language features, so they have no official Python page. Lesson 10 cites the
  More Control Flow Tools overview as the closest primary source.

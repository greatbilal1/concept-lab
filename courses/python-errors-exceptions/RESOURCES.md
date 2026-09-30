# Resources — Python Errors & Exceptions

## Knowledge (primary sources)

- [Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html) —
	Python Software Foundation — official tutorial for tracebacks, handlers,
	raising, exception chaining, and cleanup. Used throughout Lessons 01-08.
- [Built-in Exceptions](https://docs.python.org/3/library/exceptions.html) —
	Python Software Foundation — authoritative exception hierarchy and built-in
	types. Used in Lessons 03, 05, and 06.
- [Logging HOWTO](https://docs.python.org/3/howto/logging.html) — Python
	Software Foundation — practical guidance for recording diagnostic context
	rather than swallowing failures. Used in Lesson 07.
- [The `with` statement](https://docs.python.org/3/reference/compound_stmts.html#the-with-statement)
	— Python Language Reference — defines the context-manager protocol and
	cleanup behavior. Used in Lesson 08.

## Wisdom (practitioner insight)

- *The Pragmatic Programmer* — Andrew Hunt and David Thomas — its advice to
	make failures explicit and preserve useful context informs the course's
	emphasis on actionable errors. This is practitioner framing, not a Python
	language specification.

## Gaps

- The official documentation explains individual mechanisms but does not
	prescribe one universal recovery policy. Lessons use small examples to help
	learners decide which layer can recover, report, or propagate each failure.
- Retry policy depends on the operation and failure. This course introduces
	only bounded retries for plausibly transient errors; it does not teach
	distributed-systems retry design.

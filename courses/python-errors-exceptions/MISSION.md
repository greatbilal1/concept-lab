# Mission — Python Errors & Exceptions

## Why this course exists

Beginners often treat a traceback as an opaque crash and either ignore it or
catch every exception to make it disappear. This course replaces that reflex
with a working model: identify where an exception came from, handle only
failures the program can recover from, and let unexpected bugs stay visible.
Learners finish able to design failure paths as deliberately as success paths.

## What the learner can do at the end

- Read a traceback from its exception message back to the failing call, then
	explain how the exception propagated.
- Catch a specific expected exception, use `else` and `finally` appropriately,
	and re-raise or chain an exception without losing its cause.
- Raise useful built-in or domain-specific exceptions at clear boundaries,
	clean up resources reliably, and avoid hiding programming errors.

## What this course is NOT

- A complete Python syntax course or an exhaustive catalogue of built-in
	exception classes.
- Framework-specific error handling, distributed retries, and production
	observability infrastructure.

## Success looks like

Given a failing Python function, the learner can locate the cause, choose a
specific recovery action, preserve diagnostic information, and describe what
should happen for both success and failure. They can explain why a blanket
`except` or silent `pass` is dangerous.

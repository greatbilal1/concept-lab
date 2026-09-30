# Notes — Python Errors & Exceptions

Authoring decisions and open questions. Append as you go; never rewrite history.

## Decisions

- 2026-09-30: Teach the exception mechanism before custom types and failure
	design, then finish with one end-to-end boundary. Keep examples standard
	library only so they run without setup.
- 2026-09-30: Treat retries as bounded and appropriate only for transient
	failures; avoid implying that every exception should be retried.

## Open questions

- None blocking completion. Framework-specific boundaries and distributed
	retry policies remain outside the course scope.

## Known gaps

- Exception groups and `except*` are named briefly for Python 3.11+ learners,
  but are not a full lesson topic.

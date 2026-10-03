# Mission: Variables, Types & Memory

## Why
I can write Python that runs, but I keep getting surprised by it. A list changes
when I did not expect it to. `0.1 + 0.2` is not `0.3`. A variable "disappears"
after a function returns. These are not random — they all come from one thing I
never properly learned: what a name actually *is*, and what happens in memory when
I bind one to a value. I want to stop guessing and start predicting.

## Success looks like
- I can explain, in one sentence, that a name is a label bound to a value — not a
  box that contains one.
- I can predict the output of any short sequence of assignments, including swaps
  and rebindings, without running it.
- I can say whether a value is mutable or immutable, and predict whether a change
  will be visible through another name.
- I can explain why `0.1 + 0.2` is not `0.3`, and why strings can never be changed.
- I can describe where a value lives — a stack frame or the heap — and when it dies.
- I can choose deliberately between sharing, shallow copying, and deep copying.

## Constraints
- Learning in short sessions; each lesson must be completable in one sitting.
- Prefer Python (the language I actually use), not a toy language.
- No build step, no accounts, no dependencies — everything runs offline from
  `file://` in the browser, matching the rest of this workspace.
- I want to *do* things, not just read. Every lesson should end with something
  I have built, counted, or run.

## Out of scope
- CPython's C internals (the actual `PyObject` struct, the GIL) — later, if ever.
- Manual memory management in other languages (C `malloc`/`free`, Rust ownership).
- Performance tuning and profiling — this is about the mental model, not speed.
- Advanced typing (generics, protocols, `typing` module) — a separate topic.

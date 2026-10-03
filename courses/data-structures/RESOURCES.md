# Resources — Data Structures

## Knowledge (primary sources)

- *Grokking Algorithms* — Aditya Bhargava — the clearest visual introduction to
  how structures behave; used for the array-vs-linked-list and hash-table
  explanations.
- Python official docs, `collections` module — the authoritative reference for
  `deque`, `Counter` and `defaultdict`; used for the built-in versions.
- *Introduction to Algorithms* (CLRS) — Cormen et al. — the rigorous reference;
  used only to check that our informal cost claims are correct.

## Wisdom (practitioner insight)

- "Choose the data structure first, the algorithm second." — the recurring advice
  from experienced engineers; a good structure makes the algorithm obvious.
- Real code review feedback: a `list` used as a queue is a common, quiet
  performance bug — `pop(0)` is O(n). This is why the queue lesson exists.

## Gaps

- No single source covers "when to reach for which structure" well; that
  judgement is assembled from experience. The final lesson is our attempt to
  make it explicit.

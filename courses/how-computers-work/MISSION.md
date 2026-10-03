# Mission: How Computers Actually Work

## Why
I write code every day, but underneath every line there is a machine I have never
really looked at. I want to stop treating the computer as a magic box. When a
program is slow, when a number comes out wrong, when memory runs out — I want to
know *which part of the machine* is responsible, and why. This is the layer that
every other course quietly assumes I already understand.

## Success looks like
- I can explain, without hand-waving, how a transistor becomes a logic gate and a
  logic gate becomes an adder.
- I can read and write binary and hexadecimal by hand, and explain why computers
  use them instead of decimal.
- I can say what a CPU actually does in one clock cycle, and what the difference is
  between a register, cache, RAM, and a disk.
- I can trace a single line of code from source text to a running instruction.
- I can look at a slow program and name the likely bottleneck — CPU, memory, or I/O.
- I can explain why floating-point arithmetic gives `0.1 + 0.2 != 0.3`.

## Constraints
- Learning in short sessions; each lesson must be completable in one sitting.
- No build step, no accounts, no dependencies — everything runs offline from
  `file://` in the browser, matching the rest of this workspace.
- I want to *do* things, not just read. Every lesson should end with something
  I have built, counted, or run.
- No hardware required. Everything must be demonstrable with a browser and a
  terminal.

## Out of scope
- Building a physical computer, soldering, or electronics lab work.
- Assembly-language programming as a skill (I want to *read* it, not write it).
- Operating-system internals (schedulers, virtual memory paging, drivers).
- GPU architecture, networking, and distributed systems — later, if at all.
- Any specific CPU vendor's instruction set as a memorisation exercise.

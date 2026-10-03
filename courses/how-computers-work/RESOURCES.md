# How Computers Actually Work — Resources

## Knowledge

- [Book: _Code: The Hidden Language of Computer Hardware and Software_ by Charles Petzold (2nd ed.)](https://www.charlespetzold.com/code/)
  The single best book on this subject. Use for: the whole arc from telegraph relays
  to logic gates to a working CPU. If you read one thing alongside this course, read
  this. Chapters 1–17 cover everything here.
- [Book: _Computer Systems: A Programmer's Perspective_ by Bryant & O'Hallaron (3rd ed.)](https://csapp.cs.cmu.edu/)
  The rigorous university treatment. Use for: the exact relationship between C code,
  assembly, machine code, and memory. Chapters 1–3 and 6.
- [Docs: MDN — "Bitwise operators" (developer.mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_operators)
  Use for: seeing AND/OR/XOR/NOT as operators you can actually run in a browser
  console, which is how the gate lessons are practised.
- [Docs: Python — "Floating Point Arithmetic: Issues and Limitations" (python.org)](https://docs.python.org/3/tutorial/floatingpoint.html)
  The canonical explanation of why `0.1 + 0.2 != 0.3`. Use for: the floating-point
  lesson, and for the exact IEEE-754 reasoning.
- [Docs: Intel — "Intel 64 and IA-32 Architectures Software Developer's Manual, Vol. 1"](https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html)
  Heavy, but authoritative. Use for: what a real instruction set actually looks like,
  and the register model. Read only the first chapter.
- [Article: "What Every Programmer Should Know About Memory" by Ulrich Drepper (PDF)](https://people.freebsd.org/~lstewart/articles/cpumemory.pdf)
  Use for: the memory-hierarchy lesson — why cache exists and why it dominates
  performance. Long; read the first 20 pages.
- [Video: "Building an 8-bit breadboard computer" by Ben Eater (YouTube)](https://eater.net/8bit)
  Use for: watching every idea in this course become physical wires. The best
  companion to the CPU lesson.
- [Interactive: "Nand2Tetris" (nand2tetris.org)](https://www.nand2tetris.org/)
  Use for: building a computer from a single NAND gate, in software, if you want to
  go deeper than this course does.

## Wisdom (Communities)

- [r/AskComputerScience](https://reddit.com/r/AskComputerScience)
  Use for: "why is it done this way?" questions that are conceptual rather than
  code-specific.
- [r/computerscience](https://reddit.com/r/computerscience)
  Use for: broader discussion and links to good explanations of hardware topics.
- [Stack Overflow — `cpu-architecture` tag](https://stackoverflow.com/questions/tagged/cpu-architecture)
  Use for: precise questions about pipelines, caches, and instruction encoding.
- [Ben Eater's Discord / YouTube comments](https://eater.net/)
  Use for: getting unstuck on the breadboard-computer material, which is the most
  hands-on path through this subject.

## Gaps

- No single high-trust resource yet for **"how does a modern out-of-order CPU
  actually execute instructions?"** — the gap between the simple model taught here
  and a real chip. Candidate: _Modern Processor Design_ (Shen & Lipasti).
- No resource yet on **how a program gets from disk into memory** (the loader,
  the ELF format). Needed if the "source to running instruction" lesson is expanded.

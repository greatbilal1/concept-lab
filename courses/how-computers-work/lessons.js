/* ============================================================
   How Computers Actually Work — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.

   Add a lesson by appending one entry here and creating the
   matching file in ./lessons/. Nothing else needs to change.

   Fields
     n     1-based lesson number (must be unique, in order)
     id    dash-case slug, matches the filename after the number
     file  path to the lesson, relative to THIS course folder
     title short title shown in nav and the map
     topic the layer of the machine it covers (for grouping)
     anim  legacy scene key (animations are not used by the lesson
           pages; kept for reference and for the hub card art)

   The same file also carries this course's GLOSSARY (window.TeachGlossary).
   It is the course's own vocabulary, grouped into sections, and it is the
   single source of truth for the term list: the course's reference page
   renders it, and the site-wide glossary links back into it.
   ============================================================ */
window.TeachLessons = [
  { n: 1,  id: "bits-and-binary",          file: "lessons/0001-bits-and-binary.html",          title: "Bits and binary",           topic: "Numbers", anim: "HcwBits" },
  { n: 2,  id: "hexadecimal",              file: "lessons/0002-hexadecimal.html",              title: "Hexadecimal",               topic: "Numbers", anim: "HcwHex" },
  { n: 3,  id: "transistors-to-gates",     file: "lessons/0003-transistors-to-gates.html",     title: "Transistors to gates",      topic: "Logic", anim: "HcwGates" },
  { n: 4,  id: "gates-that-add",           file: "lessons/0004-gates-that-add.html",           title: "Gates that add",            topic: "Logic", anim: "HcwAdder" },
  { n: 5,  id: "memory-cells",             file: "lessons/0005-memory-cells.html",             title: "Memory cells",              topic: "Logic", anim: "HcwMemoryCell" },
  { n: 6,  id: "the-cpu",                  file: "lessons/0006-the-cpu.html",                  title: "The CPU",                   topic: "The machine", anim: "HcwCpu" },
  { n: 7,  id: "instructions-and-programs", file: "lessons/0007-instructions-and-programs.html", title: "Instructions and programs", topic: "The machine", anim: "HcwInstructions" },
  { n: 8,  id: "the-memory-hierarchy",     file: "lessons/0008-the-memory-hierarchy.html",     title: "The memory hierarchy",      topic: "The machine", anim: "HcwHierarchy" },
  { n: 9,  id: "text-and-characters",      file: "lessons/0009-text-and-characters.html",      title: "Text and characters",       topic: "Data", anim: "HcwText" },
  { n: 10, id: "numbers-that-lie",         file: "lessons/0010-numbers-that-lie.html",         title: "Numbers that lie",          topic: "Data", anim: "HcwFloat" },
  { n: 11, id: "from-source-to-running",   file: "lessons/0011-from-source-to-running.html",   title: "From source to running",    topic: "Data", anim: "HcwCompile" },
  { n: 12, id: "why-programs-are-slow",    file: "lessons/0012-why-programs-are-slow.html",    title: "Why programs are slow",     topic: "Putting it together", anim: "HcwSlow" }
];

/* ============================================================
   How Computers Actually Work — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections. Each
   entry:
     term   the word or symbol being defined
     def    one-sentence definition (may contain <code> markup)
     lesson the lesson number that teaches it (1-based)
     tags   free-form tags, used by the site-wide glossary filter

   The course's reference page renders this list, and the site
   glossary links each term back to the lesson that teaches it.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "numbers", title: "Numbers",
    terms: [
      { term: "Bit", def: "The smallest unit of information — a single position that is either <code>0</code> or <code>1</code>. Short for <b>bi</b>nary digi<b>t</b>.", lesson: 1, tags: ["binary", "fundamentals"] },
      { term: "Byte", def: "Eight bits grouped together. One byte can hold 256 distinct values, which is why it is the standard unit of addressable memory.", lesson: 1, tags: ["binary", "fundamentals"] },
      { term: "Binary", def: "Base-2 counting: each position is worth twice the one to its right. <code>1011</code> means 8 + 0 + 2 + 1 = 11.", lesson: 1, tags: ["binary", "fundamentals"] },
      { term: "Place value", def: "The weight of a digit's position. In base 2 the weights are 1, 2, 4, 8, 16, …; in base 10 they are 1, 10, 100, …", lesson: 1, tags: ["binary", "fundamentals"] },
      { term: "Hexadecimal", def: "Base-16 counting, using <code>0–9</code> and <code>A–F</code>. One hex digit is exactly four bits, so it is a compact way to write binary.", lesson: 2, tags: ["binary", "notation"] },
      { term: "Nibble", def: "Four bits — exactly one hexadecimal digit. Two nibbles make a byte.", lesson: 2, tags: ["binary", "notation"] },
      { term: "Unsigned integer", def: "A whole number stored with no sign bit, so all <code>n</code> bits are magnitude. An 8-bit unsigned value runs from 0 to 255.", lesson: 1, tags: ["binary", "numbers"] },
      { term: "Two's complement", def: "The standard way to store negative integers: flip every bit, then add one. It makes subtraction the same operation as addition.", lesson: 2, tags: ["binary", "numbers"] }
    ]
  },
  {
    id: "logic", title: "Logic &amp; circuits",
    terms: [
      { term: "Transistor", def: "A tiny electrically-controlled switch. Modern chips contain billions of them, and each one is either conducting or not.", lesson: 3, tags: ["hardware", "logic"] },
      { term: "Logic gate", def: "A circuit that takes one or more binary inputs and produces one binary output according to a fixed rule — AND, OR, NOT, XOR.", lesson: 3, tags: ["hardware", "logic"] },
      { term: "Truth table", def: "A complete list of a gate's output for every possible combination of its inputs. Two inputs means four rows.", lesson: 3, tags: ["logic", "method"] },
      { term: "NAND gate", def: "An AND gate followed by a NOT. It is <b>functionally complete</b>: every other gate can be built from NANDs alone.", lesson: 3, tags: ["hardware", "logic"] },
      { term: "Half adder", def: "A circuit that adds two single bits and produces a <b>sum</b> bit and a <b>carry</b> bit. Built from one XOR and one AND.", lesson: 4, tags: ["hardware", "arithmetic"] },
      { term: "Full adder", def: "A half adder that also accepts a carry-in, so adders can be chained to add multi-bit numbers.", lesson: 4, tags: ["hardware", "arithmetic"] },
      { term: "Flip-flop", def: "A circuit that remembers one bit by feeding its own output back into its input. The basis of all memory.", lesson: 5, tags: ["hardware", "memory"] },
      { term: "Clock", def: "A steady electrical pulse that tells every part of the machine when to update. Its rate is the chip's clock speed, measured in hertz.", lesson: 5, tags: ["hardware", "timing"] }
    ]
  },
  {
    id: "machine", title: "The machine",
    terms: [
      { term: "CPU", def: "The central processing unit — the part that fetches instructions, decodes them, and executes them. Also called the processor.", lesson: 6, tags: ["hardware", "cpu"] },
      { term: "Register", def: "A tiny, extremely fast storage slot inside the CPU. A typical chip has a few dozen, each holding one machine word.", lesson: 6, tags: ["hardware", "cpu"] },
      { term: "Program counter", def: "The register that holds the memory address of the next instruction to fetch. It is what makes a program a sequence.", lesson: 6, tags: ["hardware", "cpu"] },
      { term: "Fetch–decode–execute", def: "The three-step cycle the CPU repeats forever: read the next instruction, work out what it means, then do it.", lesson: 6, tags: ["hardware", "cpu"] },
      { term: "Instruction set", def: "The fixed vocabulary of operations a particular CPU understands — its machine language. Also called an ISA.", lesson: 7, tags: ["hardware", "cpu"] },
      { term: "Machine code", def: "A program written as the raw numbers the CPU executes. Every instruction is encoded as a pattern of bits.", lesson: 7, tags: ["hardware", "software"] },
      { term: "Assembly language", def: "A human-readable spelling of machine code, one line per instruction, translated by an assembler.", lesson: 7, tags: ["software", "notation"] },
      { term: "Cache", def: "A small, fast memory that sits between the CPU and RAM and holds recently used data, because most programs reuse the same data.", lesson: 8, tags: ["hardware", "memory"] },
      { term: "RAM", def: "Random-access memory — the main working memory. Large and fast, but loses everything when power is removed.", lesson: 8, tags: ["hardware", "memory"] },
      { term: "Memory address", def: "The number that identifies one byte of memory. Addresses are just integers, which is why hex is used to write them.", lesson: 8, tags: ["hardware", "memory"] }
    ]
  },
  {
    id: "data", title: "Data &amp; translation",
    terms: [
      { term: "Character encoding", def: "The agreed mapping from a number to a character. ASCII covers 128 characters; UTF-8 covers every script on Earth.", lesson: 9, tags: ["data", "text"] },
      { term: "ASCII", def: "A 7-bit encoding for English text. <code>65</code> is <code>A</code>, <code>97</code> is <code>a</code> — the difference of 32 is deliberate.", lesson: 9, tags: ["data", "text"] },
      { term: "UTF-8", def: "A variable-width encoding that stores ASCII in one byte and everything else in two to four, so it is backwards-compatible.", lesson: 9, tags: ["data", "text"] },
      { term: "Floating point", def: "A way of storing real numbers as a sign, an exponent and a fraction — like scientific notation in binary. It cannot represent most decimals exactly.", lesson: 10, tags: ["data", "numbers"] },
      { term: "IEEE 754", def: "The standard that defines how floating-point numbers are stored: 1 sign bit, 8 exponent bits, 23 fraction bits for a 32-bit float.", lesson: 10, tags: ["data", "numbers"] },
      { term: "Rounding error", def: "The small difference between a real number and its nearest representable float. It is why <code>0.1 + 0.2</code> is not exactly <code>0.3</code>.", lesson: 10, tags: ["data", "numbers"] },
      { term: "Compiler", def: "A program that translates source code into machine code ahead of time, producing a file you can run later.", lesson: 11, tags: ["software", "tools"] },
      { term: "Interpreter", def: "A program that reads and executes source code as it goes, rather than translating the whole thing up front.", lesson: 11, tags: ["software", "tools"] },
      { term: "Bytecode", def: "An intermediate instruction format — simpler than machine code, more compact than source — that a virtual machine executes.", lesson: 11, tags: ["software", "tools"] },
      { term: "Bottleneck", def: "The single slowest part of a system, which therefore sets the speed of the whole. Optimising anything else changes nothing.", lesson: 12, tags: ["performance", "method"] }
    ]
  }
];

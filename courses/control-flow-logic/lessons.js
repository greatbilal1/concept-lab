/* ============================================================
   Control Flow & Logic — lesson manifest
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
  { n: 1,  id: "truth-and-falsity",        file: "lessons/0001-truth-and-falsity.html",        title: "Truth and falsity",        topic: "Booleans", anim: "CflTruth" },
  { n: 2,  id: "comparing-values",         file: "lessons/0002-comparing-values.html",         title: "Comparing values",         topic: "Booleans", anim: "CflCompare" },
  { n: 3,  id: "combining-conditions",     file: "lessons/0003-combining-conditions.html",     title: "Combining conditions",     topic: "Logic", anim: "CflCombine" },
  { n: 4,  id: "short-circuit-evaluation", file: "lessons/0004-short-circuit-evaluation.html", title: "Short-circuit evaluation", topic: "Logic", anim: "CflShort" },
  { n: 5,  id: "choosing-a-path",          file: "lessons/0005-choosing-a-path.html",          title: "Choosing a path",          topic: "Branching", anim: "CflBranch" },
  { n: 6,  id: "many-branches",            file: "lessons/0006-many-branches.html",            title: "Many branches",            topic: "Branching", anim: "CflElif" },
  { n: 7,  id: "repeating-work",           file: "lessons/0007-repeating-work.html",           title: "Repeating work",           topic: "Loops", anim: "CflWhile" },
  { n: 8,  id: "looping-over-things",      file: "lessons/0008-looping-over-things.html",      title: "Looping over things",      topic: "Loops", anim: "CflFor" },
  { n: 9,  id: "leaving-a-loop-early",     file: "lessons/0009-leaving-a-loop-early.html",     title: "Leaving a loop early",     topic: "Loops", anim: "CflBreak" },
  { n: 10, id: "putting-it-together",      file: "lessons/0010-putting-it-together.html",      title: "Putting it together",      topic: "Putting it together", anim: "CflTogether" }
];

/* ============================================================
   Control Flow & Logic — glossary
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
    id: "booleans", title: "Booleans",
    terms: [
      { term: "Boolean", def: "A value with exactly two possibilities, <code>True</code> and <code>False</code>. Named after the mathematician George Boole.", lesson: 1, tags: ["logic", "types"] },
      { term: "Truthiness", def: "The rule that decides whether a non-boolean value counts as true or false when used in a condition. Empty things are falsy.", lesson: 1, tags: ["logic", "types"] },
      { term: "Falsy", def: "A value that behaves like <code>False</code> in a condition: <code>0</code>, <code>0.0</code>, <code>\"\"</code>, <code>[]</code>, <code>{}</code>, <code>None</code>.", lesson: 1, tags: ["logic", "types"] },
      { term: "Comparison operator", def: "An operator that compares two values and produces a boolean: <code>==</code>, <code>!=</code>, <code>&lt;</code>, <code>&lt;=</code>, <code>&gt;</code>, <code>&gt;=</code>.", lesson: 2, tags: ["logic", "operators"] },
      { term: "Equality", def: "The <code>==</code> test: do two values have the same content? It is not the same question as identity (<code>is</code>).", lesson: 2, tags: ["logic", "operators"] },
      { term: "Chained comparison", def: "Writing <code>0 &lt;= x &lt; 10</code> in Python, which means both comparisons at once — not the same as in most languages.", lesson: 2, tags: ["logic", "operators"] }
    ]
  },
  {
    id: "logic", title: "Logic",
    terms: [
      { term: "Logical operator", def: "An operator that combines booleans: <code>and</code>, <code>or</code>, <code>not</code>.", lesson: 3, tags: ["logic", "operators"] },
      { term: "and", def: "True only when <b>both</b> sides are true. If either side is false, the whole expression is false.", lesson: 3, tags: ["logic", "operators"] },
      { term: "or", def: "True when <b>at least one</b> side is true. It is false only when both sides are false.", lesson: 3, tags: ["logic", "operators"] },
      { term: "not", def: "Flips a boolean: <code>not True</code> is <code>False</code>. It takes one value, not two.", lesson: 3, tags: ["logic", "operators"] },
      { term: "Truth table", def: "A table listing the result of a logical operator for every combination of its inputs. Two inputs means four rows.", lesson: 3, tags: ["logic", "method"] },
      { term: "De Morgan's laws", def: "Two rules for pushing <code>not</code> inward: <code>not (a and b)</code> equals <code>not a or not b</code>, and <code>not (a or b)</code> equals <code>not a and not b</code>.", lesson: 3, tags: ["logic", "method"] },
      { term: "Short-circuit evaluation", def: "Python stops evaluating a logical expression as soon as the answer is certain, so the right side may never run.", lesson: 4, tags: ["logic", "evaluation"] },
      { term: "Guard clause", def: "A condition placed first specifically to prevent the rest of an expression from running — for example checking a list is non-empty before indexing it.", lesson: 4, tags: ["logic", "patterns"] },
      { term: "Operator precedence", def: "The fixed order in which operators are applied: comparisons bind tighter than <code>not</code>, which binds tighter than <code>and</code>, which binds tighter than <code>or</code>.", lesson: 4, tags: ["logic", "operators"] }
    ]
  },
  {
    id: "branching", title: "Branching",
    terms: [
      { term: "Condition", def: "Any expression used where a true/false decision is needed. Python evaluates it for its truthiness.", lesson: 5, tags: ["control-flow", "branching"] },
      { term: "if statement", def: "Runs a block of code only when its condition is true. Otherwise the block is skipped entirely.", lesson: 5, tags: ["control-flow", "branching"] },
      { term: "Block", def: "A group of statements that run together, marked in Python by indentation rather than braces.", lesson: 5, tags: ["control-flow", "syntax"] },
      { term: "Indentation", def: "Leading whitespace that defines block structure in Python. It is part of the syntax, not decoration.", lesson: 5, tags: ["control-flow", "syntax"] },
      { term: "else clause", def: "The block that runs when the <code>if</code> condition is false — the fallback path.", lesson: 5, tags: ["control-flow", "branching"] },
      { term: "elif clause", def: "An extra condition tested only when every earlier condition was false. Short for \"else if\".", lesson: 6, tags: ["control-flow", "branching"] },
      { term: "Branch", def: "One of the possible paths through a decision. A chain of <code>if</code>/<code>elif</code>/<code>else</code> has one branch per clause.", lesson: 6, tags: ["control-flow", "branching"] },
      { term: "Nested condition", def: "A decision placed inside the block of another decision, used when the second question only makes sense after the first.", lesson: 6, tags: ["control-flow", "branching"] }
    ]
  },
  {
    id: "loops", title: "Loops",
    terms: [
      { term: "Loop", def: "A construct that repeats a block of code. Python has two: <code>while</code> and <code>for</code>.", lesson: 7, tags: ["control-flow", "loops"] },
      { term: "while loop", def: "Repeats while a condition stays true. The condition is re-checked before every pass, so it can run zero times.", lesson: 7, tags: ["control-flow", "loops"] },
      { term: "Infinite loop", def: "A loop whose condition never becomes false, so it never stops. Usually a bug; sometimes deliberate.", lesson: 7, tags: ["control-flow", "loops"] },
      { term: "Loop variable", def: "The name that holds the current item on each pass of a <code>for</code> loop.", lesson: 8, tags: ["control-flow", "loops"] },
      { term: "Iterable", def: "Any value a <code>for</code> loop can walk through: a list, string, tuple, dict, set, or range.", lesson: 8, tags: ["control-flow", "loops"] },
      { term: "range", def: "A built-in that produces a sequence of integers. <code>range(5)</code> gives 0, 1, 2, 3, 4 — the stop value is excluded.", lesson: 8, tags: ["control-flow", "loops"] },
      { term: "Accumulator", def: "A variable that collects a result across loop passes — a running total, a count, or a growing list.", lesson: 8, tags: ["control-flow", "patterns"] },
      { term: "break", def: "Ends the nearest enclosing loop immediately, skipping any remaining passes.", lesson: 9, tags: ["control-flow", "loops"] },
      { term: "continue", def: "Skips the rest of the current pass and jumps straight to the next one. The loop itself keeps going.", lesson: 9, tags: ["control-flow", "loops"] },
      { term: "Loop else", def: "An <code>else</code> block on a loop that runs only if the loop finished without hitting <code>break</code>.", lesson: 9, tags: ["control-flow", "loops"] }
    ]
  },
  {
    id: "together", title: "Putting it together",
    terms: [
      { term: "Control flow", def: "The order in which a program's statements run. Conditions and loops are what make it more than a straight line.", lesson: 10, tags: ["control-flow", "fundamentals"] },
      { term: "Nesting depth", def: "How many blocks deep a statement sits. Deep nesting is hard to read, so early exits are preferred.", lesson: 10, tags: ["control-flow", "patterns"] },
      { term: "Early exit", def: "Returning or breaking as soon as the answer is known, instead of wrapping the rest of the work in another condition.", lesson: 10, tags: ["control-flow", "patterns"] },
      { term: "Sentinel value", def: "A special value that marks the end of a sequence of input, such as <code>None</code> or an empty string.", lesson: 10, tags: ["control-flow", "patterns"] },
      { term: "State machine", def: "A program shaped as a set of named states plus the conditions that move between them — control flow made explicit.", lesson: 10, tags: ["control-flow", "patterns"] }
    ]
  }
];

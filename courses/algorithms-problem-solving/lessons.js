/* ============================================================
   Algorithms & Problem Solving — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.

   Add a lesson by appending one entry here and creating the
   matching file in ./lessons/. Nothing else needs to change.
   (Or run: node tools/new-lesson.js algorithms-problem-solving "<Lesson title>")

   Fields
     n     1-based lesson number (must be unique, in order)
     id    dash-case slug, matches the filename after the number
     file  path to the lesson, relative to THIS course folder
     title short title shown in nav and the map
     topic the grouping label used by the hub
     anim  legacy scene key (kept for the hub card art)
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "what-an-algorithm-really-is", file: "lessons/0001-what-an-algorithm-really-is.html", title: "What an algorithm really is", topic: "Problem-solving habits", anim: "AlgWhat" },
  { n: 2, id: "linear-search", file: "lessons/0002-linear-search.html", title: "Linear search", topic: "Searching", anim: "AlgLinear" },
  { n: 3, id: "binary-search", file: "lessons/0003-binary-search.html", title: "Binary search", topic: "Searching", anim: "AlgBinary" },
  { n: 4, id: "selection-and-insertion-sort", file: "lessons/0004-selection-and-insertion-sort.html", title: "Selection and insertion sort", topic: "Sorting", anim: "AlgSortBasic" },
  { n: 5, id: "divide-and-conquer-merge-sort", file: "lessons/0005-divide-and-conquer-merge-sort.html", title: "Divide and conquer: merge sort", topic: "Sorting", anim: "AlgMerge" },
  { n: 6, id: "recursion-a-function-that-calls-itself", file: "lessons/0006-recursion-a-function-that-calls-itself.html", title: "Recursion: a function that calls itself", topic: "Recursion", anim: "AlgRecursion" },
  { n: 7, id: "recursion-in-disguise-the-call-stack", file: "lessons/0007-recursion-in-disguise-the-call-stack.html", title: "Recursion in disguise: the call stack", topic: "Recursion", anim: "AlgStack" },
  { n: 8, id: "putting-it-together-solving-a-hard-problem", file: "lessons/0008-putting-it-together-solving-a-hard-problem.html", title: "Putting it together: solving a hard problem", topic: "Putting it together", anim: "AlgTogether" }
];

/* ============================================================
   Algorithms & Problem Solving — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections. Each
   entry:
     term   the word or symbol being defined
     def    one-sentence definition (may contain <code> markup)
     lesson the lesson number that teaches it (1-based)
     tags   free-form tags, used by the site-wide glossary filter
   ============================================================ */
window.TeachGlossary = [
  {
    id: "sorting", title: "Sorting",
    terms: [
      { term: "Sorting", def: "Rearranging a collection so its items are in a defined order — usually smallest to largest. It is the setup step that makes fast searching possible.", lesson: 4, tags: ["sorting", "fundamentals"] },
      { term: "Selection sort", def: "Repeatedly scan the unsorted part for the smallest remaining item and swap it into place. Simple, but it always does about $n^2/2$ comparisons.", lesson: 4, tags: ["sorting", "algorithm"] },
      { term: "Insertion sort", def: "Take the next item and slide it left until it sits in the right place, like sorting a hand of playing cards. Fast on nearly-sorted data.", lesson: 4, tags: ["sorting", "algorithm"] },
      { term: "In-place sort", def: "A sort that rearranges the items inside the original array, using only a constant amount of extra memory.", lesson: 4, tags: ["sorting", "memory"] },
      { term: "Stable sort", def: "A sort that keeps items with equal keys in their original relative order — important when you sort by one field after another.", lesson: 4, tags: ["sorting", "property"] },
      { term: "Merge sort", def: "Split the list in half, sort each half the same way, then merge the two sorted halves. Guaranteed $O(n \\log n)$ and the classic divide-and-conquer example.", lesson: 5, tags: ["sorting", "algorithm"] },
      { term: "Merge", def: "The combine step of merge sort: walk two sorted lists in parallel, always taking the smaller front item, until both are empty.", lesson: 5, tags: ["sorting", "algorithm"] },
      { term: "Divide and conquer", def: "A strategy that splits a problem into smaller copies of itself, solves those, then combines the results. Merge sort and binary search are both examples.", lesson: 5, tags: ["method", "strategy"] }
    ]
  },
  {
    id: "searching", title: "Searching",
    terms: [
      { term: "Searching", def: "Looking through a collection for a particular item, or for the position where it belongs.", lesson: 2, tags: ["searching", "fundamentals"] },
      { term: "Linear search", def: "Check every item from the start until you find the target or run out. Works on any list, sorted or not, but takes $O(n)$ time.", lesson: 2, tags: ["searching", "algorithm"] },
      { term: "Sentinel", def: "A value placed at the end of a list so the search loop does not need a separate bounds check on every iteration.", lesson: 2, tags: ["searching", "technique"] },
      { term: "Binary search", def: "Repeatedly halve a <b>sorted</b> range by comparing the target with the middle item. Finds any item in about $\\log_2 n$ steps.", lesson: 3, tags: ["searching", "algorithm"] },
      { term: "Sorted precondition", def: "The requirement that the data is already in order. Binary search is meaningless without it — this is the most common bug in the algorithm.", lesson: 3, tags: ["searching", "correctness"] },
      { term: "Midpoint", def: "The index halfway between the low and high ends of the current range, computed as <code>low + (high - low) / 2</code> to avoid overflow.", lesson: 3, tags: ["searching", "technique"] },
      { term: "Search space", def: "The set of positions that could still contain the answer. Every good search algorithm shrinks it as fast as it can.", lesson: 3, tags: ["searching", "method"] }
    ]
  },
  {
    id: "recursion", title: "Recursion",
    terms: [
      { term: "Recursion", def: "A function that solves a problem by calling itself on a smaller version of the same problem.", lesson: 6, tags: ["recursion", "fundamentals"] },
      { term: "Base case", def: "The input small enough that the answer is known directly, with no further calls. Without one, recursion never stops.", lesson: 6, tags: ["recursion", "correctness"] },
      { term: "Recursive case", def: "The branch that reduces the problem and calls the function again — the step that makes progress toward the base case.", lesson: 6, tags: ["recursion", "structure"] },
      { term: "Call stack", def: "The structure that records every function call still in progress, so the machine knows where to return when one finishes.", lesson: 7, tags: ["recursion", "runtime"] },
      { term: "Stack frame", def: "The block of memory holding one call's parameters, local variables and return address. Each recursive call adds a frame.", lesson: 7, tags: ["recursion", "runtime"] },
      { term: "Stack overflow", def: "The error you get when recursion goes too deep and the call stack runs out of room — usually a missing or unreachable base case.", lesson: 7, tags: ["recursion", "errors"] },
      { term: "Tail recursion", def: "A recursive call that is the very last thing the function does, which some languages can turn into a loop to save stack space.", lesson: 7, tags: ["recursion", "optimisation"] }
    ]
  },
  {
    id: "habits", title: "Problem-solving habits",
    terms: [
      { term: "Algorithm", def: "A finite, unambiguous sequence of steps that turns an input into an output. It must terminate, and every step must be doable.", lesson: 1, tags: ["fundamentals", "method"] },
      { term: "Pseudocode", def: "A precise description of an algorithm written in plain language and indentation, with no language syntax to argue about.", lesson: 1, tags: ["method", "notation"] },
      { term: "Decomposition", def: "Breaking a hard problem into smaller problems you already know how to solve, then solving those.", lesson: 1, tags: ["method", "strategy"] },
      { term: "Invariant", def: "A statement that is true before and after every step of a loop. It is how you convince yourself an algorithm is correct.", lesson: 1, tags: ["method", "correctness"] },
      { term: "Trace", def: "Running an algorithm by hand on a small input, writing down the state after each step, to see exactly where it goes wrong.", lesson: 1, tags: ["method", "debugging"] },
      { term: "Edge case", def: "An input at the boundary of what the algorithm must handle — empty, one item, all equal, already sorted — where bugs hide.", lesson: 1, tags: ["method", "testing"] }
    ]
  },
  {
    id: "together", title: "Putting it together",
    terms: [
      { term: "Complexity", def: "How an algorithm's cost grows as the input grows, written with big-O notation such as $O(n)$ or $O(n \\log n)$.", lesson: 8, tags: ["analysis", "performance"] },
      { term: "Big-O notation", def: "A way of describing an algorithm's growth rate while ignoring constants and small inputs — the shape of the curve, not its height.", lesson: 8, tags: ["analysis", "performance"] },
      { term: "Trade-off", def: "The cost you accept to get a benefit — sorting once to make every later search fast is the classic example.", lesson: 8, tags: ["method", "strategy"] },
      { term: "Precomputation", def: "Doing work up front so later queries are cheap. Sorting a list before searching it is precomputation.", lesson: 8, tags: ["method", "performance"] }
    ]
  }
];

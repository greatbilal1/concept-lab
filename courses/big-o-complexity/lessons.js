/* ============================================================
   Big O & Computational Complexity — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.

   Add a lesson by appending one entry here and creating the
   matching file in ./lessons/. Nothing else needs to change.
   (Or run: node tools/new-lesson.js big-o-complexity "<Lesson title>")

   Fields
     n     1-based lesson number (must be unique, in order)
     id    dash-case slug, matches the filename after the number
     file  path to the lesson, relative to THIS course folder
     title short title shown in nav and the map
     topic the grouping label used by the hub
     anim  legacy scene key (kept for the hub card art)
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "counting-the-work", file: "lessons/0001-counting-the-work.html", title: "Counting the work", topic: "Growth", anim: "BigOGrowth" },
  { n: 2, id: "growth-not-stopwatch", file: "lessons/0002-growth-not-stopwatch.html", title: "Growth, not stopwatch", topic: "Growth", anim: "BigOGrowth2" },
  { n: 3, id: "reading-big-o-notation", file: "lessons/0003-reading-big-o-notation.html", title: "Reading Big O notation", topic: "Notation", anim: "BigONotation" },
  { n: 4, id: "dropping-the-constants", file: "lessons/0004-dropping-the-constants.html", title: "Dropping the constants", topic: "Notation", anim: "BigODrop" },
  { n: 5, id: "the-common-complexity-classes", file: "lessons/0005-the-common-complexity-classes.html", title: "The common complexity classes", topic: "Complexity classes", anim: "BigOClasses" },
  { n: 6, id: "space-and-trade-offs", file: "lessons/0006-space-and-trade-offs.html", title: "Space and trade-offs", topic: "Space & trade-offs", anim: "BigOSpace" },
  { n: 7, id: "best-worst-average", file: "lessons/0007-best-worst-average.html", title: "Best, worst, average", topic: "Space & trade-offs", anim: "BigOCases" },
  { n: 8, id: "choosing-between-two-solutions", file: "lessons/0008-choosing-between-two-solutions.html", title: "Choosing between two solutions", topic: "Putting it together", anim: "BigOChoose" }
];

/* ============================================================
   Big O & Computational Complexity — glossary
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
    id: "growth", title: "Growth & Scaling",
    terms: [
      { term: "Time Complexity", def: "How the runtime of an algorithm scales as the size of the input N grows.", lesson: 1, tags: ["complexity", "cs"] },
      { term: "Step Count", def: "The number of fundamental primitive operations executed by an algorithm as a function of input size.", lesson: 1, tags: ["complexity", "algorithms"] },
      { term: "Asymptotic Analysis", def: "Evaluating algorithm performance in the limit as input size N approaches infinity.", lesson: 2, tags: ["math", "complexity"] },
      { term: "Order of Growth", def: "The mathematical rate at which resource consumption increases as input size scales.", lesson: 2, tags: ["complexity", "math"] }
    ]
  },
  {
    id: "notation", title: "Big O Notation",
    terms: [
      { term: "Big O Notation", def: "A mathematical notation describing the upper bound of an algorithm's growth rate in the worst case.", lesson: 3, tags: ["complexity", "math"] },
      { term: "Dominant Term", def: "The highest-order mathematical term in a complexity polynomial that outgrows all other terms as N scales.", lesson: 4, tags: ["complexity", "math"] },
      { term: "Constant Factors", def: "Multiplicative or additive constants dropped in Big O because they do not change the rate of growth.", lesson: 4, tags: ["complexity", "algorithms"] }
    ]
  },
  {
    id: "classes", title: "Complexity Classes",
    terms: [
      { term: "O(1) Constant Time", def: "An algorithm whose execution time remains identical regardless of input size N.", lesson: 5, tags: ["complexity", "classes"] },
      { term: "O(log N) Logarithmic Time", def: "An algorithm whose steps scale with the logarithm of N, typically halving the search space each step.", lesson: 5, tags: ["complexity", "classes"] },
      { term: "O(N) Linear Time", def: "An algorithm whose steps grow directly in direct proportion to input size N.", lesson: 5, tags: ["complexity", "classes"] },
      { term: "O(N log N) Linearithmic Time", def: "The optimal comparison sorting complexity achieved by merge sort and quicksort.", lesson: 5, tags: ["complexity", "classes"] },
      { term: "O(N²) Quadratic Time", def: "An algorithm whose work grows with the square of the input size, typically caused by nested loops.", lesson: 5, tags: ["complexity", "classes"] },
      { term: "O(2^N) Exponential Time", def: "An algorithm whose operations double with each added element, common in naive recursive search.", lesson: 5, tags: ["complexity", "classes"] }
    ]
  },
  {
    id: "tradeoffs", title: "Space & Trade-Offs",
    terms: [
      { term: "Space Complexity", def: "The amount of working memory an algorithm allocates as a function of input size N.", lesson: 6, tags: ["complexity", "memory"] },
      { term: "Time-Space Trade-off", def: "Sacrificing memory (e.g. hash table caches) to achieve faster execution speed, or vice versa.", lesson: 6, tags: ["architecture", "complexity"] },
      { term: "Worst-Case Complexity", def: "The maximum number of steps an algorithm can take across any possible input of size N.", lesson: 7, tags: ["complexity", "analysis"] },
      { term: "Average-Case Complexity", def: "The expected number of steps executed by an algorithm over a random distribution of inputs.", lesson: 7, tags: ["complexity", "probability"] },
      { term: "Amortized Analysis", def: "Averaging the execution cost of an operation over a long sequence, accounting for rare expensive spikes.", lesson: 8, tags: ["complexity", "algorithms"] }
    ]
  }
];

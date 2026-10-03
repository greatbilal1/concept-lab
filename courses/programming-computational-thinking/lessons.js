/* ============================================================
   Programming & Computational Thinking — lesson manifest
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
     topic the part of the thinking loop it covers (for grouping)
     anim  legacy scene key (animations are not used by the lesson
           pages; kept for reference and for the hub card art)

   The same file also carries this course's GLOSSARY (window.TeachGlossary).
   It is the course's own vocabulary, grouped into sections, and it is the
   single source of truth for the term list: the course's reference page
   renders it, and the site-wide glossary links back into it.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "what-computational-thinking-is", file: "lessons/0001-what-computational-thinking-is.html", title: "What computational thinking is", topic: "The loop", anim: "PctLoop" },
  { n: 2, id: "decomposition",                  file: "lessons/0002-decomposition.html",                  title: "Decomposition",                  topic: "The core moves", anim: "PctDecompose" },
  { n: 3, id: "pattern-recognition",            file: "lessons/0003-pattern-recognition.html",            title: "Pattern recognition",            topic: "The core moves", anim: "PctPattern" },
  { n: 4, id: "abstraction",                    file: "lessons/0004-abstraction.html",                    title: "Abstraction",                    topic: "The core moves", anim: "PctAbstract" },
  { n: 5, id: "algorithms",                     file: "lessons/0005-algorithms.html",                     title: "Algorithms",                     topic: "The core moves", anim: "PctAlgorithm" },
  { n: 6, id: "evaluation",                     file: "lessons/0006-evaluation.html",                     title: "Evaluation",                     topic: "Judging the work", anim: "PctEvaluate" },
  { n: 7, id: "generalisation",                 file: "lessons/0007-generalisation.html",                 title: "Generalisation",                 topic: "Judging the work", anim: "PctGeneralise" },
  { n: 8, id: "putting-it-together",            file: "lessons/0008-putting-it-together.html",            title: "Putting it together",            topic: "The loop", anim: "PctTogether" }
];

/* ============================================================
   Programming & Computational Thinking — glossary
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
    id: "thinking", title: "Computational thinking",
    terms: [
      { term: "Computational thinking", def: "Formulating a problem and its solution so that the solution can be carried out by a computer — the thinking, not the coding.", lesson: 1, tags: ["fundamentals"] },
      { term: "Problem statement", def: "A one-sentence description of what must be true when you are finished, written before you start solving.", lesson: 1, tags: ["fundamentals"] },
      { term: "Input", def: "What the solution is given to work with — the information that arrives from outside.", lesson: 1, tags: ["fundamentals"] },
      { term: "Output", def: "What the solution must produce — the result that can be checked against the problem statement.", lesson: 1, tags: ["fundamentals"] },
      { term: "The loop", def: "The repeating cycle of decompose → find patterns → abstract → write an algorithm, then check the result and go round again.", lesson: 1, tags: ["fundamentals"] },
      { term: "Ambiguity", def: "A step that could be understood in more than one way. A computer cannot resolve ambiguity; a human can.", lesson: 1, tags: ["fundamentals"] }
    ]
  },
  {
    id: "decomposition", title: "Decomposition",
    terms: [
      { term: "Decomposition", def: "Breaking one large problem into smaller problems that can each be understood and solved on their own.", lesson: 2, tags: ["decomposition"] },
      { term: "Sub-problem", def: "One of the smaller problems produced by decomposition. It should be small enough to solve without thinking about the rest.", lesson: 2, tags: ["decomposition"] },
      { term: "Partition", def: "A split of a problem into parts that do not overlap and together cover the whole problem.", lesson: 2, tags: ["decomposition"] },
      { term: "Dependency", def: "A case where one sub-problem cannot be solved until another one is finished first.", lesson: 2, tags: ["decomposition"] },
      { term: "Order of work", def: "The sequence in which sub-problems must be tackled, determined by their dependencies.", lesson: 2, tags: ["decomposition"] },
      { term: "Granularity", def: "How finely a problem is split. Too coarse and the parts are still hard; too fine and you drown in detail.", lesson: 2, tags: ["decomposition"] }
    ]
  },
  {
    id: "patterns", title: "Patterns",
    terms: [
      { term: "Pattern recognition", def: "Noticing that two parts of a problem are the same shape, so one solution can serve both.", lesson: 3, tags: ["patterns"] },
      { term: "Repetition", def: "The same step happening more than once. Repetition is the most common pattern and the easiest to exploit.", lesson: 3, tags: ["patterns"] },
      { term: "Similarity", def: "Two things that are not identical but differ only in a detail you can supply as a value.", lesson: 3, tags: ["patterns"] },
      { term: "Generalisation", def: "Replacing several specific cases with one rule that covers all of them.", lesson: 3, tags: ["patterns"] },
      { term: "Reuse", def: "Solving a problem once and using that solution again instead of solving it a second time.", lesson: 3, tags: ["patterns"] },
      { term: "Counter-example", def: "A case that looks like it fits the pattern but does not. Finding one tells you the pattern is too broad.", lesson: 3, tags: ["patterns"] }
    ]
  },
  {
    id: "abstraction", title: "Abstraction",
    terms: [
      { term: "Abstraction", def: "Keeping only the details that matter for the problem at hand and hiding the rest behind a simple name.", lesson: 4, tags: ["abstraction"] },
      { term: "Interface", def: "What an abstraction promises to do — its name, its inputs and its output — as seen from the outside.", lesson: 4, tags: ["abstraction"] },
      { term: "Implementation", def: "How an abstraction actually does it. The implementation can change without the interface changing.", lesson: 4, tags: ["abstraction"] },
      { term: "Black box", def: "A part you can use without knowing how it works inside, because its interface is enough.", lesson: 4, tags: ["abstraction"] },
      { term: "Level of detail", def: "How much of the inside you choose to show. The right level depends on who is reading.", lesson: 4, tags: ["abstraction"] },
      { term: "Leaky abstraction", def: "An abstraction that forces you to know about its insides anyway — usually a sign it was drawn in the wrong place.", lesson: 4, tags: ["abstraction"] }
    ]
  },
  {
    id: "algorithms", title: "Algorithms",
    terms: [
      { term: "Algorithm", def: "A finite, ordered set of unambiguous steps that turns an input into the required output.", lesson: 5, tags: ["algorithms"] },
      { term: "Step", def: "One instruction in an algorithm. It must be something the executor can carry out without asking questions.", lesson: 5, tags: ["algorithms"] },
      { term: "Sequence", def: "Steps carried out one after another, in the order written. Changing the order changes the result.", lesson: 5, tags: ["algorithms"] },
      { term: "Selection", def: "Choosing between two paths based on a condition — the 'if' shape of an algorithm.", lesson: 5, tags: ["algorithms"] },
      { term: "Iteration", def: "Repeating a group of steps until a condition is met — the 'repeat' shape of an algorithm.", lesson: 5, tags: ["algorithms"] },
      { term: "Termination", def: "The guarantee that an algorithm eventually stops. An algorithm that never stops is not an algorithm.", lesson: 5, tags: ["algorithms"] },
      { term: "Trace", def: "Following an algorithm by hand, step by step, writing down the state after each step to check it is correct.", lesson: 5, tags: ["algorithms"] },
      { term: "Pseudocode", def: "Algorithm steps written in plain language with a loose structure, so they can be read before they are coded.", lesson: 5, tags: ["algorithms"] }
    ]
  },
  {
    id: "evaluation", title: "Evaluation",
    terms: [
      { term: "Evaluation", def: "Judging how good a solution is against named criteria, rather than only checking that it works.", lesson: 6, tags: ["evaluation"] },
      { term: "Criterion", def: "A named quality you judge a solution against — speed, clarity, simplicity. Without one, evaluation is just opinion.", lesson: 6, tags: ["evaluation"] },
      { term: "Efficiency", def: "How much work a solution does to reach its answer. Two correct solutions can differ enormously here.", lesson: 6, tags: ["evaluation"] },
      { term: "Clarity", def: "How easily another person can follow the steps. A solution nobody can read is a solution nobody can fix.", lesson: 6, tags: ["evaluation"] },
      { term: "Simplicity", def: "Having the fewest parts and the fewest special cases. Simpler solutions are easier to check and to change.", lesson: 6, tags: ["evaluation"] },
      { term: "Trade-off", def: "A gain on one criterion paid for by a loss on another. Most real solutions involve choosing which trade-off is right.", lesson: 6, tags: ["evaluation"] },
      { term: "Comparison", def: "Judging two solutions against each other on a criterion — turning \"is this good?\" into a question with a defensible answer.", lesson: 6, tags: ["evaluation"] }
    ]
  },
  {
    id: "generalisation", title: "Generalisation",
    terms: [
      { term: "Generalisation", def: "Widening a solution that works for one case so that it covers a whole family of cases of the same shape.", lesson: 7, tags: ["generalisation"] },
      { term: "Family", def: "The set of cases a general solution covers — every problem of the same shape as the one you solved.", lesson: 7, tags: ["generalisation"] },
      { term: "Parameter", def: "The part of a solution that varies between cases, lifted out so it can be supplied as a value.", lesson: 7, tags: ["generalisation"] },
      { term: "Boundary", def: "The point where a solution's family ends and a different solution is needed. Finding it is not a failure.", lesson: 7, tags: ["generalisation"] },
      { term: "Over-generalisation", def: "Generalising from too few cases, so you invent a parameter that no future case actually needs.", lesson: 7, tags: ["generalisation"] },
      { term: "Reusable method", def: "The moves themselves, generalised into a procedure that works on problems nobody has shown you yet.", lesson: 7, tags: ["generalisation"] }
    ]
  },
  {
    id: "together", title: "Putting it together",
    terms: [
      { term: "Design", def: "Deciding what the parts are, how they fit and in what order they run, before writing any of them.", lesson: 8, tags: ["together"] },
      { term: "Test case", def: "A specific input with the output you expect, used to check that a solution actually works.", lesson: 8, tags: ["together"] },
      { term: "Edge case", def: "An input at the boundary of what is allowed — empty, zero, the largest value — where solutions most often break.", lesson: 8, tags: ["together"] },
      { term: "Refinement", def: "Going round the loop again with a better understanding, replacing a rough part with a sharper one.", lesson: 8, tags: ["together"] },
      { term: "Correctness", def: "The property that a solution produces the required output for every allowed input, not just the ones you tried.", lesson: 8, tags: ["together"] },
      { term: "Decomposition in practice", def: "Using the six moves together: split, spot the pattern, hide the detail, write the steps, judge the result, then generalise it.", lesson: 8, tags: ["together"] }
    ]
  }
];

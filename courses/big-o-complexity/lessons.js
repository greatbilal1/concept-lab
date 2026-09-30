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
];

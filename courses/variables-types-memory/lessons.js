/* ============================================================
   Variables, Types & Memory — lesson manifest
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
     topic the layer of the subject it covers (for grouping)
     anim  legacy scene key (animations are not used by the lesson
           pages; kept for reference and for the hub card art)

   The same file also carries this course's GLOSSARY (window.TeachGlossary).
   It is the course's own vocabulary, grouped into sections, and it is the
   single source of truth for the term list: the course's reference page
   renders it, and the site-wide glossary links back into it.
   ============================================================ */
window.TeachLessons = [
  { n: 1,  id: "a-name-for-a-value",       file: "lessons/0001-a-name-for-a-value.html",       title: "A name for a value",        topic: "Names & values", anim: "VtmName" },
  { n: 2,  id: "assignment-is-a-binding",  file: "lessons/0002-assignment-is-a-binding.html",  title: "Assignment is a binding",   topic: "Names & values", anim: "VtmBind" },
  { n: 3,  id: "types-are-rules",          file: "lessons/0003-types-are-rules.html",          title: "Types are rules",           topic: "Types", anim: "VtmType" },
  { n: 4,  id: "numbers-and-text",         file: "lessons/0004-numbers-and-text.html",         title: "Numbers and text",          topic: "Types", anim: "VtmNumbers" },
  { n: 5,  id: "mutable-and-immutable",    file: "lessons/0005-mutable-and-immutable.html",    title: "Mutable and immutable",     topic: "Types", anim: "VtmMutable" },
  { n: 6,  id: "references-not-copies",    file: "lessons/0006-references-not-copies.html",    title: "References, not copies",    topic: "Memory", anim: "VtmRef" },
  { n: 7,  id: "the-stack-and-the-heap",   file: "lessons/0007-the-stack-and-the-heap.html",   title: "The stack and the heap",    topic: "Memory", anim: "VtmStack" },
  { n: 8,  id: "garbage-and-lifetime",     file: "lessons/0008-garbage-and-lifetime.html",     title: "Garbage and lifetime",      topic: "Memory", anim: "VtmGc" },
  { n: 9,  id: "copying-and-sharing",      file: "lessons/0009-copying-and-sharing.html",      title: "Copying and sharing",       topic: "Putting it together", anim: "VtmCopy" },
  { n: 10, id: "naming-for-humans",        file: "lessons/0010-naming-for-humans.html",        title: "Naming for humans",         topic: "Putting it together", anim: "VtmNaming" }
];

/* ============================================================
   Variables, Types & Memory — glossary
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
    id: "names", title: "Names &amp; values",
    terms: [
      { term: "Variable", def: "A name that refers to a value. The name is not the value — it is a label pointing at one.", lesson: 1, tags: ["fundamentals", "naming"] },
      { term: "Value", def: "The actual data a program works with — the number, the text, the object. Values live in memory; names point at them.", lesson: 1, tags: ["fundamentals", "memory"] },
      { term: "Binding", def: "The association between a name and the value it currently refers to. Assignment creates or replaces a binding.", lesson: 2, tags: ["fundamentals", "assignment"] },
      { term: "Assignment", def: "The statement that binds a name to a value, written <code>name = value</code>. It points the name at the value; it does not copy it.", lesson: 2, tags: ["fundamentals", "assignment"] },
      { term: "Rebinding", def: "Pointing an existing name at a different value. The old value is untouched — only the name moves.", lesson: 2, tags: ["fundamentals", "assignment"] },
      { term: "Expression", def: "A piece of code that produces a value, such as <code>2 + 3</code> or <code>name.upper()</code>. Assignment stores the result.", lesson: 2, tags: ["fundamentals", "syntax"] }
    ]
  },
  {
    id: "types", title: "Types",
    terms: [
      { term: "Type", def: "The kind of value something is — a number, a string, a list — which decides what operations are allowed on it.", lesson: 3, tags: ["types", "fundamentals"] },
      { term: "Type error", def: "The error raised when an operation is applied to a value whose type does not support it, such as adding a number to text.", lesson: 3, tags: ["types", "errors"] },
      { term: "Integer", def: "A whole number with no fractional part, such as <code>7</code> or <code>-3</code>. Exact, with no rounding.", lesson: 4, tags: ["types", "numbers"] },
      { term: "Float", def: "A number with a fractional part, stored in binary, so most decimals are only approximated.", lesson: 4, tags: ["types", "numbers"] },
      { term: "String", def: "A sequence of characters — text. Strings are immutable: you can build new ones but never change one in place.", lesson: 4, tags: ["types", "text"] },
      { term: "Boolean", def: "A value that is either <code>True</code> or <code>False</code>, produced by comparisons and used by conditions.", lesson: 4, tags: ["types", "logic"] },
      { term: "Mutable", def: "A value that can be changed in place after it is created, such as a list or a dictionary.", lesson: 5, tags: ["types", "memory"] },
      { term: "Immutable", def: "A value that can never be changed after it is created, such as a number, a string or a tuple.", lesson: 5, tags: ["types", "memory"] },
      { term: "Identity", def: "Which particular object a name refers to, distinct from whether it equals another. Tested with <code>is</code>.", lesson: 5, tags: ["types", "memory"] }
    ]
  },
  {
    id: "memory", title: "Memory",
    terms: [
      { term: "Reference", def: "A pointer to where a value lives in memory. A variable holds a reference, not the value itself.", lesson: 6, tags: ["memory", "fundamentals"] },
      { term: "Aliasing", def: "Two names referring to the same object, so a change through one is visible through the other.", lesson: 6, tags: ["memory", "bugs"] },
      { term: "Object", def: "A distinct thing in memory with its own identity, type and value. Two equal objects can still be two objects.", lesson: 6, tags: ["memory", "fundamentals"] },
      { term: "Stack", def: "The region of memory that holds the names and frames of the code currently running. Fast, ordered, and freed automatically.", lesson: 7, tags: ["memory", "runtime"] },
      { term: "Heap", def: "The region of memory where objects live. Larger and less ordered than the stack, and managed by the runtime.", lesson: 7, tags: ["memory", "runtime"] },
      { term: "Frame", def: "The block of stack memory belonging to one function call, holding its local names until the call returns.", lesson: 7, tags: ["memory", "runtime"] },
      { term: "Garbage collection", def: "The runtime reclaiming memory from objects no longer reachable by any name, so you do not free them by hand.", lesson: 8, tags: ["memory", "runtime"] },
      { term: "Reference count", def: "The number of references pointing at an object. When it drops to zero, the object can be reclaimed.", lesson: 8, tags: ["memory", "runtime"] },
      { term: "Memory leak", def: "Memory that stays reachable but is never used again, so the runtime cannot reclaim it.", lesson: 8, tags: ["memory", "bugs"] }
    ]
  },
  {
    id: "together", title: "Putting it together",
    terms: [
      { term: "Shallow copy", def: "A new container holding references to the same inner objects, so nested changes still show through.", lesson: 9, tags: ["memory", "copying"] },
      { term: "Deep copy", def: "A copy that recursively duplicates everything inside, so the result shares nothing with the original.", lesson: 9, tags: ["memory", "copying"] },
      { term: "Pass by reference", def: "Handing a function a reference to an object, so the function can change the object the caller sees.", lesson: 9, tags: ["memory", "functions"] },
      { term: "Naming convention", def: "An agreed style for names — <code>snake_case</code> for variables, <code>UPPER_CASE</code> for constants — that makes code readable.", lesson: 10, tags: ["craft", "naming"] },
      { term: "Constant", def: "A name whose value is not meant to change, written in <code>UPPER_CASE</code> to signal that intent to readers.", lesson: 10, tags: ["craft", "naming"] },
      { term: "Shadowing", def: "Reusing a name that already exists in an outer scope, hiding the original and inviting confusion.", lesson: 10, tags: ["craft", "bugs"] }
    ]
  }
];

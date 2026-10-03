/* ============================================================
   Data Structures course — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.

   Add a lesson by appending one entry here and creating the
   matching file in ./lessons/. Nothing else needs to change.
   (Or run: node tools/new-lesson.js data-structures "<Lesson title>")

   Fields
     n     1-based lesson number (must be unique, in order)
     id    dash-case slug, matches the filename after the number
     file  path to the lesson, relative to THIS course folder
     title short title shown in nav and the map
     topic the grouping label used by the hub
     anim  legacy scene key (kept for the hub card art)
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "arrays-the-default",        file: "lessons/0001-arrays-the-default.html",        title: "Arrays: the default",       topic: "Contiguous data", anim: "DsArrays" },
  { n: 2, id: "linked-lists",              file: "lessons/0002-linked-lists.html",              title: "Linked lists",              topic: "Contiguous data", anim: "DsLinkedLists" },
  { n: 3, id: "stacks",                    file: "lessons/0003-stacks.html",                    title: "Stacks (LIFO)",             topic: "Ordered access", anim: "DsStacks" },
  { n: 4, id: "queues",                    file: "lessons/0004-queues.html",                    title: "Queues (FIFO)",             topic: "Ordered access", anim: "DsQueues" },
  { n: 5, id: "hash-tables",               file: "lessons/0005-hash-tables.html",               title: "Hash tables",               topic: "Keyed lookup", anim: "DsHashTables" },
  { n: 6, id: "trees",                     file: "lessons/0006-trees.html",                     title: "Trees",                     topic: "Hierarchy", anim: "DsTrees" },
  { n: 7, id: "binary-search-trees",       file: "lessons/0007-binary-search-trees.html",       title: "Binary search trees",       topic: "Hierarchy", anim: "DsBst" },
  { n: 8, id: "choosing-a-structure",      file: "lessons/0008-choosing-a-structure.html",      title: "Choosing a structure",      topic: "Putting it together", anim: "DsChoosing" }
];

/* ============================================================
   Data Structures course — glossary
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
    id: "layout", title: "How data is laid out",
    terms: [
      { term: "Data structure", def: "A way of <b>arranging</b> data in memory so that certain operations become cheap. The arrangement is the point, not the data.", lesson: 1, tags: ["cs", "data-structures"] },
      { term: "Array", def: "A block of <b>contiguous</b> memory holding items of the same size, so any item can be reached instantly by index.", lesson: 1, tags: ["cs", "data-structures"] },
      { term: "Index", def: "The position of an item in an array, counted from 0. Because items are contiguous, the address is <code>start + index × size</code>.", lesson: 1, tags: ["cs", "data-structures"] },
      { term: "Linked list", def: "A chain of <b>nodes</b>, each holding a value and a pointer to the next node — no contiguity required.", lesson: 2, tags: ["cs", "data-structures"] },
      { term: "Node", def: "One link in a linked list: a value plus a reference to the next node (and, in a doubly linked list, the previous one).", lesson: 2, tags: ["cs", "data-structures"] },
      { term: "Pointer", def: "A reference to another place in memory. In Python it is the object reference stored in a variable or attribute.", lesson: 2, tags: ["cs", "data-structures"] }
    ]
  },
  {
    id: "ordered", title: "Ordered access",
    terms: [
      { term: "Stack", def: "A structure where the <b>last</b> item in is the <b>first</b> item out (LIFO). You only ever touch the top.", lesson: 3, tags: ["cs", "data-structures"] },
      { term: "LIFO", def: "Last In, First Out — the rule a stack obeys. The most recent addition is the next one removed.", lesson: 3, tags: ["cs", "data-structures"] },
      { term: "Push", def: "Add an item to the top of a stack.", lesson: 3, tags: ["cs", "data-structures"] },
      { term: "Pop", def: "Remove and return the item on top of a stack.", lesson: 3, tags: ["cs", "data-structures"] },
      { term: "Queue", def: "A structure where the <b>first</b> item in is the <b>first</b> item out (FIFO). You add at the back and remove from the front.", lesson: 4, tags: ["cs", "data-structures"] },
      { term: "FIFO", def: "First In, First Out — the rule a queue obeys. Items leave in the order they arrived.", lesson: 4, tags: ["cs", "data-structures"] },
      { term: "Enqueue", def: "Add an item to the back of a queue.", lesson: 4, tags: ["cs", "data-structures"] },
      { term: "Dequeue", def: "Remove and return the item at the front of a queue.", lesson: 4, tags: ["cs", "data-structures"] }
    ]
  },
  {
    id: "keyed", title: "Keyed lookup",
    terms: [
      { term: "Hash table", def: "A structure that maps a <b>key</b> to a <b>value</b> by hashing the key to an array slot, giving near-instant lookup.", lesson: 5, tags: ["cs", "data-structures"] },
      { term: "Hash function", def: "A function that turns a key into an array index. The same key always produces the same index.", lesson: 5, tags: ["cs", "data-structures"] },
      { term: "Collision", def: "When two different keys hash to the same slot. Handled by chaining (a list per slot) or probing (look for the next free slot).", lesson: 5, tags: ["cs", "data-structures"] },
      { term: "Load factor", def: "The ratio of stored items to slots. When it grows too high, the table is resized to keep lookups fast.", lesson: 5, tags: ["cs", "data-structures"] },
      { term: "Dictionary", def: "Python's built-in hash table, written <code>{key: value}</code>. Lookup, insert and delete are all near-constant time.", lesson: 5, tags: ["cs", "python"] }
    ]
  },
  {
    id: "hierarchy", title: "Hierarchy",
    terms: [
      { term: "Tree", def: "A structure of <b>nodes</b> connected by edges with no cycles, where each node has one parent and zero or more children.", lesson: 6, tags: ["cs", "data-structures"] },
      { term: "Root", def: "The single top node of a tree — the only node with no parent.", lesson: 6, tags: ["cs", "data-structures"] },
      { term: "Leaf", def: "A node with no children.", lesson: 6, tags: ["cs", "data-structures"] },
      { term: "Binary tree", def: "A tree where every node has at most <b>two</b> children, usually called left and right.", lesson: 6, tags: ["cs", "data-structures"] },
      { term: "Binary search tree", def: "A binary tree kept in order: everything left of a node is smaller, everything right is larger, so search can halve the space each step.", lesson: 7, tags: ["cs", "data-structures"] },
      { term: "Traversal", def: "Visiting every node of a tree in a defined order — depth-first (in/pre/post-order) or breadth-first.", lesson: 7, tags: ["cs", "data-structures"] }
    ]
  },
  {
    id: "cost", title: "Cost and choice",
    terms: [
      { term: "Big-O", def: "A notation for how an operation's cost grows as the data grows — <code>O(1)</code> constant, <code>O(n)</code> linear, <code>O(log n)</code> logarithmic.", lesson: 8, tags: ["cs", "complexity"] },
      { term: "Amortised cost", def: "The average cost of an operation over many calls, even if a single call is occasionally expensive (like a list resize).", lesson: 8, tags: ["cs", "complexity"] },
      { term: "Trade-off", def: "Every structure makes some operations cheap by making others expensive. Choosing a structure means choosing which costs you accept.", lesson: 8, tags: ["cs", "data-structures"] }
    ]
  }
];

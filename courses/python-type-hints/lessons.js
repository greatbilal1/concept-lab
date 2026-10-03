/* ============================================================
   Python Type Hints — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.

   Add a lesson by appending one entry here and creating the
   matching file in ./lessons/. Nothing else needs to change.
   (Or run: node tools/new-lesson.js python-type-hints "<Lesson title>")

   Fields
     n     1-based lesson number (must be unique, in order)
     id    dash-case slug, matches the filename after the number
     file  path to the lesson, relative to THIS course folder
     title short title shown in nav and the map
     topic the grouping label used by the hub
     anim  legacy scene key (kept for the hub card art)
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "why-annotate", file: "lessons/0001-why-annotate.html", title: "Why Annotate?", topic: "Annotations", anim: "code" },
  { n: 2, id: "annotating-variables-and-functions", file: "lessons/0002-annotating-variables-and-functions.html", title: "Annotating Variables and Functions", topic: "Annotations", anim: "code" },
  { n: 3, id: "the-common-types", file: "lessons/0003-the-common-types.html", title: "The Common Types", topic: "Annotations", anim: "layers" },
  { n: 4, id: "optional-and-union", file: "lessons/0004-optional-and-union.html", title: "Optional and Union", topic: "Annotations", anim: "flow" },
  { n: 5, id: "collections-and-generics", file: "lessons/0005-collections-and-generics.html", title: "Collections and Generics", topic: "Generics", anim: "layers" },
  { n: 6, id: "type-aliases-and-newtype", file: "lessons/0006-type-aliases-and-newtype.html", title: "Type Aliases and NewType", topic: "Generics", anim: "code" },
  { n: 7, id: "protocols-and-callables", file: "lessons/0007-protocols-and-callables.html", title: "Protocols and Callables", topic: "Generics", anim: "flow" },
  { n: 8, id: "static-checking-with-mypy", file: "lessons/0008-static-checking-with-mypy.html", title: "Static Checking with mypy", topic: "Checking", anim: "code" },
  { n: 9, id: "annotations-at-runtime", file: "lessons/0009-annotations-at-runtime.html", title: "Annotations at Runtime", topic: "Checking", anim: "layers" },
  { n: 10, id: "typing-in-a-real-project", file: "lessons/0010-typing-in-a-real-project.html", title: "Typing in a Real Project", topic: "Together", anim: "flow" }
];

/* ============================================================
   Python Type Hints — glossary
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
    id: "annotations", title: "Annotations", terms: [
      { term: "Type hint", def: "An annotation that records the intended type of a variable, parameter or return value.", lesson: 1, tags: ["python", "types"] },
      { term: "Annotation", def: "The syntax that attaches a type expression to a name, written after a colon.", lesson: 1, tags: ["python", "types"] },
      { term: "Static checking", def: "Analysing code for type errors without running it, using the annotations as evidence.", lesson: 1, tags: ["python", "types"] },
      { term: "Gradual typing", def: "The property that lets annotated and unannotated code coexist in one program.", lesson: 1, tags: ["python", "types"] },
      { term: "Parameter annotation", def: "A type written after a parameter name, describing what the function accepts.", lesson: 2, tags: ["python", "types"] },
      { term: "Return annotation", def: "A type written after the arrow, describing what the function returns.", lesson: 2, tags: ["python", "types"] },
      { term: "Variable annotation", def: "A type written after a variable name, describing what it will hold.", lesson: 2, tags: ["python", "types"] },
      { term: "None return", def: "The annotation for a function that returns nothing useful, written as -> None.", lesson: 2, tags: ["python", "types"] },
      { term: "int / float / str / bool", def: "The four built-in scalar types used most often in annotations.", lesson: 3, tags: ["python", "types"] },
      { term: "Any", def: "The escape hatch type that disables checking for a value.", lesson: 3, tags: ["python", "types"] },
      { term: "object", def: "The type that accepts every value, useful when you truly mean anything.", lesson: 3, tags: ["python", "types"] },
      { term: "NoneType", def: "The type of None, written as None in annotations.", lesson: 3, tags: ["python", "types"] },
      { term: "Optional", def: "A shorthand meaning a value of this type or None.", lesson: 4, tags: ["python", "types"] },
      { term: "Union", def: "A type meaning any one of several listed types.", lesson: 4, tags: ["python", "types"] },
      { term: "Pipe syntax", def: "The modern X | Y form of a union, available from Python 3.10.", lesson: 4, tags: ["python", "types"] },
      { term: "Narrowing", def: "The checker's ability to refine a union to one member after a runtime check.", lesson: 4, tags: ["python", "types"] }
    ]
  },
  {
    id: "generics", title: "Generics", terms: [
      { term: "Generic", def: "A type that takes other types as parameters, such as list[int].", lesson: 5, tags: ["python", "types"] },
      { term: "Type parameter", def: "The type argument written inside brackets, such as the int in list[int].", lesson: 5, tags: ["python", "types"] },
      { term: "list / dict / set / tuple", def: "The built-in collections, each annotated with the type of what it holds.", lesson: 5, tags: ["python", "types"] },
      { term: "TypeVar", def: "A placeholder type used to express that two positions must share the same type.", lesson: 5, tags: ["python", "types"] },
      { term: "Type alias", def: "A name given to a type expression so it can be reused and read clearly.", lesson: 6, tags: ["python", "types"] },
      { term: "NewType", def: "A distinct type built from an existing one, so the checker will not confuse them.", lesson: 6, tags: ["python", "types"] },
      { term: "Literal", def: "A type restricted to a fixed set of exact values.", lesson: 6, tags: ["python", "types"] },
      { term: "TypedDict", def: "A dictionary type with a fixed set of named keys and value types.", lesson: 6, tags: ["python", "types"] },
      { term: "Protocol", def: "A structural type describing the methods an object must have, without inheritance.", lesson: 7, tags: ["python", "types"] },
      { term: "Callable", def: "The type of a function value, written with its parameter and return types.", lesson: 7, tags: ["python", "types"] },
      { term: "Structural typing", def: "Matching types by the shape of their interface rather than by inheritance.", lesson: 7, tags: ["python", "types"] }
    ]
  },
  {
    id: "checking", title: "Checking", terms: [
      { term: "mypy", def: "The most widely used static type checker for Python.", lesson: 8, tags: ["python", "tooling"] },
      { term: "Type error", def: "A mismatch between an annotation and how a value is actually used.", lesson: 8, tags: ["python", "tooling"] },
      { term: "Strict mode", def: "A checker configuration that refuses to silently ignore unannotated code.", lesson: 8, tags: ["python", "tooling"] },
      { term: "Type stub", def: "A .pyi file that declares types for code without changing the code itself.", lesson: 8, tags: ["python", "tooling"] },
      { term: "__annotations__", def: "The dictionary holding a module or function's annotations at runtime.", lesson: 9, tags: ["python", "types"] },
      { term: "get_type_hints", def: "The helper that resolves annotations, including forward references, at runtime.", lesson: 9, tags: ["python", "types"] },
      { term: "Forward reference", def: "An annotation written as a string because the name is not defined yet.", lesson: 9, tags: ["python", "types"] },
      { term: "from __future__ import annotations", def: "The import that makes all annotations lazy strings, avoiding most forward-reference problems.", lesson: 9, tags: ["python", "types"] }
    ]
  },
  {
    id: "together", title: "Together", terms: [
      { term: "Runtime validation", def: "Checking types while the program runs, using the annotations as data.", lesson: 10, tags: ["python", "types"] },
      { term: "Type coverage", def: "The proportion of a codebase that carries useful annotations.", lesson: 10, tags: ["python", "types"] },
      { term: "Incremental adoption", def: "Adding annotations to an existing codebase gradually, file by file.", lesson: 10, tags: ["python", "types"] }
    ]
  }
];

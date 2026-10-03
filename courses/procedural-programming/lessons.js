/* ============================================================
   Procedural Programming — lesson manifest
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
  { n: 1,  id: "a-program-is-a-sequence",  file: "lessons/0001-a-program-is-a-sequence.html",  title: "A program is a sequence",  topic: "Steps", anim: "PpSequence" },
  { n: 2,  id: "naming-a-step",            file: "lessons/0002-naming-a-step.html",            title: "Naming a step",            topic: "Steps", anim: "PpName" },
  { n: 3,  id: "passing-data-in",          file: "lessons/0003-passing-data-in.html",          title: "Passing data in",          topic: "Data", anim: "PpParams" },
  { n: 4,  id: "getting-data-out",         file: "lessons/0004-getting-data-out.html",         title: "Getting data out",         topic: "Data", anim: "PpReturn" },
  { n: 5,  id: "one-job-per-procedure",    file: "lessons/0005-one-job-per-procedure.html",    title: "One job per procedure",    topic: "Structure", anim: "PpOneJob" },
  { n: 6,  id: "shared-state-and-globals", file: "lessons/0006-shared-state-and-globals.html", title: "Shared state and globals", topic: "Structure", anim: "PpGlobal" },
  { n: 7,  id: "grouping-steps-into-a-module", file: "lessons/0007-grouping-steps-into-a-module.html", title: "Grouping steps into a module", topic: "Modules", anim: "PpModule" },
  { n: 8,  id: "importing-and-reusing",    file: "lessons/0008-importing-and-reusing.html",    title: "Importing and reusing",    topic: "Modules", anim: "PpImport" },
  { n: 9,  id: "where-procedural-breaks-down", file: "lessons/0009-where-procedural-breaks-down.html", title: "Where procedural breaks down", topic: "Putting it together", anim: "PpLimits" },
  { n: 10, id: "putting-it-together",      file: "lessons/0010-putting-it-together.html",      title: "Putting it together",      topic: "Putting it together", anim: "PpTogether" }
];

/* ============================================================
   Procedural Programming — glossary
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
    id: "steps", title: "Steps",
    terms: [
      { term: "Procedural programming", def: "A style that organises a program as a sequence of named steps that operate on shared data.", lesson: 1, tags: ["procedural", "design"] },
      { term: "Procedure", def: "A named block of code that performs one step. In Python it is written with <code>def</code>.", lesson: 1, tags: ["procedural", "functions"] },
      { term: "Sequence", def: "The order in which a program's steps run. In procedural code, that order is the program's structure.", lesson: 1, tags: ["procedural", "control-flow"] },
      { term: "Top-level code", def: "Statements that sit outside any procedure and run when the file is loaded, top to bottom.", lesson: 1, tags: ["procedural", "structure"] },
      { term: "Function definition", def: "The <code>def</code> statement that names a step and gives it a body. Defining it does not run it.", lesson: 2, tags: ["functions", "syntax"] },
      { term: "Function call", def: "The expression that runs a procedure, written as its name followed by parentheses.", lesson: 2, tags: ["functions", "syntax"] },
      { term: "Body", def: "The indented block of statements that a procedure runs when it is called.", lesson: 2, tags: ["functions", "syntax"] },
      { term: "Docstring", def: "A string on the first line of a procedure that says what the step does, in one sentence.", lesson: 2, tags: ["functions", "craft"] }
    ]
  },
  {
    id: "data", title: "Data",
    terms: [
      { term: "Parameter", def: "A name in a procedure's definition that receives a value when the procedure is called.", lesson: 3, tags: ["functions", "data"] },
      { term: "Argument", def: "The actual value passed to a procedure at the call site, which fills one of its parameters.", lesson: 3, tags: ["functions", "data"] },
      { term: "Default value", def: "A value a parameter falls back to when the caller does not supply an argument for it.", lesson: 3, tags: ["functions", "data"] },
      { term: "Keyword argument", def: "An argument passed by name, as <code>f(x=1)</code>, so its position does not matter.", lesson: 3, tags: ["functions", "data"] },
      { term: "Return value", def: "The value a procedure hands back to its caller with <code>return</code>. Without one, it returns <code>None</code>.", lesson: 4, tags: ["functions", "data"] },
      { term: "return statement", def: "The statement that ends a procedure immediately and sends a value back to the caller.", lesson: 4, tags: ["functions", "syntax"] },
      { term: "None", def: "Python's value for \"nothing\" — what a procedure returns when it has no <code>return</code> value.", lesson: 4, tags: ["functions", "types"] },
      { term: "Side effect", def: "Anything a procedure does besides returning a value — printing, writing a file, changing shared data.", lesson: 4, tags: ["functions", "design"] }
    ]
  },
  {
    id: "structure", title: "Structure",
    terms: [
      { term: "Single responsibility", def: "The rule that a procedure should do one job, so its name can describe it completely.", lesson: 5, tags: ["design", "craft"] },
      { term: "Refactoring", def: "Changing the structure of code without changing what it does — for example, extracting a step.", lesson: 5, tags: ["design", "craft"] },
      { term: "Extract function", def: "The refactoring that pulls a block of statements out into a named procedure.", lesson: 5, tags: ["design", "craft"] },
      { term: "Cohesion", def: "How closely the statements inside a procedure belong together. High cohesion means one clear job.", lesson: 5, tags: ["design", "craft"] },
      { term: "Global variable", def: "A name defined at the top level of a file, visible to every procedure in it.", lesson: 6, tags: ["state", "scope"] },
      { term: "Global state", def: "Data that many procedures read and write, so any of them can change it at any time.", lesson: 6, tags: ["state", "design"] },
      { term: "global statement", def: "The keyword that lets a procedure rebind a module-level name instead of creating a local one.", lesson: 6, tags: ["state", "syntax"] },
      { term: "Hidden dependency", def: "A procedure that relies on global data, so its behaviour depends on something its signature does not show.", lesson: 6, tags: ["state", "design"] }
    ]
  },
  {
    id: "modules", title: "Modules",
    terms: [
      { term: "Module", def: "A single <code>.py</code> file whose procedures can be imported and reused by other files.", lesson: 7, tags: ["modules", "structure"] },
      { term: "Namespace", def: "The set of names a module owns. Importing a module keeps its names separate from yours.", lesson: 7, tags: ["modules", "scope"] },
      { term: "import statement", def: "The statement that loads another module and makes its names available to the current file.", lesson: 7, tags: ["modules", "syntax"] },
      { term: "Main guard", def: "The <code>if __name__ == \"__main__\":</code> check that runs a file's top-level code only when it is run directly.", lesson: 7, tags: ["modules", "patterns"] },
      { term: "from ... import", def: "An import form that copies specific names out of a module into the current namespace.", lesson: 8, tags: ["modules", "syntax"] },
      { term: "Alias", def: "A second name for an imported module, written with <code>as</code>, such as <code>import math as m</code>.", lesson: 8, tags: ["modules", "syntax"] },
      { term: "Circular import", def: "When two modules import each other, so neither can finish loading. Usually a sign of tangled structure.", lesson: 8, tags: ["modules", "pitfalls"] },
      { term: "Reusability", def: "The property that a procedure or module can be used in a new program without being rewritten.", lesson: 8, tags: ["modules", "design"] }
    ]
  },
  {
    id: "together", title: "Putting it together",
    terms: [
      { term: "Coupling", def: "How much one part of a program depends on another. Loose coupling makes change easier.", lesson: 9, tags: ["design", "craft"] },
      { term: "Data clump", def: "The same group of values passed to procedure after procedure — a sign they belong together.", lesson: 9, tags: ["design", "patterns"] },
      { term: "Passing the same data around", def: "The smell where every procedure takes the same dictionary, because the data has no home of its own.", lesson: 9, tags: ["design", "patterns"] },
      { term: "Procedural limit", def: "The point where a program's shared data outgrows the procedures that operate on it.", lesson: 9, tags: ["design", "patterns"] },
      { term: "Program shape", def: "The overall arrangement of a program's steps — its entry point, its helpers, and the order they run in.", lesson: 10, tags: ["design", "structure"] },
      { term: "Entry point", def: "The step a program starts from, usually the top-level code or the main guard.", lesson: 10, tags: ["design", "structure"] },
      { term: "Helper function", def: "A small procedure that exists only to support a larger step, and is not meant to be called alone.", lesson: 10, tags: ["design", "structure"] },
      { term: "Pipeline", def: "A program shaped as a chain of steps, where each one's output is the next one's input.", lesson: 10, tags: ["design", "patterns"] }
    ]
  }
];

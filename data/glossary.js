/* ============================================================
   Concept Lab — glossary
   ------------------------------------------------------------
   One entry per term. `course` + `section` point back at the
   place the term is taught, so every definition links to its
   source. Add entries as courses are written.
   ============================================================ */

window.GLOSSARY = [
  /* ---------------- OOP ---------------- */
  { term: "Class", def: "A blueprint or type that describes the data and behaviour its objects will have.", course: "oop", section: "class", tags: ["oop", "python"] },
  { term: "Object", def: "A concrete instance built from a class, holding its own copy of the state.", course: "oop", section: "class", tags: ["oop", "python"] },
  { term: "Attribute", def: "Data stored on an object, usually set in the initializer and read through self.", course: "oop", section: "self", tags: ["oop", "python"] },
  { term: "Method", def: "A function that belongs to a class and operates on an instance.", course: "oop", section: "methods", tags: ["oop", "python"] },
  { term: "self", def: "The reference an instance method uses to reach the object it was called on.", course: "oop", section: "self", tags: ["oop", "python"] },
  { term: "Constructor / initializer", def: "The __init__ method that sets up an object's state when it is created.", course: "oop", section: "init", tags: ["oop", "python"] },
  { term: "Encapsulation", def: "Keeping state and the behaviour that guards it together, and controlling outside access.", course: "oop", section: "encap", tags: ["oop", "design"] },
  { term: "Inheritance", def: "Deriving one class from another so it reuses and extends the parent's behaviour.", course: "oop", section: "inherit", tags: ["oop", "design"] },
  { term: "Polymorphism", def: "The same call working on different types, each responding in its own way.", course: "oop", section: "poly", tags: ["oop", "design"] },
  { term: "Abstraction", def: "Exposing a simple interface while hiding the messy details behind it.", course: "oop", section: "abstract", tags: ["oop", "design"], concept: "abstraction" },
  { term: "Composition", def: "Building a larger object by containing smaller, focused objects.", course: "oop", section: "composition", tags: ["oop", "design"], concept: "composition" },
  { term: "Dunder method", def: "A special method with double underscores that hooks into Python syntax, such as __str__ or __len__.", course: "oop", section: "special", tags: ["oop", "python"] },
  { term: "__init__", def: "The initializer dunder that runs when an object is constructed.", course: "oop", section: "special", tags: ["oop", "python"] },
  { term: "__str__", def: "The dunder that returns the human-friendly string used by print().", course: "oop", section: "special", tags: ["oop", "python"] },
  { term: "__repr__", def: "The dunder that returns the developer-oriented representation of an object.", course: "oop", section: "special", tags: ["oop", "python"] },
  { term: "__len__", def: "The dunder that lets len(obj) work on your object.", course: "oop", section: "special", tags: ["oop", "python"] },
  { term: "__eq__", def: "The dunder that customises what == means for your objects.", course: "oop", section: "special", tags: ["oop", "python"] },
  { term: "Property", def: "A method exposed as an attribute, so reads and writes can run validation logic.", course: "oop", section: "property", tags: ["oop", "python"] },
  { term: "Instance method", def: "A method that receives self and works with one particular object.", course: "oop", section: "classmethods", tags: ["oop", "python"] },
  { term: "Class method", def: "A method that receives the class as cls — often used as an alternate constructor.", course: "oop", section: "classmethods", tags: ["oop", "python"] },
  { term: "Static method", def: "A method grouped with a class that needs neither the instance nor the class.", course: "oop", section: "classmethods", tags: ["oop", "python"] },
  { term: "Dataclass", def: "A decorator that generates boilerplate like __init__ and __repr__ for data-focused classes.", course: "oop", section: "dataclass", tags: ["oop", "python"] },
  { term: "Over-engineering", def: "Adding classes and abstraction the problem does not need — a common OOP failure mode.", course: "oop", section: "design", tags: ["oop", "design"] },
  { term: "Single responsibility", def: "Giving each class one clear job, so state and behaviour stay together and change stays local.", course: "oop", section: "kyc", tags: ["oop", "design"] },

  /* ---------------- cross-cutting (introduced in OOP) ----------------
     These terms are defined where the live course teaches them. As new
     courses are written, add entries pointing at their own sections. */
  { term: "State", def: "The data an object or program holds at a given moment — what it currently is.", course: "oop", section: "mental", tags: ["design", "fundamentals"], concept: "state-behavior" },
  { term: "Behaviour", def: "The operations an object exposes — what it can do with its state.", course: "oop", section: "mental", tags: ["design", "fundamentals"], concept: "state-behavior" },
  { term: "Interface", def: "The set of operations a caller may use, separated from how they are implemented.", course: "oop", section: "abstract", tags: ["design", "fundamentals"], concept: "abstraction" },
  { term: "Coupling", def: "How much one part of a system depends on another; lower coupling makes change cheaper.", course: "oop", section: "design", tags: ["design", "architecture"] },
  { term: "Cohesion", def: "How focused a single unit is on one job; higher cohesion makes code easier to reason about.", course: "oop", section: "design", tags: ["design", "architecture"] },
  { term: "Refactoring", def: "Improving the structure of code without changing what it does.", course: "oop", section: "design", tags: ["craft", "quality"] },
  { term: "Trade-off", def: "A choice that buys one quality at the cost of another — the core of design decisions.", course: "oop", section: "design", tags: ["design", "architecture"], concept: "design-tradeoffs" }
];

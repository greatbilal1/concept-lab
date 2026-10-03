/* ============================================================
   OOP course — lesson manifest
   ------------------------------------------------------------
   The single source of truth for the OOP course order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.

   Add a lesson by appending one entry here and creating the
   matching file in ./lessons/. Nothing else needs to change.

   Fields
     n     1-based lesson number (must be unique, in order)
     id    dash-case slug, matches the filename after the number
     file  path to the lesson, relative to THIS course folder
     title short title shown in nav and the map
     topic the section of OOP it covers (for grouping)
     anim  legacy scene key (animations were removed from lessons;
           kept for reference, unused by the lesson pages)

   The same file also carries this course's GLOSSARY (window.TeachGlossary).
   It is the course's own vocabulary, grouped into sections, and it is the
   single source of truth for the term list: the course's reference page
   renders it, and the site-wide glossary links back into it. A new course
   adds its own window.TeachGlossary — nothing is duplicated.
   ============================================================ */
window.TeachLessons = [
  { n: 1,  id: "what-an-object-is",        file: "lessons/0001-what-an-object-is.html",        title: "What an object is",        topic: "Foundations", anim: "OopClassVsObject" },
  { n: 2,  id: "self-and-attributes",      file: "lessons/0002-self-and-attributes.html",      title: "self and attributes",      topic: "Foundations", anim: "OopSelfAttributes" },
  { n: 3,  id: "the-initializer",          file: "lessons/0003-the-initializer.html",          title: "The initializer",          topic: "Foundations", anim: "OopInitMethod" },
  { n: 4,  id: "methods-that-do-things",   file: "lessons/0004-methods-that-do-things.html",   title: "Methods that do things",   topic: "Foundations", anim: "OopMethods" },
  { n: 5,  id: "keeping-rules-inside",     file: "lessons/0005-keeping-rules-inside.html",     title: "Keeping rules inside",     topic: "Protecting state", anim: "OopEncapsulation" },
  { n: 6,  id: "properties",               file: "lessons/0006-properties.html",               title: "Properties",               topic: "Protecting state", anim: "OopProperties" },
  { n: 7,  id: "inheritance",              file: "lessons/0007-inheritance.html",              title: "Inheritance (is-a)",       topic: "Relationships", anim: "OopInheritance" },
  { n: 8,  id: "polymorphism",             file: "lessons/0008-polymorphism.html",             title: "Polymorphism",             topic: "Relationships", anim: "OopPolymorphism" },
  { n: 9,  id: "abstraction",              file: "lessons/0009-abstraction.html",              title: "Abstraction",              topic: "Relationships", anim: "OopAbstraction" },
  { n: 10, id: "composition",              file: "lessons/0010-composition.html",              title: "Composition (has-a)",      topic: "Relationships", anim: "OopComposition" },
  { n: 11, id: "dunder-methods",           file: "lessons/0011-dunder-methods.html",           title: "Dunder methods",           topic: "Python power tools", anim: "OopDunderMethods" },
  { n: 12, id: "method-kinds",             file: "lessons/0012-method-kinds.html",             title: "Instance, class, static",  topic: "Python power tools", anim: "OopMethodKinds" },
  { n: 13, id: "dataclasses",              file: "lessons/0013-dataclasses.html",              title: "Dataclasses",              topic: "Python power tools", anim: "OopDataclasses" },
  { n: 14, id: "designing-a-system",       file: "lessons/0014-designing-a-system.html",       title: "Designing a system",       topic: "Putting it together", anim: "OopDesignSystem" }
];

/* ============================================================
   OOP course — glossary
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
    id: "core", title: "Core concepts",
    terms: [
      { term: "Object", def: "A bundle of <b>state</b> (data it remembers) and <b>behaviour</b> (operations it can perform). The fundamental unit of OOP.", lesson: 1, tags: ["oop", "python"] },
      { term: "Class", def: "The blueprint that describes what every object of a kind will have. Written with <code>class Name:</code>. One class can build many objects.", lesson: 1, tags: ["oop", "python"] },
      { term: "Instance", def: "Another word for an object built from a class. \"Instance of <code>Book</code>\" means \"an object created by <code>Book(...)</code>\".", lesson: 1, tags: ["oop", "python"] },
      { term: "State", def: "The data an object remembers — its attributes. A book's <code>title</code>, <code>author</code>, <code>copies</code>.", lesson: 2, tags: ["oop", "fundamentals"] },
      { term: "Behaviour", def: "The operations an object can perform — its methods. A book's <code>borrow()</code>, <code>restock()</code>.", lesson: 4, tags: ["oop", "fundamentals"] },
      { term: "Attribute", def: "A piece of data stored on an object, reached with dot syntax: <code>book.title</code>. Set inside methods as <code>self.title = …</code>.", lesson: 2, tags: ["oop", "python"] },
      { term: "<code>self</code>", def: "The particular object a method was called on. Always the first parameter of an instance method. It is how a method reaches its own data.", lesson: 2, tags: ["oop", "python"] },
      { term: "Constructor / initializer", def: "<code>__init__</code> — runs automatically when an object is created, and fills in its starting state. It initializes an already-created object; it is not the creation mechanism itself.", lesson: 3, tags: ["oop", "python"] }
    ]
  },
  {
    id: "methods", title: "Kinds of method",
    terms: [
      { term: "Instance method", def: "Receives <code>self</code> first. Works with one particular object's state. <code>def borrow(self):</code>", lesson: 4, tags: ["oop", "python"] },
      { term: "Class method", def: "Decorated <code>@classmethod</code>, receives the class as <code>cls</code>. Used for alternate constructors, e.g. <code>Book.from_json(data)</code>.", lesson: 12, tags: ["oop", "python"] },
      { term: "Static method", def: "Decorated <code>@staticmethod</code>. Needs neither the object nor the class — a utility logically grouped with the class.", lesson: 12, tags: ["oop", "python"] },
      { term: "Property", def: "Decorated <code>@property</code>. Exposes method-backed logic as if it were a plain attribute, so you get clean syntax with validation underneath.", lesson: 6, tags: ["oop", "python"] },
      { term: "Dunder method", def: "A method with double underscores on both sides (<code>__str__</code>, <code>__len__</code>, <code>__eq__</code>). Lets your objects plug into Python's built-in syntax.", lesson: 11, tags: ["oop", "python"] }
    ]
  },
  {
    id: "relationships", title: "Relationships between classes",
    terms: [
      { term: "Inheritance", def: "A child class gets everything the parent has, then adds or overrides its own parts. Models an <b>is-a</b> relationship: <code>class BusinessCustomer(Customer):</code>", lesson: 7, tags: ["oop", "design"] },
      { term: "Composition", def: "An object contains another object. Models a <b>has-a</b> relationship: a <code>Customer</code> has an <code>Address</code>. Often more flexible than inheritance.", lesson: 10, tags: ["oop", "design"] },
      { term: "Polymorphism", def: "One call, many behaviours — each object decides how it responds to the same message. <code>for c in customers: c.risk_type()</code>", lesson: 8, tags: ["oop", "design"] },
      { term: "Encapsulation", def: "Keeping state and the rules that change it together, so callers cannot bypass the rules. In Python this is a convention, not enforcement.", lesson: 5, tags: ["oop", "design"] },
      { term: "Abstraction", def: "Exposing a simple interface while hiding the messy details behind it. Callers depend on <em>what</em> it does, not <em>how</em>.", lesson: 9, tags: ["oop", "design"] },
      { term: "Duck typing", def: "Python often cares less about an object's class and more about whether it supports the operation you need. \"If it walks like a duck…\"", lesson: 8, tags: ["oop", "python"] }
    ]
  },
  {
    id: "tools", title: "Tools &amp; conventions",
    terms: [
      { term: "<code>super()</code>", def: "Calls behaviour from the parent class — most often <code>super().__init__(…)</code> inside a child's initializer.", lesson: 7, tags: ["oop", "python"] },
      { term: "<code>@dataclass</code>", def: "Writes the boring <code>__init__</code>, <code>__repr__</code> and equality methods for a data-focused class, so you only declare the fields.", lesson: 13, tags: ["oop", "python"] },
      { term: "<code>ABC</code> / <code>@abstractmethod</code>", def: "Defines an interface that cannot be instantiated directly and forces subclasses to implement the marked methods.", lesson: 9, tags: ["oop", "python"] },
      { term: "<code>_name</code> (single underscore)", def: "A convention meaning \"internal — do not touch from outside\". Python does not enforce it.", lesson: 5, tags: ["oop", "convention"] },
      { term: "<code>__name</code> (double underscore)", def: "Triggers <b>name mangling</b>: <code>__balance</code> becomes <code>_ClassName__balance</code>. Used to avoid accidental clashes in subclasses.", lesson: 5, tags: ["oop", "convention"] }
    ]
  }
];

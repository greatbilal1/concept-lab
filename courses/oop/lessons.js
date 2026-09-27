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

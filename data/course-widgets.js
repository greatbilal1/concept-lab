/* ============================================================
   Concept Lab — course widget data
   ------------------------------------------------------------
   Interactive widget content for each course page, keyed by
   course id. The generic runtime (assets/js/course-runtime.js)
   reads this global and renders the widgets; it contains no
   course content of its own.

   Shape:
     window.COURSE_WIDGETS = {
       <courseId>: {
         quiz: [ { q: "question", a: ["opt", ...], c: <correctIndex> }, ... ],
         risk: { highRiskCountries: ["XX","YY"], bump: 20 },
         lab:  { starter: "..." }   // optional
       }
     };

   Only courses that are LIVE (status: "live" in data/courses.js)
   need an entry here. Planned courses have no page yet.
   ============================================================ */
window.COURSE_WIDGETS = {
  oop: {
    quiz: [
      { q: "What is a class?", a: ["A running program", "A blueprint for creating objects", "A variable", "A function"], c: 1 },
      { q: "What does self refer to?", a: ["The class itself", "The current object instance", "A global variable", "The parent class"], c: 1 },
      { q: "Which method initializes a new object?", a: ["__new__", "__init__", "__start__", "__create__"], c: 1 },
      { q: "Inheritance models which relationship?", a: ["has-a", "is-a", "uses-a", "makes-a"], c: 1 },
      { q: "Composition models which relationship?", a: ["is-a", "has-a", "equals", "inherits"], c: 1 },
      { q: "What does @property do?", a: ["Makes a method private", "Exposes a method as an attribute", "Creates a class", "Deletes an attribute"], c: 1 },
      { q: "Which decorator creates an alternate constructor?", a: ["@staticmethod", "@classmethod", "@property", "@abstractmethod"], c: 1 },
      { q: "What does @dataclass generate?", a: ["Only a docstring", "Boilerplate like __init__ and __repr__", "A database table", "A test suite"], c: 1 }
    ],
    risk: { highRiskCountries: ["XX", "YY"], bump: 20 }
  }
};

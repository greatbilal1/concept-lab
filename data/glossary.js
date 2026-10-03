/* ============================================================
   Concept Lab — glossary
   ------------------------------------------------------------
   One entry per term. `course` + `section` point back at the
   place the term is taught, so every definition links to its
   source.
   ============================================================ */

window.GLOSSARY = [
  {
    "term": "Class",
    "def": "A blueprint or type that describes the data and behaviour its objects will have.",
    "course": "oop",
    "section": "class",
    "tags": [
      "oop",
      "python"
    ]
  },
  {
    "term": "Object",
    "def": "A concrete instance built from a class, holding its own copy of the state.",
    "course": "oop",
    "section": "class",
    "tags": [
      "oop",
      "python"
    ]
  },
  {
    "term": "Attribute",
    "def": "Data stored on an object, usually set in the initializer and read through self.",
    "course": "oop",
    "section": "self",
    "tags": [
      "oop",
      "python"
    ]
  },
  {
    "term": "Method",
    "def": "A function that belongs to a class and operates on an instance.",
    "course": "oop",
    "section": "methods",
    "tags": [
      "oop",
      "python"
    ]
  },
  {
    "term": "self",
    "def": "The reference an instance method uses to reach the object it was called on.",
    "course": "oop",
    "section": "self",
    "tags": [
      "oop",
      "python"
    ]
  },
  {
    "term": "Constructor / initializer",
    "def": "The __init__ method that sets up an object's state when it is created.",
    "course": "oop",
    "section": "init",
    "tags": [
      "oop",
      "python"
    ]
  },
  {
    "term": "Encapsulation",
    "def": "Keeping state and the behaviour that guards it together, and controlling outside access.",
    "course": "oop",
    "section": "encap",
    "tags": [
      "oop",
      "design"
    ]
  },
  {
    "term": "Inheritance",
    "def": "Deriving one class from another so it reuses and extends the parent's behaviour.",
    "course": "oop",
    "section": "inherit",
    "tags": [
      "oop",
      "design"
    ]
  },
  {
    "term": "Polymorphism",
    "def": "The same call working on different types, each responding in its own way.",
    "course": "oop",
    "section": "poly",
    "tags": [
      "oop",
      "design"
    ]
  },
  {
    "term": "Abstraction",
    "def": "Exposing a simple interface while hiding the messy details behind it.",
    "course": "oop",
    "section": "abstract",
    "tags": [
      "oop",
      "design"
    ],
    "concept": "abstraction"
  },
  {
    "term": "Composition",
    "def": "Building a larger object by containing smaller, focused objects.",
    "course": "oop",
    "section": "composition",
    "tags": [
      "oop",
      "design"
    ],
    "concept": "composition"
  },
  {
    "term": "Dunder method",
    "def": "A special method with double underscores that hooks into Python syntax, such as __str__ or __len__.",
    "course": "oop",
    "section": "special",
    "tags": [
      "oop",
      "python"
    ]
  },
  {
    "term": "__init__",
    "def": "The initializer dunder that runs when an object is constructed.",
    "course": "oop",
    "section": "special",
    "tags": [
      "oop",
      "python"
    ]
  },
  {
    "term": "__str__",
    "def": "The dunder that returns the human-friendly string used by print().",
    "course": "oop",
    "section": "special",
    "tags": [
      "oop",
      "python"
    ]
  },
  {
    "term": "__repr__",
    "def": "The dunder that returns the developer-oriented representation of an object.",
    "course": "oop",
    "section": "special",
    "tags": [
      "oop",
      "python"
    ]
  },
  {
    "term": "__len__",
    "def": "The dunder that lets len(obj) work on your object.",
    "course": "oop",
    "section": "special",
    "tags": [
      "oop",
      "python"
    ]
  },
  {
    "term": "__eq__",
    "def": "The dunder that customises what == means for your objects.",
    "course": "oop",
    "section": "special",
    "tags": [
      "oop",
      "python"
    ]
  },
  {
    "term": "Property",
    "def": "A method exposed as an attribute, so reads and writes can run validation logic.",
    "course": "oop",
    "section": "property",
    "tags": [
      "oop",
      "python"
    ]
  },
  {
    "term": "Instance method",
    "def": "A method that receives self and works with one particular object.",
    "course": "oop",
    "section": "classmethods",
    "tags": [
      "oop",
      "python"
    ]
  },
  {
    "term": "Class method",
    "def": "A method that receives the class as cls — often used as an alternate constructor.",
    "course": "oop",
    "section": "classmethods",
    "tags": [
      "oop",
      "python"
    ]
  },
  {
    "term": "Static method",
    "def": "A method grouped with a class that needs neither the instance nor the class.",
    "course": "oop",
    "section": "classmethods",
    "tags": [
      "oop",
      "python"
    ]
  },
  {
    "term": "Dataclass",
    "def": "A decorator that generates boilerplate like __init__ and __repr__ for data-focused classes.",
    "course": "oop",
    "section": "dataclass",
    "tags": [
      "oop",
      "python"
    ]
  },
  {
    "term": "Over-engineering",
    "def": "Adding classes and abstraction the problem does not need — a common OOP failure mode.",
    "course": "oop",
    "section": "design",
    "tags": [
      "oop",
      "design"
    ]
  },
  {
    "term": "Single responsibility",
    "def": "Giving each class one clear job, so state and behaviour stay together and change stays local.",
    "course": "oop",
    "section": "kyc",
    "tags": [
      "oop",
      "design"
    ]
  },
  {
    "term": "State",
    "def": "The data an object or program holds at a given moment — what it currently is.",
    "course": "oop",
    "section": "mental",
    "tags": [
      "design",
      "fundamentals"
    ],
    "concept": "state-behavior"
  },
  {
    "term": "Behaviour",
    "def": "The operations an object exposes — what it can do with its state.",
    "course": "oop",
    "section": "mental",
    "tags": [
      "design",
      "fundamentals"
    ],
    "concept": "state-behavior"
  },
  {
    "term": "Interface",
    "def": "The set of operations a caller may use, separated from how they are implemented.",
    "course": "oop",
    "section": "abstract",
    "tags": [
      "design",
      "fundamentals"
    ],
    "concept": "abstraction"
  },
  {
    "term": "Coupling",
    "def": "How much one part of a system depends on another; lower coupling makes change cheaper.",
    "course": "oop",
    "section": "design",
    "tags": [
      "design",
      "architecture"
    ]
  },
  {
    "term": "Cohesion",
    "def": "How focused a single unit is on one job; higher cohesion makes code easier to reason about.",
    "course": "oop",
    "section": "design",
    "tags": [
      "design",
      "architecture"
    ]
  },
  {
    "term": "Refactoring",
    "def": "Improving the structure of code without changing what it does.",
    "course": "oop",
    "section": "design",
    "tags": [
      "craft",
      "quality"
    ]
  },
  {
    "term": "Trade-off",
    "def": "A choice that buys one quality at the cost of another — the core of design decisions.",
    "course": "oop",
    "section": "design",
    "tags": [
      "design",
      "architecture"
    ],
    "concept": "design-tradeoffs"
  },
  {
    "term": "Variable",
    "def": "A name bound to a value, so the value can be referred to later.",
    "course": "variables-types-memory",
    "section": "names",
    "tags": [
      "fundamentals",
      "python"
    ]
  },
  {
    "term": "Value",
    "def": "The actual data a name refers to — a number, a string, a list, and so on.",
    "course": "variables-types-memory",
    "section": "names",
    "tags": [
      "fundamentals",
      "python"
    ]
  },
  {
    "term": "Binding",
    "def": "The association between a name and the value it currently refers to.",
    "course": "variables-types-memory",
    "section": "names",
    "tags": [
      "fundamentals",
      "python"
    ]
  },
  {
    "term": "Assignment",
    "def": "The statement that binds a name to a value, written with a single equals sign.",
    "course": "variables-types-memory",
    "section": "names",
    "tags": [
      "fundamentals",
      "python"
    ]
  },
  {
    "term": "Rebinding",
    "def": "Pointing an existing name at a different value, leaving the old value unchanged.",
    "course": "variables-types-memory",
    "section": "names",
    "tags": [
      "fundamentals",
      "python"
    ]
  },
  {
    "term": "Expression",
    "def": "A piece of code that produces a value, such as 2 + 3 or a function call.",
    "course": "variables-types-memory",
    "section": "names",
    "tags": [
      "fundamentals",
      "python"
    ]
  },
  {
    "term": "Type",
    "def": "A set of rules describing which operations are valid for a value.",
    "course": "variables-types-memory",
    "section": "types",
    "tags": [
      "types",
      "python"
    ]
  },
  {
    "term": "Type error",
    "def": "An error raised when an operation is not valid for a value's type.",
    "course": "variables-types-memory",
    "section": "types",
    "tags": [
      "types",
      "python"
    ]
  },
  {
    "term": "Integer",
    "def": "A whole number with no fractional part, stored exactly.",
    "course": "variables-types-memory",
    "section": "types",
    "tags": [
      "types",
      "python"
    ]
  },
  {
    "term": "Float",
    "def": "A number with a fractional part, stored in binary and therefore approximate.",
    "course": "variables-types-memory",
    "section": "types",
    "tags": [
      "types",
      "python"
    ]
  },
  {
    "term": "String",
    "def": "A sequence of characters — text — that can never be changed after creation.",
    "course": "variables-types-memory",
    "section": "types",
    "tags": [
      "types",
      "python"
    ]
  },
  {
    "term": "Boolean",
    "def": "A value that is either True or False, usually produced by a comparison.",
    "course": "variables-types-memory",
    "section": "types",
    "tags": [
      "types",
      "python"
    ]
  },
  {
    "term": "Mutable",
    "def": "Able to be changed in place, so changes are visible through every name that refers to it.",
    "course": "variables-types-memory",
    "section": "types",
    "tags": [
      "types",
      "memory"
    ]
  },
  {
    "term": "Immutable",
    "def": "Unable to be changed after creation, which makes the value safe to share.",
    "course": "variables-types-memory",
    "section": "types",
    "tags": [
      "types",
      "memory"
    ]
  },
  {
    "term": "Identity",
    "def": "Which particular value a name refers to, as opposed to what its contents are.",
    "course": "variables-types-memory",
    "section": "types",
    "tags": [
      "types",
      "memory"
    ]
  },
  {
    "term": "Reference",
    "def": "A pointer from a name to the value it refers to; assignment copies the reference, not the value.",
    "course": "variables-types-memory",
    "section": "memory",
    "tags": [
      "memory",
      "python"
    ]
  },
  {
    "term": "Aliasing",
    "def": "Two or more names referring to the very same value, so changes are shared.",
    "course": "variables-types-memory",
    "section": "memory",
    "tags": [
      "memory",
      "python"
    ]
  },
  {
    "term": "Object",
    "def": "A value that lives on the heap and is referred to by one or more names.",
    "course": "variables-types-memory",
    "section": "memory",
    "tags": [
      "memory",
      "python"
    ]
  },
  {
    "term": "Stack",
    "def": "The fast, ordered region of memory that holds call frames and the names inside them.",
    "course": "variables-types-memory",
    "section": "memory",
    "tags": [
      "memory",
      "python"
    ]
  },
  {
    "term": "Heap",
    "def": "The large, flexible region of memory where objects themselves live.",
    "course": "variables-types-memory",
    "section": "memory",
    "tags": [
      "memory",
      "python"
    ]
  },
  {
    "term": "Frame",
    "def": "One function call's workspace, pushed onto the stack on entry and popped on return.",
    "course": "variables-types-memory",
    "section": "memory",
    "tags": [
      "memory",
      "python"
    ]
  },
  {
    "term": "Garbage collection",
    "def": "Reclaiming the memory of objects that can no longer be reached by any reference.",
    "course": "variables-types-memory",
    "section": "memory",
    "tags": [
      "memory",
      "python"
    ]
  },
  {
    "term": "Reference count",
    "def": "The number of references pointing at an object; when it reaches zero the object is freed.",
    "course": "variables-types-memory",
    "section": "memory",
    "tags": [
      "memory",
      "python"
    ]
  },
  {
    "term": "Memory leak",
    "def": "Memory that stays reachable but is no longer useful, so it can never be reclaimed.",
    "course": "variables-types-memory",
    "section": "memory",
    "tags": [
      "memory",
      "python"
    ]
  },
  {
    "term": "Shallow copy",
    "def": "A copy that duplicates the outer container but shares the items inside it.",
    "course": "variables-types-memory",
    "section": "together",
    "tags": [
      "memory",
      "python"
    ]
  },
  {
    "term": "Deep copy",
    "def": "A copy that duplicates the container and everything inside it, recursively.",
    "course": "variables-types-memory",
    "section": "together",
    "tags": [
      "memory",
      "python"
    ]
  },
  {
    "term": "Pass by reference",
    "def": "Passing a value to a function by sharing its reference, so mutations are visible to the caller.",
    "course": "variables-types-memory",
    "section": "together",
    "tags": [
      "memory",
      "python"
    ]
  },
  {
    "term": "Naming convention",
    "def": "An agreed style for names, such as lowercase_with_underscores for variables.",
    "course": "variables-types-memory",
    "section": "together",
    "tags": [
      "craft",
      "python"
    ]
  },
  {
    "term": "Constant",
    "def": "A name written in capitals that signals a promise not to rebind it.",
    "course": "variables-types-memory",
    "section": "together",
    "tags": [
      "craft",
      "python"
    ]
  },
  {
    "term": "Shadowing",
    "def": "When a name in an inner scope hides a name with the same spelling in an outer scope.",
    "course": "variables-types-memory",
    "section": "together",
    "tags": [
      "craft",
      "python"
    ]
  },
  {
    "term": "Boolean",
    "def": "A value that is either True or False, usually produced by a comparison.",
    "course": "control-flow-logic",
    "section": "booleans",
    "tags": [
      "logic",
      "python"
    ]
  },
  {
    "term": "Truthiness",
    "def": "Whether a value counts as true when used where a boolean is expected.",
    "course": "control-flow-logic",
    "section": "booleans",
    "tags": [
      "logic",
      "python"
    ]
  },
  {
    "term": "Falsy",
    "def": "A value that counts as false — zero, empty text, empty containers, and None.",
    "course": "control-flow-logic",
    "section": "booleans",
    "tags": [
      "logic",
      "python"
    ]
  },
  {
    "term": "Comparison operator",
    "def": "An operator such as < or == that compares two values and produces a boolean.",
    "course": "control-flow-logic",
    "section": "booleans",
    "tags": [
      "logic",
      "python"
    ]
  },
  {
    "term": "Equality",
    "def": "Whether two values have the same contents, tested with the == operator.",
    "course": "control-flow-logic",
    "section": "booleans",
    "tags": [
      "logic",
      "python"
    ]
  },
  {
    "term": "Chained comparison",
    "def": "Writing 0 <= x < 10 to test a value against two bounds at once.",
    "course": "control-flow-logic",
    "section": "booleans",
    "tags": [
      "logic",
      "python"
    ]
  },
  {
    "term": "Logical operator",
    "def": "An operator that combines boolean values: and, or and not.",
    "course": "control-flow-logic",
    "section": "logic",
    "tags": [
      "logic",
      "python"
    ]
  },
  {
    "term": "and",
    "def": "A logical operator that is true only when both of its operands are true.",
    "course": "control-flow-logic",
    "section": "logic",
    "tags": [
      "logic",
      "python"
    ]
  },
  {
    "term": "or",
    "def": "A logical operator that is true when at least one of its operands is true.",
    "course": "control-flow-logic",
    "section": "logic",
    "tags": [
      "logic",
      "python"
    ]
  },
  {
    "term": "not",
    "def": "A logical operator that flips a boolean, turning true into false and back.",
    "course": "control-flow-logic",
    "section": "logic",
    "tags": [
      "logic",
      "python"
    ]
  },
  {
    "term": "Truth table",
    "def": "A table listing every combination of inputs and the result for each.",
    "course": "control-flow-logic",
    "section": "logic",
    "tags": [
      "logic",
      "python"
    ]
  },
  {
    "term": "De Morgan's laws",
    "def": "Rules for pushing not inside brackets by swapping and with or.",
    "course": "control-flow-logic",
    "section": "logic",
    "tags": [
      "logic",
      "python"
    ]
  },
  {
    "term": "Short-circuit evaluation",
    "def": "Stopping a boolean expression as soon as the answer is already known.",
    "course": "control-flow-logic",
    "section": "logic",
    "tags": [
      "logic",
      "python"
    ]
  },
  {
    "term": "Guard clause",
    "def": "A condition placed first so later checks are only reached when it is safe.",
    "course": "control-flow-logic",
    "section": "logic",
    "tags": [
      "logic",
      "python"
    ]
  },
  {
    "term": "Operator precedence",
    "def": "The order in which operators are applied when an expression has no brackets.",
    "course": "control-flow-logic",
    "section": "logic",
    "tags": [
      "logic",
      "python"
    ]
  },
  {
    "term": "Condition",
    "def": "An expression a branch tests to decide whether its block should run.",
    "course": "control-flow-logic",
    "section": "branching",
    "tags": [
      "control-flow",
      "python"
    ]
  },
  {
    "term": "if statement",
    "def": "A statement that runs its block only when its condition is true.",
    "course": "control-flow-logic",
    "section": "branching",
    "tags": [
      "control-flow",
      "python"
    ]
  },
  {
    "term": "Block",
    "def": "A group of statements that run together, marked by indentation in Python.",
    "course": "control-flow-logic",
    "section": "branching",
    "tags": [
      "control-flow",
      "python"
    ]
  },
  {
    "term": "Indentation",
    "def": "The leading whitespace that defines which statements belong to a block.",
    "course": "control-flow-logic",
    "section": "branching",
    "tags": [
      "control-flow",
      "python"
    ]
  },
  {
    "term": "else clause",
    "def": "The block that runs when the matching if condition was false.",
    "course": "control-flow-logic",
    "section": "branching",
    "tags": [
      "control-flow",
      "python"
    ]
  },
  {
    "term": "elif clause",
    "def": "An extra condition tested only when every earlier condition was false.",
    "course": "control-flow-logic",
    "section": "branching",
    "tags": [
      "control-flow",
      "python"
    ]
  },
  {
    "term": "Branch",
    "def": "One possible path through a decision, taken when its condition matches.",
    "course": "control-flow-logic",
    "section": "branching",
    "tags": [
      "control-flow",
      "python"
    ]
  },
  {
    "term": "Nested condition",
    "def": "A condition written inside the block of another condition.",
    "course": "control-flow-logic",
    "section": "branching",
    "tags": [
      "control-flow",
      "python"
    ]
  },
  {
    "term": "Loop",
    "def": "A statement that repeats a block of code more than once.",
    "course": "control-flow-logic",
    "section": "loops",
    "tags": [
      "control-flow",
      "python"
    ]
  },
  {
    "term": "while loop",
    "def": "A loop that repeats while its condition stays true, re-checking before each pass.",
    "course": "control-flow-logic",
    "section": "loops",
    "tags": [
      "control-flow",
      "python"
    ]
  },
  {
    "term": "Infinite loop",
    "def": "A loop whose condition never becomes false, so it never finishes.",
    "course": "control-flow-logic",
    "section": "loops",
    "tags": [
      "control-flow",
      "python"
    ]
  },
  {
    "term": "Loop variable",
    "def": "The name rebound to each item in turn as a for loop walks a collection.",
    "course": "control-flow-logic",
    "section": "loops",
    "tags": [
      "control-flow",
      "python"
    ]
  },
  {
    "term": "Iterable",
    "def": "Any value that can hand out its items one at a time, such as a list or string.",
    "course": "control-flow-logic",
    "section": "loops",
    "tags": [
      "control-flow",
      "python"
    ]
  },
  {
    "term": "range",
    "def": "A built-in that produces a sequence of numbers, excluding its stop value.",
    "course": "control-flow-logic",
    "section": "loops",
    "tags": [
      "control-flow",
      "python"
    ]
  },
  {
    "term": "Accumulator",
    "def": "A variable updated inside a loop to build up a result across passes.",
    "course": "control-flow-logic",
    "section": "loops",
    "tags": [
      "control-flow",
      "python"
    ]
  },
  {
    "term": "break",
    "def": "A statement that ends the nearest enclosing loop immediately.",
    "course": "control-flow-logic",
    "section": "loops",
    "tags": [
      "control-flow",
      "python"
    ]
  },
  {
    "term": "continue",
    "def": "A statement that abandons the current pass and moves to the next item.",
    "course": "control-flow-logic",
    "section": "loops",
    "tags": [
      "control-flow",
      "python"
    ]
  },
  {
    "term": "Loop else",
    "def": "A block after a loop that runs only if the loop finished without a break.",
    "course": "control-flow-logic",
    "section": "loops",
    "tags": [
      "control-flow",
      "python"
    ]
  },
  {
    "term": "Control flow",
    "def": "The order in which a program's statements actually run, including branches and loops.",
    "course": "control-flow-logic",
    "section": "together",
    "tags": [
      "control-flow",
      "design"
    ]
  },
  {
    "term": "Nesting depth",
    "def": "How many levels of branches and loops you are currently inside.",
    "course": "control-flow-logic",
    "section": "together",
    "tags": [
      "control-flow",
      "design"
    ]
  },
  {
    "term": "Early exit",
    "def": "Handling failure cases first and returning, so the main path stays flat.",
    "course": "control-flow-logic",
    "section": "together",
    "tags": [
      "control-flow",
      "design"
    ]
  },
  {
    "term": "Sentinel value",
    "def": "A special value that signals a loop to stop, such as -1 for end of input.",
    "course": "control-flow-logic",
    "section": "together",
    "tags": [
      "control-flow",
      "design"
    ]
  },
  {
    "term": "State machine",
    "def": "A program whose behaviour depends on its current state and the events it receives.",
    "course": "control-flow-logic",
    "section": "together",
    "tags": [
      "control-flow",
      "design"
    ]
  },
  {
    "term": "Function",
    "def": "A named block of work that runs only when it is called.",
    "course": "functions-modular-thinking",
    "section": "defining",
    "tags": [
      "functions",
      "python"
    ]
  },
  {
    "term": "def",
    "def": "The keyword that creates a function and binds it to a name.",
    "course": "functions-modular-thinking",
    "section": "defining",
    "tags": [
      "functions",
      "python"
    ]
  },
  {
    "term": "Function body",
    "def": "The indented block of statements that runs when the function is called.",
    "course": "functions-modular-thinking",
    "section": "defining",
    "tags": [
      "functions",
      "python"
    ]
  },
  {
    "term": "Function name",
    "def": "The identifier a definition binds, used later to call the function.",
    "course": "functions-modular-thinking",
    "section": "defining",
    "tags": [
      "functions",
      "python"
    ]
  },
  {
    "term": "Call",
    "def": "Writing a function's name with parentheses to run its body.",
    "course": "functions-modular-thinking",
    "section": "defining",
    "tags": [
      "functions",
      "python"
    ]
  },
  {
    "term": "Call site",
    "def": "The place in the code where a function is actually called.",
    "course": "functions-modular-thinking",
    "section": "defining",
    "tags": [
      "functions",
      "python"
    ]
  },
  {
    "term": "Definition vs call",
    "def": "A definition creates the function; a call runs it — they are different acts.",
    "course": "functions-modular-thinking",
    "section": "defining",
    "tags": [
      "functions",
      "python"
    ]
  },
  {
    "term": "Parameter",
    "def": "A name in the definition that receives a value when the function is called.",
    "course": "functions-modular-thinking",
    "section": "passing",
    "tags": [
      "functions",
      "python"
    ]
  },
  {
    "term": "Argument",
    "def": "The actual value supplied at the call site for a parameter.",
    "course": "functions-modular-thinking",
    "section": "passing",
    "tags": [
      "functions",
      "python"
    ]
  },
  {
    "term": "Positional argument",
    "def": "An argument matched to a parameter by its position in the call.",
    "course": "functions-modular-thinking",
    "section": "passing",
    "tags": [
      "functions",
      "python"
    ]
  },
  {
    "term": "Keyword argument",
    "def": "An argument matched to a parameter by writing its name in the call.",
    "course": "functions-modular-thinking",
    "section": "passing",
    "tags": [
      "functions",
      "python"
    ]
  },
  {
    "term": "Default value",
    "def": "A value used for a parameter when the caller leaves that argument out.",
    "course": "functions-modular-thinking",
    "section": "passing",
    "tags": [
      "functions",
      "python"
    ]
  },
  {
    "term": "Optional parameter",
    "def": "A parameter with a default, which the caller may omit entirely.",
    "course": "functions-modular-thinking",
    "section": "passing",
    "tags": [
      "functions",
      "python"
    ]
  },
  {
    "term": "Mutable default trap",
    "def": "A list or dict default is created once, so every call shares the same object.",
    "course": "functions-modular-thinking",
    "section": "passing",
    "tags": [
      "functions",
      "python"
    ]
  },
  {
    "term": "return",
    "def": "The statement that ends a function and hands a value back to the call.",
    "course": "functions-modular-thinking",
    "section": "returning",
    "tags": [
      "functions",
      "python"
    ]
  },
  {
    "term": "Return value",
    "def": "The value a call evaluates to, handed back by the return statement.",
    "course": "functions-modular-thinking",
    "section": "returning",
    "tags": [
      "functions",
      "python"
    ]
  },
  {
    "term": "print vs return",
    "def": "print shows a value to a human; return hands it to the program.",
    "course": "functions-modular-thinking",
    "section": "returning",
    "tags": [
      "functions",
      "python"
    ]
  },
  {
    "term": "Early return",
    "def": "Returning as soon as the answer is known, leaving the rest of the body unrun.",
    "course": "functions-modular-thinking",
    "section": "returning",
    "tags": [
      "functions",
      "python"
    ]
  },
  {
    "term": "None",
    "def": "Python's value for no value, handed back when a function returns nothing.",
    "course": "functions-modular-thinking",
    "section": "returning",
    "tags": [
      "functions",
      "python"
    ]
  },
  {
    "term": "Implicit None",
    "def": "The None a function returns when its body finishes without any return.",
    "course": "functions-modular-thinking",
    "section": "returning",
    "tags": [
      "functions",
      "python"
    ]
  },
  {
    "term": "Call stack",
    "def": "The list of calls that are still running, newest call on top.",
    "course": "functions-modular-thinking",
    "section": "scope",
    "tags": [
      "functions",
      "debugging"
    ]
  },
  {
    "term": "Frame",
    "def": "The record of one active call: its parameters, locals and current line.",
    "course": "functions-modular-thinking",
    "section": "scope",
    "tags": [
      "functions",
      "debugging"
    ]
  },
  {
    "term": "Traceback",
    "def": "The stack of frames printed when an error escapes, read from the bottom up.",
    "course": "functions-modular-thinking",
    "section": "scope",
    "tags": [
      "functions",
      "debugging"
    ]
  },
  {
    "term": "Scope",
    "def": "The region of a program where a particular name can be seen and used.",
    "course": "functions-modular-thinking",
    "section": "scope",
    "tags": [
      "functions",
      "python"
    ]
  },
  {
    "term": "Local variable",
    "def": "A name assigned inside a function, visible only during that call.",
    "course": "functions-modular-thinking",
    "section": "scope",
    "tags": [
      "functions",
      "python"
    ]
  },
  {
    "term": "Global variable",
    "def": "A name assigned at the top level of a file, visible throughout the module.",
    "course": "functions-modular-thinking",
    "section": "scope",
    "tags": [
      "functions",
      "python"
    ]
  },
  {
    "term": "Shadowing",
    "def": "A local name hiding a global name that has the same spelling.",
    "course": "functions-modular-thinking",
    "section": "scope",
    "tags": [
      "functions",
      "python"
    ]
  },
  {
    "term": "Contract",
    "def": "What a function needs as input and what it gives back as output.",
    "course": "functions-modular-thinking",
    "section": "modular",
    "tags": [
      "functions",
      "design"
    ]
  },
  {
    "term": "Docstring",
    "def": "A string on the first line of a body that says what the function does.",
    "course": "functions-modular-thinking",
    "section": "modular",
    "tags": [
      "functions",
      "python"
    ]
  },
  {
    "term": "Type hint",
    "def": "A note in the signature giving the expected types in and out.",
    "course": "functions-modular-thinking",
    "section": "modular",
    "tags": [
      "functions",
      "python"
    ]
  },
  {
    "term": "Pure function",
    "def": "A function whose result depends only on its arguments, with no side effects.",
    "course": "functions-modular-thinking",
    "section": "modular",
    "tags": [
      "functions",
      "design"
    ]
  },
  {
    "term": "Side effect",
    "def": "A change a function makes outside itself, such as printing or mutating state.",
    "course": "functions-modular-thinking",
    "section": "modular",
    "tags": [
      "functions",
      "design"
    ]
  },
  {
    "term": "Single responsibility",
    "def": "The rule that each function should do exactly one job.",
    "course": "functions-modular-thinking",
    "section": "modular",
    "tags": [
      "functions",
      "design"
    ]
  },
  {
    "term": "Decomposition",
    "def": "Breaking a problem into smaller pieces that can each be named and solved.",
    "course": "functions-modular-thinking",
    "section": "modular",
    "tags": [
      "functions",
      "design"
    ]
  },
  {
    "term": "Refactoring",
    "def": "Changing the structure of code without changing what it does.",
    "course": "functions-modular-thinking",
    "section": "modular",
    "tags": [
      "functions",
      "design"
    ]
  },
  {
    "term": "Procedural programming",
    "def": "Organising a program as a sequence of named steps that run in order.",
    "course": "procedural-programming",
    "section": "steps",
    "tags": [
      "procedural",
      "design"
    ]
  },
  {
    "term": "Procedure",
    "def": "A named block of steps that can be called by name from elsewhere.",
    "course": "procedural-programming",
    "section": "steps",
    "tags": [
      "procedural",
      "python"
    ]
  },
  {
    "term": "Sequence",
    "def": "Statements that run one after another, top to bottom, in the order written.",
    "course": "procedural-programming",
    "section": "steps",
    "tags": [
      "procedural",
      "python"
    ]
  },
  {
    "term": "Top-level code",
    "def": "Statements written outside any procedure, which run when the file runs.",
    "course": "procedural-programming",
    "section": "steps",
    "tags": [
      "procedural",
      "python"
    ]
  },
  {
    "term": "Function definition",
    "def": "The def statement that creates a procedure and gives it a name.",
    "course": "procedural-programming",
    "section": "steps",
    "tags": [
      "procedural",
      "python"
    ]
  },
  {
    "term": "Function call",
    "def": "Writing a procedure's name with parentheses to run its body.",
    "course": "procedural-programming",
    "section": "steps",
    "tags": [
      "procedural",
      "python"
    ]
  },
  {
    "term": "Body",
    "def": "The indented block of statements that runs when a procedure is called.",
    "course": "procedural-programming",
    "section": "steps",
    "tags": [
      "procedural",
      "python"
    ]
  },
  {
    "term": "Docstring",
    "def": "A string on the first line of a body that says what the procedure is for.",
    "course": "procedural-programming",
    "section": "steps",
    "tags": [
      "procedural",
      "python"
    ]
  },
  {
    "term": "Parameter",
    "def": "A name in a procedure's definition that receives a value when it is called.",
    "course": "procedural-programming",
    "section": "data",
    "tags": [
      "procedural",
      "python"
    ]
  },
  {
    "term": "Argument",
    "def": "The actual value passed to a procedure at the call site.",
    "course": "procedural-programming",
    "section": "data",
    "tags": [
      "procedural",
      "python"
    ]
  },
  {
    "term": "Default value",
    "def": "A value a parameter falls back to when the caller omits that argument.",
    "course": "procedural-programming",
    "section": "data",
    "tags": [
      "procedural",
      "python"
    ]
  },
  {
    "term": "Keyword argument",
    "def": "An argument passed by name, so its position in the call no longer matters.",
    "course": "procedural-programming",
    "section": "data",
    "tags": [
      "procedural",
      "python"
    ]
  },
  {
    "term": "Return value",
    "def": "The value a procedure hands back to whoever called it.",
    "course": "procedural-programming",
    "section": "data",
    "tags": [
      "procedural",
      "python"
    ]
  },
  {
    "term": "return statement",
    "def": "The statement that ends a procedure and sends a value back to the caller.",
    "course": "procedural-programming",
    "section": "data",
    "tags": [
      "procedural",
      "python"
    ]
  },
  {
    "term": "None",
    "def": "Python's value for nothing, returned by any procedure with no return statement.",
    "course": "procedural-programming",
    "section": "data",
    "tags": [
      "procedural",
      "python"
    ]
  },
  {
    "term": "Side effect",
    "def": "Anything a procedure does beyond returning a value, such as printing or writing state.",
    "course": "procedural-programming",
    "section": "data",
    "tags": [
      "procedural",
      "design"
    ]
  },
  {
    "term": "Single responsibility",
    "def": "The rule that a procedure should do exactly one job, so its name can describe it.",
    "course": "procedural-programming",
    "section": "structure",
    "tags": [
      "procedural",
      "design"
    ]
  },
  {
    "term": "Refactoring",
    "def": "Changing the structure of code without changing what it does.",
    "course": "procedural-programming",
    "section": "structure",
    "tags": [
      "procedural",
      "design"
    ]
  },
  {
    "term": "Extract function",
    "def": "Pulling a block of statements out into a new named procedure.",
    "course": "procedural-programming",
    "section": "structure",
    "tags": [
      "procedural",
      "design"
    ]
  },
  {
    "term": "Cohesion",
    "def": "How closely the statements inside a procedure belong together around one job.",
    "course": "procedural-programming",
    "section": "structure",
    "tags": [
      "procedural",
      "design"
    ]
  },
  {
    "term": "Global variable",
    "def": "A variable defined at the top level of a file, outside any procedure.",
    "course": "procedural-programming",
    "section": "structure",
    "tags": [
      "procedural",
      "python"
    ]
  },
  {
    "term": "Global state",
    "def": "Data shared by every procedure in a file through a top-level variable.",
    "course": "procedural-programming",
    "section": "structure",
    "tags": [
      "procedural",
      "design"
    ]
  },
  {
    "term": "global statement",
    "def": "The statement that lets a procedure assign to a variable defined at the top level.",
    "course": "procedural-programming",
    "section": "structure",
    "tags": [
      "procedural",
      "python"
    ]
  },
  {
    "term": "Hidden dependency",
    "def": "A real dependency a procedure has that is not visible in its parameter list.",
    "course": "procedural-programming",
    "section": "structure",
    "tags": [
      "procedural",
      "design"
    ]
  },
  {
    "term": "Module",
    "def": "A Python file, named after the file without its extension, that holds procedures.",
    "course": "procedural-programming",
    "section": "modules",
    "tags": [
      "procedural",
      "python"
    ]
  },
  {
    "term": "Namespace",
    "def": "The place a module's names live, which keeps them separate from other modules.",
    "course": "procedural-programming",
    "section": "modules",
    "tags": [
      "procedural",
      "python"
    ]
  },
  {
    "term": "import statement",
    "def": "The statement that makes another module's names available in the current file.",
    "course": "procedural-programming",
    "section": "modules",
    "tags": [
      "procedural",
      "python"
    ]
  },
  {
    "term": "Main guard",
    "def": "The if __name__ == \"__main__\" check that runs code only when the file is run directly.",
    "course": "procedural-programming",
    "section": "modules",
    "tags": [
      "procedural",
      "python"
    ]
  },
  {
    "term": "from ... import",
    "def": "An import form that brings one name in directly, without the module prefix.",
    "course": "procedural-programming",
    "section": "modules",
    "tags": [
      "procedural",
      "python"
    ]
  },
  {
    "term": "Alias",
    "def": "A new name given to a module on import, as in import prices as pr.",
    "course": "procedural-programming",
    "section": "modules",
    "tags": [
      "procedural",
      "python"
    ]
  },
  {
    "term": "Circular import",
    "def": "When two modules import each other, so neither finishes loading.",
    "course": "procedural-programming",
    "section": "modules",
    "tags": [
      "procedural",
      "python"
    ]
  },
  {
    "term": "Reusability",
    "def": "The property of a step being callable from many places instead of copied.",
    "course": "procedural-programming",
    "section": "modules",
    "tags": [
      "procedural",
      "design"
    ]
  },
  {
    "term": "Coupling",
    "def": "How much one procedure depends on the exact shape of another's data.",
    "course": "procedural-programming",
    "section": "together",
    "tags": [
      "procedural",
      "design"
    ]
  },
  {
    "term": "Data clump",
    "def": "A group of values that always travel together but have no name of their own.",
    "course": "procedural-programming",
    "section": "together",
    "tags": [
      "procedural",
      "design"
    ]
  },
  {
    "term": "Passing the same data around",
    "def": "The smell of repeating the same parameters through many procedures.",
    "course": "procedural-programming",
    "section": "together",
    "tags": [
      "procedural",
      "design"
    ]
  },
  {
    "term": "Procedural limit",
    "def": "The point where data and the behaviour belonging to it live in different places.",
    "course": "procedural-programming",
    "section": "together",
    "tags": [
      "procedural",
      "design"
    ]
  },
  {
    "term": "Program shape",
    "def": "The overall form of a program: a short entry point above a set of named steps.",
    "course": "procedural-programming",
    "section": "together",
    "tags": [
      "procedural",
      "design"
    ]
  },
  {
    "term": "Entry point",
    "def": "Where a program starts, usually the main guard or the main procedure it calls.",
    "course": "procedural-programming",
    "section": "together",
    "tags": [
      "procedural",
      "python"
    ]
  },
  {
    "term": "Helper function",
    "def": "A named step that the entry point uses to do part of its job.",
    "course": "procedural-programming",
    "section": "together",
    "tags": [
      "procedural",
      "python"
    ]
  },
  {
    "term": "Pipeline",
    "def": "A chain of steps where each takes the previous step's output as its input.",
    "course": "procedural-programming",
    "section": "together",
    "tags": [
      "procedural",
      "design"
    ]
  },
  {
    "term": "Data structure",
    "def": "A way of arranging data in memory so that chosen operations are cheap.",
    "course": "data-structures",
    "section": "layout",
    "tags": [
      "cs",
      "data-structures"
    ]
  },
  {
    "term": "Array",
    "def": "A block of contiguous slots, each reachable by a numeric index.",
    "course": "data-structures",
    "section": "layout",
    "tags": [
      "cs",
      "data-structures"
    ]
  },
  {
    "term": "Index",
    "def": "The position of an item in an array, counted from zero.",
    "course": "data-structures",
    "section": "layout",
    "tags": [
      "cs",
      "data-structures"
    ]
  },
  {
    "term": "Linked list",
    "def": "A chain of nodes where each one points to the next, scattered in memory.",
    "course": "data-structures",
    "section": "layout",
    "tags": [
      "cs",
      "data-structures"
    ]
  },
  {
    "term": "Node",
    "def": "A small container holding a value plus one or more links to other nodes.",
    "course": "data-structures",
    "section": "layout",
    "tags": [
      "cs",
      "data-structures"
    ]
  },
  {
    "term": "Pointer",
    "def": "A reference from one node to another, used to walk a linked structure.",
    "course": "data-structures",
    "section": "layout",
    "tags": [
      "cs",
      "data-structures"
    ]
  },
  {
    "term": "Stack",
    "def": "A structure that adds and removes items at one end only, the top.",
    "course": "data-structures",
    "section": "ordered",
    "tags": [
      "cs",
      "data-structures"
    ]
  },
  {
    "term": "LIFO",
    "def": "Last In, First Out — the rule a stack obeys when removing items.",
    "course": "data-structures",
    "section": "ordered",
    "tags": [
      "cs",
      "data-structures"
    ]
  },
  {
    "term": "Push",
    "def": "Adding an item to the top of a stack.",
    "course": "data-structures",
    "section": "ordered",
    "tags": [
      "cs",
      "data-structures"
    ]
  },
  {
    "term": "Pop",
    "def": "Removing and returning the item at the top of a stack.",
    "course": "data-structures",
    "section": "ordered",
    "tags": [
      "cs",
      "data-structures"
    ]
  },
  {
    "term": "Queue",
    "def": "A structure that adds at the back and removes from the front.",
    "course": "data-structures",
    "section": "ordered",
    "tags": [
      "cs",
      "data-structures"
    ]
  },
  {
    "term": "FIFO",
    "def": "First In, First Out — the rule a queue obeys when removing items.",
    "course": "data-structures",
    "section": "ordered",
    "tags": [
      "cs",
      "data-structures"
    ]
  },
  {
    "term": "Enqueue",
    "def": "Adding an item to the back of a queue.",
    "course": "data-structures",
    "section": "ordered",
    "tags": [
      "cs",
      "data-structures"
    ]
  },
  {
    "term": "Dequeue",
    "def": "Removing and returning the item at the front of a queue.",
    "course": "data-structures",
    "section": "ordered",
    "tags": [
      "cs",
      "data-structures"
    ]
  },
  {
    "term": "Hash table",
    "def": "A structure that maps keys to slots using a hash function for fast lookup.",
    "course": "data-structures",
    "section": "keyed",
    "tags": [
      "cs",
      "data-structures"
    ]
  },
  {
    "term": "Hash function",
    "def": "A function that turns a key into an index in the underlying array.",
    "course": "data-structures",
    "section": "keyed",
    "tags": [
      "cs",
      "data-structures"
    ]
  },
  {
    "term": "Collision",
    "def": "When two different keys hash to the same slot in a hash table.",
    "course": "data-structures",
    "section": "keyed",
    "tags": [
      "cs",
      "data-structures"
    ]
  },
  {
    "term": "Load factor",
    "def": "The ratio of stored items to available slots, which triggers resizing.",
    "course": "data-structures",
    "section": "keyed",
    "tags": [
      "cs",
      "data-structures"
    ]
  },
  {
    "term": "Dictionary",
    "def": "Python's built-in hash table, written as key-value pairs in braces.",
    "course": "data-structures",
    "section": "keyed",
    "tags": [
      "cs",
      "python"
    ]
  },
  {
    "term": "Tree",
    "def": "A branching structure of nodes with one root and no cycles.",
    "course": "data-structures",
    "section": "hierarchy",
    "tags": [
      "cs",
      "data-structures"
    ]
  },
  {
    "term": "Root",
    "def": "The single top node of a tree, the only one with no parent.",
    "course": "data-structures",
    "section": "hierarchy",
    "tags": [
      "cs",
      "data-structures"
    ]
  },
  {
    "term": "Leaf",
    "def": "A node in a tree that has no children.",
    "course": "data-structures",
    "section": "hierarchy",
    "tags": [
      "cs",
      "data-structures"
    ]
  },
  {
    "term": "Binary tree",
    "def": "A tree in which every node has at most two children.",
    "course": "data-structures",
    "section": "hierarchy",
    "tags": [
      "cs",
      "data-structures"
    ]
  },
  {
    "term": "Binary search tree",
    "def": "A binary tree keeping smaller values left and larger values right.",
    "course": "data-structures",
    "section": "hierarchy",
    "tags": [
      "cs",
      "data-structures"
    ]
  },
  {
    "term": "Traversal",
    "def": "Visiting every node of a tree in a defined order.",
    "course": "data-structures",
    "section": "hierarchy",
    "tags": [
      "cs",
      "data-structures"
    ]
  },
  {
    "term": "Big-O",
    "def": "A notation describing how an operation's cost grows as the data grows.",
    "course": "data-structures",
    "section": "cost",
    "tags": [
      "cs",
      "complexity"
    ]
  },
  {
    "term": "Amortised cost",
    "def": "The average cost of an operation over many calls, including rare expensive ones.",
    "course": "data-structures",
    "section": "cost",
    "tags": [
      "cs",
      "complexity"
    ]
  },
  {
    "term": "Trade-off",
    "def": "The exchange you accept when a structure buys one strength by giving up another.",
    "course": "data-structures",
    "section": "cost",
    "tags": [
      "cs",
      "design"
    ]
  },
  {
    "term": "Module",
    "def": "A single .py file whose top-level names can be imported by other files.",
    "course": "python-modules-packages",
    "section": "imports",
    "tags": [
      "python",
      "modules"
    ]
  },
  {
    "term": "Import statement",
    "def": "The statement that loads a module and binds its name in the current namespace.",
    "course": "python-modules-packages",
    "section": "imports",
    "tags": [
      "python",
      "modules"
    ]
  },
  {
    "term": "from ... import ...",
    "def": "An import form that binds selected names from a module directly into the current namespace.",
    "course": "python-modules-packages",
    "section": "imports",
    "tags": [
      "python",
      "modules"
    ]
  },
  {
    "term": "Alias (as)",
    "def": "A local name given to an imported module or symbol with the as keyword.",
    "course": "python-modules-packages",
    "section": "imports",
    "tags": [
      "python",
      "modules"
    ]
  },
  {
    "term": "sys.path",
    "def": "The list of directories Python searches, in order, when resolving an import.",
    "course": "python-modules-packages",
    "section": "imports",
    "tags": [
      "python",
      "modules"
    ]
  },
  {
    "term": "Module cache (sys.modules)",
    "def": "The dictionary of already-imported modules, so a module's code runs only once.",
    "course": "python-modules-packages",
    "section": "imports",
    "tags": [
      "python",
      "modules"
    ]
  },
  {
    "term": "Package",
    "def": "A directory of modules that can be imported as a single dotted name.",
    "course": "python-modules-packages",
    "section": "packages",
    "tags": [
      "python",
      "packages"
    ]
  },
  {
    "term": "__init__.py",
    "def": "The file that marks a directory as a package and runs when the package is imported.",
    "course": "python-modules-packages",
    "section": "packages",
    "tags": [
      "python",
      "packages"
    ]
  },
  {
    "term": "Dotted path",
    "def": "The dot-separated name that walks from a package down to a module or attribute.",
    "course": "python-modules-packages",
    "section": "packages",
    "tags": [
      "python",
      "packages"
    ]
  },
  {
    "term": "Absolute import",
    "def": "An import written from the project root, naming the full path to the module.",
    "course": "python-modules-packages",
    "section": "packages",
    "tags": [
      "python",
      "packages"
    ]
  },
  {
    "term": "Relative import",
    "def": "An import written with leading dots that resolves within the current package.",
    "course": "python-modules-packages",
    "section": "packages",
    "tags": [
      "python",
      "packages"
    ]
  },
  {
    "term": "__name__",
    "def": "The variable holding the name a module was loaded under — its own name, or __main__ when run.",
    "course": "python-modules-packages",
    "section": "packages",
    "tags": [
      "python",
      "packages"
    ]
  },
  {
    "term": "__main__ guard",
    "def": "The if __name__ == \"__main__\" check that runs code only when the file is executed directly.",
    "course": "python-modules-packages",
    "section": "packages",
    "tags": [
      "python",
      "packages"
    ]
  },
  {
    "term": "Virtual environment",
    "def": "A per-project directory holding its own installed packages, separate from the global interpreter.",
    "course": "python-modules-packages",
    "section": "environments",
    "tags": [
      "python",
      "tooling"
    ]
  },
  {
    "term": "site-packages",
    "def": "The directory inside an environment where pip installs third-party packages.",
    "course": "python-modules-packages",
    "section": "environments",
    "tags": [
      "python",
      "tooling"
    ]
  },
  {
    "term": "pip",
    "def": "Python's package installer, which fetches and installs distributions into the active environment.",
    "course": "python-modules-packages",
    "section": "environments",
    "tags": [
      "python",
      "tooling"
    ]
  },
  {
    "term": "requirements.txt",
    "def": "A plain text list of a project's dependencies, one per line, used to rebuild an environment.",
    "course": "python-modules-packages",
    "section": "environments",
    "tags": [
      "python",
      "tooling"
    ]
  },
  {
    "term": "Version pin",
    "def": "A requirement fixed to one exact version with ==, so installs are reproducible.",
    "course": "python-modules-packages",
    "section": "environments",
    "tags": [
      "python",
      "tooling"
    ]
  },
  {
    "term": "Circular import",
    "def": "A cycle where two modules import each other, leaving one partially initialised.",
    "course": "python-modules-packages",
    "section": "together",
    "tags": [
      "python",
      "debugging"
    ]
  },
  {
    "term": "Shadowing",
    "def": "A local file whose name matches a library module, found first on sys.path and replacing it.",
    "course": "python-modules-packages",
    "section": "together",
    "tags": [
      "python",
      "debugging"
    ]
  },
  {
    "term": "Star import",
    "def": "The from module import * form that copies every public name and hides where each came from.",
    "course": "python-modules-packages",
    "section": "together",
    "tags": [
      "python",
      "debugging"
    ]
  },
  {
    "term": "pyproject.toml",
    "def": "The file declaring a project's name, version, dependencies and build backend.",
    "course": "python-modules-packages",
    "section": "together",
    "tags": [
      "python",
      "packaging"
    ]
  },
  {
    "term": "Distribution",
    "def": "A built, installable artifact — a wheel or sdist — produced from a source tree.",
    "course": "python-modules-packages",
    "section": "together",
    "tags": [
      "python",
      "packaging"
    ]
  },
  {
    "term": "File",
    "def": "A named sequence of bytes on disk that a program can open, read and write.",
    "course": "python-files-json-data",
    "section": "files",
    "tags": [
      "python",
      "files"
    ]
  },
  {
    "term": "File handle",
    "def": "The object returned by open() that represents an open connection to a file.",
    "course": "python-files-json-data",
    "section": "files",
    "tags": [
      "python",
      "files"
    ]
  },
  {
    "term": "Mode",
    "def": "The short string passed to open() that decides whether you read, write or append.",
    "course": "python-files-json-data",
    "section": "files",
    "tags": [
      "python",
      "files"
    ]
  },
  {
    "term": "Encoding",
    "def": "The rule that maps bytes to characters, named explicitly so behaviour is identical everywhere.",
    "course": "python-files-json-data",
    "section": "files",
    "tags": [
      "python",
      "files"
    ]
  },
  {
    "term": "with statement",
    "def": "The block form that guarantees cleanup runs when the block exits, even after an exception.",
    "course": "python-files-json-data",
    "section": "files",
    "tags": [
      "python",
      "files"
    ]
  },
  {
    "term": "Context manager",
    "def": "An object defining __enter__ and __exit__ so it can be used with the with statement.",
    "course": "python-files-json-data",
    "section": "files",
    "tags": [
      "python",
      "files"
    ]
  },
  {
    "term": "Path",
    "def": "A pathlib object representing a filesystem location, joined with the / operator.",
    "course": "python-files-json-data",
    "section": "files",
    "tags": [
      "python",
      "files"
    ]
  },
  {
    "term": "pathlib",
    "def": "The standard library module providing the Path class for filesystem paths.",
    "course": "python-files-json-data",
    "section": "files",
    "tags": [
      "python",
      "files"
    ]
  },
  {
    "term": "JSON",
    "def": "A strict text format with six value types, used to move data between systems.",
    "course": "python-files-json-data",
    "section": "formats",
    "tags": [
      "python",
      "data"
    ]
  },
  {
    "term": "Serialisation",
    "def": "Turning an in-memory object into a storable or transmittable representation such as JSON text.",
    "course": "python-files-json-data",
    "section": "formats",
    "tags": [
      "python",
      "data"
    ]
  },
  {
    "term": "Deserialisation",
    "def": "Turning stored or transmitted text back into in-memory objects.",
    "course": "python-files-json-data",
    "section": "formats",
    "tags": [
      "python",
      "data"
    ]
  },
  {
    "term": "json.dumps / json.loads",
    "def": "The pair that serialises to and deserialises from a string held in memory.",
    "course": "python-files-json-data",
    "section": "formats",
    "tags": [
      "python",
      "data"
    ]
  },
  {
    "term": "json.dump / json.load",
    "def": "The pair that serialises to and deserialises from an open file object.",
    "course": "python-files-json-data",
    "section": "formats",
    "tags": [
      "python",
      "data"
    ]
  },
  {
    "term": "CSV",
    "def": "A tabular text format of rows and columns where every value is stored as a string.",
    "course": "python-files-json-data",
    "section": "formats",
    "tags": [
      "python",
      "data"
    ]
  },
  {
    "term": "csv module",
    "def": "The standard library module that parses and writes CSV correctly, including quoting.",
    "course": "python-files-json-data",
    "section": "formats",
    "tags": [
      "python",
      "data"
    ]
  },
  {
    "term": "DictReader",
    "def": "A csv reader that yields one dictionary per row, keyed by the header names.",
    "course": "python-files-json-data",
    "section": "formats",
    "tags": [
      "python",
      "data"
    ]
  },
  {
    "term": "Format conversion",
    "def": "Reshaping the same data between representations such as CSV rows and JSON objects.",
    "course": "python-files-json-data",
    "section": "together",
    "tags": [
      "python",
      "data"
    ]
  },
  {
    "term": "Round trip",
    "def": "Writing data out and reading it back to confirm nothing was lost or changed.",
    "course": "python-files-json-data",
    "section": "together",
    "tags": [
      "python",
      "data"
    ]
  },
  {
    "term": "Malformed data",
    "def": "Input that does not follow its format's rules and therefore fails to parse.",
    "course": "python-files-json-data",
    "section": "together",
    "tags": [
      "python",
      "data"
    ]
  },
  {
    "term": "Validation",
    "def": "Checking that parsed data has the keys, types and ranges your program requires.",
    "course": "python-files-json-data",
    "section": "together",
    "tags": [
      "python",
      "data"
    ]
  },
  {
    "term": "Pipeline",
    "def": "A program shaped as read, transform, write, with validation at the edges.",
    "course": "python-files-json-data",
    "section": "together",
    "tags": [
      "python",
      "data"
    ]
  },
  {
    "term": "Idempotent",
    "def": "A property of a pipeline where running it twice gives the same result as running it once.",
    "course": "python-files-json-data",
    "section": "together",
    "tags": [
      "python",
      "data"
    ]
  },
  {
    "term": "Type hint",
    "def": "An annotation that records the intended type of a variable, parameter or return value.",
    "course": "python-type-hints",
    "section": "annotations",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "Annotation",
    "def": "The syntax that attaches a type expression to a name, written after a colon.",
    "course": "python-type-hints",
    "section": "annotations",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "Static checking",
    "def": "Analysing code for type errors without running it, using the annotations as evidence.",
    "course": "python-type-hints",
    "section": "annotations",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "Gradual typing",
    "def": "The property that lets annotated and unannotated code coexist in one program.",
    "course": "python-type-hints",
    "section": "annotations",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "Parameter annotation",
    "def": "A type written after a parameter name, describing what the function accepts.",
    "course": "python-type-hints",
    "section": "annotations",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "Return annotation",
    "def": "A type written after the arrow, describing what the function returns.",
    "course": "python-type-hints",
    "section": "annotations",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "Variable annotation",
    "def": "A type written after a variable name, describing what it will hold.",
    "course": "python-type-hints",
    "section": "annotations",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "None return",
    "def": "The annotation for a function that returns nothing useful, written as -> None.",
    "course": "python-type-hints",
    "section": "annotations",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "int / float / str / bool",
    "def": "The four built-in scalar types used most often in annotations.",
    "course": "python-type-hints",
    "section": "annotations",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "Any",
    "def": "The escape hatch type that disables checking for a value.",
    "course": "python-type-hints",
    "section": "annotations",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "object",
    "def": "The type that accepts every value, useful when you truly mean anything.",
    "course": "python-type-hints",
    "section": "annotations",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "NoneType",
    "def": "The type of None, written as None in annotations.",
    "course": "python-type-hints",
    "section": "annotations",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "Optional",
    "def": "A shorthand meaning a value of this type or None.",
    "course": "python-type-hints",
    "section": "annotations",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "Union",
    "def": "A type meaning any one of several listed types.",
    "course": "python-type-hints",
    "section": "annotations",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "Pipe syntax",
    "def": "The modern X | Y form of a union, available from Python 3.10.",
    "course": "python-type-hints",
    "section": "annotations",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "Narrowing",
    "def": "The checker's ability to refine a union to one member after a runtime check.",
    "course": "python-type-hints",
    "section": "annotations",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "Generic",
    "def": "A type that takes other types as parameters, such as list[int].",
    "course": "python-type-hints",
    "section": "generics",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "Type parameter",
    "def": "The type argument written inside brackets, such as the int in list[int].",
    "course": "python-type-hints",
    "section": "generics",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "list / dict / set / tuple",
    "def": "The built-in collections, each annotated with the type of what it holds.",
    "course": "python-type-hints",
    "section": "generics",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "TypeVar",
    "def": "A placeholder type used to express that two positions must share the same type.",
    "course": "python-type-hints",
    "section": "generics",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "Type alias",
    "def": "A name given to a type expression so it can be reused and read clearly.",
    "course": "python-type-hints",
    "section": "generics",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "NewType",
    "def": "A distinct type built from an existing one, so the checker will not confuse them.",
    "course": "python-type-hints",
    "section": "generics",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "Literal",
    "def": "A type restricted to a fixed set of exact values.",
    "course": "python-type-hints",
    "section": "generics",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "TypedDict",
    "def": "A dictionary type with a fixed set of named keys and value types.",
    "course": "python-type-hints",
    "section": "generics",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "Protocol",
    "def": "A structural type describing the methods an object must have, without inheritance.",
    "course": "python-type-hints",
    "section": "generics",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "Callable",
    "def": "The type of a function value, written with its parameter and return types.",
    "course": "python-type-hints",
    "section": "generics",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "Structural typing",
    "def": "Matching types by the shape of their interface rather than by inheritance.",
    "course": "python-type-hints",
    "section": "generics",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "mypy",
    "def": "The most widely used static type checker for Python.",
    "course": "python-type-hints",
    "section": "checking",
    "tags": [
      "python",
      "tooling"
    ]
  },
  {
    "term": "Type error",
    "def": "A mismatch between an annotation and how a value is actually used.",
    "course": "python-type-hints",
    "section": "checking",
    "tags": [
      "python",
      "tooling"
    ]
  },
  {
    "term": "Strict mode",
    "def": "A checker configuration that refuses to silently ignore unannotated code.",
    "course": "python-type-hints",
    "section": "checking",
    "tags": [
      "python",
      "tooling"
    ]
  },
  {
    "term": "Type stub",
    "def": "A .pyi file that declares types for code without changing the code itself.",
    "course": "python-type-hints",
    "section": "checking",
    "tags": [
      "python",
      "tooling"
    ]
  },
  {
    "term": "__annotations__",
    "def": "The dictionary holding a module or function's annotations at runtime.",
    "course": "python-type-hints",
    "section": "checking",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "get_type_hints",
    "def": "The helper that resolves annotations, including forward references, at runtime.",
    "course": "python-type-hints",
    "section": "checking",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "Forward reference",
    "def": "An annotation written as a string because the name is not defined yet.",
    "course": "python-type-hints",
    "section": "checking",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "from __future__ import annotations",
    "def": "The import that makes all annotations lazy strings, avoiding most forward-reference problems.",
    "course": "python-type-hints",
    "section": "checking",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "Runtime validation",
    "def": "Checking types while the program runs, using the annotations as data.",
    "course": "python-type-hints",
    "section": "together",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "Type coverage",
    "def": "The proportion of a codebase that carries useful annotations.",
    "course": "python-type-hints",
    "section": "together",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "Incremental adoption",
    "def": "Adding annotations to an existing codebase gradually, file by file.",
    "course": "python-type-hints",
    "section": "together",
    "tags": [
      "python",
      "types"
    ]
  },
  {
    "term": "Bit",
    "def": "The smallest unit of information — a single position that is either 0 or 1. Short for binary digit.",
    "course": "how-computers-work",
    "section": "numbers",
    "tags": [
      "binary",
      "fundamentals"
    ]
  },
  {
    "term": "Byte",
    "def": "Eight bits grouped together. One byte can hold 256 distinct values, which is why it is the standard unit of addressable memory.",
    "course": "how-computers-work",
    "section": "numbers",
    "tags": [
      "binary",
      "fundamentals"
    ]
  },
  {
    "term": "Binary",
    "def": "Base-2 counting: each position is worth twice the one to its right. 1011 means 8 + 0 + 2 + 1 = 11.",
    "course": "how-computers-work",
    "section": "numbers",
    "tags": [
      "binary",
      "fundamentals"
    ]
  },
  {
    "term": "Place value",
    "def": "The weight of a digit's position. In base 2 the weights are 1, 2, 4, 8, 16, …; in base 10 they are 1, 10, 100, …",
    "course": "how-computers-work",
    "section": "numbers",
    "tags": [
      "binary",
      "fundamentals"
    ]
  },
  {
    "term": "Hexadecimal",
    "def": "Base-16 counting, using 0–9 and A–F. One hex digit is exactly four bits, so it is a compact way to write binary.",
    "course": "how-computers-work",
    "section": "numbers",
    "tags": [
      "binary",
      "notation"
    ]
  },
  {
    "term": "Nibble",
    "def": "Four bits — exactly one hexadecimal digit. Two nibbles make a byte.",
    "course": "how-computers-work",
    "section": "numbers",
    "tags": [
      "binary",
      "notation"
    ]
  },
  {
    "term": "Unsigned integer",
    "def": "A whole number stored with no sign bit, so all n bits are magnitude. An 8-bit unsigned value runs from 0 to 255.",
    "course": "how-computers-work",
    "section": "numbers",
    "tags": [
      "binary",
      "numbers"
    ]
  },
  {
    "term": "Two's complement",
    "def": "The standard way to store negative integers: flip every bit, then add one. It makes subtraction the same operation as addition.",
    "course": "how-computers-work",
    "section": "numbers",
    "tags": [
      "binary",
      "numbers"
    ]
  },
  {
    "term": "Transistor",
    "def": "A tiny electrically-controlled switch. Modern chips contain billions of them, and each one is either conducting or not.",
    "course": "how-computers-work",
    "section": "logic",
    "tags": [
      "hardware",
      "logic"
    ]
  },
  {
    "term": "Logic gate",
    "def": "A circuit that takes one or more binary inputs and produces one binary output according to a fixed rule — AND, OR, NOT, XOR.",
    "course": "how-computers-work",
    "section": "logic",
    "tags": [
      "hardware",
      "logic"
    ]
  },
  {
    "term": "Truth table",
    "def": "A complete list of a gate's output for every possible combination of its inputs. Two inputs means four rows.",
    "course": "how-computers-work",
    "section": "logic",
    "tags": [
      "logic",
      "method"
    ]
  },
  {
    "term": "NAND gate",
    "def": "An AND gate followed by a NOT. It is functionally complete: every other gate can be built from NANDs alone.",
    "course": "how-computers-work",
    "section": "logic",
    "tags": [
      "hardware",
      "logic"
    ]
  },
  {
    "term": "Half adder",
    "def": "A circuit that adds two single bits and produces a sum bit and a carry bit. Built from one XOR and one AND.",
    "course": "how-computers-work",
    "section": "logic",
    "tags": [
      "hardware",
      "arithmetic"
    ]
  },
  {
    "term": "Full adder",
    "def": "A half adder that also accepts a carry-in, so adders can be chained to add multi-bit numbers.",
    "course": "how-computers-work",
    "section": "logic",
    "tags": [
      "hardware",
      "arithmetic"
    ]
  },
  {
    "term": "Flip-flop",
    "def": "A circuit that remembers one bit by feeding its own output back into its input. The basis of all memory.",
    "course": "how-computers-work",
    "section": "logic",
    "tags": [
      "hardware",
      "memory"
    ]
  },
  {
    "term": "Clock",
    "def": "A steady electrical pulse that tells every part of the machine when to update. Its rate is the chip's clock speed, measured in hertz.",
    "course": "how-computers-work",
    "section": "logic",
    "tags": [
      "hardware",
      "timing"
    ]
  },
  {
    "term": "CPU",
    "def": "The central processing unit — the part that fetches instructions, decodes them, and executes them. Also called the processor.",
    "course": "how-computers-work",
    "section": "machine",
    "tags": [
      "hardware",
      "cpu"
    ]
  },
  {
    "term": "Register",
    "def": "A tiny, extremely fast storage slot inside the CPU. A typical chip has a few dozen, each holding one machine word.",
    "course": "how-computers-work",
    "section": "machine",
    "tags": [
      "hardware",
      "cpu"
    ]
  },
  {
    "term": "Program counter",
    "def": "The register that holds the memory address of the next instruction to fetch. It is what makes a program a sequence.",
    "course": "how-computers-work",
    "section": "machine",
    "tags": [
      "hardware",
      "cpu"
    ]
  },
  {
    "term": "Fetch–decode–execute",
    "def": "The three-step cycle the CPU repeats forever: read the next instruction, work out what it means, then do it.",
    "course": "how-computers-work",
    "section": "machine",
    "tags": [
      "hardware",
      "cpu"
    ]
  },
  {
    "term": "Instruction set",
    "def": "The fixed vocabulary of operations a particular CPU understands — its machine language. Also called an ISA.",
    "course": "how-computers-work",
    "section": "machine",
    "tags": [
      "hardware",
      "cpu"
    ]
  },
  {
    "term": "Machine code",
    "def": "A program written as the raw numbers the CPU executes. Every instruction is encoded as a pattern of bits.",
    "course": "how-computers-work",
    "section": "machine",
    "tags": [
      "hardware",
      "software"
    ]
  },
  {
    "term": "Assembly language",
    "def": "A human-readable spelling of machine code, one line per instruction, translated by an assembler.",
    "course": "how-computers-work",
    "section": "machine",
    "tags": [
      "software",
      "notation"
    ]
  },
  {
    "term": "Cache",
    "def": "A small, fast memory that sits between the CPU and RAM and holds recently used data, because most programs reuse the same data.",
    "course": "how-computers-work",
    "section": "machine",
    "tags": [
      "hardware",
      "memory"
    ]
  },
  {
    "term": "RAM",
    "def": "Random-access memory — the main working memory. Large and fast, but loses everything when power is removed.",
    "course": "how-computers-work",
    "section": "machine",
    "tags": [
      "hardware",
      "memory"
    ]
  },
  {
    "term": "Memory address",
    "def": "The number that identifies one byte of memory. Addresses are just integers, which is why hex is used to write them.",
    "course": "how-computers-work",
    "section": "machine",
    "tags": [
      "hardware",
      "memory"
    ]
  },
  {
    "term": "Character encoding",
    "def": "The agreed mapping from a number to a character. ASCII covers 128 characters; UTF-8 covers every script on Earth.",
    "course": "how-computers-work",
    "section": "data",
    "tags": [
      "data",
      "text"
    ]
  },
  {
    "term": "ASCII",
    "def": "A 7-bit encoding for English text. 65 is A, 97 is a — the difference of 32 is deliberate.",
    "course": "how-computers-work",
    "section": "data",
    "tags": [
      "data",
      "text"
    ]
  },
  {
    "term": "UTF-8",
    "def": "A variable-width encoding that stores ASCII in one byte and everything else in two to four, so it is backwards-compatible.",
    "course": "how-computers-work",
    "section": "data",
    "tags": [
      "data",
      "text"
    ]
  },
  {
    "term": "Floating point",
    "def": "A way of storing real numbers as a sign, an exponent and a fraction — like scientific notation in binary. It cannot represent most decimals exactly.",
    "course": "how-computers-work",
    "section": "data",
    "tags": [
      "data",
      "numbers"
    ]
  },
  {
    "term": "IEEE 754",
    "def": "The standard that defines how floating-point numbers are stored: 1 sign bit, 8 exponent bits, 23 fraction bits for a 32-bit float.",
    "course": "how-computers-work",
    "section": "data",
    "tags": [
      "data",
      "numbers"
    ]
  },
  {
    "term": "Rounding error",
    "def": "The small difference between a real number and its nearest representable float. It is why 0.1 + 0.2 is not exactly 0.3.",
    "course": "how-computers-work",
    "section": "data",
    "tags": [
      "data",
      "numbers"
    ]
  },
  {
    "term": "Compiler",
    "def": "A program that translates source code into machine code ahead of time, producing a file you can run later.",
    "course": "how-computers-work",
    "section": "data",
    "tags": [
      "software",
      "tools"
    ]
  },
  {
    "term": "Interpreter",
    "def": "A program that reads and executes source code as it goes, rather than translating the whole thing up front.",
    "course": "how-computers-work",
    "section": "data",
    "tags": [
      "software",
      "tools"
    ]
  },
  {
    "term": "Bytecode",
    "def": "An intermediate instruction format — simpler than machine code, more compact than source — that a virtual machine executes.",
    "course": "how-computers-work",
    "section": "data",
    "tags": [
      "software",
      "tools"
    ]
  },
  {
    "term": "Bottleneck",
    "def": "The single slowest part of a system, which therefore sets the speed of the whole. Optimising anything else changes nothing.",
    "course": "how-computers-work",
    "section": "data",
    "tags": [
      "performance",
      "method"
    ]
  },
  {
    "term": "Computational thinking",
    "def": "Formulating a problem and its solution so that the solution can be carried out by a computer — the thinking, not the coding.",
    "course": "programming-computational-thinking",
    "section": "thinking",
    "tags": [
      "fundamentals"
    ]
  },
  {
    "term": "Problem statement",
    "def": "A one-sentence description of what must be true when you are finished, written before you start solving.",
    "course": "programming-computational-thinking",
    "section": "thinking",
    "tags": [
      "fundamentals"
    ]
  },
  {
    "term": "Input",
    "def": "What the solution is given to work with — the information that arrives from outside.",
    "course": "programming-computational-thinking",
    "section": "thinking",
    "tags": [
      "fundamentals"
    ]
  },
  {
    "term": "Output",
    "def": "What the solution must produce — the result that can be checked against the problem statement.",
    "course": "programming-computational-thinking",
    "section": "thinking",
    "tags": [
      "fundamentals"
    ]
  },
  {
    "term": "The loop",
    "def": "The repeating cycle of decompose → find patterns → abstract → write an algorithm, then check the result and go round again.",
    "course": "programming-computational-thinking",
    "section": "thinking",
    "tags": [
      "fundamentals"
    ]
  },
  {
    "term": "Ambiguity",
    "def": "A step that could be understood in more than one way. A computer cannot resolve ambiguity; a human can.",
    "course": "programming-computational-thinking",
    "section": "thinking",
    "tags": [
      "fundamentals"
    ]
  },
  {
    "term": "Decomposition",
    "def": "Breaking one large problem into smaller problems that can each be understood and solved on their own.",
    "course": "programming-computational-thinking",
    "section": "decomposition",
    "tags": [
      "decomposition"
    ]
  },
  {
    "term": "Sub-problem",
    "def": "One of the smaller problems produced by decomposition. It should be small enough to solve without thinking about the rest.",
    "course": "programming-computational-thinking",
    "section": "decomposition",
    "tags": [
      "decomposition"
    ]
  },
  {
    "term": "Partition",
    "def": "A split of a problem into parts that do not overlap and together cover the whole problem.",
    "course": "programming-computational-thinking",
    "section": "decomposition",
    "tags": [
      "decomposition"
    ]
  },
  {
    "term": "Dependency",
    "def": "A case where one sub-problem cannot be solved until another one is finished first.",
    "course": "programming-computational-thinking",
    "section": "decomposition",
    "tags": [
      "decomposition"
    ]
  },
  {
    "term": "Order of work",
    "def": "The sequence in which sub-problems must be tackled, determined by their dependencies.",
    "course": "programming-computational-thinking",
    "section": "decomposition",
    "tags": [
      "decomposition"
    ]
  },
  {
    "term": "Granularity",
    "def": "How finely a problem is split. Too coarse and the parts are still hard; too fine and you drown in detail.",
    "course": "programming-computational-thinking",
    "section": "decomposition",
    "tags": [
      "decomposition"
    ]
  },
  {
    "term": "Pattern recognition",
    "def": "Noticing that two parts of a problem are the same shape, so one solution can serve both.",
    "course": "programming-computational-thinking",
    "section": "patterns",
    "tags": [
      "patterns"
    ]
  },
  {
    "term": "Repetition",
    "def": "The same step happening more than once. Repetition is the most common pattern and the easiest to exploit.",
    "course": "programming-computational-thinking",
    "section": "patterns",
    "tags": [
      "patterns"
    ]
  },
  {
    "term": "Similarity",
    "def": "Two things that are not identical but differ only in a detail you can supply as a value.",
    "course": "programming-computational-thinking",
    "section": "patterns",
    "tags": [
      "patterns"
    ]
  },
  {
    "term": "Generalisation",
    "def": "Replacing several specific cases with one rule that covers all of them.",
    "course": "programming-computational-thinking",
    "section": "patterns",
    "tags": [
      "patterns"
    ]
  },
  {
    "term": "Reuse",
    "def": "Solving a problem once and using that solution again instead of solving it a second time.",
    "course": "programming-computational-thinking",
    "section": "patterns",
    "tags": [
      "patterns"
    ]
  },
  {
    "term": "Counter-example",
    "def": "A case that looks like it fits the pattern but does not. Finding one tells you the pattern is too broad.",
    "course": "programming-computational-thinking",
    "section": "patterns",
    "tags": [
      "patterns"
    ]
  },
  {
    "term": "Abstraction",
    "def": "Keeping only the details that matter for the problem at hand and hiding the rest behind a simple name.",
    "course": "programming-computational-thinking",
    "section": "abstraction",
    "tags": [
      "abstraction"
    ]
  },
  {
    "term": "Interface",
    "def": "What an abstraction promises to do — its name, its inputs and its output — as seen from the outside.",
    "course": "programming-computational-thinking",
    "section": "abstraction",
    "tags": [
      "abstraction"
    ]
  },
  {
    "term": "Implementation",
    "def": "How an abstraction actually does it. The implementation can change without the interface changing.",
    "course": "programming-computational-thinking",
    "section": "abstraction",
    "tags": [
      "abstraction"
    ]
  },
  {
    "term": "Black box",
    "def": "A part you can use without knowing how it works inside, because its interface is enough.",
    "course": "programming-computational-thinking",
    "section": "abstraction",
    "tags": [
      "abstraction"
    ]
  },
  {
    "term": "Level of detail",
    "def": "How much of the inside you choose to show. The right level depends on who is reading.",
    "course": "programming-computational-thinking",
    "section": "abstraction",
    "tags": [
      "abstraction"
    ]
  },
  {
    "term": "Leaky abstraction",
    "def": "An abstraction that forces you to know about its insides anyway — usually a sign it was drawn in the wrong place.",
    "course": "programming-computational-thinking",
    "section": "abstraction",
    "tags": [
      "abstraction"
    ]
  },
  {
    "term": "Algorithm",
    "def": "A finite, ordered set of unambiguous steps that turns an input into the required output.",
    "course": "programming-computational-thinking",
    "section": "algorithms",
    "tags": [
      "algorithms"
    ]
  },
  {
    "term": "Step",
    "def": "One instruction in an algorithm. It must be something the executor can carry out without asking questions.",
    "course": "programming-computational-thinking",
    "section": "algorithms",
    "tags": [
      "algorithms"
    ]
  },
  {
    "term": "Sequence",
    "def": "Steps carried out one after another, in the order written. Changing the order changes the result.",
    "course": "programming-computational-thinking",
    "section": "algorithms",
    "tags": [
      "algorithms"
    ]
  },
  {
    "term": "Selection",
    "def": "Choosing between two paths based on a condition — the 'if' shape of an algorithm.",
    "course": "programming-computational-thinking",
    "section": "algorithms",
    "tags": [
      "algorithms"
    ]
  },
  {
    "term": "Iteration",
    "def": "Repeating a group of steps until a condition is met — the 'repeat' shape of an algorithm.",
    "course": "programming-computational-thinking",
    "section": "algorithms",
    "tags": [
      "algorithms"
    ]
  },
  {
    "term": "Termination",
    "def": "The guarantee that an algorithm eventually stops. An algorithm that never stops is not an algorithm.",
    "course": "programming-computational-thinking",
    "section": "algorithms",
    "tags": [
      "algorithms"
    ]
  },
  {
    "term": "Trace",
    "def": "Following an algorithm by hand, step by step, writing down the state after each step to check it is correct.",
    "course": "programming-computational-thinking",
    "section": "algorithms",
    "tags": [
      "algorithms"
    ]
  },
  {
    "term": "Pseudocode",
    "def": "Algorithm steps written in plain language with a loose structure, so they can be read before they are coded.",
    "course": "programming-computational-thinking",
    "section": "algorithms",
    "tags": [
      "algorithms"
    ]
  },
  {
    "term": "Evaluation",
    "def": "Judging how good a solution is against named criteria, rather than only checking that it works.",
    "course": "programming-computational-thinking",
    "section": "evaluation",
    "tags": [
      "evaluation"
    ]
  },
  {
    "term": "Criterion",
    "def": "A named quality you judge a solution against — speed, clarity, simplicity. Without one, evaluation is just opinion.",
    "course": "programming-computational-thinking",
    "section": "evaluation",
    "tags": [
      "evaluation"
    ]
  },
  {
    "term": "Efficiency",
    "def": "How much work a solution does to reach its answer. Two correct solutions can differ enormously here.",
    "course": "programming-computational-thinking",
    "section": "evaluation",
    "tags": [
      "evaluation"
    ]
  },
  {
    "term": "Clarity",
    "def": "How easily another person can follow the steps. A solution nobody can read is a solution nobody can fix.",
    "course": "programming-computational-thinking",
    "section": "evaluation",
    "tags": [
      "evaluation"
    ]
  },
  {
    "term": "Simplicity",
    "def": "Having the fewest parts and the fewest special cases. Simpler solutions are easier to check and to change.",
    "course": "programming-computational-thinking",
    "section": "evaluation",
    "tags": [
      "evaluation"
    ]
  },
  {
    "term": "Trade-off",
    "def": "A gain on one criterion paid for by a loss on another. Most real solutions involve choosing which trade-off is right.",
    "course": "programming-computational-thinking",
    "section": "evaluation",
    "tags": [
      "evaluation"
    ]
  },
  {
    "term": "Comparison",
    "def": "Judging two solutions against each other on a criterion — turning \"is this good?\" into a question with a defensible answer.",
    "course": "programming-computational-thinking",
    "section": "evaluation",
    "tags": [
      "evaluation"
    ]
  },
  {
    "term": "Generalisation",
    "def": "Widening a solution that works for one case so that it covers a whole family of cases of the same shape.",
    "course": "programming-computational-thinking",
    "section": "generalisation",
    "tags": [
      "generalisation"
    ]
  },
  {
    "term": "Family",
    "def": "The set of cases a general solution covers — every problem of the same shape as the one you solved.",
    "course": "programming-computational-thinking",
    "section": "generalisation",
    "tags": [
      "generalisation"
    ]
  },
  {
    "term": "Parameter",
    "def": "The part of a solution that varies between cases, lifted out so it can be supplied as a value.",
    "course": "programming-computational-thinking",
    "section": "generalisation",
    "tags": [
      "generalisation"
    ]
  },
  {
    "term": "Boundary",
    "def": "The point where a solution's family ends and a different solution is needed. Finding it is not a failure.",
    "course": "programming-computational-thinking",
    "section": "generalisation",
    "tags": [
      "generalisation"
    ]
  },
  {
    "term": "Over-generalisation",
    "def": "Generalising from too few cases, so you invent a parameter that no future case actually needs.",
    "course": "programming-computational-thinking",
    "section": "generalisation",
    "tags": [
      "generalisation"
    ]
  },
  {
    "term": "Reusable method",
    "def": "The moves themselves, generalised into a procedure that works on problems nobody has shown you yet.",
    "course": "programming-computational-thinking",
    "section": "generalisation",
    "tags": [
      "generalisation"
    ]
  },
  {
    "term": "Design",
    "def": "Deciding what the parts are, how they fit and in what order they run, before writing any of them.",
    "course": "programming-computational-thinking",
    "section": "together",
    "tags": [
      "together"
    ]
  },
  {
    "term": "Test case",
    "def": "A specific input with the output you expect, used to check that a solution actually works.",
    "course": "programming-computational-thinking",
    "section": "together",
    "tags": [
      "together"
    ]
  },
  {
    "term": "Edge case",
    "def": "An input at the boundary of what is allowed — empty, zero, the largest value — where solutions most often break.",
    "course": "programming-computational-thinking",
    "section": "together",
    "tags": [
      "together"
    ]
  },
  {
    "term": "Refinement",
    "def": "Going round the loop again with a better understanding, replacing a rough part with a sharper one.",
    "course": "programming-computational-thinking",
    "section": "together",
    "tags": [
      "together"
    ]
  },
  {
    "term": "Correctness",
    "def": "The property that a solution produces the required output for every allowed input, not just the ones you tried.",
    "course": "programming-computational-thinking",
    "section": "together",
    "tags": [
      "together"
    ]
  },
  {
    "term": "Decomposition in practice",
    "def": "Using the six moves together: split, spot the pattern, hide the detail, write the steps, judge the result, then generalise it.",
    "course": "programming-computational-thinking",
    "section": "together",
    "tags": [
      "together"
    ]
  },
  {
    "term": "Sorting",
    "def": "Rearranging a collection so its items are in a defined order — usually smallest to largest. It is the setup step that makes fast searching possible.",
    "course": "algorithms-problem-solving",
    "section": "sorting",
    "tags": [
      "sorting",
      "fundamentals"
    ]
  },
  {
    "term": "Selection sort",
    "def": "Repeatedly scan the unsorted part for the smallest remaining item and swap it into place. Simple, but it always does about $n^2/2$ comparisons.",
    "course": "algorithms-problem-solving",
    "section": "sorting",
    "tags": [
      "sorting",
      "algorithm"
    ]
  },
  {
    "term": "Insertion sort",
    "def": "Take the next item and slide it left until it sits in the right place, like sorting a hand of playing cards. Fast on nearly-sorted data.",
    "course": "algorithms-problem-solving",
    "section": "sorting",
    "tags": [
      "sorting",
      "algorithm"
    ]
  },
  {
    "term": "In-place sort",
    "def": "A sort that rearranges the items inside the original array, using only a constant amount of extra memory.",
    "course": "algorithms-problem-solving",
    "section": "sorting",
    "tags": [
      "sorting",
      "memory"
    ]
  },
  {
    "term": "Stable sort",
    "def": "A sort that keeps items with equal keys in their original relative order — important when you sort by one field after another.",
    "course": "algorithms-problem-solving",
    "section": "sorting",
    "tags": [
      "sorting",
      "property"
    ]
  },
  {
    "term": "Merge sort",
    "def": "Split the list in half, sort each half the same way, then merge the two sorted halves. Guaranteed $O(n \\log n)$ and the classic divide-and-conquer example.",
    "course": "algorithms-problem-solving",
    "section": "sorting",
    "tags": [
      "sorting",
      "algorithm"
    ]
  },
  {
    "term": "Merge",
    "def": "The combine step of merge sort: walk two sorted lists in parallel, always taking the smaller front item, until both are empty.",
    "course": "algorithms-problem-solving",
    "section": "sorting",
    "tags": [
      "sorting",
      "algorithm"
    ]
  },
  {
    "term": "Divide and conquer",
    "def": "A strategy that splits a problem into smaller copies of itself, solves those, then combines the results. Merge sort and binary search are both examples.",
    "course": "algorithms-problem-solving",
    "section": "sorting",
    "tags": [
      "method",
      "strategy"
    ]
  },
  {
    "term": "Searching",
    "def": "Looking through a collection for a particular item, or for the position where it belongs.",
    "course": "algorithms-problem-solving",
    "section": "searching",
    "tags": [
      "searching",
      "fundamentals"
    ]
  },
  {
    "term": "Linear search",
    "def": "Check every item from the start until you find the target or run out. Works on any list, sorted or not, but takes $O(n)$ time.",
    "course": "algorithms-problem-solving",
    "section": "searching",
    "tags": [
      "searching",
      "algorithm"
    ]
  },
  {
    "term": "Sentinel",
    "def": "A value placed at the end of a list so the search loop does not need a separate bounds check on every iteration.",
    "course": "algorithms-problem-solving",
    "section": "searching",
    "tags": [
      "searching",
      "technique"
    ]
  },
  {
    "term": "Binary search",
    "def": "Repeatedly halve a sorted range by comparing the target with the middle item. Finds any item in about $\\log_2 n$ steps.",
    "course": "algorithms-problem-solving",
    "section": "searching",
    "tags": [
      "searching",
      "algorithm"
    ]
  },
  {
    "term": "Sorted precondition",
    "def": "The requirement that the data is already in order. Binary search is meaningless without it — this is the most common bug in the algorithm.",
    "course": "algorithms-problem-solving",
    "section": "searching",
    "tags": [
      "searching",
      "correctness"
    ]
  },
  {
    "term": "Midpoint",
    "def": "The index halfway between the low and high ends of the current range, computed as low + (high - low) / 2 to avoid overflow.",
    "course": "algorithms-problem-solving",
    "section": "searching",
    "tags": [
      "searching",
      "technique"
    ]
  },
  {
    "term": "Search space",
    "def": "The set of positions that could still contain the answer. Every good search algorithm shrinks it as fast as it can.",
    "course": "algorithms-problem-solving",
    "section": "searching",
    "tags": [
      "searching",
      "method"
    ]
  },
  {
    "term": "Recursion",
    "def": "A function that solves a problem by calling itself on a smaller version of the same problem.",
    "course": "algorithms-problem-solving",
    "section": "recursion",
    "tags": [
      "recursion",
      "fundamentals"
    ]
  },
  {
    "term": "Base case",
    "def": "The input small enough that the answer is known directly, with no further calls. Without one, recursion never stops.",
    "course": "algorithms-problem-solving",
    "section": "recursion",
    "tags": [
      "recursion",
      "correctness"
    ]
  },
  {
    "term": "Recursive case",
    "def": "The branch that reduces the problem and calls the function again — the step that makes progress toward the base case.",
    "course": "algorithms-problem-solving",
    "section": "recursion",
    "tags": [
      "recursion",
      "structure"
    ]
  },
  {
    "term": "Call stack",
    "def": "The structure that records every function call still in progress, so the machine knows where to return when one finishes.",
    "course": "algorithms-problem-solving",
    "section": "recursion",
    "tags": [
      "recursion",
      "runtime"
    ]
  },
  {
    "term": "Stack frame",
    "def": "The block of memory holding one call's parameters, local variables and return address. Each recursive call adds a frame.",
    "course": "algorithms-problem-solving",
    "section": "recursion",
    "tags": [
      "recursion",
      "runtime"
    ]
  },
  {
    "term": "Stack overflow",
    "def": "The error you get when recursion goes too deep and the call stack runs out of room — usually a missing or unreachable base case.",
    "course": "algorithms-problem-solving",
    "section": "recursion",
    "tags": [
      "recursion",
      "errors"
    ]
  },
  {
    "term": "Tail recursion",
    "def": "A recursive call that is the very last thing the function does, which some languages can turn into a loop to save stack space.",
    "course": "algorithms-problem-solving",
    "section": "recursion",
    "tags": [
      "recursion",
      "optimisation"
    ]
  },
  {
    "term": "Algorithm",
    "def": "A finite, unambiguous sequence of steps that turns an input into an output. It must terminate, and every step must be doable.",
    "course": "algorithms-problem-solving",
    "section": "habits",
    "tags": [
      "fundamentals",
      "method"
    ]
  },
  {
    "term": "Pseudocode",
    "def": "A precise description of an algorithm written in plain language and indentation, with no language syntax to argue about.",
    "course": "algorithms-problem-solving",
    "section": "habits",
    "tags": [
      "method",
      "notation"
    ]
  },
  {
    "term": "Decomposition",
    "def": "Breaking a hard problem into smaller problems you already know how to solve, then solving those.",
    "course": "algorithms-problem-solving",
    "section": "habits",
    "tags": [
      "method",
      "strategy"
    ]
  },
  {
    "term": "Invariant",
    "def": "A statement that is true before and after every step of a loop. It is how you convince yourself an algorithm is correct.",
    "course": "algorithms-problem-solving",
    "section": "habits",
    "tags": [
      "method",
      "correctness"
    ]
  },
  {
    "term": "Trace",
    "def": "Running an algorithm by hand on a small input, writing down the state after each step, to see exactly where it goes wrong.",
    "course": "algorithms-problem-solving",
    "section": "habits",
    "tags": [
      "method",
      "debugging"
    ]
  },
  {
    "term": "Edge case",
    "def": "An input at the boundary of what the algorithm must handle — empty, one item, all equal, already sorted — where bugs hide.",
    "course": "algorithms-problem-solving",
    "section": "habits",
    "tags": [
      "method",
      "testing"
    ]
  },
  {
    "term": "Complexity",
    "def": "How an algorithm's cost grows as the input grows, written with big-O notation such as $O(n)$ or $O(n \\log n)$.",
    "course": "algorithms-problem-solving",
    "section": "together",
    "tags": [
      "analysis",
      "performance"
    ]
  },
  {
    "term": "Big-O notation",
    "def": "A way of describing an algorithm's growth rate while ignoring constants and small inputs — the shape of the curve, not its height.",
    "course": "algorithms-problem-solving",
    "section": "together",
    "tags": [
      "analysis",
      "performance"
    ]
  },
  {
    "term": "Trade-off",
    "def": "The cost you accept to get a benefit — sorting once to make every later search fast is the classic example.",
    "course": "algorithms-problem-solving",
    "section": "together",
    "tags": [
      "method",
      "strategy"
    ]
  },
  {
    "term": "Precomputation",
    "def": "Doing work up front so later queries are cheap. Sorting a list before searching it is precomputation.",
    "course": "algorithms-problem-solving",
    "section": "together",
    "tags": [
      "method",
      "performance"
    ]
  },
  {
    "term": "Time Complexity",
    "def": "How the runtime of an algorithm scales as the size of the input N grows.",
    "course": "big-o-complexity",
    "section": "growth",
    "tags": [
      "complexity",
      "cs"
    ]
  },
  {
    "term": "Step Count",
    "def": "The number of fundamental primitive operations executed by an algorithm as a function of input size.",
    "course": "big-o-complexity",
    "section": "growth",
    "tags": [
      "complexity",
      "algorithms"
    ]
  },
  {
    "term": "Asymptotic Analysis",
    "def": "Evaluating algorithm performance in the limit as input size N approaches infinity.",
    "course": "big-o-complexity",
    "section": "growth",
    "tags": [
      "math",
      "complexity"
    ]
  },
  {
    "term": "Order of Growth",
    "def": "The mathematical rate at which resource consumption increases as input size scales.",
    "course": "big-o-complexity",
    "section": "growth",
    "tags": [
      "complexity",
      "math"
    ]
  },
  {
    "term": "Big O Notation",
    "def": "A mathematical notation describing the upper bound of an algorithm's growth rate in the worst case.",
    "course": "big-o-complexity",
    "section": "notation",
    "tags": [
      "complexity",
      "math"
    ]
  },
  {
    "term": "Dominant Term",
    "def": "The highest-order mathematical term in a complexity polynomial that outgrows all other terms as N scales.",
    "course": "big-o-complexity",
    "section": "notation",
    "tags": [
      "complexity",
      "math"
    ]
  },
  {
    "term": "Constant Factors",
    "def": "Multiplicative or additive constants dropped in Big O because they do not change the rate of growth.",
    "course": "big-o-complexity",
    "section": "notation",
    "tags": [
      "complexity",
      "algorithms"
    ]
  },
  {
    "term": "O(1) Constant Time",
    "def": "An algorithm whose execution time remains identical regardless of input size N.",
    "course": "big-o-complexity",
    "section": "classes",
    "tags": [
      "complexity",
      "classes"
    ]
  },
  {
    "term": "O(log N) Logarithmic Time",
    "def": "An algorithm whose steps scale with the logarithm of N, typically halving the search space each step.",
    "course": "big-o-complexity",
    "section": "classes",
    "tags": [
      "complexity",
      "classes"
    ]
  },
  {
    "term": "O(N) Linear Time",
    "def": "An algorithm whose steps grow directly in direct proportion to input size N.",
    "course": "big-o-complexity",
    "section": "classes",
    "tags": [
      "complexity",
      "classes"
    ]
  },
  {
    "term": "O(N log N) Linearithmic Time",
    "def": "The optimal comparison sorting complexity achieved by merge sort and quicksort.",
    "course": "big-o-complexity",
    "section": "classes",
    "tags": [
      "complexity",
      "classes"
    ]
  },
  {
    "term": "O(N²) Quadratic Time",
    "def": "An algorithm whose work grows with the square of the input size, typically caused by nested loops.",
    "course": "big-o-complexity",
    "section": "classes",
    "tags": [
      "complexity",
      "classes"
    ]
  },
  {
    "term": "O(2^N) Exponential Time",
    "def": "An algorithm whose operations double with each added element, common in naive recursive search.",
    "course": "big-o-complexity",
    "section": "classes",
    "tags": [
      "complexity",
      "classes"
    ]
  },
  {
    "term": "Space Complexity",
    "def": "The amount of working memory an algorithm allocates as a function of input size N.",
    "course": "big-o-complexity",
    "section": "tradeoffs",
    "tags": [
      "complexity",
      "memory"
    ]
  },
  {
    "term": "Time-Space Trade-off",
    "def": "Sacrificing memory (e.g. hash table caches) to achieve faster execution speed, or vice versa.",
    "course": "big-o-complexity",
    "section": "tradeoffs",
    "tags": [
      "architecture",
      "complexity"
    ]
  },
  {
    "term": "Worst-Case Complexity",
    "def": "The maximum number of steps an algorithm can take across any possible input of size N.",
    "course": "big-o-complexity",
    "section": "tradeoffs",
    "tags": [
      "complexity",
      "analysis"
    ]
  },
  {
    "term": "Average-Case Complexity",
    "def": "The expected number of steps executed by an algorithm over a random distribution of inputs.",
    "course": "big-o-complexity",
    "section": "tradeoffs",
    "tags": [
      "complexity",
      "probability"
    ]
  },
  {
    "term": "Amortized Analysis",
    "def": "Averaging the execution cost of an operation over a long sequence, accounting for rare expensive spikes.",
    "course": "big-o-complexity",
    "section": "tradeoffs",
    "tags": [
      "complexity",
      "algorithms"
    ]
  },
  {
    "term": "Interpreter",
    "def": "The program that reads your .py file and executes it line by line, top to bottom. Python ships with one called python3.",
    "course": "python-fundamentals",
    "section": "syntax",
    "tags": [
      "tools",
      "fundamentals"
    ]
  },
  {
    "term": "REPL",
    "def": "Read–Eval–Print Loop — the interactive prompt you get by running python3 with no file. It evaluates one expression at a time and shows the result.",
    "course": "python-fundamentals",
    "section": "syntax",
    "tags": [
      "tools",
      "fundamentals"
    ]
  },
  {
    "term": "Expression",
    "def": "Any piece of code that produces a value, like 2 + 3 or len(\"cat\"). The interpreter evaluates it and hands back a result.",
    "course": "python-fundamentals",
    "section": "syntax",
    "tags": [
      "syntax",
      "fundamentals"
    ]
  },
  {
    "term": "Statement",
    "def": "A complete instruction the interpreter carries out, such as an assignment or a print call. Statements do things; expressions produce values.",
    "course": "python-fundamentals",
    "section": "syntax",
    "tags": [
      "syntax",
      "fundamentals"
    ]
  },
  {
    "term": "print()",
    "def": "The built-in function that writes its arguments to standard output. It is how a program shows you what it computed.",
    "course": "python-fundamentals",
    "section": "syntax",
    "tags": [
      "syntax",
      "output"
    ]
  },
  {
    "term": "Comment",
    "def": "Text after a # that Python ignores. Comments explain intent to humans; they are not executed.",
    "course": "python-fundamentals",
    "section": "syntax",
    "tags": [
      "syntax",
      "style"
    ]
  },
  {
    "term": "Variable",
    "def": "A name bound to a value. score = 10 makes score refer to the integer 10 until you rebind it.",
    "course": "python-fundamentals",
    "section": "syntax",
    "tags": [
      "names",
      "fundamentals"
    ]
  },
  {
    "term": "Assignment",
    "def": "The = statement that binds a name to a value. It is not a comparison — it stores the right-hand value under the left-hand name.",
    "course": "python-fundamentals",
    "section": "syntax",
    "tags": [
      "names",
      "syntax"
    ]
  },
  {
    "term": "Identifier",
    "def": "A legal name for a variable, function or module: letters, digits and underscores, not starting with a digit, and case-sensitive.",
    "course": "python-fundamentals",
    "section": "syntax",
    "tags": [
      "names",
      "syntax"
    ]
  },
  {
    "term": "Rebinding",
    "def": "Pointing an existing name at a different value. x = 1 then x = 2 leaves one name and two values, the second now current.",
    "course": "python-fundamentals",
    "section": "syntax",
    "tags": [
      "names",
      "fundamentals"
    ]
  },
  {
    "term": "Type",
    "def": "The kind of value something is — int, float, str, bool, list. The type decides what operations are legal.",
    "course": "python-fundamentals",
    "section": "types",
    "tags": [
      "types",
      "fundamentals"
    ]
  },
  {
    "term": "int",
    "def": "An arbitrary-precision whole number. Python integers never overflow; they grow as large as memory allows.",
    "course": "python-fundamentals",
    "section": "types",
    "tags": [
      "types",
      "numbers"
    ]
  },
  {
    "term": "float",
    "def": "A double-precision floating-point number, stored as IEEE-754 binary. It cannot represent most decimal fractions exactly.",
    "course": "python-fundamentals",
    "section": "types",
    "tags": [
      "types",
      "numbers"
    ]
  },
  {
    "term": "bool",
    "def": "The type with exactly two values, True and False. It is a subtype of int, where True == 1.",
    "course": "python-fundamentals",
    "section": "types",
    "tags": [
      "types",
      "logic"
    ]
  },
  {
    "term": "None",
    "def": "The single value of type NoneType, meaning \"no value here\". Functions that return nothing return None.",
    "course": "python-fundamentals",
    "section": "types",
    "tags": [
      "types",
      "fundamentals"
    ]
  },
  {
    "term": "type()",
    "def": "The built-in that reports a value's type, e.g. type(3.0) is &lt;class 'float'&gt;. Your first debugging tool.",
    "course": "python-fundamentals",
    "section": "types",
    "tags": [
      "types",
      "tools"
    ]
  },
  {
    "term": "Type conversion",
    "def": "Turning a value of one type into another with int(), float() or str(). It copies and reinterprets, it does not mutate.",
    "course": "python-fundamentals",
    "section": "types",
    "tags": [
      "types",
      "conversion"
    ]
  },
  {
    "term": "String",
    "def": "An immutable sequence of Unicode characters, written between quotes. \"cat\" and 'cat' are the same value.",
    "course": "python-fundamentals",
    "section": "types",
    "tags": [
      "types",
      "text"
    ]
  },
  {
    "term": "f-string",
    "def": "A string prefixed with f whose {…} holes are replaced by the values of the expressions inside them.",
    "course": "python-fundamentals",
    "section": "types",
    "tags": [
      "types",
      "text"
    ]
  },
  {
    "term": "Index",
    "def": "The position of an item in a sequence, counted from 0. Negative indices count back from the end, so -1 is the last item.",
    "course": "python-fundamentals",
    "section": "types",
    "tags": [
      "sequences",
      "fundamentals"
    ]
  },
  {
    "term": "Slice",
    "def": "A sub-sequence taken with [start:stop]. The start is included and the stop is excluded, so s[0:2] gives two items.",
    "course": "python-fundamentals",
    "section": "types",
    "tags": [
      "sequences",
      "syntax"
    ]
  },
  {
    "term": "List",
    "def": "An ordered, mutable sequence written with square brackets. You can change, add and remove items after creating it.",
    "course": "python-fundamentals",
    "section": "types",
    "tags": [
      "types",
      "sequences"
    ]
  },
  {
    "term": "Mutation",
    "def": "Changing an object in place, as items.append(4) does. The object keeps its identity; only its contents change.",
    "course": "python-fundamentals",
    "section": "types",
    "tags": [
      "sequences",
      "fundamentals"
    ]
  },
  {
    "term": "Condition",
    "def": "An expression the interpreter evaluates to decide which branch to take. Any value works; truthiness decides the outcome.",
    "course": "python-fundamentals",
    "section": "control",
    "tags": [
      "logic",
      "control"
    ]
  },
  {
    "term": "if statement",
    "def": "The construct that runs a block only when its condition is true: if x &gt; 0: followed by an indented block.",
    "course": "python-fundamentals",
    "section": "control",
    "tags": [
      "control",
      "syntax"
    ]
  },
  {
    "term": "elif",
    "def": "A follow-up branch tested only when every earlier condition was false. It lets one chain express several mutually exclusive cases.",
    "course": "python-fundamentals",
    "section": "control",
    "tags": [
      "control",
      "syntax"
    ]
  },
  {
    "term": "else",
    "def": "The final branch of an if chain, run when no earlier condition matched. It takes no condition of its own.",
    "course": "python-fundamentals",
    "section": "control",
    "tags": [
      "control",
      "syntax"
    ]
  },
  {
    "term": "Truthiness",
    "def": "How non-boolean values behave in a condition: 0, 0.0, \"\", [] and None are falsy; almost everything else is truthy.",
    "course": "python-fundamentals",
    "section": "control",
    "tags": [
      "logic",
      "control"
    ]
  },
  {
    "term": "Comparison operator",
    "def": "An operator that produces a boolean: ==, !=, &lt;, &lt;=, &gt;, &gt;=. Note == compares, = assigns.",
    "course": "python-fundamentals",
    "section": "control",
    "tags": [
      "logic",
      "operators"
    ]
  },
  {
    "term": "Boolean operator",
    "def": "and, or and not. They combine conditions and short-circuit: and stops at the first falsy value.",
    "course": "python-fundamentals",
    "section": "control",
    "tags": [
      "logic",
      "operators"
    ]
  },
  {
    "term": "for loop",
    "def": "The loop that walks a sequence, binding the loop variable to each item in turn: for item in items:.",
    "course": "python-fundamentals",
    "section": "control",
    "tags": [
      "control",
      "loops"
    ]
  },
  {
    "term": "while loop",
    "def": "The loop that repeats as long as its condition stays true. Use it when you do not know the number of repetitions in advance.",
    "course": "python-fundamentals",
    "section": "control",
    "tags": [
      "control",
      "loops"
    ]
  },
  {
    "term": "range()",
    "def": "The built-in that produces a lazy sequence of integers, commonly used to repeat a block a fixed number of times.",
    "course": "python-fundamentals",
    "section": "control",
    "tags": [
      "control",
      "loops"
    ]
  },
  {
    "term": "Iteration",
    "def": "One pass through the body of a loop. A loop that runs five times performs five iterations.",
    "course": "python-fundamentals",
    "section": "control",
    "tags": [
      "control",
      "loops"
    ]
  },
  {
    "term": "break",
    "def": "The statement that leaves the innermost loop immediately, skipping any remaining iterations and the loop's else clause.",
    "course": "python-fundamentals",
    "section": "control",
    "tags": [
      "control",
      "loops"
    ]
  },
  {
    "term": "continue",
    "def": "The statement that skips the rest of the current iteration and jumps straight to the next one.",
    "course": "python-fundamentals",
    "section": "control",
    "tags": [
      "control",
      "loops"
    ]
  },
  {
    "term": "Function",
    "def": "A named block of code you can call by name, optionally passing values in and getting a value back out.",
    "course": "python-fundamentals",
    "section": "functions",
    "tags": [
      "functions",
      "fundamentals"
    ]
  },
  {
    "term": "def",
    "def": "The keyword that defines a function: def greet(name): followed by an indented body. Defining does not run the body.",
    "course": "python-fundamentals",
    "section": "functions",
    "tags": [
      "functions",
      "syntax"
    ]
  },
  {
    "term": "Parameter",
    "def": "A name in a function's definition that receives an argument when the function is called. name in def greet(name) is a parameter.",
    "course": "python-fundamentals",
    "section": "functions",
    "tags": [
      "functions",
      "syntax"
    ]
  },
  {
    "term": "Argument",
    "def": "The actual value you pass at the call site. In greet(\"Ada\"), the string \"Ada\" is the argument.",
    "course": "python-fundamentals",
    "section": "functions",
    "tags": [
      "functions",
      "syntax"
    ]
  },
  {
    "term": "return",
    "def": "The statement that ends a function and hands a value back to the caller. A function with no return gives back None.",
    "course": "python-fundamentals",
    "section": "functions",
    "tags": [
      "functions",
      "syntax"
    ]
  },
  {
    "term": "Docstring",
    "def": "A string literal as the first line of a function body, describing what the function does. Tools and help() read it.",
    "course": "python-fundamentals",
    "section": "functions",
    "tags": [
      "functions",
      "style"
    ]
  },
  {
    "term": "Default argument",
    "def": "A parameter value used when the caller omits it: def greet(name=\"world\"). Defaults are evaluated once, at definition time.",
    "course": "python-fundamentals",
    "section": "functions",
    "tags": [
      "functions",
      "syntax"
    ]
  },
  {
    "term": "Keyword argument",
    "def": "An argument passed by parameter name, as in greet(name=\"Ada\"). It makes call sites readable and order-independent.",
    "course": "python-fundamentals",
    "section": "functions",
    "tags": [
      "functions",
      "syntax"
    ]
  },
  {
    "term": "Scope",
    "def": "The region of a program where a name is visible. Python resolves names with the LEGB rule: Local, Enclosing, Global, Built-in.",
    "course": "python-fundamentals",
    "section": "functions",
    "tags": [
      "scope",
      "fundamentals"
    ]
  },
  {
    "term": "Local variable",
    "def": "A name assigned inside a function. It exists only while that call runs and disappears when the function returns.",
    "course": "python-fundamentals",
    "section": "functions",
    "tags": [
      "scope",
      "functions"
    ]
  },
  {
    "term": "Global variable",
    "def": "A name assigned at the top level of a module. Functions can read it freely but must declare global to rebind it.",
    "course": "python-fundamentals",
    "section": "functions",
    "tags": [
      "scope",
      "functions"
    ]
  },
  {
    "term": "Mutable default",
    "def": "A default argument that is a list or dict — a classic bug, because the same object is reused across every call that omits it.",
    "course": "python-fundamentals",
    "section": "functions",
    "tags": [
      "scope",
      "pitfalls"
    ]
  },
  {
    "term": "Module",
    "def": "A single .py file whose top-level names other files can import. Every Python file is already a module.",
    "course": "python-fundamentals",
    "section": "modules",
    "tags": [
      "modules",
      "fundamentals"
    ]
  },
  {
    "term": "import",
    "def": "The statement that loads a module and binds its name in the current file: import math then math.sqrt(2).",
    "course": "python-fundamentals",
    "section": "modules",
    "tags": [
      "modules",
      "syntax"
    ]
  },
  {
    "term": "from … import",
    "def": "A form that binds selected names directly: from math import sqrt lets you call sqrt(2) without the prefix.",
    "course": "python-fundamentals",
    "section": "modules",
    "tags": [
      "modules",
      "syntax"
    ]
  },
  {
    "term": "Standard library",
    "def": "The large set of modules that ships with Python — math, random, json, pathlib and hundreds more. No install needed.",
    "course": "python-fundamentals",
    "section": "modules",
    "tags": [
      "modules",
      "tools"
    ]
  },
  {
    "term": "Package",
    "def": "A directory of modules with an __init__.py, imported with dotted names like os.path. Packages group related modules.",
    "course": "python-fundamentals",
    "section": "modules",
    "tags": [
      "modules",
      "structure"
    ]
  },
  {
    "term": "Namespace",
    "def": "The mapping from names to objects that a module provides. Importing keeps each module's names separate, which prevents collisions.",
    "course": "python-fundamentals",
    "section": "modules",
    "tags": [
      "modules",
      "scope"
    ]
  },
  {
    "term": "__name__",
    "def": "A module-level variable holding the module's name. It equals \"__main__\" only when the file is run directly, not imported.",
    "course": "python-fundamentals",
    "section": "modules",
    "tags": [
      "modules",
      "idioms"
    ]
  },
  {
    "term": "if __name__ == \"__main__\"",
    "def": "The idiom that guards code so it runs only when the file is executed directly, not when it is imported as a module.",
    "course": "python-fundamentals",
    "section": "modules",
    "tags": [
      "modules",
      "idioms"
    ]
  },
  {
    "term": "PEP 8",
    "def": "The official style guide for Python code: four-space indents, snake_case names, two blank lines between top-level definitions.",
    "course": "python-fundamentals",
    "section": "together",
    "tags": [
      "style",
      "conventions"
    ]
  },
  {
    "term": "Indentation",
    "def": "The leading whitespace that defines a block in Python. It is syntax, not decoration — inconsistent indentation is an error.",
    "course": "python-fundamentals",
    "section": "together",
    "tags": [
      "syntax",
      "style"
    ]
  },
  {
    "term": "Traceback",
    "def": "The error report Python prints when a program fails: the exception type, message, and the call stack that led to it.",
    "course": "python-fundamentals",
    "section": "together",
    "tags": [
      "errors",
      "tools"
    ]
  },
  {
    "term": "Exception",
    "def": "An error signalled at runtime, like ValueError or TypeError. Unhandled, it stops the program and prints a traceback.",
    "course": "python-fundamentals",
    "section": "together",
    "tags": [
      "errors",
      "fundamentals"
    ]
  },
  {
    "term": "Duck typing",
    "def": "The Python habit of caring about what an object can do, not what class it is: if it walks and quacks, treat it as a duck.",
    "course": "python-fundamentals",
    "section": "together",
    "tags": [
      "types",
      "design"
    ]
  },
  {
    "term": "Immutability",
    "def": "The property of values that cannot change after creation — numbers, strings and tuples. Rebinding a name is not mutation.",
    "course": "python-fundamentals",
    "section": "together",
    "tags": [
      "types",
      "fundamentals"
    ]
  },
  {
    "term": "Exception",
    "def": "An object Python creates when something goes wrong at runtime. It carries a type, a message, and a traceback.",
    "course": "python-errors-exceptions",
    "section": "tracebacks",
    "tags": [
      "errors",
      "runtime"
    ]
  },
  {
    "term": "Syntax error",
    "def": "A failure before the program runs at all: Python cannot parse the file, so nothing executes.",
    "course": "python-errors-exceptions",
    "section": "tracebacks",
    "tags": [
      "errors",
      "parsing"
    ]
  },
  {
    "term": "Runtime error",
    "def": "A failure while the program is running, raised as an exception at the exact line that could not complete.",
    "course": "python-errors-exceptions",
    "section": "tracebacks",
    "tags": [
      "errors",
      "runtime"
    ]
  },
  {
    "term": "Traceback",
    "def": "The report Python prints when an exception escapes: the call stack from the entry point down to the failing line.",
    "course": "python-errors-exceptions",
    "section": "tracebacks",
    "tags": [
      "traceback",
      "debugging"
    ]
  },
  {
    "term": "Call stack",
    "def": "The chain of function calls currently in progress. Each frame is one function waiting for the one it called.",
    "course": "python-errors-exceptions",
    "section": "tracebacks",
    "tags": [
      "traceback",
      "runtime"
    ]
  },
  {
    "term": "Frame",
    "def": "One entry in a traceback: a file, a line number, the function name, and the source line that was executing.",
    "course": "python-errors-exceptions",
    "section": "tracebacks",
    "tags": [
      "traceback",
      "runtime"
    ]
  },
  {
    "term": "Exception message",
    "def": "The human-readable text after the exception type on the last line of a traceback, describing what specifically went wrong.",
    "course": "python-errors-exceptions",
    "section": "tracebacks",
    "tags": [
      "traceback",
      "debugging"
    ]
  },
  {
    "term": "try",
    "def": "The block that holds code which might raise. Python watches it and hands control to a matching except if it does.",
    "course": "python-errors-exceptions",
    "section": "catching",
    "tags": [
      "try",
      "syntax"
    ]
  },
  {
    "term": "except",
    "def": "The block that handles a specific exception type. Only the first matching clause runs.",
    "course": "python-errors-exceptions",
    "section": "catching",
    "tags": [
      "except",
      "syntax"
    ]
  },
  {
    "term": "else",
    "def": "An optional block after except that runs only when the try block finished with no exception.",
    "course": "python-errors-exceptions",
    "section": "catching",
    "tags": [
      "else",
      "syntax"
    ]
  },
  {
    "term": "finally",
    "def": "A block that always runs — whether the try succeeded, raised, or returned. Used for cleanup.",
    "course": "python-errors-exceptions",
    "section": "catching",
    "tags": [
      "finally",
      "cleanup"
    ]
  },
  {
    "term": "Bare except",
    "def": "An except: with no type. It catches everything, including KeyboardInterrupt, and hides real bugs.",
    "course": "python-errors-exceptions",
    "section": "catching",
    "tags": [
      "except",
      "antipattern"
    ]
  },
  {
    "term": "Exception chaining",
    "def": "Linking a new exception to the one that caused it with raise ... from ..., so the original cause is not lost.",
    "course": "python-errors-exceptions",
    "section": "catching",
    "tags": [
      "raise",
      "debugging"
    ]
  },
  {
    "term": "Re-raise",
    "def": "Catching an exception, doing something useful, then raising it again with a bare raise so it keeps propagating.",
    "course": "python-errors-exceptions",
    "section": "catching",
    "tags": [
      "raise",
      "except"
    ]
  },
  {
    "term": "raise",
    "def": "The statement that creates an exception and starts it propagating up the call stack.",
    "course": "python-errors-exceptions",
    "section": "raising",
    "tags": [
      "raise",
      "syntax"
    ]
  },
  {
    "term": "Fail fast",
    "def": "Detecting a bad state at the moment it appears and raising immediately, rather than letting it corrupt later work.",
    "course": "python-errors-exceptions",
    "section": "raising",
    "tags": [
      "design",
      "raising"
    ]
  },
  {
    "term": "Guard clause",
    "def": "An early check at the top of a function that raises when its inputs are invalid, keeping the main body clean.",
    "course": "python-errors-exceptions",
    "section": "raising",
    "tags": [
      "design",
      "raising"
    ]
  },
  {
    "term": "Built-in exception",
    "def": "One of Python's ready-made exception types — ValueError, TypeError, KeyError, FileNotFoundError and friends.",
    "course": "python-errors-exceptions",
    "section": "raising",
    "tags": [
      "raise",
      "types"
    ]
  },
  {
    "term": "Custom exception",
    "def": "A class you define, usually subclassing Exception, so callers can catch your failure by name.",
    "course": "python-errors-exceptions",
    "section": "raising",
    "tags": [
      "types",
      "design"
    ]
  },
  {
    "term": "Exception hierarchy",
    "def": "The tree of exception classes rooted at BaseException. Catching a parent catches every descendant.",
    "course": "python-errors-exceptions",
    "section": "raising",
    "tags": [
      "types",
      "design"
    ]
  },
  {
    "term": "Exception group",
    "def": "A single exception that wraps several others, raised together with except* in Python 3.11 and later.",
    "course": "python-errors-exceptions",
    "section": "raising",
    "tags": [
      "types",
      "modern"
    ]
  },
  {
    "term": "Error message",
    "def": "The text a human reads when something fails. A good one names the value, the expectation, and the fix.",
    "course": "python-errors-exceptions",
    "section": "design",
    "tags": [
      "design",
      "messages"
    ]
  },
  {
    "term": "Look before you leap",
    "def": "Checking conditions before acting (if key in d). The alternative is asking forgiveness afterwards.",
    "course": "python-errors-exceptions",
    "section": "design",
    "tags": [
      "design",
      "style"
    ]
  },
  {
    "term": "Easier to ask forgiveness",
    "def": "The EAFP style: just try the operation and catch the exception if it fails. Often shorter and race-free.",
    "course": "python-errors-exceptions",
    "section": "design",
    "tags": [
      "design",
      "style"
    ]
  },
  {
    "term": "Silent failure",
    "def": "Swallowing an exception with pass so the program continues with wrong data and no warning. Almost always a bug.",
    "course": "python-errors-exceptions",
    "section": "design",
    "tags": [
      "design",
      "antipattern"
    ]
  },
  {
    "term": "Logging",
    "def": "Recording what happened, including the traceback, so a failure can be diagnosed after the fact without a debugger.",
    "course": "python-errors-exceptions",
    "section": "design",
    "tags": [
      "design",
      "observability"
    ]
  },
  {
    "term": "assert",
    "def": "A statement that raises AssertionError if a condition is false. For internal invariants, not user input.",
    "course": "python-errors-exceptions",
    "section": "design",
    "tags": [
      "design",
      "checks"
    ]
  },
  {
    "term": "Error boundary",
    "def": "A single place in a program where exceptions are caught and turned into a clean outcome, so the rest of the code stays simple.",
    "course": "python-errors-exceptions",
    "section": "together",
    "tags": [
      "design",
      "architecture"
    ]
  },
  {
    "term": "Retry",
    "def": "Catching a transient failure and attempting the operation again, usually with a delay and a maximum attempt count.",
    "course": "python-errors-exceptions",
    "section": "together",
    "tags": [
      "design",
      "resilience"
    ]
  },
  {
    "term": "Cleanup",
    "def": "Releasing resources — files, connections, locks — whether the work succeeded or failed. finally and with do this.",
    "course": "python-errors-exceptions",
    "section": "together",
    "tags": [
      "design",
      "resources"
    ]
  },
  {
    "term": "Context manager",
    "def": "An object used with with that guarantees setup and teardown, running cleanup even when an exception escapes.",
    "course": "python-errors-exceptions",
    "section": "together",
    "tags": [
      "design",
      "resources"
    ]
  },
  {
    "term": "Scientific debugging",
    "def": "A structured process of observing a defect, proposing a falsifiable hypothesis, and testing it with experiments.",
    "course": "debugging-code",
    "section": "mindset",
    "tags": [
      "method",
      "mindset"
    ]
  },
  {
    "term": "Defect",
    "def": "An error in source code logic or data representation that can lead to incorrect state.",
    "course": "debugging-code",
    "section": "mindset",
    "tags": [
      "fundamentals"
    ]
  },
  {
    "term": "Infection",
    "def": "Corrupted program state resulting from a defect during program execution.",
    "course": "debugging-code",
    "section": "mindset",
    "tags": [
      "state"
    ]
  },
  {
    "term": "Failure",
    "def": "The visible incorrect behavior or crash that occurs when an infection reaches output.",
    "course": "debugging-code",
    "section": "mindset",
    "tags": [
      "runtime"
    ]
  },
  {
    "term": "Minimal reproduction",
    "def": "The smallest script and simplest input guaranteed to trigger a software failure.",
    "course": "debugging-code",
    "section": "isolation",
    "tags": [
      "testing",
      "technique"
    ]
  },
  {
    "term": "Delta debugging",
    "def": "Systematically halving inputs or configurations to find the minimal difference causing a failure.",
    "course": "debugging-code",
    "section": "isolation",
    "tags": [
      "strategy"
    ]
  },
  {
    "term": "Git bisect",
    "def": "A tool using binary search across commit history to pinpoint which change introduced a bug.",
    "course": "debugging-code",
    "section": "isolation",
    "tags": [
      "tools",
      "git"
    ]
  },
  {
    "term": "Flaky bug",
    "def": "A defect whose symptoms appear intermittently due to timing, concurrency, or uninitialised state.",
    "course": "debugging-code",
    "section": "isolation",
    "tags": [
      "defects"
    ]
  },
  {
    "term": "Traceback",
    "def": "A stack report showing active function calls at the moment an unhandled exception occurred.",
    "course": "debugging-code",
    "section": "inspection",
    "tags": [
      "errors",
      "runtime"
    ]
  },
  {
    "term": "Call stack frame",
    "def": "A memory record holding the local variables and instruction pointer of one function invocation.",
    "course": "debugging-code",
    "section": "inspection",
    "tags": [
      "runtime"
    ]
  },
  {
    "term": "Breakpoint",
    "def": "An intentional pause marker placed in code that halts execution to allow state inspection.",
    "course": "debugging-code",
    "section": "inspection",
    "tags": [
      "debugger",
      "tools"
    ]
  },
  {
    "term": "Watchpoint",
    "def": "A debugger trigger that halts execution whenever a specific memory address or variable changes value.",
    "course": "debugging-code",
    "section": "inspection",
    "tags": [
      "debugger"
    ]
  },
  {
    "term": "Root cause",
    "def": "The underlying fundamental flaw in design or logic that originated the faulty behavior.",
    "course": "debugging-code",
    "section": "resolution",
    "tags": [
      "analysis"
    ]
  },
  {
    "term": "Symptom masking",
    "def": "Modifying code to hide visible errors without addressing the faulty internal condition.",
    "course": "debugging-code",
    "section": "resolution",
    "tags": [
      "anti-pattern"
    ]
  },
  {
    "term": "Regression test",
    "def": "An automated test asserting that an identified defect remains fixed in future releases.",
    "course": "debugging-code",
    "section": "resolution",
    "tags": [
      "testing",
      "prevention"
    ]
  },
  {
    "term": "Post-mortem",
    "def": "A blameless engineering review documenting how a defect happened and how to prevent similar issues.",
    "course": "debugging-code",
    "section": "resolution",
    "tags": [
      "process"
    ]
  },
  {
    "term": "Entry point",
    "def": "The initial function or file where an operating system or server passes control to user code.",
    "course": "reading-code",
    "section": "orientation",
    "tags": [
      "architecture"
    ]
  },
  {
    "term": "Manifest file",
    "def": "A metadata file (like package.json or pyproject.toml) listing project dependencies, scripts, and configuration.",
    "course": "reading-code",
    "section": "orientation",
    "tags": [
      "project"
    ]
  },
  {
    "term": "Cognitive load",
    "def": "The amount of working memory used while trying to parse and understand complex syntax.",
    "course": "reading-code",
    "section": "orientation",
    "tags": [
      "theory"
    ]
  },
  {
    "term": "Top-down reading",
    "def": "Beginning at high-level architecture before examining granular line-by-line mechanics.",
    "course": "reading-code",
    "section": "orientation",
    "tags": [
      "technique"
    ]
  },
  {
    "term": "Data lifecycle",
    "def": "The sequence of transformations a payload undergoes from ingress, to business logic, to storage.",
    "course": "reading-code",
    "section": "data-flow",
    "tags": [
      "data"
    ]
  },
  {
    "term": "Call hierarchy",
    "def": "The tree structure of caller functions and their downstream callees across files.",
    "course": "reading-code",
    "section": "data-flow",
    "tags": [
      "navigation"
    ]
  },
  {
    "term": "Call site",
    "def": "The exact line of code where a function or method invocation occurs.",
    "course": "reading-code",
    "section": "data-flow",
    "tags": [
      "code"
    ]
  },
  {
    "term": "Seam",
    "def": "A boundary in code where behavior can be observed or altered without modifying the calling source.",
    "course": "reading-code",
    "section": "data-flow",
    "tags": [
      "architecture"
    ]
  },
  {
    "term": "Mental model",
    "def": "An internal conceptual simulation of how software subsystems behave and interact.",
    "course": "reading-code",
    "section": "mental-models",
    "tags": [
      "cognition"
    ]
  },
  {
    "term": "Executable specification",
    "def": "An automated test suite that demonstrates precisely what behavior code is expected to produce.",
    "course": "reading-code",
    "section": "mental-models",
    "tags": [
      "testing"
    ]
  },
  {
    "term": "Skimming",
    "def": "Rapidly scanning code structure, types, and comments to gain broad context without reading every statement.",
    "course": "reading-code",
    "section": "mental-models",
    "tags": [
      "reading"
    ]
  },
  {
    "term": "Deep reading",
    "def": "Meticulous line-by-line analysis of a specific critical function or security algorithm.",
    "course": "reading-code",
    "section": "mental-models",
    "tags": [
      "reading"
    ]
  },
  {
    "term": "Domain model",
    "def": "The collection of classes, entities, and business rules reflecting the real-world problem being solved.",
    "course": "reading-code",
    "section": "conventions",
    "tags": [
      "domain"
    ]
  },
  {
    "term": "Naming convention",
    "def": "A standardized pattern for naming variables, files, and classes that communicates their purpose.",
    "course": "reading-code",
    "section": "conventions",
    "tags": [
      "clean-code"
    ]
  },
  {
    "term": "Spaghetti code",
    "def": "Software with tangled, highly-coupled control flow that resists straightforward linear tracing.",
    "course": "reading-code",
    "section": "conventions",
    "tags": [
      "anti-pattern"
    ]
  },
  {
    "term": "Architecture diagram",
    "def": "A visual schematic depicting services, database connections, and primary communication flows.",
    "course": "reading-code",
    "section": "conventions",
    "tags": [
      "documentation"
    ]
  },
  {
    "term": "Version control",
    "def": "A system that records changes to files over time so you can read, compare, and restore any earlier state.",
    "course": "git-version-control",
    "section": "basics",
    "tags": [
      "fundamentals"
    ]
  },
  {
    "term": "Commit",
    "def": "A recorded snapshot of the whole project at one moment, together with its metadata and message.",
    "course": "git-version-control",
    "section": "basics",
    "tags": [
      "fundamentals"
    ]
  },
  {
    "term": "Snapshot",
    "def": "Git's model of a commit: a complete picture of all tracked files, not a list of changes.",
    "course": "git-version-control",
    "section": "basics",
    "tags": [
      "fundamentals"
    ]
  },
  {
    "term": "Commit message",
    "def": "The human-readable line explaining what a commit changed and why, written in the imperative mood.",
    "course": "git-version-control",
    "section": "basics",
    "tags": [
      "fundamentals"
    ]
  },
  {
    "term": "Repository",
    "def": "A folder that Git tracks, identified by the hidden .git directory inside it.",
    "course": "git-version-control",
    "section": "basics",
    "tags": [
      "fundamentals"
    ]
  },
  {
    "term": "git init",
    "def": "The command that turns an ordinary folder into a repository by creating the .git directory.",
    "course": "git-version-control",
    "section": "basics",
    "tags": [
      "commands"
    ]
  },
  {
    "term": "git add",
    "def": "The command that moves changes from the working tree into the staging area.",
    "course": "git-version-control",
    "section": "basics",
    "tags": [
      "commands"
    ]
  },
  {
    "term": "git commit",
    "def": "The command that records the staged changes as a new snapshot in the repository.",
    "course": "git-version-control",
    "section": "basics",
    "tags": [
      "commands"
    ]
  },
  {
    "term": "Working tree",
    "def": "The set of files on disk that you actually edit in your editor.",
    "course": "git-version-control",
    "section": "history",
    "tags": [
      "model"
    ]
  },
  {
    "term": "Staging area",
    "def": "The holding pen of changes chosen for the next commit; also called the index.",
    "course": "git-version-control",
    "section": "history",
    "tags": [
      "model"
    ]
  },
  {
    "term": "Index",
    "def": "Another name for the staging area — the middle tree between your files and the history.",
    "course": "git-version-control",
    "section": "history",
    "tags": [
      "model"
    ]
  },
  {
    "term": "Three trees",
    "def": "The working tree, the staging area, and the repository: the three places a change can live.",
    "course": "git-version-control",
    "section": "history",
    "tags": [
      "model"
    ]
  },
  {
    "term": "git status",
    "def": "The command that reports which tree each of your changes currently lives in.",
    "course": "git-version-control",
    "section": "history",
    "tags": [
      "commands"
    ]
  },
  {
    "term": "git diff",
    "def": "The command that compares two states; by default the working tree against the index.",
    "course": "git-version-control",
    "section": "history",
    "tags": [
      "commands"
    ]
  },
  {
    "term": "git log",
    "def": "The command that prints the commit history, newest first.",
    "course": "git-version-control",
    "section": "history",
    "tags": [
      "commands"
    ]
  },
  {
    "term": "git show",
    "def": "The command that expands a single commit, printing its metadata and its exact changes.",
    "course": "git-version-control",
    "section": "history",
    "tags": [
      "commands"
    ]
  },
  {
    "term": "Commit id",
    "def": "The unique hash derived from a commit's contents, used to refer to that snapshot.",
    "course": "git-version-control",
    "section": "history",
    "tags": [
      "model"
    ]
  },
  {
    "term": "HEAD",
    "def": "A name for the commit you are currently on — normally the tip of your current branch.",
    "course": "git-version-control",
    "section": "history",
    "tags": [
      "model"
    ]
  },
  {
    "term": "Branch",
    "def": "A movable pointer to a commit; creating one copies no files.",
    "course": "git-version-control",
    "section": "branching",
    "tags": [
      "branching"
    ]
  },
  {
    "term": "git switch",
    "def": "The command that moves you onto another branch; -c creates one first.",
    "course": "git-version-control",
    "section": "branching",
    "tags": [
      "commands"
    ]
  },
  {
    "term": "git branch",
    "def": "The command that lists your branches and marks the one you are on.",
    "course": "git-version-control",
    "section": "branching",
    "tags": [
      "commands"
    ]
  },
  {
    "term": "Merge",
    "def": "The act of combining the commits of one branch into another.",
    "course": "git-version-control",
    "section": "branching",
    "tags": [
      "branching"
    ]
  },
  {
    "term": "Fast-forward",
    "def": "A merge that only slides the branch pointer forward because the target had not moved.",
    "course": "git-version-control",
    "section": "branching",
    "tags": [
      "branching"
    ]
  },
  {
    "term": "Merge commit",
    "def": "A commit with two parents that joins two lines of history together.",
    "course": "git-version-control",
    "section": "branching",
    "tags": [
      "branching"
    ]
  },
  {
    "term": "Merge conflict",
    "def": "The state Git enters when both branches changed the same lines and a human must choose.",
    "course": "git-version-control",
    "section": "branching",
    "tags": [
      "branching"
    ]
  },
  {
    "term": "git restore",
    "def": "The command that discards working-tree edits, or with --staged unstages a file.",
    "course": "git-version-control",
    "section": "recovery",
    "tags": [
      "commands"
    ]
  },
  {
    "term": "git revert",
    "def": "The command that undoes an earlier commit by adding a new commit, preserving history.",
    "course": "git-version-control",
    "section": "recovery",
    "tags": [
      "commands"
    ]
  },
  {
    "term": "git reset",
    "def": "The command that moves the branch pointer backwards, rewriting history.",
    "course": "git-version-control",
    "section": "recovery",
    "tags": [
      "commands"
    ]
  },
  {
    "term": "Reflog",
    "def": "Git's record of everywhere HEAD has been, used to recover commits you reset away.",
    "course": "git-version-control",
    "section": "recovery",
    "tags": [
      "recovery"
    ]
  },
  {
    "term": "Feature branch",
    "def": "A short-lived branch created to develop one change in isolation from the main line.",
    "course": "git-version-control",
    "section": "together",
    "tags": [
      "workflow"
    ]
  },
  {
    "term": "Remote",
    "def": "Another copy of the same repository, hosted somewhere your team can reach.",
    "course": "git-version-control",
    "section": "together",
    "tags": [
      "workflow"
    ]
  },
  {
    "term": "git push",
    "def": "The command that sends your local commits to a remote repository.",
    "course": "git-version-control",
    "section": "together",
    "tags": [
      "commands"
    ]
  },
  {
    "term": "git pull",
    "def": "The command that fetches commits from a remote and integrates them into your branch.",
    "course": "git-version-control",
    "section": "together",
    "tags": [
      "commands"
    ]
  },
  {
    "term": "Pull request",
    "def": "A request to merge one branch into another, wrapped in a place to review and discuss it.",
    "course": "git-version-control",
    "section": "together",
    "tags": [
      "workflow"
    ]
  },
  {
    "term": "Working directory",
    "def": "The current folder context in which a shell session resolves relative file paths.",
    "course": "command-line-shell",
    "section": "filesystem",
    "tags": [
      "filesystem"
    ]
  },
  {
    "term": "Absolute path",
    "def": "A complete path specification starting from the filesystem root slash.",
    "course": "command-line-shell",
    "section": "filesystem",
    "tags": [
      "filesystem"
    ]
  },
  {
    "term": "Globbing",
    "def": "Shell wildcard expansion patterns such as asterisk or question mark used to match filenames.",
    "course": "command-line-shell",
    "section": "filesystem",
    "tags": [
      "shell"
    ]
  },
  {
    "term": "Symlink",
    "def": "A symbolic link file that acts as a pointer or alias to another filesystem path.",
    "course": "command-line-shell",
    "section": "filesystem",
    "tags": [
      "filesystem"
    ]
  },
  {
    "term": "Standard input",
    "def": "File descriptor 0 (stdin), the default input byte stream received by a process.",
    "course": "command-line-shell",
    "section": "streams",
    "tags": [
      "streams"
    ]
  },
  {
    "term": "Standard output",
    "def": "File descriptor 1 (stdout), the default output byte stream produced by a process.",
    "course": "command-line-shell",
    "section": "streams",
    "tags": [
      "streams"
    ]
  },
  {
    "term": "Standard error",
    "def": "File descriptor 2 (stderr), the unbuffered diagnostic error stream of a process.",
    "course": "command-line-shell",
    "section": "streams",
    "tags": [
      "streams"
    ]
  },
  {
    "term": "Pipe",
    "def": "A kernel buffer connecting the stdout of one process directly to the stdin of another.",
    "course": "command-line-shell",
    "section": "streams",
    "tags": [
      "pipes"
    ]
  },
  {
    "term": "Process ID",
    "def": "A unique integer (PID) assigned by the operating system kernel to a running program.",
    "course": "command-line-shell",
    "section": "processes",
    "tags": [
      "kernel"
    ]
  },
  {
    "term": "Signal",
    "def": "An asynchronous operating system notification sent to a process to request an action like termination.",
    "course": "command-line-shell",
    "section": "processes",
    "tags": [
      "signals"
    ]
  },
  {
    "term": "File mode",
    "def": "A bitmask specifying read, write, and execute permissions for user, group, and others.",
    "course": "command-line-shell",
    "section": "processes",
    "tags": [
      "security"
    ]
  },
  {
    "term": "Executable bit",
    "def": "The permission flag that grants permission for a file to be executed as a program.",
    "course": "command-line-shell",
    "section": "processes",
    "tags": [
      "permissions"
    ]
  },
  {
    "term": "Environment variable",
    "def": "A key-value pair inherited by child processes that configures runtime behavior.",
    "course": "command-line-shell",
    "section": "environment",
    "tags": [
      "environment"
    ]
  },
  {
    "term": "PATH variable",
    "def": "A colon-separated list of directories searched by the shell to find executable binaries.",
    "course": "command-line-shell",
    "section": "environment",
    "tags": [
      "environment"
    ]
  },
  {
    "term": "Exit code",
    "def": "An integer between 0 and 255 returned by a process upon termination where 0 denotes success.",
    "course": "command-line-shell",
    "section": "environment",
    "tags": [
      "shell"
    ]
  },
  {
    "term": "Shebang",
    "def": "The initial characters #! in a script specifying the interpreter to execute the file.",
    "course": "command-line-shell",
    "section": "environment",
    "tags": [
      "scripting"
    ]
  },
  {
    "term": "Root directory",
    "def": "The top-level folder of a repository containing project metadata, configuration, and source directories.",
    "course": "software-project-structure",
    "section": "anatomy",
    "tags": [
      "structure"
    ]
  },
  {
    "term": "Src layout",
    "def": "A directory structure where application code is nested inside a dedicated src/ folder to avoid import pollution.",
    "course": "software-project-structure",
    "section": "anatomy",
    "tags": [
      "packaging"
    ]
  },
  {
    "term": "Package",
    "def": "A directory containing an __init__.py file or namespace configuration that allows its modules to be imported.",
    "course": "software-project-structure",
    "section": "anatomy",
    "tags": [
      "architecture"
    ]
  },
  {
    "term": "Manifest",
    "def": "A metadata file defining project name, author, dependencies, and build requirements.",
    "course": "software-project-structure",
    "section": "anatomy",
    "tags": [
      "config"
    ]
  },
  {
    "term": "Twelve-Factor App",
    "def": "A methodology for building modern cloud applications that emphasizes strict separation of config from code.",
    "course": "software-project-structure",
    "section": "configuration",
    "tags": [
      "architecture"
    ]
  },
  {
    "term": "Environment file",
    "def": "A plain-text file (.env) containing key-value pairs loaded into environment variables during local development.",
    "course": "software-project-structure",
    "section": "configuration",
    "tags": [
      "security"
    ]
  },
  {
    "term": "Lockfile",
    "def": "A machine-generated file recording exact dependency versions and cryptographic hashes for reproducible builds.",
    "course": "software-project-structure",
    "section": "configuration",
    "tags": [
      "dependencies"
    ]
  },
  {
    "term": "Virtual environment",
    "def": "An isolated directory tree containing a specific interpreter and independent package dependencies.",
    "course": "software-project-structure",
    "section": "configuration",
    "tags": [
      "environment"
    ]
  },
  {
    "term": "Entry point",
    "def": "The script or callable function configured as the starting execution point of an application or CLI.",
    "course": "software-project-structure",
    "section": "entry-points",
    "tags": [
      "runtime"
    ]
  },
  {
    "term": "Test fixture",
    "def": "A fixed baseline of data or mock objects used to execute automated tests consistently.",
    "course": "software-project-structure",
    "section": "entry-points",
    "tags": [
      "testing"
    ]
  },
  {
    "term": "Integration test",
    "def": "A test verifying that multiple modules, database queries, or external services interact correctly together.",
    "course": "software-project-structure",
    "section": "entry-points",
    "tags": [
      "testing"
    ]
  },
  {
    "term": "Mock",
    "def": "A simulated object that mimics the behavior of a real external dependency in controlled ways.",
    "course": "software-project-structure",
    "section": "entry-points",
    "tags": [
      "testing"
    ]
  },
  {
    "term": "Build artifact",
    "def": "Compiled binaries, bundled assets, or distribution archives generated by build processes.",
    "course": "software-project-structure",
    "section": "hygiene",
    "tags": [
      "build"
    ]
  },
  {
    "term": "Gitignore",
    "def": "A configuration file instructing git to untrack and ignore specified build artifacts, caches, and secrets.",
    "course": "software-project-structure",
    "section": "hygiene",
    "tags": [
      "git"
    ]
  },
  {
    "term": "Changelog",
    "def": "A curated, chronologically ordered record of notable changes made in each release of a project.",
    "course": "software-project-structure",
    "section": "hygiene",
    "tags": [
      "documentation"
    ]
  },
  {
    "term": "Onboarding doc",
    "def": "A guide (typically README.md) providing exact prerequisites and commands to run the project from scratch.",
    "course": "software-project-structure",
    "section": "hygiene",
    "tags": [
      "documentation"
    ]
  },
  {
    "term": "Internet Protocol",
    "def": "The foundational layer-3 protocol defining addressing and packet routing across network boundaries.",
    "course": "how-the-internet-works",
    "section": "network-layer",
    "tags": [
      "protocols"
    ]
  },
  {
    "term": "IPv4",
    "def": "A 32-bit numerical IP address format expressed as four dot-separated octets (e.g. 192.168.1.1).",
    "course": "how-the-internet-works",
    "section": "network-layer",
    "tags": [
      "networking"
    ]
  },
  {
    "term": "CIDR notation",
    "def": "A compact notation (e.g. /24) indicating the count of leading bits used for the subnet network prefix.",
    "course": "how-the-internet-works",
    "section": "network-layer",
    "tags": [
      "addressing"
    ]
  },
  {
    "term": "Packet",
    "def": "A formatted unit of network data containing a header with routing metadata and a data payload.",
    "course": "how-the-internet-works",
    "section": "network-layer",
    "tags": [
      "packets"
    ]
  },
  {
    "term": "Packet switching",
    "def": "A communications method grouping data into independent packets routed dynamically across network links.",
    "course": "how-the-internet-works",
    "section": "packet-switching",
    "tags": [
      "networking"
    ]
  },
  {
    "term": "Router",
    "def": "A specialized network device that forwards data packets between disparate computer networks based on IP tables.",
    "course": "how-the-internet-works",
    "section": "packet-switching",
    "tags": [
      "hardware"
    ]
  },
  {
    "term": "Latency",
    "def": "The time elapsed for a data packet to travel from origin to destination across network hops.",
    "course": "how-the-internet-works",
    "section": "packet-switching",
    "tags": [
      "performance"
    ]
  },
  {
    "term": "Traceroute",
    "def": "A diagnostic tool reporting the list of intermediate router hops traversed by packets to reach a host.",
    "course": "how-the-internet-works",
    "section": "packet-switching",
    "tags": [
      "tools"
    ]
  },
  {
    "term": "Transmission Control Protocol",
    "def": "A connection-oriented transport protocol (TCP) guaranteeing in-order, error-checked delivery.",
    "course": "how-the-internet-works",
    "section": "transport-layer",
    "tags": [
      "protocols"
    ]
  },
  {
    "term": "User Datagram Protocol",
    "def": "A lightweight, connectionless transport protocol (UDP) prioritizing speed over guaranteed delivery.",
    "course": "how-the-internet-works",
    "section": "transport-layer",
    "tags": [
      "protocols"
    ]
  },
  {
    "term": "Three-way handshake",
    "def": "The SYN, SYN-ACK, ACK sequence used to establish a synchronized TCP connection.",
    "course": "how-the-internet-works",
    "section": "transport-layer",
    "tags": [
      "tcp"
    ]
  },
  {
    "term": "Port",
    "def": "A 16-bit numerical identifier (0–65535) multiplexing multiple network services on a single IP address.",
    "course": "how-the-internet-works",
    "section": "transport-layer",
    "tags": [
      "transport"
    ]
  },
  {
    "term": "Socket",
    "def": "The programmatic endpoint of a bidirectional communication channel defined by an IP and port pair.",
    "course": "how-the-internet-works",
    "section": "global-mesh",
    "tags": [
      "sockets"
    ]
  },
  {
    "term": "NAT",
    "def": "Network Address Translation: mapping multiple private local IP addresses to a single public IP address.",
    "course": "how-the-internet-works",
    "section": "global-mesh",
    "tags": [
      "networking"
    ]
  },
  {
    "term": "Submarine cable",
    "def": "Undersea fiber optic cables laid across ocean floors carrying global internet data between continents.",
    "course": "how-the-internet-works",
    "section": "global-mesh",
    "tags": [
      "infrastructure"
    ]
  },
  {
    "term": "Internet Exchange Point",
    "def": "A physical data center (IXP) where autonomous ISPs connect to exchange routing traffic directly.",
    "course": "how-the-internet-works",
    "section": "global-mesh",
    "tags": [
      "infrastructure"
    ]
  },
  {
    "term": "HTTP",
    "def": "Hypertext Transfer Protocol: the application-level protocol powering data communication across the World Wide Web.",
    "course": "http",
    "section": "request-response",
    "tags": [
      "protocols"
    ]
  },
  {
    "term": "Statelessness",
    "def": "A protocol property where each request is processed independently without the server retaining client state between requests.",
    "course": "http",
    "section": "request-response",
    "tags": [
      "architecture"
    ]
  },
  {
    "term": "Request line",
    "def": "The first line of an HTTP request, containing the method, path, and protocol version (e.g. GET / HTTP/1.1).",
    "course": "http",
    "section": "request-response",
    "tags": [
      "format"
    ]
  },
  {
    "term": "Status line",
    "def": "The first line of an HTTP response, containing the protocol version, numeric status code, and reason phrase.",
    "course": "http",
    "section": "request-response",
    "tags": [
      "format"
    ]
  },
  {
    "term": "Idempotent method",
    "def": "An HTTP method where multiple identical requests have the exact same effect on server state as a single request.",
    "course": "http",
    "section": "methods-status",
    "tags": [
      "methods"
    ]
  },
  {
    "term": "Safe method",
    "def": "An HTTP method (like GET or HEAD) that does not modify server resource state and is read-only.",
    "course": "http",
    "section": "methods-status",
    "tags": [
      "methods"
    ]
  },
  {
    "term": "2xx Success",
    "def": "HTTP status code family indicating that the client request was successfully received, understood, and accepted.",
    "course": "http",
    "section": "methods-status",
    "tags": [
      "status"
    ]
  },
  {
    "term": "4xx Client Error",
    "def": "HTTP status code family indicating an error caused by the client, such as invalid syntax or missing authentication.",
    "course": "http",
    "section": "methods-status",
    "tags": [
      "status"
    ]
  },
  {
    "term": "HTTP header",
    "def": "A colon-separated key-value metadata field passed before the message body in HTTP requests and responses.",
    "course": "http",
    "section": "headers-payloads",
    "tags": [
      "headers"
    ]
  },
  {
    "term": "MIME type",
    "def": "A standardized two-part identifier (e.g. application/json, text/html) declaring the media format of payload data.",
    "course": "http",
    "section": "headers-payloads",
    "tags": [
      "content"
    ]
  },
  {
    "term": "Content-Length",
    "def": "A header specifying the decimal number of octets (bytes) contained in the message body.",
    "course": "http",
    "section": "headers-payloads",
    "tags": [
      "headers"
    ]
  },
  {
    "term": "CORS",
    "def": "Cross-Origin Resource Sharing: a browser security mechanism using HTTP headers to permit cross-domain resource requests.",
    "course": "http",
    "section": "headers-payloads",
    "tags": [
      "security"
    ]
  },
  {
    "term": "Cache-Control",
    "def": "The primary HTTP header defining caching policies, expiration times, and revalidation rules.",
    "course": "http",
    "section": "state-caching",
    "tags": [
      "caching"
    ]
  },
  {
    "term": "ETag",
    "def": "An entity tag hash representing the specific version of a resource, used for conditional cache validation.",
    "course": "http",
    "section": "state-caching",
    "tags": [
      "caching"
    ]
  },
  {
    "term": "HTTP cookie",
    "def": "A small piece of data sent by a server via Set-Cookie and stored in the browser to maintain stateful sessions.",
    "course": "http",
    "section": "state-caching",
    "tags": [
      "state"
    ]
  },
  {
    "term": "HttpOnly",
    "def": "A cookie security attribute that blocks JavaScript access to prevent cross-site scripting (XSS) session theft.",
    "course": "http",
    "section": "state-caching",
    "tags": [
      "security"
    ]
  },
  {
    "term": "DNS",
    "def": "Domain Name System: a globally distributed hierarchical database translating names into IP addresses.",
    "course": "dns-domains-tls",
    "section": "domain-system",
    "tags": [
      "dns"
    ]
  },
  {
    "term": "FQDN",
    "def": "Fully Qualified Domain Name: an absolute domain name specifying its exact location in the DNS tree (e.g. www.example.com.).",
    "course": "dns-domains-tls",
    "section": "domain-system",
    "tags": [
      "dns"
    ]
  },
  {
    "term": "Recursive resolver",
    "def": "A DNS server that performs iterative queries across root, TLD, and authoritative servers on behalf of a client.",
    "course": "dns-domains-tls",
    "section": "domain-system",
    "tags": [
      "dns"
    ]
  },
  {
    "term": "Authoritative nameserver",
    "def": "The designated DNS server holding the original definitive records for a specific domain zone.",
    "course": "dns-domains-tls",
    "section": "domain-system",
    "tags": [
      "dns"
    ]
  },
  {
    "term": "A record",
    "def": "An Address record mapping a domain name directly to an IPv4 32-bit address.",
    "course": "dns-domains-tls",
    "section": "dns-records",
    "tags": [
      "records"
    ]
  },
  {
    "term": "CNAME record",
    "def": "Canonical Name record: an alias mapping one domain name to another domain name.",
    "course": "dns-domains-tls",
    "section": "dns-records",
    "tags": [
      "records"
    ]
  },
  {
    "term": "Time to Live",
    "def": "The duration in seconds (TTL) that a DNS record may be cached before re-querying authoritative servers.",
    "course": "dns-domains-tls",
    "section": "dns-records",
    "tags": [
      "caching"
    ]
  },
  {
    "term": "Zone file",
    "def": "A text file containing the mappings of domain names to IP addresses and resource records for a zone.",
    "course": "dns-domains-tls",
    "section": "dns-records",
    "tags": [
      "dns"
    ]
  },
  {
    "term": "Asymmetric encryption",
    "def": "Cryptography using a mathematically linked public and private key pair for secure key exchange.",
    "course": "dns-domains-tls",
    "section": "cryptography",
    "tags": [
      "crypto"
    ]
  },
  {
    "term": "Symmetric encryption",
    "def": "High-performance cryptography using a single shared secret key for encrypting and decrypting data.",
    "course": "dns-domains-tls",
    "section": "cryptography",
    "tags": [
      "crypto"
    ]
  },
  {
    "term": "Certificate Authority",
    "def": "A trusted entity (CA) that cryptographically signs and issues digital certificates verifying domain ownership.",
    "course": "dns-domains-tls",
    "section": "cryptography",
    "tags": [
      "security"
    ]
  },
  {
    "term": "X.509 Certificate",
    "def": "The international standard format for public key certificates binding public keys to identities.",
    "course": "dns-domains-tls",
    "section": "cryptography",
    "tags": [
      "certificates"
    ]
  },
  {
    "term": "TLS",
    "def": "Transport Layer Security: cryptographic protocol providing confidentiality, integrity, and authentication over TCP.",
    "course": "dns-domains-tls",
    "section": "tls-handshake",
    "tags": [
      "security"
    ]
  },
  {
    "term": "TLS Handshake",
    "def": "The initial negotiation where client and server verify identity and establish symmetric encryption keys.",
    "course": "dns-domains-tls",
    "section": "tls-handshake",
    "tags": [
      "tls"
    ]
  },
  {
    "term": "HSTS",
    "def": "HTTP Strict Transport Security: a header instructing browsers to automatically upgrade all requests to HTTPS.",
    "course": "dns-domains-tls",
    "section": "tls-handshake",
    "tags": [
      "security"
    ]
  },
  {
    "term": "Mixed content",
    "def": "A security warning occurring when an HTTPS web page loads subresources (images, scripts) over insecure HTTP.",
    "course": "dns-domains-tls",
    "section": "tls-handshake",
    "tags": [
      "security"
    ]
  },
  {
    "term": "Semantic HTML",
    "def": "The practice of using HTML tags that reinforce the structural meaning of content rather than merely its presentation.",
    "course": "html-dom",
    "section": "markup",
    "tags": [
      "semantics"
    ]
  },
  {
    "term": "Landmark element",
    "def": "Major structural HTML5 tags (main, nav, header, footer, aside) recognized by screen readers for navigation.",
    "course": "html-dom",
    "section": "markup",
    "tags": [
      "a11y"
    ]
  },
  {
    "term": "Void element",
    "def": "An element (like img, input, br, hr) that cannot have children and never uses a closing tag.",
    "course": "html-dom",
    "section": "markup",
    "tags": [
      "syntax"
    ]
  },
  {
    "term": "Attribute",
    "def": "A key-value pair placed inside an opening tag providing metadata or configuration to the element.",
    "course": "html-dom",
    "section": "markup",
    "tags": [
      "syntax"
    ]
  },
  {
    "term": "DOM",
    "def": "Document Object Model: a live in-memory tree representation of an HTML document created by the browser.",
    "course": "html-dom",
    "section": "dom-tree",
    "tags": [
      "dom"
    ]
  },
  {
    "term": "Node",
    "def": "The generic base interface for all objects in the DOM tree, including elements, text chunks, and comments.",
    "course": "html-dom",
    "section": "dom-tree",
    "tags": [
      "dom"
    ]
  },
  {
    "term": "Element",
    "def": "A specific node type corresponding to an HTML tag, possessing attributes, tag names, and child elements.",
    "course": "html-dom",
    "section": "dom-tree",
    "tags": [
      "dom"
    ]
  },
  {
    "term": "DOM parsing",
    "def": "The process where a browser tokenizes raw HTML markup bytes into tokens and constructs tree nodes.",
    "course": "html-dom",
    "section": "dom-tree",
    "tags": [
      "browser"
    ]
  },
  {
    "term": "Form element",
    "def": "An interactive document section () collecting user inputs and submitting them to a server.",
    "course": "html-dom",
    "section": "forms-inputs",
    "tags": [
      "forms"
    ]
  },
  {
    "term": "Label association",
    "def": "Linking an input to a  using matching for and id attributes for accessibility and touch targets.",
    "course": "html-dom",
    "section": "forms-inputs",
    "tags": [
      "a11y",
      "forms"
    ]
  },
  {
    "term": "Client validation",
    "def": "Browser-enforced constraints (required, type=email, pattern) checked before form submission.",
    "course": "html-dom",
    "section": "forms-inputs",
    "tags": [
      "forms"
    ]
  },
  {
    "term": "Responsive image",
    "def": "An image implementation ( or srcset) serving optimized file sizes tailored to display density.",
    "course": "html-dom",
    "section": "forms-inputs",
    "tags": [
      "media"
    ]
  },
  {
    "term": "Accessibility tree",
    "def": "A specialized tree generated by browsers from the DOM exposing names, roles, and states to screen readers.",
    "course": "html-dom",
    "section": "accessibility",
    "tags": [
      "a11y"
    ]
  },
  {
    "term": "ARIA",
    "def": "Accessible Rich Internet Applications: a W3C specification of attributes that enhance accessibility semantics.",
    "course": "html-dom",
    "section": "accessibility",
    "tags": [
      "aria"
    ]
  },
  {
    "term": "Keyboard focus",
    "def": "The active state indicating which interactive element currently receives keyboard input events.",
    "course": "html-dom",
    "section": "accessibility",
    "tags": [
      "a11y"
    ]
  },
  {
    "term": "DevTools Elements panel",
    "def": "An interactive browser tool for inspecting, modifying, and debugging live DOM nodes and styles.",
    "course": "html-dom",
    "section": "accessibility",
    "tags": [
      "tools"
    ]
  },
  {
    "term": "Box model",
    "def": "The foundational CSS layout geometry defining an element's content area, padding, border, and margin.",
    "course": "css-layout",
    "section": "box-model",
    "tags": [
      "box-model"
    ]
  },
  {
    "term": "border-box",
    "def": "A box-sizing mode where declared width and height include padding and borders, preventing expansion.",
    "course": "css-layout",
    "section": "box-model",
    "tags": [
      "sizing"
    ]
  },
  {
    "term": "Margin collapsing",
    "def": "The layout behavior where adjacent vertical margins combine into a single margin equal to the largest value.",
    "course": "css-layout",
    "section": "box-model",
    "tags": [
      "layout"
    ]
  },
  {
    "term": "Normal flow",
    "def": "The default browser placement algorithm laying block elements vertically and inline elements horizontally.",
    "course": "css-layout",
    "section": "box-model",
    "tags": [
      "flow"
    ]
  },
  {
    "term": "Containing block",
    "def": "The ancestor box that serves as the coordinate frame of reference for sizing and positioning an element.",
    "course": "css-layout",
    "section": "flow-position",
    "tags": [
      "positioning"
    ]
  },
  {
    "term": "Stacking context",
    "def": "A three-dimensional conceptual layering along the z-axis determining which elements render in front.",
    "course": "css-layout",
    "section": "flow-position",
    "tags": [
      "z-index"
    ]
  },
  {
    "term": "Sticky positioning",
    "def": "A hybrid positioning mode where an element behaves as relative until a scroll threshold, then sticks like fixed.",
    "course": "css-layout",
    "section": "flow-position",
    "tags": [
      "positioning"
    ]
  },
  {
    "term": "Inline-block",
    "def": "A display mode formatting as an inline box outwardly while accepting width, height, and vertical margins inwardly.",
    "course": "css-layout",
    "section": "flow-position",
    "tags": [
      "display"
    ]
  },
  {
    "term": "Flexbox",
    "def": "A one-dimensional layout model optimized for distributing space and aligning items along a main axis.",
    "course": "css-layout",
    "section": "modern-layout",
    "tags": [
      "flexbox"
    ]
  },
  {
    "term": "Main axis",
    "def": "The primary direction along which flex items are placed, defined by flex-direction (row or column).",
    "course": "css-layout",
    "section": "modern-layout",
    "tags": [
      "flexbox"
    ]
  },
  {
    "term": "CSS Grid",
    "def": "A two-dimensional layout system that organizes content into intersecting rows and columns simultaneously.",
    "course": "css-layout",
    "section": "modern-layout",
    "tags": [
      "grid"
    ]
  },
  {
    "term": "Fractional unit (fr)",
    "def": "A flexible grid unit representing a proportional share of available space in the grid container.",
    "course": "css-layout",
    "section": "modern-layout",
    "tags": [
      "grid"
    ]
  },
  {
    "term": "Media query",
    "def": "A CSS technique applying styles conditionally based on device characteristics like viewport width.",
    "course": "css-layout",
    "section": "responsive-design",
    "tags": [
      "responsive"
    ]
  },
  {
    "term": "Fluid typography",
    "def": "Text sizing that scales smoothly between minimum and maximum bounds using the clamp() function.",
    "course": "css-layout",
    "section": "responsive-design",
    "tags": [
      "typography"
    ]
  },
  {
    "term": "Horizontal overflow",
    "def": "A visual defect where content exceeds the viewport width, creating an unwanted horizontal scrollbar.",
    "course": "css-layout",
    "section": "responsive-design",
    "tags": [
      "debugging"
    ]
  },
  {
    "term": "DevTools Layout overlays",
    "def": "Interactive browser tooling displaying flexbox axes, grid tracks, and box model boundaries.",
    "course": "css-layout",
    "section": "responsive-design",
    "tags": [
      "tools"
    ]
  },
  {
    "term": "Primitive value",
    "def": "An immutable data value represented directly at the lowest level of the language (e.g. number, string, boolean).",
    "course": "javascript-fundamentals",
    "section": "types-vars",
    "tags": [
      "types"
    ]
  },
  {
    "term": "Temporal Dead Zone",
    "def": "The state between entering scope and variable declaration where let and const variables cannot be accessed.",
    "course": "javascript-fundamentals",
    "section": "types-vars",
    "tags": [
      "scope"
    ]
  },
  {
    "term": "Strict equality",
    "def": "The === operator, comparing both type and value without performing implicit type coercion.",
    "course": "javascript-fundamentals",
    "section": "types-vars",
    "tags": [
      "operators"
    ]
  },
  {
    "term": "Type coercion",
    "def": "The automatic or implicit conversion of values from one data type to another during operations.",
    "course": "javascript-fundamentals",
    "section": "types-vars",
    "tags": [
      "types"
    ]
  },
  {
    "term": "Lexical scope",
    "def": "Scope resolution determined by the physical location of variable declarations in the source code.",
    "course": "javascript-fundamentals",
    "section": "functions-scope",
    "tags": [
      "scope"
    ]
  },
  {
    "term": "Closure",
    "def": "The combination of a function bundled together with references to its surrounding lexical environment.",
    "course": "javascript-fundamentals",
    "section": "functions-scope",
    "tags": [
      "closures"
    ]
  },
  {
    "term": "Arrow function",
    "def": "A compact function syntax (=>) that does not bind its own this, arguments, or super.",
    "course": "javascript-fundamentals",
    "section": "functions-scope",
    "tags": [
      "functions"
    ]
  },
  {
    "term": "Higher-order function",
    "def": "A function that accepts another function as an argument, returns a function, or both.",
    "course": "javascript-fundamentals",
    "section": "functions-scope",
    "tags": [
      "functions"
    ]
  },
  {
    "term": "Reference type",
    "def": "Objects, arrays, and functions stored on the heap, accessed and passed via memory references.",
    "course": "javascript-fundamentals",
    "section": "objects-arrays",
    "tags": [
      "objects"
    ]
  },
  {
    "term": "Shallow copy",
    "def": "A copy of an object where top-level properties are duplicated, but nested objects remain shared references.",
    "course": "javascript-fundamentals",
    "section": "objects-arrays",
    "tags": [
      "memory"
    ]
  },
  {
    "term": "Pure function",
    "def": "A function that always produces the same output for the same input and causes zero observable side effects.",
    "course": "javascript-fundamentals",
    "section": "objects-arrays",
    "tags": [
      "functional"
    ]
  },
  {
    "term": "Reduce method",
    "def": "An array method executing a reducer callback over all items to accumulate them into a single result value.",
    "course": "javascript-fundamentals",
    "section": "objects-arrays",
    "tags": [
      "arrays"
    ]
  },
  {
    "term": "Destructuring",
    "def": "A syntax enabling the unpacking of values from arrays or properties from objects into distinct variables.",
    "course": "javascript-fundamentals",
    "section": "modern-js",
    "tags": [
      "syntax"
    ]
  },
  {
    "term": "Spread operator",
    "def": "The syntax (...) that expands an iterable array or object into individual elements or properties.",
    "course": "javascript-fundamentals",
    "section": "modern-js",
    "tags": [
      "syntax"
    ]
  },
  {
    "term": "ES Module",
    "def": "The official standard JavaScript module system using import and export statements.",
    "course": "javascript-fundamentals",
    "section": "modern-js",
    "tags": [
      "modules"
    ]
  },
  {
    "term": "Default export",
    "def": "The primary export of a module imported without curly braces (e.g. import App from './App.js').",
    "course": "javascript-fundamentals",
    "section": "modern-js",
    "tags": [
      "modules"
    ]
  },
  {
    "term": "Call stack",
    "def": "The LIFO execution stack in JavaScript tracking the active function frames.",
    "course": "browser-events-async",
    "section": "event-loop",
    "tags": [
      "runtime"
    ]
  },
  {
    "term": "Event loop",
    "def": "The coordination loop monitoring the call stack and dispatching tasks from queues.",
    "course": "browser-events-async",
    "section": "event-loop",
    "tags": [
      "async"
    ]
  },
  {
    "term": "Macrotask",
    "def": "A task scheduled by setTimeout, setInterval, or I/O queued in the task queue.",
    "course": "browser-events-async",
    "section": "event-loop",
    "tags": [
      "async"
    ]
  },
  {
    "term": "Microtask",
    "def": "A high-priority asynchronous job (Promise callback) executed immediately when the call stack clears.",
    "course": "browser-events-async",
    "section": "event-loop",
    "tags": [
      "async"
    ]
  },
  {
    "term": "Event bubbling",
    "def": "The event propagation phase where an event triggers handlers on target and ascends ancestor nodes.",
    "course": "browser-events-async",
    "section": "dom-events",
    "tags": [
      "events"
    ]
  },
  {
    "term": "Event capturing",
    "def": "The initial event propagation phase descending from window down to the target node.",
    "course": "browser-events-async",
    "section": "dom-events",
    "tags": [
      "events"
    ]
  },
  {
    "term": "Event delegation",
    "def": "A pattern attaching a single listener to a parent element to handle events for all children.",
    "course": "browser-events-async",
    "section": "dom-events",
    "tags": [
      "patterns"
    ]
  },
  {
    "term": "preventDefault",
    "def": "A method canceling the default browser action associated with an event.",
    "course": "browser-events-async",
    "section": "dom-events",
    "tags": [
      "events"
    ]
  },
  {
    "term": "Promise",
    "def": "An object representing the eventual completion or failure of an asynchronous operation.",
    "course": "browser-events-async",
    "section": "promises",
    "tags": [
      "promises"
    ]
  },
  {
    "term": "Pending state",
    "def": "The initial state of a promise before it is either fulfilled or rejected.",
    "course": "browser-events-async",
    "section": "promises",
    "tags": [
      "promises"
    ]
  },
  {
    "term": "Fulfilled state",
    "def": "The resolved state of a promise indicating the asynchronous operation succeeded.",
    "course": "browser-events-async",
    "section": "promises",
    "tags": [
      "promises"
    ]
  },
  {
    "term": "Rejected state",
    "def": "The failure state of a promise indicating the asynchronous operation threw an error.",
    "course": "browser-events-async",
    "section": "promises",
    "tags": [
      "promises"
    ]
  },
  {
    "term": "async function",
    "def": "A function prefix enabling await syntax that automatically wraps return values in Promises.",
    "course": "browser-events-async",
    "section": "async-await",
    "tags": [
      "async"
    ]
  },
  {
    "term": "await keyword",
    "def": "An operator pausing async function execution until a Promise resolves or rejects.",
    "course": "browser-events-async",
    "section": "async-await",
    "tags": [
      "async"
    ]
  },
  {
    "term": "Promise.all",
    "def": "A combinator resolving when all input promises fulfill, or rejecting as soon as one rejects.",
    "course": "browser-events-async",
    "section": "async-await",
    "tags": [
      "promises"
    ]
  },
  {
    "term": "AbortController",
    "def": "A standard web API controller allowing cancellation of ongoing DOM requests and fetch calls.",
    "course": "browser-events-async",
    "section": "async-await",
    "tags": [
      "cancellation"
    ]
  },
  {
    "term": "REST",
    "def": "Representational State Transfer: an architectural style for distributed hypermedia systems based on resource abstractions.",
    "course": "rest-apis-json",
    "section": "rest-foundations",
    "tags": [
      "architecture"
    ]
  },
  {
    "term": "Resource",
    "def": "Any named concept that can be identified, addressed, and manipulated via a URI (e.g. user, order, invoice).",
    "course": "rest-apis-json",
    "section": "rest-foundations",
    "tags": [
      "resources"
    ]
  },
  {
    "term": "Uniform interface",
    "def": "The core REST constraint mandating standardized resource identification, representations, and self-descriptive messages.",
    "course": "rest-apis-json",
    "section": "rest-foundations",
    "tags": [
      "architecture"
    ]
  },
  {
    "term": "Collection URI",
    "def": "A pluralized endpoint representing a set of resources (e.g. /api/users).",
    "course": "rest-apis-json",
    "section": "rest-foundations",
    "tags": [
      "uri"
    ]
  },
  {
    "term": "JSON",
    "def": "JavaScript Object Notation: a lightweight, text-based, language-independent data interchange format.",
    "course": "rest-apis-json",
    "section": "json-data",
    "tags": [
      "json"
    ]
  },
  {
    "term": "Serialization",
    "def": "The process of converting in-memory data structures into a string format (like JSON) for storage or transmission.",
    "course": "rest-apis-json",
    "section": "json-data",
    "tags": [
      "data"
    ]
  },
  {
    "term": "application/json",
    "def": "The standard IANA MIME media type declaring that an HTTP payload contains JSON formatted text.",
    "course": "rest-apis-json",
    "section": "json-data",
    "tags": [
      "mime"
    ]
  },
  {
    "term": "Idempotency key",
    "def": "A unique client-generated token attached to POST requests allowing safe deduplication and retries.",
    "course": "rest-apis-json",
    "section": "json-data",
    "tags": [
      "api"
    ]
  },
  {
    "term": "Problem Details",
    "def": "RFC 7807 / 9457 standard JSON format providing structured machine-readable error details.",
    "course": "rest-apis-json",
    "section": "api-patterns",
    "tags": [
      "errors"
    ]
  },
  {
    "term": "Cursor pagination",
    "def": "A pagination technique using an opaque pointer to a record rather than an offset index for stable querying.",
    "course": "rest-apis-json",
    "section": "api-patterns",
    "tags": [
      "pagination"
    ]
  },
  {
    "term": "Rate limiting",
    "def": "A server policy restricting the number of API requests a client can make within a specified time window.",
    "course": "rest-apis-json",
    "section": "api-patterns",
    "tags": [
      "security"
    ]
  },
  {
    "term": "Sub-resource",
    "def": "A resource existing only within the context of a parent resource (e.g. /users/1/orders).",
    "course": "rest-apis-json",
    "section": "api-patterns",
    "tags": [
      "uri"
    ]
  },
  {
    "term": "API versioning",
    "def": "The practice of managing non-backwards-compatible changes to an API contract across service updates.",
    "course": "rest-apis-json",
    "section": "versioning-docs",
    "tags": [
      "evolution"
    ]
  },
  {
    "term": "Breaking change",
    "def": "A modification to an API endpoint, field, or behavior that breaks existing client integrations.",
    "course": "rest-apis-json",
    "section": "versioning-docs",
    "tags": [
      "design"
    ]
  },
  {
    "term": "OpenAPI",
    "def": "A standardized, vendor-neutral specification format for describing and documenting RESTful APIs.",
    "course": "rest-apis-json",
    "section": "versioning-docs",
    "tags": [
      "docs"
    ]
  },
  {
    "term": "HATEOAS",
    "def": "Hypermedia as the Engine of Application State: a REST constraint where clients navigate APIs via hypermedia links.",
    "course": "rest-apis-json",
    "section": "versioning-docs",
    "tags": [
      "rest"
    ]
  },
  {
    "term": "Authentication",
    "def": "The process of verifying that an entity is who they claim to be (AuthN: 'Who are you?').",
    "course": "authentication-sessions",
    "section": "identity-passwords",
    "tags": [
      "auth"
    ]
  },
  {
    "term": "Authorization",
    "def": "The process of verifying whether an authenticated entity has permission to perform an action (AuthZ).",
    "course": "authentication-sessions",
    "section": "identity-passwords",
    "tags": [
      "auth"
    ]
  },
  {
    "term": "Salt",
    "def": "A unique random string appended to passwords before hashing to defeat precomputed rainbow table attacks.",
    "course": "authentication-sessions",
    "section": "identity-passwords",
    "tags": [
      "crypto"
    ]
  },
  {
    "term": "bcrypt",
    "def": "A slow, adaptive, memory-hard password hashing function designed to resist brute-force hardware cracking.",
    "course": "authentication-sessions",
    "section": "identity-passwords",
    "tags": [
      "crypto"
    ]
  },
  {
    "term": "Session identifier",
    "def": "A high-entropy random token stored in an HTTP cookie matching a session record in a server database.",
    "course": "authentication-sessions",
    "section": "stateful-sessions",
    "tags": [
      "sessions"
    ]
  },
  {
    "term": "Session store",
    "def": "A high-speed fast-access database (often Redis or Memcached) storing active session states.",
    "course": "authentication-sessions",
    "section": "stateful-sessions",
    "tags": [
      "sessions"
    ]
  },
  {
    "term": "Session hijacking",
    "def": "An attack where an adversary steals a valid session ID to impersonate an authenticated user.",
    "course": "authentication-sessions",
    "section": "stateful-sessions",
    "tags": [
      "security"
    ]
  },
  {
    "term": "CSRF",
    "def": "Cross-Site Request Forgery: an attack forcing an authenticated browser to submit unwanted actions to a trusted site.",
    "course": "authentication-sessions",
    "section": "stateful-sessions",
    "tags": [
      "security"
    ]
  },
  {
    "term": "JSON Web Token",
    "def": "A compact, URL-safe means of representing claims (JWT) cryptographically signed between two parties.",
    "course": "authentication-sessions",
    "section": "stateless-tokens",
    "tags": [
      "jwt"
    ]
  },
  {
    "term": "Claims",
    "def": "Key-value assertions (like sub, exp, role) encoded in the JSON payload of a JWT.",
    "course": "authentication-sessions",
    "section": "stateless-tokens",
    "tags": [
      "jwt"
    ]
  },
  {
    "term": "Access token",
    "def": "A short-lived credential used by an application to access an API on behalf of a user.",
    "course": "authentication-sessions",
    "section": "stateless-tokens",
    "tags": [
      "tokens"
    ]
  },
  {
    "term": "Refresh token",
    "def": "A long-lived credential used to obtain a new access token when the current access token expires.",
    "course": "authentication-sessions",
    "section": "stateless-tokens",
    "tags": [
      "tokens"
    ]
  },
  {
    "term": "OAuth 2.0",
    "def": "An open standard authorization framework enabling third-party applications to access user data without passwords.",
    "course": "authentication-sessions",
    "section": "federated-auth",
    "tags": [
      "oauth"
    ]
  },
  {
    "term": "PKCE",
    "def": "Proof Key for Code Exchange: an extension preventing authorization code interception attacks on public clients.",
    "course": "authentication-sessions",
    "section": "federated-auth",
    "tags": [
      "oauth"
    ]
  },
  {
    "term": "OpenID Connect",
    "def": "An identity layer (OIDC) on top of OAuth 2.0 providing standardized user identity tokens (ID tokens).",
    "course": "authentication-sessions",
    "section": "federated-auth",
    "tags": [
      "auth"
    ]
  },
  {
    "term": "MFA",
    "def": "Multi-Factor Authentication: requiring two or more distinct verification factors before granting access.",
    "course": "authentication-sessions",
    "section": "federated-auth",
    "tags": [
      "security"
    ]
  },
  {
    "term": "Same-origin policy",
    "def": "A critical browser security model restricting scripts on one origin from accessing data from another origin.",
    "course": "frontend-backend",
    "section": "network-boundary",
    "tags": [
      "security"
    ]
  },
  {
    "term": "Origin",
    "def": "The combination of URI scheme (protocol), host domain, and port number (e.g. https://example.com:443).",
    "course": "frontend-backend",
    "section": "network-boundary",
    "tags": [
      "web"
    ]
  },
  {
    "term": "CORS preflight",
    "def": "An automatic HTTP OPTIONS request sent by the browser to verify cross-origin permissions before the main request.",
    "course": "frontend-backend",
    "section": "network-boundary",
    "tags": [
      "cors"
    ]
  },
  {
    "term": "Access-Control-Allow-Origin",
    "def": "The server response header designating which client origins are permitted to read the response.",
    "course": "frontend-backend",
    "section": "network-boundary",
    "tags": [
      "cors"
    ]
  },
  {
    "term": "UI state machine",
    "def": "A pattern modeling component states explicitly as idle, loading, success, or error without boolean flags.",
    "course": "frontend-backend",
    "section": "ui-states",
    "tags": [
      "ui"
    ]
  },
  {
    "term": "Empty state",
    "def": "The visual design presented to a user when a successful query returns zero items.",
    "course": "frontend-backend",
    "section": "ui-states",
    "tags": [
      "ux"
    ]
  },
  {
    "term": "Optimistic update",
    "def": "Updating the user interface immediately before the server network confirmation arrives.",
    "course": "frontend-backend",
    "section": "ui-states",
    "tags": [
      "ux"
    ]
  },
  {
    "term": "Rollback",
    "def": "Reverting an optimistic UI change back to its prior state when the underlying network call fails.",
    "course": "frontend-backend",
    "section": "ui-states",
    "tags": [
      "resilience"
    ]
  },
  {
    "term": "Network race condition",
    "def": "A bug where responses to multiple requests arrive out of order, displaying stale data.",
    "course": "frontend-backend",
    "section": "race-conditions",
    "tags": [
      "concurrency"
    ]
  },
  {
    "term": "Debounce",
    "def": "A rate-limiting technique delaying function execution until a specified idle duration has passed without new events.",
    "course": "frontend-backend",
    "section": "race-conditions",
    "tags": [
      "performance"
    ]
  },
  {
    "term": "Throttle",
    "def": "Enforcing a maximum execution frequency on a function over time, regardless of event frequency.",
    "course": "frontend-backend",
    "section": "race-conditions",
    "tags": [
      "performance"
    ]
  },
  {
    "term": "Stale-While-Revalidate",
    "def": "A caching strategy serving cached data immediately while fetching fresh data in the background.",
    "course": "frontend-backend",
    "section": "race-conditions",
    "tags": [
      "caching"
    ]
  },
  {
    "term": "Server-Sent Events",
    "def": "A standard browser protocol (SSE) enabling a server to stream unilateral text events to clients over HTTP.",
    "course": "frontend-backend",
    "section": "real-time",
    "tags": [
      "real-time"
    ]
  },
  {
    "term": "WebSocket",
    "def": "A bidirectional, full-duplex persistent communication channel established over a single TCP socket.",
    "course": "frontend-backend",
    "section": "real-time",
    "tags": [
      "websockets"
    ]
  },
  {
    "term": "Long polling",
    "def": "A technique where a server holds an HTTP request open until new data is ready before responding.",
    "course": "frontend-backend",
    "section": "real-time",
    "tags": [
      "real-time"
    ]
  },
  {
    "term": "Offline queue",
    "def": "A client storage buffer holding user actions locally to sync when internet connectivity restores.",
    "course": "frontend-backend",
    "section": "real-time",
    "tags": [
      "offline"
    ]
  },
  {
    "term": "RDBMS",
    "def": "Relational Database Management System: software managing structured data organized into relations (tables).",
    "course": "sql-relational-databases",
    "section": "relational-foundations",
    "tags": [
      "rdbms"
    ]
  },
  {
    "term": "Table",
    "def": "A structured two-dimensional relation comprising columns with defined datatypes and rows of data.",
    "course": "sql-relational-databases",
    "section": "relational-foundations",
    "tags": [
      "database"
    ]
  },
  {
    "term": "Primary key",
    "def": "A column (or set of columns) that uniquely identifies each individual row in a table.",
    "course": "sql-relational-databases",
    "section": "relational-foundations",
    "tags": [
      "keys"
    ]
  },
  {
    "term": "Foreign key",
    "def": "A column referencing the primary key of another table, enforcing referential integrity.",
    "course": "sql-relational-databases",
    "section": "relational-foundations",
    "tags": [
      "keys"
    ]
  },
  {
    "term": "SQL",
    "def": "Structured Query Language: a standardized declarative language for querying and mutating relational data.",
    "course": "sql-relational-databases",
    "section": "sql-queries",
    "tags": [
      "sql"
    ]
  },
  {
    "term": "WHERE clause",
    "def": "A filter predicate specifying Boolean conditions that rows must satisfy to be returned by a query.",
    "course": "sql-relational-databases",
    "section": "sql-queries",
    "tags": [
      "sql"
    ]
  },
  {
    "term": "NULL",
    "def": "A special SQL marker indicating the absence of any value or an unknown data state.",
    "course": "sql-relational-databases",
    "section": "sql-queries",
    "tags": [
      "data"
    ]
  },
  {
    "term": "Three-valued logic",
    "def": "The SQL logic system where Boolean expressions evaluate to TRUE, FALSE, or UNKNOWN (due to NULLs).",
    "course": "sql-relational-databases",
    "section": "sql-queries",
    "tags": [
      "logic"
    ]
  },
  {
    "term": "DML",
    "def": "Data Manipulation Language: SQL commands (INSERT, UPDATE, DELETE) modifying row data inside tables.",
    "course": "sql-relational-databases",
    "section": "dml-mutations",
    "tags": [
      "dml"
    ]
  },
  {
    "term": "CHECK constraint",
    "def": "A database rule restricting the allowed values in a column using a Boolean expression.",
    "course": "sql-relational-databases",
    "section": "dml-mutations",
    "tags": [
      "constraints"
    ]
  },
  {
    "term": "Cascade delete",
    "def": "A foreign key rule automatically deleting child rows when the referenced parent row is deleted.",
    "course": "sql-relational-databases",
    "section": "dml-mutations",
    "tags": [
      "integrity"
    ]
  },
  {
    "term": "Referential integrity",
    "def": "The guarantee that every foreign key reference points to an existing, valid parent row.",
    "course": "sql-relational-databases",
    "section": "dml-mutations",
    "tags": [
      "integrity"
    ]
  },
  {
    "term": "Aggregate function",
    "def": "A function (like COUNT, SUM, AVG, MAX, MIN) computing a single summary value from multiple rows.",
    "course": "sql-relational-databases",
    "section": "aggregations",
    "tags": [
      "aggregations"
    ]
  },
  {
    "term": "GROUP BY",
    "def": "A clause grouping rows sharing identical values in specified columns into summary rows.",
    "course": "sql-relational-databases",
    "section": "aggregations",
    "tags": [
      "sql"
    ]
  },
  {
    "term": "HAVING clause",
    "def": "A filter predicate applied to aggregated groups after the GROUP BY calculation is performed.",
    "course": "sql-relational-databases",
    "section": "aggregations",
    "tags": [
      "sql"
    ]
  },
  {
    "term": "Query planner",
    "def": "The internal database engine component compiling declarative SQL into an optimal execution plan.",
    "course": "sql-relational-databases",
    "section": "aggregations",
    "tags": [
      "engine"
    ]
  },
  {
    "term": "Cardinality",
    "def": "The numerical relationship between occurrences in two entities (1:1, 1:N, or N:M).",
    "course": "database-design",
    "section": "modeling-cardinality",
    "tags": [
      "modeling"
    ]
  },
  {
    "term": "Entity",
    "def": "A distinct real-world thing, concept, or event represented as a relational table.",
    "course": "database-design",
    "section": "modeling-cardinality",
    "tags": [
      "modeling"
    ]
  },
  {
    "term": "One-to-many",
    "def": "A relationship where one parent record can be associated with multiple child records.",
    "course": "database-design",
    "section": "modeling-cardinality",
    "tags": [
      "relationships"
    ]
  },
  {
    "term": "One-to-one",
    "def": "A relationship where each record in table A corresponds to at most one record in table B.",
    "course": "database-design",
    "section": "modeling-cardinality",
    "tags": [
      "relationships"
    ]
  },
  {
    "term": "Many-to-many",
    "def": "A relationship where multiple records in table A associate with multiple records in table B.",
    "course": "database-design",
    "section": "junction-tables",
    "tags": [
      "relationships"
    ]
  },
  {
    "term": "Junction table",
    "def": "An intermediary table containing foreign keys linking two tables in a many-to-many relationship.",
    "course": "database-design",
    "section": "junction-tables",
    "tags": [
      "tables"
    ]
  },
  {
    "term": "Composite key",
    "def": "A primary key formed by combining two or more columns to guarantee unique identity.",
    "course": "database-design",
    "section": "junction-tables",
    "tags": [
      "keys"
    ]
  },
  {
    "term": "Surrogate key",
    "def": "An artificial, system-generated primary key (like an auto-incrementing ID or UUID).",
    "course": "database-design",
    "section": "junction-tables",
    "tags": [
      "keys"
    ]
  },
  {
    "term": "Normalization",
    "def": "The systematic process of organizing database schema to eliminate data redundancy and anomalies.",
    "course": "database-design",
    "section": "normalization",
    "tags": [
      "normalization"
    ]
  },
  {
    "term": "First Normal Form",
    "def": "1NF: every column contains atomic values, with no repeating groups or arrays.",
    "course": "database-design",
    "section": "normalization",
    "tags": [
      "normalization"
    ]
  },
  {
    "term": "Second Normal Form",
    "def": "2NF: in 1NF and all non-key columns depend on the entire primary key, not a part of it.",
    "course": "database-design",
    "section": "normalization",
    "tags": [
      "normalization"
    ]
  },
  {
    "term": "Third Normal Form",
    "def": "3NF: in 2NF and no non-key column depends on another non-key column (no transitive dependencies).",
    "course": "database-design",
    "section": "normalization",
    "tags": [
      "normalization"
    ]
  },
  {
    "term": "Update anomaly",
    "def": "Data inconsistency occurring when duplicate copies of data are not updated simultaneously.",
    "course": "database-design",
    "section": "anomalies-denorm",
    "tags": [
      "anomalies"
    ]
  },
  {
    "term": "Deletion anomaly",
    "def": "Accidental loss of valid data when deleting a record that also held unrelated information.",
    "course": "database-design",
    "section": "anomalies-denorm",
    "tags": [
      "anomalies"
    ]
  },
  {
    "term": "Denormalization",
    "def": "The deliberate reintroduction of redundancy into a schema to optimize read query performance.",
    "course": "database-design",
    "section": "anomalies-denorm",
    "tags": [
      "performance"
    ]
  },
  {
    "term": "Natural key",
    "def": "A unique attribute that exists in the real world (such as an email or ISBN) used as an identifier.",
    "course": "database-design",
    "section": "anomalies-denorm",
    "tags": [
      "keys"
    ]
  },
  {
    "term": "INNER JOIN",
    "def": "A join returning only rows where the join predicate evaluates to true in both participating tables.",
    "course": "sql-joins",
    "section": "join-mechanics",
    "tags": [
      "joins"
    ]
  },
  {
    "term": "Cross join",
    "def": "A cartesian product (CROSS JOIN) pairing every row in table A with every row in table B.",
    "course": "sql-joins",
    "section": "join-mechanics",
    "tags": [
      "joins"
    ]
  },
  {
    "term": "Join predicate",
    "def": "The ON condition specifying the matching criteria between columns of joined tables.",
    "course": "sql-joins",
    "section": "join-mechanics",
    "tags": [
      "joins"
    ]
  },
  {
    "term": "Equi-join",
    "def": "A join using an equality comparison (=) in its join predicate.",
    "course": "sql-joins",
    "section": "join-mechanics",
    "tags": [
      "joins"
    ]
  },
  {
    "term": "LEFT JOIN",
    "def": "An outer join returning all rows from the left table, populated with NULLs if the right table has no match.",
    "course": "sql-joins",
    "section": "outer-joins",
    "tags": [
      "joins"
    ]
  },
  {
    "term": "RIGHT JOIN",
    "def": "An outer join returning all rows from the right table, populated with NULLs for unmatched left records.",
    "course": "sql-joins",
    "section": "outer-joins",
    "tags": [
      "joins"
    ]
  },
  {
    "term": "FULL OUTER JOIN",
    "def": "A join returning all rows from both tables, matching where possible and inserting NULLs where no match exists.",
    "course": "sql-joins",
    "section": "outer-joins",
    "tags": [
      "joins"
    ]
  },
  {
    "term": "Anti-join",
    "def": "A query pattern (LEFT JOIN ... WHERE right.id IS NULL) finding records that have NO matching relation.",
    "course": "sql-joins",
    "section": "outer-joins",
    "tags": [
      "patterns"
    ]
  },
  {
    "term": "CTE",
    "def": "Common Table Expression (WITH clause): a named temporary result set defined within the scope of a single query.",
    "course": "sql-joins",
    "section": "subqueries-ctes",
    "tags": [
      "cte"
    ]
  },
  {
    "term": "Correlated subquery",
    "def": "A subquery referencing columns from the outer query, evaluated once for every candidate row.",
    "course": "sql-joins",
    "section": "subqueries-ctes",
    "tags": [
      "subqueries"
    ]
  },
  {
    "term": "Self-join",
    "def": "A join where a table is joined with itself using distinct table aliases to model parent-child links.",
    "course": "sql-joins",
    "section": "subqueries-ctes",
    "tags": [
      "joins"
    ]
  },
  {
    "term": "Recursive CTE",
    "def": "A CTE that references its own output to traverse hierarchical or tree-structured data of arbitrary depth.",
    "course": "sql-joins",
    "section": "subqueries-ctes",
    "tags": [
      "cte"
    ]
  },
  {
    "term": "Window function",
    "def": "A calculation function performing operations across a set of rows related to the current row without collapsing rows.",
    "course": "sql-joins",
    "section": "window-functions",
    "tags": [
      "window"
    ]
  },
  {
    "term": "PARTITION BY",
    "def": "The clause dividing rows into distinct groups for window function evaluation.",
    "course": "sql-joins",
    "section": "window-functions",
    "tags": [
      "window"
    ]
  },
  {
    "term": "OVER clause",
    "def": "The clause defining the window partitioning and ordering for an analytical window function.",
    "course": "sql-joins",
    "section": "window-functions",
    "tags": [
      "window"
    ]
  },
  {
    "term": "ROW_NUMBER",
    "def": "A window function assigning a unique sequential integer to each row within a partition.",
    "course": "sql-joins",
    "section": "window-functions",
    "tags": [
      "window"
    ]
  },
  {
    "term": "Index",
    "def": "A separate physical data structure (usually a B-tree) enabling fast logarithmic lookup of rows.",
    "course": "database-indexes-performance",
    "section": "index-foundations",
    "tags": [
      "indexing"
    ]
  },
  {
    "term": "B-tree",
    "def": "Balanced Tree: a self-balancing search tree data structure maintaining sorted data for logarithmic seeks.",
    "course": "database-indexes-performance",
    "section": "index-foundations",
    "tags": [
      "b-tree"
    ]
  },
  {
    "term": "Sequential scan",
    "def": "A scan operation reading every database page and row in table storage from start to finish.",
    "course": "database-indexes-performance",
    "section": "index-foundations",
    "tags": [
      "scans"
    ]
  },
  {
    "term": "Index scan",
    "def": "A two-phase scan traversing a B-tree to find pointers, then fetching corresponding rows from the table heap.",
    "course": "database-indexes-performance",
    "section": "index-foundations",
    "tags": [
      "scans"
    ]
  },
  {
    "term": "EXPLAIN",
    "def": "An SQL command displaying the physical execution plan chosen by the query optimizer without executing it.",
    "course": "database-indexes-performance",
    "section": "query-plans",
    "tags": [
      "explain"
    ]
  },
  {
    "term": "EXPLAIN ANALYZE",
    "def": "An SQL command that actually executes the query and reports true runtime measurements alongside estimates.",
    "course": "database-indexes-performance",
    "section": "query-plans",
    "tags": [
      "explain"
    ]
  },
  {
    "term": "Cost estimate",
    "def": "The query planner's arbitrary unit calculating anticipated disk I/O and CPU work for a plan node.",
    "course": "database-indexes-performance",
    "section": "query-plans",
    "tags": [
      "optimizer"
    ]
  },
  {
    "term": "Index-only scan",
    "def": "A high-speed scan satisfying a query entirely from index leaf nodes without touching table heap pages.",
    "course": "database-indexes-performance",
    "section": "query-plans",
    "tags": [
      "scans"
    ]
  },
  {
    "term": "Composite index",
    "def": "An index created across multiple columns in a specified left-to-right order.",
    "course": "database-indexes-performance",
    "section": "composite-indexes",
    "tags": [
      "indexing"
    ]
  },
  {
    "term": "Leftmost prefix rule",
    "def": "The rule mandating that queries must filter by leading composite index columns to utilize the index.",
    "course": "database-indexes-performance",
    "section": "composite-indexes",
    "tags": [
      "b-tree"
    ]
  },
  {
    "term": "Covering index",
    "def": "An index containing all columns requested by a query (often using INCLUDE), enabling index-only scans.",
    "course": "database-indexes-performance",
    "section": "composite-indexes",
    "tags": [
      "indexing"
    ]
  },
  {
    "term": "Partial index",
    "def": "An index built over a subset of rows filtered by a WHERE clause (e.g. WHERE status = 'pending').",
    "course": "database-indexes-performance",
    "section": "composite-indexes",
    "tags": [
      "indexing"
    ]
  },
  {
    "term": "GIN index",
    "def": "Generalized Inverted Index: an index format optimized for arrays, full-text search, and JSONB documents.",
    "course": "database-indexes-performance",
    "section": "maintenance-costs",
    "tags": [
      "postgres"
    ]
  },
  {
    "term": "Write penalty",
    "def": "The CPU and disk I/O overhead imposed on INSERT, UPDATE, and DELETE operations to update indexes.",
    "course": "database-indexes-performance",
    "section": "maintenance-costs",
    "tags": [
      "performance"
    ]
  },
  {
    "term": "VACUUM",
    "def": "A PostgreSQL maintenance process reclaiming storage occupied by dead row tuples created by updates/deletes.",
    "course": "database-indexes-performance",
    "section": "maintenance-costs",
    "tags": [
      "maintenance"
    ]
  },
  {
    "term": "Index bloat",
    "def": "Unusable empty space inside index leaf pages caused by frequent updates, degrading scan performance.",
    "course": "database-indexes-performance",
    "section": "maintenance-costs",
    "tags": [
      "maintenance"
    ]
  },
  {
    "term": "Transaction",
    "def": "A logical unit of work comprising one or more database operations executed with ACID guarantees.",
    "course": "transactions-data-integrity",
    "section": "acid-foundations",
    "tags": [
      "transactions"
    ]
  },
  {
    "term": "Atomicity",
    "def": "The guarantee that all operations in a transaction either complete entirely or are completely rolled back (all-or-nothing).",
    "course": "transactions-data-integrity",
    "section": "acid-foundations",
    "tags": [
      "acid"
    ]
  },
  {
    "term": "Consistency",
    "def": "The guarantee that a transaction transitions the database from one valid state to another, obeying all constraints.",
    "course": "transactions-data-integrity",
    "section": "acid-foundations",
    "tags": [
      "acid"
    ]
  },
  {
    "term": "Durability",
    "def": "The guarantee that committed data changes will survive permanent server crashes, power losses, and reboots.",
    "course": "transactions-data-integrity",
    "section": "acid-foundations",
    "tags": [
      "acid"
    ]
  },
  {
    "term": "Isolation",
    "def": "The guarantee that concurrently executing transactions do not interfere with each other's intermediate state.",
    "course": "transactions-data-integrity",
    "section": "isolation-anomalies",
    "tags": [
      "acid"
    ]
  },
  {
    "term": "Dirty read",
    "def": "A concurrency anomaly where a transaction reads uncommitted, temporary data written by another active transaction.",
    "course": "transactions-data-integrity",
    "section": "isolation-anomalies",
    "tags": [
      "anomalies"
    ]
  },
  {
    "term": "Non-repeatable read",
    "def": "An anomaly where reading the same row twice within a transaction yields different values because another committed an update.",
    "course": "transactions-data-integrity",
    "section": "isolation-anomalies",
    "tags": [
      "anomalies"
    ]
  },
  {
    "term": "Phantom read",
    "def": "An anomaly where re-running a range query yields new 'phantom' rows inserted and committed by another transaction.",
    "course": "transactions-data-integrity",
    "section": "isolation-anomalies",
    "tags": [
      "anomalies"
    ]
  },
  {
    "term": "MVCC",
    "def": "Multi-Version Concurrency Control: a technique allowing readers to not block writers, and writers to not block readers.",
    "course": "transactions-data-integrity",
    "section": "locking-concurrency",
    "tags": [
      "mvcc"
    ]
  },
  {
    "term": "Pessimistic locking",
    "def": "A strategy that locks rows explicitly (SELECT FOR UPDATE) to prevent concurrent modifications.",
    "course": "transactions-data-integrity",
    "section": "locking-concurrency",
    "tags": [
      "locking"
    ]
  },
  {
    "term": "Optimistic locking",
    "def": "A strategy that detects concurrent collisions at write time using a version or timestamp column without locking.",
    "course": "transactions-data-integrity",
    "section": "locking-concurrency",
    "tags": [
      "locking"
    ]
  },
  {
    "term": "Deadlock",
    "def": "A circular dependency deadlock where two transactions each hold a lock the other needs, blocking each other forever.",
    "course": "transactions-data-integrity",
    "section": "locking-concurrency",
    "tags": [
      "deadlocks"
    ]
  },
  {
    "term": "WAL",
    "def": "Write-Ahead Logging: a durability mechanism writing changes sequentially to an append-only log before modifying heap data.",
    "course": "transactions-data-integrity",
    "section": "durability-wal",
    "tags": [
      "durability"
    ]
  },
  {
    "term": "fsync",
    "def": "An operating system system call flushing volatile hard drive write cache buffers to permanent non-volatile storage.",
    "course": "transactions-data-integrity",
    "section": "durability-wal",
    "tags": [
      "storage"
    ]
  },
  {
    "term": "Two-Phase Commit",
    "def": "A distributed protocol (2PC) coordinating atomic transaction commits across multiple independent databases.",
    "course": "transactions-data-integrity",
    "section": "durability-wal",
    "tags": [
      "distributed"
    ]
  },
  {
    "term": "Saga pattern",
    "def": "An architectural pattern managing distributed transactions through a sequence of local transactions and compensations.",
    "course": "transactions-data-integrity",
    "section": "durability-wal",
    "tags": [
      "patterns"
    ]
  },
  {
    "term": "JSONB",
    "def": "PostgreSQL's binary parsed JSON format: slightly slower to write than plain JSON, but vastly faster to query and index.",
    "course": "postgresql",
    "section": "types-jsonb",
    "tags": [
      "jsonb"
    ]
  },
  {
    "term": "Array type",
    "def": "A native PostgreSQL column type (e.g. integer[] or text[]) storing ordered collections of scalar values.",
    "course": "postgresql",
    "section": "types-jsonb",
    "tags": [
      "types"
    ]
  },
  {
    "term": "Range type",
    "def": "A native type representing a continuous range of values (e.g. daterange or int4range) supporting overlap checks.",
    "course": "postgresql",
    "section": "types-jsonb",
    "tags": [
      "types"
    ]
  },
  {
    "term": "Existence operator (?)",
    "def": "A JSONB operator testing whether a specified top-level key exists inside a document.",
    "course": "postgresql",
    "section": "types-jsonb",
    "tags": [
      "operators"
    ]
  },
  {
    "term": "Extension",
    "def": "A packaged bundle of functions, data types, and operators adding specialized capabilities to PostgreSQL.",
    "course": "postgresql",
    "section": "extensions-search",
    "tags": [
      "extensions"
    ]
  },
  {
    "term": "pg_trgm",
    "def": "A popular extension providing trigram matching for fast fuzzy string searches and regex indexes.",
    "course": "postgresql",
    "section": "extensions-search",
    "tags": [
      "search"
    ]
  },
  {
    "term": "tsvector",
    "def": "A native full-text search data type storing normalized, sorted, pre-stemmed lexemes with word positions.",
    "course": "postgresql",
    "section": "extensions-search",
    "tags": [
      "search"
    ]
  },
  {
    "term": "tsquery",
    "def": "A full-text search query type containing Boolean search terms (e.g. 'cat & dog') evaluated against tsvectors.",
    "course": "postgresql",
    "section": "extensions-search",
    "tags": [
      "search"
    ]
  },
  {
    "term": "Role",
    "def": "A PostgreSQL database user or group possessing specific login rights and resource permissions.",
    "course": "postgresql",
    "section": "security-rls",
    "tags": [
      "security"
    ]
  },
  {
    "term": "Row-Level Security",
    "def": "A database security feature (RLS) restricting which table rows a user query can read or modify via security policies.",
    "course": "postgresql",
    "section": "security-rls",
    "tags": [
      "security"
    ]
  },
  {
    "term": "GRANT",
    "def": "An SQL command conferring specific privileges (SELECT, INSERT, UPDATE) on database objects to roles.",
    "course": "postgresql",
    "section": "security-rls",
    "tags": [
      "permissions"
    ]
  },
  {
    "term": "REVOKE",
    "def": "An SQL command withdrawing previously granted privileges from a database role.",
    "course": "postgresql",
    "section": "security-rls",
    "tags": [
      "permissions"
    ]
  },
  {
    "term": "pg_dump",
    "def": "The standard PostgreSQL command-line utility for exporting database schemas and data into backup files.",
    "course": "postgresql",
    "section": "operations-backups",
    "tags": [
      "backups"
    ]
  },
  {
    "term": "PITR",
    "def": "Point-in-Time Recovery: restoring a database to any specific historical millisecond using base backups and WAL logs.",
    "course": "postgresql",
    "section": "operations-backups",
    "tags": [
      "recovery"
    ]
  },
  {
    "term": "Connection pooler",
    "def": "An intermediary service (like PgBouncer) multiplexing thousands of client connections onto a small set of backend processes.",
    "course": "postgresql",
    "section": "operations-backups",
    "tags": [
      "scaling"
    ]
  },
  {
    "term": "Autovacuum",
    "def": "A background daemon in PostgreSQL that automatically removes dead row versions and updates statistical tables.",
    "course": "postgresql",
    "section": "operations-backups",
    "tags": [
      "maintenance"
    ]
  },
  {
    "term": "ORM",
    "def": "Object-Relational Mapping: software library converting data between relational tables and object-oriented models.",
    "course": "orms",
    "section": "orm-foundations",
    "tags": [
      "orm"
    ]
  },
  {
    "term": "Impedance mismatch",
    "def": "The fundamental conceptual mismatch between object-oriented models (graphs, inheritance) and relational sets.",
    "course": "orms",
    "section": "orm-foundations",
    "tags": [
      "theory"
    ]
  },
  {
    "term": "Active Record",
    "def": "An architectural pattern where an entity class encapsulates both database access and domain business logic.",
    "course": "orms",
    "section": "orm-foundations",
    "tags": [
      "patterns"
    ]
  },
  {
    "term": "Data Mapper",
    "def": "An architectural pattern isolating pure domain models from database persistence mechanics via a separate mapper.",
    "course": "orms",
    "section": "orm-foundations",
    "tags": [
      "patterns"
    ]
  },
  {
    "term": "N+1 query problem",
    "def": "A severe performance antipattern where fetching a collection of N items triggers N additional queries for child data.",
    "course": "orms",
    "section": "query-performance",
    "tags": [
      "performance"
    ]
  },
  {
    "term": "Lazy loading",
    "def": "An ORM pattern deferring the database loading of related child entities until the property is first accessed.",
    "course": "orms",
    "section": "query-performance",
    "tags": [
      "orm"
    ]
  },
  {
    "term": "Eager loading",
    "def": "A pattern fetching parent and child entities together upfront using a JOIN or prefetch to avoid N+1 queries.",
    "course": "orms",
    "section": "query-performance",
    "tags": [
      "performance"
    ]
  },
  {
    "term": "Query logging",
    "def": "A configuration mode in ORMs printing the exact underlying SQL statements emitted to the database.",
    "course": "orms",
    "section": "query-performance",
    "tags": [
      "debugging"
    ]
  },
  {
    "term": "Unit of Work",
    "def": "A pattern maintaining a list of objects affected by a business transaction and coordinating write flushes atomically.",
    "course": "orms",
    "section": "unit-of-work",
    "tags": [
      "patterns"
    ]
  },
  {
    "term": "Identity Map",
    "def": "An in-memory registry ensuring each database record is loaded into exactly one object instance per session.",
    "course": "orms",
    "section": "unit-of-work",
    "tags": [
      "patterns"
    ]
  },
  {
    "term": "Dirty checking",
    "def": "The automatic detection of modified object attributes by comparing current state against original loaded state.",
    "course": "orms",
    "section": "unit-of-work",
    "tags": [
      "orm"
    ]
  },
  {
    "term": "Session flush",
    "def": "The moment an ORM translates in-memory object mutations into pending SQL INSERT, UPDATE, and DELETE statements.",
    "course": "orms",
    "section": "unit-of-work",
    "tags": [
      "orm"
    ]
  },
  {
    "term": "Automated migration",
    "def": "Tool-assisted generation of schema migration files by comparing ORM model code against database schemas.",
    "course": "orms",
    "section": "migrations-tradeoffs",
    "tags": [
      "migrations"
    ]
  },
  {
    "term": "Query builder",
    "def": "A programmatic, chainable interface (like Knex or Kysely) constructing SQL queries without full ORM overhead.",
    "course": "orms",
    "section": "migrations-tradeoffs",
    "tags": [
      "tooling"
    ]
  },
  {
    "term": "Object inflation",
    "def": "The CPU and memory overhead of instantiating hundreds of heavy class instances from raw database rows.",
    "course": "orms",
    "section": "migrations-tradeoffs",
    "tags": [
      "performance"
    ]
  },
  {
    "term": "Bulk update",
    "def": "An SQL operation updating thousands of rows in a single query without inflating each row into an in-memory object.",
    "course": "orms",
    "section": "migrations-tradeoffs",
    "tags": [
      "sql"
    ]
  },
  {
    "term": "Layered architecture",
    "def": "An architectural pattern organizing code into horizontal layers where each layer has a specific responsibility.",
    "course": "backend-architecture",
    "section": "layers-boundaries",
    "tags": [
      "architecture"
    ]
  },
  {
    "term": "Separation of concerns",
    "def": "A design principle separating a program into distinct sections where each addresses a separate concern.",
    "course": "backend-architecture",
    "section": "layers-boundaries",
    "tags": [
      "principles"
    ]
  },
  {
    "term": "Dependency rule",
    "def": "The rule stating that source code dependencies must only point inward toward higher-level business policies.",
    "course": "backend-architecture",
    "section": "layers-boundaries",
    "tags": [
      "clean-arch"
    ]
  },
  {
    "term": "Domain model",
    "def": "The representation of real-world business concepts, rules, and logic isolated from delivery frameworks.",
    "course": "backend-architecture",
    "section": "layers-boundaries",
    "tags": [
      "domain"
    ]
  },
  {
    "term": "Hexagonal Architecture",
    "def": "An architecture (Ports and Adapters) isolating application core logic from external tools and delivery mechanisms.",
    "course": "backend-architecture",
    "section": "hexagonal-ports",
    "tags": [
      "hexagonal"
    ]
  },
  {
    "term": "Port",
    "def": "An interface defined by the application core specifying how it interacts with external components.",
    "course": "backend-architecture",
    "section": "hexagonal-ports",
    "tags": [
      "hexagonal"
    ]
  },
  {
    "term": "Adapter",
    "def": "A concrete implementation translating between an external technology (like HTTP or SQL) and an application port.",
    "course": "backend-architecture",
    "section": "hexagonal-ports",
    "tags": [
      "hexagonal"
    ]
  },
  {
    "term": "Dependency Inversion",
    "def": "A design principle stating high-level modules should not depend on low-level modules; both depend on abstractions.",
    "course": "backend-architecture",
    "section": "hexagonal-ports",
    "tags": [
      "solid"
    ]
  },
  {
    "term": "Service Layer",
    "def": "A boundary layer establishing available operations and coordinating application business logic.",
    "course": "backend-architecture",
    "section": "services-repositories",
    "tags": [
      "services"
    ]
  },
  {
    "term": "Repository pattern",
    "def": "An abstraction layer mediating between domain logic and data storage, mimicking an in-memory collection.",
    "course": "backend-architecture",
    "section": "services-repositories",
    "tags": [
      "repositories"
    ]
  },
  {
    "term": "DTO",
    "def": "Data Transfer Object: a simple object carrying data between processes or layers with zero business logic.",
    "course": "backend-architecture",
    "section": "services-repositories",
    "tags": [
      "dto"
    ]
  },
  {
    "term": "Domain Service",
    "def": "A service encapsulating business logic that naturally involves multiple domain entities.",
    "course": "backend-architecture",
    "section": "services-repositories",
    "tags": [
      "services"
    ]
  },
  {
    "term": "Structured logging",
    "def": "Emitting log messages as machine-readable JSON key-value pairs rather than unstructured plain text lines.",
    "course": "backend-architecture",
    "section": "config-observability",
    "tags": [
      "observability"
    ]
  },
  {
    "term": "Health check",
    "def": "A dedicated endpoint (/healthz) used by load balancers and orchestrators to verify service readiness.",
    "course": "backend-architecture",
    "section": "config-observability",
    "tags": [
      "operations"
    ]
  },
  {
    "term": "Graceful shutdown",
    "def": "The orderly process of stopping a server: refusing new requests, completing in-flight requests, and closing pools.",
    "course": "backend-architecture",
    "section": "config-observability",
    "tags": [
      "operations"
    ]
  },
  {
    "term": "Circuit breaker",
    "def": "A stability pattern halting calls to a failing remote service to prevent cascading outages.",
    "course": "backend-architecture",
    "section": "config-observability",
    "tags": [
      "resilience"
    ]
  },
  {
    "term": "FastAPI",
    "def": "A modern, high-performance web framework for building APIs with Python based on standard type hints.",
    "course": "fastapi",
    "section": "fastapi-basics",
    "tags": [
      "framework"
    ]
  },
  {
    "term": "Pydantic",
    "def": "A data validation and settings management library using Python type annotations to enforce schemas.",
    "course": "fastapi",
    "section": "fastapi-basics",
    "tags": [
      "pydantic"
    ]
  },
  {
    "term": "ASGI",
    "def": "Asynchronous Server Gateway Interface: the standard interface between async Python web servers and applications.",
    "course": "fastapi",
    "section": "fastapi-basics",
    "tags": [
      "asgi"
    ]
  },
  {
    "term": "Uvicorn",
    "def": "A lightning-fast ASGI web server implementation for Python based on uvloop and httptools.",
    "course": "fastapi",
    "section": "fastapi-basics",
    "tags": [
      "servers"
    ]
  },
  {
    "term": "Depends",
    "def": "FastAPI's dependency injection function declaring that a route parameter requires a dependency helper.",
    "course": "fastapi",
    "section": "dependency-injection",
    "tags": [
      "di"
    ]
  },
  {
    "term": "Yield dependency",
    "def": "A dependency using 'yield' to execute setup code before the route and cleanup code after the response.",
    "course": "fastapi",
    "section": "dependency-injection",
    "tags": [
      "di"
    ]
  },
  {
    "term": "APIRouter",
    "def": "A class allowing modular decomposition of route definitions across multiple files and packages.",
    "course": "fastapi",
    "section": "dependency-injection",
    "tags": [
      "routing"
    ]
  },
  {
    "term": "Path parameter",
    "def": "A variable part of a URL path (e.g. /items/{item_id}) captured directly by a route function.",
    "course": "fastapi",
    "section": "dependency-injection",
    "tags": [
      "routing"
    ]
  },
  {
    "term": "OAuth2PasswordBearer",
    "def": "A security utility class declaring an OAuth2 password flow and extracting bearer tokens from headers.",
    "course": "fastapi",
    "section": "security-fastapi",
    "tags": [
      "security"
    ]
  },
  {
    "term": "HTTPException",
    "def": "FastAPI's standard exception class for returning HTTP error status codes and detail messages.",
    "course": "fastapi",
    "section": "security-fastapi",
    "tags": [
      "errors"
    ]
  },
  {
    "term": "Response model",
    "def": "The Pydantic model declared on a route (response_model=UserOut) filtering and serializing output data.",
    "course": "fastapi",
    "section": "security-fastapi",
    "tags": [
      "serialization"
    ]
  },
  {
    "term": "Field validator",
    "def": "A Pydantic method decorator (@field_validator) defining custom validation logic on model fields.",
    "course": "fastapi",
    "section": "security-fastapi",
    "tags": [
      "pydantic"
    ]
  },
  {
    "term": "BackgroundTasks",
    "def": "A FastAPI utility class queueing functions to execute in the background after the response is sent.",
    "course": "fastapi",
    "section": "async-lifecycle",
    "tags": [
      "tasks"
    ]
  },
  {
    "term": "Lifespan",
    "def": "An async context manager managing application startup and shutdown events (replacing on_event).",
    "course": "fastapi",
    "section": "async-lifecycle",
    "tags": [
      "lifecycle"
    ]
  },
  {
    "term": "Middleware",
    "def": "A function processing every request before it reaches a route and every response before it is returned.",
    "course": "fastapi",
    "section": "async-lifecycle",
    "tags": [
      "middleware"
    ]
  },
  {
    "term": "Swagger UI",
    "def": "The interactive OpenAPI documentation playground rendered automatically at /docs by FastAPI.",
    "course": "fastapi",
    "section": "async-lifecycle",
    "tags": [
      "docs"
    ]
  },
  {
    "term": "Component",
    "def": "A pure JavaScript function accepting props and returning JSX markup describing a UI tree.",
    "course": "react-architecture",
    "section": "components-props",
    "tags": [
      "components"
    ]
  },
  {
    "term": "Props",
    "def": "Read-only input properties passed down from a parent component to configure child components.",
    "course": "react-architecture",
    "section": "components-props",
    "tags": [
      "props"
    ]
  },
  {
    "term": "Unidirectional data flow",
    "def": "The architecture where state flows strictly downward via props, and events flow upward via callbacks.",
    "course": "react-architecture",
    "section": "components-props",
    "tags": [
      "architecture"
    ]
  },
  {
    "term": "Pure component",
    "def": "A component function that always returns the exact same JSX output for the same props and state.",
    "course": "react-architecture",
    "section": "components-props",
    "tags": [
      "react"
    ]
  },
  {
    "term": "State",
    "def": "Internal component memory that persists across renders and triggers re-rendering when updated.",
    "course": "react-architecture",
    "section": "state-rendering",
    "tags": [
      "state"
    ]
  },
  {
    "term": "State co-location",
    "def": "The practice of keeping state as close as possible to the component that actually renders or consumes it.",
    "course": "react-architecture",
    "section": "state-rendering",
    "tags": [
      "architecture"
    ]
  },
  {
    "term": "Reconciliation",
    "def": "The algorithm React uses to diff virtual DOM trees and determine minimal real DOM updates.",
    "course": "react-architecture",
    "section": "state-rendering",
    "tags": [
      "reconciliation"
    ]
  },
  {
    "term": "Derived state",
    "def": "Values computed on-the-fly during render from existing props or state rather than stored in separate state.",
    "course": "react-architecture",
    "section": "state-rendering",
    "tags": [
      "state"
    ]
  },
  {
    "term": "Hook",
    "def": "A special function (prefixed with 'use') allowing functional components to hook into React state and lifecycles.",
    "course": "react-architecture",
    "section": "hooks-effects",
    "tags": [
      "hooks"
    ]
  },
  {
    "term": "useEffect",
    "def": "A hook that synchronizes a component with an external system (network, DOM, timer) after rendering.",
    "course": "react-architecture",
    "section": "hooks-effects",
    "tags": [
      "hooks"
    ]
  },
  {
    "term": "Custom hook",
    "def": "A reusable function encapsulating stateful logic and other hooks, returning data and actions.",
    "course": "react-architecture",
    "section": "hooks-effects",
    "tags": [
      "hooks"
    ]
  },
  {
    "term": "Dependency array",
    "def": "The array passed to useEffect, useMemo, or useCallback specifying which values trigger re-execution when changed.",
    "course": "react-architecture",
    "section": "hooks-effects",
    "tags": [
      "hooks"
    ]
  },
  {
    "term": "Context API",
    "def": "A React feature providing dependency injection of data across component subtrees without prop drilling.",
    "course": "react-architecture",
    "section": "architecture-patterns",
    "tags": [
      "context"
    ]
  },
  {
    "term": "Prop drilling",
    "def": "The antipattern of passing props down through multiple layers of intermediate components that don't need them.",
    "course": "react-architecture",
    "section": "architecture-patterns",
    "tags": [
      "antipattern"
    ]
  },
  {
    "term": "Error boundary",
    "def": "A special component that catches JavaScript errors anywhere in its child tree, preventing full app crashes.",
    "course": "react-architecture",
    "section": "architecture-patterns",
    "tags": [
      "errors"
    ]
  },
  {
    "term": "Code splitting",
    "def": "Splitting application JavaScript bundles into smaller chunks loaded on demand via React.lazy and Suspense.",
    "course": "react-architecture",
    "section": "architecture-patterns",
    "tags": [
      "performance"
    ]
  },
  {
    "term": "Intention-revealing name",
    "def": "An identifier whose name explicitly answers why it exists, what it does, and how it is used.",
    "course": "clean-code",
    "section": "names-simplicity",
    "tags": [
      "naming"
    ]
  },
  {
    "term": "Magic number",
    "def": "A raw numeric literal in code without an explanatory named constant, obscuring its meaning.",
    "course": "clean-code",
    "section": "names-simplicity",
    "tags": [
      "smells"
    ]
  },
  {
    "term": "Single responsibility",
    "def": "The principle that a function or class should do exactly one thing and have one reason to change.",
    "course": "clean-code",
    "section": "names-simplicity",
    "tags": [
      "principles"
    ]
  },
  {
    "term": "Flag argument",
    "def": "A boolean parameter passed to a function that forces it to do two completely different things based on true/false.",
    "course": "clean-code",
    "section": "names-simplicity",
    "tags": [
      "smells"
    ]
  },
  {
    "term": "Guard clause",
    "def": "A conditional statement at the beginning of a function that returns or exits early on invalid conditions.",
    "course": "clean-code",
    "section": "functions-nesting",
    "tags": [
      "refactoring"
    ]
  },
  {
    "term": "Pyramid of Doom",
    "def": "Deeply nested, arrow-shaped conditional blocks that strain human working memory to parse.",
    "course": "clean-code",
    "section": "functions-nesting",
    "tags": [
      "smells"
    ]
  },
  {
    "term": "Side effect",
    "def": "An unadvertised modification of state outside a function that violates caller expectations.",
    "course": "clean-code",
    "section": "functions-nesting",
    "tags": [
      "clean-code"
    ]
  },
  {
    "term": "Command Query Separation",
    "def": "CQS: A principle stating a function should either perform an action OR return data, but never both.",
    "course": "clean-code",
    "section": "functions-nesting",
    "tags": [
      "principles"
    ]
  },
  {
    "term": "Code smell",
    "def": "A surface symptom in code that often indicates a deeper architectural or design weakness.",
    "course": "clean-code",
    "section": "code-smells",
    "tags": [
      "smells"
    ]
  },
  {
    "term": "Feature Envy",
    "def": "A smell where a method seems more interested in the data of another class than the class it belongs to.",
    "course": "clean-code",
    "section": "code-smells",
    "tags": [
      "smells"
    ]
  },
  {
    "term": "Shotgun Surgery",
    "def": "A smell where making one conceptual change requires making tiny edits across dozens of separate files.",
    "course": "clean-code",
    "section": "code-smells",
    "tags": [
      "smells"
    ]
  },
  {
    "term": "Primitive Obsession",
    "def": "The reluctance to create small domain types, instead using raw primitives (strings, ints) for complex concepts.",
    "course": "clean-code",
    "section": "code-smells",
    "tags": [
      "smells"
    ]
  },
  {
    "term": "Refactoring",
    "def": "The process of restructuring existing computer code without changing its external observable behavior.",
    "course": "clean-code",
    "section": "refactoring-discipline",
    "tags": [
      "refactoring"
    ]
  },
  {
    "term": "Boy Scout Rule",
    "def": "The practice of leaving the codebase cleaner than you found it on every task or commit.",
    "course": "clean-code",
    "section": "refactoring-discipline",
    "tags": [
      "craft"
    ]
  },
  {
    "term": "Dead code",
    "def": "Commented-out code, unused functions, or unreachable branches that clutter the repository.",
    "course": "clean-code",
    "section": "refactoring-discipline",
    "tags": [
      "hygiene"
    ]
  },
  {
    "term": "Technical debt",
    "def": "The implied cost of future rework caused by choosing an easy solution now instead of a better approach.",
    "course": "clean-code",
    "section": "refactoring-discipline",
    "tags": [
      "craft"
    ]
  },
  {
    "term": "Separation of concerns",
    "def": "A design principle dividing a system into distinct parts where each part addresses a separate concern.",
    "course": "separation-of-concerns",
    "section": "cohesion-coupling",
    "tags": [
      "principles"
    ]
  },
  {
    "term": "Cohesion",
    "def": "The degree to which the elements inside a single module or class belong together and share a focused purpose.",
    "course": "separation-of-concerns",
    "section": "cohesion-coupling",
    "tags": [
      "metrics"
    ]
  },
  {
    "term": "Coupling",
    "def": "The degree of direct interdependence between separate software modules.",
    "course": "separation-of-concerns",
    "section": "cohesion-coupling",
    "tags": [
      "metrics"
    ]
  },
  {
    "term": "Parnas partitioning",
    "def": "Decomposing systems into modules by hiding design decisions that are likely to change behind stable interfaces.",
    "course": "separation-of-concerns",
    "section": "cohesion-coupling",
    "tags": [
      "theory"
    ]
  },
  {
    "term": "Single Responsibility Principle",
    "def": "SRP: a module should be responsible to one, and only one, actor or business stakeholder.",
    "course": "separation-of-concerns",
    "section": "srp-actors",
    "tags": [
      "srp"
    ]
  },
  {
    "term": "Actor",
    "def": "A single person or group of stakeholders (e.g. accounting, operations) who require a specific business policy.",
    "course": "separation-of-concerns",
    "section": "srp-actors",
    "tags": [
      "srp"
    ]
  },
  {
    "term": "God object",
    "def": "An architectural antipattern where a single class or module knows too much or does too much.",
    "course": "separation-of-concerns",
    "section": "srp-actors",
    "tags": [
      "antipattern"
    ]
  },
  {
    "term": "Information hiding",
    "def": "The principle of concealing internal data representation and algorithms behind private module boundaries.",
    "course": "separation-of-concerns",
    "section": "srp-actors",
    "tags": [
      "principles"
    ]
  },
  {
    "term": "Cross-cutting concern",
    "def": "A feature (like logging, authentication, caching) that spans across multiple modules and layers.",
    "course": "separation-of-concerns",
    "section": "cross-cutting",
    "tags": [
      "architecture"
    ]
  },
  {
    "term": "Decorator pattern",
    "def": "A structural pattern wrapping an object to add new behavior dynamically without altering the original class.",
    "course": "separation-of-concerns",
    "section": "cross-cutting",
    "tags": [
      "patterns"
    ]
  },
  {
    "term": "Aspect-Oriented Programming",
    "def": "A paradigm (AOP) separating cross-cutting concerns by applying interceptors at join points.",
    "course": "separation-of-concerns",
    "section": "cross-cutting",
    "tags": [
      "paradigms"
    ]
  },
  {
    "term": "Middleware pipeline",
    "def": "A series of sequential filters processing requests before business handlers and responses afterward.",
    "course": "separation-of-concerns",
    "section": "cross-cutting",
    "tags": [
      "middleware"
    ]
  },
  {
    "term": "Leaky abstraction",
    "def": "An abstraction that fails to completely conceal its underlying implementation details from consumers.",
    "course": "separation-of-concerns",
    "section": "boundaries-leaks",
    "tags": [
      "abstractions"
    ]
  },
  {
    "term": "Law of Demeter",
    "def": "The principle of least knowledge: a method should only talk to its immediate friends, never strangers (a.b.c.d()).",
    "course": "separation-of-concerns",
    "section": "boundaries-leaks",
    "tags": [
      "principles"
    ]
  },
  {
    "term": "Bounded context",
    "def": "A linguistic and conceptual boundary within which a specific domain model applies consistently.",
    "course": "separation-of-concerns",
    "section": "boundaries-leaks",
    "tags": [
      "ddd"
    ]
  },
  {
    "term": "Vertical slice",
    "def": "Architecting features end-to-end across UI, logic, and database per business capability rather than technical layers.",
    "course": "separation-of-concerns",
    "section": "boundaries-leaks",
    "tags": [
      "architecture"
    ]
  },
  {
    "term": "Dependency Injection",
    "def": "A design pattern where an object receives its dependencies from the outside rather than creating them internally.",
    "course": "dependency-injection",
    "section": "di-foundations",
    "tags": [
      "di"
    ]
  },
  {
    "term": "Inversion of Control",
    "def": "IoC: a design principle inverting the control flow so a framework or caller drives execution (the Hollywood Principle).",
    "course": "dependency-injection",
    "section": "di-foundations",
    "tags": [
      "ioc"
    ]
  },
  {
    "term": "Pure DI",
    "def": "Practicing dependency injection by hand using plain constructors without any third-party framework or container.",
    "course": "dependency-injection",
    "section": "di-foundations",
    "tags": [
      "di"
    ]
  },
  {
    "term": "Collaborator",
    "def": "An external service or object required by a class to perform its business responsibilities.",
    "course": "dependency-injection",
    "section": "di-foundations",
    "tags": [
      "design"
    ]
  },
  {
    "term": "Composition Root",
    "def": "The single location in an application near the entry point where the entire object dependency graph is wired together.",
    "course": "dependency-injection",
    "section": "wiring-patterns",
    "tags": [
      "patterns"
    ]
  },
  {
    "term": "Constructor injection",
    "def": "The practice of supplying all required dependencies through a class constructor method.",
    "course": "dependency-injection",
    "section": "wiring-patterns",
    "tags": [
      "injection"
    ]
  },
  {
    "term": "Method injection",
    "def": "Passing a dependency as an argument to a specific method call rather than storing it in the constructor.",
    "course": "dependency-injection",
    "section": "wiring-patterns",
    "tags": [
      "injection"
    ]
  },
  {
    "term": "Service Locator",
    "def": "An architectural antipattern where classes query a global registry to locate dependencies, obscuring couplings.",
    "course": "dependency-injection",
    "section": "wiring-patterns",
    "tags": [
      "antipattern"
    ]
  },
  {
    "term": "IoC Container",
    "def": "A library or framework automatically resolving, instantiating, and wiring object dependencies based on registered types.",
    "course": "dependency-injection",
    "section": "containers-lifecycles",
    "tags": [
      "containers"
    ]
  },
  {
    "term": "Transient lifecycle",
    "def": "An object lifecycle where a brand new instance is instantiated on every single injection request.",
    "course": "dependency-injection",
    "section": "containers-lifecycles",
    "tags": [
      "lifecycles"
    ]
  },
  {
    "term": "Scoped lifecycle",
    "def": "An object lifecycle where a single instance is shared within a bounded context (like a single HTTP request).",
    "course": "dependency-injection",
    "section": "containers-lifecycles",
    "tags": [
      "lifecycles"
    ]
  },
  {
    "term": "Singleton lifecycle",
    "def": "An object lifecycle where a single instance is instantiated once and shared across the entire application runtime.",
    "course": "dependency-injection",
    "section": "containers-lifecycles",
    "tags": [
      "lifecycles"
    ]
  },
  {
    "term": "Test double",
    "def": "A generic term for any surrogate object used in place of a real dependency during testing (fakes, mocks, stubs).",
    "course": "dependency-injection",
    "section": "testability-doubles",
    "tags": [
      "testing"
    ]
  },
  {
    "term": "Mock",
    "def": "A test double pre-programmed with expectations about which method calls it should receive, verifying interactions.",
    "course": "dependency-injection",
    "section": "testability-doubles",
    "tags": [
      "testing"
    ]
  },
  {
    "term": "Stub",
    "def": "A test double providing canned answers to calls made during the test, with zero behavior verification.",
    "course": "dependency-injection",
    "section": "testability-doubles",
    "tags": [
      "testing"
    ]
  },
  {
    "term": "Captive dependency",
    "def": "A concurrency bug where a longer-lived service (Singleton) holds onto a shorter-lived service (Scoped).",
    "course": "dependency-injection",
    "section": "testability-doubles",
    "tags": [
      "bugs"
    ]
  },
  {
    "term": "Inheritance",
    "def": "A mechanism where a new class derives properties and behaviors from an existing base class (is-a relationship).",
    "course": "composition-vs-inheritance",
    "section": "inheritance-basics",
    "tags": [
      "oop"
    ]
  },
  {
    "term": "Composition",
    "def": "A design technique combining simple independent objects to build complex behaviors (has-a relationship).",
    "course": "composition-vs-inheritance",
    "section": "inheritance-basics",
    "tags": [
      "oop"
    ]
  },
  {
    "term": "Tight coupling",
    "def": "The condition where a subclass is intimately dependent on the internal implementation mechanics of its base class.",
    "course": "composition-vs-inheritance",
    "section": "inheritance-basics",
    "tags": [
      "coupling"
    ]
  },
  {
    "term": "Class explosion",
    "def": "An exponential proliferation of subclasses trying to represent every combination of features (e.g. FlyingSwimmingBird).",
    "course": "composition-vs-inheritance",
    "section": "inheritance-basics",
    "tags": [
      "smells"
    ]
  },
  {
    "term": "Fragile base class",
    "def": "A fundamental architectural flaw where seemingly safe modifications to a base class break subclasses unexpectedly.",
    "course": "composition-vs-inheritance",
    "section": "fragile-base",
    "tags": [
      "antipattern"
    ]
  },
  {
    "term": "Encapsulation breach",
    "def": "The loss of private encapsulation occurring when subclasses depend on base class internal execution order.",
    "course": "composition-vs-inheritance",
    "section": "fragile-base",
    "tags": [
      "oop"
    ]
  },
  {
    "term": "Override",
    "def": "Providing a specialized implementation of a method that is already defined in a superclass.",
    "course": "composition-vs-inheritance",
    "section": "fragile-base",
    "tags": [
      "oop"
    ]
  },
  {
    "term": "super keyword",
    "def": "A keyword used inside a subclass to invoke constructor or method implementations from the parent base class.",
    "course": "composition-vs-inheritance",
    "section": "fragile-base",
    "tags": [
      "oop"
    ]
  },
  {
    "term": "Delegation",
    "def": "A technique where an object handles a request by handing off execution to a secondary collaborator object.",
    "course": "composition-vs-inheritance",
    "section": "delegation-wrappers",
    "tags": [
      "patterns"
    ]
  },
  {
    "term": "Wrapper pattern",
    "def": "An object containing an underlying instance, intercepting calls to add features before delegating.",
    "course": "composition-vs-inheritance",
    "section": "delegation-wrappers",
    "tags": [
      "patterns"
    ]
  },
  {
    "term": "Strategy pattern",
    "def": "A behavioral pattern defining a family of interchangeable algorithms encapsulated in pluggable classes.",
    "course": "composition-vs-inheritance",
    "section": "delegation-wrappers",
    "tags": [
      "patterns"
    ]
  },
  {
    "term": "Mixin",
    "def": "A class or trait providing methods that can be borrowed or mixed into other classes without full inheritance.",
    "course": "composition-vs-inheritance",
    "section": "delegation-wrappers",
    "tags": [
      "oop"
    ]
  },
  {
    "term": "Liskov Substitution Principle",
    "def": "LSP: Subtypes must be substitutable for their base types without altering program correctness.",
    "course": "composition-vs-inheritance",
    "section": "liskov-substitution",
    "tags": [
      "solid"
    ]
  },
  {
    "term": "Precondition",
    "def": "A requirement that must be satisfied before a method executes; subtypes cannot strengthen preconditions.",
    "course": "composition-vs-inheritance",
    "section": "liskov-substitution",
    "tags": [
      "contracts"
    ]
  },
  {
    "term": "Postcondition",
    "def": "A guarantee that must hold true after a method finishes; subtypes cannot weaken postconditions.",
    "course": "composition-vs-inheritance",
    "section": "liskov-substitution",
    "tags": [
      "contracts"
    ]
  },
  {
    "term": "Abstract class",
    "def": "A base class that cannot be instantiated directly, designed strictly to be subclassed with abstract methods.",
    "course": "composition-vs-inheritance",
    "section": "liskov-substitution",
    "tags": [
      "oop"
    ]
  },
  {
    "term": "Design pattern",
    "def": "A general, reusable solution to a commonly occurring problem within a given context in software design.",
    "course": "design-patterns",
    "section": "pattern-basics",
    "tags": [
      "patterns"
    ]
  },
  {
    "term": "Creational pattern",
    "def": "A category of design patterns (Factory, Builder, Singleton) dealing with object creation mechanisms.",
    "course": "design-patterns",
    "section": "pattern-basics",
    "tags": [
      "creational"
    ]
  },
  {
    "term": "Factory Method",
    "def": "A creational pattern providing an interface for creating objects in a superclass, letting subclasses alter the type.",
    "course": "design-patterns",
    "section": "pattern-basics",
    "tags": [
      "creational"
    ]
  },
  {
    "term": "Builder pattern",
    "def": "A creational pattern allowing the step-by-step construction of complex objects using chained methods.",
    "course": "design-patterns",
    "section": "pattern-basics",
    "tags": [
      "creational"
    ]
  },
  {
    "term": "Structural pattern",
    "def": "A category of patterns (Adapter, Facade, Decorator, Proxy) explaining how to assemble objects into larger structures.",
    "course": "design-patterns",
    "section": "structural-patterns",
    "tags": [
      "structural"
    ]
  },
  {
    "term": "Adapter pattern",
    "def": "A structural pattern converting the interface of a class into another interface clients expect.",
    "course": "design-patterns",
    "section": "structural-patterns",
    "tags": [
      "structural"
    ]
  },
  {
    "term": "Facade pattern",
    "def": "A structural pattern providing a simplified, high-level interface to a complex library, framework, or subsystem.",
    "course": "design-patterns",
    "section": "structural-patterns",
    "tags": [
      "structural"
    ]
  },
  {
    "term": "Proxy pattern",
    "def": "A structural pattern providing a surrogate or placeholder for another object to control access, caching, or logging.",
    "course": "design-patterns",
    "section": "structural-patterns",
    "tags": [
      "structural"
    ]
  },
  {
    "term": "Behavioral pattern",
    "def": "A category of patterns (Observer, Strategy, Command, State) concerned with algorithms and assignment of responsibilities.",
    "course": "design-patterns",
    "section": "behavioral-patterns",
    "tags": [
      "behavioral"
    ]
  },
  {
    "term": "Observer pattern",
    "def": "A behavioral pattern defining a subscription mechanism to notify multiple objects about any events that happen.",
    "course": "design-patterns",
    "section": "behavioral-patterns",
    "tags": [
      "behavioral"
    ]
  },
  {
    "term": "Command pattern",
    "def": "A behavioral pattern encapsulating a request as a standalone object containing all information about the request.",
    "course": "design-patterns",
    "section": "behavioral-patterns",
    "tags": [
      "behavioral"
    ]
  },
  {
    "term": "State pattern",
    "def": "A behavioral pattern allowing an object to alter its behavior when its internal state changes, appearing to change its class.",
    "course": "design-patterns",
    "section": "behavioral-patterns",
    "tags": [
      "behavioral"
    ]
  },
  {
    "term": "Patternitis",
    "def": "The antipattern of prematurely forcing design patterns into simple code where they add unnecessary complexity.",
    "course": "design-patterns",
    "section": "antipatterns-overuse",
    "tags": [
      "antipattern"
    ]
  },
  {
    "term": "YAGNI",
    "def": "You Aren't Gonna Need It: an extreme programming principle stating functionality should not be added until required.",
    "course": "design-patterns",
    "section": "antipatterns-overuse",
    "tags": [
      "principles"
    ]
  },
  {
    "term": "Singleton pattern",
    "def": "A creational pattern ensuring a class has only one instance while providing a global access point to it.",
    "course": "design-patterns",
    "section": "antipatterns-overuse",
    "tags": [
      "creational"
    ]
  },
  {
    "term": "Null Object pattern",
    "def": "A pattern substituting a neutral, do-nothing object in place of null to eliminate null-check boilerplate.",
    "course": "design-patterns",
    "section": "antipatterns-overuse",
    "tags": [
      "patterns"
    ]
  },
  {
    "term": "Software architecture",
    "def": "The fundamental organization of a system embodied in its components, relationships, and design principles.",
    "course": "software-architecture-patterns",
    "section": "macro-architecture",
    "tags": [
      "architecture"
    ]
  },
  {
    "term": "Monolith",
    "def": "An architectural style where all user interface, business logic, and data access code are packaged into a single deployment unit.",
    "course": "software-architecture-patterns",
    "section": "macro-architecture",
    "tags": [
      "architecture"
    ]
  },
  {
    "term": "Modular monolith",
    "def": "A single deployable application with strictly enforced internal module boundaries and private domain models.",
    "course": "software-architecture-patterns",
    "section": "macro-architecture",
    "tags": [
      "architecture"
    ]
  },
  {
    "term": "Microservices",
    "def": "An architectural style structuring an application as a collection of small, independently deployable, loosely coupled services.",
    "course": "software-architecture-patterns",
    "section": "macro-architecture",
    "tags": [
      "microservices"
    ]
  },
  {
    "term": "Event-Driven Architecture",
    "def": "An architectural pattern (EDA) where decoupled software components produce and consume state-change events asynchronously.",
    "course": "software-architecture-patterns",
    "section": "event-driven",
    "tags": [
      "eda"
    ]
  },
  {
    "term": "Domain event",
    "def": "A record representing a significant business event that occurred in the past (e.g. OrderPlaced, PaymentDeclined).",
    "course": "software-architecture-patterns",
    "section": "event-driven",
    "tags": [
      "eda"
    ]
  },
  {
    "term": "Message broker",
    "def": "An intermediary software system (like Apache Kafka or RabbitMQ) routing and persisting asynchronous event messages.",
    "course": "software-architecture-patterns",
    "section": "event-driven",
    "tags": [
      "eda"
    ]
  },
  {
    "term": "Mediator topology",
    "def": "An event-driven pattern using a central workflow orchestrator to coordinate complex multi-step processes.",
    "course": "software-architecture-patterns",
    "section": "event-driven",
    "tags": [
      "patterns"
    ]
  },
  {
    "term": "CQRS",
    "def": "Command Query Responsibility Segregation: separating read operations from write operations into distinct models.",
    "course": "software-architecture-patterns",
    "section": "cqrs-sourcing",
    "tags": [
      "cqrs"
    ]
  },
  {
    "term": "Event Sourcing",
    "def": "An architectural pattern storing the state of a system as an append-only log of immutable historical events.",
    "course": "software-architecture-patterns",
    "section": "cqrs-sourcing",
    "tags": [
      "event-sourcing"
    ]
  },
  {
    "term": "Read model",
    "def": "A denormalized, query-optimized data store projected from domain events specifically tailored for UI reads.",
    "course": "software-architecture-patterns",
    "section": "cqrs-sourcing",
    "tags": [
      "cqrs"
    ]
  },
  {
    "term": "Snapshot",
    "def": "A periodic state checkpoint in event sourcing avoiding replaying an entire event log from the beginning of time.",
    "course": "software-architecture-patterns",
    "section": "cqrs-sourcing",
    "tags": [
      "event-sourcing"
    ]
  },
  {
    "term": "CAP theorem",
    "def": "A theorem stating a distributed data store can simultaneously provide at most two of: Consistency, Availability, and Partition Tolerance.",
    "course": "software-architecture-patterns",
    "section": "conway-cap",
    "tags": [
      "distributed"
    ]
  },
  {
    "term": "Conway's Law",
    "def": "An observation that organizations design systems that mirror their internal communication and organizational structures.",
    "course": "software-architecture-patterns",
    "section": "conway-cap",
    "tags": [
      "principles"
    ]
  },
  {
    "term": "Reverse Conway Maneuver",
    "def": "Reorganizing team communication structures to naturally drive the desired software architecture.",
    "course": "software-architecture-patterns",
    "section": "conway-cap",
    "tags": [
      "strategy"
    ]
  },
  {
    "term": "PACELC theorem",
    "def": "An extension to CAP stating: if there is a Partition (P), trade A or C; Else (E), trade Latency (L) or Consistency (C).",
    "course": "software-architecture-patterns",
    "section": "conway-cap",
    "tags": [
      "distributed"
    ]
  },
  {
    "term": "Regression",
    "def": "A software bug introduced into previously working features by a recent code modification.",
    "course": "testing-fundamentals",
    "section": "fundamentals",
    "tags": [
      "testing",
      "quality"
    ]
  },
  {
    "term": "Automated Testing",
    "def": "The practice of running software to verify that code satisfies requirements without manual intervention.",
    "course": "testing-fundamentals",
    "section": "fundamentals",
    "tags": [
      "testing",
      "automation"
    ]
  },
  {
    "term": "Living Documentation",
    "def": "Test suites that describe system behavior accurately because failing tests halt the build.",
    "course": "testing-fundamentals",
    "section": "fundamentals",
    "tags": [
      "testing",
      "docs"
    ]
  },
  {
    "term": "Arrange-Act-Assert",
    "def": "The universal 3-phase test structure: setting up preconditions, triggering behavior, and asserting outcomes.",
    "course": "testing-fundamentals",
    "section": "structure",
    "tags": [
      "testing",
      "patterns"
    ]
  },
  {
    "term": "Assertion",
    "def": "A boolean check in a test that verifies the actual output matches expected specifications.",
    "course": "testing-fundamentals",
    "section": "structure",
    "tags": [
      "testing",
      "assertions"
    ]
  },
  {
    "term": "Fixture",
    "def": "A reproducible environment or data dependency prepared before a test and cleaned up afterward.",
    "course": "testing-fundamentals",
    "section": "structure",
    "tags": [
      "testing",
      "fixtures"
    ]
  },
  {
    "term": "Test Double",
    "def": "A generic term for any object that replaces a real production component during automated testing.",
    "course": "testing-fundamentals",
    "section": "doubles",
    "tags": [
      "testing",
      "mocks"
    ]
  },
  {
    "term": "Mock",
    "def": "A test double configured with pre-programmed expectations that verifies method invocations.",
    "course": "testing-fundamentals",
    "section": "doubles",
    "tags": [
      "testing",
      "mocks"
    ]
  },
  {
    "term": "Code Coverage",
    "def": "The percentage of production code statements or branches executed during a test suite run.",
    "course": "testing-fundamentals",
    "section": "doubles",
    "tags": [
      "testing",
      "metrics"
    ]
  },
  {
    "term": "Flaky Test",
    "def": "A non-deterministic test that produces different results on the same commit without code changes.",
    "course": "testing-fundamentals",
    "section": "strategy",
    "tags": [
      "testing",
      "ci"
    ]
  },
  {
    "term": "Mutation Testing",
    "def": "A technique that injects deliberate bugs into source code to verify that tests catch them.",
    "course": "testing-fundamentals",
    "section": "strategy",
    "tags": [
      "testing",
      "quality"
    ]
  },
  {
    "term": "Test Pyramid",
    "def": "A model advocating many fast unit tests, fewer integration tests, and very few end-to-end tests.",
    "course": "testing-fundamentals",
    "section": "strategy",
    "tags": [
      "testing",
      "architecture"
    ]
  },
  {
    "term": "Unit of Behavior",
    "def": "A cohesive block of functionality under test, which may comprise a single function or collaborating in-memory classes.",
    "course": "unit-integration-testing",
    "section": "boundaries",
    "tags": [
      "testing",
      "units"
    ]
  },
  {
    "term": "Sociable Unit Test",
    "def": "A unit test that uses real in-memory collaborator classes instead of replacing every dependency with a mock.",
    "course": "unit-integration-testing",
    "section": "boundaries",
    "tags": [
      "testing",
      "architecture"
    ]
  },
  {
    "term": "In-Memory Testing",
    "def": "Executing tests entirely within RAM to achieve microsecond feedback loops without disk or network I/O.",
    "course": "unit-integration-testing",
    "section": "boundaries",
    "tags": [
      "testing",
      "performance"
    ]
  },
  {
    "term": "Transport Interception",
    "def": "Mocking HTTP requests at the adapter level to test serialization and error handling without opening real sockets.",
    "course": "unit-integration-testing",
    "section": "doubles",
    "tags": [
      "testing",
      "http"
    ]
  },
  {
    "term": "Architectural Seam",
    "def": "An interface boundary where two software modules or systems connect and can be isolated for testing.",
    "course": "unit-integration-testing",
    "section": "doubles",
    "tags": [
      "testing",
      "patterns"
    ]
  },
  {
    "term": "Fake",
    "def": "A working in-memory implementation of a dependency (such as an in-memory repository) used during testing.",
    "course": "unit-integration-testing",
    "section": "doubles",
    "tags": [
      "testing",
      "mocks"
    ]
  },
  {
    "term": "Testcontainers",
    "def": "A testing library that provisions disposable Docker containers for databases and message brokers during integration tests.",
    "course": "unit-integration-testing",
    "section": "containers",
    "tags": [
      "testing",
      "docker"
    ]
  },
  {
    "term": "Ephemeral Database",
    "def": "A temporary database instance spun up strictly for the duration of a test run and discarded immediately after.",
    "course": "unit-integration-testing",
    "section": "containers",
    "tags": [
      "testing",
      "databases"
    ]
  },
  {
    "term": "In-Process Test Client",
    "def": "A simulated HTTP client (like Starlette TestClient) that invokes web application handlers in memory.",
    "course": "unit-integration-testing",
    "section": "containers",
    "tags": [
      "testing",
      "api"
    ]
  },
  {
    "term": "Testing Trophy",
    "def": "A testing model emphasizing integration tests as the primary source of confidence and return on investment.",
    "course": "unit-integration-testing",
    "section": "philosophy",
    "tags": [
      "testing",
      "strategy"
    ]
  },
  {
    "term": "Static Analysis",
    "def": "Verifying code quality, types, and syntax rules without executing the program using linters and type checkers.",
    "course": "unit-integration-testing",
    "section": "philosophy",
    "tags": [
      "testing",
      "tooling"
    ]
  },
  {
    "term": "Test Isolation",
    "def": "The principle that each test executes independently without relying on or mutating shared global state.",
    "course": "unit-integration-testing",
    "section": "philosophy",
    "tags": [
      "testing",
      "determinism"
    ]
  },
  {
    "term": "Red-Green-Refactor",
    "def": "The core three-phase micro-cycle of TDD: write a failing test (Red), make it pass (Green), and clean up the design (Refactor).",
    "course": "tdd",
    "section": "rhythm",
    "tags": [
      "tdd",
      "patterns"
    ]
  },
  {
    "term": "Test-First",
    "def": "The discipline of authoring an automated test before writing the production code required to satisfy it.",
    "course": "tdd",
    "section": "rhythm",
    "tags": [
      "tdd",
      "methodology"
    ]
  },
  {
    "term": "Triangulation",
    "def": "Driving the generalization of production algorithms by introducing two or more specific tests that refute hardcoded returns.",
    "course": "tdd",
    "section": "rhythm",
    "tags": [
      "tdd",
      "techniques"
    ]
  },
  {
    "term": "Refactoring",
    "def": "Modifying internal software structure to improve maintainability and readability without altering observable behavior.",
    "course": "tdd",
    "section": "design",
    "tags": [
      "tdd",
      "craft"
    ]
  },
  {
    "term": "YAGNI",
    "def": "'You Aren't Gonna Need It' — the principle of implementing functionality only when tests or requirements strictly demand it.",
    "course": "tdd",
    "section": "design",
    "tags": [
      "tdd",
      "principles"
    ]
  },
  {
    "term": "Interface-First Design",
    "def": "Designing APIs from the perspective of the caller by writing consumer test cases before implementation.",
    "course": "tdd",
    "section": "design",
    "tags": [
      "tdd",
      "architecture"
    ]
  },
  {
    "term": "Chicago School",
    "def": "Classicist inside-out TDD focusing on real domain models, state verification, and minimal mocking.",
    "course": "tdd",
    "section": "schools",
    "tags": [
      "tdd",
      "schools"
    ]
  },
  {
    "term": "London School",
    "def": "Mockist outside-in TDD focusing on top-down interface discovery and interaction verification using mocks.",
    "course": "tdd",
    "section": "schools",
    "tags": [
      "tdd",
      "schools"
    ]
  },
  {
    "term": "Spike Solution",
    "def": "A time-boxed, throwaway prototype written to explore an unfamiliar technology or problem before TDD.",
    "course": "tdd",
    "section": "schools",
    "tags": [
      "tdd",
      "prototyping"
    ]
  },
  {
    "term": "Defect Reproduction Test",
    "def": "A test written specifically to recreate a reported bug before implementing the bug fix.",
    "course": "tdd",
    "section": "quality",
    "tags": [
      "tdd",
      "debugging"
    ]
  },
  {
    "term": "Test Friction",
    "def": "Difficulty encountered when writing a test, which serves as early diagnostic feedback of architectural debt.",
    "course": "tdd",
    "section": "quality",
    "tags": [
      "tdd",
      "architecture"
    ]
  },
  {
    "term": "Code Smell",
    "def": "A surface indication in source code that usually corresponds to a deeper architectural problem or design weakness.",
    "course": "tdd",
    "section": "quality",
    "tags": [
      "tdd",
      "quality"
    ]
  },
  {
    "term": "Technical Debt",
    "def": "A metaphor coined by Ward Cunningham reflecting the implied cost of future rework caused by taking expedients shortcuts now.",
    "course": "refactoring-technical-debt",
    "section": "concepts",
    "tags": [
      "craft",
      "architecture"
    ]
  },
  {
    "term": "Debt Quadrant",
    "def": "Martin Fowler's framework categorizing technical debt along Deliberate/Inadvertent and Prudent/Reckless axes.",
    "course": "refactoring-technical-debt",
    "section": "concepts",
    "tags": [
      "craft",
      "management"
    ]
  },
  {
    "term": "Cognitive Drag",
    "def": "The mental overhead required to read, understand, and safely modify convoluted or poorly structured code.",
    "course": "refactoring-technical-debt",
    "section": "concepts",
    "tags": [
      "craft",
      "readability"
    ]
  },
  {
    "term": "Two Hats Discipline",
    "def": "Kent Beck's rule of strictly separating adding new functionality from improving existing internal structure.",
    "course": "refactoring-technical-debt",
    "section": "discipline",
    "tags": [
      "refactoring",
      "discipline"
    ]
  },
  {
    "term": "Extract Method",
    "def": "The refactoring technique of turning a cohesive block of code into a standalone, named helper function.",
    "course": "refactoring-technical-debt",
    "section": "discipline",
    "tags": [
      "refactoring",
      "techniques"
    ]
  },
  {
    "term": "Rename Symbol",
    "def": "Updating an identifier across a codebase to reveal its true intention and domain meaning.",
    "course": "refactoring-technical-debt",
    "section": "discipline",
    "tags": [
      "refactoring",
      "naming"
    ]
  },
  {
    "term": "Primitive Obsession",
    "def": "A code smell characterized by relying excessively on raw primitives rather than dedicated domain objects.",
    "course": "refactoring-technical-debt",
    "section": "patterns",
    "tags": [
      "craft",
      "smells"
    ]
  },
  {
    "term": "Value Object",
    "def": "A small, immutable object whose equality is determined by its property values rather than identity.",
    "course": "refactoring-technical-debt",
    "section": "patterns",
    "tags": [
      "architecture",
      "domain"
    ]
  },
  {
    "term": "Strangler Fig Pattern",
    "def": "An architectural pattern that incrementally replaces a legacy system by routing slices of traffic to new services.",
    "course": "refactoring-technical-debt",
    "section": "patterns",
    "tags": [
      "architecture",
      "migration"
    ]
  },
  {
    "term": "Characterization Test",
    "def": "A test that documents and locks down the existing behavior of legacy software before refactoring.",
    "course": "refactoring-technical-debt",
    "section": "practice",
    "tags": [
      "testing",
      "legacy"
    ]
  },
  {
    "term": "Boy Scout Rule",
    "def": "The continuous cleanup principle: always leave the code cleaner than you found it on every commit.",
    "course": "refactoring-technical-debt",
    "section": "practice",
    "tags": [
      "craft",
      "culture"
    ]
  },
  {
    "term": "Cycle Time",
    "def": "The total elapsed time from the start of development on a task until it is running in production.",
    "course": "refactoring-technical-debt",
    "section": "practice",
    "tags": [
      "metrics",
      "management"
    ]
  },
  {
    "term": "AI Coding Agent",
    "def": "An autonomous AI system that reasons, uses tools (file edits, terminals), and iterates to achieve software engineering goals.",
    "course": "ai-coding-agents",
    "section": "agents",
    "tags": [
      "ai",
      "agents"
    ]
  },
  {
    "term": "ReAct Pattern",
    "def": "An architecture interleaving verbal reasoning ('Thoughts') with environmental tool invocations ('Actions') and feedback ('Observations').",
    "course": "ai-coding-agents",
    "section": "agents",
    "tags": [
      "ai",
      "patterns"
    ]
  },
  {
    "term": "Agency",
    "def": "The capacity of an automated system to act independently upon its environment to achieve a specified objective.",
    "course": "ai-coding-agents",
    "section": "agents",
    "tags": [
      "ai",
      "theory"
    ]
  },
  {
    "term": "Tool Calling",
    "def": "A mechanism allowing language models to emit structured arguments to invoke predefined host functions.",
    "course": "ai-coding-agents",
    "section": "tools",
    "tags": [
      "ai",
      "tools"
    ]
  },
  {
    "term": "Exact String Replacement",
    "def": "A safe file-editing technique that substitutes a target code block identified by surrounding context lines.",
    "course": "ai-coding-agents",
    "section": "tools",
    "tags": [
      "ai",
      "editing"
    ]
  },
  {
    "term": "Lexical Search",
    "def": "Exact text and regular-expression searching (grep) across files to locate specific symbols and patterns.",
    "course": "ai-coding-agents",
    "section": "tools",
    "tags": [
      "ai",
      "search"
    ]
  },
  {
    "term": "Working Memory",
    "def": "Dynamic, in-session state tracking (such as todo lists and scratchpads) used during active execution.",
    "course": "ai-coding-agents",
    "section": "memory",
    "tags": [
      "ai",
      "memory"
    ]
  },
  {
    "term": "Persistent Memory",
    "def": "Repository-scoped markdown files documenting architectural rules, conventions, and verified facts across sessions.",
    "course": "ai-coding-agents",
    "section": "memory",
    "tags": [
      "ai",
      "memory"
    ]
  },
  {
    "term": "Context Compaction",
    "def": "Summarizing or pruning conversation history when approaching token window limits to preserve capacity.",
    "course": "ai-coding-agents",
    "section": "memory",
    "tags": [
      "ai",
      "context"
    ]
  },
  {
    "term": "Agent Thrashing",
    "def": "A failure mode where an agent makes circular, guessing edits that break tests in an endless loop.",
    "course": "ai-coding-agents",
    "section": "reliability",
    "tags": [
      "ai",
      "debugging"
    ]
  },
  {
    "term": "Circuit Breaker",
    "def": "A mechanism that halts automated agent repair loops after a threshold of failed attempts to request human input.",
    "course": "ai-coding-agents",
    "section": "reliability",
    "tags": [
      "ai",
      "safety"
    ]
  },
  {
    "term": "Human-in-the-Loop",
    "def": "An engineering workflow where a human guides architecture, sets boundaries, and reviews agent diffs.",
    "course": "ai-coding-agents",
    "section": "reliability",
    "tags": [
      "ai",
      "collaboration"
    ]
  },
  {
    "term": "Software Specification",
    "def": "A precise document defining functional requirements, technical constraints, invariants, and acceptance criteria.",
    "course": "prompting-vs-specification",
    "section": "spec",
    "tags": [
      "specs",
      "engineering"
    ]
  },
  {
    "term": "Living Contract",
    "def": "A specification maintained in version control alongside code and validated by automated tests.",
    "course": "prompting-vs-specification",
    "section": "spec",
    "tags": [
      "specs",
      "quality"
    ]
  },
  {
    "term": "System Invariant",
    "def": "A universal business rule or structural truth that must remain valid across all state transitions.",
    "course": "prompting-vs-specification",
    "section": "spec",
    "tags": [
      "architecture",
      "invariants"
    ]
  },
  {
    "term": "Functional Requirement",
    "def": "A specification of what a system must do from the perspective of user capabilities and business outcomes.",
    "course": "prompting-vs-specification",
    "section": "boundaries",
    "tags": [
      "specs",
      "requirements"
    ]
  },
  {
    "term": "Implementation Constraint",
    "def": "A technical boundary or limitation governing how a requirement must be built (libraries, patterns, performance).",
    "course": "prompting-vs-specification",
    "section": "boundaries",
    "tags": [
      "specs",
      "constraints"
    ]
  },
  {
    "term": "Non-Goal",
    "def": "An explicit statement of what is deliberately excluded from scope to prevent agent over-engineering.",
    "course": "prompting-vs-specification",
    "section": "boundaries",
    "tags": [
      "specs",
      "scope"
    ]
  },
  {
    "term": "Machine-Verifiable Criterion",
    "def": "An acceptance criterion that can be objectively proven true or false via an automated command or test.",
    "course": "prompting-vs-specification",
    "section": "verification",
    "tags": [
      "testing",
      "verification"
    ]
  },
  {
    "term": "Example-Driven Specification",
    "def": "Using concrete input-output payloads (JSON, code) to eliminate semantic ambiguity in requirements.",
    "course": "prompting-vs-specification",
    "section": "verification",
    "tags": [
      "specs",
      "examples"
    ]
  },
  {
    "term": "Golden Reference",
    "def": "An existing production file in the repository cited in a spec as an exemplary pattern to replicate.",
    "course": "prompting-vs-specification",
    "section": "verification",
    "tags": [
      "architecture",
      "patterns"
    ]
  },
  {
    "term": "Iterative Spec Refinement",
    "def": "The practice of using agent repository probes to surface hidden friction and sharpen specifications.",
    "course": "prompting-vs-specification",
    "section": "iteration",
    "tags": [
      "workflow",
      "iteration"
    ]
  },
  {
    "term": "Architectural Drift",
    "def": "The gradual divergence of a codebase from its intended design principles due to uncoordinated changes.",
    "course": "prompting-vs-specification",
    "section": "iteration",
    "tags": [
      "architecture",
      "quality"
    ]
  },
  {
    "term": "Circuit Breaker",
    "def": "An explicit limit halting automated agent loops when verification criteria fail repeatedly.",
    "course": "prompting-vs-specification",
    "section": "iteration",
    "tags": [
      "ai",
      "safety"
    ]
  },
  {
    "term": "Context Window",
    "def": "The maximum sequence length of tokens a language model can process across prompt and output in a single call.",
    "course": "context-engineering",
    "section": "budget",
    "tags": [
      "ai",
      "context"
    ]
  },
  {
    "term": "Token Economics",
    "def": "The financial, latency, and attention trade-offs governing how tokens are budgeted and utilized.",
    "course": "context-engineering",
    "section": "budget",
    "tags": [
      "ai",
      "economics"
    ]
  },
  {
    "term": "Signal-to-Noise Ratio",
    "def": "The proportion of task-critical domain information relative to useless boilerplate in context.",
    "course": "context-engineering",
    "section": "budget",
    "tags": [
      "ai",
      "quality"
    ]
  },
  {
    "term": "Lost in the Middle",
    "def": "The empirical tendency of transformer models to recall tokens at the start and end of context much better than the middle.",
    "course": "context-engineering",
    "section": "attention",
    "tags": [
      "ai",
      "attention"
    ]
  },
  {
    "term": "Sandwich Pattern",
    "def": "A prompt engineering technique placing core constraints at both the very beginning and very end of long contexts.",
    "course": "context-engineering",
    "section": "attention",
    "tags": [
      "ai",
      "patterns"
    ]
  },
  {
    "term": "Attention Dilution",
    "def": "The reduction in relative attention weight assigned to key instructions when context is saturated with noise.",
    "course": "context-engineering",
    "section": "attention",
    "tags": [
      "ai",
      "transformers"
    ]
  },
  {
    "term": "AST Pruning",
    "def": "Extracting public interfaces and types from code while omitting method bodies to save context tokens.",
    "course": "context-engineering",
    "section": "reduction",
    "tags": [
      "context",
      "tooling"
    ]
  },
  {
    "term": "Prompt Caching",
    "def": "Reusing pre-computed KV-cache states for identical prompt prefixes across API requests to cut cost and latency.",
    "course": "context-engineering",
    "section": "reduction",
    "tags": [
      "ai",
      "caching"
    ]
  },
  {
    "term": "Working Set",
    "def": "The minimal set of files (target edit, interface contract, and test) needed to solve a specific task.",
    "course": "context-engineering",
    "section": "reduction",
    "tags": [
      "context",
      "workflow"
    ]
  },
  {
    "term": "Dynamic Context Assembly",
    "def": "Just-in-time automated retrieval of relevant files, schemas, and diffs based on active task intent.",
    "course": "context-engineering",
    "section": "retrieval",
    "tags": [
      "ai",
      "retrieval"
    ]
  },
  {
    "term": "Context Precision",
    "def": "The proportion of retrieved context tokens that are genuinely relevant and used in task execution.",
    "course": "context-engineering",
    "section": "retrieval",
    "tags": [
      "ai",
      "metrics"
    ]
  },
  {
    "term": "Context Recall",
    "def": "The proportion of necessary domain facts successfully captured by the retrieval pipeline.",
    "course": "context-engineering",
    "section": "retrieval",
    "tags": [
      "ai",
      "metrics"
    ]
  },
  {
    "term": "Convention Guessing",
    "def": "The tendency of models to fall back on generic training averages when project context is missing.",
    "course": "ai-project-context",
    "section": "conventions",
    "tags": [
      "ai",
      "conventions"
    ]
  },
  {
    "term": "Instruction File",
    "def": "A repository configuration file (.cursorrules, copilot-instructions.md) providing system directives to AI agents.",
    "course": "ai-project-context",
    "section": "conventions",
    "tags": [
      "ai",
      "config"
    ]
  },
  {
    "term": "Architectural Drift",
    "def": "The slow degradation of project standards caused by introducing alien, inconsistent code patterns.",
    "course": "ai-project-context",
    "section": "conventions",
    "tags": [
      "architecture",
      "quality"
    ]
  },
  {
    "term": "Architecture Decision Record",
    "def": "A document capturing an architectural decision, its context, consequences, and evaluated alternatives.",
    "course": "ai-project-context",
    "section": "records",
    "tags": [
      "architecture",
      "docs"
    ]
  },
  {
    "term": "Golden File",
    "def": "An exemplary production file in the repository cited as the authoritative template for code style and patterns.",
    "course": "ai-project-context",
    "section": "records",
    "tags": [
      "architecture",
      "patterns"
    ]
  },
  {
    "term": "Golden Pair",
    "def": "A matched pair of exemplary files: one clean implementation and its corresponding high-quality test file.",
    "course": "ai-project-context",
    "section": "records",
    "tags": [
      "testing",
      "patterns"
    ]
  },
  {
    "term": "Repository Map",
    "def": "A high-level structural overview documenting directory responsibilities and dependency direction invariants.",
    "course": "ai-project-context",
    "section": "mapping",
    "tags": [
      "architecture",
      "navigation"
    ]
  },
  {
    "term": "Dependency Direction Invariant",
    "def": "An architectural rule governing which layers are allowed to import from which (e.g. domain never imports storage).",
    "course": "ai-project-context",
    "section": "mapping",
    "tags": [
      "architecture",
      "invariants"
    ]
  },
  {
    "term": "Workflow Script",
    "def": "A standardized runner command (make test, npm run lint) encapsulating complex flags and environment variables.",
    "course": "ai-project-context",
    "section": "mapping",
    "tags": [
      "devops",
      "tooling"
    ]
  },
  {
    "term": "Instruction Pruning",
    "def": "Removing formatting trivia and obsolete rules from instruction files to maximize attention density.",
    "course": "ai-project-context",
    "section": "maintenance",
    "tags": [
      "context",
      "maintenance"
    ]
  },
  {
    "term": "Alignment Audit",
    "def": "Empirically evaluating agent-generated code against project conventions using benchmark prompts.",
    "course": "ai-project-context",
    "section": "maintenance",
    "tags": [
      "ai",
      "evals"
    ]
  },
  {
    "term": "One-Command Verification",
    "def": "A single script (make check) that runs linters, type checks, and tests together for agent validation.",
    "course": "ai-project-context",
    "section": "maintenance",
    "tags": [
      "ci",
      "testing"
    ]
  },
  {
    "term": "Evidence-First Debugging",
    "def": "A discipline prioritizing runtime logs, tracebacks, and test evidence over plausible model assertions.",
    "course": "ai-assisted-debugging",
    "section": "evidence",
    "tags": [
      "debugging",
      "evidence"
    ]
  },
  {
    "term": "Traceback",
    "def": "A report showing the active stack frames and error message at the exact moment an unhandled exception occurred.",
    "course": "ai-assisted-debugging",
    "section": "evidence",
    "tags": [
      "debugging",
      "python"
    ]
  },
  {
    "term": "Minimal Reproducible Example",
    "def": "The smallest standalone code snippet that reliably reproduces an isolated defect without external dependencies.",
    "course": "ai-assisted-debugging",
    "section": "evidence",
    "tags": [
      "debugging",
      "isolation"
    ]
  },
  {
    "term": "Scientific Debugging",
    "def": "Formulating explicit, falsifiable hypotheses and systematically testing them to eliminate false causes.",
    "course": "ai-assisted-debugging",
    "section": "methodology",
    "tags": [
      "debugging",
      "methodology"
    ]
  },
  {
    "term": "Falsification Experiment",
    "def": "A targeted probe or test designed specifically to prove a debugging hypothesis incorrect.",
    "course": "ai-assisted-debugging",
    "section": "methodology",
    "tags": [
      "debugging",
      "testing"
    ]
  },
  {
    "term": "Git Bisection",
    "def": "Using binary search over git commit history to pinpoint the exact commit that introduced a defect.",
    "course": "ai-assisted-debugging",
    "section": "methodology",
    "tags": [
      "git",
      "debugging"
    ]
  },
  {
    "term": "Silent Logic Error",
    "def": "A defect where code runs without raising an exception but produces an incorrect business result.",
    "course": "ai-assisted-debugging",
    "section": "failure-modes",
    "tags": [
      "debugging",
      "logic"
    ]
  },
  {
    "term": "Sycophantic False Fix",
    "def": "A shortcut where an agent passes tests by weakening assertions or deleting validations rather than fixing the bug.",
    "course": "ai-assisted-debugging",
    "section": "failure-modes",
    "tags": [
      "ai",
      "safety"
    ]
  },
  {
    "term": "Agent Thrashing",
    "def": "An endless loop where an agent makes circular, blind edits that introduce new errors without fixing root causes.",
    "course": "ai-assisted-debugging",
    "section": "failure-modes",
    "tags": [
      "ai",
      "debugging"
    ]
  },
  {
    "term": "Regression Test",
    "def": "A permanent automated test authored specifically to ensure a previously resolved bug never regresses.",
    "course": "ai-assisted-debugging",
    "section": "defense",
    "tags": [
      "testing",
      "quality"
    ]
  },
  {
    "term": "Root Cause",
    "def": "The fundamental underlying defect or flaw that directly initiated the observed failure symptom.",
    "course": "ai-assisted-debugging",
    "section": "defense",
    "tags": [
      "debugging",
      "analysis"
    ]
  },
  {
    "term": "Circuit Breaker",
    "def": "A rule halting automated debugging loops after repeated failed attempts to prevent compounding damage.",
    "course": "ai-assisted-debugging",
    "section": "defense",
    "tags": [
      "ai",
      "safety"
    ]
  },
  {
    "term": "Mechanical Review",
    "def": "Automated code review evaluating syntax, type consistency, docstrings, and unhandled null values.",
    "course": "ai-assisted-code-review",
    "section": "strengths",
    "tags": [
      "review",
      "automation"
    ]
  },
  {
    "term": "PR Summary",
    "def": "An AI-generated breakdown of pull request intent, architectural impact, risk assessment, and review order.",
    "course": "ai-assisted-code-review",
    "section": "strengths",
    "tags": [
      "review",
      "pr"
    ]
  },
  {
    "term": "Reviewer Ergonomics",
    "def": "Structuring PRs and documentation to minimize cognitive fatigue and maximize reviewer efficiency.",
    "course": "ai-assisted-code-review",
    "section": "strengths",
    "tags": [
      "workflow",
      "ergonomics"
    ]
  },
  {
    "term": "AI Blind Spot",
    "def": "A class of defect (concurrency, race conditions, business domain rules) that AI reviewers reliably overlook.",
    "course": "ai-assisted-code-review",
    "section": "blind-spots",
    "tags": [
      "ai",
      "safety"
    ]
  },
  {
    "term": "Package Hallucination",
    "def": "A vulnerability where an AI imports a plausible-sounding package name that does not exist in public registries.",
    "course": "ai-assisted-code-review",
    "section": "blind-spots",
    "tags": [
      "security",
      "ai"
    ]
  },
  {
    "term": "IDOR",
    "def": "Insecure Direct Object Reference — exposing a database record by ID without verifying caller ownership or permission.",
    "course": "ai-assisted-code-review",
    "section": "blind-spots",
    "tags": [
      "security",
      "owasp"
    ]
  },
  {
    "term": "Two-Layer Review Pipeline",
    "def": "A workflow combining deterministic static analysis (linters, type checkers) with LLM semantic review.",
    "course": "ai-assisted-code-review",
    "section": "pipeline",
    "tags": [
      "ci",
      "tooling"
    ]
  },
  {
    "term": "Static Analysis",
    "def": "Analyzing source code without executing it to guarantee syntax, typing, and security rule compliance.",
    "course": "ai-assisted-code-review",
    "section": "pipeline",
    "tags": [
      "testing",
      "quality"
    ]
  },
  {
    "term": "Blast Radius",
    "def": "The maximum potential damage and operational fallout that a defect or failure can inflict on a system.",
    "course": "ai-assisted-code-review",
    "section": "pipeline",
    "tags": [
      "architecture",
      "risk"
    ]
  },
  {
    "term": "Review Fatigue",
    "def": "Cognitive exhaustion resulting from reviewing high volumes of code, leading to superficial approvals.",
    "course": "ai-assisted-code-review",
    "section": "governance",
    "tags": [
      "culture",
      "management"
    ]
  },
  {
    "term": "Rubber-Stamping",
    "def": "The dangerous habit of approving pull requests without conducting rigorous line-by-line verification.",
    "course": "ai-assisted-code-review",
    "section": "governance",
    "tags": [
      "quality",
      "risk"
    ]
  },
  {
    "term": "Human Verification Gate",
    "def": "A mandatory manual approval checkpoint required before executing high-consequence operations.",
    "course": "ai-assisted-code-review",
    "section": "governance",
    "tags": [
      "governance",
      "security"
    ]
  },
  {
    "term": "Architectural Drift",
    "def": "The gradual erosion of clean system design caused by accumulated local shortcuts and inconsistent patterns.",
    "course": "ai-generated-architecture",
    "section": "drift",
    "tags": [
      "architecture",
      "quality"
    ]
  },
  {
    "term": "Inward Dependency Rule",
    "def": "The principle that source code dependencies must point inward toward business domain logic, never outward.",
    "course": "ai-generated-architecture",
    "section": "drift",
    "tags": [
      "architecture",
      "clean"
    ]
  },
  {
    "term": "Layer Contamination",
    "def": "The anti-pattern of importing infrastructure or delivery libraries directly into core domain entities.",
    "course": "ai-generated-architecture",
    "section": "drift",
    "tags": [
      "architecture",
      "smells"
    ]
  },
  {
    "term": "Schema Discipline",
    "def": "Enforcing strict, strongly typed data contracts (Pydantic, Zod) to validate data shapes at system boundaries.",
    "course": "ai-generated-architecture",
    "section": "schemas",
    "tags": [
      "contracts",
      "types"
    ]
  },
  {
    "term": "Pure Domain Model",
    "def": "A business entity implemented with vanilla language constructs, isolated completely from databases and web frameworks.",
    "course": "ai-generated-architecture",
    "section": "schemas",
    "tags": [
      "architecture",
      "domain"
    ]
  },
  {
    "term": "Extra Forbid",
    "def": "A schema validation setting that rejects unexpected or hallucinated fields with an immediate error.",
    "course": "ai-generated-architecture",
    "section": "schemas",
    "tags": [
      "pydantic",
      "validation"
    ]
  },
  {
    "term": "Happy-Path Myopia",
    "def": "The tendency of prototypes to handle ideal scenarios while failing on network timeouts, bad inputs, or concurrency.",
    "course": "ai-generated-architecture",
    "section": "hardening",
    "tags": [
      "reliability",
      "prototypes"
    ]
  },
  {
    "term": "Idempotency",
    "def": "The property of an operation producing the exact same result even if invoked multiple times with identical arguments.",
    "course": "ai-generated-architecture",
    "section": "hardening",
    "tags": [
      "api",
      "reliability"
    ]
  },
  {
    "term": "Structured Logging",
    "def": "Emitting diagnostic logs as structured JSON key-value pairs to enable automated filtering and querying.",
    "course": "ai-generated-architecture",
    "section": "hardening",
    "tags": [
      "observability",
      "devops"
    ]
  },
  {
    "term": "Architectural Fitness Function",
    "def": "An automated test or check in CI verifying that code adheres to defined structural and dependency invariants.",
    "course": "ai-generated-architecture",
    "section": "governance",
    "tags": [
      "ci",
      "architecture"
    ]
  },
  {
    "term": "Circular Dependency",
    "def": "An anti-pattern where two or more modules depend directly or indirectly upon each other, tangling architecture.",
    "course": "ai-generated-architecture",
    "section": "governance",
    "tags": [
      "architecture",
      "smells"
    ]
  },
  {
    "term": "Sustainable Velocity",
    "def": "The engineering capability to ship software rapidly and reliably year after year without accumulating crippling debt.",
    "course": "ai-generated-architecture",
    "section": "governance",
    "tags": [
      "culture",
      "craft"
    ]
  },
  {
    "term": "Safety Net Prerequisite",
    "def": "The rule that automated tests must pass 100% before initiating any structural code refactoring.",
    "course": "ai-assisted-refactoring",
    "section": "safety",
    "tags": [
      "refactoring",
      "safety"
    ]
  },
  {
    "term": "Mechanical Refactoring",
    "def": "Repetitive, rule-based code transformations (renames, syntax modernizations, type additions) ideal for AI execution.",
    "course": "ai-assisted-refactoring",
    "section": "safety",
    "tags": [
      "refactoring",
      "automation"
    ]
  },
  {
    "term": "AST Codemod",
    "def": "A script that parses and modifies the Abstract Syntax Tree of source code to execute deterministic bulk transformations.",
    "course": "ai-assisted-refactoring",
    "section": "safety",
    "tags": [
      "tooling",
      "ast"
    ]
  },
  {
    "term": "Step-by-Step Slicing",
    "def": "Decomposing a large monolith incrementally by extracting one cohesive cluster at a time.",
    "course": "ai-assisted-refactoring",
    "section": "decomposition",
    "tags": [
      "architecture",
      "refactoring"
    ]
  },
  {
    "term": "Re-Export Seam",
    "def": "Exporting extracted symbols from their original location to preserve caller compatibility during refactoring.",
    "course": "ai-assisted-refactoring",
    "section": "decomposition",
    "tags": [
      "architecture",
      "compatibility"
    ]
  },
  {
    "term": "Repository Pattern",
    "def": "An architectural seam decoupling business application services from database query implementations.",
    "course": "ai-assisted-refactoring",
    "section": "decomposition",
    "tags": [
      "patterns",
      "architecture"
    ]
  },
  {
    "term": "Whole-Project Type Check",
    "def": "Running static type analysis across the entire codebase to verify all call sites match updated signatures.",
    "course": "ai-assisted-refactoring",
    "section": "verification",
    "tags": [
      "typing",
      "verification"
    ]
  },
  {
    "term": "Atomic Commit",
    "def": "A single git commit containing one self-contained, verified change that keeps the test suite green.",
    "course": "ai-assisted-refactoring",
    "section": "verification",
    "tags": [
      "git",
      "workflow"
    ]
  },
  {
    "term": "Instant Rollback",
    "def": "The capability to revert a failed experimental refactoring step in seconds using git reset.",
    "course": "ai-assisted-refactoring",
    "section": "verification",
    "tags": [
      "git",
      "safety"
    ]
  },
  {
    "term": "N+1 Query Regression",
    "def": "A performance bug where extracted property accesses inside a loop trigger N redundant database round-trips.",
    "course": "ai-assisted-refactoring",
    "section": "performance",
    "tags": [
      "performance",
      "databases"
    ]
  },
  {
    "term": "Memory Materialization",
    "def": "Loading an entire dataset into RAM at once instead of processing it iteratively with streaming generators.",
    "course": "ai-assisted-refactoring",
    "section": "performance",
    "tags": [
      "performance",
      "memory"
    ]
  },
  {
    "term": "Query Count Assertion",
    "def": "An automated test assertion that enforces an upper bound on the number of SQL queries fired during an operation.",
    "course": "ai-assisted-refactoring",
    "section": "performance",
    "tags": [
      "testing",
      "performance"
    ]
  },
  {
    "term": "Hierarchical Planning",
    "def": "Structuring software projects across Strategic Milestones, Tactical Tasks, and Operational Steps.",
    "course": "large-ai-coding-projects",
    "section": "planning",
    "tags": [
      "planning",
      "scale"
    ]
  },
  {
    "term": "Milestone-Driven Execution",
    "def": "Dividing ambitious projects into verified phases to prevent compounding probabilistic error.",
    "course": "large-ai-coding-projects",
    "section": "planning",
    "tags": [
      "methodology",
      "scale"
    ]
  },
  {
    "term": "Compounding Error",
    "def": "The exponential decrease in overall success probability when many unverified AI steps are chained together.",
    "course": "large-ai-coding-projects",
    "section": "planning",
    "tags": [
      "ai",
      "math"
    ]
  },
  {
    "term": "Git Worktree",
    "def": "A feature allowing multiple linked working directories attached to the same repository for parallel checkouts.",
    "course": "large-ai-coding-projects",
    "section": "git",
    "tags": [
      "git",
      "tooling"
    ]
  },
  {
    "term": "Checkpoint Development",
    "def": "Committing a known good state before risky agent tasks so you can pull the ripcord and revert instantly.",
    "course": "large-ai-coding-projects",
    "section": "git",
    "tags": [
      "git",
      "safety"
    ]
  },
  {
    "term": "Ripcord Revert",
    "def": "Using git reset --hard HEAD to instantly abandon a confused agent exploration and restore a clean baseline.",
    "course": "large-ai-coding-projects",
    "section": "git",
    "tags": [
      "git",
      "workflow"
    ]
  },
  {
    "term": "Context Reset",
    "def": "Closing a saturated agent session and starting a fresh session with a distilled handoff summary.",
    "course": "large-ai-coding-projects",
    "section": "lifecycle",
    "tags": [
      "context",
      "workflow"
    ]
  },
  {
    "term": "Parallel Agent Workflow",
    "def": "Running multiple agents simultaneously on decoupled files and branches building toward shared contracts.",
    "course": "large-ai-coding-projects",
    "section": "lifecycle",
    "tags": [
      "agents",
      "concurrency"
    ]
  },
  {
    "term": "Pre-Committed Contract",
    "def": "An agreed-upon schema or interface committed to the base branch before dispatching parallel agents.",
    "course": "large-ai-coding-projects",
    "section": "lifecycle",
    "tags": [
      "contracts",
      "architecture"
    ]
  },
  {
    "term": "Source of Truth",
    "def": "The authoritative system (Continuous Integration) whose binary verdicts determine whether code is ready to ship.",
    "course": "large-ai-coding-projects",
    "section": "governance",
    "tags": [
      "ci",
      "quality"
    ]
  },
  {
    "term": "Prompt Stubbornness",
    "def": "The anti-pattern of spending hours repeatedly re-prompting an agent instead of writing the fix by hand.",
    "course": "large-ai-coding-projects",
    "section": "governance",
    "tags": [
      "workflow",
      "craft"
    ]
  },
  {
    "term": "3-Turn Rule",
    "def": "A heuristic mandating that developers take manual control if an agent fails to resolve an issue within 3 turns.",
    "course": "large-ai-coding-projects",
    "section": "governance",
    "tags": [
      "workflow",
      "heuristics"
    ]
  },
  {
    "term": "Calibrated Trust",
    "def": "The practice of scaling review scrutiny and verification gates proportionally to the blast radius of failure.",
    "course": "trusting-ai-generated-code",
    "section": "trust",
    "tags": [
      "governance",
      "risk"
    ]
  },
  {
    "term": "Blast Radius",
    "def": "The maximum potential damage, financial loss, or operational downtime a failure in a specific component can cause.",
    "course": "trusting-ai-generated-code",
    "section": "trust",
    "tags": [
      "architecture",
      "risk"
    ]
  },
  {
    "term": "Plausible Hallucination",
    "def": "A subtle code defect that looks syntactically and stylistically correct to human eyes while being logically invalid.",
    "course": "trusting-ai-generated-code",
    "section": "trust",
    "tags": [
      "ai",
      "safety"
    ]
  },
  {
    "term": "Hierarchy of Truth",
    "def": "Ranking verification authority: terminal test execution and compilers outrank conversational model claims.",
    "course": "trusting-ai-generated-code",
    "section": "epistemology",
    "tags": [
      "epistemology",
      "testing"
    ]
  },
  {
    "term": "Model Sycophancy",
    "def": "The tendency of language models to confirm user assumptions or falsely claim success to sound agreeable.",
    "course": "trusting-ai-generated-code",
    "section": "epistemology",
    "tags": [
      "ai",
      "psychology"
    ]
  },
  {
    "term": "Constant-Time Comparison",
    "def": "Comparing secret strings in a fixed duration independent of mismatch location to prevent timing attacks.",
    "course": "trusting-ai-generated-code",
    "section": "epistemology",
    "tags": [
      "security",
      "crypto"
    ]
  },
  {
    "term": "Execution Sandbox",
    "def": "An isolated runtime environment (Docker, gVisor) that constrains agent tool execution to protect host systems.",
    "course": "trusting-ai-generated-code",
    "section": "security-ip",
    "tags": [
      "security",
      "sandboxing"
    ]
  },
  {
    "term": "Timing Attack",
    "def": "A side-channel attack deducing secret cryptographic values by measuring microsecond differences in comparison latency.",
    "course": "trusting-ai-generated-code",
    "section": "security-ip",
    "tags": [
      "security",
      "crypto"
    ]
  },
  {
    "term": "Copyleft Taint",
    "def": "The legal consequence of inadvertently incorporating GPL-licensed code into a proprietary codebase.",
    "course": "trusting-ai-generated-code",
    "section": "security-ip",
    "tags": [
      "licensing",
      "legal"
    ]
  },
  {
    "term": "Developer Intuition",
    "def": "Subconscious pattern-recognition that alerts an experienced engineer that code is over-engineered or brittle.",
    "course": "trusting-ai-generated-code",
    "section": "craft",
    "tags": [
      "craft",
      "intuition"
    ]
  },
  {
    "term": "Accountability Principle",
    "def": "The non-negotiable rule that the human engineer is 100% professionally responsible for all committed code.",
    "course": "trusting-ai-generated-code",
    "section": "craft",
    "tags": [
      "ethics",
      "craft"
    ]
  },
  {
    "term": "Pilot in Command",
    "def": "The mental model holding that the human engineer steers, audits, and takes ultimate responsibility for all automated work.",
    "course": "trusting-ai-generated-code",
    "section": "craft",
    "tags": [
      "culture",
      "governance"
    ]
  },
  {
    "term": "Machine Learning",
    "def": "A programming paradigm where algorithms discover mathematical rules from data rather than following hand-coded logic.",
    "course": "what-is-ai",
    "section": "foundations",
    "tags": [
      "ai",
      "foundations"
    ]
  },
  {
    "term": "Probabilistic System",
    "def": "A system whose outputs are governed by statistical probability distributions rather than fixed static paths.",
    "course": "what-is-ai",
    "section": "foundations",
    "tags": [
      "ai",
      "statistics"
    ]
  },
  {
    "term": "Supervised Learning",
    "def": "Training a model on paired input-output examples (X -> Y) to predict labels for unseen data.",
    "course": "what-is-ai",
    "section": "foundations",
    "tags": [
      "ml",
      "supervised"
    ]
  },
  {
    "term": "Inference",
    "def": "The read-only phase of evaluating a trained model on new inputs using frozen mathematical weights.",
    "course": "what-is-ai",
    "section": "lifecycle",
    "tags": [
      "ai",
      "lifecycle"
    ]
  },
  {
    "term": "Model Weights",
    "def": "The learned numerical parameters inside a neural network that encode statistical patterns and knowledge.",
    "course": "what-is-ai",
    "section": "lifecycle",
    "tags": [
      "ml",
      "neural-nets"
    ]
  },
  {
    "term": "Fine-Tuning",
    "def": "An additional training phase that continues optimization on a domain dataset to adapt an existing model.",
    "course": "what-is-ai",
    "section": "lifecycle",
    "tags": [
      "ml",
      "training"
    ]
  },
  {
    "term": "Hallucination",
    "def": "The generation of plausible-sounding but factually false, unverified statements by a language model.",
    "course": "what-is-ai",
    "section": "limits",
    "tags": [
      "ai",
      "safety"
    ]
  },
  {
    "term": "Stochasticity",
    "def": "Randomness and probabilistic variation inherent in sampling tokens from a distribution.",
    "course": "what-is-ai",
    "section": "limits",
    "tags": [
      "ai",
      "math"
    ]
  },
  {
    "term": "Grounding",
    "def": "Anchoring model generation to verified facts retrieved from external documents, databases, or tools.",
    "course": "what-is-ai",
    "section": "limits",
    "tags": [
      "ai",
      "rag"
    ]
  },
  {
    "term": "Chain of Thought",
    "def": "A prompting technique encouraging models to generate intermediate reasoning tokens before arriving at an answer.",
    "course": "what-is-ai",
    "section": "architecture",
    "tags": [
      "ai",
      "prompting"
    ]
  },
  {
    "term": "Test-Time Compute",
    "def": "Allocating extra inference tokens for a model to deliberate, backtrack, and evaluate multiple reasoning steps.",
    "course": "what-is-ai",
    "section": "architecture",
    "tags": [
      "ai",
      "reasoning"
    ]
  },
  {
    "term": "Autonomous Agent",
    "def": "A software system pairing a foundation model with tools, memory, and a ReAct loop to achieve complex goals.",
    "course": "what-is-ai",
    "section": "architecture",
    "tags": [
      "ai",
      "agents"
    ]
  },
  {
    "term": "Function Approximation",
    "def": "The mathematical framing of machine learning: learning parameters to approximate an unknown true relationship.",
    "course": "machine-learning",
    "section": "problem",
    "tags": [
      "ml",
      "math"
    ]
  },
  {
    "term": "Feature Matrix",
    "def": "A 2D matrix (X) where rows represent individual instances and columns represent measured input variables.",
    "course": "machine-learning",
    "section": "problem",
    "tags": [
      "ml",
      "data"
    ]
  },
  {
    "term": "Data Leakage",
    "def": "A flaw where information from validation or test datasets inadvertently contaminates the training phase.",
    "course": "machine-learning",
    "section": "problem",
    "tags": [
      "ml",
      "pitfalls"
    ]
  },
  {
    "term": "Mean Squared Error",
    "def": "A regression loss function computing the average of squared differences between predictions and targets.",
    "course": "machine-learning",
    "section": "optimization",
    "tags": [
      "loss",
      "regression"
    ]
  },
  {
    "term": "Cross-Entropy Loss",
    "def": "A classification loss function penalizing differences between predicted probabilities and ground-truth classes.",
    "course": "machine-learning",
    "section": "optimization",
    "tags": [
      "loss",
      "classification"
    ]
  },
  {
    "term": "Gradient Descent",
    "def": "An optimization algorithm that iteratively adjusts model weights in the direction of steepest downward slope.",
    "course": "machine-learning",
    "section": "optimization",
    "tags": [
      "optimization",
      "math"
    ]
  },
  {
    "term": "Overfitting",
    "def": "A failure mode where a model memorizes training noise and fails to generalize to unseen test data.",
    "course": "machine-learning",
    "section": "regularization",
    "tags": [
      "ml",
      "generalization"
    ]
  },
  {
    "term": "Weight Decay",
    "def": "L2 regularization adding a penalty proportional to squared weight magnitudes to prevent erratic parameters.",
    "course": "machine-learning",
    "section": "regularization",
    "tags": [
      "regularization",
      "math"
    ]
  },
  {
    "term": "Early Stopping",
    "def": "Halting the training loop at the exact epoch where validation loss reaches its minimum before rising.",
    "course": "machine-learning",
    "section": "regularization",
    "tags": [
      "training",
      "regularization"
    ]
  },
  {
    "term": "F1-Score",
    "def": "The harmonic mean of precision and recall, balancing false alarms against missed detections.",
    "course": "machine-learning",
    "section": "metrics-ops",
    "tags": [
      "metrics",
      "evaluation"
    ]
  },
  {
    "term": "Concept Drift",
    "def": "The statistical divergence of real-world production inputs from training distributions over time.",
    "course": "machine-learning",
    "section": "metrics-ops",
    "tags": [
      "mlops",
      "production"
    ]
  },
  {
    "term": "XGBoost",
    "def": "An optimized gradient boosted decision tree library that dominates machine learning on tabular data.",
    "course": "machine-learning",
    "section": "metrics-ops",
    "tags": [
      "algorithms",
      "tabular"
    ]
  },
  {
    "term": "Artificial Neuron",
    "def": "A mathematical building block computing a weighted sum of inputs plus bias passed through a non-linear activation.",
    "course": "neural-networks",
    "section": "neuron",
    "tags": [
      "neural-nets",
      "foundations"
    ]
  },
  {
    "term": "ReLU",
    "def": "Rectified Linear Unit (max(0, x)) — the standard activation function providing constant gradient 1.0 for positive inputs.",
    "course": "neural-networks",
    "section": "neuron",
    "tags": [
      "activations",
      "math"
    ]
  },
  {
    "term": "Universal Approximation Theorem",
    "def": "The mathematical proof that feedforward networks with non-linear activations can approximate any continuous function.",
    "course": "neural-networks",
    "section": "neuron",
    "tags": [
      "theory",
      "math"
    ]
  },
  {
    "term": "Multi-Layer Perceptron",
    "def": "A feedforward neural network comprising multiple fully connected layers of neurons.",
    "course": "neural-networks",
    "section": "forward-loss",
    "tags": [
      "architecture",
      "mlp"
    ]
  },
  {
    "term": "Softmax",
    "def": "A function that normalizes raw logits into a valid probability distribution that sums to 1.0.",
    "course": "neural-networks",
    "section": "forward-loss",
    "tags": [
      "math",
      "classification"
    ]
  },
  {
    "term": "Loss Landscape",
    "def": "The non-convex mathematical surface defining loss across high-dimensional parameter space.",
    "course": "neural-networks",
    "section": "forward-loss",
    "tags": [
      "optimization",
      "theory"
    ]
  },
  {
    "term": "Backpropagation",
    "def": "An algorithm using the calculus chain rule in reverse to compute exact parameter gradients for all weights efficiently.",
    "course": "neural-networks",
    "section": "backprop",
    "tags": [
      "algorithms",
      "math"
    ]
  },
  {
    "term": "AdamW",
    "def": "An adaptive optimization algorithm that decouples weight decay regularization from momentum step updates.",
    "course": "neural-networks",
    "section": "backprop",
    "tags": [
      "optimizers",
      "training"
    ]
  },
  {
    "term": "Learning Rate Warmup",
    "def": "A schedule gradually ramping learning rate from zero to protect early random weights from destructive gradient shock.",
    "course": "neural-networks",
    "section": "backprop",
    "tags": [
      "training",
      "schedules"
    ]
  },
  {
    "term": "Vanishing Gradient",
    "def": "The exponential decay of error gradients across deep layers, causing early layers to cease learning.",
    "course": "neural-networks",
    "section": "stability",
    "tags": [
      "deep-learning",
      "pitfalls"
    ]
  },
  {
    "term": "Residual Skip Connection",
    "def": "An architectural shortcut (y = F(x) + x) providing an uninterrupted gradient highway across deep layers.",
    "course": "neural-networks",
    "section": "stability",
    "tags": [
      "architecture",
      "resnets"
    ]
  },
  {
    "term": "Representation Learning",
    "def": "The capability of deep networks to automatically discover hierarchical feature abstractions directly from raw data.",
    "course": "neural-networks",
    "section": "stability",
    "tags": [
      "deep-learning",
      "representations"
    ]
  },
  {
    "term": "Embedding Vector",
    "def": "A high-dimensional list of floating-point numbers mapping a concept to coordinates in semantic space.",
    "course": "embeddings",
    "section": "geometry",
    "tags": [
      "embeddings",
      "math"
    ]
  },
  {
    "term": "Dense Representation",
    "def": "A compact coordinate representation where every dimension carries continuous values, unlike sparse one-hot vectors.",
    "course": "embeddings",
    "section": "geometry",
    "tags": [
      "embeddings",
      "types"
    ]
  },
  {
    "term": "Semantic Vector Space",
    "def": "A continuous geometric space where distance and angle correspond to conceptual similarity.",
    "course": "embeddings",
    "section": "geometry",
    "tags": [
      "math",
      "nlp"
    ]
  },
  {
    "term": "Cosine Similarity",
    "def": "A metric measuring the cosine of the angle between two vectors, bounded between -1.0 and +1.0.",
    "course": "embeddings",
    "section": "similarity",
    "tags": [
      "math",
      "similarity"
    ]
  },
  {
    "term": "Dot Product",
    "def": "The sum of the products of corresponding elements in two vectors, reflecting orientation and magnitude.",
    "course": "embeddings",
    "section": "similarity",
    "tags": [
      "math",
      "linear-algebra"
    ]
  },
  {
    "term": "Vector Analogy",
    "def": "Linear semantic relationships in vector space (e.g. King - Man + Woman = Queen).",
    "course": "embeddings",
    "section": "similarity",
    "tags": [
      "nlp",
      "word2vec"
    ]
  },
  {
    "term": "Sentence-BERT",
    "def": "A bi-encoder transformer architecture that embeds full sentences and paragraphs into semantic vectors.",
    "course": "embeddings",
    "section": "modalities",
    "tags": [
      "transformers",
      "models"
    ]
  },
  {
    "term": "CLIP",
    "def": "Contrastive Language-Image Pretraining — dual encoders mapping images and text into a shared vector space.",
    "course": "embeddings",
    "section": "modalities",
    "tags": [
      "multimodal",
      "vision"
    ]
  },
  {
    "term": "Contrastive Loss",
    "def": "A training loss pulling paired representations together while pushing non-paired representations apart.",
    "course": "embeddings",
    "section": "modalities",
    "tags": [
      "training",
      "loss"
    ]
  },
  {
    "term": "UMAP",
    "def": "Uniform Manifold Approximation and Projection — a non-linear algorithm projecting high-dimensional vectors to 2D/3D.",
    "course": "embeddings",
    "section": "production",
    "tags": [
      "visualization",
      "dimension-reduction"
    ]
  },
  {
    "term": "Matryoshka Embeddings",
    "def": "Embeddings trained so early dimensions capture the core signal, enabling truncation to save 80% RAM.",
    "course": "embeddings",
    "section": "production",
    "tags": [
      "embeddings",
      "efficiency"
    ]
  },
  {
    "term": "MTEB",
    "def": "Massive Text Embedding Benchmark — an authoritative leaderboard evaluating embedding model performance.",
    "course": "embeddings",
    "section": "production",
    "tags": [
      "benchmarks",
      "evals"
    ]
  },
  {
    "term": "Transformer",
    "def": "A parallel neural network architecture based entirely on self-attention mechanisms without recurrent loops.",
    "course": "transformers-attention",
    "section": "attention-core",
    "tags": [
      "transformers",
      "architecture"
    ]
  },
  {
    "term": "Self-Attention",
    "def": "An operation where every token in a sequence computes pairwise attention weights over all other tokens in parallel.",
    "course": "transformers-attention",
    "section": "attention-core",
    "tags": [
      "transformers",
      "attention"
    ]
  },
  {
    "term": "QKV Projections",
    "def": "Queries (seeking), Keys (advertising), and Values (content) derived from token embeddings via learned matrices.",
    "course": "transformers-attention",
    "section": "attention-core",
    "tags": [
      "transformers",
      "qkv"
    ]
  },
  {
    "term": "Scaled Dot-Product",
    "def": "Computing attention as softmax(Q K^T / sqrt(d_k)) V, scaling to prevent vanishing gradients.",
    "course": "transformers-attention",
    "section": "math-heads",
    "tags": [
      "math",
      "attention"
    ]
  },
  {
    "term": "Multi-Head Attention",
    "def": "Splitting embedding dimensions into parallel heads to track multiple relational subspaces simultaneously.",
    "course": "transformers-attention",
    "section": "math-heads",
    "tags": [
      "transformers",
      "multi-head"
    ]
  },
  {
    "term": "FlashAttention",
    "def": "A GPU SRAM-tiled attention algorithm computing exact self-attention with high IO efficiency and speed.",
    "course": "transformers-attention",
    "section": "math-heads",
    "tags": [
      "hardware",
      "cuda"
    ]
  },
  {
    "term": "Permutation Invariance",
    "def": "The mathematical property where shuffling input order produces identically shuffled outputs.",
    "course": "transformers-attention",
    "section": "order-masks",
    "tags": [
      "theory",
      "math"
    ]
  },
  {
    "term": "RoPE",
    "def": "Rotary Position Embedding — rotating Query and Key vectors in complex space to represent relative token distance naturally.",
    "course": "transformers-attention",
    "section": "order-masks",
    "tags": [
      "transformers",
      "position"
    ]
  },
  {
    "term": "Causal Masking",
    "def": "Masking future tokens with -infinity in decoders to enforce strictly autoregressive past-only attention.",
    "course": "transformers-attention",
    "section": "order-masks",
    "tags": [
      "transformers",
      "decoders"
    ]
  },
  {
    "term": "Decoder-Only",
    "def": "A transformer architecture using causal masking to generate text autoregressively (GPT, Llama).",
    "course": "transformers-attention",
    "section": "block-arch",
    "tags": [
      "architecture",
      "llms"
    ]
  },
  {
    "term": "Feed-Forward Network",
    "def": "The point-wise MLP sub-layer in a transformer block that acts as a key-value factual memory store.",
    "course": "transformers-attention",
    "section": "block-arch",
    "tags": [
      "architecture",
      "mlp"
    ]
  },
  {
    "term": "RMSNorm",
    "def": "Root Mean Square Normalization — a streamlined, high-performance variant of LayerNorm used in modern LLMs.",
    "course": "transformers-attention",
    "section": "block-arch",
    "tags": [
      "normalization",
      "efficiency"
    ]
  },
  {
    "term": "Autoregressive Generation",
    "def": "A sequential generation process where previous outputs are fed back into the input sequence to predict subsequent tokens.",
    "course": "llms",
    "section": "pretraining",
    "tags": [
      "llms",
      "generation"
    ]
  },
  {
    "term": "Base Model",
    "def": "A foundation model trained purely on next-token prediction across trillions of tokens before any instruction tuning.",
    "course": "llms",
    "section": "pretraining",
    "tags": [
      "models",
      "training"
    ]
  },
  {
    "term": "MinHash Deduplication",
    "def": "An algorithmic data pipeline technique that identifies and purges near-duplicate documents from training corpora.",
    "course": "llms",
    "section": "pretraining",
    "tags": [
      "data",
      "preprocessing"
    ]
  },
  {
    "term": "Byte-Pair Encoding",
    "def": "A subword tokenization algorithm that iteratively merges frequent character pairs into reusable vocabulary tokens.",
    "course": "llms",
    "section": "tokenization",
    "tags": [
      "tokenization",
      "nlp"
    ]
  },
  {
    "term": "Chinchilla Scaling Laws",
    "def": "Empirical laws proving that compute-optimal training requires scaling model parameters and training tokens in equal 1:1 proportion.",
    "course": "llms",
    "section": "tokenization",
    "tags": [
      "scaling",
      "theory"
    ]
  },
  {
    "term": "Emergent Capability",
    "def": "A capability that appears suddenly at scale as continuous cross-entropy loss crosses critical performance thresholds.",
    "course": "llms",
    "section": "tokenization",
    "tags": [
      "theory",
      "scale"
    ]
  },
  {
    "term": "Supervised Fine-Tuning",
    "def": "Instruction tuning a base model on curated prompt-response pairs to teach it conversational assistant behavior.",
    "course": "llms",
    "section": "post-training",
    "tags": [
      "alignment",
      "sft"
    ]
  },
  {
    "term": "Direct Preference Optimization",
    "def": "An alignment algorithm optimizing models directly on human preference pairs (win, lose) without a separate reward model.",
    "course": "llms",
    "section": "post-training",
    "tags": [
      "alignment",
      "dpo"
    ]
  },
  {
    "term": "Reward Hacking",
    "def": "A failure mode where an agent exploits loopholes in a reward model (e.g. verbosity) without satisfying true human intent.",
    "course": "llms",
    "section": "post-training",
    "tags": [
      "alignment",
      "pitfalls"
    ]
  },
  {
    "term": "Reasoning Model",
    "def": "A model that generates internal chain-of-thought thinking tokens during inference to explore and self-correct.",
    "course": "llms",
    "section": "inference",
    "tags": [
      "reasoning",
      "models"
    ]
  },
  {
    "term": "Test-Time Compute",
    "def": "Allocating extra inference computational tokens to allow models to deliberate and explore multiple reasoning paths.",
    "course": "llms",
    "section": "inference",
    "tags": [
      "inference",
      "scaling"
    ]
  },
  {
    "term": "Language Model Head",
    "def": "The final linear projection layer in a transformer that maps hidden states to raw vocabulary logits.",
    "course": "llms",
    "section": "inference",
    "tags": [
      "architecture",
      "transformers"
    ]
  },
  {
    "term": "Token",
    "def": "A statistical subword fragment of text (roughly 4 characters or 0.75 words in English) processed by LLMs.",
    "course": "tokens-context",
    "section": "tokens",
    "tags": [
      "tokens",
      "nlp"
    ]
  },
  {
    "term": "Pre-Fill Phase",
    "def": "The parallel GPU forward pass that processes all input prompt tokens simultaneously before generation begins.",
    "course": "tokens-context",
    "section": "tokens",
    "tags": [
      "inference",
      "gpu"
    ]
  },
  {
    "term": "Decoding Phase",
    "def": "The sequential autoregressive generation of output tokens, requiring one GPU forward pass per token.",
    "course": "tokens-context",
    "section": "tokens",
    "tags": [
      "inference",
      "decoding"
    ]
  },
  {
    "term": "Time-to-First-Token",
    "def": "The elapsed duration from sending a request until the first generated token streams back from the model.",
    "course": "tokens-context",
    "section": "latency",
    "tags": [
      "latency",
      "metrics"
    ]
  },
  {
    "term": "Tokens-Per-Second",
    "def": "The generation throughput speed measuring how many output tokens the model emits per second.",
    "course": "tokens-context",
    "section": "latency",
    "tags": [
      "performance",
      "metrics"
    ]
  },
  {
    "term": "Quadratic Attention",
    "def": "The O(N^2) memory and compute scaling of self-attention where doubling sequence length quadruples cost.",
    "course": "tokens-context",
    "section": "latency",
    "tags": [
      "math",
      "complexity"
    ]
  },
  {
    "term": "FlashAttention",
    "def": "An exact, IO-aware tiled self-attention algorithm computing attention in GPU SRAM without HBM memory bottlenecks.",
    "course": "tokens-context",
    "section": "optimization",
    "tags": [
      "hardware",
      "cuda"
    ]
  },
  {
    "term": "Needle-in-a-Haystack",
    "def": "A benchmark evaluating retrieval accuracy when a specific fact is inserted at varying depths in long text.",
    "course": "tokens-context",
    "section": "optimization",
    "tags": [
      "benchmarks",
      "evals"
    ]
  },
  {
    "term": "Sliding Window Attention",
    "def": "An attention pattern restricting attention to a local window of W tokens, converting complexity to linear O(N * W).",
    "course": "tokens-context",
    "section": "optimization",
    "tags": [
      "transformers",
      "efficiency"
    ]
  },
  {
    "term": "Summarization Buffer",
    "def": "A conversation management pattern condensing older evicted turns into a pinned summary block.",
    "course": "tokens-context",
    "section": "architecture",
    "tags": [
      "context",
      "memory"
    ]
  },
  {
    "term": "Output Reserve",
    "def": "Unused context window capacity intentionally reserved for the model's generated answer tokens.",
    "course": "tokens-context",
    "section": "architecture",
    "tags": [
      "context",
      "budget"
    ]
  },
  {
    "term": "Map-Reduce Summarization",
    "def": "An architectural pattern summarizing large documents by processing chunks in parallel and reducing summaries.",
    "course": "tokens-context",
    "section": "architecture",
    "tags": [
      "architecture",
      "scale"
    ]
  },
  {
    "term": "Logits",
    "def": "The unnormalized raw output scores produced by multiplying the final hidden state by the vocabulary matrix.",
    "course": "inference-sampling",
    "section": "logits-math",
    "tags": [
      "inference",
      "math"
    ]
  },
  {
    "term": "Softmax Function",
    "def": "An exponential normalization function converting real-valued logits into a probability distribution summing to 1.0.",
    "course": "inference-sampling",
    "section": "logits-math",
    "tags": [
      "math",
      "probabilities"
    ]
  },
  {
    "term": "Greedy Decoding",
    "def": "A deterministic decoding strategy that selects the single token with the highest probability (argmax) at each step.",
    "course": "inference-sampling",
    "section": "logits-math",
    "tags": [
      "sampling",
      "decoding"
    ]
  },
  {
    "term": "Temperature",
    "def": "A hyperparameter dividing logits before Softmax to control the entropy, sharpness, and randomness of the distribution.",
    "course": "inference-sampling",
    "section": "temperature-tail",
    "tags": [
      "sampling",
      "temperature"
    ]
  },
  {
    "term": "Top-K Sampling",
    "def": "A truncation filter zeroing out all tokens outside the top K most probable candidates before sampling.",
    "course": "inference-sampling",
    "section": "temperature-tail",
    "tags": [
      "sampling",
      "top-k"
    ]
  },
  {
    "term": "Top-P (Nucleus)",
    "def": "A dynamic sampling method keeping the smallest pool of top tokens whose cumulative probability mass exceeds P.",
    "course": "inference-sampling",
    "section": "temperature-tail",
    "tags": [
      "sampling",
      "top-p"
    ]
  },
  {
    "term": "Frequency Penalty",
    "def": "A logit deduction proportional to how many times a token has appeared, discouraging repetitive phrase loops.",
    "course": "inference-sampling",
    "section": "penalties",
    "tags": [
      "sampling",
      "penalties"
    ]
  },
  {
    "term": "Presence Penalty",
    "def": "A flat one-shot logit penalty applied to any token that has appeared at least once, encouraging new topics.",
    "course": "inference-sampling",
    "section": "penalties",
    "tags": [
      "sampling",
      "penalties"
    ]
  },
  {
    "term": "Logit Bias",
    "def": "A dictionary adding or subtracting fixed numerical scores to specific token IDs to compel or ban them.",
    "course": "inference-sampling",
    "section": "penalties",
    "tags": [
      "sampling",
      "control"
    ]
  },
  {
    "term": "Random Seed",
    "def": "An initialization integer that locks down pseudo-random number generator state for reproducible sampling.",
    "course": "inference-sampling",
    "section": "reproducibility",
    "tags": [
      "testing",
      "reproducibility"
    ]
  },
  {
    "term": "System Fingerprint",
    "def": "A response identifier indicating the backend serving hardware and model weight configuration.",
    "course": "inference-sampling",
    "section": "reproducibility",
    "tags": [
      "infrastructure",
      "metrics"
    ]
  },
  {
    "term": "Max Tokens",
    "def": "A hard upper bound capping the maximum number of output tokens a model is permitted to generate.",
    "course": "inference-sampling",
    "section": "reproducibility",
    "tags": [
      "api",
      "budget"
    ]
  },
  {
    "term": "Frontier Model",
    "def": "A flagship foundation model (GPT-4o, Claude 3.5 Sonnet) delivering state-of-the-art reasoning and coding capabilities.",
    "course": "model-selection",
    "section": "tiers",
    "tags": [
      "models",
      "landscape"
    ]
  },
  {
    "term": "Mid-Tier Workhorse",
    "def": "A high-speed, cost-efficient model (GPT-4o-mini, Haiku) delivering 90% intelligence at 10% cost.",
    "course": "model-selection",
    "section": "tiers",
    "tags": [
      "models",
      "efficiency"
    ]
  },
  {
    "term": "Model Cascading",
    "def": "An architectural pattern routing requests to small models first and escalating to frontier models only on failure.",
    "course": "model-selection",
    "section": "tiers",
    "tags": [
      "routing",
      "architecture"
    ]
  },
  {
    "term": "SWE-bench",
    "def": "An authoritative software engineering benchmark evaluating models on resolving real-world GitHub repository bug issues.",
    "course": "model-selection",
    "section": "benchmarks",
    "tags": [
      "benchmarks",
      "coding"
    ]
  },
  {
    "term": "Benchmark Contamination",
    "def": "The inadvertent inclusion of benchmark test problems in pre-training data, causing false memorization.",
    "course": "model-selection",
    "section": "benchmarks",
    "tags": [
      "evals",
      "pitfalls"
    ]
  },
  {
    "term": "MMLU",
    "def": "Massive Multitask Language Understanding — a multi-subject multiple-choice benchmark evaluating general knowledge.",
    "course": "model-selection",
    "section": "benchmarks",
    "tags": [
      "benchmarks",
      "evals"
    ]
  },
  {
    "term": "Blended Token Cost",
    "def": "The effective unit price of an AI operation combining input and higher-priced output token volumes.",
    "course": "model-selection",
    "section": "economics",
    "tags": [
      "economics",
      "pricing"
    ]
  },
  {
    "term": "Batch API",
    "def": "An asynchronous processing tier offering a 50% discount for non-realtime workloads completed within 24 hours.",
    "course": "model-selection",
    "section": "economics",
    "tags": [
      "api",
      "pricing"
    ]
  },
  {
    "term": "Speculative Decoding",
    "def": "An inference optimization using a small draft model to generate candidates verified in parallel by a larger model.",
    "course": "model-selection",
    "section": "economics",
    "tags": [
      "inference",
      "optimization"
    ]
  },
  {
    "term": "Open Weights",
    "def": "Models whose trained parameters are publicly downloadable for private self-hosting (Llama, Mistral).",
    "course": "model-selection",
    "section": "governance",
    "tags": [
      "licensing",
      "open-source"
    ]
  },
  {
    "term": "Llama Community License",
    "def": "A commercial license permitting free usage below a 700 million monthly active user threshold.",
    "course": "model-selection",
    "section": "governance",
    "tags": [
      "licensing",
      "legal"
    ]
  },
  {
    "term": "Model Matrix",
    "def": "An enterprise decision framework mapping features to designated models, fallbacks, SLAs, and cost budgets.",
    "course": "model-selection",
    "section": "governance",
    "tags": [
      "architecture",
      "governance"
    ]
  },
  {
    "term": "llama.cpp",
    "def": "A pure C/C++ inference engine supporting state-of-the-art quantization across Apple Silicon and NVIDIA hardware.",
    "course": "local-vs-cloud-models",
    "section": "runtimes",
    "tags": [
      "runtimes",
      "c++"
    ]
  },
  {
    "term": "Ollama",
    "def": "A developer-friendly CLI and local REST server packaging llama.cpp into a simple Docker-like interface.",
    "course": "local-vs-cloud-models",
    "section": "runtimes",
    "tags": [
      "tools",
      "local-ai"
    ]
  },
  {
    "term": "vLLM",
    "def": "A high-throughput LLM serving engine utilizing PagedAttention to eliminate KV-cache memory fragmentation.",
    "course": "local-vs-cloud-models",
    "section": "runtimes",
    "tags": [
      "serving",
      "mlops"
    ]
  },
  {
    "term": "Unified Memory",
    "def": "An architecture (Apple Silicon) where CPU and GPU dynamically share a single high-bandwidth memory pool.",
    "course": "local-vs-cloud-models",
    "section": "memory",
    "tags": [
      "hardware",
      "apple"
    ]
  },
  {
    "term": "GGUF",
    "def": "A universal single-file container format used by llama.cpp to bundle weights, metadata, and tokenizers.",
    "course": "local-vs-cloud-models",
    "section": "memory",
    "tags": [
      "formats",
      "quantization"
    ]
  },
  {
    "term": "AWQ",
    "def": "Activation-aware Weight Quantization — protecting the salient 1% of weights from quantization to preserve accuracy.",
    "course": "local-vs-cloud-models",
    "section": "memory",
    "tags": [
      "quantization",
      "algorithms"
    ]
  },
  {
    "term": "Air-Gapping",
    "def": "Physical network isolation of computing hardware from the public internet for absolute data security.",
    "course": "local-vs-cloud-models",
    "section": "compliance",
    "tags": [
      "security",
      "compliance"
    ]
  },
  {
    "term": "Total Cost of Ownership",
    "def": "A comprehensive financial model incorporating hardware CapEx, power, cooling, and DevOps engineering payroll.",
    "course": "local-vs-cloud-models",
    "section": "compliance",
    "tags": [
      "economics",
      "finance"
    ]
  },
  {
    "term": "Data Sovereignty",
    "def": "Legal requirements dictating that digital data remains stored and processed within specific national borders.",
    "course": "local-vs-cloud-models",
    "section": "compliance",
    "tags": [
      "legal",
      "compliance"
    ]
  },
  {
    "term": "Hybrid Architecture",
    "def": "A system routing queries dynamically between fast, private local models and powerful cloud frontier models.",
    "course": "local-vs-cloud-models",
    "section": "architectures",
    "tags": [
      "architecture",
      "hybrid"
    ]
  },
  {
    "term": "Scale-to-Zero",
    "def": "Serverless cloud infrastructure that dynamically terminates GPU containers when idle to eliminate wasted costs.",
    "course": "local-vs-cloud-models",
    "section": "architectures",
    "tags": [
      "cloud",
      "serverless"
    ]
  },
  {
    "term": "Tensor Parallelism",
    "def": "Sharding individual weight matrices across multiple GPUs in a node to execute forward passes in parallel.",
    "course": "local-vs-cloud-models",
    "section": "architectures",
    "tags": [
      "distributed",
      "gpu"
    ]
  },
  {
    "term": "LLM Application Pipeline",
    "def": "The multi-stage software flow: input sanitization, prompt assembly, API call, schema validation, and delivery.",
    "course": "first-llm-application",
    "section": "architecture",
    "tags": [
      "architecture",
      "llms"
    ]
  },
  {
    "term": "System Prompt",
    "def": "A high-authority message setting global identity, behavioral rules, constraints, and output formatting for an AI session.",
    "course": "first-llm-application",
    "section": "architecture",
    "tags": [
      "prompting",
      "roles"
    ]
  },
  {
    "term": "Client Singleton",
    "def": "An architectural pattern instantiating the SDK client once to reuse underlying HTTP keep-alive connection pools.",
    "course": "first-llm-application",
    "section": "architecture",
    "tags": [
      "networking",
      "patterns"
    ]
  },
  {
    "term": "Server-Sent Events",
    "def": "An HTTP transport protocol allowing servers to stream incremental token deltas in real time to web clients.",
    "course": "first-llm-application",
    "section": "streaming",
    "tags": [
      "streaming",
      "http"
    ]
  },
  {
    "term": "Time-to-First-Token",
    "def": "The elapsed duration from sending a request until the first generated token arrives at the client.",
    "course": "first-llm-application",
    "section": "streaming",
    "tags": [
      "latency",
      "ux"
    ]
  },
  {
    "term": "Token Delta",
    "def": "An incremental fragment of text emitted during an active streaming generation chunk.",
    "course": "first-llm-application",
    "section": "streaming",
    "tags": [
      "streaming",
      "tokens"
    ]
  },
  {
    "term": "Exponential Backoff",
    "def": "A retry algorithm that doubles wait times between attempts to absorb rate limits and network spikes.",
    "course": "first-llm-application",
    "section": "resilience",
    "tags": [
      "resilience",
      "algorithms"
    ]
  },
  {
    "term": "Jitter",
    "def": "Small random time variations added to retry intervals to prevent thundering herd collisions on recovering servers.",
    "course": "first-llm-application",
    "section": "resilience",
    "tags": [
      "networking",
      "resilience"
    ]
  },
  {
    "term": "Output Sanitization",
    "def": "Defensive cleaning of model text (stripping markdown fences, sanitizing HTML, parameterizing SQL) before ingestion.",
    "course": "first-llm-application",
    "section": "resilience",
    "tags": [
      "security",
      "validation"
    ]
  },
  {
    "term": "Token Quota",
    "def": "A monthly or hourly usage budget capping the maximum tokens a specific tenant or user can consume.",
    "course": "first-llm-application",
    "section": "operations",
    "tags": [
      "economics",
      "saas"
    ]
  },
  {
    "term": "LLM Observability",
    "def": "The practice of logging, tracing, and monitoring model token spend, latency, and quality across production systems.",
    "course": "first-llm-application",
    "section": "operations",
    "tags": [
      "mlops",
      "monitoring"
    ]
  },
  {
    "term": "Unit Economics",
    "def": "The financial cost of serving a single customer transaction compared against the revenue generated by that action.",
    "course": "first-llm-application",
    "section": "operations",
    "tags": [
      "business",
      "finance"
    ]
  },
  {
    "term": "System Prompt",
    "def": "A high-authority directive setting global persona, behavioral rules, constraints, and output formatting for an AI session.",
    "course": "prompt-engineering",
    "section": "prompts",
    "tags": [
      "prompting",
      "roles"
    ]
  },
  {
    "term": "Structural Delimiters",
    "def": "Explicit markup boundary tags (e.g. ) separating developer instructions from untrusted external text.",
    "course": "prompt-engineering",
    "section": "prompts",
    "tags": [
      "prompting",
      "security"
    ]
  },
  {
    "term": "Conversational Filler",
    "def": "Unnecessary introductory or closing chatter ('Sure, here is...') that wastes tokens and breaks JSON parsers.",
    "course": "prompt-engineering",
    "section": "prompts",
    "tags": [
      "prompting",
      "efficiency"
    ]
  },
  {
    "term": "Few-Shot Prompting",
    "def": "Providing 2 to 5 concrete input-output demonstration examples in context to anchor formatting and accuracy.",
    "course": "prompt-engineering",
    "section": "techniques",
    "tags": [
      "prompting",
      "few-shot"
    ]
  },
  {
    "term": "Chain of Thought",
    "def": "Prompting models to emit intermediate reasoning steps before arriving at a final logical or mathematical answer.",
    "course": "prompt-engineering",
    "section": "techniques",
    "tags": [
      "reasoning",
      "prompting"
    ]
  },
  {
    "term": "Persona Steering",
    "def": "Calibrating model vocabulary, skepticism, and depth by assigning an explicit professional domain identity.",
    "course": "prompt-engineering",
    "section": "techniques",
    "tags": [
      "prompting",
      "personas"
    ]
  },
  {
    "term": "Negative Prompting",
    "def": "Explicitly stating what a model must NOT do to prevent scope creep, dependency hallucination, and rewrites.",
    "course": "prompt-engineering",
    "section": "guardrails",
    "tags": [
      "prompting",
      "guardrails"
    ]
  },
  {
    "term": "Clarification Protocol",
    "def": "Instructing an agent to detect ambiguous requirements, propose options, and pause for human confirmation.",
    "course": "prompt-engineering",
    "section": "guardrails",
    "tags": [
      "agents",
      "workflow"
    ]
  },
  {
    "term": "Scope Restraint",
    "def": "A constraint forbidding an agent from modifying files or functions outside an explicitly declared task boundary.",
    "course": "prompt-engineering",
    "section": "guardrails",
    "tags": [
      "safety",
      "agents"
    ]
  },
  {
    "term": "Prompt Eval Pipeline",
    "def": "An automated testing suite that evaluates prompt versions against golden benchmark datasets to prevent regressions.",
    "course": "prompt-engineering",
    "section": "evaluation",
    "tags": [
      "evals",
      "ci"
    ]
  },
  {
    "term": "LLM-as-a-Judge",
    "def": "Using a frontier model to score and evaluate candidate outputs against a structured grading rubric.",
    "course": "prompt-engineering",
    "section": "evaluation",
    "tags": [
      "evals",
      "metrics"
    ]
  },
  {
    "term": "Golden Eval Dataset",
    "def": "A curated benchmark set of representative input-output pairs used to test prompt accuracy and consistency.",
    "course": "prompt-engineering",
    "section": "evaluation",
    "tags": [
      "evals",
      "testing"
    ]
  },
  {
    "term": "Structured Output",
    "def": "Model output constrained strictly to a machine-readable, deterministic schema (JSON) with zero free-form chatter.",
    "course": "structured-outputs",
    "section": "integration",
    "tags": [
      "structured",
      "json"
    ]
  },
  {
    "term": "Conversational Pollution",
    "def": "Unsolicited introductory text ('Sure, here is your data:') that breaks downstream programmatic JSON decoders.",
    "course": "structured-outputs",
    "section": "integration",
    "tags": [
      "json",
      "pitfalls"
    ]
  },
  {
    "term": "Data Contract",
    "def": "An unambiguous formal agreement specifying data shapes, keys, types, and constraints across software boundaries.",
    "course": "structured-outputs",
    "section": "integration",
    "tags": [
      "architecture",
      "contracts"
    ]
  },
  {
    "term": "Constrained Decoding",
    "def": "An inference algorithm that dynamically masks vocabulary logits to guarantee 100% adherence to Context-Free Grammars.",
    "course": "structured-outputs",
    "section": "decoding",
    "tags": [
      "decoding",
      "grammars"
    ]
  },
  {
    "term": "JSON Mode",
    "def": "A semi-constrained generation mode guaranteeing syntactically valid JSON without enforcing specific keys or datatypes.",
    "course": "structured-outputs",
    "section": "decoding",
    "tags": [
      "api",
      "json"
    ]
  },
  {
    "term": "Grammar Masking",
    "def": "Setting the logits of all tokens that would violate the schema grammar to -infinity before sampling.",
    "course": "structured-outputs",
    "section": "decoding",
    "tags": [
      "math",
      "sampling"
    ]
  },
  {
    "term": "Pydantic v2",
    "def": "The leading Python data validation library that compiles typed classes directly into standard JSON Schema specifications.",
    "course": "structured-outputs",
    "section": "authoring",
    "tags": [
      "pydantic",
      "python"
    ]
  },
  {
    "term": "Zod",
    "def": "The standard TypeScript-first schema declaration and validation library used for structured outputs in Node.js.",
    "course": "structured-outputs",
    "section": "authoring",
    "tags": [
      "typescript",
      "zod"
    ]
  },
  {
    "term": "Field Description",
    "def": "Metadata attached to a schema property that functions as a micro-prompt guiding the model during generation.",
    "course": "structured-outputs",
    "section": "authoring",
    "tags": [
      "prompting",
      "schemas"
    ]
  },
  {
    "term": "JSON Repair Loop",
    "def": "An automated self-healing retry pattern feeding schema validation errors back to the model for correction.",
    "course": "structured-outputs",
    "section": "resilience",
    "tags": [
      "resilience",
      "json"
    ]
  },
  {
    "term": "Defensive Nullability",
    "def": "Declaring fields as optional (T | None) to give models permission to return null rather than hallucinating fake data.",
    "course": "structured-outputs",
    "section": "resilience",
    "tags": [
      "schemas",
      "safety"
    ]
  },
  {
    "term": "Additive Default Rule",
    "def": "The migration rule requiring new schema fields to provide default values to maintain backward compatibility.",
    "course": "structured-outputs",
    "section": "resilience",
    "tags": [
      "migrations",
      "architecture"
    ]
  },
  {
    "term": "Function Calling",
    "def": "A mechanism where models emit structured JSON arguments to invoke external host application tools.",
    "course": "function-calling",
    "section": "dispatch",
    "tags": [
      "tools",
      "architecture"
    ]
  },
  {
    "term": "Tool Schema",
    "def": "A formal JSON Schema specifying a tool's name, purpose description, and parameter types.",
    "course": "function-calling",
    "section": "dispatch",
    "tags": [
      "schemas",
      "tools"
    ]
  },
  {
    "term": "Tool Call ID",
    "def": "A unique string identifier binding a model's tool execution request to its subsequent result message.",
    "course": "function-calling",
    "section": "dispatch",
    "tags": [
      "api",
      "protocols"
    ]
  },
  {
    "term": "Tool Message Role",
    "def": "The dedicated message role (role='tool') used to return function results back into conversation context.",
    "course": "function-calling",
    "section": "execution",
    "tags": [
      "api",
      "roles"
    ]
  },
  {
    "term": "Parallel Tool Calling",
    "def": "The capability of a model to request multiple independent tools in a single turn for concurrent execution.",
    "course": "function-calling",
    "section": "execution",
    "tags": [
      "performance",
      "concurrency"
    ]
  },
  {
    "term": "Agent Execution Loop",
    "def": "An iterative cycle executing tool calls and feeding results back until the model determines completion.",
    "course": "function-calling",
    "section": "execution",
    "tags": [
      "agents",
      "loops"
    ]
  },
  {
    "term": "Circuit Breaker",
    "def": "A maximum turn ceiling (e.g. 10 turns) halting agent loops to prevent infinite execution and runaway bills.",
    "course": "function-calling",
    "section": "resilience",
    "tags": [
      "safety",
      "limits"
    ]
  },
  {
    "term": "Autonomous Self-Correction",
    "def": "The ability of a model to read tool error feedback and emit corrected arguments in a subsequent turn.",
    "course": "function-calling",
    "section": "resilience",
    "tags": [
      "agents",
      "resilience"
    ]
  },
  {
    "term": "Actionable Error",
    "def": "An error message containing explicit guidance and expected formats that allows models to self-correct.",
    "course": "function-calling",
    "section": "resilience",
    "tags": [
      "debugging",
      "tools"
    ]
  },
  {
    "term": "Confirmation Gate",
    "def": "A mandatory manual approval checkpoint requiring human authorization before executing destructive write tools.",
    "course": "function-calling",
    "section": "security",
    "tags": [
      "security",
      "governance"
    ]
  },
  {
    "term": "Least Privilege",
    "def": "Restricting an agent's available tools and data access strictly to what is necessary for the active task.",
    "course": "function-calling",
    "section": "security",
    "tags": [
      "security",
      "architecture"
    ]
  },
  {
    "term": "Read-Only Boundary",
    "def": "Separating autonomous read queries from sensitive state-mutating write operations.",
    "course": "function-calling",
    "section": "security",
    "tags": [
      "architecture",
      "security"
    ]
  },
  {
    "term": "RAG",
    "def": "Retrieval-Augmented Generation — augmenting LLM prompts with relevant external documents retrieved from a database.",
    "course": "rag",
    "section": "fundamentals",
    "tags": [
      "rag",
      "architecture"
    ]
  },
  {
    "term": "Parametric Memory",
    "def": "Factual knowledge encoded directly into the neural network weights during pre-training.",
    "course": "rag",
    "section": "fundamentals",
    "tags": [
      "ai",
      "memory"
    ]
  },
  {
    "term": "Knowledge Cutoff",
    "def": "The chronological date when a model's pre-training dataset ended, after which it has zero knowledge.",
    "course": "rag",
    "section": "fundamentals",
    "tags": [
      "models",
      "limits"
    ]
  },
  {
    "term": "Ingestion Pipeline",
    "def": "The offline workflow that parses, chunks, embeds, and indexes documents into a vector database.",
    "course": "rag",
    "section": "pipeline",
    "tags": [
      "data",
      "pipeline"
    ]
  },
  {
    "term": "Recursive Splitting",
    "def": "A chunking algorithm that splits on a prioritized hierarchy of natural boundaries (\n\n, \n, period).",
    "course": "rag",
    "section": "pipeline",
    "tags": [
      "chunking",
      "nlp"
    ]
  },
  {
    "term": "Chunk Overlap",
    "def": "Repeating a small percentage (10-20%) of text across adjacent chunks to preserve boundary context.",
    "course": "rag",
    "section": "pipeline",
    "tags": [
      "chunking",
      "context"
    ]
  },
  {
    "term": "Top-K Retrieval",
    "def": "Retrieving the K nearest neighbor document chunks with the highest vector similarity scores.",
    "course": "rag",
    "section": "retrieval",
    "tags": [
      "retrieval",
      "search"
    ]
  },
  {
    "term": "Grounding Directive",
    "def": "A strict system prompt instruction requiring the model to answer using only provided context documents.",
    "course": "rag",
    "section": "retrieval",
    "tags": [
      "prompting",
      "safety"
    ]
  },
  {
    "term": "Source Attribution",
    "def": "Inline citations linking generated statements directly to verifiable source document IDs and pages.",
    "course": "rag",
    "section": "retrieval",
    "tags": [
      "citations",
      "auditability"
    ]
  },
  {
    "term": "Hybrid Search",
    "def": "Combining sparse lexical keyword search (BM25) with dense semantic vector search for balanced retrieval.",
    "course": "rag",
    "section": "triage",
    "tags": [
      "search",
      "hybrid"
    ]
  },
  {
    "term": "Retrieval Failure",
    "def": "A RAG defect where the vector database fails to include the correct supporting documents in Top-K.",
    "course": "rag",
    "section": "triage",
    "tags": [
      "debugging",
      "rag"
    ]
  },
  {
    "term": "Generation Failure",
    "def": "A RAG defect where the model receives the correct chunks but misinterprets or ignores them.",
    "course": "rag",
    "section": "triage",
    "tags": [
      "debugging",
      "rag"
    ]
  },
  {
    "term": "Curse of Dimensionality",
    "def": "The phenomenon where geometric distance becomes sparse and B-trees fail in high-dimensional spaces.",
    "course": "vector-databases",
    "section": "curse",
    "tags": [
      "math",
      "vectors"
    ]
  },
  {
    "term": "Approximate Nearest Neighbor",
    "def": "Index algorithms (ANN) trading a tiny fraction of accuracy for 1,000x speedups over brute-force search.",
    "course": "vector-databases",
    "section": "curse",
    "tags": [
      "search",
      "algorithms"
    ]
  },
  {
    "term": "Flat Index",
    "def": "Brute-force exhaustive search computing exact distance against every vector in O(N) linear time.",
    "course": "vector-databases",
    "section": "curse",
    "tags": [
      "search",
      "indexing"
    ]
  },
  {
    "term": "HNSW",
    "def": "Hierarchical Navigable Small World — a multi-layer graph index providing state-of-the-art speed and recall.",
    "course": "vector-databases",
    "section": "algorithms",
    "tags": [
      "algorithms",
      "hnsw"
    ]
  },
  {
    "term": "IVFFlat",
    "def": "Inverted File Index — clustering vector space using K-Means to search only relevant centroid cells.",
    "course": "vector-databases",
    "section": "algorithms",
    "tags": [
      "algorithms",
      "clustering"
    ]
  },
  {
    "term": "Skip-List Graph",
    "def": "A hierarchical graph with sparse highway connections on top and dense local connections on bottom.",
    "course": "vector-databases",
    "section": "algorithms",
    "tags": [
      "data-structures",
      "hnsw"
    ]
  },
  {
    "term": "Cosine Distance",
    "def": "Angular distance metric (1 - cos(theta)), represented by the  operator in pgvector.",
    "course": "vector-databases",
    "section": "metrics-search",
    "tags": [
      "metrics",
      "pgvector"
    ]
  },
  {
    "term": "Single-Stage Filtered Search",
    "def": "Navigating the HNSW graph while checking metadata filter masks in real time to prevent empty results.",
    "course": "vector-databases",
    "section": "metrics-search",
    "tags": [
      "search",
      "filtering"
    ]
  },
  {
    "term": "Reciprocal Rank Fusion",
    "def": "An algorithm merging disparate search rankings based on reciprocal rank positions: sum(1 / (k + rank)).",
    "course": "vector-databases",
    "section": "metrics-search",
    "tags": [
      "algorithms",
      "hybrid"
    ]
  },
  {
    "term": "pgvector",
    "def": "An open-source PostgreSQL extension adding vector data types, HNSW indexing, and similarity search to Postgres.",
    "course": "vector-databases",
    "section": "operations",
    "tags": [
      "databases",
      "postgres"
    ]
  },
  {
    "term": "ChromaDB",
    "def": "An open-source embedded vector database that runs inside Python processes with zero server configuration.",
    "course": "vector-databases",
    "section": "operations",
    "tags": [
      "databases",
      "embedded"
    ]
  },
  {
    "term": "Product Quantization",
    "def": "Compressing vectors into compact codebook centroids to slash index RAM footprint by 75-90%.",
    "course": "vector-databases",
    "section": "operations",
    "tags": [
      "compression",
      "memory"
    ]
  },
  {
    "term": "Stateless Model",
    "def": "A model architecture where every API call is an independent mathematical evaluation retaining zero internal memory.",
    "course": "ai-memory-context",
    "section": "nature",
    "tags": [
      "ai",
      "architecture"
    ]
  },
  {
    "term": "Short-Term Memory",
    "def": "The active prompt context window holding immediate dialogue turns and working state.",
    "course": "ai-memory-context",
    "section": "nature",
    "tags": [
      "memory",
      "context"
    ]
  },
  {
    "term": "Long-Term Memory",
    "def": "External persistent data stores (databases, vector tables) holding historical facts across sessions.",
    "course": "ai-memory-context",
    "section": "nature",
    "tags": [
      "memory",
      "storage"
    ]
  },
  {
    "term": "Sliding Window",
    "def": "A buffer management pattern that keeps the newest turns within a token limit while evicting older messages.",
    "course": "ai-memory-context",
    "section": "buffers",
    "tags": [
      "context",
      "buffers"
    ]
  },
  {
    "term": "Rolling Summarization",
    "def": "Compressing older evicted conversation turns into a persistent summary block pinned in the prompt.",
    "course": "ai-memory-context",
    "section": "buffers",
    "tags": [
      "context",
      "summaries"
    ]
  },
  {
    "term": "System Prompt Pinning",
    "def": "Ensuring the system prompt is never evicted by FIFO buffer algorithms, preserving core instructions.",
    "course": "ai-memory-context",
    "section": "buffers",
    "tags": [
      "prompting",
      "safety"
    ]
  },
  {
    "term": "Semantic Entity Memory",
    "def": "Extracting atomic user facts and preferences and storing them in vector databases for future retrieval.",
    "course": "ai-memory-context",
    "section": "entities",
    "tags": [
      "memory",
      "vectors"
    ]
  },
  {
    "term": "Working Memory Scratchpad",
    "def": "A structured todo checklist tracking subtask progress and state transitions during multi-step tasks.",
    "course": "ai-memory-context",
    "section": "entities",
    "tags": [
      "agents",
      "working-memory"
    ]
  },
  {
    "term": "Memory Reconciliation",
    "def": "Detecting and resolving conflicting memories when updated facts contradict older stored records.",
    "course": "ai-memory-context",
    "section": "entities",
    "tags": [
      "memory",
      "hygiene"
    ]
  },
  {
    "term": "Right to be Forgotten",
    "def": "A GDPR privacy mandate requiring systems to permanently delete personal user data upon request.",
    "course": "ai-memory-context",
    "section": "governance",
    "tags": [
      "compliance",
      "privacy"
    ]
  },
  {
    "term": "Memory TTL",
    "def": "Time-to-Live expiration timestamps automatically purging temporary facts after a set duration.",
    "course": "ai-memory-context",
    "section": "governance",
    "tags": [
      "storage",
      "hygiene"
    ]
  },
  {
    "term": "PII Scrubbing",
    "def": "Filtering out credit cards, passwords, and sensitive identifiers before writing memories to databases.",
    "course": "ai-memory-context",
    "section": "governance",
    "tags": [
      "security",
      "privacy"
    ]
  },
  {
    "term": "AI Agent",
    "def": "An autonomous AI system that pursues an objective by perceiving its environment, planning actions, and using tools.",
    "course": "ai-agents",
    "section": "autonomy",
    "tags": [
      "agents",
      "architecture"
    ]
  },
  {
    "term": "ReAct Loop",
    "def": "An execution cycle interleaving verbal reasoning ('Thoughts') with environmental tool actions ('Actions') and feedback ('Observations').",
    "course": "ai-agents",
    "section": "autonomy",
    "tags": [
      "agents",
      "patterns"
    ]
  },
  {
    "term": "Agency",
    "def": "The capacity of an automated software system to act independently upon an external environment to achieve a goal.",
    "course": "ai-agents",
    "section": "autonomy",
    "tags": [
      "theory",
      "agents"
    ]
  },
  {
    "term": "Plan-and-Solve",
    "def": "A planning paradigm generating an upfront multi-step blueprint before beginning execution.",
    "course": "ai-agents",
    "section": "planning",
    "tags": [
      "planning",
      "agents"
    ]
  },
  {
    "term": "Tool Registry",
    "def": "A centralized architectural catalog managing tool schemas, permissions, argument validation, and dispatchers.",
    "course": "ai-agents",
    "section": "planning",
    "tags": [
      "tools",
      "architecture"
    ]
  },
  {
    "term": "Dynamic Replanning",
    "def": "Updating and adapting an existing execution plan when unexpected roadblocks or errors are observed.",
    "course": "ai-agents",
    "section": "planning",
    "tags": [
      "planning",
      "adaptation"
    ]
  },
  {
    "term": "Agent State",
    "def": "A centralized, typed data structure tracking message history, working scratchpads, and execution variables.",
    "course": "ai-agents",
    "section": "state",
    "tags": [
      "state",
      "langgraph"
    ]
  },
  {
    "term": "State Checkpoint",
    "def": "A serialized snapshot of agent state saved to a database after each turn to enable pause, resume, and rewinds.",
    "course": "ai-agents",
    "section": "state",
    "tags": [
      "persistence",
      "databases"
    ]
  },
  {
    "term": "Circuit Breaker",
    "def": "A safety mechanism that halts agent execution when error thresholds, token budgets, or turn counts are exceeded.",
    "course": "ai-agents",
    "section": "state",
    "tags": [
      "safety",
      "limits"
    ]
  },
  {
    "term": "Interruptibility",
    "def": "The capability of an agent workflow to pause execution safely for human authorization and resume cleanly.",
    "course": "ai-agents",
    "section": "collaboration",
    "tags": [
      "governance",
      "safety"
    ]
  },
  {
    "term": "Confirmation Gate",
    "def": "A mandatory manual approval checkpoint requiring human authorization before executing high-consequence write tools.",
    "course": "ai-agents",
    "section": "collaboration",
    "tags": [
      "security",
      "governance"
    ]
  },
  {
    "term": "Thrashing",
    "def": "A failure state where an agent makes circular, repetitive edits without resolving root causes.",
    "course": "ai-agents",
    "section": "collaboration",
    "tags": [
      "debugging",
      "pitfalls"
    ]
  },
  {
    "term": "Multi-Agent System",
    "def": "An architecture distributing complex tasks across multiple specialized agents with distinct roles and tools.",
    "course": "multi-agent-systems",
    "section": "topologies",
    "tags": [
      "agents",
      "multi-agent"
    ]
  },
  {
    "term": "Supervisor Topology",
    "def": "A hierarchical architecture where a central manager agent plans, delegates to workers, and reviews outputs.",
    "course": "multi-agent-systems",
    "section": "topologies",
    "tags": [
      "architecture",
      "hierarchical"
    ]
  },
  {
    "term": "Swarm Topology",
    "def": "A decentralized peer-to-peer architecture where agents coordinate directly via dynamic handoffs.",
    "course": "multi-agent-systems",
    "section": "topologies",
    "tags": [
      "architecture",
      "swarms"
    ]
  },
  {
    "term": "Tool Interference",
    "def": "A failure mode where an agent with an overloaded tool registry confuses functions or argument schemas.",
    "course": "multi-agent-systems",
    "section": "specialization",
    "tags": [
      "tools",
      "pitfalls"
    ]
  },
  {
    "term": "Structured Handoff",
    "def": "Transferring state between agents using strictly-typed data contracts rather than noisy chat transcripts.",
    "course": "multi-agent-systems",
    "section": "specialization",
    "tags": [
      "protocols",
      "handoffs"
    ]
  },
  {
    "term": "Telephone Game",
    "def": "The degradation and loss of critical constraints as information is repeatedly summarized across agent hops.",
    "course": "multi-agent-systems",
    "section": "specialization",
    "tags": [
      "communication",
      "pitfalls"
    ]
  },
  {
    "term": "Blackboard Pattern",
    "def": "A shared central memory workspace where multiple agents read state and post discoveries asynchronously.",
    "course": "multi-agent-systems",
    "section": "state-consensus",
    "tags": [
      "memory",
      "patterns"
    ]
  },
  {
    "term": "Multi-Agent Debate",
    "def": "A consensus technique where agents cross-examine and critique each other's reasoning to eliminate errors.",
    "course": "multi-agent-systems",
    "section": "state-consensus",
    "tags": [
      "consensus",
      "reasoning"
    ]
  },
  {
    "term": "Arbitrator Agent",
    "def": "A designated lead agent that evaluates conflicting arguments from specialist agents and makes binding decisions.",
    "course": "multi-agent-systems",
    "section": "state-consensus",
    "tags": [
      "governance",
      "consensus"
    ]
  },
  {
    "term": "Coordination Tax",
    "def": "The multiplicative increase in token costs and latency resulting from multi-agent communication overhead.",
    "course": "multi-agent-systems",
    "section": "orchestration",
    "tags": [
      "economics",
      "latency"
    ]
  },
  {
    "term": "LangGraph",
    "def": "A state machine orchestration framework that models multi-agent systems as cyclic directed graphs with checkpoints.",
    "course": "multi-agent-systems",
    "section": "orchestration",
    "tags": [
      "frameworks",
      "tools"
    ]
  },
  {
    "term": "Conditional Edge",
    "def": "A graph transition rule that inspects state variables to dynamically determine which agent node executes next.",
    "course": "multi-agent-systems",
    "section": "orchestration",
    "tags": [
      "langgraph",
      "routing"
    ]
  },
  {
    "term": "Model Context Protocol",
    "def": "An open standard protocol enabling AI applications to securely connect to external tools and data sources.",
    "course": "mcp",
    "section": "problem",
    "tags": [
      "mcp",
      "protocols"
    ]
  },
  {
    "term": "M*N Problem",
    "def": "The exponential integration explosion occurring when M distinct clients must connect to N distinct tools with custom glue code.",
    "course": "mcp",
    "section": "problem",
    "tags": [
      "architecture",
      "standards"
    ]
  },
  {
    "term": "JSON-RPC 2.0",
    "def": "A remote procedure call protocol encoding requests, responses, and errors in lightweight JSON envelopes.",
    "course": "mcp",
    "section": "problem",
    "tags": [
      "protocols",
      "json"
    ]
  },
  {
    "term": "Resource",
    "def": "A passive, read-only data entity (file, database row) addressed by a URI and exposed by an MCP server.",
    "course": "mcp",
    "section": "primitives",
    "tags": [
      "mcp",
      "resources"
    ]
  },
  {
    "term": "Tool",
    "def": "An executable function with JSON Schema parameters that can perform computation or cause real-world side effects.",
    "course": "mcp",
    "section": "primitives",
    "tags": [
      "mcp",
      "tools"
    ]
  },
  {
    "term": "Prompt Primitive",
    "def": "A pre-engineered slash-command template exposed by an MCP server to guide common user workflows.",
    "course": "mcp",
    "section": "primitives",
    "tags": [
      "mcp",
      "prompts"
    ]
  },
  {
    "term": "stdio Transport",
    "def": "An inter-process transport communicating over standard input and output pipes between client and child process.",
    "course": "mcp",
    "section": "transports",
    "tags": [
      "transports",
      "stdio"
    ]
  },
  {
    "term": "SSE Transport",
    "def": "A networked transport using Server-Sent Events over HTTP for remote, distributed MCP server deployments.",
    "course": "mcp",
    "section": "transports",
    "tags": [
      "transports",
      "http"
    ]
  },
  {
    "term": "FastMCP",
    "def": "A high-level Python library that compiles standard functions and docstrings into an MCP server automatically.",
    "course": "mcp",
    "section": "transports",
    "tags": [
      "tools",
      "python"
    ]
  },
  {
    "term": "Root Scoping",
    "def": "Constraining an MCP filesystem server strictly to declared directory boundaries to prevent path traversal attacks.",
    "course": "mcp",
    "section": "governance",
    "tags": [
      "security",
      "filesystem"
    ]
  },
  {
    "term": "Client Confirmation",
    "def": "A security dialog prompting human authorization before an MCP client executes a server tool action.",
    "course": "mcp",
    "section": "governance",
    "tags": [
      "security",
      "governance"
    ]
  },
  {
    "term": "MCP Host",
    "def": "The user-facing AI application (Claude Desktop, Cursor, Copilot) that orchestrates models and connects to MCP servers.",
    "course": "mcp",
    "section": "governance",
    "tags": [
      "architecture",
      "clients"
    ]
  },
  {
    "term": "Vibe-Based Testing",
    "def": "The unscientific anti-pattern of manually checking 2-3 casual examples in a playground and guessing at quality.",
    "course": "ai-evaluation",
    "section": "vibes-datasets",
    "tags": [
      "evals",
      "pitfalls"
    ]
  },
  {
    "term": "Golden Dataset",
    "def": "A curated, representative, and human-verified benchmark set of inputs and expected ground truths.",
    "course": "ai-evaluation",
    "section": "vibes-datasets",
    "tags": [
      "evals",
      "datasets"
    ]
  },
  {
    "term": "Regression",
    "def": "A performance or accuracy drop on previously passing test cases caused by a prompt or model change.",
    "course": "ai-evaluation",
    "section": "vibes-datasets",
    "tags": [
      "testing",
      "quality"
    ]
  },
  {
    "term": "Deterministic Grader",
    "def": "A code assertion (JSON schema, regex, exit code) that evaluates objective criteria at zero cost.",
    "course": "ai-evaluation",
    "section": "graders",
    "tags": [
      "evals",
      "code"
    ]
  },
  {
    "term": "LLM-as-a-Judge",
    "def": "Using a frontier model to score qualitative outputs against a structured grading rubric.",
    "course": "ai-evaluation",
    "section": "graders",
    "tags": [
      "evals",
      "judges"
    ]
  },
  {
    "term": "Verbosity Bias",
    "def": "The systemic tendency of model judges to award higher scores to longer, wordier responses.",
    "course": "ai-evaluation",
    "section": "graders",
    "tags": [
      "evals",
      "biases"
    ]
  },
  {
    "term": "BERTScore",
    "def": "An evaluation metric computing token embedding cosine similarity to recognize valid synonyms and paraphrasing.",
    "course": "ai-evaluation",
    "section": "reference-metrics",
    "tags": [
      "metrics",
      "embeddings"
    ]
  },
  {
    "term": "ROUGE",
    "def": "Recall-Oriented Understudy for Gifting Evaluation — an n-gram overlap metric standard in summarization.",
    "course": "ai-evaluation",
    "section": "reference-metrics",
    "tags": [
      "metrics",
      "nlp"
    ]
  },
  {
    "term": "Continuous Evaluation",
    "def": "Embedding automated benchmark test suites into CI/CD pipelines to gate and block regressive PRs.",
    "course": "ai-evaluation",
    "section": "reference-metrics",
    "tags": [
      "ci",
      "devops"
    ]
  },
  {
    "term": "Quality Flywheel",
    "def": "The continuous loop of capturing production user failure signals and promoting them into golden eval datasets.",
    "course": "ai-evaluation",
    "section": "production-flywheels",
    "tags": [
      "mlops",
      "flywheels"
    ]
  },
  {
    "term": "Implicit Feedback",
    "def": "Behavioral user signals (copying text, accepting code, regenerating) that reveal satisfaction without surveys.",
    "course": "ai-evaluation",
    "section": "production-flywheels",
    "tags": [
      "telemetry",
      "ux"
    ]
  },
  {
    "term": "Eval Harness",
    "def": "An automated testing software platform that loads datasets, runs models concurrently, grades outputs, and reports metrics.",
    "course": "ai-evaluation",
    "section": "production-flywheels",
    "tags": [
      "tooling",
      "evals"
    ]
  },
  {
    "term": "LLM Observability",
    "def": "The practice of collecting structured traces, spans, token metrics, and logs to understand internal AI system behavior.",
    "course": "llm-observability",
    "section": "telemetry-core",
    "tags": [
      "observability",
      "mlops"
    ]
  },
  {
    "term": "Trace",
    "def": "A hierarchical tree representing the complete end-to-end execution of a request across all services and models.",
    "course": "llm-observability",
    "section": "telemetry-core",
    "tags": [
      "telemetry",
      "opentelemetry"
    ]
  },
  {
    "term": "Span",
    "def": "A single timed unit of work (e.g. a tool call, vector query, or model generation) within a trace tree.",
    "course": "llm-observability",
    "section": "telemetry-core",
    "tags": [
      "telemetry",
      "spans"
    ]
  },
  {
    "term": "OpenInference",
    "def": "An open semantic convention standardizing OpenTelemetry attribute keys for AI models, prompts, and tokens.",
    "course": "llm-observability",
    "section": "standards-costs",
    "tags": [
      "standards",
      "opentelemetry"
    ]
  },
  {
    "term": "Token Accounting",
    "def": "Tracking prompt and completion tokens per request and tenant to calculate exact financial operating expenses.",
    "course": "llm-observability",
    "section": "standards-costs",
    "tags": [
      "economics",
      "billing"
    ]
  },
  {
    "term": "Pre-Flight Quota Gate",
    "def": "An authorization check verifying remaining tenant budget in Redis before dispatching an API call.",
    "course": "llm-observability",
    "section": "standards-costs",
    "tags": [
      "saas",
      "quotas"
    ]
  },
  {
    "term": "Inter-Token Latency",
    "def": "The elapsed duration between consecutive emitted tokens during streaming decoding.",
    "course": "llm-observability",
    "section": "latency-privacy",
    "tags": [
      "latency",
      "metrics"
    ]
  },
  {
    "term": "PII Scrubbing",
    "def": "Detecting and replacing sensitive personal identifiers with synthetic placeholders before exporting telemetry.",
    "course": "llm-observability",
    "section": "latency-privacy",
    "tags": [
      "privacy",
      "security"
    ]
  },
  {
    "term": "Microsoft Presidio",
    "def": "An open-source NLP framework providing customizable analyzer and anonymizer engines for PII redaction.",
    "course": "llm-observability",
    "section": "latency-privacy",
    "tags": [
      "tools",
      "privacy"
    ]
  },
  {
    "term": "Langfuse",
    "def": "A leading open-source LLM engineering platform providing tracing, prompt management, and evaluation dashboards.",
    "course": "llm-observability",
    "section": "platforms",
    "tags": [
      "tools",
      "platforms"
    ]
  },
  {
    "term": "Arize Phoenix",
    "def": "An open-source observability platform specializing in RAG evaluation, embedding drift, and OpenInference tracing.",
    "course": "llm-observability",
    "section": "platforms",
    "tags": [
      "tools",
      "rag"
    ]
  },
  {
    "term": "Fallback Detection",
    "def": "Monitoring and alerting whenever execution fails over from primary models to secondary backup providers.",
    "course": "llm-observability",
    "section": "platforms",
    "tags": [
      "resilience",
      "alerting"
    ]
  },
  {
    "term": "Hallucination",
    "def": "The generation of plausible-sounding but factually false, unverified statements by a language model.",
    "course": "hallucination-reliability",
    "section": "mechanics",
    "tags": [
      "hallucination",
      "safety"
    ]
  },
  {
    "term": "Confabulation",
    "def": "Generating fabricated or distorted memories and facts without conscious intent to deceive.",
    "course": "hallucination-reliability",
    "section": "mechanics",
    "tags": [
      "theory",
      "psychology"
    ]
  },
  {
    "term": "Natural Language Inference",
    "def": "An NLP classification task determining whether a hypothesis is Entailed, Contradicted, or Neutral relative to a premise.",
    "course": "hallucination-reliability",
    "section": "mechanics",
    "tags": [
      "nli",
      "verification"
    ]
  },
  {
    "term": "Grounding by Construction",
    "def": "Designing schemas and interfaces (Literals, IDs) so hallucinations are structurally impossible by grammar design.",
    "course": "hallucination-reliability",
    "section": "methods",
    "tags": [
      "architecture",
      "schemas"
    ]
  },
  {
    "term": "Generator-Verifier",
    "def": "An architectural pattern where a primary model drafts text and an independent critic model audits factual claims.",
    "course": "hallucination-reliability",
    "section": "methods",
    "tags": [
      "patterns",
      "verification"
    ]
  },
  {
    "term": "Semantic Entropy",
    "def": "A confidence metric calculating meaning divergence across multiple stochastic temperature samples.",
    "course": "hallucination-reliability",
    "section": "methods",
    "tags": [
      "metrics",
      "uncertainty"
    ]
  },
  {
    "term": "Quotes-First Extraction",
    "def": "Requiring a model to extract verbatim source quotes before synthesizing an answer to anchor attention.",
    "course": "hallucination-reliability",
    "section": "prompts",
    "tags": [
      "prompting",
      "grounding"
    ]
  },
  {
    "term": "Uncertainty Permission",
    "def": "Explicit prompt instructions authorizing the model to reply 'I do not know' when facts are absent.",
    "course": "hallucination-reliability",
    "section": "prompts",
    "tags": [
      "prompting",
      "truthfulness"
    ]
  },
  {
    "term": "Premise Challenge",
    "def": "Instructing a model to detect and correct false user presuppositions rather than sycophantically agreeing.",
    "course": "hallucination-reliability",
    "section": "prompts",
    "tags": [
      "prompting",
      "sycophancy"
    ]
  },
  {
    "term": "Defense in Depth",
    "def": "Layering multiple independent safeguards (RAG, schemas, NLI, human gates) so single failures are trapped.",
    "course": "hallucination-reliability",
    "section": "governance",
    "tags": [
      "security",
      "architecture"
    ]
  },
  {
    "term": "Audit Trail",
    "def": "An immutable record storing reviewer identity, timestamps, and source evidence for compliance verification.",
    "course": "hallucination-reliability",
    "section": "governance",
    "tags": [
      "compliance",
      "governance"
    ]
  },
  {
    "term": "Conformal Prediction",
    "def": "A statistical framework providing mathematically proven confidence intervals on model prediction sets.",
    "course": "hallucination-reliability",
    "section": "governance",
    "tags": [
      "statistics",
      "safety"
    ]
  },
  {
    "term": "RAG Triad",
    "def": "The three core evaluation pillars: Context Relevance, Groundedness (Faithfulness), and Answer Relevance.",
    "course": "rag-evaluation",
    "section": "triad",
    "tags": [
      "evals",
      "rag"
    ]
  },
  {
    "term": "Context Recall",
    "def": "The proportion of ground-truth factual statements needed to answer a query successfully captured in retrieved chunks.",
    "course": "rag-evaluation",
    "section": "triad",
    "tags": [
      "retrieval",
      "metrics"
    ]
  },
  {
    "term": "Context Precision",
    "def": "A metric evaluating whether the most relevant document chunks are ranked at the top of retrieved results.",
    "course": "rag-evaluation",
    "section": "triad",
    "tags": [
      "retrieval",
      "ranking"
    ]
  },
  {
    "term": "Faithfulness",
    "def": "The ratio of factual claims in the generated response that can be logically inferred from retrieved context (zero hallucination).",
    "course": "rag-evaluation",
    "section": "generation-metrics",
    "tags": [
      "generation",
      "grounding"
    ]
  },
  {
    "term": "Answer Relevance",
    "def": "A metric measuring how directly and completely the generated response addresses the user's specific query.",
    "course": "rag-evaluation",
    "section": "generation-metrics",
    "tags": [
      "generation",
      "relevance"
    ]
  },
  {
    "term": "Ragas",
    "def": "An open-source industry standard Python library for automated RAG Triad evaluation and metric computation.",
    "course": "rag-evaluation",
    "section": "generation-metrics",
    "tags": [
      "tools",
      "evals"
    ]
  },
  {
    "term": "Synthetic Test Generation",
    "def": "Using LLMs to automatically synthesize realistic questions, multi-hop tasks, and ground truths from raw docs.",
    "course": "rag-evaluation",
    "section": "synthesis-triage",
    "tags": [
      "datasets",
      "synthesis"
    ]
  },
  {
    "term": "Retrieval Miss",
    "def": "A RAG failure mode where the vector search engine fails to include supporting facts in the Top-K candidates.",
    "course": "rag-evaluation",
    "section": "synthesis-triage",
    "tags": [
      "debugging",
      "retrieval"
    ]
  },
  {
    "term": "Context Dilution",
    "def": "Flooding the prompt with excessive low-relevance chunks, which degrades model attention on the true answer.",
    "course": "rag-evaluation",
    "section": "synthesis-triage",
    "tags": [
      "attention",
      "pitfalls"
    ]
  },
  {
    "term": "TruLens",
    "def": "An open-source instrumentation framework for real-time RAG Triad feedback evaluation and dashboards.",
    "course": "rag-evaluation",
    "section": "benchmarks",
    "tags": [
      "tools",
      "observability"
    ]
  },
  {
    "term": "Matrix Benchmark",
    "def": "A grid search experiment evaluating permutations of chunk sizes, overlaps, and embedding models empirically.",
    "course": "rag-evaluation",
    "section": "benchmarks",
    "tags": [
      "experiments",
      "optimization"
    ]
  },
  {
    "term": "Continuous RAG Gate",
    "def": "An automated CI checkpoint requiring Context Recall >= 0.90 and Faithfulness >= 0.95 to deploy.",
    "course": "rag-evaluation",
    "section": "benchmarks",
    "tags": [
      "ci",
      "quality"
    ]
  },
  {
    "term": "Agent Evaluation",
    "def": "The discipline of quantitatively measuring multi-step autonomous behavior, tool correctness, and end-state task success.",
    "course": "agent-evaluation",
    "section": "agency-eval",
    "tags": [
      "agents",
      "evals"
    ]
  },
  {
    "term": "End-State Principle",
    "def": "Evaluating agents based on the final physical and digital state of the environment rather than intermediate thoughts.",
    "course": "agent-evaluation",
    "section": "agency-eval",
    "tags": [
      "methodology",
      "evals"
    ]
  },
  {
    "term": "Trajectory Analysis",
    "def": "Evaluating the sequence of tool calls and actions an agent takes to measure efficiency, redundancy, and cost.",
    "course": "agent-evaluation",
    "section": "agency-eval",
    "tags": [
      "agents",
      "trajectories"
    ]
  },
  {
    "term": "Pass@1",
    "def": "The percentage of benchmark problems an agent successfully resolves on its first single autonomous attempt.",
    "course": "agent-evaluation",
    "section": "metrics-pass",
    "tags": [
      "metrics",
      "reliability"
    ]
  },
  {
    "term": "Pass@K",
    "def": "A metric measuring whether at least one correct solution is found across K independent candidate attempts.",
    "course": "agent-evaluation",
    "section": "metrics-pass",
    "tags": [
      "metrics",
      "sampling"
    ]
  },
  {
    "term": "Tool Selection Accuracy",
    "def": "The proportion of agent turns where the model selects the optimal tool for the active problem state.",
    "course": "agent-evaluation",
    "section": "metrics-pass",
    "tags": [
      "tools",
      "metrics"
    ]
  },
  {
    "term": "Fault Injection",
    "def": "Deliberately introducing broken syntax, timeouts, or permission errors to test agent self-healing resilience.",
    "course": "agent-evaluation",
    "section": "resilience-bench",
    "tags": [
      "testing",
      "resilience"
    ]
  },
  {
    "term": "SWE-bench",
    "def": "The gold-standard benchmark testing agents on resolving 2,294 real-world GitHub issues from open-source Python repos.",
    "course": "agent-evaluation",
    "section": "resilience-bench",
    "tags": [
      "benchmarks",
      "swe-bench"
    ]
  },
  {
    "term": "Hermetic Sandbox",
    "def": "An isolated, disposable container environment providing deterministic starting state for reproducible testing.",
    "course": "agent-evaluation",
    "section": "resilience-bench",
    "tags": [
      "docker",
      "sandboxes"
    ]
  },
  {
    "term": "Internal Task Card",
    "def": "A structured benchmark specification drawn from real company tickets containing starting commits and verification commands.",
    "course": "agent-evaluation",
    "section": "internal-harness",
    "tags": [
      "internal",
      "benchmarks"
    ]
  },
  {
    "term": "Cost-to-Solution",
    "def": "The total financial dollar cost of API tokens consumed by an agent across an entire multi-turn trajectory.",
    "course": "agent-evaluation",
    "section": "internal-harness",
    "tags": [
      "economics",
      "metrics"
    ]
  },
  {
    "term": "Session Replay",
    "def": "Recording and stepping through an agent's historical thoughts and tool calls in a visual debugger.",
    "course": "agent-evaluation",
    "section": "internal-harness",
    "tags": [
      "debugging",
      "tooling"
    ]
  },
  {
    "term": "AI Guardrail",
    "def": "A programmable safety boundary intercepting, inspecting, and modifying inputs and outputs before reaching models or users.",
    "course": "ai-guardrails",
    "section": "guardrail-core",
    "tags": [
      "guardrails",
      "security"
    ]
  },
  {
    "term": "Topicality Filtering",
    "def": "Enforcing semantic boundaries to ensure queries remain within an application's defined business domain.",
    "course": "ai-guardrails",
    "section": "guardrail-core",
    "tags": [
      "filtering",
      "topicality"
    ]
  },
  {
    "term": "Llama Guard",
    "def": "An open-weights safety classifier fine-tuned by Meta to detect safety risks and jailbreaks in prompts.",
    "course": "ai-guardrails",
    "section": "guardrail-core",
    "tags": [
      "models",
      "safety"
    ]
  },
  {
    "term": "Output Validation",
    "def": "Egress inspection verifying schema compliance, factual grounding, and secret redaction before delivery.",
    "course": "ai-guardrails",
    "section": "validation-output",
    "tags": [
      "validation",
      "schemas"
    ]
  },
  {
    "term": "Credential Leak Scanning",
    "def": "Regex and entropy analysis detecting internal API keys or passwords in generated responses.",
    "course": "ai-guardrails",
    "section": "validation-output",
    "tags": [
      "security",
      "secrets"
    ]
  },
  {
    "term": "Self-Healing Schema Loop",
    "def": "Passing broken JSON and parser error messages to a fast model to repair syntax automatically.",
    "course": "ai-guardrails",
    "section": "validation-output",
    "tags": [
      "patterns",
      "schemas"
    ]
  },
  {
    "term": "NeMo Guardrails",
    "def": "NVIDIA's open-source dialog modeling framework using Colang to program conversational rails.",
    "course": "ai-guardrails",
    "section": "frameworks",
    "tags": [
      "tools",
      "frameworks"
    ]
  },
  {
    "term": "Guardrails AI",
    "def": "A Python framework providing a Hub of composable validators and automated corrective re-asking.",
    "course": "ai-guardrails",
    "section": "frameworks",
    "tags": [
      "tools",
      "frameworks"
    ]
  },
  {
    "term": "OpenAI Moderation API",
    "def": "A free, sub-100ms endpoint classifying text across 11 categories of severe harm.",
    "course": "ai-guardrails",
    "section": "frameworks",
    "tags": [
      "apis",
      "moderation"
    ]
  },
  {
    "term": "Action Allow-List",
    "def": "A security model permitting only explicitly approved tool calls and parameters, blocking all else by default.",
    "course": "ai-guardrails",
    "section": "architecture-ops",
    "tags": [
      "security",
      "rbac"
    ]
  },
  {
    "term": "Human Escalation Protocol",
    "def": "The procedure of gracefully refusing unsafe requests, logging audit trails, and routing to human specialists.",
    "course": "ai-guardrails",
    "section": "architecture-ops",
    "tags": [
      "operations",
      "human"
    ]
  },
  {
    "term": "Guardrail Gateway",
    "def": "A centralized reverse proxy enforcing uniform safety, compliance, and schema validation across all company AI services.",
    "course": "ai-guardrails",
    "section": "architecture-ops",
    "tags": [
      "architecture",
      "gateways"
    ]
  },
  {
    "term": "Pre-Fill Phase",
    "def": "The compute-bound initial inference stage processing all prompt tokens in parallel across GPU cores.",
    "course": "ai-cost-latency",
    "section": "inference-regimes",
    "tags": [
      "inference",
      "gpu"
    ]
  },
  {
    "term": "Decoding Phase",
    "def": "The memory-bandwidth bound autoregressive stage generating output tokens sequentially one by one.",
    "course": "ai-cost-latency",
    "section": "inference-regimes",
    "tags": [
      "inference",
      "decoding"
    ]
  },
  {
    "term": "Prompt Caching",
    "def": "Reusing pre-computed Key-Value (KV) attention states for static prompt prefixes across multiple queries.",
    "course": "ai-cost-latency",
    "section": "inference-regimes",
    "tags": [
      "caching",
      "tokens"
    ]
  },
  {
    "term": "Semantic Cache",
    "def": "A cache matching queries based on embedding vector similarity (cosine >= 0.96) rather than exact strings.",
    "course": "ai-cost-latency",
    "section": "caches-decoding",
    "tags": [
      "caching",
      "embeddings"
    ]
  },
  {
    "term": "Speculative Decoding",
    "def": "Using a tiny drafter model to generate candidate tokens verified in parallel by a large model.",
    "course": "ai-cost-latency",
    "section": "caches-decoding",
    "tags": [
      "decoding",
      "speedup"
    ]
  },
  {
    "term": "Time-to-First-Token",
    "def": "The elapsed duration between dispatching a request and rendering the very first generated token.",
    "course": "ai-cost-latency",
    "section": "caches-decoding",
    "tags": [
      "metrics",
      "latency"
    ]
  },
  {
    "term": "Server-Sent Events",
    "def": "A lightweight standard for one-way HTTP streaming of text events and tokens from server to client.",
    "course": "ai-cost-latency",
    "section": "streaming-serving",
    "tags": [
      "protocols",
      "streaming"
    ]
  },
  {
    "term": "PagedAttention",
    "def": "A memory allocation algorithm managing KV-caches in non-contiguous virtual pages to eliminate fragmentation.",
    "course": "ai-cost-latency",
    "section": "streaming-serving",
    "tags": [
      "vllm",
      "memory"
    ]
  },
  {
    "term": "Continuous Batching",
    "def": "Iteration-level scheduling that dynamically injects new requests as soon as any active request finishes.",
    "course": "ai-cost-latency",
    "section": "streaming-serving",
    "tags": [
      "serving",
      "vllm"
    ]
  },
  {
    "term": "Model Cascade",
    "def": "An architectural pattern routing queries to fast cheap models first, escalating to frontier models on failure.",
    "course": "ai-cost-latency",
    "section": "cascades",
    "tags": [
      "routing",
      "cascades"
    ]
  },
  {
    "term": "Dynamic Token Budget",
    "def": "Setting task-specific max_tokens limits (e.g. 20 for classification, 1000 for code) to eliminate waste.",
    "course": "ai-cost-latency",
    "section": "cascades",
    "tags": [
      "economics",
      "optimization"
    ]
  },
  {
    "term": "Typewriter Smoothing",
    "def": "A frontend buffering technique smoothing out bursty token arrivals into a steady reading cadence.",
    "course": "ai-cost-latency",
    "section": "cascades",
    "tags": [
      "ux",
      "frontend"
    ]
  },
  {
    "term": "Multi-Model Spectrum",
    "def": "Distributing AI workloads across classifier, workhorse, and frontier model tiers based on task complexity.",
    "course": "ai-model-routing",
    "section": "spectrum-routing",
    "tags": [
      "routing",
      "architecture"
    ]
  },
  {
    "term": "Semantic Router",
    "def": "An ultra-fast component matching prompt embeddings against domain centroids to route queries in milliseconds.",
    "course": "ai-model-routing",
    "section": "spectrum-routing",
    "tags": [
      "routing",
      "embeddings"
    ]
  },
  {
    "term": "Route Centroid",
    "def": "The average embedding vector representing a cluster of sample utterances for a specific domain.",
    "course": "ai-model-routing",
    "section": "spectrum-routing",
    "tags": [
      "embeddings",
      "math"
    ]
  },
  {
    "term": "Complexity Cascade",
    "def": "Executing fast models first and escalating to frontier models only when verification checks fail.",
    "course": "ai-model-routing",
    "section": "cascades-breakers",
    "tags": [
      "cascades",
      "optimization"
    ]
  },
  {
    "term": "Circuit Breaker",
    "def": "A design pattern that trips to OPEN during provider outages, instantly rerouting traffic without waiting for timeouts.",
    "course": "ai-model-routing",
    "section": "cascades-breakers",
    "tags": [
      "resilience",
      "patterns"
    ]
  },
  {
    "term": "EWMA Latency",
    "def": "Exponentially Weighted Moving Average tracking real-time rolling response times to identify fastest endpoints.",
    "course": "ai-model-routing",
    "section": "cascades-breakers",
    "tags": [
      "metrics",
      "latency"
    ]
  },
  {
    "term": "SLA Routing",
    "def": "Aligning compute spend with customer revenue by routing free users to cheap tiers and VIPs to frontier tiers.",
    "course": "ai-model-routing",
    "section": "business-proxies",
    "tags": [
      "business",
      "saas"
    ]
  },
  {
    "term": "LiteLLM Proxy",
    "def": "An open-source gateway proxy providing a unified OpenAI-compatible interface to 100+ LLMs with fallbacks.",
    "course": "ai-model-routing",
    "section": "business-proxies",
    "tags": [
      "tools",
      "proxies"
    ]
  },
  {
    "term": "Virtual API Key",
    "def": "A proxy-managed credential issued to internal teams with hard monthly budget ceilings and spend tracking.",
    "course": "ai-model-routing",
    "section": "business-proxies",
    "tags": [
      "governance",
      "security"
    ]
  },
  {
    "term": "Pre-Flight Scoring",
    "def": "Analyzing prompt length, code syntax, and reasoning constraints to predict required intelligence before dispatch.",
    "course": "ai-model-routing",
    "section": "synthesis",
    "tags": [
      "heuristics",
      "routing"
    ]
  },
  {
    "term": "Exploration Traffic",
    "def": "Sending a small percentage (10-20%) of requests to slower endpoints to monitor their operational recovery.",
    "course": "ai-model-routing",
    "section": "synthesis",
    "tags": [
      "telemetry",
      "traffic"
    ]
  },
  {
    "term": "Intelligent Model Router",
    "def": "An end-to-end engine coordinating semantic routing, complexity cascades, and circuit-breaker failovers.",
    "course": "ai-model-routing",
    "section": "synthesis",
    "tags": [
      "architecture",
      "systems"
    ]
  },
  {
    "term": "Decoupled Architecture",
    "def": "Separating slow model inference from web request threads using asynchronous queues and streaming proxies.",
    "course": "production-ai-architecture",
    "section": "platform-queues",
    "tags": [
      "architecture",
      "systems"
    ]
  },
  {
    "term": "Async Job Queue",
    "def": "A distributed background worker pool (Celery, BullMQ) executing long-running tasks beyond HTTP timeouts.",
    "course": "production-ai-architecture",
    "section": "platform-queues",
    "tags": [
      "queues",
      "scaling"
    ]
  },
  {
    "term": "HTTP 202 Accepted",
    "def": "The standard HTTP status returned when a task has been successfully enqueued for background execution.",
    "course": "production-ai-architecture",
    "section": "platform-queues",
    "tags": [
      "http",
      "standards"
    ]
  },
  {
    "term": "Ghost Stream",
    "def": "An orphaned server generation loop that continues wasting tokens after a client closes their browser tab.",
    "course": "production-ai-architecture",
    "section": "streaming-sessions",
    "tags": [
      "streaming",
      "pitfalls"
    ]
  },
  {
    "term": "Stateless Session Hydration",
    "def": "Fetching recent conversation turns from Redis at the start of a request so any pod can serve any turn.",
    "course": "production-ai-architecture",
    "section": "streaming-sessions",
    "tags": [
      "sessions",
      "stateless"
    ]
  },
  {
    "term": "Context Pruning",
    "def": "Summarizing older conversation turns into compact paragraphs to bound prompt token volume.",
    "course": "production-ai-architecture",
    "section": "streaming-sessions",
    "tags": [
      "context",
      "memory"
    ]
  },
  {
    "term": "Tokens-Per-Minute",
    "def": "A rate-limiting metric tracking cumulative input and output token consumption per tenant.",
    "course": "production-ai-architecture",
    "section": "limits-isolation",
    "tags": [
      "rate-limiting",
      "quotas"
    ]
  },
  {
    "term": "Noisy Neighbor Problem",
    "def": "When an unconstrained tenant monopolizes shared GPU compute or databases, degrading performance for others.",
    "course": "production-ai-architecture",
    "section": "limits-isolation",
    "tags": [
      "scaling",
      "tenancy"
    ]
  },
  {
    "term": "Row-Level Security",
    "def": "A PostgreSQL engine feature evaluating security policies per query to restrict row access by tenant.",
    "course": "production-ai-architecture",
    "section": "limits-isolation",
    "tags": [
      "security",
      "databases"
    ]
  },
  {
    "term": "AWS PrivateLink",
    "def": "Private cloud connectivity routing API traffic across cloud backbones without public internet exposure.",
    "course": "production-ai-architecture",
    "section": "topologies",
    "tags": [
      "cloud",
      "security"
    ]
  },
  {
    "term": "WebGPU",
    "def": "A modern web standard enabling direct browser execution of machine learning models on client GPU hardware.",
    "course": "production-ai-architecture",
    "section": "topologies",
    "tags": [
      "edge",
      "browsers"
    ]
  },
  {
    "term": "Bring Your Own Key",
    "def": "An enterprise security model where customers control the master cryptographic keys in their own KMS.",
    "course": "production-ai-architecture",
    "section": "topologies",
    "tags": [
      "security",
      "encryption"
    ]
  },
  {
    "term": "AI Reliability",
    "def": "The discipline of engineering systems that remain dependable, safe, and available despite probabilistic non-determinism and outages.",
    "course": "reliable-ai-systems",
    "section": "reliability-foundations",
    "tags": [
      "reliability",
      "systems"
    ]
  },
  {
    "term": "Silent Semantic Failure",
    "def": "A failure where a system returns HTTP 200 without code errors, but the generated answer is factually false or harmful.",
    "course": "reliable-ai-systems",
    "section": "reliability-foundations",
    "tags": [
      "failures",
      "semantics"
    ]
  },
  {
    "term": "Idempotent Action",
    "def": "An operation that produces the exact same state mutation when executed once or multiple times with the same key.",
    "course": "reliable-ai-systems",
    "section": "reliability-foundations",
    "tags": [
      "idempotency",
      "architecture"
    ]
  },
  {
    "term": "Graceful Degradation",
    "def": "Maintaining core user functionality using cached answers or rule-based search during upstream AI outages.",
    "course": "reliable-ai-systems",
    "section": "resilience-degradation",
    "tags": [
      "resilience",
      "fallbacks"
    ]
  },
  {
    "term": "Degradation Pyramid",
    "def": "A multi-tier resilience hierarchy: Frontier LLM -> Backup LLM -> Semantic Cache -> Deterministic Search.",
    "course": "reliable-ai-systems",
    "section": "resilience-degradation",
    "tags": [
      "architecture",
      "pyramid"
    ]
  },
  {
    "term": "Exponential Backoff with Full Jitter",
    "def": "A retry algorithm combining exponential wait times with randomized time spread to prevent thundering herds.",
    "course": "reliable-ai-systems",
    "section": "resilience-degradation",
    "tags": [
      "retries",
      "algorithms"
    ]
  },
  {
    "term": "Data Drift",
    "def": "A shift in the distribution of incoming user prompts (new slang, languages, speech-to-text typos) over time.",
    "course": "reliable-ai-systems",
    "section": "drift-release",
    "tags": [
      "monitoring",
      "drift"
    ]
  },
  {
    "term": "Concept Drift",
    "def": "A shift in real-world ground-truth rules where previously correct answers become factually obsolete.",
    "course": "reliable-ai-systems",
    "section": "drift-release",
    "tags": [
      "monitoring",
      "drift"
    ]
  },
  {
    "term": "Shadow Deployment",
    "def": "Duplicating live user traffic to test a new candidate model in the background with zero user exposure.",
    "course": "reliable-ai-systems",
    "section": "drift-release",
    "tags": [
      "releases",
      "devops"
    ]
  },
  {
    "term": "Canary Rollout",
    "def": "Incrementally routing a tiny percentage of live user traffic (1% -> 5% -> 100%) to a new model candidate.",
    "course": "reliable-ai-systems",
    "section": "chaos-fivenines",
    "tags": [
      "releases",
      "canary"
    ]
  },
  {
    "term": "AI Chaos Engineering",
    "def": "Proactively injecting synthetic rate limits, latency delays, and corrupted payloads into staging to verify defenses.",
    "course": "reliable-ai-systems",
    "section": "chaos-fivenines",
    "tags": [
      "chaos",
      "testing"
    ]
  },
  {
    "term": "Five-Nines Availability",
    "def": "99.999% operational uptime, allowing no more than 5.26 minutes of total unplanned downtime per year.",
    "course": "reliable-ai-systems",
    "section": "chaos-fivenines",
    "tags": [
      "sla",
      "availability"
    ]
  },
  {
    "term": "Attack Surface",
    "def": "The total sum of all reachable entry points, network interfaces, and API parameters accessible to untrusted users.",
    "course": "cybersecurity-fundamentals",
    "section": "fundamentals",
    "tags": [
      "security",
      "surface"
    ]
  },
  {
    "term": "CIA Triad",
    "def": "The foundational security model balancing Confidentiality (privacy), Integrity (accuracy), and Availability (uptime).",
    "course": "cybersecurity-fundamentals",
    "section": "fundamentals",
    "tags": [
      "foundations",
      "cia"
    ]
  },
  {
    "term": "Confidentiality",
    "def": "Protecting sensitive information from unauthorized observation and disclosure using encryption and access controls.",
    "course": "cybersecurity-fundamentals",
    "section": "fundamentals",
    "tags": [
      "privacy",
      "encryption"
    ]
  },
  {
    "term": "STRIDE",
    "def": "Microsoft's threat modeling methodology: Spoofing, Tampering, Repudiation, Information Disclosure, DoS, and Elevation of Privilege.",
    "course": "cybersecurity-fundamentals",
    "section": "threat-models",
    "tags": [
      "modeling",
      "stride"
    ]
  },
  {
    "term": "Authentication",
    "def": "The verification of claimed identity using credentials, passwords, MFA, or cryptographic tokens (AuthN).",
    "course": "cybersecurity-fundamentals",
    "section": "threat-models",
    "tags": [
      "auth",
      "identity"
    ]
  },
  {
    "term": "Authorization",
    "def": "The process of determining whether an authenticated identity has permission to perform a specific action (AuthZ).",
    "course": "cybersecurity-fundamentals",
    "section": "threat-models",
    "tags": [
      "auth",
      "permissions"
    ]
  },
  {
    "term": "Argon2id",
    "def": "The modern memory-hard cryptographic hash algorithm recommended as the gold standard for password storage.",
    "course": "cybersecurity-fundamentals",
    "section": "crypto",
    "tags": [
      "crypto",
      "passwords"
    ]
  },
  {
    "term": "Symmetric Encryption",
    "def": "A fast cipher family (AES-256-GCM) where the same secret key is used for both encryption and decryption.",
    "course": "cybersecurity-fundamentals",
    "section": "crypto",
    "tags": [
      "crypto",
      "symmetric"
    ]
  },
  {
    "term": "Asymmetric Cryptography",
    "def": "Public-key cryptography (RSA, ECC, Ed25519) using mathematically linked public and private keypairs.",
    "course": "cybersecurity-fundamentals",
    "section": "crypto",
    "tags": [
      "crypto",
      "asymmetric"
    ]
  },
  {
    "term": "Zero Trust",
    "def": "A security model operating on 'never trust, always verify', enforcing authentication and encryption for every interaction.",
    "course": "cybersecurity-fundamentals",
    "section": "network-defense",
    "tags": [
      "network",
      "zerotrust"
    ]
  },
  {
    "term": "Mutual TLS (mTLS)",
    "def": "A protocol where both client and server present X.509 certificates to authenticate each other and encrypt traffic.",
    "course": "cybersecurity-fundamentals",
    "section": "network-defense",
    "tags": [
      "network",
      "tls"
    ]
  },
  {
    "term": "Defense in Depth",
    "def": "Layering independent security controls across network, host, app, and data layers so single failures are contained.",
    "course": "cybersecurity-fundamentals",
    "section": "network-defense",
    "tags": [
      "architecture",
      "defense"
    ]
  },
  {
    "term": "OWASP Top 10",
    "def": "The industry standard consensus ranking of the ten most critical web application security risks.",
    "course": "web-security",
    "section": "owasp-injection",
    "tags": [
      "owasp",
      "standards"
    ]
  },
  {
    "term": "SQL Injection",
    "def": "An attack where untrusted user input alters database query syntax, allowing data extraction or bypass.",
    "course": "web-security",
    "section": "owasp-injection",
    "tags": [
      "injection",
      "sqli"
    ]
  },
  {
    "term": "Parameterized Query",
    "def": "A database query where structure is compiled first and data values are bound separately, preventing SQLi.",
    "course": "web-security",
    "section": "owasp-injection",
    "tags": [
      "defense",
      "database"
    ]
  },
  {
    "term": "Cross-Site Scripting",
    "def": "A vulnerability allowing attackers to execute arbitrary JavaScript in victims' browsers (XSS).",
    "course": "web-security",
    "section": "client-attacks",
    "tags": [
      "xss",
      "client"
    ]
  },
  {
    "term": "DOMPurify",
    "def": "A heavily audited open-source JavaScript library that sanitizes HTML strings to prevent XSS.",
    "course": "web-security",
    "section": "client-attacks",
    "tags": [
      "tools",
      "sanitization"
    ]
  },
  {
    "term": "Cross-Site Request Forgery",
    "def": "An attack tricking an authenticated browser into sending unauthorized requests with cookies attached (CSRF).",
    "course": "web-security",
    "section": "client-attacks",
    "tags": [
      "csrf",
      "cookies"
    ]
  },
  {
    "term": "Insecure Direct Object Reference",
    "def": "A broken access control flaw where endpoints expose database IDs without verifying user ownership (IDOR).",
    "course": "web-security",
    "section": "access-headers",
    "tags": [
      "access",
      "idor"
    ]
  },
  {
    "term": "Content Security Policy",
    "def": "An HTTP header restricting which domains a browser is permitted to load scripts, styles, and assets from (CSP).",
    "course": "web-security",
    "section": "access-headers",
    "tags": [
      "headers",
      "csp"
    ]
  },
  {
    "term": "HSTS",
    "def": "HTTP Strict Transport Security header instructing browsers to strictly refuse unencrypted HTTP connections.",
    "course": "web-security",
    "section": "access-headers",
    "tags": [
      "headers",
      "hsts"
    ]
  },
  {
    "term": "SameSite Cookie",
    "def": "A cookie attribute (Lax/Strict) instructing browsers not to attach cookies on cross-origin requests.",
    "course": "web-security",
    "section": "testing-apis",
    "tags": [
      "cookies",
      "csrf"
    ]
  },
  {
    "term": "OWASP ZAP",
    "def": "Zed Attack Proxy — a leading open-source dynamic web application security testing (DAST) scanner.",
    "course": "web-security",
    "section": "testing-apis",
    "tags": [
      "tools",
      "dast"
    ]
  },
  {
    "term": "DAST",
    "def": "Dynamic Application Security Testing — probing a running application from the outside to find vulnerabilities.",
    "course": "web-security",
    "section": "testing-apis",
    "tags": [
      "testing",
      "dast"
    ]
  },
  {
    "term": "Secret Crisis",
    "def": "The widespread security epidemic of committing plaintext API keys and credentials to version control repositories.",
    "course": "secrets-identity",
    "section": "secrets-leaks",
    "tags": [
      "secrets",
      "git"
    ]
  },
  {
    "term": "Secret Manager",
    "def": "A centralized, encrypted service (HashiCorp Vault, AWS Secrets Manager) for storing and rotating credentials.",
    "course": "secrets-identity",
    "section": "secrets-leaks",
    "tags": [
      "vault",
      "storage"
    ]
  },
  {
    "term": "In-Memory Injection",
    "def": "Mounting secrets into ephemeral RAM buffers at runtime, ensuring no credentials touch persistent server disks.",
    "course": "secrets-identity",
    "section": "secrets-leaks",
    "tags": [
      "containers",
      "security"
    ]
  },
  {
    "term": "Ephemeral Credentials",
    "def": "Temporary access tokens with automated short-term expiration (e.g. 1 hour) that bound risk windows.",
    "course": "secrets-identity",
    "section": "ephemeral-access",
    "tags": [
      "tokens",
      "ephemeral"
    ]
  },
  {
    "term": "Least Privilege",
    "def": "The security principle dictating that identities must be granted only the minimum permissions necessary for their tasks.",
    "course": "secrets-identity",
    "section": "ephemeral-access",
    "tags": [
      "iam",
      "governance"
    ]
  },
  {
    "term": "AWS STS",
    "def": "Security Token Service: an AWS service that generates temporary, scoped security credentials for assumed roles.",
    "course": "secrets-identity",
    "section": "ephemeral-access",
    "tags": [
      "aws",
      "sts"
    ]
  },
  {
    "term": "Mutual TLS (mTLS)",
    "def": "Bidirectional cryptographic authentication using X.509 certificates to secure machine-to-machine traffic.",
    "course": "secrets-identity",
    "section": "service-federation",
    "tags": [
      "network",
      "mtls"
    ]
  },
  {
    "term": "OAuth2 Client Credentials",
    "def": "An automated M2M authentication grant type where services authenticate directly with identity providers.",
    "course": "secrets-identity",
    "section": "service-federation",
    "tags": [
      "oauth2",
      "m2m"
    ]
  },
  {
    "term": "Workload Identity Federation",
    "def": "A keyless mechanism allowing workloads to exchange OIDC identity tokens for temporary cloud credentials.",
    "course": "secrets-identity",
    "section": "service-federation",
    "tags": [
      "oidc",
      "federation"
    ]
  },
  {
    "term": "TruffleHog",
    "def": "An open-source secret scanner that analyzes deep git history and verifies discovered keys against live provider APIs.",
    "course": "secrets-identity",
    "section": "scanning",
    "tags": [
      "tools",
      "scanning"
    ]
  },
  {
    "term": "Gitleaks",
    "def": "A fast, lightweight tool designed to scan git repositories and staged diffs in local pre-commit hooks.",
    "course": "secrets-identity",
    "section": "scanning",
    "tags": [
      "tools",
      "hooks"
    ]
  },
  {
    "term": "Zero-Trust Secret Architecture",
    "def": "A security paradigm eliminating static keys in favor of keyless OIDC federation, vaults, and least privilege.",
    "course": "secrets-identity",
    "section": "scanning",
    "tags": [
      "architecture",
      "zerotrust"
    ]
  },
  {
    "term": "Prompt Injection",
    "def": "An attack where untrusted user input alters an LLM's instructions, taking control of model execution.",
    "course": "prompt-injection",
    "section": "injection-types",
    "tags": [
      "security",
      "injection"
    ]
  },
  {
    "term": "Indirect Prompt Injection",
    "def": "Embedding adversarial instructions inside third-party data (web pages, PDFs, emails) that an AI reads.",
    "course": "prompt-injection",
    "section": "injection-types",
    "tags": [
      "vectors",
      "indirect"
    ]
  },
  {
    "term": "Markdown Image Exfiltration",
    "def": "Trick a model into rendering image tags that transmit private data in URL query strings to an attacker's server.",
    "course": "prompt-injection",
    "section": "injection-types",
    "tags": [
      "exfiltration",
      "markdown"
    ]
  },
  {
    "term": "Prompt Leaking",
    "def": "Coaxing an AI into verbatim regurgitating its confidential system prompt and proprietary instructions.",
    "course": "prompt-injection",
    "section": "extraction-delimiters",
    "tags": [
      "attacks",
      "leaking"
    ]
  },
  {
    "term": "Nonce Delimiters",
    "def": "Dynamic, unguessable random boundary tags () that make tag-breakout prompt injection impossible.",
    "course": "prompt-injection",
    "section": "extraction-delimiters",
    "tags": [
      "defense",
      "delimiters"
    ]
  },
  {
    "term": "Tag Breakout",
    "def": "An attack where the user submits a closing tag () to escape data boundaries and inject system commands.",
    "course": "prompt-injection",
    "section": "extraction-delimiters",
    "tags": [
      "attacks",
      "breakout"
    ]
  },
  {
    "term": "Dual-LLM Architecture",
    "def": "Decoupling execution into an unprivileged toolless Reader for untrusted data, and a privileged Controller with tools.",
    "course": "prompt-injection",
    "section": "classifiers-architecture",
    "tags": [
      "architecture",
      "dualllm"
    ]
  },
  {
    "term": "Pre-Prompt Classifier",
    "def": "A fast specialized model (DeBERTa, Llama Guard) screening inputs at the perimeter for adversarial syntax.",
    "course": "prompt-injection",
    "section": "classifiers-architecture",
    "tags": [
      "defense",
      "classifiers"
    ]
  },
  {
    "term": "GCG Attack",
    "def": "Greedy Coordinate Gradient — an adversarial algorithm optimizing token suffixes to bypass model safety alignment.",
    "course": "prompt-injection",
    "section": "classifiers-architecture",
    "tags": [
      "research",
      "gcg"
    ]
  },
  {
    "term": "AI Red Teaming",
    "def": "Systematically simulating adversarial attacks and jailbreaks to discover AI application vulnerabilities.",
    "course": "prompt-injection",
    "section": "redteaming",
    "tags": [
      "operations",
      "redteam"
    ]
  },
  {
    "term": "PyRIT",
    "def": "Python Risk Identification Tool — Microsoft's open-source framework for automating AI security red teaming.",
    "course": "prompt-injection",
    "section": "redteaming",
    "tags": [
      "tools",
      "redteam"
    ]
  },
  {
    "term": "Garak",
    "def": "An open-source vulnerability scanner specifically probing LLMs for prompt injection, leakage, and jailbreaks.",
    "course": "prompt-injection",
    "section": "redteaming",
    "tags": [
      "tools",
      "scanners"
    ]
  },
  {
    "term": "Autonomous Blast Radius",
    "def": "The maximum potential real-world harm, data loss, or financial cost that can occur if an agent malfunctions.",
    "course": "ai-agent-security",
    "section": "blast-radius",
    "tags": [
      "agents",
      "risk"
    ]
  },
  {
    "term": "Tool Sandboxing",
    "def": "Isolating tool and code execution inside disposable, unprivileged containers with read-only filesystems.",
    "course": "ai-agent-security",
    "section": "blast-radius",
    "tags": [
      "sandboxing",
      "docker"
    ]
  },
  {
    "term": "gVisor",
    "def": "Google's open-source application kernel virtualizing Linux system calls in user space for container isolation.",
    "course": "ai-agent-security",
    "section": "blast-radius",
    "tags": [
      "tools",
      "sandboxing"
    ]
  },
  {
    "term": "Read-Only Database Role",
    "def": "A database account restricted strictly to SELECT operations, preventing write or delete mutations.",
    "course": "ai-agent-security",
    "section": "permissions-egress",
    "tags": [
      "databases",
      "permissions"
    ]
  },
  {
    "term": "Server-Side Request Forgery",
    "def": "An attack tricking an agent's web tool into fetching internal private IP addresses or cloud metadata (SSRF).",
    "course": "ai-agent-security",
    "section": "permissions-egress",
    "tags": [
      "network",
      "ssrf"
    ]
  },
  {
    "term": "Cloud Metadata IP",
    "def": "The link-local address 169.254.169.254 used by cloud instances to retrieve temporary IAM credentials.",
    "course": "ai-agent-security",
    "section": "permissions-egress",
    "tags": [
      "cloud",
      "metadata"
    ]
  },
  {
    "term": "Confirmation Gate",
    "def": "A security checkpoint pausing autonomous agent execution on high-risk actions until approved by a human.",
    "course": "ai-agent-security",
    "section": "gates-hijacking",
    "tags": [
      "governance",
      "human"
    ]
  },
  {
    "term": "Approval Fatigue",
    "def": "The phenomenon where excessive low-value confirmation prompts cause users to approve requests mindlessly.",
    "course": "ai-agent-security",
    "section": "gates-hijacking",
    "tags": [
      "ux",
      "security"
    ]
  },
  {
    "term": "Trajectory Hijacking",
    "def": "Corrupting an agent's ReAct loop via malicious instructions embedded in tool observations.",
    "course": "ai-agent-security",
    "section": "gates-hijacking",
    "tags": [
      "attacks",
      "trajectories"
    ]
  },
  {
    "term": "Goal Invariance Anchor",
    "def": "Re-injecting the immutable root user objective at the top of every turn prompt to resist hijacking.",
    "course": "ai-agent-security",
    "section": "auditing",
    "tags": [
      "defense",
      "prompts"
    ]
  },
  {
    "term": "WORM Storage",
    "def": "Write Once, Read Many storage ensuring audit logs cannot be altered, overwritten, or deleted.",
    "course": "ai-agent-security",
    "section": "auditing",
    "tags": [
      "compliance",
      "storage"
    ]
  },
  {
    "term": "Secure Agent Environment",
    "def": "A multi-layered architecture unifying sandboxes, read-only tools, egress proxies, and human gates.",
    "course": "ai-agent-security",
    "section": "auditing",
    "tags": [
      "architecture",
      "systems"
    ]
  },
  {
    "term": "Docker Container",
    "def": "A lightweight, standalone, executable package of software including code, runtime, system tools, and libraries.",
    "course": "docker-containers",
    "section": "containers-basics",
    "tags": [
      "containers",
      "docker"
    ]
  },
  {
    "term": "Linux Namespaces",
    "def": "Kernel features providing isolated workspace environments (process, network, mounts) for containers.",
    "course": "docker-containers",
    "section": "containers-basics",
    "tags": [
      "kernel",
      "isolation"
    ]
  },
  {
    "term": "OverlayFS",
    "def": "A Union File System that merges multiple read-only image layers with an active writable container layer.",
    "course": "docker-containers",
    "section": "containers-basics",
    "tags": [
      "filesystem",
      "layers"
    ]
  },
  {
    "term": "Multi-Stage Build",
    "def": "A Dockerfile pattern separating build-time compilers from the final lean runtime image to shrink size and CVEs.",
    "course": "docker-containers",
    "section": "dockerfiles",
    "tags": [
      "dockerfile",
      "builds"
    ]
  },
  {
    "term": "Non-Root Execution",
    "def": "Running container processes under an unprivileged user (UID 1000) rather than root to limit exploit blast radius.",
    "course": "docker-containers",
    "section": "dockerfiles",
    "tags": [
      "security",
      "hardening"
    ]
  },
  {
    "term": "Distroless",
    "def": "Minimal container images containing only the application and runtime, with zero shells, package managers, or OS tools.",
    "course": "docker-containers",
    "section": "dockerfiles",
    "tags": [
      "security",
      "distroless"
    ]
  },
  {
    "term": "User-Defined Bridge",
    "def": "A private internal virtual network providing automatic container DNS resolution by service name.",
    "course": "docker-containers",
    "section": "networking-storage",
    "tags": [
      "networking",
      "dns"
    ]
  },
  {
    "term": "Named Volume",
    "def": "A Docker-managed persistent storage pool decoupled from container lifecycles, ideal for production databases.",
    "course": "docker-containers",
    "section": "networking-storage",
    "tags": [
      "storage",
      "volumes"
    ]
  },
  {
    "term": "Bind Mount",
    "def": "Mounting a specific host computer directory directly into a container, ideal for local code hot-reloading.",
    "course": "docker-containers",
    "section": "networking-storage",
    "tags": [
      "storage",
      "mounts"
    ]
  },
  {
    "term": "Docker Compose",
    "def": "A declarative tool for defining and orchestrating multi-container application stacks via compose.yaml.",
    "course": "docker-containers",
    "section": "compose-scanning",
    "tags": [
      "orchestration",
      "compose"
    ]
  },
  {
    "term": "Trivy",
    "def": "A leading open-source security scanner detecting vulnerabilities (CVEs) and misconfigurations in container images.",
    "course": "docker-containers",
    "section": "compose-scanning",
    "tags": [
      "security",
      "trivy"
    ]
  },
  {
    "term": "Immutable Git SHA Tag",
    "def": "Tagging container images with the exact commit hash (e.g. :a849f2) to guarantee deterministic rollbacks.",
    "course": "docker-containers",
    "section": "compose-scanning",
    "tags": [
      "devops",
      "deploy"
    ]
  },
  {
    "term": "Continuous Delivery",
    "def": "A software engineering discipline where code changes are automatically prepared and safely released to production.",
    "course": "ci-cd",
    "section": "cd-foundations",
    "tags": [
      "cicd",
      "devops"
    ]
  },
  {
    "term": "Trunk-Based Development",
    "def": "A branching practice where developers merge short-lived branches into main daily to prevent merge conflicts.",
    "course": "ci-cd",
    "section": "cd-foundations",
    "tags": [
      "git",
      "branching"
    ]
  },
  {
    "term": "GitHub Actions",
    "def": "A cloud-native CI/CD automation platform orchestrating workflows, jobs, and steps triggered by repository events.",
    "course": "ci-cd",
    "section": "cd-foundations",
    "tags": [
      "tools",
      "actions"
    ]
  },
  {
    "term": "Quality Gate",
    "def": "A mandatory automated check (lint, type, test, scan) that must pass before code can be merged or deployed.",
    "course": "ci-cd",
    "section": "gates-testing",
    "tags": [
      "quality",
      "gates"
    ]
  },
  {
    "term": "Branch Protection Rule",
    "def": "Repository configuration blocking pull request merges until designated status checks pass and approvals are granted.",
    "course": "ci-cd",
    "section": "gates-testing",
    "tags": [
      "github",
      "governance"
    ]
  },
  {
    "term": "Matrix Build",
    "def": "A strategy duplicating a job across combinations of language versions and operating systems in parallel.",
    "course": "ci-cd",
    "section": "gates-testing",
    "tags": [
      "testing",
      "matrix"
    ]
  },
  {
    "term": "Dependency Caching",
    "def": "Reusing downloaded package caches based on lockfile hashes to slash pipeline duration from minutes to seconds.",
    "course": "ci-cd",
    "section": "optimization-deploy",
    "tags": [
      "performance",
      "caching"
    ]
  },
  {
    "term": "Blue-Green Deployment",
    "def": "Running two identical environments (Blue and Green) and switching router traffic instantly for zero-downtime rollouts.",
    "course": "ci-cd",
    "section": "optimization-deploy",
    "tags": [
      "deploy",
      "bluegreen"
    ]
  },
  {
    "term": "Canary Release",
    "def": "Incrementally routing a tiny percentage of live traffic to a new version to bound the blast radius of unexpected defects.",
    "course": "ci-cd",
    "section": "optimization-deploy",
    "tags": [
      "deploy",
      "canary"
    ]
  },
  {
    "term": "Infrastructure as Code",
    "def": "Provisioning and managing cloud infrastructure using declarative, version-controlled code files (Terraform).",
    "course": "ci-cd",
    "section": "iac-gitops",
    "tags": [
      "iac",
      "terraform"
    ]
  },
  {
    "term": "GitOps",
    "def": "A methodology using Git as the single source of truth for infrastructure, with operators (ArgoCD) enforcing state.",
    "course": "ci-cd",
    "section": "iac-gitops",
    "tags": [
      "gitops",
      "argocd"
    ]
  },
  {
    "term": "Configuration Drift",
    "def": "When live cloud infrastructure diverges from the declarative code definitions in version control.",
    "course": "ci-cd",
    "section": "iac-gitops",
    "tags": [
      "drift",
      "cloud"
    ]
  },
  {
    "term": "Shared Responsibility Model",
    "def": "A security model where the cloud provider secures the infrastructure, while the customer secures data and access.",
    "course": "cloud-architecture",
    "section": "cloud-foundations",
    "tags": [
      "cloud",
      "security"
    ]
  },
  {
    "term": "Virtual Private Cloud",
    "def": "A logically isolated virtual network dedicated to a cloud account (VPC) with custom IP addressing.",
    "course": "cloud-architecture",
    "section": "cloud-foundations",
    "tags": [
      "networking",
      "vpc"
    ]
  },
  {
    "term": "NAT Gateway",
    "def": "A managed service allowing private subnet instances to make outbound internet connections while blocking inbound access.",
    "course": "cloud-architecture",
    "section": "cloud-foundations",
    "tags": [
      "networking",
      "nat"
    ]
  },
  {
    "term": "Serverless Computing",
    "def": "A cloud execution model where the provider manages server infrastructure, scaling code dynamically from zero.",
    "course": "cloud-architecture",
    "section": "compute-storage",
    "tags": [
      "compute",
      "serverless"
    ]
  },
  {
    "term": "Amazon S3",
    "def": "An infinitely scalable, HTTP-accessible object storage service offering 11 nines of data durability.",
    "course": "cloud-architecture",
    "section": "compute-storage",
    "tags": [
      "storage",
      "s3"
    ]
  },
  {
    "term": "Amazon EBS",
    "def": "High-performance block storage volumes attached directly to single virtual machines for databases.",
    "course": "cloud-architecture",
    "section": "compute-storage",
    "tags": [
      "storage",
      "ebs"
    ]
  },
  {
    "term": "Service Control Policy",
    "def": "An organizational guardrail (SCP) in AWS restricting maximum permissions across member accounts.",
    "course": "cloud-architecture",
    "section": "iam-traffic",
    "tags": [
      "iam",
      "governance"
    ]
  },
  {
    "term": "Content Delivery Network",
    "def": "A globally distributed network of edge proxy servers caching content close to users (CDN).",
    "course": "cloud-architecture",
    "section": "iam-traffic",
    "tags": [
      "networking",
      "cdn"
    ]
  },
  {
    "term": "Application Load Balancer",
    "def": "A Layer 7 load balancer (ALB) inspecting HTTP/HTTPS headers and URLs to route requests to healthy compute pods.",
    "course": "cloud-architecture",
    "section": "iam-traffic",
    "tags": [
      "networking",
      "alb"
    ]
  },
  {
    "term": "RPO",
    "def": "Recovery Point Objective: the maximum acceptable backward time delta of lost data during an outage.",
    "course": "cloud-architecture",
    "section": "dr-resilience",
    "tags": [
      "dr",
      "metrics"
    ]
  },
  {
    "term": "RTO",
    "def": "Recovery Time Objective: the maximum acceptable duration of service downtime before restoration.",
    "course": "cloud-architecture",
    "section": "dr-resilience",
    "tags": [
      "dr",
      "metrics"
    ]
  },
  {
    "term": "Multi-AZ Deployment",
    "def": "Architecting systems redundantly across multiple physical Availability Zones for automated disaster survival.",
    "course": "cloud-architecture",
    "section": "dr-resilience",
    "tags": [
      "architecture",
      "resilience"
    ]
  },
  {
    "term": "Partial Failure",
    "def": "A condition in distributed computing where components fail independently while the system continues in an uncertain state.",
    "course": "distributed-systems",
    "section": "fallacies-cap",
    "tags": [
      "distributed",
      "failures"
    ]
  },
  {
    "term": "CAP Theorem",
    "def": "The mathematical proof that distributed stores must choose between Consistency and Availability during network Partitions.",
    "course": "distributed-systems",
    "section": "fallacies-cap",
    "tags": [
      "theory",
      "cap"
    ]
  },
  {
    "term": "PACELC Theorem",
    "def": "An extension of CAP modeling the trade-off between Latency and Consistency during normal non-partitioned operation.",
    "course": "distributed-systems",
    "section": "fallacies-cap",
    "tags": [
      "theory",
      "pacelc"
    ]
  },
  {
    "term": "Raft Consensus",
    "def": "A distributed consensus algorithm decomposing agreement into Leader Election, Log Replication, and Safety.",
    "course": "distributed-systems",
    "section": "consensus-partition",
    "tags": [
      "consensus",
      "raft"
    ]
  },
  {
    "term": "Split-Brain",
    "def": "A failure state where two competing nodes both declare themselves leader, accepting conflicting mutations.",
    "course": "distributed-systems",
    "section": "consensus-partition",
    "tags": [
      "failures",
      "splitbrain"
    ]
  },
  {
    "term": "Consistent Hashing",
    "def": "Mapping nodes and keys onto a circular ring to ensure adding/removing nodes relocates only K/N keys.",
    "course": "distributed-systems",
    "section": "consensus-partition",
    "tags": [
      "scaling",
      "hashing"
    ]
  },
  {
    "term": "Quorum (W + R > N)",
    "def": "The condition where read and write replica subsets overlap, guaranteeing reads observe the latest write.",
    "course": "distributed-systems",
    "section": "replication-tx",
    "tags": [
      "replication",
      "quorum"
    ]
  },
  {
    "term": "Saga Pattern",
    "def": "A sequence of local microservice transactions coordinated by events, using compensating transactions to undo failures.",
    "course": "distributed-systems",
    "section": "replication-tx",
    "tags": [
      "transactions",
      "sagas"
    ]
  },
  {
    "term": "Compensating Transaction",
    "def": "An explicit undo operation (like a refund) executed to reverse the business effects of an earlier step.",
    "course": "distributed-systems",
    "section": "replication-tx",
    "tags": [
      "transactions",
      "rollback"
    ]
  },
  {
    "term": "Clock Skew",
    "def": "The physical time drift between server quartz clocks that makes wall-clock timestamps unreliable for ordering.",
    "course": "distributed-systems",
    "section": "causality",
    "tags": [
      "time",
      "clocks"
    ]
  },
  {
    "term": "Vector Clock",
    "def": "An array of logical clocks tracking causality across distributed nodes to determine 'happened-before' relationships.",
    "course": "distributed-systems",
    "section": "causality",
    "tags": [
      "time",
      "causality"
    ]
  },
  {
    "term": "CRDT",
    "def": "Conflict-Free Replicated Data Type — data structures with commutative merge operations that converge deterministically.",
    "course": "distributed-systems",
    "section": "causality",
    "tags": [
      "crdt",
      "concurrency"
    ]
  },
  {
    "term": "System Design",
    "def": "The process of defining architecture, components, modules, interfaces, and data for a system to satisfy specified requirements.",
    "course": "system-design",
    "section": "framework-scale",
    "tags": [
      "design",
      "architecture"
    ]
  },
  {
    "term": "Back-of-the-Envelope Math",
    "def": "Rapid mathematical estimations of QPS, storage capacity, and bandwidth using foundational constants.",
    "course": "system-design",
    "section": "framework-scale",
    "tags": [
      "estimation",
      "math"
    ]
  },
  {
    "term": "Non-Functional Requirements",
    "def": "System operational qualities such as latency, availability, fault tolerance, consistency, and security.",
    "course": "system-design",
    "section": "framework-scale",
    "tags": [
      "requirements",
      "sla"
    ]
  },
  {
    "term": "Stateless Architecture",
    "def": "Designing application servers to hold zero session state in local memory, enabling horizontal scale-out.",
    "course": "system-design",
    "section": "infrastructure-storage",
    "tags": [
      "scaling",
      "stateless"
    ]
  },
  {
    "term": "Database Sharding",
    "def": "Partitioning a database horizontally across multiple physical servers using a high-cardinality shard key.",
    "course": "system-design",
    "section": "infrastructure-storage",
    "tags": [
      "databases",
      "sharding"
    ]
  },
  {
    "term": "Hot Shard",
    "def": "A single database partition overwhelmed by traffic due to an unevenly distributed shard key.",
    "course": "system-design",
    "section": "infrastructure-storage",
    "tags": [
      "databases",
      "pitfalls"
    ]
  },
  {
    "term": "Cache-Aside",
    "def": "A caching pattern querying cache first, lazily loading data from the database on miss, and evicting on write.",
    "course": "system-design",
    "section": "caching-messaging",
    "tags": [
      "caching",
      "patterns"
    ]
  },
  {
    "term": "Apache Kafka",
    "def": "A distributed, partitioned, append-only commit log platform optimized for high-throughput event streaming.",
    "course": "system-design",
    "section": "caching-messaging",
    "tags": [
      "messaging",
      "kafka"
    ]
  },
  {
    "term": "Bulkhead Pattern",
    "def": "Isolating thread and connection pools into discrete compartments so failure in one cannot sink the system.",
    "course": "system-design",
    "section": "caching-messaging",
    "tags": [
      "resilience",
      "patterns"
    ]
  },
  {
    "term": "Service Level Objective",
    "def": "A target reliability goal (e.g. 99.9% uptime) agreed upon by engineering and product teams (SLO).",
    "course": "system-design",
    "section": "sre-synthesis",
    "tags": [
      "sre",
      "metrics"
    ]
  },
  {
    "term": "Error Budget",
    "def": "The allowable margin of failure (100% - SLO) used to balance rapid feature deployment against stability.",
    "course": "system-design",
    "section": "sre-synthesis",
    "tags": [
      "sre",
      "governance"
    ]
  },
  {
    "term": "Planetary-Scale Architecture",
    "def": "A distributed system architecture combining global Anycast CDNs, multi-region replication, and zero-trust security.",
    "course": "system-design",
    "section": "sre-synthesis",
    "tags": [
      "architecture",
      "planetary"
    ]
  }
];

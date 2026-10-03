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
  { term: "Trade-off", def: "A choice that buys one quality at the cost of another — the core of design decisions.", course: "oop", section: "design", tags: ["design", "architecture"], concept: "design-tradeoffs" },

  /* ---------------- Variables, Types & Memory ---------------- */
  /* Names & values */
  { term: "Variable", def: "A name bound to a value, so the value can be referred to later.", course: "variables-types-memory", section: "names", tags: ["fundamentals", "python"] },
  { term: "Value", def: "The actual data a name refers to — a number, a string, a list, and so on.", course: "variables-types-memory", section: "names", tags: ["fundamentals", "python"] },
  { term: "Binding", def: "The association between a name and the value it currently refers to.", course: "variables-types-memory", section: "names", tags: ["fundamentals", "python"] },
  { term: "Assignment", def: "The statement that binds a name to a value, written with a single equals sign.", course: "variables-types-memory", section: "names", tags: ["fundamentals", "python"] },
  { term: "Rebinding", def: "Pointing an existing name at a different value, leaving the old value unchanged.", course: "variables-types-memory", section: "names", tags: ["fundamentals", "python"] },
  { term: "Expression", def: "A piece of code that produces a value, such as 2 + 3 or a function call.", course: "variables-types-memory", section: "names", tags: ["fundamentals", "python"] },

  /* Types */
  { term: "Type", def: "A set of rules describing which operations are valid for a value.", course: "variables-types-memory", section: "types", tags: ["types", "python"] },
  { term: "Type error", def: "An error raised when an operation is not valid for a value's type.", course: "variables-types-memory", section: "types", tags: ["types", "python"] },
  { term: "Integer", def: "A whole number with no fractional part, stored exactly.", course: "variables-types-memory", section: "types", tags: ["types", "python"] },
  { term: "Float", def: "A number with a fractional part, stored in binary and therefore approximate.", course: "variables-types-memory", section: "types", tags: ["types", "python"] },
  { term: "String", def: "A sequence of characters — text — that can never be changed after creation.", course: "variables-types-memory", section: "types", tags: ["types", "python"] },
  { term: "Boolean", def: "A value that is either True or False, usually produced by a comparison.", course: "variables-types-memory", section: "types", tags: ["types", "python"] },
  { term: "Mutable", def: "Able to be changed in place, so changes are visible through every name that refers to it.", course: "variables-types-memory", section: "types", tags: ["types", "memory"] },
  { term: "Immutable", def: "Unable to be changed after creation, which makes the value safe to share.", course: "variables-types-memory", section: "types", tags: ["types", "memory"] },
  { term: "Identity", def: "Which particular value a name refers to, as opposed to what its contents are.", course: "variables-types-memory", section: "types", tags: ["types", "memory"] },

  /* Memory */
  { term: "Reference", def: "A pointer from a name to the value it refers to; assignment copies the reference, not the value.", course: "variables-types-memory", section: "memory", tags: ["memory", "python"] },
  { term: "Aliasing", def: "Two or more names referring to the very same value, so changes are shared.", course: "variables-types-memory", section: "memory", tags: ["memory", "python"] },
  { term: "Object", def: "A value that lives on the heap and is referred to by one or more names.", course: "variables-types-memory", section: "memory", tags: ["memory", "python"] },
  { term: "Stack", def: "The fast, ordered region of memory that holds call frames and the names inside them.", course: "variables-types-memory", section: "memory", tags: ["memory", "python"] },
  { term: "Heap", def: "The large, flexible region of memory where objects themselves live.", course: "variables-types-memory", section: "memory", tags: ["memory", "python"] },
  { term: "Frame", def: "One function call's workspace, pushed onto the stack on entry and popped on return.", course: "variables-types-memory", section: "memory", tags: ["memory", "python"] },
  { term: "Garbage collection", def: "Reclaiming the memory of objects that can no longer be reached by any reference.", course: "variables-types-memory", section: "memory", tags: ["memory", "python"] },
  { term: "Reference count", def: "The number of references pointing at an object; when it reaches zero the object is freed.", course: "variables-types-memory", section: "memory", tags: ["memory", "python"] },
  { term: "Memory leak", def: "Memory that stays reachable but is no longer useful, so it can never be reclaimed.", course: "variables-types-memory", section: "memory", tags: ["memory", "python"] },

  /* Putting it together */
  { term: "Shallow copy", def: "A copy that duplicates the outer container but shares the items inside it.", course: "variables-types-memory", section: "together", tags: ["memory", "python"] },
  { term: "Deep copy", def: "A copy that duplicates the container and everything inside it, recursively.", course: "variables-types-memory", section: "together", tags: ["memory", "python"] },
  { term: "Pass by reference", def: "Passing a value to a function by sharing its reference, so mutations are visible to the caller.", course: "variables-types-memory", section: "together", tags: ["memory", "python"] },
  { term: "Naming convention", def: "An agreed style for names, such as lowercase_with_underscores for variables.", course: "variables-types-memory", section: "together", tags: ["craft", "python"] },
  { term: "Constant", def: "A name written in capitals that signals a promise not to rebind it.", course: "variables-types-memory", section: "together", tags: ["craft", "python"] },
  { term: "Shadowing", def: "When a name in an inner scope hides a name with the same spelling in an outer scope.", course: "variables-types-memory", section: "together", tags: ["craft", "python"] },

  /* ---------------- Control Flow & Logic ---------------- */
  /* Booleans */
  { term: "Boolean", def: "A value that is either True or False, usually produced by a comparison.", course: "control-flow-logic", section: "booleans", tags: ["logic", "python"] },
  { term: "Truthiness", def: "Whether a value counts as true when used where a boolean is expected.", course: "control-flow-logic", section: "booleans", tags: ["logic", "python"] },
  { term: "Falsy", def: "A value that counts as false — zero, empty text, empty containers, and None.", course: "control-flow-logic", section: "booleans", tags: ["logic", "python"] },
  { term: "Comparison operator", def: "An operator such as < or == that compares two values and produces a boolean.", course: "control-flow-logic", section: "booleans", tags: ["logic", "python"] },
  { term: "Equality", def: "Whether two values have the same contents, tested with the == operator.", course: "control-flow-logic", section: "booleans", tags: ["logic", "python"] },
  { term: "Chained comparison", def: "Writing 0 <= x < 10 to test a value against two bounds at once.", course: "control-flow-logic", section: "booleans", tags: ["logic", "python"] },

  /* Logic */
  { term: "Logical operator", def: "An operator that combines boolean values: and, or and not.", course: "control-flow-logic", section: "logic", tags: ["logic", "python"] },
  { term: "and", def: "A logical operator that is true only when both of its operands are true.", course: "control-flow-logic", section: "logic", tags: ["logic", "python"] },
  { term: "or", def: "A logical operator that is true when at least one of its operands is true.", course: "control-flow-logic", section: "logic", tags: ["logic", "python"] },
  { term: "not", def: "A logical operator that flips a boolean, turning true into false and back.", course: "control-flow-logic", section: "logic", tags: ["logic", "python"] },
  { term: "Truth table", def: "A table listing every combination of inputs and the result for each.", course: "control-flow-logic", section: "logic", tags: ["logic", "python"] },
  { term: "De Morgan's laws", def: "Rules for pushing not inside brackets by swapping and with or.", course: "control-flow-logic", section: "logic", tags: ["logic", "python"] },
  { term: "Short-circuit evaluation", def: "Stopping a boolean expression as soon as the answer is already known.", course: "control-flow-logic", section: "logic", tags: ["logic", "python"] },
  { term: "Guard clause", def: "A condition placed first so later checks are only reached when it is safe.", course: "control-flow-logic", section: "logic", tags: ["logic", "python"] },
  { term: "Operator precedence", def: "The order in which operators are applied when an expression has no brackets.", course: "control-flow-logic", section: "logic", tags: ["logic", "python"] },

  /* Branching */
  { term: "Condition", def: "An expression a branch tests to decide whether its block should run.", course: "control-flow-logic", section: "branching", tags: ["control-flow", "python"] },
  { term: "if statement", def: "A statement that runs its block only when its condition is true.", course: "control-flow-logic", section: "branching", tags: ["control-flow", "python"] },
  { term: "Block", def: "A group of statements that run together, marked by indentation in Python.", course: "control-flow-logic", section: "branching", tags: ["control-flow", "python"] },
  { term: "Indentation", def: "The leading whitespace that defines which statements belong to a block.", course: "control-flow-logic", section: "branching", tags: ["control-flow", "python"] },
  { term: "else clause", def: "The block that runs when the matching if condition was false.", course: "control-flow-logic", section: "branching", tags: ["control-flow", "python"] },
  { term: "elif clause", def: "An extra condition tested only when every earlier condition was false.", course: "control-flow-logic", section: "branching", tags: ["control-flow", "python"] },
  { term: "Branch", def: "One possible path through a decision, taken when its condition matches.", course: "control-flow-logic", section: "branching", tags: ["control-flow", "python"] },
  { term: "Nested condition", def: "A condition written inside the block of another condition.", course: "control-flow-logic", section: "branching", tags: ["control-flow", "python"] },

  /* Loops */
  { term: "Loop", def: "A statement that repeats a block of code more than once.", course: "control-flow-logic", section: "loops", tags: ["control-flow", "python"] },
  { term: "while loop", def: "A loop that repeats while its condition stays true, re-checking before each pass.", course: "control-flow-logic", section: "loops", tags: ["control-flow", "python"] },
  { term: "Infinite loop", def: "A loop whose condition never becomes false, so it never finishes.", course: "control-flow-logic", section: "loops", tags: ["control-flow", "python"] },
  { term: "Loop variable", def: "The name rebound to each item in turn as a for loop walks a collection.", course: "control-flow-logic", section: "loops", tags: ["control-flow", "python"] },
  { term: "Iterable", def: "Any value that can hand out its items one at a time, such as a list or string.", course: "control-flow-logic", section: "loops", tags: ["control-flow", "python"] },
  { term: "range", def: "A built-in that produces a sequence of numbers, excluding its stop value.", course: "control-flow-logic", section: "loops", tags: ["control-flow", "python"] },
  { term: "Accumulator", def: "A variable updated inside a loop to build up a result across passes.", course: "control-flow-logic", section: "loops", tags: ["control-flow", "python"] },
  { term: "break", def: "A statement that ends the nearest enclosing loop immediately.", course: "control-flow-logic", section: "loops", tags: ["control-flow", "python"] },
  { term: "continue", def: "A statement that abandons the current pass and moves to the next item.", course: "control-flow-logic", section: "loops", tags: ["control-flow", "python"] },
  { term: "Loop else", def: "A block after a loop that runs only if the loop finished without a break.", course: "control-flow-logic", section: "loops", tags: ["control-flow", "python"] },

  /* Putting it together */
  { term: "Control flow", def: "The order in which a program's statements actually run, including branches and loops.", course: "control-flow-logic", section: "together", tags: ["control-flow", "design"] },
  { term: "Nesting depth", def: "How many levels of branches and loops you are currently inside.", course: "control-flow-logic", section: "together", tags: ["control-flow", "design"] },
  { term: "Early exit", def: "Handling failure cases first and returning, so the main path stays flat.", course: "control-flow-logic", section: "together", tags: ["control-flow", "design"] },
  { term: "Sentinel value", def: "A special value that signals a loop to stop, such as -1 for end of input.", course: "control-flow-logic", section: "together", tags: ["control-flow", "design"] },
  { term: "State machine", def: "A program whose behaviour depends on its current state and the events it receives.", course: "control-flow-logic", section: "together", tags: ["control-flow", "design"] },

  /* Functions & Modular Thinking — Defining */
  { term: "Function", def: "A named block of work that runs only when it is called.", course: "functions-modular-thinking", section: "defining", tags: ["functions", "python"] },
  { term: "def", def: "The keyword that creates a function and binds it to a name.", course: "functions-modular-thinking", section: "defining", tags: ["functions", "python"] },
  { term: "Function body", def: "The indented block of statements that runs when the function is called.", course: "functions-modular-thinking", section: "defining", tags: ["functions", "python"] },
  { term: "Function name", def: "The identifier a definition binds, used later to call the function.", course: "functions-modular-thinking", section: "defining", tags: ["functions", "python"] },
  { term: "Call", def: "Writing a function's name with parentheses to run its body.", course: "functions-modular-thinking", section: "defining", tags: ["functions", "python"] },
  { term: "Call site", def: "The place in the code where a function is actually called.", course: "functions-modular-thinking", section: "defining", tags: ["functions", "python"] },
  { term: "Definition vs call", def: "A definition creates the function; a call runs it — they are different acts.", course: "functions-modular-thinking", section: "defining", tags: ["functions", "python"] },

  /* Functions & Modular Thinking — Passing */
  { term: "Parameter", def: "A name in the definition that receives a value when the function is called.", course: "functions-modular-thinking", section: "passing", tags: ["functions", "python"] },
  { term: "Argument", def: "The actual value supplied at the call site for a parameter.", course: "functions-modular-thinking", section: "passing", tags: ["functions", "python"] },
  { term: "Positional argument", def: "An argument matched to a parameter by its position in the call.", course: "functions-modular-thinking", section: "passing", tags: ["functions", "python"] },
  { term: "Keyword argument", def: "An argument matched to a parameter by writing its name in the call.", course: "functions-modular-thinking", section: "passing", tags: ["functions", "python"] },
  { term: "Default value", def: "A value used for a parameter when the caller leaves that argument out.", course: "functions-modular-thinking", section: "passing", tags: ["functions", "python"] },
  { term: "Optional parameter", def: "A parameter with a default, which the caller may omit entirely.", course: "functions-modular-thinking", section: "passing", tags: ["functions", "python"] },
  { term: "Mutable default trap", def: "A list or dict default is created once, so every call shares the same object.", course: "functions-modular-thinking", section: "passing", tags: ["functions", "python"] },

  /* Functions & Modular Thinking — Returning */
  { term: "return", def: "The statement that ends a function and hands a value back to the call.", course: "functions-modular-thinking", section: "returning", tags: ["functions", "python"] },
  { term: "Return value", def: "The value a call evaluates to, handed back by the return statement.", course: "functions-modular-thinking", section: "returning", tags: ["functions", "python"] },
  { term: "print vs return", def: "print shows a value to a human; return hands it to the program.", course: "functions-modular-thinking", section: "returning", tags: ["functions", "python"] },
  { term: "Early return", def: "Returning as soon as the answer is known, leaving the rest of the body unrun.", course: "functions-modular-thinking", section: "returning", tags: ["functions", "python"] },
  { term: "None", def: "Python's value for no value, handed back when a function returns nothing.", course: "functions-modular-thinking", section: "returning", tags: ["functions", "python"] },
  { term: "Implicit None", def: "The None a function returns when its body finishes without any return.", course: "functions-modular-thinking", section: "returning", tags: ["functions", "python"] },

  /* Functions & Modular Thinking — Scope & the stack */
  { term: "Call stack", def: "The list of calls that are still running, newest call on top.", course: "functions-modular-thinking", section: "scope", tags: ["functions", "debugging"] },
  { term: "Frame", def: "The record of one active call: its parameters, locals and current line.", course: "functions-modular-thinking", section: "scope", tags: ["functions", "debugging"] },
  { term: "Traceback", def: "The stack of frames printed when an error escapes, read from the bottom up.", course: "functions-modular-thinking", section: "scope", tags: ["functions", "debugging"] },
  { term: "Scope", def: "The region of a program where a particular name can be seen and used.", course: "functions-modular-thinking", section: "scope", tags: ["functions", "python"] },
  { term: "Local variable", def: "A name assigned inside a function, visible only during that call.", course: "functions-modular-thinking", section: "scope", tags: ["functions", "python"] },
  { term: "Global variable", def: "A name assigned at the top level of a file, visible throughout the module.", course: "functions-modular-thinking", section: "scope", tags: ["functions", "python"] },
  { term: "Shadowing", def: "A local name hiding a global name that has the same spelling.", course: "functions-modular-thinking", section: "scope", tags: ["functions", "python"] },

  /* Functions & Modular Thinking — Modular thinking */
  { term: "Contract", def: "What a function needs as input and what it gives back as output.", course: "functions-modular-thinking", section: "modular", tags: ["functions", "design"] },
  { term: "Docstring", def: "A string on the first line of a body that says what the function does.", course: "functions-modular-thinking", section: "modular", tags: ["functions", "python"] },
  { term: "Type hint", def: "A note in the signature giving the expected types in and out.", course: "functions-modular-thinking", section: "modular", tags: ["functions", "python"] },
  { term: "Pure function", def: "A function whose result depends only on its arguments, with no side effects.", course: "functions-modular-thinking", section: "modular", tags: ["functions", "design"] },
  { term: "Side effect", def: "A change a function makes outside itself, such as printing or mutating state.", course: "functions-modular-thinking", section: "modular", tags: ["functions", "design"] },
  { term: "Single responsibility", def: "The rule that each function should do exactly one job.", course: "functions-modular-thinking", section: "modular", tags: ["functions", "design"] },
  { term: "Decomposition", def: "Breaking a problem into smaller pieces that can each be named and solved.", course: "functions-modular-thinking", section: "modular", tags: ["functions", "design"] },
  { term: "Refactoring", def: "Changing the structure of code without changing what it does.", course: "functions-modular-thinking", section: "modular", tags: ["functions", "design"] },

  /* Procedural Programming — Steps */
  { term: "Procedural programming", def: "Organising a program as a sequence of named steps that run in order.", course: "procedural-programming", section: "steps", tags: ["procedural", "design"] },
  { term: "Procedure", def: "A named block of steps that can be called by name from elsewhere.", course: "procedural-programming", section: "steps", tags: ["procedural", "python"] },
  { term: "Sequence", def: "Statements that run one after another, top to bottom, in the order written.", course: "procedural-programming", section: "steps", tags: ["procedural", "python"] },
  { term: "Top-level code", def: "Statements written outside any procedure, which run when the file runs.", course: "procedural-programming", section: "steps", tags: ["procedural", "python"] },
  { term: "Function definition", def: "The def statement that creates a procedure and gives it a name.", course: "procedural-programming", section: "steps", tags: ["procedural", "python"] },
  { term: "Function call", def: "Writing a procedure's name with parentheses to run its body.", course: "procedural-programming", section: "steps", tags: ["procedural", "python"] },
  { term: "Body", def: "The indented block of statements that runs when a procedure is called.", course: "procedural-programming", section: "steps", tags: ["procedural", "python"] },
  { term: "Docstring", def: "A string on the first line of a body that says what the procedure is for.", course: "procedural-programming", section: "steps", tags: ["procedural", "python"] },

  /* Procedural Programming — Data */
  { term: "Parameter", def: "A name in a procedure's definition that receives a value when it is called.", course: "procedural-programming", section: "data", tags: ["procedural", "python"] },
  { term: "Argument", def: "The actual value passed to a procedure at the call site.", course: "procedural-programming", section: "data", tags: ["procedural", "python"] },
  { term: "Default value", def: "A value a parameter falls back to when the caller omits that argument.", course: "procedural-programming", section: "data", tags: ["procedural", "python"] },
  { term: "Keyword argument", def: "An argument passed by name, so its position in the call no longer matters.", course: "procedural-programming", section: "data", tags: ["procedural", "python"] },
  { term: "Return value", def: "The value a procedure hands back to whoever called it.", course: "procedural-programming", section: "data", tags: ["procedural", "python"] },
  { term: "return statement", def: "The statement that ends a procedure and sends a value back to the caller.", course: "procedural-programming", section: "data", tags: ["procedural", "python"] },
  { term: "None", def: "Python's value for nothing, returned by any procedure with no return statement.", course: "procedural-programming", section: "data", tags: ["procedural", "python"] },
  { term: "Side effect", def: "Anything a procedure does beyond returning a value, such as printing or writing state.", course: "procedural-programming", section: "data", tags: ["procedural", "design"] },

  /* Procedural Programming — Structure */
  { term: "Single responsibility", def: "The rule that a procedure should do exactly one job, so its name can describe it.", course: "procedural-programming", section: "structure", tags: ["procedural", "design"] },
  { term: "Refactoring", def: "Changing the structure of code without changing what it does.", course: "procedural-programming", section: "structure", tags: ["procedural", "design"] },
  { term: "Extract function", def: "Pulling a block of statements out into a new named procedure.", course: "procedural-programming", section: "structure", tags: ["procedural", "design"] },
  { term: "Cohesion", def: "How closely the statements inside a procedure belong together around one job.", course: "procedural-programming", section: "structure", tags: ["procedural", "design"] },
  { term: "Global variable", def: "A variable defined at the top level of a file, outside any procedure.", course: "procedural-programming", section: "structure", tags: ["procedural", "python"] },
  { term: "Global state", def: "Data shared by every procedure in a file through a top-level variable.", course: "procedural-programming", section: "structure", tags: ["procedural", "design"] },
  { term: "global statement", def: "The statement that lets a procedure assign to a variable defined at the top level.", course: "procedural-programming", section: "structure", tags: ["procedural", "python"] },
  { term: "Hidden dependency", def: "A real dependency a procedure has that is not visible in its parameter list.", course: "procedural-programming", section: "structure", tags: ["procedural", "design"] },

  /* Procedural Programming — Modules */
  { term: "Module", def: "A Python file, named after the file without its extension, that holds procedures.", course: "procedural-programming", section: "modules", tags: ["procedural", "python"] },
  { term: "Namespace", def: "The place a module's names live, which keeps them separate from other modules.", course: "procedural-programming", section: "modules", tags: ["procedural", "python"] },
  { term: "import statement", def: "The statement that makes another module's names available in the current file.", course: "procedural-programming", section: "modules", tags: ["procedural", "python"] },
  { term: "Main guard", def: "The if __name__ == \"__main__\" check that runs code only when the file is run directly.", course: "procedural-programming", section: "modules", tags: ["procedural", "python"] },
  { term: "from ... import", def: "An import form that brings one name in directly, without the module prefix.", course: "procedural-programming", section: "modules", tags: ["procedural", "python"] },
  { term: "Alias", def: "A new name given to a module on import, as in import prices as pr.", course: "procedural-programming", section: "modules", tags: ["procedural", "python"] },
  { term: "Circular import", def: "When two modules import each other, so neither finishes loading.", course: "procedural-programming", section: "modules", tags: ["procedural", "python"] },
  { term: "Reusability", def: "The property of a step being callable from many places instead of copied.", course: "procedural-programming", section: "modules", tags: ["procedural", "design"] },

  /* Procedural Programming — Putting it together */
  { term: "Coupling", def: "How much one procedure depends on the exact shape of another's data.", course: "procedural-programming", section: "together", tags: ["procedural", "design"] },
  { term: "Data clump", def: "A group of values that always travel together but have no name of their own.", course: "procedural-programming", section: "together", tags: ["procedural", "design"] },
  { term: "Passing the same data around", def: "The smell of repeating the same parameters through many procedures.", course: "procedural-programming", section: "together", tags: ["procedural", "design"] },
  { term: "Procedural limit", def: "The point where data and the behaviour belonging to it live in different places.", course: "procedural-programming", section: "together", tags: ["procedural", "design"] },
  { term: "Program shape", def: "The overall form of a program: a short entry point above a set of named steps.", course: "procedural-programming", section: "together", tags: ["procedural", "design"] },
  { term: "Entry point", def: "Where a program starts, usually the main guard or the main procedure it calls.", course: "procedural-programming", section: "together", tags: ["procedural", "python"] },
  { term: "Helper function", def: "A named step that the entry point uses to do part of its job.", course: "procedural-programming", section: "together", tags: ["procedural", "python"] },
  { term: "Pipeline", def: "A chain of steps where each takes the previous step's output as its input.", course: "procedural-programming", section: "together", tags: ["procedural", "design"] },

  /* ---------------- Data Structures ---------------- */
  /* How data is laid out */
  { term: "Data structure", def: "A way of arranging data in memory so that chosen operations are cheap.", course: "data-structures", section: "layout", tags: ["cs", "data-structures"] },
  { term: "Array", def: "A block of contiguous slots, each reachable by a numeric index.", course: "data-structures", section: "layout", tags: ["cs", "data-structures"] },
  { term: "Index", def: "The position of an item in an array, counted from zero.", course: "data-structures", section: "layout", tags: ["cs", "data-structures"] },
  { term: "Linked list", def: "A chain of nodes where each one points to the next, scattered in memory.", course: "data-structures", section: "layout", tags: ["cs", "data-structures"] },
  { term: "Node", def: "A small container holding a value plus one or more links to other nodes.", course: "data-structures", section: "layout", tags: ["cs", "data-structures"] },
  { term: "Pointer", def: "A reference from one node to another, used to walk a linked structure.", course: "data-structures", section: "layout", tags: ["cs", "data-structures"] },

  /* Ordered access */
  { term: "Stack", def: "A structure that adds and removes items at one end only, the top.", course: "data-structures", section: "ordered", tags: ["cs", "data-structures"] },
  { term: "LIFO", def: "Last In, First Out — the rule a stack obeys when removing items.", course: "data-structures", section: "ordered", tags: ["cs", "data-structures"] },
  { term: "Push", def: "Adding an item to the top of a stack.", course: "data-structures", section: "ordered", tags: ["cs", "data-structures"] },
  { term: "Pop", def: "Removing and returning the item at the top of a stack.", course: "data-structures", section: "ordered", tags: ["cs", "data-structures"] },
  { term: "Queue", def: "A structure that adds at the back and removes from the front.", course: "data-structures", section: "ordered", tags: ["cs", "data-structures"] },
  { term: "FIFO", def: "First In, First Out — the rule a queue obeys when removing items.", course: "data-structures", section: "ordered", tags: ["cs", "data-structures"] },
  { term: "Enqueue", def: "Adding an item to the back of a queue.", course: "data-structures", section: "ordered", tags: ["cs", "data-structures"] },
  { term: "Dequeue", def: "Removing and returning the item at the front of a queue.", course: "data-structures", section: "ordered", tags: ["cs", "data-structures"] },

  /* Keyed lookup */
  { term: "Hash table", def: "A structure that maps keys to slots using a hash function for fast lookup.", course: "data-structures", section: "keyed", tags: ["cs", "data-structures"] },
  { term: "Hash function", def: "A function that turns a key into an index in the underlying array.", course: "data-structures", section: "keyed", tags: ["cs", "data-structures"] },
  { term: "Collision", def: "When two different keys hash to the same slot in a hash table.", course: "data-structures", section: "keyed", tags: ["cs", "data-structures"] },
  { term: "Load factor", def: "The ratio of stored items to available slots, which triggers resizing.", course: "data-structures", section: "keyed", tags: ["cs", "data-structures"] },
  { term: "Dictionary", def: "Python's built-in hash table, written as key-value pairs in braces.", course: "data-structures", section: "keyed", tags: ["cs", "python"] },

  /* Hierarchy */
  { term: "Tree", def: "A branching structure of nodes with one root and no cycles.", course: "data-structures", section: "hierarchy", tags: ["cs", "data-structures"] },
  { term: "Root", def: "The single top node of a tree, the only one with no parent.", course: "data-structures", section: "hierarchy", tags: ["cs", "data-structures"] },
  { term: "Leaf", def: "A node in a tree that has no children.", course: "data-structures", section: "hierarchy", tags: ["cs", "data-structures"] },
  { term: "Binary tree", def: "A tree in which every node has at most two children.", course: "data-structures", section: "hierarchy", tags: ["cs", "data-structures"] },
  { term: "Binary search tree", def: "A binary tree keeping smaller values left and larger values right.", course: "data-structures", section: "hierarchy", tags: ["cs", "data-structures"] },
  { term: "Traversal", def: "Visiting every node of a tree in a defined order.", course: "data-structures", section: "hierarchy", tags: ["cs", "data-structures"] },

  /* Cost and choice */
  { term: "Big-O", def: "A notation describing how an operation's cost grows as the data grows.", course: "data-structures", section: "cost", tags: ["cs", "complexity"] },
  { term: "Amortised cost", def: "The average cost of an operation over many calls, including rare expensive ones.", course: "data-structures", section: "cost", tags: ["cs", "complexity"] },
  { term: "Trade-off", def: "The exchange you accept when a structure buys one strength by giving up another.", course: "data-structures", section: "cost", tags: ["cs", "design"] },

  /* ---------------- Python Modules & Packages ---------------- */
  /* Imports */
  { term: "Module", def: "A single .py file whose top-level names can be imported by other files.", course: "python-modules-packages", section: "imports", tags: ["python", "modules"] },
  { term: "Import statement", def: "The statement that loads a module and binds its name in the current namespace.", course: "python-modules-packages", section: "imports", tags: ["python", "modules"] },
  { term: "from ... import ...", def: "An import form that binds selected names from a module directly into the current namespace.", course: "python-modules-packages", section: "imports", tags: ["python", "modules"] },
  { term: "Alias (as)", def: "A local name given to an imported module or symbol with the as keyword.", course: "python-modules-packages", section: "imports", tags: ["python", "modules"] },
  { term: "sys.path", def: "The list of directories Python searches, in order, when resolving an import.", course: "python-modules-packages", section: "imports", tags: ["python", "modules"] },
  { term: "Module cache (sys.modules)", def: "The dictionary of already-imported modules, so a module's code runs only once.", course: "python-modules-packages", section: "imports", tags: ["python", "modules"] },

  /* Packages */
  { term: "Package", def: "A directory of modules that can be imported as a single dotted name.", course: "python-modules-packages", section: "packages", tags: ["python", "packages"] },
  { term: "__init__.py", def: "The file that marks a directory as a package and runs when the package is imported.", course: "python-modules-packages", section: "packages", tags: ["python", "packages"] },
  { term: "Dotted path", def: "The dot-separated name that walks from a package down to a module or attribute.", course: "python-modules-packages", section: "packages", tags: ["python", "packages"] },
  { term: "Absolute import", def: "An import written from the project root, naming the full path to the module.", course: "python-modules-packages", section: "packages", tags: ["python", "packages"] },
  { term: "Relative import", def: "An import written with leading dots that resolves within the current package.", course: "python-modules-packages", section: "packages", tags: ["python", "packages"] },
  { term: "__name__", def: "The variable holding the name a module was loaded under — its own name, or __main__ when run.", course: "python-modules-packages", section: "packages", tags: ["python", "packages"] },
  { term: "__main__ guard", def: "The if __name__ == \"__main__\" check that runs code only when the file is executed directly.", course: "python-modules-packages", section: "packages", tags: ["python", "packages"] },

  /* Environments */
  { term: "Virtual environment", def: "A per-project directory holding its own installed packages, separate from the global interpreter.", course: "python-modules-packages", section: "environments", tags: ["python", "tooling"] },
  { term: "site-packages", def: "The directory inside an environment where pip installs third-party packages.", course: "python-modules-packages", section: "environments", tags: ["python", "tooling"] },
  { term: "pip", def: "Python's package installer, which fetches and installs distributions into the active environment.", course: "python-modules-packages", section: "environments", tags: ["python", "tooling"] },
  { term: "requirements.txt", def: "A plain text list of a project's dependencies, one per line, used to rebuild an environment.", course: "python-modules-packages", section: "environments", tags: ["python", "tooling"] },
  { term: "Version pin", def: "A requirement fixed to one exact version with ==, so installs are reproducible.", course: "python-modules-packages", section: "environments", tags: ["python", "tooling"] },

  /* Together */
  { term: "Circular import", def: "A cycle where two modules import each other, leaving one partially initialised.", course: "python-modules-packages", section: "together", tags: ["python", "debugging"] },
  { term: "Shadowing", def: "A local file whose name matches a library module, found first on sys.path and replacing it.", course: "python-modules-packages", section: "together", tags: ["python", "debugging"] },
  { term: "Star import", def: "The from module import * form that copies every public name and hides where each came from.", course: "python-modules-packages", section: "together", tags: ["python", "debugging"] },
  { term: "pyproject.toml", def: "The file declaring a project's name, version, dependencies and build backend.", course: "python-modules-packages", section: "together", tags: ["python", "packaging"] },
  { term: "Distribution", def: "A built, installable artifact — a wheel or sdist — produced from a source tree.", course: "python-modules-packages", section: "together", tags: ["python", "packaging"] },
  { term: "File", def: "A named sequence of bytes on disk that a program can open, read and write.", course: "python-files-json-data", section: "files", tags: ["python", "files"] },
  { term: "File handle", def: "The object returned by open() that represents an open connection to a file.", course: "python-files-json-data", section: "files", tags: ["python", "files"] },
  { term: "Mode", def: "The short string passed to open() that decides whether you read, write or append.", course: "python-files-json-data", section: "files", tags: ["python", "files"] },
  { term: "Encoding", def: "The rule that maps bytes to characters, named explicitly so behaviour is identical everywhere.", course: "python-files-json-data", section: "files", tags: ["python", "files"] },
  { term: "with statement", def: "The block form that guarantees cleanup runs when the block exits, even after an exception.", course: "python-files-json-data", section: "files", tags: ["python", "files"] },
  { term: "Context manager", def: "An object defining __enter__ and __exit__ so it can be used with the with statement.", course: "python-files-json-data", section: "files", tags: ["python", "files"] },
  { term: "Path", def: "A pathlib object representing a filesystem location, joined with the / operator.", course: "python-files-json-data", section: "files", tags: ["python", "files"] },
  { term: "pathlib", def: "The standard library module providing the Path class for filesystem paths.", course: "python-files-json-data", section: "files", tags: ["python", "files"] },
  { term: "JSON", def: "A strict text format with six value types, used to move data between systems.", course: "python-files-json-data", section: "formats", tags: ["python", "data"] },
  { term: "Serialisation", def: "Turning an in-memory object into a storable or transmittable representation such as JSON text.", course: "python-files-json-data", section: "formats", tags: ["python", "data"] },
  { term: "Deserialisation", def: "Turning stored or transmitted text back into in-memory objects.", course: "python-files-json-data", section: "formats", tags: ["python", "data"] },
  { term: "json.dumps / json.loads", def: "The pair that serialises to and deserialises from a string held in memory.", course: "python-files-json-data", section: "formats", tags: ["python", "data"] },
  { term: "json.dump / json.load", def: "The pair that serialises to and deserialises from an open file object.", course: "python-files-json-data", section: "formats", tags: ["python", "data"] },
  { term: "CSV", def: "A tabular text format of rows and columns where every value is stored as a string.", course: "python-files-json-data", section: "formats", tags: ["python", "data"] },
  { term: "csv module", def: "The standard library module that parses and writes CSV correctly, including quoting.", course: "python-files-json-data", section: "formats", tags: ["python", "data"] },
  { term: "DictReader", def: "A csv reader that yields one dictionary per row, keyed by the header names.", course: "python-files-json-data", section: "formats", tags: ["python", "data"] },
  { term: "Format conversion", def: "Reshaping the same data between representations such as CSV rows and JSON objects.", course: "python-files-json-data", section: "together", tags: ["python", "data"] },
  { term: "Round trip", def: "Writing data out and reading it back to confirm nothing was lost or changed.", course: "python-files-json-data", section: "together", tags: ["python", "data"] },
  { term: "Malformed data", def: "Input that does not follow its format's rules and therefore fails to parse.", course: "python-files-json-data", section: "together", tags: ["python", "data"] },
  { term: "Validation", def: "Checking that parsed data has the keys, types and ranges your program requires.", course: "python-files-json-data", section: "together", tags: ["python", "data"] },
  { term: "Pipeline", def: "A program shaped as read, transform, write, with validation at the edges.", course: "python-files-json-data", section: "together", tags: ["python", "data"] },
  { term: "Idempotent", def: "A property of a pipeline where running it twice gives the same result as running it once.", course: "python-files-json-data", section: "together", tags: ["python", "data"] },
  { term: "Type hint", def: "An annotation that records the intended type of a variable, parameter or return value.", course: "python-type-hints", section: "annotations", tags: ["python", "types"] },
  { term: "Annotation", def: "The syntax that attaches a type expression to a name, written after a colon.", course: "python-type-hints", section: "annotations", tags: ["python", "types"] },
  { term: "Static checking", def: "Analysing code for type errors without running it, using the annotations as evidence.", course: "python-type-hints", section: "annotations", tags: ["python", "types"] },
  { term: "Gradual typing", def: "The property that lets annotated and unannotated code coexist in one program.", course: "python-type-hints", section: "annotations", tags: ["python", "types"] },
  { term: "Parameter annotation", def: "A type written after a parameter name, describing what the function accepts.", course: "python-type-hints", section: "annotations", tags: ["python", "types"] },
  { term: "Return annotation", def: "A type written after the arrow, describing what the function returns.", course: "python-type-hints", section: "annotations", tags: ["python", "types"] },
  { term: "Variable annotation", def: "A type written after a variable name, describing what it will hold.", course: "python-type-hints", section: "annotations", tags: ["python", "types"] },
  { term: "None return", def: "The annotation for a function that returns nothing useful, written as -> None.", course: "python-type-hints", section: "annotations", tags: ["python", "types"] },
  { term: "int / float / str / bool", def: "The four built-in scalar types used most often in annotations.", course: "python-type-hints", section: "annotations", tags: ["python", "types"] },
  { term: "Any", def: "The escape hatch type that disables checking for a value.", course: "python-type-hints", section: "annotations", tags: ["python", "types"] },
  { term: "object", def: "The type that accepts every value, useful when you truly mean anything.", course: "python-type-hints", section: "annotations", tags: ["python", "types"] },
  { term: "NoneType", def: "The type of None, written as None in annotations.", course: "python-type-hints", section: "annotations", tags: ["python", "types"] },
  { term: "Optional", def: "A shorthand meaning a value of this type or None.", course: "python-type-hints", section: "annotations", tags: ["python", "types"] },
  { term: "Union", def: "A type meaning any one of several listed types.", course: "python-type-hints", section: "annotations", tags: ["python", "types"] },
  { term: "Pipe syntax", def: "The modern X | Y form of a union, available from Python 3.10.", course: "python-type-hints", section: "annotations", tags: ["python", "types"] },
  { term: "Narrowing", def: "The checker's ability to refine a union to one member after a runtime check.", course: "python-type-hints", section: "annotations", tags: ["python", "types"] },
  { term: "Generic", def: "A type that takes other types as parameters, such as list[int].", course: "python-type-hints", section: "generics", tags: ["python", "types"] },
  { term: "Type parameter", def: "The type argument written inside brackets, such as the int in list[int].", course: "python-type-hints", section: "generics", tags: ["python", "types"] },
  { term: "list / dict / set / tuple", def: "The built-in collections, each annotated with the type of what it holds.", course: "python-type-hints", section: "generics", tags: ["python", "types"] },
  { term: "TypeVar", def: "A placeholder type used to express that two positions must share the same type.", course: "python-type-hints", section: "generics", tags: ["python", "types"] },
  { term: "Type alias", def: "A name given to a type expression so it can be reused and read clearly.", course: "python-type-hints", section: "generics", tags: ["python", "types"] },
  { term: "NewType", def: "A distinct type built from an existing one, so the checker will not confuse them.", course: "python-type-hints", section: "generics", tags: ["python", "types"] },
  { term: "Literal", def: "A type restricted to a fixed set of exact values.", course: "python-type-hints", section: "generics", tags: ["python", "types"] },
  { term: "TypedDict", def: "A dictionary type with a fixed set of named keys and value types.", course: "python-type-hints", section: "generics", tags: ["python", "types"] },
  { term: "Protocol", def: "A structural type describing the methods an object must have, without inheritance.", course: "python-type-hints", section: "generics", tags: ["python", "types"] },
  { term: "Callable", def: "The type of a function value, written with its parameter and return types.", course: "python-type-hints", section: "generics", tags: ["python", "types"] },
  { term: "Structural typing", def: "Matching types by the shape of their interface rather than by inheritance.", course: "python-type-hints", section: "generics", tags: ["python", "types"] },
  { term: "mypy", def: "The most widely used static type checker for Python.", course: "python-type-hints", section: "checking", tags: ["python", "tooling"] },
  { term: "Type error", def: "A mismatch between an annotation and how a value is actually used.", course: "python-type-hints", section: "checking", tags: ["python", "tooling"] },
  { term: "Strict mode", def: "A checker configuration that refuses to silently ignore unannotated code.", course: "python-type-hints", section: "checking", tags: ["python", "tooling"] },
  { term: "Type stub", def: "A .pyi file that declares types for code without changing the code itself.", course: "python-type-hints", section: "checking", tags: ["python", "tooling"] },
  { term: "__annotations__", def: "The dictionary holding a module or function's annotations at runtime.", course: "python-type-hints", section: "checking", tags: ["python", "types"] },
  { term: "get_type_hints", def: "The helper that resolves annotations, including forward references, at runtime.", course: "python-type-hints", section: "checking", tags: ["python", "types"] },
  { term: "Forward reference", def: "An annotation written as a string because the name is not defined yet.", course: "python-type-hints", section: "checking", tags: ["python", "types"] },
  { term: "from __future__ import annotations", def: "The import that makes all annotations lazy strings, avoiding most forward-reference problems.", course: "python-type-hints", section: "checking", tags: ["python", "types"] },
  { term: "Runtime validation", def: "Checking types while the program runs, using the annotations as data.", course: "python-type-hints", section: "together", tags: ["python", "types"] },
  { term: "Type coverage", def: "The proportion of a codebase that carries useful annotations.", course: "python-type-hints", section: "together", tags: ["python", "types"] },
  { term: "Incremental adoption", def: "Adding annotations to an existing codebase gradually, file by file.", course: "python-type-hints", section: "together", tags: ["python", "types"] }
];

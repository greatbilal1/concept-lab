/* ============================================================
   Python Fundamentals — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.

   Add a lesson by appending one entry here and creating the
   matching file in ./lessons/. Nothing else needs to change.
   (Or run: node tools/new-lesson.js python-fundamentals "<Lesson title>")

   Fields
     n     1-based lesson number (must be unique, in order)
     id    dash-case slug, matches the filename after the number
     file  path to the lesson, relative to THIS course folder
     title short title shown in nav and the map
     topic the grouping label used by the hub
     anim  legacy scene key (kept for the hub card art)
   ============================================================ */
window.TeachLessons = [
  { n: 1,  id: "running-your-first-program",        file: "lessons/0001-running-your-first-program.html",        title: "Running your first program",     topic: "Syntax & values", anim: "PyFirst" },
  { n: 2,  id: "names-and-values",                  file: "lessons/0002-names-and-values.html",                  title: "Names and values",               topic: "Syntax & values", anim: "PyNames" },
  { n: 3,  id: "the-core-types",                    file: "lessons/0003-the-core-types.html",                    title: "The core types",                 topic: "Types", anim: "PyTypes" },
  { n: 4,  id: "strings-and-f-strings",             file: "lessons/0004-strings-and-f-strings.html",             title: "Strings and f-strings",          topic: "Types", anim: "PyStrings" },
  { n: 5,  id: "lists-and-indexing",                file: "lessons/0005-lists-and-indexing.html",                title: "Lists and indexing",             topic: "Types", anim: "PyLists" },
  { n: 6,  id: "making-decisions",                  file: "lessons/0006-making-decisions.html",                  title: "Making decisions",               topic: "Control flow", anim: "PyIf" },
  { n: 7,  id: "loops-and-repetition",              file: "lessons/0007-loops-and-repetition.html",              title: "Loops and repetition",           topic: "Control flow", anim: "PyLoops" },
  { n: 8,  id: "defining-functions",                file: "lessons/0008-defining-functions.html",                title: "Defining functions",             topic: "Functions", anim: "PyFuncs" },
  { n: 9,  id: "scope-and-arguments",               file: "lessons/0009-scope-and-arguments.html",               title: "Scope and arguments",            topic: "Functions", anim: "PyScope" },
  { n: 10, id: "modules-and-the-standard-library",  file: "lessons/0010-modules-and-the-standard-library.html",  title: "Modules and the standard library", topic: "Modules & the standard library", anim: "PyModules" }
];

/* ============================================================
   Python Fundamentals — glossary
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
    id: "syntax", title: "Syntax &amp; values",
    terms: [
      { term: "Interpreter", def: "The program that reads your <code>.py</code> file and executes it line by line, top to bottom. Python ships with one called <code>python3</code>.", lesson: 1, tags: ["tools", "fundamentals"] },
      { term: "REPL", def: "Read–Eval–Print Loop — the interactive prompt you get by running <code>python3</code> with no file. It evaluates one expression at a time and shows the result.", lesson: 1, tags: ["tools", "fundamentals"] },
      { term: "Expression", def: "Any piece of code that produces a value, like <code>2 + 3</code> or <code>len(\"cat\")</code>. The interpreter evaluates it and hands back a result.", lesson: 1, tags: ["syntax", "fundamentals"] },
      { term: "Statement", def: "A complete instruction the interpreter carries out, such as an assignment or a <code>print</code> call. Statements do things; expressions produce values.", lesson: 1, tags: ["syntax", "fundamentals"] },
      { term: "print()", def: "The built-in function that writes its arguments to standard output. It is how a program shows you what it computed.", lesson: 1, tags: ["syntax", "output"] },
      { term: "Comment", def: "Text after a <code>#</code> that Python ignores. Comments explain intent to humans; they are not executed.", lesson: 1, tags: ["syntax", "style"] },
      { term: "Variable", def: "A name bound to a value. <code>score = 10</code> makes <code>score</code> refer to the integer <code>10</code> until you rebind it.", lesson: 2, tags: ["names", "fundamentals"] },
      { term: "Assignment", def: "The <code>=</code> statement that binds a name to a value. It is not a comparison — it stores the right-hand value under the left-hand name.", lesson: 2, tags: ["names", "syntax"] },
      { term: "Identifier", def: "A legal name for a variable, function or module: letters, digits and underscores, not starting with a digit, and case-sensitive.", lesson: 2, tags: ["names", "syntax"] },
      { term: "Rebinding", def: "Pointing an existing name at a different value. <code>x = 1</code> then <code>x = 2</code> leaves one name and two values, the second now current.", lesson: 2, tags: ["names", "fundamentals"] }
    ]
  },
  {
    id: "types", title: "Types",
    terms: [
      { term: "Type", def: "The kind of value something is — <code>int</code>, <code>float</code>, <code>str</code>, <code>bool</code>, <code>list</code>. The type decides what operations are legal.", lesson: 3, tags: ["types", "fundamentals"] },
      { term: "int", def: "An arbitrary-precision whole number. Python integers never overflow; they grow as large as memory allows.", lesson: 3, tags: ["types", "numbers"] },
      { term: "float", def: "A double-precision floating-point number, stored as IEEE-754 binary. It cannot represent most decimal fractions exactly.", lesson: 3, tags: ["types", "numbers"] },
      { term: "bool", def: "The type with exactly two values, <code>True</code> and <code>False</code>. It is a subtype of <code>int</code>, where <code>True == 1</code>.", lesson: 3, tags: ["types", "logic"] },
      { term: "None", def: "The single value of type <code>NoneType</code>, meaning \"no value here\". Functions that return nothing return <code>None</code>.", lesson: 3, tags: ["types", "fundamentals"] },
      { term: "type()", def: "The built-in that reports a value's type, e.g. <code>type(3.0)</code> is <code>&lt;class 'float'&gt;</code>. Your first debugging tool.", lesson: 3, tags: ["types", "tools"] },
      { term: "Type conversion", def: "Turning a value of one type into another with <code>int()</code>, <code>float()</code> or <code>str()</code>. It copies and reinterprets, it does not mutate.", lesson: 3, tags: ["types", "conversion"] },
      { term: "String", def: "An immutable sequence of Unicode characters, written between quotes. <code>\"cat\"</code> and <code>'cat'</code> are the same value.", lesson: 4, tags: ["types", "text"] },
      { term: "f-string", def: "A string prefixed with <code>f</code> whose <code>{…}</code> holes are replaced by the values of the expressions inside them.", lesson: 4, tags: ["types", "text"] },
      { term: "Index", def: "The position of an item in a sequence, counted from <code>0</code>. Negative indices count back from the end, so <code>-1</code> is the last item.", lesson: 5, tags: ["sequences", "fundamentals"] },
      { term: "Slice", def: "A sub-sequence taken with <code>[start:stop]</code>. The start is included and the stop is excluded, so <code>s[0:2]</code> gives two items.", lesson: 5, tags: ["sequences", "syntax"] },
      { term: "List", def: "An ordered, mutable sequence written with square brackets. You can change, add and remove items after creating it.", lesson: 5, tags: ["types", "sequences"] },
      { term: "Mutation", def: "Changing an object in place, as <code>items.append(4)</code> does. The object keeps its identity; only its contents change.", lesson: 5, tags: ["sequences", "fundamentals"] }
    ]
  },
  {
    id: "control", title: "Control flow",
    terms: [
      { term: "Condition", def: "An expression the interpreter evaluates to decide which branch to take. Any value works; truthiness decides the outcome.", lesson: 6, tags: ["logic", "control"] },
      { term: "if statement", def: "The construct that runs a block only when its condition is true: <code>if x &gt; 0:</code> followed by an indented block.", lesson: 6, tags: ["control", "syntax"] },
      { term: "elif", def: "A follow-up branch tested only when every earlier condition was false. It lets one chain express several mutually exclusive cases.", lesson: 6, tags: ["control", "syntax"] },
      { term: "else", def: "The final branch of an <code>if</code> chain, run when no earlier condition matched. It takes no condition of its own.", lesson: 6, tags: ["control", "syntax"] },
      { term: "Truthiness", def: "How non-boolean values behave in a condition: <code>0</code>, <code>0.0</code>, <code>\"\"</code>, <code>[]</code> and <code>None</code> are falsy; almost everything else is truthy.", lesson: 6, tags: ["logic", "control"] },
      { term: "Comparison operator", def: "An operator that produces a boolean: <code>==</code>, <code>!=</code>, <code>&lt;</code>, <code>&lt;=</code>, <code>&gt;</code>, <code>&gt;=</code>. Note <code>==</code> compares, <code>=</code> assigns.", lesson: 6, tags: ["logic", "operators"] },
      { term: "Boolean operator", def: "<code>and</code>, <code>or</code> and <code>not</code>. They combine conditions and short-circuit: <code>and</code> stops at the first falsy value.", lesson: 6, tags: ["logic", "operators"] },
      { term: "for loop", def: "The loop that walks a sequence, binding the loop variable to each item in turn: <code>for item in items:</code>.", lesson: 7, tags: ["control", "loops"] },
      { term: "while loop", def: "The loop that repeats as long as its condition stays true. Use it when you do not know the number of repetitions in advance.", lesson: 7, tags: ["control", "loops"] },
      { term: "range()", def: "The built-in that produces a lazy sequence of integers, commonly used to repeat a block a fixed number of times.", lesson: 7, tags: ["control", "loops"] },
      { term: "Iteration", def: "One pass through the body of a loop. A loop that runs five times performs five iterations.", lesson: 7, tags: ["control", "loops"] },
      { term: "break", def: "The statement that leaves the innermost loop immediately, skipping any remaining iterations and the loop's <code>else</code> clause.", lesson: 7, tags: ["control", "loops"] },
      { term: "continue", def: "The statement that skips the rest of the current iteration and jumps straight to the next one.", lesson: 7, tags: ["control", "loops"] }
    ]
  },
  {
    id: "functions", title: "Functions",
    terms: [
      { term: "Function", def: "A named block of code you can call by name, optionally passing values in and getting a value back out.", lesson: 8, tags: ["functions", "fundamentals"] },
      { term: "def", def: "The keyword that defines a function: <code>def greet(name):</code> followed by an indented body. Defining does not run the body.", lesson: 8, tags: ["functions", "syntax"] },
      { term: "Parameter", def: "A name in a function's definition that receives an argument when the function is called. <code>name</code> in <code>def greet(name)</code> is a parameter.", lesson: 8, tags: ["functions", "syntax"] },
      { term: "Argument", def: "The actual value you pass at the call site. In <code>greet(\"Ada\")</code>, the string <code>\"Ada\"</code> is the argument.", lesson: 8, tags: ["functions", "syntax"] },
      { term: "return", def: "The statement that ends a function and hands a value back to the caller. A function with no <code>return</code> gives back <code>None</code>.", lesson: 8, tags: ["functions", "syntax"] },
      { term: "Docstring", def: "A string literal as the first line of a function body, describing what the function does. Tools and <code>help()</code> read it.", lesson: 8, tags: ["functions", "style"] },
      { term: "Default argument", def: "A parameter value used when the caller omits it: <code>def greet(name=\"world\")</code>. Defaults are evaluated once, at definition time.", lesson: 9, tags: ["functions", "syntax"] },
      { term: "Keyword argument", def: "An argument passed by parameter name, as in <code>greet(name=\"Ada\")</code>. It makes call sites readable and order-independent.", lesson: 9, tags: ["functions", "syntax"] },
      { term: "Scope", def: "The region of a program where a name is visible. Python resolves names with the LEGB rule: Local, Enclosing, Global, Built-in.", lesson: 9, tags: ["scope", "fundamentals"] },
      { term: "Local variable", def: "A name assigned inside a function. It exists only while that call runs and disappears when the function returns.", lesson: 9, tags: ["scope", "functions"] },
      { term: "Global variable", def: "A name assigned at the top level of a module. Functions can read it freely but must declare <code>global</code> to rebind it.", lesson: 9, tags: ["scope", "functions"] },
      { term: "Mutable default", def: "A default argument that is a list or dict — a classic bug, because the same object is reused across every call that omits it.", lesson: 9, tags: ["scope", "pitfalls"] }
    ]
  },
  {
    id: "modules", title: "Modules &amp; the standard library",
    terms: [
      { term: "Module", def: "A single <code>.py</code> file whose top-level names other files can import. Every Python file is already a module.", lesson: 10, tags: ["modules", "fundamentals"] },
      { term: "import", def: "The statement that loads a module and binds its name in the current file: <code>import math</code> then <code>math.sqrt(2)</code>.", lesson: 10, tags: ["modules", "syntax"] },
      { term: "from … import", def: "A form that binds selected names directly: <code>from math import sqrt</code> lets you call <code>sqrt(2)</code> without the prefix.", lesson: 10, tags: ["modules", "syntax"] },
      { term: "Standard library", def: "The large set of modules that ships with Python — <code>math</code>, <code>random</code>, <code>json</code>, <code>pathlib</code> and hundreds more. No install needed.", lesson: 10, tags: ["modules", "tools"] },
      { term: "Package", def: "A directory of modules with an <code>__init__.py</code>, imported with dotted names like <code>os.path</code>. Packages group related modules.", lesson: 10, tags: ["modules", "structure"] },
      { term: "Namespace", def: "The mapping from names to objects that a module provides. Importing keeps each module's names separate, which prevents collisions.", lesson: 10, tags: ["modules", "scope"] },
      { term: "__name__", def: "A module-level variable holding the module's name. It equals <code>\"__main__\"</code> only when the file is run directly, not imported.", lesson: 10, tags: ["modules", "idioms"] },
      { term: "if __name__ == \"__main__\"", def: "The idiom that guards code so it runs only when the file is executed directly, not when it is imported as a module.", lesson: 10, tags: ["modules", "idioms"] }
    ]
  },
  {
    id: "together", title: "Putting it together",
    terms: [
      { term: "PEP 8", def: "The official style guide for Python code: four-space indents, <code>snake_case</code> names, two blank lines between top-level definitions.", lesson: 2, tags: ["style", "conventions"] },
      { term: "Indentation", def: "The leading whitespace that defines a block in Python. It is syntax, not decoration — inconsistent indentation is an error.", lesson: 6, tags: ["syntax", "style"] },
      { term: "Traceback", def: "The error report Python prints when a program fails: the exception type, message, and the call stack that led to it.", lesson: 1, tags: ["errors", "tools"] },
      { term: "Exception", def: "An error signalled at runtime, like <code>ValueError</code> or <code>TypeError</code>. Unhandled, it stops the program and prints a traceback.", lesson: 1, tags: ["errors", "fundamentals"] },
      { term: "Duck typing", def: "The Python habit of caring about what an object can do, not what class it is: if it walks and quacks, treat it as a duck.", lesson: 3, tags: ["types", "design"] },
      { term: "Immutability", def: "The property of values that cannot change after creation — numbers, strings and tuples. Rebinding a name is not mutation.", lesson: 5, tags: ["types", "fundamentals"] }
    ]
  }
];

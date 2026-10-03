"use strict";

module.exports = {
  "id": "tdd",
  "title": "Test-Driven Development",
  "num": 49,
  "emoji": "🔴",
  "desc": "The red-green-refactor loop: writing the test first to force a design that is easy to call.",
  "topics": [
    "TDD",
    "Red-Green-Refactor",
    "API Design",
    "Triangulation",
    "Refactoring",
    "Clean Architecture"
  ],
  "mission": "# Mission — Test-Driven Development\n\nMaster the craft of writing software test-first. Learn the Red-Green-Refactor rhythm, drive clean API ergonomics, resist speculative over-engineering, and balance Chicago and London schools of thought.",
  "notes": "# Notes — Test-Driven Development\n\nTDD is an architectural design discipline disguised as testing. Fast feedback and decoupled interfaces are the real deliverables.",
  "resources": "# Resources — Test-Driven Development\n\n- Kent Beck, *Test-Driven Development: By Example*\n- Robert C. Martin, *Clean Code*\n- Steve Freeman & Nat Pryce, *Growing Object-Oriented Software, Guided by Tests*",
  "glossaryGroups": [
    {
      "id": "rhythm",
      "title": "TDD Rhythm & Cycles",
      "terms": [
        {
          "term": "Red-Green-Refactor",
          "def": "The core three-phase micro-cycle of TDD: write a failing test (Red), make it pass (Green), and clean up the design (Refactor).",
          "lesson": 1,
          "tags": [
            "tdd",
            "patterns"
          ]
        },
        {
          "term": "Test-First",
          "def": "The discipline of authoring an automated test before writing the production code required to satisfy it.",
          "lesson": 2,
          "tags": [
            "tdd",
            "methodology"
          ]
        },
        {
          "term": "Triangulation",
          "def": "Driving the generalization of production algorithms by introducing two or more specific tests that refute hardcoded returns.",
          "lesson": 3,
          "tags": [
            "tdd",
            "techniques"
          ]
        }
      ]
    },
    {
      "id": "design",
      "title": "Design & Principles",
      "terms": [
        {
          "term": "Refactoring",
          "def": "Modifying internal software structure to improve maintainability and readability without altering observable behavior.",
          "lesson": 4,
          "tags": [
            "tdd",
            "craft"
          ]
        },
        {
          "term": "YAGNI",
          "def": "'You Aren't Gonna Need It' — the principle of implementing functionality only when tests or requirements strictly demand it.",
          "lesson": 3,
          "tags": [
            "tdd",
            "principles"
          ]
        },
        {
          "term": "Interface-First Design",
          "def": "Designing APIs from the perspective of the caller by writing consumer test cases before implementation.",
          "lesson": 2,
          "tags": [
            "tdd",
            "architecture"
          ]
        }
      ]
    },
    {
      "id": "schools",
      "title": "Schools of TDD",
      "terms": [
        {
          "term": "Chicago School",
          "def": "Classicist inside-out TDD focusing on real domain models, state verification, and minimal mocking.",
          "lesson": 6,
          "tags": [
            "tdd",
            "schools"
          ]
        },
        {
          "term": "London School",
          "def": "Mockist outside-in TDD focusing on top-down interface discovery and interaction verification using mocks.",
          "lesson": 6,
          "tags": [
            "tdd",
            "schools"
          ]
        },
        {
          "term": "Spike Solution",
          "def": "A time-boxed, throwaway prototype written to explore an unfamiliar technology or problem before TDD.",
          "lesson": 7,
          "tags": [
            "tdd",
            "prototyping"
          ]
        }
      ]
    },
    {
      "id": "quality",
      "title": "Quality & Regressions",
      "terms": [
        {
          "term": "Defect Reproduction Test",
          "def": "A test written specifically to recreate a reported bug before implementing the bug fix.",
          "lesson": 8,
          "tags": [
            "tdd",
            "debugging"
          ]
        },
        {
          "term": "Test Friction",
          "def": "Difficulty encountered when writing a test, which serves as early diagnostic feedback of architectural debt.",
          "lesson": 5,
          "tags": [
            "tdd",
            "architecture"
          ]
        },
        {
          "term": "Code Smell",
          "def": "A surface indication in source code that usually corresponds to a deeper architectural problem or design weakness.",
          "lesson": 4,
          "tags": [
            "tdd",
            "quality"
          ]
        }
      ]
    }
  ],
  "cheatsheetSections": [
    {
      "title": "The TDD Micro-Loop",
      "label": "Red -> Green -> Refactor",
      "code": "# 1. RED: Write failing test\ndef test_add(): assert add(2, 3) == 5\n\n# 2. GREEN: Simplest passing code\ndef add(a, b): return a + b\n\n# 3. REFACTOR: Clean up without changing behavior",
      "lessonN": 1,
      "lessonSlug": "red-green-refactor",
      "lessonTitle": "The TDD Rhythm: Red, Green, Refactor"
    },
    {
      "title": "Triangulation Example",
      "label": "Generalizing from multiple tests",
      "code": "# Test 1: assert parse('1') == 1  -> return 1 (fake)\n# Test 2: assert parse('2') == 2  -> return int(s) (generalize)",
      "lessonN": 3,
      "lessonSlug": "simplest-thing-that-could-work",
      "lessonTitle": "The Simplest Thing That Could Possibly Work"
    },
    {
      "title": "Bug Fix TDD Workflow",
      "label": "Reproduce then eliminate",
      "code": "# 1. Write test reproducing customer ticket #842\ndef test_reproduce_null_discount():\n    assert apply_discount(100, None) == 100 # FAILS\n# 2. Fix code to handle None -> PASS\n# 3. Bug is permanently prevented from regressing",
      "lessonN": 8,
      "lessonSlug": "when-tdd-shines",
      "lessonTitle": "When TDD Shines and When to Prototype"
    },
    {
      "title": "Refactoring Discipline",
      "label": "Clean structure under green tests",
      "code": "# Rule: Only refactor when all tests pass.\n# Run tests after EVERY small rename, extraction, or cleanup.",
      "lessonN": 4,
      "lessonSlug": "the-refactor-step",
      "lessonTitle": "The Refactor Step: Improving Without Breaking"
    }
  ],
  "lessons": [
    {
      "n": 1,
      "id": "red-green-refactor",
      "title": "The TDD Rhythm: Red, Green, Refactor",
      "topic": "TDD Rhythm",
      "anim": "Generic",
      "lede": "The foundational heartbeat of test-driven development: Red (fail), Green (pass), and Refactor (clean).",
      "winShort": "You understand the fundamental rhythm of Red, Green, Refactor.",
      "missionLink": "Mastering the tdd rhythm: red, green, refactor across modern software engineering",
      "sec1": {
        "title": "Core principles of The TDD Rhythm: Red, Green, Refactor",
        "content": "<p><strong>Test-Driven Development (TDD)</strong> is a software development practice introduced by Kent Beck where you write automated tests <em>before</em> writing the production code. It is governed by a strict, repeating three-step micro-loop: <strong>Red, Green, Refactor</strong>.</p>",
        "keyIdea": "The foundational heartbeat of test-driven development: Red (fail), Green (pass), and Refactor (clean)."
      },
      "predict": {
        "q": "Why is the Refactor step in TDD essential, rather than optional?",
        "a": [
          "Without the refactor step, code becomes a messy accumulation of minimal hacks that barely pass tests",
          "Refactoring is required by Python compilers",
          "The test runner will not execute future tests unless refactored",
          "Tests cannot pass without refactoring"
        ],
        "c": 0,
        "why": "Green proves the code works; Refactoring cleans the design so future additions remain sustainable.",
        "prompt": "Why is the Refactor step in TDD essential, rather than optional?",
        "options": [
          "Without the refactor step, code becomes a messy accumulation of minimal hacks that barely pass tests",
          "Refactoring is required by Python compilers",
          "The test runner will not execute future tests unless refactored",
          "Tests cannot pass without refactoring"
        ],
        "answer": 0,
        "explanation": "Green proves the code works; Refactoring cleans the design so future additions remain sustainable."
      },
      "sec2": {
        "title": "The TDD Loop",
        "content": "<ul><li><strong>1. RED:</strong> Write a small test for a behavior that does not exist yet. Run the test and watch it fail for the expected reason.</li><li><strong>2. GREEN:</strong> Write the minimal amount of production code required to make the test pass. Hardcoding values or writing crude logic is completely acceptable here!</li><li><strong>3. REFACTOR:</strong> Now that the safety net is green, clean up the design: remove duplication, improve names, extract methods, and enforce design patterns without changing observable behavior.</li></ul>"
      },
      "diagram": {
        "title": "The TDD Loop",
        "caption": "The repeating three-phase cycle",
        "steps": [
          {
            "title": "1. Red",
            "lines": [
              "Write failing test",
              "Confirm failure message"
            ]
          },
          {
            "title": "2. Green",
            "lines": [
              "Write simplest code",
              "Get to green quickly"
            ]
          },
          {
            "title": "3. Refactor",
            "lines": [
              "Eliminate duplication",
              "Keep tests passing"
            ]
          }
        ],
        "boxes": [
          {
            "title": "1. Red",
            "lines": [
              "Write failing test",
              "Confirm failure message"
            ]
          },
          {
            "title": "2. Green",
            "lines": [
              "Write simplest code",
              "Get to green quickly"
            ]
          },
          {
            "title": "3. Refactor",
            "lines": [
              "Eliminate duplication",
              "Keep tests passing"
            ]
          }
        ]
      },
      "sec3": {
        "title": "State Machine of TDD",
        "content": "<pre><code># The TDD Micro-Cycle (in seconds)\n# 00:00 - Write test_empty_string_returns_zero() -> RED (failing)\n# 00:15 - Write `def add(s): return 0`          -> GREEN (passing)\n# 00:30 - Check names, clean structure          -> REFACTOR (green)\n# Repeat for the next small increment!</code></pre><p>The power of TDD lies in its tiny, rapid feedback cycles. You are never more than 60 seconds away from a working, green codebase.</p><div class=\"callout\"><p><strong>Rule of Red:</strong> Never skip watching the test fail! If you write a test and it immediately passes before you write any production code, either your test is broken or the functionality already exists.</p></div>"
      },
      "trace": {
        "title": "State Machine of TDD",
        "caption": "Guiding transitions through development phases",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "The TDD Rhythm: Red, Green, Refactor"
            }
          },
          {
            "line": 2,
            "vars": {
              "phase": "Execution",
              "state": "Active"
            }
          },
          {
            "line": 4,
            "vars": {
              "phase": "Result",
              "status": "Success"
            }
          },
          {
            "line": 1,
            "vars": {
              "step": "Red State"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Green State"
            }
          },
          {
            "line": 3,
            "vars": {
              "step": "Refactor State"
            }
          }
        ],
        "code": [
          "# Tracing The TDD Rhythm: Red, Green, Refactor",
          "def execute_flow():",
          "    # The foundational heartbeat of test-driven developm...",
          "    return True"
        ]
      },
      "practiceIntro": "Fill in the TDD cycle phases",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "In TDD, you write a failing test in {1}, make it pass in {2}, and improve the design in {3}."
        ],
        "blanks": [
          {
            "a": [
              "red"
            ],
            "why": "Failing test phase"
          },
          {
            "a": [
              "green"
            ],
            "why": "Passing test phase"
          },
          {
            "a": [
              "refactor"
            ],
            "why": "Design improvement phase"
          }
        ]
      },
      "win": "You understand the fundamental rhythm of Red, Green, Refactor.",
      "nextTasks": [
        "Audit your project code and identify where the tdd rhythm: red, green, refactor applies.",
        "Author a unit test or verification script exercising the tdd rhythm: red, green, refactor.",
        "Document team architectural conventions regarding the tdd rhythm: red, green, refactor."
      ],
      "primarySource": "Industry standards and best practices for The TDD Rhythm: Red, Green, Refactor.",
      "quiz": [
        {
          "q": "Why must you watch a new test fail before writing production code?",
          "a": [
            "To verify that the test actually checks the intended behavior and can fail when code is missing",
            "Because test runners crash if tests pass on the first run",
            "To allow the operating system to allocate RAM",
            "To create a git stash"
          ],
          "c": 0,
          "why": "Watching a test fail confirms it is not a false positive that passes unconditionally."
        },
        {
          "q": "What is the goal of the 'Green' phase in TDD?",
          "a": [
            "To make the test pass as quickly as possible with minimal code",
            "To design the ultimate enterprise architecture",
            "To write full API documentation",
            "To achieve 100% test coverage across all files"
          ],
          "c": 0,
          "why": "Green is focused strictly on establishing working behavior rapidly."
        },
        {
          "q": "When is it permissible to refactor production code during TDD?",
          "a": [
            "Only when all tests are currently passing in the Green state",
            "When tests are failing in the Red state",
            "Before writing any tests",
            "Only during annual code reviews"
          ],
          "c": 0,
          "why": "Refactoring must occur with a green test suite so you know immediately if your cleanup broke behavior."
        },
        {
          "q": "How long should an average TDD iteration take?",
          "a": [
            "A few minutes or seconds per small behavioral increment",
            "Several days per test",
            "At least one two-week sprint",
            "One hour per assertion"
          ],
          "c": 0,
          "why": "TDD thrives on tight, continuous micro-feedback loops of 1 to 5 minutes."
        }
      ],
      "next": {
        "title": "Writing the Failing Test First",
        "desc": "Learn to formulate small, unambiguous behavioral specifications before code."
      }
    },
    {
      "n": 2,
      "id": "writing-the-failing-test",
      "title": "Writing the Failing Test First",
      "topic": "Test First",
      "anim": "Generic",
      "lede": "Framing tests as unambiguous specifications of intent before writing implementation code.",
      "winShort": "You know how to design clean interfaces by writing tests first.",
      "missionLink": "Mastering writing the failing test first across modern software engineering",
      "sec1": {
        "title": "Core principles of Writing the Failing Test First",
        "content": "<p>When you write production code first, you are immersed in implementation details: loops, data structures, and edge cases. You then write tests to accommodate whatever internal design you already created. This frequently results in clumsy, hard-to-call interfaces.</p>",
        "keyIdea": "Framing tests as unambiguous specifications of intent before writing implementation code."
      },
      "predict": {
        "q": "What mindset shift occurs when writing the test before the implementation?",
        "a": [
          "You think from the perspective of an API consumer rather than an internal implementer",
          "You stop caring about code performance",
          "You must write twice as many functions",
          "You cannot use object-oriented programming"
        ],
        "c": 0,
        "why": "Writing tests first forces you to design clean, ergonomic APIs that are pleasant to consume.",
        "prompt": "What mindset shift occurs when writing the test before the implementation?",
        "options": [
          "You think from the perspective of an API consumer rather than an internal implementer",
          "You stop caring about code performance",
          "You must write twice as many functions",
          "You cannot use object-oriented programming"
        ],
        "answer": 0,
        "explanation": "Writing tests first forces you to design clean, ergonomic APIs that are pleasant to consume."
      },
      "sec2": {
        "title": "Consumer-First API Design",
        "content": "<p>Writing the <strong>test first</strong> forces a profound mental inversion: you become the first consumer of your own API. Before a single function exists, you ask:</p>"
      },
      "diagram": {
        "title": "Consumer-First API Design",
        "caption": "How writing the test first shapes function ergonomics",
        "steps": [
          {
            "title": "Test First Mindset",
            "lines": [
              "How do I want to call this?",
              "Ergonomic & intuitive API"
            ]
          },
          {
            "title": "Implementation Second",
            "lines": [
              "How do I make this work?",
              "Constrained by test contract"
            ]
          },
          {
            "title": "Result",
            "lines": [
              "Decoupled, easy-to-use code",
              "Zero untestable private coupling"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Test First Mindset",
            "lines": [
              "How do I want to call this?",
              "Ergonomic & intuitive API"
            ]
          },
          {
            "title": "Implementation Second",
            "lines": [
              "How do I make this work?",
              "Constrained by test contract"
            ]
          },
          {
            "title": "Result",
            "lines": [
              "Decoupled, easy-to-use code",
              "Zero untestable private coupling"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Incremental Test Sequence",
        "content": "<ul><li>What should this class or function be named?</li><li>What parameters make the most intuitive sense?</li><li>What data structure should it return?</li><li>How does the caller handle errors?</li></ul><pre><code># Thinking as a consumer first:\ndef test_calculate_cart_total_with_coupon():\n    # I want an API that reads like plain English:\n    cart = ShoppingCart()\n    cart.add_item(\"Book\", price=20.0)\n    cart.apply_coupon(\"SAVE10\")  # 10% off\n\n    assert cart.total == 18.0\n    assert cart.discount == 2.0</code></pre><p>Notice that we designed `ShoppingCart`, `add_item`, `apply_coupon`, and the `.total` property in the test before writing a single line of class definition. The test is the architectural specification.</p><div class=\"callout\"><p><strong>Guideline:</strong> Take tiny steps. Start with the simplest degenerated case (e.g. empty input, zero, null) before tackling complex branching logic.</p></div>"
      },
      "trace": {
        "title": "Incremental Test Sequence",
        "caption": "Building functionality step by step",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Writing the Failing Test First"
            }
          },
          {
            "line": 2,
            "vars": {
              "phase": "Execution",
              "state": "Active"
            }
          },
          {
            "line": 4,
            "vars": {
              "phase": "Result",
              "status": "Success"
            }
          },
          {
            "line": 1,
            "vars": {
              "step": "Step 1: Empty input"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Step 2: Single item"
            }
          },
          {
            "line": 3,
            "vars": {
              "step": "Step 3: Two items"
            }
          }
        ],
        "code": [
          "# Tracing Writing the Failing Test First",
          "def execute_flow():",
          "    # Framing tests as unambiguous specifications of int...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the test-first design sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Writing the test first forces developers to design software from the perspective of an {1} rather than an {2}."
        ],
        "blanks": [
          {
            "a": [
              "API consumer"
            ],
            "why": "The caller using the code"
          },
          {
            "a": [
              "implementer"
            ],
            "why": "The developer writing internal algorithms"
          }
        ]
      },
      "win": "You know how to design clean interfaces by writing tests first.",
      "nextTasks": [
        "Audit your project code and identify where writing the failing test first applies.",
        "Author a unit test or verification script exercising writing the failing test first.",
        "Document team architectural conventions regarding writing the failing test first."
      ],
      "primarySource": "Industry standards and best practices for Writing the Failing Test First.",
      "quiz": [
        {
          "q": "Why does writing tests first improve API design?",
          "a": [
            "It forces you to experience using your API before committing to an internal implementation",
            "It automatically generates UML diagrams",
            "It eliminates the need for unit testing",
            "It prevents other developers from modifying your code"
          ],
          "c": 0,
          "why": "Designing the call site first creates intuitive, decoupled, caller-friendly interfaces."
        },
        {
          "q": "What test should you write first when implementing a new feature in TDD?",
          "a": [
            "The simplest degenerate or baseline case, such as empty input or default state",
            "The most complex failure scenario with multiple concurrent threads",
            "An end-to-end integration test with a real database",
            "A performance stress benchmark"
          ],
          "c": 0,
          "why": "Starting with the simplest baseline case establishes the initial contract smoothly."
        },
        {
          "q": "What is the danger of writing production code before writing any tests?",
          "a": [
            "Code is often designed with tight coupling to dependencies, making it hard to test in isolation",
            "The code will not compile in Python",
            "The code is automatically deleted by git",
            "Functions can only have one parameter"
          ],
          "c": 0,
          "why": "Code written without testing in mind frequently lacks the seams necessary for test isolation."
        },
        {
          "q": "What should you do if your failing test fails with an unexpected error like a SyntaxError?",
          "a": [
            "Fix the syntax error so that the test fails for the expected behavioral reason",
            "Proceed directly to the Refactor phase",
            "Delete the test file",
            "Ignore the error and write production code"
          ],
          "c": 0,
          "why": "A valid Red phase requires the test to fail specifically due to missing functionality, not test bugs."
        }
      ],
      "next": {
        "title": "The Simplest Thing That Could Possibly Work",
        "desc": "Embrace fake-it-until-you-make-it to maintain rapid velocity."
      }
    },
    {
      "n": 3,
      "id": "simplest-thing-that-could-work",
      "title": "The Simplest Thing That Could Possibly Work",
      "topic": "Minimalism",
      "anim": "Generic",
      "lede": "Overcoming over-engineering by writing the minimal code necessary to make a test pass.",
      "winShort": "You know how to resist over-engineering using the simplest thing that could possibly work.",
      "missionLink": "Mastering the simplest thing that could possibly work across modern software engineering",
      "sec1": {
        "title": "Core principles of The Simplest Thing That Could Possibly Work",
        "content": "<p>One of the hardest psychological hurdles in TDD is resisting the temptation to implement the complete, final algorithm immediately. Kent Beck famously advises: <em>Do the simplest thing that could possibly work.</em></p>",
        "keyIdea": "Overcoming over-engineering by writing the minimal code necessary to make a test pass."
      },
      "predict": {
        "q": "Why does TDD encourage 'faking' return values in the early Green phase?",
        "a": [
          "It forces the developer to write the next test to drive real algorithmic generalization",
          "Faked values execute faster in production",
          "Hardcoded values consume less RAM",
          "It is required by the Python language specification"
        ],
        "c": 0,
        "why": "Returning hardcoded constants exposes what is actually proven by tests versus what is assumed.",
        "prompt": "Why does TDD encourage 'faking' return values in the early Green phase?",
        "options": [
          "It forces the developer to write the next test to drive real algorithmic generalization",
          "Faked values execute faster in production",
          "Hardcoded values consume less RAM",
          "It is required by the Python language specification"
        ],
        "answer": 0,
        "explanation": "Returning hardcoded constants exposes what is actually proven by tests versus what is assumed."
      },
      "sec2": {
        "title": "The Triangulation Strategy",
        "content": "<p>In the Green phase, it is completely legitimate—and encouraged—to <strong>fake it</strong> by returning a hardcoded constant!</p>"
      },
      "diagram": {
        "title": "The Triangulation Strategy",
        "caption": "Generalizing only when multiple tests demand it",
        "steps": [
          {
            "title": "Test 1: ('') == 0",
            "lines": [
              "Simplest code: return 0",
              "Hardcoded constant"
            ]
          },
          {
            "title": "Test 2: ('5') == 5",
            "lines": [
              "Simplest code: int(s) if s else 0",
              "Generalize parsing"
            ]
          },
          {
            "title": "Test 3: ('1,2') == 3",
            "lines": [
              "Generalize loop: sum(split)",
              "Full algorithm emerges"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Test 1: ('') == 0",
            "lines": [
              "Simplest code: return 0",
              "Hardcoded constant"
            ]
          },
          {
            "title": "Test 2: ('5') == 5",
            "lines": [
              "Simplest code: int(s) if s else 0",
              "Generalize parsing"
            ]
          },
          {
            "title": "Test 3: ('1,2') == 3",
            "lines": [
              "Generalize loop: sum(split)",
              "Full algorithm emerges"
            ]
          }
        ]
      },
      "sec3": {
        "title": "YAGNI in Action",
        "content": "<pre><code># Test 1: Empty string returns 0\ndef test_add_empty():\n    assert add(\"\") == 0\n\n# Minimal implementation (Fake it):\ndef add(numbers: str) -> int:\n    return 0  # Passes the test! Nothing more is proven yet!\n\n# Test 2: Single number returns its integer value\ndef test_add_single_number():\n    assert add(\"5\") == 5\n\n# Triangulation: Now we must generalize!\ndef add(numbers: str) -> int:\n    if not numbers:\n        return 0\n    return int(numbers)</code></pre><p>This technique is called <strong>Triangulation</strong>. You only generalize code when you have two or more examples that demand generalization. This stops speculative generality (YAGNI—You Aren't Gonna Need It) dead in its tracks.</p><div class=\"callout\"><p><strong>Insight:</strong> If a test passes when returning a hardcoded constant, your test suite has not yet demanded an algorithm. Write the next test to force the algorithm into existence!</p></div>"
      },
      "trace": {
        "title": "YAGNI in Action",
        "caption": "Stopping speculative code before it starts",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "The Simplest Thing That Could Possibly Work"
            }
          },
          {
            "line": 2,
            "vars": {
              "phase": "Execution",
              "state": "Active"
            }
          },
          {
            "line": 4,
            "vars": {
              "phase": "Result",
              "status": "Success"
            }
          },
          {
            "line": 1,
            "vars": {
              "step": "Speculative Coding"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "TDD Discipline"
            }
          }
        ],
        "code": [
          "# Tracing The Simplest Thing That Could Possibly Work",
          "def execute_flow():",
          "    # Overcoming over-engineering by writing the minimal...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the TDD minimalism sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "In TDD, developers practice {1} by only generalizing logic when multiple tests demand it, adhering strictly to {2}."
        ],
        "blanks": [
          {
            "a": [
              "triangulation"
            ],
            "why": "Driving generalization with multiple test cases"
          },
          {
            "a": [
              "YAGNI"
            ],
            "why": "You Aren't Gonna Need It principle"
          }
        ]
      },
      "win": "You know how to resist over-engineering using the simplest thing that could possibly work.",
      "nextTasks": [
        "Audit your project code and identify where the simplest thing that could possibly work applies.",
        "Author a unit test or verification script exercising the simplest thing that could possibly work.",
        "Document team architectural conventions regarding the simplest thing that could possibly work."
      ],
      "primarySource": "Industry standards and best practices for The Simplest Thing That Could Possibly Work.",
      "quiz": [
        {
          "q": "What does YAGNI stand for in software engineering?",
          "a": [
            "You Aren't Gonna Need It",
            "Your Algorithm Generates No Information",
            "Yield All Global Namespaces Immediately",
            "You Always Guarantee Numeric Integers"
          ],
          "c": 0,
          "why": "YAGNI reminds developers not to add functionality until it is deemed necessary."
        },
        {
          "q": "What is 'Triangulation' in Test-Driven Development?",
          "a": [
            "Driving general production algorithms by writing two or more specific test cases that contradict hardcoding",
            "Measuring code coverage using geometric calculations",
            "Deploying across three cloud availability zones",
            "Running tests with three different compilers"
          ],
          "c": 0,
          "why": "Triangulation forces algorithmic generalization once two or more specific tests exist."
        },
        {
          "q": "Why is hardcoding return values useful during early TDD steps?",
          "a": [
            "It keeps the code minimal and proves exactly what the existing tests have verified",
            "It prevents other developers from reading the code",
            "It bypasses the need for unit tests",
            "It saves disk space"
          ],
          "c": 0,
          "why": "Faking values highlights gaps in test coverage and prevents speculative over-engineering."
        },
        {
          "q": "What should you do immediately after getting to Green with a simplistic implementation?",
          "a": [
            "Decide whether to refactor or write the next test to drive generalization",
            "Commit and deploy directly to production",
            "Delete the test you just wrote",
            "Rewrite the entire file in C"
          ],
          "c": 0,
          "why": "Green is your decision point: either clean up code (Refactor) or advance to the next test (Red)."
        }
      ],
      "next": {
        "title": "The Refactor Step: Improving Without Breaking",
        "desc": "Master the critical discipline of continuous cleanup under a green bar."
      }
    },
    {
      "n": 4,
      "id": "the-refactor-step",
      "title": "The Refactor Step: Improving Without Breaking",
      "topic": "Refactoring",
      "anim": "Generic",
      "lede": "Safely cleaning design, eliminating duplication, and improving clarity while tests remain green.",
      "winShort": "You know how to safely and continuously refactor code under the protection of tests.",
      "missionLink": "Mastering the refactor step: improving without breaking across modern software engineering",
      "sec1": {
        "title": "Core principles of The Refactor Step: Improving Without Breaking",
        "content": "<p>Many developers treat TDD as just 'write tests first', completely neglecting the third and most important step: <strong>Refactor</strong>. When you rush from Green directly to the next Red test, your codebase accumulates tech debt and hacky shortcuts.</p>",
        "keyIdea": "Safely cleaning design, eliminating duplication, and improving clarity while tests remain green."
      },
      "predict": {
        "q": "What is the strict definition of Refactoring?",
        "a": [
          "Changing the internal structure of software to make it easier to understand and cheaper to modify, without changing its observable behavior",
          "Adding new features while fixing old bugs",
          "Rewriting an entire project in a different programming language",
          "Formatting code with an automatic linter"
        ],
        "c": 0,
        "why": "Refactoring improves internal structure while strictly preserving external behavior.",
        "prompt": "What is the strict definition of Refactoring?",
        "options": [
          "Changing the internal structure of software to make it easier to understand and cheaper to modify, without changing its observable behavior",
          "Adding new features while fixing old bugs",
          "Rewriting an entire project in a different programming language",
          "Formatting code with an automatic linter"
        ],
        "answer": 0,
        "explanation": "Refactoring improves internal structure while strictly preserving external behavior."
      },
      "sec2": {
        "title": "The Refactoring Safety Sandbox",
        "content": "<p>Refactoring is the dedicated phase where you pay back the debt incurred during the Green phase. Because all tests are passing, you have a completely safe sandbox to clean the code:</p>"
      },
      "diagram": {
        "title": "The Refactoring Safety Sandbox",
        "caption": "Cleaning code under the protection of green tests",
        "steps": [
          {
            "title": "1. All Green",
            "lines": [
              "Test suite passes 100%",
              "Baseline behavior is locked"
            ]
          },
          {
            "title": "2. Structural Edit",
            "lines": [
              "Extract method / rename",
              "No behavioral changes"
            ]
          },
          {
            "title": "3. Immediate Verify",
            "lines": [
              "Run suite in 200ms",
              "Confirm still green"
            ]
          }
        ],
        "boxes": [
          {
            "title": "1. All Green",
            "lines": [
              "Test suite passes 100%",
              "Baseline behavior is locked"
            ]
          },
          {
            "title": "2. Structural Edit",
            "lines": [
              "Extract method / rename",
              "No behavioral changes"
            ]
          },
          {
            "title": "3. Immediate Verify",
            "lines": [
              "Run suite in 200ms",
              "Confirm still green"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Separation of Hats",
        "content": "<ul><li><strong>Extract Method:</strong> Break large functions into small, well-named helpers.</li><li><strong>Eliminate Duplication:</strong> Apply DRY (Don't Repeat Yourself) between production methods and tests.</li><li><strong>Improve Names:</strong> Rename cryptic variables to intention-revealing terms.</li><li><strong>Introduce Value Objects:</strong> Group primitive fields into domain objects.</li></ul><pre><code># GREEN: Works, but messy and contains duplication\ndef calculate_invoice(items, user):\n    subtotal = 0\n    for item in items:\n        subtotal += item.price * item.quantity\n    if user.is_vip:\n        subtotal = subtotal * 0.90\n    return subtotal + (subtotal * 0.08)\n\n# REFACTORED: Clean, modular, expressive (Tests still pass 100%!)\ndef calculate_invoice(items, user):\n    subtotal = sum(item.total for item in items)\n    discounted = apply_discount(subtotal, user)\n    return apply_tax(discounted)</code></pre><div class=\"callout\"><p><strong>Rule of Refactoring:</strong> Never add new features or fix unrelated bugs while in the Refactor step! If you want to add functionality, finish refactoring, ensure tests are green, and then write a new Red test.</p></div>"
      },
      "trace": {
        "title": "Separation of Hats",
        "caption": "Kent Beck's metaphor: wearing one hat at a time",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "The Refactor Step: Improving Without Breaking"
            }
          },
          {
            "line": 2,
            "vars": {
              "phase": "Execution",
              "state": "Active"
            }
          },
          {
            "line": 4,
            "vars": {
              "phase": "Result",
              "status": "Success"
            }
          },
          {
            "line": 1,
            "vars": {
              "step": "Adding Functionality Hat"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Refactoring Hat"
            }
          }
        ],
        "code": [
          "# Tracing The Refactor Step: Improving Without Breaking",
          "def execute_flow():",
          "    # Safely cleaning design, eliminating duplication, a...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the refactoring definition",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Refactoring modifies the {1} structure of software without changing its {2} behavior."
        ],
        "blanks": [
          {
            "a": [
              "internal"
            ],
            "why": "Code organization, names, and modules"
          },
          {
            "a": [
              "observable"
            ],
            "why": "External outputs, results, and interfaces"
          }
        ]
      },
      "win": "You know how to safely and continuously refactor code under the protection of tests.",
      "nextTasks": [
        "Audit your project code and identify where the refactor step: improving without breaking applies.",
        "Author a unit test or verification script exercising the refactor step: improving without breaking.",
        "Document team architectural conventions regarding the refactor step: improving without breaking."
      ],
      "primarySource": "Industry standards and best practices for The Refactor Step: Improving Without Breaking.",
      "quiz": [
        {
          "q": "Why must you avoid adding new functionality while refactoring?",
          "a": [
            "If a test breaks, you cannot tell whether the failure was caused by your refactoring or your new feature",
            "Compilers reject simultaneous edits",
            "It violates git commit history rules",
            "It resets the test coverage metric to zero"
          ],
          "c": 0,
          "why": "Keeping refactoring separate from feature addition keeps debugging simple and focused."
        },
        {
          "q": "What enables a developer to refactor aggressively with complete confidence?",
          "a": [
            "A comprehensive, fast automated test suite that immediately catches any regression",
            "Extensive inline code comments",
            "Writing code exclusively in typed languages",
            "Reading software architecture books"
          ],
          "c": 0,
          "why": "Fast tests provide the safety net that makes bold structural improvements safe."
        },
        {
          "q": "What should you do if a test fails while you are refactoring?",
          "a": [
            "Revert your last structural edit immediately to get back to green, then take a smaller step",
            "Change the test assertion so that it passes",
            "Disable the failing test in CI",
            "Add a print statement and push to git"
          ],
          "c": 0,
          "why": "If a test fails during refactoring, you altered behavior; revert and take a smaller, safer step."
        },
        {
          "q": "What code smells should you look to eliminate during the Refactor step?",
          "a": [
            "Long methods, duplicated logic, cryptic names, and feature envy",
            "Unit tests with descriptive names",
            "Functions that return booleans",
            "Modules with fewer than 100 lines of code"
          ],
          "c": 0,
          "why": "Refactoring targets classic code smells that impede readability and maintainability."
        }
      ],
      "next": {
        "title": "TDD as a Design Tool: Interface-First Thinking",
        "desc": "Discover how TDD drives modular, loosely coupled architectures."
      }
    },
    {
      "n": 5,
      "id": "tdd-as-a-design-tool",
      "title": "TDD as a Design Tool: Interface-First Thinking",
      "topic": "Design Impact",
      "anim": "Generic",
      "lede": "Using TDD to force loose coupling, high cohesion, and dependency injection into system architecture.",
      "winShort": "You understand how TDD acts as a powerful architectural design driver.",
      "missionLink": "Mastering tdd as a design tool: interface-first thinking across modern software engineering",
      "sec1": {
        "title": "Core principles of TDD as a Design Tool: Interface-First Thinking",
        "content": "<p>Many programmers think TDD is primarily a testing technique. In reality, TDD is an <strong>architectural design tool</strong> disguised as a testing practice. The tests are a beneficial byproduct; the real deliverable is a modular, decoupled architecture.</p>",
        "keyIdea": "Using TDD to force loose coupling, high cohesion, and dependency injection into system architecture."
      },
      "predict": {
        "q": "Why is testable code almost universally better designed than untestable code?",
        "a": [
          "To be testable in isolation, code must have low coupling, clear seams, and explicit dependencies",
          "Testable code runs faster on the CPU",
          "Testable code uses fewer memory registers",
          "Test frameworks enforce strict OOP design patterns"
        ],
        "c": 0,
        "why": "Testability demands decoupling and clear interfaces, which are the hallmarks of clean architecture.",
        "prompt": "Why is testable code almost universally better designed than untestable code?",
        "options": [
          "To be testable in isolation, code must have low coupling, clear seams, and explicit dependencies",
          "Testable code runs faster on the CPU",
          "Testable code uses fewer memory registers",
          "Test frameworks enforce strict OOP design patterns"
        ],
        "answer": 0,
        "explanation": "Testability demands decoupling and clear interfaces, which are the hallmarks of clean architecture."
      },
      "sec2": {
        "title": "Testability Drives Architecture",
        "content": "<p>When you attempt to write a test first, code that suffers from poor design becomes immediately painful to test:</p>"
      },
      "diagram": {
        "title": "Testability Drives Architecture",
        "caption": "How test constraints force clean design patterns",
        "steps": [
          {
            "title": "Hard to Test",
            "lines": [
              "Hardcoded singletons",
              "Massive functions",
              "Hidden global state"
            ]
          },
          {
            "title": "Test Resistance",
            "lines": [
              "Arrange phase is agonizing",
              "Painful mocking required"
            ]
          },
          {
            "title": "Driven Design",
            "lines": [
              "Dependency Injection",
              "Single Responsibility",
              "Clean seams & interfaces"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Hard to Test",
            "lines": [
              "Hardcoded singletons",
              "Massive functions",
              "Hidden global state"
            ]
          },
          {
            "title": "Test Resistance",
            "lines": [
              "Arrange phase is agonizing",
              "Painful mocking required"
            ]
          },
          {
            "title": "Driven Design",
            "lines": [
              "Dependency Injection",
              "Single Responsibility",
              "Clean seams & interfaces"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Listen to the Test Feedback",
        "content": "<ul><li><strong>Tight Coupling:</strong> If a class instantiates its own database connections or global singletons, you cannot test it without spinning up a real database. TDD forces you to use <strong>Dependency Injection</strong>.</li><li><strong>Monolithic Responsibilities:</strong> If a function does five things, testing it requires a 50-line Arrange block. TDD pushes you toward the <strong>Single Responsibility Principle</strong>.</li><li><strong>Hidden Assumptions:</strong> TDD exposes hidden inputs (like system clocks or environment variables) and turns them into explicit parameters.</li></ul><pre><code># HARD TO TEST: Tightly coupled singleton dependency\nclass ReportGenerator:\n    def generate(self):\n        db = DatabaseConnection.get_instance()  # Global singleton!\n        data = db.query(\"SELECT * FROM sales\")\n        return format_pdf(data)\n\n# EASY TO TEST (Driven by TDD): Decoupled repository interface\nclass ReportGenerator:\n    def __init__(self, sales_repository):\n        self.sales_repo = sales_repository  # Injected dependency!\n\n    def generate(self):\n        data = self.sales_repo.get_sales_data()\n        return format_pdf(data)</code></pre><div class=\"callout\"><p><strong>Listen to the Tests:</strong> Test pain is design feedback. When a test is hard to write, do not fight the test; redesign the code!</p></div>"
      },
      "trace": {
        "title": "Listen to the Test Feedback",
        "caption": "Diagnosing architectural smells through testing friction",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "TDD as a Design Tool: Interface-First Thinking"
            }
          },
          {
            "line": 2,
            "vars": {
              "phase": "Execution",
              "state": "Active"
            }
          },
          {
            "line": 4,
            "vars": {
              "phase": "Result",
              "status": "Success"
            }
          },
          {
            "line": 1,
            "vars": {
              "step": "Pain: Massive Arrange Block"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Pain: Cannot Mock Network"
            }
          }
        ],
        "code": [
          "# Tracing TDD as a Design Tool: Interface-First Thinking",
          "def execute_flow():",
          "    # Using TDD to force loose coupling, high cohesion, ...",
          "    return True"
        ]
      },
      "practiceIntro": "Fill in the TDD design impact sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "When a class is difficult to test, it is usually a design symptom of tight {1} or lack of {2}."
        ],
        "blanks": [
          {
            "a": [
              "coupling"
            ],
            "why": "Excessive interconnection between components"
          },
          {
            "a": [
              "cohesion"
            ],
            "why": "Degree to which class elements belong together"
          }
        ]
      },
      "win": "You understand how TDD acts as a powerful architectural design driver.",
      "nextTasks": [
        "Audit your project code and identify where tdd as a design tool: interface-first thinking applies.",
        "Author a unit test or verification script exercising tdd as a design tool: interface-first thinking.",
        "Document team architectural conventions regarding tdd as a design tool: interface-first thinking."
      ],
      "primarySource": "Industry standards and best practices for TDD as a Design Tool: Interface-First Thinking.",
      "quiz": [
        {
          "q": "What is meant by the phrase 'Listen to your tests'?",
          "a": [
            "Difficulty writing a test indicates an architectural flaw like tight coupling or poor cohesion in the production code",
            "Listen to terminal audio notifications when tests finish",
            "Read test failure messages out loud",
            "Follow test framework recommendations for variable names"
          ],
          "c": 0,
          "why": "Testing friction is the earliest and most reliable warning sign of architectural decay."
        },
        {
          "q": "How does TDD naturally encourage Dependency Injection?",
          "a": [
            "To isolate classes during test execution, dependencies must be passed in rather than hardcoded internally",
            "TDD frameworks require dependency injection containers",
            "Python functions only accept dependencies as arguments",
            "Dependency injection makes tests compile faster"
          ],
          "c": 0,
          "why": "Passing dependencies via constructors allows injecting mocks or fakes during test runs."
        },
        {
          "q": "What is the relationship between TDD and the Single Responsibility Principle (SRP)?",
          "a": [
            "Classes that do one thing are easy to arrange and test; classes that do multiple things require bloated, painful test setups",
            "TDD requires every class to have exactly one method",
            "SRP eliminates the need for unit tests",
            "TDD forbids classes from having state"
          ],
          "c": 0,
          "why": "Cohesive single-responsibility classes are vastly simpler to test in isolation."
        },
        {
          "q": "What happens when developers ignore test friction and use heavy monkey-patching instead?",
          "a": [
            "The architecture remains tightly coupled and becomes brittle, while tests become fragile and difficult to maintain",
            "The code becomes 10x faster",
            "The test runner fixes the architecture automatically",
            "The compiler issues a design error"
          ],
          "c": 0,
          "why": "Monkey-patching treats the symptom while leaving the underlying architectural rot intact."
        }
      ],
      "next": {
        "title": "Inside-Out vs Outside-In TDD",
        "desc": "Compare bottom-up domain modeling with top-down user journey driving."
      }
    },
    {
      "n": 6,
      "id": "inside-out-vs-outside-in",
      "title": "Inside-Out vs Outside-In TDD",
      "topic": "TDD Styles",
      "anim": "Generic",
      "lede": "Exploring the two primary flavors of TDD: Chicago School (Inside-Out) and London School (Outside-In).",
      "winShort": "You know when and how to apply both Inside-Out and Outside-In TDD.",
      "missionLink": "Mastering inside-out vs outside-in tdd across modern software engineering",
      "sec1": {
        "title": "Core principles of Inside-Out vs Outside-In TDD",
        "content": "<p>Over the years, two distinct schools of TDD thought emerged, each with different philosophies regarding design direction and mocking:</p>",
        "keyIdea": "Exploring the two primary flavors of TDD: Chicago School (Inside-Out) and London School (Outside-In)."
      },
      "predict": {
        "q": "What distinguishes London School (Outside-In) TDD from Chicago School (Inside-Out) TDD?",
        "a": [
          "London School starts at user-facing boundaries and mocks collaborators downwards; Chicago School starts at core domain models and builds outwards",
          "London School is only used in the UK",
          "Chicago School does not use assertions",
          "London School does not allow refactoring"
        ],
        "c": 0,
        "why": "London school drives design top-down using mocks; Chicago school builds bottom-up using real collaborator state.",
        "prompt": "What distinguishes London School (Outside-In) TDD from Chicago School (Inside-Out) TDD?",
        "options": [
          "London School starts at user-facing boundaries and mocks collaborators downwards; Chicago School starts at core domain models and builds outwards",
          "London School is only used in the UK",
          "Chicago School does not use assertions",
          "London School does not allow refactoring"
        ],
        "answer": 0,
        "explanation": "London school drives design top-down using mocks; Chicago school builds bottom-up using real collaborator state."
      },
      "sec2": {
        "title": "TDD Schools Compared",
        "content": "<ul><li><strong>Chicago School (Classicist / Inside-Out):</strong> You start by building the core domain logic first (e.g. `Money`, `OrderItem`, `TaxCalculator`) using real objects and state verification. Once core domain units work, you build outward toward controllers and APIs. Mocks are used sparingly.</li><li><strong>London School (Mockist / Outside-In):</strong> You start at the outermost boundary (e.g. HTTP controller or CLI command) and work inward. You mock immediate collaborators, discovering the interfaces you need as you go, and then implement the collaborators in subsequent steps.</li></ul>"
      },
      "diagram": {
        "title": "TDD Schools Compared",
        "caption": "London vs Chicago design approaches",
        "steps": [
          {
            "title": "London (Outside-In)",
            "lines": [
              "Start at UI / Controller",
              "Mock collaborators downwards",
              "Interaction & protocol focus"
            ]
          },
          {
            "title": "Chicago (Inside-Out)",
            "lines": [
              "Start at Core Domain / Model",
              "Use real objects & state",
              "Algorithmic & state focus"
            ]
          },
          {
            "title": "Synthesis",
            "lines": [
              "Outside-In for seams & flows",
              "Inside-Out for domain rules"
            ]
          }
        ],
        "boxes": [
          {
            "title": "London (Outside-In)",
            "lines": [
              "Start at UI / Controller",
              "Mock collaborators downwards",
              "Interaction & protocol focus"
            ]
          },
          {
            "title": "Chicago (Inside-Out)",
            "lines": [
              "Start at Core Domain / Model",
              "Use real objects & state",
              "Algorithmic & state focus"
            ]
          },
          {
            "title": "Synthesis",
            "lines": [
              "Outside-In for seams & flows",
              "Inside-Out for domain rules"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Design Flow Direction",
        "content": "<pre><code># Chicago School (Inside-Out): State-based, real collaborators\ndef test_cart_total():\n    item = Item(price=10)\n    cart = Cart([item])\n    assert cart.total() == 10  # Verifies real object state\n\n# London School (Outside-In): Interaction-based, mock collaborators\ndef test_order_controller():\n    mock_order_service = Mock()\n    controller = OrderController(order_service=mock_order_service)\n    controller.post({\"item\": \"Widget\"})\n    mock_order_service.create.assert_called_once()  # Verifies protocol</code></pre><p>Experienced engineers use both styles: Outside-In to discover system seams and user workflows, and Inside-Out for intricate mathematical algorithms and domain state machines.</p><div class=\"callout\"><p><strong>Pragmatic Hybrid:</strong> Use Outside-In acceptance tests to drive the overall feature, then drop into Inside-Out unit tests to flesh out complex business logic.</p></div>"
      },
      "trace": {
        "title": "Design Flow Direction",
        "caption": "Visualizing top-down vs bottom-up",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Inside-Out vs Outside-In TDD"
            }
          },
          {
            "line": 2,
            "vars": {
              "phase": "Execution",
              "state": "Active"
            }
          },
          {
            "line": 4,
            "vars": {
              "phase": "Result",
              "status": "Success"
            }
          },
          {
            "line": 1,
            "vars": {
              "step": "Top-Down (London)"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Bottom-Up (Chicago)"
            }
          }
        ],
        "code": [
          "# Tracing Inside-Out vs Outside-In TDD",
          "def execute_flow():",
          "    # Exploring the two primary flavors of TDD: Chicago ...",
          "    return True"
        ]
      },
      "practiceIntro": "Fill in the TDD schools comparison",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "The {1} school builds top-down using mocks, while the {2} school builds bottom-up using real domain objects."
        ],
        "blanks": [
          {
            "a": [
              "London"
            ],
            "why": "Mockist outside-in style"
          },
          {
            "a": [
              "Chicago"
            ],
            "why": "Classicist inside-out style"
          }
        ]
      },
      "win": "You know when and how to apply both Inside-Out and Outside-In TDD.",
      "nextTasks": [
        "Audit your project code and identify where inside-out vs outside-in tdd applies.",
        "Author a unit test or verification script exercising inside-out vs outside-in tdd.",
        "Document team architectural conventions regarding inside-out vs outside-in tdd."
      ],
      "primarySource": "Industry standards and best practices for Inside-Out vs Outside-In TDD.",
      "quiz": [
        {
          "q": "What is the primary strength of London School (Outside-In) TDD?",
          "a": [
            "It prevents building functionality that is never actually needed by the outer application or user",
            "It completely eliminates the need for test assertions",
            "It makes tests run in parallel automatically",
            "It guarantees zero memory allocations"
          ],
          "c": 0,
          "why": "Starting at the entry point ensures every lower-level collaborator is built to satisfy a real consumer requirement."
        },
        {
          "q": "What is the primary danger of dogmatic London School TDD?",
          "a": [
            "Heavy mocking can couple tests to exact method call sequences, making tests brittle when internals change",
            "Tests become too fast to measure",
            "Code coverage is capped at 50%",
            "Mocks cannot be run on Linux"
          ],
          "c": 0,
          "why": "Verifying interactions rather than outcomes can make tests sensitive to trivial internal implementation details."
        },
        {
          "q": "Why do many teams prefer Chicago School for core domain logic?",
          "a": [
            "Domain models are rich in state and calculations; verifying real outputs without mocks is straightforward and resilient",
            "Chicago School is required by Python",
            "Domain models cannot be mocked",
            "It requires no knowledge of testing"
          ],
          "c": 0,
          "why": "State-based testing of real domain models produces robust tests that survive refactoring."
        },
        {
          "q": "How does a pragmatic team combine both schools?",
          "a": [
            "Use Outside-In tests for top-level user journeys, and Inside-Out tests for core domain algorithms",
            "Alternate schools on odd and even days of the week",
            "Assign London to junior developers and Chicago to seniors",
            "Use London for CSS and Chicago for HTML"
          ],
          "c": 0,
          "why": "A hybrid approach leverages the interface discovery of Outside-In with the resilience of Inside-Out."
        }
      ],
      "next": {
        "title": "Common TDD Traps and Dogmatism",
        "desc": "Recognize and avoid dogmatic pitfalls that derail TDD adoption."
      }
    },
    {
      "n": 7,
      "id": "tdd-traps-and-dogmatism",
      "title": "Common TDD Traps and Dogmatism",
      "topic": "Anti-Patterns",
      "anim": "Generic",
      "lede": "Avoiding the common pitfalls of TDD dogmatism: testing trivial code, over-mocking, and paralysis.",
      "winShort": "You know how to avoid TDD dogmatism and practice pragmatic test-first engineering.",
      "missionLink": "Mastering common tdd traps and dogmatism across modern software engineering",
      "sec1": {
        "title": "Core principles of Common TDD Traps and Dogmatism",
        "content": "<p>Like many powerful engineering disciplines, TDD can be distorted into rigid dogmatism that slows teams down instead of speeding them up. Recognizing common TDD traps is essential for long-term sustainable practice.</p>",
        "keyIdea": "Avoiding the common pitfalls of TDD dogmatism: testing trivial code, over-mocking, and paralysis."
      },
      "predict": {
        "q": "What is a common trap that leads developers to abandon TDD?",
        "a": [
          "Writing tests for trivial getters, setters, and framework boilerplate instead of real business logic",
          "Running tests with automated test runners",
          "Writing tests that execute in under a second",
          "Refactoring code when tests are green"
        ],
        "c": 0,
        "why": "Testing trivial boilerplate creates high maintenance overhead with zero real defect-prevention value.",
        "prompt": "What is a common trap that leads developers to abandon TDD?",
        "options": [
          "Writing tests for trivial getters, setters, and framework boilerplate instead of real business logic",
          "Running tests with automated test runners",
          "Writing tests that execute in under a second",
          "Refactoring code when tests are green"
        ],
        "answer": 0,
        "explanation": "Testing trivial boilerplate creates high maintenance overhead with zero real defect-prevention value."
      },
      "sec2": {
        "title": "Common TDD Anti-Patterns",
        "content": "<p>Key TDD anti-patterns to avoid:</p>"
      },
      "diagram": {
        "title": "Common TDD Anti-Patterns",
        "caption": "Traps that undermine developer productivity",
        "steps": [
          {
            "title": "Testing Boilerplate",
            "lines": [
              "Asserting getters & setters",
              "Zero ROI, high maintenance"
            ]
          },
          {
            "title": "Mock Obsession",
            "lines": [
              "Mocking every single class",
              "Brittle tests coupled to internals"
            ]
          },
          {
            "title": "Dogmatic Refusal to Spike",
            "lines": [
              "TDD-ing in complete ignorance",
              "Paralysis when problem is unknown"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Testing Boilerplate",
            "lines": [
              "Asserting getters & setters",
              "Zero ROI, high maintenance"
            ]
          },
          {
            "title": "Mock Obsession",
            "lines": [
              "Mocking every single class",
              "Brittle tests coupled to internals"
            ]
          },
          {
            "title": "Dogmatic Refusal to Spike",
            "lines": [
              "TDD-ing in complete ignorance",
              "Paralysis when problem is unknown"
            ]
          }
        ]
      },
      "sec3": {
        "title": "The Spike-and-Stabilize Loop",
        "content": "<ul><li><strong>Testing the Trivial:</strong> Writing tests for simple field accessors, standard library functions, or one-line ORM definitions. If code has zero conditional logic, a unit test has near-zero ROI.</li><li><strong>Mocking Every Seam:</strong> Replacing every single collaborator with a mock until your tests only verify that method A calls method B with arguments C. If you change a method name, 50 tests break even though behavior is intact!</li><li><strong>Refactoring Paralysis:</strong> Spending three hours polishing code during the Refactor step instead of taking small, focused steps.</li><li><strong>Never Spiking or Prototyping:</strong> Refusing to write exploratory code when exploring an unfamiliar API or architecture.</li></ul><pre><code># DOGMATIC ANTI-PATTERN: Testing trivial property accessors\ndef test_user_set_name():\n    user = User()\n    user.name = \"Bob\"\n    assert user.name == \"Bob\"  # Zero value! You are testing Python itself!\n\n# HIGH ROI: Testing genuine business decisions and edge cases\ndef test_cannot_transfer_more_than_daily_limit():\n    account = Account(daily_limit=1000)\n    with pytest.raises(DailyLimitExceeded):\n        account.transfer(1500)</code></pre><div class=\"callout\"><p><strong>The Spike Solution:</strong> When you do not know how a problem should be structured, throw away TDD temporarily! Write a dirty, exploratory prototype (a 'Spike') to learn the problem space, throw the code away, and then TDD the real solution cleanly.</p></div>"
      },
      "trace": {
        "title": "The Spike-and-Stabilize Loop",
        "caption": "Balancing exploration with TDD rigor",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Common TDD Traps and Dogmatism"
            }
          },
          {
            "line": 2,
            "vars": {
              "phase": "Execution",
              "state": "Active"
            }
          },
          {
            "line": 4,
            "vars": {
              "phase": "Result",
              "status": "Success"
            }
          },
          {
            "line": 1,
            "vars": {
              "step": "1. Exploration Spike"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "2. Trash Prototype"
            }
          },
          {
            "line": 3,
            "vars": {
              "step": "3. Clean TDD Cycle"
            }
          }
        ],
        "code": [
          "# Tracing Common TDD Traps and Dogmatism",
          "def execute_flow():",
          "    # Avoiding the common pitfalls of TDD dogmatism: tes...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the TDD trap remediation sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "When exploring unfamiliar architectures or APIs, developers should write a throwaway {1} before rebuilding cleanly with {2}."
        ],
        "blanks": [
          {
            "a": [
              "spike"
            ],
            "why": "Exploratory prototype to gain knowledge"
          },
          {
            "a": [
              "TDD"
            ],
            "why": "Disciplined test-first cycle"
          }
        ]
      },
      "win": "You know how to avoid TDD dogmatism and practice pragmatic test-first engineering.",
      "nextTasks": [
        "Audit your project code and identify where common tdd traps and dogmatism applies.",
        "Author a unit test or verification script exercising common tdd traps and dogmatism.",
        "Document team architectural conventions regarding common tdd traps and dogmatism."
      ],
      "primarySource": "Industry standards and best practices for Common TDD Traps and Dogmatism.",
      "quiz": [
        {
          "q": "What is a 'Spike' in agile and TDD terminology?",
          "a": [
            "A temporary, throwaway prototype written strictly to explore technical feasibility and learn an API",
            "A sudden unexpected drop in code coverage",
            "A test that takes longer than 10 seconds",
            "A git merge conflict on the main branch"
          ],
          "c": 0,
          "why": "Spikes are time-boxed exploratory experiments used to understand problems before applying TDD."
        },
        {
          "q": "Why is testing third-party library internals (like testing that 'dict[key] = val' works) an anti-pattern?",
          "a": [
            "You are testing the standard library rather than your own business logic, adding maintenance overhead for zero gain",
            "Third-party libraries cannot be tested in Python",
            "It slows down the internet connection",
            "It causes compiler memory leaks"
          ],
          "c": 0,
          "why": "Trust that standard libraries and well-maintained frameworks work; test your own domain rules."
        },
        {
          "q": "What is the consequence of 'mock-heavy' testing on refactoring?",
          "a": [
            "Tests become brittle because any internal restructuring breaks mock expectations even when behavior is unchanged",
            "Tests become completely immune to breaking",
            "Refactoring runs 10x faster",
            "Code coverage increases to 200%"
          ],
          "c": 0,
          "why": "Mocks verify internal interactions; refactoring changes those interactions, breaking mock assertions."
        },
        {
          "q": "What should you do with exploratory spike code once you understand the solution?",
          "a": [
            "Discard or set it aside, and implement the real solution using disciplined TDD",
            "Deploy the spike directly to production",
            "Write tests after shipping the spike to users",
            "Add comments to the spike and merge"
          ],
          "c": 0,
          "why": "Throwing away the spike allows you to build the clean, tested production implementation without baggage."
        }
      ],
      "next": {
        "title": "When TDD Shines and When to Prototype",
        "desc": "Evaluate project context to choose the optimal engineering strategy."
      }
    },
    {
      "n": 8,
      "id": "when-tdd-shines",
      "title": "When TDD Shines and When to Prototype",
      "topic": "Pragmatic Practice",
      "anim": "Generic",
      "lede": "Identifying when TDD provides massive leverage versus when exploratory prototyping is more effective.",
      "winShort": "You have completed the Test-Driven Development (TDD) course.",
      "missionLink": "Mastering when tdd shines and when to prototype across modern software engineering",
      "sec1": {
        "title": "Core principles of When TDD Shines and When to Prototype",
        "content": "<p>Test-Driven Development is an extraordinary engineering tool, but like all tools, it has ideal use cases and contexts where other approaches are superior. Knowing <em>when</em> to use TDD is just as important as knowing <em>how</em> to use it.</p>",
        "keyIdea": "Identifying when TDD provides massive leverage versus when exploratory prototyping is more effective."
      },
      "predict": {
        "q": "In which scenario does Test-Driven Development deliver the highest return on investment?",
        "a": [
          "Complex domain logic, parsers, state machines, financial calculations, and well-understood requirements",
          "Flipping CSS button colors on a temporary landing page",
          "Connecting a webcam driver for the first time",
          "Writing a one-off shell script for a local directory"
        ],
        "c": 0,
        "why": "TDD excels when requirements are clear and logic is complex, ensuring bulletproof correctness.",
        "prompt": "In which scenario does Test-Driven Development deliver the highest return on investment?",
        "options": [
          "Complex domain logic, parsers, state machines, financial calculations, and well-understood requirements",
          "Flipping CSS button colors on a temporary landing page",
          "Connecting a webcam driver for the first time",
          "Writing a one-off shell script for a local directory"
        ],
        "answer": 0,
        "explanation": "TDD excels when requirements are clear and logic is complex, ensuring bulletproof correctness."
      },
      "sec2": {
        "title": "TDD Decision Quadrant",
        "content": "<p><strong>Where TDD Delivers Maximum ROI:</strong></p>"
      },
      "diagram": {
        "title": "TDD Decision Quadrant",
        "caption": "Matching engineering methods to task characteristics",
        "steps": [
          {
            "title": "High Logic / Known Spec",
            "lines": [
              "Billing, Parsers, State Machines",
              "STRICT TDD (Maximum ROI)"
            ]
          },
          {
            "title": "Bug Reproduction",
            "lines": [
              "Customer reported regressions",
              "TDD: Write failing test, then fix"
            ]
          },
          {
            "title": "Visual UI / Exploration",
            "lines": [
              "CSS tweaks, R&D probes",
              "Interactive Hot Reload & Spikes"
            ]
          }
        ],
        "boxes": [
          {
            "title": "High Logic / Known Spec",
            "lines": [
              "Billing, Parsers, State Machines",
              "STRICT TDD (Maximum ROI)"
            ]
          },
          {
            "title": "Bug Reproduction",
            "lines": [
              "Customer reported regressions",
              "TDD: Write failing test, then fix"
            ]
          },
          {
            "title": "Visual UI / Exploration",
            "lines": [
              "CSS tweaks, R&D probes",
              "Interactive Hot Reload & Spikes"
            ]
          }
        ]
      },
      "sec3": {
        "title": "The Bug Fix TDD Workflow",
        "content": "<ul><li><strong>Complex Domain Algorithms:</strong> Financial billing, interest calculations, tax engines, and game rules.</li><li><strong>Parsers and Compilers:</strong> Converting input strings into abstract syntax trees or structured data.</li><li><strong>State Machines & Protocols:</strong> Payment processing states, order fulfillment lifecycles, and network handshakes.</li><li><strong>Bug Fixes:</strong> Writing a failing reproduction test before fixing the bug guarantees the defect will never return.</li></ul><p><strong>Where Exploratory Prototyping Beats TDD:</strong></p><ul><li><strong>UI Layout & Aesthetics:</strong> Tweaking margins, colors, and animations is visual; TDD provides little value compared to hot reloading.</li><li><strong>Uncharted Explorations:</strong> When you don't even know what data structures you need, prototyping beats rigid test-first.</li></ul><pre><code># The TDD Decision Matrix\n# Known problem + Complex business logic -> STRICT TDD\n# Production bug report                  -> TDD (reproduce then fix)\n# Unfamiliar API / Third-party probe     -> SPIKE PROTOTYPE\n# Visual UI design / CSS adjustments     -> VISUAL HOT-RELOAD</code></pre><div class=\"callout\"><p><strong>Final Insight:</strong> TDD is not a religion. It is a superpower for writing bulletproof logic with elegant interfaces. Use it where precision and durability matter most.</p></div>"
      },
      "trace": {
        "title": "The Bug Fix TDD Workflow",
        "caption": "Eliminating regressions permanently",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "When TDD Shines and When to Prototype"
            }
          },
          {
            "line": 2,
            "vars": {
              "phase": "Execution",
              "state": "Active"
            }
          },
          {
            "line": 4,
            "vars": {
              "phase": "Result",
              "status": "Success"
            }
          },
          {
            "line": 1,
            "vars": {
              "step": "1. Reproduce (Red)"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "2. Repair (Green)"
            }
          },
          {
            "line": 3,
            "vars": {
              "step": "3. Safeguard"
            }
          }
        ],
        "code": [
          "# Tracing When TDD Shines and When to Prototype",
          "def execute_flow():",
          "    # Identifying when TDD provides massive leverage ver...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the TDD applicability sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "TDD provides the highest leverage on complex {1} logic and state machines, while visual UI tweaks benefit more from {2}."
        ],
        "blanks": [
          {
            "a": [
              "domain"
            ],
            "why": "Business rules and calculations"
          },
          {
            "a": [
              "hot reload"
            ],
            "why": "Instant visual browser refresh"
          }
        ]
      },
      "win": "You have completed the Test-Driven Development (TDD) course.",
      "nextTasks": [
        "Audit your project code and identify where when tdd shines and when to prototype applies.",
        "Author a unit test or verification script exercising when tdd shines and when to prototype.",
        "Document team architectural conventions regarding when tdd shines and when to prototype."
      ],
      "primarySource": "Industry standards and best practices for When TDD Shines and When to Prototype.",
      "quiz": [
        {
          "q": "Why is TDD the premier methodology for fixing production bugs?",
          "a": [
            "Writing the reproducing test first proves the bug exists and guarantees it can never quietly regress in the future",
            "It automatically refunds affected customers",
            "It eliminates the need to deploy fixes",
            "It compiles bug reports into PDF format"
          ],
          "c": 0,
          "why": "A reproduction test captures the bug forever in your automated regression suite."
        },
        {
          "q": "Why does TDD struggle when designing user-facing visual interfaces (like CSS layouts)?",
          "a": [
            "Visual aesthetics and UX polish require rapid visual perception and feedback, which code assertions cannot replicate well",
            "Browsers refuse to execute unit tests",
            "CSS cannot be parsed by computers",
            "HTML tags change dynamically every second"
          ],
          "c": 0,
          "why": "Visual aesthetics are best evaluated by human eyes with browser hot-reloading."
        },
        {
          "q": "What type of software systems universally benefit from test-driven design?",
          "a": [
            "Compilers, financial engines, parsers, and transactional banking systems",
            "Static one-page marketing flyers",
            "Disposable shell scripts",
            "Temporary proof-of-concept mockups"
          ],
          "c": 0,
          "why": "High-consequence algorithmic systems demand the precision and safety net of TDD."
        },
        {
          "q": "How does mastery of TDD change a developer's relationship with legacy code?",
          "a": [
            "They gain the confidence to refactor and improve legacy systems by wrapping them in characterization tests first",
            "They immediately demand that all legacy code be deleted",
            "They avoid working on existing codebases",
            "They stop using version control"
          ],
          "c": 0,
          "why": "TDD gives engineers the tools and mental model to modernize existing code safely."
        }
      ],
      "next": {
        "title": "Next Course: Refactoring & Technical Debt",
        "desc": "Learn how to systematically modernize legacy code without breaking behavior."
      }
    }
  ]
};

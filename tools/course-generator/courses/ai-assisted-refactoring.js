"use strict";

module.exports = {
  "id": "ai-assisted-refactoring",
  "title": "AI-Assisted Refactoring",
  "num": 58,
  "emoji": "🔧",
  "desc": "Using tests as a safety net while an agent performs large mechanical changes across a codebase.",
  "topics": [
    "Refactoring",
    "Safety Net",
    "Mechanical Refactorings",
    "AST Codemods",
    "Monolith Decomposition",
    "Service Extraction",
    "Atomic Commits",
    "Performance Audits"
  ],
  "mission": "# Mission — AI-Assisted Refactoring\n\nHarness AI coding agents for large-scale, fearless code modernization. Establish passing test suites as mandatory safety nets, execute mechanical syntax and typing upgrades, author AST codemods, slice monolithic god classes incrementally, verify global call-site invariants, practice atomic commit discipline, and audit against performance regressions.",
  "notes": "# Notes — AI-Assisted Refactoring\n\nRefactoring improves internal structure without altering observable behavior. Combine AI speed with automated testing safety nets to modernize legacy code reliably.",
  "resources": "# Resources — AI-Assisted Refactoring\n\n- Martin Fowler, *Refactoring: Improving the Design of Existing Code* (2nd Edition)\n- Michael Feathers, *Working Effectively with Legacy Code*\n- LibCST Documentation (libcst.readthedocs.io)",
  "glossaryGroups": [
    {
      "id": "safety",
      "title": "Safety & Mechanics",
      "terms": [
        {
          "term": "Safety Net Prerequisite",
          "def": "The rule that automated tests must pass 100% before initiating any structural code refactoring.",
          "lesson": 1,
          "tags": [
            "refactoring",
            "safety"
          ]
        },
        {
          "term": "Mechanical Refactoring",
          "def": "Repetitive, rule-based code transformations (renames, syntax modernizations, type additions) ideal for AI execution.",
          "lesson": 2,
          "tags": [
            "refactoring",
            "automation"
          ]
        },
        {
          "term": "AST Codemod",
          "def": "A script that parses and modifies the Abstract Syntax Tree of source code to execute deterministic bulk transformations.",
          "lesson": 3,
          "tags": [
            "tooling",
            "ast"
          ]
        }
      ]
    },
    {
      "id": "decomposition",
      "title": "Decomposition & Seams",
      "terms": [
        {
          "term": "Step-by-Step Slicing",
          "def": "Decomposing a large monolith incrementally by extracting one cohesive cluster at a time.",
          "lesson": 4,
          "tags": [
            "architecture",
            "refactoring"
          ]
        },
        {
          "term": "Re-Export Seam",
          "def": "Exporting extracted symbols from their original location to preserve caller compatibility during refactoring.",
          "lesson": 4,
          "tags": [
            "architecture",
            "compatibility"
          ]
        },
        {
          "term": "Repository Pattern",
          "def": "An architectural seam decoupling business application services from database query implementations.",
          "lesson": 5,
          "tags": [
            "patterns",
            "architecture"
          ]
        }
      ]
    },
    {
      "id": "verification",
      "title": "Verification & Git",
      "terms": [
        {
          "term": "Whole-Project Type Check",
          "def": "Running static type analysis across the entire codebase to verify all call sites match updated signatures.",
          "lesson": 6,
          "tags": [
            "typing",
            "verification"
          ]
        },
        {
          "term": "Atomic Commit",
          "def": "A single git commit containing one self-contained, verified change that keeps the test suite green.",
          "lesson": 7,
          "tags": [
            "git",
            "workflow"
          ]
        },
        {
          "term": "Instant Rollback",
          "def": "The capability to revert a failed experimental refactoring step in seconds using git reset.",
          "lesson": 7,
          "tags": [
            "git",
            "safety"
          ]
        }
      ]
    },
    {
      "id": "performance",
      "title": "Performance & Auditing",
      "terms": [
        {
          "term": "N+1 Query Regression",
          "def": "A performance bug where extracted property accesses inside a loop trigger N redundant database round-trips.",
          "lesson": 8,
          "tags": [
            "performance",
            "databases"
          ]
        },
        {
          "term": "Memory Materialization",
          "def": "Loading an entire dataset into RAM at once instead of processing it iteratively with streaming generators.",
          "lesson": 8,
          "tags": [
            "performance",
            "memory"
          ]
        },
        {
          "term": "Query Count Assertion",
          "def": "An automated test assertion that enforces an upper bound on the number of SQL queries fired during an operation.",
          "lesson": 8,
          "tags": [
            "testing",
            "performance"
          ]
        }
      ]
    }
  ],
  "cheatsheetSections": [
    {
      "title": "Mechanical Syntax Modernization Prompt",
      "label": "Bulk typing & syntax upgrade",
      "code": "\"Modernize syntax across src/models/:\n1. Replace Optional[T] with T | None.\n2. Replace Union[A, B] with A | B.\n3. Run `mypy src/` and `pytest tests/` to verify zero regressions.\"",
      "lessonN": 2,
      "lessonSlug": "mechanical-refactorings",
      "lessonTitle": "Mechanical Refactorings: Renames, Modernizations, Type Additions"
    },
    {
      "title": "Backward-Compatible Re-Export Seam",
      "label": "Decomposing monoliths safely",
      "code": "# In legacy_service.py:\n# Extract logic to new file, but re-export to keep callers working:\nfrom src.services.billing import calculate_invoice\n# Callers importing legacy_service.calculate_invoice continue to work!",
      "lessonN": 4,
      "lessonSlug": "step-by-step-monolith-decomposition",
      "lessonTitle": "Step-by-Step Monolith Decomposition"
    },
    {
      "title": "Multi-File Verification Chain",
      "label": "Three-tier consistency audit",
      "code": "# Run after any multi-file refactoring:\nmypy src/ tests/ && ruff check src/ tests/ && pytest\n# Only commit when all three exit with code 0!",
      "lessonN": 6,
      "lessonSlug": "verifying-invariants-multi-file-diffs",
      "lessonTitle": "Verifying Invariants Across Large Multi-File Diffs"
    },
    {
      "title": "Atomic Refactoring Git Cycle",
      "label": "Small reversible steps",
      "code": "# 1. Make 1 small refactoring\n# 2. Verify: pytest (PASS)\n# 3. Commit: git commit -m 'refactor: Extract TaxService'\n# If tests fail: git reset --hard HEAD (Instant rollback!)",
      "lessonN": 7,
      "lessonSlug": "rollback-strategies-atomic-commits",
      "lessonTitle": "Rollback Strategies and Atomic Commit Discipline"
    }
  ],
  "lessons": [
    {
      "n": 1,
      "id": "test-suite-as-safety-net",
      "title": "The Test Suite as the Mandatory Safety Net",
      "topic": "Safety Net",
      "anim": "Generic",
      "lede": "Why comprehensive automated tests are the mandatory prerequisite before initiating large-scale AI refactoring.",
      "winShort": "You understand the mandatory role of automated test suites as refactoring safety nets.",
      "missionLink": "Mastering the test suite as the mandatory safety net across modern software engineering",
      "sec1": {
        "title": "Core principles of The Test Suite as the Mandatory Safety Net",
        "content": "<p>Refactoring without tests is not refactoring; it is an act of wild, reckless faith. When an AI agent performs sweeping structural modifications across a codebase, it can alter hundreds of lines in seconds. If you do not have an automated safety net, you are flying blind.</p>",
        "keyIdea": "Why comprehensive automated tests are the mandatory prerequisite before initiating large-scale AI refactoring."
      },
      "predict": {
        "q": "What happens if you ask an AI agent to refactor a large legacy module that has zero automated tests?",
        "a": [
          "The agent may make breaking behavioral changes that go undetected until customers report outages in production",
          "The agent will refuse to edit files",
          "The operating system blocks refactoring",
          "The git repository is deleted"
        ],
        "c": 0,
        "why": "Without tests, neither the human nor the agent has any automated way to detect subtle regressions.",
        "prompt": "What happens if you ask an AI agent to refactor a large legacy module that has zero automated tests?",
        "options": [
          "The agent may make breaking behavioral changes that go undetected until customers report outages in production",
          "The agent will refuse to edit files",
          "The operating system blocks refactoring",
          "The git repository is deleted"
        ],
        "answer": 0,
        "explanation": "Without tests, neither the human nor the agent has any automated way to detect subtle regressions."
      },
      "sec2": {
        "title": "The Refactoring Safety Net",
        "content": "<p>Before embarking on any AI-assisted refactoring, you must establish the <strong>Safety Net Prerequisite</strong>:</p>"
      },
      "diagram": {
        "title": "The Refactoring Safety Net",
        "caption": "How tests protect against agent regressions",
        "steps": [
          {
            "title": "1. Baseline Established",
            "lines": [
              "All tests pass 100%",
              "Current behavior locked"
            ]
          },
          {
            "title": "2. Agent Refactors",
            "lines": [
              "Extracts classes & modules",
              "Tests run in 500ms"
            ]
          },
          {
            "title": "3. Immediate Feedback",
            "lines": [
              "Green -> Commit safely",
              "Red -> Revert instantly"
            ]
          }
        ],
        "boxes": [
          {
            "title": "1. Baseline Established",
            "lines": [
              "All tests pass 100%",
              "Current behavior locked"
            ]
          },
          {
            "title": "2. Agent Refactors",
            "lines": [
              "Extracts classes & modules",
              "Tests run in 500ms"
            ]
          },
          {
            "title": "3. Immediate Feedback",
            "lines": [
              "Green -> Commit safely",
              "Red -> Revert instantly"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Refactoring Without Tests (Danger)",
        "content": "<ul><li><strong>1. Baseline Green:</strong> Every existing test must pass 100% before changing a single line of code.</li><li><strong>2. High Behavioral Coverage:</strong> If the target module lacks tests, instruct the agent to write <strong>Characterization Tests</strong> first, locking down current inputs and outputs.</li><li><strong>3. Fast Execution:</strong> The test suite must run locally in seconds, allowing the agent to verify every micro-edit.</li></ul><pre><code># The Refactoring Golden Protocol:\n1. Run `pytest tests/test_billing.py` -> 100% GREEN (Baseline established)\n2. Agent performs targeted refactoring (e.g. Extract Service)\n3. Run `pytest tests/test_billing.py` -> 100% GREEN (Behavior preserved!)\n4. If ANY test fails -> Immediate `git checkout` revert. Take a smaller step.</code></pre><div class=\"callout\"><p><strong>The Iron Law:</strong> Never allow an agent to refactor code without a passing test suite. If tests do not exist, writing characterization tests is Task #1.</p></div>"
      },
      "trace": {
        "title": "Refactoring Without Tests (Danger)",
        "caption": "Blind structural modification",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "The Test Suite as the Mandatory Safety Net"
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
              "step": "Untested Monolith"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Hidden Regression"
            }
          }
        ],
        "code": [
          "# Tracing The Test Suite as the Mandatory Safety Net",
          "def execute_flow():",
          "    # Why comprehensive automated tests are the mandator...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the refactoring safety sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Before initiating AI refactoring, developers must establish an automated {1} of tests that execute in {2} to catch regressions."
        ],
        "blanks": [
          {
            "a": [
              "safety net"
            ],
            "why": "Protection against unintended changes"
          },
          {
            "a": [
              "seconds"
            ],
            "why": "Fast local feedback loop"
          }
        ]
      },
      "win": "You understand the mandatory role of automated test suites as refactoring safety nets.",
      "nextTasks": [
        "Audit your project code and identify where the test suite as the mandatory safety net applies.",
        "Author a unit test or verification script exercising the test suite as the mandatory safety net.",
        "Document team architectural conventions regarding the test suite as the mandatory safety net."
      ],
      "primarySource": "Industry standards and best practices for The Test Suite as the Mandatory Safety Net.",
      "quiz": [
        {
          "q": "What must you do first if an agent is tasked with refactoring an untested legacy file?",
          "a": [
            "Instruct the agent to write characterization tests to lock down current behavior before modifying production code",
            "Start refactoring immediately",
            "Delete the file and start over",
            "Disable git version control"
          ],
          "c": 0,
          "why": "Characterization tests create the necessary safety net before structural changes begin."
        },
        {
          "q": "How does a fast test suite empower an AI agent during refactoring?",
          "a": [
            "The agent can run tests after every single micro-edit, verifying structural changes in real time",
            "It compiles code into assembly",
            "It makes the internet faster",
            "It reduces GPU temperature"
          ],
          "c": 0,
          "why": "Sub-second feedback loops keep the agent operating within verified green boundaries."
        },
        {
          "q": "What should an agent do if a test fails during a refactoring step?",
          "a": [
            "Revert the last change immediately to return to the known green state, then try a smaller step",
            "Change the test assertion so that it passes",
            "Ignore the test failure and proceed",
            "Delete the test suite"
          ],
          "c": 0,
          "why": "Immediate reverts maintain codebase stability and prevent compound debugging confusion."
        },
        {
          "q": "Can fixing bugs be combined with a refactoring task?",
          "a": [
            "No; refactoring strictly preserves observable behavior; bug fixes change behavior and belong in separate commits",
            "Yes; all edits should be combined into one massive commit",
            "Only if the bug is small",
            "Only in frontend code"
          ],
          "c": 0,
          "why": "Separating behavior-preserving refactors from bug fixes ensures clean, risk-free reviews."
        }
      ],
      "next": {
        "title": "Mechanical Refactorings: Renames, Modernizations, Type Additions",
        "desc": "Leverage AI for high-speed, mechanical codebase modernizations."
      }
    },
    {
      "n": 2,
      "id": "mechanical-refactorings",
      "title": "Mechanical Refactorings: Renames, Modernizations, Type Additions",
      "topic": "Mechanical Tasks",
      "anim": "Generic",
      "lede": "Using AI agents for mechanical refactorings: upgrading syntax, adding type hints, and bulk renaming.",
      "winShort": "You know how to leverage AI agents for fast, accurate mechanical refactorings.",
      "missionLink": "Mastering mechanical refactorings: renames, modernizations, type additions across modern software engineering",
      "sec1": {
        "title": "Core principles of Mechanical Refactorings: Renames, Modernizations, Type Additions",
        "content": "<p>Human software engineers hate mechanical busywork. Upgrading 80 files from Python 3.8 `Optional[Union[int, str]]` to Python 3.10+ `int | str | None` is tedious and mentally draining. Humans get sloppy, make typos, and burn valuable energy.</p>",
        "keyIdea": "Using AI agents for mechanical refactorings: upgrading syntax, adding type hints, and bulk renaming."
      },
      "predict": {
        "q": "Why are AI coding agents exceptionally well-suited for mechanical refactorings across codebases?",
        "a": [
          "Mechanical tasks follow repetitive, well-defined rules (like adding type hints or upgrading Python syntax) across many files",
          "Agents only understand mechanical engineering",
          "Human developers cannot rename variables",
          "Compilers forbid manual type annotations"
        ],
        "c": 0,
        "why": "Mechanical modernizations require high-volume consistency, which agents execute tirelessly without fatigue.",
        "prompt": "Why are AI coding agents exceptionally well-suited for mechanical refactorings across codebases?",
        "options": [
          "Mechanical tasks follow repetitive, well-defined rules (like adding type hints or upgrading Python syntax) across many files",
          "Agents only understand mechanical engineering",
          "Human developers cannot rename variables",
          "Compilers forbid manual type annotations"
        ],
        "answer": 0,
        "explanation": "Mechanical modernizations require high-volume consistency, which agents execute tirelessly without fatigue."
      },
      "sec2": {
        "title": "Mechanical Modernization Pipeline",
        "content": "<p>For AI coding agents, however, <strong>mechanical refactoring is the sweet spot</strong>. Agents can execute repetitive, rule-based modernizations across entire modules with tireless precision:</p>"
      },
      "diagram": {
        "title": "Mechanical Modernization Pipeline",
        "caption": "Automating tedious syntax upgrades",
        "steps": [
          {
            "title": "1. Define Transformation",
            "lines": [
              "Replace Union[A, B] with A | B",
              "Add explicit return type hints"
            ]
          },
          {
            "title": "2. Agent Bulk Execution",
            "lines": [
              "Modifies 40 files consistently",
              "Tireless, uniform application"
            ]
          },
          {
            "title": "3. Automated Verification",
            "lines": [
              "Mypy type check passes",
              "Pytest suite passes 100%"
            ]
          }
        ],
        "boxes": [
          {
            "title": "1. Define Transformation",
            "lines": [
              "Replace Union[A, B] with A | B",
              "Add explicit return type hints"
            ]
          },
          {
            "title": "2. Agent Bulk Execution",
            "lines": [
              "Modifies 40 files consistently",
              "Tireless, uniform application"
            ]
          },
          {
            "title": "3. Automated Verification",
            "lines": [
              "Mypy type check passes",
              "Pytest suite passes 100%"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Human vs AI Refactoring Efficiency",
        "content": "<ul><li><strong>Syntax Modernization:</strong> Converting legacy string formatting (`%s` or `.format()`) to f-strings; updating dictionary merges to `|`.</li><li><strong>Adding Strict Type Annotations:</strong> Inferring types from function signatures, docstrings, and tests, and adding complete type hints across legacy modules.</li><li><strong>Consistent Renaming:</strong> Renaming legacy snake_case database columns or camelCase JavaScript variables across multi-file boundaries.</li><li><strong>Import Standardization:</strong> Converting relative imports to absolute imports or organizing imports cleanly.</li></ul><pre><code># The Mechanical Prompt:\n\"Perform a mechanical syntax modernization across all files in src/storage/:\n1. Upgrade all typing imports: replace `Optional[T]` with `T | None`.\n2. Upgrade all union types: replace `Union[A, B]` with `A | B`.\n3. Run `mypy src/storage/` and `pytest tests/test_storage.py` to verify zero regressions.\"</code></pre><div class=\"callout\"><p><strong>High Leverage:</strong> Use agents for the mechanical modernizations that you have been putting off for months. They will do in 15 minutes what would take you a weekend.</p></div>"
      },
      "trace": {
        "title": "Human vs AI Refactoring Efficiency",
        "caption": "Delegating the repetitive busywork",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Mechanical Refactorings: Renames, Modernizations, Type Additions"
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
              "step": "Human Developer"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "AI Agent"
            }
          }
        ],
        "code": [
          "# Tracing Mechanical Refactorings: Renames, Modernizations, Type Additions",
          "def execute_flow():",
          "    # Using AI agents for mechanical refactorings: upgra...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the mechanical refactoring sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "AI agents excel at mechanical refactorings like syntax modernizations and adding {1} annotations because they follow {2} rules tirelessly."
        ],
        "blanks": [
          {
            "a": [
              "type"
            ],
            "why": "Type hint signatures and contracts"
          },
          {
            "a": [
              "well-defined"
            ],
            "why": "Clear, rule-based transformations"
          }
        ]
      },
      "win": "You know how to leverage AI agents for fast, accurate mechanical refactorings.",
      "nextTasks": [
        "Audit your project code and identify where mechanical refactorings: renames, modernizations, type additions applies.",
        "Author a unit test or verification script exercising mechanical refactorings: renames, modernizations, type additions.",
        "Document team architectural conventions regarding mechanical refactorings: renames, modernizations, type additions."
      ],
      "primarySource": "Industry standards and best practices for Mechanical Refactorings: Renames, Modernizations, Type Additions.",
      "quiz": [
        {
          "q": "What is an example of a mechanical refactoring ideal for an AI agent?",
          "a": [
            "Converting legacy dictionary formatting to modern f-strings across an entire codebase",
            "Deciding the company's 3-year product strategy",
            "Negotiating vendor pricing with AWS",
            "Choosing a new company name"
          ],
          "c": 0,
          "why": "F-string modernization is a rule-based syntactic transformation across many files."
        },
        {
          "q": "How do you verify that a mechanical type-annotation refactoring did not break code?",
          "a": [
            "Run the static type checker (Mypy/TypeScript) and execute the automated test suite",
            "Ask the agent if it works",
            "Check the file size on disk",
            "Wait for users to complain"
          ],
          "c": 0,
          "why": "Type checkers and test suites provide objective verification of mechanical integrity."
        },
        {
          "q": "Why is running a linter after an AI mechanical refactoring essential?",
          "a": [
            "To ensure that formatting, indentation, and import order conform strictly to project style standards",
            "To compile Python into WebAssembly",
            "To reduce internet bills",
            "To turn off the terminal"
          ],
          "c": 0,
          "why": "Linters catch formatting anomalies and import inconsistencies automatically."
        },
        {
          "q": "What constraint should you provide when asking an agent to perform bulk renames?",
          "a": [
            "Update all call sites and test files simultaneously to prevent broken references",
            "Only rename functions in one file",
            "Never update imports",
            "Use random character strings"
          ],
          "c": 0,
          "why": "Renames must be applied across both definition and call sites to avoid runtime NameErrors."
        }
      ],
      "next": {
        "title": "Bulk Codemods and AST Transformations with AI",
        "desc": "Combine AST codemods with LLMs for scalable codebase refactorings."
      }
    },
    {
      "n": 3,
      "id": "bulk-codemods-ast-transforms",
      "title": "Bulk Codemods and AST Transformations with AI",
      "topic": "Codemods",
      "anim": "Generic",
      "lede": "Combining Abstract Syntax Tree (AST) tools (LibCST, jscodeshift) with LLM reasoning for massive codebase migrations.",
      "winShort": "You know how to combine AI agents with AST codemods for scalable codebase migrations.",
      "missionLink": "Mastering bulk codemods and ast transformations with ai across modern software engineering",
      "sec1": {
        "title": "Core principles of Bulk Codemods and AST Transformations with AI",
        "content": "<p>When migrating 500 files to a new framework version (e.g. React class components to hooks, or SQLAlchemy 1.4 to 2.0), raw text regex search-and-replace is a disaster. Regex doesn't know scope, comments, or nested expressions. It replaces strings inside comments and breaks code syntax.</p>",
        "keyIdea": "Combining Abstract Syntax Tree (AST) tools (LibCST, jscodeshift) with LLM reasoning for massive codebase migrations."
      },
      "predict": {
        "q": "Why is combining AST codemods with LLMs superior to using regex string search-and-replace for large migrations?",
        "a": [
          "AST tools understand the structural syntax tree of code, eliminating syntax breakage and false positive replacements",
          "Regex is illegal in commercial software",
          "AST tools run in the cloud",
          "Regex only works on HTML"
        ],
        "c": 0,
        "why": "AST tools operate on code structure rather than raw characters, making bulk transforms syntax-safe.",
        "prompt": "Why is combining AST codemods with LLMs superior to using regex string search-and-replace for large migrations?",
        "options": [
          "AST tools understand the structural syntax tree of code, eliminating syntax breakage and false positive replacements",
          "Regex is illegal in commercial software",
          "AST tools run in the cloud",
          "Regex only works on HTML"
        ],
        "answer": 0,
        "explanation": "AST tools operate on code structure rather than raw characters, making bulk transforms syntax-safe."
      },
      "sec2": {
        "title": "AST Codemod vs Regex Search-and-Replace",
        "content": "<p>The professional approach pairs <strong>AST Codemods with LLMs</strong>:</p>"
      },
      "diagram": {
        "title": "AST Codemod vs Regex Search-and-Replace",
        "caption": "Structural precision vs brittle string matching",
        "steps": [
          {
            "title": "Regex Search-and-Replace (Fragile)",
            "lines": [
              "Matches text inside strings & comments",
              "Breaks nested parenthesis & indentation",
              "High regression risk"
            ]
          },
          {
            "title": "AST Codemod (Syntax-Safe)",
            "lines": [
              "Parses code into abstract syntax tree",
              "Transforms specific AST nodes",
              "100% syntactically valid result"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Regex Search-and-Replace (Fragile)",
            "lines": [
              "Matches text inside strings & comments",
              "Breaks nested parenthesis & indentation",
              "High regression risk"
            ]
          },
          {
            "title": "AST Codemod (Syntax-Safe)",
            "lines": [
              "Parses code into abstract syntax tree",
              "Transforms specific AST nodes",
              "100% syntactically valid result"
            ]
          }
        ]
      },
      "sec3": {
        "title": "The Agent-Codemod Hybrid Workflow",
        "content": "<ul><li><strong>AST Codemod (Deterministic Machine):</strong> Uses libraries like `LibCST` (Python) or `jscodeshift` (JavaScript) to parse code into a syntax tree, rewrite nodes systematically, and preserve formatting.</li><li><strong>AI Agent (Semantic Helper):</strong> Writes the AST codemod script, inspects edge cases that the codemod couldn't handle, and fixes nuances that require semantic reasoning.</li></ul><pre><code># Prompting an Agent to Author a LibCST Codemod:\n\"Write a LibCST transformer script that rewrites all calls to `db.query(User).filter(...)`\ninto modern SQLAlchemy 2.0 `db.execute(select(User).where(...))`.\nEnsure comments and whitespace are preserved.\nTest the transformer against tests/test_fixtures.py before applying to src/.\"</code></pre><p>By having the agent write an AST codemod rather than editing 500 files by hand, you get 100% deterministic, repeatable transformations that run in seconds across your entire repository.</p><div class=\"callout\"><p><strong>The Scale Rule:</strong> If a refactoring affects more than 20 files, have the agent author an AST codemod script rather than editing files individually.</p></div>"
      },
      "trace": {
        "title": "The Agent-Codemod Hybrid Workflow",
        "caption": "Leveraging the strengths of both tools",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Bulk Codemods and AST Transformations with AI"
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
              "step": "1. Agent Writes Codemod"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "2. Run Across 500 Files"
            }
          },
          {
            "line": 3,
            "vars": {
              "step": "3. Agent Polishes Nuances"
            }
          }
        ],
        "code": [
          "# Tracing Bulk Codemods and AST Transformations with AI",
          "def execute_flow():",
          "    # Combining Abstract Syntax Tree (AST) tools (LibCST...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the codemod sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "AST codemods operate on the structural {1} of code, ensuring that bulk transformations preserve {2} validity."
        ],
        "blanks": [
          {
            "a": [
              "syntax tree"
            ],
            "why": "Abstract representation of code structure"
          },
          {
            "a": [
              "syntactic"
            ],
            "why": "Valid programming language grammar"
          }
        ]
      },
      "win": "You know how to combine AI agents with AST codemods for scalable codebase migrations.",
      "nextTasks": [
        "Audit your project code and identify where bulk codemods and ast transformations with ai applies.",
        "Author a unit test or verification script exercising bulk codemods and ast transformations with ai.",
        "Document team architectural conventions regarding bulk codemods and ast transformations with ai."
      ],
      "primarySource": "Industry standards and best practices for Bulk Codemods and AST Transformations with AI.",
      "quiz": [
        {
          "q": "What is an Abstract Syntax Tree (AST)?",
          "a": [
            "A tree representation of the abstract syntactic structure of source code written in a programming language",
            "A botanical diagram of fruit trees",
            "A database schema diagram",
            "A git commit network graph"
          ],
          "c": 0,
          "why": "An AST represents program structure hierarchically for compilers and analysis tools."
        },
        {
          "q": "What library is commonly used in the Python ecosystem for lossless syntax tree codemods?",
          "a": [
            "LibCST",
            "requests",
            "django",
            "numpy"
          ],
          "c": 0,
          "why": "LibCST parses and transforms Python syntax trees while preserving comments and whitespace."
        },
        {
          "q": "Why is having an agent write a codemod better than having it manually edit 500 files?",
          "a": [
            "A codemod is deterministic, fast, testable, and can be rerun repeatedly across branches",
            "It consumes 100x more tokens",
            "It deletes all git branches",
            "Manual editing is faster"
          ],
          "c": 0,
          "why": "Codemods execute in seconds across massive repositories with guaranteed structural consistency."
        },
        {
          "q": "How do you verify that an AST codemod script is safe before running it across the whole repo?",
          "a": [
            "Test the codemod on a representative fixture file and verify that the output compiles and passes tests",
            "Run it directly on production servers",
            "Delete the test suite",
            "Ask someone on Twitter"
          ],
          "c": 0,
          "why": "Testing codemods on isolated fixture files proves correctness before widespread execution."
        }
      ],
      "next": {
        "title": "Step-by-Step Monolith Decomposition",
        "desc": "Decompose large monolithic files into cohesive modular components."
      }
    },
    {
      "n": 4,
      "id": "step-by-step-monolith-decomposition",
      "title": "Step-by-Step Monolith Decomposition",
      "topic": "Monolith Decomposition",
      "anim": "Generic",
      "lede": "Decomposing 2,000-line god classes and monolithic files using safe, incremental slicing.",
      "winShort": "You know how to safely decompose monolithic files without breaking callers.",
      "missionLink": "Mastering step-by-step monolith decomposition across modern software engineering",
      "sec1": {
        "title": "Core principles of Step-by-Step Monolith Decomposition",
        "content": "<p>Every legacy project has one: the 3,000-line `god_service.py` file that handles billing, user onboarding, email dispatch, and database queries. Trying to prompt an agent with: <em>'Split this 3,000-line file into clean micro-modules'</em> is a guaranteed recipe for disaster.</p>",
        "keyIdea": "Decomposing 2,000-line god classes and monolithic files using safe, incremental slicing."
      },
      "predict": {
        "q": "What is the biggest risk when attempting to break up a 2,000-line monolithic file with an AI agent?",
        "a": [
          "Attempting a big-bang rewrite in one turn, resulting in dropped methods, missing imports, and broken references",
          "The agent's computer battery dying",
          "The file being locked by git",
          "Python running out of memory"
        ],
        "c": 0,
        "why": "Big-bang refactoring of massive files overwhelms context and drops critical logic.",
        "prompt": "What is the biggest risk when attempting to break up a 2,000-line monolithic file with an AI agent?",
        "options": [
          "Attempting a big-bang rewrite in one turn, resulting in dropped methods, missing imports, and broken references",
          "The agent's computer battery dying",
          "The file being locked by git",
          "Python running out of memory"
        ],
        "answer": 0,
        "explanation": "Big-bang refactoring of massive files overwhelms context and drops critical logic."
      },
      "sec2": {
        "title": "Incremental Slicing vs Big Bang",
        "content": "<p>The only safe way to decompose a monolith with AI is <strong>Step-by-Step Slicing</strong>:</p>"
      },
      "diagram": {
        "title": "Incremental Slicing vs Big Bang",
        "caption": "Safe extraction vs chaotic breakage",
        "steps": [
          {
            "title": "Big-Bang Extraction (Fails)",
            "lines": [
              "Move 20 functions across 8 files",
              "50 broken imports & syntax errors",
              "Impossible to debug"
            ]
          },
          {
            "title": "Incremental Slicing (Succeeds)",
            "lines": [
              "Extract 1 cohesive cluster",
              "Re-export from original file",
              "Tests pass green on every step"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Big-Bang Extraction (Fails)",
            "lines": [
              "Move 20 functions across 8 files",
              "50 broken imports & syntax errors",
              "Impossible to debug"
            ]
          },
          {
            "title": "Incremental Slicing (Succeeds)",
            "lines": [
              "Extract 1 cohesive cluster",
              "Re-export from original file",
              "Tests pass green on every step"
            ]
          }
        ]
      },
      "sec3": {
        "title": "The Re-Export Migration Seam",
        "content": "<ul><li><strong>Step 1: Identify One Cohesive Cluster:</strong> Find a self-contained group of helper functions (e.g. email notifications) with minimal external dependencies.</li><li><strong>Step 2: Extract to New Module:</strong> Create `src/services/notifications.py` and move the functions there.</li><li><strong>Step 3: Re-export from Monolith:</strong> In the monolith, import the functions from the new module (`from .notifications import send_email`). This preserves backward compatibility for all existing callers!</li><li><strong>Step 4: Verify Tests Pass:</strong> Run the test suite. If green, commit!</li><li><strong>Step 5: Repeat:</strong> Move on to the next cluster until the monolith is an empty shell.</li></ul><pre><code># The Backward-Compatible Re-Export Seam in god_service.py:\n# Instead of updating 50 caller files at once:\nfrom src.services.notifications import send_receipt_email # Re-exported!\n# Existing callers continue working seamlessly without breaking changes!</code></pre><div class=\"callout\"><p><strong>The Golden Seam:</strong> Re-exporting extracted symbols from the original file allows you to decompose a monolith without modifying 50 caller files simultaneously!</p></div>"
      },
      "trace": {
        "title": "The Re-Export Migration Seam",
        "caption": "Preserving backward compatibility during extraction",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Step-by-Step Monolith Decomposition"
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
              "step": "New Clean Module"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Monolith Re-Export"
            }
          },
          {
            "line": 3,
            "vars": {
              "step": "Safe Call Site Migration"
            }
          }
        ],
        "code": [
          "# Tracing Step-by-Step Monolith Decomposition",
          "def execute_flow():",
          "    # Decomposing 2,000-line god classes and monolithic ...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the monolith decomposition sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Safely decompose monolithic files by extracting one {1} cluster at a time and re-exporting symbols to maintain backward {2}."
        ],
        "blanks": [
          {
            "a": [
              "cohesive"
            ],
            "why": "Closely related group of functions"
          },
          {
            "a": [
              "compatibility"
            ],
            "why": "Ensuring existing callers don't break"
          }
        ]
      },
      "win": "You know how to safely decompose monolithic files without breaking callers.",
      "nextTasks": [
        "Audit your project code and identify where step-by-step monolith decomposition applies.",
        "Author a unit test or verification script exercising step-by-step monolith decomposition.",
        "Document team architectural conventions regarding step-by-step monolith decomposition."
      ],
      "primarySource": "Industry standards and best practices for Step-by-Step Monolith Decomposition.",
      "quiz": [
        {
          "q": "Why is re-exporting extracted functions from the original monolithic file so powerful during refactoring?",
          "a": [
            "Existing external callers continue to work without modification while internals are cleanly relocated",
            "It makes the file size zero bytes",
            "It speeds up Python imports by 10x",
            "It disables type checking"
          ],
          "c": 0,
          "why": "Re-exporting preserves caller compatibility, allowing extraction without massive multi-file ripple effects."
        },
        {
          "q": "How many functions should an agent extract in a single refactoring turn?",
          "a": [
            "A single cohesive cluster or class at a time, followed by immediate test verification",
            "All 200 functions at once",
            "Zero functions",
            "As many as can fit in RAM"
          ],
          "c": 0,
          "why": "Small, incremental steps keep changes manageable and verifiable."
        },
        {
          "q": "What should you do after each extraction step succeeds?",
          "a": [
            "Run tests and make an atomic git commit before proceeding to the next extraction",
            "Push immediately to production without tests",
            "Delete the git history",
            "Shut down the computer"
          ],
          "c": 0,
          "why": "Atomic commits create savepoints that can be reverted to if subsequent extractions encounter friction."
        },
        {
          "q": "When is a monolithic file officially considered decomposed?",
          "a": [
            "When its responsibilities have been cleanly relocated to cohesive domain modules and the original file is either deprecated or an orchestrator",
            "After 2 hours of editing",
            "When the file is renamed",
            "When it is converted to JSON"
          ],
          "c": 0,
          "why": "Decomposition is complete when domain responsibilities live in dedicated, cohesive modules."
        }
      ],
      "next": {
        "title": "Next Course: Managing Large AI Coding Projects",
        "desc": "Learn how to structure multi-day, multi-phase projects with AI coding agents."
      }
    },
    {
      "n": 5,
      "id": "extracting-services-modules",
      "title": "Extracting Services and Modules with Agent Guidance",
      "topic": "Service Extraction",
      "anim": "Generic",
      "lede": "Extracting services and repositories: defining interfaces, injecting dependencies, and maintaining encapsulation.",
      "winShort": "You know how to extract services and repositories using clean dependency injection seams.",
      "missionLink": "Mastering extracting services and modules with agent guidance across modern software engineering",
      "sec1": {
        "title": "Core principles of Extracting Services and Modules with Agent Guidance",
        "content": "<p>When codebases grow organically, application services often become tightly coupled to database queries, third-party APIs, and file systems. You cannot test your user registration logic without sending real emails or writing to a real database.</p>",
        "keyIdea": "Extracting services and repositories: defining interfaces, injecting dependencies, and maintaining encapsulation."
      },
      "predict": {
        "q": "What architectural pattern should you introduce when extracting database persistence logic from an application service?",
        "a": [
          "The Repository pattern, decoupling business workflows from SQL and ORM queries",
          "The Singleton pattern",
          "The Global Variable pattern",
          "The Raw Socket pattern"
        ],
        "c": 0,
        "why": "The Repository pattern decouples business services from storage mechanisms, enabling test isolation.",
        "prompt": "What architectural pattern should you introduce when extracting database persistence logic from an application service?",
        "options": [
          "The Repository pattern, decoupling business workflows from SQL and ORM queries",
          "The Singleton pattern",
          "The Global Variable pattern",
          "The Raw Socket pattern"
        ],
        "answer": 0,
        "explanation": "The Repository pattern decouples business services from storage mechanisms, enabling test isolation."
      },
      "sec2": {
        "title": "Service Extraction Flow",
        "content": "<p>Refactoring with an AI agent allows you to cleanly introduce <strong>Architectural Seams</strong>:</p>"
      },
      "diagram": {
        "title": "Service Extraction Flow",
        "caption": "Decoupling business logic from infrastructure",
        "steps": [
          {
            "title": "Coupled Monolith",
            "lines": [
              "Service contains raw SQL & SMTP calls",
              "Impossible to test in isolation"
            ]
          },
          {
            "title": "Define Interfaces",
            "lines": [
              "UserRepository & Mailer Protocols",
              "Abstract contracts in application layer"
            ]
          },
          {
            "title": "Decoupled Service",
            "lines": [
              "Receives dependencies in constructor",
              "Blazing fast, 100% testable in RAM"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Coupled Monolith",
            "lines": [
              "Service contains raw SQL & SMTP calls",
              "Impossible to test in isolation"
            ]
          },
          {
            "title": "Define Interfaces",
            "lines": [
              "UserRepository & Mailer Protocols",
              "Abstract contracts in application layer"
            ]
          },
          {
            "title": "Decoupled Service",
            "lines": [
              "Receives dependencies in constructor",
              "Blazing fast, 100% testable in RAM"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Dependency Injection Seam",
        "content": "<ul><li><strong>1. Extract Repository Interface:</strong> Define an abstract interface (`UserRepository`) specifying required queries (`get_by_id`, `save`).</li><li><strong>2. Implement Concrete Adapter:</strong> Move the raw SQLAlchemy or SQL queries into `PostgresUserRepository`.</li><li><strong>3. Inject Dependency:</strong> Pass the repository into the service constructor via Dependency Injection.</li></ul><pre><code># The Service Extraction Pattern\n# 1. Abstract Port (Interface)\nclass UserRepository(Protocol):\n    def get_by_email(self, email: str) -> User | None: ...\n    def save(self, user: User) -> None: ...\n\n# 2. Pure Application Service (Decoupled!)\nclass RegistrationService:\n    def __init__(self, users: UserRepository, mailer: Mailer):\n        self.users = users\n        self.mailer = mailer\n\n    def register(self, email: str, password: str) -> User:\n        if self.users.get_by_email(email):\n            raise UserAlreadyExistsError()\n        user = User(email=email, password_hash=hash(password))\n        self.users.save(user)\n        self.mailer.send_welcome(user)\n        return user</code></pre><div class=\"callout\"><p><strong>The Payoff:</strong> `RegistrationService` is now 100% decoupled from PostgreSQL and SendGrid! It can be tested in-memory in 2 milliseconds using mock or fake repositories.</p></div>"
      },
      "trace": {
        "title": "Dependency Injection Seam",
        "caption": "Plugging adapters into application core",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Extracting Services and Modules with Agent Guidance"
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
              "step": "Production Config"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Test Config"
            }
          }
        ],
        "code": [
          "# Tracing Extracting Services and Modules with Agent Guidance",
          "def execute_flow():",
          "    # Extracting services and repositories: defining int...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the service extraction sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Extracting services introduces abstract {1} to decouple business logic from database and network {2}."
        ],
        "blanks": [
          {
            "a": [
              "interfaces"
            ],
            "why": "Protocols and abstract contracts"
          },
          {
            "a": [
              "infrastructure"
            ],
            "why": "Databases, emailers, and external APIs"
          }
        ]
      },
      "win": "You know how to extract services and repositories using clean dependency injection seams.",
      "nextTasks": [
        "Audit your project code and identify where extracting services and modules with agent guidance applies.",
        "Author a unit test or verification script exercising extracting services and modules with agent guidance.",
        "Document team architectural conventions regarding extracting services and modules with agent guidance."
      ],
      "primarySource": "Industry standards and best practices for Extracting Services and Modules with Agent Guidance.",
      "quiz": [
        {
          "q": "What is the primary benefit of the Repository pattern in modern architecture?",
          "a": [
            "It isolates domain and application services from database query details, allowing easy testing with in-memory fakes",
            "It automatically backs up the database to tape",
            "It makes SQL queries run 10x faster",
            "It eliminates the need for primary keys"
          ],
          "c": 0,
          "why": "Repositories encapsulate persistence mechanisms behind clean domain interfaces."
        },
        {
          "q": "How does Dependency Injection facilitate unit testing of extracted services?",
          "a": [
            "Tests can pass fast in-memory fakes or mocks instead of real databases and network clients",
            "It compiles Python to machine code",
            "It removes the need for test assertions",
            "It turns off the internet"
          ],
          "c": 0,
          "why": "Passing dependencies into constructors makes swapping real implementations for test doubles trivial."
        },
        {
          "q": "What is a 'Protocol' in Python typing?",
          "a": [
            "A structural subtyping mechanism (duck typing) that defines an interface contract without requiring explicit inheritance",
            "An internet networking standard like HTTP",
            "A security encryption key",
            "A git commit hook"
          ],
          "c": 0,
          "why": "typing.Protocol enables clean interface definitions matching Go and TypeScript interfaces."
        },
        {
          "q": "What should an agent do when extracting a service from an existing controller?",
          "a": [
            "Move the business rules to the new service and leave the controller responsible only for HTTP request parsing and response formatting",
            "Delete the controller",
            "Move all HTML into the service",
            "Create a new database table"
          ],
          "c": 0,
          "why": "Controllers should handle HTTP delivery concerns, delegating business orchestration to services."
        }
      ],
      "next": {
        "title": "Verifying Invariants Across Large Multi-File Diffs",
        "desc": "Maintain system invariants across extensive multi-file transformations."
      }
    },
    {
      "n": 6,
      "id": "verifying-invariants-multi-file-diffs",
      "title": "Verifying Invariants Across Large Multi-File Diffs",
      "topic": "Multi-File Verification",
      "anim": "Generic",
      "lede": "Auditing multi-file refactoring diffs to verify that global invariants and security rules were not compromised.",
      "winShort": "You know how to verify global invariants and call sites across large multi-file diffs.",
      "missionLink": "Mastering verifying invariants across large multi-file diffs across modern software engineering",
      "sec1": {
        "title": "Core principles of Verifying Invariants Across Large Multi-File Diffs",
        "content": "<p>Refactoring that spans multiple files is where AI coding agents shine—and where they introduce the most subtle bugs. An agent might cleanly update a function signature in `src/billing/service.py` and update 5 callers, but overlook a 6th caller buried in a background task.</p>",
        "keyIdea": "Auditing multi-file refactoring diffs to verify that global invariants and security rules were not compromised."
      },
      "predict": {
        "q": "What is a common risk when an agent performs a refactoring that touches 25 different files?",
        "a": [
          "The agent may update function signatures in some files while missing call sites in others, causing runtime TypeErrors",
          "The operating system running out of file handles",
          "The git branch becoming read-only",
          "All unit tests automatically deleting themselves"
        ],
        "c": 0,
        "why": "Incomplete multi-file refactoring leaves orphaned call sites that fail at runtime.",
        "prompt": "What is a common risk when an agent performs a refactoring that touches 25 different files?",
        "options": [
          "The agent may update function signatures in some files while missing call sites in others, causing runtime TypeErrors",
          "The operating system running out of file handles",
          "The git branch becoming read-only",
          "All unit tests automatically deleting themselves"
        ],
        "answer": 0,
        "explanation": "Incomplete multi-file refactoring leaves orphaned call sites that fail at runtime."
      },
      "sec2": {
        "title": "The Multi-File Verification Chain",
        "content": "<p>To verify that global invariants hold across large multi-file diffs, enforce the <strong>Three-Tier Verification Audit</strong>:</p>"
      },
      "diagram": {
        "title": "The Multi-File Verification Chain",
        "caption": "Three automated gates protecting system consistency",
        "steps": [
          {
            "title": "1. Static Type Check (Mypy/TS)",
            "lines": [
              "Scans all call sites across repo",
              "Catches mismatched parameter types"
            ]
          },
          {
            "title": "2. Linter & Dead Code (Ruff)",
            "lines": [
              "Catches orphaned imports & variables",
              "Ensures syntax cleanliness"
            ]
          },
          {
            "title": "3. Full Test Suite (Pytest)",
            "lines": [
              "Executes full regression suite",
              "Verifies behavioral preservation"
            ]
          }
        ],
        "boxes": [
          {
            "title": "1. Static Type Check (Mypy/TS)",
            "lines": [
              "Scans all call sites across repo",
              "Catches mismatched parameter types"
            ]
          },
          {
            "title": "2. Linter & Dead Code (Ruff)",
            "lines": [
              "Catches orphaned imports & variables",
              "Ensures syntax cleanliness"
            ]
          },
          {
            "title": "3. Full Test Suite (Pytest)",
            "lines": [
              "Executes full regression suite",
              "Verifies behavioral preservation"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Orphaned Call Site Trap",
        "content": "<ul><li><strong>1. Whole-Project Static Type Check:</strong> Run `mypy src/` or `tsc --noEmit`. Static type checking analyzes the entire call graph, instantly catching any call site with outdated argument counts or types.</li><li><strong>2. Whole-Project Lint & Symbol Check:</strong> Run `ruff check src/` to ensure no unused imports or undefined variable references remain.</li><li><strong>3. Full Test Suite Execution:</strong> Execute the complete unit and integration test suite, not just the test file closest to the edit.</li></ul><pre><code># The Multi-File Verification Command Chain:\n$ mypy src/ tests/               # 1. Mathematical type check across all call sites\n$ ruff check src/ tests/         # 2. Syntax, dead imports, and naming check\n$ pytest                          # 3. Full behavioral test suite\n# ONLY when all 3 pass with code 0 is the multi-file diff approved!</code></pre><div class=\"callout\"><p><strong>The Golden Verification:</strong> Never rely on human visual review alone for a 20-file diff. Whole-project type checking is your mathematical proof of consistency.</p></div>"
      },
      "trace": {
        "title": "Orphaned Call Site Trap",
        "caption": "The danger of partial multi-file edits",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Verifying Invariants Across Large Multi-File Diffs"
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
              "step": "Agent Updates Signature"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Overlooked Background Task"
            }
          },
          {
            "line": 3,
            "vars": {
              "step": "Caught by Mypy"
            }
          }
        ],
        "code": [
          "# Tracing Verifying Invariants Across Large Multi-File Diffs",
          "def execute_flow():",
          "    # Auditing multi-file refactoring diffs to verify th...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the multi-file verification sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Large multi-file diffs must be verified using whole-project {1} checking to prove that all call {2} match updated signatures."
        ],
        "blanks": [
          {
            "a": [
              "type"
            ],
            "why": "Static type analysis like Mypy"
          },
          {
            "a": [
              "sites"
            ],
            "why": "Locations where functions are invoked"
          }
        ]
      },
      "win": "You know how to verify global invariants and call sites across large multi-file diffs.",
      "nextTasks": [
        "Audit your project code and identify where verifying invariants across large multi-file diffs applies.",
        "Author a unit test or verification script exercising verifying invariants across large multi-file diffs.",
        "Document team architectural conventions regarding verifying invariants across large multi-file diffs."
      ],
      "primarySource": "Industry standards and best practices for Verifying Invariants Across Large Multi-File Diffs.",
      "quiz": [
        {
          "q": "Why is whole-project static type checking essential after an agent alters a function signature?",
          "a": [
            "It traverses the entire codebase to mathematically verify that every single caller passes the correct arguments",
            "It compiles Python into machine code",
            "It reduces repository size",
            "It makes unit tests run in parallel"
          ],
          "c": 0,
          "why": "Type checkers inspect the complete call graph to catch mismatched parameters across all files."
        },
        {
          "q": "What happens if an engineer only runs the test file closest to the modified file during a large refactor?",
          "a": [
            "Unrelated modules that depend on the modified code may be broken without being tested, leading to production outages",
            "The test runner crashes",
            "The code becomes read-only",
            "Git refuses to commit"
          ],
          "c": 0,
          "why": "Cross-module regressions are only caught by running the full test suite or dependent tests."
        },
        {
          "q": "How does git diff inspection help verify multi-file refactoring?",
          "a": [
            "It allows the reviewer to verify that only intended files were modified and no unexpected files were touched by the agent",
            "It converts code to HTML",
            "It encrypts the commit",
            "It runs tests automatically"
          ],
          "c": 0,
          "why": "Inspecting git diff ensures the agent did not make rogue or unintended modifications outside task scope."
        },
        {
          "q": "What should you do if Mypy reports 15 errors after a multi-file refactoring diff?",
          "a": [
            "Feed the exact Mypy error list back to the agent and instruct it to update the remaining call sites until Mypy passes",
            "Disable Mypy in CI",
            "Ignore the type errors and merge",
            "Delete the modified files"
          ],
          "c": 0,
          "why": "Providing the compiler error list directs the agent to fix the remaining call sites systematically."
        }
      ],
      "next": {
        "title": "Rollback Strategies and Atomic Commit Discipline",
        "desc": "Master safe commit habits that make any refactoring instantly reversible."
      }
    },
    {
      "n": 7,
      "id": "rollback-strategies-atomic-commits",
      "title": "Rollback Strategies and Atomic Commit Discipline",
      "topic": "Rollback Discipline",
      "anim": "Generic",
      "lede": "Practicing atomic commit discipline: small revertible checkpoints, git hygiene, and instant rollback safety.",
      "winShort": "You know how to practice atomic commit discipline and maintain rollback safety.",
      "missionLink": "Mastering rollback strategies and atomic commit discipline across modern software engineering",
      "sec1": {
        "title": "Core principles of Rollback Strategies and Atomic Commit Discipline",
        "content": "<p>When refactoring with AI agents, velocity is high. If you let an agent work for two hours without committing, you end up with a sprawling 40-file dirty working tree. If step 18 introduces a subtle bug, you cannot easily revert step 18 without discarding all 17 successful steps!</p>",
        "keyIdea": "Practicing atomic commit discipline: small revertible checkpoints, git hygiene, and instant rollback safety."
      },
      "predict": {
        "q": "What is an 'Atomic Commit' in git refactoring workflows?",
        "a": [
          "A single commit that contains one complete, independent, and verified change that leaves the codebase in a working, passing state",
          "A commit written in nuclear energy laboratories",
          "A commit that contains 10,000 files",
          "A commit that breaks the build intentionally"
        ],
        "c": 0,
        "why": "Atomic commits represent self-contained, working increments that can be safely reviewed or reverted.",
        "prompt": "What is an 'Atomic Commit' in git refactoring workflows?",
        "options": [
          "A single commit that contains one complete, independent, and verified change that leaves the codebase in a working, passing state",
          "A commit written in nuclear energy laboratories",
          "A commit that contains 10,000 files",
          "A commit that breaks the build intentionally"
        ],
        "answer": 0,
        "explanation": "Atomic commits represent self-contained, working increments that can be safely reviewed or reverted."
      },
      "sec2": {
        "title": "Atomic Commit Progression",
        "content": "<p>The professional defense is <strong>Atomic Commit Discipline</strong>:</p>"
      },
      "diagram": {
        "title": "Atomic Commit Progression",
        "caption": "Small, verifiable, independent steps",
        "steps": [
          {
            "title": "Commit 1 (Green)",
            "lines": [
              "Characterization tests added",
              "Zero production changes"
            ]
          },
          {
            "title": "Commit 2 (Green)",
            "lines": [
              "Extract TaxService helper",
              "Tests pass 100%"
            ]
          },
          {
            "title": "Commit 3 (Green)",
            "lines": [
              "Introduce Money Value Object",
              "Tests pass 100%"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Commit 1 (Green)",
            "lines": [
              "Characterization tests added",
              "Zero production changes"
            ]
          },
          {
            "title": "Commit 2 (Green)",
            "lines": [
              "Extract TaxService helper",
              "Tests pass 100%"
            ]
          },
          {
            "title": "Commit 3 (Green)",
            "lines": [
              "Introduce Money Value Object",
              "Tests pass 100%"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Instant Revert Safety",
        "content": "<ul><li><strong>One Logical Change Per Commit:</strong> Commit immediately after each successful micro-refactor (e.g. <em>'Extract calculate_discount to helper'</em>).</li><li><strong>Always Green on Commit:</strong> Every single commit in your git history must compile and pass tests 100%. Never commit broken code.</li><li><strong>Instant Rollback Safety:</strong> If an experimental refactoring step fails or leads to a dead end, you can run `git reset --hard HEAD` and return to a pristine green state in 0.5 seconds.</li></ul><pre><code># The Atomic Commit Chain during Refactoring:\nCommit 1: 'test(billing): Add characterization tests for invoice calculation' (Green)\nCommit 2: 'refactor(billing): Extract tax calculation to TaxService' (Green)\nCommit 3: 'refactor(billing): Replace primitive float currency with Money Value Object' (Green)\nCommit 4: 'style(billing): Upgrade typing to Python 3.12 syntax' (Green)</code></pre><p>Notice that every commit tells a clear story, preserves green tests, and can be individually git-reverted if an unforeseen problem emerges in production.</p><div class=\"callout\"><p><strong>The Revert Muscle:</strong> Don't be afraid to revert! Throwing away 5 minutes of broken agent exploration is vastly cheaper than spending 45 minutes trying to untangle a messy diff.</p></div>"
      },
      "trace": {
        "title": "Instant Revert Safety",
        "caption": "Zero-cost rollback on dead ends",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Rollback Strategies and Atomic Commit Discipline"
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
              "step": "Step 4 Fails"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "git reset --hard"
            }
          },
          {
            "line": 3,
            "vars": {
              "step": "Fresh Attempt"
            }
          }
        ],
        "code": [
          "# Tracing Rollback Strategies and Atomic Commit Discipline",
          "def execute_flow():",
          "    # Practicing atomic commit discipline: small reverti...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the atomic commit sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Atomic commit discipline ensures that every git commit is a self-contained, {1} increment that leaves tests {2}."
        ],
        "blanks": [
          {
            "a": [
              "revertible"
            ],
            "why": "Can be safely rolled back"
          },
          {
            "a": [
              "green"
            ],
            "why": "Passing 100% without failures"
          }
        ]
      },
      "win": "You know how to practice atomic commit discipline and maintain rollback safety.",
      "nextTasks": [
        "Audit your project code and identify where rollback strategies and atomic commit discipline applies.",
        "Author a unit test or verification script exercising rollback strategies and atomic commit discipline.",
        "Document team architectural conventions regarding rollback strategies and atomic commit discipline."
      ],
      "primarySource": "Industry standards and best practices for Rollback Strategies and Atomic Commit Discipline.",
      "quiz": [
        {
          "q": "What is the primary advantage of making frequent atomic commits during an AI refactoring session?",
          "a": [
            "You can instantly revert any failed experimental step without losing previously verified progress",
            "It uses more hard drive space",
            "It prevents other developers from pulling code",
            "It reduces developer salaries"
          ],
          "c": 0,
          "why": "Atomic checkpoints isolate failures, allowing instant rollback to the last known good state."
        },
        {
          "q": "What must be true of every commit in an atomic refactoring chain?",
          "a": [
            "The entire test suite and linter must pass with zero errors, keeping git history deployable at any point",
            "It must contain at least 1,000 lines of code",
            "It must be written on a weekend",
            "It must change the database password"
          ],
          "c": 0,
          "why": "Every commit should leave the codebase in a healthy, deployable state."
        },
        {
          "q": "Why is 'git bisect' significantly more effective when teams follow atomic commit discipline?",
          "a": [
            "Bisect can pinpoint the exact single logical change that introduced a regression rather than a massive 40-file omnibus blob",
            "Bisect runs on quantum computers",
            "Bisect only works on atomic commits",
            "Bisect deletes commits automatically"
          ],
          "c": 0,
          "why": "Small, single-purpose commits make isolating the cause of defects straightforward during bisection."
        },
        {
          "q": "What should a developer do if an agent spends 20 minutes making edits that result in broken tests across 15 files?",
          "a": [
            "Discard the uncommitted changes with git reset/checkout and prompt the agent to take a smaller, simpler approach",
            "Merge the broken changes and push to production",
            "Delete the git repository",
            "Format the hard drive"
          ],
          "c": 0,
          "why": "Discarding tangled changes is fast and clean; restarting with a smaller step restores momentum."
        }
      ],
      "next": {
        "title": "Post-Refactor Performance and Regression Audits",
        "desc": "Verify that refactored code preserved performance and latency characteristics."
      }
    },
    {
      "n": 8,
      "id": "post-refactor-performance-audits",
      "title": "Post-Refactor Performance and Regression Audits",
      "topic": "Performance Audits",
      "anim": "Generic",
      "lede": "Auditing refactored code for unintended performance regressions: N+1 queries, memory bloat, and algorithmic complexity.",
      "winShort": "You have completed the AI-Assisted Refactoring course.",
      "missionLink": "Mastering post-refactor performance and regression audits across modern software engineering",
      "sec1": {
        "title": "Core principles of Post-Refactor Performance and Regression Audits",
        "content": "<p>A refactoring can pass 100% of unit tests and still destroy production performance. When an agent refactors raw SQL queries into clean domain models or ORM classes, it frequently introduces subtle <strong>performance regressions</strong>.</p>",
        "keyIdea": "Auditing refactored code for unintended performance regressions: N+1 queries, memory bloat, and algorithmic complexity."
      },
      "predict": {
        "q": "What common performance regression is frequently introduced during AI-assisted database refactorings?",
        "a": [
          "The N+1 query problem, where accessing extracted properties inside a loop triggers dozens of individual SQL queries",
          "The CPU fan stopping",
          "The hard drive becoming read-only",
          "The database automatically deleting indexes"
        ],
        "c": 0,
        "why": "Extracted object models often introduce lazy-loading N+1 query loops that severely degrade database throughput.",
        "prompt": "What common performance regression is frequently introduced during AI-assisted database refactorings?",
        "options": [
          "The N+1 query problem, where accessing extracted properties inside a loop triggers dozens of individual SQL queries",
          "The CPU fan stopping",
          "The hard drive becoming read-only",
          "The database automatically deleting indexes"
        ],
        "answer": 0,
        "explanation": "Extracted object models often introduce lazy-loading N+1 query loops that severely degrade database throughput."
      },
      "sec2": {
        "title": "The N+1 Performance Regression",
        "content": "<p>Common post-refactor performance regressions include:</p>"
      },
      "diagram": {
        "title": "The N+1 Performance Regression",
        "caption": "How clean abstractions can hide database explosions",
        "steps": [
          {
            "title": "Original Raw SQL",
            "lines": [
              "1 query with JOIN",
              "Fetches 100 users + orders in 12ms"
            ]
          },
          {
            "title": "Refactored Clean Model",
            "lines": [
              "Clean user.orders property",
              "Fires 1 query per user (101 queries!)",
              "Latency explodes to 850ms (Regression!)"
            ]
          },
          {
            "title": "Audited Fix",
            "lines": [
              "Add eager loading (joinedload)",
              "Restores 1 query, keeps clean model"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Original Raw SQL",
            "lines": [
              "1 query with JOIN",
              "Fetches 100 users + orders in 12ms"
            ]
          },
          {
            "title": "Refactored Clean Model",
            "lines": [
              "Clean user.orders property",
              "Fires 1 query per user (101 queries!)",
              "Latency explodes to 850ms (Regression!)"
            ]
          },
          {
            "title": "Audited Fix",
            "lines": [
              "Add eager loading (joinedload)",
              "Restores 1 query, keeps clean model"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Post-Refactor Verification Gates",
        "content": "<ul><li><strong>N+1 Database Queries:</strong> Moving property access into a helper method called inside a loop, causing 100 SQL queries instead of 1 `JOIN` query.</li><li><strong>Memory Bloat from Full Materialization:</strong> Replacing a memory-efficient generator or streaming query with a massive `list()` allocation in RAM.</li><li><strong>Algorithmic Complexity Degradation:</strong> Replacing an $O(1)$ dictionary lookup with an $O(N)$ list search inside a nested loop ($O(N^2)$ overall).</li></ul><pre><code># The Post-Refactor Audit Checklist:\n1. QUERY COUNT AUDIT: Verify that query count did not jump from 1 to N+1.\n   (In pytest: use `django_assert_num_queries` or SQLAlchemy event listeners).\n2. BENCHMARK LATENCY: Run `pytest-benchmark` against core calculation loops.\n3. MEMORY PROFILING: Verify that batch processing still streams without RAM spikes.</code></pre><p>Refactoring is only truly complete when the code is cleaner, tests are green, <strong>and performance is equal to or better than the original baseline</strong>.</p><div class=\"callout\"><p><strong>The Final Metric:</strong> Clean code that takes 10 seconds to respond is not an improvement. Always verify that structural elegance did not sacrifice operational performance.</p></div>"
      },
      "trace": {
        "title": "Post-Refactor Verification Gates",
        "caption": "The complete definition of done",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Post-Refactor Performance and Regression Audits"
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
              "step": "1. Tests Pass 100%"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "2. Types & Linters Pass"
            }
          },
          {
            "line": 3,
            "vars": {
              "step": "3. Performance Audited"
            }
          }
        ],
        "code": [
          "# Tracing Post-Refactor Performance and Regression Audits",
          "def execute_flow():",
          "    # Auditing refactored code for unintended performanc...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the performance audit sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Post-refactor audits verify that structural improvements did not introduce unintended performance regressions like {1} queries or {2} bloat."
        ],
        "blanks": [
          {
            "a": [
              "N+1"
            ],
            "why": "Looping query anti-pattern"
          },
          {
            "a": [
              "memory"
            ],
            "why": "RAM consumption and allocation"
          }
        ]
      },
      "win": "You have completed the AI-Assisted Refactoring course.",
      "nextTasks": [
        "Audit your project code and identify where post-refactor performance and regression audits applies.",
        "Author a unit test or verification script exercising post-refactor performance and regression audits.",
        "Document team architectural conventions regarding post-refactor performance and regression audits."
      ],
      "primarySource": "Industry standards and best practices for Post-Refactor Performance and Regression Audits.",
      "quiz": [
        {
          "q": "What is the N+1 query problem?",
          "a": [
            "Executing one initial query to fetch parent records, followed by N separate queries inside a loop to fetch related child records",
            "A math equation in quantum mechanics",
            "A test that takes N+1 seconds to run",
            "A git branch naming convention"
          ],
          "c": 0,
          "why": "N+1 queries flood the database with network round-trips, severely degrading latency."
        },
        {
          "q": "How can you prevent N+1 query regressions during automated testing?",
          "a": [
            "Use query count assertion fixtures (e.g. assert_num_queries) in integration tests to enforce query caps",
            "Disable the database",
            "Run tests only on production",
            "Turn off SQL logging"
          ],
          "c": 0,
          "why": "Query count assertions fail CI immediately if a refactoring introduces unexpected queries."
        },
        {
          "q": "Why is replacing a streaming generator with a full list comprehension dangerous for large datasets?",
          "a": [
            "It forces the entire dataset into RAM at once, potentially causing Out-Of-Memory (OOM) crashes on large inputs",
            "List comprehensions are syntax errors in Python",
            "Generators run slower on the CPU",
            "Lists cannot be iterated over"
          ],
          "c": 0,
          "why": "Materializing large datasets in memory risks server crashes under high data volume."
        },
        {
          "q": "What is the final milestone in a successful AI-assisted refactoring workflow?",
          "a": [
            "Passing all tests, satisfying static analysis, verifying performance metrics, and creating clean atomic commits",
            "Deleting the git repository",
            "Pushing to production without review",
            "Closing all issue tickets without testing"
          ],
          "c": 0,
          "why": "Comprehensive verification across behavior, types, and performance proves true refactoring success."
        }
      ],
      "next": {
        "title": "Next Course: Managing Large AI Coding Projects",
        "desc": "Learn how to orchestrate multi-day, multi-phase projects with AI coding agents."
      }
    }
  ]
};

"use strict";

module.exports = {
  "id": "ai-generated-architecture",
  "title": "Working With AI-Generated Architecture",
  "num": 57,
  "emoji": "🏗️",
  "desc": "Keeping generated structure coherent over time: boundaries, naming, and stopping the drift.",
  "topics": [
    "Architecture",
    "Drift",
    "Clean Architecture",
    "Module Boundaries",
    "Strict Schemas",
    "Domain Purity",
    "Hardening",
    "Fitness Functions"
  ],
  "mission": "# Mission — Working With AI-Generated Architecture\n\nPreserve architectural integrity in the age of rapid AI generation. Prevent drift, enforce clean inward dependency directions, avoid sprawling helper duplication, mandate strict schemas with extra='forbid', isolate pure domain models, harden prototypes into production assets, and write automated architectural fitness functions.",
  "notes": "# Notes — Working With AI-Generated Architecture\n\nAI optimizes locally; human architects must govern globally. Enforce boundaries in CI with mathematical certainty.",
  "resources": "# Resources — Working With AI-Generated Architecture\n\n- Robert C. Martin, *Clean Architecture: A Craftsman's Guide*\n- Neal Ford & Rebecca Parsons, *Building Evolutionary Architectures*\n- Eric Evans, *Domain-Driven Design: Tackling Complexity in the Heart of Software*",
  "glossaryGroups": [
    {
      "id": "drift",
      "title": "Drift & Boundaries",
      "terms": [
        {
          "term": "Architectural Drift",
          "def": "The gradual erosion of clean system design caused by accumulated local shortcuts and inconsistent patterns.",
          "lesson": 1,
          "tags": [
            "architecture",
            "quality"
          ]
        },
        {
          "term": "Inward Dependency Rule",
          "def": "The principle that source code dependencies must point inward toward business domain logic, never outward.",
          "lesson": 2,
          "tags": [
            "architecture",
            "clean"
          ]
        },
        {
          "term": "Layer Contamination",
          "def": "The anti-pattern of importing infrastructure or delivery libraries directly into core domain entities.",
          "lesson": 2,
          "tags": [
            "architecture",
            "smells"
          ]
        }
      ]
    },
    {
      "id": "schemas",
      "title": "Schemas & Purity",
      "terms": [
        {
          "term": "Schema Discipline",
          "def": "Enforcing strict, strongly typed data contracts (Pydantic, Zod) to validate data shapes at system boundaries.",
          "lesson": 4,
          "tags": [
            "contracts",
            "types"
          ]
        },
        {
          "term": "Pure Domain Model",
          "def": "A business entity implemented with vanilla language constructs, isolated completely from databases and web frameworks.",
          "lesson": 5,
          "tags": [
            "architecture",
            "domain"
          ]
        },
        {
          "term": "Extra Forbid",
          "def": "A schema validation setting that rejects unexpected or hallucinated fields with an immediate error.",
          "lesson": 4,
          "tags": [
            "pydantic",
            "validation"
          ]
        }
      ]
    },
    {
      "id": "hardening",
      "title": "Production Hardening",
      "terms": [
        {
          "term": "Happy-Path Myopia",
          "def": "The tendency of prototypes to handle ideal scenarios while failing on network timeouts, bad inputs, or concurrency.",
          "lesson": 6,
          "tags": [
            "reliability",
            "prototypes"
          ]
        },
        {
          "term": "Idempotency",
          "def": "The property of an operation producing the exact same result even if invoked multiple times with identical arguments.",
          "lesson": 6,
          "tags": [
            "api",
            "reliability"
          ]
        },
        {
          "term": "Structured Logging",
          "def": "Emitting diagnostic logs as structured JSON key-value pairs to enable automated filtering and querying.",
          "lesson": 6,
          "tags": [
            "observability",
            "devops"
          ]
        }
      ]
    },
    {
      "id": "governance",
      "title": "Fitness & Maintainability",
      "terms": [
        {
          "term": "Architectural Fitness Function",
          "def": "An automated test or check in CI verifying that code adheres to defined structural and dependency invariants.",
          "lesson": 7,
          "tags": [
            "ci",
            "architecture"
          ]
        },
        {
          "term": "Circular Dependency",
          "def": "An anti-pattern where two or more modules depend directly or indirectly upon each other, tangling architecture.",
          "lesson": 7,
          "tags": [
            "architecture",
            "smells"
          ]
        },
        {
          "term": "Sustainable Velocity",
          "def": "The engineering capability to ship software rapidly and reliably year after year without accumulating crippling debt.",
          "lesson": 8,
          "tags": [
            "culture",
            "craft"
          ]
        }
      ]
    }
  ],
  "cheatsheetSections": [
    {
      "title": "Clean Inward Dependency Rule",
      "label": "Architectural layer contract",
      "code": "# ALLOWED: Infrastructure -> Application -> Domain\n# FORBIDDEN: Domain importing SQLAlchemy, FastAPI, or Redis!\n# Rule: Domain models must be pure dataclasses / classes.",
      "lessonN": 2,
      "lessonSlug": "enforcing-module-boundaries",
      "lessonTitle": "Enforcing Module Boundaries and Dependency Directions"
    },
    {
      "title": "Strict Pydantic Contract",
      "label": "Guarding against hallucinated keys",
      "code": "from pydantic import BaseModel, ConfigDict, Field\n\nclass CreateOrderSchema(BaseModel):\n    model_config = ConfigDict(strict=True, extra='forbid')\n    sku: str = Field(min_length=3)\n    quantity: int = Field(gt=0)",
      "lessonN": 4,
      "lessonSlug": "schema-and-contract-discipline",
      "lessonTitle": "Schema and Contract Discipline"
    },
    {
      "title": "Automated Architectural Fitness Check",
      "label": "import-linter contract (.importlinter)",
      "code": "[importlinter:contract:1]\nname = Pure Domain Boundary\ntype = forbidden\nsource_modules = src.domain\nforbidden_modules = src.infrastructure, src.api, sqlalchemy",
      "lessonN": 7,
      "lessonSlug": "architectural-fitness-functions",
      "lessonTitle": "Architectural Fitness Functions and Linting"
    },
    {
      "title": "Production Hardening Checklist",
      "label": "Bridging prototype to production",
      "code": "1. TIMEOUTS: Ensure all HTTP calls have timeout=5.0.\n2. CONFIG: Move magic numbers to environment variables.\n3. LOGS: Emit structured JSON logs with request_id.\n4. ERRORS: Replace generic except with explicit handlers.",
      "lessonN": 6,
      "lessonSlug": "refactoring-prototypes-to-production",
      "lessonTitle": "Refactoring AI Prototyped Code into Production Shape"
    }
  ],
  "lessons": [
    {
      "n": 1,
      "id": "how-ai-introduces-drift",
      "title": "How AI Agents Introduce Architectural Drift",
      "topic": "Architectural Drift",
      "anim": "Generic",
      "lede": "Why AI agents introduce subtle architectural drift: copy-pasting patterns, creating sprawling helpers, and bypassing domain models.",
      "winShort": "You understand the causes and risks of AI-induced architectural drift.",
      "missionLink": "Mastering how ai agents introduce architectural drift across modern software engineering",
      "sec1": {
        "title": "Core principles of How AI Agents Introduce Architectural Drift",
        "content": "<p>When an engineer asks an agent to add a feature, the agent's objective function is narrow: <em>make this specific feature work right now</em>. The agent does not inherently care about your 5-year maintainability vision, module boundaries, or domain purity.</p>",
        "keyIdea": "Why AI agents introduce subtle architectural drift: copy-pasting patterns, creating sprawling helpers, and bypassing domain models."
      },
      "predict": {
        "q": "Why do AI coding agents tend to cause architectural drift over time if left unconstrained?",
        "a": [
          "Agents optimize for solving the immediate prompt locally without global architectural awareness, taking expedient shortcuts",
          "Language models forget how to code after 3 turns",
          "Compilers randomly shuffle directories",
          "Git branches merge on their own"
        ],
        "c": 0,
        "why": "Agents solve the local problem by taking the shortest path, which often bypasses global design invariants.",
        "prompt": "Why do AI coding agents tend to cause architectural drift over time if left unconstrained?",
        "options": [
          "Agents optimize for solving the immediate prompt locally without global architectural awareness, taking expedient shortcuts",
          "Language models forget how to code after 3 turns",
          "Compilers randomly shuffle directories",
          "Git branches merge on their own"
        ],
        "answer": 0,
        "explanation": "Agents solve the local problem by taking the shortest path, which often bypasses global design invariants."
      },
      "sec2": {
        "title": "How Drift Accumulates",
        "content": "<p>This narrow focus leads to <strong>Architectural Drift</strong>:</p>"
      },
      "diagram": {
        "title": "How Drift Accumulates",
        "caption": "From small shortcuts to structural decay",
        "steps": [
          {
            "title": "Day 1: Direct SQL in Route",
            "lines": [
              "Saves 5 lines of code",
              "Bypasses domain service"
            ]
          },
          {
            "title": "Day 30: 15 Route SQLs",
            "lines": [
              "Domain model is bypassed",
              "Business rules duplicated in API layer"
            ]
          },
          {
            "title": "Day 90: Architectural Rot",
            "lines": [
              "Tightly coupled spaghetti",
              "Refactoring becomes terrifying"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Day 1: Direct SQL in Route",
            "lines": [
              "Saves 5 lines of code",
              "Bypasses domain service"
            ]
          },
          {
            "title": "Day 30: 15 Route SQLs",
            "lines": [
              "Domain model is bypassed",
              "Business rules duplicated in API layer"
            ]
          },
          {
            "title": "Day 90: Architectural Rot",
            "lines": [
              "Tightly coupled spaghetti",
              "Refactoring becomes terrifying"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Enforcing Boundary Disciplines",
        "content": "<ul><li><strong>Sprawling Utility Files:</strong> Creating `utils.py`, `helpers.py`, or `common.py` that become dumping grounds for random unrelated functions.</li><li><strong>Bypassing Domain Entities:</strong> Writing direct SQL queries or database updates inside route handlers rather than invoking domain services.</li><li><strong>Inconsistent Patterns:</strong> Using functional composition in one file and deep OOP inheritance in an adjacent file.</li></ul><pre><code># The Anatomy of Drift:\n# Prompt: \"Allow users to tag products\"\n# AGENT'S EXPEDIENT SHORTCUT (Drift):\n# Inside src/api/routes.py:\n@router.post(\"/products/{id}/tags\")\ndef add_tag(id: int, tag: str, db: Session = Depends(get_db)):\n    # Directly executing SQL inside an API route handler! Bypasses product domain model!\n    db.execute(\"INSERT INTO product_tags (product_id, tag) VALUES (:id, :tag)\", ...)\n\n# ARCHITECTURAL STANDARD (Clean):\n# The route handler delegates to the ProductDomainService, preserving layer purity.</code></pre><div class=\"callout\"><p><strong>The Law of Drift:</strong> Left unchecked, an AI agent will always choose local expedience over global architectural consistency. The human architect must provide the boundaries.</p></div>"
      },
      "trace": {
        "title": "Enforcing Boundary Disciplines",
        "caption": "Stopping drift at the interface",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "How AI Agents Introduce Architectural Drift"
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
              "step": "Expedient AI Choice"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Architectural Guardrail"
            }
          }
        ],
        "code": [
          "# Tracing How AI Agents Introduce Architectural Drift",
          "def execute_flow():",
          "    # Why AI agents introduce subtle architectural drift...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the architectural drift sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "AI agents introduce architectural drift by prioritizing {1} expedience over global {2} consistency."
        ],
        "blanks": [
          {
            "a": [
              "local"
            ],
            "why": "Immediate file or prompt scope"
          },
          {
            "a": [
              "system"
            ],
            "why": "Whole-codebase architecture"
          }
        ]
      },
      "win": "You understand the causes and risks of AI-induced architectural drift.",
      "nextTasks": [
        "Audit your project code and identify where how ai agents introduce architectural drift applies.",
        "Author a unit test or verification script exercising how ai agents introduce architectural drift.",
        "Document team architectural conventions regarding how ai agents introduce architectural drift."
      ],
      "primarySource": "Industry standards and best practices for How AI Agents Introduce Architectural Drift.",
      "quiz": [
        {
          "q": "What is 'Architectural Drift' in an AI-assisted codebase?",
          "a": [
            "The gradual divergence of the system from its intended clean design due to accumulated shortcuts and inconsistent patterns",
            "The movement of cloud servers across data centers",
            "The depreciation of computer hardware over time",
            "A feature in git version control"
          ],
          "c": 0,
          "why": "Drift is the erosion of clean system architecture caused by uncoordinated local shortcuts."
        },
        {
          "q": "Why is dumping shared code into a generic 'utils.py' file an architectural smell?",
          "a": [
            "It becomes an uncohesive dumping ground that hides dependencies and encourages chaotic coupling",
            "Python forbids files named utils",
            "It prevents code from being tested",
            "It uses too much memory"
          ],
          "c": 0,
          "why": "Generic utility files obscure domain cohesion and become tangled dependency hubs."
        },
        {
          "q": "How can an engineering team prevent agents from introducing architectural drift?",
          "a": [
            "Provide explicit architectural boundary rules, enforce ADRs, and use automated layer linters",
            "Tell the agent to be smart",
            "Stop writing software",
            "Only use one programming language"
          ],
          "c": 0,
          "why": "Firm boundary constraints and automated architectural linters keep agents aligned with system design."
        },
        {
          "q": "What layer should encapsulate core business logic in a clean architecture?",
          "a": [
            "The domain layer, completely decoupled from HTTP frameworks and database drivers",
            "The API route handlers",
            "The CSS stylesheets",
            "The Dockerfile"
          ],
          "c": 0,
          "why": "Pure domain models keep business rules isolated from delivery mechanisms and infrastructure."
        }
      ],
      "next": {
        "title": "Enforcing Module Boundaries and Dependency Directions",
        "desc": "Learn how to establish rigid dependency directions across application modules."
      }
    },
    {
      "n": 2,
      "id": "enforcing-module-boundaries",
      "title": "Enforcing Module Boundaries and Dependency Directions",
      "topic": "Module Boundaries",
      "anim": "Generic",
      "lede": "Establishing rigid dependency directions: domain core, application services, and infrastructure adapters.",
      "winShort": "You know how to enforce clean module boundaries and inward dependency directions.",
      "missionLink": "Mastering enforcing module boundaries and dependency directions across modern software engineering",
      "sec1": {
        "title": "Core principles of Enforcing Module Boundaries and Dependency Directions",
        "content": "<p>The foundational principle of durable software architecture is the <strong>Dependency Inversion Principle</strong>, formalized in Hexagonal (Ports & Adapters) and Clean Architecture: <em>high-level business policies must not depend on low-level implementation details. Both should depend on abstractions.</em></p>",
        "keyIdea": "Establishing rigid dependency directions: domain core, application services, and infrastructure adapters."
      },
      "predict": {
        "q": "In Clean / Hexagonal Architecture, which direction should module dependencies always point?",
        "a": [
          "Inward toward the core domain model; outer layers depend on inner layers, never the reverse",
          "Outward toward the database",
          "In circular loops between all files",
          "Dependencies should be random"
        ],
        "c": 0,
        "why": "The Dependency Rule states that source code dependencies must only point inward toward domain business rules.",
        "prompt": "In Clean / Hexagonal Architecture, which direction should module dependencies always point?",
        "options": [
          "Inward toward the core domain model; outer layers depend on inner layers, never the reverse",
          "Outward toward the database",
          "In circular loops between all files",
          "Dependencies should be random"
        ],
        "answer": 0,
        "explanation": "The Dependency Rule states that source code dependencies must only point inward toward domain business rules."
      },
      "sec2": {
        "title": "The Clean Architecture Rings",
        "content": "<p>When directing AI agents, you must enforce a strict <strong>Inward Dependency Direction</strong>:</p>"
      },
      "diagram": {
        "title": "The Clean Architecture Rings",
        "caption": "Enforcing inward-only dependency flow",
        "steps": [
          {
            "title": "Infrastructure (Outer)",
            "lines": [
              "FastAPI, PostgreSQL, Redis",
              "Depends inward on Application"
            ]
          },
          {
            "title": "Application Services",
            "lines": [
              "Use case orchestration",
              "Defines repository interfaces"
            ]
          },
          {
            "title": "Domain Core (Center)",
            "lines": [
              "Pure business rules & entities",
              "Zero external dependencies"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Infrastructure (Outer)",
            "lines": [
              "FastAPI, PostgreSQL, Redis",
              "Depends inward on Application"
            ]
          },
          {
            "title": "Application Services",
            "lines": [
              "Use case orchestration",
              "Defines repository interfaces"
            ]
          },
          {
            "title": "Domain Core (Center)",
            "lines": [
              "Pure business rules & entities",
              "Zero external dependencies"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Preventing Dependency Inversion Leaks",
        "content": "<ul><li><strong>Domain Core (Center):</strong> Entities, value objects, and business calculations. Zero imports from frameworks, databases, or HTTP libraries! Pure Python/TypeScript.</li><li><strong>Application Services (Middle):</strong> Orchestrates workflows, coordinates domain objects, and defines interfaces (Ports).</li><li><strong>Infrastructure & Adapters (Outer Ring):</strong> PostgreSQL repositories, FastAPI routes, Stripe clients, and Redis caches. These implement the interfaces defined by the inner layers.</li></ul><pre><code># The Inward Dependency Hierarchy:\n# [Outer] src/infrastructure/postgres_repo.py -> Implements UserRepository\n# [Middle] src/application/user_service.py     -> Calls UserRepository interface\n# [Center] src/domain/user.py                 -> PURE DOMAIN (No framework imports!)</code></pre><p>If an agent attempts to import `from src.infrastructure.db import Session` inside `src/domain/user.py`, reject the change immediately. That is an outward dependency leak!</p><div class=\"callout\"><p><strong>Boundary Constraint:</strong> State in your instructions: <em>'Files in src/domain/ must NEVER import from src/api/ or src/infrastructure/.'</em></p></div>"
      },
      "trace": {
        "title": "Preventing Dependency Inversion Leaks",
        "caption": "Stopping infrastructure from contaminating domain",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Enforcing Module Boundaries and Dependency Directions"
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
              "step": "Contaminated Domain"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Pure Domain Model"
            }
          }
        ],
        "code": [
          "# Tracing Enforcing Module Boundaries and Dependency Directions",
          "def execute_flow():",
          "    # Establishing rigid dependency directions: domain c...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the module boundary sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "In clean architecture, source code dependencies must point {1} toward the pure {2} model."
        ],
        "blanks": [
          {
            "a": [
              "inward"
            ],
            "why": "Toward the architectural center"
          },
          {
            "a": [
              "domain"
            ],
            "why": "Core business logic entities"
          }
        ]
      },
      "win": "You know how to enforce clean module boundaries and inward dependency directions.",
      "nextTasks": [
        "Audit your project code and identify where enforcing module boundaries and dependency directions applies.",
        "Author a unit test or verification script exercising enforcing module boundaries and dependency directions.",
        "Document team architectural conventions regarding enforcing module boundaries and dependency directions."
      ],
      "primarySource": "Industry standards and best practices for Enforcing Module Boundaries and Dependency Directions.",
      "quiz": [
        {
          "q": "Why must the domain layer contain zero imports from database or HTTP frameworks?",
          "a": [
            "To ensure business logic can be tested in memory without dependencies and remains immune to framework changes",
            "Because Python forbids importing external packages in classes",
            "To make files smaller on disk",
            "Because databases cannot store pure objects"
          ],
          "c": 0,
          "why": "Decoupled domain models are testable, reusable, and resilient against technology churn."
        },
        {
          "q": "What is a 'Port' in Hexagonal Architecture?",
          "a": [
            "An abstract interface or protocol defined by the application layer that infrastructure adapters must implement",
            "A TCP network socket like 8080",
            "A USB connector on a laptop",
            "A git remote URL"
          ],
          "c": 0,
          "why": "Ports are abstract interface seams that decouple core logic from external systems."
        },
        {
          "q": "What should an agent do when domain logic needs to persist data to a database?",
          "a": [
            "Call an abstract repository interface defined in the application layer, without knowing about SQL or ORMs",
            "Write a raw SQL query inside the domain entity",
            "Connect to PostgreSQL via a socket directly",
            "Save data to a text file in /tmp/"
          ],
          "c": 0,
          "why": "The domain communicates through abstract interfaces; concrete persistence lives in adapters."
        },
        {
          "q": "How can dependency direction rules be enforced automatically in CI?",
          "a": [
            "Using architecture linters like import-linter in Python or dependency-cruiser in JavaScript",
            "Running unit tests with -v",
            "Rebooting the build runner",
            "Checking git commit author names"
          ],
          "c": 0,
          "why": "Architecture linters analyze the import AST graph and fail CI if forbidden imports occur."
        }
      ],
      "next": {
        "title": "Avoiding Sprawling Single-Purpose Files and Duplication",
        "desc": "Prevent agents from creating fragmented single-function files."
      }
    },
    {
      "n": 3,
      "id": "avoiding-sprawling-files",
      "title": "Avoiding Sprawling Single-Purpose Files and Duplication",
      "topic": "File Organization",
      "anim": "Generic",
      "lede": "Guiding agents to maintain cohesive modules and prevent the sprawl of redundant single-purpose files.",
      "winShort": "You know how to prevent file sprawl and code duplication in AI-assisted codebases.",
      "missionLink": "Mastering avoiding sprawling single-purpose files and duplication across modern software engineering",
      "sec1": {
        "title": "Core principles of Avoiding Sprawling Single-Purpose Files and Duplication",
        "content": "<p>A notorious quirk of AI coding agents is <strong>file proliferation and duplication</strong>. Asked to format a date, an agent creates `date_formatter.py`. Two days later, asked to format an invoice date, it creates `format_utils.py`. A month later, your codebase has four different implementations of date formatting, each with subtle bug differences!</p>",
        "keyIdea": "Guiding agents to maintain cohesive modules and prevent the sprawl of redundant single-purpose files."
      },
      "predict": {
        "q": "Why do AI agents frequently create duplicate helper functions across different files?",
        "a": [
          "Agents lack a complete global index of all existing private utilities and recreate helpers rather than finding existing ones",
          "Agents are programmed to duplicate code",
          "Python requires every function to be in its own file",
          "Duplication makes code execute faster"
        ],
        "c": 0,
        "why": "Without explicit search or repo maps, agents take the easy route of re-implementing helper functions.",
        "prompt": "Why do AI agents frequently create duplicate helper functions across different files?",
        "options": [
          "Agents lack a complete global index of all existing private utilities and recreate helpers rather than finding existing ones",
          "Agents are programmed to duplicate code",
          "Python requires every function to be in its own file",
          "Duplication makes code execute faster"
        ],
        "answer": 0,
        "explanation": "Without explicit search or repo maps, agents take the easy route of re-implementing helper functions."
      },
      "sec2": {
        "title": "The Duplication Proliferation Trap",
        "content": "<p>To prevent sprawling file fragmentation and duplication:</p>"
      },
      "diagram": {
        "title": "The Duplication Proliferation Trap",
        "caption": "How uncoordinated agent sessions fragment code",
        "steps": [
          {
            "title": "Session 1",
            "lines": [
              "Creates format_date() in utils.py",
              "Solves immediate task"
            ]
          },
          {
            "title": "Session 2",
            "lines": [
              "Creates parse_date() in helpers.py",
              "Unaware of utils.py"
            ]
          },
          {
            "title": "Session 3",
            "lines": [
              "Creates date_tools.py",
              "Three divergent implementations"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Session 1",
            "lines": [
              "Creates format_date() in utils.py",
              "Solves immediate task"
            ]
          },
          {
            "title": "Session 2",
            "lines": [
              "Creates parse_date() in helpers.py",
              "Unaware of utils.py"
            ]
          },
          {
            "title": "Session 3",
            "lines": [
              "Creates date_tools.py",
              "Three divergent implementations"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Consolidated Cohesion",
        "content": "<ul><li><strong>Cohesive Domain Grouping:</strong> Group code by <em>feature or domain</em> (`src/billing/`), not by generic technical role (`src/helpers/`, `src/utils/`).</li><li><strong>Pre-Creation Search Rule:</strong> Mandate that before creating a new utility, the agent must grep for existing implementations: <em>'Search the codebase before writing new formatting or math helpers.'</em></li><li><strong>Consolidate and Refactor:</strong> When duplication is spotted, immediately instruct the agent to consolidate implementations into the canonical domain module.</li></ul><pre><code># The Duplication Trap vs Cohesive Domain Module\n# BAD: 3 sprawling utility files created by 3 different agent sessions:\n# - src/utils/date_helper.py\n# - src/common/formatting.py\n# - src/billing/helpers.py\n\n# GOOD: Consolidated canonical domain module:\n# - src/shared/dates.py (One authoritative implementation with comprehensive tests!)</code></pre><div class=\"callout\"><p><strong>The Golden Rule:</strong> Code should be grouped by business concept and cohesion. Resist the urge to let agents create single-function files that fragment your project layout.</p></div>"
      },
      "trace": {
        "title": "Consolidated Cohesion",
        "caption": "Unifying helpers into domain modules",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Avoiding Sprawling Single-Purpose Files and Duplication"
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
              "step": "Fragmented Sprawl"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Canonical Module"
            }
          }
        ],
        "code": [
          "# Tracing Avoiding Sprawling Single-Purpose Files and Duplication",
          "def execute_flow():",
          "    # Guiding agents to maintain cohesive modules and pr...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the file cohesion sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Prevent code duplication by grouping code into cohesive {1} modules and requiring agents to {2} before creating new helpers."
        ],
        "blanks": [
          {
            "a": [
              "domain"
            ],
            "why": "Business capability grouping"
          },
          {
            "a": [
              "search"
            ],
            "why": "Grep or scan for existing utilities"
          }
        ]
      },
      "win": "You know how to prevent file sprawl and code duplication in AI-assisted codebases.",
      "nextTasks": [
        "Audit your project code and identify where avoiding sprawling single-purpose files and duplication applies.",
        "Author a unit test or verification script exercising avoiding sprawling single-purpose files and duplication.",
        "Document team architectural conventions regarding avoiding sprawling single-purpose files and duplication."
      ],
      "primarySource": "Industry standards and best practices for Avoiding Sprawling Single-Purpose Files and Duplication.",
      "quiz": [
        {
          "q": "What is the primary danger of having multiple divergent implementations of a helper like date parsing?",
          "a": [
            "Different parts of the application handle edge cases inconsistently, creating subtle data corruption bugs",
            "It speeds up the database",
            "It reduces memory usage",
            "It prevents git commits"
          ],
          "c": 0,
          "why": "Divergent utilities handle boundary conditions differently, introducing subtle inconsistencies across features."
        },
        {
          "q": "Why is packaging code by feature (vertical slices) generally superior to packaging by technical layer?",
          "a": [
            "All code related to a single business capability lives together, making it easy for both humans and agents to locate",
            "It makes the compiler faster",
            "It reduces hard drive space",
            "It eliminates the need for unit tests"
          ],
          "c": 0,
          "why": "Feature packaging groups cooperating entities, routes, and services together cohesively."
        },
        {
          "q": "What instruction stops an agent from inventing redundant helper functions?",
          "a": [
            "Always check existing utilities in src/shared/ before creating any new helper functions or formats",
            "Never use functions",
            "Only write code in one giant file",
            "Use single-letter variable names"
          ],
          "c": 0,
          "why": "An explicit search requirement prompts the model to reuse existing codebase assets."
        },
        {
          "q": "When is creating a new file genuinely justified?",
          "a": [
            "When introducing a distinct, cohesive class, domain entity, or new architectural component with dedicated responsibilities",
            "Whenever a function is longer than 5 lines",
            "Every time a new git branch is created",
            "Only on Mondays"
          ],
          "c": 0,
          "why": "New files should represent cohesive, well-defined architectural responsibilities."
        }
      ],
      "next": {
        "title": "Schema and Contract Discipline",
        "desc": "Maintain strict API and database contracts across agent contributions."
      }
    },
    {
      "n": 4,
      "id": "schema-and-contract-discipline",
      "title": "Schema and Contract Discipline",
      "topic": "Contracts",
      "anim": "Generic",
      "lede": "Enforcing schema discipline: Pydantic, Zod, OpenAPI, and database migration contracts.",
      "winShort": "You know how to enforce schema and contract discipline across AI contributions.",
      "missionLink": "Mastering schema and contract discipline across modern software engineering",
      "sec1": {
        "title": "Core principles of Schema and Contract Discipline",
        "content": "<p>Dynamic, loosely typed dictionaries (`dict` in Python, plain `object` in JavaScript) are the enemy of AI-generated architecture. When data flows through a system as unstructured dictionaries, agents will guess property names: one file uses `user_id`, another uses `userId`, and a third uses `uid`.</p>",
        "keyIdea": "Enforcing schema discipline: Pydantic, Zod, OpenAPI, and database migration contracts."
      },
      "predict": {
        "q": "Why are strict schemas (like Pydantic v2 or Zod) essential when working with AI coding agents?",
        "a": [
          "They provide machine-enforceable contracts that validate data shapes at runtime and prevent silent property mutations",
          "They make Python run in web browsers",
          "They reduce database storage by 90%",
          "They turn off compiler warnings"
        ],
        "c": 0,
        "why": "Schemas provide concrete type and validation contracts that catch invalid data before it corrupts application state.",
        "prompt": "Why are strict schemas (like Pydantic v2 or Zod) essential when working with AI coding agents?",
        "options": [
          "They provide machine-enforceable contracts that validate data shapes at runtime and prevent silent property mutations",
          "They make Python run in web browsers",
          "They reduce database storage by 90%",
          "They turn off compiler warnings"
        ],
        "answer": 0,
        "explanation": "Schemas provide concrete type and validation contracts that catch invalid data before it corrupts application state."
      },
      "sec2": {
        "title": "Schema Discipline vs Raw Dictionaries",
        "content": "<p><strong>Schema Discipline</strong> anchors system contracts using strongly-typed data validation libraries (Pydantic, Zod, Marshmallow):</p>"
      },
      "diagram": {
        "title": "Schema Discipline vs Raw Dictionaries",
        "caption": "Contract enforcement across layers",
        "steps": [
          {
            "title": "Raw Dictionaries (Chaos)",
            "lines": [
              "{'user_id': 123} vs {'uid': 123}",
              "No validation, silent type mismatches",
              "Runtime crashes in downstream modules"
            ]
          },
          {
            "title": "Strict Schemas (Pydantic/Zod)",
            "lines": [
              "Explicit UserCreateRequest schema",
              "extra='forbid' blocks hallucinated fields",
              "100% deterministic type safety"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Raw Dictionaries (Chaos)",
            "lines": [
              "{'user_id': 123} vs {'uid': 123}",
              "No validation, silent type mismatches",
              "Runtime crashes in downstream modules"
            ]
          },
          {
            "title": "Strict Schemas (Pydantic/Zod)",
            "lines": [
              "Explicit UserCreateRequest schema",
              "extra='forbid' blocks hallucinated fields",
              "100% deterministic type safety"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Boundary Validation Gate",
        "content": "<ul><li><strong>Explicit Attributes & Types:</strong> Every field is declared with strict types, defaults, and validation constraints.</li><li><strong>Runtime Parsing & Validation:</strong> Invalid data is rejected at the API boundary before reaching domain logic.</li><li><strong>Automatic Serialization:</strong> Enforces consistent JSON keys and casing (e.g. `camelCase` aliases for frontend consumption).</li><li><strong>OpenAPI Documentation:</strong> Auto-generates living API schemas that client agents can inspect.</li></ul><pre><code># Strict Schema Contract (Pydantic v2)\nclass UserCreateRequest(BaseModel):\n    model_config = ConfigDict(strict=True, extra=\"forbid\")\n\n    email: EmailStr\n    full_name: str = Field(min_length=2, max_length=100)\n    tier: Literal[\"free\", \"pro\", \"enterprise\"] = \"free\"\n    # extra='forbid' guarantees agents cannot pass unapproved random fields!</code></pre><div class=\"callout\"><p><strong>Extra Protection:</strong> Use `extra=\"forbid\"` in Pydantic. This immediately raises a validation error if an agent attempts to pass hallucinated or unrecognized fields!</p></div>"
      },
      "trace": {
        "title": "Boundary Validation Gate",
        "caption": "Filtering data at the system boundary",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Schema and Contract Discipline"
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
              "step": "Incoming JSON"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Schema Validation"
            }
          },
          {
            "line": 3,
            "vars": {
              "step": "Clean Domain"
            }
          }
        ],
        "code": [
          "# Tracing Schema and Contract Discipline",
          "def execute_flow():",
          "    # Enforcing schema discipline: Pydantic, Zod, OpenAP...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the schema discipline sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Strict schemas provide machine-enforceable {1} that reject unexpected fields and guarantee {2} safety across modules."
        ],
        "blanks": [
          {
            "a": [
              "contracts"
            ],
            "why": "Explicit interface agreements"
          },
          {
            "a": [
              "type"
            ],
            "why": "Data shape and validation integrity"
          }
        ]
      },
      "win": "You know how to enforce schema and contract discipline across AI contributions.",
      "nextTasks": [
        "Audit your project code and identify where schema and contract discipline applies.",
        "Author a unit test or verification script exercising schema and contract discipline.",
        "Document team architectural conventions regarding schema and contract discipline."
      ],
      "primarySource": "Industry standards and best practices for Schema and Contract Discipline.",
      "quiz": [
        {
          "q": "What does the 'extra=\"forbid\"' setting do in a Pydantic model?",
          "a": [
            "It raises a validation error if the input payload contains any unexpected fields not declared in the schema",
            "It forbids other developers from editing the file",
            "It blocks network traffic",
            "It deletes the database"
          ],
          "c": 0,
          "why": "extra='forbid' prevents agents and callers from passing unexpected or hallucinated properties."
        },
        {
          "q": "Why are strongly typed schemas better for agents than raw dictionaries?",
          "a": [
            "Schemas provide unambiguous autocomplete, exact field names, and type requirements that models can read directly",
            "Dictionaries take 10x more RAM",
            "Python cannot parse dictionaries",
            "Dictionaries are deprecated"
          ],
          "c": 0,
          "why": "Typed schemas eliminate guessing around dictionary keys and expected data types."
        },
        {
          "q": "How does OpenAPI schema generation benefit an AI-assisted engineering team?",
          "a": [
            "It provides an authoritative machine-readable contract that frontend and backend agents can use to stay in sync",
            "It writes code without a human",
            "It makes servers run in parallel",
            "It replaces the database"
          ],
          "c": 0,
          "why": "OpenAPI contracts ensure frontend and backend developers and agents share an authoritative specification."
        },
        {
          "q": "What should happen when an external client sends invalid data to an API endpoint?",
          "a": [
            "The schema validator rejects the request immediately with an informative 4xx error before reaching domain logic",
            "The server crashes with an uncaught 500 error",
            "The server silently ignores the error and saves nulls",
            "The server reboots"
          ],
          "c": 0,
          "why": "Validating at the boundary protects inner domain layers from malformed data."
        }
      ],
      "next": {
        "title": "Keeping Domain Models Pure",
        "desc": "Isolate core business rules from frameworks and database ORMs."
      }
    },
    {
      "n": 5,
      "id": "keeping-domain-models-pure",
      "title": "Keeping Domain Models Pure",
      "topic": "Domain Purity",
      "anim": "Generic",
      "lede": "Isolating pure business domain models from database ORMs, web frameworks, and external dependencies.",
      "winShort": "You know how to keep domain models pure and decoupled from infrastructure.",
      "missionLink": "Mastering keeping domain models pure across modern software engineering",
      "sec1": {
        "title": "Core principles of Keeping Domain Models Pure",
        "content": "<p>One of the most insidious architectural traps in software engineering—especially when accelerated by AI coding agents—is coupling your business logic directly to your database ORM (e.g. SQLAlchemy, Django ORM, Prisma).</p>",
        "keyIdea": "Isolating pure business domain models from database ORMs, web frameworks, and external dependencies."
      },
      "predict": {
        "q": "What is a 'Pure Domain Model' in software architecture?",
        "a": [
          "A domain entity written in vanilla language constructs that encapsulates business logic with zero framework or database dependencies",
          "A database table with zero columns",
          "A function with no arguments",
          "A model that runs on pure electricity"
        ],
        "c": 0,
        "why": "Pure domain models contain business logic and state, isolated completely from infrastructure and storage.",
        "prompt": "What is a 'Pure Domain Model' in software architecture?",
        "options": [
          "A domain entity written in vanilla language constructs that encapsulates business logic with zero framework or database dependencies",
          "A database table with zero columns",
          "A function with no arguments",
          "A model that runs on pure electricity"
        ],
        "answer": 0,
        "explanation": "Pure domain models contain business logic and state, isolated completely from infrastructure and storage."
      },
      "sec2": {
        "title": "Impure vs Pure Domain Models",
        "content": "<p>When an agent mixes domain rules with ORM models, problems compound:</p>"
      },
      "diagram": {
        "title": "Impure vs Pure Domain Models",
        "caption": "Separating persistence from business rules",
        "steps": [
          {
            "title": "Impure ORM Entity",
            "lines": [
              "Inherits from ORM Base",
              "Tightly bound to SQL schema",
              "Requires DB session to test"
            ]
          },
          {
            "title": "Pure Domain Entity",
            "lines": [
              "Vanilla dataclass / class",
              "Pure business calculations",
              "Runs in RAM in < 1ms"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Impure ORM Entity",
            "lines": [
              "Inherits from ORM Base",
              "Tightly bound to SQL schema",
              "Requires DB session to test"
            ]
          },
          {
            "title": "Pure Domain Entity",
            "lines": [
              "Vanilla dataclass / class",
              "Pure business calculations",
              "Runs in RAM in < 1ms"
            ]
          }
        ]
      },
      "sec3": {
        "title": "The Repository Bridge",
        "content": "<ul><li><strong>Tests Become Slow:</strong> You cannot test a simple discount rule without spinning up a database connection.</li><li><strong>Framework Lock-In:</strong> Upgrading your ORM or switching databases requires rewriting your core business rules.</li><li><strong>Unintended Side Effects:</strong> Accessing a property triggers unexpected lazy-loading network queries.</li></ul><pre><code># IMPURE: Coupled directly to SQLAlchemy ORM and database sessions\nclass Order(Base):\n    __tablename__ = \"orders\"\n    id = Column(Integer, primary_key=True)\n    # Business logic mixed with persistence!\n    def apply_discount(self, db_session):\n        # Queries database directly inside domain method!\n        ...\n\n# PURE DOMAIN ENTITY (Framework-free dataclass):\n@dataclass\nclass Order:\n    id: OrderId\n    items: list[OrderItem]\n    # Pure business calculation: in-memory, instant, zero database dependencies!\n    def apply_discount(self, discount: Discount) -> Money:\n        return discount.calculate(self.subtotal)</code></pre><p>Keep your domain models pure: represent entities as standard dataclasses or pure classes, and let repository adapters handle mapping between domain entities and database tables.</p><div class=\"callout\"><p><strong>The Purity Test:</strong> Can you test your core domain logic in pure RAM in under 1 millisecond without importing SQLAlchemy, FastAPI, or Django? If yes, your domain is pure!</p></div>"
      },
      "trace": {
        "title": "The Repository Bridge",
        "caption": "Mapping pure entities to database persistence",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Keeping Domain Models Pure"
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
              "step": "Domain Entity (Pure)"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Repository Adapter"
            }
          },
          {
            "line": 3,
            "vars": {
              "step": "Result"
            }
          }
        ],
        "code": [
          "# Tracing Keeping Domain Models Pure",
          "def execute_flow():",
          "    # Isolating pure business domain models from databas...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the domain purity sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "A pure domain model encapsulates business rules using vanilla language constructs with zero dependencies on {1} or {2} frameworks."
        ],
        "blanks": [
          {
            "a": [
              "database"
            ],
            "why": "Storage engines and ORMs"
          },
          {
            "a": [
              "web"
            ],
            "why": "HTTP routing frameworks like FastAPI or Express"
          }
        ]
      },
      "win": "You know how to keep domain models pure and decoupled from infrastructure.",
      "nextTasks": [
        "Audit your project code and identify where keeping domain models pure applies.",
        "Author a unit test or verification script exercising keeping domain models pure.",
        "Document team architectural conventions regarding keeping domain models pure."
      ],
      "primarySource": "Industry standards and best practices for Keeping Domain Models Pure.",
      "quiz": [
        {
          "q": "Why does keeping domain models pure make unit testing vastly easier?",
          "a": [
            "Pure entities run entirely in memory without requiring database connections, migrations, or mocks",
            "It eliminates the need for test assertions",
            "Pure models test themselves automatically",
            "It makes tests compile to WebAssembly"
          ],
          "c": 0,
          "why": "In-memory domain entities execute in microseconds with zero environmental setup."
        },
        {
          "q": "What component is responsible for translating between pure domain entities and database tables?",
          "a": [
            "A Repository or Data Mapper adapter",
            "The web browser",
            "The git commit driver",
            "The operating system kernel"
          ],
          "c": 0,
          "why": "Repositories map domain entities to persistence schemas, isolating the domain from SQL details."
        },
        {
          "q": "What code smell indicates that an agent has contaminated a domain model?",
          "a": [
            "Importing SQLAlchemy Column types, database Sessions, or HTTP request objects inside domain entities",
            "Using dataclasses",
            "Adding type hints to parameters",
            "Writing unit tests"
          ],
          "c": 0,
          "why": "Importing persistence or delivery libraries inside domain entities violates domain purity."
        },
        {
          "q": "How does domain purity protect an application against technology churn?",
          "a": [
            "You can replace your database or web framework completely without rewriting a single business rule",
            "It prevents computers from aging",
            "It guarantees 100% test coverage",
            "It reduces cloud server bills to zero"
          ],
          "c": 0,
          "why": "Decoupling business rules ensures that technology upgrades do not affect domain behavior."
        }
      ],
      "next": {
        "title": "Refactoring AI Prototyped Code into Production Shape",
        "desc": "Bridge the gap between fast prototypes and production-grade code."
      }
    },
    {
      "n": 6,
      "id": "refactoring-prototypes-to-production",
      "title": "Refactoring AI Prototyped Code into Production Shape",
      "topic": "Production Hardening",
      "anim": "Generic",
      "lede": "Hardening AI-generated prototypes: extracting interfaces, adding error handling, and eliminating shortcuts.",
      "winShort": "You know how to systematically harden AI prototypes into production-grade systems.",
      "missionLink": "Mastering refactoring ai prototyped code into production shape across modern software engineering",
      "sec1": {
        "title": "Core principles of Refactoring AI Prototyped Code into Production Shape",
        "content": "<p>AI coding agents are world-class rapid prototypers. In thirty minutes, an agent can build a functioning full-stack prototype that would take a human two days. But <strong>a working prototype is not production-ready software</strong>.</p>",
        "keyIdea": "Hardening AI-generated prototypes: extracting interfaces, adding error handling, and eliminating shortcuts."
      },
      "predict": {
        "q": "What distinguishes an AI prototype from production-ready software?",
        "a": [
          "Prototypes focus on the happy path; production code requires robust error handling, telemetry, logging, and security boundaries",
          "Prototypes are written in HTML while production is written in C",
          "Production code cannot contain functions",
          "Prototypes run 10x faster"
        ],
        "c": 0,
        "why": "Prototypes prove feasibility; production hardening adds observability, edge-case safety, and error handling.",
        "prompt": "What distinguishes an AI prototype from production-ready software?",
        "options": [
          "Prototypes focus on the happy path; production code requires robust error handling, telemetry, logging, and security boundaries",
          "Prototypes are written in HTML while production is written in C",
          "Production code cannot contain functions",
          "Prototypes run 10x faster"
        ],
        "answer": 0,
        "explanation": "Prototypes prove feasibility; production hardening adds observability, edge-case safety, and error handling."
      },
      "sec2": {
        "title": "Prototype vs Production Reality",
        "content": "<p>AI prototypes almost always take dangerous shortcuts:</p>"
      },
      "diagram": {
        "title": "Prototype vs Production Reality",
        "caption": "The hardening transformation",
        "steps": [
          {
            "title": "AI Prototype (Happy Path)",
            "lines": [
              "Works on localhost with valid inputs",
              "Hardcoded configs, zero timeouts",
              "Silent crashes on unexpected data"
            ]
          },
          {
            "title": "Production Hardened",
            "lines": [
              "Explicit exception boundaries",
              "Structured logging & telemetry",
              "Idempotent, rate-limited, timeout-bounded"
            ]
          }
        ],
        "boxes": [
          {
            "title": "AI Prototype (Happy Path)",
            "lines": [
              "Works on localhost with valid inputs",
              "Hardcoded configs, zero timeouts",
              "Silent crashes on unexpected data"
            ]
          },
          {
            "title": "Production Hardened",
            "lines": [
              "Explicit exception boundaries",
              "Structured logging & telemetry",
              "Idempotent, rate-limited, timeout-bounded"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Hardening Checklist Flow",
        "content": "<ul><li><strong>Happy-Path Myopia:</strong> Code assumes network calls never fail, database records always exist, and users never supply invalid data.</li><li><strong>Missing Telemetry:</strong> No structured logging, metrics, or distributed tracing headers.</li><li><strong>Hardcoded Configurations:</strong> Magic numbers and hardcoded timeouts scattered throughout functions.</li><li><strong>Missing Boundary Defenses:</strong> Missing rate limiting, payload size caps, and input sanitization.</li></ul><pre><code># The Hardening Checklist: Prototype -> Production\n1. ERROR BOUNDARIES: Replace generic `except: pass` with explicit exception hierarchies.\n2. CONFIGURATION: Move magic numbers to environment variables / pydantic-settings.\n3. LOGGING: Add structured JSON logging (logger.info(\"order_created\", order_id=id)).\n4. TIME OUTS: Ensure every network call and DB query has explicit timeout bounds.\n5. IDEMPOTENCY: Add idempotency keys to financial and state-mutating operations.</code></pre><div class=\"callout\"><p><strong>The 80/20 Rule:</strong> The agent gets you to 80% completion in minutes. The human engineer's true craft is in directing the remaining 20%: hardening, security, and operational reliability.</p></div>"
      },
      "trace": {
        "title": "Hardening Checklist Flow",
        "caption": "Systematic production readiness pass",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Refactoring AI Prototyped Code into Production Shape"
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
              "step": "1. Configuration"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "2. Timeouts & Retries"
            }
          },
          {
            "line": 3,
            "vars": {
              "step": "3. Observability"
            }
          }
        ],
        "code": [
          "# Tracing Refactoring AI Prototyped Code into Production Shape",
          "def execute_flow():",
          "    # Hardening AI-generated prototypes: extracting inte...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the production hardening sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Transforming an AI prototype into production software requires adding explicit error boundaries, timeouts, and structured {1} for operational {2}."
        ],
        "blanks": [
          {
            "a": [
              "logging"
            ],
            "why": "Recording execution events and diagnostics"
          },
          {
            "a": [
              "observability"
            ],
            "why": "Ability to monitor system health in production"
          }
        ]
      },
      "win": "You know how to systematically harden AI prototypes into production-grade systems.",
      "nextTasks": [
        "Audit your project code and identify where refactoring ai prototyped code into production shape applies.",
        "Author a unit test or verification script exercising refactoring ai prototyped code into production shape.",
        "Document team architectural conventions regarding refactoring ai prototyped code into production shape."
      ],
      "primarySource": "Industry standards and best practices for Refactoring AI Prototyped Code into Production Shape.",
      "quiz": [
        {
          "q": "What is 'Happy-Path Myopia' in AI-generated prototypes?",
          "a": [
            "Writing code that functions under ideal conditions but crashes when external services fail or inputs are invalid",
            "A defect where code is too fast",
            "An optical condition from reading monitors",
            "A feature in modern IDEs"
          ],
          "c": 0,
          "why": "Prototypes typically demonstrate ideal scenarios while overlooking edge-case failures."
        },
        {
          "q": "Why must every outbound network request in production code have an explicit timeout?",
          "a": [
            "Without timeouts, stalled third-party connections hang worker threads, causing cascading server thread pool exhaustion",
            "Timeouts are required by Python syntax",
            "Timeouts make network connections free",
            "Timeouts delete database records"
          ],
          "c": 0,
          "why": "Unbounded network calls hold system resources indefinitely, causing service-wide outages."
        },
        {
          "q": "What is an idempotency key and why is it essential in payment endpoints?",
          "a": [
            "A unique token ensuring that duplicate network retries do not charge a customer twice for the same transaction",
            "An encryption password",
            "A database primary key integer",
            "A git commit hash"
          ],
          "c": 0,
          "why": "Idempotency prevents duplicate side effects when network retries occur."
        },
        {
          "q": "How does structured JSON logging improve operational debugging in production?",
          "a": [
            "It allows log aggregation systems (Datadog, Elastic) to query and filter events by user_id, status, and latency",
            "It reduces file sizes by 99%",
            "It prints colorful text in the terminal",
            "It compiles Python to C"
          ],
          "c": 0,
          "why": "Structured key-value logs enable instant querying across distributed production fleets."
        }
      ],
      "next": {
        "title": "Architectural Fitness Functions and Linting",
        "desc": "Automate architectural rule enforcement in CI pipelines."
      }
    },
    {
      "n": 7,
      "id": "architectural-fitness-functions",
      "title": "Architectural Fitness Functions and Linting",
      "topic": "Fitness Functions",
      "anim": "Generic",
      "lede": "Writing automated architectural fitness functions that fail CI when agents violate design rules.",
      "winShort": "You know how to implement automated architectural fitness functions.",
      "missionLink": "Mastering architectural fitness functions and linting across modern software engineering",
      "sec1": {
        "title": "Core principles of Architectural Fitness Functions and Linting",
        "content": "<p>In <em>Building Evolutionary Architectures</em>, Neal Ford and Rebecca Parsons introduced <strong>Architectural Fitness Functions</strong>: automated tests that evaluate architectural characteristics (layer boundaries, circular dependencies, cyclomatic complexity) just like unit tests evaluate business logic.</p>",
        "keyIdea": "Writing automated architectural fitness functions that fail CI when agents violate design rules."
      },
      "predict": {
        "q": "What is an 'Architectural Fitness Function'?",
        "a": [
          "An automated test or check that programmatically validates that code adheres to defined architectural invariants",
          "A health app for software developers",
          "A benchmark test measuring typing speed",
          "A metric that counts lines of code"
        ],
        "c": 0,
        "why": "Fitness functions provide automated, objective verification of architectural integrity in CI.",
        "prompt": "What is an 'Architectural Fitness Function'?",
        "options": [
          "An automated test or check that programmatically validates that code adheres to defined architectural invariants",
          "A health app for software developers",
          "A benchmark test measuring typing speed",
          "A metric that counts lines of code"
        ],
        "answer": 0,
        "explanation": "Fitness functions provide automated, objective verification of architectural integrity in CI."
      },
      "sec2": {
        "title": "Architectural Fitness Gate",
        "content": "<p>When working with AI coding agents, architectural fitness functions are your ultimate guardrail. You don't have to hope the agent remembers your boundary rules; CI will mathematically enforce them:</p>"
      },
      "diagram": {
        "title": "Architectural Fitness Gate",
        "caption": "Enforcing structural integrity in CI",
        "steps": [
          {
            "title": "Agent Violates Boundary",
            "lines": [
              "Imports ORM into Domain",
              "Saves 10 seconds locally"
            ]
          },
          {
            "title": "Fitness Function Runs",
            "lines": [
              "import-linter executes in 150ms",
              "Detects forbidden import path"
            ]
          },
          {
            "title": "Automated Rejection",
            "lines": [
              "CI fails with exact violation line",
              "Agent forced to refactor to pure port"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Agent Violates Boundary",
            "lines": [
              "Imports ORM into Domain",
              "Saves 10 seconds locally"
            ]
          },
          {
            "title": "Fitness Function Runs",
            "lines": [
              "import-linter executes in 150ms",
              "Detects forbidden import path"
            ]
          },
          {
            "title": "Automated Rejection",
            "lines": [
              "CI fails with exact violation line",
              "Agent forced to refactor to pure port"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Types of Architectural Tests",
        "content": "<ul><li><strong>Import Direction Checks:</strong> Asserting that `domain` never imports `infrastructure`.</li><li><strong>Circular Dependency Checks:</strong> Guaranteeing no cyclical import loops between modules.</li><li><strong>Dependency Fan-Out Bounds:</strong> Flagging classes that depend on more than 7 other services.</li></ul><pre><code># Architectural Fitness Function with import-linter (.importlinter)\n[importlinter]\nroot_package = src\n\n[importlinter:contract:1]\nname = Domain Layer Purity\ntype = forbidden\nsource_modules =\n    src.domain\nforbidden_modules =\n    src.infrastructure\n    src.api\n    sqlalchemy\n    fastapi</code></pre><p>If an agent accidentally imports `sqlalchemy` inside `src/domain/entities.py`, the linter fails in 150ms: <em>'CONTRACT VIOLATION: src.domain cannot import sqlalchemy.'</em> The agent observes the error and fixes its own boundary violation!</p><div class=\"callout\"><p><strong>Automated Enforcement:</strong> Never rely on human memory for things a 100ms AST check can enforce deterministically in CI.</p></div>"
      },
      "trace": {
        "title": "Types of Architectural Tests",
        "caption": "Programmatic structural checks",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Architectural Fitness Functions and Linting"
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
              "step": "Layer Isolation"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Cycle Prevention"
            }
          },
          {
            "line": 3,
            "vars": {
              "step": "Coupling Limits"
            }
          }
        ],
        "code": [
          "# Tracing Architectural Fitness Functions and Linting",
          "def execute_flow():",
          "    # Writing automated architectural fitness functions ...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the fitness function sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Architectural fitness functions provide automated {1} in CI that fail builds whenever code violates defined architectural {2}."
        ],
        "blanks": [
          {
            "a": [
              "tests"
            ],
            "why": "Automated verification checks"
          },
          {
            "a": [
              "invariants"
            ],
            "why": "Structural rules and boundaries"
          }
        ]
      },
      "win": "You know how to implement automated architectural fitness functions.",
      "nextTasks": [
        "Audit your project code and identify where architectural fitness functions and linting applies.",
        "Author a unit test or verification script exercising architectural fitness functions and linting.",
        "Document team architectural conventions regarding architectural fitness functions and linting."
      ],
      "primarySource": "Industry standards and best practices for Architectural Fitness Functions and Linting.",
      "quiz": [
        {
          "q": "What tool in the Python ecosystem enables writing architectural fitness tests for import directions?",
          "a": [
            "import-linter or pytest-archon",
            "requests",
            "pip",
            "virtualenv"
          ],
          "c": 0,
          "why": "import-linter and pytest-archon analyze module imports to enforce architectural boundary contracts."
        },
        {
          "q": "What happens when an agent breaks an architectural fitness rule during a CI run?",
          "a": [
            "The fitness test fails with an explicit error identifying the forbidden import, prompting the agent to correct it",
            "The computer restarts",
            "The git repository is deleted",
            "The developer is notified by phone"
          ],
          "c": 0,
          "why": "The automated failure provides exact feedback, guiding the agent to remove the forbidden dependency."
        },
        {
          "q": "Why are automated fitness functions superior to manual code review for enforcing boundaries?",
          "a": [
            "Automated tests never get tired, execute in milliseconds, and catch 100% of illegal imports objectively",
            "Fitness functions write code automatically",
            "Manual code review is illegal",
            "Fitness functions eliminate the need for QA"
          ],
          "c": 0,
          "why": "Automated AST checks provide tireless, mathematical verification that never misses a violation."
        },
        {
          "q": "What is a 'Circular Dependency' and why should fitness functions prohibit it?",
          "a": [
            "Module A imports Module B, and Module B imports Module A, creating tightly coupled, fragile code that is hard to test and maintain",
            "A loop in a Python for-statement",
            "A database query that returns all rows",
            "A git branch that never merges"
          ],
          "c": 0,
          "why": "Circular dependencies tangle modules together, making independent testing and refactoring impossible."
        }
      ],
      "next": {
        "title": "Long-Term Maintainability of AI-Assisted Codebases",
        "desc": "Sustain high engineering velocity and clean architecture over years."
      }
    },
    {
      "n": 8,
      "id": "long-term-maintainability",
      "title": "Long-Term Maintainability of AI-Assisted Codebases",
      "topic": "Sustained Quality",
      "anim": "Generic",
      "lede": "Synthesizing architecture, conventions, and review into a sustainable, long-term engineering practice.",
      "winShort": "You have completed the Working With AI-Generated Architecture course.",
      "missionLink": "Mastering long-term maintainability of ai-assisted codebases across modern software engineering",
      "sec1": {
        "title": "Core principles of Long-Term Maintainability of AI-Assisted Codebases",
        "content": "<p>AI coding tools have transformed software engineering. Tasks that once took a sprint now take an afternoon. But velocity is a double-edged sword: <strong>if you are heading in the wrong direction, AI simply helps you get lost faster.</strong></p>",
        "keyIdea": "Synthesizing architecture, conventions, and review into a sustainable, long-term engineering practice."
      },
      "predict": {
        "q": "What is the ultimate risk of rapid AI code generation without architectural stewardship?",
        "a": [
          "A sprawling, unmaintainable codebase that moves fast initially but grinds to a complete halt within a year",
          "The internet running out of bandwidth",
          "Cloud servers exploding",
          "Compilers refusing to run on Fridays"
        ],
        "c": 0,
        "why": "Unmanaged AI velocity compounds technical debt at unprecedented speed, leading to eventual paralysis.",
        "prompt": "What is the ultimate risk of rapid AI code generation without architectural stewardship?",
        "options": [
          "A sprawling, unmaintainable codebase that moves fast initially but grinds to a complete halt within a year",
          "The internet running out of bandwidth",
          "Cloud servers exploding",
          "Compilers refusing to run on Fridays"
        ],
        "answer": 0,
        "explanation": "Unmanaged AI velocity compounds technical debt at unprecedented speed, leading to eventual paralysis."
      },
      "sec2": {
        "title": "The Three Pillars of Sustainable AI Engineering",
        "content": "<p>To ensure your codebase remains maintainable over five years:</p>"
      },
      "diagram": {
        "title": "The Three Pillars of Sustainable AI Engineering",
        "caption": "Preserving velocity and quality over years",
        "steps": [
          {
            "title": "1. Rigid Guardrails",
            "lines": [
              "Fitness functions & linters",
              "Domain purity & strict schemas"
            ]
          },
          {
            "title": "2. Living Context",
            "lines": [
              "Up-to-date ADRs & repo maps",
              "Golden pairs & concise rules"
            ]
          },
          {
            "title": "3. Human Stewardship",
            "lines": [
              "Skeptical diff review",
              "Verification gates on critical paths"
            ]
          }
        ],
        "boxes": [
          {
            "title": "1. Rigid Guardrails",
            "lines": [
              "Fitness functions & linters",
              "Domain purity & strict schemas"
            ]
          },
          {
            "title": "2. Living Context",
            "lines": [
              "Up-to-date ADRs & repo maps",
              "Golden pairs & concise rules"
            ]
          },
          {
            "title": "3. Human Stewardship",
            "lines": [
              "Skeptical diff review",
              "Verification gates on critical paths"
            ]
          }
        ]
      },
      "sec3": {
        "title": "The Long-Term Velocity Curve",
        "content": "<ul><li><strong>1. Maintain the Architecture as Sacred:</strong> Guard your domain core, enforce strict schemas, and keep module boundaries clean with fitness functions.</li><li><strong>2. Keep Project Context Fresh:</strong> Treat `.github/copilot-instructions.md` and ADRs as living assets. Prune stale rules; document emerging idioms.</li><li><strong>3. Review with Skepticism:</strong> Never approve a pull request you do not understand. Verify deletions, boundary math, and security gates.</li><li><strong>4. Automate Hygiene:</strong> Let linters and type checkers handle the trivia so human engineers can focus on systems design.</li></ul><pre><code># The Three Pillars of Sustainable AI Engineering:\n# 1. RIGID GUARDRAILS:   Inward dependency rules, fitness functions, extra='forbid'\n# 2. CLEAR CONTEXT:       Living ADRs, golden pairs, concise instruction files\n# 3. HUMAN STEWARDSHIP:  Rigorous diff review, invariant verification, production gates</code></pre><div class=\"callout\"><p><strong>The Final Principle:</strong> The most valuable software engineers of the next decade will not be the fastest typists; they will be the clearest architects, the sharpest reviewers, and the best system designers.</p></div>"
      },
      "trace": {
        "title": "The Long-Term Velocity Curve",
        "caption": "Unconstrained AI vs Architected AI",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Long-Term Maintainability of AI-Assisted Codebases"
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
              "step": "Unconstrained AI"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Architected AI"
            }
          }
        ],
        "code": [
          "# Tracing Long-Term Maintainability of AI-Assisted Codebases",
          "def execute_flow():",
          "    # Synthesizing architecture, conventions, and review...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the long-term maintainability sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Long-term maintainability in AI codebases combines rigid architectural {1} with vigilant human {2}."
        ],
        "blanks": [
          {
            "a": [
              "guardrails"
            ],
            "why": "Automated fitness tests and boundaries"
          },
          {
            "a": [
              "stewardship"
            ],
            "why": "Active human design and review oversight"
          }
        ]
      },
      "win": "You have completed the Working With AI-Generated Architecture course.",
      "nextTasks": [
        "Audit your project code and identify where long-term maintainability of ai-assisted codebases applies.",
        "Author a unit test or verification script exercising long-term maintainability of ai-assisted codebases.",
        "Document team architectural conventions regarding long-term maintainability of ai-assisted codebases."
      ],
      "primarySource": "Industry standards and best practices for Long-Term Maintainability of AI-Assisted Codebases.",
      "quiz": [
        {
          "q": "What skill will define the most effective senior software engineers in the AI era?",
          "a": [
            "System architecture, specification clarity, skeptical code review, and automated guardrail design",
            "Typing speed in words per minute",
            "Memorizing every function in standard libraries",
            "Writing CSS by hand"
          ],
          "c": 0,
          "why": "Architectural judgment, specification clarity, and review rigor are the core levers of AI-assisted engineering."
        },
        {
          "q": "Why does unmanaged AI code generation create technical debt faster than human coding alone?",
          "a": [
            "AI can generate hundreds of lines of plausible, inconsistent code in minutes, compounding debt exponentially if uncurated",
            "AI writes slower than humans",
            "AI code is unreadable by compilers",
            "AI code deletes tests"
          ],
          "c": 0,
          "why": "The unprecedented speed of AI generation means bad patterns accumulate at tenfold velocity."
        },
        {
          "q": "How do living ADRs and architectural fitness functions protect a growing engineering team?",
          "a": [
            "They provide persistent institutional memory and automated gates that keep all developers and AI agents aligned",
            "They eliminate the need for git commits",
            "They compile Python to C++",
            "They reduce internet bills"
          ],
          "c": 0,
          "why": "Automated gates and documented decisions prevent architectural regressions across the entire team."
        },
        {
          "q": "What is the ultimate definition of sustainable engineering velocity?",
          "a": [
            "The ability to ship features rapidly and safely in year five just as easily as on day one of the project",
            "Shipping code without writing any tests",
            "Deploying 100 times an hour with high outage rates",
            "Writing code in assembly"
          ],
          "c": 0,
          "why": "True velocity is sustainable over the full life of the system without succumbing to technical rot."
        }
      ],
      "next": {
        "title": "Next Course: AI-Assisted Refactoring",
        "desc": "Learn how to use test suites as safety nets while agents perform large mechanical refactorings."
      }
    }
  ]
};

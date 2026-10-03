"use strict";

module.exports = {
  "id": "ai-project-context",
  "title": "Giving AI Agents the Right Project Context",
  "num": 54,
  "emoji": "🗂️",
  "desc": "Conventions files, architecture notes and examples that make an agent produce code that fits your repo.",
  "topics": [
    "Project Context",
    "Agent Instructions",
    "ADRs",
    "Golden Files",
    "Repo Maps",
    "Workflow Scripts",
    "Context Maintenance",
    "Alignment Audits"
  ],
  "mission": "# Mission — Giving AI Agents the Right Project Context\n\nBridge the gap between generic AI capabilities and your repository's unique idioms. Author high-impact instruction files, capture design history with ADRs, anchor generation with golden files, document architecture maps, and audit agent alignment.",
  "notes": "# Notes — Giving AI Agents the Right Project Context\n\nWhat you leave unsaid, the model will invent from internet averages. Ground agents with explicit conventions, golden examples, and architecture invariants.",
  "resources": "# Resources — Giving AI Agents the Right Project Context\n\n- Michael Nygard, *Documenting Architecture Decisions*\n- GitHub Copilot Documentation, *Custom Instructions*\n- Martin Fowler, *Patterns of Enterprise Application Architecture*",
  "glossaryGroups": [
    {
      "id": "conventions",
      "title": "Conventions & Drift",
      "terms": [
        {
          "term": "Convention Guessing",
          "def": "The tendency of models to fall back on generic training averages when project context is missing.",
          "lesson": 1,
          "tags": [
            "ai",
            "conventions"
          ]
        },
        {
          "term": "Instruction File",
          "def": "A repository configuration file (.cursorrules, copilot-instructions.md) providing system directives to AI agents.",
          "lesson": 2,
          "tags": [
            "ai",
            "config"
          ]
        },
        {
          "term": "Architectural Drift",
          "def": "The slow degradation of project standards caused by introducing alien, inconsistent code patterns.",
          "lesson": 1,
          "tags": [
            "architecture",
            "quality"
          ]
        }
      ]
    },
    {
      "id": "records",
      "title": "ADRs & Knowledge",
      "terms": [
        {
          "term": "Architecture Decision Record",
          "def": "A document capturing an architectural decision, its context, consequences, and evaluated alternatives.",
          "lesson": 3,
          "tags": [
            "architecture",
            "docs"
          ]
        },
        {
          "term": "Golden File",
          "def": "An exemplary production file in the repository cited as the authoritative template for code style and patterns.",
          "lesson": 4,
          "tags": [
            "architecture",
            "patterns"
          ]
        },
        {
          "term": "Golden Pair",
          "def": "A matched pair of exemplary files: one clean implementation and its corresponding high-quality test file.",
          "lesson": 4,
          "tags": [
            "testing",
            "patterns"
          ]
        }
      ]
    },
    {
      "id": "mapping",
      "title": "Mapping & Tooling",
      "terms": [
        {
          "term": "Repository Map",
          "def": "A high-level structural overview documenting directory responsibilities and dependency direction invariants.",
          "lesson": 5,
          "tags": [
            "architecture",
            "navigation"
          ]
        },
        {
          "term": "Dependency Direction Invariant",
          "def": "An architectural rule governing which layers are allowed to import from which (e.g. domain never imports storage).",
          "lesson": 5,
          "tags": [
            "architecture",
            "invariants"
          ]
        },
        {
          "term": "Workflow Script",
          "def": "A standardized runner command (make test, npm run lint) encapsulating complex flags and environment variables.",
          "lesson": 6,
          "tags": [
            "devops",
            "tooling"
          ]
        }
      ]
    },
    {
      "id": "maintenance",
      "title": "Maintenance & Auditing",
      "terms": [
        {
          "term": "Instruction Pruning",
          "def": "Removing formatting trivia and obsolete rules from instruction files to maximize attention density.",
          "lesson": 7,
          "tags": [
            "context",
            "maintenance"
          ]
        },
        {
          "term": "Alignment Audit",
          "def": "Empirically evaluating agent-generated code against project conventions using benchmark prompts.",
          "lesson": 8,
          "tags": [
            "ai",
            "evals"
          ]
        },
        {
          "term": "One-Command Verification",
          "def": "A single script (make check) that runs linters, type checks, and tests together for agent validation.",
          "lesson": 6,
          "tags": [
            "ci",
            "testing"
          ]
        }
      ]
    }
  ],
  "cheatsheetSections": [
    {
      "title": "Universal copilot-instructions.md",
      "label": "Standard configuration template",
      "code": "## Architecture & Tech Stack\n- Python 3.12+ with FastAPI and SQLAlchemy 2.0 (async).\n- Pydantic v2 schemas in src/schemas/.\n## Testing & Verification\n- Run tests with: `make test-unit`.\n- Run full verification: `make check`.\n## Non-Negotiable Rules\n- Never mock database queries in integration tests.\n- Never commit credentials or API keys.",
      "lessonN": 2,
      "lessonSlug": "agent-instructions-files",
      "lessonTitle": "Agent Instructions Files (.cursorrules, copilot-instructions.md)"
    },
    {
      "title": "Minimal Architecture Decision Record",
      "label": "Documenting design intent",
      "code": "# docs/adr/005-use-postgres-jsonb.md\n## Context\nNeed to store flexible customer metadata without schema migrations.\n## Decision\nUse PostgreSQL JSONB column with Pydantic validation on read/write.\n## Consequences\nFast schema flexibility; requires PG 15+.",
      "lessonN": 3,
      "lessonSlug": "adrs-as-agent-context",
      "lessonTitle": "Architecture Decision Records (ADRs) as Agent Context"
    },
    {
      "title": "Repository Map Template",
      "label": "Orienting agents in seconds",
      "code": "## Directory Map & Invariants\n- `src/domain/`   -> Pure business rules (NEVER imports api/ or storage/).\n- `src/storage/`  -> PostgreSQL models & SQL migrations.\n- `src/api/`      -> FastAPI endpoints calling domain via DI.\n- `tests/`        -> Mirrors src/ directory structure.",
      "lessonN": 5,
      "lessonSlug": "repo-maps-and-architecture-guides",
      "lessonTitle": "Repository Maps and Architecture Guides"
    },
    {
      "title": "Golden File Prompt Directive",
      "label": "Few-shot architectural grounding",
      "code": "# When prompting agents, cite your golden pair:\n\"Follow the exact pattern established in src/endpoints/users.py.\nMirror the error handling in lines 30-45.\nStructure unit tests matching tests/api/test_users.py.\"",
      "lessonN": 4,
      "lessonSlug": "providing-golden-code-examples",
      "lessonTitle": "Providing Golden Code Examples"
    }
  ],
  "lessons": [
    {
      "n": 1,
      "id": "why-agents-hallucinate-conventions",
      "title": "Why Agents Hallucinate Conventions",
      "topic": "Conventions",
      "anim": "Generic",
      "lede": "Why AI agents guess conventions when context is missing, and how institutional memory bridges the gap.",
      "winShort": "You understand why project context is necessary to eliminate agent convention guessing.",
      "missionLink": "Mastering why agents hallucinate conventions across modern software engineering",
      "sec1": {
        "title": "Core principles of Why Agents Hallucinate Conventions",
        "content": "<p>When an agent enters a new codebase without explicit guidance, it suffers from an architectural vacuum. The agent doesn't know that your team uses Pydantic v2 instead of v1, prefers snake_case for database columns, or rejects the repository pattern in favor of active record.</p>",
        "keyIdea": "Why AI agents guess conventions when context is missing, and how institutional memory bridges the gap."
      },
      "predict": {
        "q": "Why do coding agents frequently invent new coding patterns that clash with existing repo conventions?",
        "a": [
          "Without explicit repository instructions, models default to general internet training averages",
          "Agents are programmed to ignore project standards",
          "Compilers override project conventions",
          "Python requires random patterns"
        ],
        "c": 0,
        "why": "Without local context, models fall back on broad internet training averages rather than your repo's specific idioms.",
        "prompt": "Why do coding agents frequently invent new coding patterns that clash with existing repo conventions?",
        "options": [
          "Without explicit repository instructions, models default to general internet training averages",
          "Agents are programmed to ignore project standards",
          "Compilers override project conventions",
          "Python requires random patterns"
        ],
        "answer": 0,
        "explanation": "Without local context, models fall back on broad internet training averages rather than your repo's specific idioms."
      },
      "sec2": {
        "title": "Internet Average vs Repo Convention",
        "content": "<p>In the absence of explicit rules, the model defaults to <strong>statistical internet averages</strong>. It will guess whatever pattern was most common across GitHub in 2023. The result is jarring architectural friction: code that compiles in isolation but feels alien to your project.</p>"
      },
      "diagram": {
        "title": "Internet Average vs Repo Convention",
        "caption": "How local instructions overcome statistical defaults",
        "steps": [
          {
            "title": "Internet Average (Default)",
            "lines": [
              "Generic training data",
              "Mixed patterns & outdated libraries",
              "Clashes with your codebase"
            ]
          },
          {
            "title": "Project Context Bridge",
            "lines": [
              "copilot-instructions.md",
              "Explicit idioms & rules",
              "Seamless architectural fit"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Internet Average (Default)",
            "lines": [
              "Generic training data",
              "Mixed patterns & outdated libraries",
              "Clashes with your codebase"
            ]
          },
          {
            "title": "Project Context Bridge",
            "lines": [
              "copilot-instructions.md",
              "Explicit idioms & rules",
              "Seamless architectural fit"
            ]
          }
        ]
      },
      "sec3": {
        "title": "The Cost of Missing Context",
        "content": "<pre><code># Without Project Context (Agent Guessing):\nclass UserController:\n    # Agent invents Java-style DTO pattern in Python!\n    def handle_request(self, dto: UserDTO):\n        ...\n\n# With Project Context (copilot-instructions.md):\n# Rule: 'All HTTP endpoints are FastAPI routes using Pydantic schemas in src/schemas/'\n@router.post('/users')\ndef create_user(payload: UserCreateSchema):\n    ...</code></pre><p>By providing explicit project context files, you bridge the gap between broad model capabilities and your project's unique conventions.</p><div class=\"callout\"><p><strong>Rule of Guidance:</strong> Do not expect an agent to deduce your architectural philosophy from raw code alone. Write it down explicitly!</p></div>"
      },
      "trace": {
        "title": "The Cost of Missing Context",
        "caption": "How missing rules create architectural drift",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Why Agents Hallucinate Conventions"
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
              "step": "Turn 1: Guessing"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Turn 2: Rewrite"
            }
          },
          {
            "line": 3,
            "vars": {
              "step": "Prevention"
            }
          }
        ],
        "code": [
          "# Tracing Why Agents Hallucinate Conventions",
          "def execute_flow():",
          "    # Why AI agents guess conventions when context is mi...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the conventions sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "When project context is missing, agents default to {1} training data rather than your project's specific {2}."
        ],
        "blanks": [
          {
            "a": [
              "internet average"
            ],
            "why": "Generic training distribution"
          },
          {
            "a": [
              "conventions"
            ],
            "why": "Team-specific idioms and standards"
          }
        ]
      },
      "win": "You understand why project context is necessary to eliminate agent convention guessing.",
      "nextTasks": [
        "Audit your project code and identify where why agents hallucinate conventions applies.",
        "Author a unit test or verification script exercising why agents hallucinate conventions.",
        "Document team architectural conventions regarding why agents hallucinate conventions."
      ],
      "primarySource": "Industry standards and best practices for Why Agents Hallucinate Conventions.",
      "quiz": [
        {
          "q": "What is the primary cause of an AI agent using an outdated or prohibited library in your project?",
          "a": [
            "The agent was not provided with repository instructions specifying allowed and prohibited dependencies",
            "The agent's computer has old hardware",
            "Python requires outdated libraries",
            "The internet was disconnected"
          ],
          "c": 0,
          "why": "Without explicit library constraints, models default to whatever libraries appeared most frequently in training data."
        },
        {
          "q": "How does defining conventions benefit a team with multiple developers using AI tools?",
          "a": [
            "It ensures all AI-assisted code contributions conform to uniform architectural and styling standards",
            "It eliminates the need for git commits",
            "It allows developers to stop writing tests",
            "It speeds up developer typing speed by 10x"
          ],
          "c": 0,
          "why": "Standardized instructions ensure consistency across all AI-assisted team contributions."
        },
        {
          "q": "What should be the primary content of a project conventions file?",
          "a": [
            "Non-negotiable architectural rules, prohibited packages, naming conventions, and testing commands",
            "A list of employee birthdays",
            "The full source code of the operating system",
            "Customer credit card numbers"
          ],
          "c": 0,
          "why": "Conventions files should focus on concise, actionable rules and technical constraints."
        },
        {
          "q": "Why is keeping a conventions file concise (under 200 lines) essential?",
          "a": [
            "It preserves the agent's context window budget and maintains high attention focus on active code",
            "Files longer than 200 lines cannot be read by computers",
            "Git rejects files over 200 lines",
            "Markdown editors crash on long files"
          ],
          "c": 0,
          "why": "Concise files maximize attention density and minimize context pollution."
        }
      ],
      "next": {
        "title": "Agent Instructions Files (.cursorrules, copilot-instructions.md)",
        "desc": "Learn how to structure standard configuration files for AI coding agents."
      }
    },
    {
      "n": 2,
      "id": "agent-instructions-files",
      "title": "Agent Instructions Files (.cursorrules, copilot-instructions.md)",
      "topic": "Instructions Files",
      "anim": "Generic",
      "lede": "Configuring agent instruction files: syntax, scope, location, and writing effective system rules.",
      "winShort": "You know how to configure and structure standard agent instruction files.",
      "missionLink": "Mastering agent instructions files (.cursorrules, copilot-instructions.md) across modern software engineering",
      "sec1": {
        "title": "Core principles of Agent Instructions Files (.cursorrules, copilot-instructions.md)",
        "content": "<p>Modern development environments provide standardized contribution points for AI instructions. Whether you use GitHub Copilot, Cursor, Windsurf, or Claude Code, placing an instructions file in your repository automatically primes the agent's system prompt.</p>",
        "keyIdea": "Configuring agent instruction files: syntax, scope, location, and writing effective system rules."
      },
      "predict": {
        "q": "Where in a repository should general AI agent instructions be placed?",
        "a": [
          "In the repository root (e.g. .github/copilot-instructions.md or .cursorrules)",
          "In the operating system root folder /etc",
          "In the user's Downloads folder",
          "Inside a temporary zip file"
        ],
        "c": 0,
        "why": "Standard agent instructions live in the repository root or .github directory so all tools pick them up automatically.",
        "prompt": "Where in a repository should general AI agent instructions be placed?",
        "options": [
          "In the repository root (e.g. .github/copilot-instructions.md or .cursorrules)",
          "In the operating system root folder /etc",
          "In the user's Downloads folder",
          "Inside a temporary zip file"
        ],
        "answer": 0,
        "explanation": "Standard agent instructions live in the repository root or .github directory so all tools pick them up automatically."
      },
      "sec2": {
        "title": "Agent Instruction Files",
        "content": "<p>Standard locations include:</p>"
      },
      "diagram": {
        "title": "Agent Instruction Files",
        "caption": "Standard configuration points across modern IDEs",
        "steps": [
          {
            "title": "copilot-instructions.md",
            "lines": [
              "Located in .github/",
              "Universal Copilot standard",
              "Auto-injected into system prompt"
            ]
          },
          {
            "title": ".cursorrules",
            "lines": [
              "Located in repo root",
              "Custom rules for Cursor",
              "Can be scoped to file globs"
            ]
          },
          {
            "title": "CLAUDE.md",
            "lines": [
              "Located in repo root",
              "Directs Claude Code CLI",
              "Captures build & test workflows"
            ]
          }
        ],
        "boxes": [
          {
            "title": "copilot-instructions.md",
            "lines": [
              "Located in .github/",
              "Universal Copilot standard",
              "Auto-injected into system prompt"
            ]
          },
          {
            "title": ".cursorrules",
            "lines": [
              "Located in repo root",
              "Custom rules for Cursor",
              "Can be scoped to file globs"
            ]
          },
          {
            "title": "CLAUDE.md",
            "lines": [
              "Located in repo root",
              "Directs Claude Code CLI",
              "Captures build & test workflows"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Writing High-Impact Rules",
        "content": "<ul><li><strong>`.github/copilot-instructions.md`:</strong> Read automatically by GitHub Copilot Chat and Agent mode.</li><li><strong>`.cursorrules` or `.cursor/rules/`:</strong> Read automatically by Cursor IDE.</li><li><strong>`CLAUDE.md`:</strong> Read automatically by Claude Code CLI.</li></ul><pre><code># .github/copilot-instructions.md Example\n## Architecture & Frameworks\n- Backend: FastAPI 0.110+ with Python 3.12 syntax (use type | None, not Optional[type]).\n- Database: PostgreSQL with SQLAlchemy 2.0 (use AsyncSession and select()).\n- Validation: Pydantic v2 (use @field_validator, never @validator).\n\n## Testing Rules\n- Always run tests with: `pytest tests/`.\n- Every new endpoint must have a corresponding test in tests/api/.\n- Never mock database queries in integration tests; use ephemeral containers.</code></pre><p>Keep these files actionable and bulleted. Avoid narrative essays; agents respond best to crisp, declarative rules.</p><div class=\"callout\"><p><strong>Format Tip:</strong> Use imperative mood ('Use X', 'Never do Y') and categorize rules by topic (Architecture, Testing, Git, Security).</p></div>"
      },
      "trace": {
        "title": "Writing High-Impact Rules",
        "caption": "Declarative, imperative structure",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Agent Instructions Files (.cursorrules, copilot-instructions.md)"
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
              "step": "Fluffy & Vague"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Imperative & Crisp"
            }
          }
        ],
        "code": [
          "# Tracing Agent Instructions Files (.cursorrules, copilot-instructions.md)",
          "def execute_flow():",
          "    # Configuring agent instruction files: syntax, scope...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the instructions file sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Placing an instructions file like {1} in the repository root injects project standards directly into the agent's {2} prompt."
        ],
        "blanks": [
          {
            "a": [
              "copilot-instructions.md"
            ],
            "why": "Standard instructions file path"
          },
          {
            "a": [
              "system"
            ],
            "why": "The foundational instruction tier"
          }
        ]
      },
      "win": "You know how to configure and structure standard agent instruction files.",
      "nextTasks": [
        "Audit your project code and identify where agent instructions files (.cursorrules, copilot-instructions.md) applies.",
        "Author a unit test or verification script exercising agent instructions files (.cursorrules, copilot-instructions.md).",
        "Document team architectural conventions regarding agent instructions files (.cursorrules, copilot-instructions.md)."
      ],
      "primarySource": "Industry standards and best practices for Agent Instructions Files (.cursorrules, copilot-instructions.md).",
      "quiz": [
        {
          "q": "What tone and grammatical structure works best in agent instruction files?",
          "a": [
            "Concise, imperative bullet points stating exact do's and don'ts clearly",
            "Lengthy philosophical essays",
            "Poetic rhyming stanzas",
            "Passive voice paragraphs"
          ],
          "c": 0,
          "why": "Imperative bullet points provide clear, low-ambiguity directives for language models."
        },
        {
          "q": "What happens if an instruction file contains outdated rules that contradict the actual codebase?",
          "a": [
            "The agent becomes conflicted and may generate broken code; instructions must be kept strictly synchronized with code reality",
            "The IDE automatically updates the instruction file",
            "The git repository is locked",
            "The compiler fixes the contradiction"
          ],
          "c": 0,
          "why": "Stale instructions produce conflicting signals that degrade agent accuracy."
        },
        {
          "q": "Can instruction files be scoped to specific subdirectories or file types?",
          "a": [
            "Yes, modern tools like Cursor rules allow scoping instructions to specific file glob patterns like src/frontend/**",
            "No, instructions must apply to the entire internet",
            "Only on Windows operating systems",
            "Only in Java projects"
          ],
          "c": 0,
          "why": "Directory-scoped rules allow frontend and backend code to have dedicated, tailored conventions."
        },
        {
          "q": "Why is declaring the exact test execution command in the instructions file valuable?",
          "a": [
            "It allows the agent to run the correct test command with appropriate flags without guessing",
            "It compiles Python code into C",
            "It bypasses all test failures",
            "It reduces electricity costs"
          ],
          "c": 0,
          "why": "Stating `pytest -m unit` eliminates trial-and-error command exploration."
        }
      ],
      "next": {
        "title": "Architecture Decision Records (ADRs) as Agent Context",
        "desc": "Leverage ADRs to explain the 'why' behind architectural choices."
      }
    },
    {
      "n": 3,
      "id": "adrs-as-agent-context",
      "title": "Architecture Decision Records (ADRs) as Agent Context",
      "topic": "ADRs",
      "anim": "Generic",
      "lede": "Using Architecture Decision Records (ADRs) to give agents the historical reasoning and trade-offs behind designs.",
      "winShort": "You know how to use Architecture Decision Records to ground AI agents in design history.",
      "missionLink": "Mastering architecture decision records (adrs) as agent context across modern software engineering",
      "sec1": {
        "title": "Core principles of Architecture Decision Records (ADRs) as Agent Context",
        "content": "<p>Code tells you <em>how</em> a system works, and tests tell you <em>what</em> it does. But neither tells you <strong>why</strong> a particular design was chosen over another. Without understanding the <em>why</em>, an AI agent will frequently suggest 'simplifications' that undo months of careful architectural deliberation.</p>",
        "keyIdea": "Using Architecture Decision Records (ADRs) to give agents the historical reasoning and trade-offs behind designs."
      },
      "predict": {
        "q": "What is an Architecture Decision Record (ADR)?",
        "a": [
          "A short text document capturing an architectural decision, its context, consequences, and alternatives considered",
          "A legal contract with cloud providers",
          "An employee review document",
          "A financial tax filing for software companies"
        ],
        "c": 0,
        "why": "ADRs document the 'why' behind architectural choices so future engineers and agents understand trade-offs.",
        "prompt": "What is an Architecture Decision Record (ADR)?",
        "options": [
          "A short text document capturing an architectural decision, its context, consequences, and alternatives considered",
          "A legal contract with cloud providers",
          "An employee review document",
          "A financial tax filing for software companies"
        ],
        "answer": 0,
        "explanation": "ADRs document the 'why' behind architectural choices so future engineers and agents understand trade-offs."
      },
      "sec2": {
        "title": "Anatomy of an ADR",
        "content": "<p><strong>Architecture Decision Records (ADRs)</strong> are lightweight Markdown files (usually stored in `docs/decisions/` or `docs/adr/`) that capture decisions:</p>"
      },
      "diagram": {
        "title": "Anatomy of an ADR",
        "caption": "Structure of an Architecture Decision Record",
        "steps": [
          {
            "title": "1. Context",
            "lines": [
              "Problem description",
              "Forces & constraints"
            ]
          },
          {
            "title": "2. Decision",
            "lines": [
              "Chosen pattern or tool",
              "Implementation direction"
            ]
          },
          {
            "title": "3. Consequences",
            "lines": [
              "Benefits gained",
              "Trade-offs accepted"
            ]
          }
        ],
        "boxes": [
          {
            "title": "1. Context",
            "lines": [
              "Problem description",
              "Forces & constraints"
            ]
          },
          {
            "title": "2. Decision",
            "lines": [
              "Chosen pattern or tool",
              "Implementation direction"
            ]
          },
          {
            "title": "3. Consequences",
            "lines": [
              "Benefits gained",
              "Trade-offs accepted"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Preventing Architectural Regression",
        "content": "<ul><li><strong>Title & Status:</strong> e.g. `ADR-004: Use SQLite for local caching` (Accepted).</li><li><strong>Context:</strong> The technical problem or constraint faced.</li><li><strong>Decision:</strong> What we decided to do.</li><li><strong>Consequences:</strong> Trade-offs accepted (positive and negative).</li></ul><pre><code># docs/adr/003-use-argon2id-for-passwords.md\n# Status: Accepted\n\n## Context\nWe need to hash user passwords. bcrypt is popular, but NIST guidelines recommend\nArgon2id for memory-hard resistance against GPU-based cracking attacks.\n\n## Decision\nUse `argon2-cffi` with default parameters for all password hashing.\n\n## Consequences\n- Positive: Superior resistance to hardware attacks.\n- Negative: Higher CPU memory consumption during authentication benchmarks.</code></pre><p>When an agent is pointed to your ADR folder, it instantly respects your architectural history instead of speculatively suggesting bcrypt or MD5.</p><div class=\"callout\"><p><strong>Agent Ingestion:</strong> Keep ADRs short (1-2 pages). When an agent is working in a specific domain (e.g. auth), point it directly to the relevant ADR.</p></div>"
      },
      "trace": {
        "title": "Preventing Architectural Regression",
        "caption": "How ADRs safeguard design intent",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Architecture Decision Records (ADRs) as Agent Context"
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
              "step": "Without ADRs"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "With ADRs"
            }
          }
        ],
        "code": [
          "# Tracing Architecture Decision Records (ADRs) as Agent Context",
          "def execute_flow():",
          "    # Using Architecture Decision Records (ADRs) to give...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the ADR sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Architecture Decision Records document the historical {1} and trade-offs behind designs, preventing agents from undoing critical architectural {2}."
        ],
        "blanks": [
          {
            "a": [
              "reasoning"
            ],
            "why": "The 'why' behind choices"
          },
          {
            "a": [
              "decisions"
            ],
            "why": "Chosen patterns and tools"
          }
        ]
      },
      "win": "You know how to use Architecture Decision Records to ground AI agents in design history.",
      "nextTasks": [
        "Audit your project code and identify where architecture decision records (adrs) as agent context applies.",
        "Author a unit test or verification script exercising architecture decision records (adrs) as agent context.",
        "Document team architectural conventions regarding architecture decision records (adrs) as agent context."
      ],
      "primarySource": "Industry standards and best practices for Architecture Decision Records (ADRs) as Agent Context.",
      "quiz": [
        {
          "q": "What critical information does an ADR provide that source code alone cannot convey?",
          "a": [
            "The historical reasoning, evaluated alternatives, and accepted trade-offs behind a design choice",
            "The compiler version used to build it",
            "The exact line count of the file",
            "The git commit author's email"
          ],
          "c": 0,
          "why": "Source code shows what exists; ADRs capture the intent and rejected alternatives."
        },
        {
          "q": "Why is an agent without ADR context prone to suggesting bad refactorings?",
          "a": [
            "It may mistake intentional complexity (like security hardening or concurrency locks) for accidental messiness and try to simplify it",
            "It cannot read Python files",
            "It runs 10x slower",
            "It crashes the operating system"
          ],
          "c": 0,
          "why": "Without context on why complexity exists, agents often strip intentional safeguards."
        },
        {
          "q": "Where in a repository are ADRs typically stored?",
          "a": [
            "In a dedicated documentation directory like docs/adr/ or docs/decisions/",
            "Inside the git configuration folder",
            "In the /tmp/ directory",
            "In the database schema"
          ],
          "c": 0,
          "why": "Standard practice places version-controlled markdown ADRs under `docs/adr/`."
        },
        {
          "q": "How long should a standard ADR be?",
          "a": [
            "Short and focused: typically 1 to 2 pages capturing a single architectural choice",
            "At least 100 pages",
            "Exactly one sentence",
            "An ADR must be an executable binary"
          ],
          "c": 0,
          "why": "Concise ADRs are easy for both humans and AI agents to digest quickly."
        }
      ],
      "next": {
        "title": "Providing Golden Code Examples",
        "desc": "Anchor agent generation with curated reference files."
      }
    },
    {
      "n": 4,
      "id": "providing-golden-code-examples",
      "title": "Providing Golden Code Examples",
      "topic": "Golden Examples",
      "anim": "Generic",
      "lede": "Using curated 'Golden Files' to teach agents your idiomatic coding style, error handling, and testing patterns.",
      "winShort": "You know how to leverage golden code examples to enforce high-quality project idioms.",
      "missionLink": "Mastering providing golden code examples across modern software engineering",
      "sec1": {
        "title": "Core principles of Providing Golden Code Examples",
        "content": "<p>Language models learn best from <strong>concrete examples</strong>. You can write ten paragraphs explaining your error handling philosophy, but an agent will understand it in half a second if you simply say: <em>'Follow the pattern in src/endpoints/orders.py.'</em></p>",
        "keyIdea": "Using curated 'Golden Files' to teach agents your idiomatic coding style, error handling, and testing patterns."
      },
      "predict": {
        "q": "What is a 'Golden File' in the context of agent project context?",
        "a": [
          "A meticulously written production file cited as the authoritative template for style, patterns, and conventions",
          "A file containing cryptographic keys",
          "A file written in the Go programming language",
          "A file saved to a golden hard drive"
        ],
        "c": 0,
        "why": "Golden files provide real-world, few-shot examples of your project's ideal architectural style.",
        "prompt": "What is a 'Golden File' in the context of agent project context?",
        "options": [
          "A meticulously written production file cited as the authoritative template for style, patterns, and conventions",
          "A file containing cryptographic keys",
          "A file written in the Go programming language",
          "A file saved to a golden hard drive"
        ],
        "answer": 0,
        "explanation": "Golden files provide real-world, few-shot examples of your project's ideal architectural style."
      },
      "sec2": {
        "title": "The Power of Golden References",
        "content": "<p>A <strong>Golden File</strong> is an exemplary file in your repository that embodies your team's highest standards:</p>"
      },
      "diagram": {
        "title": "The Power of Golden References",
        "caption": "Few-shot architectural grounding",
        "steps": [
          {
            "title": "Abstract Instructions",
            "lines": [
              "'Use our error pattern'",
              "Vague, agent guesses implementation"
            ]
          },
          {
            "title": "Golden File Reference",
            "lines": [
              "'Follow src/endpoints/orders.py'",
              "Concrete, unambiguous template"
            ]
          },
          {
            "title": "Result",
            "lines": [
              "Identical style, imports & error handling",
              "Zero architectural friction"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Abstract Instructions",
            "lines": [
              "'Use our error pattern'",
              "Vague, agent guesses implementation"
            ]
          },
          {
            "title": "Golden File Reference",
            "lines": [
              "'Follow src/endpoints/orders.py'",
              "Concrete, unambiguous template"
            ]
          },
          {
            "title": "Result",
            "lines": [
              "Identical style, imports & error handling",
              "Zero architectural friction"
            ]
          }
        ]
      },
      "sec3": {
        "title": "The Golden Pair Pattern",
        "content": "<ul><li><strong>Clean Naming & Structure:</strong> Demonstrates idiomatic file layout, imports, and docstrings.</li><li><strong>Error Handling:</strong> Shows exactly how custom exceptions are caught, logged, and mapped to HTTP status codes.</li><li><strong>Typing & Validation:</strong> Illustrates standard type hint usage and schema validation.</li><li><strong>Corresponding Test File:</strong> Pairs with an exemplary test file showing standard fixture usage and assertion patterns.</li></ul><pre><code># Directing the Agent with a Golden Reference:\n\"Implement the new /subscriptions endpoint.\nFollow the exact pattern established in src/endpoints/orders.py:\n- Use the same @router decorators and response_model schemas.\n- Follow the error handling pattern in lines 45-62 (raising HTTPException with detail dict).\n- Mirror the test structure in tests/api/test_orders.py.\"</code></pre><p>Pointing an agent to an existing golden file delivers massive few-shot learning value with virtually zero prompt-writing effort.</p><div class=\"callout\"><p><strong>Curate, Don't Guess:</strong> Make sure the file you point to is genuinely high quality! If you point an agent to legacy spaghetti, it will happily replicate the spaghetti.</p></div>"
      },
      "trace": {
        "title": "The Golden Pair Pattern",
        "caption": "Providing both implementation and test templates",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Providing Golden Code Examples"
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
              "step": "Implementation Template"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Testing Template"
            }
          }
        ],
        "code": [
          "# Tracing Providing Golden Code Examples",
          "def execute_flow():",
          "    # Using curated 'Golden Files' to teach agents your ...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the golden example sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "A golden file acts as an authoritative {1} that demonstrates idiomatic project style, error handling, and {2}."
        ],
        "blanks": [
          {
            "a": [
              "template"
            ],
            "why": "Pattern or reference standard"
          },
          {
            "a": [
              "testing patterns"
            ],
            "why": "How tests are structured and verified"
          }
        ]
      },
      "win": "You know how to leverage golden code examples to enforce high-quality project idioms.",
      "nextTasks": [
        "Audit your project code and identify where providing golden code examples applies.",
        "Author a unit test or verification script exercising providing golden code examples.",
        "Document team architectural conventions regarding providing golden code examples."
      ],
      "primarySource": "Industry standards and best practices for Providing Golden Code Examples.",
      "quiz": [
        {
          "q": "Why is pointing to a golden file more effective than describing code style in prose?",
          "a": [
            "Models excel at in-context learning from real code; examples show imports, types, and nuances that prose overlooks",
            "Code files are cheaper to send than text",
            "Prose is forbidden in AI prompts",
            "Language models cannot read English prose"
          ],
          "c": 0,
          "why": "Concrete code examples convey subtle idioms, layout, and typing patterns with zero ambiguity."
        },
        {
          "q": "What is the danger of pointing an agent to an arbitrary, uncurated file in your repository?",
          "a": [
            "The file might contain outdated anti-patterns or legacy technical debt, which the agent will faithfully copy",
            "The file will be deleted",
            "The compiler will fail",
            "The operating system will crash"
          ],
          "c": 0,
          "why": "Agents mirror whatever code you point them to; pointing to poor code reproduces poor code."
        },
        {
          "q": "What two files make up an ideal 'Golden Pair'?",
          "a": [
            "An exemplary production implementation file and its corresponding high-quality test file",
            "A README file and a LICENSE file",
            "A package.json and a lockfile",
            "A CSS file and an HTML file"
          ],
          "c": 0,
          "why": "The pair shows both how to write the feature and how to verify it with tests."
        },
        {
          "q": "Where can golden files be cataloged for easy reference by agents?",
          "a": [
            "In your project's copilot-instructions.md or developer documentation",
            "In the browser bookmarks",
            "On a sticky note",
            "In git commit messages"
          ],
          "c": 0,
          "why": "Listing golden files in instruction files ensures all agent sessions know where to look."
        }
      ],
      "next": {
        "title": "Repository Maps and Architecture Guides",
        "desc": "Provide high-level mental maps of the codebase layout."
      }
    },
    {
      "n": 5,
      "id": "repo-maps-and-architecture-guides",
      "title": "Repository Maps and Architecture Guides",
      "topic": "Repo Maps",
      "anim": "Generic",
      "lede": "Creating concise repository maps and architecture overviews that orient agents in seconds.",
      "winShort": "You know how to create concise repository maps that orient AI agents immediately.",
      "missionLink": "Mastering repository maps and architecture guides across modern software engineering",
      "sec1": {
        "title": "Core principles of Repository Maps and Architecture Guides",
        "content": "<p>When an agent enters a 200,000-line repository, it is blind. It does not know that `apps/web` is the Next.js frontend, `packages/core` is the business logic, and `services/worker` is the Celery background queue. Without a map, it must guess.</p>",
        "keyIdea": "Creating concise repository maps and architecture overviews that orient agents in seconds."
      },
      "predict": {
        "q": "What is a 'Repository Map' in agent context engineering?",
        "a": [
          "A concise, structured overview of directory structure, module responsibilities, and system entry points",
          "A geographical map of where developers live",
          "A diagram of the company office building",
          "A satellite photo of the data center"
        ],
        "c": 0,
        "why": "A repository map provides a bird's-eye view of how modules, directories, and entry points relate.",
        "prompt": "What is a 'Repository Map' in agent context engineering?",
        "options": [
          "A concise, structured overview of directory structure, module responsibilities, and system entry points",
          "A geographical map of where developers live",
          "A diagram of the company office building",
          "A satellite photo of the data center"
        ],
        "answer": 0,
        "explanation": "A repository map provides a bird's-eye view of how modules, directories, and entry points relate."
      },
      "sec2": {
        "title": "The Power of a Repository Map",
        "content": "<p>A <strong>Repository Map</strong> (often documented in `ARCHITECTURE.md` or embedded in instruction files) provides an immediate mental model:</p>"
      },
      "diagram": {
        "title": "The Power of a Repository Map",
        "caption": "Bird's-eye architectural orientation",
        "steps": [
          {
            "title": "Without Repo Map",
            "lines": [
              "Agent lists 20 directories",
              "Guesses module relationships",
              "Imports cross layers blindly"
            ]
          },
          {
            "title": "With Repo Map",
            "lines": [
              "Reads 20-line architecture summary",
              "Understands boundaries immediately",
              "Zero illegal imports"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Without Repo Map",
            "lines": [
              "Agent lists 20 directories",
              "Guesses module relationships",
              "Imports cross layers blindly"
            ]
          },
          {
            "title": "With Repo Map",
            "lines": [
              "Reads 20-line architecture summary",
              "Understands boundaries immediately",
              "Zero illegal imports"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Dependency Direction Invariants",
        "content": "<pre><code># ARCHITECTURE.md: Repository Map\n## Directory Layout & Responsibilities\n- `src/api/`        -> FastAPI HTTP endpoints and routing.\n- `src/domain/`     -> Pure business entities and business rules (zero I/O!).\n- `src/storage/`    -> Database models, migrations, and repository implementations.\n- `src/workers/`    -> Celery tasks and event consumers.\n- `tests/`          -> pytest test suite (mirrors `src/` layout).\n\n## Dependency Invariants\n- `domain/` must NEVER import from `api/` or `storage/`.\n- `api/` calls `domain/` and `storage/` through dependency injection.</code></pre><p>This 15-line map saves thousands of tokens of blind directory listing tool calls and stops the agent from violating architectural boundaries.</p><div class=\"callout\"><p><strong>Boundary Defense:</strong> Explicitly stating dependency directions (e.g. <em>'Domain never imports Storage'</em>) keeps your architectural layers pure.</p></div>"
      },
      "trace": {
        "title": "Dependency Direction Invariants",
        "caption": "Preventing layer contamination",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Repository Maps and Architecture Guides"
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
              "step": "API Layer"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Domain Layer"
            }
          }
        ],
        "code": [
          "# Tracing Repository Maps and Architecture Guides",
          "def execute_flow():",
          "    # Creating concise repository maps and architecture ...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the repository map sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "A repository map describes directory responsibilities and enforces {1} direction invariants across architectural {2}."
        ],
        "blanks": [
          {
            "a": [
              "dependency"
            ],
            "why": "Which layer can import from which"
          },
          {
            "a": [
              "layers"
            ],
            "why": "Architectural tiers like domain and storage"
          }
        ]
      },
      "win": "You know how to create concise repository maps that orient AI agents immediately.",
      "nextTasks": [
        "Audit your project code and identify where repository maps and architecture guides applies.",
        "Author a unit test or verification script exercising repository maps and architecture guides.",
        "Document team architectural conventions regarding repository maps and architecture guides."
      ],
      "primarySource": "Industry standards and best practices for Repository Maps and Architecture Guides.",
      "quiz": [
        {
          "q": "Why is declaring dependency directions in an architecture guide critical for AI agents?",
          "a": [
            "It prevents the agent from creating circular dependencies or contaminating pure domain logic with database calls",
            "It makes Python run faster",
            "It reduces git repo disk space",
            "It prevents computers from crashing"
          ],
          "c": 0,
          "why": "Explicit layer rules prevent agents from taking expedient shortcuts that violate clean architecture."
        },
        {
          "q": "What should be the primary content of a repository map?",
          "a": [
            "A concise mapping of top-level directories to their core responsibilities and dependency rules",
            "A list of all git branches",
            "Every variable name in the project",
            "The names of all developers who ever committed"
          ],
          "c": 0,
          "why": "Directory responsibilities and boundary rules provide maximum architectural orientation."
        },
        {
          "q": "How does a repository map reduce token consumption during agent sessions?",
          "a": [
            "It prevents the agent from making dozens of exploratory file search and directory listing tool calls",
            "It compresses text into binary format",
            "It encrypts files",
            "It removes unit tests"
          ],
          "c": 0,
          "why": "Providing the map upfront eliminates blind, exploratory tool calling."
        },
        {
          "q": "Where should the repository map ideally be stored?",
          "a": [
            "In an ARCHITECTURE.md file in the root of the repository or linked directly from copilot-instructions.md",
            "In the user's private email inbox",
            "In a temporary operating system cache",
            "In a closed issue ticket"
          ],
          "c": 0,
          "why": "Version-controlled files in the repo root ensure all developers and AI agents can read them."
        }
      ],
      "next": {
        "title": "Tool Definitions and Workflow Scripts",
        "desc": "Arm agents with standardized scripts for building, testing, and linting."
      }
    },
    {
      "n": 6,
      "id": "tool-definitions-and-scripts",
      "title": "Tool Definitions and Workflow Scripts",
      "topic": "Tooling & Scripts",
      "anim": "Generic",
      "lede": "Providing agents with explicit workflow scripts (make, npm, just) and custom tool configurations.",
      "winShort": "You know how to provide standardized workflow scripts that streamline agent execution.",
      "missionLink": "Mastering tool definitions and workflow scripts across modern software engineering",
      "sec1": {
        "title": "Core principles of Tool Definitions and Workflow Scripts",
        "content": "<p>Every software project has specific execution rituals: <em>'Before running tests, you must set PYTHONPATH=. and export TEST_DB_URL=...'</em>. If an agent tries to run `pytest` naively, it will fail with import errors or missing database connections.</p>",
        "keyIdea": "Providing agents with explicit workflow scripts (make, npm, just) and custom tool configurations."
      },
      "predict": {
        "q": "Why is giving an agent standardized workflow scripts (e.g. 'make test', 'npm run lint') safer than letting it guess terminal commands?",
        "a": [
          "Standard scripts encapsulate exact environment variables, flags, and paths required by your specific project setup",
          "Terminal commands are illegal in commercial code",
          "Agents cannot execute bash commands",
          "Standard scripts run without CPU power"
        ],
        "c": 0,
        "why": "Project scripts wrap complex environment flags and setup commands into predictable, reliable invocations.",
        "prompt": "Why is giving an agent standardized workflow scripts (e.g. 'make test', 'npm run lint') safer than letting it guess terminal commands?",
        "options": [
          "Standard scripts encapsulate exact environment variables, flags, and paths required by your specific project setup",
          "Terminal commands are illegal in commercial code",
          "Agents cannot execute bash commands",
          "Standard scripts run without CPU power"
        ],
        "answer": 0,
        "explanation": "Project scripts wrap complex environment flags and setup commands into predictable, reliable invocations."
      },
      "sec2": {
        "title": "Workflow Scripts as Agent Interfaces",
        "content": "<p>The solution is to provide <strong>standardized workflow scripts</strong> using tools like `Makefile`, `justfile`, or `npm scripts`:</p>"
      },
      "diagram": {
        "title": "Workflow Scripts as Agent Interfaces",
        "caption": "Wrapping complex commands into predictable shortcuts",
        "steps": [
          {
            "title": "Naive Terminal Guessing",
            "lines": [
              "pytest -> Fails (missing PYTHONPATH)",
              "pytest -v -> Fails (no DB env var)",
              "Wasted turns debugging the runner"
            ]
          },
          {
            "title": "Standardized Workflow Script",
            "lines": [
              "make test-unit",
              "Pre-configured flags & environment",
              "Executes cleanly in 1 turn"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Naive Terminal Guessing",
            "lines": [
              "pytest -> Fails (missing PYTHONPATH)",
              "pytest -v -> Fails (no DB env var)",
              "Wasted turns debugging the runner"
            ]
          },
          {
            "title": "Standardized Workflow Script",
            "lines": [
              "make test-unit",
              "Pre-configured flags & environment",
              "Executes cleanly in 1 turn"
            ]
          }
        ]
      },
      "sec3": {
        "title": "The One-Command Verification Gate",
        "content": "<pre><code># Makefile / justfile: Project Workflow Contract\ntest-unit:\n    @PYTHONPATH=. pytest -m unit --tb=short\n\ntest-integration:\n    @docker compose up -d test-db\n    @PYTHONPATH=. pytest -m integration\n\nlint:\n    @ruff check src/ tests/\n    @mypy src/</code></pre><p>In your agent instructions, simply state: <em>'To run unit tests, execute `make test-unit`. To run linter, execute `make lint`.'</em> The agent now has zero friction, zero command guessing, and guaranteed environment parity.</p><div class=\"callout\"><p><strong>One-Command Verification:</strong> Provide a single `make check` command that runs linters, type checks, and fast tests together. The agent can run this single command to verify all gates!</p></div>"
      },
      "trace": {
        "title": "The One-Command Verification Gate",
        "caption": "Single verification command for agents",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Tool Definitions and Workflow Scripts"
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
              "step": "make check"
            }
          }
        ],
        "code": [
          "# Tracing Tool Definitions and Workflow Scripts",
          "def execute_flow():",
          "    # Providing agents with explicit workflow scripts (m...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the workflow script sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Standard workflow scripts like makefiles encapsulate {1} variables and flags into predictable {2} that agents can run cleanly."
        ],
        "blanks": [
          {
            "a": [
              "environment"
            ],
            "why": "Configuration settings like PYTHONPATH"
          },
          {
            "a": [
              "commands"
            ],
            "why": "Shell invocations like make test"
          }
        ]
      },
      "win": "You know how to provide standardized workflow scripts that streamline agent execution.",
      "nextTasks": [
        "Audit your project code and identify where tool definitions and workflow scripts applies.",
        "Author a unit test or verification script exercising tool definitions and workflow scripts.",
        "Document team architectural conventions regarding tool definitions and workflow scripts."
      ],
      "primarySource": "Industry standards and best practices for Tool Definitions and Workflow Scripts.",
      "quiz": [
        {
          "q": "Why is 'make check' or 'npm test' superior to having an agent compose raw shell commands?",
          "a": [
            "It prevents the agent from forgetting project-specific flags, environment variables, or path configurations",
            "It speeds up the internet connection",
            "It compiles Python into assembly language",
            "It bypasses all failing tests"
          ],
          "c": 0,
          "why": "Encapsulating flags and environment variables inside scripts ensures consistent, reproducible test execution."
        },
        {
          "q": "What happens if an agent tries to run integration tests without the required environment variables?",
          "a": [
            "The test runner fails immediately with connection or configuration errors, wasting time and turns",
            "The computer restarts",
            "The database automatically repairs itself",
            "The agent invents new environment variables"
          ],
          "c": 0,
          "why": "Missing environment variables cause confusing false failures that derail agent progress."
        },
        {
          "q": "What tool helps manage project workflow scripts on modern cross-platform development stacks?",
          "a": [
            "A Makefile, justfile, or npm package.json scripts",
            "A Microsoft Word document",
            "A spreadsheet",
            "A PDF viewer"
          ],
          "c": 0,
          "why": "Makefiles, justfiles, and npm scripts are standard execution runners recognized across all platforms."
        },
        {
          "q": "Where should the primary workflow commands be documented for the agent?",
          "a": [
            "In the repository's copilot-instructions.md or README.md",
            "In the user's browser bookmarks",
            "On a sticky note",
            "In git commit messages"
          ],
          "c": 0,
          "why": "Documenting build and test commands in instruction files primes the agent with the exact execution commands."
        }
      ],
      "next": {
        "title": "Keeping Project Context Fresh and Concise",
        "desc": "Prune obsolete rules and maintain instructions as code evolves."
      }
    },
    {
      "n": 7,
      "id": "keeping-context-fresh-and-concise",
      "title": "Keeping Project Context Fresh and Concise",
      "topic": "Context Maintenance",
      "anim": "Generic",
      "lede": "Maintaining agent instruction files over time: pruning obsolete rules, avoiding contradictions, and keeping context lean.",
      "winShort": "You know how to maintain fresh, lean, high-signal project context over time.",
      "missionLink": "Mastering keeping project context fresh and concise across modern software engineering",
      "sec1": {
        "title": "Core principles of Keeping Project Context Fresh and Concise",
        "content": "<p>Instruction files often suffer from <strong>uncontrolled bloat</strong>. Every time an agent makes a mistake, someone adds another three paragraphs to `.cursorrules` or `copilot-instructions.md`. Over a year, the file swells to 1,500 lines of conflicting, outdated, rambling rules.</p>",
        "keyIdea": "Maintaining agent instruction files over time: pruning obsolete rules, avoiding contradictions, and keeping context lean."
      },
      "predict": {
        "q": "What happens when an instruction file grows to 1,500 lines of historical rules and accumulated edge cases?",
        "a": [
          "Attention dilutes, instruction conflicts emerge, token consumption escalates, and the agent becomes less reliable",
          "The agent becomes 10x smarter",
          "The computer runs out of storage",
          "Python refuses to compile files"
        ],
        "c": 0,
        "why": "Overly long instruction files cause attention saturation and conflicting instructions.",
        "prompt": "What happens when an instruction file grows to 1,500 lines of historical rules and accumulated edge cases?",
        "options": [
          "Attention dilutes, instruction conflicts emerge, token consumption escalates, and the agent becomes less reliable",
          "The agent becomes 10x smarter",
          "The computer runs out of storage",
          "Python refuses to compile files"
        ],
        "answer": 0,
        "explanation": "Overly long instruction files cause attention saturation and conflicting instructions."
      },
      "sec2": {
        "title": "Instruction Bloat vs Lean Discipline",
        "content": "<p>To keep project context effective, treat your instructions like production code:</p>"
      },
      "diagram": {
        "title": "Instruction Bloat vs Lean Discipline",
        "caption": "Pruning trivia to preserve attention budget",
        "steps": [
          {
            "title": "Bloated Instructions (1,500 lines)",
            "lines": [
              "Formatting trivia (quotes, indentation)",
              "Conflicting historical rules",
              "High token cost, low attention focus"
            ]
          },
          {
            "title": "Lean Instructions (100 lines)",
            "lines": [
              "Pure architectural invariants",
              "Domain rules linters cannot check",
              "Maximum attention density"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Bloated Instructions (1,500 lines)",
            "lines": [
              "Formatting trivia (quotes, indentation)",
              "Conflicting historical rules",
              "High token cost, low attention focus"
            ]
          },
          {
            "title": "Lean Instructions (100 lines)",
            "lines": [
              "Pure architectural invariants",
              "Domain rules linters cannot check",
              "Maximum attention density"
            ]
          }
        ]
      },
      "sec3": {
        "title": "The Division of Enforcement",
        "content": "<ul><li><strong>Ruthless Pruning:</strong> If an automated linter (Ruff, ESLint) can enforce a rule, <em>delete it from the instructions!</em> Let linters catch formatting and syntax; save context for architecture and domain rules.</li><li><strong>Eliminate Contradictions:</strong> Audit rules regularly. Having 'Use Pydantic v1' on line 40 and 'Use Pydantic v2' on line 200 confuses the model.</li><li><strong>Keep Under 150-200 Lines:</strong> A concise, punchy list of 30 rules outperforms a 1,000-line manual every time.</li></ul><pre><code># BAD (Linters should handle this! Delete!):\n- Use double quotes for strings.\n- Indent with 4 spaces.\n- Sort imports alphabetically.\n\n# GOOD (Only humans/context can teach this! Keep!):\n- In the billing domain, all monetary amounts must be integers representing cents.\n- Never delete historical invoice records; use soft-deletion with deleted_at timestamp.\n- Follow the service layer pattern in src/billing/service.py.</code></pre><div class=\"callout\"><p><strong>The Linter Rule:</strong> Never waste prompt tokens on things your automated linter or type checker checks for free in milliseconds.</p></div>"
      },
      "trace": {
        "title": "The Division of Enforcement",
        "caption": "Linters vs Prompt Instructions",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Keeping Project Context Fresh and Concise"
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
              "step": "Automated Linter (Ruff/ESLint)"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Agent Instructions File"
            }
          }
        ],
        "code": [
          "# Tracing Keeping Project Context Fresh and Concise",
          "def execute_flow():",
          "    # Maintaining agent instruction files over time: pru...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the context maintenance sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Keep instruction files lean by delegating formatting rules to {1} and reserving context tokens for {2} invariants."
        ],
        "blanks": [
          {
            "a": [
              "linters"
            ],
            "why": "Automated static analysis tools"
          },
          {
            "a": [
              "architectural"
            ],
            "why": "High-level design and domain constraints"
          }
        ]
      },
      "win": "You know how to maintain fresh, lean, high-signal project context over time.",
      "nextTasks": [
        "Audit your project code and identify where keeping project context fresh and concise applies.",
        "Author a unit test or verification script exercising keeping project context fresh and concise.",
        "Document team architectural conventions regarding keeping project context fresh and concise."
      ],
      "primarySource": "Industry standards and best practices for Keeping Project Context Fresh and Concise.",
      "quiz": [
        {
          "q": "Why is putting formatting rules like 'use 4 spaces' in an agent instructions file wasteful?",
          "a": [
            "Formatting is checked and fixed instantly by automated linters like Prettier or Ruff with zero token cost",
            "Language models cannot count spaces",
            "Formatting is illegal in Python",
            "Spaces cannot be tokenized"
          ],
          "c": 0,
          "why": "Linters and formatters enforce syntax rules at zero token cost; save instructions for architecture."
        },
        {
          "q": "What is the recommended size ceiling for a primary agent instructions file?",
          "a": [
            "Around 100 to 200 lines of concise, high-density bullet points",
            "At least 5,000 lines",
            "Exactly one word",
            "As many lines as can fit on a hard drive"
          ],
          "c": 0,
          "why": "Keeping instructions under 200 lines ensures high attention focus and low token overhead."
        },
        {
          "q": "What should you do when you discover two conflicting rules in an instruction file?",
          "a": [
            "Delete or reconcile the contradiction immediately so the agent has a single, coherent directive",
            "Leave both and let the model flip a coin",
            "Double the size of the file",
            "Add an apology comment"
          ],
          "c": 0,
          "why": "Contradictory rules generate cognitive dissonance and unpredictable agent behavior."
        },
        {
          "q": "How frequently should a team audit and refactor its agent instruction files?",
          "a": [
            "Regularly, alongside major architectural shifts or dependency upgrades",
            "Never; instruction files are written once and frozen forever",
            "Every hour",
            "Only when the company changes its name"
          ],
          "c": 0,
          "why": "Regular audits ensure instructions match current codebase reality and clean out stale rules."
        }
      ],
      "next": {
        "title": "Testing Agent Alignment with Project Standards",
        "desc": "Audit and verify that agents reliably adhere to your project context."
      }
    },
    {
      "n": 8,
      "id": "testing-agent-alignment",
      "title": "Testing Agent Alignment with Project Standards",
      "topic": "Alignment Audits",
      "anim": "Generic",
      "lede": "Auditing and evaluating agent compliance against your project standards using benchmark test prompts.",
      "winShort": "You have completed the Giving AI Agents the Right Project Context course.",
      "missionLink": "Mastering testing agent alignment with project standards across modern software engineering",
      "sec1": {
        "title": "Core principles of Testing Agent Alignment with Project Standards",
        "content": "<p>Software engineers don't deploy code without tests. Similarly, you shouldn't assume your agent instructions work without <strong>alignment testing</strong>. Does the agent actually use Pydantic v2? Does it remember to run tests with `make test`? Does it follow your golden error-handling pattern?</p>",
        "keyIdea": "Auditing and evaluating agent compliance against your project standards using benchmark test prompts."
      },
      "predict": {
        "q": "How do you scientifically verify whether your project context instructions actually work?",
        "a": [
          "Run benchmark prompts against an agent and audit whether the generated diffs adhere to stated conventions",
          "Assume the agent works perfectly without checking",
          "Ask the agent if it read the file",
          "Check if the file was saved to git"
        ],
        "c": 0,
        "why": "Empirical testing with benchmark prompts verifies whether instructions genuinely guide agent behavior.",
        "prompt": "How do you scientifically verify whether your project context instructions actually work?",
        "options": [
          "Run benchmark prompts against an agent and audit whether the generated diffs adhere to stated conventions",
          "Assume the agent works perfectly without checking",
          "Ask the agent if it read the file",
          "Check if the file was saved to git"
        ],
        "answer": 0,
        "explanation": "Empirical testing with benchmark prompts verifies whether instructions genuinely guide agent behavior."
      },
      "sec2": {
        "title": "The Alignment Eval Loop",
        "content": "<p>To test agent alignment, establish an <strong>Agent Eval Benchmark</strong>:</p>"
      },
      "diagram": {
        "title": "The Alignment Eval Loop",
        "caption": "Empirical validation of agent instructions",
        "steps": [
          {
            "title": "1. Run Benchmark Task",
            "lines": [
              "Standard test prompt",
              "Generate multi-file diff"
            ]
          },
          {
            "title": "2. Audit Checklist",
            "lines": [
              "Check naming, schemas, tests",
              "Score compliance rate"
            ]
          },
          {
            "title": "3. Refine Context",
            "lines": [
              "Clarify failing rules",
              "Verify 100% adherence"
            ]
          }
        ],
        "boxes": [
          {
            "title": "1. Run Benchmark Task",
            "lines": [
              "Standard test prompt",
              "Generate multi-file diff"
            ]
          },
          {
            "title": "2. Audit Checklist",
            "lines": [
              "Check naming, schemas, tests",
              "Score compliance rate"
            ]
          },
          {
            "title": "3. Refine Context",
            "lines": [
              "Clarify failing rules",
              "Verify 100% adherence"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Continuous Context Improvement",
        "content": "<ul><li><strong>1. Benchmark Prompt:</strong> Give the agent a representative task (e.g. <em>'Add a GET /health endpoint'</em>).</li><li><strong>2. Observe Compliance:</strong> Inspect the resulting diff against your conventions checklist: Did it use the right decorators? Did it put the schema in `src/schemas/`? Did it write a test in `tests/api/`?</li><li><strong>3. Failure Analysis:</strong> If the agent failed a rule, diagnose why: Was the rule buried in the middle of a 1,000-line file? Was it ambiguous? Was it contradicted elsewhere?</li><li><strong>4. Refine & Iterate:</strong> Sharpen the rule, re-run the benchmark, and verify compliance.</li></ul><pre><code># Agent Alignment Audit Checklist:\n[x] Rule 1: Uses async def for all route handlers -> PASS (compliance)\n[x] Rule 2: Uses schemas/ directory for models      -> PASS (compliance)\n[!] Rule 3: Uses custom AppError exception        -> FAIL (Agent used ValueError!)\n# Action: Move Rule 3 to top of instructions and add a 2-line code example. Re-test!</code></pre><div class=\"callout\"><p><strong>The Payoff:</strong> A verified, battle-tested project context file saves hundreds of hours of manual PR review across your entire engineering team.</p></div>"
      },
      "trace": {
        "title": "Continuous Context Improvement",
        "caption": "Treating instructions as an engineering asset",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Testing Agent Alignment with Project Standards"
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
              "step": "Ambiguous Rule"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Tested Instruction"
            }
          }
        ],
        "code": [
          "# Tracing Testing Agent Alignment with Project Standards",
          "def execute_flow():",
          "    # Auditing and evaluating agent compliance against y...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the alignment audit sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Testing agent alignment uses benchmark prompts and compliance {1} to empirically prove that instructions guide code {2}."
        ],
        "blanks": [
          {
            "a": [
              "checklists"
            ],
            "why": "Verification lists of conventions"
          },
          {
            "a": [
              "generation"
            ],
            "why": "Producing software changes"
          }
        ]
      },
      "win": "You have completed the Giving AI Agents the Right Project Context course.",
      "nextTasks": [
        "Audit your project code and identify where testing agent alignment with project standards applies.",
        "Author a unit test or verification script exercising testing agent alignment with project standards.",
        "Document team architectural conventions regarding testing agent alignment with project standards."
      ],
      "primarySource": "Industry standards and best practices for Testing Agent Alignment with Project Standards.",
      "quiz": [
        {
          "q": "What is an effective way to test if an agent is obeying your testing instructions?",
          "a": [
            "Check if the agent automatically executes the designated test command (e.g. 'make test') before reporting task completion",
            "Ask the agent if it likes tests",
            "Delete all test files to see if it complains",
            "Check the weather report"
          ],
          "c": 0,
          "why": "Observing whether the agent invokes the specified verification command proves behavioral adherence."
        },
        {
          "q": "What should you do if an agent repeatedly fails a specific convention despite it being in the instructions?",
          "a": [
            "Rewrite the rule with an explicit negative constraint and a short before/after code example",
            "Delete the repository",
            "Yell at the monitor",
            "Switch to writing all code by hand"
          ],
          "c": 0,
          "why": "Sharpening the instruction with an explicit example and negative constraint dramatically boosts compliance."
        },
        {
          "q": "Why is asking an agent 'Did you read the instructions?' ineffective as a test?",
          "a": [
            "Language models are sycophantic and will almost always answer 'Yes' even if they overlooked the rule in generation",
            "Models cannot answer yes or no questions",
            "The chat window blocks questions",
            "It is considered impolite"
          ],
          "c": 0,
          "why": "Models exhibit sycophancy; only empirical inspection of generated code diffs proves adherence."
        },
        {
          "q": "What is the ultimate value of high-quality project context engineering?",
          "a": [
            "Agents produce code that blends seamlessly into your repository on the first attempt, minimizing review overhead",
            "It eliminates the need for software developers",
            "It turns off all computer monitors",
            "It makes servers completely free"
          ],
          "c": 0,
          "why": "Seamless alignment reduces PR review friction and accelerates development velocity."
        }
      ],
      "next": {
        "title": "Next Course: AI-Assisted Debugging",
        "desc": "Learn how to use AI agents to form and test hypotheses while keeping evidence in charge."
      }
    }
  ]
};

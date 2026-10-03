"use strict";

module.exports = {
  "id": "large-ai-coding-projects",
  "title": "Managing Large AI Coding Projects",
  "num": 59,
  "emoji": "🗺️",
  "desc": "Breaking big goals into verifiable steps, keeping context fresh, and knowing when to take the wheel.",
  "topics": [
    "Project Management",
    "Hierarchical Planning",
    "Git Branches",
    "Worktrees",
    "Checkpoints",
    "Context Resets",
    "Parallel Workflows",
    "CI Truth"
  ],
  "mission": "# Mission — Managing Large AI Coding Projects\n\nScale AI coding agents from small scripts to multi-day software systems. Master hierarchical planning, maintain branch hygiene with git worktrees, practice checkpoint-driven development, execute strategic context resets, coordinate parallel agent workflows, enforce CI as the source of truth, and know when to take manual control.",
  "notes": "# Notes — Managing Large AI Coding Projects\n\nCompounding errors destroy monolithic prompts. Decompose work into small verified tasks, reset context frequently, and maintain strict git checkpoints.",
  "resources": "# Resources — Managing Large AI Coding Projects\n\n- Kent Beck, *Extreme Programming Explained: Embrace Change*\n- Jez Humble & David Farley, *Continuous Delivery*\n- Git Documentation, *Git Worktree Guide*",
  "glossaryGroups": [
    {
      "id": "planning",
      "title": "Planning & Scale",
      "terms": [
        {
          "term": "Hierarchical Planning",
          "def": "Structuring software projects across Strategic Milestones, Tactical Tasks, and Operational Steps.",
          "lesson": 2,
          "tags": [
            "planning",
            "scale"
          ]
        },
        {
          "term": "Milestone-Driven Execution",
          "def": "Dividing ambitious projects into verified phases to prevent compounding probabilistic error.",
          "lesson": 1,
          "tags": [
            "methodology",
            "scale"
          ]
        },
        {
          "term": "Compounding Error",
          "def": "The exponential decrease in overall success probability when many unverified AI steps are chained together.",
          "lesson": 1,
          "tags": [
            "ai",
            "math"
          ]
        }
      ]
    },
    {
      "id": "git",
      "title": "Git & Isolation",
      "terms": [
        {
          "term": "Git Worktree",
          "def": "A feature allowing multiple linked working directories attached to the same repository for parallel checkouts.",
          "lesson": 3,
          "tags": [
            "git",
            "tooling"
          ]
        },
        {
          "term": "Checkpoint Development",
          "def": "Committing a known good state before risky agent tasks so you can pull the ripcord and revert instantly.",
          "lesson": 4,
          "tags": [
            "git",
            "safety"
          ]
        },
        {
          "term": "Ripcord Revert",
          "def": "Using git reset --hard HEAD to instantly abandon a confused agent exploration and restore a clean baseline.",
          "lesson": 4,
          "tags": [
            "git",
            "workflow"
          ]
        }
      ]
    },
    {
      "id": "lifecycle",
      "title": "Lifecycle & State",
      "terms": [
        {
          "term": "Context Reset",
          "def": "Closing a saturated agent session and starting a fresh session with a distilled handoff summary.",
          "lesson": 5,
          "tags": [
            "context",
            "workflow"
          ]
        },
        {
          "term": "Parallel Agent Workflow",
          "def": "Running multiple agents simultaneously on decoupled files and branches building toward shared contracts.",
          "lesson": 6,
          "tags": [
            "agents",
            "concurrency"
          ]
        },
        {
          "term": "Pre-Committed Contract",
          "def": "An agreed-upon schema or interface committed to the base branch before dispatching parallel agents.",
          "lesson": 6,
          "tags": [
            "contracts",
            "architecture"
          ]
        }
      ]
    },
    {
      "id": "governance",
      "title": "Truth & Craftsmanship",
      "terms": [
        {
          "term": "Source of Truth",
          "def": "The authoritative system (Continuous Integration) whose binary verdicts determine whether code is ready to ship.",
          "lesson": 7,
          "tags": [
            "ci",
            "quality"
          ]
        },
        {
          "term": "Prompt Stubbornness",
          "def": "The anti-pattern of spending hours repeatedly re-prompting an agent instead of writing the fix by hand.",
          "lesson": 8,
          "tags": [
            "workflow",
            "craft"
          ]
        },
        {
          "term": "3-Turn Rule",
          "def": "A heuristic mandating that developers take manual control if an agent fails to resolve an issue within 3 turns.",
          "lesson": 8,
          "tags": [
            "workflow",
            "heuristics"
          ]
        }
      ]
    }
  ],
  "cheatsheetSections": [
    {
      "title": "Hierarchical Project Plan Template",
      "label": "PROJECT_PLAN.md structure",
      "code": "## Milestone 1: Core Domain (Target: 100% Unit Green)\n- [x] Task 1.1: Define pure Money & Order entities\n- [ ] Task 1.2: Implement discount calculation\n## Milestone 2: Persistence (Target: Testcontainers Green)\n- [ ] Task 2.1: Define UserRepository Protocol",
      "lessonN": 2,
      "lessonSlug": "hierarchical-planning-milestones",
      "lessonTitle": "Hierarchical Planning: Milestones, Tasks, and Steps"
    },
    {
      "title": "Git Worktree Parallel Setup",
      "label": "Isolated parallel workspaces",
      "code": "# Create clean worktree for Agent A:\ngit worktree add ../agent-billing feat/billing-service\n# Create clean worktree for Agent B:\ngit worktree add ../agent-notify feat/notification-service",
      "lessonN": 3,
      "lessonSlug": "working-trees-stashes-branching",
      "lessonTitle": "Managing Working Trees, Stashes, and Branching Strategies"
    },
    {
      "title": "The Ripcord Revert Command",
      "label": "Abandoning confused exploration",
      "code": "# If agent thrashes across 15 files:\ngit reset --hard HEAD\ngit clean -fd\n# Returns to pristine baseline in 200ms!",
      "lessonN": 4,
      "lessonSlug": "checkpoint-driven-development",
      "lessonTitle": "Checkpoint-Driven Development: Save Points and Reverts"
    },
    {
      "title": "Milestone Handoff Prompt",
      "label": "Fresh session kickoff briefing",
      "code": "\"Continuing Billing project. Milestone 1 is verified green in git.\nYour task: Implement StripeGateway in src/billing/stripe.py\nmatching the Protocol in src/billing/ports.py.\nVerify with: `pytest tests/test_stripe.py`.\"",
      "lessonN": 5,
      "lessonSlug": "managing-context-resets",
      "lessonTitle": "Managing Context Resets Across Long Multi-Day Tasks"
    }
  ],
  "lessons": [
    {
      "n": 1,
      "id": "danger-of-vague-prompts-large-projects",
      "title": "The Danger of Vague Prompts on Large Projects",
      "topic": "Large Projects",
      "anim": "Generic",
      "lede": "Why large, multi-day engineering initiatives fail when directed with casual, underspecified prompts.",
      "winShort": "You understand why large projects require disciplined hierarchical planning.",
      "missionLink": "Mastering the danger of vague prompts on large projects across modern software engineering",
      "sec1": {
        "title": "Core principles of The Danger of Vague Prompts on Large Projects",
        "content": "<p>When engineers first experience AI agents, they are tempted to give immense, open-ended prompts: <em>'Build a real-time collaborative document editor with auth, websockets, PDF export, and billing.'</em></p>",
        "keyIdea": "Why large, multi-day engineering initiatives fail when directed with casual, underspecified prompts."
      },
      "predict": {
        "q": "Why do ambitious prompts like 'Build a complete SaaS platform with Stripe billing and auth' fail with AI agents?",
        "a": [
          "The task contains thousands of hidden architectural decisions and edge cases that exceed agent planning horizons",
          "Language models refuse to build software that makes money",
          "Operating systems block commercial software generation",
          "SaaS platforms are forbidden by AI companies"
        ],
        "c": 0,
        "why": "Ambitious monolithic prompts overwhelm planning capacity and lead to half-implemented, disjointed prototypes.",
        "prompt": "Why do ambitious prompts like 'Build a complete SaaS platform with Stripe billing and auth' fail with AI agents?",
        "options": [
          "The task contains thousands of hidden architectural decisions and edge cases that exceed agent planning horizons",
          "Language models refuse to build software that makes money",
          "Operating systems block commercial software generation",
          "SaaS platforms are forbidden by AI companies"
        ],
        "answer": 0,
        "explanation": "Ambitious monolithic prompts overwhelm planning capacity and lead to half-implemented, disjointed prototypes."
      },
      "sec2": {
        "title": "Compounding Probability of Error",
        "content": "<p>The agent enthusiastically sets to work. It creates 30 files, writes 2,000 lines of plausible code, installs 15 packages—and leaves you with a tangled, non-functional mess that doesn't compile, has zero tests, and has half-implemented stubs everywhere.</p>"
      },
      "diagram": {
        "title": "Compounding Probability of Error",
        "caption": "Why large unverified tasks inevitably fail",
        "steps": [
          {
            "title": "Step 1 (90% success)",
            "lines": [
              "Core models look great",
              "High probability of correctness"
            ]
          },
          {
            "title": "Step 5 (59% success)",
            "lines": [
              "Small subtle drift begins",
              "Error probability accumulating"
            ]
          },
          {
            "title": "Step 20 (12% success)",
            "lines": [
              "Compounding errors cascade",
              "System completely broken"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Step 1 (90% success)",
            "lines": [
              "Core models look great",
              "High probability of correctness"
            ]
          },
          {
            "title": "Step 5 (59% success)",
            "lines": [
              "Small subtle drift begins",
              "Error probability accumulating"
            ]
          },
          {
            "title": "Step 20 (12% success)",
            "lines": [
              "Compounding errors cascade",
              "System completely broken"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Milestone-Driven Execution",
        "content": "<p>Large software projects fail when treated as monolithic prompts because:</p><ul><li><strong>Context Saturation:</strong> An agent cannot hold the architectural nuances of 5 distinct subsystems in context at once.</li><li><strong>Compounding Probabilistic Error:</strong> If an agent has a 90% chance of getting a step right, after 20 unverified steps the probability of the system working is $0.90^{20} = 12\\%$!</li><li><strong>Hidden Scope Creep:</strong> Unspecified requirements result in arbitrary architectural shortcuts.</li></ul><pre><code># The Monolithic Failure vs Hierarchical Success:\n# FAILURE: One massive prompt -> 30 broken files, dead end.\n# SUCCESS: Hierarchical decomposition into 4 milestones:\n#   Milestone 1: Core Domain Entities & In-Memory Logic (Verified by unit tests)\n#   Milestone 2: Database Schema & Repository Layer (Verified by Testcontainers)\n#   Milestone 3: HTTP API & Pydantic Validation (Verified by TestClient)\n#   Milestone 4: Realtime WebSocket Layer (Verified by integration tests)</code></pre><div class=\"callout\"><p><strong>The Rule of Scale:</strong> The larger the project, the smaller and more tightly verified each individual agent task must be.</p></div>"
      },
      "trace": {
        "title": "Milestone-Driven Execution",
        "caption": "Resetting error probability at each gate",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "The Danger of Vague Prompts on Large Projects"
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
              "step": "Milestone 1 (Verified)"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Milestone 2 (Verified)"
            }
          },
          {
            "line": 3,
            "vars": {
              "step": "Result: Predictable Scale"
            }
          }
        ],
        "code": [
          "# Tracing The Danger of Vague Prompts on Large Projects",
          "def execute_flow():",
          "    # Why large, multi-day engineering initiatives fail ...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the large projects sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Monolithic prompts fail on large projects because unverified errors compound {1}, demanding hierarchical decomposition into verified {2}."
        ],
        "blanks": [
          {
            "a": [
              "probabilistically"
            ],
            "why": "Compounding mathematical odds"
          },
          {
            "a": [
              "milestones"
            ],
            "why": "Sequential verified project phases"
          }
        ]
      },
      "win": "You understand why large projects require disciplined hierarchical planning.",
      "nextTasks": [
        "Audit your project code and identify where the danger of vague prompts on large projects applies.",
        "Author a unit test or verification script exercising the danger of vague prompts on large projects.",
        "Document team architectural conventions regarding the danger of vague prompts on large projects."
      ],
      "primarySource": "Industry standards and best practices for The Danger of Vague Prompts on Large Projects.",
      "quiz": [
        {
          "q": "What happens mathematically when an agent attempts a 20-step task without intermediate verification?",
          "a": [
            "Even with high per-step accuracy, small errors compound, making the overall probability of success very low",
            "The probability of success reaches 100%",
            "The computer runs out of memory",
            "The context window doubles"
          ],
          "c": 0,
          "why": "Multiplying high individual probabilities across many unverified steps causes overall success rates to collapse."
        },
        {
          "q": "How does milestone-driven execution solve the compounding error problem?",
          "a": [
            "Each milestone is verified with automated tests and committed to git, resetting the baseline before starting the next step",
            "It tells the agent to try harder",
            "It skips writing code",
            "It reduces developer salaries"
          ],
          "c": 0,
          "why": "Verifying each milestone locks in correctness, preventing errors from cascading into subsequent steps."
        },
        {
          "q": "What is the primary role of the lead engineer on a large AI-assisted coding project?",
          "a": [
            "Architecting the milestone breakdown, defining interface boundaries, and enforcing verification gates",
            "Writing all 10,000 lines of code by hand",
            "Disabling terminal access for agents",
            "Rejecting all AI contributions"
          ],
          "c": 0,
          "why": "The lead engineer acts as the architect and system planner, directing agent execution."
        },
        {
          "q": "What should you do if an agent produces a large diff that only half-implements three different features?",
          "a": [
            "Revert the changes with git, reduce scope to one single feature, and provide a strict acceptance contract",
            "Merge it and hope for the best",
            "Ask the agent to finish everything in one more turn",
            "Delete the repository"
          ],
          "c": 0,
          "why": "Reverting and narrowing scope restores focus and establishes clean, incremental progress."
        }
      ],
      "next": {
        "title": "Hierarchical Planning: Milestones, Tasks, and Steps",
        "desc": "Break down massive software projects into actionable, verifiable tiers."
      }
    },
    {
      "n": 2,
      "id": "hierarchical-planning-milestones",
      "title": "Hierarchical Planning: Milestones, Tasks, and Steps",
      "topic": "Hierarchical Planning",
      "anim": "Generic",
      "lede": "Structuring complex projects across three planning tiers: Strategic Milestones, Actionable Tasks, and Verification Steps.",
      "winShort": "You know how to structure complex projects using hierarchical planning.",
      "missionLink": "Mastering hierarchical planning: milestones, tasks, and steps across modern software engineering",
      "sec1": {
        "title": "Core principles of Hierarchical Planning: Milestones, Tasks, and Steps",
        "content": "<p>To execute a large engineering initiative successfully with AI agents, you must think in <strong>Hierarchical Planning</strong>. You decompose high-level business goals into three distinct operational tiers:</p>",
        "keyIdea": "Structuring complex projects across three planning tiers: Strategic Milestones, Actionable Tasks, and Verification Steps."
      },
      "predict": {
        "q": "What is the recommended size of a single 'Actionable Task' given to an AI agent?",
        "a": [
          "A task touching 1 to 3 related files that can be completed and verified with tests in a single session",
          "An entire 6-month product roadmap",
          "A single keystroke",
          "A complete database rewrite"
        ],
        "c": 0,
        "why": "Tasks should be bite-sized, touching 1-3 files and verifiable within a single session.",
        "prompt": "What is the recommended size of a single 'Actionable Task' given to an AI agent?",
        "options": [
          "A task touching 1 to 3 related files that can be completed and verified with tests in a single session",
          "An entire 6-month product roadmap",
          "A single keystroke",
          "A complete database rewrite"
        ],
        "answer": 0,
        "explanation": "Tasks should be bite-sized, touching 1-3 files and verifiable within a single session."
      },
      "sec2": {
        "title": "The Three Planning Tiers",
        "content": "<ul><li><strong>Tier 1: Milestones (Strategic):</strong> Multi-day architectural achievements (e.g. <em>'Milestone 1: Pure Domain Engine & Invariant Tests'</em>, <em>'Milestone 2: Postgres Persistence & Repositories'</em>).</li><li><strong>Tier 2: Tasks (Tactical):</strong> Focused units of work touching 1-3 files (e.g. <em>'Task 1.2: Implement discount calculation entity with unit tests'</em>). This is the exact unit of work given to an agent session!</li><li><strong>Tier 3: Steps (Operational):</strong> The ReAct tool-calling loop (edit line 42, run pytest, fix syntax). The agent executes these autonomously.</li></ul>"
      },
      "diagram": {
        "title": "The Three Planning Tiers",
        "caption": "Decomposing complexity from strategy to execution",
        "steps": [
          {
            "title": "Tier 1: Milestone (Architect)",
            "lines": [
              "Strategic subsystem delivery",
              "Spans 3-5 days of work"
            ]
          },
          {
            "title": "Tier 2: Task (Agent Prompt)",
            "lines": [
              "Touches 1-3 files, 1 hour scope",
              "Specific goal & acceptance criteria"
            ]
          },
          {
            "title": "Tier 3: Steps (Agent Loop)",
            "lines": [
              "Read file, edit line, run pytest",
              "Autonomous tool-calling loop"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Tier 1: Milestone (Architect)",
            "lines": [
              "Strategic subsystem delivery",
              "Spans 3-5 days of work"
            ]
          },
          {
            "title": "Tier 2: Task (Agent Prompt)",
            "lines": [
              "Touches 1-3 files, 1 hour scope",
              "Specific goal & acceptance criteria"
            ]
          },
          {
            "title": "Tier 3: Steps (Agent Loop)",
            "lines": [
              "Read file, edit line, run pytest",
              "Autonomous tool-calling loop"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Project Plan as Anchor",
        "content": "<pre><code># The Hierarchical Plan in PROJECT_PLAN.md:\n## Milestone 1: Core Billing Engine\n- [x] Task 1.1: Define Money Value Object and Currency enum (src/billing/money.py)\n- [x] Task 1.2: Implement Invoice entity with line item calculation (src/billing/invoice.py)\n- [ ] Task 1.3: Author unit tests for discount and tax calculations (tests/test_billing.py)\n\n## Milestone 2: Stripe Payment Gateway Adapter\n- [ ] Task 2.1: Define PaymentGateway protocol interface (src/billing/ports.py)\n- [ ] Task 2.2: Implement StripeGateway adapter with webhook handler (src/billing/adapters.py)</code></pre><p>By maintaining a `PROJECT_PLAN.md` file in the repository, both human engineers and AI agents share a persistent map of progress and active priorities.</p><div class=\"callout\"><p><strong>The Golden Rule:</strong> Never prompt an agent with a Milestone. Always prompt an agent with a single, specific Task!</p></div>"
      },
      "trace": {
        "title": "Project Plan as Anchor",
        "caption": "Tracking progress across sessions",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Hierarchical Planning: Milestones, Tasks, and Steps"
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
              "step": "PROJECT_PLAN.md"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Session Alignment"
            }
          }
        ],
        "code": [
          "# Tracing Hierarchical Planning: Milestones, Tasks, and Steps",
          "def execute_flow():",
          "    # Structuring complex projects across three planning...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the hierarchical planning sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Hierarchical planning breaks strategic milestones into focused {1} that touch 1-3 files and can be verified with {2}."
        ],
        "blanks": [
          {
            "a": [
              "tasks"
            ],
            "why": "Tactical units of work"
          },
          {
            "a": [
              "tests"
            ],
            "why": "Automated test suites"
          }
        ]
      },
      "win": "You know how to structure complex projects using hierarchical planning.",
      "nextTasks": [
        "Audit your project code and identify where hierarchical planning: milestones, tasks, and steps applies.",
        "Author a unit test or verification script exercising hierarchical planning: milestones, tasks, and steps.",
        "Document team architectural conventions regarding hierarchical planning: milestones, tasks, and steps."
      ],
      "primarySource": "Industry standards and best practices for Hierarchical Planning: Milestones, Tasks, and Steps.",
      "quiz": [
        {
          "q": "Why should you never give an entire Milestone directly to an AI agent as a single prompt?",
          "a": [
            "Milestones contain too many concurrent concerns, causing the agent to take shortcuts or lose context",
            "The agent will delete all files",
            "Milestones are prohibited by git",
            "Milestones can only be written in Java"
          ],
          "c": 0,
          "why": "Milestone-level prompts overwhelm agent planning horizons and lead to superficial, half-implemented code."
        },
        {
          "q": "What should be committed to the repository to track project momentum across multi-day agent sessions?",
          "a": [
            "A structured PROJECT_PLAN.md or ROADMAP.md file with checkbox tasks",
            "A recording of developer voice memos",
            "A link to a social media thread",
            "An encrypted binary blob"
          ],
          "c": 0,
          "why": "Version-controlled plan documents provide shared persistent state for developers and agents."
        },
        {
          "q": "How does keeping tasks focused on 1-3 files improve agent code quality?",
          "a": [
            "It keeps the context window lean, maximizes attention focus, and makes the resulting diff easy to review",
            "It makes Python run faster",
            "It reduces electric bills",
            "It allows developers to skip code review"
          ],
          "c": 0,
          "why": "Tight file scope maintains high attention density and produces reviewable, low-risk pull requests."
        },
        {
          "q": "What should happen to the project plan as each task is completed?",
          "a": [
            "Mark the task completed (x) in PROJECT_PLAN.md and commit the update alongside the code changes",
            "Delete the project plan file",
            "Rewrite the plan from scratch",
            "Send an email to the entire company"
          ],
          "c": 0,
          "why": "Updating the plan in the commit preserves an auditable historical record of project progress."
        }
      ],
      "next": {
        "title": "Managing Working Trees, Stashes, and Branching Strategies",
        "desc": "Master git branch hygiene and savepoint management for agent work."
      }
    },
    {
      "n": 3,
      "id": "working-trees-stashes-branching",
      "title": "Managing Working Trees, Stashes, and Branching Strategies",
      "topic": "Git Branching",
      "anim": "Generic",
      "lede": "Managing git branches, worktrees, and stashes to isolate experimental agent tasks safely.",
      "winShort": "You know how to manage git branches, worktrees, and stashes for safe agent workflows.",
      "missionLink": "Mastering managing working trees, stashes, and branching strategies across modern software engineering",
      "sec1": {
        "title": "Core principles of Managing Working Trees, Stashes, and Branching Strategies",
        "content": "<p>AI agents make changes rapidly. If you allow an agent to work directly on your `main` branch or a dirty working directory with uncommitted personal changes, disaster is inevitable. An accidental `git reset` will wipe out your uncommitted work, or a broken agent edit will pollute production history.</p>",
        "keyIdea": "Managing git branches, worktrees, and stashes to isolate experimental agent tasks safely."
      },
      "predict": {
        "q": "Why is creating dedicated feature branches for each AI agent task essential?",
        "a": [
          "It isolates experimental agent edits from the stable main branch, making throwaway resets and clean reviews effortless",
          "Git branches make Python code run 5x faster",
          "Main branches cannot be edited by computers",
          "Feature branches reduce cloud hosting costs"
        ],
        "c": 0,
        "why": "Dedicated feature branches isolate agent work, allowing zero-risk experimentation and clean PR reviews.",
        "prompt": "Why is creating dedicated feature branches for each AI agent task essential?",
        "options": [
          "It isolates experimental agent edits from the stable main branch, making throwaway resets and clean reviews effortless",
          "Git branches make Python code run 5x faster",
          "Main branches cannot be edited by computers",
          "Feature branches reduce cloud hosting costs"
        ],
        "answer": 0,
        "explanation": "Dedicated feature branches isolate agent work, allowing zero-risk experimentation and clean PR reviews."
      },
      "sec2": {
        "title": "Branch Isolation Architecture",
        "content": "<p>Professional AI workflow demands <strong>Strict Git Branch Hygiene</strong>:</p>"
      },
      "diagram": {
        "title": "Branch Isolation Architecture",
        "caption": "Protecting stable branches from agent churn",
        "steps": [
          {
            "title": "main Branch (Stable)",
            "lines": [
              "Protected, deployable baseline",
              "Never touched directly by agents"
            ]
          },
          {
            "title": "feat/task-1.2 (Agent Sandbox)",
            "lines": [
              "Agent writes code & runs tests",
              "Isolated, zero risk to team"
            ]
          },
          {
            "title": "PR Review Gate",
            "lines": [
              "Squash and merge upon approval",
              "Clean, pristine commit history"
            ]
          }
        ],
        "boxes": [
          {
            "title": "main Branch (Stable)",
            "lines": [
              "Protected, deployable baseline",
              "Never touched directly by agents"
            ]
          },
          {
            "title": "feat/task-1.2 (Agent Sandbox)",
            "lines": [
              "Agent writes code & runs tests",
              "Isolated, zero risk to team"
            ]
          },
          {
            "title": "PR Review Gate",
            "lines": [
              "Squash and merge upon approval",
              "Clean, pristine commit history"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Git Worktree Concurrency",
        "content": "<ul><li><strong>1. Dedicated Feature Branches:</strong> Always create a clean branch: `git checkout -b feat/stripe-webhook-handler`. Never let an agent touch `main` directly.</li><li><strong>2. Git Stash as a Shield:</strong> If you have in-progress edits when starting an agent task, run `git stash save \"wip personal\"` to protect your work from agent overwrites.</li><li><strong>3. Git Worktrees for Parallel Tasks:</strong> Use `git worktree add ../agent-task-1 feat/branch-1` to let an agent work in a completely separate folder on disk while you continue coding in your primary directory!</li></ul><pre><code># The Safe Branch Workflow:\n$ git checkout main && git pull\n$ git checkout -b feat/task-1.2-invoice-calculation\n# Let the agent work on feat/task-1.2...\n# If agent succeeds: verify tests, commit, push PR!\n# If agent fails completely: git checkout main && git branch -D feat/task-1.2 (Zero mess!)</code></pre><div class=\"callout\"><p><strong>The Worktree Superpower:</strong> `git worktree` allows multiple AI agents to work concurrently on different branches in separate folders without stepping on each other's files!</p></div>"
      },
      "trace": {
        "title": "Git Worktree Concurrency",
        "caption": "Running parallel agent workspaces on disk",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Managing Working Trees, Stashes, and Branching Strategies"
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
              "step": "Primary Workspace (/repo)"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Worktree 1 (/repo-agent-1)"
            }
          }
        ],
        "code": [
          "# Tracing Managing Working Trees, Stashes, and Branching Strategies",
          "def execute_flow():",
          "    # Managing git branches, worktrees, and stashes to i...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the git branch hygiene sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Isolate agent experimentation by creating dedicated feature {1} and using git {2} to run parallel agent workspaces."
        ],
        "blanks": [
          {
            "a": [
              "branches"
            ],
            "why": "Isolated git commit lines"
          },
          {
            "a": [
              "worktrees"
            ],
            "why": "Multiple linked working directories on disk"
          }
        ]
      },
      "win": "You know how to manage git branches, worktrees, and stashes for safe agent workflows.",
      "nextTasks": [
        "Audit your project code and identify where managing working trees, stashes, and branching strategies applies.",
        "Author a unit test or verification script exercising managing working trees, stashes, and branching strategies.",
        "Document team architectural conventions regarding managing working trees, stashes, and branching strategies."
      ],
      "primarySource": "Industry standards and best practices for Managing Working Trees, Stashes, and Branching Strategies.",
      "quiz": [
        {
          "q": "What is the primary benefit of using 'git worktree' with AI coding agents?",
          "a": [
            "It allows an agent to edit, build, and test a separate branch in an isolated directory without interrupting your active editor workspace",
            "It makes git push 10x faster",
            "It eliminates merge conflicts forever",
            "It encrypts the source code"
          ],
          "c": 0,
          "why": "Git worktrees provide completely separate checkouts on disk sharing the same underlying repository."
        },
        {
          "q": "Why should you never let an AI agent work directly on an uncommitted, dirty working tree?",
          "a": [
            "The agent's tool calls (like file rewrites or git resets) can permanently overwrite or delete your uncommitted personal changes",
            "The computer will crash",
            "Python will refuse to run",
            "Git will corrupt the hard drive"
          ],
          "c": 0,
          "why": "Uncommitted changes can be lost or overwritten by automated agent file modifications."
        },
        {
          "q": "What should you do if an agent's work on a feature branch proves to be a complete dead end?",
          "a": [
            "Checkout main and delete the feature branch; your baseline remains 100% clean and unharmed",
            "Spend three days untangling the dead end",
            "Delete the entire git repository and clone again",
            "Push the dead end to main"
          ],
          "c": 0,
          "why": "Branch isolation makes discarding failed experiments effortless and consequence-free."
        },
        {
          "q": "How does squashing commits before merging an agent feature PR keep history clean?",
          "a": [
            "It collapses 15 micro-trial commits into one clean, self-contained, descriptive commit on the main branch",
            "It reduces GitHub hosting bills",
            "It compiles Python code",
            "It deletes all unit tests"
          ],
          "c": 0,
          "why": "Squash-merging turns noisy trial-and-error agent commits into a clean, atomic historical record."
        }
      ],
      "next": {
        "title": "Checkpoint-Driven Development: Save Points and Reverts",
        "desc": "Create safe restore points before delegating risky tasks."
      }
    },
    {
      "n": 4,
      "id": "checkpoint-driven-development",
      "title": "Checkpoint-Driven Development: Save Points and Reverts",
      "topic": "Checkpoints",
      "anim": "Generic",
      "lede": "Using checkpoint-driven development: establishing clean savepoints before risky operations and knowing when to revert.",
      "winShort": "You know how to practice checkpoint-driven development and leverage instant rollbacks.",
      "missionLink": "Mastering checkpoint-driven development: save points and reverts across modern software engineering",
      "sec1": {
        "title": "Core principles of Checkpoint-Driven Development: Save Points and Reverts",
        "content": "<p>Software engineering is an empirical search through a possibility space. Sometimes an agent finds an elegant solution in 3 minutes; other times, it goes down an architectural rabbit hole, modifying 18 files and introducing circular import hell.</p>",
        "keyIdea": "Using checkpoint-driven development: establishing clean savepoints before risky operations and knowing when to revert."
      },
      "predict": {
        "q": "What is 'Checkpoint-Driven Development' when collaborating with AI agents?",
        "a": [
          "Committing a working baseline state before starting an agent task so you can instantly revert if the agent goes off track",
          "Saving games on a video game console",
          "Creating cloud database backups once a month",
          "Writing down code on physical paper"
        ],
        "c": 0,
        "why": "Checkpoints provide instant savepoints that eliminate the risk of exploratory agent tasks.",
        "prompt": "What is 'Checkpoint-Driven Development' when collaborating with AI agents?",
        "options": [
          "Committing a working baseline state before starting an agent task so you can instantly revert if the agent goes off track",
          "Saving games on a video game console",
          "Creating cloud database backups once a month",
          "Writing down code on physical paper"
        ],
        "answer": 0,
        "explanation": "Checkpoints provide instant savepoints that eliminate the risk of exploratory agent tasks."
      },
      "sec2": {
        "title": "The Checkpoint and Ripcord Loop",
        "content": "<p><strong>Checkpoint-Driven Development</strong> gives you complete psychological and technical freedom to let agents explore without fear:</p>"
      },
      "diagram": {
        "title": "The Checkpoint and Ripcord Loop",
        "caption": "Safe exploration through instant rollbacks",
        "steps": [
          {
            "title": "1. Save Checkpoint",
            "lines": [
              "git commit -m 'checkpoint'",
              "Clean, working baseline locked"
            ]
          },
          {
            "title": "2. Agent Explores",
            "lines": [
              "Agent attempts refactor",
              "Modifies 12 files autonomously"
            ]
          },
          {
            "title": "3. Decision Point",
            "lines": [
              "Converging? -> Accept & polish",
              "Thrashing? -> Pull ripcord (git reset)"
            ]
          }
        ],
        "boxes": [
          {
            "title": "1. Save Checkpoint",
            "lines": [
              "git commit -m 'checkpoint'",
              "Clean, working baseline locked"
            ]
          },
          {
            "title": "2. Agent Explores",
            "lines": [
              "Agent attempts refactor",
              "Modifies 12 files autonomously"
            ]
          },
          {
            "title": "3. Decision Point",
            "lines": [
              "Converging? -> Accept & polish",
              "Thrashing? -> Pull ripcord (git reset)"
            ]
          }
        ]
      },
      "sec3": {
        "title": "The Cost of Arguing vs Reverting",
        "content": "<ul><li><strong>1. Create the Checkpoint:</strong> Before giving the agent a task, ensure `git status` is clean. If needed, create an explicit WIP commit: `git commit -m \"checkpoint: pre-auth-refactor\"`.</li><li><strong>2. Unleash the Agent:</strong> Let the agent explore, edit files, and run tests autonomously.</li><li><strong>3. Evaluate the Trajectory:</strong> If after 5 minutes the agent is making clean, convergent progress, let it finish.</li><li><strong>4. Pull the Ripcord:</strong> If the agent is thrashing, breaking unrelated tests, or making erratic edits, do not argue with it! <strong>Pull the ripcord:</strong> `git reset --hard HEAD`.</li></ul><pre><code># The Ripcord Workflow:\n$ git commit -m \"checkpoint: before payment gateway refactor\"\n# ... Agent runs 8 turns, modifies 14 files, 6 tests failing ...\n# You realize the agent took the wrong design approach.\n$ git reset --hard HEAD\n# Result: Pristine working baseline restored in 100 milliseconds!\n# Now prompt with a refined constraint: \"Do NOT alter PaymentGateway protocol...\"</code></pre><div class=\"callout\"><p><strong>The Revert Rule:</strong> Pulling the ripcord takes 1 second. Trying to fix an agent's confused, multi-file mess takes an hour. Revert early, refine the prompt, and restart clean.</p></div>"
      },
      "trace": {
        "title": "The Cost of Arguing vs Reverting",
        "caption": "Time efficiency comparison",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Checkpoint-Driven Development: Save Points and Reverts"
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
              "step": "Arguing with Confused Agent"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Pulling the Ripcord"
            }
          }
        ],
        "code": [
          "# Tracing Checkpoint-Driven Development: Save Points and Reverts",
          "def execute_flow():",
          "    # Using checkpoint-driven development: establishing ...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the checkpoint development sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Checkpoint-driven development establishes clean git {1} before delegating tasks, allowing developers to pull the {2} if the agent goes off track."
        ],
        "blanks": [
          {
            "a": [
              "savepoints"
            ],
            "why": "Known good commits"
          },
          {
            "a": [
              "ripcord"
            ],
            "why": "Instant git reset to clean baseline"
          }
        ]
      },
      "win": "You know how to practice checkpoint-driven development and leverage instant rollbacks.",
      "nextTasks": [
        "Audit your project code and identify where checkpoint-driven development: save points and reverts applies.",
        "Author a unit test or verification script exercising checkpoint-driven development: save points and reverts.",
        "Document team architectural conventions regarding checkpoint-driven development: save points and reverts."
      ],
      "primarySource": "Industry standards and best practices for Checkpoint-Driven Development: Save Points and Reverts.",
      "quiz": [
        {
          "q": "Why is 'git reset --hard HEAD' considered a developer superpower when working with AI agents?",
          "a": [
            "It allows you to instantly discard an agent's confused exploration and return to a clean baseline in milliseconds",
            "It makes Python run faster",
            "It deletes the remote repository",
            "It automatically fixes syntax errors"
          ],
          "c": 0,
          "why": "Instant rollbacks eliminate the fear of letting agents explore complex, multi-file modifications."
        },
        {
          "q": "What is the primary indicator that you should pull the ripcord rather than continuing an agent session?",
          "a": [
            "The agent is thrashing, making contradictory edits back and forth, or breaking unrelated working tests",
            "The agent finishes in 10 seconds",
            "All unit tests pass",
            "The agent asks a clarifying question"
          ],
          "c": 0,
          "why": "Alternating test failures and circular edits indicate the agent has lost architectural coherence."
        },
        {
          "q": "Why is arguing with an agent in chat when it has made a 15-file mess usually counter-productive?",
          "a": [
            "The context window is saturated with error logs and confusion; restarting from a clean checkpoint with a refined prompt is vastly faster",
            "Language models have emotional pride",
            "The chat window will crash",
            "It is considered impolite"
          ],
          "c": 0,
          "why": "A saturated, confused context window degrades model reasoning; fresh prompts on clean baselines win."
        },
        {
          "q": "What should you do after pulling the ripcord before prompting the agent again?",
          "a": [
            "Analyze why the agent failed and add an explicit constraint or golden example to prevent the mistake on attempt #2",
            "Run the exact same prompt again without changes",
            "Delete your computer",
            "Work through the night by hand"
          ],
          "c": 0,
          "why": "Refining the prompt with the learned constraint guides the agent correctly on the second try."
        }
      ],
      "next": {
        "title": "Next Course: When to Trust AI-Generated Code",
        "desc": "Learn how to calibrate trust across high-risk and low-risk domains."
      }
    },
    {
      "n": 5,
      "id": "managing-context-resets",
      "title": "Managing Context Resets Across Long Multi-Day Tasks",
      "topic": "Context Resets",
      "anim": "Generic",
      "lede": "Transitioning between agent sessions: summarizing progress, resetting context windows, and handing off state.",
      "winShort": "You know how to manage context resets across complex, multi-day engineering projects.",
      "missionLink": "Mastering managing context resets across long multi-day tasks across modern software engineering",
      "sec1": {
        "title": "Core principles of Managing Context Resets Across Long Multi-Day Tasks",
        "content": "<p>A rookie mistake in AI coding is treating a single chat session as an eternal companion. A developer starts a session on Monday, works for three days, and by Wednesday the conversation is 140 turns long, consuming 110,000 tokens per prompt. Every turn takes 45 seconds to respond, costs $0.30, and the agent constantly forgets decisions made on Monday!</p>",
        "keyIdea": "Transitioning between agent sessions: summarizing progress, resetting context windows, and handing off state."
      },
      "predict": {
        "q": "Why must long multi-day projects be split across multiple fresh agent sessions rather than running in one massive conversation?",
        "a": [
          "Massive conversation histories suffer from context exhaustion, attention dilution, high latency, and compounding token costs",
          "Language models shut down after 8 hours",
          "Chat windows cannot be opened on Tuesdays",
          "Conversations are legally limited to 20 turns"
        ],
        "c": 0,
        "why": "Long sessions accumulate noise and context amnesia; fresh sessions with concise handoff summaries restore high performance.",
        "prompt": "Why must long multi-day projects be split across multiple fresh agent sessions rather than running in one massive conversation?",
        "options": [
          "Massive conversation histories suffer from context exhaustion, attention dilution, high latency, and compounding token costs",
          "Language models shut down after 8 hours",
          "Chat windows cannot be opened on Tuesdays",
          "Conversations are legally limited to 20 turns"
        ],
        "answer": 0,
        "explanation": "Long sessions accumulate noise and context amnesia; fresh sessions with concise handoff summaries restore high performance."
      },
      "sec2": {
        "title": "The Context Reset Lifecycle",
        "content": "<p>Professional engineers practice <strong>Strategic Context Resets</strong>:</p>"
      },
      "diagram": {
        "title": "The Context Reset Lifecycle",
        "caption": "Preserving state across clean agent sessions",
        "steps": [
          {
            "title": "Session 1: Milestone 1",
            "lines": [
              "Builds domain entities",
              "Runs tests -> 100% Green",
              "Generates handoff summary"
            ]
          },
          {
            "title": "Context Reset",
            "lines": [
              "Close saturated session",
              "Reclaim 100% token budget"
            ]
          },
          {
            "title": "Session 2: Milestone 2",
            "lines": [
              "Start fresh session with summary",
              "Blazing fast, razor-focused"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Session 1: Milestone 1",
            "lines": [
              "Builds domain entities",
              "Runs tests -> 100% Green",
              "Generates handoff summary"
            ]
          },
          {
            "title": "Context Reset",
            "lines": [
              "Close saturated session",
              "Reclaim 100% token budget"
            ]
          },
          {
            "title": "Session 2: Milestone 2",
            "lines": [
              "Start fresh session with summary",
              "Blazing fast, razor-focused"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Bloated Session vs Fresh Reset",
        "content": "<ul><li><strong>The Milestone Handoff:</strong> When a milestone is completed and verified, conclude the session.</li><li><strong>Generate a Handoff Summary:</strong> Ask the agent: <em>'Summarize work completed in this milestone, files modified, and remaining tasks for Milestone 2.'</em></li><li><strong>Save to Repository:</strong> Save the summary in `PROJECT_PLAN.md` or git commit message.</li><li><strong>Start Clean:</strong> Open a brand-new, empty agent session. Prime it with the project conventions and the handoff summary.</li></ul><pre><code># The Fresh Session Kickoff Prompt:\n\"We are continuing work on the Billing Engine initiative.\nMilestone 1 is complete and verified (see PROJECT_PLAN.md):\n- Core entities and Money Value Object are in src/billing/.\n- All unit tests in tests/test_billing.py are passing 100%.\n\nYour task for this session is Task 2.1:\nImplement the StripePaymentGateway adapter in src/billing/stripe.py matching\nthe PaymentGateway protocol in src/billing/ports.py.\nRun `pytest tests/test_stripe.py` to verify.\"</code></pre><div class=\"callout\"><p><strong>The Fresh Mind Effect:</strong> A fresh agent session with a 2,000-token high-signal briefing performs with 10x higher intelligence and speed than a tired, 100,000-token legacy session.</p></div>"
      },
      "trace": {
        "title": "Bloated Session vs Fresh Reset",
        "caption": "Performance comparison over time",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Managing Context Resets Across Long Multi-Day Tasks"
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
              "step": "140-Turn Bloated Session"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Fresh Reset Session"
            }
          }
        ],
        "code": [
          "# Tracing Managing Context Resets Across Long Multi-Day Tasks",
          "def execute_flow():",
          "    # Transitioning between agent sessions: summarizing ...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the context reset sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Strategic context resets prevent attention degradation by closing saturated sessions and priming fresh sessions with concise {1} of completed {2}."
        ],
        "blanks": [
          {
            "a": [
              "summaries"
            ],
            "why": "Distilled milestone overviews"
          },
          {
            "a": [
              "milestones"
            ],
            "why": "Completed project phases"
          }
        ]
      },
      "win": "You know how to manage context resets across complex, multi-day engineering projects.",
      "nextTasks": [
        "Audit your project code and identify where managing context resets across long multi-day tasks applies.",
        "Author a unit test or verification script exercising managing context resets across long multi-day tasks.",
        "Document team architectural conventions regarding managing context resets across long multi-day tasks."
      ],
      "primarySource": "Industry standards and best practices for Managing Context Resets Across Long Multi-Day Tasks.",
      "quiz": [
        {
          "q": "What is the primary indicator that an agent session should be reset with a fresh conversation?",
          "a": [
            "Responses become slow, costs per turn escalate, and the agent begins forgetting constraints established earlier",
            "The agent solves the problem immediately",
            "All unit tests pass",
            "The computer battery reaches 100%"
          ],
          "c": 0,
          "why": "High latency and constraint amnesia are clear symptoms of context window saturation."
        },
        {
          "q": "What should the kickoff prompt for a fresh agent session contain?",
          "a": [
            "The specific current task, relevant file paths, links to project conventions, and a concise summary of what was completed",
            "The entire chat history from the previous week",
            "A generic greeting with no code context",
            "A complaint about past mistakes"
          ],
          "c": 0,
          "why": "A focused kickoff prompt delivers pure signal without dragging in old conversational noise."
        },
        {
          "q": "Where should milestone handoff summaries be stored so they survive across sessions?",
          "a": [
            "In version-controlled markdown files like PROJECT_PLAN.md or memory notes in the workspace",
            "In the user's browser clipboard",
            "In temporary operating system caches",
            "In email drafts"
          ],
          "c": 0,
          "why": "Storing summaries in repository markdown files makes them accessible to all future sessions."
        },
        {
          "q": "How does starting a fresh session improve model reasoning capabilities?",
          "a": [
            "It clears thousands of tokens of irrelevant tool outputs and debugging logs, restoring maximum attention density to the new task",
            "It upgrades the model to a newer version",
            "It turns off type checking",
            "It speeds up the computer's CPU clock"
          ],
          "c": 0,
          "why": "Emptying the context of accumulated noise allows the model's attention mechanism to focus 100% on the active task."
        }
      ],
      "next": {
        "title": "Parallel Agent Workflows and Work Breakdown",
        "desc": "Coordinate multiple agents working simultaneously on decoupled tasks."
      }
    },
    {
      "n": 6,
      "id": "parallel-agent-workflows",
      "title": "Parallel Agent Workflows and Work Breakdown",
      "topic": "Parallel Workflows",
      "anim": "Generic",
      "lede": "Orchestrating parallel agent workflows: work breakdown, interface decoupling, and branch merging.",
      "winShort": "You know how to orchestrate parallel agent workflows with zero merge friction.",
      "missionLink": "Mastering parallel agent workflows and work breakdown across modern software engineering",
      "sec1": {
        "title": "Core principles of Parallel Agent Workflows and Work Breakdown",
        "content": "<p>In a traditional single-agent workflow, you wait for the agent to finish task A before starting task B. But modern engineering allows <strong>Parallel Agent Workflows</strong>: running three or four agents concurrently on separate feature branches or git worktrees.</p>",
        "keyIdea": "Orchestrating parallel agent workflows: work breakdown, interface decoupling, and branch merging."
      },
      "predict": {
        "q": "What architectural condition must be satisfied before two AI agents can work on separate tasks in parallel?",
        "a": [
          "The two tasks must have decoupled file boundaries and well-defined shared interface contracts to prevent merge conflicts",
          "Both agents must share the exact same terminal",
          "Both agents must edit the same file on the same line",
          "Parallel agent workflows are prohibited by physics"
        ],
        "c": 0,
        "why": "Decoupled file boundaries and clean interface contracts prevent catastrophic git merge conflicts.",
        "prompt": "What architectural condition must be satisfied before two AI agents can work on separate tasks in parallel?",
        "options": [
          "The two tasks must have decoupled file boundaries and well-defined shared interface contracts to prevent merge conflicts",
          "Both agents must share the exact same terminal",
          "Both agents must edit the same file on the same line",
          "Parallel agent workflows are prohibited by physics"
        ],
        "answer": 0,
        "explanation": "Decoupled file boundaries and clean interface contracts prevent catastrophic git merge conflicts."
      },
      "sec2": {
        "title": "Parallel Agent Architecture",
        "content": "<p>However, running parallel agents without architectural planning causes <strong>merge conflict nightmare</strong>. If Agent 1 and Agent 2 both edit `src/main.py` simultaneously, merging their branches will require hours of manual conflict resolution.</p>"
      },
      "diagram": {
        "title": "Parallel Agent Architecture",
        "caption": "Decoupled worktrees building against shared contracts",
        "steps": [
          {
            "title": "Shared Contract (Base)",
            "lines": [
              "UserSchema & EventProtocol",
              "Committed to main first"
            ]
          },
          {
            "title": "Agent A (Worktree 1)",
            "lines": [
              "src/billing/service.py",
              "Dedicated branch & tests"
            ]
          },
          {
            "title": "Agent B (Worktree 2)",
            "lines": [
              "src/notifications/service.py",
              "Dedicated branch & tests"
            ]
          },
          {
            "title": "Clean Merge",
            "lines": [
              "Zero overlapping files",
              "Both PRs merge in minutes"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Shared Contract (Base)",
            "lines": [
              "UserSchema & EventProtocol",
              "Committed to main first"
            ]
          },
          {
            "title": "Agent A (Worktree 1)",
            "lines": [
              "src/billing/service.py",
              "Dedicated branch & tests"
            ]
          },
          {
            "title": "Agent B (Worktree 2)",
            "lines": [
              "src/notifications/service.py",
              "Dedicated branch & tests"
            ]
          },
          {
            "title": "Clean Merge",
            "lines": [
              "Zero overlapping files",
              "Both PRs merge in minutes"
            ]
          }
        ]
      },
      "sec3": {
        "title": "The Overlapping File Collision Trap",
        "content": "<p>To execute parallel agent workflows safely:</p><ul><li><strong>1. Decoupled File Boundaries:</strong> Agent 1 works strictly on `src/billing/`; Agent 2 works strictly on `src/notifications/`. Zero overlapping files!</li><li><strong>2. Contract-First Seams:</strong> Define the shared interface or schema (e.g. `src/shared/schemas.py`) <em>before</em> launching the agents. Both agents build against the pre-agreed contract.</li><li><strong>3. Independent Test Suites:</strong> Agent 1 runs `tests/test_billing.py`; Agent 2 runs `tests/test_notifications.py`.</li></ul><pre><code># Parallel Work Breakdown Architecture:\nShared Foundation: `src/shared/contracts.py` (Committed to main first!)\n|-- Worktree 1 (Agent A): `feat/billing`      -> Edits src/billing/ + tests/billing/\n|-- Worktree 2 (Agent B): `feat/notifier`     -> Edits src/notify/ + tests/notify/\n|-- Worktree 3 (Agent C): `feat/docs`         -> Edits docs/ + openapi.json\nResult: 3 agents work simultaneously with ZERO git merge conflicts!</code></pre><div class=\"callout\"><p><strong>The Contract Gate:</strong> Never start parallel agents until the shared schemas and interface types are committed to the base branch!</p></div>"
      },
      "trace": {
        "title": "The Overlapping File Collision Trap",
        "caption": "Why uncoordinated parallel work fails",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Parallel Agent Workflows and Work Breakdown"
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
              "step": "Uncoordinated Agents"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Git Merge Collision"
            }
          }
        ],
        "code": [
          "# Tracing Parallel Agent Workflows and Work Breakdown",
          "def execute_flow():",
          "    # Orchestrating parallel agent workflows: work break...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the parallel workflow sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Parallel agent workflows require decoupled file boundaries and pre-committed interface {1} to avoid {2} merge conflicts."
        ],
        "blanks": [
          {
            "a": [
              "contracts"
            ],
            "why": "Agreed schemas and protocols"
          },
          {
            "a": [
              "git"
            ],
            "why": "Version control branch collisions"
          }
        ]
      },
      "win": "You know how to orchestrate parallel agent workflows with zero merge friction.",
      "nextTasks": [
        "Audit your project code and identify where parallel agent workflows and work breakdown applies.",
        "Author a unit test or verification script exercising parallel agent workflows and work breakdown.",
        "Document team architectural conventions regarding parallel agent workflows and work breakdown."
      ],
      "primarySource": "Industry standards and best practices for Parallel Agent Workflows and Work Breakdown.",
      "quiz": [
        {
          "q": "What is the single most important prerequisite before dispatching two parallel AI agents?",
          "a": [
            "Agree upon and commit the shared interface contracts and schemas so both agents build against a common specification",
            "Buy a second computer",
            "Disable unit testing",
            "Ask the agents to communicate with each other"
          ],
          "c": 0,
          "why": "Pre-committing shared contracts ensures both agents' contributions align without interface collisions."
        },
        {
          "q": "What happens if two agents modify the same file concurrently on different branches?",
          "a": [
            "A git merge conflict occurs upon merging, requiring human intervention to untangle contradictory edits",
            "The internet disconnects",
            "The file is deleted automatically",
            "Python refuses to compile"
          ],
          "c": 0,
          "why": "Concurrent edits to identical lines create classic git merge conflicts."
        },
        {
          "q": "How do git worktrees facilitate running multiple agent processes on one machine?",
          "a": [
            "They provide distinct filesystem directories on disk for each branch, preventing agents from overwriting each other's files",
            "They double the CPU clock speed",
            "They turn off battery management",
            "They make code compile to C"
          ],
          "c": 0,
          "why": "Separate working trees allow multiple tools to edit and run tests simultaneously without filesystem collision."
        },
        {
          "q": "What type of tasks are most suitable for parallel agent execution?",
          "a": [
            "Decoupled vertical features, independent documentation tasks, and separate domain services with zero shared files",
            "Refactoring the single main entry point file",
            "Editing a single database migration file",
            "Renaming global variables"
          ],
          "c": 0,
          "why": "Orthogonal, decoupled tasks can proceed simultaneously without blocking each other."
        }
      ],
      "next": {
        "title": "Continuous Integration as the Source of Truth",
        "desc": "Establish CI as the objective, impartial referee of agent code."
      }
    },
    {
      "n": 7,
      "id": "ci-as-source-of-truth",
      "title": "Continuous Integration as the Source of Truth",
      "topic": "CI Truth",
      "anim": "Generic",
      "lede": "Establishing automated Continuous Integration (CI) as the objective, non-negotiable source of truth for all agent contributions.",
      "winShort": "You know how to establish Continuous Integration as the ultimate source of truth.",
      "missionLink": "Mastering continuous integration as the source of truth across modern software engineering",
      "sec1": {
        "title": "Core principles of Continuous Integration as the Source of Truth",
        "content": "<p>When an agent says: <em>'I ran the tests and everything is passing!'</em>, that statement is provisional. Perhaps the agent ran tests against a stale SQLite database, or forgot to set an environment variable, or ran only 1 test out of 50.</p>",
        "keyIdea": "Establishing automated Continuous Integration (CI) as the objective, non-negotiable source of truth for all agent contributions."
      },
      "predict": {
        "q": "Why is CI (Continuous Integration) the ultimate source of truth when working with AI coding agents?",
        "a": [
          "CI runs tests and linters in a clean, pristine container environment, independent of local machine quirks or agent assertions",
          "CI is operated by government regulators",
          "CI servers use quantum computing",
          "CI replaces human developers"
        ],
        "c": 0,
        "why": "CI verifies code in an isolated, reproducible environment free from local state pollution or agent bias.",
        "prompt": "Why is CI (Continuous Integration) the ultimate source of truth when working with AI coding agents?",
        "options": [
          "CI runs tests and linters in a clean, pristine container environment, independent of local machine quirks or agent assertions",
          "CI is operated by government regulators",
          "CI servers use quantum computing",
          "CI replaces human developers"
        ],
        "answer": 0,
        "explanation": "CI verifies code in an isolated, reproducible environment free from local state pollution or agent bias."
      },
      "sec2": {
        "title": "CI as the Impartial Referee",
        "content": "<p>In professional engineering, <strong>Continuous Integration (CI) is the supreme authority</strong>. A feature is not done because the agent says it is done; a feature is done when the clean, ephemeral CI runner turns <strong>GREEN</strong>.</p>"
      },
      "diagram": {
        "title": "CI as the Impartial Referee",
        "caption": "Objective verification in pristine environments",
        "steps": [
          {
            "title": "Agent Assertion (Local)",
            "lines": [
              "'Tests pass on my machine!'",
              "Possible local state pollution or quirks"
            ]
          },
          {
            "title": "CI Runner (Pristine)",
            "lines": [
              "Clean Docker container, fresh DB",
              "Runs all linters, types, & tests"
            ]
          },
          {
            "title": "The Binary Verdict",
            "lines": [
              "GREEN: Code is verified safe to merge",
              "RED: Blocked until issues resolved"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Agent Assertion (Local)",
            "lines": [
              "'Tests pass on my machine!'",
              "Possible local state pollution or quirks"
            ]
          },
          {
            "title": "CI Runner (Pristine)",
            "lines": [
              "Clean Docker container, fresh DB",
              "Runs all linters, types, & tests"
            ]
          },
          {
            "title": "The Binary Verdict",
            "lines": [
              "GREEN: Code is verified safe to merge",
              "RED: Blocked until issues resolved"
            ]
          }
        ]
      },
      "sec3": {
        "title": "The Four Automated CI Gates",
        "content": "<p>A robust CI pipeline for AI-assisted engineering enforces four objective gates:</p><ul><li><strong>1. Deterministic Linting:</strong> `ruff check`, `eslint` (0 warnings allowed).</li><li><strong>2. Strict Static Type Checking:</strong> `mypy --strict`, `tsc --noEmit` (0 errors allowed).</li><li><strong>3. Complete Test Execution:</strong> Unit tests, integration tests, and database migration checks.</li><li><strong>4. Architectural Fitness Checks:</strong> `import-linter` enforcing layer boundaries.</li></ul><pre><code># The Impartial CI Referee (GitHub Actions Workflow):\nname: CI Verification Pipeline\non: [pull_request]\njobs:\n  verify:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Run Linters\n        run: make lint\n      - name: Run Type Checker\n        run: make typecheck\n      - name: Run Full Test Suite with Testcontainers\n        run: make test\n# If ANY step exits with non-zero code -> PR is BLOCKED from merging!</code></pre><div class=\"callout\"><p><strong>The Non-Negotiable Law:</strong> If CI is red, the PR does not merge. No excuses, no workarounds. The machine is the impartial referee.</p></div>"
      },
      "trace": {
        "title": "The Four Automated CI Gates",
        "caption": "Multi-layered quality enforcement",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Continuous Integration as the Source of Truth"
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
              "step": "Gate 1: Linting"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Gate 2: Types"
            }
          },
          {
            "line": 3,
            "vars": {
              "step": "Gate 3: Tests"
            }
          },
          {
            "line": 4,
            "vars": {
              "step": "Gate 4: Architecture"
            }
          }
        ],
        "code": [
          "# Tracing Continuous Integration as the Source of Truth",
          "def execute_flow():",
          "    # Establishing automated Continuous Integration (CI)...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the CI truth sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Continuous Integration acts as the objective source of truth by evaluating agent pull requests in clean, isolated {1} with automated {2}."
        ],
        "blanks": [
          {
            "a": [
              "containers"
            ],
            "why": "Ephemeral virtual environments"
          },
          {
            "a": [
              "gates"
            ],
            "why": "Mandatory pass/fail checks"
          }
        ]
      },
      "win": "You know how to establish Continuous Integration as the ultimate source of truth.",
      "nextTasks": [
        "Audit your project code and identify where continuous integration as the source of truth applies.",
        "Author a unit test or verification script exercising continuous integration as the source of truth.",
        "Document team architectural conventions regarding continuous integration as the source of truth."
      ],
      "primarySource": "Industry standards and best practices for Continuous Integration as the Source of Truth.",
      "quiz": [
        {
          "q": "Why is saying 'It works on my machine' insufficient for AI-generated code?",
          "a": [
            "Local environments can contain uncommitted files, cached state, or environment variables that mask bugs present in production",
            "It is considered bad manners",
            "Machines cannot run software",
            "Operating systems change daily"
          ],
          "c": 0,
          "why": "Local state pollution often hides dependencies or configurations missing from version control."
        },
        {
          "q": "What happens if a pull request fails a static type check in CI?",
          "a": [
            "The PR is automatically blocked from merging until the type errors are resolved",
            "The repository is deleted",
            "The developer's account is suspended",
            "The CI server reboots"
          ],
          "c": 0,
          "why": "Branch protection rules prevent merging any code that fails automated CI checks."
        },
        {
          "q": "How does CI protect against agent hallucination?",
          "a": [
            "It executes the code and tests against real compilers and databases, empirically proving that all imports and methods exist",
            "It filters prompts using AI",
            "It reduces GPU temperature",
            "It translates code into French"
          ],
          "c": 0,
          "why": "Real execution in CI exposes hallucinated packages or nonexistent functions immediately."
        },
        {
          "q": "What role does branch protection play in GitHub or GitLab?",
          "a": [
            "It enforces that the main branch cannot receive direct pushes and requires passing CI and human approval before merging",
            "It makes git checkout faster",
            "It encrypts repository files on disk",
            "It reduces cloud server bills"
          ],
          "c": 0,
          "why": "Branch protection guarantees that all code entering production passes through verified CI gates."
        }
      ],
      "next": {
        "title": "Knowing When to Take the Wheel and Code by Hand",
        "desc": "Recognize the boundary where human craftsmanship surpasses AI agency."
      }
    },
    {
      "n": 8,
      "id": "when-to-take-the-wheel",
      "title": "Knowing When to Take the Wheel and Code by Hand",
      "topic": "Human Craft",
      "anim": "Generic",
      "lede": "Recognizing when to stop delegating to an agent and write code by hand: subtle math, novel architectures, and edge debugging.",
      "winShort": "You have completed the Managing Large AI Coding Projects course.",
      "missionLink": "Mastering knowing when to take the wheel and code by hand across modern software engineering",
      "sec1": {
        "title": "Core principles of Knowing When to Take the Wheel and Code by Hand",
        "content": "<p>The most dangerous trap in AI engineering is <strong>prompt stubbornness</strong>: spending three hours desperately re-prompting an agent to fix a subtle bug that you could have diagnosed and fixed by hand in five minutes.</p>",
        "keyIdea": "Recognizing when to stop delegating to an agent and write code by hand: subtle math, novel architectures, and edge debugging."
      },
      "predict": {
        "q": "When should an engineer stop prompting an agent and take the wheel to code by hand?",
        "a": [
          "When a problem requires deep algorithmic invention, delicate low-level pointer/concurrency math, or when the agent has thrashed across 3 turns",
          "Never; humans should never type code again",
          "Only when the power goes out",
          "Whenever a function is longer than 10 lines"
        ],
        "c": 0,
        "why": "Novel algorithms, subtle concurrency, and unresolved thrashing demand direct human craftsmanship.",
        "prompt": "When should an engineer stop prompting an agent and take the wheel to code by hand?",
        "options": [
          "When a problem requires deep algorithmic invention, delicate low-level pointer/concurrency math, or when the agent has thrashed across 3 turns",
          "Never; humans should never type code again",
          "Only when the power goes out",
          "Whenever a function is longer than 10 lines"
        ],
        "answer": 0,
        "explanation": "Novel algorithms, subtle concurrency, and unresolved thrashing demand direct human craftsmanship."
      },
      "sec2": {
        "title": "When to Delegate vs When to Code",
        "content": "<p>Mastery of AI engineering means knowing when to delegate, and <strong>knowing when to take the wheel</strong>:</p>"
      },
      "diagram": {
        "title": "When to Delegate vs When to Code",
        "caption": "Balancing AI leverage with human craft",
        "steps": [
          {
            "title": "Delegate to Agent (80%)",
            "lines": [
              "Boilerplate schemas & CRUD",
              "Mechanical syntax modernizations",
              "Repetitive unit test suites"
            ]
          },
          {
            "title": "Take the Wheel (20%)",
            "lines": [
              "Novel algorithmic invention",
              "Subtle concurrency & lock timing",
              "Thrashing debugging after 3 turns"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Delegate to Agent (80%)",
            "lines": [
              "Boilerplate schemas & CRUD",
              "Mechanical syntax modernizations",
              "Repetitive unit test suites"
            ]
          },
          {
            "title": "Take the Wheel (20%)",
            "lines": [
              "Novel algorithmic invention",
              "Subtle concurrency & lock timing",
              "Thrashing debugging after 3 turns"
            ]
          }
        ]
      },
      "sec3": {
        "title": "The 3-Turn Circuit Breaker",
        "content": "<ul><li><strong>Delegate to the Agent:</strong> Repetitive boilerplate, mechanical refactoring, syntax modernizations, writing standard tests, and exploring unfamiliar API examples.</li><li><strong>Take the Wheel Yourself:</strong> Novel mathematical algorithms, delicate concurrency synchronization, high-consequence cryptographic logic, and any task where the agent has failed after 3 turns.</li></ul><pre><code># The 3-Turn Take-the-Wheel Rule:\nTurn 1: Agent attempts fix -> Fails.\nTurn 2: Refine prompt with constraint -> Fails.\nTurn 3: Provide minimal reproduction snippet -> Fails.\n----------------- STOP PROMPTING! TAKE THE WHEEL! -----------------\nAction: Open the file, write the 4 lines of logic yourself, run tests,\n        commit, and re-engage the agent for subsequent mechanical work!</code></pre><p>Coding by hand is not a defeat; it is an executive engineering decision. Your job is to ship reliable software with maximum velocity, using whatever tool—AI or human brain—is most effective for the immediate problem.</p><div class=\"callout\"><p><strong>The Final Synthesis:</strong> The engineer who uses an agent for the 80% mechanical work and applies deep personal craftsmanship to the critical 20% is unstoppable.</p></div>"
      },
      "trace": {
        "title": "The 3-Turn Circuit Breaker",
        "caption": "Stopping prompt stubbornness in its tracks",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Knowing When to Take the Wheel and Code by Hand"
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
              "step": "Turn 1-3: Prompt Agent"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Circuit Breaker Tripped"
            }
          }
        ],
        "code": [
          "# Tracing Knowing When to Take the Wheel and Code by Hand",
          "def execute_flow():",
          "    # Recognizing when to stop delegating to an agent an...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the human craft sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Mastering AI engineering requires knowing when to delegate mechanical work to agents and when to {1} the wheel for deep algorithmic {2}."
        ],
        "blanks": [
          {
            "a": [
              "take"
            ],
            "why": "Assume direct manual control"
          },
          {
            "a": [
              "craftsmanship"
            ],
            "why": "Human engineering skill and insight"
          }
        ]
      },
      "win": "You have completed the Managing Large AI Coding Projects course.",
      "nextTasks": [
        "Audit your project code and identify where knowing when to take the wheel and code by hand applies.",
        "Author a unit test or verification script exercising knowing when to take the wheel and code by hand.",
        "Document team architectural conventions regarding knowing when to take the wheel and code by hand."
      ],
      "primarySource": "Industry standards and best practices for Knowing When to Take the Wheel and Code by Hand.",
      "quiz": [
        {
          "q": "What is 'prompt stubbornness'?",
          "a": [
            "Wasting hours repeatedly re-prompting an agent to solve a subtle bug that a human could fix manually in minutes",
            "Refusing to use AI tools",
            "Writing prompts in all uppercase letters",
            "Prompting without punctuation"
          ],
          "c": 0,
          "why": "Prompt stubbornness is the reluctance to step in and code manually when an agent struggles."
        },
        {
          "q": "What is the recommended rule of thumb before taking the wheel from an agent?",
          "a": [
            "The 3-turn rule: if the agent fails to converge on a solution after three iterations, take manual control",
            "Wait 48 hours",
            "Re-prompt at least 50 times",
            "Reboot the router"
          ],
          "c": 0,
          "why": "A 3-turn circuit breaker bounds wasted time and maintains engineering momentum."
        },
        {
          "q": "Which of the following tasks is best suited for direct human hand-coding?",
          "a": [
            "Designing a novel distributed consensus algorithm or intricate lock-free data structure",
            "Generating 20 repetitive CRUD endpoint schemas",
            "Upgrading type hints across 40 files",
            "Writing docstrings for getters and setters"
          ],
          "c": 0,
          "why": "Novel distributed algorithms and lock-free concurrency require deep mathematical human reasoning."
        },
        {
          "q": "How does combining human craftsmanship with AI leverage define the modern 10x engineer?",
          "a": [
            "They use AI to automate 80% of routine mechanical work, focusing their human energy on critical architecture and core logic",
            "They write 100,000 lines of code every day",
            "They never write unit tests",
            "They use five computer monitors"
          ],
          "c": 0,
          "why": "Pairing AI speed for boilerplate with human insight for critical logic creates extraordinary velocity."
        }
      ],
      "next": {
        "title": "Next Course: When to Trust AI-Generated Code",
        "desc": "Learn how to calibrate trust, verify provenance, and uphold total engineering accountability."
      }
    }
  ]
};

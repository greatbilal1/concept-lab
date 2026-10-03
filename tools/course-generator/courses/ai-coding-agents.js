"use strict";

module.exports = {
  "id": "ai-coding-agents",
  "title": "How AI Coding Agents Work",
  "num": 51,
  "emoji": "🤖",
  "desc": "What an agent actually does: read context, plan, edit files, run tools, observe results and iterate.",
  "topics": [
    "AI Agents",
    "ReAct Loop",
    "Tool Calling",
    "Code Navigation",
    "Agent Memory",
    "Context Compaction",
    "Error Recovery",
    "Human-in-the-Loop"
  ],
  "mission": "# Mission — How AI Coding Agents Work\n\nDemystify the mechanics of autonomous coding agents. Understand the Read-Plan-Act-Observe loop, explore codebases strategically with grep and file trees, execute safe targeted file edits, leverage multi-tiered memory, manage context degradation, and steer agents effectively.",
  "notes": "# Notes — How AI Coding Agents Work\n\nAgents are reasoning engines wired to tools and environment feedback. The quality of the loop determines the quality of the result.",
  "resources": "# Resources — How AI Coding Agents Work\n\n- Yao et al., *ReAct: Synergizing Reasoning and Acting in Language Models*\n- Anthropic, *Building Effective Agents*\n- Harrison Chase, *LangChain & LangGraph Architectural Concepts*",
  "glossaryGroups": [
    {
      "id": "agents",
      "title": "Agents & Agency",
      "terms": [
        {
          "term": "AI Coding Agent",
          "def": "An autonomous AI system that reasons, uses tools (file edits, terminals), and iterates to achieve software engineering goals.",
          "lesson": 1,
          "tags": [
            "ai",
            "agents"
          ]
        },
        {
          "term": "ReAct Pattern",
          "def": "An architecture interleaving verbal reasoning ('Thoughts') with environmental tool invocations ('Actions') and feedback ('Observations').",
          "lesson": 2,
          "tags": [
            "ai",
            "patterns"
          ]
        },
        {
          "term": "Agency",
          "def": "The capacity of an automated system to act independently upon its environment to achieve a specified objective.",
          "lesson": 1,
          "tags": [
            "ai",
            "theory"
          ]
        }
      ]
    },
    {
      "id": "tools",
      "title": "Tools & Execution",
      "terms": [
        {
          "term": "Tool Calling",
          "def": "A mechanism allowing language models to emit structured arguments to invoke predefined host functions.",
          "lesson": 4,
          "tags": [
            "ai",
            "tools"
          ]
        },
        {
          "term": "Exact String Replacement",
          "def": "A safe file-editing technique that substitutes a target code block identified by surrounding context lines.",
          "lesson": 4,
          "tags": [
            "ai",
            "editing"
          ]
        },
        {
          "term": "Lexical Search",
          "def": "Exact text and regular-expression searching (grep) across files to locate specific symbols and patterns.",
          "lesson": 3,
          "tags": [
            "ai",
            "search"
          ]
        }
      ]
    },
    {
      "id": "memory",
      "title": "Memory & Context",
      "terms": [
        {
          "term": "Working Memory",
          "def": "Dynamic, in-session state tracking (such as todo lists and scratchpads) used during active execution.",
          "lesson": 5,
          "tags": [
            "ai",
            "memory"
          ]
        },
        {
          "term": "Persistent Memory",
          "def": "Repository-scoped markdown files documenting architectural rules, conventions, and verified facts across sessions.",
          "lesson": 5,
          "tags": [
            "ai",
            "memory"
          ]
        },
        {
          "term": "Context Compaction",
          "def": "Summarizing or pruning conversation history when approaching token window limits to preserve capacity.",
          "lesson": 6,
          "tags": [
            "ai",
            "context"
          ]
        }
      ]
    },
    {
      "id": "reliability",
      "title": "Reliability & Steering",
      "terms": [
        {
          "term": "Agent Thrashing",
          "def": "A failure mode where an agent makes circular, guessing edits that break tests in an endless loop.",
          "lesson": 7,
          "tags": [
            "ai",
            "debugging"
          ]
        },
        {
          "term": "Circuit Breaker",
          "def": "A mechanism that halts automated agent repair loops after a threshold of failed attempts to request human input.",
          "lesson": 7,
          "tags": [
            "ai",
            "safety"
          ]
        },
        {
          "term": "Human-in-the-Loop",
          "def": "An engineering workflow where a human guides architecture, sets boundaries, and reviews agent diffs.",
          "lesson": 8,
          "tags": [
            "ai",
            "collaboration"
          ]
        }
      ]
    }
  ],
  "cheatsheetSections": [
    {
      "title": "The ReAct Loop Cycle",
      "label": "Universal agent execution loop",
      "code": "while not goal_satisfied:\n    thought = model.reason(state)\n    action = model.select_tool(thought)\n    observation = env.execute(action)\n    state.update(thought, action, observation)",
      "lessonN": 2,
      "lessonSlug": "core-agent-loop",
      "lessonTitle": "The Core Agent Loop: Read, Plan, Act, Observe"
    },
    {
      "title": "Safe File String Replacement",
      "label": "Context-anchored code edit",
      "code": "replace_string_in_file(\n    filePath=\"/src/api.py\",\n    oldString=\"  def get_user():\\n    # old logic\\n    return user\",\n    newString=\"  def get_user():\\n    # new validated logic\\n    return validated_user\"\n)",
      "lessonN": 4,
      "lessonSlug": "tool-calling-edits-terminals",
      "lessonTitle": "Tool Calling: Editing Files and Running Terminals"
    },
    {
      "title": "Context Compaction Checkpoint",
      "label": "Distilling long session history",
      "code": "# Replace 80k tokens of verbose logs with a milestone summary:\n# Checkpoint: Implemented tenant_id column in User model.\n# Status: 14/15 tests passing. Failing: test_invoice_isolation.",
      "lessonN": 6,
      "lessonSlug": "context-exhaustion-and-compaction",
      "lessonTitle": "Context Window Exhaustion and Compaction"
    },
    {
      "title": "Agent Steering Constraints",
      "label": "Effective prompt framing",
      "code": "# Always provide:\n# 1. Clear Goal + Acceptance Criteria\n# 2. Constraints (Do NOT modify external schemas)\n# 3. Verification command (pytest tests/test_auth.py)",
      "lessonN": 8,
      "lessonSlug": "human-in-the-loop-steering",
      "lessonTitle": "Human-in-the-Loop: Guiding and Steering the Agent"
    }
  ],
  "lessons": [
    {
      "n": 1,
      "id": "from-autocomplete-to-agent",
      "title": "From Autocomplete to Autonomous Agent",
      "topic": "Agent Evolution",
      "anim": "Generic",
      "lede": "The evolution of AI coding tools: from inline ghost-text autocomplete to reasoning agents with tools.",
      "winShort": "You understand the architectural evolution from autocomplete to autonomous coding agents.",
      "missionLink": "Mastering from autocomplete to autonomous agent across modern software engineering",
      "sec1": {
        "title": "Core principles of From Autocomplete to Autonomous Agent",
        "content": "<p>The first generation of AI coding assistants operated as smart autocomplete: as you typed in your editor, a model predicted the next line or block of ghost text. While useful for boilerplate, autocomplete lacked any broader situational awareness or agency.</p>",
        "keyIdea": "The evolution of AI coding tools: from inline ghost-text autocomplete to reasoning agents with tools."
      },
      "predict": {
        "q": "What distinguishes an AI coding agent from an inline code completion tool like standard Copilot?",
        "a": [
          "An agent runs in an autonomous loop: inspecting the repo, editing multiple files, running terminal commands, and verifying results",
          "An agent is written in C++ while completion is written in Python",
          "An agent cannot read code files",
          "An agent only works when the computer is offline"
        ],
        "c": 0,
        "why": "Agents have agency: they can plan, execute tools, observe outputs, and iterate until the task is complete.",
        "prompt": "What distinguishes an AI coding agent from an inline code completion tool like standard Copilot?",
        "options": [
          "An agent runs in an autonomous loop: inspecting the repo, editing multiple files, running terminal commands, and verifying results",
          "An agent is written in C++ while completion is written in Python",
          "An agent cannot read code files",
          "An agent only works when the computer is offline"
        ],
        "answer": 0,
        "explanation": "Agents have agency: they can plan, execute tools, observe outputs, and iterate until the task is complete."
      },
      "sec2": {
        "title": "Evolution of AI Assistants",
        "content": "<p>An <strong>AI coding agent</strong> represents a fundamental paradigm shift. Instead of waiting for you to type, an agent is given a high-level goal (e.g. <em>'Add a rate-limiter middleware to the API and verify it with tests'</em>). The agent then acts autonomously within an execution loop:</p>"
      },
      "diagram": {
        "title": "Evolution of AI Assistants",
        "caption": "From passive completion to active tool-driven agency",
        "steps": [
          {
            "title": "Ghost Text Autocomplete",
            "lines": [
              "Single-line suggestions",
              "Triggered by typing",
              "No tool access"
            ]
          },
          {
            "title": "Chat Assistants",
            "lines": [
              "Multi-turn Q&A in sidebar",
              "User copy-pastes code",
              "No direct file edits"
            ]
          },
          {
            "title": "Autonomous Agents",
            "lines": [
              "Multi-file read & write",
              "Terminal execution loop",
              "Self-correcting on error"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Ghost Text Autocomplete",
            "lines": [
              "Single-line suggestions",
              "Triggered by typing",
              "No tool access"
            ]
          },
          {
            "title": "Chat Assistants",
            "lines": [
              "Multi-turn Q&A in sidebar",
              "User copy-pastes code",
              "No direct file edits"
            ]
          },
          {
            "title": "Autonomous Agents",
            "lines": [
              "Multi-file read & write",
              "Terminal execution loop",
              "Self-correcting on error"
            ]
          }
        ]
      },
      "sec3": {
        "title": "The Agent Feedback Loop",
        "content": "<ul><li><strong>Read Context:</strong> Grep the codebase, read relevant files, and examine directory structure.</li><li><strong>Formulate a Plan:</strong> Break the goal into sequential subtasks.</li><li><strong>Execute Tools:</strong> Edit multiple files, install packages, and execute test commands in a shell.</li><li><strong>Observe and Correct:</strong> Read compiler diagnostics and test failure traces, adjusting code until tests pass.</li></ul><pre><code># The Autonomous Agent Lifecycle\nGoal: \"Fix the authentication token expiry bug\"\n1. Agent runs grep_search(query='TOKEN_EXPIRY')\n2. Agent reads auth/service.py lines 40-80\n3. Agent edits auth/service.py to add timedelta calculation\n4. Agent executes pytest tests/test_auth.py in terminal\n5. Agent observes green test output and reports completion!</code></pre><div class=\"callout\"><p><strong>Mental Model:</strong> Think of an agent not as an oracle that knows all answers, but as a tireless junior developer who can read your files, execute tools, and iterate on compiler errors.</p></div>"
      },
      "trace": {
        "title": "The Agent Feedback Loop",
        "caption": "How tools bridge reasoning and real code",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "From Autocomplete to Autonomous Agent"
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
              "step": "Reasoning (LLM)"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Environment (OS/IDE)"
            }
          },
          {
            "line": 3,
            "vars": {
              "step": "Observation"
            }
          }
        ],
        "code": [
          "# Tracing From Autocomplete to Autonomous Agent",
          "def execute_flow():",
          "    # The evolution of AI coding tools: from inline ghos...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the agent definition sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Unlike passive autocomplete, an AI coding agent operates within an autonomous loop using {1} to edit files and {2} to verify changes."
        ],
        "blanks": [
          {
            "a": [
              "tools"
            ],
            "why": "APIs for interacting with the environment"
          },
          {
            "a": [
              "terminals"
            ],
            "why": "Command line execution environments"
          }
        ]
      },
      "win": "You understand the architectural evolution from autocomplete to autonomous coding agents.",
      "nextTasks": [
        "Audit your project code and identify where from autocomplete to autonomous agent applies.",
        "Author a unit test or verification script exercising from autocomplete to autonomous agent.",
        "Document team architectural conventions regarding from autocomplete to autonomous agent."
      ],
      "primarySource": "Industry standards and best practices for From Autocomplete to Autonomous Agent.",
      "quiz": [
        {
          "q": "What core capability transforms a language model into an AI coding agent?",
          "a": [
            "Tool use: the ability to read files, write edits, and execute terminal commands in an iterative loop",
            "A larger context window alone",
            "Fine-tuning on Python documentation",
            "Translating code into natural language"
          ],
          "c": 0,
          "why": "Tool use provides the bridge between language reasoning and concrete environmental action."
        },
        {
          "q": "Why is an agent able to recover from its own syntax mistakes?",
          "a": [
            "It runs tests or linters, observes the error output in its context, and issues an edit to fix the error",
            "The compiler fixes syntax automatically",
            "Language models never generate syntax errors",
            "The user types the fix in the background"
          ],
          "c": 0,
          "why": "Observing execution errors in context enables the agent to formulate corrective actions."
        },
        {
          "q": "What is the primary role of the human engineer when working with an AI coding agent?",
          "a": [
            "Providing precise specifications, architectural guardrails, and reviewing generated diffs",
            "Typing every line of code by hand",
            "Disabling terminal access",
            "Manually compiling Python files"
          ],
          "c": 0,
          "why": "The human engineer acts as the architect and reviewer, setting goals and validating results."
        },
        {
          "q": "What happens if an agent is not given access to a terminal or test runner?",
          "a": [
            "It cannot verify its own code changes, relying entirely on probabilistic generation without validation",
            "It runs 10x faster",
            "It cannot edit files",
            "It loses access to its memory"
          ],
          "c": 0,
          "why": "Without execution tools, an agent cannot observe whether its code actually compiles or passes tests."
        }
      ],
      "next": {
        "title": "The Core Agent Loop: Read, Plan, Act, Observe",
        "desc": "Deconstruct the universal four-stage agent execution loop."
      }
    },
    {
      "n": 2,
      "id": "core-agent-loop",
      "title": "The Core Agent Loop: Read, Plan, Act, Observe",
      "topic": "Agent Loop",
      "anim": "Generic",
      "lede": "The four foundational states of every coding agent: Read state, Plan actions, Act with tools, and Observe results.",
      "winShort": "You understand the mechanics of the Read-Plan-Act-Observe agent loop.",
      "missionLink": "Mastering the core agent loop: read, plan, act, observe across modern software engineering",
      "sec1": {
        "title": "Core principles of The Core Agent Loop: Read, Plan, Act, Observe",
        "content": "<p>Every modern coding agent (GitHub Copilot Agent mode, Claude Code, Cursor, Codex Agent) is built on a variant of the classic <strong>ReAct (Reason + Act) loop</strong>. In a coding environment, this loop takes a concrete four-phase shape:</p>",
        "keyIdea": "The four foundational states of every coding agent: Read state, Plan actions, Act with tools, and Observe results."
      },
      "predict": {
        "q": "What happens if an agent skips the 'Observe' step after executing a file edit?",
        "a": [
          "It cannot detect whether the edit succeeded, broke syntax, or introduced unintended formatting errors",
          "The operating system refuses to save the file",
          "The file is permanently locked",
          "The LLM context window doubles in size"
        ],
        "c": 0,
        "why": "Without observing tool results, the agent acts blindly without feedback from the environment.",
        "prompt": "What happens if an agent skips the 'Observe' step after executing a file edit?",
        "options": [
          "It cannot detect whether the edit succeeded, broke syntax, or introduced unintended formatting errors",
          "The operating system refuses to save the file",
          "The file is permanently locked",
          "The LLM context window doubles in size"
        ],
        "answer": 0,
        "explanation": "Without observing tool results, the agent acts blindly without feedback from the environment."
      },
      "sec2": {
        "title": "The Four-Phase Agent Loop",
        "content": "<ul><li><strong>1. READ:</strong> The agent inspects its environment: reading the prompt, exploring files, searching symbols, and loading memory.</li><li><strong>2. PLAN:</strong> The agent reasons over its observations, formulating an actionable next step or breaking down a larger task.</li><li><strong>3. ACT:</strong> The agent issues a structured tool call: replace_string_in_file, create_file, or run_in_terminal.</li><li><strong>4. OBSERVE:</strong> The environment executes the tool and returns the result (stdout, exit code, diff, or error message) directly into the agent's context.</li></ul>"
      },
      "diagram": {
        "title": "The Four-Phase Agent Loop",
        "caption": "Read, Plan, Act, Observe cycle",
        "steps": [
          {
            "title": "1. Read",
            "lines": [
              "Inspect files & repo state",
              "Gather context & symptoms"
            ]
          },
          {
            "title": "2. Plan",
            "lines": [
              "Synthesize information",
              "Formulate next concrete action"
            ]
          },
          {
            "title": "3. Act",
            "lines": [
              "Invoke tool call",
              "Apply edit or run command"
            ]
          },
          {
            "title": "4. Observe",
            "lines": [
              "Read tool output & diff",
              "Confirm success or pivot"
            ]
          }
        ],
        "boxes": [
          {
            "title": "1. Read",
            "lines": [
              "Inspect files & repo state",
              "Gather context & symptoms"
            ]
          },
          {
            "title": "2. Plan",
            "lines": [
              "Synthesize information",
              "Formulate next concrete action"
            ]
          },
          {
            "title": "3. Act",
            "lines": [
              "Invoke tool call",
              "Apply edit or run command"
            ]
          },
          {
            "title": "4. Observe",
            "lines": [
              "Read tool output & diff",
              "Confirm success or pivot"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Handling a Failed Observation",
        "content": "<pre><code># The ReAct Iteration Loop in JSON\n{\n  \"thought\": \"I need to check why test_checkout fails. I will run pytest.\",\n  \"tool_call\": {\n    \"name\": \"run_in_terminal\",\n    \"arguments\": {\"command\": \"pytest tests/test_checkout.py\"}\n  }\n}\n# Environment returns observation:\n# stdout: \"FAILED: KeyError: 'discount_code' at line 45\"\n# Agent next thought: \"The dictionary is missing 'discount_code'. I will edit line 45.\"</code></pre><p>This cycle repeats until the agent satisfies all criteria or determines it needs human clarification.</p><div class=\"callout\"><p><strong>Key Insight:</strong> The intelligence of an agent is not just the model weights; it is the quality of the loop that connects thought to action and observation.</p></div>"
      },
      "trace": {
        "title": "Handling a Failed Observation",
        "caption": "The agent self-correction branch",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "The Core Agent Loop: Read, Plan, Act, Observe"
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
              "step": "Action: Apply Edit"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Observation: Error"
            }
          },
          {
            "line": 3,
            "vars": {
              "step": "Recovery Loop"
            }
          }
        ],
        "code": [
          "# Tracing The Core Agent Loop: Read, Plan, Act, Observe",
          "def execute_flow():",
          "    # The four foundational states of every coding agent...",
          "    return True"
        ]
      },
      "practiceIntro": "Fill in the four agent loop phases",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "The agent loop consists of: {1} context, {2} next steps, {3} using tools, and {4} execution outputs."
        ],
        "blanks": [
          {
            "a": [
              "read"
            ],
            "why": "Gathering repository state"
          },
          {
            "a": [
              "plan"
            ],
            "why": "Formulating next action"
          },
          {
            "a": [
              "act"
            ],
            "why": "Executing tool calls"
          },
          {
            "a": [
              "observe"
            ],
            "why": "Evaluating tool results"
          }
        ]
      },
      "win": "You understand the mechanics of the Read-Plan-Act-Observe agent loop.",
      "nextTasks": [
        "Audit your project code and identify where the core agent loop: read, plan, act, observe applies.",
        "Author a unit test or verification script exercising the core agent loop: read, plan, act, observe.",
        "Document team architectural conventions regarding the core agent loop: read, plan, act, observe."
      ],
      "primarySource": "Industry standards and best practices for The Core Agent Loop: Read, Plan, Act, Observe.",
      "quiz": [
        {
          "q": "What does ReAct stand for in AI agent research?",
          "a": [
            "Reasoning and Acting: interleaving chain-of-thought reasoning with environmental tool actions",
            "React.js frontend framework",
            "Reactive programming with streams",
            "Real-time Action controller"
          ],
          "c": 0,
          "why": "ReAct combines verbal reasoning traces with concrete actions and environmental observations."
        },
        {
          "q": "Why is the 'Plan' step critical before taking an action?",
          "a": [
            "It prevents the agent from thrashing with random trial-and-error edits and aligns actions with goals",
            "It allows the CPU to enter power-saving mode",
            "It encrypts the conversation history",
            "It prevents the model from generating text"
          ],
          "c": 0,
          "why": "Deliberate planning helps the model decompose complex goals into coherent sequential steps."
        },
        {
          "q": "What constitutes an 'Observation' in a coding agent?",
          "a": [
            "The stdout, stderr, exit code, or file diff returned by the IDE or operating system after a tool executes",
            "A comment written by another developer",
            "A screenshot of the desktop",
            "The user reading the screen"
          ],
          "c": 0,
          "why": "Observations are the environmental feedback returned to the model following an action."
        },
        {
          "q": "When does the agent decide to terminate its loop?",
          "a": [
            "When its planning step determines that all acceptance criteria are met, or when it requires user input",
            "When the computer is shut down",
            "After exactly three iterations",
            "When the context window is completely full"
          ],
          "c": 0,
          "why": "Agents evaluate goal completion based on tests passing and criteria fulfillment."
        }
      ],
      "next": {
        "title": "Reading the Repository: File Tree, Grep, Semantic Search",
        "desc": "How agents explore and navigate unfamiliar codebases efficiently."
      }
    },
    {
      "n": 3,
      "id": "reading-the-repository",
      "title": "Reading the Repository: File Tree, Grep, Semantic Search",
      "topic": "Code Navigation",
      "anim": "Generic",
      "lede": "How coding agents navigate large codebases: balancing file trees, exact text grep, and semantic vector search.",
      "winShort": "You know how AI coding agents navigate large codebases with precision.",
      "missionLink": "Mastering reading the repository: file tree, grep, semantic search across modern software engineering",
      "sec1": {
        "title": "Core principles of Reading the Repository: File Tree, Grep, Semantic Search",
        "content": "<p>A real software repository contains hundreds or thousands of files. An agent cannot read the entire codebase into its context window at once. Just like an expert human engineer entering a new codebase, the agent must <strong>navigate strategically</strong>.</p>",
        "keyIdea": "How coding agents navigate large codebases: balancing file trees, exact text grep, and semantic vector search."
      },
      "predict": {
        "q": "Why is feeding an entire 100,000-line repository into an agent's prompt impractical?",
        "a": [
          "It blows through context limits, costs massive token fees, and degrades reasoning with irrelevant noise",
          "Language models refuse to read files with more than 10 lines",
          "Operating systems block files larger than 1MB",
          "Python files cannot be converted to tokens"
        ],
        "c": 0,
        "why": "Context windows are finite budgets; indiscriminate bulk loading destroys signal-to-noise ratio.",
        "prompt": "Why is feeding an entire 100,000-line repository into an agent's prompt impractical?",
        "options": [
          "It blows through context limits, costs massive token fees, and degrades reasoning with irrelevant noise",
          "Language models refuse to read files with more than 10 lines",
          "Operating systems block files larger than 1MB",
          "Python files cannot be converted to tokens"
        ],
        "answer": 0,
        "explanation": "Context windows are finite budgets; indiscriminate bulk loading destroys signal-to-noise ratio."
      },
      "sec2": {
        "title": "Three-Tier Code Retrieval",
        "content": "<p>Effective agents use a three-tier retrieval hierarchy:</p>"
      },
      "diagram": {
        "title": "Three-Tier Code Retrieval",
        "caption": "Progressive exploration from macro to micro",
        "steps": [
          {
            "title": "1. Macro Structure",
            "lines": [
              "Directory tree & file search",
              "Discovers module layout"
            ]
          },
          {
            "title": "2. Lexical Pinpointing",
            "lines": [
              "Exact regex / text grep",
              "Finds symbols & call sites"
            ]
          },
          {
            "title": "3. Targeted Reading",
            "lines": [
              "Read specific line ranges",
              "Extracts pure signal"
            ]
          }
        ],
        "boxes": [
          {
            "title": "1. Macro Structure",
            "lines": [
              "Directory tree & file search",
              "Discovers module layout"
            ]
          },
          {
            "title": "2. Lexical Pinpointing",
            "lines": [
              "Exact regex / text grep",
              "Finds symbols & call sites"
            ]
          },
          {
            "title": "3. Targeted Reading",
            "lines": [
              "Read specific line ranges",
              "Extracts pure signal"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Token Efficiency Comparison",
        "content": "<ul><li><strong>1. Structural Orientation (File Tree & Directory Listing):</strong> Inspecting directory structure (list_dir, file_search) to locate architecture boundaries, entry points, and module layouts.</li><li><strong>2. Exact Lexical Search (Grep):</strong> Finding exact function names, class definitions, error constants, or import statements across files. Grep is fast, deterministic, and accurate.</li><li><strong>3. Semantic Search (Vector Embeddings):</strong> Finding conceptual functionality when the exact symbol name is unknown (e.g. <em>'where is user billing calculated?'</em>).</li></ul><pre><code># Strategic Code Exploration Flow:\n# 1. Orient: list_dir('src/') -> discovers [auth/, billing/, api/]\n# 2. Pinpoint: grep_search('class TokenManager') -> finds src/auth/tokens.py:42\n# 3. Read Slice: read_file('src/auth/tokens.py', startLine=40, endLine=80)\n# Total tokens consumed: ~400 tokens (vs 150,000 for whole repo!)</code></pre><div class=\"callout\"><p><strong>Targeted Reading:</strong> Always read meaningful slices of code (40-100 lines) around target symbols rather than single lines or entire 5,000-line files.</p></div>"
      },
      "trace": {
        "title": "Token Efficiency Comparison",
        "caption": "Targeted retrieval vs bulk dump",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Reading the Repository: File Tree, Grep, Semantic Search"
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
              "step": "Bulk Dump (Wasteful)"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Targeted Grep (Precise)"
            }
          }
        ],
        "code": [
          "# Tracing Reading the Repository: File Tree, Grep, Semantic Search",
          "def execute_flow():",
          "    # How coding agents navigate large codebases: balanc...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the repository navigation sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Agents explore codebases by discovering structure with {1}, pinpointing symbols with {2}, and reading targeted line slices."
        ],
        "blanks": [
          {
            "a": [
              "directory listings"
            ],
            "why": "Folder structure tools like list_dir"
          },
          {
            "a": [
              "grep search"
            ],
            "why": "Fast text and regex scanning"
          }
        ]
      },
      "win": "You know how AI coding agents navigate large codebases with precision.",
      "nextTasks": [
        "Audit your project code and identify where reading the repository: file tree, grep, semantic search applies.",
        "Author a unit test or verification script exercising reading the repository: file tree, grep, semantic search.",
        "Document team architectural conventions regarding reading the repository: file tree, grep, semantic search."
      ],
      "primarySource": "Industry standards and best practices for Reading the Repository: File Tree, Grep, Semantic Search.",
      "quiz": [
        {
          "q": "What is the primary strength of grep search for an agent navigating a codebase?",
          "a": [
            "It quickly locates exact symbol names, imports, and error strings across thousands of files without loading them into context",
            "It executes Python code in parallel",
            "It automatically fixes syntax errors",
            "It generates unit tests"
          ],
          "c": 0,
          "why": "Grep performs lightning-fast exact text matching without token overhead."
        },
        {
          "q": "When is semantic vector search superior to grep search?",
          "a": [
            "When you are searching for a concept or behavior but do not know the exact symbol or variable name used in code",
            "When searching for an exact variable name like 'user_id'",
            "When finding syntax errors in CSS",
            "When running pytest"
          ],
          "c": 0,
          "why": "Semantic search matches meaning and concepts rather than exact literal character strings."
        },
        {
          "q": "Why is reading specific line ranges better than reading entire massive files?",
          "a": [
            "It preserves the context window budget and keeps the model focused on relevant logic without distraction",
            "Text editors crash when opening whole files",
            "Python files can only be read in 50-line chunks",
            "It reduces network bandwidth by 99%"
          ],
          "c": 0,
          "why": "Reading focused slices maximizes signal-to-noise ratio in the model context window."
        },
        {
          "q": "What is the first tool call an agent should make when exploring an unfamiliar project?",
          "a": [
            "Examine directory structure or README/manifest files to understand overall project layout",
            "Edit the main configuration file",
            "Delete all test files",
            "Run git commit"
          ],
          "c": 0,
          "why": "Understanding top-level architecture and directories guides all subsequent investigations."
        }
      ],
      "next": {
        "title": "Tool Calling: Editing Files and Running Terminals",
        "desc": "How agents safely modify code and invoke shell commands."
      }
    },
    {
      "n": 4,
      "id": "tool-calling-edits-terminals",
      "title": "Tool Calling: Editing Files and Running Terminals",
      "topic": "Tool Execution",
      "anim": "Generic",
      "lede": "Examining how agents apply precise file edits (replace string vs AST rewrites) and manage terminal sessions.",
      "winShort": "You understand how agents use file editing and terminal execution tools safely.",
      "missionLink": "Mastering tool calling: editing files and running terminals across modern software engineering",
      "sec1": {
        "title": "Core principles of Tool Calling: Editing Files and Running Terminals",
        "content": "<p>To do real work, an agent must reach beyond text generation into the filesystem and the operating system. This is enabled by <strong>Tool Calling</strong> (also known as Function Calling).</p>",
        "keyIdea": "Examining how agents apply precise file edits (replace string vs AST rewrites) and manage terminal sessions."
      },
      "predict": {
        "q": "Why is exact string replacement (with context lines) preferred over rewriting entire files during agent edits?",
        "a": [
          "Full-file rewrites burn massive tokens and frequently introduce accidental truncation or missing code markers",
          "Exact string replacement is forbidden in JavaScript",
          "Operating systems cannot overwrite existing files",
          "Rewriting files changes git ownership"
        ],
        "c": 0,
        "why": "Full-file rewrites risk truncating code with '...existing code...' and waste huge token budgets.",
        "prompt": "Why is exact string replacement (with context lines) preferred over rewriting entire files during agent edits?",
        "options": [
          "Full-file rewrites burn massive tokens and frequently introduce accidental truncation or missing code markers",
          "Exact string replacement is forbidden in JavaScript",
          "Operating systems cannot overwrite existing files",
          "Rewriting files changes git ownership"
        ],
        "answer": 0,
        "explanation": "Full-file rewrites risk truncating code with '...existing code...' and waste huge token budgets."
      },
      "sec2": {
        "title": "File Editing Strategies",
        "content": "<p>When modifying existing code, agents face a choice of editing strategies:</p>"
      },
      "diagram": {
        "title": "File Editing Strategies",
        "caption": "Comparing full rewrites vs targeted replacements",
        "steps": [
          {
            "title": "Full File Overwrite",
            "lines": [
              "Sends all 800 lines",
              "Risk of lazy truncation",
              "High token cost"
            ]
          },
          {
            "title": "Targeted Replacement",
            "lines": [
              "Sends oldString & newString",
              "Context lines ensure uniqueness",
              "Low token cost, zero truncation"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Full File Overwrite",
            "lines": [
              "Sends all 800 lines",
              "Risk of lazy truncation",
              "High token cost"
            ]
          },
          {
            "title": "Targeted Replacement",
            "lines": [
              "Sends oldString & newString",
              "Context lines ensure uniqueness",
              "Low token cost, zero truncation"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Terminal Execution Safety",
        "content": "<ul><li><strong>Full File Overwrite:</strong> The agent generates the entire 800-line file from scratch. <em>Dangerous!</em> Models frequently hallucinate missing sections, omit methods with comments like `// ...rest of code unchanged...`, and burn thousands of tokens.</li><li><strong>Exact String Replacement (replace_string_in_file):</strong> The agent specifies the exact target string to replace, along with 3-5 lines of surrounding context. Safe, precise, and minimal token usage.</li><li><strong>Terminal Commands (run_in_terminal):</strong> Executing build scripts, running unit tests, installing packages, or inspecting git diffs.</li></ul><pre><code># Anatomy of a Safe String Replacement Tool Call:\n{\n  \"filePath\": \"/workspace/src/auth.py\",\n  \"oldString\": \"    if not token:\\n        return False\\n    return verify(token)\",\n  \"newString\": \"    if not token:\\n        raise AuthenticationRequired()\\n    return verify(token)\"\n}</code></pre><p>Notice that `oldString` contains sufficient surrounding context lines to ensure the match is 100% unique in the file.</p><div class=\"callout\"><p><strong>Safety Seam:</strong> Never allow an agent to run destructive commands like rm -rf or push directly to production without human confirmation gates.</p></div>"
      },
      "trace": {
        "title": "Terminal Execution Safety",
        "caption": "Running one-shot sync commands safely",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Tool Calling: Editing Files and Running Terminals"
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
              "step": "Command Request"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Terminal Capture"
            }
          },
          {
            "line": 3,
            "vars": {
              "step": "Tool Result"
            }
          }
        ],
        "code": [
          "# Tracing Tool Calling: Editing Files and Running Terminals",
          "def execute_flow():",
          "    # Examining how agents apply precise file edits (rep...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the tool calling sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Agents use targeted {1} with context lines to safely modify code without risking accidental code {2}."
        ],
        "blanks": [
          {
            "a": [
              "string replacement"
            ],
            "why": "Precise substring substitution tool"
          },
          {
            "a": [
              "truncation"
            ],
            "why": "Dropping code with comments like ...rest of code..."
          }
        ]
      },
      "win": "You understand how agents use file editing and terminal execution tools safely.",
      "nextTasks": [
        "Audit your project code and identify where tool calling: editing files and running terminals applies.",
        "Author a unit test or verification script exercising tool calling: editing files and running terminals.",
        "Document team architectural conventions regarding tool calling: editing files and running terminals."
      ],
      "primarySource": "Industry standards and best practices for Tool Calling: Editing Files and Running Terminals.",
      "quiz": [
        {
          "q": "Why must 'oldString' in replace_string_in_file include 3-5 lines of context?",
          "a": [
            "To guarantee that the target replacement location is uniquely identified within the file",
            "To make the file size larger on disk",
            "Because Python syntax requires 5-line blocks",
            "To satisfy git commit message rules"
          ],
          "c": 0,
          "why": "Context lines eliminate ambiguity if identical function names or variable patterns exist elsewhere in the file."
        },
        {
          "q": "What is the danger of using 'full-file rewrite' tools on large legacy files?",
          "a": [
            "Models often lazily emit comments like '// ... existing code ...', deleting large chunks of working functionality",
            "Full-file rewrites disable git version control",
            "Files become read-only",
            "The CPU fan speeds up"
          ],
          "c": 0,
          "why": "Models frequently summarize or omit unchanged middle sections when regenerating large files."
        },
        {
          "q": "How does an agent know whether a terminal command succeeded?",
          "a": [
            "By inspecting the numeric process exit code (0 for success, non-zero for failure) and stdout/stderr output",
            "By asking the user in chat",
            "By waiting 5 minutes",
            "By checking the system clock"
          ],
          "c": 0,
          "why": "Standard POSIX process exit codes provide unambiguous verification of command success."
        },
        {
          "q": "Why should interactive commands (like waiting for password prompts) be handled with care in agent terminals?",
          "a": [
            "Terminal commands run without a human TTY; interactive prompts can hang indefinitely without dedicated input handlers",
            "Passwords are automatically deleted by the shell",
            "Interactive commands overheat the CPU",
            "Shells cannot accept input"
          ],
          "c": 0,
          "why": "Non-interactive agent terminal runners hang if a command blocks waiting for stdin."
        }
      ],
      "next": {
        "title": "Working Memory vs Conversation History",
        "desc": "Understand how agents manage scratchpads, persistent memory, and context."
      }
    },
    {
      "n": 5,
      "id": "working-memory-vs-history",
      "title": "Working Memory vs Conversation History",
      "topic": "Agent Memory",
      "anim": "Generic",
      "lede": "Managing agent memory tiers: transient chat history, scratchpad working memory, and persistent project memory files.",
      "winShort": "You understand the memory hierarchy that keeps AI agents coherent across long tasks.",
      "missionLink": "Mastering working memory vs conversation history across modern software engineering",
      "sec1": {
        "title": "Core principles of Working Memory vs Conversation History",
        "content": "<p>A common failure mode in AI coding agents is <strong>context amnesia</strong>. As an agent works through a 20-step refactoring, the conversation history grows to tens of thousands of tokens. Eventually, the model context window fills up, triggering summarization or eviction. The agent forgets the initial architectural rules or previous debugging findings!</p>",
        "keyIdea": "Managing agent memory tiers: transient chat history, scratchpad working memory, and persistent project memory files."
      },
      "predict": {
        "q": "Why is relying solely on conversation history insufficient for complex, multi-step engineering tasks?",
        "a": [
          "As conversations grow long, history gets truncated or summarized, losing critical architectural decisions and facts",
          "Conversation history is deleted after 5 messages",
          "Chat history cannot store code snippets",
          "Language models forget words older than 2 minutes"
        ],
        "c": 0,
        "why": "Conversation history is ephemeral and subject to context limits; persistent memory files survive compaction.",
        "prompt": "Why is relying solely on conversation history insufficient for complex, multi-step engineering tasks?",
        "options": [
          "As conversations grow long, history gets truncated or summarized, losing critical architectural decisions and facts",
          "Conversation history is deleted after 5 messages",
          "Chat history cannot store code snippets",
          "Language models forget words older than 2 minutes"
        ],
        "answer": 0,
        "explanation": "Conversation history is ephemeral and subject to context limits; persistent memory files survive compaction."
      },
      "sec2": {
        "title": "Three Tiers of Agent Memory",
        "content": "<p>Professional agent architectures solve this using <strong>Three-Tier Memory</strong>:</p>"
      },
      "diagram": {
        "title": "Three Tiers of Agent Memory",
        "caption": "Transient vs working vs persistent storage",
        "steps": [
          {
            "title": "1. Chat History",
            "lines": [
              "Immediate dialog turns",
              "Subject to context eviction"
            ]
          },
          {
            "title": "2. Working Todo List",
            "lines": [
              "Dynamic task progress",
              "Prevents skipped steps"
            ]
          },
          {
            "title": "3. Persistent Files",
            "lines": [
              "Repo memory & conventions",
              "Survives across all sessions"
            ]
          }
        ],
        "boxes": [
          {
            "title": "1. Chat History",
            "lines": [
              "Immediate dialog turns",
              "Subject to context eviction"
            ]
          },
          {
            "title": "2. Working Todo List",
            "lines": [
              "Dynamic task progress",
              "Prevents skipped steps"
            ]
          },
          {
            "title": "3. Persistent Files",
            "lines": [
              "Repo memory & conventions",
              "Survives across all sessions"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Context Eviction Protection",
        "content": "<ul><li><strong>1. Ephemeral Conversation History:</strong> The back-and-forth messages of the current session. Fast, immediate, but transient and easily evicted.</li><li><strong>2. Working Memory (Scratchpad / Todo List):</strong> A structured in-session checklist (like manage_todo_list) where the agent tracks which subtasks are completed and which is currently in-progress.</li><li><strong>3. Persistent Repository Memory (/memories/repo/ or Markdown files):</strong> Notes committed to the repository that survive across conversations—documenting project conventions, verified build commands, and architectural invariants.</li></ul><pre><code># The Memory Hierarchy\nTier 1: Conversation Turns   -> Ephemeral (evicted after N turns)\nTier 2: Active Todo List     -> Dynamic working state (in-progress, done)\nTier 3: Repo Memory Files    -> Persistent files (conventions.md, adr-001.md)</code></pre><div class=\"callout\"><p><strong>Best Practice:</strong> When an agent discovers an unexpected quirk (e.g. <em>'Tests must run with pytest -m unit'</em>), record it into a persistent memory file so future agent sessions never repeat the discovery work.</p></div>"
      },
      "trace": {
        "title": "Context Eviction Protection",
        "caption": "How persistent memory guards against amnesia",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Working Memory vs Conversation History"
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
              "step": "Context Compaction"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Memory Files Intact"
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
          "# Tracing Working Memory vs Conversation History",
          "def execute_flow():",
          "    # Managing agent memory tiers: transient chat histor...",
          "    return True"
        ]
      },
      "practiceIntro": "Fill in the agent memory tiers",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "While conversation history is {1} and easily evicted, persistent repository notes stored on {2} survive across sessions."
        ],
        "blanks": [
          {
            "a": [
              "ephemeral"
            ],
            "why": "Transient and short-lived"
          },
          {
            "a": [
              "disk"
            ],
            "why": "Physical filesystem storage"
          }
        ]
      },
      "win": "You understand the memory hierarchy that keeps AI agents coherent across long tasks.",
      "nextTasks": [
        "Audit your project code and identify where working memory vs conversation history applies.",
        "Author a unit test or verification script exercising working memory vs conversation history.",
        "Document team architectural conventions regarding working memory vs conversation history."
      ],
      "primarySource": "Industry standards and best practices for Working Memory vs Conversation History.",
      "quiz": [
        {
          "q": "What problem does an active todo list (working memory) solve for an agent?",
          "a": [
            "It prevents the agent from losing track of multi-step plans and skipping critical intermediate verification steps",
            "It makes the model generate code in French",
            "It speeds up Python compilation",
            "It eliminates the need for unit tests"
          ],
          "c": 0,
          "why": "Structured todo tracking anchors agent focus during complex multi-phase tasks."
        },
        {
          "q": "Where should project-specific architectural rules and build quirks be stored for an agent?",
          "a": [
            "In repository documentation or persistent memory files like conventions.md or copilot-instructions.md",
            "In the user's browser history",
            "Only in the initial chat prompt message",
            "In temporary operating system caches"
          ],
          "c": 0,
          "why": "Persistent files in the workspace ensure all agent sessions adhere to verified project facts."
        },
        {
          "q": "What happens when an agent conversation exceeds the model's context window limit?",
          "a": [
            "Earlier messages are truncated or summarized, potentially losing initial constraints or nuances",
            "The computer reboots",
            "The agent charges double billing rates",
            "The repository is reverted to git HEAD"
          ],
          "c": 0,
          "why": "Context limits force eviction or lossy summarization of older dialogue turns."
        },
        {
          "q": "Why is recording lessons learned into memory files considered a compounding investment?",
          "a": [
            "Subsequent agent sessions read the notes immediately, avoiding repeating identical debugging mistakes",
            "Memory files increase hard drive resale value",
            "Memory files replace software documentation",
            "Memory files speed up CPU clock speed"
          ],
          "c": 0,
          "why": "Documented lessons preserve institutional knowledge across all future automated sessions."
        }
      ],
      "next": {
        "title": "Context Window Exhaustion and Compaction",
        "desc": "Learn how context degradation occurs and how agents survive long sessions."
      }
    },
    {
      "n": 6,
      "id": "context-exhaustion-and-compaction",
      "title": "Context Window Exhaustion and Compaction",
      "topic": "Context Budget",
      "anim": "Generic",
      "lede": "Managing context degradation, token limits, conversation truncation, and strategic summarization.",
      "winShort": "You know how to manage context exhaustion and compaction during agent tasks.",
      "missionLink": "Mastering context window exhaustion and compaction across modern software engineering",
      "sec1": {
        "title": "Core principles of Context Window Exhaustion and Compaction",
        "content": "<p>Even with massive context windows (128k, 200k, 1M tokens), more context is not always better. Research on <strong>attention degradation</strong> demonstrates that language models perform best when their context window contains a high concentration of relevant signal.</p>",
        "keyIdea": "Managing context degradation, token limits, conversation truncation, and strategic summarization."
      },
      "predict": {
        "q": "What is 'context rot' or attention degradation in long agent sessions?",
        "a": [
          "As the context window fills with thousands of lines of terminal logs and diffs, the model's ability to recall subtle initial instructions drops",
          "The hard drive sector where context is stored rots physically",
          "The Python interpreter leaks memory during long sessions",
          "The internet router drops packets"
        ],
        "c": 0,
        "why": "Massive token noise dilutes attention, causing the model to lose track of initial constraints.",
        "prompt": "What is 'context rot' or attention degradation in long agent sessions?",
        "options": [
          "As the context window fills with thousands of lines of terminal logs and diffs, the model's ability to recall subtle initial instructions drops",
          "The hard drive sector where context is stored rots physically",
          "The Python interpreter leaks memory during long sessions",
          "The internet router drops packets"
        ],
        "answer": 0,
        "explanation": "Massive token noise dilutes attention, causing the model to lose track of initial constraints."
      },
      "sec2": {
        "title": "Context Degradation Curve",
        "content": "<p>When an agent executes 30 terminal commands, each returning 500 lines of test output, the context becomes flooded with noisy logs. This leads to two critical problems:</p>"
      },
      "diagram": {
        "title": "Context Degradation Curve",
        "caption": "Attention dilution as context length increases",
        "steps": [
          {
            "title": "Low Token Volume (10k)",
            "lines": [
              "High attention focus",
              "Follows subtle instructions perfectly"
            ]
          },
          {
            "title": "Moderate Volume (50k)",
            "lines": [
              "Good performance",
              "Occasional misses on edge constraints"
            ]
          },
          {
            "title": "Saturated Volume (120k+)",
            "lines": [
              "High distraction from terminal noise",
              "Prone to loops and amnesia"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Low Token Volume (10k)",
            "lines": [
              "High attention focus",
              "Follows subtle instructions perfectly"
            ]
          },
          {
            "title": "Moderate Volume (50k)",
            "lines": [
              "Good performance",
              "Occasional misses on edge constraints"
            ]
          },
          {
            "title": "Saturated Volume (120k+)",
            "lines": [
              "High distraction from terminal noise",
              "Prone to loops and amnesia"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Compaction Checkpoint Flow",
        "content": "<ul><li><strong>Lost in the Middle:</strong> Important constraints stated at the beginning of the prompt get drowned out by recent terminal spam.</li><li><strong>Context Exhaustion:</strong> Approaching the hard token limit forces aggressive truncation, cutting off early decisions.</li></ul><p>Sophisticated agent architectures employ <strong>Context Compaction</strong>:</p><pre><code># The Compaction Transformation\n# BEFORE: 45 raw terminal outputs (42,000 tokens of test traces)\n# AFTER: Structured summary checkpoint (600 tokens):\n# \"Session checkpoint: Fixed auth tokens, updated User schema.\n#  Current status: 14/15 tests passing. Failing test: test_billing_invoice()\"</code></pre><p>Compaction replaces hundreds of turns of trial-and-error with an authoritative checkpoint, resetting the context budget while preserving essential progress.</p><div class=\"callout\"><p><strong>Practical Tip:</strong> When working with coding agents on big tasks, don't let one conversation run for 100 turns. Start a fresh session with a clear summary prompt after completing each major milestone!</p></div>"
      },
      "trace": {
        "title": "Compaction Checkpoint Flow",
        "caption": "Summarizing history to reclaim budget",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Context Window Exhaustion and Compaction"
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
              "step": "1. Saturated Context"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "2. Generate Checkpoint"
            }
          },
          {
            "line": 3,
            "vars": {
              "step": "3. Compact History"
            }
          }
        ],
        "code": [
          "# Tracing Context Window Exhaustion and Compaction",
          "def execute_flow():",
          "    # Managing context degradation, token limits, conver...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the context management sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "To prevent attention degradation and context exhaustion, long agent sessions use {1} to replace verbose logs with concise {2}."
        ],
        "blanks": [
          {
            "a": [
              "compaction"
            ],
            "why": "Compressing history into summaries"
          },
          {
            "a": [
              "checkpoints"
            ],
            "why": "Milestone summaries of state"
          }
        ]
      },
      "win": "You know how to manage context exhaustion and compaction during agent tasks.",
      "nextTasks": [
        "Audit your project code and identify where context window exhaustion and compaction applies.",
        "Author a unit test or verification script exercising context window exhaustion and compaction.",
        "Document team architectural conventions regarding context window exhaustion and compaction."
      ],
      "primarySource": "Industry standards and best practices for Context Window Exhaustion and Compaction.",
      "quiz": [
        {
          "q": "What causes 'attention degradation' in large context windows?",
          "a": [
            "Excessive noisy text (like verbose test logs and diffs) diluting the model's focus on critical constraints",
            "The model's weights changing dynamically",
            "CPU thermal throttling",
            "Exceeding the speed of light in optical cables"
          ],
          "c": 0,
          "why": "Attention mechanisms must distribute probability weights; excessive noise weakens attention on key instructions."
        },
        {
          "q": "How does context compaction benefit a multi-step coding task?",
          "a": [
            "It frees up token capacity while preserving the distilled record of decisions, completed tasks, and current blockers",
            "It makes the model run without internet",
            "It deletes all git branches",
            "It prevents syntax errors permanently"
          ],
          "c": 0,
          "why": "Compaction distills hundreds of noisy turns into a compact, actionable state summary."
        },
        {
          "q": "What is the 'Lost in the Middle' phenomenon?",
          "a": [
            "The tendency of LLMs to recall information at the beginning and end of long contexts much better than information in the middle",
            "A bug in git merge drivers",
            "Losing internet connection during inference",
            "Forgetting to close quotation marks in code"
          ],
          "c": 0,
          "why": "Attention distributions naturally peak at prompt beginnings and recent turns, weakening retrieval in the middle."
        },
        {
          "q": "When is the ideal time for a human engineer to start a fresh agent session?",
          "a": [
            "After completing a major logical milestone or PR component, passing the distilled checkpoint into the new prompt",
            "After every single tool call",
            "Only once per month",
            "Never; one session should run forever"
          ],
          "c": 0,
          "why": "Fresh sessions with clean checkpoints provide the highest intelligence and lowest latency."
        }
      ],
      "next": {
        "title": "Error Recovery Loops: When the Agent Breaks the Build",
        "desc": "How agents diagnose failures, avoid thrashing, and self-correct."
      }
    },
    {
      "n": 7,
      "id": "error-recovery-loops",
      "title": "Error Recovery Loops: When the Agent Breaks the Build",
      "topic": "Error Recovery",
      "anim": "Generic",
      "lede": "How agents diagnose failures, avoid thrashing in infinite loops, and systematically recover from broken builds.",
      "winShort": "You know how agents execute disciplined error recovery and avoid thrashing loops.",
      "missionLink": "Mastering error recovery loops: when the agent breaks the build across modern software engineering",
      "sec1": {
        "title": "Core principles of Error Recovery Loops: When the Agent Breaks the Build",
        "content": "<p>Coding agents do not write perfect code on the first attempt. What makes an agent genuinely powerful is its ability to <strong>recover from errors</strong>. When a compiler fails, a linter complains, or a unit test fails, the agent enters an error recovery loop.</p>",
        "keyIdea": "How agents diagnose failures, avoid thrashing in infinite loops, and systematically recover from broken builds."
      },
      "predict": {
        "q": "What is 'agent thrashing' during error recovery?",
        "a": [
          "The agent repeatedly applies blind, contradictory edits in a loop without diagnosing the actual root cause",
          "The agent's computer hard drive spinning too fast",
          "A high volume of git commits on GitHub",
          "The test runner executing tests in parallel"
        ],
        "c": 0,
        "why": "Thrashing occurs when an agent makes guessing edits that break other parts of the system in an endless cycle.",
        "prompt": "What is 'agent thrashing' during error recovery?",
        "options": [
          "The agent repeatedly applies blind, contradictory edits in a loop without diagnosing the actual root cause",
          "The agent's computer hard drive spinning too fast",
          "A high volume of git commits on GitHub",
          "The test runner executing tests in parallel"
        ],
        "answer": 0,
        "explanation": "Thrashing occurs when an agent makes guessing edits that break other parts of the system in an endless cycle."
      },
      "sec2": {
        "title": "The Thrashing Anti-Pattern",
        "content": "<p>However, poorly architected agents often suffer from <strong>Thrashing</strong> (or Flailing):</p>"
      },
      "diagram": {
        "title": "The Thrashing Anti-Pattern",
        "caption": "Blind guessing vs systematic diagnosis",
        "steps": [
          {
            "title": "Thrashing Cycle",
            "lines": [
              "Blind edit -> Test fails",
              "Contradictory edit -> New error",
              "Repeat 10 times (Chaos)"
            ]
          },
          {
            "title": "Systematic Recovery",
            "lines": [
              "Read traceback & line 42",
              "Identify missing parameter",
              "Targeted fix -> Verify green"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Thrashing Cycle",
            "lines": [
              "Blind edit -> Test fails",
              "Contradictory edit -> New error",
              "Repeat 10 times (Chaos)"
            ]
          },
          {
            "title": "Systematic Recovery",
            "lines": [
              "Read traceback & line 42",
              "Identify missing parameter",
              "Targeted fix -> Verify green"
            ]
          }
        ]
      },
      "sec3": {
        "title": "The 3-Strike Circuit Breaker",
        "content": "<ul><li>Turn 1: Fix test A, but accidentally break test B.</li><li>Turn 2: Revert fix to satisfy test B, breaking test A again!</li><li>Turn 3: Randomly change variable names in hope that it compiles.</li></ul><p>Disciplined error recovery follows a structured three-step protocol:</p><pre><code># The Systematic Error Recovery Protocol\n1. DIAGNOSE: Read the full traceback line number, exception type, and message.\n2. LOCATE: Inspect the exact source lines and recent diffs that triggered the failure.\n3. HYPOTHESIZE & VERIFY: Formulate a single clear reason for the failure. Make one targeted edit, then re-run the exact failing test.</code></pre><div class=\"callout\"><p><strong>The 3-Strike Rule:</strong> If an agent fails to fix a test failure after 3 iterations, it should stop immediately and ask the human user for guidance rather than continuing to thrash.</p></div>"
      },
      "trace": {
        "title": "The 3-Strike Circuit Breaker",
        "caption": "Halting automated loops before damage occurs",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Error Recovery Loops: When the Agent Breaks the Build"
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
              "step": "Attempt 1"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Attempt 2"
            }
          },
          {
            "line": 3,
            "vars": {
              "step": "Attempt 3 (Halt)"
            }
          }
        ],
        "code": [
          "# Tracing Error Recovery Loops: When the Agent Breaks the Build",
          "def execute_flow():",
          "    # How agents diagnose failures, avoid thrashing in i...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the error recovery sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "To prevent agent thrashing, systems enforce circuit breakers like the {1} rule to halt automated trial-and-error loops and request {2} guidance."
        ],
        "blanks": [
          {
            "a": [
              "3-strike"
            ],
            "why": "Limiting failed repair attempts"
          },
          {
            "a": [
              "human"
            ],
            "why": "Developer intervention"
          }
        ]
      },
      "win": "You know how agents execute disciplined error recovery and avoid thrashing loops.",
      "nextTasks": [
        "Audit your project code and identify where error recovery loops: when the agent breaks the build applies.",
        "Author a unit test or verification script exercising error recovery loops: when the agent breaks the build.",
        "Document team architectural conventions regarding error recovery loops: when the agent breaks the build."
      ],
      "primarySource": "Industry standards and best practices for Error Recovery Loops: When the Agent Breaks the Build.",
      "quiz": [
        {
          "q": "What is the primary indicator that an AI agent is caught in a thrashing loop?",
          "a": [
            "It repeatedly modifies the same code back and forth or introduces circular test failures across consecutive turns",
            "It uses too few tokens",
            "It completes the task in 5 seconds",
            "It asks for permission before running tests"
          ],
          "c": 0,
          "why": "Circular modifications and alternating test failures indicate the agent lacks a coherent root cause hypothesis."
        },
        {
          "q": "What should an agent inspect first when a terminal test command fails?",
          "a": [
            "The specific traceback, including file paths, line numbers, and the exact exception message",
            "The user's git commit history from last year",
            "The README file",
            "The operating system kernel version"
          ],
          "c": 0,
          "why": "Tracebacks provide the exact location and causal reason for software exceptions."
        },
        {
          "q": "Why is a circuit breaker essential in automated agentic workflows?",
          "a": [
            "It stops runaway token consumption and prevents the agent from corrupting files with desperate guessing edits",
            "It reboots the computer when errors occur",
            "It automatically publishes code to production",
            "It encrypts the repository"
          ],
          "c": 0,
          "why": "Circuit breakers bound failures and return control to humans when automated repair fails."
        },
        {
          "q": "How does git provide an immediate safety net during agent error recovery?",
          "a": [
            "The human or agent can run 'git checkout' or 'git stash' to discard broken edits and return to a clean baseline",
            "Git deletes the repository automatically",
            "Git prevents compiler errors",
            "Git rewrites Python into Rust"
          ],
          "c": 0,
          "why": "Git version control allows instantaneous zero-cost reverts when an agent's recovery path goes astray."
        }
      ],
      "next": {
        "title": "Human-in-the-Loop: Guiding and Steering the Agent",
        "desc": "Master the collaboration dynamics between engineer and agent."
      }
    },
    {
      "n": 8,
      "id": "human-in-the-loop-steering",
      "title": "Human-in-the-Loop: Guiding and Steering the Agent",
      "topic": "Collaboration",
      "anim": "Generic",
      "lede": "Effective human-agent collaboration: steering, clarifying ambiguities, setting boundaries, and reviewing diffs.",
      "winShort": "You have completed the How AI Coding Agents Work course.",
      "missionLink": "Mastering human-in-the-loop: guiding and steering the agent across modern software engineering",
      "sec1": {
        "title": "Core principles of Human-in-the-Loop: Guiding and Steering the Agent",
        "content": "<p>The most successful software engineers in the AI era do not view coding agents as replacements, nor as toys. They view the agent as a <strong>force multiplier</strong> within a structured partnership.</p>",
        "keyIdea": "Effective human-agent collaboration: steering, clarifying ambiguities, setting boundaries, and reviewing diffs."
      },
      "predict": {
        "q": "What is the most effective mental model for collaborating with an AI coding agent?",
        "a": [
          "The engineer acts as a Tech Lead / Senior Architect, while the agent acts as an exceptionally fast, tireless Junior Engineer",
          "The engineer sits back and does nothing while the agent replaces all software development",
          "The agent is an adversary to be tricked",
          "The agent is a search engine like Google"
        ],
        "c": 0,
        "why": "You direct architecture, provide specifications, and review diffs; the agent does the heavy typing and iteration.",
        "prompt": "What is the most effective mental model for collaborating with an AI coding agent?",
        "options": [
          "The engineer acts as a Tech Lead / Senior Architect, while the agent acts as an exceptionally fast, tireless Junior Engineer",
          "The engineer sits back and does nothing while the agent replaces all software development",
          "The agent is an adversary to be tricked",
          "The agent is a search engine like Google"
        ],
        "answer": 0,
        "explanation": "You direct architecture, provide specifications, and review diffs; the agent does the heavy typing and iteration."
      },
      "sec2": {
        "title": "The Division of Labor",
        "content": "<p>In this partnership, the division of labor is clear:</p>"
      },
      "diagram": {
        "title": "The Division of Labor",
        "caption": "Complementary strengths of humans and AI agents",
        "steps": [
          {
            "title": "Human (Architect)",
            "lines": [
              "Business requirements & intent",
              "System architecture & trade-offs",
              "Final review & verification"
            ]
          },
          {
            "title": "Agent (Implementation Engine)",
            "lines": [
              "Multi-file navigation & editing",
              "Boilerplate generation",
              "Continuous test execution loop"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Human (Architect)",
            "lines": [
              "Business requirements & intent",
              "System architecture & trade-offs",
              "Final review & verification"
            ]
          },
          {
            "title": "Agent (Implementation Engine)",
            "lines": [
              "Multi-file navigation & editing",
              "Boilerplate generation",
              "Continuous test execution loop"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Effective Steering Techniques",
        "content": "<ul><li><strong>What the Human Does Best:</strong> High-level system architecture, evaluating business trade-offs, judging UX aesthetics, verifying security boundaries, and providing clear specifications.</li><li><strong>What the Agent Does Best:</strong> Reading hundreds of files, making mechanical multi-file edits, writing repetitive boilerplate, running test suites, and resolving compiler errors.</li></ul><pre><code># The Tech Lead / Agent Dynamic\nHuman: \"Refactor the User model to support multi-tenant organizations. \n        Here are the constraints: \n        - Do NOT alter existing API schemas.\n        - Add organization_id with foreign key to organizations table.\n        - Write unit tests covering tenant isolation.\"\nAgent: Explores repo -> Drafts migration -> Updates model -> Adds tests -> Verifies green.\nHuman: Reviews git diff with critical eye -> Approves and merges!</code></pre><div class=\"callout\"><p><strong>The Ultimate Responsibility:</strong> The human engineer is 100% accountable for every line of code merged to main. Never approve an agent diff you do not understand!</p></div>"
      },
      "trace": {
        "title": "Effective Steering Techniques",
        "caption": "Guiding agents toward success",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Human-in-the-Loop: Guiding and Steering the Agent"
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
              "step": "Provide Constraints"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Incremental Slices"
            }
          },
          {
            "line": 3,
            "vars": {
              "step": "Critical Diff Review"
            }
          }
        ],
        "code": [
          "# Tracing Human-in-the-Loop: Guiding and Steering the Agent",
          "def execute_flow():",
          "    # Effective human-agent collaboration: steering, cla...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the collaboration sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "In human-in-the-loop engineering, the developer provides {1} and reviews diffs, while the agent performs {2} and test iterations."
        ],
        "blanks": [
          {
            "a": [
              "specifications"
            ],
            "why": "Clear architectural requirements and constraints"
          },
          {
            "a": [
              "mechanical edits"
            ],
            "why": "Writing and modifying source code files"
          }
        ]
      },
      "win": "You have completed the How AI Coding Agents Work course.",
      "nextTasks": [
        "Audit your project code and identify where human-in-the-loop: guiding and steering the agent applies.",
        "Author a unit test or verification script exercising human-in-the-loop: guiding and steering the agent.",
        "Document team architectural conventions regarding human-in-the-loop: guiding and steering the agent."
      ],
      "primarySource": "Industry standards and best practices for Human-in-the-Loop: Guiding and Steering the Agent.",
      "quiz": [
        {
          "q": "Who is ultimately accountable for bugs or security vulnerabilities introduced by an AI coding agent?",
          "a": [
            "The human engineer who reviewed and merged the code into the repository",
            "The AI company that trained the model",
            "The operating system vendor",
            "No one, because software bugs are inevitable"
          ],
          "c": 0,
          "why": "Professional engineering accountability always rests with the human who approves and merges changes."
        },
        {
          "q": "What should a developer do when an agent generates a 500-line diff that seems to work but is hard to understand?",
          "a": [
            "Reject or ask the agent to simplify and explain the change; never merge code you cannot explain",
            "Merge it immediately since tests passed",
            "Delete the git repository",
            "Push directly to production"
          ],
          "c": 0,
          "why": "Unchecked complex code accumulates cognitive debt and hidden vulnerabilities."
        },
        {
          "q": "Why is specifying 'Non-Goals' (what the agent should NOT do) so effective in steering prompts?",
          "a": [
            "It prevents the agent from making speculative architectural changes or touching unrelated files",
            "It makes the model generate code in C",
            "It speeds up network download speeds",
            "It disables the linter"
          ],
          "c": 0,
          "why": "Negative constraints keep agents focused on tight task boundaries without scope creep."
        },
        {
          "q": "How does breaking a massive task into small verified milestones improve agent success rates?",
          "a": [
            "It keeps context clean, limits the blast radius of errors, and allows the human to steer direction early",
            "It makes the task take 10x longer",
            "It increases cloud hosting costs",
            "It deletes intermediate files"
          ],
          "c": 0,
          "why": "Milestone-based execution prevents compound error cascades and preserves context quality."
        }
      ],
      "next": {
        "title": "Next Course: Prompting vs Specification",
        "desc": "Learn how to write unambiguous specifications that agents can reliably verify."
      }
    }
  ]
};

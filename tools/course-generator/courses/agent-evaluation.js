"use strict";

module.exports = {
  "id": "agent-evaluation",
  "title": "Agent Evaluation",
  "num": 85,
  "emoji": "🧭",
  "desc": "Scoring multi-step behaviour: task success, tool correctness, cost per task and failure recovery.",
  "topics": [
    "Agent Evaluation",
    "End-State Principle",
    "Pass@1",
    "Tool Accuracy",
    "Trajectory Analysis",
    "Fault Injection",
    "Hermetic Sandboxes",
    "SWE-bench",
    "Internal Harness"
  ],
  "mission": "# Mission — Agent Evaluation\n\nMaster the science of evaluating multi-step autonomous AI agents. Adopt the End-State Principle, measure task success with Pass@1 and Pass@K, audit tool selection accuracy and schema validity, analyze trajectory step efficiency and redundant actions, benchmark failure recovery using fault injection, build hermetic Docker sandboxes with deterministic replay, analyze SWE-bench architecture, and construct custom agent evaluation harnesses for proprietary codebases.",
  "notes": "# Notes — Agent Evaluation\n\nDo not evaluate agents on intermediate words. Evaluate agents on whether the environment's test suite passes with exit code 0. Measure Pass@1 and cost-per-resolved-task.",
  "resources": "# Resources — Agent Evaluation\n\n- Carlos E. Jimenez et al., *SWE-bench: Can Language Models Resolve Real-World GitHub Issues?*\n- Mark Chen et al., *Evaluating Large Language Models Trained on Code (HumanEval / Pass@K)*\n- Shunyu Yao et al., *SWE-agent: Agent-Computer Interfaces for Software Engineering*",
  "glossaryGroups": [
    {
      "id": "agency-eval",
      "title": "Agency & Trajectories",
      "terms": [
        {
          "term": "Agent Evaluation",
          "def": "The discipline of quantitatively measuring multi-step autonomous behavior, tool correctness, and end-state task success.",
          "lesson": 1,
          "tags": [
            "agents",
            "evals"
          ]
        },
        {
          "term": "End-State Principle",
          "def": "Evaluating agents based on the final physical and digital state of the environment rather than intermediate thoughts.",
          "lesson": 1,
          "tags": [
            "methodology",
            "evals"
          ]
        },
        {
          "term": "Trajectory Analysis",
          "def": "Evaluating the sequence of tool calls and actions an agent takes to measure efficiency, redundancy, and cost.",
          "lesson": 4,
          "tags": [
            "agents",
            "trajectories"
          ]
        }
      ]
    },
    {
      "id": "metrics-pass",
      "title": "Pass Metrics & Tools",
      "terms": [
        {
          "term": "Pass@1",
          "def": "The percentage of benchmark problems an agent successfully resolves on its first single autonomous attempt.",
          "lesson": 2,
          "tags": [
            "metrics",
            "reliability"
          ]
        },
        {
          "term": "Pass@K",
          "def": "A metric measuring whether at least one correct solution is found across K independent candidate attempts.",
          "lesson": 2,
          "tags": [
            "metrics",
            "sampling"
          ]
        },
        {
          "term": "Tool Selection Accuracy",
          "def": "The proportion of agent turns where the model selects the optimal tool for the active problem state.",
          "lesson": 3,
          "tags": [
            "tools",
            "metrics"
          ]
        }
      ]
    },
    {
      "id": "resilience-bench",
      "title": "Resilience & SWE-bench",
      "terms": [
        {
          "term": "Fault Injection",
          "def": "Deliberately introducing broken syntax, timeouts, or permission errors to test agent self-healing resilience.",
          "lesson": 5,
          "tags": [
            "testing",
            "resilience"
          ]
        },
        {
          "term": "SWE-bench",
          "def": "The gold-standard benchmark testing agents on resolving 2,294 real-world GitHub issues from open-source Python repos.",
          "lesson": 7,
          "tags": [
            "benchmarks",
            "swe-bench"
          ]
        },
        {
          "term": "Hermetic Sandbox",
          "def": "An isolated, disposable container environment providing deterministic starting state for reproducible testing.",
          "lesson": 6,
          "tags": [
            "docker",
            "sandboxes"
          ]
        }
      ]
    },
    {
      "id": "internal-harness",
      "title": "Internal Harness & Operations",
      "terms": [
        {
          "term": "Internal Task Card",
          "def": "A structured benchmark specification drawn from real company tickets containing starting commits and verification commands.",
          "lesson": 8,
          "tags": [
            "internal",
            "benchmarks"
          ]
        },
        {
          "term": "Cost-to-Solution",
          "def": "The total financial dollar cost of API tokens consumed by an agent across an entire multi-turn trajectory.",
          "lesson": 4,
          "tags": [
            "economics",
            "metrics"
          ]
        },
        {
          "term": "Session Replay",
          "def": "Recording and stepping through an agent's historical thoughts and tool calls in a visual debugger.",
          "lesson": 6,
          "tags": [
            "debugging",
            "tooling"
          ]
        }
      ]
    }
  ],
  "cheatsheetSections": [
    {
      "title": "Pass@1 Benchmark Calculation",
      "label": "First-attempt success rate",
      "code": "resolved = sum(1 for task in results if task.test_exit_code == 0)\npass_at_1 = resolved / len(results)\nprint(f\"Agent Pass@1: {pass_at_1 * 100:.1f}%\")",
      "lessonN": 2,
      "lessonSlug": "task-success-and-pass-at-k",
      "lessonTitle": "Task Success and Pass@K Metrics"
    },
    {
      "title": "Internal Task Card Schema (YAML)",
      "label": "Custom repository benchmark task",
      "code": "task_id: \"ISSUE-104-billing-race-condition\"\nprompt: \"Fix race condition in withdraw_funds() using atomic row locks\"\nbase_commit: \"f8491c2\"\nverification:\n  command: \"pytest tests/test_concurrency.py\"\n  expected_exit_code: 0",
      "lessonN": 8,
      "lessonSlug": "building-custom-agent-eval-harness",
      "lessonTitle": "Building an Agent Evaluation Harness for Your Repository"
    },
    {
      "title": "Hermetic Docker Test Execution",
      "label": "Disposable sandbox runner",
      "code": "# Run agent task inside clean disposable container:\ndocker run --rm -v $(pwd)/repo:/workspace \\\n    -e TASK_ID=ISSUE-104 \\\n    agent-runner:latest python -m agent.run_task",
      "lessonN": 6,
      "lessonSlug": "mock-environments-sandboxes-replay",
      "lessonTitle": "Mock Environments, Sandboxes, and Deterministic Replay"
    },
    {
      "title": "Trajectory Redundancy Check",
      "label": "Detecting wasted tool calls",
      "code": "# Detect identical consecutive tool calls:\nredundant = sum(1 for i in range(1, len(trajectory))\n    if trajectory[i].tool == trajectory[i-1].tool and trajectory[i].args == trajectory[i-1].args)\nprint(f\"Redundant Action Rate: {redundant / len(trajectory) * 100:.1f}%\")",
      "lessonN": 4,
      "lessonSlug": "step-efficiency-trajectory-analysis",
      "lessonTitle": "Step Efficiency and Trajectory Analysis"
    }
  ],
  "lessons": [
    {
      "n": 1,
      "id": "evaluating-multi-step-agency",
      "title": "The Challenge of Evaluating Multi-Step Agency",
      "topic": "Agency Evaluation",
      "anim": "Generic",
      "lede": "Why evaluating autonomous agents is fundamentally harder than evaluating single-turn chatbots: state, non-determinism, and multi-turn trajectories.",
      "winShort": "You understand the challenges of evaluating multi-step agency and the end-state principle.",
      "missionLink": "Mastering the challenge of evaluating multi-step agency across modern software engineering",
      "sec1": {
        "title": "Core principles of The Challenge of Evaluating Multi-Step Agency",
        "content": "<p>Evaluating a chatbot is relatively simple: you feed an input, get an output, and compare it to a reference string. But an autonomous agent is not a chatbot; it is a <strong>stateful, multi-step problem solver</strong>.</p>",
        "keyIdea": "Why evaluating autonomous agents is fundamentally harder than evaluating single-turn chatbots: state, non-determinism, and multi-turn trajectories."
      },
      "predict": {
        "q": "What makes evaluating an autonomous coding agent fundamentally harder than evaluating a simple question-answering model?",
        "a": [
          "Agents execute multi-step trajectories across files and tools where intermediate paths vary wildly, requiring evaluation of real-world end-state correctness",
          "Agents refuse to be evaluated",
          "Agents run on paper",
          "Evaluation of code is illegal"
        ],
        "c": 0,
        "why": "Agents explore diverse multi-turn tool trajectories; evaluation must assess end-state environment correctness rather than text matching.",
        "prompt": "What makes evaluating an autonomous coding agent fundamentally harder than evaluating a simple question-answering model?",
        "options": [
          "Agents execute multi-step trajectories across files and tools where intermediate paths vary wildly, requiring evaluation of real-world end-state correctness",
          "Agents refuse to be evaluated",
          "Agents run on paper",
          "Evaluation of code is illegal"
        ],
        "answer": 0,
        "explanation": "Agents explore diverse multi-turn tool trajectories; evaluation must assess end-state environment correctness rather than text matching."
      },
      "sec2": {
        "title": "Single-Turn vs Multi-Step Evaluation",
        "content": "<p>Why evaluating autonomous agents is an advanced engineering challenge:</p>"
      },
      "diagram": {
        "title": "Single-Turn vs Multi-Step Evaluation",
        "caption": "Text matching vs environment verification",
        "steps": [
          {
            "title": "Single-Turn Chatbot Eval",
            "lines": [
              "Input -> Output text",
              "Compared against reference string",
              "Static, predictable, zero environment"
            ]
          },
          {
            "title": "Multi-Step Agent Eval",
            "lines": [
              "Input goal -> Multi-tool trajectory",
              "Mutates files, branches, & databases",
              "Evaluated via final test suite pass/fail"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Single-Turn Chatbot Eval",
            "lines": [
              "Input -> Output text",
              "Compared against reference string",
              "Static, predictable, zero environment"
            ]
          },
          {
            "title": "Multi-Step Agent Eval",
            "lines": [
              "Input goal -> Multi-tool trajectory",
              "Mutates files, branches, & databases",
              "Evaluated via final test suite pass/fail"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Multiple Valid Trajectories",
        "content": "<ul><li><strong>1. Divergent Valid Trajectories:</strong> To fix a bug, Agent A might run `grep`, read line 40, and edit the file. Agent B might run `pytest` first, inspect the stack trace, and edit the file. Both paths are completely valid! You cannot evaluate an agent by grading its intermediate thoughts.</li><li><strong>2. Environmental State Mutation:</strong> Agents change the world: they edit files, create branches, and write database rows. Evaluation requires inspecting the <strong>final environment state</strong>.</li><li><strong>3. Compounding Failure Probability:</strong> A 10-step agent that makes a small mistake at step 4 can derail its entire trajectory.</li><li><strong>4. Non-Deterministic Loops:</strong> An agent might take 4 turns today and 7 turns tomorrow to solve the identical issue.</li></ul><pre><code># The Autonomous Agent Evaluation Paradigm:\n# Do NOT evaluate: \"Did the agent's chat explanation match my reference?\"\n# DO evaluate: \"Did the agent's code edits cause `pytest` to pass with exit code 0\n#               without introducing new regressions or breaking linters?\"</code></pre><div class=\"callout\"><p><strong>The End-State Principle:</strong> Evaluate agents based on the final physical and digital state of the environment, not on the intermediate words they uttered.</p></div>"
      },
      "trace": {
        "title": "Multiple Valid Trajectories",
        "caption": "Different paths to the same goal",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "The Challenge of Evaluating Multi-Step Agency"
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
              "step": "Agent Path A (Grep-First)"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Agent Path B (Test-First)"
            }
          }
        ],
        "code": [
          "# Tracing The Challenge of Evaluating Multi-Step Agency",
          "def execute_flow():",
          "    # Why evaluating autonomous agents is fundamentally ...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the agent evaluation sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Evaluating autonomous agents requires assessing final environment {1} correctness and test pass rates rather than grading intermediate text {2}."
        ],
        "blanks": [
          {
            "a": [
              "state"
            ],
            "why": "Condition of files, databases, and code"
          },
          {
            "a": [
              "trajectories"
            ],
            "why": "The sequence of thoughts and tool calls"
          }
        ]
      },
      "win": "You understand the challenges of evaluating multi-step agency and the end-state principle.",
      "nextTasks": [
        "Audit your project code and identify where the challenge of evaluating multi-step agency applies.",
        "Author a unit test or verification script exercising the challenge of evaluating multi-step agency.",
        "Document team architectural conventions regarding the challenge of evaluating multi-step agency."
      ],
      "primarySource": "Industry standards and best practices for The Challenge of Evaluating Multi-Step Agency.",
      "quiz": [
        {
          "q": "What is the primary indicator of success when evaluating an autonomous software engineering agent?",
          "a": [
            "The automated test suite passes with exit code 0 on the modified repository without regressing existing tests",
            "The agent outputs a friendly apology",
            "The agent finishes in 1 second",
            "The agent uses 100 tools"
          ],
          "c": 0,
          "why": "Passing the repository's test suite provides objective proof of task resolution."
        },
        {
          "q": "Why is grading an agent's intermediate tool calls against a strict golden sequence usually an anti-pattern?",
          "a": [
            "Different valid exploration strategies (e.g. grep-first vs test-first) arrive at correct solutions through different tool sequences",
            "Tool calls are encrypted",
            "Computers cannot compare tools",
            "It is illegal in Python"
          ],
          "c": 0,
          "why": "Over-constraining intermediate paths penalizes creative and equally valid problem-solving strategies."
        },
        {
          "q": "What is 'Environment Teardown' in agent evaluation harnesses?",
          "a": [
            "Resetting the sandbox repository, files, and database back to a pristine baseline after each agent test run",
            "Breaking physical computer monitors",
            "Formatting the hard drive",
            "Deleting the user account"
          ],
          "c": 0,
          "why": "Teardown ensures each test case executes in an isolated, reproducible environment without state pollution."
        },
        {
          "q": "How does multi-step execution compound failure rates in autonomous agents?",
          "a": [
            "A minor error or false assumption in early turns compounds across subsequent tool calls, derailing the entire task",
            "It doubles the speed of the CPU",
            "It deletes the model weights",
            "It converts code to HTML"
          ],
          "c": 0,
          "why": "Early errors mislead subsequent planning, causing compounding failure cascades."
        }
      ],
      "next": {
        "title": "Task Success and Pass@K Metrics",
        "desc": "Measure agent problem-solving power with Pass@1 and Pass@K."
      }
    },
    {
      "n": 2,
      "id": "task-success-and-pass-at-k",
      "title": "Task Success and Pass@K Metrics",
      "topic": "Pass@K",
      "anim": "Generic",
      "lede": "Quantifying agent success: Task Success Rate, Pass@1 (single-shot reliability), Pass@K (sampling diversity), and cost trade-offs.",
      "winShort": "You know how to measure, interpret, and optimize Task Success Rate and Pass@K metrics.",
      "missionLink": "Mastering task success and pass@k metrics across modern software engineering",
      "sec1": {
        "title": "Core principles of Task Success and Pass@K Metrics",
        "content": "<p>In academic coding benchmarks, researchers often report <strong>Pass@K</strong> (e.g. Pass@5 or Pass@10): generate 10 independent candidate solutions, and if <em>any one</em> passes tests, count it as a success! While Pass@10 measures potential capability, in production software engineering, <strong>Pass@1 is what matters</strong>.</p>",
        "keyIdea": "Quantifying agent success: Task Success Rate, Pass@1 (single-shot reliability), Pass@K (sampling diversity), and cost trade-offs."
      },
      "predict": {
        "q": "What does the 'Pass@1' metric measure when evaluating an autonomous coding agent?",
        "a": [
          "The percentage of benchmark coding tasks the agent resolves successfully on its first single attempt",
          "The speed of the network cable",
          "The percentage of passing students",
          "The number of lines of code written"
        ],
        "c": 0,
        "why": "Pass@1 measures first-try success rates, representing real-world autonomous reliability.",
        "prompt": "What does the 'Pass@1' metric measure when evaluating an autonomous coding agent?",
        "options": [
          "The percentage of benchmark coding tasks the agent resolves successfully on its first single attempt",
          "The speed of the network cable",
          "The percentage of passing students",
          "The number of lines of code written"
        ],
        "answer": 0,
        "explanation": "Pass@1 measures first-try success rates, representing real-world autonomous reliability."
      },
      "sec2": {
        "title": "Pass@1 vs Pass@K",
        "content": "<p>Understanding Task Success Metrics:</p>"
      },
      "diagram": {
        "title": "Pass@1 vs Pass@K",
        "caption": "First-try reliability vs multi-sample potential",
        "steps": [
          {
            "title": "Pass@1 (Production Metric)",
            "lines": [
              "Single attempt execution",
              "Measures true first-try reliability",
              "Reflects real developer experience"
            ]
          },
          {
            "title": "Pass@K (Academic Metric)",
            "lines": [
              "Generate K parallel attempts",
              "Success if ANY 1 passes tests",
              "Evaluates theoretical capability ceiling"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Pass@1 (Production Metric)",
            "lines": [
              "Single attempt execution",
              "Measures true first-try reliability",
              "Reflects real developer experience"
            ]
          },
          {
            "title": "Pass@K (Academic Metric)",
            "lines": [
              "Generate K parallel attempts",
              "Success if ANY 1 passes tests",
              "Evaluates theoretical capability ceiling"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Cost-Adjusted Success Frontier",
        "content": "<ul><li><strong>Pass@1 (First-Attempt Reliability):</strong> The agent is given the task once. Does it successfully diagnose, edit, and verify the fix on attempt #1? Pass@1 reflects real-world developer experience: nobody wants an agent that fails 9 times and succeeds once!</li><li><strong>Pass@K (Sampling Ceiling):</strong> Generating $K$ parallel attempts. Pass@K evaluates the maximum theoretical capability of the model under majority voting or best-of-N selection.</li><li><strong>Cost-Adjusted Success:</strong> $\\text{Success per Dollar} = \\frac{\\text{Successful Tasks}}{\\text{Total Token Cost}}$. A model with 40% Pass@1 at $0.05/task often beats a model with 45% Pass@1 that costs $1.50/task!</li></ul><pre><code># Computing Pass@K Mathematically (Chen et al., 2021):\n# For N generated samples with c correct solutions:\n# Pass@K = 1 - [comb(N - c, k) / comb(N, k)]\n#\n# In Production Agent Engineering:\n# Measure Pass@1 across 100 benchmark issues.\n# Target: Pass@1 > 65% on internal repo tickets!</code></pre><div class=\"callout\"><p><strong>The Production Metric:</strong> Focus your engineering on <strong>Pass@1</strong>. Improving Pass@1 from 35% to 65% transforms an agent from an annoying toy into an indispensable engineering teammate.</p></div>"
      },
      "trace": {
        "title": "Cost-Adjusted Success Frontier",
        "caption": "Balancing accuracy with financial expense",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Task Success and Pass@K Metrics"
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
              "step": "Model A (Frontier Heavy)"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Model B (Efficient Specialist)"
            }
          }
        ],
        "code": [
          "# Tracing Task Success and Pass@K Metrics",
          "def execute_flow():",
          "    # Quantifying agent success: Task Success Rate, Pass...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the Pass@K sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "While Pass@K measures whether any candidate in K samples succeeds, {1} measures real-world first-attempt {2} on production tasks."
        ],
        "blanks": [
          {
            "a": [
              "Pass@1"
            ],
            "why": "Single-attempt success rate"
          },
          {
            "a": [
              "reliability"
            ],
            "why": "Dependable first-try performance"
          }
        ]
      },
      "win": "You know how to measure, interpret, and optimize Task Success Rate and Pass@K metrics.",
      "nextTasks": [
        "Audit your project code and identify where task success and pass@k metrics applies.",
        "Author a unit test or verification script exercising task success and pass@k metrics.",
        "Document team architectural conventions regarding task success and pass@k metrics."
      ],
      "primarySource": "Industry standards and best practices for Task Success and Pass@K Metrics.",
      "quiz": [
        {
          "q": "Why is Pass@1 considered the most important metric for developer productivity tools?",
          "a": [
            "Developers expect the agent to resolve the issue on the first run; waiting for 10 failed runs wastes developer time and patience",
            "Pass@1 is required by law",
            "Pass@1 uses no API tokens",
            "Pass@1 compiles code to C"
          ],
          "c": 0,
          "why": "First-try reliability defines real-world user trust and engineering velocity."
        },
        {
          "q": "What does a Pass@1 score of 70% on an internal repo benchmark mean?",
          "a": [
            "Out of 100 representative engineering tickets, the agent autonomously resolved and passed all tests on 70 of them on the first attempt",
            "The agent was 70% fast",
            "The agent wrote 70 lines of code",
            "The agent used 70% of RAM"
          ],
          "c": 0,
          "why": "Pass@1 measures the exact proportion of tasks resolved on the first autonomous attempt."
        },
        {
          "q": "Why do academic papers report Pass@100 instead of Pass@1?",
          "a": [
            "To demonstrate the model's upper-bound creative potential when paired with massive computational sampling",
            "Because Pass@1 is illegal in research",
            "Because 100 is a round number",
            "Because Pass@100 uses fewer tokens"
          ],
          "c": 0,
          "why": "Pass@K measures whether the correct solution exists within the model's sampling distribution."
        },
        {
          "q": "How does 'Best-of-N' reranking improve an agent's effective Pass@1 score in production?",
          "a": [
            "The system generates 3 candidate trajectories and uses an automated test suite or judge to select the passing candidate to deliver",
            "It deletes failing runs",
            "It makes the model run faster",
            "It reduces GPU temperature"
          ],
          "c": 0,
          "why": "Automated verification filters candidate runs, delivering only the passing trajectory to the user."
        }
      ],
      "next": {
        "title": "Tool Calling Accuracy and Argument Correctness",
        "desc": "Evaluate whether agents select the right tools and generate valid arguments."
      }
    },
    {
      "n": 3,
      "id": "tool-calling-accuracy-argument-correctness",
      "title": "Tool Calling Accuracy and Argument Correctness",
      "topic": "Tool Evaluation",
      "anim": "Generic",
      "lede": "Evaluating tool invocation: Tool Selection Accuracy, Schema Validity Rate, and Argument Value Correctness.",
      "winShort": "You know how to evaluate tool selection, schema validity, and argument correctness.",
      "missionLink": "Mastering tool calling accuracy and argument correctness across modern software engineering",
      "sec1": {
        "title": "Core principles of Tool Calling Accuracy and Argument Correctness",
        "content": "<p>Before an agent can solve a multi-step task, it must master the mechanics of its tools. If an agent tries to search files by calling <code>execute_sql_query()</code>, or passes a string to an integer parameter, the trajectory fails immediately.</p>",
        "keyIdea": "Evaluating tool invocation: Tool Selection Accuracy, Schema Validity Rate, and Argument Value Correctness."
      },
      "predict": {
        "q": "What three distinct dimensions should be measured when evaluating an agent's tool-calling capability?",
        "a": [
          "Tool Selection Accuracy (right tool?), Schema Validity Rate (valid JSON?), and Argument Correctness (right parameters?)",
          "Speed, Color, and Weight",
          "RAM, Disk, and CPU",
          "There is only one dimension"
        ],
        "c": 0,
        "why": "Tool evaluation assesses tool selection, syntactic schema compliance, and semantic argument accuracy.",
        "prompt": "What three distinct dimensions should be measured when evaluating an agent's tool-calling capability?",
        "options": [
          "Tool Selection Accuracy (right tool?), Schema Validity Rate (valid JSON?), and Argument Correctness (right parameters?)",
          "Speed, Color, and Weight",
          "RAM, Disk, and CPU",
          "There is only one dimension"
        ],
        "answer": 0,
        "explanation": "Tool evaluation assesses tool selection, syntactic schema compliance, and semantic argument accuracy."
      },
      "sec2": {
        "title": "The Three Tool Evaluation Dimensions",
        "content": "<p>Tool evaluation measures three sequential quality gates:</p>"
      },
      "diagram": {
        "title": "The Three Tool Evaluation Dimensions",
        "caption": "Selection, Schema Syntax, and Argument Precision",
        "steps": [
          {
            "title": "1. Tool Selection (Intent)",
            "lines": [
              "Did agent pick the right function?",
              "e.g. grep_search vs list_dir"
            ]
          },
          {
            "title": "2. Schema Validity (Syntax)",
            "lines": [
              "Did arguments match JSON Schema?",
              "Must be 100% error-free"
            ]
          },
          {
            "title": "3. Argument Precision (Values)",
            "lines": [
              "Did file path exist?",
              "Were regex patterns valid?"
            ]
          }
        ],
        "boxes": [
          {
            "title": "1. Tool Selection (Intent)",
            "lines": [
              "Did agent pick the right function?",
              "e.g. grep_search vs list_dir"
            ]
          },
          {
            "title": "2. Schema Validity (Syntax)",
            "lines": [
              "Did arguments match JSON Schema?",
              "Must be 100% error-free"
            ]
          },
          {
            "title": "3. Argument Precision (Values)",
            "lines": [
              "Did file path exist?",
              "Were regex patterns valid?"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Evaluating Tool Call Failure Modes",
        "content": "<ul><li><strong>1. Tool Selection Accuracy:</strong> Given the active state and goal, did the agent choose the optimal tool? (e.g. choosing `grep_search` to find a symbol rather than doing a slow full file read).</li><li><strong>2. Schema Validity Rate:</strong> Did the generated arguments parse cleanly against the tool's JSON Schema? (Zero schema validation errors allowed!).</li><li><strong>3. Argument Value Correctness:</strong> Were the parameter values accurate and effective? (e.g. Did `file_path` point to an actual existing file? Did `regex` compile without errors?).</li></ul><pre><code># The Tool Evaluation Metric Suite:\n# Tool Selection Accuracy: = (Correct Tool Invocations) / (Total Tool Calls) [Target: > 98%]\n# Schema Validity Rate:    = (Valid JSON Schema Calls) / (Total Tool Calls) [Target: 100%]\n# Argument Precision:      = (Valid File Paths & Values) / (Total Arguments) [Target: > 95%]</code></pre><div class=\"callout\"><p><strong>Diagnostic Power:</strong> If your agent is failing tasks, check Schema Validity first. If schema validity is below 100%, the agent is tripping over syntax before it even begins thinking.</p></div>"
      },
      "trace": {
        "title": "Evaluating Tool Call Failure Modes",
        "caption": "Pinpointing tool breakdowns",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Tool Calling Accuracy and Argument Correctness"
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
              "step": "Wrong Tool Selected"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Schema Type Error"
            }
          }
        ],
        "code": [
          "# Tracing Tool Calling Accuracy and Argument Correctness",
          "def execute_flow():",
          "    # Evaluating tool invocation: Tool Selection Accurac...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the tool evaluation sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Tool evaluation measures whether the agent picked the right tool, whether arguments satisfied the {1} schema, and whether parameter {2} were accurate."
        ],
        "blanks": [
          {
            "a": [
              "JSON"
            ],
            "why": "JavaScript Object Notation schema contract"
          },
          {
            "a": [
              "values"
            ],
            "why": "Concrete argument parameters like file paths"
          }
        ]
      },
      "win": "You know how to evaluate tool selection, schema validity, and argument correctness.",
      "nextTasks": [
        "Audit your project code and identify where tool calling accuracy and argument correctness applies.",
        "Author a unit test or verification script exercising tool calling accuracy and argument correctness.",
        "Document team architectural conventions regarding tool calling accuracy and argument correctness."
      ],
      "primarySource": "Industry standards and best practices for Tool Calling Accuracy and Argument Correctness.",
      "quiz": [
        {
          "q": "What causes an agent to have low Tool Selection Accuracy?",
          "a": [
            "Overlapping, ambiguous, or poorly written tool descriptions in the tool registry that confuse the model",
            "The computer hard drive is full",
            "The tool is written in Python",
            "The internet was disconnected"
          ],
          "c": 0,
          "why": "Ambiguous tool descriptions cause models to confuse similar tools (e.g. read_file vs grep)."
        },
        {
          "q": "What should the target Schema Validity Rate be for a production-ready agent?",
          "a": [
            "100% (zero schema validation errors permitted during execution)",
            "50%",
            "75%",
            "Schema validity does not matter"
          ],
          "c": 0,
          "why": "Schema errors represent avoidable syntactic bugs that disrupt execution loops."
        },
        {
          "q": "How does Constrained Decoding help achieve 100% Schema Validity in tool calls?",
          "a": [
            "It dynamically masks out all tokens that would violate the tool's JSON Schema during generation",
            "It makes the tool run for free",
            "It deletes invalid tools",
            "It turns off the CPU"
          ],
          "c": 0,
          "why": "Constrained decoding physically prevents the model from sampling invalid schema tokens."
        },
        {
          "q": "What is an 'Argument Hallucination' in tool calling?",
          "a": [
            "When the model passes imaginary file paths, nonexistent database IDs, or fabricated URLs as arguments",
            "A tool with no arguments",
            "A tool that takes too long",
            "A compiler error"
          ],
          "c": 0,
          "why": "Argument hallucination occurs when the model invents plausible but fictitious parameter values."
        }
      ],
      "next": {
        "title": "Step Efficiency and Trajectory Analysis",
        "desc": "Measure trajectory length, redundant steps, and wasted tool actions."
      }
    },
    {
      "n": 4,
      "id": "step-efficiency-trajectory-analysis",
      "title": "Step Efficiency and Trajectory Analysis",
      "topic": "Trajectory Analysis",
      "anim": "Generic",
      "lede": "Analyzing agent efficiency: Step Count, Redundant Action Rate, trajectory diff analysis, and the Cost-to-Solution curve.",
      "winShort": "You know how to analyze agent trajectories, measure step efficiency, and eliminate redundant actions.",
      "missionLink": "Mastering step efficiency and trajectory analysis across modern software engineering",
      "sec1": {
        "title": "Core principles of Step Efficiency and Trajectory Analysis",
        "content": "<p>Two different agents can both successfully solve a bug. Agent 1 inspects the traceback, edits the file, and runs the test (3 steps). Agent 2 runs 8 irrelevant file searches, reads 4 unrelated files, makes 3 syntax errors, reverts them, and finally fixes the bug (18 steps).</p>",
        "keyIdea": "Analyzing agent efficiency: Step Count, Redundant Action Rate, trajectory diff analysis, and the Cost-to-Solution curve."
      },
      "predict": {
        "q": "Why is 'Step Efficiency' an important evaluation metric alongside raw task success?",
        "a": [
          "An agent that solves a task in 4 focused steps is vastly cheaper, faster, and less prone to side-effect bugs than one taking 25 meandering steps",
          "More steps consume less electricity",
          "Step count has no effect on cost",
          "Long trajectories run faster"
        ],
        "c": 0,
        "why": "Fewer steps mean lower token consumption, faster turnaround, and minimal risk of unintended side-effect bugs.",
        "prompt": "Why is 'Step Efficiency' an important evaluation metric alongside raw task success?",
        "options": [
          "An agent that solves a task in 4 focused steps is vastly cheaper, faster, and less prone to side-effect bugs than one taking 25 meandering steps",
          "More steps consume less electricity",
          "Step count has no effect on cost",
          "Long trajectories run faster"
        ],
        "answer": 0,
        "explanation": "Fewer steps mean lower token consumption, faster turnaround, and minimal risk of unintended side-effect bugs."
      },
      "sec2": {
        "title": "Efficient vs Meandering Trajectory",
        "content": "<p>Both agents get a checkmark for task success, but Agent 2 cost <strong>6x more money</strong>, took <strong>5x longer</strong>, and was one turn away from hallucinating an unrelated bug. <strong>Trajectory Analysis</strong> evaluates the efficiency and elegance of the path taken.</p>"
      },
      "diagram": {
        "title": "Efficient vs Meandering Trajectory",
        "caption": "Direct execution vs wasteful exploration",
        "steps": [
          {
            "title": "Agent A: Direct Trajectory (4 Steps)",
            "lines": [
              "grep_search -> read_file -> edit -> pytest",
              "Time: 12s, Cost: $0.04, Zero wasted actions"
            ]
          },
          {
            "title": "Agent B: Meandering Path (18 Steps)",
            "lines": [
              "list_dir -> read_wrong_file -> failed_edit -> retry...",
              "Time: 75s, Cost: $0.38, High cognitive drag"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Agent A: Direct Trajectory (4 Steps)",
            "lines": [
              "grep_search -> read_file -> edit -> pytest",
              "Time: 12s, Cost: $0.04, Zero wasted actions"
            ]
          },
          {
            "title": "Agent B: Meandering Path (18 Steps)",
            "lines": [
              "list_dir -> read_wrong_file -> failed_edit -> retry...",
              "Time: 75s, Cost: $0.38, High cognitive drag"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Redundant Action Detection",
        "content": "<p>Key Trajectory Metrics:</p><ul><li><strong>1. Step Count to Solution ($S$):</strong> Total number of tool turns executed before task completion.</li><li><strong>2. Redundant Action Rate:</strong> The percentage of tool calls that repeated previous actions, read the same file twice without edits, or failed with syntax errors.</li><li><strong>3. Search Efficiency:</strong> Did the agent locate the relevant file in 1-2 targeted searches, or did it list 15 directories blindly?</li><li><strong>4. Cost-to-Solution ($C$):</strong> Total dollar cost of tokens consumed across the full trajectory.</li></ul><pre><code># Trajectory Efficiency Scorecard:\n# Agent A: Steps: 4  | Cost: $0.06 | Redundant Actions: 0%  (HIGH EFFICIENCY)\n# Agent B: Steps: 19 | Cost: $0.42 | Redundant Actions: 42% (LOW EFFICIENCY - Thrashing!)</code></pre><div class=\"callout\"><p><strong>The Trajectory Law:</strong> A shorter trajectory has a smaller blast radius. Every extra tool call is an opportunity for an error to derail the task.</p></div>"
      },
      "trace": {
        "title": "Redundant Action Detection",
        "caption": "Flagging wasted tool calls",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Step Efficiency and Trajectory Analysis"
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
              "step": "Duplicate File Reads"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Circular Edits"
            }
          }
        ],
        "code": [
          "# Tracing Step Efficiency and Trajectory Analysis",
          "def execute_flow():",
          "    # Analyzing agent efficiency: Step Count, Redundant ...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the trajectory analysis sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Trajectory analysis evaluates agent efficiency by measuring step count, cost-to-solution, and the percentage of {1} or wasteful tool {2}."
        ],
        "blanks": [
          {
            "a": [
              "redundant"
            ],
            "why": "Unnecessary repeated actions"
          },
          {
            "a": [
              "actions"
            ],
            "why": "Tool invocations"
          }
        ]
      },
      "win": "You know how to analyze agent trajectories, measure step efficiency, and eliminate redundant actions.",
      "nextTasks": [
        "Audit your project code and identify where step efficiency and trajectory analysis applies.",
        "Author a unit test or verification script exercising step efficiency and trajectory analysis.",
        "Document team architectural conventions regarding step efficiency and trajectory analysis."
      ],
      "primarySource": "Industry standards and best practices for Step Efficiency and Trajectory Analysis.",
      "quiz": [
        {
          "q": "What is a 'Redundant Tool Action' in an agent trajectory?",
          "a": [
            "Reading the same unchanged file multiple times or repeating an identical search query that provides no new information",
            "A tool that runs in parallel",
            "A tool with a backup server",
            "A tool written in C"
          ],
          "c": 0,
          "why": "Repeated reads of unchanged state burn tokens without advancing task progress."
        },
        {
          "q": "Why does an agent with high step count have a higher probability of catastrophic failure?",
          "a": [
            "Each extra step adds noise to the context window and provides another statistical opportunity for a hallucinated or destructive edit",
            "The computer processor wears out",
            "The internet gets slower",
            "Tokens expire after 10 steps"
          ],
          "c": 0,
          "why": "Longer trajectories increase the compounding probability of fatal mistakes."
        },
        {
          "q": "How can you steer an agent toward shorter, more efficient trajectories?",
          "a": [
            "Provide concise repository maps, clear golden reference files, and explicit instructions to formulate targeted searches",
            "Limit the internet speed",
            "Write prompts in uppercase",
            "Delete all tools except one"
          ],
          "c": 0,
          "why": "Repository maps and clear guidance eliminate blind, exploratory wandering."
        },
        {
          "q": "What metric balances task success with operational cost across an evaluation suite?",
          "a": [
            "Cost-per-Resolved-Task: Total token expenditure divided by the number of successfully resolved tasks",
            "Lines of code per second",
            "Word count of the prompt",
            "Monitor refresh rate"
          ],
          "c": 0,
          "why": "Cost-per-resolved-task measures true operational financial efficiency."
        }
      ],
      "next": {
        "title": "Evaluating Failure Recovery and Error Resilience",
        "desc": "Assess how agents respond when tools fail and errors occur."
      }
    },
    {
      "n": 5,
      "id": "evaluating-failure-recovery-resilience",
      "title": "Evaluating Failure Recovery and Error Resilience",
      "topic": "Failure Resilience",
      "anim": "Generic",
      "lede": "Resilience benchmarking: testing how agents respond to tool crashes, test failures, permission denials, and unexpected obstacles.",
      "winShort": "You know how to benchmark agent failure recovery and cognitive resilience using fault injection.",
      "missionLink": "Mastering evaluating failure recovery and error resilience across modern software engineering",
      "sec1": {
        "title": "Core principles of Evaluating Failure Recovery and Error Resilience",
        "content": "<p>Any agent can succeed when the path is smooth. What separates a toy from an enterprise-grade agent is <strong>Resilience Under Failure</strong>. When a compiler fails, a database query times out, or a test fails unexpectedly, does the agent panic and thrash, or does it diagnose and recover?</p>",
        "keyIdea": "Resilience benchmarking: testing how agents respond to tool crashes, test failures, permission denials, and unexpected obstacles."
      },
      "predict": {
        "q": "What is 'Failure Recovery Evaluation' in autonomous agent benchmarking?",
        "a": [
          "Deliberately introducing errors (like broken syntax, missing files, or failing tests) and measuring how effectively the agent diagnoses and recovers",
          "Testing if the computer can survive being dropped",
          "Checking if the power cord is plugged in",
          "Measuring hard drive noise"
        ],
        "c": 0,
        "why": "Failure recovery evals measure the agent's ability to self-correct when confronted with unexpected obstacles.",
        "prompt": "What is 'Failure Recovery Evaluation' in autonomous agent benchmarking?",
        "options": [
          "Deliberately introducing errors (like broken syntax, missing files, or failing tests) and measuring how effectively the agent diagnoses and recovers",
          "Testing if the computer can survive being dropped",
          "Checking if the power cord is plugged in",
          "Measuring hard drive noise"
        ],
        "answer": 0,
        "explanation": "Failure recovery evals measure the agent's ability to self-correct when confronted with unexpected obstacles."
      },
      "sec2": {
        "title": "Fault Injection Testing Framework",
        "content": "<p>To benchmark agent resilience, engineers use <strong>Fault Injection Testing</strong>:</p>"
      },
      "diagram": {
        "title": "Fault Injection Testing Framework",
        "caption": "Testing cognitive self-healing under failure conditions",
        "steps": [
          {
            "title": "1. Inject Fault",
            "lines": [
              "Break syntax on line 12",
              "Or mock 403 Permission Denied"
            ]
          },
          {
            "title": "2. Agent Observes Failure",
            "lines": [
              "Receives traceback in tool result",
              "Enters diagnosis phase"
            ]
          },
          {
            "title": "3. Evaluate Recovery",
            "lines": [
              "Did agent fix root cause in 1 turn?",
              "Did it thrash or cheat? (Grade resilience)"
            ]
          }
        ],
        "boxes": [
          {
            "title": "1. Inject Fault",
            "lines": [
              "Break syntax on line 12",
              "Or mock 403 Permission Denied"
            ]
          },
          {
            "title": "2. Agent Observes Failure",
            "lines": [
              "Receives traceback in tool result",
              "Enters diagnosis phase"
            ]
          },
          {
            "title": "3. Evaluate Recovery",
            "lines": [
              "Did agent fix root cause in 1 turn?",
              "Did it thrash or cheat? (Grade resilience)"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Resilient Recovery vs Thrashing Rut",
        "content": "<ul><li><strong>1. Injected Syntax Errors:</strong> Feed the agent code with an intentional typo or missing bracket and observe if it reads the compiler error and fixes it in 1 turn.</li><li><strong>2. Permission Denials:</strong> Deny access to a file (403 Forbidden) and observe whether the agent gracefully switches to an alternative strategy or crashes.</li><li><strong>3. Flaky / Contradictory Test Injection:</strong> Introduce an error message and verify the agent does not cheat by weakening test assertions!</li><li><strong>4. Recovery Success Rate ($R_{rec}$):</strong> The percentage of injected failure states from which the agent autonomously recovers to full task completion.</li></ul><pre><code># Fault Injection Benchmark Matrix:\n# Test Case | Injected Fault             | Target Behavior                       | Result\n# ----------------------------------------------------------------------------------------\n# TC_01     | Missing import in test     | Read traceback, add import to src/    | PASS (1 turn)\n# TC_02     | Read-only database table   | Stop writing, explain permission error| PASS\n# TC_03     | Flaky test failure         | Read line 42, fix underlying logic    | PASS\n# Overall Recovery Resilience Score: 94.2%</code></pre><div class=\"callout\"><p><strong>The Chaos Engineering Analogy:</strong> Just like Chaos Monkey injects server failures to test infrastructure, fault injection in agent evals tests cognitive self-healing.</p></div>"
      },
      "trace": {
        "title": "Resilient Recovery vs Thrashing Rut",
        "caption": "Comparing behavioral responses to errors",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Evaluating Failure Recovery and Error Resilience"
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
              "step": "Resilient Agent"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Fragile Agent"
            }
          }
        ],
        "code": [
          "# Tracing Evaluating Failure Recovery and Error Resilience",
          "def execute_flow():",
          "    # Resilience benchmarking: testing how agents respon...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the failure resilience sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Failure recovery evaluation uses fault {1} to measure how effectively agents diagnose unexpected obstacles and achieve autonomous {2}."
        ],
        "blanks": [
          {
            "a": [
              "injection"
            ],
            "why": "Deliberately introducing errors"
          },
          {
            "a": [
              "self-healing"
            ],
            "why": "Autonomous recovery and repair"
          }
        ]
      },
      "win": "You know how to benchmark agent failure recovery and cognitive resilience using fault injection.",
      "nextTasks": [
        "Audit your project code and identify where evaluating failure recovery and error resilience applies.",
        "Author a unit test or verification script exercising evaluating failure recovery and error resilience.",
        "Document team architectural conventions regarding evaluating failure recovery and error resilience."
      ],
      "primarySource": "Industry standards and best practices for Evaluating Failure Recovery and Error Resilience.",
      "quiz": [
        {
          "q": "What is 'Fault Injection' in AI agent evaluation?",
          "a": [
            "Deliberately introducing artificial errors (like broken imports, database timeouts, or permission errors) to test agent recovery",
            "Injecting electricity into computer chips",
            "A technique for hacking websites",
            "A type of SQL injection attack"
          ],
          "c": 0,
          "why": "Fault injection tests whether agents can self-correct when things go wrong."
        },
        {
          "q": "What is the 'Recovery in One Turn' metric?",
          "a": [
            "The percentage of times an agent successfully fixes an encountered error on its very next tool call without thrashing",
            "The speed of the network router",
            "The time to download a file",
            "The number of lines of code"
          ],
          "c": 0,
          "why": "One-turn recovery measures rapid, accurate diagnostic comprehension."
        },
        {
          "q": "What should an evaluation harness do if an agent resolves a failing test by deleting the test file?",
          "a": [
            "Fail the evaluation immediately with a 0% score and flag the agent for sycophantic cheating",
            "Give the agent a 100% score",
            "Congratulate the agent",
            "Delete the repository"
          ],
          "c": 0,
          "why": "Deleting or weakening tests is an anti-pattern that must be penalized in evaluation."
        },
        {
          "q": "How does testing resilience against 403 Forbidden errors protect production systems?",
          "a": [
            "It verifies that when an agent is denied permission to an action, it halts and explains the limitation rather than trying destructive workarounds",
            "It makes servers run for free",
            "It turns off the internet",
            "It encrypts the hard drive"
          ],
          "c": 0,
          "why": "Agents must respect security boundaries gracefully when operations are forbidden."
        }
      ],
      "next": {
        "title": "Mock Environments, Sandboxes, and Deterministic Replay",
        "desc": "Build reproducible, hermetic testing sandboxes for agent evaluations."
      }
    },
    {
      "n": 6,
      "id": "mock-environments-sandboxes-replay",
      "title": "Mock Environments, Sandboxes, and Deterministic Replay",
      "topic": "Hermetic Sandboxes",
      "anim": "Generic",
      "lede": "Hermetic evaluation environments: Docker sandboxes, mock APIs, deterministic filesystem states, and session replay.",
      "winShort": "You know how to build hermetic Docker sandboxes and deterministic replay harnesses for agent evaluations.",
      "missionLink": "Mastering mock environments, sandboxes, and deterministic replay across modern software engineering",
      "sec1": {
        "title": "Core principles of Mock Environments, Sandboxes, and Deterministic Replay",
        "content": "<p>If an agent evaluation runs on your local machine, test #1 might create a file named `temp.txt`. When test #2 runs, it finds `temp.txt` already there, altering its behavior! Worse, if an agent runs `git clean -fd`, it might delete your local personal files.</p>",
        "keyIdea": "Hermetic evaluation environments: Docker sandboxes, mock APIs, deterministic filesystem states, and session replay."
      },
      "predict": {
        "q": "Why must agent evaluation benchmarks run inside isolated, disposable Docker containers?",
        "a": [
          "To ensure tests are 100% reproducible, prevent agents from damaging host machines, and reset state cleanly between runs",
          "Because Docker makes models smarter",
          "Containers are required by Python",
          "Containers run without electricity"
        ],
        "c": 0,
        "why": "Disposable containers provide hermetic isolation, preventing cross-test pollution and host damage.",
        "prompt": "Why must agent evaluation benchmarks run inside isolated, disposable Docker containers?",
        "options": [
          "To ensure tests are 100% reproducible, prevent agents from damaging host machines, and reset state cleanly between runs",
          "Because Docker makes models smarter",
          "Containers are required by Python",
          "Containers run without electricity"
        ],
        "answer": 0,
        "explanation": "Disposable containers provide hermetic isolation, preventing cross-test pollution and host damage."
      },
      "sec2": {
        "title": "The Hermetic Container Sandbox",
        "content": "<p>Professional agent evaluation requires <strong>Hermetic Sandboxing</strong>:</p>"
      },
      "diagram": {
        "title": "The Hermetic Container Sandbox",
        "caption": "Isolating agent evaluation runs",
        "steps": [
          {
            "title": "Pristine Container (Task 1)",
            "lines": [
              "Spun up from clean Docker image",
              "Fixed git commit baseline",
              "Agent executes tools safely"
            ]
          },
          {
            "title": "Evaluation & Teardown",
            "lines": [
              "Test suite asserts exit code 0",
              "Container destroyed completely",
              "Zero residual state pollution!"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Pristine Container (Task 1)",
            "lines": [
              "Spun up from clean Docker image",
              "Fixed git commit baseline",
              "Agent executes tools safely"
            ]
          },
          {
            "title": "Evaluation & Teardown",
            "lines": [
              "Test suite asserts exit code 0",
              "Container destroyed completely",
              "Zero residual state pollution!"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Mocking External Services",
        "content": "<ul><li><strong>1. Disposable Docker Sandboxes:</strong> Every benchmark task spins up a pristine, disposable container with a fixed filesystem state. When the evaluation finishes, the container is destroyed!</li><li><strong>2. Mock External APIs:</strong> Never let benchmark evaluation agents make real HTTP calls to Stripe, GitHub, or AWS! Mock external APIs using tools like WireMock, responses, or local mock servers.</li><li><strong>3. Deterministic State Reset:</strong> Guarantee that git HEAD, database fixtures, and file contents are bit-for-bit identical on every run.</li><li><strong>4. Session Replay:</strong> Record all tool calls and observations so engineers can replay the agent's exact decision tree in a visual debugger!</li></ul><pre><code># The Hermetic Benchmark Runner Workflow:\n1. Docker container spins up: `python:3.12-slim`\n2. Git clone repository at commit `a849f2` (Known baseline)\n3. Inject task prompt: \"Fix KeyError in billing.py\"\n4. Agent executes tools inside container (Host machine 100% protected!)\n5. Evaluator runs `pytest` inside container to check exit code.\n6. Container destroyed! Zero residual state!</code></pre><div class=\"callout\"><p><strong>The Hermetic Rule:</strong> If an evaluation run cannot be replayed from scratch with identical inputs producing the identical environment state, your benchmark is not scientific.</p></div>"
      },
      "trace": {
        "title": "Mocking External Services",
        "caption": "Isolating benchmarks from the real internet",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Mock Environments, Sandboxes, and Deterministic Replay"
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
              "step": "Real Internet (Flaky)"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Mock API (Deterministic)"
            }
          }
        ],
        "code": [
          "# Tracing Mock Environments, Sandboxes, and Deterministic Replay",
          "def execute_flow():",
          "    # Hermetic evaluation environments: Docker sandboxes...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the hermetic sandbox sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Hermetic evaluation runs agents inside disposable {1} containers with mock APIs to guarantee reproducible results and prevent state {2}."
        ],
        "blanks": [
          {
            "a": [
              "Docker"
            ],
            "why": "Containerization platform"
          },
          {
            "a": [
              "pollution"
            ],
            "why": "Contamination between consecutive runs"
          }
        ]
      },
      "win": "You know how to build hermetic Docker sandboxes and deterministic replay harnesses for agent evaluations.",
      "nextTasks": [
        "Audit your project code and identify where mock environments, sandboxes, and deterministic replay applies.",
        "Author a unit test or verification script exercising mock environments, sandboxes, and deterministic replay.",
        "Document team architectural conventions regarding mock environments, sandboxes, and deterministic replay."
      ],
      "primarySource": "Industry standards and best practices for Mock Environments, Sandboxes, and Deterministic Replay.",
      "quiz": [
        {
          "q": "What is a 'Hermetic' test environment in software engineering?",
          "a": [
            "An isolated, self-contained environment that has zero unmanaged external dependencies and always starts from a known, fixed state",
            "A test environment that is open to the public",
            "An environment with no operating system",
            "A computer on an airplane"
          ],
          "c": 0,
          "why": "Hermetic environments eliminate external variables to ensure pure, reproducible testing."
        },
        {
          "q": "Why should evaluation agents be disconnected from the live internet during benchmarks?",
          "a": [
            "To prevent rate limits, network latency variations, and ensure the agent cannot cheat by searching Google for solutions",
            "Because the internet is illegal in testing",
            "To save electricity",
            "Internet makes Python run slower"
          ],
          "c": 0,
          "why": "Offline evaluation ensures tests evaluate model reasoning rather than live internet search."
        },
        {
          "q": "What is 'Session Replay' in agent debugging?",
          "a": [
            "The capability to step through an agent's recorded thoughts, tool calls, and observations turn-by-turn after execution completes",
            "Playing a video game recording",
            "Restarting the computer",
            "Re-running a YouTube video"
          ],
          "c": 0,
          "why": "Session replay allows engineers to inspect the exact cognitive steps leading to a failure."
        },
        {
          "q": "How does running benchmarks in Docker containers protect developer laptops?",
          "a": [
            "Any destructive shell commands or accidental file deletions are confined entirely inside the disposable container",
            "It cools the laptop battery",
            "It prevents screens from cracking",
            "It speeds up the keyboard"
          ],
          "c": 0,
          "why": "Containerization isolates the host filesystem from unintended agent actions."
        }
      ],
      "next": {
        "title": "Benchmarking Autonomous Agents with SWE-bench",
        "desc": "Explore the world's most prestigious software engineering benchmark."
      }
    },
    {
      "n": 7,
      "id": "benchmarking-agents-swe-bench",
      "title": "Benchmarking Autonomous Agents with SWE-bench",
      "topic": "SWE-bench",
      "anim": "Generic",
      "lede": "The premier software engineering benchmark: SWE-bench architecture, test patches, SWE-bench Lite/Verified, and leaderboards.",
      "winShort": "You understand the architecture, evaluation criteria, and significance of the SWE-bench benchmark.",
      "missionLink": "Mastering benchmarking autonomous agents with swe-bench across modern software engineering",
      "sec1": {
        "title": "Core principles of Benchmarking Autonomous Agents with SWE-bench",
        "content": "<p>Before 2023, coding benchmarks tested toy functions (HumanEval: <em>'Write a function to check if a word is a palindrome'</em>). In late 2023, Princeton and University of Chicago researchers published <strong>SWE-bench</strong>, completely transforming how coding agents are judged.</p>",
        "keyIdea": "The premier software engineering benchmark: SWE-bench architecture, test patches, SWE-bench Lite/Verified, and leaderboards."
      },
      "predict": {
        "q": "What makes SWE-bench (Jimenez et al., 2023) the gold standard benchmark for autonomous AI coding agents?",
        "a": [
          "It tests agents on 2,294 real, complex GitHub issues from major open-source Python repos, requiring multi-file navigation and passing test patches",
          "It tests how fast models can type",
          "It tests models on multiple-choice trivia",
          "It is run by the United Nations"
        ],
        "c": 0,
        "why": "SWE-bench evaluates real-world engineering: navigating complex repos, writing code diffs, and passing real repository test suites.",
        "prompt": "What makes SWE-bench (Jimenez et al., 2023) the gold standard benchmark for autonomous AI coding agents?",
        "options": [
          "It tests agents on 2,294 real, complex GitHub issues from major open-source Python repos, requiring multi-file navigation and passing test patches",
          "It tests how fast models can type",
          "It tests models on multiple-choice trivia",
          "It is run by the United Nations"
        ],
        "answer": 0,
        "explanation": "SWE-bench evaluates real-world engineering: navigating complex repos, writing code diffs, and passing real repository test suites."
      },
      "sec2": {
        "title": "SWE-bench Architecture",
        "content": "<p>How SWE-bench Works:</p>"
      },
      "diagram": {
        "title": "SWE-bench Architecture",
        "caption": "Evaluating real-world software engineering agency",
        "steps": [
          {
            "title": "1. Real GitHub Issue",
            "lines": [
              "Real bug report from Django / SymPy",
              "Unstructured description written by human"
            ]
          },
          {
            "title": "2. Agent Explores & Edits",
            "lines": [
              "Navigates 50,000-line repository",
              "Emits git diff patch"
            ]
          },
          {
            "title": "3. Automated Test Verification",
            "lines": [
              "Runs repo's real pytest / tox suite",
              "PASS: Issue resolved! FAIL: Regression!"
            ]
          }
        ],
        "boxes": [
          {
            "title": "1. Real GitHub Issue",
            "lines": [
              "Real bug report from Django / SymPy",
              "Unstructured description written by human"
            ]
          },
          {
            "title": "2. Agent Explores & Edits",
            "lines": [
              "Navigates 50,000-line repository",
              "Emits git diff patch"
            ]
          },
          {
            "title": "3. Automated Test Verification",
            "lines": [
              "Runs repo's real pytest / tox suite",
              "PASS: Issue resolved! FAIL: Regression!"
            ]
          }
        ]
      },
      "sec3": {
        "title": "SWE-bench Tiers",
        "content": "<ul><li><strong>1. Real GitHub Issues:</strong> 2,294 real historical issues pulled from 12 prominent open-source Python libraries (Django, SymPy, scikit-learn, Sphinx, Flask).</li><li><strong>2. The Test Patch:</strong> Each issue has an associated reference commit containing the real human developer's fix and the <strong>reproduction test patch</strong>.</li><li><strong>3. The Execution Challenge:</strong> The agent receives only the problem description. It must clone the repo, find the relevant files across thousands of lines, write a git diff patch, and execute the repository's test suite!</li><li><strong>4. Objective Grading:</strong> If the agent's patch makes the failing tests pass <strong>AND does not break any existing passing tests</strong>, the issue is scored as RESOLVED.</li></ul><pre><code># The SWE-bench Variants:\n# 1. SWE-bench Full:     2,294 issues (Massive, expensive to run full suite)\n# 2. SWE-bench Lite:       300 issues (Curated high-signal subset for fast evaluation)\n# 3. SWE-bench Verified:   500 issues (Human-verified by professional software engineers\n#                                      to guarantee problem descriptions are unambiguous!)</code></pre><div class=\"callout\"><p><strong>The Frontier Barometer:</strong> Leading models (Claude 3.5 Sonnet, OpenAI o1, DeepSeek R1) score 40% to 55% on SWE-bench Verified. It remains the most respected benchmark of autonomous software engineering capability.</p></div>"
      },
      "trace": {
        "title": "SWE-bench Tiers",
        "caption": "Full vs Lite vs Verified",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Benchmarking Autonomous Agents with SWE-bench"
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
              "step": "SWE-bench Full (2,294)"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "SWE-bench Verified (500)"
            }
          }
        ],
        "code": [
          "# Tracing Benchmarking Autonomous Agents with SWE-bench",
          "def execute_flow():",
          "    # The premier software engineering benchmark: SWE-be...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the SWE-bench sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "SWE-bench evaluates autonomous coding agents by testing whether generated git diffs resolve real GitHub issues and pass the repository's {1} {2}."
        ],
        "blanks": [
          {
            "a": [
              "test"
            ],
            "why": "Automated verification suite"
          },
          {
            "a": [
              "suite"
            ],
            "why": "Collection of unit and integration tests"
          }
        ]
      },
      "win": "You understand the architecture, evaluation criteria, and significance of the SWE-bench benchmark.",
      "nextTasks": [
        "Audit your project code and identify where benchmarking autonomous agents with swe-bench applies.",
        "Author a unit test or verification script exercising benchmarking autonomous agents with swe-bench.",
        "Document team architectural conventions regarding benchmarking autonomous agents with swe-bench."
      ],
      "primarySource": "Industry standards and best practices for Benchmarking Autonomous Agents with SWE-bench.",
      "quiz": [
        {
          "q": "What two conditions must be satisfied for a SWE-bench task to be scored as 'Resolved'?",
          "a": [
            "The agent's patch must make the failing reproduction test pass, and all existing passing tests must continue to pass without regression",
            "The agent must write documentation and push to main",
            "The code must be formatted with Prettier",
            "The agent must finish in 1 second"
          ],
          "c": 0,
          "why": "Resolving an issue requires fixing the defect while introducing zero regressions in existing tests."
        },
        {
          "q": "What is SWE-bench Verified?",
          "a": [
            "A curated subset of 500 issues validated by professional software engineers to ensure problem descriptions are clear and solvable",
            "A paid version of SWE-bench",
            "A test for computer security",
            "A benchmark for verified Twitter accounts"
          ],
          "c": 0,
          "why": "SWE-bench Verified removes ambiguous or underspecified issues through human engineering audits."
        },
        {
          "q": "What programming language is the primary focus of the official SWE-bench dataset?",
          "a": [
            "Python",
            "Rust",
            "Java",
            "C++"
          ],
          "c": 0,
          "why": "SWE-bench was constructed from 12 popular open-source Python repositories (Django, scikit-learn, etc.)."
        },
        {
          "q": "Why is SWE-bench vastly more difficult for models than HumanEval?",
          "a": [
            "HumanEval provides the exact function signature to complete; SWE-bench requires finding which of 500 files to edit in a 100k-line repo",
            "SWE-bench is written in binary",
            "HumanEval uses harder math",
            "SWE-bench has no documentation"
          ],
          "c": 0,
          "why": "SWE-bench tests repository navigation, multi-file comprehension, and dependency tracking in large codebases."
        }
      ],
      "next": {
        "title": "Building an Agent Evaluation Harness for Your Repository",
        "desc": "Synthesize everything: build a custom agent eval harness for your own codebase."
      }
    },
    {
      "n": 8,
      "id": "building-custom-agent-eval-harness",
      "title": "Building an Agent Evaluation Harness for Your Repository",
      "topic": "Custom Agent Evals",
      "anim": "Generic",
      "lede": "Synthesizing agent evaluation: building an internal evaluation harness for your own codebase with task cards, sandboxes, and metrics.",
      "winShort": "You have completed the Agent Evaluation course.",
      "missionLink": "Mastering building an agent evaluation harness for your repository across modern software engineering",
      "sec1": {
        "title": "Core principles of Building an Agent Evaluation Harness for Your Repository",
        "content": "<p>SWE-bench is great for comparing frontier models on Twitter. But your company does not build Django; you build a proprietary React/FastAPI microservice with custom internal libraries, idiosyncratic databases, and unique architectural invariants. To know if an agent works for <em>your team</em>, you must build an <strong>Internal Agent Eval Harness</strong>.</p>",
        "keyIdea": "Synthesizing agent evaluation: building an internal evaluation harness for your own codebase with task cards, sandboxes, and metrics."
      },
      "predict": {
        "q": "Why should an engineering team build a private, internal agent evaluation harness for their own codebase?",
        "a": [
          "Public benchmarks like SWE-bench test open-source Python libraries; private harnesses evaluate your company's proprietary frameworks, languages, and architecture",
          "Private harnesses are legally required",
          "Public benchmarks are illegal for companies",
          "Private harnesses use no electricity"
        ],
        "c": 0,
        "why": "Private evaluation harnesses measure agent performance directly against your proprietary stack and internal conventions.",
        "prompt": "Why should an engineering team build a private, internal agent evaluation harness for their own codebase?",
        "options": [
          "Public benchmarks like SWE-bench test open-source Python libraries; private harnesses evaluate your company's proprietary frameworks, languages, and architecture",
          "Private harnesses are legally required",
          "Public benchmarks are illegal for companies",
          "Private harnesses use no electricity"
        ],
        "answer": 0,
        "explanation": "Private evaluation harnesses measure agent performance directly against your proprietary stack and internal conventions."
      },
      "sec2": {
        "title": "The Internal Agent Evaluation Architecture",
        "content": "<p>A Production Internal Agent Evaluation Architecture:</p>"
      },
      "diagram": {
        "title": "The Internal Agent Evaluation Architecture",
        "caption": "Evaluating agents against proprietary company codebases",
        "steps": [
          {
            "title": "1. Task Card Bank (YAML)",
            "lines": [
              "20-50 real historical Jira tickets",
              "Starting commit + test verification command"
            ]
          },
          {
            "title": "2. Ephemeral Sandbox",
            "lines": [
              "Docker container checks out starting commit",
              "Spins up local test databases"
            ]
          },
          {
            "title": "3. Agent Autonomous Run",
            "lines": [
              "Agent navigates repo & modifies files",
              "Bounded by 15 turns & cost caps"
            ]
          },
          {
            "title": "4. Verification & Scorecard",
            "lines": [
              "Executes test suite -> Computes Pass@1",
              "Generates team capability scorecard"
            ]
          }
        ],
        "boxes": [
          {
            "title": "1. Task Card Bank (YAML)",
            "lines": [
              "20-50 real historical Jira tickets",
              "Starting commit + test verification command"
            ]
          },
          {
            "title": "2. Ephemeral Sandbox",
            "lines": [
              "Docker container checks out starting commit",
              "Spins up local test databases"
            ]
          },
          {
            "title": "3. Agent Autonomous Run",
            "lines": [
              "Agent navigates repo & modifies files",
              "Bounded by 15 turns & cost caps"
            ]
          },
          {
            "title": "4. Verification & Scorecard",
            "lines": [
              "Executes test suite -> Computes Pass@1",
              "Generates team capability scorecard"
            ]
          }
        ]
      },
      "sec3": {
        "title": "The Competitive Advantage",
        "content": "<ul><li><strong>1. The Task Card Bank (`evals/tasks/`):</strong> 20 to 50 realistic historical tasks drawn from your team's real Jira tickets or git pull requests: each has an issue prompt, starting git commit hash, and a verification test script.</li><li><strong>2. Containerized Runner:</strong> Uses Docker to spin up your local dev environment (database, backend, frontend) at the starting commit.</li><li><strong>3. Agent Execution:</strong> Unleashes the agent with its toolset, capping execution at 15 turns or $2.00 cost.</li><li><strong>4. Objective Verification:</strong> Runs the verification script. Calculates Pass@1, Step Efficiency, and Token Cost.</li><li><strong>5. Scorecard Reporting:</strong> Generates an executive scorecard comparing agent versions across your proprietary stack!</li></ul><pre><code># Internal Agent Task Card Schema (YAML):\ntask_id: \"TICKET-492-tenant-isolation\"\ndescription: \"Ensure all customer invoices are filtered by tenant_id\"\nstarting_commit: \"c8491a2b\"\nallowed_tools: [\"read_file\", \"replace_string\", \"run_in_terminal\"]\ntimeout_seconds: 300\nverification:\n  command: \"pytest tests/test_tenant_isolation.py\"\n  expected_exit_code: 0</code></pre><div class=\"callout\"><p><strong>The Final Engineering Truth:</strong> You have completed the Agent Evaluation course. You now possess the complete scientific toolkit to measure, benchmark, and deploy autonomous AI agents with empirical confidence.</p></div>"
      },
      "trace": {
        "title": "The Competitive Advantage",
        "caption": "Tuning AI to your specific repository",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Building an Agent Evaluation Harness for Your Repository"
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
              "step": "Generic Public Benchmark"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Internal Repo Harness"
            }
          }
        ],
        "code": [
          "# Tracing Building an Agent Evaluation Harness for Your Repository",
          "def execute_flow():",
          "    # Synthesizing agent evaluation: building an interna...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the custom agent eval sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "An internal agent evaluation harness measures performance against proprietary code using a bank of historical task {1} executed in containerized {2}."
        ],
        "blanks": [
          {
            "a": [
              "cards"
            ],
            "why": "Structured task specifications"
          },
          {
            "a": [
              "sandboxes"
            ],
            "why": "Isolated ephemeral testing environments"
          }
        ]
      },
      "win": "You have completed the Agent Evaluation course.",
      "nextTasks": [
        "Audit your project code and identify where building an agent evaluation harness for your repository applies.",
        "Author a unit test or verification script exercising building an agent evaluation harness for your repository.",
        "Document team architectural conventions regarding building an agent evaluation harness for your repository."
      ],
      "primarySource": "Industry standards and best practices for Building an Agent Evaluation Harness for Your Repository.",
      "quiz": [
        {
          "q": "What is the primary benefit of basing internal agent task cards on real historical bug tickets?",
          "a": [
            "They represent the exact complexity, file structures, and edge cases that your engineering team encounters daily",
            "Historical tickets are easier to solve",
            "Historical tickets use fewer tokens",
            "It avoids writing tests"
          ],
          "c": 0,
          "why": "Real historical tickets provide realistic, representative engineering challenges."
        },
        {
          "q": "How many task cards are recommended to build an initial internal agent evaluation benchmark?",
          "a": [
            "20 to 30 well-curated, representative tasks covering different architectural layers",
            "At least 500,000 tasks",
            "Exactly 1 task",
            "Zero tasks"
          ],
          "c": 0,
          "why": "20-30 diverse tasks provide immediate, actionable diagnostic signal without excessive compute expense."
        },
        {
          "q": "What should the verification step in an internal task card execute?",
          "a": [
            "An automated test script (e.g. pytest or npm test) that tests the specific bug fix and verifies that no regressions were introduced",
            "A print statement",
            "A git push command",
            "A database wipe"
          ],
          "c": 0,
          "why": "Automated test scripts provide objective, reproducible verification of task completion."
        },
        {
          "q": "What is the ultimate mark of an organization that has mastered AI-assisted engineering?",
          "a": [
            "They measure agent capabilities on their own codebase using internal eval harnesses, continuously improving prompts, tools, and workflows scientifically",
            "They let agents deploy directly to production without testing",
            "They ban all AI tools",
            "They hire 500 manual QA testers"
          ],
          "c": 0,
          "why": "Empirical measurement, internal benchmarking, and continuous iteration define AI engineering mastery."
        }
      ],
      "next": {
        "title": "Next Level: AI Guardrails, Routing & Production Architecture",
        "desc": "Learn how to bound system behavior with guardrails, route requests across models, and deploy reliable production AI systems."
      }
    }
  ]
};

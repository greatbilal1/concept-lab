"use strict";

module.exports = {
  "id": "ai-assisted-code-review",
  "title": "AI-Assisted Code Review",
  "num": 56,
  "emoji": "🔎",
  "desc": "What a model is good at spotting, what it reliably misses, and how to review generated diffs.",
  "topics": [
    "Code Review",
    "AI Blind Spots",
    "Diff Skepticism",
    "Security Audits",
    "PR Summaries",
    "Linters",
    "Review Fatigue",
    "Verification Gates"
  ],
  "mission": "# Mission — AI-Assisted Code Review\n\nMaster the art of code review in the AI era. Leverage AI to automate mechanical review, identify critical blind spots (race conditions, domain logic), audit diffs with skepticism, hunt for security vulnerabilities, pair linters with LLMs, combat review fatigue, and enforce human verification gates.",
  "notes": "# Notes — AI-Assisted Code Review\n\nAesthetic surface polish can mask deep logical flaws. Scrutinize deleted lines, verify business rules, and keep human judgment at the center of high-consequence code paths.",
  "resources": "# Resources — AI-Assisted Code Review\n\n- Google Engineering Practices, *Code Review Developer Guide*\n- OWASP Foundation, *OWASP Top 10 Security Risks*\n- Karl Wiegers, *Peer Reviews in Software*",
  "glossaryGroups": [
    {
      "id": "strengths",
      "title": "Strengths & Metrics",
      "terms": [
        {
          "term": "Mechanical Review",
          "def": "Automated code review evaluating syntax, type consistency, docstrings, and unhandled null values.",
          "lesson": 1,
          "tags": [
            "review",
            "automation"
          ]
        },
        {
          "term": "PR Summary",
          "def": "An AI-generated breakdown of pull request intent, architectural impact, risk assessment, and review order.",
          "lesson": 5,
          "tags": [
            "review",
            "pr"
          ]
        },
        {
          "term": "Reviewer Ergonomics",
          "def": "Structuring PRs and documentation to minimize cognitive fatigue and maximize reviewer efficiency.",
          "lesson": 5,
          "tags": [
            "workflow",
            "ergonomics"
          ]
        }
      ]
    },
    {
      "id": "blind-spots",
      "title": "Blind Spots & Vulnerabilities",
      "terms": [
        {
          "term": "AI Blind Spot",
          "def": "A class of defect (concurrency, race conditions, business domain rules) that AI reviewers reliably overlook.",
          "lesson": 2,
          "tags": [
            "ai",
            "safety"
          ]
        },
        {
          "term": "Package Hallucination",
          "def": "A vulnerability where an AI imports a plausible-sounding package name that does not exist in public registries.",
          "lesson": 3,
          "tags": [
            "security",
            "ai"
          ]
        },
        {
          "term": "IDOR",
          "def": "Insecure Direct Object Reference — exposing a database record by ID without verifying caller ownership or permission.",
          "lesson": 4,
          "tags": [
            "security",
            "owasp"
          ]
        }
      ]
    },
    {
      "id": "pipeline",
      "title": "Pipeline Integration",
      "terms": [
        {
          "term": "Two-Layer Review Pipeline",
          "def": "A workflow combining deterministic static analysis (linters, type checkers) with LLM semantic review.",
          "lesson": 6,
          "tags": [
            "ci",
            "tooling"
          ]
        },
        {
          "term": "Static Analysis",
          "def": "Analyzing source code without executing it to guarantee syntax, typing, and security rule compliance.",
          "lesson": 6,
          "tags": [
            "testing",
            "quality"
          ]
        },
        {
          "term": "Blast Radius",
          "def": "The maximum potential damage and operational fallout that a defect or failure can inflict on a system.",
          "lesson": 8,
          "tags": [
            "architecture",
            "risk"
          ]
        }
      ]
    },
    {
      "id": "governance",
      "title": "Governance & Quality",
      "terms": [
        {
          "term": "Review Fatigue",
          "def": "Cognitive exhaustion resulting from reviewing high volumes of code, leading to superficial approvals.",
          "lesson": 7,
          "tags": [
            "culture",
            "management"
          ]
        },
        {
          "term": "Rubber-Stamping",
          "def": "The dangerous habit of approving pull requests without conducting rigorous line-by-line verification.",
          "lesson": 7,
          "tags": [
            "quality",
            "risk"
          ]
        },
        {
          "term": "Human Verification Gate",
          "def": "A mandatory manual approval checkpoint required before executing high-consequence operations.",
          "lesson": 8,
          "tags": [
            "governance",
            "security"
          ]
        }
      ]
    }
  ],
  "cheatsheetSections": [
    {
      "title": "Skeptical Diff Review Checklist",
      "label": "Line-by-line audit guide",
      "code": "1. DELETIONS: Did the agent delete existing error checks or tests?\n2. IMPORTS: Are all imports approved in package.json / pyproject.toml?\n3. BOUNDARIES: Check off-by-one ranges and date/currency math.\n4. TESTS: Verify test assertions were NOT weakened or deleted.",
      "lessonN": 3,
      "lessonSlug": "reviewing-diffs-with-skepticism",
      "lessonTitle": "Reviewing AI-Generated Diffs with Skepticism"
    },
    {
      "title": "Targeted Security Review Prompt",
      "label": "Hunting OWASP vulnerabilities",
      "code": "\"Audit src/api/orders.py with threat model: Authenticated Malicious Tenant.\nCheck specifically for:\n1. IDOR: Are queries filtered by user.tenant_id?\n2. Injection: Are all SQL queries parameterized?\n3. Race Conditions: Are concurrent updates locked with FOR UPDATE?\"",
      "lessonN": 4,
      "lessonSlug": "prompting-security-audits",
      "lessonTitle": "Prompting for Security Audits and Vulnerabilities"
    },
    {
      "title": "PR Size and Review Policy",
      "label": "Defeating review fatigue",
      "code": "# Team Code Review Rules:\n- Max PR Size: 300 lines of diff.\n- Split large features into sequential, reviewable milestones.\n- Require CI green (linters, types, tests) BEFORE human review starts.",
      "lessonN": 7,
      "lessonSlug": "preventing-review-fatigue",
      "lessonTitle": "Preventing Review Fatigue and Rubber-Stamping"
    },
    {
      "title": "Human Verification Gate Architecture",
      "label": "Safeguarding high-consequence paths",
      "code": "# Mandatory Human Sign-Off Required For:\n1. Production database schema migrations\n2. Financial pricing and refund logic\n3. Authentication, password, and session handling\n4. Production deployment promotion",
      "lessonN": 8,
      "lessonSlug": "human-verification-gates",
      "lessonTitle": "Establishing Human Verification Gates"
    }
  ],
  "lessons": [
    {
      "n": 1,
      "id": "what-ai-review-excels-at",
      "title": "What AI Code Review Is Good At",
      "topic": "Strengths",
      "anim": "Generic",
      "lede": "Understanding where AI review excels: spotting typos, missing docstrings, obvious null pointers, and type inconsistencies.",
      "winShort": "You understand the mechanical review strengths of AI models.",
      "missionLink": "Mastering what ai code review is good at across modern software engineering",
      "sec1": {
        "title": "Core principles of What AI Code Review Is Good At",
        "content": "<p>Code review is a demanding intellectual task. Human reviewers often spend half their cognitive energy on mechanical nitpicks: formatting, typos, missing type hints, and unhandled null values. This leads to review fatigue, causing reviewers to miss deep architectural bugs.</p>",
        "keyIdea": "Understanding where AI review excels: spotting typos, missing docstrings, obvious null pointers, and type inconsistencies."
      },
      "predict": {
        "q": "What type of review feedback is an AI model most effective at providing?",
        "a": [
          "Flagging missing null checks, type signature mismatches, and obvious styling or convention violations",
          "Validating complex legal licensing contracts",
          "Auditing employee salary data",
          "Negotiating feature deadlines with clients"
        ],
        "c": 0,
        "why": "AI models excel at syntax, type consistency, docstrings, and spotting unhandled null or boundary cases.",
        "prompt": "What type of review feedback is an AI model most effective at providing?",
        "options": [
          "Flagging missing null checks, type signature mismatches, and obvious styling or convention violations",
          "Validating complex legal licensing contracts",
          "Auditing employee salary data",
          "Negotiating feature deadlines with clients"
        ],
        "answer": 0,
        "explanation": "AI models excel at syntax, type consistency, docstrings, and spotting unhandled null or boundary cases."
      },
      "sec2": {
        "title": "The Review Hierarchy",
        "content": "<p><strong>AI-Assisted Code Review</strong> automates the mechanical tier of review. Models excel at:</p>"
      },
      "diagram": {
        "title": "The Review Hierarchy",
        "caption": "Distributing review responsibilities between AI and human",
        "steps": [
          {
            "title": "AI First Pass (Mechanical)",
            "lines": [
              "Null checks, types, typos",
              "Docstring match, convention audit"
            ]
          },
          {
            "title": "Human Final Pass (Architectural)",
            "lines": [
              "Business requirements & UX",
              "Security boundaries, system design"
            ]
          }
        ],
        "boxes": [
          {
            "title": "AI First Pass (Mechanical)",
            "lines": [
              "Null checks, types, typos",
              "Docstring match, convention audit"
            ]
          },
          {
            "title": "Human Final Pass (Architectural)",
            "lines": [
              "Business requirements & UX",
              "Security boundaries, system design"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Catching Unhandled None",
        "content": "<ul><li><strong>Type Consistency:</strong> Spotting functions that declare return type `str` but return `None` in an `else` branch.</li><li><strong>Unhandled Edge Cases:</strong> Pointing out missing `if items is None` or unclosed file descriptors.</li><li><strong>Naming & Idioms:</strong> Flagging variables that deviate from project conventions or standard library idioms.</li><li><strong>Boilerplate & Docs:</strong> Generating or verifying that docstrings accurately match function parameter signatures.</li></ul><pre><code># AI Reviewer Comment Example:\n# Line 42: def process_user(user: User | None):\n# AI Flag: \"`user.is_active` is accessed on line 45 without verifying `if user is not None`.\n#          This will raise AttributeError if None is passed.\"</code></pre><p>Offloading mechanical hygiene to automated AI review frees human engineers to focus on what humans do best: architecture, security, and business intent.</p><div class=\"callout\"><p><strong>The First Pass:</strong> Run automated AI review before a human teammate ever opens the pull request, eliminating 90% of routine review comments upfront.</p></div>"
      },
      "trace": {
        "title": "Catching Unhandled None",
        "caption": "AI detecting missing null checks",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "What AI Code Review Is Good At"
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
              "step": "PR Diff"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "AI Review Comment"
            }
          }
        ],
        "code": [
          "# Tracing What AI Code Review Is Good At",
          "def execute_flow():",
          "    # Understanding where AI review excels: spotting typ...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the AI review strengths sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "AI code review excels at mechanical hygiene like type consistency, missing {1} checks, and {2} alignment."
        ],
        "blanks": [
          {
            "a": [
              "null"
            ],
            "why": "None or undefined value checks"
          },
          {
            "a": [
              "convention"
            ],
            "why": "Adherence to style and naming standards"
          }
        ]
      },
      "win": "You understand the mechanical review strengths of AI models.",
      "nextTasks": [
        "Audit your project code and identify where what ai code review is good at applies.",
        "Author a unit test or verification script exercising what ai code review is good at.",
        "Document team architectural conventions regarding what ai code review is good at."
      ],
      "primarySource": "Industry standards and best practices for What AI Code Review Is Good At.",
      "quiz": [
        {
          "q": "What is the primary benefit of running automated AI code reviews on PRs?",
          "a": [
            "It catches mechanical defects and style issues early, freeing human reviewers to focus on architecture and business logic",
            "It eliminates the need for human software engineers",
            "It guarantees 100% bug-free software",
            "It compiles code into assembly"
          ],
          "c": 0,
          "why": "Automating mechanical review allows human reviewers to focus on deep design, security, and business intent."
        },
        {
          "q": "Which bug is an AI reviewer most likely to catch reliably?",
          "a": [
            "An unhandled None pointer exception on an optional parameter branch",
            "A conflict between two department heads",
            "A flaw in the company's 5-year business plan",
            "A bug in the physical network router"
          ],
          "c": 0,
          "why": "Null/None dereferences on optional parameters are classic syntactic and type patterns models spot with ease."
        },
        {
          "q": "Why should AI review comments be treated as suggestions rather than absolute commands?",
          "a": [
            "Models can hallucinate false positives or misunderstand intentional domain nuances",
            "AI models are legally not allowed to approve code",
            "Python requires human approval",
            "Linters reject AI text"
          ],
          "c": 0,
          "why": "Reviewers must use judgment because models occasionally flag intentional patterns as errors."
        },
        {
          "q": "What happens if a team relies solely on AI review without human oversight?",
          "a": [
            "Subtle business logic flaws, race conditions, and architectural drift slip through into production",
            "The code runs 10x faster",
            "Git repositories are automatically deleted",
            "API bills drop to zero"
          ],
          "c": 0,
          "why": "AI models lack contextual understanding of company business models and distributed race conditions."
        }
      ],
      "next": {
        "title": "AI Blind Spots (Business Logic, Race Conditions, Architecture)",
        "desc": "Recognize the critical categories of bugs AI reviewers reliably miss."
      }
    },
    {
      "n": 2,
      "id": "ai-review-blind-spots",
      "title": "AI Blind Spots: Business Logic, Race Conditions, Architecture",
      "topic": "Blind Spots",
      "anim": "Generic",
      "lede": "Understanding where AI review fails: subtle concurrency race conditions, business domain rules, and architectural erosion.",
      "winShort": "You know the critical blind spots of AI code review and how to defend against them.",
      "missionLink": "Mastering ai blind spots: business logic, race conditions, architecture across modern software engineering",
      "sec1": {
        "title": "Core principles of AI Blind Spots: Business Logic, Race Conditions, Architecture",
        "content": "<p>While AI models are brilliant at pattern-matching local syntax, they suffer from deep <strong>blind spots</strong> that human engineers must actively defend against.</p>",
        "keyIdea": "Understanding where AI review fails: subtle concurrency race conditions, business domain rules, and architectural erosion."
      },
      "predict": {
        "q": "Why do AI reviewers reliably miss concurrency race conditions and distributed timing bugs?",
        "a": [
          "Race conditions depend on asynchronous timing, thread scheduling, and database locks that cannot be seen in static text diffs alone",
          "Language models do not know what threads are",
          "Concurrency is prohibited in Python",
          "Operating systems hide thread code"
        ],
        "c": 0,
        "why": "Race conditions emerge from runtime interactions and scheduling across time, which static text analysis cannot simulate.",
        "prompt": "Why do AI reviewers reliably miss concurrency race conditions and distributed timing bugs?",
        "options": [
          "Race conditions depend on asynchronous timing, thread scheduling, and database locks that cannot be seen in static text diffs alone",
          "Language models do not know what threads are",
          "Concurrency is prohibited in Python",
          "Operating systems hide thread code"
        ],
        "answer": 0,
        "explanation": "Race conditions emerge from runtime interactions and scheduling across time, which static text analysis cannot simulate."
      },
      "sec2": {
        "title": "The Three Major Blind Spots",
        "content": "<p>The three most dangerous AI review blind spots are:</p>"
      },
      "diagram": {
        "title": "The Three Major Blind Spots",
        "caption": "Critical vulnerabilities missed by AI reviewers",
        "steps": [
          {
            "title": "1. Business Logic",
            "lines": [
              "Domain policy nuances",
              "Discount order of operations",
              "Legal & compliance rules"
            ]
          },
          {
            "title": "2. Concurrency & Locks",
            "lines": [
              "TOCTOU race conditions",
              "Deadlocks & isolation levels",
              "Cache stampedes"
            ]
          },
          {
            "title": "3. Architecture Erosion",
            "lines": [
              "Layer boundary leaks",
              "Circular module imports",
              "Bypassing domain models"
            ]
          }
        ],
        "boxes": [
          {
            "title": "1. Business Logic",
            "lines": [
              "Domain policy nuances",
              "Discount order of operations",
              "Legal & compliance rules"
            ]
          },
          {
            "title": "2. Concurrency & Locks",
            "lines": [
              "TOCTOU race conditions",
              "Deadlocks & isolation levels",
              "Cache stampedes"
            ]
          },
          {
            "title": "3. Architecture Erosion",
            "lines": [
              "Layer boundary leaks",
              "Circular module imports",
              "Bypassing domain models"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Race Condition Vulnerability",
        "content": "<ul><li><strong>1. Business Domain Correctness:</strong> An agent cannot know that your company's policy requires VAT to be calculated <em>before</em> loyalty points are applied, not after. If the math looks plausible, the AI will approve it.</li><li><strong>2. Concurrency & Race Conditions:</strong> Multi-threaded execution, distributed database isolation levels (`READ COMMITTED` vs `SERIALIZABLE`), and distributed cache invalidation cannot be simulated by reading a single file diff.</li><li><strong>3. Architectural Erosion:</strong> An agent will happily approve a diff that imports a database model directly into a frontend component, violating your clean architecture boundaries to save 5 lines of code.</li></ul><pre><code># THE CLASSIC AI BLIND SPOT (Race Condition):\n# AI Review verdict: \"Looks clean and correct!\"\ndef withdraw(user_id, amount):\n    balance = db.get_balance(user_id) # Read\n    if balance >= amount:\n        # Vulnerable to TOCTOU (Time-of-Check to Time-of-Use) race condition!\n        # Two concurrent requests can withdraw simultaneously, creating negative balance!\n        db.set_balance(user_id, balance - amount)</code></pre><div class=\"callout\"><p><strong>The Human Gate:</strong> Review PRs looking specifically for what the AI cannot see: race conditions, business rule mismatches, and architectural boundary violations.</p></div>"
      },
      "trace": {
        "title": "Race Condition Vulnerability",
        "caption": "Why static diffs deceive language models",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "AI Blind Spots: Business Logic, Race Conditions, Architecture"
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
              "step": "Single-Thread Mindset"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Runtime Reality"
            }
          }
        ],
        "code": [
          "# Tracing AI Blind Spots: Business Logic, Race Conditions, Architecture",
          "def execute_flow():",
          "    # Understanding where AI review fails: subtle concur...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the review blind spots sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "AI reviewers reliably miss subtle {1} race conditions and business {2} rules that require deep institutional knowledge."
        ],
        "blanks": [
          {
            "a": [
              "concurrency"
            ],
            "why": "Multi-threaded or asynchronous execution"
          },
          {
            "a": [
              "domain"
            ],
            "why": "Business policies and regulatory rules"
          }
        ]
      },
      "win": "You know the critical blind spots of AI code review and how to defend against them.",
      "nextTasks": [
        "Audit your project code and identify where ai blind spots: business logic, race conditions, architecture applies.",
        "Author a unit test or verification script exercising ai blind spots: business logic, race conditions, architecture.",
        "Document team architectural conventions regarding ai blind spots: business logic, race conditions, architecture."
      ],
      "primarySource": "Industry standards and best practices for AI Blind Spots: Business Logic, Race Conditions, Architecture.",
      "quiz": [
        {
          "q": "What is a TOCTOU (Time-of-Check to Time-of-Use) race condition?",
          "a": [
            "A vulnerability where state changes between checking a condition and acting upon it due to concurrent execution",
            "A typo in a database column name",
            "A compiler warning in C++",
            "An outdated git branch"
          ],
          "c": 0,
          "why": "Concurrent requests can alter data between the check and the mutation, corrupting state."
        },
        {
          "q": "Why is an AI model unable to determine if a discount calculation complies with internal company policy?",
          "a": [
            "Company policies are proprietary domain rules that live in institutional knowledge rather than public training data",
            "Language models cannot do math",
            "Discounts are illegal in software",
            "Policies can only be read by human eyes"
          ],
          "c": 0,
          "why": "Internal business policies require domain context that external language models do not possess."
        },
        {
          "q": "What architectural smell should human reviewers watch for when reviewing AI-assisted PRs?",
          "a": [
            "Layer contamination: importing database models or infrastructure drivers directly into presentation or domain logic",
            "Functions with descriptive docstrings",
            "Type hints on all arguments",
            "Files with fewer than 200 lines"
          ],
          "c": 0,
          "why": "Agents often take shortcuts that breach architectural boundaries unless strictly checked."
        },
        {
          "q": "How can a team safeguard against concurrency bugs in AI-assisted code?",
          "a": [
            "Require explicit database transactions with atomic row locks (FOR UPDATE) or distributed locks, reviewed by senior engineers",
            "Tell the AI to make the code fast",
            "Turn off multi-threading completely",
            "Only run code on single-core CPUs"
          ],
          "c": 0,
          "why": "Enforcing atomic transactions and human concurrency audits protects against race conditions."
        }
      ],
      "next": {
        "title": "Reviewing AI-Generated Diffs with Skepticism",
        "desc": "Develop the skeptical mindset required to audit agent code changes."
      }
    },
    {
      "n": 3,
      "id": "reviewing-diffs-with-skepticism",
      "title": "Reviewing AI-Generated Diffs with Skepticism",
      "topic": "Diff Skepticism",
      "anim": "Generic",
      "lede": "Auditing AI diffs with healthy skepticism: spotting hallucinated libraries, subtle regressions, and lazy shortcuts.",
      "winShort": "You know how to audit AI-generated code diffs with professional skepticism.",
      "missionLink": "Mastering reviewing ai-generated diffs with skepticism across modern software engineering",
      "sec1": {
        "title": "Core principles of Reviewing AI-Generated Diffs with Skepticism",
        "content": "<p>The most dangerous code is not code that is obviously broken; it is code that <strong>looks brilliantly correct at first glance</strong>. AI-generated code has immaculate indentation, beautiful variable names, and convincing docstrings—making it easy for tired human reviewers to rubber-stamp the diff.</p>",
        "keyIdea": "Auditing AI diffs with healthy skepticism: spotting hallucinated libraries, subtle regressions, and lazy shortcuts."
      },
      "predict": {
        "q": "What mindset should an engineer adopt when reviewing a pull request generated by an AI coding agent?",
        "a": [
          "A skeptical auditor mindset: assuming the code may contain plausible-looking subtle errors until verified line-by-line",
          "A passive rubber-stamper mindset: assuming the AI never makes mistakes",
          "An adversarial mindset of deleting all AI code",
          "A manager mindset of ignoring code diffs"
        ],
        "c": 0,
        "why": "AI code looks exceptionally plausible on the surface; rigorous line-by-line skepticism is mandatory.",
        "prompt": "What mindset should an engineer adopt when reviewing a pull request generated by an AI coding agent?",
        "options": [
          "A skeptical auditor mindset: assuming the code may contain plausible-looking subtle errors until verified line-by-line",
          "A passive rubber-stamper mindset: assuming the AI never makes mistakes",
          "An adversarial mindset of deleting all AI code",
          "A manager mindset of ignoring code diffs"
        ],
        "answer": 0,
        "explanation": "AI code looks exceptionally plausible on the surface; rigorous line-by-line skepticism is mandatory."
      },
      "sec2": {
        "title": "The Skeptical Reviewer Checklist",
        "content": "<p>A professional engineer reviews AI-generated diffs with <strong>rigorous skepticism</strong>:</p>"
      },
      "diagram": {
        "title": "The Skeptical Reviewer Checklist",
        "caption": "Auditing AI diffs for subtle traps",
        "steps": [
          {
            "title": "1. Scrutinize Deletions",
            "lines": [
              "Did agent delete edge case defenses?",
              "Did agent remove existing tests?"
            ]
          },
          {
            "title": "2. Verify Package Imports",
            "lines": [
              "Check for hallucinated libraries",
              "Confirm licenses & approved deps"
            ]
          },
          {
            "title": "3. Audit Boundary Math",
            "lines": [
              "Check off-by-one ranges",
              "Inspect date & currency logic"
            ]
          }
        ],
        "boxes": [
          {
            "title": "1. Scrutinize Deletions",
            "lines": [
              "Did agent delete edge case defenses?",
              "Did agent remove existing tests?"
            ]
          },
          {
            "title": "2. Verify Package Imports",
            "lines": [
              "Check for hallucinated libraries",
              "Confirm licenses & approved deps"
            ]
          },
          {
            "title": "3. Audit Boundary Math",
            "lines": [
              "Check off-by-one ranges",
              "Inspect date & currency logic"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Surface Plausibility Trap",
        "content": "<ul><li><strong>Inspect Deletions:</strong> Did the agent delete existing error handling, security checks, or edge-case handling to make its new code fit?</li><li><strong>Verify Dependencies:</strong> Did the agent import a third-party library that doesn't exist (package hallucination), or introduce a new unapproved dependency?</li><li><strong>Check Modulo and Off-by-One Math:</strong> Verify all boundary conditions, indexing ranges, and date calculations by hand.</li><li><strong>Audit Test Assertions:</strong> Did the agent weaken any test assertions or sneak in `assert True`?</li></ul><pre><code># SKEPTICAL DIFF AUDIT CHECKLIST:\n[ ] 1. Do all imports come from approved packages in pyproject.toml / package.json?\n[ ] 2. Are all deleted lines genuinely dead code, or did the agent delete edge-case defenses?\n[ ] 3. Does the diff introduce any SQL string concatenations or unvalidated user inputs?\n[ ] 4. Are database migrations reversible (both up and down steps provided)?</code></pre><div class=\"callout\"><p><strong>The Golden Rule of Diff Review:</strong> Spend 80% of your review time reading the lines the agent DELETED or MODIFIED, rather than the brand-new lines it added.</p></div>"
      },
      "trace": {
        "title": "Surface Plausibility Trap",
        "caption": "Plausible appearance vs underlying reality",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Reviewing AI-Generated Diffs with Skepticism"
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
              "step": "Surface Plausibility (AI Diff)"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Underlying Reality"
            }
          }
        ],
        "code": [
          "# Tracing Reviewing AI-Generated Diffs with Skepticism",
          "def execute_flow():",
          "    # Auditing AI diffs with healthy skepticism: spottin...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the diff skepticism sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "When reviewing AI-generated pull requests, reviewers must scrutinize code {1} to ensure critical edge-case defenses were not quietly {2}."
        ],
        "blanks": [
          {
            "a": [
              "deletions"
            ],
            "why": "Removed lines of code"
          },
          {
            "a": [
              "removed"
            ],
            "why": "Deleted or stripped out"
          }
        ]
      },
      "win": "You know how to audit AI-generated code diffs with professional skepticism.",
      "nextTasks": [
        "Audit your project code and identify where reviewing ai-generated diffs with skepticism applies.",
        "Author a unit test or verification script exercising reviewing ai-generated diffs with skepticism.",
        "Document team architectural conventions regarding reviewing ai-generated diffs with skepticism."
      ],
      "primarySource": "Industry standards and best practices for Reviewing AI-Generated Diffs with Skepticism.",
      "quiz": [
        {
          "q": "Why is scrutinizing deleted lines in an AI diff especially important?",
          "a": [
            "Agents sometimes delete complex error-handling or security checks that stood in the way of making a new feature work",
            "Git deletes lines automatically",
            "Deletions cause cloud hosting fees to increase",
            "Deleted lines cannot be recovered"
          ],
          "c": 0,
          "why": "Agents prioritize satisfying immediate prompt goals and may delete existing defensive code that caused friction."
        },
        {
          "q": "What is 'Package Hallucination' in AI-generated code?",
          "a": [
            "The model imports a plausible-sounding package name that does not actually exist in the npm or PyPI registry",
            "A package that changes its name every week",
            "A virus inside Python",
            "A package written in HTML"
          ],
          "c": 0,
          "why": "Models statistically synthesize plausible package names that may not exist in package registries."
        },
        {
          "q": "Why should reviewers be wary of beautiful docstrings and clean formatting in AI diffs?",
          "a": [
            "Plausible aesthetic appearance can create a false sense of security that blinds reviewers to underlying logical flaws",
            "Clean formatting is prohibited in production",
            "Docstrings slow down Python execution",
            "Formatters introduce security bugs"
          ],
          "c": 0,
          "why": "Aesthetics do not equal correctness; surface polish often masks deep logical defects."
        },
        {
          "q": "What is the recommended approach for reviewing large AI-generated PRs?",
          "a": [
            "Require the author or agent to split the work into small, atomic PRs of under 300 lines each",
            "Skim the diff in 10 seconds and approve",
            "Merge without reading",
            "Delete the pull request"
          ],
          "c": 0,
          "why": "Smaller pull requests allow rigorous line-by-line review without reviewer fatigue."
        }
      ],
      "next": {
        "title": "Prompting for Security Audits and Vulnerabilities",
        "desc": "Use AI agents to proactively hunt for OWASP Top 10 vulnerabilities."
      }
    },
    {
      "n": 4,
      "id": "prompting-security-audits",
      "title": "Prompting for Security Audits and Vulnerabilities",
      "topic": "Security Audits",
      "anim": "Generic",
      "lede": "Directing AI agents to perform targeted security reviews: SQL injection, SSRF, XSS, and authorization leaks.",
      "winShort": "You know how to direct AI agents to conduct rigorous security reviews.",
      "missionLink": "Mastering prompting for security audits and vulnerabilities across modern software engineering",
      "sec1": {
        "title": "Core principles of Prompting for Security Audits and Vulnerabilities",
        "content": "<p>Asking an agent a generic question like <em>'Is this code secure?'</em> will produce a useless, generic answer: <em>'Yes, this code looks good, but always remember to use HTTPS.'</em></p>",
        "keyIdea": "Directing AI agents to perform targeted security reviews: SQL injection, SSRF, XSS, and authorization leaks."
      },
      "predict": {
        "q": "How do you effectively prompt an AI agent to perform a security audit on a codebase?",
        "a": [
          "Provide specific threat models and prompt for dedicated vulnerability classes (e.g. OWASP Top 10, IDOR, SQL injection)",
          "Ask the agent: 'Is this code safe?'",
          "Prompt the agent with: 'Act as a hacker and break everything'",
          "Security cannot be audited with AI"
        ],
        "c": 0,
        "why": "Targeted threat models and explicit vulnerability classes yield rigorous, actionable security findings.",
        "prompt": "How do you effectively prompt an AI agent to perform a security audit on a codebase?",
        "options": [
          "Provide specific threat models and prompt for dedicated vulnerability classes (e.g. OWASP Top 10, IDOR, SQL injection)",
          "Ask the agent: 'Is this code safe?'",
          "Prompt the agent with: 'Act as a hacker and break everything'",
          "Security cannot be audited with AI"
        ],
        "answer": 0,
        "explanation": "Targeted threat models and explicit vulnerability classes yield rigorous, actionable security findings."
      },
      "sec2": {
        "title": "Targeted Security Audits",
        "content": "<p>To conduct a real security review, you must give the agent an <strong>explicit threat model</strong> and direct it to hunt for specific vulnerability classes:</p>"
      },
      "diagram": {
        "title": "Targeted Security Audits",
        "caption": "Focusing on specific OWASP vulnerability classes",
        "steps": [
          {
            "title": "Generic Prompt (Useless)",
            "lines": [
              "'Is this code secure?'",
              "Vague answer, misses critical flaws"
            ]
          },
          {
            "title": "Targeted Threat Model (Actionable)",
            "lines": [
              "Audit for IDOR, SSRF, Injection",
              "Discovers missing tenant_id check",
              "Provides exploit payload proof"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Generic Prompt (Useless)",
            "lines": [
              "'Is this code secure?'",
              "Vague answer, misses critical flaws"
            ]
          },
          {
            "title": "Targeted Threat Model (Actionable)",
            "lines": [
              "Audit for IDOR, SSRF, Injection",
              "Discovers missing tenant_id check",
              "Provides exploit payload proof"
            ]
          }
        ]
      },
      "sec3": {
        "title": "IDOR Vulnerability Scan",
        "content": "<ul><li><strong>1. Insecure Direct Object References (IDOR):</strong> Can user A access `/invoices/104` belonging to user B simply by changing the ID parameter?</li><li><strong>2. SQL & Command Injection:</strong> Are parameters concatenated directly into SQL queries or shell strings rather than parameterized?</li><li><strong>3. SSRF (Server-Side Request Forgery):</strong> Does the endpoint fetch URLs supplied by users without validating IP ranges (blocking `169.254.169.254` and `localhost`)?</li><li><strong>4. Broken Object-Level Authorization (BOLA):</strong> Are permission checks performed on every single entity access?</li></ul><pre><code># The High-Signal Security Audit Prompt:\n\"Perform a focused security audit on src/endpoints/documents.py.\nThreat Model: Unauthenticated external attacker and malicious tenant user.\nAudit explicitly for:\n1. IDOR: Verify that document queries enforce `WHERE tenant_id = current_user.tenant_id`.\n2. SSRF: Audit the URL fetch utility in line 54 for private IP range blocking.\n3. Injection: Verify all database calls use parameterized ORM queries.\nProvide concrete proof of any vulnerability found with attack payload examples.\"</code></pre><div class=\"callout\"><p><strong>Defense in Depth:</strong> Combine AI security audits with automated static analysis tools (Semgrep, Bandit, Snyk) for multi-layered protection.</p></div>"
      },
      "trace": {
        "title": "IDOR Vulnerability Scan",
        "caption": "Catching cross-tenant data leaks",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Prompting for Security Audits and Vulnerabilities"
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
              "step": "Vulnerable Query"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Secured Query"
            }
          }
        ],
        "code": [
          "# Tracing Prompting for Security Audits and Vulnerabilities",
          "def execute_flow():",
          "    # Directing AI agents to perform targeted security r...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the security audit sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Effective security audits provide explicit {1} models and target specific vulnerability classes like IDOR, SSRF, and SQL {2}."
        ],
        "blanks": [
          {
            "a": [
              "threat"
            ],
            "why": "Profile of attackers and assets"
          },
          {
            "a": [
              "injection"
            ],
            "why": "Command or query injection"
          }
        ]
      },
      "win": "You know how to direct AI agents to conduct rigorous security reviews.",
      "nextTasks": [
        "Audit your project code and identify where prompting for security audits and vulnerabilities applies.",
        "Author a unit test or verification script exercising prompting for security audits and vulnerabilities.",
        "Document team architectural conventions regarding prompting for security audits and vulnerabilities."
      ],
      "primarySource": "Industry standards and best practices for Prompting for Security Audits and Vulnerabilities.",
      "quiz": [
        {
          "q": "What is an Insecure Direct Object Reference (IDOR) vulnerability?",
          "a": [
            "Allowing a user to access a resource simply by providing its ID without verifying ownership or permission",
            "An error when a Python object is None",
            "A missing CSS stylesheet",
            "A hardware memory leak"
          ],
          "c": 0,
          "why": "IDOR occurs when an application exposes a database key without validating caller authorization."
        },
        {
          "q": "Why is Server-Side Request Forgery (SSRF) particularly dangerous in cloud environments?",
          "a": [
            "Attackers can force the server to query cloud metadata services (e.g. 169.254.169.254) to steal IAM credentials",
            "It deletes the cloud hosting account",
            "It turns off the cloud data center power",
            "It renames git branches"
          ],
          "c": 0,
          "why": "SSRF allows attackers to query internal network services and cloud metadata endpoints."
        },
        {
          "q": "How does providing a concrete threat model improve an agent's security review?",
          "a": [
            "It focuses the model on realistic attacker capabilities and specific architectural boundaries",
            "It makes the model run in parallel",
            "It bypasses all rate limits",
            "It encrypts the prompt"
          ],
          "c": 0,
          "why": "Threat models provide the boundary conditions needed to evaluate attack surfaces systematically."
        },
        {
          "q": "Why should automated security linters (like Semgrep or Bandit) run alongside AI code reviews?",
          "a": [
            "Deterministic AST linters never hallucinate and catch known security patterns with 100% reliability",
            "Linters are required by the US government",
            "Linters run on quantum computers",
            "Linters eliminate the need for firewalls"
          ],
          "c": 0,
          "why": "Static security analyzers provide deterministic, rule-based coverage that complements LLM reasoning."
        }
      ],
      "next": {
        "title": "Next Course: Working With AI-Generated Architecture",
        "desc": "Learn how to keep software structure coherent and prevent architectural drift."
      }
    },
    {
      "n": 5,
      "id": "automated-pr-summaries",
      "title": "Automated PR Summaries and Risk Assessment",
      "topic": "PR Summaries",
      "anim": "Generic",
      "lede": "Generating meaningful pull request descriptions, impact analyses, and risk scores with AI.",
      "winShort": "You know how to leverage AI to generate high-value PR summaries and risk assessments.",
      "missionLink": "Mastering automated pr summaries and risk assessment across modern software engineering",
      "sec1": {
        "title": "Core principles of Automated PR Summaries and Risk Assessment",
        "content": "<p>Reviewing a pull request with 25 modified files without context is disorienting. Reviewers spend 20 minutes just trying to figure out which file is the core change and which 24 files are minor ripple effects.</p>",
        "keyIdea": "Generating meaningful pull request descriptions, impact analyses, and risk scores with AI."
      },
      "predict": {
        "q": "What is the primary value of an AI-generated Pull Request summary for human reviewers?",
        "a": [
          "It provides an architectural overview of changes, identifies high-risk modified modules, and links related files",
          "It automatically merges the pull request without human approval",
          "It deletes all comments on the PR",
          "It allows developers to skip code review"
        ],
        "c": 0,
        "why": "High-quality summaries orient reviewers, highlight architectural risks, and explain the 'why' behind changes.",
        "prompt": "What is the primary value of an AI-generated Pull Request summary for human reviewers?",
        "options": [
          "It provides an architectural overview of changes, identifies high-risk modified modules, and links related files",
          "It automatically merges the pull request without human approval",
          "It deletes all comments on the PR",
          "It allows developers to skip code review"
        ],
        "answer": 0,
        "explanation": "High-quality summaries orient reviewers, highlight architectural risks, and explain the 'why' behind changes."
      },
      "sec2": {
        "title": "The Anatomy of an AI PR Summary",
        "content": "<p>AI agents are exceptional at generating <strong>Pull Request Summaries and Risk Assessments</strong>:</p>"
      },
      "diagram": {
        "title": "The Anatomy of an AI PR Summary",
        "caption": "Orienting reviewers for maximum efficiency",
        "steps": [
          {
            "title": "1. High-Level Intent",
            "lines": [
              "Business goal & issue link",
              "Summarizes the 'Why'"
            ]
          },
          {
            "title": "2. Risk Assessment",
            "lines": [
              "Highlights financial & auth changes",
              "Flags database migrations"
            ]
          },
          {
            "title": "3. Review Order Roadmap",
            "lines": [
              "Core logic -> Tests -> API glue",
              "Reduces cognitive navigation friction"
            ]
          }
        ],
        "boxes": [
          {
            "title": "1. High-Level Intent",
            "lines": [
              "Business goal & issue link",
              "Summarizes the 'Why'"
            ]
          },
          {
            "title": "2. Risk Assessment",
            "lines": [
              "Highlights financial & auth changes",
              "Flags database migrations"
            ]
          },
          {
            "title": "3. Review Order Roadmap",
            "lines": [
              "Core logic -> Tests -> API glue",
              "Reduces cognitive navigation friction"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Risk Scoring in PRs",
        "content": "<ul><li><strong>1. The Architectural 'Why':</strong> Summarizes the high-level intent based on commit messages and issue tickets.</li><li><strong>2. Key Architectural Seams:</strong> Groups modified files by layer (Core Domain, Database Migrations, API Endpoints, Tests).</li><li><strong>3. Risk Assessment:</strong> Flags high-consequence changes: <em>'Warning: Modifies payment processing transactions in `src/billing/service.py`.'</em></li><li><strong>4. Testing Guidance:</strong> Explains how a reviewer can manually test or verify the change locally.</li></ul><pre><code># AI-Generated PR Risk Summary:\n### 🎯 Intent\nImplements subscription cancellation with prorated refunds (Closes #412).\n\n### ⚠️ Risk Assessment: HIGH\n- Modifies financial refund calculation in `src/billing/refunds.py`.\n- Adds database migration `0015_add_refund_status.py`.\n\n### 🔍 Recommended Review Order\n1. `src/billing/refunds.py` (Core business logic)\n2. `tests/test_refunds.py` (Verify boundary assertions)\n3. `src/api/routes.py` (HTTP endpoint routing)</code></pre><div class=\"callout\"><p><strong>Reviewer Ergonomics:</strong> Guiding reviewers on the recommended order to read files reduces review time by 50% and improves defect detection.</p></div>"
      },
      "trace": {
        "title": "Risk Scoring in PRs",
        "caption": "Flagging high-consequence diffs",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Automated PR Summaries and Risk Assessment"
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
              "step": "Low Risk"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "High Risk"
            }
          }
        ],
        "code": [
          "# Tracing Automated PR Summaries and Risk Assessment",
          "def execute_flow():",
          "    # Generating meaningful pull request descriptions, i...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the PR summary sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "An AI PR summary accelerates review by categorizing changes, assessing {1} level, and recommending an optimal file review {2}."
        ],
        "blanks": [
          {
            "a": [
              "risk"
            ],
            "why": "Likelihood and severity of failure"
          },
          {
            "a": [
              "order"
            ],
            "why": "Sequence in which files should be read"
          }
        ]
      },
      "win": "You know how to leverage AI to generate high-value PR summaries and risk assessments.",
      "nextTasks": [
        "Audit your project code and identify where automated pr summaries and risk assessment applies.",
        "Author a unit test or verification script exercising automated pr summaries and risk assessment.",
        "Document team architectural conventions regarding automated pr summaries and risk assessment."
      ],
      "primarySource": "Industry standards and best practices for Automated PR Summaries and Risk Assessment.",
      "quiz": [
        {
          "q": "Why is suggesting an optimal review order helpful for human reviewers?",
          "a": [
            "Reviewing core domain models and tests before peripheral glue code makes the overall architecture easier to grasp",
            "It makes git checkout run faster",
            "It alphabeticalizes the files",
            "It prevents git merge conflicts"
          ],
          "c": 0,
          "why": "Reading core business logic first provides the necessary context to evaluate peripheral route handlers."
        },
        {
          "q": "What changes should an automated PR risk assessment flag as high risk?",
          "a": [
            "Database schema migrations, authentication logic, payment processing, and cryptographic security code",
            "Adding a new CSS class name",
            "Fixing a typo in a markdown document",
            "Adding a comment to a test"
          ],
          "c": 0,
          "why": "Core financial, data persistence, and security seams carry the highest failure consequences."
        },
        {
          "q": "What is the danger of relying on lazy, uncurated AI PR summaries that just list every commit message?",
          "a": [
            "They create noise without providing architectural synthesis or highlighting critical risks",
            "They delete the git branch",
            "They make the repository read-only",
            "They cause merge conflicts in GitHub"
          ],
          "c": 0,
          "why": "Summaries must synthesize intent and assess risk rather than blindly regurgitating commit logs."
        },
        {
          "q": "How does testing guidance in a PR description benefit reviewers and QA engineers?",
          "a": [
            "It provides exact curl commands or steps to reproduce and verify the feature in a local test environment",
            "It compiles Python to machine code",
            "It reduces network bandwidth",
            "It satisfies legal licensing requirements"
          ],
          "c": 0,
          "why": "Actionable verification steps allow reviewers to test the behavior locally with zero friction."
        }
      ],
      "next": {
        "title": "Combining Static Analysis Linters with LLM Review",
        "desc": "Build an integrated review pipeline combining linters and models."
      }
    },
    {
      "n": 6,
      "id": "linters-with-llm-review",
      "title": "Combining Static Analysis Linters with LLM Review",
      "topic": "Integrated Pipeline",
      "anim": "Generic",
      "lede": "Building a multi-layered review pipeline: deterministic linters for syntax/types, LLMs for reasoning and architecture.",
      "winShort": "You know how to build a layered review pipeline pairing linters with LLMs.",
      "missionLink": "Mastering combining static analysis linters with llm review across modern software engineering",
      "sec1": {
        "title": "Core principles of Combining Static Analysis Linters with LLM Review",
        "content": "<p>A common mistake in AI engineering is asking a language model to do things that deterministic tools already do perfectly for free. Asking an LLM: <em>'Are there any unused imports or formatting errors?'</em> wastes money and invites hallucinations.</p>",
        "keyIdea": "Building a multi-layered review pipeline: deterministic linters for syntax/types, LLMs for reasoning and architecture."
      },
      "predict": {
        "q": "Why is combining deterministic linters (Ruff, ESLint, Mypy) with LLMs superior to using an LLM alone?",
        "a": [
          "Linters provide 100% deterministic, zero-hallucination checks for syntax and types, letting LLMs focus on complex reasoning",
          "Linters are written in English",
          "LLMs refuse to review code without linters",
          "Linters make the GPU run cooler"
        ],
        "c": 0,
        "why": "Deterministic static analysis tools never hallucinate, providing a solid foundation for LLM reasoning.",
        "prompt": "Why is combining deterministic linters (Ruff, ESLint, Mypy) with LLMs superior to using an LLM alone?",
        "options": [
          "Linters provide 100% deterministic, zero-hallucination checks for syntax and types, letting LLMs focus on complex reasoning",
          "Linters are written in English",
          "LLMs refuse to review code without linters",
          "Linters make the GPU run cooler"
        ],
        "answer": 0,
        "explanation": "Deterministic static analysis tools never hallucinate, providing a solid foundation for LLM reasoning."
      },
      "sec2": {
        "title": "The Two-Tier Review Pipeline",
        "content": "<p>The gold standard for code quality is a <strong>Two-Layer Review Pipeline</strong>:</p>"
      },
      "diagram": {
        "title": "The Two-Tier Review Pipeline",
        "caption": "Deterministic rules plus semantic intelligence",
        "steps": [
          {
            "title": "Tier 1: Static Analysis (0 Tokens)",
            "lines": [
              "Ruff, Mypy, Semgrep, ESLint",
              "100% deterministic, 0% hallucinations",
              "Checks syntax, types, formatting"
            ]
          },
          {
            "title": "Tier 2: LLM Semantic Review",
            "lines": [
              "Reasons over business logic & intent",
              "Evaluates architecture & edge cases",
              "Audits threat models & naming"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Tier 1: Static Analysis (0 Tokens)",
            "lines": [
              "Ruff, Mypy, Semgrep, ESLint",
              "100% deterministic, 0% hallucinations",
              "Checks syntax, types, formatting"
            ]
          },
          {
            "title": "Tier 2: LLM Semantic Review",
            "lines": [
              "Reasons over business logic & intent",
              "Evaluates architecture & edge cases",
              "Audits threat models & naming"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Cost and Efficiency Optimization",
        "content": "<ul><li><strong>Layer 1: Deterministic Static Analysis (Fast & Free):</strong> Linters (Ruff, ESLint), Type Checkers (Mypy, TypeScript), and Security Scanners (Bandit, Semgrep). These tools execute in 200ms, have 0% hallucination rate, and enforce syntax, types, and formatting with mathematical certainty.</li><li><strong>Layer 2: LLM Reasoning Review (Deep & Semantic):</strong> Evaluates business logic, architectural compliance, edge cases, naming clarity, and security threat models.</li></ul><pre><code># The Two-Layer CI Review Pipeline:\n# Step 1: Run deterministic gates (Must pass 100% before LLM is called)\n$ ruff check src/\n$ mypy src/\n$ semgrep --config=p/owasp-top-ten src/\n\n# Step 2: Feed clean, passing diff to LLM for semantic review\n$ ai-review --diff=HEAD~1 --context=copilot-instructions.md</code></pre><p>By ensuring all code entering the LLM review is already syntactically pristine and type-safe, the LLM can dedicate 100% of its attention to semantic architecture and logic.</p><div class=\"callout\"><p><strong>Pipeline Rule:</strong> Never trigger an expensive LLM review call if static linters or type checkers are failing. Fix mechanical errors first!</p></div>"
      },
      "trace": {
        "title": "Cost and Efficiency Optimization",
        "caption": "Filtering noise before LLM execution",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Combining Static Analysis Linters with LLM Review"
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
              "step": "Broken Types or Syntax"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Pristine Code"
            }
          }
        ],
        "code": [
          "# Tracing Combining Static Analysis Linters with LLM Review",
          "def execute_flow():",
          "    # Building a multi-layered review pipeline: determin...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the integrated review pipeline sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "An integrated review pipeline uses deterministic {1} for syntax and types, reserving LLM calls for semantic {2} and architecture."
        ],
        "blanks": [
          {
            "a": [
              "linters"
            ],
            "why": "Static analysis tools like Ruff or ESLint"
          },
          {
            "a": [
              "reasoning"
            ],
            "why": "Evaluating logic, intent, and design"
          }
        ]
      },
      "win": "You know how to build a layered review pipeline pairing linters with LLMs.",
      "nextTasks": [
        "Audit your project code and identify where combining static analysis linters with llm review applies.",
        "Author a unit test or verification script exercising combining static analysis linters with llm review.",
        "Document team architectural conventions regarding combining static analysis linters with llm review."
      ],
      "primarySource": "Industry standards and best practices for Combining Static Analysis Linters with LLM Review.",
      "quiz": [
        {
          "q": "What is the primary advantage of static type checkers (like Mypy or TypeScript) over LLM review?",
          "a": [
            "They mathematically prove type safety across the entire codebase without any possibility of hallucination",
            "They are trained on billions of parameters",
            "They write unit tests automatically",
            "They cost $20 per run"
          ],
          "c": 0,
          "why": "Type checkers use formal type systems to guarantee type consistency deterministically."
        },
        {
          "q": "Why should CI pipelines run linters and tests before triggering an AI review agent?",
          "a": [
            "To avoid wasting token costs and review cycles on broken code that fails basic syntax or compilation checks",
            "Because GitHub blocks AI tools from running first",
            "To give the AI model time to sleep",
            "Because linters require internet access"
          ],
          "c": 0,
          "why": "Failing mechanical checks should be resolved before spending compute on semantic review."
        },
        {
          "q": "What unique capability does an LLM reviewer provide that static linters cannot?",
          "a": [
            "Evaluating whether code satisfies high-level business requirements and conforms to architectural intent",
            "Checking indentation spaces",
            "Sorting import statements",
            "Finding missing semicolons"
          ],
          "c": 0,
          "why": "Linters check syntax and AST rules; LLMs reason about semantics, design, and business intent."
        },
        {
          "q": "How does pre-filtering with linters improve the quality of LLM review comments?",
          "a": [
            "The model is not distracted by trivial formatting errors and focuses entirely on substantive logic and architecture",
            "It increases model temperature",
            "It reduces GPU clock speed",
            "It turns off the terminal"
          ],
          "c": 0,
          "why": "Removing formatting noise allows the model to concentrate attention on high-level concerns."
        }
      ],
      "next": {
        "title": "Preventing Review Fatigue and Rubber-Stamping",
        "desc": "Maintain vigilance and avoid cognitive burnout in high-velocity AI teams."
      }
    },
    {
      "n": 7,
      "id": "preventing-review-fatigue",
      "title": "Preventing Review Fatigue and Rubber-Stamping",
      "topic": "Review Fatigue",
      "anim": "Generic",
      "lede": "Combating review fatigue in the AI era: managing high PR volume and preventing dangerous rubber-stamping.",
      "winShort": "You know how to prevent review fatigue and eliminate rubber-stamping in AI-assisted teams.",
      "missionLink": "Mastering preventing review fatigue and rubber-stamping across modern software engineering",
      "sec1": {
        "title": "Core principles of Preventing Review Fatigue and Rubber-Stamping",
        "content": "<p>Before AI coding tools, a developer wrote perhaps 200 lines of reviewed code per day. With autonomous coding agents, a single engineer can generate five 600-line pull requests in an afternoon. This creates an acute crisis: <strong>AI Review Fatigue</strong>.</p>",
        "keyIdea": "Combating review fatigue in the AI era: managing high PR volume and preventing dangerous rubber-stamping."
      },
      "predict": {
        "q": "What causes 'AI Review Fatigue' in modern software engineering teams?",
        "a": [
          "AI agents allow developers to generate massive pull requests in minutes, overwhelming human reviewers with high diff volume",
          "Developers get tired of using computer mice",
          "Code editors consume too much battery power",
          "GitHub limits pull requests to three per day"
        ],
        "c": 0,
        "why": "AI dramatically accelerates code generation; human review capacity becomes the primary bottleneck.",
        "prompt": "What causes 'AI Review Fatigue' in modern software engineering teams?",
        "options": [
          "AI agents allow developers to generate massive pull requests in minutes, overwhelming human reviewers with high diff volume",
          "Developers get tired of using computer mice",
          "Code editors consume too much battery power",
          "GitHub limits pull requests to three per day"
        ],
        "answer": 0,
        "explanation": "AI dramatically accelerates code generation; human review capacity becomes the primary bottleneck."
      },
      "sec2": {
        "title": "The AI Velocity vs Review Bottleneck",
        "content": "<p>When human reviewers are flooded with massive pull requests, human nature takes over: <strong>Rubber-Stamping</strong>. Reviewers glance at the green CI checkmark, assume the AI did a good job, and click 'Approve'. This is how catastrophic security flaws and architectural rot enter production.</p>"
      },
      "diagram": {
        "title": "The AI Velocity vs Review Bottleneck",
        "caption": "Managing the imbalance between generation and review",
        "steps": [
          {
            "title": "Generation Speed (AI)",
            "lines": [
              "Generates 1,000 lines in 3 minutes",
              "Near-zero typing friction"
            ]
          },
          {
            "title": "Review Capacity (Human)",
            "lines": [
              "Thorough review: 150 lines / hour",
              "Finite cognitive attention budget"
            ]
          },
          {
            "title": "The Solution",
            "lines": [
              "Enforce small PR size limits (300 lines)",
              "Automate mechanical checks"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Generation Speed (AI)",
            "lines": [
              "Generates 1,000 lines in 3 minutes",
              "Near-zero typing friction"
            ]
          },
          {
            "title": "Review Capacity (Human)",
            "lines": [
              "Thorough review: 150 lines / hour",
              "Finite cognitive attention budget"
            ]
          },
          {
            "title": "The Solution",
            "lines": [
              "Enforce small PR size limits (300 lines)",
              "Automate mechanical checks"
            ]
          }
        ]
      },
      "sec3": {
        "title": "The Rubber-Stamping Trap",
        "content": "<p>To combat review fatigue and maintain vigilance:</p><ul><li><strong>Enforce Strict PR Size Limits:</strong> No PR over 300 lines of diff (excluding auto-generated lockfiles). If an agent builds a big feature, require it in small, reviewable increments.</li><li><strong>Time-Boxed Review Sessions:</strong> Human attention degrades after 45 minutes of continuous code review. Limit review sessions to 30-minute focused blocks.</li><li><strong>Mandate Proof of Local Verification:</strong> Authors must attach a terminal recording or test run proving they executed and verified the code locally before asking for review.</li></ul><pre><code># Team Policy to Prevent Rubber-Stamping:\n1. MAX DIFF SIZE: 300 lines (PRs larger than 300 lines are automatically rejected by CI bot).\n2. DUAL APPROVAL: High-risk areas (auth, billing) require 2 senior engineer approvals.\n3. ZERO UNEXPLAINED CODE: The PR author must be able to explain any line of code in the PR upon request.</code></pre><div class=\"callout\"><p><strong>The Golden Rule:</strong> The speed at which you generate code must never exceed the speed at which you can rigorously review and understand it.</p></div>"
      },
      "trace": {
        "title": "The Rubber-Stamping Trap",
        "caption": "How review fatigue leads to production outages",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Preventing Review Fatigue and Rubber-Stamping"
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
              "step": "Fatigue Sets In"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Rubber-Stamp Approval"
            }
          },
          {
            "line": 3,
            "vars": {
              "step": "Production Incident"
            }
          }
        ],
        "code": [
          "# Tracing Preventing Review Fatigue and Rubber-Stamping",
          "def execute_flow():",
          "    # Combating review fatigue in the AI era: managing h...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the review fatigue sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "To prevent dangerous rubber-stamping caused by AI velocity, engineering teams enforce strict PR {1} limits and time-boxed {2} sessions."
        ],
        "blanks": [
          {
            "a": [
              "size"
            ],
            "why": "Maximum lines of diff per PR"
          },
          {
            "a": [
              "review"
            ],
            "why": "Focused inspection periods"
          }
        ]
      },
      "win": "You know how to prevent review fatigue and eliminate rubber-stamping in AI-assisted teams.",
      "nextTasks": [
        "Audit your project code and identify where preventing review fatigue and rubber-stamping applies.",
        "Author a unit test or verification script exercising preventing review fatigue and rubber-stamping.",
        "Document team architectural conventions regarding preventing review fatigue and rubber-stamping."
      ],
      "primarySource": "Industry standards and best practices for Preventing Review Fatigue and Rubber-Stamping.",
      "quiz": [
        {
          "q": "What is 'rubber-stamping' in software code review?",
          "a": [
            "Approving a pull request without genuinely reading, understanding, or verifying the diff",
            "Stamping physical paper with rubber ink",
            "Validating code with automated linters",
            "Signing a git commit with GPG"
          ],
          "c": 0,
          "why": "Rubber-stamping occurs when fatigued reviewers approve code without meaningful scrutiny."
        },
        {
          "q": "Why is capping PR size to under 300 lines the most effective countermeasure against review fatigue?",
          "a": [
            "Small diffs are cognitively manageable, allowing reviewers to maintain high attention and spot subtle defects",
            "GitHub charges per line of code",
            "Linters cannot process files over 300 lines",
            "Compilers reject large PRs"
          ],
          "c": 0,
          "why": "Empirical studies prove defect detection rates drop precipitously on pull requests over 300-400 lines."
        },
        {
          "q": "What should happen if an author submits an AI-generated PR containing 1,500 lines of code?",
          "a": [
            "Reject the PR and require the author to break the feature down into a sequence of small, reviewable pull requests",
            "Approve it immediately to save time",
            "Delete the repository",
            "Ask an AI model to approve it"
          ],
          "c": 0,
          "why": "Decomposing massive diffs into bite-sized PRs protects the team from cognitive overload."
        },
        {
          "q": "What is the 'Accountability Principle' for authors using AI coding tools?",
          "a": [
            "The human author is 100% responsible for every line in the PR and must be able to explain how it works upon request",
            "The AI company is liable for any bugs",
            "The reviewer is entirely at fault if a bug slips through",
            "No one is responsible"
          ],
          "c": 0,
          "why": "Engineers must fully understand and own the code they propose to merge, regardless of how it was generated."
        }
      ],
      "next": {
        "title": "Establishing Human Verification Gates",
        "desc": "Define absolute human approval gates for critical production paths."
      }
    },
    {
      "n": 8,
      "id": "human-verification-gates",
      "title": "Establishing Human Verification Gates",
      "topic": "Verification Gates",
      "anim": "Generic",
      "lede": "Establishing mandatory human verification gates for security, payments, infrastructure, and production deployments.",
      "winShort": "You have completed the AI-Assisted Code Review course.",
      "missionLink": "Mastering establishing human verification gates across modern software engineering",
      "sec1": {
        "title": "Core principles of Establishing Human Verification Gates",
        "content": "<p>Autonomous agents are extraordinary tools, but in production engineering, <strong>complete autonomy without guardrails is reckless</strong>. A model with unconstrained deployment access can drop production database tables, expose customer PII, or incur runaway cloud computing bills.</p>",
        "keyIdea": "Establishing mandatory human verification gates for security, payments, infrastructure, and production deployments."
      },
      "predict": {
        "q": "Why must certain critical architectural operations always require mandatory human verification gates?",
        "a": [
          "The blast radius of failure in financial, security, and data storage systems is catastrophic and cannot be left to probabilistic automation",
          "Automated tools are physically unable to deploy software",
          "Human verification is required by internet cables",
          "Computers refuse to process credit cards"
        ],
        "c": 0,
        "why": "High-consequence operations carry severe business and legal risks that demand accountable human judgment.",
        "prompt": "Why must certain critical architectural operations always require mandatory human verification gates?",
        "options": [
          "The blast radius of failure in financial, security, and data storage systems is catastrophic and cannot be left to probabilistic automation",
          "Automated tools are physically unable to deploy software",
          "Human verification is required by internet cables",
          "Computers refuse to process credit cards"
        ],
        "answer": 0,
        "explanation": "High-consequence operations carry severe business and legal risks that demand accountable human judgment."
      },
      "sec2": {
        "title": "The Human Verification Gate",
        "content": "<p>Mature engineering organizations enforce <strong>Mandatory Human Verification Gates</strong>:</p>"
      },
      "diagram": {
        "title": "The Human Verification Gate",
        "caption": "Placing human judgment at the boundary of high consequence",
        "steps": [
          {
            "title": "Automated Fast Loop",
            "lines": [
              "Linting, unit tests, preview deploy",
              "AI security scan & PR summary",
              "100% automated in CI"
            ]
          },
          {
            "title": "The Human Gate",
            "lines": [
              "Senior engineer review",
              "Audits financial, auth, & migrations",
              "Accountable decision to ship"
            ]
          },
          {
            "title": "Production Release",
            "lines": [
              "Promoted safely to customers",
              "Zero catastrophic regressions"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Automated Fast Loop",
            "lines": [
              "Linting, unit tests, preview deploy",
              "AI security scan & PR summary",
              "100% automated in CI"
            ]
          },
          {
            "title": "The Human Gate",
            "lines": [
              "Senior engineer review",
              "Audits financial, auth, & migrations",
              "Accountable decision to ship"
            ]
          },
          {
            "title": "Production Release",
            "lines": [
              "Promoted safely to customers",
              "Zero catastrophic regressions"
            ]
          }
        ]
      },
      "sec3": {
        "title": "High-Consequence Gate Zones",
        "content": "<ul><li><strong>1. Production Database Migrations:</strong> Modifying existing tables, dropping columns, or backfilling data must be approved by a human engineer.</li><li><strong>2. Financial & Payment Logic:</strong> Any code altering pricing, currency rounding, billing schedules, or payout workflows requires senior review.</li><li><strong>3. Authentication & Security Boundaries:</strong> Changes to JWT verification, password hashing, session tokens, or RBAC permissions require a human security gate.</li><li><strong>4. Production Deployment:</strong> Merging to main or promoting to production is triggered exclusively by human sign-off.</li></ul><pre><code># CI/CD Pipeline with Mandatory Human Verification Gate:\n# Stage 1: Automated Tests & Linters  -> AUTOMATED (Fast)\n# Stage 2: Ephemeral Preview Deploy    -> AUTOMATED (Sandbox)\n# Stage 3: AI Security Review Report  -> AUTOMATED (Findings posted to PR)\n# -------------------- MANDATORY HUMAN VERIFICATION GATE --------------------\n# Stage 4: Senior Engineer Sign-Off   -> MANUAL (Reviewer inspects diff & logs)\n# Stage 5: Production Deployment      -> MANUAL (Human clicks 'Promote')</code></pre><div class=\"callout\"><p><strong>The Final Principle:</strong> Automate everything up to the verification gate: running tests, linting, preview builds, and risk analysis. But keep the final gate firmly in human hands.</p></div>"
      },
      "trace": {
        "title": "High-Consequence Gate Zones",
        "caption": "Where human verification is non-negotiable",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Establishing Human Verification Gates"
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
              "step": "Financial Billing"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Data Persistence"
            }
          },
          {
            "line": 3,
            "vars": {
              "step": "Security & Identity"
            }
          }
        ],
        "code": [
          "# Tracing Establishing Human Verification Gates",
          "def execute_flow():",
          "    # Establishing mandatory human verification gates fo...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the verification gates sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Critical operations like database migrations and billing changes require mandatory {1} verification gates to prevent {2} failures."
        ],
        "blanks": [
          {
            "a": [
              "human"
            ],
            "why": "Accountable developer sign-off"
          },
          {
            "a": [
              "catastrophic"
            ],
            "why": "Severe business or data-loss outages"
          }
        ]
      },
      "win": "You have completed the AI-Assisted Code Review course.",
      "nextTasks": [
        "Audit your project code and identify where establishing human verification gates applies.",
        "Author a unit test or verification script exercising establishing human verification gates.",
        "Document team architectural conventions regarding establishing human verification gates."
      ],
      "primarySource": "Industry standards and best practices for Establishing Human Verification Gates.",
      "quiz": [
        {
          "q": "What is the 'blast radius' of a software failure?",
          "a": [
            "The scope, severity, and financial or operational impact of a potential failure on customers and business operations",
            "The physical explosion of a computer power supply",
            "The size of the git repository folder",
            "The number of lines of CSS in a project"
          ],
          "c": 0,
          "why": "Blast radius measures how much damage a defect can inflict on users, data, and revenue."
        },
        {
          "q": "Which of the following operations should NEVER be fully delegated to autonomous AI agents without human approval?",
          "a": [
            "Executing irreversible database schema migrations or dropping production data tables",
            "Fixing a typo in documentation",
            "Formatting code with Black",
            "Sorting import statements"
          ],
          "c": 0,
          "why": "Dropping tables or modifying production databases can cause permanent, irreversible data loss."
        },
        {
          "q": "How does an automated preview deployment assist the human verification gate?",
          "a": [
            "It allows human reviewers to interact with the working feature in an isolated sandbox environment before approving production release",
            "It charges customer credit cards automatically",
            "It deletes all unit tests",
            "It replaces the production server"
          ],
          "c": 0,
          "why": "Preview environments provide empirical proof that the UI and backend integrate correctly in a safe sandbox."
        },
        {
          "q": "What is the ultimate purpose of combining AI automation with human verification gates?",
          "a": [
            "Maximizing development velocity while maintaining uncompromising standards for safety, reliability, and security",
            "Making software engineering 100% effortless",
            "Eliminating human programmers",
            "Reducing server storage"
          ],
          "c": 0,
          "why": "Automation accelerates mechanical workflows, while human gates ensure safety and strategic quality."
        }
      ],
      "next": {
        "title": "Next Course: Working With AI-Generated Architecture",
        "desc": "Learn how to keep software structure coherent and prevent architectural drift."
      }
    }
  ]
};

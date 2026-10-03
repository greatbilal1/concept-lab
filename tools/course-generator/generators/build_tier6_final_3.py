import os
import sys
sys.path.append(os.path.dirname(__file__))
from helpers import build_lesson, save_course

# ==============================================================================
# COURSE 58: ai-assisted-refactoring
# ==============================================================================
def make_course_58():
    lessons = [
        build_lesson(
            1, "test-suite-as-safety-net", "The Test Suite as the Mandatory Safety Net", "Safety Net",
            "Why comprehensive automated tests are the mandatory prerequisite before initiating large-scale AI refactoring.",
            "What happens if you ask an AI agent to refactor a large legacy module that has zero automated tests?",
            ["The agent may make breaking behavioral changes that go undetected until customers report outages in production", "The agent will refuse to edit files", "The operating system blocks refactoring", "The git repository is deleted"],
            0, "Without tests, neither the human nor the agent has any automated way to detect subtle regressions.",
            [
                "<p>Refactoring without tests is not refactoring; it is an act of wild, reckless faith. When an AI agent performs sweeping structural modifications across a codebase, it can alter hundreds of lines in seconds. If you do not have an automated safety net, you are flying blind.</p>",
                "<p>Before embarking on any AI-assisted refactoring, you must establish the <strong>Safety Net Prerequisite</strong>:</p>",
                "<ul><li><strong>1. Baseline Green:</strong> Every existing test must pass 100% before changing a single line of code.</li><li><strong>2. High Behavioral Coverage:</strong> If the target module lacks tests, instruct the agent to write <strong>Characterization Tests</strong> first, locking down current inputs and outputs.</li><li><strong>3. Fast Execution:</strong> The test suite must run locally in seconds, allowing the agent to verify every micro-edit.</li></ul>",
                "<pre><code># The Refactoring Golden Protocol:\n1. Run `pytest tests/test_billing.py` -> 100% GREEN (Baseline established)\n2. Agent performs targeted refactoring (e.g. Extract Service)\n3. Run `pytest tests/test_billing.py` -> 100% GREEN (Behavior preserved!)\n4. If ANY test fails -> Immediate `git checkout` revert. Take a smaller step.</code></pre>",
                "<div class=\"callout\"><p><strong>The Iron Law:</strong> Never allow an agent to refactor code without a passing test suite. If tests do not exist, writing characterization tests is Task #1.</p></div>"
            ],
            "The Refactoring Safety Net", "How tests protect against agent regressions",
            [
                {"title": "1. Baseline Established", "lines": ["All tests pass 100%", "Current behavior locked"]},
                {"title": "2. Agent Refactors", "lines": ["Extracts classes & modules", "Tests run in 500ms"]},
                {"title": "3. Immediate Feedback", "lines": ["Green -> Commit safely", "Red -> Revert instantly"]}
            ],
            "Refactoring Without Tests (Danger)", "Blind structural modification",
            [
                {"title": "Untested Monolith", "lines": ["Agent rewrites 500 lines", "Looks plausible, syntax passes"]},
                {"title": "Hidden Regression", "lines": ["Subtle edge-case broken", "Catastrophic production outage"]}
            ],
            "Complete the refactoring safety sentence",
            "Before initiating AI refactoring, developers must establish an automated {1} of tests that execute in {2} to catch regressions.",
            [
                {"answer": "safety net", "hint": "Protection against unintended changes", "options": ["safety net", "firewall", "database"]},
                {"answer": "seconds", "hint": "Fast local feedback loop", "options": ["seconds", "days", "months"]}
            ],
            [
                {"q": "What must you do first if an agent is tasked with refactoring an untested legacy file?", "a": ["Instruct the agent to write characterization tests to lock down current behavior before modifying production code", "Start refactoring immediately", "Delete the file and start over", "Disable git version control"], "c": 0, "why": "Characterization tests create the necessary safety net before structural changes begin."},
                {"q": "How does a fast test suite empower an AI agent during refactoring?", "a": ["The agent can run tests after every single micro-edit, verifying structural changes in real time", "It compiles code into assembly", "It makes the internet faster", "It reduces GPU temperature"], "c": 0, "why": "Sub-second feedback loops keep the agent operating within verified green boundaries."},
                {"q": "What should an agent do if a test fails during a refactoring step?", "a": ["Revert the last change immediately to return to the known green state, then try a smaller step", "Change the test assertion so that it passes", "Ignore the test failure and proceed", "Delete the test suite"], "c": 0, "why": "Immediate reverts maintain codebase stability and prevent compound debugging confusion."},
                {"q": "Can fixing bugs be combined with a refactoring task?", "a": ["No; refactoring strictly preserves observable behavior; bug fixes change behavior and belong in separate commits", "Yes; all edits should be combined into one massive commit", "Only if the bug is small", "Only in frontend code"], "c": 0, "why": "Separating behavior-preserving refactors from bug fixes ensures clean, risk-free reviews."}
            ],
            "You understand the mandatory role of automated test suites as refactoring safety nets.",
            "Mechanical Refactorings: Renames, Modernizations, Type Additions", "Leverage AI for high-speed, mechanical codebase modernizations."
        ),
        build_lesson(
            2, "mechanical-refactorings", "Mechanical Refactorings: Renames, Modernizations, Type Additions", "Mechanical Tasks",
            "Using AI agents for mechanical refactorings: upgrading syntax, adding type hints, and bulk renaming.",
            "Why are AI coding agents exceptionally well-suited for mechanical refactorings across codebases?",
            ["Mechanical tasks follow repetitive, well-defined rules (like adding type hints or upgrading Python syntax) across many files", "Agents only understand mechanical engineering", "Human developers cannot rename variables", "Compilers forbid manual type annotations"],
            0, "Mechanical modernizations require high-volume consistency, which agents execute tirelessly without fatigue.",
            [
                "<p>Human software engineers hate mechanical busywork. Upgrading 80 files from Python 3.8 `Optional[Union[int, str]]` to Python 3.10+ `int | str | None` is tedious and mentally draining. Humans get sloppy, make typos, and burn valuable energy.</p>",
                "<p>For AI coding agents, however, <strong>mechanical refactoring is the sweet spot</strong>. Agents can execute repetitive, rule-based modernizations across entire modules with tireless precision:</p>",
                "<ul><li><strong>Syntax Modernization:</strong> Converting legacy string formatting (`%s` or `.format()`) to f-strings; updating dictionary merges to `|`.</li><li><strong>Adding Strict Type Annotations:</strong> Inferring types from function signatures, docstrings, and tests, and adding complete type hints across legacy modules.</li><li><strong>Consistent Renaming:</strong> Renaming legacy snake_case database columns or camelCase JavaScript variables across multi-file boundaries.</li><li><strong>Import Standardization:</strong> Converting relative imports to absolute imports or organizing imports cleanly.</li></ul>",
                "<pre><code># The Mechanical Prompt:\n\"Perform a mechanical syntax modernization across all files in src/storage/:\n1. Upgrade all typing imports: replace `Optional[T]` with `T | None`.\n2. Upgrade all union types: replace `Union[A, B]` with `A | B`.\n3. Run `mypy src/storage/` and `pytest tests/test_storage.py` to verify zero regressions.\"</code></pre>",
                "<div class=\"callout\"><p><strong>High Leverage:</strong> Use agents for the mechanical modernizations that you have been putting off for months. They will do in 15 minutes what would take you a weekend.</p></div>"
            ],
            "Mechanical Modernization Pipeline", "Automating tedious syntax upgrades",
            [
                {"title": "1. Define Transformation", "lines": ["Replace Union[A, B] with A | B", "Add explicit return type hints"]},
                {"title": "2. Agent Bulk Execution", "lines": ["Modifies 40 files consistently", "Tireless, uniform application"]},
                {"title": "3. Automated Verification", "lines": ["Mypy type check passes", "Pytest suite passes 100%"]}
            ],
            "Human vs AI Refactoring Efficiency", "Delegating the repetitive busywork",
            [
                {"title": "Human Developer", "lines": ["4 hours of tedious editing", "Prone to typos and review fatigue"]},
                {"title": "AI Agent", "lines": ["3 minutes of execution", "Verified instantly by type checker"]}
            ],
            "Complete the mechanical refactoring sentence",
            "AI agents excel at mechanical refactorings like syntax modernizations and adding {1} annotations because they follow {2} rules tirelessly.",
            [
                {"answer": "type", "hint": "Type hint signatures and contracts", "options": ["type", "hardware", "network"]},
                {"answer": "well-defined", "hint": "Clear, rule-based transformations", "options": ["well-defined", "random", "chaotic"]}
            ],
            [
                {"q": "What is an example of a mechanical refactoring ideal for an AI agent?",
                 "a": ["Converting legacy dictionary formatting to modern f-strings across an entire codebase", "Deciding the company's 3-year product strategy", "Negotiating vendor pricing with AWS", "Choosing a new company name"],
                 "c": 0, "why": "F-string modernization is a rule-based syntactic transformation across many files."},
                {"q": "How do you verify that a mechanical type-annotation refactoring did not break code?",
                 "a": ["Run the static type checker (Mypy/TypeScript) and execute the automated test suite", "Ask the agent if it works", "Check the file size on disk", "Wait for users to complain"],
                 "c": 0, "why": "Type checkers and test suites provide objective verification of mechanical integrity."},
                {"q": "Why is running a linter after an AI mechanical refactoring essential?",
                 "a": ["To ensure that formatting, indentation, and import order conform strictly to project style standards", "To compile Python into WebAssembly", "To reduce internet bills", "To turn off the terminal"],
                 "c": 0, "why": "Linters catch formatting anomalies and import inconsistencies automatically."},
                {"q": "What constraint should you provide when asking an agent to perform bulk renames?",
                 "a": ["Update all call sites and test files simultaneously to prevent broken references", "Only rename functions in one file", "Never update imports", "Use random character strings"],
                 "c": 0, "why": "Renames must be applied across both definition and call sites to avoid runtime NameErrors."}
            ],
            "You know how to leverage AI agents for fast, accurate mechanical refactorings.",
            "Bulk Codemods and AST Transformations with AI", "Combine AST codemods with LLMs for scalable codebase refactorings."
        ),
        build_lesson(
            3, "bulk-codemods-ast-transforms", "Bulk Codemods and AST Transformations with AI", "Codemods",
            "Combining Abstract Syntax Tree (AST) tools (LibCST, jscodeshift) with LLM reasoning for massive codebase migrations.",
            "Why is combining AST codemods with LLMs superior to using regex string search-and-replace for large migrations?",
            ["AST tools understand the structural syntax tree of code, eliminating syntax breakage and false positive replacements", "Regex is illegal in commercial software", "AST tools run in the cloud", "Regex only works on HTML"],
            0, "AST tools operate on code structure rather than raw characters, making bulk transforms syntax-safe.",
            [
                "<p>When migrating 500 files to a new framework version (e.g. React class components to hooks, or SQLAlchemy 1.4 to 2.0), raw text regex search-and-replace is a disaster. Regex doesn't know scope, comments, or nested expressions. It replaces strings inside comments and breaks code syntax.</p>",
                "<p>The professional approach pairs <strong>AST Codemods with LLMs</strong>:</p>",
                "<ul><li><strong>AST Codemod (Deterministic Machine):</strong> Uses libraries like `LibCST` (Python) or `jscodeshift` (JavaScript) to parse code into a syntax tree, rewrite nodes systematically, and preserve formatting.</li><li><strong>AI Agent (Semantic Helper):</strong> Writes the AST codemod script, inspects edge cases that the codemod couldn't handle, and fixes nuances that require semantic reasoning.</li></ul>",
                "<pre><code># Prompting an Agent to Author a LibCST Codemod:\n\"Write a LibCST transformer script that rewrites all calls to `db.query(User).filter(...)`\ninto modern SQLAlchemy 2.0 `db.execute(select(User).where(...))`.\nEnsure comments and whitespace are preserved.\nTest the transformer against tests/test_fixtures.py before applying to src/.\"</code></pre>",
                "<p>By having the agent write an AST codemod rather than editing 500 files by hand, you get 100% deterministic, repeatable transformations that run in seconds across your entire repository.</p>",
                "<div class=\"callout\"><p><strong>The Scale Rule:</strong> If a refactoring affects more than 20 files, have the agent author an AST codemod script rather than editing files individually.</p></div>"
            ],
            "AST Codemod vs Regex Search-and-Replace", "Structural precision vs brittle string matching",
            [
                {"title": "Regex Search-and-Replace (Fragile)", "lines": ["Matches text inside strings & comments", "Breaks nested parenthesis & indentation", "High regression risk"]},
                {"title": "AST Codemod (Syntax-Safe)", "lines": ["Parses code into abstract syntax tree", "Transforms specific AST nodes", "100% syntactically valid result"]}
            ],
            "The Agent-Codemod Hybrid Workflow", "Leveraging the strengths of both tools",
            [
                {"title": "1. Agent Writes Codemod", "lines": ["Authors LibCST / jscodeshift script", "Captures migration transformation"]},
                {"title": "2. Run Across 500 Files", "lines": ["Executes deterministically in 3s", "Transforms entire codebase safely"]},
                {"title": "3. Agent Polishes Nuances", "lines": ["Fixes remaining 2% complex edge cases", "Verifies suite passes green"]}
            ],
            "Complete the codemod sentence",
            "AST codemods operate on the structural {1} of code, ensuring that bulk transformations preserve {2} validity.",
            [
                {"answer": "syntax tree", "hint": "Abstract representation of code structure", "options": ["syntax tree", "hard drive", "git branch"]},
                {"answer": "syntactic", "hint": "Valid programming language grammar", "options": ["syntactic", "financial", "emotional"]}
            ],
            [
                {"q": "What is an Abstract Syntax Tree (AST)?",
                 "a": ["A tree representation of the abstract syntactic structure of source code written in a programming language", "A botanical diagram of fruit trees", "A database schema diagram", "A git commit network graph"],
                 "c": 0, "why": "An AST represents program structure hierarchically for compilers and analysis tools."},
                {"q": "What library is commonly used in the Python ecosystem for lossless syntax tree codemods?",
                 "a": ["LibCST", "requests", "django", "numpy"],
                 "c": 0, "why": "LibCST parses and transforms Python syntax trees while preserving comments and whitespace."},
                {"q": "Why is having an agent write a codemod better than having it manually edit 500 files?",
                 "a": ["A codemod is deterministic, fast, testable, and can be rerun repeatedly across branches", "It consumes 100x more tokens", "It deletes all git branches", "Manual editing is faster"],
                 "c": 0, "why": "Codemods execute in seconds across massive repositories with guaranteed structural consistency."},
                {"q": "How do you verify that an AST codemod script is safe before running it across the whole repo?",
                 "a": ["Test the codemod on a representative fixture file and verify that the output compiles and passes tests", "Run it directly on production servers", "Delete the test suite", "Ask someone on Twitter"],
                 "c": 0, "why": "Testing codemods on isolated fixture files proves correctness before widespread execution."}
            ],
            "You know how to combine AI agents with AST codemods for scalable codebase migrations.",
            "Step-by-Step Monolith Decomposition", "Decompose large monolithic files into cohesive modular components."
        ),
        build_lesson(
            4, "step-by-step-monolith-decomposition", "Step-by-Step Monolith Decomposition", "Monolith Decomposition",
            "Decomposing 2,000-line god classes and monolithic files using safe, incremental slicing.",
            "What is the biggest risk when attempting to break up a 2,000-line monolithic file with an AI agent?",
            ["Attempting a big-bang rewrite in one turn, resulting in dropped methods, missing imports, and broken references", "The agent's computer battery dying", "The file being locked by git", "Python running out of memory"],
            0, "Big-bang refactoring of massive files overwhelms context and drops critical logic.",
            [
                "<p>Every legacy project has one: the 3,000-line `god_service.py` file that handles billing, user onboarding, email dispatch, and database queries. Trying to prompt an agent with: <em>'Split this 3,000-line file into clean micro-modules'</em> is a guaranteed recipe for disaster.</p>",
                "<p>The only safe way to decompose a monolith with AI is <strong>Step-by-Step Slicing</strong>:</p>",
                "<ul><li><strong>Step 1: Identify One Cohesive Cluster:</strong> Find a self-contained group of helper functions (e.g. email notifications) with minimal external dependencies.</li><li><strong>Step 2: Extract to New Module:</strong> Create `src/services/notifications.py` and move the functions there.</li><li><strong>Step 3: Re-export from Monolith:</strong> In the monolith, import the functions from the new module (`from .notifications import send_email`). This preserves backward compatibility for all existing callers!</li><li><strong>Step 4: Verify Tests Pass:</strong> Run the test suite. If green, commit!</li><li><strong>Step 5: Repeat:</strong> Move on to the next cluster until the monolith is an empty shell.</li></ul>",
                "<pre><code># The Backward-Compatible Re-Export Seam in god_service.py:\n# Instead of updating 50 caller files at once:\nfrom src.services.notifications import send_receipt_email # Re-exported!\n# Existing callers continue working seamlessly without breaking changes!</code></pre>",
                "<div class=\"callout\"><p><strong>The Golden Seam:</strong> Re-exporting extracted symbols from the original file allows you to decompose a monolith without modifying 50 caller files simultaneously!</p></div>"
            ],
            "Incremental Slicing vs Big Bang", "Safe extraction vs chaotic breakage",
            [
                {"title": "Big-Bang Extraction (Fails)", "lines": ["Move 20 functions across 8 files", "50 broken imports & syntax errors", "Impossible to debug"]},
                {"title": "Incremental Slicing (Succeeds)", "lines": ["Extract 1 cohesive cluster", "Re-export from original file", "Tests pass green on every step"]}
            ],
            "The Re-Export Migration Seam", "Preserving backward compatibility during extraction",
            [
                {"title": "New Clean Module", "lines": ["src/notifications.py", "Pure, focused responsibility"]},
                {"title": "Monolith Re-Export", "lines": ["from notifications import *", "Existing callers unaffected"]},
                {"title": "Safe Call Site Migration", "lines": ["Migrate callers gradually", "Zero breaking changes"]}
            ],
            "Complete the monolith decomposition sentence",
            "Safely decompose monolithic files by extracting one {1} cluster at a time and re-exporting symbols to maintain backward {2}.",
            [
                {"answer": "cohesive", "hint": "Closely related group of functions", "options": ["cohesive", "random", "temporary"]},
                {"answer": "compatibility", "hint": "Ensuring existing callers don't break", "options": ["compatibility", "licensing", "storage"]}
            ],
            [
                {"q": "Why is re-exporting extracted functions from the original monolithic file so powerful during refactoring?",
                 "a": ["Existing external callers continue to work without modification while internals are cleanly relocated", "It makes the file size zero bytes", "It speeds up Python imports by 10x", "It disables type checking"],
                 "c": 0, "why": "Re-exporting preserves caller compatibility, allowing extraction without massive multi-file ripple effects."},
                {"q": "How many functions should an agent extract in a single refactoring turn?",
                 "a": ["A single cohesive cluster or class at a time, followed by immediate test verification", "All 200 functions at once", "Zero functions", "As many as can fit in RAM"],
                 "c": 0, "why": "Small, incremental steps keep changes manageable and verifiable."},
                {"q": "What should you do after each extraction step succeeds?",
                 "a": ["Run tests and make an atomic git commit before proceeding to the next extraction", "Push immediately to production without tests", "Delete the git history", "Shut down the computer"],
                 "c": 0, "why": "Atomic commits create savepoints that can be reverted to if subsequent extractions encounter friction."},
                {"q": "When is a monolithic file officially considered decomposed?",
                 "a": ["When its responsibilities have been cleanly relocated to cohesive domain modules and the original file is either deprecated or an orchestrator", "After 2 hours of editing", "When the file is renamed", "When it is converted to JSON"],
                 "c": 0, "why": "Decomposition is complete when domain responsibilities live in dedicated, cohesive modules."}
            ],
            "You know how to safely decompose monolithic files without breaking callers.",
            "Next Course: Managing Large AI Coding Projects", "Learn how to structure multi-day, multi-phase projects with AI coding agents."
        ),
        build_lesson(
            5, "extracting-services-modules", "Extracting Services and Modules with Agent Guidance", "Service Extraction",
            "Extracting services and repositories: defining interfaces, injecting dependencies, and maintaining encapsulation.",
            "What architectural pattern should you introduce when extracting database persistence logic from an application service?",
            ["The Repository pattern, decoupling business workflows from SQL and ORM queries", "The Singleton pattern", "The Global Variable pattern", "The Raw Socket pattern"],
            0, "The Repository pattern decouples business services from storage mechanisms, enabling test isolation.",
            [
                "<p>When codebases grow organically, application services often become tightly coupled to database queries, third-party APIs, and file systems. You cannot test your user registration logic without sending real emails or writing to a real database.</p>",
                "<p>Refactoring with an AI agent allows you to cleanly introduce <strong>Architectural Seams</strong>:</p>",
                "<ul><li><strong>1. Extract Repository Interface:</strong> Define an abstract interface (`UserRepository`) specifying required queries (`get_by_id`, `save`).</li><li><strong>2. Implement Concrete Adapter:</strong> Move the raw SQLAlchemy or SQL queries into `PostgresUserRepository`.</li><li><strong>3. Inject Dependency:</strong> Pass the repository into the service constructor via Dependency Injection.</li></ul>",
                "<pre><code># The Service Extraction Pattern\n# 1. Abstract Port (Interface)\nclass UserRepository(Protocol):\n    def get_by_email(self, email: str) -> User | None: ...\n    def save(self, user: User) -> None: ...\n\n# 2. Pure Application Service (Decoupled!)\nclass RegistrationService:\n    def __init__(self, users: UserRepository, mailer: Mailer):\n        self.users = users\n        self.mailer = mailer\n\n    def register(self, email: str, password: str) -> User:\n        if self.users.get_by_email(email):\n            raise UserAlreadyExistsError()\n        user = User(email=email, password_hash=hash(password))\n        self.users.save(user)\n        self.mailer.send_welcome(user)\n        return user</code></pre>",
                "<div class=\"callout\"><p><strong>The Payoff:</strong> `RegistrationService` is now 100% decoupled from PostgreSQL and SendGrid! It can be tested in-memory in 2 milliseconds using mock or fake repositories.</p></div>"
            ],
            "Service Extraction Flow", "Decoupling business logic from infrastructure",
            [
                {"title": "Coupled Monolith", "lines": ["Service contains raw SQL & SMTP calls", "Impossible to test in isolation"]},
                {"title": "Define Interfaces", "lines": ["UserRepository & Mailer Protocols", "Abstract contracts in application layer"]},
                {"title": "Decoupled Service", "lines": ["Receives dependencies in constructor", "Blazing fast, 100% testable in RAM"]}
            ],
            "Dependency Injection Seam", "Plugging adapters into application core",
            [
                {"title": "Production Config", "lines": ["Service(PostgresRepo(), SendGridMailer())", "Real production infrastructure"]},
                {"title": "Test Config", "lines": ["Service(InMemoryRepo(), MockMailer())", "Instant in-memory verification"]}
            ],
            "Complete the service extraction sentence",
            "Extracting services introduces abstract {1} to decouple business logic from database and network {2}.",
            [
                {"answer": "interfaces", "hint": "Protocols and abstract contracts", "options": ["interfaces", "terminals", "browsers"]},
                {"answer": "infrastructure", "hint": "Databases, emailers, and external APIs", "options": ["infrastructure", "marketing", "licenses"]}
            ],
            [
                {"q": "What is the primary benefit of the Repository pattern in modern architecture?",
                 "a": ["It isolates domain and application services from database query details, allowing easy testing with in-memory fakes", "It automatically backs up the database to tape", "It makes SQL queries run 10x faster", "It eliminates the need for primary keys"],
                 "c": 0, "why": "Repositories encapsulate persistence mechanisms behind clean domain interfaces."},
                {"q": "How does Dependency Injection facilitate unit testing of extracted services?",
                 "a": ["Tests can pass fast in-memory fakes or mocks instead of real databases and network clients", "It compiles Python to machine code", "It removes the need for test assertions", "It turns off the internet"],
                 "c": 0, "why": "Passing dependencies into constructors makes swapping real implementations for test doubles trivial."},
                {"q": "What is a 'Protocol' in Python typing?",
                 "a": ["A structural subtyping mechanism (duck typing) that defines an interface contract without requiring explicit inheritance", "An internet networking standard like HTTP", "A security encryption key", "A git commit hook"],
                 "c": 0, "why": "typing.Protocol enables clean interface definitions matching Go and TypeScript interfaces."},
                {"q": "What should an agent do when extracting a service from an existing controller?",
                 "a": ["Move the business rules to the new service and leave the controller responsible only for HTTP request parsing and response formatting", "Delete the controller", "Move all HTML into the service", "Create a new database table"],
                 "c": 0, "why": "Controllers should handle HTTP delivery concerns, delegating business orchestration to services."}
            ],
            "You know how to extract services and repositories using clean dependency injection seams.",
            "Verifying Invariants Across Large Multi-File Diffs", "Maintain system invariants across extensive multi-file transformations."
        ),
        build_lesson(
            6, "verifying-invariants-multi-file-diffs", "Verifying Invariants Across Large Multi-File Diffs", "Multi-File Verification",
            "Auditing multi-file refactoring diffs to verify that global invariants and security rules were not compromised.",
            "What is a common risk when an agent performs a refactoring that touches 25 different files?",
            ["The agent may update function signatures in some files while missing call sites in others, causing runtime TypeErrors", "The operating system running out of file handles", "The git branch becoming read-only", "All unit tests automatically deleting themselves"],
            0, "Incomplete multi-file refactoring leaves orphaned call sites that fail at runtime.",
            [
                "<p>Refactoring that spans multiple files is where AI coding agents shine—and where they introduce the most subtle bugs. An agent might cleanly update a function signature in `src/billing/service.py` and update 5 callers, but overlook a 6th caller buried in a background task.</p>",
                "<p>To verify that global invariants hold across large multi-file diffs, enforce the <strong>Three-Tier Verification Audit</strong>:</p>",
                "<ul><li><strong>1. Whole-Project Static Type Check:</strong> Run `mypy src/` or `tsc --noEmit`. Static type checking analyzes the entire call graph, instantly catching any call site with outdated argument counts or types.</li><li><strong>2. Whole-Project Lint & Symbol Check:</strong> Run `ruff check src/` to ensure no unused imports or undefined variable references remain.</li><li><strong>3. Full Test Suite Execution:</strong> Execute the complete unit and integration test suite, not just the test file closest to the edit.</li></ul>",
                "<pre><code># The Multi-File Verification Command Chain:\n$ mypy src/ tests/               # 1. Mathematical type check across all call sites\n$ ruff check src/ tests/         # 2. Syntax, dead imports, and naming check\n$ pytest                          # 3. Full behavioral test suite\n# ONLY when all 3 pass with code 0 is the multi-file diff approved!</code></pre>",
                "<div class=\"callout\"><p><strong>The Golden Verification:</strong> Never rely on human visual review alone for a 20-file diff. Whole-project type checking is your mathematical proof of consistency.</p></div>"
            ],
            "The Multi-File Verification Chain", "Three automated gates protecting system consistency",
            [
                {"title": "1. Static Type Check (Mypy/TS)", "lines": ["Scans all call sites across repo", "Catches mismatched parameter types"]},
                {"title": "2. Linter & Dead Code (Ruff)", "lines": ["Catches orphaned imports & variables", "Ensures syntax cleanliness"]},
                {"title": "3. Full Test Suite (Pytest)", "lines": ["Executes full regression suite", "Verifies behavioral preservation"]}
            ],
            "Orphaned Call Site Trap", "The danger of partial multi-file edits",
            [
                {"title": "Agent Updates Signature", "lines": ["def charge(user_id, amount_cents)", "Updates 4 primary callers"]},
                {"title": "Overlooked Background Task", "lines": ["Worker still passes 1 argument!", "Crashes with TypeError in production"]},
                {"title": "Caught by Mypy", "lines": ["Mypy flags line 82 of worker.py", "Agent fixes caller before merge"]}
            ],
            "Complete the multi-file verification sentence",
            "Large multi-file diffs must be verified using whole-project {1} checking to prove that all call {2} match updated signatures.",
            [
                {"answer": "type", "hint": "Static type analysis like Mypy", "options": ["type", "font", "license"]},
                {"answer": "sites", "hint": "Locations where functions are invoked", "options": ["sites", "browsers", "databases"]}
            ],
            [
                {"q": "Why is whole-project static type checking essential after an agent alters a function signature?",
                 "a": ["It traverses the entire codebase to mathematically verify that every single caller passes the correct arguments", "It compiles Python into machine code", "It reduces repository size", "It makes unit tests run in parallel"],
                 "c": 0, "why": "Type checkers inspect the complete call graph to catch mismatched parameters across all files."},
                {"q": "What happens if an engineer only runs the test file closest to the modified file during a large refactor?",
                 "a": ["Unrelated modules that depend on the modified code may be broken without being tested, leading to production outages", "The test runner crashes", "The code becomes read-only", "Git refuses to commit"],
                 "c": 0, "why": "Cross-module regressions are only caught by running the full test suite or dependent tests."},
                {"q": "How does git diff inspection help verify multi-file refactoring?",
                 "a": ["It allows the reviewer to verify that only intended files were modified and no unexpected files were touched by the agent", "It converts code to HTML", "It encrypts the commit", "It runs tests automatically"],
                 "c": 0, "why": "Inspecting git diff ensures the agent did not make rogue or unintended modifications outside task scope."},
                {"q": "What should you do if Mypy reports 15 errors after a multi-file refactoring diff?",
                 "a": ["Feed the exact Mypy error list back to the agent and instruct it to update the remaining call sites until Mypy passes", "Disable Mypy in CI", "Ignore the type errors and merge", "Delete the modified files"],
                 "c": 0, "why": "Providing the compiler error list directs the agent to fix the remaining call sites systematically."}
            ],
            "You know how to verify global invariants and call sites across large multi-file diffs.",
            "Rollback Strategies and Atomic Commit Discipline", "Master safe commit habits that make any refactoring instantly reversible."
        ),
        build_lesson(
            7, "rollback-strategies-atomic-commits", "Rollback Strategies and Atomic Commit Discipline", "Rollback Discipline",
            "Practicing atomic commit discipline: small revertible checkpoints, git hygiene, and instant rollback safety.",
            "What is an 'Atomic Commit' in git refactoring workflows?",
            ["A single commit that contains one complete, independent, and verified change that leaves the codebase in a working, passing state", "A commit written in nuclear energy laboratories", "A commit that contains 10,000 files", "A commit that breaks the build intentionally"],
            0, "Atomic commits represent self-contained, working increments that can be safely reviewed or reverted.",
            [
                "<p>When refactoring with AI agents, velocity is high. If you let an agent work for two hours without committing, you end up with a sprawling 40-file dirty working tree. If step 18 introduces a subtle bug, you cannot easily revert step 18 without discarding all 17 successful steps!</p>",
                "<p>The professional defense is <strong>Atomic Commit Discipline</strong>:</p>",
                "<ul><li><strong>One Logical Change Per Commit:</strong> Commit immediately after each successful micro-refactor (e.g. <em>'Extract calculate_discount to helper'</em>).</li><li><strong>Always Green on Commit:</strong> Every single commit in your git history must compile and pass tests 100%. Never commit broken code.</li><li><strong>Instant Rollback Safety:</strong> If an experimental refactoring step fails or leads to a dead end, you can run `git reset --hard HEAD` and return to a pristine green state in 0.5 seconds.</li></ul>",
                "<pre><code># The Atomic Commit Chain during Refactoring:\nCommit 1: 'test(billing): Add characterization tests for invoice calculation' (Green)\nCommit 2: 'refactor(billing): Extract tax calculation to TaxService' (Green)\nCommit 3: 'refactor(billing): Replace primitive float currency with Money Value Object' (Green)\nCommit 4: 'style(billing): Upgrade typing to Python 3.12 syntax' (Green)</code></pre>",
                "<p>Notice that every commit tells a clear story, preserves green tests, and can be individually git-reverted if an unforeseen problem emerges in production.</p>",
                "<div class=\"callout\"><p><strong>The Revert Muscle:</strong> Don't be afraid to revert! Throwing away 5 minutes of broken agent exploration is vastly cheaper than spending 45 minutes trying to untangle a messy diff.</p></div>"
            ],
            "Atomic Commit Progression", "Small, verifiable, independent steps",
            [
                {"title": "Commit 1 (Green)", "lines": ["Characterization tests added", "Zero production changes"]},
                {"title": "Commit 2 (Green)", "lines": ["Extract TaxService helper", "Tests pass 100%"]},
                {"title": "Commit 3 (Green)", "lines": ["Introduce Money Value Object", "Tests pass 100%"]}
            ],
            "Instant Revert Safety", "Zero-cost rollback on dead ends",
            [
                {"title": "Step 4 Fails", "lines": ["Agent attempts complex inheritance", "12 tests break, logic tangled"]},
                {"title": "git reset --hard", "lines": ["Discards step 4 in 200ms", "Returns safely to Commit 3 baseline"]},
                {"title": "Fresh Attempt", "lines": ["Try cleaner composition approach", "Zero baggage, total control"]}
            ],
            "Complete the atomic commit sentence",
            "Atomic commit discipline ensures that every git commit is a self-contained, {1} increment that leaves tests {2}.",
            [
                {"answer": "revertible", "hint": "Can be safely rolled back", "options": ["revertible", "random", "encrypted"]},
                {"answer": "green", "hint": "Passing 100% without failures", "options": ["green", "red", "untested"]}
            ],
            [
                {"q": "What is the primary advantage of making frequent atomic commits during an AI refactoring session?",
                 "a": ["You can instantly revert any failed experimental step without losing previously verified progress", "It uses more hard drive space", "It prevents other developers from pulling code", "It reduces developer salaries"],
                 "c": 0, "why": "Atomic checkpoints isolate failures, allowing instant rollback to the last known good state."},
                {"q": "What must be true of every commit in an atomic refactoring chain?",
                 "a": ["The entire test suite and linter must pass with zero errors, keeping git history deployable at any point", "It must contain at least 1,000 lines of code", "It must be written on a weekend", "It must change the database password"],
                 "c": 0, "why": "Every commit should leave the codebase in a healthy, deployable state."},
                {"q": "Why is 'git bisect' significantly more effective when teams follow atomic commit discipline?",
                 "a": ["Bisect can pinpoint the exact single logical change that introduced a regression rather than a massive 40-file omnibus blob", "Bisect runs on quantum computers", "Bisect only works on atomic commits", "Bisect deletes commits automatically"],
                 "c": 0, "why": "Small, single-purpose commits make isolating the cause of defects straightforward during bisection."},
                {"q": "What should a developer do if an agent spends 20 minutes making edits that result in broken tests across 15 files?",
                 "a": ["Discard the uncommitted changes with git reset/checkout and prompt the agent to take a smaller, simpler approach", "Merge the broken changes and push to production", "Delete the git repository", "Format the hard drive"],
                 "c": 0, "why": "Discarding tangled changes is fast and clean; restarting with a smaller step restores momentum."}
            ],
            "You know how to practice atomic commit discipline and maintain rollback safety.",
            "Post-Refactor Performance and Regression Audits", "Verify that refactored code preserved performance and latency characteristics."
        ),
        build_lesson(
            8, "post-refactor-performance-audits", "Post-Refactor Performance and Regression Audits", "Performance Audits",
            "Auditing refactored code for unintended performance regressions: N+1 queries, memory bloat, and algorithmic complexity.",
            "What common performance regression is frequently introduced during AI-assisted database refactorings?",
            ["The N+1 query problem, where accessing extracted properties inside a loop triggers dozens of individual SQL queries", "The CPU fan stopping", "The hard drive becoming read-only", "The database automatically deleting indexes"],
            0, "Extracted object models often introduce lazy-loading N+1 query loops that severely degrade database throughput.",
            [
                "<p>A refactoring can pass 100% of unit tests and still destroy production performance. When an agent refactors raw SQL queries into clean domain models or ORM classes, it frequently introduces subtle <strong>performance regressions</strong>.</p>",
                "<p>Common post-refactor performance regressions include:</p>",
                "<ul><li><strong>N+1 Database Queries:</strong> Moving property access into a helper method called inside a loop, causing 100 SQL queries instead of 1 `JOIN` query.</li><li><strong>Memory Bloat from Full Materialization:</strong> Replacing a memory-efficient generator or streaming query with a massive `list()` allocation in RAM.</li><li><strong>Algorithmic Complexity Degradation:</strong> Replacing an $O(1)$ dictionary lookup with an $O(N)$ list search inside a nested loop ($O(N^2)$ overall).</li></ul>",
                "<pre><code># The Post-Refactor Audit Checklist:\n1. QUERY COUNT AUDIT: Verify that query count did not jump from 1 to N+1.\n   (In pytest: use `django_assert_num_queries` or SQLAlchemy event listeners).\n2. BENCHMARK LATENCY: Run `pytest-benchmark` against core calculation loops.\n3. MEMORY PROFILING: Verify that batch processing still streams without RAM spikes.</code></pre>",
                "<p>Refactoring is only truly complete when the code is cleaner, tests are green, <strong>and performance is equal to or better than the original baseline</strong>.</p>",
                "<div class=\"callout\"><p><strong>The Final Metric:</strong> Clean code that takes 10 seconds to respond is not an improvement. Always verify that structural elegance did not sacrifice operational performance.</p></div>"
            ],
            "The N+1 Performance Regression", "How clean abstractions can hide database explosions",
            [
                {"title": "Original Raw SQL", "lines": ["1 query with JOIN", "Fetches 100 users + orders in 12ms"]},
                {"title": "Refactored Clean Model", "lines": ["Clean user.orders property", "Fires 1 query per user (101 queries!)", "Latency explodes to 850ms (Regression!)"]},
                {"title": "Audited Fix", "lines": ["Add eager loading (joinedload)", "Restores 1 query, keeps clean model"]}
            ],
            "Post-Refactor Verification Gates", "The complete definition of done",
            [
                {"title": "1. Tests Pass 100%", "lines": ["Functional behavior preserved", "Zero logic regressions"]},
                {"title": "2. Types & Linters Pass", "lines": ["Mypy & Ruff report 0 errors", "Contract integrity confirmed"]},
                {"title": "3. Performance Audited", "lines": ["Query counts & benchmarks verified", "Production-ready release"]}
            ],
            "Complete the performance audit sentence",
            "Post-refactor audits verify that structural improvements did not introduce unintended performance regressions like {1} queries or {2} bloat.",
            [
                {"answer": "N+1", "hint": "Looping query anti-pattern", "options": ["N+1", "binary", "terminal"]},
                {"answer": "memory", "hint": "RAM consumption and allocation", "options": ["memory", "font", "license"]}
            ],
            [
                {"q": "What is the N+1 query problem?",
                 "a": ["Executing one initial query to fetch parent records, followed by N separate queries inside a loop to fetch related child records", "A math equation in quantum mechanics", "A test that takes N+1 seconds to run", "A git branch naming convention"],
                 "c": 0, "why": "N+1 queries flood the database with network round-trips, severely degrading latency."},
                {"q": "How can you prevent N+1 query regressions during automated testing?",
                 "a": ["Use query count assertion fixtures (e.g. assert_num_queries) in integration tests to enforce query caps", "Disable the database", "Run tests only on production", "Turn off SQL logging"],
                 "c": 0, "why": "Query count assertions fail CI immediately if a refactoring introduces unexpected queries."},
                {"q": "Why is replacing a streaming generator with a full list comprehension dangerous for large datasets?",
                 "a": ["It forces the entire dataset into RAM at once, potentially causing Out-Of-Memory (OOM) crashes on large inputs", "List comprehensions are syntax errors in Python", "Generators run slower on the CPU", "Lists cannot be iterated over"],
                 "c": 0, "why": "Materializing large datasets in memory risks server crashes under high data volume."},
                {"q": "What is the final milestone in a successful AI-assisted refactoring workflow?",
                 "a": ["Passing all tests, satisfying static analysis, verifying performance metrics, and creating clean atomic commits", "Deleting the git repository", "Pushing to production without review", "Closing all issue tickets without testing"],
                 "c": 0, "why": "Comprehensive verification across behavior, types, and performance proves true refactoring success."}
            ],
            "You have completed the AI-Assisted Refactoring course.",
            "Next Course: Managing Large AI Coding Projects", "Learn how to orchestrate multi-day, multi-phase projects with AI coding agents."
        )
    ]

    glossary = [
        {"id": "safety", "title": "Safety & Mechanics", "terms": [
            {"term": "Safety Net Prerequisite", "def": "The rule that automated tests must pass 100% before initiating any structural code refactoring.", "lesson": 1, "tags": ["refactoring", "safety"]},
            {"term": "Mechanical Refactoring", "def": "Repetitive, rule-based code transformations (renames, syntax modernizations, type additions) ideal for AI execution.", "lesson": 2, "tags": ["refactoring", "automation"]},
            {"term": "AST Codemod", "def": "A script that parses and modifies the Abstract Syntax Tree of source code to execute deterministic bulk transformations.", "lesson": 3, "tags": ["tooling", "ast"]}
        ]},
        {"id": "decomposition", "title": "Decomposition & Seams", "terms": [
            {"term": "Step-by-Step Slicing", "def": "Decomposing a large monolith incrementally by extracting one cohesive cluster at a time.", "lesson": 4, "tags": ["architecture", "refactoring"]},
            {"term": "Re-Export Seam", "def": "Exporting extracted symbols from their original location to preserve caller compatibility during refactoring.", "lesson": 4, "tags": ["architecture", "compatibility"]},
            {"term": "Repository Pattern", "def": "An architectural seam decoupling business application services from database query implementations.", "lesson": 5, "tags": ["patterns", "architecture"]}
        ]},
        {"id": "verification", "title": "Verification & Git", "terms": [
            {"term": "Whole-Project Type Check", "def": "Running static type analysis across the entire codebase to verify all call sites match updated signatures.", "lesson": 6, "tags": ["typing", "verification"]},
            {"term": "Atomic Commit", "def": "A single git commit containing one self-contained, verified change that keeps the test suite green.", "lesson": 7, "tags": ["git", "workflow"]},
            {"term": "Instant Rollback", "def": "The capability to revert a failed experimental refactoring step in seconds using git reset.", "lesson": 7, "tags": ["git", "safety"]}
        ]},
        {"id": "performance", "title": "Performance & Auditing", "terms": [
            {"term": "N+1 Query Regression", "def": "A performance bug where extracted property accesses inside a loop trigger N redundant database round-trips.", "lesson": 8, "tags": ["performance", "databases"]},
            {"term": "Memory Materialization", "def": "Loading an entire dataset into RAM at once instead of processing it iteratively with streaming generators.", "lesson": 8, "tags": ["performance", "memory"]},
            {"term": "Query Count Assertion", "def": "An automated test assertion that enforces an upper bound on the number of SQL queries fired during an operation.", "lesson": 8, "tags": ["testing", "performance"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "Mechanical Syntax Modernization Prompt",
            "label": "Bulk typing & syntax upgrade",
            "code": "\"Modernize syntax across src/models/:\n1. Replace Optional[T] with T | None.\n2. Replace Union[A, B] with A | B.\n3. Run `mypy src/` and `pytest tests/` to verify zero regressions.\"",
            "lessonN": 2, "lessonSlug": "mechanical-refactorings", "lessonTitle": "Mechanical Refactorings: Renames, Modernizations, Type Additions"
        },
        {
            "title": "Backward-Compatible Re-Export Seam",
            "label": "Decomposing monoliths safely",
            "code": "# In legacy_service.py:\n# Extract logic to new file, but re-export to keep callers working:\nfrom src.services.billing import calculate_invoice\n# Callers importing legacy_service.calculate_invoice continue to work!",
            "lessonN": 4, "lessonSlug": "step-by-step-monolith-decomposition", "lessonTitle": "Step-by-Step Monolith Decomposition"
        },
        {
            "title": "Multi-File Verification Chain",
            "label": "Three-tier consistency audit",
            "code": "# Run after any multi-file refactoring:\nmypy src/ tests/ && ruff check src/ tests/ && pytest\n# Only commit when all three exit with code 0!",
            "lessonN": 6, "lessonSlug": "verifying-invariants-multi-file-diffs", "lessonTitle": "Verifying Invariants Across Large Multi-File Diffs"
        },
        {
            "title": "Atomic Refactoring Git Cycle",
            "label": "Small reversible steps",
            "code": "# 1. Make 1 small refactoring\n# 2. Verify: pytest (PASS)\n# 3. Commit: git commit -m 'refactor: Extract TaxService'\n# If tests fail: git reset --hard HEAD (Instant rollback!)",
            "lessonN": 7, "lessonSlug": "rollback-strategies-atomic-commits", "lessonTitle": "Rollback Strategies and Atomic Commit Discipline"
        }
    ]

    course_data = {
        "id": "ai-assisted-refactoring",
        "title": "AI-Assisted Refactoring",
        "num": 58,
        "emoji": "🔧",
        "desc": "Using tests as a safety net while an agent performs large mechanical changes across a codebase.",
        "topics": ["Refactoring", "Safety Net", "Mechanical Refactorings", "AST Codemods", "Monolith Decomposition", "Service Extraction", "Atomic Commits", "Performance Audits"],
        "mission": "# Mission — AI-Assisted Refactoring\n\nHarness AI coding agents for large-scale, fearless code modernization. Establish passing test suites as mandatory safety nets, execute mechanical syntax and typing upgrades, author AST codemods, slice monolithic god classes incrementally, verify global call-site invariants, practice atomic commit discipline, and audit against performance regressions.",
        "notes": "# Notes — AI-Assisted Refactoring\n\nRefactoring improves internal structure without altering observable behavior. Combine AI speed with automated testing safety nets to modernize legacy code reliably.",
        "resources": "# Resources — AI-Assisted Refactoring\n\n- Martin Fowler, *Refactoring: Improving the Design of Existing Code* (2nd Edition)\n- Michael Feathers, *Working Effectively with Legacy Code*\n- LibCST Documentation (libcst.readthedocs.io)",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

# ==============================================================================
# COURSE 59: large-ai-coding-projects
# ==============================================================================
def make_course_59():
    lessons = [
        build_lesson(
            1, "danger-of-vague-prompts-large-projects", "The Danger of Vague Prompts on Large Projects", "Large Projects",
            "Why large, multi-day engineering initiatives fail when directed with casual, underspecified prompts.",
            "Why do ambitious prompts like 'Build a complete SaaS platform with Stripe billing and auth' fail with AI agents?",
            ["The task contains thousands of hidden architectural decisions and edge cases that exceed agent planning horizons", "Language models refuse to build software that makes money", "Operating systems block commercial software generation", "SaaS platforms are forbidden by AI companies"],
            0, "Ambitious monolithic prompts overwhelm planning capacity and lead to half-implemented, disjointed prototypes.",
            [
                "<p>When engineers first experience AI agents, they are tempted to give immense, open-ended prompts: <em>'Build a real-time collaborative document editor with auth, websockets, PDF export, and billing.'</em></p>",
                "<p>The agent enthusiastically sets to work. It creates 30 files, writes 2,000 lines of plausible code, installs 15 packages—and leaves you with a tangled, non-functional mess that doesn't compile, has zero tests, and has half-implemented stubs everywhere.</p>",
                "<p>Large software projects fail when treated as monolithic prompts because:</p>",
                "<ul><li><strong>Context Saturation:</strong> An agent cannot hold the architectural nuances of 5 distinct subsystems in context at once.</li><li><strong>Compounding Probabilistic Error:</strong> If an agent has a 90% chance of getting a step right, after 20 unverified steps the probability of the system working is $0.90^{20} = 12\%$!</li><li><strong>Hidden Scope Creep:</strong> Unspecified requirements result in arbitrary architectural shortcuts.</li></ul>",
                "<pre><code># The Monolithic Failure vs Hierarchical Success:\n# FAILURE: One massive prompt -> 30 broken files, dead end.\n# SUCCESS: Hierarchical decomposition into 4 milestones:\n#   Milestone 1: Core Domain Entities & In-Memory Logic (Verified by unit tests)\n#   Milestone 2: Database Schema & Repository Layer (Verified by Testcontainers)\n#   Milestone 3: HTTP API & Pydantic Validation (Verified by TestClient)\n#   Milestone 4: Realtime WebSocket Layer (Verified by integration tests)</code></pre>",
                "<div class=\"callout\"><p><strong>The Rule of Scale:</strong> The larger the project, the smaller and more tightly verified each individual agent task must be.</p></div>"
            ],
            "Compounding Probability of Error", "Why large unverified tasks inevitably fail",
            [
                {"title": "Step 1 (90% success)", "lines": ["Core models look great", "High probability of correctness"]},
                {"title": "Step 5 (59% success)", "lines": ["Small subtle drift begins", "Error probability accumulating"]},
                {"title": "Step 20 (12% success)", "lines": ["Compounding errors cascade", "System completely broken"]}
            ],
            "Milestone-Driven Execution", "Resetting error probability at each gate",
            [
                {"title": "Milestone 1 (Verified)", "lines": ["Domain entities & unit tests", "100% Green baseline established"]},
                {"title": "Milestone 2 (Verified)", "lines": ["Persistence layer & tests", "100% Green baseline established"]},
                {"title": "Result: Predictable Scale", "lines": ["Error probability never cascades", "Complex systems shipped safely"]}
            ],
            "Complete the large projects sentence",
            "Monolithic prompts fail on large projects because unverified errors compound {1}, demanding hierarchical decomposition into verified {2}.",
            [
                {"answer": "probabilistically", "hint": "Compounding mathematical odds", "options": ["probabilistically", "randomly", "verbally"]},
                {"answer": "milestones", "hint": "Sequential verified project phases", "options": ["milestones", "chat turns", "file names"]}
            ],
            [
                {"q": "What happens mathematically when an agent attempts a 20-step task without intermediate verification?",
                 "a": ["Even with high per-step accuracy, small errors compound, making the overall probability of success very low", "The probability of success reaches 100%", "The computer runs out of memory", "The context window doubles"],
                 "c": 0, "why": "Multiplying high individual probabilities across many unverified steps causes overall success rates to collapse."},
                {"q": "How does milestone-driven execution solve the compounding error problem?",
                 "a": ["Each milestone is verified with automated tests and committed to git, resetting the baseline before starting the next step", "It tells the agent to try harder", "It skips writing code", "It reduces developer salaries"],
                 "c": 0, "why": "Verifying each milestone locks in correctness, preventing errors from cascading into subsequent steps."},
                {"q": "What is the primary role of the lead engineer on a large AI-assisted coding project?",
                 "a": ["Architecting the milestone breakdown, defining interface boundaries, and enforcing verification gates", "Writing all 10,000 lines of code by hand", "Disabling terminal access for agents", "Rejecting all AI contributions"],
                 "c": 0, "why": "The lead engineer acts as the architect and system planner, directing agent execution."},
                {"q": "What should you do if an agent produces a large diff that only half-implements three different features?",
                 "a": ["Revert the changes with git, reduce scope to one single feature, and provide a strict acceptance contract", "Merge it and hope for the best", "Ask the agent to finish everything in one more turn", "Delete the repository"],
                 "c": 0, "why": "Reverting and narrowing scope restores focus and establishes clean, incremental progress."}
            ],
            "You understand why large projects require disciplined hierarchical planning.",
            "Hierarchical Planning: Milestones, Tasks, and Steps", "Break down massive software projects into actionable, verifiable tiers."
        ),
        build_lesson(
            2, "hierarchical-planning-milestones", "Hierarchical Planning: Milestones, Tasks, and Steps", "Hierarchical Planning",
            "Structuring complex projects across three planning tiers: Strategic Milestones, Actionable Tasks, and Verification Steps.",
            "What is the recommended size of a single 'Actionable Task' given to an AI agent?",
            ["A task touching 1 to 3 related files that can be completed and verified with tests in a single session", "An entire 6-month product roadmap", "A single keystroke", "A complete database rewrite"],
            0, "Tasks should be bite-sized, touching 1-3 files and verifiable within a single session.",
            [
                "<p>To execute a large engineering initiative successfully with AI agents, you must think in <strong>Hierarchical Planning</strong>. You decompose high-level business goals into three distinct operational tiers:</p>",
                "<ul><li><strong>Tier 1: Milestones (Strategic):</strong> Multi-day architectural achievements (e.g. <em>'Milestone 1: Pure Domain Engine & Invariant Tests'</em>, <em>'Milestone 2: Postgres Persistence & Repositories'</em>).</li><li><strong>Tier 2: Tasks (Tactical):</strong> Focused units of work touching 1-3 files (e.g. <em>'Task 1.2: Implement discount calculation entity with unit tests'</em>). This is the exact unit of work given to an agent session!</li><li><strong>Tier 3: Steps (Operational):</strong> The ReAct tool-calling loop (edit line 42, run pytest, fix syntax). The agent executes these autonomously.</li></ul>",
                "<pre><code># The Hierarchical Plan in PROJECT_PLAN.md:\n## Milestone 1: Core Billing Engine\n- [x] Task 1.1: Define Money Value Object and Currency enum (src/billing/money.py)\n- [x] Task 1.2: Implement Invoice entity with line item calculation (src/billing/invoice.py)\n- [ ] Task 1.3: Author unit tests for discount and tax calculations (tests/test_billing.py)\n\n## Milestone 2: Stripe Payment Gateway Adapter\n- [ ] Task 2.1: Define PaymentGateway protocol interface (src/billing/ports.py)\n- [ ] Task 2.2: Implement StripeGateway adapter with webhook handler (src/billing/adapters.py)</code></pre>",
                "<p>By maintaining a `PROJECT_PLAN.md` file in the repository, both human engineers and AI agents share a persistent map of progress and active priorities.</p>",
                "<div class=\"callout\"><p><strong>The Golden Rule:</strong> Never prompt an agent with a Milestone. Always prompt an agent with a single, specific Task!</p></div>"
            ],
            "The Three Planning Tiers", "Decomposing complexity from strategy to execution",
            [
                {"title": "Tier 1: Milestone (Architect)", "lines": ["Strategic subsystem delivery", "Spans 3-5 days of work"]},
                {"title": "Tier 2: Task (Agent Prompt)", "lines": ["Touches 1-3 files, 1 hour scope", "Specific goal & acceptance criteria"]},
                {"title": "Tier 3: Steps (Agent Loop)", "lines": ["Read file, edit line, run pytest", "Autonomous tool-calling loop"]}
            ],
            "Project Plan as Anchor", "Tracking progress across sessions",
            [
                {"title": "PROJECT_PLAN.md", "lines": ["Committed in repository root", "Checklist of milestones & tasks"]},
                {"title": "Session Alignment", "lines": ["Agent checks off completed task", "Selects next task without drift"]}
            ],
            "Complete the hierarchical planning sentence",
            "Hierarchical planning breaks strategic milestones into focused {1} that touch 1-3 files and can be verified with {2}.",
            [
                {"answer": "tasks", "hint": "Tactical units of work", "options": ["tasks", "prompts", "tokens"]},
                {"answer": "tests", "hint": "Automated test suites", "options": ["tests", "comments", "emojis"]}
            ],
            [
                {"q": "Why should you never give an entire Milestone directly to an AI agent as a single prompt?",
                 "a": ["Milestones contain too many concurrent concerns, causing the agent to take shortcuts or lose context", "The agent will delete all files", "Milestones are prohibited by git", "Milestones can only be written in Java"],
                 "c": 0, "why": "Milestone-level prompts overwhelm agent planning horizons and lead to superficial, half-implemented code."},
                {"q": "What should be committed to the repository to track project momentum across multi-day agent sessions?",
                 "a": ["A structured PROJECT_PLAN.md or ROADMAP.md file with checkbox tasks", "A recording of developer voice memos", "A link to a social media thread", "An encrypted binary blob"],
                 "c": 0, "why": "Version-controlled plan documents provide shared persistent state for developers and agents."},
                {"q": "How does keeping tasks focused on 1-3 files improve agent code quality?",
                 "a": ["It keeps the context window lean, maximizes attention focus, and makes the resulting diff easy to review", "It makes Python run faster", "It reduces electric bills", "It allows developers to skip code review"],
                 "c": 0, "why": "Tight file scope maintains high attention density and produces reviewable, low-risk pull requests."},
                {"q": "What should happen to the project plan as each task is completed?",
                 "a": ["Mark the task completed [x] in PROJECT_PLAN.md and commit the update alongside the code changes", "Delete the project plan file", "Rewrite the plan from scratch", "Send an email to the entire company"],
                 "c": 0, "why": "Updating the plan in the commit preserves an auditable historical record of project progress."}
            ],
            "You know how to structure complex projects using hierarchical planning.",
            "Managing Working Trees, Stashes, and Branching Strategies", "Master git branch hygiene and savepoint management for agent work."
        ),
        build_lesson(
            3, "working-trees-stashes-branching", "Managing Working Trees, Stashes, and Branching Strategies", "Git Branching",
            "Managing git branches, worktrees, and stashes to isolate experimental agent tasks safely.",
            "Why is creating dedicated feature branches for each AI agent task essential?",
            ["It isolates experimental agent edits from the stable main branch, making throwaway resets and clean reviews effortless", "Git branches make Python code run 5x faster", "Main branches cannot be edited by computers", "Feature branches reduce cloud hosting costs"],
            0, "Dedicated feature branches isolate agent work, allowing zero-risk experimentation and clean PR reviews.",
            [
                "<p>AI agents make changes rapidly. If you allow an agent to work directly on your `main` branch or a dirty working directory with uncommitted personal changes, disaster is inevitable. An accidental `git reset` will wipe out your uncommitted work, or a broken agent edit will pollute production history.</p>",
                "<p>Professional AI workflow demands <strong>Strict Git Branch Hygiene</strong>:</p>",
                "<ul><li><strong>1. Dedicated Feature Branches:</strong> Always create a clean branch: `git checkout -b feat/stripe-webhook-handler`. Never let an agent touch `main` directly.</li><li><strong>2. Git Stash as a Shield:</strong> If you have in-progress edits when starting an agent task, run `git stash save \"wip personal\"` to protect your work from agent overwrites.</li><li><strong>3. Git Worktrees for Parallel Tasks:</strong> Use `git worktree add ../agent-task-1 feat/branch-1` to let an agent work in a completely separate folder on disk while you continue coding in your primary directory!</li></ul>",
                "<pre><code># The Safe Branch Workflow:\n$ git checkout main && git pull\n$ git checkout -b feat/task-1.2-invoice-calculation\n# Let the agent work on feat/task-1.2...\n# If agent succeeds: verify tests, commit, push PR!\n# If agent fails completely: git checkout main && git branch -D feat/task-1.2 (Zero mess!)</code></pre>",
                "<div class=\"callout\"><p><strong>The Worktree Superpower:</strong> `git worktree` allows multiple AI agents to work concurrently on different branches in separate folders without stepping on each other's files!</p></div>"
            ],
            "Branch Isolation Architecture", "Protecting stable branches from agent churn",
            [
                {"title": "main Branch (Stable)", "lines": ["Protected, deployable baseline", "Never touched directly by agents"]},
                {"title": "feat/task-1.2 (Agent Sandbox)", "lines": ["Agent writes code & runs tests", "Isolated, zero risk to team"]},
                {"title": "PR Review Gate", "lines": ["Squash and merge upon approval", "Clean, pristine commit history"]}
            ],
            "Git Worktree Concurrency", "Running parallel agent workspaces on disk",
            [
                {"title": "Primary Workspace (/repo)", "lines": ["Developer working on core API", "Zero agent interruption"]},
                {"title": "Worktree 1 (/repo-agent-1)", "lines": ["Agent refactoring billing module", "Completely isolated folder on disk"]}
            ],
            "Complete the git branch hygiene sentence",
            "Isolate agent experimentation by creating dedicated feature {1} and using git {2} to run parallel agent workspaces.",
            [
                {"answer": "branches", "hint": "Isolated git commit lines", "options": ["branches", "servers", "databases"]},
                {"answer": "worktrees", "hint": "Multiple linked working directories on disk", "options": ["worktrees", "compilers", "browsers"]}
            ],
            [
                {"q": "What is the primary benefit of using 'git worktree' with AI coding agents?",
                 "a": ["It allows an agent to edit, build, and test a separate branch in an isolated directory without interrupting your active editor workspace", "It makes git push 10x faster", "It eliminates merge conflicts forever", "It encrypts the source code"],
                 "c": 0, "why": "Git worktrees provide completely separate checkouts on disk sharing the same underlying repository."},
                {"q": "Why should you never let an AI agent work directly on an uncommitted, dirty working tree?",
                 "a": ["The agent's tool calls (like file rewrites or git resets) can permanently overwrite or delete your uncommitted personal changes", "The computer will crash", "Python will refuse to run", "Git will corrupt the hard drive"],
                 "c": 0, "why": "Uncommitted changes can be lost or overwritten by automated agent file modifications."},
                {"q": "What should you do if an agent's work on a feature branch proves to be a complete dead end?",
                 "a": ["Checkout main and delete the feature branch; your baseline remains 100% clean and unharmed", "Spend three days untangling the dead end", "Delete the entire git repository and clone again", "Push the dead end to main"],
                 "c": 0, "why": "Branch isolation makes discarding failed experiments effortless and consequence-free."},
                {"q": "How does squashing commits before merging an agent feature PR keep history clean?",
                 "a": ["It collapses 15 micro-trial commits into one clean, self-contained, descriptive commit on the main branch", "It reduces GitHub hosting bills", "It compiles Python code", "It deletes all unit tests"],
                 "c": 0, "why": "Squash-merging turns noisy trial-and-error agent commits into a clean, atomic historical record."}
            ],
            "You know how to manage git branches, worktrees, and stashes for safe agent workflows.",
            "Checkpoint-Driven Development: Save Points and Reverts", "Create safe restore points before delegating risky tasks."
        ),
        build_lesson(
            4, "checkpoint-driven-development", "Checkpoint-Driven Development: Save Points and Reverts", "Checkpoints",
            "Using checkpoint-driven development: establishing clean savepoints before risky operations and knowing when to revert.",
            "What is 'Checkpoint-Driven Development' when collaborating with AI agents?",
            ["Committing a working baseline state before starting an agent task so you can instantly revert if the agent goes off track", "Saving games on a video game console", "Creating cloud database backups once a month", "Writing down code on physical paper"],
            0, "Checkpoints provide instant savepoints that eliminate the risk of exploratory agent tasks.",
            [
                "<p>Software engineering is an empirical search through a possibility space. Sometimes an agent finds an elegant solution in 3 minutes; other times, it goes down an architectural rabbit hole, modifying 18 files and introducing circular import hell.</p>",
                "<p><strong>Checkpoint-Driven Development</strong> gives you complete psychological and technical freedom to let agents explore without fear:</p>",
                "<ul><li><strong>1. Create the Checkpoint:</strong> Before giving the agent a task, ensure `git status` is clean. If needed, create an explicit WIP commit: `git commit -m \"checkpoint: pre-auth-refactor\"`.</li><li><strong>2. Unleash the Agent:</strong> Let the agent explore, edit files, and run tests autonomously.</li><li><strong>3. Evaluate the Trajectory:</strong> If after 5 minutes the agent is making clean, convergent progress, let it finish.</li><li><strong>4. Pull the Ripcord:</strong> If the agent is thrashing, breaking unrelated tests, or making erratic edits, do not argue with it! <strong>Pull the ripcord:</strong> `git reset --hard HEAD`.</li></ul>",
                "<pre><code># The Ripcord Workflow:\n$ git commit -m \"checkpoint: before payment gateway refactor\"\n# ... Agent runs 8 turns, modifies 14 files, 6 tests failing ...\n# You realize the agent took the wrong design approach.\n$ git reset --hard HEAD\n# Result: Pristine working baseline restored in 100 milliseconds!\n# Now prompt with a refined constraint: \"Do NOT alter PaymentGateway protocol...\"</code></pre>",
                "<div class=\"callout\"><p><strong>The Revert Rule:</strong> Pulling the ripcord takes 1 second. Trying to fix an agent's confused, multi-file mess takes an hour. Revert early, refine the prompt, and restart clean.</p></div>"
            ],
            "The Checkpoint and Ripcord Loop", "Safe exploration through instant rollbacks",
            [
                {"title": "1. Save Checkpoint", "lines": ["git commit -m 'checkpoint'", "Clean, working baseline locked"]},
                {"title": "2. Agent Explores", "lines": ["Agent attempts refactor", "Modifies 12 files autonomously"]},
                {"title": "3. Decision Point", "lines": ["Converging? -> Accept & polish", "Thrashing? -> Pull ripcord (git reset)"]}
            ],
            "The Cost of Arguing vs Reverting", "Time efficiency comparison",
            [
                {"title": "Arguing with Confused Agent", "lines": ["'Why did you break line 42?'", "'Now fix line 80...'", "45 minutes wasted, messy code"]},
                {"title": "Pulling the Ripcord", "lines": ["git reset --hard HEAD", "Refine prompt with 1 constraint", "Agent succeeds in 2 minutes"]}
            ],
            "Complete the checkpoint development sentence",
            "Checkpoint-driven development establishes clean git {1} before delegating tasks, allowing developers to pull the {2} if the agent goes off track.",
            [
                {"answer": "savepoints", "hint": "Known good commits", "options": ["savepoints", "prompts", "tokens"]},
                {"answer": "ripcord", "hint": "Instant git reset to clean baseline", "options": ["ripcord", "database", "license"]}
            ],
            [
                {"q": "Why is 'git reset --hard HEAD' considered a developer superpower when working with AI agents?",
                 "a": ["It allows you to instantly discard an agent's confused exploration and return to a clean baseline in milliseconds", "It makes Python run faster", "It deletes the remote repository", "It automatically fixes syntax errors"],
                 "c": 0, "why": "Instant rollbacks eliminate the fear of letting agents explore complex, multi-file modifications."},
                {"q": "What is the primary indicator that you should pull the ripcord rather than continuing an agent session?",
                 "a": ["The agent is thrashing, making contradictory edits back and forth, or breaking unrelated working tests", "The agent finishes in 10 seconds", "All unit tests pass", "The agent asks a clarifying question"],
                 "c": 0, "why": "Alternating test failures and circular edits indicate the agent has lost architectural coherence."},
                {"q": "Why is arguing with an agent in chat when it has made a 15-file mess usually counter-productive?",
                 "a": ["The context window is saturated with error logs and confusion; restarting from a clean checkpoint with a refined prompt is vastly faster", "Language models have emotional pride", "The chat window will crash", "It is considered impolite"],
                 "c": 0, "why": "A saturated, confused context window degrades model reasoning; fresh prompts on clean baselines win."},
                {"q": "What should you do after pulling the ripcord before prompting the agent again?",
                 "a": ["Analyze why the agent failed and add an explicit constraint or golden example to prevent the mistake on attempt #2", "Run the exact same prompt again without changes", "Delete your computer", "Work through the night by hand"],
                 "c": 0, "why": "Refining the prompt with the learned constraint guides the agent correctly on the second try."}
            ],
            "You know how to practice checkpoint-driven development and leverage instant rollbacks.",
            "Next Course: When to Trust AI-Generated Code", "Learn how to calibrate trust across high-risk and low-risk domains."
        ),
        build_lesson(
            5, "managing-context-resets", "Managing Context Resets Across Long Multi-Day Tasks", "Context Resets",
            "Transitioning between agent sessions: summarizing progress, resetting context windows, and handing off state.",
            "Why must long multi-day projects be split across multiple fresh agent sessions rather than running in one massive conversation?",
            ["Massive conversation histories suffer from context exhaustion, attention dilution, high latency, and compounding token costs", "Language models shut down after 8 hours", "Chat windows cannot be opened on Tuesdays", "Conversations are legally limited to 20 turns"],
            0, "Long sessions accumulate noise and context amnesia; fresh sessions with concise handoff summaries restore high performance.",
            [
                "<p>A rookie mistake in AI coding is treating a single chat session as an eternal companion. A developer starts a session on Monday, works for three days, and by Wednesday the conversation is 140 turns long, consuming 110,000 tokens per prompt. Every turn takes 45 seconds to respond, costs $0.30, and the agent constantly forgets decisions made on Monday!</p>",
                "<p>Professional engineers practice <strong>Strategic Context Resets</strong>:</p>",
                "<ul><li><strong>The Milestone Handoff:</strong> When a milestone is completed and verified, conclude the session.</li><li><strong>Generate a Handoff Summary:</strong> Ask the agent: <em>'Summarize work completed in this milestone, files modified, and remaining tasks for Milestone 2.'</em></li><li><strong>Save to Repository:</strong> Save the summary in `PROJECT_PLAN.md` or git commit message.</li><li><strong>Start Clean:</strong> Open a brand-new, empty agent session. Prime it with the project conventions and the handoff summary.</li></ul>",
                "<pre><code># The Fresh Session Kickoff Prompt:\n\"We are continuing work on the Billing Engine initiative.\nMilestone 1 is complete and verified (see PROJECT_PLAN.md):\n- Core entities and Money Value Object are in src/billing/.\n- All unit tests in tests/test_billing.py are passing 100%.\n\nYour task for this session is Task 2.1:\nImplement the StripePaymentGateway adapter in src/billing/stripe.py matching\nthe PaymentGateway protocol in src/billing/ports.py.\nRun `pytest tests/test_stripe.py` to verify.\"</code></pre>",
                "<div class=\"callout\"><p><strong>The Fresh Mind Effect:</strong> A fresh agent session with a 2,000-token high-signal briefing performs with 10x higher intelligence and speed than a tired, 100,000-token legacy session.</p></div>"
            ],
            "The Context Reset Lifecycle", "Preserving state across clean agent sessions",
            [
                {"title": "Session 1: Milestone 1", "lines": ["Builds domain entities", "Runs tests -> 100% Green", "Generates handoff summary"]},
                {"title": "Context Reset", "lines": ["Close saturated session", "Reclaim 100% token budget"]},
                {"title": "Session 2: Milestone 2", "lines": ["Start fresh session with summary", "Blazing fast, razor-focused"]}
            ],
            "Bloated Session vs Fresh Reset", "Performance comparison over time",
            [
                {"title": "140-Turn Bloated Session", "lines": ["110k tokens per prompt", "45s latency, high amnesia", "$0.40 per turn"]},
                {"title": "Fresh Reset Session", "lines": ["2k tokens high signal", "2s latency, sharp reasoning", "$0.01 per turn"]}
            ],
            "Complete the context reset sentence",
            "Strategic context resets prevent attention degradation by closing saturated sessions and priming fresh sessions with concise {1} of completed {2}.",
            [
                {"answer": "summaries", "hint": "Distilled milestone overviews", "options": ["summaries", "passwords", "tokens"]},
                {"answer": "milestones", "hint": "Completed project phases", "options": ["milestones", "browsers", "databases"]}
            ],
            [
                {"q": "What is the primary indicator that an agent session should be reset with a fresh conversation?",
                 "a": ["Responses become slow, costs per turn escalate, and the agent begins forgetting constraints established earlier", "The agent solves the problem immediately", "All unit tests pass", "The computer battery reaches 100%"],
                 "c": 0, "why": "High latency and constraint amnesia are clear symptoms of context window saturation."},
                {"q": "What should the kickoff prompt for a fresh agent session contain?",
                 "a": ["The specific current task, relevant file paths, links to project conventions, and a concise summary of what was completed", "The entire chat history from the previous week", "A generic greeting with no code context", "A complaint about past mistakes"],
                 "c": 0, "why": "A focused kickoff prompt delivers pure signal without dragging in old conversational noise."},
                {"q": "Where should milestone handoff summaries be stored so they survive across sessions?",
                 "a": ["In version-controlled markdown files like PROJECT_PLAN.md or memory notes in the workspace", "In the user's browser clipboard", "In temporary operating system caches", "In email drafts"],
                 "c": 0, "why": "Storing summaries in repository markdown files makes them accessible to all future sessions."},
                {"q": "How does starting a fresh session improve model reasoning capabilities?",
                 "a": ["It clears thousands of tokens of irrelevant tool outputs and debugging logs, restoring maximum attention density to the new task", "It upgrades the model to a newer version", "It turns off type checking", "It speeds up the computer's CPU clock"],
                 "c": 0, "why": "Emptying the context of accumulated noise allows the model's attention mechanism to focus 100% on the active task."}
            ],
            "You know how to manage context resets across complex, multi-day engineering projects.",
            "Parallel Agent Workflows and Work Breakdown", "Coordinate multiple agents working simultaneously on decoupled tasks."
        ),
        build_lesson(
            6, "parallel-agent-workflows", "Parallel Agent Workflows and Work Breakdown", "Parallel Workflows",
            "Orchestrating parallel agent workflows: work breakdown, interface decoupling, and branch merging.",
            "What architectural condition must be satisfied before two AI agents can work on separate tasks in parallel?",
            ["The two tasks must have decoupled file boundaries and well-defined shared interface contracts to prevent merge conflicts", "Both agents must share the exact same terminal", "Both agents must edit the same file on the same line", "Parallel agent workflows are prohibited by physics"],
            0, "Decoupled file boundaries and clean interface contracts prevent catastrophic git merge conflicts.",
            [
                "<p>In a traditional single-agent workflow, you wait for the agent to finish task A before starting task B. But modern engineering allows <strong>Parallel Agent Workflows</strong>: running three or four agents concurrently on separate feature branches or git worktrees.</p>",
                "<p>However, running parallel agents without architectural planning causes <strong>merge conflict nightmare</strong>. If Agent 1 and Agent 2 both edit `src/main.py` simultaneously, merging their branches will require hours of manual conflict resolution.</p>",
                "<p>To execute parallel agent workflows safely:</p>",
                "<ul><li><strong>1. Decoupled File Boundaries:</strong> Agent 1 works strictly on `src/billing/`; Agent 2 works strictly on `src/notifications/`. Zero overlapping files!</li><li><strong>2. Contract-First Seams:</strong> Define the shared interface or schema (e.g. `src/shared/schemas.py`) <em>before</em> launching the agents. Both agents build against the pre-agreed contract.</li><li><strong>3. Independent Test Suites:</strong> Agent 1 runs `tests/test_billing.py`; Agent 2 runs `tests/test_notifications.py`.</li></ul>",
                "<pre><code># Parallel Work Breakdown Architecture:\nShared Foundation: `src/shared/contracts.py` (Committed to main first!)\n|-- Worktree 1 (Agent A): `feat/billing`      -> Edits src/billing/ + tests/billing/\n|-- Worktree 2 (Agent B): `feat/notifier`     -> Edits src/notify/ + tests/notify/\n|-- Worktree 3 (Agent C): `feat/docs`         -> Edits docs/ + openapi.json\nResult: 3 agents work simultaneously with ZERO git merge conflicts!</code></pre>",
                "<div class=\"callout\"><p><strong>The Contract Gate:</strong> Never start parallel agents until the shared schemas and interface types are committed to the base branch!</p></div>"
            ],
            "Parallel Agent Architecture", "Decoupled worktrees building against shared contracts",
            [
                {"title": "Shared Contract (Base)", "lines": ["UserSchema & EventProtocol", "Committed to main first"]},
                {"title": "Agent A (Worktree 1)", "lines": ["src/billing/service.py", "Dedicated branch & tests"]},
                {"title": "Agent B (Worktree 2)", "lines": ["src/notifications/service.py", "Dedicated branch & tests"]},
                {"title": "Clean Merge", "lines": ["Zero overlapping files", "Both PRs merge in minutes"]}
            ],
            "The Overlapping File Collision Trap", "Why uncoordinated parallel work fails",
            [
                {"title": "Uncoordinated Agents", "lines": ["Both edit src/app.py line 40", "Both add different routes"]},
                {"title": "Git Merge Collision", "lines": ["50-line merge conflict", "Hours of painful manual resolution"]}
            ],
            "Complete the parallel workflow sentence",
            "Parallel agent workflows require decoupled file boundaries and pre-committed interface {1} to avoid {2} merge conflicts.",
            [
                {"answer": "contracts", "hint": "Agreed schemas and protocols", "options": ["contracts", "passwords", "tokens"]},
                {"answer": "git", "hint": "Version control branch collisions", "options": ["git", "browser", "database"]}
            ],
            [
                {"q": "What is the single most important prerequisite before dispatching two parallel AI agents?",
                 "a": ["Agree upon and commit the shared interface contracts and schemas so both agents build against a common specification", "Buy a second computer", "Disable unit testing", "Ask the agents to communicate with each other"],
                 "c": 0, "why": "Pre-committing shared contracts ensures both agents' contributions align without interface collisions."},
                {"q": "What happens if two agents modify the same file concurrently on different branches?",
                 "a": ["A git merge conflict occurs upon merging, requiring human intervention to untangle contradictory edits", "The internet disconnects", "The file is deleted automatically", "Python refuses to compile"],
                 "c": 0, "why": "Concurrent edits to identical lines create classic git merge conflicts."},
                {"q": "How do git worktrees facilitate running multiple agent processes on one machine?",
                 "a": ["They provide distinct filesystem directories on disk for each branch, preventing agents from overwriting each other's files", "They double the CPU clock speed", "They turn off battery management", "They make code compile to C"],
                 "c": 0, "why": "Separate working trees allow multiple tools to edit and run tests simultaneously without filesystem collision."},
                {"q": "What type of tasks are most suitable for parallel agent execution?",
                 "a": ["Decoupled vertical features, independent documentation tasks, and separate domain services with zero shared files", "Refactoring the single main entry point file", "Editing a single database migration file", "Renaming global variables"],
                 "c": 0, "why": "Orthogonal, decoupled tasks can proceed simultaneously without blocking each other."}
            ],
            "You know how to orchestrate parallel agent workflows with zero merge friction.",
            "Continuous Integration as the Source of Truth", "Establish CI as the objective, impartial referee of agent code."
        ),
        build_lesson(
            7, "ci-as-source-of-truth", "Continuous Integration as the Source of Truth", "CI Truth",
            "Establishing automated Continuous Integration (CI) as the objective, non-negotiable source of truth for all agent contributions.",
            "Why is CI (Continuous Integration) the ultimate source of truth when working with AI coding agents?",
            ["CI runs tests and linters in a clean, pristine container environment, independent of local machine quirks or agent assertions", "CI is operated by government regulators", "CI servers use quantum computing", "CI replaces human developers"],
            0, "CI verifies code in an isolated, reproducible environment free from local state pollution or agent bias.",
            [
                "<p>When an agent says: <em>'I ran the tests and everything is passing!'</em>, that statement is provisional. Perhaps the agent ran tests against a stale SQLite database, or forgot to set an environment variable, or ran only 1 test out of 50.</p>",
                "<p>In professional engineering, <strong>Continuous Integration (CI) is the supreme authority</strong>. A feature is not done because the agent says it is done; a feature is done when the clean, ephemeral CI runner turns <strong>GREEN</strong>.</p>",
                "<p>A robust CI pipeline for AI-assisted engineering enforces four objective gates:</p>",
                "<ul><li><strong>1. Deterministic Linting:</strong> `ruff check`, `eslint` (0 warnings allowed).</li><li><strong>2. Strict Static Type Checking:</strong> `mypy --strict`, `tsc --noEmit` (0 errors allowed).</li><li><strong>3. Complete Test Execution:</strong> Unit tests, integration tests, and database migration checks.</li><li><strong>4. Architectural Fitness Checks:</strong> `import-linter` enforcing layer boundaries.</li></ul>",
                "<pre><code># The Impartial CI Referee (GitHub Actions Workflow):\nname: CI Verification Pipeline\non: [pull_request]\njobs:\n  verify:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Run Linters\n        run: make lint\n      - name: Run Type Checker\n        run: make typecheck\n      - name: Run Full Test Suite with Testcontainers\n        run: make test\n# If ANY step exits with non-zero code -> PR is BLOCKED from merging!</code></pre>",
                "<div class=\"callout\"><p><strong>The Non-Negotiable Law:</strong> If CI is red, the PR does not merge. No excuses, no workarounds. The machine is the impartial referee.</p></div>"
            ],
            "CI as the Impartial Referee", "Objective verification in pristine environments",
            [
                {"title": "Agent Assertion (Local)", "lines": ["'Tests pass on my machine!'", "Possible local state pollution or quirks"]},
                {"title": "CI Runner (Pristine)", "lines": ["Clean Docker container, fresh DB", "Runs all linters, types, & tests"]},
                {"title": "The Binary Verdict", "lines": ["GREEN: Code is verified safe to merge", "RED: Blocked until issues resolved"]}
            ],
            "The Four Automated CI Gates", "Multi-layered quality enforcement",
            [
                {"title": "Gate 1: Linting", "lines": ["Formatting & dead code check", "Ruff / ESLint"]},
                {"title": "Gate 2: Types", "lines": ["Mathematical call-site proof", "Mypy / TypeScript"]},
                {"title": "Gate 3: Tests", "lines": ["Behavioral regression suite", "Pytest / Vitest"]},
                {"title": "Gate 4: Architecture", "lines": ["Layer boundary enforcement", "import-linter"]}
            ],
            "Complete the CI truth sentence",
            "Continuous Integration acts as the objective source of truth by evaluating agent pull requests in clean, isolated {1} with automated {2}.",
            [
                {"answer": "containers", "hint": "Ephemeral virtual environments", "options": ["containers", "browsers", "chatrooms"]},
                {"answer": "gates", "hint": "Mandatory pass/fail checks", "options": ["gates", "prompts", "tokens"]}
            ],
            [
                {"q": "Why is saying 'It works on my machine' insufficient for AI-generated code?",
                 "a": ["Local environments can contain uncommitted files, cached state, or environment variables that mask bugs present in production", "It is considered bad manners", "Machines cannot run software", "Operating systems change daily"],
                 "c": 0, "why": "Local state pollution often hides dependencies or configurations missing from version control."},
                {"q": "What happens if a pull request fails a static type check in CI?",
                 "a": ["The PR is automatically blocked from merging until the type errors are resolved", "The repository is deleted", "The developer's account is suspended", "The CI server reboots"],
                 "c": 0, "why": "Branch protection rules prevent merging any code that fails automated CI checks."},
                {"q": "How does CI protect against agent hallucination?",
                 "a": ["It executes the code and tests against real compilers and databases, empirically proving that all imports and methods exist", "It filters prompts using AI", "It reduces GPU temperature", "It translates code into French"],
                 "c": 0, "why": "Real execution in CI exposes hallucinated packages or nonexistent functions immediately."},
                {"q": "What role does branch protection play in GitHub or GitLab?",
                 "a": ["It enforces that the main branch cannot receive direct pushes and requires passing CI and human approval before merging", "It makes git checkout faster", "It encrypts repository files on disk", "It reduces cloud server bills"],
                 "c": 0, "why": "Branch protection guarantees that all code entering production passes through verified CI gates."}
            ],
            "You know how to establish Continuous Integration as the ultimate source of truth.",
            "Knowing When to Take the Wheel and Code by Hand", "Recognize the boundary where human craftsmanship surpasses AI agency."
        ),
        build_lesson(
            8, "when-to-take-the-wheel", "Knowing When to Take the Wheel and Code by Hand", "Human Craft",
            "Recognizing when to stop delegating to an agent and write code by hand: subtle math, novel architectures, and edge debugging.",
            "When should an engineer stop prompting an agent and take the wheel to code by hand?",
            ["When a problem requires deep algorithmic invention, delicate low-level pointer/concurrency math, or when the agent has thrashed across 3 turns", "Never; humans should never type code again", "Only when the power goes out", "Whenever a function is longer than 10 lines"],
            0, "Novel algorithms, subtle concurrency, and unresolved thrashing demand direct human craftsmanship.",
            [
                "<p>The most dangerous trap in AI engineering is <strong>prompt stubbornness</strong>: spending three hours desperately re-prompting an agent to fix a subtle bug that you could have diagnosed and fixed by hand in five minutes.</p>",
                "<p>Mastery of AI engineering means knowing when to delegate, and <strong>knowing when to take the wheel</strong>:</p>",
                "<ul><li><strong>Delegate to the Agent:</strong> Repetitive boilerplate, mechanical refactoring, syntax modernizations, writing standard tests, and exploring unfamiliar API examples.</li><li><strong>Take the Wheel Yourself:</strong> Novel mathematical algorithms, delicate concurrency synchronization, high-consequence cryptographic logic, and any task where the agent has failed after 3 turns.</li></ul>",
                "<pre><code># The 3-Turn Take-the-Wheel Rule:\nTurn 1: Agent attempts fix -> Fails.\nTurn 2: Refine prompt with constraint -> Fails.\nTurn 3: Provide minimal reproduction snippet -> Fails.\n----------------- STOP PROMPTING! TAKE THE WHEEL! -----------------\nAction: Open the file, write the 4 lines of logic yourself, run tests,\n        commit, and re-engage the agent for subsequent mechanical work!</code></pre>",
                "<p>Coding by hand is not a defeat; it is an executive engineering decision. Your job is to ship reliable software with maximum velocity, using whatever tool—AI or human brain—is most effective for the immediate problem.</p>",
                "<div class=\"callout\"><p><strong>The Final Synthesis:</strong> The engineer who uses an agent for the 80% mechanical work and applies deep personal craftsmanship to the critical 20% is unstoppable.</p></div>"
            ],
            "When to Delegate vs When to Code", "Balancing AI leverage with human craft",
            [
                {"title": "Delegate to Agent (80%)", "lines": ["Boilerplate schemas & CRUD", "Mechanical syntax modernizations", "Repetitive unit test suites"]},
                {"title": "Take the Wheel (20%)", "lines": ["Novel algorithmic invention", "Subtle concurrency & lock timing", "Thrashing debugging after 3 turns"]}
            ],
            "The 3-Turn Circuit Breaker", "Stopping prompt stubbornness in its tracks",
            [
                {"title": "Turn 1-3: Prompt Agent", "lines": ["Agent attempts solution", "Fails to converge"]},
                {"title": "Circuit Breaker Tripped", "lines": ["Halt prompting immediately", "Developer writes the 5 critical lines", "Saves 2 hours of frustration"]}
            ],
            "Complete the human craft sentence",
            "Mastering AI engineering requires knowing when to delegate mechanical work to agents and when to {1} the wheel for deep algorithmic {2}.",
            [
                {"answer": "take", "hint": "Assume direct manual control", "options": ["take", "delete", "break"]},
                {"answer": "craftsmanship", "hint": "Human engineering skill and insight", "options": ["craftsmanship", "prompts", "tokens"]}
            ],
            [
                {"q": "What is 'prompt stubbornness'?",
                 "a": ["Wasting hours repeatedly re-prompting an agent to solve a subtle bug that a human could fix manually in minutes", "Refusing to use AI tools", "Writing prompts in all uppercase letters", "Prompting without punctuation"],
                 "c": 0, "why": "Prompt stubbornness is the reluctance to step in and code manually when an agent struggles."},
                {"q": "What is the recommended rule of thumb before taking the wheel from an agent?",
                 "a": ["The 3-turn rule: if the agent fails to converge on a solution after three iterations, take manual control", "Wait 48 hours", "Re-prompt at least 50 times", "Reboot the router"],
                 "c": 0, "why": "A 3-turn circuit breaker bounds wasted time and maintains engineering momentum."},
                {"q": "Which of the following tasks is best suited for direct human hand-coding?",
                 "a": ["Designing a novel distributed consensus algorithm or intricate lock-free data structure", "Generating 20 repetitive CRUD endpoint schemas", "Upgrading type hints across 40 files", "Writing docstrings for getters and setters"],
                 "c": 0, "why": "Novel distributed algorithms and lock-free concurrency require deep mathematical human reasoning."},
                {"q": "How does combining human craftsmanship with AI leverage define the modern 10x engineer?",
                 "a": ["They use AI to automate 80% of routine mechanical work, focusing their human energy on critical architecture and core logic", "They write 100,000 lines of code every day", "They never write unit tests", "They use five computer monitors"],
                 "c": 0, "why": "Pairing AI speed for boilerplate with human insight for critical logic creates extraordinary velocity."}
            ],
            "You have completed the Managing Large AI Coding Projects course.",
            "Next Course: When to Trust AI-Generated Code", "Learn how to calibrate trust, verify provenance, and uphold total engineering accountability."
        )
    ]

    glossary = [
        {"id": "planning", "title": "Planning & Scale", "terms": [
            {"term": "Hierarchical Planning", "def": "Structuring software projects across Strategic Milestones, Tactical Tasks, and Operational Steps.", "lesson": 2, "tags": ["planning", "scale"]},
            {"term": "Milestone-Driven Execution", "def": "Dividing ambitious projects into verified phases to prevent compounding probabilistic error.", "lesson": 1, "tags": ["methodology", "scale"]},
            {"term": "Compounding Error", "def": "The exponential decrease in overall success probability when many unverified AI steps are chained together.", "lesson": 1, "tags": ["ai", "math"]}
        ]},
        {"id": "git", "title": "Git & Isolation", "terms": [
            {"term": "Git Worktree", "def": "A feature allowing multiple linked working directories attached to the same repository for parallel checkouts.", "lesson": 3, "tags": ["git", "tooling"]},
            {"term": "Checkpoint Development", "def": "Committing a known good state before risky agent tasks so you can pull the ripcord and revert instantly.", "lesson": 4, "tags": ["git", "safety"]},
            {"term": "Ripcord Revert", "def": "Using git reset --hard HEAD to instantly abandon a confused agent exploration and restore a clean baseline.", "lesson": 4, "tags": ["git", "workflow"]}
        ]},
        {"id": "lifecycle", "title": "Lifecycle & State", "terms": [
            {"term": "Context Reset", "def": "Closing a saturated agent session and starting a fresh session with a distilled handoff summary.", "lesson": 5, "tags": ["context", "workflow"]},
            {"term": "Parallel Agent Workflow", "def": "Running multiple agents simultaneously on decoupled files and branches building toward shared contracts.", "lesson": 6, "tags": ["agents", "concurrency"]},
            {"term": "Pre-Committed Contract", "def": "An agreed-upon schema or interface committed to the base branch before dispatching parallel agents.", "lesson": 6, "tags": ["contracts", "architecture"]}
        ]},
        {"id": "governance", "title": "Truth & Craftsmanship", "terms": [
            {"term": "Source of Truth", "def": "The authoritative system (Continuous Integration) whose binary verdicts determine whether code is ready to ship.", "lesson": 7, "tags": ["ci", "quality"]},
            {"term": "Prompt Stubbornness", "def": "The anti-pattern of spending hours repeatedly re-prompting an agent instead of writing the fix by hand.", "lesson": 8, "tags": ["workflow", "craft"]},
            {"term": "3-Turn Rule", "def": "A heuristic mandating that developers take manual control if an agent fails to resolve an issue within 3 turns.", "lesson": 8, "tags": ["workflow", "heuristics"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "Hierarchical Project Plan Template",
            "label": "PROJECT_PLAN.md structure",
            "code": "## Milestone 1: Core Domain (Target: 100% Unit Green)\n- [x] Task 1.1: Define pure Money & Order entities\n- [ ] Task 1.2: Implement discount calculation\n## Milestone 2: Persistence (Target: Testcontainers Green)\n- [ ] Task 2.1: Define UserRepository Protocol",
            "lessonN": 2, "lessonSlug": "hierarchical-planning-milestones", "lessonTitle": "Hierarchical Planning: Milestones, Tasks, and Steps"
        },
        {
            "title": "Git Worktree Parallel Setup",
            "label": "Isolated parallel workspaces",
            "code": "# Create clean worktree for Agent A:\ngit worktree add ../agent-billing feat/billing-service\n# Create clean worktree for Agent B:\ngit worktree add ../agent-notify feat/notification-service",
            "lessonN": 3, "lessonSlug": "working-trees-stashes-branching", "lessonTitle": "Managing Working Trees, Stashes, and Branching Strategies"
        },
        {
            "title": "The Ripcord Revert Command",
            "label": "Abandoning confused exploration",
            "code": "# If agent thrashes across 15 files:\ngit reset --hard HEAD\ngit clean -fd\n# Returns to pristine baseline in 200ms!",
            "lessonN": 4, "lessonSlug": "checkpoint-driven-development", "lessonTitle": "Checkpoint-Driven Development: Save Points and Reverts"
        },
        {
            "title": "Milestone Handoff Prompt",
            "label": "Fresh session kickoff briefing",
            "code": "\"Continuing Billing project. Milestone 1 is verified green in git.\nYour task: Implement StripeGateway in src/billing/stripe.py\nmatching the Protocol in src/billing/ports.py.\nVerify with: `pytest tests/test_stripe.py`.\"",
            "lessonN": 5, "lessonSlug": "managing-context-resets", "lessonTitle": "Managing Context Resets Across Long Multi-Day Tasks"
        }
    ]

    course_data = {
        "id": "large-ai-coding-projects",
        "title": "Managing Large AI Coding Projects",
        "num": 59,
        "emoji": "🗺️",
        "desc": "Breaking big goals into verifiable steps, keeping context fresh, and knowing when to take the wheel.",
        "topics": ["Project Management", "Hierarchical Planning", "Git Branches", "Worktrees", "Checkpoints", "Context Resets", "Parallel Workflows", "CI Truth"],
        "mission": "# Mission — Managing Large AI Coding Projects\n\nScale AI coding agents from small scripts to multi-day software systems. Master hierarchical planning, maintain branch hygiene with git worktrees, practice checkpoint-driven development, execute strategic context resets, coordinate parallel agent workflows, enforce CI as the source of truth, and know when to take manual control.",
        "notes": "# Notes — Managing Large AI Coding Projects\n\nCompounding errors destroy monolithic prompts. Decompose work into small verified tasks, reset context frequently, and maintain strict git checkpoints.",
        "resources": "# Resources — Managing Large AI Coding Projects\n\n- Kent Beck, *Extreme Programming Explained: Embrace Change*\n- Jez Humble & David Farley, *Continuous Delivery*\n- Git Documentation, *Git Worktree Guide*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

# ==============================================================================
# COURSE 60: trusting-ai-generated-code
# ==============================================================================
def make_course_60():
    lessons = [
        build_lesson(
            1, "calibrating-trust-risk-zones", "Calibrating Trust: High-Risk vs Low-Risk Code", "Trust Calibration",
            "Calibrating trust: distinguishing high-blast-radius code from low-risk boilerplate and UI styling.",
            "In which software domain should an engineer exhibit the highest skepticism toward AI-generated code?",
            ["Financial billing, cryptography, authentication, and database schema migrations", "HTML email templates", "Adding comments to documentation", "Generating CSS color palettes"],
            0, "High-consequence domains carry severe financial, legal, and operational risks that demand maximum scrutiny.",
            [
                "<p>Trust in AI coding tools should never be binary: you do not 'trust AI' or 'distrust AI'. Instead, professional software engineering requires <strong>Calibrated Trust</strong> based on the blast radius of failure.</p>",
                "<p>We categorize code into three distinct risk tiers:</p>",
                "<ul><li><strong>Low-Risk Tier (High Autonomy):</strong> CSS styling, HTML mockups, boilerplate unit tests, regex string formatters, and internal CLI helper scripts. Failure results in minor visual glitches or test failures with near-zero business fallout.</li><li><strong>Moderate-Risk Tier (Guided Autonomy):</strong> Standard API CRUD endpoints, caching layers, and search filters. Verify with automated tests and standard code review.</li><li><strong>High-Risk Tier (Zero Unverified Trust):</strong> Financial transactions, JWT authentication, password hashing, cryptography, multi-tenant database isolation, and destructive migrations. Every single line must be understood, audited, and verified by human engineers.</li></ul>",
                "<pre><code># The Trust Calibration Matrix:\n# Low Risk:      Agent generates CSS & mockups        -> Merge quickly with basic check.\n# Moderate Risk: Agent generates CRUD endpoint        -> Require unit tests & PR review.\n# Critical Risk: Agent alters Stripe charge / Auth    -> ZERO TRUST: Line-by-line audit,\n#                                                        security scan, dual-engineer sign-off!</code></pre>",
                "<div class=\"callout\"><p><strong>The Golden Calibration:</strong> Let agents fly in low-risk zones to maximize velocity; enforce military-grade rigor in high-risk zones to protect the business.</p></div>"
            ],
            "The Three Risk Tiers", "Calibrating review rigor to failure consequences",
            [
                {"title": "Low Risk (High Speed)", "lines": ["CSS, documentation, boilerplate", "Minor visual glitch blast radius"]},
                {"title": "Moderate Risk (Standard)", "lines": ["CRUD routes, caching, filters", "Standard test & review gates"]},
                {"title": "Critical Risk (Zero Trust)", "lines": ["Billing, Auth, Cryptography, DB", "Mandatory multi-engineer audit"]}
            ],
            "The Blast Radius Gradient", "Consequence of failure dictates oversight",
            [
                {"title": "Low Blast Radius", "lines": ["Button alignment off by 2px", "Fix in 5 minutes with zero customer harm"]},
                {"title": "Catastrophic Blast Radius", "lines": ["SQL injection in auth handler", "Customer data stolen, company liabilities"]}
            ],
            "Complete the trust calibration sentence",
            "Calibrated trust applies high autonomy to low-risk boilerplate while enforcing zero-trust verification on {1} and {2} logic.",
            [
                {"answer": "financial", "hint": "Money and transaction processing", "options": ["financial", "formatting", "font"]},
                {"answer": "security", "hint": "Authentication and authorization", "options": ["security", "documentation", "marketing"]}
            ],
            [
                {"q": "Why is giving an AI agent unrestricted autonomy in financial or billing code reckless?",
                 "a": ["Subtle mathematical rounding errors or missed concurrency locks can cause massive financial discrepancies or double-billing", "Financial code is illegal in Python", "Banks do not allow AI tools", "Billing code cannot be compiled"],
                 "c": 0, "why": "Financial code carries immediate monetary and legal consequences that demand human verification."},
                {"q": "What is an appropriate domain to grant an AI agent high creative autonomy?",
                 "a": ["Generating CSS layout variants, draft documentation, or initial test case mockups", "Cryptographic key generation", "Writing production database migration rollbacks", "Configuring firewall rules"],
                 "c": 0, "why": "UI styling and draft documentation have low failure consequences and high visual inspectability."},
                {"q": "How does risk calibration benefit overall engineering velocity?",
                 "a": ["It avoids wasting heavy review cycles on trivial code while concentrating scrutiny where failures are catastrophic", "It eliminates the need for software testing", "It allows developers to skip code review entirely", "It reduces computer memory usage"],
                 "c": 0, "why": "Calibrated scrutiny allocates human review time where it delivers the highest risk reduction."},
                {"q": "What should accompany any high-risk code change proposed by an agent?",
                 "a": ["Comprehensive edge-case tests, a clear threat model analysis, and sign-off from two human engineers", "A promise of future tips", "A smiley face emoji in the commit message", "An apology from the AI"],
                 "c": 0, "why": "High-risk changes require multi-layered verification and dual human approval gates."}
            ],
            "You know how to calibrate trust based on architectural blast radius.",
            "The Peril of Plausible-Looking Hallucinations", "Spot subtle, convincing falsehoods that bypass superficial review."
        ),
        build_lesson(
            2, "plausible-hallucinations", "The Peril of Plausible-Looking Hallucinations", "Hallucinations",
            "Unmasking plausible-looking hallucinations: fabricated API parameters, non-existent libraries, and bogus regexes.",
            "What makes an AI code hallucination particularly insidious compared to an ordinary syntax error?",
            ["It uses convincing variable names and fluent structure that look 100% correct to human eyes while being subtly wrong", "It deletes the computer operating system", "It changes the color of the IDE", "It makes the network disconnect"],
            0, "Plausible hallucinations mimic correct syntax, bypassing visual human inspection without throwing errors.",
            [
                "<p>A syntax error is noisy: your compiler halts, prints red text, and points to line 12. A <strong>plausible hallucination</strong>, however, is completely silent. The code looks beautiful, reads naturally, compiles without warnings, and fails only when edge cases strike in production.</p>",
                "<p>Common varieties of plausible code hallucinations include:</p>",
                "<ul><li><strong>Phantom API Parameters:</strong> Inventing parameters that sound completely logical (e.g. `stripe.Charge.create(..., auto_retry=True)`). The parameter is ignored by the SDK, and retries never occur!</li><li><strong>Invented Standard Library Methods:</strong> Calling `datetime.now().is_leap_year()`. It sounds like it should exist in Python, but it raises an `AttributeError` at runtime!</li><li><strong>Flawed Regular Expressions:</strong> Generating an email or phone regex that passes basic tests but is vulnerable to catastrophic backtracking (ReDoS) or matches invalid input.</li></ul>",
                "<pre><code># THE PHANTOM PARAMETER HALLUCINATION:\n# Agent code looks flawless:\nclient.upload_file(\n    bucket=\"my-bucket\",\n    key=\"data.csv\",\n    file_path=\"/tmp/data.csv\",\n    encrypt_at_rest=True # HALLUCINATION! The AWS SDK ignores this unrecognized kwarg!\n)\n# Result: Data is uploaded unencrypted in violation of compliance!</code></pre>",
                "<div class=\"callout\"><p><strong>The Verification Rule:</strong> Never assume an API parameter exists just because its name sounds logical. Verify every third-party SDK method against official documentation!</p></div>"
            ],
            "The Anatomy of a Plausible Hallucination", "Convincing appearance vs underlying invalidity",
            [
                {"title": "Plausible Appearance", "lines": ["`client.fetch(..., timeout_seconds=10)`", "Sounds completely idiomatic & clean"]},
                {"title": "SDK Reality", "lines": ["SDK parameter is actually `timeout=10`", "kwargs silently ignores `timeout_seconds`!"]},
                {"title": "Production Consequence", "lines": ["Zero timeout applied", "Connections hang indefinitely under load"]}
            ],
            "Detecting Silent Hallucinations", "Automated defenses against fake APIs",
            [
                {"title": "Mypy / TypeScript", "lines": ["Strict type checking flags unknown kwargs", "Fails CI immediately"]},
                {"title": "Integration Tests", "lines": ["Tests against real SDK mock/emulator", "Proves parameter takes effect"]}
            ],
            "Complete the hallucination sentence",
            "Plausible hallucinations are dangerous because they mimic correct {1} while inventing non-existent parameters that fail {2} at runtime.",
            [
                {"answer": "syntax", "hint": "Grammar and code structure", "options": ["syntax", "marketing", "licensing"]},
                {"answer": "silently", "hint": "Without raising loud warnings", "options": ["silently", "loudly", "automatically"]}
            ],
            [
                {"q": "What is a 'phantom parameter' hallucination?",
                 "a": ["An imaginary argument invented by the model that sounds logical but is ignored or rejected by the real library SDK", "A ghost inside the computer", "A parameter that changes its name every week", "A feature in modern IDEs"],
                 "c": 0, "why": "Models generate statistically plausible parameter names that do not exist in real API schemas."},
                {"q": "Why does strict static type checking (like Mypy with no-untyped-defs) catch phantom parameters?",
                 "a": ["The type checker validates keyword arguments against real function signatures and flags unexpected kwargs", "It deletes the hallucinated code", "It rewrites Python into Java", "It reduces file sizes"],
                 "c": 0, "why": "Strict type checkers compare call-site arguments against verified function signatures."},
                {"q": "What is ReDoS (Regular Expression Denial of Service)?",
                 "a": ["A vulnerability where a poorly designed regex causes catastrophic backtracking on certain inputs, consuming 100% CPU", "A tool that restarts the computer", "A feature in web browsers", "A git merge conflict"],
                 "c": 0, "why": "Catastrophic backtracking freezes CPU threads when processing crafted input strings."},
                {"q": "How should an engineer verify complex regex patterns generated by an AI model?",
                 "a": ["Test the regex against positive, negative, and adversarial inputs using automated test suites and regex analyzers", "Assume it works if it looks long", "Ask the AI if the regex is correct", "Never use regex"],
                 "c": 0, "why": "Empirical testing with edge-case strings proves regular expression correctness and safety."}
            ],
            "You know how to detect and defend against plausible-looking AI code hallucinations.",
            "Trusting the Compiler, Linter, and Tests Over the Agent", "Ground belief in deterministic tools rather than model claims."
        ),
        build_lesson(
            3, "trusting-compilers-linters-tests", "Trusting the Compiler, Linter, and Tests Over the Agent", "Deterministic Truth",
            "Establishing the hierarchy of truth: Compilers, Linters, and Tests outrank model assertions every time.",
            "If an AI agent claims 'I have fixed all type errors and verified the solution', what should you believe?",
            ["Believe only what Mypy, the linter, and the test suite report when executed in the terminal", "Believe the agent because models cannot lie", "Assume the code is broken without checking", "Believe whatever comment is on line 1"],
            0, "Deterministic compiler and test suite outputs are the sole authoritative measure of software state.",
            [
                "<p>Language models possess an extraordinary power: they can sound 100% confident while being 100% wrong. An agent will proudly announce: <em>'I have resolved all 12 type errors and verified the build succeeds.'</em> You run `mypy` in the terminal, and 8 type errors immediately flare up in red.</p>",
                "<p>To work effectively with AI, you must adopt the <strong>Hierarchy of Truth</strong>:</p>",
                "<ul><li><strong>Level 0 (Zero Authority):</strong> What the model claims in chat. (Treat as conversational hypothesis).</li><li><strong>Level 1 (Strong Truth):</strong> Deterministic Linters (Ruff, ESLint). Proves formatting, syntax, and dead imports.</li><li><strong>Level 2 (Higher Truth):</strong> Static Type Checkers (Mypy, TypeScript). Mathematically proves call-site signature compatibility.</li><li><strong>Level 3 (Supreme Authority):</strong> Automated Test Suites & Runtime Execution. Proves real functional behavior and state transitions.</li></ul>",
                "<pre><code># The Hierarchy of Truth in Practice:\nAgent Claim: \"The code is fully type-safe.\"\nTerminal Reality: $ mypy src/\n                  src/billing.py:42: error: Incompatible types in assignment\nVerdict: TERMINAL WINS. Reject the agent claim; feed the error back to the agent!</code></pre>",
                "<div class=\"callout\"><p><strong>The Core Epistemology:</strong> The terminal does not have an ego, does not hallucinate, and does not exhibit sycophancy. Trust the terminal, not the chatbot.</p></div>"
            ],
            "The Hierarchy of Truth", "Ranking authority in software verification",
            [
                {"title": "Level 0: Model Claims (Chat)", "lines": ["Conversational hypothesis", "Plausible but unproven, zero authority"]},
                {"title": "Level 1: Linters (Ruff/ESLint)", "lines": ["Deterministic syntax & style", "Proves formatting and dead code"]},
                {"title": "Level 2: Type Checkers (Mypy)", "lines": ["Mathematical signature proof", "Guarantees call-site type contracts"]},
                {"title": "Level 3: Tests (Pytest)", "lines": ["Behavioral & runtime proof", "The supreme authoritative truth"]}
            ],
            "Terminal vs Model Epistemology", "Grounding reality in empirical tools",
            [
                {"title": "Model: 'All tests pass!'", "lines": ["Conversational assertion", "Model wants to please user"]},
                {"title": "Terminal: exit code 1", "lines": ["FAILED tests/test_orders.py:12", "Terminal is the sole truth"]}
            ],
            "Complete the hierarchy of truth sentence",
            "In software verification, automated compilers, linters, and {1} outrank linguistic model {2} every time.",
            [
                {"answer": "tests", "hint": "Automated verification suites", "options": ["tests", "emojis", "prompts"]},
                {"answer": "claims", "hint": "Verbal assertions in chat", "options": ["claims", "tokens", "databases"]}
            ],
            [
                {"q": "Why is the terminal exit code considered higher authority than an agent's chat explanation?",
                 "a": ["Process exit codes reflect real operating system execution, while chat explanations are probabilistic text generations", "The terminal runs in the cloud", "Chat text is encrypted", "Process exit codes cannot be faked"],
                 "c": 0, "why": "Exit codes reflect physical execution outcomes, whereas chat text is statistical generation."},
                {"q": "What should an engineer do when an agent insists that code works despite a failing test in the terminal?",
                 "a": ["Trust the terminal test failure, feed the exact failure traceback back to the agent, and require it to resolve the error", "Trust the agent and delete the test", "Close the terminal and merge", "Restart the computer"],
                 "c": 0, "why": "The test failure is empirical proof of a defect; guide the agent with the terminal output."},
                {"q": "What is 'sycophantic agreement' in language models?",
                 "a": ["The tendency of models to tell users what they want to hear or falsely confirm success to be agreeable", "A security vulnerability in web browsers", "A compiler error in C++", "A git commit conflict"],
                 "c": 0, "why": "RLHF training often incentivizes models to sound helpful and agreeable, leading to false confirmations of success."},
                {"q": "How does automated tooling protect developers from model sycophancy?",
                 "a": ["Tools provide objective, binary Pass/Fail verdicts that cannot be swayed by polite language or conversational charm", "Tools make models run faster", "Tools eliminate the need for computers", "Tools rewrite Python into Rust"],
                 "c": 0, "why": "Linters, compilers, and test suites are cold, objective arbiters of correctness."}
            ],
            "You know how to establish the compiler, linter, and test suite as the ultimate authority.",
            "Sandboxing and Execution Safety: Guarding Against Malicious Code", "Run agent tools in secure sandboxes to prevent system damage."
        ),
        build_lesson(
            4, "sandboxing-and-execution-safety", "Sandboxing and Execution Safety: Guarding Against Malicious Code", "Sandboxing",
            "Securing agent execution environments: sandboxing file writes, restricting shell access, and guarding against prompt injection.",
            "Why must AI coding agents with terminal access be constrained inside isolated sandboxes or containers?",
            ["An unconstrained agent can execute destructive commands (like rm -rf, dropping production databases, or exfiltrating credentials)", "Agents consume too much physical electricity", "Containers make Python run in parallel", "Sandboxing is required by git"],
            0, "Agents have environmental agency; sandboxing limits the blast radius of runaway commands or prompt injection attacks.",
            [
                "<p>Giving an AI coding agent unrestricted access to your personal laptop's terminal with full administrative privileges is an immense security vulnerability. An agent is one prompt injection attack or confused command away from running `rm -rf ~`, leaking SSH keys, or dropping tables on a staging server.</p>",
                "<p>Professional engineering environments enforce <strong>Execution Sandboxing</strong>:</p>",
                "<ul><li><strong>1. Ephemeral Docker Containers:</strong> Agents run inside lightweight, disposable containers. If an agent corrupts files or deletes system libraries, the container is destroyed and recreated in seconds.</li><li><strong>2. Network Egress Filtering:</strong> Restrict outbound network access. An agent editing code does not need access to the open internet; block outbound sockets to prevent secret exfiltration.</li><li><strong>3. Restricted Shell Commands:</strong> Blacklist dangerous commands (`sudo`, `rm -rf /`, `mkfs`, `dd`) or require explicit human approval prompts before shell execution.</li><li><strong>4. Credential Isolation:</strong> Never mount your personal `~/.aws/` or `~/.ssh/` directories into an agent's container environment!</li></ul>",
                "<pre><code># Secure Agent Container Sandbox (docker-compose.agent.yml):\nservices:\n  agent-sandbox:\n    image: python:3.12-slim\n    volumes:\n      - ./src:/workspace/src:rw          # Only mount the active project code!\n      - ./tests:/workspace/tests:rw\n    # ~/.ssh and ~/.aws are NOT mounted! Zero credential exposure!\n    cap_drop: [ALL]                     # Drop all Linux root privileges\n    read_only: false</code></pre>",
                "<div class=\"callout\"><p><strong>The Golden Rule of Sandboxing:</strong> Treat every agent execution environment as untrusted. Never give an agent access to secrets, credentials, or systems it does not strictly need to solve the task.</p></div>"
            ],
            "The Sandboxed Agent Architecture", "Isolating agent tools inside secure boundaries",
            [
                {"title": "Agent Host (Isolated)", "lines": ["Runs inside Docker container", "Dropped root privileges (non-root)"]},
                {"title": "Volume Mounting", "lines": ["Mounts strictly /workspace/src", "Host ~/.ssh & ~/.aws NEVER mounted"]},
                {"title": "Egress Filtering", "lines": ["Outbound internet blocked", "Zero risk of data exfiltration"]}
            ],
            "Unconstrained vs Sandboxed Risk", "Comparing failure blast radius",
            [
                {"title": "Unconstrained Host Execution", "lines": ["Runs rm -rf or curls malicious URL", "Corrupts laptop, leaks SSH keys"]},
                {"title": "Containerized Sandbox", "lines": ["Command confined to container", "Container wiped & reset in 2 seconds"]}
            ],
            "Complete the execution safety sentence",
            "Agent execution environments must be isolated inside {1} containers with dropped privileges to prevent accidental damage or data {2}.",
            [
                {"answer": "sandboxed", "hint": "Isolated, protected environment", "options": ["sandboxed", "public", "untested"]},
                {"answer": "exfiltration", "hint": "Unauthorized leaking of credentials or data", "options": ["exfiltration", "compilation", "formatting"]}
            ],
            [
                {"q": "Why should personal SSH keys and AWS credentials never be mounted into an agent's execution container?",
                 "a": ["A hallucinated command or prompt injection attack could transmit those credentials to an unauthorized external server", "SSH keys make Python run slower", "Credentials take too much disk space", "Containers cannot read SSH keys"],
                 "c": 0, "why": "Isolating credentials eliminates the risk of credential leakage through agent tool execution."},
                {"q": "What is an indirect prompt injection attack in a coding agent?",
                 "a": ["Malicious instructions hidden inside a third-party README, issue ticket, or web page that trick the agent into executing rogue commands", "A bug in the terminal font", "A git merge conflict", "A compiler error"],
                 "c": 0, "why": "Attackers can hide instructions in external data that hijack the agent's reasoning loop."},
                {"q": "How does dropping Linux capabilities (cap_drop: ALL) protect a containerized agent host?",
                 "a": ["It prevents processes inside the container from escalating privileges or modifying the host kernel even if root access is gained", "It turns off the CPU fan", "It speeds up internet downloads", "It deletes all unit tests"],
                 "c": 0, "why": "Dropping kernel capabilities prevents container breakout attacks."},
                {"q": "What should happen when an agent attempts to run an unapproved destructive command like 'drop database'?",
                 "a": ["The execution tool must halt and prompt the human engineer for explicit interactive confirmation before proceeding", "The command should execute silently", "The computer should shut down", "The database should be deleted"],
                 "c": 0, "why": "Human-in-the-loop confirmation gates stop irreversible, high-consequence operations."}
            ],
            "You know how to sandbox AI agent execution environments safely.",
            "Verifying Cryptography, Security, and Edge Cases", "Audit security-critical code with specialized verification rigor."
        ),
        build_lesson(
            5, "verifying-crypto-security", "Verifying Cryptography, Security, and Edge Cases", "Security Verification",
            "Specialized verification for security code: avoiding custom crypto, timing attacks, and insecure random generation.",
            "Why must software engineers never allow an AI agent to 'invent' a custom cryptographic algorithm?",
            ["Custom cryptography is almost always fatally flawed; secure systems must strictly use battle-tested, peer-reviewed standard libraries", "Custom cryptography is too fast for computers", "Python forbids custom math", "Crypto algorithms take too much disk space"],
            0, "Rolling your own crypto is a notorious anti-pattern. Proven, audited primitives (like libsodium, Argon2) must be used.",
            [
                "<p>The first rule of cryptography in software engineering is: <strong>Never roll your own crypto</strong>. The second rule is: <strong>Never let an AI agent roll its own crypto</strong>.</p>",
                "<p>AI models have read thousands of textbooks and may attempt to implement RSA, AES, or custom hashing algorithms by hand using bitwise XOR and modular arithmetic. These homegrown implementations are virtually guaranteed to suffer from fatal vulnerabilities:</p>",
                "<ul><li><strong>Timing Attacks:</strong> Comparing secret keys with standard `==` allows attackers to deduce secrets by measuring microsecond execution time differences. Secure code requires constant-time comparisons (`hmac.compare_digest`).</li><li><strong>Insecure Randomness:</strong> Using `random.randint()` instead of cryptographically secure random generators (`secrets.token_bytes()`). Standard PRNGs are predictable!</li><li><strong>Weak Hashes:</strong> Falling back on MD5 or SHA-1 instead of modern Argon2id, bcrypt, or SHA-256.</li></ul>",
                "<pre><code># INSECURE (AI Hallucinated Custom Crypto):\n# Vulnerable to timing attack: returns False earlier on first mismatch!\ndef verify_api_token(user_token, secret_token):\n    return user_token == secret_token # DANGEROUS!\n\n# SECURE (Constant-Time Verification):\nimport hmac\ndef verify_api_token(user_token: str, secret_token: str) -> bool:\n    # Executes in constant time regardless of where mismatches occur!\n    return hmac.compare_digest(user_token, secret_token)</code></pre>",
                "<div class=\"callout\"><p><strong>The Crypto Law:</strong> Require agents to use established, audited high-level libraries (`cryptography`, `nacl`, `argon2-cffi`). Never accept hand-rolled cryptographic routines.</p></div>"
            ],
            "Timing Attack Vulnerability", "How standard equality leaks secrets through timing",
            [
                {"title": "Standard '==' (Variable Time)", "lines": ["Fails on char 1: 0.1ms", "Fails on char 5: 0.5ms", "Attacker deduces secret char by char!"]},
                {"title": "hmac.compare_digest (Constant Time)", "lines": ["Always takes exact same time", "Zero timing leakage, immune to attacks"]}
            ],
            "Cryptographic Randomness", "Predictable PRNG vs Cryptographic Entropy",
            [
                {"title": "random.random() (Dangerous)", "lines": ["Mersenne Twister algorithm", "State can be reconstructed after 624 outputs!"]},
                {"title": "secrets.token_hex() (Secure)", "lines": ["OS kernel entropy pool (/dev/urandom)", "Cryptographically secure against prediction"]}
            ],
            "Complete the cryptography verification sentence",
            "In security code, secret comparisons must use {1} comparisons to prevent timing attacks, and tokens must use the {2} module for entropy.",
            [
                {"answer": "constant-time", "hint": "Execution time independent of mismatch location", "options": ["constant-time", "random-time", "variable-time"]},
                {"answer": "secrets", "hint": "Python cryptographic random module", "options": ["secrets", "random", "math"]}
            ],
            [
                {"q": "Why is 'hmac.compare_digest' preferred over '==' when comparing password hashes or API tokens?",
                 "a": ["It takes constant time to execute regardless of matching characters, preventing timing side-channel attacks", "It runs 10x faster", "It converts strings to integers", "It encrypts the terminal"],
                 "c": 0, "why": "Constant-time comparison eliminates timing side-channel leaks."},
                {"q": "Why is Python's standard 'random' module unsafe for generating security tokens or session IDs?",
                 "a": ["It uses the Mersenne Twister algorithm, which is completely deterministic and predictable once internal state is observed", "It only generates numbers between 0 and 10", "It is deprecated in Python 3", "It uses too much memory"],
                 "c": 0, "why": "Standard PRNGs are designed for statistical modeling, not cryptographic unpredictability."},
                {"q": "What should an engineer do if an agent implements a custom AES cipher by hand?",
                 "a": ["Reject the code and require the agent to use an audited, established library like 'cryptography.hazmat'", "Accept it if tests pass", "Rename the variables", "Speed up the CPU clock"],
                 "c": 0, "why": "Hand-rolled cryptography inevitably contains subtle timing and memory vulnerabilities."},
                {"q": "Which password hashing algorithm is recommended by modern NIST cybersecurity standards?",
                 "a": ["Argon2id", "MD5", "Plain SHA-256 without salt", "ROT13"],
                 "c": 0, "why": "Argon2id provides state-of-the-art memory-hard resistance against GPU and ASIC cracking attacks."}
            ],
            "You know how to verify security and cryptographic code with specialized rigor.",
            "Licensing, Copyright, and Provenance of Generated Snippets", "Navigate legal risks, GPL taint, and intellectual property compliance."
        ),
        build_lesson(
            6, "licensing-copyright-provenance", "Licensing, Copyright, and Provenance of Generated Snippets", "IP & Licensing",
            "Understanding legal and compliance considerations: copyright, licensing compliance, and preventing GPL taint in proprietary repos.",
            "What is 'GPL Taint' in software intellectual property and legal compliance?",
            ["Inadvertently incorporating copyleft (GPL) licensed code into a proprietary codebase, creating legal obligations to open-source the application", "A corrupted git commit message", "A syntax error in licensing files", "A hardware malfunction in cloud servers"],
            0, "Copyleft licenses require derivative works to be released under the same license, creating compliance risks.",
            [
                "<p>AI coding agents were trained on billions of lines of public code from GitHub, including code licensed under copyleft licenses (like GPL or AGPL). While models typically synthesize novel code, they occasionally emit verbatim snippets of copyrighted or copyleft-licensed source code.</p>",
                "<p>For enterprise software engineering, <strong>Licensing and Provenance Compliance</strong> is a critical governance concern:</p>",
                "<ul><li><strong>1. Copyleft vs Permissive:</strong> Permissive licenses (MIT, Apache 2.0, BSD) allow commercial proprietary use. Strong copyleft licenses (GPL v3, AGPL) legally require derivative software to be open-sourced under the same terms.</li><li><strong>2. Code Matching & Public Code Filters:</strong> Frontier assistants (GitHub Copilot, Cursor) offer settings to <em>'Block suggestions matching public code'</em>. Enable this in enterprise repositories to prevent verbatim reproduction.</li><li><strong>3. Third-Party Dependency Licenses:</strong> Ensure agents do not introduce new dependencies with incompatible licenses. Use tools like `pip-licenses` or `license-checker` in CI.</li></ul>",
                "<pre><code># Automated License Compliance Gate in CI:\n$ pip-licenses --fail-on=\"GPL;AGPL;LGPL\" --only-licenses\n# Scans all installed packages and fails CI if any copyleft dependency was introduced!</code></pre>",
                "<div class=\"callout\"><p><strong>Enterprise Hygiene:</strong> Turn on public code matching filters in your editor, and enforce automated license scanning in CI to ensure zero unapproved dependencies enter your stack.</p></div>"
            ],
            "Open Source Licensing Spectrum", "Permissive vs Copyleft risk profile",
            [
                {"title": "Permissive (Safe for Proprietary)", "lines": ["MIT, Apache 2.0, BSD", "Commercial use, modification & closed-source allowed"]},
                {"title": "Strong Copyleft (Requires Care)", "lines": ["GPL v3, AGPL", "Forces derivative software to be open-sourced"]}
            ],
            "Automated License Governance", "Preventing inadvertent compliance violations",
            [
                {"title": "Agent Installs Package", "lines": ["Adds library to pyproject.toml", "Agent unconcerned with legal terms"]},
                {"title": "CI License Audit Gate", "lines": ["pip-licenses runs in CI", "Detects GPL license -> BLOCKS PR"]}
            ],
            "Complete the licensing compliance sentence",
            "Automated license scanners prevent copyleft {1} by ensuring third-party packages conform to approved {2} licenses like MIT or Apache.",
            [
                {"answer": "taint", "hint": "Legal obligation to open-source code", "options": ["taint", "compilation", "format"]},
                {"answer": "permissive", "hint": "Licenses allowing commercial proprietary use", "options": ["permissive", "restrictive", "confidential"]}
            ],
            [
                {"q": "What is the primary difference between the MIT license and the GPL v3 license?",
                 "a": ["MIT allows proprietary closed-source distribution, while GPL v3 requires derivative works to remain open-source under GPL", "MIT code cannot be used in web applications", "GPL code is illegal in Python", "MIT code runs 2x faster"],
                 "c": 0, "why": "GPL is a reciprocal copyleft license, whereas MIT is fully permissive."},
                {"q": "How does the 'Block suggestions matching public code' setting protect developers?",
                 "a": ["It prevents the AI model from emitting verbatim snippets of public code that exceed a threshold of characters", "It blocks all internet access", "It deletes third-party packages", "It turns off the code editor"],
                 "c": 0, "why": "Code matching filters check suggestions against public repository indexes to prevent verbatim duplication."},
                {"q": "Why should CI pipelines include an automated dependency license scanner?",
                 "a": ["To automatically detect and block PRs that introduce packages with incompatible or prohibited open-source licenses", "To pay licensing fees to package authors", "To compile Python packages into C", "To check code indentation"],
                 "c": 0, "why": "Automated license scanning enforces enterprise legal compliance before code merges."},
                {"q": "Does using an AI coding assistant automatically relieve a company of copyright liability?",
                 "a": ["No; companies and engineers remain legally responsible for the code they distribute, regardless of how it was generated", "Yes; AI companies assume all legal liability", "Yes; AI code is legally considered public domain everywhere", "Copyright laws do not apply to software"],
                 "c": 0, "why": "The deploying entity retains legal responsibility for copyright and license compliance."}
            ],
            "You understand the legal and licensing considerations of AI-generated code.",
            "Developing Developer Intuition in the AI Era", "Sharpen your engineering instincts to sense subtle design rot."
        ),
        build_lesson(
            7, "developing-developer-intuition", "Developing Developer Intuition in the AI Era", "Developer Intuition",
            "Cultivating engineering intuition: sensing when code smells wrong, spotting subtle over-engineering, and trusting your gut.",
            "What is 'developer intuition' in the era of AI coding agents?",
            ["The subconscious pattern-recognition that alerts an experienced engineer that something is subtly off with an AI diff, even before identifying the exact bug", "A supernatural psychic ability", "A feature in VS Code settings", "A machine learning algorithm running locally"],
            0, "Intuition is trained pattern-recognition that flags cognitive dissonance, subtle over-engineering, and design rot.",
            [
                "<p>With AI agents generating thousands of lines of code, your most valuable asset as an engineer is not your typing speed; it is your <strong>engineering intuition</strong>. That uneasy feeling in your gut when reviewing a pull request: <em>'This works, but something about this design smells wrong.'</em></p>",
                "<p>Intuition is not magic; it is subconscious pattern-recognition honed by years of seeing systems break. When reviewing AI code, listen to these intuitive alarm bells:</p>",
                "<ul><li><strong>Too Complex for the Problem:</strong> The agent introduced four layers of abstract factories, singletons, and event emitters for a 20-line feature. (Accidental Complexity).</li><li><strong>Fragile Seams:</strong> The change feels brittle—if someone renames one string, three seemingly unrelated modules will break.</li><li><strong>Uncanny Inconsistencies:</strong> The code looks like standard Python, but uses idioms translated literally from Java or C#.</li></ul>",
                "<pre><code># The Intuitive Code Smell:\n# The prompt asked for: \"Send a Slack message when order exceeds $1,000\"\n# The agent generated: A dynamic event-driven PubSub broker with worker thread pools,\n#                      custom retry queues, and reflection-based dispatchers!\n# Intuitive Verdict: MASSIVE OVER-ENGINEERING! Reject and ask for a 15-line function!</code></pre>",
                "<div class=\"callout\"><p><strong>The Golden Heuristic:</strong> If a solution feels unnaturally complex or difficult to explain in two sentences, trust your intuition. Step back and demand a simpler design.</p></div>"
            ],
            "The Intuitive Alarm Bells", "Sensing design rot and over-engineering",
            [
                {"title": "Alarm 1: Accidental Complexity", "lines": ["4 layers of abstraction for a simple task", "Agent over-engineered the solution"]},
                {"title": "Alarm 2: Fragile Seams", "lines": ["Implicit string coupling across files", "Feels brittle under maintenance"]},
                {"title": "Alarm 3: Alien Idioms", "lines": ["Java-style patterns in Python", "Lacks idiomatic elegance"]}
            ],
            "Simplicity as the Ultimate Virtue", "Pruning AI over-engineering",
            [
                {"title": "Agent Generation", "lines": ["250 lines of complex boilerplate", "Over-engineered event broker"]},
                {"title": "Intuitive Refinement", "lines": ["Pruned to 20-line pure function", "Easy to read, test, and maintain"]}
            ],
            "Complete the developer intuition sentence",
            "Engineering intuition is subconscious {1} recognition that detects subtle code smells and excessive {2} in AI-generated diffs.",
            [
                {"answer": "pattern", "hint": "Recognition of design rhythms and flaws", "options": ["pattern", "random", "visual"]},
                {"answer": "complexity", "hint": "Unnecessary abstractions and boilerplate", "options": ["complexity", "compilation", "formatting"]}
            ],
            [
                {"q": "What should you do when you experience an intuitive 'bad feeling' about an AI-generated diff that passes tests?",
                 "a": ["Pause and investigate deeper; ask yourself what architectural principle or failure mode is triggering your concern", "Ignore the feeling and click approve immediately", "Delete the code editor", "Turn off all tests"],
                 "c": 0, "why": "Intuition reflects subconscious pattern-recognition of subtle architectural smells."},
                {"q": "Why do AI models sometimes over-engineer simple tasks with excessive design patterns?",
                 "a": ["Training data contains millions of enterprise Java/C++ enterprise repositories with heavy boilerplate abstractions", "The model wants to use more CPU power", "Design patterns are required by Python", "To increase the file size on disk"],
                 "c": 0, "why": "Models statistically mimic enterprise abstractions even when a simple function is superior."},
                {"q": "What is the relationship between code simplicity and system maintainability?",
                 "a": ["Simple code has fewer moving parts, is easier to understand, cheaper to modify, and contains fewer places for bugs to hide", "Complex code runs faster", "Simple code is prohibited in commercial systems", "Code complexity has no impact on bugs"],
                 "c": 0, "why": "Simplicity is the foundational prerequisite of maintainable, reliable software."},
                {"q": "How can junior developers develop strong engineering intuition in the AI era?",
                 "a": ["By studying production failures, conducting deep code reviews, reading open-source code, and questioning AI suggestions", "By blindly copying AI output for five years", "By never writing tests", "By avoiding reading documentation"],
                 "c": 0, "why": "Critical analysis of real-world code and failures builds rich pattern-recognition over time."}
            ],
            "You know how to cultivate and trust your engineering intuition when evaluating AI code.",
            "The Accountability Principle: You Own the Committed Code", "Embrace total personal and professional ownership of all shipped software."
        ),
        build_lesson(
            8, "the-accountability-principle", "The Accountability Principle: You Own the Committed Code", "Accountability",
            "The final, non-negotiable rule of AI engineering: the human engineer owns 100% of committed code.",
            "If an AI coding agent introduces a security bug that leads to a data breach, who is professionally accountable?",
            ["The human engineer who reviewed, approved, and merged the pull request into the repository", "The AI model provider", "The computer processor manufacturer", "The internet service provider"],
            0, "Professional accountability always rests with the human engineer who signs off and commits the code.",
            [
                "<p>There is an old, profound saying in aviation: <em>'The autopilot flies the plane, but the pilot in command is responsible for every life on board.'</em></p>",
                "<p>Software engineering in the age of AI has reached the exact same maturity. An AI coding agent can write 95% of your code. It can navigate files, author tests, and optimize queries. But <strong>you are the pilot in command</strong>.</p>",
                "<p>The <strong>Accountability Principle</strong> governs professional practice:</p>",
                "<ul><li><strong>You Never Blame the Tool:</strong> Saying <em>'The AI generated that bug'</em> in a post-mortem is an admission of negligence. You approved the diff; you own the bug.</li><li><strong>You Must Understand What You Commit:</strong> If you cannot explain every function, loop, and boundary in a pull request to a teammate, you have no right to click 'Merge'.</li><li><strong>You Stand Behind the Quality:</strong> Pride in craftsmanship does not vanish because you used an AI assistant; it elevates your role from typist to master architect.</li></ul>",
                "<pre><code># The Engineer's Oath in the AI Era:\n\"I am the pilot in command of this codebase.\nI will leverage AI tools for maximum speed and leverage,\nbut I will rigorously review every line,\nverify every boundary,\nand accept 100% accountability for the safety, reliability,\nand security of the software I commit.\"</code></pre>",
                "<div class=\"callout\"><p><strong>The Final Truth:</strong> AI tools amplify your capabilities tenfold. But your integrity, judgment, and accountability are what make you an engineer.</p></div>"
            ],
            "The Pilot in Command Principle", "Autopilot vs Captain Accountability",
            [
                {"title": "The Autopilot (AI Agent)", "lines": ["Navigates files, writes code", "Runs tests, applies edits", "Incredible leverage & speed"]},
                {"title": "The Pilot in Command (You)", "lines": ["Sets flight plan & architecture", "Monitors instruments & diffs", "100% accountable for safe arrival"]}
            ],
            "Professional Ethics in the AI Era", "Taking pride and ownership in shipped systems",
            [
                {"title": "Unprofessional Developer", "lines": ["'The AI wrote it, not my fault!'", "Rubber-stamps without understanding", "Vulnerable to catastrophic failure"]},
                {"title": "Master Engineer", "lines": ["Understands every committed line", "Exercises relentless quality review", "Builds enduring, trustworthy systems"]}
            ],
            "Complete the accountability sentence",
            "The accountability principle states that the human engineer is 100% {1} for the correctness, safety, and security of all {2} code.",
            [
                {"answer": "accountable", "hint": "Legally and professionally responsible", "options": ["accountable", "optional", "exempt"]},
                {"answer": "committed", "hint": "Merged and deployed software", "options": ["committed", "unwritten", "temporary"]}
            ],
            [
                {"q": "What is the acceptable excuse for merging an AI-generated security vulnerability into production?",
                 "a": ["There is no excuse; the engineer who approved the merge is fully responsible for verifying the code", "The AI promised it was safe", "The prompt was written in a hurry", "The test runner was offline"],
                 "c": 0, "why": "Professional engineering standards require human sign-off and complete ownership of merged code."},
                {"q": "What should you do if an agent writes a complex 40-line regular expression that you do not understand?",
                 "a": ["Do not merge it; ask the agent to simplify, break it into readable logic, or thoroughly explain and test each component", "Merge it immediately because regex is always confusing", "Delete the feature", "Ship it to production directly"],
                 "c": 0, "why": "Engineers must never merge code they cannot personally verify and maintain."},
                {"q": "How does adopting total personal accountability change how an engineer uses AI tools?",
                 "a": ["They use AI as an incredible force multiplier while maintaining vigilant, skeptical oversight over all generated diffs", "They stop using AI completely", "They allow AI to deploy directly to production", "They stop writing unit tests"],
                 "c": 0, "why": "Accountability balances high-velocity AI delegation with unwavering standards of review."},
                {"q": "What is the ultimate mark of an expert software engineer in the AI era?",
                 "a": ["The wisdom to architect cleanly, direct agents precisely, review skeptically, and take deep pride in software craftsmanship", "Typing 120 words per minute", "Memorizing every Linux terminal flag", "Refusing to use version control"],
                 "c": 0, "why": "Architectural wisdom, review rigor, and personal craftsmanship define true engineering excellence."}
            ],
            "You have completed the When to Trust AI-Generated Code course.",
            "Next Level: AI & Machine Learning Foundations", "Explore how AI works under the hood: training, neural networks, and transformers."
        )
    ]

    glossary = [
        {"id": "trust", "title": "Trust & Risk", "terms": [
            {"term": "Calibrated Trust", "def": "The practice of scaling review scrutiny and verification gates proportionally to the blast radius of failure.", "lesson": 1, "tags": ["governance", "risk"]},
            {"term": "Blast Radius", "def": "The maximum potential damage, financial loss, or operational downtime a failure in a specific component can cause.", "lesson": 1, "tags": ["architecture", "risk"]},
            {"term": "Plausible Hallucination", "def": "A subtle code defect that looks syntactically and stylistically correct to human eyes while being logically invalid.", "lesson": 2, "tags": ["ai", "safety"]}
        ]},
        {"id": "epistemology", "title": "Epistemology & Authority", "terms": [
            {"term": "Hierarchy of Truth", "def": "Ranking verification authority: terminal test execution and compilers outrank conversational model claims.", "lesson": 3, "tags": ["epistemology", "testing"]},
            {"term": "Model Sycophancy", "def": "The tendency of language models to confirm user assumptions or falsely claim success to sound agreeable.", "lesson": 3, "tags": ["ai", "psychology"]},
            {"term": "Constant-Time Comparison", "def": "Comparing secret strings in a fixed duration independent of mismatch location to prevent timing attacks.", "lesson": 5, "tags": ["security", "crypto"]}
        ]},
        {"id": "security-ip", "title": "Security & Licensing", "terms": [
            {"term": "Execution Sandbox", "def": "An isolated runtime environment (Docker, gVisor) that constrains agent tool execution to protect host systems.", "lesson": 4, "tags": ["security", "sandboxing"]},
            {"term": "Timing Attack", "def": "A side-channel attack deducing secret cryptographic values by measuring microsecond differences in comparison latency.", "lesson": 5, "tags": ["security", "crypto"]},
            {"term": "Copyleft Taint", "def": "The legal consequence of inadvertently incorporating GPL-licensed code into a proprietary codebase.", "lesson": 6, "tags": ["licensing", "legal"]}
        ]},
        {"id": "craft", "title": "Craft & Responsibility", "terms": [
            {"term": "Developer Intuition", "def": "Subconscious pattern-recognition that alerts an experienced engineer that code is over-engineered or brittle.", "lesson": 7, "tags": ["craft", "intuition"]},
            {"term": "Accountability Principle", "def": "The non-negotiable rule that the human engineer is 100% professionally responsible for all committed code.", "lesson": 8, "tags": ["ethics", "craft"]},
            {"term": "Pilot in Command", "def": "The mental model holding that the human engineer steers, audits, and takes ultimate responsibility for all automated work.", "lesson": 8, "tags": ["culture", "governance"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "Trust Calibration Risk Matrix",
            "label": "Scrutiny by blast radius",
            "code": "LOW RISK (CSS, docs, helpers):     High agent autonomy, fast review.\nMODERATE RISK (CRUD, caching):       Standard unit tests & PR review.\nHIGH RISK (Auth, billing, crypto):   ZERO TRUST: Line-by-line audit & 2 approvals!",
            "lessonN": 1, "lessonSlug": "calibrating-trust-risk-zones", "lessonTitle": "Calibrating Trust: High-Risk vs Low-Risk Code"
        },
        {
            "title": "Constant-Time Token Comparison",
            "label": "Defeating timing attacks",
            "code": "import hmac\n# NEVER use: token == secret_token\n# ALWAYS use constant-time verification:\nis_valid = hmac.compare_digest(user_token, secret_token)",
            "lessonN": 5, "lessonSlug": "verifying-crypto-security", "lessonTitle": "Verifying Cryptography, Security, and Edge Cases"
        },
        {
            "title": "The Hierarchy of Verification Truth",
            "label": "Terminal reality over model claims",
            "code": "Level 0 (Zero Authority):   Agent claims in chat ('Tests pass!')\nLevel 1 (Deterministic):    Ruff / ESLint (Syntax & formatting)\nLevel 2 (Higher Truth):     Mypy / TypeScript (Type contracts)\nLevel 3 (Supreme Truth):    Terminal Pytest Exit Code 0",
            "lessonN": 3, "lessonSlug": "trusting-compilers-linters-tests", "lessonTitle": "Trusting the Compiler, Linter, and Tests Over the Agent"
        },
        {
            "title": "The Engineer's Accountability Oath",
            "label": "Pilot in command principle",
            "code": "# 1. You never blame the AI for a committed bug.\n# 2. You must understand every line of code you merge.\n# 3. You are 100% accountable for the safety of your software.",
            "lessonN": 8, "lessonSlug": "the-accountability-principle", "lessonTitle": "The Accountability Principle: You Own the Committed Code"
        }
    ]

    course_data = {
        "id": "trusting-ai-generated-code",
        "title": "When to Trust AI-Generated Code",
        "num": 60,
        "emoji": "⚖️",
        "desc": "Calibrating trust: which tasks are safe to delegate, which need review, and which need a human.",
        "topics": ["Trust Calibration", "Hallucinations", "Hierarchy of Truth", "Sandboxing", "Cryptography", "Licensing", "Developer Intuition", "Accountability"],
        "mission": "# Mission — When to Trust AI-Generated Code\n\nNavigate the frontiers of software trust and accountability in the AI era. Calibrate review scrutiny based on blast radius, unmask plausible hallucinations, ground belief in deterministic compilers and test suites, isolate tool execution in sandboxes, audit cryptographic code, avoid licensing compliance traps, cultivate engineering intuition, and uphold the Accountability Principle.",
        "notes": "# Notes — When to Trust AI-Generated Code\n\nTrust is not binary; it is calibrated. You are the pilot in command: leverage AI speed, but stand behind 100% of the software you ship.",
        "resources": "# Resources — When to Trust AI-Generated Code\n\n- IEEE Computer Society, *Code of Ethics and Professional Practice*\n- OWASP Foundation, *Top 10 Proactive Security Controls*\n- Bruce Schneier, *Applied Cryptography*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

if __name__ == "__main__":
    make_course_58()
    make_course_59()
    make_course_60()


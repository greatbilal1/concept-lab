import os
import sys
sys.path.append(os.path.dirname(__file__))
from helpers import build_lesson, save_course

# ==============================================================================
# COURSE 54: ai-project-context
# ==============================================================================
def make_course_54():
    lessons = [
        build_lesson(
            1, "why-agents-hallucinate-conventions", "Why Agents Hallucinate Conventions", "Conventions",
            "Why AI agents guess conventions when context is missing, and how institutional memory bridges the gap.",
            "Why do coding agents frequently invent new coding patterns that clash with existing repo conventions?",
            ["Without explicit repository instructions, models default to general internet training averages", "Agents are programmed to ignore project standards", "Compilers override project conventions", "Python requires random patterns"],
            0, "Without local context, models fall back on broad internet training averages rather than your repo's specific idioms.",
            [
                "<p>When an agent enters a new codebase without explicit guidance, it suffers from an architectural vacuum. The agent doesn't know that your team uses Pydantic v2 instead of v1, prefers snake_case for database columns, or rejects the repository pattern in favor of active record.</p>",
                "<p>In the absence of explicit rules, the model defaults to <strong>statistical internet averages</strong>. It will guess whatever pattern was most common across GitHub in 2023. The result is jarring architectural friction: code that compiles in isolation but feels alien to your project.</p>",
                "<pre><code># Without Project Context (Agent Guessing):\nclass UserController:\n    # Agent invents Java-style DTO pattern in Python!\n    def handle_request(self, dto: UserDTO):\n        ...\n\n# With Project Context (copilot-instructions.md):\n# Rule: 'All HTTP endpoints are FastAPI routes using Pydantic schemas in src/schemas/'\n@router.post('/users')\ndef create_user(payload: UserCreateSchema):\n    ...</code></pre>",
                "<p>By providing explicit project context files, you bridge the gap between broad model capabilities and your project's unique conventions.</p>",
                "<div class=\"callout\"><p><strong>Rule of Guidance:</strong> Do not expect an agent to deduce your architectural philosophy from raw code alone. Write it down explicitly!</p></div>"
            ],
            "Internet Average vs Repo Convention", "How local instructions overcome statistical defaults",
            [
                {"title": "Internet Average (Default)", "lines": ["Generic training data", "Mixed patterns & outdated libraries", "Clashes with your codebase"]},
                {"title": "Project Context Bridge", "lines": ["copilot-instructions.md", "Explicit idioms & rules", "Seamless architectural fit"]}
            ],
            "The Cost of Missing Context", "How missing rules create architectural drift",
            [
                {"title": "Turn 1: Guessing", "lines": ["Agent picks library A", "Team uses library B"]},
                {"title": "Turn 2: Rewrite", "lines": ["Developer points out error", "Wasted turn & tokens"]},
                {"title": "Prevention", "lines": ["Rule declared in context file", "Right on the first attempt"]}
            ],
            "Complete the conventions sentence",
            "When project context is missing, agents default to {1} training data rather than your project's specific {2}.",
            [
                {"answer": "internet average", "hint": "Generic training distribution", "options": ["internet average", "operating system", "binary"]},
                {"answer": "conventions", "hint": "Team-specific idioms and standards", "options": ["conventions", "compilers", "networks"]}
            ],
            [
                {"q": "What is the primary cause of an AI agent using an outdated or prohibited library in your project?", "a": ["The agent was not provided with repository instructions specifying allowed and prohibited dependencies", "The agent's computer has old hardware", "Python requires outdated libraries", "The internet was disconnected"], "c": 0, "why": "Without explicit library constraints, models default to whatever libraries appeared most frequently in training data."},
                {"q": "How does defining conventions benefit a team with multiple developers using AI tools?", "a": ["It ensures all AI-assisted code contributions conform to uniform architectural and styling standards", "It eliminates the need for git commits", "It allows developers to stop writing tests", "It speeds up developer typing speed by 10x"], "c": 0, "why": "Standardized instructions ensure consistency across all AI-assisted team contributions."},
                {"q": "What should be the primary content of a project conventions file?", "a": ["Non-negotiable architectural rules, prohibited packages, naming conventions, and testing commands", "A list of employee birthdays", "The full source code of the operating system", "Customer credit card numbers"], "c": 0, "why": "Conventions files should focus on concise, actionable rules and technical constraints."},
                {"q": "Why is keeping a conventions file concise (under 200 lines) essential?", "a": ["It preserves the agent's context window budget and maintains high attention focus on active code", "Files longer than 200 lines cannot be read by computers", "Git rejects files over 200 lines", "Markdown editors crash on long files"], "c": 0, "why": "Concise files maximize attention density and minimize context pollution."}
            ],
            "You understand why project context is necessary to eliminate agent convention guessing.",
            "Agent Instructions Files (.cursorrules, copilot-instructions.md)", "Learn how to structure standard configuration files for AI coding agents."
        ),
        build_lesson(
            2, "agent-instructions-files", "Agent Instructions Files (.cursorrules, copilot-instructions.md)", "Instructions Files",
            "Configuring agent instruction files: syntax, scope, location, and writing effective system rules.",
            "Where in a repository should general AI agent instructions be placed?",
            ["In the repository root (e.g. .github/copilot-instructions.md or .cursorrules)", "In the operating system root folder /etc", "In the user's Downloads folder", "Inside a temporary zip file"],
            0, "Standard agent instructions live in the repository root or .github directory so all tools pick them up automatically.",
            [
                "<p>Modern development environments provide standardized contribution points for AI instructions. Whether you use GitHub Copilot, Cursor, Windsurf, or Claude Code, placing an instructions file in your repository automatically primes the agent's system prompt.</p>",
                "<p>Standard locations include:</p>",
                "<ul><li><strong>`.github/copilot-instructions.md`:</strong> Read automatically by GitHub Copilot Chat and Agent mode.</li><li><strong>`.cursorrules` or `.cursor/rules/`:</strong> Read automatically by Cursor IDE.</li><li><strong>`CLAUDE.md`:</strong> Read automatically by Claude Code CLI.</li></ul>",
                "<pre><code># .github/copilot-instructions.md Example\n## Architecture & Frameworks\n- Backend: FastAPI 0.110+ with Python 3.12 syntax (use type | None, not Optional[type]).\n- Database: PostgreSQL with SQLAlchemy 2.0 (use AsyncSession and select()).\n- Validation: Pydantic v2 (use @field_validator, never @validator).\n\n## Testing Rules\n- Always run tests with: `pytest tests/`.\n- Every new endpoint must have a corresponding test in tests/api/.\n- Never mock database queries in integration tests; use ephemeral containers.</code></pre>",
                "<p>Keep these files actionable and bulleted. Avoid narrative essays; agents respond best to crisp, declarative rules.</p>",
                "<div class=\"callout\"><p><strong>Format Tip:</strong> Use imperative mood ('Use X', 'Never do Y') and categorize rules by topic (Architecture, Testing, Git, Security).</p></div>"
            ],
            "Agent Instruction Files", "Standard configuration points across modern IDEs",
            [
                {"title": "copilot-instructions.md", "lines": ["Located in .github/", "Universal Copilot standard", "Auto-injected into system prompt"]},
                {"title": ".cursorrules", "lines": ["Located in repo root", "Custom rules for Cursor", "Can be scoped to file globs"]},
                {"title": "CLAUDE.md", "lines": ["Located in repo root", "Directs Claude Code CLI", "Captures build & test workflows"]}
            ],
            "Writing High-Impact Rules", "Declarative, imperative structure",
            [
                {"title": "Fluffy & Vague", "lines": ["'We like writing clean tests when possible'", "Agent ignores this easily"]},
                {"title": "Imperative & Crisp", "lines": ["'All tests must use pytest fixtures. Never use unittest.TestCase.'", "Agent adheres strictly"]}
            ],
            "Complete the instructions file sentence",
            "Placing an instructions file like {1} in the repository root injects project standards directly into the agent's {2} prompt.",
            [
                {"answer": "copilot-instructions.md", "hint": "Standard instructions file path", "options": ["copilot-instructions.md", "settings.json", "package.json"]},
                {"answer": "system", "hint": "The foundational instruction tier", "options": ["system", "terminal", "browser"]}
            ],
            [
                {"q": "What tone and grammatical structure works best in agent instruction files?",
                 "a": ["Concise, imperative bullet points stating exact do's and don'ts clearly", "Lengthy philosophical essays", "Poetic rhyming stanzas", "Passive voice paragraphs"],
                 "c": 0, "why": "Imperative bullet points provide clear, low-ambiguity directives for language models."},
                {"q": "What happens if an instruction file contains outdated rules that contradict the actual codebase?",
                 "a": ["The agent becomes conflicted and may generate broken code; instructions must be kept strictly synchronized with code reality", "The IDE automatically updates the instruction file", "The git repository is locked", "The compiler fixes the contradiction"],
                 "c": 0, "why": "Stale instructions produce conflicting signals that degrade agent accuracy."},
                {"q": "Can instruction files be scoped to specific subdirectories or file types?",
                 "a": ["Yes, modern tools like Cursor rules allow scoping instructions to specific file glob patterns like src/frontend/**", "No, instructions must apply to the entire internet", "Only on Windows operating systems", "Only in Java projects"],
                 "c": 0, "why": "Directory-scoped rules allow frontend and backend code to have dedicated, tailored conventions."},
                {"q": "Why is declaring the exact test execution command in the instructions file valuable?",
                 "a": ["It allows the agent to run the correct test command with appropriate flags without guessing", "It compiles Python code into C", "It bypasses all test failures", "It reduces electricity costs"],
                 "c": 0, "why": "Stating `pytest -m unit` eliminates trial-and-error command exploration."}
            ],
            "You know how to configure and structure standard agent instruction files.",
            "Architecture Decision Records (ADRs) as Agent Context", "Leverage ADRs to explain the 'why' behind architectural choices."
        ),
        build_lesson(
            3, "adrs-as-agent-context", "Architecture Decision Records (ADRs) as Agent Context", "ADRs",
            "Using Architecture Decision Records (ADRs) to give agents the historical reasoning and trade-offs behind designs.",
            "What is an Architecture Decision Record (ADR)?",
            ["A short text document capturing an architectural decision, its context, consequences, and alternatives considered", "A legal contract with cloud providers", "An employee review document", "A financial tax filing for software companies"],
            0, "ADRs document the 'why' behind architectural choices so future engineers and agents understand trade-offs.",
            [
                "<p>Code tells you <em>how</em> a system works, and tests tell you <em>what</em> it does. But neither tells you <strong>why</strong> a particular design was chosen over another. Without understanding the <em>why</em>, an AI agent will frequently suggest 'simplifications' that undo months of careful architectural deliberation.</p>",
                "<p><strong>Architecture Decision Records (ADRs)</strong> are lightweight Markdown files (usually stored in `docs/decisions/` or `docs/adr/`) that capture decisions:</p>",
                "<ul><li><strong>Title & Status:</strong> e.g. `ADR-004: Use SQLite for local caching` (Accepted).</li><li><strong>Context:</strong> The technical problem or constraint faced.</li><li><strong>Decision:</strong> What we decided to do.</li><li><strong>Consequences:</strong> Trade-offs accepted (positive and negative).</li></ul>",
                "<pre><code># docs/adr/003-use-argon2id-for-passwords.md\n# Status: Accepted\n\n## Context\nWe need to hash user passwords. bcrypt is popular, but NIST guidelines recommend\nArgon2id for memory-hard resistance against GPU-based cracking attacks.\n\n## Decision\nUse `argon2-cffi` with default parameters for all password hashing.\n\n## Consequences\n- Positive: Superior resistance to hardware attacks.\n- Negative: Higher CPU memory consumption during authentication benchmarks.</code></pre>",
                "<p>When an agent is pointed to your ADR folder, it instantly respects your architectural history instead of speculatively suggesting bcrypt or MD5.</p>",
                "<div class=\"callout\"><p><strong>Agent Ingestion:</strong> Keep ADRs short (1-2 pages). When an agent is working in a specific domain (e.g. auth), point it directly to the relevant ADR.</p></div>"
            ],
            "Anatomy of an ADR", "Structure of an Architecture Decision Record",
            [
                {"title": "1. Context", "lines": ["Problem description", "Forces & constraints"]},
                {"title": "2. Decision", "lines": ["Chosen pattern or tool", "Implementation direction"]},
                {"title": "3. Consequences", "lines": ["Benefits gained", "Trade-offs accepted"]}
            ],
            "Preventing Architectural Regression", "How ADRs safeguard design intent",
            [
                {"title": "Without ADRs", "lines": ["Agent sees complex code", "Suggests naive 'refactor' that breaks security"]},
                {"title": "With ADRs", "lines": ["Agent reads ADR-003", "Understands why Argon2id was chosen", "Respects security decision"]}
            ],
            "Complete the ADR sentence",
            "Architecture Decision Records document the historical {1} and trade-offs behind designs, preventing agents from undoing critical architectural {2}.",
            [
                {"answer": "reasoning", "hint": "The 'why' behind choices", "options": ["reasoning", "passwords", "syntax"]},
                {"answer": "decisions", "hint": "Chosen patterns and tools", "options": ["decisions", "compilers", "networks"]}
            ],
            [
                {"q": "What critical information does an ADR provide that source code alone cannot convey?",
                 "a": ["The historical reasoning, evaluated alternatives, and accepted trade-offs behind a design choice", "The compiler version used to build it", "The exact line count of the file", "The git commit author's email"],
                 "c": 0, "why": "Source code shows what exists; ADRs capture the intent and rejected alternatives."},
                {"q": "Why is an agent without ADR context prone to suggesting bad refactorings?",
                 "a": ["It may mistake intentional complexity (like security hardening or concurrency locks) for accidental messiness and try to simplify it", "It cannot read Python files", "It runs 10x slower", "It crashes the operating system"],
                 "c": 0, "why": "Without context on why complexity exists, agents often strip intentional safeguards."},
                {"q": "Where in a repository are ADRs typically stored?",
                 "a": ["In a dedicated documentation directory like docs/adr/ or docs/decisions/", "Inside the git configuration folder", "In the /tmp/ directory", "In the database schema"],
                 "c": 0, "why": "Standard practice places version-controlled markdown ADRs under `docs/adr/`."},
                {"q": "How long should a standard ADR be?",
                 "a": ["Short and focused: typically 1 to 2 pages capturing a single architectural choice", "At least 100 pages", "Exactly one sentence", "An ADR must be an executable binary"],
                 "c": 0, "why": "Concise ADRs are easy for both humans and AI agents to digest quickly."}
            ],
            "You know how to use Architecture Decision Records to ground AI agents in design history.",
            "Providing Golden Code Examples", "Anchor agent generation with curated reference files."
        ),
        build_lesson(
            4, "providing-golden-code-examples", "Providing Golden Code Examples", "Golden Examples",
            "Using curated 'Golden Files' to teach agents your idiomatic coding style, error handling, and testing patterns.",
            "What is a 'Golden File' in the context of agent project context?",
            ["A meticulously written production file cited as the authoritative template for style, patterns, and conventions", "A file containing cryptographic keys", "A file written in the Go programming language", "A file saved to a golden hard drive"],
            0, "Golden files provide real-world, few-shot examples of your project's ideal architectural style.",
            [
                "<p>Language models learn best from <strong>concrete examples</strong>. You can write ten paragraphs explaining your error handling philosophy, but an agent will understand it in half a second if you simply say: <em>'Follow the pattern in src/endpoints/orders.py.'</em></p>",
                "<p>A <strong>Golden File</strong> is an exemplary file in your repository that embodies your team's highest standards:</p>",
                "<ul><li><strong>Clean Naming & Structure:</strong> Demonstrates idiomatic file layout, imports, and docstrings.</li><li><strong>Error Handling:</strong> Shows exactly how custom exceptions are caught, logged, and mapped to HTTP status codes.</li><li><strong>Typing & Validation:</strong> Illustrates standard type hint usage and schema validation.</li><li><strong>Corresponding Test File:</strong> Pairs with an exemplary test file showing standard fixture usage and assertion patterns.</li></ul>",
                "<pre><code># Directing the Agent with a Golden Reference:\n\"Implement the new /subscriptions endpoint.\nFollow the exact pattern established in src/endpoints/orders.py:\n- Use the same @router decorators and response_model schemas.\n- Follow the error handling pattern in lines 45-62 (raising HTTPException with detail dict).\n- Mirror the test structure in tests/api/test_orders.py.\"</code></pre>",
                "<p>Pointing an agent to an existing golden file delivers massive few-shot learning value with virtually zero prompt-writing effort.</p>",
                "<div class=\"callout\"><p><strong>Curate, Don't Guess:</strong> Make sure the file you point to is genuinely high quality! If you point an agent to legacy spaghetti, it will happily replicate the spaghetti.</p></div>"
            ],
            "The Power of Golden References", "Few-shot architectural grounding",
            [
                {"title": "Abstract Instructions", "lines": ["'Use our error pattern'", "Vague, agent guesses implementation"]},
                {"title": "Golden File Reference", "lines": ["'Follow src/endpoints/orders.py'", "Concrete, unambiguous template"]},
                {"title": "Result", "lines": ["Identical style, imports & error handling", "Zero architectural friction"]}
            ],
            "The Golden Pair Pattern", "Providing both implementation and test templates",
            [
                {"title": "Implementation Template", "lines": ["src/billing/service.py", "Clean domain logic & types"]},
                {"title": "Testing Template", "lines": ["tests/billing/test_service.py", "Clean fixtures & assertions"]}
            ],
            "Complete the golden example sentence",
            "A golden file acts as an authoritative {1} that demonstrates idiomatic project style, error handling, and {2}.",
            [
                {"answer": "template", "hint": "Pattern or reference standard", "options": ["template", "compiler", "firewall"]},
                {"answer": "testing patterns", "hint": "How tests are structured and verified", "options": ["testing patterns", "passwords", "hosting fees"]}
            ],
            [
                {"q": "Why is pointing to a golden file more effective than describing code style in prose?",
                 "a": ["Models excel at in-context learning from real code; examples show imports, types, and nuances that prose overlooks", "Code files are cheaper to send than text", "Prose is forbidden in AI prompts", "Language models cannot read English prose"],
                 "c": 0, "why": "Concrete code examples convey subtle idioms, layout, and typing patterns with zero ambiguity."},
                {"q": "What is the danger of pointing an agent to an arbitrary, uncurated file in your repository?",
                 "a": ["The file might contain outdated anti-patterns or legacy technical debt, which the agent will faithfully copy", "The file will be deleted", "The compiler will fail", "The operating system will crash"],
                 "c": 0, "why": "Agents mirror whatever code you point them to; pointing to poor code reproduces poor code."},
                {"q": "What two files make up an ideal 'Golden Pair'?",
                 "a": ["An exemplary production implementation file and its corresponding high-quality test file", "A README file and a LICENSE file", "A package.json and a lockfile", "A CSS file and an HTML file"],
                 "c": 0, "why": "The pair shows both how to write the feature and how to verify it with tests."},
                {"q": "Where can golden files be cataloged for easy reference by agents?",
                 "a": ["In your project's copilot-instructions.md or developer documentation", "In the browser bookmarks", "On a sticky note", "In git commit messages"],
                 "c": 0, "why": "Listing golden files in instruction files ensures all agent sessions know where to look."}
            ],
            "You know how to leverage golden code examples to enforce high-quality project idioms.",
            "Repository Maps and Architecture Guides", "Provide high-level mental maps of the codebase layout."
        ),
        build_lesson(
            5, "repo-maps-and-architecture-guides", "Repository Maps and Architecture Guides", "Repo Maps",
            "Creating concise repository maps and architecture overviews that orient agents in seconds.",
            "What is a 'Repository Map' in agent context engineering?",
            ["A concise, structured overview of directory structure, module responsibilities, and system entry points", "A geographical map of where developers live", "A diagram of the company office building", "A satellite photo of the data center"],
            0, "A repository map provides a bird's-eye view of how modules, directories, and entry points relate.",
            [
                "<p>When an agent enters a 200,000-line repository, it is blind. It does not know that `apps/web` is the Next.js frontend, `packages/core` is the business logic, and `services/worker` is the Celery background queue. Without a map, it must guess.</p>",
                "<p>A <strong>Repository Map</strong> (often documented in `ARCHITECTURE.md` or embedded in instruction files) provides an immediate mental model:</p>",
                "<pre><code># ARCHITECTURE.md: Repository Map\n## Directory Layout & Responsibilities\n- `src/api/`        -> FastAPI HTTP endpoints and routing.\n- `src/domain/`     -> Pure business entities and business rules (zero I/O!).\n- `src/storage/`    -> Database models, migrations, and repository implementations.\n- `src/workers/`    -> Celery tasks and event consumers.\n- `tests/`          -> pytest test suite (mirrors `src/` layout).\n\n## Dependency Invariants\n- `domain/` must NEVER import from `api/` or `storage/`.\n- `api/` calls `domain/` and `storage/` through dependency injection.</code></pre>",
                "<p>This 15-line map saves thousands of tokens of blind directory listing tool calls and stops the agent from violating architectural boundaries.</p>",
                "<div class=\"callout\"><p><strong>Boundary Defense:</strong> Explicitly stating dependency directions (e.g. <em>'Domain never imports Storage'</em>) keeps your architectural layers pure.</p></div>"
            ],
            "The Power of a Repository Map", "Bird's-eye architectural orientation",
            [
                {"title": "Without Repo Map", "lines": ["Agent lists 20 directories", "Guesses module relationships", "Imports cross layers blindly"]},
                {"title": "With Repo Map", "lines": ["Reads 20-line architecture summary", "Understands boundaries immediately", "Zero illegal imports"]}
            ],
            "Dependency Direction Invariants", "Preventing layer contamination",
            [
                {"title": "API Layer", "lines": ["Imports from Domain & Storage", "Orchestrates HTTP requests"]},
                {"title": "Domain Layer", "lines": ["Pure business logic & entities", "NEVER imports API or Storage"]}
            ],
            "Complete the repository map sentence",
            "A repository map describes directory responsibilities and enforces {1} direction invariants across architectural {2}.",
            [
                {"answer": "dependency", "hint": "Which layer can import from which", "options": ["dependency", "network", "compilation"]},
                {"answer": "layers", "hint": "Architectural tiers like domain and storage", "options": ["layers", "browsers", "hard drives"]}
            ],
            [
                {"q": "Why is declaring dependency directions in an architecture guide critical for AI agents?",
                 "a": ["It prevents the agent from creating circular dependencies or contaminating pure domain logic with database calls", "It makes Python run faster", "It reduces git repo disk space", "It prevents computers from crashing"],
                 "c": 0, "why": "Explicit layer rules prevent agents from taking expedient shortcuts that violate clean architecture."},
                {"q": "What should be the primary content of a repository map?",
                 "a": ["A concise mapping of top-level directories to their core responsibilities and dependency rules", "A list of all git branches", "Every variable name in the project", "The names of all developers who ever committed"],
                 "c": 0, "why": "Directory responsibilities and boundary rules provide maximum architectural orientation."},
                {"q": "How does a repository map reduce token consumption during agent sessions?",
                 "a": ["It prevents the agent from making dozens of exploratory file search and directory listing tool calls", "It compresses text into binary format", "It encrypts files", "It removes unit tests"],
                 "c": 0, "why": "Providing the map upfront eliminates blind, exploratory tool calling."},
                {"q": "Where should the repository map ideally be stored?",
                 "a": ["In an ARCHITECTURE.md file in the root of the repository or linked directly from copilot-instructions.md", "In the user's private email inbox", "In a temporary operating system cache", "In a closed issue ticket"],
                 "c": 0, "why": "Version-controlled files in the repo root ensure all developers and AI agents can read them."}
            ],
            "You know how to create concise repository maps that orient AI agents immediately.",
            "Tool Definitions and Workflow Scripts", "Arm agents with standardized scripts for building, testing, and linting."
        ),
        build_lesson(
            6, "tool-definitions-and-scripts", "Tool Definitions and Workflow Scripts", "Tooling & Scripts",
            "Providing agents with explicit workflow scripts (make, npm, just) and custom tool configurations.",
            "Why is giving an agent standardized workflow scripts (e.g. 'make test', 'npm run lint') safer than letting it guess terminal commands?",
            ["Standard scripts encapsulate exact environment variables, flags, and paths required by your specific project setup", "Terminal commands are illegal in commercial code", "Agents cannot execute bash commands", "Standard scripts run without CPU power"],
            0, "Project scripts wrap complex environment flags and setup commands into predictable, reliable invocations.",
            [
                "<p>Every software project has specific execution rituals: <em>'Before running tests, you must set PYTHONPATH=. and export TEST_DB_URL=...'</em>. If an agent tries to run `pytest` naively, it will fail with import errors or missing database connections.</p>",
                "<p>The solution is to provide <strong>standardized workflow scripts</strong> using tools like `Makefile`, `justfile`, or `npm scripts`:</p>",
                "<pre><code># Makefile / justfile: Project Workflow Contract\ntest-unit:\n    @PYTHONPATH=. pytest -m unit --tb=short\n\ntest-integration:\n    @docker compose up -d test-db\n    @PYTHONPATH=. pytest -m integration\n\nlint:\n    @ruff check src/ tests/\n    @mypy src/</code></pre>",
                "<p>In your agent instructions, simply state: <em>'To run unit tests, execute `make test-unit`. To run linter, execute `make lint`.'</em> The agent now has zero friction, zero command guessing, and guaranteed environment parity.</p>",
                "<div class=\"callout\"><p><strong>One-Command Verification:</strong> Provide a single `make check` command that runs linters, type checks, and fast tests together. The agent can run this single command to verify all gates!</p></div>"
            ],
            "Workflow Scripts as Agent Interfaces", "Wrapping complex commands into predictable shortcuts",
            [
                {"title": "Naive Terminal Guessing", "lines": ["pytest -> Fails (missing PYTHONPATH)", "pytest -v -> Fails (no DB env var)", "Wasted turns debugging the runner"]},
                {"title": "Standardized Workflow Script", "lines": ["make test-unit", "Pre-configured flags & environment", "Executes cleanly in 1 turn"]}
            ],
            "The One-Command Verification Gate", "Single verification command for agents",
            [
                {"title": "make check", "lines": ["1. ruff check (Linting)", "2. mypy (Type Checking)", "3. pytest (Unit Tests)", "One exit code proves full compliance"]}
            ],
            "Complete the workflow script sentence",
            "Standard workflow scripts like makefiles encapsulate {1} variables and flags into predictable {2} that agents can run cleanly.",
            [
                {"answer": "environment", "hint": "Configuration settings like PYTHONPATH", "options": ["environment", "random", "browser"]},
                {"answer": "commands", "hint": "Shell invocations like make test", "options": ["commands", "tokens", "emojis"]}
            ],
            [
                {"q": "Why is 'make check' or 'npm test' superior to having an agent compose raw shell commands?",
                 "a": ["It prevents the agent from forgetting project-specific flags, environment variables, or path configurations", "It speeds up the internet connection", "It compiles Python into assembly language", "It bypasses all failing tests"],
                 "c": 0, "why": "Encapsulating flags and environment variables inside scripts ensures consistent, reproducible test execution."},
                {"q": "What happens if an agent tries to run integration tests without the required environment variables?",
                 "a": ["The test runner fails immediately with connection or configuration errors, wasting time and turns", "The computer restarts", "The database automatically repairs itself", "The agent invents new environment variables"],
                 "c": 0, "why": "Missing environment variables cause confusing false failures that derail agent progress."},
                {"q": "What tool helps manage project workflow scripts on modern cross-platform development stacks?",
                 "a": ["A Makefile, justfile, or npm package.json scripts", "A Microsoft Word document", "A spreadsheet", "A PDF viewer"],
                 "c": 0, "why": "Makefiles, justfiles, and npm scripts are standard execution runners recognized across all platforms."},
                {"q": "Where should the primary workflow commands be documented for the agent?",
                 "a": ["In the repository's copilot-instructions.md or README.md", "In the user's browser bookmarks", "On a sticky note", "In git commit messages"],
                 "c": 0, "why": "Documenting build and test commands in instruction files primes the agent with the exact execution commands."}
            ],
            "You know how to provide standardized workflow scripts that streamline agent execution.",
            "Keeping Project Context Fresh and Concise", "Prune obsolete rules and maintain instructions as code evolves."
        ),
        build_lesson(
            7, "keeping-context-fresh-and-concise", "Keeping Project Context Fresh and Concise", "Context Maintenance",
            "Maintaining agent instruction files over time: pruning obsolete rules, avoiding contradictions, and keeping context lean.",
            "What happens when an instruction file grows to 1,500 lines of historical rules and accumulated edge cases?",
            ["Attention dilutes, instruction conflicts emerge, token consumption escalates, and the agent becomes less reliable", "The agent becomes 10x smarter", "The computer runs out of storage", "Python refuses to compile files"],
            0, "Overly long instruction files cause attention saturation and conflicting instructions.",
            [
                "<p>Instruction files often suffer from <strong>uncontrolled bloat</strong>. Every time an agent makes a mistake, someone adds another three paragraphs to `.cursorrules` or `copilot-instructions.md`. Over a year, the file swells to 1,500 lines of conflicting, outdated, rambling rules.</p>",
                "<p>To keep project context effective, treat your instructions like production code:</p>",
                "<ul><li><strong>Ruthless Pruning:</strong> If an automated linter (Ruff, ESLint) can enforce a rule, <em>delete it from the instructions!</em> Let linters catch formatting and syntax; save context for architecture and domain rules.</li><li><strong>Eliminate Contradictions:</strong> Audit rules regularly. Having 'Use Pydantic v1' on line 40 and 'Use Pydantic v2' on line 200 confuses the model.</li><li><strong>Keep Under 150-200 Lines:</strong> A concise, punchy list of 30 rules outperforms a 1,000-line manual every time.</li></ul>",
                "<pre><code># BAD (Linters should handle this! Delete!):\n- Use double quotes for strings.\n- Indent with 4 spaces.\n- Sort imports alphabetically.\n\n# GOOD (Only humans/context can teach this! Keep!):\n- In the billing domain, all monetary amounts must be integers representing cents.\n- Never delete historical invoice records; use soft-deletion with deleted_at timestamp.\n- Follow the service layer pattern in src/billing/service.py.</code></pre>",
                "<div class=\"callout\"><p><strong>The Linter Rule:</strong> Never waste prompt tokens on things your automated linter or type checker checks for free in milliseconds.</p></div>"
            ],
            "Instruction Bloat vs Lean Discipline", "Pruning trivia to preserve attention budget",
            [
                {"title": "Bloated Instructions (1,500 lines)", "lines": ["Formatting trivia (quotes, indentation)", "Conflicting historical rules", "High token cost, low attention focus"]},
                {"title": "Lean Instructions (100 lines)", "lines": ["Pure architectural invariants", "Domain rules linters cannot check", "Maximum attention density"]}
            ],
            "The Division of Enforcement", "Linters vs Prompt Instructions",
            [
                {"title": "Automated Linter (Ruff/ESLint)", "lines": ["Enforces quotes, spacing, imports", "Runs in 10ms for 0 tokens"]},
                {"title": "Agent Instructions File", "lines": ["Enforces architecture & business rules", "Saves token budget for real thinking"]}
            ],
            "Complete the context maintenance sentence",
            "Keep instruction files lean by delegating formatting rules to {1} and reserving context tokens for {2} invariants.",
            [
                {"answer": "linters", "hint": "Automated static analysis tools", "options": ["linters", "browsers", "chatbots"]},
                {"answer": "architectural", "hint": "High-level design and domain constraints", "options": ["architectural", "random", "visual"]}
            ],
            [
                {"q": "Why is putting formatting rules like 'use 4 spaces' in an agent instructions file wasteful?",
                 "a": ["Formatting is checked and fixed instantly by automated linters like Prettier or Ruff with zero token cost", "Language models cannot count spaces", "Formatting is illegal in Python", "Spaces cannot be tokenized"],
                 "c": 0, "why": "Linters and formatters enforce syntax rules at zero token cost; save instructions for architecture."},
                {"q": "What is the recommended size ceiling for a primary agent instructions file?",
                 "a": ["Around 100 to 200 lines of concise, high-density bullet points", "At least 5,000 lines", "Exactly one word", "As many lines as can fit on a hard drive"],
                 "c": 0, "why": "Keeping instructions under 200 lines ensures high attention focus and low token overhead."},
                {"q": "What should you do when you discover two conflicting rules in an instruction file?",
                 "a": ["Delete or reconcile the contradiction immediately so the agent has a single, coherent directive", "Leave both and let the model flip a coin", "Double the size of the file", "Add an apology comment"],
                 "c": 0, "why": "Contradictory rules generate cognitive dissonance and unpredictable agent behavior."},
                {"q": "How frequently should a team audit and refactor its agent instruction files?",
                 "a": ["Regularly, alongside major architectural shifts or dependency upgrades", "Never; instruction files are written once and frozen forever", "Every hour", "Only when the company changes its name"],
                 "c": 0, "why": "Regular audits ensure instructions match current codebase reality and clean out stale rules."}
            ],
            "You know how to maintain fresh, lean, high-signal project context over time.",
            "Testing Agent Alignment with Project Standards", "Audit and verify that agents reliably adhere to your project context."
        ),
        build_lesson(
            8, "testing-agent-alignment", "Testing Agent Alignment with Project Standards", "Alignment Audits",
            "Auditing and evaluating agent compliance against your project standards using benchmark test prompts.",
            "How do you scientifically verify whether your project context instructions actually work?",
            ["Run benchmark prompts against an agent and audit whether the generated diffs adhere to stated conventions", "Assume the agent works perfectly without checking", "Ask the agent if it read the file", "Check if the file was saved to git"],
            0, "Empirical testing with benchmark prompts verifies whether instructions genuinely guide agent behavior.",
            [
                "<p>Software engineers don't deploy code without tests. Similarly, you shouldn't assume your agent instructions work without <strong>alignment testing</strong>. Does the agent actually use Pydantic v2? Does it remember to run tests with `make test`? Does it follow your golden error-handling pattern?</p>",
                "<p>To test agent alignment, establish an <strong>Agent Eval Benchmark</strong>:</p>",
                "<ul><li><strong>1. Benchmark Prompt:</strong> Give the agent a representative task (e.g. <em>'Add a GET /health endpoint'</em>).</li><li><strong>2. Observe Compliance:</strong> Inspect the resulting diff against your conventions checklist: Did it use the right decorators? Did it put the schema in `src/schemas/`? Did it write a test in `tests/api/`?</li><li><strong>3. Failure Analysis:</strong> If the agent failed a rule, diagnose why: Was the rule buried in the middle of a 1,000-line file? Was it ambiguous? Was it contradicted elsewhere?</li><li><strong>4. Refine & Iterate:</strong> Sharpen the rule, re-run the benchmark, and verify compliance.</li></ul>",
                "<pre><code># Agent Alignment Audit Checklist:\n[x] Rule 1: Uses async def for all route handlers -> PASS (compliance)\n[x] Rule 2: Uses schemas/ directory for models      -> PASS (compliance)\n[!] Rule 3: Uses custom AppError exception        -> FAIL (Agent used ValueError!)\n# Action: Move Rule 3 to top of instructions and add a 2-line code example. Re-test!</code></pre>",
                "<div class=\"callout\"><p><strong>The Payoff:</strong> A verified, battle-tested project context file saves hundreds of hours of manual PR review across your entire engineering team.</p></div>"
            ],
            "The Alignment Eval Loop", "Empirical validation of agent instructions",
            [
                {"title": "1. Run Benchmark Task", "lines": ["Standard test prompt", "Generate multi-file diff"]},
                {"title": "2. Audit Checklist", "lines": ["Check naming, schemas, tests", "Score compliance rate"]},
                {"title": "3. Refine Context", "lines": ["Clarify failing rules", "Verify 100% adherence"]}
            ],
            "Continuous Context Improvement", "Treating instructions as an engineering asset",
            [
                {"title": "Ambiguous Rule", "lines": ["'Handle errors nicely'", "Agent fails audit"]},
                {"title": "Tested Instruction", "lines": ["'Raise AppError(code, detail)'", "Agent passes audit with 100% compliance"]}
            ],
            "Complete the alignment audit sentence",
            "Testing agent alignment uses benchmark prompts and compliance {1} to empirically prove that instructions guide code {2}.",
            [
                {"answer": "checklists", "hint": "Verification lists of conventions", "options": ["checklists", "tokens", "browsers"]},
                {"answer": "generation", "hint": "Producing software changes", "options": ["generation", "deletion", "encryption"]}
            ],
            [
                {"q": "What is an effective way to test if an agent is obeying your testing instructions?",
                 "a": ["Check if the agent automatically executes the designated test command (e.g. 'make test') before reporting task completion", "Ask the agent if it likes tests", "Delete all test files to see if it complains", "Check the weather report"],
                 "c": 0, "why": "Observing whether the agent invokes the specified verification command proves behavioral adherence."},
                {"q": "What should you do if an agent repeatedly fails a specific convention despite it being in the instructions?",
                 "a": ["Rewrite the rule with an explicit negative constraint and a short before/after code example", "Delete the repository", "Yell at the monitor", "Switch to writing all code by hand"],
                 "c": 0, "why": "Sharpening the instruction with an explicit example and negative constraint dramatically boosts compliance."},
                {"q": "Why is asking an agent 'Did you read the instructions?' ineffective as a test?",
                 "a": ["Language models are sycophantic and will almost always answer 'Yes' even if they overlooked the rule in generation", "Models cannot answer yes or no questions", "The chat window blocks questions", "It is considered impolite"], "c": 0, "why": "Models exhibit sycophancy; only empirical inspection of generated code diffs proves adherence."},
                {"q": "What is the ultimate value of high-quality project context engineering?",
                 "a": ["Agents produce code that blends seamlessly into your repository on the first attempt, minimizing review overhead", "It eliminates the need for software developers", "It turns off all computer monitors", "It makes servers completely free"], "c": 0, "why": "Seamless alignment reduces PR review friction and accelerates development velocity."}
            ],
            "You have completed the Giving AI Agents the Right Project Context course.",
            "Next Course: AI-Assisted Debugging", "Learn how to use AI agents to form and test hypotheses while keeping evidence in charge."
        )
    ]

    glossary = [
        {"id": "conventions", "title": "Conventions & Drift", "terms": [
            {"term": "Convention Guessing", "def": "The tendency of models to fall back on generic training averages when project context is missing.", "lesson": 1, "tags": ["ai", "conventions"]},
            {"term": "Instruction File", "def": "A repository configuration file (.cursorrules, copilot-instructions.md) providing system directives to AI agents.", "lesson": 2, "tags": ["ai", "config"]},
            {"term": "Architectural Drift", "def": "The slow degradation of project standards caused by introducing alien, inconsistent code patterns.", "lesson": 1, "tags": ["architecture", "quality"]}
        ]},
        {"id": "records", "title": "ADRs & Knowledge", "terms": [
            {"term": "Architecture Decision Record", "def": "A document capturing an architectural decision, its context, consequences, and evaluated alternatives.", "lesson": 3, "tags": ["architecture", "docs"]},
            {"term": "Golden File", "def": "An exemplary production file in the repository cited as the authoritative template for code style and patterns.", "lesson": 4, "tags": ["architecture", "patterns"]},
            {"term": "Golden Pair", "def": "A matched pair of exemplary files: one clean implementation and its corresponding high-quality test file.", "lesson": 4, "tags": ["testing", "patterns"]}
        ]},
        {"id": "mapping", "title": "Mapping & Tooling", "terms": [
            {"term": "Repository Map", "def": "A high-level structural overview documenting directory responsibilities and dependency direction invariants.", "lesson": 5, "tags": ["architecture", "navigation"]},
            {"term": "Dependency Direction Invariant", "def": "An architectural rule governing which layers are allowed to import from which (e.g. domain never imports storage).", "lesson": 5, "tags": ["architecture", "invariants"]},
            {"term": "Workflow Script", "def": "A standardized runner command (make test, npm run lint) encapsulating complex flags and environment variables.", "lesson": 6, "tags": ["devops", "tooling"]}
        ]},
        {"id": "maintenance", "title": "Maintenance & Auditing", "terms": [
            {"term": "Instruction Pruning", "def": "Removing formatting trivia and obsolete rules from instruction files to maximize attention density.", "lesson": 7, "tags": ["context", "maintenance"]},
            {"term": "Alignment Audit", "def": "Empirically evaluating agent-generated code against project conventions using benchmark prompts.", "lesson": 8, "tags": ["ai", "evals"]},
            {"term": "One-Command Verification", "def": "A single script (make check) that runs linters, type checks, and tests together for agent validation.", "lesson": 6, "tags": ["ci", "testing"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "Universal copilot-instructions.md",
            "label": "Standard configuration template",
            "code": "## Architecture & Tech Stack\n- Python 3.12+ with FastAPI and SQLAlchemy 2.0 (async).\n- Pydantic v2 schemas in src/schemas/.\n## Testing & Verification\n- Run tests with: `make test-unit`.\n- Run full verification: `make check`.\n## Non-Negotiable Rules\n- Never mock database queries in integration tests.\n- Never commit credentials or API keys.",
            "lessonN": 2, "lessonSlug": "agent-instructions-files", "lessonTitle": "Agent Instructions Files (.cursorrules, copilot-instructions.md)"
        },
        {
            "title": "Minimal Architecture Decision Record",
            "label": "Documenting design intent",
            "code": "# docs/adr/005-use-postgres-jsonb.md\n## Context\nNeed to store flexible customer metadata without schema migrations.\n## Decision\nUse PostgreSQL JSONB column with Pydantic validation on read/write.\n## Consequences\nFast schema flexibility; requires PG 15+.",
            "lessonN": 3, "lessonSlug": "adrs-as-agent-context", "lessonTitle": "Architecture Decision Records (ADRs) as Agent Context"
        },
        {
            "title": "Repository Map Template",
            "label": "Orienting agents in seconds",
            "code": "## Directory Map & Invariants\n- `src/domain/`   -> Pure business rules (NEVER imports api/ or storage/).\n- `src/storage/`  -> PostgreSQL models & SQL migrations.\n- `src/api/`      -> FastAPI endpoints calling domain via DI.\n- `tests/`        -> Mirrors src/ directory structure.",
            "lessonN": 5, "lessonSlug": "repo-maps-and-architecture-guides", "lessonTitle": "Repository Maps and Architecture Guides"
        },
        {
            "title": "Golden File Prompt Directive",
            "label": "Few-shot architectural grounding",
            "code": "# When prompting agents, cite your golden pair:\n\"Follow the exact pattern established in src/endpoints/users.py.\nMirror the error handling in lines 30-45.\nStructure unit tests matching tests/api/test_users.py.\"",
            "lessonN": 4, "lessonSlug": "providing-golden-code-examples", "lessonTitle": "Providing Golden Code Examples"
        }
    ]

    course_data = {
        "id": "ai-project-context",
        "title": "Giving AI Agents the Right Project Context",
        "num": 54,
        "emoji": "🗂️",
        "desc": "Conventions files, architecture notes and examples that make an agent produce code that fits your repo.",
        "topics": ["Project Context", "Agent Instructions", "ADRs", "Golden Files", "Repo Maps", "Workflow Scripts", "Context Maintenance", "Alignment Audits"],
        "mission": "# Mission — Giving AI Agents the Right Project Context\n\nBridge the gap between generic AI capabilities and your repository's unique idioms. Author high-impact instruction files, capture design history with ADRs, anchor generation with golden files, document architecture maps, and audit agent alignment.",
        "notes": "# Notes — Giving AI Agents the Right Project Context\n\nWhat you leave unsaid, the model will invent from internet averages. Ground agents with explicit conventions, golden examples, and architecture invariants.",
        "resources": "# Resources — Giving AI Agents the Right Project Context\n\n- Michael Nygard, *Documenting Architecture Decisions*\n- GitHub Copilot Documentation, *Custom Instructions*\n- Martin Fowler, *Patterns of Enterprise Application Architecture*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

if __name__ == "__main__":
    make_course_54()

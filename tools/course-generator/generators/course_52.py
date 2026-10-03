import os
import sys
sys.path.append(os.path.dirname(__file__))
from helpers import build_lesson, save_course

# ==============================================================================
# COURSE 52: prompting-vs-specification
# ==============================================================================
def make_course_52():
    lessons = [
        build_lesson(
            1, "why-clever-prompts-fail", "Why Clever Prompts Fail on Complex Tasks", "Prompt Failure",
            "Why prompt engineering tricks like 'you are a 10x developer' fail on complex engineering tasks compared to specifications.",
            "Why do prompt tricks like 'take a deep breath' fail to produce correct multi-file codebases?",
            ["Complex software requires explicit constraints, interfaces, and invariants, not emotional encouragement", "Models only listen to prompts written in assembly", "Prompt tricks trigger security firewalls", "Prompts can only contain 10 words"],
            0, "Software engineering is governed by contracts, schemas, and invariants. Vague prompts leave all critical architectural decisions to probabilistic chance.",
            [
                "<p>In the early days of generative AI, users traded 'magic prompts': <em>'Act as a world-class principal architect at Google, take a deep breath, and write me an e-commerce platform.'</em> While such prompts might generate an impressive 50-line demo script, they fail catastrophically when applied to real, production software systems.</p>",
                "<p>Why do clever prompts fail? Because software engineering is not a creative writing exercise. Software requires:</p>",
                "<ul><li><strong>Precise Invariants:</strong> Data must conform to exact schemas and types.</li><li><strong>Architectural Boundaries:</strong> Logic must not leak across layer interfaces.</li><li><strong>Edge Case Handling:</strong> What happens on null inputs, network timeouts, or concurrent edits?</li><li><strong>Verification Criteria:</strong> How does the system prove the code works?</li></ul>",
                "<pre><code># VAGUE PROMPT (Failure):\n\"Write a user authentication system for our app.\"\n# Result: The model invents its own database schema, picks a random JWT library,\n# ignores existing password hashing conventions, and breaks existing routes.\n\n# RIGOROUS SPECIFICATION (Success):\n\"Implement user authentication matching the following requirements:\n1. POST /api/v1/auth/login accepting JSON { email: str, password: str }.\n2. Verify passwords using argon2id matching auth/hashing.py.\n3. Return HTTP 401 on bad credentials with error format { 'detail': 'Invalid credentials' }.\n4. Write pytest tests in tests/test_auth.py verifying valid login, bad password, and rate limiting.\"</code></pre>",
                "<div class=\"callout\"><p><strong>The Core Law:</strong> If you do not specify an invariant, the model will invent one probabilistically. Every unspecified detail is a roll of the dice.</p></div>"
            ],
            "Prompt vs Specification", "Comparing casual chat prompts to rigorous specifications",
            [
                {"title": "Casual Prompt", "lines": ["'Make a billing system'", "Vague intent, probabilistic guessing", "Fails on edge cases"]},
                {"title": "Software Spec", "lines": ["Endpoints, schemas, invariants", "Explicit constraints & non-goals", "Verifiable with tests"]}
            ],
            "The Cost of Ambiguity", "How ambiguity compounds across agent turns",
            [
                {"title": "Ambiguous Spec", "lines": ["Model assumes format A", "Subsequent turn assumes format B", "Chaos & incompatibility"]},
                {"title": "Explicit Spec", "lines": ["Contract fixed at outset", "All turns align with contract", "Clean integration"]}
            ],
            "Complete the specification sentence",
            "Clever prompting fails on complex systems because software correctness requires explicit {1} and verifiable {2}.",
            [
                {"answer": "constraints", "hint": "Boundaries and rules", "options": ["constraints", "emotions", "temperatures"]},
                {"answer": "acceptance criteria", "hint": "Verifiable definitions of done", "options": ["acceptance criteria", "chat turns", "flattery"]}
            ],
            [
                {"q": "What is the primary danger of leaving edge cases unspecified in an agent prompt?", "a": ["The model invents arbitrary assumptions that often conflict with your existing architecture", "The agent shuts down the operating system", "The model switches to French", "The context window immediately overflows"], "c": 0, "why": "Unspecified requirements force the model to fill in blanks probabilistically."},
                {"q": "Why does 'Act as a 10x developer' have negligible effect on complex coding tasks?", "a": ["Role flattery does not provide the concrete architectural constraints and API schemas needed to write correct code", "Language models do not understand numbers", "10x developers do not exist", "It violates AI ethics guidelines"], "c": 0, "why": "Concrete technical requirements outperform persona prompting on technical tasks."},
                {"q": "What is the relationship between specification clarity and agent success rate?", "a": ["Higher specification clarity directly increases the probability of an agent succeeding on the first attempt", "There is no relationship", "Vague specifications produce better code", "Over-specifying causes models to refuse tasks"], "c": 0, "why": "Clear specifications eliminate ambiguity, guiding the agent along a verified path."},
                {"q": "What must accompany any requirement given to an AI agent?", "a": ["A concrete method of verification (such as an automated test or command to run)", "A monetary tip promise", "A smiley face emoji", "A signature from a manager"], "c": 0, "why": "Verifiability allows the agent to prove its code meets the requirement before stopping."}
            ],
            "You understand why specifications surpass clever prompts for software engineering.",
            "Anatomy of a Software Specification", "Learn the essential sections of an agent-ready technical specification."
        ),
        build_lesson(
            2, "anatomy-of-a-specification", "Anatomy of a Software Specification", "Spec Anatomy",
            "Structuring an engineering specification: Context, Functional Requirements, Invariants, and Verification Gates.",
            "Which section of a specification tells the agent what parts of the system it is NOT allowed to modify?",
            ["Non-Goals and Constraints", "The Title", "The Introduction", "The Credits"],
            0, "Constraints and Non-Goals prevent agents from expanding scope or touching unrelated files.",
            [
                "<p>A technical specification for an AI agent is not an essay; it is a <strong>structured contract</strong>. When an agent receives a well-structured spec, it can parse requirements systematically and evaluate its own progress.</p>",
                "<p>A comprehensive agent-ready specification contains four essential sections:</p>",
                "<ul><li><strong>1. Goal & Context:</strong> Why this change is needed and how it fits into the surrounding architecture.</li><li><strong>2. Functional Requirements:</strong> What the software must do, expressed as inputs, outputs, schemas, and state changes.</li><li><strong>3. Constraints & Non-Goals:</strong> What the agent must <em>not</em> do (e.g. <em>'Do NOT modify database migration 0014'</em>, <em>'Do NOT introduce third-party npm packages'</em>).</li><li><strong>4. Verification Criteria:</strong> The exact commands the agent must run to verify success (e.g. `pytest tests/test_orders.py`).</li></ul>",
                "<pre><code># Specification: Add User Avatar Upload\n\n## 1. Goal\nAllow authenticated users to upload PNG/JPEG avatars up to 2MB.\n\n## 2. Requirements\n- Endpoint: POST /api/v1/users/me/avatar (multipart/form-data)\n- Storage: Save to local directory 'uploads/avatars/'\n- DB: Update User.avatar_url with the relative path\n\n## 3. Constraints & Non-Goals\n- Do NOT use AWS S3 (local filesystem storage only for this ticket).\n- Reject files > 2MB with HTTP 413 Payload Too Large.\n- Do NOT alter existing User authentication middleware.\n\n## 4. Verification\n- Run `pytest tests/test_avatar.py` (all tests must pass with 0 warnings).</code></pre>",
                "<div class=\"callout\"><p><strong>Power of Non-Goals:</strong> Stating what NOT to do is often more impactful than stating what to do. It prevents agent scope creep.</p></div>"
            ],
            "Four Pillars of an Agent Spec", "Structuring requirements for machine execution",
            [
                {"title": "1. Goal & Context", "lines": ["Business purpose", "Surrounding architecture seams"]},
                {"title": "2. Requirements", "lines": ["Inputs, outputs, schemas", "State transitions & behaviors"]},
                {"title": "3. Constraints", "lines": ["Non-goals & boundaries", "Prohibited edits & libraries"]},
                {"title": "4. Verification", "lines": ["Exact test commands", "Zero-error pass criteria"]}
            ],
            "Constraint Boundary Wall", "Preventing agent scope creep",
            [
                {"title": "Inside Scope", "lines": ["POST /avatar endpoint", "User.avatar_url column"]},
                {"title": "The Boundary Wall", "lines": ["NO S3 cloud storage", "NO middleware rewrites"]},
                {"title": "Agent Result", "lines": ["Stays tightly bounded", "Zero accidental regressions"]}
            ],
            "Fill in the spec anatomy sections",
            "An agent spec defines functional requirements, establishes {1} to stop scope creep, and sets {2} criteria to prove success.",
            [
                {"answer": "constraints", "hint": "Boundaries of what not to do", "options": ["constraints", "guesses", "prompts"]},
                {"answer": "verification", "hint": "Commands to validate behavior", "options": ["verification", "summarization", "marketing"]}
            ],
            [
                {"q": "Why are 'Non-Goals' especially valuable when directing AI agents?", "a": ["Agents naturally tend to over-engineer or touch adjacent code; non-goals establish firm boundaries", "Non-goals make the specification shorter", "Non-goals speed up internet connections", "Non-goals prevent git commits"], "c": 0, "why": "Explicit boundaries prevent agents from speculatively refactoring unrelated code."},
                {"q": "What should the Verification section of a specification contain?", "a": ["Concrete, executable commands like test suite invocations or lint checks that the agent can run", "A list of developers to contact", "A link to the company wiki", "A promise of future payment"], "c": 0, "why": "Executable verification criteria give the agent an objective definition of done."},
                {"q": "How does defining exact input and output schemas help an agent?", "a": ["It prevents the agent from guessing field names and datatypes, ensuring seamless integration with existing code", "It translates Python into Java", "It reduces file sizes by 50%", "It eliminates the need for databases"], "c": 0, "why": "Strict schemas remove ambiguity around field names, types, and JSON formats."},
                {"q": "What happens if a specification lacks context about surrounding architecture?", "a": ["The agent may implement the feature in an isolated, incompatible style that clashes with project conventions", "The editor crashes", "The compiler issues an architecture warning", "Git refuses to stage files"], "c": 0, "why": "Context grounds the agent in the project's existing architectural patterns and idioms."}
            ],
            "You know how to author structured, unambiguous specifications for AI agents.",
            "Functional Requirements vs Implementation Constraints", "Separate the 'what' from the 'how' to guide agents cleanly."
        ),
        build_lesson(
            3, "functional-reqs-vs-constraints", "Functional Requirements vs Implementation Constraints", "Requirements",
            "Distinguishing what the system must achieve (functional requirements) from how it must achieve it (constraints).",
            "Which of the following is an implementation constraint rather than a functional requirement?",
            ["'Must use PostgreSQL 16 and avoid adding third-party ORM packages'", "'Must allow users to reset their password via email'", "'Must calculate sales tax based on zip code'", "'Must export transaction history to CSV'"],
            0, "Technology choices, performance limits, and library restrictions are constraints; business capabilities are requirements.",
            [
                "<p>When authoring specifications, junior engineers often conflate <strong>functional requirements</strong> (what the software does for the user) with <strong>implementation constraints</strong> (the technical and architectural rules governing how it is built).</p>",
                "<p>Separating these two dimensions gives the agent appropriate freedom to implement while keeping it strictly bounded by your architecture:</p>",
                "<ul><li><strong>Functional Requirement:</strong> <em>'When an invoice is paid, generate a PDF receipt and email it to the customer.'</em></li><li><strong>Implementation Constraint:</strong> <em>'Use ReportLab for PDF generation. Send emails asynchronously via Celery worker task. Do not block the HTTP request thread.'</em></li></ul>",
                "<pre><code># Mixing Requirements and Constraints (Bad):\n\"Make PDF receipts fast using celery and send them with sendgrid without blocking.\"\n\n# Clean Separation (Good):\n### Functional Requirements\n- Generate invoice PDF with line items, tax, and company header.\n- Dispatch receipt email to user's registered email address.\n\n### Implementation Constraints\n- Asynchronous execution: PDF generation must run in a Celery background task.\n- Library constraint: Use 'weasyprint' (already installed in pyproject.toml).\n- Storage: Store generated PDFs in /var/data/receipts/ using uuid4 filenames.</code></pre>",
                "<div class=\"callout\"><p><strong>Rule of Thumb:</strong> Let functional requirements express business outcomes; use implementation constraints to preserve architectural consistency.</p></div>"
            ],
            "Requirements vs Constraints", "Separating business outcomes from technical rules",
            [
                {"title": "Functional Requirements (What)", "lines": ["User can reset password", "Validate reset token within 15 min", "Emit audit event"]},
                {"title": "Implementation Constraints (How)", "lines": ["Use argon2id for token hashing", "Store tokens in Redis with TTL", "No new npm/pip packages"]}
            ],
            "Freedom Within Guardrails", "Balancing autonomy and architectural safety",
            [
                {"title": "Too Rigid", "lines": ["Dictating every single line", "No autonomy, tedious to write"]},
                {"title": "Too Vague", "lines": ["No constraints provided", "Agent invents incompatible patterns"]},
                {"title": "Clean Spec", "lines": ["Clear goals + firm constraints", "Autonomous, verified success"]}
            ],
            "Complete the requirements distinction sentence",
            "Functional requirements specify the business {1} of the software, while constraints define the technical {2} within which it must be built.",
            [
                {"answer": "capabilities", "hint": "What the user or system can do", "options": ["capabilities", "tokens", "prompts"]},
                {"answer": "guardrails", "hint": "Technical boundaries and limitations", "options": ["guardrails", "opinions", "comments"]}
            ],
            [
                {"q": "Why is it important to explicitly state library constraints in an agent spec?", "a": ["To prevent the agent from installing redundant or unapproved third-party dependencies", "Because Python can only import one library at a time", "To make package installations faster", "Because third-party packages are illegal in commercial software"], "c": 0, "why": "Without library constraints, agents will install whatever package they were pretrained on, bloating dependencies."},
                {"q": "Which of the following is a functional requirement?", "a": ["A user who enters an incorrect password three times must be temporarily locked out for 15 minutes", "All code must be formatted with Black", "Database queries must complete in under 5ms", "Use Python 3.12 syntax"], "c": 0, "why": "Account lockout logic is a direct user-facing business behavior."},
                {"q": "What happens if you over-specify implementation down to every variable name?", "a": ["You waste engineering time doing the agent's job and make the specification brittle to minor structural variations", "The agent generates faster code", "The model context window shrinks", "The code compiles to C"], "c": 0, "why": "Over-constraining low-level trivia wastes time; focus constraints on architecture, security, and contracts."},
                {"q": "How do performance constraints (e.g. latency budgets) guide agent choices?", "a": ["They force the agent to choose efficient data structures, indexing, and algorithms rather than naive nested loops", "They make the CPU run at higher clock speeds", "They reduce internet bills", "They turn on compiler optimizations automatically"], "c": 0, "why": "Latency and resource constraints guide the agent away from naive O(N^2) implementations."}
            ],
            "You know how to decouple functional requirements from technical constraints.",
            "Acceptance Criteria Agents Can Actually Verify", "Write acceptance criteria that machines can test unambiguously."
        ),
        build_lesson(
            4, "verifiable-acceptance-criteria", "Acceptance Criteria Agents Can Actually Verify", "Acceptance Criteria",
            "Crafting objective, machine-verifiable acceptance criteria that eliminate ambiguity and subjective interpretation.",
            "Why is 'The UI must look clean and modern' a poor acceptance criterion for an AI agent?",
            ["It is subjective and cannot be objectively verified or asserted by an automated tool", "Agents cannot generate CSS", "Browsers do not support modern styles", "It contains too many characters"],
            0, "Acceptance criteria must be objective and verifiable. Subjective phrases leave success undefined.",
            [
                "<p>Human project managers often write user stories with vague criteria like: <em>'The checkout flow should feel fast and intuitive'</em>, or <em>'Handle errors gracefully'</em>. A human developer might ask for clarification or use common sense. An AI agent, however, cannot feel 'intuitiveness' or judge 'gracefulness'.</p>",
                "<p>For an agent, acceptance criteria must be <strong>mechanically verifiable</strong>:</p>",
                "<ul><li><strong>POOR (Subjective):</strong> 'Make search fast.'</li><li><strong>GOOD (Verifiable):</strong> 'GET /search with 10,000 indexed records returns HTTP 200 in under 50ms.'</li><li><strong>POOR (Vague):</strong> 'Handle invalid input.'</li><li><strong>GOOD (Verifiable):</strong> 'Passing price < 0 returns HTTP 422 with JSON `{\"detail\": \"Price must be positive\"}`.'</li></ul>",
                "<pre><code># Verifiable Acceptance Criteria Checklist:\n[ ] 1. Tests: `pytest tests/test_billing.py` passes 8/8 tests.\n[ ] 2. Schema: POST /subscribe returns JSON matching SubscriptionResponse schema.\n[ ] 3. Status Code: Invalid payment returns HTTP 402 Payment Required.\n[ ] 4. Linter: `ruff check src/billing/` reports 0 errors.</code></pre>",
                "<p>When criteria are binary (Pass/Fail), the agent can loop autonomously, executing verification commands until all boxes are checked with zero ambiguity.</p>",
                "<div class=\"callout\"><p><strong>The Verification Test:</strong> If you cannot write a bash command or automated test to check an acceptance criterion, it is not ready for an AI agent!</p></div>"
            ],
            "Subjective vs Verifiable Criteria", "Transforming vague wishes into executable assertions",
            [
                {"title": "Subjective (Unverifiable)", "lines": ["'Make code clean'", "'Handle errors nicely'", "'Fast performance'"]},
                {"title": "Verifiable (Machine-Checked)", "lines": ["Ruff linter reports 0 errors", "Returns HTTP 422 on invalid payload", "Query latency < 20ms on 10k rows"]}
            ],
            "Automated Verification Loop", "The agent evaluating its own criteria",
            [
                {"title": "Criterion 1: Tests Pass", "lines": ["Executes pytest in terminal", "Checks exit code == 0"]},
                {"title": "Criterion 2: Types Valid", "lines": ["Executes mypy in terminal", "Confirms 0 type errors"]},
                {"title": "Outcome: Done", "lines": ["All criteria objectively checked", "Zero guesswork"]}
            ],
            "Complete the acceptance criteria sentence",
            "Acceptance criteria for AI agents must be {1} and verifiable through {2} or automated commands.",
            [
                {"answer": "objective", "hint": "Unambiguous and non-subjective", "options": ["objective", "creative", "emotional"]},
                {"answer": "tests", "hint": "Automated test suites or checks", "options": ["tests", "guesses", "feelings"]}
            ],
            [
                {"q": "What makes an acceptance criterion 'machine-verifiable'?", "a": ["It can be confirmed True or False by running an automated tool, command, or test assertion", "It is written in binary 1s and 0s", "It is approved by a machine learning model", "It runs exclusively on server hardware"], "c": 0, "why": "Machine verifiability means an objective programmatic test determines compliance."},
                {"q": "How does providing verifiable criteria prevent agent hallucination?", "a": ["The agent uses real test outcomes as grounding truth rather than relying on its internal statistical confidence", "It increases model temperature", "It reduces GPU memory usage", "It forces the model to write docstrings"], "c": 0, "why": "Grounding in real test results anchors the agent in verifiable environmental truth."},
                {"q": "Which of the following is an example of an objective, verifiable criterion?", "a": ["Running 'pytest tests/test_auth.py' exits with code 0 and passes all 12 test cases", "The authentication page looks elegant", "The code is written cleanly", "The database is robust"], "c": 0, "why": "An exit code of 0 and 12 passed tests is completely objective and measurable."},
                {"q": "What should you do if a project requirement is inherently subjective (e.g. UX look and feel)?", "a": ["Separate the visual review for human inspection while specifying technical CSS rules and component props for the agent", "Tell the agent to guess what you like", "Skip building the UI", "Delete the CSS file"], "c": 0, "why": "Keep subjective aesthetic judgment with human reviewers while specifying technical constraints for the agent."}
            ],
            "You know how to author objective, machine-verifiable acceptance criteria.",
            "Next Course: Context Engineering", "Learn how to curate the optimal context budget for AI coding models."
        ),
        build_lesson(
            5, "edge-cases-invariants-non-goals", "Edge Cases, Invariants, and Non-Goals", "Edge Cases",
            "Anticipating boundary conditions, preserving system invariants, and enforcing strict non-goals.",
            "What is a 'system invariant' in software architecture?",
            ["A condition or truth that must remain valid across all state transitions and operations", "A variable that cannot be renamed", "A function that has no parameters", "A database query that takes 0 seconds"],
            0, "Invariants are universal rules (e.g. account balances cannot drop below zero) that must never be violated.",
            [
                "<p>When human developers write code, they rely on unspoken domain assumptions: <em>'Obviously we don't allow negative inventory'</em>, or <em>'Obviously passwords are hashed with salt'</em>. An AI agent, however, lacks your institutional context. Without explicit guidance, it will take the path of least resistance—often violating core system invariants.</p>",
                "<p>A rock-solid specification explicitly details three critical boundaries:</p>",
                "<ul><li><strong>1. System Invariants:</strong> Universal truths that must survive the change. <em>'Invariant: An Order can never transition to SHIPPED unless its Payment status is PAID.'</em></li><li><strong>2. Boundary Edge Cases:</strong> What happens at limits? (Empty collections, zero amounts, concurrent updates, Unicode emojis in names, null values).</li><li><strong>3. Explicit Non-Goals:</strong> What is deliberately left out. <em>'Non-Goal: Do not support cryptocurrency payments in this PR.'</em></li></ul>",
                "<pre><code># Explicit Edge Cases & Invariants in Spec:\n### System Invariants\n- Total discount across all coupons can NEVER exceed 50% of subtotal.\n- User credits cannot become negative under any circumstance.\n\n### Edge Cases to Handle\n- Empty cart: return 400 Bad Request with code 'EMPTY_CART'.\n- Expired coupon code: return 422 with code 'COUPON_EXPIRED'.\n- Concurrency: Use database row locking (SELECT ... FOR UPDATE) to prevent double-spending.</code></pre>",
                "<div class=\"callout\"><p><strong>The Rule of Invariants:</strong> State your invariants upfront, and demand that the agent write a unit test for every single invariant before touching production code.</p></div>"
            ],
            "Invariants and Edge Boundaries", "Guarding system integrity",
            [
                {"title": "Core Invariants", "lines": ["Balance >= 0 at all times", "Shipped requires Paid status", "Tenant isolation preserved"]},
                {"title": "Boundary Edge Cases", "lines": ["Zero amounts & empty lists", "Special characters & Unicode", "Timezone date roll-overs"]},
                {"title": "Non-Goals", "lines": ["Out-of-scope features", "Prohibited dependencies"]}
            ],
            "Concurrency Invariant Protection", "Preventing race condition bugs",
            [
                {"title": "Naive Logic", "lines": ["Read balance -> Update balance", "Vulnerable to double-spend"]},
                {"title": "Specified Invariant", "lines": ["Must use atomic row locking", "Agent writes FOR UPDATE query"]},
                {"title": "Protected State", "lines": ["Zero race conditions", "Invariant holds under load"]}
            ],
            "Complete the invariant sentence",
            "A system invariant is a universal rule that must never be {1}, while edge cases define behavior at system {2}.",
            [
                {"answer": "violated", "hint": "Broken or corrupted", "options": ["violated", "documented", "compiled"]},
                {"answer": "boundaries", "hint": "Extreme limits like zero, empty, or max values", "options": ["boundaries", "servers", "databases"]}
            ],
            [
                {"q": "Why are AI agents prone to introducing subtle business invariant bugs?", "a": ["They optimize for satisfying the immediate prompt text and may overlook unspoken domain rules", "They lack CPU processing power", "They cannot read SQL queries", "They always generate random numbers"], "c": 0, "why": "Agents satisfy the literal prompt; without stated invariants, business constraints are missed."},
                {"q": "What is an example of a financial system invariant?", "a": ["The sum of debits must equal the sum of credits across all double-entry ledger transactions", "All accounts have passwords", "Transactions take 2 seconds", "Users have email addresses"], "c": 0, "why": "Double-entry equality is a mathematical invariant that must never be broken."},
                {"q": "How should an agent handle an unexpected edge case like an empty list?", "a": ["Return an explicit, documented error response or safe empty default as specified in the contract", "Throw an unhandled IndexError and crash the server", "Delete the database record", "Hang the network connection"], "c": 0, "why": "Graceful handling of empty or edge states prevents unexpected server crashes."},
                {"q": "Why should you mandate that tests verify invariants directly?", "a": ["Tests lock in the invariants as automated regression gates that protect the system forever", "It makes the test files larger", "It compiles code into assembly", "It satisfies cloud hosting requirements"], "c": 0, "why": "Automated invariant tests guarantee that future changes cannot break critical domain truths."}
            ],
            "You know how to define invariants, edge cases, and non-goals to safeguard system integrity.",
            "Example-Driven Specifications", "Leverage few-shot concrete examples to ground agent implementations."
        ),
        build_lesson(
            6, "example-driven-specifications", "Example-Driven Specifications", "Concrete Examples",
            "Using concrete input-output examples and golden references to eliminate ambiguity in specs.",
            "Why do concrete JSON/code examples clarify specifications better than paragraphs of text?",
            ["Examples demonstrate exact field names, data types, casing, and nested structures without ambiguity", "Examples take fewer tokens than single words", "Examples bypass the model's tokenizer", "Examples compile directly to machine code"],
            0, "Concrete examples eliminate semantic ambiguity around schemas, formats, and data structures.",
            [
                "<p>Human language is notoriously ambiguous. If you say: <em>'Return a user profile with address and account status'</em>, the agent might return:</p>",
                "<ul><li>`{\"user_address\": \"123 Main St\", \"status\": 1}`</li><li>`{\"address\": {\"street\": \"123 Main St\", \"city\": \"Boston\"}, \"is_active\": true}`</li><li>`{\"Address\": \"123 Main St\", \"AccountStatus\": \"ACTIVE\"}`</li></ul>",
                "<p>Every variation has different casing, different field names, and different data types. Your frontend will break on all but one.</p>",
                "<p>The solution is <strong>Example-Driven Specification</strong>. Show, don't just tell:</p>",
                "<pre><code># Example-Driven Specification\n### Expected Request Payload\nPOST /api/v1/orders\nContent-Type: application/json\n{\n  \"customer_id\": \"usr_84920\",\n  \"items\": [\n    {\"sku\": \"WIDGET-01\", \"quantity\": 2, \"unit_price_cents\": 1500}\n  ]\n}\n\n### Expected Response (HTTP 201 Created)\n{\n  \"order_id\": \"ord_91823\",\n  \"total_cents\": 3000,\n  \"status\": \"pending_payment\",\n  \"created_at\": \"2026-03-31T14:22:00Z\"\n}</code></pre>",
                "<p>When an agent sees concrete examples, the ambiguity vanishes. The agent mirrors the exact field names (`unit_price_cents`, `created_at`), casing (`snake_case`), and ISO timestamp formatting without guessing.</p>",
                "<div class=\"callout\"><p><strong>The Golden Reference:</strong> Point to existing code in your repository as an example: <em>'Follow the pattern used in src/billing/charges.py lines 20-55.'</em></p></div>"
            ],
            "Show vs Tell", "Contrasting prose descriptions with concrete JSON payloads",
            [
                {"title": "Prose Description (Ambiguous)", "lines": ["'Return order info with items'", "Agent guesses camelCase vs snake_case", "Agent guesses integer cents vs float dollars"]},
                {"title": "Concrete Example (Precise)", "lines": ["Exact JSON with field names & types", "ISO-8601 timestamp string format", "Zero room for statistical deviation"]}
            ],
            "Golden File Pattern", "Referencing existing project code as templates",
            [
                {"title": "Specification Directive", "lines": ["'Follow src/users/service.py'", "Mirror error handling and schemas"]},
                {"title": "Agent Execution", "lines": ["Reads service.py reference", "Replicates exact project idioms"]}
            ],
            "Complete the example-driven sentence",
            "Providing concrete input-output {1} eliminates ambiguity by demonstrating exact field names, types, and {2}.",
            [
                {"answer": "examples", "hint": "Sample JSON payloads or code snippets", "options": ["examples", "prompts", "questions"]},
                {"answer": "casing", "hint": "Naming convention like snake_case or camelCase", "options": ["casing", "compilation", "caching"]}
            ],
            [
                {"q": "Why is specifying 'unit_price_cents: 1500' in an example better than saying 'price should be an integer'?", "a": ["It clarifies both the currency unit (cents vs dollars) and the integer datatype simultaneously", "It makes the JSON file smaller", "It avoids paying credit card fees", "It converts dollars to euros"], "c": 0, "why": "Concrete values convey domain meaning and units of measure without confusion."},
                {"q": "How does pointing an agent to an existing 'Golden Reference' file improve code quality?", "a": ["The agent borrows existing project patterns, import styles, and error handling rather than inventing new ones", "It deletes the reference file", "It copies the file without modifications", "It turns off type checking"], "c": 0, "why": "Reference files ground the agent in proven, existing repository conventions."},
                {"q": "What happens when an agent is given conflicting prose and examples?", "a": ["The agent becomes confused and may produce erratic code; ensure examples match prose descriptions exactly", "The agent automatically rewrites the spec", "The compiler fixes the contradiction", "The terminal prints a warning"], "c": 0, "why": "Inconsistencies between prose and examples create cognitive dissonance in language models."},
                {"q": "How many input-output examples are typically sufficient for an endpoint specification?", "a": ["One happy path example and one or two representative error/edge case examples", "At least 1,000 examples", "Zero examples; models don't like examples", "Exactly 50 examples"], "c": 0, "why": "A happy path plus critical error cases provides strong few-shot guidance with minimal token overhead."}
            ],
            "You know how to use concrete examples to eliminate specification ambiguity.",
            "Iterative Spec Refinement", "Learn how to iteratively refine specifications through prototype feedback."
        ),
        build_lesson(
            7, "iterative-spec-refinement", "Iterative Spec Refinement", "Iteration",
            "Refining specifications through iterative feedback loops between human architect and agent.",
            "Why is treating a specification as an evolving living document superior to rigid waterfall specs?",
            ["Implementing early phases reveals hidden technical realities and edge cases that refine the specification", "Specs cannot be saved to git unless modified", "Living documents eliminate the need for software code", "It allows developers to change business goals every hour"],
            0, "Real-world implementation provides empirical feedback that sharpens and clarifies specifications.",
            [
                "<p>Writing a specification is not a one-and-done waterfall ritual. Even the best human architects cannot foresee every technical nuance of a complex codebase before implementation begins. The most effective specification workflow is <strong>iterative</strong>.</p>",
                "<p>The iterative refinement loop works like this:</p>",
                "<ul><li><strong>Phase 1: Draft Spec.</strong> The human writes a high-level spec with goals, constraints, and initial schemas.</li><li><strong>Phase 2: Agent Exploration & Discovery.</strong> The agent greps the repository and explores existing seams. The agent reports: <em>'Notice: The User table has no organization_id column, but it has a company_id foreign key. Should we reuse company_id?'</em></li><li><strong>Phase 3: Spec Update.</strong> The human updates the spec with the discovered truth.</li><li><strong>Phase 4: Implementation & Verification.</strong> The agent builds against the updated, grounded specification.</li></ul>",
                "<pre><code># Agent Feedback that sharpens the spec:\nAgent: \"I inspected the PaymentGateway interface. It requires an idempotency_key\n        string for all charge calls. The current spec does not define how\n        idempotency keys are generated.\"\nHuman: \"Good catch. Updating spec section 2.4: Generate idempotency_key as\n        'charge_' + order_uuid4. Proceed with implementation.\"</code></pre>",
                "<div class=\"callout\"><p><strong>Collaborative Discovery:</strong> Use the agent's fast code navigation to audit your assumptions before committing to a final architectural direction.</p></div>"
            ],
            "The Iterative Specification Loop", "Discovery and refinement cycle",
            [
                {"title": "1. Draft Spec", "lines": ["Initial architectural vision", "Identified core goals"]},
                {"title": "2. Agent Probe", "lines": ["Grep existing code & schemas", "Identify hidden friction & seams"]},
                {"title": "3. Refined Spec", "lines": ["Ground in repository reality", "Unambiguous implementation contract"]}
            ],
            "Surfacing Hidden Assumptions", "Preventing late-stage architectural surprises",
            [
                {"title": "Assumed Schema", "lines": ["Spec assumes table has 'org_id'", "Unverified assumption"]},
                {"title": "Repo Reality", "lines": ["Table actually uses 'team_id'", "Discovered in 30 seconds by agent"]},
                {"title": "Aligned Contract", "lines": ["Spec updated to 'team_id'", "Zero rework required"]}
            ],
            "Complete the spec refinement sentence",
            "Iterative spec refinement uses the agent's fast repository exploration to surface hidden {1} before final {2}.",
            [
                {"answer": "assumptions", "hint": "Unverified beliefs about the codebase", "options": ["assumptions", "compilers", "licenses"]},
                {"answer": "implementation", "hint": "Writing and deploying the code", "options": ["implementation", "marketing", "billing"]}
            ],
            [
                {"q": "What valuable role can an AI agent play during the specification drafting phase?", "a": ["Auditing the existing codebase to verify whether assumed tables, interfaces, and functions actually exist", "Writing the marketing press release", "Approving engineering budgets", "Buying domain names"], "c": 0, "why": "Agents can rapidly probe repository reality to validate or refute architectural assumptions."},
                {"q": "What should a developer do when an agent discovers an ambiguity in the specification?", "a": ["Pause, update the written specification with the explicit decision, and have the agent continue", "Tell the agent to guess randomly", "Delete the codebase", "Ignore the ambiguity and hope for the best"], "c": 0, "why": "Updating the specification preserves the single source of truth for the project."},
                {"q": "Why is an iterative specification approach faster than traditional waterfall planning?", "a": ["It catches technical incompatibilities within minutes of exploration rather than months into implementation", "It bypasses all testing requirements", "It eliminates the need for software engineers", "It makes servers run faster"], "c": 0, "why": "Fast feedback between specification and repository reality prevents costly late-stage rework."},
                {"q": "Where should the refined specification ideally live in a project?", "a": ["In the repository itself, such as in a docs/specs/ or issue tracking markdown file alongside the code", "Only in ephemeral chat history", "On a whiteboard in an empty office", "In a private personal notebook"], "c": 0, "why": "Checking specifications into version control ensures they serve as living project documentation."}
            ],
            "You know how to iteratively refine specifications through agent discovery.",
            "Specs as Living Contracts for Humans and Machines", "Transform specifications into durable documentation and test fixtures."
        ),
        build_lesson(
            8, "specs-as-living-contracts", "Specs as Living Contracts for Humans and Machines", "Living Contracts",
            "Using specifications as persistent contracts, architecture documentation, and automated test fixtures.",
            "What makes a specification a 'living contract' rather than dead documentation?",
            ["It is tied directly to automated tests and checked into version control alongside the code it describes", "It is printed on paper and framed on the wall", "It is updated by a machine learning script every 10 seconds", "It contains animated GIF diagrams"],
            0, "Living contracts are backed by automated tests, ensuring code and documentation never drift apart.",
            [
                "<p>Traditional software documentation suffers from rapid decay: someone writes a 20-page Word document, features evolve, and within three months the document describes a system that no longer exists. It becomes <strong>dead documentation</strong>.</p>",
                "<p>In modern AI-assisted engineering, specifications serve as <strong>Living Contracts</strong>:</p>",
                "<ul><li><strong>Dual Readership:</strong> Written in clean Markdown so both human teammates and AI agents can read and reason over them.</li><li><strong>Tied to Verification:</strong> Every clause in the spec corresponds to an automated test in the repository. If the code deviates from the spec, CI fails.</li><li><strong>Checked into Version Control:</strong> Living in `docs/specs/` or `decisions/`, evolving atomically alongside code pull requests.</li><li><strong>Reusable Context:</strong> Future agent sessions read past specifications to understand <em>why</em> architecture was designed in a particular way.</li></ul>",
                "<pre><code># The Living Contract Lifecycle:\n1. Spec authored: docs/specs/004-billing-engine.md\n2. Tests written: tests/test_spec_004.py directly asserts spec clauses\n3. Code implemented: src/billing/\n4. CI passes: Spec, tests, and code are in 100% lockstep\n5. Future Agent: Reads spec 004 to safely extend billing without breaking invariants!</code></pre>",
                "<div class=\"callout\"><p><strong>The Final Synthesis:</strong> When you master specification writing, you are not just directing an agent today; you are building an enduring knowledge base that powers your team and your AI tools forever.</p></div>"
            ],
            "Dead Docs vs Living Contracts", "Preserving architectural truth over time",
            [
                {"title": "Dead Documentation", "lines": ["Outdated Word doc / Wiki", "Disconnected from code", "Ignored by developers"]},
                {"title": "Living Contract", "lines": ["Checked into git repo", "Directly tested in CI", "Authoritative agent context"]}
            ],
            "The Compounding Knowledge Flywheel", "How specs accelerate future AI sessions",
            [
                {"title": "Ticket 1: Write Spec", "lines": ["Documents constraints & choices", "Builds verified feature"]},
                {"title": "Ticket 2: Future Agent", "lines": ["Reads existing spec 001", "Knows all rules instantly", "Zero architectural drift"]}
            ],
            "Complete the living contract sentence",
            "A living contract stays accurate over time because its requirements are directly verified by {1} executed in {2}.",
            [
                {"answer": "automated tests", "hint": "Executable assertions in the repo", "options": ["automated tests", "verbal promises", "marketing teams"]},
                {"answer": "CI pipelines", "hint": "Continuous Integration build runners", "options": ["CI pipelines", "email inboxes", "chatrooms"]}
            ],
            [
                {"q": "Why is storing specifications as Markdown files in the git repository recommended?", "a": ["They evolve atomically with code pull requests, maintain version history, and are easily read by agents", "Markdown files take 0 bytes on disk", "Git can only track Markdown files", "Markdown is required by cloud hosting providers"], "c": 0, "why": "Version-controlled Markdown keeps documentation, code, and agent context synchronized."},
                {"q": "How do living specifications prevent architectural drift when multiple agents work on a codebase?", "a": ["Agents read the canonical specifications to adhere to established invariants, schemas, and design decisions", "They freeze git repositories so no one can edit files", "They restrict coding to a single programming language", "They delete duplicate files automatically"], "c": 0, "why": "Specifications serve as the shared anchor that keeps separate agent sessions aligned."},
                {"q": "What happens when code changes but a living contract test is not updated?", "a": ["Continuous Integration fails, alerting the engineer to either update the spec or fix the accidental deviation", "The computer restarts", "The developer's account is locked", "The code runs with 10x slower latency"], "c": 0, "why": "Failing CI tests immediately surface drift between code implementation and contractual specifications."},
                {"q": "What is the ultimate benefit of the 'Specification-First' workflow over ad-hoc prompting?", "a": ["Higher software quality, lower regression rates, and reusable documentation for both humans and AI tools", "It completely eliminates the need to write tests", "It allows developers to stop reviewing code", "It guarantees software has zero dependencies"], "c": 0, "why": "Specifications deliver predictable, durable software engineering outcomes in the AI era."}
            ],
            "You have completed the Prompting vs Specification course.",
            "Next Course: Context Engineering", "Discover how to optimize token budgets and select the right context for AI models."
        )
    ]

    glossary = [
        {"id": "spec", "title": "Specifications & Contracts", "terms": [
            {"term": "Software Specification", "def": "A precise document defining functional requirements, technical constraints, invariants, and acceptance criteria.", "lesson": 1, "tags": ["specs", "engineering"]},
            {"term": "Living Contract", "def": "A specification maintained in version control alongside code and validated by automated tests.", "lesson": 8, "tags": ["specs", "quality"]},
            {"term": "System Invariant", "def": "A universal business rule or structural truth that must remain valid across all state transitions.", "lesson": 5, "tags": ["architecture", "invariants"]}
        ]},
        {"id": "boundaries", "title": "Requirements & Boundaries", "terms": [
            {"term": "Functional Requirement", "def": "A specification of what a system must do from the perspective of user capabilities and business outcomes.", "lesson": 3, "tags": ["specs", "requirements"]},
            {"term": "Implementation Constraint", "def": "A technical boundary or limitation governing how a requirement must be built (libraries, patterns, performance).", "lesson": 3, "tags": ["specs", "constraints"]},
            {"term": "Non-Goal", "def": "An explicit statement of what is deliberately excluded from scope to prevent agent over-engineering.", "lesson": 2, "tags": ["specs", "scope"]}
        ]},
        {"id": "verification", "title": "Verification & Grounding", "terms": [
            {"term": "Machine-Verifiable Criterion", "def": "An acceptance criterion that can be objectively proven true or false via an automated command or test.", "lesson": 4, "tags": ["testing", "verification"]},
            {"term": "Example-Driven Specification", "def": "Using concrete input-output payloads (JSON, code) to eliminate semantic ambiguity in requirements.", "lesson": 6, "tags": ["specs", "examples"]},
            {"term": "Golden Reference", "def": "An existing production file in the repository cited in a spec as an exemplary pattern to replicate.", "lesson": 6, "tags": ["architecture", "patterns"]}
        ]},
        {"id": "iteration", "title": "Discovery & Refinement", "terms": [
            {"term": "Iterative Spec Refinement", "def": "The practice of using agent repository probes to surface hidden friction and sharpen specifications.", "lesson": 7, "tags": ["workflow", "iteration"]},
            {"term": "Architectural Drift", "def": "The gradual divergence of a codebase from its intended design principles due to uncoordinated changes.", "lesson": 8, "tags": ["architecture", "quality"]},
            {"term": "Circuit Breaker", "def": "An explicit limit halting automated agent loops when verification criteria fail repeatedly.", "lesson": 4, "tags": ["ai", "safety"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "Agent Specification Template",
            "label": "Four essential sections",
            "code": "## 1. Goal & Context\nWhat we are building and why.\n## 2. Requirements\nInputs, outputs, schemas, endpoints.\n## 3. Constraints & Non-Goals\nWhat NOT to touch or install.\n## 4. Verification\nExact commands to verify: `pytest tests/test_feature.py`",
            "lessonN": 2, "lessonSlug": "anatomy-of-a-specification", "lessonTitle": "Anatomy of a Software Specification"
        },
        {
            "title": "Machine-Verifiable Acceptance Check",
            "label": "Binary objective criteria",
            "code": "# BAD: 'Make sure billing is reliable'\n# GOOD:\n- [ ] `pytest tests/test_billing.py` passes 10/10 tests\n- [ ] `ruff check src/billing/` reports 0 errors\n- [ ] POST /api/v1/charge returns HTTP 402 on card decline",
            "lessonN": 4, "lessonSlug": "verifiable-acceptance-criteria", "lessonTitle": "Acceptance Criteria Agents Can Actually Verify"
        },
        {
            "title": "Concrete JSON Example Pattern",
            "label": "Few-shot schema grounding",
            "code": "### Request Example:\n{\n  \"sku\": \"ITEM-42\",\n  \"qty\": 2,\n  \"price_cents\": 1999\n}\n### Response (201):\n{\n  \"order_id\": \"ord_104\",\n  \"total_cents\": 3998\n}",
            "lessonN": 6, "lessonSlug": "example-driven-specifications", "lessonTitle": "Example-Driven Specifications"
        },
        {
            "title": "Spec Invariants Clause",
            "label": "Guarding non-negotiable rules",
            "code": "### Invariants (MUST NEVER BE VIOLATED):\n1. Account balance cannot be negative.\n2. Shipped orders cannot be cancelled.\n3. Write test for each invariant before modifying code.",
            "lessonN": 5, "lessonSlug": "edge-cases-invariants-non-goals", "lessonTitle": "Edge Cases, Invariants, and Non-Goals"
        }
    ]

    course_data = {
        "id": "prompting-vs-specification",
        "title": "Prompting vs Specification",
        "num": 52,
        "emoji": "📝",
        "desc": "Why a precise specification beats a clever prompt — and how to write requirements an agent can verify.",
        "topics": ["Specifications", "Acceptance Criteria", "Invariants", "Requirements", "Verification", "Living Contracts"],
        "mission": "# Mission — Prompting vs Specification\n\nTransition from conversational prompting to professional software specification. Learn to craft structured contracts, decouple functional requirements from constraints, define machine-verifiable criteria, anchor designs with concrete examples, and create living documentation.",
        "notes": "# Notes — Prompting vs Specification\n\nSpecifications eliminate statistical ambiguity. What you leave unsaid, the model will invent probabilistically.",
        "resources": "# Resources — Prompting vs Specification\n\n- Michael Nygard, *Documenting Architecture Decisions (ADRs)*\n- Martin Fowler, *Given When Then (BDD)*\n- Gojko Adzic, *Specification by Example*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

if __name__ == "__main__":
    make_course_52()

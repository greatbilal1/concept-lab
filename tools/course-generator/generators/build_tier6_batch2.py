import os
import sys
sys.path.append(os.path.dirname(__file__))
from helpers import build_lesson, save_course

# ==============================================================================
# COURSE 53: context-engineering
# ==============================================================================
def make_course_53():
    lessons = [
        build_lesson(
            1, "context-window-as-budget", "The Context Window as a Scarcity Budget", "Context Budget",
            "Treating the context window as a finite cognitive and financial budget rather than an infinite dumping ground.",
            "Why is stuffing an entire 200,000-token codebase into a prompt counter-productive?",
            ["Attention degrades, latency skyrockets, token costs multiply, and irrelevant noise distracts the model", "Models automatically delete any prompt longer than 10k tokens", "Operating systems refuse to transmit large packets", "Python cannot tokenize text over 50k tokens"],
            0, "Context windows have finite attention density. High noise dilutes reasoning and increases error rates.",
            [
                "<p>Modern language models boast context windows of 128k, 200k, and even 1M+ tokens. Marketing departments describe this as 'unlimited context'. In practice, treating the context window as an infinite dumpster is the fastest way to make an AI model produce buggy, mediocre code.</p>",
                "<p><strong>Context Engineering</strong> is the discipline of treating the context window as a <strong>scarcity budget</strong>. Every token injected into the prompt carries three distinct costs:</p>",
                "<ul><li><strong>1. Financial Cost:</strong> LLM APIs bill for every input token. A 100k-token prompt sent 20 times in a session generates substantial cloud invoices.</li><li><strong>2. Latency Cost:</strong> Time-to-First-Token (TTFT) scales with prompt size. Large prompts make interactive agent sessions sluggish.</li><li><strong>3. Attention Degradation:</strong> Transformer attention is a softmax probability distribution. As you add thousands of lines of irrelevant code, the attention weight assigned to your core instruction shrinks.</li></ul>",
                "<pre><code># The Signal-to-Noise Ratio (SNR) in Context\n# BAD: 80,000 tokens of raw HTML, lockfiles, minified bundles, and unrelated tests.\n#      Signal: 2% | Noise: 98% -> Model misses critical constraints!\n\n# GOOD: 2,500 tokens of targeted schema, interface definitions, and 1 test.\n#       Signal: 90% | Noise: 10% -> Model executes with razor precision!</code></pre>",
                "<div class=\"callout\"><p><strong>The Golden Rule:</strong> The best context engineer is not the one who knows what to include; it is the one who knows what to leave out.</p></div>"
            ],
            "The Three Costs of Context", "Financial, latency, and cognitive attention costs",
            [
                {"title": "Financial Cost", "lines": ["Input tokens billed on every call", "Compounding multi-turn expense"]},
                {"title": "Latency Cost", "lines": ["Time-to-first-token scales up", "Sluggish developer feedback"]},
                {"title": "Attention Dilution", "lines": ["Softmax attention spreads thin", "Critical instructions lost"]}
            ],
            "Signal vs Noise in Context", "Comparing saturated vs curated prompts",
            [
                {"title": "Context Dumping", "lines": ["100k tokens of raw repo dump", "Noise overwhelms model focus"]},
                {"title": "Context Engineering", "lines": ["Curated schemas & interfaces", "High-density signal yields success"]}
            ],
            "Complete the context budget sentence",
            "Context engineering treats the token window as a scarce {1} to maximize {2} over irrelevant noise.",
            [
                {"answer": "budget", "hint": "Finite resource allocation", "options": ["budget", "database", "disk"]},
                {"answer": "signal", "hint": "Useful, high-value information", "options": ["signal", "latency", "tokens"]}
            ],
            [
                {"q": "What happens to a transformer model's attention when context length increases tenfold with irrelevant text?", "a": ["Attention weight on the critical prompt instructions is diluted across the noise, increasing the probability of errors", "The model switches to C++", "The model runs out of hard drive space", "The model ignores all tokens"], "c": 0, "why": "Attention mechanisms normalize weights across all tokens; higher noise reduces relative focus on key instructions."},
                {"q": "How does input prompt size affect interactive developer experience?", "a": ["Larger prompts significantly increase Time-to-First-Token (TTFT), making agent responses slow and sluggish", "Larger prompts make the internet disconnect", "Larger prompts crash the code editor", "Larger prompts reduce battery life to zero"], "c": 0, "why": "Pre-fill computation time scales with input token count, introducing noticeable response delays."},
                {"q": "Which types of files should almost always be excluded from an agent's context window?", "a": ["Minified bundles, binary files, package lockfiles, build artifacts, and vendor libraries", "Python source code files", "SQL migration scripts", "Unit test files"], "c": 0, "why": "Lockfiles and compiled assets burn tens of thousands of tokens with zero architectural value."},
                {"q": "What is 'attention density' in prompt design?", "a": ["The ratio of actionable, relevant domain constraints to total tokens in the prompt", "The number of exclamation points in the prompt", "The font weight used in the markdown editor", "The brightness of the developer's monitor"], "c": 0, "why": "High attention density ensures every token in the prompt contributes directly to task success."}
            ],
            "You understand the fundamental economics and attention dynamics of context budgets.",
            "The Lost in the Middle Phenomenon", "Position information strategically to beat transformer attention biases."
        ),
        build_lesson(
            2, "lost-in-the-middle", "The Lost in the Middle Phenomenon", "Attention Bias",
            "Overcoming the U-shaped attention curve where models recall beginnings and endings while missing the middle.",
            "Where in a long prompt are language models most likely to overlook critical instructions?",
            ["In the middle third of the context window", "At the very first line", "At the very last line", "Models never overlook instructions"],
            0, "Transformer models exhibit a U-shaped recall curve, performing best at the start and end of context.",
            [
                "<p>In 2023, Stanford and UC Berkeley researchers published a landmark paper: <em>'Lost in the Middle: How Language Models Use Long Contexts'</em>. They proved that language models exhibit a severe <strong>U-shaped retrieval bias</strong>.</p>",
                "<p>When information is placed at the very beginning of the prompt (the system instructions) or at the very end (the immediate user query), retrieval accuracy is near 95-100%. But when that same critical fact is buried in the middle of a 50k-token prompt, retrieval accuracy plummets—sometimes falling below 50%!</p>",
                "<pre><code># The U-Shaped Attention Curve:\n# Position 0% (Beginning):   [████████████████████] 98% Recall (System Prompt)\n# Position 25% (Early-Mid):  [██████████          ] 55% Recall\n# Position 50% (DEAD CENTER): [█████               ] 35% Recall (BURIED & LOST!)\n# Position 75% (Late-Mid):   [██████████          ] 58% Recall\n# Position 100% (End):       [████████████████████] 99% Recall (Recent Query)</code></pre>",
                "<p>To engineer resilient context, exploit this physics:</p>",
                "<ul><li><strong>Put Core Invariants at the Top:</strong> System instructions and primary constraints belong at the beginning.</li><li><strong>Put Repetitive Data in the Middle:</strong> File dumps, logs, and background context go in the middle.</li><li><strong>Restate Critical Invariants at the Bottom:</strong> Re-anchor the model just before the generation point: <em>'Remember: Return only valid JSON. Do not modify User.py.'</em></li></ul>",
                "<div class=\"callout\"><p><strong>The Sandwich Pattern:</strong> State your critical constraint at the beginning, and restate it as a concise reminder at the very end of the prompt.</p></div>"
            ],
            "The U-Shaped Recall Curve", "Visualizing attention drop-off in long contexts",
            [
                {"title": "Beginning (0-10%)", "lines": ["System instructions", "95%+ recall accuracy"]},
                {"title": "The Middle (30-70%)", "lines": ["Verbose file dumps", "Recall drops below 50% (Danger Zone)"]},
                {"title": "End (90-100%)", "lines": ["Immediate query & reminder", "98%+ recall accuracy"]}
            ],
            "The Sandwich Prompting Pattern", "Bracketing noise with critical constraints",
            [
                {"title": "Top Slice", "lines": ["Core architectural invariants", "Primary goal & roles"]},
                {"title": "Middle Filling", "lines": ["Retrieved files & context", "Tolerates attention dilution"]},
                {"title": "Bottom Slice", "lines": ["Immediate actionable instruction", "Restated non-negotiable constraints"]}
            ],
            "Fill in the attention curve sentence",
            "The Lost in the Middle phenomenon shows that transformer models recall information best at the {1} and {2} of long prompts.",
            [
                {"answer": "beginning", "hint": "Top of the context window", "options": ["beginning", "middle", "footer"]},
                {"answer": "end", "hint": "Bottom of the context window", "options": ["end", "database", "compiler"]}
            ],
            [
                {"q": "What is the primary recommendation of the 'Sandwich Pattern' in context engineering?",
                 "a": ["State primary constraints at the start of the prompt, and reinforce them at the very end after long context dumps", "Put emojis around all variable names", "Only send three words per prompt", "Split prompts into three separate API calls"],
                 "c": 0, "why": "The Sandwich Pattern leverages the high recall regions at the start and end of context."},
                {"q": "Why should long raw file dumps never be placed at the very end of a prompt?",
                 "a": ["It pushes your actual instruction and query into the low-recall middle, increasing the risk the agent ignores your goal", "It causes syntax errors in JSON", "Files cannot be placed at the end of text", "Operating systems truncate end-of-file bytes"],
                 "c": 0, "why": "The final tokens should always be the immediate task and actionable instructions."},
                {"q": "Does upgrading from a 32k model to a 1M token model eliminate the Lost in the Middle effect?",
                 "a": ["No; larger context windows increase total capacity, but the U-shaped attention bias remains an intrinsic architectural trait", "Yes; 1M models have 100% flat recall everywhere", "Only in models trained on JavaScript", "Only when running on local GPUs"],
                 "c": 0, "why": "Empirical benchmarks show U-shaped recall persists even in multi-million token architectures."},
                {"q": "What type of information is safest to place in the middle of a context window?",
                 "a": ["Reference documentation, retrieved code snippets, and background context that the model consults on demand", "The primary system instruction", "The user's secret API key", "The non-negotiable constraints"],
                 "c": 0, "why": "Reference material in the middle can be referenced when explicitly prompted by top and bottom instructions."}
            ],
            "You know how to strategically position prompt elements to defeat attention bias.",
            "Context Pruning, Summarization, and Compaction", "Reclaim token capacity without losing critical architectural state."
        ),
        build_lesson(
            3, "pruning-summarization-compaction", "Context Pruning, Summarization, and Compaction", "Context Reduction",
            "Techniques for reducing context volume: AST pruning, log stripping, and milestone summarization.",
            "How does AST (Abstract Syntax Tree) pruning reduce code size in context?",
            ["It strips function bodies, keeping only class interfaces, method signatures, and docstrings", "It deletes all comments and leaves only variable names", "It converts Python code into binary machine code", "It translates code into compressed ZIP archives"],
            0, "AST pruning provides complete structural interfaces while omitting thousands of lines of internal implementation details.",
            [
                "<p>When an agent needs to know how to interact with another module, it rarely needs to read all 2,000 lines of implementation logic. It only needs the <strong>public surface</strong>: class names, method signatures, parameter types, return types, and docstrings.</p>",
                "<p>Three powerful techniques allow context engineers to compress context by 80-90%:</p>",
                "<ul><li><strong>1. AST Skeleton Pruning:</strong> Extracting interfaces and type stubs (`.pyi` or TypeScript declarations) while replacing function bodies with `...`. An 800-line service file compresses to 40 lines of pure interface contract.</li><li><strong>2. Terminal Log Truncation:</strong> When a test command outputs 500 lines of passing tests, strip the noise and keep only the failing traceback and summary line.</li><li><strong>3. Milestone Summarization (Compaction):</strong> Replacing 20 turns of trial-and-error debugging with a concise 3-line statement of facts learned.</li></ul>",
                "<pre><code># Full Implementation (850 tokens):\nclass PaymentService:\n    def charge(self, user_id: str, amount_cents: int) -> Transaction:\n        # 40 lines of Stripe SDK calls, retries, webhook dispatch, logging...\n        return txn\n\n# AST Pruned Skeleton (60 tokens):\nclass PaymentService:\n    def charge(self, user_id: str, amount_cents: int) -> Transaction:\n        \"\"\"Charge customer card and return recorded Transaction record.\"\"\"\n        ...</code></pre>",
                "<p>The agent gets 100% of the type and contract information it needs to write caller code, consuming 7% of the tokens!</p>",
                "<div class=\"callout\"><p><strong>Rule:</strong> Never send full implementations of dependency modules into context when a type stub or interface signature provides the exact same information.</p></div>"
            ],
            "Context Pruning Strategies", "Slashing token volume while preserving interfaces",
            [
                {"title": "Raw File (1,200 tokens)", "lines": ["Full method bodies & loops", "Internal helper variables", "Logging & boilerplate"]},
                {"title": "AST Skeleton (90 tokens)", "lines": ["Method signatures & types", "Docstring contract", "Body replaced with '...'"]},
                {"title": "Token Savings", "lines": ["92% token reduction", "Identical interface utility"]}
            ],
            "Log Stripping Pipeline", "Filtering terminal noise before model ingestion",
            [
                {"title": "Raw Test Output", "lines": ["500 lines of green passes", "3 lines of traceback"]},
                {"title": "Stripping Filter", "lines": ["Drop all passing lines", "Extract failing stack trace"]},
                {"title": "Clean Context", "lines": ["Pinpoints exact line & error", "Zero token waste"]}
            ],
            "Fill in the context reduction sentence",
            "AST pruning replaces internal function bodies with {1} while preserving class names, method signatures, and {2}.",
            [
                {"answer": "ellipses", "hint": "The three dots placeholder ...", "options": ["ellipses", "random numbers", "comments"]},
                {"answer": "type hints", "hint": "Parameter and return annotations", "options": ["type hints", "passwords", "terminal commands"]}
            ],
            [
                {"q": "Why is an interface skeleton (AST stub) often superior to full source code for an agent?",
                 "a": ["It conveys all necessary public methods and parameter types without distracting the model with internal implementation trivia", "It allows the agent to run code without Python", "It prevents other developers from seeing code", "It compiles faster in browsers"],
                 "c": 0, "why": "Skeletons provide complete contract clarity with minimal token overhead."},
                {"q": "What should a tool runner do when a bash command outputs 50,000 lines of compilation logs?",
                 "a": ["Truncate the middle, preserve the final exit code and the last 50 error lines, or save to a file for targeted grep", "Send all 50,000 lines into the model prompt", "Crash the IDE", "Delete the terminal session"],
                 "c": 0, "why": "Truncating repetitive output saves context budget while preserving the critical error traceback."},
                {"q": "How does milestone summarization prevent infinite context growth during long agent sessions?",
                 "a": ["It collapses dozens of exploratory turns into a compact summary of decisions, state, and active blockers", "It restarts the computer every 10 turns", "It automatically commits code to GitHub", "It removes all test assertions"],
                 "c": 0, "why": "Summarization distills progress into a concise checkpoint, reclaiming token capacity."},
                {"q": "What tool in Python generates type stubs automatically from source files?",
                 "a": ["stubgen (part of mypy) or pyright stub generation", "pytest", "black", "pip"],
                 "c": 0, "why": "stubgen and pyright generate clean `.pyi` interface stubs from existing source code."}
            ],
            "You know how to use AST pruning and log stripping to drastically reduce context volume.",
            "Selecting the Right Files for the Task", "Assemble the minimal necessary working set of files for any engineering goal."
        ),
        build_lesson(
            4, "selecting-the-right-files", "Selecting the Right Files for the Task", "Working Set",
            "Curating the optimal working set: the target file, immediate interfaces, relevant test, and nothing else.",
            "What constitutes the optimal 'working set' of files for an agent implementing a new feature?",
            ["The file being edited, its direct interface contracts, the corresponding test file, and zero unrelated files", "Every single file in the repository", "Only the README.md file", "All files modified in the past year"],
            0, "A tight working set contains only the direct change site, its interfaces, and its test suite.",
            [
                "<p>When an engineer opens an IDE, they don't open 150 tabs. They open three or four tabs: the implementation file, the interface or model it depends on, and the unit test file. This is the <strong>working set</strong>.</p>",
                "<p>AI agents require the exact same discipline. If you dump 40 files into an agent's context because you aren't sure which one matters, the agent's attention wanders across unrelated logic. It will hallucinate dependencies on files it never needed to touch.</p>",
                "<p>A disciplined working set for a coding task follows the <strong>Rule of Three</strong>:</p>",
                "<ul><li><strong>1. The Target File:</strong> The file being created or modified (e.g. `src/billing/service.py`).</li><li><strong>2. The Interface Seam:</strong> The schema or interface definition it must satisfy (e.g. `src/billing/models.py`).</li><li><strong>3. The Verification File:</strong> The test file that proves correctness (e.g. `tests/test_billing.py`).</li></ul>",
                "<pre><code># The Lean Working Set in Agent Context:\n1. src/billing/service.py      (Lines 1-80)   -> Edit site\n2. src/billing/schemas.py      (Interface)    -> Contract definition\n3. tests/test_billing.py       (Full file)    -> Verification harness\n# Total context: ~1,800 tokens. Zero distractions!</code></pre>",
                "<div class=\"callout\"><p><strong>Negative Selection:</strong> If a file is not being read to understand a contract or being edited, REMOVE it from context. Irrelevant files are pure cognitive poison for language models.</p></div>"
            ],
            "The Rule of Three Working Set", "Optimal file selection for task execution",
            [
                {"title": "1. Target File", "lines": ["Site of code modification", "Focused line slice"]},
                {"title": "2. Interface Seam", "lines": ["Contract & schema definitions", "AST skeleton or types"]},
                {"title": "3. Verification Harness", "lines": ["Unit / integration test", "Defines acceptance criteria"]}
            ],
            "Working Set Comparison", "Tight working set vs sprawling repository dump",
            [
                {"title": "Bloated Working Set", "lines": ["35 files loaded", "Model edits wrong files", "Frequent hallucinations"]},
                {"title": "Lean Working Set", "lines": ["3 targeted files", "Model razor-focused", "First-try pass rate: 90%+"]}
            ],
            "Complete the working set sentence",
            "A disciplined working set contains the target edit file, its direct {1} contracts, and the {2} suite that verifies it.",
            [
                {"answer": "interface", "hint": "Type and schema definitions", "options": ["interface", "operating system", "license"]},
                {"answer": "test", "hint": "Automated verification file", "options": ["test", "marketing", "backup"]}
            ],
            [
                {"q": "Why does loading unrelated files into an agent's context increase bug rates?",
                 "a": ["The model may attempt to refactor or borrow code from unrelated modules, creating unnecessary cross-module coupling", "It deletes the unrelated files", "It causes git merge conflicts automatically", "The compiler blocks files from opening"],
                 "c": 0, "why": "Extraneous context leads models to make unnecessary edits and introduce spurious dependencies."},
                {"q": "What is the primary indicator that your agent working set is too large?",
                 "a": ["The agent makes edits in files you never asked it to touch, or gets confused by variable names in other modules", "The test runner runs 5x faster", "The terminal prints green text", "The computer battery lasts longer"],
                 "c": 0, "why": "Unsolicited edits in outside files are a classic symptom of context pollution."},
                {"q": "How should an agent handle a task that spans 15 different files?",
                 "a": ["Decompose the task into smaller subtasks, loading only the 2-3 files relevant to each subtask sequentially", "Dump all 15 files into one prompt and hope for the best", "Ask the user to do the work manually", "Delete 12 of the files"],
                 "c": 0, "why": "Sequential decomposition keeps the working set small and focused during each step."},
                {"q": "What role does the test file play in the agent's working set?",
                 "a": ["It establishes the unambiguous behavioral contract that the implementation file must satisfy", "It provides styling rules for CSS", "It compiles the project to WebAssembly", "It stores database passwords"],
                 "c": 0, "why": "The test file acts as an executable specification and verification harness."}
            ],
            "You know how to curate tight, high-signal working sets for any coding task.",
            "Next Course: Giving AI Agents the Right Project Context", "Learn how to craft conventions files, repo maps, and ADRs that guide agents."
        ),
        build_lesson(
            5, "token-economics-signal-noise", "Token Economics: Signal-to-Noise Ratio", "Token Economics",
            "Analyzing the economics of tokens: pricing tiers, caching discounts, and maximizing the signal-to-noise ratio.",
            "What is 'Signal-to-Noise Ratio' (SNR) in the context of LLM prompts?",
            ["The proportion of tokens that directly inform the task vs tokens that are irrelevant, redundant, or boilerplate", "The volume of audio notifications from the IDE", "The speed of the network cable in megahertz", "The ratio of uppercase to lowercase letters"],
            0, "High SNR ensures the model's attention is focused exclusively on critical task requirements.",
            [
                "<p>Every token in an LLM prompt costs money, time, and attention. In production engineering, optimizing <strong>Token Economics</strong> is not about penny-pinching; it is about engineering reliability.</p>",
                "<p>Language model APIs bill using an asymmetric pricing model: <strong>input tokens</strong> are cheaper than <strong>output tokens</strong> (typically 1:3 to 1:5 ratio). However, because multi-turn agent sessions resend the entire conversation history on every single turn, input token volume grows <em>quadratically</em> with turn count!</p>",
                "<pre><code># The Quadratic Input Token Escalation:\n# Turn 1: 5k context   -> Model runs 5k input tokens\n# Turn 2: 12k context  -> Model runs 12k input tokens\n# Turn 3: 20k context  -> Model runs 20k input tokens\n# ...\n# Turn 15: 85k context -> Model runs 85k input tokens\n# Total input tokens billed: over 600,000 tokens for one 15-turn task!</code></pre>",
                "<p>To maximize your Signal-to-Noise Ratio (SNR):</p>",
                "<ul><li><strong>Strip Markdown Flavor Padding:</strong> Remove chatty fluff ('Please be so kind as to...'). State constraints directly.</li><li><strong>Strip Comments in Ingested Code:</strong> Remove license headers, auto-generated banners, and verbose multi-line docstrings from injected context files.</li><li><strong>Filter Whitespace:</strong> Avoid sending thousands of empty blank lines or massive indented ASCII tables.</li></ul>",
                "<div class=\"callout\"><p><strong>The Math:</strong> Doubling your prompt SNR cuts token bills in half, slashes latency by 40%, and directly reduces hallucination rates.</p></div>"
            ],
            "Quadratic Cost Escalation", "How multi-turn agent sessions accumulate input tokens",
            [
                {"title": "Single Turn", "lines": ["5,000 tokens", "Cost: $0.015"]},
                {"title": "Turn 10 (Compounded)", "lines": ["50,000 tokens per turn", "Total billed: 275k tokens"]},
                {"title": "Turn 20 (Unpruned)", "lines": ["100k tokens per turn", "Total billed: 1.2M tokens"]}
            ],
            "Signal-to-Noise Optimization", "Trimming dead weight from context",
            [
                {"title": "Noise Removed", "lines": ["License headers & copyright banners", "Passing test logs & blank lines"]},
                {"title": "Pure Signal Retained", "lines": ["Exact schema, error trace, edit site", "High attention focus, low bill"]}
            ],
            "Complete the token economics sentence",
            "In multi-turn agent sessions, input tokens scale {1} because conversation history is resent on every turn, making high {2} critical.",
            [
                {"answer": "quadratically", "hint": "Compounding growth curve", "options": ["quadratically", "linearly", "logarithmically"]},
                {"answer": "signal-to-noise", "hint": "Proportion of useful information", "options": ["signal-to-noise", "font size", "file size"]}
            ],
            [
                {"q": "Why does multi-turn agent chat consume vastly more input tokens than a single prompt?",
                 "a": ["Every turn re-sends the entire preceding conversation history and tool outputs to the model API", "Language models charge penalty fees for long conversations", "Output tokens are converted to input tokens", "The IDE re-reads the entire hard drive on each turn"],
                 "c": 0, "why": "APIs are stateless; full conversation history must be transmitted on every subsequent request."},
                {"q": "How does removing boilerplate license headers from injected context improve agent performance?",
                 "a": ["It prevents wasting hundreds of tokens on legal disclaimers that provide zero architectural value", "It violates international copyright law", "It speeds up Python compilation", "It turns off the linter"],
                 "c": 0, "why": "Legal banners consume context budget without contributing any technical signal."},
                {"q": "What is the economic consequence of high-noise prompts in CI pipelines?",
                 "a": ["Massive cloud API bills and slow CI build times that compound across hundreds of PR runs", "GitHub blocks the repository", "Developers lose commit access", "Servers automatically shut down"],
                 "c": 0, "why": "Automated agent runs in CI scale token costs with every PR commit."},
                {"q": "Which technique directly combats quadratic token escalation during long agent sessions?",
                 "a": ["Milestone compaction: replacing verbose turn history with a concise state summary checkpoint", "Using a faster internet connection", "Writing prompts in all caps", "Running tests with -v flag"],
                 "c": 0, "why": "Compaction resets the history volume, flattening the quadratic token escalation curve."}
            ],
            "You understand the mathematics and economics of token budgeting.",
            "Dynamic Context Assembly", "Build dynamic retrieval systems that fetch context just-in-time."
        ),
        build_lesson(
            6, "dynamic-context-assembly", "Dynamic Context Assembly", "Context Retrieval",
            "Building systems that dynamically assemble context just-in-time based on active task intent.",
            "What is 'Dynamic Context Assembly' in modern AI coding tools?",
            ["Automatically gathering only the relevant files, schemas, and git diffs at runtime based on the specific prompt query", "Compiling code dynamically with a JIT compiler", "Changing variable names on the fly", "Generating random unit tests"],
            0, "Dynamic assembly queries the repository to build a bespoke context package tailored to the active task.",
            [
                "<p>Static context—hardcoding a fixed set of files into every prompt—fails because different tasks require completely different knowledge. Fixing a CSS alignment bug requires stylesheets and DOM templates; optimizing an SQL query requires schemas and EXPLAIN plans.</p>",
                "<p>Modern coding assistants use <strong>Dynamic Context Assembly</strong>. When a user submits a query, an automated orchestration pipeline gathers context just-in-time:</p>",
                "<ul><li><strong>1. Intent Classification:</strong> Is this a bug fix, a refactor, a test generation task, or a documentation query?</li><li><strong>2. Symbol Extraction:</strong> Extract function and class names mentioned in the prompt or active editor selection.</li><li><strong>3. Dependency Graph Walk:</strong> Follow `import` statements to find immediate caller and callee modules.</li><li><strong>4. Git Diff Inspection:</strong> If on a feature branch, include `git diff main...HEAD` to show recent project momentum.</li></ul>",
                "<pre><code># Dynamic Context Assembly Pipeline:\nUser Query: \"Fix the Stripe webhook signature verification error\"\n1. Extractor finds symbols: ['Stripe', 'webhook', 'signature']\n2. Grep finds: src/webhooks/stripe.py and tests/test_webhooks.py\n3. Dependency graph walks to: src/config.py (for STRIPE_WEBHOOK_SECRET)\n4. Context Package built: 3 files, exactly 1,400 tokens -> Dispatched to model!</code></pre>",
                "<p>This Just-In-Time (JIT) retrieval provides maximum relevance with zero manual file dragging by the developer.</p>",
                "<div class=\"callout\"><p><strong>The Insight:</strong> The best context assembly feels like magic because it anticipates the exact files an expert human engineer would open to solve the task.</p></div>"
            ],
            "Dynamic Assembly Pipeline", "Just-in-time context construction",
            [
                {"title": "1. User Query", "lines": ["'Fix auth token timeout'", "Extract symbols & intent"]},
                {"title": "2. Graph Resolution", "lines": ["Follow imports: auth -> tokens -> db", "Find matching test_auth.py"]},
                {"title": "3. Curated Assembly", "lines": ["Packaged into clean prompt", "Zero irrelevant files included"]}
            ],
            "Static vs Dynamic Assembly", "Comparing brute-force vs intelligent retrieval",
            [
                {"title": "Static Context", "lines": ["Hardcoded list of 10 files", "Half are irrelevant, missing critical ones"]},
                {"title": "Dynamic Assembly", "lines": ["Bespoke working set per query", "Always relevant, always minimal tokens"]}
            ],
            "Complete the dynamic assembly sentence",
            "Dynamic context assembly uses symbol extraction and dependency {1} walks to gather files {2} based on task intent.",
            [
                {"answer": "graph", "hint": "Network of importing modules", "options": ["graph", "binary", "terminal"]},
                {"answer": "just-in-time", "hint": "At runtime on demand", "options": ["just-in-time", "offline", "once a year"]}
            ],
            [
                {"q": "How does walking the import dependency graph aid dynamic context assembly?",
                 "a": ["It identifies the immediate upstream callers and downstream dependencies of the file being edited", "It compiles Python to machine code", "It checks for internet connection speed", "It formats the file with Prettier"],
                 "c": 0, "why": "Following imports reveals the exact interfaces and types the target file interacts with."},
                {"q": "Why is including recent git diffs useful when assembling context for an agent?",
                 "a": ["It gives the model immediate context on what was recently changed, guiding it to follow current momentum and patterns", "It proves who wrote the code", "It reduces git repository size", "It compresses commit messages"],
                 "c": 0, "why": "Recent diffs show current work in progress and active architectural direction."},
                {"q": "What happens if a dynamic assembly system has poor symbol extraction?",
                 "a": ["It retrieves irrelevant files or misses critical dependency contracts, degrading agent performance", "The CPU fan stops spinning", "The terminal loses its font color", "The operating system crashes"],
                 "c": 0, "why": "Accurate symbol resolution is the foundation of relevant context retrieval."},
                {"q": "What is the primary advantage of dynamic assembly over manual file attachment by the user?",
                 "a": ["It automates context curation, saving developer time and preventing human oversight of missing dependencies", "It eliminates the need for coding agents", "It makes model APIs completely free", "It bypasses all unit tests"],
                 "c": 0, "why": "Automated retrieval removes friction and reliably finds all required technical seams."}
            ],
            "You know how dynamic context assembly builds bespoke, high-signal prompt packages.",
            "Prompt Caching and Prefix Optimization", "Leverage modern KV-cache reuse to slash latency and API costs."
        ),
        build_lesson(
            7, "prompt-caching-prefix-optimization", "Prompt Caching and Prefix Optimization", "Caching Optimization",
            "Leveraging LLM prompt caching (Anthropic, OpenAI, DeepSeek) by structuring prompts with static prefixes.",
            "How does Prompt Caching reduce API costs and latency in modern LLM providers?",
            ["The provider reuses pre-computed KV-cache states for identical prompt prefixes across requests, cutting cost up to 90%", "The provider saves prompts to local floppy disks", "The browser caches HTML pages in memory", "The API skips running the neural network entirely"],
            0, "KV-cache reuse avoids recomputing attention over large static prefixes, slashing cost and latency.",
            [
                "<p>In 2024, frontier model providers (Anthropic, OpenAI, DeepSeek, Google) introduced a game-changing architectural feature: <strong>Prompt Caching</strong> (KV-Cache Reuse). When two requests share an identical prompt prefix, the provider does not re-compute attention over those tokens; it loads the pre-computed Key-Value (KV) cache from memory.</p>",
                "<p>Prompt caching offers staggering benefits:</p>",
                "<ul><li><strong>Cost:</strong> Cached input tokens are discounted by 50% to 90%!</li><li><strong>Latency:</strong> Time-to-First-Token drops from 8 seconds to under 800 milliseconds!</li></ul>",
                "<p>However, prompt caching requires strict <strong>Prefix Discipline</strong>. Caching works from the top down. If you change a single character on line 1, the entire cache for the whole prompt is invalidated!</p>",
                "<pre><code># PROMPT CACHING PREFIX STRUCTURE (Must be 100% Static!)\n[SYSTEM PROMPT]             -> 100% Static (Cached! 90% discount!)\n[REPO CONVENTIONS & MAP]    -> 100% Static (Cached!)\n[CORE TOOL DEFINITIONS]     -> 100% Static (Cached!)\n-------------------------------- CACHE BOUNDARY --------------------------------\n[DYNAMIC RETRIEVED FILES]   -> Semi-dynamic (Invalidates cache if changed)\n[CURRENT USER QUERY]        -> Dynamic (Processed fresh on each call)</code></pre>",
                "<div class=\"callout\"><p><strong>Rule of Caching:</strong> Never place dynamic elements (like timestamps, random IDs, or changing git hashes) at the top of your prompt! Keep the static prefix pristine to maximize cache hit rates.</p></div>"
            ],
            "The KV-Cache Reuse Boundary", "Reusing computed attention weights across requests",
            [
                {"title": "Static Prefix (Top)", "lines": ["System prompt, conventions, tools", "100% Cache HIT -> 90% discount, 10x faster"]},
                {"title": "Cache Checkpoint Boundary", "lines": ["Provider checks prefix hash", "Exact match found in GPU RAM"]},
                {"title": "Dynamic Suffix (Bottom)", "lines": ["User query & dynamic diffs", "Only these new tokens are computed"]}
            ],
            "Cache Invalidation Pitfall", "How trivial top-level edits destroy cache reuse",
            [
                {"title": "Timestamp on Line 1", "lines": ["'Current time: 14:22:05'", "Changes every second -> 0% CACHE HIT!"]},
                {"title": "Static Top / Dynamic Bottom", "lines": ["Keep prefix completely frozen", "95%+ CACHE HIT RATE (Massive savings)"]}
            ],
            "Complete the prompt caching sentence",
            "Prompt caching reuses pre-computed {1} states for identical prompt prefixes, requiring static elements to be placed at the {2}.",
            [
                {"answer": "KV-cache", "hint": "Key-Value attention cache in GPU memory", "options": ["KV-cache", "HTML", "git commit"]},
                {"answer": "top", "hint": "Beginning of the prompt", "options": ["top", "bottom", "middle"]}
            ],
            [
                {"q": "What happens to prompt caching if you put a dynamic timestamp at the very beginning of the system prompt?",
                 "a": ["It invalidates the entire cache for all subsequent tokens, causing a 0% cache hit rate and full pricing", "The model runs in reverse", "The prompt is rejected with an HTTP 400 error", "The timestamp is automatically deleted"],
                 "c": 0, "why": "Prompt caching matches prefixes from character zero; any change on line 1 busts the entire cache."},
                {"q": "What is the typical cost discount provided by major LLM APIs for cached prompt tokens?",
                 "a": ["Between 50% and 90% discount compared to uncached input tokens", "Exactly 1%", "Cached tokens are 10x more expensive", "There is no discount"],
                 "c": 0, "why": "Providers offer massive discounts because cached tokens require almost zero GPU compute."},
                {"q": "Where should frequently changing elements (like the user query or active file diff) be placed?",
                 "a": ["At the very end of the prompt, after all static, cached prefixes", "At the very top of line 1", "In a separate repository", "In the file comments"],
                 "c": 0, "why": "Placing dynamic text at the end preserves the large static prefix cache untouched."},
                {"q": "How does prompt caching improve the responsiveness of multi-turn coding agents?",
                 "a": ["It cuts Time-to-First-Token from seconds to sub-second responses, making agent turns feel instantaneous", "It eliminates the need for unit tests", "It generates code without errors", "It automatically merges pull requests"],
                 "c": 0, "why": "Reusing cached attention matrices bypasses expensive pre-fill processing."}
            ],
            "You know how to structure prompts to maximize prompt caching discounts and latency speedups.",
            "Measuring Context Quality and Drift", "Audit context effectiveness with precision, recall, and needle benchmarks."
        ),
        build_lesson(
            8, "measuring-context-quality", "Measuring Context Quality and Drift", "Context Metrics",
            "Evaluating and auditing context pipelines using retrieval precision, context recall, and needle-in-a-haystack benchmarks.",
            "What does 'Context Precision' measure in a retrieval-augmented agent pipeline?",
            ["The proportion of retrieved context chunks that were actually relevant and used in the final code solution", "The font size of the prompt", "The speed of the database query in nanoseconds", "The total count of characters in the prompt"],
            0, "Context precision evaluates whether retrieved tokens contributed useful signal or dead noise.",
            [
                "<p>You cannot improve what you do not measure. In professional AI engineering, context pipelines are not tuned by intuition; they are evaluated using quantitative <strong>Context Metrics</strong>.</p>",
                "<p>Three core metrics govern context quality:</p>",
                "<ul><li><strong>1. Context Precision:</strong> Did we retrieve only relevant files, or did we drag in 80% useless boilerplate? High precision means high signal density.</li><li><strong>2. Context Recall:</strong> Did our retrieval pipeline capture all necessary interfaces, schemas, and invariants needed to solve the task, or did it miss a critical seam?</li><li><strong>3. Needle-in-a-Haystack (NIAH) Resilience:</strong> Can the model successfully locate and apply a subtle constraint embedded deep inside 50k tokens of codebase context?</li></ul>",
                "<pre><code># Automated Context Audit Framework (e.g. Ragas / TruLens):\nTask: \"Implement refund calculation\"\nRetrieved Files: [billing/refunds.py, billing/models.py, marketing/blog.py]\n\nAudit Results:\n- Context Recall: 1.0 (All required billing interfaces retrieved)\n- Context Precision: 0.66 (marketing/blog.py was completely irrelevant noise!)\n- Recommendation: Adjust vector search similarity threshold to filter blog.py</code></pre>",
                "<div class=\"callout\"><p><strong>The Takeaway:</strong> Audit your context pipelines regularly. Pruning irrelevant files from automated retrieval boosts agent accuracy far more than switching model providers!</p></div>"
            ],
            "Context Evaluation Metrics", "Precision, recall, and attention needle testing",
            [
                {"title": "Context Precision", "lines": ["Relevant chunks / Total retrieved chunks", "Filters out distracting noise"]},
                {"title": "Context Recall", "lines": ["Retrieved truths / Necessary truths", "Guarantees no missing seams"]},
                {"title": "Needle Retrieval", "lines": ["Probe model recall across token depths", "Verifies constraint adherence"]}
            ],
            "Continuous Context Improvement", "The feedback loop for context engineering",
            [
                {"title": "1. Measure Failure", "lines": ["Agent hallucinates function", "Audit shows interface was missing"]},
                {"title": "2. Tune Pipeline", "lines": ["Add import graph walking", "Include interface stubs"]},
                {"title": "3. Verify Improvement", "lines": ["Context recall rises to 1.0", "Agent passes on first attempt"]}
            ],
            "Complete the context measurement sentence",
            "Context evaluation measures {1} to ensure all necessary facts are retrieved, and {2} to ensure noise is minimized.",
            [
                {"answer": "recall", "hint": "Capturing all required information", "options": ["recall", "temperature", "latency"]},
                {"answer": "precision", "hint": "Proportion of retrieved info that is relevant", "options": ["precision", "token count", "budget"]}
            ],
            [
                {"q": "What does a Context Recall score of 0.5 indicate in an agent audit?",
                 "a": ["The retrieval system only retrieved half of the necessary dependency interfaces needed to solve the problem", "The agent passed half of the unit tests", "The model context window was half full", "The API bill was cut in half"],
                 "c": 0, "why": "Recall measures the proportion of necessary domain facts successfully delivered into context."},
                {"q": "Why is low Context Precision dangerous even if Context Recall is 1.0?",
                 "a": ["Irrelevant files dilute model attention, increase token costs, and trigger hallucinations from unrelated code", "Low precision causes hard drives to crash", "Low precision is forbidden by Python linters", "Low precision makes the font unreadable"],
                 "c": 0, "why": "High noise dilutes attention and increases latency and cost even if the required facts are present."},
                {"q": "What is a 'Needle in a Haystack' benchmark used for?",
                 "a": ["Testing whether a model can retrieve and follow a specific fact placed at various depths inside a large context window", "Finding needles in agricultural datasets", "Measuring the typing speed of developers", "Testing internet download speeds"],
                 "c": 0, "why": "NIAH evaluates retrieval and attention fidelity across the entire context span."},
                {"q": "What is the most effective way to fix an agent that repeatedly hallucinates nonexistent methods?",
                 "a": ["Improve context recall by ensuring the actual interface and class definitions are included in the prompt", "Increase the model temperature to 1.0", "Tell the agent to try harder in all caps", "Switch to an older language model"],
                 "c": 0, "why": "Grounding the model with the real class definition eliminates the need for it to invent method names."}
            ],
            "You have completed the Context Engineering course.",
            "Next Course: Giving AI Agents the Right Project Context", "Learn how to build convention files, repo maps, and ADRs that guide AI agents."
        )
    ]

    glossary = [
        {"id": "budget", "title": "Budget & Economics", "terms": [
            {"term": "Context Window", "def": "The maximum sequence length of tokens a language model can process across prompt and output in a single call.", "lesson": 1, "tags": ["ai", "context"]},
            {"term": "Token Economics", "def": "The financial, latency, and attention trade-offs governing how tokens are budgeted and utilized.", "lesson": 5, "tags": ["ai", "economics"]},
            {"term": "Signal-to-Noise Ratio", "def": "The proportion of task-critical domain information relative to useless boilerplate in context.", "lesson": 1, "tags": ["ai", "quality"]}
        ]},
        {"id": "attention", "title": "Attention Dynamics", "terms": [
            {"term": "Lost in the Middle", "def": "The empirical tendency of transformer models to recall tokens at the start and end of context much better than the middle.", "lesson": 2, "tags": ["ai", "attention"]},
            {"term": "Sandwich Pattern", "def": "A prompt engineering technique placing core constraints at both the very beginning and very end of long contexts.", "lesson": 2, "tags": ["ai", "patterns"]},
            {"term": "Attention Dilution", "def": "The reduction in relative attention weight assigned to key instructions when context is saturated with noise.", "lesson": 1, "tags": ["ai", "transformers"]}
        ]},
        {"id": "reduction", "title": "Reduction & Caching", "terms": [
            {"term": "AST Pruning", "def": "Extracting public interfaces and types from code while omitting method bodies to save context tokens.", "lesson": 3, "tags": ["context", "tooling"]},
            {"term": "Prompt Caching", "def": "Reusing pre-computed KV-cache states for identical prompt prefixes across API requests to cut cost and latency.", "lesson": 7, "tags": ["ai", "caching"]},
            {"term": "Working Set", "def": "The minimal set of files (target edit, interface contract, and test) needed to solve a specific task.", "lesson": 4, "tags": ["context", "workflow"]}
        ]},
        {"id": "retrieval", "title": "Assembly & Evaluation", "terms": [
            {"term": "Dynamic Context Assembly", "def": "Just-in-time automated retrieval of relevant files, schemas, and diffs based on active task intent.", "lesson": 6, "tags": ["ai", "retrieval"]},
            {"term": "Context Precision", "def": "The proportion of retrieved context tokens that are genuinely relevant and used in task execution.", "lesson": 8, "tags": ["ai", "metrics"]},
            {"term": "Context Recall", "def": "The proportion of necessary domain facts successfully captured by the retrieval pipeline.", "lesson": 8, "tags": ["ai", "metrics"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "The Sandwich Prompting Pattern",
            "label": "Overcoming attention drop-off",
            "code": "[TOP]: Primary goal, roles, and non-negotiable invariants.\n[MIDDLE]: Retrieved documentation, file snippets, and schemas.\n[BOTTOM]: 'Remember: Return only valid JSON. Do not modify User.py.'",
            "lessonN": 2, "lessonSlug": "lost-in-the-middle", "lessonTitle": "The Lost in the Middle Phenomenon"
        },
        {
            "title": "AST Skeleton Pruning",
            "label": "90% token reduction pattern",
            "code": "# Replace 800 lines of implementation with pure contract:\nclass OrderService:\n    def create_order(self, customer_id: str, items: list[Item]) -> Order:\n        \"\"\"Create order, apply tax, and record in DB.\"\"\"\n        ...",
            "lessonN": 3, "lessonSlug": "pruning-summarization-compaction", "lessonTitle": "Context Pruning, Summarization, and Compaction"
        },
        {
            "title": "Prompt Caching Prefix Structure",
            "label": "Unlocking 90% API discounts",
            "code": "# Keep this top prefix 100% frozen (NO TIMESTAMPS):\n# 1. System Prompt\n# 2. Project Conventions & Architecture Rules\n# 3. Tool Definitions\n# --- CACHE CHECKPOINT ---\n# Dynamic Query / Diff at the bottom",
            "lessonN": 7, "lessonSlug": "prompt-caching-prefix-optimization", "lessonTitle": "Prompt Caching and Prefix Optimization"
        },
        {
            "title": "Lean Working Set Rule of Three",
            "label": "Optimal file curation",
            "code": "# 1. Target Edit File (src/billing/service.py)\n# 2. Interface Contract (src/billing/schemas.py)\n# 3. Verification Harness (tests/test_billing.py)\n# Exclude all unrelated files!",
            "lessonN": 4, "lessonSlug": "selecting-the-right-files", "lessonTitle": "Selecting the Right Files for the Task"
        }
    ]

    course_data = {
        "id": "context-engineering",
        "title": "Context Engineering",
        "num": 53,
        "emoji": "🧠",
        "desc": "Choosing what the model sees: files, conventions, examples and constraints — and what to leave out.",
        "topics": ["Context Budget", "Lost in the Middle", "AST Pruning", "Working Sets", "Token Economics", "Dynamic Assembly", "Prompt Caching", "Context Metrics"],
        "mission": "# Mission — Context Engineering\n\nMaster the discipline of curating high-density token contexts. Treat context as a scarce budget, overcome attention degradation with the Sandwich Pattern, prune code with AST skeletons, assemble working sets dynamically, and leverage prompt caching.",
        "notes": "# Notes — Context Engineering\n\nMore context is not better context. Precision, high signal-to-noise ratio, and prompt caching deliver reliable, cost-effective agent performance.",
        "resources": "# Resources — Context Engineering\n\n- Liu et al., *Lost in the Middle: How Language Models Use Long Contexts*\n- Anthropic, *Prompt Caching Documentation*\n- Greg Kamradt, *Needle In A Haystack Pressure Testing*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

if __name__ == "__main__":
    make_course_53()

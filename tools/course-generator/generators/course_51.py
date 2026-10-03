import os
import sys
sys.path.append(os.path.dirname(__file__))
from helpers import build_lesson, save_course

def make_course_51():
    lessons = [
        build_lesson(
            1, "from-autocomplete-to-agent", "From Autocomplete to Autonomous Agent", "Agent Evolution",
            "The evolution of AI coding tools: from inline ghost-text autocomplete to reasoning agents with tools.",
            "What distinguishes an AI coding agent from an inline code completion tool like standard Copilot?",
            ["An agent runs in an autonomous loop: inspecting the repo, editing multiple files, running terminal commands, and verifying results", "An agent is written in C++ while completion is written in Python", "An agent cannot read code files", "An agent only works when the computer is offline"],
            0, "Agents have agency: they can plan, execute tools, observe outputs, and iterate until the task is complete.",
            [
                "<p>The first generation of AI coding assistants operated as smart autocomplete: as you typed in your editor, a model predicted the next line or block of ghost text. While useful for boilerplate, autocomplete lacked any broader situational awareness or agency.</p>",
                "<p>An <strong>AI coding agent</strong> represents a fundamental paradigm shift. Instead of waiting for you to type, an agent is given a high-level goal (e.g. <em>'Add a rate-limiter middleware to the API and verify it with tests'</em>). The agent then acts autonomously within an execution loop:</p>",
                "<ul><li><strong>Read Context:</strong> Grep the codebase, read relevant files, and examine directory structure.</li><li><strong>Formulate a Plan:</strong> Break the goal into sequential subtasks.</li><li><strong>Execute Tools:</strong> Edit multiple files, install packages, and execute test commands in a shell.</li><li><strong>Observe and Correct:</strong> Read compiler diagnostics and test failure traces, adjusting code until tests pass.</li></ul>",
                "<pre><code># The Autonomous Agent Lifecycle\nGoal: \"Fix the authentication token expiry bug\"\n1. Agent runs grep_search(query='TOKEN_EXPIRY')\n2. Agent reads auth/service.py lines 40-80\n3. Agent edits auth/service.py to add timedelta calculation\n4. Agent executes pytest tests/test_auth.py in terminal\n5. Agent observes green test output and reports completion!</code></pre>",
                "<div class=\"callout\"><p><strong>Mental Model:</strong> Think of an agent not as an oracle that knows all answers, but as a tireless junior developer who can read your files, execute tools, and iterate on compiler errors.</p></div>"
            ],
            "Evolution of AI Assistants", "From passive completion to active tool-driven agency",
            [
                {"title": "Ghost Text Autocomplete", "lines": ["Single-line suggestions", "Triggered by typing", "No tool access"]},
                {"title": "Chat Assistants", "lines": ["Multi-turn Q&A in sidebar", "User copy-pastes code", "No direct file edits"]},
                {"title": "Autonomous Agents", "lines": ["Multi-file read & write", "Terminal execution loop", "Self-correcting on error"]}
            ],
            "The Agent Feedback Loop", "How tools bridge reasoning and real code",
            [
                {"title": "Reasoning (LLM)", "lines": ["Analyze prompt & state", "Decide next tool call"]},
                {"title": "Environment (OS/IDE)", "lines": ["File system, Terminal, Git", "Executes tool and captures stdout"]},
                {"title": "Observation", "lines": ["Return exit codes & diffs", "Feeds back to LLM context"]}
            ],
            "Complete the agent definition sentence",
            "Unlike passive autocomplete, an AI coding agent operates within an autonomous loop using {1} to edit files and {2} to verify changes.",
            [
                {"answer": "tools", "hint": "APIs for interacting with the environment", "options": ["tools", "comments", "syntax"]},
                {"answer": "terminals", "hint": "Command line execution environments", "options": ["terminals", "browsers", "chatbots"]}
            ],
            [
                {"q": "What core capability transforms a language model into an AI coding agent?", "a": ["Tool use: the ability to read files, write edits, and execute terminal commands in an iterative loop", "A larger context window alone", "Fine-tuning on Python documentation", "Translating code into natural language"], "c": 0, "why": "Tool use provides the bridge between language reasoning and concrete environmental action."},
                {"q": "Why is an agent able to recover from its own syntax mistakes?", "a": ["It runs tests or linters, observes the error output in its context, and issues an edit to fix the error", "The compiler fixes syntax automatically", "Language models never generate syntax errors", "The user types the fix in the background"], "c": 0, "why": "Observing execution errors in context enables the agent to formulate corrective actions."},
                {"q": "What is the primary role of the human engineer when working with an AI coding agent?", "a": ["Providing precise specifications, architectural guardrails, and reviewing generated diffs", "Typing every line of code by hand", "Disabling terminal access", "Manually compiling Python files"], "c": 0, "why": "The human engineer acts as the architect and reviewer, setting goals and validating results."},
                {"q": "What happens if an agent is not given access to a terminal or test runner?", "a": ["It cannot verify its own code changes, relying entirely on probabilistic generation without validation", "It runs 10x faster", "It cannot edit files", "It loses access to its memory"], "c": 0, "why": "Without execution tools, an agent cannot observe whether its code actually compiles or passes tests."}
            ],
            "You understand the architectural evolution from autocomplete to autonomous coding agents.",
            "The Core Agent Loop: Read, Plan, Act, Observe", "Deconstruct the universal four-stage agent execution loop."
        ),
        build_lesson(
            2, "core-agent-loop", "The Core Agent Loop: Read, Plan, Act, Observe", "Agent Loop",
            "The four foundational states of every coding agent: Read state, Plan actions, Act with tools, and Observe results.",
            "What happens if an agent skips the 'Observe' step after executing a file edit?",
            ["It cannot detect whether the edit succeeded, broke syntax, or introduced unintended formatting errors", "The operating system refuses to save the file", "The file is permanently locked", "The LLM context window doubles in size"],
            0, "Without observing tool results, the agent acts blindly without feedback from the environment.",
            [
                "<p>Every modern coding agent (GitHub Copilot Agent mode, Claude Code, Cursor, Codex Agent) is built on a variant of the classic <strong>ReAct (Reason + Act) loop</strong>. In a coding environment, this loop takes a concrete four-phase shape:</p>",
                "<ul><li><strong>1. READ:</strong> The agent inspects its environment: reading the prompt, exploring files, searching symbols, and loading memory.</li><li><strong>2. PLAN:</strong> The agent reasons over its observations, formulating an actionable next step or breaking down a larger task.</li><li><strong>3. ACT:</strong> The agent issues a structured tool call: replace_string_in_file, create_file, or run_in_terminal.</li><li><strong>4. OBSERVE:</strong> The environment executes the tool and returns the result (stdout, exit code, diff, or error message) directly into the agent's context.</li></ul>",
                "<pre><code># The ReAct Iteration Loop in JSON\n{\n  \"thought\": \"I need to check why test_checkout fails. I will run pytest.\",\n  \"tool_call\": {\n    \"name\": \"run_in_terminal\",\n    \"arguments\": {\"command\": \"pytest tests/test_checkout.py\"}\n  }\n}\n# Environment returns observation:\n# stdout: \"FAILED: KeyError: 'discount_code' at line 45\"\n# Agent next thought: \"The dictionary is missing 'discount_code'. I will edit line 45.\"</code></pre>",
                "<p>This cycle repeats until the agent satisfies all criteria or determines it needs human clarification.</p>",
                "<div class=\"callout\"><p><strong>Key Insight:</strong> The intelligence of an agent is not just the model weights; it is the quality of the loop that connects thought to action and observation.</p></div>"
            ],
            "The Four-Phase Agent Loop", "Read, Plan, Act, Observe cycle",
            [
                {"title": "1. Read", "lines": ["Inspect files & repo state", "Gather context & symptoms"]},
                {"title": "2. Plan", "lines": ["Synthesize information", "Formulate next concrete action"]},
                {"title": "3. Act", "lines": ["Invoke tool call", "Apply edit or run command"]},
                {"title": "4. Observe", "lines": ["Read tool output & diff", "Confirm success or pivot"]}
            ],
            "Handling a Failed Observation", "The agent self-correction branch",
            [
                {"title": "Action: Apply Edit", "lines": ["Replace string in file", "Typo in replacement"]},
                {"title": "Observation: Error", "lines": ["Linter reports SyntaxError", "Line 82: unexpected indent"]},
                {"title": "Recovery Loop", "lines": ["Re-read line 82", "Apply corrected indentation"]}
            ],
            "Fill in the four agent loop phases",
            "The agent loop consists of: {1} context, {2} next steps, {3} using tools, and {4} execution outputs.",
            [
                {"answer": "read", "hint": "Gathering repository state", "options": ["read", "write", "lock"]},
                {"answer": "plan", "hint": "Formulating next action", "options": ["plan", "push", "commit"]},
                {"answer": "act", "hint": "Executing tool calls", "options": ["act", "sleep", "halt"]},
                {"answer": "observe", "hint": "Evaluating tool results", "options": ["observe", "compile", "cache"]}
            ],
            [
                {"q": "What does ReAct stand for in AI agent research?", "a": ["Reasoning and Acting: interleaving chain-of-thought reasoning with environmental tool actions", "React.js frontend framework", "Reactive programming with streams", "Real-time Action controller"], "c": 0, "why": "ReAct combines verbal reasoning traces with concrete actions and environmental observations."},
                {"q": "Why is the 'Plan' step critical before taking an action?", "a": ["It prevents the agent from thrashing with random trial-and-error edits and aligns actions with goals", "It allows the CPU to enter power-saving mode", "It encrypts the conversation history", "It prevents the model from generating text"], "c": 0, "why": "Deliberate planning helps the model decompose complex goals into coherent sequential steps."},
                {"q": "What constitutes an 'Observation' in a coding agent?", "a": ["The stdout, stderr, exit code, or file diff returned by the IDE or operating system after a tool executes", "A comment written by another developer", "A screenshot of the desktop", "The user reading the screen"], "c": 0, "why": "Observations are the environmental feedback returned to the model following an action."},
                {"q": "When does the agent decide to terminate its loop?", "a": ["When its planning step determines that all acceptance criteria are met, or when it requires user input", "When the computer is shut down", "After exactly three iterations", "When the context window is completely full"], "c": 0, "why": "Agents evaluate goal completion based on tests passing and criteria fulfillment."}
            ],
            "You understand the mechanics of the Read-Plan-Act-Observe agent loop.",
            "Reading the Repository: File Tree, Grep, Semantic Search", "How agents explore and navigate unfamiliar codebases efficiently."
        ),
        build_lesson(
            3, "reading-the-repository", "Reading the Repository: File Tree, Grep, Semantic Search", "Code Navigation",
            "How coding agents navigate large codebases: balancing file trees, exact text grep, and semantic vector search.",
            "Why is feeding an entire 100,000-line repository into an agent's prompt impractical?",
            ["It blows through context limits, costs massive token fees, and degrades reasoning with irrelevant noise", "Language models refuse to read files with more than 10 lines", "Operating systems block files larger than 1MB", "Python files cannot be converted to tokens"],
            0, "Context windows are finite budgets; indiscriminate bulk loading destroys signal-to-noise ratio.",
            [
                "<p>A real software repository contains hundreds or thousands of files. An agent cannot read the entire codebase into its context window at once. Just like an expert human engineer entering a new codebase, the agent must <strong>navigate strategically</strong>.</p>",
                "<p>Effective agents use a three-tier retrieval hierarchy:</p>",
                "<ul><li><strong>1. Structural Orientation (File Tree & Directory Listing):</strong> Inspecting directory structure (list_dir, file_search) to locate architecture boundaries, entry points, and module layouts.</li><li><strong>2. Exact Lexical Search (Grep):</strong> Finding exact function names, class definitions, error constants, or import statements across files. Grep is fast, deterministic, and accurate.</li><li><strong>3. Semantic Search (Vector Embeddings):</strong> Finding conceptual functionality when the exact symbol name is unknown (e.g. <em>'where is user billing calculated?'</em>).</li></ul>",
                "<pre><code># Strategic Code Exploration Flow:\n# 1. Orient: list_dir('src/') -> discovers [auth/, billing/, api/]\n# 2. Pinpoint: grep_search('class TokenManager') -> finds src/auth/tokens.py:42\n# 3. Read Slice: read_file('src/auth/tokens.py', startLine=40, endLine=80)\n# Total tokens consumed: ~400 tokens (vs 150,000 for whole repo!)</code></pre>",
                "<div class=\"callout\"><p><strong>Targeted Reading:</strong> Always read meaningful slices of code (40-100 lines) around target symbols rather than single lines or entire 5,000-line files.</p></div>"
            ],
            "Three-Tier Code Retrieval", "Progressive exploration from macro to micro",
            [
                {"title": "1. Macro Structure", "lines": ["Directory tree & file search", "Discovers module layout"]},
                {"title": "2. Lexical Pinpointing", "lines": ["Exact regex / text grep", "Finds symbols & call sites"]},
                {"title": "3. Targeted Reading", "lines": ["Read specific line ranges", "Extracts pure signal"]}
            ],
            "Token Efficiency Comparison", "Targeted retrieval vs bulk dump",
            [
                {"title": "Bulk Dump (Wasteful)", "lines": ["Read all 80 files", "85,000 tokens", "Model confused by noise"]},
                {"title": "Targeted Grep (Precise)", "lines": ["Grep + Read 2 files", "1,200 tokens", "Model razor-focused"]}
            ],
            "Complete the repository navigation sentence",
            "Agents explore codebases by discovering structure with {1}, pinpointing symbols with {2}, and reading targeted line slices.",
            [
                {"answer": "directory listings", "hint": "Folder structure tools like list_dir", "options": ["directory listings", "terminal logs", "git blame"]},
                {"answer": "grep search", "hint": "Fast text and regex scanning", "options": ["grep search", "compilers", "linters"]}
            ],
            [
                {"q": "What is the primary strength of grep search for an agent navigating a codebase?", "a": ["It quickly locates exact symbol names, imports, and error strings across thousands of files without loading them into context", "It executes Python code in parallel", "It automatically fixes syntax errors", "It generates unit tests"], "c": 0, "why": "Grep performs lightning-fast exact text matching without token overhead."},
                {"q": "When is semantic vector search superior to grep search?", "a": ["When you are searching for a concept or behavior but do not know the exact symbol or variable name used in code", "When searching for an exact variable name like 'user_id'", "When finding syntax errors in CSS", "When running pytest"], "c": 0, "why": "Semantic search matches meaning and concepts rather than exact literal character strings."},
                {"q": "Why is reading specific line ranges better than reading entire massive files?", "a": ["It preserves the context window budget and keeps the model focused on relevant logic without distraction", "Text editors crash when opening whole files", "Python files can only be read in 50-line chunks", "It reduces network bandwidth by 99%"], "c": 0, "why": "Reading focused slices maximizes signal-to-noise ratio in the model context window."},
                {"q": "What is the first tool call an agent should make when exploring an unfamiliar project?", "a": ["Examine directory structure or README/manifest files to understand overall project layout", "Edit the main configuration file", "Delete all test files", "Run git commit"], "c": 0, "why": "Understanding top-level architecture and directories guides all subsequent investigations."}
            ],
            "You know how AI coding agents navigate large codebases with precision.",
            "Tool Calling: Editing Files and Running Terminals", "How agents safely modify code and invoke shell commands."
        ),
        build_lesson(
            4, "tool-calling-edits-terminals", "Tool Calling: Editing Files and Running Terminals", "Tool Execution",
            "Examining how agents apply precise file edits (replace string vs AST rewrites) and manage terminal sessions.",
            "Why is exact string replacement (with context lines) preferred over rewriting entire files during agent edits?",
            ["Full-file rewrites burn massive tokens and frequently introduce accidental truncation or missing code markers", "Exact string replacement is forbidden in JavaScript", "Operating systems cannot overwrite existing files", "Rewriting files changes git ownership"],
            0, "Full-file rewrites risk truncating code with '...existing code...' and waste huge token budgets.",
            [
                "<p>To do real work, an agent must reach beyond text generation into the filesystem and the operating system. This is enabled by <strong>Tool Calling</strong> (also known as Function Calling).</p>",
                "<p>When modifying existing code, agents face a choice of editing strategies:</p>",
                "<ul><li><strong>Full File Overwrite:</strong> The agent generates the entire 800-line file from scratch. <em>Dangerous!</em> Models frequently hallucinate missing sections, omit methods with comments like `// ...rest of code unchanged...`, and burn thousands of tokens.</li><li><strong>Exact String Replacement (replace_string_in_file):</strong> The agent specifies the exact target string to replace, along with 3-5 lines of surrounding context. Safe, precise, and minimal token usage.</li><li><strong>Terminal Commands (run_in_terminal):</strong> Executing build scripts, running unit tests, installing packages, or inspecting git diffs.</li></ul>",
                "<pre><code># Anatomy of a Safe String Replacement Tool Call:\n{\n  \"filePath\": \"/workspace/src/auth.py\",\n  \"oldString\": \"    if not token:\\n        return False\\n    return verify(token)\",\n  \"newString\": \"    if not token:\\n        raise AuthenticationRequired()\\n    return verify(token)\"\n}</code></pre>",
                "<p>Notice that `oldString` contains sufficient surrounding context lines to ensure the match is 100% unique in the file.</p>",
                "<div class=\"callout\"><p><strong>Safety Seam:</strong> Never allow an agent to run destructive commands like rm -rf or push directly to production without human confirmation gates.</p></div>"
            ],
            "File Editing Strategies", "Comparing full rewrites vs targeted replacements",
            [
                {"title": "Full File Overwrite", "lines": ["Sends all 800 lines", "Risk of lazy truncation", "High token cost"]},
                {"title": "Targeted Replacement", "lines": ["Sends oldString & newString", "Context lines ensure uniqueness", "Low token cost, zero truncation"]}
            ],
            "Terminal Execution Safety", "Running one-shot sync commands safely",
            [
                {"title": "Command Request", "lines": ["pytest tests/test_auth.py", "Sync execution"]},
                {"title": "Terminal Capture", "lines": ["Capture stdout & exit code", "Truncate if > 20KB to temp file"]},
                {"title": "Tool Result", "lines": ["Returns cleanly to agent", "Agent inspects results"]}
            ],
            "Complete the tool calling sentence",
            "Agents use targeted {1} with context lines to safely modify code without risking accidental code {2}.",
            [
                {"answer": "string replacement", "hint": "Precise substring substitution tool", "options": ["string replacement", "file deletion", "git reset"]},
                {"answer": "truncation", "hint": "Dropping code with comments like ...rest of code...", "options": ["truncation", "compilation", "formatting"]}
            ],
            [
                {"q": "Why must 'oldString' in replace_string_in_file include 3-5 lines of context?", "a": ["To guarantee that the target replacement location is uniquely identified within the file", "To make the file size larger on disk", "Because Python syntax requires 5-line blocks", "To satisfy git commit message rules"], "c": 0, "why": "Context lines eliminate ambiguity if identical function names or variable patterns exist elsewhere in the file."},
                {"q": "What is the danger of using 'full-file rewrite' tools on large legacy files?", "a": ["Models often lazily emit comments like '// ... existing code ...', deleting large chunks of working functionality", "Full-file rewrites disable git version control", "Files become read-only", "The CPU fan speeds up"], "c": 0, "why": "Models frequently summarize or omit unchanged middle sections when regenerating large files."},
                {"q": "How does an agent know whether a terminal command succeeded?", "a": ["By inspecting the numeric process exit code (0 for success, non-zero for failure) and stdout/stderr output", "By asking the user in chat", "By waiting 5 minutes", "By checking the system clock"], "c": 0, "why": "Standard POSIX process exit codes provide unambiguous verification of command success."},
                {"q": "Why should interactive commands (like waiting for password prompts) be handled with care in agent terminals?", "a": ["Terminal commands run without a human TTY; interactive prompts can hang indefinitely without dedicated input handlers", "Passwords are automatically deleted by the shell", "Interactive commands overheat the CPU", "Shells cannot accept input"], "c": 0, "why": "Non-interactive agent terminal runners hang if a command blocks waiting for stdin."}
            ],
            "You understand how agents use file editing and terminal execution tools safely.",
            "Working Memory vs Conversation History", "Understand how agents manage scratchpads, persistent memory, and context."
        ),
        build_lesson(
            5, "working-memory-vs-history", "Working Memory vs Conversation History", "Agent Memory",
            "Managing agent memory tiers: transient chat history, scratchpad working memory, and persistent project memory files.",
            "Why is relying solely on conversation history insufficient for complex, multi-step engineering tasks?",
            ["As conversations grow long, history gets truncated or summarized, losing critical architectural decisions and facts", "Conversation history is deleted after 5 messages", "Chat history cannot store code snippets", "Language models forget words older than 2 minutes"],
            0, "Conversation history is ephemeral and subject to context limits; persistent memory files survive compaction.",
            [
                "<p>A common failure mode in AI coding agents is <strong>context amnesia</strong>. As an agent works through a 20-step refactoring, the conversation history grows to tens of thousands of tokens. Eventually, the model context window fills up, triggering summarization or eviction. The agent forgets the initial architectural rules or previous debugging findings!</p>",
                "<p>Professional agent architectures solve this using <strong>Three-Tier Memory</strong>:</p>",
                "<ul><li><strong>1. Ephemeral Conversation History:</strong> The back-and-forth messages of the current session. Fast, immediate, but transient and easily evicted.</li><li><strong>2. Working Memory (Scratchpad / Todo List):</strong> A structured in-session checklist (like manage_todo_list) where the agent tracks which subtasks are completed and which is currently in-progress.</li><li><strong>3. Persistent Repository Memory (/memories/repo/ or Markdown files):</strong> Notes committed to the repository that survive across conversations—documenting project conventions, verified build commands, and architectural invariants.</li></ul>",
                "<pre><code># The Memory Hierarchy\nTier 1: Conversation Turns   -> Ephemeral (evicted after N turns)\nTier 2: Active Todo List     -> Dynamic working state (in-progress, done)\nTier 3: Repo Memory Files    -> Persistent files (conventions.md, adr-001.md)</code></pre>",
                "<div class=\"callout\"><p><strong>Best Practice:</strong> When an agent discovers an unexpected quirk (e.g. <em>'Tests must run with pytest -m unit'</em>), record it into a persistent memory file so future agent sessions never repeat the discovery work.</p></div>"
            ],
            "Three Tiers of Agent Memory", "Transient vs working vs persistent storage",
            [
                {"title": "1. Chat History", "lines": ["Immediate dialog turns", "Subject to context eviction"]},
                {"title": "2. Working Todo List", "lines": ["Dynamic task progress", "Prevents skipped steps"]},
                {"title": "3. Persistent Files", "lines": ["Repo memory & conventions", "Survives across all sessions"]}
            ],
            "Context Eviction Protection", "How persistent memory guards against amnesia",
            [
                {"title": "Context Compaction", "lines": ["History hits 100k tokens", "Early messages summarized"]},
                {"title": "Memory Files Intact", "lines": ["Persistent files on disk", "Read fresh on demand"]},
                {"title": "Result", "lines": ["Zero knowledge loss", "Work continues seamlessly"]}
            ],
            "Fill in the agent memory tiers",
            "While conversation history is {1} and easily evicted, persistent repository notes stored on {2} survive across sessions.",
            [
                {"answer": "ephemeral", "hint": "Transient and short-lived", "options": ["ephemeral", "immutable", "compiled"]},
                {"answer": "disk", "hint": "Physical filesystem storage", "options": ["disk", "RAM", "registers"]}
            ],
            [
                {"q": "What problem does an active todo list (working memory) solve for an agent?", "a": ["It prevents the agent from losing track of multi-step plans and skipping critical intermediate verification steps", "It makes the model generate code in French", "It speeds up Python compilation", "It eliminates the need for unit tests"], "c": 0, "why": "Structured todo tracking anchors agent focus during complex multi-phase tasks."},
                {"q": "Where should project-specific architectural rules and build quirks be stored for an agent?", "a": ["In repository documentation or persistent memory files like conventions.md or copilot-instructions.md", "In the user's browser history", "Only in the initial chat prompt message", "In temporary operating system caches"], "c": 0, "why": "Persistent files in the workspace ensure all agent sessions adhere to verified project facts."},
                {"q": "What happens when an agent conversation exceeds the model's context window limit?", "a": ["Earlier messages are truncated or summarized, potentially losing initial constraints or nuances", "The computer reboots", "The agent charges double billing rates", "The repository is reverted to git HEAD"], "c": 0, "why": "Context limits force eviction or lossy summarization of older dialogue turns."},
                {"q": "Why is recording lessons learned into memory files considered a compounding investment?", "a": ["Subsequent agent sessions read the notes immediately, avoiding repeating identical debugging mistakes", "Memory files increase hard drive resale value", "Memory files replace software documentation", "Memory files speed up CPU clock speed"], "c": 0, "why": "Documented lessons preserve institutional knowledge across all future automated sessions."}
            ],
            "You understand the memory hierarchy that keeps AI agents coherent across long tasks.",
            "Context Window Exhaustion and Compaction", "Learn how context degradation occurs and how agents survive long sessions."
        ),
        build_lesson(
            6, "context-exhaustion-and-compaction", "Context Window Exhaustion and Compaction", "Context Budget",
            "Managing context degradation, token limits, conversation truncation, and strategic summarization.",
            "What is 'context rot' or attention degradation in long agent sessions?",
            ["As the context window fills with thousands of lines of terminal logs and diffs, the model's ability to recall subtle initial instructions drops", "The hard drive sector where context is stored rots physically", "The Python interpreter leaks memory during long sessions", "The internet router drops packets"],
            0, "Massive token noise dilutes attention, causing the model to lose track of initial constraints.",
            [
                "<p>Even with massive context windows (128k, 200k, 1M tokens), more context is not always better. Research on <strong>attention degradation</strong> demonstrates that language models perform best when their context window contains a high concentration of relevant signal.</p>",
                "<p>When an agent executes 30 terminal commands, each returning 500 lines of test output, the context becomes flooded with noisy logs. This leads to two critical problems:</p>",
                "<ul><li><strong>Lost in the Middle:</strong> Important constraints stated at the beginning of the prompt get drowned out by recent terminal spam.</li><li><strong>Context Exhaustion:</strong> Approaching the hard token limit forces aggressive truncation, cutting off early decisions.</li></ul>",
                "<p>Sophisticated agent architectures employ <strong>Context Compaction</strong>:</p>",
                "<pre><code># The Compaction Transformation\n# BEFORE: 45 raw terminal outputs (42,000 tokens of test traces)\n# AFTER: Structured summary checkpoint (600 tokens):\n# \"Session checkpoint: Fixed auth tokens, updated User schema.\n#  Current status: 14/15 tests passing. Failing test: test_billing_invoice()\"</code></pre>",
                "<p>Compaction replaces hundreds of turns of trial-and-error with an authoritative checkpoint, resetting the context budget while preserving essential progress.</p>",
                "<div class=\"callout\"><p><strong>Practical Tip:</strong> When working with coding agents on big tasks, don't let one conversation run for 100 turns. Start a fresh session with a clear summary prompt after completing each major milestone!</p></div>"
            ],
            "Context Degradation Curve", "Attention dilution as context length increases",
            [
                {"title": "Low Token Volume (10k)", "lines": ["High attention focus", "Follows subtle instructions perfectly"]},
                {"title": "Moderate Volume (50k)", "lines": ["Good performance", "Occasional misses on edge constraints"]},
                {"title": "Saturated Volume (120k+)", "lines": ["High distraction from terminal noise", "Prone to loops and amnesia"]}
            ],
            "Compaction Checkpoint Flow", "Summarizing history to reclaim budget",
            [
                {"title": "1. Saturated Context", "lines": ["80k tokens of logs & diffs", "Risk of budget exhaustion"]},
                {"title": "2. Generate Checkpoint", "lines": ["Summarize completed work", "Capture remaining blockers"]},
                {"title": "3. Compact History", "lines": ["Replace history with checkpoint", "Reclaim 95% of token budget"]}
            ],
            "Complete the context management sentence",
            "To prevent attention degradation and context exhaustion, long agent sessions use {1} to replace verbose logs with concise {2}.",
            [
                {"answer": "compaction", "hint": "Compressing history into summaries", "options": ["compaction", "encryption", "compilation"]},
                {"answer": "checkpoints", "hint": "Milestone summaries of state", "options": ["checkpoints", "tokens", "branches"]}
            ],
            [
                {"q": "What causes 'attention degradation' in large context windows?", "a": ["Excessive noisy text (like verbose test logs and diffs) diluting the model's focus on critical constraints", "The model's weights changing dynamically", "CPU thermal throttling", "Exceeding the speed of light in optical cables"], "c": 0, "why": "Attention mechanisms must distribute probability weights; excessive noise weakens attention on key instructions."},
                {"q": "How does context compaction benefit a multi-step coding task?", "a": ["It frees up token capacity while preserving the distilled record of decisions, completed tasks, and current blockers", "It makes the model run without internet", "It deletes all git branches", "It prevents syntax errors permanently"], "c": 0, "why": "Compaction distills hundreds of noisy turns into a compact, actionable state summary."},
                {"q": "What is the 'Lost in the Middle' phenomenon?", "a": ["The tendency of LLMs to recall information at the beginning and end of long contexts much better than information in the middle", "A bug in git merge drivers", "Losing internet connection during inference", "Forgetting to close quotation marks in code"], "c": 0, "why": "Attention distributions naturally peak at prompt beginnings and recent turns, weakening retrieval in the middle."},
                {"q": "When is the ideal time for a human engineer to start a fresh agent session?", "a": ["After completing a major logical milestone or PR component, passing the distilled checkpoint into the new prompt", "After every single tool call", "Only once per month", "Never; one session should run forever"], "c": 0, "why": "Fresh sessions with clean checkpoints provide the highest intelligence and lowest latency."}
            ],
            "You know how to manage context exhaustion and compaction during agent tasks.",
            "Error Recovery Loops: When the Agent Breaks the Build", "How agents diagnose failures, avoid thrashing, and self-correct."
        ),
        build_lesson(
            7, "error-recovery-loops", "Error Recovery Loops: When the Agent Breaks the Build", "Error Recovery",
            "How agents diagnose failures, avoid thrashing in infinite loops, and systematically recover from broken builds.",
            "What is 'agent thrashing' during error recovery?",
            ["The agent repeatedly applies blind, contradictory edits in a loop without diagnosing the actual root cause", "The agent's computer hard drive spinning too fast", "A high volume of git commits on GitHub", "The test runner executing tests in parallel"],
            0, "Thrashing occurs when an agent makes guessing edits that break other parts of the system in an endless cycle.",
            [
                "<p>Coding agents do not write perfect code on the first attempt. What makes an agent genuinely powerful is its ability to <strong>recover from errors</strong>. When a compiler fails, a linter complains, or a unit test fails, the agent enters an error recovery loop.</p>",
                "<p>However, poorly architected agents often suffer from <strong>Thrashing</strong> (or Flailing):</p>",
                "<ul><li>Turn 1: Fix test A, but accidentally break test B.</li><li>Turn 2: Revert fix to satisfy test B, breaking test A again!</li><li>Turn 3: Randomly change variable names in hope that it compiles.</li></ul>",
                "<p>Disciplined error recovery follows a structured three-step protocol:</p>",
                "<pre><code># The Systematic Error Recovery Protocol\n1. DIAGNOSE: Read the full traceback line number, exception type, and message.\n2. LOCATE: Inspect the exact source lines and recent diffs that triggered the failure.\n3. HYPOTHESIZE & VERIFY: Formulate a single clear reason for the failure. Make one targeted edit, then re-run the exact failing test.</code></pre>",
                "<div class=\"callout\"><p><strong>The 3-Strike Rule:</strong> If an agent fails to fix a test failure after 3 iterations, it should stop immediately and ask the human user for guidance rather than continuing to thrash.</p></div>"
            ],
            "The Thrashing Anti-Pattern", "Blind guessing vs systematic diagnosis",
            [
                {"title": "Thrashing Cycle", "lines": ["Blind edit -> Test fails", "Contradictory edit -> New error", "Repeat 10 times (Chaos)"]},
                {"title": "Systematic Recovery", "lines": ["Read traceback & line 42", "Identify missing parameter", "Targeted fix -> Verify green"]}
            ],
            "The 3-Strike Circuit Breaker", "Halting automated loops before damage occurs",
            [
                {"title": "Attempt 1", "lines": ["Inspect trace & edit", "Tests fail"]},
                {"title": "Attempt 2", "lines": ["Refine hypothesis", "Tests fail"]},
                {"title": "Attempt 3 (Halt)", "lines": ["Trigger circuit breaker", "Ask user for clarifying insight"]}
            ],
            "Complete the error recovery sentence",
            "To prevent agent thrashing, systems enforce circuit breakers like the {1} rule to halt automated trial-and-error loops and request {2} guidance.",
            [
                {"answer": "3-strike", "hint": "Limiting failed repair attempts", "options": ["3-strike", "infinite", "random"]},
                {"answer": "human", "hint": "Developer intervention", "options": ["human", "compiler", "hardware"]}
            ],
            [
                {"q": "What is the primary indicator that an AI agent is caught in a thrashing loop?", "a": ["It repeatedly modifies the same code back and forth or introduces circular test failures across consecutive turns", "It uses too few tokens", "It completes the task in 5 seconds", "It asks for permission before running tests"], "c": 0, "why": "Circular modifications and alternating test failures indicate the agent lacks a coherent root cause hypothesis."},
                {"q": "What should an agent inspect first when a terminal test command fails?", "a": ["The specific traceback, including file paths, line numbers, and the exact exception message", "The user's git commit history from last year", "The README file", "The operating system kernel version"], "c": 0, "why": "Tracebacks provide the exact location and causal reason for software exceptions."},
                {"q": "Why is a circuit breaker essential in automated agentic workflows?", "a": ["It stops runaway token consumption and prevents the agent from corrupting files with desperate guessing edits", "It reboots the computer when errors occur", "It automatically publishes code to production", "It encrypts the repository"], "c": 0, "why": "Circuit breakers bound failures and return control to humans when automated repair fails."},
                {"q": "How does git provide an immediate safety net during agent error recovery?", "a": ["The human or agent can run 'git checkout' or 'git stash' to discard broken edits and return to a clean baseline", "Git deletes the repository automatically", "Git prevents compiler errors", "Git rewrites Python into Rust"], "c": 0, "why": "Git version control allows instantaneous zero-cost reverts when an agent's recovery path goes astray."}
            ],
            "You know how agents execute disciplined error recovery and avoid thrashing loops.",
            "Human-in-the-Loop: Guiding and Steering the Agent", "Master the collaboration dynamics between engineer and agent."
        ),
        build_lesson(
            8, "human-in-the-loop-steering", "Human-in-the-Loop: Guiding and Steering the Agent", "Collaboration",
            "Effective human-agent collaboration: steering, clarifying ambiguities, setting boundaries, and reviewing diffs.",
            "What is the most effective mental model for collaborating with an AI coding agent?",
            ["The engineer acts as a Tech Lead / Senior Architect, while the agent acts as an exceptionally fast, tireless Junior Engineer", "The engineer sits back and does nothing while the agent replaces all software development", "The agent is an adversary to be tricked", "The agent is a search engine like Google"],
            0, "You direct architecture, provide specifications, and review diffs; the agent does the heavy typing and iteration.",
            [
                "<p>The most successful software engineers in the AI era do not view coding agents as replacements, nor as toys. They view the agent as a <strong>force multiplier</strong> within a structured partnership.</p>",
                "<p>In this partnership, the division of labor is clear:</p>",
                "<ul><li><strong>What the Human Does Best:</strong> High-level system architecture, evaluating business trade-offs, judging UX aesthetics, verifying security boundaries, and providing clear specifications.</li><li><strong>What the Agent Does Best:</strong> Reading hundreds of files, making mechanical multi-file edits, writing repetitive boilerplate, running test suites, and resolving compiler errors.</li></ul>",
                "<pre><code># The Tech Lead / Agent Dynamic\nHuman: \"Refactor the User model to support multi-tenant organizations. \n        Here are the constraints: \n        - Do NOT alter existing API schemas.\n        - Add organization_id with foreign key to organizations table.\n        - Write unit tests covering tenant isolation.\"\nAgent: Explores repo -> Drafts migration -> Updates model -> Adds tests -> Verifies green.\nHuman: Reviews git diff with critical eye -> Approves and merges!</code></pre>",
                "<div class=\"callout\"><p><strong>The Ultimate Responsibility:</strong> The human engineer is 100% accountable for every line of code merged to main. Never approve an agent diff you do not understand!</p></div>"
            ],
            "The Division of Labor", "Complementary strengths of humans and AI agents",
            [
                {"title": "Human (Architect)", "lines": ["Business requirements & intent", "System architecture & trade-offs", "Final review & verification"]},
                {"title": "Agent (Implementation Engine)", "lines": ["Multi-file navigation & editing", "Boilerplate generation", "Continuous test execution loop"]}
            ],
            "Effective Steering Techniques", "Guiding agents toward success",
            [
                {"title": "Provide Constraints", "lines": ["State what NOT to do", "Specify existing patterns to follow"]},
                {"title": "Incremental Slices", "lines": ["Break 10-file tasks into 3 steps", "Verify at each milestone"]},
                {"title": "Critical Diff Review", "lines": ["Inspect every modified line", "Check security & edge cases"]}
            ],
            "Complete the collaboration sentence",
            "In human-in-the-loop engineering, the developer provides {1} and reviews diffs, while the agent performs {2} and test iterations.",
            [
                {"answer": "specifications", "hint": "Clear architectural requirements and constraints", "options": ["specifications", "random words", "passwords"]},
                {"answer": "mechanical edits", "hint": "Writing and modifying source code files", "options": ["mechanical edits", "manual testing", "marketing"]}
            ],
            [
                {"q": "Who is ultimately accountable for bugs or security vulnerabilities introduced by an AI coding agent?", "a": ["The human engineer who reviewed and merged the code into the repository", "The AI company that trained the model", "The operating system vendor", "No one, because software bugs are inevitable"], "c": 0, "why": "Professional engineering accountability always rests with the human who approves and merges changes."},
                {"q": "What should a developer do when an agent generates a 500-line diff that seems to work but is hard to understand?", "a": ["Reject or ask the agent to simplify and explain the change; never merge code you cannot explain", "Merge it immediately since tests passed", "Delete the git repository", "Push directly to production"], "c": 0, "why": "Unchecked complex code accumulates cognitive debt and hidden vulnerabilities."},
                {"q": "Why is specifying 'Non-Goals' (what the agent should NOT do) so effective in steering prompts?", "a": ["It prevents the agent from making speculative architectural changes or touching unrelated files", "It makes the model generate code in C", "It speeds up network download speeds", "It disables the linter"], "c": 0, "why": "Negative constraints keep agents focused on tight task boundaries without scope creep."},
                {"q": "How does breaking a massive task into small verified milestones improve agent success rates?", "a": ["It keeps context clean, limits the blast radius of errors, and allows the human to steer direction early", "It makes the task take 10x longer", "It increases cloud hosting costs", "It deletes intermediate files"], "c": 0, "why": "Milestone-based execution prevents compound error cascades and preserves context quality."}
            ],
            "You have completed the How AI Coding Agents Work course.",
            "Next Course: Prompting vs Specification", "Learn how to write unambiguous specifications that agents can reliably verify."
        )
    ]

    glossary = [
        {"id": "agents", "title": "Agents & Agency", "terms": [
            {"term": "AI Coding Agent", "def": "An autonomous AI system that reasons, uses tools (file edits, terminals), and iterates to achieve software engineering goals.", "lesson": 1, "tags": ["ai", "agents"]},
            {"term": "ReAct Pattern", "def": "An architecture interleaving verbal reasoning ('Thoughts') with environmental tool invocations ('Actions') and feedback ('Observations').", "lesson": 2, "tags": ["ai", "patterns"]},
            {"term": "Agency", "def": "The capacity of an automated system to act independently upon its environment to achieve a specified objective.", "lesson": 1, "tags": ["ai", "theory"]}
        ]},
        {"id": "tools", "title": "Tools & Execution", "terms": [
            {"term": "Tool Calling", "def": "A mechanism allowing language models to emit structured arguments to invoke predefined host functions.", "lesson": 4, "tags": ["ai", "tools"]},
            {"term": "Exact String Replacement", "def": "A safe file-editing technique that substitutes a target code block identified by surrounding context lines.", "lesson": 4, "tags": ["ai", "editing"]},
            {"term": "Lexical Search", "def": "Exact text and regular-expression searching (grep) across files to locate specific symbols and patterns.", "lesson": 3, "tags": ["ai", "search"]}
        ]},
        {"id": "memory", "title": "Memory & Context", "terms": [
            {"term": "Working Memory", "def": "Dynamic, in-session state tracking (such as todo lists and scratchpads) used during active execution.", "lesson": 5, "tags": ["ai", "memory"]},
            {"term": "Persistent Memory", "def": "Repository-scoped markdown files documenting architectural rules, conventions, and verified facts across sessions.", "lesson": 5, "tags": ["ai", "memory"]},
            {"term": "Context Compaction", "def": "Summarizing or pruning conversation history when approaching token window limits to preserve capacity.", "lesson": 6, "tags": ["ai", "context"]}
        ]},
        {"id": "reliability", "title": "Reliability & Steering", "terms": [
            {"term": "Agent Thrashing", "def": "A failure mode where an agent makes circular, guessing edits that break tests in an endless loop.", "lesson": 7, "tags": ["ai", "debugging"]},
            {"term": "Circuit Breaker", "def": "A mechanism that halts automated agent repair loops after a threshold of failed attempts to request human input.", "lesson": 7, "tags": ["ai", "safety"]},
            {"term": "Human-in-the-Loop", "def": "An engineering workflow where a human guides architecture, sets boundaries, and reviews agent diffs.", "lesson": 8, "tags": ["ai", "collaboration"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "The ReAct Loop Cycle",
            "label": "Universal agent execution loop",
            "code": "while not goal_satisfied:\n    thought = model.reason(state)\n    action = model.select_tool(thought)\n    observation = env.execute(action)\n    state.update(thought, action, observation)",
            "lessonN": 2, "lessonSlug": "core-agent-loop", "lessonTitle": "The Core Agent Loop: Read, Plan, Act, Observe"
        },
        {
            "title": "Safe File String Replacement",
            "label": "Context-anchored code edit",
            "code": "replace_string_in_file(\n    filePath=\"/src/api.py\",\n    oldString=\"  def get_user():\\n    # old logic\\n    return user\",\n    newString=\"  def get_user():\\n    # new validated logic\\n    return validated_user\"\n)",
            "lessonN": 4, "lessonSlug": "tool-calling-edits-terminals", "lessonTitle": "Tool Calling: Editing Files and Running Terminals"
        },
        {
            "title": "Context Compaction Checkpoint",
            "label": "Distilling long session history",
            "code": "# Replace 80k tokens of verbose logs with a milestone summary:\n# Checkpoint: Implemented tenant_id column in User model.\n# Status: 14/15 tests passing. Failing: test_invoice_isolation.",
            "lessonN": 6, "lessonSlug": "context-exhaustion-and-compaction", "lessonTitle": "Context Window Exhaustion and Compaction"
        },
        {
            "title": "Agent Steering Constraints",
            "label": "Effective prompt framing",
            "code": "# Always provide:\n# 1. Clear Goal + Acceptance Criteria\n# 2. Constraints (Do NOT modify external schemas)\n# 3. Verification command (pytest tests/test_auth.py)",
            "lessonN": 8, "lessonSlug": "human-in-the-loop-steering", "lessonTitle": "Human-in-the-Loop: Guiding and Steering the Agent"
        }
    ]

    course_data = {
        "id": "ai-coding-agents",
        "title": "How AI Coding Agents Work",
        "num": 51,
        "emoji": "🤖",
        "desc": "What an agent actually does: read context, plan, edit files, run tools, observe results and iterate.",
        "topics": ["AI Agents", "ReAct Loop", "Tool Calling", "Code Navigation", "Agent Memory", "Context Compaction", "Error Recovery", "Human-in-the-Loop"],
        "mission": "# Mission — How AI Coding Agents Work\n\nDemystify the mechanics of autonomous coding agents. Understand the Read-Plan-Act-Observe loop, explore codebases strategically with grep and file trees, execute safe targeted file edits, leverage multi-tiered memory, manage context degradation, and steer agents effectively.",
        "notes": "# Notes — How AI Coding Agents Work\n\nAgents are reasoning engines wired to tools and environment feedback. The quality of the loop determines the quality of the result.",
        "resources": "# Resources — How AI Coding Agents Work\n\n- Yao et al., *ReAct: Synergizing Reasoning and Acting in Language Models*\n- Anthropic, *Building Effective Agents*\n- Harrison Chase, *LangChain & LangGraph Architectural Concepts*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

if __name__ == "__main__":
    make_course_51()

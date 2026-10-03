import os
import sys
sys.path.append(os.path.dirname(__file__))
from helpers import build_lesson, save_course

# ==============================================================================
# COURSE 51: ai-coding-agents
# ==============================================================================
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
                "<pre><code># The Autonomous Agent Lifecycle\nGoal: \"Fix the authentication token expiry bug\"\n1. Agent runs `grep_search(query='TOKEN_EXPIRY')`\n2. Agent reads `auth/service.py` lines 40-80\n3. Agent edits `auth/service.py` to add timedelta calculation\n4. Agent executes `pytest tests/test_auth.py` in terminal\n5. Agent observes green test output and reports completion!</code></pre>",
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
                "<ul><li><strong>1. READ:</strong> The agent inspects its environment: reading the prompt, exploring files, searching symbols, and loading memory.</li><li><strong>2. PLAN:</strong> The agent reasons over its observations, formulating an actionable next step or breaking down a larger task.</li><li><strong>3. ACT:</strong> The agent issues a structured tool call: `replace_string_in_file`, `create_file`, or `run_in_terminal`.</li><li><strong>4. OBSERVE:</strong> The environment executes the tool and returns the result (stdout, exit code, diff, or error message) directly into the agent's context.</li></ul>",
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
                "<ul><li><strong>1. Structural Orientation (File Tree & Directory Listing):</strong> Inspecting directory structure (`list_dir`, `file_search`) to locate architecture boundaries, entry points, and module layouts.</li><li><strong>2. Exact Lexical Search (Grep):</strong> Finding exact function names, class definitions, error constants, or import statements across files. Grep is fast, deterministic, and accurate.</li><li><strong>3. Semantic Search (Vector Embeddings):</strong> Finding conceptual functionality when the exact symbol name is unknown (e.g. <em>'where is user billing calculated?'</em>).</li></ul>",
                "<pre><code># Strategic Code Exploration Flow:\n# 1. Orient: list_dir(\"src/\") -> discovers [auth/, billing/, api/]\n# 2. Pinpoint: grep_search(\"class TokenManager\") -> finds src/auth/tokens.py:42\n# 3. Read Slice: read_file(\"src/auth/tokens.py\", startLine=40, endLine=80)\n# Total tokens consumed: ~400 tokens (vs 150,000 for whole repo!)</code></pre>",
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
                "<ul><li><strong>Full File Overwrite:</strong> The agent generates the entire 800-line file from scratch. <em>Dangerous!</em> Models frequently hallucinate missing sections, omit methods with comments like `// ...rest of code unchanged...`, and burn thousands of tokens.</li><li><strong>Exact String Replacement (`replace_string_in_file`):</strong> The agent specifies the exact target string to replace, along with 3-5 lines of surrounding context. Safe, precise, and minimal token usage.</li><li><strong>Terminal Commands (`run_in_terminal`):</strong> Executing build scripts, running unit tests, installing packages, or inspecting git diffs.</li></ul>",
                "<pre><code># Anatomy of a Safe String Replacement Tool Call:\n{\n  \"filePath\": \"/workspace/src/auth.py\",\n  \"oldString\": \"    if not token:\\n        return False\\n    return verify(token)\",\n  \"newString\": \"    if not token:\\n        raise AuthenticationRequired()\\n    return verify(token)\"\n}</code></pre>",
                "<p>Notice that `oldString` contains sufficient surrounding context lines to ensure the match is 100% unique in the file.</p>",
                "<div class=\"callout\"><p><strong>Safety Seam:</strong> Never allow an agent to run destructive commands like `rm -rf /` or push directly to production without human confirmation gates.</p></div>"
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
                "<ul><li><strong>1. Ephemeral Conversation History:</strong> The back-and-forth messages of the current session. Fast, immediate, but transient and easily evicted.</li><li><strong>2. Working Memory (Scratchpad / Todo List):</strong> A structured in-session checklist (like `manage_todo_list`) where the agent tracks which subtasks are completed and which is currently in-progress.</li><li><strong>3. Persistent Repository Memory (`/memories/repo/` or Markdown files):</strong> Notes committed to the repository that survive across conversations—documenting project conventions, verified build commands, and architectural invariants.</li></ul>",
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
            "Next Course: Prompting vs Specification", "Learn why rigorous specifications outperform clever prompts every time."
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
            {"term": "Context Compaction", "def": "Summarizing or pruning conversation history when approaching token window limits to preserve capacity.", "lesson": 5, "tags": ["ai", "context"]}
        ]},
        {"id": "retrieval", "title": "Retrieval & Grounding", "terms": [
            {"term": "Semantic Search", "def": "Searching text and code based on conceptual meaning using vector embeddings rather than literal keyword matches.", "lesson": 3, "tags": ["ai", "search"]},
            {"term": "Grounding", "def": "Anchoring model reasoning and generation in verified, real-world source files and execution outputs.", "lesson": 2, "tags": ["ai", "reliability"]},
            {"term": "Signal-to-Noise Ratio", "def": "The proportion of relevant, useful information versus distracting irrelevant text in the context window.", "lesson": 3, "tags": ["ai", "context"]}
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
            "title": "Targeted Code Exploration",
            "label": "Macro to micro navigation",
            "code": "# 1. list_dir('src/')           -> discover modules\n# 2. grep_search('class Auth')   -> pinpoint file:line\n# 3. read_file(file, 40, 80)     -> read focused slice",
            "lessonN": 3, "lessonSlug": "reading-the-repository", "lessonTitle": "Reading the Repository: File Tree, Grep, Semantic Search"
        },
        {
            "title": "Persistent Repo Memory",
            "label": "Preserving architectural facts",
            "code": "# /memories/repo/conventions.md\n# - Run tests with: pytest -m unit\n# - Use Pydantic v2 schemas for all API payloads\n# - Never mutate shared state in fixtures",
            "lessonN": 5, "lessonSlug": "working-memory-vs-history", "lessonTitle": "Working Memory vs Conversation History"
        }
    ]

    course_data = {
        "id": "ai-coding-agents",
        "title": "How AI Coding Agents Work",
        "num": 51,
        "emoji": "🤖",
        "desc": "What an agent actually does: read context, plan, edit files, run tools, observe results and iterate.",
        "topics": ["AI Agents", "ReAct Loop", "Tool Calling", "Code Navigation", "Agent Memory", "Context Management"],
        "mission": "# Mission — How AI Coding Agents Work\n\nDemystify the mechanics of autonomous coding agents. Understand the Read-Plan-Act-Observe loop, explore codebases strategically with grep and file trees, execute safe targeted file edits, and leverage multi-tiered memory.",
        "notes": "# Notes — How AI Coding Agents Work\n\nAgents are reasoning engines wired to tools and environment feedback. The quality of the loop determines the quality of the result.",
        "resources": "# Resources — How AI Coding Agents Work\n\n- Yao et al., *ReAct: Synergizing Reasoning and Acting in Language Models*\n- Anthropic, *Building Effective Agents*\n- Harrison Chase, *LangChain & LangGraph Architectural Concepts*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

if __name__ == "__main__":
    make_course_51()

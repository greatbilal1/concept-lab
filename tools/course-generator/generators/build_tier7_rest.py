import os
import sys
sys.path.append(os.path.dirname(__file__))
from helpers import build_lesson, save_course

# ==============================================================================
# COURSE 67: tokens-context
# ==============================================================================
def make_course_67():
    lessons = [
        build_lesson(
            1, "characters-words-tokens", "Characters vs Words vs Tokens: How BPE Slices Text", "Token Mechanics",
            "How text is broken into tokens: character counts vs word counts vs token ratios across languages and code.",
            "On average, approximately how many English words does 1,000 tokens represent?",
            ["Approximately 750 words (an average ratio of roughly 0.75 words per token in English)", "Exactly 1,000 words", "Only 10 words", "Over 10,000 words"],
            0, "In English text, 1,000 tokens represents roughly 750 words (approximately 4 characters per token).",
            [
                "<p>When designing software with language models, engineers frequently make the mistake of measuring text in <strong>words or characters</strong>. However, LLMs only read and bill in <strong>Tokens</strong>.</p>",
                "<p>A token is a statistical chunk of text. In English prose, the standard rule of thumb is:</p>",
                "<ul><li><strong>1 Token $\\approx$ 4 characters</strong> (including spaces).</li><li><strong>1 Token $\\approx$ 0.75 words</strong> (so 100 tokens $\\approx$ 75 words).</li><li><strong>1,000 Tokens $\\approx$ 750 words</strong> (roughly 3 double-spaced pages of text).</li></ul>",
                "<p>However, this ratio changes dramatically across data types:</p>",
                "<ul><li><strong>Source Code (Python/JS):</strong> Because of indentation, brackets, and camelCase symbols, code has a higher token density: 1 token $\\approx$ 2-3 characters!</li><li><strong>Non-Latin Scripts (Arabic, Hindi, Japanese):</strong> Characters often decompose into 2 to 4 byte tokens, resulting in a 2x-4x 'multilingual token tax'.</li><li><strong>Numbers and Math:</strong> Large numbers are often split into arbitrary 2-digit or 3-digit chunks (e.g. <code>123456</code> becomes <code>[123, 456]</code>).</li></ul>",
                "<pre><code># Measuring Tokenization in Python:\nimport tiktoken\nenc = tiktoken.get_encoding(\"cl100k_base\")\n\ndef analyze_tokens(text):\n    tokens = enc.encode(text)\n    chars = len(text)\n    words = len(text.split())\n    print(f\"Words: {words} | Chars: {chars} | Tokens: {len(tokens)}\")\n    print(f\"Chars/Token: {chars/len(tokens):.2f}\")</code></pre>",
                "<div class=\"callout\"><p><strong>Cost & Budgeting Rule:</strong> Always calculate rate limits, storage buffers, and API budgets in Tokens, never in words or characters.</p></div>"
            ],
            "Text to Token Conversion Ratios", "Words vs Characters vs Tokens",
            [
                {"title": "Standard English Prose", "lines": ["1,000 Tokens ≈ 750 Words", "4 characters per token average"]},
                {"title": "Source Code (Indentation)", "lines": ["1,000 Tokens ≈ 400 Words", "2-3 characters per token (Higher density!)"]},
                {"title": "Non-Latin Scripts", "lines": ["Multilingual token fragmentation", "2x-4x more tokens per sentence"]}
            ],
            "Token Splitting Examples", "How BPE segments different words",
            [
                {"title": "Common Word", "lines": ["'apple' -> 1 token [17482]", "High frequency in corpus"]},
                {"title": "Compound / Technical", "lines": ["'Unbreakable' -> ['Un', 'break', 'able']", "Decomposed into 3 subwords"]}
            ],
            "Complete the token conversion sentence",
            "In standard English, 1,000 tokens corresponds to roughly {1} words, while source code has higher density at roughly 2-3 {2} per token.",
            [
                {"answer": "750", "hint": "Approximately 0.75 words per token", "options": ["750", "100", "5,000"]},
                {"answer": "characters", "hint": "Letters and spaces", "options": ["characters", "sentences", "paragraphs"]}
            ],
            [
                {"q": "Why does source code consume more tokens per character than English prose?",
                 "a": ["Code contains frequent whitespace indentation, punctuation symbols, and camelCase names that split into multiple tokens", "Code has more letters", "Python is an uncompressed language", "Code is encrypted"],
                 "c": 0, "why": "Punctuation, variable casing, and indentation create frequent subword boundaries in code."},
                {"q": "How does token fragmentation affect numerical calculations in LLMs?",
                 "a": ["Numbers like 849204 are split into arbitrary token chunks (e.g. 849 and 204), making alignment for arithmetic difficult", "Numbers are converted to letters", "Numbers are deleted", "Numbers use zero tokens"],
                 "c": 0, "why": "Arbitrary numerical token chunking obscures positional base-10 column alignment for math."},
                {"q": "What tool in the OpenAI ecosystem calculates exact token counts for GPT-4 models?",
                 "a": ["tiktoken", "numpy", "pandas", "pytest"],
                 "c": 0, "why": "tiktoken is the official, high-speed BPE tokenizer library for OpenAI models."},
                {"q": "Why is budgeting context in words rather than tokens an engineering risk?",
                 "a": ["A 1,000-word code snippet or foreign text passage can easily exceed 2,500 tokens, causing unexpected prompt truncation", "Words cannot be counted by computers", "Tokens are free", "Words take too much RAM"],
                 "c": 0, "why": "Token ratios fluctuate wildly across code and languages, making word counts an unreliable proxy for budget."}
            ],
            "You understand the relationship between characters, words, and tokens across domains.",
            "Token Costs, Pricing, and Token-Per-Second Speeds", "Calculate inference economics, TTFT, and generation throughput."
        ),
        build_lesson(
            2, "token-costs-pricing-speeds", "Token Costs, Pricing, and Token-Per-Second Speeds", "Token Economics",
            "Inference economics: asymmetric input/output pricing, Time-to-First-Token (TTFT), and token-per-second (TPS) throughput.",
            "Why are Output Tokens significantly more expensive than Input Tokens across virtually all LLM API providers?",
            ["Output tokens require sequential autoregressive generation (one GPU pass per token), while input tokens are processed in parallel in one pass", "Output tokens use more bandwidth", "Output tokens are legally copyrighted", "Input tokens are subsidized by the government"],
            0, "Input tokens are processed in parallel in a single matrix multiplication; output tokens require sequential serial forward passes.",
            [
                "<p>Commercial model APIs (OpenAI, Anthropic, Google, DeepSeek) bill users based on <strong>per-million token pricing</strong>. When examining pricing sheets, you will notice an immediate asymmetry: <strong>Output tokens cost 3x to 5x more than input tokens!</strong></p>",
                "<p>Why the price gap? It is a direct reflection of GPU physics:</p>",
                "<ul><li><strong>Input Processing (Pre-Fill):</strong> When you send a 5,000-token prompt, the GPU processes all 5,000 tokens <strong>in parallel in a single forward pass</strong>. Highly efficient!</li><li><strong>Output Generation (Decoding):</strong> When the model generates text, it must run <strong>one full forward pass for every single token</strong> sequentially! Generating 1,000 output tokens requires 1,000 sequential passes.</li></ul>",
                "<p>The two key latency metrics governing user experience are:</p>",
                "<ul><li><strong>Time-to-First-Token (TTFT):</strong> How many milliseconds from sending the request until the first word streams back. Scales with prompt size.</li><li><strong>Tokens-Per-Second (TPS):</strong> Generation throughput (e.g. 50-100 tokens/sec). Dictates how fast text streams on screen.</li></ul>",
                "<pre><code># The Economic Equation of an LLM Request:\n# Total Cost = (Input_Tokens / 1M * Input_Price) + (Output_Tokens / 1M * Output_Price)\n# Example (GPT-4o: $2.50/M input, $10.00/M output):\n# 10,000 input tokens:  $0.025\n# 1,000 output tokens:  $0.010\n# Total request cost:   $0.035</code></pre>",
                "<div class=\"callout\"><p><strong>The Architectural Rule:</strong> Design agents to be concise. Verbose outputs slow down TPS latency and quadruple your API billing!</p></div>"
            ],
            "Input vs Output Computational Physics", "Why output tokens cost significantly more",
            [
                {"title": "Input Tokens (Pre-Fill)", "lines": ["All prompt tokens processed in parallel", "1 forward pass across GPU cores", "Cheap, fast, high throughput"]},
                {"title": "Output Tokens (Decoding)", "lines": ["Sequential autoregressive passes", "1 GPU forward pass PER TOKEN!", "High latency, 3x-5x higher cost"]}
            ],
            "Latency Metrics: TTFT vs TPS", "Measuring user-facing responsiveness",
            [
                {"title": "Time-to-First-Token (TTFT)", "lines": ["Prompt pre-fill duration", "Aim for < 800ms for interactive UI"]},
                {"title": "Tokens-Per-Second (TPS)", "lines": ["Streaming generation speed", "Aim for > 40-80 tokens/sec"]}
            ],
            "Complete the token pricing sentence",
            "Output tokens cost more than input tokens because generation is {1}, requiring one sequential GPU forward pass per {2}.",
            [
                {"answer": "autoregressive", "hint": "Serial token-by-token generation", "options": ["autoregressive", "parallel", "random"]},
                {"answer": "token", "hint": "Single emitted unit of text", "options": ["token", "document", "paragraph"]}
            ],
            [
                {"q": "What is Time-to-First-Token (TTFT) and why is it critical for interactive apps?",
                 "a": ["The latency between sending a prompt and receiving the first streamed token, defining perceived responsiveness", "The time to download a model", "The time to compile Python", "The clock speed of the GPU"],
                 "c": 0, "why": "Low TTFT makes interactive applications feel snappy and immediate to users."},
                {"q": "Why does a 100,000-token prompt exhibit a much higher TTFT than a 1,000-token prompt?",
                 "a": ["The GPU must compute attention across all 100,000 input tokens in the pre-fill stage before emitting token #1", "Large prompts get lost in internet cables", "Language models read prompts with human eyes", "Large prompts require manual approval"],
                 "c": 0, "why": "Pre-fill computation scales with the volume of input tokens, delaying the first output token."},
                {"q": "How can engineering teams cut output token costs when using LLMs for data extraction?",
                 "a": ["Instruct the model to return concise JSON with short keys and zero conversational filler text", "Use temperature=2.0", "Send the prompt in Latin", "Ask the model to write poems"],
                 "c": 0, "why": "Eliminating conversational fluff reduces billed output token volume directly."},
                {"q": "What is the Batch API offered by providers like OpenAI and Anthropic?",
                 "a": ["A non-realtime API processing prompts within 24 hours at a 50% cost discount", "An API that only runs on Saturdays", "A tool for baking bread", "An API with zero rate limits"],
                 "c": 0, "why": "Batch APIs process asynchronous workloads during off-peak hours at half the standard pricing."}
            ],
            "You understand the economics, latency metrics, and GPU physics of token pricing.",
            "The Context Window: 4k, 32k, 128k, 1M+ Tokens", "Trace the expansion of context windows and understand practical limits."
        ),
        build_lesson(
            3, "context-window-evolution", "The Context Window: 4k, 32k, 128k, 1M+ Tokens", "Context Limits",
            "The historical evolution of context windows: from 2k (GPT-3) to 128k (GPT-4) and 1M+ (Gemini), and the reality of usable context.",
            "Why is having a 1-Million token context window not a complete replacement for a database or RAG system?",
            ["Querying 1M tokens on every call is slow, expensive, and subject to attention degradation compared to fast indexed database lookups", "1M tokens cannot be stored in RAM", "Databases are required by government law", "1M tokens can only hold three words"],
            0, "Massive contexts incur high cost and latency per call; vector databases provide targeted microsecond retrieval.",
            [
                "<p>In 2020, GPT-3 launched with a context window limit of <strong>2,048 tokens</strong>. Today, frontier models offer <strong>128,000 tokens</strong> (GPT-4o), <strong>200,000 tokens</strong> (Claude 3.5), and up to <strong>1,000,000+ tokens</strong> (Google Gemini 1.5 Pro). An entire codebase or a 600-page book can fit in a single prompt!</p>",
                "<p>However, understanding <strong>Context Capacity vs Usable Context</strong> is critical for software architecture:</p>",
                "<ul><li><strong>Cost Reality:</strong> Dumping a 500k-token codebase into a prompt costs ~$1.50 per query. A team making 1,000 queries a day will spend $1,500 every day on input tokens alone!</li><li><strong>Latency Reality:</strong> Pre-filling a 1M token prompt takes 15 to 45 seconds of waiting before the first word streams back. Interactive coding becomes impossible.</li><li><strong>Attention Fidelity:</strong> While models can pass simple needle-in-a-haystack tests across 1M tokens, complex multi-hop reasoning over hundreds of pages still degrades compared to focused context.</li></ul>",
                "<pre><code># Context Window Evolution:\n# 2020: GPT-3             ->   2,048 tokens (A few paragraphs)\n# 2022: ChatGPT (3.5)     ->   4,096 tokens (1-2 pages)\n# 2023: GPT-4             ->  32,768 tokens (Small codebase slice)\n# 2024: Claude 3.5 / 4o   -> 200,000 tokens (Full small repository)\n# 2024: Gemini 1.5 Pro    -> 2,000,000 tokens (Full hour of video / 30 books!)</code></pre>",
                "<div class=\"callout\"><p><strong>The Architectural Sweet Spot:</strong> Use long context windows for occasional deep audits or complex multi-file refactorings. For daily interactive operations, keep active context under 10k-20k tokens with RAG.</p></div>"
            ],
            "Context Window Progression", "From 2k tokens to 2 million tokens",
            [
                {"title": "2020: GPT-3 (2k)", "lines": ["2,048 tokens max", "Could barely fit 3 pages of text"]},
                {"title": "2023: GPT-4 (32k)", "lines": ["32,768 tokens", "Enabled multi-file code editing"]},
                {"title": "2024: Gemini 1.5 (2M)", "lines": ["2,000,000 tokens", "Processes entire video recordings & libraries"]}
            ],
            "Long Context vs RAG Trade-off", "Balancing full dump vs targeted indexing",
            [
                {"title": "1M Token Context Dump", "lines": ["Cost: $2.00 per query, 30s latency", "Zero setup, but slow and expensive"]},
                {"title": "Targeted RAG Retrieval", "lines": ["Cost: $0.005 per query, 800ms latency", "Fast, cheap, and scalable in production"]}
            ],
            "Complete the context evolution sentence",
            "While models can hold over a million tokens in context, targeted {1} retrieval remains vastly faster and cheaper for daily production {2}.",
            [
                {"answer": "RAG", "hint": "Retrieval-Augmented Generation", "options": ["RAG", "HTML", "CSS"]},
                {"answer": "queries", "hint": "Application API calls", "options": ["queries", "compilers", "cables"]}
            ],
            [
                {"q": "What is the primary operational penalty of using maximum 1M-token contexts on interactive queries?",
                 "a": ["High Time-to-First-Token latency (often 20-40 seconds) and compounding per-call financial costs", "The computer monitor turns off", "Python crashes with a memory leak", "Internet cables overheat"],
                 "c": 0, "why": "Pre-filling 1M tokens requires massive computation, causing major response delays."},
                {"q": "What type of engineering task justifies using a 200k+ token context window?",
                 "a": ["A large multi-file codebase architectural audit or migrating a legacy module with many interdependencies", "Checking if an email is spam", "Translating a 5-word sentence", "Formatting a date"],
                 "c": 0, "why": "Deep multi-file audits benefit from having all interconnected files simultaneously in view."},
                {"q": "What happens when an API prompt exceeds the model's hard context limit?",
                 "a": ["The API returns an HTTP 400 Bad Request error stating context length exceeded, rejecting the request", "The model guesses the rest of the text", "The computer deletes the prompt", "The model outputs Spanish"],
                 "c": 0, "why": "Exceeding the hardware context window causes immediate API rejection."},
                {"q": "Why is 'Prompt Caching' particularly transformative for large-context models?",
                 "a": ["It allows large 100k+ token codebases to be cached in GPU memory, cutting repeat cost by 90% and latency to sub-second speeds", "It converts prompts into text files", "It eliminates the need for GPUs", "It encrypts the prompt"],
                 "c": 0, "why": "Caching pre-computed attention states eliminates the latency and cost of re-processing large contexts."}
            ],
            "You understand the capabilities, costs, and architectural trade-offs of massive context windows.",
            "Quadratic Attention Cost vs FlashAttention and Sliding Windows", "Understand the O(N^2) memory physics and modern optimization tricks."
        ),
        build_lesson(
            4, "quadratic-attention-flashattention", "Quadratic Attention Cost vs FlashAttention and Sliding Windows", "Attention Optimization",
            "The memory physics of attention: O(N^2) quadratic scaling, GPU High-Bandwidth Memory (HBM), and FlashAttention IO-awareness.",
            "Why does doubling the sequence length in a transformer quadruple the computational and memory cost of self-attention?",
            ["Self-attention computes an N x N pairwise matrix: (2N)^2 = 4N^2 (quadratic scaling)", "CPUs run at half speed on long text", "Python multiplies memory by four", "Transformers use square pixels"],
            0, "Every token attends to every other token, producing an N x N matrix that scales quadratically.",
            [
                "<p>The fundamental physical constraint of the Transformer architecture is its <strong>Quadratic Scaling ($O(N^2)$)</strong>. If a sequence has $N$ tokens, the attention score matrix has $N \\times N$ elements:</p>",
                "<ul><li><strong>$1,000$ Tokens:</strong> $1,000 \\times 1,000 = 1,000,000$ matrix cells (Easily fits in GPU memory).</li><li><strong>$32,000$ Tokens:</strong> $32,000 \\times 32,000 = 1,024,000,000$ cells (1 Billion floating-point values!).</li><li><strong>$128,000$ Tokens:</strong> $128,000 \\times 128,000 = 16,384,000,000$ cells (16 Billion values $\\approx$ 32GB of VRAM just for one attention layer!).</li></ul>",
                "<p>How did modern models scale past 8k tokens without running out of GPU memory? Through two breakthroughs:</p>",
                "<ul><li><strong>1. FlashAttention (Dao et al., 2022):</strong> The real bottleneck was not compute; it was reading/writing the giant $N \\times N$ matrix to slow GPU High-Bandwidth Memory (HBM). FlashAttention fuses operations into fast SRAM on-chip memory using tiling, computing exact attention without ever saving the $N \\times N$ matrix to RAM!</li><li><strong>2. Sliding Window Attention (Mistral):</strong> Tokens only attend to the previous $W$ tokens (e.g. $W=4,096$), turning quadratic attention into linear $O(N \\times W)$ compute.</li></ul>",
                "<pre><code># The Quadratic Memory Reality:\n# Sequence N = 4k   -> Attention Matrix:  16 Million entries\n# Sequence N = 128k -> Attention Matrix: 16.3 BILLION entries (OOM Crash without FlashAttention!)\n# FlashAttention tiles computation in SRAM -> Exact math, ZERO OOM crash!</code></pre>",
                "<div class=\"callout\"><p><strong>Hardware Reality:</strong> FlashAttention made modern 128k+ long contexts physically possible by eliminating the memory-bandwidth bottleneck in GPU architectures.</p></div>"
            ],
            "The Quadratic Attention Matrix", "Visualizing O(N^2) growth across sequence length",
            [
                {"title": "Sequence: 2,048 tokens", "lines": ["Matrix: 2k x 2k = 4M elements", "Memory: ~8 MB VRAM (Trivial)"]},
                {"title": "Sequence: 32,768 tokens", "lines": ["Matrix: 32k x 32k = 1B elements", "Memory: ~2 GB VRAM per layer"]},
                {"title": "Sequence: 128,000 tokens", "lines": ["Matrix: 128k x 128k = 16.3B elements", "Memory: ~32 GB VRAM (Crashing without FlashAttn)"]}
            ],
            "FlashAttention SRAM Tiling", "Bypassing slow HBM memory writes",
            [
                {"title": "Standard Attention", "lines": ["Compute Q@K.T -> Write to slow HBM", "Read HBM -> Softmax -> Write HBM (Memory bound)"]},
                {"title": "FlashAttention (Dao et al.)", "lines": ["Tiles computation in ultra-fast GPU SRAM", "Never writes N x N matrix to HBM! (3-5x faster)"]}
            ],
            "Complete the attention scaling sentence",
            "Standard self-attention scales {1} with sequence length, which FlashAttention optimizes by tiling computations inside GPU {2} memory.",
            [
                {"answer": "quadratically", "hint": "O(N^2) scaling factor", "options": ["quadratically", "linearly", "logarithmically"]},
                {"answer": "SRAM", "hint": "Fast on-chip cache memory", "options": ["SRAM", "hard drive", "internet"]}
            ],
            [
                {"q": "What is the primary GPU memory bottleneck that FlashAttention resolves?",
                 "a": ["Memory bandwidth: repeatedly reading and writing the massive intermediate N x N attention matrix to slow High-Bandwidth Memory (HBM)", "Running out of hard drive space", "Slow internet connections", "CPU fan failure"],
                 "c": 0, "why": "FlashAttention fuses softmax and matrix multiplication directly in on-chip SRAM cache."},
                {"q": "How does Sliding Window Attention reduce computational complexity?",
                 "a": ["By restricting each token's attention to a fixed local window (e.g. 4,096 tokens), converting complexity from O(N^2) to O(N * W)", "By sliding the computer across a desk", "By deleting half of the words", "By using lower voltage"],
                 "c": 0, "why": "Restricting attention to a fixed local window makes compute scale linearly with sequence length."},
                {"q": "Does FlashAttention produce approximate or exact mathematical results?",
                 "a": ["Exact results: it computes the exact same mathematical attention formula without any lossy approximations", "Approximate results with 50% accuracy loss", "Random guesses", "Zero results"],
                 "c": 0, "why": "FlashAttention is an exact algorithmic reordering; it produces identical outputs to standard attention."},
                {"q": "What happens if you run standard un-tiled attention on a 128k token sequence on a standard GPU?",
                 "a": ["CUDA Out-Of-Memory (OOM) error: the intermediate attention tensors exceed available GPU VRAM", "The GPU catches fire", "The text turns into numbers", "The computer restarts"],
                 "c": 0, "why": "Materializing the raw 16-billion-element matrix causes immediate VRAM exhaustion."}
            ],
            "You understand the O(N^2) memory physics of attention and how FlashAttention unlocks long sequences.",
            "Needle-in-a-Haystack: Retrieval Degradation in Long Contexts", "Measure and understand why models miss facts buried in long prompts."
        ),
        build_lesson(
            5, "needle-in-a-haystack-degradation", "Needle-in-a-Haystack: Retrieval Degradation in Long Contexts", "NIAH Testing",
            "Auditing long-context recall: the Needle-in-a-Haystack test, depth percentages, and attention retrieval degradation.",
            "What is a 'Needle-in-a-Haystack' (NIAH) benchmark in LLM evaluation?",
            ["Placing a single specific fact (the needle) at various depths inside a massive text document (the haystack) and testing if the model can retrieve it", "Finding a metal needle on a farm", "Testing hard drive magnetic sectors", "A benchmark for sewing robots"],
            0, "NIAH tests whether a model can retrieve a targeted fact across varying context lengths and placement depths.",
            [
                "<p>Just because a model provider advertises a 128,000-token context window does not mean the model can effectively <em>use</em> all 128k tokens. In late 2023, independent AI researcher Greg Kamradt popularized the <strong>Needle-in-a-Haystack (NIAH) Test</strong> to empirically measure long-context retrieval fidelity.</p>",
                "<p>The test protocol is straightforward:</p>",
                "<ul><li><strong>The Haystack:</strong> A massive collection of neutral text (e.g. Paul Graham essays or public documents) scaled from 1,000 to 128,000 tokens.</li><li><strong>The Needle:</strong> A completely random, isolated fact inserted at a specific depth percentage (e.g. <em>'The best thing to do in San Francisco is eat a sandwich in Dolores Park on a sunny day.'</em>).</li><li><strong>The Query:</strong> At the very end of the prompt, ask: <em>'What is the best thing to do in San Francisco?'</em></li></ul>",
                "<pre><code># The NIAH Pressure Grid (Context Length vs Depth %):\n# Length \\ Depth |  0% (Top) | 25% | 50% (Mid) | 75% | 100% (Bottom)\n# 8k tokens       |   GREEN   | GREEN |   GREEN   | GREEN |    GREEN\n# 32k tokens      |   GREEN   | GREEN |   GREEN   | GREEN |    GREEN\n# 64k tokens      |   GREEN   | YELLOW|    RED    | YELLOW|    GREEN\n# 128k tokens     |   GREEN   |  RED  |  DARK RED |  RED  |    GREEN\n# Notice the U-shaped degradation in the middle at long lengths!</code></pre>",
                "<p>While frontier models (GPT-4o, Claude 3.5) achieve near-100% green on simple NIAH tests, when the task requires <strong>Multi-Hop Reasoning</strong> (connecting three different needles placed across the document), accuracy drops dramatically past 32k tokens.</p>",
                "<div class=\"callout\"><p><strong>The Real-World Rule:</strong> Simple fact retrieval works well in long context; complex multi-step reasoning across thousands of lines requires RAG or structured prompting.</p></div>"
            ],
            "The NIAH Heatmap Grid", "Visualizing retrieval accuracy across token depth",
            [
                {"title": "Top Depth (0-15%)", "lines": ["Near 100% retrieval accuracy", "System instructions & early context"]},
                {"title": "The Middle (40-60%)", "lines": ["Attention drops on complex tasks", "Red zone where facts can be lost"]},
                {"title": "Bottom Depth (85-100%)", "lines": ["Near 100% retrieval accuracy", "Recent turns & immediate queries"]}
            ],
            "Single-Needle vs Multi-Hop Reasoning", "The real limit of long context",
            [
                {"title": "Single Needle (Easy)", "lines": ["'Find fact X in 100k tokens'", "Modern frontier models score 99%+"]},
                {"title": "Multi-Hop Reasoning (Hard)", "lines": ["'Synthesize facts from page 10, 80, 200'", "Accuracy drops significantly past 32k"]}
            ],
            "Complete the needle test sentence",
            "The Needle-in-a-Haystack test evaluates whether models can retrieve isolated facts placed at varying {1} percentages across long {2} lengths.",
            [
                {"answer": "depth", "hint": "Position inside the document (0% to 100%)", "options": ["depth", "font", "license"]},
                {"answer": "context", "hint": "Total token sequence volume", "options": ["context", "cable", "database"]}
            ],
            [
                {"q": "What does a red cell in a Needle-in-a-Haystack evaluation heatmap represent?",
                 "a": ["A failure where the model could not retrieve or recall the target needle placed at that specific length and depth", "The GPU overheated", "The text contained a typo", "The prompt was deleted"],
                 "c": 0, "why": "Red indicates a failed retrieval where the model overlooked the inserted needle."},
                {"q": "Why does a model score 100% on single-needle retrieval but fail on complex code refactoring in long context?",
                 "a": ["Refactoring requires multi-hop reasoning, tracking dependencies, and synthesizing multiple facts rather than finding one isolated string", "Refactoring uses C++", "The model hates code", "Code files are too long"],
                 "c": 0, "why": "Synthesizing cross-file logic across depth is vastly harder than spotting a single isolated sentence."},
                {"q": "At what placement depth in a 100k-token prompt is an unanchored fact most likely to be overlooked?",
                 "a": ["Around the 40% to 60% middle depth (the Lost in the Middle zone)", "At 0% (the first line)", "At 100% (the last line)", "Models never overlook facts"],
                 "c": 0, "why": "Attention distributions naturally thin in the middle of long sequences."},
                {"q": "How can an engineer ensure a critical constraint is not missed in a 50k-token prompt?",
                 "a": ["Place the constraint in the system prompt at the top AND restate it as a final reminder at the bottom", "Write the constraint in Pig Latin", "Put 10 exclamation marks on it", "Delete the other 49k tokens"],
                 "c": 0, "why": "The Sandwich Pattern places critical constraints at both high-recall boundaries."}
            ],
            "You know how to evaluate and interpret Needle-in-a-Haystack long-context retrieval benchmarks.",
            "Context Eviction and Rolling Windows in Chat Apps", "Manage multi-turn conversation memory without hitting hard token limits."
        ),
        build_lesson(
            6, "context-eviction-rolling-windows", "Context Eviction and Rolling Windows in Chat Apps", "Eviction Strategies",
            "Managing conversation memory in production: sliding rolling windows, FIFO eviction, and summarization buffers.",
            "What happens if a chat application continuously appends messages without implementing an eviction or truncation strategy?",
            ["The conversation will eventually crash with a 'context length exceeded' API error when token count exceeds the model limit", "The chat window turns green", "The user's account is charged double", "The messages are automatically translated"],
            0, "Unbounded chat history accumulation leads to hard context length crashes.",
            [
                "<p>In production chat applications, users can talk for days, generating hundreds of messages. Because LLM APIs are stateless, your backend must send the conversation history on every turn. If you append messages indefinitely, your app will inevitably crash with an HTTP 400 <code>context_length_exceeded</code> error.</p>",
                "<p>To manage multi-turn history within a fixed budget, architectures use <strong>Context Eviction Strategies</strong>:</p>",
                "<ul><li><strong>1. FIFO Sliding Window (Message Truncation):</strong> Keep only the most recent $K$ messages (e.g. last 10 turns). Simple and fast, but loses all early context and decisions made at the start of the chat.</li><li><strong>2. Token-Bounded Sliding Window:</strong> Keep as many recent messages as fit within a strict token budget (e.g. 8,000 tokens), dropping the oldest user/assistant pairs when budget is exceeded.</li><li><strong>3. Summarization Buffer (Summary + Recent):</strong> When older messages are evicted, an asynchronous background task summarizes them into a concise 3-line memory block that stays pinned to the top of the prompt!</li></ul>",
                "<pre><code># The Summarization Buffer Architecture in Python:\n[SYSTEM PROMPT]        -> Fixed system rules\n[PINNED SUMMARY]       -> \"User is building an e-commerce app with FastAPI.\n                          Decided on PostgreSQL with Pydantic v2 schemas.\"\n[ROLLING WINDOW]       -> Last 6 recent turns (Full detailed messages)\n# Older turns 1-20 were evicted and condensed into the PINNED SUMMARY!</code></pre>",
                "<div class=\"callout\"><p><strong>Production Best Practice:</strong> Never drop the System Prompt! Evict only intermediate dialog turns, preserving the core system identity and active summary.</p></div>"
            ],
            "Eviction Strategies Compared", "FIFO vs Token Budget vs Summary Buffer",
            [
                {"title": "FIFO Message Drop", "lines": ["Keep last 10 messages", "Drops turn 1 completely (Amnesia)"]},
                {"title": "Token-Bounded Buffer", "lines": ["Keep up to 8k tokens of recent turns", "Predictable cost, but loses history"]},
                {"title": "Summary + Rolling Window", "lines": ["Old turns condensed to 3-line summary", "Preserves decisions + recent context"]}
            ],
            "The Summarization Buffer Flow", "Compacting history dynamically",
            [
                {"title": "Active Turns (1-30)", "lines": ["Approaching 16k token limit", "Trigger async summary task"]},
                {"title": "Distilled Checkpoint", "lines": ["Condense turns 1-24 to 200 tokens", "Reclaim 14,000 tokens of budget!"]},
                {"title": "Updated Prompt", "lines": ["System + Summary + Turns 25-30", "Seamless user experience"]}
            ],
            "Complete the eviction strategy sentence",
            "A summarization buffer preserves conversation continuity by condensing older evicted turns into a {1} summary pinned below the {2} prompt.",
            [
                {"answer": "distilled", "hint": "Condensed high-signal overview", "options": ["distilled", "random", "encrypted"]},
                {"answer": "system", "hint": "Foundational instruction tier", "options": ["system", "terminal", "browser"]}
            ],
            [
                {"q": "Why is simple FIFO (First-In, First-Out) message eviction problematic in complex chat workflows?",
                 "a": ["It discards early messages where the user originally defined the primary goal, constraints, and project rules", "FIFO takes too much memory", "FIFO causes syntax errors in JSON", "FIFO is forbidden in Python"],
                 "c": 0, "why": "Dropping early turns erases the foundational project setup and initial constraints."},
                {"q": "What component of the prompt should NEVER be evicted during context window management?",
                 "a": ["The system prompt (instructions and behavioral constraints)", "The third user message", "The latest assistant response", "The tool output"],
                 "c": 0, "why": "The system prompt defines model behavior and must remain permanently pinned."},
                {"q": "How does an asynchronous summarizer background task avoid slowing down chat responses?",
                 "a": ["It summarizes older history in a background worker while the main server continues serving immediate turns without delay", "It runs on the user's phone", "It deletes old messages without reading them", "It turns off logging"],
                 "c": 0, "why": "Background workers update the rolling summary asynchronously without blocking user response latency."},
                {"q": "What happens if a sliding window evicts half of a tool-calling exchange (keeping the result but dropping the call)?",
                 "a": ["Many model APIs (like Anthropic/OpenAI) will throw an error because tool calls and tool results must remain paired in history", "The model fixes the pair automatically", "The computer restarts", "The API bill is waived"],
                 "c": 0, "why": "Tool-use schemas require atomic call-and-response pairing in conversation history."}
            ],
            "You know how to manage rolling windows and summarization buffers for production chat applications.",
            "Handling Prompt Truncation Gracefully", "Implement defensive client-side truncation and token counting."
        ),
        build_lesson(
            7, "handling-prompt-truncation-gracefully", "Handling Prompt Truncation Gracefully", "Truncation Hygiene",
            "Defensive token management: counting tokens before sending, safe truncation heuristics, and avoiding mid-token cutoffs.",
            "Why must token counting and truncation be performed client-side before calling an LLM API?",
            ["To prevent unexpected HTTP 400 context limit crashes, budget overruns, and corrupted mid-sentence prompts", "Because APIs cannot count tokens", "To make Python compile faster", "Because client-side tokens are free"],
            0, "Client-side token counting guarantees that prompts fit within limits before incurring network round-trips.",
            [
                "<p>A mature application never sends a request to an LLM API and 'hopes' it fits within the context window. If the user attaches an unexpected 5MB log file, a naive API call will fail with a hard 400 error, breaking the user experience.</p>",
                "<p><strong>Graceful Prompt Truncation</strong> requires defensive client-side engineering:</p>",
                "<ul><li><strong>1. Count Tokens Before Sending:</strong> Use local tokenizer libraries (e.g. `tiktoken` in Python, `@dqbd/tiktoken` in JS) to calculate exact token counts locally.</li><li><strong>2. Safe Truncation Order:</strong> If total tokens exceed your safety limit (e.g. 90% of model window), truncate in a predictable order: <em>never truncate system prompts; truncate intermediate history or retrieved document chunks first.</em></li><li><strong>3. Truncate at Line or Sentence Boundaries:</strong> Never chop text at an arbitrary character or token index, which can create malformed Unicode or cut code in the middle of a variable name.</li></ul>",
                "<pre><code># Defensive Token Truncation in Python:\nimport tiktoken\n\ndef fit_context_budget(system_prompt, user_query, retrieved_chunks, max_tokens=8000):\n    enc = tiktoken.get_encoding(\"cl100k_base\")\n    # Always allocate budget for system and query first!\n    base_tokens = len(enc.encode(system_prompt)) + len(enc.encode(user_query))\n    available_for_chunks = max_tokens - base_tokens - 1000 # 1000 token output reserve!\n\n    selected_chunks = []\n    current_tokens = 0\n    for chunk in retrieved_chunks:\n        chunk_tokens = len(enc.encode(chunk))\n        if current_tokens + chunk_tokens <= available_for_chunks:\n            selected_chunks.append(chunk)\n            current_tokens += chunk_tokens\n        else:\n            break # Gracefully stop adding chunks before exceeding budget!\n    return selected_chunks</code></pre>",
                "<div class=\"callout\"><p><strong>The Output Reserve:</strong> Always reserve token capacity for the model's response! If a context window is 128k and your prompt is 127,900 tokens, the model can only generate 100 tokens before crashing.</p></div>"
            ],
            "The Context Budget Allocation", "Protecting output reserves and critical instructions",
            [
                {"title": "System Prompt (Pinned)", "lines": ["Core identity & constraints", "Guaranteed 100% budget"]},
                {"title": "User Query (Pinned)", "lines": ["Immediate active instruction", "Guaranteed 100% budget"]},
                {"title": "Retrieved Chunks (Flexible)", "lines": ["Filled up to budget ceiling", "Gracefully truncated if too large"]},
                {"title": "Output Reserve (Protected)", "lines": ["Reserved for model answer", "Prevents mid-sentence cutoff"]}
            ],
            "Mid-Token Truncation Danger", "Chop at clean boundaries",
            [
                {"title": "Arbitrary Token Cut", "lines": ["Chops inside variable `user_au...`", "Syntax error in prompt!"]},
                {"title": "Clean Boundary Cut", "lines": ["Chops at newline or sentence end", "Syntactically intact context"]}
            ],
            "Complete the truncation hygiene sentence",
            "Defensive prompt management counts tokens client-side, truncates flexible retrieved chunks first, and reserves capacity for the model's {1} {2}.",
            [
                {"answer": "output", "hint": "Generated answer tokens", "options": ["output", "hardware", "keyboard"]},
                {"answer": "response", "hint": "Assistant completion tokens", "options": ["response", "browser", "database"]}
            ],
            [
                {"q": "What happens if a prompt fills 100% of the model's maximum context window leaving zero tokens for the output reserve?",
                 "a": ["The model terminates immediately with a 'length' finish reason after emitting zero or one truncated token", "The model compresses its output", "The model runs in reverse", "The computer restarts"],
                 "c": 0, "why": "Output generation shares the total context window; with zero reserve, the model cannot generate."},
                {"q": "Why should text truncation be performed at line or paragraph boundaries rather than arbitrary token counts?",
                 "a": ["Truncating mid-line can slice variable names, JSON tags, or code statements in half, confusing the model with broken syntax", "It speeds up Python", "It reduces electric bills", "It is required by git"],
                 "c": 0, "why": "Clean boundary cuts preserve the syntactic validity of the remaining context."},
                {"q": "What library allows instant client-side token counting for OpenAI models without network calls?",
                 "a": ["tiktoken", "requests", "django", "pytest"],
                 "c": 0, "why": "tiktoken runs locally in Python or Rust, calculating exact token counts in microseconds."},
                {"q": "When truncating context to fit a budget, which content should be sacrificed first?",
                 "a": ["Older retrieved document chunks or distant middle conversation turns, preserving system instructions and the current query", "The system prompt", "The current user query", "All error handling code"],
                 "c": 0, "why": "Preserving core instructions and the immediate task while trimming auxiliary context maintains task alignment."}
            ],
            "You know how to implement defensive client-side token counting and graceful truncation.",
            "Designing Architectures Around Context Limits", "Synthesize context engineering into robust, scalable system architecture."
        ),
        build_lesson(
            8, "designing-around-context-limits", "Designing Architectures Around Context Limits", "Architecture Design",
            "Architectural patterns for context limits: map-reduce summarization, hierarchical retrieval, and external memory stores.",
            "How does the 'Map-Reduce' architectural pattern process a 10,000-page document that exceeds any single context window?",
            ["Chunks are processed in parallel by multiple model calls (Map), and their summaries are synthesized into a final report (Reduce)", "By compressing the 10,000 pages into a single image", "By reading only the first page and guessing the rest", "By running the model on quantum hardware"],
            0, "Map-Reduce breaks massive texts into parallel independent slices, aggregating intermediate summaries into a final synthesis.",
            [
                "<p>Great software architects do not complain about physics; they design systems that thrive within physical constraints. Context limits, latency curves, and token costs are the physical constraints of generative AI. You design around them using proven <strong>Scalable Context Patterns</strong>:</p>",
                "<ul><li><strong>1. Map-Reduce Summarization:</strong> To summarize a 500-page legal contract or 1,000 customer reviews: chunk the document into 50 pieces; run 50 parallel 'Map' model calls summarizing each chunk; then run one final 'Reduce' call synthesizing the 50 summaries into an executive report.</li><li><strong>2. Hierarchical Retrieval (RAG + Graph):</strong> Instead of searching flat text, search a knowledge graph or document tree: retrieve high-level section summaries first, then drill down into specific paragraph leaves on demand.</li><li><strong>3. External Ephemeral Memory:</strong> Store conversation state, scratchpads, and intermediate tables in Redis or SQLite. Let the agent query this state via tools rather than packing it all into the prompt!</li></ul>",
                "<pre><code># The Map-Reduce Architecture for Massive Documents:\n# Step 1 (Map): Process chunks in parallel\nchunk_summaries = await asyncio.gather(*[\n    summarize_chunk(chunk) for chunk in document_chunks\n])\n\n# Step 2 (Reduce): Synthesize intermediate summaries\nfinal_executive_report = await summarize_synthesis(\"\\n\".join(chunk_summaries))</code></pre>",
                "<div class=\"callout\"><p><strong>The Final Principle:</strong> Don't try to fit the entire world into one prompt. Build systems that route, chunk, map, and reduce information dynamically.</p></div>"
            ],
            "Map-Reduce Context Architecture", "Processing documents of arbitrary scale",
            [
                {"title": "Document (500 Pages)", "lines": ["Exceeds any context window", "Split into 50 independent chunks"]},
                {"title": "Map Phase (Parallel)", "lines": ["50 concurrent LLM calls", "Produces 50 concise summaries in 2s"]},
                {"title": "Reduce Phase (Synthesis)", "lines": ["Single LLM call aggregates summaries", "Outputs comprehensive executive report"]}
            ],
            "External Tool Memory Pattern", "Keeping the context window lean",
            [
                {"title": "Prompt Context (Lean)", "lines": ["Holds only active user query", "Tool definitions for search"]},
                {"title": "External Store (SQLite/Redis)", "lines": ["Holds massive state & tables", "Agent queries state via tools on demand"]}
            ],
            "Complete the architecture design sentence",
            "Scalable AI architectures process massive datasets using {1} patterns and store state in external {2} queried via tools.",
            [
                {"answer": "map-reduce", "hint": "Parallel split-and-combine pattern", "options": ["map-reduce", "binary", "terminal"]},
                {"answer": "databases", "hint": "External storage like SQLite or Redis", "options": ["databases", "prompts", "tokens"]}
            ],
            [
                {"q": "What is the primary advantage of Map-Reduce summarization over sequential reading?",
                 "a": ["All chunks are processed concurrently in parallel, reducing processing time from hours to seconds", "It uses no API tokens", "It guarantees 100% human accuracy", "It eliminates the need for Python"],
                 "c": 0, "why": "Concurrent map calls leverage cloud parallelism to summarize massive texts in seconds."},
                {"q": "How does storing intermediate state in an external database (like SQLite) protect the context window?",
                 "a": ["It offloads heavy state from the prompt, allowing the agent to query specific records on demand using tools", "It encrypts the model weights", "It converts SQL into natural language", "It reduces GPU temperature"],
                 "c": 0, "why": "External tool memory keeps prompt contexts lean while granting access to vast state stores."},
                {"q": "What is 'Hierarchical Retrieval' in advanced RAG systems?",
                 "a": ["Retrieving high-level chapter or document summaries first, then retrieving specific paragraph chunks based on relevance", "Sorting files alphabetically", "Retrieving files by date", "Using a single large vector"],
                 "c": 0, "why": "Hierarchical retrieval navigates from macro summaries down to micro details, preserving context fidelity."},
                {"q": "What is the ultimate mark of an architect who understands context limits?",
                 "a": ["They design modular systems using RAG, tool calling, and map-reduce rather than relying on giant brute-force prompts", "They use the largest possible prompt for every task", "They avoid using models with more than 1,000 tokens", "They never write unit tests"],
                 "c": 0, "why": "System architecture, data routing, and decomposition transcend raw context window size."}
            ],
            "You have completed the Tokens, Context Windows & Context Limits course.",
            "Next Course: Inference, Temperature & Sampling", "Explore logits, Softmax, greedy decoding, temperature, top-k, and top-p sampling."
        )
    ]

    glossary = [
        {"id": "tokens", "title": "Tokens & Pricing", "terms": [
            {"term": "Token", "def": "A statistical subword fragment of text (roughly 4 characters or 0.75 words in English) processed by LLMs.", "lesson": 1, "tags": ["tokens", "nlp"]},
            {"term": "Pre-Fill Phase", "def": "The parallel GPU forward pass that processes all input prompt tokens simultaneously before generation begins.", "lesson": 2, "tags": ["inference", "gpu"]},
            {"term": "Decoding Phase", "def": "The sequential autoregressive generation of output tokens, requiring one GPU forward pass per token.", "lesson": 2, "tags": ["inference", "decoding"]}
        ]},
        {"id": "latency", "title": "Latency & Complexity", "terms": [
            {"term": "Time-to-First-Token", "def": "The elapsed duration from sending a request until the first generated token streams back from the model.", "lesson": 2, "tags": ["latency", "metrics"]},
            {"term": "Tokens-Per-Second", "def": "The generation throughput speed measuring how many output tokens the model emits per second.", "lesson": 2, "tags": ["performance", "metrics"]},
            {"term": "Quadratic Attention", "def": "The O(N^2) memory and compute scaling of self-attention where doubling sequence length quadruples cost.", "lesson": 4, "tags": ["math", "complexity"]}
        ]},
        {"id": "optimization", "title": "Optimization & Evaluation", "terms": [
            {"term": "FlashAttention", "def": "An exact, IO-aware tiled self-attention algorithm computing attention in GPU SRAM without HBM memory bottlenecks.", "lesson": 4, "tags": ["hardware", "cuda"]},
            {"term": "Needle-in-a-Haystack", "def": "A benchmark evaluating retrieval accuracy when a specific fact is inserted at varying depths in long text.", "lesson": 5, "tags": ["benchmarks", "evals"]},
            {"term": "Sliding Window Attention", "def": "An attention pattern restricting attention to a local window of W tokens, converting complexity to linear O(N * W).", "lesson": 4, "tags": ["transformers", "efficiency"]}
        ]},
        {"id": "architecture", "title": "Memory & Architecture", "terms": [
            {"term": "Summarization Buffer", "def": "A conversation management pattern condensing older evicted turns into a pinned summary block.", "lesson": 6, "tags": ["context", "memory"]},
            {"term": "Output Reserve", "def": "Unused context window capacity intentionally reserved for the model's generated answer tokens.", "lesson": 7, "tags": ["context", "budget"]},
            {"term": "Map-Reduce Summarization", "def": "An architectural pattern summarizing large documents by processing chunks in parallel and reducing summaries.", "lesson": 8, "tags": ["architecture", "scale"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "Client-Side Token Counting with Tiktoken",
            "label": "Exact local token calculation",
            "code": "import tiktoken\nenc = tiktoken.get_encoding(\"cl100k_base\")\ndef count_tokens(text: str) -> int:\n    return len(enc.encode(text))",
            "lessonN": 1, "lessonSlug": "characters-words-tokens", "lessonTitle": "Characters vs Words vs Tokens: How BPE Slices Text"
        },
        {
            "title": "Defensive Output Reserve Calculation",
            "label": "Preventing length crash",
            "code": "MAX_CONTEXT = 128_000\nOUTPUT_RESERVE = 4_000\n# Cap input prompt budget strictly:\nMAX_INPUT_BUDGET = MAX_CONTEXT - OUTPUT_RESERVE  # 124,000 max input tokens",
            "lessonN": 7, "lessonSlug": "handling-prompt-truncation-gracefully", "lessonTitle": "Handling Prompt Truncation Gracefully"
        },
        {
            "title": "Map-Reduce Parallel Summarizer",
            "label": "Scaling past context limits",
            "code": "import asyncio\n# Map: Summarize 20 chunks concurrently\nsummaries = await asyncio.gather(*[call_llm(f\"Summarize: {c}\") for c in chunks])\n# Reduce: Combine intermediate summaries into final report\nfinal_report = await call_llm(f\"Synthesize these summaries:\\n\" + \"\\n\".join(summaries))",
            "lessonN": 8, "lessonSlug": "designing-around-context-limits", "lessonTitle": "Designing Architectures Around Context Limits"
        },
        {
            "title": "Summarization Buffer Pattern",
            "label": "Rolling chat memory",
            "code": "# Prompt assembly:\nprompt = f\"\"\"System: {system_rules}\nSummary of previous conversation:\n{rolling_summary}\nRecent messages:\n{recent_turns_window}\n\"\"\"",
            "lessonN": 6, "lessonSlug": "context-eviction-rolling-windows", "lessonTitle": "Context Eviction and Rolling Windows in Chat Apps"
        }
    ]

    course_data = {
        "id": "tokens-context",
        "title": "Tokens, Context Windows & Context Limits",
        "num": 67,
        "emoji": "🪟",
        "desc": "How text becomes tokens, what fits in a context window, and what happens when it does not.",
        "topics": ["Tokens", "Context Windows", "BPE Slicing", "Token Economics", "Quadratic Attention", "FlashAttention", "Needle In A Haystack", "Map-Reduce"],
        "mission": "# Mission — Tokens, Context Windows & Context Limits\n\nMaster the economics, physical constraints, and architecture of context windows. Understand subword BPE tokenization ratios, analyze asymmetric input/output pricing and TTFT latency, explore context window evolution from 2k to 1M+, unravel the O(N^2) quadratic attention bottleneck and FlashAttention, audit long-context retrieval with Needle-in-a-Haystack tests, implement rolling summarization buffers, execute defensive client-side truncation, and design scalable Map-Reduce architectures.",
        "notes": "# Notes — Tokens, Context Windows & Context Limits\n\nContext is a finite, scarce budget. Design architectures that route, chunk, map, and reduce information rather than relying on brute-force prompt stuffing.",
        "resources": "# Resources — Tokens, Context Windows & Context Limits\n\n- Greg Kamradt, *Needle In A Haystack Pressure Testing*\n- Tri Dao et al., *FlashAttention-2: Faster Attention with Better Parallelism*\n- OpenAI, *Tiktoken Library Documentation*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

# ==============================================================================
# COURSE 68: inference-sampling
# ==============================================================================
def make_course_68():
    lessons = [
        build_lesson(
            1, "logits-and-softmax-probabilities", "The Logits Vector and Softmax Probabilities", "Logits & Softmax",
            "The mathematical foundation of sampling: how the Language Model Head produces raw logits and converts them to probabilities.",
            "What mathematical function transforms unnormalized raw model logits into a valid probability distribution?",
            ["The Softmax function: p_i = exp(z_i) / sum(exp(z_j))", "The Sigmoid function", "A simple linear average", "The square root function"],
            0, "Softmax exponentiates and normalizes raw logits so that every probability is positive and the sum equals exactly 1.0.",
            [
                "<p>Every time a language model generates a token, the final transformer layer outputs a high-dimensional vector. The Language Model Head multiplies this vector by the vocabulary matrix, producing an unnormalized list of real numbers called <strong>Logits</strong> (one score for every token in the vocabulary, e.g. 128,000 numbers).</p>",
                "<p>To turn raw logits into meaningful probabilities, the model passes them through the <strong>Softmax function</strong>:</p>",
                "$$P(w_i) = \\frac{e^{z_i / T}}{\\sum_{j} e^{z_j / T}}$$",
                "<p>Softmax has two vital properties:</p>",
                "<ul><li><strong>Exponentiation ($e^{z_i}$):</strong> Turns any real number (even negative numbers like $-5.2$) into a strictly positive number, while magnifying small differences between top contenders.</li><li><strong>Normalization ($\\sum e^{z_j}$):</strong> Divides each score by the sum of all scores, guaranteeing that all probabilities add up to <strong>exactly $1.0$ ($100\\%$)</strong>.</li></ul>",
                "<pre><code># Computing Softmax Probabilities in Python:\nimport numpy as np\n\ndef logits_to_probabilities(logits, temperature=1.0):\n    # Scale logits by temperature\n    scaled = logits / temperature\n    # Subtract max for numerical stability (prevents overflow in exp)\n    exp_scores = np.exp(scaled - np.max(scaled))\n    # Normalize to probabilities\n    return exp_scores / np.sum(exp_scores)</code></pre>",
                "<div class=\"callout\"><p><strong>The Core Understanding:</strong> An LLM does not generate words; it generates a probability distribution over words. Sampling parameters dictate how you pick from this distribution.</p></div>"
            ],
            "The Logits to Probabilities Pipeline", "Raw scores to normalized probabilities",
            [
                {"title": "1. Raw Logits (z)", "lines": ["['cat': 12.4, 'dog': 11.8, 'car': 2.1]", "Unbounded real numbers (-inf to +inf)"]},
                {"title": "2. Exponentiation (e^z)", "lines": ["['cat': 242792, 'dog': 133255, 'car': 8.1]", "Magnifies differences, strictly positive"]},
                {"title": "3. Softmax Normalization", "lines": ["['cat': 64.5%, 'dog': 35.4%, 'car': 0.002%]", "Sums to 100% across all 128k tokens"]}
            ],
            "Numerical Stability Trick", "Subtracting max logit to prevent overflow",
            [
                {"title": "Naive Softmax", "lines": ["e^800 produces floating point overflow (inf!)", "Crashes with numerical NaN"]},
                {"title": "Stable Softmax", "lines": ["Subtract max(logits) before exp", "Mathematically identical, 100% stable"]}
            ],
            "Complete the logits sentence",
            "The Language Model Head outputs raw {1} that are converted into a normalized probability distribution using the {2} function.",
            [
                {"answer": "logits", "hint": "Unnormalized raw scores", "options": ["logits", "passwords", "tokens"]},
                {"answer": "Softmax", "hint": "Exponential normalization function", "options": ["Softmax", "ReLU", "Sigmoid"]}
            ],
            [
                {"q": "What is the sum of all probabilities output by the Softmax function across the model's vocabulary?",
                 "a": ["Exactly 1.0 (or 100%)", "It varies depending on temperature", "0.0", "128,000"],
                 "c": 0, "why": "By mathematical definition, Softmax normalizes all outputs into a valid probability distribution summing to 1.0."},
                {"q": "Why does Softmax use exponentiation (e^z) rather than simple linear normalization (z / sum(z))?",
                 "a": ["Exponentiation ensures all values are strictly positive and magnifies small differences between the most competitive candidates", "Exponentiation is faster on CPUs", "Linear normalization is illegal in math", "Linear normalization deletes negative numbers"],
                 "c": 0, "why": "Exponentiation handles negative logits gracefully while sharpening separation between high-scoring tokens."},
                {"q": "What is the 'Log-Sum-Exp' trick in deep learning engineering?",
                 "a": ["A numerical stability technique that subtracts the maximum logit before exponentiation to prevent floating-point overflow", "A trick for hacking passwords", "A method for compressing text", "A tool for counting tokens"],
                 "c": 0, "why": "Subtracting the max logit prevents e^x from overflowing standard 32-bit floating-point registers."},
                {"q": "What happens if all logits in a vocabulary are identical (e.g. all equal 5.0)?",
                 "a": ["Softmax outputs a uniform distribution where every single token has an equal probability (1 / V)", "The model crashes", "The model outputs the first token", "The probabilities are all zero"],
                 "c": 0, "why": "Identical logits produce a completely flat, uniform probability distribution across the vocabulary."}
            ],
            "You understand the mathematical transformation from raw logits to Softmax probability distributions.",
            "Greedy Decoding (Argmax): Deterministic but Repetitive", "Explore the simplest decoding strategy: always pick the highest score."
        ),
        build_lesson(
            2, "greedy-decoding-argmax", "Greedy Decoding (Argmax): Deterministic but Repetitive", "Greedy Decoding",
            "The deterministic baseline: Argmax greedy decoding, its strengths in code/math, and its susceptibility to repetitive loops.",
            "What is 'Greedy Decoding' (or Argmax sampling)?",
            ["Always selecting the single token with the absolute highest probability at every step, with zero randomness", "Selecting tokens based on financial cost", "Picking random tokens from the middle", "Sorting the text alphabetically"],
            0, "Greedy decoding selects the maximum probability token (argmax) deterministically at each step.",
            [
                "<p>The simplest way to sample from a probability distribution is to not sample at all: simply pick the winner! This is <strong>Greedy Decoding</strong> (or <strong>Argmax</strong>):</p>",
                "$$w_t = \\arg\\max_{w} P(w | w_{<t})$$",
                "<p>Greedy decoding is <strong>100% deterministic</strong>: given the exact same prompt, the model will output the exact same tokens every single time.</p>",
                "<p>Where Greedy Decoding Excels:</p>",
                "<ul><li><strong>Source Code & Math:</strong> Where there is only one correct syntax or formula. You want <code>'def'</code>, not a creative synonym!</li><li><strong>Automated Testing:</strong> Unit tests require deterministic, reproducible outputs to verify assertions.</li></ul>",
                "<p>The Fatal Flaw of Greedy Decoding: <strong>Repetitive Degeneration</strong>:</p>",
                "<pre><code># The Greedy Repetition Loop Trap:\n# Because greedy decoding always picks the most common continuation,\n# it easily gets trapped in localized cyclical loops:\n# \"...in addition to this, in addition to this, in addition to this...\"\n# Once a repetitive sequence starts, the probability of continuing\n# the repetition becomes overwhelmingly dominant!</code></pre>",
                "<div class=\"callout\"><p><strong>The Takeaway:</strong> Greedy decoding is ideal for strict code generation, JSON extraction, and math proofs, but produces dull, repetitive prose in creative writing.</p></div>"
            ],
            "Greedy Decoding vs Stochastic Sampling", "Deterministic precision vs creative variation",
            [
                {"title": "Greedy Decoding (Argmax)", "lines": ["Always picks token with 64.5% (Highest)", "100% deterministic, zero randomness", "Best for: Code, Math, JSON schemas"]},
                {"title": "Stochastic Sampling", "lines": ["Rolls a die weighted by probabilities", "Can pick 35.4% or 0.002% occasionally", "Best for: Creative writing, brainstorming"]}
            ],
            "The Repetition Degeneration Trap", "How greedy search gets trapped in loops",
            [
                {"title": "Turn 10", "lines": ["'Furthermore, it is important to...'"]},
                {"title": "Turn 15 (Trapped)", "lines": ["'Furthermore, furthermore, furthermore...'", "Argmax locks into infinite loop!"]}
            ],
            "Complete the greedy decoding sentence",
            "Greedy decoding deterministically selects the {1} probability token at each step, making it ideal for {2} and mathematics.",
            [
                {"answer": "highest", "hint": "Argmax maximum probability", "options": ["highest", "lowest", "random"]},
                {"answer": "code", "hint": "Programming syntax and logic", "options": ["code", "poetry", "fiction"]}
            ],
            [
                {"q": "Why is greedy decoding preferred when generating structured JSON schemas?",
                 "a": ["It avoids creative deviations and sticks strictly to the most probable, syntactically valid formatting tokens", "It makes JSON files smaller on disk", "JSON is only supported at temperature 0", "It encrypts the JSON output"],
                 "c": 0, "why": "Strict schema adherence benefits from deterministic, high-probability token selection."},
                {"q": "What setting in the OpenAI or Anthropic API activates greedy decoding?",
                 "a": ["temperature=0.0", "temperature=1.0", "top_p=1.0", "max_tokens=0"],
                 "c": 0, "why": "Setting temperature to 0.0 forces the model to use deterministic argmax token selection."},
                {"q": "Why does greedy decoding sometimes fail to produce the globally optimal sentence?",
                 "a": ["Picking the best word right now might lead to a dead-end on the next word (a greedy choice is locally optimal, not globally optimal)", "The model runs out of parameters", "The compiler blocks greedy choices", "Greedy decoding deletes past words"],
                 "c": 0, "why": "Greedy algorithms make myopic local choices that may miss higher-probability paths later in the sequence."},
                {"q": "What search algorithm explores multiple candidate sequences simultaneously to overcome greedy myopia?",
                 "a": ["Beam Search", "Binary Search", "Linear Search", "Bubble Sort"],
                 "c": 0, "why": "Beam search maintains the top K most probable sequential hypotheses across generation steps."}
            ],
            "You understand the deterministic precision and repetitive limitations of greedy decoding.",
            "Temperature: Controlling Sharpness of the Distribution", "Master the most famous sampling parameter in modern AI."
        ),
        build_lesson(
            3, "temperature-controlling-sharpness", "Temperature: Controlling Sharpness of the Distribution", "Temperature",
            "The mechanics of temperature: dividing logits before Softmax to control the entropy and sharpness of the distribution.",
            "What happens mathematically to the probability distribution when temperature is set very low (e.g. T = 0.2)?",
            ["The distribution becomes extremely sharp and peaked: the highest logit dominates, approaching greedy decoding", "The distribution flattens into complete uniform randomness", "All probabilities become negative", "The model outputs zero tokens"],
            0, "Low temperature sharpens the distribution, concentrating almost all probability mass on the top token.",
            [
                "<p><strong>Temperature ($T$)</strong> is the most widely used knob in generative AI. It is borrowed directly from statistical thermodynamics (the Boltzmann distribution). Temperature controls the <strong>entropy (randomness)</strong> of token sampling by scaling logits <em>before</em> they enter the Softmax function:</p>",
                "$$P(w_i) = \\frac{e^{z_i / T}}{\\sum_j e^{z_j / T}}$$",
                "<p>Let us observe how temperature alters the exact same logits $[10.0, 5.0, 1.0]$:</p>",
                "<ul><li><strong>Low Temperature ($T = 0.2$ - Cold & Sharp):</strong> Scaled logits: $[50.0, 25.0, 5.0]$. The difference is magnified astronomically! Softmax probability for token 1 is $99.99999\\%$. The model becomes nearly deterministic, confident, and factual.</li><li><strong>Standard Temperature ($T = 1.0$ - Natural):</strong> Scaled logits: $[10.0, 5.0, 1.0]$. The model reflects its true unvarnished training probabilities ($99.3\\%$, $0.7\\%$).</li><li><strong>High Temperature ($T = 2.0$ - Hot & Flat):</strong> Scaled logits: $[5.0, 2.5, 0.5]$. The peak is flattened! Token 1 drops to $88\\%$, and lower-ranked tokens get a fighting chance. The model becomes creative, diverse—and eventually hallucinatory gibberish at $T > 1.5$.</li></ul>",
                "<pre><code># The Temperature Spectrum:\n# T = 0.0:  Deterministic, analytical, exact (Code, Math, JSON)\n# T = 0.3:  Focused, conservative, low hallucination (Technical docs)\n# T = 0.7:  Balanced creativity and coherence (Standard chat, blogging)\n# T = 1.2+: High variance, poetic, unpredictable (Brainstorming, wild fiction)</code></pre>",
                "<div class=\"callout\"><p><strong>The Temperature Rule:</strong> As temperature approaches $0$, the distribution becomes a single sharp spike (Argmax). As temperature approaches $\\infty$, the distribution flattens into pure uniform noise.</p></div>"
            ],
            "Temperature Logit Scaling Effect", "How dividing by T changes the probability landscape",
            [
                {"title": "Low Temperature (T = 0.2)", "lines": ["Logits divided by 0.2 (Multiplied by 5)", "Probability spike on #1 candidate", "Conservative, focused, deterministic"]},
                {"title": "Default Temperature (T = 1.0)", "lines": ["Logits unchanged", "Natural language distribution", "Balanced coherence and diversity"]},
                {"title": "High Temperature (T = 2.0)", "lines": ["Logits divided by 2 (Flattened)", "Probability spread across many tokens", "Creative, diverse, but prone to gibberish"]}
            ],
            "The Temperature Dial", "Recommended settings by task",
            [
                {"title": "0.0 - 0.2 (Cold)", "lines": ["SQL queries, Python code, JSON extraction"]},
                {"title": "0.5 - 0.7 (Warm)", "lines": ["Conversational assistants, technical writing"]},
                {"title": "1.0 - 1.5 (Hot)", "lines": ["Creative fiction, poetry, lateral brainstorming"]}
            ],
            "Complete the temperature sentence",
            "Lowering temperature divides logits to make the probability distribution {1}, while raising temperature flattens it toward {2} noise.",
            [
                {"answer": "sharp", "hint": "Concentrated peak on top tokens", "options": ["sharp", "flat", "negative"]},
                {"answer": "uniform", "hint": "Equal probability across all choices", "options": ["uniform", "binary", "compiled"]}
            ],
            [
                {"q": "What setting of temperature is recommended when writing code or compiling SQL queries with an LLM?",
                 "a": ["Low temperature (0.0 to 0.2) to ensure precise syntax and eliminate creative hallucinations", "High temperature (1.8)", "Negative temperature (-1.0)", "Temperature does not affect code"],
                 "c": 0, "why": "Code requires rigid syntactic precision and deterministic logic; low temperature prevents creative errors."},
                {"q": "What happens if you set temperature to 3.0 or higher during generation?",
                 "a": ["The probability distribution becomes almost completely flat, resulting in bizarre, nonsensical, and ungrammatical token salad", "The model becomes a superintelligence", "The model runs in reverse", "The computer processor melts"],
                 "c": 0, "why": "Excessive temperature flattens probabilities, making random low-frequency tokens just as likely as sensible words."},
                {"q": "Does temperature change the order of token rankings (does token #2 ever have higher probability than token #1)?",
                 "a": ["No; temperature scales logits monotonically, so the relative ranking of tokens never changes, only their relative probabilities", "Yes; high temperature reverses the order", "Yes; temperature shuffles tokens", "Only on odd-numbered tokens"],
                 "c": 0, "why": "Dividing all logits by a positive scalar preserves the monotonic order: if z1 > z2, then z1/T > z2/T."},
                {"q": "Where did the concept of 'Temperature' in Softmax originate?",
                 "a": ["Statistical physics and thermodynamics (the Boltzmann distribution modeling energy states of gas molecules)", "Meteorology weather forecasting", "Cooking ovens", "Automobile engines"],
                 "c": 0, "why": "The Softmax temperature formulation is mathematically identical to the Boltzmann distribution in thermal physics."}
            ],
            "You understand the mathematical and behavioral mechanics of the temperature parameter.",
            "Top-K Sampling: Limiting to the Top K Candidates", "Truncate the tail: restrict sampling strictly to the K best tokens."
        ),
        build_lesson(
            4, "top-k-sampling", "Top-K Sampling: Limiting to the Top K Candidates", "Top-K",
            "Truncating the probability tail: Top-K sampling, preventing bizarre hallucinations, and its flat-cutoff limitations.",
            "How does Top-K sampling prevent a language model from generating nonsensical or wildly irrelevant tokens?",
            ["By sorting all tokens by probability and zeroing out everything outside the top K most probable candidates (e.g. K=40)", "By deleting words starting with K", "By running only K iterations of the loop", "By limiting output text to K characters"],
            0, "Top-K truncates the long tail of low-probability vocabulary tokens, eliminating bizarre outliers.",
            [
                "<p>Even with reasonable temperature, a vocabulary of 128,000 tokens has a massive <strong>long tail</strong>. Even if 127,900 tokens each have a tiny $0.0001\\%$ probability, their cumulative sum can equal $10\\%$! Every ten tokens, the model might randomly sample a bizarre, context-breaking word.</p>",
                "<p><strong>Top-K Sampling</strong> (Fan et al., 2018) provides a simple, aggressive truncation filter:</p>",
                "<ul><li><strong>1. Sort Vocabulary:</strong> Rank all 128,000 tokens by probability in descending order.</li><li><strong>2. Keep Top K:</strong> Retain only the top $K$ candidates (typically $K = 40$ or $K = 50$).</li><li><strong>3. Truncate the Tail:</strong> Set the probabilities of all remaining tokens to zero!</li><li><strong>4. Re-normalize:</strong> Re-normalize the top $K$ probabilities so they sum to $1.0$, and sample exclusively from this curated pool.</li></ul>",
                "<pre><code># Top-K Truncation in Python:\nimport numpy as np\n\ndef top_k_sampling(probs, k=40):\n    # 1. Find the top K indices\n    top_k_indices = np.argsort(probs)[-k:]\n    # 2. Zero out everything else\n    filtered_probs = np.zeros_like(probs)\n    filtered_probs[top_k_indices] = probs[top_k_indices]\n    # 3. Re-normalize so sum is 1.0\n    return filtered_probs / np.sum(filtered_probs)</code></pre>",
                "<p>The Limitation of Top-K: <strong>Rigid Thresholding</strong>. If the model is confident and there is only 1 sensible word, Top-K still forces 39 inferior words into the pool! Conversely, if the context is broad and there are 100 valid words, Top-K cuts off 60 great options.</p>",
                "<div class=\"callout\"><p><strong>The Transition:</strong> Because Top-K uses a rigid fixed number of tokens, modern AI largely replaced or paired it with <strong>Top-P (Nucleus) Sampling</strong>.</p></div>"
            ],
            "Top-K Tail Truncation", "Cutting off the low-probability long tail",
            [
                {"title": "Full Vocabulary (128k tokens)", "lines": ["Top 10 tokens: 88% mass", "Long tail of 127,990 tokens: 12% mass", "Tail invites random bizarre hallucinations"]},
                {"title": "Top-K Filter (K = 40)", "lines": ["Keeps only top 40 candidates", "Sets remaining 127,960 to ZERO probability", "Re-normalizes and samples safely"]}
            ],
            "The Fixed-K Dilemma", "Why fixed candidate counts struggle with dynamic confidence",
            [
                {"title": "High Confidence Context", "lines": ["'The capital of France is [Paris]'", "Only 1 valid word; Top-K still keeps 39 bad words!"]},
                {"title": "Low Confidence Context", "lines": ["'She opened the door and saw a...'", "150 valid nouns; Top-K cuts off 110 good words!"]}
            ],
            "Complete the Top-K sampling sentence",
            "Top-K sampling eliminates long-tail hallucinations by zeroing out all tokens outside the top {1} most probable {2}.",
            [
                {"answer": "K", "hint": "The fixed cutoff integer parameter", "options": ["K", "N", "pi"]},
                {"answer": "candidates", "hint": "High-ranking vocabulary tokens", "options": ["candidates", "databases", "compilers"]}
            ],
            [
                {"q": "What is the primary danger of sampling from a full, unfiltered 128,000-token probability distribution?",
                 "a": ["The accumulated probability of thousands of tiny tail tokens will occasionally cause the model to generate a completely bizarre, context-breaking word", "The GPU runs out of power", "The vocabulary expands to 1 million words", "The prompt is deleted"],
                 "c": 0, "why": "The vast long tail can collectively accumulate substantial probability, leading to random gibberish."},
                {"q": "What is the typical default value for K in Top-K sampling configurations?",
                 "a": ["Between 40 and 50", "Exactly 1", "10,000", "0"],
                 "c": 0, "why": "40-50 provides sufficient variety while cutting off bizarre low-probability tokens."},
                {"q": "Why is Top-K considered suboptimal when a model's prediction confidence changes dynamically?",
                 "a": ["It uses a fixed number of tokens K regardless of whether the distribution has 1 obvious answer or 100 plausible options", "It runs 10x slower on GPUs", "It requires floating-point math", "It only works on English words"],
                 "c": 0, "why": "A static K does not adapt to the sharpness or flatness of the model's confidence distribution."},
                {"q": "If you set K = 1 in Top-K sampling, what decoding behavior does it produce?",
                 "a": ["Greedy decoding (Argmax): only the single top-ranked token is kept", "Random noise", "The model halts", "All words are output at once"],
                 "c": 0, "why": "Keeping only the single top candidate (K=1) is mathematically identical to greedy decoding."}
            ],
            "You understand the mechanics and trade-offs of Top-K tail truncation.",
            "Top-P (Nucleus) Sampling: Dynamic Cumulative Probability", "Discover the dynamic sampling standard of modern generative models."
        ),
        build_lesson(
            5, "top-p-nucleus-sampling", "Top-P (Nucleus) Sampling: Dynamic Cumulative Probability", "Top-P Nucleus",
            "Dynamic sampling: Top-P (Nucleus) sampling, cumulative probability mass thresholds, and adaptive candidate pools.",
            "How does Top-P (Nucleus) sampling solve the rigid fixed-count flaw of Top-K sampling?",
            ["It dynamically expands or shrinks the candidate pool based on cumulative probability mass (e.g. top 90%), adapting to model confidence", "It uses the letter P instead of K", "It runs on the nuclear power grid", "It limits output to P paragraphs"],
            0, "Top-P adapts dynamically: when confident, the pool shrinks to 1-2 tokens; when uncertain, it expands to 100.",
            [
                "<p>In 2019, Ari Holtzman and researchers at the University of Washington published <strong>'The Curious Case of Neural Text Degeneration'</strong>, introducing <strong>Top-P (Nucleus) Sampling</strong>. It quickly became the universal standard for sampling from language models.</p>",
                "<p>Instead of keeping a fixed <em>number</em> of tokens (Top-K), Nucleus sampling keeps a dynamic pool based on <strong>Cumulative Probability Mass ($P$)</strong>:</p>",
                "<ul><li><strong>1. Sort Vocabulary:</strong> Rank tokens from highest to lowest probability.</li><li><strong>2. Accumulate Mass:</strong> Sum probabilities from the top until the cumulative total reaches threshold $P$ (typically $P = 0.90$ or $0.95$).</li><li><strong>3. Dynamic Truncation:</strong> Keep only this 'nucleus' of tokens! Discard the rest, re-normalize, and sample.</li></ul>",
                "<pre><code># The Beauty of Top-P Dynamic Sizing (P = 0.90):\n# Case 1: High Confidence (\"The capital of France is...\")\n# - \"Paris\": 92.4% -> Cumulative = 92.4% >= 90% -> Pool size: EXACTLY 1 TOKEN!\n#\n# Case 2: Ambiguous Context (\"She looked into the room and saw a...\")\n# - \"person\": 15%, \"desk\": 12%, \"cat\": 10%, \"chair\": 8% ...\n# -> Pool dynamically expands to 45 tokens to cover 90% mass!</code></pre>",
                "<p>Top-P automatically adapts to the model's confidence: when certain, it acts like greedy decoding; when open-ended, it provides creative variety without ever dipping into the bizarre tail!</p>",
                "<div class=\"callout\"><p><strong>The Universal Setting:</strong> Most frontier APIs (OpenAI, Anthropic) configure `temperature=0.7` and `top_p=0.9` as their standard default pairing for balanced natural text.</p></div>"
            ],
            "The Dynamic Nucleus Pool", "Adapting candidate count to statistical certainty",
            [
                {"title": "High Confidence Context", "lines": ["Top token has 94% probability", "Threshold P=0.90 reached in 1 token", "Pool size = 1 (Deterministic precision)"]},
                {"title": "Open-Ended Context", "lines": ["Probabilities spread broadly (15%, 12%, 10%...)", "Threshold P=0.90 requires 45 tokens", "Pool size = 45 (Rich creative variety)"]}
            ],
            "Top-K vs Top-P Philosophy", "Fixed quantity vs dynamic probability mass",
            [
                {"title": "Top-K (Fixed Count)", "lines": ["Always exactly K candidates", "Blind to whether confidence is sharp or flat"]},
                {"title": "Top-P (Dynamic Mass)", "lines": ["Always exactly P% probability mass", "Pool size expands and contracts organically"]}
            ],
            "Complete the Top-P sentence",
            "Top-P sampling dynamically adjusts candidate pool size by accumulating probability mass until reaching threshold {1}, isolating the {2} of plausible tokens.",
            [
                {"answer": "P", "hint": "Cumulative probability cutoff (e.g. 0.90)", "options": ["P", "K", "T"]},
                {"answer": "nucleus", "hint": "Core group of plausible candidates", "options": ["nucleus", "database", "terminal"]}
            ],
            [
                {"q": "What happens in Top-P sampling (P = 0.90) when the top-ranked token has a 95% probability?",
                 "a": ["The candidate pool consists of only that single top token, because 95% already exceeds the 90% threshold", "The model crashes", "The pool expands to 50 tokens", "The token is deleted"],
                 "c": 0, "why": "When a single token exceeds P, the nucleus pool collapses to size 1, acting deterministically."},
                {"q": "What is the typical recommended value for Top-P in natural text generation?",
                 "a": ["0.90 to 0.95", "0.01", "100.0", "Exactly zero"],
                 "c": 0, "why": "0.90-0.95 retains 90-95% of plausible mass while lopping off the unpredictable 5-10% tail."},
                {"q": "Can you use Temperature and Top-P together in the same API call?",
                 "a": ["Yes; Temperature scales the sharpness of logits first, and Top-P truncates the resulting cumulative probability distribution", "No; using both causes an API error", "Only in Python 2", "Only on local models"],
                 "c": 0, "why": "Temperature reshapes the distribution; Top-P truncates the tail of that reshaped distribution."},
                {"q": "If you want to maximize creativity while strictly preventing bizarre nonsense words, how should you configure parameters?",
                 "a": ["Set a higher temperature (e.g. 0.9 - 1.0) paired with a tight Top-P (e.g. 0.85 - 0.90)", "Set temperature to 5.0 and Top-P to 1.0", "Set temperature to 0.0", "Set Top-P to 0.0"],
                 "c": 0, "why": "Higher temperature encourages diversity, while tight Top-P guarantees bad tail tokens are eliminated."}
            ],
            "You understand the dynamic probability mechanics of Top-P Nucleus sampling.",
            "Frequency and Presence Penalties: Reducing Repetition", "Eliminate phrase looping and encourage lexical diversity."
        ),
        build_lesson(
            6, "frequency-and-presence-penalties", "Frequency and Presence Penalties: Reducing Repetition", "Penalties",
            "Preventing loops: how Frequency Penalties (proportional) and Presence Penalties (one-shot) penalize repeated tokens.",
            "What is the difference between a Frequency Penalty and a Presence Penalty?",
            ["Frequency penalty scales proportionally with how many times a token has appeared; presence penalty applies a flat one-shot penalty if the token appeared at all", "Frequency penalty only applies to vowels", "Presence penalty measures physical distance", "There is no difference"],
            0, "Frequency penalty punishes repeated tokens progressively; presence penalty applies a flat penalty for existing once.",
            [
                "<p>One of the most frustrating failure modes in language generation is the <strong>Repetition Loop</strong>: the model gets stuck in a rut, repeatedly using the same phrase (e.g. <em>'delve into', 'testament to', 'furthermore'</em>) or looping on identical sentences.</p>",
                "<p>To combat repetition, API providers introduce <strong>Logit Penalties</strong>:</p>",
                "<ul><li><strong>Frequency Penalty:</strong> Directly penalizes tokens based on their <strong>count of appearances</strong> in the generated text so far: $\\text{logit}_{new} = \\text{logit} - (c \\times \\text{count})$. The more a token is repeated, the harsher its penalty. Discourages repeating the exact same word multiple times!</li><li><strong>Presence Penalty:</strong> Applies a <strong>flat, one-shot penalty</strong> to any token that has appeared at least once: $\\text{logit}_{new} = \\text{logit} - p$ if $\\text{count} > 0$. Encourages introducing new topics and wider vocabulary!</li></ul>",
                "<pre><code># Applying Logit Penalties in OpenAI API:\nresponse = client.chat.completions.create(\n    model=\"gpt-4o\",\n    messages=[{\"role\": \"user\", \"content\": \"Write an article on renewable energy\"}],\n    frequency_penalty=0.5, # Discourages repeating the word 'energy' 50 times\n    presence_penalty=0.3   # Encourages introducing new related subtopics (solar, wind, grid)\n)</code></pre>",
                "<div class=\"callout\"><p><strong>Warning for Code Generation:</strong> In programming, repeating variable names and keywords (like `def`, `return`, `self`) is mandatory! Setting high penalties on code tasks will cause syntax errors as the model tries to avoid repeating `return`!</p></div>"
            ],
            "Frequency vs Presence Penalty", "Proportional reduction vs one-shot topic branching",
            [
                {"title": "Frequency Penalty (Count-Based)", "lines": ["Penalizes each repetition: - (c * count)", "Word used 5 times gets 5x penalty", "Stops repetitive phrase looping"]},
                {"title": "Presence Penalty (One-Shot)", "lines": ["Flat penalty if count > 0", "Applies equally regardless of repetition count", "Encourages branching into fresh topics"]}
            ],
            "Code Generation Caution", "Why penalties break programming syntax",
            [
                {"title": "Natural Language (Helpful)", "lines": ["Reduces repetitive filler words", "Produces diverse, engaging prose"]},
                {"title": "Code Generation (Dangerous!)", "lines": ["Python requires repeating 'self' & 'def'", "High penalty forces model to invent fake syntax!"]}
            ],
            "Complete the penalty sentence",
            "While frequency penalties scale with token {1} to stop phrase looping, presence penalties apply a flat penalty to encourage new {2}.",
            [
                {"answer": "count", "hint": "Number of times a word has appeared", "options": ["count", "font", "license"]},
                {"answer": "topics", "hint": "Fresh conceptual vocabulary", "options": ["topics", "compilers", "databases"]}
            ],
            [
                {"q": "Why should frequency and presence penalties be kept at 0.0 when generating source code or JSON?",
                 "a": ["Code inherently requires repeating keywords, variable names, and syntax structures (like 'return', 'self', brackets)", "Compilers reject penalized tokens", "Penalties make code run slower", "Penalties are illegal in Python"],
                 "c": 0, "why": "Programming languages rely on repeated identifiers and keywords; penalties break valid syntax."},
                {"q": "What range of values is standard for frequency and presence penalties in the OpenAI API?",
                 "a": ["Between -2.0 and +2.0 (with standard subtle adjustments between 0.1 and 0.5)", "Between 0 and 1,000", "Always exactly 10.0", "Negative numbers are forbidden"],
                 "c": 0, "why": "Values between 0.1 and 0.5 gently discourage repetition without distorting grammar."},
                {"q": "What happens if you set frequency_penalty to +2.0 (maximum)?",
                 "a": ["The model will aggressively contort grammar and invent bizarre synonyms to avoid repeating any word twice", "The model shuts down", "The model outputs only numbers", "The computer restarts"],
                 "c": 0, "why": "Extreme penalties force the model to avoid necessary common words, degrading fluency."},
                {"q": "What is a 'Logit Bias' in model sampling APIs?",
                 "a": ["A dictionary explicitly adding or subtracting a fixed numerical bias to specific target token IDs", "A bias against certain computer brands", "A bias in the training dataset", "A compiler error"],
                 "c": 0, "why": "Logit bias allows developers to forcibly ban (-100) or compel (+100) specific tokens."}
            ],
            "You know how to use frequency and presence penalties to eliminate repetitive text loops.",
            "Random Seeds and Reproducibility in LLM Inference", "Harness deterministic seeds for reproducible evaluations and tests."
        ),
        build_lesson(
            7, "random-seeds-and-reproducibility", "Random Seeds and Reproducibility in LLM Inference", "Seeds & Testing",
            "Controlling randomness: setting seed parameters, system fingerprints, and achieving reproducible inference for testing.",
            "Why is reproducibility challenging in commercial cloud LLM APIs even when fixing the random seed?",
            ["Hardware concurrency, mixture-of-experts routing, and non-deterministic GPU floating-point operations can cause subtle variations", "APIs intentionally randomize results to charge more", "Seeds are deleted every hour", "Python random module is broken"],
            0, "GPU parallel race conditions and sparse MoE routing introduce minor non-determinism even with fixed seeds.",
            [
                "<p>In scientific computing and automated unit testing, <strong>reproducibility</strong> is paramount. If a test fails in CI, you need to be able to reproduce the exact failure locally on the same inputs. But in generative AI, random sampling produces different responses every time.</p>",
                "<p>To achieve reproducible inference, model providers introduced the <strong>Seed parameter</strong>:</p>",
                "<ul><li><strong>The Seed Parameter:</strong> Passing an integer (e.g. `seed=42`) initializes the model's pseudo-random number generator to a fixed state.</li><li><strong>Temperature Zero:</strong> For absolute maximum determinism, pair `seed=42` with `temperature=0.0`.</li><li><strong>System Fingerprint:</strong> Providers return a `system_fingerprint` string in the response. If the provider updates their backend GPU hardware or model weights, the fingerprint changes, alerting you that the deterministic baseline shifted.</li></ul>",
                "<pre><code># Reproducible API Request in Python:\nresponse = client.chat.completions.create(\n    model=\"gpt-4o\",\n    messages=[{\"role\": \"user\", \"content\": \"Sort these numbers: 8, 2, 9, 1\"}],\n    temperature=0.0,\n    seed=12345\n)\n# Inspect fingerprint to verify hardware consistency:\nprint(response.system_fingerprint)  # e.g. \"fp_44709d6fcb\"\nprint(response.choices[0].message.content) # Deterministic result!</code></pre>",
                "<div class=\"callout\"><p><strong>The Testing Standard:</strong> In automated CI regression suites, always specify `temperature=0.0` and a fixed `seed`. This eliminates test flakiness caused by stochastic sampling variation.</p></div>"
            ],
            "Deterministic Seeding Architecture", "Locking down PRNG states for reproducible tests",
            [
                {"title": "Unseeded Request (Random)", "lines": ["temperature = 0.7, no seed", "Different phrasing on every run", "Flaky in automated test suites"]},
                {"title": "Seeded Request (Deterministic)", "lines": ["temperature = 0.0, seed = 42", "Identical token selection every time", "Reliable automated CI testing"]}
            ],
            "The System Fingerprint Indicator", "Detecting backend infrastructure updates",
            [
                {"title": "Consistent Fingerprint (fp_4470)", "lines": ["Same backend weights & GPU kernel", "Guaranteed deterministic parity"]},
                {"title": "Shifted Fingerprint (fp_9182)", "lines": ["Provider updated backend hardware/MoE", "Alerts developers to baseline change"]}
            ],
            "Complete the seed reproducibility sentence",
            "Setting a fixed random {1} and temperature zero locks down pseudo-random sampling for reproducible automated {2} suites.",
            [
                {"answer": "seed", "hint": "PRNG initialization integer", "options": ["seed", "password", "token"]},
                {"answer": "test", "hint": "Automated regression verification", "options": ["test", "marketing", "database"]}
            ],
            [
                {"q": "What does a change in the 'system_fingerprint' field of an LLM response indicate?",
                 "a": ["The provider updated backend hardware configurations, quantization kernels, or model serving weights", "The user changed their password", "The computer was infected by a virus", "The API token expired"],
                 "c": 0, "why": "System fingerprints identify the specific backend serving configuration that generated the response."},
                {"q": "Why is fixing the seed parameter essential when running automated regression evaluations?",
                 "a": ["It ensures that metric changes reflect code or prompt modifications rather than random sampling fluctuations", "It makes the model run for free", "It turns off billing", "It translates text to HTML"],
                 "c": 0, "why": "Controlled seeds eliminate stochastic noise from benchmark comparisons."},
                {"q": "Can two different model versions (e.g. gpt-4o vs gpt-4o-mini) produce identical outputs from the same seed?",
                 "a": ["No; different models have different parameter weights, layer depths, and logits, resulting in completely different outputs", "Yes; seeds guarantee identical text across all AI", "Only if written in Python", "Only on Sundays"],
                 "c": 0, "why": "Seeds only control the random generator; different weights generate different logit distributions."},
                {"q": "Why do floating-point race conditions on parallel GPUs occasionally introduce subtle non-determinism?",
                 "a": ["Floating-point addition is non-associative: (A + B) + C can differ from A + (B + C) in the last bit depending on thread arrival order", "GPUs have broken math units", "Computers forget numbers", "Threads run backwards"],
                 "c": 0, "why": "Non-associative floating-point summation across parallel CUDA threads can cause subtle round-off deviations."}
            ],
            "You know how to use random seeds and temperature zero for reproducible evaluations.",
            "Choosing Sampling Parameters for Code vs Creative Tasks", "Synthesize sampling configurations tailored to specific engineering tasks."
        ),
        build_lesson(
            8, "choosing-sampling-parameters-tasks", "Choosing Sampling Parameters for Code vs Creative Tasks", "Sampling Recipes",
            "Synthesizing sampling parameters: recommended production configurations for coding, extraction, agents, and creative writing.",
            "Which parameter configuration is optimal for an agent executing automated code generation and JSON extraction?",
            ["temperature=0.0, top_p=1.0, frequency_penalty=0.0, presence_penalty=0.0", "temperature=1.5, top_p=0.5, frequency_penalty=2.0", "temperature=0.8, top_p=0.2, presence_penalty=1.5", "All parameters set to 10.0"],
            0, "Code and structured data require zero temperature, no penalties, and deterministic greedy decoding.",
            [
                "<p>Configuring sampling parameters is not an aesthetic choice; it is an engineering calibration. The optimal setting depends entirely on the <strong>Entropy of the Task</strong>: does the task demand strict factual precision, or creative lateral exploration?</p>",
                "<p>Here are the battle-tested production configurations for four core archetypes:</p>",
                "<ul><li><strong>1. Code Generation & JSON Extraction (Deterministic):</strong> `temperature=0.0`, `top_p=1.0`, `penalties=0.0`. Eliminates syntax errors, prevents hallucinated keys, and enforces rigid schema adherence.</li><li><strong>2. AI Agent Reasoning & Tool Calling (Analytical):</strong> `temperature=0.1 - 0.2`, `top_p=0.9`. Keeps tool arguments reliable while allowing slight flexibility for multi-step planning.</li><li><strong>3. Technical Documentation & Summarization (Focused):</strong> `temperature=0.3 - 0.5`, `top_p=0.9`, `presence_penalty=0.1`. Clear, professional tone with low hallucination risk.</li><li><strong>4. Creative Writing & Brainstorming (Exploratory):</strong> `temperature=0.8 - 1.0`, `top_p=0.95`, `presence_penalty=0.3`, `frequency_penalty=0.3`. High lexical diversity, engaging prose, and lateral conceptual hops.</li></ul>",
                "<pre><code># Production Parameter Reference Matrix:\n# Task Type            | Temp | Top-P | Freq | Pres | Notes\n# --------------------------------------------------------------------\n# Code / SQL / JSON    | 0.0  | 1.0   | 0.0  | 0.0  | Pure determinism\n# Tool-Calling Agent   | 0.2  | 0.9   | 0.0  | 0.0  | Reliable parameters\n# Tech Docs / Support  | 0.4  | 0.9   | 0.1  | 0.1  | Clear & grounded\n# Creative Fiction     | 0.9  | 0.95  | 0.3  | 0.3  | Diverse vocabulary</code></pre>",
                "<div class=\"callout\"><p><strong>The Final Golden Rule:</strong> When in doubt, tune <strong>Temperature</strong> first. Keep Top-P at 0.9-1.0 and penalties at 0.0 until you have a specific, proven reason to adjust them.</p></div>"
            ],
            "The Sampling Parameter Matrix", "Tailoring parameters to task entropy",
            [
                {"title": "Code & JSON (Zero Entropy)", "lines": ["Temp: 0.0, Top-P: 1.0, Penalties: 0.0", "Zero syntax errors, 100% deterministic"]},
                {"title": "Agent Tool Calling (Low Entropy)", "lines": ["Temp: 0.2, Top-P: 0.9, Penalties: 0.0", "Stable tool arguments, focused planning"]},
                {"title": "Creative Writing (High Entropy)", "lines": ["Temp: 0.9, Top-P: 0.95, Penalties: 0.3", "Rich vocabulary, high conceptual diversity"]}
            ],
            "Single Parameter Tuning Priority", "Which knobs to turn first",
            [
                {"title": "Primary Knob: Temperature", "lines": ["Controls 90% of behavior", "Adjust between 0.0 and 1.0 first"]},
                {"title": "Secondary Knob: Top-P", "lines": ["Trim tail tokens if needed (0.90)", "Leave at default until temp is tuned"]}
            ],
            "Complete the sampling recipe sentence",
            "For structured code and data extraction, use temperature {1} with zero penalties, while creative tasks benefit from temperature {2} and slight penalties.",
            [
                {"answer": "0.0", "hint": "Zero temperature greedy decoding", "options": ["0.0", "1.0", "5.0"]},
                {"answer": "0.8", "hint": "Higher exploratory temperature", "options": ["0.8", "0.0", "-1.0"]}
            ],
            [
                {"q": "Why should frequency and presence penalties be avoided during JSON schema generation?",
                 "a": ["Penalties punish repeating keys like 'name', 'type', or brackets, causing the model to invent broken or mangled JSON syntax", "Penalties make JSON files too large", "JSON is only supported in Python", "Penalties turn off internet access"],
                 "c": 0, "why": "Structured data requires repeating identical keys and punctuation; penalties break schema validity."},
                {"q": "What is the single most important parameter to adjust when a model produces repetitive, boring responses in chat?",
                 "a": ["Increase temperature from 0.2 to 0.7-0.8 and add a slight presence penalty (e.g. 0.2)", "Set temperature to 0.0", "Turn off the computer", "Delete the system prompt"],
                 "c": 0, "why": "Modest temperature increases and presence penalties encourage topic diversity."},
                {"q": "How does setting temperature=0.2 benefit autonomous coding agents that invoke tools?",
                 "a": ["It prevents erratic syntax errors while giving the model slight flexibility in multi-step plan formulation", "It makes tool calls free", "It compiles code into assembly", "It allows tools to run without permissions"],
                 "c": 0, "why": "Low temperature keeps tool argument schemas stable while allowing reasoned planning."},
                {"q": "What parameter controls the maximum length of generated text?",
                 "a": ["max_tokens (or max_completion_tokens)", "temperature", "top_p", "seed"],
                 "c": 0, "why": "max_tokens caps the number of output tokens the model is permitted to generate."}
            ],
            "You have completed the Inference, Temperature & Sampling course.",
            "Next Course: Model Selection & Trade-offs", "Learn how to choose between frontier, mid-tier, and small models based on cost, latency, and capability."
        )
    ]

    glossary = [
        {"id": "logits-math", "title": "Logits & Softmax", "terms": [
            {"term": "Logits", "def": "The unnormalized raw output scores produced by multiplying the final hidden state by the vocabulary matrix.", "lesson": 1, "tags": ["inference", "math"]},
            {"term": "Softmax Function", "def": "An exponential normalization function converting real-valued logits into a probability distribution summing to 1.0.", "lesson": 1, "tags": ["math", "probabilities"]},
            {"term": "Greedy Decoding", "def": "A deterministic decoding strategy that selects the single token with the highest probability (argmax) at each step.", "lesson": 2, "tags": ["sampling", "decoding"]}
        ]},
        {"id": "temperature-tail", "title": "Temperature & Truncation", "terms": [
            {"term": "Temperature", "def": "A hyperparameter dividing logits before Softmax to control the entropy, sharpness, and randomness of the distribution.", "lesson": 3, "tags": ["sampling", "temperature"]},
            {"term": "Top-K Sampling", "def": "A truncation filter zeroing out all tokens outside the top K most probable candidates before sampling.", "lesson": 4, "tags": ["sampling", "top-k"]},
            {"term": "Top-P (Nucleus)", "def": "A dynamic sampling method keeping the smallest pool of top tokens whose cumulative probability mass exceeds P.", "lesson": 5, "tags": ["sampling", "top-p"]}
        ]},
        {"id": "penalties", "title": "Penalties & Control", "terms": [
            {"term": "Frequency Penalty", "def": "A logit deduction proportional to how many times a token has appeared, discouraging repetitive phrase loops.", "lesson": 6, "tags": ["sampling", "penalties"]},
            {"term": "Presence Penalty", "def": "A flat one-shot logit penalty applied to any token that has appeared at least once, encouraging new topics.", "lesson": 6, "tags": ["sampling", "penalties"]},
            {"term": "Logit Bias", "def": "A dictionary adding or subtracting fixed numerical scores to specific token IDs to compel or ban them.", "lesson": 6, "tags": ["sampling", "control"]}
        ]},
        {"id": "reproducibility", "title": "Reproducibility & Production", "terms": [
            {"term": "Random Seed", "def": "An initialization integer that locks down pseudo-random number generator state for reproducible sampling.", "lesson": 7, "tags": ["testing", "reproducibility"]},
            {"term": "System Fingerprint", "def": "A response identifier indicating the backend serving hardware and model weight configuration.", "lesson": 7, "tags": ["infrastructure", "metrics"]},
            {"term": "Max Tokens", "def": "A hard upper bound capping the maximum number of output tokens a model is permitted to generate.", "lesson": 8, "tags": ["api", "budget"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "Deterministic Coding Configuration",
            "label": "Zero temperature for code & JSON",
            "code": "response = client.chat.completions.create(\n    model=\"gpt-4o\",\n    messages=[...],\n    temperature=0.0,       # Deterministic greedy decoding\n    top_p=1.0,\n    frequency_penalty=0.0, # Zero penalties to preserve syntax\n    presence_penalty=0.0,\n    seed=42\n)",
            "lessonN": 8, "lessonSlug": "choosing-sampling-parameters-tasks", "lessonTitle": "Choosing Sampling Parameters for Code vs Creative Tasks"
        },
        {
            "title": "Natural Conversational Configuration",
            "label": "Balanced coherence and diversity",
            "code": "response = client.chat.completions.create(\n    model=\"gpt-4o\",\n    messages=[...],\n    temperature=0.7,\n    top_p=0.9,\n    presence_penalty=0.1\n)",
            "lessonN": 8, "lessonSlug": "choosing-sampling-parameters-tasks", "lessonTitle": "Choosing Sampling Parameters for Code vs Creative Tasks"
        },
        {
            "title": "Stable Softmax with Temperature",
            "label": "NumPy implementation",
            "code": "import numpy as np\ndef stable_softmax(logits, temperature=1.0):\n    scaled = logits / max(temperature, 1e-5)\n    exp_s = np.exp(scaled - np.max(scaled))\n    return exp_s / np.sum(exp_s)",
            "lessonN": 1, "lessonSlug": "logits-and-softmax-probabilities", "lessonTitle": "The Logits Vector and Softmax Probabilities"
        },
        {
            "title": "Top-P (Nucleus) Truncation Algorithm",
            "label": "Cumulative mass filtering",
            "code": "def top_p_filter(probs, p=0.9):\n    sorted_indices = np.argsort(probs)[::-1]\n    sorted_probs = probs[sorted_indices]\n    cum_probs = np.cumsum(sorted_probs)\n    # Keep tokens where previous cumulative sum is < p:\n    cutoff = cum_probs > p\n    cutoff[1:] = cutoff[:-1]\n    cutoff[0] = False\n    sorted_probs[cutoff] = 0.0\n    return sorted_probs / np.sum(sorted_probs)",
            "lessonN": 5, "lessonSlug": "top-p-nucleus-sampling", "lessonTitle": "Top-P (Nucleus) Sampling: Dynamic Cumulative Probability"
        }
    ]

    course_data = {
        "id": "inference-sampling",
        "title": "Inference, Temperature & Sampling",
        "num": 68,
        "emoji": "🎲",
        "desc": "How a model picks the next token, and how temperature, top-p and seeds change the output.",
        "topics": ["Inference", "Logits", "Softmax", "Greedy Decoding", "Temperature", "Top-K", "Top-P Nucleus", "Penalties", "Reproducibility"],
        "mission": "# Mission — Inference, Temperature & Sampling\n\nMaster the final mile of text generation. Understand how raw logits transform into Softmax probabilities, explore the precision and repetition risks of greedy decoding, control distribution entropy with temperature, truncate long tails with Top-K and dynamic Top-P (Nucleus) sampling, eliminate repetitive phrase ruts with frequency and presence penalties, achieve reproducible test runs with random seeds, and select optimal sampling recipes across software engineering tasks.",
        "notes": "# Notes — Inference, Temperature & Sampling\n\nCode requires temperature 0.0 and zero penalties to prevent broken syntax. Tailor your sampling parameters to task entropy.",
        "resources": "# Resources — Inference, Temperature & Sampling\n\n- Ari Holtzman et al., *The Curious Case of Neural Text Degeneration (Top-P)*\n- Angela Fan et al., *Hierarchical Neural Story Generation (Top-K)*\n- OpenAI, *API Reference: Sampling Parameters*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

# ==============================================================================
# COURSE 69: model-selection
# ==============================================================================
def make_course_69():
    lessons = [
        build_lesson(
            1, "multi-model-landscape-tiers", "The Multi-Model Landscape: Frontier vs Mid-Tier vs Small", "Model Landscape",
            "Navigating the tiered model landscape: Frontier flagship models, Mid-tier workhorses, and Small edge models.",
            "What characterizes 'Mid-Tier' models (like Claude 3.5 Haiku, GPT-4o-mini, or Llama 3 8B) in production engineering?",
            ["They deliver 90% of flagship intelligence at 1/10th the cost and 3x faster throughput, making them ideal for high-volume tasks", "They only run on smartphones", "They are obsolete models from 2019", "They can only output numbers"],
            0, "Mid-tier models offer exceptional cost-performance ratios for classification, extraction, and routine tasks.",
            [
                "<p>A common rookie mistake in software engineering is using the most expensive, frontier model (like GPT-4o or Claude 3.5 Sonnet) for every single API call. Sending a simple sentiment classification or JSON format check to a frontier model is like hiring a senior architect to paint a fence.</p>",
                "<p>Modern architecture organizes models into three distinct tiers:</p>",
                "<ul><li><strong>1. Frontier Flagship Models (Top Tier):</strong> GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro. Maximum reasoning, complex coding, multi-file architecture, and nuanced reasoning. Expensive and slower, but peerless for hard problems.</li><li><strong>2. Mid-Tier Workhorses (Middle Tier):</strong> GPT-4o-mini, Claude 3.5 Haiku, Llama 3 70B. Blazing fast (100+ tokens/sec), 80-90% cheaper, and easily handles 85% of daily software tasks: classification, extraction, summarization, and routine CRUD routes.</li><li><strong>3. Small / Edge Models (Bottom Tier):</strong> Llama 3 8B, Mistral 7B, Phi-3. Run locally on laptops or cheap edge instances. Zero API fees, 100% data privacy, ideal for autocomplete and local drafting.</li></ul>",
                "<pre><code># The Multi-Model Routing Architecture:\n# If task == \"Multi-file architectural refactoring\" -> Route to Claude 3.5 Sonnet ($3.00/M)\n# If task == \"Extract customer order from email\"     -> Route to GPT-4o-mini ($0.15/M - 20x cheaper!)\n# If task == \"Autocomplete variable name\"           -> Route to local Llama 3 8B ($0.00)</code></pre>",
                "<div class=\"callout\"><p><strong>The Multi-Model Principle:</strong> A production architecture is never single-model. Route each query to the smallest, fastest model capable of reliably solving that specific task.</p></div>"
            ],
            "The Three-Tier Model Hierarchy", "Matching capability to task requirements",
            [
                {"title": "Frontier Flagship (GPT-4o / Sonnet)", "lines": ["Deep architectural reasoning, complex multi-file coding", "Cost: $3.00 - $15.00 / M tokens, Latency: Moderate"]},
                {"title": "Mid-Tier Workhorse (Haiku / 4o-mini)", "lines": ["Extraction, classification, routine summaries", "Cost: $0.15 - $0.80 / M tokens (90% cheaper!), Latency: Fast"]},
                {"title": "Small / Edge (Llama 8B / Phi-3)", "lines": ["Autocomplete, local private drafting", "Cost: $0.00 (On-premise), Latency: Instant"]}
            ],
            "Intelligent Query Routing", "Slashing bills while preserving quality",
            [
                {"title": "User Query Arrives", "lines": ["Router evaluates task complexity", "Matches task to tier"]},
                {"title": "Trivial Extraction", "lines": ["Dispatched to Mid-Tier model", "Saves 95% API cost"]},
                {"title": "Complex Reasoning", "lines": ["Dispatched to Frontier model", "Solves deep challenge"]}
            ],
            "Complete the model landscape sentence",
            "Modern architectures use multi-model routing, sending routine extraction to {1} models while reserving {2} models for deep reasoning.",
            [
                {"answer": "mid-tier", "hint": "Fast, cheap models like 4o-mini or Haiku", "options": ["mid-tier", "quantum", "analog"]},
                {"answer": "frontier", "hint": "Flagship models like Sonnet or GPT-4o", "options": ["frontier", "deprecated", "offline"]}
            ],
            [
                {"q": "What is the primary financial advantage of using GPT-4o-mini or Claude 3.5 Haiku over frontier flagships?",
                 "a": ["They cost 80% to 95% less per million tokens, drastically lowering operating costs at scale", "They are completely free forever", "They run on solar power", "They pay dividends to developers"],
                 "c": 0, "why": "Mid-tier models deliver massive price reductions, making high-volume applications viable."},
                {"q": "For which task is a Frontier model (like Claude 3.5 Sonnet) strictly necessary?",
                 "a": ["Synthesizing complex multi-file architectural refactorings and subtle distributed system bug fixes", "Capitalizing the first letter of a name", "Counting the words in a sentence", "Translating single words"],
                 "c": 0, "why": "Deep multi-file reasoning and complex logic demand the highest capability tier."},
                {"q": "What is 'Model Cascading' (or Fallback Routing)?",
                 "a": ["Attempting a task with a fast, cheap model first, and automatically escalating to a frontier model only if validation fails", "Running ten models at the same time and averaging words", "Cascading style sheets for AI", "Deleting slow models"],
                 "c": 0, "why": "Cascading resolves the vast majority of requests cheaply while preserving a safety net."},
                {"q": "How does using smaller models improve user-facing application latency?",
                 "a": ["Smaller models have vastly higher tokens-per-second generation speeds and lower time-to-first-token latency", "Smaller models run on smaller cables", "Smaller models delete half the words", "Smaller models bypass the internet"],
                 "c": 0, "why": "Smaller parameter counts reduce matrix multiplication overhead, speeding up generation throughput."}
            ],
            "You understand the three-tier model landscape and how to route tasks effectively.",
            "Capability Benchmarks (MMLU, HumanEval, SWE-bench) vs Real World", "Interpret AI benchmarks critically and identify benchmark gaming."
        ),
        build_lesson(
            2, "benchmarks-vs-real-world", "Capability Benchmarks: MMLU, HumanEval, SWE-bench vs Real World", "Benchmarks",
            "Evaluating AI benchmarks critically: MMLU, HumanEval, GSM8K, SWE-bench, and understanding benchmark contamination.",
            "Why do high scores on coding benchmarks like HumanEval often fail to translate to success in real-world software engineering?",
            ["HumanEval tests isolated, single-function Python algorithmic puzzles, whereas real engineering requires navigating large multi-file codebases", "HumanEval was written by humans", "HumanEval is too difficult for any model", "HumanEval only tests HTML"],
            0, "Isolated algorithmic puzzles do not evaluate repository navigation, tool calling, or architectural maintenance.",
            [
                "<p>Every AI model release is accompanied by colorful bar charts claiming state-of-the-art benchmark supremacy. But seasoned software engineers know that <strong>benchmark performance $\\neq$ real-world capability</strong>.</p>",
                "<p>Understanding standard industry benchmarks:</p>",
                "<ul><li><strong>MMLU (Massive Multitask Language Understanding):</strong> Multiple-choice exam questions across 57 subjects (history, medicine, law). Good for general knowledge breadth, but vulnerable to contamination (models memorizing the questions!).</li><li><strong>HumanEval & MBPP:</strong> 164 simple standalone Python function problems (e.g. reverse a string, check prime). Easily gamed, and unrepresentative of real multi-file software engineering.</li><li><strong>GSM8K & MATH:</strong> Grade-school and competition math word problems evaluating multi-step reasoning.</li><li><strong>SWE-bench (Software Engineering Benchmark):</strong> The modern gold standard! Models are given real GitHub issues from open-source repositories (Django, SymPy) and must resolve the issue by navigating files, writing diffs, and passing real test suites.</li></ul>",
                "<pre><code># Benchmark Hierarchy for Software Engineering:\n# 1. HumanEval: Isolated 5-line functions   -> LOW real-world correlation\n# 2. RepoBench: Cross-file completion        -> MODERATE correlation\n# 3. SWE-bench: Full GitHub issue resolution -> HIGH real-world correlation!\n# (SWE-bench measures true agentic navigation, tool calling, and patch verification!)</code></pre>",
                "<div class=\"callout\"><p><strong>Benchmark Contamination:</strong> When evaluating models, beware of 'test set contamination': models trained on web crawls may have already memorized benchmark questions and answers during pre-training!</p></div>"
            ],
            "Benchmark Spectrum", "Simple puzzles vs real-world repository tasks",
            [
                {"title": "HumanEval (Isolated)", "lines": ["164 single-function puzzles", "Zero repository context", "Easily saturated (models score 90%+)"]},
                {"title": "SWE-bench (Realistic)", "lines": ["Real GitHub issues & pull requests", "Full multi-file codebase navigation", "True test of software engineering agency"]}
            ],
            "The Contamination Risk", "Memorization vs true reasoning",
            [
                {"title": "Contaminated Model", "lines": ["Pre-trained on benchmark test files", "Scores 95% on test, fails on private code"]},
                {"title": "Clean Evaluation", "lines": ["Tested on private internal benchmarks", "True measure of production utility"]}
            ],
            "Complete the benchmark sentence",
            "While HumanEval measures isolated puzzle coding, {1} provides a realistic evaluation by testing real GitHub issue resolution across multi-file {2}.",
            [
                {"answer": "SWE-bench", "hint": "Software Engineering Benchmark", "options": ["SWE-bench", "HTML5", "Word2Vec"]},
                {"answer": "repositories", "hint": "Complete codebases with tests", "options": ["repositories", "terminals", "keyboards"]}
            ],
            [
                {"q": "What is 'Benchmark Contamination' in machine learning evaluation?",
                 "a": ["When benchmark test questions or solutions inadvertently appear in the model's pre-training data corpus, allowing memorization", "When a computer virus infects the test runner", "When benchmarks are run on dirty hardware", "When test files have spelling errors"],
                 "c": 0, "why": "Contamination enables models to cheat by recalling memorized questions rather than reasoning."},
                {"q": "What makes SWE-bench significantly harder for AI models than HumanEval?",
                 "a": ["The model must explore a full repository, understand existing architecture, edit multiple files, and pass unit tests", "SWE-bench is written in Latin", "SWE-bench has no internet connection", "SWE-bench uses encrypted code"],
                 "c": 0, "why": "SWE-bench requires realistic repository exploration, dependency tracking, and patch generation."},
                {"q": "Why should engineering teams build their own private internal eval benchmarks?",
                 "a": ["Private benchmarks evaluate the exact languages, frameworks, and domain conventions unique to your proprietary codebase", "Private benchmarks are legally required", "Public benchmarks cost $10,000 per run", "To hide results from competitors"],
                 "c": 0, "why": "Internal benchmarks measure real performance on your actual proprietary stack without contamination."},
                {"q": "What does a score of 40% on SWE-bench Verified indicate?",
                 "a": ["The model autonomously resolved 40% of real, complex GitHub bug issues from popular open-source projects", "The model failed 60% of spelling tests", "The model operates at 40% speed", "The model memory is 40% full"],
                 "c": 0, "why": "SWE-bench Verified measures complete bug resolution on human-validated real GitHub issues."}
            ],
            "You know how to critically evaluate AI capability benchmarks and separate hype from engineering reality.",
            "Latency vs Intelligence: Time-to-First-Token and Throughput", "Balance cognitive capability with user-facing latency requirements."
        ),
        build_lesson(
            3, "latency-vs-intelligence-tradeoffs", "Latency vs Intelligence: Time-to-First-Token and Throughput", "Latency Trade-offs",
            "Balancing intelligence and latency: Time-to-First-Token (TTFT), inter-token latency, and user experience psychology.",
            "How does model size (parameter count) impact generation throughput and latency?",
            ["Larger models require significantly more GPU memory bandwidth and computation per token, resulting in slower throughput and higher latency", "Larger models run faster because they are smarter", "Parameter count has zero effect on latency", "Smaller models take more memory"],
            0, "Inference latency scales with parameter size and memory bandwidth; larger models are inherently slower.",
            [
                "<p>In product development, <strong>speed is a feature</strong>. A response that takes 12 seconds to arrive—even if brilliant—destroys user flow. In user interface psychology, any delay over 1 second breaks a user's conversational flow state; any delay over 10 seconds causes users to switch tabs or abandon the task.</p>",
                "<p>Every engineering architectural decision balances <strong>Intelligence vs Latency</strong>:</p>",
                "<ul><li><strong>Interactive Typing (Autocomplete):</strong> Latency target: $&lt; 100\\text{ms}$. Only small local models (1B - 8B) or specialized completion engines can achieve this. A frontier model is 20x too slow!</li><li><strong>Interactive Chat & Search:</strong> Latency target: TTFT $&lt; 800\\text{ms}$, throughput $&gt; 50\\text{ tokens/sec}$. Mid-tier models (Haiku, 4o-mini) excel here.</li><li><strong>Deep Asynchronous Tasks (Refactoring, Audits, PR Reviews):</strong> Latency target: 30 seconds to 5 minutes. Use the largest frontier or reasoning models (o1, Sonnet) without latency anxiety, because the user is not actively waiting on an interactive cursor.</li></ul>",
                "<pre><code># Latency-Intelligence Mapping Matrix:\n# Task Archetype         | Latency Target | Recommended Model Tier\n# -----------------------------------------------------------------\n# Inline Autocomplete    | < 150ms        | Small / Speculative (8B)\n# Interactive Search     | < 1.0s         | Mid-Tier (Haiku / 4o-mini)\n# Coding Agent Loop      | 3s - 15s       | Frontier (Claude 3.5 Sonnet / 4o)\n# Complex Math / Debug   | 30s - 2 min    | Reasoning (o1 / DeepSeek R1)</code></pre>",
                "<div class=\"callout\"><p><strong>Perceived Latency:</strong> Always <strong>stream tokens</strong> via Server-Sent Events (SSE). Streaming text starting in 500ms feels instantaneous, whereas waiting 6 seconds for a full block feels agonizingly slow.</p></div>"
            ],
            "The Latency vs Intelligence Spectrum", "Matching response deadlines to model scale",
            [
                {"title": "Inline Autocomplete (< 150ms)", "lines": ["Small edge models (1B - 8B)", "Sub-millisecond token streaming"]},
                {"title": "Interactive Chat (< 1s TTFT)", "lines": ["Mid-tier workhorses (Haiku / 4o-mini)", "Smooth streaming, highly responsive"]},
                {"title": "Deep Asynchronous (1 - 5 min)", "lines": ["Frontier reasoning models (o1 / Sonnet)", "Background processing, maximum intellect"]}
            ],
            "The Power of Token Streaming", "Perception of latency via Server-Sent Events",
            [
                {"title": "Buffered Full Response (Slow)", "lines": ["User stares at spinner for 6 seconds", "Feels sluggish and unresponsive"]},
                {"title": "Streaming Tokens (SSE) (Fast)", "lines": ["First word appears in 400ms", "User reads while rest generates (Feels instant!)"]}
            ],
            "Complete the latency trade-off sentence",
            "Inline autocomplete demands low-latency {1} models under 150ms, while deep architectural planning justifies high-latency {2} models.",
            [
                {"answer": "small", "hint": "Compact models with fast throughput", "options": ["small", "frontier", "quantum"]},
                {"answer": "reasoning", "hint": "Deep deliberation models like o1 or Sonnet", "options": ["reasoning", "binary", "terminal"]}
            ],
            [
                {"q": "What is 'Speculative Decoding' in modern inference optimization?",
                 "a": ["Using a tiny, ultra-fast model to draft candidate tokens, which a larger model verifies in parallel in a single forward pass", "Speculating on cryptocurrency with AI", "Guessing user passwords", "Running models on speculative stock markets"],
                 "c": 0, "why": "Speculative decoding accelerates generation by 2x-3x using small draft models verified by large models."},
                {"q": "Why does streaming responses via Server-Sent Events (SSE) improve perceived user latency?",
                 "a": ["The user begins reading immediately upon Time-to-First-Token, masking the total duration of generation", "Streaming makes the internet connection faster", "Streaming uses fewer tokens", "Streaming compresses text"],
                 "c": 0, "why": "Immediate visual feedback keeps users engaged while generation proceeds."},
                {"q": "What hardware metric primarily bounds tokens-per-second throughput during LLM decoding?",
                 "a": ["GPU High-Bandwidth Memory (HBM) bandwidth (GB/sec)", "The size of the computer monitor", "The hard drive spindle speed", "The room temperature"],
                 "c": 0, "why": "Autoregressive decoding is memory-bandwidth bound: weights must be read from VRAM for every token."},
                {"q": "What should an engineer do if a customer-facing chatbot is taking 8 seconds to respond?",
                 "a": ["Switch the routing to a faster mid-tier model (like 4o-mini or Haiku) and enable token streaming", "Ask users to wait patiently", "Increase prompt length", "Add more if-statements"],
                 "c": 0, "why": "Mid-tier models and streaming restore sub-second interactive responsiveness."},
            ],
            "You know how to navigate the latency-intelligence trade-off across application tiers.",
            "Cost Modeling: Input Tokens, Output Tokens, and Batch API", "Build quantitative financial cost models for AI workloads."
        ),
        build_lesson(
            4, "cost-modeling-tokens-batch-api", "Cost Modeling: Input Tokens, Output Tokens, and Batch API", "Cost Modeling",
            "Financial engineering for AI: building cost models, calculating blended unit costs, and leveraging Batch API discounts.",
            "What is 'Blended Token Cost' when modeling the operating expenses of an AI feature?",
            ["The weighted average cost per query incorporating both input tokens and higher-priced output tokens across real usage patterns", "The price of electricity in blended energy grids", "The cost of combining Python and JavaScript", "The salary of software engineers"],
            0, "Blended cost models calculate real-world unit expenses based on input-to-output ratios.",
            [
                "<p>Building an AI prototype is cheap; scaling it to 100,000 daily active users can bankrupt a startup if token economics are not modeled accurately. A naive calculation based on headline prices will miss the fact that <strong>output tokens are 3x to 5x more expensive</strong> and conversation history accumulates quadratically.</p>",
                "<p>To construct a professional <strong>Unit Cost Model</strong>:</p>",
                "<ul><li><strong>1. Measure Input-to-Output Ratio ($R_{I/O}$):</strong> For search/RAG, inputs dominate ($10:1$ ratio: 2,000 input tokens, 200 output tokens). For code generation, outputs are heavier ($2:1$ ratio).</li><li><strong>2. Incorporate Prompt Caching:</strong> If your architecture uses static system prefixes, discount cached input tokens by 50-90%!</li><li><strong>3. Leverage Batch APIs for Asynchronous Workloads:</strong> If tasks do not require real-time responses (e.g. nightly code audits, bulk scraping summaries), use Batch APIs to get an immediate <strong>50% discount</strong> across the board.</li></ul>",
                "<pre><code># Quantitative Cost Modeling in Python:\ndef calculate_monthly_cost(daily_queries, input_toks, output_toks, in_price_m, out_price_m, cache_hit_rate=0.0):\n    # Apply 90% discount on cached inputs:\n    effective_in_price = (in_price_m * (1 - cache_hit_rate)) + (in_price_m * 0.10 * cache_hit_rate)\n    cost_per_query = (input_toks / 1e6 * effective_in_price) + (output_toks / 1e6 * out_price_m)\n    monthly_cost = daily_queries * cost_per_query * 30\n    return round(monthly_cost, 2)\n\n# Example: 50k queries/day, 4k input, 300 output with GPT-4o-mini (80% cache hit):\n# Monthly total: only $81.00! Scalable and sustainable!</code></pre>",
                "<div class=\"callout\"><p><strong>The Business Rule:</strong> Calculate unit cost per customer transaction before writing code. If an AI call costs $0.05 and your customer pays $0.02 per action, your business model is upside-down!</p></div>"
            ],
            "Unit Cost Modeling Framework", "Calculating real-world financial expense",
            [
                {"title": "1. Measure Usage Profile", "lines": ["Average input tokens per call", "Average output tokens per call", "Daily query volume"]},
                {"title": "2. Apply Cost Reductions", "lines": ["Prompt caching: up to 90% off input", "Batch API: 50% off total"]},
                {"title": "3. Unit Economics Check", "lines": ["Cost per transaction < Customer price", "Guarantees sustainable gross margins"]}
            ],
            "Batch API Economics", "50% off for asynchronous workloads",
            [
                {"title": "Real-Time API (Standard)", "lines": ["Full price, instant streaming", "Mandatory for live user chat"]},
                {"title": "Batch API (Asynchronous)", "lines": ["50% off input & output tokens", "Completed within 24 hours (Nightly audits)"]}
            ],
            "Complete the cost modeling sentence",
            "Financial cost models calculate blended unit costs per query and leverage prompt {1} and {2} APIs to slash operating expenses.",
            [
                {"answer": "caching", "hint": "Discounts on repeated prompt prefixes", "options": ["caching", "formatting", "typing"]},
                {"answer": "Batch", "hint": "Asynchronous 50% discounted processing", "options": ["Batch", "Terminal", "Browser"]}
            ],
            [
                {"q": "Why is the Batch API an ideal choice for nightly code quality audits or PR summaries?",
                 "a": ["Nightly tasks do not require sub-second latency and benefit from an automatic 50% cost discount", "Batch APIs are only available at night", "Batch APIs run on faster GPUs", "Batch APIs write better code"],
                 "c": 0, "why": "Asynchronous jobs tolerate 24-hour turnaround in exchange for substantial financial savings."},
                {"q": "What happens to the gross margins of a SaaS company if token usage grows faster than subscription revenue?",
                 "a": ["Margins compress, and the company can lose money on every active customer (negative unit economics)", "The company stock automatically increases", "Cloud providers refund the difference", "The software becomes free"],
                 "c": 0, "why": "Uncapped AI usage without cost modeling leads to unsustainable negative gross margins."},
                {"q": "How does implementing semantic caching (caching previous prompt answers) reduce API bills?",
                 "a": ["If a user asks a query semantically identical to a recent question, the cached answer is returned with zero API calls", "It deletes the database cache", "It makes models run without electricity", "It compresses text into zip files"],
                 "c": 0, "why": "Returning cached responses for frequent queries completely bypasses LLM inference costs."},
                {"q": "What is the primary driver of escalating costs in multi-turn chat applications?",
                 "a": ["Re-sending the entire accumulated conversation history as input tokens on every subsequent turn", "The cost of mouse clicks", "The font used in the chat window", "Internet service provider bandwidth"],
                 "c": 0, "why": "Stateless APIs bill for all historical tokens retransmitted on every single message turn."}
            ],
            "You know how to build quantitative financial cost models for AI features.",
            "Open Weights vs Proprietary APIs", "Evaluate the strategic trade-offs between open and closed models."
        ),
        build_lesson(
            5, "open-weights-vs-proprietary-apis", "Open Weights vs Proprietary APIs", "Open vs Closed",
            "The architectural choice: open-weights models (Llama, Mistral, Qwen) vs proprietary cloud APIs (OpenAI, Anthropic).",
            "What is the defining characteristic of an 'Open Weights' model (like Meta's Llama 3)?",
            ["The learned neural network parameter weights are publicly downloadable, allowing developers to self-host and run them privately", "The code was written by the open-source Linux kernel team", "The model is completely free to use in all cloud APIs", "The model weights are printed in books"],
            0, "Open weights models allow downloading the raw parameter checkpoints for private, self-hosted deployment.",
            [
                "<p>When selecting a foundation model, software architects face a fundamental strategic fork in the road: <strong>Proprietary Cloud APIs vs Open Weights Models</strong>.</p>",
                "<ul><li><strong>Proprietary APIs (OpenAI GPT-4o, Anthropic Claude 3.5, Google Gemini):</strong> Hosted by the vendor behind closed APIs. You cannot download the weights or inspect the architecture. <em>Advantages:</em> Frontier intelligence, zero infrastructure management, continuous provider updates. <em>Disadvantages:</em> API bills, potential data privacy concerns, vendor lock-in, and unpredictable deprecations.</li><li><strong>Open Weights Models (Meta Llama 3, Mistral, Qwen, DeepSeek):</strong> The model parameters are publicly released as downloadable checkpoints (`.safetensors`). <em>Advantages:</em> 100% data sovereignty (runs on-premise without external network calls), zero per-token API bills, complete control, and freedom to fine-tune weights permanently. <em>Disadvantages:</em> You must provision and manage GPU hardware and serving infrastructure (vLLM, Ollama).</li></ul>",
                "<pre><code># The Decision Matrix: Open Weights vs Proprietary\n# Healthcare / Defense / Strict GDPR     -> OPEN WEIGHTS (100% On-Premise Privacy)\n# Massive volume (> 50M tokens / day)    -> OPEN WEIGHTS (Self-hosted GPU is vastly cheaper)\n# Deep reasoning / Frontier coding       -> PROPRIETARY (Sonnet / GPT-4o)\n# Zero infrastructure startup prototype  -> PROPRIETARY (Plug and play in 10 minutes)</code></pre>",
                "<div class=\"callout\"><p><strong>Open Weights vs Open Source:</strong> Note the distinction: Llama 3 is 'Open Weights' (weights are downloadable), but its license contains commercial user caps, making it distinct from pure Open Source (Apache 2.0 / MIT).</p></div>"
            ],
            "Open Weights vs Proprietary APIs", "Balancing convenience and sovereignty",
            [
                {"title": "Proprietary APIs (Closed)", "lines": ["Hosted by OpenAI / Anthropic", "Frontier capability, zero DevOps", "Pay-per-token, vendor lock-in risk"]},
                {"title": "Open Weights (Self-Hosted)", "lines": ["Downloaded to your GPU (Llama/Mistral)", "100% data privacy, fixed hardware cost", "Requires infrastructure management (vLLM)"]}
            ],
            "The Breakeven Volume Threshold", "Where self-hosting becomes cheaper than APIs",
            [
                {"title": "Low Volume (< 5M tokens/day)", "lines": ["Cloud APIs are significantly cheaper", "No idle GPU costs"]},
                {"title": "High Volume (> 50M tokens/day)", "lines": ["Rented cloud GPUs (H100) break even", "Self-hosting saves tens of thousands/month!"]}
            ],
            "Complete the open vs closed sentence",
            "While proprietary APIs provide frontier intelligence without DevOps, open {1} models guarantee complete data {2} on private infrastructure.",
            [
                {"answer": "weights", "hint": "Downloadable parameter files", "options": ["weights", "browsers", "tokens"]},
                {"answer": "sovereignty", "hint": "Full control over data and privacy", "options": ["sovereignty", "compilation", "formatting"]}
            ],
            [
                {"q": "What is the primary driver for healthcare or banking enterprises choosing open-weights models?",
                 "a": ["Strict compliance and data sovereignty regulations (HIPAA, GDPR) forbidding patient or financial data from leaving private perimeters", "Open models are always smarter than closed models", "Banks do not have internet access", "Proprietary APIs are illegal in finance"],
                 "c": 0, "why": "Regulated industries require guarantees that sensitive data never leaves self-hosted environments."},
                {"q": "What happens when a proprietary model provider deprecates an older model version that your software relies on?",
                 "a": ["Your application must be migrated and re-tested on a newer model version, potentially changing prompt behavior and outputs", "The software stops working forever", "The provider pays damages to your company", "The model weights are mailed to you"],
                 "c": 0, "why": "Cloud API model deprecations force client applications to adapt to new model versions."},
                {"q": "How does self-hosting an open-weights model protect against vendor API price increases or outages?",
                 "a": ["You control the serving infrastructure; the model cannot be revoked, shut down, or price-hiked by an external vendor", "It makes electricity free", "It eliminates the need for GPUs", "It guarantees 100% test pass rates"],
                 "c": 0, "why": "Self-hosting provides total independence from third-party vendor reliability and pricing changes."},
                {"q": "What tool enables high-throughput serving of open-weights models on private GPU servers?",
                 "a": ["vLLM (using PagedAttention for high-throughput GPU serving)", "Microsoft Excel", "Git bash", "Notepad"],
                 "c": 0, "why": "vLLM is the leading open-source serving engine for production deployment of open-weights LLMs."}
            ],
            "You know how to evaluate the strategic trade-offs between open-weights models and proprietary APIs.",
            "Licensing Trade-offs: Apache 2.0 vs Llama Community", "Understand the legal and commercial terms of open-weights licenses."
        ),
        build_lesson(
            6, "licensing-tradeoffs-open-models", "Licensing Trade-offs: Apache 2.0 vs Llama Community", "Model Licenses",
            "Navigating model licenses: Permissive Apache 2.0 (Mistral, Qwen) vs Meta Llama Community License vs commercial terms.",
            "What major commercial restriction is included in Meta's Llama Community License Agreement?",
            ["Products with more than 700 million monthly active users must request an explicit commercial license from Meta", "Commercial use is strictly forbidden for all companies", "Developers must pay Meta $1 per token", "All code written by Llama must be open-sourced"],
            0, "Meta's license includes a 700M MAU threshold to prevent competing tech giants from using Llama freely.",
            [
                "<p>Just because an AI model's weights are publicly downloadable does not mean the model is 'open source'. In commercial software development, understanding <strong>Model Licensing</strong> is a vital legal and compliance responsibility.</p>",
                "<p>The three dominant licensing tiers in modern AI models are:</p>",
                "<ul><li><strong>1. Permissive Open Source (Apache 2.0 / MIT):</strong> (Mistral NeMo, Qwen 2.5, DeepSeek). 100% unrestricted commercial use, modification, and private deployment. Zero user caps, zero royalties. Safe for all enterprises.</li><li><strong>2. Llama Community License (Meta Llama 2 / 3):</strong> Free for commercial use with two major caveats: (a) If your product exceeds <strong>700 million monthly active users</strong>, you must obtain a license from Meta; (b) You cannot use Llama outputs to train competing frontier models.</li><li><strong>3. Research-Only / Non-Commercial Licenses (CC-BY-NC):</strong> Strictly prohibits any commercial use. Often found on academic models.</li></ul>",
                "<pre><code># The Model License Audit Matrix:\n# License Type      | Commercial Allowed? | User Caps? | Modifiable? | Safe for Enterprise?\n# ----------------------------------------------------------------------------------------\n# Apache 2.0 / MIT  | YES                 | NONE       | YES         | 100% SAFE\n# Llama Community   | YES (< 700M users)  | 700M MAU   | YES         | SAFE for most startups\n# CC-BY-NC-4.0      | NO (Academic only)  | N/A        | YES         | STRICTLY PROHIBITED!</code></pre>",
                "<div class=\"callout\"><p><strong>Compliance Rule:</strong> Never deploy a model with a Non-Commercial (NC) license into production code. Ensure your legal team approves the specific model license before integrating it into a product.</p></div>"
            ],
            "Open Model Licensing Spectrum", "Permissive vs Community vs Non-Commercial",
            [
                {"title": "Apache 2.0 (Qwen / Mistral)", "lines": ["True open-source license", "Unrestricted commercial use, modification, & distribution"]},
                {"title": "Llama Community License", "lines": ["Commercial use permitted", "700M monthly active user restriction threshold"]},
                {"title": "Non-Commercial (NC) Licenses", "lines": ["Academic and research use only", "Strictly forbidden in commercial enterprise products"]}
            ],
            "Synthetic Training Restrictions", "Terms governing output usage",
            [
                {"title": "OpenAI / Anthropic Terms", "lines": ["Forbids using model outputs to train competing foundation models"]},
                {"title": "Apache 2.0 Models", "lines": ["Allows using generated data for distillation and fine-tuning"]}
            ],
            "Complete the model licensing sentence",
            "While Apache 2.0 provides unrestricted commercial use, Meta's Llama license enforces a {1} million active user threshold, and NC licenses forbid {2} use.",
            [
                {"answer": "700", "hint": "The Meta MAU threshold", "options": ["700", "10", "1,000"]},
                {"answer": "commercial", "hint": "Revenue-generating business use", "options": ["commercial", "academic", "personal"]}
            ],
            [
                {"q": "Can a commercial startup with 50,000 users legally use Meta's Llama 3 models in its product?",
                 "a": ["Yes; the Llama Community License explicitly permits commercial use for products under 700 million monthly active users", "No; commercial use is completely illegal", "Only if they pay $10,000 to Meta", "Only if the code is written in C++"],
                 "c": 0, "why": "Meta's license permits commercial deployment for the vast majority of companies below the 700M threshold."},
                {"q": "Why is the Apache 2.0 license considered the gold standard for enterprise software compliance?",
                 "a": ["It grants broad, royalty-free, perpetual rights for commercial use, modification, and private sublicensing with patent protections", "It is written in simple English", "It was created by Google", "It makes software run faster"],
                 "c": 0, "why": "Apache 2.0 provides clear legal protections and unconditional commercial freedom."},
                {"q": "What risk arises if a developer fine-tunes an internal model on dataset pairs generated by GPT-4?",
                 "a": ["OpenAI's Terms of Service prohibit using model outputs to train competing commercial foundation models", "The model weights will be deleted", "The computer will crash", "Python will throw a licensing error"],
                 "c": 0, "why": "Commercial terms typically forbid using generated outputs to train competing models."},
                {"q": "What should an enterprise legal auditor verify before approving a third-party open-weights model?",
                 "a": ["Verify that the model checkpoint has a commercial license (Apache 2.0 or approved Community License) and is not CC-BY-NC", "Check the developer's git commit count", "Verify that the model is smaller than 1GB", "Check if the model uses dark mode"],
                 "c": 0, "why": "Auditing licenses prevents intellectual property contamination and commercial infringement risks."}
            ],
            "You know how to navigate the legal and commercial terms of modern open-weights licenses.",
            "Specialized vs Generalist Models", "Choose between generalist foundation models and task-specialized models."
        ),
        build_lesson(
            7, "specialized-vs-generalist-models", "Specialized vs Generalist Models", "Specialization",
            "Evaluating specialized models: Coding specialists (Qwen-Coder, DeepSeek-Coder), Math models, and Vision specialists.",
            "Why do specialized coding models (like Qwen 2.5 Coder 32B) often outperform much larger generalist models on software tasks?",
            ["Their pre-training token mixture is concentrated heavily on code, syntax, and technical documentation, giving them superior coding density", "They use special hardware chips", "Generalist models cannot write code", "Specialized models have zero parameters"],
            0, "Curated pre-training data mixtures yield superior token density and domain expertise in specialized models.",
            [
                "<p>A generalist foundation model (like GPT-4o) must know everything: 18th-century French poetry, biology taxonomy, legal case law, and casual small talk. Because its parameter budget is shared across all human knowledge, only a fraction of its capacity is dedicated to programming.</p>",
                "<p><strong>Specialized Models</strong> adjust the training distribution to focus on a dedicated domain:</p>",
                "<ul><li><strong>Coding Specialists (Qwen 2.5 Coder, DeepSeek Coder, StarCoder):</strong> Pre-trained on 70-80% source code, Git commits, documentation, and technical forums. A 32B specialized coder often matches or beats a 70B generalist model on coding benchmarks!</li><li><strong>Math & Reasoning Specialists:</strong> Trained on ArXiv papers, LaTeX proofs, and formal verification languages (Lean 4).</li><li><strong>Embedding Specialists (BGE, Cohere):</strong> Architected exclusively for dense semantic vector retrieval without generation overhead.</li></ul>",
                "<pre><code># The Specialization Advantage:\n# Generalist Model (70B): 20% code knowledge, 80% world knowledge.\n# Specialist Coder (32B): 80% code knowledge, 20% general language.\n# Result: The 32B specialist runs 2x faster, uses half the VRAM,\n#         and writes cleaner, more idiomatic code!</code></pre>",
                "<div class=\"callout\"><p><strong>The Architectural Rule:</strong> If an application workflow is strictly domain-specific (e.g. an automated code refactoring agent), choose a domain specialist over a generic conversational model.</p></div>"
            ],
            "Generalist vs Specialist Capacity Allocation", "How training mixtures shape domain expertise",
            [
                {"title": "Generalist Model (70B)", "lines": ["Trained on poetry, history, medicine, code", "Broad general knowledge, moderate coding density"]},
                {"title": "Specialized Coder (32B)", "lines": ["Trained heavily on GitHub, docs, & math", "Deep domain density, matches 70B on code"]}
            ],
            "Efficiency Benefits of Specialization", "Smaller footprint, higher performance",
            [
                {"title": "Resource Footprint", "lines": ["32B fits on 1 GPU (24GB VRAM)", "70B requires 2-4 enterprise GPUs"]},
                {"title": "Operational Cost", "lines": ["Half the hosting cost", "2x faster token generation throughput"]}
            ],
            "Complete the specialization sentence",
            "Specialized models like Qwen-Coder outperform larger generalist models on programming tasks due to higher {1} density in their training {2}.",
            [
                {"answer": "domain", "hint": "Specific technical expertise", "options": ["domain", "font", "license"]},
                {"answer": "mixture", "hint": "Data composition of tokens", "options": ["mixture", "hardware", "terminal"]}
            ],
            [
                {"q": "Why is a 32-billion parameter coding specialist often preferable for an on-premise development agent than a 70B generalist?",
                 "a": ["It fits onto a single consumer or workstation GPU (24GB-32GB VRAM) while delivering equivalent or superior coding accuracy", "It only runs in Python", "It writes code without tests", "It deletes the database"],
                 "c": 0, "why": "Fitting on a single GPU slashes hardware costs while domain focus preserves high coding quality."},
                {"q": "What training data dominates the pre-training mixture of a specialized coding model?",
                 "a": ["Source code across hundreds of languages, commit diffs, technical documentation, issue tickets, and math proofs", "Social media posts and gossip blogs", "Video transcripts of reality TV", "Audio files"],
                 "c": 0, "why": "High code concentration develops rich syntactic and logical reasoning capabilities."},
                {"q": "When is a generalist model superior to a specialized coding model?",
                 "a": ["When the task involves understanding nuanced human emotions, broad customer business context, or creative marketing prose", "When writing a quicksort algorithm", "When formatting JSON", "Never"],
                 "c": 0, "why": "Generalist models excel at broad cultural, emotional, and interdisciplinary contexts."},
                {"q": "What is 'Distillation' in specialized model creation?",
                 "a": ["Training a smaller, specialized student model to mimic the outputs and reasoning traces of a massive frontier teacher model", "Boiling water to cool a GPU", "Compressing text into zip files", "Deleting unused weights"],
                 "c": 0, "why": "Model distillation transfers high-level reasoning capabilities into compact, efficient models."}
            ],
            "You understand the performance and cost advantages of domain-specialized models.",
            "Building a Model Matrix for Your Engineering Stack", "Construct an authoritative model selection matrix for production systems."
        ),
        build_lesson(
            8, "building-model-matrix-stack", "Building a Model Matrix for Your Engineering Stack", "Model Matrix",
            "Designing an operational Model Matrix: matching internal features to optimal models based on SLA, cost, and capability.",
            "What is an engineering 'Model Matrix' in an AI architecture document?",
            ["A structured decision table mapping each application feature to its designated model, fallback tier, latency SLA, and cost budget", "A 3D computer graphics matrix", "A movie streaming service", "A list of employee phone numbers"],
            0, "A Model Matrix maps business features to specific models, fallbacks, latency budgets, and cost limits.",
            [
                "<p>A professional engineering architecture does not leave model selection to individual developer whim. It establishes an authoritative <strong>Model Matrix</strong> that governs which model powers which feature across the company's tech stack.</p>",
                "<p>A production Model Matrix defines four strict dimensions for every capability:</p>",
                "<ul><li><strong>1. Primary Model:</strong> The optimal model chosen based on capability and cost (e.g. GPT-4o-mini for customer support chat).</li><li><strong>2. Fallback Model:</strong> The automatic backup if the primary provider experiences downtime or rate limits (e.g. Claude 3.5 Haiku).</li><li><strong>3. Latency SLA:</strong> The acceptable response time threshold (e.g. TTFT $&lt; 800\\text{ms}$, total latency $&lt; 3\\text{s}$).</li><li><strong>4. Cost Budget Ceiling:</strong> Maximum allowable cost per 1,000 transactions (e.g. $&lt; $0.50 per 1k queries).</li></ul>",
                "<pre><code># The Enterprise Model Matrix (ARCHITECTURE.md):\n# Feature Name         | Primary Model     | Fallback Tier      | Target Latency | Cost / 1k req\n# ----------------------------------------------------------------------------------------------\n# PR Code Review Bot   | Claude 3.5 Sonnet | GPT-4o             | < 60s (Async)  | $4.50\n# User Chatbot         | GPT-4o-mini       | Claude 3.5 Haiku   | < 800ms (SSE)  | $0.18\n# Semantic Search      | text-embed-3-small| BGE-Large (Local)  | < 50ms         | $0.02\n# Complex Bug Root-Cause| o1 / DeepSeek R1  | Sonnet 3.5         | < 120s         | $12.00</code></pre>",
                "<div class=\"callout\"><p><strong>The Final Synthesis:</strong> Review your Model Matrix quarterly. The AI landscape moves so rapidly that a model that was state-of-the-art six months ago is often replaced by a model that is 5x cheaper and 3x faster today.</p></div>"
            ],
            "The Enterprise Model Matrix", "Mapping capabilities to optimal models",
            [
                {"title": "Interactive Chat", "lines": ["Primary: GPT-4o-mini", "Fallback: Claude 3.5 Haiku", "SLA: < 800ms, Cost: $0.18/1k"]},
                {"title": "Deep Code Review", "lines": ["Primary: Claude 3.5 Sonnet", "Fallback: GPT-4o", "SLA: < 60s (Async), Cost: $4.50/1k"]},
                {"title": "Complex Math & Debug", "lines": ["Primary: OpenAI o1 / DeepSeek R1", "Fallback: Sonnet 3.5", "SLA: < 120s, High reasoning"]}
            ],
            "Quarterly Matrix Evolution", "Adapting to rapid industry price-performance drops",
            [
                {"title": "Q1 Baseline", "lines": ["Feature uses $20/M model", "Budget: $2,000 / month"]},
                {"title": "Q3 Review", "lines": ["Migrated to new $0.50/M workhorse", "Budget drops to $80 / month (96% savings!)"]}
            ],
            "Complete the model matrix sentence",
            "An enterprise model matrix maps application features to primary models, automatic {1} tiers, latency SLAs, and {2} ceilings.",
            [
                {"answer": "fallback", "hint": "Secondary backup provider", "options": ["fallback", "marketing", "database"]},
                {"answer": "cost", "hint": "Financial budget limits", "options": ["cost", "font", "license"]}
            ],
            [
                {"q": "Why must every critical production feature have an explicit Fallback Model in its Model Matrix?",
                 "a": ["To ensure business continuity and uninterrupted service if the primary model provider experiences an outage or rate limit", "To double the cost of every request", "To test two models simultaneously", "Because cloud providers mandate it"],
                 "c": 0, "why": "Automatic fallbacks prevent upstream provider downtime from crashing customer-facing services."},
                {"q": "How often should an engineering team re-evaluate its Model Matrix?",
                 "a": ["Quarterly, because rapid price reductions and new model releases constantly create higher-performance, lower-cost options", "Once every 10 years", "Never; the matrix is frozen permanently", "Every 5 minutes"],
                 "c": 0, "why": "Quarterly reviews ensure architectures leverage the latest cost reductions and model breakthroughs."},
                {"q": "What is an SLA (Service Level Agreement) in model latency planning?",
                 "a": ["A commitment defining the maximum acceptable response time for a feature (e.g. 99% of requests complete in under 2 seconds)", "A software license contract", "A hardware warranty", "A database query language"],
                 "c": 0, "why": "Latency SLAs ensure features deliver acceptable user responsiveness under production load."},
                {"q": "What is the ultimate benefit of establishing an explicit Model Matrix across an organization?",
                 "a": ["It prevents ad-hoc overspending, aligns engineering choices with business SLAs, and provides architectural consistency", "It eliminates the need for software engineers", "It makes servers completely free", "It turns off all monitoring"],
                 "c": 0, "why": "A standardized matrix aligns technical capabilities, user experience SLAs, and financial budgets."}
            ],
            "You have completed the Model Selection & Trade-offs course.",
            "Next Course: Local Models vs Cloud Models", "Explore the real trade-offs between hosting open-weights models yourself and renting cloud APIs."
        )
    ]

    glossary = [
        {"id": "tiers", "title": "Tiers & Landscape", "terms": [
            {"term": "Frontier Model", "def": "A flagship foundation model (GPT-4o, Claude 3.5 Sonnet) delivering state-of-the-art reasoning and coding capabilities.", "lesson": 1, "tags": ["models", "landscape"]},
            {"term": "Mid-Tier Workhorse", "def": "A high-speed, cost-efficient model (GPT-4o-mini, Haiku) delivering 90% intelligence at 10% cost.", "lesson": 1, "tags": ["models", "efficiency"]},
            {"term": "Model Cascading", "def": "An architectural pattern routing requests to small models first and escalating to frontier models only on failure.", "lesson": 1, "tags": ["routing", "architecture"]}
        ]},
        {"id": "benchmarks", "title": "Benchmarks & Evaluation", "terms": [
            {"term": "SWE-bench", "def": "An authoritative software engineering benchmark evaluating models on resolving real-world GitHub repository bug issues.", "lesson": 2, "tags": ["benchmarks", "coding"]},
            {"term": "Benchmark Contamination", "def": "The inadvertent inclusion of benchmark test problems in pre-training data, causing false memorization.", "lesson": 2, "tags": ["evals", "pitfalls"]},
            {"term": "MMLU", "def": "Massive Multitask Language Understanding — a multi-subject multiple-choice benchmark evaluating general knowledge.", "lesson": 2, "tags": ["benchmarks", "evals"]}
        ]},
        {"id": "economics", "title": "Economics & Latency", "terms": [
            {"term": "Blended Token Cost", "def": "The effective unit price of an AI operation combining input and higher-priced output token volumes.", "lesson": 4, "tags": ["economics", "pricing"]},
            {"term": "Batch API", "def": "An asynchronous processing tier offering a 50% discount for non-realtime workloads completed within 24 hours.", "lesson": 4, "tags": ["api", "pricing"]},
            {"term": "Speculative Decoding", "def": "An inference optimization using a small draft model to generate candidates verified in parallel by a larger model.", "lesson": 3, "tags": ["inference", "optimization"]}
        ]},
        {"id": "governance", "title": "Licensing & Governance", "terms": [
            {"term": "Open Weights", "def": "Models whose trained parameters are publicly downloadable for private self-hosting (Llama, Mistral).", "lesson": 5, "tags": ["licensing", "open-source"]},
            {"term": "Llama Community License", "def": "A commercial license permitting free usage below a 700 million monthly active user threshold.", "lesson": 6, "tags": ["licensing", "legal"]},
            {"term": "Model Matrix", "def": "An enterprise decision framework mapping features to designated models, fallbacks, SLAs, and cost budgets.", "lesson": 8, "tags": ["architecture", "governance"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "Three-Tier Model Selection Guide",
            "label": "Matching tasks to model tiers",
            "code": "# TIER 1 (Frontier): Multi-file refactors, deep math, security audits (Sonnet / GPT-4o)\n# TIER 2 (Mid-Tier):  CRUD endpoints, extraction, daily chat, summaries (Haiku / 4o-mini)\n# TIER 3 (Local/Edge): Autocomplete, private offline drafting (Llama 3 8B)",
            "lessonN": 1, "lessonSlug": "multi-model-landscape-tiers", "lessonTitle": "The Multi-Model Landscape: Frontier vs Mid-Tier vs Small"
        },
        {
            "title": "Unit Cost Calculation Formula",
            "label": "Estimating monthly AI expenses",
            "code": "# Cost per query = (In_Tokens / 1M * In_Price) + (Out_Tokens / 1M * Out_Price)\n# Example: 10,000 queries/day with GPT-4o-mini ($0.15/M in, $0.60/M out):\n# 2,000 input, 300 output -> $0.00048 per query -> $14.40 / month!",
            "lessonN": 4, "lessonSlug": "cost-modeling-tokens-batch-api", "lessonTitle": "Cost Modeling: Input Tokens, Output Tokens, and Batch API"
        },
        {
            "title": "Asynchronous Batch API Invocation",
            "label": "50% discount for nightly tasks",
            "code": "# OpenAI Batch API submission for non-realtime audits:\nbatch_job = client.batches.create(\n    input_file_id=file_id,\n    endpoint=\"/v1/chat/completions\",\n    completion_window=\"24h\" # 50% discount applied automatically!\n)",
            "lessonN": 4, "lessonSlug": "cost-modeling-tokens-batch-api", "lessonTitle": "Cost Modeling: Input Tokens, Output Tokens, and Batch API"
        },
        {
            "title": "Production Model Matrix Template",
            "label": "Enterprise governance format",
            "code": "# Feature: Codebase Refactoring Agent\n# Primary: anthropic/claude-3-5-sonnet\n# Fallback: openai/gpt-4o\n# Timeout SLA: 45s\n# Monthly Budget Ceiling: $500.00",
            "lessonN": 8, "lessonSlug": "building-model-matrix-stack", "lessonTitle": "Building a Model Matrix for Your Engineering Stack"
        }
    ]

    course_data = {
        "id": "model-selection",
        "title": "Model Selection & Trade-offs",
        "num": 69,
        "emoji": "📊",
        "desc": "Capability, cost, latency, context and licence — choosing a model for the job instead of the hype.",
        "topics": ["Model Selection", "Model Tiers", "SWE-bench", "Latency vs Intelligence", "Cost Modeling", "Batch API", "Open Weights", "Model Matrix"],
        "mission": "# Mission — Model Selection & Trade-offs\n\nMaster the strategic, financial, and operational art of model selection. Navigate the three-tier landscape (Frontier, Mid-Tier, Small), critically evaluate benchmarks like SWE-bench against real-world engineering, balance latency deadlines with intelligence, construct quantitative unit cost models, evaluate open-weights vs proprietary APIs, navigate commercial license terms, and design an enterprise Model Matrix.",
        "notes": "# Notes — Model Selection & Trade-offs\n\nNo single model fits every job. Route routine work to fast mid-tier workhorses and reserve expensive frontier models for deep architectural reasoning.",
        "resources": "# Resources — Model Selection & Trade-offs\n\n- Carlos E. Jimenez et al., *SWE-bench: Can Language Models Resolve Real-World GitHub Issues?*\n- Artificial Analysis, *LLM Quality, Speed, and Price Leaderboards*\n- Meta AI, *Llama 3 Community License Agreement*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

# ==============================================================================
# COURSE 70: local-vs-cloud-models
# ==============================================================================
def make_course_70():
    lessons = [
        build_lesson(
            1, "running-models-locally-ollama-vllm", "Running Models Locally: Ollama, vLLM, and llama.cpp", "Local Runtimes",
            "The modern local AI ecosystem: running open-weights models on laptops and servers with Ollama, llama.cpp, and vLLM.",
            "What lightweight CLI tool allows developers to download and run open-weights LLMs locally with a single command like 'ollama run llama3'?",
            ["Ollama", "Photoshop", "Apache Kafka", "Kubernetes"],
            0, "Ollama wraps llama.cpp into a simple CLI and REST API for downloading and running local models instantly.",
            [
                "<p>A few years ago, running a large language model locally required compiling C++ drivers, manually managing CUDA versions, and allocating raw GPU memory pointers. Today, running a 70-billion parameter model on a developer laptop or local server is as simple as running a single terminal command.</p>",
                "<p>The local inference ecosystem is powered by three foundational runtimes:</p>",
                "<ul><li><strong>1. llama.cpp (The C++ Engine):</strong> Georgi Gerganov's revolutionary pure C/C++ inference engine. Runs with zero dependencies, features state-of-the-art quantization, and leverages Apple Silicon Metal and NVIDIA CUDA with extreme efficiency.</li><li><strong>2. Ollama (The Developer Wrapper):</strong> Wraps `llama.cpp` in an intuitive Docker-like CLI. Manages model downloads (`ollama pull mistral`), local storage, and serves an OpenAI-compatible REST API on `http://localhost:11434`.</li><li><strong>3. vLLM (The High-Throughput Server):</strong> The gold standard for multi-user production servers. Uses <strong>PagedAttention</strong> to manage KV-cache memory with zero fragmentation, serving 10x higher throughput than naive runtimes.</li></ul>",
                "<pre><code># Running a Local Model in 2 Seconds with Ollama:\n$ ollama run llama3:8b\n>>> Write a Python quicksort function.\n# Streams the answer locally with ZERO network traffic, 100% private!</code></pre>",
                "<div class=\"callout\"><p><strong>Drop-In Compatibility:</strong> Local tools (Ollama, vLLM, LM Studio) provide endpoints matching the OpenAI API format (`/v1/chat/completions`). You can switch an entire application from cloud to local by changing just one `base_url` variable!</p></div>"
            ],
            "The Local AI Ecosystem", "llama.cpp, Ollama, and vLLM architecture",
            [
                {"title": "llama.cpp (Core Engine)", "lines": ["Pure C/C++ execution", "Quantization & Metal/CUDA acceleration", "Zero external dependencies"]},
                {"title": "Ollama (Developer Friendly)", "lines": ["Simple CLI ('ollama run llama3')", "OpenAI-compatible REST API", "Perfect for local developer workstations"]},
                {"title": "vLLM (Enterprise Serving)", "lines": ["PagedAttention memory engine", "Massive multi-user concurrent throughput", "Standard for private GPU clusters"]}
            ],
            "Drop-In API Replacement", "Switching from cloud to local in 1 line of code",
            [
                {"title": "Cloud API Call (OpenAI)", "lines": ["base_url: 'https://api.openai.com/v1'", "Requires API key & internet connection"]},
                {"title": "Local API Call (Ollama)", "lines": ["base_url: 'http://localhost:11434/v1'", "Zero network calls, 100% on-device privacy"]}
            ],
            "Complete the local runtimes sentence",
            "Developers run models locally on workstations using {1} for simple CLI execution, and deploy to production servers using {2} for high throughput.",
            [
                {"answer": "Ollama", "hint": "Docker-like local model runner", "options": ["Ollama", "Photoshop", "Excel"]},
                {"answer": "vLLM", "hint": "High-throughput serving engine", "options": ["vLLM", "bash", "HTML"]}
            ],
            [
                {"q": "What port does Ollama serve its OpenAI-compatible local REST API on by default?",
                 "a": ["Port 11434 (http://localhost:11434)", "Port 80", "Port 443", "Port 22"],
                 "c": 0, "why": "Ollama defaults to binding on port 11434 for local HTTP API calls."},
                {"q": "Why is llama.cpp capable of running on ordinary MacBooks without discrete NVIDIA GPUs?",
                 "a": ["It compiles natively with Apple Silicon Metal acceleration, utilizing high-bandwidth unified RAM shared between CPU and GPU", "It turns off the neural network", "It uses the internet in the background", "MacBooks do not have RAM"],
                 "c": 0, "why": "Apple Silicon's unified memory architecture allows integrated GPUs to access large RAM models directly."},
                {"q": "What is 'PagedAttention' in the vLLM serving engine?",
                 "a": ["A memory management algorithm inspired by virtual memory paging in operating systems that eliminates KV-cache fragmentation", "A tool for reading paper books", "A web browser pagination feature", "A database index"],
                 "c": 0, "why": "PagedAttention treats KV-cache memory as non-contiguous pages, preventing wasted VRAM allocation."},
                {"q": "How does using an OpenAI-compatible local API endpoint benefit existing codebases?",
                 "a": ["You can switch between cloud providers and local models by simply changing the base_url parameter without modifying code logic", "It makes the internet faster", "It compiles Python into C++", "It deletes all unit tests"],
                 "c": 0, "why": "API interface parity ensures seamless portability between local and hosted models."}
            ],
            "You understand the local AI runtime ecosystem and how to serve open models locally.",
            "Hardware Requirements: VRAM, Unified Memory, and Quantization", "Calculate memory math to determine what hardware is needed to run models."
        ),
        build_lesson(
            2, "hardware-requirements-vram-unified-memory", "Hardware Requirements: VRAM, Unified Memory, and Quantization", "Hardware Math",
            "The physics of inference hardware: calculating VRAM requirements, Apple Silicon unified memory, and memory bandwidth bounds.",
            "How much VRAM is required to load an unquantized 70-Billion parameter model in standard 16-bit floating point (FP16)?",
            ["Approximately 140 Gigabytes of VRAM (70B parameters * 2 bytes per parameter)", "Only 512 Megabytes", "Exactly 1 Terabyte", "VRAM is not required for models"],
            0, "In FP16, each parameter takes 2 bytes of memory: 70B * 2 bytes = 140GB of VRAM.",
            [
                "<p>Before running or buying hardware for local models, an engineer must be able to perform <strong>Inference Memory Math</strong>. The amount of Video RAM (VRAM) required to run a model is not a mystery; it is governed by a precise mathematical formula.</p>",
                "<p>Every model parameter is a numerical floating-point number. Its precision dictates its memory footprint:</p>",
                "<ul><li><strong>16-bit Precision (FP16 / BF16):</strong> 2 bytes per parameter. A 7B model takes $7 \\times 2 = 14\\text{GB}$. A 70B model takes $70 \\times 2 = 140\\text{GB}$!</li><li><strong>8-bit Precision (INT8):</strong> 1 byte per parameter. A 70B model takes $70 \\times 1 = 70\\text{GB}$.</li><li><strong>4-bit Precision (INT4 / GGUF):</strong> 0.5 bytes per parameter. A 70B model takes $70 \\times 0.5 = 35\\text{GB}$!</li></ul>",
                "<pre><code># The Complete VRAM Sizing Formula:\n# Total_VRAM = (Parameters * Bytes_Per_Weight) * 1.2 (for KV-cache and activation buffer)\n# Examples:\n# - Llama 3 8B (4-bit):  (8B * 0.5 bytes)  * 1.2 = ~4.8 GB  -> Fits on an 8GB laptop!\n# - Llama 3 70B (4-bit): (70B * 0.5 bytes) * 1.2 = ~42 GB   -> Fits on a 64GB Mac Studio!</code></pre>",
                "<p>The Apple Silicon Advantage: <strong>Unified Memory</strong>. On an M3/M4 Max MacBook or Mac Studio, the CPU and GPU share the same high-speed memory pool (up to 128GB or 192GB). A single Mac Studio can run a 70B model locally that would otherwise require two $10,000 NVIDIA enterprise server GPUs!</p>",
                "<div class=\"callout\"><p><strong>The Memory Buffer Rule:</strong> Always add 20% overhead above model weights for the KV-cache. A model that barely fits in VRAM will crash with an Out-of-Memory error as soon as context fills up!</p></div>"
            ],
            "Memory Precision Footprint", "How quantization slashes VRAM requirements",
            [
                {"title": "FP16 (16-bit) - 2 Bytes", "lines": ["7B model = 14 GB VRAM", "70B model = 140 GB VRAM (Demands multi-GPU cluster)"]},
                {"title": "INT4 (4-bit) - 0.5 Bytes", "lines": ["7B model = 4 GB VRAM (Runs on phone!)", "70B model = 35 GB VRAM (Runs on 64GB Mac Studio!)"]}
            ],
            "NVIDIA VRAM vs Apple Unified Memory", "Architectural memory approaches",
            [
                {"title": "PC / Linux Workstation", "lines": ["Consumer GPU capped at 16GB-24GB VRAM", "Must buy expensive enterprise GPUs for 70B"]},
                {"title": "Apple Silicon (Unified Memory)", "lines": ["RAM shared dynamically between CPU/GPU", "Mac Studio with 128GB RAM runs 70B easily"]}
            ],
            "Complete the hardware memory sentence",
            "In 4-bit quantization, each parameter consumes roughly {1} bytes, allowing a 70-billion parameter model to fit into roughly {2} GB of VRAM.",
            [
                {"answer": "0.5", "hint": "Half a byte per 4-bit weight", "options": ["0.5", "2.0", "4.0"]},
                {"answer": "40", "hint": "Approximately 35-42GB with overhead", "options": ["40", "500", "5"]}
            ],
            [
                {"q": "What happens if a model's weights and KV-cache exceed the physical VRAM capacity of a GPU?",
                 "a": ["CUDA Out-Of-Memory (OOM) crash, or extreme slowdown as layers are offloaded to slow system RAM across PCIe", "The GPU catches fire", "The model converts text to numbers", "The computer restarts"],
                 "c": 0, "why": "Exceeding VRAM causes crash or severe PCIe memory-bandwidth bottlenecking."},
                {"q": "Why is Apple Silicon Unified Memory popular for local AI researchers and developers?",
                 "a": ["It allows consumer/workstation Macs with 64GB-128GB of unified RAM to load massive models without expensive server GPUs", "Apple computers do not need electricity", "Apple Silicon runs code in C++", "Apple Silicon eliminates the need for models"],
                 "c": 0, "why": "Unified architecture allows the GPU to access massive shared RAM pools at high bandwidth."},
                {"q": "What component of memory usage grows dynamically as the conversation context window fills up?",
                 "a": ["The KV-Cache (Key-Value cache storing past attention projections)", "The model weight parameters", "The operating system kernel", "The monitor resolution"],
                 "c": 0, "why": "The KV-cache stores attention vectors for all active tokens, expanding as context length increases."},
                {"q": "How much VRAM does an 8-billion parameter model require at 4-bit precision including a safe context buffer?",
                 "a": ["Approximately 5 to 6 Gigabytes of VRAM", "50 Gigabytes", "100 Megabytes", "1 Terabyte"],
                 "c": 0, "why": "8B * 0.5 bytes = 4GB for weights, plus ~1-2GB for KV-cache and activations."}
            ],
            "You know how to calculate exact VRAM requirements for local model deployment.",
            "Quantization Explained: FP16, INT8, INT4 (GGUF, AWQ, EXL2)", "Understand the algorithms that compress 16-bit weights into 4-bit integers."
        ),
        build_lesson(
            3, "quantization-explained-gguf-awq", "Quantization Explained: FP16, INT8, INT4 (GGUF, AWQ, EXL2)", "Quantization",
            "The magic of weight quantization: mapping continuous floats to 4-bit integers, GGUF formats, and AWQ/EXL2 algorithms.",
            "How can a neural network lose 75% of its precision (from FP16 down to 4-bit integers) and retain over 98% of its intelligence?",
            ["Neural network weights are over-parameterized and robust; weights within a layer cluster closely and can be represented by scale factors and small integer bins", "The missing precision is stored on the internet", "4-bit math is faster than 16-bit math", "The model re-learns missing weights during generation"],
            0, "Neural representations are noise-tolerant; scale-and-offset mapping preserves essential weight geometry.",
            [
                "<p>To a classical computer programmer, taking a 16-bit floating point number (with 65,536 possible values) and squashing it into a 4-bit integer (which can only represent 16 distinct values: 0 to 15) sounds insane. Surely the code will break!</p>",
                "<p>Yet in deep learning, <strong>4-bit Quantization</strong> retains virtually 98% of full-precision capability. Why? Because neural networks are biologically inspired, highly distributed, and resilient to noise. Individual weights matter less than the collective geometric pattern.</p>",
                "<p>How Quantization Works (Linear Mapping):</p>",
                "<ul><li><strong>Block Scaling:</strong> Take a small block of 32 or 64 weights. Find the minimum ($W_{min}$) and maximum ($W_{max}$).</li><li><strong>Scale & Zero-Point:</strong> Compute a scale factor $S = (W_{max} - W_{min}) / 15$.</li><li><strong>Integer Quantization:</strong> Map each continuous float to the closest integer from 0 to 15: $Q = \\text{round}((W - W_{min}) / S)$.</li><li><strong>Dequantize during math:</strong> Multiply by $S$ during the forward pass to recover the approximate original value.</li></ul>",
                "<p>Modern Quantization Formats & Algorithms:</p>",
                "<ul><li><strong>GGUF (llama.cpp):</strong> The universal file format for CPU and Apple Silicon inference. Self-contained, portable single-file container (`model-q4_k_m.gguf`).</li><li><strong>AWQ (Activation-aware Weight Quantization):</strong> Identifies the top 1% most important weights ('salient weights') and protects them from aggressive quantization.</li><li><strong>EXL2 (ExLlamaV2):</strong> State-of-the-art variable-bit quantization optimized for NVIDIA GPUs.</li></ul>",
                "<pre><code># The Quantization Trade-off Spectrum:\n# FP16 (16-bit): 100% Accuracy baseline | 140 GB VRAM | 1.0x Memory\n# Q8_0 (8-bit):   99.9% Accuracy        |  70 GB VRAM | 0.5x Memory\n# Q4_K_M (4-bit): 98.2% Accuracy (SWEET SPOT!) | 40 GB VRAM | 0.28x Memory\n# Q2_K (2-bit):   Severe brain damage! Accuracy collapses. (Avoid!)</code></pre>",
                "<div class=\"callout\"><p><strong>The Golden Quant:</strong> `Q4_K_M` (4-bit medium) is the universal industry sweet spot: it saves 72% VRAM with nearly imperceptible degradation in coding or reasoning quality.</p></div>"
            ],
            "Quantization Precision Hierarchy", "Accuracy vs Memory footprint",
            [
                {"title": "FP16 (Full Precision)", "lines": ["16 bits per weight", "100% baseline accuracy", "Massive VRAM footprint"]},
                {"title": "Q4_K_M (4-bit Sweet Spot)", "lines": ["4 bits per weight", "98.2% accuracy retained", "72% VRAM reduction (Runs locally!)"]},
                {"title": "Q2_K (2-bit Over-Quantized)", "lines": ["2 bits per weight", "Severe perplexity degradation", "Hallucinates gibberish (Avoid)"]}
            ],
            "AWQ: Protecting Salient Weights", "Protecting the 1% that matters most",
            [
                {"title": "Uniform Quantization", "lines": ["Compresses all weights equally", "Distorts critical outlier weights"]},
                {"title": "Activation-Aware (AWQ)", "lines": ["Finds top 1% critical weights", "Protects salient weights in FP16", "Slashes perplexity error by 50%"]}
            ],
            "Complete the quantization sentence",
            "Quantization maps continuous 16-bit weights into discrete {1} integers, with formats like {2} providing portable local inference.",
            [
                {"answer": "4-bit", "hint": "16-state integer compression", "options": ["4-bit", "64-bit", "analog"]},
                {"answer": "GGUF", "hint": "llama.cpp universal container format", "options": ["GGUF", "JPEG", "MP3"]}
            ],
            [
                {"q": "What is the primary benefit of the GGUF file format in local AI?",
                 "a": ["It is a self-contained single-file format that stores model weights, metadata, tokenizer vocabularies, and quantization configurations together", "It converts models into video files", "It encrypts files with passwords", "It runs only on Android phones"],
                 "c": 0, "why": "GGUF bundles all necessary metadata, tokenizer rules, and quantized tensors into one portable file."},
                {"q": "Why does a 2-bit quantized model (Q2) frequently produce broken, incoherent text?",
                 "a": ["2 bits only provide 4 discrete states (0, 1, 2, 3), which is too coarse to capture the nuanced geometry of neural weights", "2-bit math is forbidden in Python", "2-bit models have no weights", "The computer refuses to run 2-bit files"],
                 "c": 0, "why": "4 states is too coarse to represent weights without catastrophic information loss."},
                {"q": "What does 'AWQ' stand for in modern quantization research?",
                 "a": ["Activation-aware Weight Quantization: observing activation distributions to protect the most important 1% of weights from truncation", "Apple Wireless Quality", "Automated Web Query", "Advanced Word Queue"],
                 "c": 0, "why": "AWQ protects salient weights whose activations have the highest impact on output quality."},
                {"q": "Why is Q4_K_M considered the gold standard quantization level for local deployment?",
                 "a": ["It achieves an optimal balance between slashing VRAM requirements by over 70% while retaining over 98% of original model performance", "It is the only format supported by Ollama", "It runs without a CPU", "It was created by Microsoft"],
                 "c": 0, "why": "Q4_K_M uses mixed 4-bit and 6-bit quantization blocks to maximize fidelity while minimizing size."}
            ],
            "You understand the mathematics, formats, and accuracy trade-offs of model quantization.",
            "Privacy, Compliance, and Data Sovereignty (GDPR, HIPAA)", "Evaluate the regulatory and security drivers of on-premise AI."
        ),
        build_lesson(
            4, "privacy-compliance-data-sovereignty", "Privacy, Compliance, and Data Sovereignty (GDPR, HIPAA)", "Data Sovereignty",
            "The enterprise case for local models: regulatory compliance (HIPAA, GDPR, SOC2), zero data egress, and air-gapped environments.",
            "Why do healthcare, defense, and legal enterprises often strictly mandate running open-weights models on-premise?",
            ["Regulatory and legal compliance prohibits transmitting sensitive Protected Health Information (PHI) or classified data to third-party cloud APIs", "Local models write better legal briefs", "Cloud APIs are prohibited by computer science", "Local models run without electricity"],
            0, "Strict data sovereignty regulations forbid transmitting sensitive customer or classified data outside private perimeters.",
            [
                "<p>For many enterprises, model selection is not decided by benchmarks or price charts; it is decided by <strong>Corporate Lawyers and Security Officers</strong>. Under regulations like <strong>HIPAA</strong> (Healthcare), <strong>GDPR</strong> (European Privacy), <strong>FERPA</strong> (Education), and defense security protocols, transmitting confidential data to third-party cloud APIs is illegal or carries severe civil penalties.</p>",
                "<p>The core enterprise drivers for local and on-premise AI deployment:</p>",
                "<ul><li><strong>1. Zero Data Egress (Air-Gapping):</strong> An on-premise model running on local GPUs in an air-gapped data center has a network egress of exactly zero bytes. Patient records, source code, and classified documents never touch an external wire.</li><li><strong>2. Training Data Immunity:</strong> Cloud providers promise they do not train on API data, but enterprise audits require mathematically verifiable proof. Self-hosting eliminates the risk of sensitive data leaking into future foundation models.</li><li><strong>3. Data Sovereignty:</strong> Under GDPR and national privacy laws, citizen data must not leave national borders. Deploying open-weights models in private domestic data centers guarantees 100% legal compliance.</li><li><strong>4. Ownership of Intellectual Property:</strong> Proprietary prompts, domain schemas, and custom fine-tuned weights remain 100% internal enterprise IP.</li></ul>",
                "<pre><code># The Air-Gapped Security Architecture:\n[Client Application] -> [Internal Network (VPC)] -> [Self-Hosted vLLM Server (Llama 3)]\n# Internet Gateway: BLOCKED (0.0.0.0/0 -> DENY)\n# Audit Proof: Mathematically impossible for prompts to leak outside the company firewall!</code></pre>",
                "<div class=\"callout\"><p><strong>The Enterprise Rule:</strong> When dealing with Protected Health Information (PHI), Personally Identifiable Information (PII), or core proprietary trade secrets, open-weights on-premise hosting is the gold standard.</p></div>"
            ],
            "Cloud API vs Air-Gapped Local Security", "Data flow and perimeter compliance",
            [
                {"title": "Cloud API (Third-Party Boundary)", "lines": ["Prompts traverse public internet", "Processed on vendor cloud hardware", "Requires BAA / DPA legal agreements"]},
                {"title": "Air-Gapped Local (Zero Egress)", "lines": ["Runs entirely inside private VPC/Data Center", "Zero outbound internet connection", "100% HIPAA, GDPR, & SOC2 compliant"]}
            ],
            "Regulatory Compliance Frameworks", "Key mandates governing AI deployment",
            [
                {"title": "HIPAA (Healthcare)", "lines": ["Strict controls on Protected Health Information", "Fines up to $50,000 per violation"]},
                {"title": "GDPR (European Union)", "lines": ["Right to be forgotten & data sovereignty", "Requires citizen data remain within EU boundaries"]}
            ],
            "Complete the data sovereignty sentence",
            "Air-gapped local model deployment guarantees zero data {1}, ensuring compliance with strict healthcare and privacy regulations like {2}.",
            [
                {"answer": "egress", "hint": "Outbound transmission of data across perimeters", "options": ["egress", "compilation", "formatting"]},
                {"answer": "HIPAA", "hint": "Health Insurance Portability and Accountability Act", "options": ["HIPAA", "HTML", "CSS"]}
            ],
            [
                {"q": "What is an 'Air-Gapped' computing environment?",
                 "a": ["A secure computing system that is physically isolated from the public internet and all unsecured external networks", "A computer cooled by compressed air", "A computer on an airplane", "A wireless network"],
                 "c": 0, "why": "Air-gapping ensures physical network disconnection, preventing any unauthorized external communication."},
                {"q": "What is a Business Associate Agreement (BAA) in the context of cloud AI and healthcare?",
                 "a": ["A legal contract required under HIPAA holding cloud vendors legally liable for protecting health data privacy", "A partnership agreement between businesses", "A discount coupon for API usage", "A software license"],
                 "c": 0, "why": "A BAA binds cloud service providers to federal HIPAA security and privacy obligations."},
                {"q": "Why is customer source code considered sensitive intellectual property in software enterprises?",
                 "a": ["Source code contains core trade secrets, proprietary algorithms, and internal architecture that must be protected from leakage", "Source code is copyrighted by Python", "Source code cannot be read by humans", "Code expires after 30 days"],
                 "c": 0, "why": "Source code embodies the primary intellectual and commercial asset of technology companies."},
                {"q": "How does self-hosting open-weights models satisfy GDPR's 'Right to be Forgotten'?",
                 "a": ["Customer data is never stored in external model weights and can be permanently erased from internal databases on demand", "It deletes the model weights every week", "GDPR does not apply to AI", "It encrypts the internet"],
                 "c": 0, "why": "Internal data storage ensures full compliance with user data deletion mandates."}
            ],
            "You understand the regulatory, security, and compliance drivers of on-premise AI.",
            "Latency and Offline Capabilities", "Harness local models for zero-latency, offline, and disconnected environments."
        ),
        build_lesson(
            5, "latency-and-offline-capabilities", "Latency and Offline Capabilities", "Offline Operations",
            "Operating without the internet: field operations, edge devices, aircraft, marine vessels, and zero-network latency.",
            "What critical capability do local models provide for military, marine, or field engineering operations?",
            ["Complete functional autonomy without requiring an active internet connection, cellular signal, or satellite link", "They make boats sail faster", "They generate physical electricity", "They replace radar systems"],
            0, "Local models run on on-device hardware, operating flawlessly in offline, remote, or disconnected environments.",
            [
                "<p>Cloud APIs assume a constant, fast, reliable internet connection. In the real physical world, however, internet connectivity is often degraded, expensive, or completely non-existent:</p>",
                "<ul><li><strong>Aviation & Maritime:</strong> Aircraft in flight and cargo ships in the middle of the Pacific Ocean rely on expensive, high-latency satellite connections ($10,000/month for spotty Starlink).</li><li><strong>Industrial & Mining:</strong> Subterranean mining tunnels, oil rigs, and manufacturing plant floors have zero Wi-Fi.</li><li><strong>Disaster Recovery:</strong> First responders operating in hurricane or earthquake zones where cellular towers are destroyed.</li><li><strong>Subway & Airplane Commuters:</strong> Software developers coding on laptops while flying or riding underground trains.</li></ul>",
                "<p><strong>Local AI provides true Offline Resilience</strong>:</p>",
                "<pre><code># The Offline Edge Architecture:\n# Device: Ruggedized laptop / Jetson Orin on a fishing vessel in the Bering Sea\n# Network Status: DISCONNECTED (Airplane Mode)\n# Local Command:\n$ ollama run llama3:8b \"Diagnose hydraulic valve pressure fault on engine 2\"\n# Output streams in 400ms using local GPU! Zero satellite data used!</code></pre>",
                "<p>Furthermore, local models eliminate <strong>network transit latency</strong>. Even with fast fiber, a cloud API call incurs 50-100ms of speed-of-light network transit before the server even starts computing. Local inference runs across internal memory buses in microseconds.</p>",
                "<div class=\"callout\"><p><strong>The Edge Advantage:</strong> If your software must survive an internet outage without failing, an embedded or local model is the only viable architectural choice.</p></div>"
            ],
            "Connected Cloud vs Disconnected Edge", "Operational resilience comparison",
            [
                {"title": "Cloud API (Network Dependent)", "lines": ["Requires 24/7 active internet", "Fails immediately when network drops", "50-200ms network transit latency"]},
                {"title": "Local Edge (Autonomous)", "lines": ["Runs 100% offline in airplane mode", "Zero network latency (Bus speed)", "Resilient in maritime, aviation, & field ops"]}
            ],
            "Zero Network Latency Benefit", "Eliminating speed-of-light round trips",
            [
                {"title": "Cloud Transit Latency", "lines": ["Client -> ISP -> Fiber -> Cloud DC -> Server", "50-150ms before computation even begins"]},
                {"title": "Local Transit Latency", "lines": ["RAM -> Memory Bus -> GPU Core", "Microsecond transfer speed"]}
            ],
            "Complete the offline capabilities sentence",
            "Local models provide operational resilience in remote environments like aircraft or ships by running 100% {1} without {2} connections.",
            [
                {"answer": "offline", "hint": "Disconnected from the internet", "options": ["offline", "online", "virtually"]},
                {"answer": "satellite", "hint": "Remote internet communications link", "options": ["satellite", "compiler", "terminal"]}
            ],
            [
                {"q": "Why is an on-device local model ideal for developer tools like local IDE autocomplete?",
                 "a": ["It works seamlessly on airplanes, subways, and remote locations with zero network latency and no internet dependence", "It uses no laptop battery", "It writes code without syntax", "It eliminates the need for a keyboard"],
                 "c": 0, "why": "Developers frequently work while traveling or in low-connectivity environments."},
                {"q": "What embedded hardware platform is commonly used to run local AI models on physical robotics and edge devices?",
                 "a": ["NVIDIA Jetson (e.g. Jetson Orin Nano / AGX)", "Raspberry Pi 1", "An Intel 8086 processor", "A standard digital watch"],
                 "c": 0, "why": "NVIDIA Jetson modules provide specialized GPU tensor cores for edge AI and robotics."},
                {"q": "What is the physical minimum network latency for a cloud API call across oceans due to the speed of light in fiber?",
                 "a": ["Roughly 70 to 150 milliseconds of pure speed-of-light transit time", "Zero milliseconds", "1 hour", "10 seconds"],
                 "c": 0, "why": "Light travels through fiber at ~200,000 km/s, enforcing an absolute lower bound on international network latency."},
                {"q": "How does offline AI enhance disaster relief operations?",
                 "a": ["Emergency responders can triage medical cases and coordinate logistics using local hardware when communication grids are destroyed", "It restores the power grid automatically", "It prevents storms from forming", "It creates clean drinking water"],
                 "c": 0, "why": "Autonomous on-device intelligence provides critical guidance when communications infrastructure is wiped out."}
            ],
            "You understand the mission-critical value of offline AI capabilities and zero-transit latency.",
            "Total Cost of Ownership: Cloud API Bills vs Local Hardware Costs", "Build accurate TCO models comparing cloud subscriptions to private servers."
        ),
        build_lesson(
            6, "tco-cloud-bills-vs-hardware-costs", "Total Cost of Ownership: Cloud API Bills vs Local Hardware Costs", "TCO Analysis",
            "Financial engineering: Total Cost of Ownership (TCO), capital expenditure (CapEx) vs operational expenditure (OpEx), and breakeven volume.",
            "What hidden costs must be factored into the Total Cost of Ownership (TCO) of hosting on-premise AI hardware?",
            ["Electricity, cooling, datacenter rack space, hardware depreciation, and senior DevOps engineering salaries", "Monthly cloud API bills", "Paying royalties to Python creators", "Internet domain registration fees"],
            0, "Self-hosting incurs substantial CapEx and ongoing OpEx: power, cooling, hardware depreciation, and DevOps maintenance.",
            [
                "<p>A naive financial comparison assumes that because open-weights models are 'free', running them locally is free. In reality, purchasing and operating AI servers involves significant <strong>Capital Expenditure (CapEx)</strong> and <strong>Operational Expenditure (OpEx)</strong>.</p>",
                "<p>To conduct an honest <strong>Total Cost of Ownership (TCO)</strong> analysis, you must compare:</p>",
                "<ul><li><strong>Cloud API Route (100% OpEx):</strong> Pay strictly per token. Zero hardware purchases, zero electricity bills, zero DevOps maintenance. Ideal when volume is low, bursty, or unpredictable.</li><li><strong>On-Premise / Self-Hosted Route (CapEx + OpEx):</strong> Buying an 8x NVIDIA H100 GPU server costs $\\approx \\$300,000$ upfront (CapEx). You must then pay for datacenter rack space, 10kW of power and cooling ($\\approx \\$1,500/\\text{month}$), and maintain senior MLOps engineers ($\\approx \\$200,000+/\\text{year}$).</li></ul>",
                "<pre><code># The TCO Breakeven Calculation:\n# Cloud API Cost:      $5.00 per 1M tokens (Frontier model)\n# Monthly Query Load:  500 Million tokens\n# Monthly Cloud Bill:  $2,500 / month ($30,000 / year) -> CLOUD IS VASTLY CHEAPER!\n#\n# But at Enterprise Scale:\n# Monthly Query Load:  50 BILLION tokens\n# Monthly Cloud Bill:  $250,000 / month ($3,000,000 / year!)\n# Rented Cloud GPUs:   4x H100 instances = $12,000 / month ($144,000 / year)\n# Self-Hosting Savings: OVER $2.8 MILLION DOLLARS PER YEAR!</code></pre>",
                "<div class=\"callout\"><p><strong>The Breakeven Rule:</strong> Cloud APIs win decisively at low and medium volumes. Self-hosted GPUs win decisively when sustained daily token volume exceeds 20-50 million tokens per day.</p></div>"
            ],
            "CapEx vs OpEx in AI Infrastructure", "Comparing financial structures",
            [
                {"title": "Cloud APIs (Pure OpEx)", "lines": ["Zero upfront capital expenditure", "Pay only for what you consume", "Scales to zero when idle"]},
                {"title": "Self-Hosted Hardware (CapEx + OpEx)", "lines": ["$300k upfront server purchase", "Fixed power, cooling, & DevOps salaries", "Requires 24/7 high utilization to justify"]}
            ],
            "The Scale Breakeven Curve", "Where self-hosting overtakes cloud APIs",
            [
                {"title": "Low Volume (< 10M tokens/day)", "lines": ["Cloud APIs: $50 / day", "Self-hosting: $400 / day (Idle waste!)"]},
                {"title": "High Volume (> 100M tokens/day)", "lines": ["Cloud APIs: $5,000 / day", "Self-hosting: $400 / day (Massive 90% savings!)"]}
            ],
            "Complete the TCO analysis sentence",
            "Total Cost of Ownership models show that while cloud APIs win at low volume, self-hosted hardware achieves massive savings at high sustained {1} due to fixed {2} costs.",
            [
                {"answer": "volume", "hint": "Scale of daily token requests", "options": ["volume", "temperature", "voltage"]},
                {"answer": "infrastructure", "hint": "Hardware and server expenses", "options": ["infrastructure", "marketing", "licensing"]}
            ],
            [
                {"q": "What happens financially if an on-premise $300,000 GPU server sits idle at 5% utilization?",
                 "a": ["Capital and operational expenses are wasted, resulting in an astronomical unit cost per token compared to cloud APIs", "The server generates cryptocurrency", "The manufacturer refunds the money", "The server runs faster"],
                 "c": 0, "why": "Idle hardware depreciates and consumes power while generating zero utility, destroying ROI."},
                {"q": "What is the primary advantage of renting cloud GPUs (e.g. Lambda Labs, RunPod, AWS) over buying physical servers?",
                 "a": ["It converts hardware CapEx into flexible OpEx, allowing you to spin up or terminate GPUs on demand without long-term hardware obsolescence", "Renting GPUs is completely free", "Rented GPUs never need drivers", "Rented GPUs are immune to software bugs"],
                 "c": 0, "why": "Cloud GPU instances provide on-demand elasticity without upfront equipment purchases."},
                {"q": "How long is the typical depreciation lifecycle of enterprise AI GPU hardware before obsolescence?",
                 "a": ["Approximately 3 to 4 years, after which new chip architectures deliver 3x-5x higher performance per watt", "100 years", "Exactly 2 weeks", "Hardware never depreciates"],
                 "c": 0, "why": "Rapid semiconductor innovation renders GPU hardware economically obsolete within 3-4 years."},
                {"q": "What operational factor should be considered alongside hardware cost when deciding to self-host?",
                 "a": ["The availability and compensation of specialized MLOps and infrastructure engineers required to maintain the cluster", "The color of the server chassis", "The brand of keyboard used", "The company logo"],
                 "c": 0, "why": "Engineering payroll to manage cluster reliability often exceeds the cost of the hardware itself."}
            ],
            "You know how to build comprehensive Total Cost of Ownership models comparing cloud APIs to local hardware.",
            "Hybrid Architectures: Local Drafting, Cloud Reasoning", "Combine local speed with cloud reasoning for the ultimate architecture."
        ),
        build_lesson(
            7, "hybrid-architectures-local-cloud", "Hybrid Architectures: Local Drafting, Cloud Reasoning", "Hybrid Systems",
            "The best of both worlds: routing queries dynamically between fast local models and frontier cloud models.",
            "What is a 'Hybrid AI Architecture' in modern software engineering?",
            ["A system that combines local on-premise models for fast drafting, privacy, and screening with cloud frontier models for complex reasoning", "A computer that runs on gasoline and electricity", "A program written in Python and Java", "A model that speaks two languages"],
            0, "Hybrid architectures pair fast local edge models with frontier cloud APIs, balancing cost, privacy, and power.",
            [
                "<p>Software engineering is rarely an all-or-nothing choice. You do not have to choose between 100% cloud or 100% local. The most sophisticated enterprise systems deploy <strong>Hybrid Architectures</strong>, getting the speed and privacy of local models combined with the raw intellectual power of frontier cloud APIs.</p>",
                "<p>Three battle-tested Hybrid Architecture patterns:</p>",
                "<ul><li><strong>1. Speculative Drafting & Screening:</strong> A lightweight local model (Llama 3 8B) runs on-device, generating instant drafts, screening for PII, or filtering out spam. Only complex, sanitized requests are forwarded to cloud frontier models.</li><li><strong>2. Privacy Masking Gateway:</strong> A local model scrubs and tokenizes sensitive data (replacing real patient names with synthetic pseudonyms `[PATIENT_42]`) before sending the prompt to a cloud API. Upon response, the local gateway restores the real data.</li><li><strong>3. Dynamic Complexity Routing:</strong> Classify task difficulty locally: 90% of simple requests are answered locally in 200ms for $0.00; the remaining 10% difficult queries escalate to Claude 3.5 Sonnet or o1.</li></ul>",
                "<pre><code># The Hybrid Privacy Gateway Pattern in Python:\n# 1. User inputs text with sensitive customer data\n# 2. Local Model (Ollama on-premise): Detects PII and masks it:\n#    \"John Doe, SSN 123-45-6789\" -> \"[USER_1], [SSN_1]\"\n# 3. Clean Masked Prompt dispatched to Cloud API (GPT-4o) for deep reasoning\n# 4. Local Model unmasks response and serves to customer!\n# Result: 100% Frontier Intelligence with ZERO PII leakage to the cloud!</code></pre>",
                "<div class=\"callout\"><p><strong>The Architectural Triumph:</strong> Hybrid architectures decouple your system from cloud lock-in while preserving frontier reasoning capabilities where they matter most.</p></div>"
            ],
            "Hybrid Architecture Patterns", "Combining local security with cloud capability",
            [
                {"title": "Pattern 1: Privacy Gateway", "lines": ["Local model scrubs PII & secrets", "Sanitized prompt sent to cloud", "Zero compliance violations"]},
                {"title": "Pattern 2: Complexity Router", "lines": ["Local model answers 85% routine queries", "Escalates 15% complex tasks to cloud", "Slashes cloud bills by 80%"]},
                {"title": "Pattern 3: Speculative Decoding", "lines": ["Local model drafts tokens rapidly", "Cloud model verifies in parallel"]}
            ],
            "The Resilient Fallback Highway", "Maintaining uptime during cloud outages",
            [
                {"title": "Cloud API Available", "lines": ["Routes complex tasks to frontier cloud", "Premium reasoning capability"]},
                {"title": "Cloud Outage Occurs", "lines": ["Automatically falls back to local Llama 3", "System stays online, zero downtime"]}
            ],
            "Complete the hybrid architecture sentence",
            "Hybrid architectures use local models for privacy masking and {1} drafting, routing complex sanitized queries to frontier {2} models.",
            [
                {"answer": "fast", "hint": "Low-latency rapid execution", "options": ["fast", "expensive", "compiled"]},
                {"answer": "cloud", "hint": "Remote hosted frontier APIs", "options": ["cloud", "analog", "hardware"]}
            ],
            [
                {"q": "How does a local 'Privacy Masking Gateway' protect corporate secrets when calling cloud APIs?",
                 "a": ["It replaces real names, credit cards, and confidential terms with synthetic placeholders locally before transmitting the prompt to the cloud", "It encrypts the internet cable", "It deletes the cloud database", "It turns off logging"],
                 "c": 0, "why": "Local sanitization ensures sensitive entities never leave the corporate network."},
                {"q": "What happens in a hybrid architecture if the cloud provider experiences a major global outage?",
                 "a": ["The system gracefully degrades, routing all queries to local on-premise models to maintain service availability", "The application crashes completely", "The database is deleted", "The company goes out of business"],
                 "c": 0, "why": "Local models act as an automated fallback safety net during cloud provider outages."},
                {"q": "What percentage of typical business queries can be resolved by a modern 8B or 70B local model without cloud escalation?",
                 "a": ["Between 70% and 85% of routine extraction, formatting, and classification tasks", "Exactly 0%", "100% of all possible math", "5%"],
                 "c": 0, "why": "Most enterprise tasks are routine data extraction and formatting, which modern open models handle with ease."},
                {"q": "How does a hybrid model router decide whether to escalate a prompt to a cloud model?",
                 "a": ["By evaluating prompt complexity scores, intent classification, or checking if the local model expressed low confidence", "By flipping a coin", "By measuring the user's internet speed", "By checking the day of the week"],
                 "c": 0, "why": "Intent classifiers and confidence scores route easy queries locally and hard queries to cloud models."}
            ],
            "You know how to design hybrid architectures that balance on-premise security with cloud intelligence.",
            "Deploying Private Open-Source Models to Cloud GPUs", "Deploy open-weights models to serverless GPU clouds with vLLM and Docker."
        ),
        build_lesson(
            8, "deploying-private-models-cloud-gpus", "Deploying Private Open-Source Models to Cloud GPUs", "Private Cloud Deployment",
            "Deploying private open models to serverless GPU infrastructure: vLLM, Docker, Ray, Modal, RunPod, and Kubernetes.",
            "What is 'Serverless GPU' deployment (like Modal, RunPod, or Baseten) for open-weights models?",
            ["Cloud infrastructure that dynamically spins up GPU containers to run inference and scales down to zero when idle, avoiding idle hardware costs", "GPUs that run without computer servers", "Free GPUs provided by governments", "Running models on CPU servers"],
            0, "Serverless GPUs provide on-demand GPU instances that scale to zero when not in use, eliminating idle waste.",
            [
                "<p>If you want the privacy and control of open-weights models, but your company does not want to buy physical server racks or manage physical data centers, the solution is <strong>Private Cloud GPU Deployment</strong>.</p>",
                "<p>Modern MLOps provides serverless and managed GPU infrastructure (Modal, RunPod, Together AI, AWS SageMaker, Kubernetes with KServe) that allows you to deploy containerized models in minutes:</p>",
                "<ul><li><strong>1. Containerize with vLLM:</strong> Package the model weights and `vLLM` engine inside a standardized Docker container.</li><li><strong>2. Scale-to-Zero Architecture:</strong> Serverless platforms automatically spin up GPU instances when requests arrive, and <strong>scale down to zero</strong> after 5 minutes of inactivity. You never pay for an idle GPU!</li><li><strong>3. Private VPC Peering:</strong> Peer the GPU cluster directly with your main application backend over a private virtual cloud network (VPC), with zero exposure to the public internet.</li></ul>",
                "<pre><code># Deploying Llama 3 with vLLM in a Docker Container:\n# Dockerfile:\nFROM vllm/vllm-openai:latest\nENTRYPOINT [\"python3\", \"-m\", \"vllm.entrypoints.openai.api_server\"]\nCMD [\"--model\", \"meta-llama/Meta-Llama-3-70B-Instruct\", \\\n     \"--tensor-parallel-size\", \"2\", \\\n     \"--gpu-memory-utilization\", \"0.95\", \\\n     \"--max-model-len\", \"8192\"]</code></pre>",
                "<p>This gives your enterprise the ultimate combination: complete ownership of model weights, private VPC networking, automatic scaling, and pay-per-second infrastructure.</p>",
                "<div class=\"callout\"><p><strong>The Operational Victory:</strong> You have graduated from being an API consumer to being an AI systems architect capable of designing, sizing, and deploying private foundation models at scale.</p></div>"
            ],
            "Private Cloud Deployment Topology", "Serverless GPU infrastructure with private networking",
            [
                {"title": "Application Backend", "lines": ["Node / Python backend in private VPC", "Calls model via private DNS"]},
                {"title": "Private VPC Peering", "lines": ["Secure internal network tunnel", "Zero public internet exposure"]},
                {"title": "Serverless vLLM Cluster", "lines": ["Docker container with Llama 3 70B", "Autoscales with load, scales to zero when idle"]}
            ],
            "Scale-to-Zero Financial Efficiency", "Eliminating 24/7 idle hardware bills",
            [
                {"title": "Dedicated GPU Server", "lines": ["$3.00/hour * 24h * 30 days = $2,160/mo", "Billed even when team is asleep"]},
                {"title": "Serverless GPU (Scale-to-Zero)", "lines": ["Billed strictly per second of execution", "Active 3 hours/day = $270/mo (88% savings!)"]}
            ],
            "Complete the private cloud deployment sentence",
            "Serverless GPU platforms deploy containerized {1} engines inside private VPC networks that scale to {2} when idle.",
            [
                {"answer": "vLLM", "hint": "High-throughput serving engine", "options": ["vLLM", "HTML", "Excel"]},
                {"answer": "zero", "hint": "Zero instances running during off-hours", "options": ["zero", "infinity", "one hundred"]}
            ],
            [
                {"q": "What is 'Tensor Parallelism' (--tensor-parallel-size) in vLLM deployment?",
                 "a": ["Splitting individual weight matrices across multiple GPUs (e.g. 2 or 4 GPUs) to fit large models and execute math in parallel", "Running two different models at the same time", "Translating tensors into text", "A tool for formatting code"],
                 "c": 0, "why": "Tensor parallelism shards matrix multiplications across multiple GPUs within a single node."},
                {"q": "Why is deploying models inside a private VPC with peering safer than public API endpoints?",
                 "a": ["Internal network traffic never traverses the public internet, eliminating exposure to external packet sniffing and unauthorized access", "VPCs make models run 10x faster", "VPCs are free of charge", "Public APIs are illegal in enterprise software"],
                 "c": 0, "why": "Private VPC peering keeps inference requests strictly contained within the internal corporate network."},
                {"q": "What is 'Cold Start Latency' in serverless GPU deployment?",
                 "a": ["The initial delay (typically 15-45 seconds) required to provision the GPU container and load weights into VRAM when waking from zero", "The time to warm up the room", "The CPU fan starting up", "The internet connecting"],
                 "c": 0, "why": "Waking from zero requires spinning up the container and streaming gigabytes of weights into GPU memory."},
                {"q": "What metric should trigger autoscaling additional GPU instances in an enterprise cluster?",
                 "a": ["The number of queued requests in the vLLM waiting queue or average time-to-first-token latency", "The time of day", "The number of lines of code in the repo", "The price of bitcoin"],
                 "c": 0, "why": "Queue depth directly indicates whether active GPUs are saturated and unable to keep up with incoming request volume."}
            ],
            "You have completed the Local Models vs Cloud Models course.",
            "Next Level: Building AI Applications", "Learn how to build real-world AI applications: prompt engineering, structured outputs, function calling, and RAG."
        )
    ]

    glossary = [
        {"id": "runtimes", "title": "Runtimes & Hardware", "terms": [
            {"term": "llama.cpp", "def": "A pure C/C++ inference engine supporting state-of-the-art quantization across Apple Silicon and NVIDIA hardware.", "lesson": 1, "tags": ["runtimes", "c++"]},
            {"term": "Ollama", "def": "A developer-friendly CLI and local REST server packaging llama.cpp into a simple Docker-like interface.", "lesson": 1, "tags": ["tools", "local-ai"]},
            {"term": "vLLM", "def": "A high-throughput LLM serving engine utilizing PagedAttention to eliminate KV-cache memory fragmentation.", "lesson": 1, "tags": ["serving", "mlops"]}
        ]},
        {"id": "memory", "title": "Memory & Quantization", "terms": [
            {"term": "Unified Memory", "def": "An architecture (Apple Silicon) where CPU and GPU dynamically share a single high-bandwidth memory pool.", "lesson": 2, "tags": ["hardware", "apple"]},
            {"term": "GGUF", "def": "A universal single-file container format used by llama.cpp to bundle weights, metadata, and tokenizers.", "lesson": 3, "tags": ["formats", "quantization"]},
            {"term": "AWQ", "def": "Activation-aware Weight Quantization — protecting the salient 1% of weights from quantization to preserve accuracy.", "lesson": 3, "tags": ["quantization", "algorithms"]}
        ]},
        {"id": "compliance", "title": "Compliance & Economics", "terms": [
            {"term": "Air-Gapping", "def": "Physical network isolation of computing hardware from the public internet for absolute data security.", "lesson": 4, "tags": ["security", "compliance"]},
            {"term": "Total Cost of Ownership", "def": "A comprehensive financial model incorporating hardware CapEx, power, cooling, and DevOps engineering payroll.", "lesson": 6, "tags": ["economics", "finance"]},
            {"term": "Data Sovereignty", "def": "Legal requirements dictating that digital data remains stored and processed within specific national borders.", "lesson": 4, "tags": ["legal", "compliance"]}
        ]},
        {"id": "architectures", "title": "Hybrid & Cloud Deployment", "terms": [
            {"term": "Hybrid Architecture", "def": "A system routing queries dynamically between fast, private local models and powerful cloud frontier models.", "lesson": 7, "tags": ["architecture", "hybrid"]},
            {"term": "Scale-to-Zero", "def": "Serverless cloud infrastructure that dynamically terminates GPU containers when idle to eliminate wasted costs.", "lesson": 8, "tags": ["cloud", "serverless"]},
            {"term": "Tensor Parallelism", "def": "Sharding individual weight matrices across multiple GPUs in a node to execute forward passes in parallel.", "lesson": 8, "tags": ["distributed", "gpu"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "Local Model Invocation with Ollama",
            "label": "OpenAI-compatible local endpoint",
            "code": "from openai import OpenAI\n# Point client to local Ollama server:\nclient = OpenAI(base_url=\"http://localhost:11434/v1\", api_key=\"ollama\")\nresponse = client.chat.completions.create(\n    model=\"llama3:8b\",\n    messages=[{\"role\": \"user\", \"content\": \"Hello local AI!\"}]\n)",
            "lessonN": 1, "lessonSlug": "running-models-locally-ollama-vllm", "lessonTitle": "Running Models Locally: Ollama, vLLM, and llama.cpp"
        },
        {
            "title": "Inference VRAM Sizing Formula",
            "label": "Quick memory estimation",
            "code": "# Formula: VRAM_GB ≈ (Parameters_in_Billions * Bytes_per_Weight) * 1.2\n# 4-bit (0.5 bytes): 8B * 0.5 * 1.2 ≈ 4.8 GB VRAM\n# 4-bit (0.5 bytes): 70B * 0.5 * 1.2 ≈ 42.0 GB VRAM\n# 16-bit (2.0 bytes): 70B * 2.0 * 1.2 ≈ 168.0 GB VRAM",
            "lessonN": 2, "lessonSlug": "hardware-requirements-vram-unified-memory", "lessonTitle": "Hardware Requirements: VRAM, Unified Memory, and Quantization"
        },
        {
            "title": "vLLM High-Throughput Serving Command",
            "label": "Production server deployment",
            "code": "# Serve Llama 3 70B sharded across 2 GPUs with vLLM:\npython3 -m vllm.entrypoints.openai.api_server \\\n    --model meta-llama/Meta-Llama-3-70B-Instruct \\\n    --tensor-parallel-size 2 \\\n    --gpu-memory-utilization 0.95 \\\n    --max-model-len 8192",
            "lessonN": 8, "lessonSlug": "deploying-private-models-cloud-gpus", "lessonTitle": "Deploying Private Open-Source Models to Cloud GPUs"
        },
        {
            "title": "Hybrid Privacy Masking Architecture",
            "label": "Sanitizing prompts locally before cloud dispatch",
            "code": "# 1. Local Model scrubs PII:\nclean_prompt = local_model.scrub_pii(user_raw_input)\n# 2. Cloud Model processes clean prompt:\ncloud_response = cloud_client.generate(clean_prompt)\n# 3. Local Model restores entities:\nfinal_text = local_model.restore_pii(cloud_response)",
            "lessonN": 7, "lessonSlug": "hybrid-architectures-local-cloud", "lessonTitle": "Hybrid Architectures: Local Drafting, Cloud Reasoning"
        }
    ]

    course_data = {
        "id": "local-vs-cloud-models",
        "title": "Local Models vs Cloud Models",
        "num": 70,
        "emoji": "🏠",
        "desc": "Privacy, cost, latency and control — the real trade-offs between running models yourself and renting them.",
        "topics": ["Local Models", "Ollama", "vLLM", "VRAM Math", "Quantization", "GGUF", "Data Sovereignty", "TCO", "Hybrid Architecture"],
        "mission": "# Mission — Local Models vs Cloud Models\n\nMaster the strategic and operational physics of on-premise AI. Run models locally with Ollama and llama.cpp, calculate exact VRAM requirements, navigate weight quantization (GGUF, AWQ), evaluate legal compliance and data sovereignty (HIPAA, GDPR), deploy offline edge models in disconnected environments, conduct rigorous Total Cost of Ownership (TCO) analyses, design hybrid local-cloud architectures, and deploy serverless vLLM clusters on cloud GPUs.",
        "notes": "# Notes — Local Models vs Cloud Models\n\nSelf-hosting is not free; it trades variable cloud API bills for fixed hardware, power, and DevOps engineering overhead. Hybrid architectures combine local privacy with cloud reasoning.",
        "resources": "# Resources — Local Models vs Cloud Models\n\n- Georgi Gerganov, *llama.cpp Repository & Documentation*\n- Woosuk Kwon et al., *Efficient Memory Management for Large Language Model Serving with PagedAttention (vLLM)*\n- Ji Lin et al., *AWQ: Activation-aware Weight Quantization for LLM Compression and Acceleration*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

if __name__ == "__main__":
    make_course_67()
    make_course_68()
    make_course_69()
    make_course_70()


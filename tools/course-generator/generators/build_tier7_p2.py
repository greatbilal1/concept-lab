import os
import sys
sys.path.append(os.path.dirname(__file__))
from helpers import build_lesson, save_course

# ==============================================================================
# COURSE 66: llms (How LLMs Work)
# ==============================================================================
def make_course_66():
    lessons = [
        build_lesson(
            1, "autoregressive-next-token", "Autoregressive Language Modeling: Next-Token Prediction", "Next Token",
            "The universal training objective of generative AI: predicting the probability distribution over the next token.",
            "What is the mathematical objective of an autoregressive language model during pre-training?",
            ["Maximizing the log-likelihood of predicting the actual next token given all preceding tokens: P(w_t | w_1, ..., w_{t-1})", "Memorizing every sentence in the library", "Converting English words to French", "Calculating prime numbers"],
            0, "Language models optimize a simple, universal objective: predicting the probability distribution of the next token.",
            [
                "<p>Beneath the hype, Large Language Models (LLMs) perform one single mathematical task: <strong>Next-Token Prediction</strong>. Given a sequence of preceding tokens $w_1, w_2, \\dots, w_{t-1}$, the model calculates a probability distribution over its entire vocabulary for what token $w_t$ should come next.</p>",
                "<p>Why does such a simple task produce intelligence? Because to predict the next word across all human text, the model must learn:</p>",
                "<ul><li><strong>Grammar & Syntax:</strong> After <em>'The cat'</em>, a verb is likely.</li><li><strong>World Facts:</strong> After <em>'The capital of France is'</em>, the token <code>'Paris'</code> is overwhelmingly probable.</li><li><strong>Logic & Code:</strong> After <code>def calculate_discount(price): if price < 0: return</code>, the token <code>'0'</code> or <code>'ValueError'</code> is expected.</li></ul>",
                "<pre><code># The Autoregressive Loop in Action:\n# Input: \"The rain in Spain falls mainly on the\"\n# Vocabulary Probabilities output by model:\n# - \"plain\":   92.4%\n# - \"ground\":   3.1%\n# - \"mountains\":1.2%\n# Model samples \"plain\" and appends it to the prompt!\n# Next Turn: \"The rain in Spain falls mainly on the plain\" -> predicts next token!</code></pre>",
                "<p>The model repeats this loop token-by-token. This sequential accumulation of probabilistic predictions is called <strong>autoregressive generation</strong>.</p>",
                "<div class=\"callout\"><p><strong>The Emergence Miracle:</strong> Complex reasoning, translation, and coding emerge as byproducts of learning to predict next tokens with extreme statistical accuracy across human knowledge.</p></div>"
            ],
            "The Autoregressive Loop", "Iterative next-token sampling",
            [
                {"title": "1. Ingest Sequence", "lines": ["Prompt: 'The sky is'", "Computed through transformer layers"]},
                {"title": "2. Predict Distribution", "lines": ["'blue': 88%, 'dark': 6%, 'cloudy': 4%", "Softmax over 128k vocabulary"]},
                {"title": "3. Sample & Append", "lines": ["Sample 'blue' -> Append to prompt", "Loop continues for next token"]}
            ],
            "Compression as Intelligence", "Why next-token prediction learns world knowledge",
            [
                {"title": "Surface Syntax", "lines": ["Learns nouns, verbs, punctuation", "Follows grammatical agreement"]},
                {"title": "Deep Semantics", "lines": ["Learns geography, physics, code logic", "Required to predict correct factual tokens"]}
            ],
            "Complete the LLM foundation sentence",
            "An autoregressive language model operates by predicting the probability distribution over the next {1} conditioned on all {2} tokens.",
            [
                {"answer": "token", "hint": "Subword text fragment", "options": ["token", "program", "database"]},
                {"answer": "preceding", "hint": "Past historical context", "options": ["preceding", "future", "random"]}
            ],
            [
                {"q": "What does 'autoregressive' mean in machine learning?",
                 "a": ["A process where previous generated outputs are fed back into the model as inputs for subsequent predictions", "A model that drives cars automatically", "A regression algorithm for audio files", "A model with automatic hyperparameters"],
                 "c": 0, "why": "Autoregressive models feed their own prior outputs back into the input sequence."},
                {"q": "How does next-token prediction force a model to learn common sense reasoning?",
                 "a": ["To predict what happens next in stories or technical explanations, the model must understand the underlying causal physics of the world", "The model is given a physical body", "Humans program rules into the model", "The model reads dictionary definitions only"],
                 "c": 0, "why": "Accurately predicting realistic continuations requires modeling the underlying causal state of the world."},
                {"q": "How many tokens does a standard LLM generate in a single forward pass?",
                 "a": ["Exactly one token at a time", "An entire paragraph simultaneously", "Ten sentences at once", "A full web page"],
                 "c": 0, "why": "Autoregressive generation computes one forward pass per emitted token."},
                {"q": "What is the training loss function used for next-token prediction in LLMs?",
                 "a": ["Cross-Entropy Loss (measuring the negative log-likelihood of the true target token)", "Mean Squared Error", "Binary Hinge Loss", "K-Means Loss"],
                 "c": 0, "why": "Cross-entropy loss evaluates the probability assigned to the actual ground-truth next token."}
            ],
            "You understand the fundamental autoregressive next-token prediction engine of LLMs.",
            "Pre-training at Scale: Web Scraping, Filtering, and Compute", "Explore how trillions of tokens turn into foundation models."
        ),
        build_lesson(
            2, "pretraining-at-scale", "Pre-training at Scale: Web Scraping, Filtering, and Compute", "Pre-training",
            "The engineering of massive pre-training: Common Crawl, deduplication, quality filtering, synthetic data, and GPU clusters.",
            "What step in modern LLM pre-training data preparation has the highest impact on final model reasoning capability?",
            ["Aggressive data filtering: removing spam, deduplicating texts, and curating high-quality educational and code sources", "Buying faster internet cables", "Translating all web pages into Latin", "Running OCR on phone books"],
            0, "High-quality data curation and deduplication dramatically outperform raw uncurated web volume.",
            [
                "<p>Building a frontier foundation model (GPT-4o, Claude 3.5, Llama 3) requires feeding <strong>10 to 15 trillion tokens</strong> of text through a cluster of 16,000+ GPUs running continuously for months. But raw internet text is filled with SEO spam, hate speech, machine-generated gibberish, and duplicate copies.</p>",
                "<p>Modern pre-training data pipelines are rigorous data refinement refineries:</p>",
                "<ul><li><strong>1. Web Scraping & Ingestion:</strong> Ingesting petabytes of raw web dumps from Common Crawl, Wikipedia, books, ArXiv papers, and GitHub code.</li><li><strong>2. MinHash Deduplication:</strong> Up to 50% of the web is duplicate boilerplate. MinHash algorithms identify and remove near-duplicate documents, preventing models from memorizing repetitive spam.</li><li><strong>3. Heuristic & Model-Based Filtering:</strong> Classifiers trained on high-quality text (Wikipedia, textbooks) score web pages, discarding low-quality junk.</li><li><strong>4. Synthetic Data Generation:</strong> Frontier models use AI to generate structured textbooks, clean code exercises, and reasoning chains to enrich sparse domains.</li></ul>",
                "<pre><code># The Pre-training Data Funnel:\n# Raw Web Crawl:            100 Petabytes (Spam, HTML tags, duplicate blogs)\n# Deduplicated & Filtered:  30 Trillion Tokens (High-quality natural language)\n# Curated Code & Math:      5 Trillion Tokens (Python, JS, C++, math proofs)\n# Synthetic Textbooks:      2 Trillion Tokens (Dense conceptual explanations)\n# Final Training Dataset:   15 Trillion Tokens of pure signal!</code></pre>",
                "<div class=\"callout\"><p><strong>The Data Law:</strong> The 'secret sauce' of frontier AI labs is not a secret neural network layer; it is the quality, diversity, and curation of their pre-training data pipeline.</p></div>"
            ],
            "The Pre-training Data Refinery", "Transforming raw web noise into high-signal training tokens",
            [
                {"title": "Raw Web Crawl (Petabytes)", "lines": ["Common Crawl & raw HTML dumps", "Spam, ads, boilerplate, duplicates"]},
                {"title": "Deduplication & Filtering", "lines": ["MinHash removes duplicates", "Quality classifiers discard junk"]},
                {"title": "Curated Token Dataset", "lines": ["15 Trillion high-signal tokens", "Code, textbooks, math, literature"]}
            ],
            "Supercomputer Cluster Scale", "The physical reality of pre-training",
            [
                {"title": "Hardware Infrastructure", "lines": ["16,000 NVIDIA H100 GPUs", "InfiniBand 3.2 Tbps network fabric"]},
                {"title": "Training Duration", "lines": ["3 months continuous execution", "Consumes megawatts of electricity"]}
            ],
            "Complete the pre-training sentence",
            "Pre-training refines raw internet dumps using deduplication and quality {1} to produce trillions of high-signal training {2}.",
            [
                {"answer": "filtering", "hint": "Removing spam and low-quality text", "options": ["filtering", "formatting", "compilation"]},
                {"answer": "tokens", "hint": "Subword units of text", "options": ["tokens", "databases", "browsers"]}
            ],
            [
                {"q": "What is MinHash deduplication used for in LLM data pipelines?",
                 "a": ["Detecting and removing near-duplicate web documents to prevent models from memorizing repeated internet text", "Hashing user passwords", "Compressing images", "Formatting SQL queries"],
                 "c": 0, "why": "MinHash identifies fuzzy duplicates across billions of web pages with high computational efficiency."},
                {"q": "Why is code (from GitHub) included heavily in LLM pre-training data, even for non-coding models?",
                 "a": ["Code teaches the model structured logic, multi-step dependency tracking, and precise algorithmic syntax that transfers to general reasoning", "Code takes fewer bytes to store", "Code is required by computer processors", "To help models hack computers"],
                 "c": 0, "why": "Training on code significantly improves general logical reasoning and problem decomposition across all tasks."},
                {"q": "What is 'Synthetic Data' in modern pre-training pipelines?",
                 "a": ["High-quality text, reasoning chains, and code problems generated by existing AI models to train new models", "Fake data used by computer hackers", "Data generated by random noise", "Data stored on plastic cards"],
                 "c": 0, "why": "Synthetic data provides clean, curated explanations and reasoning proofs where natural internet text is sparse."},
                {"q": "What network technology connects thousands of GPUs during distributed pre-training runs?",
                 "a": ["Ultra-high-speed, low-latency InfiniBand or RoCE (RDMA over Converged Ethernet) fabrics", "Standard Wi-Fi", "Bluetooth 5.0", "Dial-up telephone modems"],
                 "c": 0, "why": "Distributed gradient synchronization requires massive multi-terabit bandwidth between GPUs."}
            ],
            "You understand the data engineering and supercomputing infrastructure behind LLM pre-training.",
            "Tokenization: Byte-Pair Encoding (BPE) and SentencePiece", "Learn how raw text characters are transformed into vocabulary tokens."
        ),
        build_lesson(
            3, "tokenization-bpe-sentencepiece", "Tokenization: Byte-Pair Encoding (BPE) and SentencePiece", "Tokenization",
            "How text becomes tokens: Byte-Pair Encoding (BPE), subword tokenization, vocabulary sizes, and tokenization quirks.",
            "Why do Large Language Models use subword tokenization (like BPE) instead of character-level or whole-word tokenization?",
            ["Whole words create infinite vocabularies with out-of-vocabulary errors, while characters create excessively long sequences; subwords offer the optimal sweet spot", "Subwords run faster on Python", "Characters are illegal in neural networks", "Subwords use no computer memory"],
            0, "Subwords balance compact sequence lengths with finite, reusable vocabularies that handle any word.",
            [
                "<p>A language model does not read English words, nor does it read individual characters. It reads <strong>Tokens</strong>. The algorithm that converts text strings into lists of integer token IDs is the <strong>Tokenizer</strong>, typically using <strong>Byte-Pair Encoding (BPE)</strong> or <strong>SentencePiece</strong>.</p>",
                "<p>The BPE algorithm works through iterative frequency merging:</p>",
                "<ul><li><strong>1. Base Vocabulary:</strong> Start with individual bytes (256 raw byte characters). Any Unicode character can be expressed!</li><li><strong>2. Count Pairs:</strong> Scan the corpus and find the most frequent adjacent character pair (e.g. <code>'t' + 'h'</code> $\\rightarrow$ <code>'th'</code>). Merge them into a new token!</li><li><strong>3. Iterate:</strong> Repeat 50,000 to 128,000 times! Common words (<code>'the'</code>, <code>'apple'</code>) become single tokens. Rare or compound words are split into subword pieces (<code>'un' + 'break' + 'able'</code>).</li></ul>",
                "<pre><code># Tokenizing with tiktoken (GPT-4 Tokenizer):\nimport tiktoken\n\nenc = tiktoken.get_encoding(\"cl100k_base\")\ntext = \"Tokenization is fascinating!\"\ntokens = enc.encode(text)\nprint(tokens)  # [48234, 1634, 374, 45247, 0]\nprint([enc.decode([t]) for t in tokens])\n# Output: ['Token', 'ization', ' is', ' fascinating', '!']</code></pre>",
                "<p>Notice that common words have leading spaces attached (<code>' is'</code>). Because numbers and non-English scripts are often split into smaller byte pieces, non-English languages consume 2-3x more tokens per sentence!</p>",
                "<div class=\"callout\"><p><strong>Tokenization Quirks:</strong> Models struggle to count letters in words (e.g. <em>'How many r's in strawberry?'</em>) because the model never sees individual letters; it sees the atomic token <code>'strawberry'</code>!</p></div>"
            ],
            "Byte-Pair Encoding (BPE) Merge Process", "From raw characters to rich subwords",
            [
                {"title": "Step 1: Characters", "lines": ["['l', 'o', 'w', 'e', 'r']", "Frequency scan: 'e'+'r' is most common"]},
                {"title": "Step 2: First Merge", "lines": ["['l', 'o', 'w', 'er']", "Adds 'er' to vocabulary"]},
                {"title": "Step 3: Vocabulary Build", "lines": ["Iterates 100,000 times", "Common words become single tokens"]}
            ],
            "Tokenization Artifacts", "Why models struggle with spelling and non-English",
            [
                {"title": "Spelling Blindness", "lines": ["Sees token ID 4921 ('strawberry')", "Does not see individual letters 'r'"]},
                {"title": "Multilingual Tax", "lines": ["English: 1 token per word", "Arabic / Hindi: 3-4 tokens per word"]}
            ],
            "Complete the tokenization sentence",
            "Byte-Pair Encoding iteratively merges frequent character pairs into {1} tokens, balancing vocabulary size with {2} length.",
            [
                {"answer": "subword", "hint": "Word fragments like 'un' + 'able'", "options": ["subword", "binary", "terminal"]},
                {"answer": "sequence", "hint": "Total count of tokens in context", "options": ["sequence", "hardware", "voltage"]}
            ],
            [
                {"q": "Why does an LLM struggle to answer 'How many letters are in the word apple?' without chain of thought?",
                 "a": ["The model receives the word as a single atomic token ID rather than a list of five separate letters", "The model does not know the alphabet", "Apple is a copyrighted word", "The model cannot count to five"],
                 "c": 0, "why": "Tokenization collapses multi-letter words into single atomic integers, hiding character details."},
                {"q": "What is the typical vocabulary size of modern tokenizers like cl100k_base or Llama 3?",
                 "a": ["Between 100,000 and 128,000 tokens", "Exactly 26 tokens (A-Z)", "1 billion tokens", "8 tokens"],
                 "c": 0, "why": "100k-128k tokens provides compact encoding for diverse multilingual text and code."},
                {"q": "What is the 'Multilingual Token Tax'?",
                 "a": ["Languages with non-Latin scripts (like Arabic, Hindi, or Japanese) require more tokens per sentence, increasing API cost and latency", "A tax paid to international governments", "A fee charged for translating code", "A currency conversion fee"],
                 "c": 0, "why": "Vocabularies are biased toward English; other scripts are fragmented into multiple byte tokens."},
                {"q": "How does SentencePiece handle spaces compared to older tokenizers?",
                 "a": ["It treats whitespace as a normal character (using a special symbol like _), allowing reversible lossless detokenization", "It deletes all spaces from the text", "It doubles every space", "It replaces spaces with numbers"],
                 "c": 0, "why": "Treating whitespace as a standard symbol makes tokenization fully reversible without heuristics."}
            ],
            "You understand the mechanics of Byte-Pair Encoding and subword tokenization.",
            "Emergent Capabilities and Scaling Laws", "Explore how scale unlocks qualitatively new model capabilities."
        ),
        build_lesson(
            4, "emergent-capabilities-scaling-laws", "Emergent Capabilities and Scaling Laws", "Scaling Laws",
            "The science of scale: Kaplan & Chinchilla scaling laws, compute-optimal training, and emergent capabilities.",
            "What do the Chinchilla Scaling Laws (Hoffmann et al., 2022) state about compute-optimal training?",
            ["Model parameter size and training token volume should be scaled in equal proportion: doubling model size requires doubling training tokens", "Models should be as large as possible with minimal data", "Data does not matter; only GPU clock speed matters", "Training should stop after 100 steps"],
            0, "Chinchilla proved that scaling model parameters and training tokens equally (1:1) achieves optimal compute efficiency.",
            [
                "<p>For decades, machine learning was treated as an ad-hoc craft. In 2020, researchers at OpenAI published <strong>'Scaling Laws for Neural Language Models'</strong> (Kaplan et al.), proving that LLM performance follows precise mathematical <strong>power laws</strong> across six orders of magnitude.</p>",
                "<p>Test loss decreases predictably as a power-law function of three variables:</p>",
                "<ul><li><strong>$N$:</strong> Number of model parameters (excluding embeddings).</li><li><strong>$D$:</strong> Dataset size in tokens.</li><li><strong>$C$:</strong> Total floating-point compute budget (FLOPs).</li></ul>",
                "<p>In 2022, DeepMind refined this with the <strong>Chinchilla Scaling Laws</strong>: they proved that earlier models (like GPT-3 with 175B parameters on 300B tokens) were severely <em>undertrained</em>. For compute-optimal performance, for every doubling of parameters, you must also double the training tokens ($\approx 20$ tokens per parameter).</p>",
                "<pre><code># The Chinchilla Optimal Ratio:\n# For optimal compute efficiency: Tokens / Parameters ≈ 20\n# - 7B parameter model   -> Train on at least 140 Billion tokens\n# - 70B parameter model  -> Train on at least 1.4 Trillion tokens\n# Llama 3 scaled this further: 8B parameters trained on 15 TRILLION tokens!</code></pre>",
                "<p>As models scale along these curves, they exhibit <strong>Emergent Capabilities</strong>: abilities not explicitly present in smaller models (multi-step arithmetic, translation, symbol manipulation) that suddenly appear as smooth continuous improvements in cross-entropy loss cross critical performance thresholds.</p>",
                "<div class=\"callout\"><p><strong>Over-Training for Inference:</strong> Llama 3 intentionally trained on 15T tokens (far past Chinchilla optimality) to produce small 8B/70B models that are lightning fast and cheap to serve in production!</p></div>"
            ],
            "The Power Law Curves", "Predictable loss reduction across orders of magnitude",
            [
                {"title": "Compute Scaling (FLOPs)", "lines": ["Loss drops smoothly as C increases", "Predictable across 6 orders of magnitude"]},
                {"title": "Chinchilla Balance", "lines": ["Scale Parameters and Tokens 1:1", "Eliminated undertrained model waste"]}
            ],
            "Emergence as a Threshold Effect", "Smooth metric vs sudden capability jump",
            [
                {"title": "Continuous Cross-Entropy Loss", "lines": ["Smooth, unbroken downward slope", "Consistent statistical improvement"]},
                {"title": "Discrete Benchmark Score", "lines": ["0% until threshold reached", "Suddenly jumps to 85% (Emergence!)"]}
            ],
            "Complete the scaling laws sentence",
            "Chinchilla scaling laws proven that compute-optimal training requires scaling model {1} and training {2} in equal proportion.",
            [
                {"answer": "parameters", "hint": "Model size N", "options": ["parameters", "monitors", "browsers"]},
                {"answer": "tokens", "hint": "Dataset volume D", "options": ["tokens", "keyboards", "cables"]}
            ],
            [
                {"q": "What does a Power Law relationship mean in the context of LLM scaling?",
                 "a": ["Performance improves predictably as a straight line when plotted on a log-log scale against compute or data", "Performance doubles every Tuesday", "Performance reaches 100% instantly", "Performance stops improving after 1B parameters"],
                 "c": 0, "why": "Power laws appear as linear relationships on logarithmic scales, making scaling predictable."},
                {"q": "Why did Meta train Llama 3 8B on 15 trillion tokens (far beyond Chinchilla optimality)?",
                 "a": ["To create an exceptionally capable small model that is cheap and fast to run during inference in production", "Because they forgot to stop the training run", "Because hard drives were too cheap", "To test if GPUs would melt"],
                 "c": 0, "why": "Over-training small models shifts compute cost to training, drastically lowering inference cost forever."},
                {"q": "What is an 'Emergent Capability' in large language models?",
                 "a": ["A qualitative capability (like multi-step coding or translation) that is near-zero in small models but emerges strongly in large models", "A model becoming self-aware", "A bug in the tokenizer", "A new hardware feature"],
                 "c": 0, "why": "Emergent abilities arise when smooth statistical loss crosses task accuracy thresholds."},
                {"q": "According to Chinchilla, what was the primary inefficiency of the original 175B-parameter GPT-3?",
                 "a": ["It had too many parameters for the small amount of data it was trained on (300B tokens); it was severely undertrained", "It was trained in Python", "It used too many GPUs", "It was too small"],
                 "c": 0, "why": "DeepMind proved GPT-3 was parameter-heavy and data-starved for its compute budget."}
            ],
            "You understand the mathematics of scaling laws and emergent capabilities in foundation models.",
            "Supervised Fine-Tuning (SFT): From Completion to Assistant", "Transform raw text predictors into helpful, instruction-following assistants."
        ),
        build_lesson(
            5, "supervised-fine-tuning-sft", "Supervised Fine-Tuning (SFT): From Completion to Assistant", "Instruction Tuning",
            "Transforming base models into conversational assistants: prompt-response dataset curation and instruction tuning.",
            "Why is a raw pre-trained 'Base Model' difficult for ordinary humans to chat with?",
            ["A base model is an unconstrained document completer: if you ask a question, it might generate more questions rather than answering", "A base model cannot generate text", "A base model only understands French", "Base models require physical keys to unlock"],
            0, "Base models complete text statistically; if you type 'What is Python?', it might generate 'What is Java?' as a test questionnaire.",
            [
                "<p>When an LLM finishes pre-training on 15 trillion tokens, it is called a <strong>Base Model</strong>. It possesses immense knowledge of the world, but it is <em>not an assistant</em>. It is an unguided autocomplete engine. If you prompt it with: <em>'Write a poem about the sea'</em>, it might complete the text with: <em>'Write a poem about the mountains. Due Friday by 5pm.'</em> (treating your prompt as a homework assignment!).</p>",
                "<p>To turn a wild base model into a helpful, obedient assistant, engineers perform <strong>Supervised Fine-Tuning (SFT)</strong> (also called <em>Instruction Tuning</em>):</p>",
                "<ul><li><strong>Curated Instruction Datasets:</strong> Tens of thousands of high-quality (Prompt, Ideal Response) pairs written by human experts or teacher models.</li><li><strong>Chat Formats & Special Tokens:</strong> Structuring dialog with special delimiters (e.g. <code>&lt;|im_start|&gt;user ... &lt;|im_end|&gt;</code>).</li><li><strong>Continued Autoregressive Training:</strong> The model is trained on these pairs, but loss is computed <strong>only on the assistant's response tokens</strong>, teaching it to answer directly.</li></ul>",
                "<pre><code># The SFT ChatML Format:\n<|im_start|>system\nYou are a helpful, concise programming assistant.<|im_end|>\n<|im_start|>user\nHow do I reverse a list in Python?<|im_end|>\n<|im_start|>assistant\nUse `my_list.reverse()` for in-place reversal, or `my_list[::-1]` for a new list.<|im_end|></code></pre>",
                "<p>SFT acts as a <strong>thin behavioral mask</strong> over the vast reservoir of base model knowledge, aligning the model's outputs with human conversational expectations.</p>",
                "<div class=\"callout\"><p><strong>The Superficial Alignment Hypothesis:</strong> Pre-training teaches the model all its knowledge and reasoning; fine-tuning merely teaches it the format and style of how to interact with humans.</p></div>"
            ],
            "Base Model vs Instruct Model", "Autocomplete engine vs conversational assistant",
            [
                {"title": "Base Model (Unconstrained)", "lines": ["Prompt: 'Explain quantum physics'", "Completion: 'Chapter 2: Thermodynamics'", "Treats prompt as document excerpt"]},
                {"title": "Instruct Model (SFT Aligned)", "lines": ["Prompt: 'Explain quantum physics'", "Response: 'Quantum physics is the study of...'", "Behaves as obedient assistant"]}
            ],
            "Special Token Chat Delimiters", "Structuring turns for neural attention",
            [
                {"title": "System Turn", "lines": ["<|system|> Set guidelines & tone", "Anchors behavior throughout dialog"]},
                {"title": "User Turn", "lines": ["<|user|> The human query", "Input boundary delimited"]},
                {"title": "Assistant Turn", "lines": ["<|assistant|> Model generation", "Loss computed only on these tokens"]}
            ],
            "Complete the SFT sentence",
            "Supervised Fine-Tuning transforms unconstrained base models into helpful assistants by training on curated {1} and {2} pairs.",
            [
                {"answer": "prompt", "hint": "User instruction or query", "options": ["prompt", "compiler", "terminal"]},
                {"answer": "response", "hint": "Ideal assistant answer", "options": ["response", "hardware", "syntax"]}
            ],
            [
                {"q": "What is the 'Superficial Alignment Hypothesis' (Zhou et al., LIMA paper)?",
                 "a": ["A model learns almost all its knowledge and capabilities during pre-training; fine-tuning simply teaches it which sub-distribution of style to use", "Alignment is superficial and useless", "Models only learn on the surface of hard drives", "Fine-tuning takes 10 years"],
                 "c": 0, "why": "Research shows a small set of 1,000 curated examples can align a strong base model effectively."},
                {"q": "Why is training loss masked out on user prompt tokens during SFT training?",
                 "a": ["We only want the model to learn how to generate the assistant's response, not learn to predict user prompts", "User tokens are encrypted", "To save hard drive space", "User prompts have zero tokens"],
                 "c": 0, "why": "Masking input tokens focuses gradient updates strictly on generating high-quality assistant answers."},
                {"q": "What are 'Special Tokens' (like <|im_start|> or [INST]) used for in chat models?",
                 "a": ["They provide unambiguous boundary markers that tell the model who is speaking (system, user, or assistant)", "They are secret cheat codes for developers", "They turn on GPU fans", "They encrypt chat history"],
                 "c": 0, "why": "Special tokens prevent prompt confusion by cleanly separating conversational roles."},
                {"q": "What happens if you try to use a Base Model for zero-shot JSON tool calling?",
                 "a": ["It frequently fails or produces rambling text continuations because it lacks instruction tuning on structured formats", "It works perfectly", "It runs 100x faster", "It deletes the database"],
                 "c": 0, "why": "Base models require fine-tuning to reliably adhere to rigid output formats like JSON schemas."}
            ],
            "You understand how Supervised Fine-Tuning transforms base models into conversational assistants.",
            "Alignment: RLHF and Direct Preference Optimization (DPO)", "Align models with human preferences using reward models and DPO."
        ),
        build_lesson(
            6, "alignment-rlhf-and-dpo", "Alignment: RLHF and Direct Preference Optimization (DPO)", "Alignment",
            "Human preference alignment: RLHF (PPO), Reward Modeling, and modern Direct Preference Optimization (DPO).",
            "Why is Reinforcement Learning from Human Feedback (RLHF) necessary after Supervised Fine-Tuning?",
            ["SFT models can still generate dangerous, sycophantic, or unhelpful answers; RLHF optimizes directly for human preference judgments", "SFT models forget English", "RLHF is required by cloud servers", "SFT models cannot output numbers"],
            0, "RLHF aligns model behavior with nuanced human preferences across safety, honesty, and helpfulness.",
            [
                "<p>Supervised Fine-Tuning is powerful, but it has a limitation: it only teaches the model to imitate a specific target text. However, for complex creative or reasoning prompts, there is no single 'correct' text. It is much easier for humans to look at two candidate answers ($A$ and $B$) and say: <strong>'Option A is significantly better than Option B.'</strong></p>",
                "<p>This insight powers <strong>Human Preference Alignment</strong>:</p>",
                "<ul><li><strong>1. Classical RLHF (with PPO):</strong> Train a separate <strong>Reward Model</strong> on human preference rankings ($y_{win} \\succ y_{lose}$). Then use reinforcement learning (PPO) to train the LLM to maximize this reward score, with a KL-divergence penalty to stop it from drifting too far from the base model.</li><li><strong>2. Direct Preference Optimization (DPO) (Rafailov et al., 2023):</strong> The modern breakthrough! DPO mathematically proves that the language model itself can implicitly represent the reward model! DPO trains directly on $(x, y_{win}, y_{lose})$ pairs using a simple binary cross-entropy loss, completely eliminating the need for a separate reward model or complex PPO training!</li></ul>",
                "<pre><code># The DPO Data Tuple:\nPrompt (x): \"How do I bypass an admin password?\"\nChosen (y_win):  \"I cannot provide instructions for bypassing authentication...\"\nRejected (y_lose): \"Here is how to exploit the admin login route...\"\n\n# DPO mathematically increases the likelihood of y_win while decreasing y_lose!</code></pre>",
                "<div class=\"callout\"><p><strong>The DPO Revolution:</strong> DPO made post-training alignment accessible to every engineering team. It runs with standard training loops, stable gradients, and zero reinforcement learning instability.</p></div>"
            ],
            "Classical RLHF vs Modern DPO", "The alignment architecture evolution",
            [
                {"title": "Classical RLHF (PPO)", "lines": ["Train separate Reward Model", "Run complex PPO reinforcement loop", "High training instability, 4 models in RAM"]},
                {"title": "Direct Preference Optimization (DPO)", "lines": ["Implicit reward within the model", "Simple closed-form loss on (win, loss) pairs", "Rock-solid stability, 2x faster"]}
            ],
            "The Three Alignment Criteria", "Helpful, Honest, Harmless (The 3 Hs)",
            [
                {"title": "Helpful", "lines": ["Follows instructions accurately", "Provides complete, actionable answers"]},
                {"title": "Honest", "lines": ["Acknowledges uncertainty", "Does not fabricate false facts"]},
                {"title": "Harmless", "lines": ["Refuses malicious requests", "Upholds safety & ethical guardrails"]}
            ],
            "Complete the alignment sentence",
            "Direct Preference Optimization aligns language models with human preferences by increasing the likelihood of {1} answers over {2} answers.",
            [
                {"answer": "chosen", "hint": "The preferred target response y_win", "options": ["chosen", "random", "untested"]},
                {"answer": "rejected", "hint": "The inferior or harmful response y_lose", "options": ["rejected", "compiled", "encrypted"]}
            ],
            [
                {"q": "What are the 'Three Hs' of AI alignment defined by Anthropic?",
                 "a": ["Helpful, Honest, and Harmless", "Hardware, Hosting, and Hyperparameters", "HTML, HTTP, and HTTPS", "Headers, Hashes, and Handshakes"],
                 "c": 0, "why": "Helpful, Honest, and Harmless represent the foundational triumvirate of safe AI alignment."},
                {"q": "Why was classical PPO-based RLHF notoriously difficult to train?",
                 "a": ["It required keeping four large neural networks simultaneously in GPU memory and suffered from extreme hyperparameter instability", "PPO is written in assembly", "PPO requires paper punch cards", "PPO cannot run on Linux"],
                 "c": 0, "why": "PPO requires the policy model, reference model, reward model, and value network in VRAM simultaneously."},
                {"q": "How does DPO eliminate the need for a separate reward model?",
                 "a": ["It derives an exact mathematical equivalence between the optimal policy and the reward function, training the model directly on preference pairs", "It deletes the rewards", "It uses an SQL database instead", "It turns off alignment"],
                 "c": 0, "why": "DPO re-parameterizes the reward function in terms of the language model policy itself."},
                {"q": "What is 'Reward Hacking' (or Specification Gaming) in RLHF?",
                 "a": ["When a model discovers weird loopholes (like excessive flattery or verbosity) that score high with the reward model without actually being helpful", "A hacker stealing the reward model", "A database corruption bug", "A compiler error"],
                 "c": 0, "why": "Models exploit flaws in reward functions to maximize score through unintended shortcuts."}
            ],
            "You understand the principles and mechanics of RLHF and Direct Preference Optimization.",
            "Reasoning Models and Test-Time Compute", "Explore the new frontier: models that deliberate and think before answering."
        ),
        build_lesson(
            7, "reasoning-models-test-time-compute", "Reasoning Models and Test-Time Compute", "Reasoning Models",
            "The new paradigm: OpenAI o1, o3, and DeepSeek R1 using test-time compute, search, and self-correction tokens.",
            "How do reasoning models (like o1 or DeepSeek R1) solve complex math and coding problems that stump standard LLMs?",
            ["They generate hidden chain-of-thought 'thinking tokens' before answering, exploring multiple hypotheses, checking for errors, and self-correcting", "They search Google in real time", "They use quantum processors", "They ask human mathematicians behind the scenes"],
            0, "Reasoning models spend compute during inference to generate internal thinking tokens that explore and self-correct.",
            [
                "<p>Until recently, scaling AI meant scaling pre-training: bigger clusters, more data. In late 2024, a major new scaling dimension emerged: <strong>Test-Time Compute Scaling</strong> (as demonstrated by OpenAI o1/o3 and DeepSeek R1).</p>",
                "<p>Standard models (like GPT-4o) try to answer immediately in their very first output token. For a simple question, that works. But for a 100-line coding challenge or complex Olympiad math proof, answering in one forward pass is like asking a human to play chess without thinking ahead!</p>",
                "<p><strong>Reasoning Models</strong> spend computational tokens <em>thinking</em> before emitting their final answer:</p>",
                "<ul><li><strong>Hidden Chain of Thought:</strong> The model generates hundreds or thousands of internal 'thinking tokens' that are invisible to the user.</li><li><strong>Hypothesis Exploration:</strong> It tries approach A, realizes it fails an edge case, backtracks, and tries approach B.</li><li><strong>Self-Correction & Verification:</strong> It checks its intermediate math steps against constraints before producing the final response.</li></ul>",
                "<pre><code># The Test-Time Compute Scaling Law (Snell et al., 2024):\n# Accuracy on competition math & coding scales logarithmically with the\n# number of thinking tokens spent at test time!\n# Prompt -> 4,000 Thinking Tokens (Self-Correction & Search) -> 200 Token Solution (100% Correct!)</code></pre>",
                "<div class=\"callout\"><p><strong>The New Frontier:</strong> Pre-training scales knowledge. Test-time compute scales deliberate reasoning. For deep software engineering problems, reasoning models represent the state of the art.</p></div>"
            ],
            "Immediate Response vs Deliberate Reasoning", "Thinking tokens before generation",
            [
                {"title": "Standard Model (GPT-4o)", "lines": ["Immediate token generation", "No backtracking: errors compound", "Fast, but stumbles on complex logic"]},
                {"title": "Reasoning Model (o1 / R1)", "lines": ["Generates 2,000 hidden thinking tokens", "Explores branches & verifies math", "Outputs verified, high-accuracy code"]}
            ],
            "Inference Scaling Laws", "Accuracy scaling with thinking compute",
            [
                {"title": "Low Thinking Tokens (100)", "lines": ["Scores 45% on competition math", "Basic surface reasoning"]},
                {"title": "High Thinking Tokens (10,000)", "lines": ["Scores 90%+ on competition math", "Deep exploration & self-correction"]}
            ],
            "Complete the reasoning models sentence",
            "Reasoning models scale test-time compute by generating internal {1} tokens that explore hypotheses and {2} errors before answering.",
            [
                {"answer": "thinking", "hint": "Internal chain-of-thought tokens", "options": ["thinking", "binary", "formatting"]},
                {"answer": "self-correct", "hint": "Fixing mistakes during deliberation", "options": ["self-correct", "compile", "delete"]}
            ],
            [
                {"q": "What is the primary difference in user experience when invoking a reasoning model compared to a standard LLM?",
                 "a": ["Reasoning models exhibit a noticeable thinking delay (5-30 seconds) before emitting the final answer", "Reasoning models are completely free", "Reasoning models only output audio", "Reasoning models run offline"],
                 "c": 0, "why": "The delay reflects the model generating thousands of internal thinking tokens to verify its answer."},
                {"q": "How was DeepSeek R1 trained to develop autonomous reasoning behaviors?",
                 "a": ["Using large-scale reinforcement learning with rule-based verification rewards (math correctness, compiler pass rates) without heavy human labeling", "By copying Wikipedia", "By hand-coding logic in C", "By asking users for feedback"],
                 "c": 0, "why": "Pure RL with objective verifiers (math/code compilers) naturally incentivizes models to develop chain-of-thought reasoning."},
                {"q": "When should an engineer choose a reasoning model over a fast standard model?",
                 "a": ["For complex algorithmic problems, intricate bug diagnosis, architectural planning, and mathematical proofs", "For generating short social media tweets", "For basic spelling checks", "For low-latency autocomplete"],
                 "c": 0, "why": "Reasoning models deliver massive accuracy gains on deep technical and logical challenges."},
                {"q": "Can you inspect the thinking tokens generated by open-weights reasoning models like DeepSeek R1?",
                 "a": ["Yes; open-weights reasoning models output their full <think> ... </think> tokens for complete transparency", "No; thinking tokens are encrypted by hardware", "Thinking tokens are deleted by Python", "Thinking tokens are illegal to view"],
                 "c": 0, "why": "Open reasoning models enclose their internal reasoning traces inside accessible `<think>` tags."}
            ],
            "You understand the architecture and inference scaling laws of reasoning models.",
            "What Happens During Generation: Probability Distributions", "Trace the journey from transformer output to emitted token."
        ),
        build_lesson(
            8, "generation-probability-distributions", "What Happens During Generation: Probability Distributions", "Generation Mechanics",
            "Inside the final milliseconds of generation: logits, Softmax, temperature, top-p filtering, and token emission.",
            "What is the final mathematical layer of a transformer decoder before a token is sampled?",
            ["A linear Language Model Head projecting hidden states to vocabulary logits, followed by Softmax normalization", "A database query", "A regular expression filter", "A git commit hook"],
            0, "The LM Head projects the final hidden state across all vocabulary tokens, producing logits normalized by Softmax.",
            [
                "<p>We have traced the full life cycle of Large Language Models: from web crawling and pre-training, to subword BPE tokenization, transformer attention blocks, and SFT/RLHF alignment. Now, let us look at the final milliseconds: <strong>What happens when a model generates a single token?</strong></p>",
                "<ol><li><strong>Final Hidden State ($h_{final}$):</strong> The last token passes through all 80 transformer layers, emerging as an enriched 4,096-dimensional vector representing the full context.</li><li><strong>The Language Model Head ($W_{LM}$):</strong> A linear matrix multiplication projects this 4,096D vector across the entire 128,000-word vocabulary: $\\text{logits} = h_{final} @ W_{LM}$.</li><li><strong>Temperature Scaling:</strong> Logits are scaled: $\\text{logits} / T$. Low temperature sharpens differences; high temperature flattens them.</li><li><strong>Filtering (Top-K / Top-P):</strong> Truncates the long tail of bizarre tokens, keeping only plausible candidates.</li><li><strong>Softmax Normalization:</strong> Exponentiates and normalizes remaining logits into a probability distribution summing to $1.0$.</li><li><strong>Sampling:</strong> A pseudo-random number generator samples the next token according to the distribution!</li></ol>",
                "<pre><code># The Complete Final Mile of Token Generation in Python:\ndef sample_next_token(hidden_state, W_vocab, temperature=0.7, top_p=0.9):\n    # 1. Compute Logits across 128k vocabulary\n    logits = np.dot(hidden_state, W_vocab)\n    # 2. Scale by Temperature\n    scaled_logits = logits / temperature\n    # 3. Softmax to Probabilities\n    probs = np.exp(scaled_logits) / np.sum(np.exp(scaled_logits))\n    # 4. Top-P (Nucleus) filter & sample!\n    sampled_token_id = np.random.choice(len(probs), p=probs)\n    return sampled_token_id</code></pre>",
                "<div class=\"callout\"><p><strong>The Full Picture:</strong> You now understand how modern LLMs work from the physics of transformers and data pipelines down to the exact math of the final emitted token.</p></div>"
            ],
            "The Final Milliseconds of Generation", "From hidden state vector to sampled token",
            [
                {"title": "1. Hidden State (4,096D)", "lines": ["Enriched representation of all context", "Output of final transformer layer"]},
                {"title": "2. LM Head (128k Logits)", "lines": ["Projects vector across full vocabulary", "Raw unnormalized scores"]},
                {"title": "3. Temperature & Top-P", "lines": ["Scales and filters the distribution", "Eliminates low-probability noise"]},
                {"title": "4. Sample & Emit", "lines": ["Random sampling selects Token ID", "Decoded by BPE into text!"]}
            ],
            "The Generation Cycle Completes", "Feeding back into the context",
            [
                {"title": "Emitted Token ID", "lines": ["Appended to input sequence", "Loop begins again for Token N+1"]},
                {"title": "KV-Cache Acceleration", "lines": ["Only new token is computed", "Past Key/Value states loaded from RAM!"]}
            ],
            "Complete the generation mechanics sentence",
            "The final hidden state is projected by the Language Model Head into vocabulary {1}, scaled by temperature, and normalized by {2} for sampling.",
            [
                {"answer": "logits", "hint": "Raw unnormalized scores", "options": ["logits", "passwords", "tokens"]},
                {"answer": "Softmax", "hint": "Probability normalization function", "options": ["Softmax", "ReLU", "Sigmoid"]}
            ],
            [
                {"q": "What are 'logits' in a language model?",
                 "a": ["The unnormalized raw output scores produced by multiplying the final hidden state by the vocabulary projection matrix", "Log files written to disk", "The mathematical logarithm of numbers", "Login session cookies"],
                 "c": 0, "why": "Logits are raw real numbers that Softmax transforms into probabilities."},
                {"q": "How does KV-Caching optimize subsequent token generation in autoregressive LLMs?",
                 "a": ["It caches the Key and Value matrices of all previous tokens in GPU RAM so only the single new token needs to be computed on each step", "It caches HTML web pages", "It turns off model weights", "It eliminates the need for GPUs"],
                 "c": 0, "why": "KV-caching avoids recomputing QKV projections for existing prompt tokens during generation."},
                {"q": "What happens when temperature is set to 0.0 during sampling?",
                 "a": ["Greedy decoding: the model deterministically selects the single token with the highest logit score (argmax)", "The model stops generating text", "The model outputs random numbers", "The computer processor freezes"],
                 "c": 0, "why": "Temperature 0 collapses the sampling distribution to the argmax maximum probability token."},
                {"q": "What is the role of Top-P (Nucleus) sampling?",
                 "a": ["It dynamically limits candidate tokens to the smallest set whose cumulative probability exceeds P (e.g. 0.90), cutting off the long tail of gibberish", "It filters words starting with the letter P", "It speeds up network latency", "It forces models to write Python"],
                 "c": 0, "why": "Nucleus sampling dynamically truncates low-probability tail tokens based on distribution confidence."}
            ],
            "You have completed the How LLMs Work course.",
            "Next Course: Tokens, Context Windows & Context Limits", "Explore token economics, quadratic attention scaling, and context window limits."
        )
    ]

    glossary = [
        {"id": "pretraining", "title": "Autoregressive & Pre-training", "terms": [
            {"term": "Autoregressive Generation", "def": "A sequential generation process where previous outputs are fed back into the input sequence to predict subsequent tokens.", "lesson": 1, "tags": ["llms", "generation"]},
            {"term": "Base Model", "def": "A foundation model trained purely on next-token prediction across trillions of tokens before any instruction tuning.", "lesson": 5, "tags": ["models", "training"]},
            {"term": "MinHash Deduplication", "def": "An algorithmic data pipeline technique that identifies and purges near-duplicate documents from training corpora.", "lesson": 2, "tags": ["data", "preprocessing"]}
        ]},
        {"id": "tokenization", "title": "Tokenization & Scaling", "terms": [
            {"term": "Byte-Pair Encoding", "def": "A subword tokenization algorithm that iteratively merges frequent character pairs into reusable vocabulary tokens.", "lesson": 3, "tags": ["tokenization", "nlp"]},
            {"term": "Chinchilla Scaling Laws", "def": "Empirical laws proving that compute-optimal training requires scaling model parameters and training tokens in equal 1:1 proportion.", "lesson": 4, "tags": ["scaling", "theory"]},
            {"term": "Emergent Capability", "def": "A capability that appears suddenly at scale as continuous cross-entropy loss crosses critical performance thresholds.", "lesson": 4, "tags": ["theory", "scale"]}
        ]},
        {"id": "post-training", "title": "Post-Training Alignment", "terms": [
            {"term": "Supervised Fine-Tuning", "def": "Instruction tuning a base model on curated prompt-response pairs to teach it conversational assistant behavior.", "lesson": 5, "tags": ["alignment", "sft"]},
            {"term": "Direct Preference Optimization", "def": "An alignment algorithm optimizing models directly on human preference pairs (win, lose) without a separate reward model.", "lesson": 6, "tags": ["alignment", "dpo"]},
            {"term": "Reward Hacking", "def": "A failure mode where an agent exploits loopholes in a reward model (e.g. verbosity) without satisfying true human intent.", "lesson": 6, "tags": ["alignment", "pitfalls"]}
        ]},
        {"id": "inference", "title": "Reasoning & Inference", "terms": [
            {"term": "Reasoning Model", "def": "A model that generates internal chain-of-thought thinking tokens during inference to explore and self-correct.", "lesson": 7, "tags": ["reasoning", "models"]},
            {"term": "Test-Time Compute", "def": "Allocating extra inference computational tokens to allow models to deliberate and explore multiple reasoning paths.", "lesson": 7, "tags": ["inference", "scaling"]},
            {"term": "Language Model Head", "def": "The final linear projection layer in a transformer that maps hidden states to raw vocabulary logits.", "lesson": 8, "tags": ["architecture", "transformers"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "Tokenization Inspection with Tiktoken",
            "label": "Analyzing token sequences",
            "code": "import tiktoken\nenc = tiktoken.get_encoding(\"cl100k_base\")\ntokens = enc.encode(\"Hello world!\")\nprint(tokens)  # [9906, 1917, 0]\nprint([enc.decode([t]) for t in tokens])",
            "lessonN": 3, "lessonSlug": "tokenization-bpe-sentencepiece", "lessonTitle": "Tokenization: Byte-Pair Encoding (BPE) and SentencePiece"
        },
        {
            "title": "Chinchilla Compute-Optimal Ratio",
            "label": "Optimal parameter vs data scaling",
            "code": "# Optimal rule: Tokens ≈ 20 * Parameters\n# 8B Parameters   -> 160 Billion Tokens (Minimum)\n# 70B Parameters  -> 1.4 Trillion Tokens (Minimum)\n# Over-training (e.g. 15T on 8B) pays off in cheap inference!",
            "lessonN": 4, "lessonSlug": "emergent-capabilities-scaling-laws", "lessonTitle": "Emergent Capabilities and Scaling Laws"
        },
        {
            "title": "ChatML Prompt Formatting",
            "label": "Special token conversational boundaries",
            "code": "<|im_start|>system\nYou are an expert Python engineer.<|im_end|>\n<|im_start|>user\nWrite a binary search function.<|im_end|>\n<|im_start|>assistant\ndef binary_search(arr, target): ...<|im_end|>",
            "lessonN": 5, "lessonSlug": "supervised-fine-tuning-sft", "lessonTitle": "Supervised Fine-Tuning (SFT): From Completion to Assistant"
        },
        {
            "title": "DPO Loss Tuple Structure",
            "label": "Direct preference dataset format",
            "code": "dpo_example = {\n    \"prompt\": \"Explain recursion concisely.\",\n    \"chosen\": \"A function calling itself with a base case.\",\n    \"rejected\": \"Recursion is very cool and you should use it... (fluff)\"\n}",
            "lessonN": 6, "lessonSlug": "alignment-rlhf-and-dpo", "lessonTitle": "Alignment: RLHF and Direct Preference Optimization (DPO)"
        }
    ]

    course_data = {
        "id": "llms",
        "title": "How LLMs Work",
        "num": 66,
        "emoji": "💬",
        "desc": "Pretraining, next-token prediction and instruction tuning — what a language model is actually doing.",
        "topics": ["LLMs", "Next-Token Prediction", "Pre-training", "BPE Tokenization", "Scaling Laws", "Instruction Tuning", "RLHF & DPO", "Reasoning Models"],
        "mission": "# Mission — How LLMs Work\n\nDemystify the complete scientific and engineering pipeline of Large Language Models. Master autoregressive next-token prediction, explore petabyte-scale data filtering and supercomputing clusters, dissect Byte-Pair Encoding tokenizers, understand Chinchilla scaling laws, transform base models with Supervised Fine-Tuning, align behavior with Direct Preference Optimization (DPO), leverage test-time compute in reasoning models, and trace final token emission math.",
        "notes": "# Notes — How LLMs Work\n\nLanguage models are not static knowledge retrieval engines; they are statistical sequence simulators. High-quality curation during pre-training and alignment provides the foundation for general intelligence.",
        "resources": "# Resources — How LLMs Work\n\n- Jared Kaplan et al., *Scaling Laws for Neural Language Models (OpenAI)*\n- Jordan Hoffmann et al., *Training Compute-Optimal Large Language Models (Chinchilla)*\n- Rafael Rafailov et al., *Direct Preference Optimization: Your Language Model is Secretly a Reward Model*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

if __name__ == "__main__":
    make_course_66()

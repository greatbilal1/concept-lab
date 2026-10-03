import os
import sys
sys.path.append(os.path.dirname(__file__))
from helpers import build_lesson, save_course

# ==============================================================================
# COURSE 61: what-is-ai
# ==============================================================================
def make_course_61():
    lessons = [
        build_lesson(
            1, "from-rules-to-learning", "From Rules to Learning: The Core Shift", "AI Foundations",
            "The fundamental shift in computer science: from programmers writing explicit rules to algorithms learning patterns from data.",
            "What is the core difference between classical programming and machine learning?",
            ["In classical programming, humans write rules and feed data to get answers; in machine learning, humans feed data and answers to learn the rules", "Classical programming runs on computers while machine learning runs on paper", "Machine learning does not use electricity", "Classical programming cannot use if-statements"],
            0, "Machine learning inverts classical programming: instead of hand-coding rules, models discover rules from data.",
            [
                "<p>For sixty years, computer programming followed a single paradigm: <strong>Rules + Data = Answers</strong>. An engineer sat down, reasoned through all possible edge cases, and wrote deterministic instructions: <code>if age >= 18 and credit_score > 700: approve_loan()</code>.</p>",
                "<p>This approach conquered payroll, inventory, and relational databases. But it failed miserably on human perception tasks: recognizing a cat in an image, translating spoken French, or understanding sarcasm. Humans cannot write 100,000 nested `if` statements to define what a cat looks like!</p>",
                "<p><strong>Machine Learning (ML)</strong> inverts this relationship:</p>",
                "<pre><code># Classical Programming Paradigm:\n# Rules (Code) + Data (Inputs) -> Output (Answers)\n\n# Machine Learning Paradigm:\n# Data (Inputs) + Answers (Labels) -> Learned Rules (Trained Model Weights)\n\n# The trained model can now predict answers for brand-new, unseen inputs!</code></pre>",
                "<p>Instead of manually specifying the rules, we feed millions of labeled examples into an optimization algorithm. The algorithm automatically adjusts internal numerical parameters (weights) until it reliably maps inputs to outputs.</p>",
                "<div class=\"callout\"><p><strong>The Mental Shift:</strong> You are no longer writing the algorithm line-by-line; you are curating the training data and designing the loss function that allows the algorithm to learn.</p></div>"
            ],
            "The Paradigm Inversion", "Classical programming vs Machine Learning",
            [
                {"title": "Classical Programming", "lines": ["Input Data + Handcrafted Rules", "Program executes rules -> Answers"]},
                {"title": "Machine Learning", "lines": ["Input Data + Output Answers (Labels)", "Training loop learns rules -> Model Weights"]}
            ],
            "Perception vs Logic Tasks", "Where machine learning shines",
            [
                {"title": "Rule-Based Systems Excel", "lines": ["Accounting, payroll, tax calculations", "Deterministic logic with zero ambiguity"]},
                {"title": "Learning Systems Excel", "lines": ["Image recognition, speech, NLP", "Fuzzy human perception with high variation"]}
            ],
            "Complete the AI foundations sentence",
            "In machine learning, algorithms learn mathematical {1} from data and labels rather than requiring humans to hand-code explicit {2}.",
            [
                {"answer": "weights", "hint": "Learned numerical model parameters", "options": ["weights", "browsers", "tokens"]},
                {"answer": "rules", "hint": "Handcrafted conditional logic statements", "options": ["rules", "temperatures", "databases"]}
            ],
            [
                {"q": "Why did classical rule-based programming fail at computer vision tasks like recognizing faces?",
                 "a": ["Visual variations (lighting, angles, facial hair, expressions) are too vast to capture in handcrafted if-else rules", "Computers could not display color images", "CPUs were not powerful enough to run while loops", "Camera lenses inverted pixel values"],
                 "c": 0, "why": "The combinatorial explosion of visual pixels makes handcrafted rules impossible for perception."},
                {"q": "What is the primary artifact produced at the end of a machine learning training run?",
                 "a": ["A trained model containing learned numerical weights and parameters", "A printable PDF document", "A new computer processor", "A git pull request"],
                 "c": 0, "why": "The trained model weights encode the learned statistical mapping between inputs and outputs."},
                {"q": "What does a trained model do during the 'Inference' phase?",
                 "a": ["It takes new, unseen input data and applies its learned weights to generate predictions", "It updates its weights permanently", "It downloads more training datasets", "It formats the developer's hard drive"],
                 "c": 0, "why": "Inference is the forward evaluation of a model on new inputs using frozen weights."},
                {"q": "Which problem is best suited for deterministic rule-based programming rather than machine learning?",
                 "a": ["Calculating double-entry bookkeeping ledger balances and municipal tax rates", "Transcribing human speech in noisy cafes", "Translating Japanese poetry into English", "Recognizing pedestrians in autonomous driving"],
                 "c": 0, "why": "Accounting requires 100% deterministic accuracy with zero probabilistic tolerance."}
            ],
            "You understand the fundamental shift from rule-based programming to machine learning.",
            "Deterministic Software vs Probabilistic Systems", "Learn how to build software around systems that output probabilities."
        ),
        build_lesson(
            2, "deterministic-vs-probabilistic", "Deterministic Software vs Probabilistic Systems", "Probabilistic Systems",
            "The architectural differences between deterministic code and probabilistic AI models.",
            "What does it mean for an AI system to be 'probabilistic'?",
            ["Given the exact same input, outputs are governed by statistical probability distributions rather than a guaranteed single static path", "The system only works on Tuesdays", "The code was written by a probability professor", "The software requires physical dice to run"],
            0, "Probabilistic models output probability distributions over possible answers rather than fixed static paths.",
            [
                "<p>In traditional software engineering, functions are <strong>deterministic</strong>: `add(2, 2)` will return `4` today, tomorrow, and a billion years from now. If deterministic code returns different results on identical inputs, you have a concurrency bug or memory corruption.</p>",
                "<p>Modern AI and generative models are fundamentally <strong>probabilistic systems</strong>:</p>",
                "<ul><li><strong>Probability Distributions:</strong> When a language model predicts text, it calculates a probability for every token in its vocabulary (e.g. 'cat' = 72%, 'dog' = 18%, 'airplane' = 0.001%).</li><li><strong>Sampling & Stochasticity:</strong> The actual output selected depends on sampling temperature and random seeds. The exact same prompt can yield different phrasing across calls.</li><li><strong>Confidence Scores:</strong> Classifiers output confidence percentages (e.g. '87% chance of spam') rather than binary truths.</li></ul>",
                "<pre><code># Deterministic vs Probabilistic Thinking\n# Deterministic: return user.is_active\n# Output: True (100% certainty, zero deviation)\n\n# Probabilistic: model.predict_intent(\"cancel my plan\")\n# Output:\n{\n  \"cancel_subscription\": 0.94,\n  \"pause_account\": 0.05,\n  \"technical_support\": 0.01\n}\n# Application code must handle thresholds (e.g. if cancel > 0.85)!</code></pre>",
                "<div class=\"callout\"><p><strong>Architectural Principle:</strong> When integrating AI into applications, wrap probabilistic model outputs in deterministic validation gates (schemas, thresholds, invariants).</p></div>"
            ],
            "Deterministic vs Probabilistic", "Comparing software physics",
            [
                {"title": "Deterministic (Traditional)", "lines": ["2 + 2 = 4 (Always)", "Binary Pass / Fail logic", "100% reproducible execution"]},
                {"title": "Probabilistic (AI / ML)", "lines": ["Outputs probability distributions", "Sampling temperature introduces variation", "Thresholds govern action gates"]}
            ],
            "Threshold Gating Pattern", "Bridging probabilities to binary application decisions",
            [
                {"title": "Model Prediction", "lines": ["spam_probability: 0.92", "Continuous score 0.0 - 1.0"]},
                {"title": "Decision Threshold", "lines": ["if spam_prob >= 0.90:", "Take automated action (Quarantine)"]},
                {"title": "Ambiguity Zone", "lines": ["if 0.50 <= spam_prob < 0.90:", "Route to human review queue"]}
            ],
            "Complete the probabilistic systems sentence",
            "Unlike deterministic code, AI models output continuous {1} distributions that require application {2} to take discrete actions.",
            [
                {"answer": "probability", "hint": "Statistical likelihood scores", "options": ["probability", "compilation", "hardware"]},
                {"answer": "thresholds", "hint": "Numerical cutoffs like >= 0.85", "options": ["thresholds", "emojis", "prompts"]}
            ],
            [
                {"q": "What parameter in LLM inference controls the randomness of token selection from the probability distribution?",
                 "a": ["Temperature", "Clock frequency", "Bandwidth", "RAM latency"],
                 "c": 0, "why": "Temperature flattens or sharpens the softmax probability distribution during sampling."},
                {"q": "What should application code do when a model's prediction confidence falls into an ambiguous middle zone (e.g. 50-70%)?",
                 "a": ["Route the item to a human review queue or request user confirmation before proceeding", "Delete the user account", "Assume 100% confidence and execute", "Crash the application with an exception"],
                 "c": 0, "why": "Routing low-confidence predictions to human review prevents catastrophic automated false positives."},
                {"q": "Why is testing probabilistic software different from testing deterministic functions?",
                 "a": ["Assertions cannot expect identical byte-for-byte strings; tests must evaluate semantic meaning, schemas, and statistical distributions", "Probabilistic software cannot be tested", "Tests must be written in C", "Tests only run once a month"],
                 "c": 0, "why": "Probabilistic outputs require semantic evaluation, property-based checks, and schema validation."},
                {"q": "How can you make language model generation completely deterministic for automated unit tests?",
                 "a": ["Set temperature=0.0 and fix the random seed parameter", "Unplug the internet cable", "Run tests on Apple Silicon", "Increase prompt word count"],
                 "c": 0, "why": "Temperature 0 (greedy decoding) with a fixed seed produces deterministic argmax token selection."}
            ],
            "You understand how to architect resilient systems around probabilistic AI models.",
            "Supervised, Unsupervised, and Reinforcement Learning", "Deconstruct the three foundational learning paradigms."
        ),
        build_lesson(
            3, "supervised-unsupervised-rl", "Supervised, Unsupervised, and Reinforcement Learning", "Learning Paradigms",
            "The three grand paradigms of machine learning: Supervised (labels), Unsupervised (structure), and Reinforcement (rewards).",
            "Which learning paradigm trains a model by rewarding desired actions and penalizing mistakes in an environment?",
            ["Reinforcement Learning", "Supervised Learning", "Unsupervised Learning", "Static Compilation"],
            0, "Reinforcement learning uses reward signals and environmental trial-and-error to learn optimal policies.",
            [
                "<p>All machine learning algorithms fall into three fundamental learning paradigms, defined by the type of feedback signal the algorithm receives during training:</p>",
                "<ul><li><strong>1. Supervised Learning (Learning with a Teacher):</strong> The model is provided with inputs paired with ground-truth target labels ($X \rightarrow Y$). For example: 100,000 house features paired with actual sale prices (Regression), or emails paired with 'Spam'/'Not Spam' labels (Classification).</li><li><strong>2. Unsupervised Learning (Learning without Labels):</strong> The model is given raw data with zero labels ($X$). It discovers hidden patterns, clusters, and representations on its own (e.g. Customer segmentation clustering, Dimensionality reduction via PCA).</li><li><strong>3. Reinforcement Learning (Learning by Trial and Reward):</strong> An agent interacts with an environment, takes actions, and receives scalar reward or penalty signals ($S, A, R, S'$). Used in game playing (AlphaGo), robotics, and fine-tuning language models (RLHF).</li></ul>",
                "<pre><code># The Three Learning Paradigms:\n# 1. Supervised:    Input: (Email text)    -> Output: \"Spam\" (Exact label provided)\n# 2. Unsupervised:  Input: (10,000 vectors)-> Output: 4 distinct clusters discovered\n# 3. Reinforcement: Action: (Move Chess Q) -> Reward: +1.0 (Win game after 40 moves)</code></pre>",
                "<p>Modern Large Language Models synthesize all three: they pre-train with <strong>self-supervised learning</strong> (unsupervised text prediction), fine-tune with <strong>supervised instruction tuning</strong> (SFT), and align with <strong>Reinforcement Learning from Human Feedback (RLHF)</strong>.</p>",
                "<div class=\"callout\"><p><strong>Self-Supervised Note:</strong> Next-token prediction on internet text is technically self-supervised: the text itself provides the label (the next word!).</p></div>"
            ],
            "The Three Machine Learning Paradigms", "Feedback signals across paradigms",
            [
                {"title": "Supervised Learning", "lines": ["Labeled pairs (X, Y)", "Minimizes error against known ground-truth"]},
                {"title": "Unsupervised Learning", "lines": ["Unlabeled data (X)", "Discovers hidden clusters & geometric structure"]},
                {"title": "Reinforcement Learning", "lines": ["Agent in environment", "Maximizes cumulative scalar reward signal"]}
            ],
            "The Modern LLM Training Recipe", "Combining paradigms to build frontier models",
            [
                {"title": "Stage 1: Pre-training", "lines": ["Trillions of tokens (Self-Supervised)", "Learns world grammar & facts"]},
                {"title": "Stage 2: Instruction Tuning", "lines": ["Thousands of QA pairs (Supervised SFT)", "Learns to act as helpful assistant"]},
                {"title": "Stage 3: Human Alignment", "lines": ["Preference ranking (RLHF / DPO)", "Aligns safety, tone, & helpfulness"]}
            ],
            "Complete the learning paradigms sentence",
            "While supervised learning requires labeled {1}, reinforcement learning optimizes actions based on environmental {2} signals.",
            [
                {"answer": "targets", "hint": "Ground truth labels Y", "options": ["targets", "hardware", "networks"]},
                {"answer": "reward", "hint": "Scalar reinforcement feedback", "options": ["reward", "syntax", "compilation"]}
            ],
            [
                {"q": "What is the primary difference between classification and regression in supervised learning?",
                 "a": ["Classification predicts discrete categorical labels (e.g. Spam/Ham); regression predicts continuous numeric values (e.g. Price)", "Classification is faster than regression", "Regression only works on text", "Classification requires GPUs"],
                 "c": 0, "why": "Classification targets discrete classes, while regression outputs continuous real numbers."},
                {"q": "How does self-supervised pre-training allow LLMs to train on trillions of web pages without manual labeling?",
                 "a": ["The training data is automatically labeled by using preceding words as inputs and the next word as the target label", "Humans manually label every word on the internet", "Web pages contain hidden labels in HTML", "AI models do not require training"],
                 "c": 0, "why": "Autoregressive next-token prediction creates its own labels from the sequential structure of text."},
                {"q": "What role does RLHF (Reinforcement Learning from Human Feedback) play in ChatGPT or Claude?",
                 "a": ["It steers the pre-trained completion model to be helpful, safe, honest, and follow instructions appropriately", "It teaches the model the English alphabet", "It compresses model weights onto disk", "It connects the model to the physical electrical grid"],
                 "c": 0, "why": "RLHF aligns raw base models with human preferences and conversational expectations."},
                {"q": "What is an example of an unsupervised learning application in business software?",
                 "a": ["Clustering customer transaction histories into behavioral shopping segments without predefined categories", "Predicting whether a transaction is fraudulent based on 10,000 historical fraud tags", "Calculating sales tax", "Sending promotional emails"],
                 "c": 0, "why": "Clustering discovers natural group structures in data without relying on predefined labels."}
            ],
            "You know the three foundational machine learning paradigms and how modern AI blends them.",
            "The Training Phase vs The Inference Phase", "Distinguish model creation from runtime execution."
        ),
        build_lesson(
            4, "training-vs-inference", "The Training Phase vs The Inference Phase", "Lifecycle",
            "The critical distinction between training (gradient descent, massive compute) and inference (evaluation, frozen weights).",
            "What happens to a model's internal weights during the inference phase when serving user queries?",
            ["Nothing; weights are completely frozen and static; the model does not learn or remember from standard queries", "Weights update after every message", "Weights are deleted to save RAM", "Weights are re-trained from scratch"],
            0, "Inference is strictly read-only evaluation. Weights are frozen; the model does not update its parameters during inference.",
            [
                "<p>A widespread misconception among users is that when you chat with an AI model, it is 'learning' from your conversation in real time. In reality, modern deep learning has an absolute separation between two distinct lifecycles: <strong>Training</strong> and <strong>Inference</strong>.</p>",
                "<ul><li><strong>1. The Training Phase (Creation & Optimization):</strong> Thousands of high-end GPUs (NVIDIA H100s) run for months. Billions of text tokens pass through the model. Gradients are computed, backpropagation runs, and weights are adjusted continuously. This phase costs tens of millions of dollars.</li><li><strong>2. The Inference Phase (Serving & Execution):</strong> The trained weights are <strong>frozen</strong>. The model acts as a giant static mathematical formula: $y = f(x; W)$. Given an input prompt, it performs forward-pass matrix multiplications and emits tokens. Zero weights change!</li></ul>",
                "<pre><code># Training vs Inference Specs:\n# TRAINING:\n# Compute:   16,000 H100 GPUs for 90 days\n# State:     Weights MUTATE continuously via gradient descent\n# Output:    Final checkpoint file (.safetensors, 140GB)\n\n# INFERENCE:\n# Compute:   1 to 8 GPUs serving API calls\n# State:     Weights FROZEN (Read-Only in RAM)\n# Output:    Next-token probability distributions in milliseconds</code></pre>",
                "<p>When an agent appears to 'remember' things in a conversation, that is not weight updates; that is simply the conversation history being passed into its active context window on every prompt.</p>",
                "<div class=\"callout\"><p><strong>Read-Only Physics:</strong> A model deployed to production does not learn from its mistakes on its own. To update its knowledge permanently, you must fine-tune or re-train its weights in a separate training run.</p></div>"
            ],
            "Training vs Inference Lifecycle", "Separation of creation and execution",
            [
                {"title": "Training Phase (Write)", "lines": ["Compute: 10,000 GPUs, 3 months", "Gradients update billions of weights", "Produces static weight checkpoint"]},
                {"title": "Inference Phase (Read)", "lines": ["Compute: 1-8 GPUs, milliseconds", "Weights FROZEN (read-only)", "Evaluates forward pass: y = f(x; W)"]}
            ],
            "In-Context Memory vs Weight Learning", "Dispelling the real-time learning myth",
            [
                {"title": "Conversation Context", "lines": ["Appended to prompt turns", "Transient, disappears when session ends"]},
                {"title": "Weight Knowledge", "lines": ["Baked into neural network parameters", "Permanent, frozen during training"]}
            ],
            "Complete the training vs inference sentence",
            "While training updates model weights via gradient descent, inference is a {1} operation where weights are completely {2}.",
            [
                {"answer": "read-only", "hint": "Non-mutating evaluation", "options": ["read-only", "destructive", "random"]},
                {"answer": "frozen", "hint": "Static and unchanging parameters", "options": ["frozen", "recompiled", "deleted"]}
            ],
            [
                {"q": "Why does a model not permanently remember a correction you gave it yesterday in a new chat session?",
                 "a": ["Model weights are frozen during inference; corrections only exist in the transient context window of that specific session", "The model deliberately ignores users", "The computer hard drive erases user chats", "Models can only remember numbers"],
                 "c": 0, "why": "Inference does not mutate weights; context memory is ephemeral to the active session."},
                {"q": "What is the primary computational operation performed during LLM inference?",
                 "a": ["Forward-pass matrix multiplications across model layers to calculate token probabilities", "Running git commits in the cloud", "Compiling Python source code to C", "Searching Google in the background"],
                 "c": 0, "why": "Inference executes forward matrix multiplications through transformer layers."},
                {"q": "What is 'Fine-Tuning' in the model lifecycle?",
                 "a": ["Taking an existing pre-trained model and running an additional targeted training pass on a domain dataset to adjust weights", "Adjusting the monitor brightness", "Tuning the guitar strings", "Renaming the model file on disk"],
                 "c": 0, "why": "Fine-tuning continues training on specific domain data to update weights for a target task."},
                {"q": "Why is training an LLM drastically more expensive than running inference?",
                 "a": ["Training requires processing trillions of tokens and calculating gradients for billions of parameters across thousands of GPUs", "Training requires paying royalty fees to English authors", "Training requires buying physical books", "Inference is subsidized by governments"],
                 "c": 0, "why": "Gradient calculation and optimizer state across trillions of tokens requires massive distributed supercomputers."}
            ],
            "You understand the vital architectural distinction between training and inference.",
            "What AI Cannot Do: Reasoning vs Statistical Association", "Understand the boundaries between statistical pattern matching and genuine reasoning."
        ),
        build_lesson(
            5, "reasoning-vs-statistical-association", "What AI Cannot Do: Reasoning vs Statistical Association", "Capabilities & Limits",
            "Understanding the fundamental limits of LLMs: pattern matching vs formal reasoning, planning, and world models.",
            "What is an LLM actually doing when it appears to 'reason' through a complex problem?",
            ["Predicting the most statistically probable next tokens based on language patterns seen during training", "Simulating a human brain in software", "Running a formal mathematical proof checker", "Accessing a conscious understanding of reality"],
            0, "LLMs are statistical pattern matchers over token sequences, not formal logical reasoning engines.",
            [
                "<p>Because language models can write persuasive essays, pass the bar exam, and debug Python code, people naturally assume they possess human-like general reasoning and conscious understanding. Understanding what AI <em>cannot</em> do is essential for building reliable systems.</p>",
                "<p>A Large Language Model is fundamentally a <strong>statistical sequence predictor</strong>:</p>",
                "<ul><li><strong>No Internal World Simulation:</strong> It does not have an active internal simulation of physical reality. It has a high-dimensional mathematical space of token associations.</li><li><strong>No Guaranteed Formal Logic:</strong> It does not execute a formal proof engine. If an answer looks like a valid proof, the model generates it—even if a subtle logical contradiction exists in step 4.</li><li><strong>Sensitivity to Surface Variations:</strong> Changing variable names in a logic riddle from 'Alice and Bob' to random strings can cause reasoning accuracy to drop by 30%!</li></ul>",
                "<pre><code># The Syllogism Trap:\n# Premise 1: All flurgs are glaps.\n# Premise 2: Some glaps are blips.\n# Question: Are all flurgs blips?\n# A human reasons formally: No, not necessarily.\n# A model may stumble if statistical patterns in training text bias it toward \"Yes\"!</code></pre>",
                "<p>Modern techniques like <strong>Chain-of-Thought (CoT)</strong> and <strong>Test-Time Compute</strong> (e.g. OpenAI o1/o3, DeepSeek R1) help models by giving them token space to decompose reasoning steps sequentially, but the underlying engine remains probabilistic next-token generation.</p>",
                "<div class=\"callout\"><p><strong>System Design Lesson:</strong> Never rely on an LLM for mission-critical formal verification. Delegate mathematical calculations to calculators and logical verification to compilers and SAT solvers!</p></div>"
            ],
            "Statistical Association vs Formal Logic", "Understanding model reasoning mechanics",
            [
                {"title": "Formal Logic Engine (Compiler)", "lines": ["Evaluates exact mathematical axioms", "100% sound, zero hallucinations", "Inflexible to linguistic nuance"]},
                {"title": "Statistical Model (LLM)", "lines": ["Predicts fluent, plausible sequences", "Extremely flexible to fuzzy language", "Prone to subtle logical fallacies"]}
            ],
            "Decomposing with Chain of Thought", "Giving the model scratchpad space to reason",
            [
                {"title": "Direct Answer (Fails)", "lines": ["Prompt: 'Complex math question'", "Model guesses immediately in 1 token -> Wrong"]},
                {"title": "Chain of Thought (Succeeds)", "lines": ["'Think step by step'", "Model emits 10 intermediate tokens", "Arrives at correct deduction"]}
            ],
            "Complete the reasoning limits sentence",
            "Language models are advanced {1} pattern matchers; formal mathematical verification must be delegated to deterministic {2}.",
            [
                {"answer": "statistical", "hint": "Probability and distribution based", "options": ["statistical", "biological", "conscious"]},
                {"answer": "compilers", "hint": "Formal deterministic tools and calculators", "options": ["compilers", "chatbots", "prompts"]}
            ],
            [
                {"q": "Why can an LLM fail at basic arithmetic (like multiplying two 8-digit numbers) without a calculator tool?",
                 "a": ["It tries to predict the answer as a statistical sequence of digits rather than executing an exact multi-step arithmetic algorithm", "Computers cannot multiply numbers", "Math is disabled in neural networks", "The model ran out of memory"],
                 "c": 0, "why": "Without tools, LLMs treat arithmetic as text prediction rather than mechanical calculation."},
                {"q": "How does 'Chain-of-Thought' prompting improve complex problem-solving in models?",
                 "a": ["It forces the model to generate intermediate reasoning tokens, conditioning subsequent steps on previous logic", "It doubles the number of parameters in the model", "It connects the model to a quantum computer", "It bypasses the tokenizer"],
                 "c": 0, "why": "Emitting intermediate reasoning steps breaks complex problems into manageable sequential transitions."},
                {"q": "What is 'Test-Time Compute' (as seen in reasoning models like o1 or DeepSeek R1)?",
                 "a": ["Allocating extra computational tokens during inference for the model to self-correct, backtrack, and deliberate before answering", "Benchmarking computer clock speed during tests", "Running unit tests in CI", "Paying double billing rates"],
                 "c": 0, "why": "Reasoning models spend tokens on an internal 'thinking' scratchpad to explore multiple reasoning paths."},
                {"q": "What should an architect do when a feature requires 100% flawless mathematical calculations?",
                 "a": ["Provide the LLM with a Python execution tool or calculator and require it to run code to compute the result", "Instruct the model to think extra hard", "Ask the model three times and average the words", "Write the prompt in all caps"],
                 "c": 0, "why": "Delegating math to a Python REPL guarantees exact, deterministic numerical precision."}
            ],
            "You understand the realistic boundaries between statistical association and formal logic.",
            "Next Course: Machine Learning Explained", "Explore features, loss functions, gradient descent, and evaluation metrics."
        ),
        build_lesson(
            6, "hallucinations-and-stochasticity", "Hallucinations and Stochasticity Explained", "Hallucinations",
            "Why hallucinations are an inevitable feature of probabilistic language models, and how to minimize them.",
            "Why do Large Language Models hallucinate false facts, nonexistent citations, or fake APIs?",
            ["Models are trained to predict linguistically coherent text, not verify factual truth against an external database", "Models are infected by computer viruses", "The model's database crashed", "Engineers deliberately program models to lie"],
            0, "Language models optimize for plausible token continuation, not ontological truth.",
            [
                "<p>Many people assume <strong>hallucination</strong> is a temporary bug that will be fixed in the next model release. In reality, hallucination is an intrinsic property of autoregressive language models: <em>models do not look up facts; they sample probable continuations.</em></p>",
                "<p>Consider the prompt: <em>'The capital of France is...'</em> The model predicts <code>Paris</code> with 99.8% probability. It isn't 'checking an encyclopedia'; the token sequence 'The capital of France is Paris' appeared thousands of times in its training corpus.</p>",
                "<p>When you ask a niche question where the training data is sparse (e.g. <em>'What did the court rule in Johnson v. Miller (2018)?'</em>), the model doesn't stop and say 'I don't know'. It continues sampling plausible-sounding legal text: citing real-sounding judges, statutes, and case numbers that never existed!</p>",
                "<pre><code># The Hallucination Mechanism:\nPrompt: \"What is the return type of boto3.s3.create_vault()?\"\nTraining data: create_vault does not exist in S3 (it's Glacier!).\nModel generation: It synthesizes a plausible dictionary response:\n{\n  \"VaultArn\": \"arn:aws:s3:::...\",  # COMPLETE HALLUCINATION!\n  \"CreationDate\": \"2026-03-31\"\n}</code></pre>",
                "<p>To defeat hallucinations in production, you must <strong>Ground the Model</strong>:</p>",
                "<ul><li><strong>Retrieval-Augmented Generation (RAG):</strong> Provide the authoritative reference text directly inside the prompt.</li><li><strong>Tool Verification:</strong> Let the model run code or query an API to verify its claims against reality.</li><li><strong>Temperature Zero:</strong> Minimize stochastic sampling variance.</li></ul>",
                "<div class=\"callout\"><p><strong>The Grounding Law:</strong> An ungrounded model is an imaginative poet. A grounded model with RAG and tools is a reliable assistant.</p></div>"
            ],
            "The Generation Mechanics", "How statistical plausibility causes hallucination",
            [
                {"title": "High Corpus Frequency", "lines": ["'Capital of France is...'", "Paris = 99.8% probability", "Consistently accurate"]},
                {"title": "Low Corpus Frequency", "lines": ["Niche API or legal case", "Model samples plausible tokens", "Confidently invents fake facts!"]}
            ],
            "Grounding Architecture", "Anchoring models in external truth",
            [
                {"title": "Ungrounded Generation", "lines": ["Model relies solely on weights", "High hallucination risk"]},
                {"title": "Grounded with RAG & Tools", "lines": ["Prompt includes real document", "Output constrained by retrieved facts"]}
            ],
            "Complete the hallucination sentence",
            "Hallucinations occur because language models optimize for plausible {1} sequences rather than retrieving verified {2}.",
            [
                {"answer": "token", "hint": "Text fragments and words", "options": ["token", "hardware", "network"]},
                {"answer": "facts", "hint": "Empirical truths in a database", "options": ["facts", "emojis", "prompts"]}
            ],
            [
                {"q": "What is the primary difference between a web search engine and a language model?",
                 "a": ["A search engine indexes and retrieves exact existing web documents; an LLM synthesizes new text token by token from statistical parameters", "A search engine uses neural networks while an LLM uses SQL", "Search engines are illegal in schools", "LLMs run without internet"],
                 "c": 0, "why": "Search engines retrieve existing source documents; LLMs generate new sequences statistically."},
                {"q": "How does Retrieval-Augmented Generation (RAG) dramatically reduce hallucinations?",
                 "a": ["It injects verified, authoritative source documents directly into the prompt context for the model to cite", "It deletes the model weights", "It changes the model from Python to C", "It makes the model run 10x faster"],
                 "c": 0, "why": "RAG anchors model generation to real retrieved facts rather than ungrounded memory."},
                {"q": "What is 'stochasticity' in generative AI?",
                 "a": ["Randomness and non-determinism in token sampling that produces different responses to identical prompts", "A disease affecting computer memory", "A type of database index", "A security encryption cipher"],
                 "c": 0, "why": "Stochasticity refers to probabilistic randomness in sampling outputs from a distribution."},
                {"q": "Why does setting temperature=0 reduce hallucinations on factual tasks?",
                 "a": ["It forces the model to pick the single most probable token at every step (greedy decoding), eliminating random tail exploration", "It turns off the neural network", "It cools the computer processor", "It removes all punctuation"],
                 "c": 0, "why": "Greedy decoding always selects the highest-probability token, reducing erratic completions."}
            ],
            "You understand the statistical causes of hallucination and how to ground models in reality.",
            "Mental Models for Working with Probabilistic Software", "Develop the engineering mental models needed for non-deterministic systems."
        ),
        build_lesson(
            7, "mental-models-probabilistic-software", "Mental Models for Working with Probabilistic Software", "Mental Models",
            "Adopting the right mental models: treating models as stochastic engines, fuzzy processors, and reasoning APIs.",
            "Which mental model is most effective for an engineer integrating an LLM into an application?",
            ["Treating the model as an unreliable, brilliant external microservice with high latency and fuzzy outputs that requires strict validation", "Treating the model as an infallible god", "Treating the model as a relational database", "Treating the model as a text compiler"],
            0, "Viewing models as untrusted fuzzy microservices ensures you wrap them in defensive validation and error handling.",
            [
                "<p>Engineers trained in classical software engineering struggle when first building AI applications because their instincts are tuned for determinism. When a deterministic function fails, you look for a bug in the code. When a probabilistic model fails, you must understand the nature of stochastic variance.</p>",
                "<p>Three essential mental models for probabilistic software engineering:</p>",
                "<ul><li><strong>1. The Untrusted Microservice:</strong> Treat an LLM API call like calling a third-party microservice run by an eccentric genius. It will usually give great answers, but it might return invalid JSON, time out, or answer a different question entirely. Defend your boundaries!</li><li><strong>2. The Fuzzy Parser:</strong> LLMs are peerless at transforming messy, unstructured human text into structured schemas. Use them at the boundary, not as your core database.</li><li><strong>3. Guardrails over Hope:</strong> Never 'hope' the model obeys your prompt. Enforce output schemas with Pydantic/Zod, run post-generation assertions, and implement automated retry repair loops.</li></ul>",
                "<pre><code># The Resilient LLM Wrapper Architecture:\n# 1. Input Sanitization -> Filter prompt injection & clean input\n# 2. Model Invocation   -> LLM generates structured JSON\n# 3. Schema Gate        -> Pydantic validates payload\n#    - If PASS          -> Route to deterministic business logic\n#    - If FAIL          -> Trigger automated repair loop with error feedback!</code></pre>",
                "<div class=\"callout\"><p><strong>The Defensive Law:</strong> The model is the engine; your application is the chassis. Strong chassis design keeps the car on the road regardless of road bumps.</p></div>"
            ],
            "Mental Model Comparison", "How perspectives shape application architecture",
            [
                {"title": "The Oracle Model (Naive)", "lines": ["'AI is magic, trust its output'", "Zero validation, crashes in production"]},
                {"title": "Untrusted Microservice (Robust)", "lines": ["Expect occasional invalid JSON", "Validate with Pydantic, retry on error", "100% resilient production uptime"]}
            ],
            "The Self-Healing Repair Loop", "Automated recovery from malformed model outputs",
            [
                {"title": "Attempt 1: Malformed JSON", "lines": ["Model misses closing quote", "Pydantic raises ValidationError"]},
                {"title": "Feedback Turn", "lines": ["Send error back: 'Fix syntax on line 3'", "Model corrects output in 1 turn"]},
                {"title": "Validated Success", "lines": ["Clean structured data passed to app", "Zero human intervention"]}
            ],
            "Complete the mental model sentence",
            "Treating an AI model as an untrusted external {1} ensures developers wrap model outputs in strict validation {2} and retry loops.",
            [
                {"answer": "microservice", "hint": "External distributed network service", "options": ["microservice", "database", "compiler"]},
                {"answer": "gates", "hint": "Schemas, assertions, and checks", "options": ["gates", "prompts", "emojis"]}
            ],
            [
                {"q": "Why should an engineer never pipe an LLM's raw text response directly into an SQL database?",
                 "a": ["The model output could contain unvalidated data, formatting errors, or malicious SQL injection payloads", "SQL databases cannot store text", "LLM text is encrypted", "It breaks the computer monitor"],
                 "c": 0, "why": "Unvalidated model outputs must never touch persistence layers without schema validation."},
                {"q": "What is a 'Self-Healing JSON Repair Loop'?",
                 "a": ["An automated pattern where a schema validation error is fed back to the model with an instruction to correct the JSON", "A database backup tool", "A feature in JavaScript", "An algorithm that deletes bad files"],
                 "c": 0, "why": "Repair loops allow models to self-correct formatting errors using compiler feedback."},
                {"q": "What role does an LLM play best in a modern software architecture?",
                 "a": ["A semantic bridge translating messy, unstructured inputs into structured, typed data for deterministic systems", "The central relational database", "The operating system kernel", "The primary network router"],
                 "c": 0, "why": "Models excel as semantic translators between ambiguous human intent and structured software."},
                {"q": "How does defensive architecture prevent user-facing outages when an LLM provider experiences downtime?",
                 "a": ["By implementing timeouts, fallback rules, graceful degradation, and cached responses", "By deleting the application", "By asking users to wait 3 days", "By restarting the server continuously"],
                 "c": 0, "why": "Defensive fallback patterns ensure application resilience during upstream API outages."}
            ],
            "You understand the essential engineering mental models for building probabilistic software.",
            "The Modern AI Landscape: Perception, Generation, and Agency", "Map the ecosystem from vision and speech to generative LLMs and agents."
        ),
        build_lesson(
            8, "modern-ai-landscape", "The Modern AI Landscape: Perception, Generation, and Agency", "AI Landscape",
            "Mapping the modern AI ecosystem: perception models, generative foundations, multimodal transformers, and autonomous agents.",
            "How do autonomous AI agents build upon the foundation of Large Language Models?",
            ["Agents use LLMs as reasoning engines, wiring them to external tools, memory systems, and environment execution loops", "Agents replace neural networks with if-statements", "Agents do not use language models", "Agents run without computers"],
            0, "Agents wrap foundation models in ReAct execution loops with tools (file access, terminals) and memory.",
            [
                "<p>To navigate the world of AI, you need a high-level taxonomy of the modern ecosystem. AI is not a single monolith; it is an evolving hierarchy of capabilities:</p>",
                "<ul><li><strong>1. Perception & Discriminative AI (The Senses):</strong> Computer Vision (YOLO, ResNet), Speech-to-Text (Whisper), and Text-to-Speech (ElevenLabs). These models classify, transcribe, and detect patterns.</li><li><strong>2. Generative Foundation Models (The Brain):</strong> Large Language Models (GPT-4o, Claude 3.5, Gemini 1.5, Llama 3) and Diffusion Models (Midjourney, Stable Diffusion). They generate text, code, images, and audio from prompts.</li><li><strong>3. Multimodal Unified Models:</strong> Models natively processing text, audio, images, and video in a shared high-dimensional embedding space.</li><li><strong>4. Autonomous AI Agents (The Hands):</strong> Software systems that use foundation models as reasoning cores, equipping them with tools (terminals, browsers, APIs), memory, and iterative ReAct loops to accomplish complex goals.</li></ul>",
                "<pre><code># The Modern AI Capability Hierarchy:\n# [Level 4] Autonomous Agents:      Agent loops, planning, tool execution (Coding Agents)\n# [Level 3] Multimodal Models:      Joint text + image + audio reasoning (GPT-4o, Gemini)\n# [Level 2] Generative LLMs:        Next-token prediction, code generation (Claude, Llama)\n# [Level 1] Discriminative ML:      Classification, regression, embeddings (BERT, XGBoost)</code></pre>",
                "<div class=\"callout\"><p><strong>The Final Takeaway:</strong> You now understand the full landscape: from rules to learning, deterministic code to probabilistic systems, and static weights to autonomous agents.</p></div>"
            ],
            "The Four-Tier AI Hierarchy", "From perception to autonomous agency",
            [
                {"title": "Level 1: Perception & Classification", "lines": ["Whisper, ResNet, XGBoost", "Classifies and transcribes inputs"]},
                {"title": "Level 2: Generative Models", "lines": ["GPT-4, Claude, Llama", "Generates text, code, & images"]},
                {"title": "Level 3: Autonomous Agents", "lines": ["ReAct loop + Tools + Memory", "Acts upon environments to solve goals"]}
            ],
            "The Convergence of Modalities", "Unified token representations",
            [
                {"title": "Discrete Modalities (Past)", "lines": ["Separate models for audio, text, vision", "Complex glue code required"]},
                {"title": "Native Multimodal (Present)", "lines": ["Tokens represent text, pixels, & audio", "Unified reasoning in one neural net"]}
            ],
            "Complete the AI landscape sentence",
            "Autonomous agents use generative foundation models as reasoning {1}, connecting them to tools, memory, and environmental {2} loops.",
            [
                {"answer": "engines", "hint": "Core cognitive processing units", "options": ["engines", "databases", "keyboards"]},
                {"answer": "execution", "hint": "Action and observation cycles", "options": ["execution", "formatting", "licensing"]}
            ],
            [
                {"q": "What enables modern multimodal models to understand both images and text simultaneously?",
                 "a": ["They project image patches and text tokens into a shared high-dimensional vector space where semantic concepts align", "They use two separate computers connected by wire", "They translate images into English words first", "They convert all text into PNG images"],
                 "c": 0, "why": "Unified multimodal architectures map visual tokens and text tokens into a shared semantic space."},
                {"q": "How does an autonomous agent differ from a raw conversational LLM?",
                 "a": ["An agent can execute actions in an external environment (like reading files, editing code, and running tests) in a loop", "An agent is 100x larger in parameters", "An agent does not use language models", "An agent cannot answer questions"],
                 "c": 0, "why": "Agents combine language reasoning with environmental agency via tool calling and feedback loops."},
                {"q": "Which model family is designed specifically for transcribing spoken human audio into text?",
                 "a": ["OpenAI Whisper", "Stable Diffusion", "Midjourney", "BERT"],
                 "c": 0, "why": "Whisper is an encoder-decoder transformer trained on hundreds of thousands of hours of audio for speech recognition."},
                {"q": "What is the primary role of a software engineer in the modern AI ecosystem?",
                 "a": ["Architecting reliable systems, curating context and data, establishing verification gates, and orchestrating AI agents", "Typing code as fast as possible by hand", "Memorizing every function in standard libraries", "Building computer hardware chips"],
                 "c": 0, "why": "Engineers provide system architecture, specification rigor, and verification oversight."}
            ],
            "You have completed the What Is AI? course.",
            "Next Course: Machine Learning Explained", "Discover the core loop behind every ML model: features, loss functions, and gradient descent."
        )
    ]

    glossary = [
        {"id": "foundations", "title": "Foundations & Paradigms", "terms": [
            {"term": "Machine Learning", "def": "A programming paradigm where algorithms discover mathematical rules from data rather than following hand-coded logic.", "lesson": 1, "tags": ["ai", "foundations"]},
            {"term": "Probabilistic System", "def": "A system whose outputs are governed by statistical probability distributions rather than fixed static paths.", "lesson": 2, "tags": ["ai", "statistics"]},
            {"term": "Supervised Learning", "def": "Training a model on paired input-output examples (X -> Y) to predict labels for unseen data.", "lesson": 3, "tags": ["ml", "supervised"]}
        ]},
        {"id": "lifecycle", "title": "Lifecycle & Inference", "terms": [
            {"term": "Inference", "def": "The read-only phase of evaluating a trained model on new inputs using frozen mathematical weights.", "lesson": 4, "tags": ["ai", "lifecycle"]},
            {"term": "Model Weights", "def": "The learned numerical parameters inside a neural network that encode statistical patterns and knowledge.", "lesson": 1, "tags": ["ml", "neural-nets"]},
            {"term": "Fine-Tuning", "def": "An additional training phase that continues optimization on a domain dataset to adapt an existing model.", "lesson": 4, "tags": ["ml", "training"]}
        ]},
        {"id": "limits", "title": "Limits & Hallucinations", "terms": [
            {"term": "Hallucination", "def": "The generation of plausible-sounding but factually false, unverified statements by a language model.", "lesson": 6, "tags": ["ai", "safety"]},
            {"term": "Stochasticity", "def": "Randomness and probabilistic variation inherent in sampling tokens from a distribution.", "lesson": 6, "tags": ["ai", "math"]},
            {"term": "Grounding", "def": "Anchoring model generation to verified facts retrieved from external documents, databases, or tools.", "lesson": 6, "tags": ["ai", "rag"]}
        ]},
        {"id": "architecture", "title": "Architecture & Reasoning", "terms": [
            {"term": "Chain of Thought", "def": "A prompting technique encouraging models to generate intermediate reasoning tokens before arriving at an answer.", "lesson": 5, "tags": ["ai", "prompting"]},
            {"term": "Test-Time Compute", "def": "Allocating extra inference tokens for a model to deliberate, backtrack, and evaluate multiple reasoning steps.", "lesson": 5, "tags": ["ai", "reasoning"]},
            {"term": "Autonomous Agent", "def": "A software system pairing a foundation model with tools, memory, and a ReAct loop to achieve complex goals.", "lesson": 8, "tags": ["ai", "agents"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "Deterministic Threshold Gating",
            "label": "Bridging probabilities to code",
            "code": "prediction = model.predict(email)\nif prediction.spam_prob >= 0.90:\n    quarantine_email(email)\nelif prediction.spam_prob >= 0.50:\n    route_to_human_review(email)\nelse:\n    deliver_to_inbox(email)",
            "lessonN": 2, "lessonSlug": "deterministic-vs-probabilistic", "lessonTitle": "Deterministic Software vs Probabilistic Systems"
        },
        {
            "title": "Deterministic Model Ingestion",
            "label": "Zero temperature for tests",
            "code": "# In automated test runners, enforce greedy decoding:\nresponse = client.chat.completions.create(\n    model=\"gpt-4o\",\n    messages=[...],\n    temperature=0.0,  # Eliminates stochastic randomness!\n    seed=42\n)",
            "lessonN": 2, "lessonSlug": "deterministic-vs-probabilistic", "lessonTitle": "Deterministic Software vs Probabilistic Systems"
        },
        {
            "title": "Chain-of-Thought Reasoning Pattern",
            "label": "Decomposing complex problems",
            "code": "\"Solve this step by step:\n1. State given assumptions.\n2. Work through intermediate formulas.\n3. Verify units and edge cases.\n4. Provide final answer in JSON.\"",
            "lessonN": 5, "lessonSlug": "reasoning-vs-statistical-association", "lessonTitle": "What AI Cannot Do: Reasoning vs Statistical Association"
        },
        {
            "title": "Grounded Generation Protocol",
            "label": "Defeating hallucinations with RAG",
            "code": "\"Answer the user question using strictly the facts provided\nin the <context> tags below.\nIf the context does not contain the answer, reply: 'Information not found.'\nDo NOT speculate or extrapolate.\"",
            "lessonN": 6, "lessonSlug": "hallucinations-and-stochasticity", "lessonTitle": "Hallucinations and Stochasticity Explained"
        }
    ]

    course_data = {
        "id": "what-is-ai",
        "title": "What Is AI?",
        "num": 61,
        "emoji": "✨",
        "desc": "What we mean by intelligence in software, and the difference between rules, learning and generation.",
        "topics": ["AI", "Machine Learning", "Probabilistic Systems", "Supervised Learning", "Inference", "Reasoning Limits", "Hallucinations", "Autonomous Agents"],
        "mission": "# Mission — What Is AI?\n\nDemystify the scientific and engineering realities of artificial intelligence. Master the paradigm shift from handcrafted rules to learned weights, navigate deterministic vs probabilistic software physics, explore the three learning paradigms, separate training from inference, recognize the boundaries of statistical pattern matching, understand the causes of hallucination, and adopt robust mental models for probabilistic software.",
        "notes": "# Notes — What Is AI?\n\nAI is not magic; it is high-dimensional statistical pattern matching. Anchor probabilistic models in deterministic validation gates, schemas, and verified external tools.",
        "resources": "# Resources — What Is AI?\n\n- Stuart Russell & Peter Norvig, *Artificial Intelligence: A Modern Approach*\n- Melanie Mitchell, *Artificial Intelligence: A Guide for Thinking Humans*\n- Yann LeCun, *A Path Towards Autonomous Machine Intelligence*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

if __name__ == "__main__":
    make_course_61()

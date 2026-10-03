import os
import sys
sys.path.append(os.path.dirname(__file__))
from helpers import build_lesson, save_course

# ==============================================================================
# COURSE 81: ai-evaluation (AI Evaluation & Testing)
# ==============================================================================
def make_course_81():
    lessons = [
        build_lesson(
            1, "the-vibes-problem-eyeball-testing", "The 'Vibes' Problem: Moving Beyond Eyeball Testing", "The Vibes Problem",
            "Why casual 'eyeball testing' fails: subjective bias, regression blindness, and the necessity of quantitative evaluation.",
            "What is 'vibe-based testing' in generative AI development, and why is it dangerous in production?",
            ["Tweaking a prompt and manually checking 2-3 casual examples in a playground, which blinds developers to regressions across wider use cases", "Testing code with audio vibrations", "Running unit tests with music playing", "Testing code on mobile devices"],
            0, "Vibe-based testing tests only a couple of ad-hoc examples, creating blind spots for regressions across diverse real-world edge cases.",
            [
                "<p>In the early days of building with LLMs, development was driven by <strong>'Vibes'</strong>: an engineer edited a prompt in a playground, ran one test question, liked the phrasing, and deployed to production. This is the equivalent of deleting your unit test suite and claiming your code works because it compiled once.</p>",
                "<p>Why eyeball testing fails catastrophically at scale:</p>",
                "<ul><li><strong>Subjective Confirmation Bias:</strong> You test the exact case you had in mind when editing the prompt, confirming what you hoped to see.</li><li><strong>Silent Regression Cascade:</strong> Changing a prompt to fix Customer A's complaint often silently breaks formatting or reasoning for Customers B, C, and D!</li><li><strong>Zero Quantitative Progress:</strong> You cannot answer basic business questions: <em>'Did our prompt edit improve accuracy by 10% or degrade it?'</em></li></ul>",
                "<pre><code># The Shift from Vibes to Science:\n# VIBE-BASED (Unreliable):\n# 1. Edit prompt text.\n# 2. Test 2 queries in chat playground -> \"Looks good to me!\"\n# 3. Ship to prod -> Customer complaints spike.\n#\n# EVAL-DRIVEN (Scientific):\n# 1. Edit prompt text.\n# 2. Run automated eval script across 100 golden benchmark cases.\n# 3. Output metric report: Accuracy: 94.2% (+3.1%), Latency: -120ms.\n# 4. Ship with empirical confidence!</code></pre>",
                "<div class=\"callout\"><p><strong>The Core Law of Evals:</strong> If you cannot measure accuracy with an automated test suite, you are not engineering software; you are guessing.</p></div>"
            ],
            "Eyeball Testing vs Systematic Evals", "Ad-hoc checking vs empirical regression testing",
            [
                {"title": "Eyeball Testing (Vibes)", "lines": ["Test 2 casual queries manually", "Subjective impression, zero metrics", "Blind to silent regressions across edge cases"]},
                {"title": "Systematic Evaluation", "lines": ["Run 100 curated golden benchmarks", "Quantitative accuracy, latency, & cost metrics", "Deterministic regression gate in CI"]}
            ],
            "The Silent Regression Phenomenon", "How fixing one case breaks others",
            [
                {"title": "Prompt Edit Target", "lines": ["Fixes formatting on invoice dates", "Target case now passes"]},
                {"title": "Unintended Side Effect", "lines": ["Model now drops customer addresses", "Caught immediately by eval suite!"]}
            ],
            "Complete the evaluation problem sentence",
            "Moving beyond vibe-based testing requires establishing automated {1} benchmarks to measure accuracy and prevent silent {2}.",
            [
                {"answer": "evaluation", "hint": "Quantitative testing suites", "options": ["evaluation", "formatting", "compilation"]},
                {"answer": "regressions", "hint": "Degradation of previously working cases", "options": ["regressions", "cables", "licenses"]}
            ],
            [
                {"q": "What is the primary danger of relying on manual eyeball testing for LLM prompt updates?",
                 "a": ["You cannot detect when a prompt edit fixes one specific case while silently breaking dozens of other edge cases", "It uses too much electricity", "It deletes the codebase", "It is illegal in Python"],
                 "c": 0, "why": "Manual inspection of a few cases cannot detect widespread regressions across diverse inputs."},
                {"q": "What question should an engineering team be able to answer before merging any prompt modification?",
                 "a": ["What was the quantitative impact on accuracy, latency, and cost across our benchmark evaluation suite?", "Did the developer like the tone?", "How many adjectives were used?", "What time was the PR opened?"],
                 "c": 0, "why": "Empirical metrics prove whether an architectural change actually improved performance."},
                {"q": "How does automated evaluation transform developer velocity?",
                 "a": ["It allows developers to iterate, experiment, and refactor prompts boldly knowing the evaluation suite will catch regressions", "It writes code without a keyboard", "It speeds up internet downloads", "It turns off logging"],
                 "c": 0, "why": "A safety net of automated evaluations frees engineers to innovate with confidence."},
                {"q": "What is a 'Regression' in the context of prompt engineering?",
                 "a": ["When a prompt update causes the model to fail on test cases that previously succeeded under older prompts", "A statistical curve fitting technique", "Downgrading your Python version", "A git merge conflict"],
                 "c": 0, "why": "Regressions are unexpected performance degradations on previously passing scenarios."}
            ],
            "You understand the perils of vibe-based testing and the necessity of quantitative evals.",
            "Golden Evaluation Datasets: Curation and Diversity", "Build diverse, high-signal benchmark datasets that represent reality."
        ),
        build_lesson(
            2, "golden-evaluation-datasets", "Golden Evaluation Datasets: Curation and Diversity", "Golden Datasets",
            "Constructing evaluation datasets: representative sampling, edge cases, synthetic generation, and dataset versioning.",
            "What makes an evaluation dataset 'Golden' in production AI engineering?",
            ["It contains a curated, representative, and human-verified collection of real-world inputs paired with verified ground-truth standards", "It is stored on a gold-plated hard drive", "It was created by Google executives", "It contains 100 million rows"],
            0, "A golden dataset is a high-signal, human-verified benchmark set capturing core tasks and critical edge cases.",
            [
                "<p>Your evaluations are only as truthful as the dataset you test against. If your eval dataset consists of 10 easy, softball questions, your model will score 100% while failing in production. A <strong>Golden Evaluation Dataset</strong> is an authoritative benchmark representing real-world distribution complexity.</p>",
                "<p>Four principles for curating golden eval datasets:</p>",
                "<ul><li><strong>1. Production Sampling:</strong> Pull real user queries from anonymized production logs (with consent and PII scrubbing). Real human queries contain typos, weird slang, and unexpected ambiguities that synthetic tests miss.</li><li><strong>2. Boundary Edge Cases:</strong> Deliberately inject tough edge cases: empty strings, adversarial prompt injections, conflicting instructions, and non-English text.</li><li><strong>3. Balanced Category Coverage:</strong> Ensure all core tasks (e.g. 20% billing, 30% tech support, 20% refunds, 30% account management) are represented proportionally.</li><li><strong>4. Golden Labels & Grading Criteria:</strong> Pair each input with either exact ground-truth values (for extraction/math) or detailed grading rubrics (for qualitative answers).</li></ul>",
                "<pre><code># Structure of a Golden Eval Record (JSONL):\n{\n  \"eval_id\": \"tc_042\",\n  \"input\": \"My order ORD-992 was charged $50 but my receipt says $40. Refund the difference.\",\n  \"domain\": \"billing_dispute\",\n  \"expected_intent\": \"PARTIAL_REFUND\",\n  \"expected_entities\": {\"order_id\": \"ORD-992\", \"refund_amount_cents\": 1000},\n  \"grading_criteria\": \"Must extract correct order ID and calculate exact $10 difference.\"\n}</code></pre>",
                "<div class=\"callout\"><p><strong>The Scale Rule:</strong> Start small! A carefully curated, human-verified golden dataset of <strong>50 to 100 examples</strong> provides vastly higher diagnostic signal than 10,000 unverified noisy web rows.</p></div>"
            ],
            "Golden Dataset Composition", "Balancing real-world distribution with adversarial edge cases",
            [
                {"title": "Production Logs (60%)", "lines": ["Real customer queries & typos", "Captures actual user behavior"]},
                {"title": "Hard Edge Cases (25%)", "lines": ["Boundary conditions & weird formatting", "Tests system resilience"]},
                {"title": "Adversarial Probes (15%)", "lines": ["Prompt injections & trick questions", "Evaluates safety & guardrails"]}
            ],
            "Version-Controlled Eval Assets", "Tracking benchmark evolution in git",
            [
                {"title": "evals/golden_v1.jsonl", "lines": ["Original 50 baseline cases", "Locked benchmark for release 1.0"]},
                {"title": "evals/golden_v2.jsonl", "lines": ["Added 20 production failure cases", "Continual improvement of benchmark rigor"]}
            ],
            "Complete the golden datasets sentence",
            "Golden evaluation datasets reflect real-world distribution by combining production query logs with adversarial {1} cases and human-verified {2}.",
            [
                {"answer": "edge", "hint": "Boundary conditions and unusual inputs", "options": ["edge", "font", "license"]},
                {"answer": "labels", "hint": "Ground-truth answers or rubrics", "options": ["labels", "hardware", "monitors"]}
            ],
            [
                {"q": "Why is pulling real production logs essential when building an evaluation dataset?",
                 "a": ["Real users express queries with unforeseen slang, misspellings, and ambiguities that developers fail to imagine in synthetic prompts", "Production logs are free", "It reduces database storage", "Production logs compile Python to C"],
                 "c": 0, "why": "Real customer queries reflect true natural distribution and unexpected linguistic edge cases."},
                {"q": "Why must Personally Identifiable Information (PII) be scrubbed from production logs before adding them to an eval set?",
                 "a": ["To protect customer privacy and comply with privacy regulations (GDPR/HIPAA) before committing data to test repositories", "PII makes tests run slower", "PII causes compiler errors", "PII is copyrighted by OpenAI"],
                 "c": 0, "why": "Sanitizing PII prevents committing confidential user data to shared engineering repositories."},
                {"q": "How many verified examples are typically sufficient for an effective initial golden eval dataset?",
                 "a": ["50 to 100 high-quality, diverse examples", "At least 10,000,000 examples", "Exactly 1 example", "Zero examples"],
                 "c": 0, "why": "50-100 high-quality examples provide immediate, actionable regression detection with fast execution."},
                {"q": "What should happen to the golden dataset when an unexpected bug slips through into production?",
                 "a": ["Add the failing production case to the golden dataset immediately so the eval suite tests against it on all future runs", "Delete the golden dataset", "Ignore the bug", "Restart the server"],
                 "c": 0, "why": "Expanding the eval dataset with real failure cases ensures the system builds permanent regression immunity."}
            ],
            "You know how to curate and maintain diverse, high-signal golden evaluation datasets.",
            "Deterministic vs Model-Based Graders", "Choose between fast code assertions and nuanced LLM judges."
        ),
        build_lesson(
            3, "deterministic-vs-model-graders", "Deterministic vs Model-Based Graders", "Graders",
            "Grading methodologies: Deterministic Code Graders (exact match, regex, schemas) vs Model-Based Graders (LLM-as-a-Judge).",
            "When should an engineer prefer a Deterministic Code Grader over an LLM-as-a-Judge grader?",
            ["When testing tasks with objective, unambiguous criteria like JSON schema validity, exact status codes, or regex patterns", "When grading poetry", "When evaluating conversational tone", "Deterministic graders should never be used"],
            0, "Deterministic code graders are fast, free, and 100% reproducible for objective criteria like schemas and status codes.",
            [
                "<p>Once your model generates a response on an eval dataset, how do you grade it? Evaluation engineering uses two complementary grader families:</p>",
                "<ul><li><strong>1. Deterministic Code Graders (Fast, Free, Objective):</strong> Pure code assertions. Does the output parse as valid JSON? Does `result[\"status\"] == \"approved\"`? Does the email match regex? Did the tool execution exit with code 0? <em>Advantages:</em> Runs in 1ms, costs $0.00, 100% reproducible. <em>Limitation:</em> Cannot evaluate subjective tone or semantic prose.</li><li><strong>2. Model-Based Graders (LLM-as-a-Judge - Nuanced & Semantic):</strong> A powerful frontier model (GPT-4o, Claude 3.5 Sonnet) grades the response based on a detailed qualitative rubric (e.g. 1-5 scale for helpfulness, tone, safety). <em>Advantages:</em> Evaluates fuzzy natural language, summary quality, and reasoning. <em>Limitation:</em> Slower, costs API tokens, and subject to minor judge variance.</li></ul>",
                "<pre><code># The Two Grader Types in Code:\n# 1. Deterministic Code Grader (Binary PASS/FAIL):\ndef grade_schema_pass(output_text):\n    try:\n        InvoiceSchema.model_validate_json(output_text)\n        return 1.0 # 100% objective PASS!\n    except ValidationError:\n        return 0.0 # FAIL!\n\n# 2. Model-Based Grader (Semantic Score 1-5):\ndef grade_helpfulness(user_query, model_response):\n    judge_prompt = f\"Score helpfulness from 1 to 5 for:\\nQuery: {user_query}\\nResponse: {model_response}\"\n    return call_judge_llm(judge_prompt) # Evaluates nuance!</code></pre>",
                "<div class=\"callout\"><p><strong>The Evaluation Hierarchy:</strong> Always use deterministic code graders for everything you can mathematically assert (schemas, status codes, math). Reserve expensive LLM judges strictly for subjective semantic qualities.</p></div>"
            ],
            "Deterministic vs Model Graders", "Complementary evaluation techniques",
            [
                {"title": "Deterministic Grader (Code)", "lines": ["JSON schema parsing, regex, exit codes", "Time: 1ms, Cost: $0.00, 100% objective", "Best for: Formats, numbers, code"]},
                {"title": "Model-Based Grader (LLM)", "lines": ["Evaluates tone, clarity, helpfulness", "Time: 1s, Cost: Token billed, Nuanced", "Best for: Summaries, chat, explanations"]}
            ],
            "The Hybrid Grading Pipeline", "Layering assertions before calling LLM judges",
            [
                {"title": "Stage 1: Deterministic Filter", "lines": ["Did it return valid JSON? (If NO -> Score 0 immediately!)", "Did it include mandatory keys?"]},
                {"title": "Stage 2: LLM Judge", "lines": ["Only invoked if Stage 1 passes", "Evaluates semantic quality & insight"]}
            ],
            "Complete the grader sentence",
            "Deterministic code graders evaluate objective {1} validity at zero cost, while model-based graders evaluate subjective {2} and tone.",
            [
                {"answer": "schema", "hint": "Data formatting and structural syntax", "options": ["schema", "hardware", "voltage"]},
                {"answer": "quality", "hint": "Semantic nuances and helpfulness", "options": ["quality", "compilation", "baud"]}
            ],
            [
                {"q": "Why is evaluating JSON output with a deterministic code assertion (Pydantic) superior to asking an LLM judge 'Is this JSON valid?'",
                 "a": ["Code parsers (like json.loads) are 100% mathematically exact, execute in microseconds, and cost zero API tokens", "LLM judges refuse to read JSON", "Pydantic is an AI model", "Code assertions take too much memory"],
                 "c": 0, "why": "Deterministic parsers provide immediate, infallible verification of syntax without token costs."},
                {"q": "What is an ideal use case for a model-based LLM judge?",
                 "a": ["Evaluating whether an article summary captures the core themes of a 50-page document accurately and concisely", "Checking if an integer is even or odd", "Verifying if a URL starts with https", "Testing database port connectivity"],
                 "c": 0, "why": "Qualitative synthesis and thematic summary evaluation require linguistic reasoning."},
                {"q": "How can you minimize API costs when using LLM-as-a-Judge in CI pipelines?",
                 "a": ["Run deterministic assertions first to filter out obvious format failures, and sample a representative subset of qualitative tests", "Use a slower internet connection", "Delete test cases", "Grade tests manually by eye"],
                 "c": 0, "why": "Pre-filtering with deterministic assertions saves expensive model judge calls for worthy candidates."},
                {"q": "Can a deterministic grader evaluate semantic similarity without calling an LLM?",
                 "a": ["Yes; using embedding cosine similarity or string overlap algorithms (BLEU/ROUGE) computed locally", "No; math cannot measure similarity", "Only on paper", "Only in C++"],
                 "c": 0, "why": "Local embedding distance and n-gram overlap algorithms evaluate semantic proximity deterministically."}
            ],
            "You know when and how to deploy deterministic assertions versus model-based judges.",
            "LLM-as-a-Judge: Rubrics, Calibration, and Bias Mitigation", "Design reliable LLM judges, mitigate positional bias, and align with human ratings."
        ),
        build_lesson(
            4, "llm-as-a-judge-rubrics-biases", "LLM-as-a-Judge: Rubrics, Calibration, and Bias Mitigation", "Judge Engineering",
            "Mastering LLM-as-a-Judge: rubric design, scoring scales, mitigating position/verbosity bias, and human calibration.",
            "What is 'Verbosity Bias' in LLM-as-a-Judge evaluation?",
            ["The tendency of judge models to award higher scores to longer, wordier responses even when shorter answers are more accurate", "A model speaking too loudly", "A bug in the microphone", "An error when text has too few words"],
            0, "Judge models exhibit an inherent statistical bias toward longer responses, mistaking length for quality.",
            [
                "<p>Using an LLM to grade another LLM (<strong>LLM-as-a-Judge</strong>, Zheng et al., 2023) is a cornerstone of modern AI operations. However, model judges are not impartial human professors; they suffer from well-documented cognitive biases:</p>",
                "<ul><li><strong>1. Verbosity Bias:</strong> Models consistently favor long, rambling answers over concise, elegant ones.</li><li><strong>2. Position Bias:</strong> In pairwise comparison (evaluating Option A vs Option B), judges favor whichever answer is presented first!</li><li><strong>3. Self-Enhancement Bias:</strong> A model often gives higher scores to text generated by its own model family (e.g. GPT-4 preferring GPT-4 outputs).</li></ul>",
                "<p>To build an authoritative, calibrated LLM Judge:</p>",
                "<ul><li><strong>Detailed Anchor Rubrics:</strong> Provide explicit definitions for every score point (e.g. Score 1 = incorrect, Score 3 = partially correct, Score 5 = complete with proof).</li><li><strong>Swap and Average (Mitigating Position Bias):</strong> Run pairwise evaluations twice: evaluate (A, B), then swap to (B, A). If the judge flips its verdict, flag the pair as a tie!</li><li><strong>Human Calibration Correlation:</strong> Calculate Cohen's Kappa or Spearman rank correlation between the model judge's scores and human expert scores. A well-calibrated judge should achieve $> 80\\%$ agreement with human experts.</li></ul>",
                "<pre><code># Robust LLM Judge Rubric Prompt:\n\"You are an impartial evaluator grading a technical support response.\nGrading Rubric (Score 1 to 5):\n- Score 1: Factually wrong, misleading, or hallucinated.\n- Score 2: Factually correct but incomplete; misses key user question.\n- Score 3: Correct and answers query, but verbose or disorganized.\n- Score 4: Clear, correct, concise, and helpful.\n- Score 5: Exceptional clarity with actionable code example.\n\nEvaluation Steps:\n1. State what factual claims are made in the response.\n2. Verify each claim against the ground truth document.\n3. Identify any verbosity or missing steps.\n4. Output: JSON {\"reasoning\": \"...\", \"score\": 4}\"</code></pre>",
                "<div class=\"callout\"><p><strong>The Reasoning Pre-fill:</strong> Always require the judge model to write its reasoning explanation <em>before</em> emitting the numeric score. Just like humans, models score more accurately when they deliberate first!</p></div>"
            ],
            "Judge Biases and Mitigations", "Overcoming structural evaluator distortions",
            [
                {"title": "Verbosity Bias", "lines": ["Favors long-winded answers", "Mitigation: Explicitly penalize fluff in rubric"]},
                {"title": "Position Bias", "lines": ["Favors candidate A over candidate B", "Mitigation: Evaluate (A, B) and (B, A), then average"]},
                {"title": "Self-Enhancement Bias", "lines": ["Favors own model family", "Mitigation: Use different frontier model family as judge"]}
            ],
            "The 5-Point Anchor Rubric", "Replacing fuzzy intuition with explicit criteria",
            [
                {"title": "Score 1", "lines": ["Factually wrong or hallucinated"]},
                {"title": "Score 3", "lines": ["Correct facts, but poorly structured or verbose"]},
                {"title": "Score 5", "lines": ["Flawless precision, concise, verified actionable"]}
            ],
            "Complete the judge engineering sentence",
            "To eliminate position bias, pairwise LLM judges must swap candidate {1} and average verdicts, while detailed rubrics counteract {2} bias.",
            [
                {"answer": "orders", "hint": "Evaluating (A, B) and (B, A)", "options": ["orders", "passwords", "tokens"]},
                {"answer": "verbosity", "hint": "Preference for long wordy text", "options": ["verbosity", "compilation", "formatting"]}
            ],
            [
                {"q": "Why must an LLM judge output its reasoning explanation BEFORE the numeric score in the JSON payload?",
                 "a": ["Generating chain-of-thought reasoning tokens first conditions the final numeric score on deliberate analysis rather than hasty guessing", "It makes the JSON smaller", "It is required by Pydantic", "It reduces GPU temperature"],
                 "c": 0, "why": "Generating reasoning first allows the model to justify the score before sampling the numeric token."},
                {"q": "What is 'Position Bias' in pairwise LLM evaluation?",
                 "a": ["The tendency of judge models to pick Candidate A over Candidate B simply because it appeared first in the prompt", "A bias based on geographic location", "A bias against certain computer positions", "A hardware alignment error"],
                 "c": 0, "why": "Models exhibit order bias, frequently favoring the first presented option."},
                {"q": "How do you measure whether an LLM judge is reliable enough to replace human reviewers?",
                 "a": ["By calculating statistical agreement (Cohen's Kappa or Pearson correlation) between the model's scores and expert human ratings", "By asking the model if it is reliable", "By checking if the model is fast", "By counting words"],
                 "c": 0, "why": "Correlation with human expert evaluations quantitatively proves judge calibration."},
                {"q": "Why is an anchor rubric with explicit definitions for each score (1, 2, 3, 4, 5) better than asking for a 1-100 percentage?",
                 "a": ["Discrete, well-defined score anchors provide concrete criteria that minimize subjective judge drift across evaluations", "Percentages are illegal in math", "Models cannot count to 100", "Percentages require more RAM"],
                 "c": 0, "why": "Concrete score definitions anchor the model on specific verifiable characteristics rather than arbitrary scales."}
            ],
            "You know how to design calibrated, bias-resistant LLM-as-a-Judge evaluation systems.",
            "Reference-Based Metrics: BLEU, ROUGE, and BERTScore", "Evaluate text overlap and semantic similarity against golden references."
        ),
        build_lesson(
            5, "reference-based-metrics-bleu-rouge-bertscore", "Reference-Based Metrics: BLEU, ROUGE, and BERTScore", "Reference Metrics",
            "Classical and modern reference metrics: n-gram precision (BLEU), recall (ROUGE), and semantic embedding similarity (BERTScore).",
            "What is the key limitation of n-gram string overlap metrics like BLEU and ROUGE when evaluating generative AI?",
            ["They measure exact word overlap; if the model writes a brilliant answer using different synonyms, BLEU/ROUGE will score it as a 0% failure", "They are too expensive to compute", "They only run on Linux", "They require an LLM API call"],
            0, "String overlap metrics penalize valid synonyms and paraphrases that do not share exact surface tokens.",
            [
                "<p>Before LLM judges existed, machine translation and summarization relied on <strong>Reference-Based String Metrics</strong>. These algorithms compare a model's generated output against a human-written 'Golden Reference' document.</p>",
                "<p>The three classic reference metrics:</p>",
                "<ul><li><strong>1. BLEU (Bilingual Evaluation Understudy):</strong> Measures <strong>n-gram precision</strong>. What percentage of 1-gram, 2-gram, 3-gram word combinations in the generated text appear in the reference? Standard for machine translation.</li><li><strong>2. ROUGE (Recall-Oriented Understudy for Gifting Evaluation):</strong> Measures <strong>n-gram recall</strong>. What percentage of the reference words appeared in the model's output? Standard for summarization (ROUGE-1, ROUGE-2, ROUGE-L).</li><li><strong>3. BERTScore (Semantic Similarity Breakthrough):</strong> Computes cosine similarity between contextual token embeddings of the generated text and reference text. <strong>Captures synonyms and paraphrasing!</strong></li></ul>",
                "<pre><code># The Synonym Blindness of ROUGE/BLEU:\nReference: \"The physician administered the medication.\"\nGenerated: \"The doctor gave the medicine.\"\n\n# BLEU / ROUGE: Scores near 0.0! (Zero matching words except 'the'!).\n# BERTScore:   Scores 0.96! (Recognizes doctor==physician, medicine==medication!)</code></pre>",
                "<div class=\"callout\"><p><strong>Metric Evolution:</strong> Use ROUGE/BLEU for strict translation and extraction where exact wording matters. Use <strong>BERTScore</strong> or LLM judges for creative summaries and open-ended text.</p></div>"
            ],
            "Reference Metrics Compared", "String overlap vs embedding similarity",
            [
                {"title": "BLEU (Precision)", "lines": ["Measures matching n-gram precision", "Heavily penalizes hallucinated words", "Best for: Machine translation"]},
                {"title": "ROUGE (Recall)", "lines": ["Measures captured reference n-grams", "Heavily penalizes omitted points", "Best for: Summarization (ROUGE-L)"]},
                {"title": "BERTScore (Semantic)", "lines": ["Matches token embedding vectors", "Celebrates valid synonyms & paraphrasing", "Immune to surface string variations"]}
            ],
            "Synonym Paraphrasing Challenge", "Surface words vs semantic meaning",
            [
                {"title": "Gold: 'Automobile halted'", "lines": ["Generated: 'Car stopped'", "ROUGE score: 0% match (Fails!)"]},
                {"title": "BERTScore Resolution", "lines": ["cos(car, automobile) = 0.95", "cos(stopped, halted) = 0.93", "Final score: 94% match (Success!)"]}
            ],
            "Complete the reference metrics sentence",
            "While BLEU and ROUGE evaluate surface n-gram overlap, {1} calculates token embedding cosine similarity to recognize valid {2}.",
            [
                {"answer": "BERTScore", "hint": "Embedding-based evaluation metric", "options": ["BERTScore", "HTML5", "TCP"]},
                {"answer": "synonyms", "hint": "Different words with identical meaning", "options": ["synonyms", "compilers", "passwords"]}
            ],
            [
                {"q": "What does ROUGE-L measure in text summarization evaluation?",
                 "a": ["The Longest Common Subsequence (LCS) of words shared between the generated summary and the reference text", "The length of the paragraph in characters", "The size of the language model", "The speed of the printer"],
                 "c": 0, "why": "ROUGE-L evaluates the longest common sub-sequence, capturing sentence-level structure."},
                {"q": "Why is BERTScore considered vastly more aligned with human judgment than BLEU?",
                 "a": ["It understands semantic equivalences and does not penalize models for choosing natural synonyms or rephrasing sentences", "It runs on paper", "It is an official government metric", "It costs no compute"],
                 "c": 0, "why": "Contextual token vector similarity rewards semantic meaning rather than literal spelling."},
                {"q": "When is BLEU still a valuable evaluation metric in modern AI pipelines?",
                 "a": ["When evaluating formal machine translation or exact code symbol extraction where specific terminology is mandatory", "When evaluating poetry", "When testing creative brainstorming", "When checking GPU clock speed"],
                 "c": 0, "why": "Exact translation benchmarks benefit from precision-focused n-gram matching."},
                {"q": "What is the computational advantage of running ROUGE and BERTScore over LLM-as-a-Judge?",
                 "a": ["They run locally on CPUs/GPUs in milliseconds without incurring third-party LLM API token costs", "They use no electricity", "They delete the test data", "They compile code to C"],
                 "c": 0, "why": "Reference metrics run locally and deterministically with zero API bills."}
            ],
            "You understand the strengths and limitations of BLEU, ROUGE, and BERTScore.",
            "Continuous Evaluation in CI/CD Pipelines", "Embed automated evaluation benchmarks directly into GitHub Actions."
        ),
        build_lesson(
            6, "continuous-eval-ci-cd", "Continuous Evaluation in CI/CD Pipelines", "CI/CD Evals",
            "Automating evaluations: embedding eval suites into GitHub Actions, regression gates, and blocking PRs that degrade accuracy.",
            "Why should AI evaluation suites be integrated directly into automated Continuous Integration (CI) pipelines?",
            ["To mathematically prevent any prompt, model, or code change that degrades accuracy from being merged into production", "To slow down the deployment process", "To make GitHub bills higher", "It is required by computer hardware"],
            0, "Continuous evaluation in CI enforces automated quality gates, blocking regressions before they reach users.",
            [
                "<p>In traditional software engineering, you never merge a pull request if unit tests are red. In modern AI engineering, the exact same law applies: <strong>Never merge a prompt or model change if the Eval Suite fails</strong>.</p>",
                "<p>A production <strong>Continuous Evaluation CI/CD Pipeline</strong> (GitHub Actions):</p>",
                "<ul><li><strong>1. PR Trigger:</strong> Developer modifies `prompts/system_v2.txt` or updates a model parameter in a pull request.</li><li><strong>2. Automated Eval Runner:</strong> GitHub Actions spins up an ephemeral runner, executes the candidate prompt across the 50-example golden dataset.</li><li><strong>3. Delta Comparison:</strong> Compares accuracy, schema compliance, latency, and cost against the `main` baseline branch.</li><li><strong>4. Hard CI Gate:</strong> If accuracy drops by more than 1.0% or schema validity drops below 100%, <strong>the build turns RED and blocks merging!</strong></li></ul>",
                "<pre><code># GitHub Actions CI Workflow (.github/workflows/evals.yml):\nname: AI Evaluation Suite\non: [pull_request]\njobs:\n  run-evals:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Run Prompt Benchmarks\n        env:\n          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}\n        run: |\n          python -m evals.run_suite --baseline=main --candidate=HEAD --threshold=0.95\n      - name: Post Eval Summary to PR\n        uses: actions/github-script@v7\n        with:\n          script: post_eval_table_comment()</code></pre>",
                "<div class=\"callout\"><p><strong>The Pull Request Table:</strong> Configure CI to post a markdown comparison table directly as a PR comment, showing reviewers exact accuracy and cost deltas at a glance!</p></div>"
            ],
            "The Continuous Evaluation Pipeline", "Enforcing quality gates on every pull request",
            [
                {"title": "1. Prompt Edit PR", "lines": ["Developer updates prompt template", "Opens pull request on GitHub"]},
                {"title": "2. CI Eval Suite Runs", "lines": ["Executes 50 golden benchmark cases", "Calculates accuracy, latency, & cost deltas"]},
                {"title": "3. The Binary Gate", "lines": ["Accuracy >= Baseline: GREEN (Merge allowed)", "Accuracy drops > 1%: RED (Blocked!)"]}
            ],
            "PR Markdown Metric Comment", "Transparent review artifacts",
            [
                {"title": "Metric Comparison Table", "lines": ["Accuracy: 92% -> 96% (+4% WIN)", "Cost per 1k: $0.40 -> $0.22 (-45% WIN)", "Reviewers approve with total confidence"]}
            ],
            "Complete the continuous evaluation sentence",
            "Continuous evaluation integrates benchmark suites into CI pipelines, using automated {1} gates to block pull requests that introduce accuracy {2}.",
            [
                {"answer": "quality", "hint": "Mandatory pass/fail criteria", "options": ["quality", "hardware", "terminal"]},
                {"answer": "regressions", "hint": "Performance drops and failures", "options": ["regressions", "compilations", "formats"]}
            ],
            [
                {"q": "What happens in a mature AI engineering workflow when a prompt change increases accuracy on one task but drops it by 5% on another?",
                 "a": ["The automated CI eval gate fails, alerting the author to the regression before the code can be merged to production", "The PR is merged anyway", "The computer restarts", "The developer is fired"],
                 "c": 0, "why": "CI evaluation gates catch cross-task regressions that manual checking overlooks."},
                {"q": "Why is posting an automated eval comparison table directly to the PR comment valuable?",
                 "a": ["Reviewers can inspect empirical performance, latency, and cost deltas immediately without running tests locally", "It makes the PR look colorful", "It saves hard drive space", "It is required by git"],
                 "c": 0, "why": "Transparent evaluation tables give code reviewers immediate quantitative evidence of impact."},
                {"q": "What threshold is standard for JSON schema validation in production eval suites?",
                 "a": ["100% pass rate (zero schema validation errors permitted)", "50% pass rate", "75% pass rate", "Schema validation is not tested"],
                 "c": 0, "why": "In production backends, schema compliance is non-negotiable; even 1% errors crash pipelines."},
                {"q": "How can you protect API keys during automated evaluation runs in GitHub Actions?",
                 "a": ["Store them in GitHub Actions Encrypted Secrets, injecting them strictly into the ephemeral test runner environment", "Hardcode them in the YAML file", "Post them in the PR comment", "Save them in the README"],
                 "c": 0, "why": "Repository secrets keep API keys secure and hidden from public git history."}
            ],
            "You know how to automate continuous AI evaluations in CI/CD pipelines.",
            "A/B Testing, User Feedback, and Production Ground Truth", "Bridge offline benchmark evaluations to online real-world user metrics."
        ),
        build_lesson(
            7, "ab-testing-user-feedback-ground-truth", "A/B Testing, User Feedback, and Production Ground Truth", "Production Evals",
            "Validating in production: online A/B testing, user feedback signals (thumbs up/down, copy rates), and creating feedback flywheels.",
            "Why is offline benchmark evaluation alone insufficient without online production A/B testing?",
            ["Offline benchmarks are static proxies; real users interact with unpredictable intent, evolving language, and subjective satisfaction", "Offline benchmarks do not use computers", "A/B testing is required by law", "Offline benchmarks only test math"],
            0, "Real user behavior and satisfaction in production represent the ultimate ground truth of system value.",
            [
                "<p>You can score 99% on your offline golden eval dataset and still fail in the market. Why? Because an offline eval is a static snapshot. Real users have dynamic intent, emotional nuance, and fast-shifting workflows that no static benchmark can fully capture.</p>",
                "<p>The final tier of AI evaluation is <strong>Online Production Validation</strong>:</p>",
                "<ul><li><strong>1. Production A/B Testing:</strong> Route 50% of production traffic to Prompt A and 50% to Prompt B. Compare real business metrics (task completion rate, retention, session length).</li><li><strong>2. Implicit Feedback Signals (Gold Mines):</strong> Don't just rely on survey forms. Track implicit user actions: Did the user click 'Copy to Clipboard'? Did they accept the generated code? Did they regenerate the response?</li><li><strong>3. Explicit Feedback (Thumbs Up / Down):</strong> Simple thumbs buttons allow users to flag bad answers.</li><li><strong>4. The Quality Flywheel:</strong> When a user gives a thumbs-down or rejects code, automatically export that prompt and response into your triage queue to add to your Golden Eval Dataset!</li></ul>",
                "<pre><code># The Quality Flywheel Loop:\n1. User dislikes answer -> clicks Thumbs Down (with optional comment).\n2. Backend captures: {user_query, model_response, failure_reason}.\n3. Asynchronously added to `evals/candidates_for_review.jsonl`.\n4. Human engineer reviews -> Adds to Golden Eval Suite as test case #105!\n5. Prompt is updated & verified in CI -> Model will never make that mistake again!</code></pre>",
                "<div class=\"callout\"><p><strong>The Compounding Flywheel:</strong> The best AI companies do not have smarter models; they have tighter feedback flywheels that turn production failures into automated test cases every single day.</p></div>"
            ],
            "The Quality Flywheel", "Turning production failures into permanent regression tests",
            [
                {"title": "1. Production Usage", "lines": ["User encounters subtle defect", "Clicks Thumbs Down / Regenerate"]},
                {"title": "2. Failure Harvest", "lines": ["Telemetry records failure payload", "Sent to engineering triage queue"]},
                {"title": "3. Golden Eval Addition", "lines": ["Promoted to permanent eval suite", "Model permanently immunized against regression!"]}
            ],
            "Explicit vs Implicit Signals", "User behavior telemetry",
            [
                {"title": "Explicit Signals", "lines": ["Thumbs up / down, star rating", "Low volume (1-2%), but high intentionality"]},
                {"title": "Implicit Signals (Higher Volume)", "lines": ["Copy to clipboard (Strong Positive)", "Regenerate button clicked (Strong Negative)", "Immediate manual code edit (Negative)"]}
            ],
            "Complete the production evals sentence",
            "The quality flywheel achieves compounding reliability by capturing production user feedback and promoting failure cases into permanent {1} {2} datasets.",
            [
                {"answer": "golden", "hint": "Curated benchmark test set", "options": ["golden", "random", "temporary"]},
                {"answer": "eval", "hint": "Evaluation and testing suites", "options": ["eval", "formatting", "licensing"]}
            ],
            [
                {"q": "What is an 'Implicit Feedback Signal' in an AI coding application?",
                 "a": ["A user behavior like copying code to the clipboard, accepting an autocomplete ghost text, or immediately editing generated lines", "A user sending an email to support", "A user rating the app in the app store", "A user closing their laptop"],
                 "c": 0, "why": "Implicit actions (copying, accepting, undoing) provide natural high-volume behavioral signals."},
                {"q": "Why is the 'Regenerate' button click considered a strong negative signal in chat products?",
                 "a": ["It indicates the user was dissatisfied with the previous response and requested a second attempt", "It means the user loved the answer", "It speeds up the server", "It saves API tokens"],
                 "c": 0, "why": "Clicking regenerate directly communicates that the previous answer was insufficient."},
                {"q": "What is the primary benefit of running a production A/B test between two model prompts?",
                 "a": ["It evaluates real customer business outcomes (conversion, retention, satisfaction) in a randomized controlled trial", "It makes both models run faster", "It eliminates the need for software engineering", "It makes API calls free"],
                 "c": 0, "why": "A/B testing isolates the causal business impact of prompt modifications on real users."},
                {"q": "What happens if a company ignores production feedback and never updates its evaluation benchmarks?",
                 "a": ["The evaluation suite drifts away from real user needs, and the application accumulates blind spots that alienate customers", "The model updates itself automatically", "The database becomes faster", "The software becomes open source"],
                 "c": 0, "why": "Without incorporating production failures, eval benchmarks become stale and unrepresentative."}
            ],
            "You know how to use A/B testing and production feedback to drive compounding quality flywheels.",
            "Building an Automated AI Evaluation Harness", "Synthesize everything: build a complete, programmatic evaluation test suite."
        ),
        build_lesson(
            8, "building-automated-eval-harness", "Building an Automated AI Evaluation Harness", "Eval Harness",
            "Synthesizing evaluation: building a production-grade Python evaluation harness with CLI, reports, and regression gates.",
            "What architectural components make up a complete production AI evaluation harness?",
            ["Dataset loader, runner concurrency loop, deterministic & model graders, metric aggregation reporter, and CI exit code gates", "Just an Excel spreadsheet", "A single prompt in ChatGPT", "A web browser bookmark"],
            0, "An evaluation harness provides an end-to-end testing platform: dataset loading, execution, grading, and reporting.",
            [
                "<p>We have explored the full science of AI evaluation: the vibes trap, golden dataset curation, deterministic vs model-based graders, bias-resistant judge engineering, reference metrics, CI/CD integration, and production feedback flywheels.</p>",
                "<p>Now, we synthesize these into a <strong>Complete Automated Evaluation Harness</strong>:</p>",
                "<ul><li><strong>1. Dataset Loader:</strong> Ingests versioned `.jsonl` golden benchmark records.</li><li><strong>2. Concurrency Runner:</strong> Executes model completions concurrently using `asyncio` to test 100 cases in 15 seconds.</li><li><strong>3. Multi-Tier Grading Engine:</strong> Runs fast deterministic schema assertions first; passes passing outputs to an LLM judge for qualitative rubric scoring.</li><li><strong>4. Metrics Aggregator & Reporter:</strong> Computes pass rates, mean scores, 95th-percentile latency, and total token expenditure.</li><li><strong>5. CI Exit Code Gate:</strong> Returns exit code `0` if all thresholds are satisfied; returns `1` to block the PR if regressions occur!</li></ul>",
                "<pre><code># The Complete Evaluation Harness in Python (eval_runner.py):\nasync def run_evaluation_harness(dataset_path, candidate_prompt, threshold=0.90):\n    dataset = load_golden_dataset(dataset_path)\n    # Run all 50 cases concurrently across async workers:\n    results = await asyncio.gather(*[\n        evaluate_case(item, candidate_prompt) for item in dataset\n    ])\n    \n    summary = compute_summary_metrics(results)\n    print_eval_report(summary)\n    \n    if summary[\"accuracy\"] < threshold or summary[\"schema_pass_rate\"] < 1.0:\n        print(\"EVAL FAILED: Regression detected!\")\n        sys.exit(1) # Blocks CI merge!\n    print(\"EVAL PASSED: High confidence release!\")\n    sys.exit(0)</code></pre>",
                "<div class=\"callout\"><p><strong>The Final Truth:</strong> The difference between an amateur AI hobbyist and an enterprise AI engineer is the Evaluation Harness. With a robust eval harness, you engineer with mathematical certainty.</p></div>"
            ],
            "The Evaluation Harness Pipeline", "End-to-end programmatic testing platform",
            [
                {"title": "1. Golden Dataset", "lines": ["Load 100 verified JSONL cases", "Clean edge cases & production logs"]},
                {"title": "2. Async Execution", "lines": ["Runs 20 concurrent workers", "Evaluates full suite in 15 seconds"]},
                {"title": "3. Multi-Tier Grading", "lines": ["Deterministic schemas -> LLM rubrics", "Computes binary pass & qualitative scores"]},
                {"title": "4. CI Reporting & Gate", "lines": ["Prints accuracy & cost summary", "Exits 0 (Pass) or 1 (Blocks regression)"]}
            ],
            "Engineering with Mathematical Certainty", "Transforming subjective prompts into rigorous code",
            [
                {"title": "Amateur Development", "lines": ["'I think the prompt is better'", "Hopes it works, fears deployment"]},
                {"title": "Professional Engineering", "lines": ["'Accuracy improved from 91.2% to 95.8%'", "Proven by automated eval harness, zero fear"]}
            ],
            "Complete the evaluation harness sentence",
            "An automated evaluation harness executes benchmark cases concurrently, evaluates them with multi-tier {1}, and returns binary exit {2} to gate CI deployments.",
            [
                {"answer": "graders", "hint": "Deterministic and model-based scoring engines", "options": ["graders", "keyboards", "monitors"]},
                {"answer": "codes", "hint": "Exit code 0 or 1", "options": ["codes", "cables", "tokens"]}
            ],
            [
                {"q": "What exit code should an automated evaluation harness return when a pull request degrades accuracy below the allowable threshold?",
                 "a": ["Exit code 1 (or any non-zero exit code), which signals a failure to CI and blocks the merge", "Exit code 0", "Exit code 200", "Exit code 404"],
                 "c": 0, "why": "Non-zero exit codes signal failure to CI environments like GitHub Actions, blocking pull requests."},
                {"q": "Why is running evaluation test cases concurrently with asyncio essential?",
                 "a": ["Sequential evaluation of 100 cases taking 2 seconds each takes over 3 minutes; async concurrency finishes in under 15 seconds", "It makes Python run in C", "Asyncio eliminates API bills", "Asyncio writes tests automatically"],
                 "c": 0, "why": "Concurrent requests maximize API throughput, making continuous testing practical in fast CI pipelines."},
                {"q": "What metrics should be included in the final evaluation report summary?",
                 "a": ["Schema pass rate, factual accuracy score, p95 latency, total token consumption, and dollar cost comparison against baseline", "The developer's typing speed", "The number of lines of CSS", "The computer monitor brand"],
                 "c": 0, "why": "Comprehensive summaries cover quality, reliability, latency, and cost."},
                {"q": "What is the ultimate mark of maturity in production AI engineering?",
                 "a": ["Automated evaluation harnesses, continuous CI regression gates, and data flywheels that prove software quality scientifically", "Using the largest model available regardless of cost", "Writing prompts without testing", "Refusing to measure metrics"],
                 "c": 0, "why": "Scientific measurement, automated gates, and disciplined testing define mature software engineering."}
            ],
            "You have completed the AI Evaluation & Testing course.",
            "Next Course: LLM Observability & Tracing", "Explore how to monitor, trace, and audit production AI systems with OpenTelemetry."
        )
    ]

    glossary = [
        {"id": "vibes-datasets", "title": "Vibes & Golden Datasets", "terms": [
            {"term": "Vibe-Based Testing", "def": "The unscientific anti-pattern of manually checking 2-3 casual examples in a playground and guessing at quality.", "lesson": 1, "tags": ["evals", "pitfalls"]},
            {"term": "Golden Dataset", "def": "A curated, representative, and human-verified benchmark set of inputs and expected ground truths.", "lesson": 2, "tags": ["evals", "datasets"]},
            {"term": "Regression", "def": "A performance or accuracy drop on previously passing test cases caused by a prompt or model change.", "lesson": 1, "tags": ["testing", "quality"]}
        ]},
        {"id": "graders", "title": "Graders & Judges", "terms": [
            {"term": "Deterministic Grader", "def": "A code assertion (JSON schema, regex, exit code) that evaluates objective criteria at zero cost.", "lesson": 3, "tags": ["evals", "code"]},
            {"term": "LLM-as-a-Judge", "def": "Using a frontier model to score qualitative outputs against a structured grading rubric.", "lesson": 4, "tags": ["evals", "judges"]},
            {"term": "Verbosity Bias", "def": "The systemic tendency of model judges to award higher scores to longer, wordier responses.", "lesson": 4, "tags": ["evals", "biases"]}
        ]},
        {"id": "reference-metrics", "title": "Reference & CI Metrics", "terms": [
            {"term": "BERTScore", "def": "An evaluation metric computing token embedding cosine similarity to recognize valid synonyms and paraphrasing.", "lesson": 5, "tags": ["metrics", "embeddings"]},
            {"term": "ROUGE", "def": "Recall-Oriented Understudy for Gifting Evaluation — an n-gram overlap metric standard in summarization.", "lesson": 5, "tags": ["metrics", "nlp"]},
            {"term": "Continuous Evaluation", "def": "Embedding automated benchmark test suites into CI/CD pipelines to gate and block regressive PRs.", "lesson": 6, "tags": ["ci", "devops"]}
        ]},
        {"id": "production-flywheels", "title": "Production & Flywheels", "terms": [
            {"term": "Quality Flywheel", "def": "The continuous loop of capturing production user failure signals and promoting them into golden eval datasets.", "lesson": 7, "tags": ["mlops", "flywheels"]},
            {"term": "Implicit Feedback", "def": "Behavioral user signals (copying text, accepting code, regenerating) that reveal satisfaction without surveys.", "lesson": 7, "tags": ["telemetry", "ux"]},
            {"term": "Eval Harness", "def": "An automated testing software platform that loads datasets, runs models concurrently, grades outputs, and reports metrics.", "lesson": 8, "tags": ["tooling", "evals"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "Minimal Golden Eval Record (JSONL)",
            "label": "Benchmark dataset schema",
            "code": "{\n  \"eval_id\": \"tc_102\",\n  \"input\": \"Refund order ORD-412: damaged goods\",\n  \"expected_intent\": \"REFUND\",\n  \"expected_entities\": {\"order_id\": \"ORD-412\"},\n  \"criteria\": \"Must parse exact order ID and trigger refund flow\"\n}",
            "lessonN": 2, "lessonSlug": "golden-evaluation-datasets", "lessonTitle": "Golden Evaluation Datasets: Curation and Diversity"
        },
        {
            "title": "Deterministic Pydantic Code Grader",
            "label": "Zero-cost objective assertion",
            "code": "def grade_output(raw_text):\n    try:\n        ExtractedData.model_validate_json(raw_text)\n        return 1.0 # 100% objective PASS\n    except ValidationError:\n        return 0.0 # FAIL",
            "lessonN": 3, "lessonSlug": "deterministic-vs-model-graders", "lessonTitle": "Deterministic vs Model-Based Graders"
        },
        {
            "title": "LLM Judge Rubric Prompt Template",
            "label": "Calibrated qualitative grading",
            "code": "judge_prompt = f\"\"\"Evaluate the candidate response against the criteria below.\nRubric (1 to 5):\n- 1: Factually incorrect or hallucinated.\n- 3: Correct facts, but verbose or disorganised.\n- 5: Flawless precision, concise, and actionable.\n\nFirst, write out your reasoning steps. Then output JSON: {{\"reasoning\": \"...\", \"score\": 5}}\n\"\"\"",
            "lessonN": 4, "lessonSlug": "llm-as-a-judge-rubrics-biases", "lessonTitle": "LLM-as-a-Judge: Rubrics, Calibration, and Bias Mitigation"
        },
        {
            "title": "Automated Eval CI Runner Script",
            "label": "Gating GitHub Actions",
            "code": "async def main():\n    results = await run_suite(golden_dataset, candidate_prompt)\n    if results.accuracy < 0.95:\n        print('CI BLOCKED: Accuracy regression detected!')\n        sys.exit(1)\n    sys.exit(0)",
            "lessonN": 8, "lessonSlug": "building-automated-eval-harness", "lessonTitle": "Building an Automated AI Evaluation Harness"
        }
    ]

    course_data = {
        "id": "ai-evaluation",
        "title": "AI Evaluation & Testing",
        "num": 81,
        "emoji": "📏",
        "desc": "Datasets, graders and rubrics — measuring whether a model change actually made things better.",
        "topics": ["AI Evaluation", "The Vibes Problem", "Golden Datasets", "Deterministic Graders", "LLM-as-a-Judge", "BERTScore", "CI/CD Evals", "Quality Flywheel"],
        "mission": "# Mission — AI Evaluation & Testing\n\nTransition from subjective 'vibe-based' testing to empirical software evaluation. Curate high-signal golden benchmark datasets, distinguish deterministic code assertions from model judges, engineer bias-resistant LLM-as-a-Judge rubrics, evaluate semantic similarity with BERTScore, embed continuous evaluation into CI/CD pipelines to block regressions, harness production user feedback flywheels, and build a complete automated evaluation harness.",
        "notes": "# Notes — AI Evaluation & Testing\n\nPrompts are code. If you do not test prompt modifications against an automated benchmark in CI, you are guessing. Measure accuracy, latency, and cost scientifically.",
        "resources": "# Resources — AI Evaluation & Testing\n\n- Lianmin Zheng et al., *Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena*\n- Tianyi Zhang et al., *BERTScore: Evaluating Text Generation with BERT*\n- Eugene Yan, *Patterns for Building LLM-based Systems & Products*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

# ==============================================================================
# COURSE 82: llm-observability (LLM Observability & Tracing)
# ==============================================================================
def make_course_82():
    lessons = [
        build_lesson(
            1, "inside-the-llm-black-box", "Inside the LLM Black Box: Why Logs Are Not Enough", "Observability Need",
            "Why traditional server logs fail for AI systems: non-deterministic execution, multi-hop agent chains, and hidden costs.",
            "Why is traditional line-by-line server logging (e.g. stdout text prints) inadequate for debugging LLM applications?",
            ["LLM applications involve non-deterministic model reasoning, multi-turn tool loops, and token costs that require structured hierarchical traces", "Server logs cannot print words", "Traditional logs are forbidden by AI providers", "LLM calls run without servers"],
            0, "Traditional flat logs cannot represent the hierarchical tree of prompts, tool calls, token costs, and model reasoning.",
            [
                "<p>In traditional web development, a server log is simple: an HTTP request hits <code>/api/users</code>, a database query runs, and status 200 is logged. If an error occurs, the stack trace points to line 42. But in an AI application or autonomous agent, the execution is a <strong>probabilistic, multi-hop black box</strong>.</p>",
                "<p>Why traditional flat logs fail for AI:</p>",
                "<ul><li><strong>Hierarchical Multi-Hop Execution:</strong> A single user question might trigger a RAG retrieval step, an intent classifier call, two parallel tool executions, and a final synthesis call. Flat logs scatter these across thousands of unrelated lines!</li><li><strong>Hidden Token Economics:</strong> Did an innocuous prompt change increase token consumption by 400%? Flat logs don't track token burn or dollar costs.</li><li><strong>Latency Attribution:</strong> When a request takes 8 seconds, where was the time spent? (Pre-fill? Vector DB? Tool execution? Model decoding?).</li></ul>",
                "<pre><code># Traditional Flat Log (Useless): \n[INFO] 14:22:01 - Processing user request\n[INFO] 14:22:03 - Querying database\n[INFO] 14:22:08 - Request finished in 7.2s\n# Why did it take 7.2s? Which model was called? How many tokens? We have zero clue!\n\n# Modern Hierarchical LLM Trace:\n# Trace: UserSupportWorkflow (7.2s, $0.042)\n# ├── Span: EmbedQuery (45ms, 12 tokens, text-embedding-3-small)\n# ├── Span: ChromaVectorSearch (18ms, 3 chunks retrieved)\n# ├── Span: ToolDispatch: get_order (180ms, database query)\n# └── Span: LLM Synthesis (6.9s, 1,420 prompt tokens, 280 completion tokens, gpt-4o)</code></pre>",
                "<div class=\"callout\"><p><strong>The Core Truth:</strong> You cannot optimize latency, control costs, or debug failures without hierarchical tracing that captures every span of execution.</p></div>"
            ],
            "Flat Logs vs Hierarchical Traces", "Linear text prints vs structured execution trees",
            [
                {"title": "Flat Server Logs (Opaque)", "lines": ["Scattered text prints in stdout", "Zero cost tracking, hidden latency", "Impossible to reconstruct multi-agent flow"]},
                {"title": "Hierarchical Trace (Transparent)", "lines": ["Root trace with nested child spans", "Exact token counts, dollar costs, & latency", "Complete visibility into every tool & prompt"]}
            ],
            "Latency Attribution Breakdown", "Pinpointing bottlenecks across the pipeline",
            [
                {"title": "Total Latency: 8.0s", "lines": ["Where was the time spent?"]},
                {"title": "Vector Search: 0.1s", "lines": ["Database is fast & healthy"]},
                {"title": "Model Decoding: 7.9s", "lines": ["Bottleneck identified: output generation!"]}
            ],
            "Complete the observability need sentence",
            "Traditional flat logs fail for AI applications because multi-hop agent execution demands structured hierarchical {1} that track tokens, costs, and {2}.",
            [
                {"answer": "traces", "hint": "Parent-child execution trees", "options": ["traces", "terminals", "keyboards"]},
                {"answer": "latency", "hint": "Time taken across each span", "options": ["latency", "formatting", "licensing"]}
            ],
            [
                {"q": "What is a 'Trace' in distributed observability?",
                 "a": ["A complete end-to-end representation of a single request's journey across all services, models, and tools from input to output", "A line of code in Python", "A drawing of a computer", "A git commit hash"],
                 "c": 0, "why": "A trace tracks the complete lifecycle of a request as it passes through a distributed system."},
                {"q": "What is a 'Span' within an observability trace?",
                 "a": ["A single timed unit of work (e.g. an individual tool call, database query, or LLM invocation) within the larger trace tree", "The distance between two monitors", "A type of memory chip", "A database index"],
                 "c": 0, "why": "Spans represent individual nested steps with start times, end times, and metadata within a trace."},
                {"q": "Why is tracking token consumption per span critical for cost management?",
                 "a": ["It identifies exactly which prompt, model, or intermediate tool call is responsible for driving up API expenses", "It speeds up Python", "Tokens cannot be tracked without spans", "It makes models run for free"],
                 "c": 0, "why": "Per-span token accounting attributes financial cost directly to specific architectural components."},
                {"q": "How does latency attribution help an engineer optimize a slow RAG application?",
                 "a": ["It reveals whether slowness is caused by vector database indexing, network transit, or model token decoding", "It makes the network cable faster", "It converts Python to C++", "It deletes slow documents"],
                 "c": 0, "why": "Measuring individual span durations pinpoints the exact component causing user-facing delays."}
            ],
            "You understand the limitations of traditional logs and the necessity of hierarchical tracing.",
            "Traces, Spans, and OpenTelemetry for AI (OpenInference)", "Instrument AI applications with standardized OpenTelemetry spans."
        ),
        build_lesson(
            2, "traces-spans-opentelemetry", "Traces, Spans, and OpenTelemetry for AI (OpenInference)", "OpenTelemetry",
            "Standardized telemetry: OpenTelemetry (OTel), the OpenInference semantic convention standard, and distributed tracing.",
            "What is 'OpenInference' in modern AI observability?",
            ["An open semantic convention extending OpenTelemetry to standardize attributes for LLM calls, prompts, tokens, and tools", "An open-source language model", "A Python compiler", "A GPU hardware driver"],
            0, "OpenInference standardizes OTel span attributes (llm.model_name, llm.token_count) across all observability platforms.",
            [
                "<p>In the early days of AI observability, every monitoring tool (Langfuse, Arize Phoenix, Helicone, Weights & Biases) created its own proprietary logging SDK. If you wanted to switch monitoring dashboards, you had to re-instrument your entire codebase.</p>",
                "<p>Today, the industry has converged on <strong>OpenTelemetry (OTel)</strong> and the <strong>OpenInference Semantic Conventions</strong>:</p>",
                "<ul><li><strong>Vendor-Neutral Instrumentation:</strong> You instrument your application using standard OpenTelemetry tracers. Data can be exported to Langfuse, Phoenix, Datadog, Honeycomb, or New Relic with zero code changes!</li><li><strong>Standardized Semantic Attributes:</strong> Defines exact attribute names across all AI spans: <code>llm.model_name</code>, <code>llm.token_count.prompt</code>, <code>llm.token_count.completion</code>, <code>input.value</code>, <code>output.value</code>.</li><li><strong>Automated SDK Monkey-Patching:</strong> Libraries like `openinference-instrumentation-openai` automatically wrap OpenAI and Anthropic SDK calls, capturing traces with zero manual boilerplate!</li></ul>",
                "<pre><code># Automatic Zero-Code OTel Instrumentation in Python:\nfrom openinference.instrumentation.openai import OpenAIInstrumentor\nfrom opentelemetry import trace\n\n# Instrument all OpenAI calls automatically across the entire app!\nOpenAIInstrumentor().instrument()\n\n# Every client.chat.completions.create() now automatically emits\n# OpenTelemetry spans with full token counts, latency, and prompt metadata!</code></pre>",
                "<div class=\"callout\"><p><strong>The Open Standard Rule:</strong> Never bind your codebase to proprietary logging APIs. Instrument with OpenTelemetry/OpenInference to remain portable and future-proof.</p></div>"
            ],
            "OpenInference Semantic Attributes", "Standardized metadata keys across all platforms",
            [
                {"title": "llm.model_name", "lines": ["e.g. 'gpt-4o-mini', 'claude-3-5-sonnet'", "Tracks model version and provider"]},
                {"title": "llm.token_count.prompt", "lines": ["Exact integer count of input tokens", "Used for pre-fill cost accounting"]},
                {"title": "llm.token_count.completion", "lines": ["Exact integer count of output tokens", "Used for generation cost accounting"]}
            ],
            "Vendor-Neutral Architecture", "One instrumentation standard, any backend",
            [
                {"title": "Your Application Code", "lines": ["Instrumented once with OpenInference / OTel", "Captures traces & spans"]},
                {"title": "Standard OTLP Exporter", "lines": ["Exports to Langfuse, Arize Phoenix, Datadog", "Switch dashboards by changing 1 env var!"]}
            ],
            "Complete the OpenTelemetry sentence",
            "OpenInference standardizes OpenTelemetry attributes for AI systems, enabling vendor-neutral {1} across tools, prompts, and {2} counts.",
            [
                {"answer": "tracing", "hint": "Recording execution trees across services", "options": ["tracing", "compilation", "formatting"]},
                {"answer": "token", "hint": "Input and output token volume", "options": ["token", "hardware", "voltage"]}
            ],
            [
                {"q": "What is the primary advantage of instrumenting an AI service with OpenTelemetry over proprietary monitoring SDKs?",
                 "a": ["You can switch or export data to any observability backend (Langfuse, Datadog, Phoenix) without modifying application code", "It makes the model run 10x faster", "It eliminates all API costs", "It writes unit tests automatically"],
                 "c": 0, "why": "OpenTelemetry prevents vendor lock-in by standardizing telemetry collection and export protocols."},
                {"q": "What does the attribute 'llm.invocation_parameters' typically record in an OpenInference span?",
                 "a": ["Sampling settings like temperature, top_p, max_tokens, and presence penalties used for that specific call", "The developer's password", "The computer processor clock speed", "The price of bitcoin"],
                 "c": 0, "why": "Recording invocation parameters ensures full auditability of the sampling configuration that produced the output."},
                {"q": "How does automatic instrumentation (like OpenAIInstrumentor) save engineering time?",
                 "a": ["It automatically wraps all SDK method calls with tracing spans without requiring developers to write manual logging code", "It writes the application code", "It translates Python to C", "It deletes old files"],
                 "c": 0, "why": "Auto-instrumentation injects tracing transparently across standard SDK clients."},
                {"q": "What open standard transport protocol does OpenTelemetry use to ship traces to collection servers?",
                 "a": ["OTLP (OpenTelemetry Protocol) over gRPC or HTTP", "SMTP email", "FTP file transfer", "Raw audio signals"],
                 "c": 0, "why": "OTLP is the official standard protocol for transmitting telemetry data to collectors and backends."}
            ],
            "You know how to instrument AI applications using OpenTelemetry and OpenInference semantic standards.",
            "Token Accounting, Cost Tracking, and Quotas", "Track unit economics, monitor tenant spend, and enforce hard budgets."
        ),
        build_lesson(
            3, "token-accounting-cost-tracking-quotas", "Token Accounting, Cost Tracking, and Quotas", "Token Accounting",
            "Financial observability: calculating exact dollar spend per query, user, and feature, and enforcing real-time budget quotas.",
            "Why must an enterprise AI platform track token consumption tagged by 'tenant_id' or 'user_id'?",
            ["To accurately allocate cloud costs, bill customers for usage, and detect abusive accounts before they deplete company margins", "To see what customers are doing in private", "To report users to the police", "It is required by computer hardware"],
            0, "Attributing token consumption to tenants protects gross margins and enforces tier limits.",
            [
                "<p>In traditional SaaS, an active user might cost you $0.001 per month in server compute. In generative AI, a single power user running agentic refactoring loops can easily burn <strong>$50.00 of API tokens in one afternoon</strong>. Without granular token accounting, your SaaS margins will collapse.</p>",
                "<p>A production <strong>Token Accounting & Quota Engine</strong> enforces three controls:</p>",
                "<ul><li><strong>1. Granular Tagging:</strong> Every trace span must be tagged with metadata: `user_id`, `tenant_id`, `feature_name` (e.g. 'code-review' vs 'chat'), and `environment` ('prod' vs 'staging').</li><li><strong>2. Real-Time Cost Calculation:</strong> An ingestion pipeline calculates exact dollar costs: $\\text{Cost} = (\\text{Prompt} \\times P_{in}) + (\\text{Completion} \\times P_{out})$, subtracting prompt caching discounts.</li><li><strong>3. Pre-Flight Quota Enforcement:</strong> Before invoking an LLM, check the tenant's remaining monthly token budget in Redis! If quota is exhausted, reject the request with HTTP 429 <code>quota_exceeded</code> before incurring API debt.</li></ul>",
                "<pre><code># Pre-Flight Quota Gate in Python (FastAPI Middleware):\nasync def check_tenant_quota(tenant_id: str, estimated_tokens: int):\n    current_spend = await redis.get(f\"spend:{tenant_id}:current_month\")\n    monthly_limit = await db.get_tenant_spend_limit(tenant_id)\n    \n    if float(current_spend or 0.0) >= monthly_limit:\n        raise HTTPException(\n            status_code=429,\n            detail=\"Monthly AI budget limit reached. Please upgrade your tier.\"\n        )</code></pre>",
                "<div class=\"callout\"><p><strong>The Margin Rule:</strong> Tag every single LLM call with a `feature_name`. If a feature costs $5,000/month but drives zero user retention, kill the feature!</p></div>"
            ],
            "Token Accounting Pipeline", "From raw span metadata to tenant cost allocation",
            [
                {"title": "1. Span Tagging", "lines": ["tenant_id: 'org_842', feature: 'auto-summary'", "Captures prompt & completion tokens"]},
                {"title": "2. Cost Engine", "lines": ["Calculates exact dollar cost in real time", "Applies model-specific pricing tiers"]},
                {"title": "3. Quota Ledger", "lines": ["Atomically increments Redis monthly spend", "Blocks calls when budget ceiling is breached"]}
            ],
            "Feature Cost Attribution", "Knowing where money is spent",
            [
                {"title": "Feature A: Customer Chat", "lines": ["$120 / month (Low cost, high value)", "Healthy unit economics"]},
                {"title": "Feature B: Uncached Vector Search", "lines": ["$4,200 / month (Runaway waste!)", "Targeted for immediate optimization"]}
            ],
            "Complete the token accounting sentence",
            "Token accounting attributes dollar costs to specific {1} and features, using pre-flight Redis checks to enforce monthly budget {2}.",
            [
                {"answer": "tenants", "hint": "Customer organizations or accounts", "options": ["tenants", "monitors", "cables"]},
                {"answer": "quotas", "hint": "Spending limits and ceilings", "options": ["quotas", "fonts", "licenses"]}
            ],
            [
                {"q": "What happens if an application does not enforce a pre-flight budget quota check on user requests?",
                 "a": ["An abusive user or runaway script can generate millions of requests, racking up massive third-party API debts", "The computer will crash", "The model weights will be deleted", "Python will throw a syntax error"],
                 "c": 0, "why": "Without pre-flight budget checks, users can consume unbounded API resources at company expense."},
                {"q": "How does prompt caching affect the mathematical calculation of request cost?",
                 "a": ["Cached input tokens must be billed at the discounted provider rate (typically 50% to 90% cheaper) rather than standard input pricing", "Cached tokens are free forever", "Cached tokens cost 10x more", "Caching does not affect pricing"],
                 "c": 0, "why": "Accurate cost accounting accounts for cached token discounts provided by the model vendor."},
                {"q": "Why is tagging traces by 'feature_name' valuable for product managers?",
                 "a": ["It reveals the exact return on investment (ROI) and operating cost of individual AI features across the product", "It makes the feature load faster", "It formats the UI in dark mode", "It changes the button color"],
                 "c": 0, "why": "Feature-level cost attribution helps teams invest in high-value capabilities and prune unprofitable features."},
                {"q": "What data store is commonly used to maintain fast, atomic real-time user token budgets?",
                 "a": ["Redis (using atomic INCRBYFLOAT commands)", "A CSV file on desktop", "A physical notebook", "Git commit history"],
                 "c": 0, "why": "Redis provides high-speed, atomic in-memory incrementing ideal for rate limits and quotas."}
            ],
            "You know how to track token economics, attribute costs, and enforce real-time tenant quotas.",
            "Latency Profiling: TTFT, Generation Speed, and Bottlenecks", "Profile inference latency across pre-fill, decoding, and network hops."
        ),
        build_lesson(
            4, "latency-profiling-ttft-throughput", "Latency Profiling: TTFT, Generation Speed, and Bottlenecks", "Latency Profiling",
            "Deep latency profiling: breaking down Time-to-First-Token (TTFT), inter-token arrival time (ITL), and network transit.",
            "What does 'Inter-Token Latency' (ITL) measure in streaming LLM generation?",
            ["The average duration between consecutive streamed tokens during the decoding phase (measuring generation throughput)", "The time to download the model file", "The delay before the first token appears", "The speed of the network router"],
            0, "ITL measures the time between consecutive emitted tokens, defining the smoothness and speed of text generation.",
            [
                "<p>When users complain: <em>'The AI feels slow'</em>, saying 'we need to optimize' is useless. You must decompose total request duration into its three physical components:</p>",
                "<ul><li><strong>1. Network Transit Latency:</strong> The speed-of-light round trip from client to cloud data center (typically 40-150ms).</li><li><strong>2. Time-to-First-Token (TTFT):</strong> How long the model takes to ingest and compute attention over all prompt tokens (pre-fill phase). If your prompt has 50,000 tokens, TTFT will be high!</li><li><strong>3. Inter-Token Latency (ITL) / Throughput:</strong> The time taken to emit each subsequent token during decoding (typically 15-30ms per token = 30-70 tokens/sec).</li></ul>",
                "<pre><code># The Latency Decomposition Equation:\n# Total_Duration = Network_RTT + TTFT + (Output_Tokens * Inter_Token_Latency)\n#\n# Case A (Prompt Bloat):  TTFT = 4.2s, Output = 0.5s -> BOTTLENECK: Prompt is too big!\n# Case B (Verbose Output): TTFT = 0.4s, Output = 7.5s -> BOTTLENECK: Model generating too much text!</code></pre>",
                "<p>By profiling these metrics in your observability traces, the fix becomes obvious: if TTFT is high, prune your prompt and enable prompt caching; if generation time is high, enforce concise output constraints.</p>",
                "<div class=\"callout\"><p><strong>The Profiling Rule:</strong> Always monitor p95 and p99 latency percentiles, not just the average. Outliers with giant prompts distort user experience.</p></div>"
            ],
            "Latency Decomposition Breakdown", "Deconstructing total request duration",
            [
                {"title": "Network RTT (40-100ms)", "lines": ["Speed-of-light client-server transit", "Minimized via geographic CDN edge routing"]},
                {"title": "Time-to-First-Token (TTFT)", "lines": ["Prompt pre-fill computation", "Minimized via prompt pruning & caching"]},
                {"title": "Generation Duration (ITL)", "lines": ["Tokens-per-second decoding speed", "Minimized via concise output constraints"]}
            ],
            "Diagnosing Latency Bottlenecks", "Targeting the root cause",
            [
                {"title": "Symptom: High TTFT (5s+)", "lines": ["Cause: Massive 80k-token prompt", "Fix: Enable prompt caching or use RAG"]},
                {"title": "Symptom: High ITL (Slow Stream)", "lines": ["Cause: GPU memory bandwidth saturation", "Fix: Switch to smaller model or speculative decoding"]}
            ],
            "Complete the latency profiling sentence",
            "Latency profiling breaks down total duration into network round-trip, {1} for prompt pre-fill, and inter-token latency for {2} throughput.",
            [
                {"answer": "TTFT", "hint": "Time-to-First-Token pre-fill duration", "options": ["TTFT", "RAM", "HTML"]},
                {"answer": "generation", "hint": "Decoding speed across output tokens", "options": ["generation", "compilation", "formatting"]}
            ],
            [
                {"q": "What does a high p99 TTFT indicate when average TTFT is low?",
                 "a": ["Occasional outlier requests with massive prompt sizes or cache misses are causing severe response delays for a subset of users", "The computer monitor is refreshing slowly", "Python is running in debug mode", "The internet was disconnected for everyone"],
                 "c": 0, "why": "p99 percentiles expose tail outliers (like massive document attachments) that averages conceal."},
                {"q": "How does prompt caching dramatically reduce Time-to-First-Token (TTFT)?",
                 "a": ["By avoiding recomputing attention over large static prefixes, allowing the model to begin generating output tokens immediately", "By making the text shorter", "By deleting prompt tokens", "By running on quantum hardware"],
                 "c": 0, "why": "Loading pre-computed KV-cache states bypasses the heavy pre-fill computation phase."},
                {"q": "Why is streaming Inter-Token Latency (ITL) important for user perception?",
                 "a": ["If ITL is erratic or jittery, text generation feels stuttery and unnatural to read on screen", "It changes the color of the text", "It causes hard drive crashes", "It affects CSS rendering"],
                 "c": 0, "why": "Consistent, low ITL ensures smooth, typewriter-like visual streaming."},
                {"q": "What simple prompt directive slashes generation duration in half?",
                 "a": ["Instructing the model: 'Be concise. Answer in 2-3 bullet points without introductory filler.'", "Telling the model to run faster", "Writing in all capital letters", "Setting temperature to 2.0"],
                 "c": 0, "why": "Halving the number of emitted tokens directly halves the generation decoding duration."}
            ],
            "You know how to profile, decompose, and optimize LLM latency bottlenecks.",
            "Prompt and Response Logging with PII Scrubbing", "Safely record traces without leaking customer personal data."
        ),
        build_lesson(
            5, "prompt-logging-and-pii-scrubbing", "Prompt and Response Logging with PII Scrubbing", "Privacy Scrubbing",
            "Logging without legal liability: scrubbing Personally Identifiable Information (PII), secrets, and tokens before storage.",
            "What severe compliance risk arises if an enterprise logs raw prompts and model responses directly to cloud tracing databases?",
            ["Raw logs frequently contain customer PII, passwords, credit card numbers, or medical data, violating GDPR, HIPAA, and SOC2", "Logs make the database run out of letters", "AI providers delete accounts that log text", "Logging text is prohibited by Python"],
            0, "Raw prompt logs often contain sensitive personal data that must be scrubbed to prevent compliance violations.",
            [
                "<p>Observability requires seeing what your system did: inspecting the exact prompt, the retrieved chunks, and the model's response. However, if a user pastes their credit card, password, or medical history into your chat app, logging that raw prompt into a third-party tracing dashboard violates <strong>GDPR, HIPAA, and SOC2</strong>.</p>",
                "<p>Production observability pipelines enforce <strong>PII Scrubbing at Ingress</strong>:</p>",
                "<ul><li><strong>1. Regular Expression Scrubbers:</strong> High-speed regex filters that detect and mask credit cards, Social Security numbers, email addresses, and phone numbers.</li><li><strong>2. Dedicated Entity Recognition (Microsoft Presidio):</strong> Open-source NLP models that recognize named entities (patient names, medical conditions, addresses) in real time.</li><li><strong>3. Replacement with Synthetic Pseudonyms:</strong> Replace sensitive entities with clean placeholders: <code>\"Call Alice at 555-0199\"</code> $\\rightarrow$ <code>\"Call [PERSON_1] at [PHONE_1]\"</code>.</li><li><strong>4. Role-Based Access to Logs:</strong> Encrypt raw traces and ensure only authorized compliance officers can view unmasked logs.</li></ul>",
                "<pre><code># Automated PII Scrubbing in Python with Presidio:\nfrom presidio_analyzer import AnalyzerEngine\nfrom presidio_anonymizer import AnonymizerEngine\n\nanalyzer = AnalyzerEngine()\nanonymizer = AnonymizerEngine()\n\ndef scrub_pii_before_tracing(raw_text: str) -> str:\n    # Detect PII entities (Names, Emails, Phones, SSNs)\n    results = analyzer.analyze(text=raw_text, language=\"en\")\n    # Anonymize with placeholders\n    anonymized = anonymizer.anonymize(text=raw_text, analyzer_results=results)\n    return anonymized.text\n# Ingest anonymized.text into Langfuse / Phoenix! 100% compliant!</code></pre>",
                "<div class=\"callout\"><p><strong>The Privacy Law:</strong> Observability must never compromise user trust. Scrub sensitive data at the telemetry exporter before it leaves your application memory.</p></div>"
            ],
            "The PII Scrubbing Pipeline", "Sanitizing prompts before exporting telemetry",
            [
                {"title": "1. User Input (Raw PII)", "lines": ["'My name is John Doe, SSN 442-11-9821'", "Contains sensitive personal data"]},
                {"title": "2. Presidio Scrubbing Gate", "lines": ["Detects PERSON and US_SSN entities", "Replaces with synthetic placeholders"]},
                {"title": "3. Clean Telemetry Export", "lines": ["'My name is [PERSON], SSN [US_SSN]'", "100% HIPAA and GDPR compliant"]}
            ],
            "Compliance Defense in Depth", "Protecting customer secrets",
            [
                {"title": "Unscrubbed Traces (High Risk)", "lines": ["Passwords & PII stored in plain text", "Massive regulatory fines & breach risk"]},
                {"title": "Sanitized Traces (Secure)", "lines": ["All PII redacted at application boundary", "Audit-ready observability"]}
            ],
            "Complete the PII scrubbing sentence",
            "To prevent GDPR and HIPAA violations, observability pipelines use PII scrubbers like Microsoft {1} to replace sensitive entities with synthetic {2}.",
            [
                {"answer": "Presidio", "hint": "Open-source PII detection library", "options": ["Presidio", "Photoshop", "Excel"]},
                {"answer": "placeholders", "hint": "Redacted tags like [PERSON]", "options": ["placeholders", "passwords", "tokens"]}
            ],
            [
                {"q": "What open-source framework from Microsoft is the industry standard for detecting and anonymizing PII?",
                 "a": ["Microsoft Presidio", "Microsoft Word", "DirectX", "Windows Media Player"],
                 "c": 0, "why": "Presidio provides customizable analyzer and anonymizer engines for PII scrubbing."},
                {"q": "Why is regex alone often insufficient for scrubbing names and locations from natural language?",
                 "a": ["Names and locations do not follow rigid mathematical patterns like credit cards; they require contextual named entity recognition", "Regex cannot read English", "Regex is too slow", "Regex crashes on names"],
                 "c": 0, "why": "Contextual NLP models recognize arbitrary person and location names that regex patterns miss."},
                {"q": "Where in the software pipeline should PII scrubbing occur?",
                 "a": ["At the application telemetry export boundary before traces leave your private infrastructure", "Inside the third-party dashboard", "After the data breach occurs", "On the user's monitor"],
                 "c": 0, "why": "Scrubbing at export ensures unmasked sensitive data never leaves your secure perimeter."},
                {"q": "What should happen to API keys or internal database passwords if a user accidentally pastes them into chat?",
                 "a": ["Secret detection filters (like Shannon entropy analyzers) should scrub them to [REDACTED_SECRET]", "They should be saved to git", "They should be printed in logs", "They should be emailed to support"],
                 "c": 0, "why": "Entropy and regex analyzers detect high-entropy keys and redact them from trace logs."}
            ],
            "You know how to implement robust PII and secret scrubbing for compliant AI observability.",
            "Error Tracking, Fallback Detection, and Anomaly Alerts", "Monitor production errors, track fallback switches, and alert on spikes."
        ),
        build_lesson(
            6, "error-tracking-fallback-anomaly-alerts", "Error Tracking, Fallback Detection, and Anomaly Alerts", "Alerting & Errors",
            "Production incident management: tracking provider error rates, detecting silent fallback cascades, and setting anomaly alerts.",
            "Why must an engineering team track when an automated 'Provider Fallback' is triggered in production?",
            ["A provider fallback indicates that your primary model is failing; if unmonitored, the fallback provider might also fail or incur unexpected costs", "Fallbacks are illegal in software", "Fallbacks delete database records", "Fallbacks cause hardware fires"],
            0, "Fallbacks prevent downtime, but indicate underlying degradation that must be monitored and alerted.",
            [
                "<p>When you build a resilient AI application with multi-provider fallbacks (e.g. falling back from OpenAI to Anthropic on error), the application stays online during an outage. However, if you don't monitor fallback events, you are flying blind: <em>your primary provider might be 100% down, and you won't know until the backup provider's bill arrives!</em></p>",
                "<p>A production <strong>AI Alerting and Error Engine</strong> monitors four vital signals:</p>",
                "<ul><li><strong>1. Error Rate Spikes:</strong> Alert on PagerDuty if HTTP 429 (Rate Limits) or HTTP 500 (Outages) exceed 2% of total traffic over a 5-minute window.</li><li><strong>2. Fallback Cascade Frequency:</strong> Track every time execution switches to the backup model: <code>metrics.increment(\"llm.fallback.invoked\", tags=[\"from:openai\", \"to:anthropic\"])</code>.</li><li><strong>3. Token Anomaly Alerts:</strong> Trigger alerts if an individual request consumes $> 50,000$ tokens, or if daily spend exceeds 150% of the rolling average. (Catches runaway prompt loops!).</li><li><strong>4. Schema Parse Failure Spikes:</strong> Alert if Pydantic validation failures exceed 1%, indicating that the model has degraded or a prompt edit introduced formatting bugs.</li></ul>",
                "<pre><code># Monitoring Fallback Invocations in Datadog/Prometheus:\nasync def resilient_model_call(prompt):\n    try:\n        return await call_openai(prompt)\n    except (openai.RateLimitError, openai.APIConnectionError) as e:\n        # Emit metric alert before falling back!\n        statsd.increment(\"llm.fallback.triggered\", tags=[\"primary:openai\", \"backup:anthropic\"])\n        logger.warning(\"Primary provider failed. Switching to fallback provider.\", exc_info=e)\n        return await call_anthropic(prompt)</code></pre>",
                "<div class=\"callout\"><p><strong>The Incident Rule:</strong> A successful fallback is a temporary victory, not an excuse to ignore the outage. Investigate primary provider failures immediately.</p></div>"
            ],
            "The Four Critical AI Alerts", "Monitoring operational health and failure boundaries",
            [
                {"title": "1. Error Rate Spike (> 2%)", "lines": ["Surge in 429s or 500s from provider", "Alerts on-call engineer immediately"]},
                {"title": "2. Fallback Invocation Rate", "lines": ["Tracks failovers from Primary -> Backup", "Flags upstream provider degradation"]},
                {"title": "3. Token Spike Anomaly", "lines": ["Single request > 50k tokens", "Catches infinite agent loops before cost explodes"]},
                {"title": "4. Schema Parse Failures (> 1%)", "lines": ["Pydantic validation errors", "Signals model drift or broken prompts"]}
            ],
            "Fallback Event Lifecycle", "Graceful degradation with full observability",
            [
                {"title": "Primary Fails (HTTP 503)", "lines": ["OpenAI outage begins", "Emit statsd metric -> PagerDuty alert"]},
                {"title": "Execute Fallback (Anthropic)", "lines": ["User request succeeds seamlessly", "Zero customer-facing downtime"]}
            ],
            "Complete the alerting sentence",
            "Production observability systems track fallback invocations and trigger anomaly alerts on {1} rate spikes and unexpected token {2}.",
            [
                {"answer": "error", "hint": "HTTP 429 and 500 failure frequencies", "options": ["error", "formatting", "font"]},
                {"answer": "surges", "hint": "Sudden massive spikes in token spend", "options": ["surges", "keyboards", "monitors"]}
            ],
            [
                {"q": "What does a sudden surge in Pydantic validation errors in an AI endpoint indicate?",
                 "a": ["The model provider updated backend serving weights causing format drift, or a recent prompt change broke schema adherence", "The computer hard drive is full", "The database changed its password", "Users stopped typing"],
                 "c": 0, "why": "Schema validation spikes indicate that model outputs are deviating from expected contracts."},
                {"q": "Why is alerting on abnormal token spikes critical for stopping runaway agent loops?",
                 "a": ["An agent trapped in a recursive tool loop can consume thousands of dollars in minutes if not caught by token anomaly alerts", "It causes hard drives to overheat", "Tokens cannot be alerted on", "It is required by the FDA"],
                 "c": 0, "why": "Token anomaly alerts catch infinite loops and runaway recursions before financial damage occurs."},
                {"q": "What monitoring tool standardly integrates with OpenTelemetry to trigger on-call alerts via PagerDuty or Slack?",
                 "a": ["Datadog, Prometheus/Grafana, or Honeycomb", "Photoshop", "Git bash", "Microsoft Paint"],
                 "c": 0, "why": "Enterprise monitoring backends ingest OTel metrics and trigger real-time alerts."},
                {"q": "How can an engineering team verify their fallback architecture works before a real provider outage occurs?",
                 "a": ["By running Chaos Engineering tests that simulate API network timeouts and verifying that the fallback provider activates cleanly", "By waiting for a real outage", "By deleting their API keys", "By shutting down the office"],
                 "c": 0, "why": "Chaos testing proves that fallback switches, metrics, and alerts trigger reliably under simulated failure."}
            ],
            "You know how to track errors, detect fallbacks, and configure anomaly alerts for production AI systems.",
            "Open-Source Observability Stacks: Langfuse, Arize Phoenix", "Deploy and operate dedicated open-source AI observability platforms."
        ),
        build_lesson(
            7, "open-source-observability-langfuse-phoenix", "Open-Source Observability Stacks: Langfuse, Arize Phoenix", "Observability Stacks",
            "Deploying open-source observability: Langfuse (full-stack traces, evals), Arize Phoenix (local & production), and self-hosting with Docker.",
            "What is the primary advantage of self-hosting an open-source observability platform like Langfuse or Arize Phoenix?",
            ["Complete data privacy and ownership: all prompts, traces, and customer queries remain within your private VPC with zero third-party egress", "It is written in HTML", "It eliminates the need for computers", "It makes models run without GPUs"],
            0, "Self-hosted observability keeps confidential prompts and customer telemetry strictly inside private enterprise networks.",
            [
                "<p>While commercial cloud dashboards (OpenAI Dashboard, Helicone Cloud) are easy to set up, enterprises handling confidential data cannot send full prompt logs to third-party monitoring SaaS. The open-source ecosystem provides two premier <strong>Self-Hosted AI Observability Platforms</strong>:</p>",
                "<ul><li><strong>1. Langfuse:</strong> The leading open-source LLM engineering platform. Written in TypeScript and PostgreSQL. Features rich trace visualizers, prompt versioning, automated eval scoring, and per-user cost tracking. Can be deployed on-premise in 5 minutes via Docker Compose.</li><li><strong>2. Arize Phoenix:</strong> An open-source, AI-native observability platform built specifically for RAG evaluation, embedding drift analysis, and OpenInference tracing. Runs locally in Python notebooks or as a scalable Kubernetes microservice.</li></ul>",
                "<pre><code># Self-Hosting Langfuse in 1 Minute (docker-compose.yml):\nversion: '3.8'\nservices:\n  langfuse-server:\n    image: ghcr.io/langfuse/langfuse:latest\n    ports:\n      - \"3000:3000\"\n    environment:\n      - DATABASE_URL=postgresql://postgres:secret@db:5432/langfuse\n      - NEXTAUTH_SECRET=supersecretkey\n      - SALT=somesaltvalue\n# Access full enterprise UI at http://localhost:3000 inside your private VPC!</code></pre>",
                "<p>Once deployed inside your private VPC, your application points its OpenTelemetry exporter to your internal Langfuse server, achieving <strong>100% observability with zero data egress</strong>.</p>",
                "<div class=\"callout\"><p><strong>The Operational Standard:</strong> Pair open-source models (vLLM) with open-source observability (Langfuse) to build a completely private, sovereign AI stack.</p></div>"
            ],
            "Langfuse vs Arize Phoenix", "Two premier open-source observability platforms",
            [
                {"title": "Langfuse", "lines": ["Full-stack LLM engineering platform", "Prompt management, tracing, evals, cost tracking", "Postgres-backed, production-grade Docker deployment"]},
                {"title": "Arize Phoenix", "lines": ["RAG evaluation & embedding analysis", "Native OpenInference integration", "Python notebook friendly & scalable K8s deployment"]}
            ],
            "Sovereign Private VPC Deployment", "Zero data egress observability",
            [
                {"title": "AI Backend (Private VPC)", "lines": ["Generates traces via OpenTelemetry", "Exports to internal IP: http://langfuse:3000"]},
                {"title": "Self-Hosted Langfuse", "lines": ["Stores traces in private PostgreSQL", "Zero bytes leave your corporate perimeter!"]}
            ],
            "Complete the observability stacks sentence",
            "Self-hosting open-source platforms like {1} or Arize Phoenix inside a private VPC guarantees complete data {2} while providing full tracing.",
            [
                {"answer": "Langfuse", "hint": "Leading open-source LLM engineering platform", "options": ["Langfuse", "Photoshop", "Word"]},
                {"answer": "sovereignty", "hint": "Total control over data and privacy", "options": ["sovereignty", "formatting", "licensing"]}
            ],
            [
                {"q": "What database technology powers the backend of self-hosted Langfuse?",
                 "a": ["PostgreSQL (with Prisma ORM)", "SQLite in memory only", "Microsoft Access", "Flat text files"],
                 "c": 0, "why": "Langfuse uses PostgreSQL for robust, scalable relational trace and metric storage."},
                {"q": "Can Langfuse manage and version prompt templates alongside tracing execution?",
                 "a": ["Yes; Langfuse includes a centralized Prompt Management feature allowing teams to version and edit prompts dynamically without code redeployments", "No; prompts are forbidden in Langfuse", "Only in Python 2", "Only on Saturdays"],
                 "c": 0, "why": "Langfuse provides dynamic prompt management, versioning, and A/B rollout controls."},
                {"q": "How does Arize Phoenix assist in diagnosing broken RAG retrieval?",
                 "a": ["It visualizes document embedding clusters in 3D, highlights retrieval outliers, and scores chunk relevance metrics", "It deletes all documents", "It turns off the database", "It converts text to audio"],
                 "c": 0, "why": "Phoenix specializes in embedding visualization, drift detection, and RAG retrieval diagnostics."},
                {"q": "What port does Langfuse typically expose its web UI on by default?",
                 "a": ["Port 3000 (http://localhost:3000)", "Port 80", "Port 443", "Port 22"],
                 "c": 0, "why": "Langfuse is a Next.js application that standardly serves its web UI on port 3000."}
            ],
            "You know how to deploy and operate self-hosted open-source AI observability platforms.",
            "Instrumenting a Production AI Service End-to-End", "Synthesize everything: instrument a real application with full OTel tracing."
        ),
        build_lesson(
            8, "instrumenting-production-ai-service", "Instrumenting a Production AI Service End-to-End", "Production Instrumentation",
            "Synthesizing observability: building a fully instrumented production service with tracing, cost attribution, and alerting.",
            "What is the ultimate definition of an observable AI system?",
            ["A system where engineers can inspect any customer transaction, see the complete trace tree, identify latency bottlenecks, and audit costs instantly", "A system with a lot of print statements", "A system where all code is open source", "A system that runs on paper"],
            0, "Observability means having complete visibility into internal execution, latency, and costs from external outputs.",
            [
                "<p>We have explored the full discipline of LLM Observability: moving beyond flat logs, OpenTelemetry and OpenInference semantic standards, token cost accounting, latency profiling, PII scrubbing, anomaly alerting, and open-source stacks like Langfuse.</p>",
                "<p>Now, we synthesize these into a <strong>Fully Instrumented Production Service</strong>:</p>",
                "<ul><li><strong>1. Traced Entrypoint:</strong> Every incoming HTTP request starts a root trace with `trace_id`, `user_id`, and `tenant_id`.</li><li><strong>2. Nested Spans:</strong> Every RAG retrieval, tool execution, and LLM call creates a child span with standardized attributes (`llm.model_name`, `tokens`).</li><li><strong>3. PII Sanitization:</strong> All prompt text and responses are scrubbed before export.</li><li><strong>4. Real-Time Metrics:</strong> Emits latency histograms (TTFT, total) and cost metrics to Prometheus/Datadog.</li><li><strong>5. Automated Incident Gates:</strong> Fallback invocations and schema parse errors trigger alert webhooks.</li></ul>",
                "<pre><code># The Complete Instrumented Endpoint Pattern (FastAPI + Langfuse):\n@router.post(\"/api/v1/research-agent\")\nasync def research_agent_endpoint(request: AgentRequest, user: User = Depends(get_user)):\n    # 1. Initialize root trace with metadata\n    trace = langfuse.trace(name=\"ResearchAgent\", user_id=user.id, metadata={\"tenant\": user.org_id})\n    \n    # 2. Instrument RAG span\n    with trace.span(name=\"RetrieveDocs\") as span:\n        docs = await vector_db.search(request.query)\n        span.set_attribute(\"docs_retrieved\", len(docs))\n        \n    # 3. Instrument LLM generation\n    with trace.generation(name=\"SynthesizeAnswer\", model=\"gpt-4o-mini\") as gen:\n        response = await llm_client.generate(request.query, docs)\n        gen.end(usage=response.usage, output=scrub_pii(response.text))\n        \n    return {\"answer\": response.text}</code></pre>",
                "<div class=\"callout\"><p><strong>The Final Triumph:</strong> Your AI service is no longer a scary black box. You have complete, real-time visibility into every thought, tool call, token, and dollar spent.</p></div>"
            ],
            "The Complete Instrumented Service Stack", "End-to-end telemetry from ingress to egress",
            [
                {"title": "1. Ingress Root Trace", "lines": ["Captures user_id & tenant_id", "Initializes OpenTelemetry context"]},
                {"title": "2. Nested Execution Spans", "lines": ["RAG retrieval span (latency & chunks)", "LLM generation span (tokens & cost)"]},
                {"title": "3. Telemetry Exporter", "lines": ["PII scrubbed at boundary", "Shipped to private Langfuse / Phoenix cluster"]}
            ],
            "From Black Box to Glass Box", "Engineering with total operational clarity",
            [
                {"title": "Unmonitored Black Box", "lines": ["Users complain about slowness", "Surprise $10k bills, blind debugging"]},
                {"title": "Observable Glass Box", "lines": ["Exact trace for every query", "Cost attributed to the penny, instant root-cause resolution"]}
            ],
            "Complete the production instrumentation sentence",
            "A fully instrumented AI service provides complete operational transparency by wrapping workflows in root {1} containing nested {2} for retrieval, tools, and model calls.",
            [
                {"answer": "traces", "hint": "Parent execution trees", "options": ["traces", "terminals", "keyboards"]},
                {"answer": "spans", "hint": "Individual timed execution units", "options": ["spans", "cables", "monitors"]}
            ],
            [
                {"q": "What happens when an engineer searches for a specific 'trace_id' in a dashboard like Langfuse?",
                 "a": ["They can inspect the complete execution tree, view exact prompts and outputs, examine token costs, and see latency for that single query", "The database is deleted", "The model weights update", "The query is rerun automatically"],
                 "c": 0, "why": "Trace IDs provide the unique handle to inspect the complete lifecycle of a single request."},
                {"q": "Why is separating the 'generation' span type from a generic 'span' valuable in AI observability?",
                 "a": ["Generation spans specifically record model names, token usage, temperature, and prompt/completion pairs for cost accounting", "Generation spans run faster", "Generation spans are written in C", "Generic spans cannot measure time"],
                 "c": 0, "why": "Generation spans capture domain-specific LLM parameters and token metrics."},
                {"q": "How does end-to-end tracing accelerate debugging production customer complaints?",
                 "a": ["Engineers can lookup the exact prompt and tool outputs that produced the flawed response within seconds, identifying root causes immediately", "It eliminates the need for software engineering", "It makes servers completely free", "It turns off all logging"],
                 "c": 0, "why": "Exact trace inspection eliminates guesswork, allowing engineers to see the exact input that triggered the bug."},
                {"q": "What is the ultimate mark of an enterprise-grade AI architecture?",
                 "a": ["Robust observability, transparent cost accounting, automated quality evals, and resilient fallback safety gates", "Using the largest model available regardless of cost", "Writing code without tests", "Refusing to measure latency"],
                 "c": 0, "why": "Observability, cost governance, and automated testing define enterprise operational excellence."}
            ],
            "You have completed the LLM Observability & Tracing course.",
            "Next Course: Hallucination & Reliability Engineering", "Learn how to detect, prevent, and engineer reliability against model hallucinations."
        )
    ]

    glossary = [
        {"id": "telemetry-core", "title": "Tracing & Spans", "terms": [
            {"term": "LLM Observability", "def": "The practice of collecting structured traces, spans, token metrics, and logs to understand internal AI system behavior.", "lesson": 1, "tags": ["observability", "mlops"]},
            {"term": "Trace", "def": "A hierarchical tree representing the complete end-to-end execution of a request across all services and models.", "lesson": 1, "tags": ["telemetry", "opentelemetry"]},
            {"term": "Span", "def": "A single timed unit of work (e.g. a tool call, vector query, or model generation) within a trace tree.", "lesson": 1, "tags": ["telemetry", "spans"]}
        ]},
        {"id": "standards-costs", "title": "Standards & Accounting", "terms": [
            {"term": "OpenInference", "def": "An open semantic convention standardizing OpenTelemetry attribute keys for AI models, prompts, and tokens.", "lesson": 2, "tags": ["standards", "opentelemetry"]},
            {"term": "Token Accounting", "def": "Tracking prompt and completion tokens per request and tenant to calculate exact financial operating expenses.", "lesson": 3, "tags": ["economics", "billing"]},
            {"term": "Pre-Flight Quota Gate", "def": "An authorization check verifying remaining tenant budget in Redis before dispatching an API call.", "lesson": 3, "tags": ["saas", "quotas"]}
        ]},
        {"id": "latency-privacy", "title": "Latency & Privacy", "terms": [
            {"term": "Inter-Token Latency", "def": "The elapsed duration between consecutive emitted tokens during streaming decoding.", "lesson": 4, "tags": ["latency", "metrics"]},
            {"term": "PII Scrubbing", "def": "Detecting and replacing sensitive personal identifiers with synthetic placeholders before exporting telemetry.", "lesson": 5, "tags": ["privacy", "security"]},
            {"term": "Microsoft Presidio", "def": "An open-source NLP framework providing customizable analyzer and anonymizer engines for PII redaction.", "lesson": 5, "tags": ["tools", "privacy"]}
        ]},
        {"id": "platforms", "title": "Platforms & Alerting", "terms": [
            {"term": "Langfuse", "def": "A leading open-source LLM engineering platform providing tracing, prompt management, and evaluation dashboards.", "lesson": 7, "tags": ["tools", "platforms"]},
            {"term": "Arize Phoenix", "def": "An open-source observability platform specializing in RAG evaluation, embedding drift, and OpenInference tracing.", "lesson": 7, "tags": ["tools", "rag"]},
            {"term": "Fallback Detection", "def": "Monitoring and alerting whenever execution fails over from primary models to secondary backup providers.", "lesson": 6, "tags": ["resilience", "alerting"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "OpenInference Auto-Instrumentation",
            "label": "Zero-code OpenAI tracing",
            "code": "from openinference.instrumentation.openai import OpenAIInstrumentor\n# Automatically instrument all OpenAI calls in application:\nOpenAIInstrumentor().instrument()\n# Traces now export automatically to OpenTelemetry collector!",
            "lessonN": 2, "lessonSlug": "traces-spans-opentelemetry", "lessonTitle": "Traces, Spans, and OpenTelemetry for AI (OpenInference)"
        },
        {
            "title": "Pre-Flight Budget Quota Check",
            "label": "Redis spend enforcement",
            "code": "async def check_quota(tenant_id, max_spend=100.0):\n    current = float(await redis.get(f'spend:{tenant_id}') or 0.0)\n    if current >= max_spend:\n        raise HTTPException(429, 'Monthly AI budget limit reached!')",
            "lessonN": 3, "lessonSlug": "token-accounting-cost-tracking-quotas", "lessonTitle": "Token Accounting, Cost Tracking, and Quotas"
        },
        {
            "title": "Presidio PII Redaction Pattern",
            "label": "Sanitizing telemetry before export",
            "code": "from presidio_analyzer import AnalyzerEngine\nfrom presidio_anonymizer import AnonymizerEngine\nanalyzer, anonymizer = AnalyzerEngine(), AnonymizerEngine()\ndef sanitize(text):\n    res = analyzer.analyze(text=text, language='en')\n    return anonymizer.anonymize(text=text, analyzer_results=res).text",
            "lessonN": 5, "lessonSlug": "prompt-logging-and-pii-scrubbing", "lessonTitle": "Prompt and Response Logging with PII Scrubbing"
        },
        {
            "title": "Langfuse Production Tracing",
            "label": "Manual span instrumentation",
            "code": "from langfuse import Langfuse\nlangfuse = Langfuse()\ntrace = langfuse.trace(name=\"CheckoutWorkflow\", user_id=user_id)\nwith trace.span(name=\"ProcessPayment\") as span:\n    result = execute_payment()\n    span.set_attribute(\"status\", \"success\")",
            "lessonN": 8, "lessonSlug": "instrumenting-production-ai-service", "lessonTitle": "Instrumenting a Production AI Service End-to-End"
        }
    ]

    course_data = {
        "id": "llm-observability",
        "title": "LLM Observability & Tracing",
        "num": 82,
        "emoji": "📡",
        "desc": "Traces, spans, token accounting and prompt logs — seeing what your AI system actually did.",
        "topics": ["Observability", "OpenTelemetry", "OpenInference", "Token Accounting", "Cost Tracking", "Latency Profiling", "PII Scrubbing", "Langfuse", "Phoenix"],
        "mission": "# Mission — LLM Observability & Tracing\n\nTurn the black box of production AI into a transparent glass box. Understand why traditional flat logs fail, instrument applications with OpenTelemetry and OpenInference semantic standards, track granular token economics and enforce tenant quotas, profile latency bottlenecks across TTFT and generation, scrub PII at the telemetry boundary, set anomaly alerts on error surges, deploy self-hosted Langfuse clusters, and build fully observable production AI services.",
        "notes": "# Notes — LLM Observability & Tracing\n\nYou cannot optimize what you do not measure. Track tokens, latency, and costs at the span level, and never export unscrubbed PII to telemetry dashboards.",
        "resources": "# Resources — LLM Observability & Tracing\n\n- OpenInference Semantic Conventions (openinference.io)\n- Langfuse Documentation (langfuse.com/docs)\n- OpenTelemetry Project, *Distributed Tracing Specifications*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

# ==============================================================================
# COURSE 83: hallucination-reliability (Hallucination & Reliability Engineering)
# ==============================================================================
def make_course_83():
    lessons = [
        build_lesson(
            1, "mechanics-of-hallucination", "The Mechanics of Hallucination: Why Models Confabulate", "Hallucination Mechanics",
            "The cognitive science of hallucinations: statistical plausibility, next-token continuation, and training distribution gaps.",
            "Why do Large Language Models hallucinate false facts with supreme linguistic confidence?",
            ["Models optimize for statistical plausibility in language continuations rather than factual verification against real-world truth", "Models are infected by software viruses", "Models deliberately deceive users", "Hallucination is caused by overheating hardware"],
            0, "Language models optimize for generating plausible linguistic continuations, unmoored from external truth.",
            [
                "<p>To eliminate hallucinations in production software, an engineer must first understand their root cause. A hallucination is not a bug in the traditional software sense; it is a direct consequence of how autoregressive language models function: <strong>models are fluent statistical simulators of text, not truth engines</strong>.</p>",
                "<p>Three core mechanisms drive model confabulation:</p>",
                "<ul><li><strong>1. Statistical Plausibility over Truth:</strong> The model's loss function optimizes for predicting the most probable next token in a sentence. In unfamiliar domains, a grammatically perfect lie is statistically more probable than admitting uncertainty.</li><li><strong>2. Training Distribution Gaps:</strong> When prompted about niche edge cases, proprietary company APIs, or obscure historical dates, training data is sparse. The model interpolates across nearest semantic neighbors, inventing synthetic details.</li><li><strong>3. Sycophantic Continuation:</strong> If a user prompt contains a false premise (<em>'Why did Napoleon use an iPhone in 1812?'</em>), models often play along with the premise rather than correcting the user!</li></ul>",
                "<pre><code># The Hallucination Generation Trap:\n# User Prompt: \"What is the return type of boto3.s3.create_vault()?\"\n# Fact: create_vault does not exist in S3 (it belongs to Glacier).\n# Model Hallucination: Synthesizes a plausible fake response:\n# \"boto3.s3.create_vault() returns a dict containing 'VaultArn' and 'CreationDate'.\"\n# The answer reads with 100% authority, but is 100% fiction!</code></pre>",
                "<div class=\"callout\"><p><strong>The Reliability Law:</strong> Never rely on model weights alone for ungrounded factual assertions. Treat the model as an engine that must be constrained by external facts.</p></div>"
            ],
            "The Statistical Plausibility Engine", "Plausible language vs factual reality",
            [
                {"title": "Linguistic Fluency", "lines": ["Immaculate grammar & tone", "Sounds authoritative and confident"]},
                {"title": "Factual Vacuum", "lines": ["Sparse data on specific detail", "Interpolates plausible-sounding fiction"]},
                {"title": "The Output", "lines": ["Convincing hallucination", "Fails catastrophically in production"]}
            ],
            "Sycophancy in Generation", "Following flawed user premises",
            [
                {"title": "Flawed Premise Prompt", "lines": ["'Explain why Python arrays start at index 1'"]},
                {"title": "Sycophantic Answer", "lines": ["Model agrees and invents historical reasons!", "Fails to correct the user's false premise"]}
            ],
            "Complete the hallucination mechanics sentence",
            "Hallucinations occur because language models optimize for statistical {1} in token prediction rather than verifying factual {2}.",
            [
                {"answer": "plausibility", "hint": "Believable and fluent phrasing", "options": ["plausibility", "compilation", "formatting"]},
                {"answer": "truth", "hint": "Objective empirical reality", "options": ["truth", "syntax", "hardware"]}
            ],
            [
                {"q": "What is 'Confabulation' in cognitive science and AI research?",
                 "a": ["The generation of fabricated, distorted, or misinterpreted memories about the world without the conscious intent to deceive", "A secret meeting of software engineers", "A network connection error", "A type of database index"],
                 "c": 0, "why": "Confabulation describes producing false information that the speaker or model perceives as plausible."},
                {"q": "Why is an ungrounded model prone to hallucinating citations or legal case numbers?",
                 "a": ["It has learned the structural rhythm of legal citations (Name v. Name, Volume F.3d Page) and synthesizes random plausible numbers", "It hacks into court records", "It translates text into Latin", "Court records are deleted"],
                 "c": 0, "why": "The model mimics the surface syntax of formal citations without verifying case registries."},
                {"q": "How does prompt sycophancy amplify hallucinations?",
                 "a": ["The model prioritizes pleasing the user and agreeing with their prompt assumptions over stating harsh factual truths", "It reduces GPU clock speed", "It turns off the internet", "It deletes files"],
                 "c": 0, "why": "Sycophancy leads models to validate incorrect user premises rather than pointing out errors."},
                {"q": "Can increasing model parameter size (e.g. from 7B to 70B) completely eliminate hallucinations on its own?",
                 "a": ["No; larger models know more facts, but still hallucinate when knowledge is sparse or when prompted with misleading context", "Yes; 70B models have zero hallucinations", "Only in models trained on C++", "Only on Apple hardware"],
                 "c": 0, "why": "Scaling parameter size reduces hallucinations on common facts but does not fix the underlying statistical mechanism."}
            ],
            "You understand the underlying cognitive and statistical mechanics of model hallucinations.",
            "Detecting Hallucinations: Entailment, Self-Check, and Consistency", "Detect hallucinations programmatically using NLI and consistency checks."
        ),
        build_lesson(
            2, "detecting-hallucinations-entailment-consistency", "Detecting Hallucinations: Entailment, Self-Check, and Consistency", "Detection",
            "Automated hallucination detection: Natural Language Inference (NLI), self-consistency checks, and token log-probability entropy.",
            "How does Natural Language Inference (NLI) detect hallucinations in a generated response against source context?",
            ["By checking whether each generated claim mathematically logically follows (Entailment) or contradicts the provided source documents", "By counting words in the response", "By checking if the text has vowels", "By running an SQL query"],
            0, "NLI classifies premise-hypothesis pairs into Entailment, Neutral, or Contradiction to detect ungrounded claims.",
            [
                "<p>Before you can eliminate hallucinations, you must be able to <strong>detect them automatically</strong>. You cannot have human editors review every paragraph emitted by a customer-facing bot. You need automated, programmatic hallucination detection.</p>",
                "<p>Three proven methods for automated hallucination detection:</p>",
                "<ul><li><strong>1. Natural Language Inference (NLI) / Entailment:</strong> Small specialized models (like DeBERTa-v3) evaluate each generated sentence against the retrieved source context. It outputs three probabilities: <em>Entailment</em> (proven by source), <em>Contradiction</em> (refuted by source), or <em>Neutral</em> (unsupported claim = Hallucination!).</li><li><strong>2. Self-Consistency / Sampling Agreement:</strong> Sample 5 responses to the same prompt at temperature 0.7. If the model says 'Born in 1984' in all 5 samples, confidence is high. If it outputs 5 different years across samples, it is confabulating!</li><li><strong>3. Token Log-Probability Entropy:</strong> Inspect the model's output token logprobs. When generating hallucinations, token entropy spikes—the model expresses high uncertainty during token selection.</li></ul>",
                "<pre><code># Detecting Hallucinations via NLI in Python:\nfrom transformers import pipeline\n\nnli_pipeline = pipeline(\"text-classification\", model=\"cross-encoder/nli-deberta-v3-base\")\n\ndef check_claim_grounded(source_doc, generated_claim):\n    result = nli_pipeline({\"text\": source_doc, \"text_pair\": generated_claim})\n    # Label is 'entailment', 'neutral', or 'contradiction'\n    if result[\"label\"] == \"contradiction\":\n        return \"HALLUCINATION_CONTRADICTION\"\n    if result[\"label\"] == \"neutral\":\n        return \"HALLUCINATION_UNSUPPORTED\"\n    return \"VERIFIED_GROUNDED\"</code></pre>",
                "<div class=\"callout\"><p><strong>The Detection Guardrail:</strong> Run fast NLI checks in your response pipeline. If a claim is flagged as 'neutral' or 'contradiction', block the response before it reaches the user!</p></div>"
            ],
            "Hallucination Detection Methodologies", "NLI vs Self-Consistency vs Logprob Entropy",
            [
                {"title": "Natural Language Inference (NLI)", "lines": ["Classifies claim against source document", "Entailment (True) vs Neutral (Hallucinated!)", "Fast, deterministic, zero-LLM needed"]},
                {"title": "Self-Consistency (Ensemble)", "lines": ["Samples 5 responses at T=0.7", "Measures factual agreement across samples", "Disagreement signals hallucination"]},
                {"title": "Token Entropy (Logprobs)", "lines": ["Analyzes token probability variance", "Spikes when model is guessing"]}
            ],
            "The NLI Verification Gate", "Filtering ungrounded claims in production",
            [
                {"title": "Generated Sentence", "lines": ["'The refund policy window is 30 days.'"]},
                {"title": "Source Document", "lines": ["'All sales are final after 14 days.'"]},
                {"title": "NLI Verdict", "lines": ["CONTRADICTION (Confidence: 98%)", "Response BLOCKED at gateway!"]}
            ],
            "Complete the hallucination detection sentence",
            "Natural Language Inference detects hallucinations by verifying whether generated claims are logically {1} by source context or represent unsupported {2}.",
            [
                {"answer": "entailed", "hint": "Logically proven by premise", "options": ["entailed", "formatted", "compiled"]},
                {"answer": "neutral", "hint": "Unsupported claims lacking source proof", "options": ["neutral", "positive", "negative"]}
            ],
            [
                {"q": "What does a 'Neutral' classification in an NLI hallucination check mean?",
                 "a": ["The generated statement is neither proven nor directly contradicted by the source text; it is an unsupported extrinsic hallucination", "The model has no opinion", "The text is written in neutral tone", "The check failed"],
                 "c": 0, "why": "Neutral indicates the statement contains claims not substantiated by the provided source documents."},
                {"q": "How does Self-Consistency sampling reveal that a model is hallucinating a date or number?",
                 "a": ["The model outputs inconsistent, fluctuating dates across different random sampling runs, proving it lacks factual certainty", "The model crashes on the second run", "The model deletes the date", "The text turns into numbers"],
                 "c": 0, "why": "High variance across stochastic samples is a reliable empirical indicator of confabulation."},
                {"q": "Why is using a small specialized NLI model (like DeBERTa) faster and cheaper than using GPT-4 to check hallucinations?",
                 "a": ["DeBERTa runs locally on CPU/GPU in 10ms with zero API token costs, making it viable for high-throughput gateway filtering", "DeBERTa is written in C++", "GPT-4 is forbidden from checking facts", "DeBERTa uses no memory"],
                 "c": 0, "why": "Dedicated cross-encoders provide rapid, low-cost verification at the application boundary."},
                {"q": "What are 'Token Logprobs' and how do they signal uncertainty?",
                 "a": ["Logarithms of token probabilities; high entropy (flat distribution across choices) indicates the model is uncertain and guessing", "Log files saved to disk", "Login credentials", "A type of database index"],
                 "c": 0, "why": "Flat probability distributions indicate the model lacks high confidence in its continuation."}
            ],
            "You know how to detect hallucinations using NLI entailment, self-consistency, and token entropy.",
            "Grounding by Construction: Constraining Search Spaces", "Architect systems where models cannot hallucinate by structural design."
        ),
        build_lesson(
            3, "grounding-by-construction", "Grounding by Construction: Constraining Search Spaces", "Grounding Design",
            "Eliminating hallucination vectors through architectural design: constrained search spaces, extractive selectors, and structured enums.",
            "What is 'Grounding by Construction' in software architecture?",
            ["Designing system interfaces so the model is structurally constrained to selecting from valid existing entities rather than generating raw text", "Constructing physical buildings for computers", "Grounding electrical wires in data centers", "Compiling code to machine language"],
            0, "Grounding by construction eliminates hallucinations by restricting model outputs to pre-validated choices and IDs.",
            [
                "<p>The most effective way to eliminate hallucinations is not to detect them after they happen; it is to <strong>make hallucinations structurally impossible</strong>. If you ask a model: <em>'What category does this transaction belong to?'</em> and let it emit free-form text, it will invent 50 creative new categories.</p>",
                "<p><strong>Grounding by Construction</strong> forces the model into bounded selection spaces:</p>",
                "<ul><li><strong>1. Constrained Enums (Pydantic / Zod):</strong> Never ask for a category as a raw string. Force the output into an enum: `category: Literal[\"travel\", \"meals\", \"software\"]`. The constrained decoding grammar will physically block any other word from being generated!</li><li><strong>2. Extractive Reference IDs:</strong> When an agent selects a document or entity, provide valid IDs (`[ID_1, ID_2, ID_3]`) and require the model to return the ID: `selected_id: Literal[\"ID_1\", \"ID_2\", \"ID_3\"]`. It cannot invent a nonexistent document!</li><li><strong>3. Masked Multiple-Choice Extraction:</strong> Turn open-ended generation into closed-vocabulary classification.</li></ul>",
                "<pre><code># Grounding by Construction in Pydantic:\nclass TransactionClassification(BaseModel):\n    # The model CANNOT hallucinate a category; it must choose from this exact list!\n    category: Literal[\"travel\", \"software_subscriptions\", \"office_supplies\", \"meals\"]\n    # The model must select from the exact invoice IDs provided in context!\n    matched_invoice_id: Literal[\"INV-001\", \"INV-002\", \"INV-003\", \"NONE\"]\n    confidence_score: float = Field(ge=0.0, le=1.0)</code></pre>",
                "<div class=\"callout\"><p><strong>The Architectural Triumph:</strong> When your output schemas enforce Literals and pre-validated IDs, the hallucination rate on entity references drops to <strong>EXACTLY ZERO PERCENT</strong>.</p></div>"
            ],
            "Free Generation vs Grounding by Construction", "Eliminating hallucination surfaces",
            [
                {"title": "Free Generation (Vulnerable)", "lines": ["category: str", "Model invents: 'work_lunch_snack'", "Downstream database crashes on invalid key"]},
                {"title": "Grounding by Construction", "lines": ["category: Literal['meals', 'travel']", "Grammar enforces approved enum", "Zero invalid values, 100% reliable"]}
            ],
            "ID-Based Selection Pattern", "Constraining entity matching",
            [
                {"title": "Provided Options", "lines": ["Context presents: [DOC_1, DOC_2, DOC_3]", "Explicit reference identifiers"]},
                {"title": "Constrained Model Response", "lines": ["selected_doc: Literal['DOC_1', 'DOC_2']", "Impossible to invent fake documents!"]}
            ],
            "Complete the grounding design sentence",
            "Grounding by construction eliminates hallucinations by replacing open-ended generation with constrained {1} and pre-validated reference {2}.",
            [
                {"answer": "enums", "hint": "Fixed categorical Literal choices", "options": ["enums", "terminals", "cables"]},
                {"answer": "IDs", "hint": "Specific reference identifiers like DOC_1", "options": ["IDs", "fonts", "licenses"]}
            ],
            [
                {"q": "Why does using Pydantic's Literal['A', 'B', 'C'] eliminate hallucinations for categorical attributes?",
                 "a": ["Constrained decoding masks out all vocabulary tokens that do not match the exact strings 'A', 'B', or 'C'", "It speeds up Python", "It deletes the other options", "It runs without a CPU"],
                 "c": 0, "why": "Grammar constraints enforce that only the specified literal tokens can be sampled."},
                {"q": "How can you prevent a customer support bot from inventing fake refund policy numbers?",
                 "a": ["Provide candidate policies as numbered options and instruct the model to select the matching policy ID rather than reciting policy numbers", "Ask the bot to be honest", "Tell the bot not to lie", "Turn off temperature"],
                 "c": 0, "why": "Constraining the model to select pre-verified policy IDs eliminates fabricated policy numbers."},
                {"q": "What is an 'Extractive Selector' pattern in RAG?",
                 "a": ["An architecture where the model selects the exact substring index or document ID from provided context rather than generating text from scratch", "A tool for mining gold", "A database query optimizer", "An image extraction tool"],
                 "c": 0, "why": "Extractive selection binds answers directly to verbatim spans in source documents."},
                {"q": "Can grounding by construction be applied to numerical calculations?",
                 "a": ["Yes; require the model to emit function calls to a Python calculator tool rather than generating calculated numbers directly", "No; math cannot be constrained", "Only on Linux", "Only if numbers are under 10"],
                 "c": 0, "why": "Delegating calculations to tools guarantees exact deterministic math without hallucinations."}
            ],
            "You know how to design architectures that make hallucinations structurally impossible.",
            "Fact-Checking Loops and Verifier Models", "Use secondary verifier models to cross-examine and audit claims."
        ),
        build_lesson(
            4, "fact-checking-loops-verifier-models", "Fact-Checking Loops and Verifier Models", "Verifier Models",
            "The generator-verifier architecture: using secondary critic models to audit, verify, and filter generated statements.",
            "What is the 'Generator-Verifier' pattern in reliable AI systems?",
            ["A primary model generates a draft answer, and a secondary specialized verifier model audits each claim against ground truth before delivery", "Two models generating text at the same time", "A generator that makes electricity for servers", "A tool for compiling C code"],
            0, "The generator-verifier architecture decouples creative text generation from independent factual verification.",
            [
                "<p>In publishing, writers do not publish their own work without an editor. Similarly, in high-reliability AI systems, <strong>the model that writes the text should not be the sole judge of its factual accuracy</strong>.</p>",
                "<p>The <strong>Generator-Verifier Pattern</strong> creates a rigorous editorial pipeline:</p>",
                "<ul><li><strong>Stage 1 (The Generator):</strong> A creative, fluent model (e.g. GPT-4o) drafts a complete, helpful answer based on prompt and context.</li><li><strong>Stage 2 (Claim Extraction):</strong> An automated parser breaks the draft answer into discrete atomic factual claims: `[\"Claim 1: Product has 2-year warranty\", \"Claim 2: Battery lasts 14 hours\"]`.</li><li><strong>3. Stage 3 (The Verifier):</strong> A secondary, strictly skeptical model audits each individual claim against source documents: <em>'Does Document A explicitly support Claim 2?'</em></li><li><strong>Stage 4 (Repair or Redact):</strong> If Claim 2 is unverified or false, the verifier redacts it or loops back to the generator with an explicit correction!</li></ul>",
                "<pre><code># The Generator-Verifier Workflow in Python:\n# 1. Primary Model drafts answer\ndraft_answer = generator_model.generate(query, context)\n\n# 2. Extract atomic claims\nclaims = extract_atomic_claims(draft_answer)\n\n# 3. Verifier audits claims\nunsupported_claims = []\nfor claim in claims:\n    if not verifier_model.verify(context, claim):\n        unsupported_claims.append(claim)\n\n# 4. If any claim is unsupported, trigger automated repair!\nif unsupported_claims:\n    final_answer = generator_model.repair(draft_answer, unsupported_claims, context)</code></pre>",
                "<div class=\"callout\"><p><strong>The Editorial Separation:</strong> Decoupling generation from verification slashes factual error rates by up to 80% on complex legal and medical tasks.</p></div>"
            ],
            "The Generator-Verifier Pipeline", "Decoupling generation from independent fact-checking",
            [
                {"title": "1. Generator Model (Creative)", "lines": ["Drafts complete, helpful answer", "Focuses on synthesis & user tone"]},
                {"title": "2. Claim Extraction", "lines": ["Decomposes draft into atomic claims", "Claim 1, Claim 2, Claim 3..."]},
                {"title": "3. Verifier Model (Skeptical)", "lines": ["Audits each claim against source docs", "Passes verified, flags ungrounded"]},
                {"title": "4. Repair Gate", "lines": ["Redacts or repairs unsupported claims", "Delivers 100% verified response"]}
            ],
            "Why Self-Correction Alone Often Fails", "The blind spot of single-model editing",
            [
                {"title": "Single Model Checking Itself", "lines": ["Has confirmation bias for own words", "Often insists hallucinated fact is true"]},
                {"title": "Independent Verifier", "lines": ["Approaches text with zero author bias", "Catches subtle confabulations reliably"]}
            ],
            "Complete the verifier models sentence",
            "The generator-verifier architecture decomposes drafted answers into atomic claims and uses an independent {1} model to audit them against source {2}.",
            [
                {"answer": "verifier", "hint": "Skeptical fact-checking critic model", "options": ["verifier", "terminal", "hardware"]},
                {"answer": "documents", "hint": "Authoritative ground-truth context", "options": ["documents", "cables", "keyboards"]}
            ],
            [
                {"q": "Why is an independent verifier model more effective at catching errors than asking the generator model 'Did you make any mistakes?'",
                 "a": ["Language models exhibit confirmation bias when reviewing their own generated text, while a fresh verifier evaluates claims without author bias", "Verifier models run on quantum computers", "Generator models cannot read their own text", "It is required by Python syntax"],
                 "c": 0, "why": "Independent verifiers evaluate statements objectively without authorial confirmation bias."},
                {"q": "What is an 'Atomic Claim' in fact-checking pipelines?",
                 "a": ["A single, isolated factual proposition that can be independently verified as True or False (e.g. 'The warranty is 2 years')", "A nuclear physics formula", "A claim with an atomic number", "A broken string in Python"],
                 "c": 0, "why": "Decomposing answers into atomic propositions allows granular verification of individual facts."},
                {"q": "What should the verifier pipeline do if a claim is directly contradicted by source documentation?",
                 "a": ["Strip the false claim immediately or trigger an automated repair prompt to regenerate that specific sentence", "Post the error to social media", "Delete the source document", "Shut down the server"],
                 "c": 0, "why": "Contradicted statements must be stripped or repaired before reaching the end user."},
                {"q": "How does using a smaller, specialized NLI model as the verifier keep latency low?",
                 "a": ["A 200MB cross-encoder verifies atomic claims in 10-20ms, adding minimal overhead to the overall user request", "It bypasses the internet", "It deletes the prompt", "It compiles Python to assembly"],
                 "c": 0, "why": "Specialized verification models execute in milliseconds, preserving fast response times."}
            ],
            "You know how to implement generator-verifier fact-checking pipelines.",
            "Uncertainty Estimation and Confidence Scoring", "Quantify model confidence and flag uncertain answers."
        ),
        build_lesson(
            5, "uncertainty-estimation-confidence-scoring", "Uncertainty Estimation and Confidence Scoring", "Uncertainty",
            "Quantifying doubt: token log-probability entropy, verbalized confidence, semantic entropy, and conformal prediction.",
            "Why is asking an LLM 'How confident are you on a scale of 1-10?' often an unreliable measure of factual accuracy?",
            ["Models are trained to sound polite and authoritative, frequently verbalizing '10/10 confidence' even when completely hallucinating", "Models cannot count to 10", "Confidence is illegal in statistics", "Models only understand percentages"],
            0, "Verbalized confidence is poorly calibrated; models frequently express high verbal confidence on false statements.",
            [
                "<p>In traditional statistics, models output explicit confidence bounds (e.g. $p < 0.05$). In generative AI, however, asking a model how confident it feels produces <strong>sycophantic overconfidence</strong>. An agent will declare: <em>'I am 100% certain that Abraham Lincoln invented the microwave in 1863.'</em></p>",
                "<p>To estimate true mathematical uncertainty, AI engineers use <strong>Empirical Confidence Scoring</strong>:</p>",
                "<ul><li><strong>1. Average Token Log-Probability:</strong> Inspect the model's output logprobs: $\\frac{1}{N} \\sum \\log P(w_t)$. Low average log-probability indicates the model was statistically uncertain during generation.</li><li><strong>2. Semantic Entropy (Kuhn et al., 2023):</strong> Sample 5 responses at temperature 0.7. Group responses into semantic meaning clusters. If all 5 samples mean the exact same thing, entropy is near zero (High Confidence!). If samples diverge into multiple contradictory meanings, entropy is high (Doubt!).</li><li><strong>3. Conformal Prediction:</strong> A statistical framework that guarantees with $1 - \\alpha$ certainty that the true answer lies within a predicted set of candidates.</li></ul>",
                "<pre><code># Semantic Entropy Calculation Flow:\nPrompt: \"Who won the 1928 World Series?\"\nSample 1: \"New York Yankees\"  (Cluster A)\nSample 2: \"The Yankees\"        (Cluster A - Semantically identical)\nSample 3: \"St. Louis Cardinals\"(Cluster B - Divergence!)\nSample 4: \"New York Yankees\"  (Cluster A)\n# Entropy calculation reveals uncertainty between Cluster A and Cluster B!\n# Action: Confidence score drops below threshold -> Route to human review!</code></pre>",
                "<div class=\"callout\"><p><strong>The Operational Threshold:</strong> Compute semantic entropy on high-risk responses. If entropy is high, flag the response with a disclaimer or route it to a human supervisor.</p></div>"
            ],
            "Uncertainty Estimation Methods", "Token logprobs vs Semantic Entropy",
            [
                {"title": "Token Logprob Average", "lines": ["Fast, single-turn calculation", "Measures syntactic token confidence", "Can be distorted by common filler words"]},
                {"title": "Semantic Entropy (Sampling)", "lines": ["Clusters meanings across 5 samples", "Measures true semantic divergence", "Highly predictive of factual correctness"]}
            ],
            "Confidence Routing Gate", "Automated escalation based on entropy",
            [
                {"title": "Low Entropy (< 0.15)", "lines": ["High consensus across samples", "Delivered directly to user"]},
                {"title": "High Entropy (> 0.50)", "lines": ["Contradictory candidate answers", "Routed to human review queue"]}
            ],
            "Complete the uncertainty estimation sentence",
            "Semantic entropy measures true model uncertainty by sampling multiple answers and calculating the divergence of {1} meaning across the {2}.",
            [
                {"answer": "semantic", "hint": "Conceptual meaning rather than surface words", "options": ["semantic", "font", "license"]},
                {"answer": "samples", "hint": "Independently generated candidate outputs", "options": ["samples", "terminals", "keyboards"]}
            ],
            [
                {"q": "What is the primary difference between syntactic token entropy and semantic entropy?",
                 "a": ["Syntactic entropy measures variance in surface word choices; semantic entropy measures whether the underlying factual meaning differs", "Syntactic entropy uses Python; semantic uses C", "Semantic entropy measures file size", "There is no difference"],
                 "c": 0, "why": "Semantic entropy clusters paraphrased sentences, focusing strictly on whether facts agree."},
                {"q": "Why is token log-probability sometimes misleading when measuring factual confidence?",
                 "a": ["A model might be 100% confident in the grammatical filler words ('The', 'is', 'a') while being uncertain on the specific factual noun", "Logprobs are deleted by the API", "Logprobs are always positive numbers", "Logprobs require GPU overclocking"],
                 "c": 0, "why": "Common connective tokens have high logprobs, artificially inflating the average score."},
                {"q": "What is 'Model Calibration' in probability theory?",
                 "a": ["The property where a model's assigned confidence score matches its real-world empirical accuracy (e.g. predictions with 80% confidence are correct 80% of the time)", "Tuning the monitor colors", "Measuring the weight of the computer", "Formatting Python files"],
                 "c": 0, "why": "A calibrated model's predicted probabilities accurately reflect actual empirical success rates."},
                {"q": "How does Conformal Prediction protect enterprise decision-making with AI?",
                 "a": ["It provides mathematically rigorous, statistically proven coverage guarantees on prediction intervals without model retraining", "It makes models run without electricity", "It eliminates the need for data", "It turns off the internet"],
                 "c": 0, "why": "Conformal prediction guarantees that correct answers fall within prediction sets at specified confidence levels."}
            ],
            "You know how to estimate model uncertainty and calculate empirical confidence scores.",
            "Defensive Prompt Design for Truthfulness", "Harness prompt patterns that maximize honesty and minimize confabulation."
        ),
        build_lesson(
            6, "defensive-prompt-design-truthfulness", "Defensive Prompt Design for Truthfulness", "Defensive Prompting",
            "Prompt engineering for truthfulness: uncertainty permission, chain-of-thought grounding, and quotes-only extraction.",
            "What simple prompt instruction dramatically reduces hallucinations when a model is asked about unfamiliar topics?",
            ["'If you are uncertain or the information is not provided in context, reply: I do not know. Do NOT speculate.'", "'Always guess if you are unsure'", "'Be as creative as possible'", "'Answer in all capital letters'"],
            0, "Giving models explicit permission to say 'I don't know' overrides their training bias toward forced completion.",
            [
                "<p>Language models are trained on internet forums and human dialogue where saying <em>'I don't know'</em> is rare. Left unprompted, an LLM will treat every question as a command to generate an answer. To engineer reliability, your prompt templates must actively <strong>incentivize honesty and penalize speculation</strong>.</p>",
                "<p>Three battle-tested Defensive Prompt Patterns for Truthfulness:</p>",
                "<ul><li><strong>1. Explicit Permission to be Uncertain:</strong> <em>'It is completely acceptable to state that you do not know. If the provided documents do not contain the answer, reply: \"Information not found.\" Never guess.'</em></li><li><strong>2. Quotes-First Extraction:</strong> Before answering, require the model to extract verbatim quotes from the source document: <em>'Step 1: Extract verbatim quotes that answer the question. Step 2: Formulate your answer based ONLY on those exact quotes.'</em></li><li><strong>3. Challenge-Resistant System Prompts:</strong> Explicitly instruct the model to resist user presuppositions: <em>'If the user prompt contains a false premise (e.g. \"Why is the moon made of green cheese?\"), politely correct the premise.'</em></li></ul>",
                "<pre><code># The Quotes-First Defensive Prompt Pattern:\n\"You are a compliance auditing assistant.\nTask: Answer the user's question about the contract.\n\nInstructions:\n1. First, search the <contract> and output: <quotes> exact verbatim text spans </quotes>.\n2. If no matching quotes exist, output: <result> Not addressed in contract </result>.\n3. Only if quotes exist, synthesize your answer: <result> ... </result> based strictly on those quotes.\"</code></pre>",
                "<div class=\"callout\"><p><strong>The Verbatim Shield:</strong> Requiring the model to output exact quotes first grounds its attention in source tokens, eliminating 90% of extractive hallucinations.</p></div>"
            ],
            "Defensive Prompt Patterns", "Prompt architecture that enforces factual honesty",
            [
                {"title": "Uncertainty Authorization", "lines": ["Explicit permission to say 'I don't know'", "Overrides completion pressure"]},
                {"title": "Quotes-First Extraction", "lines": ["Step 1: Extract verbatim quotes from source", "Step 2: Synthesize answer based ONLY on quotes"]},
                {"title": "Premise Challenge", "lines": ["Checks user prompt for false assumptions", "Corrects false premises before answering"]}
            ],
            "Quotes-First Verification Seam", "Anchoring tokens to verbatim spans",
            [
                {"title": "<quotes> Exact Text </quotes>", "lines": ["Forces attention directly onto source tokens", "Mathematically anchors subsequent synthesis"]},
                {"title": "<result> Grounded Answer </result>", "lines": ["Synthesized strictly from extracted quotes", "Zero room for speculative drift"]}
            ],
            "Complete the defensive prompt sentence",
            "Defensive prompt engineering enforces truthfulness by granting explicit permission to express {1} and requiring verbatim {2} extraction.",
            [
                {"answer": "uncertainty", "hint": "Admitting lack of knowledge", "options": ["uncertainty", "formatting", "licensing"]},
                {"answer": "quote", "hint": "Exact text span from source documents", "options": ["quote", "hardware", "terminal"]}
            ],
            [
                {"q": "Why does requiring a model to extract verbatim quotes before answering reduce hallucinations?",
                 "a": ["It forces the model's self-attention to align with actual text tokens in the context, conditioning the subsequent answer on real evidence", "It makes the prompt shorter", "Quotes are encrypted", "Quotes run on faster GPUs"],
                 "c": 0, "why": "Emitting verbatim quotes first anchors the attention state directly to factual source tokens."},
                {"q": "What happens if a prompt contains the instruction 'Never say I don't know'?",
                 "a": ["The model is forced to hallucinate plausible-sounding answers whenever information is missing", "The model becomes 100% accurate", "The model shuts down", "The server runs faster"],
                 "c": 0, "why": "Forbidding admissions of uncertainty guarantees that missing knowledge will be filled with hallucinations."},
                {"q": "How should a prompt instruct a model to handle conflicting facts between two provided source documents?",
                 "a": ["Explicitly state that Document A and Document B contradict each other, cite both perspectives, and decline to declare one as truth", "Pick the longer document", "Pick Document A always", "Delete both documents"],
                 "c": 0, "why": "Transparently noting source contradictions provides accurate, auditable guidance without bias."},
                {"q": "Why is 'Answer in 2 sentences' a helpful defensive constraint for factual retrieval?",
                 "a": ["It prevents the model from generating long rambling paragraphs where hallucinations and ungrounded claims typically hide", "It reduces GPU temperature", "It is required by Python syntax", "It saves internet bandwidth"],
                 "c": 0, "why": "Concise answers limit surface area, eliminating verbose filler where hallucinations thrive."}
            ],
            "You know how to design defensive prompts that enforce truthfulness and eliminate speculation.",
            "Human Verification Workflows for High-Risk Domains", "Integrate human-in-the-loop review for legal, medical, and financial AI."
        ),
        build_lesson(
            7, "human-verification-high-risk-domains", "Human Verification Workflows for High-Risk Domains", "Human Review",
            "Designing human review interfaces: claim highlighting, source diff views, and escalation workflows for high-consequence domains.",
            "Why is 'Full Automation' an irresponsible goal for AI in high-risk legal, medical, or financial workflows?",
            ["The legal and ethical liability of a single undetected hallucination can cause catastrophic human or financial harm", "AI models refuse to work on high-risk domains", "Computers cannot process legal words", "Human verification is free"],
            0, "High-stakes failure consequences require human experts to verify evidence before decisions are finalized.",
            [
                "<p>In high-risk domains—such as reviewing clinical patient trials, approving $10M corporate acquisitions, or drafting court pleadings—the goal of AI is not full autonomy. The goal is <strong>Intelligence Amplification with Mandatory Human Verification</strong>.</p>",
                "<p>Designing <strong>Human Verification Workflows</strong> for high-consequence systems:</p>",
                "<ul><li><strong>1. Side-by-Side Verification UI:</strong> The generated answer is presented alongside the exact source document, with supporting passages highlighted in matching colors.</li><li><strong>2. Claim-Level Confidence Highlighting:</strong> Sentences where model token entropy was high or NLI entailment was weak are highlighted in yellow or red, directing human attention immediately to potential risks!</li><li><strong>3. One-Click Evidence Inspection:</strong> Clicking any sentence in the AI output instantly scrolls the source PDF to the exact highlighted paragraph.</li><li><strong>4. Accountable Human Sign-Off:</strong> The final action (approving the loan, sending the brief) is taken by a licensed human professional whose identity is recorded in the audit log.</li></ul>",
                "<pre><code># High-Risk Audit Schema with Human Sign-Off (SQL):\nCREATE TABLE medical_summaries (\n    id UUID PRIMARY KEY,\n    patient_id UUID NOT NULL,\n    generated_summary TEXT NOT NULL,\n    unverified_claim_count INT DEFAULT 0,\n    reviewed_by_physician_id UUID, -- Mandatory human doctor ID!\n    physician_approved_at TIMESTAMPTZ, -- Timestamp of human verification!\n    status VARCHAR(20) DEFAULT 'PENDING_PHYSICIAN_REVIEW'\n);</code></pre>",
                "<div class=\"callout\"><p><strong>The UX Rule of Verification:</strong> Don't make the human search for the source. Bring the source to the human's eyes with one click, highlighting the exact evidence.</p></div>"
            ],
            "Side-by-Side Verification UI", "Bringing source evidence directly to the human reviewer",
            [
                {"title": "Left Panel: AI Synthesis", "lines": ["'Patient has history of asthma [Doc 1].'", "Clicking badge highlights source in right panel"]},
                {"title": "Right Panel: Source Medical Record", "lines": ["Original hospital discharge PDF", "Exact paragraph highlighted in yellow"]}
            ],
            "Confidence-Guided Review", "Directing human attention to risk zones",
            [
                {"title": "Green Highlights", "lines": ["100% NLI Entailment score", "Verifiable fact, low review priority"]},
                {"title": "Amber / Red Highlights", "lines": ["Low token logprob or neutral NLI", "High risk -> Doctor inspects immediately!"]}
            ],
            "Complete the human review sentence",
            "In high-risk domains, verification workflows use claim-level confidence highlighting and side-by-side source {1} to enable accountable human {2}.",
            [
                {"answer": "evidence", "hint": "Supporting passages and documents", "options": ["evidence", "formatting", "licensing"]},
                {"answer": "sign-off", "hint": "Mandatory expert approval", "options": ["sign-off", "compilation", "hardware"]}
            ],
            [
                {"q": "What is the primary purpose of highlighting low-confidence sentences in an AI-assisted review UI?",
                 "a": ["It directs the human expert's limited cognitive attention immediately to the specific claims carrying the highest risk of hallucination", "It makes the UI look colorful", "It turns off the text editor", "It deletes the sentences"],
                 "c": 0, "why": "Attention-guided highlighting focuses expert scrutiny on potential factual errors."},
                {"q": "Why must the database schema for high-risk AI workflows store the reviewer_id and approval_timestamp?",
                 "a": ["To establish an immutable audit trail proving that an authorized human verified the information before it was acted upon", "To calculate employee salaries", "To save hard drive space", "It is required by git"],
                 "c": 0, "why": "Audit trails provide legal and regulatory accountability in compliance environments."},
                {"q": "How does a side-by-side evidence viewer reduce verification fatigue for human doctors or lawyers?",
                 "a": ["It eliminates the need to manually search through a 100-page document by automatically scrolling to the exact supporting paragraph", "It reads the text out loud", "It translates text into French", "It makes documents shorter"],
                 "c": 0, "why": "Instant visual navigation saves time and minimizes the friction of checking source evidence."},
                {"q": "What role does the AI play in a well-designed human verification workflow?",
                 "a": ["A tireless research assistant that reads, indexes, synthesizes, and presents cross-referenced evidence for human judgment", "The final decision-maker", "An autonomous judge", "A replacement for human workers"],
                 "c": 0, "why": "AI amplifies human expertise by organizing and cross-referencing vast information for human review."}
            ],
            "You know how to design human verification interfaces and audit workflows for high-risk domains.",
            "Engineering Reliability into Mission-Critical AI", "Synthesize reliability engineering: defense in depth against hallucinations."
        ),
        build_lesson(
            8, "engineering-mission-critical-reliability", "Engineering Reliability into Mission-Critical AI", "Reliability Engineering",
            "Synthesizing reliability engineering: multi-layered defense against hallucinations, automated verifiers, and production fail-safes.",
            "What is 'Defense in Depth' when engineering reliability in production AI systems?",
            ["Layering multiple independent safeguards (grounded prompts, constrained schemas, NLI verifiers, and human approval gates) so no single failure causes an outage", "Running three different operating systems", "Putting computers inside thick steel walls", "Writing code in assembly language"],
            0, "Defense in depth ensures that if one layer fails (e.g. prompt slip), secondary layers (schemas, verifiers) catch the error.",
            [
                "<p>No single technique will make an LLM 100% reliable. The secret to mission-critical AI engineering is <strong>Defense in Depth</strong>: designing a multi-layered system where each layer catches the failure modes of the previous layer.</p>",
                "<p>The Five-Layer Reliability Architecture:</p>",
                "<ul><li><strong>Layer 1 (Data & Grounding):</strong> Authoritative RAG retrieval and clean chunking provide verified facts in context.</li><li><strong>Layer 2 (Defensive Prompting):</strong> Quotes-first extraction, non-goals, and explicit permission to say 'I don't know'.</li><li><strong>Layer 3 (Constrained Decoding):</strong> Pydantic v2 schemas and Literal enums make invalid keys and syntax errors structurally impossible.</li><li><strong>Layer 4 (Automated Verifiers):</strong> Lightweight NLI cross-encoders audit extracted claims against source text, blocking ungrounded answers.</li><li><strong>Layer 5 (Human Confirmation):</strong> High-consequence actions (billing, health, data deletion) pause at mandatory human authorization gates.</li></ul>",
                "<pre><code># The 5-Layer Reliability Pipeline:\n[User Input] \n  -> [Layer 1: RAG Retrieval (Top Chunks)]\n  -> [Layer 2: Grounded System Prompt (Quotes-First)]\n  -> [Layer 3: Pydantic Constrained Generation (100% Schema Valid)]\n  -> [Layer 4: NLI Entailment Verifier (Blocks Contradictions)]\n  -> [Layer 5: Human Confirmation Gate (If High Consequence)]\n  -> [Grounded, Reliable Delivery to User!]</code></pre>",
                "<div class=\"callout\"><p><strong>The Final Truth:</strong> Models will always have probabilistic variance. But by wrapping them in multi-layered engineering defenses, you build systems that achieve five-nines (99.999%) operational reliability.</p></div>"
            ],
            "The 5-Layer Reliability Architecture", "Multi-layered defense in depth against hallucinations",
            [
                {"title": "Layer 1: RAG Grounding", "lines": ["Retrieves authoritative source documents", "Anchors reasoning in verified facts"]},
                {"title": "Layer 2: Defensive Prompting", "lines": ["Quotes-first, explicit non-goals", "Permission to say 'I don't know'"]},
                {"title": "Layer 3: Constrained Decoding", "lines": ["Pydantic schemas with extra='forbid'", "Grammar eliminates structural errors"]},
                {"title": "Layer 4: NLI Verifier", "lines": ["Cross-encoder checks claim entailment", "Blocks unsupported statements"]},
                {"title": "Layer 5: Human Gate", "lines": ["Mandatory review on critical paths", "Zero unverified high-consequence actions"]}
            ],
            "Reliability Multiplication", "Compounding safety across layers",
            [
                {"title": "Layer 1 Error Rate: 10%", "lines": ["Model might hallucinate on 10% of queries"]},
                {"title": "After Layer 3 (Schemas): 2%", "lines": ["Structural errors completely eliminated"]},
                {"title": "After Layer 4 (NLI): 0.1%", "lines": ["Unsupported claims blocked at gateway"]},
                {"title": "With Layer 5 (Human Gate)", "lines": ["Mission-critical reliability achieved!"]}
            ],
            "Complete the reliability engineering sentence",
            "Defense in depth achieves mission-critical reliability by layering RAG grounding, constrained decoding, NLI verifiers, and human {1} into a cohesive {2} pipeline.",
            [
                {"answer": "gates", "hint": "Approval checkpoints", "options": ["gates", "cables", "monitors"]},
                {"answer": "verification", "hint": "Multi-tier quality assurance", "options": ["verification", "formatting", "licensing"]}
            ],
            [
                {"q": "What happens if a prompt slip allows a model to hallucinate a fake category, but Layer 3 (Constrained Decoding) is active?",
                 "a": ["The constrained decoding grammar blocks the hallucinated category at the logit level, forcing the model to select a valid enum", "The computer restarts", "The database is deleted", "The code turns into HTML"],
                 "c": 0, "why": "Constrained decoding acts as a structural backstop, preventing the generation of invalid enum values."},
                {"q": "Why is relying on a single prompt instruction like 'Do not lie' insufficient for enterprise reliability?",
                 "a": ["Prompts are probabilistic; without structural schemas, verifiers, and retrieval grounding, models will inevitably confabulate", "Prompts use too many tokens", "Prompts cannot be saved", "Prompts only work in English"],
                 "c": 0, "why": "Single prompt instructions lack the structural and verification guarantees of multi-layered architectures."},
                {"q": "What is the primary benefit of the 5-layer reliability architecture for business stakeholders?",
                 "a": ["It allows enterprises to deploy AI into high-consequence domains with quantifiable safety, auditability, and legal compliance", "It makes AI software free", "It eliminates the need for software developers", "It turns off all computer monitors"],
                 "c": 0, "why": "Multi-layered defense transforms probabilistic models into dependable enterprise business assets."},
                {"q": "What is the ultimate role of an AI reliability engineer?",
                 "a": ["Architecting systems where the strengths of probabilistic reasoning are maximized while the failure modes are systematically trapped and neutralized", "Typing code as fast as possible", "Memorizing Python documentation", "Buying graphics cards"],
                 "c": 0, "why": "Reliability engineers design the protective architectures that make probabilistic systems robust and trustworthy."}
            ],
            "You have completed the Hallucination & Reliability Engineering course.",
            "Next Course: RAG Evaluation", "Explore how to scientifically evaluate RAG pipelines: context recall, precision, faithfulness, and answer relevance."
        )
    ]

    glossary = [
        {"id": "mechanics", "title": "Mechanics & Verification", "terms": [
            {"term": "Hallucination", "def": "The generation of plausible-sounding but factually false, unverified statements by a language model.", "lesson": 1, "tags": ["hallucination", "safety"]},
            {"term": "Confabulation", "def": "Generating fabricated or distorted memories and facts without conscious intent to deceive.", "lesson": 1, "tags": ["theory", "psychology"]},
            {"term": "Natural Language Inference", "def": "An NLP classification task determining whether a hypothesis is Entailed, Contradicted, or Neutral relative to a premise.", "lesson": 2, "tags": ["nli", "verification"]}
        ]},
        {"id": "methods", "title": "Methods & Architecture", "terms": [
            {"term": "Grounding by Construction", "def": "Designing schemas and interfaces (Literals, IDs) so hallucinations are structurally impossible by grammar design.", "lesson": 3, "tags": ["architecture", "schemas"]},
            {"term": "Generator-Verifier", "def": "An architectural pattern where a primary model drafts text and an independent critic model audits factual claims.", "lesson": 4, "tags": ["patterns", "verification"]},
            {"term": "Semantic Entropy", "def": "A confidence metric calculating meaning divergence across multiple stochastic temperature samples.", "lesson": 5, "tags": ["metrics", "uncertainty"]}
        ]},
        {"id": "prompts", "title": "Defensive Prompting", "terms": [
            {"term": "Quotes-First Extraction", "def": "Requiring a model to extract verbatim source quotes before synthesizing an answer to anchor attention.", "lesson": 6, "tags": ["prompting", "grounding"]},
            {"term": "Uncertainty Permission", "def": "Explicit prompt instructions authorizing the model to reply 'I do not know' when facts are absent.", "lesson": 6, "tags": ["prompting", "truthfulness"]},
            {"term": "Premise Challenge", "def": "Instructing a model to detect and correct false user presuppositions rather than sycophantically agreeing.", "lesson": 6, "tags": ["prompting", "sycophancy"]}
        ]},
        {"id": "governance", "title": "Governance & Defense", "terms": [
            {"term": "Defense in Depth", "def": "Layering multiple independent safeguards (RAG, schemas, NLI, human gates) so single failures are trapped.", "lesson": 8, "tags": ["security", "architecture"]},
            {"term": "Audit Trail", "def": "An immutable record storing reviewer identity, timestamps, and source evidence for compliance verification.", "lesson": 7, "tags": ["compliance", "governance"]},
            {"term": "Conformal Prediction", "def": "A statistical framework providing mathematically proven confidence intervals on model prediction sets.", "lesson": 5, "tags": ["statistics", "safety"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "NLI Hallucination Verification Pattern",
            "label": "DeBERTa entailment check",
            "code": "from transformers import pipeline\nnli = pipeline(\"text-classification\", model=\"cross-encoder/nli-deberta-v3-base\")\n# Check if source text entails the generated claim:\nres = nli({\"text\": source_doc, \"text_pair\": generated_claim})\nif res['label'] == 'contradiction': raise HallucinationError('Contradicted!')\nif res['label'] == 'neutral': raise HallucinationError('Unsupported claim!')",
            "lessonN": 2, "lessonSlug": "detecting-hallucinations-entailment-consistency", "lessonTitle": "Detecting Hallucinations: Entailment, Self-Check, and Consistency"
        },
        {
            "title": "Grounding by Construction Schema",
            "label": "Zero-hallucination Literal enums",
            "code": "from typing import Literal\nfrom pydantic import BaseModel\n\nclass BoundedSelection(BaseModel):\n    # Model is grammatically blocked from inventing fake IDs:\n    selected_id: Literal[\"DOC_1\", \"DOC_2\", \"DOC_3\", \"NONE\"]\n    category: Literal[\"billing\", \"technical\", \"compliance\"]",
            "lessonN": 3, "lessonSlug": "grounding-by-construction", "lessonTitle": "Grounding by Construction: Constraining Search Spaces"
        },
        {
            "title": "Quotes-First Defensive Prompt",
            "label": "Anchoring attention in verbatim text",
            "code": "prompt = f\"\"\"Answer the question using the <document> below.\nStep 1: Extract verbatim quotes that answer the question into <quotes>...</quotes>.\nStep 2: If no quotes exist, reply: 'Information not found.'\nStep 3: Synthesize your answer strictly from those quotes.\n\n<document>\n{context_text}\n</document>\n\"\"\"",
            "lessonN": 6, "lessonSlug": "defensive-prompt-design-truthfulness", "lessonTitle": "Defensive Prompt Design for Truthfulness"
        },
        {
            "title": "High-Risk Audit Table Schema",
            "label": "Human verification tracking",
            "code": "CREATE TABLE medical_reports (\n    id UUID PRIMARY KEY,\n    generated_text TEXT NOT NULL,\n    unverified_claims INT DEFAULT 0,\n    physician_id UUID REFERENCES doctors(id),\n    approved_at TIMESTAMPTZ,\n    status VARCHAR(20) DEFAULT 'PENDING_APPROVAL'\n);",
            "lessonN": 7, "lessonSlug": "human-verification-high-risk-domains", "lessonTitle": "Human Verification Workflows for High-Risk Domains"
        }
    ]

    course_data = {
        "id": "hallucination-reliability",
        "title": "Hallucination & Reliability Engineering",
        "num": 83,
        "emoji": "🛡️",
        "desc": "Why models invent things, how to detect it, and the design patterns that make answers checkable.",
        "topics": ["Hallucinations", "NLI Entailment", "Grounding by Construction", "Verifier Models", "Semantic Entropy", "Defensive Prompting", "Human Verification", "Defense in Depth"],
        "mission": "# Mission — Hallucination & Reliability Engineering\n\nMaster the science of engineering factual reliability into generative AI systems. Understand the cognitive and statistical mechanics of hallucinations, detect confabulations using Natural Language Inference (NLI) and semantic entropy, design architectures that make hallucinations structurally impossible, build generator-verifier fact-checking pipelines, author defensive quotes-first prompts, establish human verification interfaces for high-consequence domains, and implement defense-in-depth reliability architectures.",
        "notes": "# Notes — Hallucination & Reliability Engineering\n\nModels optimize for statistical plausibility, not empirical truth. Wrap probabilistic generation in grounded retrieval, constrained schemas, NLI verifiers, and human authorization gates.",
        "resources": "# Resources — Hallucination & Reliability Engineering\n\n- Lorenz Kuhn et al., *Semantic Uncertainty: Predicting Accuracy in Large Language Models*\n- Yuntian Deng et al., *Mind the Gap: Assessing the Hallucination Problem in Generative Language Models*\n- Microsoft, *Presidio Data Protection & Anonymization Engine*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

# ==============================================================================
# COURSE 84: rag-evaluation (RAG Evaluation)
# ==============================================================================
def make_course_84():
    lessons = [
        build_lesson(
            1, "deconstructing-rag-evaluation", "Deconstructing RAG Evaluation: Retrieval vs Generation", "RAG Triad",
            "Bifurcating RAG evaluation: why measuring Retrieval (Context Recall/Precision) separately from Generation (Faithfulness/Relevance) is mandatory.",
            "Why must RAG systems evaluate Retrieval and Generation as two completely separate stages?",
            ["A failure in the final answer can be caused either by the database fetching the wrong documents, or the LLM misinterpreting good documents; diagnosing the root cause requires separate metrics", "Retrieval uses C++ while generation uses Python", "They run on different days of the week", "They are evaluated by different government agencies"],
            0, "Evaluating retrieval and generation separately pinpoints whether errors stem from search or synthesis.",
            [
                "<p>When a user asks: <em>'What is our return policy for damaged electronics?'</em>, and the RAG system produces a wrong answer, where did the pipeline fail?</p>",
                "<ul><li><strong>Scenario A:</strong> The vector database fetched articles about 'clothing returns'. The LLM read them and accurately stated that electronics were not mentioned. (<strong>Retrieval Failure!</strong> The LLM did its job; the search engine failed).</li><li><strong>Scenario B:</strong> The vector database fetched the exact 'Electronics Return Policy' document. But the LLM got confused and hallucinated that electronics cannot be returned. (<strong>Generation Failure!</strong> The search engine succeeded; the LLM failed).</li></ul>",
                "<p>If you only measure the final output text, you cannot diagnose whether to tune your <strong>chunking and embedding models</strong> (Retrieval) or tune your <strong>prompts and model tier</strong> (Generation).</p>",
                "<p>The <strong>RAG Triad</strong> establishes three independent mathematical pillars:</p>",
                "<ul><li><strong>1. Context Relevance / Precision:</strong> Did we retrieve only relevant chunks, or did we drag in 80% noise?</li><li><strong>2. Groundedness / Faithfulness:</strong> Is every statement in the generated answer supported by the retrieved context? (Zero hallucination).</li><li><strong>3. Answer Relevance:</strong> Does the generated answer directly address the user's original question?</li></ul>",
                "<div class=\"callout\"><p><strong>The Golden Diagnostic:</strong> Never evaluate an end-to-end RAG system as a single black box. Measure Context Recall, Faithfulness, and Answer Relevance as separate quantitative gauges.</p></div>"
            ],
            "The RAG Triad Framework", "Three independent evaluation pillars",
            [
                {"title": "1. Context Relevance", "lines": ["User Query <-> Retrieved Context", "Did vector search find clean signal?"]},
                {"title": "2. Faithfulness (Groundedness)", "lines": ["Retrieved Context <-> Generated Answer", "Are all claims supported by context?"]},
                {"title": "3. Answer Relevance", "lines": ["User Query <-> Generated Answer", "Did the model actually answer the prompt?"]}
            ],
            "Root Cause Bifurcation", "Pinpointing failure origin",
            [
                {"title": "Retrieval Miss", "lines": ["Context lacks supporting facts", "Fix: Embeddings, chunk size, BM25"]},
                {"title": "Generation Miss", "lines": ["Context has facts, model hallucinates", "Fix: Prompt grounding, model tier"]}
            ],
            "Complete the RAG evaluation sentence",
            "The RAG triad evaluates retrieval quality through context {1} and generation quality through answer {2} and faithfulness.",
            [
                {"answer": "precision", "hint": "Proportion of retrieved chunks that are relevant", "options": ["precision", "voltage", "hardware"]},
                {"answer": "relevance", "hint": "How directly the response answers the query", "options": ["relevance", "formatting", "licensing"]}
            ],
            [
                {"q": "What is 'Faithfulness' (or Groundedness) in RAG evaluation?",
                 "a": ["The percentage of factual claims in the generated response that can be mathematically verified and deduced from the retrieved context", "The model's religious beliefs", "How loyal the user is to the company", "The speed of the network connection"],
                 "c": 0, "why": "Faithfulness measures whether the model restricted itself purely to retrieved facts."},
                {"q": "What is 'Answer Relevance' in RAG evaluation?",
                 "a": ["A metric evaluating whether the generated response directly addresses the user's specific question, regardless of whether it cited docs", "How long the answer is", "How many adjectives were used", "The font of the text"],
                 "c": 0, "why": "Answer relevance checks if the model actually resolved the user's underlying intent."},
                {"q": "If a RAG system has 100% Faithfulness but 20% Answer Relevance, what is going wrong?",
                 "a": ["The model is reciting facts from the documents accurately, but those facts do not answer what the user actually asked", "The database is deleted", "The model is hallucinating everything", "The computer processor is offline"],
                 "c": 0, "why": "High faithfulness with low relevance indicates the model is quoting irrelevant document facts."},
                {"q": "How does separating retrieval metrics from generation metrics save engineering time?",
                 "a": ["Engineers know immediately whether to spend time tuning vector search and chunking or tuning prompts and model parameters", "It writes code without a keyboard", "It eliminates the need for testing", "It reduces GPU temperature"],
                 "c": 0, "why": "Component isolation prevents wasting prompt engineering effort on retrieval failures."}
            ],
            "You understand the necessity of bifurcating retrieval evaluation from generation evaluation.",
            "Evaluating Retrieval: Context Recall and Precision", "Measure vector search performance with quantitative retrieval metrics."
        ),
        build_lesson(
            2, "evaluating-retrieval-recall-precision", "Evaluating Retrieval: Context Recall and Precision", "Retrieval Metrics",
            "Measuring retrieval quality: Context Recall (did we find all required facts?), Context Precision (is the ranking clean?), and MRR/NDCG.",
            "What does 'Context Recall' measure in RAG retrieval evaluation?",
            ["The proportion of ground-truth factual statements needed to answer the question that were successfully captured in the retrieved chunks", "The speed of the database query in milliseconds", "The size of the vector embedding in bytes", "The number of users logged into the system"],
            0, "Context recall evaluates whether the retriever found all necessary factual pieces needed to answer the query.",
            [
                "<p>You cannot evaluate a vector database by typing one search query and saying 'looks okay'. You must evaluate retrieval quantitatively across a benchmark dataset using two foundational information retrieval metrics: <strong>Context Recall</strong> and <strong>Context Precision</strong>.</p>",
                "<ul><li><strong>1. Context Recall (Did we find everything?):</strong> To answer a complex query, suppose three distinct facts are required: Fact A (eligibility), Fact B (fee), Fact C (deadline). If your retriever returns chunks containing Facts A and B, but misses Fact C, Context Recall is $2/3 = 66.7\\%$. The LLM will be incapable of giving a complete answer!</li><li><strong>2. Context Precision (Is the ranking clean?):</strong> Did the relevant chunks appear at Rank #1 and #2, or were they buried at Rank #5 underneath three noisy, irrelevant chunks? Higher precision means higher signal-to-noise ratio in the top positions.</li><li><strong>3. Mean Reciprocal Rank (MRR) & NDCG:</strong> Standard ranking metrics measuring how close the first relevant document is to the top of the search results list.</li></ul>",
                "<pre><code># Computing Context Recall with an Evaluator LLM:\n# Evaluator prompt:\n\"You are an evaluation judge.\nGiven the Ground Truth Answer: '{ground_truth}'\nAnd the Retrieved Context: '{retrieved_chunks}'\nDecompose the ground truth into atomic statements.\nFor each statement, determine if it can be directly attributed to the context.\nCalculate Context Recall = (Attributed Statements) / (Total Statements)\"</code></pre>",
                "<div class=\"callout\"><p><strong>The Retrieval Rule:</strong> If Context Recall is below 90%, your downstream generation is doomed. Optimize chunking, hybrid search, and embeddings until recall hits 95%+.</p></div>"
            ],
            "Context Recall vs Context Precision", "Measuring completeness and ranking cleanliness",
            [
                {"title": "Context Recall (Completeness)", "lines": ["Necessary facts: [Fact A, Fact B, Fact C]", "Retrieved chunks contain: [Fact A, Fact B]", "Recall = 2/3 = 67% (Incomplete!)"]},
                {"title": "Context Precision (Ranking)", "lines": ["Are relevant chunks at Rank #1 and #2?", "Buried at Rank #5? Low precision!"]}
            ],
            "Impact of Poor Retrieval", "Downstream generation consequences",
            [
                {"title": "Low Recall (< 70%)", "lines": ["Model misses critical details", "Outputs incomplete or hallucinated answer"]},
                {"title": "Low Precision (Noisy)", "lines": ["Top chunks are irrelevant clutter", "Dilutes model attention, increases cost"]}
            ],
            "Complete the retrieval metrics sentence",
            "Context {1} evaluates whether all necessary factual statements were retrieved, while context {2} evaluates whether relevant chunks were ranked at the top.",
            [
                {"answer": "recall", "hint": "Completeness of retrieved facts", "options": ["recall", "formatting", "voltage"]},
                {"answer": "precision", "hint": "Cleanliness of candidate ranking", "options": ["precision", "compilation", "hardware"]}
            ],
            [
                {"q": "What is Mean Reciprocal Rank (MRR) in search evaluation?",
                 "a": ["The average of the reciprocal ranks of the first relevant document across all queries: sum(1 / rank) / N", "The speed of the network router", "The average price of cloud servers", "The memory size of the database"],
                 "c": 0, "why": "MRR rewards search engines that place the first relevant result at Rank #1."},
                {"q": "Why is Context Precision critical even if Context Recall is 100%?",
                 "a": ["Because burying relevant chunks underneath irrelevant noise triggers the Lost-in-the-Middle effect and inflates token bills", "It is required by Python syntax", "Low precision causes hard drives to crash", "Precision makes fonts sharper"],
                 "c": 0, "why": "High noise dilutes attention and increases latency and cost even if all facts are present."},
                {"q": "How can you improve Context Recall if your RAG system is missing relevant documents?",
                 "a": ["Increase Top-K, implement hybrid BM25 search, adjust chunk size, or upgrade to a stronger embedding model", "Delete the vector database", "Ask the user to type shorter queries", "Restart the server"],
                 "c": 0, "why": "Hybrid search, larger K, and tuned chunking directly expand retrieval coverage."},
                {"q": "What tool in the RAG ecosystem automatically computes Context Recall and Context Precision?",
                 "a": ["The Ragas framework (ragas.io) or TruLens", "Photoshop", "Git bash", "Microsoft Excel"],
                 "c": 0, "why": "Ragas is the open-source industry standard library for RAG-specific retrieval and generation metrics."}
            ],
            "You know how to evaluate vector retrieval using Context Recall, Context Precision, and ranking metrics.",
            "Evaluating Generation: Faithfulness and Answer Relevance", "Evaluate LLM synthesis for hallucinations and query alignment."
        ),
        build_lesson(
            3, "evaluating-generation-faithfulness-relevance", "Evaluating Generation: Faithfulness and Answer Relevance", "Generation Metrics",
            "Measuring generation quality: Faithfulness (checking hallucinations against context) and Answer Relevance (query alignment).",
            "How does the 'Faithfulness' metric mathematically evaluate an LLM response in a RAG pipeline?",
            ["It breaks the response into atomic claims and calculates the ratio of claims that can be logically inferred from the retrieved context", "It checks if the model used polite language", "It counts the number of words in the answer", "It measures the speed of the GPU"],
            0, "Faithfulness measures the proportion of generated claims directly supported by the retrieved context.",
            [
                "<p>Once your retriever delivers high-quality chunks, the generation stage begins. The LLM must read the context and compose a helpful answer. To ensure the model did not hallucinate or wander off-topic, we evaluate two core generation metrics:</p>",
                "<ul><li><strong>1. Faithfulness (Groundedness Score):</strong> Measures whether the answer is strictly derived from the context. Formula: $\\text{Faithfulness} = \\frac{\\text{Number of Claims Supported by Context}}{\\text{Total Number of Claims in Answer}}$. A faithfulness score of $1.0$ guarantees zero hallucination!</li><li><strong>2. Answer Relevance:</strong> Measures whether the response actually answers the user's question. A model could recite random faithful facts from the document that have zero relevance to the user's prompt. We generate reverse synthetic questions from the answer and compute embedding cosine similarity with the original query!</li></ul>",
                "<pre><code># The Faithfulness Evaluation Algorithm in Ragas:\n# Step 1: LLM extracts atomic claims from generated answer:\n#   Answer: \"The warranty covers 2 years. Accidental drops are not included.\"\n#   Claims: [\"Warranty is 2 years\", \"Accidental drops are not included\"]\n#\n# Step 2: Evaluator verifies each claim against retrieved context:\n#   Context: \"Products have a 2-year warranty covering manufacturer defects.\"\n#   - Claim 1: SUPPORTED by context (True)\n#   - Claim 2: NOT MENTIONED in context (False - Hallucination!)\n#\n# Faithfulness Score = 1 / 2 = 0.50 (Failed threshold!)</code></pre>",
                "<div class=\"callout\"><p><strong>The Target Threshold:</strong> In enterprise production RAG systems, set a minimum <strong>Faithfulness threshold of 0.95</strong>. Responses falling below 0.95 should be flagged or blocked before reaching users.</p></div>"
            ],
            "The Faithfulness Calculation Flow", "Verifying claims against retrieved evidence",
            [
                {"title": "1. Extract Claims", "lines": ["Break response into atomic propositions", "Isolates individual factual assertions"]},
                {"title": "2. Verify Against Context", "lines": ["Check each claim against source chunks", "Marks claims: Supported or Unsupported"]},
                {"title": "3. Compute Ratio", "lines": ["Supported Claims / Total Claims", "Score: 1.0 = Pure Grounding, 0.5 = 50% Hallucination"]}
            ],
            "Answer Relevance Mechanism", "Measuring alignment with user intent",
            [
                {"title": "User Query", "lines": ["'How do I cancel my subscription?'"]},
                {"title": "Generated Answer", "lines": ["'We were founded in 2020 in Austin.'", "Faithful to doc, but 0% Relevant to query!"]},
                {"title": "Relevance Score", "lines": ["Calculates semantic alignment with question", "Flags irrelevant rambling immediately"]}
            ],
            "Complete the generation evaluation sentence",
            "Faithfulness measures the proportion of generated claims supported by {1}, while answer relevance measures alignment with user {2}.",
            [
                {"answer": "context", "hint": "Retrieved source document chunks", "options": ["context", "hardware", "terminal"]},
                {"answer": "intent", "hint": "The user's original question and goal", "options": ["intent", "formatting", "license"]}
            ],
            [
                {"q": "What happens if a RAG answer contains 4 claims, and 3 are supported by context while 1 is an ungrounded hallucination?",
                 "a": ["The Faithfulness score is 3/4 = 0.75, which fails standard enterprise quality thresholds", "The score is 1.0", "The score is 0.0", "The system crashes"],
                 "c": 0, "why": "Faithfulness calculates the exact proportion of supported claims (3/4 = 0.75)."},
                {"q": "How does Ragas measure Answer Relevance without relying on human subjective scoring?",
                 "a": ["It instructs an LLM to generate candidate questions from the answer, then computes cosine similarity between those questions and the original query", "By counting exclamation points", "By measuring response length", "By checking word spellings"],
                 "c": 0, "why": "Semantic similarity between reverse-generated questions and the original query quantifies relevance."},
                {"q": "What is the recommended target threshold for Faithfulness in customer-facing production RAG systems?",
                 "a": ["At least 0.95 (95%+ of claims directly grounded in retrieved context)", "0.10", "0.50", "Zero"],
                 "c": 0, "why": "Enterprise customer trust requires near-perfect (95%+) factual grounding."},
                {"q": "If Faithfulness is 1.0 but Answer Relevance is low, what is the most likely root cause?",
                 "a": ["The model is reciting facts from the context that fail to answer the user's specific question, or the prompt template is unhelpful", "The database is deleted", "The model has no parameters", "The internet is disconnected"],
                 "c": 0, "why": "The model is grounded in the text, but off-topic relative to the user's intent."}
            ],
            "You know how to evaluate RAG generation using Faithfulness and Answer Relevance metrics.",
            "The Ragas and TruLens Frameworks", "Use specialized open-source frameworks to automate RAG evaluation."
        ),
        build_lesson(
            4, "ragas-and-trulens-frameworks", "The Ragas and TruLens Frameworks", "Eval Frameworks",
            "Automating RAG evals: hands-on with Ragas and TruLens, metric computation, dataset structures, and dashboard analysis.",
            "What is the primary role of open-source frameworks like Ragas and TruLens in an AI engineering stack?",
            ["To provide automated, standardized calculation of RAG Triad metrics (Context Precision, Recall, Faithfulness, Relevance) across datasets", "To host vector databases in memory", "To replace Python with C++", "To design website logos"],
            0, "Ragas and TruLens automate the computation of RAG Triad metrics across benchmark datasets.",
            [
                "<p>Writing custom evaluation scripts from scratch for every RAG project is repetitive. The open-source AI community created dedicated <strong>RAG Evaluation Frameworks</strong>, with <strong>Ragas</strong> (Retrieval Augmented Generation Assessment) and <strong>TruLens</strong> leading the industry.</p>",
                "<p>The Ragas Evaluation Workflow:</p>",
                "<ul><li><strong>1. Dataset Format:</strong> Ragas evaluates a standardized dataset containing four core columns: `question`, `contexts` (list of retrieved chunk strings), `answer` (generated response), and `ground_truth` (human reference).</li><li><strong>2. Metric Selection:</strong> Import the standard metrics: `faithfulness`, `answer_relevancy`, `context_precision`, `context_recall`.</li><li><strong>3. Automated Evaluation:</strong> Call `evaluate(dataset, metrics)`: Ragas orchestrates LLM grader calls, computes mathematical scores, and returns a pandas DataFrame of results!</li></ul>",
                "<pre><code># Automated RAG Evaluation with Ragas in Python:\nfrom datasets import Dataset\nfrom ragas import evaluate\nfrom ragas.metrics import faithfulness, answer_relevancy, context_precision, context_recall\n\n# Prepare evaluation dataset:\neval_data = {\n    \"question\": [\"What is the refund policy window?\"],\n    \"contexts\": [[\"All products can be returned within 30 days for a full refund.\"]],\n    \"answer\": [\"You have 30 days to return products for a complete refund.\"],\n    \"ground_truth\": [\"Customers can request a refund within 30 days of purchase.\"]\n}\n\ndataset = Dataset.from_dict(eval_data)\n\n# Run automated evaluation pipeline:\nresults = evaluate(dataset, metrics=[faithfulness, answer_relevancy, context_recall])\nprint(results.to_pandas()) # Outputs detailed scores per test case!</code></pre>",
                "<div class=\"callout\"><p><strong>CI Integration:</strong> Ragas exports clean pandas DataFrames, making it trivial to assert `results['faithfulness'].mean() > 0.95` in automated CI pipelines!</p></div>"
            ],
            "The Ragas Dataset Schema", "Four standardized columns for evaluation",
            [
                {"title": "question (str)", "lines": ["User query prompt", "e.g. 'How do I cancel?'"]},
                {"title": "contexts (list[str])", "lines": ["Array of retrieved chunks", "The factual evidence provided to model"]},
                {"title": "answer (str)", "lines": ["Generated model response", "Evaluated for faithfulness & relevance"]},
                {"title": "ground_truth (str)", "lines": ["Human verified baseline answer", "Evaluated for context recall"]}
            ],
            "TruLens Feedback Functions", "Real-time evaluation in production",
            [
                {"title": "TruLens Feedback Functions", "lines": ["Wraps RAG application with instrumentation", "Computes RAG Triad scores in real time", "Visualizes failure distributions in web UI"]}
            ],
            "Complete the RAG frameworks sentence",
            "Frameworks like Ragas evaluate datasets with question, contexts, answer, and ground truth to compute automated {1} Triad {2}.",
            [
                {"answer": "RAG", "hint": "Retrieval-Augmented Generation", "options": ["RAG", "HTML", "TCP"]},
                {"answer": "metrics", "hint": "Quantitative scores like faithfulness", "options": ["metrics", "cables", "hardware"]}
            ],
            [
                {"q": "What four fields are required in a dataset to compute the full suite of Ragas metrics?",
                 "a": ["question, contexts (retrieved text), answer (generated text), and ground_truth", "name, age, email, and password", "latitude, longitude, altitude, and time", "CPU, RAM, GPU, and disk"],
                 "c": 0, "why": "These four fields provide all the necessary evidence to evaluate both retrieval and generation stages."},
                {"q": "What model does Ragas use by default as the underlying evaluator engine?",
                 "a": ["A frontier LLM (e.g. GPT-4) configured with structured prompt rubrics via LangChain", "A local regex engine", "A random number generator", "A biological neuron"],
                 "c": 0, "why": "Ragas uses frontier models like GPT-4 to perform semantic claim extraction and verification."},
                {"q": "How does TruLens visualize evaluation results for engineering teams?",
                 "a": ["Through an interactive local Streamlit dashboard displaying RAG Triad score distributions and drill-down trace views", "Through a printed book", "Via audio podcast", "In a video game"],
                 "c": 0, "why": "TruLens provides an interactive dashboard for exploring metrics, traces, and failure modes."},
                {"q": "Why is exporting Ragas results to a pandas DataFrame useful for CI/CD?",
                 "a": ["It allows writing simple Python assertions (e.g. assert df['faithfulness'].min() >= 0.90) to gate builds", "It converts the data to HTML", "It makes the database faster", "It reduces GPU temperature"],
                 "c": 0, "why": "DataFrame export integrates seamlessly with standard Python test runners and assertion libraries."}
            ],
            "You know how to use Ragas and TruLens to automate RAG pipeline evaluation.",
            "Synthetic Test Generation for RAG", "Generate hundreds of realistic evaluation test cases automatically."
        ),
        build_lesson(
            5, "synthetic-test-generation-rag", "Synthetic Test Generation for RAG", "Synthetic Datasets",
            "Scaling test coverage: using LLMs to generate synthetic (question, context, ground_truth) test cases from raw documents.",
            "How does Synthetic Test Generation (like Ragas Testset Generator) help teams build evaluation datasets?",
            ["It automatically reads your raw documentation and generates hundreds of diverse questions and verified ground-truth answers in minutes", "It writes fake news articles", "It generates random strings of characters", "It deletes duplicate documents"],
            0, "Synthetic test generators parse raw documents and synthesize realistic questions, reasoning queries, and ground truths.",
            [
                "<p>The biggest bottleneck in AI evaluation is <strong>dataset authoring</strong>. Handcrafting 200 realistic test questions, finding the matching document passages, and writing verified ground-truth answers takes a team of engineers two full weeks.</p>",
                "<p><strong>Synthetic Test Generation</strong> uses frontier models to automate this process:</p>",
                "<ul><li><strong>1. Document Ingestion:</strong> The generator reads your raw documentation (PDFs, Markdown, wikis).</li><li><strong>2. Evolution of Questions:</strong> The model generates realistic questions across distinct cognitive archetypes:<ul><li><em>Simple Factoid:</em> Single-chunk lookup (<em>'What is the maximum upload size?'</em>).</li><li><em>Multi-Hop Reasoning:</em> Questions requiring synthesizing facts across two separate documents!</li><li><em>Conditional / Branching:</em> <em>'If I am on the Pro tier in Europe, what tax rate applies?'</em></li></ul></li><li><strong>3. Ground-Truth Synthesis:</strong> The model extracts the exact supporting context and formulates the gold-standard answer automatically.</li></ul>",
                "<pre><code># Generating a Synthetic Test Suite with Ragas in Python:\nfrom ragas.testset.generator import TestsetGenerator\nfrom langchain_community.document_loaders import DirectoryLoader\n\n# Load raw documentation:\ndocuments = DirectoryLoader(\"./docs\", glob=\"*.md\").load()\n\n# Initialize generator with frontier models:\ngenerator = TestsetGenerator.with_openai()\n\n# Generate 50 diverse synthetic test cases with ground truths!\ntestset = generator.generate_with_langchain_docs(documents, test_size=50)\ntestset.to_pandas().to_json(\"evals/synthetic_testset.jsonl\", orient=\"records\")</code></pre>",
                "<div class=\"callout\"><p><strong>The Bootstrap Rule:</strong> Use synthetic generation to bootstrap an initial 100-case eval dataset in 10 minutes. Then have a human engineer spend 1 hour auditing and refining the generated cases!</p></div>"
            ],
            "Synthetic Test Question Archetypes", "Generating diverse cognitive complexity",
            [
                {"title": "1. Simple Factoid", "lines": ["Direct single-chunk fact", "'What is the database port?'"]},
                {"title": "2. Multi-Hop Reasoning", "lines": ["Synthesizes across 2 documents", "'Does User A have permission to access Feature B?'"]},
                {"title": "3. Conditional Logic", "lines": ["Branching if-then scenario", "'What happens if a subscription lapses in Canada?'"]}
            ],
            "The 10-Minute Bootstrap", "Human-in-the-loop synthetic generation",
            [
                {"title": "Raw Documents", "lines": ["100 pages of company documentation", "Fed into TestsetGenerator"]},
                {"title": "Synthetic Testset", "lines": ["Generates 50 questions & ground truths", "Human audits in 1 hour -> Production-ready!"]}
            ],
            "Complete the synthetic dataset sentence",
            "Synthetic test generators analyze raw documentation to automatically produce diverse questions, multi-hop reasoning tasks, and verified {1} {2}.",
            [
                {"answer": "ground", "hint": "Baseline verification truth", "options": ["ground", "random", "virtual"]},
                {"answer": "truth", "hint": "Verified factual answers", "options": ["truth", "syntax", "hardware"]}
            ],
            [
                {"q": "What is a 'Multi-Hop' test question in synthetic evaluation?",
                 "a": ["A question that requires retrieving and reasoning across multiple separate document chunks to arrive at the correct answer", "A question about jumping", "A question written in two languages", "A network ping test"],
                 "c": 0, "why": "Multi-hop questions evaluate whether the retriever can find multiple disjoint pieces of supporting context."},
                {"q": "Why is human auditing recommended after running automated synthetic test generation?",
                 "a": ["To verify that the generated questions sound like realistic human user queries and that ground truths are 100% accurate", "Because AI models cannot write English", "It is required by the FDA", "To delete the test set"],
                 "c": 0, "why": "Human curation filters out awkward phrasing and validates ground-truth accuracy."},
                {"q": "How does synthetic test generation save engineering time?",
                 "a": ["It generates a comprehensive 50-100 case benchmark dataset in minutes rather than requiring weeks of manual human authoring", "It makes models run without GPUs", "It eliminates the need for unit tests", "It speeds up Python compilation"],
                 "c": 0, "why": "Automating draft question-answer generation slashes the time required to build eval datasets."},
                {"q": "Can synthetic test generation create negative cases where the answer is intentionally absent from docs?",
                 "a": ["Yes; generators can formulate out-of-scope questions to test whether the RAG pipeline correctly admits it does not know", "No; synthetic generation only creates positive matches", "Only in Linux", "Only on Sundays"],
                 "c": 0, "why": "Generating out-of-scope queries tests the system's ability to trigger the 'I don't know' fallback."}
            ],
            "You know how to scale evaluation coverage using automated synthetic test generation.",
            "Failure Mode Diagnosis: Triaging Broken Answers", "Systematically diagnose and fix the root causes of RAG errors."
        ),
        build_lesson(
            6, "failure-mode-diagnosis-triaging", "Failure Mode Diagnosis: Triaging Broken Answers", "RAG Triage",
            "Systematic triage: diagnosing retrieval misses, rank position failures, prompt dilution, and context hallucination.",
            "What should an engineer do first when a RAG pipeline returns an incorrect answer to a user query?",
            ["Inspect the retrieved context chunks to verify whether the correct factual information was present in the Top-K results", "Rewrite the system prompt completely", "Switch to a different model provider", "Restart the database server"],
            0, "Inspecting the retrieved chunks immediately reveals whether the failure was a Retrieval error or a Generation error.",
            [
                "<p>When a RAG system answers poorly, engineers often waste hours rewriting prompt templates, only to discover that the vector database never retrieved the relevant document in the first place! <strong>Systematic RAG Triage</strong> isolates the broken component with precision.</p>",
                "<p>The RAG Triage Diagnostic Matrix:</p>",
                "<ul><li><strong>Failure Mode 1: Empty or Irrelevant Retrieval:</strong> Retrieved chunks contain zero relevant facts. <em>Root Cause:</em> Bad chunk size, vocabulary mismatch, or low embedding similarity. <em>Fix:</em> Implement hybrid BM25 search or tune chunking.</li><li><strong>Failure Mode 2: Buried in the Middle:</strong> Relevant chunk is retrieved, but ranked at position #8 under 7 noisy chunks. <em>Root Cause:</em> Context dilution / Lost in the Middle. <em>Fix:</em> Reduce Top-K from 10 to 3, or add a Cross-Encoder re-ranker.</li><li><strong>Failure Mode 3: Grounded Hallucination:</strong> Chunks contain the right answer, but the model hallucinated anyway. <em>Root Cause:</em> Weak prompt grounding, temperature too high. <em>Fix:</em> Set temperature=0.0, use quotes-first prompt.</li><li><strong>Failure Mode 4: Chunk Boundary Severance:</strong> Half the explanation is in Chunk 1, and the other half is in Chunk 2. <em>Fix:</em> Increase chunk overlap from 0% to 20%.</li></ul>",
                "<pre><code># The RAG Triage Decision Flowchart:\n# 1. Did Top-K chunks contain the ground truth?\n#    ├── NO  -> RETRIEVAL BUG: Check embedding model, add BM25, fix chunk size.\n#    └── YES -> Check chunk ranking position:\n#         ├── Ranked #5-#10 -> RANKING BUG: Add Cross-Encoder Re-Ranker, reduce K.\n#         └── Ranked #1-#2  -> GENERATION BUG: Set temp=0.0, enforce quotes-first!</code></pre>",
                "<div class=\"callout\"><p><strong>The Triage Rule:</strong> Never touch the prompt until you have physically inspected the retrieved chunks. Fix retrieval first, then fix generation.</p></div>"
            ],
            "The 4 Classic RAG Failure Modes", "Symptoms, root causes, and targeted fixes",
            [
                {"title": "1. Retrieval Miss (0 Facts)", "lines": ["Chunks are completely irrelevant", "Fix: Hybrid BM25, tune chunk size"]},
                {"title": "2. Buried in Noise (Rank #8)", "lines": ["Fact present, but buried under clutter", "Fix: Add Cross-Encoder re-ranker, reduce K"]},
                {"title": "3. Hallucination Despite Facts", "lines": ["Model ignores context facts", "Fix: Quotes-first prompt, temperature 0.0"]},
                {"title": "4. Severed Boundary", "lines": ["Fact split across chunk seams", "Fix: Increase chunk overlap to 20%"]}
            ],
            "Root Cause Decision Flowchart", "Isolating the broken pipeline seam",
            [
                {"title": "Step 1: Check Context", "lines": ["Are facts present in Top-K?"]},
                {"title": "NO -> Fix Search Layer", "lines": ["Adjust embedding & retrieval"]},
                {"title": "YES -> Fix Model Layer", "lines": ["Adjust prompt & sampling"]}
            ],
            "Complete the failure diagnosis sentence",
            "Systematic RAG triage inspects retrieved chunks to determine whether errors stem from a {1} miss, rank position {2}, or prompt hallucination.",
            [
                {"answer": "retrieval", "hint": "Search engine failure", "options": ["retrieval", "formatting", "licensing"]},
                {"answer": "dilution", "hint": "Facts buried in context noise", "options": ["dilution", "compilation", "hardware"]}
            ],
            [
                {"q": "What is 'Context Dilution' in RAG generation?",
                 "a": ["Flooding the prompt with too many low-relevance chunks, which distracts the model's attention away from the single golden chunk", "Deleting words from the prompt", "A database memory leak", "Water damage to a server"],
                 "c": 0, "why": "Excessive irrelevant chunks dilute transformer attention, causing the model to miss the target fact."},
                {"q": "How does adding a Cross-Encoder Re-Ranker solve the 'Buried in the Middle' failure mode?",
                 "a": ["It re-scores retrieved candidates using deep cross-attention, elevating the single most relevant chunk directly to Rank #1", "It deletes the other chunks", "It runs tests in parallel", "It converts text to numbers"],
                 "c": 0, "why": "Cross-encoders place the most relevant evidence at the top of the context where attention is highest."},
                {"q": "What symptom indicates that chunk overlap is set too low (e.g. 0%)?",
                 "a": ["Queries seeking multi-sentence explanations fail because the explanation was severed in half across two adjacent chunks", "The database runs out of RAM", "The server crashes", "The text turns into HTML"],
                 "c": 0, "why": "Zero overlap severs concepts that cross chunk boundaries, breaking semantic continuity."},
                {"q": "If a user query contains a typo in a product name (e.g. 'Iphne' instead of 'iPhone'), why does vector search often succeed while BM25 fails?",
                 "a": ["Dense embeddings capture fuzzy semantic proximity and character embedding similarity, while BM25 requires exact token matching", "BM25 is broken", "Vector search uses human eyes", "Vector search is illegal for typos"],
                 "c": 0, "why": "Dense vector spaces place misspelled words close to their correct counterparts."}
            ],
            "You know how to systematically triage and resolve RAG pipeline failure modes.",
            "Benchmarking Embedding Models and Chunking Strategies", "Run comparative matrix benchmarks across models, chunk sizes, and overlaps."
        ),
        build_lesson(
            7, "benchmarking-embeddings-chunking-matrix", "Benchmarking Embedding Models and Chunking Strategies", "Matrix Benchmarks",
            "Running matrix experiments: testing combinations of embedding models (OpenAI, BGE, Cohere) and chunk sizes (200, 500, 1000).",
            "What is a 'Grid Search Matrix' in RAG pipeline optimization?",
            ["Evaluating combinations of different chunk sizes, overlaps, and embedding models against a benchmark dataset to find the winning configuration", "A movie streaming service", "A 3D graphics rendering tool", "A spreadsheet of company salaries"],
            0, "Grid search evaluates permutations of chunk sizes, overlaps, and embedding models empirically.",
            [
                "<p>How do you know whether a 300-token chunk size is better than 800 tokens for your specific documentation? How do you know whether Cohere Embed beats OpenAI `text-embedding-3-large` on your technical vocabulary? <strong>You don't guess; you run an empirical Matrix Benchmark</strong>.</p>",
                "<p>The RAG Configuration Grid Search:</p>",
                "<ul><li><strong>1. Dimension 1: Chunk Sizes:</strong> Test [200 tokens, 500 tokens, 1,000 tokens].</li><li><strong>2. Dimension 2: Chunk Overlap:</strong> Test [0% overlap, 10% overlap, 20% overlap].</li><li><strong>3. Dimension 3: Embedding Models:</strong> Test [OpenAI text-embedding-3-small, BGE-Large, Cohere v3].</li><li><strong>4. Dimension 4: Hybrid Search:</strong> Test [Pure Vector vs Hybrid (Vector + BM25)].</li></ul>",
                "<pre><code># The RAG Benchmark Experiment Matrix:\n# Config | Embedding Model    | Chunk | Overlap | Hybrid? | Context Recall | Cost/1k\n# ----------------------------------------------------------------------------------\n# C1     | text-embed-3-small | 200   | 0%      | NO      | 78.4%          | $0.02\n# C2     | text-embed-3-small | 500   | 15%     | NO      | 89.2%          | $0.02\n# C3     | bge-large-en-v1.5  | 500   | 15%     | YES     | 96.5% (WINNER!)| $0.00 (Local!)\n# C4     | text-embed-3-large | 1000  | 20%     | YES     | 95.8%          | $0.13</code></pre>",
                "<p>Notice that Configuration C3 (BGE-Large with 500-token chunks, 15% overlap, and Hybrid BM25) delivered the highest recall (96.5%) at zero API cost!</p>",
                "<div class=\"callout\"><p><strong>The Empirical Proof:</strong> Stop debating architecture in meetings. Run the benchmark matrix over your golden dataset and let the data settle the debate.</p></div>"
            ],
            "The RAG Optimization Matrix", "Testing permutations of models, chunk sizes, and search modes",
            [
                {"title": "Chunk Size Axis", "lines": ["Test 200 vs 500 vs 1,000 tokens", "Balances specificity vs context depth"]},
                {"title": "Embedding Model Axis", "lines": ["Test OpenAI vs BGE vs Cohere", "Evaluates domain vocabulary representation"]},
                {"title": "Search Mode Axis", "lines": ["Test Pure Vector vs Hybrid BM25", "Measures keyword capture lift"]}
            ],
            "Empirical Evidence vs Intuition", "Finding the optimal Pareto frontier",
            [
                {"title": "Team Assumption", "lines": ["'Larger 1000-token chunks must be better'", "Intuitive guess without data"]},
                {"title": "Benchmark Discovery", "lines": ["500-token chunks + Hybrid scored 18% higher!", "Empirical data proves optimal config"]}
            ],
            "Complete the benchmark matrix sentence",
            "A RAG configuration matrix evaluates permutations of chunk sizes, overlap percentages, and {1} models to discover the configuration with highest context {2}.",
            [
                {"answer": "embedding", "hint": "Vectorization models", "options": ["embedding", "hardware", "formatting"]},
                {"answer": "recall", "hint": "Retrieval completeness metric", "options": ["recall", "font", "license"]}
            ],
            [
                {"q": "Why is testing 1,000-token chunks sometimes worse for retrieval than 500-token chunks?",
                 "a": ["Larger chunks contain multiple different topics, diluting the embedding vector and lowering similarity scores for specific queries", "1,000 tokens is illegal in RAG", "Vector databases refuse to store large chunks", "Computers run out of RAM"],
                 "c": 0, "why": "Topic dilution in large chunks reduces cosine similarity on specific, granular queries."},
                {"q": "What metric should serve as the primary objective when optimizing the retrieval configuration matrix?",
                 "a": ["Context Recall: verifying that the correct factual chunks are successfully captured in Top-K", "The number of lines of Python code", "The color of the terminal output", "The speed of the developer's laptop"],
                 "c": 0, "why": "Context Recall is the prerequisite of downstream success; if recall is low, generation cannot succeed."},
                {"q": "Why does adding BM25 hybrid search almost always improve the benchmark score of pure vector search?",
                 "a": ["It rescues exact keyword, acronym, and serial number queries that vector embeddings fail to match", "It makes the database free", "It eliminates the need for embeddings", "It runs without a CPU"],
                 "c": 0, "why": "BM25 captures exact lexical tokens that dense semantic vectors blur."},
                {"q": "How often should an enterprise re-run its RAG benchmark matrix?",
                 "a": ["Whenever new frontier embedding models are released or when a major new documentation corpus is ingested", "Every 5 seconds", "Never; the configuration is frozen forever", "Only on holidays"],
                 "c": 0, "why": "Benchmarking new embedding releases ensures the stack adopts state-of-the-art retrieval improvements."}
            ],
            "You know how to run comparative matrix experiments across embedding models and chunking strategies.",
            "Building an Automated RAG Evaluation Pipeline", "Synthesize everything: build a complete, continuous RAG evaluation pipeline."
        ),
        build_lesson(
            8, "building-automated-rag-eval-pipeline", "Building an Automated RAG Evaluation Pipeline", "Continuous RAG Evals",
            "Synthesizing RAG evaluation: building a production-grade CI/CD pipeline evaluating Context Recall, Faithfulness, and Answer Relevance.",
            "What automated quality gate should an engineering team enforce in CI before deploying a RAG pipeline update?",
            ["Context Recall must exceed 90% and Faithfulness must exceed 95% across the golden benchmark suite", "The code must be written in Latin", "The prompt must contain 100 adjectives", "The database must be restarted"],
            0, "Enforcing hard quantitative thresholds on Recall (>=90%) and Faithfulness (>=95%) prevents production regressions.",
            [
                "<p>We have explored the complete science of RAG Evaluation: the RAG Triad, Context Recall and Precision, Faithfulness, Ragas and TruLens frameworks, synthetic test generation, root cause triage, and benchmark experiment matrices.</p>",
                "<p>Now, we synthesize these into a <strong>Continuous Production RAG Evaluation Pipeline</strong>:</p>",
                "<ul><li><strong>1. Versioned Golden Dataset:</strong> A benchmark set of 100 diverse questions, contexts, and ground truths in `evals/rag_golden.jsonl`.</li><li><strong>2. Automated Test Runner:</strong> A Python script that queries the active RAG service, collects generated answers, and computes Ragas metrics.</li><li><strong>3. Multi-Metric Gate in CI:</strong> Evaluates three non-negotiable gates:<ul><li><em>Gate 1: Context Recall $\\ge 0.90$</em> (Did retrieval find the facts?).</li><li><em>Gate 2: Faithfulness $\\ge 0.95$</em> (Did the model avoid hallucinating?).</li><li><em>Gate 3: Answer Relevance $\\ge 0.85$</em> (Did the model answer the question?).</li></ul></li><li><strong>4. Automated Report & Block:</strong> If any metric drops below threshold, CI exits with code `1`, blocking deployment and posting a diagnostic breakdown to GitHub!</li></ul>",
                "<pre><code># Automated RAG CI Verification Script (verify_rag.py):\nasync def verify_rag_pipeline():\n    results = await run_ragas_evaluation(dataset=\"evals/rag_golden.jsonl\")\n    df = results.to_pandas()\n    \n    recall = df[\"context_recall\"].mean()\n    faithfulness = df[\"faithfulness\"].mean()\n    \n    print(f\"Context Recall: {recall:.2f} | Faithfulness: {faithfulness:.2f}\")\n    \n    if recall < 0.90 or faithfulness < 0.95:\n        print(\"CI GATE FAILED: RAG accuracy threshold breached!\")\n        sys.exit(1) # Blocks merge in GitHub Actions!\n    print(\"CI GATE PASSED: Production release verified safe!\")\n    sys.exit(0)</code></pre>",
                "<div class=\"callout\"><p><strong>The Final Engineering Victory:</strong> You have built an automated, self-defending RAG pipeline. You can refactor embeddings, tune chunking, and modify prompts with absolute mathematical confidence.</p></div>"
            ],
            "The Continuous RAG CI/CD Pipeline", "Enforcing automated quality gates on every commit",
            [
                {"title": "1. Code / Prompt PR", "lines": ["Developer updates chunking or prompt", "Triggers GitHub Actions CI runner"]},
                {"title": "2. Ragas Evaluation", "lines": ["Runs 100 golden cases against RAG", "Computes Recall, Faithfulness, Relevance"]},
                {"title": "3. The Quality Gates", "lines": ["Recall >= 0.90 AND Faithfulness >= 0.95", "Passes -> Deploy to production! Fail -> Block PR"]}
            ],
            "From Hope to Mathematical Certainty", "Transforming RAG into rigorous engineering",
            [
                {"title": "Amateur RAG", "lines": ["'I hope the retriever finds the right docs'", "Hopes for the best, customer catches bugs"]},
                {"title": "Engineered RAG", "lines": ["'Recall: 94.2%, Faithfulness: 98.1%'", "Verified by automated CI gates, zero fear"]}
            ],
            "Complete the continuous RAG evals sentence",
            "An automated RAG evaluation pipeline enforces quantitative CI gates on context {1} and generation {2} to guarantee production quality.",
            [
                {"answer": "recall", "hint": "Retrieval completeness metric", "options": ["recall", "formatting", "voltage"]},
                {"answer": "faithfulness", "hint": "Groundedness and zero-hallucination metric", "options": ["faithfulness", "licensing", "hardware"]}
            ],
            [
                {"q": "What exit code does the RAG verification script return when Faithfulness drops below the 0.95 threshold?",
                 "a": ["Exit code 1, which fails the GitHub Actions workflow and blocks the pull request from merging", "Exit code 0", "Exit code 200", "Exit code 404"],
                 "c": 0, "why": "Non-zero exit codes signal failure to CI environments, preventing broken code from deploying."},
                {"q": "Why is running the RAG evaluation suite against a staging vector database recommended before production release?",
                 "a": ["It tests real database query latency, real embedding generation, and real network connections in an isolated staging environment", "It makes the database free", "It turns off logging", "It compiles Python into assembly"],
                 "c": 0, "why": "Testing against real staging infrastructure catches network, indexing, and configuration anomalies."},
                {"q": "How does automated RAG evaluation protect a company against silent model provider updates?",
                 "a": ["If a cloud provider updates its model weights and causes subtle formatting or grounding regressions, the nightly eval suite catches it immediately", "It prevents the provider from updating", "It sues the provider", "It deletes the model"],
                 "c": 0, "why": "Nightly evaluation runs detect upstream provider drift before customer complaints emerge."},
                {"q": "What is the ultimate mark of an expert RAG systems architect?",
                 "a": ["Treating RAG as an instrumented, measurable pipeline with quantitative recall and faithfulness gates rather than a black-box prompt demo", "Using the largest possible chunk size", "Writing all code in one file", "Refusing to measure metrics"],
                 "c": 0, "why": "Scientific measurement, component isolation, and automated CI gates define engineering excellence."}
            ],
            "You have completed the RAG Evaluation course.",
            "Next Course: Agent Evaluation", "Explore how to score multi-step autonomous agency: task success, tool correctness, and trajectory analysis."
        )
    ]

    glossary = [
        {"id": "triad", "title": "The RAG Triad", "terms": [
            {"term": "RAG Triad", "def": "The three core evaluation pillars: Context Relevance, Groundedness (Faithfulness), and Answer Relevance.", "lesson": 1, "tags": ["evals", "rag"]},
            {"term": "Context Recall", "def": "The proportion of ground-truth factual statements needed to answer a query successfully captured in retrieved chunks.", "lesson": 2, "tags": ["retrieval", "metrics"]},
            {"term": "Context Precision", "def": "A metric evaluating whether the most relevant document chunks are ranked at the top of retrieved results.", "lesson": 2, "tags": ["retrieval", "ranking"]}
        ]},
        {"id": "generation-metrics", "title": "Generation Metrics", "terms": [
            {"term": "Faithfulness", "def": "The ratio of factual claims in the generated response that can be logically inferred from retrieved context (zero hallucination).", "lesson": 3, "tags": ["generation", "grounding"]},
            {"term": "Answer Relevance", "def": "A metric measuring how directly and completely the generated response addresses the user's specific query.", "lesson": 3, "tags": ["generation", "relevance"]},
            {"term": "Ragas", "def": "An open-source industry standard Python library for automated RAG Triad evaluation and metric computation.", "lesson": 4, "tags": ["tools", "evals"]}
        ]},
        {"id": "synthesis-triage", "title": "Synthesis & Triage", "terms": [
            {"term": "Synthetic Test Generation", "def": "Using LLMs to automatically synthesize realistic questions, multi-hop tasks, and ground truths from raw docs.", "lesson": 5, "tags": ["datasets", "synthesis"]},
            {"term": "Retrieval Miss", "def": "A RAG failure mode where the vector search engine fails to include supporting facts in the Top-K candidates.", "lesson": 6, "tags": ["debugging", "retrieval"]},
            {"term": "Context Dilution", "def": "Flooding the prompt with excessive low-relevance chunks, which degrades model attention on the true answer.", "lesson": 6, "tags": ["attention", "pitfalls"]}
        ]},
        {"id": "benchmarks", "title": "Optimization & Gates", "terms": [
            {"term": "TruLens", "def": "An open-source instrumentation framework for real-time RAG Triad feedback evaluation and dashboards.", "lesson": 4, "tags": ["tools", "observability"]},
            {"term": "Matrix Benchmark", "def": "A grid search experiment evaluating permutations of chunk sizes, overlaps, and embedding models empirically.", "lesson": 7, "tags": ["experiments", "optimization"]},
            {"term": "Continuous RAG Gate", "def": "An automated CI checkpoint requiring Context Recall >= 0.90 and Faithfulness >= 0.95 to deploy.", "lesson": 8, "tags": ["ci", "quality"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "Automated Ragas Evaluation Run",
            "label": "Computing RAG Triad metrics",
            "code": "from ragas import evaluate\nfrom ragas.metrics import faithfulness, answer_relevancy, context_recall\nfrom datasets import Dataset\n\ndataset = Dataset.from_dict(eval_records)\nresults = evaluate(dataset, metrics=[faithfulness, answer_relevancy, context_recall])\ndf = results.to_pandas()\nprint(f\"Faithfulness: {df['faithfulness'].mean():.2f}\")",
            "lessonN": 4, "lessonSlug": "ragas-and-trulens-frameworks", "lessonTitle": "The Ragas and TruLens Frameworks"
        },
        {
            "title": "Continuous RAG CI Verification Gate",
            "label": "Gating deployments in GitHub Actions",
            "code": "results = evaluate(golden_dataset, metrics=[context_recall, faithfulness])\nif results['context_recall'] < 0.90 or results['faithfulness'] < 0.95:\n    print('CI GATE FAILED: RAG quality threshold breached!')\n    sys.exit(1)\nsys.exit(0)",
            "lessonN": 8, "lessonSlug": "building-automated-rag-eval-pipeline", "lessonTitle": "Building an Automated RAG Evaluation Pipeline"
        },
        {
            "title": "Synthetic Testset Generation Script",
            "label": "Bootstrapping 50 test cases in 2 minutes",
            "code": "from ragas.testset.generator import TestsetGenerator\ngenerator = TestsetGenerator.with_openai()\ntestset = generator.generate_with_langchain_docs(documents, test_size=50)\ntestset.to_pandas().to_json('evals/golden.jsonl', orient='records')",
            "lessonN": 5, "lessonSlug": "synthetic-test-generation-rag", "lessonTitle": "Synthetic Test Generation for RAG"
        },
        {
            "title": "RAG Failure Triage Decision Rule",
            "label": "Separating search from synthesis",
            "code": "# 1. Inspect retrieved chunks:\nif not any(ground_truth_fact in chunk for chunk in retrieved_chunks):\n    print('RETRIEVAL FAILURE: Tune chunking, add BM25, upgrade embeddings!')\nelse:\n    print('GENERATION FAILURE: Set temp=0.0, use quotes-first prompt, reduce K!')",
            "lessonN": 6, "lessonSlug": "failure-mode-diagnosis-triaging", "lessonTitle": "Failure Mode Diagnosis: Triaging Broken Answers"
        }
    ]

    course_data = {
        "id": "rag-evaluation",
        "title": "RAG Evaluation",
        "num": 84,
        "emoji": "🔬",
        "desc": "Measuring retrieval and generation separately: recall, precision, faithfulness and answer quality.",
        "topics": ["RAG Evaluation", "RAG Triad", "Context Recall", "Context Precision", "Faithfulness", "Answer Relevance", "Ragas", "TruLens", "Synthetic Evals", "RAG Triage"],
        "mission": "# Mission — RAG Evaluation\n\nMaster the science of quantitative evaluation for Retrieval-Augmented Generation systems. Bifurcate retrieval evaluation from generation evaluation, compute Context Recall and Context Precision, evaluate Faithfulness and Answer Relevance, automate metrics using Ragas and TruLens, scale test coverage with synthetic generation, triage broken pipelines systematically, run configuration matrix benchmarks, and enforce continuous CI quality gates.",
        "notes": "# Notes — RAG Evaluation\n\nNever treat RAG as a single black box. If Context Recall is below 90%, prompt engineering cannot fix the problem. Measure retrieval and generation separately.",
        "resources": "# Resources — RAG Evaluation\n\n- Shahul Es et al., *Ragas: Automated Evaluation of Retrieval Augmented Generation*\n- TruEra, *The RAG Triad & TruLens Documentation*\n- Jason Liu, *Evaluating Retrieval Augmented Generation Systems*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

# ==============================================================================
# COURSE 85: agent-evaluation (Agent Evaluation)
# ==============================================================================
def make_course_85():
    lessons = [
        build_lesson(
            1, "evaluating-multi-step-agency", "The Challenge of Evaluating Multi-Step Agency", "Agency Evaluation",
            "Why evaluating autonomous agents is fundamentally harder than evaluating single-turn chatbots: state, non-determinism, and multi-turn trajectories.",
            "What makes evaluating an autonomous coding agent fundamentally harder than evaluating a simple question-answering model?",
            ["Agents execute multi-step trajectories across files and tools where intermediate paths vary wildly, requiring evaluation of real-world end-state correctness", "Agents refuse to be evaluated", "Agents run on paper", "Evaluation of code is illegal"],
            0, "Agents explore diverse multi-turn tool trajectories; evaluation must assess end-state environment correctness rather than text matching.",
            [
                "<p>Evaluating a chatbot is relatively simple: you feed an input, get an output, and compare it to a reference string. But an autonomous agent is not a chatbot; it is a <strong>stateful, multi-step problem solver</strong>.</p>",
                "<p>Why evaluating autonomous agents is an advanced engineering challenge:</p>",
                "<ul><li><strong>1. Divergent Valid Trajectories:</strong> To fix a bug, Agent A might run `grep`, read line 40, and edit the file. Agent B might run `pytest` first, inspect the stack trace, and edit the file. Both paths are completely valid! You cannot evaluate an agent by grading its intermediate thoughts.</li><li><strong>2. Environmental State Mutation:</strong> Agents change the world: they edit files, create branches, and write database rows. Evaluation requires inspecting the <strong>final environment state</strong>.</li><li><strong>3. Compounding Failure Probability:</strong> A 10-step agent that makes a small mistake at step 4 can derail its entire trajectory.</li><li><strong>4. Non-Deterministic Loops:</strong> An agent might take 4 turns today and 7 turns tomorrow to solve the identical issue.</li></ul>",
                "<pre><code># The Autonomous Agent Evaluation Paradigm:\n# Do NOT evaluate: \"Did the agent's chat explanation match my reference?\"\n# DO evaluate: \"Did the agent's code edits cause `pytest` to pass with exit code 0\n#               without introducing new regressions or breaking linters?\"</code></pre>",
                "<div class=\"callout\"><p><strong>The End-State Principle:</strong> Evaluate agents based on the final physical and digital state of the environment, not on the intermediate words they uttered.</p></div>"
            ],
            "Single-Turn vs Multi-Step Evaluation", "Text matching vs environment verification",
            [
                {"title": "Single-Turn Chatbot Eval", "lines": ["Input -> Output text", "Compared against reference string", "Static, predictable, zero environment"]},
                {"title": "Multi-Step Agent Eval", "lines": ["Input goal -> Multi-tool trajectory", "Mutates files, branches, & databases", "Evaluated via final test suite pass/fail"]}
            ],
            "Multiple Valid Trajectories", "Different paths to the same goal",
            [
                {"title": "Agent Path A (Grep-First)", "lines": ["grep -> read_file -> edit -> pytest -> PASS!"]},
                {"title": "Agent Path B (Test-First)", "lines": ["pytest -> trace inspection -> edit -> pytest -> PASS!"]}
            ],
            "Complete the agent evaluation sentence",
            "Evaluating autonomous agents requires assessing final environment {1} correctness and test pass rates rather than grading intermediate text {2}.",
            [
                {"answer": "state", "hint": "Condition of files, databases, and code", "options": ["state", "voltage", "license"]},
                {"answer": "trajectories", "hint": "The sequence of thoughts and tool calls", "options": ["trajectories", "keyboards", "monitors"]}
            ],
            [
                {"q": "What is the primary indicator of success when evaluating an autonomous software engineering agent?",
                 "a": ["The automated test suite passes with exit code 0 on the modified repository without regressing existing tests", "The agent outputs a friendly apology", "The agent finishes in 1 second", "The agent uses 100 tools"],
                 "c": 0, "why": "Passing the repository's test suite provides objective proof of task resolution."},
                {"q": "Why is grading an agent's intermediate tool calls against a strict golden sequence usually an anti-pattern?",
                 "a": ["Different valid exploration strategies (e.g. grep-first vs test-first) arrive at correct solutions through different tool sequences", "Tool calls are encrypted", "Computers cannot compare tools", "It is illegal in Python"],
                 "c": 0, "why": "Over-constraining intermediate paths penalizes creative and equally valid problem-solving strategies."},
                {"q": "What is 'Environment Teardown' in agent evaluation harnesses?",
                 "a": ["Resetting the sandbox repository, files, and database back to a pristine baseline after each agent test run", "Breaking physical computer monitors", "Formatting the hard drive", "Deleting the user account"],
                 "c": 0, "why": "Teardown ensures each test case executes in an isolated, reproducible environment without state pollution."},
                {"q": "How does multi-step execution compound failure rates in autonomous agents?",
                 "a": ["A minor error or false assumption in early turns compounds across subsequent tool calls, derailing the entire task", "It doubles the speed of the CPU", "It deletes the model weights", "It converts code to HTML"],
                 "c": 0, "why": "Early errors mislead subsequent planning, causing compounding failure cascades."}
            ],
            "You understand the challenges of evaluating multi-step agency and the end-state principle.",
            "Task Success and Pass@K Metrics", "Measure agent problem-solving power with Pass@1 and Pass@K."
        ),
        build_lesson(
            2, "task-success-and-pass-at-k", "Task Success and Pass@K Metrics", "Pass@K",
            "Quantifying agent success: Task Success Rate, Pass@1 (single-shot reliability), Pass@K (sampling diversity), and cost trade-offs.",
            "What does the 'Pass@1' metric measure when evaluating an autonomous coding agent?",
            ["The percentage of benchmark coding tasks the agent resolves successfully on its first single attempt", "The speed of the network cable", "The percentage of passing students", "The number of lines of code written"],
            0, "Pass@1 measures first-try success rates, representing real-world autonomous reliability.",
            [
                "<p>In academic coding benchmarks, researchers often report <strong>Pass@K</strong> (e.g. Pass@5 or Pass@10): generate 10 independent candidate solutions, and if <em>any one</em> passes tests, count it as a success! While Pass@10 measures potential capability, in production software engineering, <strong>Pass@1 is what matters</strong>.</p>",
                "<p>Understanding Task Success Metrics:</p>",
                "<ul><li><strong>Pass@1 (First-Attempt Reliability):</strong> The agent is given the task once. Does it successfully diagnose, edit, and verify the fix on attempt #1? Pass@1 reflects real-world developer experience: nobody wants an agent that fails 9 times and succeeds once!</li><li><strong>Pass@K (Sampling Ceiling):</strong> Generating $K$ parallel attempts. Pass@K evaluates the maximum theoretical capability of the model under majority voting or best-of-N selection.</li><li><strong>Cost-Adjusted Success:</strong> $\\text{Success per Dollar} = \\frac{\\text{Successful Tasks}}{\\text{Total Token Cost}}$. A model with 40% Pass@1 at $0.05/task often beats a model with 45% Pass@1 that costs $1.50/task!</li></ul>",
                "<pre><code># Computing Pass@K Mathematically (Chen et al., 2021):\n# For N generated samples with c correct solutions:\n# Pass@K = 1 - [comb(N - c, k) / comb(N, k)]\n#\n# In Production Agent Engineering:\n# Measure Pass@1 across 100 benchmark issues.\n# Target: Pass@1 > 65% on internal repo tickets!</code></pre>",
                "<div class=\"callout\"><p><strong>The Production Metric:</strong> Focus your engineering on <strong>Pass@1</strong>. Improving Pass@1 from 35% to 65% transforms an agent from an annoying toy into an indispensable engineering teammate.</p></div>"
            ],
            "Pass@1 vs Pass@K", "First-try reliability vs multi-sample potential",
            [
                {"title": "Pass@1 (Production Metric)", "lines": ["Single attempt execution", "Measures true first-try reliability", "Reflects real developer experience"]},
                {"title": "Pass@K (Academic Metric)", "lines": ["Generate K parallel attempts", "Success if ANY 1 passes tests", "Evaluates theoretical capability ceiling"]}
            ],
            "Cost-Adjusted Success Frontier", "Balancing accuracy with financial expense",
            [
                {"title": "Model A (Frontier Heavy)", "lines": ["Pass@1: 52%", "Cost per task: $1.20", "High intelligence, high cost"]},
                {"title": "Model B (Efficient Specialist)", "lines": ["Pass@1: 49%", "Cost per task: $0.08 (15x cheaper!)", "Superior business ROI"]}
            ],
            "Complete the Pass@K sentence",
            "While Pass@K measures whether any candidate in K samples succeeds, {1} measures real-world first-attempt {2} on production tasks.",
            [
                {"answer": "Pass@1", "hint": "Single-attempt success rate", "options": ["Pass@1", "Pass@100", "Zero"]},
                {"answer": "reliability", "hint": "Dependable first-try performance", "options": ["reliability", "formatting", "licensing"]}
            ],
            [
                {"q": "Why is Pass@1 considered the most important metric for developer productivity tools?",
                 "a": ["Developers expect the agent to resolve the issue on the first run; waiting for 10 failed runs wastes developer time and patience", "Pass@1 is required by law", "Pass@1 uses no API tokens", "Pass@1 compiles code to C"],
                 "c": 0, "why": "First-try reliability defines real-world user trust and engineering velocity."},
                {"q": "What does a Pass@1 score of 70% on an internal repo benchmark mean?",
                 "a": ["Out of 100 representative engineering tickets, the agent autonomously resolved and passed all tests on 70 of them on the first attempt", "The agent was 70% fast", "The agent wrote 70 lines of code", "The agent used 70% of RAM"],
                 "c": 0, "why": "Pass@1 measures the exact proportion of tasks resolved on the first autonomous attempt."},
                {"q": "Why do academic papers report Pass@100 instead of Pass@1?",
                 "a": ["To demonstrate the model's upper-bound creative potential when paired with massive computational sampling", "Because Pass@1 is illegal in research", "Because 100 is a round number", "Because Pass@100 uses fewer tokens"],
                 "c": 0, "why": "Pass@K measures whether the correct solution exists within the model's sampling distribution."},
                {"q": "How does 'Best-of-N' reranking improve an agent's effective Pass@1 score in production?",
                 "a": ["The system generates 3 candidate trajectories and uses an automated test suite or judge to select the passing candidate to deliver", "It deletes failing runs", "It makes the model run faster", "It reduces GPU temperature"],
                 "c": 0, "why": "Automated verification filters candidate runs, delivering only the passing trajectory to the user."}
            ],
            "You know how to measure, interpret, and optimize Task Success Rate and Pass@K metrics.",
            "Tool Calling Accuracy and Argument Correctness", "Evaluate whether agents select the right tools and generate valid arguments."
        ),
        build_lesson(
            3, "tool-calling-accuracy-argument-correctness", "Tool Calling Accuracy and Argument Correctness", "Tool Evaluation",
            "Evaluating tool invocation: Tool Selection Accuracy, Schema Validity Rate, and Argument Value Correctness.",
            "What three distinct dimensions should be measured when evaluating an agent's tool-calling capability?",
            ["Tool Selection Accuracy (right tool?), Schema Validity Rate (valid JSON?), and Argument Correctness (right parameters?)", "Speed, Color, and Weight", "RAM, Disk, and CPU", "There is only one dimension"],
            0, "Tool evaluation assesses tool selection, syntactic schema compliance, and semantic argument accuracy.",
            [
                "<p>Before an agent can solve a multi-step task, it must master the mechanics of its tools. If an agent tries to search files by calling <code>execute_sql_query()</code>, or passes a string to an integer parameter, the trajectory fails immediately.</p>",
                "<p>Tool evaluation measures three sequential quality gates:</p>",
                "<ul><li><strong>1. Tool Selection Accuracy:</strong> Given the active state and goal, did the agent choose the optimal tool? (e.g. choosing `grep_search` to find a symbol rather than doing a slow full file read).</li><li><strong>2. Schema Validity Rate:</strong> Did the generated arguments parse cleanly against the tool's JSON Schema? (Zero schema validation errors allowed!).</li><li><strong>3. Argument Value Correctness:</strong> Were the parameter values accurate and effective? (e.g. Did `file_path` point to an actual existing file? Did `regex` compile without errors?).</li></ul>",
                "<pre><code># The Tool Evaluation Metric Suite:\n# Tool Selection Accuracy: = (Correct Tool Invocations) / (Total Tool Calls) [Target: > 98%]\n# Schema Validity Rate:    = (Valid JSON Schema Calls) / (Total Tool Calls) [Target: 100%]\n# Argument Precision:      = (Valid File Paths & Values) / (Total Arguments) [Target: > 95%]</code></pre>",
                "<div class=\"callout\"><p><strong>Diagnostic Power:</strong> If your agent is failing tasks, check Schema Validity first. If schema validity is below 100%, the agent is tripping over syntax before it even begins thinking.</p></div>"
            ],
            "The Three Tool Evaluation Dimensions", "Selection, Schema Syntax, and Argument Precision",
            [
                {"title": "1. Tool Selection (Intent)", "lines": ["Did agent pick the right function?", "e.g. grep_search vs list_dir"]},
                {"title": "2. Schema Validity (Syntax)", "lines": ["Did arguments match JSON Schema?", "Must be 100% error-free"]},
                {"title": "3. Argument Precision (Values)", "lines": ["Did file path exist?", "Were regex patterns valid?"]}
            ],
            "Evaluating Tool Call Failure Modes", "Pinpointing tool breakdowns",
            [
                {"title": "Wrong Tool Selected", "lines": ["Calls bash command to edit file", "Fix: Clarify tool descriptions"]},
                {"title": "Schema Type Error", "lines": ["Passed string '42' to int port", "Fix: Enforce constrained decoding"]}
            ],
            "Complete the tool evaluation sentence",
            "Tool evaluation measures whether the agent picked the right tool, whether arguments satisfied the {1} schema, and whether parameter {2} were accurate.",
            [
                {"answer": "JSON", "hint": "JavaScript Object Notation schema contract", "options": ["JSON", "binary", "HTML"]},
                {"answer": "values", "hint": "Concrete argument parameters like file paths", "options": ["values", "fonts", "licenses"]}
            ],
            [
                {"q": "What causes an agent to have low Tool Selection Accuracy?",
                 "a": ["Overlapping, ambiguous, or poorly written tool descriptions in the tool registry that confuse the model", "The computer hard drive is full", "The tool is written in Python", "The internet was disconnected"],
                 "c": 0, "why": "Ambiguous tool descriptions cause models to confuse similar tools (e.g. read_file vs grep)."},
                {"q": "What should the target Schema Validity Rate be for a production-ready agent?",
                 "a": ["100% (zero schema validation errors permitted during execution)", "50%", "75%", "Schema validity does not matter"],
                 "c": 0, "why": "Schema errors represent avoidable syntactic bugs that disrupt execution loops."},
                {"q": "How does Constrained Decoding help achieve 100% Schema Validity in tool calls?",
                 "a": ["It dynamically masks out all tokens that would violate the tool's JSON Schema during generation", "It makes the tool run for free", "It deletes invalid tools", "It turns off the CPU"],
                 "c": 0, "why": "Constrained decoding physically prevents the model from sampling invalid schema tokens."},
                {"q": "What is an 'Argument Hallucination' in tool calling?",
                 "a": ["When the model passes imaginary file paths, nonexistent database IDs, or fabricated URLs as arguments", "A tool with no arguments", "A tool that takes too long", "A compiler error"],
                 "c": 0, "why": "Argument hallucination occurs when the model invents plausible but fictitious parameter values."}
            ],
            "You know how to evaluate tool selection, schema validity, and argument correctness.",
            "Step Efficiency and Trajectory Analysis", "Measure trajectory length, redundant steps, and wasted tool actions."
        ),
        build_lesson(
            4, "step-efficiency-trajectory-analysis", "Step Efficiency and Trajectory Analysis", "Trajectory Analysis",
            "Analyzing agent efficiency: Step Count, Redundant Action Rate, trajectory diff analysis, and the Cost-to-Solution curve.",
            "Why is 'Step Efficiency' an important evaluation metric alongside raw task success?",
            ["An agent that solves a task in 4 focused steps is vastly cheaper, faster, and less prone to side-effect bugs than one taking 25 meandering steps", "More steps consume less electricity", "Step count has no effect on cost", "Long trajectories run faster"],
            0, "Fewer steps mean lower token consumption, faster turnaround, and minimal risk of unintended side-effect bugs.",
            [
                "<p>Two different agents can both successfully solve a bug. Agent 1 inspects the traceback, edits the file, and runs the test (3 steps). Agent 2 runs 8 irrelevant file searches, reads 4 unrelated files, makes 3 syntax errors, reverts them, and finally fixes the bug (18 steps).</p>",
                "<p>Both agents get a checkmark for task success, but Agent 2 cost <strong>6x more money</strong>, took <strong>5x longer</strong>, and was one turn away from hallucinating an unrelated bug. <strong>Trajectory Analysis</strong> evaluates the efficiency and elegance of the path taken.</p>",
                "<p>Key Trajectory Metrics:</p>",
                "<ul><li><strong>1. Step Count to Solution ($S$):</strong> Total number of tool turns executed before task completion.</li><li><strong>2. Redundant Action Rate:</strong> The percentage of tool calls that repeated previous actions, read the same file twice without edits, or failed with syntax errors.</li><li><strong>3. Search Efficiency:</strong> Did the agent locate the relevant file in 1-2 targeted searches, or did it list 15 directories blindly?</li><li><strong>4. Cost-to-Solution ($C$):</strong> Total dollar cost of tokens consumed across the full trajectory.</li></ul>",
                "<pre><code># Trajectory Efficiency Scorecard:\n# Agent A: Steps: 4  | Cost: $0.06 | Redundant Actions: 0%  (HIGH EFFICIENCY)\n# Agent B: Steps: 19 | Cost: $0.42 | Redundant Actions: 42% (LOW EFFICIENCY - Thrashing!)</code></pre>",
                "<div class=\"callout\"><p><strong>The Trajectory Law:</strong> A shorter trajectory has a smaller blast radius. Every extra tool call is an opportunity for an error to derail the task.</p></div>"
            ],
            "Efficient vs Meandering Trajectory", "Direct execution vs wasteful exploration",
            [
                {"title": "Agent A: Direct Trajectory (4 Steps)", "lines": ["grep_search -> read_file -> edit -> pytest", "Time: 12s, Cost: $0.04, Zero wasted actions"]},
                {"title": "Agent B: Meandering Path (18 Steps)", "lines": ["list_dir -> read_wrong_file -> failed_edit -> retry...", "Time: 75s, Cost: $0.38, High cognitive drag"]}
            ],
            "Redundant Action Detection", "Flagging wasted tool calls",
            [
                {"title": "Duplicate File Reads", "lines": ["Reading auth.py 3 times without editing", "Wastes 15,000 context tokens"]},
                {"title": "Circular Edits", "lines": ["Adding then removing identical lines", "Signals agent hesitation and thrashing"]}
            ],
            "Complete the trajectory analysis sentence",
            "Trajectory analysis evaluates agent efficiency by measuring step count, cost-to-solution, and the percentage of {1} or wasteful tool {2}.",
            [
                {"answer": "redundant", "hint": "Unnecessary repeated actions", "options": ["redundant", "compiled", "encrypted"]},
                {"answer": "actions", "hint": "Tool invocations", "options": ["actions", "monitors", "keyboards"]}
            ],
            [
                {"q": "What is a 'Redundant Tool Action' in an agent trajectory?",
                 "a": ["Reading the same unchanged file multiple times or repeating an identical search query that provides no new information", "A tool that runs in parallel", "A tool with a backup server", "A tool written in C"],
                 "c": 0, "why": "Repeated reads of unchanged state burn tokens without advancing task progress."},
                {"q": "Why does an agent with high step count have a higher probability of catastrophic failure?",
                 "a": ["Each extra step adds noise to the context window and provides another statistical opportunity for a hallucinated or destructive edit", "The computer processor wears out", "The internet gets slower", "Tokens expire after 10 steps"],
                 "c": 0, "why": "Longer trajectories increase the compounding probability of fatal mistakes."},
                {"q": "How can you steer an agent toward shorter, more efficient trajectories?",
                 "a": ["Provide concise repository maps, clear golden reference files, and explicit instructions to formulate targeted searches", "Limit the internet speed", "Write prompts in uppercase", "Delete all tools except one"],
                 "c": 0, "why": "Repository maps and clear guidance eliminate blind, exploratory wandering."},
                {"q": "What metric balances task success with operational cost across an evaluation suite?",
                 "a": ["Cost-per-Resolved-Task: Total token expenditure divided by the number of successfully resolved tasks", "Lines of code per second", "Word count of the prompt", "Monitor refresh rate"],
                 "c": 0, "why": "Cost-per-resolved-task measures true operational financial efficiency."}
            ],
            "You know how to analyze agent trajectories, measure step efficiency, and eliminate redundant actions.",
            "Evaluating Failure Recovery and Error Resilience", "Assess how agents respond when tools fail and errors occur."
        ),
        build_lesson(
            5, "evaluating-failure-recovery-resilience", "Evaluating Failure Recovery and Error Resilience", "Failure Resilience",
            "Resilience benchmarking: testing how agents respond to tool crashes, test failures, permission denials, and unexpected obstacles.",
            "What is 'Failure Recovery Evaluation' in autonomous agent benchmarking?",
            ["Deliberately introducing errors (like broken syntax, missing files, or failing tests) and measuring how effectively the agent diagnoses and recovers", "Testing if the computer can survive being dropped", "Checking if the power cord is plugged in", "Measuring hard drive noise"],
            0, "Failure recovery evals measure the agent's ability to self-correct when confronted with unexpected obstacles.",
            [
                "<p>Any agent can succeed when the path is smooth. What separates a toy from an enterprise-grade agent is <strong>Resilience Under Failure</strong>. When a compiler fails, a database query times out, or a test fails unexpectedly, does the agent panic and thrash, or does it diagnose and recover?</p>",
                "<p>To benchmark agent resilience, engineers use <strong>Fault Injection Testing</strong>:</p>",
                "<ul><li><strong>1. Injected Syntax Errors:</strong> Feed the agent code with an intentional typo or missing bracket and observe if it reads the compiler error and fixes it in 1 turn.</li><li><strong>2. Permission Denials:</strong> Deny access to a file (403 Forbidden) and observe whether the agent gracefully switches to an alternative strategy or crashes.</li><li><strong>3. Flaky / Contradictory Test Injection:</strong> Introduce an error message and verify the agent does not cheat by weakening test assertions!</li><li><strong>4. Recovery Success Rate ($R_{rec}$):</strong> The percentage of injected failure states from which the agent autonomously recovers to full task completion.</li></ul>",
                "<pre><code># Fault Injection Benchmark Matrix:\n# Test Case | Injected Fault             | Target Behavior                       | Result\n# ----------------------------------------------------------------------------------------\n# TC_01     | Missing import in test     | Read traceback, add import to src/    | PASS (1 turn)\n# TC_02     | Read-only database table   | Stop writing, explain permission error| PASS\n# TC_03     | Flaky test failure         | Read line 42, fix underlying logic    | PASS\n# Overall Recovery Resilience Score: 94.2%</code></pre>",
                "<div class=\"callout\"><p><strong>The Chaos Engineering Analogy:</strong> Just like Chaos Monkey injects server failures to test infrastructure, fault injection in agent evals tests cognitive self-healing.</p></div>"
            ],
            "Fault Injection Testing Framework", "Testing cognitive self-healing under failure conditions",
            [
                {"title": "1. Inject Fault", "lines": ["Break syntax on line 12", "Or mock 403 Permission Denied"]},
                {"title": "2. Agent Observes Failure", "lines": ["Receives traceback in tool result", "Enters diagnosis phase"]},
                {"title": "3. Evaluate Recovery", "lines": ["Did agent fix root cause in 1 turn?", "Did it thrash or cheat? (Grade resilience)"]}
            ],
            "Resilient Recovery vs Thrashing Rut", "Comparing behavioral responses to errors",
            [
                {"title": "Resilient Agent", "lines": ["Reads traceback line number", "Formulates targeted hypothesis", "Applies clean fix in 1 turn"]},
                {"title": "Fragile Agent", "lines": ["Panics, edits unrelated files", "Deletes working code, enters infinite loop"]}
            ],
            "Complete the failure resilience sentence",
            "Failure recovery evaluation uses fault {1} to measure how effectively agents diagnose unexpected obstacles and achieve autonomous {2}.",
            [
                {"answer": "injection", "hint": "Deliberately introducing errors", "options": ["injection", "formatting", "licensing"]},
                {"answer": "self-healing", "hint": "Autonomous recovery and repair", "options": ["self-healing", "compilation", "hardware"]}
            ],
            [
                {"q": "What is 'Fault Injection' in AI agent evaluation?",
                 "a": ["Deliberately introducing artificial errors (like broken imports, database timeouts, or permission errors) to test agent recovery", "Injecting electricity into computer chips", "A technique for hacking websites", "A type of SQL injection attack"],
                 "c": 0, "why": "Fault injection tests whether agents can self-correct when things go wrong."},
                {"q": "What is the 'Recovery in One Turn' metric?",
                 "a": ["The percentage of times an agent successfully fixes an encountered error on its very next tool call without thrashing", "The speed of the network router", "The time to download a file", "The number of lines of code"],
                 "c": 0, "why": "One-turn recovery measures rapid, accurate diagnostic comprehension."},
                {"q": "What should an evaluation harness do if an agent resolves a failing test by deleting the test file?",
                 "a": ["Fail the evaluation immediately with a 0% score and flag the agent for sycophantic cheating", "Give the agent a 100% score", "Congratulate the agent", "Delete the repository"],
                 "c": 0, "why": "Deleting or weakening tests is an anti-pattern that must be penalized in evaluation."},
                {"q": "How does testing resilience against 403 Forbidden errors protect production systems?",
                 "a": ["It verifies that when an agent is denied permission to an action, it halts and explains the limitation rather than trying destructive workarounds", "It makes servers run for free", "It turns off the internet", "It encrypts the hard drive"],
                 "c": 0, "why": "Agents must respect security boundaries gracefully when operations are forbidden."}
            ],
            "You know how to benchmark agent failure recovery and cognitive resilience using fault injection.",
            "Mock Environments, Sandboxes, and Deterministic Replay", "Build reproducible, hermetic testing sandboxes for agent evaluations."
        ),
        build_lesson(
            6, "mock-environments-sandboxes-replay", "Mock Environments, Sandboxes, and Deterministic Replay", "Hermetic Sandboxes",
            "Hermetic evaluation environments: Docker sandboxes, mock APIs, deterministic filesystem states, and session replay.",
            "Why must agent evaluation benchmarks run inside isolated, disposable Docker containers?",
            ["To ensure tests are 100% reproducible, prevent agents from damaging host machines, and reset state cleanly between runs", "Because Docker makes models smarter", "Containers are required by Python", "Containers run without electricity"],
            0, "Disposable containers provide hermetic isolation, preventing cross-test pollution and host damage.",
            [
                "<p>If an agent evaluation runs on your local machine, test #1 might create a file named `temp.txt`. When test #2 runs, it finds `temp.txt` already there, altering its behavior! Worse, if an agent runs `git clean -fd`, it might delete your local personal files.</p>",
                "<p>Professional agent evaluation requires <strong>Hermetic Sandboxing</strong>:</p>",
                "<ul><li><strong>1. Disposable Docker Sandboxes:</strong> Every benchmark task spins up a pristine, disposable container with a fixed filesystem state. When the evaluation finishes, the container is destroyed!</li><li><strong>2. Mock External APIs:</strong> Never let benchmark evaluation agents make real HTTP calls to Stripe, GitHub, or AWS! Mock external APIs using tools like WireMock, responses, or local mock servers.</li><li><strong>3. Deterministic State Reset:</strong> Guarantee that git HEAD, database fixtures, and file contents are bit-for-bit identical on every run.</li><li><strong>4. Session Replay:</strong> Record all tool calls and observations so engineers can replay the agent's exact decision tree in a visual debugger!</li></ul>",
                "<pre><code># The Hermetic Benchmark Runner Workflow:\n1. Docker container spins up: `python:3.12-slim`\n2. Git clone repository at commit `a849f2` (Known baseline)\n3. Inject task prompt: \"Fix KeyError in billing.py\"\n4. Agent executes tools inside container (Host machine 100% protected!)\n5. Evaluator runs `pytest` inside container to check exit code.\n6. Container destroyed! Zero residual state!</code></pre>",
                "<div class=\"callout\"><p><strong>The Hermetic Rule:</strong> If an evaluation run cannot be replayed from scratch with identical inputs producing the identical environment state, your benchmark is not scientific.</p></div>"
            ],
            "The Hermetic Container Sandbox", "Isolating agent evaluation runs",
            [
                {"title": "Pristine Container (Task 1)", "lines": ["Spun up from clean Docker image", "Fixed git commit baseline", "Agent executes tools safely"]},
                {"title": "Evaluation & Teardown", "lines": ["Test suite asserts exit code 0", "Container destroyed completely", "Zero residual state pollution!"]}
            ],
            "Mocking External Services", "Isolating benchmarks from the real internet",
            [
                {"title": "Real Internet (Flaky)", "lines": ["Rate limits, network drops, credential leaks", "Non-deterministic benchmark results"]},
                {"title": "Mock API (Deterministic)", "lines": ["WireMock / Local emulator", "Predictable, fast, 100% reproducible"]}
            ],
            "Complete the hermetic sandbox sentence",
            "Hermetic evaluation runs agents inside disposable {1} containers with mock APIs to guarantee reproducible results and prevent state {2}.",
            [
                {"answer": "Docker", "hint": "Containerization platform", "options": ["Docker", "HTML", "Excel"]},
                {"answer": "pollution", "hint": "Contamination between consecutive runs", "options": ["pollution", "compilation", "formatting"]}
            ],
            [
                {"q": "What is a 'Hermetic' test environment in software engineering?",
                 "a": ["An isolated, self-contained environment that has zero unmanaged external dependencies and always starts from a known, fixed state", "A test environment that is open to the public", "An environment with no operating system", "A computer on an airplane"],
                 "c": 0, "why": "Hermetic environments eliminate external variables to ensure pure, reproducible testing."},
                {"q": "Why should evaluation agents be disconnected from the live internet during benchmarks?",
                 "a": ["To prevent rate limits, network latency variations, and ensure the agent cannot cheat by searching Google for solutions", "Because the internet is illegal in testing", "To save electricity", "Internet makes Python run slower"],
                 "c": 0, "why": "Offline evaluation ensures tests evaluate model reasoning rather than live internet search."},
                {"q": "What is 'Session Replay' in agent debugging?",
                 "a": ["The capability to step through an agent's recorded thoughts, tool calls, and observations turn-by-turn after execution completes", "Playing a video game recording", "Restarting the computer", "Re-running a YouTube video"],
                 "c": 0, "why": "Session replay allows engineers to inspect the exact cognitive steps leading to a failure."},
                {"q": "How does running benchmarks in Docker containers protect developer laptops?",
                 "a": ["Any destructive shell commands or accidental file deletions are confined entirely inside the disposable container", "It cools the laptop battery", "It prevents screens from cracking", "It speeds up the keyboard"],
                 "c": 0, "why": "Containerization isolates the host filesystem from unintended agent actions."}
            ],
            "You know how to build hermetic Docker sandboxes and deterministic replay harnesses for agent evaluations.",
            "Benchmarking Autonomous Agents with SWE-bench", "Explore the world's most prestigious software engineering benchmark."
        ),
        build_lesson(
            7, "benchmarking-agents-swe-bench", "Benchmarking Autonomous Agents with SWE-bench", "SWE-bench",
            "The premier software engineering benchmark: SWE-bench architecture, test patches, SWE-bench Lite/Verified, and leaderboards.",
            "What makes SWE-bench (Jimenez et al., 2023) the gold standard benchmark for autonomous AI coding agents?",
            ["It tests agents on 2,294 real, complex GitHub issues from major open-source Python repos, requiring multi-file navigation and passing test patches", "It tests how fast models can type", "It tests models on multiple-choice trivia", "It is run by the United Nations"],
            0, "SWE-bench evaluates real-world engineering: navigating complex repos, writing code diffs, and passing real repository test suites.",
            [
                "<p>Before 2023, coding benchmarks tested toy functions (HumanEval: <em>'Write a function to check if a word is a palindrome'</em>). In late 2023, Princeton and University of Chicago researchers published <strong>SWE-bench</strong>, completely transforming how coding agents are judged.</p>",
                "<p>How SWE-bench Works:</p>",
                "<ul><li><strong>1. Real GitHub Issues:</strong> 2,294 real historical issues pulled from 12 prominent open-source Python libraries (Django, SymPy, scikit-learn, Sphinx, Flask).</li><li><strong>2. The Test Patch:</strong> Each issue has an associated reference commit containing the real human developer's fix and the <strong>reproduction test patch</strong>.</li><li><strong>3. The Execution Challenge:</strong> The agent receives only the problem description. It must clone the repo, find the relevant files across thousands of lines, write a git diff patch, and execute the repository's test suite!</li><li><strong>4. Objective Grading:</strong> If the agent's patch makes the failing tests pass <strong>AND does not break any existing passing tests</strong>, the issue is scored as RESOLVED.</li></ul>",
                "<pre><code># The SWE-bench Variants:\n# 1. SWE-bench Full:     2,294 issues (Massive, expensive to run full suite)\n# 2. SWE-bench Lite:       300 issues (Curated high-signal subset for fast evaluation)\n# 3. SWE-bench Verified:   500 issues (Human-verified by professional software engineers\n#                                      to guarantee problem descriptions are unambiguous!)</code></pre>",
                "<div class=\"callout\"><p><strong>The Frontier Barometer:</strong> Leading models (Claude 3.5 Sonnet, OpenAI o1, DeepSeek R1) score 40% to 55% on SWE-bench Verified. It remains the most respected benchmark of autonomous software engineering capability.</p></div>"
            ],
            "SWE-bench Architecture", "Evaluating real-world software engineering agency",
            [
                {"title": "1. Real GitHub Issue", "lines": ["Real bug report from Django / SymPy", "Unstructured description written by human"]},
                {"title": "2. Agent Explores & Edits", "lines": ["Navigates 50,000-line repository", "Emits git diff patch"]},
                {"title": "3. Automated Test Verification", "lines": ["Runs repo's real pytest / tox suite", "PASS: Issue resolved! FAIL: Regression!"]}
            ],
            "SWE-bench Tiers", "Full vs Lite vs Verified",
            [
                {"title": "SWE-bench Full (2,294)", "lines": ["Exhaustive open-source dataset", "Takes days of compute to run"]},
                {"title": "SWE-bench Verified (500)", "lines": ["Human-audited by senior engineers", "Gold-standard leaderboard metric"]}
            ],
            "Complete the SWE-bench sentence",
            "SWE-bench evaluates autonomous coding agents by testing whether generated git diffs resolve real GitHub issues and pass the repository's {1} {2}.",
            [
                {"answer": "test", "hint": "Automated verification suite", "options": ["test", "license", "marketing"]},
                {"answer": "suite", "hint": "Collection of unit and integration tests", "options": ["suite", "keyboard", "monitor"]}
            ],
            [
                {"q": "What two conditions must be satisfied for a SWE-bench task to be scored as 'Resolved'?",
                 "a": ["The agent's patch must make the failing reproduction test pass, and all existing passing tests must continue to pass without regression", "The agent must write documentation and push to main", "The code must be formatted with Prettier", "The agent must finish in 1 second"],
                 "c": 0, "why": "Resolving an issue requires fixing the defect while introducing zero regressions in existing tests."},
                {"q": "What is SWE-bench Verified?",
                 "a": ["A curated subset of 500 issues validated by professional software engineers to ensure problem descriptions are clear and solvable", "A paid version of SWE-bench", "A test for computer security", "A benchmark for verified Twitter accounts"],
                 "c": 0, "why": "SWE-bench Verified removes ambiguous or underspecified issues through human engineering audits."},
                {"q": "What programming language is the primary focus of the official SWE-bench dataset?",
                 "a": ["Python", "Rust", "Java", "C++"],
                 "c": 0, "why": "SWE-bench was constructed from 12 popular open-source Python repositories (Django, scikit-learn, etc.)."},
                {"q": "Why is SWE-bench vastly more difficult for models than HumanEval?",
                 "a": ["HumanEval provides the exact function signature to complete; SWE-bench requires finding which of 500 files to edit in a 100k-line repo", "SWE-bench is written in binary", "HumanEval uses harder math", "SWE-bench has no documentation"],
                 "c": 0, "why": "SWE-bench tests repository navigation, multi-file comprehension, and dependency tracking in large codebases."}
            ],
            "You understand the architecture, evaluation criteria, and significance of the SWE-bench benchmark.",
            "Building an Agent Evaluation Harness for Your Repository", "Synthesize everything: build a custom agent eval harness for your own codebase."
        ),
        build_lesson(
            8, "building-custom-agent-eval-harness", "Building an Agent Evaluation Harness for Your Repository", "Custom Agent Evals",
            "Synthesizing agent evaluation: building an internal evaluation harness for your own codebase with task cards, sandboxes, and metrics.",
            "Why should an engineering team build a private, internal agent evaluation harness for their own codebase?",
            ["Public benchmarks like SWE-bench test open-source Python libraries; private harnesses evaluate your company's proprietary frameworks, languages, and architecture", "Private harnesses are legally required", "Public benchmarks are illegal for companies", "Private harnesses use no electricity"],
            0, "Private evaluation harnesses measure agent performance directly against your proprietary stack and internal conventions.",
            [
                "<p>SWE-bench is great for comparing frontier models on Twitter. But your company does not build Django; you build a proprietary React/FastAPI microservice with custom internal libraries, idiosyncratic databases, and unique architectural invariants. To know if an agent works for <em>your team</em>, you must build an <strong>Internal Agent Eval Harness</strong>.</p>",
                "<p>A Production Internal Agent Evaluation Architecture:</p>",
                "<ul><li><strong>1. The Task Card Bank (`evals/tasks/`):</strong> 20 to 50 realistic historical tasks drawn from your team's real Jira tickets or git pull requests: each has an issue prompt, starting git commit hash, and a verification test script.</li><li><strong>2. Containerized Runner:</strong> Uses Docker to spin up your local dev environment (database, backend, frontend) at the starting commit.</li><li><strong>3. Agent Execution:</strong> Unleashes the agent with its toolset, capping execution at 15 turns or $2.00 cost.</li><li><strong>4. Objective Verification:</strong> Runs the verification script. Calculates Pass@1, Step Efficiency, and Token Cost.</li><li><strong>5. Scorecard Reporting:</strong> Generates an executive scorecard comparing agent versions across your proprietary stack!</li></ul>",
                "<pre><code># Internal Agent Task Card Schema (YAML):\ntask_id: \"TICKET-492-tenant-isolation\"\ndescription: \"Ensure all customer invoices are filtered by tenant_id\"\nstarting_commit: \"c8491a2b\"\nallowed_tools: [\"read_file\", \"replace_string\", \"run_in_terminal\"]\ntimeout_seconds: 300\nverification:\n  command: \"pytest tests/test_tenant_isolation.py\"\n  expected_exit_code: 0</code></pre>",
                "<div class=\"callout\"><p><strong>The Final Engineering Truth:</strong> You have completed the Agent Evaluation course. You now possess the complete scientific toolkit to measure, benchmark, and deploy autonomous AI agents with empirical confidence.</p></div>"
            ],
            "The Internal Agent Evaluation Architecture", "Evaluating agents against proprietary company codebases",
            [
                {"title": "1. Task Card Bank (YAML)", "lines": ["20-50 real historical Jira tickets", "Starting commit + test verification command"]},
                {"title": "2. Ephemeral Sandbox", "lines": ["Docker container checks out starting commit", "Spins up local test databases"]},
                {"title": "3. Agent Autonomous Run", "lines": ["Agent navigates repo & modifies files", "Bounded by 15 turns & cost caps"]},
                {"title": "4. Verification & Scorecard", "lines": ["Executes test suite -> Computes Pass@1", "Generates team capability scorecard"]}
            ],
            "The Competitive Advantage", "Tuning AI to your specific repository",
            [
                {"title": "Generic Public Benchmark", "lines": ["Tells you how model solves Django", "Zero insight into your internal stack"]},
                {"title": "Internal Repo Harness", "lines": ["Proves agent solves YOUR tickets", "Enables data-driven agent customization"]}
            ],
            "Complete the custom agent eval sentence",
            "An internal agent evaluation harness measures performance against proprietary code using a bank of historical task {1} executed in containerized {2}.",
            [
                {"answer": "cards", "hint": "Structured task specifications", "options": ["cards", "cables", "monitors"]},
                {"answer": "sandboxes", "hint": "Isolated ephemeral testing environments", "options": ["sandboxes", "browsers", "keyboards"]}
            ],
            [
                {"q": "What is the primary benefit of basing internal agent task cards on real historical bug tickets?",
                 "a": ["They represent the exact complexity, file structures, and edge cases that your engineering team encounters daily", "Historical tickets are easier to solve", "Historical tickets use fewer tokens", "It avoids writing tests"],
                 "c": 0, "why": "Real historical tickets provide realistic, representative engineering challenges."},
                {"q": "How many task cards are recommended to build an initial internal agent evaluation benchmark?",
                 "a": ["20 to 30 well-curated, representative tasks covering different architectural layers", "At least 500,000 tasks", "Exactly 1 task", "Zero tasks"],
                 "c": 0, "why": "20-30 diverse tasks provide immediate, actionable diagnostic signal without excessive compute expense."},
                {"q": "What should the verification step in an internal task card execute?",
                 "a": ["An automated test script (e.g. pytest or npm test) that tests the specific bug fix and verifies that no regressions were introduced", "A print statement", "A git push command", "A database wipe"],
                 "c": 0, "why": "Automated test scripts provide objective, reproducible verification of task completion."},
                {"q": "What is the ultimate mark of an organization that has mastered AI-assisted engineering?",
                 "a": ["They measure agent capabilities on their own codebase using internal eval harnesses, continuously improving prompts, tools, and workflows scientifically", "They let agents deploy directly to production without testing", "They ban all AI tools", "They hire 500 manual QA testers"],
                 "c": 0, "why": "Empirical measurement, internal benchmarking, and continuous iteration define AI engineering mastery."}
            ],
            "You have completed the Agent Evaluation course.",
            "Next Level: AI Guardrails, Routing & Production Architecture", "Learn how to bound system behavior with guardrails, route requests across models, and deploy reliable production AI systems."
        )
    ]

    glossary = [
        {"id": "agency-eval", "title": "Agency & Trajectories", "terms": [
            {"term": "Agent Evaluation", "def": "The discipline of quantitatively measuring multi-step autonomous behavior, tool correctness, and end-state task success.", "lesson": 1, "tags": ["agents", "evals"]},
            {"term": "End-State Principle", "def": "Evaluating agents based on the final physical and digital state of the environment rather than intermediate thoughts.", "lesson": 1, "tags": ["methodology", "evals"]},
            {"term": "Trajectory Analysis", "def": "Evaluating the sequence of tool calls and actions an agent takes to measure efficiency, redundancy, and cost.", "lesson": 4, "tags": ["agents", "trajectories"]}
        ]},
        {"id": "metrics-pass", "title": "Pass Metrics & Tools", "terms": [
            {"term": "Pass@1", "def": "The percentage of benchmark problems an agent successfully resolves on its first single autonomous attempt.", "lesson": 2, "tags": ["metrics", "reliability"]},
            {"term": "Pass@K", "def": "A metric measuring whether at least one correct solution is found across K independent candidate attempts.", "lesson": 2, "tags": ["metrics", "sampling"]},
            {"term": "Tool Selection Accuracy", "def": "The proportion of agent turns where the model selects the optimal tool for the active problem state.", "lesson": 3, "tags": ["tools", "metrics"]}
        ]},
        {"id": "resilience-bench", "title": "Resilience & SWE-bench", "terms": [
            {"term": "Fault Injection", "def": "Deliberately introducing broken syntax, timeouts, or permission errors to test agent self-healing resilience.", "lesson": 5, "tags": ["testing", "resilience"]},
            {"term": "SWE-bench", "def": "The gold-standard benchmark testing agents on resolving 2,294 real-world GitHub issues from open-source Python repos.", "lesson": 7, "tags": ["benchmarks", "swe-bench"]},
            {"term": "Hermetic Sandbox", "def": "An isolated, disposable container environment providing deterministic starting state for reproducible testing.", "lesson": 6, "tags": ["docker", "sandboxes"]}
        ]},
        {"id": "internal-harness", "title": "Internal Harness & Operations", "terms": [
            {"term": "Internal Task Card", "def": "A structured benchmark specification drawn from real company tickets containing starting commits and verification commands.", "lesson": 8, "tags": ["internal", "benchmarks"]},
            {"term": "Cost-to-Solution", "def": "The total financial dollar cost of API tokens consumed by an agent across an entire multi-turn trajectory.", "lesson": 4, "tags": ["economics", "metrics"]},
            {"term": "Session Replay", "def": "Recording and stepping through an agent's historical thoughts and tool calls in a visual debugger.", "lesson": 6, "tags": ["debugging", "tooling"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "Pass@1 Benchmark Calculation",
            "label": "First-attempt success rate",
            "code": "resolved = sum(1 for task in results if task.test_exit_code == 0)\npass_at_1 = resolved / len(results)\nprint(f\"Agent Pass@1: {pass_at_1 * 100:.1f}%\")",
            "lessonN": 2, "lessonSlug": "task-success-and-pass-at-k", "lessonTitle": "Task Success and Pass@K Metrics"
        },
        {
            "title": "Internal Task Card Schema (YAML)",
            "label": "Custom repository benchmark task",
            "code": "task_id: \"ISSUE-104-billing-race-condition\"\nprompt: \"Fix race condition in withdraw_funds() using atomic row locks\"\nbase_commit: \"f8491c2\"\nverification:\n  command: \"pytest tests/test_concurrency.py\"\n  expected_exit_code: 0",
            "lessonN": 8, "lessonSlug": "building-custom-agent-eval-harness", "lessonTitle": "Building an Agent Evaluation Harness for Your Repository"
        },
        {
            "title": "Hermetic Docker Test Execution",
            "label": "Disposable sandbox runner",
            "code": "# Run agent task inside clean disposable container:\ndocker run --rm -v $(pwd)/repo:/workspace \\\n    -e TASK_ID=ISSUE-104 \\\n    agent-runner:latest python -m agent.run_task",
            "lessonN": 6, "lessonSlug": "mock-environments-sandboxes-replay", "lessonTitle": "Mock Environments, Sandboxes, and Deterministic Replay"
        },
        {
            "title": "Trajectory Redundancy Check",
            "label": "Detecting wasted tool calls",
            "code": "# Detect identical consecutive tool calls:\nredundant = sum(1 for i in range(1, len(trajectory))\n    if trajectory[i].tool == trajectory[i-1].tool and trajectory[i].args == trajectory[i-1].args)\nprint(f\"Redundant Action Rate: {redundant / len(trajectory) * 100:.1f}%\")",
            "lessonN": 4, "lessonSlug": "step-efficiency-trajectory-analysis", "lessonTitle": "Step Efficiency and Trajectory Analysis"
        }
    ]

    course_data = {
        "id": "agent-evaluation",
        "title": "Agent Evaluation",
        "num": 85,
        "emoji": "🧭",
        "desc": "Scoring multi-step behaviour: task success, tool correctness, cost per task and failure recovery.",
        "topics": ["Agent Evaluation", "End-State Principle", "Pass@1", "Tool Accuracy", "Trajectory Analysis", "Fault Injection", "Hermetic Sandboxes", "SWE-bench", "Internal Harness"],
        "mission": "# Mission — Agent Evaluation\n\nMaster the science of evaluating multi-step autonomous AI agents. Adopt the End-State Principle, measure task success with Pass@1 and Pass@K, audit tool selection accuracy and schema validity, analyze trajectory step efficiency and redundant actions, benchmark failure recovery using fault injection, build hermetic Docker sandboxes with deterministic replay, analyze SWE-bench architecture, and construct custom agent evaluation harnesses for proprietary codebases.",
        "notes": "# Notes — Agent Evaluation\n\nDo not evaluate agents on intermediate words. Evaluate agents on whether the environment's test suite passes with exit code 0. Measure Pass@1 and cost-per-resolved-task.",
        "resources": "# Resources — Agent Evaluation\n\n- Carlos E. Jimenez et al., *SWE-bench: Can Language Models Resolve Real-World GitHub Issues?*\n- Mark Chen et al., *Evaluating Large Language Models Trained on Code (HumanEval / Pass@K)*\n- Shunyu Yao et al., *SWE-agent: Agent-Computer Interfaces for Software Engineering*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

if __name__ == "__main__":
    make_course_81()
    make_course_82()
    make_course_83()
    make_course_84()
    make_course_85()


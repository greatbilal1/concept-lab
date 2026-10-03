import os
import sys
from helpers import build_lesson, save_course

# ==============================================================================
# COURSE 47: testing-fundamentals
# ==============================================================================
def make_course_47():
    lessons = [
        build_lesson(
            1, "why-we-test-code", "Why We Test Code", "Confidence & Regressions",
            "Why software testing exists: preventing regressions, enabling confident refactoring, and providing living documentation.",
            "Why do automated test suites provide more value over time than manual testing?",
            ["Automated tests run repeatedly with zero marginal cost on every commit", "Automated tests make software run 10x faster in production", "Automated tests eliminate the need for writing code documentation", "Automated tests guarantee that code has zero security bugs"],
            0, "Automated tests provide fast, reproducible feedback on every code change without human overhead.",
            [
                "<p>Software development without automated tests is like walking a tightrope without a net. In the early stages of a small script, manual testing seems sufficient: you run the code, check the print statement, and move on. But as codebases grow to hundreds of modules, every new feature or bug fix risks silently breaking unrelated components. This is called a <strong>regression</strong>.</p>",
                "<p>Automated tests transform uncertainty into repeatable verification. When tests run in seconds on every change, developers can refactor complex logic with confidence. The test suite acts as <strong>living documentation</strong> that never goes out of date because failing tests immediately halt the build.</p>",
                "<pre><code># Python test example with pytest\ndef test_calculate_discount_percentage():\n    price = 100.0\n    discount_pct = 0.20\n    result = calculate_discount(price, discount_pct)\n    assert result == 80.0</code></pre>",
                "<p>A test is fundamentally an automated experiment: given a known initial state and a specific input, does the system produce the expected output without side effects?</p>",
                "<div class=\"callout\"><p><strong>Core Rule:</strong> Test behavior and business outcomes, not private implementation details. When tests verify internal mechanics, refactoring breaks the tests even when the feature works perfectly.</p></div>"
            ],
            "The Regression Prevention Loop", "How automated tests catch defects before production",
            [
                {"title": "1. Code Change", "lines": ["Developer alters logic", "Risk of unintended regression"]},
                {"title": "2. Test Runner", "lines": ["Executes 500 assertions", "Runtime: 1.8 seconds"]},
                {"title": "3. Immediate Feedback", "lines": ["PASS: merge safely", "FAIL: pinpoint exact breakage"]}
            ],
            "Test Execution Flow", "What happens when pytest runs",
            [
                {"title": "Test Discovery", "lines": ["Scan test_*.py files", "Identify test functions"]},
                {"title": "Execution", "lines": ["Run arrange phase", "Execute act & assert"]},
                {"title": "Report", "lines": ["Summary of passes & fails", "Traceback for exceptions"]}
            ],
            "Complete the sentence about testing benefits",
            "The primary purpose of automated tests is to prevent {1} and enable confident {2}.",
            [
                {"answer": "regressions", "hint": "Unintended bugs in existing features", "options": ["regressions", "compilations", "deployments"]},
                {"answer": "refactoring", "hint": "Improving code structure safely", "options": ["refactoring", "rewriting", "formatting"]}
            ],
            [
                {"q": "What is a regression in software development?", "a": ["A bug introduced into previously working functionality by a new change", "A mathematical technique for data analysis", "The process of downgrading software to an older version", "A compiler error that prevents binary creation"], "c": 0, "why": "A regression occurs when a recent code change breaks existing, working behavior."},
                {"q": "Why is testing behavior superior to testing implementation details?", "a": ["Behavior-focused tests survive internal refactoring without breaking", "Implementation tests run significantly faster in memory", "Behavior tests are only needed for frontend web interfaces", "Implementation tests require fewer lines of assertions"], "c": 0, "why": "If a test only checks public behavior, you can freely refactor private internals without rewriting test suites."},
                {"q": "What role does a test suite play in code documentation?", "a": ["It demonstrates verifiable, executable examples of how APIs work", "It automatically generates PDF user manuals", "It translates code comments into multiple natural languages", "It replaces the need for variable type annotations"], "c": 0, "why": "Tests serve as unambiguous executable specifications showing real inputs and outputs."},
                {"q": "When is the most cost-effective time to catch a software defect?", "a": ["During automated test execution in the local development loop", "After deploying to production customers", "During annual manual security audits", "When customers submit refund tickets"], "c": 0, "why": "The earlier in the development lifecycle a defect is caught, the cheaper and faster it is to fix."}
            ],
            "You understand the fundamental economic and engineering necessity of automated testing.",
            "The Anatomy of a Test: Arrange, Act, Assert", "Learn the universal three-phase structure of every clear, maintainable test."
        ),
        build_lesson(
            2, "arrange-act-assert", "The Anatomy of a Test: Arrange, Act, Assert", "Test Structure",
            "Structuring tests with the universal AAA pattern: Arrange preconditions, Act on the system, Assert outcomes.",
            "What is the risk of interleaving multiple actions and assertions inside a single test?",
            ["The test becomes hard to diagnose when an early assertion fails and hides subsequent checks", "The operating system refuses to execute more than two assertions", "The test runner runs out of RAM", "The code compiler fails with a syntax exception"],
            0, "A single clear Act step with focused Assertions makes test failures instantly identifiable.",
            [
                "<p>Every good test follows a clear, predictable narrative structure. The industry standard pattern is known as <strong>AAA (Arrange, Act, Assert)</strong>, also known in behavior-driven development as <em>Given, When, Then</em>.</p>",
                "<p>When every test in a project conforms to this three-phase structure, developers can read any failure in seconds without deciphering convoluted setup code.</p>",
                "<pre><code>def test_transfer_funds_between_accounts():\n    # 1. ARRANGE: Set up initial state and inputs\n    sender = Account(balance=500)\n    recipient = Account(balance=100)\n    transfer_service = TransferService()\n\n    # 2. ACT: Execute the single behavior under test\n    transfer_service.transfer(sender, recipient, amount=200)\n\n    # 3. ASSERT: Verify the expected outcomes and invariants\n    assert sender.balance == 300\n    assert recipient.balance == 300</code></pre>",
                "<p>Notice that the <strong>Act</strong> phase is a single concise action. If your test requires five consecutive actions with assertions scattered between them, you are likely writing an end-to-end workflow test rather than a clean unit test.</p>",
                "<div class=\"callout\"><p><strong>Tip:</strong> Keep the Arrange phase minimal. Only instantiate objects directly relevant to the specific behavior being asserted.</p></div>"
            ],
            "The AAA Pattern", "Three distinct steps in every test function",
            [
                {"title": "1. Arrange", "lines": ["Instantiate objects", "Seed mock data"]},
                {"title": "2. Act", "lines": ["Call the function under test", "Capture return value or exception"]},
                {"title": "3. Assert", "lines": ["Verify final state", "Check return values"]}
            ],
            "Execution Trace of a Test", "How test runners isolate phases",
            [
                {"title": "Setup Scope", "lines": ["sender: 500, recipient: 100", "State is pristine"]},
                {"title": "Method Invocation", "lines": ["transfer(amount=200)", "Balances mutate"]},
                {"title": "Assertion Gate", "lines": ["300 == 300 (PASS)", "300 == 300 (PASS)"]}
            ],
            "Fill in the AAA test phases",
            "In the AAA pattern, you {1} preconditions, {2} by invoking the behavior, and {3} the expected outcome.",
            [
                {"answer": "arrange", "hint": "Prepare inputs and state", "options": ["arrange", "assert", "analyze"]},
                {"answer": "act", "hint": "Trigger the behavior", "options": ["act", "alter", "audit"]},
                {"answer": "assert", "hint": "Verify the result", "options": ["assert", "archive", "assign"]}
            ],
            [
                {"q": "What happens in the Arrange phase of a test?", "a": ["You initialize objects, configure inputs, and prepare the test environment", "You execute the main business logic method", "You verify database tables and raise errors", "You shut down the test server"], "c": 0, "why": "Arrange is dedicated strictly to setting up test preconditions."},
                {"q": "Why should the Act phase typically consist of only one primary operation?", "a": ["To ensure the test isolates a single observable behavior and fails for one specific reason", "Because test frameworks crash if more than one method is called", "To prevent CPU overheating during continuous integration", "Because Python functions can only return a single integer"], "c": 0, "why": "Single-action tests provide unambiguous diagnostic value when an assertion fails."},
                {"q": "What is the Behavior-Driven Development (BDD) equivalent of AAA?", "a": ["Given, When, Then", "Read, Eval, Print", "Start, Process, End", "Model, View, Controller"], "c": 0, "why": "Given maps to Arrange, When maps to Act, and Then maps to Assert."},
                {"q": "What is a common smell in the Arrange phase?", "a": ["Over-arranging: creating complex, irrelevant object graphs that obscure the test intent", "Using variables with descriptive names", "Splitting tests into separate files", "Running tests on local machines"], "c": 0, "why": "Over-arranging makes tests brittle and difficult to maintain."}
            ],
            "You know how to structure clean, readable tests using Arrange, Act, Assert.",
            "Assertions and Informative Failure Messages", "Make test failures self-diagnosing with precise assertions."
        ),
        build_lesson(
            3, "assertions-and-failure-messages", "Assertions and Informative Failure Messages", "Assertions",
            "Writing assertions that catch bugs cleanly and generate informative, actionable error diagnostics.",
            "What makes a poor assertion in an automated test?",
            ["Asserting only 'assert result is True' without checking the underlying data payload", "Asserting exact numeric values", "Using built-in equality operators", "Asserting that an exception was raised"],
            0, "Vague boolean assertions yield uninformative failure messages like 'assert False is True' instead of showing mismatched values.",
            [
                "<p>An assertion is the verification engine of your test. When an assertion passes, execution proceeds silently. But when an assertion fails, it must answer two questions immediately: <strong>what was expected</strong>, and <strong>what actually happened</strong>.</p>",
                "<p>Modern test frameworks like pytest inspect Python bytecode to produce rich diffs automatically. When comparing dictionaries, lists, or custom objects, equality checks show exact discrepancies line-by-line.</p>",
                "<pre><code># POOR: Obscures the real difference\nassert validate_user(user) == True  # Fails with: assert False == True\n\n# GOOD: Compares specific data structures\nerrors = validate_user(user)\nassert errors == []  # Fails with: assert ['email is invalid'] == []\n\n# Testing exceptions with pytest.raises\nimport pytest\n\nwith pytest.raises(ValueError, match=\"Insufficient balance\"):\n    account.withdraw(1000)</code></pre>",
                "<p>Always verify exception types and error messages when testing negative cases. A test that only checks that <em>any</em> exception was thrown can pass if your code crashes from an unrelated syntax or import error.</p>",
                "<div class=\"callout\"><p><strong>Rule:</strong> Never catch exceptions in tests unless you are specifically testing error handling logic with `pytest.raises`.</p></div>"
            ],
            "Assertion Diagnostics", "How pytest provides detailed diffs on failure",
            [
                {"title": "Left (Actual)", "lines": ["status: 'pending'", "retries: 3"]},
                {"title": "Operator", "lines": ["==", "Deep value equality"]},
                {"title": "Right (Expected)", "lines": ["status: 'completed'", "retries: 3"]}
            ],
            "Exception Assertion Flow", "Verifying error boundaries",
            [
                {"title": "Context Manager", "lines": ["with pytest.raises(ValueError)", "Watch for expected error"]},
                {"title": "Execute Act", "lines": ["account.withdraw(99999)", "Error is raised"]},
                {"title": "Validation", "lines": ["Match error message regex", "Confirm type is ValueError"]}
            ],
            "Complete the assertion statement",
            "When testing negative error handling, use {1} to verify both the exception type and the {2}.",
            [
                {"answer": "pytest.raises", "hint": "Pytest context manager for exceptions", "options": ["pytest.raises", "try_catch", "assert_error"]},
                {"answer": "error message", "hint": "Text explaining why the failure happened", "options": ["error message", "stack size", "memory address"]}
            ],
            [
                {"q": "Why is 'assert len(items) == 3' often better than 'assert bool(items)'?", "a": ["It specifies the exact expected quantity, providing a clearer failure diff if items has 2 or 4 entries", "It executes in fewer CPU cycles", "It prevents memory leaks in Python", "It automatically converts lists into tuples"], "c": 0, "why": "Specific assertions clarify the expected contract and provide exact numeric discrepancies on failure."},
                {"q": "How does pytest handle assertion failures differently than vanilla Python assert?", "a": ["Pytest rewrites bytecode to show intermediate variable values and diffs", "Pytest catches assertions and ignores them in CI", "Pytest prints machine assembly instructions", "Pytest converts all failures into HTTP 500 errors"], "c": 0, "why": "Pytest assertion rewriting inspects the expressions to produce readable visual diffs."},
                {"q": "What is the danger of writing 'except Exception: pass' inside test code?", "a": ["It swallows legitimate failures, turning broken code into false passes", "It doubles the execution time of the suite", "It breaks git version control history", "It triggers compiler syntax warnings"], "c": 0, "why": "Silent exception handling hides critical regressions and defeats the purpose of testing."},
                {"q": "When testing that a function rejects invalid input, what should you verify?", "a": ["That the specific expected exception type and informative message are produced", "That the program terminates with exit code 1", "That the function returns None silently", "That the terminal prints red text"], "c": 0, "why": "Testing the specific exception type prevents accidental passes caused by unrelated bugs."}
            ],
            "You can craft precise, communicative assertions that explain failures clearly.",
            "Test Fixtures and Setup/Teardown", "Manage reusable test resources cleanly without side effects."
        ),
        build_lesson(
            4, "test-fixtures-and-setup", "Test Fixtures and Setup/Teardown", "Fixtures",
            "Creating clean, reproducible test environments using fixtures and managing resource lifecycle safely.",
            "What is the primary danger of tests sharing mutable global state?",
            ["Test order dependency: test A mutates state, causing test B to pass or fail depending on execution order", "Tests run too quickly to be measured", "Python deletes the fixture file automatically", "The terminal loses its color formatting"],
            0, "Shared mutable state makes tests order-dependent, brittle, and impossible to run in parallel.",
            [
                "<p>Tests must be <strong>isolated and independent</strong>. Running test 10 after test 1 should yield the exact same result as running test 10 alone. If test 1 creates a record in a shared database and forgets to clean it up, test 10 might fail unpredictably.</p>",
                "<p>In modern testing frameworks like pytest, <strong>fixtures</strong> manage the creation and destruction of test dependencies. Fixtures can supply sample data, database connections, API clients, or temporary directories.</p>",
                "<pre><code>import pytest\n\n@pytest.fixture\ndef sample_user():\n    # Setup: Create isolated resource\n    user = User(id=1, email=\"test@example.com\", role=\"editor\")\n    yield user\n    # Teardown: Clean up resource (runs even if test fails)\n    user.cleanup()\n\ndef test_user_can_edit(sample_user):\n    assert sample_user.can_edit() is True</code></pre>",
                "<p>The `yield` statement elegantly splits the fixture into <strong>setup</strong> (before the yield) and <strong>teardown</strong> (after the yield). Even if the test raises an unhandled assertion failure, pytest guarantees the teardown code runs, preventing state pollution.</p>",
                "<div class=\"callout\"><p><strong>Rule of Thumb:</strong> Favor default `function` scope for fixtures. Only elevate to `module` or `session` scope for strictly read-only or expensive immutable resources like pre-compiled schemas.</p></div>"
            ],
            "Fixture Lifecycle", "Setup, yield, execution, and guaranteed teardown",
            [
                {"title": "1. Fixture Setup", "lines": ["Create in-memory DB", "Seed default rows"]},
                {"title": "2. Test Execution", "lines": ["Test interacts with DB", "Assertions run"]},
                {"title": "3. Fixture Teardown", "lines": ["Rollback transaction", "Drop temporary tables"]}
            ],
            "Fixture Scopes", "Controlling sharing vs isolation",
            [
                {"title": "Function Scope", "lines": ["Fresh instance per test", "Maximum isolation (default)"]},
                {"title": "Module Scope", "lines": ["Created once per file", "Shared across tests in file"]},
                {"title": "Session Scope", "lines": ["Created once per run", "Use only for read-only resources"]}
            ],
            "Fill in the fixture lifecycle keywords",
            "In pytest fixtures, setup code runs before the {1} statement, and teardown code runs {2}.",
            [
                {"answer": "yield", "hint": "Python keyword used to supply the fixture value", "options": ["yield", "return", "await"]},
                {"answer": "afterwards", "hint": "Execution timing of teardown logic", "options": ["afterwards", "immediately", "concurrently"]}
            ],
            [
                {"q": "Why is fixture teardown guaranteed in pytest?", "a": ["Pytest wraps the fixture generator in a try-finally block internally", "Pytest reboots the computer after each test", "The operating system forcibly resets the RAM", "Python garbage collector deletes all modules"], "c": 0, "why": "Pytest guarantees teardown execution using try-finally mechanics around fixture generators."},
                {"q": "What is the consequence of modifying a session-scoped fixture in one test?", "a": ["It pollutes the shared fixture state, potentially causing subsequent tests to fail unexpectedly", "It speeds up the entire test suite", "It converts all tests into unit tests", "Pytest immediately converts the fixture to function scope"], "c": 0, "why": "Session fixtures are shared; mutating them introduces dangerous cross-test coupling."},
                {"q": "What built-in pytest fixture provides a temporary directory unique to each test invocation?", "a": ["tmp_path", "temp_folder", "os_temp", "virtual_disk"], "c": 0, "why": "pytest provides the `tmp_path` fixture (a pathlib.Path object) for isolated file operations."},
                {"q": "How do you pass a fixture into a test function in pytest?", "a": ["Add the fixture name as an argument in the test function signature", "Import the fixture globally in every test", "Decorate the test with @pytest.use_fixture", "Call the fixture function manually inside the test body"], "c": 0, "why": "Pytest resolves fixtures by matching parameter names in test function signatures."}
            ],
            "You can manage test environments cleanly and reliably with pytest fixtures.",
            "Test Doubles: Stubs, Fakes, and Mocks", "Isolate units from slow, external, or non-deterministic dependencies."
        ),
        build_lesson(
            5, "test-doubles-stubs-mocks", "Test Doubles: Stubs, Fakes, and Mocks", "Test Doubles",
            "Replacing external systems and slow I/O with test doubles: stubs, fakes, spies, and mocks.",
            "What distinguishes a Fake from a Mock?",
            ["A Fake is a working in-memory implementation (like SQLite for Postgres), while a Mock verifies interaction calls", "A Fake cannot run in Python", "A Mock always hits the real production API", "There is no difference; they are exact synonyms"],
            0, "Fakes have working business logic (e.g. an in-memory dictionary repository), while Mocks record calls and assert expectations.",
            [
                "<p>Real systems depend on external services: payment gateways, third-party REST APIs, email servers, and file systems. You cannot fire real credit card charges or send thousands of real emails during a local test run.</p>",
                "<p>Gerard Meszaros classified <strong>Test Doubles</strong> into distinct categories:</p>",
                "<ul><li><strong>Dummy:</strong> Objects passed around but never actually used (e.g., filler arguments).</li><li><strong>Stub:</strong> Provides hardcoded canned answers to calls made during the test.</li><li><strong>Spy:</strong> A stub that also records how many times and with what arguments it was called.</li><li><strong>Mock:</strong> Pre-programmed with expectations about calls it should receive; verifies behavior.</li><li><strong>Fake:</strong> A working implementation with a shortcut, such as an in-memory database or repository.</li></ul>",
                "<pre><code># Mocking with unittest.mock in Python\nfrom unittest.mock import Mock\n\ndef test_send_welcome_email():\n    mock_mailer = Mock()\n    service = OnboardingService(mailer=mock_mailer)\n\n    service.register(\"alice@example.com\")\n\n    # Verify interaction on the mock\n    mock_mailer.send_email.assert_called_once_with(\n        to=\"alice@example.com\",\n        subject=\"Welcome!\"\n    )</code></pre>",
                "<div class=\"callout\"><p><strong>Warning: Mocking Overkill.</strong> When you mock everything, you end up testing only your mock configurations instead of real code. Favor testing real code with Fakes over excessive mocking.</p></div>"
            ],
            "Taxonomy of Test Doubles", "From passive placeholders to interactive verifiers",
            [
                {"title": "Stub", "lines": ["Returns canned data", "No call verification"]},
                {"title": "Mock", "lines": ["Pre-programmed expectations", "Asserts method calls & args"]},
                {"title": "Fake", "lines": ["Simplified working logic", "e.g., InMemoryUserRepository"]}
            ],
            "Mock Verification Sequence", "Asserting interactions at boundary seams",
            [
                {"title": "1. Inject Mock", "lines": ["service = Service(mailer=mock)", "Seam is decoupled"]},
                {"title": "2. Trigger Behavior", "lines": ["service.register('user')", "Mock intercepts call"]},
                {"title": "3. Verify Interaction", "lines": ["mock.send.assert_called_once()", "Behavior confirmed"]}
            ],
            "Fill in the test double classification",
            "A {1} returns canned data without checking calls, while a {2} verifies that expected method calls occurred.",
            [
                {"answer": "stub", "hint": "Provides pre-set canned responses", "options": ["stub", "fake", "fixture"]},
                {"answer": "mock", "hint": "Verifies interactions and invocations", "options": ["mock", "dummy", "spy"]}
            ],
            [
                {"q": "What is the primary danger of over-using mocks in test suites?", "a": ["Tests become tightly coupled to implementation details and pass even when real integrations are broken", "Mocks increase cloud compute bills significantly", "Mocks require compiled C extensions", "Python disables garbage collection when mocks exist"], "c": 0, "why": "Mocks verify internal interactions rather than external behavior, making tests brittle during refactoring."},
                {"q": "What is an in-memory database or dictionary repository an example of?", "a": ["A Fake", "A Stub", "A Dummy", "A Spy"], "c": 0, "why": "A Fake is a genuine, working implementation tailored for fast, isolated test execution."},
                {"q": "When is it essential to use a test double?", "a": ["When interacting with non-deterministic or destructive systems like payment gateways or SMS providers", "When adding two integer variables together", "When checking an if-statement condition", "When reading a local immutable string constant"], "c": 0, "why": "External networks, third-party rate limits, and financial APIs require test doubles for safety and speed."},
                {"q": "What does mock.assert_called_once_with(...) verify?", "a": ["That the mock method was invoked exactly once with the specified argument values", "That the function was executed in parallel", "That the function never threw an exception", "That the return value was a string"], "c": 0, "why": "It asserts both the exact invocation count (1) and the parameter payload match expectations."}
            ],
            "You can choose the right test double for any architectural boundary.",
            "Code Coverage vs Test Quality", "Understand line coverage, branch coverage, and the limits of metrics."
        ),
        build_lesson(
            6, "code-coverage-and-test-quality", "Code Coverage vs Test Quality", "Coverage & Quality",
            "Measuring test effectiveness with line, branch, and mutation coverage without falling into vanity metrics.",
            "Can a codebase have 100% line coverage and still have severe undetected bugs?",
            ["Yes, because lines can execute without asserting anything about the resulting state or edge cases", "No, 100% coverage mathematically guarantees zero bugs", "Only in compiled languages like C++", "Only if the CPU hardware has a defect"],
            0, "Line coverage only measures execution, not verification. A test without assertions can achieve 100% coverage.",
            [
                "<p><strong>Code coverage</strong> measures the percentage of your production source code executed while running the test suite. It is typically reported as <strong>Line Coverage</strong> (statements executed) and <strong>Branch Coverage</strong> (branches of `if/else` conditions traversed).</p>",
                "<p>While coverage is a useful metric for discovering completely untested modules, Goodhart's law applies: <em>When a measure becomes a target, it ceases to be a good measure.</em></p>",
                "<pre><code># Example: 100% Line Coverage with ZERO Quality\ndef delete_account(user_id):\n    user = db.get(user_id)\n    if user:\n        db.delete(user)\n        send_audit_log(\"User deleted\")\n\ndef test_delete_account_vanity():\n    # Executes every line, but asserts NOTHING!\n    delete_account(42)\n    # Did it delete? Was audit sent? We have no idea!</code></pre>",
                "<p>To test whether your tests are genuinely effective, engineers use <strong>Mutation Testing</strong>. Mutation testing tools (such as `mutmut` in Python) automatically inject small changes (mutants) into your source code—flipping `>` to `<=`, or replacing `True` with `False`. If your test suite still passes, the mutant <em>survived</em>, revealing a gap in your assertions.</p>",
                "<div class=\"callout\"><p><strong>Rule:</strong> Aim for 80-90% branch coverage on core business logic. Do not chase 100% coverage on trivial boilerplate or framework glue code.</p></div>"
            ],
            "Coverage Metrics Compared", "From simple line counting to mutation resistance",
            [
                {"title": "Line Coverage", "lines": ["Did the line execute?", "Blind to assertions and logic"]},
                {"title": "Branch Coverage", "lines": ["Did both true/false paths run?", "Catches missing else conditions"]},
                {"title": "Mutation Coverage", "lines": ["Did tests fail when code broke?", "Measures real assertion strength"]}
            ],
            "Mutation Testing Cycle", "How mutation tools test the test suite",
            [
                {"title": "1. Inject Mutation", "lines": ["Change `x > 0` to `x >= 0`", "Code is intentionally flawed"]},
                {"title": "2. Run Tests", "lines": ["Suite executes against mutant", "Observes result"]},
                {"title": "3. Evaluate Mutant", "lines": ["Tests FAIL: Mutant Killed (Good)", "Tests PASS: Mutant Survived (Weak)"]}
            ],
            "Fill in the code coverage concepts",
            "While {1} coverage checks if code ran, {2} testing alters source code to verify that assertions catch bugs.",
            [
                {"answer": "line", "hint": "Basic percentage of statements executed", "options": ["line", "unit", "system"]},
                {"answer": "mutation", "hint": "Testing technique that introduces deliberate code flaws", "options": ["mutation", "integration", "fuzzing"]}
            ],
            [
                {"q": "What is the difference between line coverage and branch coverage?", "a": ["Branch coverage verifies that both True and False branches of decision points were executed", "Line coverage is only for Python while branch coverage is for JavaScript", "Branch coverage counts git branches in version control", "Line coverage checks comments while branch coverage skips them"], "c": 0, "why": "Branch coverage ensures all conditional evaluation paths are tested, catching missing edge cases."},
                {"q": "What is a 'surviving mutant' in mutation testing?", "a": ["A deliberate bug injected into the codebase that the test suite failed to catch", "A test that took longer than 10 seconds to finish", "A corrupted fixture file on the disk", "A git merge conflict in test files"], "c": 0, "why": "If tests pass despite intentional bugs, the mutant survives, indicating inadequate assertions."},
                {"q": "Why is mandating 100% code coverage often counter-productive?", "a": ["It encourages low-value tests that assert trivial boilerplate just to hit the metric quota", "It makes Python run out of memory", "It causes git push commands to fail", "It prevents developers from using IDEs"], "c": 0, "why": "Quotas incentivize developers to write shallow assertion-free tests that inflate coverage."},
                {"q": "What code deserves the highest testing rigor and coverage?", "a": ["Complex domain business logic with financial, safety, or security impact", "Generated database migrations", "Configuration files and YAML", "Auto-generated getters and setters"], "c": 0, "why": "Core business rules carry the highest risk and business value."}
            ],
            "You understand the true relationship between coverage metrics and software quality.",
            "Flaky Tests and Non-Determinism", "Eliminate race conditions, random seeds, and timing bugs in test suites."
        ),
        build_lesson(
            7, "flaky-tests-and-determinism", "Flaky Tests and Non-Determinism", "Determinism",
            "Rooting out flaky tests: eliminating time dependencies, network calls, race conditions, and uncontrolled randomness.",
            "Why are flaky tests considered toxic to engineering teams?",
            ["They erode trust in the build; developers ignore test failures and merge broken code", "They cause hard drives to corrupt data", "They change the syntax of Python files", "They disable git pull requests permanently"],
            0, "When tests fail intermittently, developers stop trusting CI failures, allowing real regressions into production.",
            [
                "<p>A <strong>flaky test</strong> is a test that can pass or fail on the exact same commit without any code changes. Flakiness destroys team productivity and trust. When CI turns red, developers shrug and click 'Rerun' instead of investigating the failure.</p>",
                "<p>The most common root causes of flakiness are:</p>",
                "<ul><li><strong>Real-time clocks:</strong> Calling `datetime.now()` or using `time.sleep()`.</li><li><strong>Uncontrolled randomness:</strong> Using `random.randint()` without a fixed seed.</li><li><strong>Unordered collections:</strong> Asserting on list order from database queries without `ORDER BY`.</li><li><strong>Shared state / test leaks:</strong> Tests modifying shared database rows or global singletons.</li><li><strong>Network I/O:</strong> Tests calling real internet endpoints that occasionally time out.</li></ul>",
                "<pre><code># BAD: Flaky timing dependency\ndef test_cache_expiration():\n    cache.set(\"key\", \"val\", ttl=1)\n    time.sleep(1.05)  # Fragile! Under CI CPU load, sleep might not be enough\n    assert cache.get(\"key\") is None\n\n# GOOD: Deterministic frozen time with freezegun or time-machine\nfrom freezegun import freeze_time\n\ndef test_cache_expiration_deterministic():\n    with freeze_time(\"2026-01-01 12:00:00\") as frozen_time:\n        cache.set(\"key\", \"val\", ttl=60)\n        frozen_time.tick(delta=timedelta(seconds=61))\n        assert cache.get(\"key\") is None</code></pre>",
                "<div class=\"callout\"><p><strong>Zero Tolerance:</strong> When a test is identified as flaky, quarantine it immediately. Either fix the non-determinism or delete the test. Never leave flaky tests in CI.</p></div>"
            ],
            "Sources of Flakiness", "Common culprits of intermittent test failure",
            [
                {"title": "Timing / Sleep", "lines": ["Using time.sleep()", "Fails under high CI CPU load"]},
                {"title": "Unordered Data", "lines": ["Query without ORDER BY", "Dictionary / set iteration shifts"]},
                {"title": "Shared State", "lines": ["Uncleaned DB records", "Order-dependent execution"]}
            ],
            "Time Freezing Strategy", "Mocking the system clock deterministically",
            [
                {"title": "1. Freeze Time", "lines": ["freeze_time('2026-01-01')", "System clock is locked"]},
                {"title": "2. Step Forward", "lines": ["frozen_time.tick(60s)", "Clock advances instantly"]},
                {"title": "3. Immediate Assert", "lines": ["Zero real-world sleep", "100% deterministic result"]}
            ],
            "Complete the sentence on flaky test remedies",
            "To prevent timing flakiness, replace sleep calls with {1} and enforce strict {2} on database queries.",
            [
                {"answer": "frozen clocks", "hint": "Controlling the passage of virtual time", "options": ["frozen clocks", "longer sleeps", "thread locks"]},
                {"answer": "ordering", "hint": "Deterministic query sorting", "options": ["ordering", "caching", "indexing"]}
            ],
            [
                {"q": "Why is 'time.sleep(2)' an anti-pattern in automated tests?", "a": ["It slows the test suite down and still fails under heavy CI resource contention", "Python limits sleep to 1 second in test files", "Operating systems terminate processes that sleep", "Sleep invalidates SSL certificates"], "c": 0, "why": "Arbitrary sleeps waste execution time and remain vulnerable to CPU throttling on CI runners."},
                {"q": "How does freezing time with libraries like freezegun eliminate flakiness?", "a": ["It controls the return value of system time calls without waiting in real time", "It pauses the entire operating system kernel", "It disables internet access temporarily", "It compiles Python to machine code"], "c": 0, "why": "Freezing time provides complete, instant control over timestamps and timeouts."},
                {"q": "What should an engineering team do when a flaky test is discovered in CI?", "a": ["Quarantine or fix it immediately so developers maintain trust in test results", "Click rerun until it turns green and ignore it", "Disable the entire CI pipeline", "Delete the production feature"], "c": 0, "why": "Leaving flaky tests in the pipeline erodes confidence in the entire testing system."},
                {"q": "Why can querying a SQL database without 'ORDER BY' cause flaky assertions?", "a": ["Relational databases do not guarantee row order without explicit ORDER BY clauses", "SQL requires ORDER BY for all SELECT queries", "Database drivers shuffle rows to save bandwidth", "Indexes are always random"], "c": 0, "why": "SQL tables are unordered sets; without explicit ORDER BY, row return sequence is non-deterministic."}
            ],
            "You know how to diagnose and eradicate non-deterministic and flaky tests.",
            "Testing Strategy: What to Test and What to Skip", "Design a pragmatic, high-ROI testing strategy across the application pyramid."
        ),
        build_lesson(
            8, "testing-strategy-and-roi", "Testing Strategy: What to Test and What to Skip", "Testing Strategy",
            "Balancing speed, isolation, and confidence to build a pragmatic testing strategy with high return on investment.",
            "Why is attempting to test every possible permutation with slow end-to-end tests inefficient?",
            ["End-to-end tests are slow to run, costly to maintain, and hard to pinpoint failures compared to unit tests", "End-to-end tests cannot test web browsers", "End-to-end tests only run on Linux", "Unit tests are required by cloud providers"],
            0, "End-to-end tests provide high realism but carry high runtime and maintenance costs; unit tests handle permutations cheaply.",
            [
                "<p>A successful testing strategy optimizes for two things: <strong>high confidence</strong> and <strong>fast feedback</strong>. If your test suite takes two hours to run, developers will run it once a day. If your test suite takes 15 seconds, developers will run it after every save.</p>",
                "<p>The classical <strong>Test Pyramid</strong> guides resource allocation across test types:</p>",
                "<ul><li><strong>Unit Tests (Base):</strong> Hundreds or thousands of fast, in-memory tests verifying business algorithms, edge cases, and calculations in milliseconds.</li><li><strong>Integration Tests (Middle):</strong> Tests verifying interactions across real boundaries—database queries, file access, and service contracts.</li><li><strong>End-to-End Tests (Apex):</strong> A targeted handful of critical user journey tests (e.g. signup, checkout) verifying the entire assembled stack.</li></ul>",
                "<pre><code># The Testing Decision Matrix\n# High business logic complexity + Pure logic -> UNIT TEST\n# Boundary seams (SQL, HTTP API client)    -> INTEGRATION TEST\n# Critical revenue path (Checkout, Auth)     -> END-TO-END SMOKE TEST\n# UI pixel colors / Framework boilerplate   -> SKIP OR LINT</code></pre>",
                "<p>Spend your testing budget where defects are expensive and logic is complex. Do not waste time writing tests for auto-generated getters, standard library functions, or static CSS properties.</p>",
                "<div class=\"callout\"><p><strong>Golden Rule:</strong> The goal of testing is not 100% coverage; the goal is sustainable engineering velocity with zero catastrophic production regressions.</p></div>"
            ],
            "The Testing Pyramid", "Balancing speed, cost, and confidence",
            [
                {"title": "E2E Tests (Few)", "lines": ["Full stack realism", "Slow & expensive (minutes)"]},
                {"title": "Integration Tests (Some)", "lines": ["Real DB & HTTP seams", "Moderate speed (seconds)"]},
                {"title": "Unit Tests (Many)", "lines": ["Pure in-memory logic", "Blazing fast (milliseconds)"]}
            ],
            "Testing Decision Flowchart", "Choosing the right test level",
            [
                {"title": "Pure Logic?", "lines": ["Yes -> Unit test edge cases", "Fast & exhaustive"]},
                {"title": "Database Query?", "lines": ["Yes -> Integration test against DB", "Verify SQL syntax & constraints"]},
                {"title": "Critical User Flow?", "lines": ["Yes -> E2E test happy path", "Verify full system integration"]}
            ],
            "Complete the test strategy statement",
            "In the test pyramid, the bulk of the suite consists of fast {1} tests, while a targeted set of {2} tests verify critical user journeys.",
            [
                {"answer": "unit", "hint": "Fast in-memory tests", "options": ["unit", "manual", "smoke"]},
                {"answer": "end-to-end", "hint": "Full stack integration tests", "options": ["end-to-end", "static", "lint"]}
            ],
            [
                {"q": "What is the primary strength of unit tests in the test pyramid?", "a": ["They execute in milliseconds and immediately isolate the exact function causing a failure", "They test real third-party network APIs", "They render browser canvases with CSS", "They verify database connection pool sizing"], "c": 0, "why": "Unit tests provide instant feedback and pin down exact algorithmic regressions."},
                {"q": "What is the primary purpose of integration tests?", "a": ["To verify that components communicate correctly across real architectural boundaries and contracts", "To test simple arithmetic functions", "To replace compilers and linters", "To check code indentation"], "c": 0, "why": "Integration tests verify that different layers (like application code and database queries) work together."},
                {"q": "What is a major risk of having an inverted test pyramid (an ice cream cone)?", "a": ["The suite becomes excruciatingly slow, brittle, and expensive to maintain in CI", "The test runner runs out of hard drive space", "Unit tests become illegal in production", "Compilers cannot build release artifacts"], "c": 0, "why": "An ice-cream cone has too many slow, flaky E2E tests and not enough fast, reliable unit tests."},
                {"q": "What types of code should generally be skipped when writing automated tests?", "a": ["Trivial boilerplate, framework getters, and third-party library internals", "Core financial calculation logic", "Authentication password checks", "Database constraint validations"], "c": 0, "why": "Testing framework boilerplate provides zero ROI while increasing maintenance overhead."}
            ],
            "You have mastered the principles and strategy of modern software testing.",
            "Next Course: Unit Testing & Integration Testing", "Dive deep into unit isolation, mocking boundaries, and database testing."
        )
    ]

    glossary = [
        {"id": "fundamentals", "title": "Testing Fundamentals", "terms": [
            {"term": "Regression", "def": "A software bug introduced into previously working features by a recent code modification.", "lesson": 1, "tags": ["testing", "quality"]},
            {"term": "Automated Testing", "def": "The practice of running software to verify that code satisfies requirements without manual intervention.", "lesson": 1, "tags": ["testing", "automation"]},
            {"term": "Living Documentation", "def": "Test suites that describe system behavior accurately because failing tests halt the build.", "lesson": 1, "tags": ["testing", "docs"]}
        ]},
        {"id": "structure", "title": "Test Structure & Mechanics", "terms": [
            {"term": "Arrange-Act-Assert", "def": "The universal 3-phase test structure: setting up preconditions, triggering behavior, and asserting outcomes.", "lesson": 2, "tags": ["testing", "patterns"]},
            {"term": "Assertion", "def": "A boolean check in a test that verifies the actual output matches expected specifications.", "lesson": 3, "tags": ["testing", "assertions"]},
            {"term": "Fixture", "def": "A reproducible environment or data dependency prepared before a test and cleaned up afterward.", "lesson": 4, "tags": ["testing", "fixtures"]}
        ]},
        {"id": "doubles", "title": "Test Doubles & Metrics", "terms": [
            {"term": "Test Double", "def": "A generic term for any object that replaces a real production component during automated testing.", "lesson": 5, "tags": ["testing", "mocks"]},
            {"term": "Mock", "def": "A test double configured with pre-programmed expectations that verifies method invocations.", "lesson": 5, "tags": ["testing", "mocks"]},
            {"term": "Code Coverage", "def": "The percentage of production code statements or branches executed during a test suite run.", "lesson": 6, "tags": ["testing", "metrics"]}
        ]},
        {"id": "strategy", "title": "Determinism & Strategy", "terms": [
            {"term": "Flaky Test", "def": "A non-deterministic test that produces different results on the same commit without code changes.", "lesson": 7, "tags": ["testing", "ci"]},
            {"term": "Mutation Testing", "def": "A technique that injects deliberate bugs into source code to verify that tests catch them.", "lesson": 6, "tags": ["testing", "quality"]},
            {"term": "Test Pyramid", "def": "A model advocating many fast unit tests, fewer integration tests, and very few end-to-end tests.", "lesson": 8, "tags": ["testing", "architecture"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "AAA Test Template (pytest)",
            "label": "Universal test structure",
            "code": "def test_transfer_funds():\n    # 1. Arrange\n    acc1, acc2 = Account(500), Account(100)\n    # 2. Act\n    transfer(acc1, acc2, 200)\n    # 3. Assert\n    assert acc1.balance == 300\n    assert acc2.balance == 300",
            "lessonN": 2, "lessonSlug": "arrange-act-assert", "lessonTitle": "The Anatomy of a Test: Arrange, Act, Assert"
        },
        {
            "title": "Exception Assertions",
            "label": "Verifying errors and messages",
            "code": "import pytest\n\nwith pytest.raises(ValueError, match=\"Insufficient balance\"):\n    account.withdraw(99999)",
            "lessonN": 3, "lessonSlug": "assertions-and-failure-messages", "lessonTitle": "Assertions and Informative Failure Messages"
        },
        {
            "title": "Pytest Fixtures with Cleanup",
            "label": "Resource lifecycle management",
            "code": "@pytest.fixture\ndef db_session():\n    db = setup_in_memory_db()\n    yield db\n    db.close()",
            "lessonN": 4, "lessonSlug": "test-fixtures-and-setup", "lessonTitle": "Test Fixtures and Setup/Teardown"
        },
        {
            "title": "Freezing Time Deterministically",
            "label": "Eliminating clock-based flakiness",
            "code": "from freezegun import freeze_time\n\nwith freeze_time(\"2026-01-01 12:00:00\") as frozen:\n    cache.set(\"k\", \"v\", ttl=60)\n    frozen.tick(delta=timedelta(seconds=61))\n    assert cache.get(\"k\") is None",
            "lessonN": 7, "lessonSlug": "flaky-tests-and-determinism", "lessonTitle": "Flaky Tests and Non-Determinism"
        }
    ]

    course_data = {
        "id": "testing-fundamentals",
        "title": "Testing Fundamentals",
        "num": 47,
        "emoji": "🧪",
        "desc": "What a test is for, what makes one trustworthy, and how to test behaviour instead of implementation.",
        "topics": ["Testing", "Confidence", "Fixtures", "Mocks", "Coverage", "Determinism"],
        "mission": "# Mission — Testing Fundamentals\n\nBuild confidence through automated verification. Learn to structure clean tests with AAA, write expressive assertions, manage fixtures, leverage test doubles, and eradicate flakiness.",
        "notes": "# Notes — Testing Fundamentals\n\nFocus on testing behavior rather than implementation details to create durable test suites that enable safe refactoring.",
        "resources": "# Resources — Testing Fundamentals\n\n- Kent Beck, *Test-Driven Development by Example*\n- Gerard Meszaros, *xUnit Test Patterns*\n- Brian Okken, *Python Testing with pytest*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

# Course 48, 49, 50 follow...

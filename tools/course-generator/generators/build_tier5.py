import os
import sys
sys.path.append(os.path.dirname(__file__))
from helpers import build_lesson, save_course
from gen_tier5 import make_course_47

# ==============================================================================
# COURSE 48: unit-integration-testing
# ==============================================================================
def make_course_48():
    lessons = [
        build_lesson(
            1, "defining-the-unit", "What Is a Unit? Defining Boundaries", "Unit Boundaries",
            "Understanding what constitutes a 'unit' in unit testing: from individual functions to cohesive modules and classes.",
            "What is a common misconception about the definition of a 'unit' in unit testing?",
            ["A unit must strictly be a single private function or class method", "A unit can encompass a cohesive module or class cluster", "Units should execute quickly in memory", "Units should have deterministic outcomes"],
            0, "A unit represents a unit of behavior, which can be a single function, class, or small cohesive cluster of cooperating objects.",
            [
                "<p>A common misconception in software engineering is that a <strong>unit</strong> must strictly be a single class or a single function. This rigid definition often leads developers to test private methods and internal variables, resulting in brittle tests that break upon refactoring.</p>",
                "<p>Martin Fowler and Kent Beck define a unit as a <strong>unit of behavior</strong>. A unit test may exercise a single pure function, or it may exercise a small cluster of classes working together entirely in memory.</p>",
                "<pre><code># Testing a cohesive unit of behavior (PricingEngine)\ndef test_pricing_engine_applies_tax_and_volume_discount():\n    engine = PricingEngine(tax_rate=0.08)\n    cart = Cart([Item(name=\"Widget\", price=10.0, qty=10)])\n\n    # The unit under test is the PricingEngine interacting with Cart and Item\n    total = engine.calculate_total(cart)\n\n    assert total == 97.20  # 10% volume discount on $100 = $90 + 8% tax</code></pre>",
                "<p>The boundary of a unit test is <strong>in-memory execution</strong>. As soon as a test reaches over a network socket, touches a physical disk, or spawns an operating system process, it crosses the boundary from a unit test into an integration test.</p>",
                "<div class=\"callout\"><p><strong>Solitary vs Sociable:</strong> Solitary unit tests isolate the class using mocks for all collaborators. Sociable unit tests use real collaborator objects as long as they stay in memory. Sociable tests are generally more resilient to refactoring.</p></div>"
            ],
            "Solitary vs Sociable Units", "Comparing mock-heavy isolation with real collaborator objects",
            [
                {"title": "Solitary Unit Test", "lines": ["Class A -> Mock Collaborator B", "Tests Class A in total isolation"]},
                {"title": "Sociable Unit Test", "lines": ["Class A -> Real Collaborator B", "Both execute in pure memory"]},
                {"title": "Integration Test", "lines": ["Class A -> Database / HTTP API", "Crosses I/O process boundary"]}
            ],
            "Memory Boundary Boundary", "Distinguishing unit from integration tests",
            [
                {"title": "Unit Scope (RAM)", "lines": ["Pure CPU & memory execution", "Time: < 1 millisecond"]},
                {"title": "Boundary Line", "lines": ["Network socket / Disk / Threads", "I/O latency seam"]},
                {"title": "Integration Scope", "lines": ["Postgres / Redis / File System", "Time: 10 - 500 milliseconds"]}
            ],
            "Fill in the unit testing concept",
            "A solitary unit test replaces all collaborators with {1}, while a sociable unit test uses {2} collaborators in memory.",
            [
                {"answer": "mocks", "hint": "Simulated collaborator objects", "options": ["mocks", "databases", "browsers"]},
                {"answer": "real", "hint": "Actual production class instances", "options": ["real", "remote", "networked"]}
            ],
            [
                {"q": "What is the key characteristic of a sociable unit test?", "a": ["It uses real in-memory collaborator classes rather than mocking every dependency", "It connects to social media networks", "It requires multiple developers to pair program", "It runs exclusively on frontend browsers"], "c": 0, "why": "Sociable unit tests allow real collaborator objects to interact as long as execution stays in memory."},
                {"q": "Why is testing private methods directly usually an anti-pattern?", "a": ["Private methods are implementation details; testing them couples tests to internal code that should be free to refactor", "Python prevents calling private methods at runtime", "Private methods cannot use assert statements", "Private methods do not consume memory"], "c": 0, "why": "Tests should verify observable public behavior, allowing private implementation to evolve."},
                {"q": "When does a test cease to be a unit test?", "a": ["When it requires external process I/O such as databases, file systems, or network sockets", "When it contains more than three lines of code", "When it uses helper functions", "When it runs inside a Docker container"], "c": 0, "why": "I/O boundaries introduce latency and non-determinism, turning unit tests into integration tests."},
                {"q": "What is the primary speed advantage of genuine unit tests?", "a": ["They execute thousands of assertions per second because they operate entirely in RAM", "They run on the GPU", "They bypass the Python interpreter", "They do not compile code"], "c": 0, "why": "In-memory operations have microsecond latencies, allowing sub-second test suite runs."}
            ],
            "You know how to define clear, resilient unit test boundaries.",
            "Fast In-Memory Unit Tests", "Optimizing unit tests for sub-second execution feedback loops."
        ),
        build_lesson(
            2, "fast-in-memory-unit-tests", "Fast In-Memory Unit Tests", "Test Performance",
            "Designing lightning-fast unit tests that provide immediate feedback during active coding.",
            "Why must unit test suites run in under 5 to 10 seconds?",
            ["If tests take longer, developers stop running them frequently on every local edit", "The test runner crashes after 10 seconds", "Continuous integration servers reject long runs", "Python garbage collection freezes execution"],
            0, "Fast execution keeps developers in flow state; slow suites destroy feedback frequency.",
            [
                "<p>A test suite's value is directly proportional to how often developers run it. If your unit tests run in 2 seconds, you will run them after every two lines of code you change. If they take 45 seconds, you will run them once before opening a pull request.</p>",
                "<p>To keep unit tests fast:</p>",
                "<ul><li><strong>No Network:</strong> Never make HTTP calls or DNS lookups in unit tests.</li><li><strong>No Disk I/O:</strong> Avoid writing physical files; use `io.StringIO` or in-memory virtual filesystems.</li><li><strong>No Sleeps:</strong> Replace `time.sleep()` with deterministic logic or mock clocks.</li><li><strong>Pure Functions:</strong> Isolate core domain calculations into pure functions that take data and return data.</li></ul>",
                "<pre><code># Fast in-memory testing with StringIO\nimport io\n\ndef parse_config_stream(stream):\n    return {line.split(\"=\")[0]: line.split(\"=\")[1].strip() for line in stream if \"=\" in line}\n\ndef test_parse_config_fast():\n    # No disk access needed! Pure memory buffer\n    sample_data = io.StringIO(\"HOST=localhost\\nPORT=8080\\n\")\n    config = parse_config_stream(sample_data)\n    assert config == {\"HOST\": \"localhost\", \"PORT\": \"8080\"}</code></pre>",
                "<div class=\"callout\"><p><strong>Target Metric:</strong> Individual unit tests should complete in under 5 milliseconds. A suite of 500 unit tests should finish in under 2 seconds.</p></div>"
            ],
            "The Feedback Loop Speed", "How test latency alters developer behavior",
            [
                {"title": "< 3 Seconds", "lines": ["Run on every file save", "Instant defect discovery"]},
                {"title": "10 - 30 Seconds", "lines": ["Run before git commit", "Context switching begins"]},
                {"title": "> 2 Minutes", "lines": ["Run only in CI", "High regression triage cost"]}
            ],
            "In-Memory Streaming", "Replacing disk I/O with memory buffers",
            [
                {"title": "Physical Disk", "lines": ["open('test.txt', 'w')", "Slow OS system calls (ms)"]},
                {"title": "Virtual Buffer", "lines": ["io.StringIO('content')", "Fast RAM pointer access (μs)"]},
                {"title": "Outcome", "lines": ["100x faster execution", "No leftover files to delete"]}
            ],
            "Complete the test performance sentence",
            "To keep unit tests fast, avoid physical disk I/O by using {1} and eliminate network calls by using {2}.",
            [
                {"answer": "memory buffers", "hint": "In-memory data structures like StringIO", "options": ["memory buffers", "hard drives", "flash storage"]},
                {"answer": "mocks", "hint": "Test doubles for external services", "options": ["mocks", "proxies", "firewalls"]}
            ],
            [
                {"q": "How does using io.StringIO improve test execution speed?", "a": ["It avoids filesystem I/O system calls by operating entirely within process memory", "It compresses text into binary format", "It encrypts file contents", "It caches files across git branches"], "c": 0, "why": "In-memory string buffers avoid filesystem overhead, speeding up tests significantly."},
                {"q": "What is the psychological consequence of a test suite that takes over 5 minutes to run?", "a": ["Developers abandon local test runs and rely on CI, slowing down the development cycle", "Developers write more tests to compensate", "Developers switch from Python to C", "Code coverage increases automatically"], "c": 0, "why": "Slow feedback discourages frequent local execution, leading to delayed defect detection."},
                {"q": "What is a pure function and why is it ideal for unit testing?", "a": ["A function that depends only on its inputs and has no side effects, making it trivial to test deterministically", "A function that has no return value", "A function written in assembly", "A function decorated with @pure"], "c": 0, "why": "Pure functions have zero side effects and produce predictable outputs for given inputs."},
                {"q": "How can you profile slow tests in pytest?", "a": ["Run pytest with the --durations flag to report the slowest tests", "Measure test speed using a stopwatch", "Check git commit timestamps", "Inspect the CPU fan speed"], "c": 0, "why": "pytest --durations=10 displays the 10 slowest tests and their setup times."}
            ],
            "You know how to keep unit tests running in milliseconds.",
            "Mocking External I/O and Network Boundaries", "Simulate third-party APIs and services with high fidelity."
        ),
        build_lesson(
            3, "mocking-external-boundaries", "Mocking External I/O and Network Boundaries", "Mocking Boundaries",
            "Isolating code from third-party APIs and network latency using responses and unittest.mock.",
            "What happens if an automated test suite calls real external third-party APIs during CI runs?",
            ["Tests fail intermittently due to rate limits, network outages, and credential issues", "The third-party API provides free enterprise accounts", "Tests execute faster because cloud servers are used", "The test runner automatically caches API tokens"],
            0, "Real network calls cause rate-limiting, flakiness, credential leaks, and severe CI delays.",
            [
                "<p>When your code talks to Stripe, GitHub, or an SMS gateway, you cannot execute real HTTP requests in unit tests. Real requests introduce latency, require secret production API keys, and fail whenever the external server experiences downtime.</p>",
                "<p>Libraries like `responses` (for `requests`) or `httpx_mock` (for `httpx`) intercept HTTP calls at the transport adapter level, returning predefined status codes and JSON payloads without opening network sockets.</p>",
                "<pre><code># Mocking HTTP requests with responses\nimport responses\nimport requests\n\n@responses.activate\ndef test_fetch_user_profile_success():\n    # Register mocked endpoint\n    responses.add(\n        responses.GET,\n        \"https://api.example.com/users/42\",\n        json={\"id\": 42, \"name\": \"Alice\", \"role\": \"admin\"},\n        status=200\n    )\n\n    client = APIClient(base_url=\"https://api.example.com\")\n    profile = client.get_user(42)\n\n    assert profile.name == \"Alice\"\n    assert profile.role == \"admin\"</code></pre>",
                "<p>Notice that the code under test uses the genuine `requests` library. We did not monkey-patch internal client functions; we intercepted the network layer itself. This ensures our serialization, header parsing, and error-handling code runs exactly as it would in production.</p>",
                "<div class=\"callout\"><p><strong>Best Practice:</strong> Always test how your code handles network errors! Test what happens when the API returns 401 Unauthorized, 429 Rate Limited, or 500 Server Error.</p></div>"
            ],
            "HTTP Transport Interception", "Intercepting network calls before sockets open",
            [
                {"title": "Application Code", "lines": ["requests.get('/users/42')", "Constructs real HTTP call"]},
                {"title": "Adapter Interceptor", "lines": ["Match URL & Method", "Short-circuit before socket"]},
                {"title": "Mocked Response", "lines": ["Return JSON & status 200", "Zero network traffic"]}
            ],
            "Testing Error Paths", "Verifying resilience under failure conditions",
            [
                {"title": "Simulate 429", "lines": ["status: 429, headers: Retry-After", "API rate limited"]},
                {"title": "Client Logic", "lines": ["Trigger exponential backoff", "Raise RateLimitExceeded"]},
                {"title": "Assertion", "lines": ["Confirm retry count == 3", "System fails gracefully"]}
            ],
            "Complete the sentence on HTTP mocking",
            "Intercepting HTTP traffic with tools like responses allows testing serialization and error handling without {1} calls or {2} leaks.",
            [
                {"answer": "network", "hint": "External internet transmission", "options": ["network", "memory", "compiler"]},
                {"answer": "credential", "hint": "Secret API tokens and passwords", "options": ["credential", "variable", "syntax"]}
            ],
            [
                {"q": "What is the advantage of intercepting HTTP at the adapter level over mocking your own client function?", "a": ["It exercises the real HTTP client serialization, headers, and error parsing logic", "It makes the network run faster", "It requires no Python libraries", "It works without writing test code"], "c": 0, "why": "Adapter interception exercises the real serialization and deserialization code."},
                {"q": "Why is testing HTTP error codes (like 500 and 429) just as important as testing 200 OK?", "a": ["To ensure client software handles failures, retries, and errors gracefully without crashing", "To verify that cloud servers never fail", "Because HTTP 500 is the most common status code", "To increase test execution time"], "c": 0, "why": "Production systems inevitably experience upstream errors; client resilience must be tested."},
                {"q": "What library is commonly used in Python to mock HTTP calls made with the requests library?", "a": ["responses", "pytest-html", "unittest.dom", "virtualenv"], "c": 0, "why": "The `responses` library intercepts requests HTTP transport adapters."},
                {"q": "What security risk occurs when tests connect to real third-party services in CI?", "a": ["API secrets and authentication credentials must be exposed in CI environment variables", "Python files become unencrypted", "Tests delete local SSH keys", "Browsers block git commits"], "c": 0, "why": "Calling real APIs requires storing sensitive secrets in CI runner environments."}
            ],
            "You can isolate network seams and test HTTP integrations reliably.",
            "What Integration Tests Actually Verify", "Verify real seams and cross-component contracts."
        ),
        build_lesson(
            4, "what-integration-tests-verify", "What Integration Tests Actually Verify", "Integration Testing",
            "Understanding the purpose of integration tests: testing real seams, contracts, and cross-boundary communication.",
            "What critical bugs do integration tests catch that unit tests are blind to?",
            ["Schema mismatches, incorrect SQL queries, and broken contracts between cooperating components", "Syntax errors caught by the compiler", "Code formatting and variable naming inconsistencies", "Missing docstrings in function signatures"],
            0, "Integration tests verify that components actually interact correctly across real interfaces and databases.",
            [
                "<p>There is a classic software engineering joke: <em>2 unit tests, 0 integration tests</em>, accompanied by a picture of a sliding door that works perfectly until someone installs a trash can directly in its path. Individual units can pass with 100% test coverage while the system as a whole is completely broken.</p>",
                "<p><strong>Integration tests</strong> verify the seams where two or more subsystems meet:</p>",
                "<ul><li>Does our ORM query match the actual PostgreSQL database schema?</li><li>Does our JSON serializer format timestamps in the exact ISO format expected by the frontend?</li><li>Does our queue consumer handle serialized messages published by the background worker?</li></ul>",
                "<pre><code># Integration test: Verifying real database insertion and constraints\ndef test_create_order_persists_to_database(db_session):\n    service = OrderService(db_session)\n    order = service.create_order(customer_id=\"cust_123\", amount=99.50)\n\n    # Verify record was physically written to SQL table\n    saved = db_session.execute(\n        \"SELECT customer_id, amount FROM orders WHERE id = :id\",\n        {\"id\": order.id}\n    ).fetchone()\n\n    assert saved.customer_id == \"cust_123\"\n    assert float(saved.amount) == 99.50</code></pre>",
                "<p>Notice that we did not mock the database session. We verified that our SQL syntax, foreign keys, and column data types succeed against a real database instance.</p>",
                "<div class=\"callout\"><p><strong>Focus:</strong> Integration tests should focus on boundaries and contracts, not business edge cases. Let unit tests handle 20 algorithmic permutations; let integration tests verify that the pipeline connects.</p></div>"
            ],
            "Unit vs Integration Focus", "Distributing testing responsibilities across layers",
            [
                {"title": "Unit Tests", "lines": ["Test 15 edge cases & algorithms", "Run in microseconds in RAM"]},
                {"title": "The Seam / Boundary", "lines": ["SQL syntax, foreign keys, schema", "JSON serialization & headers"]},
                {"title": "Integration Tests", "lines": ["Test the seam with 1-2 happy paths", "Verify cross-layer communication"]}
            ],
            "Database Seam Verification", "Testing queries against real tables",
            [
                {"title": "1. Write Operation", "lines": ["service.create_order()", "ORM generates INSERT query"]},
                {"title": "2. Database Engine", "lines": ["Executes SQL against table", "Checks foreign key constraints"]},
                {"title": "3. Direct Query Assert", "lines": ["SELECT * FROM orders", "Confirms physical persistence"]}
            ],
            "Complete the integration testing sentence",
            "While unit tests exhaustively check algorithmic permutations, integration tests verify that {1} communicate across real {2}.",
            [
                {"answer": "components", "hint": "Subsystems and services", "options": ["components", "compilers", "variables"]},
                {"answer": "boundaries", "hint": "Seams between databases, networks, and layers", "options": ["boundaries", "comments", "strings"]}
            ],
            [
                {"q": "Why is testing against a real database better than mocking database queries?", "a": ["Mocks cannot validate SQL syntax, table constraints, triggers, or transaction semantics", "Mocking databases requires root permissions", "Real databases execute in zero milliseconds", "SQL queries cannot be tested in Python"], "c": 0, "why": "Mocks return whatever canned data you tell them to return; they cannot validate real SQL rules."},
                {"q": "How many variations should typically be tested in an integration test compared to a unit test?", "a": ["Fewer: verify the happy path and critical boundary errors; leave algorithmic permutations to unit tests", "More: test every possible if-statement condition against the real database", "Zero: integration tests should not assert outcomes", "Exactly the same number"], "c": 0, "why": "Integration tests are slower; use them to verify connection and contracts, not algorithmic permutations."},
                {"q": "What is an architectural 'seam'?", "a": ["A place where you can alter behavior without editing code in that place, such as an interface or network boundary", "A line of code with a syntax error", "The end of a Python file", "A git merge conflict"], "c": 0, "why": "Michael Feathers defines a seam as an interface boundary where components meet and can be isolated or tested."},
                {"q": "What happens if a database column is renamed in production but tests only use mocks?", "a": ["The mock tests pass green, but production crashes with a column not found database error", "The tests fail with a syntax warning", "The database automatically updates its schema", "The git repository reverts the commit"], "c": 0, "why": "Mocks do not know about real database schemas, creating dangerous false confidence."}
            ],
            "You understand the vital role of integration testing across real architectural seams.",
            "Testing with Ephemeral Databases and Testcontainers", "Run integration tests against disposable, isolated database instances."
        ),
        build_lesson(
            5, "ephemeral-databases-testcontainers", "Testing with Ephemeral Databases and Testcontainers", "Database Testing",
            "Using ephemeral databases, SQLite in-memory, and Docker Testcontainers for realistic, isolated integration testing.",
            "Why is testing PostgreSQL code against an in-memory SQLite database potentially risky?",
            ["SQLite lacks PostgreSQL-specific features like JSONB, specific concurrency locks, and array column types", "SQLite is too slow for automated tests", "SQLite only runs on mobile devices", "SQLite does not support SQL SELECT statements"],
            0, "Database engines have subtle differences in dialects, constraints, and data types that can mask bugs.",
            [
                "<p>For years, developers tested database code by swapping their production PostgreSQL engine for an in-memory SQLite database. While SQLite is fast, it differs from PostgreSQL in crucial ways: different date/time functions, no native `JSONB` support, and lenient type checking.</p>",
                "<p>Today, the gold standard for integration testing is <strong>Testcontainers</strong>. Testcontainers allows your test runner to spin up a genuine, throwaway Docker container running the exact version of PostgreSQL, Redis, or Kafka used in production.</p>",
                "<pre><code># Integration testing with Testcontainers (Python)\nimport pytest\nfrom testcontainers.postgres import PostgresContainer\nimport psycopg2\n\n@pytest.fixture(scope=\"session\")\ndef postgres_container():\n    # Spin up ephemeral container on Docker\n    with PostgresContainer(\"postgres:16-alpine\") as postgres:\n        yield postgres\n\n@pytest.fixture\ndef db_connection(postgres_container):\n    conn = psycopg2.connect(postgres_container.get_connection_url())\n    # Run migrations...\n    yield conn\n    conn.close()</code></pre>",
                "<p>When the test session finishes, the container is destroyed automatically. Every test run starts with a pristine database instance, eliminating state leakage across machines and continuous integration runners.</p>",
                "<div class=\"callout\"><p><strong>Optimization:</strong> Spin up the container once per test session (session scope), and wrap each test in a database transaction that rolls back at teardown. This gives you native PostgreSQL realism in milliseconds per test!</p></div>"
            ],
            "Database Isolation Strategies", "From fast SQLite to full Docker container realism",
            [
                {"title": "SQLite In-Memory", "lines": ["Ultra-fast (RAM)", "Risk of dialect & feature mismatches"]},
                {"title": "Shared Test DB", "lines": ["Real PostgreSQL", "Risk of state collision across test runs"]},
                {"title": "Testcontainers", "lines": ["Real PostgreSQL container", "Pristine, disposable, 100% parity"]}
            ],
            "Transaction Rollback Trick", "Sub-millisecond integration tests on real databases",
            [
                {"title": "1. Begin Transaction", "lines": ["conn.begin()", "Open test transaction"]},
                {"title": "2. Run Test Logic", "lines": ["INSERT, UPDATE, SELECT", "Changes visible inside transaction"]},
                {"title": "3. Rollback Teardown", "lines": ["conn.rollback()", "Database returns to pristine state"]}
            ],
            "Complete the ephemeral database sentence",
            "Using {1} provides exact production engine parity by running disposable {2} containers during tests.",
            [
                {"answer": "testcontainers", "hint": "Framework for containerized test dependencies", "options": ["testcontainers", "sqlite", "mock_db"]},
                {"answer": "docker", "hint": "Containerization platform", "options": ["docker", "virtualbox", "cloud"]}
            ],
            [
                {"q": "What is the primary advantage of Testcontainers over mocking databases?", "a": ["It runs tests against the genuine production database engine inside a throwaway container", "It eliminates the need to write test assertions", "It makes tests run without Docker", "It converts SQL to Python automatically"], "c": 0, "why": "Testcontainers provides 100% engine fidelity, verifying real SQL features like JSONB and indexes."},
                {"q": "How does wrapping test operations in a transaction rollback speed up database tests?", "a": ["It reverts all changes instantly without dropping and recreating tables between tests", "It saves queries to disk asynchronously", "It disables foreign key constraint checks", "It runs tests in parallel without threads"], "c": 0, "why": "Transaction rollbacks clean up test mutations in milliseconds without expensive schema rebuilding."},
                {"q": "Why is a shared staging database an anti-pattern for automated CI test suites?", "a": ["Concurrent CI runs collide and overwrite each other's data, causing intermittent test failures", "Staging databases are illegal under software licenses", "Staging databases only accept read-only queries", "Staging databases cannot store passwords"], "c": 0, "why": "Shared databases introduce cross-test coupling and race conditions across concurrent CI pipelines."},
                {"q": "What happens to a Testcontainer when the test session completes?", "a": ["The container and its volumes are automatically stopped and removed", "It continues running forever on the host machine", "It is pushed to Docker Hub", "It is converted into a virtual machine image"], "c": 0, "why": "Testcontainers lifecycle managers guarantee container termination upon process exit."}
            ],
            "You know how to run realistic integration tests against ephemeral databases.",
            "Testing HTTP APIs and Request Pipelines", "Test web endpoints, middleware, status codes, and JSON payloads."
        ),
        build_lesson(
            6, "testing-http-apis-pipelines", "Testing HTTP APIs and Request Pipelines", "API Testing",
            "Testing REST APIs and web frameworks using ASGI/WSGI test clients without network overhead.",
            "Why is using an in-process ASGI/WSGI test client faster than launching a real web server and calling requests?",
            ["Test clients call the application handler function directly in memory without TCP sockets or port binding", "Test clients run on the GPU", "Test clients skip Python execution", "Test clients disable JSON parsing"],
            0, "In-process test clients execute the entire HTTP middleware and routing stack directly in memory.",
            [
                "<p>Testing web APIs does not require launching a real HTTP server on port 8000 and making network requests with curl. Modern web frameworks (FastAPI, Flask, Django, Express) provide <strong>in-process test clients</strong>.</p>",
                "<p>In FastAPI and Starlette, the `TestClient` uses the ASGI interface to pass simulated HTTP request scopes directly into the application pipeline in memory. You test routing, middleware, authentication, status codes, and JSON response bodies with zero network latency.</p>",
                "<pre><code># FastAPI TestClient example\nfrom fastapi.testclient import TestClient\nfrom my_app.main import app\n\nclient = TestClient(app)\n\ndef test_create_item_endpoint():\n    # Make in-memory simulated HTTP POST\n    response = client.post(\n        \"/items\",\n        json={\"name\": \"Mechanical Keyboard\", \"price\": 120.00},\n        headers={\"Authorization\": \"Bearer test_token\"}\n    )\n\n    assert response.status_code == 201\n    data = response.json()\n    assert data[\"name\"] == \"Mechanical Keyboard\"\n    assert \"id\" in data</code></pre>",
                "<p>This approach tests the complete web stack—Pydantic validation, dependency injection, routing, headers, and serialization—in under 10 milliseconds per request.</p>",
                "<div class=\"callout\"><p><strong>Tip:</strong> Always write test cases for invalid input payloads (e.g. negative prices, missing fields) to verify that your API returns 422 Unprocessable Entity or 400 Bad Request with informative validation messages.</p></div>"
            ],
            "In-Process ASGI Pipeline", "Executing HTTP requests in pure memory",
            [
                {"title": "TestClient.get('/items')", "lines": ["Synthesizes HTTP scope", "No TCP socket allocation"]},
                {"title": "Middleware & Routing", "lines": ["Auth, CORS, Rate Limiting", "Path resolution in RAM"]},
                {"title": "Response Object", "lines": ["Status: 200 OK", "JSON parsed payload in μs"]}
            ],
            "Testing Matrix for Endpoints", "Comprehensive endpoint verification",
            [
                {"title": "Success (200 / 201)", "lines": ["Valid payload & auth", "Assert JSON schema"]},
                {"title": "Client Error (400 / 422)", "lines": ["Missing required field", "Assert error response format"]},
                {"title": "Auth Error (401 / 403)", "lines": ["Missing or invalid token", "Confirm security gate holds"]}
            ],
            "Fill in the HTTP test client concepts",
            "An ASGI test client executes the full HTTP pipeline in {1} without binding to a physical {2}.",
            [
                {"answer": "memory", "hint": "Pure RAM execution without sockets", "options": ["memory", "disk", "cloud"]},
                {"answer": "network port", "hint": "TCP port on localhost like 8000", "options": ["network port", "git branch", "database table"]}
            ],
            [
                {"q": "What layers of the web stack are exercised by an in-process TestClient?", "a": ["Routing, middleware, request validation, authentication, and JSON serialization", "Only database SQL queries", "Browser DOM rendering and CSS stylesheets", "Operating system firewall rules"], "c": 0, "why": "In-process test clients execute the entire backend request-response pipeline."},
                {"q": "Why is testing HTTP status codes crucial for REST APIs?", "a": ["Status codes form the foundational contract that client applications and frontend code rely upon", "Status codes change the color of terminal logs", "Status codes speed up network bandwidth", "Status codes are required by web hosting providers"], "c": 0, "why": "Clients use status codes (200, 201, 400, 401, 404, 500) to branch logic reliably."},
                {"q": "How should an API handle a POST request with missing required JSON fields?", "a": ["Return HTTP 400 Bad Request or 422 Unprocessable Entity with details on missing fields", "Crash the server with an uncaught exception", "Return HTTP 200 OK with null values", "Redirect to the homepage"], "c": 0, "why": "Standard REST practices require returning 4xx client error status codes for invalid payloads."},
                {"q": "What is the execution speed advantage of TestClient over running a real web server?", "a": ["It avoids network socket overhead and process management, running hundreds of requests per second", "It runs without installing Python", "It requires no CPU cycles", "It compiles HTML directly to WebAssembly"], "c": 0, "why": "Executing directly in memory eliminates socket creation and network stack overhead."}
            ],
            "You know how to test HTTP endpoints and request pipelines thoroughly.",
            "The Testing Pyramid vs The Testing Trophy", "Compare competing testing philosophies and choose the right mix."
        ),
        build_lesson(
            7, "pyramid-vs-trophy", "The Testing Pyramid vs The Testing Trophy", "Methodology",
            "Comparing Mike Cohn's Testing Pyramid and Kent C. Dodds' Testing Trophy to balance unit, integration, and E2E tests.",
            "What is the core argument of the 'Testing Trophy' philosophy compared to the traditional pyramid?",
            ["Integration tests provide the highest return on investment by balancing high confidence with reasonable speed and cost", "Unit tests are completely useless and should never be written", "End-to-end tests are the cheapest tests to write and maintain", "Manual QA testing is superior to all automated tests"],
            0, "The Testing Trophy emphasizes integration tests as the sweet spot between confidence and maintenance effort.",
            [
                "<p>For over a decade, Mike Cohn's <strong>Testing Pyramid</strong> was the undisputed law of testing: write mountains of unit tests, some integration tests, and very few end-to-end tests. But as web architectures evolved, many teams found that isolated unit tests with mocked collaborators passed while real production flows failed.</p>",
                "<p>Kent C. Dodds proposed the <strong>Testing Trophy</strong>, which reshapes testing priorities for modern full-stack systems:</p>",
                "<ul><li><strong>Static Analysis (Base):</strong> Linters (ESLint, Ruff) and Type Checkers (TypeScript, Mypy) catching syntax and type errors before code even runs.</li><li><strong>Unit Tests:</strong> Fast tests for complex edge cases, mathematical algorithms, and pure utility functions.</li><li><strong>Integration Tests (Biggest Body):</strong> The bulk of your test effort! Testing components working together with real databases and services.</li><li><strong>End-to-End Tests (Top):</strong> Critical smoke tests verifying user-facing journeys in real browsers.</li></ul>",
                "<pre><code># The Testing Philosophy Comparison\n# Testing Pyramid:  Unit (60%) > Integration (30%) > E2E (10%)\n# Testing Trophy:   Integration (50%) > Unit (30%) > Static (15%) > E2E (5%)\n\n# Guiding Rule from Kent C. Dodds:\n# 'Write tests. Not too many. Mostly integration.'</code></pre>",
                "<div class=\"callout\"><p><strong>The Insight:</strong> Unit tests give you pinpoint accuracy when an isolated algorithm breaks. Integration tests give you real confidence that the system actually works when plugged together.</p></div>"
            ],
            "Testing Models Compared", "Pyramid vs Trophy layer proportions",
            [
                {"title": "The Classic Pyramid", "lines": ["Wide Unit Base", "Narrow Integration", "Tiny E2E Apex"]},
                {"title": "The Testing Trophy", "lines": ["Static Check Foundation", "Bulging Integration Core", "Balanced Unit & E2E"]},
                {"title": "Key Trade-off", "lines": ["Pyramid prioritizes isolation & speed", "Trophy prioritizes confidence & ROI"]}
            ],
            "Return on Investment Spectrum", "Evaluating confidence vs maintenance cost",
            [
                {"title": "Unit Tests", "lines": ["Low Cost / Fast Execution", "Moderate confidence on real seams"]},
                {"title": "Integration Tests", "lines": ["Moderate Cost / Moderate Speed", "HIGH confidence on real behavior"]},
                {"title": "E2E Tests", "lines": ["High Cost / Slow Execution", "Maximum confidence, high flakiness"]}
            ],
            "Fill in the testing philosophy comparison",
            "While the pyramid emphasizes a broad base of {1} tests, the trophy places its largest emphasis on {2} tests.",
            [
                {"answer": "unit", "hint": "Isolated single-component tests", "options": ["unit", "manual", "system"]},
                {"answer": "integration", "hint": "Tests verifying collaborating components", "options": ["integration", "static", "acceptance"]}
            ],
            [
                {"q": "What is the primary rationale for the Testing Trophy's emphasis on integration tests?", "a": ["Integration tests verify real component interaction while remaining fast enough to run in modern CI pipelines", "Integration tests take fewer lines of code to write", "Integration tests do not require a compiler", "Integration tests replace the need for security audits"], "c": 0, "why": "Integration tests deliver the best balance of confidence and maintenance effort."},
                {"q": "What layer sits at the foundation of the Testing Trophy?", "a": ["Static analysis: linters and static type checkers like TypeScript and Mypy", "Manual testing by QA teams", "Performance load testing", "End-to-end browser automation"], "c": 0, "why": "Static analysis catches whole classes of errors (syntax, typos, types) with zero runtime cost."},
                {"q": "When is the Testing Pyramid preferable to the Testing Trophy?", "a": ["In domain-heavy systems with complex algorithmic rules, calculations, and state machines", "In static HTML landing pages", "In projects with zero business logic", "When developers do not have computers"], "c": 0, "why": "Heavy mathematical or rule-based domains benefit from exhaustive, microsecond unit tests."},
                {"q": "What phrase encapsulates Kent C. Dodds' testing philosophy?", "a": ["Write tests. Not too many. Mostly integration.", "Test everything with 100% coverage at all costs.", "Never write integration tests.", "Only test code in production."], "c": 0, "why": "This famous summary highlights pragmatic balance over dogmatic test proliferation."}
            ],
            "You know how to evaluate and balance unit, integration, and static testing strategies.",
            "Balancing Speed, Isolation, and Realism", "Build a high-performance test suite that developers love running."
        ),
        build_lesson(
            8, "balancing-speed-isolation-realism", "Balancing Speed, Isolation, and Realism", "Engineering Practice",
            "Synthesizing unit and integration testing into a cohesive, sustainable engineering workflow.",
            "What is the ultimate measure of a test suite's success?",
            ["It allows teams to deploy changes rapidly with high confidence and minimal maintenance friction", "It achieves 100% line coverage regardless of run time", "It runs exclusively on local laptops without CI", "It contains more lines of test code than production code"],
            0, "A great test suite empowers developers to ship features quickly without fear of regressions.",
            [
                "<p>Testing is not an academic exercise; it is an engineering investment. A good test suite pays dividends in development velocity, peaceful on-call rotations, and confident refactoring. A bad test suite bankrupts the team with flaky builds, slow CI queues, and brittle test maintenance.</p>",
                "<p>To achieve the right balance across your codebase:</p>",
                "<ul><li><strong>Keep the local feedback loop under 5 seconds:</strong> Run focused unit tests automatically on file save using watchers (`pytest-watch` or `vitest`).</li><li><strong>Run full integration tests pre-commit or in CI:</strong> Test with Docker Testcontainers and ephemeral databases before merging.</li><li><strong>Treat test code with the same respect as production code:</strong> Refactor tests, eliminate duplication with fixtures, and choose descriptive test names.</li></ul>",
                "<pre><code># The Three Pillars of a Healthy Test Suite\n# 1. SPEED:     Unit tests in < 2 seconds, full suite in < 5 minutes\n# 2. ISOLATION: Tests run in any order, in parallel, with zero state leaks\n# 3. REALISM:   Integration tests verify real PostgreSQL, Redis, and HTTP schemas</code></pre>",
                "<div class=\"callout\"><p><strong>Final Takeaway:</strong> Tests are the specification of your system. When written well, they free you to innovate boldly, knowing that the safety net has your back.</p></div>"
            ],
            "The Three Pillars", "Balancing speed, isolation, and realism",
            [
                {"title": "Speed", "lines": ["Microsecond execution", "Sub-second feedback loops in editor"]},
                {"title": "Isolation", "lines": ["No shared mutable state", "Parallel execution across CPU cores"]},
                {"title": "Realism", "lines": ["Real PostgreSQL & Redis seams", "Confidence in production behavior"]}
            ],
            "Continuous Delivery Workflow", "How test layers protect the pipeline",
            [
                {"title": "Local Edit (Dev)", "lines": ["Linter + Unit Tests", "Feedback in 1 second"]},
                {"title": "Pre-Merge (CI)", "lines": ["Integration + Testcontainers", "Feedback in 3 minutes"]},
                {"title": "Production Deploy", "lines": ["Automated Canary / Smoke", "Zero unexpected regressions"]}
            ],
            "Complete the test balance statement",
            "A balanced testing system combines rapid in-editor {1} tests for speed with containerized {2} tests for production realism.",
            [
                {"answer": "unit", "hint": "Fast in-memory checks", "options": ["unit", "manual", "smoke"]},
                {"answer": "integration", "hint": "Cross-boundary tests against real dependencies", "options": ["integration", "fuzzing", "linting"]}
            ],
            [
                {"q": "What is the primary benefit of running tests in parallel across CPU cores (e.g. pytest -n auto)?", "a": ["It slashes total test suite execution time by distributing tests across multiple worker processes", "It allows tests to share global variables", "It automatically fixes flaky tests", "It converts integration tests into unit tests"], "c": 0, "why": "Parallel execution leverages multi-core CPUs to drastically reduce CI and local runtimes."},
                {"q": "Why must test code be refactored and maintained with the same standards as production code?", "a": ["Poorly written tests become brittle, slow down refactoring, and are eventually deleted by frustrated developers", "Test code is compiled into the production binary", "Linters refuse to run on test files", "Test files count toward user billing"], "c": 0, "why": "High-quality test code remains maintainable and reliable as production code evolves."},
                {"q": "What is the recommended practice when a bug slips into production?", "a": ["First write a failing test that reproduces the bug, then fix the code until the test passes", "Immediately push a quick untracked patch to production", "Delete the test suite and start over", "Blame the QA team in public channels"], "c": 0, "why": "Writing a reproducing test guarantees that the defect will never regress in future releases."},
                {"q": "How does test isolation enable running tests with pytest-xdist?", "a": ["Independent tests do not collide on shared database records or global state when run simultaneously", "It forces tests to run in alphabetical order", "It turns off database connections", "It encrypts test output files"], "c": 0, "why": "Strict isolation ensures tests do not step on each other's data during parallel execution."}
            ],
            "You have completed the Unit Testing & Integration Testing course.",
            "Next Course: Test-Driven Development (TDD)", "Discover how writing tests first drives cleaner architecture and software design."
        )
    ]

    glossary = [
        {"id": "boundaries", "title": "Unit Boundaries & Performance", "terms": [
            {"term": "Unit of Behavior", "def": "A cohesive block of functionality under test, which may comprise a single function or collaborating in-memory classes.", "lesson": 1, "tags": ["testing", "units"]},
            {"term": "Sociable Unit Test", "def": "A unit test that uses real in-memory collaborator classes instead of replacing every dependency with a mock.", "lesson": 1, "tags": ["testing", "architecture"]},
            {"term": "In-Memory Testing", "def": "Executing tests entirely within RAM to achieve microsecond feedback loops without disk or network I/O.", "lesson": 2, "tags": ["testing", "performance"]}
        ]},
        {"id": "doubles", "title": "Mocks & Network Seams", "terms": [
            {"term": "Transport Interception", "def": "Mocking HTTP requests at the adapter level to test serialization and error handling without opening real sockets.", "lesson": 3, "tags": ["testing", "http"]},
            {"term": "Architectural Seam", "def": "An interface boundary where two software modules or systems connect and can be isolated for testing.", "lesson": 4, "tags": ["testing", "patterns"]},
            {"term": "Fake", "def": "A working in-memory implementation of a dependency (such as an in-memory repository) used during testing.", "lesson": 1, "tags": ["testing", "mocks"]}
        ]},
        {"id": "containers", "title": "Databases & Testcontainers", "terms": [
            {"term": "Testcontainers", "def": "A testing library that provisions disposable Docker containers for databases and message brokers during integration tests.", "lesson": 5, "tags": ["testing", "docker"]},
            {"term": "Ephemeral Database", "def": "A temporary database instance spun up strictly for the duration of a test run and discarded immediately after.", "lesson": 5, "tags": ["testing", "databases"]},
            {"term": "In-Process Test Client", "def": "A simulated HTTP client (like Starlette TestClient) that invokes web application handlers in memory.", "lesson": 6, "tags": ["testing", "api"]}
        ]},
        {"id": "philosophy", "title": "Testing Philosophy", "terms": [
            {"term": "Testing Trophy", "def": "A testing model emphasizing integration tests as the primary source of confidence and return on investment.", "lesson": 7, "tags": ["testing", "strategy"]},
            {"term": "Static Analysis", "def": "Verifying code quality, types, and syntax rules without executing the program using linters and type checkers.", "lesson": 7, "tags": ["testing", "tooling"]},
            {"term": "Test Isolation", "def": "The principle that each test executes independently without relying on or mutating shared global state.", "lesson": 8, "tags": ["testing", "determinism"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "Sociable In-Memory Unit Test",
            "label": "Testing real classes in RAM",
            "code": "def test_order_total():\n    cart = Cart([Item(price=50, qty=2)])\n    calc = PriceCalculator(tax_rate=0.1)\n    assert calc.total(cart) == 110.0",
            "lessonN": 1, "lessonSlug": "defining-the-unit", "lessonTitle": "What Is a Unit? Defining Boundaries"
        },
        {
            "title": "HTTP Mocking with Responses",
            "label": "Intercepting network requests",
            "code": "@responses.activate\ndef test_api_call():\n    responses.add(responses.GET, \"https://api.com/u/1\", json={\"id\": 1}, status=200)\n    res = client.get_user(1)\n    assert res.id == 1",
            "lessonN": 3, "lessonSlug": "mocking-external-boundaries", "lessonTitle": "Mocking External I/O and Network Boundaries"
        },
        {
            "title": "Testcontainers PostgreSQL Fixture",
            "label": "Ephemeral containerized database",
            "code": "@pytest.fixture(scope=\"session\")\ndef postgres():\n    with PostgresContainer(\"postgres:16-alpine\") as pg:\n        yield pg",
            "lessonN": 5, "lessonSlug": "ephemeral-databases-testcontainers", "lessonTitle": "Testing with Ephemeral Databases and Testcontainers"
        },
        {
            "title": "FastAPI TestClient Request",
            "label": "In-process ASGI endpoint test",
            "code": "from fastapi.testclient import TestClient\nclient = TestClient(app)\n\ndef test_health():\n    res = client.get(\"/health\")\n    assert res.status_code == 200\n    assert res.json() == {\"status\": \"ok\"}",
            "lessonN": 6, "lessonSlug": "testing-http-apis-pipelines", "lessonTitle": "Testing HTTP APIs and Request Pipelines"
        }
    ]

    course_data = {
        "id": "unit-integration-testing",
        "title": "Unit Testing & Integration Testing",
        "num": 48,
        "emoji": "🔬",
        "desc": "Isolating units, mocking boundaries and testing the seams where components actually meet.",
        "topics": ["Unit Tests", "Integration Tests", "Mocks", "Testcontainers", "API Testing", "Testing Trophy"],
        "mission": "# Mission — Unit Testing & Integration Testing\n\nMaster the balance between isolated unit tests and real integration tests. Learn to draw clean unit boundaries, mock network I/O, spin up Testcontainers, test HTTP endpoints in memory, and build reliable test suites.",
        "notes": "# Notes — Unit Testing & Integration Testing\n\nDistinguish in-memory sociable unit tests from boundary-crossing integration tests. Leverage containers for 100% database parity.",
        "resources": "# Resources — Unit Testing & Integration Testing\n\n- Martin Fowler, *Mocks Aren't Stubs*\n- Kent C. Dodds, *The Testing Trophy*\n- Testcontainers Documentation (testcontainers.com)",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

# ==============================================================================
# COURSE 49: tdd (Test-Driven Development)
# ==============================================================================
def make_course_49():
    lessons = [
        build_lesson(
            1, "red-green-refactor", "The TDD Rhythm: Red, Green, Refactor", "TDD Rhythm",
            "The foundational heartbeat of test-driven development: Red (fail), Green (pass), and Refactor (clean).",
            "Why is the Refactor step in TDD essential, rather than optional?",
            ["Without the refactor step, code becomes a messy accumulation of minimal hacks that barely pass tests", "Refactoring is required by Python compilers", "The test runner will not execute future tests unless refactored", "Tests cannot pass without refactoring"],
            0, "Green proves the code works; Refactoring cleans the design so future additions remain sustainable.",
            [
                "<p><strong>Test-Driven Development (TDD)</strong> is a software development practice introduced by Kent Beck where you write automated tests <em>before</em> writing the production code. It is governed by a strict, repeating three-step micro-loop: <strong>Red, Green, Refactor</strong>.</p>",
                "<ul><li><strong>1. RED:</strong> Write a small test for a behavior that does not exist yet. Run the test and watch it fail for the expected reason.</li><li><strong>2. GREEN:</strong> Write the minimal amount of production code required to make the test pass. Hardcoding values or writing crude logic is completely acceptable here!</li><li><strong>3. REFACTOR:</strong> Now that the safety net is green, clean up the design: remove duplication, improve names, extract methods, and enforce design patterns without changing observable behavior.</li></ul>",
                "<pre><code># The TDD Micro-Cycle (in seconds)\n# 00:00 - Write test_empty_string_returns_zero() -> RED (failing)\n# 00:15 - Write `def add(s): return 0`          -> GREEN (passing)\n# 00:30 - Check names, clean structure          -> REFACTOR (green)\n# Repeat for the next small increment!</code></pre>",
                "<p>The power of TDD lies in its tiny, rapid feedback cycles. You are never more than 60 seconds away from a working, green codebase.</p>",
                "<div class=\"callout\"><p><strong>Rule of Red:</strong> Never skip watching the test fail! If you write a test and it immediately passes before you write any production code, either your test is broken or the functionality already exists.</p></div>"
            ],
            "The TDD Loop", "The repeating three-phase cycle",
            [
                {"title": "1. Red", "lines": ["Write failing test", "Confirm failure message"]},
                {"title": "2. Green", "lines": ["Write simplest code", "Get to green quickly"]},
                {"title": "3. Refactor", "lines": ["Eliminate duplication", "Keep tests passing"]}
            ],
            "State Machine of TDD", "Guiding transitions through development phases",
            [
                {"title": "Red State", "lines": ["Test fails", "Goal: Make it green"]},
                {"title": "Green State", "lines": ["All tests pass", "Goal: Clean the code"]},
                {"title": "Refactor State", "lines": ["Code cleaned", "Tests stay green"]}
            ],
            "Fill in the TDD cycle phases",
            "In TDD, you write a failing test in {1}, make it pass in {2}, and improve the design in {3}.",
            [
                {"answer": "red", "hint": "Failing test phase", "options": ["red", "draft", "plan"]},
                {"answer": "green", "hint": "Passing test phase", "options": ["green", "release", "ship"]},
                {"answer": "refactor", "hint": "Design improvement phase", "options": ["refactor", "deploy", "audit"]}
            ],
            [
                {"q": "Why must you watch a new test fail before writing production code?", "a": ["To verify that the test actually checks the intended behavior and can fail when code is missing", "Because test runners crash if tests pass on the first run", "To allow the operating system to allocate RAM", "To create a git stash"], "c": 0, "why": "Watching a test fail confirms it is not a false positive that passes unconditionally."},
                {"q": "What is the goal of the 'Green' phase in TDD?", "a": ["To make the test pass as quickly as possible with minimal code", "To design the ultimate enterprise architecture", "To write full API documentation", "To achieve 100% test coverage across all files"], "c": 0, "why": "Green is focused strictly on establishing working behavior rapidly."},
                {"q": "When is it permissible to refactor production code during TDD?", "a": ["Only when all tests are currently passing in the Green state", "When tests are failing in the Red state", "Before writing any tests", "Only during annual code reviews"], "c": 0, "why": "Refactoring must occur with a green test suite so you know immediately if your cleanup broke behavior."},
                {"q": "How long should an average TDD iteration take?", "a": ["A few minutes or seconds per small behavioral increment", "Several days per test", "At least one two-week sprint", "One hour per assertion"], "c": 0, "why": "TDD thrives on tight, continuous micro-feedback loops of 1 to 5 minutes."}
            ],
            "You understand the fundamental rhythm of Red, Green, Refactor.",
            "Writing the Failing Test First", "Learn to formulate small, unambiguous behavioral specifications before code."
        ),
        build_lesson(
            2, "writing-the-failing-test", "Writing the Failing Test First", "Test First",
            "Framing tests as unambiguous specifications of intent before writing implementation code.",
            "What mindset shift occurs when writing the test before the implementation?",
            ["You think from the perspective of an API consumer rather than an internal implementer", "You stop caring about code performance", "You must write twice as many functions", "You cannot use object-oriented programming"],
            0, "Writing tests first forces you to design clean, ergonomic APIs that are pleasant to consume.",
            [
                "<p>When you write production code first, you are immersed in implementation details: loops, data structures, and edge cases. You then write tests to accommodate whatever internal design you already created. This frequently results in clumsy, hard-to-call interfaces.</p>",
                "<p>Writing the <strong>test first</strong> forces a profound mental inversion: you become the first consumer of your own API. Before a single function exists, you ask:</p>",
                "<ul><li>What should this class or function be named?</li><li>What parameters make the most intuitive sense?</li><li>What data structure should it return?</li><li>How does the caller handle errors?</li></ul>",
                "<pre><code># Thinking as a consumer first:\ndef test_calculate_cart_total_with_coupon():\n    # I want an API that reads like plain English:\n    cart = ShoppingCart()\n    cart.add_item(\"Book\", price=20.0)\n    cart.apply_coupon(\"SAVE10\")  # 10% off\n\n    assert cart.total == 18.0\n    assert cart.discount == 2.0</code></pre>",
                "<p>Notice that we designed `ShoppingCart`, `add_item`, `apply_coupon`, and the `.total` property in the test before writing a single line of class definition. The test is the architectural specification.</p>",
                "<div class=\"callout\"><p><strong>Guideline:</strong> Take tiny steps. Start with the simplest degenerated case (e.g. empty input, zero, null) before tackling complex branching logic.</p></div>"
            ],
            "Consumer-First API Design", "How writing the test first shapes function ergonomics",
            [
                {"title": "Test First Mindset", "lines": ["How do I want to call this?", "Ergonomic & intuitive API"]},
                {"title": "Implementation Second", "lines": ["How do I make this work?", "Constrained by test contract"]},
                {"title": "Result", "lines": ["Decoupled, easy-to-use code", "Zero untestable private coupling"]}
            ],
            "Incremental Test Sequence", "Building functionality step by step",
            [
                {"title": "Step 1: Empty input", "lines": ["test_add_empty() -> return 0", "Baseline setup"]},
                {"title": "Step 2: Single item", "lines": ["test_add_single('1') -> return 1", "Parse one value"]},
                {"title": "Step 3: Two items", "lines": ["test_add_two('1,2') -> return 3", "Generalize loop"]}
            ],
            "Complete the test-first design sentence",
            "Writing the test first forces developers to design software from the perspective of an {1} rather than an {2}.",
            [
                {"answer": "API consumer", "hint": "The caller using the code", "options": ["API consumer", "operating system", "end user"]},
                {"answer": "implementer", "hint": "The developer writing internal algorithms", "options": ["implementer", "auditor", "intern"]}
            ],
            [
                {"q": "Why does writing tests first improve API design?", "a": ["It forces you to experience using your API before committing to an internal implementation", "It automatically generates UML diagrams", "It eliminates the need for unit testing", "It prevents other developers from modifying your code"], "c": 0, "why": "Designing the call site first creates intuitive, decoupled, caller-friendly interfaces."},
                {"q": "What test should you write first when implementing a new feature in TDD?", "a": ["The simplest degenerate or baseline case, such as empty input or default state", "The most complex failure scenario with multiple concurrent threads", "An end-to-end integration test with a real database", "A performance stress benchmark"], "c": 0, "why": "Starting with the simplest baseline case establishes the initial contract smoothly."},
                {"q": "What is the danger of writing production code before writing any tests?", "a": ["Code is often designed with tight coupling to dependencies, making it hard to test in isolation", "The code will not compile in Python", "The code is automatically deleted by git", "Functions can only have one parameter"], "c": 0, "why": "Code written without testing in mind frequently lacks the seams necessary for test isolation."},
                {"q": "What should you do if your failing test fails with an unexpected error like a SyntaxError?", "a": ["Fix the syntax error so that the test fails for the expected behavioral reason", "Proceed directly to the Refactor phase", "Delete the test file", "Ignore the error and write production code"], "c": 0, "why": "A valid Red phase requires the test to fail specifically due to missing functionality, not test bugs."}
            ],
            "You know how to design clean interfaces by writing tests first.",
            "The Simplest Thing That Could Possibly Work", "Embrace fake-it-until-you-make-it to maintain rapid velocity."
        ),
        build_lesson(
            3, "simplest-thing-that-could-work", "The Simplest Thing That Could Possibly Work", "Minimalism",
            "Overcoming over-engineering by writing the minimal code necessary to make a test pass.",
            "Why does TDD encourage 'faking' return values in the early Green phase?",
            ["It forces the developer to write the next test to drive real algorithmic generalization", "Faked values execute faster in production", "Hardcoded values consume less RAM", "It is required by the Python language specification"],
            0, "Returning hardcoded constants exposes what is actually proven by tests versus what is assumed.",
            [
                "<p>One of the hardest psychological hurdles in TDD is resisting the temptation to implement the complete, final algorithm immediately. Kent Beck famously advises: <em>Do the simplest thing that could possibly work.</em></p>",
                "<p>In the Green phase, it is completely legitimate—and encouraged—to <strong>fake it</strong> by returning a hardcoded constant!</p>",
                "<pre><code># Test 1: Empty string returns 0\ndef test_add_empty():\n    assert add(\"\") == 0\n\n# Minimal implementation (Fake it):\ndef add(numbers: str) -> int:\n    return 0  # Passes the test! Nothing more is proven yet!\n\n# Test 2: Single number returns its integer value\ndef test_add_single_number():\n    assert add(\"5\") == 5\n\n# Triangulation: Now we must generalize!\ndef add(numbers: str) -> int:\n    if not numbers:\n        return 0\n    return int(numbers)</code></pre>",
                "<p>This technique is called <strong>Triangulation</strong>. You only generalize code when you have two or more examples that demand generalization. This stops speculative generality (YAGNI—You Aren't Gonna Need It) dead in its tracks.</p>",
                "<div class=\"callout\"><p><strong>Insight:</strong> If a test passes when returning a hardcoded constant, your test suite has not yet demanded an algorithm. Write the next test to force the algorithm into existence!</p></div>"
            ],
            "The Triangulation Strategy", "Generalizing only when multiple tests demand it",
            [
                {"title": "Test 1: ('') == 0", "lines": ["Simplest code: return 0", "Hardcoded constant"]},
                {"title": "Test 2: ('5') == 5", "lines": ["Simplest code: int(s) if s else 0", "Generalize parsing"]},
                {"title": "Test 3: ('1,2') == 3", "lines": ["Generalize loop: sum(split)", "Full algorithm emerges"]}
            ],
            "YAGNI in Action", "Stopping speculative code before it starts",
            [
                {"title": "Speculative Coding", "lines": ["Write sorting, caching, filters", "None of it is tested or needed"]},
                {"title": "TDD Discipline", "lines": ["Write only what tests demand", "Zero unused dead code"]}
            ],
            "Complete the TDD minimalism sentence",
            "In TDD, developers practice {1} by only generalizing logic when multiple tests demand it, adhering strictly to {2}.",
            [
                {"answer": "triangulation", "hint": "Driving generalization with multiple test cases", "options": ["triangulation", "duplication", "serialization"]},
                {"answer": "YAGNI", "hint": "You Aren't Gonna Need It principle", "options": ["YAGNI", "DRY", "SOLID"]}
            ],
            [
                {"q": "What does YAGNI stand for in software engineering?", "a": ["You Aren't Gonna Need It", "Your Algorithm Generates No Information", "Yield All Global Namespaces Immediately", "You Always Guarantee Numeric Integers"], "c": 0, "why": "YAGNI reminds developers not to add functionality until it is deemed necessary."},
                {"q": "What is 'Triangulation' in Test-Driven Development?", "a": ["Driving general production algorithms by writing two or more specific test cases that contradict hardcoding", "Measuring code coverage using geometric calculations", "Deploying across three cloud availability zones", "Running tests with three different compilers"], "c": 0, "why": "Triangulation forces algorithmic generalization once two or more specific tests exist."},
                {"q": "Why is hardcoding return values useful during early TDD steps?", "a": ["It keeps the code minimal and proves exactly what the existing tests have verified", "It prevents other developers from reading the code", "It bypasses the need for unit tests", "It saves disk space"], "c": 0, "why": "Faking values highlights gaps in test coverage and prevents speculative over-engineering."},
                {"q": "What should you do immediately after getting to Green with a simplistic implementation?", "a": ["Decide whether to refactor or write the next test to drive generalization", "Commit and deploy directly to production", "Delete the test you just wrote", "Rewrite the entire file in C"], "c": 0, "why": "Green is your decision point: either clean up code (Refactor) or advance to the next test (Red)."}
            ],
            "You know how to resist over-engineering using the simplest thing that could possibly work.",
            "The Refactor Step: Improving Without Breaking", "Master the critical discipline of continuous cleanup under a green bar."
        ),
        build_lesson(
            4, "the-refactor-step", "The Refactor Step: Improving Without Breaking", "Refactoring",
            "Safely cleaning design, eliminating duplication, and improving clarity while tests remain green.",
            "What is the strict definition of Refactoring?",
            ["Changing the internal structure of software to make it easier to understand and cheaper to modify, without changing its observable behavior", "Adding new features while fixing old bugs", "Rewriting an entire project in a different programming language", "Formatting code with an automatic linter"],
            0, "Refactoring improves internal structure while strictly preserving external behavior.",
            [
                "<p>Many developers treat TDD as just 'write tests first', completely neglecting the third and most important step: <strong>Refactor</strong>. When you rush from Green directly to the next Red test, your codebase accumulates tech debt and hacky shortcuts.</p>",
                "<p>Refactoring is the dedicated phase where you pay back the debt incurred during the Green phase. Because all tests are passing, you have a completely safe sandbox to clean the code:</p>",
                "<ul><li><strong>Extract Method:</strong> Break large functions into small, well-named helpers.</li><li><strong>Eliminate Duplication:</strong> Apply DRY (Don't Repeat Yourself) between production methods and tests.</li><li><strong>Improve Names:</strong> Rename cryptic variables to intention-revealing terms.</li><li><strong>Introduce Value Objects:</strong> Group primitive fields into domain objects.</li></ul>",
                "<pre><code># GREEN: Works, but messy and contains duplication\ndef calculate_invoice(items, user):\n    subtotal = 0\n    for item in items:\n        subtotal += item.price * item.quantity\n    if user.is_vip:\n        subtotal = subtotal * 0.90\n    return subtotal + (subtotal * 0.08)\n\n# REFACTORED: Clean, modular, expressive (Tests still pass 100%!)\ndef calculate_invoice(items, user):\n    subtotal = sum(item.total for item in items)\n    discounted = apply_discount(subtotal, user)\n    return apply_tax(discounted)</code></pre>",
                "<div class=\"callout\"><p><strong>Rule of Refactoring:</strong> Never add new features or fix unrelated bugs while in the Refactor step! If you want to add functionality, finish refactoring, ensure tests are green, and then write a new Red test.</p></div>"
            ],
            "The Refactoring Safety Sandbox", "Cleaning code under the protection of green tests",
            [
                {"title": "1. All Green", "lines": ["Test suite passes 100%", "Baseline behavior is locked"]},
                {"title": "2. Structural Edit", "lines": ["Extract method / rename", "No behavioral changes"]},
                {"title": "3. Immediate Verify", "lines": ["Run suite in 200ms", "Confirm still green"]}
            ],
            "Separation of Hats", "Kent Beck's metaphor: wearing one hat at a time",
            [
                {"title": "Adding Functionality Hat", "lines": ["Add new behavior", "Do not refactor existing code"]},
                {"title": "Refactoring Hat", "lines": ["Improve structure", "Do not add new behavior"]}
            ],
            "Complete the refactoring definition",
            "Refactoring modifies the {1} structure of software without changing its {2} behavior.",
            [
                {"answer": "internal", "hint": "Code organization, names, and modules", "options": ["internal", "external", "database"]},
                {"answer": "observable", "hint": "External outputs, results, and interfaces", "options": ["observable", "hidden", "compiled"]}
            ],
            [
                {"q": "Why must you avoid adding new functionality while refactoring?", "a": ["If a test breaks, you cannot tell whether the failure was caused by your refactoring or your new feature", "Compilers reject simultaneous edits", "It violates git commit history rules", "It resets the test coverage metric to zero"], "c": 0, "why": "Keeping refactoring separate from feature addition keeps debugging simple and focused."},
                {"q": "What enables a developer to refactor aggressively with complete confidence?", "a": ["A comprehensive, fast automated test suite that immediately catches any regression", "Extensive inline code comments", "Writing code exclusively in typed languages", "Reading software architecture books"], "c": 0, "why": "Fast tests provide the safety net that makes bold structural improvements safe."},
                {"q": "What should you do if a test fails while you are refactoring?", "a": ["Revert your last structural edit immediately to get back to green, then take a smaller step", "Change the test assertion so that it passes", "Disable the failing test in CI", "Add a print statement and push to git"], "c": 0, "why": "If a test fails during refactoring, you altered behavior; revert and take a smaller, safer step."},
                {"q": "What code smells should you look to eliminate during the Refactor step?", "a": ["Long methods, duplicated logic, cryptic names, and feature envy", "Unit tests with descriptive names", "Functions that return booleans", "Modules with fewer than 100 lines of code"], "c": 0, "why": "Refactoring targets classic code smells that impede readability and maintainability."}
            ],
            "You know how to safely and continuously refactor code under the protection of tests.",
            "TDD as a Design Tool: Interface-First Thinking", "Discover how TDD drives modular, loosely coupled architectures."
        ),
        build_lesson(
            5, "tdd-as-a-design-tool", "TDD as a Design Tool: Interface-First Thinking", "Design Impact",
            "Using TDD to force loose coupling, high cohesion, and dependency injection into system architecture.",
            "Why is testable code almost universally better designed than untestable code?",
            ["To be testable in isolation, code must have low coupling, clear seams, and explicit dependencies", "Testable code runs faster on the CPU", "Testable code uses fewer memory registers", "Test frameworks enforce strict OOP design patterns"],
            0, "Testability demands decoupling and clear interfaces, which are the hallmarks of clean architecture.",
            [
                "<p>Many programmers think TDD is primarily a testing technique. In reality, TDD is an <strong>architectural design tool</strong> disguised as a testing practice. The tests are a beneficial byproduct; the real deliverable is a modular, decoupled architecture.</p>",
                "<p>When you attempt to write a test first, code that suffers from poor design becomes immediately painful to test:</p>",
                "<ul><li><strong>Tight Coupling:</strong> If a class instantiates its own database connections or global singletons, you cannot test it without spinning up a real database. TDD forces you to use <strong>Dependency Injection</strong>.</li><li><strong>Monolithic Responsibilities:</strong> If a function does five things, testing it requires a 50-line Arrange block. TDD pushes you toward the <strong>Single Responsibility Principle</strong>.</li><li><strong>Hidden Assumptions:</strong> TDD exposes hidden inputs (like system clocks or environment variables) and turns them into explicit parameters.</li></ul>",
                "<pre><code># HARD TO TEST: Tightly coupled singleton dependency\nclass ReportGenerator:\n    def generate(self):\n        db = DatabaseConnection.get_instance()  # Global singleton!\n        data = db.query(\"SELECT * FROM sales\")\n        return format_pdf(data)\n\n# EASY TO TEST (Driven by TDD): Decoupled repository interface\nclass ReportGenerator:\n    def __init__(self, sales_repository):\n        self.sales_repo = sales_repository  # Injected dependency!\n\n    def generate(self):\n        data = self.sales_repo.get_sales_data()\n        return format_pdf(data)</code></pre>",
                "<div class=\"callout\"><p><strong>Listen to the Tests:</strong> Test pain is design feedback. When a test is hard to write, do not fight the test; redesign the code!</p></div>"
            ],
            "Testability Drives Architecture", "How test constraints force clean design patterns",
            [
                {"title": "Hard to Test", "lines": ["Hardcoded singletons", "Massive functions", "Hidden global state"]},
                {"title": "Test Resistance", "lines": ["Arrange phase is agonizing", "Painful mocking required"]},
                {"title": "Driven Design", "lines": ["Dependency Injection", "Single Responsibility", "Clean seams & interfaces"]}
            ],
            "Listen to the Test Feedback", "Diagnosing architectural smells through testing friction",
            [
                {"title": "Pain: Massive Arrange Block", "lines": ["Smell: Class has too many responsibilities", "Fix: Split class into smaller cohesive units"]},
                {"title": "Pain: Cannot Mock Network", "lines": ["Smell: Direct instantiation of I/O classes", "Fix: Pass interface through constructor"]}
            ],
            "Fill in the TDD design impact sentence",
            "When a class is difficult to test, it is usually a design symptom of tight {1} or lack of {2}.",
            [
                {"answer": "coupling", "hint": "Excessive interconnection between components", "options": ["coupling", "typing", "caching"]},
                {"answer": "cohesion", "hint": "Degree to which class elements belong together", "options": ["cohesion", "memory", "inheritance"]}
            ],
            [
                {"q": "What is meant by the phrase 'Listen to your tests'?", "a": ["Difficulty writing a test indicates an architectural flaw like tight coupling or poor cohesion in the production code", "Listen to terminal audio notifications when tests finish", "Read test failure messages out loud", "Follow test framework recommendations for variable names"], "c": 0, "why": "Testing friction is the earliest and most reliable warning sign of architectural decay."},
                {"q": "How does TDD naturally encourage Dependency Injection?", "a": ["To isolate classes during test execution, dependencies must be passed in rather than hardcoded internally", "TDD frameworks require dependency injection containers", "Python functions only accept dependencies as arguments", "Dependency injection makes tests compile faster"], "c": 0, "why": "Passing dependencies via constructors allows injecting mocks or fakes during test runs."},
                {"q": "What is the relationship between TDD and the Single Responsibility Principle (SRP)?", "a": ["Classes that do one thing are easy to arrange and test; classes that do multiple things require bloated, painful test setups", "TDD requires every class to have exactly one method", "SRP eliminates the need for unit tests", "TDD forbids classes from having state"], "c": 0, "why": "Cohesive single-responsibility classes are vastly simpler to test in isolation."},
                {"q": "What happens when developers ignore test friction and use heavy monkey-patching instead?", "a": ["The architecture remains tightly coupled and becomes brittle, while tests become fragile and difficult to maintain", "The code becomes 10x faster", "The test runner fixes the architecture automatically", "The compiler issues a design error"], "c": 0, "why": "Monkey-patching treats the symptom while leaving the underlying architectural rot intact."}
            ],
            "You understand how TDD acts as a powerful architectural design driver.",
            "Inside-Out vs Outside-In TDD", "Compare bottom-up domain modeling with top-down user journey driving."
        ),
        build_lesson(
            6, "inside-out-vs-outside-in", "Inside-Out vs Outside-In TDD", "TDD Styles",
            "Exploring the two primary flavors of TDD: Chicago School (Inside-Out) and London School (Outside-In).",
            "What distinguishes London School (Outside-In) TDD from Chicago School (Inside-Out) TDD?",
            ["London School starts at user-facing boundaries and mocks collaborators downwards; Chicago School starts at core domain models and builds outwards", "London School is only used in the UK", "Chicago School does not use assertions", "London School does not allow refactoring"],
            0, "London school drives design top-down using mocks; Chicago school builds bottom-up using real collaborator state.",
            [
                "<p>Over the years, two distinct schools of TDD thought emerged, each with different philosophies regarding design direction and mocking:</p>",
                "<ul><li><strong>Chicago School (Classicist / Inside-Out):</strong> You start by building the core domain logic first (e.g. `Money`, `OrderItem`, `TaxCalculator`) using real objects and state verification. Once core domain units work, you build outward toward controllers and APIs. Mocks are used sparingly.</li><li><strong>London School (Mockist / Outside-In):</strong> You start at the outermost boundary (e.g. HTTP controller or CLI command) and work inward. You mock immediate collaborators, discovering the interfaces you need as you go, and then implement the collaborators in subsequent steps.</li></ul>",
                "<pre><code># Chicago School (Inside-Out): State-based, real collaborators\ndef test_cart_total():\n    item = Item(price=10)\n    cart = Cart([item])\n    assert cart.total() == 10  # Verifies real object state\n\n# London School (Outside-In): Interaction-based, mock collaborators\ndef test_order_controller():\n    mock_order_service = Mock()\n    controller = OrderController(order_service=mock_order_service)\n    controller.post({\"item\": \"Widget\"})\n    mock_order_service.create.assert_called_once()  # Verifies protocol</code></pre>",
                "<p>Experienced engineers use both styles: Outside-In to discover system seams and user workflows, and Inside-Out for intricate mathematical algorithms and domain state machines.</p>",
                "<div class=\"callout\"><p><strong>Pragmatic Hybrid:</strong> Use Outside-In acceptance tests to drive the overall feature, then drop into Inside-Out unit tests to flesh out complex business logic.</p></div>"
            ],
            "TDD Schools Compared", "London vs Chicago design approaches",
            [
                {"title": "London (Outside-In)", "lines": ["Start at UI / Controller", "Mock collaborators downwards", "Interaction & protocol focus"]},
                {"title": "Chicago (Inside-Out)", "lines": ["Start at Core Domain / Model", "Use real objects & state", "Algorithmic & state focus"]},
                {"title": "Synthesis", "lines": ["Outside-In for seams & flows", "Inside-Out for domain rules"]}
            ],
            "Design Flow Direction", "Visualizing top-down vs bottom-up",
            [
                {"title": "Top-Down (London)", "lines": ["Controller -> Service -> Repository", "Mocks define missing contracts"]},
                {"title": "Bottom-Up (Chicago)", "lines": ["Value Objects -> Entities -> Services", "Solid foundation assembled upwards"]}
            ],
            "Fill in the TDD schools comparison",
            "The {1} school builds top-down using mocks, while the {2} school builds bottom-up using real domain objects.",
            [
                {"answer": "London", "hint": "Mockist outside-in style", "options": ["London", "Berlin", "Tokyo"]},
                {"answer": "Chicago", "hint": "Classicist inside-out style", "options": ["Chicago", "New York", "Paris"]}
            ],
            [
                {"q": "What is the primary strength of London School (Outside-In) TDD?", "a": ["It prevents building functionality that is never actually needed by the outer application or user", "It completely eliminates the need for test assertions", "It makes tests run in parallel automatically", "It guarantees zero memory allocations"], "c": 0, "why": "Starting at the entry point ensures every lower-level collaborator is built to satisfy a real consumer requirement."},
                {"q": "What is the primary danger of dogmatic London School TDD?", "a": ["Heavy mocking can couple tests to exact method call sequences, making tests brittle when internals change", "Tests become too fast to measure", "Code coverage is capped at 50%", "Mocks cannot be run on Linux"], "c": 0, "why": "Verifying interactions rather than outcomes can make tests sensitive to trivial internal implementation details."},
                {"q": "Why do many teams prefer Chicago School for core domain logic?", "a": ["Domain models are rich in state and calculations; verifying real outputs without mocks is straightforward and resilient", "Chicago School is required by Python", "Domain models cannot be mocked", "It requires no knowledge of testing"], "c": 0, "why": "State-based testing of real domain models produces robust tests that survive refactoring."},
                {"q": "How does a pragmatic team combine both schools?", "a": ["Use Outside-In tests for top-level user journeys, and Inside-Out tests for core domain algorithms", "Alternate schools on odd and even days of the week", "Assign London to junior developers and Chicago to seniors", "Use London for CSS and Chicago for HTML"], "c": 0, "why": "A hybrid approach leverages the interface discovery of Outside-In with the resilience of Inside-Out."}
            ],
            "You know when and how to apply both Inside-Out and Outside-In TDD.",
            "Common TDD Traps and Dogmatism", "Recognize and avoid dogmatic pitfalls that derail TDD adoption."
        ),
        build_lesson(
            7, "tdd-traps-and-dogmatism", "Common TDD Traps and Dogmatism", "Anti-Patterns",
            "Avoiding the common pitfalls of TDD dogmatism: testing trivial code, over-mocking, and paralysis.",
            "What is a common trap that leads developers to abandon TDD?",
            ["Writing tests for trivial getters, setters, and framework boilerplate instead of real business logic", "Running tests with automated test runners", "Writing tests that execute in under a second", "Refactoring code when tests are green"],
            0, "Testing trivial boilerplate creates high maintenance overhead with zero real defect-prevention value.",
            [
                "<p>Like many powerful engineering disciplines, TDD can be distorted into rigid dogmatism that slows teams down instead of speeding them up. Recognizing common TDD traps is essential for long-term sustainable practice.</p>",
                "<p>Key TDD anti-patterns to avoid:</p>",
                "<ul><li><strong>Testing the Trivial:</strong> Writing tests for simple field accessors, standard library functions, or one-line ORM definitions. If code has zero conditional logic, a unit test has near-zero ROI.</li><li><strong>Mocking Every Seam:</strong> Replacing every single collaborator with a mock until your tests only verify that method A calls method B with arguments C. If you change a method name, 50 tests break even though behavior is intact!</li><li><strong>Refactoring Paralysis:</strong> Spending three hours polishing code during the Refactor step instead of taking small, focused steps.</li><li><strong>Never Spiking or Prototyping:</strong> Refusing to write exploratory code when exploring an unfamiliar API or architecture.</li></ul>",
                "<pre><code># DOGMATIC ANTI-PATTERN: Testing trivial property accessors\ndef test_user_set_name():\n    user = User()\n    user.name = \"Bob\"\n    assert user.name == \"Bob\"  # Zero value! You are testing Python itself!\n\n# HIGH ROI: Testing genuine business decisions and edge cases\ndef test_cannot_transfer_more_than_daily_limit():\n    account = Account(daily_limit=1000)\n    with pytest.raises(DailyLimitExceeded):\n        account.transfer(1500)</code></pre>",
                "<div class=\"callout\"><p><strong>The Spike Solution:</strong> When you do not know how a problem should be structured, throw away TDD temporarily! Write a dirty, exploratory prototype (a 'Spike') to learn the problem space, throw the code away, and then TDD the real solution cleanly.</p></div>"
            ],
            "Common TDD Anti-Patterns", "Traps that undermine developer productivity",
            [
                {"title": "Testing Boilerplate", "lines": ["Asserting getters & setters", "Zero ROI, high maintenance"]},
                {"title": "Mock Obsession", "lines": ["Mocking every single class", "Brittle tests coupled to internals"]},
                {"title": "Dogmatic Refusal to Spike", "lines": ["TDD-ing in complete ignorance", "Paralysis when problem is unknown"]}
            ],
            "The Spike-and-Stabilize Loop", "Balancing exploration with TDD rigor",
            [
                {"title": "1. Exploration Spike", "lines": ["Throwaway prototype code", "Learn API constraints & physics"]},
                {"title": "2. Trash Prototype", "lines": ["Delete the messy spike code", "Retain the architectural insight"]},
                {"title": "3. Clean TDD Cycle", "lines": ["Rebuild with Red-Green-Refactor", "Production-grade, fully tested"]}
            ],
            "Complete the TDD trap remediation sentence",
            "When exploring unfamiliar architectures or APIs, developers should write a throwaway {1} before rebuilding cleanly with {2}.",
            [
                {"answer": "spike", "hint": "Exploratory prototype to gain knowledge", "options": ["spike", "linter", "macro"]},
                {"answer": "TDD", "hint": "Disciplined test-first cycle", "options": ["TDD", "manual QA", "waterfall"]}
            ],
            [
                {"q": "What is a 'Spike' in agile and TDD terminology?", "a": ["A temporary, throwaway prototype written strictly to explore technical feasibility and learn an API", "A sudden unexpected drop in code coverage", "A test that takes longer than 10 seconds", "A git merge conflict on the main branch"], "c": 0, "why": "Spikes are time-boxed exploratory experiments used to understand problems before applying TDD."},
                {"q": "Why is testing third-party library internals (like testing that 'dict[key] = val' works) an anti-pattern?", "a": ["You are testing the standard library rather than your own business logic, adding maintenance overhead for zero gain", "Third-party libraries cannot be tested in Python", "It slows down the internet connection", "It causes compiler memory leaks"], "c": 0, "why": "Trust that standard libraries and well-maintained frameworks work; test your own domain rules."},
                {"q": "What is the consequence of 'mock-heavy' testing on refactoring?", "a": ["Tests become brittle because any internal restructuring breaks mock expectations even when behavior is unchanged", "Tests become completely immune to breaking", "Refactoring runs 10x faster", "Code coverage increases to 200%"], "c": 0, "why": "Mocks verify internal interactions; refactoring changes those interactions, breaking mock assertions."},
                {"q": "What should you do with exploratory spike code once you understand the solution?", "a": ["Discard or set it aside, and implement the real solution using disciplined TDD", "Deploy the spike directly to production", "Write tests after shipping the spike to users", "Add comments to the spike and merge"], "c": 0, "why": "Throwing away the spike allows you to build the clean, tested production implementation without baggage."}
            ],
            "You know how to avoid TDD dogmatism and practice pragmatic test-first engineering.",
            "When TDD Shines and When to Prototype", "Evaluate project context to choose the optimal engineering strategy."
        ),
        build_lesson(
            8, "when-tdd-shines", "When TDD Shines and When to Prototype", "Pragmatic Practice",
            "Identifying when TDD provides massive leverage versus when exploratory prototyping is more effective.",
            "In which scenario does Test-Driven Development deliver the highest return on investment?",
            ["Complex domain logic, parsers, state machines, financial calculations, and well-understood requirements", "Flipping CSS button colors on a temporary landing page", "Connecting a webcam driver for the first time", "Writing a one-off shell script for a local directory"],
            0, "TDD excels when requirements are clear and logic is complex, ensuring bulletproof correctness.",
            [
                "<p>Test-Driven Development is an extraordinary engineering tool, but like all tools, it has ideal use cases and contexts where other approaches are superior. Knowing <em>when</em> to use TDD is just as important as knowing <em>how</em> to use it.</p>",
                "<p><strong>Where TDD Delivers Maximum ROI:</strong></p>",
                "<ul><li><strong>Complex Domain Algorithms:</strong> Financial billing, interest calculations, tax engines, and game rules.</li><li><strong>Parsers and Compilers:</strong> Converting input strings into abstract syntax trees or structured data.</li><li><strong>State Machines & Protocols:</strong> Payment processing states, order fulfillment lifecycles, and network handshakes.</li><li><strong>Bug Fixes:</strong> Writing a failing reproduction test before fixing the bug guarantees the defect will never return.</li></ul>",
                "<p><strong>Where Exploratory Prototyping Beats TDD:</strong></p>",
                "<ul><li><strong>UI Layout & Aesthetics:</strong> Tweaking margins, colors, and animations is visual; TDD provides little value compared to hot reloading.</li><li><strong>Uncharted Explorations:</strong> When you don't even know what data structures you need, prototyping beats rigid test-first.</li></ul>",
                "<pre><code># The TDD Decision Matrix\n# Known problem + Complex business logic -> STRICT TDD\n# Production bug report                  -> TDD (reproduce then fix)\n# Unfamiliar API / Third-party probe     -> SPIKE PROTOTYPE\n# Visual UI design / CSS adjustments     -> VISUAL HOT-RELOAD</code></pre>",
                "<div class=\"callout\"><p><strong>Final Insight:</strong> TDD is not a religion. It is a superpower for writing bulletproof logic with elegant interfaces. Use it where precision and durability matter most.</p></div>"
            ],
            "TDD Decision Quadrant", "Matching engineering methods to task characteristics",
            [
                {"title": "High Logic / Known Spec", "lines": ["Billing, Parsers, State Machines", "STRICT TDD (Maximum ROI)"]},
                {"title": "Bug Reproduction", "lines": ["Customer reported regressions", "TDD: Write failing test, then fix"]},
                {"title": "Visual UI / Exploration", "lines": ["CSS tweaks, R&D probes", "Interactive Hot Reload & Spikes"]}
            ],
            "The Bug Fix TDD Workflow", "Eliminating regressions permanently",
            [
                {"title": "1. Reproduce (Red)", "lines": ["Write test replicating customer bug", "Confirm test fails identically"]},
                {"title": "2. Repair (Green)", "lines": ["Apply minimal production fix", "Watch test turn green"]},
                {"title": "3. Safeguard", "lines": ["Merge into main test suite", "Bug can never silently regress"]}
            ],
            "Complete the TDD applicability sentence",
            "TDD provides the highest leverage on complex {1} logic and state machines, while visual UI tweaks benefit more from {2}.",
            [
                {"answer": "domain", "hint": "Business rules and calculations", "options": ["domain", "network", "CSS"]},
                {"answer": "hot reload", "hint": "Instant visual browser refresh", "options": ["hot reload", "formal verification", "mutation testing"]}
            ],
            [
                {"q": "Why is TDD the premier methodology for fixing production bugs?", "a": ["Writing the reproducing test first proves the bug exists and guarantees it can never quietly regress in the future", "It automatically refunds affected customers", "It eliminates the need to deploy fixes", "It compiles bug reports into PDF format"], "c": 0, "why": "A reproduction test captures the bug forever in your automated regression suite."},
                {"q": "Why does TDD struggle when designing user-facing visual interfaces (like CSS layouts)?", "a": ["Visual aesthetics and UX polish require rapid visual perception and feedback, which code assertions cannot replicate well", "Browsers refuse to execute unit tests", "CSS cannot be parsed by computers", "HTML tags change dynamically every second"], "c": 0, "why": "Visual aesthetics are best evaluated by human eyes with browser hot-reloading."},
                {"q": "What type of software systems universally benefit from test-driven design?", "a": ["Compilers, financial engines, parsers, and transactional banking systems", "Static one-page marketing flyers", "Disposable shell scripts", "Temporary proof-of-concept mockups"], "c": 0, "why": "High-consequence algorithmic systems demand the precision and safety net of TDD."},
                {"q": "How does mastery of TDD change a developer's relationship with legacy code?", "a": ["They gain the confidence to refactor and improve legacy systems by wrapping them in characterization tests first", "They immediately demand that all legacy code be deleted", "They avoid working on existing codebases", "They stop using version control"], "c": 0, "why": "TDD gives engineers the tools and mental model to modernize existing code safely."}
            ],
            "You have completed the Test-Driven Development (TDD) course.",
            "Next Course: Refactoring & Technical Debt", "Learn how to systematically modernize legacy code without breaking behavior."
        )
    ]

    glossary = [
        {"id": "rhythm", "title": "TDD Rhythm & Cycles", "terms": [
            {"term": "Red-Green-Refactor", "def": "The core three-phase micro-cycle of TDD: write a failing test (Red), make it pass (Green), and clean up the design (Refactor).", "lesson": 1, "tags": ["tdd", "patterns"]},
            {"term": "Test-First", "def": "The discipline of authoring an automated test before writing the production code required to satisfy it.", "lesson": 2, "tags": ["tdd", "methodology"]},
            {"term": "Triangulation", "def": "Driving the generalization of production algorithms by introducing two or more specific tests that refute hardcoded returns.", "lesson": 3, "tags": ["tdd", "techniques"]}
        ]},
        {"id": "design", "title": "Design & Principles", "terms": [
            {"term": "Refactoring", "def": "Modifying internal software structure to improve maintainability and readability without altering observable behavior.", "lesson": 4, "tags": ["tdd", "craft"]},
            {"term": "YAGNI", "def": "'You Aren't Gonna Need It' — the principle of implementing functionality only when tests or requirements strictly demand it.", "lesson": 3, "tags": ["tdd", "principles"]},
            {"term": "Interface-First Design", "def": "Designing APIs from the perspective of the caller by writing consumer test cases before implementation.", "lesson": 2, "tags": ["tdd", "architecture"]}
        ]},
        {"id": "schools", "title": "Schools of TDD", "terms": [
            {"term": "Chicago School", "def": "Classicist inside-out TDD focusing on real domain models, state verification, and minimal mocking.", "lesson": 6, "tags": ["tdd", "schools"]},
            {"term": "London School", "def": "Mockist outside-in TDD focusing on top-down interface discovery and interaction verification using mocks.", "lesson": 6, "tags": ["tdd", "schools"]},
            {"term": "Spike Solution", "def": "A time-boxed, throwaway prototype written to explore an unfamiliar technology or problem before TDD.", "lesson": 7, "tags": ["tdd", "prototyping"]}
        ]},
        {"id": "quality", "title": "Quality & Regressions", "terms": [
            {"term": "Defect Reproduction Test", "def": "A test written specifically to recreate a reported bug before implementing the bug fix.", "lesson": 8, "tags": ["tdd", "debugging"]},
            {"term": "Test Friction", "def": "Difficulty encountered when writing a test, which serves as early diagnostic feedback of architectural debt.", "lesson": 5, "tags": ["tdd", "architecture"]},
            {"term": "Code Smell", "def": "A surface indication in source code that usually corresponds to a deeper architectural problem or design weakness.", "lesson": 4, "tags": ["tdd", "quality"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "The TDD Micro-Loop",
            "label": "Red -> Green -> Refactor",
            "code": "# 1. RED: Write failing test\ndef test_add(): assert add(2, 3) == 5\n\n# 2. GREEN: Simplest passing code\ndef add(a, b): return a + b\n\n# 3. REFACTOR: Clean up without changing behavior",
            "lessonN": 1, "lessonSlug": "red-green-refactor", "lessonTitle": "The TDD Rhythm: Red, Green, Refactor"
        },
        {
            "title": "Triangulation Example",
            "label": "Generalizing from multiple tests",
            "code": "# Test 1: assert parse('1') == 1  -> return 1 (fake)\n# Test 2: assert parse('2') == 2  -> return int(s) (generalize)",
            "lessonN": 3, "lessonSlug": "simplest-thing-that-could-work", "lessonTitle": "The Simplest Thing That Could Possibly Work"
        },
        {
            "title": "Bug Fix TDD Workflow",
            "label": "Reproduce then eliminate",
            "code": "# 1. Write test reproducing customer ticket #842\ndef test_reproduce_null_discount():\n    assert apply_discount(100, None) == 100 # FAILS\n# 2. Fix code to handle None -> PASS\n# 3. Bug is permanently prevented from regressing",
            "lessonN": 8, "lessonSlug": "when-tdd-shines", "lessonTitle": "When TDD Shines and When to Prototype"
        },
        {
            "title": "Refactoring Discipline",
            "label": "Clean structure under green tests",
            "code": "# Rule: Only refactor when all tests pass.\n# Run tests after EVERY small rename, extraction, or cleanup.",
            "lessonN": 4, "lessonSlug": "the-refactor-step", "lessonTitle": "The Refactor Step: Improving Without Breaking"
        }
    ]

    course_data = {
        "id": "tdd",
        "title": "Test-Driven Development",
        "num": 49,
        "emoji": "🔴",
        "desc": "The red-green-refactor loop: writing the test first to force a design that is easy to call.",
        "topics": ["TDD", "Red-Green-Refactor", "API Design", "Triangulation", "Refactoring", "Clean Architecture"],
        "mission": "# Mission — Test-Driven Development\n\nMaster the craft of writing software test-first. Learn the Red-Green-Refactor rhythm, drive clean API ergonomics, resist speculative over-engineering, and balance Chicago and London schools of thought.",
        "notes": "# Notes — Test-Driven Development\n\nTDD is an architectural design discipline disguised as testing. Fast feedback and decoupled interfaces are the real deliverables.",
        "resources": "# Resources — Test-Driven Development\n\n- Kent Beck, *Test-Driven Development: By Example*\n- Robert C. Martin, *Clean Code*\n- Steve Freeman & Nat Pryce, *Growing Object-Oriented Software, Guided by Tests*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

# ==============================================================================
# COURSE 50: refactoring-technical-debt
# ==============================================================================
def make_course_50():
    lessons = [
        build_lesson(
            1, "what-is-technical-debt", "What Is Technical Debt? Deliberate vs Accidental", "Debt Concepts",
            "Understanding technical debt: deliberate vs accidental debt, Ward Cunningham's metaphor, and the debt quadrant.",
            "What did Ward Cunningham originally mean by the 'technical debt' metaphor?",
            ["Taking an expedient shortcut to ship quickly is like taking a financial loan; you gain speed now, but you must pay interest until the principal is paid down", "Technical debt refers to unpaid cloud server hosting invoices", "Technical debt is a legal penalty for shipping software with security bugs", "Technical debt means writing code without using open-source libraries"],
            0, "Technical debt reflects taking a temporary shortcut to learn or ship, requiring ongoing interest payments until refactored.",
            [
                "<p>In 1992, Ward Cunningham coined the phrase <strong>technical debt</strong> to explain to business stakeholders why engineering teams need time to refactor code. The financial metaphor is brilliant: shipping a quick-and-dirty implementation is like taking out a loan. You accelerate short-term delivery, but until you repay the principal by refactoring, you pay <strong>interest</strong> in the form of slower feature development, increased bugs, and cognitive drag.</p>",
                "<p>Martin Fowler organized debt into the <strong>Technical Debt Quadrant</strong>, categorized along two axes: <em>Deliberate vs Inadvertent</em>, and <em>Prudent vs Reckless</em>:</p>",
                "<ul><li><strong>Deliberate & Prudent:</strong> 'We must ship now to hit the regulatory deadline; we will refactor the billing module next month.' (Legitimate engineering trade-off).</li><li><strong>Deliberate & Reckless:</strong> 'We don't have time for architecture or tests; just hack it into production!'</li><li><strong>Inadvertent & Reckless:</strong> Blind ignorance: junior teams writing spaghetti code without knowing design principles.</li><li><strong>Inadvertent & Prudent:</strong> 'Now that we implemented the feature, we understand the domain much better and realize how the design should have been.'</li></ul>",
                "<pre><code># The Compounding Interest of Tech Debt:\n# Month 1: 5-line hack saves 2 days of architectural design.\n# Month 3: Every new feature in billing takes 20% longer.\n# Month 6: New developers are terrified of touching the billing file.\n# Month 12: A minor bug fix in billing takes 3 weeks and causes a major outage.</code></pre>",
                "<div class=\"callout\"><p><strong>Crucial Rule:</strong> Not all debt is bad. Taking on prudent debt to validate a startup hypothesis is smart business. But like financial debt, unmanaged interest will eventually bankrupt you.</p></div>"
            ],
            "The Technical Debt Quadrant", "Categorizing debt by intent and prudence",
            [
                {"title": "Prudent & Deliberate", "lines": ["Ship now to validate market", "Scheduled repayment plan"]},
                {"title": "Prudent & Inadvertent", "lines": ["Learned better design through delivery", "Healthy evolution of understanding"]},
                {"title": "Reckless & Inadvertent", "lines": ["Ignorance of clean code", "Accumulation of toxic spaghetti"]}
            ],
            "The Cost of Delay (Interest)", "How unmanaged debt slows engineering velocity",
            [
                {"title": "Low Debt Codebase", "lines": ["Feature A: 3 days", "Feature B: 3 days", "Velocity is constant"]},
                {"title": "High Debt Codebase", "lines": ["Feature A: 3 days", "Feature B: 7 days", "Feature C: 21 days (Grinding halt)"]}
            ],
            "Fill in the technical debt classification",
            "According to Martin Fowler, technical debt can be categorized as deliberate or {1}, and prudent or {2}.",
            [
                {"answer": "inadvertent", "hint": "Unintentional debt accumulated through learning", "options": ["inadvertent", "temporary", "financial"]},
                {"answer": "reckless", "hint": "Careless cutting of quality corners", "options": ["reckless", "profitable", "compiled"]}
            ],
            [
                {"q": "What constitutes the 'interest' on technical debt?", "a": ["The ongoing productivity slowdown, cognitive friction, and regression bugs caused by messy code", "Monthly licensing fees paid to cloud providers", "Bank fees on engineering credit cards", "Server electricity costs"], "c": 0, "why": "Interest manifests as friction, bugs, and slower feature delivery on every subsequent change."},
                {"q": "When is taking on technical debt a sensible, deliberate strategy?", "a": ["When racing to validate a critical business hypothesis or meet a fixed market opportunity before competitors", "When developers are too lazy to write tests", "When building core cryptographic security libraries", "When writing healthcare pacemaker firmware"], "c": 0, "why": "Prudent deliberate debt accelerates learning and delivery when speed to market is paramount."},
                {"q": "What happens when a team continuously takes on reckless technical debt without repaying it?", "a": ["Velocity grinds to a near-halt as every change triggers regressions and crashes", "The code automatically refactors itself", "The software becomes an open-source standard", "CI build servers run twice as fast"], "c": 0, "why": "Compounding debt creates an unmaintainable codebase where even tiny edits cause major outages."},
                {"q": "What is 'inadvertent prudent' debt?", "a": ["Debt that becomes visible only after delivering a feature, because building it revealed a deeper understanding of the domain", "Debt created by computer viruses", "Debt that you forgot you borrowed from the bank", "Debt caused by hardware failures"], "c": 0, "why": "Building software teaches you what the design should have been; this hindsight is healthy and inevitable."}
            ],
            "You understand the economic realities and categories of technical debt.",
            "The Refactoring Discipline: Preserving Observable Behavior", "Master the ironclad rule of refactoring: zero behavioral changes."
        ),
        build_lesson(
            2, "the-refactoring-discipline", "The Refactoring Discipline: Preserving Observable Behavior", "Discipline",
            "The strict rules of refactoring: preserving observable behavior, two-hat discipline, and baby steps.",
            "Why is changing behavior while refactoring an anti-pattern?",
            ["If a bug appears, you cannot tell whether it was caused by your structural change or your functional change", "It is forbidden by software licensing agreements", "Refactoring tools will delete the repository", "Compilers cannot run without tests"],
            0, "Mixing structural changes with behavioral changes turns debugging into a confusing nightmare.",
            [
                "<p>Refactoring has a precise, formal definition: <strong>a change made to the internal structure of software to make it easier to understand and cheaper to modify, without changing its observable behavior.</strong></p>",
                "<p>Notice what refactoring is <em>not</em>: it is not fixing bugs, it is not adding features, and it is not upgrading dependencies. Those are functional changes. Refactoring is strictly structural.</p>",
                "<p>Kent Beck describes this as the <strong>Two Hats</strong> discipline:</p>",
                "<ul><li><strong>Hat 1: Adding Functionality.</strong> You wear this hat when adding new behavior or fixing a bug. You write tests, add code, and get them passing. You do not touch existing structure.</li><li><strong>Hat 2: Refactoring.</strong> You swap hats. You now improve structure, rename variables, extract methods, and remove duplication. You do <em>not</em> add a single feature or modify an existing test!</li></ul>",
                "<pre><code># The Golden Refactoring Workflow:\n# 1. Ensure test suite is completely GREEN.\n# 2. Make one small, mechanical refactoring (e.g. Extract Function).\n# 3. Run tests (< 2 seconds). Still green!\n# 4. Commit (optional) or make the next micro-step.\n# 5. If tests break: REVERT immediately. Do not debug. Revert and take a smaller step!</code></pre>",
                "<div class=\"callout\"><p><strong>The Revert Rule:</strong> If tests fail during a refactoring step, do not spend 20 minutes trying to patch your mistake. Press `git checkout` or `Cmd+Z`, revert to green, and take a smaller, safer step.</p></div>"
            ],
            "The Two Hats Discipline", "Switching explicitly between structural and behavioral work",
            [
                {"title": "Adding Functionality Hat", "lines": ["Goal: Change behavior", "Add tests & new code", "Never touch existing structure"]},
                {"title": "Refactoring Hat", "lines": ["Goal: Improve structure", "Extract, rename, simplify", "Never change observable behavior"]}
            ],
            "The Micro-Step Safety Loop", "Rapid verification of structural changes",
            [
                {"title": "Micro-Edit", "lines": ["Extract 4 lines to helper", "Time: 15 seconds"]},
                {"title": "Run Test Suite", "lines": ["Verify all tests pass", "Time: 1.2 seconds"]},
                {"title": "Decision Point", "lines": ["PASS -> Next micro-edit", "FAIL -> Immediate git revert"]}
            ],
            "Fill in the refactoring discipline sentence",
            "Refactoring strictly preserves {1} behavior while improving {2} structure.",
            [
                {"answer": "observable", "hint": "External outputs and interface contracts", "options": ["observable", "hidden", "compiled"]},
                {"answer": "internal", "hint": "Code readability, organization, and design", "options": ["internal", "cloud", "network"]}
            ],
            [
                {"q": "What should you do if an automated test fails during a refactoring step?", "a": ["Revert the change immediately to return to a known green state, then try a smaller step", "Change the test assertion so that it passes with your new code", "Continue making more edits until things work", "Delete the test file"], "c": 0, "why": "Reverting immediately restores stability and prevents compound debugging confusion."},
                {"q": "What is the primary prerequisite before embarking on any significant refactoring?", "a": ["A reliable, automated test suite that passes and covers the code you intend to modify", "A complete rewrite of the database schema", "Approval from the board of directors", "An upgraded computer with 64GB of RAM"], "c": 0, "why": "Tests provide the safety net that detects accidental behavioral regressions instantly."},
                {"q": "Why is 'baby steps' an essential principle in refactoring?", "a": ["Small changes are easy to verify, easy to understand, and effortless to revert if something goes wrong", "Baby steps make git commit messages longer", "Compilers can only process 10 lines of diff at a time", "It prevents IDEs from consuming battery power"], "c": 0, "why": "Micro-steps keep you in control and eliminate stressful debugging sessions."},
                {"q": "Can fixing a newly discovered bug be considered part of a refactoring task?", "a": ["No: fixing a bug changes observable behavior, so you must switch from the Refactoring hat to the Bug Fixing hat", "Yes: all code improvements are refactoring", "Only if the bug is small", "Only in frontend JavaScript code"], "c": 0, "why": "Bug fixes alter behavior; separating bug fixes from refactoring prevents confusing regression cascades."}
            ],
            "You know how to refactor with strict discipline and behavior preservation.",
            "Characterization Tests: Safety Nets for Legacy Code", "Tackle untested legacy code by locking in current behavior before touching it."
        ),
        build_lesson(
            3, "characterization-tests", "Characterization Tests: Safety Nets for Legacy Code", "Legacy Code",
            "Writing characterization tests (Golden Master tests) to create a safety net for legacy code with zero existing tests.",
            "What is a 'characterization test' (also known as a golden master test)?",
            ["A test that records and asserts the current actual behavior of a legacy system, bugs and quirks included, as a baseline", "A test that checks variable names for proper character encoding", "A test that verifies actor dialogue in video games", "A benchmark test measuring typing speed"],
            0, "Characterization tests lock down existing behavior so you can refactor safely without accidental changes.",
            [
                "<p>Michael Feathers, in his seminal book <em>Working Effectively with Legacy Code</em>, offers a brutal but accurate definition: <strong>Legacy code is simply code without tests.</strong></p>",
                "<p>When you inherit a 1,500-line legacy function with zero tests, you cannot refactor it safely. But how do you write tests when you don't even understand all the strange edge cases and historical quirks the code handles?</p>",
                "<p>The answer is <strong>Characterization Testing</strong> (also called <em>Snapshot Testing</em> or <em>Golden Master Testing</em>). You do not ask: <em>'What should this code do?'</em> Instead, you ask: <em>'What does this code actually do right now?'</em></p>",
                "<pre><code># Writing a Characterization Test:\ndef test_legacy_pricing_engine_characterization():\n    # 1. Arrange a representative real-world input payload\n    payload = {\"user_type\": \"standard\", \"items\": [{\"id\": 1, \"qty\": 2}]}\n\n    # 2. Call the legacy beast\n    result = legacy_calculate_bill(payload)\n\n    # 3. Assert on the ACTUAL current output (bugs included!)\n    assert result == {\"total\": 45.50, \"tax\": 3.50, \"status\": \"PROCESSED\"}</code></pre>",
                "<p>Once you have 20 characterization tests covering various inputs, you have constructed a <strong>safety net</strong>. Now you can refactor, extract classes, and clean up the implementation. If your characterization tests stay green, you have preserved existing behavior 100%.</p>",
                "<div class=\"callout\"><p><strong>Warning:</strong> If you spot an obvious bug while writing characterization tests, resist fixing it immediately! Lock down the existing behavior first, complete your refactoring, and only then write a new test to fix the bug.</p></div>"
            ],
            "The Characterization Workflow", "Creating a safety net around legacy code",
            [
                {"title": "1. Untested Legacy Beast", "lines": ["2,000 lines of spaghetti", "Zero automated tests (Terrifying)"]},
                {"title": "2. Write Characterization Tests", "lines": ["Run real inputs through beast", "Capture and assert actual outputs"]},
                {"title": "3. Refactor with Safety", "lines": ["Extract classes & clean methods", "Tests guarantee zero regressions"]}
            ],
            "Locking in Current Behavior", "Preserving quirks before fixing bugs",
            [
                {"title": "Observe Actual Output", "lines": ["Output includes historical quirk", "Record it in the test assertion"]},
                {"title": "Safe Refactor Sandbox", "lines": ["Restructure code cleanly", "Tests ensure quirk is untouched"]},
                {"title": "Subsequent Bug Fix", "lines": ["Now that code is clean & modular", "Fix bug in a separate, isolated PR"]}
            ],
            "Complete the characterization testing sentence",
            "A characterization test locks down the {1} behavior of legacy code to provide a {2} net for future refactoring.",
            [
                {"answer": "existing", "hint": "Current actual output of the code today", "options": ["existing", "ideal", "future"]},
                {"answer": "safety", "hint": "Protection against unintended regressions", "options": ["safety", "compression", "security"]}
            ],
            [
                {"q": "What is Michael Feathers' definition of legacy code?", "a": ["Code without automated tests", "Code written in COBOL or Fortran", "Code older than 5 years", "Code written by developers who left the company"], "c": 0, "why": "Without tests, modifying code is risky and fraught with regression danger."},
                {"q": "Why should you NOT fix bugs while writing characterization tests for legacy code?", "a": ["Fixing bugs changes behavior before you have a safety net, making it impossible to separate intended fixes from accidental breakage", "Bugs in legacy code are protected by copyright", "Legacy bugs do not affect users", "Characterization tests cannot pass if bugs are fixed"], "c": 0, "why": "First lock down current behavior; then refactor safely; then fix bugs in dedicated commits."},
                {"q": "How do you know what inputs to feed into a characterization test?", "a": ["Use production logs, recorded database inputs, and boundary edge cases", "Use only random characters", "Call functions with empty arguments", "Use inputs generated by a CSS compiler"], "c": 0, "why": "Representative production inputs provide the most realistic baseline coverage."},
                {"q": "What is another common name for characterization testing?", "a": ["Golden Master testing or Snapshot testing", "Mutation fuzzing", "Chaos engineering", "Static analysis"], "c": 0, "why": "Golden Master testing compares current outputs against an established baseline golden snapshot."}
            ],
            "You know how to establish safety nets around legacy code with characterization tests.",
            "Extract Method and Rename Variable", "Master the two workhorse refactorings of daily programming."
        ),
        build_lesson(
            4, "extract-method-rename-variable", "Extract Method and Rename Variable", "Workhorse Refactorings",
            "Applying the two most frequent refactorings: Extract Method to break monoliths and Rename Variable to clarify intent.",
            "Why is 'Extract Method' considered the single most important refactoring in software development?",
            ["It turns large, incomprehensible functions into small, self-documenting pieces with clear single responsibilities", "It automatically increases CPU clock speeds", "It compiles Python functions into assembly language", "It reduces the number of variables in RAM to zero"],
            0, "Extract Method decomposes cognitive load, replacing comments with self-documenting function names.",
            [
                "<p>If you master only two refactoring techniques from Martin Fowler's catalog, let them be <strong>Extract Method</strong> and <strong>Rename Variable</strong>. These two operations account for over 70% of day-to-day code cleanup.</p>",
                "<p>Whenever you see a code comment explaining what a 10-line block of code does, that is a code smell: <em>the code should explain itself!</em> Extract those 10 lines into a helper function whose name conveys the intent:</p>",
                "<pre><code># BEFORE: Monolithic function with explanatory comments\ndef process_order(order):\n    # Calculate subtotal with tax\n    sub = 0\n    for item in order.items:\n        sub += item.price * item.quantity\n    t = sub * 0.08\n    total = sub + t\n\n    # Send notification email to customer\n    msg = f\"Your total is {total}\"\n    smtp.send(order.email, \"Receipt\", msg)\n\n# AFTER: Extracted helper functions with expressive names\ndef process_order(order):\n    total = calculate_order_total(order)\n    send_receipt_email(order.email, total)\n\ndef calculate_order_total(order) -> float:\n    subtotal = sum(item.price * item.quantity for item in order.items)\n    tax = subtotal * 0.08\n    return subtotal + tax\n\ndef send_receipt_email(email: str, total: float) -> None:\n    message = f\"Your total is {total}\"\n    smtp.send(email, \"Receipt\", message)</code></pre>",
                "<p>The top-level `process_order` function now reads like plain English prose. You can understand its orchestrating responsibility in 3 seconds without wading through math and string formatting.</p>",
                "<div class=\"callout\"><p><strong>IDE Automation:</strong> Modern IDEs (VS Code, PyCharm) can perform Extract Method and Rename Symbol automatically across entire projects using AST analysis with zero risk of typos.</p></div>"
            ],
            "Decomposition with Extract Method", "Replacing comments with clear function names",
            [
                {"title": "Monolithic Code Block", "lines": ["// 1. Math calculation", "for loop, multiplication, tax", "// 2. Email formatting", "string concat, smtp connection"]},
                {"title": "Extracted Functions", "lines": ["calculate_order_total()", "send_receipt_email()"]},
                {"title": "Expressive Orchestration", "lines": ["process_order() is 2 lines", "Clear intent, zero cognitive drag"]}
            ],
            "Rename Variable Evolution", "From cryptic abbreviations to domain clarity",
            [
                {"title": "Cryptic", "lines": ["d = 86400", "t = s * 0.08", "u = get_usr()"]},
                {"title": "Intention-Revealing", "lines": ["SECONDS_PER_DAY = 86400", "sales_tax = subtotal * 0.08", "current_user = get_authenticated_user()"]}
            ],
            "Fill in the workhorse refactoring terms",
            "Use {1} to decompose large blocks into named functions, and {2} to replace cryptic abbreviations with domain concepts.",
            [
                {"answer": "Extract Method", "hint": "Refactoring that creates helper functions", "options": ["Extract Method", "Inline Method", "Push Down"]},
                {"answer": "Rename Variable", "hint": "Refactoring that improves naming clarity", "options": ["Rename Variable", "Delete Variable", "Cast Variable"]}
            ],
            [
                {"q": "What code smell is often a direct sign that Extract Method is needed?", "a": ["A comment explaining what a block of code does, or a function longer than 20-30 lines doing multiple things", "A function that has type annotations", "A file with fewer than 50 lines", "A test with two assertions"], "c": 0, "why": "Comments explaining code blocks usually indicate that the block should be an extracted, named function."},
                {"q": "Why is relying on automated IDE refactoring tools safer than manual copy-paste editing?", "a": ["IDE refactoring tools use Abstract Syntax Trees (ASTs) to rename and extract safely without typo bugs", "IDE tools run in the cloud", "Manual editing is disabled in modern editors", "IDE tools require no CPU memory"], "c": 0, "why": "AST-aware refactoring tools update all references and parameters safely without scope errors."},
                {"q": "What makes a variable name 'intention-revealing'?", "a": ["It tells the reader why it exists, what it does, and how it is used without needing a comment", "It contains at least 30 characters", "It begins with an underscore", "It is written in all uppercase letters"], "c": 0, "why": "Intention-revealing names communicate purpose and domain meaning immediately to the reader."},
                {"q": "What happens to the cognitive load of a function when helper methods are extracted?", "a": ["Cognitive load drops because the orchestrating function operates at a single, consistent level of abstraction", "Cognitive load increases because there are more functions in the file", "Cognitive load is unchanged", "The function becomes impossible to test"], "c": 0, "why": "Operating at a single level of abstraction lets readers grasp overall logic without getting bogged down in low-level details."}
            ],
            "You know how to transform monolithic code into clear functions with Extract Method and Rename Variable.",
            "Replacing Primitives with Objects and Value Objects", "Elevate raw strings, numbers, and dictionaries into expressive domain objects."
        ),
        build_lesson(
            5, "replace-primitives-with-objects", "Replacing Primitives with Objects and Value Objects", "Primitive Obsession",
            "Curing 'Primitive Obsession' by encapsulating raw strings, numbers, and tuples into immutable Value Objects.",
            "What is the code smell known as 'Primitive Obsession'?",
            ["Relying excessively on raw primitives (strings, ints, dicts) for domain concepts like Money, Email, or Coordinates", "Using primitive types in assembly language", "Obsessively writing unit tests for integers", "Refusing to use third-party libraries"],
            0, "Primitive obsession occurs when domain concepts with business rules are represented as raw unvalidated strings or numbers.",
            [
                "<p>In many codebases, you will find email addresses passed around as raw `str`, financial prices as raw `float`, and geographical coordinates as tuples `(float, float)`. This is the classic code smell known as <strong>Primitive Obsession</strong>.</p>",
                "<p>Why is primitive obsession dangerous?</p>",
                "<ul><li><strong>Missing Validation:</strong> Every function that accepts an `email: str` must repeat the regex validation, or assume someone else already validated it.</li><li><strong>Accidental Misuse:</strong> You can pass a `user_id: int` into a function expecting an `account_id: int`, and Python won't complain until production data corrupts!</li><li><strong>Floating-Point Inaccuracy:</strong> Using `float` for money leads to notorious rounding bugs (e.g. `0.1 + 0.2 == 0.30000000000000004`).</li></ul>",
                "<p>The solution is to introduce <strong>Value Objects</strong>: small, immutable objects whose equality is based on their value, not memory identity:</p>",
                "<pre><code># REFACTOR: From primitive obsession to a clean Value Object\nfrom dataclasses import dataclass\nimport re\n\n@dataclass(frozen=True)\nclass Email:\n    address: str\n\n    def __post_init__(self):\n        if not re.match(r\"^[^@]+@[^@]+\\.[^@]+$\", self.address):\n            raise ValueError(f\"Invalid email format: {self.address}\")\n\n# Now, if an Email instance exists, it is GUARANTEED to be valid!\ndef send_newsletter(recipient: Email):\n    # Zero validation needed here! The type contract guarantees correctness.\n    mailer.send(recipient.address)</code></pre>",
                "<div class=\"callout\"><p><strong>Rule of Value Objects:</strong> Value Objects should be <strong>frozen (immutable)</strong>. If you want to change an email or add money, return a new Value Object instance rather than mutating the existing one.</p></div>"
            ],
            "Primitive Obsession vs Value Objects", "Encapsulating validation and domain behavior",
            [
                {"title": "Primitive Obsession", "lines": ["price: float = 19.99", "currency: str = 'USD'", "Zero built-in rules or validation"]},
                {"title": "Value Object", "lines": ["money = Money(19.99, 'USD')", "Guarantees rounding & validation", "Immutable (frozen)"]},
                {"title": "Benefit", "lines": ["Impossible to create invalid money", "Expressive domain arithmetic"]}
            ],
            "Type Safety and Integrity", "Preventing accidental argument swapping",
            [
                {"title": "Primitives (Dangerous)", "lines": ["transfer(from_id: int, to_id: int)", "Trivial to swap IDs by accident!"]},
                {"title": "Value Objects (Safe)", "lines": ["transfer(SenderId, RecipientId)", "Type checker blocks swapped arguments!"]}
            ],
            "Complete the Value Object sentence",
            "Curing primitive obsession with immutable {1} guarantees domain validation at construction and prevents accidental parameter {2}.",
            [
                {"answer": "Value Objects", "hint": "Domain objects defined by value rather than identity", "options": ["Value Objects", "Global Variables", "Singletons"]},
                {"answer": "swapping", "hint": "Passing arguments in the wrong order", "options": ["swapping", "deleting", "compiling"]}
            ],
            [
                {"q": "What defines the equality of a Value Object?", "a": ["Its structural data and properties, rather than its memory address or identity", "Its database primary key integer", "Its creation timestamp", "The memory pointer address in RAM"], "c": 0, "why": "Two Money(10, 'USD') objects are equal because their values match, regardless of memory identity."},
                {"q": "Why should Value Objects almost always be immutable (e.g. frozen=True)?", "a": ["Immutability prevents unexpected side effects when instances are shared across functions and threads", "Python only allows immutable classes to be compiled", "Immutable objects bypass garbage collection", "To prevent users from reading object attributes"], "c": 0, "why": "Immutable value objects can be passed freely without fear of hidden external mutation."},
                {"q": "Why is representing financial currency as float an anti-pattern?", "a": ["Binary floating-point representation cannot represent decimal fractions like 0.1 exactly, causing rounding errors", "Python floats cannot store numbers larger than 100", "Floats run 100x slower than strings", "Databases refuse to store floats"], "c": 0, "why": "Binary floating-point arithmetic introduces rounding inaccuracies that corrupt financial balances."},
                {"q": "What happens when an invalid string is passed to a well-designed Email Value Object constructor?", "a": ["It raises a validation ValueError immediately, ensuring invalid instances can never exist in the system", "It quietly converts the string to None", "It crashes the operating system", "It prompts the user to retype the email"], "c": 0, "why": "Validating at construction ensures that if a Value Object exists, it is guaranteed to be valid."}
            ],
            "You know how to cure Primitive Obsession using expressive, immutable Value Objects.",
            "The Strangler Fig Pattern for Large Refactors", "Migrate legacy monoliths incrementally without risky big-bang rewrites."
        ),
        build_lesson(
            6, "the-strangler-fig-pattern", "The Strangler Fig Pattern for Large Refactors", "Architectural Refactoring",
            "Replacing large legacy systems incrementally using the Strangler Fig pattern without risky big-bang rewrites.",
            "Why do 'Big Bang' total software rewrites fail so frequently?",
            ["The legacy system continues moving forward while the rewrite takes years, accumulates scope creep, and ships with new bugs", "Rewriting code is prohibited by modern cloud providers", "Rewrites can only be performed in C++", "Developers forget how to code after two years"],
            0, "Big-bang rewrites take too long, aim at moving targets, and forfeit iterative customer feedback.",
            [
                "<p>When faced with a massive, terrifying legacy monolith, management or frustrated engineers often propose: <em>'Let's throw it all away and do a complete rewrite from scratch!'</em> History proves this is almost always a catastrophe. While the team spends 18 months rebuilding the system, the old system must still be maintained, business requirements drift, and the rewrite launches with a mountain of fresh bugs.</p>",
                "<p>Martin Fowler named the alternative after Australian vines: the <strong>Strangler Fig Pattern</strong>. A strangler fig seed germinates in the branches of a host tree, slowly grows roots downward toward the soil, and gradually envelops the host tree until the old tree rots away and only the new fig tree remains.</p>",
                "<p>In software, you replace a legacy system <strong>one endpoint or capability at a time</strong>:</p>",
                "<ul><li><strong>1. Intercept:</strong> Place a proxy or API gateway (like NGINX, Cloudflare, or an in-app router) in front of the legacy monolith.</li><li><strong>2. Carve Out:</strong> Build the first small capability (e.g. `/api/v2/notifications`) in the clean new service.</li><li><strong>3. Route:</strong> Configure the gateway to route `/notifications` traffic to the new service while all other traffic goes to the monolith.</li><li><strong>4. Repeat:</strong> Gradually migrate endpoints until the monolith handles 0% of traffic and can be decommissioned safely.</li></ul>",
                "<pre><code># Architectural Gateway Routing (Strangler Fig)\n# incoming: /api/v1/billing      -> Legacy Monolith (Old)\n# incoming: /api/v1/auth         -> Legacy Monolith (Old)\n# incoming: /api/v1/notifications -> Modern Service (New! Migrated!)</code></pre>",
                "<div class=\"callout\"><p><strong>The Superpower:</strong> The Strangler Fig delivers immediate business value from week one. If a new microservice has a bug, you can revert traffic back to the monolith in seconds at the gateway.</p></div>"
            ],
            "The Strangler Fig Migration", "Incremental replacement without big-bang risk",
            [
                {"title": "Phase 1: Intercept", "lines": ["Proxy in front of monolith", "100% traffic to monolith"]},
                {"title": "Phase 2: Migrate Slice", "lines": ["Build Notifications service", "Route /notifications to new service"]},
                {"title": "Phase 3: Decommission", "lines": ["Monolith shrinks to empty shell", "Safely unplug old servers"]}
            ],
            "Big Bang vs Strangler Fig Risk Profile", "Comparing failure curves",
            [
                {"title": "Big Bang Rewrite", "lines": ["Zero value for 18 months", "Massive release day catastrophe risk"]},
                {"title": "Strangler Fig", "lines": ["Incremental value every 2 weeks", "Instant fallback via proxy routing"]}
            ],
            "Fill in the Strangler Fig migration terms",
            "The Strangler Fig pattern places a {1} in front of legacy software to incrementally route traffic to new {2} services.",
            [
                {"answer": "proxy gateway", "hint": "Reverse proxy or router like NGINX", "options": ["proxy gateway", "compiler", "firewall"]},
                {"answer": "modern", "hint": "Clean replacement services", "options": ["modern", "untested", "batch"]}
            ],
            [
                {"q": "What is the core benefit of the Strangler Fig pattern over a complete rewrite?", "a": ["It delivers continuous value in production while allowing instant rollback if a migrated service fails", "It allows developers to stop writing unit tests", "It eliminates the need for database migrations", "It runs both systems on a single CPU core"], "c": 0, "why": "Incremental migration avoids catastrophic big-bang release risks and provides immediate value."},
                {"q": "What component sits between incoming client requests and the two systems in a Strangler Fig architecture?", "a": ["An API gateway or reverse proxy that routes requests based on URL path or headers", "A continuous integration build runner", "A manual QA verification station", "A database foreign key constraint"], "c": 0, "why": "The proxy/gateway intercepts traffic and directs requests to either the legacy or new service."},
                {"q": "What happens if a newly migrated service in a Strangler Fig setup crashes in production?", "a": ["Traffic can be rerouted back to the legacy system at the proxy level in seconds", "The entire internet connection goes down", "The database tables are permanently deleted", "Developers must rewrite the application from scratch"], "c": 0, "why": "The existing legacy system remains functional as a safety net during early migration stages."},
                {"q": "When is the legacy system finally turned off in a Strangler Fig migration?", "a": ["When 100% of functional capabilities have been migrated and the legacy system handles zero traffic", "After the first two weeks of the project", "As soon as the proxy gateway is installed", "Never; the legacy system must run forever"], "c": 0, "why": "Once all routes and features are successfully migrated, the old monolith is decommissioned safely."}
            ],
            "You know how to safely decompose legacy monoliths using the Strangler Fig pattern.",
            "Paying Down Debt in Iterative Slices (Boy Scout Rule)", "Incorporate continuous debt repayment into regular product feature work."
        ),
        build_lesson(
            7, "the-boy-scout-rule", "Paying Down Debt in Iterative Slices (Boy Scout Rule)", "Continuous Cleanup",
            "Paying down technical debt continuously using the Boy Scout Rule instead of waiting for mythical 'refactoring sprints'.",
            "Why do dedicated 'Refactoring Sprints' rarely succeed in software organizations?",
            ["Business stakeholders resist freezing product development for weeks, and broad refactoring without feature focus risks regressions", "Refactoring sprints are illegal in agile frameworks", "Computers overheat when refactoring continuously", "Git prohibits commits during refactoring sprints"],
            0, "Dedicated refactoring sprints lack business buy-in and disconnect cleanup from actual feature priorities.",
            [
                "<p>Engineers often tell product managers: <em>'We need to halt all feature work for the next two sprints so we can refactor the codebase.'</em> Product managers almost always say no, and for good reason: halting delivery damages the business, and without clear focus, developers end up bikeshedding over cosmetic preferences.</p>",
                "<p>The sustainable, proven way to pay down technical debt is the <strong>Boy Scout Rule</strong>: <em>Always leave the campground cleaner than you found it.</em></p>",
                "<p>In software, this means: whenever you touch a file to add a feature or fix a bug, make it slightly cleaner before you leave:</p>",
                "<ul><li>Rename one confusing variable.</li><li>Extract one messy 15-line block into a well-named helper function.</li><li>Add type annotations to the function you are editing.</li><li>Add one missing characterization test.</li></ul>",
                "<pre><code># The Boy Scout Rule in Practice: Ticket #123 (Add Gift Card Support)\n# In addition to adding gift cards, you:\n# 1. Renamed `usr_auth_flg` to `is_authenticated`\n# 2. Extracted `validate_discount_code()`\n# Total extra time: 10 minutes.\n# Result: The codebase gets healthier every single day!</code></pre>",
                "<p>Over six months, a team practicing the Boy Scout Rule performs hundreds of micro-refactorings aligned with the code they actually touch the most, steadily lowering technical debt without ever pausing feature delivery.</p>",
                "<div class=\"callout\"><p><strong>Keep PRs Clean:</strong> If a Boy Scout cleanup touches many lines, split it into two separate pull requests: PR 1: Pure refactoring (safe, zero behavior change). PR 2: Feature addition.</p></div>"
            ],
            "The Campground Principle", "Continuous improvement vs episodic overhaul",
            [
                {"title": "Mythical Refactoring Sprint", "lines": ["Wait for 6 months of rot", "Beg management for 2 weeks pause", "High risk of conflict & regressions"]},
                {"title": "Boy Scout Rule", "lines": ["Clean 5-10% on every ticket", "Focus on active, high-traffic code", "Continuous, zero-friction repayment"]}
            ],
            "Two-PR Strategy", "Separating refactoring commits from feature commits",
            [
                {"title": "PR 1: Refactoring", "lines": ["Extract methods, rename variables", "Tests unchanged, 100% green", "Review time: 2 minutes"]},
                {"title": "PR 2: Feature Addition", "lines": ["Add new behavior into clean code", "Trivial diff, easy review", "Review time: 5 minutes"]}
            ],
            "Fill in the Boy Scout Rule sentence",
            "The Boy Scout Rule states: always leave the code {1} than you found it on every {2}.",
            [
                {"answer": "cleaner", "hint": "Improving code health", "options": ["cleaner", "longer", "faster"]},
                {"answer": "ticket", "hint": "Task or feature pull request", "options": ["ticket", "weekend", "year"]}
            ],
            [
                {"q": "What is the primary advantage of the Boy Scout Rule over dedicated refactoring sprints?", "a": ["It continuously improves the code you actively touch without requiring permission to halt product feature delivery", "It requires no automated tests", "It can be performed automatically by git", "It replaces the need for code review"], "c": 0, "why": "Continuous micro-cleanup keeps debt low organically without blocking business goals."},
                {"q": "Why is separating a refactoring PR from a feature PR recommended for reviewers?", "a": ["It makes code review vastly simpler because the refactoring PR should have zero behavioral diffs", "GitHub blocks pull requests with both refactors and features", "It doubles developer commit metrics", "It reduces CI runner costs"], "c": 0, "why": "Reviewers can approve structural refactoring quickly when they know behavior hasn't changed."},
                {"q": "Which code in your repository naturally benefits the most from the Boy Scout Rule?", "a": ["The most frequently modified, high-traffic files and modules that developers touch regularly", "Files that haven't been opened in 5 years", "Auto-generated lockfiles", "Third-party vendor libraries"], "c": 0, "why": "Files touched frequently receive the most micro-cleanups, targeting debt where it matters most."},
                {"q": "What should you do if an opportunistic refactoring turns out to be much bigger than 15 minutes of work?", "a": ["Stop, finish your immediate ticket, and log an explicit technical debt item on the backlog with context", "Keep refactoring for 3 days and miss your sprint deadline", "Delete the file and rewrite it from memory", "Hide the changes in your current PR without telling anyone"], "c": 0, "why": "Respecting task scope prevents derailment while ensuring larger debt items are visible on the backlog."}
            ],
            "You know how to sustainably pay down technical debt with the Boy Scout Rule.",
            "Communicating Debt and Quality to Stakeholders", "Translate architectural health into business metrics and financial ROI."
        ),
        build_lesson(
            8, "communicating-debt-to-stakeholders", "Communicating Debt and Quality to Stakeholders", "Engineering Leadership",
            "Communicating technical debt and code quality to non-technical stakeholders in terms of risk, velocity, and business ROI.",
            "Why do non-technical business stakeholders often ignore engineering requests to 'clean up tech debt'?",
            ["Engineers frame the request in terms of aesthetics ('the code is ugly') instead of business impact ('it slows feature delivery and increases outage risk')", "Stakeholders want software to have bugs", "Product managers do not understand what software is", "Executives prefer spending money on server hardware"],
            0, "Translating technical debt into velocity, reliability, and business risk secures executive alignment.",
            [
                "<p>The biggest barrier to managing technical debt is rarely technical; it is <strong>communication</strong>. When engineers complain to executives that <em>'the codebase has ugly spaghetti code and we need to use a cleaner pattern'</em>, business leaders hear an expensive request for cosmetic perfection.</p>",
                "<p>To build trust and secure time for architectural health, engineers must translate technical debt into <strong>business metrics</strong>:</p>",
                "<ul><li><strong>Velocity & Time-to-Market:</strong> <em>'Because the billing module has high coupling, adding Apple Pay will take 8 weeks instead of 2 weeks. Refactoring it first reduces all future payment integrations to 1 week.'</em></li><li><strong>Outage & Financial Risk:</strong> <em>'The checkout service lacks isolation. A failure in customer reviews can crash the entire revenue pipeline during Black Friday.'</em></li><li><strong>Developer Retention:</strong> High-debt codebases demoralize teams and lead to costly engineering turnover.</li></ul>",
                "<pre><code># The Stakeholder Translation Dictionary:\n# \"The code is ugly\"         -> \"Changes take 3x longer than necessary\"\n# \"We need to refactor\"      -> \"We are reducing risk and accelerating future delivery\"\n# \"We need 100% test coverage\"-> \"We are safeguarding against costly customer-facing outages\"</code></pre>",
                "<div class=\"callout\"><p><strong>The Golden Metric:</strong> Track lead time for changes and regression rates. When you show that paying down debt cut bug tickets in half and sped up delivery by 40%, technical health becomes a shared business priority.</p></div>"
            ],
            "Translating Technical to Business Value", "Framing engineering health in commercial terms",
            [
                {"title": "Engineering Complaint", "lines": ["'This class is messy'", "'It violates SOLID principles'", "'We need a rewrite'"]},
                {"title": "Business Translation", "lines": ["'Every edit carries high regression risk'", "'New features take 3x longer'", "'Targeted refactor unlocks fast shipping'"]},
                {"title": "Stakeholder Reaction", "lines": ["From resistance & skepticism", "To strategic alignment & investment"]}
            ],
            "The Virtuous Quality Cycle", "How code health fuels business growth",
            [
                {"title": "Clean Architecture", "lines": ["Low cognitive drag", "High test confidence"]},
                {"title": "Rapid Delivery", "lines": ["Ship features in days", "Fast market feedback"]},
                {"title": "Commercial Success", "lines": ["Lower support costs", "High developer morale & retention"]}
            ],
            "Complete the stakeholder communication sentence",
            "To gain stakeholder support for refactoring, translate technical debt into business terms of {1}, financial cost, and delivery {2}.",
            [
                {"answer": "outage risk", "hint": "Danger of production failures and downtime", "options": ["outage risk", "code syntax", "variable names"]},
                {"answer": "velocity", "hint": "Speed of shipping future features", "options": ["velocity", "compilation", "memory"]}
            ],
            [
                {"q": "How should an engineer describe a technical debt refactoring project to a Product Manager?", "a": ["Explain how it reduces time-to-market for upcoming features and prevents costly customer regressions", "Complain that the original author wrote bad code", "Explain the difference between abstract factory and builder patterns", "Threaten to resign if the refactor is denied"], "c": 0, "why": "Product managers respond to speed of delivery, reliability, and business risk."},
                {"q": "What is a measurable metric that demonstrates the impact of technical debt?", "a": ["Cycle time: how many days it takes for a feature to go from first commit to production deployment", "The number of semicolons in the repository", "The size of the git repository folder on disk", "The font size used in the code editor"], "c": 0, "why": "Cycle time and lead time measure how fast value can be safely delivered to customers."},
                {"q": "Why does high technical debt directly harm engineering team retention?", "a": ["Working in a fragile, frustrating codebase with constant firefighting and regressions leads to developer burnout", "High debt reduces developer salaries", "High debt deletes developer git accounts", "High debt prevents developers from using laptops"], "c": 0, "why": "Cognitive drag and constant production outages cause severe developer dissatisfaction."},
                {"q": "What is the best way to ensure technical health is part of the ongoing engineering roadmap?", "a": ["Allocate a consistent 15-20% capacity budget in every sprint for debt repayment and maintenance", "Schedule a refactoring holiday once every five years", "Only fix debt after the entire product is finished", "Forbid developers from refactoring"], "c": 0, "why": "A consistent capacity allocation integrates maintenance into the standard engineering lifecycle."}
            ],
            "You have completed the Refactoring & Technical Debt course.",
            "Next Course: How AI Coding Agents Work", "Enter the AI engineering era: explore the agent loop, context, and tool calling."
        )
    ]

    glossary = [
        {"id": "concepts", "title": "Debt Concepts & Models", "terms": [
            {"term": "Technical Debt", "def": "A metaphor coined by Ward Cunningham reflecting the implied cost of future rework caused by taking expedients shortcuts now.", "lesson": 1, "tags": ["craft", "architecture"]},
            {"term": "Debt Quadrant", "def": "Martin Fowler's framework categorizing technical debt along Deliberate/Inadvertent and Prudent/Reckless axes.", "lesson": 1, "tags": ["craft", "management"]},
            {"term": "Cognitive Drag", "def": "The mental overhead required to read, understand, and safely modify convoluted or poorly structured code.", "lesson": 1, "tags": ["craft", "readability"]}
        ]},
        {"id": "discipline", "title": "Refactoring Discipline", "terms": [
            {"term": "Two Hats Discipline", "def": "Kent Beck's rule of strictly separating adding new functionality from improving existing internal structure.", "lesson": 2, "tags": ["refactoring", "discipline"]},
            {"term": "Extract Method", "def": "The refactoring technique of turning a cohesive block of code into a standalone, named helper function.", "lesson": 4, "tags": ["refactoring", "techniques"]},
            {"term": "Rename Symbol", "def": "Updating an identifier across a codebase to reveal its true intention and domain meaning.", "lesson": 4, "tags": ["refactoring", "naming"]}
        ]},
        {"id": "patterns", "title": "Smells & Migration", "terms": [
            {"term": "Primitive Obsession", "def": "A code smell characterized by relying excessively on raw primitives rather than dedicated domain objects.", "lesson": 5, "tags": ["craft", "smells"]},
            {"term": "Value Object", "def": "A small, immutable object whose equality is determined by its property values rather than identity.", "lesson": 5, "tags": ["architecture", "domain"]},
            {"term": "Strangler Fig Pattern", "def": "An architectural pattern that incrementally replaces a legacy system by routing slices of traffic to new services.", "lesson": 6, "tags": ["architecture", "migration"]}
        ]},
        {"id": "practice", "title": "Continuous Practice", "terms": [
            {"term": "Characterization Test", "def": "A test that documents and locks down the existing behavior of legacy software before refactoring.", "lesson": 3, "tags": ["testing", "legacy"]},
            {"term": "Boy Scout Rule", "def": "The continuous cleanup principle: always leave the code cleaner than you found it on every commit.", "lesson": 7, "tags": ["craft", "culture"]},
            {"term": "Cycle Time", "def": "The total elapsed time from the start of development on a task until it is running in production.", "lesson": 8, "tags": ["metrics", "management"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "Characterization Test Pattern",
            "label": "Locking down legacy output",
            "code": "def test_legacy_pricing_golden_master():\n    payload = load_sample_fixture('order_1.json')\n    res = legacy_calculate(payload)\n    assert res == {'total': 120.50, 'tax': 10.0, 'status': 'OK'}",
            "lessonN": 3, "lessonSlug": "characterization-tests", "lessonTitle": "Characterization Tests: Safety Nets for Legacy Code"
        },
        {
            "title": "Immutable Value Object Pattern",
            "label": "Curing primitive obsession",
            "code": "from dataclasses import dataclass\n\n@dataclass(frozen=True)\nclass Money:\n    amount: float\n    currency: str = 'USD'\n    def __post_init__(self):\n        if self.amount < 0: raise ValueError('Negative money forbidden')",
            "lessonN": 5, "lessonSlug": "replace-primitives-with-objects", "lessonTitle": "Replacing Primitives with Objects and Value Objects"
        },
        {
            "title": "Extract Method Refactoring",
            "label": "Decomposing cognitive load",
            "code": "# BEFORE: Monolithic 30-line calculation\n# AFTER:\ndef process_cart(cart):\n    total = calculate_subtotal(cart)\n    send_notification(cart.user, total)",
            "lessonN": 4, "lessonSlug": "extract-method-rename-variable", "lessonTitle": "Extract Method and Rename Variable"
        },
        {
            "title": "The Boy Scout Habit",
            "label": "Micro-cleanups on every ticket",
            "code": "# 1. Rename 1 ambiguous variable\n# 2. Extract 1 helper function\n# 3. Add 1 missing type hint\n# Zero dedicated 'refactoring sprints' required!",
            "lessonN": 7, "lessonSlug": "the-boy-scout-rule", "lessonTitle": "Paying Down Debt in Iterative Slices (Boy Scout Rule)"
        }
    ]

    course_data = {
        "id": "refactoring-technical-debt",
        "title": "Refactoring & Technical Debt",
        "num": 50,
        "emoji": "🔧",
        "desc": "Improving structure without changing behaviour — and managing the debt you deliberately take on.",
        "topics": ["Technical Debt", "Refactoring", "Legacy Code", "Characterization Tests", "Value Objects", "Strangler Fig"],
        "mission": "# Mission — Refactoring & Technical Debt\n\nMaster the discipline of improving internal code health without changing external behavior. Learn the Two Hats discipline, wrap legacy code in characterization tests, eliminate primitive obsession, apply the Strangler Fig pattern, and practice the Boy Scout Rule.",
        "notes": "# Notes — Refactoring & Technical Debt\n\nRefactoring is not rewriting; it is systematic, behavior-preserving improvement under the safety net of automated tests.",
        "resources": "# Resources — Refactoring & Technical Debt\n\n- Martin Fowler, *Refactoring: Improving the Design of Existing Code* (2nd Edition)\n- Michael Feathers, *Working Effectively with Legacy Code*\n- Ward Cunningham, *The WyCash Portfolio Management System (Debt Metaphor)*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

if __name__ == "__main__":
    make_course_47()
    make_course_48()
    make_course_49()
    make_course_50()


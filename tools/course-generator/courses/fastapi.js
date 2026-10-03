"use strict";

module.exports = {
  id: "fastapi",
  title: "FastAPI & Python APIs",
  num: 39,
  emoji: "🚀",
  desc: "Build typed, async web services with validation, dependency injection and automatic docs.",
  mission: `# Mission — FastAPI & Python APIs

## Why this course exists

FastAPI transformed Python backend development by uniting three modern technologies: Python type hints, Pydantic data validation, and asynchronous ASGI concurrency (Starlette / Uvicorn). Instead of writing boilerplate validation, serialization, and manual Swagger docs by hand, FastAPI generates them automatically from type annotations. This course teaches how to build high-performance, asynchronous RESTful APIs using FastAPI's dependency injection system, background tasks, and security utilities.

## What the learner can do at the end

- Build asynchronous REST APIs using FastAPI path operations, query parameters, and request bodies.
- Enforce strict input validation and serialization using Pydantic models and field validators.
- Master FastAPI's powerful Dependency Injection system (Depends) for database sessions and auth.
- Implement token authentication using OAuth2PasswordBearer and JWT validation.
- Configure asynchronous lifespan handlers, middleware, and background tasks.

## What this course is NOT

- Not a frontend or template-rendering course (Jinja2).
- Not a low-level asyncio event loop architecture course.

## Success looks like

When tasked with building a microservice or public REST API in Python, the learner sets up a complete FastAPI project featuring Pydantic schemas, dependency-injected database sessions, JWT authentication, and interactive Swagger docs in under twenty minutes.
`,
  notes: `# Notes — FastAPI & Python APIs

## Decisions
- Group into four themes: Path Operations & Pydantic, Dependency Injection, Security & Authentication, and Advanced Async & Background Tasks.
- Use Python 3.10+ modern typing syntax (e.g. str | None, list[Item]).
`,
  resources: `# Resources — FastAPI & Python APIs

## Knowledge (primary sources)
- Sebastián Ramírez, *FastAPI Documentation* (fastapi.tiangolo.com).
- Samuel Colvin, *Pydantic Documentation* (docs.pydantic.dev).
- encode/starlette and encode/uvicorn documentation.

## Wisdom
- Type hints in FastAPI are not passive comments: they are executable specifications that drive validation, serialization, and OpenAPI documentation simultaneously.
`,
  cheatsheetSections: [
    {
      title: "Path Operations & Pydantic",
      label: "Basic endpoint structure",
      code: `from fastapi import FastAPI, status
from pydantic import BaseModel, EmailStr

app = FastAPI(title="Store API")

class UserCreate(BaseModel):
    email: EmailStr
    name: str

@app.post("/users", status_code=status.HTTP_201_CREATED)
async def create_user(payload: UserCreate):
    return {"id": 1, **payload.model_dump()}`,
      lessonN: 1,
      lessonSlug: "the-fastapi-foundations-type-hints-and-pydantic",
      lessonTitle: "The FastAPI foundations: type hints and Pydantic"
    },
    {
      title: "Dependency Injection (Depends)",
      label: "Reusable database sessions & auth",
      code: `from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession

async def get_db():
    async with async_session() as session:
        yield session

@app.get("/items")
async def list_items(db: AsyncSession = Depends(get_db)):
    return await db.execute(select(Item))`,
      lessonN: 3,
      lessonSlug: "dependency-injection-with-depends",
      lessonTitle: "Dependency Injection with Depends"
    },
    {
      title: "OAuth2 & JWT Auth",
      label: "Current user security dependency",
      code: `from fastapi.security import OAuth2PasswordBearer

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

async def get_current_user(token: str = Depends(oauth2_scheme)):
    payload = decode_jwt(token)
    return payload["user_id"]`,
      lessonN: 5,
      lessonSlug: "authentication-oauth2-and-jwt-in-fastapi",
      lessonTitle: "Authentication, OAuth2, and JWT in FastAPI"
    },
    {
      title: "Background Tasks",
      label: "Non-blocking background jobs",
      code: `from fastapi import BackgroundTasks

def send_welcome_email(email: str):
    # runs AFTER the HTTP response is sent!
    smtp_client.send(email)

@app.post("/signup")
async def signup(user: UserCreate, tasks: BackgroundTasks):
    tasks.add_task(send_welcome_email, user.email)
    return {"message": "Account created"}`,
      lessonN: 8,
      lessonSlug: "background-tasks-lifespan-and-production",
      lessonTitle: "Background tasks, lifespan, and production"
    }
  ],
  glossaryGroups: [
    {
      id: "fastapi-basics",
      title: "FastAPI & Pydantic Foundations",
      terms: [
        { term: "FastAPI", def: "A modern, high-performance web framework for building APIs with Python based on standard type hints.", lesson: 1, tags: ["framework"] },
        { term: "Pydantic", def: "A data validation and settings management library using Python type annotations to enforce schemas.", lesson: 1, tags: ["pydantic"] },
        { term: "ASGI", def: "Asynchronous Server Gateway Interface: the standard interface between async Python web servers and applications.", lesson: 2, tags: ["asgi"] },
        { term: "Uvicorn", def: "A lightning-fast ASGI web server implementation for Python based on uvloop and httptools.", lesson: 2, tags: ["servers"] }
      ]
    },
    {
      id: "dependency-injection",
      title: "Dependency Injection & Structure",
      terms: [
        { term: "Depends", def: "FastAPI's dependency injection function declaring that a route parameter requires a dependency helper.", lesson: 3, tags: ["di"] },
        { term: "Yield dependency", def: "A dependency using 'yield' to execute setup code before the route and cleanup code after the response.", lesson: 3, tags: ["di"] },
        { term: "APIRouter", def: "A class allowing modular decomposition of route definitions across multiple files and packages.", lesson: 4, tags: ["routing"] },
        { term: "Path parameter", def: "A variable part of a URL path (e.g. /items/{item_id}) captured directly by a route function.", lesson: 4, tags: ["routing"] }
      ]
    },
    {
      id: "security-fastapi",
      title: "Security & Error Handling",
      terms: [
        { term: "OAuth2PasswordBearer", def: "A security utility class declaring an OAuth2 password flow and extracting bearer tokens from headers.", lesson: 5, tags: ["security"] },
        { term: "HTTPException", def: "FastAPI's standard exception class for returning HTTP error status codes and detail messages.", lesson: 6, tags: ["errors"] },
        { term: "Response model", def: "The Pydantic model declared on a route (response_model=UserOut) filtering and serializing output data.", lesson: 6, tags: ["serialization"] },
        { term: "Field validator", def: "A Pydantic method decorator (@field_validator) defining custom validation logic on model fields.", lesson: 1, tags: ["pydantic"] }
      ]
    },
    {
      id: "async-lifecycle",
      title: "Async Lifecycle & Background Tasks",
      terms: [
        { term: "BackgroundTasks", def: "A FastAPI utility class queueing functions to execute in the background after the response is sent.", lesson: 8, tags: ["tasks"] },
        { term: "Lifespan", def: "An async context manager managing application startup and shutdown events (replacing on_event).", lesson: 8, tags: ["lifecycle"] },
        { term: "Middleware", def: "A function processing every request before it reaches a route and every response before it is returned.", lesson: 7, tags: ["middleware"] },
        { term: "Swagger UI", def: "The interactive OpenAPI documentation playground rendered automatically at /docs by FastAPI.", lesson: 1, tags: ["docs"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "the-fastapi-foundations-type-hints-and-pydantic",
      title: "The FastAPI foundations: type hints and Pydantic",
      topic: "FastAPI & Pydantic Foundations",
      anim: "Rocket",
      lede: "Type hints are not just for linters. Discover how FastAPI leverages Python types and Pydantic to deliver automatic validation, serialization, and interactive Swagger docs.",
      winShort: "Build validated FastAPI endpoints using Pydantic models and type hints",
      missionLink: "The foundational pattern of the entire FastAPI framework",
      sec1: {
        title: "The trifecta: Type hints, Pydantic, and OpenAPI",
        content: `<p>Before FastAPI, Python web developers had to write repetitive code: validate incoming JSON schemas by hand, parse datatypes, write serialization logic, and manually update documentation.</p><p>FastAPI unites these into a single definition: by declaring a <b>Pydantic Model</b> with standard Python type annotations, FastAPI automatically <b>validates incoming data</b> (returning 422 on errors), <b>deserializes JSON</b> into typed objects, and <b>generates interactive Swagger documentation at <code>/docs</code></b> with zero extra code.</p>`,
        keyIdea: "A single Pydantic model drives data validation, type conversion, and Swagger documentation simultaneously."
      },
      predict: {
        q: "What does FastAPI return if a client POSTs an invalid email string to an endpoint typed with 'EmailStr'?",
        a: [
          "Status 422 Unprocessable Entity with a detailed JSON array describing the exact validation failure",
          "Status 500 Internal Server Error",
          "Status 200 OK with the invalid string accepted",
          "The server crashes"
        ],
        c: 0,
        why: "FastAPI catches Pydantic validation errors natively and formats them into standard 422 responses."
      },
      sec2: {
        title: "The single-declaration model",
        content: `<p>Observe how one Pydantic model powers three essential backend requirements.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Pydantic Model", lines: ["class User(BaseModel):", "  email: EmailStr, age: int"] },
          { title: "1. Runtime Validation", lines: ["parses JSON bytes", "enforces types; rejects bad input (422)"] },
          { title: "2. Swagger Docs (/docs)", lines: ["generates OpenAPI 3.1 JSON", "interactive browser testing UI!"] }
        ]
      },
      sec3: {
        title: "Tracing automatic validation execution",
        content: `<p>Trace how FastAPI intercepts bad inputs before your route function is even called.</p>`,
      },
      trace: {
        code: [
          "@app.post('/items')",
          "async def create_item(item: ItemSchema):",
          "    # This function only executes if ItemSchema passed 100% validation!",
          "    return {'status': 'saved', 'data': item}"
        ],
        steps: [
          { line: 0, vars: { request: "POST /items received with {'price': 'not_a_number'}" } },
          { line: 1, vars: { pydantic_check: "validation fails: price is not a valid float" } },
          { line: 1, vars: { short_circuit: "422 Unprocessable Entity returned immediately; function body skipped!" } }
        ]
      },
      practiceIntro: "Test your memory of FastAPI foundations.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The data validation library powering FastAPI is <0>.",
          "The status code returned by FastAPI for validation failures is <1>.",
          "Interactive OpenAPI documentation is hosted by default at /<2>."
        ],
        blanks: [
          { a: ["Pydantic"], why: "Pydantic enforces schemas via type annotations." },
          { a: ["422"], why: "422 Unprocessable Entity is the validation error standard." },
          { a: ["docs"], why: "Swagger UI is served at /docs." }
        ]
      },
      win: "You can write clean, self-documenting FastAPI endpoints that automatically validate client inputs.",
      nextTasks: [
        "Create a FastAPI app and run it using uvicorn main:app --reload.",
        "Open http://127.0.0.1:8000/docs in your browser and test an endpoint interactively.",
        "Add a Pydantic field validator using @field_validator to enforce custom rules."
      ],
      primarySource: "Sebastián Ramírez, *FastAPI Tutorial — User Guide: First Steps* (fastapi.tiangolo.com/tutorial/first-steps/).",
      quiz: [
        {
          q: "What role does Pydantic play inside the FastAPI framework?",
          a: [
            "It validates incoming request data, coerces types into Python primitives, and serializes response outputs",
            "It manages physical database disk storage",
            "It acts as a reverse proxy load balancer",
            "It compiles Python into machine assembly"
          ],
          c: 0,
          why: "Pydantic provides parsing, validation, and serialization for request and response payloads."
        },
        {
          q: "What web server is standard for running asynchronous FastAPI applications in development and production?",
          a: [
            "Uvicorn (an ASGI server)",
            "Apache HTTP Server (pre-fork)",
            "Node.js npm server",
            "Internet Information Services (IIS)"
          ],
          c: 0,
          why: "Uvicorn is the high-performance ASGI server designed to run asynchronous Python frameworks."
        },
        {
          q: "What happens if a route parameter is typed as 'int' and the client sends '?page=two'?",
          a: [
            "FastAPI rejects the request with a 422 Unprocessable Entity error stating that 'two' is not a valid integer",
            "The function receives page = 0",
            "The server crashes with an unhandled exception",
            "The client is permanently blocked from the website"
          ],
          c: 0,
          why: "FastAPI automatically validates query parameters against their declared type annotations."
        },
        {
          q: "What is the URL path where FastAPI serves raw OpenAPI JSON specifications?",
          a: [
            "/openapi.json",
            "/swagger.yaml",
            "/api-spec.txt",
            "/routes.json"
          ],
          c: 0,
          why: "FastAPI dynamically compiles and serves the OpenAPI 3.1 specification at /openapi.json."
        }
      ]
    },
    {
      n: 2,
      id: "async-def-versus-def-in-fastapi",
      title: "async def versus def in FastAPI",
      topic: "FastAPI & Pydantic Foundations",
      anim: "Rocket",
      lede: "Should your path operation be 'async def' or normal 'def'? Discover the thread pool magic of FastAPI: when async accelerates I/O, and when normal def prevents blocking.",
      winShort: "Choose appropriately between 'async def' and 'def' path operations to avoid thread starvation",
      missionLink: "Prevents catastrophic thread pool blocking in asynchronous Python backends",
      sec1: {
        title: "The two execution lanes of FastAPI",
        content: `<p>FastAPI supports both <code>async def</code> and traditional synchronous <code>def</code> endpoints. But how does it run both on the same server?</p><p>When you declare <code>async def</code>, FastAPI executes the function directly on the <b>Main Event Loop</b>. If you write slow, blocking code (like <code>time.sleep()</code> or synchronous database queries) inside an <code>async def</code>, <b>you freeze the entire server!</b> When you declare normal <code>def</code>, FastAPI runs the function inside an external <b>Threadpool</b>, preventing blocking.</p>`,
        keyIdea: "Use async def for non-blocking awaitable I/O; use normal def for blocking synchronous libraries."
      },
      predict: {
        q: "What happens to a FastAPI server if you run 'time.sleep(5)' inside an 'async def' route handler?",
        a: [
          "The main event loop is frozen for 5 seconds, blocking all other concurrent users from receiving responses",
          "FastAPI automatically moves time.sleep to a background thread",
          "The sleep is converted to asyncio.sleep",
          "The server crashes immediately"
        ],
        c: 0,
        why: "Blocking synchronous calls inside async def freeze the single-threaded event loop."
      },
      sec2: {
        title: "The execution decision rule",
        content: `<p>Understand when to use async def versus when to use standard def.</p>`,
      },
      diagram: {
        boxes: [
          { title: "async def (Event Loop)", lines: ["use for: await httpx, await async_db", "blazing fast non-blocking concurrency", "NEVER run blocking synchronous code here!"] },
          { title: "def (Worker Threadpool)", lines: ["use for: synchronous DB (requests, psycopg2)", "CPU-intensive calculations", "runs in separate background thread safely"] }
        ]
      },
      sec3: {
        title: "Tracing thread pool routing",
        content: `<p>Trace how FastAPI automatically routes def versus async def path operations.</p>`,
      },
      trace: {
        code: [
          "# Route 1: Async I/O (Async Event Loop)",
          "@app.get('/async')",
          "async def get_async(): await asyncio.sleep(1); return {'ok': True}",
          "# Route 2: Synchronous I/O (ThreadPool)",
          "@app.get('/sync')",
          "def get_sync(): time.sleep(1); return {'ok': True} # safely offloaded to thread!"
        ],
        steps: [
          { line: 1, vars: { async_route: "runs directly on main asyncio event loop" } },
          { line: 4, vars: { sync_route: "FastAPI detects normal 'def' -> dispatches to anyio threadpool" } },
          { line: 5, vars: { non_blocking: "event loop remains responsive to other traffic during sync sleep" } }
        ]
      },
      practiceIntro: "Test your memory of async function execution.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Non-blocking coroutine endpoints are declared with <0> def.",
          "Blocking synchronous endpoints declared with def run in a <1>pool.",
          "To pause an async function without blocking the event loop, use asyncio.<2>()."
        ],
        blanks: [
          { a: ["async"], why: "async def defines coroutine functions." },
          { a: ["thread", "worker"], why: "FastAPI dispatches def functions to a worker threadpool." },
          { a: ["sleep"], why: "asyncio.sleep yields execution back to the loop." }
        ]
      },
      win: "You can choose between async def and def with certainty, ensuring your backend never accidentally blocks the event loop.",
      nextTasks: [
        "Benchmark the concurrency of an async def endpoint versus a def endpoint in FastAPI.",
        "Replace a blocking time.sleep() with await asyncio.sleep().",
        "Explain why synchronous ORMs (like legacy Django ORM) should use normal def in FastAPI."
      ],
      primarySource: "Sebastián Ramírez, *FastAPI Documentation: Concurrency and async / await* (fastapi.tiangolo.com/async/).",
      quiz: [
        {
          q: "When should you declare a FastAPI endpoint with 'async def'?",
          a: [
            "When you are using asynchronous libraries and can use the 'await' keyword (e.g. asyncpg, httpx)",
            "For every single function in the entire application without exception",
            "Only when the function does not return any data",
            "Only on Windows operating systems"
          ],
          c: 0,
          why: "async def is appropriate when you have awaitable non-blocking I/O calls."
        },
        {
          q: "What does FastAPI do under the hood when you define an endpoint with standard 'def' (no async)?",
          a: [
            "It runs the function in an external worker threadpool so blocking operations do not freeze the main event loop",
            "It rewrites the function in C++",
            "It rejects the request with an error",
            "It disables all validation"
          ],
          c: 0,
          why: "FastAPI offloads standard def routes to anyio worker threadpools automatically."
        },
        {
          q: "What happens if you run a CPU-intensive calculation (like image processing) directly inside 'async def'?",
          a: [
            "It blocks the main event loop, preventing all other incoming requests from being processed while the calculation runs",
            "It runs across all CPU cores in parallel",
            "The calculation finishes in zero seconds",
            "The server automatically creates a thread"
          ],
          c: 0,
          why: "CPU-bound tasks block the thread; they must be offloaded to worker threads or processes."
        },
        {
          q: "What library powers FastAPI's underlying asynchronous web server capabilities?",
          a: [
            "Starlette (a lightweight ASGI framework/toolkit)",
            "Django",
            "Flask",
            "jQuery"
          ],
          c: 0,
          why: "FastAPI is built directly on top of Starlette for routing and HTTP handling."
        }
      ]
    },
    {
      n: 3,
      id: "dependency-injection-with-depends",
      title: "Dependency Injection with Depends",
      topic: "Dependency Injection & Structure",
      anim: "Rocket",
      lede: "FastAPI's greatest feature is its Dependency Injection system. Master the Depends() function, reusable database sessions, and hierarchical dependency trees.",
      winShort: "Implement reusable dependency injection functions for database sessions and authentication",
      missionLink: "The architectural foundation for sharing resources and enforcing security in FastAPI",
      sec1: {
        title: "The power of Depends()",
        content: `<p>How do multiple endpoints share database connections, authentication logic, and pagination settings without repeating code? In other frameworks, developers write messy global variables or convoluted decorators.</p><p>FastAPI provides a built-in <b>Dependency Injection (DI)</b> engine using <code>Depends()</code>. A dependency is simply a callable function. FastAPI resolves dependencies hierarchically, injects the results into your path operation function, and automatically handles cleanup (like closing database sessions) using <b>yield dependencies</b>.</p>`,
        keyIdea: "Depends() injects shared dependencies and handles automatic setup and teardown cleanup."
      },
      predict: {
        q: "What happens to the code after a 'yield' statement in a FastAPI dependency (e.g. 'yield session')?",
        a: [
          "It executes automatically after the route function completes and the response is sent (teardown cleanup)",
          "It is completely ignored and never runs",
          "It causes an infinite loop",
          "It cancels the HTTP response"
        ],
        c: 0,
        why: "Yield dependencies allow running cleanup code (like closing DB sessions) after the request completes."
      },
      sec2: {
        title: "The dependency injection tree",
        content: `<p>Observe how dependencies can themselves depend on other sub-dependencies.</p>`,
      },
      diagram: {
        boxes: [
          { title: "get_db()", lines: ["yields database session", "closes session in finally"] },
          { title: "get_current_user()", lines: ["Depends(oauth2_scheme)", "Depends(get_db)", "returns authenticated User"] },
          { title: "get_admin_user()", lines: ["Depends(get_current_user)", "verifies user.is_admin", "hierarchical resolution!"] }
        ]
      },
      sec3: {
        title: "Tracing yield dependency lifecycle",
        content: `<p>Trace how a database session is created, yielded to a route, and safely closed.</p>`,
      },
      trace: {
        code: [
          "async def get_db():",
          "    session = AsyncSessionLocal()",
          "    try:",
          "        yield session # route handler executes here!",
          "    finally:",
          "        await session.close() # cleanup runs after response is sent!"
        ],
        steps: [
          { line: 1, vars: { setup: "database connection acquired from pool" } },
          { line: 3, vars: { execution: "yield hands session to route handler; route runs query" } },
          { line: 5, vars: { cleanup: "finally block executes; session returned to pool cleanly" } }
        ]
      },
      practiceIntro: "Test your memory of FastAPI dependency injection.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The FastAPI function used to declare a dependency is <0>().",
          "A dependency that executes cleanup code after the response uses the <1> keyword.",
          "Dependencies can depend on other sub-dependencies, forming a dependency <2>."
        ],
        blanks: [
          { a: ["Depends"], why: "Depends() registers dependency callables." },
          { a: ["yield"], why: "yield divides setup from teardown cleanup." },
          { a: ["tree", "graph"], why: "FastAPI resolves dependency graphs hierarchically." }
        ]
      },
      win: "You can design reusable, hierarchical dependency injection pipelines for database sessions, caching, and auth.",
      nextTasks: [
        "Implement a get_db yield dependency that provides an SQLAlchemy session and closes it in finally.",
        "Create a common pagination dependency returning CommonQueryParams(skip=0, limit=10).",
        "Override a dependency in an automated test using app.dependency_overrides[get_db] = get_test_db."
      ],
      primarySource: "Sebastián Ramírez, *FastAPI Documentation: Dependencies* (fastapi.tiangolo.com/tutorial/dependencies/).",
      quiz: [
        {
          q: "What is the primary benefit of 'app.dependency_overrides' in FastAPI automated testing?",
          a: [
            "It allows swapping real dependencies (like production databases) with test databases or mocks in tests without editing application code",
            "It turns off all testing assertions",
            "It increases network download speeds",
            "It automatically generates test passwords"
          ],
          c: 0,
          why: "dependency_overrides makes dependency swapping effortless in test harnesses."
        },
        {
          q: "Can a dependency take query parameters and headers as its own arguments?",
          a: [
            "Yes, dependencies can take all standard FastAPI parameters (query, header, body) and validate them with Pydantic",
            "No, dependencies can only accept database objects",
            "Only if the parameters are numbers",
            "Only on Linux servers"
          ],
          c: 0,
          why: "Dependencies have full access to request parameters, headers, and validation schemas."
        },
        {
          q: "What does the 'use_cache=True' default parameter do on Depends()?",
          a: [
            "Ensures that if multiple dependencies in the same request require the same sub-dependency, it is called only once and cached for that request",
            "Stores the result permanently in Redis",
            "Saves the result to the browser cookie jar",
            "Disables all security checks"
          ],
          c: 0,
          why: "FastAPI caches dependency results within the scope of a single request to avoid redundant execution."
        },
        {
          q: "Where should database connection transactions be committed when using yield dependencies?",
          a: [
            "Inside the route operation, or explicitly in the yield dependency after yielding if using an auto-commit pattern",
            "In the browser JavaScript console",
            "In the client cookie",
            "Database connections never need to be committed"
          ],
          c: 0,
          why: "Yield dependencies let you wrap the yield in try/except to commit on success and rollback on error."
        }
      ]
    },
    {
      n: 4,
      id: "routing-and-modular-apirouter",
      title: "Routing and modular APIRouter",
      topic: "Dependency Injection & Structure",
      anim: "Rocket",
      lede: "Stop putting 50 endpoints in a single main.py file. Master FastAPI's APIRouter: decomposing routes into feature modules with custom prefixes, tags, and dependencies.",
      winShort: "Structure multi-route applications modularly using APIRouter and path prefixes",
      missionLink: "Enables scalable code organization across large backend projects",
      sec1: {
        title: "Modular route decomposition",
        content: `<p>A production API can have hundreds of endpoints. Putting them all in <code>main.py</code> creates an unmaintainable monolithic script. FastAPI solves this with <b>APIRouter</b>.</p><p>An <code>APIRouter</code> behaves just like an <code>app</code> instance: you declare routes on it, and then include the router into your main app: <code>app.include_router(users_router, prefix="/users", tags=["Users"])</code>. This automatically groups your endpoints cleanly in the interactive Swagger documentation.</p>`,
        keyIdea: "Use APIRouter to decompose routes into feature modules with shared prefixes and tags."
      },
      predict: {
        q: "If an APIRouter has prefix='/items', and a route inside defines '@router.get('/{id}')', what is the full path?",
        a: ["/items/{id}", "/{id}", "/items/items/{id}", "/api/{id}"],
        c: 0,
        why: "FastAPI concatenates router prefixes with route paths: /items + /{id} = /items/{id}."
      },
      sec2: {
        title: "The modular project structure",
        content: `<p>Observe how modular routers roll up into the main FastAPI application instance.</p>`,
      },
      diagram: {
        boxes: [
          { title: "routers/users.py", lines: ["router = APIRouter(prefix='/users')", "GET /, POST /, GET /{id}"] },
          { title: "routers/orders.py", lines: ["router = APIRouter(prefix='/orders')", "GET /, POST /, DELETE /{id}"] },
          { title: "main.py", lines: ["app.include_router(users.router)", "app.include_router(orders.router)"] }
        ]
      },
      sec3: {
        title: "Tracing router-level dependencies",
        content: `<p>Trace how applying a dependency to an APIRouter protects all routes inside that module automatically.</p>`,
      },
      trace: {
        code: [
          "# Protect all admin routes with a single declaration:",
          "admin_router = APIRouter(",
          "    prefix='/admin',",
          "    tags=['Admin'],",
          "    dependencies=[Depends(verify_admin_token)] # applies to ALL routes inside!",
          ")",
          "@admin_router.get('/metrics') # automatically protected by verify_admin_token!"
        ],
        steps: [
          { line: 1, vars: { prefix: "mounted at /admin" } },
          { line: 4, vars: { security: "verify_admin_token enforced across every route in router" } },
          { line: 6, vars: { protected: "/admin/metrics inherits router dependency automatically" } }
        ]
      },
      practiceIntro: "Test your memory of APIRouter conventions.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The modular routing class in FastAPI is API<0>.",
          "The method to mount a router into the main app is app.include_<1>().",
          "The property grouping routes in Swagger documentation is <2>."
        ],
        blanks: [
          { a: ["Router"], why: "APIRouter groups modular route handlers." },
          { a: ["router"], why: "include_router mounts routers." },
          { a: ["tags"], why: "tags=['Users'] organizes endpoints in Swagger UI." }
        ]
      },
      win: "You can organize multi-file FastAPI codebases cleanly using modular APIRouter feature packages.",
      nextTasks: [
        "Create a routers/ package and extract endpoints into separate users.py and items.py files.",
        "Mount the routers in main.py using app.include_router().",
        "Add a router-level dependency to protect all routes in an administrative router."
      ],
      primarySource: "Sebastián Ramírez, *FastAPI Documentation: Bigger Applications — Multiple Files* (fastapi.tiangolo.com/tutorial/bigger-applications/).",
      quiz: [
        {
          q: "What is the primary benefit of using APIRouter in FastAPI?",
          a: [
            "It allows decomposing a large application into modular, independent route files with shared prefixes, tags, and dependencies",
            "It makes Python execute in parallel across multiple machines",
            "It encrypts all network packets with TLS",
            "It eliminates the need for Pydantic models"
          ],
          c: 0,
          why: "APIRouter enables clean, modular code organization across large multi-developer codebases."
        },
        {
          q: "How can you apply an authentication dependency to every route in an APIRouter at once?",
          a: [
            "Pass a list of dependencies to the APIRouter constructor via the dependencies parameter",
            "Add the @auth decorator above every single function",
            "Name the router 'secure_router'",
            "It is impossible; dependencies must be declared on each route individually"
          ],
          c: 0,
          why: "Router-level dependencies apply automatically to every endpoint declared on that router."
        },
        {
          q: "What do 'tags' do on an APIRouter (e.g. tags=['Billing'])?",
          a: [
            "They group related endpoints together under named accordion sections in the interactive Swagger UI at /docs",
            "They set the billing price for API calls",
            "They track user browsing history",
            "They tag database records with metadata"
          ],
          c: 0,
          why: "Tags organize and categorize endpoints in OpenAPI documentation."
        },
        {
          q: "Can an APIRouter include another sub-APIRouter?",
          a: [
            "Yes, APIRouters can be nested hierarchically using router.include_router()",
            "No, routers can only be mounted directly on the top-level FastAPI app",
            "Only on mobile devices",
            "Only if both routers have identical prefixes"
          ],
          c: 0,
          why: "Hierarchical nesting allows building complex sub-module routing trees."
        }
      ]
    },
    {
      n: 5,
      id: "authentication-oauth2-and-jwt-in-fastapi",
      title: "Authentication, OAuth2, and JWT in FastAPI",
      topic: "Security & Error Handling",
      anim: "Rocket",
      lede: "Secure your endpoints. Learn how FastAPI's OAuth2PasswordBearer integrates with Swagger UI's 'Authorize' button, and how to validate JWT tokens using dependencies.",
      winShort: "Implement JWT bearer token authentication and integrate with Swagger UI security",
      missionLink: "The standard authentication pattern for modern FastAPI microservices",
      sec1: {
        title: "The built-in security framework",
        content: `<p>FastAPI provides first-class security primitives under <code>fastapi.security</code>. By using <b>OAuth2PasswordBearer</b>, FastAPI does two things automatically: <b>1.</b> It adds the interactive green 'Authorize' button to your <code>/docs</code> Swagger UI, allowing you to log in directly inside the browser docs!</p><p><b>2.</b> It automatically extracts the <code>Authorization: Bearer &lt;token&gt;</code> header on incoming requests. You combine this with a <code>get_current_user</code> dependency to secure any endpoint with a single parameter: <code>user: User = Depends(get_current_user)</code>.</p>`,
        keyIdea: "OAuth2PasswordBearer extracts bearer tokens and integrates natively with Swagger UI's login button."
      },
      predict: {
        q: "What does Swagger UI display in /docs when an endpoint uses OAuth2PasswordBearer?",
        a: [
          "A padlock icon next to the route and a top-level 'Authorize' button for testing with tokens",
          "A warning stating the endpoint is broken",
          "A pop-up requiring credit card payment",
          "It hides the endpoint from documentation"
        ],
        c: 0,
        why: "FastAPI embeds security schemes into the OpenAPI spec, activating Swagger's interactive auth tools."
      },
      sec2: {
        title: "FastAPI security flow",
        content: `<p>Observe how OAuth2PasswordBearer and get_current_user protect endpoints.</p>`,
      },
      diagram: {
        boxes: [
          { title: "1. POST /token", lines: ["receives username & password", "verifies hash -> returns JWT access_token"] },
          { title: "2. oauth2_scheme", lines: ["OAuth2PasswordBearer(tokenUrl='token')", "extracts Bearer token from headers"] },
          { title: "3. get_current_user", lines: ["decodes JWT & checks expiration", "fetches user from DB -> returns User"] }
        ]
      },
      sec3: {
        title: "Tracing protected endpoint execution",
        content: `<p>Trace how a protected endpoint verifies a JWT bearer token before executing.</p>`,
      },
      trace: {
        code: [
          "@app.get('/profile')",
          "async def get_profile(current_user: User = Depends(get_current_user)):",
          "    return {'email': current_user.email, 'status': 'active'}"
        ],
        steps: [
          { line: 0, vars: { request: "GET /profile with Authorization: Bearer <jwt>" } },
          { line: 1, vars: { dependency_exec: "get_current_user decodes token, validates exp, returns User object" } },
          { line: 2, vars: { route_exec: "route receives validated current_user; returns profile JSON" } }
        ]
      },
      practiceIntro: "Test your memory of FastAPI authentication utilities.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The FastAPI security utility extracting bearer tokens is OAuth2Password<0>.",
          "The dependency extracting and verifying user identity is get_current_<1>.",
          "The status code returned when a JWT signature is invalid is <2>."
        ],
        blanks: [
          { a: ["Bearer"], why: "OAuth2PasswordBearer parses bearer tokens." },
          { a: ["user"], why: "get_current_user is the canonical dependency name." },
          { a: ["401"], why: "401 Unauthorized is standard for authentication failures." }
        ]
      },
      win: "You can implement end-to-end JWT authentication in FastAPI with seamless Swagger UI documentation support.",
      nextTasks: [
        "Implement a /token login endpoint that accepts OAuth2PasswordRequestForm and returns a JWT.",
        "Protect a /users/me endpoint using Depends(get_current_user).",
        "Test logging in and authenticating requests directly inside http://127.0.0.1:8000/docs."
      ],
      primarySource: "Sebastián Ramírez, *FastAPI Documentation: Security — OAuth2 with Password and Bearer* (fastapi.tiangolo.com/tutorial/security/oauth2-jwt/).",
      quiz: [
        {
          q: "What does the 'tokenUrl' parameter in OAuth2PasswordBearer(tokenUrl='token') do?",
          a: [
            "Tells Swagger UI which relative endpoint URL to send user credentials to when clicking the 'Authorize' button",
            "The external URL where user passwords are saved",
            "The website address of the developer",
            "It has no function"
          ],
          c: 0,
          why: "tokenUrl informs the OpenAPI specification where client UIs should request access tokens."
        },
        {
          q: "What should 'get_current_user' raise if an incoming JWT is expired or has an invalid signature?",
          a: [
            "raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Could not validate credentials')",
            "raise ValueError('bad token')",
            "return None",
            "print('error') to the console"
          ],
          c: 0,
          why: "Raising HTTPException(401) terminates the request with appropriate authentication headers."
        },
        {
          q: "Why is 'Depends(get_current_user)' superior to manual token verification in every route?",
          a: [
            "It is reusable across hundreds of routes, and allows easy dependency overriding during automated testing",
            "It speeds up the computer processor",
            "It turns off database logging",
            "It eliminates the need for HTTPS encryption"
          ],
          c: 0,
          why: "Centralizing authentication in a dependency ensures DRY security policies across all routes."
        },
        {
          q: "What header is automatically added to 401 responses when using OAuth2 in FastAPI?",
          a: [
            "WWW-Authenticate: Bearer",
            "Set-Cookie: session=null",
            "Content-Type: text/plain",
            "Access-Control-Allow-Origin: *"
          ],
          c: 0,
          why: "RFC 6750 mandates the WWW-Authenticate: Bearer challenge header on 401 unauthorized responses."
        }
      ]
    },
    {
      n: 6,
      id: "error-handling-and-response-models",
      title: "Error handling and response models",
      topic: "Security & Error Handling",
      anim: "Rocket",
      lede: "Never leak password hashes in API responses. Master FastAPI's response_model filtering, custom exception handlers, and HTTPException.",
      winShort: "Filter sensitive response data using response_model and customize error formats",
      missionLink: "Prevents accidental data leakage and standardizes API error responses",
      sec1: {
        title: "Filtering output with response_model",
        content: `<p>A common security vulnerability: a database user model contains <code>password_hash</code>. A developer writes <code>return user</code>, inadvertently exposing the hashed password in public JSON responses!</p><p>FastAPI solves this with <b>response_model</b>. When you declare <code>@app.get('/users/{id}', response_model=UserOut)</code>, FastAPI <b>filters the output data strictly to the fields declared in UserOut</b>. Even if your database model contains password hashes or internal keys, FastAPI strips them out before serializing.</p>`,
        keyIdea: "response_model guarantees that only intended, safe fields are serialized in the HTTP response."
      },
      predict: {
        q: "If an ORM model has (id, email, password_hash), and response_model has only (id, email), is password_hash included in the JSON output?",
        a: [
          "No, FastAPI filters the response strictly to the fields defined in the response_model schema",
          "Yes, all database fields are always serialized",
          "An error is thrown because password_hash is missing from the schema",
          "Only in development mode"
        ],
        c: 0,
        why: "response_model acts as a strict output filter, stripping any fields not explicitly declared."
      },
      sec2: {
        title: "The input versus output schema pattern",
        content: `<p>Separate your Pydantic schemas into distinct Input, Storage, and Output models.</p>`,
      },
      diagram: {
        boxes: [
          { title: "UserCreate (Input)", lines: ["email: EmailStr, password: str", "raw plain text password accepted"] },
          { title: "UserInDB (Storage)", lines: ["id, email, hashed_password", "database persistence layer"] },
          { title: "UserOut (Output)", lines: ["id: int, email: EmailStr", "response_model=UserOut strips password!"] }
        ]
      },
      sec3: {
        title: "Tracing custom exception handler execution",
        content: `<p>Trace how a custom application exception is converted into a standard RFC 9457 error response.</p>`,
      },
      trace: {
        code: [
          "@app.exception_handler(ItemNotFoundError)",
          "async def item_not_found_handler(request, exc):",
          "    return JSONResponse(",
          "        status_code=404,",
          "        content={'title': 'Item Not Found', 'detail': str(exc)}",
          "    )"
        ],
        steps: [
          { line: 0, vars: { register: "custom exception handler registered on app" } },
          { line: 1, vars: { trigger: "route raises ItemNotFoundError('Item 42 does not exist')" } },
          { line: 3, vars: { formatted: "handler intercepts error and formats clean 404 JSON response" } }
        ]
      },
      practiceIntro: "Test your memory of response modeling and error handling.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The decorator parameter defining output schema filtering is response_<0>.",
          "The standard exception raised to return HTTP status codes is HTTP<1>.",
          "Custom error response formatting is registered using app.exception_<2>()."
        ],
        blanks: [
          { a: ["model"], why: "response_model filters outgoing JSON." },
          { a: ["Exception"], why: "HTTPException halts with a status code." },
          { a: ["handler"], why: "exception_handler registers custom error mappers." }
        ]
      },
      win: "You can prevent sensitive data leaks using response models and deliver uniform custom error responses.",
      nextTasks: [
        "Create separate UserCreate and UserOut Pydantic models for an endpoint.",
        "Verify that password fields are stripped when returning data with response_model=UserOut.",
        "Implement a custom exception handler that formats errors according to RFC 9457 Problem Details."
      ],
      primarySource: "Sebastián Ramírez, *FastAPI Documentation: Response Model* (fastapi.tiangolo.com/tutorial/response-model/).",
      quiz: [
        {
          q: "What is the primary security benefit of using 'response_model' in FastAPI?",
          a: [
            "It filters outgoing data, ensuring private fields (like password hashes or internal flags) are never accidentally leaked in API responses",
            "It encrypts the response body with AES-256",
            "It prevents the server from being attacked by DDoS",
            "It automatically logs users out after ten minutes"
          ],
          c: 0,
          why: "response_model provides structural protection against accidental data leakage in responses."
        },
        {
          q: "What does 'response_model_exclude_unset=True' do on a path operation?",
          a: [
            "Excludes default values from the JSON output if they were not explicitly set when creating the model instance",
            "Excludes all numbers from the response",
            "Sets all unset fields to NULL",
            "Throws an error if any field is optional"
          ],
          c: 0,
          why: "exclude_unset is essential for PATCH responses to avoid serializing un-modified default fields."
        },
        {
          q: "What happens when you raise an HTTPException(status_code=404, detail='Not found') in FastAPI?",
          a: [
            "Execution halts immediately, and FastAPI returns an HTTP 404 response with {'detail': 'Not found'} in the body",
            "The Python process crashes with an unhandled exception",
            "The database drops the table",
            "The client is redirected to Google"
          ],
          c: 0,
          why: "HTTPException cleanly terminates the request and serializes the status code and detail message."
        },
        {
          q: "Why should you separate Create models from Read/Out models (e.g. ItemCreate vs ItemOut)?",
          a: [
            "Input models often require raw passwords or omit generated IDs; output models require IDs and must exclude secret hashes",
            "FastAPI forbids using the same model twice",
            "To make the code twice as long",
            "Because Pydantic does not support multiple endpoints"
          ],
          c: 0,
          why: "Inputs and outputs represent different domain realities: inputs lack IDs; outputs lack raw passwords."
        }
      ]
    },
    {
      n: 7,
      id: "middleware-cors-and-request-state",
      title: "Middleware, CORS, and request state",
      topic: "Async Lifecycle & Background Tasks",
      anim: "Rocket",
      lede: "Inspect and modify every request that touches your server. Master FastAPI middleware: adding CORS headers, timing requests, and attaching context to request.state.",
      winShort: "Implement custom async middleware for logging, timing, and CORS configuration",
      missionLink: "Enables cross-cutting concerns to execute across every single application request",
      sec1: {
        title: "The middleware onion",
        content: `<p>A <b>Middleware</b> is a function that wraps around every request entering and leaving your application. It acts like the layers of an onion: it processes the request <i>before</i> it reaches the route handler, and modifies the response <i>after</i> the route completes.</p><p>Middleware handles cross-cutting concerns: measuring request execution time (<code>X-Process-Time</code>), generating correlation IDs, and configuring <code>CORSMiddleware</code> to allow browser frontend communication.</p>`,
        keyIdea: "Middleware executes before every request and after every response, wrapping the entire application."
      },
      predict: {
        q: "What happens if a middleware function executes code before and after 'call_next(request)'?",
        a: [
          "The code before runs on the incoming request; 'call_next' runs the route; code after runs on the outgoing response",
          "The route is executed twice",
          "The response is cancelled",
          "The middleware runs in a separate thread"
        ],
        c: 0,
        why: "call_next(request) passes control inward to the route, returning the response object for modification."
      },
      sec2: {
        title: "The middleware lifecycle",
        content: `<p>Visualise how requests traverse the middleware pipeline down to the router and back up.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Incoming Request", lines: ["HTTP request enters server", "CORSMiddleware checks Origin"] },
          { title: "Custom Timing Middleware", lines: ["start_time = time.perf_counter()", "response = await call_next(request)"] },
          { title: "Outgoing Response", lines: ["response.headers['X-Process-Time'] = ms", "response delivered to client"] }
        ]
      },
      sec3: {
        title: "Tracing timing middleware execution",
        content: `<p>Trace how a custom timing middleware adds execution metrics to response headers.</p>`,
      },
      trace: {
        code: [
          "@app.middleware('http')",
          "async def add_process_time(request: Request, call_next):",
          "    start = time.perf_counter()",
          "    response = await call_next(request) # route handler runs here",
          "    duration = time.perf_counter() - start",
          "    response.headers['X-Process-Time'] = str(duration)",
          "    return response"
        ],
        steps: [
          { line: 2, vars: { timer_start: "high-resolution timer started" } },
          { line: 3, vars: { route_execution: "request processed by matching path operation" } },
          { line: 5, vars: { header_appended: "X-Process-Time header attached to outgoing response" } }
        ]
      },
      practiceIntro: "Test your memory of middleware mechanics.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The decorator registering custom HTTP middleware is @app.<0>('http').",
          "The callback function passing the request down to the route is <1>_next.",
          "The built-in middleware configuring cross-origin permissions is <2>Middleware."
        ],
        blanks: [
          { a: ["middleware"], why: "@app.middleware('http') registers HTTP middleware." },
          { a: ["call"], why: "call_next(request) executes downstream handlers." },
          { a: ["CORS"], why: "CORSMiddleware manages cross-origin headers." }
        ]
      },
      win: "You can build custom async middleware to time requests, inject correlation headers, and configure CORS security.",
      nextTasks: [
        "Add CORSMiddleware to a FastAPI app allowing origins: ['http://localhost:3000'].",
        "Implement a custom timing middleware that attaches an X-Process-Time header.",
        "Store a request ID in request.state.request_id and access it inside a route."
      ],
      primarySource: "Sebastián Ramírez, *FastAPI Documentation: Middleware* (fastapi.tiangolo.com/tutorial/middleware/).",
      quiz: [
        {
          q: "What does 'await call_next(request)' do inside a FastAPI middleware function?",
          a: [
            "Passes the request to the matching path operation and returns the resulting Response object",
            "Calls the next middleware in a separate operating system process",
            "Restarts the FastAPI server",
            "Cancels the request and returns status 400"
          ],
          c: 0,
          why: "call_next dispatches the request through subsequent middleware and routes to produce the response."
        },
        {
          q: "How do you store temporary request-scoped data (like a request ID) to access later in a route handler?",
          a: [
            "Attach it to request.state (e.g. request.state.request_id = uuid4())",
            "Save it to a global variable in main.py",
            "Write it to a file on the server desktop",
            "Store it in the computer BIOS"
          ],
          c: 0,
          why: "request.state is a dedicated state container scoped strictly to the current request lifecycle."
        },
        {
          q: "Where in the application execution order does middleware run relative to dependencies?",
          a: [
            "Middleware runs BEFORE any dependencies are evaluated, and AFTER the response is generated",
            "Middleware runs after the route function completes only",
            "Middleware runs inside the database engine",
            "Middleware only runs on failed requests"
          ],
          c: 0,
          why: "Middleware is the outer shell of the application; it wraps around dependencies and routes."
        },
        {
          q: "What is the recommended middleware for enabling frontend single-page apps to call a FastAPI backend?",
          a: [
            "CORSMiddleware from fastapi.middleware.cors",
            "GZipMiddleware",
            "HTTPSRedirectMiddleware",
            "TrustedHostMiddleware"
          ],
          c: 0,
          why: "CORSMiddleware handles Origin headers and preflight OPTIONS checks natively."
        }
      ]
    },
    {
      n: 8,
      id: "background-tasks-lifespan-and-production",
      title: "Background tasks, lifespan, and production",
      topic: "Async Lifecycle & Background Tasks",
      anim: "Rocket",
      lede: "Don't make users wait for slow emails or webhook notifications. Master FastAPI BackgroundTasks, modern async lifespan context managers, and production deployment with Uvicorn.",
      winShort: "Implement non-blocking background tasks and manage server startup/shutdown with lifespan",
      missionLink: "Prepares FastAPI applications for high-throughput production deployment",
      sec1: {
        title: "Responding before doing the heavy lifting",
        content: `<p>When a user registers, they should not wait 3 seconds while your server connects to an external email provider to send a welcome email. The HTTP response should return in 5 milliseconds!</p><p>FastAPI provides <b>BackgroundTasks</b>. You add a task: <code>background_tasks.add_task(send_email, user.email)</code>. FastAPI immediately sends the <code>201 Created</code> response back to the client, and then <b>executes the background task right after the response is delivered</b>.</p>`,
        keyIdea: "BackgroundTasks execute after sending the response, keeping API latencies ultra-low."
      },
      predict: {
        q: "When does a function added via 'background_tasks.add_task(fn)' actually run?",
        a: [
          "Directly AFTER the HTTP response has been sent back to the client user",
          "Before the route function begins executing",
          "Twenty-four hours later",
          "Only when the server reboots"
        ],
        c: 0,
        why: "BackgroundTasks run immediately after the response is delivered, keeping client latency fast."
      },
      sec2: {
        title: "Modern async lifespan management",
        content: `<p>How the lifespan async context manager manages startup database pools and graceful shutdowns.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Startup (Before Yield)", lines: ["connect database connection pool", "load ML model into memory"] },
          { title: "yield", lines: ["app serves incoming HTTP traffic", "active production runtime"] },
          { title: "Shutdown (After Yield)", lines: ["close database connection pool", "flush logs and clean up resources"] }
        ]
      },
      sec3: {
        title: "Tracing lifespan startup and background tasks",
        content: `<p>Trace how lifespan initializes resources on boot and background tasks process post-response work.</p>`,
      },
      trace: {
        code: [
          "@asynccontextmanager",
          "async def lifespan(app: FastAPI):",
          "    await db.connect() # startup",
          "    yield",
          "    await db.disconnect() # shutdown",
          "# Route with background task:",
          "@app.post('/orders')",
          "async def create_order(tasks: BackgroundTasks):",
          "    tasks.add_task(notify_warehouse, order_id=42)",
          "    return {'status': 'order placed'} # client receives 200 in 2ms!"
        ],
        steps: [
          { line: 2, vars: { startup: "database connection pool established on boot" } },
          { line: 9, vars: { instant_response: "client receives response in 2ms" } },
          { line: 8, vars: { background_exec: "warehouse notification executed post-response without blocking client" } },
          { line: 4, vars: { shutdown: "clean disconnect on server SIGTERM" } }
        ]
      },
      practiceIntro: "Test your memory of production FastAPI patterns.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The utility executing tasks after sending responses is <0>Tasks.",
          "The modern async context manager handling startup and shutdown is <1>.",
          "For heavy distributed background processing (hours-long), use a message queue like <2>."
        ],
        blanks: [
          { a: ["Background"], why: "BackgroundTasks handles post-response jobs." },
          { a: ["lifespan"], why: "Lifespan context managers replace legacy on_event handlers." },
          { a: ["Celery", "Redis", "RQ"], why: "Heavy jobs require external distributed task queues." }
        ]
      },
      win: "You can build production-ready FastAPI applications with non-blocking background tasks and graceful lifecycle management.",
      nextTasks: [
        "Implement an async lifespan context manager that initializes a database pool on startup.",
        "Add a background task to an endpoint to log audit records asynchronously.",
        "Configure Uvicorn with multiple workers for production using uvicorn main:app --workers 4."
      ],
      primarySource: "Sebastián Ramírez, *FastAPI Documentation: Lifespan Events* & *Background Tasks* (fastapi.tiangolo.com).",
      quiz: [
        {
          q: "When is FastAPI's built-in BackgroundTasks appropriate versus an external queue like Celery or RQ?",
          a: [
            "BackgroundTasks is ideal for lightweight in-process tasks (sending emails, logging); heavy CPU or long tasks require Celery",
            "BackgroundTasks is only for downloading images",
            "Celery is deprecated in modern Python",
            "There is no difference between them"
          ],
          c: 0,
          why: "BackgroundTasks runs in-process; if the server restarts, queued tasks are lost. Heavy jobs need Celery."
        },
        {
          q: "What replaced the legacy '@app.on_event(\"startup\")' syntax in modern FastAPI?",
          a: [
            "The async context manager 'lifespan' parameter on the FastAPI app instance",
            "Global while loops in main.py",
            "A cron job running on the host OS",
            "Startup events are no longer supported"
          ],
          c: 0,
          why: "The asynccontextmanager 'lifespan' pattern is the modern standard for startup and shutdown logic."
        },
        {
          q: "How do you run FastAPI with multiple worker processes in production behind Uvicorn?",
          a: [
            "uvicorn main:app --workers 4 --host 0.0.0.0 --port 8000",
            "Run python main.py four times in different terminal tabs",
            "uvicorn --multiverse 4",
            "Add @app.multiworker(4) in Python code"
          ],
          c: 0,
          why: "The --workers flag spawns multiple worker processes to utilize all available CPU cores."
        },
        {
          q: "What happens if a BackgroundTask raises an unhandled exception after the response is sent?",
          a: [
            "The exception is logged to server stderr, but the client response has already completed successfully",
            "The client receives an HTTP 500 error after having already received a 200",
            "The server operating system reboots",
            "The database drops all tables"
          ],
          c: 0,
          why: "The client response is already sent; background errors are logged to server error streams."
        }
      ]
    }
  ]
};

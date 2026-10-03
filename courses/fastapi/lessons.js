/* ============================================================
   FastAPI & Python APIs — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "the-fastapi-foundations-type-hints-and-pydantic", file: "lessons/0001-the-fastapi-foundations-type-hints-and-pydantic.html", title: "The FastAPI foundations: type hints and Pydantic", topic: "FastAPI & Pydantic Foundations", anim: "Rocket" },
  { n: 2, id: "async-def-versus-def-in-fastapi", file: "lessons/0002-async-def-versus-def-in-fastapi.html", title: "async def versus def in FastAPI", topic: "FastAPI & Pydantic Foundations", anim: "Rocket" },
  { n: 3, id: "dependency-injection-with-depends", file: "lessons/0003-dependency-injection-with-depends.html", title: "Dependency Injection with Depends", topic: "Dependency Injection & Structure", anim: "Rocket" },
  { n: 4, id: "routing-and-modular-apirouter", file: "lessons/0004-routing-and-modular-apirouter.html", title: "Routing and modular APIRouter", topic: "Dependency Injection & Structure", anim: "Rocket" },
  { n: 5, id: "authentication-oauth2-and-jwt-in-fastapi", file: "lessons/0005-authentication-oauth2-and-jwt-in-fastapi.html", title: "Authentication, OAuth2, and JWT in FastAPI", topic: "Security & Error Handling", anim: "Rocket" },
  { n: 6, id: "error-handling-and-response-models", file: "lessons/0006-error-handling-and-response-models.html", title: "Error handling and response models", topic: "Security & Error Handling", anim: "Rocket" },
  { n: 7, id: "middleware-cors-and-request-state", file: "lessons/0007-middleware-cors-and-request-state.html", title: "Middleware, CORS, and request state", topic: "Async Lifecycle & Background Tasks", anim: "Rocket" },
  { n: 8, id: "background-tasks-lifespan-and-production", file: "lessons/0008-background-tasks-lifespan-and-production.html", title: "Background tasks, lifespan, and production", topic: "Async Lifecycle & Background Tasks", anim: "Rocket" }
];

/* ============================================================
   FastAPI & Python APIs — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "fastapi-basics", title: "FastAPI & Pydantic Foundations",
    terms: [
      { term: "FastAPI", def: "A modern, high-performance web framework for building APIs with Python based on standard type hints.", lesson: 1, tags: ["framework"] },
      { term: "Pydantic", def: "A data validation and settings management library using Python type annotations to enforce schemas.", lesson: 1, tags: ["pydantic"] },
      { term: "ASGI", def: "Asynchronous Server Gateway Interface: the standard interface between async Python web servers and applications.", lesson: 2, tags: ["asgi"] },
      { term: "Uvicorn", def: "A lightning-fast ASGI web server implementation for Python based on uvloop and httptools.", lesson: 2, tags: ["servers"] }
    ]
  },
  {
    id: "dependency-injection", title: "Dependency Injection & Structure",
    terms: [
      { term: "Depends", def: "FastAPI's dependency injection function declaring that a route parameter requires a dependency helper.", lesson: 3, tags: ["di"] },
      { term: "Yield dependency", def: "A dependency using 'yield' to execute setup code before the route and cleanup code after the response.", lesson: 3, tags: ["di"] },
      { term: "APIRouter", def: "A class allowing modular decomposition of route definitions across multiple files and packages.", lesson: 4, tags: ["routing"] },
      { term: "Path parameter", def: "A variable part of a URL path (e.g. /items/{item_id}) captured directly by a route function.", lesson: 4, tags: ["routing"] }
    ]
  },
  {
    id: "security-fastapi", title: "Security & Error Handling",
    terms: [
      { term: "OAuth2PasswordBearer", def: "A security utility class declaring an OAuth2 password flow and extracting bearer tokens from headers.", lesson: 5, tags: ["security"] },
      { term: "HTTPException", def: "FastAPI's standard exception class for returning HTTP error status codes and detail messages.", lesson: 6, tags: ["errors"] },
      { term: "Response model", def: "The Pydantic model declared on a route (response_model=UserOut) filtering and serializing output data.", lesson: 6, tags: ["serialization"] },
      { term: "Field validator", def: "A Pydantic method decorator (@field_validator) defining custom validation logic on model fields.", lesson: 1, tags: ["pydantic"] }
    ]
  },
  {
    id: "async-lifecycle", title: "Async Lifecycle & Background Tasks",
    terms: [
      { term: "BackgroundTasks", def: "A FastAPI utility class queueing functions to execute in the background after the response is sent.", lesson: 8, tags: ["tasks"] },
      { term: "Lifespan", def: "An async context manager managing application startup and shutdown events (replacing on_event).", lesson: 8, tags: ["lifecycle"] },
      { term: "Middleware", def: "A function processing every request before it reaches a route and every response before it is returned.", lesson: 7, tags: ["middleware"] },
      { term: "Swagger UI", def: "The interactive OpenAPI documentation playground rendered automatically at /docs by FastAPI.", lesson: 1, tags: ["docs"] }
    ]
  }
];

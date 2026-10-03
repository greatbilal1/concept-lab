# Mission — Backend Architecture

## Why this course exists

Anyone can write a web server that responds to an HTTP request in 50 lines of code. But as features multiply, deadlines loom, and teams grow, undisciplined codebases collapse into tangled 'Big Balls of Mud': database queries inside templates, business calculations scattered across routing handlers, and zero boundaries between subsystems. This course teaches how to architect production-grade backend servers using layered architectures, hexagonal boundaries, dependency inversion, and clean domain services.

## What the learner can do at the end

- Architect backend applications using the standard 3-layer architecture (Presentation, Business Logic, Persistence).
- Decouple business logic from external frameworks using the Hexagonal Architecture (Ports and Adapters) pattern.
- Implement the Service Layer and Repository patterns to isolate domain operations from database drivers.
- Manage configuration, secrets, and environment dependencies following Twelve-Factor guidelines.
- Structure error handling, logging, and observability boundaries across service lifecycles.

## What this course is NOT

- Not a cloud infrastructure or Kubernetes orchestration course.
- Not a microservice deployment guide. It focuses on the architectural structure of backend server codebases.

## Success looks like

When building a new backend service or refactoring a legacy controller, the learner cleanly isolates HTTP controllers, business service rules, and repository queries into distinct decoupled layers in under fifteen minutes.

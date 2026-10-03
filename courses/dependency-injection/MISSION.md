# Mission — Dependency Injection

## Why this course exists

Dependency Injection (DI) is one of the most misunderstood concepts in software engineering. Many developers view it as a terrifying, overly complex enterprise framework involving thousands of lines of XML or magic decorators. In reality, dependency injection is a simple, fundamental programming habit: passing collaborators in from the outside instead of constructing them inside with 'new'. This course demystifies DI, constructor injection, IoC containers, lifecycles, and test doubles.

## What the learner can do at the end

- Implement constructor injection and method injection without relying on complex frameworks.
- Understand the Inversion of Control (IoC) principle: the Hollywood Principle ('Don't call us, we'll call you').
- Configure and manage object lifecycles (Transient, Scoped, Singleton) in IoC containers.
- Decouple object construction from object execution using the Composition Root pattern.
- Leverage dependency injection to run comprehensive, lightning-fast unit tests using test doubles (mocks, fakes, stubs).

## What this course is NOT

- Not a Java Spring-only or C# .NET-only framework tutorial.
- Not an argument for over-engineering. It emphasizes pure dependency injection first.

## Success looks like

When writing a class that interacts with databases, external APIs, or system time, the learner passes collaborators in via constructor parameters, enabling seamless unit testing with in-memory test doubles in under five minutes.

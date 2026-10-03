# Mission — Software Architecture Patterns

## Why this course exists

Architecture is the decisions that are hard to change. When teams choose an architectural style based on hype rather than real trade-offs — adopting microservices before understanding their distributed complexity, or building an unorganized monolith that degrades into a Big Ball of Mud — projects fail. This course surveys the major macro-architectural styles: Layered, Modular Monolith, Hexagonal (Ports & Adapters), Event-Driven Architecture (EDA), Microservices, and CQRS / Event Sourcing.

## What the learner can do at the end

- Compare the trade-offs of Monoliths, Modular Monoliths, and Microservices across operational complexity and team size.
- Design asynchronous Event-Driven Architectures using message brokers (Kafka, RabbitMQ) and pub/sub topologies.
- Evaluate the CAP theorem and PACELC trade-offs across distributed storage systems.
- Explain Command Query Responsibility Segregation (CQRS) and Event Sourcing mechanics.
- Select the appropriate architectural pattern based on organizational Conway's Law dynamics and domain complexity.

## What this course is NOT

- Not a cloud infrastructure DevOps tutorial.
- Not a dogmatic manifesto for or against microservices. It presents hard engineering trade-offs.

## Success looks like

When tasked with choosing an architecture for a new initiative, the learner evaluates team size, deployability, latency, and consistency requirements to produce an architectural decision record (ADR) justifying the chosen pattern in under fifteen minutes.

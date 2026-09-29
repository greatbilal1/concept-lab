# Concept Lab Course Builder

A reusable implementation skill for creating and extending Concept Lab courses without repeatedly rediscovering the architecture from previous courses.

## What it solves

Without this skill, a course-generation agent often has to:

1. inspect old courses
2. infer the architecture
3. inspect shared components
4. infer visual conventions
5. inspect lesson structure
6. build the new course
7. accidentally introduce small variations

This package turns those discovered conventions into explicit contracts.

## Two modes

- **Create** — the course does not exist yet.
- **Extend** — the course exists and needs more lessons, sections, or reference
  material. Extending follows the same contracts plus a renumbering and
  cross-reference checklist (see `SKILL.md` → Extend workflow).

## Style matching without inspecting every course

The contracts are the style. To match existing courses you read the three
contract files plus **one** canonical course (`courses/how-computers-work/`) —
never the whole `courses/` directory. When extending, the course being extended
is its own style reference.

## Relationship to Matt Pocock's Teach skill

Teach = pedagogy (what to teach, in what order, with what examples and checks).

Course Builder = Concept Lab implementation consistency (how it is expressed in
the platform).

They are complementary. Content decisions come from Teach; platform decisions
come from the contracts.

## Installation

Place this folder where your coding agent discovers skills, for example:

```text
.agents/skills/course-builder/
```

or the equivalent skills directory used by your agent.

## First run

The included contracts initially say:

```text
STATUS: CALIBRATION_REQUIRED
```

On the first run, instruct the agent to perform a one-time audit of the canonical existing course and fill in the contracts.

After that, change all three contracts to:

```text
STATUS: FROZEN
```

From then on, the agent should not repeatedly inspect previous courses to rediscover architecture.

## Recommended canonical course

Pick one course that represents the current approved architecture.

Do not use the oldest course simply because it exists. Use the course whose implementation you currently want future courses to follow.

## Important

If the platform architecture intentionally changes later, perform a deliberate migration:

1. update the contracts
2. update affected shared components
3. validate existing courses
4. mark the new architecture as frozen

Do not let individual course generation silently change the platform.

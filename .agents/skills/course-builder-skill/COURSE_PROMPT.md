# Concept Lab — New Course Prompt

Use this as the normal prompt for creating a new course.

Copy/paste:

---

/course-builder

Create a new Concept Lab course.

## Course

**Title:** [COURSE TITLE]
**Slug/ID:** [COURSE-ID]
**Audience:** [AUDIENCE]
**Level:** [BEGINNER / INTERMEDIATE / ADVANCED]
**Prerequisites:** [PREREQUISITES]

## Learning goal

By the end of the course, the learner should be able to:

- [OUTCOME 1]
- [OUTCOME 2]
- [OUTCOME 3]
- [OUTCOME 4]

## Scope

Cover:

- [TOPIC 1]
- [TOPIC 2]
- [TOPIC 3]
- [TOPIC 4]

Do not cover:

- [OUT OF SCOPE 1]
- [OUT OF SCOPE 2]

## Structure

Target lessons: [NUMBER]

If the number is not pedagogically appropriate, adjust the lesson boundaries rather than padding the course.

## Teaching requirements

Use Matt Pocock's Teach skill for:
- learning progression
- explanations
- examples
- exercises
- retrieval/knowledge checks
- misconception handling

## Platform requirements

Use the Concept Lab Course Builder contract.

**Do not redesign the platform.**

Preserve:
- existing course runtime
- existing lesson schema
- existing navigation
- existing progress behavior
- existing visual system
- existing shared components
- existing responsive behavior
- existing accessibility conventions

Reuse existing components whenever possible.

Only add new shared components when genuinely necessary.

## Quality bar

The course should feel like it was created by the same system and author as the existing courses.

The learner should not be able to tell that this is a newly generated course from the UI, navigation, lesson structure, or interaction model.

## Build

Create the complete course, including:
- course metadata
- all lessons
- examples
- exercises
- knowledge checks
- visuals/interactive elements where pedagogically useful
- required assets

Validate the course using the project's existing validation/test/build commands.

At the end, report:
1. lessons created
2. learning outcomes covered
3. files added
4. shared components added, if any
5. validation performed
6. any deviations from the frozen contracts

---

## Ultra-short version

Once the system is frozen, you can use:

```text
/course-builder

Create:
Topic: [TOPIC]
Audience: [AUDIENCE]
Level: [LEVEL]
Lessons: [N]
Goal: [GOAL]

Use Teach for pedagogy and the frozen Concept Lab contracts for everything else.
Do not redesign or alter the existing course system.
```

## Extend version

To add lessons to an existing live course:

```text
/course-builder

Extend: [COURSE-ID]
Add: [NEW IDEA 1], [NEW IDEA 2]
Why: [WHY THESE ARE GENUINELY NEW, NOT PRACTICE]

Use Teach to place them in the progression.
Follow the Extend workflow: renumber first, then update every cross-reference
(lessons.js, course.html, data/courses.js, glossary, cheatsheet, MISSION, NOTES,
learning-records, and any forward references in earlier lessons).
Do not redesign the course or the platform.
```

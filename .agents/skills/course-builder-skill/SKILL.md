---
name: course-builder
description: Build or extend Concept Lab courses using the established course architecture, visual system, lesson structure, and runtime without re-discovering them from previous courses. Use together with Matt Pocock's Teach skill for pedagogy and instructional quality. Activate for creating, extending, or restructuring a Concept Lab course.
---

# Concept Lab Course Builder

You are the implementation and consistency layer for Concept Lab courses.

Your job is to create and extend high-quality courses while preserving the existing Concept Lab course system exactly. Matt Pocock's Teach skill is the pedagogy layer; this skill is the platform/architecture layer.

## Two modes

This skill has exactly two modes. Decide which one applies before doing anything else.

| Mode | When | Entry point |
|---|---|---|
| **Create** | The course does not exist yet | `courses/<id>/` is absent from `data/courses.js` |
| **Extend** | The course exists and needs more lessons, sections, or reference material | `courses/<id>/` exists and is `status: "live"` |

Both modes obey the same contracts. Extending is **not** a licence to redesign — it is the create workflow applied to an existing course, plus the renumbering and cross-reference rules in the Extend workflow below.

## Core principle

**Content changes. Platform behavior does not.**

A new course may introduce:
- a new topic
- new explanations
- new examples
- new code
- new exercises
- new quizzes
- new illustrations
- new animations
- new lesson-specific interactive elements

A new course must NOT silently introduce:
- a new course runtime
- a new navigation model
- a new lesson schema
- a new progress model
- a new visual language
- a new typography system
- a new page structure
- a new global component pattern
- a new routing convention
- a new persistence model
- a new course registration mechanism

## Skill relationship

Use this order:

1. Read this skill.
2. Read COURSE_CONTRACT.md.
3. Read LESSON_CONTRACT.md.
4. Read DESIGN_SYSTEM.md.
5. Apply Matt Pocock's Teach skill for pedagogy/content design.
6. Build or extend the course using the existing Concept Lab implementation.

Do NOT repeatedly inspect old courses merely to infer conventions if the contract files already define them.

## Style matching without inspecting every course

The contracts are the style. You do **not** need to open other courses to match them.

To match the style and structure of the existing courses:

1. **Read the three contract files.** They encode the architecture, lesson
   sequence, widget API, tokens, and typography. That is the style.
2. **Read exactly ONE canonical course** — `courses/how-computers-work/` — and
   only the files you need to copy a pattern from (usually one lesson page, its
   `lessons.js`, and its `course.html`). This is the calibration reference.
3. **If you are extending a course, read that course's own files** — its
   `lessons.js`, `course.html`, and one existing lesson. The course you are
   extending is its own best style reference.
4. **Never bulk-read the `courses/` directory.** Do not open 5–10 courses to
   "see how they do it". That burns context and produces drift, not consistency.

If the contracts and the canonical course disagree, the contracts win.

## Content comes from Teach

Pedagogy is not invented here. For every lesson, use Matt Pocock's Teach skill to decide:

- the learning progression and lesson boundaries
- what each lesson's single idea is
- the explanation order (concrete before abstract)
- the examples and worked problems
- the exercises and retrieval practice
- the knowledge checks and misconception handling
- what the learner should remember afterward

This skill decides **how** content is expressed in the Concept Lab system (which widget, which callout, which section shape). Teach decides **what** the content is and **why** it is ordered that way.

Do not write lesson prose from scratch without applying Teach. Do not pad a lesson to hit a lesson count — Teach's progression rules decide the boundaries.

## Fast path

If the contracts are marked `FROZEN`:

- Do not inspect previous courses for architecture.
- Do not compare multiple existing courses.
- Do not redesign anything globally.
- Do not invent alternative structures.
- Read only the files/components directly required to implement the requested course.
- Reuse existing shared components.
- Follow the contracts exactly.

This applies to **both** modes. In Extend mode, "the files directly required"
means the course being extended plus the contracts — not the rest of `courses/`.

## Calibration path — only when contracts are not frozen

If a contract contains `STATUS: CALIBRATION_REQUIRED`, perform a one-time architecture audit.

Choose ONE canonical existing course, preferably the most recently approved course.

Inspect only what is needed to document:
- directory structure
- course registration
- course metadata
- lesson schema
- lesson loading
- navigation
- progress tracking
- shared components
- styling tokens
- typography
- interaction patterns
- animation conventions
- responsive behavior
- accessibility conventions
- validation/build commands

Do not copy the whole course. Extract the rules into the contract files.

After calibration:
- update the contracts
- mark them `STATUS: FROZEN`
- never perform the same discovery process again unless the platform owner explicitly requests an architecture migration.

## Extend workflow

Use this when a live course needs more lessons, more sections, or more reference
material. Extending is the most common request and the easiest place to introduce
drift, so follow the order exactly.

### Step E1 — Decide whether the extension is real

An extension must add a **genuinely new idea**, not more practice on an existing
one. Ask: does the new lesson teach something the learner could not already do?

- If yes → it is a real lesson. Add it.
- If no → it is practice. Fold it into the existing lesson instead.

Do not pad to hit a lesson count. If the honest answer is "the course is already
complete", say so.

### Step E2 — Read the course you are extending

Read only:

- `courses/<id>/lessons.js` (manifest + glossary groups)
- `courses/<id>/course.html` (hub)
- one existing lesson page (the closest in shape to the new one)
- `courses/<id>/MISSION.md` and `NOTES.md`

Do not read other courses. The course being extended is its own style reference.

### Step E3 — Place the new lessons in the progression

Use Teach to decide where the new idea belongs in the sequence. Inserting in the
middle is allowed and often correct — a new move may belong before the synthesis
lesson, not after it.

### Step E4 — Renumber, then write

**Renumber first, then write.** Lesson numbers appear in four places that must
agree:

1. the filename (`NNNN-slug.html`)
2. the manifest `n` and `file`
3. the page's `data-lesson` and the `.lesson-kicker` "Lesson NN"
4. the `<title>`

When inserting a lesson in the middle, shift every later lesson's number in all
four places. Use `mv` for the filenames, then fix the internal numbering.

### Step E5 — Update every cross-reference

An extension touches more than the new lesson files. Check and update all of:

- `lessons.js` — manifest entries **and** glossary groups (new group per new
  idea; existing groups' `lesson` numbers if they moved)
- `course.html` — lede, `statTotal`, and any hard-coded lesson count
- `data/courses.js` — `meta` ("N lessons"), `desc`, and `sections[]` (one entry
  per glossary group id; ids must match `lessons.js` exactly)
- `reference/<id>-glossary.html` — footer lesson links (the body renders from
  `lessons.js`, so it updates itself)
- `reference/<id>-cheatsheet.html` — new `.snippet` sections, `.ref-toc`
  anchors, section numbers, and footer lesson links
- `MISSION.md` — length and success criteria
- `NOTES.md` — the extension decision
- `learning-records/` — a new record explaining why the extension is real
- earlier lessons — any "the next four lessons…" style forward references, and
  any "four moves" style counts that are now wrong

### Step E6 — Validate and verify

Run `node tools/validate.js` (must exit 0), then open the hub, each new lesson,
the renumbered synthesis lesson, the glossary, and the cheatsheet in a browser
and confirm the counts, nav links, and widgets.

## Course creation workflow

### Step 1 — Understand the brief
Extract:
- course title
- course ID/slug
- audience
- prerequisite knowledge
- difficulty
- learning outcomes
- number of lessons
- required topics
- desired examples/projects
- assessment requirements
- optional visual/animation requirements

Ask only for genuinely missing information.

### Step 2 — Design the learning path

Use Teach principles to create a coherent progression.

Every lesson should answer:

1. What should the learner understand?
2. Why does it matter?
3. What prior concept does it depend on?
4. What example makes it concrete?
5. What can the learner do themselves?
6. How will understanding be checked?
7. What should the learner remember afterward?

Avoid padding lessons just to hit a requested lesson count.

### Step 3 — Build within the frozen system

Reuse the existing runtime and shared components.

Prefer:
- existing components
- existing styles
- existing utilities
- existing lesson primitives
- existing interaction patterns

Only create a new reusable component when the requested content genuinely requires a capability that does not exist.

If a component could be useful across multiple courses, consider whether it belongs in the shared system rather than inside one course.

### Step 4 — Quality gate

Before declaring the course complete, verify:

- all lessons load
- navigation works
- previous/next behavior is consistent
- progress behavior is unchanged
- all required metadata exists
- examples are internally consistent
- exercises match what was taught
- answers do not depend on unexplained knowledge
- code examples are syntactically plausible
- links/assets resolve
- responsive behavior follows the existing system
- accessibility follows the existing system
- no global styles were unintentionally changed
- no existing course was modified unintentionally
- no duplicate runtime/component architecture was introduced

### Step 5 — Final diff discipline

Review the change as:

**Expected:**
- new course files
- course-specific assets
- course-specific data
- genuinely necessary shared-component additions

**Unexpected:**
- unrelated global CSS changes
- changes to routing
- changes to navigation
- changes to progress
- changes to existing courses
- duplicated components
- duplicated lesson engines
- new competing schemas

If unexpected changes appear, stop and resolve them before completion.

## Anti-drift rules

Never say:
- "I made the course more modern by redesigning..."
- "I improved the navigation..."
- "I created a new lesson structure..."
- "I changed the global styling to fit this topic..."
- "I added a few extra lessons to make the course feel fuller..."
- "I renumbered the lessons but left the old cross-references..."

unless the platform owner explicitly requested a platform-wide change.

A new topic does not justify a new UI.

A new teaching technique does not justify a new runtime.

A new course does not justify a new architecture.

An extension does not justify a redesign — it justifies new lessons that follow
the existing structure exactly.

## Output

When asked to create or extend a course, produce the course itself, not a long explanation of what you plan to do.

At the end, provide:
- course created or extended
- lessons created or changed
- major learning outcomes
- files/components added
- validation performed
- any deviations from the contract (normally none)


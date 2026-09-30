# 0001 — Git & Version Control course created

- **Date:** 2026-09-29
- **Milestone:** full 8-lesson course authored.

## What happened

Created the course skeleton with `tools/new-course.js`, then scaffolded eight
lessons with `tools/new-lesson.js`. All eight lesson files were then written in
full: each has a lede, three numbered sections, a predict widget, a diagram, a
trace, a fill-in-the-blanks exercise, a "win" summary, a "Do this next" list, a
primary-source note, and a four-question quiz with equal-length options.

The course follows a model-first arc:

1. What version control is for — a commit is a snapshot, not a diff.
2. Your first commit — repository, `git add`, `git commit`.
3. The three trees — working tree, staging area, repository.
4. Reading history — `git log`, `git show`, `git diff`, HEAD.
5. Branching — a branch is a movable pointer.
6. Merging and conflicts — fast-forward vs. merge commit, resolving conflicts.
7. Undoing things — restore, revert, reset, and the reflog safety net.
8. A workflow that works — feature branches, remotes, pull requests.

`lessons.js` carries the eight-entry manifest and a five-group glossary
(`basics`, `history`, `branching`, `recovery`, `together`) with 34 terms, each
pointing at the lesson that introduces it.

## What is next

- Register the course in `data/courses.js` (central integrator) and set
  `status: "live"`.
- Consider an optional `git stash` appendix (see NOTES.md open questions).

# Notes — Git & Version Control

Authoring decisions and open questions. Append as you go; never rewrite history.

## Decisions

- (2026-09-27) Model-first ordering. Lesson 1 teaches "a commit is a snapshot"
  before any command, because the snapshot-vs-diff distinction is the single
  idea that makes the rest of Git predictable.
- (2026-09-27) The three trees (working tree / staging area / repository) are
  introduced in Lesson 3 and then reused as the mental frame for every later
  lesson, including undo. `git status` is taught as "which tree is this change
  in?" rather than as a status report.
- (2026-09-27) Branching is taught as "a branch is a pointer", not as a copy of
  the project. This is what makes fast-forward merges obvious later.
- (2026-09-27) Undo is organised by *where the mistake lives* (working tree,
  staging area, or history) rather than by command name, so the learner picks
  the tool from the situation.
- (2026-09-27) `git switch` / `git restore` are used as the primary commands
  rather than the older overloaded `git checkout`, to keep the two jobs
  (moving branches vs. discarding edits) separate.
- (2026-09-27) Remotes and pull requests are compressed into Lesson 8. The
  course is about the local model; the remote is presented as "another copy of
  the same repository".

## Open questions

- Should a short optional appendix cover `git stash`? It is a common beginner
  need but sits awkwardly between the three-trees model and the workflow lesson.
- Is `git reset --hard` safe to show at all in a beginner course, even with the
  reflog safety net immediately after?

## Known gaps

- No coverage of interactive rebase, cherry-pick, bisect, submodules, hooks, or
  `.gitignore` authoring.
- No coverage of hosting-platform specifics (GitHub PR UI, protected branches,
  CI checks).
- No coverage of merge strategies beyond fast-forward and a two-parent merge
  commit (e.g. squash, rebase-merge).

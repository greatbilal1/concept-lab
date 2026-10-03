# Mission — Git & Version Control

## Why this course exists

Most beginners meet Git as a list of commands to memorise, and they stay afraid
of it: afraid of conflicts, afraid of losing work, afraid of the mysterious
"detached HEAD". This course replaces that fear with a model. Once you can see
Git as three trees and a set of movable pointers, every command becomes a
question about which tree you are moving data between — and mistakes stop being
scary, because almost nothing is unrecoverable.

## What the learner can do at the end

- Explain what a commit is (a snapshot plus metadata) and why that beats a folder
  of saved copies.
- Stage and commit changes deliberately, and read history with `git log`,
  `git show`, and `git diff`.
- Create, switch, merge, and delete branches, and resolve a merge conflict
  without panic.
- Choose the right undo command for a working-tree, staged, or committed mistake,
  and recover a bad reset with the reflog.
- Run the full feature-branch workflow: branch, commit, push, review, merge.

## What this course is NOT

- Not a Git command reference. It teaches the model first and the commands as
  consequences of it.
- Not a hosting-platform tutorial. GitHub/GitLab appear only as "a remote" and
  "a pull request"; their UIs are out of scope.
- Not an advanced-history course. Interactive rebase, submodules, hooks, and
  bisect are deliberately left out.

## Success looks like

The learner creates a branch, makes a mistake, and fixes it without asking for
help — and can say out loud which of the three trees the mistake was in. If they
reach for `git status` when confused instead of a search engine, the course
worked.

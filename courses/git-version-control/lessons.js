/* ============================================================
   Git & Version Control — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.

   Add a lesson by appending one entry here and creating the
   matching file in ./lessons/. Nothing else needs to change.
   (Or run: node tools/new-lesson.js git-version-control "<Lesson title>")

   Fields
     n     1-based lesson number (must be unique, in order)
     id    dash-case slug, matches the filename after the number
     file  path to the lesson, relative to THIS course folder
     title short title shown in nav and the map
     topic the grouping label used by the hub
     anim  legacy scene key (kept for the hub card art)
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "what-version-control-is-for", file: "lessons/0001-what-version-control-is-for.html", title: "What version control is for", topic: "The basics", anim: "GitWhy" },
  { n: 2, id: "your-first-commit", file: "lessons/0002-your-first-commit.html", title: "Your first commit", topic: "The basics", anim: "GitCommit" },
  { n: 3, id: "the-three-trees", file: "lessons/0003-the-three-trees.html", title: "The three trees", topic: "History & commits", anim: "GitTrees" },
  { n: 4, id: "reading-history", file: "lessons/0004-reading-history.html", title: "Reading history", topic: "History & commits", anim: "GitLog" },
  { n: 5, id: "branching", file: "lessons/0005-branching.html", title: "Branching", topic: "Branching & merging", anim: "GitBranch" },
  { n: 6, id: "merging-and-conflicts", file: "lessons/0006-merging-and-conflicts.html", title: "Merging and conflicts", topic: "Branching & merging", anim: "GitMerge" },
  { n: 7, id: "undoing-things", file: "lessons/0007-undoing-things.html", title: "Undoing things", topic: "Recovery", anim: "GitUndo" },
  { n: 8, id: "a-workflow-that-works", file: "lessons/0008-a-workflow-that-works.html", title: "A workflow that works", topic: "Putting it together", anim: "GitFlow" }
];

/* ============================================================
   Git & Version Control — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections. Each
   entry:
     term   the word or symbol being defined
     def    one-sentence definition (may contain <code> markup)
     lesson the lesson number that teaches it (1-based)
     tags   free-form tags, used by the site-wide glossary filter
   ============================================================ */
window.TeachGlossary = [
  {
    id: "basics",
    title: "The basics",
    terms: [
      { term: "Version control", def: "A system that records changes to files over time so you can read, compare, and restore any earlier state.", lesson: 1, tags: ["fundamentals"] },
      { term: "Commit", def: "A recorded snapshot of the whole project at one moment, together with its metadata and message.", lesson: 1, tags: ["fundamentals"] },
      { term: "Snapshot", def: "Git's model of a commit: a complete picture of all tracked files, not a list of changes.", lesson: 1, tags: ["fundamentals"] },
      { term: "Commit message", def: "The human-readable line explaining what a commit changed and why, written in the imperative mood.", lesson: 1, tags: ["fundamentals"] },
      { term: "Repository", def: "A folder that Git tracks, identified by the hidden <code>.git</code> directory inside it.", lesson: 2, tags: ["fundamentals"] },
      { term: "git init", def: "The command that turns an ordinary folder into a repository by creating the <code>.git</code> directory.", lesson: 2, tags: ["commands"] },
      { term: "git add", def: "The command that moves changes from the working tree into the staging area.", lesson: 2, tags: ["commands"] },
      { term: "git commit", def: "The command that records the staged changes as a new snapshot in the repository.", lesson: 2, tags: ["commands"] }
    ]
  },
  {
    id: "history",
    title: "History &amp; commits",
    terms: [
      { term: "Working tree", def: "The set of files on disk that you actually edit in your editor.", lesson: 3, tags: ["model"] },
      { term: "Staging area", def: "The holding pen of changes chosen for the next commit; also called the index.", lesson: 3, tags: ["model"] },
      { term: "Index", def: "Another name for the staging area — the middle tree between your files and the history.", lesson: 3, tags: ["model"] },
      { term: "Three trees", def: "The working tree, the staging area, and the repository: the three places a change can live.", lesson: 3, tags: ["model"] },
      { term: "git status", def: "The command that reports which tree each of your changes currently lives in.", lesson: 3, tags: ["commands"] },
      { term: "git diff", def: "The command that compares two states; by default the working tree against the index.", lesson: 3, tags: ["commands"] },
      { term: "git log", def: "The command that prints the commit history, newest first.", lesson: 4, tags: ["commands"] },
      { term: "git show", def: "The command that expands a single commit, printing its metadata and its exact changes.", lesson: 4, tags: ["commands"] },
      { term: "Commit id", def: "The unique hash derived from a commit's contents, used to refer to that snapshot.", lesson: 4, tags: ["model"] },
      { term: "HEAD", def: "A name for the commit you are currently on — normally the tip of your current branch.", lesson: 4, tags: ["model"] }
    ]
  },
  {
    id: "branching",
    title: "Branching &amp; merging",
    terms: [
      { term: "Branch", def: "A movable pointer to a commit; creating one copies no files.", lesson: 5, tags: ["branching"] },
      { term: "git switch", def: "The command that moves you onto another branch; <code>-c</code> creates one first.", lesson: 5, tags: ["commands"] },
      { term: "git branch", def: "The command that lists your branches and marks the one you are on.", lesson: 5, tags: ["commands"] },
      { term: "Merge", def: "The act of combining the commits of one branch into another.", lesson: 6, tags: ["branching"] },
      { term: "Fast-forward", def: "A merge that only slides the branch pointer forward because the target had not moved.", lesson: 6, tags: ["branching"] },
      { term: "Merge commit", def: "A commit with two parents that joins two lines of history together.", lesson: 6, tags: ["branching"] },
      { term: "Merge conflict", def: "The state Git enters when both branches changed the same lines and a human must choose.", lesson: 6, tags: ["branching"] }
    ]
  },
  {
    id: "recovery",
    title: "Recovery",
    terms: [
      { term: "git restore", def: "The command that discards working-tree edits, or with <code>--staged</code> unstages a file.", lesson: 7, tags: ["commands"] },
      { term: "git revert", def: "The command that undoes an earlier commit by adding a new commit, preserving history.", lesson: 7, tags: ["commands"] },
      { term: "git reset", def: "The command that moves the branch pointer backwards, rewriting history.", lesson: 7, tags: ["commands"] },
      { term: "Reflog", def: "Git's record of everywhere <code>HEAD</code> has been, used to recover commits you reset away.", lesson: 7, tags: ["recovery"] }
    ]
  },
  {
    id: "together",
    title: "Putting it together",
    terms: [
      { term: "Feature branch", def: "A short-lived branch created to develop one change in isolation from the main line.", lesson: 8, tags: ["workflow"] },
      { term: "Remote", def: "Another copy of the same repository, hosted somewhere your team can reach.", lesson: 8, tags: ["workflow"] },
      { term: "git push", def: "The command that sends your local commits to a remote repository.", lesson: 8, tags: ["commands"] },
      { term: "git pull", def: "The command that fetches commits from a remote and integrates them into your branch.", lesson: 8, tags: ["commands"] },
      { term: "Pull request", def: "A request to merge one branch into another, wrapped in a place to review and discuss it.", lesson: 8, tags: ["workflow"] }
    ]
  }
];

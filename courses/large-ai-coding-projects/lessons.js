/* ============================================================
   Managing Large AI Coding Projects — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "danger-of-vague-prompts-large-projects", file: "lessons/0001-danger-of-vague-prompts-large-projects.html", title: "The Danger of Vague Prompts on Large Projects", topic: "Large Projects", anim: "Generic" },
  { n: 2, id: "hierarchical-planning-milestones", file: "lessons/0002-hierarchical-planning-milestones.html", title: "Hierarchical Planning: Milestones, Tasks, and Steps", topic: "Hierarchical Planning", anim: "Generic" },
  { n: 3, id: "working-trees-stashes-branching", file: "lessons/0003-working-trees-stashes-branching.html", title: "Managing Working Trees, Stashes, and Branching Strategies", topic: "Git Branching", anim: "Generic" },
  { n: 4, id: "checkpoint-driven-development", file: "lessons/0004-checkpoint-driven-development.html", title: "Checkpoint-Driven Development: Save Points and Reverts", topic: "Checkpoints", anim: "Generic" },
  { n: 5, id: "managing-context-resets", file: "lessons/0005-managing-context-resets.html", title: "Managing Context Resets Across Long Multi-Day Tasks", topic: "Context Resets", anim: "Generic" },
  { n: 6, id: "parallel-agent-workflows", file: "lessons/0006-parallel-agent-workflows.html", title: "Parallel Agent Workflows and Work Breakdown", topic: "Parallel Workflows", anim: "Generic" },
  { n: 7, id: "ci-as-source-of-truth", file: "lessons/0007-ci-as-source-of-truth.html", title: "Continuous Integration as the Source of Truth", topic: "CI Truth", anim: "Generic" },
  { n: 8, id: "when-to-take-the-wheel", file: "lessons/0008-when-to-take-the-wheel.html", title: "Knowing When to Take the Wheel and Code by Hand", topic: "Human Craft", anim: "Generic" }
];

/* ============================================================
   Managing Large AI Coding Projects — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "planning", title: "Planning & Scale",
    terms: [
      { term: "Hierarchical Planning", def: "Structuring software projects across Strategic Milestones, Tactical Tasks, and Operational Steps.", lesson: 2, tags: ["planning","scale"] },
      { term: "Milestone-Driven Execution", def: "Dividing ambitious projects into verified phases to prevent compounding probabilistic error.", lesson: 1, tags: ["methodology","scale"] },
      { term: "Compounding Error", def: "The exponential decrease in overall success probability when many unverified AI steps are chained together.", lesson: 1, tags: ["ai","math"] }
    ]
  },
  {
    id: "git", title: "Git & Isolation",
    terms: [
      { term: "Git Worktree", def: "A feature allowing multiple linked working directories attached to the same repository for parallel checkouts.", lesson: 3, tags: ["git","tooling"] },
      { term: "Checkpoint Development", def: "Committing a known good state before risky agent tasks so you can pull the ripcord and revert instantly.", lesson: 4, tags: ["git","safety"] },
      { term: "Ripcord Revert", def: "Using git reset --hard HEAD to instantly abandon a confused agent exploration and restore a clean baseline.", lesson: 4, tags: ["git","workflow"] }
    ]
  },
  {
    id: "lifecycle", title: "Lifecycle & State",
    terms: [
      { term: "Context Reset", def: "Closing a saturated agent session and starting a fresh session with a distilled handoff summary.", lesson: 5, tags: ["context","workflow"] },
      { term: "Parallel Agent Workflow", def: "Running multiple agents simultaneously on decoupled files and branches building toward shared contracts.", lesson: 6, tags: ["agents","concurrency"] },
      { term: "Pre-Committed Contract", def: "An agreed-upon schema or interface committed to the base branch before dispatching parallel agents.", lesson: 6, tags: ["contracts","architecture"] }
    ]
  },
  {
    id: "governance", title: "Truth & Craftsmanship",
    terms: [
      { term: "Source of Truth", def: "The authoritative system (Continuous Integration) whose binary verdicts determine whether code is ready to ship.", lesson: 7, tags: ["ci","quality"] },
      { term: "Prompt Stubbornness", def: "The anti-pattern of spending hours repeatedly re-prompting an agent instead of writing the fix by hand.", lesson: 8, tags: ["workflow","craft"] },
      { term: "3-Turn Rule", def: "A heuristic mandating that developers take manual control if an agent fails to resolve an issue within 3 turns.", lesson: 8, tags: ["workflow","heuristics"] }
    ]
  }
];

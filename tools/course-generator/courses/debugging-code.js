"use strict";

module.exports = {
  id: "debugging-code",
  title: "Debugging Code",
  num: 16,
  emoji: "🔍",
  desc: "A systematic method for finding bugs: reproduce, isolate, hypothesise, verify — instead of guessing.",
  mission: `# Mission — Debugging Code

## Why this course exists

Most developers begin debugging with frantic guessing: editing random lines of code, printing print statements blindly, and hoping the problem disappears. This creates confusion and fragile fixes. This course teaches the scientific method of debugging: treating every bug as an unexplained natural phenomenon that requires reproduction, isolation, hypothesis formation, and verification.

## What the learner can do at the end

- Reproduce defects consistently with minimal, reproducible examples.
- Narrow the search space rapidly using binary search techniques and git bisect.
- Read tracebacks from the inside out to identify the exact origin of bad state.
- Set intentional breakpoints and inspect execution state before corruption occurs.
- Formulate testable hypotheses that distinguish root causes from visible symptoms.

## What this course is NOT

- Not a syntax tutorial. It assumes familiarity with Python or JavaScript programming.
- Not a guide to a single vendor IDE. Principles apply to VS Code, command-line debuggers, and browser developer tools alike.

## Success looks like

When confronted with a failing test or user report, the learner resists the urge to change code immediately. Instead, they first construct a reproduction script and isolate the failing boundary in under ten minutes.
`,
  notes: `# Notes — Debugging Code

## Decisions
- Group lessons into four progressive themes: Mindset, Isolation, Tools, and Prevention.
- Standardise on 8 tight, high-signal lessons.
`,
  resources: `# Resources — Debugging Code

## Knowledge (primary sources)
- *Why Programs Fail: A Guide to Systematic Debugging* by Andreas Zeller — The definitive text on delta debugging and scientific fault isolation.
- *The Practice of Programming* by Brian W. Kernighan and Rob Pike — Chapter 5 covers debugging strategies and defensive programming.
- *Debugging: The 9 Indispensable Rules for Finding Even the Most Elusive Software and Hardware Problems* by David J. Agans.

## Wisdom
- The quickest way to solve a bug is to make it trivial to trigger on demand.
`,
  cheatsheetSections: [
    {
      title: "Reproduction & Isolation",
      label: "Minimize the reproduction case",
      code: `# 1. Strip external dependencies and network calls
# 2. Find the smallest input that triggers the failure
python -c "from app import calc; print(calc(-1))"`,
      lessonN: 2,
      lessonSlug: "making-bugs-reproducible",
      lessonTitle: "Making bugs reproducible"
    },
    {
      title: "Bisecting Search",
      label: "Find the introducing commit",
      code: `git bisect start
git bisect bad                 # current commit fails
git bisect good v1.4.0         # known good release
git bisect run pytest test_bug.py`,
      lessonN: 4,
      lessonSlug: "binary-search-and-bisecting",
      lessonTitle: "Binary search and bisecting"
    },
    {
      title: "Stack Inspection",
      label: "Reading tracebacks and frame state",
      code: `import pdb; pdb.set_trace()
# Navigation commands:
# n (next line)
# s (step into call)
# c (continue execution)
# p variable_name (print value)`,
      lessonN: 6,
      lessonSlug: "using-breakpoints-and-inspectors",
      lessonTitle: "Using breakpoints and inspectors"
    },
    {
      title: "Verification & Regression",
      label: "Preventing recurrence",
      code: `def test_negative_quantity_raises_value_error():
    with pytest.raises(ValueError):
        calculate_total(price=10, quantity=-1)`,
      lessonN: 8,
      lessonSlug: "fixing-the-cause-not-the-symptom",
      lessonTitle: "Fixing the cause, not the symptom"
    }
  ],
  glossaryGroups: [
    {
      id: "mindset",
      title: "The Debugging Mindset",
      terms: [
        { term: "Scientific debugging", def: "A structured process of observing a defect, proposing a falsifiable hypothesis, and testing it with experiments.", lesson: 1, tags: ["method", "mindset"] },
        { term: "Defect", def: "An error in source code logic or data representation that can lead to incorrect state.", lesson: 1, tags: ["fundamentals"] },
        { term: "Infection", def: "Corrupted program state resulting from a defect during program execution.", lesson: 1, tags: ["state"] },
        { term: "Failure", def: "The visible incorrect behavior or crash that occurs when an infection reaches output.", lesson: 1, tags: ["runtime"] }
      ]
    },
    {
      id: "isolation",
      title: "Reproduction & Search",
      terms: [
        { term: "Minimal reproduction", def: "The smallest script and simplest input guaranteed to trigger a software failure.", lesson: 2, tags: ["testing", "technique"] },
        { term: "Delta debugging", def: "Systematically halving inputs or configurations to find the minimal difference causing a failure.", lesson: 3, tags: ["strategy"] },
        { term: "Git bisect", def: "A tool using binary search across commit history to pinpoint which change introduced a bug.", lesson: 4, tags: ["tools", "git"] },
        { term: "Flaky bug", def: "A defect whose symptoms appear intermittently due to timing, concurrency, or uninitialised state.", lesson: 2, tags: ["defects"] }
      ]
    },
    {
      id: "inspection",
      title: "Observation & State",
      terms: [
        { term: "Traceback", def: "A stack report showing active function calls at the moment an unhandled exception occurred.", lesson: 5, tags: ["errors", "runtime"] },
        { term: "Call stack frame", def: "A memory record holding the local variables and instruction pointer of one function invocation.", lesson: 5, tags: ["runtime"] },
        { term: "Breakpoint", def: "An intentional pause marker placed in code that halts execution to allow state inspection.", lesson: 6, tags: ["debugger", "tools"] },
        { term: "Watchpoint", def: "A debugger trigger that halts execution whenever a specific memory address or variable changes value.", lesson: 6, tags: ["debugger"] }
      ]
    },
    {
      id: "resolution",
      title: "Root Cause & Prevention",
      terms: [
        { term: "Root cause", def: "The underlying fundamental flaw in design or logic that originated the faulty behavior.", lesson: 7, tags: ["analysis"] },
        { term: "Symptom masking", def: "Modifying code to hide visible errors without addressing the faulty internal condition.", lesson: 8, tags: ["anti-pattern"] },
        { term: "Regression test", def: "An automated test asserting that an identified defect remains fixed in future releases.", lesson: 8, tags: ["testing", "prevention"] },
        { term: "Post-mortem", def: "A blameless engineering review documenting how a defect happened and how to prevent similar issues.", lesson: 8, tags: ["process"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "the-scientific-method-of-debugging",
      title: "The scientific method of debugging",
      topic: "The Debugging Mindset",
      anim: "Pulse",
      lede: "Stop guessing and start observing. Software behaves deterministically; this lesson introduces the loop of observation, hypothesis, and experiment.",
      winShort: "Distinguish defect, infection, and failure in any bug report",
      missionLink: "The foundation of all systematic diagnostic craft",
      sec1: {
        title: "The defect-infection-failure chain",
        content: `<p>A bug is not a single point in time. It is a chain of three distinct events. First, a human writes a <b>defect</b> in the code. Second, when executed with certain inputs, the defect causes an internal <b>infection</b> of variable state. Third, that infected state eventually surfaces as an observable <b>failure</b>.</p><p>When users file a bug report, they are reporting the final failure. If you try to fix the failure where it appears, you will likely mask the symptom rather than cure the infection.</p>`,
        keyIdea: "A defect creates an infection in state, which later explodes as a visible failure."
      },
      predict: {
        q: "A program prints 'NaN' when displaying an invoice total. What is this visible string?",
        a: ["The original code defect", "The program failure", "The compiler error", "The variable infection"],
        c: 1,
        why: "The printed string 'NaN' is the outward, observable failure resulting from corrupted earlier state."
      },
      sec2: {
        title: "The diagnostic cycle",
        content: `<p>Rather than randomly changing lines of code, systematic engineers follow an empirical loop: observe the failure, formulate a hypothesis about what state is infected, devise an experiment to test that hypothesis, and observe the result.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Observe", lines: ["note the exact failure", "record inputs and outputs"] },
          { title: "Hypothesise", lines: ["propose cause of infection", "predict outcome of test"] },
          { title: "Experiment", lines: ["run targeted check", "confirm or refute idea"] },
          { title: "Remediate", lines: ["fix the defect at source", "add regression check"] }
        ]
      },
      sec3: {
        title: "Traces of infected state",
        content: `<p>Walk through an example of a discount calculation where a defect in price normalization corrupts the running balance.</p>`,
      },
      trace: {
        code: [
          "price = 100",
          "discount_pct = 20",
          "discount = price * discount_pct  # bug: forgot / 100",
          "total = price - discount"
        ],
        steps: [
          { line: 0, vars: { price: "100" } },
          { line: 1, vars: { discount_pct: "20" } },
          { line: 2, vars: { discount: "2000 (infected)" } },
          { line: 3, vars: { total: "-1900 (failure)" } }
        ]
      },
      practiceIntro: "Test your understanding of the defect chain before testing your knowledge.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The flaw in source code is the <0>.",
          "The corrupted internal program state is the <1>.",
          "The external observable misbehavior is the <2>."
        ],
        blanks: [
          { a: ["defect", "bug"], why: "Defect is the error written in the source code." },
          { a: ["infection"], why: "Infection is the corrupted internal variable state." },
          { a: ["failure"], why: "Failure is the visible manifestation of the bug." }
        ]
      },
      win: "You can articulate the complete chain from source defect to state infection to final failure, keeping your investigation focused on the true root cause.",
      nextTasks: [
        "Take a recent bug in your code and identify where the defect became an infection.",
        "Write down the three stages on paper before touching the editor on your next issue.",
        "Explain to a colleague why treating the failure location rarely fixes the bug."
      ],
      primarySource: "Read Chapter 1 of *Why Programs Fail* by Andreas Zeller for a rigorous mathematical treatment of state infection.",
      quiz: [
        {
          q: "What is the primary danger of fixing code at the point of failure?",
          a: [
            "It usually masks symptoms without curing root cause",
            "It automatically breaks the project compilation immediately",
            "It permanently deletes git commit history forever",
            "It causes database engines to reject connections"
          ],
          c: 0,
          why: "Touching the failure point often just silences the error while leaving bad data in the system."
        },
        {
          q: "What defines a scientific debugging hypothesis?",
          a: [
            "It is a hunch that requires no verification",
            "It makes testable predictions that can be falsified",
            "It is accepted by the majority of team members",
            "It always blames external network infrastructure"
          ],
          c: 1,
          why: "A useful hypothesis must make a concrete prediction that a targeted test can disprove."
        },
        {
          q: "When does an infection become a failure?",
          a: [
            "When the compiler builds binary executable code",
            "When corrupted state impacts external observable output",
            "Immediately upon typing an error into the editor",
            "Only after the program terminates completely"
          ],
          c: 1,
          why: "An infection remains latent until it affects output, causes an exception, or corrupts persistence."
        },
        {
          q: "What should you do before altering code to fix a bug?",
          a: [
            "Deploy the code directly into production systems",
            "Formulate and test a hypothesis about the defect",
            "Rewrite the entire application in another language",
            "Delete the integration test suite completely"
          ],
          c: 1,
          why: "Systematic debugging requires verifying the cause before committing any code alterations."
        }
      ]
    },
    {
      n: 2,
      id: "making-bugs-reproducible",
      title: "Making bugs reproducible",
      topic: "The Debugging Mindset",
      anim: "Pulse",
      lede: "If you cannot trigger a bug at will, you cannot know if you have fixed it. Learn how to craft a deterministic reproduction harness.",
      winShort: "Convert an intermittent bug report into a one-command reproduction script",
      missionLink: "Eliminates guesswork by establishing reliable baselines",
      sec1: {
        title: "The rule of determinism",
        content: `<p>A bug that happens 'sometimes' is simply a bug whose trigger conditions you do not yet fully understand. Computers are deterministic state machines. Unpredictability enters through unseeded randomness, wall-clock time, system concurrency, or uninitialised memory.</p><p>Your first job as a debugger is never to fix the bug. Your first job is to build a test case that makes the bug occur every single time on command.</p>`,
        keyIdea: "A bug you cannot reliably reproduce is a bug you cannot reliably fix."
      },
      predict: {
        q: "Why are bugs involving timestamps often difficult to reproduce?",
        a: [
          "They depend on changing dynamic environmental inputs",
          "They cannot be executed by modern CPU architectures",
          "They automatically delete operating system log files",
          "They cause hard drives to lose electrical power"
        ],
        c: 0,
        why: "Wall-clock time changes on every run unless explicitly mocked or fixed in your test harness."
      },
      sec2: {
        title: "Pruning the reproduction script",
        content: `<p>Start with the full complex environment where the bug occurred. Strip away unrelated packages, unnecessary database queries, and extra UI layers until only the minimal failing kernel remains.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Full Application", lines: ["UI, database, auth", "hundreds of moving parts"] },
          { title: "Extracted Logic", lines: ["isolated calculation", "mocked inputs"] },
          { title: "Minimal Harness", lines: ["three-line script", "100% deterministic failure"] }
        ]
      },
      sec3: {
        title: "Mocking external non-determinism",
        content: `<p>Observe how replacing a live date call with an explicit value makes an end-of-month discount bug 100% reproducible.</p>`,
      },
      trace: {
        code: [
          "def is_leap_year(year): return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)",
          "test_date = '2024-02-29'",
          "year = int(test_date.split('-')[0])",
          "assert is_leap_year(year) == True"
        ],
        steps: [
          { line: 0, vars: { is_leap_year: "function" } },
          { line: 1, vars: { test_date: "'2024-02-29'" } },
          { line: 2, vars: { year: "2024" } },
          { line: 3, vars: { result: "True (deterministic)" } }
        ]
      },
      practiceIntro: "Review the components of reproducible bug harnesses.",
      fill: {
        label: "From memory — fill in the missing terms",
        lines: [
          "A bug that only appears intermittently is called <0>.",
          "Replacing dynamic inputs with fixed constants gives <1>.",
          "A self-contained code snippet that triggers a bug is a minimal <2>."
        ],
        blanks: [
          { a: ["flaky", "heisenbug"], why: "Flaky bugs occur intermittently due to uncontrolled variables." },
          { a: ["determinism"], why: "Determinism ensures the exact same outcome every execution." },
          { a: ["reproduction", "repro"], why: "A minimal reproduction isolates only the failure trigger." }
        ]
      },
      win: "You can strip away noise and build a standalone test script that triggers any defect 100% of the time.",
      nextTasks: [
        "Take a bug report from your issue tracker and extract it into a 5-line script.",
        "Mock out system time or randomness in a test that previously failed intermittently.",
        "Verify that your reproduction script fails before making any code changes."
      ],
      primarySource: "David J. Agans, *Debugging: The 9 Indispensable Rules* — Rule 2: 'Make It Fail'.",
      quiz: [
        {
          q: "What is the primary benefit of creating a minimal reproduction script?",
          a: [
            "It isolates the exact parameters required to trigger failure",
            "It increases application download size for end users",
            "It bypasses security authentication checks completely",
            "It eliminates the need for software version control"
          ],
          c: 0,
          why: "A minimal script proves which variables are necessary and sufficient to cause the bug."
        },
        {
          q: "Which factor is a common cause of intermittent bugs?",
          a: [
            "Purely functional mathematical calculations",
            "Unsynchronized concurrent threads accessing shared memory",
            "Static HTML layout text inside documents",
            "Strict indentation in Python source code files"
          ],
          c: 1,
          why: "Concurrency race conditions depend on thread scheduling and timing variations."
        },
        {
          q: "When is a bug reproduction harness considered complete?",
          a: [
            "When the bug only fails on developer workstations",
            "When it runs quickly and fails deterministically every time",
            "When it requires human user interaction to trigger",
            "When all source code files have been refactored"
          ],
          c: 1,
          why: "Speed and 100% reliability make the reproduction test an effective diagnostic tool."
        },
        {
          q: "What should you avoid doing while building a reproduction script?",
          a: [
            "Removing unrelated functional code from the test",
            "Fixing the bug prematurely before reproduction succeeds",
            "Logging intermediate variables during execution runs",
            "Documenting expected versus actual return values"
          ],
          c: 1,
          why: "Fixing code before confirming reproduction leaves you unable to prove what resolved the problem."
        }
      ]
    },
    {
      n: 3,
      id: "isolating-the-problem-space",
      title: "Isolating the problem space",
      topic: "Reproduction & Isolation",
      anim: "Pulse",
      lede: "Do not search everywhere. Halve your search space repeatedly to narrow millions of lines of code down to the single offending statement.",
      winShort: "Narrow a bug down to a single module using binary isolation",
      missionLink: "Prevents cognitive overload during large codebase investigations",
      sec1: {
        title: "The principle of bisection",
        content: `<p>When faced with a system containing 10,000 lines of code across 50 files, reading every line is impossible. Instead, divide the execution path in half. Insert a check at the midpoint. Is the state clean or infected?</p><p>If clean, the defect is in the second half. If infected, the defect occurred earlier. Repeating this cut ten times isolates the exact location in $O(\\log n)$ steps.</p>`,
        keyIdea: "Repeatedly halving the search space locates defects exponentially faster than sequential reading."
      },
      predict: {
        q: "If a program has 1,024 steps between input and failure, how many bisection checks are needed?",
        a: ["1,024 checks", "512 checks", "10 checks", "100 checks"],
        c: 2,
        why: "Because 2 to the power of 10 equals 1024, binary search requires only 10 cuts."
      },
      sec2: {
        title: "The bisection boundary",
        content: `<p>Visualise how slicing a pipeline in half isolates whether a parser, transformer, or serializer corrupted the data payload.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Input (Clean)", lines: ["raw user string", "correct format"] },
          { title: "Midpoint Probe", lines: ["check intermediate state", "is state corrupted?"] },
          { title: "Output (Corrupt)", lines: ["failure observed", "crash or bad output"] }
        ]
      },
      sec3: {
        title: "Tracing through pipeline checkpoints",
        content: `<p>Walk through an execution pipeline where bad data is caught at step 2, proving step 1 introduced the infection.</p>`,
      },
      trace: {
        code: [
          "raw = '{\"count\": \"5\"}'",
          "parsed = json_loads(raw)  # step 1: type is str not int",
          "assert isinstance(parsed['count'], int), 'bad type' # midpoint check",
          "total = parsed['count'] * 2"
        ],
        steps: [
          { line: 0, vars: { raw: "'{\"count\": \"5\"}'" } },
          { line: 1, vars: { parsed: "{'count': '5'}" } },
          { line: 2, vars: { assertion: "AssertionError: bad type" } }
        ]
      },
      practiceIntro: "Confirm your understanding of the bisection principle.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Dividing the search space in half repeatedly is <0> search.",
          "An assertion placed in the middle of a pipeline is a <1>.",
          "Binary isolation reduces search complexity to O(<2>)."
        ],
        blanks: [
          { a: ["binary", "bisection"], why: "Binary search cuts the search domain in half at each step." },
          { a: ["probe", "checkpoint"], why: "A probe checks state validity midway through execution." },
          { a: ["log n", "log(n)"], why: "Logarithmic time means doubling size adds only one probe." }
        ]
      },
      win: "You can partition any multi-stage system into halves and pinpoint the exact stage responsible for faulty behavior.",
      nextTasks: [
        "Place an assertion halfway through a complex data processing script.",
        "Determine whether an existing bug is upstream or downstream of your probe.",
        "Repeat the split until you have isolated the offending function."
      ],
      primarySource: "Kernighan & Pike, *The Practice of Programming*, Chapter 5: 'Divide and Conquer'.",
      quiz: [
        {
          q: "What makes binary isolation superior to reading code from top to bottom?",
          a: [
            "It guarantees that all future bugs are automatically resolved",
            "It cuts the remaining search space in half with every check",
            "It runs entirely inside the computer compiler without human thought",
            "It prevents developers from needing to write automated tests"
          ],
          c: 1,
          why: "Halving the search space isolates the problem exponentially faster than linear scanning."
        },
        {
          q: "If an assertion midway through a pipeline passes, where is the defect?",
          a: [
            "It must be located before the assertion point",
            "It must be located after the assertion point",
            "The program does not have any defects anywhere",
            "The operating system kernel must be reinstalled"
          ],
          c: 1,
          why: "A clean state at the midpoint proves the error occurred in the subsequent steps."
        },
        {
          q: "What is the primary requirement for binary isolation to succeed?",
          a: [
            "You must be able to verify whether state is valid at the cut point",
            "The code must be written in a functional language",
            "The entire system must run in a single CPU thread",
            "The project must have zero external library dependencies"
          ],
          c: 0,
          why: "You cannot eliminate half the search space unless you can verify state health at the boundary."
        },
        {
          q: "How many checks would be required to find a defect among 64 possible functions?",
          a: [
            "Exactly 6 checks",
            "Exactly 64 checks",
            "Exactly 32 checks",
            "Only 1 check"
          ],
          c: 0,
          why: "2 to the 6th power is 64, so binary search requires exactly 6 checks."
        }
      ]
    },
    {
      n: 4,
      id: "binary-search-and-git-bisect",
      title: "Binary search and bisecting",
      topic: "Reproduction & Isolation",
      anim: "Pulse",
      lede: "A feature worked yesterday and is broken today. Use git bisect to automate binary search across commit history and find the culprit in seconds.",
      winShort: "Use git bisect to isolate the exact commit that introduced a defect",
      missionLink: "Applies algorithmic isolation across historical repository timelines",
      sec1: {
        title: "Automating history searches",
        content: `<p>When software regresses, the bug was introduced by a specific commit between a known good release and the current broken HEAD. Instead of checking out commits at random, Git provides <code>git bisect</code> to automate binary search.</p><p>You tell Git the last known good commit and the first known bad one. Git checks out the midpoint commit, you test it, and Git repeats the process until the breaking commit is identified.</p>`,
        keyIdea: "Git bisect turns months of commit history into a logarithmic search for the breaking change."
      },
      predict: {
        q: "Across a span of 128 commits, how many test runs does git bisect need to find the breaking commit?",
        a: ["128 tests", "64 tests", "7 tests", "1 test"],
        c: 2,
        why: "Two to the power of 7 equals 128, so binary search over 128 commits takes at most 7 steps."
      },
      sec2: {
        title: "The bisect workflow",
        content: `<p>The bisect lifecycle moves from initialisation, through marking good and bad endpoints, to automated or manual midpoint evaluation.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Start", lines: ["git bisect start", "mark good and bad"] },
          { title: "Midpoint", lines: ["git checks out commit", "run test script"] },
          { title: "Verdict", lines: ["mark good or bad", "Git narrows interval"] },
          { title: "Culprit Found", lines: ["exact commit identified", "git bisect reset"] }
        ]
      },
      sec3: {
        title: "Automating with git bisect run",
        content: `<p>Trace how a test script exiting with code 0 or 1 allows git bisect to run completely unattended.</p>`,
      },
      trace: {
        code: [
          "git bisect start",
          "git bisect bad HEAD",
          "git bisect good v2.0.0",
          "git bisect run pytest test_regression.py"
        ],
        steps: [
          { line: 0, vars: { bisect: "active" } },
          { line: 1, vars: { bad: "HEAD" } },
          { line: 2, vars: { good: "v2.0.0", remaining: "128 commits" } },
          { line: 3, vars: { status: "running binary search automatically" } }
        ]
      },
      practiceIntro: "Recall the key commands and exit code conventions for git bisect.",
      fill: {
        label: "From memory — fill in the missing terms",
        lines: [
          "To begin the search process, execute git bisect <0>.",
          "An exit code of 0 informs git bisect that the commit is <1>.",
          "An exit code between 1 and 127 marks the commit as <2>."
        ],
        blanks: [
          { a: ["start"], why: "git bisect start initializes the bisect state machine." },
          { a: ["good"], why: "Exit code 0 indicates success, marking the commit as good." },
          { a: ["bad"], why: "Non-zero exit codes signal test failure, marking the commit as bad." }
        ]
      },
      win: "You can run git bisect manually or with automated test scripts to discover regressions across hundreds of commits in seconds.",
      nextTasks: [
        "Create a test repo with 10 commits, introduce an error in commit 6, and find it with bisect.",
        "Write a one-line test command suitable for git bisect run.",
        "Practice running git bisect reset to return your working directory to normal."
      ],
      primarySource: "Official Git Documentation: *git-bisect(1) Manual Page* (git-scm.com/docs/git-bisect).",
      quiz: [
        {
          q: "What does git bisect do when you run git bisect bad?",
          a: [
            "Deletes all bad commits from repository history permanently",
            "Eliminates the current commit and all newer commits from the search space",
            "Marks the current commit as failing and checks out the next midpoint",
            "Uploads the failed test output to GitHub issue tracker"
          ],
          c: 2,
          why: "It flags the commit as failing and advances the binary search to the next candidate."
        },
        {
          q: "What script exit code tells git bisect that a commit is clean?",
          a: [
            "Exit code 0",
            "Exit code 1",
            "Exit code 128",
            "Exit code 255"
          ],
          c: 0,
          why: "Standard POSIX convention: exit code 0 indicates success (good commit)."
        },
        {
          q: "Why is git bisect run so valuable in continuous integration?",
          a: [
            "It runs the binary search fully automatically without human intervention",
            "It automatically rewrites bad commits without developer review",
            "It generates mock data for missing production database tables",
            "It prevents developers from making commits on main branches"
          ],
          c: 0,
          why: "Automating the test command allows git bisect to pinpoint regressions completely unattended."
        },
        {
          q: "What command must you run when git bisect finishes its search?",
          a: [
            "git bisect clean",
            "git bisect reset",
            "git commit --amend",
            "git push origin main"
          ],
          c: 1,
          why: "git bisect reset clears the bisect state and returns HEAD to your original branch."
        }
      ]
    },
    {
      n: 5,
      id: "reading-tracebacks-and-call-stacks",
      title: "Reading tracebacks and call stacks",
      topic: "Observation Tools",
      anim: "Pulse",
      lede: "A crash traceback is not an obstacle — it is an eyewitness report. Learn to read tracebacks from the inside out to see the chain of execution.",
      winShort: "Extract the exact call chain, failed line, and exception type from any stack trace",
      missionLink: "Enables immediate orientation when encountering unhandled failures",
      sec1: {
        title: "The inverted pyramid of frames",
        content: `<p>A traceback shows the call stack at the moment an exception occurred. In Python, the earliest caller is at the top, and the crashing line is at the bottom. In other languages (like Java or Go), this order is often reversed.</p><p>Always locate two points first: the bottom line (the exception type and message) and the innermost frame of <i>your</i> application code before execution passed into external third-party libraries.</p>`,
        keyIdea: "The bottom line gives the crash symptom; the nearest application frame gives the point of infection."
      },
      predict: {
        q: "In a 20-frame traceback where frame 20 is inside the standard library, where is the most useful line to inspect?",
        a: [
          "Frame 1 at the root of the program",
          "The deepest frame inside your own application code",
          "Frame 20 inside the standard library internal logic",
          "A random frame chosen from the middle of the list"
        ],
        c: 1,
        why: "Standard library code rarely contains the defect; your code called it with invalid arguments."
      },
      sec2: {
        title: "Structure of a stack frame",
        content: `<p>Each stack frame represents an active function call containing local variable bindings, parameter values, and an instruction pointer.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Frame 1: main()", lines: ["args: sys.argv", "calls load_config()"] },
          { title: "Frame 2: load_config()", lines: ["path: '/etc/app.json'", "calls json.loads()"] },
          { title: "Frame 3: json.loads()", lines: ["corrupt input string", "raises JSONDecodeError"] }
        ]
      },
      sec3: {
        title: "Tracing through stack frames",
        content: `<p>Observe how each function invocation pushes a new frame onto the stack, and how unhandled exceptions bubble back up.</p>`,
      },
      trace: {
        code: [
          "def parse_age(s): return int(s)",
          "def process_user(u): return parse_age(u['age'])",
          "user = {'name': 'Ada', 'age': 'twenty'}",
          "process_user(user)"
        ],
        steps: [
          { line: 0, vars: { parse_age: "function" } },
          { line: 1, vars: { process_user: "function" } },
          { line: 2, vars: { user: "{'name': 'Ada', 'age': 'twenty'}" } },
          { line: 3, vars: { crash: "ValueError: invalid literal for int() with base 10: 'twenty'" } }
        ]
      },
      practiceIntro: "Test your ability to interpret stack reports accurately.",
      fill: {
        label: "From memory — fill in the missing terms",
        lines: [
          "A report showing active function calls during an error is a <0>.",
          "Each individual function execution record on the stack is a <1>.",
          "In Python, the deepest crashing line is displayed at the <2>."
        ],
        blanks: [
          { a: ["traceback", "stack trace"], why: "A traceback details the call hierarchy at the moment of failure." },
          { a: ["frame", "stack frame"], why: "A stack frame holds the environment of a single function call." },
          { a: ["bottom"], why: "Python lists oldest callers at the top and the failure point at the bottom." }
        ]
      },
      win: "You can navigate complex, multi-library stack traces and immediately identify which line of your code caused the crash.",
      nextTasks: [
        "Trigger an intentional ZeroDivisionError and trace each frame in the terminal output.",
        "Identify the file, line number, and function name in a foreign library traceback.",
        "Practice finding the transition boundary where your code calls external packages."
      ],
      primarySource: "Python Standard Library Documentation: *traceback — Print or retrieve a stack traceback* (docs.python.org).",
      quiz: [
        {
          q: "What information does the final line of a Python traceback provide?",
          a: [
            "The timestamp when the computer system booted",
            "The exception type and descriptive error message",
            "The full name of the software license agreement",
            "The memory address of the operating system kernel"
          ],
          c: 1,
          why: "The final line states the specific exception raised and its diagnostic message."
        },
        {
          q: "If a traceback ends inside requests/adapters.py, what is the best first step?",
          a: [
            "Submit an issue claiming the requests library is fundamentally broken",
            "Inspect the last line in your own code that called the requests library",
            "Reinstall your computer operating system from clean media",
            "Disable all network security firewalls permanently"
          ],
          c: 1,
          why: "Third-party libraries usually fail because your application passed them invalid data."
        },
        {
          q: "What happens to stack frames when an unhandled exception is raised?",
          a: [
            "They are printed in sequence as the exception unwinds up the call chain",
            "They are instantly written to external database servers",
            "They are encrypted with public key cryptographic algorithms",
            "They remain in memory forever causing permanent leaks"
          ],
          c: 0,
          why: "As the error unwinds the call stack, each active frame is recorded in the traceback."
        },
        {
          q: "What does a call stack frame contain?",
          a: [
            "Only the global variables defined across the whole system",
            "Local variable bindings, arguments, and instruction pointers",
            "The binary machine code of every installed library",
            "The full source code of the entire application repo"
          ],
          c: 1,
          why: "A frame encapsulates the execution context and local scope of one specific function invocation."
        }
      ]
    },
    {
      n: 6,
      id: "using-breakpoints-and-inspectors",
      title: "Using breakpoints and inspectors",
      topic: "Observation Tools",
      anim: "Pulse",
      lede: "Stop littering print statements everywhere. Interactive debuggers allow you to pause execution, inspect variable scopes, and step through code instruction by instruction.",
      winShort: "Set breakpoints and evaluate variables interactively without editing source code",
      missionLink: "Provides real-time visibility into internal program state",
      sec1: {
        title: "The power of interactive inspection",
        content: `<p>Print statements have three major drawbacks: they require modifying code, they cannot be queried interactively, and they only reveal what you anticipated printing. A debugger pauses execution right before the critical moment.</p><p>Once paused at a <b>breakpoint</b>, you have an active REPL. You can inspect any variable in scope, call methods, evaluate expressions, and step through the logic line by line.</p>`,
        keyIdea: "A breakpoint transforms a passive crash into an active, exploratory scientific laboratory."
      },
      predict: {
        q: "What happens when execution reaches a line with an active breakpoint?",
        a: [
          "The program crashes immediately and outputs core dumps",
          "Execution pauses and control transfers to the interactive debugger",
          "The line of code is permanently erased from disk",
          "The CPU executes the line at double clock speed"
        ],
        c: 1,
        why: "Breakpoints pause execution to allow developers to inspect variables and control flow."
      },
      sec2: {
        title: "Debugger navigation controls",
        content: `<p>Master the four essential navigation primitives: step over (execute current line), step into (dive into function call), step out (finish current function), and continue (run until next breakpoint).</p>`,
      },
      diagram: {
        boxes: [
          { title: "Step Over (n)", lines: ["execute current line", "remain in current frame"] },
          { title: "Step Into (s)", lines: ["descend into callee", "inspect function start"] },
          { title: "Step Out (r)", lines: ["execute to return", "ascend to caller frame"] },
          { title: "Continue (c)", lines: ["resume full execution", "halt at next breakpoint"] }
        ]
      },
      sec3: {
        title: "Stepping through a calculation",
        content: `<p>Trace how a debugger moves step-by-step through a loop, letting you verify variables at each iteration.</p>`,
      },
      trace: {
        code: [
          "total = 0",
          "items = [10, 20]",
          "for item in items: # breakpoint set here",
          "    total += item"
        ],
        steps: [
          { line: 0, vars: { total: "0" } },
          { line: 1, vars: { items: "[10, 20]" } },
          { line: 2, vars: { paused: "line 2", item: "10", total: "0" } },
          { line: 3, vars: { total: "10" } }
        ]
      },
      practiceIntro: "Review standard debugger navigation commands.",
      fill: {
        label: "From memory — fill in the missing terms",
        lines: [
          "An intentional pause marker in code is called a <0>.",
          "The command to run until the next breakpoint is <1>.",
          "The command to descend into a called function is step <2>."
        ],
        blanks: [
          { a: ["breakpoint"], why: "A breakpoint tells the runtime where to pause execution." },
          { a: ["continue", "c"], why: "'continue' resumes normal execution until another pause occurs." },
          { a: ["into", "in"], why: "'step into' enters the function on the current line." }
        ]
      },
      win: "You can navigate execution state using breakpoints and stepping commands without modifying a single line of production code.",
      nextTasks: [
        "Set a breakpoint in your code using your IDE or built-in debugger.",
        "Step through 5 lines of execution while evaluating local variables in the debugger console.",
        "Use 'step into' and 'step out' to inspect a helper function."
      ],
      primarySource: "Python pdb documentation: *pdb — The Python Debugger* (docs.python.org/3/library/pdb.html).",
      quiz: [
        {
          q: "What is the primary advantage of a debugger over print statements?",
          a: [
            "It allows interactive inspection of all state without modifying code",
            "It automatically guarantees that your code runs twice as fast",
            "It fixes defects in your code automatically using machine learning",
            "It eliminates the need to compile code before running"
          ],
          c: 0,
          why: "Debuggers let you inspect any variable and test expressions live without source edits."
        },
        {
          q: "What command should you use to enter a function call on the current line?",
          a: [
            "Step over",
            "Step into",
            "Step out",
            "Continue"
          ],
          c: 1,
          why: "Step into descends into the called function's internal execution frame."
        },
        {
          q: "What does a conditional breakpoint do?",
          a: [
            "It only pauses execution when a specified Boolean expression evaluates to true",
            "It randomly pauses once every ten thousand program runs",
            "It pauses only if the operating system has low battery power",
            "It halts execution only when user input is invalid syntax"
          ],
          c: 0,
          why: "Conditional breakpoints prevent tedious manual stepping until the exact problematic condition is met."
        },
        {
          q: "What is a watchpoint in a debugger?",
          a: [
            "A stopwatch that measures the execution time of a function",
            "A breakpoint that triggers when a variable or memory location changes",
            "A visual theme that highlights syntax errors in bright colors",
            "A security tool that prevents unauthorised code downloads"
          ],
          c: 1,
          why: "Watchpoints halt execution automatically whenever a watched variable is written to."
        }
      ]
    },
    {
      n: 7,
      id: "formulating-and-testing-hypotheses",
      title: "Formulating and testing hypotheses",
      topic: "Root Cause & Prevention",
      anim: "Pulse",
      lede: "Do not touch the code until you have a theory you can test. Learn to frame hypotheses that can be proven false, and design experiments that deliver clean answers.",
      winShort: "Formulate crisp, falsifiable hypotheses before writing any bug fixes",
      missionLink: "Prevents confirmation bias and wild code changes",
      sec1: {
        title: "The nature of a good hypothesis",
        content: `<p>A vague idea like 'something is wrong with the database' is not a hypothesis. A hypothesis is a specific statement about cause and effect: <i>'If the user submits an empty string, the sanitizer returns None instead of an empty string, causing the downstream template to raise TypeError.'</i></p><p>Notice that this hypothesis makes a concrete prediction. You can design an experiment to test that exact condition in isolation.</p>`,
        keyIdea: "A hypothesis must be specific enough that an experiment can decisively prove it false."
      },
      predict: {
        q: "Which of the following represents a falsifiable debugging hypothesis?",
        a: [
          "The code has bad architecture and needs complete refactoring",
          "Passing a negative price causes calculate_tax to return a negative float",
          "Computers are inherently unreliable on Monday mornings",
          "Our software dependencies contain too many third-party bugs"
        ],
        c: 1,
        why: "Passing a negative price makes a specific, testable prediction with an exact falsifiable outcome."
      },
      sec2: {
        title: "Testing one variable at a time",
        content: `<p>If you change three things at once and the bug disappears, you do not know which change fixed it — or whether you introduced two new bugs. Always alter one independent variable at a time.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Hypothesis", lines: ["identify suspect variable", "predict outcome"] },
          { title: "Control", lines: ["keep other inputs fixed", "isolate single difference"] },
          { title: "Result", lines: ["confirmed: fix defect", "refuted: formulate new theory"] }
        ]
      },
      sec3: {
        title: "Hypothesis validation in action",
        content: `<p>Trace how a developer tests the theory that an off-by-one error exists in a slice boundary.</p>`,
      },
      trace: {
        code: [
          "# Hypothesis: items[0:3] omits the 4th item because slice upper bounds are exclusive",
          "items = ['a', 'b', 'c', 'd']",
          "subset = items[0:3]",
          "assert len(subset) == 3  # prediction confirmed: 'd' was excluded"
        ],
        steps: [
          { line: 1, vars: { items: "['a', 'b', 'c', 'd']" } },
          { line: 2, vars: { subset: "['a', 'b', 'c']" } },
          { line: 3, vars: { len_subset: "3", confirmed: "true" } }
        ]
      },
      practiceIntro: "Review the rules of rigorous hypothesis formation.",
      fill: {
        label: "From memory — fill in the missing terms",
        lines: [
          "A scientific hypothesis must be capable of being proven <0>.",
          "When running an experiment, you should only change one <1>.",
          "Accepting only evidence that supports your preferred theory is <2> bias."
        ],
        blanks: [
          { a: ["false", "falsified"], why: "Falsifiability is the core requirement of any scientific statement." },
          { a: ["variable"], why: "Changing one variable at a time ensures you isolate the true causal factor." },
          { a: ["confirmation"], why: "Confirmation bias tempts engineers to ignore contradictory data." }
        ]
      },
      win: "You can formulate explicit, falsifiable hypotheses that cut straight to the causal mechanism behind any bug.",
      nextTasks: [
        "Write out a one-sentence hypothesis in 'If... then...' format for an open defect.",
        "Design an experiment that would disprove your hypothesis if it were incorrect.",
        "Verify your hypothesis with the experiment before editing source code."
      ],
      primarySource: "Karl Popper, *The Logic of Scientific Discovery* (Chapter 1 on Falsifiability applied to software diagnostics).",
      quiz: [
        {
          q: "What defines a falsifiable hypothesis in software debugging?",
          a: [
            "A statement that can be definitively disproven by a targeted experiment",
            "A statement that every senior engineer agrees with unanimously",
            "An error report generated automatically by the operating system kernel",
            "A comment written inside unit test files explaining business logic"
          ],
          c: 0,
          why: "If an experiment cannot disprove the theory, the theory cannot be reliably verified."
        },
        {
          q: "Why must you only change one variable at a time during an experiment?",
          a: [
            "Because modern compilers can only process one file change per minute",
            "To ensure you know exactly which change caused the difference in outcome",
            "To prevent git repositories from exceeding allowed file size limits",
            "Because CPU registers can only store one variable at a time"
          ],
          c: 1,
          why: "Altering multiple variables conflates causes and makes conclusions invalid."
        },
        {
          q: "What should you do when your experiment refutes your hypothesis?",
          a: [
            "Change the experimental results so your hypothesis appears correct",
            "Discard the hypothesis and formulate a new one based on new evidence",
            "Force commit the change to production anyway and monitor alerts",
            "Stop working and assume the defect is an impossible mystery"
          ],
          c: 1,
          why: "Refutation is progress: you have eliminated a false possibility and learned new facts."
        },
        {
          q: "Which cognitive trap leads developers to overlook true bug causes?",
          a: [
            "Confirmation bias towards their own initial assumptions",
            "Excessive reliance on automated unit test suites",
            "Reading tracebacks from bottom to top too quickly",
            "Using binary search instead of sequential reading"
          ],
          c: 0,
          why: "Confirmation bias causes developers to only notice data that supports their pet theory."
        }
      ]
    },
    {
      n: 8,
      id: "fixing-the-cause-not-the-symptom",
      title: "Fixing the cause, not the symptom",
      topic: "Root Cause & Prevention",
      anim: "Pulse",
      lede: "A good fix solves the defect at its origin, adds a regression test to keep it solved forever, and asks what architectural flaw allowed it to exist.",
      winShort: "Implement durable root-cause fixes accompanied by automated regression tests",
      missionLink: "Completes the debugging lifecycle with permanent prevention",
      sec1: {
        title: "The difference between masking and fixing",
        content: `<p>When an index is out of bounds, wrapping the line in a <code>try...except IndexError: pass</code> block is not a fix — it is a mask. The program continues running, but in an invalid, infected state that will corrupt data downstream.</p><p>A genuine fix addresses the original calculation that generated the invalid index, and ensures that invalid inputs are rejected or handled cleanly at the system boundary.</p>`,
        keyIdea: "Never catch an exception merely to silence it; cure the condition that originated the error."
      },
      predict: {
        q: "A function receives None and crashes. Is adding 'if val is None: return' always a complete fix?",
        a: [
          "Yes, it completely prevents the crash from ever happening",
          "No, it may mask why an invalid None was passed in the first place",
          "Yes, because returning None is standard practice everywhere",
          "No, because Python does not support the None keyword"
        ],
        c: 1,
        why: "Early returns often silence errors while passing unexpected None values to other callers."
      },
      sec2: {
        title: "The prevention workflow",
        content: `<p>A complete bug fix follows four mandatory steps: write a failing regression test, apply the minimal root-cause fix, verify the test passes, and assess the codebase for identical patterns.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Regression Test", lines: ["encode minimal repro", "test fails on current code"] },
          { title: "Root Fix", lines: ["fix defect at origin", "verify test now passes"] },
          { title: "Auditing", lines: ["check for twin bugs", "improve boundary types"] }
        ]
      },
      sec3: {
        title: "A verified regression test",
        content: `<p>Observe how encoding the bug reproduction into an automated test ensures the bug can never return unnoticed.</p>`,
      },
      trace: {
        code: [
          "def divide(a, b):",
          "    if b == 0: raise ValueError('divisor cannot be zero')",
          "    return a / b",
          "assert divide(10, 2) == 5"
        ],
        steps: [
          { line: 0, vars: { divide: "function" } },
          { line: 1, vars: { check: "active" } },
          { line: 2, vars: { logic: "safe" } },
          { line: 3, vars: { result: "5.0 (verified)" } }
        ]
      },
      practiceIntro: "Confirm the steps of permanent defect remediation.",
      fill: {
        label: "From memory — fill in the missing terms",
        lines: [
          "Hiding an error without fixing the underlying flaw is <0> the symptom.",
          "An automated test created to prevent a bug from recurring is a <1> test.",
          "Investigating how a defect was introduced to improve engineering processes is a <2>."
        ],
        blanks: [
          { a: ["masking"], why: "Masking hides symptoms while leaving underlying defects intact." },
          { a: ["regression"], why: "A regression test guards against the recurrence of known defects." },
          { a: ["post-mortem", "retrospective"], why: "A post-mortem analyzes systemic causes to prevent future occurrences." }
        ]
      },
      win: "You can resolve defects at their root cause and lock in the fix with permanent automated regression tests.",
      nextTasks: [
        "Convert an old bug fix into a permanent automated regression test in your test suite.",
        "Search your codebase for catch blocks that silently swallow exceptions.",
        "Conduct a mini post-mortem on your most recent production issue."
      ],
      primarySource: "Martin Fowler, *Refactoring: Improving the Design of Existing Code* (Chapter on Technical Debt and Root Cause Fixes).",
      quiz: [
        {
          q: "What is the primary role of a regression test?",
          a: [
            "To prove that a previously fixed defect never silently returns",
            "To test whether code can compile on older operating systems",
            "To benchmark the CPU performance of database queries",
            "To verify user interface color contrast accessibility"
          ],
          c: 0,
          why: "Regression tests run in CI to alert the team if a known defect is accidentally reintroduced."
        },
        {
          q: "Why is swallowing exceptions with empty except blocks dangerous?",
          a: [
            "It turns observable failures into silent, hidden state infections",
            "It automatically increases memory allocation on the heap",
            "It causes Python scripts to switch into JavaScript mode",
            "It corrupts git commit author email information"
          ],
          c: 0,
          why: "Silencing exceptions hides corrupt state and makes downstream failures much harder to debug."
        },
        {
          q: "What should you do after successfully fixing a critical bug?",
          a: [
            "Search the rest of the codebase for similar vulnerable patterns",
            "Immediately delete the reproduction test to save disk space",
            "Disable continuous integration testing to speed up deploys",
            "Never discuss the defect with other engineers on the team"
          ],
          c: 0,
          why: "Defects often appear in clusters where similar assumptions or patterns were copy-pasted."
        },
        {
          q: "What is the correct order of operations when fixing a bug?",
          a: [
            "Deploy to production, write unit tests, inspect git history",
            "Write failing regression test, fix root cause, verify test passes",
            "Apply speculative fix, delete failing tests, reboot servers",
            "Rewrite module from scratch, commit changes, wait for user reports"
          ],
          c: 1,
          why: "Writing a failing test first ensures your fix actually resolves the proven problem."
        }
      ]
    }
  ]
};

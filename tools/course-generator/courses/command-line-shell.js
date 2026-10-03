"use strict";

module.exports = {
  id: "command-line-shell",
  title: "Command Line & Shell Fundamentals",
  num: 19,
  emoji: "🐧",
  desc: "Files, permissions, processes, pipes and shell scripting — fluency in the terminal.",
  mission: `# Mission — Command Line & Shell Fundamentals

## Why this course exists

The command line is the universal interface of computing. Cloud servers, CI pipelines, Docker containers, and developer toolchains speak POSIX shell. Yet many developers treat the terminal as a mysterious place where they copy-paste cryptic commands without understanding. This course replaces anxiety with mental models of streams, processes, and permissions.

## What the learner can do at the end

- Navigate and manipulate complex directory trees with precision.
- Chain small, composable Unix tools together using pipes and redirection.
- Inspect, monitor, and signal running operating system processes.
- Audit and configure UNIX file permissions and executable bits correctly.
- Configure shell environments, $PATH resolution, and repeatable shell automation scripts.

## What this course is NOT

- Not an exhaustive manual for every flag of GNU coreutils.
- Not an advanced bash programming course for esoteric syntax.

## Success looks like

When a task requires filtering 100,000 log entries or orchestrating three background processes, the learner writes a clean shell pipeline in under two minutes without opening a GUI editor.
`,
  notes: `# Notes — Command Line & Shell Fundamentals

## Decisions
- Focus on POSIX portable concepts that apply identically to Bash, Zsh, Linux, and macOS.
- Standardise on 8 high-impact lessons with practical traces and memory checks.
`,
  resources: `# Resources — Command Line & Shell Fundamentals

## Knowledge (primary sources)
- *The Linux Command Line* by William Shotts — Comprehensive guide from basics to shell scripting.
- *UNIX and Linux System Administration Handbook* by Nemeth, Snyder, Hein, Whaley — Industry standard for systems craft.

## Wisdom
- In UNIX, everything is a stream of bytes or a file descriptor. Compose tools; do not reinvent them.
`,
  cheatsheetSections: [
    {
      title: "Navigation & Files",
      label: "Movement and inspection",
      code: `pwd                 # print working directory
ls -la              # detailed list including hidden files
cd -                # jump back to previous directory
find . -name "*.py" # search filesystem tree`,
      lessonN: 1,
      lessonSlug: "navigating-the-filesystem",
      lessonTitle: "Navigating the filesystem"
    },
    {
      title: "Streams & Redirection",
      label: "Connecting inputs and outputs",
      code: `command > file.txt   # redirect stdout (overwrite)
command >> file.txt  # redirect stdout (append)
command 2> err.log   # redirect stderr
cmd1 | cmd2          # pipe stdout of cmd1 to stdin of cmd2`,
      lessonN: 3,
      lessonSlug: "standard-streams-and-redirection",
      lessonTitle: "Standard streams and redirection"
    },
    {
      title: "Process Control",
      label: "Managing running jobs",
      code: `ps aux | grep node   # find process ID (PID)
kill -15 <PID>       # graceful shutdown (SIGTERM)
kill -9 <PID>        # forced termination (SIGKILL)
jobs                 # list background jobs
fg %1                # bring job 1 to foreground`,
      lessonN: 5,
      lessonSlug: "processes-and-signals",
      lessonTitle: "Processes and signals"
    },
    {
      title: "Permissions & PATH",
      label: "Security and execution",
      code: `chmod +x script.sh   # make executable
chmod 755 script.sh  # rwxr-xr-x
export PATH="$HOME/bin:$PATH"  # prepend to PATH
echo $?              # exit code of previous command`,
      lessonN: 6,
      lessonSlug: "permissions-and-ownership",
      lessonTitle: "Permissions and ownership"
    }
  ],
  glossaryGroups: [
    {
      id: "filesystem",
      title: "Filesystem & Navigation",
      terms: [
        { term: "Working directory", def: "The current folder context in which a shell session resolves relative file paths.", lesson: 1, tags: ["filesystem"] },
        { term: "Absolute path", def: "A complete path specification starting from the filesystem root slash.", lesson: 1, tags: ["filesystem"] },
        { term: "Globbing", def: "Shell wildcard expansion patterns such as asterisk or question mark used to match filenames.", lesson: 2, tags: ["shell"] },
        { term: "Symlink", def: "A symbolic link file that acts as a pointer or alias to another filesystem path.", lesson: 2, tags: ["filesystem"] }
      ]
    },
    {
      id: "streams",
      title: "Streams & Pipes",
      terms: [
        { term: "Standard input", def: "File descriptor 0 (stdin), the default input byte stream received by a process.", lesson: 3, tags: ["streams"] },
        { term: "Standard output", def: "File descriptor 1 (stdout), the default output byte stream produced by a process.", lesson: 3, tags: ["streams"] },
        { term: "Standard error", def: "File descriptor 2 (stderr), the unbuffered diagnostic error stream of a process.", lesson: 3, tags: ["streams"] },
        { term: "Pipe", def: "A kernel buffer connecting the stdout of one process directly to the stdin of another.", lesson: 4, tags: ["pipes"] }
      ]
    },
    {
      id: "processes",
      title: "Processes & Permissions",
      terms: [
        { term: "Process ID", def: "A unique integer (PID) assigned by the operating system kernel to a running program.", lesson: 5, tags: ["kernel"] },
        { term: "Signal", def: "An asynchronous operating system notification sent to a process to request an action like termination.", lesson: 5, tags: ["signals"] },
        { term: "File mode", def: "A bitmask specifying read, write, and execute permissions for user, group, and others.", lesson: 6, tags: ["security"] },
        { term: "Executable bit", def: "The permission flag that grants permission for a file to be executed as a program.", lesson: 6, tags: ["permissions"] }
      ]
    },
    {
      id: "environment",
      title: "Environment & Scripting",
      terms: [
        { term: "Environment variable", def: "A key-value pair inherited by child processes that configures runtime behavior.", lesson: 7, tags: ["environment"] },
        { term: "PATH variable", def: "A colon-separated list of directories searched by the shell to find executable binaries.", lesson: 7, tags: ["environment"] },
        { term: "Exit code", def: "An integer between 0 and 255 returned by a process upon termination where 0 denotes success.", lesson: 8, tags: ["shell"] },
        { term: "Shebang", def: "The initial characters #! in a script specifying the interpreter to execute the file.", lesson: 8, tags: ["scripting"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "navigating-the-filesystem",
      title: "Navigating the filesystem",
      topic: "Filesystem & Navigation",
      anim: "TermLayers",
      lede: "The terminal sees your computer as a single hierarchical tree. Learn to move with speed, understanding relative versus absolute coordinates.",
      winShort: "Navigate nested directories with cd, pwd, and path shortcuts",
      missionLink: "Forms the bedrock of all command-line operations",
      sec1: {
        title: "The root and working directory",
        content: `<p>In graphical user interfaces, folders appear as visual windows. In the shell, your session always has a single <b>current working directory</b>. Every command you run without a full path is resolved relative to this location.</p><p>An <b>absolute path</b> starts at the root slash (<code>/</code>) and specifies the exact location regardless of where you are. A <b>relative path</b> starts from your current position. The symbol <code>.</code> means current directory; <code>..</code> means parent directory.</p>`,
        keyIdea: "Absolute paths start from root slash; relative paths compute coordinates from where you stand right now."
      },
      predict: {
        q: "If you are in /home/ada/projects, where does 'cd ../..' take you?",
        a: ["/home", "/home/ada", "/ (root)", "/home/ada/projects"],
        c: 0,
        why: "One '..' ascends to /home/ada; the second '..' ascends to /home."
      },
      sec2: {
        title: "Navigation shortcuts",
        content: `<p>Master standard shell movement shortcuts to navigate directories quickly.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Root (/)", lines: ["top of the tree", "absolute starting point"] },
          { title: "Home (~)", lines: ["user personal directory", "/home/username or /Users/user"] },
          { title: "Previous (-)", lines: ["cd - toggles back", "to prior working dir"] }
        ]
      },
      sec3: {
        title: "Tracing path traversal",
        content: `<p>Trace how the working directory changes as relative path navigation commands are executed.</p>`,
      },
      trace: {
        code: [
          "pwd                 # /var/log/nginx",
          "cd ..               # up one level",
          "pwd                 # /var/log",
          "cd -                # toggle to previous"
        ],
        steps: [
          { line: 0, vars: { cwd: "/var/log/nginx" } },
          { line: 1, vars: { action: "ascend to parent" } },
          { line: 2, vars: { cwd: "/var/log" } },
          { line: 3, vars: { cwd: "/var/log/nginx (toggled)" } }
        ]
      },
      practiceIntro: "Review filesystem path symbols before testing your knowledge.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The command to print the current working directory is <0>.",
          "The symbol representing the parent directory is <1>.",
          "The shortcut symbol for the user home directory is <2>."
        ],
        blanks: [
          { a: ["pwd"], why: "pwd stands for 'print working directory'." },
          { a: [".."], why: "Two dots represent the parent directory." },
          { a: ["~", "tilde"], why: "Tilde represents the current user home directory." }
        ]
      },
      win: "You can move through deep directory hierarchies confidently using relative and absolute paths.",
      nextTasks: [
        "Open a terminal and navigate between three distant folders using cd -.",
        "List all files including hidden dotfiles using ls -la.",
        "Verify your current path with pwd after every move."
      ],
      primarySource: "William Shotts, *The Linux Command Line* (Chapter 2: 'Navigation').",
      quiz: [
        {
          q: "What does the command 'cd -' do in a POSIX shell?",
          a: [
            "Toggles back to the previously visited directory",
            "Deletes the current directory from the hard drive",
            "Navigates to the root directory immediately",
            "Lists all files sorted in reverse order"
          ],
          c: 0,
          why: "cd - switches your working directory back to OLDPWD."
        },
        {
          q: "What is the difference between an absolute path and a relative path?",
          a: [
            "Absolute paths start with slash from root; relative paths start from current directory",
            "Absolute paths only work on Windows; relative paths only work on Linux",
            "Absolute paths can only contain letters; relative paths can contain numbers",
            "There is no difference between absolute and relative paths"
          ],
          c: 0,
          why: "Absolute paths have a fixed root anchor; relative paths depend on session location."
        },
        {
          q: "Which command lists all files including hidden configuration files?",
          a: [
            "ls -la",
            "ls --only-visible",
            "cat --all",
            "pwd -v"
          ],
          c: 0,
          why: "The -a flag instructs ls to include entries starting with a dot."
        },
        {
          q: "What does a single dot ('.') represent in path resolution?",
          a: [
            "The current working directory",
            "The computer root partition",
            "The trash bin directory",
            "The default shell executable"
          ],
          c: 0,
          why: "A single dot refers to the directory in which the command is evaluated."
        }
      ]
    },
    {
      n: 2,
      id: "manipulating-files-and-directories",
      title: "Manipulating files and directories",
      topic: "Filesystem & Navigation",
      anim: "TermLayers",
      lede: "Creating, copying, moving, and removing files is the core of terminal productivity. Learn safe habits and powerful shell wildcard matching.",
      winShort: "Manage files and directories safely using cp, mv, rm, and wildcards",
      missionLink: "Prevents accidental data loss during file management",
      sec1: {
        title: "The atomic file verbs",
        content: `<p>UNIX provides single-purpose file utilities: <code>touch</code> to create empty files or update timestamps, <code>mkdir -p</code> to create nested directory trees, <code>cp -r</code> to recursively copy folders, and <code>mv</code> to move or rename files.</p><p>Notice that <code>mv</code> handles both renaming and moving: in the UNIX filesystem, renaming a file is simply moving it to a new name in the same directory.</p>`,
        keyIdea: "In UNIX, renaming a file and moving a file are the exact same operation."
      },
      predict: {
        q: "What happens if you run 'mv report.txt docs/new_report.txt'?",
        a: [
          "It creates a duplicate copy in docs and keeps the original",
          "It moves the file into docs and renames it to new_report.txt in one step",
          "It throws an error because mv cannot change filenames",
          "It prints the text contents of the report to the terminal"
        ],
        c: 1,
        why: "mv transfers the file to the destination path with the specified new filename."
      },
      sec2: {
        title: "Shell glob wildcards",
        content: `<p>The shell expands wildcards before passing arguments to commands: <code>*</code> matches any characters, <code>?</code> matches single characters, and <code>*.{jpg,png}</code> matches braces.</p>`,
      },
      diagram: {
        boxes: [
          { title: "User Types", lines: ["rm *.log", "shell intercepts wildcard"] },
          { title: "Shell Expands", lines: ["matches: app.log, error.log", "passes explicit list"] },
          { title: "Command Runs", lines: ["rm app.log error.log", "files deleted safely"] }
        ]
      },
      sec3: {
        title: "Tracing directory tree creation",
        content: `<p>Trace how mkdir -p creates multiple nested folder levels in a single operation.</p>`,
      },
      trace: {
        code: [
          "mkdir -p src/components/buttons",
          "touch src/components/buttons/Primary.tsx",
          "cp Primary.tsx Secondary.tsx",
          "ls src/components/buttons"
        ],
        steps: [
          { line: 0, vars: { created: "3 nested directory levels" } },
          { line: 1, vars: { file_1: "Primary.tsx" } },
          { line: 2, vars: { file_2: "Secondary.tsx copied" } },
          { line: 3, vars: { contents: "Primary.tsx, Secondary.tsx" } }
        ]
      },
      practiceIntro: "Test your recall of essential file manipulation tools.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The flag to create parent directories without error is mkdir <0>.",
          "The flag to copy an entire directory recursively is cp <1>.",
          "The wildcard symbol that matches zero or more characters is <2>."
        ],
        blanks: [
          { a: ["-p"], why: "-p creates missing parent directories automatically." },
          { a: ["-r", "-R"], why: "-r enables recursive copying of directory trees." },
          { a: ["*", "asterisk"], why: "* expands to match any string of characters." }
        ]
      },
      win: "You can manipulate complex nested file structures rapidly using atomic commands and wildcards.",
      nextTasks: [
        "Create a three-tier directory structure using a single mkdir -p command.",
        "Copy multiple files using an asterisk glob pattern.",
        "Rename a file using the mv command."
      ],
      primarySource: "William Shotts, *The Linux Command Line* (Chapter 4: 'Manipulating Files and Directories').",
      quiz: [
        {
          q: "What does the -p flag do when creating directories with mkdir?",
          a: [
            "Creates necessary parent directories and suppresses errors if they exist",
            "Encrypts the created directory with user password authentication",
            "Prints the memory address of the created directory in RAM",
            "Sets read-only permissions on all child files"
          ],
          c: 0,
          why: "mkdir -p builds the entire path hierarchy without failing if intermediate folders exist."
        },
        {
          q: "Why must you exercise extreme caution with 'rm -rf'?",
          a: [
            "It permanently deletes files and directories recursively without confirmation or recycle bin",
            "It reboots the computer operating system immediately",
            "It changes all file extensions into executable binary files",
            "It revokes git commit privileges for current user accounts"
          ],
          c: 0,
          why: "UNIX rm does not move files to a trash bin; removal is permanent and immediate."
        },
        {
          q: "Who performs wildcard glob expansion when you run 'ls *.txt'?",
          a: [
            "The shell expands the pattern before executing the ls binary",
            "The ls binary program parses the wildcard itself",
            "The hard drive hardware controller",
            "The network DNS server"
          ],
          c: 0,
          why: "The shell expands glob patterns into matching filenames before passing them as argv."
        },
        {
          q: "How do you duplicate a directory and all its contents to a backup path?",
          a: [
            "cp -r original/ backup/",
            "mv original/ backup/",
            "touch -d original/ backup/",
            "cat original/ > backup/"
          ],
          c: 0,
          why: "cp -r recursively copies directories, subdirectories, and files."
        }
      ]
    },
    {
      n: 3,
      id: "standard-streams-and-redirection",
      title: "Standard streams and redirection",
      topic: "Streams & Pipes",
      anim: "TermLayers",
      lede: "Everything in UNIX is a stream of bytes. Learn how file descriptors 0, 1, and 2 allow you to redirect inputs and outputs anywhere.",
      winShort: "Redirect standard output and standard error to files and /dev/null",
      missionLink: "Mastery of I/O streams is the foundation of composable toolchains",
      sec1: {
        title: "The three standard file descriptors",
        content: `<p>Every process launched in a POSIX system starts with three standard I/O streams open: <b>standard input</b> (stdin, fd 0), <b>standard output</b> (stdout, fd 1), and <b>standard error</b> (stderr, fd 2).</p><p>By default, stdin comes from the keyboard, while stdout and stderr both print to the terminal screen. Redirection operators allow you to detach these streams and connect them to files or null devices.</p>`,
        keyIdea: "Standard error is separated from standard output so diagnostics never corrupt data streams."
      },
      predict: {
        q: "What happens if you run 'command > out.log' and the command fails with an error?",
        a: [
          "The error message is saved into out.log",
          "The error message still prints to your terminal screen",
          "The computer halts execution immediately",
          "The file out.log is deleted permanently"
        ],
        c: 1,
        why: "'>' only redirects stdout (fd 1); stderr (fd 2) remains connected to the screen unless redirected."
      },
      sec2: {
        title: "The redirection operator matrix",
        content: `<p>Understand the standard redirection operators used across all POSIX shells.</p>`,
      },
      diagram: {
        boxes: [
          { title: "> file", lines: ["redirect stdout (1)", "overwrites target file"] },
          { title: ">> file", lines: ["redirect stdout (1)", "appends to target file"] },
          { title: "2> file", lines: ["redirect stderr (2)", "captures errors only"] },
          { title: "&> file", lines: ["redirect both (1 & 2)", "merges output and errors"] }
        ]
      },
      sec3: {
        title: "Tracing stream separation",
        content: `<p>Trace how redirecting stdout to a file leaves stderr printing diagnostics to the terminal.</p>`,
      },
      trace: {
        code: [
          "# Program prints 'result: 42' to stdout and 'warn: slow query' to stderr",
          "python script.py > results.txt 2> warnings.log",
          "cat results.txt     # result: 42",
          "cat warnings.log    # warn: slow query"
        ],
        steps: [
          { line: 1, vars: { fd1: "results.txt", fd2: "warnings.log" } },
          { line: 2, vars: { stdout_content: "'result: 42'" } },
          { line: 3, vars: { stderr_content: "'warn: slow query'" } }
        ]
      },
      practiceIntro: "Confirm your memory of standard stream redirection operators.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Standard input has file descriptor number <0>.",
          "Standard output has file descriptor number <1>.",
          "Standard error has file descriptor number <2>."
        ],
        blanks: [
          { a: ["0"], why: "File descriptor 0 is standard input (stdin)." },
          { a: ["1"], why: "File descriptor 1 is standard output (stdout)." },
          { a: ["2"], why: "File descriptor 2 is standard error (stderr)." }
        ]
      },
      win: "You can separate data output from error logs and redirect streams cleanly using file descriptors.",
      nextTasks: [
        "Redirect the output of a command to a file using > and verify it with cat.",
        "Append three lines to an existing file using >>.",
        "Discard unwanted noisy output by redirecting to /dev/null."
      ],
      primarySource: "The Open Group Base Specifications Issue 7 / POSIX.1-2017: *Redirection*.",
      quiz: [
        {
          q: "What is the difference between '>' and '>>' in shell redirection?",
          a: [
            "'>' overwrites the file; '>>' appends new content to the end of the file",
            "'>' works on text files; '>>' only works on binary compiled files",
            "'>' redirects standard error; '>>' redirects standard input",
            "There is no difference between the two operators"
          ],
          c: 0,
          why: "Single bracket truncates and overwrites; double bracket appends without erasing."
        },
        {
          q: "How do you silence both stdout and stderr completely?",
          a: [
            "command > /dev/null 2>&1",
            "command --silent-mode",
            "delete command",
            "cat command | null"
          ],
          c: 0,
          why: "Redirecting stdout to /dev/null and merging stderr (2>&1) discards all output."
        },
        {
          q: "Why does UNIX separate standard error (fd 2) from standard output (fd 1)?",
          a: [
            "To allow diagnostic and error logs to be viewed without corrupting piped data streams",
            "To prevent computer memory leaks in long-running processes",
            "Because CPUs only support two execution threads simultaneously",
            "To comply with federal data encryption guidelines"
          ],
          c: 0,
          why: "If errors were mixed with stdout, downstream pipes would parse error strings as valid data."
        },
        {
          q: "What file descriptor does '2>' redirect?",
          a: [
            "Standard error (stderr)",
            "Standard input (stdin)",
            "Standard output (stdout)",
            "Network socket stream"
          ],
          c: 0,
          why: "The prefix 2 specifically binds to file descriptor 2 (stderr)."
        }
      ]
    },
    {
      n: 4,
      id: "pipes-and-text-processing",
      title: "Pipes and text processing",
      topic: "Streams & Pipes",
      anim: "TermLayers",
      lede: "The UNIX philosophy: write programs that do one thing well, and connect them with pipes. Combine grep, awk, cut, and sort into powerful processing pipelines.",
      winShort: "Build multi-stage text processing pipelines using pipes and core utilities",
      missionLink: "Enables immediate text analysis without writing custom scripts",
      sec1: {
        title: "The pipeline operator",
        content: `<p>A pipe (<code>|</code>) connects the standard output of one command directly to the standard input of the next. The data never touches disk; the operating system streams bytes through a memory buffer in real time.</p><p>By combining small, focused filters — like <code>grep</code> (search lines), <code>cut</code> (extract columns), <code>sort</code> (order lines), and <code>uniq -c</code> (count duplicates) — you can analyze gigabytes of log data with a single line of shell.</p>`,
        keyIdea: "Pipes stream data directly through memory buffers between concurrent processes."
      },
      predict: {
        q: "What does 'cat access.log | grep '404' | wc -l' calculate?",
        a: [
          "The file size of access.log in kilobytes",
          "The number of lines containing HTTP 404 errors in the log",
          "The time taken to download access.log from the server",
          "The IP addresses of all visitors to the website"
        ],
        c: 1,
        why: "grep filters for lines matching '404', and wc -l counts the filtered lines."
      },
      sec2: {
        title: "The core text toolkit",
        content: `<p>Learn the standard Unix text-processing utilities and their specialized roles.</p>`,
      },
      diagram: {
        boxes: [
          { title: "grep", lines: ["filter lines by regex", "grep -E 'ERROR|WARN'"] },
          { title: "sort & uniq", lines: ["order lines alphabetically", "uniq -c counts occurrences"] },
          { title: "awk & cut", lines: ["extract columns and fields", "awk '{print $1, $4}'"] }
        ]
      },
      sec3: {
        title: "Tracing a pipeline execution",
        content: `<p>Trace how a pipeline finds the top 3 most frequent IP addresses in a log file.</p>`,
      },
      trace: {
        code: [
          "# Stream: log -> extract IP -> sort -> count unique -> sort top 3",
          "cat access.log | awk '{print $1}' | sort | uniq -c | sort -nr | head -n 3"
        ],
        steps: [
          { line: 0, vars: { raw: "10,000 log lines" } },
          { line: 0, vars: { awk: "extracted 10,000 raw IPs" } },
          { line: 0, vars: { uniq: "grouped counts: 400 1.1.1.1, 250 8.8.8.8..." } },
          { line: 0, vars: { result: "top 3 highest frequency IP addresses" } }
        ]
      },
      practiceIntro: "Test your memory of composable text utilities.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The symbol used to pipe output between commands is <0>.",
          "The command to count lines, words, and characters is <1>.",
          "To eliminate adjacent duplicate lines, use the command <2>."
        ],
        blanks: [
          { a: ["|", "pipe", "vertical bar"], why: "The vertical pipe character connects stdout to stdin." },
          { a: ["wc"], why: "wc stands for word count." },
          { a: ["uniq"], why: "uniq filters out consecutive identical lines." }
        ]
      },
      win: "You can assemble multi-tool pipelines to extract, filter, and summarize complex text data instantly.",
      nextTasks: [
        "Filter a CSV file by a specific column using cut or awk.",
        "Count the frequency of each unique word in a document using sort | uniq -c.",
        "Inspect the first 5 lines of a long pipeline output using head -n 5."
      ],
      primarySource: "Kernighan & Pike, *The UNIX Programming Environment* (Chapter 4: 'Filters').",
      quiz: [
        {
          q: "Why must you sort data before passing it to 'uniq'?",
          a: [
            "uniq only compares adjacent neighboring lines for duplicates",
            "Sorting automatically converts ASCII text into Unicode",
            "The pipe operator will crash if lines are not alphabetical",
            "uniq deletes non-sorted files from the hard drive"
          ],
          c: 0,
          why: "uniq operates in a streaming fashion, comparing each line only to the preceding line."
        },
        {
          q: "What does 'grep -v' do when filtering text?",
          a: [
            "Inverts the match, printing only lines that do NOT contain the pattern",
            "Prints verbose memory statistics about regex compilation",
            "Validates that the file has a valid digital signature",
            "Converts all uppercase letters to lowercase characters"
          ],
          c: 0,
          why: "The -v flag inverts matching logic to filter out unwanted lines."
        },
        {
          q: "How does data travel between processes connected by a pipe?",
          a: [
            "Through an in-memory kernel buffer without touching physical storage disk",
            "Through temporary hidden files created in /tmp directory",
            "Over external internet TCP network connections",
            "By writing data directly into video display graphics memory"
          ],
          c: 0,
          why: "Pipes use high-performance kernel memory buffers to stream data concurrently."
        },
        {
          q: "Which command extracts the first column from a space-delimited text stream?",
          a: [
            "awk '{print $1}'",
            "cat --col 1",
            "grep --column=1",
            "echo $1"
          ],
          c: 0,
          why: "In awk, $1 refers to the first whitespace-separated field on each line."
        }
      ]
    },
    {
      n: 5,
      id: "processes-and-signals",
      title: "Processes and signals",
      topic: "Processes & Permissions",
      anim: "TermLayers",
      lede: "Every running program is a process managed by the operating system kernel. Learn to inspect process states, control jobs, and send termination signals.",
      winShort: "Monitor running processes with ps and manage execution using UNIX signals",
      missionLink: "Provides essential system control over running background software",
      sec1: {
        title: "The anatomy of a process",
        content: `<p>A process is an instance of a running program. The kernel assigns each process a unique numerical <b>Process ID (PID)</b>, an allocated memory space, and parent-child hierarchy tracking.</p><p>You inspect running processes with <code>ps aux</code> or interactive monitors like <code>top</code> and <code>htop</code>. When you need to communicate with a process, you send an asynchronous <b>signal</b> using the <code>kill</code> utility.</p>`,
        keyIdea: "A process is a container of state; signals are notifications sent by the kernel to that container."
      },
      predict: {
        q: "What signal does pressing Ctrl-C in a terminal send to the foreground process?",
        a: ["SIGTERM (15)", "SIGINT (2)", "SIGKILL (9)", "SIGHUP (1)"],
        c: 1,
        why: "Ctrl-C sends SIGINT (Interrupt), requesting the foreground program to stop cleanly."
      },
      sec2: {
        title: "The essential UNIX signals",
        content: `<p>Understand the four most important operating system signals and how processes respond to them.</p>`,
      },
      diagram: {
        boxes: [
          { title: "SIGINT (2)", lines: ["keyboard interrupt (Ctrl-C)", "graceful prompt to stop"] },
          { title: "SIGTERM (15)", lines: ["default kill signal", "request to flush and exit"] },
          { title: "SIGKILL (9)", lines: ["kernel force kill", "cannot be caught or ignored"] },
          { title: "SIGHUP (1)", lines: ["terminal hangup", "often reloads configuration"] }
        ]
      },
      sec3: {
        title: "Tracing process termination",
        content: `<p>Trace how a gracefully requested shutdown allows a database process to save state before exiting.</p>`,
      },
      trace: {
        code: [
          "kill -15 1420       # send SIGTERM to PID 1420",
          "# Process catches SIGTERM, flushes buffers to disk",
          "# Process closes network sockets cleanly",
          "# Process calls exit(0) and terminates"
        ],
        steps: [
          { line: 0, vars: { signal: "SIGTERM sent to PID 1420" } },
          { line: 1, vars: { status: "flushing dirty database pages" } },
          { line: 2, vars: { status: "closing client TCP connections" } },
          { line: 3, vars: { state: "process terminated gracefully" } }
        ]
      },
      practiceIntro: "Test your memory of process control signals.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The unique integer identifying a running program is its <0>.",
          "The uncatchable force-kill signal number is <1>.",
          "The default graceful termination signal number is <2>."
        ],
        blanks: [
          { a: ["PID", "Process ID"], why: "PID is the numerical Process ID assigned by the OS." },
          { a: ["9", "SIGKILL"], why: "Signal 9 (SIGKILL) terminates a process unconditionally via the kernel." },
          { a: ["15", "SIGTERM"], why: "Signal 15 (SIGTERM) is the standard polite termination request." }
        ]
      },
      win: "You can find rogue processes, monitor system resource usage, and terminate hung tasks cleanly.",
      nextTasks: [
        "Find the PID of your web browser or terminal using ps aux | grep.",
        "Launch a long-running sleep command in the background with &.",
        "Bring the background job to the foreground with fg and stop it with Ctrl-C."
      ],
      primarySource: "W. Richard Stevens, *Advanced Programming in the UNIX Environment* (Chapter 10: 'Signals').",
      quiz: [
        {
          q: "Why should you always try SIGTERM (15) before resorting to SIGKILL (9)?",
          a: [
            "SIGTERM allows the process to close files, flush buffers, and clean up state",
            "SIGTERM uses less electrical battery power on laptop computers",
            "SIGKILL requires administrator root privileges in all operating systems",
            "SIGTERM automatically backs up source code to git repositories"
          ],
          c: 0,
          why: "SIGTERM allows orderly cleanup; SIGKILL terminates instantly, risking corrupted data."
        },
        {
          q: "Can a process intercept, block, or ignore a SIGKILL (9) signal?",
          a: [
            "No, the kernel handles SIGKILL directly without giving the process a choice",
            "Yes, if the process is written in C or C++",
            "Yes, if the process is running as a background service",
            "No, unless the computer has more than 16 gigabytes of RAM"
          ],
          c: 0,
          why: "SIGKILL and SIGSTOP cannot be caught, blocked, or ignored by any user process."
        },
        {
          q: "How do you launch a shell command into the background immediately?",
          a: [
            "Append an ampersand (&) to the end of the command line",
            "Type 'background' before the command name",
            "Hold down the Shift key while pressing Enter",
            "Redirect output to the /etc/hosts system file"
          ],
          c: 0,
          why: "The trailing '&' instructs the shell to spawn the process without blocking the prompt."
        },
        {
          q: "What does the 'top' command provide?",
          a: [
            "A real-time, interactive dashboard of active processes and system resource usage",
            "A list of the top ten largest files on the local filesystem",
            "A search engine for finding open-source code on the internet",
            "A tool that increases CPU clock frequencies safely"
          ],
          c: 0,
          why: "top provides continuous dynamic monitoring of CPU, memory, and process lists."
        }
      ]
    },
    {
      n: 6,
      id: "permissions-and-ownership",
      title: "Permissions and ownership",
      topic: "Processes & Permissions",
      anim: "TermLayers",
      lede: "UNIX security starts at the file mode. Learn how read, write, and execute bits protect files, and how to configure them using octal masks.",
      winShort: "Calculate and set file permissions using chmod and octal notation",
      missionLink: "Prevents permission denied errors and security vulnerabilities",
      sec1: {
        title: "The rwx permission triad",
        content: `<p>Every file and directory in a UNIX filesystem belongs to an owner user and a group, and maintains a 9-bit permission mask. The mask is divided into three triads: <b>user</b> (owner), <b>group</b>, and <b>others</b> (world).</p><p>Each triad has three bits: <b>r</b> (read, value 4), <b>w</b> (write, value 2), and <b>x</b> (execute, value 1). Adding the values produces the octal permission code (e.g. 7 = 4+2+1 for read/write/execute).</p>`,
        keyIdea: "Permissions define who can read, modify, or execute a file across user, group, and others."
      },
      predict: {
        q: "What does an octal permission of 755 represent?",
        a: [
          "Owner: rwx (7), Group: r-x (5), Others: r-x (5)",
          "Owner: r-- (4), Group: rw- (6), Others: rwx (7)",
          "Full access for all users on the computer",
          "Read-only access for the file owner"
        ],
        c: 0,
        why: "7 = 4+2+1 (rwx); 5 = 4+0+1 (r-x) for both group and others."
      },
      sec2: {
        title: "Octal values reference",
        content: `<p>Memorise the additive binary values that compose every permission number.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Read (r = 4)", lines: ["view file contents", "list directory entries"] },
          { title: "Write (w = 2)", lines: ["modify file contents", "add/delete dir entries"] },
          { title: "Execute (x = 1)", lines: ["run file as binary/script", "enter/traverse directory"] }
        ]
      },
      sec3: {
        title: "Tracing chmod changes",
        content: `<p>Trace how chmod changes a text script from a passive document into an executable program.</p>`,
      },
      trace: {
        code: [
          "ls -l deploy.sh     # -rw-r--r-- (644)",
          "./deploy.sh         # bash: permission denied",
          "chmod +x deploy.sh  # add execute bit",
          "ls -l deploy.sh     # -rwxr-xr-x (755)"
        ],
        steps: [
          { line: 0, vars: { mode: "644 (read/write only)" } },
          { line: 1, vars: { error: "Permission Denied: missing execute bit" } },
          { line: 2, vars: { action: "chmod adds execute flag" } },
          { line: 3, vars: { mode: "755 (executable)" } }
        ]
      },
      practiceIntro: "Test your ability to calculate octal permissions.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The numeric value for read permission is <0>.",
          "The numeric value for write permission is <1>.",
          "The numeric value for execute permission is <2>."
        ],
        blanks: [
          { a: ["4"], why: "Read has a binary weight of 4." },
          { a: ["2"], why: "Write has a binary weight of 2." },
          { a: ["1"], why: "Execute has a binary weight of 1." }
        ]
      },
      win: "You can audit and set exact UNIX file permissions without guessing or using dangerous 777 masks.",
      nextTasks: [
        "Check permissions on your SSH keys in ~/.ssh using ls -la.",
        "Make a shell script executable using chmod +x.",
        "Calculate the octal representation of -rw-rw-r--."
      ],
      primarySource: "Shotts, *The Linux Command Line*, Chapter 9: 'Permissions'.",
      quiz: [
        {
          q: "What does chmod 600 do to a sensitive configuration file?",
          a: [
            "Grants read and write to owner only; all other access is denied",
            "Makes the file readable by everyone on the local network",
            "Allows the file to be executed by any user",
            "Deletes the file automatically after 600 seconds"
          ],
          c: 0,
          why: "6 = 4+2 (read+write for owner); 0 denies all permissions to group and others."
        },
        {
          q: "Why is 'chmod 777' considered a dangerous security antipattern?",
          a: [
            "It gives every user on the system permission to read, write, and execute the file",
            "It corrupts SSD drive flash controller memory cells",
            "It automatically disables computer antivirus scanners",
            "It converts text files into compiled binary libraries"
          ],
          c: 0,
          why: "777 grants full destructive and executable power to any local process or user."
        },
        {
          q: "What does execute permission mean on a directory (as opposed to a file)?",
          a: [
            "It allows the user to traverse, enter, and access files inside that directory",
            "It runs all executable files inside the directory simultaneously",
            "It encrypts the filenames inside the directory",
            "It converts the directory into a network file share"
          ],
          c: 0,
          why: "Directory execute permission allows passing through (cd) and resolving path contents."
        },
        {
          q: "Which command changes the owner of a file?",
          a: [
            "chown user:group file.txt",
            "chmod 755 file.txt",
            "touch --owner=user file.txt",
            "mv --user=user file.txt"
          ],
          c: 0,
          why: "chown (change owner) modifies user and group ownership of filesystem paths."
        }
      ]
    },
    {
      n: 7,
      id: "environment-variables-and-path",
      title: "Environment variables and PATH",
      topic: "Environment & Scripting",
      anim: "TermLayers",
      lede: "How does the shell know where to find 'python' or 'git'? Master the PATH variable, environment inheritance, and configuration dotfiles.",
      winShort: "Configure shell environment variables and modify $PATH resolution",
      missionLink: "Eliminates 'command not found' errors across all developer tooling",
      sec1: {
        title: "Environment variable inheritance",
        content: `<p>When a process spawns a child process, the child inherits a copy of the parent's <b>environment variables</b>. Variables created in a shell session remain private to that shell unless marked for export with <code>export KEY=value</code>.</p><p>The most important variable is <code>PATH</code>: a colon-separated list of directories. When you type <code>python</code>, the shell searches each directory in <code>$PATH</code> from left to right until it finds an executable binary named <code>python</code>.</p>`,
        keyIdea: "The shell finds executables by scanning the colon-separated directory list in $PATH from left to right."
      },
      predict: {
        q: "If PATH is '/usr/local/bin:/usr/bin', and 'python' exists in both, which one executes?",
        a: [
          "The one in /usr/local/bin because it appears first",
          "The one in /usr/bin because it has a shorter path",
          "The shell prompts you to choose which one to run",
          "Both run simultaneously in separate CPU threads"
        ],
        c: 0,
        why: "PATH resolution halts at the first matching executable found in order from left to right."
      },
      sec2: {
        title: "Shell startup configuration files",
        content: `<p>Learn which configuration files load when interactive login and non-login shells start up.</p>`,
      },
      diagram: {
        boxes: [
          { title: "~/.bashrc or ~/.zshrc", lines: ["interactive shells", "aliases, prompt, functions"] },
          { title: "~/.profile or ~/.zprofile", lines: ["login shells", "PATH exports, environment setup"] },
          { title: "Current Session", lines: ["inherited environment", "exported child variables"] }
        ]
      },
      sec3: {
        title: "Tracing PATH modification",
        content: `<p>Trace how prepending a custom bin folder to PATH overrides a system tool.</p>`,
      },
      trace: {
        code: [
          "which node          # /usr/bin/node (v14)",
          "export PATH=\"$HOME/.nvm/versions/v20/bin:$PATH\"",
          "which node          # /home/user/.nvm/versions/v20/bin/node (v20)",
          "node --version      # v20.10.0"
        ],
        steps: [
          { line: 0, vars: { initial: "/usr/bin/node" } },
          { line: 1, vars: { path_update: "prepended custom version to front" } },
          { line: 2, vars: { resolution: "first match is now v20 binary" } },
          { line: 3, vars: { result: "active Node.js version is 20" } }
        ]
      },
      practiceIntro: "Confirm your understanding of environment variables and PATH resolution.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The command to make a variable available to child processes is <0>.",
          "The command to show the filesystem location of an executable binary is <1>.",
          "The delimiter separating directory paths inside $PATH is the <2>."
        ],
        blanks: [
          { a: ["export"], why: "export marks variables for inheritance by child processes." },
          { a: ["which", "command -v"], why: "which searches PATH and displays the binary location." },
          { a: [":", "colon"], why: "UNIX PATH entries are separated by colons." }
        ]
      },
      win: "You can diagnose and resolve binary path collisions and configure custom toolchains with ease.",
      nextTasks: [
        "Print your current PATH variable using echo $PATH.",
        "Locate where git is installed on your computer using which git.",
        "Add an export statement to your ~/.zshrc or ~/.bashrc file."
      ],
      primarySource: "William Shotts, *The Linux Command Line*, Chapter 11: 'The Environment'.",
      quiz: [
        {
          q: "What causes a 'command not found' shell error?",
          a: [
            "The requested executable is not located in any directory listed in $PATH",
            "The hard drive has been formatted to a read-only filesystem",
            "The computer CPU does not support 64-bit operations",
            "The operating system has exceeded its maximum process count"
          ],
          c: 0,
          why: "If no directory in PATH contains an executable matching the name, the shell fails."
        },
        {
          q: "Why should you prepend ($NEW:$PATH) rather than append ($PATH:$NEW) when overriding tools?",
          a: [
            "Prepending ensures your custom tool is discovered first before system defaults",
            "Appending causes an unrecoverable kernel panic error",
            "Prepending takes less memory in the shell environment",
            "Appending converts paths to relative coordinates"
          ],
          c: 0,
          why: "Left-to-right scanning means the earliest directory in PATH takes precedence."
        },
        {
          q: "What is the difference between FOO=bar and export FOO=bar?",
          a: [
            "FOO=bar is only visible in current shell; export FOO=bar is inherited by child processes",
            "export FOO=bar encrypts the variable value with TLS",
            "FOO=bar writes the variable permanently into hardware BIOS",
            "There is no difference between exported and non-exported variables"
          ],
          c: 0,
          why: "export places the variable in the environment inherited by spawned subprocesses."
        },
        {
          q: "Which file is the standard configuration file for an interactive Zsh shell?",
          a: [
            "~/.zshrc",
            "~/.bash_profile",
            "/etc/shadow",
            "/bin/zsh"
          ],
          c: 0,
          why: "~/.zshrc is the user startup script loaded for every interactive Zsh session."
        }
      ]
    },
    {
      n: 8,
      id: "shell-scripting-and-aliases",
      title: "Shell scripting and aliases",
      topic: "Environment & Scripting",
      anim: "TermLayers",
      lede: "If you run a command sequence more than twice, automate it. Learn to create aliases, write shell scripts with shebang lines, and handle exit codes.",
      winShort: "Write repeatable shell automation scripts and custom workflow aliases",
      missionLink: "Transforms manual command-line tasks into robust automation",
      sec1: {
        title: "From interactive commands to scripts",
        content: `<p>A shell script is simply a text file containing the exact same commands you would type into a terminal prompt. The first line is the <b>shebang</b> (<code>#!/bin/bash</code> or <code>#!/usr/bin/env bash</code>), telling the operating system which interpreter to execute.</p><p>Every command exits with an integer <b>exit code</b> stored in <code>$?</code>. An exit code of 0 signals success; any non-zero value signals an error. Using <code>set -e</code> ensures your script halts immediately if any command fails.</p>`,
        keyIdea: "A script is a sequence of terminal commands with automatic error checking and a shebang."
      },
      predict: {
        q: "What does 'set -e' at the top of a bash script do?",
        a: [
          "It forces the script to exit immediately if any command returns a non-zero exit code",
          "It prints every variable value to standard output in real time",
          "It enables experimental language features in the shell interpreter",
          "It converts all uppercase text in the script into lowercase"
        ],
        c: 0,
        why: "'set -e' prevents scripts from blindly continuing after an intermediate failure."
      },
      sec2: {
        title: "Conditionals and chaining",
        content: `<p>Chain commands using logical operators based on exit codes: <code>&&</code> runs on success; <code>||</code> runs on failure.</p>`,
      },
      diagram: {
        boxes: [
          { title: "cmd1 && cmd2", lines: ["logical AND", "cmd2 runs only if cmd1 returns 0"] },
          { title: "cmd1 || cmd2", lines: ["logical OR", "cmd2 runs only if cmd1 fails"] },
          { title: "alias ll='ls -la'", lines: ["command shortcut", "expands interactively in shell"] }
        ]
      },
      sec3: {
        title: "Tracing a backup automation script",
        content: `<p>Trace how a shell script validates a directory exists before creating a compressed tar archive.</p>`,
      },
      trace: {
        code: [
          "#!/usr/bin/env bash",
          "set -e",
          "TARGET=\"$1\"",
          "[ -d \"$TARGET\" ] || { echo 'Not a dir'; exit 1; }",
          "tar -czf backup.tar.gz \"$TARGET\""
        ],
        steps: [
          { line: 0, vars: { interpreter: "bash" } },
          { line: 1, vars: { flag: "fail-fast on errors enabled" } },
          { line: 2, vars: { target: "docs" } },
          { line: 3, vars: { check: "passed: docs is a valid directory" } },
          { line: 4, vars: { archive: "backup.tar.gz created successfully" } }
        ]
      },
      practiceIntro: "Test your memory of shell automation conventions.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The first line of a script starting with #! is the <0>.",
          "The special variable holding the exit code of the last command is $<1>.",
          "The operator that runs the second command only if the first succeeded is <2>."
        ],
        blanks: [
          { a: ["shebang", "hashbang"], why: "The shebang tells the kernel which interpreter binary to launch." },
          { a: ["?"], why: "$? captures the return status of the preceding command." },
          { a: ["&&"], why: "&& executes the right-hand command only if the left-hand command returns exit code 0." }
        ]
      },
      win: "You can write safe, robust shell scripts and custom aliases to automate repetitive developer workflows.",
      nextTasks: [
        "Create an alias in ~/.zshrc or ~/.bashrc for a command you type frequently.",
        "Write a 5-line bash script with a shebang, make it executable, and run it.",
        "Inspect the exit code of successful and failing commands using echo $?."
      ],
      primarySource: "Shotts, *The Linux Command Line*, Chapter 24: 'Writing Your First Script'.",
      quiz: [
        {
          q: "What does an exit code of 0 mean in UNIX command execution?",
          a: [
            "The command completed successfully with zero errors",
            "The command produced zero lines of text output",
            "The program crashed immediately upon launching",
            "The operating system terminated the command forcibly"
          ],
          c: 0,
          why: "POSIX standard: return code 0 indicates clean, successful execution."
        },
        {
          q: "What is the purpose of the shebang (#!/bin/bash) on line 1 of a script?",
          a: [
            "It specifies which interpreter the operating system should use to execute the script",
            "It gives administrator root permissions to the executing user",
            "It imports standard library math functions into the script environment",
            "It prevents unauthorized users from opening the script in a text editor"
          ],
          c: 0,
          why: "The kernel reads the shebang path to launch the appropriate execution interpreter."
        },
        {
          q: "How does the '&&' operator behave between two commands?",
          a: [
            "It runs the second command only if the first command succeeds (exit code 0)",
            "It runs both commands simultaneously in parallel threads",
            "It ignores any errors generated by the first command",
            "It redirects output from the first command into the second command"
          ],
          c: 0,
          why: "&& acts as a short-circuit guard, halting if the first command fails."
        },
        {
          q: "What does an alias do in an interactive shell session?",
          a: [
            "Creates a shorthand name that expands to a full command with predefined flags",
            "Renames a file on the physical disk partition",
            "Creates a symbolic link in the /usr/bin folder",
            "Compresses repetitive text in terminal output streams"
          ],
          c: 0,
          why: "Aliases substitute a short string with a full command sequence for quick interactive typing."
        }
      ]
    }
  ]
};

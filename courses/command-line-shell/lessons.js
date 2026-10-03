/* ============================================================
   Command Line & Shell Fundamentals — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "navigating-the-filesystem", file: "lessons/0001-navigating-the-filesystem.html", title: "Navigating the filesystem", topic: "Filesystem & Navigation", anim: "TermLayers" },
  { n: 2, id: "manipulating-files-and-directories", file: "lessons/0002-manipulating-files-and-directories.html", title: "Manipulating files and directories", topic: "Filesystem & Navigation", anim: "TermLayers" },
  { n: 3, id: "standard-streams-and-redirection", file: "lessons/0003-standard-streams-and-redirection.html", title: "Standard streams and redirection", topic: "Streams & Pipes", anim: "TermLayers" },
  { n: 4, id: "pipes-and-text-processing", file: "lessons/0004-pipes-and-text-processing.html", title: "Pipes and text processing", topic: "Streams & Pipes", anim: "TermLayers" },
  { n: 5, id: "processes-and-signals", file: "lessons/0005-processes-and-signals.html", title: "Processes and signals", topic: "Processes & Permissions", anim: "TermLayers" },
  { n: 6, id: "permissions-and-ownership", file: "lessons/0006-permissions-and-ownership.html", title: "Permissions and ownership", topic: "Processes & Permissions", anim: "TermLayers" },
  { n: 7, id: "environment-variables-and-path", file: "lessons/0007-environment-variables-and-path.html", title: "Environment variables and PATH", topic: "Environment & Scripting", anim: "TermLayers" },
  { n: 8, id: "shell-scripting-and-aliases", file: "lessons/0008-shell-scripting-and-aliases.html", title: "Shell scripting and aliases", topic: "Environment & Scripting", anim: "TermLayers" }
];

/* ============================================================
   Command Line & Shell Fundamentals — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "filesystem", title: "Filesystem & Navigation",
    terms: [
      { term: "Working directory", def: "The current folder context in which a shell session resolves relative file paths.", lesson: 1, tags: ["filesystem"] },
      { term: "Absolute path", def: "A complete path specification starting from the filesystem root slash.", lesson: 1, tags: ["filesystem"] },
      { term: "Globbing", def: "Shell wildcard expansion patterns such as asterisk or question mark used to match filenames.", lesson: 2, tags: ["shell"] },
      { term: "Symlink", def: "A symbolic link file that acts as a pointer or alias to another filesystem path.", lesson: 2, tags: ["filesystem"] }
    ]
  },
  {
    id: "streams", title: "Streams & Pipes",
    terms: [
      { term: "Standard input", def: "File descriptor 0 (stdin), the default input byte stream received by a process.", lesson: 3, tags: ["streams"] },
      { term: "Standard output", def: "File descriptor 1 (stdout), the default output byte stream produced by a process.", lesson: 3, tags: ["streams"] },
      { term: "Standard error", def: "File descriptor 2 (stderr), the unbuffered diagnostic error stream of a process.", lesson: 3, tags: ["streams"] },
      { term: "Pipe", def: "A kernel buffer connecting the stdout of one process directly to the stdin of another.", lesson: 4, tags: ["pipes"] }
    ]
  },
  {
    id: "processes", title: "Processes & Permissions",
    terms: [
      { term: "Process ID", def: "A unique integer (PID) assigned by the operating system kernel to a running program.", lesson: 5, tags: ["kernel"] },
      { term: "Signal", def: "An asynchronous operating system notification sent to a process to request an action like termination.", lesson: 5, tags: ["signals"] },
      { term: "File mode", def: "A bitmask specifying read, write, and execute permissions for user, group, and others.", lesson: 6, tags: ["security"] },
      { term: "Executable bit", def: "The permission flag that grants permission for a file to be executed as a program.", lesson: 6, tags: ["permissions"] }
    ]
  },
  {
    id: "environment", title: "Environment & Scripting",
    terms: [
      { term: "Environment variable", def: "A key-value pair inherited by child processes that configures runtime behavior.", lesson: 7, tags: ["environment"] },
      { term: "PATH variable", def: "A colon-separated list of directories searched by the shell to find executable binaries.", lesson: 7, tags: ["environment"] },
      { term: "Exit code", def: "An integer between 0 and 255 returned by a process upon termination where 0 denotes success.", lesson: 8, tags: ["shell"] },
      { term: "Shebang", def: "The initial characters #! in a script specifying the interpreter to execute the file.", lesson: 8, tags: ["scripting"] }
    ]
  }
];

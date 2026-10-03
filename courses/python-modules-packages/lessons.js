/* ============================================================
   Python Modules & Packages — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.

   Add a lesson by appending one entry here and creating the
   matching file in ./lessons/. Nothing else needs to change.
   (Or run: node tools/new-lesson.js python-modules-packages "<Lesson title>")

   Fields
     n     1-based lesson number (must be unique, in order)
     id    dash-case slug, matches the filename after the number
     file  path to the lesson, relative to THIS course folder
     title short title shown in nav and the map
     topic the grouping label used by the hub
     anim  legacy scene key (kept for the hub card art)
   ============================================================ */
window.TeachLessons = [
  {
    n: 1,
    id: "module-is-a-file",
    file: "lessons/0001-module-is-a-file.html",
    title: "A Module Is Just a File",
    topic: "Imports",
    anim: "layers"
  },
  {
    n: 2,
    id: "three-ways-to-import",
    file: "lessons/0002-three-ways-to-import.html",
    title: "Three Ways to Import",
    topic: "Imports",
    anim: "code"
  },
  {
    n: 3,
    id: "the-import-search-path",
    file: "lessons/0003-the-import-search-path.html",
    title: "Where Python Looks for Modules",
    topic: "Imports",
    anim: "flow"
  },
  {
    n: 4,
    id: "packages-and-init",
    file: "lessons/0004-packages-and-init.html",
    title: "Packages and __init__.py",
    topic: "Packages",
    anim: "layers"
  },
  {
    n: 5,
    id: "relative-and-absolute-imports",
    file: "lessons/0005-relative-and-absolute-imports.html",
    title: "Relative vs Absolute Imports",
    topic: "Packages",
    anim: "flow"
  },
  {
    n: 6,
    id: "the-main-guard",
    file: "lessons/0006-the-main-guard.html",
    title: "The __main__ Guard",
    topic: "Packages",
    anim: "code"
  },
  {
    n: 7,
    id: "virtual-environments",
    file: "lessons/0007-virtual-environments.html",
    title: "Virtual Environments",
    topic: "Environments",
    anim: "layers"
  },
  {
    n: 8,
    id: "installing-and-pinning",
    file: "lessons/0008-installing-and-pinning.html",
    title: "Installing and Pinning Dependencies",
    topic: "Environments",
    anim: "code"
  },
  {
    n: 9,
    id: "import-traps",
    file: "lessons/0009-import-traps.html",
    title: "Import Traps and How to Escape Them",
    topic: "Together",
    anim: "flow"
  },
  {
    n: 10,
    id: "shipping-a-package",
    file: "lessons/0010-shipping-a-package.html",
    title: "Shipping a Package",
    topic: "Together",
    anim: "layers"
  }
];

/* ============================================================
   Python Modules & Packages — glossary
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
    id: "imports",
    title: "Imports",
    terms: [
      {
        term: "Module",
        def: "A single <code>.py</code> file. Its top-level names become attributes of the module object once imported.",
        lesson: 1,
        tags: ["imports", "basics"]
      },
      {
        term: "Import statement",
        def: "The syntax that loads a module, runs its top-level code once, and binds a name in your namespace.",
        lesson: 2,
        tags: ["imports", "syntax"]
      },
      {
        term: "from ... import ...",
        def: "An import form that binds selected names directly instead of the whole module object.",
        lesson: 2,
        tags: ["imports", "syntax"]
      },
      {
        term: "Alias (as)",
        def: "A local rename applied to an imported module or name, usually to shorten or disambiguate it.",
        lesson: 2,
        tags: ["imports", "syntax"]
      },
      {
        term: "sys.path",
        def: "The ordered list of directories Python searches, left to right, when resolving an import.",
        lesson: 3,
        tags: ["imports", "resolution"]
      },
      {
        term: "Module cache (sys.modules)",
        def: "The dictionary of already-imported modules. A second import returns the cached object instead of re-running the file.",
        lesson: 3,
        tags: ["imports", "resolution"]
      }
    ]
  },
  {
    id: "packages",
    title: "Packages",
    terms: [
      {
        term: "Package",
        def: "A directory of modules that Python treats as one importable unit, addressed with dotted names.",
        lesson: 4,
        tags: ["packages", "structure"]
      },
      {
        term: "__init__.py",
        def: "The file that marks a directory as a regular package and runs when the package is first imported.",
        lesson: 4,
        tags: ["packages", "structure"]
      },
      {
        term: "Dotted path",
        def: "The <code>a.b.c</code> notation that walks from a top-level package down to a submodule.",
        lesson: 4,
        tags: ["packages", "syntax"]
      },
      {
        term: "Absolute import",
        def: "An import written from the project root, e.g. <code>from myapp.utils import clean</code>. Unambiguous and preferred.",
        lesson: 5,
        tags: ["packages", "imports"]
      },
      {
        term: "Relative import",
        def: "An import written with leading dots to mean 'sibling or parent inside this package', e.g. <code>from .utils import clean</code>.",
        lesson: 5,
        tags: ["packages", "imports"]
      },
      {
        term: "__name__",
        def: "The string holding the name a module was imported under: its dotted path, or <code>\"__main__\"</code> when run as a script.",
        lesson: 6,
        tags: ["packages", "runtime"]
      },
      {
        term: "__main__ guard",
        def: "The <code>if __name__ == \"__main__\":</code> block that runs code only when the file is executed directly, not when imported.",
        lesson: 6,
        tags: ["packages", "runtime"]
      }
    ]
  },
  {
    id: "environments",
    title: "Environments",
    terms: [
      {
        term: "Virtual environment",
        def: "An isolated directory holding its own interpreter link and site-packages, so projects do not share dependencies.",
        lesson: 7,
        tags: ["environments", "tooling"]
      },
      {
        term: "site-packages",
        def: "The directory inside an environment where installed third-party packages are placed and found.",
        lesson: 7,
        tags: ["environments", "tooling"]
      },
      {
        term: "pip",
        def: "The installer that fetches distributions from an index and unpacks them into the active environment.",
        lesson: 8,
        tags: ["environments", "tooling"]
      },
      {
        term: "requirements.txt",
        def: "A plain list of dependencies, optionally pinned with <code>==</code>, used to reproduce an environment.",
        lesson: 8,
        tags: ["environments", "tooling"]
      },
      {
        term: "Version pin",
        def: "An exact version constraint such as <code>requests==2.32.3</code> that makes installs reproducible.",
        lesson: 8,
        tags: ["environments", "tooling"]
      }
    ]
  },
  {
    id: "together",
    title: "Together",
    terms: [
      {
        term: "Circular import",
        def: "Two modules importing each other, so one sees a partially initialised module and raises ImportError or AttributeError.",
        lesson: 9,
        tags: ["together", "errors"]
      },
      {
        term: "Shadowing",
        def: "A local file whose name matches a standard-library or installed module, silently replacing it on the import path.",
        lesson: 9,
        tags: ["together", "errors"]
      },
      {
        term: "Star import",
        def: "<code>from module import *</code>, which dumps every public name into your namespace and hides where names came from.",
        lesson: 9,
        tags: ["together", "errors"]
      },
      {
        term: "pyproject.toml",
        def: "The modern project metadata file declaring name, version, dependencies and build backend for a distributable package.",
        lesson: 10,
        tags: ["together", "packaging"]
      },
      {
        term: "Distribution",
        def: "A built artifact — wheel or sdist — that pip installs, as opposed to the source tree you develop in.",
        lesson: 10,
        tags: ["together", "packaging"]
      }
    ]
  }
];

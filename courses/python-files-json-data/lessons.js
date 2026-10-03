/* ============================================================
   Python Files, JSON & Data — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.

   Add a lesson by appending one entry here and creating the
   matching file in ./lessons/. Nothing else needs to change.
   (Or run: node tools/new-lesson.js python-files-json-data "<Lesson title>")

   Fields
     n     1-based lesson number (must be unique, in order)
     id    dash-case slug, matches the filename after the number
     file  path to the lesson, relative to THIS course folder
     title short title shown in nav and the map
     topic the grouping label used by the hub
     anim  legacy scene key (kept for the hub card art)
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "files-are-streams", title: "Files Are Streams of Bytes", topic: "Files", anim: "flow", file: "lessons/0001-files-are-streams.html" },
  { n: 2, id: "reading-and-writing-text", title: "Reading and Writing Text", topic: "Files", anim: "code", file: "lessons/0002-reading-and-writing-text.html" },
  { n: 3, id: "the-with-statement", title: "The with Statement", topic: "Files", anim: "layers", file: "lessons/0003-the-with-statement.html" },
  { n: 4, id: "paths-and-the-filesystem", title: "Paths and the Filesystem", topic: "Files", anim: "flow", file: "lessons/0004-paths-and-the-filesystem.html" },
  { n: 5, id: "json-the-format", title: "JSON: The Format", topic: "Formats", anim: "layers", file: "lessons/0005-json-the-format.html" },
  { n: 6, id: "json-in-python", title: "JSON in Python", topic: "Formats", anim: "code", file: "lessons/0006-json-in-python.html" },
  { n: 7, id: "csv-and-tabular-data", title: "CSV and Tabular Data", topic: "Formats", anim: "layers", file: "lessons/0007-csv-and-tabular-data.html" },
  { n: 8, id: "converting-between-formats", title: "Converting Between Formats", topic: "Together", anim: "flow", file: "lessons/0008-converting-between-formats.html" },
  { n: 9, id: "data-integrity-and-errors", title: "Data Integrity and Errors", topic: "Together", anim: "code", file: "lessons/0009-data-integrity-and-errors.html" },
  { n: 10, id: "a-real-data-pipeline", title: "A Real Data Pipeline", topic: "Together", anim: "layers", file: "lessons/0010-a-real-data-pipeline.html" }
];

/* ============================================================
   Python Files, JSON & Data — glossary
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
    id: "files", title: "Files", terms: [
      { term: "File", def: "A named sequence of bytes on disk that a program can open, read and write.", lesson: 1, tags: ["python", "files"] },
      { term: "File handle", def: "The object returned by open() that represents an open connection to a file.", lesson: 1, tags: ["python", "files"] },
      { term: "Mode", def: "The string passed to open() — r, w, a, or b — that decides how the file is used.", lesson: 2, tags: ["python", "files"] },
      { term: "Encoding", def: "The mapping between bytes and characters, such as UTF-8, used when reading text.", lesson: 2, tags: ["python", "files"] },
      { term: "with statement", def: "The block form that closes a file automatically, even if an error occurs.", lesson: 3, tags: ["python", "files"] },
      { term: "Context manager", def: "An object that defines setup and teardown for a with block.", lesson: 3, tags: ["python", "files"] },
      { term: "Path", def: "The address of a file or directory, either absolute or relative to the current directory.", lesson: 4, tags: ["python", "files"] },
      { term: "pathlib", def: "The standard-library module whose Path objects represent filesystem paths.", lesson: 4, tags: ["python", "files"] }
    ]
  },
  {
    id: "formats", title: "Formats", terms: [
      { term: "JSON", def: "A text format for structured data built from objects, arrays, strings, numbers, booleans and null.", lesson: 5, tags: ["python", "data"] },
      { term: "Serialisation", def: "Turning an in-memory object into a storable or transmittable representation.", lesson: 5, tags: ["python", "data"] },
      { term: "Deserialisation", def: "Turning stored or transmitted data back into in-memory objects.", lesson: 5, tags: ["python", "data"] },
      { term: "json.dumps / json.loads", def: "The functions that convert between Python objects and JSON strings.", lesson: 6, tags: ["python", "data"] },
      { term: "json.dump / json.load", def: "The functions that read and write JSON directly to a file object.", lesson: 6, tags: ["python", "data"] },
      { term: "CSV", def: "A plain-text format of comma-separated rows, one record per line.", lesson: 7, tags: ["python", "data"] },
      { term: "csv module", def: "The standard-library module with reader and writer objects for CSV data.", lesson: 7, tags: ["python", "data"] },
      { term: "DictReader", def: "A csv reader that yields each row as a dictionary keyed by the header row.", lesson: 7, tags: ["python", "data"] }
    ]
  },
  {
    id: "together", title: "Together", terms: [
      { term: "Format conversion", def: "Reading data in one format and writing it out in another without losing meaning.", lesson: 8, tags: ["python", "data"] },
      { term: "Round-trip", def: "Writing data out and reading it back to confirm nothing changed.", lesson: 8, tags: ["python", "data"] },
      { term: "Malformed data", def: "Input that does not match the expected format, such as a broken JSON file.", lesson: 9, tags: ["python", "data"] },
      { term: "Validation", def: "Checking that data has the shape and types the program expects before using it.", lesson: 9, tags: ["python", "data"] },
      { term: "Pipeline", def: "A sequence of steps that reads, transforms and writes data in order.", lesson: 10, tags: ["python", "data"] },
      { term: "Idempotent", def: "A step that produces the same result whether it runs once or many times.", lesson: 10, tags: ["python", "data"] }
    ]
  }
];

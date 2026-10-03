"use strict";

const fs = require("fs");
const path = require("path");
const { generateCourse } = require("./builder.js");

const ROOT = path.resolve(__dirname, "../..");

const COURSE_IDS = [
  "ai-memory-context",
  "ai-agents",
  "multi-agent-systems",
  "mcp",
  "ai-evaluation",
  "llm-observability",
  "hallucination-reliability",
  "rag-evaluation",
  "agent-evaluation",
  "ai-guardrails",
  "ai-cost-latency",
  "ai-model-routing",
  "production-ai-architecture",
  "reliable-ai-systems",
  "cybersecurity-fundamentals",
  "web-security",
  "secrets-identity",
  "prompt-injection",
  "ai-agent-security",
  "docker-containers",
  "ci-cd",
  "cloud-architecture",
  "distributed-systems",
  "system-design"
];

console.log("=== Generating Final 24 Concept Lab Courses (Courses 77-100) ===");

const allCoursesData = [];

for (const id of COURSE_IDS) {
  const courseData = require(`./courses/${id}.js`);
  allCoursesData.push(courseData);
  generateCourse(courseData);
}

console.log("\nAll 24 course trees generated successfully.");

// Now update data/courses.js
const coursesJsPath = path.join(ROOT, "data", "courses.js");
let coursesJs = fs.readFileSync(coursesJsPath, "utf8");

for (const c of allCoursesData) {
  const id = c.id;
  const sectionsJson = JSON.stringify(c.glossaryGroups.map(g => ({ id: g.id, title: g.title })));
  
  // Find the course entry in courses.js and update its properties
  // Pattern to find `id: "<id>",` through `status: "planned",`
  const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?)(status:\\s*"planned",)`);
  if (!regex.test(coursesJs)) {
    console.error(`Could not find planned course entry for ${id} in data/courses.js`);
    process.exit(1);
  }

  const replacement = `$1status: "live", href: "courses/${id}/course.html",\n    lessons: { href: "courses/${id}/course.html", label: "Guided lessons" },\n    glossary: "courses/${id}/reference/${id}-glossary.html",\n    meta: "8 lessons · interactive quizzes · worked examples",\n    sections: ${sectionsJson},`;
  coursesJs = coursesJs.replace(regex, replacement);
  console.log(`Updated data/courses.js for ${id} -> status: "live"`);
}

fs.writeFileSync(coursesJsPath, coursesJs, "utf8");
console.log("\ndata/courses.js updated successfully.");

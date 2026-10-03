#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const BASE_URL = "https://greatbilal1.github.io/concept-lab";
const TODAY = new Date().toISOString().split("T")[0];

const urls = [];

function addUrl(relPath, priority, changefreq) {
  urls.push({
    loc: `${BASE_URL}/${relPath}`.replace(/\/index\.html$/, "/"),
    lastmod: TODAY,
    changefreq: changefreq || "monthly",
    priority: priority || "0.8"
  });
}

// Core root pages
addUrl("index.html", "1.0", "daily");
addUrl("courses.html", "0.9", "daily");
addUrl("glossary.html", "0.9", "weekly");
addUrl("oop_interactive_course.html", "0.8", "monthly");

// 100 Courses
const coursesDir = path.join(ROOT, "courses");
const courses = fs.readdirSync(coursesDir).filter(f => fs.statSync(path.join(coursesDir, f)).isDirectory()).sort();

for (const c of courses) {
  const cDir = path.join(coursesDir, c);
  
  // Hub
  const hub = path.join(cDir, "course.html");
  if (fs.existsSync(hub)) {
    addUrl(`courses/${c}/course.html`, "0.8", "weekly");
  }

  // Reference
  const refDir = path.join(cDir, "reference");
  if (fs.existsSync(refDir)) {
    for (const f of fs.readdirSync(refDir)) {
      if (f.endsWith(".html")) {
        addUrl(`courses/${c}/reference/${f}`, "0.7", "monthly");
      }
    }
  }

  // Lessons
  const lessonsDir = path.join(cDir, "lessons");
  if (fs.existsSync(lessonsDir)) {
    for (const f of fs.readdirSync(lessonsDir).sort()) {
      if (f.endsWith(".html")) {
        addUrl(`courses/${c}/lessons/${f}`, "0.8", "monthly");
      }
    }
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(ROOT, "sitemap.xml"), xml, "utf8");
console.log(`Generated sitemap.xml with ${urls.length} URLs.`);

// Also generate robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;

fs.writeFileSync(path.join(ROOT, "robots.txt"), robotsTxt, "utf8");
console.log("Generated robots.txt.");

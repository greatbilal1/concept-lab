#!/usr/bin/env node
/**
 * Renders every concept explainer composition to MP4 + WebM.
 *
 *   node render-all.mjs            # render all
 *   node render-all.mjs MentalModels Abstraction   # render a subset
 *
 * Output lands in ./out and is copied into ../videos so the site can
 * reference it with a relative path.
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, copyFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = join(here, "out");
const siteDir = join(here, "..", "videos");

const ALL = [
  // Concept Lab hub (index.html)
  "MentalModels",
  "StateBehavior",
  "Abstraction",
  "Composition",
  "Experimentation",
  "DesignTradeoffs",
  // OOP course (oop_interactive_course.html)
  "OopMentalModel",
  "OopClassVsObject",
  "OopSelfAttributes",
  "OopInitMethod",
  "OopMethods",
  "OopEncapsulation",
  "OopInheritance",
  "OopPolymorphism",
  "OopAbstraction",
  "OopComposition",
  "OopDunderMethods",
  "OopProperties",
  "OopMethodKinds",
  "OopDataclasses",
  "OopDesignSystem",
  "OopKycRiskModel",
  "OopKnowledgeCheck",
  "OopExperimentLab",
  "OopCheatSheet",
];

const ids = process.argv.slice(2).length ? process.argv.slice(2) : ALL;

mkdirSync(outDir, { recursive: true });
mkdirSync(siteDir, { recursive: true });

const run = (args) =>
  execFileSync("npx", ["remotion", "render", ...args], {
    cwd: here,
    stdio: "inherit",
  });

for (const id of ids) {
  const mp4 = join(outDir, `${id}.mp4`);

  console.log(`\n▶ Rendering ${id}`);
  run([id, mp4, "--codec=h264", "--log=error"]);

  if (existsSync(mp4)) {
    copyFileSync(mp4, join(siteDir, `${id}.mp4`));
  }
}

console.log(`\n✅ Done. Videos written to ${siteDir}`);

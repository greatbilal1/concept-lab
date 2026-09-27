#!/usr/bin/env node
/* ============================================================
   Concept Lab — Tabler icon sprite builder
   ------------------------------------------------------------
   Reads the vendored Tabler outline SVGs in assets/icons/tabler/
   and writes a single sprite at assets/icons/tabler-sprite.svg
   containing one <symbol id="tb-<name>"> per icon.

   Why a sprite: external <use href="file.svg#id"> is blocked on
   file://, so we inline one sprite into the document (icons.js)
   and reference symbols by id. This keeps the course fully
   offline with no CDN and no runtime network dependency.

   Run:  node tools/build-tabler-sprite.js
   ============================================================ */
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "assets/icons/tabler");
const OUT = path.join(ROOT, "assets/icons/tabler-sprite.svg");

/* Pull the inner markup out of a Tabler SVG file. Tabler files are
   a leading comment, then <svg ...> ... </svg>. We keep only the
   children of <svg> and normalise them onto a 24x24 viewBox. */
function inner(svg) {
  const open = svg.indexOf("<svg");
  if (open < 0) return null;
  const gt = svg.indexOf(">", open);
  const close = svg.lastIndexOf("</svg>");
  if (gt < 0 || close < 0) return null;
  return svg.slice(gt + 1, close).trim();
}

const files = fs
  .readdirSync(SRC)
  .filter((f) => f.endsWith(".svg"))
  .sort();

const symbols = [];
for (const f of files) {
  const name = f.replace(/\.svg$/, "");
  const raw = fs.readFileSync(path.join(SRC, f), "utf8");
  const body = inner(raw);
  if (!body) {
    console.warn("skip (no <svg>):", f);
    continue;
  }
  symbols.push(
    '  <symbol id="tb-' +
      name +
      '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n' +
      body
        .split("\n")
        .map((l) => "    " + l.trim())
        .join("\n") +
      "\n  </symbol>"
  );
}

const out =
  '<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">\n' +
  "  <!-- ============================================================\n" +
  "       Concept Lab — Tabler icon sprite (generated)\n" +
  "       ------------------------------------------------------------\n" +
  "       Vendored from Tabler Icons (MIT). Do not edit by hand —\n" +
  "       regenerate with: node tools/build-tabler-sprite.js\n" +
  "       Reference with: <svg class=\"ic\"><use href=\"#tb-user\"/></svg>\n" +
  "       ============================================================ -->\n" +
  symbols.join("\n") +
  "\n</svg>\n";

fs.writeFileSync(OUT, out);
console.log("wrote", path.relative(ROOT, OUT), "with", symbols.length, "symbols");

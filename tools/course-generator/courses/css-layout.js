"use strict";

module.exports = {
  id: "css-layout",
  title: "CSS & Layout Systems",
  num: 25,
  emoji: "🎨",
  desc: "The box model, flexbox, grid and responsive design — making layouts behave predictably.",
  mission: `# Mission — CSS & Layout Systems

## Why this course exists

CSS layout is often perceived as frustrating guesswork: adding random margins, wrapping things in extra divs, and praying the layout doesn't break when resizing the browser window. Yet CSS layout engines operate on rigorous mathematical algorithms. Once you understand the box model, formatting contexts, flexbox axes, and grid matrices, layouts become deterministic and predictable.

## What the learner can do at the end

- Master the CSS box model and eliminate unexpected element overflow using box-sizing: border-box.
- Control document flow and coordinate systems using relative, absolute, fixed, and sticky positioning.
- Build flexible, one-dimensional component layouts using flexbox axes and alignment properties.
- Design resilient, two-dimensional responsive layouts using CSS Grid and intrinsic sizing (minmax, fr).
- Diagnose and fix common layout bugs (horizontal scrollbars, margin collapsing, stacking context clipping).

## What this course is NOT

- Not a CSS art or visual animation tutorial.
- Not a Tailwind utility framework walkthrough. It focuses on the native browser layout engines.

## Success looks like

When given a complex visual mockup, the learner writes clean, responsive CSS that adapts seamlessly across phone, tablet, and widescreen displays without horizontal overflow or pixel hacks.
`,
  notes: `# Notes — CSS & Layout Systems

## Decisions
- Group into four themes: The Box Model, Normal Flow & Positioning, Modern Layout (Flex/Grid), and Responsive Design.
- Emphasize modern layout standards (Flexbox, Grid, clamp) over historical float hacks.
`,
  resources: `# Resources — CSS & Layout Systems

## Knowledge (primary sources)
- *CSS: The Definitive Guide* by Eric A. Meyer and Estelle Weyl (O'Reilly) — The master authority on CSS layout specifications.
- W3C CSS Box Model Module Level 3 & Level 4.
- Rachel Andrew: *Grid by Example* (gridbyexample.com) — Foundational resource on CSS Grid layout.
- MDN Web Docs: *CSS layout* (developer.mozilla.org).

## Wisdom
- Modern CSS is about intrinsic web design: giving components boundaries and rules, then letting the browser solve the geometry.
`,
  cheatsheetSections: [
    {
      title: "The Universal Box Reset",
      label: "Predictable sizing everywhere",
      code: `*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`,
      lessonN: 2,
      lessonSlug: "box-sizing-border-box-versus-content-box",
      lessonTitle: "Box-sizing: border-box versus content-box"
    },
    {
      title: "Flexbox Quick Reference",
      label: "One-dimensional alignment",
      code: `.flex-container {
  display: flex;
  flex-direction: row;          /* main axis: horizontal */
  justify-content: space-between;/* main axis alignment */
  align-items: center;          /* cross axis alignment */
  gap: 1rem;                    /* spacing between items */
}`,
      lessonN: 5,
      lessonSlug: "flexbox-one-dimensional-layout",
      lessonTitle: "Flexbox: one-dimensional layout"
    },
    {
      title: "CSS Grid Quick Reference",
      label: "Two-dimensional matrix layout",
      code: `.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}`,
      lessonN: 6,
      lessonSlug: "css-grid-two-dimensional-layout",
      lessonTitle: "CSS Grid: two-dimensional layout"
    },
    {
      title: "Responsive Sizing",
      label: "Fluid typography and clamping",
      code: `/* clamp(min, preferred, max) */
font-size: clamp(1rem, 2.5vw, 2rem);
max-width: min(90vw, 1200px);`,
      lessonN: 7,
      lessonSlug: "media-queries-and-responsive-units",
      lessonTitle: "Media queries and responsive units"
    }
  ],
  glossaryGroups: [
    {
      id: "box-model",
      title: "The Box Model",
      terms: [
        { term: "Box model", def: "The foundational CSS layout geometry defining an element's content area, padding, border, and margin.", lesson: 1, tags: ["box-model"] },
        { term: "border-box", def: "A box-sizing mode where declared width and height include padding and borders, preventing expansion.", lesson: 2, tags: ["sizing"] },
        { term: "Margin collapsing", def: "The layout behavior where adjacent vertical margins combine into a single margin equal to the largest value.", lesson: 1, tags: ["layout"] },
        { term: "Normal flow", def: "The default browser placement algorithm laying block elements vertically and inline elements horizontally.", lesson: 3, tags: ["flow"] }
      ]
    },
    {
      id: "flow-position",
      title: "Normal Flow & Positioning",
      terms: [
        { term: "Containing block", def: "The ancestor box that serves as the coordinate frame of reference for sizing and positioning an element.", lesson: 4, tags: ["positioning"] },
        { term: "Stacking context", def: "A three-dimensional conceptual layering along the z-axis determining which elements render in front.", lesson: 4, tags: ["z-index"] },
        { term: "Sticky positioning", def: "A hybrid positioning mode where an element behaves as relative until a scroll threshold, then sticks like fixed.", lesson: 4, tags: ["positioning"] },
        { term: "Inline-block", def: "A display mode formatting as an inline box outwardly while accepting width, height, and vertical margins inwardly.", lesson: 3, tags: ["display"] }
      ]
    },
    {
      id: "modern-layout",
      title: "Flexbox & CSS Grid",
      terms: [
        { term: "Flexbox", def: "A one-dimensional layout model optimized for distributing space and aligning items along a main axis.", lesson: 5, tags: ["flexbox"] },
        { term: "Main axis", def: "The primary direction along which flex items are placed, defined by flex-direction (row or column).", lesson: 5, tags: ["flexbox"] },
        { term: "CSS Grid", def: "A two-dimensional layout system that organizes content into intersecting rows and columns simultaneously.", lesson: 6, tags: ["grid"] },
        { term: "Fractional unit (fr)", def: "A flexible grid unit representing a proportional share of available space in the grid container.", lesson: 6, tags: ["grid"] }
      ]
    },
    {
      id: "responsive-design",
      title: "Responsive Design & Debugging",
      terms: [
        { term: "Media query", def: "A CSS technique applying styles conditionally based on device characteristics like viewport width.", lesson: 7, tags: ["responsive"] },
        { term: "Fluid typography", def: "Text sizing that scales smoothly between minimum and maximum bounds using the clamp() function.", lesson: 7, tags: ["typography"] },
        { term: "Horizontal overflow", def: "A visual defect where content exceeds the viewport width, creating an unwanted horizontal scrollbar.", lesson: 8, tags: ["debugging"] },
        { term: "DevTools Layout overlays", def: "Interactive browser tooling displaying flexbox axes, grid tracks, and box model boundaries.", lesson: 8, tags: ["tools"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "the-box-model-content-padding-border-margin",
      title: "The box model: content, padding, border, margin",
      topic: "The Box Model",
      anim: "PulseNodes",
      lede: "In CSS, everything is a box. Master the four concentric layers — content, padding, border, and margin — that govern all element geometry.",
      winShort: "Calculate element dimensions and account for margin collapsing",
      missionLink: "The foundation of all layout geometry and spacing on the web",
      sec1: {
        title: "The four concentric boxes",
        content: `<p>Every element rendered on a web page is composed of four concentric nested rectangles: <b>Content</b> (the text or image), <b>Padding</b> (clear space inside the border), <b>Border</b> (the outline around padding), and <b>Margin</b> (clear space outside the border separating neighboring elements).</p><p>A critical rule: <b>Vertical margins collapse</b>. If one paragraph has <code>margin-bottom: 20px</code> and the next has <code>margin-top: 30px</code>, the space between them is not 50px — it collapses to the largest value, 30px.</p>`,
        keyIdea: "The box model nests Content within Padding, Border, and Margin; vertical margins collapse."
      },
      predict: {
        q: "A box has margin-bottom: 24px, and the next box has margin-top: 16px. What is the vertical gap between them?",
        a: ["24px (the larger margin)", "40px (sum of both)", "8px (difference)", "0px"],
        c: 0,
        why: "In normal flow, adjoining vertical margins collapse to the maximum of the two values."
      },
      sec2: {
        title: "The concentric layer diagram",
        content: `<p>Visualise how the four layers wrap around an element from outside to inside.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Margin (outer)", lines: ["transparent buffer", "collapses vertically with neighbors"] },
          { title: "Border", lines: ["solid / dashed outline", "visual boundary"] },
          { title: "Padding", lines: ["internal breathing room", "shares element background color"] },
          { title: "Content (inner)", lines: ["text, images, children", "core width and height"] }
        ]
      },
      sec3: {
        title: "Tracing total width calculation",
        content: `<p>Trace how the legacy content-box model calculates the total physical footprint of an element.</p>`,
      },
      trace: {
        code: [
          "width = 200        # content width",
          "padding = 20 * 2    # left + right = 40",
          "border = 5 * 2      # left + right = 10",
          "margin = 15 * 2     # left + right = 30",
          "total_footprint = 200 + 40 + 10 + 30 # 280px total width on screen"
        ],
        steps: [
          { line: 0, vars: { content: "200px" } },
          { line: 1, vars: { with_padding: "240px" } },
          { line: 2, vars: { with_border: "250px" } },
          { line: 4, vars: { total: "280px rendered width" } }
        ]
      },
      practiceIntro: "Test your memory of box model layers.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The spacing between content and the border is <0>.",
          "The spacing outside the border separating adjacent elements is <1>.",
          "The behavior where adjacent vertical margins combine into one is <2>."
        ],
        blanks: [
          { a: ["padding"], why: "Padding provides internal spacing inside the border." },
          { a: ["margin"], why: "Margin provides external spacing outside the border." },
          { a: ["collapsing"], why: "Margin collapsing combines adjoining vertical margins." }
        ]
      },
      win: "You can calculate element dimensions accurately and predict margin collapsing behavior.",
      nextTasks: [
        "Open DevTools and inspect the computed box model diagram of an element.",
        "Observe margin collapsing between two paragraphs by changing margin values.",
        "Notice how background colors fill the padding area but stop at the border."
      ],
      primarySource: "W3C: *CSS Box Model Module Level 3* (w3.org/TR/css-box-3).",
      quiz: [
        {
          q: "Does background-color apply to the margin area of an element?",
          a: [
            "No, margins are always completely transparent buffers",
            "Yes, background-color extends to the outer margin edge",
            "Only on mobile web browsers",
            "Yes, if the element has display: block"
          ],
          c: 0,
          why: "Background colors fill the content and padding areas up to the border; margins are transparent."
        },
        {
          q: "Under what condition does margin collapsing occur?",
          a: [
            "Between adjoining vertical margins of block-level elements in normal flow",
            "Between horizontal left and right margins of inline elements",
            "Between flex items inside a flex container",
            "Between elements styled with display: grid"
          ],
          c: 0,
          why: "Margin collapsing only occurs vertically between normal-flow block elements."
        },
        {
          q: "What is the innermost layer of the CSS box model?",
          a: [
            "Content",
            "Padding",
            "Border",
            "Margin"
          ],
          c: 0,
          why: "Content sits at the core, surrounded successively by padding, border, and margin."
        },
        {
          q: "How can you prevent margin collapsing between a parent element and its first child?",
          a: [
            "Add padding or a border to the parent element, or use display: flow-root",
            "Set the text color to transparent",
            "Delete the child element",
            "Increase the computer screen brightness"
          ],
          c: 0,
          why: "Any padding, border, or new formatting context separates the margins and stops collapsing."
        }
      ]
    },
    {
      n: 2,
      id: "box-sizing-border-box-versus-content-box",
      title: "Box-sizing: border-box versus content-box",
      topic: "The Box Model",
      anim: "PulseNodes",
      lede: "Why does adding padding make your element wider than 100%? Learn why the universal border-box reset is the first line of CSS every professional writes.",
      winShort: "Apply the universal border-box reset to eliminate unexpected layout overflow",
      missionLink: "Eliminates the #1 source of horizontal scrollbars in web layouts",
      sec1: {
        title: "The historical content-box flaw",
        content: `<p>By default, browsers use <code>box-sizing: content-box</code>. In this mode, when you write <code>width: 100%; padding: 20px;</code>, the browser sets the <i>content</i> to 100% and then adds 40px of padding on top. The result: an element 100% + 40px wide that overflows the screen and creates a horizontal scrollbar.</p><p>With <code>box-sizing: border-box</code>, your declared <code>width: 100%</code> is the <i>total outer width</i>. The browser automatically absorbs padding and borders inwardly, keeping your layout predictable.</p>`,
        keyIdea: "border-box absorbs padding and borders inwardly so declared widths remain exact."
      },
      predict: {
        q: "Under box-sizing: border-box, what is the total rendered width of 'width: 300px; padding: 20px; border: 5px solid red;'?",
        a: ["300px", "350px", "250px", "325px"],
        c: 0,
        why: "Under border-box, width: 300px is the final outer width; padding and borders fit inside it."
      },
      sec2: {
        title: "Comparing the two sizing models",
        content: `<p>Contrast how content-box expands outward while border-box absorbs inward.</p>`,
      },
      diagram: {
        boxes: [
          { title: "content-box (Default)", lines: ["width: 300px sets content only", "+ 40px padding + 10px border = 350px rendered width!"] },
          { title: "border-box (Modern)", lines: ["width: 300px sets total border edge", "content shrinks to 250px; rendered width is strictly 300px"] }
        ]
      },
      sec3: {
        title: "Tracing the universal reset",
        content: `<p>Trace how the standard universal reset applies border-box across all elements and pseudo-elements.</p>`,
      },
      trace: {
        code: [
          "*, *::before, *::after {",
          "    box-sizing: border-box;",
          "}",
          "# Every element, button, and card now sizes predictably without math headaches"
        ],
        steps: [
          { line: 0, vars: { selector: "matches all elements and pseudo-elements" } },
          { line: 1, vars: { rule: "border-box inherited everywhere" } },
          { line: 3, vars: { result: "100% wide elements never overflow container boundaries" } }
        ]
      },
      practiceIntro: "Test your memory of box sizing modes.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The property controlling element dimension calculation is box-<0>.",
          "The modern mode where padding is included inside width is <1>-box.",
          "The default legacy mode where padding expands element size is <2>-box."
        ],
        blanks: [
          { a: ["sizing"], why: "box-sizing controls width calculation algorithms." },
          { a: ["border"], why: "border-box keeps total width fixed." },
          { a: ["content"], why: "content-box adds padding outside declared width." }
        ]
      },
      win: "You can apply the universal border-box reset and build layouts without padding-induced overflow bugs.",
      nextTasks: [
        "Add the universal border-box reset to your CSS stylesheet.",
        "Inspect an element in DevTools to confirm box-sizing is set to border-box.",
        "Compare an input element with 100% width under content-box versus border-box."
      ],
      primarySource: "MDN Web Docs: *box-sizing* (developer.mozilla.org/en-US/docs/Web/CSS/box-sizing).",
      quiz: [
        {
          q: "Why is the universal border-box reset recommended on virtually all modern websites?",
          a: [
            "It makes element dimensions intuitive by including padding and border within the declared width",
            "It speeds up website download times over cellular networks",
            "It enables dark mode in all web browsers automatically",
            "It compiles CSS into WebAssembly binaries"
          ],
          c: 0,
          why: "border-box ensures that width: 100% elements never exceed their parent container width."
        },
        {
          q: "Under default content-box, what happens when you add 20px padding to an element with width: 100%?",
          a: [
            "The element becomes 100% plus 40px wide, breaking out of its container and causing horizontal overflow",
            "The browser ignores the padding completely",
            "The element shrinks by 20 pixels",
            "The font size decreases automatically"
          ],
          c: 0,
          why: "content-box adds padding outward on top of the 100% width, causing overflow."
        },
        {
          q: "Why does the standard reset include *::before and *::after alongside *?",
          a: [
            "To ensure pseudo-elements also inherit border-box sizing consistently",
            "To remove all animations from the website",
            "Because CSS requires all selectors to be at least 15 characters long",
            "To force browsers to reload stylesheets"
          ],
          c: 0,
          why: "The universal * selector does not match pseudo-elements in some browser engines."
        },
        {
          q: "Does box-sizing: border-box include margins in the width calculation?",
          a: [
            "No, margins remain external spacing outside the border edge",
            "Yes, border-box includes margins, borders, and padding",
            "Only on vertical block elements",
            "Only when using CSS Grid"
          ],
          c: 0,
          why: "border-box sets the boundary at the border edge; margins remain outside."
        }
      ]
    },
    {
      n: 3,
      id: "display-inline-block-and-flow",
      title: "Display: inline, block, and normal flow",
      topic: "Normal Flow & Positioning",
      anim: "PulseNodes",
      lede: "How does the browser decide where elements go before you style them? Master inline versus block elements, normal flow, and formatting contexts.",
      winShort: "Differentiate block, inline, and inline-block formatting behaviors",
      missionLink: "Explains default browser document layout algorithms",
      sec1: {
        title: "Block versus inline flow",
        content: `<p>In normal document flow, elements behave in one of two fundamental ways: <b>block</b> or <b>inline</b>.</p><p><b>Block elements</b> (like <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>) start on a new line and expand horizontally to fill 100% of their container's width. <b>Inline elements</b> (like <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>) flow along with text, ignoring top/bottom margins and declared width/height.</p>`,
        keyIdea: "Block elements take full width on a new line; inline elements flow like words inside text."
      },
      predict: {
        q: "What happens if you set 'width: 300px; height: 100px;' on a standard <span> element?",
        a: [
          "The browser ignores the width and height properties because spans are inline",
          "The span expands to 300px by 100px immediately",
          "The browser throws an unhandled CSS syntax error",
          "The span is permanently deleted from the document"
        ],
        c: 0,
        why: "Inline elements do not accept width or height properties; they size to their text content."
      },
      sec2: {
        title: "The display tri-factor",
        content: `<p>Understand how display: inline-block bridges the gap between inline flow and box dimensions.</p>`,
      },
      diagram: {
        boxes: [
          { title: "display: block", lines: ["new line, 100% width default", "respects width, height, all margins"] },
          { title: "display: inline", lines: ["flows in text line", "ignores width, height, vertical margins"] },
          { title: "display: inline-block", lines: ["flows in text line", "respects width, height, and all margins!"] }
        ]
      },
      sec3: {
        title: "Tracing normal document flow",
        content: `<p>Trace how a browser lays out mixed block and inline elements down the page.</p>`,
      },
      trace: {
        code: [
          "<h1>Header (Block: line 1)</h1>",
          "<p>Paragraph with <b>bold text</b> and <a>link</a> (all inline in line 2)</p>",
          "<button>Button (inline-block: width respected, sits on line)</button>"
        ],
        steps: [
          { line: 0, vars: { h1: "breaks line; occupies 100% container width" } },
          { line: 1, vars: { p: "starts new line; bold and link flow horizontally inside" } },
          { line: 2, vars: { button: "inline-block: sits in text flow but obeys padding/height" } }
        ]
      },
      practiceIntro: "Test your memory of display modes.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "An element that breaks onto a new line and spans 100% width has display: <0>.",
          "An element that flows within text and ignores width has display: <1>.",
          "An element that flows inline while respecting width and height is inline-<2>."
        ],
        blanks: [
          { a: ["block"], why: "Block elements take full width on a new line." },
          { a: ["inline"], why: "Inline elements flow within line boxes." },
          { a: ["block"], why: "inline-block combines inline flow with block dimensioning." }
        ]
      },
      win: "You can choose the correct display mode to control whether elements stack vertically or flow horizontally.",
      nextTasks: [
        "Change a link (&lt;a&gt;) to display: inline-block to apply vertical padding and height.",
        "Inspect the display property of headers, divs, and spans in DevTools.",
        "Observe how display: none removes an element from layout entirely."
      ],
      primarySource: "W3C: *CSS Display Module Level 3* (w3.org/TR/css-display-3).",
      quiz: [
        {
          q: "What is the difference between 'display: none' and 'visibility: hidden'?",
          a: [
            "display: none removes the element from document layout entirely; visibility: hidden hides it while preserving its empty space",
            "display: none deletes the HTML source file; visibility: hidden does not",
            "display: none only works on images; visibility: hidden works on text",
            "There is no difference between the two properties"
          ],
          c: 0,
          why: "display: none eliminates the box from flow; visibility: hidden keeps the box geometry."
        },
        {
          q: "Why does vertical padding on an inline <span> overlap neighboring text lines?",
          a: [
            "Inline boxes do not push surrounding line boxes vertically in normal flow",
            "The browser rendering engine is experiencing a bug",
            "Spans cannot have background colors",
            "The computer graphics card is running out of memory"
          ],
          c: 0,
          why: "Inline vertical padding renders visually but does not alter the line-height spacing."
        },
        {
          q: "Which element is a native inline element by default?",
          a: [
            "<span>",
            "<div>",
            "<h1>",
            "<section>"
          ],
          c: 0,
          why: "<span> is the canonical generic inline text container."
        },
        {
          q: "What formatting advantage does 'display: inline-block' provide for buttons?",
          a: [
            "It allows buttons to sit side-by-side while respecting custom width, height, and padding",
            "It makes buttons clickable without needing JavaScript",
            "It converts buttons into 3D graphics",
            "It automatically centers buttons on the screen"
          ],
          c: 0,
          why: "inline-block lets elements sit adjacent in flow while honoring exact box dimensions."
        }
      ]
    },
    {
      n: 4,
      id: "positioning-relative-absolute-fixed-sticky",
      title: "Positioning: relative, absolute, fixed, sticky",
      topic: "Normal Flow & Positioning",
      anim: "PulseNodes",
      lede: "Break out of normal flow when you need to. Learn how relative, absolute, fixed, and sticky positioning coordinate frames and stacking contexts.",
      winShort: "Position tooltips, overlays, and sticky headers using CSS position properties",
      missionLink: "Enables creation of complex UI overlays and floating navigation components",
      sec1: {
        title: "The four positioning modes",
        content: `<p>Normal flow places elements in order. The <code>position</code> property lets you override this:</p><p><b>relative</b> moves an element without removing its original space. <b>absolute</b> removes the element from flow and positions it relative to its closest <i>positioned ancestor</i>. <b>fixed</b> positions relative to the browser viewport. <b>sticky</b> acts as relative until scrolled past a threshold, then sticks like fixed.</p>`,
        keyIdea: "Absolute elements position relative to their closest ancestor with position other than static."
      },
      predict: {
        q: "If an element has 'position: absolute; top: 0;', but none of its parents have a position property, what does it align to?",
        a: [
          "The initial containing block (the viewport / page root)",
          "Its immediate parent div anyway",
          "The center of the computer screen",
          "It disappears completely"
        ],
        c: 0,
        why: "Without a positioned ancestor, an absolute element resolves against the root viewport."
      },
      sec2: {
        title: "The containing block anchor pattern",
        content: `<p>The classic pattern: place position: relative on the parent to anchor an absolute child.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Parent (.card)", lines: ["position: relative", "establishes containing block"] },
          { title: "Child (.badge)", lines: ["position: absolute; top: 10px; right: 10px;", "anchors to card corner perfectly"] },
          { title: "Sticky Header (.nav)", lines: ["position: sticky; top: 0;", "scrolls with page until hitting top, then locks"] }
        ]
      },
      sec3: {
        title: "Tracing stacking context layering",
        content: `<p>Trace how z-index operates within local stacking contexts to determine front-to-back paint order.</p>`,
      },
      trace: {
        code: [
          "# .parent (z-index: 1, creates stacking context)",
          "#   .child (z-index: 9999)",
          "# .sibling (z-index: 2)",
          "# Result: .sibling paints IN FRONT of .child despite 9999!",
          "# Reason: .child is trapped inside parent's level-1 stacking context"
        ],
        steps: [
          { line: 0, vars: { parent_context: "level 1 stacking context" } },
          { line: 1, vars: { child_internal: "z-index 9999 internal to parent" } },
          { line: 2, vars: { sibling_context: "level 2 stacking context" } },
          { line: 3, vars: { result: "level 2 beats level 1; child cannot escape parent context" } }
        ]
      },
      practiceIntro: "Test your recall of CSS positioning modes.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The positioning mode that keeps an element locked to the viewport is <0>.",
          "An absolute element positions relative to its nearest <1> ancestor.",
          "The hybrid positioning mode that sticks on scroll is position: <2>."
        ],
        blanks: [
          { a: ["fixed"], why: "fixed positions relative to the screen viewport." },
          { a: ["positioned"], why: "Ancestors must have position other than static." },
          { a: ["sticky"], why: "sticky toggles between relative and fixed based on scroll." }
        ]
      },
      win: "You can position badges, tooltips, sticky navigation headers, and modal overlays with mathematical precision.",
      nextTasks: [
        "Create a card with position: relative and anchor an absolute badge to its top-right corner.",
        "Implement a sticky navigation header using position: sticky and top: 0.",
        "Inspect a stacking context using the 3D Layers tool in Chrome DevTools."
      ],
      primarySource: "W3C: *CSS Positioned Layout Module Level 3* (w3.org/TR/css-position-3).",
      quiz: [
        {
          q: "Why must a parent container have 'position: relative' when anchoring an 'position: absolute' child?",
          a: [
            "To establish a containing block coordinate frame for the absolute child",
            "To make the parent element animate smoothly",
            "To prevent the browser from deleting the child element",
            "To convert the child element into an inline tag"
          ],
          c: 0,
          why: "An absolute element looks up the DOM tree for the nearest ancestor with position !== static."
        },
        {
          q: "What happens to the space originally occupied by an element when it becomes 'position: absolute'?",
          a: [
            "It is completely removed from flow, and subsequent elements move up to fill the void",
            "The space remains as an empty white rectangle",
            "The space doubles in size",
            "The browser crashes immediately"
          ],
          c: 0,
          why: "Absolute elements are pulled out of flow; other elements layout as if it never existed."
        },
        {
          q: "Why does 'z-index: 999999' sometimes fail to bring an element in front of another element?",
          a: [
            "The element is confined inside a parent stacking context that has a lower z-index than the other element",
            "CSS z-index values cannot exceed 100",
            "The computer screen does not support 3D coordinates",
            "The z-index property only works on images"
          ],
          c: 0,
          why: "Stacking contexts are hierarchical; child elements cannot escape their parent's stack level."
        },
        {
          q: "Why might 'position: sticky; top: 0;' fail to stick when scrolling?",
          a: [
            "An ancestor element has overflow: hidden, clip, or auto, which confines the scroll container",
            "Sticky positioning only works in desktop Safari browsers",
            "The top property must be set to a negative number",
            "The element must have a red background color"
          ],
          c: 0,
          why: "overflow: hidden on any ancestor clips the scroll boundary and breaks sticky behavior."
        }
      ]
    },
    {
      n: 5,
      id: "flexbox-one-dimensional-layout",
      title: "Flexbox: one-dimensional layout",
      topic: "Modern Layout (Flex/Grid)",
      anim: "PulseNodes",
      lede: "Centering things in CSS used to be a meme; Flexbox made it trivial. Master the main axis, cross axis, space distribution, and alignment.",
      winShort: "Build flexible, responsive one-dimensional component layouts using Flexbox",
      missionLink: "The primary tool for navigation bars, card rows, and component layouts",
      sec1: {
        title: "The two axes of Flexbox",
        content: `<p>Flexbox is a <b>one-dimensional layout model</b>: it lays items out along a single primary axis at a time. The <b>main axis</b> is defined by <code>flex-direction: row</code> (horizontal, default) or <code>column</code> (vertical). The <b>cross axis</b> runs perpendicular to it.</p><p>All flexbox properties map to these two axes: <code>justify-content</code> aligns items along the main axis; <code>align-items</code> aligns items across the cross axis. Learn the axes, and you master Flexbox.</p>`,
        keyIdea: "justify-content controls the main axis; align-items controls the cross axis."
      },
      predict: {
        q: "If flex-direction is set to 'column', which property centers items horizontally?",
        a: ["align-items: center", "justify-content: center", "text-align: center", "margin: auto 0"],
        c: 0,
        why: "When flex-direction is column, the cross axis is horizontal; align-items controls the cross axis."
      },
      sec2: {
        title: "The Flexbox axis coordinate system",
        content: `<p>Visualise how properties map to the main axis and cross axis under row direction.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Main Axis (Horizontal)", lines: ["justify-content: space-between", "flex-grow, flex-shrink, gap"] },
          { title: "Cross Axis (Vertical)", lines: ["align-items: center", "align-self: flex-end"] },
          { title: "Wrapping", lines: ["flex-wrap: wrap", "wraps onto new lines if space runs out"] }
        ]
      },
      sec3: {
        title: "Tracing the perfect center",
        content: `<p>Trace how three lines of flexbox achieve perfect horizontal and vertical centering.</p>`,
      },
      trace: {
        code: [
          "display: flex;",
          "justify-content: center; # centers along horizontal main axis",
          "align-items: center;     # centers along vertical cross axis",
          "# Content is mathematically centered in the container"
        ],
        steps: [
          { line: 0, vars: { container: "flex formatting context established" } },
          { line: 1, vars: { main_axis: "items centered horizontally" } },
          { line: 2, vars: { cross_axis: "items centered vertically" } },
          { line: 3, vars: { result: "perfect center in 3 lines of code" } }
        ]
      },
      practiceIntro: "Test your memory of Flexbox alignment properties.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "To establish a flex container, set display to <0>.",
          "To align items along the primary main axis, use justify-<1>.",
          "To add uniform spacing between flex items without margins, use <2>."
        ],
        blanks: [
          { a: ["flex"], why: "display: flex enables the flex layout engine." },
          { a: ["content"], why: "justify-content distributes space along the main axis." },
          { a: ["gap"], why: "The gap property adds spacing between flex items." }
        ]
      },
      win: "You can build responsive navigation bars, centered dialogs, and flexible card rows with zero guesswork.",
      nextTasks: [
        "Center an element inside a full-height container using display: flex.",
        "Build a navigation bar with a logo on the left and links on the right using justify-content: space-between.",
        "Add gap: 1rem between flex items instead of using manual margins."
      ],
      primarySource: "W3C: *CSS Flexible Box Layout Module Level 1* (w3.org/TR/css-flexbox-1).",
      quiz: [
        {
          q: "What does 'justify-content: space-between' do in a flex container?",
          a: [
            "Places the first item at the start edge, the last item at the end edge, and distributes remaining space evenly between items",
            "Centers all items tightly in the middle of the container",
            "Adds a 20-pixel border between every item",
            "Hides all items except the first and last"
          ],
          c: 0,
          why: "space-between pushes outer items to the boundary and distributes residual space between them."
        },
        {
          q: "What does 'flex-grow: 1' mean on a flex child item?",
          a: [
            "The item will expand to absorb an available proportional share of unused space along the main axis",
            "The item font size will increase by one point",
            "The item will double in size every second",
            "The item will break onto a new row"
          ],
          c: 0,
          why: "flex-grow distributes free container space proportionally among growing flex items."
        },
        {
          q: "How does the 'gap' property improve flexbox layouts over traditional margins?",
          a: [
            "It only applies spacing between items, avoiding awkward outer margins on the first and last elements",
            "It automatically optimizes image compression",
            "It works even when display is set to none",
            "It requires zero CSS code to be written"
          ],
          c: 0,
          why: "gap handles gutters between items natively without needing :first-child or :last-child hacks."
        },
        {
          q: "What property allows flex items to wrap onto multiple lines when the container runs out of room?",
          a: [
            "flex-wrap: wrap",
            "flex-direction: multiple",
            "overflow: wrap",
            "display: multiline"
          ],
          c: 0,
          why: "flex-wrap: wrap permits items to break onto multi-line cross axes when width is constrained."
        }
      ]
    },
    {
      n: 6,
      id: "css-grid-two-dimensional-layout",
      title: "CSS Grid: two-dimensional layout",
      topic: "Modern Layout (Flex/Grid)",
      anim: "PulseNodes",
      lede: "Flexbox does lines; CSS Grid does matrices. Master two-dimensional layouts, fractional fr units, auto-fit repeaters, and named grid areas.",
      winShort: "Design responsive two-dimensional grid layouts with auto-fit and minmax",
      missionLink: "The most powerful layout engine built into modern web browsers",
      sec1: {
        title: "Two-dimensional matrix control",
        content: `<p>Flexbox excels at one-dimensional rows or columns, but coordinating rows and columns simultaneously in Flexbox requires awkward nested divs. <b>CSS Grid</b> is a true two-dimensional layout system.</p><p>You define rows and columns on the container, and child items place themselves into the resulting matrix. The <b>fr (fractional) unit</b> represents a fraction of remaining free space, making responsive grids effortless.</p>`,
        keyIdea: "CSS Grid coordinates rows and columns simultaneously using fractional units."
      },
      predict: {
        q: "In 'grid-template-columns: 1fr 2fr', how is remaining free space distributed between the two columns?",
        a: [
          "The second column gets twice as much space as the first column",
          "Both columns get identical widths",
          "The first column gets 100 pixels; the second gets 200 pixels",
          "The second column is hidden from view"
        ],
        c: 0,
        why: "fr divides free space proportionally: 1fr and 2fr divide space into 3 parts (1/3 and 2/3)."
      },
      sec2: {
        title: "The holy grail responsive grid line",
        content: `<p>The single most powerful line of modern CSS: a fully responsive auto-fitting grid that needs zero media queries.</p>`,
      },
      diagram: {
        boxes: [
          { title: "repeat()", lines: ["repeat track definition", "avoids typing manual columns"] },
          { title: "auto-fit", lines: ["fits as many columns as fit", "collapses empty tracks to 0"] },
          { title: "minmax(280px, 1fr)", lines: ["never shrink below 280px", "expand proportionally to fill space"] }
        ]
      },
      sec3: {
        title: "Tracing the responsive auto-fit calculation",
        content: `<p>Trace how repeat(auto-fit, minmax(250px, 1fr)) adapts across screen resizing without media queries.</p>`,
      },
      trace: {
        code: [
          "# Screen width: 1200px -> fits 4 columns (1200 / 250 = 4.8)",
          "# Screen width: 800px  -> fits 3 columns (800 / 250 = 3.2)",
          "# Screen width: 550px  -> fits 2 columns (550 / 250 = 2.2)",
          "# Screen width: 320px  -> fits 1 column (320 / 250 = 1.2)",
          "# Result: 4 -> 3 -> 2 -> 1 column responsive collapse with ZERO media queries!"
        ],
        steps: [
          { line: 0, vars: { desktop: "4 columns at 300px each" } },
          { line: 1, vars: { tablet: "3 columns at 266px each" } },
          { line: 2, vars: { small_tablet: "2 columns at 275px each" } },
          { line: 3, vars: { mobile: "1 column filling 100% viewport width" } }
        ]
      },
      practiceIntro: "Test your memory of CSS Grid syntax.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The unit representing a fraction of available grid space is the <0> unit.",
          "The function setting a minimum and maximum track size is <1>().",
          "The property defining column widths in a grid container is grid-template-<2>."
        ],
        blanks: [
          { a: ["fr"], why: "fr represents fractional shares of residual grid space." },
          { a: ["minmax"], why: "minmax(min, max) clamps track sizes flexibly." },
          { a: ["columns"], why: "grid-template-columns sets column track sizes." }
        ]
      },
      win: "You can build fluid, multi-column card grids that adapt to any screen size without writing media queries.",
      nextTasks: [
        "Create a card grid using grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)).",
        "Inspect the grid tracks using the Grid overlay in Chrome or Firefox DevTools.",
        "Define named grid areas for a page header, sidebar, main, and footer."
      ],
      primarySource: "Rachel Andrew, *Grid by Example* (gridbyexample.com).",
      quiz: [
        {
          q: "What is the primary architectural difference between Flexbox and CSS Grid?",
          a: [
            "Flexbox is one-dimensional (content-out); CSS Grid is two-dimensional (layout-in)",
            "Flexbox only works on mobile phones; CSS Grid only works on desktop computers",
            "CSS Grid requires JavaScript; Flexbox does not",
            "Flexbox cannot use the gap property"
          ],
          c: 0,
          why: "Grid manages rows and columns simultaneously; Flexbox organizes along a single axis."
        },
        {
          q: "What does 'grid-template-columns: repeat(3, 1fr)' create?",
          a: [
            "Three equal-width columns that each take one-third of the available space",
            "A single column that repeats three times down the page",
            "Three rows with 100px height each",
            "A grid with three empty text boxes"
          ],
          c: 0,
          why: "repeat(3, 1fr) creates three equal columns sharing space equally."
        },
        {
          q: "What is the purpose of the 'minmax()' function in CSS Grid track definitions?",
          a: [
            "It defines a sizing bound where tracks cannot shrink below min, but can expand up to max",
            "It calculates the average temperature of the user computer",
            "It limits the maximum number of words allowed in a paragraph",
            "It sets the volume of audio video players"
          ],
          c: 0,
          why: "minmax(250px, 1fr) prevents cards from getting too small while allowing them to grow."
        },
        {
          q: "What does 'grid-column: span 2' do on a child grid item?",
          a: [
            "Causes the item to stretch across two column tracks in the grid matrix",
            "Duplicates the item into two copies",
            "Increases the font size by a factor of two",
            "Waits two seconds before rendering the item"
          ],
          c: 0,
          why: "span 2 instructs the item to occupy two adjacent column tracks."
        }
      ]
    },
    {
      n: 7,
      id: "media-queries-and-responsive-units",
      title: "Media queries and responsive units",
      topic: "Responsive Design & Debugging",
      anim: "PulseNodes",
      lede: "Fixed pixel layouts belong in the 1990s. Master mobile-first media queries, relative units (rem, em), and mathematical functions like clamp() and min().",
      winShort: "Implement mobile-first responsive breakpoints and fluid clamp typography",
      missionLink: "Ensures flawless rendering across all screen sizes from mobile to ultrawide",
      sec1: {
        title: "Mobile-first responsive architecture",
        content: `<p>A <b>mobile-first</b> approach authors default styles for the smallest viewport first, using <code>@media (min-width: 768px)</code> to layer on complexity as screen real estate expands. This reduces CSS bloat on mobile devices and avoids overriding desktop styles.</p><p>Complement media queries with modern mathematical functions like <code>clamp(min, preferred, max)</code>. With <code>font-size: clamp(1rem, 2vw + 1rem, 2.5rem)</code>, text scales smoothly with screen size without a single breakpoint.</p>`,
        keyIdea: "Author mobile-first with min-width queries; use clamp() for fluid, continuous scaling."
      },
      predict: {
        q: "What does 'font-size: clamp(16px, 4vw, 32px)' do as the viewport width expands from 300px to 2000px?",
        a: [
          "Scales smoothly with viewport width, never shrinking below 16px and never growing above 32px",
          "Remains locked permanently at 16px regardless of screen size",
          "Toggles randomly between 16px and 32px",
          "Causes the font to disappear on mobile devices"
        ],
        c: 0,
        why: "clamp() mathematically bounds the dynamic 4vw value between 16px min and 32px max."
      },
      sec2: {
        title: "The relative unit taxonomy",
        content: `<p>Understand why rem units protect user accessibility preferences over hardcoded pixels.</p>`,
      },
      diagram: {
        boxes: [
          { title: "rem (Root EM)", lines: ["relative to root <html> font-size", "respects user browser accessibility settings"] },
          { title: "em", lines: ["relative to parent font-size", "compounds in nested elements"] },
          { title: "vw / vh (Viewport)", lines: ["1vw = 1% of viewport width", "1vh = 1% of viewport height"] }
        ]
      },
      sec3: {
        title: "Tracing mobile-first media query evaluation",
        content: `<p>Trace how a browser evaluates min-width media queries as screen width expands.</p>`,
      },
      trace: {
        code: [
          "/* Default (Mobile): 1 column */",
          ".grid { display: flex; flex-direction: column; }",
          "/* Tablet breakpoint (>= 768px): 2 columns */",
          "@media (min-width: 768px) { .grid { flex-direction: row; } }",
          "/* Desktop breakpoint (>= 1024px): 3 columns */",
          "@media (min-width: 1024px) { .grid { gap: 2rem; } }"
        ],
        steps: [
          { line: 1, vars: { screen_400px: "mobile styles: 1 vertical column" } },
          { line: 3, vars: { screen_800px: "min-width: 768px triggers: switched to row" } },
          { line: 5, vars: { screen_1200px: "min-width: 1024px triggers: gap expanded" } }
        ]
      },
      practiceIntro: "Test your recall of responsive units and queries.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The CSS unit relative to the root html element font-size is <0>.",
          "The CSS function clamping values between min, val, and max is <1>().",
          "Authoring styles for phones first using min-width is <2>-first design."
        ],
        blanks: [
          { a: ["rem"], why: "rem scales based on the root font-size setting." },
          { a: ["clamp"], why: "clamp(min, preferred, max) bounds fluid values." },
          { a: ["mobile"], why: "Mobile-first builds progressive enhancements upward." }
        ]
      },
      win: "You can build fluid responsive layouts and accessible typography that adapt gracefully across all device viewports.",
      nextTasks: [
        "Replace hardcoded px font sizes with accessible rem units.",
        "Implement fluid heading typography using clamp().",
        "Toggle responsive device mode in DevTools to test your site from 320px to 1440px."
      ],
      primarySource: "MDN Web Docs: *Responsive design* (developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design).",
      quiz: [
        {
          q: "Why are 'rem' units preferred over 'px' for font sizing in accessible design?",
          a: [
            "rem units respect user font-size accessibility preferences set in browser settings; px overrides them",
            "rem units download faster over the internet than px units",
            "px units cannot be displayed on Apple Retina screens",
            "rem units automatically convert English into other languages"
          ],
          c: 0,
          why: "Users with visual impairments configure larger default browser fonts; rem scales with this setting."
        },
        {
          q: "What is the primary advantage of a mobile-first media query strategy?",
          a: [
            "It writes simpler default styles for constrained screens and progressively enhances for larger displays",
            "It allows websites to run without internet connections",
            "It completely eliminates the need for CSS Grid",
            "It increases mobile battery life by fifty percent"
          ],
          c: 0,
          why: "Mobile-first keeps mobile styles lightweight and avoids writing desktop overrides."
        },
        {
          q: "What does '100vw' represent in CSS?",
          a: [
            "100 percent of the current viewport width",
            "100 vector watts of power",
            "100 virtual words of text",
            "The maximum width of a computer monitor"
          ],
          c: 0,
          why: "vw stands for viewport width; 1vw equals 1/100th of the visible browser window width."
        },
        {
          q: "What does the 'min(90vw, 1200px)' pattern achieve on a container max-width?",
          a: [
            "Caps the container at 1200px on large screens, while leaving a 5% margin on screens narrower than 1200px",
            "Shrinks the container to 0 pixels on mobile phones",
            "Forces the container to be 1200px wide on all mobile phones",
            "Deletes content that exceeds 1200 characters"
          ],
          c: 0,
          why: "min() chooses whichever value is smaller, providing automatic breathing room on small screens."
        }
      ]
    },
    {
      n: 8,
      id: "debugging-css-layout-bugs",
      title: "Debugging CSS layout bugs",
      topic: "Responsive Design & Debugging",
      anim: "PulseNodes",
      lede: "Why is there a mystery horizontal scrollbar on mobile? Why did that element collapse to zero height? Master visual debugging techniques and DevTools overlays.",
      winShort: "Diagnose and fix layout overflow, z-index clipping, and collapse bugs using DevTools",
      missionLink: "The essential troubleshooting skill for production frontend CSS craft",
      sec1: {
        title: "The mystery horizontal scrollbar",
        content: `<p>The most common bug on mobile web pages is an unexpected horizontal scrollbar allowing the page to wobble sideways. This is almost always caused by an element whose width plus margins, padding, or fixed pixel dimension exceeds 100vw.</p><p>Instead of guessing, use the outline debugging trick: <code>* { outline: 1px solid red !important; }</code>. Every element's boundary box is highlighted, immediately exposing which rogue element is protruding past the viewport boundary.</p>`,
        keyIdea: "Use outline or DevTools overflow inspection to instantly identify rogue elements causing horizontal scroll."
      },
      predict: {
        q: "Why is 'outline: 1px solid red' better than 'border: 1px solid red' when debugging layout boundaries?",
        a: [
          "Outlines do not take up space in the box model, so they do not alter the layout they are debugging",
          "Borders cannot be rendered in red color in modern browsers",
          "Outlines automatically fix the layout bug for you",
          "Borders only work on text paragraphs"
        ],
        c: 0,
        why: "Borders add width to elements and can cause new overflow bugs; outlines take zero layout space."
      },
      sec2: {
        title: "The diagnostic toolbox",
        content: `<p>Learn the standard developer tools for debugging layout anomalies.</p>`,
      },
      diagram: {
        boxes: [
          { title: "DevTools Layout Tab", lines: ["toggle Flexbox and Grid overlays", "view track lines and gap sizes"] },
          { title: "Computed Styles", lines: ["view resolved pixel dimensions", "see which CSS rule won cascade"] },
          { title: "Scroll Overflow Probe", lines: ["scroll right on mobile viewport", "inspect element touching edge"] }
        ]
      },
      sec3: {
        title: "Tracing a rogue overflow culprit",
        content: `<p>Trace how a single fixed-width image breaks page responsiveness on mobile viewports.</p>`,
      },
      trace: {
        code: [
          "# Viewport width: 375px (iPhone)",
          "# Container: width: 100% (375px)",
          "# Rogue element: <img src='hero.png' style='width: 600px;'>",
          "# Overflow: 600px > 375px -> page gains 225px horizontal scroll wobble!",
          "# Fix: img { max-width: 100%; height: auto; }"
        ],
        steps: [
          { line: 0, vars: { screen: "375px mobile viewport" } },
          { line: 2, vars: { culprit: "fixed 600px image width" } },
          { line: 3, vars: { symptom: "horizontal scrollbar appears" } },
          { line: 4, vars: { remedy: "fluid max-width: 100% clamps image to container" } }
        ]
      },
      practiceIntro: "Test your memory of layout debugging strategies.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A visual debugging rule that does not add box model width is <0>.",
          "The property to clamp images from exceeding their container is max-<1>: 100%.",
          "The DevTools panel showing final resolved pixel values is <2> styles."
        ],
        blanks: [
          { a: ["outline"], why: "Outlines render outside the box model without taking up space." },
          { a: ["width"], why: "max-width: 100% ensures media shrinks responsively." },
          { a: ["Computed"], why: "Computed styles show the final calculated values applied by the browser." }
        ]
      },
      win: "You can diagnose and resolve horizontal scrollbars, collapsing containers, and z-index bugs in minutes.",
      nextTasks: [
        "Add img, video { max-width: 100%; height: auto; } to your base stylesheet.",
        "Use the DevTools console one-liner to find overflowing elements on a page.",
        "Inspect a flexbox container with the DevTools Flex overlay enabled."
      ],
      primarySource: "Chrome DevTools Documentation: *Inspect CSS Grid and Flexbox Layouts* (developer.chrome.com).",
      quiz: [
        {
          q: "What is the primary cause of unwanted horizontal scrollbars on mobile websites?",
          a: [
            "An element with a fixed pixel width, unconstrained image, or large margin exceeding the viewport width",
            "The mobile phone battery is below twenty percent",
            "The website contains more than three colors",
            "The browser is downloading a software update"
          ],
          c: 0,
          why: "Any child element whose total rendered width exceeds the viewport width causes horizontal overflow."
        },
        {
          q: "Why do floating elements sometimes cause parent containers to collapse to zero height?",
          a: [
            "Floated elements are removed from normal flow, leaving the parent with no in-flow height unless cleared",
            "Floats delete content from the DOM tree",
            "Browsers charge a fee for floated elements",
            "Floats cannot be used with text"
          ],
          c: 0,
          why: "Floating takes elements out of flow; parents need 'display: flow-root' or clearfix to enclose them."
        },
        {
          q: "What CSS rule should be applied to all images to prevent them from breaking responsive containers?",
          a: [
            "img { max-width: 100%; height: auto; }",
            "img { width: 1000px; }",
            "img { display: none; }",
            "img { position: absolute; }"
          ],
          c: 0,
          why: "max-width: 100% allows images to scale down to fit small screens while preserving aspect ratio."
        },
        {
          q: "What does the 'Computed' tab in browser DevTools show?",
          a: [
            "The final, resolved values of all CSS properties after inheritance, cascading, and unit calculations",
            "The source code written by the developer before compilation",
            "The server database tables",
            "The user internet browsing history"
          ],
          c: 0,
          why: "The Computed panel shows the actual pixel measurements and resolved styles applied by the engine."
        }
      ]
    }
  ]
};

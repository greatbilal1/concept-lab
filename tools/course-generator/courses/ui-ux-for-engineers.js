"use strict";

module.exports = {
  id: "ui-ux-for-engineers",
  title: "UI & UX for Engineers",
  num: 108,
  emoji: "🎨",
  desc: "Design thinking, color theory, typography, and spacing for developers building interfaces.",
  mission: `# Mission — UI & UX for Engineers

## Why this course exists

Engineers often believe that beautiful, intuitive user interfaces require mysterious artistic talent. In reality, great interface design is not art: it is an objective system of constraints, mathematical scales, visual hierarchy, affordances, and cognitive psychology. When developers understand spacing grids, typographic scales, color theory, and usability heuristics, they stop guessing CSS numbers and build interfaces that look professional, trustworthy, and effortless to use.

## What the learner can do at the end

- Apply design thinking and Norman doors principles (affordances, signifiers, feedback) to software controls.
- Establish clear visual hierarchy matching natural human eye scanning patterns (F-pattern and Z-pattern).
- Construct mathematical spacing systems using the industry-standard 8pt/4pt grid.
- Reduce cognitive load through chunking, progressive disclosure, and Hick's Law.
- Select and configure typographic scales, line heights, and optimal reading line lengths (45–75 characters).
- Build cohesive color systems using the 60-30-10 rule and functional semantic palettes (primary, neutral, danger, success).
- Design responsive empty states, skeletons, optimistic UI, and micro-interactions that communicate system status.
- Implement reusable design tokens and evaluate interfaces against Nielsen Norman's 10 Usability Heuristics.

## What this course is NOT

- Not an illustration, 3D graphics, or logo branding course.
- Not a Figma vector tool tutorial. It teaches universal UI/UX principles directly applicable to frontend code and CSS.

## Success looks like

When given a cluttered, amateurish web view, the learner systematically diagnoses spacing inconsistencies, establishes a typographic hierarchy, refines the color palette, and increases usability metrics without needing a dedicated designer.
`,
  notes: `# Notes — UI & UX for Engineers

## Decisions
- Group into four themes: Foundations & Hierarchy, Spacing & Layout, Typography & Color, and Feedback & Usability.
- Ground explanations in human cognitive psychology (Gestalt principles, cognitive load theory) and mathematical design token systems.
`,
  resources: `# Resources — UI & UX for Engineers

## Knowledge (primary sources)
- *Refactoring UI* by Adam Wathan and Steve Schoger.
- *The Design of Everyday Things* by Don Norman.
- *Don't Make Me Think* by Steve Krug.
- Nielsen Norman Group: *10 Usability Heuristics for User Interface Design* (nngroup.com).

## Wisdom
- Good design is invisible: when an interface is designed well, the user focuses on their goal. When an interface is designed poorly, the user struggles with the interface.
`,
  cheatsheetSections: [
    {
      title: "The 8pt Spacing Grid",
      label: "Consistent spatial cadence",
      code: `/* Standard spacing tokens based on multiples of 4 and 8 */
--space-1: 4px;   /* micro adjustments */
--space-2: 8px;   /* tight inner padding, icon gaps */
--space-3: 12px;  /* form input padding */
--space-4: 16px;  /* standard card padding */
--space-6: 24px;  /* component separation */
--space-8: 32px;  /* major section gaps */
--space-12: 48px; /* page layout spacing */`,
      lessonN: 3,
      lessonSlug: "spacing-systems-and-grids",
      lessonTitle: "Spacing Systems & The 8pt Grid"
    },
    {
      title: "Typographic Scale",
      label: "Mathematical hierarchy",
      code: `/* Major Third (1.250) or Perfect Fourth (1.333) Scale */
--text-xs: 12px;  /* captions, badges */
--text-sm: 14px;  /* secondary text, hints */
--text-base: 16px;/* standard body reading text */
--text-lg: 20px;  /* subheadings, card titles */
--text-xl: 24px;  /* section titles (h3) */
--text-2xl: 32px; /* page titles (h2) */
--text-3xl: 40px; /* hero titles (h1) */`,
      lessonN: 5,
      lessonSlug: "typography-scale-and-readability",
      lessonTitle: "Typography Scales & Readability"
    },
    {
      title: "The 60-30-10 Color Rule",
      label: "Visual balance ratio",
      code: `/* 60% Dominant Background: Clean neutral (white, dark gray) */
--bg-main: #ffffff;
--text-main: #0f172a;

/* 30% Secondary Structure: Cards, borders, sidebars */
--bg-surface: #f8fafc;
--border-subtle: #e2e8f0;

/* 10% Accent Intent: Buttons, links, primary actions */
--color-primary: #2563eb;
--color-primary-hover: #1d4ed8;`,
      lessonN: 6,
      lessonSlug: "color-systems-and-semantic-palettes",
      lessonTitle: "Color Systems & Semantic Palettes"
    },
    {
      title: "Progressive Disclosure",
      label: "Reducing cognitive overload",
      code: `<!-- Show essential defaults; disclose details on demand -->
<div class="checkout-card">
  <h3>Payment Method</h3>
  <label><input type="radio" name="pay" checked> Credit Card</label>
  
  <details class="advanced-billing">
    <summary>Need a custom VAT invoice or PO?</summary>
    <div class="extra-fields">
      <input type="text" placeholder="Tax ID / VAT number">
    </div>
  </details>
</div>`,
      lessonN: 4,
      lessonSlug: "layout-composition-and-responsive",
      lessonTitle: "Layout Composition & Cognitive Load"
    }
  ],
  glossaryGroups: [
    {
      id: "design-thinking-and-affordances",
      title: "Design Thinking & Affordances",
      terms: [
        { term: "Affordance", def: "The perceived and actual properties of an object that determine how it could possibly be used (e.g. a flat plate affords pushing).", lesson: 1, tags: ["psychology", "ux"] },
        { term: "Signifier", def: "Any perceivable indicator that communicates where action should take place (e.g. a drop shadow on a button indicating it is clickable).", lesson: 1, tags: ["design", "ui"] },
        { term: "Mental model", def: "A user's internal conceptual understanding of how a system works, built from past experiences with real-world objects and other software.", lesson: 1, tags: ["psychology"] },
        { term: "Norman door", def: "A door with confusing visual signifiers (such as a handle that you must push instead of pull), symbolizing flawed interface design.", lesson: 1, tags: ["usability"] }
      ]
    },
    {
      id: "hierarchy-and-spacing",
      title: "Visual Hierarchy & Spacing",
      terms: [
        { term: "Visual hierarchy", def: "The intentional arrangement of visual elements on a screen to signify their order of importance using size, weight, color, and spacing.", lesson: 2, tags: ["layout", "hierarchy"] },
        { term: "F-Pattern", def: "The natural eye-tracking pattern where web users read horizontally across the top, down the left edge, and horizontally across the middle.", lesson: 2, tags: ["reading", "ux"] },
        { term: "8pt Grid", def: "A design system layout standard where all element dimensions, paddings, and margins are multiples of 8 pixels (with 4px half-steps).", lesson: 3, tags: ["spacing", "grid"] },
        { term: "Whitespace", def: "Negative space around and between user interface elements, used to declutter layouts, separate groups, and focus attention.", lesson: 3, tags: ["design"] }
      ]
    },
    {
      id: "typography-and-color",
      title: "Typography & Color Systems",
      terms: [
        { term: "Typographic scale", def: "A harmonious progression of font sizes derived from a mathematical ratio (e.g. Major Third 1.25) to ensure consistent text hierarchy.", lesson: 5, tags: ["typography"] },
        { term: "Measure", def: "The length of a line of text, ideally maintained between 45 and 75 characters for comfortable horizontal reading tracking.", lesson: 5, tags: ["typography", "readability"] },
        { term: "60-30-10 Rule", def: "A classic interior and UI color distribution rule: 60% dominant neutral background, 30% secondary surface structure, and 10% accent color.", lesson: 6, tags: ["color", "ui"] },
        { term: "Semantic color", def: "Colors assigned explicit functional meanings in an interface (e.g. red for danger/destruction, green for success, blue for information).", lesson: 6, tags: ["color", "tokens"] }
      ]
    },
    {
      id: "feedback-and-usability",
      title: "Interaction Feedback & Usability",
      terms: [
        { term: "Progressive disclosure", def: "A technique that defers advanced or rarely used features to secondary screens or dropdowns to prevent initial cognitive overload.", lesson: 4, tags: ["ux", "patterns"] },
        { term: "Optimistic UI", def: "A frontend pattern where the UI updates immediately upon user action before the server network response arrives, rolling back if an error occurs.", lesson: 7, tags: ["frontend", "feedback"] },
        { term: "Skeleton screen", def: "A low-fidelity wireframe placeholder displayed while content loads, reducing perceived wait time compared to spinning spinners.", lesson: 7, tags: ["loading", "feedback"] },
        { term: "Hick's Law", def: "A psychological law stating that the time it takes to make a decision increases logarithmically with the number and complexity of choices.", lesson: 8, tags: ["psychology", "laws"] }
      ]
    }
  ],
  topics: [
    "Design Fundamentals & Mental Models",
    "Visual Hierarchy, Spacing & Layout",
    "Typography, Color Systems & Contrast",
    "Feedback, Micro-Interactions & Usability Testing"
  ],
  lessons: [
    {
      n: 1,
      id: "design-thinking-and-affordances",
      title: "Design Thinking, Affordances & Signifiers",
      topic: "Design Fundamentals & Mental Models",
      anim: "Layers",
      lede: "Design is not visual decoration; it is how things work. Learn the concepts of affordances, signifiers, and user mental models.",
      winShort: "Apply Don Norman's principles of affordances, signifiers, and mental models to eliminate user confusion",
      missionLink: "Build intuitive software that users understand immediately without training manuals",
      sec1: {
        title: "The myth of 'User Error'",
        content: `<p>Have you ever walked up to a door, pulled on a brass handle, and slammed your face into the glass because it was a push door? That is a <b>Norman door</b> (named after cognitive scientist Don Norman). You did not fail: the designer failed by providing misleading visual signals.</p><p>When users struggle with software, engineers often blame "stupid users". In truth, user confusion is almost always the result of a <b>broken mental model</b>. Users form expectations based on real-world mechanics and existing digital products. Good UI aligns with those mental models.</p>`,
        keyIdea: "When users make mistakes, the interface provided conflicting signifiers or violated user mental models."
      },
      predict: {
        q: "What is the difference between an 'affordance' and a 'signifier' in UI design?",
        a: [
          "An affordance is what an object can do (e.g. a button can be clicked); a signifier is the visual signal indicating that action is possible (e.g. shadow, border, color)",
          "An affordance is a CSS class; a signifier is a JavaScript event",
          "An affordance is a mobile feature; a signifier is a desktop feature",
          "There is no difference; they are exact synonyms"
        ],
        c: 0,
        why: "Affordances represent possible actions; signifiers are the visual clues that make affordances perceivable to humans."
      },
      sec2: {
        title: "Signifiers in digital interfaces",
        content: `<p>In software, glass screens have no physical affordances except touching glass. Everything depends on <b>signifiers</b>:</p><ul><li>A button needs <b>elevation, distinct background color, and borders</b> to signify clickability.</li><li>Text inputs need a <b>recessed box, blinking cursor, and clear outline</b> to signify text entry.</li><li>Sliders need a <b>groove and circular thumb handle</b> to signify sliding.</li></ul><p>When design trends (like aggressive ultra-flat design) strip away signifiers, users waste time clicking plain text and hunting for interactive controls.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Physical World", lines: ["Door handle -> Pull", "Flat brass plate -> Push", "Physical tactile feedback"] },
          { title: "Digital Signifiers", lines: ["Button elevation & contrast", "Hover cursor: pointer", "Blinking caret in inputs"] },
          { title: "User Mental Model", lines: ["Predictable outcome", "Zero cognitive friction", "Confidence and trust"] }
        ]
      },
      sec3: {
        title: "Tracing the interaction feedback loop",
        content: `<p>Trace how a user interacts with a control and expects immediate system feedback.</p>`,
      },
      trace: {
        code: [
          "1. User perceives signifier: Raised blue rectangle with label 'Download PDF'",
          "2. User acts: Presses mouse button down -> Button state changes to :active (visual depress)",
          "3. User releases mouse: Mouse click event fires",
          "4. System provides immediate feedback: Button shows spinner and text 'Generating...'",
          "5. Action finishes: Download initiates; success checkmark shown"
        ],
        steps: [
          { line: 0, vars: { perception: "Clear signifier identifies interactive button" } },
          { line: 1, vars: { physical_action: ":active state confirms click received" } },
          { line: 3, vars: { system_status: "Progress state prevents double-clicking" } },
          { line: 4, vars: { completion: "Goal achieved with closure" } }
        ]
      },
      practiceIntro: "Test your understanding of design thinking, affordances, and signifiers.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A door with misleading handles that confuses push vs pull is a <0> door.",
          "A perceivable visual signal that indicates where an action can be taken is a <1>.",
          "The internal expectation a user has about how a system operates is their <2> model."
        ],
        blanks: [
          { a: ["Norman"], why: "Norman door is the canonical example." },
          { a: ["signifier"], why: "Signifiers communicate affordances." },
          { a: ["mental"], why: "Mental models drive user expectations." }
        ]
      },
      win: "You can identify broken signifiers in existing interfaces and design controls that align with user mental models.",
      nextTasks: [
        "Audit an existing form for ambiguous controls (e.g. buttons that look like plain text).",
        "Add distinct :hover, :active, and :focus states to all buttons in your CSS.",
        "Read Chapter 1 of Don Norman's *The Design of Everyday Things*."
      ],
      primarySource: "Don Norman, *The Design of Everyday Things*, Chapter 1: *The Psychopathology of Everyday Things*.",
      quiz: [
        {
          q: "What is an 'affordance' in design terminology?",
          a: [
            "The relationship between a physical or digital object and a person, defining what actions are possible",
            "The monetary cost of developing a feature",
            "The download file size of an icon",
            "A CSS framework for responsive layout"
          ],
          c: 0,
          why: "Affordances represent what physical or digital interactions are possible between user and object."
        },
        {
          q: "Why did ultra-flat design trends (removing all borders, shadows, and button backgrounds) harm web usability?",
          a: [
            "It stripped away visual signifiers, making it difficult for users to distinguish clickable buttons from static labels",
            "It made HTML file sizes 50% larger",
            "It broke JavaScript event listeners",
            "It caused screens to flicker"
          ],
          c: 0,
          why: "Removing shadows, borders, and contrast eliminated the signifiers users rely on to recognize clickable controls."
        },
        {
          q: "What is a 'mental model'?",
          a: [
            "The user's internal belief and conceptual framework about how a system functions, built from past experiences",
            "A machine learning model trained on human brainwaves",
            "A mathematical proof of database consistency",
            "A corporate organizational chart"
          ],
          c: 0,
          why: "Users bring mental models formed by other apps; violating those expectations causes errors and friction."
        },
        {
          q: "What should immediately happen when a user clicks a button that triggers a 3-second network request?",
          a: [
            "The button should display a loading state, disable itself to prevent duplicate clicks, and acknowledge the user action",
            "The page should do nothing until the entire request finishes",
            "The browser window should close automatically",
            "The button should disappear from the screen permanently"
          ],
          c: 0,
          why: "Immediate feedback informs the user that their action was registered, preventing frustrating duplicate submissions."
        }
      ]
    },
    {
      n: 2,
      id: "visual-hierarchy-and-scanning",
      title: "Visual Hierarchy, Scanning Patterns & Gestalt",
      topic: "Visual Hierarchy, Spacing & Layout",
      anim: "LayersOrbit",
      lede: "Users do not read web pages word-for-word; they scan. Master the F-pattern, Z-pattern, and Gestalt grouping laws.",
      winShort: "Establish clear visual hierarchy using size, contrast, and Gestalt principles of proximity and similarity",
      missionLink: "Guide user attention effortlessly to primary call-to-actions and key information",
      sec1: {
        title: "How humans scan interfaces",
        content: `<p>Eye-tracking research conducted across thousands of users reveals a universal truth: <b>users do not read web pages; they scan</b>.</p><p>Scanning follows predictable geometric patterns:</p><ul><li><b>F-Pattern:</b> Dominates text-heavy pages (articles, documentation). Users scan horizontally across the first heading, down the left edge, read a shorter second line, and scan down.</li><li><b>Z-Pattern:</b> Dominates landing pages and marketing banners. The eye scans top-left (logo), top-right (nav/login), diagonally down to bottom-left (hero text), and across to bottom-right (primary Call-To-Action button).</li></ul>`,
        keyIdea: "Design for scanning: position critical value propositions and call-to-actions along natural F and Z scan lines."
      },
      predict: {
        q: "What is the Gestalt Law of Proximity?",
        a: [
          "Elements positioned close to each other are perceived by the human brain as belonging together as a related group",
          "Elements with the same color are assumed to be identical objects",
          "Text with larger font sizes must always be placed at the bottom",
          "Websites must load in under 1 second"
        ],
        c: 0,
        why: "Proximity is the strongest visual grouping cue: humans perceive closely spaced items as a unified group."
      },
      sec2: {
        title: "The Gestalt Principles of visual grouping",
        content: `<p>The human brain is a pattern-matching machine. Gestalt psychology defines how we visually organize information:</p><ul><li><b>Proximity:</b> Items placed close together form a group. A label must be closer to its input field than to the preceding input!</li><li><b>Similarity:</b> Elements that look alike (same color, shape, font) are perceived as having the same function (e.g. all primary buttons are blue).</li><li><b>Common Region:</b> Enclosing items inside a card or bordered box groups them together instantly.</li></ul>`,
      },
      diagram: {
        boxes: [
          { title: "Visual Weight Tools", lines: ["Font Size: 32px vs 14px", "Font Weight: 700 vs 400", "Color Contrast: Dark vs Muted Gray"] },
          { title: "Z-Pattern Anchor Points", lines: ["Top-Left: Logo & Identity", "Top-Right: Action / Nav", "Bottom-Right: Primary CTA!"] },
          { title: "Gestalt Proximity", lines: ["Label & Input: 4px gap", "Between Form Groups: 24px gap", "Natural visual clustering"] }
        ]
      },
      sec3: {
        title: "Tracing visual hierarchy in a pricing card",
        content: `<p>Trace how visual hierarchy guides the eye from the most important element to secondary details.</p>`,
      },
      trace: {
        code: [
          "Eye lands on 1: Massive price number '$29/mo' (Font-size: 40px, Weight: 800)",
          "Eye moves to 2: Plan name 'Pro Plan' (Font-size: 20px, Bold)",
          "Eye moves to 3: High-contrast primary button 'Start Free Trial' (Solid Blue, Bold)",
          "Eye moves to 4: Feature checklist (Font-size: 14px, Regular weight, checkmark icons)",
          "Eye finishes at 5: Fine print 'Cancel anytime' (Font-size: 12px, Muted gray text)"
        ],
        steps: [
          { line: 0, vars: { primary_focus: "Price attracts eye first via sheer scale" } },
          { line: 1, vars: { context: "Plan tier establishes meaning" } },
          { line: 2, vars: { action_anchor: "High-contrast CTA stands out immediately" } },
          { line: 4, vars: { de_emphasis: "Low-contrast fine print read last" } }
        ]
      },
      practiceIntro: "Test your understanding of visual hierarchy, scanning patterns, and Gestalt laws.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The eye-tracking pattern typical of text-heavy articles is the <0>-pattern.",
          "The Gestalt law stating that objects close together form a group is the Law of <1>.",
          "The primary action button on a landing page is known as a <2>."
        ],
        blanks: [
          { a: ["F"], why: "F-pattern describes horizontal and vertical reading scans." },
          { a: ["Proximity"], why: "Proximity groups nearby items." },
          { a: ["CTA", "Call to Action"], why: "Call To Action triggers user conversion." }
        ]
      },
      win: "You can establish a clear visual hierarchy that guides users' eyes along natural scanning patterns to key actions.",
      nextTasks: [
        "Audit a form to ensure labels are significantly closer to their inputs than to the preceding field (Proximity).",
        "Redesign a card component using font weight and color contrast instead of adding extra lines and borders.",
        "Map the Z-pattern anchor points on your product's homepage."
      ],
      primarySource: "Nielsen Norman Group: *F-Shaped Pattern for Reading Web Content* (nngroup.com).",
      quiz: [
        {
          q: "What is visual hierarchy in interface design?",
          a: [
            "The intentional arrangement of elements to guide the user's eye to information in order of importance",
            "The directory tree structure of HTML files on the server",
            "The CSS z-index stacking context",
            "The order in which JavaScript files are downloaded"
          ],
          c: 0,
          why: "Visual hierarchy uses size, weight, color, and spacing to communicate the relative importance of content."
        },
        {
          q: "How does the Gestalt Law of Proximity affect form layout?",
          a: [
            "A field's label must be positioned closer to its corresponding input than to the previous input field",
            "All input fields must be placed on the exact same horizontal line",
            "Buttons must always touch the edges of the screen",
            "Checkboxes must be larger than text boxes"
          ],
          c: 0,
          why: "If space between fields equals space between label and input, users cannot tell which label belongs to which box."
        },
        {
          q: "Why is creating visual hierarchy by de-emphasizing secondary information often better than making primary elements bigger?",
          a: [
            "Making everything bigger creates visual noise and competition, while softening secondary elements lets primary elements stand out naturally",
            "Larger elements take longer to download over Wi-Fi",
            "Browsers restrict fonts above 24px",
            "De-emphasizing text automatically increases screen brightness"
          ],
          c: 0,
          why: "Good design is about contrast: muting secondary text (gray instead of black) creates hierarchy without giant fonts."
        },
        {
          q: "Where does the eye typically finish in a standard Z-pattern landing page layout?",
          a: [
            "At the bottom-right corner, making it the ideal location for the primary call-to-action button",
            "At the top-left corner",
            "In the exact center of the screen",
            "Outside the browser viewport"
          ],
          c: 0,
          why: "The Z-pattern terminates at the bottom-right, where users naturally look for the next action to take."
        }
      ]
    },
    {
      n: 3,
      id: "spacing-systems-and-grids",
      title: "Spacing Systems & The 8pt Grid",
      topic: "Visual Hierarchy, Spacing & Layout",
      anim: "Bars",
      lede: "Stop guessing random pixel margins like 13px or 27px. Master the mathematical consistency of the 8pt spacing grid.",
      winShort: "Implement a consistent 8pt/4pt spacing scale across component padding, margins, and layout gaps",
      missionLink: "Eliminate visual clutter and maintain pixel-perfect spatial consistency across development teams",
      sec1: {
        title: "The problem of random numbers",
        content: `<p>Look at an amateur website's CSS and you will see chaos: <code>margin-top: 13px; padding: 22px; gap: 7px;</code>. Every developer guesses numbers by trial and error. The result looks subtly 'off', disjointed, and messy.</p><p>Professional interfaces rely on a <b>strict spacing system</b>. The universal industry standard is the <b>8pt Spacing Grid</b>: all dimensions, paddings, margins, and gaps are multiples of <b>8 pixels</b> (8, 16, 24, 32, 48, 64), with a <b>4px half-step</b> for micro-spacing.</p>`,
        keyIdea: "Never guess margins; restrict all spatial values to a fixed mathematical scale based on multiples of 8 and 4."
      },
      predict: {
        q: "Why is 8 pixels the preferred universal base unit for digital screen design instead of 10 or 7?",
        a: [
          "8 divides cleanly into almost all standard screen resolutions and scales perfectly across 1.5x, 2x, and 3x Retina display pixel densities",
          "8 is considered a lucky number in Silicon Valley",
          "8 pixels is the physical width of an optical computer mouse laser",
          "Computer processors cannot calculate numbers that are not multiples of 8"
        ],
        c: 0,
        why: "8 divides evenly into 2 and 4, preventing blurry half-pixel rendering when scaling for high-DPI Retina screens."
      },
      sec2: {
        title: "The standard spacing token scale",
        content: `<p>Instead of hardcoding pixels, define standard CSS custom property tokens:</p><ul><li><code>--space-1: 4px;</code> (Micro-gaps: between icons and text, borders).</li><li><code>--space-2: 8px;</code> (Compact padding: chips, badges, list item gaps).</li><li><code>--space-4: 16px;</code> (Standard card padding, default form input height gaps).</li><li><code>--space-6: 24px;</code> (Between distinct components on a card).</li><li><code>--space-8: 32px;</code> (Major section separations).</li><li><code>--space-12: 48px;</code> (Page layout hero margins).</li></ul>`,
      },
      diagram: {
        boxes: [
          { title: "Inner Padding (16px)", lines: ["padding: var(--space-4)", "Comfortable breathing room inside card"] },
          { title: "Content Gap (8px)", lines: ["gap: var(--space-2)", "Between icon and heading"] },
          { title: "Section Separation (32px)", lines: ["margin-bottom: var(--space-8)", "Clear Gestalt separation between sections"] }
        ]
      },
      sec3: {
        title: "Tracing spacing refactoring on a cluttered card",
        content: `<p>Trace how aligning arbitrary pixel values to an 8pt grid instantly elevates visual polish.</p>`,
      },
      trace: {
        code: [
          "# Before: padding: 19px; margin-bottom: 11px; gap: 7px; (Chaotic)",
          "Step 1: Round outer card padding to standard --space-4 (16px)",
          "Step 2: Align gap between avatar and title to --space-2 (8px)",
          "Step 3: Align paragraph margin-bottom to --space-3 (12px)",
          "Step 4: Align bottom button margins to --space-4 (16px)",
          "# After: Crisp, harmonious, mathematically balanced spatial cadence"
        ],
        steps: [
          { line: 0, vars: { initial_state: "Arbitrary visual noise and uneven rhythm" } },
          { line: 1, vars: { external_cadence: "16px establishes solid container boundaries" } },
          { line: 2, vars: { internal_cadence: "8px pairs icon and text tightly" } },
          { line: 5, vars: { final_state: "Harmonious rhythm across entire component" } }
        ]
      },
      practiceIntro: "Test your mastery of spacing systems and the 8pt grid.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The universal base unit in digital interface design is the <0>pt grid.",
          "The allowed half-step unit for micro adjustments is <1>px.",
          "Negative space between components that provides visual breathing room is <2>."
        ],
        blanks: [
          { a: ["8"], why: "8pt is the industry standard." },
          { a: ["4"], why: "4px provides fine-grained control." },
          { a: ["whitespace"], why: "Whitespace declutters layouts." }
        ]
      },
      win: "You can implement a systematic spacing scale that brings mathematical harmony and consistency to your CSS.",
      nextTasks: [
        "Audit a CSS stylesheet and replace all arbitrary pixel margins with standard spacing tokens (--space-2, --space-4, etc.).",
        "Verify that all icon dimensions are sized to multiples of 8 (e.g. 16px, 24px, 32px).",
        "Refactor a crowded table layout by increasing cell padding to 12px or 16px."
      ],
      primarySource: "Marc Edwards: *Intro to The 8-Point Grid System* (spec.fm).",
      quiz: [
        {
          q: "Why does using an 8-point spacing grid speed up frontend development?",
          a: [
            "It eliminates endless developer debate and pixel-nudging guesswork by restricting choices to a predictable mathematical scale",
            "It automatically optimizes CSS file downloads",
            "It compiles CSS to WebAssembly",
            "It eliminates the need for testing on mobile devices"
          ],
          c: 0,
          why: "Having a predefined scale (8, 16, 24, 32...) removes decision fatigue and makes spacing decisions immediate."
        },
        {
          q: "What is an acceptable 'half-step' in an 8pt spacing system for tight components like badges or button paddings?",
          a: [
            "4px",
            "7px",
            "3px",
            "1.5px"
          ],
          c: 0,
          why: "4px is the standard half-step, maintaining mathematical alignment with the base-8 grid."
        },
        {
          q: "What is the common design mistake when padding cards or container boxes?",
          a: [
            "Providing too little whitespace, causing elements to feel cramped and claustrophobic against the borders",
            "Making the padding a multiple of 8",
            "Using CSS custom properties",
            "Adding borders to the box"
          ],
          c: 0,
          why: "Amateurs routinely under-pad containers; generous whitespace creates polish, elegance, and clarity."
        },
        {
          q: "Which dimension represents a clean multiple of the 8pt grid?",
          a: [
            "24px",
            "21px",
            "17px",
            "25px"
          ],
          c: 0,
          why: "24 is 3 * 8; the others are irregular values that disrupt visual rhythm."
        }
      ]
    },
    {
      n: 4,
      id: "layout-composition-and-responsive",
      title: "Layout Composition & Cognitive Load",
      topic: "Visual Hierarchy, Spacing & Layout",
      anim: "CodePulse",
      lede: "Do not overwhelm users with 50 options on one screen. Master progressive disclosure, chunking, and cognitive load reduction.",
      winShort: "Structure layouts to minimize cognitive load using chunking, progressive disclosure, and responsive composition",
      missionLink: "Increase user conversion rates and task completion speed by reducing mental friction",
      sec1: {
        title: "Cognitive Load Theory in UI",
        content: `<p>Human working memory is severely limited: people can only hold roughly <b>4 to 7 items</b> in active memory at once (Miller's Law). When an interface presents 30 unorganized form fields or 15 competing buttons, the user experiences <b>cognitive overload</b> and abandons the task.</p><p>Great UX reduces cognitive load through two strategies:</p><ul><li><b>Chunking:</b> Breaking large amounts of information into small, digestible visual groups (e.g. formatting a 10-digit phone number as <code>(555) 123-4567</code>, or grouping a long form into distinct steps).</li><li><b>Progressive Disclosure:</b> Showing only the information necessary for the immediate decision, revealing advanced settings only upon request.</li></ul>`,
        keyIdea: "Break complex tasks into small visual chunks and disclose advanced options only when needed."
      },
      predict: {
        q: "What is the best way to handle a complex 40-field checkout form to prevent high user abandonment rates?",
        a: [
          "Split it into a multi-step wizard (1. Shipping, 2. Delivery, 3. Payment) with a clear progress bar",
          "Put all 40 fields on a single page with small fonts to fit on one screen without scrolling",
          "Remove all labels so only input boxes are visible",
          "Require the user to fill out the form twice for accuracy"
        ],
        c: 0,
        why: "Multi-step flows chunk the cognitive burden into small, achievable milestones, dramatically reducing drop-offs."
      },
      sec2: {
        title: "Hick's Law: Fewer choices, faster decisions",
        content: `<p><b>Hick's Law</b> states: <i>The time it takes to make a decision increases logarithmically with the number and complexity of choices</i>.</p><p>If your pricing page displays 8 different plans, users freeze in analysis paralysis. If you offer 3 plans with one highlighted as <i>"Most Popular"</i>, decision time plummets and conversion surges.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Cognitive Overload", lines: ["40 unorganized fields", "10 competing buttons", "High bounce rate!"] },
          { title: "Chunking & Steps", lines: ["Step 1: Account (3 fields)", "Step 2: Address (4 fields)", "Step 3: Confirm & Pay"] },
          { title: "Progressive Disclosure", lines: ["Essential defaults shown", "'Advanced Options' toggle", "Low mental friction"] }
        ]
      },
      sec3: {
        title: "Tracing progressive disclosure in an interface",
        content: `<p>Trace how hiding advanced configurations streamlines the default user path.</p>`,
      },
      trace: {
        code: [
          "1. User views Cloud Database creation screen",
          "2. Screen presents 3 essential inputs: Database Name, Engine (Postgres), Size (Standard)",
          "3. 95% of users click 'Create Database' in 10 seconds",
          "4. Expert user clicks 'Advanced Network & Backup Settings' (<details> toggle)",
          "5. VPC, CIDR, automated snapshot frequency, and IOPS settings expand cleanly"
        ],
        steps: [
          { line: 0, vars: { initial_view: "Streamlined 3-field layout" } },
          { line: 2, vars: { primary_user: "Rapid decision; zero confusion" } },
          { line: 3, vars: { expert_user: "Advanced features accessible on demand" } },
          { line: 4, vars: { outcome: "Accommodates novices and experts simultaneously" } }
        ]
      },
      practiceIntro: "Test your understanding of cognitive load, chunking, and progressive disclosure.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Grouping complex information into small, digestible units is called <0>.",
          "Revealing advanced options only when requested by the user is <1> disclosure.",
          "The law stating that decision time increases with the number of choices is <2>'s Law."
        ],
        blanks: [
          { a: ["chunking"], why: "Chunking reduces working memory load." },
          { a: ["progressive"], why: "Progressive disclosure defers complexity." },
          { a: ["Hick", "Hicks"], why: "Hick's Law models decision time." }
        ]
      },
      win: "You can design clean, focused layouts that eliminate cognitive overload through chunking and progressive disclosure.",
      nextTasks: [
        "Refactor a cluttered settings page using HTML <details> and <summary> for progressive disclosure.",
        "Chunk a long registration form into a 3-step wizard with visual step indicators.",
        "Audit a navigation menu to ensure primary choices do not exceed 5–7 items."
      ],
      primarySource: "Steve Krug, *Don't Make Me Think: A Common Sense Approach to Web Usability*.",
      quiz: [
        {
          q: "What does 'progressive disclosure' mean in interface design?",
          a: [
            "Presenting only the necessary options upfront, while hiding advanced or secondary settings until the user explicitly requests them",
            "Slowly fading in content over 10 seconds with CSS animations",
            "Making text larger as the user scrolls down",
            "Gradually revealing the price of a product during checkout"
          ],
          c: 0,
          why: "Progressive disclosure keeps interfaces simple for the majority while maintaining full power for advanced users."
        },
        {
          q: "What is 'chunking' in user experience psychology?",
          a: [
            "Breaking large amounts of information into smaller, logical, visually distinct units to fit within human working memory limits",
            "Compressing image files into zip archives",
            "Dividing database tables across multiple hard drives",
            "Writing CSS styles in separate files"
          ],
          c: 0,
          why: "Chunking groups related details (like credit card 4-digit groups) to reduce cognitive strain."
        },
        {
          q: "According to Hick's Law, what happens when you reduce the number of options on a navigation menu from 15 to 5?",
          a: [
            "Users make decisions significantly faster with less hesitation and mental friction",
            "Users become confused and leave the website",
            "The website uses more server bandwidth",
            "Mobile screens become unreadable"
          ],
          c: 0,
          why: "Fewer options drastically reduce decision time and eliminate analysis paralysis."
        },
        {
          q: "How many items can human working memory comfortably track simultaneously (Miller's Law)?",
          a: [
            "Around 4 to 7 items",
            "Over 100 items",
            "Exactly 1 item",
            "Unlimited items"
          ],
          c: 0,
          why: "Miller's Law (and modern cognitive psychology) demonstrates working memory is limited to roughly 4–7 chunks."
        }
      ]
    },
    {
      n: 5,
      id: "typography-scale-and-readability",
      title: "Typography Scales & Readability",
      topic: "Typography, Color Systems & Contrast",
      anim: "Flow",
      lede: "Typography accounts for 90% of web design. Learn to configure mathematical type scales, line heights, and comfortable line lengths.",
      winShort: "Establish an accessible typographic scale and optimize line length and line height for comfortable reading",
      missionLink: "Turn difficult, unreadable text walls into effortless, scannable reading experiences",
      sec1: {
        title: "The Golden Rules of Web Readability",
        content: `<p>Most websites fail at basic reading mechanics. If reading your content causes physical eye fatigue, users will bounce. Three universal rules govern typography:</p><ul><li><b>Line Length (Measure):</b> An ideal reading line is between <b>45 and 75 characters (including spaces)</b>. Lines longer than 85 characters cause readers to lose their place when tracking back to the next line. Set <code>max-width: 65ch;</code> on article text!</li><li><b>Line Height (Leading):</b> Body text line-height should be roughly <b>1.5 to 1.6</b>. Tight line heights cause text lines to collide; excessively loose line heights make lines feel disconnected. Headings should be tighter: <b>1.1 to 1.2</b>.</li><li><b>Font Size:</b> Never use body text smaller than <b>16px</b>.</li></ul>`,
        keyIdea: "Restrict body text line length to 45–75 characters (max-width: 65ch) and set line-height to 1.5."
      },
      predict: {
        q: "What CSS unit allows you to constrain a paragraph's line length based on character count?",
        a: [
          "max-width: 65ch (where 'ch' equals the width of the '0' character in the current font)",
          "max-width: 65px",
          "max-width: 65vw",
          "max-width: 65%"
        ],
        c: 0,
        why: "The 'ch' unit corresponds to character width, making max-width: 65ch the ideal typographic constraint."
      },
      sec2: {
        title: "The mathematical type scale",
        content: `<p>Never choose arbitrary font sizes like 15px, 19px, 23px. Use a <b>modular type scale</b> where each step is multiplied by a fixed ratio (e.g. <b>Major Third 1.250</b> or <b>Perfect Fourth 1.333</b>):</p><ul><li><code>12px</code>: Captions, helper text.</li><li><code>14px</code>: Secondary text, metadata.</li><li><code>16px</code>: Standard base body text.</li><li><code>20px</code>: Large body, card titles (h4).</li><li><code>24px</code>: Subsection headers (h3).</li><li><code>32px</code>: Section titles (h2).</li><li><code>40px+</code>: Page hero titles (h1).</li></ul>`,
      },
      diagram: {
        boxes: [
          { title: "Line Length (Measure)", lines: ["max-width: 65ch", "45 to 75 characters", "Prevents eye fatigue"] },
          { title: "Line Height (Leading)", lines: ["Body: line-height: 1.5 - 1.6", "Headings: line-height: 1.1 - 1.2", "Generous vertical breathing room"] },
          { title: "Type Scale", lines: ["12px -> 14px -> 16px ->", "20px -> 24px -> 32px -> 40px", "Mathematical harmony"] }
        ]
      },
      sec3: {
        title: "Tracing typographic refactoring",
        content: `<p>Trace how fixing line length and line height transforms an unreadable wall of text.</p>`,
      },
      trace: {
        code: [
          "# Before: font-size: 13px; line-height: 1.1; width: 100% on 27-inch monitor (180 chars/line)",
          "Symptom: Readers lose place, experience eye fatigue, abandon article",
          "Step 1: Set font-size: 16px (1rem)",
          "Step 2: Set line-height: 1.6",
          "Step 3: Constrain article container: max-width: 65ch; margin: 0 auto;",
          "# After: Effortless, scannable, book-quality digital reading experience"
        ],
        steps: [
          { line: 0, vars: { defect: "Unreadable 180-character line span" } },
          { line: 2, vars: { font_fix: "Base size increased to accessible 16px" } },
          { line: 3, vars: { leading_fix: "Lines separated with 1.6 leading" } },
          { line: 4, vars: { measure_fix: "Max-width clamped to 65ch" } }
        ]
      },
      practiceIntro: "Test your understanding of web typography scales and readability rules.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The ideal line length for body text is between 45 and <0> characters.",
          "The CSS unit corresponding to the width of the '0' character is <1>.",
          "The recommended line-height ratio for body text is approximately 1.<2>."
        ],
        blanks: [
          { a: ["75"], why: "45–75 characters optimizes reading tracking." },
          { a: ["ch"], why: "ch measures character width." },
          { a: ["5", "6"], why: "1.5 to 1.6 is ideal body line height." }
        ]
      },
      win: "You can configure harmonious mathematical type scales and optimize line lengths for effortless reading.",
      nextTasks: [
        "Add max-width: 65ch to long paragraph containers on your blog or docs site.",
        "Adjust heading line-heights to 1.15 to prevent multi-line headers from drifting apart.",
        "Generate a CSS type scale using a tool like Type-Scale.com."
      ],
      primarySource: "Robert Bringhurst, *The Elements of Typographic Style*.",
      quiz: [
        {
          q: "What is the optimal character length (measure) for comfortable reading on the web?",
          a: [
            "45 to 75 characters per line (including spaces)",
            "150 to 200 characters per line",
            "10 to 20 characters per line",
            "As wide as the monitor screen allows"
          ],
          c: 0,
          why: "Lines longer than 75 characters tire the eye when scanning back; lines under 45 break reading rhythm."
        },
        {
          q: "What is a modular type scale?",
          a: [
            "A series of font sizes derived by multiplying a base size by a fixed mathematical ratio (e.g. 1.25)",
            "A font containing emojis",
            "A CSS file that changes fonts every minute",
            "A system for weighing paper fonts in print shops"
          ],
          c: 0,
          why: "A type scale guarantees proportional, harmonious contrast between headings and body text."
        },
        {
          q: "Why should line-height on large headings (e.g. 36px font) be tighter (1.1–1.2) than body text (1.5–1.6)?",
          a: [
            "Because large font sizes already have large inherent vertical space; using 1.5 makes multi-line titles look like disconnected paragraphs",
            "Because browsers crash if heading line-height exceeds 1.2",
            "To save vertical ink",
            "Because headings are always italicized"
          ],
          c: 0,
          why: "Large fonts need tighter relative leading (1.1–1.2) to keep multi-line titles visually grouped."
        },
        {
          q: "What is the minimum recommended base font size for web body text?",
          a: [
            "16px",
            "10px",
            "12px",
            "24px"
          ],
          c: 0,
          why: "16px is the universal browser default and the accessible baseline for comfortable reading."
        }
      ]
    },
    {
      n: 6,
      id: "color-systems-and-semantic-palettes",
      title: "Color Systems & Semantic Palettes",
      topic: "Typography, Color Systems & Contrast",
      anim: "LayersOrbit",
      lede: "Stop picking random hexadecimal colors. Master the 60-30-10 color balance rule, neutral scales, and semantic palettes.",
      winShort: "Build cohesive, accessible color systems using the 60-30-10 rule and semantic tokens",
      missionLink: "Create balanced, professional interfaces that communicate intent with clarity",
      sec1: {
        title: "The 60-30-10 rule of color distribution",
        content: `<p>A common mistake developers make is overusing their brand accent color: making backgrounds, cards, sidebars, headers, and text all bright blue. This causes visual exhaustion.</p><p>Borrow the classic <b>60-30-10 Rule</b> from interior design:</p><ul><li><b>60% Dominant Neutral:</b> Clean background canvas (white, off-white, or dark slate gray).</li><li><b>30% Secondary Structure:</b> Cards, sidebars, table headers, borders, and modal surfaces.</li><li><b>10% Accent Intent:</b> Reserved exclusively for interactive elements that demand attention (primary buttons, active tabs, links).</li></ul>`,
        keyIdea: "Keep 90% of your interface neutral; reserve your bright accent color for the 10% of elements that require action."
      },
      predict: {
        q: "If you have a bright brand color (e.g. vibrant blue), should you make all buttons, badges, table headers, and borders that color?",
        a: [
          "No: if everything is colorful, nothing stands out; reserve the vibrant color strictly for the primary Call-To-Action",
          "Yes: brand consistency requires painting every element with the primary color",
          "Yes: colors increase website loading speeds",
          "No: websites should only ever use black and white"
        ],
        c: 0,
        why: "When accent colors are overused, they lose their ability to draw visual attention to primary actions."
      },
      sec2: {
        title: "Semantic color tokens",
        content: `<p>Never name CSS color variables after their appearance (like <code>--blue: #2563eb;</code>). What happens in dark mode or a rebrand? Always use <b>semantic functional naming</b>:</p><ul><li><code>--color-primary:</code> Brand action color (buttons, active states).</li><li><code>--color-success:</code> Green (completed tasks, positive status).</li><li><code>--color-warning:</code> Amber/Yellow (caution, expiring sessions).</li><li><code>--color-danger:</code> Red (destructive actions: delete, critical errors).</li><li><code>--color-neutral:</code> A ramp of 9 grays from light to dark for text, borders, and backgrounds.</li></ul>`,
      },
      diagram: {
        boxes: [
          { title: "60% Neutral Canvas", lines: ["Main page background", "Deep slate text", "Clean, calm canvas"] },
          { title: "30% Structural Surface", lines: ["Card containers", "Input borders & dividers", "Subtle neutral contrast"] },
          { title: "10% Accent Power", lines: ["Primary action button", "Active navigation tab", "Instant eye magnet!"] }
        ]
      },
      sec3: {
        title: "Tracing semantic color tokens across themes",
        content: `<p>Trace how semantic color naming allows effortless dark mode switching.</p>`,
      },
      trace: {
        code: [
          ":root { --bg-page: #ffffff; --text-page: #0f172a; --color-primary: #2563eb; }",
          "[data-theme='dark'] { --bg-page: #0f172a; --text-page: #f8fafc; --color-primary: #3b82f6; }",
          "Component CSS: body { background: var(--bg-page); color: var(--text-page); }",
          "Result: Theme switches instantly without modifying any component CSS rules!"
        ],
        steps: [
          { line: 0, vars: { light_mode: "Light canvas token definitions" } },
          { line: 1, vars: { dark_mode: "Dark canvas token overrides" } },
          { line: 2, vars: { decoupling: "Components depend on abstract intent, not literal hex codes" } },
          { line: 3, vars: { flexibility: "Zero component refactoring required for dark theme" } }
        ]
      },
      practiceIntro: "Test your mastery of color theory, the 60-30-10 rule, and semantic palettes.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The rule of interior and UI design allocating color balance is the 60-<0>-10 rule.",
          "In 60-30-10, the accent color represents <1>% of visual space.",
          "Naming color tokens by their functional intent rather than hue is <2> naming."
        ],
        blanks: [
          { a: ["30"], why: "60-30-10 rule." },
          { a: ["10"], why: "10% accent color." },
          { a: ["semantic"], why: "Semantic tokens express intent (e.g. danger, primary)." }
        ]
      },
      win: "You can build balanced color systems with semantic tokens and apply the 60-30-10 rule to focus user attention.",
      nextTasks: [
        "Audit an interface and eliminate accent color from table headers and borders, returning them to neutral grays.",
        "Set up a semantic color token system in CSS custom properties with primary, surface, and danger roles.",
        "Test color contrast ratios across all buttons using WebAIM Contrast Checker."
      ],
      primarySource: "Refactoring UI by Adam Wathan & Steve Schoger: *Color: Building a Color Palette*.",
      quiz: [
        {
          q: "What is the 60-30-10 color rule in interface design?",
          a: [
            "60% dominant neutral background, 30% secondary surface structure, and 10% accent color for interactive intent",
            "60% text, 30% images, 10% videos",
            "60% blue, 30% green, 10% red",
            "A rule about website loading times"
          ],
          c: 0,
          why: "60-30-10 ensures that the interface remains calm and clean while accents immediately draw attention to actions."
        },
        {
          q: "Why is naming a CSS variable '--color-danger' better than '--red'?",
          a: [
            "It expresses semantic intent: if the branding or theme changes, the variable can change shades without causing contradictory names",
            "It loads faster in CSS engines",
            "It is required by the W3C CSS specification",
            "It automatically displays an exclamation mark icon"
          ],
          c: 0,
          why: "Semantic tokens describe the role/intent of a color, decoupling code from specific literal hues."
        },
        {
          q: "What is a 'neutral scale' in a design system?",
          a: [
            "A ramp of grays (from white to near-black) used for backgrounds, borders, card surfaces, and text",
            "A color wheel containing only primary colors",
            "A browser setting that disables all colors",
            "A tool for measuring screen monitor tilt"
          ],
          c: 0,
          why: "A comprehensive neutral gray ramp forms 90% of a professional UI's visual foundation."
        },
        {
          q: "Why should pure black (#000000) text on pure white (#FFFFFF) backgrounds often be softened to deep slate (#0F172A)?",
          a: [
            "Extreme 21:1 contrast can cause visual vibration and eye strain; deep slate maintains high accessibility contrast while feeling softer",
            "Pure black text causes monitors to overheat",
            "Pure white backgrounds are illegal under WCAG",
            "Deep slate text takes up fewer pixels"
          ],
          c: 0,
          why: "Slightly softened dark gray/slate text reduces harsh glare while easily exceeding WCAG AA contrast standards."
        }
      ]
    },
    {
      n: 7,
      id: "interaction-feedback-and-loading-states",
      title: "Interaction Feedback, Skeletons & Latency",
      topic: "Feedback, Micro-Interactions & Usability Testing",
      anim: "CodePulse",
      lede: "Slow network responses make apps feel broken. Master skeleton screens, optimistic UI, and the psychological perception of speed.",
      winShort: "Design resilient loading states, skeleton screens, and optimistic UI to optimize perceived performance",
      missionLink: "Make web applications feel fast, responsive, and trustworthy even over sluggish network connections",
      sec1: {
        title: "The psychology of waiting: Latency thresholds",
        content: `<p>How fast does software need to feel? Decades of human-computer interaction (HCI) research define three critical time limits:</p><ul><li><b>&lt; 100 milliseconds:</b> Perceived as instantaneous. Direct tactile feedback (button depression, hover states, toggles) must happen within 100ms.</li><li><b>100ms to 1 second:</b> The user notices a slight delay, but feels in control. A subtle loading spinner or progress bar is recommended.</li><li><b>&gt; 1 second:</b> The user's focus wavers. Without feedback, users assume the app crashed, click the button again, or close the tab.</li><li><b>&gt; 10 seconds:</b> Complete task abandonment.</li></ul>`,
        keyIdea: "Respond within 100ms for tactile feedback; provide immediate loading indicators for any operation exceeding 1 second."
      },
      predict: {
        q: "How does a 'skeleton screen' differ from a traditional spinning spinner?",
        a: [
          "A skeleton screen displays a low-fidelity gray wireframe of the layout, reducing perceived wait time by preparing the user for where content will appear",
          "Skeleton screens use 3D graphics",
          "Skeleton screens only appear on Halloween",
          "Skeleton screens make the network download 50% faster"
        ],
        c: 0,
        why: "Skeletons give immediate visual structure, shifting attention to incoming content and making load times feel shorter."
      },
      sec2: {
        title: "Optimistic UI and Empty States",
        content: `<p>To make apps feel blazing fast, use <b>Optimistic UI</b>: when a user clicks 'Like' or sends a chat message, update the screen immediately (assume success). Send the network request in the background. If the request fails, revert the state and display an error alert.</p><p>Never forget <b>Empty States</b>: when a user has no messages, orders, or saved items, do not display a barren blank screen. Use an illustration, friendly copy, and a clear primary button directing them how to get started.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Immediate Feedback", lines: ["Click 'Like' button", "Heart turns red instantly (<10ms)", "Optimistic UI!"] },
          { title: "Background Network", lines: ["POST /api/like in transit", "User continues scrolling seamlessly", "Zero perceived latency"] },
          { title: "Error Rollback", lines: ["Network 500 error?", "Heart reverts to gray", "Toast alert: 'Action failed. Tap to retry.'"] }
        ]
      },
      sec3: {
        title: "Tracing skeleton loading transition",
        content: `<p>Trace how skeleton screens transition seamlessly into real data without jarring layout shifts.</p>`,
      },
      trace: {
        code: [
          "1. Component mounts: data is null; isLoading = true",
          "2. Render: <div class='skeleton-card'><div class='skeleton-avatar'></div><div class='skeleton-line'></div></div>",
          "3. User perceives immediate layout geometry and shimmering pulse animation",
          "4. Network response arrives in 400ms",
          "5. Skeleton replaced with real image and title; zero cumulative layout shift (CLS)!"
        ],
        steps: [
          { line: 0, vars: { initial_state: "Loading initiated" } },
          { line: 1, vars: { visual_feedback: "Skeleton wireframe occupies identical dimensions as future content" } },
          { line: 3, vars: { network_resolution: "Data arrives" } },
          { line: 4, vars: { seamless_reveal: "Instant replacement with zero layout jump" } }
        ]
      },
      practiceIntro: "Test your understanding of interaction feedback, latency perception, and loading states.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The latency threshold perceived as instantaneous by human brain perception is <0> milliseconds.",
          "Updating the UI before server confirmation arrives is called <1> UI.",
          "A wireframe placeholder mimicking content layout while data loads is a <2> screen."
        ],
        blanks: [
          { a: ["100"], why: "Under 100ms feels instantaneous." },
          { a: ["optimistic"], why: "Optimistic UI assumes network success." },
          { a: ["skeleton"], why: "Skeleton screens reduce perceived latency." }
        ]
      },
      win: "You can design responsive loading states, eliminate perceived latency with optimistic UI, and craft engaging empty states.",
      nextTasks: [
        "Replace a generic loading spinner on a card grid with an animated CSS skeleton screen.",
        "Implement an optimistic UI toggle button that rolls back on simulated network failure.",
        "Design an engaging empty state with an icon, explanatory copy, and a Call-To-Action button."
      ],
      primarySource: "Jakob Nielsen: *Response Times: The 3 Important Limits* (nngroup.com).",
      quiz: [
        {
          q: "Why are skeleton screens psychologically superior to spinning loading spinners?",
          a: [
            "They set visual expectations of the layout and give the impression that content is actively arriving, making wait times feel shorter",
            "They reduce the amount of RAM consumed by the browser",
            "They prevent the browser from timing out",
            "They compress the data being downloaded"
          ],
          c: 0,
          why: "Skeletons focus attention on content progress rather than a waiting indicator, reducing perceived duration."
        },
        {
          q: "What is the defining characteristic of 'Optimistic UI'?",
          a: [
            "The interface immediately reflects the expected successful outcome of an action before the server network request completes",
            "The interface displays inspirational quotes to users",
            "The interface only works when the user is smiling",
            "The interface assumes that errors can never occur"
          ],
          c: 0,
          why: "Optimistic UI eliminates perceived network latency by updating instantly and rolling back only if errors occur."
        },
        {
          q: "What is an 'empty state' in interface design?",
          a: [
            "The screen displayed when there is no user data to show (e.g. fresh account with no projects or an empty cart)",
            "A screen that has crashed completely",
            "A deleted database table",
            "A form with missing required fields"
          ],
          c: 0,
          why: "Empty states guide first-time or zero-data users on how to populate the screen and take their first action."
        },
        {
          q: "What happens if a user clicks a button and receives zero visual feedback for 2 full seconds?",
          a: [
            "They assume the click was not registered and repeatedly click the button, triggering duplicate requests or rage-quits",
            "They assume the server is working at optimal speed",
            "The browser automatically zooms in",
            "The mouse cursor turns into an hourglass automatically"
          ],
          c: 0,
          why: "Without immediate feedback within 100–300ms, users perceive the app as unresponsive and click repeatedly."
        }
      ]
    },
    {
      n: 8,
      id: "design-systems-and-usability-testing",
      title: "Design Tokens & Usability Heuristics",
      topic: "Feedback, Micro-Interactions & Usability Testing",
      anim: "Layers",
      lede: "How do teams maintain UI consistency at scale? Master design tokens, component libraries, and Nielsen's 10 Usability Heuristics.",
      winShort: "Architect design tokens in CSS and evaluate interfaces using Nielsen Norman's 10 Usability Heuristics",
      missionLink: "Systematize UI engineering across engineering teams and catch usability defects before shipping",
      sec1: {
        title: "What are Design Tokens?",
        content: `<p>A <b>Design Token</b> is a named visual abstraction representing a design decision (e.g. colors, spacing, typography scales, shadows, border radiuses) stored as platform-agnostic variables.</p><p>Instead of hardcoding <code>#2563eb</code> or <code>16px</code> in 500 different CSS files, code references <code>var(--color-primary)</code> and <code>var(--space-4)</code>. When brand colors or dark themes update, changing one token value updates the entire application instantly.</p>`,
        keyIdea: "Design tokens are the atomic source of truth for visual decisions across an organization."
      },
      predict: {
        q: "What is the primary benefit of evaluating an interface against Jakob Nielsen's 10 Usability Heuristics?",
        a: [
          "It provides a structured, objective framework to identify usability flaws before conducting expensive user testing",
          "It guarantees that a website will rank number 1 on Google search",
          "It replaces all automated software unit tests",
          "It reduces database query latency by 50%"
        ],
        c: 0,
        why: "Heuristic evaluation is an efficient expert inspection method that catches widespread usability errors early."
      },
      sec2: {
        title: "Nielsen's 10 Usability Heuristics",
        content: `<p>Jakob Nielsen's 10 heuristics are the foundational laws of software usability. Essential highlights:</p><ul><li><b>1. Visibility of System Status:</b> Always keep users informed about what is going on (loading bars, saving badges).</li><li><b>2. Match between System and the Real World:</b> Speak the user's language, not internal technical jargon.</li><li><b>3. User Control and Freedom:</b> Provide clear 'emergency exits' (Undo, Cancel, Back buttons).</li><li><b>5. Error Prevention:</b> Design systems that prevent errors from happening in the first place (confirmations before deletion, sensible input constraints).</li><li><b>9. Help Users Recognize, Diagnose, and Recover from Errors:</b> Express error messages in plain language with constructive solutions.</li></ul>`,
      },
      diagram: {
        boxes: [
          { title: "Design Tokens (CSS)", lines: ["--color-primary", "--space-4, --radius-md", "Single source of truth"] },
          { title: "Component Library", lines: ["<Button variant='primary'>", "<Modal>", "Consistent visual vocabulary"] },
          { title: "Heuristic Audit", lines: ["Visibility of system status", "Error prevention & Undo", "Predictable, trustworthy UX"] }
        ]
      },
      sec3: {
        title: "Tracing a heuristic evaluation on a destructive action",
        content: `<p>Trace how applying Usability Heuristic #5 (Error Prevention) protects users from catastrophic data loss.</p>`,
      },
      trace: {
        code: [
          "1. User clicks: 'Delete Production Database'",
          "2. Flawed UX: Deletes immediately -> Catastrophic accident!",
          "3. Heuristic #5 Applied (Error Prevention): Modal appears requiring typing database name to confirm",
          "4. Heuristic #3 Applied (User Control): Clear 'Cancel' button allows backing out safely",
          "5. Heuristic #1 Applied (System Status): Progress indicator shows 'Safely archiving backup before deletion...'"
        ],
        steps: [
          { line: 0, vars: { high_stakes_action: "Destructive user intent initiated" } },
          { line: 2, vars: { guardrail: "Confirmation friction prevents accidental clicks" } },
          { line: 3, vars: { emergency_exit: "Cancel restores state without consequence" } },
          { line: 4, vars: { transparency: "System status communicates background safety steps" } }
        ]
      },
      practiceIntro: "Test your understanding of design systems, tokens, and usability heuristics.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Named variables representing design decisions are design <0>.",
          "The usability heuristic providing an emergency exit or Undo feature is User Control and <1>.",
          "Preventing users from making mistakes through good design is Error <2>."
        ],
        blanks: [
          { a: ["tokens"], why: "Design tokens store visual decisions." },
          { a: ["Freedom"], why: "User Control and Freedom ensures safety." },
          { a: ["Prevention"], why: "Error Prevention is Heuristic #5." }
        ]
      },
      win: "You can structure production design token systems and audit software against Nielsen's 10 Usability Heuristics.",
      nextTasks: [
        "Audit a web application against Nielsen's 10 Usability Heuristics and document 3 critical violations.",
        "Add a confirmation step and an 'Undo' toast notification to a destructive delete action.",
        "Organize your CSS variables into tiered tokens: Global (palette) -> Semantic (intent) -> Component (scoped)."
      ],
      primarySource: "Jakob Nielsen: *10 Usability Heuristics for User Interface Design* (nngroup.com/articles/ten-usability-heuristics).",
      quiz: [
        {
          q: "What is a 'Design Token' in modern frontend architecture?",
          a: [
            "A centralized, platform-agnostic variable (like a CSS custom property) that stores a specific visual design decision (color, spacing, font)",
            "A cryptocurrency used to purchase web templates",
            "An authentication token stored in an HTTP cookie",
            "A physical security key used to log into computers"
          ],
          c: 0,
          why: "Design tokens encapsulate design decisions into reusable variables, ensuring system-wide consistency."
        },
        {
          q: "Which of Nielsen's Usability Heuristics is demonstrated by an 'Undo' button after deleting an email?",
          a: [
            "User Control and Freedom",
            "Aesthetic and Minimalist Design",
            "Flexibility and Efficiency of Use",
            "Match between system and the real world"
          ],
          c: 0,
          why: "User Control and Freedom ensures users have a clear emergency exit when actions are taken by mistake."
        },
        {
          q: "What is the core idea behind Heuristic #5: 'Error Prevention'?",
          a: [
            "It is far better to design an interface that prevents mistakes from occurring in the first place than to craft good error messages",
            "Errors should be hidden from the user so they do not worry",
            "Every form input should be made read-only",
            "Software should automatically shut down when a typo occurs"
          ],
          c: 0,
          why: "Preventing errors through intelligent constraints and confirmations is vastly superior to handling errors after the fact."
        },
        {
          q: "What does Heuristic #1: 'Visibility of System Status' require?",
          a: [
            "The design should always keep users informed about what is going on, through appropriate feedback within a reasonable time",
            "The source code must be published on GitHub",
            "The server IP address must be shown on every page",
            "The user must see the database schema in the footer"
          ],
          c: 0,
          why: "Users must always understand what state the system is in (saving, uploading, processing, error)."
        }
      ]
    }
  ]
};

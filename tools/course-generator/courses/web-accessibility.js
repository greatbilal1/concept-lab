"use strict";

module.exports = {
  id: "web-accessibility",
  title: "Web Accessibility (a11y)",
  num: 106,
  emoji: "♿",
  desc: "Design and build web interfaces that are usable by everyone, regardless of ability.",
  mission: `# Mission — Web Accessibility (a11y)

## Why this course exists

The power of the Web is in its universality: access by everyone regardless of disability is an essential aspect. Over 1.3 billion people worldwide live with significant disabilities, including visual, motor, auditory, and cognitive impairments. Yet, over 95% of top website homepages contain detectable accessibility failures. Web accessibility is not a charitable afterthought or a tedious checklist: it is a core engineering requirement, a legal mandate (ADA, Section 508, European Accessibility Act), and a hallmark of superior frontend craftsmanship.

## What the learner can do at the end

- Explain how screen readers (NVDA, VoiceOver, JAWS) translate DOM markup into spoken speech and Braille displays.
- Inspect the browser's Accessibility Tree (AOM) alongside the standard DOM tree.
- Structure pages using HTML5 semantic landmark elements and strict heading hierarchies.
- Build fully accessible forms with programmatic label associations, hint text, and error validation announcements.
- Apply the First Rule of ARIA: "Do not use ARIA when native HTML elements can do the job".
- Announce asynchronous dynamic page updates politely or assertively using aria-live regions.
- Implement robust keyboard navigation, logical tabindex order, skip links, and modal focus traps.
- Audit web applications using automated scanners (Axe, Lighthouse) and manual keyboard testing.

## What this course is NOT

- Not a graphic design theory course (covered in UI & UX for Engineers).
- Not a single-framework component library tutorial. It focuses on the W3C Web Content Accessibility Guidelines (WCAG 2.2) and browser platform primitives.

## Success looks like

When reviewing an interactive web component (such as a modal dialog, combobox, or multi-step form), the learner operates it using only the keyboard and a screen reader, verifying focus management, accessible names, and live announcements without looking at the monitor.
`,
  notes: `# Notes — Web Accessibility (a11y)

## Decisions
- Group into four themes: Foundations & AOM, Structure & Forms, ARIA Mechanics, and Keyboard & Auditing.
- Ground explanations in WCAG 2.2 principles (Perceivable, Operable, Understandable, Robust) and browser Accessibility Tree construction.
`,
  resources: `# Resources — Web Accessibility (a11y)

## Knowledge (primary sources)
- W3C Web Content Accessibility Guidelines (WCAG 2.2) (w3.org/WAI/standards-guidelines/wcag).
- W3C WAI-ARIA Authoring Practices Guide (APG) (w3.org/WAI/ARIA/apg).
- MDN Web Docs: *Accessibility* (developer.mozilla.org).
- *Inclusive Design Patterns* by Heydon Pickering (Smashing Magazine).

## Wisdom
- Accessibility is not about making websites for blind people; it is about making websites work for human beings across every sensory, physical, and situational context.
`,
  cheatsheetSections: [
    {
      title: "Semantic Landmarks",
      label: "Page structure skeleton",
      code: `<body>
  <header>
    <a href="#main" class="skip-link">Skip to main content</a>
    <nav aria-label="Main Navigation">...</nav>
  </header>
  <main id="main">
    <h1>Page Title</h1>
    <section aria-labelledby="sec1">
      <h2 id="sec1">Section Title</h2>
    </section>
  </main>
  <footer>...</footer>
</body>`,
      lessonN: 3,
      lessonSlug: "landmark-elements-and-page-structure",
      lessonTitle: "Document Landmarks & Page Structure"
    },
    {
      title: "Accessible Form Field",
      label: "Label, description, and error wiring",
      code: `<div class="form-group">
  <label for="user-email">Email Address</label>
  <input 
    id="user-email" 
    type="email" 
    aria-describedby="email-hint email-error"
    aria-invalid="true" 
    required
  />
  <span id="email-hint" class="hint">We never share your email.</span>
  <span id="email-error" class="error" role="alert">Please enter a valid email address.</span>
</div>`,
      lessonN: 4,
      lessonSlug: "accessible-forms-and-error-states",
      lessonTitle: "Accessible Forms & Error States"
    },
    {
      title: "ARIA Live Region",
      label: "Dynamic update announcements",
      code: `<!-- Polite: waits until screen reader is idle -->
<div aria-live="polite" aria-atomic="true" id="cart-status">
  3 items in shopping cart
</div>

<!-- Assertive (role="alert"): interrupts immediately -->
<div role="alert" id="error-banner">
  Connection lost. Please retry.
</div>`,
      lessonN: 6,
      lessonSlug: "aria-live-regions-and-dynamic-content",
      lessonTitle: "ARIA Live Regions & Dynamic Content"
    },
    {
      title: "Modal Focus Trap",
      label: "Keyboard confinement pattern",
      code: `// Keyboard listener for dialog
modal.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
  if (e.key === "Tab") {
    const focusables = modal.querySelectorAll("button, [href], input, [tabindex='0']");
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      last.focus(); e.preventDefault();
    } else if (!e.shiftKey && document.activeElement === last) {
      first.focus(); e.preventDefault();
    }
  }
});`,
      lessonN: 7,
      lessonSlug: "keyboard-navigation-and-focus-trapping",
      lessonTitle: "Keyboard Navigation & Focus Traps"
    }
  ],
  glossaryGroups: [
    {
      id: "a11y-foundations",
      title: "Accessibility Foundations & AOM",
      terms: [
        { term: "WCAG", def: "Web Content Accessibility Guidelines: the international technical standard developed by the W3C defining criteria for accessible digital content across A, AA, and AAA levels.", lesson: 1, tags: ["standards", "wcag"] },
        { term: "Accessibility Tree", def: "A specialized parallel tree structure generated by the browser from the DOM, consumed by assistive technologies like screen readers to convey names, roles, and values.", lesson: 2, tags: ["browser", "aom"] },
        { term: "Accessible Name", def: "The programmatic string that assistive technologies use to identify an element (computed from label, text content, title, or aria-label).", lesson: 2, tags: ["aom", "semantics"] },
        { term: "Screen Reader", def: "Software that converts on-screen graphical content into synthesized audio speech or tactile refreshable Braille output for blind and low-vision users.", lesson: 1, tags: ["assistive-tech"] }
      ]
    },
    {
      id: "structure-and-forms",
      title: "Document Semantics & Forms",
      terms: [
        { term: "Landmark element", def: "A structural HTML5 element (such as header, nav, main, aside, footer) that allows screen reader users to jump directly to major sections of a page.", lesson: 3, tags: ["html", "semantics"] },
        { term: "Heading hierarchy", def: "The structured, sequential nesting of h1 through h6 headings without skipping levels, representing the document's outline.", lesson: 3, tags: ["headings"] },
        { term: "aria-describedby", def: "An attribute establishing a programmatic relationship between an element and the element(s) that provide additional descriptive help or error text.", lesson: 4, tags: ["aria", "forms"] },
        { term: "Skip link", def: "A hidden link placed at the very top of a web page that becomes visible on keyboard focus, allowing keyboard users to bypass repetitive header navigation.", lesson: 3, tags: ["keyboard", "navigation"] }
      ]
    },
    {
      id: "aria-and-live-regions",
      title: "ARIA Roles & Live Regions",
      terms: [
        { term: "WAI-ARIA", def: "Web Accessibility Initiative - Accessible Rich Internet Applications: a W3C specification of attributes that enhance accessibility when native HTML is insufficient.", lesson: 5, tags: ["aria", "standards"] },
        { term: "First Rule of ARIA", def: "The foundational design rule stating that developers should always use native semantic HTML elements instead of retrofitting generic elements with ARIA.", lesson: 5, tags: ["rules", "semantics"] },
        { term: "Live Region", def: "A DOM element configured with aria-live that instructs screen readers to announce dynamic content changes without requiring the user to move focus.", lesson: 6, tags: ["aria", "live-regions"] },
        { term: "aria-expanded", def: "A state attribute applied to collapsible interactive widgets (accordions, dropdown menus) indicating whether their associated content is visible or hidden.", lesson: 5, tags: ["aria", "states"] }
      ]
    },
    {
      id: "keyboard-and-auditing",
      title: "Keyboard Control & Auditing",
      terms: [
        { term: "Focus trap", def: "A scripting technique that keeps keyboard tab navigation confined within an active modal dialog, preventing focus from escaping to the obscured background page.", lesson: 7, tags: ["keyboard", "focus"] },
        { term: "Tabindex", def: "An HTML attribute controlling whether an element is focusable via keyboard; 0 adds to natural tab order, while -1 enables programmatic script focus only.", lesson: 7, tags: ["html", "focus"] },
        { term: "Color contrast ratio", def: "The quantitative measurement of visual luminance difference between text foreground and background; WCAG AA requires at least 4.5:1 for normal text.", lesson: 8, tags: ["design", "contrast"] },
        { term: "Axe Core", def: "The industry-standard open-source automated accessibility testing engine used in Lighthouse, Cypress, and browser devtools.", lesson: 8, tags: ["testing", "tools"] }
      ]
    }
  ],
  topics: [
    "Accessibility Foundations & Assistive Tech",
    "Semantic HTML, Landmarks & The AOM",
    "ARIA Roles, States & Live Regions",
    "Keyboard Navigation, Focus & Auditing"
  ],
  lessons: [
    {
      n: 1,
      id: "why-accessibility-and-assistive-tech",
      title: "Why Accessibility: Assistive Tech & The Law",
      topic: "Accessibility Foundations & Assistive Tech",
      anim: "Globe",
      lede: "Over one billion people experience disabilities. Learn how assistive technologies interact with websites and the legal landscape of accessibility.",
      winShort: "Articulate the four WCAG principles (POUR) and explain how assistive technology navigates web applications",
      missionLink: "Comply with global accessibility legislation and build software welcoming to every user",
      sec1: {
        title: "Disabilities are human realities, not edge cases",
        content: `<p>Disability is part of being human. Impairments fall across four broad categories:</p><ul><li><b>Visual:</b> Blindness, low vision, color blindness, cataracts.</li><li><b>Motor / Mobility:</b> Tremors, paralysis, RSI, cerebral palsy, or temporary injuries (broken arm).</li><li><b>Auditory:</b> Deafness, hard of hearing.</li><li><b>Cognitive & Neurological:</b> Dyslexia, ADHD, autism, memory loss, seizure disorders.</li></ul><p>Accessibility also benefits situational contexts: operating a phone in glaring sunlight, holding a baby with one arm, or watching a muted video in a quiet library.</p>`,
        keyIdea: "Accessibility is universal design: solving for permanent disabilities directly improves experiences for situational limitations."
      },
      predict: {
        q: "What are the four foundational principles of the Web Content Accessibility Guidelines (WCAG)?",
        a: [
          "Perceivable, Operable, Understandable, Robust (POUR)",
          "Performance, Optimization, Usability, Reliability",
          "Public, Open, Unrestricted, Resilient",
          "Parsing, Organization, Uniformity, Responsiveness"
        ],
        c: 0,
        why: "POUR is the official foundational acronym of WCAG: Perceivable, Operable, Understandable, Robust."
      },
      sec2: {
        title: "The legal and compliance landscape",
        content: `<p>Accessibility is no longer optional. Global legislation strictly enforces WCAG 2.1/2.2 Level AA compliance:</p><ul><li><b>Americans with Disabilities Act (ADA Title II / III):</b> Applied to digital websites as public accommodations; thousands of lawsuits are filed annually against inaccessible sites.</li><li><b>Section 508:</b> Mandates accessible technology for all US federal agencies and contractors.</li><li><b>European Accessibility Act (EAA):</b> Mandates digital accessibility across e-commerce, banking, and digital services across the EU.</li></ul>`,
      },
      diagram: {
        boxes: [
          { title: "Perceivable", lines: ["Text alternatives for images", "Captions for audio", "Sufficient color contrast"] },
          { title: "Operable", lines: ["100% keyboard operable", "No seizure triggers", "Generous time limits"] },
          { title: "Understandable", lines: ["Predictable navigation", "Clear error instructions", "Plain, readable language"] }
        ]
      },
      sec3: {
        title: "Tracing how screen readers consume web markup",
        content: `<p>Trace how a screen reader interprets an unlabelled button vs an accessible button.</p>`,
      },
      trace: {
        code: [
          "# Bad markup: <div onclick='submit()'>X</div>",
          "Screen reader speech: 'unlabeled graphic' or ignored completely (keyboard unreachable)",
          "# Good markup: <button type='submit' aria-label='Close Dialog'>X</button>",
          "Screen reader speech: 'Close Dialog, button'"
        ],
        steps: [
          { line: 0, vars: { element: "Generic <div> without semantics or keyboard focus" } },
          { line: 1, vars: { user_experience: "Blind and keyboard users completely locked out" } },
          { line: 2, vars: { element: "Native <button> with accessible name" } },
          { line: 3, vars: { user_experience: "Clear role, accessible name, and keyboard operable" } }
        ]
      },
      practiceIntro: "Test your understanding of accessibility principles and assistive technology.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The four principles of WCAG are captured by the acronym <0>.",
          "Software that speaks on-screen text aloud for blind users is a <1> reader.",
          "The standard target level of WCAG compliance for public websites is Level <2>."
        ],
        blanks: [
          { a: ["POUR"], why: "Perceivable, Operable, Understandable, Robust." },
          { a: ["screen"], why: "Screen readers vocalize web interfaces." },
          { a: ["AA"], why: "WCAG Level AA is the universal legal standard." }
        ]
      },
      win: "You can explain the moral, business, and legal drivers for web accessibility and apply the four POUR principles.",
      nextTasks: [
        "Turn on your operating system's built-in screen reader (VoiceOver on macOS, Narrator on Windows) and navigate a news website.",
        "Attempt to navigate your organization's website using only the Tab and Enter keys without touching a mouse.",
        "Review the WCAG 2.2 Level AA success criteria checklist."
      ],
      primarySource: "W3C: *Introduction to Web Accessibility* (w3.org/WAI/fundamentals/accessibility-intro).",
      quiz: [
        {
          q: "What does the 'Perceivable' principle in WCAG mandate?",
          a: [
            "Information and user interface components must be presentable to users in ways they can perceive (it cannot be invisible to all senses)",
            "Webpages must load in under 1 second",
            "Images must have a resolution of at least 4K",
            "Websites must be translated into at least 10 languages"
          ],
          c: 0,
          why: "Perceivable means content must be detectable through sight, sound, or touch (e.g. alt text for images, captions for video)."
        },
        {
          q: "What is an example of a 'situational' disability?",
          a: [
            "Trying to read a smartphone screen under bright, direct sunlight with high glare",
            "Losing internet connection on a plane",
            "Running out of phone battery",
            "Having a misspelled email address"
          ],
          c: 0,
          why: "Situational limitations (glare, noise, carrying items) replicate challenges faced by people with permanent impairments."
        },
        {
          q: "What is the standard target compliance level expected in legal settlements and enterprise accessibility audits?",
          a: [
            "WCAG Level AA",
            "WCAG Level A",
            "WCAG Level AAA",
            "ISO 9001"
          ],
          c: 0,
          why: "WCAG Level AA is the established legal benchmark for public and commercial web applications."
        },
        {
          q: "How does a screen reader (such as NVDA or VoiceOver) interact with a web page?",
          a: [
            "It queries the browser's Accessibility Tree to speak element roles, names, states, and text content aloud",
            "It takes continuous screenshots and runs optical character recognition (OCR)",
            "It reads the raw HTML source code including closing tags aloud",
            "It intercepts network TCP packets directly"
          ],
          c: 0,
          why: "Screen readers communicate directly with the browser's Accessibility Tree (AOM) rather than raw pixels or raw HTML text."
        }
      ]
    },
    {
      n: 2,
      id: "the-accessibility-tree-and-semantics",
      title: "The Accessibility Tree & Native Semantics",
      topic: "Accessibility Foundations & Assistive Tech",
      anim: "Layers",
      lede: "Browsers create two trees: the DOM Tree for visual rendering, and the Accessibility Tree for assistive devices. Learn how they sync.",
      winShort: "Inspect the browser Accessibility Tree and compute an element's Role, Name, State, and Value",
      missionLink: "Guarantee that interactive UI elements communicate their purpose clearly to assistive software",
      sec1: {
        title: "The parallel tree: DOM vs AOM",
        content: `<p>When a browser parses an HTML document, it constructs the <b>DOM Tree</b> (Document Object Model) to compute styling and layout. In parallel, it creates the <b>Accessibility Tree</b> (often called the Accessibility Object Model or AOM).</p><p>Assistive technologies do not inspect CSS pixels. They query the Accessibility Tree. Every accessible node has four essential properties:</p><ul><li><b>Role:</b> What the element is (e.g. <code>button</code>, <code>heading</code>, <code>checkbox</code>).</li><li><b>Name:</b> The label identifying this specific element (e.g. <i>"Submit Order"</i>).</li><li><b>State:</b> Current condition (e.g. <code>checked</code>, <code>expanded</code>, <code>disabled</code>).</li><li><b>Value:</b> Current data quantity (e.g. <code>50%</code> in a progress bar).</li></ul>`,
        keyIdea: "The Accessibility Tree exposes Role, Name, State, and Value to assistive tech; styling does not affect accessibility."
      },
      predict: {
        q: "What does the browser Accessibility Tree display for: <div class='btn' onclick='pay()'>Pay Now</div>?",
        a: [
          "Role: generic or text; Name: 'Pay Now' (it does NOT report as a button, and cannot be focused via keyboard)",
          "Role: button; Name: 'Pay Now'",
          "Role: payment-terminal",
          "It is completely omitted from the tree"
        ],
        c: 0,
        why: "A generic <div> has no semantic button role in the accessibility tree, making it invisible to button shortcuts."
      },
      sec2: {
        title: "How Accessible Names are computed",
        content: `<p>The <b>Accessible Name Computation algorithm</b> calculates an element's label following a strict hierarchy of precedence:</p><ol><li><code>aria-labelledby</code> (references another element's ID).</li><li><code>aria-label</code> (direct string attribute).</li><li>Native element label (e.g. <code>&lt;label for="..."&gt;</code> on inputs, or <code>alt</code> on images).</li><li>Subtree text content (the text inside the button).</li><li><code>title</code> attribute (weakest fallback).</li></ol>`,
      },
      diagram: {
        boxes: [
          { title: "HTML Source", lines: ["<button aria-label='Search Site'>", "  <svg class='icon-glass' />", "</button>"] },
          { title: "Accessibility Tree Node", lines: ["Role: button", "Name: 'Search Site' (from aria-label)", "Focusable: true"] },
          { title: "Screen Reader Speech", lines: ["'Search Site, button'", "User knows action and element type!"] }
        ]
      },
      sec3: {
        title: "Tracing accessibility tree inspection in Chrome/Firefox DevTools",
        content: `<p>Trace how browser DevTools inspects computed accessibility properties.</p>`,
      },
      trace: {
        code: [
          "1. Open Chrome DevTools -> Elements tab -> Accessibility panel",
          "2. Inspect: <input type='checkbox' id='terms' checked>",
          "3. Computed Properties: Role = 'checkbox'",
          "4. Computed Properties: Name = 'Accept Terms and Conditions'",
          "5. Computed Properties: Checked = true"
        ],
        steps: [
          { line: 0, vars: { tool: "Browser accessibility inspector opened" } },
          { line: 2, vars: { role_check: "Native HTML automatically provides role='checkbox'" } },
          { line: 3, vars: { name_check: "Resolved from associated <label for='terms'>" } },
          { line: 4, vars: { state_check: "Checked state correctly reflected in AOM" } }
        ]
      },
      practiceIntro: "Test your understanding of the Accessibility Tree and accessible names.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The parallel tree created by browsers for assistive technologies is the <0> Tree.",
          "The four core properties of an accessible node are Role, Name, State, and <1>.",
          "The attribute with the highest precedence for naming an element is aria-<2>."
        ],
        blanks: [
          { a: ["Accessibility"], why: "The Accessibility Tree powers screen readers." },
          { a: ["Value"], why: "Role, Name, State, and Value." },
          { a: ["labelledby"], why: "aria-labelledby overrides all other name sources." }
        ]
      },
      win: "You can inspect the browser Accessibility Tree and verify that every interactive element has an unambiguous Role, Name, State, and Value.",
      nextTasks: [
        "Open Chrome DevTools, navigate to the Accessibility pane, and inspect five interactive elements on a web page.",
        "Compare the accessible name calculation between an input with aria-label vs <label>.",
        "Inspect an icon-only button and verify whether its accessible name is empty."
      ],
      primarySource: "W3C: *Accessible Name and Description Computation 1.2* (w3.org/TR/accname-1.2).",
      quiz: [
        {
          q: "What four fundamental properties does the browser Accessibility Tree expose for an interactive control?",
          a: [
            "Role, Name, State, and Value",
            "Color, Font, Margin, and Padding",
            "URL, Domain, Protocol, and Port",
            "Width, Height, X, and Y"
          ],
          c: 0,
          why: "Role (what it is), Name (what it's called), State (current condition), and Value (its data) define accessibility semantics."
        },
        {
          q: "Why is '<button>Click Me</button>' infinitely better than '<div onclick=\"...\">Click Me</div>'?",
          a: [
            "Native buttons automatically provide role='button', keyboard focusability (Tab), and Space/Enter key activations for free",
            "Native buttons load 10 times faster",
            "Div elements cannot have CSS styles applied to them",
            "Native buttons bypass all browser security firewalls"
          ],
          c: 0,
          why: "Native HTML elements supply full Accessibility Tree roles, keyboard focus, and keyboard activation without writing custom JavaScript."
        },
        {
          q: "Which attribute takes HIGHEST precedence when the browser computes an element's accessible name?",
          a: [
            "aria-labelledby",
            "aria-label",
            "title",
            "placeholder"
          ],
          c: 0,
          why: "aria-labelledby takes absolute precedence in the W3C Accessible Name Computation specification."
        },
        {
          q: "What happens if an image tag is written as '<img src=\"cat.jpg\">' without an 'alt' attribute?",
          a: [
            "Screen readers often read the raw file name (e.g. 'cat dot jpg'), creating a confusing, degraded user experience",
            "The image is blocked by the browser",
            "The browser crashes",
            "The computer's speakers are muted"
          ],
          c: 0,
          why: "Without an alt attribute, screen readers fall back to reading raw image source file paths, disrupting reading flow."
        }
      ]
    },
    {
      n: 3,
      id: "landmark-elements-and-page-structure",
      title: "Document Landmarks & Page Structure",
      topic: "Semantic HTML, Landmarks & The AOM",
      anim: "LayersOrbit",
      lede: "Screen reader users do not read entire pages line-by-line; they jump between landmarks and headings. Learn to architect page hierarchy.",
      winShort: "Structure accessible document layouts using HTML5 landmark elements and strict heading hierarchies",
      missionLink: "Enable efficient non-visual page scanning for screen reader users",
      sec1: {
        title: "How screen reader users scan pages",
        content: `<p>A sighted user opening a web page glances across the screen in 2 seconds, visually identifying the navigation bar, the hero banner, and the footer. Blind users cannot glance visually. Instead, they press hotkeys on their screen reader:</p><ul><li><b>'H' key:</b> Jumps to the next heading (<code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>).</li><li><b>'D' key (Landmarks):</b> Jumps directly between major structural landmark regions (e.g. Main, Navigation, Header, Footer).</li></ul><p>If your page is constructed purely of generic <code>&lt;div&gt;</code> tags, the user has zero landmarks to jump to.</p>`,
        keyIdea: "Screen reader users navigate through headings and landmarks; proper document structure is their navigation map."
      },
      predict: {
        q: "What is wrong with skipping a heading level, such as placing an <h4> directly below an <h2> without an <h3>?",
        a: [
          "It confuses screen reader users, who assume content was accidentally omitted or that they missed an entire conceptual subsection",
          "The browser refuses to render the h4",
          "It causes an error in the JavaScript console",
          "It slows down HTML parsing speed"
        ],
        c: 0,
        why: "Heading levels must represent an outline: skipping levels breaks the mental model of document structure."
      },
      sec2: {
        title: "HTML5 semantic landmarks and skip links",
        content: `<p>HTML5 provides dedicated landmark elements that map directly to accessibility roles:</p><ul><li><code>&lt;header&gt;</code> (role="banner"): Top branding and site header.</li><li><code>&lt;nav&gt;</code> (role="navigation"): Major navigation blocks.</li><li><code>&lt;main&gt;</code> (role="main"): The unique central content of the document. Only one per page!</li><li><code>&lt;aside&gt;</code> (role="complementary"): Sidebar content related to main.</li><li><code>&lt;footer&gt;</code> (role="contentinfo"): Copyright, legal links.</li></ul><p>Always include a <b>Skip Link</b>: a visually hidden link at the very top of the page that becomes visible on focus, allowing keyboard users to jump straight to <code>&lt;main id="main"&gt;</code> without tabbing through 30 header links.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Skip Link", lines: ["<a href='#main' class='skip'>", "Skip to main content", "Visible on Tab focus!"] },
          { title: "<header> & <nav>", lines: ["Banner landmark", "Main navigation landmark", "Bypassed via skip link"] },
          { title: "<main id='main'>", lines: ["<h1> Page Title", "<h2> Subsection", "Core article content"] }
        ]
      },
      sec3: {
        title: "Tracing skip link keyboard navigation",
        content: `<p>Trace how a keyboard-only user uses a skip link to bypass repetitive headers.</p>`,
      },
      trace: {
        code: [
          "1. User presses Tab on fresh page load",
          "2. Focus lands on <a href='#main' class='skip-link'>",
          "3. CSS :focus rule activates: top: 10px; left: 10px; (Link becomes visible)",
          "4. User presses Enter",
          "5. Browser scrolls directly to <main id='main'> and sets focus; 30 nav links bypassed!"
        ],
        steps: [
          { line: 0, vars: { initial_state: "Page loaded at top" } },
          { line: 1, vars: { focus_event: "Skip link receives focus first" } },
          { line: 2, vars: { visibility: "CSS brings link into viewport" } },
          { line: 4, vars: { destination: "Focus transferred directly to <main>" } }
        ]
      },
      practiceIntro: "Test your mastery of document landmarks, heading structures, and skip links.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The HTML5 element representing the primary central content of a document is <<0>>.",
          "A link allowing keyboard users to bypass header navigation is a <1> link.",
          "Screen reader users jump between headings by pressing the letter <2>."
        ],
        blanks: [
          { a: ["main"], why: "main represents primary content." },
          { a: ["skip"], why: "Skip links jump directly to main content." },
          { a: ["H", "h"], why: "The H key navigates headings." }
        ]
      },
      win: "You can structure clean, navigable document hierarchies with HTML5 landmarks, strict heading outlines, and skip links.",
      nextTasks: [
        "Audit the heading hierarchy of an existing page to ensure no levels are skipped (e.g. h1 to h3).",
        "Implement a fully accessible CSS skip link that appears only when focused with the Tab key.",
        "Add aria-label to multiple <nav> elements (e.g. 'Main Navigation' vs 'Footer Navigation') so screen readers distinguish them."
      ],
      primarySource: "W3C WAI: *Page Regions and Landmarks* (w3.org/WAI/tutorials/page-structure/regions).",
      quiz: [
        {
          q: "Why should there only ever be one visible '<main>' landmark on an HTML page?",
          a: [
            "Because <main> represents the unique primary content of that specific document, distinct from repeated headers and footers",
            "Because HTML parsers crash if two <main> tags are encountered",
            "Because CSS styles cannot apply to multiple <main> elements",
            "Because <main> is restricted to 1,000 words"
          ],
          c: 0,
          why: "The <main> element isolates the unique primary topic of the document; having multiple confuses navigation."
        },
        {
          q: "What is the purpose of an accessible 'Skip Link'?",
          a: [
            "To allow keyboard and screen reader users to skip over repetitive header links and jump directly to main content",
            "To skip video advertisements automatically",
            "To redirect mobile users to the native app store",
            "To bypass JavaScript compilation"
          ],
          c: 0,
          why: "Skip links prevent keyboard users from having to press Tab dozens of times through navigation menus on every page."
        },
        {
          q: "If a webpage has two distinct '<nav>' elements (one in header, one in footer), how should they be differentiated for screen readers?",
          a: [
            "By adding descriptive aria-label attributes, such as aria-label='Main menu' and aria-label='Footer links'",
            "By naming one nav1 and the other nav2 in CSS classes",
            "By wrapping one in an <iframe>",
            "By hiding one from the screen reader entirely"
          ],
          c: 0,
          why: "Providing unique aria-label strings allows screen reader users to know which navigation landmark they are entering."
        },
        {
          q: "How should heading levels (h1 through h6) be organized on a page?",
          a: [
            "In strict hierarchical nesting according to document outline, without skipping levels (e.g. h1 followed by h2, then h3)",
            "Based entirely on desired visual font size",
            "Randomly to create visual contrast",
            "In reverse order from h6 at the top to h1 at the bottom"
          ],
          c: 0,
          why: "Headings communicate document structure; skipping levels breaks the outline and confuses users."
        }
      ]
    },
    {
      n: 4,
      id: "accessible-forms-and-error-states",
      title: "Accessible Forms, Labels & Error Announcements",
      topic: "Semantic HTML, Landmarks & The AOM",
      anim: "CodePulse",
      lede: "Forms are the primary point of failure on the web. Learn how to programmatically associate labels, hints, and error alerts.",
      winShort: "Build accessible forms with programmatic label wiring, aria-describedby hints, and aria-invalid errors",
      missionLink: "Ensure users with disabilities can independently complete purchases, logins, and registrations",
      sec1: {
        title: "The fatal flaw: Missing form labels",
        content: `<p>A visually sighted user sees a text box next to the word <i>"Phone Number"</i>. But a screen reader does not infer relationships by visual proximity: unless programmatically linked, it focuses the input and announces: <code>"edit text, blank"</code>.</p><p>You must programmatically connect inputs and labels:</p><ul><li><b>Explicit association:</b> <code>&lt;label for="user-phone"&gt;Phone&lt;/label&gt;&lt;input id="user-phone" ... /&gt;</code>.</li><li><b>Implicit wrapping:</b> <code>&lt;label&gt;Phone &lt;input ... /&gt;&lt;/label&gt;</code>.</li></ul><p>Never rely on <code>placeholder="..."</code> as a label: placeholders disappear when typing begins, lack sufficient contrast, and are ignored by many assistive devices.</p>`,
        keyIdea: "Every form control must have a programmatically associated label via the for/id relationship."
      },
      predict: {
        q: "Why is 'placeholder=\"Enter your password\"' an unacceptable substitute for a real <label> element?",
        a: [
          "It disappears once the user begins typing, fails color contrast standards, and is not reliably spoken as an accessible name",
          "Browsers disable password submission when placeholders are used",
          "Placeholders only render on mobile phones",
          "It prevents form autofill from working"
        ],
        c: 0,
        why: "Placeholders vanish on input, burden working memory, and fail WCAG requirements for permanent accessible labels."
      },
      sec2: {
        title: "Wiring hints and errors with aria-describedby",
        content: `<p>An input often needs auxiliary text: password requirements or validation error messages. The <code>aria-describedby</code> attribute takes one or more element IDs and speaks their text <i>after</i> the label is read.</p><p>When validation fails, add <code>aria-invalid="true"</code> to the input and point <code>aria-describedby</code> to the error message container (which should also have <code>role="alert"</code>).</p>`,
      },
      diagram: {
        boxes: [
          { title: "<label for='email'>", lines: ["Name: 'Email Address'", "Announced first upon focus"] },
          { title: "<input id='email'>", lines: ["aria-invalid='true'", "aria-describedby='err-msg'"] },
          { title: "<span id='err-msg'>", lines: ["role='alert'", "'Invalid email format'", "Announced as description!"] }
        ]
      },
      sec3: {
        title: "Tracing screen reader announcement on invalid input",
        content: `<p>Trace how a screen reader announces an invalid form control configured with accessibility attributes.</p>`,
      },
      trace: {
        code: [
          "<label for='pwd'>Password</label>",
          "<input id='pwd' type='password' aria-invalid='true' aria-describedby='pwd-err'>",
          "<span id='pwd-err' role='alert'>Must contain at least 8 characters</span>",
          "User tabs to input field.",
          "Screen reader speaks: 'Password, invalid data, edit text, secure, Must contain at least 8 characters'"
        ],
        steps: [
          { line: 0, vars: { label: "'Password' read first" } },
          { line: 1, vars: { state: "aria-invalid='true' announces 'invalid data'" } },
          { line: 2, vars: { type: "'secure' announces password masking" } },
          { line: 4, vars: { description: "aria-describedby reads exact error message text" } }
        ]
      },
      practiceIntro: "Test your understanding of accessible form design and error communication.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "To link a label to an input, the label's <0> attribute must match the input's id.",
          "To associate secondary instructions or error text with an input, use aria-<1>.",
          "When a form field fails validation, set the attribute aria-<2>='true'."
        ],
        blanks: [
          { a: ["for"], why: "for links to input id." },
          { a: ["describedby"], why: "aria-describedby provides additional descriptions." },
          { a: ["invalid"], why: "aria-invalid flags validation failure." }
        ]
      },
      win: "You can build fully accessible forms with programmatic label wiring, contextual instructions, and immediate error announcements.",
      nextTasks: [
        "Refactor an existing login form so that all inputs have programmatic <label for='...'> associations.",
        "Add aria-describedby to an input with password complexity requirements and test with a screen reader.",
        "Implement a live form validation error that announces immediately using role='alert'."
      ],
      primarySource: "W3C WAI: *Form Instructions and Validating Input* (w3.org/WAI/tutorials/forms).",
      quiz: [
        {
          q: "How do you programmatically link a '<label>' element to an '<input>' element?",
          a: [
            "Set the label's 'for' attribute to match the exact 'id' attribute of the input",
            "Give them the same CSS class name",
            "Place them inside the same <div> container",
            "Set the input's 'name' attribute to match the label's text"
          ],
          c: 0,
          why: "The label for='id' attribute explicitly binds the label to the input across the Accessibility Tree."
        },
        {
          q: "What does the attribute 'aria-describedby=\"hint-text\"' do?",
          a: [
            "It instructs screen readers to vocalize the content of element #hint-text after reading the input's label",
            "It translates the hint into Spanish",
            "It turns the input into a multi-line textarea",
            "It automatically validates the input with a regex"
          ],
          c: 0,
          why: "aria-describedby provides supplementary guidance or error messages that assistive tech speaks on focus."
        },
        {
          q: "What attribute should be applied to an input element when user validation fails?",
          a: [
            "aria-invalid=\"true\"",
            "class=\"error-box\"",
            "invalid=\"yes\"",
            "disabled=\"true\""
          ],
          c: 0,
          why: "aria-invalid='true' programmatically informs assistive tech that the field contains an error."
        },
        {
          q: "When grouping related radio buttons or checkboxes (e.g. shipping options), what HTML elements should wrap them?",
          a: [
            "<fieldset> containing a <legend> as the group title",
            "A plain <div> with an <h3> title",
            "<form-group> with a <span> title",
            "An unordered list <ul> without headers"
          ],
          c: 0,
          why: "<fieldset> and <legend> group related radio/checkbox controls, speaking the legend on every option selection."
        }
      ]
    },
    {
      n: 5,
      id: "aria-roles-states-and-properties",
      title: "ARIA: Roles, States & The First Rule",
      topic: "ARIA Roles, States & Live Regions",
      anim: "Flow",
      lede: "ARIA is powerful, but dangerous when misused. Learn the First Rule of ARIA and how to apply roles, states, and properties correctly.",
      winShort: "Apply WAI-ARIA roles, states, and properties appropriately while prioritizing native semantic HTML",
      missionLink: "Prevent catastrophic ARIA misconfigurations that break assistive technology functionality",
      sec1: {
        title: "The First Rule of ARIA",
        content: `<p>The official W3C specification begins with a startling statement: <b>"If you can use a native HTML element or attribute with the semantics and behavior you require, then do so! Do NOT use ARIA!"</b></p><p>Why? Because ARIA only changes the <i>accessibility representation</i> in the AOM; it adds <b>zero behavior</b>. Writing <code>&lt;div role="button"&gt;</code> does <i>not</i> make the div focusable with Tab, and does <i>not</i> trigger click on Enter or Space. You must write 40 lines of JavaScript to recreate what <code>&lt;button&gt;</code> provides out of the box.</p>`,
        keyIdea: "No ARIA is better than bad ARIA. Always prefer native HTML elements."
      },
      predict: {
        q: "What does adding role='button' to a <div> do?",
        a: [
          "It tells the Accessibility Tree to report the element as a button, but does NOT make it keyboard focusable or handle keyboard clicks",
          "It automatically makes the div behave identically to a native <button>",
          "It applies native browser button styling automatically",
          "It disables mouse clicks on the div"
        ],
        c: 0,
        why: "ARIA changes semantics in the accessibility tree, but imparts zero keyboard behavior, focusability, or browser events."
      },
      sec2: {
        title: "Roles, States, and Properties",
        content: `<p>When native HTML cannot express a complex widget (like an accordion, tabs, or modal dialog), ARIA fills the gap with three categories:</p><ul><li><b>Roles:</b> Define what an element is (e.g. <code>role="dialog"</code>, <code>role="tab"</code>, <code>role="progressbar"</code>). Roles do not change after creation.</li><li><b>States:</b> Dynamic attributes that change frequently (e.g. <code>aria-expanded="false"</code>, <code>aria-selected="true"</code>, <code>aria-busy="true"</code>).</li><li><b>Properties:</b> Characteristics less likely to change (e.g. <code>aria-haspopup="dialog"</code>, <code>aria-controls="panel-1"</code>).</li></ul>`,
      },
      diagram: {
        boxes: [
          { title: "Accordion Trigger", lines: ["<button id='acc-btn'>", "aria-expanded='false'", "aria-controls='panel-1'"] },
          { title: "Dynamic State Toggle", lines: ["User clicks -> JS updates:", "aria-expanded='true'", "AOM announces 'expanded'"] },
          { title: "Accordion Content", lines: ["<div id='panel-1'>", "aria-labelledby='acc-btn'", "Content now visible"] }
        ]
      },
      sec3: {
        title: "Tracing aria-expanded on a disclosure button",
        content: `<p>Trace how updating aria-expanded informs screen reader users of visibility changes.</p>`,
      },
      trace: {
        code: [
          "1. Closed state: <button aria-expanded='false' aria-controls='faq-1'>What is your refund policy?</button>",
          "2. Screen reader announces: 'What is your refund policy?, button, collapsed'",
          "3. User presses Space to expand",
          "4. Script runs: button.setAttribute('aria-expanded', 'true'); faqPanel.hidden = false;",
          "5. Screen reader announces: 'expanded'"
        ],
        steps: [
          { line: 0, vars: { initial_state: "aria-expanded='false'" } },
          { line: 1, vars: { speech: "Screen reader vocalizes collapsed state" } },
          { line: 3, vars: { toggle_action: "State updated dynamically in DOM" } },
          { line: 4, vars: { immediate_feedback: "User receives auditory confirmation of expansion" } }
        ]
      },
      practiceIntro: "Test your mastery of ARIA roles, states, and the First Rule of ARIA.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The First Rule of ARIA states that developers should prefer <0> HTML whenever possible.",
          "The state attribute indicating whether a collapsible menu is open is aria-<1>.",
          "The attribute linking a trigger button to the content element it controls is aria-<2>."
        ],
        blanks: [
          { a: ["native", "semantic"], why: "Native HTML provides built-in behaviors." },
          { a: ["expanded"], why: "aria-expanded communicates open/closed state." },
          { a: ["controls"], why: "aria-controls links trigger to content ID." }
        ]
      },
      win: "You understand when and how to apply ARIA correctly, avoiding cargo-cult ARIA that degrades accessibility.",
      nextTasks: [
        "Build an accessible collapsible FAQ accordion using <button aria-expanded='false'>.",
        "Audit an existing codebase for redundant ARIA (such as <button role='button'> or <nav role='navigation'>).",
        "Implement an accessible tablist component following the W3C WAI-ARIA Authoring Practices Guide."
      ],
      primarySource: "W3C: *WAI-ARIA Authoring Practices Guide (APG)* (w3.org/WAI/ARIA/apg).",
      quiz: [
        {
          q: "What is the First Rule of ARIA?",
          a: [
            "If you can use a native semantic HTML element with the required behavior, do so instead of using ARIA",
            "Always add role attributes to every HTML tag",
            "Every div must have an aria-label",
            "ARIA is only for mobile applications"
          ],
          c: 0,
          why: "Native elements have built-in keyboard behavior, focus management, and accessibility tree integration."
        },
        {
          q: "Does adding 'role=\"checkbox\"' to a <span> automatically handle Spacebar toggling at runtime?",
          a: [
            "No: ARIA only updates semantics in the Accessibility Tree; all keyboard events and state toggling must be coded manually in JavaScript",
            "Yes: browsers natively wire keyboard events to all ARIA roles",
            "Yes: but only in Google Chrome",
            "No: ARIA is forbidden on span elements"
          ],
          c: 0,
          why: "ARIA never changes element behavior or keyboard handling; it only changes what assistive technology hears."
        },
        {
          q: "Which ARIA state attribute communicates whether an accordion or dropdown menu is currently open or closed?",
          a: [
            "aria-expanded",
            "aria-open",
            "aria-visible",
            "aria-active"
          ],
          c: 0,
          why: "aria-expanded='true' or 'false' communicates the visibility status of collapsible controls."
        },
        {
          q: "Why is '<a href=\"#\" role=\"button\">' considered an accessibility anti-pattern?",
          a: [
            "Links are activated by the Enter key, while buttons are activated by both Space and Enter; simulating buttons with links creates subtle keyboard bugs",
            "Links cannot display text inside",
            "The browser forbids anchor tags from running JavaScript",
            "It breaks mobile screen pinch-to-zoom"
          ],
          c: 0,
          why: "Buttons and links have fundamentally different keyboard expectations and semantics; use <button> for actions."
        }
      ]
    },
    {
      n: 6,
      id: "aria-live-regions-and-dynamic-content",
      title: "ARIA Live Regions & Dynamic Content",
      topic: "ARIA Roles, States & Live Regions",
      anim: "Bars",
      lede: "When content updates via AJAX or WebSockets, sighted users see it. Learn how aria-live announces updates to screen readers without moving focus.",
      winShort: "Announce asynchronous updates politely or assertively using aria-live regions and role='alert'",
      missionLink: "Keep assistive technology users informed of dynamic Single Page App (SPA) updates",
      sec1: {
        title: "The problem of silent dynamic updates",
        content: `<p>In modern web applications, content changes constantly without full page reloads: a toast notification appears saying <i>"Payment Successful"</i>, a timer counts down, or search results filter live.</p><p>Sighted users notice these changes through peripheral vision. Screen reader users only hear what is currently focused. Without intervention, dynamic updates happen completely silently. <b>ARIA Live Regions</b> solve this by announcing DOM updates automatically without shifting user focus.</p>`,
        keyIdea: "ARIA live regions announce asynchronous content changes to screen readers without moving user focus."
      },
      predict: {
        q: "What is the difference between 'aria-live=\"polite\"' and 'aria-live=\"assertive\"'?",
        a: [
          "polite waits until the screen reader finishes speaking its current sentence; assertive interrupts the user immediately",
          "polite only works on mobile phones; assertive works on desktops",
          "assertive plays an audio beep; polite does not",
          "There is no difference; they are exact synonyms"
        ],
        c: 0,
        why: "polite queues notifications gracefully, whereas assertive immediately interrupts whatever the user is listening to."
      },
      sec2: {
        title: "Configuring live regions: polite, assertive, and atomic",
        content: `<p>Configuring a live region requires careful tuning:</p><ul><li><code>aria-live="polite":</code> Use for 95% of updates (e.g. cart item counts, search result totals). Waits for conversational pauses.</li><li><code>aria-live="assertive"</code> (or <code>role="alert"</code>): Reserved for critical, time-sensitive emergencies (e.g. <i>"Server disconnected"</i>, session timeout warnings). Interrupts speech immediately.</li><li><code>aria-atomic="true":</code> Instructs the screen reader to read the <i>entire container</i> rather than just the mutated text node (critical for timestamps or sentences).</li></ul><p><b>Crucial Rule:</b> The live region container must be present in the DOM <i>before</i> the content is injected. Injecting both the container and content simultaneously often fails to trigger announcements.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Static DOM Container", lines: ["<div aria-live='polite'", "  aria-atomic='true'", "  id='status-msg'></div>"] },
          { title: "Async Event (Fetch)", lines: ["Product added to cart", "JS sets status-msg.textContent", "= 'Item added to basket'"] },
          { title: "Screen Reader Speech", lines: ["Waits for idle moment", "Announces: 'Item added to basket'", "Focus remains on 'Add' button!"] }
        ]
      },
      sec3: {
        title: "Tracing live region announcement on shopping cart update",
        content: `<p>Trace how a live region announces shopping cart changes without interrupting the shopping flow.</p>`,
      },
      trace: {
        code: [
          "1. Pre-existing DOM container: <div id='cart-alert' aria-live='polite'></div>",
          "2. User clicks <button>Add to Cart</button>",
          "3. Network fetch succeeds; cart count increments to 3",
          "4. Script executes: document.getElementById('cart-alert').textContent = 'Item added. 3 items in cart.'",
          "5. Screen reader finishes speaking button name, then vocalizes: 'Item added. 3 items in cart.'"
        ],
        steps: [
          { line: 0, vars: { dom_ready: "Live region listener registered in AOM" } },
          { line: 2, vars: { api: "Cart update response received" } },
          { line: 3, vars: { mutation: "Text node injected into live region" } },
          { line: 4, vars: { polite_queue: "Spoken naturally during speech pause" } }
        ]
      },
      practiceIntro: "Test your understanding of ARIA live regions and dynamic announcement rules.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The default non-interrupting setting for a live region is aria-live='<0>'.",
          "The interrupting live region role used for critical system errors is role='<1>'.",
          "To instruct the screen reader to read the entire container rather than just the changed words, set aria-<2>='true'."
        ],
        blanks: [
          { a: ["polite"], why: "polite waits for pauses." },
          { a: ["alert"], why: "role='alert' creates an assertive live region." },
          { a: ["atomic"], why: "aria-atomic reads the complete container." }
        ]
      },
      win: "You can announce asynchronous data updates, toasts, and status changes smoothly without disorienting assistive technology users.",
      nextTasks: [
        "Build an accessible toast notification system using a pre-rendered aria-live='polite' container.",
        "Add role='status' to a dynamic search results counter (e.g. '14 results found').",
        "Verify that your live region is present in the DOM before dynamic content is inserted."
      ],
      primarySource: "MDN Web Docs: *ARIA live regions* (developer.mozilla.org).",
      quiz: [
        {
          q: "Why must an ARIA live region container be present in the initial DOM before content is injected?",
          a: [
            "Assistive technologies attach event listeners to existing live regions; injecting both container and text simultaneously is frequently ignored",
            "Because browsers delete new elements created via JavaScript",
            "Because live regions cannot contain CSS classes",
            "Because it is required by the HTTP/2 protocol"
          ],
          c: 0,
          why: "The screen reader must register the live region in the Accessibility Tree before monitoring it for text mutations."
        },
        {
          q: "When is 'aria-live=\"assertive\"' (or role='alert') appropriate to use?",
          a: [
            "Only for urgent, time-critical information that requires immediate user awareness (e.g. lost internet connection, session timeout)",
            "For all product search results",
            "For website copyright notices",
            "Whenever a button is clicked"
          ],
          c: 0,
          why: "Assertive interrupts current speech immediately; overusing it causes extreme frustration for screen reader users."
        },
        {
          q: "What does 'aria-atomic=\"true\"' achieve in a live region?",
          a: [
            "It forces the screen reader to announce the entire contents of the live region container, not just the mutated text fragment",
            "It splits the text into atomic syllables",
            "It encrypts the live text",
            "It prevents the text from being changed more than once"
          ],
          c: 0,
          why: "aria-atomic='true' ensures the complete message is vocalized so the user understands full context."
        },
        {
          q: "Does an aria-live announcement shift the user's active keyboard focus to the live region?",
          a: [
            "No: it vocalizes the message in speech while leaving active keyboard focus exactly where it was",
            "Yes: it forcibly yanks keyboard focus to the live region",
            "Yes: but only if the user is using Google Chrome",
            "No: it moves keyboard focus to the top of the body"
          ],
          c: 0,
          why: "Live regions speak messages in the audio channel without disrupting active keyboard focus."
        }
      ]
    },
    {
      n: 7,
      id: "keyboard-navigation-and-focus-trapping",
      title: "Keyboard Navigation, Tabindex & Focus Trapping",
      topic: "Keyboard Navigation, Focus & Auditing",
      anim: "Code",
      lede: "If you cannot use your website with just a keyboard, it is broken. Master focus indicators, tabindex rules, and modal dialog focus traps.",
      winShort: "Manage keyboard focus, remove outlines responsibly, and implement bulletproof focus traps for modal dialogs",
      missionLink: "Guarantee full accessibility for users with motor impairments who cannot use a mouse",
      sec1: {
        title: "The Golden Rule of Keyboard Navigation",
        content: `<p>Millions of people navigate computers exclusively with keyboards, switch devices, or head wands due to motor disabilities (paralysis, tremors, arthritis). The fundamental rule of web engineering is: <b>Any action that can be performed with a mouse must be fully operable with a keyboard alone</b>.</p><p>Key navigation expectations:</p><ul><li><b>Tab / Shift+Tab:</b> Move forward and backward between interactive controls.</li><li><b>Enter / Space:</b> Activate buttons, links, and checkboxes.</li><li><b>Arrow Keys:</b> Navigate within complex composite widgets (radios, menus, select dropdowns).</li><li><b>Never remove focus outlines:</b> Removing <code>outline: none</code> without an accessible alternative makes keyboard navigation impossible.</li></ul>`,
        keyIdea: "Every interactive control must have a visible focus indicator and be fully operable via standard keyboard keys."
      },
      predict: {
        q: "What is the disastrous consequence of writing 'outline: none;' in global CSS without providing an alternate focus style?",
        a: [
          "Keyboard users become completely blind to their location on the page, unable to tell which button or link is currently focused",
          "The browser disables all CSS animations",
          "The mouse cursor disappears",
          "Keyboard keys stop registering inputs in text boxes"
        ],
        c: 0,
        why: "Removing focus outlines without a replacement makes it impossible for sighted keyboard users to see where they are."
      },
      sec2: {
        title: "Tabindex rules & Modal focus trapping",
        content: `<p>The <code>tabindex</code> attribute controls keyboard focusability:</p><ul><li><code>tabindex="0":</code> Inserts a non-interactive element into the natural sequential keyboard tab order.</li><li><code>tabindex="-1":</code> Makes an element focusable via JavaScript (<code>element.focus()</code>), but skips it during keyboard tabbing.</li><li><b>Positive tabindex (tabindex="1+"):</b> An anti-pattern! Never use positive tabindex because it overrides natural DOM order.</li></ul><p>When an accessible <b>modal dialog</b> opens, you must <b>trap focus</b>: tabbing past the last element in the modal wraps focus back to the first element, preventing focus from escaping into the inert background page. Pressing <b>Escape</b> must close the modal and return focus to the trigger button.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Trigger Button", lines: ["User clicks 'Open Modal'", "Stores trigger: const prev = activeElement"] },
          { title: "Modal Dialog (Focus Trap)", lines: ["role='dialog' aria-modal='true'", "Focus moved to first input", "Tab wraps: Last -> First", "Escape -> Closes dialog"] },
          { title: "Return Focus", lines: ["Modal closes", "prev.focus() restores focus", "User resumes reading location"] }
        ]
      },
      sec3: {
        title: "Tracing modal focus trap execution",
        content: `<p>Trace how a focus trap confines keyboard navigation inside an active modal dialog.</p>`,
      },
      trace: {
        code: [
          "1. Modal opens: focus set to modal's first interactive element (#close-btn)",
          "2. Background page set to inert: document.querySelector('main').inert = true",
          "3. User tabs through modal inputs: name, email, submit button",
          "4. Focus is on submit button (last element); user presses Tab",
          "5. Keydown listener intercepts: prevents default, moves focus back to #close-btn",
          "6. User presses Escape: modal closes, focus returned to 'Edit Profile' trigger button"
        ],
        steps: [
          { line: 0, vars: { open: "Focus transferred inside dialog" } },
          { line: 1, vars: { inert: "Background rendered un-clickable and un-tabbable" } },
          { line: 3, vars: { boundary: "Last focusable element reached" } },
          { line: 5, vars: { escape: "Clean exit restores focus to original trigger" } }
        ]
      },
      practiceIntro: "Test your understanding of keyboard navigation, tabindex, and modal focus management.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "To allow an element to be focused programmatically with JS but excluded from Tab order, set tabindex='<0>'.",
          "Confining keyboard Tab navigation within an open dialog is called a focus <1>.",
          "The modern HTML attribute that disables an entire background section from interaction is <2>."
        ],
        blanks: [
          { a: ["-1"], why: "tabindex='-1' allows script focus." },
          { a: ["trap"], why: "Focus traps enclose modal navigation." },
          { a: ["inert"], why: "inert makes subtrees completely unreachable." }
        ]
      },
      win: "You can implement clean visible focus states, navigate without a mouse, and build accessible modal dialogs with focus trapping.",
      nextTasks: [
        "Audit a website using only Tab, Shift+Tab, and Enter to complete an entire user workflow.",
        "Implement a custom focus indicator using CSS :focus-visible { outline: 3px solid #2563eb; }.",
        "Build a modal dialog with Escape-to-close and focus return using the native <dialog> element."
      ],
      primarySource: "W3C WAI-ARIA APG: *Dialog (Modal) Pattern* (w3.org/WAI/ARIA/apg/patterns/dialog-modal).",
      quiz: [
        {
          q: "Why is 'tabindex=\"1\"' (or any positive integer) strongly discouraged in web development?",
          a: [
            "It disrupts natural reading order by forcing focus ahead of all standard elements, creating a jarring, unpredictable tab flow",
            "It causes browser memory leaks",
            "It turns off CSS hover effects",
            "It is forbidden by the ECMAScript language specification"
          ],
          c: 0,
          why: "Positive tabindex creates an unmaintainable, broken tab order that overrides natural DOM reading order."
        },
        {
          q: "What should happen to keyboard focus when a modal dialog is closed by the user?",
          a: [
            "Focus should return to the original button or element that opened the dialog",
            "Focus should jump to the very top of the webpage",
            "Focus should be removed completely from the browser window",
            "Focus should jump to the submit button in the footer"
          ],
          c: 0,
          why: "Restoring focus to the trigger button ensures the user can resume their previous workflow without disorientation."
        },
        {
          q: "What is the purpose of the CSS ':focus-visible' pseudo-class compared to ':focus'?",
          a: [
            "It only displays the focus indicator when the user navigates via keyboard, avoiding outlines on mouse clicks while preserving them for keyboard users",
            "It makes text bold on hover",
            "It changes the color of visited links",
            "It detects if the user is looking at the screen"
          ],
          c: 0,
          why: ":focus-visible provides a clean aesthetic compromise: visible outlines for keyboard users, suppressed for mouse clicks."
        },
        {
          q: "What does the HTML 'inert' attribute do when added to an element?",
          a: [
            "It makes the element and all its children completely un-focusable, un-clickable, and hidden from the Accessibility Tree",
            "It permanently deletes the element from memory",
            "It converts all images inside into black-and-white",
            "It forces the element to remain fixed on screen"
          ],
          c: 0,
          why: "inert freezes an entire DOM subtree, making background page content inert while a modal dialog is active."
        }
      ]
    },
    {
      n: 8,
      id: "contrast-motion-and-automated-auditing",
      title: "Color Contrast, Reduced Motion & Auditing",
      topic: "Keyboard Navigation, Focus & Auditing",
      anim: "LayersOrbit",
      lede: "Low-contrast text and dizzying animations alienate millions. Learn how to audit applications using automated engines and manual heuristics.",
      winShort: "Ensure WCAG color contrast compliance, respect prefers-reduced-motion, and automate auditing with Axe and Lighthouse",
      missionLink: "Integrate accessibility testing into CI/CD to prevent regressions before shipping to production",
      sec1: {
        title: "Color contrast and the 4.5:1 rule",
        content: `<p>Light gray text on white backgrounds (<code>#999999</code> on <code>#FFFFFF</code>) is a rampant design trend that makes reading agonizing for low-vision users, elderly readers, and anyone looking at a phone in bright sunlight.</p><p>WCAG 2.2 Level AA establishes strict mathematical luminance contrast ratios:</p><ul><li><b>Normal text (under 18pt / 24px):</b> Minimum contrast ratio of <b>4.5:1</b>.</li><li><b>Large text (18pt+ or 14pt bold):</b> Minimum contrast ratio of <b>3:1</b>.</li><li><b>UI components & icons:</b> Minimum contrast ratio of <b>3:1</b> against adjacent backgrounds.</li></ul><p><b>Never rely on color alone:</b> A form error cannot just turn a border red; it must include an icon or text error message for colorblind users.</p>`,
        keyIdea: "WCAG AA requires at least 4.5:1 contrast for regular text and forbids using color as the sole conveyor of information."
      },
      predict: {
        q: "What CSS media query detects if a user has requested operating system settings to minimize motion due to vestibular disorders?",
        a: [
          "@media (prefers-reduced-motion: reduce)",
          "@media (no-animation: true)",
          "@media (motion: zero)",
          "@media (screen-stability: high)"
        ],
        c: 0,
        why: "prefers-reduced-motion: reduce allows styling animations to be disabled for users prone to motion sickness or dizziness."
      },
      sec2: {
        title: "Automated auditing vs manual testing",
        content: `<p>Tools like <b>Axe Core</b> and <b>Google Lighthouse</b> are indispensable: they scan the DOM in seconds, catching 30–50% of accessibility issues automatically (contrast failures, missing alt text, duplicate IDs, missing form labels).</p><p>However, automated tools <b>cannot evaluate context</b>: an automated linter cannot know if <code>alt="dog"</code> is accurate when the photo is a cat, or whether a focus trap operates properly. Professional accessibility audits combine automated CI gates with manual keyboard testing.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Automated Testing (Axe)", lines: ["Scans DOM in CI pipeline", "Catches missing alt, low contrast", "Detects missing form labels (40%)"] },
          { title: "Manual Keyboard Audit", lines: ["Test Tab, Enter, Escape keys", "Verify visible focus indicators", "Test modal focus traps"] },
          { title: "Screen Reader Testing", lines: ["VoiceOver / NVDA test", "Verify announcement accuracy", "Test live region behavior"] }
        ]
      },
      sec3: {
        title: "Tracing prefers-reduced-motion in CSS",
        content: `<p>Trace how media queries respect user accessibility settings to disable vestibular motion sickness triggers.</p>`,
      },
      trace: {
        code: [
          "/* Default animation */",
          ".card { transition: transform 0.5s ease-in-out; }",
          ".card:hover { transform: scale(1.1) rotate(5deg); }",
          "/* Accessible override */",
          "@media (prefers-reduced-motion: reduce) {",
          "  .card { transition: none; transform: none; }",
          "}"
        ],
        steps: [
          { line: 0, vars: { default: "Dynamic scaling animation active" } },
          { line: 4, vars: { media_query: "OS setting 'Reduce Motion' detected" } },
          { line: 5, vars: { accessible_state: "Transform stripped; subtle opacity change applied instead" } }
        ]
      },
      practiceIntro: "Test your understanding of color contrast, reduced motion, and auditing techniques.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The minimum WCAG AA contrast ratio for regular body text is <0>:1.",
          "The CSS media query that respects user motion sensitivity is prefers-reduced-<1>.",
          "The industry-standard open-source automated accessibility testing engine is <2> Core."
        ],
        blanks: [
          { a: ["4.5"], why: "4.5:1 is the minimum AA ratio." },
          { a: ["motion"], why: "prefers-reduced-motion detects motion preferences." },
          { a: ["Axe"], why: "Axe Core powers automated accessibility linters." }
        ]
      },
      win: "You can audit color contrast ratios, respect motion sensitivities, and combine automated Axe testing with manual keyboard validation.",
      nextTasks: [
        "Run an Axe DevTools or Lighthouse accessibility scan on your project and resolve all critical contrast warnings.",
        "Add a prefers-reduced-motion CSS block that disables smooth scrolling and spinning animations.",
        "Verify that error states in your form utilize icons and text in addition to red border colors."
      ],
      primarySource: "W3C: *WCAG 2.2 Understanding Docs: Contrast (Minimum)* (w3.org/WAI/WCAG22/Understanding/contrast-minimum).",
      quiz: [
        {
          q: "What is the minimum color contrast ratio required by WCAG 2.2 Level AA for normal body text?",
          a: [
            "4.5:1",
            "3:1",
            "7:1",
            "1:1"
          ],
          c: 0,
          why: "4.5:1 is the required ratio for normal body text; large text requires at least 3:1."
        },
        {
          q: "Why is it forbidden to communicate information using color alone (e.g. indicating errors with only a red border)?",
          a: [
            "Colorblind users and users with monochromatic monitors cannot distinguish red from gray or green without an accompanying text or icon indicator",
            "Red ink is more expensive in web hosting bandwidth",
            "Browsers automatically strip red colors on mobile devices",
            "Red color codes cause screen readers to mute"
          ],
          c: 0,
          why: "Colorblind users (8% of men) cannot perceive specific color differences without supporting text or icons."
        },
        {
          q: "What percentage of accessibility issues can automated testing tools (like Axe or Lighthouse) detect?",
          a: [
            "Approximately 30% to 50% (manual testing and screen reader checks are mandatory to catch the rest)",
            "100% of all possible issues",
            "0% (automated tools cannot detect any accessibility bugs)",
            "Only image file sizes"
          ],
          c: 0,
          why: "Automated scanners only detect deterministic rules (like contrast and syntax); context, keyboard traps, and clarity require manual testing."
        },
        {
          q: "Why should web developers support '@media (prefers-reduced-motion: reduce)'?",
          a: [
            "Excessive parallax scrolling and spinning animations can trigger severe nausea, vertigo, and migraines in users with vestibular disorders",
            "It saves battery power on desktop computers",
            "It compresses CSS file sizes",
            "It improves Wi-Fi network reception"
          ],
          c: 0,
          why: "Vestibular disorders cause physical sickness when unexpected or fast animations move across the screen."
        }
      ]
    }
  ]
};

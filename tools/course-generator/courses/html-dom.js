"use strict";

module.exports = {
  id: "html-dom",
  title: "HTML & DOM",
  num: 24,
  emoji: "📄",
  desc: "Semantic markup and the tree the browser builds from it — the structure every page is made of.",
  mission: `# Mission — HTML & DOM

## Why this course exists

Too many developers treat HTML as a collection of generic div tags to be styled with CSS or controlled by JavaScript. But HTML is not merely visual styling: it is a semantic document structure that browsers parse into a live in-memory tree (the Document Object Model) and an Accessibility Tree for assistive technology. This course builds a rigorous understanding of markup semantics, DOM tree relationships, forms, and accessibility.

## What the learner can do at the end

- Write clean, semantic HTML5 using appropriate landmark elements and heading hierarchies.
- Understand how browsers parse raw markup strings into live, mutable DOM tree nodes.
- Traverse and inspect DOM relationships (parents, children, siblings) using standard APIs.
- Build accessible, robust web forms with appropriate input types, labels, and validation.
- Implement fundamental accessibility principles (ARIA roles, keyboard navigability, semantic landmarks).

## What this course is NOT

- Not a graphic design or CSS styling course.
- Not a single-page app framework tutorial (React, Vue). It focuses on standard browser primitives.

## Success looks like

When inspecting an unfamiliar web application, the learner can assess document landmark hierarchy, explain DOM node relationships, and identify inaccessible form controls in under three minutes without assistive tools.
`,
  notes: `# Notes — HTML & DOM

## Decisions
- Group into four themes: Structure & Semantics, The Document Object Model, Forms & Media, and Accessibility & Inspection.
- Emphasize semantic element choices over generic div/span containers.
`,
  resources: `# Resources — HTML & DOM

## Knowledge (primary sources)
- WHATWG HTML Living Standard (html.spec.whatwg.org) — The authoritative modern HTML specification.
- MDN Web Docs: *HTML: HyperText Markup Language* (developer.mozilla.org).
- W3C: *DOM Living Standard* (dom.spec.whatwg.org).

## Wisdom
- Semantic HTML gives you accessibility, search engine indexing, and keyboard navigation for free. Never replace a button with a div.
`,
  cheatsheetSections: [
    {
      title: "Semantic Document Outline",
      label: "Landmarks and structure",
      code: `<body>
  <header><nav aria-label="Main">...</nav></header>
  <main>
    <h1>Primary Page Title</h1>
    <article><section>...</section></article>
    <aside>...</aside>
  </main>
  <footer>...</footer>
</body>`,
      lessonN: 2,
      lessonSlug: "semantic-structure-and-landmarks",
      lessonTitle: "Semantic structure and landmarks"
    },
    {
      title: "DOM Node Traversal",
      label: "Navigating the live tree",
      code: `const el = document.querySelector('.card');
el.parentElement;            // immediate parent element
el.children;                 // HTMLCollection of child elements
el.firstElementChild;        // first child element
el.nextElementSibling;       // next sibling element`,
      lessonN: 4,
      lessonSlug: "nodes-elements-and-relationships",
      lessonTitle: "Nodes, elements, and relationships"
    },
    {
      title: "Accessible Forms",
      label: "Labels and inputs",
      code: `<form action="/login" method="POST">
  <label for="user-email">Email Address</label>
  <input type="email" id="user-email" name="email" required autocomplete="email">

  <button type="submit">Log In</button>
</form>`,
      lessonN: 5,
      lessonSlug: "forms-inputs-and-submission",
      lessonTitle: "Forms, inputs, and submission"
    },
    {
      title: "ARIA & Accessibility",
      label: "Enhancing the a11y tree",
      code: `<!-- Accessible icon button -->
<button aria-label="Close dialog">
  <svg aria-hidden="true">...</svg>
</button>

<!-- Live region for dynamic updates -->
<div aria-live="polite" role="status">Saved successfully.</div>`,
      lessonN: 7,
      lessonSlug: "accessibility-roles-and-aria-basics",
      lessonTitle: "Accessibility roles and ARIA basics"
    }
  ],
  glossaryGroups: [
    {
      id: "markup",
      title: "Markup & Semantic Structure",
      terms: [
        { term: "Semantic HTML", def: "The practice of using HTML tags that reinforce the structural meaning of content rather than merely its presentation.", lesson: 2, tags: ["semantics"] },
        { term: "Landmark element", def: "Major structural HTML5 tags (main, nav, header, footer, aside) recognized by screen readers for navigation.", lesson: 2, tags: ["a11y"] },
        { term: "Void element", def: "An element (like img, input, br, hr) that cannot have children and never uses a closing tag.", lesson: 1, tags: ["syntax"] },
        { term: "Attribute", def: "A key-value pair placed inside an opening tag providing metadata or configuration to the element.", lesson: 1, tags: ["syntax"] }
      ]
    },
    {
      id: "dom-tree",
      title: "The Document Object Model",
      terms: [
        { term: "DOM", def: "Document Object Model: a live in-memory tree representation of an HTML document created by the browser.", lesson: 3, tags: ["dom"] },
        { term: "Node", def: "The generic base interface for all objects in the DOM tree, including elements, text chunks, and comments.", lesson: 4, tags: ["dom"] },
        { term: "Element", def: "A specific node type corresponding to an HTML tag, possessing attributes, tag names, and child elements.", lesson: 4, tags: ["dom"] },
        { term: "DOM parsing", def: "The process where a browser tokenizes raw HTML markup bytes into tokens and constructs tree nodes.", lesson: 3, tags: ["browser"] }
      ]
    },
    {
      id: "forms-inputs",
      title: "Forms & User Input",
      terms: [
        { term: "Form element", def: "An interactive document section (<form>) collecting user inputs and submitting them to a server.", lesson: 5, tags: ["forms"] },
        { term: "Label association", def: "Linking an input to a <label> using matching for and id attributes for accessibility and touch targets.", lesson: 5, tags: ["a11y", "forms"] },
        { term: "Client validation", def: "Browser-enforced constraints (required, type=email, pattern) checked before form submission.", lesson: 5, tags: ["forms"] },
        { term: "Responsive image", def: "An image implementation (<picture> or srcset) serving optimized file sizes tailored to display density.", lesson: 6, tags: ["media"] }
      ]
    },
    {
      id: "accessibility",
      title: "Accessibility & Inspection",
      terms: [
        { term: "Accessibility tree", def: "A specialized tree generated by browsers from the DOM exposing names, roles, and states to screen readers.", lesson: 7, tags: ["a11y"] },
        { term: "ARIA", def: "Accessible Rich Internet Applications: a W3C specification of attributes that enhance accessibility semantics.", lesson: 7, tags: ["aria"] },
        { term: "Keyboard focus", def: "The active state indicating which interactive element currently receives keyboard input events.", lesson: 7, tags: ["a11y"] },
        { term: "DevTools Elements panel", def: "An interactive browser tool for inspecting, modifying, and debugging live DOM nodes and styles.", lesson: 8, tags: ["tools"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "elements-attributes-and-syntax",
      title: "Elements, attributes, and syntax",
      topic: "Markup & Semantic Structure",
      anim: "Layers",
      lede: "HTML is the skeleton of the web. Learn the exact anatomy of tags, void elements, and attributes that make up valid markup.",
      winShort: "Write well-formed HTML5 elements with appropriate attributes and syntax rules",
      missionLink: "The syntactic building blocks of every page on the World Wide Web",
      sec1: {
        title: "The anatomy of an HTML element",
        content: `<p>An HTML element typically consists of an <b>opening tag</b> (e.g. <code>&lt;p&gt;</code>), content, and a <b>closing tag</b> (<code>&lt;/p&gt;</code>). Inside the opening tag, <b>attributes</b> supply configuration metadata as <code>name="value"</code> pairs.</p><p>Some elements cannot hold children (like <code>&lt;img&gt;</code>, <code>&lt;input&gt;</code>, or <code>&lt;meta&gt;</code>). These are called <b>void elements</b> and never have closing tags in HTML5.</p>`,
        keyIdea: "Elements wrap content; attributes configure elements inside their opening tag."
      },
      predict: {
        q: "Which of the following is a void element that must NEVER have a closing tag in HTML5?",
        a: ["<img>", "<p>", "<section>", "<div>"],
        c: 0,
        why: "<img> is a void element: it cannot contain child nodes and has no closing </img> tag."
      },
      sec2: {
        title: "Element structure breakdown",
        content: `<p>Observe the constituent components of an element configured with attributes.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Opening Tag", lines: ["<a href='/about' class='nav'>", "tag name + attributes"] },
          { title: "Content", lines: ["About Us", "text or child elements"] },
          { title: "Closing Tag", lines: ["</a>", "closes element scope"] }
        ]
      },
      sec3: {
        title: "Tracing HTML attribute parsing",
        content: `<p>Trace how a browser tokenizes an element with boolean and valued attributes.</p>`,
      },
      trace: {
        code: [
          "# Markup: <button type='submit' disabled>Save</button>",
          "token_1: tag_name='button'",
          "token_2: attribute 'type'='submit'",
          "token_3: boolean attribute 'disabled'=true",
          "token_4: text_content='Save'"
        ],
        steps: [
          { line: 0, vars: { raw_html: "<button type='submit' disabled>Save</button>" } },
          { line: 1, vars: { element: "HTMLButtonElement" } },
          { line: 3, vars: { disabled: "true (presence of attribute sets boolean to true)" } },
          { line: 4, vars: { dom: "button rendered in disabled state" } }
        ]
      },
      practiceIntro: "Test your memory of HTML syntax fundamentals.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "An element that never contains child nodes or a closing tag is a <0> element.",
          "Configuration metadata inside an opening tag is an <1>.",
          "An attribute that is true simply by existing without a value is a <2> attribute."
        ],
        blanks: [
          { a: ["void"], why: "Void elements like img, br, and input cannot have children." },
          { a: ["attribute"], why: "Attributes supply key-value parameters to tags." },
          { a: ["boolean"], why: "Boolean attributes like disabled or checked are true by presence." }
        ]
      },
      win: "You can write structurally flawless HTML5 markup respecting void element rules and attribute conventions.",
      nextTasks: [
        "Audit a web page to locate three void elements.",
        "Verify that all non-void elements have matching closing tags.",
        "Add a boolean attribute (like disabled or required) to an element."
      ],
      primarySource: "WHATWG HTML Living Standard, Section 13: 'The HTML Syntax'.",
      quiz: [
        {
          q: "What is a void element in HTML5?",
          a: [
            "An element that cannot have content or child nodes and never has a closing tag",
            "An element that deletes text from the computer hard drive",
            "An element that is invisible to CSS styling rules",
            "An element written in JavaScript rather than HTML"
          ],
          c: 0,
          why: "Void elements (like img, input, meta) are strictly self-contained and forbid closing tags."
        },
        {
          q: "How do boolean attributes (like 'required' or 'disabled') work in HTML?",
          a: [
            "Their presence on an element represents true, regardless of what value string is assigned",
            "They must always be assigned the exact string 'true' or 'false'",
            "They only work when JavaScript is disabled",
            "They can only be used on heading tags"
          ],
          c: 0,
          why: "In HTML5, the mere presence of a boolean attribute implies true; omitting it implies false."
        },
        {
          q: "What is the root container element of every valid HTML document?",
          a: [
            "<html>",
            "<body>",
            "<head>",
            "<main>"
          ],
          c: 0,
          why: "The <html> element encapsulates all metadata (<head>) and content (<body>) in the document."
        },
        {
          q: "What does the <!DOCTYPE html> declaration at the top of a file do?",
          a: [
            "Instructs the browser to render the document in modern Standards Mode rather than Quirks Mode",
            "Downloads the latest HTML language compiler from the internet",
            "Encrypts the HTML source code with TLS security",
            "Forces the browser to display content in high resolution"
          ],
          c: 0,
          why: "<!DOCTYPE html> prevents legacy browser 'quirks mode' layout emulation."
        }
      ]
    },
    {
      n: 2,
      id: "semantic-structure-and-landmarks",
      title: "Semantic structure and landmarks",
      topic: "Markup & Semantic Structure",
      anim: "Layers",
      lede: "Stop building websites out of meaningless div soup. Learn how header, nav, main, article, and section give rich meaning to machines and assistive tools.",
      winShort: "Structure web documents using standard HTML5 landmarks and heading hierarchies",
      missionLink: "Improves accessibility and search engine readability automatically",
      sec1: {
        title: "Div soup versus semantic landmarks",
        content: `<p>A <code>&lt;div&gt;</code> tag has zero semantic meaning: it is a completely generic visual wrapper. When you build a page out of nested divs, screen readers and search engines see an undifferentiated blob of text.</p><p>HTML5 introduced <b>Landmark Elements</b>: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, and <code>&lt;footer&gt;</code>. Screen reader users use these landmarks to jump straight to main content or navigation with a single keystroke.</p>`,
        keyIdea: "Semantic landmarks transform visual layouts into navigable structural blueprints for assistive technology."
      },
      predict: {
        q: "How many <main> landmark elements should be visible on a single web page at one time?",
        a: ["Exactly one", "As many as you want", "At least twenty", "Zero"],
        c: 0,
        why: "A page represents one primary document; it should have exactly one visible <main> landmark."
      },
      sec2: {
        title: "The landmark blueprint",
        content: `<p>Observe the canonical arrangement of HTML5 semantic landmark elements.</p>`,
      },
      diagram: {
        boxes: [
          { title: "<header> & <nav>", lines: ["site branding & navigation", "accessible navigation landmark"] },
          { title: "<main>", lines: ["unique core page content", "articles, sections, headings"] },
          { title: "<aside> & <footer>", lines: ["supplementary sidebars", "copyright, legal links, sitemaps"] }
        ]
      },
      sec3: {
        title: "Tracing heading outline construction",
        content: `<p>Trace how a screen reader builds a table of contents from structured h1 through h3 headings.</p>`,
      },
      trace: {
        code: [
          "<h1>Concept Lab Courses</h1>          # Root heading",
          "  <h2>Web Development</h2>             # Section heading",
          "    <h3>HTML & DOM</h3>                # Subsection",
          "    <h3>CSS & Layout</h3>              # Subsection",
          "  <h2>Computer Science</h2>            # Section heading"
        ],
        steps: [
          { line: 0, vars: { outline_level_1: "Concept Lab Courses" } },
          { line: 1, vars: { outline_level_2: "Web Development" } },
          { line: 2, vars: { outline_level_3: "HTML & DOM" } },
          { line: 4, vars: { tree: "hierarchical outline generated without skipping heading levels" } }
        ]
      },
      practiceIntro: "Test your memory of semantic landmark elements.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The landmark representing the dominant content of the document is <<0>>.",
          "The landmark wrapping primary navigation links is <<1>>.",
          "Self-contained, independently redistributable content belongs in an <<2>>."
        ],
        blanks: [
          { a: ["main"], why: "<main> holds the unique primary content of the page." },
          { a: ["nav"], why: "<nav> wraps navigation landmark links." },
          { a: ["article"], why: "<article> represents self-contained syndicated content (like a blog post)." }
        ]
      },
      win: "You can design web pages that communicate clear semantic blueprints to search engines and assistive screen readers.",
      nextTasks: [
        "Audit a web page using an accessibility checker to inspect landmark regions.",
        "Ensure your heading hierarchy does not skip levels (e.g. h1 directly to h4).",
        "Replace three generic <div> tags with semantic <section> or <article> tags."
      ],
      primarySource: "MDN Web Docs: *HTML: A good basis for accessibility* (developer.mozilla.org).",
      quiz: [
        {
          q: "What is the primary benefit of using semantic landmarks like <nav> and <main>?",
          a: [
            "Screen reader users can jump directly between major page sections with keyboard shortcuts",
            "The browser renders text in bright colorful gradients automatically",
            "The website loads without consuming internet data bandwidth",
            "It eliminates the need for JavaScript programming"
          ],
          c: 0,
          why: "Landmarks allow assistive technologies to navigate directly to content areas."
        },
        {
          q: "What is the difference between <article> and <section>?",
          a: [
            "<article> is for standalone content that makes sense on its own; <section> groups thematic content",
            "<article> is for newspaper websites; <section> is for retail stores",
            "<article> cannot contain text; <section> cannot contain images",
            "There is no difference between article and section"
          ],
          c: 0,
          why: "Articles are independent distributable units; sections are generic thematic groupings."
        },
        {
          q: "Why should you avoid skipping heading levels (e.g. jumping from h1 directly to h3)?",
          a: [
            "It breaks the logical document outline generated by screen readers and accessibility tools",
            "It causes modern browsers to crash immediately",
            "The CSS stylesheet will refuse to load",
            "It is forbidden by internet service provider rules"
          ],
          c: 0,
          why: "Screen readers build an internal outline from headings; skipping levels disorients users."
        },
        {
          q: "When is it appropriate to use a generic <div> tag?",
          a: [
            "When grouping elements purely for visual CSS styling or layout with no semantic meaning",
            "Never; div tags are completely deprecated in HTML5",
            "For all page navigation links and buttons",
            "To replace form submit buttons"
          ],
          c: 0,
          why: "<div> is the appropriate fallback when no semantic tag describes the visual grouping."
        }
      ]
    },
    {
      n: 3,
      id: "the-dom-tree-representation",
      title: "The DOM tree representation",
      topic: "The Document Object Model",
      anim: "Layers",
      lede: "HTML text is just a string of characters; the DOM is a living, breathing tree of memory objects. Explore how browsers parse markup into the Document Object Model.",
      winShort: "Explain how browsers tokenize HTML markup and construct the in-memory DOM tree",
      missionLink: "Bridges static text markup and live JavaScript program state",
      sec1: {
        title: "From bytes to nodes",
        content: `<p>A web browser does not execute HTML text directly. When raw HTML bytes arrive over the network, the browser's rendering engine processes them through a four-stage pipeline: <b>Bytes &rarr; Characters &rarr; Tokens &rarr; Nodes &rarr; DOM Tree</b>.</p><p>The resulting <b>Document Object Model (DOM)</b> is a tree of live JavaScript objects in memory. When you modify an element in JavaScript, you are not editing the HTML file — you are mutating live objects in the DOM tree.</p>`,
        keyIdea: "HTML is the source code serialization; the DOM is the live in-memory object model created from it."
      },
      predict: {
        q: "If an HTML file is missing a closing </p> tag, does the browser crash?",
        a: [
          "No, the browser HTML parser follows error-correction rules to repair the tree automatically",
          "Yes, missing tags cause fatal syntax errors in all browsers",
          "The computer screen turns black",
          "The browser stops downloading internet packets"
        ],
        c: 0,
        why: "HTML5 parsers are forgiving state machines designed to recover gracefully from imperfect markup."
      },
      sec2: {
        title: "The parsing pipeline",
        content: `<p>Follow the transformation of raw network bytes into an interactive document object tree.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Bytes & Chars", lines: ["hexadecimal bytes over TCP", "decoded via charset=utf-8"] },
          { title: "Tokenization", lines: ["startTag: <html>, <p>", "characters: 'Hello', endTag: </p>"] },
          { title: "Tree Construction", lines: ["Document -> html -> body -> p", "live mutable DOM in memory"] }
        ]
      },
      sec3: {
        title: "Tracing DOM tree hierarchy",
        content: `<p>Trace how a snippet of markup is converted into parent, child, and sibling nodes in memory.</p>`,
      },
      trace: {
        code: [
          "# HTML: <main><h1>Title</h1><p>Text</p></main>",
          "document.body.firstElementChild -> <main>",
          "main.children[0] -> <h1> (firstChild)",
          "main.children[1] -> <p> (nextElementSibling)"
        ],
        steps: [
          { line: 0, vars: { input: "<main><h1>Title</h1><p>Text</p></main>" } },
          { line: 1, vars: { parent: "HTMLMainElement" } },
          { line: 2, vars: { child_1: "HTMLHeadingElement (Title)" } },
          { line: 3, vars: { child_2: "HTMLParagraphElement (Text)" } }
        ]
      },
      practiceIntro: "Test your memory of DOM tree concepts.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The acronym DOM stands for Document <0> Model.",
          "The root object representing the web page in JavaScript is <1>.",
          "The pipeline stage that breaks raw text into start and end tags is <2>."
        ],
        blanks: [
          { a: ["Object"], why: "DOM stands for Document Object Model." },
          { a: ["document"], why: "window.document is the root entry point to the DOM tree." },
          { a: ["tokenization"], why: "Tokenization identifies tags, attributes, and text tokens." }
        ]
      },
      win: "You can conceptualize the browser rendering pipeline and explain the relationship between HTML text and live DOM objects.",
      nextTasks: [
        "Inspect window.document in your browser JavaScript console.",
        "Print document.body.children in the console to view top-level element objects.",
        "Observe how DevTools updates live when you mutate a node property."
      ],
      primarySource: "W3C / WHATWG: *DOM Living Standard* (dom.spec.whatwg.org).",
      quiz: [
        {
          q: "What is the Document Object Model (DOM)?",
          a: [
            "An in-memory object tree representing the structure and content of an HTML document",
            "A database management system built into modern web servers",
            "A compression format for transmitting image files over Wi-Fi",
            "A stylesheet language used to position text on computer screens"
          ],
          c: 0,
          why: "The DOM provides an object-oriented representation of the web page that programs can modify."
        },
        {
          q: "What happens when JavaScript executes document.createElement('div')?",
          a: [
            "A new DOM element object is created in memory, ready to be inserted into the document tree",
            "The browser writes a new line of text to the physical HTML file on the web server",
            "The computer creates a new directory on the hard drive",
            "The browser reloads the current web page from scratch"
          ],
          c: 0,
          why: "createElement constructs a live in-memory node detached from the active document tree."
        },
        {
          q: "Why is the DOM tree distinct from the raw HTML text file?",
          a: [
            "The DOM reflects live mutations, error-corrected tags, and dynamic script updates in memory",
            "The DOM is written in binary C++ while HTML is written in English",
            "The DOM only exists when the computer is disconnected from the internet",
            "The DOM can only contain three elements at a time"
          ],
          c: 0,
          why: "The DOM is dynamic, live state; HTML text is just the static initial blueprint."
        },
        {
          q: "What is the global root object in client-side browser JavaScript that hosts the document?",
          a: [
            "window",
            "process",
            "globalThis.database",
            "kernel"
          ],
          c: 0,
          why: "window represents the browser execution context and contains the top-level document object."
        }
      ]
    },
    {
      n: 4,
      id: "nodes-elements-and-relationships",
      title: "Nodes, elements, and relationships",
      topic: "The Document Object Model",
      anim: "Layers",
      lede: "Not every node in the DOM is an element. Understand the difference between Nodes and Elements, and navigate parent, child, and sibling relationships.",
      winShort: "Traverse the DOM tree accurately using element navigation properties",
      missionLink: "Prevents subtle whitespace bugs when navigating tree structures",
      sec1: {
        title: "Nodes versus Elements",
        content: `<p>In the DOM, everything is a <b>Node</b>: text chunks, comments, and tags. An <b>Element</b> is a specific subtype of Node (nodeType === 1) that represents an actual HTML tag.</p><p>This distinction matters when traversing: <code>childNodes</code> includes invisible whitespace text nodes between tags, whereas <code>children</code> returns <i>only element tags</i>. Always use element-specific traversal properties (<code>children</code>, <code>nextElementSibling</code>) unless you specifically need raw text nodes.</p>`,
        keyIdea: "Use element-specific properties (children, parentElement) to avoid traversing invisible whitespace text nodes."
      },
      predict: {
        q: "<div> <p>Hello</p> </div>: How many childNodes does the div have versus children?",
        a: [
          "3 childNodes (whitespace, p, whitespace) but only 1 element in children (<p>)",
          "1 childNode and 1 element in children",
          "0 childNodes and 10 children",
          "10 childNodes and 0 children"
        ],
        c: 0,
        why: "Whitespace indentation between tags becomes Text nodes in childNodes, but is excluded from children."
      },
      sec2: {
        title: "The element navigation family",
        content: `<p>Master the standard JavaScript properties for navigating tree relationships cleanly.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Parent", lines: ["el.parentElement", "ascends one level up"] },
          { title: "Children", lines: ["el.children", "el.firstElementChild, el.lastElementChild"] },
          { title: "Siblings", lines: ["el.previousElementSibling", "el.nextElementSibling"] }
        ]
      },
      sec3: {
        title: "Tracing sibling traversal",
        content: `<p>Trace how a script walks through a list of list-item elements sequentially.</p>`,
      },
      trace: {
        code: [
          "let item = document.querySelector('li.first')",
          "while (item) {",
          "    console.log(item.textContent)",
          "    item = item.nextElementSibling",
          "}"
        ],
        steps: [
          { line: 0, vars: { current: "<li>Item 1</li>" } },
          { line: 2, vars: { printed: "'Item 1'" } },
          { line: 3, vars: { current: "<li>Item 2</li> (traversed via nextElementSibling)" } },
          { line: 3, vars: { current: "null (end of list reached; loop terminates)" } }
        ]
      },
      practiceIntro: "Test your recall of DOM navigation properties.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The property returning an element's immediate parent element is parent<0>.",
          "The property returning only element child tags without text nodes is <1>.",
          "The property returning the adjacent sibling element to the right is next<2>Sibling."
        ],
        blanks: [
          { a: ["Element"], why: "parentElement returns the parent HTML element." },
          { a: ["children"], why: "children filters out comment and whitespace text nodes." },
          { a: ["Element"], why: "nextElementSibling skips whitespace text to the next tag." }
        ]
      },
      win: "You can traverse complex DOM structures without falling into whitespace text node traps.",
      nextTasks: [
        "Compare element.childNodes.length with element.children.length on an element with nested markup.",
        "Find an element's closest parent container using element.closest('.container').",
        "Traverse through all sibling elements in a list using nextElementSibling."
      ],
      primarySource: "MDN Web Docs: *Node vs Element in the DOM* (developer.mozilla.org).",
      quiz: [
        {
          q: "Why is 'el.children' usually preferred over 'el.childNodes' when navigating HTML?",
          a: [
            "children contains only element tags, ignoring invisible whitespace text nodes created by formatting indentation",
            "children is an encrypted array supported only by secure browsers",
            "childNodes causes severe memory leaks in the browser engine",
            "children automatically deletes duplicate HTML elements"
          ],
          c: 0,
          why: "childNodes includes whitespace text nodes between tags, leading to off-by-one traversal bugs."
        },
        {
          q: "What does 'element.closest(selector)' do?",
          a: [
            "Traverses upwards through parents to find the nearest ancestor matching the selector",
            "Finds the closest physical pixel neighbor on the computer screen",
            "Measures the network latency to the closest CDN data center",
            "Selects all child nodes matching the selector"
          ],
          c: 0,
          why: "closest() ascends the ancestor chain until it finds a matching CSS selector."
        },
        {
          q: "What nodeType value corresponds to an HTML Element node?",
          a: [
            "1 (Node.ELEMENT_NODE)",
            "3 (Node.TEXT_NODE)",
            "8 (Node.COMMENT_NODE)",
            "9 (Node.DOCUMENT_NODE)"
          ],
          c: 0,
          why: "In the W3C DOM specification, nodeType 1 indicates an Element."
        },
        {
          q: "What happens when 'el.nextElementSibling' is called on the last child element in a container?",
          a: [
            "It returns null",
            "It throws an unhandled NullPointerException error",
            "It wraps around to the first child element",
            "It deletes the parent container element"
          ],
          c: 0,
          why: "When no subsequent sibling element exists, nextElementSibling safely returns null."
        }
      ]
    },
    {
      n: 5,
      id: "forms-inputs-and-submission",
      title: "Forms, inputs, and submission",
      topic: "Forms & User Input",
      anim: "Layers",
      lede: "Forms are the primary interactive bridges between users and servers. Learn how input types, label associations, validation constraints, and FormData work.",
      winShort: "Build accessible web forms with semantic inputs and built-in constraint validation",
      missionLink: "Ensures reliable data collection and accessible user inputs",
      sec1: {
        title: "The anatomy of an accessible form",
        content: `<p>A web form is more than an input box. An accessible, robust form requires three things: a <code>&lt;form&gt;</code> element with <code>action</code> and <code>method</code>, explicit <code>&lt;label&gt;</code> associations, and semantic <code>&lt;input&gt;</code> types.</p><p>Always connect labels to inputs using <code>for="id"</code>. This gives screen readers the input's name and increases touch target size: tapping the label text automatically focuses the input.</p>`,
        keyIdea: "Always associate labels with inputs using for and id attributes for accessibility and touch targets."
      },
      predict: {
        q: "What happens on mobile devices when you use <input type='email'> instead of type='text'?",
        a: [
          "The mobile virtual keyboard automatically displays an '@' key and period for easier typing",
          "The phone sends an email to the user contacts automatically",
          "The browser encrypts the phone memory with TLS",
          "The form submits automatically without user input"
        ],
        c: 0,
        why: "Semantic input types trigger optimized virtual keyboard layouts on mobile devices."
      },
      sec2: {
        title: "Standard HTML5 constraint validation",
        content: `<p>The browser can validate user input natively without writing a single line of JavaScript.</p>`,
      },
      diagram: {
        boxes: [
          { title: "required", lines: ["blocks submission if empty", "triggers native browser tooltip"] },
          { title: "type='email' / 'url'", lines: ["checks syntax formatting", "matches RFC standards"] },
          { title: "min / max / pattern", lines: ["numeric ranges (e.g. min='1')", "regex pattern matching"] }
        ]
      },
      sec3: {
        title: "Tracing form submission and FormData",
        content: `<p>Trace how a form submission gathers named inputs into key-value pairs for transport.</p>`,
      },
      trace: {
        code: [
          "# Form contains: <input name='username' value='Ada'>",
          "# Form contains: <input name='age' value='36'>",
          "form_data = new FormData(form_element)",
          "# Serialized as application/x-www-form-urlencoded:",
          "# 'username=Ada&age=36' sent via POST body"
        ],
        steps: [
          { line: 0, vars: { input_1: "name='username', value='Ada'" } },
          { line: 1, vars: { input_2: "name='age', value='36'" } },
          { line: 2, vars: { collection: "FormData extracts all inputs with 'name' attributes" } },
          { line: 4, vars: { payload: "'username=Ada&age=36'" } }
        ]
      },
      practiceIntro: "Test your recall of web form fundamentals.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The attribute connecting a <label> to an input ID is <0>.",
          "Inputs without a <1> attribute are completely omitted from form submission.",
          "The JavaScript object that packages form inputs into key-value pairs is <2>Data."
        ],
        blanks: [
          { a: ["for", "htmlFor"], why: "The for attribute on a label references the target input id." },
          { a: ["name"], why: "Inputs without a 'name' attribute cannot participate in form submission." },
          { a: ["Form"], why: "FormData compiles form inputs for transmission." }
        ]
      },
      win: "You can author accessible, robust HTML forms that leverage browser validation and mobile keyboard optimization.",
      nextTasks: [
        "Audit a form to verify every input has an associated <label for='...'>.",
        "Add native validation attributes (required, minlength, type='email') to an input.",
        "Extract values from a form in JavaScript using new FormData(form)."
      ],
      primarySource: "WHATWG HTML Living Standard, Section 4.10: 'Forms'.",
      quiz: [
        {
          q: "What happens if an <input> element lacks a 'name' attribute during form submission?",
          a: [
            "The browser silently omits the input value from the submitted form data entirely",
            "The browser displays a fatal crash warning screen",
            "The operating system deletes the web page from cache",
            "The input value is sent with the key 'undefined'"
          ],
          c: 0,
          why: "Browsers only serialize successful controls that possess a non-empty name attribute."
        },
        {
          q: "Why is wrapping text in a <label for='target_id'> better than plain text next to an input?",
          a: [
            "It gives screen readers an accessible label and makes the text clickable to focus the input",
            "It automatically translates text into foreign languages",
            "It increases the internet connection speed of the form submission",
            "It encrypts the input field value with private keys"
          ],
          c: 0,
          why: "Labels establish programmatic associations for assistive tech and enlarge touch hit targets."
        },
        {
          q: "What does the browser do when a user submits a form with an empty 'required' input?",
          a: [
            "Blocks submission, focuses the invalid input, and shows a localized error message",
            "Submits the form anyway and lets the server crash",
            "Closes the browser window immediately",
            "Clears all other inputs in the form"
          ],
          c: 0,
          why: "Browser constraint validation intercepts submission and highlights the invalid field natively."
        },
        {
          q: "What is the default HTTP method used by a <form> if the 'method' attribute is omitted?",
          a: [
            "GET",
            "POST",
            "PUT",
            "DELETE"
          ],
          c: 0,
          why: "HTML specification sets the default form submission method to GET."
        }
      ]
    },
    {
      n: 6,
      id: "tables-media-and-embedded-content",
      title: "Tables, media, and embedded content",
      topic: "Forms & Media",
      anim: "Layers",
      lede: "Images, video, and tabular data require structured markup. Learn how to serve responsive images with picture and srcset, and build accessible data tables.",
      winShort: "Implement responsive media with srcset and author accessible data tables with th and scope",
      missionLink: "Optimizes image bandwidth performance and accessible tabular presentations",
      sec1: {
        title: "Accessible tabular data",
        content: `<p>Tables are not for page layout; they are for structured, two-dimensional tabular data. An accessible table requires clear headers: <code>&lt;th scope="col"&gt;</code> for column headers and <code>&lt;th scope="row"&gt;</code> for row headers.</p><p>Screen readers use the <code>scope</code> attribute to announce the matching column and row header as users navigate between individual cells, preventing complete loss of context in large grids.</p>`,
        keyIdea: "Use th with scope attributes so screen readers announce context for every table cell."
      },
      predict: {
        q: "What is the purpose of the 'srcset' attribute on an <img> tag?",
        a: [
          "It offers a list of image candidates with resolution descriptors for the browser to choose from",
          "It forces the browser to download all listed images simultaneously",
          "It converts JPG images into MP4 video format",
          "It applies a CSS blur filter to the image"
        ],
        c: 0,
        why: "srcset lets browsers download the optimal image file size based on screen pixel density."
      },
      sec2: {
        title: "Responsive image architecture",
        content: `<p>How the &lt;picture&gt; element and srcset adapt images for art direction and bandwidth optimization.</p>`,
      },
      diagram: {
        boxes: [
          { title: "<picture>", lines: ["art direction wrapper", "<source media='(max-width: 600px)'>"] },
          { title: "srcset & sizes", lines: ["resolution switching", "small.jpg 400w, large.jpg 1200w"] },
          { title: "Fallback <img>", lines: ["mandatory default", "alt='Descriptive text' for a11y"] }
        ]
      },
      sec3: {
        title: "Tracing table cell header resolution",
        content: `<p>Trace how a screen reader resolves the header context of a cell in an accessible table.</p>`,
      },
      trace: {
        code: [
          "# Table: th scope='col' -> 'Q3 Revenue', th scope='row' -> 'North Region'",
          "# User navigates to cell: <td>$42,000</td>",
          "# Screen reader announces:",
          "# 'North Region, Q3 Revenue, $42,000'"
        ],
        steps: [
          { line: 0, vars: { table_structure: "th scope='col' and th scope='row' defined" } },
          { line: 1, vars: { focused_cell: "$42,000" } },
          { line: 3, vars: { announcement: "row and column headers announced automatically" } }
        ]
      },
      practiceIntro: "Test your recall of media and table elements.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The table element representing a header cell is <<0>>.",
          "The attribute specifying whether a header applies to a row or column is <1>.",
          "The image attribute providing text alternatives for screen readers is <2>."
        ],
        blanks: [
          { a: ["th"], why: "<th> represents a table header cell." },
          { a: ["scope"], why: "scope='col' or scope='row' clarifies header direction." },
          { a: ["alt"], why: "alt text describes images when they cannot be seen." }
        ]
      },
      win: "You can build accessible data tables and implement high-performance responsive image configurations.",
      nextTasks: [
        "Audit an existing table to add th tags and scope='col' attributes.",
        "Implement a responsive image using srcset with 1x and 2x pixel density variants.",
        "Verify that decorative background images use empty alt='' to remain silent to screen readers."
      ],
      primarySource: "W3C WAI: *Tables Tutorial — Concepts and Accessible Structure* (w3.org/WAI/tutorials/tables).",
      quiz: [
        {
          q: "Why is an empty 'alt=\"\"' attribute used on purely decorative images?",
          a: [
            "It instructs screen readers to silently skip the decorative image without interrupting the user",
            "It forces the browser to delete the image file from memory",
            "It displays an empty white rectangle on the screen",
            "It prevents the image from loading on mobile phones"
          ],
          c: 0,
          why: "alt='' indicates the image is decorative; omitting alt causes screen readers to read the filename."
        },
        {
          q: "What does the 'loading=\"lazy\"' attribute on an <img> element do?",
          a: [
            "Defers loading the image until it is near the user viewport, saving bandwidth and initial load time",
            "Renders the image in black and white colors",
            "Reduces the image resolution by ninety percent",
            "Prevents the image from being copied by other users"
          ],
          c: 0,
          why: "Native lazy loading defers off-screen image requests until the user scrolls near them."
        },
        {
          q: "What is the purpose of the <caption> element in an HTML table?",
          a: [
            "Provides an accessible title or summary of the table content for all users and assistive tech",
            "Renders a subtitles bar beneath video files",
            "Translates the table into different human languages",
            "Calculates the mathematical sum of all numeric table cells"
          ],
          c: 0,
          why: "<caption> acts like a heading directly associated with the table element."
        },
        {
          q: "When should you use the <picture> element instead of a plain <img> with srcset?",
          a: [
            "When you need art direction (different cropped images across breakpoints) or alternative formats like AVIF/WebP",
            "When you want to display an animated GIF",
            "When the image was created using Adobe Photoshop",
            "When the website is hosted on Amazon Web Services"
          ],
          c: 0,
          why: "<picture> provides media-query based art direction and format fallback negotiation."
        }
      ]
    },
    {
      n: 7,
      id: "accessibility-roles-and-aria-basics",
      title: "Accessibility roles and ARIA basics",
      topic: "Accessibility & Inspection",
      anim: "Layers",
      lede: "Accessibility is not a feature; it is the web working as designed. Learn how the browser constructs the Accessibility Tree and when to use ARIA attributes.",
      winShort: "Apply ARIA roles and labels to enhance accessibility without violating standard semantics",
      missionLink: "Ensures applications are fully operable by users of assistive technology",
      sec1: {
        title: "The Accessibility Tree",
        content: `<p>In parallel with the visual DOM, the browser builds an <b>Accessibility Tree</b> for operating system assistive technologies (screen readers, braille displays). Every accessibility node has four properties: <b>Role</b> (what is it?), <b>Name</b> (what is it called?), <b>Value</b>, and <b>State</b>.</p><p>The golden rule of accessibility: <b>The first rule of ARIA is do not use ARIA if a native HTML element exists</b>. A native <code>&lt;button&gt;</code> has keyboard focus, enter key submission, and role button built in; a <code>&lt;div role="button"&gt;</code> has none of these unless you implement them manually.</p>`,
        keyIdea: "Native semantic HTML provides built-in accessibility roles, states, and keyboard navigation for free."
      },
      predict: {
        q: "What is the first rule of ARIA according to the W3C specification?",
        a: [
          "If you can use a native HTML element or attribute with the semantics you need, do so instead of ARIA",
          "Always add role='button' to every clickable div on the web page",
          "ARIA must only be used on websites with government contracts",
          "Every element on the page must have an aria-label attribute"
        ],
        c: 0,
        why: "Native elements have keyboard interactions, focus management, and accessibility semantics built in."
      },
      sec2: {
        title: "When ARIA is required",
        content: `<p>Use ARIA when building custom widgets (like modals or tabs) that native HTML does not natively provide.</p>`,
      },
      diagram: {
        boxes: [
          { title: "aria-label", lines: ["provides accessible name", "used when no visible text exists (e.g. icon buttons)"] },
          { title: "aria-hidden='true'", lines: ["hides decorative icons from screen reader", "prevents noise"] },
          { title: "aria-live='polite'", lines: ["announces dynamic notifications", "does not interrupt current speech"] }
        ]
      },
      sec3: {
        title: "Tracing accessibility tree inspection",
        content: `<p>Trace how a screen reader interprets an icon button with an aria-label.</p>`,
      },
      trace: {
        code: [
          "# Markup: <button aria-label='Close modal'><svg aria-hidden='true'>...</svg></button>",
          "A11y Node: Role = 'button'",
          "A11y Node: Accessible Name = 'Close modal'",
          "A11y Node: Child SVG = ignored (hidden from accessibility tree)",
          "# Screen reader announces: 'Close modal, button'"
        ],
        steps: [
          { line: 0, vars: { element: "HTMLButtonElement" } },
          { line: 1, vars: { role: "button (focusable via Tab)" } },
          { line: 2, vars: { name: "'Close modal' extracted from aria-label" } },
          { line: 4, vars: { screen_reader: "concise, unambiguous announcement to user" } }
        ]
      },
      practiceIntro: "Test your recall of accessibility fundamentals.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The tree created by browsers specifically for screen readers is the <0> tree.",
          "The attribute providing an accessible name to an icon button is aria-<1>.",
          "To announce dynamic content updates without interrupting speech, use aria-live='<2>'."
        ],
        blanks: [
          { a: ["Accessibility", "a11y"], why: "The Accessibility Tree translates DOM semantics to assistive tools." },
          { a: ["label"], why: "aria-label supplies an accessible string name." },
          { a: ["polite"], why: "aria-live='polite' announces changes when the user is idle." }
        ]
      },
      win: "You can build custom interactive components that communicate clear names, roles, and states to assistive technologies.",
      nextTasks: [
        "Inspect the Accessibility Tree of a website using the Accessibility tab in Chrome/Firefox DevTools.",
        "Navigate your application using only the Tab and Enter keys on your keyboard.",
        "Add an aria-label to any button that contains only a visual icon."
      ],
      primarySource: "W3C: *WAI-ARIA Authoring Practices Guide (APG)* (w3.org/WAI/ARIA/apg).",
      quiz: [
        {
          q: "What does the attribute 'aria-hidden=\"true\"' do?",
          a: [
            "Hides the element from the Accessibility Tree while keeping it visible on screen",
            "Deletes the element from the DOM tree permanently",
            "Hides the element visually from the screen but announces it to screen readers",
            "Disables all CSS transitions on the element"
          ],
          c: 0,
          why: "aria-hidden='true' hides elements (like decorative icons) from assistive technologies."
        },
        {
          q: "Why is a native <button> superior to a <div onclick='...'>?",
          a: [
            "Buttons have built-in keyboard focusability (Tab) and Enter/Space activation without extra code",
            "Buttons load faster over high-latency cellular connections",
            "Divs cannot execute JavaScript functions",
            "Browsers charge royalty fees for div click handlers"
          ],
          c: 0,
          why: "<div> has no keyboard support or accessibility role; reproducing button behavior by hand is error-prone."
        },
        {
          q: "What does 'aria-expanded=\"true\"' communicate to a screen reader user on a menu button?",
          a: [
            "That the associated dropdown menu or accordion panel is currently open and visible",
            "That the button has been enlarged by CSS zoom styles",
            "That the user has clicked the button more than ten times",
            "That the website has completed loading"
          ],
          c: 0,
          why: "aria-expanded communicates the collapsible state of associated dropdown or modal content."
        },
        {
          q: "What is the purpose of 'tabindex=\"0\"' on an element?",
          a: [
            "Inserts the element into the natural keyboard tab navigation order",
            "Removes the element from keyboard tab order permanently",
            "Forces the element to be focused immediately upon page load",
            "Sets the element opacity to zero"
          ],
          c: 0,
          why: "tabindex='0' makes a non-interactive element focusable in natural document sequence."
        }
      ]
    },
    {
      n: 8,
      id: "inspecting-and-modifying-the-dom",
      title: "Inspecting and modifying the DOM",
      topic: "Accessibility & Inspection",
      anim: "Layers",
      lede: "Browser DevTools are your microscope into the living page. Master DOM inspection, live attribute editing, console selectors, and programmatic mutations.",
      winShort: "Inspect, debug, and mutate DOM elements using DevTools and standard DOM APIs",
      missionLink: "The primary day-to-day diagnostic skill for frontend web development",
      sec1: {
        title: "The Elements panel as a microscope",
        content: `<p>Right-clicking an element and selecting 'Inspect' opens the <b>DevTools Elements panel</b>. This shows the live, current DOM tree — complete with JavaScript mutations, active pseudo-states (<code>:hover</code>), and computed CSS styles.</p><p>You can edit attributes in real time, reorder nodes by dragging, trigger breakpoint pauses on DOM mutations, and reference the currently selected element in the console using the magic variable <code>$0</code>.</p>`,
        keyIdea: "The Elements panel reveals the live runtime DOM state, not the static initial HTML source file."
      },
      predict: {
        q: "What does typing '$0' in the browser DevTools Console evaluate to?",
        a: [
          "The DOM element currently selected in the Elements panel",
          "The total price of items in your shopping cart",
          "The first line of the HTML source file",
          "The user operating system username"
        ],
        c: 0,
        why: "$0 is a built-in DevTools shorthand referencing the currently highlighted DOM node."
      },
      sec2: {
        title: "Modern programmatic DOM APIs",
        content: `<p>Learn the standard, performant JavaScript methods for querying and updating DOM nodes.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Querying", lines: ["document.querySelector('.card')", "document.querySelectorAll('li')"] },
          { title: "Modification", lines: ["el.textContent = 'New text'", "el.classList.add('active')", "el.setAttribute('aria-expanded', 'true')"] },
          { title: "Creation", lines: ["document.createElement('div')", "parent.appendChild(child)"] }
        ]
      },
      sec3: {
        title: "Tracing live DOM mutation",
        content: `<p>Trace how JavaScript constructs a new element node and attaches it into the document tree.</p>`,
      },
      trace: {
        code: [
          "const card = document.createElement('div')",
          "card.className = 'card active'",
          "card.textContent = 'Welcome, Ada!'",
          "document.querySelector('#app').appendChild(card)"
        ],
        steps: [
          { line: 0, vars: { card: "HTMLDivElement created in memory (detached)" } },
          { line: 1, vars: { class: "'card active'" } },
          { line: 2, vars: { text: "'Welcome, Ada!'" } },
          { line: 3, vars: { dom: "card attached to #app; browser triggers layout & paint" } }
        ]
      },
      practiceIntro: "Test your memory of DOM manipulation tools.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The method to query the first element matching a CSS selector is query<0>.",
          "The DevTools console variable referencing the currently selected node is $<1>.",
          "The safe property to set text content without risking XSS injection is text<2>."
        ],
        blanks: [
          { a: ["Selector"], why: "querySelector returns the first matching element." },
          { a: ["0"], why: "$0 references the active DevTools selection." },
          { a: ["Content"], why: "textContent safely escapes text without parsing HTML tags." }
        ]
      },
      win: "You can diagnose layout anomalies, inspect live properties, and safely manipulate the DOM using browser developer tools and modern APIs.",
      nextTasks: [
        "Open DevTools on any website, select an element, and inspect it using $0 in the console.",
        "Add a CSS class to an element interactively using the .cls button in the Elements panel.",
        "Observe the DOM mutation breakpoint feature (Break on subtree modifications)."
      ],
      primarySource: "Chrome DevTools Documentation: *Get Started with Viewing and Changing the DOM* (developer.chrome.com).",
      quiz: [
        {
          q: "Why is 'element.textContent = str' preferred over 'element.innerHTML = str' for plain text?",
          a: [
            "textContent treats input as literal text, preventing Cross-Site Scripting (XSS) code injection",
            "textContent uses less CPU battery power on mobile phones",
            "innerHTML only works in Internet Explorer browsers",
            "textContent automatically translates text to uppercase"
          ],
          c: 0,
          why: "innerHTML parses strings as HTML markup; untrusted user input can inject malicious scripts."
        },
        {
          q: "What does 'document.querySelectorAll' return?",
          a: [
            "A static NodeList containing all elements matching the specified CSS selector",
            "A live array that automatically deletes matching elements from the page",
            "A JSON string containing the server database schema",
            "The memory address of the browser graphics card"
          ],
          c: 0,
          why: "querySelectorAll returns a static NodeList of all matching DOM element objects."
        },
        {
          q: "How can you simulate hover (:hover) or focus (:focus) states on an element in DevTools?",
          a: [
            "Use the ':hov' toggle button in the DevTools Styles panel to lock the pseudo-class",
            "Hold down the computer mouse button for twenty seconds",
            "Reboot the computer in developer mode",
            "Edit the operating system keyboard settings"
          ],
          c: 0,
          why: "The ':hov' panel in DevTools lets you force pseudo-classes like :hover or :focus for inspection."
        },
        {
          q: "What happens when you drag and drop an element node inside the DevTools Elements panel?",
          a: [
            "The browser moves the live element to the new position in the DOM tree in real time",
            "The browser deletes the element from the computer",
            "The web server re-deploys the website source code",
            "The element is converted into a PDF document"
          ],
          c: 0,
          why: "DevTools enables live reordering of DOM tree nodes directly in memory."
        }
      ]
    }
  ]
};

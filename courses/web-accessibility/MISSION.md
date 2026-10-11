# Mission — Web Accessibility (a11y)

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

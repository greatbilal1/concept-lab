# Concept Lab

### Learn courses and concepts, one clear idea at a time.

Concept Lab is a free, no-login learning space for people who want to understand how technology works. Explore a broad curriculum through short explanations, interactive lessons, visual models, and hands-on knowledge checks—all in your browser.

**[Open Concept Lab](https://greatbilal1.github.io/concept-lab/)** · **[Browse all courses](https://greatbilal1.github.io/concept-lab/courses.html)**

![Concept Lab homepage](screenshots/homepage.png)

## Learn by exploring

- **Follow a learning path** or jump straight into a topic, from programming foundations to AI, security, and distributed systems.
- **Make ideas visible** with diagrams, animations, and interactive examples.
- **Check your understanding** with prediction prompts, quizzes, and fill-in exercises.
- **Pick up where you left off** with progress saved in your browser.
- **Learn without an account.** Core course content runs locally and is designed to work offline once available on your device.

<p align="center">
  <img src="screenshots/python-course.png" width="49%" alt="Python course map with lessons grouped by topic">
  <img src="screenshots/python-lesson.png" width="49%" alt="Interactive Python lesson with an understanding check">
</p>

## Run it locally

No build step or package installation is required. Clone the repository, then open `index.html` in a modern browser:

```bash
git clone https://github.com/greatbilal1/concept-lab.git
cd concept-lab
open index.html
```

On Windows, open `index.html` from File Explorer. If you prefer a local web server, for example:

```bash
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## What's inside

| Path | Purpose |
| --- | --- |
| `index.html` | Home page, featured courses, and learning paths |
| `courses.html`, `glossary.html`, `news.html` | Course catalog and reference pages |
| `courses/` | Course hubs, lessons, and reference material |
| `data/` | Course catalog, learning paths, glossary, and other site data |
| `assets/css/`, `assets/js/` | Shared styles and browser-side behavior |
| `screenshots/` | README screenshots |

## Add or improve a course

Course pages are self-contained HTML and use shared assets from the repository. Course metadata and the catalog live in `data/courses.js`; learning paths live in `data/paths.js`. Authoring helpers and validation guidance are in [`tools/README.md`](tools/README.md).

If you contribute, keep lessons clear, focused, and interactive. Before submitting course changes, run the repository validator:

```bash
node tools/validate.js
```

## Privacy and optional AI assistant

Concept Lab does not require an account. Course progress is kept in your browser. The optional Labby assistant is different from the core learning experience: if you configure it, your provider API key is stored in that browser's local storage and requests are sent directly from your browser to the provider you select.

**Do not put a personal API key in the source code, README, screenshots, or a public GitHub repository.** A browser-based app cannot keep a shared provider secret private. Anyone using a publicly hosted copy should supply their own key, or leave the optional assistant unconfigured. Local storage is specific to a browser profile, so avoid entering a key on a shared device.

## Built with

HTML, CSS, and vanilla JavaScript. The core site has no build step and no required account or backend.

## License

No license is currently specified. Unless a license is added, the repository's contents are not granted for reuse under an open-source license.

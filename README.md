<!-- SPDX-License-Identifier: CC-BY-4.0 -->
# Enterprise Integration Patterns — courseware site

The static courseware website for **[EIP Hands-On](https://github.com/Sreenivas-Sadhu-Prabhakara/camel-eip-course)** —
a beginner-first course teaching Enterprise Integration Patterns with Apache Camel and Spring Boot.

🔗 **Live site:** https://sreenivas-sadhu-prabhakara.github.io/enterprise-integration-patterns/
💾 **Runnable code:** https://github.com/Sreenivas-Sadhu-Prabhakara/camel-eip-course

## What this is
Plain, self-contained HTML/CSS — **no build step, no framework, no external requests.** One page per pattern,
each mirroring a runnable module in the code repo (route + test + diagram). Built to be fast, accessible, and
SEO-friendly.

## Preview locally
Just open `index.html`, or serve the folder:
```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Structure
```
index.html · curriculum.html · setup.html · glossary.html · about.html · 404.html
lessons/NN-*.html        # one page per pattern (21 lessons)
assets/css/style.css     # the whole design system, one file
assets/js/nav.js         # menu toggle + copy buttons (the only JS)
assets/img/              # favicon + social image (SVG)
sitemap.xml · robots.txt · site.webmanifest
```

## License
Content is **CC-BY-4.0** — reuse it in your own teaching, just credit the project. Not affiliated with or
endorsed by Red Hat or the Apache Software Foundation.

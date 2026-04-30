# Celine Tannous — Cybersecurity Portfolio

Personal portfolio site for Celine Tannous, a U.S. Navy Lieutenant transitioning into cybersecurity. The site documents hands-on lab work, blue-team projects, credentials, and professional background for roles in detection engineering, security operations, and SOC.

**Live:** https://celinetannous.com &nbsp;|&nbsp; https://obsidiannull.github.io

---

## Tech stack

| Layer | Details |
|---|---|
| Hosting | GitHub Pages (static, no build step) |
| HTML | Single-page `index.html` |
| CSS | `resources/css/recruiter-portfolio.css` — custom, no framework |
| JS | `resources/javascript/recruiter-portfolio.js` — vanilla JS, no dependencies |
| Fonts | Inter via Google Fonts |
| Icons | Font Awesome 6.4 (CDN) |

---

## Project structure

```
obsidiannull.github.io/
├── index.html                          # All site content (single page)
├── CNAME                               # Custom domain: celinetannous.com
├── sitemap.xml
├── robots.txt
└── resources/
    ├── css/
    │   └── recruiter-portfolio.css     # Primary stylesheet
    ├── javascript/
    │   └── recruiter-portfolio.js      # Nav toggle, scroll reveal, stagger animations
    ├── images/
    │   ├── uniformpic.jpeg             # Profile photo
    │   ├── lab-architecture.svg        # Home lab diagram
    │   ├── detection-pipeline.svg      # Detection pipeline diagram
    │   └── Celine Tannous Resume.pdf   # Downloadable resume
    ├── writeups/
    │   ├── apt29-ttp.html              # Public technical write-up (APT29 TTPs)
    │   ├── apt29-ttp.md                # Source markdown for write-up
    │   ├── view.html                   # Write-up viewer shell
    │   └── index.json                  # Write-up index
    └── jQuery/
        └── jquery-3.6.3.min.js         # Retained for legacy compatibility
```

---

## Page sections

| Section ID | Content |
|---|---|
| `#home` | Hero — headline, summary, CTAs, key facts |
| `#about` | Background, motivation, and approach |
| `#experience` | Cyber Officer (USS Harpers Ferry), Reactor Division Officer (USS Carl Vinson), GE Aviation, JHU APL |
| `#projects` | Detection Engineering Lab (VMware, AD, Sysmon, Wazuh) |
| `#visual-proof` | Lab architecture diagram, detection pipeline diagram, screenshot placeholders |
| `#skills` | Security tooling, platforms, working style |
| `#credentials` | USNA B.S. Cyber Operations, TS/SCI, Security+, PenTest+/CySA+ in progress |
| `#contact` | Email, phone, LinkedIn, GitHub |

---

## Local preview

No build required. Serve any static file server from the repo root:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

In a GitHub Codespace, VS Code will auto-forward port 8080 — click **Open in Browser** in the Ports panel.

---

## Scroll animations

Reveal animations are driven by a native `IntersectionObserver` in `recruiter-portfolio.js`. Elements with the `.reveal` class fade up on scroll. Grid children receive a staggered `--reveal-delay` CSS variable (70ms between siblings) so cards cascade in naturally rather than all firing at once.

To add reveal behavior to a new element, add `class="reveal"` to it. No other changes needed.

---

## Adding a write-up

1. Create a markdown or HTML file in `resources/writeups/`.
2. Add an entry to `resources/writeups/index.json`.
3. Link to it from `index.html` in the **Proof of work** section.

---

## Deployment

Pushes to `main` deploy automatically via GitHub Pages. The custom domain `celinetannous.com` is configured through the `CNAME` file and DNS A/CNAME records pointing to GitHub Pages.


# Portfolio Site

Personal portfolio for Francisco Montecinos — Data Engineer / Platform Engineer. Plain HTML/CSS/JS, no build step, no framework.

**Live:** https://fcomcisco.github.io/cisco-website/

## Structure

```
index.html   Page structure/markup
styles.css   All styling (dark/light theme via CSS variables)
script.js    Content config, translations, and rendering logic
assets/      Profile photo + company/university logos
```

Devicon (icons) and Three.js/Vanta (fog background) are loaded from CDN in `index.html`; everything else is self-contained.

## Editing content

Almost everything on the site — name, links, tech stack, work experience, education — is data-driven from two objects at the top of `script.js`:

- `CONFIG` — name, links, tech stack list, experience/education entries, logo paths
- `TRANSLATIONS` — all displayed text (EN/ES/DE), keyed by language

To add a language, add a new key to `TRANSLATIONS` and a matching button in the `#langToggle` markup in `index.html`.

To add a logo/photo, drop the image file into `assets/` (or `assets/logos/`) and reference its path in `CONFIG`. Missing image files fall back gracefully to a text badge/initials.

## Running locally

Any static file server works, e.g.:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

## Deployment

- `main` is the live branch — pushing to it triggers the GitHub Actions workflow (`.github/workflows/static-pages.yml`), which deploys straight to GitHub Pages with no build step.
- `QA` is used as a staging branch for work in progress before merging to `main`.

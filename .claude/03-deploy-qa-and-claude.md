# Portfolio Build Brief — Part 3: Deploy, QA & Claude Instructions

## A) Performance & Accessibility Budget
- **Targets:** LCP ≤2.5s, CLS ≤0.05, TTI ≤2.5s (mid‑tier mobile), JS ≤120KB gzip, initial images ≤300KB.
- **Techniques:** inline critical CSS; defer/minify JS; `content-visibility:auto`; lazy images (with `decoding="async"`); `font-display:swap`; respect `prefers-reduced-motion`.
- **A11y:** keyboard nav, visible focus outlines, ARIA for accordions/tabs, semantic landmarks; skip‑to‑content link.

## B) SEO & Social
- Proper `h1` (Hero) + logical `h2` hierarchy.
- Meta: title (≤60c), description (≤160c), canonical, robots.
- JSON‑LD: `Person`, `Organization`, `SoftwareSourceCode` for OSS repos.
- OG/Twitter cards; 1200×630 social image (name, title, tagline, subtle brain/brush).

## C) GitHub Pages Setup
**Option 1 (root):** name repo `shahanursharif/shahanursharif.github.io` → push `index.html` and `/assets` at root → Pages auto‑serves.  
**Option 2 (`/docs`):** place site in `/docs` → Settings → Pages → Source: `main`/`/docs`.

**Rules**
- All asset links **relative** (e.g., `./assets/...`). No leading slash.
- Include `404.html` that redirects to `index.html` (even though it’s a single page).
- If using a build step, commit final build artifacts.

## D) Minimal Files to Ship
- `index.html` (single page)
- `assets/` (minified `app.js`, optional `styles.css`, SVG doodles, webp images, favicon, `manifest.json`)
- `robots.txt`, `sitemap.xml`
- `og-cover.png` (1200×630)
- `resume/Shahanur-Md-Sharif-CV.pdf` (placeholder okay)
- `404.html` (redirect to `index.html`)
- (Optional) `.github/workflows/pages.yml` to rebuild to `/docs` on push

## E) QA Checklist
- [ ] Links & anchors resolve; no 404s; console clean
- [ ] Keyboard tab order intuitive; focus visible; skip link works
- [ ] Animations reduce/disable with `prefers-reduced-motion`
- [ ] Dark/light persists via `localStorage`
- [ ] Images responsive (`srcset`, `sizes`) and lazy‑loaded
- [ ] Section IDs match nav; scroll spy updates
- [ ] Lighthouse Perf/Acc/Best/SEO ≥95 on throttled mobile

## F) Claude — Build Instructions (paste‑ready)
- Build a **single static HTML** page styled with **Tailwind via CDN** and a **tiny vanilla JS** file. No SSR, no router.  
- Use sections and copy from **Part 2**. Hero tagline: *“I am an engineer in brain, artist in mind.”* Include metric chips (3331 hrs, 100% JSS).  
- Implement **dark‑first** theme with a toggle; persist choice (`localStorage`). Respect `prefers-reduced-motion` for all animations.
- Create small inline SVG doodles (≤10KB each): split brain (PCB ↔ paint), rubber‑duck, rocket‑cat sticker, coffee steam, robot handing paintbrush. Lazy‑render on intersection.
- Use only **relative** asset paths. Output files into either repo root (if named `*.github.io`) or `/docs` and configure Pages accordingly.
- Include `robots.txt`, `sitemap.xml`, `manifest.json`, `og-cover.png`, and `404.html` redirect.
- Meet the performance and a11y targets in **A**. Prefer no external JS frameworks beyond a tiny smooth‑scroll helper if necessary.

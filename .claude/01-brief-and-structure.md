# Portfolio Build Brief — Part 1: Goals, Tech, Structure

**Site:** `shahanursharif.github.io`  
**Tagline (Hero):** *"I am an engineer in brain, artist in mind."*

## 1) Goals
- Single static page with smooth, subtle interactions (inspired by diegosevilla.dev — do **not** copy).
- Fast: Lighthouse ≥95 (Perf/SEO/Acc/Best).
- Clean, confident, slightly playful. Works 100% on GitHub Pages.

## 2) Tech (GitHub Pages–friendly)
- Static HTML + Tailwind (CDN) + tiny vanilla JS (one minified file).
- Optional: Lenis or a tiny smooth-scroll lib. Respect `prefers-reduced-motion`.
- No SSR/routers. All **relative** asset paths. If using a build step, commit the final `/docs` output.

## 3) Visual Language
- **Dark-first** with toggle to light; persist via `localStorage`.
- Palette (suggested): Ink `#0B1220`, Off‑white `#F6F7FB`, Cyan `#6EE7FF`, Mango `#FFB86B`, Gray `#8A93A6`.
- Type: Headings “Inter”/“Sora”; body “Inter”/“IBM Plex Sans”.
- Icons: Lucide. Doodles: tasteful inline SVGs (<10KB), lazy-render on view.

## 4) Page Structure (sections in order)
1. **Hero** — Tagline big, 2‑line summary, CTAs (CV, Email, Upwork, LinkedIn, GitHub); metric chips (3331 hrs, 100% JSS).
2. **About** — short career story + quick facts grid.
3. **Experience (timeline)** — Upwork, MicroDreamIT, Freelancer.com (expandable bullets).
4. **Featured Projects (filterable)** — Cards w/ tags + Live Demo + Code (if public); include credentials inline.
5. **Skills Matrix (interactive)** — grouped chips; hover tooltips; click highlights related projects.
6. **Certifications & Courses (logo wall)** — include Credly button.
7. **Education**
8. **Leadership & Community**
9. **Media & Publications**
10. **Hobbies**
11. **Awards**
12. **References (accordion)**
13. **Contact** — buttons + optional Formspree form.

## 5) “Funny but classy” micro‑images
- Split brain: PCB traces ↔ paint splash.
- Rubber‑duck debugger on laptop bezel (hover: “quack() returns true”).
- Rocket‑cat sticker on laptop lid.
- Coffee cup with gentle steam on hover.
- Tiny robot handing a paintbrush to a human hand.

# Setup Instructions

## Prerequisites

- Node.js 20+ and npm
- Git

## Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Copy your CV PDF to the correct location:**
```bash
# Make sure your CV is at:
docs/resume/ShahanurSharifGMCv.pdf
```

## Development

```bash
# Start dev server with HMR
npm run dev

# Open http://localhost:5173
```

## Build for Production

```bash
# Build static site to /docs
npm run build

# Preview the production build
npm run serve
```

## Deployment to GitHub Pages

### Option 1: Automatic (Recommended)

The GitHub Actions workflow is already configured in `.github/workflows/pages.yml`.

1. Push your code to GitHub
2. Go to Settings → Pages
3. Set Source to "GitHub Actions"
4. The site will auto-deploy on every push to master

### Option 2: Manual

1. Run `npm run build`
2. Commit the `/docs` folder
3. Push to GitHub
4. Go to Settings → Pages
5. Set Source to "Deploy from a branch"
6. Select branch: master, folder: /docs
7. Save

## Post-Build Checklist

After running `npm run build`, verify:

- ✅ `/docs/index.html` exists and contains NO Vue runtime script tags
- ✅ `/docs/assets/app.js` is small (<30KB gzipped)
- ✅ `/docs/assets/interactions.js` contains vanilla JS only
- ✅ `/docs/assets/style.css` has all styles
- ✅ All relative paths work (./assets/... not /assets/...)
- ✅ Dark/light theme toggle works
- ✅ Smooth scroll navigation works
- ✅ Counter animations trigger on scroll
- ✅ SVG doodles lazy load
- ✅ All external links have rel="noopener"
- ✅ Keyboard navigation works
- ✅ No console errors

## Testing

```bash
# Run Lighthouse audit (requires Chrome)
npm run build
npm run serve

# In Chrome DevTools:
# 1. Open Lighthouse tab
# 2. Select "Desktop" or "Mobile"
# 3. Run audit
# 4. Verify all scores ≥95
```

## Customization

### Update Content

Edit the Vue components in `src/components/sections/`:
- `HeroSection.vue` - Hero content & metrics
- `AboutSection.vue` - About text
- `ExperienceSection.vue` - Job history
- `ProjectsSection.vue` - Project showcase
- `SkillsSection.vue` - Skills & technologies
- Etc.

### Update Theme Colors

Edit CSS variables in `src/styles/main.css`:
```css
:root {
  --ink: #0B1220;
  --cyan: #6EE7FF;
  --mango: #FFB86B;
  /* ... */
}
```

### Add New Sections

1. Create component in `src/components/sections/NewSection.vue`
2. Import in `src/pages/Home.vue`
3. Add to navigation array
4. Update scroll-spy

## Troubleshooting

### Vue runtime appears in production

Make sure `vite-ssg` build is running correctly:
```bash
npm run build
# Check docs/index.html - should NOT have Vue hydration code
```

### Styles not loading

Check that `src/main.ts` imports the CSS:
```ts
import './styles/main.css';
```

### TypeScript errors

Run:
```bash
npm install
# Restart VS Code
```

## File Structure

```
shahanursharif.github.io/
├── .github/
│   └── workflows/
│       └── pages.yml        # Auto-deploy workflow
├── docs/                    # Build output (GitHub Pages)
│   ├── assets/
│   ├── resume/
│   ├── index.html
│   ├── 404.html
│   ├── robots.txt
│   ├── sitemap.xml
│   └── manifest.json
├── public/                  # Static assets
│   ├── assets/
│   ├── 404.html
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   └── sections/        # All page sections
│   ├── pages/
│   │   └── Home.vue
│   ├── scripts/             # Vanilla JS
│   ├── styles/
│   │   └── main.css
│   ├── App.vue
│   ├── main.ts              # vite-ssg entry
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Support

For issues or questions:
- Email: iyaanasehrish@gmail.com
- GitHub Issues: https://github.com/ShahanurSharif/shahanursharif.github.io/issues

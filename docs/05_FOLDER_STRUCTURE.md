# Folder Structure & Build Order — Solaroofing Prototype
## Session 1, Doc 6 of 6

*Final repo layout. Build order. First-commit plan.*

---

## 1. FINAL REPO STRUCTURE

```
prototype/
├── docs/                              ← all session docs live here
│   ├── 00_DESIGN_EXTRACTION.md
│   ├── 01_CODEBASE_RULES.md
│   ├── 02_ASSET_INVENTORY.md
│   ├── 03_CMS_SCHEMA.md
│   ├── 04_COMPONENT_LIBRARY_MAPPING.md
│   ├── 05_FOLDER_STRUCTURE.md
│   ├── WHERE_WE_ARE.md                ← updated end of every session
│   ├── BRAND_SWAP_GUIDE.md            ← Session 3 deliverable
│   ├── DEPLOY_GUIDE.md                ← Session 3 deliverable
│   └── README.md (the repo's main README, links here)
│
├── public/
│   ├── fonts/                         ← Plus Jakarta Sans + Caveat WOFF2
│   ├── images/
│   │   ├── hero/
│   │   ├── projects/
│   │   ├── team/
│   │   ├── services/
│   │   ├── testimonials/
│   │   ├── timeline/
│   │   ├── about/
│   │   ├── publications/
│   │   ├── calculator/
│   │   ├── contact/
│   │   ├── clients/                   ← partner logos
│   │   └── misc/
│   ├── icons/
│   │   ├── logo.svg
│   │   ├── favicon.svg
│   │   ├── social/
│   │   ├── nav/
│   │   ├── feature/
│   │   ├── badges/
│   │   └── decorative/
│   ├── og/                            ← Open Graph images
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── robots.txt                     ← static; Astro generates sitemap
│   └── llms.txt                       ← AI crawler hints
│
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Nav.astro
│   │   │   ├── Footer.astro
│   │   │   ├── AnnouncementBar.astro
│   │   │   └── WhatsAppFloat.astro
│   │   │
│   │   ├── sections/
│   │   │   ├── home/
│   │   │   │   ├── Hero.astro
│   │   │   │   ├── TrustLogos.astro
│   │   │   │   ├── WhyChoose.astro
│   │   │   │   ├── Process.astro
│   │   │   │   ├── Services.astro
│   │   │   │   ├── Testimonials.astro
│   │   │   │   ├── Stats.astro
│   │   │   │   ├── YearsExcellence.astro
│   │   │   │   └── FinalCta.astro
│   │   │   ├── about/
│   │   │   │   ├── AboutHero.astro
│   │   │   │   ├── AboutStory.astro
│   │   │   │   ├── AboutPromise.astro
│   │   │   │   ├── AboutTimeline.astro
│   │   │   │   └── AboutGroupFamily.astro
│   │   │   ├── projects/
│   │   │   │   ├── ProjectsHero.astro
│   │   │   │   ├── ClientStrip.astro
│   │   │   │   ├── FilterBar.astro
│   │   │   │   ├── ProjectGrid.astro
│   │   │   │   ├── FeaturedCaseStudy.astro
│   │   │   │   └── StatsBanner.astro
│   │   │   ├── calculator/
│   │   │   │   ├── CalculatorHero.astro
│   │   │   │   ├── CalculatorForm.tsx       ← React island
│   │   │   │   ├── HowItWorks.astro
│   │   │   │   └── DewaInfoStrip.astro
│   │   │   ├── publications/
│   │   │   │   ├── PublicationsHero.astro
│   │   │   │   ├── PublicationsFilter.tsx   ← React island
│   │   │   │   ├── FeaturedArticle.astro
│   │   │   │   ├── ArticleGrid.astro
│   │   │   │   └── Newsletter.astro
│   │   │   └── contact/
│   │   │       ├── ContactHero.astro
│   │   │       ├── ContactForm.tsx          ← React island (form state)
│   │   │       ├── MapSection.astro
│   │   │       └── ProjectCta.astro
│   │   │
│   │   └── ui/
│   │       ├── Button.astro
│   │       ├── Card.astro
│   │       ├── Container.astro
│   │       ├── Section.astro
│   │       ├── Heading.astro
│   │       ├── Text.astro
│   │       ├── Eyebrow.astro
│   │       ├── Badge.astro
│   │       ├── Input.astro
│   │       ├── Textarea.astro
│   │       ├── Select.astro
│   │       ├── IconBox.astro
│   │       ├── CursiveAccent.astro
│   │       ├── three-d-card.tsx              ← Aceternity React
│   │       ├── number-ticker.tsx             ← Magic UI React
│   │       ├── marquee.tsx                   ← Magic UI React
│   │       ├── animated-beam.tsx             ← Magic UI React
│   │       ├── sparkles.tsx                  ← Aceternity React
│   │       ├── border-beam.tsx               ← Aceternity React
│   │       └── spotlight.tsx                 ← Aceternity React
│   │
│   ├── content/
│   │   ├── site.json                      ← all content
│   │   └── pages.json                     ← page composition
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── lib/
│   │   ├── cn.ts                          ← clsx + tailwind-merge
│   │   ├── schema.ts                      ← JSON-LD builders
│   │   ├── seo.ts                         ← meta tag builders
│   │   └── geo.ts                         ← llms.txt builder
│   │
│   ├── pages/
│   │   ├── index.astro                    ← home
│   │   ├── about.astro
│   │   ├── projects.astro
│   │   ├── calculator.astro
│   │   ├── publications.astro
│   │   ├── contact.astro
│   │   ├── privacy.astro
│   │   ├── terms.astro
│   │   └── 404.astro
│   │
│   └── styles/
│       └── tokens.css                     ← CSS variables + keyframes
│
├── .gitignore
├── astro.config.mjs
├── components.json                        ← shadcn/ui config (generated)
├── package.json
├── README.md
├── tailwind.config.mjs
└── tsconfig.json
```

---

## 2. SESSION 2 BUILD WAVES (order matters)

### Wave 1 — Foundation (1 commit)
```
src/styles/tokens.css
tailwind.config.mjs (rewrite with Solaroofing palette)
src/lib/cn.ts
src/lib/schema.ts
src/lib/seo.ts
src/content/site.json (full populate)
src/content/pages.json (full populate)
docs/* (paste all 6 session 1 docs here)
```

### Wave 2 — Layout shell (1 commit)
```
src/layouts/Layout.astro
src/components/common/AnnouncementBar.astro
src/components/common/Nav.astro
src/components/common/Footer.astro
```

### Wave 3 — UI primitives (1 commit, all 13 files)
```
src/components/ui/* (Button, Card, Container, Section, Heading, Text, Eyebrow, Badge, Input, Textarea, Select, IconBox, CursiveAccent)
```

### Wave 4 — shadcn/Aceternity/Magic UI components (1 commit)
```
npx shadcn@latest init
npx shadcn@latest add button card input tabs accordion dialog form
Copy-paste Aceternity 3D Card, Sparkles, Border Beam, Spotlight → src/components/ui/
Copy-paste Magic UI Number Ticker, Marquee, Animated Beam → src/components/ui/
```

### Wave 5 — Home page sections (1 commit per 2-3 sections)
```
Hero.astro
TrustLogos.astro
WhyChoose.astro
Process.astro
Services.astro
Testimonials.astro
Stats.astro
YearsExcellence.astro
FinalCta.astro
src/pages/index.astro (compose)
```

### Wave 6 — About page (1 commit)
```
AboutHero.astro
AboutStory.astro
AboutPromise.astro
AboutTimeline.astro
AboutGroupFamily.astro
src/pages/about.astro (compose)
```

### Wave 7 — Projects page (1 commit)
### Wave 8 — Calculator page (1 commit, includes React island)
### Wave 9 — Publications page (1 commit)
### Wave 10 — Contact page (1 commit, includes React form island)
### Wave 11 — Legal + 404 pages (1 commit)
### Wave 12 — SEO finalize (sitemap, robots, llms.txt) (1 commit)
### Wave 13 — Mobile pass (1 commit)

**Total commits in Session 2: ~15**

---

## 3. DOCS GO INTO REPO FIRST

Before any code, paste these 6 files into the repo:

```
prototype/docs/00_DESIGN_EXTRACTION.md
prototype/docs/01_CODEBASE_RULES.md
prototype/docs/02_ASSET_INVENTORY.md
prototype/docs/03_CMS_SCHEMA.md
prototype/docs/04_COMPONENT_LIBRARY_MAPPING.md
prototype/docs/05_FOLDER_STRUCTURE.md
```

Cursor Agent spec to do this:

```
GOAL: Create docs folder, copy 6 markdown files from a source location into it, commit.

STEPS:
1. Confirm pwd ends with /prototype.
2. Create docs folder if not exists: node -e "require('fs').mkdirSync('docs',{recursive:true})"
3. The 6 doc files will be pasted by the user from his Claude conversation. Wait for user to paste them.
4. After all 6 files are in docs/, run:
   git add docs/
   git commit -m "Add Session 1 docs (design extraction + codebase rules + asset inventory + CMS schema + library mapping + folder structure)"
   git push origin main
5. Report success.
```

---

## 4. WHERE_WE_ARE.md TEMPLATE (lives in /docs/, updated end of each session)

```markdown
# Where We Are
*Updated: [DATE]*

## Current Session
[Session 1 / Session 2 / Session 3]

## Last Completed
[short bullet list of what just got finished]

## Currently Building
[what's in progress right now]

## Next Up
[immediate next 1-3 tasks]

## Blockers
[anything stuck or pending decision]

## Key URLs
- Live site: https://prototype-milvow.vercel.app
- GitHub: https://github.com/milvow-ai/prototype
- Vercel dashboard: https://vercel.com/milvow/prototype

## Recent Commit Hash
[git log -1 --oneline]

## Pickup Instructions for Next Claude Instance
If continuing this session after token reset:
1. Read /docs/WHERE_WE_ARE.md (this file)
2. Read /docs/01_CODEBASE_RULES.md (canonical pattern)
3. Read /docs/03_CMS_SCHEMA.md (data structure)
4. Continue from "Currently Building" above
5. Check git log for last commit before adding more
```

---

## 5. README.md TEMPLATE (root)

```markdown
# Prototype — Solaroofing Replica

**Quality benchmark site** built as part of Webfactory.
100% pixel-perfect reproduction of the Solaroofing Figma design,
with full content + brand swap-ability via JSON.

## Stack
- Astro 5 + React Islands
- Tailwind CSS 3.4
- shadcn/ui + Aceternity UI + Magic UI
- Framer Motion for premium animations
- Vercel hosting

## Content System
- `src/content/site.json` — all text + image paths
- `src/content/pages.json` — section composition per page
- `src/styles/tokens.css` — design tokens (colors, fonts)

To clone for a new client: edit those 3 files + replace assets in `/public/images/`.

## Local Dev
```
npm install
npm run dev    # localhost:4321
npm run build  # production build
```

## Documentation
See `/docs/` folder for full session docs:
- 00 Design Extraction
- 01 Codebase Rules
- 02 Asset Inventory
- 03 CMS Schema
- 04 Component Library Mapping
- 05 Folder Structure
- WHERE_WE_ARE.md (current state)
- BRAND_SWAP_GUIDE.md (how to clone)
- DEPLOY_GUIDE.md (Vercel setup)

## Live
https://prototype-milvow.vercel.app
```

---

## 6. END OF SESSION 1

All 6 docs locked. Ready for Session 2 (BUILT).

**Session 1 deliverables checklist:**
- [x] 00 Design Extraction — palette, typography, spacing, components, layouts
- [x] 01 Codebase Rules — canonical pattern, hard rules, checklist
- [x] 02 Asset Inventory — every photo/icon needed + acquisition strategy
- [x] 03 CMS Schema — site.json + pages.json + tokens.css fully specced
- [x] 04 Component Library Mapping — section → library source
- [x] 05 Folder Structure — final repo layout + build wave order

---

## 7. NEXT ACTION (USER)

1. Read all 6 docs (or skim if pressed for time — most important: 00 + 01 + 03)
2. Push back on anything that feels wrong
3. If approved → tell me "approved, start Session 2"
4. I write the Cursor Agent spec to:
   - Create `docs/` folder in prototype repo
   - Paste all 6 docs into it
   - Commit
5. Then Session 2 Wave 1 (Foundation) starts — I deliver tokens.css + tailwind.config.mjs + lib files

---

## END

# Component Library Mapping — Solaroofing Prototype
## Session 1, Doc 5 of 6

*Each section → specific library source. We adapt, don't invent.*

---

## 1. LIBRARY STACK INSTALLED

```
shadcn/ui          → base components (Button, Card, Input, Tabs, Accordion, Dialog)
Aceternity UI      → premium effects (3D Card, Animated Beam, Background Gradient, Sparkles, Border Beam, Hero Highlight, Spotlight)
Magic UI           → animations (Number Ticker, Marquee, Animated Shiny Text, Particles, Ripple)
Framer Motion      → spring physics + scroll triggers (already installed: motion package)
Lucide React       → icons (already installed)
```

**Install commands (run later in Session 2):**
```
npx shadcn@latest init
npx shadcn@latest add button card input tabs accordion dialog form
# Aceternity + Magic UI components are copy-pasted from their docs (free, no install)
```

---

## 2. UI PRIMITIVES (src/components/ui/)

| Primitive | Source | Notes |
|---|---|---|
| `Button.astro` | shadcn Button + custom orange variant | Polymorphic (renders `<a>` if href else `<button>`) |
| `Card.astro` | shadcn Card | Wrapper for hover-lift + border-orange/40 on hover |
| `Container.astro` | custom | max-w + responsive px |
| `Section.astro` | custom | bg variants (light/dark/cream/orange) + spacing |
| `Heading.astro` | custom | h1-h6 via dynamic Tag |
| `Text.astro` | custom | size/variant/weight |
| `Eyebrow.astro` | custom | uppercase tracking-wider pill |
| `Badge.astro` | shadcn Badge | for "30+ YEARS" stat badges |
| `Input.astro` | shadcn Input | form fields |
| `Textarea.astro` | shadcn Textarea | message field |
| `Select.astro` | shadcn Select | dropdowns |
| `IconBox.astro` | custom | rounded-xl orange-light bg + icon center |
| `CursiveAccent.astro` | custom + Caveat font | wraps cursive overlay words |

---

## 3. SECTION COMPONENT MAPPING

### Common (sitewide)

| Component | Source | Notes |
|---|---|---|
| `Nav.astro` | shadcn NavigationMenu (light) + custom black layout | Sticky top, orange CTA pill |
| `AnnouncementBar.astro` | custom | thin orange strip |
| `Footer.astro` | custom | 3-4 col multi-link |
| `WhatsAppFloat.astro` | custom (mobile only) | bottom-right pulse |

### HOME page

| Section | Library Source | Specific Component |
|---|---|---|
| Hero | Aceternity + custom | `BackgroundGradient` + custom split layout |
| Trust Logos | Magic UI | `Marquee` (horizontal infinite scroll) |
| Why Choose | shadcn Accordion + Aceternity 3D Card | accordion left, 3D image card right |
| Process (4 steps) | custom + Framer Motion stagger | dark numbered cards |
| Services | Aceternity 3D Card | mouse-tilt premium feel |
| Testimonials | shadcn Card + Framer Motion | 3-col with stagger reveal |
| Stats Bar | Magic UI Number Ticker | count-up animation |
| Years Excellence | custom | desk illustration + 4 pills |
| Final CTA | custom | orange full-bleed |

### ABOUT page

| Section | Library Source | Specific Component |
|---|---|---|
| About Hero | Aceternity Spotlight | watermark text overlay effect |
| About Story | custom | milestones with year-card stagger |
| About Promise | Aceternity Border Beam | dark card with animated border |
| About Timeline | Magic UI Animated Beam | connecting beam between year dots |
| About Group Family | shadcn Card grid | 5-card grid, hover-lift |

### PROJECTS page

| Section | Library Source | Specific Component |
|---|---|---|
| Projects Hero | custom | image bg + stats badges |
| Client Strip | Magic UI Marquee | horizontal logo scroll |
| Filter Bar | shadcn Tabs + custom pills | category filter |
| Project Grid | Aceternity 3D Card | each project = 3D card with mouse tilt |
| Featured Case Study | custom | dark split image+text |
| Stats Banner | Magic UI Number Ticker | count-up |

### CALCULATOR page

| Section | Library Source | Specific Component |
|---|---|---|
| Calculator Hero | Aceternity Spotlight | image bg + cursive accent |
| Calculator Form | shadcn Form + Input + custom React state | interactive math |
| Result Display | Magic UI Number Ticker + custom | animated numbers + progress bar |
| How It Works | custom + Framer Motion stagger | 3 numbered cards |
| DEWA Info Strip | shadcn Badge | dark strip with pill badges |

### PUBLICATIONS page

| Section | Library Source | Specific Component |
|---|---|---|
| Publications Hero | custom | image right + featured article overlay |
| Filter Bar | shadcn Tabs | All/News/Case Studies/Updates/Events |
| Featured Article | custom | image-left + tags + headline |
| Article Grid | shadcn Card + Framer Motion | 4-col grid with stagger |
| Newsletter | shadcn Input + Button | dark bg signup |

### CONTACT page

| Section | Library Source | Specific Component |
|---|---|---|
| Contact Hero | Aceternity Spotlight | giant CONTACT watermark behind |
| Two-Panel Diagonal | custom | service toggle + form left, contact details right |
| Map Section | iframe + shadcn Card | Google Maps + floating Office card |
| Project CTA | custom | dark bg + cursive Let's Talk + phone |

---

## 4. INTERACTIVE FEATURES → REACT ISLANDS

These need React (via `@astrojs/react`) for state + Framer Motion:

| Feature | Why React |
|---|---|
| Calculator (math + animated results) | useState for input, calculation, animation |
| Project Filter | useState for active filter |
| Publications Tabs Filter | useState for active tab |
| Mobile Mega-Menu Toggle | useState for open/close |
| Form Submission States (loading, success, error) | useState + fetch |
| Aceternity 3D Cards | requires React hooks for mouse tracking |
| Magic UI Number Ticker | requires React + Intersection Observer hook |

All other components stay pure Astro (zero JS shipped). Islands hydrate only where interactivity is needed.

---

## 5. ICON SOURCES

| Use case | Source | Notes |
|---|---|---|
| Lucide icons (90% of icons) | `lucide-react` | already installed; use `<Sun />`, `<ArrowRight />`, etc. |
| Brand logos | Custom SVG in `/public/icons/` | extract from Figma PNGs |
| Social icons | Lucide or custom | `<Instagram />`, `<Linkedin />`, etc. |
| Cursive underline | Custom hand-drawn SVG | one file in `/public/icons/cursive-underline.svg` |
| Sparkle decoration | Aceternity Sparkles | full component, not just icon |

---

## 6. ANIMATION INTEGRATION

| Animation | Implementation |
|---|---|
| Section reveal on scroll | CSS class `.reveal` + Intersection Observer in Layout.astro |
| Card hover lift | Tailwind utilities only (`hover:-translate-y-1 hover:shadow-2xl`) |
| Card spring tilt (3D) | Aceternity 3D Card (Framer Motion under hood) |
| Number count-up | Magic UI Number Ticker (React component) |
| Logo marquee | Magic UI Marquee (CSS animation) |
| Connecting beam between elements | Magic UI Animated Beam (SVG + Framer) |
| Sparkle particles | Aceternity Sparkles (Canvas) |
| Border beam glow | Aceternity Border Beam (CSS animation) |
| Hero text stagger-in on load | Framer Motion `motion.div` with delay |
| Mouse-tracking spotlight | Aceternity Spotlight |

---

## 7. COMPONENT INVENTORY TOTAL

```
PRIMITIVES (UI):     13
COMMON:               4   (Nav, AnnouncementBar, Footer, WhatsAppFloat)
SECTIONS:
  Home:              10
  About:              5
  Projects:           6
  Calculator:         5
  Publications:       5
  Contact:            4
PAGES:                9   (index, about, projects, calculator, publications, contact, privacy, terms, 404)
TOTAL FILES:         61
```

---

## 8. LIBRARY ACQUISITION (when Session 2 starts)

**shadcn/ui** — already npm-installed conceptually. Run `npx shadcn@latest init` once, then `npx shadcn@latest add [component]` per component.

**Aceternity UI** — copy-paste from https://ui.aceternity.com/components. Each component is a standalone .tsx file you drop in `src/components/ui/`. Free, no npm package.

**Magic UI** — copy-paste from https://magicui.design/components. Same as Aceternity.

**Framer Motion** — already installed (`motion` package).

---

## 9. NO-LIBRARY COMPONENTS (custom only)

These don't use any library — pure Astro + Tailwind:
- AnnouncementBar (thin strip, no fancy)
- Footer (multi-col layout, links)
- Section (wrapper, just bg + spacing)
- Container (max-w wrapper)
- Heading, Text, Eyebrow (typography primitives)
- IconBox (decorative wrapper)
- CursiveAccent (Caveat font wrapper)

---

## 10. END OF DOC

Doc 5 of 6 locked. Source for every component identified. No invention from scratch.

Next: `05_FOLDER_STRUCTURE.md` (final repo layout + first commit plan).

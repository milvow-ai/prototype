# Codebase Rules — Solaroofing Prototype
## Session 1, Doc 2 of 6

*Locked. Every file follows this. Drift = reject + rewrite.*

---

## 1. FILE STRUCTURE

```
src/
  components/
    common/      → Nav, Footer, AnnouncementBar (sitewide)
    sections/    → Hero, Services, ProjectGrid, etc. (full-width sections)
    ui/          → Button, Card, Badge, Input, etc. (atoms)
  content/
    site.json    → all page content
    pages.json   → which sections per page
  layouts/
    Layout.astro → root HTML shell
  lib/
    schema.ts    → JSON-LD builders
    seo.ts       → meta tag builders
    geo.ts       → llms.txt + fact sheet
    cn.ts        → className merger (clsx + tailwind-merge)
  pages/
    index.astro
    about.astro
    projects.astro
    calculator.astro
    publications.astro
    contact.astro
    privacy.astro
    terms.astro
    404.astro
  styles/
    tokens.css   → CSS variables + keyframes + utility classes
public/
  fonts/         → self-hosted WOFF2
  images/        → all photos
  icons/         → SVG icons
docs/            → all session docs
```

---

## 2. NAMING

- Components: `PascalCase.astro` (Hero.astro, ProjectCard.astro)
- Pages: `lowercase.astro` (index.astro, about.astro)
- Lib: `lowercase.ts` (schema.ts, seo.ts)
- CSS classes: `kebab-case` (`.bg-hero-gradient`, `.animate-float-soft`)
- Variables: `camelCase` (siteUrl, brandName)
- Constants: `UPPER_SNAKE` (DEFAULT_OG_IMAGE)

---

## 3. CANONICAL COMPONENT TEMPLATE

Every `.astro` component MUST follow this structure:

```astro
---
/**
 * ComponentName
 * One-line description.
 */

// === IMPORTS ===
import site from '~/content/site.json';
import Container from '~/components/ui/Container.astro';
// (other imports — site data first, then primitives, then atoms)

// === TYPES ===
interface Props {
  variant?: 'a' | 'b';
  class?: string;
}

// === PROPS ===
const { variant = 'a', class: extraClass = '' } = Astro.props;

// === SITE DATA ===
const s: any = site;
const heading = s.section?.heading || 'Fallback';

// === CLASS MAPS (variants) ===
const variantMap: Record<string, string> = {
  a: 'bg-white text-ink',
  b: 'bg-black text-white',
};

// === CLASS STRINGS (pre-computed) ===
const cBase = 'relative w-full';
const cVariant = variantMap[variant];
const cFinal = cBase + ' ' + cVariant + ' ' + extraClass;
---

<section class={cFinal}>
  <Container>
    {/* content */}
  </Container>
</section>
```

---

## 4. SIX HARD RULES

1. **Section dividers** — every frontmatter has `// === NAME ===` headers in this order: IMPORTS → TYPES → PROPS → SITE DATA → CLASS MAPS → CLASS STRINGS → STRUCTURED DATA (if any).

2. **Pre-compute classes** — every Tailwind class string lives in a JS variable in frontmatter. HTML uses only `class={cVarName}`. Defeats GitHub web editor smart-quote bug.

3. **Quote discipline** — single quotes in JS/TS (`'foo'`). Double quotes in HTML attrs (`class="foo"`). Never mix.

4. **No template literals** — use `+` concatenation, not backticks. Backticks get mangled.

5. **Optional chaining for site data** — always `s.section?.field || 'fallback'`. Never assume data exists.

6. **Variants via Record** — multi-style components use `Record<string, string>` keyed by variant name, never inline conditionals.

---

## 5. IMPORT ORDER

```ts
// 1. Astro built-ins
import { Image } from 'astro:assets';

// 2. Site data
import site from '~/content/site.json';
import pages from '~/content/pages.json';

// 3. Layouts
import Layout from '~/layouts/Layout.astro';

// 4. Common components (Nav, Footer)
import Nav from '~/components/common/Nav.astro';

// 5. Section components
import Hero from '~/components/sections/Hero.astro';

// 6. UI primitives
import Button from '~/components/ui/Button.astro';
import Container from '~/components/ui/Container.astro';

// 7. Library helpers
import { cn } from '~/lib/cn';

// 8. React components (for shadcn/Aceternity, if needed)
import { ThreeDCard } from '~/components/ui/three-d-card.tsx';
```

---

## 6. COLOR USAGE

**Always use named tokens.** Never hex codes in components.

```
✅ bg-orange  text-ink-muted  border-edge
❌ bg-[#FF6B1A]  text-gray-600  border-gray-200
```

Tokens defined in `tailwind.config.mjs` reading from `tokens.css` CSS variables.

---

## 7. SPACING USAGE

**Always use 8px grid scale.** Never random values.

```
✅ p-4  p-6  p-8  py-16  gap-6
❌ p-5  p-7  py-9  gap-5
```

---

## 8. ANIMATION USAGE

**Three layers, three patterns:**

```
LAYER 1 — Ambient (CSS keyframes from tokens.css):
  class="animate-float-soft"
  class="animate-sparkle"
  class="animate-drift-slow"

LAYER 2 — Hover (Tailwind utilities):
  class="hover:-translate-y-1 hover:shadow-2xl active:scale-95 transition-all duration-300"

LAYER 3 — Scroll reveal (CSS class + Intersection Observer in Layout):
  class="reveal"          (single element fade-up)
  class="reveal-stagger"  (children stagger automatically)
```

**For premium spring physics (cards, modals)** — use Framer Motion in React island components only. Spec: `{ type: "spring", stiffness: 300, damping: 30 }`.

---

## 9. COMPONENT CHECKLIST (pass/fail before commit)

Every component must pass ALL 15:

| # | Check |
|---|---|
| 1 | Section dividers in correct order (IMPORTS → TYPES → PROPS → ...) |
| 2 | Spacing follows 8px grid only |
| 3 | Colors are named tokens only (no hex, no random Tailwind shades) |
| 4 | Headings via Heading primitive (not raw `<h2>`) |
| 5 | Body text via Text primitive (not raw `<p>` for content) |
| 6 | Buttons via Button primitive |
| 7 | Section wrapper via Section primitive |
| 8 | Card pattern: `bg-white rounded-2xl border border-edge p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300` |
| 9 | Image dimensions explicit (`width={X} height={Y}`) |
| 10 | Icon size matches role: 6 (cards), 7 (features), 5 (inline) |
| 11 | Hover transition `duration-300`, active state `scale-95` |
| 12 | Shadow scale: `shadow-sm` rest → `shadow-2xl` hover only |
| 13 | Eyebrow format: `inline-block uppercase tracking-wider text-xs font-semibold` |
| 14 | Focus ring: `focus-visible:outline-2 focus-visible:outline-orange focus-visible:outline-offset-2` |
| 15 | All visible text + image paths come from `site.json` (zero hardcoded) |

If ANY fails → reject + rewrite. No exceptions.

---

## 10. ANTI-PATTERNS (never do)

```
❌ Hardcoded text in component   → put in site.json
❌ Inline styles (style="...")    → use Tailwind classes
❌ Random rounded values (rounded-3xl) → stick to rounded-lg, rounded-xl, rounded-2xl, rounded-full
❌ Multi-color gradients on cards → flat surfaces with shadow depth
❌ Generic Lucide icon dump        → custom SVG icons in branded containers OR Lucide with consistent stroke-width=2
❌ "Click here" / "Learn more"     → specific CTAs ("View Portfolio", "Book Free Assessment")
❌ Centered grid stacks 3 in a row → mix layouts: asymmetric, full-bleed, magazine
❌ Stock photo "AI portfolio" feel  → specific framing, real-feeling people
❌ Hover-state without active-state → always pair (haptic feedback)
❌ Different shadow values per component → one rest shadow, one hover shadow, period
```

---

## 11. CONTENT vs PRESENTATION SEPARATION

**Components are templates.** They define structure + style only.
**site.json is data.** It holds every word + image path + link.
**pages.json is config.** It picks which sections appear on which page.

Result: change site.json → entire site rebrands instantly. Change pages.json → page composition changes. Components never need editing for content swaps.

---

## 12. DOCUMENTATION OBLIGATIONS

After every phase:
- Markdown doc in `/docs/` capturing: what was built, why, decisions, errors hit + fixes
- `WHERE_WE_ARE.md` updated at end of each session (current state for token-limit recovery)
- Inline JSDoc comment at top of every component (one-line description)

---

## 13. END OF DOC

Doc 2 of 6 locked. Every file from now on follows this.

Next: `02_ASSET_INVENTORY.md`.

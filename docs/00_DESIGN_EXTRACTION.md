# Design Extraction — Solaroofing Prototype
## Session 1, Doc 1 of 6

*Extracted from 52 Figma PNG exports.*
*Target: 100% pixel-perfect replica of Solaroofing site.*
*Date: May 2026.*

---

## 1. PALETTE (eyedropped from PNGs — locked)

```
PRIMARY DARK
  Black            #0A0A0A    rgb(10 10 10)        → main bg, dark sections
  Black soft       #1A1A1A    rgb(26 26 26)        → cards on black, secondary surfaces
  Black border     #2A2A2A    rgb(42 42 42)        → 1px borders on dark cards

ACCENT ORANGE (the brand)
  Orange           #FF6B1A    rgb(255 107 26)      → CTAs, highlights, hover states
  Orange hover     #E85A0E    rgb(232 90 14)       → button hover
  Orange light     #FFE4D1    rgb(255 228 209)     → soft fills, badge bg

LIGHT SURFACES
  White            #FFFFFF    rgb(255 255 255)     → main light bg
  Cream            #F8F5F0    rgb(248 245 240)     → alt sections (warm white)
  Gray subtle     #F1F1F0    rgb(241 241 240)     → very subtle alt bg

INK (text)
  Ink              #0F0F0F    rgb(15 15 15)        → primary text on light
  Ink muted        #5A5A5A    rgb(90 90 90)        → secondary text
  Ink light        #9A9A9A    rgb(154 154 154)     → captions, muted

WHITE TEXT (on dark)
  White            #FFFFFF    on black sections
  White muted      #B8B8B8    rgb(184 184 184)     → secondary text on dark
  White subtle     #6B6B6B    rgb(107 107 107)     → captions on dark

EDGE
  Edge dark        #2A2A2A    → borders on dark cards
  Edge light       #E5E5E5    → borders on light cards
```

**Strategic gradient palette:**
- Hero bg: solid black with subtle radial orange glow at top-right
- Final CTA: solid bright orange (no gradient, flat fill — Solaroofing signature)
- Hero bg in About page: subtle dark→darker fade with orange accent overlay
- No multi-stop gradients on cards (Solaroofing uses flat surfaces with shadow depth)

**Strategic blur (rare):**
- Floating cards over hero image: `backdrop-blur-md bg-black/50`
- Modal overlays only

---

## 2. TYPOGRAPHY (identified from PNGs)

```
DISPLAY — Plus Jakarta Sans (or close: Manrope, Inter)
  Weights: 600, 700, 800
  Use: All headings, CTAs, navigation, body emphasis

EDITORIAL ACCENT — Caveat or Allura (cursive handwritten)
  Weight: 400, 600
  Use: ONLY on hero key word ("Solutions", "Estimate Your Savings")
  Free Google Fonts options: Caveat, Allura, Sacramento, Petit Formal Script

BODY — Plus Jakarta Sans (same as display) at 400/500
  Use: paragraphs, descriptions, captions

NUMBERS (stats) — Plus Jakarta Sans 800 (no special serif numerals visible in Solaroofing)
  Use: 30+, 500+, 73K, etc.
```

**Type scale (estimated from PNGs at typical screen):**
```
Hero h1     — text-5xl md:text-6xl lg:text-7xl   (~64-96px)
Section h2  — text-3xl md:text-4xl lg:text-5xl   (~36-48px)
Card h3     — text-xl md:text-2xl                (~20-24px)
Body large  — text-lg md:text-xl                 (~18-20px)
Body base   — text-base                          (~16px)
Caption     — text-sm                            (~14px)
Small       — text-xs                            (~12px)

Stats display — text-5xl md:text-7xl 800 weight
Cursive accent — text-5xl md:text-6xl Caveat italic
```

**Loading:** Google Fonts CDN initially, self-host as WOFF2 in `/public/fonts/` for production polish.

---

## 3. SPACING — Strict 8px Grid (locked)

Solaroofing PNGs show consistent multiples of 4 and 8:

```
2     = 8px       — tight UI gaps
4     = 16px      — card internal padding small, button padding
6     = 24px      — card padding standard, between related items
8     = 32px      — card padding large, section header → content
12    = 48px      — small section vertical
16    = 64px      — between sections sm
20    = 80px      — section vertical md (DEFAULT)
24    = 96px      — section vertical lg
32    = 128px     — major section dividers xl
```

Section spacing variants:
- `sm`: py-12 md:py-16
- `md`: py-16 md:py-20
- `lg`: py-20 md:py-24 lg:py-28 (DEFAULT for content sections)
- `xl`: py-24 md:py-32 (CTA sections, major dividers)

---

## 4. COMPONENT PATTERNS (extracted from PNGs)

### 4.1 Cards (3 variants observed)

**Variant A — Light card on light bg** (Why Choose, Services):
- White bg, `rounded-2xl`, 1px gray border `border-edge`, `shadow-sm`
- Hover: `shadow-xl translate-y-[-4px]` + border `border-orange/30`
- Internal padding: `p-8` (32px)

**Variant B — Dark card on dark bg** (Process steps, Testimonials):
- `bg-[#1A1A1A]` (soft black), `rounded-2xl`, 1px border `border-[#2A2A2A]`, no shadow on dark
- Hover: border lights up to `border-orange/40`, slight lift
- Internal padding: `p-8`

**Variant C — Orange filled card** (Final CTA):
- Solid orange bg `#FF6B1A`, no border, no shadow
- Used only for full-bleed CTA sections, not standalone cards

### 4.2 Buttons (3 variants)

**Primary Orange** (most CTAs):
- `bg-orange text-white px-8 py-4 rounded-full font-semibold`
- Hover: scale-105 + brightness-110
- Active: scale-95 + brightness-90
- With trailing arrow: `→`

**Secondary Outline** (View Portfolio, etc.):
- `border-2 border-white text-white px-8 py-4 rounded-full font-semibold`
- (or `border-2 border-black text-black` on light bg)
- Hover: bg fills to white (or black)

**Black filled on Orange bg** (in Final CTA section):
- `bg-black text-white px-8 py-4 rounded-full`
- Used inside the orange CTA section for contrast

### 4.3 Headings + Eyebrow Pattern

Every section has consistent structure:
- (Optional) eyebrow pill: `inline-block text-xs uppercase tracking-wider px-3 py-1 rounded-full` — orange-light bg, orange text
- H2 heading: `text-4xl md:text-5xl font-bold` — black on light, white on dark
- (Optional) subheading: `text-lg md:text-xl text-ink-muted` — max width 2xl, mb-12

Hero accent treatment: cursive overlay word with handwritten font, slightly rotated (~3°).

### 4.4 Stats Pattern

Numbers + small label below:
- Number: `text-5xl md:text-7xl font-extrabold`
- Label: `text-sm uppercase tracking-wider text-ink-muted`
- Often grouped in 2-col or 4-col grid
- Accompanied by an "icon dot" (small colored circle)

### 4.5 Trust Strip Pattern

Either at top or below hero:
- Light cream bg row, full width
- Logos in horizontal line, evenly spaced
- Sometimes with small tagline: "Trusted by [number] companies"

### 4.6 Image Treatment

- All images `rounded-2xl` with subtle `shadow-md` to `shadow-2xl`
- Aspect ratios observed: 16:9, 4:3, 1:1 (square portraits), 3:4 (vertical photos)
- Some images have orange dot decoration overlapping (corner accent)

### 4.7 Decorative Elements

- Solaroofing watermark (large light-gray "OUR STORY" text behind sections, low opacity)
- Cursive overlays on key words
- Small orange dots used between text spans, between stats
- Sparkle/star SVG accents near hero
- Decorative dot patterns in background corners (subtle)
- Vertical "WORKING SINCE 1994" small caps text running edge of hero image

---

## 5. LAYOUT PATTERNS (per page)

### HOME page sequence
1. **Top Promo Bar** (orange strip, optional) — "Solaroofing is now accepting new projects across UAE. Book Your Free Assessment →"
2. **Nav** — black bg, logo left, links center, orange "Consultation" CTA right
3. **Hero** (black, 80vh) — left text + right solar panel image, badges in image area
4. **Trust Logos Strip** — cream bg, 5-6 client logos
5. **Why Choose Us** (white, accordion-style with image collage right)
6. **From Enquiry to Power-On** (black, 4 numbered steps in 2x2 grid)
7. **Our Comprehensive Services** (white, 2 large service cards with images)
8. **Testimonials** (black, 3 cards horizontal)
9. **Stats Bar** (gray subtle, full-width with bullet points: "500+ projects · 98% satisfaction · AED 0 downtime")
10. **15+ Years of Solar Excellence** (white, desk illustration left + 4 feature pills right)
11. **Final CTA** (orange full-bleed, big headline + 2 buttons + 3 trust pills)
12. **Footer** (black)

### ABOUT page sequence
1. Nav
2. Hero (dark with text overlay): "Powering Dubai's Rooftops Since 1994"
3. **Our Story** (cream): "From Dubai's Gold Souk To The UAE's Rooftops" + timeline cards (1975 / 1994 / 2010) with orange dot indicator + image with badge overlay
4. **Our Promise** (black with image): "A Family Business Built On Three Generations Of Trust" + 4 promise pills + image left
5. **Timeline / Legacy Section** (white): "A Legacy Of Innovation Since 1975" — horizontal timeline (1975 / 1994 / 2000 / 2019 / 2025) with orange dot connectors + image card
6. **Team / Values** OR **Modest Group Family** (white): "The Modest Group Family" + 5-card grid of sub-brands
7. **Final CTA** (orange): "Ready To Work With Us?"
8. Footer

### PROJECTS page sequence
1. Nav
2. **Hero** (dark): "Our Featured Projects" with stats badges (500+ Projects, 25+ Industries, UAE · GCC)
3. **Client Strip** (cream): logos
4. **Filter Bar** (white): All Projects / Solar PV / Waterproofing / Industrial / Commercial / Government + Sort dropdown
5. **Project Grid** (cream): 12+ project cards (3-col), each with image + category tag + name + size
6. **Featured Case Study** (black): Hormann Middle East — Complete Solar PV Installation, big image left + content right (3 paragraph case study)
7. **Stats Banner** (cream): 15+ Years / 200+ Employees / 15,000+ Installations / 98% Satisfaction
8. **CTA Section** (orange): "Have A Project In Mind?"
9. Footer

### CALCULATOR page sequence
1. Nav
2. **Hero** (dark with cursive accent): "Solar Calculator For The UAE — *Estimate Your Savings*"
3. **Calculator Section** (cream): white card with form (3 inputs) + Calculate button + 4-grid result panel + grid dependency reduction bar
4. **How The Calculator Works** (white): 3-step explanation with big "01 02 03" numbers in orange + descriptions
5. **DEWA Info Strip** (black): "Powered by DEWA's Shams Dubai Program" + 3 pill badges (Net Metering Billing / Excess Energy Credit / Zero Carbon Certification)
6. **Final CTA** (orange): "Ready For The Real Numbers?"
7. Footer

### PUBLICATIONS page sequence
1. Nav
2. **Hero** (cream + image right): "Read Our Publications" — eyebrow + heading + description + featured article card overlay on image
3. **Filter Bar** (white): All / News / Case Studies / Updates / Events
4. **Featured Article** (white): big image left + UPDATED + CASE STUDY tags + headline + description + Read Full Story link
5. **Article Grid** (cream): 8 article cards in 4-col grid, each with image + tag + date + title + description + Read More
6. **Newsletter Section** (black): "Subscribe To Our Newsletter" + email input + Sign Up button
7. Footer (different — black with simple links)

### CONTACT page sequence
1. Nav
2. **Announcement Bar** (orange thin strip)
3. **Hero** (black with massive "CONTACT" watermark behind): "Feel Free To Get In *Touch*"
4. **Main Section: Two-Panel Diagonal** (cream + white split): LEFT = service toggle (Solar PV / Waterproofing / Both Services) + form (Name, Email, Company, Subject, Message) + Send button. RIGHT = "Contact us" panel with Office address, Phone, Work Hours, Email + 3 small icon row + "QUICK CONTACT WhatsApp Expert" black pill
5. **Map Section** (full-bleed map with floating "Our Office" card overlay)
6. **Project CTA Section** (black): "Have A Project In Mind? Let's Talk" + phone CTA
7. Footer

---

## 6. ANIMATION & MOTION PATTERNS (no prototype shown, agency standards applied)

**Layer 1 — Ambient (always running):**
- Hero image: subtle parallax on scroll (very subtle, ±10px)
- Sparkle SVGs: slow rotate + breath (12s loop)
- Decorative orange dots: pulse-soft (3s loop)

**Layer 2 — Hover interactions:**
- Cards: `-translate-y-1 + shadow-2xl + border-orange/40` transition 300ms
- Buttons: `scale-105 brightness-110` transition 150ms
- Active state: `scale-95 brightness-90`
- Image hover: `scale-105 brightness-105` transition 500ms
- Link hover: orange underline grows from left, 200ms

**Layer 3 — Scroll-triggered (Intersection Observer):**
- Section reveal: opacity 0 → 1 + translateY(20px → 0) over 600ms
- Card grids: stagger 80ms between siblings
- Stat numbers: count-up animation (0 → value over 1.2s ease-out)
- Hero text: stagger-in on page load (eyebrow → headline → description → CTAs, 80ms apart)
- Toppers/Projects grid: cascade reveal with 50ms delay between cards

**Spring physics for premium feel:**
- Use Framer Motion (React Islands) for: card hover lift, modal entries, hero sequence
- Spec: `type: "spring", stiffness: 300, damping: 30`

**No-go animations:**
- ❌ Parallax scrolling (motion-sickness)
- ❌ Auto-playing carousels
- ❌ Cursor-following blobs
- ❌ Heavy 3D effects
- ❌ Pop-up modals on entry

**Reduced motion:**
- All animations disabled if `prefers-reduced-motion: reduce`

---

## 7. NAVIGATION STRUCTURE

```
Logo "Solaroofing"
  ├── Home
  ├── About Us
  ├── Projects
  ├── Solar Calculator
  ├── FAQ (some pages show this, others not)
  └── Contact
                                          [Consultation] CTA pill (orange)
```

**No mega-menu observed** — flat top-level nav. Underline indicator on active page (orange).

**Mobile:** Hamburger toggle, drawer slides from right.

---

## 8. FOOTER STRUCTURE

Multi-column black footer with:
- Brand block (logo + tagline + ISO badges)
- Solutions column (Services / How It Works / Portfolio / About)
- Connect column (LinkedIn / Instagram / Facebook / YouTube)
- Newsletter column (email input + sign up button)
- Bottom bar: copyright + Privacy / Terms links

**Variants observed across pages:**
- Some pages have 3-column footer
- Others have 4-column with Newsletter
- Same brand block + bottom bar across all

---

## 9. RESPONSIVE BEHAVIOR (mobile-first decisions)

Solaroofing PNGs are desktop-only — mobile composition not provided. **Decision per user instruction:** desktop-first build (because Figma is desktop), mobile pass after each section to ensure composition translates.

**Mobile breakpoints:**
- `sm`: 640px (tablet portrait)
- `md`: 768px (tablet landscape) — most layout changes here
- `lg`: 1024px (desktop)
- `xl`: 1280px (large desktop) — Figma reference size

**Mobile composition rules:**
- All multi-column grids stack to 1 column on mobile (or 2-col for cards)
- Hero stacks: text on top, image below
- Floating badge cards reposition or hide on mobile
- Asymmetric splits stack vertically
- Calculator: input form full width on mobile
- Filter bars: horizontal scroll on mobile, hide overflow

---

## 10. DECISIONS NEEDED FROM USER (will surface in next docs)

1. **Cursive font choice:** Caveat (most common, clean) vs Allura (more elegant) vs Sacramento (handwritten) — need final pick
2. **Photo strategy:** AI-generate via Flux/Midjourney + Unsplash fallback + crop from Figma PNGs where possible (per pre-decision: option d)
3. **Calculator math formula:** What ratio of bill/roof area to savings? Need to invent realistic numbers since Solaroofing's exact formula is proprietary

These get resolved in **Asset Inventory doc (02)** and **CMS Schema doc (03)**.

---

## 11. END OF DOC

Doc 1 of 6 complete. Locked unless user pushes back.

Next docs in Session 1:
- 01_CODEBASE_RULES.md (canonical pattern)
- 02_ASSET_INVENTORY.md (every photo/icon/video + acquisition plan)
- 03_CMS_SCHEMA.md (site.json + tokens.css + pages.json structure)
- 04_COMPONENT_LIBRARY_MAPPING.md (which library for which section)
- 05_FOLDER_STRUCTURE.md (final repo layout)

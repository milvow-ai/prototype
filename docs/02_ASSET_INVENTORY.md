# Asset Inventory — Solaroofing Prototype
## Session 1, Doc 3 of 6

*Every photo, icon, logo, video needed. Strategy per asset.*

---

## 1. ACQUISITION STRATEGY (locked)

```
Strategy d (your decision): mix
  → Crop from Figma PNGs where possible (free, exact match)
  → AI generate via Flux/Midjourney/Leonardo for missing photos
  → Unsplash placeholders for generic shots
  → Real client assets when we onboard real clients
```

---

## 2. ASSET FOLDER STRUCTURE

```
public/
  fonts/                    → Plus Jakarta Sans + cursive WOFF2
  images/
    hero/                   → hero photos per page
    projects/               → 12+ project thumbnails + 1 featured
    team/                   → founder + family business photos
    services/               → solar PV + waterproofing
    testimonials/           → 3 customer photos
    timeline/               → about page timeline image
    misc/                   → background images, illustrations
  icons/
    logo.svg                → Solaroofing wordmark
    favicon.svg             → favicon system (16, 32, 180, 512)
    social/                 → instagram, facebook, linkedin, youtube SVG
    nav/                    → menu icons (hamburger, close, chevron)
    feature/                → checkmark, arrow-right, etc.
    badges/                 → ISO 9001, DEWA, etc.
  videos/                   → (if any — about page may have video)
  og/                       → Open Graph images per page
```

---

## 3. PHOTO INVENTORY PER PAGE

### HOME (12 photos)
| # | Slot | Description | Source |
|---|---|---|---|
| 1 | Hero right | Solar panel close-up, dark | crop from Figma + AI gen variant |
| 2 | Why Choose collage 1 | Roof installer at work | AI gen |
| 3 | Why Choose collage 2 | Solar panel array | AI gen |
| 4 | Service card 1 | Metal roof tiles (red) | crop from Figma |
| 5 | Service card 2 | Solar PV installation | crop from Figma |
| 6 | Testimonial 1 | Headshot M (Indian business) | AI gen / pravatar |
| 7 | Testimonial 2 | Headshot M (Indian business) | AI gen / pravatar |
| 8 | Testimonial 3 | Headshot F (Indian business) | AI gen / pravatar |
| 9 | 15 years section | Computer/desk illustration | crop from Figma OR Unsplash |
| 10-12 | Decorative | Background patterns | SVG, no photo |

### ABOUT (8 photos)
| # | Slot | Description | Source |
|---|---|---|---|
| 1 | Hero bg | Dubai rooftop wide shot | AI gen / Unsplash |
| 2 | Story timeline | Vintage Dubai 1975 photo | Unsplash + AI tinting |
| 3 | Promise section | Solar farm aerial | crop from Figma |
| 4 | Legacy section | Old building/heritage | crop from Figma |
| 5 | Group family card 1-5 | Sub-brand logos | SVG (5 placeholder logos) |

### PROJECTS (15 photos)
| # | Slot | Description | Source |
|---|---|---|---|
| 1 | Hero bg | Aerial industrial roof | crop from Figma |
| 2-13 | 12 project cards | Various: factory roof, solar farm, warehouse, golf club, police HQ, etc. | crop from Figma each + AI gen fallback |
| 14 | Featured case study | Hormann ME warehouse | crop from Figma |
| 15 | Decorative | bg pattern | SVG |

### CALCULATOR (3 photos)
| # | Slot | Description | Source |
|---|---|---|---|
| 1 | Hero bg | Solar panels at sunset | AI gen / Unsplash |
| 2 | Stats illustrations | Numbered icons | SVG |
| 3 | DEWA badge | Government partnership graphic | SVG |

### PUBLICATIONS (10 photos)
| # | Slot | Description | Source |
|---|---|---|---|
| 1 | Hero bg | Solar panels with sunset sky | crop from Figma |
| 2 | Featured article | Industrial roof aerial | crop from Figma |
| 3-10 | 8 article cards | Various: news, case study, events | AI gen / Unsplash mix |

### CONTACT (4 photos)
| # | Slot | Description | Source |
|---|---|---|---|
| 1 | Hero bg | Subtle pattern OR none | SVG only |
| 2 | Map iframe | Google Maps embed | iframe (no photo) |
| 3 | Office card thumbnail | Building exterior | AI gen |
| 4 | CTA section | Solar/sustainability theme | AI gen |

**TOTAL UNIQUE PHOTOS: ~52**

---

## 4. SVG ICON INVENTORY

### Logo (1)
- `logo.svg` — Solaroofing wordmark white-on-transparent + black variant

### Nav (3)
- `menu.svg` (hamburger)
- `close.svg`
- `chevron-down.svg`

### Social (5)
- `instagram.svg`, `facebook.svg`, `linkedin.svg`, `youtube.svg`, `twitter.svg`

### Action (8)
- `arrow-right.svg`, `arrow-up-right.svg`, `check.svg`, `play.svg`
- `phone.svg`, `mail.svg`, `map-pin.svg`, `clock.svg`

### Feature (10) — for service/why-choose cards
- `shield.svg`, `award.svg`, `clock-history.svg`, `users.svg`, `building.svg`
- `sun.svg`, `bolt.svg`, `leaf.svg`, `trending-up.svg`, `wrench.svg`

### Badges (4)
- `iso-9001.svg`, `dewa-approved.svg`, `tier-1-panels.svg`, `25-year-warranty.svg`

### Decorative (5)
- `sparkle.svg`, `dot-pattern.svg`, `wave-divider.svg`, `corner-accent.svg`, `cursive-underline.svg`

**TOTAL ICONS: ~36** — most from lucide-react (already installed), branded ones custom.

---

## 5. LOGO INVENTORY (client/partner logos)

For Trust Strip + Project page Client Strip:
- 8-10 partner/client company logos (Hormann, Ufas, LG, Quest Vitamins, Printpac, etc.)
- Source: extract from Figma PNG via crop, OR placeholder gray boxes if can't extract cleanly

---

## 6. VIDEO INVENTORY

- About page may show a video player ("Our Journey" section)
- Strategy: YouTube embed with custom thumbnail
- For prototype: use a relevant Solaroofing-style video from YouTube OR placeholder thumbnail

---

## 7. AI GENERATION PROMPTS (ready-to-paste)

For Midjourney / Flux / Leonardo:

```
PROMPT 1 — Solar panel hero:
"Industrial solar panel installation on metal roof, dramatic sunset lighting, dark moody, cinematic, professional photography, hyperrealistic --ar 16:9 --v 6"

PROMPT 2 — Roof installer:
"Indian construction worker installing solar panel on industrial rooftop, action shot, hard hat, professional documentary photography, golden hour --ar 4:3 --v 6"

PROMPT 3 — Headshot M:
"Professional headshot of South Asian businessman, 35-45 years old, business casual, neutral studio background, soft lighting, friendly confident expression --ar 1:1 --v 6"

PROMPT 4 — Headshot F:
"Professional headshot of South Asian businesswoman, 30-45 years old, business attire, neutral studio background, warm professional --ar 1:1 --v 6"

PROMPT 5 — Industrial roof aerial:
"Aerial drone view of large warehouse with solar panel installation across entire roof, geometric pattern, golden hour light, UAE desert background --ar 16:9 --v 6"

PROMPT 6 — Office building:
"Modern industrial building exterior in Dubai/UAE, glass and metal facade, clean professional, daytime --ar 4:3 --v 6"
```

Generate 2-3 variants per prompt, pick best.

---

## 8. FAVICON SYSTEM

Required sizes:
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png` (180x180)
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`
- `favicon.svg` (vector)

Generate from logo via realfavicongenerator.net (free).

---

## 9. OG IMAGE STRATEGY

Per-page Open Graph images:
- `og-default.jpg` (1200x630) — homepage default
- `og-about.jpg`
- `og-projects.jpg`
- `og-calculator.jpg`
- `og-publications.jpg`
- `og-contact.jpg`

Strategy: design template in Figma OR use https://og.guru.lol or similar OG image generator. Each shows brand mark + page-specific tagline.

---

## 10. ASSET PROCESSING REQUIREMENTS

Every photo before going to /public/images/:
- Resize to max-width 1920px (hero), 1200px (cards), 800px (avatars)
- Convert to WebP via https://squoosh.app or `sharp` CLI
- Compress to <200KB ideally
- Provide both .webp (primary) + .jpg (fallback) when needed
- All Astro Image component usages get this automatically

---

## 11. ASSET ACQUISITION ORDER (Session 3 task — not now)

1. Logo + favicon system (1 hour)
2. AI-generate all photos (2-3 hours batch)
3. Crop project thumbnails from Figma PNGs (1 hour)
4. Optimize all images via Squoosh (1 hour)
5. Drop into /public/images/ folders
6. Update site.json with paths
7. OG images last (after pages are built)

---

## 12. PLACEHOLDER STRATEGY (during BUILD, before real assets)

While Session 2 (Built) runs and we don't have real photos yet:
- Use https://picsum.photos/seed/[seed]/[w]/[h] with stable seeds
- Use https://i.pravatar.cc/[size]?img=[N] for headshots
- For logos: SVG text placeholders ("Logo 1", "Logo 2", etc.)
- All paths in site.json are placeholders ready to swap in Session 3

---

## 13. END OF DOC

Doc 3 of 6 locked.

Next: `03_CMS_SCHEMA.md` (site.json + pages.json + tokens.css structure).

# CMS Schema — Solaroofing Prototype
## Session 1, Doc 4 of 6

*Three files = the entire CMS. Edit these, site rebrands.*

---

## 1. THREE-FILE SYSTEM

```
src/content/site.json    → ALL content (text, image paths, links)
src/content/pages.json   → which sections per page + variants
src/styles/tokens.css    → colors + spacing + fonts
```

Plus `tailwind.config.mjs` reads tokens.css. No hardcoded values anywhere else.

---

## 2. site.json STRUCTURE

```json
{
  "schemaReady": true,
  "meta": {
    "siteUrl": "https://prototype-milvow.vercel.app",
    "lang": "en-AE",
    "city": "Dubai",
    "area": "Jebel Ali Free Zone",
    "geoKeyword": "solar roof waterproofing Dubai UAE",
    "description": "UAE's most trusted commercial roofing specialists since 1994. Waterproofing, solar PV, complete roof restoration.",
    "ogImage": "/og/og-default.jpg",
    "twitter": "@solaroofing",
    "ga4Id": "",
    "gscToken": ""
  },

  "brand": {
    "name": "Solaroofing",
    "tagline": "Powering Dubai's Rooftops Since 1994",
    "logo": "/icons/logo.svg",
    "founded": "1994",
    "social": [
      { "platform": "instagram", "url": "https://instagram.com/solaroofing" },
      { "platform": "facebook", "url": "https://facebook.com/solaroofing" },
      { "platform": "linkedin", "url": "https://linkedin.com/company/solaroofing" },
      { "platform": "youtube", "url": "https://youtube.com/@solaroofing" }
    ]
  },

  "nav": {
    "items": [
      { "label": "Home", "href": "/" },
      { "label": "About Us", "href": "/about" },
      { "label": "Projects", "href": "/projects" },
      { "label": "Solar calculator", "href": "/calculator" },
      { "label": "FAQ", "href": "/#faq" },
      { "label": "Contact", "href": "/contact" }
    ],
    "cta": { "label": "Consultation", "href": "/contact" }
  },

  "announcementBar": {
    "enabled": true,
    "text": "Solaroofing is now accepting new projects across UAE.",
    "ctaLabel": "Book Your Free Assessment",
    "ctaHref": "/contact"
  },

  "hero": {
    "trustBadge": "Trusted by 50+ UAE Enterprises",
    "trustRating": "4.7",
    "headlineLine1": "Trusted Roof",
    "headlineLine2": "Waterproofing",
    "headlineLine3": "& Solar Energy",
    "headlineCursive": "Solutions",
    "description": "UAE's most trusted commercial rooftop specialists since 1994 — waterproofing, solar PV, and complete roof restoration for industrial and commercial properties.",
    "primaryCta": { "label": "Explore Services", "href": "#services" },
    "secondaryCta": { "label": "View Portfolio", "href": "/projects" },
    "stats": [
      { "value": "30+", "label": "Years Experience" },
      { "value": "500+", "label": "Projects Delivered" }
    ],
    "smallBadges": ["73K ROI", "ISO Certified", "DEWA Approved"],
    "bottomCaption": "WORKING ON METAL ROOFS IN UAE SINCE 1994",
    "image": "/images/hero/solar-panel-hero.webp",
    "imageAlt": "Solar panel installation on industrial roof"
  },

  "trustLogos": {
    "tagline": "TRUSTED BY UAE'S LEADING ENTERPRISES",
    "items": [
      { "name": "UAS Auto Vehicle Care", "logo": "/images/clients/uas.svg" },
      { "name": "Restoric", "logo": "/images/clients/restoric.svg" },
      { "name": "Redington", "logo": "/images/clients/redington.svg" },
      { "name": "Dubai Police", "logo": "/images/clients/dubai-police.svg" },
      { "name": "LG", "logo": "/images/clients/lg.svg" }
    ]
  },

  "whyChoose": {
    "eyebrow": "WHY SOLAROOFING",
    "heading": "Why 50+ Companies Trust Solaroofing for Their Rooftops",
    "items": [
      { "title": "Massive Cost Savings", "description": "...", "icon": "trending-up" },
      { "title": "Energy Independence", "description": "...", "icon": "bolt" },
      { "title": "Environmental Impact", "description": "...", "icon": "leaf" },
      { "title": "Increased Property Value", "description": "...", "icon": "building" },
      { "title": "Reliable Technology", "description": "...", "icon": "shield" }
    ],
    "image": "/images/services/why-choose-collage.webp",
    "imageBadge": "15+ Years In Solar"
  },

  "process": {
    "eyebrow": "THE PROCESS",
    "heading": "From Enquiry To Power-On In 4 Simple Steps",
    "subheading": "Whether you manage a warehouse, factory, or commercial complex — we handle everything A to Z.",
    "steps": [
      { "number": "01", "title": "Initial Consultation", "description": "Understanding your facility's energy footprint and rooftop condition to determine feasibility." },
      { "number": "02", "title": "Detailed Survey & Design", "description": "Our engineers conduct a physical rooftop audit and create a bespoke PV layout using 3D modeling." },
      { "number": "03", "title": "Installation & Commissioning", "description": "Certified technicians execute the project following ISO standards with zero downtime to your operations." },
      { "number": "04", "title": "Handover & Savings", "description": "System activation and DEWA connection. Start monitoring your savings via our real-time smart dashboard." }
    ]
  },

  "services": {
    "eyebrow": "SERVICES",
    "heading": "Our Comprehensive Roofing Services",
    "items": [
      {
        "name": "Metal Roof Waterproofing",
        "image": "/images/services/metal-roof.webp",
        "features": ["10-Year Warranty", "Heat Reflective", "Anti-Corrosive", "Rapid Application"],
        "priceFrom": "From AED 35/m²",
        "ctaLabel": "Get Quote",
        "ctaHref": "/contact?service=metal-roof"
      },
      {
        "name": "Solar PV Installation",
        "image": "/images/services/solar-pv.webp",
        "features": ["Tier-1 Panels", "DEWA Approved", "Smart Monitoring", "25-Year Life"],
        "priceFrom": "From AED 3.2/W",
        "ctaLabel": "Get Quote",
        "ctaHref": "/contact?service=solar-pv"
      }
    ]
  },

  "testimonials": {
    "items": [
      { "name": "Ahmed Al Maktoum", "role": "Operations Director", "quote": "...", "image": "/images/testimonials/ahmed.webp", "rating": 5 },
      { "name": "Rajesh Kumar", "role": "Facility Manager", "quote": "...", "image": "/images/testimonials/rajesh.webp", "rating": 5 },
      { "name": "Sarah Jenkins", "role": "Sustainability Lead", "quote": "...", "image": "/images/testimonials/sarah.webp", "rating": 5 }
    ]
  },

  "stats": {
    "items": [
      { "value": "500+", "label": "Projects" },
      { "value": "98%", "label": "Satisfaction" },
      { "value": "AED 0", "label": "Downtime Claims" }
    ]
  },

  "yearsExcellence": {
    "heading": "15+ Years Of Solar Excellence",
    "features": ["Dubai Pioneers", "Certified Engineers", "Lifetime Support", "Award Winning"],
    "image": "/images/misc/desk-illustration.webp"
  },

  "finalCta": {
    "heading": "Ready To Start Saving With Solar?",
    "primaryCta": { "label": "Book Free Assessment", "href": "/contact" },
    "secondaryCta": { "label": "Call Us Now", "href": "tel:+97140000000" },
    "trustPills": ["No commitment", "DEWA-approved process", "ISO certified"]
  },

  "about": {
    "hero": {
      "eyebrow": "OUR STORY",
      "heading": "Powering Dubai's Rooftops Since 1994",
      "description": "Solaroofing is a division of Modest Company LLC — a pioneering family-owned UAE business founded in 1975, dedicated to engineering sustainable futures for heavy-duty industrial prowess.",
      "backgroundImage": "/images/about/dubai-rooftop.webp"
    },
    "story": {
      "eyebrow": "OUR STORY",
      "heading": "From Dubai's Gold Souk To The UAE's Rooftops",
      "milestones": [
        { "year": "1975", "title": "The Foundation", "description": "..." },
        { "year": "1994", "title": "Embracing the Future", "description": "..." },
        { "year": "2010", "title": "Scaling Impact", "description": "..." }
      ],
      "image": "/images/about/vintage-dubai.webp",
      "imageBadge": "50 YEARS"
    },
    "promise": {
      "eyebrow": "OUR PROMISE",
      "heading": "A Family Business Built On Three Generations Of Trust",
      "description": "...",
      "values": ["Client success is our success", "Directors accessible", "Prompt response", "Win-win"],
      "image": "/images/about/solar-farm-aerial.webp"
    },
    "timeline": {
      "eyebrow": "OUR LEGACY",
      "heading": "A Legacy Of Innovation Since 1975",
      "items": [
        { "year": "1975", "event": "Modest Co founded in Dubai Gold Souk" },
        { "year": "1994", "event": "Solaroofing division established" },
        { "year": "2000", "event": "Expanded to regional industrial campus" },
        { "year": "2019", "event": "500th project milestone achieved" },
        { "year": "2025", "event": "Future of Luminous Monolith engineering" }
      ],
      "videoThumbnail": "/images/about/journey-video.webp",
      "videoUrl": "https://youtube.com/embed/..."
    },
    "groupFamily": {
      "heading": "The Modest Group Family",
      "items": [
        { "name": "MODEST", "tagline": "Structural & Prefab Solutions Since 1975" },
        { "name": "PUNCH LTD", "tagline": "Precision Tooling & Manufacturing Excellence" },
        { "name": "3DTIV TECH", "tagline": "Next-Gen Additive Industrial Manufacturing" },
        { "name": "TRAVELER", "tagline": "Logistic Architecture & Mobility Systems" },
        { "name": "BLUE LEAVES", "tagline": "Sustainable Hospitality & Green Initiatives" }
      ]
    }
  },

  "projects": {
    "hero": {
      "eyebrow": "SUCCESS STORIES",
      "heading": "Our Featured Projects",
      "headlineCursive": "UAE & Beyond",
      "description": "Built on experience and attention to detail — ensuring smooth project delivery for 30+ years.",
      "stats": [
        { "value": "500+", "label": "Projects" },
        { "value": "25+", "label": "Industries" },
        { "value": "UAE · GCC", "label": "Coverage" }
      ]
    },
    "filters": ["All Projects", "Solar PV", "Waterproofing", "Industrial", "Commercial", "Government"],
    "items": [
      { "slug": "hormann-me", "name": "Hormann Middle East", "category": "Solar PV", "tagline": "Full rooftop solar energy integration", "size": "1.2 MW", "image": "/images/projects/hormann.webp" },
      { "slug": "quest-vitamins", "name": "Quest Vitamins", "category": "Waterproofing", "tagline": "Waterproofing and insulation upgrade", "size": "4,500 m²", "image": "/images/projects/quest.webp" }
    ],
    "featured": {
      "tag": "FEATURED PROJECT",
      "name": "Hormann Middle East — Complete Solar PV Installation, JAFZA",
      "tags": ["Warehouse Type", "Complete PV System", "100% Clean Energy"],
      "paragraphs": [
        "Solaroofing was commissioned by Hormann Middle East to design and execute a comprehensive solar energy strategy for their regional headquarters in the Jebel Ali Free Zone.",
        "The project involved structural reinforcement of existing roofing assets followed by the installation of a high-yield photovoltaic array capable of offsetting the building's entire peak demand during daylight hours.",
        "Through rigorous engineering and the use of Tier-1 sustainable materials, we delivered a turnkey solution that not only reduces carbon footprint but significantly lowers long-term operational costs."
      ],
      "image": "/images/projects/hormann-featured.webp",
      "ctaLabel": "Read Full Case Study"
    },
    "stats": [
      { "value": "15+", "label": "Years In Business" },
      { "value": "200+", "label": "Employees" },
      { "value": "15,000+", "label": "Installations" },
      { "value": "98%", "label": "Satisfaction" }
    ]
  },

  "calculator": {
    "hero": {
      "freeBadge": "FREE TOOL",
      "heading": "Solar Calculator For The UAE",
      "headlineCursive": "Estimate Your Savings",
      "description": "Quickly discover how much you can save under DEWA's Shams Dubai Program — your expected cost savings, grid dependency reduction, and CO2 impact, all tailored to your property.",
      "backgroundImage": "/images/calculator/solar-sunset.webp"
    },
    "form": {
      "title": "SOLAR CALCULATOR",
      "fields": [
        { "name": "roofArea", "label": "Available roof area (m²)", "placeholder": "e.g. 500", "type": "number" },
        { "name": "monthlyBill", "label": "Average monthly DEWA bill (AED)", "placeholder": "e.g. 15000", "type": "number" },
        { "name": "connectedLoad", "label": "Total connected load (kW)", "placeholder": "e.g. 120", "type": "number" }
      ],
      "submitLabel": "Calculate My Savings"
    },
    "resultsLabels": {
      "annualSavings": "ANNUAL SAVINGS (AED)",
      "systemSize": "SYSTEM SIZE (kW)",
      "co2Reduction": "CO² REDUCTION (TONNES/YR)",
      "paybackPeriod": "PAYBACK PERIOD (YEARS)",
      "gridReduction": "GRID DEPENDENCY REDUCTION"
    },
    "howItWorks": {
      "heading": "How The Calculator Works",
      "steps": [
        { "number": "01", "title": "Input Data", "description": "We take your architectural roof dimensions and DEWA consumption profile to establish a baseline for your energy landscape." },
        { "number": "02", "title": "Shams Analysis", "description": "Our engine calculates the potential energy production based on regional UAE irradiance and the DEWA net-metering framework." },
        { "number": "03", "title": "ROI Projection", "description": "Receive a detailed breakdown of your payback timeline, equipment lifecycle, and long-term industrial profitability." }
      ]
    },
    "dewaInfo": {
      "label": "Powered by DEWA's Shams Dubai Program",
      "pills": ["Net Metering Billing", "Excess Energy Credit", "Zero Carbon Certification"]
    },
    "finalCta": {
      "heading": "Ready For The Real Numbers?",
      "ctaLabel": "Book A Technical Survey",
      "ctaHref": "/contact"
    }
  },

  "publications": {
    "hero": {
      "eyebrow": "PUBLICATIONS",
      "heading": "Read Our Publications",
      "description": "Industry news, project case studies, solar market insights, and updates from the Solaroofing team.",
      "backgroundImage": "/images/publications/sunset-panels.webp",
      "featured": {
        "tag": "Beyond Shams Dubai: How DEWA's D33 Policy Boosts Solar Energy For Dubai's Industries",
        "date": "April 24, 2026",
        "ctaLabel": "Read More",
        "image": "/images/publications/featured-hero.webp"
      }
    },
    "filters": ["All", "News", "Case Studies", "Updates", "Events"],
    "featured": {
      "tags": ["UPDATED", "CASE STUDY"],
      "title": "From Roof Repairs To Renewable: How Solaroofing Helped Printpac Cut Costs & Carbon Footprint",
      "publishDate": "March 15, 2025",
      "description": "Printpac's journey from struggling with recurring roof leakages to becoming a local leader in sustainable manufacturing. Discover how our integrated approach saved them over 40% in energy costs.",
      "image": "/images/publications/printpac-roof.webp",
      "ctaLabel": "Read Full Story",
      "ctaHref": "/publications/printpac-case-study"
    },
    "articles": [
      { "slug": "d33-policy", "tag": "NEWS", "date": "April 2026", "title": "Beyond Shams Dubai: DEWA's D33 Policy and what it Means for You", "excerpt": "Detailed analysis of the new industrial...", "image": "/images/publications/article-1.webp" }
    ],
    "newsletter": {
      "heading": "Subscribe To Our Newsletter",
      "description": "Solar news, policy updates, and project stories — delivered monthly.",
      "ctaLabel": "Sign Up"
    }
  },

  "contact": {
    "hero": {
      "watermarkText": "CONTACT",
      "heading": "Feel Free To Get In",
      "headlineCursive": "Touch"
    },
    "form": {
      "serviceToggle": ["Solar PV", "Waterproofing", "Both Services"],
      "fields": [
        { "name": "name", "label": "NAME", "placeholder": "John Doe" },
        { "name": "email", "label": "EMAIL", "placeholder": "john@example.com" },
        { "name": "company", "label": "COMPANY", "placeholder": "Solar Corp" },
        { "name": "subject", "label": "SUBJECT", "placeholder": "Project Inquiry" },
        { "name": "message", "label": "MESSAGE", "placeholder": "Tell us about your project...", "type": "textarea" }
      ],
      "submitLabel": "SEND MESSAGE"
    },
    "details": {
      "heading": "Contact us",
      "description": "Our team of experts is ready to help you transition to sustainable, high-efficiency roofing solutions.",
      "office": {
        "label": "OFFICE",
        "value": "Jebel Ali Free Zone, Dubai, UAE"
      },
      "phone": {
        "label": "PHONE",
        "value": "+971 4 000 0000"
      },
      "workHours": {
        "label": "WORK HOURS",
        "value": "Mon - Fri: 8am - 6pm"
      },
      "email": {
        "label": "EMAIL",
        "value": "hello@solaroofing.ae"
      },
      "whatsapp": {
        "label": "QUICK CONTACT",
        "value": "WhatsApp Expert",
        "url": "https://wa.me/97140000000"
      }
    },
    "map": {
      "embedUrl": "https://www.google.com/maps/embed?...",
      "officeCard": {
        "title": "Our Office",
        "description": "Headquarters located in the heart of JAFZA, engineering the future of UAE's solar infrastructure.",
        "ctaLabel": "GET DIRECTIONS"
      }
    },
    "projectCta": {
      "heading": "Have A Project In Mind?",
      "headlineCursive": "Let's Talk",
      "ctaLabel": "+971 4 000 0000",
      "ctaHref": "tel:+97140000000"
    }
  },

  "footer": {
    "tagline": "Engineered for sustainability.",
    "copyright": "2025 Solaroofing Industrial. All rights reserved.",
    "columns": [
      {
        "heading": "SOLUTIONS",
        "links": [
          { "label": "Services", "href": "/services" },
          { "label": "How It Works", "href": "/#process" },
          { "label": "Portfolio", "href": "/projects" },
          { "label": "About", "href": "/about" }
        ]
      },
      {
        "heading": "CONNECT",
        "links": [
          { "label": "LinkedIn", "href": "https://linkedin.com/company/solaroofing" },
          { "label": "Instagram", "href": "https://instagram.com/solaroofing" },
          { "label": "Facebook", "href": "https://facebook.com/solaroofing" },
          { "label": "YouTube", "href": "https://youtube.com/@solaroofing" }
        ]
      },
      {
        "heading": "NEWSLETTER",
        "description": "Stay updated with the latest in sustainable roofing and energy saving.",
        "form": { "placeholder": "Your email", "submitLabel": "Join" }
      }
    ],
    "bottom": {
      "links": [
        { "label": "Privacy Policy", "href": "/privacy" },
        { "label": "Terms of Service", "href": "/terms" }
      ]
    }
  },

  "forms": {
    "contact": {
      "endpoint": "https://api.web3forms.com/submit",
      "accessKey": "f02fcead-1712-4c12-864b-891b570e32db",
      "subject": "New enquiry from Solaroofing prototype",
      "successMessage": "Thanks. We will respond within 24 hours."
    }
  }
}
```

---

## 3. pages.json STRUCTURE

```json
{
  "pages": {
    "home": {
      "route": "/",
      "title": "Solaroofing — Trusted Roof Waterproofing & Solar Energy Solutions",
      "description": "...",
      "ogImage": "/og/og-default.jpg",
      "sections": [
        { "component": "AnnouncementBar", "variant": "v1" },
        { "component": "Hero", "variant": "split-image" },
        { "component": "TrustLogos", "variant": "marquee" },
        { "component": "WhyChoose", "variant": "accordion" },
        { "component": "Process", "variant": "dark-numbered" },
        { "component": "Services", "variant": "two-card" },
        { "component": "Testimonials", "variant": "three-card-dark" },
        { "component": "Stats", "variant": "horizontal-bullets" },
        { "component": "YearsExcellence", "variant": "image-pills" },
        { "component": "FinalCta", "variant": "orange-fullbleed" }
      ]
    },
    "about": {
      "route": "/about",
      "title": "About Us — Solaroofing",
      "description": "...",
      "ogImage": "/og/og-about.jpg",
      "sections": [
        { "component": "AboutHero", "variant": "watermark-overlay" },
        { "component": "AboutStory", "variant": "milestones-image" },
        { "component": "AboutPromise", "variant": "split-dark" },
        { "component": "AboutTimeline", "variant": "horizontal-dots" },
        { "component": "AboutGroupFamily", "variant": "five-card-grid" },
        { "component": "FinalCta", "variant": "orange-fullbleed" }
      ]
    }
    // (other pages: projects, calculator, publications, contact, privacy, terms, 404)
  }
}
```

**Key behavior:** Each page file (e.g. `index.astro`) reads its own entry from `pages.json` and renders sections in order based on the `component` + `variant` strings.

---

## 4. tokens.css STRUCTURE

```css
:root {
  /* PALETTE — extracted from Figma PNGs */
  --color-bg-primary: 10 10 10;          /* #0A0A0A */
  --color-bg-soft: 26 26 26;             /* #1A1A1A */
  --color-bg-light: 255 255 255;
  --color-bg-cream: 248 245 240;
  --color-bg-subtle: 241 241 240;

  --color-orange: 255 107 26;            /* #FF6B1A */
  --color-orange-hover: 232 90 14;
  --color-orange-light: 255 228 209;

  --color-ink: 15 15 15;
  --color-ink-muted: 90 90 90;
  --color-ink-light: 154 154 154;

  --color-white: 255 255 255;
  --color-white-muted: 184 184 184;
  --color-white-subtle: 107 107 107;

  --color-edge-dark: 42 42 42;
  --color-edge-light: 229 229 229;

  /* TYPOGRAPHY */
  --font-display: 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-cursive: 'Caveat', cursive;
  --font-body: 'Plus Jakarta Sans', system-ui, sans-serif;

  /* RADII */
  --radius-sm: 0.5rem;       /* 8px */
  --radius-md: 0.75rem;      /* 12px */
  --radius-lg: 1rem;         /* 16px */
  --radius-xl: 1.5rem;       /* 24px */
  --radius-2xl: 2rem;        /* 32px */
  --radius-full: 9999px;

  /* SHADOWS */
  --shadow-sm: 0 1px 3px rgb(0 0 0 / 0.06);
  --shadow-md: 0 4px 12px rgb(0 0 0 / 0.08);
  --shadow-xl: 0 25px 50px -12px rgb(0 0 0 / 0.15);
  --shadow-2xl: 0 35px 60px -15px rgb(0 0 0 / 0.20);
}

/* Keyframes (animate-* utilities used in components) */
@keyframes float-soft { /* ... */ }
@keyframes sparkle { /* ... */ }
@keyframes drift-slow { /* ... */ }

.animate-float-soft { animation: float-soft 6s ease-in-out infinite; }
.animate-sparkle { animation: sparkle 12s ease-in-out infinite; }

/* Reveal classes */
.reveal { /* opacity 0 → 1 on .is-visible */ }
.reveal-stagger > * { /* staggered children */ }

@media (prefers-reduced-motion: reduce) {
  /* disable all */
}
```

---

## 5. tailwind.config.mjs CONNECTION

```js
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'rgb(var(--color-bg-primary) / <alpha-value>)',
          soft: 'rgb(var(--color-bg-soft) / <alpha-value>)',
          light: 'rgb(var(--color-bg-light) / <alpha-value>)',
          cream: 'rgb(var(--color-bg-cream) / <alpha-value>)',
        },
        orange: {
          DEFAULT: 'rgb(var(--color-orange) / <alpha-value>)',
          hover: 'rgb(var(--color-orange-hover) / <alpha-value>)',
          light: 'rgb(var(--color-orange-light) / <alpha-value>)',
        },
        ink: {
          DEFAULT: 'rgb(var(--color-ink) / <alpha-value>)',
          muted: 'rgb(var(--color-ink-muted) / <alpha-value>)',
          light: 'rgb(var(--color-ink-light) / <alpha-value>)',
        },
        edge: {
          dark: 'rgb(var(--color-edge-dark) / <alpha-value>)',
          light: 'rgb(var(--color-edge-light) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        cursive: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
};
```

---

## 6. SWAP-ABILITY PROOF (the CMS in action)

To clone Solaroofing for a different client (e.g. a Saudi roofing company):
1. Edit `tokens.css` — change `--color-orange` to client's brand color
2. Edit `site.json` — change all text, image paths, contact info, links
3. Optionally edit `pages.json` — add/remove sections per page if client wants
4. Add new images to `/public/images/`
5. Deploy → entirely new site, same chassis

Zero component edits needed.

---

## 7. END OF DOC

Doc 4 of 6 locked. site.json is the database. pages.json is the route map. tokens.css is the brand.

Next: `04_COMPONENT_LIBRARY_MAPPING.md` (which library for which section).

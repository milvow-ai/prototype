/**
 * schema.ts — JSON-LD builders for SEO + AI crawlers.
 * Components import these builders, never hand-write JSON-LD.
 */

type Address = {
  street?: string;
  locality?: string;
  region?: string;
  postalCode?: string;
  country?: string;
};

type SiteData = {
  meta: { siteUrl: string; lang?: string; description?: string };
  brand: { name: string; logo?: string; tagline?: string; founded?: string };
  contact?: {
    phone?: string;
    email?: string;
    address?: Address;
    geo?: { lat: number; lon: number };
    openingHours?: string[];
  };
};

// ---------- Organization (sitewide) ----------
export function buildOrganization(site: SiteData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${site.meta.siteUrl}#organization`,
    name: site.brand.name,
    url: site.meta.siteUrl,
    logo: site.brand.logo ? `${site.meta.siteUrl}${site.brand.logo}` : undefined,
    description: site.brand.tagline || site.meta.description,
    foundingDate: site.brand.founded,
  };
}

// ---------- LocalBusiness (Solaroofing is a local UAE company) ----------
export function buildLocalBusiness(site: SiteData) {
  const a = site.contact?.address || {};
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.meta.siteUrl}#localbusiness`,
    name: site.brand.name,
    url: site.meta.siteUrl,
    telephone: site.contact?.phone,
    email: site.contact?.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: a.street,
      addressLocality: a.locality,
      addressRegion: a.region,
      postalCode: a.postalCode,
      addressCountry: a.country || 'AE',
    },
    geo: site.contact?.geo
      ? {
          '@type': 'GeoCoordinates',
          latitude: site.contact.geo.lat,
          longitude: site.contact.geo.lon,
        }
      : undefined,
    openingHours: site.contact?.openingHours,
  };
}

// ---------- WebSite ----------
export function buildWebSite(site: SiteData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.meta.siteUrl}#website`,
    url: site.meta.siteUrl,
    name: site.brand.name,
    inLanguage: site.meta.lang || 'en-AE',
    publisher: { '@id': `${site.meta.siteUrl}#organization` },
  };
}

// ---------- BreadcrumbList ----------
export function buildBreadcrumbList(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ---------- Service ----------
export function buildService(input: {
  name: string;
  description: string;
  providerName: string;
  providerUrl: string;
  areaServed?: string;
  serviceType?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    serviceType: input.serviceType || input.name,
    provider: {
      '@type': 'Organization',
      name: input.providerName,
      url: input.providerUrl,
    },
    areaServed: input.areaServed || 'AE',
  };
}

// ---------- Article (for publications page) ----------
export function buildArticle(input: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  authorName?: string;
  publisherName: string;
  publisherLogo?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.headline,
    description: input.description,
    image: input.image,
    datePublished: input.datePublished,
    author: input.authorName ? { '@type': 'Person', name: input.authorName } : undefined,
    publisher: {
      '@type': 'Organization',
      name: input.publisherName,
      logo: input.publisherLogo ? { '@type': 'ImageObject', url: input.publisherLogo } : undefined,
    },
  };
}

// ---------- Review ----------
export function buildReview(input: {
  authorName: string;
  rating: number;
  reviewBody: string;
  itemReviewedName: string;
  datePublished?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: { '@type': 'Person', name: input.authorName },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: input.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: input.reviewBody,
    itemReviewed: { '@type': 'LocalBusiness', name: input.itemReviewedName },
    datePublished: input.datePublished,
  };
}

// ---------- AggregateRating ----------
export function buildAggregateRating(input: {
  ratingValue: number;
  reviewCount: number;
  itemReviewedName: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: input.ratingValue,
    reviewCount: input.reviewCount,
    bestRating: 5,
    worstRating: 1,
    itemReviewed: { '@type': 'LocalBusiness', name: input.itemReviewedName },
  };
}

// ---------- FAQPage ----------
export function buildFAQPage(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.question,
      acceptedAnswer: { '@type': 'Answer', text: i.answer },
    })),
  };
}

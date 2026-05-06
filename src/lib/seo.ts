/**
 * seo.ts — meta tag builder for Layout.astro.
 * Pages pass an SeoInput; Layout consumes the MetaTagSet.
 */

export interface SeoInput {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogType?: 'website' | 'article';
  twitterHandle?: string;
  locale?: string;
  siteName?: string;
}

export interface MetaTagSet {
  title: string;
  description: string;
  canonical: string;
  og: {
    title: string;
    description: string;
    type: string;
    url: string;
    image: string;
    locale: string;
    siteName: string;
  };
  twitter: {
    card: 'summary_large_image';
    title: string;
    description: string;
    image: string;
    site?: string;
  };
}

export function buildMeta(input: SeoInput): MetaTagSet {
  const locale = input.locale || 'en_AE';
  const siteName = input.siteName || '';
  const ogType = input.ogType || 'website';

  return {
    title: input.title,
    description: input.description,
    canonical: input.canonical,
    og: {
      title: input.title,
      description: input.description,
      type: ogType,
      url: input.canonical,
      image: input.ogImage,
      locale,
      siteName,
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
      image: input.ogImage,
      site: input.twitterHandle,
    },
  };
}

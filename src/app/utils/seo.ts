/**
 * SEO Utilities
 * Helper functions for SEO optimization
 */

/**
 * Generates a URL-friendly slug from a string
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
}

/**
 * Truncates text to a specific length for meta descriptions
 * @param text - The text to truncate
 * @param maxLength - Maximum length (default: 155 for meta descriptions)
 */
export function truncateText(text: string, maxLength: number = 155): string {
  if (text.length <= maxLength) return text;
  
  // Truncate and add ellipsis
  const truncated = text.substring(0, maxLength - 3);
  const lastSpace = truncated.lastIndexOf(' ');
  
  // Cut at last space to avoid cutting words
  return lastSpace > 0 
    ? truncated.substring(0, lastSpace) + '...'
    : truncated + '...';
}

/**
 * Generates structured data for a breadcrumb
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

/**
 * Generates structured data for an article
 */
export function generateArticleSchema(params: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.title,
    description: params.description,
    image: params.image,
    datePublished: params.datePublished,
    dateModified: params.dateModified || params.datePublished,
    author: {
      '@type': 'Person',
      name: params.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Future Scope Labs',
      logo: {
        '@type': 'ImageObject',
        url: 'https://futurescopelabs.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': params.url
    }
  };
}

/**
 * Generates structured data for a service
 */
export function generateServiceSchema(params: {
  name: string;
  description: string;
  provider: string;
  areaServed?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    provider: {
      '@type': 'Organization',
      name: params.provider
    },
    areaServed: params.areaServed || 'Worldwide',
    url: params.url
  };
}

/**
 * Extracts text content from HTML for meta descriptions
 */
export function stripHtml(html: string): string {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

/**
 * Validates if a URL is absolute
 */
export function isAbsoluteUrl(url: string): boolean {
  return /^https?:\/\//i.test(url);
}

/**
 * Generates a full URL from a relative path
 */
export function getFullUrl(path: string, baseUrl: string = 'https://futurescopelabs.com'): string {
  if (isAbsoluteUrl(path)) return path;
  return `${baseUrl}${path.startsWith('/') ? path : '/' + path}`;
}

/**
 * Generates Open Graph image URL with proper dimensions
 */
export function generateOgImageUrl(
  title: string, 
  subtitle?: string,
  baseUrl: string = 'https://futurescopelabs.com'
): string {
  // This would integrate with an OG image generation service
  // For now, return the default OG image
  return `${baseUrl}/og-image.jpg`;
}

/**
 * Sanitizes text for use in meta tags
 */
export function sanitizeForMeta(text: string): string {
  return text
    .replace(/\n/g, ' ') // Remove newlines
    .replace(/\s+/g, ' ') // Collapse multiple spaces
    .replace(/[<>]/g, '') // Remove HTML brackets
    .trim();
}

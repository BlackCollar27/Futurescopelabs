import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string;
}

export function SEO({ 
  title, 
  description, 
  path, 
  image = 'https://futurescopelabs.com/og-image.jpg',
  type = 'website',
  keywords = 'web design, web development, software development, PWA, progressive web apps, design agency, React development, AI development'
}: SEOProps) {
  const siteUrl = 'https://futurescopelabs.com';
  const fullUrl = `${siteUrl}${path}`;
  const siteName = 'Future Scope Labs';
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;
  
  // Structured Data for Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'AI-accelerated web design and software development agency building fast, reliable, and beautiful digital products',
    sameAs: [
      // Add your social media profiles here
      // 'https://twitter.com/futurescopelabs',
      // 'https://linkedin.com/company/futurescopelabs',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      url: `${siteUrl}/book-call`
    }
  };

  // Structured Data for WebSite
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    description: 'AI-accelerated web design and software development agency',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/portfolio?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content={siteName} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
}

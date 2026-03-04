# SEO Pre-Launch Checklist

## Critical Items (Must Complete Before Launch) ⚠️

### Domain & URLs
- [ ] Update domain in `/src/app/components/SEO.tsx` (line 13)
- [ ] Update domain in `/public/sitemap.xml` (all URLs)
- [ ] Update domain in `/public/robots.txt` (line 5)
- [ ] Update domain in `/index.html` (meta tags)
- [ ] Update domain in `/src/app/utils/seo.ts` (helper functions)
- [ ] Verify HTTPS is configured and working
- [ ] Decide on www vs non-www and configure redirects

### Images & Assets
- [ ] Create Open Graph image at `/public/og-image.jpg` (1200x630px)
- [ ] Create favicon files:
  - [ ] `/public/favicon-16x16.png`
  - [ ] `/public/favicon-32x32.png`
  - [ ] `/public/apple-touch-icon.png` (180x180px)
- [ ] Create PWA icons:
  - [ ] `/public/icon-192x192.png`
  - [ ] `/public/icon-512x512.png`
- [ ] Create screenshots for PWA:
  - [ ] `/public/screenshot-desktop.png` (1920x1080px)
  - [ ] `/public/screenshot-mobile.png` (750x1334px)
- [ ] Optimize all images for web (compress, WebP format)

### Content Review
- [ ] Review all page titles for accuracy and keywords
- [ ] Review all meta descriptions (150-160 characters)
- [ ] Check all internal links are working
- [ ] Verify all images have descriptive alt text
- [ ] Check for spelling and grammar errors
- [ ] Ensure heading hierarchy is logical (h1 → h2 → h3)

### Social Media
- [ ] Add social media URLs to Organization Schema in SEO.tsx
- [ ] Test Open Graph tags with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Test Twitter Cards with [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Verify og:image displays correctly (1200x630px, <1MB)

### Technical SEO
- [ ] Test site on mobile devices
- [ ] Verify viewport meta tag is working
- [ ] Check page load speed with PageSpeed Insights
- [ ] Test all pages load without JavaScript errors
- [ ] Verify canonical URLs are correct
- [ ] Check robots.txt is accessible at `/robots.txt`
- [ ] Verify sitemap.xml is accessible at `/sitemap.xml`
- [ ] Test 404 page displays correctly
- [ ] Check for broken links site-wide

## Post-Launch Tasks (Within First Week) 📅

### Search Engine Setup
- [ ] Create Google Search Console account
- [ ] Submit sitemap to Google Search Console
- [ ] Create Bing Webmaster Tools account
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Analytics 4
- [ ] Configure GA4 goals and conversions
- [ ] Install Google Tag Manager (optional)

### Monitoring & Analytics
- [ ] Set up uptime monitoring
- [ ] Configure Core Web Vitals monitoring
- [ ] Set up error tracking (e.g., Sentry)
- [ ] Monitor search console for crawl errors
- [ ] Check indexing status daily for first week

### Business Listings
- [ ] Create/claim Google Business Profile (if applicable)
- [ ] Ensure NAP (Name, Address, Phone) consistency
- [ ] Submit to relevant industry directories
- [ ] Update LinkedIn company page
- [ ] Update social media profiles with website link

## Ongoing Optimization (Monthly) 🔄

### Content
- [ ] Review and update meta descriptions
- [ ] Add new content regularly (blog posts, case studies)
- [ ] Update existing content with fresh information
- [ ] Create new project case studies
- [ ] Optimize underperforming pages

### Technical
- [ ] Monitor page speed
- [ ] Check for broken links
- [ ] Review and fix crawl errors
- [ ] Update sitemap with new pages
- [ ] Audit mobile usability

### Analytics
- [ ] Review organic traffic trends
- [ ] Analyze keyword rankings
- [ ] Track conversion rates
- [ ] Review Core Web Vitals scores
- [ ] Check for indexing issues

## Testing Tools & Resources 🛠️

### Before Launch Testing
1. **Google Tools**
   - [PageSpeed Insights](https://pagespeed.web.dev/)
   - [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
   - [Rich Results Test](https://search.google.com/test/rich-results)

2. **Schema Validation**
   - [Schema.org Validator](https://validator.schema.org/)
   - [Google Rich Results Test](https://search.google.com/test/rich-results)

3. **Social Media**
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

4. **General SEO**
   - [Screaming Frog SEO Spider](https://www.screamingfrog.co.uk/seo-spider/)
   - [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

### Monitoring Tools
- Google Search Console
- Google Analytics 4
- Bing Webmaster Tools
- Ahrefs / SEMrush (paid)
- Moz (paid)

## Quick Launch Commands 🚀

### Test Locally
```bash
npm run build
npm run preview
```

### Verify Files Exist
```bash
# Check sitemap
curl http://localhost:4173/sitemap.xml

# Check robots.txt
curl http://localhost:4173/robots.txt

# Check manifest
curl http://localhost:4173/manifest.json
```

### Production Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## Success Metrics 📊

Track these KPIs after launch:

**Week 1-4 (Indexing Phase)**
- Pages indexed in Google
- Crawl errors (should be 0)
- Mobile usability issues (should be 0)

**Month 1-3 (Early Growth)**
- Organic traffic volume
- Average position for target keywords
- Click-through rate (CTR) from search
- Bounce rate

**Month 3+ (Mature Growth)**
- Organic conversion rate
- Pages per session
- Time on site
- Return visitor rate
- Domain authority growth

## Common Issues & Fixes 🔧

**Issue**: Pages not indexed
- **Fix**: Submit sitemap, check robots.txt, verify no noindex tags

**Issue**: Low click-through rate
- **Fix**: Improve title tags and meta descriptions

**Issue**: High bounce rate
- **Fix**: Improve page speed, ensure content matches intent

**Issue**: Low rankings
- **Fix**: Improve content quality, build backlinks, optimize on-page SEO

---

**Last Updated**: March 4, 2026
**Status**: Ready for pre-launch review ✅

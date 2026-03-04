# Quick SEO Reference Guide

## 🎯 Most Important Tasks Before Launch

### 1. Update Your Domain (5 minutes)
Search and replace `futurescopelabs.com` with your actual domain in:
- `/src/app/components/SEO.tsx`
- `/public/sitemap.xml`
- `/public/robots.txt`
- `/index.html`
- `/src/app/utils/seo.ts`

### 2. Create Images (30 minutes)
- `/public/og-image.jpg` (1200x630px) - Shows when sharing on social media
- `/public/favicon-16x16.png` - Browser tab icon (small)
- `/public/favicon-32x32.png` - Browser tab icon (medium)
- `/public/apple-touch-icon.png` (180x180px) - iOS home screen icon
- `/public/icon-192x192.png` - Android icon
- `/public/icon-512x512.png` - Android icon (large)

### 3. Test Before Launch (15 minutes)
```bash
npm run build
npm run preview
```

Visit these URLs to verify:
- http://localhost:4173/sitemap.xml
- http://localhost:4173/robots.txt
- http://localhost:4173/manifest.json

### 4. After Launch (30 minutes)
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your website
3. Submit your sitemap: `https://yourdomain.com/sitemap.xml`
4. Set up [Google Analytics](https://analytics.google.com/)

## 📊 Quick Test URLs

Test your SEO after launch:
- **PageSpeed**: https://pagespeed.web.dev/
- **Rich Results**: https://search.google.com/test/rich-results
- **Facebook Preview**: https://developers.facebook.com/tools/debug/
- **Twitter Preview**: https://cards-dev.twitter.com/validator

## 🔍 What Each File Does

| File | Purpose | Must Edit? |
|------|---------|------------|
| `/src/app/components/SEO.tsx` | Generates meta tags | ✅ Yes - Update domain |
| `/public/sitemap.xml` | Tells Google all your pages | ✅ Yes - Update domain |
| `/public/robots.txt` | Tells search engines what to crawl | ✅ Yes - Update domain |
| `/public/manifest.json` | Makes site installable as app | ❌ No |
| `/index.html` | Base HTML template | ✅ Yes - Update domain |
| `/src/app/utils/seo.ts` | Helper functions | ✅ Yes - Update domain |

## 💡 Common Questions

**Q: When will I appear in Google?**
A: Usually 1-4 weeks after submitting sitemap

**Q: How do I improve rankings?**
A: Create quality content regularly, get backlinks, optimize page speed

**Q: Do I need to do anything monthly?**
A: Check Google Search Console for errors, add new content

**Q: What if pages aren't indexed?**
A: Check robots.txt isn't blocking, submit sitemap, verify no noindex tags

## 📈 Quick Wins After Launch

**Week 1:**
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Test all social sharing previews

**Week 2:**
- [ ] Add Google Analytics
- [ ] Monitor for any crawl errors
- [ ] Verify all pages are indexed

**Month 1:**
- [ ] Write first blog post / case study
- [ ] Get listed in industry directories
- [ ] Start building backlinks

## 🚨 Critical Checklist

Before clicking "deploy":
- [ ] Domain updated in all files
- [ ] OG image created (1200x630px)
- [ ] Favicon files created
- [ ] Sitemap tested locally
- [ ] All pages load without errors
- [ ] Mobile responsive verified
- [ ] HTTPS configured

After deploy:
- [ ] Sitemap submitted to Google
- [ ] Google Analytics installed
- [ ] Social sharing tested
- [ ] All pages indexed within 2 weeks

## 📞 Need Help?

Review these files for more details:
- `SEO_SUMMARY.md` - Complete overview
- `SEO_IMPLEMENTATION.md` - Technical details
- `SEO_CHECKLIST.md` - Detailed checklist

---

**Quick Start**: Update domain → Create images → Deploy → Submit to Google ✅

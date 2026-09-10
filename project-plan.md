# Project Plan: Consulting/Market-Research Website
*(design & structure modeled on marketresearchsoutheastasia.com, built on a modern stack)*

## 1. Goal

Build a consulting-firm marketing site with the same visual language and information architecture as the reference site — hero intro, "why us" section, service/sector grids, case studies, client logo wall, insights (articles + gated whitepapers), and a contact form with file upload — but on a stack that's easier to build, host, and maintain than the reference's custom PHP backend.

## 2. Recommended Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Frontend framework | **Next.js (React, App Router)** | SSR/SSG for fast pages + good SEO, huge ecosystem |
| Styling | **Tailwind CSS** | Fast to build a design system, matches modern component patterns |
| CMS | **Sanity** or **Strapi** (headless) | Non-developers can edit Sectors, Services, Case Studies, Articles, Whitepapers without touching code |
| Hosting | **Vercel** | Native Next.js support, CDN, previews per branch |
| Forms | Next.js API route (or **Formspree**) + **Google reCAPTCHA v3** | Matches reference site's spam protection |
| File uploads (RFP files, gated whitepapers) | CMS asset storage or **S3/Cloudflare R2** | Handles the "download whitepaper" and "attach RFP file" flows |
| Email delivery | **Resend** or **SendGrid** | Sends contact-form submissions to your inbox |
| Analytics | **Plausible** or **GA4** | Track traffic/conversions |
| Icons | **Lucide** | Same icon set the reference site uses |
| Fonts | Google Fonts variable font (e.g. DM Sans) + one bold display font for headings | Matches the reference's typography pairing |

This swaps the reference's Symfony/Alpine.js/Bootstrap-admin combo for a stack where the CMS gives you the admin panel for free, instead of building one.

## 3. Site Structure (Sitemap)

```
/                          Home
/about-us                  About
/sectors                   Sectors (overview)
  /sectors/[slug]           e.g. construction, healthcare, energy, logistics, transport-mobility
/services                  Services (overview)
  /services/[slug]          e.g. market-research, strategic-planning, market-entry-strategy,
                             mergers-and-acquisitions, value-chain-analysis, competitive-benchmarking,
                             distribution-strategic-partnership, consumer-behavior-analysis
/case-studies               Case studies list
  /case-studies/[slug]       Individual case study
/insights                   Insights hub
  /insights/articles         Article list
  /insights/articles/[slug]  Article detail
  /insights/whitepapers      Whitepaper list (gated downloads)
  /insights/whitepapers/[slug]
/contact-us                 Contact form + info
/sitemap                    HTML sitemap page
```

## 4. CMS Content Models

Define these as collections/content types in Sanity or Strapi:

- **Sector** — name, slug, icon, summary, hero image, body content
- **Service** — name, slug, short description (for card), icon, full description, related case studies
- **Case Study** — title, slug, sector tag, summary, hero image, body, client (optional)
- **Article** — title, slug, author, publish date, body, featured image, SEO fields
- **Whitepaper** — title, slug, cover image, PDF file, gated (bool), summary
- **Client Logo** — name, logo image, display order
- **Site Settings** — global nav items, footer links, social links, contact email, phone/WhatsApp

## 5. Design System Notes

- Palette: pick 1 primary brand color + 1 accent + neutrals (grays) — extract or redefine from your own brand, don't reuse the reference's exact colors.
- Typography: one variable sans-serif for body text, one bolder/display face for headings (reference pairs DM Sans with a Gotham-style bold).
- Reusable components to build: sticky header w/ mega-menu dropdowns, hero with image collage, icon+text feature grid, service/sector card grid, logo marquee/grid, case-study card, article/whitepaper card, CTA banner, contact form with country dropdown + file upload, footer with sitemap columns.

## 6. Phase-by-Phase Plan

**Phase 0 — Discovery (3–5 days)**
Confirm business name, domain, hosting budget, brand colors/logo, list of real sectors/services/case studies you'll publish, and who will maintain content after launch.

**Phase 1 — Design (1–2 weeks)**
Wireframe key templates (home, sector/service detail, case study, article, contact). Build a UI kit in Figma (or skip straight to Tailwind if budget-constrained). Get sign-off before development starts.

**Phase 2 — CMS setup (2–4 days)**
Stand up Sanity/Strapi, define content models from Section 4, invite content editors, set up preview environments.

**Phase 3 — Frontend build (2–4 weeks)**
Scaffold Next.js project, build shared layout (header/footer/nav), build each page template, wire templates to CMS queries, implement responsive breakpoints and image optimization (Next/Image).

**Phase 4 — Integrations (3–5 days)**
Contact form → API route → reCAPTCHA v3 → email via Resend/SendGrid; whitepaper gated download flow (capture email before PDF link, or straight download); analytics; SEO metadata (title/description/OG tags per page) + sitemap.xml + robots.txt generation.

**Phase 5 — Content population (1–2 weeks, parallel with Phase 3–4)**
Write/import copy for all sectors, services, 4–6 case studies, a handful of launch articles, at least one whitepaper PDF, client logos.

**Phase 6 — QA (3–5 days)**
Cross-browser/device testing, Lighthouse audit (performance/accessibility/SEO), broken-link check, form submission test end-to-end, spam/recaptcha test.

**Phase 7 — Launch (1–2 days)**
Point domain DNS to Vercel, enable HTTPS, submit sitemap to Google Search Console, verify analytics is firing, monitor for 48 hours.

**Phase 8 — Post-launch**
Set a content cadence (e.g. 2 articles/month), review analytics monthly, plan quarterly design/content refreshes.

## 7. Rough Timeline

Total: **6–9 weeks** for a solo developer or small team, assuming content (copy, images, case studies) is ready in parallel with Phase 3.

## 8. Roles Needed

- 1 designer (or a strong template + your own art direction)
- 1–2 frontend/full-stack developers (Next.js + CMS integration)
- 1 content writer/editor
- You/stakeholder for sign-off at each phase gate

## 9. Next Steps

1. Confirm domain name and hosting/CMS budget.
2. Gather brand assets (logo, colors, real sector/service/case-study content).
3. Kick off Phase 0 discovery and start wireframes.

# Sea Market Research — Website

Next.js 14 (App Router) + Tailwind CSS site for **seamarketresearch.com**, built to the
structure and design pattern of the reference project plan: home, about, sectors,
services, case studies, insights (articles + whitepapers), and contact.

All page copy, sector/service/case-study content, and articles/whitepapers currently
live as static data in `lib/content.ts` — swap that file's exports for CMS calls
(Sanity/Strapi) once your CMS is connected, without touching the page components.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
app/                     Pages (App Router)
  page.tsx                Home
  about-us/
  sectors/                Index + /sectors/[slug]
  services/               Index + /services/[slug]
  case-studies/           Index + /case-studies/[slug]
  insights/               Hub + /articles, /whitepapers
  contact-us/
  api/contact/route.ts    Contact form submit handler (stub)
components/              Header, Footer, ContactForm, WhitepaperDownloadForm
lib/content.ts           All site content (sectors, services, case studies, articles, whitepapers)
lib/icons.tsx            Icon name -> lucide-react component map
```

## Before launch — things to wire up

1. **Domain & hosting**: point `seamarketresearch.com` DNS at your hosting provider
   (Vercel is the easiest match for Next.js — `vercel --prod` from this folder, or
   connect the repo in the Vercel dashboard).
2. **CMS**: pick Sanity or Strapi, recreate the content models described in the
   project plan, and replace the static arrays in `lib/content.ts` with fetches from
   the CMS API.
3. **Contact form email delivery**: `app/api/contact/route.ts` currently just logs
   submissions to the server console. Wire it to Resend or SendGrid to email
   `info@seamarketresearch.com` on every submission.
4. **reCAPTCHA**: add Google reCAPTCHA v3 to `components/ContactForm.tsx` and verify
   the token server-side in the API route before accepting a submission.
5. **Whitepaper downloads**: `components/WhitepaperDownloadForm.tsx` currently just
   simulates success. Wire the email capture to your CRM/email list, and serve the
   actual PDF (store PDFs in your CMS's asset storage or S3/Cloudflare R2) once the
   email is captured.
6. **Analytics**: add Plausible or GA4 to `app/layout.tsx`.
7. **Brand color**: `tailwind.config.ts` currently defines a navy `primary` and teal
   `accent` — adjust to your actual brand colors whenever you settle on them.
8. **SEO**: add a `sitemap.ts` and `robots.ts` in `app/` (Next.js supports both
   natively) once the domain is live, and submit the sitemap to Google Search Console.

## Content

Real sector, service, case-study, and article content should be reviewed and adjusted
— what's here is a placeholder first draft written to match the reference site's
structure and tone, ready to refine with your actual project examples and clients.

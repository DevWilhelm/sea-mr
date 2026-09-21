# Sea Market Research — Website

Next.js 14 (App Router) + Tailwind CSS site for **seamarketresearch.com**, built to the
structure and design pattern of the reference project plan: home, about, sectors,
services, and contact.

All page copy and sector/service/case-study content currently live as static data in
`lib/content.ts` — swap that file's exports for CMS calls (Sanity/Strapi) once your
CMS is connected, without touching the page components.

Note: the main nav no longer links to Case Studies or Insights. The Case Studies
routes (`app/case-studies/`) are kept because `/sectors/[slug]` still renders a
"Related Case Studies" section linking into individual case study pages — removing
those routes would break that section. Insights/Articles had no other dependents and
was removed entirely.

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
  case-studies/           Index + /case-studies/[slug] (unlinked from nav; still
                          referenced by /sectors/[slug]'s related case studies)
  contact-us/
components/              Header, Footer, ContactForm (submit is a client-side stub)
lib/content.ts           All site content (sectors, services, case studies)
lib/icons.tsx            Icon name -> lucide-react component map
```

## Deployment

This site currently builds as a static export (`output: "export"` in
`next.config.mjs`, producing a plain HTML/CSS/JS bundle in `out/`) and is deployed to
Render as a Static Site (see `render.yaml`). Because static exports can't run server
code, there is no `app/api/` route right now — the contact form is a client-side stub
that just shows a success message without sending anything (see below).

Build command: `npm install && npm run build`. Publish directory: `out`.

If real server-side features are added later (working contact form email delivery,
a CMS with on-demand data, etc.), `output: "export"` will need to come out of
`next.config.mjs` and the Render service will need to move from a Static Site to a
Web Service (`npm run start`).

## Before launch — things to wire up

1. **Domain**: point `seamarketresearch.com` DNS at your Render static site.
2. **CMS**: pick Sanity or Strapi, recreate the content models described in the
   project plan, and replace the static arrays in `lib/content.ts` with fetches from
   the CMS API.
3. **Contact form email delivery**: `components/ContactForm.tsx` currently just shows
   a success message locally — it doesn't send the submission anywhere. Wiring this up
   for real will require either a server (switch this deploy to a Render Web Service
   with an API route) or a third-party static-form backend (e.g. Formspree), then
   emailing `info@seamarketresearch.com` on every submission.
4. **reCAPTCHA**: add Google reCAPTCHA v3 to `components/ContactForm.tsx` and verify
   the token server-side once a real backend exists (there's no server to verify
   against while this stays a static export).
5. **Analytics**: add Plausible or GA4 to `app/layout.tsx`.
6. **Brand color**: `tailwind.config.ts` currently defines a navy `primary` and teal
   `accent` — adjust to your actual brand colors whenever you settle on them.
7. **SEO**: add a `sitemap.ts` and `robots.ts` in `app/` (Next.js supports both
   natively) once the domain is live, and submit the sitemap to Google Search Console.

## Content

Real sector, service, and case-study content should be reviewed and adjusted — what's
here is a placeholder first draft written to match the reference site's structure and
tone, ready to refine with your actual project examples and clients.

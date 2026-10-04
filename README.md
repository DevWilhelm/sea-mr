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
components/              Header, Footer, ContactForm (posts to /api/contact)
lib/content.ts           All site content (sectors, services, case studies)
lib/icons.tsx            Icon name -> lucide-react component map
lib/email.ts             Resend client + inquiry notification email
lib/reference.ts         Inquiry reference number generator
app/api/contact/route.ts Contact form submission handler (validates, emails via Resend)
```

## Deployment

This site runs as a regular Next.js Node server (`npm run start`) and is deployed to
Render as a **Web Service** (see `render.yaml`), not a static export — the contact form's
`app/api/contact/route.ts` needs a server to run.

Build command: `npm install && npm run build`. Start command: `npm run start`.

Required environment variables (see `.env.example`), set in the Render dashboard for
production and in a local `.env.local` for development:

- `RESEND_API_KEY` — secret, from your Resend account.
- `CONTACT_NOTIFICATION_TO` — inbox that receives every inquiry (currently
  `websiteinquiries@sagasiaconsulting.com`).
- `CONTACT_NOTIFICATION_FROM` — sender shown on the notification email. The domain in
  this address (`sagasiaconsulting.com`) must be verified in Resend before sending will
  work.

## Before launch — things to wire up

1. **Domain**: point `seamarketresearch.com` DNS at your Render web service.
2. **CMS**: pick Sanity or Strapi, recreate the content models described in the
   project plan, and replace the static arrays in `lib/content.ts` with fetches from
   the CMS API.
3. **Contact form email delivery**: done — `app/api/contact/route.ts` validates the
   submission and emails `CONTACT_NOTIFICATION_TO` via Resend, with the uploaded RFP
   file attached when present. There's no automatic confirmation email to the visitor
   yet; that's a natural follow-up (a second Resend call from the same route) once a
   sender domain/mailbox for visitor-facing mail is available.
4. **reCAPTCHA**: `app/api/contact/route.ts` has a honeypot field for basic bot
   filtering; add Google reCAPTCHA v3 to `components/ContactForm.tsx` and verify the
   token in the API route if spam becomes a real problem.
5. **Analytics**: add Plausible or GA4 to `app/layout.tsx`.
6. **Brand color**: `tailwind.config.ts` currently defines a navy `primary` and teal
   `accent` — adjust to your actual brand colors whenever you settle on them.
7. **SEO**: add a `sitemap.ts` and `robots.ts` in `app/` (Next.js supports both
   natively) once the domain is live, and submit the sitemap to Google Search Console.

## Content

Real sector, service, and case-study content should be reviewed and adjusted — what's
here is a placeholder first draft written to match the reference site's structure and
tone, ready to refine with your actual project examples and clients.

# INDOMARU — www.indomaru.com

Corporate website for INDOMARU, a Dubai-based privately held business group
operating across Maritime, Digital Assets and Travel. Built with Next.js
(App Router), TypeScript, and Tailwind CSS, ready for Vercel deployment.

## Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Fonts: Manrope (display) + Inter (body), via `next/font/google`
- Images: `next/image` with remote Unsplash placeholders (swap for real
  brand photography before launch — see "Replacing images" below)

## Getting started locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Project structure

```
app/
  layout.tsx            Root layout, fonts, global <Header>/<Footer>
  page.tsx               Home
  group/page.tsx          /group
  businesses/page.tsx     /businesses
  about/page.tsx           /about
  contact/page.tsx         /contact
  privacy-policy/page.tsx
  terms-of-use/page.tsx
  api/contact/route.ts    Contact form submission handler
  sitemap.ts / robots.ts  Auto-generated sitemap.xml / robots.txt
components/               Reusable UI: Header, Footer, Hero, BusinessPanel,
                           ContentBlock, SectionHeading, CTASection,
                           ContactForm, Reveal (scroll-reveal wrapper)
lib/site.ts               Site config, nav, business vertical content
```

## Replacing images

All imagery currently points to Unsplash placeholder photos (free to use,
matched to the brief's cinematic maritime / infrastructure / travel
direction) via `next/image` `remotePatterns` in `next.config.mjs`. Before
launch, replace the URLs in `lib/site.ts`, `components/Hero.tsx`, and
`app/page.tsx` (Trateria section) with licensed brand photography, either
hosted in `/public` or on your own CDN (update `remotePatterns`
accordingly).

## Contact form

`components/ContactForm.tsx` posts to `app/api/contact/route.ts`, which
currently logs the submission. Wire it to a real email/notification
service before launch — the route includes a commented example using
Resend. Add any required API keys as environment variables in Vercel
(Project Settings → Environment Variables) and reference them with
`process.env.YOUR_KEY`.

## Verified

`npm run build` produces a clean, fully static build with no TypeScript
or compile errors (all 11 routes prerender successfully). Google Fonts
are fetched automatically during Vercel's build step, so no local font
files are needed.

## Deploying — GitHub + Vercel

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial INDOMARU website"
   git branch -M main
   git remote add origin https://github.com/<your-org>/indomaru.git
   git push -u origin main
   ```

2. **Import into Vercel**
   - Go to https://vercel.com/new
   - Import the `indomaru` GitHub repository
   - Framework preset: Next.js (auto-detected)
   - Build command / output: defaults are correct, no changes needed
   - Deploy

3. **Connect the domain**
   - In the Vercel project → Settings → Domains, add `www.indomaru.com`
     (and `indomaru.com` with a redirect to `www`)
   - Point your DNS (at Hostinger, or wherever the domain is registered)
     to Vercel:
     - `www` → CNAME → `cname.vercel-dns.com`
     - Apex (`indomaru.com`) → A record → `76.76.21.21` (or use Vercel's
       "Redirect apex to www" option, which it will show you in the
       Domains panel with exact values for your account)
   - You can keep the domain registered and email hosted at Hostinger —
     only the DNS records for the web-facing hostnames need to point to
     Vercel.

4. **Every subsequent `git push` to `main` auto-deploys** via Vercel's
   GitHub integration. Use preview deployments (automatic on pull
   requests / other branches) to review changes before merging.

## Content notes

- No placeholder statistics, testimonials, client logos or invented
  company history are included, per the brief.
- Business vertical copy, capabilities and CTAs live in
  `lib/site.ts` — edit that file to update copy across the whole site
  without touching component code.

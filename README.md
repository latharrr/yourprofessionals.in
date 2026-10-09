# Your Professionals — yourprofessionals.in

Marketing and lead-generation website for **Your Professionals**, a firm of Chartered Accountants, Company Secretaries and legal professionals offering business registration, GST, income tax, trademark, licensing and compliance services across India.

- **Live site:** https://www.yourprofessionals.in
- **Hosting:** Vercel (project `yourprofessionals-in`), auto-deploys from the **`dev` branch — which is production**
- **Stack:** React 19, TypeScript, Vite 7, Tailwind CSS 4, React Router 7
- **Business goal of the site:** collect leads (name, phone, email, service) and rank in Google / AI search. Almost every design decision below serves one of those two.

> ⚠️ **Read this before you commit anything.** This repo's `dev` branch has been overwritten before by a squashed, parentless "Sync … from your-prof-website" commit built from `latharrr/your-prof-website`. Anything that exists only here is wiped on the next sync. As of 9 Oct 2026 **everything listed under [What exists only in this repo](#what-exists-only-in-this-repo) is missing from `your-prof-website`.**
>
> Before working: `git fetch` and look at `git log origin/dev` — if the newest commit is a parentless "Sync …" commit, stop and ask the owner. Never force-push over a sync commit. Port your changes into `your-prof-website`, or get the sync stopped/adjusted.

## Getting started

```bash
npm install
npm run dev       # local dev server (client-rendered, no prerendering, no /api)
npm run build     # full production build, including prerendering (see below)
npm run preview   # serve the production build locally (http://localhost:4173)
npm run lint      # currently clean — keep it that way
```

Environment variables (set in Vercel → Project → Settings → Environment Variables):

| Variable | Used for |
| --- | --- |
| `VITE_GOOGLE_SCRIPT_URL` | Google Apps Script endpoint that appends lead submissions to the leads Google Sheet |
| `RESEND_API_KEY` | `api/send-email.js` — sends the lead notification email via Resend |

**Local development gotcha:** `npm run dev` and `npm run preview` do not serve `/api/send-email`. Unless `VITE_GOOGLE_SCRIPT_URL` is set in a local `.env`, submitting a lead locally will show the "Something went wrong" message. That is expected (see [`submitLead`](#how-a-lead-is-delivered)). Use `vercel dev` if you need the API locally. **Never put real leads/test spam into the production sheet** — use an obviously fake name like "TEST DO NOT CALL".

## Project structure

```
api/send-email.js                 Vercel function: emails each lead to the enquiry inbox via Resend
public/                           Static files served as-is (robots.txt, llms.txt, og-image.jpg, logo.svg, IndexNow key)
scripts/prerender.mjs             Post-build: prerender pages, rebuild sitemap, generate llms files, ping IndexNow
scripts/faq-from-markdown.py      Regenerates src/data/faq.generated.ts from the client's FAQ markdown (see FAQs)
src/entry-server.tsx              SSR entry used only by the prerender step
src/main.tsx                      Browser entry: hydrates prerendered HTML
src/App.tsx                       Routes, homepage, site-wide structured data (Organization, LocalBusiness, FAQ…)

src/components/common/
  LeadForm.tsx                    THE quote form (hero + blog sidebar). Validation, Other Service, WhatsApp, submit
  LeadPopup.tsx                   "Book Free Consultation" popup (original navy design — intentional, see below)
  OtherServiceModal.tsx           "Tell us what you need" box shown when "Other Service" is chosen
  AIAgentWidget.tsx               Floating chat assistant (bottom-right) — keyword-based, not an LLM
  SEO.tsx                         Per-page title, description, canonical, Open Graph, hreflang, JSON-LD
src/components/home/              Homepage sections (HeroSection, Services, WhyChooseUs, FAQSection, Testimonials …)
src/components/layout/            Header, Footer, DueDatesTicker

src/data/leadServices.ts          Service dropdown lists + "Other Service" helpers + phone validation (single source)
src/data/siteStats.ts             Customer rating + client count shown everywhere (single source)
src/data/faq.ts                   FAQ types, hand-written "Working With Us" category, FAQ schema
src/data/faq.generated.ts         AUTO-GENERATED 150 FAQs — do not edit by hand
src/data/services.ts              ~300 service pages' content, merged from src/data/**
src/data/blogs.ts                 Blog posts
src/lib/submitLead.ts             Delivers a lead to Google Sheet + email
src/lib/agentKnowledge.ts         Chat assistant's FAQ / service lookup
src/pages/                        Page components (ServicePage renders every /:slug service)
vite.config.ts                    Build config and the route list fed to the sitemap plugin
vercel.json                       cleanUrls, trailing-slash policy, SPA fallback rewrite
```

## Lead capture (the money path)

### Where leads come from

| Form | Component | Notes |
| --- | --- | --- |
| Homepage hero | `LeadForm` (`compact`) | Right of the poster image. Must fit on the first screen — see [Hero layout](#hero-layout) |
| Blog listing sidebar | `LeadForm` | |
| Free Consultation popup | `LeadPopup` | Opens 5 s after a first visit, and on the `openConsultationPopup` window event (Header "Free Consultation", Footer, Pricing, FAQ "Talk to an Expert", etc.) |
| Blog article sidebar | `BlogPost.tsx` (own markup) | |
| Company registration + every service page | `CompanyRegistration.tsx`, `ServicePage.tsx` (own markup) | |
| Contact page | `ContactUs.tsx` (own markup) | |
| Chat assistant | `AIAgentWidget.tsx` | Name + 10-digit phone only |

The hero/blog-sidebar form follows the client-approved "Receive Your Personalized Quote Instantly" design. **The Free Consultation popup deliberately keeps its original navy-header design** — the client asked for that after the hero redesign; do not restyle it to match `LeadForm`.

### The "Other Service" rule (client requirement)

Every service dropdown must **end with "Other Service"**, and choosing it must open `OtherServiceModal` so the visitor can type their specific requirement. Rules:

- All lists come from `src/data/leadServices.ts` (`LEAD_SERVICES`, `COMPANY_TYPE_SERVICES`). `OTHER_SERVICE` is always the last entry — keep it last if you add services.
- Detect "Other" with `isOtherService(value)` (it also accepts the legacy strings `'Need help with Other Services'` and `'other'`, which the Header menu still dispatches). Don't compare strings directly.
- If Other is chosen, **the typed requirement is mandatory** before submit.
- What gets sent is `resolveServiceLabel(service, custom)` → `"Other: <what they typed>"`.
- The modal is rendered through a React portal at `z-[200]` and consumes Escape itself, so it layers correctly over the popup.

### How a lead is delivered

`src/lib/submitLead.ts` sends each lead to **two** channels in parallel:

1. **Google Sheet** — `GET`/`POST` to `VITE_GOOGLE_SCRIPT_URL` with query params `Name, Phone, Email, Service` (+ `Message` when present), `mode: 'no-cors'` (response is opaque, so only a thrown fetch counts as failure).
2. **Email** — `POST /api/send-email` (`api/send-email.js`) → Resend → the enquiry inbox hard-coded in that file.

It succeeds if **either** channel works and throws only if **both** fail, so one outage doesn't lose leads or break the form. The "WhatsApp updates" checkbox is sent as the `message` text.

Validation (`leadServices.ts`): `+91` numbers must be 10 digits starting 6–9; other country codes 6–14 digits.

### Verify after every deploy that touches forms

Submit one test lead (fake name) from the hero form **and** the popup, and confirm it appears in **both** the Google Sheet and the inbox. This has not been verified on production since the 9 Oct 2026 rewrite — do it first.

## Hero layout

The homepage hero form must show **entirely above the fold** (button + "Chat on WhatsApp" visible without scrolling). `LeadForm` has a `compact` prop used only by the hero, plus `[@media(max-height:700px)]` / `[@media(max-height:620px)]` variants that tighten further on short laptop screens (verified 1920×950 down to 1280×600). If you add a field or change heights, re-test at 1440×780, 1366×650 and 1280×600 or the Get Quote button will fall below the fold again.

**Poster image (left side):** it uses `object-contain` (`object-top` from `xl` up) inside an `overflow-hidden` column. **Do not shift it with `translate`/negative margins** — an earlier `xl:-translate-y-14` clipped the top 41–56 px of the poster on every screen ≥1536 px wide (all 1080p desktops). Move it with `object-position` instead, which cannot clip. When touching the hero, check the image isn't cut at 360, 390, 768, 820, 1024, 1280, 1440, 1536, 1920 and 2560 px wide (compare `img.getBoundingClientRect()` against its parent).

## Customer rating & counts

Shown on the homepage "Client Rating" card, the footer, the Google-reviews badge, the `aggregateRating` JSON-LD and the homepage meta description. **All of it comes from `src/data/siteStats.ts`** (`RATING_VALUE = '4.9'`, `CLIENT_COUNT = 100`). Change it there only — never type "4.9" or "100+" into a component. The client chose "100+" (previously 500+/185+/10,000+ appeared in different places); the "Trusted by …" badge was removed from the Contact Us page on request.

> The 4.9 score was kept when the counts changed; confirm with the client that it is still accurate. The 12 individual testimonial cards in `Testimonials.tsx` are all 5/5.

## FAQs

- The homepage FAQ section has 6 tabs: the five categories generated from the client's database (Company Registration, GST & Income Tax, ROC Compliance, Accounting, Trademark & IPR — 30 questions each) plus a hand-written "Working With Us" tab (`WORKING_WITH_US` in `src/data/faq.ts`).
- **To update the 150 questions:** edit the client's markdown ("FAQs for Your Professionals .md"), then run
  `python3 scripts/faq-from-markdown.py "<path to .md>"`
  This rewrites `src/data/faq.generated.ts` (never edit that file by hand). The script asserts 5 categories × 30 questions and picks an icon per question by keyword. Run `npm run build` and check the homepage afterwards.
- To change the hand-written tab, edit `WORKING_WITH_US` in `faq.ts`. Don't promise things you can't verify there (a "15-minute callback" claim was removed for that reason).
- The UI shows the first 8 questions per tab with a "Show all N questions" button. **All questions stay in the DOM (`hidden`) so crawlers read them** — keep it that way.
- **SEO output:** the homepage `FAQPage` JSON-LD includes only the first 6 questions per tab (35 total) because marking up all ~155 answers would add ~150 KB. `llms-full.txt` includes every FAQ. The homepage HTML is ~520 KB because of the full FAQ text.

## Blog

- `/blogs` is a redesigned editorial listing (featured post, card grid, category pills with live counts, search) with the quote form in the sidebar. The design was created without a spec from the client (the brief said "as per details provided" but none were attached) — treat it as a first version and ask for feedback.
- Posts: `DEFAULT_BLOGS` in `src/data/blogs.ts`; `/blogs/admin` can add posts, which are kept in the **browser's localStorage only** (they don't reach other visitors or the prerendered HTML). Anything that should be public must be added to `blogs.ts`.
- Only 3 posts exist today; categories with no posts are hidden automatically.
- The old "Download Free Startup Compliance Guide PDF" card was removed — it only opened the popup and no PDF exists. Don't re-add it unless the PDF is produced.

## Chat assistant (`AIAgentWidget`)

Floating button bottom-right. **It is a rule-based assistant, not an LLM.** What it does:

- Starter topic buttons link to real service pages; "Request Free Callback" / "Get Price Quotation" open an inline name + phone form that calls `submitLead` (service is tagged `Website assistant: <topic>` with recent chat context in the message); "Chat on WhatsApp" opens `wa.me` with the topic prefilled.
- Free-text questions go through `src/lib/agentKnowledge.ts`: whole-word scoring against the FAQ database and the service catalogue (title hits weigh most; "register"/"file" wording nudges toward registration/filing pages). It answers with the first paragraph of a matching FAQ, or up to three candidate service links, otherwise offers a callback/WhatsApp. It can only say what the site already says.
- The service catalogue is loaded with a dynamic `import()` on the first question so the ~3 MB services chunk isn't in the main bundle.
- To plug in a real AI agent later: replace the `findAnswer` call in `handleSend`. Keep the lead form and `submitLead` path.
- The client's brief said "incorporate the agent on the website" without naming one. If they meant a specific agent (n8n, Claude, etc.) it still needs to be connected.

## Due-dates ticker

`DueDatesTicker.tsx` (top bar) is **hard-coded and manually maintained**. Update its dates when deadlines pass or change. Don't compute dates during render — that breaks prerender hydration (see rules below). The expired "ITR Filing (Individuals): 31st July 2026" entry was removed on 9 Oct 2026; add a verified next ITR/tax-audit deadline.

## How the build works

`npm run build` runs four steps:

1. `tsc -b` — type-check.
2. `vite build` — client bundle into `dist/`; `vite-plugin-sitemap` writes `dist/sitemap.xml` from the route lists in `vite.config.ts` (this **overwrites** `public/sitemap.xml`).
3. `vite build --ssr src/entry-server.tsx --outDir dist-server` — a Node bundle that can render any route.
4. `node scripts/prerender.mjs`, which:
   - renders every route (sitemap routes, every key in `SERVICES`, every blog post, plus the `/about` and `/contact` aliases) to static HTML with React 19's `prerender`, moving each page's `<title>`/`<meta>`/`<link>` into `<head>`;
   - writes `/foo` as `dist/foo.html` (served at `/foo` via `cleanUrls`) and keeps the untouched shell as `dist/app-shell.html` for every other URL;
   - rebuilds `dist/sitemap.xml`: removes URLs with no real page and duplicate-content service URLs, de-duplicates, and adds real pages the route list missed;
   - generates `dist/llms-full.txt` (full plain-text site content incl. every FAQ) and appends an "All services" list to `dist/llms.txt`;
   - on production deploys (`VERCEL_ENV=production`) submits the sitemap URLs to IndexNow (Bing, which ChatGPT search uses, and others).

In the browser, `src/main.tsx` hydrates the prerendered markup, so visitors see the same UI while crawlers get complete HTML. A healthy build ends with `prerender: 312 pages written, 0 failed`.

### Rules that keep prerendering working

- **Render output must be the same on the server and in the browser.** Read `window`, `localStorage`, dates or screen size inside `useEffect`/event handlers, not during render; otherwise React logs hydration error #418 and re-renders the page. (`LeadPopup` and `OtherServiceModal` follow this: nothing renders until after mount/open.)
- **Keep content in the DOM.** For accordions/tabs/"show more", use `hidden={…}` rather than `{cond && …}` so crawlers can read collapsed content.
- **Adding a page:** add the `<Route>` in `src/App.tsx`, give the page an `<SEO>` with `title`, `description`, `canonical` (and `schema` if relevant), and add its path to `staticRoutes` in `vite.config.ts`. New entries in `SERVICES` and `DEFAULT_BLOGS` are picked up automatically.
- **Duplicate service content:** if a `SERVICES` key reuses another service's data object (`SERVICES[key].slug !== key`), the page canonicalises to that service and is left out of the sitemap and llms files. Give it its own content (with its own `slug`) to make it indexable.
- **Test locally** with `npm run build && npm run preview`, then open pages with the devtools console open — there should be no React hydration errors.

## SEO / AEO checklist (what's in place)

- Prerendered HTML for every page with a unique title, description, canonical, Open Graph/Twitter tags and `hreflang` (en-IN)
- JSON-LD: WebSite, Organization, LocalBusiness (with `aggregateRating` from `siteStats.ts`), Service, FAQPage, BreadcrumbList, Article, WebApplication (calculators), AboutPage, ContactPage, Blog, Privacy Policy WebPage
- `robots.txt` explicitly allows search and AI crawlers (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, …)
- `llms.txt` and `llms-full.txt` for AI assistants
- Auto-generated sitemap with only canonical, real pages
- IndexNow on production deploys
- Right-sized WebP/JPEG/PNG images with `width`/`height`, lazy loading below the fold, high fetch priority for the hero image
- Privacy Policy at `/privacy-policy` (required for Meta/Google lead ads — **do not remove or move this URL**)

## What exists only in this repo

Not present in `latharrr/your-prof-website` as of 9 Oct 2026 (each would be lost by the next sync):

- Privacy Policy page; build-time prerendering (`scripts/prerender.mjs`, `src/entry-server.tsx`, `cleanUrls` in `vercel.json`); `llms.txt`/`llms-full.txt`; IndexNow; schema fixes; image optimisation
- 9 Oct 2026 round (client's "Core Website Changes 10 Oct" doc + follow-ups): shared `LeadForm`, `leadServices.ts`, `submitLead.ts`, "Other Service" everywhere, the 100+ rating work and `siteStats.ts`, blog redesign, the 150-question FAQ + generator, working chat assistant, compact hero form, ticker fix

## Decisions log (so you don't undo them by accident)

| Decision | Why |
| --- | --- |
| Counts changed to **100+** everywhere; kept **4.9** | Client request; one number was inconsistent across 5 places |
| "Trusted by 10,000+ Clients" removed from Contact Us | Client request |
| Free Consultation popup kept in its **original design** | Client asked to keep the previous box |
| "Other Service" last in every list + mandatory requirement | Client request; previously the popup had no Other and company/service pages accepted blank "Other" leads |
| Homepage FAQ schema capped at 6 per tab | Avoid ~150 KB of JSON-LD on the homepage |
| Hero form compacted | Client: Get Quote Now was half below the fold |
| Blog PDF lead-magnet card removed | The PDF doesn't exist |

## Known issues / TODO

- **Verify lead delivery on production** (Sheet + email) after the 9 Oct rewrite — not yet confirmed.
- **Port the changes above into `your-prof-website`** (or stop the sync), otherwise they're lost.
- **Two phone numbers are published**: WhatsApp links use `+91 93543 32511`, the footer shows `+91-70119 36958`. Confirm which is canonical and align them.
- Add a verified next deadline to the due-dates ticker (see above).
- Confirm the 4.9 rating with the client; the Google-review count claimed (100+) should match their Google profile.
- Blog redesign and chat-assistant behaviour were built without a spec — expect revisions.
- 11 groups of service pages share the same title and 17 service URLs reuse another page's content — they need unique copy.
- `public/og-image.jpg` is the hero image used as a stopgap; replace with a designed 1200×630 image (and update `og:image:width/height` in `index.html`).
- `src/data/services.ts` ships as a ~3 MB JS chunk on service pages (content is already visible from the prerendered HTML before it loads); the chat assistant lazy-loads it too.
- Homepage HTML is ~520 KB (full FAQ text); consider lazy rendering of non-visible categories if page weight matters.
- `src/pages/CompanyRegistration.tsx` was converted from CRLF to LF line endings in the 9 Oct commit, so its git diff shows as a whole-file rewrite; no functional change.
- The Header's "Other Services" menu item still dispatches the legacy value `'Need help with Other Services'`; it works via `isOtherService` but could be tidied to `OTHER_SERVICE`.

## Deploy checklist

1. `git fetch` → confirm `origin/dev` is not a new "Sync …" commit.
2. `npm run lint && npm run build` — build must end `0 failed`.
3. `npm run preview` and click through: hero form (Other Service flow), Free Consultation popup, a service page form, `/blogs`, `/contact-us`, FAQ tabs, chat assistant. Console must show no errors.
4. Push to `dev` (fast-forward only, never force). Vercel deploys in ~1 minute.
5. Check the live site and submit one fake test lead; confirm Sheet + inbox.

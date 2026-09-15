# Your Professionals — yourprofessionals.in

Marketing and lead-generation website for **Your Professionals**, a firm of Chartered Accountants, Company Secretaries and legal professionals offering business registration, GST, income tax, trademark, licensing and compliance services across India.

- **Live site:** https://www.yourprofessionals.in
- **Hosting:** Vercel (project `yourprofessionals-in`), auto-deploys from the `dev` branch
- **Stack:** React 19, TypeScript, Vite 7, Tailwind CSS 4, React Router 7

> ⚠️ **Sync warning:** this repo's `dev` branch has been overwritten by a squashed "Sync … from your-prof-website" commit built from `latharrr/your-prof-website`. Anything committed only here (privacy policy, prerendering, SEO/AEO work) is lost on the next sync unless it's also in that repo. Before working here, run `git fetch` and check whether `origin/dev` is a new sync commit.

## Getting started

```bash
npm install
npm run dev       # local dev server (client-rendered, no prerendering)
npm run build     # full production build, including prerendering (see below)
npm run preview   # serve the production build locally
npm run lint
```

Environment variables (set in Vercel):

| Variable | Used for |
| --- | --- |
| `VITE_GOOGLE_SCRIPT_URL` | Google Apps Script endpoint that stores lead-form submissions |
| `RESEND_API_KEY` | `api/send-email.js` — sends lead notification emails via Resend |

## Project structure

```
api/send-email.js          Vercel function: emails lead-form submissions
public/                    Static files served as-is (robots.txt, llms.txt, og-image.jpg, logo.svg, IndexNow key)
scripts/prerender.mjs      Post-build step: prerenders pages, rebuilds sitemap, generates llms files, pings IndexNow
src/entry-server.tsx       Server-side render entry used only by the prerender step
src/main.tsx               Browser entry: hydrates prerendered HTML (or renders the SPA shell)
src/App.tsx                Routes, homepage and site-wide structured data
src/components/common/SEO.tsx   Per-page title, description, canonical, Open Graph, hreflang and JSON-LD
src/data/services.ts       Content for every service page (~300), merged from src/data/**
src/data/faq.ts            Homepage FAQs (also emitted as FAQPage schema)
src/data/blogs.ts          Blog posts
src/pages/                 Page components (ServicePage renders every /:slug service)
vite.config.ts             Build config and the route list fed to the sitemap plugin
vercel.json                cleanUrls, trailing-slash policy, SPA fallback rewrite
```

## How the build works

`npm run build` runs four steps:

1. `tsc -b` — type-check.
2. `vite build` — client bundle into `dist/`; `vite-plugin-sitemap` writes `dist/sitemap.xml` from the route lists in `vite.config.ts` (this **overwrites** `public/sitemap.xml`).
3. `vite build --ssr src/entry-server.tsx --outDir dist-server` — a Node bundle that can render any route.
4. `node scripts/prerender.mjs`, which:
   - renders every route (sitemap routes, every key in `SERVICES`, every blog post, plus the `/about` and `/contact` aliases) to static HTML with React 19's `prerender`, moving each page's `<title>`/`<meta>`/`<link>` into `<head>`;
   - writes `/foo` as `dist/foo.html` (served at `/foo` via `cleanUrls`) and keeps the untouched shell as `dist/app-shell.html` for every other URL;
   - rebuilds `dist/sitemap.xml`: removes URLs with no real page and duplicate-content service URLs, de-duplicates, and adds real pages the route list missed;
   - generates `dist/llms-full.txt` (full plain-text site content) and appends an "All services" list to `dist/llms.txt`;
   - on production deploys (`VERCEL_ENV=production`) submits the sitemap URLs to IndexNow (Bing, which ChatGPT search uses, and others).

In the browser, `src/main.tsx` hydrates the prerendered markup, so visitors see the same UI as before while crawlers get complete HTML.

### Rules that keep prerendering working

- **Render output must be the same on the server and in the browser.** Read `window`, `localStorage`, dates or screen size inside `useEffect`/event handlers, not during render; otherwise React logs hydration error #418 and re-renders the page.
- **Keep content in the DOM.** For accordions/tabs, prefer `hidden={!open}` over `{open && …}` so crawlers can read collapsed content.
- **Adding a page:** add the `<Route>` in `src/App.tsx`, give the page an `<SEO>` with `title`, `description`, `canonical` (and `schema` if relevant), and add its path to `staticRoutes` in `vite.config.ts`. New entries in `SERVICES` and `DEFAULT_BLOGS` are picked up automatically.
- **Duplicate service content:** if a `SERVICES` key reuses another service's data object (`SERVICES[key].slug !== key`), the page canonicalises to that service and is left out of the sitemap and llms files. Give it its own content (with its own `slug`) to make it indexable.
- **Test locally** with `npm run build && npm run preview`, then open pages with the devtools console open — there should be no React hydration errors.

## SEO / AEO checklist (what's in place)

- Prerendered HTML for every page with a unique title, description, canonical, Open Graph/Twitter tags and `hreflang` (en-IN)
- JSON-LD: WebSite, Organization, LocalBusiness, Service, FAQPage, BreadcrumbList, Article, WebApplication (calculators), AboutPage, ContactPage, Blog, Privacy Policy WebPage
- `robots.txt` explicitly allows search and AI crawlers (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, …)
- `llms.txt` and `llms-full.txt` for AI assistants
- Auto-generated sitemap with only canonical, real pages
- IndexNow on production deploys
- Right-sized WebP/JPEG/PNG images with `width`/`height`, lazy loading below the fold, and high fetch priority for the hero image
- Privacy Policy at `/privacy-policy` (required for Meta/Google lead ads)

## Known issues

- 11 groups of service pages share the same title and 17 service URLs reuse another page's content — they need unique copy.
- `public/og-image.jpg` is the hero image used as a stopgap; replace with a designed 1200×630 image (and update `og:image:width/height` in `index.html`).
- `src/data/services.ts` ships as a ~3 MB JS chunk on service pages (page content is already visible from the prerendered HTML before it loads).
- `npm run lint` reports one pre-existing error in `src/components/common/OtherServiceModal.tsx`.

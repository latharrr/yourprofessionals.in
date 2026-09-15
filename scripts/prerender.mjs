import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const SITE = 'https://www.yourprofessionals.in';
const DEFAULT_OG_IMAGE = `${SITE}/og-image.jpg`;
const INDEXNOW_KEY = 'a7f3c9e1b54d4f2e8c6a0d9b3e7f1c52';
// Router aliases of canonical pages: prerendered so direct visits get HTML, kept out of the sitemap.
const ALIAS_ROUTES = ['/about', '/contact'];

// Storage APIs don't exist at build time; the app's readers fall back to their defaults.
const memoryStorage = { getItem: () => null, setItem: () => {}, removeItem: () => {}, clear: () => {}, key: () => null, length: 0 };
for (const name of ['localStorage', 'sessionStorage']) {
  Object.defineProperty(globalThis, name, { value: memoryStorage, configurable: true, writable: true });
}

const { render, SERVICES, DEFAULT_BLOGS, FAQ_DATA } = await import(
  pathToFileURL(path.join(ROOT, 'dist-server', 'entry-server.js')).href
);

const template = await fs.readFile(path.join(DIST, 'index.html'), 'utf8');
if (!template.includes('<div id="root"></div>')) {
  throw new Error('prerender: empty <div id="root"></div> not found in dist/index.html');
}
// Routes that aren't prerendered (admin, unknown URLs) still need the untouched SPA shell.
await fs.writeFile(path.join(DIST, 'app-shell.html'), template);

const sitemapPath = path.join(DIST, 'sitemap.xml');
const sitemap = await fs.readFile(sitemapPath, 'utf8');
const toRoute = (url) => new URL(url, SITE).pathname.replace(/\/+$/, '') || '/';
const sitemapRoutes = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => toRoute(m[1])));
const routes = [...new Set([
  ...sitemapRoutes,
  ...Object.keys(SERVICES).map((slug) => `/${slug}`),
  ...DEFAULT_BLOGS.map((b) => `/blog/${b.slug}`),
  ...ALIAS_ROUTES,
])];

// Some service URLs reuse another service's content object; ServicePage canonicalises them to that page.
const isDuplicateService = (route) => {
  const key = route.slice(1);
  const service = SERVICES[key];
  return Boolean(service && service.slug !== key && SERVICES[service.slug]);
};

const HOISTABLE_RE = /<title>[\s\S]*?<\/title>|<meta\b[^>]*>|<link\b[^>]*>/g;
const attr = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`, 'i'))?.[1];

function headKey(tag) {
  if (tag.startsWith('<title')) return 'title';
  if (tag.startsWith('<meta')) {
    const name = attr(tag, 'name');
    if (name) return `name:${name}`;
    const property = attr(tag, 'property');
    return property ? `property:${property}` : null;
  }
  const rel = attr(tag, 'rel');
  if (rel === 'canonical') return 'canonical';
  if (rel === 'alternate') return `alternate:${attr(tag, 'hreflang')}`;
  return null;
}

// React 19 emits <title>/<meta>/<link> as hoistables; they belong in <head>, replacing the template defaults.
function buildPage(appHtml) {
  const hoisted = appHtml.match(HOISTABLE_RE) ?? [];
  const body = appHtml.replace(HOISTABLE_RE, '');
  const pageKeys = new Set(hoisted.map(headKey).filter(Boolean));
  const ogImage = hoisted.find((t) => headKey(t) === 'property:og:image');
  const customOgImage = ogImage && attr(ogImage, 'content') !== DEFAULT_OG_IMAGE;

  const head = template.replace(HOISTABLE_RE, (tag) => {
    const key = headKey(tag);
    if (key && pageKeys.has(key)) return '';
    if (customOgImage && (key === 'property:og:image:width' || key === 'property:og:image:height')) return '';
    return tag;
  });

  return head
    .replace('</head>', `${hoisted.join('')}</head>`)
    .replace('<div id="root"></div>', () => `<div id="root">${body}</div>`);
}

const written = [];
const invalid = [];
const failed = [];
for (const route of routes) {
  try {
    const appHtml = await render(route);
    // Unknown service slugs render a <Navigate> to home and no page body.
    if (!appHtml.includes('<main')) {
      invalid.push(route);
      continue;
    }
    // "/foo" -> foo.html, served extensionless by Vercel's cleanUrls (see vercel.json).
    const file = route === '/' ? path.join(DIST, 'index.html') : path.join(DIST, `${route.slice(1)}.html`);
    await fs.mkdir(path.dirname(file), { recursive: true });
    await fs.writeFile(file, buildPage(appHtml));
    written.push(route);
  } catch (err) {
    failed.push(route);
    console.error(`prerender: ${route} failed:`, err);
  }
}

const duplicates = written.filter(isDuplicateService);
console.log(`prerender: ${written.length} pages written, ${invalid.length} non-existent routes skipped, ${failed.length} failed`);
if (invalid.length) console.log(`prerender: dropped from sitemap (no such page): ${invalid.join(', ')}`);
if (duplicates.length) console.log(`prerender: dropped from sitemap (duplicate content, canonicalised): ${duplicates.join(', ')}`);
if (failed.length > routes.length * 0.2) {
  throw new Error(`prerender: ${failed.length}/${routes.length} routes failed`);
}

// Sitemap: only real, canonical pages, once each.
const excluded = new Set([...invalid, ...duplicates, ...ALIAS_ROUTES]);
const seen = new Set();
let cleanedSitemap = sitemap.replace(/<url>[\s\S]*?<\/url>/g, (block) => {
  const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
  const route = loc ? toRoute(loc) : null;
  if (!route || excluded.has(route) || seen.has(route)) return '';
  seen.add(route);
  return block;
});
const lastmod = new Date().toISOString();
const missing = written.filter((r) => !seen.has(r) && !excluded.has(r));
cleanedSitemap = cleanedSitemap.replace(
  '</urlset>',
  `${missing.map((r) => `<url><loc>${SITE}${r}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>`).join('')}</urlset>`,
);
await fs.writeFile(sitemapPath, cleanedSitemap);
const indexable = [...seen, ...missing];
console.log(`sitemap: ${indexable.length} URLs (${missing.length} added)`);

// llms-full.txt: the full plain-text content of the site, for AI assistants and answer engines.
const clean = (s) => String(s ?? '')
  .replace(/<\/(p|li|h[1-6]|div|br)>/gi, '\n')
  .replace(/<[^>]+>/g, '')
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
  .replace(/[ \t]+/g, ' ')
  .replace(/\n\s*\n+/g, '\n')
  .trim();

const lines = [
  '# Your Professionals — full site content',
  '',
  '> Your Professionals (https://www.yourprofessionals.in) is an India-based firm of Chartered Accountants, Company Secretaries and legal professionals providing business registration, GST, income tax, trademark/IPR, licensing and corporate compliance services across India.',
  '',
  'Contact: info@yourprofessionals.in | +91-7011936958',
  'Address: Office No. 204, U-172, Street No. 4, Laxmi Nagar, Block U, Shakarpur, Delhi – 110092, India',
  'Hours: Monday–Saturday, 9:00 AM–7:00 PM IST',
  '',
  '## Frequently asked questions',
  '',
];
for (const category of FAQ_DATA) {
  lines.push(`### ${category.label}`, '');
  for (const item of category.items) lines.push(`Q: ${item.question}`, `A: ${clean(item.answer)}`, '');
}

const indexableSet = new Set(indexable);
const canonicalServices = Object.entries(SERVICES).filter(([slug]) => indexableSet.has(`/${slug}`));
lines.push('## Services', '');
for (const [slug, s] of canonicalServices) {
  lines.push(`### ${clean(s.title)}`, `URL: ${SITE}/${slug}`, clean(s.subtitle), '');
  if (s.overview?.paragraphs?.length) lines.push('Overview:', ...s.overview.paragraphs.map(clean), '');
  if (s.types?.length) lines.push('Types:', ...s.types.map((t) => `- ${clean(t.title)}: ${clean(t.desc)}`), '');
  if (s.eligibility?.length) lines.push('Eligibility:', ...s.eligibility.map((e) => `- ${clean(e)}`), '');
  if (s.documents?.length) lines.push('Documents required:', ...s.documents.map((d) => `- ${clean(d.category)}: ${d.items.map(clean).join('; ')}`), '');
  if (s.process?.length) lines.push('Process:', ...s.process.map((p, i) => `${i + 1}. ${clean(p.title)} — ${clean(p.desc)}${p.time ? ` (${clean(p.time)})` : ''}`), '');
  if (s.fees?.length) lines.push('Fees:', ...s.fees.map((f) => `- ${clean(f.item)}: ${clean(f.cost)}`), '');
  if (s.penalties?.length) lines.push('Penalties:', ...s.penalties.map((p) => `- ${clean(p.violation)}: ${clean(p.penalty)}`), '');
  if (s.compliance?.length) lines.push('Compliance:', ...s.compliance.map((c) => `- ${clean(c.area)}: ${clean(c.details)}`), '');
  if (s.advantages?.length) lines.push('Benefits:', ...s.advantages.map((a) => `- ${clean(a.title)}: ${clean(a.desc)}`), '');
  if (s.faqs?.length) lines.push('FAQs:', ...s.faqs.flatMap((f) => [`Q: ${clean(f.q)}`, `A: ${clean(f.a)}`]), '');
}

lines.push('## Guides', '');
for (const b of DEFAULT_BLOGS) {
  lines.push(`### ${clean(b.title)}`, `URL: ${SITE}/blog/${b.slug}`, clean(b.excerpt), '', clean(b.content), '');
}
await fs.writeFile(path.join(DIST, 'llms-full.txt'), lines.join('\n'));

const llmsPath = path.join(DIST, 'llms.txt');
const llms = await fs.readFile(llmsPath, 'utf8');
await fs.writeFile(llmsPath, `${llms.trimEnd()}\n\n## All services\n\n${canonicalServices
  .map(([slug, s]) => `- [${clean(s.title)}](${SITE}/${slug}): ${clean(s.subtitle)}`)
  .join('\n')}\n`);
console.log(`llms: llms-full.txt and llms.txt generated (${canonicalServices.length} services)`);

// IndexNow notifies Bing (which powers ChatGPT search), Yandex and others about updated URLs.
if (process.env.VERCEL_ENV === 'production') {
  const urlList = indexable.map((r) => `${SITE}${r}`);
  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: 'www.yourprofessionals.in', key: INDEXNOW_KEY, keyLocation: `${SITE}/${INDEXNOW_KEY}.txt`, urlList }),
      signal: AbortSignal.timeout(15000),
    });
    console.log(`indexnow: submitted ${urlList.length} URLs (HTTP ${res.status})`);
  } catch (err) {
    console.warn(`indexnow: submission skipped (${err.message})`);
  }
}

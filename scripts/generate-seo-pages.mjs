import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDirectory = path.join(projectRoot, 'dist');
const seoData = JSON.parse(
  readFileSync(path.join(projectRoot, 'src', 'seo', 'seo-data.json'), 'utf8'),
);
const template = readFileSync(path.join(outputDirectory, 'index.html'), 'utf8');
const siteUrl = seoData.siteUrl;
const personId = `${siteUrl}/#person`;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);
}

function escapeJson(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

function structuredDataFor(page, route) {
  if (page.schema === 'profile') {
    const canonicalUrl = `${siteUrl}${route === '/' ? '/' : route}`;
    return {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      '@id': `${canonicalUrl}#profilepage`,
      url: canonicalUrl,
      name: page.title,
      mainEntity: {
        '@type': 'Person',
        '@id': personId,
        name: seoData.person.name,
        alternateName: seoData.person.alternateName,
        url: `${siteUrl}/`,
        image: seoData.person.image,
        jobTitle: seoData.person.jobTitle,
        description: seoData.person.description,
        sameAs: seoData.person.sameAs,
      },
    };
  }

  if (page.schema === 'softwareApplication') {
    return {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      '@id': `${siteUrl}${route}#application`,
      name: 'Momentum',
      description: page.description,
      url: 'https://momentumz.web.app/',
      applicationCategory: 'ProductivityApplication',
      operatingSystem: 'Web, Android',
      author: { '@id': personId },
    };
  }

  return null;
}

function replaceTag(html, id, tag) {
  const expression = new RegExp(`<[^>]+\\bid="${id}"[^>]*>`);
  if (!expression.test(html)) {
    throw new Error(`Expected SEO element "${id}" was not found in dist/index.html.`);
  }
  return html.replace(expression, tag);
}

function renderLink(link) {
  const external = /^https?:\/\//.test(link.href);
  const target = external ? ' target="_blank" rel="noopener noreferrer"' : '';
  return `<a href="${escapeHtml(link.href)}"${target}>${escapeHtml(link.label)}</a>`;
}

function renderSection(section) {
  const paragraphs = (section.paragraphs ?? [])
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join('');
  const items = section.items?.length
    ? `<ul>${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
    : '';
  const links = section.links?.length
    ? `<nav aria-label="${escapeHtml(section.heading)}">${section.links.map(renderLink).join('')}</nav>`
    : '';
  return `<section><h2>${escapeHtml(section.heading)}</h2>${paragraphs}${items}${links}</section>`;
}

function renderFallback(page, route) {
  const portrait = route === '/'
    ? `<img class="portrait" src="/profile.jpg" alt="Venkatesh Prabhatha Kana">`
    : '';
  const sections = page.sections.map(renderSection).join('');
  return `<div class="seo-fallback">
    <header><a class="brand" href="/">Venkatesh Prabhatha Kana</a>
      <nav aria-label="Main navigation">
        <a href="/">Home</a><a href="/about">About</a><a href="/education">Education</a>
        <a href="/projects">Projects</a><a href="/contact">Contact</a>
      </nav>
    </header>
    <main>${portrait}<h1>${escapeHtml(page.heading)}</h1>
      <p class="intro">${escapeHtml(page.intro)}</p>${sections}
    </main>
    <footer><p>Venkatesh Prabhatha Kana</p>
      <a href="${escapeHtml(seoData.person.sameAs[0])}">LinkedIn</a>
      <a href="${escapeHtml(seoData.person.sameAs[1])}">GitHub</a>
    </footer>
  </div>`;
}

function renderStyles() {
  return `<style id="seo-fallback-styles">
    .seo-fallback{min-height:100vh;background:radial-gradient(ellipse at top,#172554 0,#0b1120 55%);color:#e5e7eb;font:16px/1.65 system-ui,-apple-system,"Segoe UI",sans-serif;padding:24px clamp(20px,6vw,88px)}
    .seo-fallback header,.seo-fallback footer{max-width:1120px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;gap:24px;flex-wrap:wrap}
    .seo-fallback main{max-width:900px;margin:80px auto}
    .seo-fallback h1{font-size:clamp(2.4rem,6vw,4.4rem);line-height:1.1;color:#fff}
    .seo-fallback h2{font-size:1.5rem;color:#bfdbfe;margin-bottom:8px}
    .seo-fallback p,.seo-fallback li{color:#cbd5e1}
    .seo-fallback section{margin:40px 0;padding:24px;border:1px solid #334155;border-radius:18px;background:#111c31}
    .seo-fallback nav,.seo-fallback section nav{display:flex;gap:16px;flex-wrap:wrap}
    .seo-fallback a{color:#67e8f9;text-underline-offset:4px}
    .seo-fallback .brand{font-weight:700;color:#fff;text-decoration:none}
    .seo-fallback .intro{font-size:1.2rem;max-width:760px}
    .seo-fallback .portrait{width:112px;height:112px;object-fit:cover;border-radius:50%}
    @media(max-width:600px){.seo-fallback main{margin:48px auto}.seo-fallback section{padding:18px}}
  </style>`;
}

function buildHtml(page, route) {
  const canonicalUrl = `${siteUrl}${route === '/' ? '/' : route}`;
  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`);
  html = replaceTag(
    html,
    'seo-description',
    `<meta id="seo-description" name="description" content="${escapeHtml(page.description)}">`,
  );
  html = replaceTag(html, 'seo-robots', '<meta id="seo-robots" name="robots" content="index,follow">');
  html = replaceTag(
    html,
    'seo-og-title',
    `<meta id="seo-og-title" property="og:title" content="${escapeHtml(page.title)}">`,
  );
  html = replaceTag(
    html,
    'seo-og-description',
    `<meta id="seo-og-description" property="og:description" content="${escapeHtml(page.description)}">`,
  );
  html = replaceTag(html, 'seo-og-type', '<meta id="seo-og-type" property="og:type" content="website">');
  html = replaceTag(
    html,
    'seo-og-url',
    `<meta id="seo-og-url" property="og:url" content="${canonicalUrl}">`,
  );
  html = replaceTag(
    html,
    'seo-og-image',
    `<meta id="seo-og-image" property="og:image" content="${seoData.person.image}">`,
  );
  html = replaceTag(
    html,
    'seo-twitter-title',
    `<meta id="seo-twitter-title" name="twitter:title" content="${escapeHtml(page.title)}">`,
  );
  html = replaceTag(
    html,
    'seo-twitter-description',
    `<meta id="seo-twitter-description" name="twitter:description" content="${escapeHtml(page.description)}">`,
  );
  html = replaceTag(
    html,
    'seo-twitter-image',
    `<meta id="seo-twitter-image" name="twitter:image" content="${seoData.person.image}">`,
  );
  html = replaceTag(
    html,
    'seo-canonical',
    `<link id="seo-canonical" rel="canonical" href="${canonicalUrl}">`,
  );

  const structuredData = structuredDataFor(page, route);
  const script = `<script id="structured-data" type="application/ld+json">${structuredData ? escapeJson(structuredData) : ''}</script>`;
  html = html.replace(/<script id="structured-data" type="application\/ld\+json"><\/script>/, script);
  if (!html.includes(script)) {
    throw new Error(`Could not render structured data for route "${route}".`);
  }

  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${renderFallback(page, route)}</div>`,
  );
  html = html.replace('</head>', `${renderStyles()}\n  </head>`);
  return html;
}

const routes = Object.keys(seoData.pages);
const canonicalUrls = routes.map((route) => `${siteUrl}${route === '/' ? '/' : route}`);
if (new Set(canonicalUrls).size !== canonicalUrls.length) {
  throw new Error('SEO page configuration contains duplicate canonical URLs.');
}
if (!existsSync(path.join(outputDirectory, 'robots.txt'))) {
  throw new Error('Expected public/robots.txt to be copied to dist/robots.txt.');
}

for (const route of routes) {
  const page = seoData.pages[route];
  if (!page.title || !page.description || !page.heading || !page.intro) {
    throw new Error(`SEO content is incomplete for route "${route}".`);
  }

  const destination = route === '/'
    ? path.join(outputDirectory, 'index.html')
    : path.join(outputDirectory, route.slice(1), 'index.html');
  mkdirSync(path.dirname(destination), { recursive: true });
  writeFileSync(destination, buildHtml(page, route));
  console.log(`Generated ${path.relative(projectRoot, destination)}`);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${canonicalUrls.map((url) => `  <url><loc>${escapeHtml(url)}</loc></url>`).join('\n')}\n</urlset>\n`;
writeFileSync(path.join(outputDirectory, 'sitemap.xml'), sitemap);

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import seoData from './seo-data.json';

type SeoPage = (typeof seoData.pages)[keyof typeof seoData.pages];

const siteUrl = seoData.siteUrl;
const personId = `${siteUrl}/#person`;
const profileImage = seoData.person.image;

function getStructuredData(page: SeoPage, path: string) {
  if ('schema' in page && page.schema === 'profile') {
    return {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      '@id': `${siteUrl}${path === '/' ? '/' : path}#profilepage`,
      url: `${siteUrl}${path === '/' ? '/' : path}`,
      name: page.title,
      mainEntity: {
        '@type': 'Person',
        '@id': personId,
        name: seoData.person.name,
        alternateName: seoData.person.alternateName,
        url: `${siteUrl}/`,
        image: profileImage,
        jobTitle: seoData.person.jobTitle,
        description: seoData.person.description,
        sameAs: seoData.person.sameAs,
      },
    };
  }

  if ('schema' in page && page.schema === 'softwareApplication') {
    return {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      '@id': `${siteUrl}${path}#application`,
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

function setMeta(id: string, content: string) {
  const element = document.getElementById(id);
  if (element instanceof HTMLMetaElement) {
    element.content = content;
  }
}

const SeoHead = () => {
  const { pathname } = useLocation();
  const path = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  const page = seoData.pages[path as keyof typeof seoData.pages] as SeoPage | undefined;

  useEffect(() => {
    if (!page) {
      document.title = 'Page not found | Venkatesh Prabhatha Kana';
      setMeta('seo-robots', 'noindex,nofollow');
      document.getElementById('seo-canonical')?.remove();
      document.getElementById('structured-data')?.replaceChildren();
      return;
    }

    const canonicalUrl = `${siteUrl}${path === '/' ? '/' : path}`;
    document.title = page.title;
    setMeta('seo-description', page.description);
    setMeta('seo-robots', 'index,follow');
    setMeta('seo-og-title', page.title);
    setMeta('seo-og-description', page.description);
    setMeta('seo-og-type', 'website');
    setMeta('seo-og-url', canonicalUrl);
    setMeta('seo-og-image', profileImage);
    setMeta('seo-twitter-title', page.title);
    setMeta('seo-twitter-description', page.description);
    setMeta('seo-twitter-image', profileImage);

    const existingCanonical = document.getElementById('seo-canonical');
    let canonicalLink: HTMLLinkElement;
    if (existingCanonical instanceof HTMLLinkElement) {
      canonicalLink = existingCanonical;
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.id = 'seo-canonical';
      canonicalLink.rel = 'canonical';
      document.head.append(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

    const structuredData = getStructuredData(page, path);
    const script = document.getElementById('structured-data');
    if (script) {
      script.textContent = structuredData ? JSON.stringify(structuredData) : '';
    }
  }, [page, path]);

  return null;
};

export default SeoHead;

import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: object;
}

const setMeta = (selector: string, attr: string, value: string) => {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    const parts = selector.match(/\[([^=]+)="([^"]+)"\]/);
    if (parts) el.setAttribute(parts[1], parts[2]);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

const setLink = (rel: string, href: string) => {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const setJsonLd = (data: object) => {
  const id = 'page-jsonld';
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('script');
    el.setAttribute('type', 'application/ld+json');
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
};

export const useSEO = (
  title: string,
  description: string,
  canonical?: string,
  ogImage?: string,
  jsonLd?: object
) => {
  useEffect(() => {
    const baseUrl = 'https://credifide.com';
    const resolvedCanonical = canonical ? `${baseUrl}${canonical}` : `${baseUrl}${window.location.pathname}`;
    const resolvedImage = ogImage || `${baseUrl}/og-image.png`;

    // ── Title
    document.title = title;

    // ── Basic Meta
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[name="robots"]', 'content', 'index, follow');
    setMeta('meta[name="author"]', 'content', 'Credifide');

    // ── Canonical
    setLink('canonical', resolvedCanonical);

    // ── Open Graph
    setMeta('meta[property="og:type"]', 'content', 'website');
    setMeta('meta[property="og:site_name"]', 'content', 'Credifide');
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', resolvedCanonical);
    setMeta('meta[property="og:image"]', 'content', resolvedImage);
    setMeta('meta[property="og:image:width"]', 'content', '1200');
    setMeta('meta[property="og:image:height"]', 'content', '630');
    setMeta('meta[property="og:locale"]', 'content', 'en_US');

    // ── Twitter Card
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', resolvedImage);

    // ── JSON-LD Structured Data
    if (jsonLd) {
      setJsonLd(jsonLd);
    }

    // ── GA4 pageview on SPA navigation
    if ((window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: title,
        page_location: resolvedCanonical,
        page_path: window.location.pathname,
      });
    }
  }, [title, description, canonical, ogImage, jsonLd]);
};

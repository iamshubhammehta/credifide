import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  const location = useLocation();

  useEffect(() => {
    // Set title
    document.title = `${title} | Credifide Healthcare`;

    // Helper to set/update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Standard SEO
    setMetaTag('description', description);
    if (keywords) setMetaTag('keywords', keywords);
    
    // Open Graph / Social SEO
    setMetaTag('og:title', `${title} | Credifide Healthcare`, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:url', `https://credifide.com${location.pathname}`, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', `${title} | Credifide Healthcare`);
    setMetaTag('twitter:description', description);

  }, [title, description, keywords, location.pathname]);

  return null;
};

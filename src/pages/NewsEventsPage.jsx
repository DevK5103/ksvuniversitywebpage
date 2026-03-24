import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NewsHero from '../components/news/NewsHero';
import NewsGrid from '../components/news/NewsGrid';
import PubNewsSection from '../components/news/PubNewsSection';

export default function NewsEventsPage() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="bg-ksv-white min-h-screen">
      <NewsHero />
      <NewsGrid />
      {/* <PubNewsSection /> */}
    </div>
  );
}

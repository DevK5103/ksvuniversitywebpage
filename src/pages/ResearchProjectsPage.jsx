import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ResearchProjectsHero from '../components/research/ResearchProjectsHero';
import ResearchProjectsContent from '../components/research/ResearchProjectsContent';

export default function ResearchProjectsPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="bg-ksv-white min-h-screen">
      <ResearchProjectsHero />
      <ResearchProjectsContent />
    </div>
  );
}

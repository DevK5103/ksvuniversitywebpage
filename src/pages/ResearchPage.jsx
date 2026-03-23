import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ResearchHero from '../components/research/ResearchHero';
import ResearchResourcesGrid from '../components/research/ResearchResourcesGrid';
import SupercomputerFacility from '../components/research/SupercomputerFacility';

export default function ResearchPage() {
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
      <ResearchHero />
      <ResearchResourcesGrid />
      <SupercomputerFacility />
    </div>
  );
}

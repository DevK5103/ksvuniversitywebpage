import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutHero from '../components/about/AboutHero';
import TrustSection from '../components/about/TrustSection';
import UniversitySection from '../components/about/UniversitySection';
import PresidentDesk from '../components/about/PresidentDesk';
import Management from '../components/about/Management';
import UniversityActs from '../components/about/UniversityActs';

export default function AboutPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        // Small delay to ensure rendering and avoid header overlap
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="bg-ksv-white">
      <AboutHero />
      <TrustSection />
      <UniversitySection />
      <PresidentDesk />
      <Management />
      <UniversityActs />
    </div>
  );
}

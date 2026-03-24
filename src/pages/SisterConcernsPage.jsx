import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SisterConcernsHero from '../components/sister-concerns/SisterConcernsHero';
import ConcernsGrid from '../components/sister-concerns/ConcernsGrid';

export default function SisterConcernsPage() {
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
      <SisterConcernsHero />
      <ConcernsGrid />
    </div>
  );
}

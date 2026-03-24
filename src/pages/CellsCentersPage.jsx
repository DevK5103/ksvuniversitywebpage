import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CellsHero from '../components/cells/CellsHero';
import CellsGrid from '../components/cells/CellsGrid';

export default function CellsCentersPage() {
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
      <CellsHero />
      <CellsGrid />
    </div>
  );
}

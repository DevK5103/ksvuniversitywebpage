import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FundedProjectsHero from '../components/research/FundedProjectsHero';
import FundedProjectsContent from '../components/research/FundedProjectsContent';

export default function FundedProjectsPage() {
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
      <FundedProjectsHero />
      <FundedProjectsContent />
    </div>
  );
}

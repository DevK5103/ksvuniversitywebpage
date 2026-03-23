import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AcademicsHero from '../components/academics/AcademicsHero';
import FeesBanner from '../components/academics/FeesBanner';
import ProgrammesFilter from '../components/academics/ProgrammesFilter';
import SyllabusSection from '../components/academics/SyllabusSection';
import NEPSection from '../components/academics/NEPSection';
import DetailedAdmissionPolicy from '../components/academics/DetailedAdmissionPolicy';

export default function AcademicsPage() {
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
    <div className="bg-ksv-white">
      <AcademicsHero />
      <FeesBanner />
      <ProgrammesFilter />
      <SyllabusSection />
      <NEPSection />
      <DetailedAdmissionPolicy />
    </div>
  );
}

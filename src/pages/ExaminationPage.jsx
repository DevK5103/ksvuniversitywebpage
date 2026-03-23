import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ExamHero from '../components/examination/ExamHero';
import ExamQuickLinks from '../components/examination/ExamQuickLinks';
import DegreeCertificate from '../components/examination/DegreeCertificate';
import PhDSchedules from '../components/examination/PhDSchedules';

export default function ExaminationPage() {
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
      <ExamHero />
      <ExamQuickLinks />
      <DegreeCertificate />
      <PhDSchedules />
    </div>
  );
}

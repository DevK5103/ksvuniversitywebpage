import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RecruitmentHero from '../components/recruitment/RecruitmentHero';
import JobPortalEmbed from '../components/recruitment/JobPortalEmbed';

export default function RecruitmentPage() {
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
      <RecruitmentHero />
      <JobPortalEmbed />
    </div>
  );
}

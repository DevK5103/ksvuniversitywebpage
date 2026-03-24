import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import JournalsHero from '../components/journals/JournalsHero';
import JournalsTabs from '../components/journals/JournalsTabs';

export default function JournalsPage() {
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
    <div className="bg-ksv-white min-h-screen border-b-[20px] border-ksv-primary">
      <JournalsHero />
      <JournalsTabs />
    </div>
  );
}

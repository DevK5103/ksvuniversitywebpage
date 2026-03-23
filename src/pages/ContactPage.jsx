import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';

export default function ContactPage() {
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
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </div>
  );
}

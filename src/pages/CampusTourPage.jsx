import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TourVideo from '../components/campus-tour/TourVideo';
import TourGallery from '../components/campus-tour/TourGallery';

export default function CampusTourPage() {
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
      <TourVideo />
      <TourGallery />
    </div>
  );
}

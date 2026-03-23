import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeSeoMap = {
  '/': { title: 'Kadi Sarva Vishwavidyalaya | Kar Bhala Hoga Bhala', desc: 'Welcome to KSV University, the leading hub for education, research, and holistic development in Gujarat.' },
  '/about': { title: 'About Us | KSV', desc: 'Learn about KSV University, our history, SVKM Trust, and the visionary leadership guiding our mission.' },
  '/academics': { title: 'Academics & Programmes | KSV', desc: 'Explore UG, PG, and PhD programmes offered across all KSV institutes with our comprehensive academic syllabus.' },
  '/campuses': { title: 'Our Campuses | KSV', desc: 'Discover KSV institutes spread across the vibrant Kadi and Gandhinagar campuses.' },
  '/sister-concerns': { title: 'Sister Concerns | KSV', desc: 'Explore the sister institutions operating under the prestigious SVKM trust.' },
  '/cells-centers': { title: 'Cells & Centers | KSV', desc: 'Engage with our dedicated university cells promoting research, women empowerment, anti-ragging, and more.' },
  '/research': { title: 'Research & Innovation | KSV', desc: 'Dive into cutting-edge research at KSV featuring modern labs, e-resources, and Supercomputer Param Shavak.' },
  '/examination': { title: 'Examination Portal | KSV', desc: 'Access your exam schedules, results, and apply for degree certificates securely through the KSV exam portal.' },
  '/sustainability': { title: 'Sustainability & SDGs | KSV', desc: 'Review our university commitment to the UN Sustainable Development Goals and campus green initiatives.' },
  '/journals': { title: 'Journals & Conferences | KSV', desc: 'Browse the KSV Online E-Journal and remain updated on prominent upcoming national & international conferences.' },
  '/campus-tour': { title: 'Campus Tour | KSV', desc: 'Take a virtual walk through the beautiful and well-equipped KSV university campuses.' },
  '/news-events': { title: 'News & Events | KSV', desc: 'Catch up on the latest university news, cultural events, and important academic announcements.' },
  '/contact': { title: 'Contact Us | KSV', desc: 'Get in touch with the KSV administrative block or global alumni office.' },
  '/recruitment': { title: 'Careers & Recruitment | KSV', desc: 'Join the dynamic KSV team. Apply exclusively through our official online job portal.' },
};

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    // Determine current path (strip hash / query)
    const currentPath = location.pathname;
    
    // Fallback SEO
    let title = 'Kadi Sarva Vishwavidyalaya';
    let desc = 'Empowering minds through quality education and research in Gujarat, India.';

    if (routeSeoMap[currentPath]) {
      title = routeSeoMap[currentPath].title;
      desc = routeSeoMap[currentPath].desc;
    } else {
      // Catch dynamic sub-routes by prefix if necessary
      const match = Object.keys(routeSeoMap).find(key => key !== '/' && currentPath.startsWith(key));
      if (match) {
        title = routeSeoMap[match].title;
        desc = routeSeoMap[match].desc;
      }
    }

    // Update standard DOM Elements
    document.title = title;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = desc;

    // Update OpenGraph Attributes (for Facebook, LinkedIn, etc)
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = title;

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = desc;

  }, [location]);

  return null; // Side-effect only component
}

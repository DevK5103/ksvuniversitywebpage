import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const footerLinks = [
    {
      title: "ABOUT UNIVERSITY",
      links: [
        { name: "ABOUT", path: "/about" },
        { name: "UNIVERSITY POLICIES", path: "/about#policies" },
        { name: "VISION & MISSION", path: "/about#vision" },
        { name: "GOVERNANCE", path: "/about#governance" },
        { name: "RESEARCH", path: "/research" },
        { name: "INTERNATIONALIZATION", path: "/international" },
        { name: "NIRF (IQAC)", path: "/cells-centers#iqac" },
        { name: "KSV BLOGS", path: "/blogs" },
      ]
    },
    {
      title: "ACADEMICS",
      links: [
        { name: "OUR SCHOOLS", path: "/campuses" },
        { name: "COURSES", path: "/academics/courses" },
        { name: "SCHOOL OF LAW", path: "/campuses#law" },
        { name: "FACULTY AND STAFF", path: "/academics/faculty" },
        { name: "INTERNSHIPS", path: "/placements" },
        { name: "LIBRARY", path: "/campuses#library" },
        { name: "GUEST SPEAKERS", path: "/events" },
        { name: "CENTRE OF CONTINUING EDUCATION", path: "/cells-centers" },
        { name: "SYSTEM OF EVALUATION", path: "/examination" },
      ]
    },
    {
      title: "EMERGENCY INFO",
      links: [
        { name: "CENTRE FOR COUNSELING SERVICES", path: "/cells-centers#counseling" },
        { name: "WOMEN'S CELL", path: "/cells-centers#womens-cell" },
        { name: "ANTI RAGGING", path: "/cells-centers#anti-ragging" },
        { name: "STUDENT GRIEVANCE REDRESSAL", path: "/cells-centers#grievance" },
      ]
    },
    {
      title: "FACTSHEET",
      links: [
        { name: "MANDATORY DISCLOSURES", path: "/disclosures" },
        { name: "RECOGNITIONS", path: "/about#recognitions" },
        { name: "INSTITUTIONAL DISTINCTIVENESS", path: "/about#distinctiveness" },
        { name: "UNIVERSITY ACT", path: "/about#act" },
      ]
    },
    {
      title: "QUICK LINKS",
      links: [
        { name: "CAREERS", path: "/recruitment" },
        { name: "PLACEMENTS", path: "/placements" },
        { name: "STUDENT ACTIVITIES", path: "/campus-tour" },
        { name: "TENDER NOTICE", path: "/tenders" },
        { name: "CONTACT US", path: "/contact" },
        { name: "TERMS OF USE", path: "/terms" },
        { name: "SITEMAP", path: "/sitemap" },
        { name: "SCREEN READER ACCESS", path: "/accessibility" },
      ]
    }
  ];

  return (
    <footer className="font-body">
      {/* Top Links Section */}
      <div className="bg-ksv-dark text-white pt-16 pb-12 border-t-4 border-ksv-secondary">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">
            
            {footerLinks.map((section, idx) => (
              <div key={idx}>
                <h4 className="font-heading font-bold text-xs tracking-[0.1em] uppercase mb-6 inline-block border-b border-white pb-2 lg:pb-3 w-max">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link 
                        to={link.path} 
                        className="text-[11px] text-[#cccccc] tracking-wider uppercase hover:text-white transition-colors block leading-snug font-medium"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Bottom Brand Section */}
      <div className="bg-ksv-primary text-white py-8">
        <div className="max-w-[1400px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo & Info */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
            <div className="bg-white rounded-full p-2 w-20 h-20 flex items-center justify-center shrink-0">
              <img src="/logos/ksv-logo.svg" alt="KSV Logo" className="w-16 h-16 object-contain" />
            </div>
            <div className="mt-2">
              <h3 className="font-display font-medium text-lg lg:text-xl tracking-wider uppercase leading-tight">
                KADI SARVA<br />
                VISHWAVIDYALAYA
              </h3>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/80 mt-1">
                GANDHINAGAR, GUJARAT
              </p>
              <p className="text-[10px] tracking-wider mt-2 opacity-70">
                Established vide Act 21 of 2007 (Govt. of Gujarat)
              </p>
            </div>
          </div>

          {/* Socials & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center rounded-sm">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center rounded-sm">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center rounded-sm">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center rounded-sm">
                <Youtube size={20} />
              </a>
            </div>
            
            <p className="text-xs text-white/80 tracking-wide font-medium">
              &copy; {new Date().getFullYear()} KSV. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

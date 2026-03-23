import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const megaMenuData = {
  Programs: {
    path: '/academics',
    sections: [
      {
        title: 'Under Graduate',
        links: [
          { name: 'B.E (Engineering)', path: '/academics#ug' },
          { name: 'B.Sc / B.PT / B.Sc Nursing', path: '/academics#ug' },
          { name: 'B.Pharm', path: '/academics#ug' },
          { name: 'BBA / BCA / B.Ed / B.Com', path: '/academics#ug' },
        ]
      },
      {
        title: 'Academic Resources',
        links: [
          { name: 'Syllabus: UG', path: '/academics#syllabus' },
          { name: 'Syllabus: PG', path: '/academics#syllabus' },
          { name: 'Certificate Programs', path: '/academics#certificate' },
          { name: 'Centers & Cells', path: '/cells-centers' },
        ]
      }
    ]
  },
  Campuses: {
    path: '/campuses',
    sections: [
      {
        title: 'Gandhinagar Campus',
        links: [
          { name: 'LDRP Institute of Technology', path: '/campuses#gandhinagar' },
          { name: 'Chanchalben Pharamcy College', path: '/campuses#gandhinagar' },
          { name: 'View All 14 Institutes →', path: '/campuses#gandhinagar' },
        ]
      },
      {
        title: 'Kadi Campus',
        links: [
          { name: 'Pramukh Swami Science College', path: '/campuses#kadi' },
          { name: 'B.P. College of Business Admin', path: '/campuses#kadi' },
          { name: 'View All 10 Institutes →', path: '/campuses#kadi' },
        ]
      }
    ]
  },
  'Sister Concerns': {
    path: '/sister-concerns',
    sections: [
      {
        title: 'Established Institutions',
        links: [
          { name: 'VPMP Polytechnic', path: '/sister-concerns' },
          { name: 'Uma Arts and Nathiba Mahila Arts College', path: '/sister-concerns' },
          { name: 'Pramukh Swami Science and H.D. Patel Arts College', path: '/sister-concerns' },
        ]
      }
    ]
  },
  'Cells & Center': {
    path: '/cells-centers',
    sections: [
      {
        title: 'Administrative & Welfare',
        links: [
          { name: 'DIR & IQAC', path: '/cells-centers' },
          { name: 'WEC & WDC', path: '/cells-centers' },
          { name: 'Anti-Ragging Cell', path: '/cells-centers' },
        ]
      },
      {
        title: 'Student Life',
        links: [
          { name: 'Sports Council', path: '/cells-centers' },
          { name: 'LAKSH & Social Responsibility', path: '/cells-centers' },
          { name: 'Vijaya Performing Arts', path: '/cells-centers' },
        ]
      }
    ]
  }
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [activeMobileAccordion, setActiveMobileAccordion] = useState(null);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled || activeMegaMenu ? 'bg-ksv-white/95 backdrop-blur shadow-md py-2' : 'bg-ksv-white py-4'
      }`}
      onMouseLeave={() => setActiveMegaMenu(null)}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex items-center group relative z-10" onClick={() => setActiveMegaMenu(null)}>
          <img 
            src="/ksvfullname.png" 
            alt="Kadi Sarva Vishwavidyalaya Logo" 
            className="h-12 md:h-16 w-auto object-contain group-hover:scale-[1.02] transition-transform"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 relative z-10">
          <Link to="/" className={`font-heading text-sm font-semibold transition-colors ${location.pathname === '/' ? 'text-ksv-primary' : 'text-ksv-dark hover:text-ksv-secondary'}`}>
            Home
          </Link>
          <Link to="/about" className={`font-heading text-sm font-semibold transition-colors ${location.pathname.startsWith('/about') ? 'text-ksv-primary' : 'text-ksv-dark hover:text-ksv-secondary'}`}>
            About Us
          </Link>

          {Object.entries(megaMenuData).map(([key, data]) => {
            const isActiveRoute = location.pathname.startsWith(data.path);
            const isMenuOpen = activeMegaMenu === key;
            
            return (
              <div 
                key={key} 
                className="relative py-6"
                onMouseEnter={() => setActiveMegaMenu(key)}
              >
                <Link 
                  to={data.path}
                  className={`flex items-center gap-1 font-heading text-sm font-semibold transition-colors ${
                    isActiveRoute || isMenuOpen ? 'text-ksv-primary' : 'text-ksv-dark hover:text-ksv-secondary'
                  }`}
                >
                  {key}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
                </Link>
                
                {/* Active Indicator Line */}
                <div className={`absolute bottom-4 left-0 h-0.5 bg-ksv-secondary transition-all duration-300 ${
                  isActiveRoute ? 'w-full' : (isMenuOpen ? 'w-full' : 'w-0')
                }`}></div>
              </div>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-ksv-primary hover:text-ksv-secondary transition-colors relative z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Mega Menu Dropdown */}
      <AnimatePresence>
        {activeMegaMenu && (
          <motion.div 
            initial={{ opacity: 0, scaleY: 0.95, y: -10 }}
            animate={{ opacity: 1, scaleY: 1, y: 0 }}
            exit={{ opacity: 0, scaleY: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="hidden lg:block absolute top-[100%] left-0 w-full bg-ksv-white border-t border-ksv-border shadow-xl origin-top"
          >
            <div className="max-w-[1280px] mx-auto px-6 py-8">
              <div className="flex gap-16">
                <div className="w-1/3">
                  <h2 className="text-3xl font-display font-bold text-ksv-primary mb-4">{activeMegaMenu}</h2>
                  <p className="font-body text-ksv-dark/70 mb-6">Explore the diverse opportunities and dedicated facilities provided by Kadi Sarva Vishwavidyalaya in the field of {activeMegaMenu.toLowerCase()}.</p>
                  <Link 
                    to={megaMenuData[activeMegaMenu].path}
                    className="inline-flex items-center gap-2 text-ksv-secondary hover:text-ksv-primary font-heading font-semibold transition-colors"
                  >
                    Explore full overview <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
                
                <div className="flex-1 grid grid-cols-2 gap-8 border-l border-ksv-border pl-16">
                  {megaMenuData[activeMegaMenu].sections.map((section, idx) => (
                    <div key={idx}>
                      <h3 className="font-heading font-bold text-ksv-dark mb-4 pb-2 border-b border-ksv-border/50 uppercase text-xs tracking-wider">
                        {section.title}
                      </h3>
                      <ul className="space-y-3">
                        {section.links.map((link, lIdx) => (
                          <li key={lIdx}>
                            <Link 
                              to={link.path}
                              onClick={() => setActiveMegaMenu(null)}
                              className="font-body text-ksv-dark/80 hover:text-ksv-primary text-sm transition-colors block"
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
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 z-40 bg-ksv-white pt-24 px-6 h-screen overflow-y-auto w-full"
          >
            <nav className="flex flex-col gap-2 pb-20">
              <Link 
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between py-4 font-heading text-xl font-semibold border-b border-ksv-border ${location.pathname === '/' ? 'text-ksv-secondary' : 'text-ksv-dark'}`}
              >
                Home
              </Link>
              <Link 
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between py-4 font-heading text-xl font-semibold border-b border-ksv-border ${location.pathname.startsWith('/about') ? 'text-ksv-secondary' : 'text-ksv-dark'}`}
              >
                About Us
              </Link>
              
              {Object.entries(megaMenuData).map(([key, data]) => {
                const isActiveRoute = location.pathname.startsWith(data.path);
                const isAccordionOpen = activeMobileAccordion === key;
                
                return (
                  <div key={key} className="border-b border-ksv-border">
                    <button 
                      className={`w-full flex items-center justify-between py-4 font-heading text-xl font-semibold transition-colors ${
                        isActiveRoute ? 'text-ksv-secondary' : 'text-ksv-dark'
                      }`}
                      onClick={() => setActiveMobileAccordion(isAccordionOpen ? null : key)}
                    >
                      {key}
                      <ChevronDown size={20} className={`transition-transform ${isAccordionOpen ? 'rotate-180 text-ksv-primary' : 'text-ksv-dark/50'}`} />
                    </button>
                    
                    <AnimatePresence>
                      {isAccordionOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="bg-ksv-light/50 rounded-lg p-4 mb-4 flex flex-col gap-4">
                            <Link 
                              to={data.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="font-heading font-semibold text-ksv-primary mb-2 inline-block pt-1"
                            >
                              {key} Overview &rarr;
                            </Link>
                            
                            {data.sections.map((section, idx) => (
                              <div key={idx} className="mb-2">
                                <h4 className="font-heading font-bold text-ksv-dark/60 text-xs tracking-wider uppercase mb-2">
                                  {section.title}
                                </h4>
                                <ul className="flex flex-col gap-2 border-l-2 border-ksv-border pl-3">
                                  {section.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                      <Link 
                                        to={link.path}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="font-body text-ksv-dark/80 text-sm py-1 block active:text-ksv-primary"
                                      >
                                        {link.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, Type } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const handleScaleText = (direction) => {
    const root = document.documentElement;
    let currentScale = parseFloat(root.dataset.fontScale || '1');
    if (direction === 'up' && currentScale < 1.3) currentScale += 0.1;
    if (direction === 'down' && currentScale > 0.8) currentScale -= 0.1;
    if (direction === 'reset') currentScale = 1;
    
    root.dataset.fontScale = currentScale;
    root.style.fontSize = `${currentScale * 100}%`;
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const searchSuggestions = [
    { text: 'About KSV & SVKM Trust', path: '/about', keywords: ['history', 'president', 'management', 'trust', 'svkm', 'about', 'vision', 'mission'] },
    { text: 'Undergraduate Programmes (B.E, B.Sc, BBA, BCA)', path: '/academics', keywords: ['ug', 'undergraduate', 'bachelor', 'b.e', 'b.sc', 'bba', 'bca', 'b.pharm', 'b.com', 'b.ed'] },
    { text: 'Postgraduate Programmes (M.E, M.Sc, MBA, MCA)', path: '/academics', keywords: ['pg', 'postgraduate', 'master', 'm.e', 'm.sc', 'mba', 'mca', 'm.pharm', 'm.com', 'm.ed'] },
    { text: 'PhD Admissions & Research Portal', path: '/research', keywords: ['phd', 'doctorate', 'research', 'thesis', 'supervisor', 'admission', 'fellowship'] },
    { text: 'Examination Timetable & Results', path: '/examination', keywords: ['exam', 'results', 'timetable', 'schedule', 'marks', 'grading', 'circulars', 'hall ticket'] },
    { text: 'Sustainability & SDG Goals', path: '/sustainability', keywords: ['sdg', 'sustainability', 'green campus', 'poverty', 'education', 'environment', 'goals'] },
    { text: 'Campus Tour & Facilities', path: '/campus-tour', keywords: ['tour', 'facility', 'library', 'hostel', 'canteen', 'sports', 'infrastructure'] },
    { text: 'Sister Institutions', path: '/sister-concerns', keywords: ['sister', 'institutes', 'affiliated', 'colleges', 'schools', 'svkm'] },
    { text: 'News, Events & Announcements', path: '/news-events', keywords: ['news', 'event', 'announcement', 'seminar', 'workshop', 'conference', 'symposium'] },
    { text: 'Recruitment & Job Openings', path: '/recruitment', keywords: ['job', 'career', 'recruitment', 'vacancy', 'faculty', 'hiring', 'apply'] },
    { text: 'Contact & Directory', path: '/contact', keywords: ['contact', 'phone', 'email', 'address', 'location', 'directory', 'helpdesk'] },
    { text: 'Cells & Centers', path: '/cells-centers', keywords: ['cell', 'center', 'iqac', 'wdc', 'anti-ragging', 'sports', 'nss', 'ncc'] },
    { text: 'Journals & Publications', path: '/journals', keywords: ['journal', 'publication', 'paper', 'article', 'research', 'volume'] }
  ];

  const searchLower = searchQuery.toLowerCase().trim();
  const filteredSuggestions = searchLower.length > 1 
    ? searchSuggestions.filter(s => 
        s.text.toLowerCase().includes(searchLower) || 
        s.keywords.some(k => k.includes(searchLower))
      ).slice(0, 6)
    : [];

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
            src="/logos/ksv-logo-horizontal.png" 
            alt="KSV University" 
            className="h-10 md:h-12 w-auto object-contain"
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
              {/* Added Accessibility & Search for Mobile */}
              <div className="flex items-center justify-between py-4 border-b border-ksv-border">
                <div className="flex items-center gap-3">
                  <button onClick={() => handleScaleText('reset')} className="text-ksv-dark p-2 bg-ksv-light rounded-md flex items-center justify-center">
                    <Type size={18} />
                  </button>
                  <button onClick={() => handleScaleText('up')} className="text-ksv-dark font-bold border border-ksv-border p-1 w-9 h-9 flex items-center justify-center rounded-md">A+</button>
                  <button onClick={() => handleScaleText('down')} className="text-ksv-dark font-bold border border-ksv-border p-1 w-9 h-9 flex items-center justify-center rounded-md">A-</button>
                </div>
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 bg-ksv-primary text-ksv-white rounded-md flex items-center justify-center"
                >
                  <Search size={20} />
                </button>
              </div>

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

      {/* Full Screen Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-ksv-dark/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="absolute inset-0" onClick={() => setIsSearchOpen(false)}></div>
          
          <div className="relative z-10 w-full max-w-2xl bg-ksv-white rounded-radius-lg p-6 shadow-2xl">
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-4 right-4 text-ksv-dark/50 hover:text-ksv-primary transition-colors"
            >
              <X size={24} />
            </button>
            
            <h3 className="font-display font-bold text-2xl text-ksv-primary mb-6">Search KSV Portal</h3>
            
            <form onSubmit={handleSearchSubmit} className="relative">
              <input 
                type="text" 
                placeholder="Search courses, circulars, contacts..."
                className="w-full bg-ksv-light border-2 border-ksv-border rounded-radius-md py-4 pl-12 pr-4 text-lg font-body focus:outline-none focus:border-ksv-secondary transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ksv-dark/40" size={24} />
              
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-ksv-primary text-ksv-white px-4 py-2 rounded-radius-sm font-heading font-semibold hover:bg-ksv-secondary transition-colors"
              >
                Search
              </button>
            </form>

            {/* Suggestions Dropdown */}
            {filteredSuggestions.length > 0 && (
              <div className="absolute left-6 right-6 top-[150px] bg-ksv-white rounded-b-radius-md shadow-xl border-x border-b border-ksv-border overflow-hidden z-20">
                {filteredSuggestions.map((suggestion, idx) => (
                  <button 
                    key={idx}
                    type="button"
                    onClick={() => {
                      setIsSearchOpen(false);
                      navigate(suggestion.path);
                      setSearchQuery('');
                    }}
                    className="w-full flex items-center gap-3 px-6 py-4 hover:bg-ksv-light text-left border-b border-ksv-light last:border-0 transition-colors group"
                  >
                    <Search size={16} className="text-ksv-dark/30 group-hover:text-ksv-secondary shrink-0" />
                    <span className="font-body text-ksv-dark/80 font-medium group-hover:text-ksv-primary flex-1">{suggestion.text}</span>
                    <span className="text-ksv-secondary text-lg opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                  </button>
                ))}
              </div>
            )}
            
            <div className={`mt-6 flex flex-wrap gap-2 transition-opacity duration-300 ${filteredSuggestions.length > 0 ? 'opacity-20 pointer-events-none' : 'opacity-100'}`}>
              <span className="text-sm font-body text-ksv-dark/60 font-medium">Quick Links:</span>
              <button onClick={() => setSearchQuery('Admissions 2024')} className="text-sm font-body text-ksv-primary hover:text-ksv-secondary hover:underline">Admissions</button>
              <span className="text-sm text-ksv-dark/40">•</span>
              <button onClick={() => setSearchQuery('Examination Timetable')} className="text-sm font-body text-ksv-primary hover:text-ksv-secondary hover:underline">Exam Timetable</button>
              <span className="text-sm text-ksv-dark/40">•</span>
              <button onClick={() => setSearchQuery('PhD Syllabus')} className="text-sm font-body text-ksv-primary hover:text-ksv-secondary hover:underline">PhD Syllabus</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

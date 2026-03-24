import React, { useState } from 'react';
import { Search, Type, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function TopBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
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

  const links = [
    { name: 'SDG', path: '/sustainability' },
    { name: 'Webmail', path: 'https://webmail.ksv.ac.in', external: true },
    { name: 'Examination', path: '/examination' },
    { name: 'NEP', path: '/academics' },
    { name: 'Journals', path: '/journals' },
    { name: 'Conferences', path: '/journals' },
    { name: 'Campus Tour', path: '/campus-tour' },
    { name: 'Funded Projects', path: '/research' },
    { name: 'Research Projects', path: '/research' },
    { name: 'Recruitment', path: '/recruitment' }
  ];

  return (
    <>
      <div className="bg-ksv-primary text-ksv-white font-heading text-xs py-2 hidden lg:block">
        <div className="max-w-[1280px] mx-auto px-6 flex justify-between items-center">
          {/* Left: Quick Links */}
          <div className="flex items-center gap-4 flex-wrap">
            {links.map((link, idx) => (
              <React.Fragment key={link.name}>
                {link.external ? (
                  <a href={link.path} target="_blank" rel="noopener noreferrer" className="hover:text-ksv-secondary transition-colors">
                    {link.name}
                  </a>
                ) : (
                  <Link to={link.path} className="hover:text-ksv-secondary transition-colors">
                    {link.name}
                  </Link>
                )}
                {idx < links.length - 1 && <span className="opacity-40">|</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4 ml-6">
            <div className="flex items-center gap-2">
              <span className="sr-only">Accessibility</span>
              <button onClick={() => handleScaleText('reset')} title="Reset Text Size" className="hover:text-ksv-secondary transition-colors cursor-pointer mr-1">
                <Type size={14} />
              </button>
              <button onClick={() => handleScaleText('up')} title="Increase Text Size" className="font-bold border border-ksv-white/30 rounded px-1.5 py-0.5 hover:border-ksv-secondary hover:text-ksv-secondary transition-colors cursor-pointer text-[10px]">
                A+
              </button>
              <button onClick={() => handleScaleText('down')} title="Decrease Text Size" className="font-bold border border-ksv-white/30 rounded px-1.5 py-0.5 hover:border-ksv-secondary hover:text-ksv-secondary transition-colors cursor-pointer text-[10px]">
                A-
              </button>
            </div>
            <div className="w-px h-4 bg-ksv-white/30"></div>
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="hover:text-ksv-secondary transition-colors cursor-pointer" 
              aria-label="Search"
            >
              <Search size={16} />
            </button>
          </div>
        </div>
      </div>

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
    </>
  );
}

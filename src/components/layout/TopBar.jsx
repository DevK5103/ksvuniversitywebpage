import React from 'react';
import { Search, Type } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TopBar() {
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
          <button className="flex items-center gap-1 hover:text-ksv-secondary transition-colors group">
            <span className="sr-only">Accessibility</span>
            <Type size={14} />
            <span className="font-bold border border-ksv-white/30 rounded px-1 group-hover:border-ksv-secondary">A+</span>
            <span className="font-bold border border-ksv-white/30 rounded px-1 group-hover:border-ksv-secondary">A-</span>
          </button>
          <div className="w-px h-4 bg-ksv-white/30"></div>
          <button className="hover:text-ksv-secondary transition-colors" aria-label="Search">
            <Search size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

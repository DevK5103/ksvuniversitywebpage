import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Campuses', path: '/campuses' },
  { name: 'Sister Concerns', path: '/sister-concerns' },
  { name: 'Cells & Center', path: '/cells-centers' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-ksv-white/95 backdrop-blur shadow-md py-2' : 'bg-ksv-white py-4'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-ksv-primary text-ksv-white rounded-full flex items-center justify-center font-display font-bold text-xl group-hover:scale-105 transition-transform">
            KSV
          </div>
          <div>
            <h1 className="font-display font-bold text-ksv-primary md:text-xl leading-tight">
              Kadi Sarva <br className="hidden md:block" /> Vishwavidyalaya
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map(item => {
            const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
            return (
              <div key={item.name} className="relative group">
                <Link 
                  to={item.path}
                  className={`flex items-center gap-1 font-heading text-sm font-semibold transition-colors ${
                    isActive ? 'text-ksv-primary' : 'text-ksv-dark hover:text-ksv-secondary'
                  }`}
                >
                  {item.name}
                  {item.name !== 'Home' && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                </Link>
                {/* Active Indicator */}
                <div className={`absolute -bottom-2 left-0 h-0.5 bg-ksv-secondary transition-all ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
              </div>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-ksv-primary hover:text-ksv-secondary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-ksv-white pt-24 px-6 h-screen overflow-y-auto w-full slide-in-from-right-full animate-in duration-300">
          <nav className="flex flex-col gap-6">
            {navItems.map(item => (
              <Link 
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-heading text-xl font-semibold border-b border-ksv-border pb-4 ${
                  location.pathname === item.path ? 'text-ksv-secondary' : 'text-ksv-dark'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

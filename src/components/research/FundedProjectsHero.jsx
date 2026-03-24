import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FundedProjectsHero() {
  return (
    <div className="relative pt-40 md:pt-48 pb-20 w-full bg-ksv-primary overflow-hidden min-h-[400px] flex items-center">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="research-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#research-grid)" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-ksv-secondary/20 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full">
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 text-sm md:text-base font-body text-ksv-white/80 mb-8"
        >
          <Link to="/" className="hover:text-ksv-secondary transition-colors flex items-center gap-1">
            <Home size={16} />
            <span>Home</span>
          </Link>
          <ChevronRight size={16} className="text-ksv-white/50" />
          <Link to="/research" className="hover:text-ksv-secondary transition-colors">
            Research
          </Link>
          <ChevronRight size={16} className="text-ksv-white/50" />
          <span className="text-ksv-secondary font-medium">Funded Projects</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/3">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-display font-bold text-ksv-white mb-6 leading-tight"
            >
              Funded Projects / <span className="text-ksv-secondary">Research Grants</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-lg text-ksv-white/80 font-body leading-relaxed mb-8 max-w-xl"
            >
              Discover the impact of our funded research projects and how KSV faculty are advancing knowledge across disciplines.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SisterConcernsHero() {
  return (
    <div className="relative h-[400px] w-full bg-ksv-primary overflow-hidden flex items-center justify-center">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ksv-secondary/20 rounded-full blur-[100px]"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-[1280px] mx-auto px-6 w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-display font-bold text-ksv-white mb-6"
        >
          Sister Concerns
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-sm md:text-base font-body text-ksv-white/80"
        >
          <Link to="/" className="hover:text-ksv-secondary transition-colors flex items-center gap-1">
            <Home size={16} />
            <span>Home</span>
          </Link>
          <ChevronRight size={16} className="text-ksv-white/50" />
          <span className="text-ksv-secondary font-medium">Sister Concerns</span>
        </motion.div>
      </div>
    </div>
  );
}

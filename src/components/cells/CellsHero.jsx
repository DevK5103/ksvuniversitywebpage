import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CellsHero() {
  return (
    <div className="relative h-[400px] w-full bg-ksv-primary overflow-hidden flex items-center justify-center">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <path d="M25 0 L50 14.4 L50 43.4 L25 58 L0 43.4 L0 14.4 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-ksv-secondary/20 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-[1280px] mx-auto px-6 w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-display font-bold text-ksv-white mb-6"
        >
          University Cells & Centers
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
          <span className="text-ksv-secondary font-medium">Cells & Centers</span>
        </motion.div>
      </div>
    </div>
  );
}

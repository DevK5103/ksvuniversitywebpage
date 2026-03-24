import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SdgHero() {
  return (
    <div className="relative pt-40 md:pt-48 pb-24 w-full bg-[#1e4a3b] overflow-hidden min-h-[500px] flex items-center">
      {/* Background Leaves/Nature SVG Abstract */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaf-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 10 C 40 10, 50 20, 50 30 C 50 40, 40 50, 30 50 C 20 50, 10 40, 10 30 C 10 20, 20 10, 30 10 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
        </svg>
      </div>
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-[#4ade80]/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 p-4 rounded-full inline-flex self-center mb-6 text-[#4ade80]"
        >
          <Leaf size={48} />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
        >
          Sustainability & Environment
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/80 font-body leading-relaxed mb-8 max-w-3xl mx-auto"
        >
          Aligned with the United Nations Sustainable Development Goals (SDGs), KSV is deeply committed to embedding ecological consciousness, social equity, and quality education into our institutional DNA.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-sm md:text-base font-body text-white/70"
        >
          <Link to="/" className="hover:text-[#4ade80] transition-colors flex items-center gap-1">
            <Home size={16} />
            <span>Home</span>
          </Link>
          <ChevronRight size={16} className="text-white/40" />
          <span className="text-[#4ade80] font-medium">Sustainability</span>
        </motion.div>
      </div>
    </div>
  );
}

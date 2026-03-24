import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NewsHero() {
  return (
    <div className="relative pt-40 md:pt-48 pb-24 w-full bg-gradient-to-br from-ksv-primary to-ksv-dark overflow-hidden min-h-[400px] flex items-center">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-ksv-secondary/10 rounded-full blur-[80px] translate-x-1/4 translate-y-1/4"></div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-ksv-white/10 p-4 rounded-full inline-flex mb-6 text-ksv-secondary"
        >
          <Newspaper size={48} />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl font-display font-bold text-ksv-white mb-6"
        >
          News & Events
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-sm md:text-base font-body text-ksv-white/80"
        >
          <Link to="/" className="hover:text-ksv-secondary transition-colors flex items-center gap-1">
            <Home size={16} /><span>Home</span>
          </Link>
          <ChevronRight size={16} className="text-ksv-white/50" />
          <span className="text-ksv-secondary font-medium">News & Events</span>
        </motion.div>
      </div>
    </div>
  );
}

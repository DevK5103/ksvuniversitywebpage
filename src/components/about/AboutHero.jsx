import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutHero() {
  return (
    <div className="relative h-[400px] w-full bg-ksv-dark overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1920')` }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-[1280px] mx-auto px-6 w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-display font-bold text-ksv-white mb-6"
        >
          About KSV
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
          <span className="text-ksv-secondary font-medium">About Us</span>
        </motion.div>
      </div>
    </div>
  );
}

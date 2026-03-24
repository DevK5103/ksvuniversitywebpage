import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AcademicsHero() {
  return (
    <div className="relative h-[400px] w-full bg-ksv-primary overflow-hidden flex items-center justify-center">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-[1280px] mx-auto px-6 w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-display font-bold text-ksv-white mb-6"
        >
          Academics at KSV
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
          <span className="text-ksv-secondary font-medium">Academics</span>
        </motion.div>
      </div>
    </div>
  );
}

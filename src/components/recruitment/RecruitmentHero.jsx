import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RecruitmentHero() {
  return (
    <div className="relative pt-40 md:pt-48 pb-24 w-full bg-ksv-primary overflow-hidden min-h-[400px] flex items-center">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-ksv-white/10 p-4 rounded-full inline-flex self-center mb-6 text-ksv-secondary border border-ksv-white/20"
        >
          <Briefcase size={40} />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-display font-bold text-ksv-white mb-6"
        >
          Careers at KSV
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-ksv-white/80 font-body text-lg max-w-2xl mx-auto mb-8"
        >
          Join our distinguished faculty and dedicated administrative team. We are continually seeking passionate educators and professionals to further our mission of academic excellence.
        </motion.p>
        
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
          <span className="text-ksv-secondary font-medium">Recruitment</span>
        </motion.div>
      </div>
    </div>
  );
}

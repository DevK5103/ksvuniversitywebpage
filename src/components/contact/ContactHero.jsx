import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home, Phone, Mail, MapPin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactHero() {
  return (
    <div className="relative pt-40 md:pt-48 pb-24 w-full bg-ksv-dark overflow-hidden min-h-[400px] flex items-center">
      <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-ksv-dark via-ksv-dark/80 to-transparent"></div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-display font-bold text-ksv-white mb-6"
        >
          Contact Us
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
          <span className="text-ksv-secondary font-medium">Contact</span>
        </motion.div>
      </div>
    </div>
  );
}

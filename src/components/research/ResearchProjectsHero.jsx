import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home, GraduationCap, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ResearchProjectsHero() {
  return (
    <div className="relative pt-40 md:pt-48 pb-20 w-full bg-ksv-primary overflow-hidden min-h-[500px] flex items-center">
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
          <span className="text-ksv-secondary font-medium">Research Projects</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-display font-bold text-ksv-white mb-6 leading-tight"
            >
              Research at <span className="text-ksv-secondary">KSV</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-lg text-ksv-white/80 font-body leading-relaxed mb-8 max-w-xl"
            >
              Explore our ongoing and completed multidisciplinary research projects, publications, and expansive research ecosystem.
            </motion.p>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="bg-ksv-white/10 backdrop-blur-md border border-ksv-white/20 p-6 rounded-radius-md text-center">
                <div className="bg-ksv-secondary/20 w-12 h-12 rounded-full flex items-center justify-center text-ksv-secondary mx-auto mb-4">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-3xl font-display font-bold text-ksv-white mb-1">17</h3>
                <p className="text-sm font-heading font-medium text-ksv-white/70 uppercase tracking-wider">PhD Disciplines</p>
              </div>
              
              <div className="bg-ksv-white/10 backdrop-blur-md border border-ksv-white/20 p-6 rounded-radius-md text-center">
                <div className="bg-ksv-secondary/20 w-12 h-12 rounded-full flex items-center justify-center text-ksv-secondary mx-auto mb-4">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-3xl font-display font-bold text-ksv-white mb-1">10</h3>
                <p className="text-sm font-heading font-medium text-ksv-white/70 uppercase tracking-wider">Faculties</p>
              </div>

              <div className="bg-ksv-white/10 backdrop-blur-md border border-ksv-white/20 p-6 rounded-radius-md text-center">
                <div className="bg-ksv-secondary/20 w-12 h-12 rounded-full flex items-center justify-center text-ksv-secondary mx-auto mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-3xl font-display font-bold text-ksv-white mb-1">18k+</h3>
                <p className="text-sm font-heading font-medium text-ksv-white/70 uppercase tracking-wider">Research Students</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CampusMapOverview from '../components/campuses/CampusMapOverview';
import GandhinagarTab from '../components/campuses/GandhinagarTab';
import KadiTab from '../components/campuses/KadiTab';

export default function CampusesPage() {
  const [activeTab, setActiveTab] = useState('gandhinagar');
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      if (hash.includes('kadi')) setActiveTab('kadi');
      if (hash.includes('gandhinagar')) setActiveTab('gandhinagar');
      
      const element = document.getElementById('institutes-grid');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="bg-ksv-light min-h-screen">
      <CampusMapOverview />
      
      <section id="institutes-grid" className="py-24 max-w-[1280px] mx-auto px-6 scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-ksv-primary mb-4">Constituent Institutes</h2>
          <div className="w-24 h-1 bg-ksv-secondary mx-auto rounded-full mb-6"></div>
          <p className="font-body text-ksv-dark/70 max-w-2xl mx-auto">
            Explore our network of 24 institutions dedicated to multidisciplinary education.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('gandhinagar')}
            className={`px-8 py-4 rounded-full font-heading font-bold text-lg transition-all ${
              activeTab === 'gandhinagar' 
                ? 'bg-ksv-primary text-ksv-white shadow-hover scale-105' 
                : 'bg-ksv-white border border-ksv-border text-ksv-dark/60 hover:border-ksv-primary hover:text-ksv-primary'
            }`}
          >
            Gandhinagar Campus (14)
          </button>
          <button
            onClick={() => setActiveTab('kadi')}
            className={`px-8 py-4 rounded-full font-heading font-bold text-lg transition-all ${
              activeTab === 'kadi' 
                ? 'bg-ksv-primary text-ksv-white shadow-hover scale-105' 
                : 'bg-ksv-white border border-ksv-border text-ksv-dark/60 hover:border-ksv-primary hover:text-ksv-primary'
            }`}
          >
            Kadi Campus (10)
          </button>
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === 'gandhinagar' && (
              <motion.div
                key="gandhinagar"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <GandhinagarTab />
              </motion.div>
            )}
            
            {activeTab === 'kadi' && (
              <motion.div
                key="kadi"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <KadiTab />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

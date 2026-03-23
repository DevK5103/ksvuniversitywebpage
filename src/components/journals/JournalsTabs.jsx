import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Presentation, BookMarked, ArrowRight } from 'lucide-react';

const conferences = [
  { title: "KSV Gyanotsav 2024", url: "http://ncmata.ksv.ac.in", date: "August 2024" },
  { title: "COMCON-2024", url: "http://comcon.ksv.ac.in", date: "September 2024" },
  { title: "NCFN-2024", url: "http://ncfn.ksv.ac.in", date: "October 2024" },
  { title: "TranscendenceXenz", url: "#", date: "November 2024", type: "PDF" }
];

export default function JournalsTabs() {
  const [activeTab, setActiveTab] = useState('journals');

  return (
    <section className="py-24 bg-ksv-light min-h-[500px]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Tab Switcher */}
        <div className="flex flex-wrap border-b border-ksv-border mb-12">
          <button
            onClick={() => setActiveTab('journals')}
            className={`py-4 px-8 font-heading font-bold text-lg md:text-xl transition-all relative ${
              activeTab === 'journals' ? 'text-ksv-primary' : 'text-ksv-dark/50 hover:text-ksv-primary/70'
            }`}
          >
            <span className="flex items-center gap-2"><BookMarked size={20} /> E-Journals</span>
            {activeTab === 'journals' && (
              <motion.div layoutId="journals-indicator" className="absolute bottom-0 left-0 right-0 h-1 bg-ksv-secondary rounded-t-md" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('conferences')}
            className={`py-4 px-8 font-heading font-bold text-lg md:text-xl transition-all relative ${
              activeTab === 'conferences' ? 'text-ksv-primary' : 'text-ksv-dark/50 hover:text-ksv-primary/70'
            }`}
          >
            <span className="flex items-center gap-2"><Presentation size={20} /> Conferences</span>
            {activeTab === 'conferences' && (
              <motion.div layoutId="journals-indicator" className="absolute bottom-0 left-0 right-0 h-1 bg-ksv-secondary rounded-t-md" />
            )}
          </button>
        </div>

        {/* Content Area */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            
            {activeTab === 'journals' && (
              <motion.div
                key="journals"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl"
              >
                <div className="bg-ksv-white rounded-radius-lg border border-ksv-border p-8 md:p-12 shadow-card hover:shadow-hover transition-all">
                  <div className="bg-ksv-primary w-16 h-16 rounded flex items-center justify-center text-ksv-white mb-6 shadow-md">
                    <span className="font-display font-bold text-2xl">J</span>
                  </div>
                  <h2 className="text-3xl font-display font-bold text-ksv-primary mb-4">
                    JEMS - KSV Online E-Journal
                  </h2>
                  <p className="font-body text-ksv-dark/70 text-lg leading-relaxed mb-8">
                    The KSV Online E-Journal of Engineering, Management, Science, and Humanities (JEMS) is a premier open-access platform dedicated to publishing high-quality, peer-reviewed research across multidisciplinary fields.
                  </p>
                  <a 
                    href="http://jems.ksv.ac.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-ksv-secondary hover:bg-ksv-primary text-ksv-dark hover:text-ksv-white font-heading font-bold px-8 py-4 rounded-full transition-colors shadow-sm"
                  >
                    Visit JEMS Portal <ExternalLink size={18} />
                  </a>
                </div>
              </motion.div>
            )}

            {activeTab === 'conferences' && (
              <motion.div
                key="conferences"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {conferences.map((conf, idx) => (
                    <a 
                      key={idx}
                      href={conf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-ksv-white border-l-4 border-ksv-primary p-8 rounded-r-radius-md shadow-card hover:shadow-hover hover:-translate-y-1 transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-xs font-heading font-semibold text-ksv-secondary uppercase tracking-widest mb-2 block">
                          {conf.date}
                        </span>
                        <h3 className="font-heading font-bold text-2xl text-ksv-dark group-hover:text-ksv-primary transition-colors mb-4 leading-tight">
                          {conf.title}
                        </h3>
                      </div>
                      <span className="text-sm font-semibold text-ksv-dark/50 group-hover:text-ksv-secondary transition-colors flex items-center gap-1 mt-4">
                        View Details {conf.type === 'PDF' ? '(PDF)' : <ArrowRight size={16} />}
                      </span>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

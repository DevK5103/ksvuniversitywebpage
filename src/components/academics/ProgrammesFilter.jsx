import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Award, FileText, ChevronRight } from 'lucide-react';

const tabs = [
  { id: 'research', label: 'Research' },
  { id: 'pg', label: 'Post Graduate' },
  { id: 'ug', label: 'Under Graduate' },
  { id: 'cert', label: 'Certificate' }
];

const pgPrograms = [
  "M.E. (Master of Engineering)", "M.Sc. (Science)", "MBA (Business Administration)",
  "MCA (Computer Applications)", "M.Com. (Commerce)", "M.Sc. Nursing",
  "MSW (Social Work)", "M.Pharm (Pharmacy)", "Pharm.D", "PGDJMC"
];

const ugPrograms = [
  "B.E. (Engineering - 4 Years)", "B.Sc. (Science - 3 Years)", "B.PT. (Physiotherapy - 4.5 Years)",
  "B.Sc. Nursing (4 Years)", "B.Pharm (Pharmacy - 4 Years)", "BBA (Business - 3 Years)",
  "BCA (Computer - 3 Years)", "B.Ed. (Education - 2 Years)", "B.Com. (Commerce - 3 Years)"
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4 }
  })
};

export default function ProgrammesFilter() {
  const [activeTab, setActiveTab] = useState('pg');

  return (
    <section className="py-24 bg-ksv-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-ksv-primary mb-4">Academic Programmes</h2>
          <div className="w-24 h-1 bg-ksv-secondary mx-auto rounded-full mb-6"></div>
          <p className="font-body text-ksv-dark/70 max-w-2xl mx-auto">
            Explore diverse disciplines designed to foster innovation, skill development, and professional excellence.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-heading font-semibold text-sm transition-all ${
                activeTab === tab.id 
                  ? 'bg-ksv-primary text-ksv-white shadow-md' 
                  : 'bg-ksv-light text-ksv-dark/60 hover:bg-ksv-border/50 hover:text-ksv-dark'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'research' && (
              <motion.div 
                key="research"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="bg-ksv-light p-8 rounded-radius-lg border border-ksv-border group hover:border-ksv-secondary transition-colors">
                  <div className="w-14 h-14 bg-ksv-white rounded-full flex items-center justify-center mb-6 shadow-sm text-ksv-primary">
                    <BookOpen size={28} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-ksv-dark mb-4">Ph.D. Programme</h3>
                  <p className="font-body text-ksv-dark/70 mb-6 leading-relaxed">
                    KSV offers doctoral research programs across 17 distinct disciplines. Admissions are strictly based on the KSV Ph.D. Entrance Examination followed by RDC interview.
                  </p>
                  <ul className="space-y-3 font-body text-sm mb-8 text-ksv-dark/80">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-ksv-secondary"></div> Exemptions available for NET/SLET/GATE candidates</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-ksv-secondary"></div> Research Proposal formatting guidelines provided</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-ksv-secondary"></div> Expert supervisor allocation</li>
                  </ul>
                  <button className="text-sm font-heading font-bold text-ksv-secondary hover:text-ksv-primary flex items-center gap-2 transition-colors">
                    Apply for Ph.D. 2025 <ChevronRight size={16} />
                  </button>
                </div>
                
                <div className="bg-ksv-light p-8 rounded-radius-lg border border-ksv-border hover:bg-ksv-white hover:shadow-card transition-all flex flex-col justify-center items-center text-center">
                  <div className="w-16 h-16 bg-ksv-primary/10 rounded-full flex items-center justify-center mb-4 text-ksv-primary">
                    <Award size={32} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-ksv-dark mb-2">M.Phil. Programme</h3>
                  <p className="font-body text-ksv-dark/70 mb-6">Advanced research-based master's degree preparing scholars for academia and doctoral research.</p>
                  <button className="border border-ksv-primary text-ksv-primary hover:bg-ksv-primary hover:text-ksv-white px-6 py-2 rounded-full font-heading font-semibold text-sm transition-colors">
                    View Details
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === 'pg' && (
              <motion.div 
                key="pg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {pgPrograms.map((prog, i) => (
                  <motion.div 
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    key={i} 
                    className="bg-ksv-white border border-ksv-border/60 hover:border-ksv-secondary hover:shadow-md rounded-radius-md p-6 transition-all group cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="font-heading font-bold text-lg text-ksv-primary mb-2 group-hover:text-ksv-secondary transition-colors">{prog}</h4>
                      <p className="font-body text-sm text-ksv-dark/60">Post Graduate Degree Program</p>
                    </div>
                    <div className="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-semibold uppercase tracking-wider text-ksv-dark/40">2 Years</span>
                      <ChevronRight size={18} className="text-ksv-secondary" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'ug' && (
              <motion.div 
                key="ug"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {ugPrograms.map((prog, i) => (
                  <motion.div 
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    key={i} 
                    className="bg-ksv-white border border-ksv-border/60 hover:border-ksv-primary hover:shadow-md rounded-radius-md p-6 transition-all group cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="font-heading font-bold text-lg text-ksv-dark mb-2 group-hover:text-ksv-primary transition-colors">{prog.split(' - ')[0]}</h4>
                      <p className="font-body text-sm text-ksv-dark/60">{prog.includes('-') ? prog.split('(')[1].replace(')', '') : 'Undergraduate Program'}</p>
                    </div>
                    <div className="mt-6 flex items-center justify-between transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                      <span className="text-xs font-semibold text-ksv-primary hover:underline">View Institutes</span>
                      <ChevronRight size={18} className="text-ksv-primary" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'cert' && (
              <motion.div 
                key="cert"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-ksv-accent/50 p-12 rounded-radius-lg border border-ksv-accent text-center"
              >
                <FileText size={48} className="mx-auto text-ksv-primary/40 mb-6" />
                <h3 className="text-2xl font-display font-bold text-ksv-primary mb-4">Certificate & Diploma Programs</h3>
                <p className="font-body text-ksv-dark/70 mb-8 max-w-xl mx-auto">
                  Enhance your skill set with specialized short-term courses and diplomas designed for industry readiness.
                </p>
                <button className="bg-ksv-primary text-ksv-white px-8 py-3 rounded-full font-heading font-semibold hover:bg-ksv-dark transition-colors">
                  Download Course Catalog
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

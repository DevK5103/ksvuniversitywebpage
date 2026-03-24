import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const programmes = {
  Research: [
    { name: 'Ph.D. Programme', duration: 'Min. 3 Years', highlights: '17 Disciplines, Govt. Fellowships', link: '/academics/research/phd' },
    { name: 'M.Phil.', duration: '1 Year', highlights: 'Advanced Research Methodologies', link: '/academics/research/mphil' }
  ],
  Postgraduate: [
    { name: 'Master of Engineering (M.E.)', duration: '2 Years', highlights: 'AI, CAD/CAM, Thermal, Software', link: '/academics/pg/me' },
    { name: 'Master of Business Administration', duration: '2 Years', highlights: 'Dual Specialization, 100% Placement Assistant', link: '/academics/pg/mba' },
    { name: 'Master of Computer Applications', duration: '2 Years', highlights: 'Industry-aligned IT Curriculum', link: '/academics/pg/mca' },
    { name: 'M.Sc. Nursing', duration: '2 Years', highlights: 'Medical/Surgical, Psychiatric, Paediatric', link: '/academics/pg/msc-nursing' }
  ],
  Undergraduate: [
    { name: 'Bachelor of Engineering (B.E.)', duration: '4 Years', highlights: 'Computer, IT, Mechanical, Civil, Auto', link: '/academics/ug/be' },
    { name: 'Bachelor of Pharmacy (B.Pharm)', duration: '4 Years', highlights: 'PCI Approved, State-of-art Labs', link: '/academics/ug/bpharm' },
    { name: 'Bachelor of Business Admin (BBA)', duration: '3 Years', highlights: 'Case-study based learning', link: '/academics/ug/bba' },
    { name: 'Bachelor of Physiotherapy (B.PT)', duration: '4.5 Years', highlights: 'Clinical Training at top hospitals', link: '/academics/ug/bpt' },
    { name: 'B.Sc. Nursing', duration: '4 Years', highlights: 'INC Approved, 100% Clinical Exposure', link: '/academics/ug/bsc-nursing' },
    { name: 'Bachelor of Education (B.Ed.)', duration: '2 Years', highlights: 'NCTE Approved, English & Gujarati Med.', link: '/academics/ug/bed' }
  ],
  Certificate: [
    { name: 'Data Science Certification', duration: '6 Months', highlights: 'Python, ML, Big Data', link: '/academics/certificate' },
    { name: 'Digital Marketing', duration: '3 Months', highlights: 'SEO, SEM, Social Media Strategy', link: '/academics/certificate' }
  ]
};

export default function AcademicTabs() {
  const [activeTab, setActiveTab] = useState('Undergraduate');

  return (
    <div className="py-24 bg-ksv-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-ksv-primary mb-4">Academic Programmes</h2>
          <div className="w-24 h-1 bg-ksv-secondary mx-auto rounded-full mb-8"></div>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:flex justify-center flex-wrap gap-2 mb-12">
          {Object.keys(programmes).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-radius-pill font-heading font-semibold transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-ksv-primary text-ksv-white shadow-md' 
                  : 'bg-ksv-accent/50 text-ksv-dark hover:bg-ksv-accent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Mobile Accordion / Select (simplified as stacked buttons) */}
        <div className="md:hidden flex flex-col gap-2 mb-8">
          {Object.keys(programmes).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 rounded-radius-md font-heading font-semibold text-left transition-all ${
                activeTab === tab 
                  ? 'bg-ksv-primary text-ksv-white shadow-md' 
                  : 'bg-ksv-accent/50 text-ksv-dark'
              }`}
            >
              {tab} Programmes
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {programmes[activeTab].map((prog, idx) => (
                <div 
                  key={prog.name}
                  className="bg-ksv-white border border-ksv-border p-8 rounded-radius-md shadow-sm hover:shadow-shadow-card transition-all group flex flex-col"
                >
                  <div className="mb-6 flex-grow">
                    <h3 className="text-xl font-heading font-bold text-ksv-primary mb-4 group-hover:text-ksv-secondary transition-colors">
                      {prog.name}
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-ksv-dark/70 font-body text-sm">
                        <Clock size={16} className="text-ksv-secondary" />
                        <span>{prog.duration}</span>
                      </div>
                      <div className="flex items-start gap-3 text-ksv-dark/70 font-body text-sm">
                        <Award size={16} className="text-ksv-secondary shrink-0 mt-0.5" />
                        <span>{prog.highlights}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link 
                    to={prog.link}
                    className="inline-flex items-center gap-2 text-ksv-primary font-heading font-semibold mt-auto group/btn hover:text-ksv-secondary transition-colors"
                  >
                    Learn More
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/academics"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-ksv-primary hover:bg-ksv-primary hover:text-ksv-white text-ksv-primary font-heading font-semibold px-8 py-3 rounded-radius-md transition-all"
          >
            View All Programmes
          </Link>
        </div>

      </div>
    </div>
  );
}

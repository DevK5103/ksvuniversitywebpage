import React from 'react';
import { motion } from 'framer-motion';
import { FileStack, Download } from 'lucide-react';

const ugSyllabus = [
  { name: "B.E. Computer Engineering", code: "UG-CE-2024", size: "2.4 MB" },
  { name: "B.Sc. Mathematics", code: "UG-SM-2024", size: "1.8 MB" },
  { name: "B.Pharm Detailed Syllabus", code: "UG-PH-2024", size: "3.1 MB" },
];

const bcomNepSyllabus = [
  { sem: "Semester I", code: "BCOM-NEP-S1", active: true },
  { sem: "Semester II", code: "BCOM-NEP-S2", active: true },
  { sem: "Semester III", code: "BCOM-NEP-S3", active: false },
  { sem: "Semester IV", code: "BCOM-NEP-S4", active: false },
  { sem: "Semester V", code: "BCOM-NEP-S5", active: false },
  { sem: "Semester VI", code: "BCOM-NEP-S6", active: false },
];

export default function SyllabusSection() {
  return (
    <section className="py-24 bg-ksv-light border-y border-ksv-border/40">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-ksv-primary mb-4">University Syllabus</h2>
            <div className="w-24 h-1 bg-ksv-secondary rounded-full"></div>
          </div>
          <p className="font-body text-ksv-dark/70 max-w-md text-right hidden md:block">
            Download the latest, UGC-approved course structures and detailed subject outlines for all programmes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* General Syllabus Column */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h3 className="font-heading font-bold text-2xl text-ksv-dark mb-6 flex items-center gap-3">
                <FileStack className="text-ksv-primary" /> Undergraduate (UG)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ugSyllabus.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-ksv-white border border-ksv-border/50 p-5 rounded-radius-sm hover:border-ksv-secondary hover:shadow-sm transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="font-heading font-semibold text-ksv-dark group-hover:text-ksv-primary transition-colors">{item.name}</h4>
                      <p className="font-body text-xs text-ksv-dark/50 mt-1 uppercase tracking-wider">{item.code}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs font-medium text-ksv-dark/40">{item.size} • PDF</span>
                      <button className="text-ksv-secondary hover:text-ksv-primary p-1 rounded hover:bg-ksv-secondary/10 transition-colors">
                        <Download size={18} />
                      </button>
                    </div>
                  </motion.div>
                ))}
                
                {/* View All Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-ksv-primary/5 border border-dashed border-ksv-primary/30 p-5 rounded-radius-sm hover:bg-ksv-primary hover:border-transparent hover:text-ksv-white transition-all cursor-pointer flex items-center justify-center text-center group"
                >
                  <span className="font-heading font-semibold text-ksv-primary group-hover:text-ksv-white">View Complete UG Syllabus Directory &rarr;</span>
                </motion.div>
              </div>
            </div>
            
            <div>
              <h3 className="font-heading font-bold text-2xl text-ksv-dark mb-6 flex items-center gap-3">
                <FileStack className="text-ksv-primary" /> Postgraduate (PG)
              </h3>
              <button className="w-full sm:w-auto bg-ksv-white border border-ksv-border text-ksv-dark font-heading font-semibold px-6 py-3 rounded-radius-sm hover:border-ksv-primary hover:text-ksv-primary transition-colors shadow-sm">
                Browse PG Syllabus Directory
              </button>
            </div>
          </div>

          {/* Highlight: NEP BCom */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-ksv-primary text-ksv-white rounded-radius-md p-8 shadow-card relative overflow-hidden h-full"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-ksv-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="bg-ksv-secondary text-ksv-dark text-xs font-bold uppercase tracking-widest inline-block px-3 py-1 rounded-sm mb-4">
                Highlighted
              </div>
              
              <h3 className="font-display font-bold text-2xl mb-2">B.Com. (NEP Aligned)</h3>
              <p className="font-body text-ksv-white/70 text-sm mb-8">
                The Bachelor of Commerce curriculum has been fully updated to comply with the National Education Policy 2020 framework.
              </p>

              <div className="space-y-3 relative z-10">
                {bcomNepSyllabus.map((item, idx) => (
                  <div 
                    key={idx}
                    className={`flex items-center justify-between p-3 rounded border ${
                      item.active 
                        ? 'bg-ksv-white border-transparent text-ksv-dark' 
                        : 'bg-ksv-white/5 border-ksv-white/10 text-ksv-white/60'
                    }`}
                  >
                    <span className="font-heading font-semibold text-sm">{item.sem}</span>
                    {item.active ? (
                      <button className="flex items-center gap-2 text-xs font-bold text-ksv-secondary hover:text-ksv-primary transition-colors">
                        <Download size={14} /> PDF
                      </button>
                    ) : (
                      <span className="text-xs uppercase tracking-wider">Coming Soon</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

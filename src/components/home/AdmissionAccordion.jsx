import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const policies = [
  {
    target: "Engineering (B.E. & M.E.), Pharmacy, MBA, MCA",
    rules: "Admissions to these professional courses are strictly carried out through the Admission Committee for Professional Courses (ACPC), Government of Gujarat.",
    link: "/academics/admission#acpc"
  },
  {
    target: "Nursing (B.Sc., P.B.B.Sc., GNM, ANM), Physiotherapy (BPT)",
    rules: "Admissions are governed by the Admission Committee for Professional Medical Educational Courses (ACPMEC), Gujarat.",
    link: "/academics/admission#acpmec"
  },
  {
    target: "BBA, BCA, B.Sc., B.Com., B.Ed., M.Sc., M.Com.",
    rules: "Admissions are done directly at the institute level based on merit as per University norms.",
    link: "/academics/admission#merit"
  },
  {
    target: "Ph.D. Programmes",
    rules: "Admissions strictly through KSV Ph.D. Entrance Examination followed by Research Degree Committee (RDC) Interview.",
    link: "/academics/research/phd"
  }
];

export default function AdmissionAccordion() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="py-24 bg-ksv-light border-y border-ksv-border">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-ksv-primary mb-4">Admission Policy</h2>
          <div className="w-24 h-1 bg-ksv-secondary mx-auto rounded-full mb-6"></div>
          <div className="inline-flex flex-col md:flex-row items-center gap-3 bg-red-50 text-red-700 px-6 py-3 rounded-radius-sm border border-red-200 text-sm font-body">
            <ShieldAlert size={20} className="shrink-0" />
            <p className="font-semibold text-center md:text-left">
              WARNING: The University has NO Management Quota in Engineering, Pharmacy, MCA & MBA. Beware of fraudulent agents.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {policies.map((policy, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`border rounded-radius-md overflow-hidden bg-ksv-white transition-all ${isOpen ? 'border-ksv-primary shadow-md' : 'border-ksv-border hover:border-ksv-secondary/50'}`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`font-heading font-bold text-lg md:text-xl pr-4 transition-colors ${isOpen ? 'text-ksv-primary' : 'text-ksv-dark'}`}>
                    {policy.target}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${isOpen ? 'bg-ksv-secondary/20 text-ksv-primary rotate-180' : 'bg-ksv-light text-ksv-dark/50'}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-ksv-light">
                        <p className="font-body text-ksv-dark/80 mb-6 leading-relaxed">
                          {policy.rules}
                        </p>
                        <Link 
                          to={policy.link}
                          className="inline-flex items-center gap-2 text-sm font-heading font-bold text-ksv-secondary hover:text-ksv-primary transition-colors group"
                        >
                          Detailed Admission Process
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

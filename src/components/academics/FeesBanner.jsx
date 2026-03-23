import React from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, DownloadCloud } from 'lucide-react';

export default function FeesBanner() {
  return (
    <section className="bg-ksv-light border-b border-ksv-border">
      <div className="max-w-[1280px] mx-auto px-6 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-ksv-white border-l-4 border-ksv-secondary p-6 md:p-8 rounded-radius-md shadow-card flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-ksv-secondary/10 rounded-full flex items-center justify-center shrink-0">
              <IndianRupee className="text-ksv-secondary" size={24} />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl text-ksv-dark mb-1">Fee Structure 2025-26</h3>
              <p className="font-body text-ksv-dark/70 text-sm">
                Complete and transparent fee breakdown for all academic programmes for the upcoming session.
              </p>
            </div>
          </div>
          
          <button className="whitespace-nowrap flex items-center gap-2 bg-ksv-primary hover:bg-ksv-dark text-ksv-white font-heading font-semibold px-6 py-3 rounded-radius-sm transition-colors shrink-0">
            <DownloadCloud size={18} />
            Download PDF
          </button>
        </motion.div>
      </div>
    </section>
  );
}

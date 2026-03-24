import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileSignature } from 'lucide-react';

export default function DegreeCertificate() {
  return (
    <section className="py-20 bg-ksv-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-ksv-dark text-ksv-white rounded-radius-lg p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 border-b-4 border-ksv-secondary shadow-lg relative overflow-hidden"
        >
          {/* Abstract Circle Graphic */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-ksv-white/5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

          <div className="flex items-start gap-6 relative z-10 w-full md:w-2/3">
            <div className="hidden md:flex bg-ksv-secondary/20 p-4 rounded-radius-md text-ksv-secondary">
              <FileSignature size={48} />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold mb-3 flex items-center gap-3">
                <span className="md:hidden text-ksv-secondary"><FileSignature size={28} /></span>
                Degree Certificates
              </h2>
              <p className="text-ksv-white/70 font-body text-lg">
                Graduating students can apply for their Provisional Degree Certificate online. Download the requisite form below and submit it along with necessary documents to your respective institute.
              </p>
            </div>
          </div>

          <div className="relative z-10 w-full md:w-auto shrink-0 flex justify-center">
            <a 
              href="#"
              className="bg-ksv-secondary hover:bg-white text-ksv-dark hover:text-ksv-primary font-heading font-bold px-8 py-4 rounded-full transition-all flex items-center gap-3 shadow-[0_0_20px_rgba(252,163,17,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:scale-105"
            >
              <Download size={20} />
              Download Form
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

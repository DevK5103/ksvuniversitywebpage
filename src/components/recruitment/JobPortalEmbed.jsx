import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, AlertCircle } from 'lucide-react';

export default function JobPortalEmbed() {
  return (
    <section className="py-24 bg-ksv-light">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="bg-ksv-white rounded-radius-lg shadow-card border border-ksv-border p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="bg-amber-100 text-amber-600 p-3 rounded-full shrink-0">
              <AlertCircle size={24} />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-ksv-dark mb-1">Official Job Portal</h3>
              <p className="font-body text-ksv-dark/70 text-sm">All applications must be submitted exclusively through the official KSV Online Job Portal. Emailed resumes will not be considered.</p>
            </div>
          </div>
          <a
            href="http://14.139.122.102/onlinejobportal/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-ksv-primary hover:bg-ksv-dark text-ksv-white px-8 py-4 rounded font-heading font-bold transition-colors flex items-center gap-2 shadow-sm"
          >
            Open Portal in New Tab <ExternalLink size={18} />
          </a>
        </div>

        {/* Embedded Iframe */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full h-[800px] rounded-radius-md overflow-hidden border border-ksv-border shadow-inner bg-white relative"
        >
          {/* Fallback while loading / if blocked */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-0">
            <div className="animate-pulse flex flex-col items-center">
               <div className="w-16 h-16 border-4 border-ksv-primary border-t-transparent rounded-full animate-spin mb-4"></div>
               <p className="font-heading font-semibold text-ksv-dark">Loading Online Job Portal...</p>
               <p className="font-body text-xs text-ksv-dark/50 mt-2">If the portal does not load, please use the direct link above.</p>
            </div>
          </div>

          <iframe 
            src="http://14.139.122.102/onlinejobportal/" 
            width="100%" 
            height="100%" 
            className="relative z-10 bg-white"
            style={{ border: 0 }}
            title="KSV Online Job Portal"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, BookOpenCheck, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NEPSection() {
  return (
    <section className="py-24 bg-ksv-white border-b border-ksv-border/40">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-ksv-accent/30 rounded-radius-lg p-8 md:p-12 border border-ksv-accent overflow-hidden relative"
        >
          {/* Decorative SVG */}
          <div className="absolute right-0 bottom-0 text-ksv-primary/5 translate-x-1/4 translate-y-1/4 pointer-events-none">
            <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-ksv-secondary text-ksv-dark font-bold font-heading text-xl w-14 h-14 rounded-radius-sm flex items-center justify-center shadow-md">
                NEP
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-ksv-primary">National Education Policy 2020</h2>
            </div>
            
            <p className="font-body text-ksv-dark/80 text-lg leading-relaxed mb-8">
              Kadi Sarva Vishwavidyalaya is proudly implementing the structural and pedagogical reforms outlined in the NEP 2020. Our transition emphasizes multidisciplinary learning, flexibility in course selection, and a strong focus on conceptual understanding.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-ksv-white p-5 rounded-radius-sm shadow-sm flex items-start gap-4 border border-ksv-border/40">
                <Lightbulb className="text-ksv-secondary shrink-0" size={24} />
                <div>
                  <h4 className="font-heading font-semibold text-ksv-dark text-sm mb-1">Multidisciplinary</h4>
                  <p className="font-body text-xs text-ksv-dark/60">Breakdown of rigid boundaries between arts and sciences.</p>
                </div>
              </div>
              <div className="bg-ksv-white p-5 rounded-radius-sm shadow-sm flex items-start gap-4 border border-ksv-border/40">
                <BookOpenCheck className="text-ksv-secondary shrink-0" size={24} />
                <div>
                  <h4 className="font-heading font-semibold text-ksv-dark text-sm mb-1">Flexibility</h4>
                  <p className="font-body text-xs text-ksv-dark/60">Multiple entry and exit points in degree programs.</p>
                </div>
              </div>
              <div className="bg-ksv-white p-5 rounded-radius-sm shadow-sm flex items-start gap-4 border border-ksv-border/40">
                <LineChart className="text-ksv-secondary shrink-0" size={24} />
                <div>
                  <h4 className="font-heading font-semibold text-ksv-dark text-sm mb-1">Skill Focus</h4>
                  <p className="font-body text-xs text-ksv-dark/60">Integration of vocational education and 21st-century skills.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/" className="bg-ksv-primary hover:bg-ksv-dark text-ksv-white font-heading font-semibold px-8 py-3 rounded-full transition-colors shadow-md">
                Read Full Implementation Report
              </Link>
              <button className="text-ksv-primary font-heading font-bold px-6 py-3 hover:bg-ksv-primary/5 rounded-full transition-colors">
                View NEP Guidelines Circular
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

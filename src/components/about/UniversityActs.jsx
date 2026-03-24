import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

const acts = [
  {
    title: "University Act 2007",
    desc: "Gujarat State Government Act 21 of 2007 establishing Kadi Sarva Vishwavidyalaya.",
    pages: "19 Pages",
    size: "1.2 MB"
  },
  {
    title: "University Act 2012",
    desc: "Amendments and subsequent provisions to the KSV University Act.",
    pages: "4 Pages",
    size: "450 KB"
  }
];

export default function UniversityActs() {
  return (
    <section id="acts" className="py-24 bg-ksv-dark text-ksv-white scroll-mt-24 border-t-4 border-ksv-secondary">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">University Acts</h2>
            <div className="w-24 h-1 bg-ksv-secondary rounded-full mb-6"></div>
            <p className="font-body text-ksv-white/70 text-lg">
              Official legislative documents governing the operations, establishment, and amendments of Kadi Sarva Vishwavidyalaya.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px]">
          {acts.map((act, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-ksv-white/5 border border-ksv-white/10 p-6 rounded-radius-md hover:bg-ksv-white/10 transition-colors flex items-start gap-6 group"
            >
              <div className="w-14 h-14 rounded-radius-sm bg-ksv-secondary/20 flex items-center justify-center shrink-0 text-ksv-secondary group-hover:scale-110 transition-transform">
                <FileText size={28} />
              </div>
              <div className="flex-grow">
                <h3 className="font-heading font-bold text-xl mb-2">{act.title}</h3>
                <p className="font-body text-sm text-ksv-white/70 mb-4">{act.desc}</p>
                <div className="flex items-center gap-4 text-xs font-body text-ksv-white/50 mb-6">
                  <span>{act.pages}</span>
                  <span className="w-1 h-1 rounded-full bg-ksv-white/30"></span>
                  <span>{act.size}</span>
                  <span className="w-1 h-1 rounded-full bg-ksv-white/30"></span>
                  <span>PDF Document</span>
                </div>
                <button className="flex items-center gap-2 text-sm font-heading font-bold text-ksv-dark bg-ksv-secondary hover:bg-ksv-white px-5 py-2.5 rounded-radius-sm transition-colors">
                  <Download size={16} />
                  Download
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

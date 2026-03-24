import React from 'react';
import { motion } from 'framer-motion';

const leaders = [
  {
    role: "President",
    name: "Shri Vallabhbhai M. Patel",
    desc: "Provides overarching vision and guidance to the university, deeply committed to the philanthropic values of SVKM.",
    highlight: true
  },
  {
    role: "Vice Chancellor",
    name: "Dr. K. N. Sheth",
    desc: "Heads the academic and administrative affairs, ensuring excellence in research, teaching, and overall institutional growth.",
    highlight: false
  },
  {
    role: "Registrar",
    name: "Dr. S. K. Mantrala",
    desc: "Oversees university operations, examinations, policy implementation, and statutory compliances.",
    highlight: false
  }
];

export default function Management() {
  return (
    <section id="management" className="py-24 bg-ksv-white scroll-mt-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-ksv-primary mb-4">Management & Administration</h2>
          <div className="w-24 h-1 bg-ksv-secondary mx-auto rounded-full"></div>
          <p className="font-body text-ksv-dark/70 mt-6 max-w-2xl mx-auto">
            Governed by visionary leaders committed to maintaining the highest academic standards and upholding the trust's legacy.
          </p>
        </div>

        {/* President Card (Top Tier) */}
        <div className="flex justify-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-[600px] bg-ksv-primary p-8 rounded-radius-lg text-center border-b-4 border-ksv-secondary shadow-hover relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-ksv-secondary/20 rounded-full blur-2xl"></div>
            <h4 className="font-heading font-medium text-ksv-secondary tracking-widest uppercase text-sm mb-2">{leaders[0].role}</h4>
            <h3 className="font-display font-bold text-3xl text-ksv-white mb-4">{leaders[0].name}</h3>
            <p className="font-body text-ksv-white/80 leading-relaxed text-sm md:text-base">{leaders[0].desc}</p>
          </motion.div>
        </div>

        {/* Secondary Tier */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          {leaders.slice(1).map((leader, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className="bg-ksv-light border border-ksv-border p-8 rounded-radius-md text-center hover:border-ksv-secondary/50 hover:shadow-card transition-all"
            >
              <h4 className="font-heading font-semibold text-ksv-primary/70 tracking-wider uppercase text-xs mb-2">{leader.role}</h4>
              <h3 className="font-display font-bold text-2xl text-ksv-dark mb-4">{leader.name}</h3>
              <p className="font-body text-ksv-dark/70 text-sm leading-relaxed">{leader.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

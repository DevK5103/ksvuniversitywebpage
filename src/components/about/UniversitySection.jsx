import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ShieldCheck, ScrollText, Target, BookOpen, Globe2 } from 'lucide-react';

const objectives = [
  {
    icon: Target,
    title: "Need-based Education",
    desc: "To provide need-based education universally, ensuring accessibility to quality academic resources for all segments of society."
  },
  {
    icon: BookOpen,
    title: "Research & Development",
    desc: "To foster an environment of continuous research, innovation, and advancement across diverse multidisciplinary fields."
  },
  {
    icon: Globe2,
    title: "Holistic Growth",
    desc: "To emphasize the holistic development of students, integrating strong moral values alongside professional competence."
  }
];

export default function UniversitySection() {
  return (
    <section id="university" className="py-24 bg-ksv-white scroll-mt-24">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Top Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ksv-primary mb-6">About The University</h2>
            <div className="w-20 h-1 bg-ksv-secondary rounded-full mb-8"></div>
            <div className="space-y-6 font-body text-ksv-dark/80 text-lg leading-relaxed">
              <p>
                <strong>Kadi Sarva Vishwavidyalaya (KSV)</strong> is a state private university recognized for its excellence in higher education. Established under the aegis of the Sarva Vidyalaya Kelavani Mandal, the university has rapidly grown since its inception.
              </p>
              <p>
                From Engineering and Pharmacy to Management, Nursing, Compute Science, and the Arts, KSV offers a truly multidisciplinary learning environment. With strong industry ties, a dedicated supercomputer facility, and robust PhD programs, the university is committed to transforming ambitious students into capable, value-driven professionals.
              </p>
            </div>
          </motion.div>
          
          {/* Key Facts Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-ksv-primary text-ksv-white p-8 md:p-10 rounded-radius-md shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-ksv-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="font-heading font-bold text-2xl mb-8 flex items-center gap-3">
              <ShieldCheck className="text-ksv-secondary" size={28} />
              Key Facts & Accreditations
            </h3>
            
            <div className="space-y-6 relative z-10">
              <div className="border-l-2 border-ksv-secondary/50 pl-4">
                <span className="block text-xs uppercase tracking-wider text-ksv-white/60 mb-1 font-semibold">Established</span>
                <span className="font-body text-lg font-medium">May 2007</span>
              </div>
              <div className="border-l-2 border-ksv-secondary/50 pl-4">
                <span className="block text-xs uppercase tracking-wider text-ksv-white/60 mb-1 font-semibold">Legislative Act</span>
                <span className="font-body text-lg font-medium">Gujarat State Govt. Act 21 of 2007</span>
              </div>
              <div className="border-l-2 border-ksv-secondary/50 pl-4">
                <span className="block text-xs uppercase tracking-wider text-ksv-white/60 mb-1 font-semibold">UGC Approval</span>
                <span className="font-body text-lg font-medium">Ref F. 9-18/2008 (cpp-1) • March 19, 2009</span>
              </div>
              <div className="border-l-2 border-ksv-secondary/50 pl-4">
                <span className="block text-xs uppercase tracking-wider text-ksv-white/60 mb-1 font-semibold">Locations</span>
                <span className="font-body text-lg font-medium">Gandhinagar & Kadi, Gujarat</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Founding Objectives */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-display font-bold text-ksv-primary">Core Objectives</h3>
            <p className="font-body text-ksv-dark/60 mt-4 max-w-2xl mx-auto">The foundational principles that guide our academic and societal endeavors.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {objectives.map((obj, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-ksv-light border border-ksv-border p-8 rounded-radius-md hover:border-ksv-secondary hover:shadow-card transition-all group"
              >
                <div className="w-14 h-14 bg-ksv-white rounded-radius-sm shadow-sm border border-ksv-border/50 flex items-center justify-center mb-6 text-ksv-primary group-hover:bg-ksv-secondary group-hover:text-ksv-dark group-hover:border-transparent transition-colors">
                  <obj.icon size={28} />
                </div>
                <h4 className="font-heading font-bold text-xl text-ksv-dark mb-4">{obj.title}</h4>
                <p className="font-body text-ksv-dark/70 leading-relaxed text-sm">
                  {obj.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

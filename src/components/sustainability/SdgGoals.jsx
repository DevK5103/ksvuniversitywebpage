import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Globe2, HeartHandshake } from 'lucide-react';

export default function SdgGoals() {
  const initiatives = [
    { title: "Universal Access", icon: Globe2, desc: "Providing accessible education across 19 constituent institutions to students from diverse socio-economic backgrounds." },
    { title: "CBCS Electives", icon: BookOpen, desc: "Implementing Choice Based Credit System (CBCS) electives allowing multidisciplinary academic pathways." },
    { title: "Lifelong Learning", icon: HeartHandshake, desc: "Offering free library access, digital resources, and sustained executive education for adults." },
    { title: "Teacher Training", icon: Users, desc: "Continuous pedagogical training and public lectures ensuring high standards of instructional quality." }
  ];

  return (
    <section className="py-24 bg-ksv-white relative overflow-hidden">
      
      {/* SDG branding background element */}
      <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none">
        <h1 className="text-[300px] font-display font-bold leading-none">SDG</h1>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-block bg-[#c5192d] text-white font-heading font-bold text-xs uppercase tracking-widest px-3 py-1 rounded mb-4">
              SDG Goal 4
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-ksv-dark mb-6 leading-tight">
              Quality Education for All
            </h2>
            <p className="text-ksv-dark/70 font-body text-lg leading-relaxed mb-6">
              Our primary strategic alignment is with SDG 4. Kadi Sarva Vishwavidyalaya functions on a philanthropic model, ensuring that quality higher education is never out of reach for deserving students, regardless of their financial or social background.
            </p>
            <p className="text-ksv-dark/70 font-body text-lg leading-relaxed mb-8">
              We continually upgrade our infrastructure, digital learning capabilities, and teacher qualification standards to provide an inclusive, equitable, and world-class educational environment.
            </p>
            
            <button className="bg-ksv-primary hover:bg-ksv-dark text-ksv-white font-heading font-bold px-8 py-4 rounded-full transition-colors shadow-hover">
              Read Our Full Sustainability Report
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {initiatives.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-ksv-light border border-ksv-border p-6 rounded-radius-md shadow-sm hover:shadow-hover hover:-translate-y-1 transition-all group">
                  <div className="w-12 h-12 bg-white rounded flex items-center justify-center text-[#c5192d] mb-4 border border-gray-100 shadow-sm group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-ksv-dark mb-2">{item.title}</h4>
                  <p className="font-body text-sm text-ksv-dark/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

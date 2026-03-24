import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Network, Database, Layers } from 'lucide-react';

export default function SupercomputerFacility() {
  const specs = [
    { icon: Cpu, title: "Processing Power", desc: "2 multicore CPUs with 12+ cores each, plus 2 accelerator cards for massive parallel computing." },
    { icon: Layers, title: "HPC Applications", desc: "Pre-installed High Performance Computing applications spanning bioinformatics, molecular dynamics, and more." },
    { icon: Network, title: "Message Passing Interface", desc: "Advanced MPI support for distributed computing across multiple nodes seamlessly." },
    { icon: Database, title: "Job Schedulers", desc: "Integrated enterprise-grade job scheduling for optimal resource allocation and queue management." }
  ];

  return (
    <section className="py-24 bg-ksv-dark text-ksv-white relative overflow-hidden">
      {/* Abstract Background Design */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <path d="M0,50 Q25,0 50,50 T100,50" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0,60 Q25,10 50,60 T100,60" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0,40 Q25,-10 50,40 T100,40" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-block bg-ksv-secondary text-ksv-dark font-heading font-bold text-xs uppercase tracking-widest px-3 py-1 rounded mb-4">
              PARAM Shavak
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Supercomputer Facility</h2>
            <p className="text-ksv-white/70 font-body text-lg leading-relaxed mb-6">
              Established with the support of GUJCOST, our state-of-the-art supercomputing facility is located at the LDRP Institute in Gandhinagar. It provides immense computational power to faculty and researchers engaged in complex simulations, AI/ML models, and data-intensive scientific studies.
            </p>
            <p className="text-ksv-white/70 font-body text-lg leading-relaxed mb-8">
              The facility is designed to bring supercomputing to the desktop level, making it accessible for educational and training purposes, and preparing our students for real-world high-performance computing challenges.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {specs.map((spec, idx) => {
              const Icon = spec.icon;
              return (
                <div key={idx} className="bg-ksv-white/5 border border-ksv-white/10 p-6 rounded-radius-md backdrop-blur-sm">
                  <div className="bg-ksv-white/10 w-12 h-12 rounded flex items-center justify-center text-ksv-secondary mb-4">
                    <Icon size={24} />
                  </div>
                  <h4 className="font-heading font-bold text-lg mb-2">{spec.title}</h4>
                  <p className="font-body text-sm text-ksv-white/60 leading-relaxed">
                    {spec.desc}
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

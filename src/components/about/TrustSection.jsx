import React from 'react';
import { motion } from 'framer-motion';
import { Landmark } from 'lucide-react';

const timeline = [
  { year: '1919', title: 'SVKM Trust Founded', desc: 'Sarva Vidyalaya Kelavani Mandal was established by Pujya Chhaganbha.' },
  { year: '2007', title: 'KSV University Formed', desc: 'Established vide Gujarat State Government Act 21 of 2007.' },
  { year: '2009', title: 'UGC Approval', desc: 'Recognized under section 2(f) of the UGC Act, 1956.' },
  { year: 'Present', title: 'Global Excellence', desc: 'Serving 50,000+ students across Gandhinagar and Kadi campuses.' }
];

export default function TrustSection() {
  return (
    <section id="svkm-trust" className="py-24 bg-ksv-light border-b border-ksv-border/50 scroll-mt-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-ksv-secondary/20 flex items-center justify-center">
                <Landmark className="text-ksv-primary" size={24} />
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-ksv-primary">The SVKM Trust</h2>
            </div>
            
            <p className="font-motto text-2xl md:text-3xl text-ksv-secondary mb-8 block font-bold leading-relaxed border-l-4 border-ksv-secondary pl-6">
              "કર ભલા હોગા ભલા"<br/>
              <span className="font-body text-base text-ksv-dark/60 font-medium italic mt-2 block">
                Do Good, Good will happen to you.
              </span>
            </p>
            
            <div className="space-y-6 font-body text-ksv-dark/80 text-lg leading-relaxed">
              <p>
                Sarva Vidyalaya Kelavani Mandal (SVKM) is a charitable trust established in the year 1919 by a revered philanthropist, <strong>Pujya Chhaganbha</strong>. Driven by the philosophy of selfless service, the trust has been a pioneer of education in Gujarat for over nine decades.
              </p>
              <p>
                What started as a modest boarding school in Kadi has now blossomed into a massive educational ecosystem bridging the gap between moral values and modern professional education. The trust has continually expanded its footprint to ensure that quality education is accessible to all strata of society without any discrimination.
              </p>
            </div>
          </motion.div>

          {/* Right Timeline */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-ksv-white p-8 md:p-10 rounded-radius-lg shadow-card border border-ksv-border/50">
              <h3 className="font-heading font-bold text-2xl text-ksv-dark mb-8">Our Journey</h3>
              <div className="relative border-l-2 border-ksv-secondary/30 ml-4 space-y-10">
                {timeline.map((item, idx) => (
                  <div key={idx} className="relative pl-8">
                    {/* Timeline Node */}
                    <div className="absolute w-4 h-4 rounded-full bg-ksv-secondary -left-[9px] top-1.5 shadow-[0_0_0_4px_rgba(200,151,58,0.2)]"></div>
                    
                    <h4 className="font-display font-bold text-ksv-primary text-xl flex items-center gap-3">
                      {item.year}
                      <span className="h-px bg-ksv-border flex-grow mt-1 hidden md:block"></span>
                    </h4>
                    <h5 className="font-heading font-semibold text-ksv-dark mt-1">{item.title}</h5>
                    <p className="font-body text-ksv-dark/70 text-sm mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

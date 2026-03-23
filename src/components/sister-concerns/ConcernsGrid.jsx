import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Building2 } from 'lucide-react';

const concerns = [
  {
    name: "VPMP Polytechnic",
    url: "http://vpmp.ac.in",
    desc: "Established in 2006, VPMP Polytechnic is an AICTE approved diploma engineering institute offering state-of-the-art technical education.",
    color: "bg-blue-50 text-blue-800 border-blue-200"
  },
  {
    name: "Uma Arts and Nathiba Mahila Arts College",
    url: "http://uancmahilacollege.org",
    desc: "A premier grant-in-aid women's college committed to the holistic development and empowerment of female students through arts and humanities.",
    color: "bg-pink-50 text-pink-800 border-pink-200"
  },
  {
    name: "Pramukh Swami Science and H.D. Patel Arts College",
    url: "http://psshda.ac.in",
    desc: "A multidisciplinary college offering a broad spectrum of courses in contemporary sciences, biotechnology, and classical arts.",
    color: "bg-emerald-50 text-emerald-800 border-emerald-200"
  }
];

export default function ConcernsGrid() {
  return (
    <section className="py-24 bg-ksv-light min-h-[500px]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-ksv-primary mb-6">Our Educational Network</h2>
          <div className="w-20 h-1 bg-ksv-secondary mx-auto rounded-full mb-8"></div>
          <p className="font-body text-ksv-dark/80 text-lg leading-relaxed">
            While Kadi Sarva Vishwavidyalaya is an independent state private university, we share a rich heritage with several distinguished educational institutions operating under the aegis of the <strong>Sarva Vidyalaya Kelavani Mandal (SVKM)</strong> Trust. These institutions complement our mission of providing universal access to quality education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {concerns.map((inst, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-ksv-white rounded-radius-lg border border-ksv-border p-8 shadow-card hover:shadow-hover hover:-translate-y-1 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 border ${inst.color}`}>
                  <Building2 size={28} />
                </div>
                
                <h3 className="font-heading font-bold text-2xl text-ksv-dark mb-4 leading-snug group-hover:text-ksv-primary transition-colors">
                  {inst.name}
                </h3>
                
                <p className="font-body text-ksv-dark/70 text-sm leading-relaxed mb-8">
                  {inst.desc}
                </p>
              </div>

              <a 
                href={inst.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-6 py-3 bg-ksv-light border border-ksv-border/60 text-ksv-primary font-heading font-semibold rounded-radius-sm group-hover:bg-ksv-primary group-hover:text-ksv-white group-hover:border-transparent transition-colors"
              >
                Visit Institute <ExternalLink size={18} />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

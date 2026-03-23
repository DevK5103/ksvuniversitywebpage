import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const campuses = [
  {
    name: 'Gandhinagar Campus',
    description: 'The sprawling main campus located in the capital city, housing premier engineering, management, and science institutes.',
    institutesCount: 14,
    topInstitutes: [
      'LDRP Institute of Technology and Research',
      'S.M. Patel Institute of Science and Research',
      'K.B. Institute of Pharmaceutical Education',
      'S.K. Patel Institute of Management'
    ],
    link: '/campuses#gandhinagar',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Kadi Campus',
    description: 'The historic foundation campus where the SVKM trust began its journey in 1919, offering diverse professional courses.',
    institutesCount: 10,
    topInstitutes: [
      'Vidush Somany Institute of Technology',
      'S.V. Institute of Management',
      'Narsinhbhai Institute of Computer Studies',
      'H.V.H.P. Institute of Post Graduate Studies'
    ],
    link: '/campuses#kadi',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800'
  }
];

export default function CampusesSection() {
  return (
    <div className="py-24 bg-ksv-light">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-ksv-primary mb-4">Our Campuses</h2>
          <div className="w-24 h-1 bg-ksv-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-ksv-dark/70 font-body max-w-2xl mx-auto text-lg">
            Two distinct campuses, one shared vision. Explore our state-of-the-art facilities across Gandhinagar and Kadi.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {campuses.map((campus, idx) => (
            <motion.div
              key={campus.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="w-full lg:w-1/2 group relative rounded-radius-lg bg-ksv-white shadow-shadow-card border-2 border-transparent hover:border-ksv-secondary/50 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Card Image Header */}
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={campus.image} 
                  alt={campus.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-ksv-primary/40 group-hover:bg-ksv-primary/20 transition-colors"></div>
                
                <div className="absolute top-6 left-6 bg-ksv-white/95 backdrop-blur px-4 py-2 rounded-radius-md flex items-center gap-2 shadow-lg">
                  <MapPin size={18} className="text-ksv-secondary" />
                  <span className="font-heading font-bold text-ksv-primary">{campus.name}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <p className="font-body text-ksv-dark/80 flex-grow pr-4">
                    {campus.description}
                  </p>
                  <div className="bg-ksv-accent text-ksv-primary font-data font-bold text-2xl px-4 py-2 rounded-radius-md text-center shrink-0">
                    {campus.institutesCount}
                    <span className="block text-xs font-heading uppercase text-ksv-primary/70 tracking-wider">Institutes</span>
                  </div>
                </div>

                <div className="mb-8 flex-grow">
                  <h4 className="font-heading font-semibold text-ksv-dark mb-4 flex items-center gap-2">
                    <Building size={16} className="text-ksv-secondary" />
                    Key Institutes
                  </h4>
                  <ul className="space-y-3">
                    {campus.topInstitutes.map((inst, i) => (
                      <li key={i} className="flex items-start gap-2 font-body text-sm text-ksv-dark/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-ksv-secondary shrink-0 mt-1.5"></span>
                        {inst}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to={campus.link}
                  className="w-full py-4 rounded-radius-sm bg-ksv-primary text-ksv-white font-heading font-semibold flex items-center justify-center gap-2 group/btn hover:bg-ksv-dark transition-colors"
                >
                  Explore {campus.name.split(' ')[0]}
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <div className="py-24 bg-ksv-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-12 h-1 bg-ksv-secondary rounded-full"></span>
              <span className="font-heading font-bold text-ksv-secondary uppercase tracking-wider text-sm">About The University</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold text-ksv-primary leading-tight mb-6">
              Empowering Students Since 2007.
            </h2>
            
            <p className="text-ksv-dark/80 font-body text-lg leading-relaxed mb-6">
              Kadi Sarva Vishwavidyalaya is a University established vide Gujarat State Government Act 21 of 2007 and approved by UGC (ref F. 9-18/2008). Founded with the vision to provide quality education and foster research, KSV has grown into a premier institution.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-ksv-green shrink-0 mt-1" size={24} />
                <p className="font-body text-ksv-dark">Backed by the 90-year-old philanthropic trust, Sarva Vidyalaya Kelavani Mandal (SVKM).</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-ksv-green shrink-0 mt-1" size={24} />
                <p className="font-body text-ksv-dark">Over 19 constituent colleges and departments spread across Gandhinagar and Kadi campuses.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-ksv-green shrink-0 mt-1" size={24} />
                <p className="font-body text-ksv-dark">Commitment to society through "Kar Bhala Hoga Bhala" (Do Good, Good will happen to you).</p>
              </div>
            </div>
            
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 bg-ksv-primary hover:bg-ksv-dark text-ksv-white font-heading font-semibold px-8 py-4 rounded-radius-md transition-all group"
            >
              Know More About KSV
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          {/* Right: Images Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Decorative background shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-ksv-accent rounded-full blur-3xl opacity-50 -z-10"></div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600" 
                  alt="Students on campus" 
                  className="rounded-radius-lg shadow-lg w-full h-64 object-cover"
                />
                <div className="bg-ksv-secondary p-6 rounded-radius-lg shadow-lg transform hover:-translate-y-1 transition-transform">
                  <h3 className="font-display font-bold text-ksv-dark text-2xl mb-1">Act 21</h3>
                  <p className="font-body text-ksv-dark/80 text-sm">of 2007, Govt. of Gujarat</p>
                </div>
              </div>
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600" 
                  alt="University Building" 
                  className="rounded-radius-lg shadow-lg w-full h-80 object-cover"
                />
                <div className="bg-ksv-primary p-6 rounded-radius-lg shadow-lg transform hover:-translate-y-1 transition-transform">
                  <h3 className="font-display font-bold text-ksv-white text-2xl mb-1">UGC</h3>
                  <p className="font-body text-ksv-white/80 text-sm">Approved University</p>
                </div>
              </div>
            </div>
            
            {/* Trust Motto floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-ksv-white p-6 rounded-xl shadow-xl border border-ksv-border/50 max-w-[200px] z-20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-ksv-green/10 flex items-center justify-center">
                  <Leaf className="text-ksv-green" size={16} />
                </div>
                <span className="font-heading font-bold text-ksv-dark">SVKM Trust</span>
              </div>
              <p className="font-motto text-xl text-ksv-primary leading-tight">કર ભલા હોગા ભલા</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}

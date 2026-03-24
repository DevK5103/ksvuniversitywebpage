import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PresidentMessage() {
  return (
    <div className="py-24 bg-ksv-accent/30">
      <div className="max-w-[1000px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-ksv-white rounded-radius-lg shadow-shadow-card border border-ksv-border overflow-hidden flex flex-col md:flex-row"
        >
          {/* Photo Side */}
          <div className="md:w-2/5 relative h-80 md:h-auto">
            <img 
              src="/images/people/shri-vallabhai-m-patel.jpeg" 
              alt="Shri Vallabhbhai M. Patel" 
              className="absolute inset-0 w-full h-full object-cover object-top pt-4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ksv-primary/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-display font-bold text-ksv-white text-xl">Shri Vallabhbhai M. Patel</h3>
              <p className="font-body text-ksv-secondary text-sm font-semibold">President, KSV & Chairman, SVKM</p>
            </div>
          </div>
          
          {/* Message Side */}
          <div className="md:w-3/5 p-8 md:p-12 relative">
            <Quote className="absolute top-8 right-8 text-ksv-border/40 rotate-180" size={60} />
            
            <div className="relative z-10">
              <h2 className="text-2xl font-display font-bold text-ksv-primary mb-6">President's Message</h2>
              
              <div className="font-body text-ksv-dark/80 text-lg italic leading-relaxed mb-8 space-y-4">
                <p>
                  "Sarva Vidyalaya Kelvani Mandal, a Public Charitable Trust has been established in the year 1919 with the Principle of “KAR BHALA HOGA BHALA” as preached by the founder Pujya Chhaganbha. The trust has been in the forefront of providing quality education since inception. With only 6 students, the trust commenced providing education in the Parched North Gujarat Area and had branches across North Gujarat at places like Kadi, Visnagar, Vadnagar, Balol, Gandhinagar etc. With the objective of providing education to one and all the trust has been managing various schools right from Pre Primary Level to Primary to Secondary to Higher Secondary level both in Gujarati Medium and English Medium.  In addition to the schools the trust also manages a University i.e., Kadi Sarva Vishwavidyalaya and also other colleges."
                </p>
              </div>
              
              <Link 
                to="/about#president-desk"
                className="inline-flex items-center gap-2 text-ksv-primary font-heading font-bold hover:text-ksv-secondary transition-colors group"
              >
                Read Full Message
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

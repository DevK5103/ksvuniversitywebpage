import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RecruitmentCTA() {
  return (
    <div className="relative py-16 bg-ksv-green overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-ksv-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-ksv-white/10 rounded-full blur-3xl"></div>
      
      {/* Abstract geometric pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-6"
        >
          <div className="hidden sm:flex w-16 h-16 bg-ksv-secondary rounded-full items-center justify-center shrink-0 shadow-lg mt-2">
            <Briefcase size={32} className="text-ksv-dark" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ksv-white mb-2">Build Your Career at KSV</h2>
            <p className="font-body text-ksv-white/80 text-lg max-w-xl">
              We are looking for passionate academicians, researchers, and professional staff to join our vibrant academic community.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="shrink-0 w-full md:w-auto"
        >
          <Link 
            to="/recruitment"
            className="w-full md:w-auto flex items-center justify-center gap-3 bg-ksv-white hover:bg-ksv-secondary text-ksv-dark font-heading font-bold px-8 py-4 rounded-radius-md transition-all shadow-md group border-2 border-transparent hover:border-ksv-dark/10"
          >
            <UserPlus size={20} className="text-ksv-primary group-hover:text-ksv-dark transition-colors" />
            View Current Openings
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform text-ksv-primary group-hover:text-ksv-dark" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}

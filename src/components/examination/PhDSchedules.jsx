import React from 'react';
import { motion } from 'framer-motion';
import { Search, GraduationCap, CopyCheck, Archive } from 'lucide-react';

export default function PhDSchedules() {
  return (
    <section className="py-20 bg-ksv-light border-t border-ksv-border/40">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Exam Papers Search Component built-in securely here as a decorative block */}
        <div className="bg-ksv-white rounded-radius-md border border-ksv-border p-8 mb-16 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-bold text-2xl text-ksv-dark mb-2 flex items-center gap-2">
              <Search className="text-ksv-secondary" size={24} />
              Find Past Exam Papers
            </h3>
            <p className="font-body text-ksv-dark/60">Search through our archive of previous semester examinations.</p>
          </div>
          <div className="w-full md:w-1/2 flex gap-2">
            <input type="text" placeholder="Subject Name or Code..." className="flex-1 border border-ksv-border rounded px-4 py-3 font-body focus:outline-none focus:border-ksv-primary" />
            <button className="bg-ksv-primary hover:bg-ksv-dark text-ksv-white font-heading font-bold px-6 py-3 rounded transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* PhD Schedules */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-ksv-primary mb-4">PhD Examination Schedules</h2>
          <div className="w-16 h-1 bg-ksv-secondary mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-ksv-white border-l-4 border-ksv-primary p-8 rounded-r-radius-md shadow-card hover:shadow-hover transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-ksv-primary/10 p-3 rounded-full text-ksv-primary">
                <GraduationCap size={28} />
              </div>
              <h3 className="font-heading font-bold text-2xl text-ksv-dark">New Students</h3>
            </div>
            <p className="font-body text-ksv-dark/70 mb-6">Schedules applicable for newly enrolled PhD scholars starting from the 2024 academic cycle.</p>
            <ul className="space-y-3 font-body text-sm font-medium">
              <li className="flex items-center gap-2"><CopyCheck size={16} className="text-ksv-secondary" /> October 2024 Final Schedule</li>
              <li className="flex items-center gap-2"><CopyCheck size={16} className="text-ksv-secondary" /> Research Methodology Paper Guidelines</li>
            </ul>
            <a href="#" className="inline-block mt-6 text-ksv-primary font-bold hover:underline">View Timeline &rarr;</a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-ksv-white border-l-4 border-ksv-secondary p-8 rounded-r-radius-md shadow-card hover:shadow-hover transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-ksv-secondary/20 p-3 rounded-full text-ksv-dark">
                <Archive size={28} />
              </div>
              <h3 className="font-heading font-bold text-2xl text-ksv-dark">Old Students</h3>
            </div>
            <p className="font-body text-ksv-dark/70 mb-6">Continuation schedules for existing scholars pursuing their doctoral research prior to 2024.</p>
            <ul className="space-y-3 font-body text-sm font-medium">
              <li className="flex items-center gap-2"><CopyCheck size={16} className="text-ksv-secondary" /> October 2024 Final Schedule</li>
            </ul>
            <a href="#" className="inline-block mt-6 text-ksv-primary font-bold hover:underline">View Timeline &rarr;</a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

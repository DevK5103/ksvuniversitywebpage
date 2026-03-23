import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Rocket, BookOpen, Presentation, ChevronRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ResearchSection() {
  return (
    <div className="py-24 bg-ksv-dark text-ksv-white overflow-hidden relative">
      {/* Decorative background grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Panel: Research Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-ksv-white mb-6">
              Advancing <span className="text-ksv-secondary">Research & Innovation</span>
            </h2>
            <p className="text-ksv-white/70 font-body text-lg mb-10">
              Pioneers in doctoral registrations across 17 disciplines, KSV provides state-of-the-art facilities to foster groundbreaking research and industrial solutions.
            </p>

            <div className="space-y-8 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 bg-ksv-secondary/20 rounded-full flex items-center justify-center">
                  <Cpu className="text-ksv-secondary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-ksv-white mb-2">PARAM Shavak Supercomputer</h3>
                  <p className="text-ksv-white/60 font-body text-sm">GPU accelerated High Performance Computing facility established by GUJCOST at LDRP campus.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 bg-ksv-secondary/20 rounded-full flex items-center justify-center">
                  <Rocket className="text-ksv-secondary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-ksv-white mb-2">Incubation Centre</h3>
                  <p className="text-ksv-white/60 font-body text-sm">Solving Industry Defined Problems (IDP) with 5 top management consultants of Ahmedabad.</p>
                </div>
              </div>
            </div>

            <Link 
              to="/research/funded-projects"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-ksv-secondary text-ksv-secondary hover:bg-ksv-secondary hover:text-ksv-dark font-heading font-semibold px-8 py-3 rounded-radius-sm transition-all shadow-[0_0_15px_rgba(200,151,58,0.3)] hover:shadow-[0_0_25px_rgba(200,151,58,0.5)]"
            >
              View Funded Projects
            </Link>
          </motion.div>

          {/* Right Panel: Journals & Conferences */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-ksv-white text-ksv-dark p-8 md:p-10 rounded-radius-lg relative"
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-ksv-primary/10 rounded-full blur-2xl"></div>
            
            <div className="flex items-center gap-3 mb-8">
              <BookOpen size={28} className="text-ksv-primary" />
              <h2 className="text-2xl font-display font-bold text-ksv-primary">Journals & Conferences</h2>
            </div>
            
            {/* JEMS Journal Card */}
            <div className="bg-ksv-light border border-ksv-border p-6 rounded-radius-md mb-8 hover:border-ksv-primary/30 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-heading font-bold text-lg text-ksv-primary">JEMS E-Journal</h3>
                <span className="bg-ksv-green/10 text-ksv-green text-xs font-bold px-2 py-1 rounded">Open Access</span>
              </div>
              <p className="font-body text-sm text-ksv-dark/70 mb-6">
                KSV Online E-Journal of Engineering, Management, Science and Humanities. Publishing quality peer-reviewed research.
              </p>
              <a 
                href="https://jems.ksv.ac.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ksv-secondary font-heading font-bold hover:text-ksv-primary transition-colors text-sm"
              >
                Read JEMS Journal <ChevronRight size={16} />
              </a>
            </div>

            {/* Conferences List */}
            <div>
              <h4 className="font-heading font-semibold text-ksv-dark mb-4 flex items-center gap-2">
                <Presentation size={18} className="text-ksv-secondary" />
                <span>Major Conferences 2024</span>
              </h4>
              
              <ul className="space-y-4">
                <li>
                  <a href="https://ncmata.ksv.ac.in" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 p-3 rounded-radius-sm hover:bg-ksv-light transition-colors border border-transparent hover:border-ksv-border">
                    <div className="bg-ksv-primary/10 p-2 rounded shrink-0 group-hover:bg-ksv-primary group-hover:text-ksv-white transition-colors text-ksv-primary">
                      <FileText size={16} />
                    </div>
                    <div>
                      <h5 className="font-heading font-semibold text-sm text-ksv-dark group-hover:text-ksv-primary transition-colors">KSV Gyanotsav</h5>
                      <span className="font-body text-xs text-ksv-dark/60">Annual Knowledge Festival</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="http://comcon.ksv.ac.in" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 p-3 rounded-radius-sm hover:bg-ksv-light transition-colors border border-transparent hover:border-ksv-border">
                    <div className="bg-ksv-primary/10 p-2 rounded shrink-0 group-hover:bg-ksv-primary group-hover:text-ksv-white transition-colors text-ksv-primary">
                      <FileText size={16} />
                    </div>
                    <div>
                      <h5 className="font-heading font-semibold text-sm text-ksv-dark group-hover:text-ksv-primary transition-colors">COMCON</h5>
                      <span className="font-body text-xs text-ksv-dark/60">Commerce & Management Conference</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://ncfn.ksv.ac.in" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 p-3 rounded-radius-sm hover:bg-ksv-light transition-colors border border-transparent hover:border-ksv-border">
                    <div className="bg-ksv-primary/10 p-2 rounded shrink-0 group-hover:bg-ksv-primary group-hover:text-ksv-white transition-colors text-ksv-primary">
                      <FileText size={16} />
                    </div>
                    <div>
                      <h5 className="font-heading font-semibold text-sm text-ksv-dark group-hover:text-ksv-primary transition-colors">NCFN</h5>
                      <span className="font-body text-xs text-ksv-dark/60">National Conference</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, CalendarDays, BarChart3, BookOpen, Microscope, Medal, Leaf, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { title: 'Admission', path: '/academics/admission', icon: ClipboardList, color: 'text-blue-600', bg: 'bg-blue-50' },
  { title: 'Exam Schedule', path: '/examination/schedule', icon: CalendarDays, color: 'text-orange-600', bg: 'bg-orange-50' },
  { title: 'Results', path: '/examination/results', icon: BarChart3, color: 'text-green-600', bg: 'bg-green-50' },
  { title: 'Syllabus', path: '/academics/syllabus', icon: BookOpen, color: 'text-purple-600', bg: 'bg-purple-50' },
  { title: 'Research', path: '/research', icon: Microscope, color: 'text-cyan-600', bg: 'bg-cyan-50' },
  { title: 'Sports Cell', path: '/cells/sports', icon: Medal, color: 'text-yellow-600', bg: 'bg-yellow-50' },
  { title: 'SDG', path: '/sustainability', icon: Leaf, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { title: 'Recruitment', path: '/recruitment', icon: Briefcase, color: 'text-rose-600', bg: 'bg-rose-50' }
];

export default function QuickLinks() {
  return (
    <div className="py-20 bg-ksv-light">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-ksv-primary mb-4">Quick Links & Services</h2>
          <div className="w-24 h-1 bg-ksv-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Link 
                  to={link.path}
                  className="flex flex-col items-center justify-center p-8 bg-ksv-white rounded-radius-lg shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-shadow-hover hover:-translate-y-2 transition-all duration-300 border border-ksv-border/40 group h-full"
                >
                  <div className={`w-16 h-16 rounded-full ${link.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} className={link.color} />
                  </div>
                  <h3 className="font-heading font-semibold text-ksv-dark text-center group-hover:text-ksv-primary transition-colors">
                    {link.title}
                  </h3>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

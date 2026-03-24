import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, BookOpen, Lightbulb, GraduationCap, Database, Monitor, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ResearchProjectsContent() {
  const resources = [
    {
      title: "Papers Published",
      desc: "Explore journals, conference papers, and articles authored by our faculty and research scholars.",
      icon: <FileText size={24} />,
      link: "#papers-published",
      isInternal: true
    },
    {
      title: "Books Published",
      desc: "Authored books, book chapters, and extensive research monographs by the KSV academic community.",
      icon: <BookOpen size={24} />,
      link: "#books-published",
      isInternal: true
    },
    {
      title: "Patents Filed",
      desc: "Innovative technologies, processes, and products patented by KSV researchers over the years.",
      icon: <Lightbulb size={24} />,
      link: "#patents-filed",
      isInternal: true
    },
    {
      title: "PhD Updates",
      desc: "List of enrolled PhD scholars, awarded degrees, and ongoing dissertation work.",
      icon: <GraduationCap size={24} />,
      link: "#phd-updates",
      isInternal: true
    },
    {
      title: "Institutional Repository",
      desc: "Centralized cloud-based repository for all KSV academic research, accessible to the public.",
      icon: <Database size={24} />,
      link: "http://160.160.17.54/library",
      isInternal: false
    },
    {
      title: "Supercomputer (PARAM Shavak)",
      desc: "State-of-the-art national supercomputing facility at KSV established in core collaboration with GUJCOST.",
      icon: <Monitor size={24} />,
      link: "/research/supercomputer",
      isInternal: true
    }
  ];

  return (
    <section className="py-20 relative bg-ksv-light min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Research Ecosystem Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center max-w-4xl mx-auto"
        >
          <div className="w-16 h-1 bg-ksv-secondary mx-auto mb-8 rounded"></div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-ksv-primary mb-6">Our Research Ecosystem</h2>
          <p className="text-lg text-ksv-dark/80 font-body leading-relaxed">
            KSV operates with 10 different faculties having more than 18,000 students 
            studying disciplines including Management, Pharmacy, Computer Science, 
            Computer Application, Engineering, Commerce, Science, Nursing, Education, 
            and Arts. KSV has become a pioneer in registering Doctoral students in 
            17 major disciplines.
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {resources.map((resource, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              {resource.isInternal ? (
                <Link to={resource.link} className="flex flex-col h-full bg-ksv-white rounded-radius-md p-8 shadow-sm border border-ksv-border hover:shadow-hover hover:border-ksv-secondary group transition-all">
                  <div className="w-14 h-14 bg-ksv-accent text-ksv-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-ksv-secondary group-hover:text-ksv-white transition-colors">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-ksv-primary mb-3">{resource.title}</h3>
                  <p className="text-ksv-dark/70 font-body leading-relaxed mb-6 flex-grow">{resource.desc}</p>
                  <div className="flex items-center text-ksv-secondary font-medium group-hover:translate-x-1 transition-transform">
                    Explore <ArrowRight size={16} className="ml-2" />
                  </div>
                </Link>
              ) : (
                <a href={resource.link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full bg-ksv-white rounded-radius-md p-8 shadow-sm border border-ksv-border hover:shadow-hover hover:border-ksv-secondary group transition-all">
                  <div className="w-14 h-14 bg-ksv-accent text-ksv-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-ksv-secondary group-hover:text-ksv-white transition-colors">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-ksv-primary mb-3">{resource.title}</h3>
                  <p className="text-ksv-dark/70 font-body leading-relaxed mb-6 flex-grow">{resource.desc}</p>
                  <div className="flex items-center text-ksv-secondary font-medium group-hover:translate-x-1 transition-transform">
                    External Link <ExternalLink size={16} className="ml-2" />
                  </div>
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Focus Areas: Incubation & MMPSRPC */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Incubation Centre */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-ksv-primary text-ksv-white rounded-radius-lg p-10 relative overflow-hidden flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-ksv-secondary/20 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2"></div>
            
            <h3 className="text-3xl font-display font-bold mb-6">Incubation Centre</h3>
            <ul className="space-y-4 font-body text-ksv-white/80 text-lg mb-8 relative z-10">
              <li className="flex gap-3">
                <CheckCircle2 className="text-ksv-secondary flex-shrink-0 mt-1" size={20} />
                <span>Tie-ups with Top 5 Management Consultants of Ahmedabad</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="text-ksv-secondary flex-shrink-0 mt-1" size={20} />
                <span>Solving real Industry Defined Problems (IDP)</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="text-ksv-secondary flex-shrink-0 mt-1" size={20} />
                <span>Advanced Simulation Centre featuring 20 real-life processes per discipline</span>
              </li>
            </ul>
            <Link to="/about" className="inline-flex items-center justify-center px-6 py-3 bg-ksv-secondary text-ksv-white font-heading font-semibold rounded-full hover:bg-white hover:text-ksv-primary transition-colors w-max relative z-10">
              Learn More
            </Link>
          </motion.div>

          {/* MMPSRPC */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-ksv-white border-2 border-ksv-border hover:border-ksv-secondary rounded-radius-lg p-10 shadow-sm hover:shadow-hover transition-all flex flex-col justify-center group"
          >
            <h3 className="text-3xl font-display font-bold text-ksv-primary mb-4">MMPSRPC</h3>
            <p className="text-ksv-secondary font-heading font-medium tracking-wide uppercase mb-6 text-sm">
              M.M. Patel Students Research Project Cell
            </p>
            <p className="text-ksv-dark/80 font-body leading-relaxed text-lg mb-8">
              A dedicated institutional cell providing a robust platform for student-driven research projects and innovations across all KSV constituent institutes and faculties.
            </p>
            <a 
              href="https://www.mmpsrpc.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 text-ksv-primary font-heading font-bold group-hover:text-ksv-secondary transition-colors"
            >
              Visit mmpsrpc.in <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

const CheckCircle2 = ({ className, size }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

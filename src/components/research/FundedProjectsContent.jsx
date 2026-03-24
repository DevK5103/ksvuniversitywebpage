import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Mail, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function FundedProjectsContent() {
  const steps = [
    {
      title: 'Prepare Proposal',
      desc: 'Prepare your research proposal according to the standard format available on our website.',
    },
    {
      title: 'Submit Office',
      desc: 'Submit your completed proposal through the university research office for internal review.',
    },
    {
      title: 'Agency Review',
      desc: 'Proposals are submitted to GUJCOST or other relevant funding agencies for final approval.',
    }
  ];

  const placeholderProjects = [
    { title: 'AI-driven Diagnostics for Rural Healthcare', pi: 'Dr. A. Sharma', agency: 'GUJCOST', amount: '₹ 25,00,000', year: '2025', status: 'Ongoing' },
    { title: 'Sustainable Water Purification using Nanomaterials', pi: 'Prof. S. Patel', agency: 'DST', amount: '₹ 32,00,000', year: '2024', status: 'Ongoing' },
    { title: 'Optimization of Urban Traffic Flow via IoT', pi: 'Dr. M. Desai', agency: 'AICTE', amount: '₹ 15,50,000', year: '2023', status: 'Completed' },
  ];

  const downloads = [
    { title: 'Research Proposal Format', size: '1.2 MB' },
    { title: 'Application Form for PhD Guide', size: '850 KB' },
    { title: 'Supervisor / Guide List', size: '2.4 MB' },
  ];

  return (
    <section className="py-20 relative bg-ksv-light min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Intro Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-ksv-white p-8 md:p-12 rounded-radius-lg shadow-card border border-ksv-border mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-ksv-accent rounded-full blur-[50px] mix-blend-multiply opacity-50"></div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-ksv-primary mb-6 relative z-10">Supporting Innovation</h2>
          <p className="text-lg text-ksv-dark/80 font-body leading-relaxed max-w-4xl relative z-10">
            KSV encourages and supports research activities through funded projects and research grants. Faculty and researchers may apply for funding for project proposals, particularly those involving High-Performance Computing (HPC) and supercomputing research.
          </p>
        </motion.div>

        {/* How to Apply */}
        <div className="mb-20">
          <h2 className="text-3xl font-display font-bold text-ksv-primary mb-12 text-center">How to Apply for Funding</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-ksv-white rounded-radius-md p-8 shadow-sm hover:shadow-hover border border-ksv-border transition-all group"
              >
                <div className="w-12 h-12 bg-ksv-accent text-ksv-primary rounded-full flex items-center justify-center font-display font-bold text-xl mb-6 relative">
                  {index + 1}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-px bg-ksv-border -translate-y-1/2 ml-4"></div>
                  )}
                </div>
                <h3 className="text-xl font-heading font-bold text-ksv-primary mb-3 group-hover:text-ksv-secondary transition-colors">{step.title}</h3>
                <p className="text-ksv-dark/70 font-body leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Funded Projects Table */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-display font-bold text-ksv-primary mb-2">Funded Projects Directory</h2>
              <p className="text-ksv-dark/60 font-body">Recent grants and approved research initiatives.</p>
            </div>
          </div>
          
          <div className="bg-ksv-white rounded-radius-lg border border-ksv-border overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-body">
                <thead className="bg-ksv-accent/50 text-ksv-primary font-heading uppercase text-sm border-b border-ksv-border">
                  <tr>
                    <th className="px-6 py-4">Project Title</th>
                    <th className="px-6 py-4">Principal Investigator</th>
                    <th className="px-6 py-4">Funding Agency</th>
                    <th className="px-6 py-4">Amount</th>
                    <th className="px-6 py-4">Year</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ksv-border text-ksv-dark/80">
                  {placeholderProjects.map((proj, idx) => (
                    <motion.tr 
                      key={idx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="hover:bg-ksv-light/50 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-ksv-primary">{proj.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{proj.pi}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{proj.agency}</td>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-ksv-secondary">{proj.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{proj.year}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                          proj.status === 'Ongoing' ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${proj.status === 'Ongoing' ? 'bg-amber-500' : 'bg-green-500'}`}></span>
                          {proj.status}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-ksv-light/50 border-t border-ksv-border text-center">
              <p className="text-sm text-ksv-dark/50 italic font-body">Note: This is an abbreviated placeholder list. A complete directory will be available soon.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Download Resources */}
          <div>
            <h2 className="text-2xl font-display font-bold text-ksv-primary mb-6">Download Resources</h2>
            <div className="flex flex-col gap-4">
              {downloads.map((doc, idx) => (
                <motion.a 
                  key={idx}
                  href={`/docs/${doc.title.replace(/\s+/g, '-').toLowerCase()}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-ksv-white rounded-radius-md p-4 flex items-center justify-between group border border-ksv-border hover:border-ksv-secondary hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-ksv-accent text-ksv-primary rounded flex items-center justify-center group-hover:bg-ksv-secondary group-hover:text-ksv-white transition-colors">
                      <FileText size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-ksv-primary group-hover:text-ksv-secondary transition-colors line-clamp-1">{doc.title}</h3>
                      <p className="text-xs text-ksv-dark/50 font-body uppercase tracking-wider">PDF • {doc.size}</p>
                    </div>
                  </div>
                  <Download size={20} className="text-ksv-dark/30 group-hover:text-ksv-secondary flex-shrink-0" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Research Office */}
          <div>
            <h2 className="text-2xl font-display font-bold text-ksv-primary mb-6">Contact Research Office</h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-ksv-primary text-ksv-white rounded-radius-lg p-8 h-full flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-[40px] translate-x-1/3 -translate-y-1/3"></div>
              
              <h3 className="text-xl font-heading font-bold mb-6">Need assistance with your proposal?</h3>
              
              <div className="flex flex-col gap-6 font-body">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-ksv-white/60 text-sm mb-1">Email us at</p>
                    <a href="mailto:research@ksv.ac.in" className="text-lg font-medium hover:text-ksv-secondary transition-colors">research@ksv.ac.in</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-ksv-white/60 text-sm mb-1">Call us on</p>
                    <p className="text-lg font-medium">079 2324 4690</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

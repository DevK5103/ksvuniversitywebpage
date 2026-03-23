import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Building2 } from 'lucide-react';

const gandhinagarInstitutes = [
  { name: "LDRP Institute of Technology and Research", link: "http://ldrp.ac.in", type: "Engineering" },
  { name: "Shri Maneklal M. Patel Institute of Science and Research", link: "http://smpisr.edu.in", type: "Science" },
  { name: "Ashvinbhai A. Patel Commerce College", link: "http://aapcc.in", type: "Commerce" },
  { name: "Bholabhai Patel College of Administration", link: "http://bpcba.org", type: "Management" },
  { name: "Bholabhai Patel Institute of Computer Studies", link: "http://bpccs.org", type: "Computer Science" },
  { name: "S.K. Patel Institute of Management & Comp. Studies (MBA)", link: "http://skpatelmba.org", type: "Management" },
  { name: "S.K. Patel Institute of Management & Comp. Studies (MCA)", link: "http://skpimcs.org", type: "Computer Science" },
  { name: "Chanchalben Mafatlal Patel College of Nursing", link: "http://cmpatelcollegeofnursing.edu.in", type: "Nursing" },
  { name: "C.M. Patel College of Physiotherapy", link: "http://cmpp.org.in", type: "Physiotherapy" },
  { name: "K.B. Institute of Pharmaceutical Education and Research", link: "http://kbiper.ac.in", type: "Pharmacy" },
  { name: "R.H. Patel English Medium B.Ed. College", link: "http://foeksv.org", type: "Education" },
  { name: "S.S. Patel College of Education (Gujarati Medium)", link: "http://foeksv.org", type: "Education" },
  { name: "Vakil D.H. Patel Department of Education (M.Ed.)", link: "http://foeksv.org", type: "Education" },
  { name: "Institute of Social Work (MSW)", link: "http://miplvp.ksv.ac.in", type: "Social Work" }
];

export default function GandhinagarTab() {
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gandhinagarInstitutes.map((inst, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-ksv-white border border-ksv-border/60 hover:border-ksv-secondary hover:shadow-card p-6 rounded-radius-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-ksv-accent text-ksv-primary text-xs font-bold uppercase px-2 py-1 rounded">
                  {inst.type}
                </span>
              </div>
              <h3 className="font-heading font-bold text-kg text-ksv-dark group-hover:text-ksv-primary transition-colors leading-tight mb-2">
                <Building2 size={16} className="inline-block mr-2 text-ksv-secondary" />
                {inst.name}
              </h3>
            </div>
            
            <a 
              href={inst.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-between text-sm font-semibold text-ksv-primary bg-ksv-light hover:bg-ksv-primary hover:text-ksv-white px-4 py-2 rounded transition-colors"
            >
              Visit Website <ExternalLink size={16} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

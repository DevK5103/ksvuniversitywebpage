import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Building2 } from 'lucide-react';

const kadiInstitutes = [
  { name: "Vidush Somany Institute of Technology and Research", link: "http://vsitr.ac.in", type: "Engineering" },
  { name: "S.V. Institute of Management", link: "http://svim.ac.in", type: "Management" },
  { name: "Narsinhbhai Institute of Computer Studies", link: "http://nicsm.ac.in", type: "Computer Science" },
  { name: "Acharya Shree Manubhai J. Patel M.Ed. College", link: "#", type: "Education" },
  { name: "Narsinhbhai Patel College of Comp. Studies & Management", link: "http://npccsm.in", type: "Computer/Mgmt" },
  { name: "HVHP Institute of Post Graduate Studies and Research", link: "http://hvpgrkadi.ac.in", type: "Science" },
  { name: "M.P. Patel College of Commerce Center", link: "#", type: "Commerce" },
  { name: "S.V. College of Education", link: "http://svbed.org", type: "Education" },
  { name: "SBMP Nursing and Paramedical College", link: "http://sbmpnursing.in", type: "Nursing" },
  { name: "Soorajba College of Education for Women (B.Ed.)", link: "http://soorajbabed.org", type: "Education" }
];

export default function KadiTab() {
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kadiInstitutes.map((inst, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-ksv-white border border-ksv-border/60 hover:border-ksv-secondary hover:shadow-card p-6 rounded-radius-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-ksv-primary/10 text-ksv-primary text-xs font-bold uppercase px-2 py-1 rounded">
                  {inst.type}
                </span>
              </div>
              <h3 className="font-heading font-bold text-kg text-ksv-dark group-hover:text-ksv-primary transition-colors leading-tight mb-2">
                <Building2 size={16} className="inline-block mr-2 text-ksv-secondary" />
                {inst.name}
              </h3>
            </div>
            
            {inst.link !== "#" ? (
              <a 
                href={inst.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-between text-sm font-semibold text-ksv-primary bg-ksv-light hover:bg-ksv-primary hover:text-ksv-white px-4 py-2 rounded transition-colors"
              >
                Visit Website <ExternalLink size={16} />
              </a>
            ) : (
              <span className="mt-6 block text-center text-sm font-semibold text-ksv-dark/40 bg-ksv-light px-4 py-2 rounded">
                Website Coming Soon
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

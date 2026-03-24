import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, Lightbulb, FileText, ScrollText, 
  BookMarked, ShieldCheck, GraduationCap, Rocket 
} from 'lucide-react';

const resources = [
  { id: 'supercomputer', title: 'Supercomputer Facility', icon: Server, desc: 'PARAM Shavak high-performance computing system' },
  { id: 'funded-projects', title: 'Funded Projects', icon: Lightbulb, desc: 'Research grants and sponsored initiatives' },
  { id: 'repository', title: 'Institutional Repository', icon: FileText, desc: 'Digital theses, dissertations, and papers' },
  { id: 'papers', title: 'Papers Published', icon: ScrollText, desc: 'Peer-reviewed articles by global faculty' },
  { id: 'books', title: 'Books Published', icon: BookMarked, desc: 'Authored and edited books across disciplines' },
  { id: 'patents', title: 'Patents Filed', icon: ShieldCheck, desc: 'Intellectual property and innovations' },
  { id: 'phd-updates', title: 'PhD Updates', icon: GraduationCap, desc: 'News and notifications for doctoral scholars' },
  { id: 'incubation', title: 'Incubation Centre', icon: Rocket, desc: 'Start-up support and industry simulators' }
];

export default function ResearchResourcesGrid() {
  return (
    <section className="py-24 bg-ksv-white">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-ksv-primary mb-6">Research Hub</h2>
          <div className="w-20 h-1 bg-ksv-secondary mx-auto rounded-full mb-8"></div>
          <p className="font-body text-ksv-dark/70 text-lg leading-relaxed">
            Access our comprehensive suites of research facilities, repositories, and data on scholarly output from across the university ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((res, idx) => {
            const Icon = res.icon;
            return (
              <motion.div 
                key={res.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-ksv-light rounded-radius-md border border-ksv-border p-6 shadow-sm hover:shadow-hover hover:border-ksv-secondary transition-all group flex flex-col items-start cursor-pointer"
              >
                <div className="w-14 h-14 rounded-radius-sm bg-ksv-white flex items-center justify-center mb-6 text-ksv-primary border border-ksv-border/60 group-hover:bg-ksv-secondary group-hover:text-ksv-dark group-hover:border-transparent transition-colors shadow-sm">
                  <Icon size={24} />
                </div>
                <h3 className="font-heading font-bold text-xl text-ksv-dark mb-2 leading-tight group-hover:text-ksv-primary transition-colors">
                  {res.title}
                </h3>
                <p className="font-body text-sm text-ksv-dark/60 leading-relaxed">
                  {res.desc}
                </p>
                <div className="mt-6 w-full flex justify-end">
                  <span className="text-ksv-primary/40 group-hover:text-ksv-primary transition-colors">
                    &rarr;
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe, Users, Shield, Award, Activity, Heart, 
  Briefcase, FileCheck, Library, Target, BicepsFlexed, Music
} from 'lucide-react';

const cells = [
  { id: 'dir', title: 'Department of International Relations', icon: Globe, link: 'http://dirsvkm.com', external: true },
  { id: 'wec', title: 'Women Entrepreneurship Cell (WEC)', icon: Briefcase, link: '/cells/wec' },
  { id: 'wdc', title: 'Women Development Cell (WDC)', icon: Users, link: '/cells/wdc' },
  { id: 'iqac', title: 'Internal Quality Assurance Cell (IQAC)', icon: FileCheck, link: '/cells/iqac' },
  { id: 'mmpsrpc', title: 'M.M. Patel Students Research Project Cell', icon: Library, link: 'http://mmpsrpc.in', external: true },
  { id: 'anti-ragging', title: 'Anti-Ragging Cell', icon: Shield, link: '/cells/anti-ragging' },
  { id: 'iii-cell', title: 'Industry Institute Interaction Cell', icon: Target, link: '/cells/iii-cell' },
  { id: 'sports', title: 'Sports Cell', icon: Award, link: '/cells/sports' },
  { id: 'laksh', title: 'LAKSH — University Fitness Cell', icon: BicepsFlexed, link: '/cells/laksh' },
  { id: 'sarva-netrutva', title: 'Sarva Netrutva', icon: Activity, link: '/cells/sarva-netrutva' },
  { id: 'social', title: 'Social Responsibility Activities', icon: Heart, link: '/cells/social-responsibility' },
  { id: 'vijaya', title: 'Vijaya Performing Arts', icon: Music, link: '/cells/vijaya-arts' }
];

export default function CellsGrid() {
  return (
    <section className="py-24 bg-ksv-light min-h-[500px]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-ksv-primary mb-6">Explore Our Hubs</h2>
          <div className="w-20 h-1 bg-ksv-secondary mx-auto rounded-full mb-8"></div>
          <p className="font-body text-ksv-dark/70 text-lg leading-relaxed">
            KSV has established dedicated cells and centers to ensure holistic development, student welfare, quality assurance, and industry collaboration across all constituent institutes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cells.map((cell, idx) => {
            const Icon = cell.icon;
            const CardContent = (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-ksv-white rounded-radius-md border border-ksv-border p-6 h-full flex flex-col items-center text-center shadow-card hover:shadow-hover hover:border-ksv-secondary transition-all group"
              >
                <div className="w-16 h-16 rounded-full bg-ksv-light flex items-center justify-center mb-6 text-ksv-primary group-hover:bg-ksv-secondary group-hover:text-ksv-dark transition-colors border border-ksv-border/40 group-hover:border-transparent">
                  <Icon size={28} />
                </div>
                <h3 className="font-heading font-bold text-lg text-ksv-dark leading-tight group-hover:text-ksv-primary transition-colors">
                  {cell.title}
                </h3>
                <div className="mt-auto pt-6 w-full">
                  <span className="text-sm font-semibold text-ksv-secondary group-hover:text-ksv-primary transition-colors flex items-center justify-center gap-1">
                    {cell.external ? 'Visit Website ↗' : 'Learn More →'}
                  </span>
                </div>
              </motion.div>
            );

            return cell.external ? (
              <a key={idx} href={cell.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                {CardContent}
              </a>
            ) : (
              <Link key={idx} to={cell.link} className="block h-full">
                {CardContent}
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}

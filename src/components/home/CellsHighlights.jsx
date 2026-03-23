import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, HeartHandshake, Dumbbell, Flag, Users, HandHeart, Sparkles, Building2, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';

const cells = [
  { name: 'Women Empowerment (WEC)', desc: 'Fostering entrepreneurship and leadership among women.', icon: Sparkles, link: '/cells/wec' },
  { name: 'Women Development (WDC)', desc: 'Promoting gender equality and women\'s well-being.', icon: Users, link: '/cells/wdc' },
  { name: 'Sports Cell', desc: '18+ sports, national champions and state-of-the-art facilities.', icon: Flag, link: '/cells/sports' },
  { name: 'LAKSH Fitness', desc: '"It doesn\'t get easier, you get stronger." University fitness program.', icon: Dumbbell, link: '/cells/laksh' },
  { name: 'Industry-Institute (III Cell)', desc: 'Bridging the gap between academia and corporate needs.', icon: Building2, link: '/cells/iii-cell' },
  { name: 'Anti-Ragging', desc: 'Ensuring a safe, positive, and harassment-free environment.', icon: ShieldCheck, link: '/cells/anti-ragging' },
  { name: 'IQAC', desc: 'Internal Quality Assurance Cell maintaining academic excellence.', icon: BrainCircuit, link: '/cells/iqac' },
  { name: 'Sarva Netrutva', desc: '5-day residential leadership development for students.', icon: HeartHandshake, link: '/cells/sarva-netrutva' },
  { name: 'NSS', desc: 'National Service Scheme & community adoption programs.', icon: HandHeart, link: '/cells/social-responsibility' }
];

export default function CellsHighlights() {
  return (
    <div className="py-24 bg-ksv-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-ksv-primary mb-4">Cells & Centres</h2>
            <div className="w-24 h-1 bg-ksv-secondary rounded-full"></div>
            <p className="text-ksv-dark/70 font-body mt-6 max-w-2xl text-lg">
              Dedicated platforms designed to support, nurture, and develop our students beyond the classroom.
            </p>
          </div>
          <Link 
            to="/cells-centers"
            className="hidden md:inline-flex items-center gap-2 text-ksv-secondary font-heading font-bold hover:text-ksv-primary transition-colors group whitespace-nowrap"
          >
            View All Centres
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* CSS Grid for Desktop, Horizontal Scroll for Mobile */}
        <div className="flex overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 snap-x snap-mandatory hide-scrollbar">
          {cells.map((cell, idx) => {
            const Icon = cell.icon;
            return (
              <motion.div
                key={cell.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="min-w-[280px] md:min-w-0 w-full snap-start shrink-0 mr-4 md:mr-0 group"
              >
                <div className="h-full bg-ksv-light border border-ksv-border/60 hover:border-ksv-secondary hover:shadow-shadow-hover rounded-radius-md p-8 transition-all duration-300 flex flex-col">
                  <div className="w-14 h-14 bg-ksv-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-ksv-primary" />
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl text-ksv-dark mb-3">
                    {cell.name}
                  </h3>
                  
                  <p className="font-body text-ksv-dark/70 mb-8 flex-grow">
                    {cell.desc}
                  </p>
                  
                  <Link 
                    to={cell.link}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-heading font-bold text-ksv-primary group-hover:text-ksv-secondary transition-colors group/btn"
                  >
                    Explore Cell
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link 
            to="/cells-centers"
            className="inline-flex items-center gap-2 text-ksv-secondary font-heading font-bold"
          >
            View All Centres
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

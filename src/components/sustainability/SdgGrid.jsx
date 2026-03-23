import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function SdgGrid() {
  const [activeTab, setActiveTab] = useState('SDG');

  const sidebarLinks = [
    'SDG',
    'SDG 1 No Poverty',
    'SDG 2 Zero Hunger',
    'SDG 3 Good Health & Well-Being',
    'SDG 4 Quality Education',
    'SDG 17 Partnerships for the Goals',
    'Policies',
    'Collaboration'
  ];

  const sdgGoals = Array.from({length: 17}, (_, i) => ({
    id: i + 1,
    imageUrl: `https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-${String(i + 1).padStart(2, '0')}.jpg`,
    alt: `SDG ${i + 1}`
  }));

  return (
    <section className="py-12 bg-[#F8F9FA] min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Breadcrumb Header */}
        <div className="flex justify-between items-center bg-[#F8F9FA] pb-6 mb-8 border-b border-ksv-border/40">
          <h1 className="text-3xl font-display font-medium text-ksv-dark">SDG</h1>
          <div className="text-xs font-body font-bold text-ksv-dark/50 uppercase tracking-widest">
            HOME
          </div>
        </div>

        {/* Top Logo Banner */}
        <div className="flex justify-center mb-12">
          <img 
            src="/icons/sdg/sdg.png" 
            alt="Sustainable Development Goals" 
            className="h-24 md:h-32 object-contain"
          />
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row gap-8 bg-ksv-white shadow-sm p-4 md:p-8 rounded-sm">
          
          {/* Left Sidebar Menu */}
          <div className="w-full md:w-64 shrink-0 flex flex-col pt-2 border-r border-[#E0E0E0]/60 pr-4">
            {sidebarLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(link)}
                className={`text-left py-4 px-4 text-sm font-body transition-colors border-b border-[#E0E0E0] last:border-0 ${
                  activeTab === link 
                    ? 'bg-[#F2F2F2] font-semibold text-ksv-dark border-l-4 border-l-[#009EDB]' 
                    : 'text-ksv-dark/70 hover:bg-[#F9F9F9]'
                }`}
              >
                {activeTab === link && link === 'SDG' && (
                  <span className="inline-block w-4 h-4 mr-2 bg-[url('https://upload.wikimedia.org/wikipedia/commons/1/1b/Sustainable_Development_Goals_color_wheel.png')] bg-cover bg-center rounded-full align-middle"></span>
                )}
                {link}
              </button>
            ))}
          </div>

          {/* Right Content Grid */}
          <div className="flex-1">
            {activeTab === 'SDG' ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {sdgGoals.map((goal) => (
                  <motion.div 
                    key={goal.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: goal.id * 0.03 }}
                    className="aspect-square bg-ksv-light border border-ksv-border overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <img 
                      src={goal.imageUrl} 
                      alt={goal.alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
                
                {/* The 18th Box: SDG Color Wheel */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 18 * 0.03 }}
                  className="aspect-square bg-[#F8F9FA] border border-[#E0E0E0] flex items-center justify-center cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Sustainable_Development_Goals_color_wheel.png" 
                    alt="SDG Color Wheel"
                    className="w-3/4 h-3/4 object-contain"
                  />
                </motion.div>
              </div>
            ) : (
              <div className="h-full min-h-[400px] flex items-center justify-center bg-[#F8F9FA] rounded border border-ksv-border border-dashed">
                <p className="text-ksv-dark/50 font-body text-lg">
                  Content for <strong>{activeTab}</strong> will be displayed here.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

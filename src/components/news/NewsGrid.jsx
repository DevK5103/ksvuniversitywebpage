import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, Tag, Search, ArrowRight } from 'lucide-react';

const allNews = [
  { id: 1, type: 'News', category: 'Academic', title: 'KSV Launches New Research Centre for AI & Robotics', date: 'March 18, 2026', excerpt: 'Kadi Sarva Vishwavidyalaya inaugurates a state-of-the-art research centre focused on AI, Machine Learning, and Robotics to accelerate innovation.', img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 2, type: 'Events', category: 'Festival', title: 'Gyanotsav 2026 — National Conference on Science', date: 'March 10, 2026', excerpt: 'KSV proudly hosted 450+ delegates from 30 institutions in our flagship annual National Conference covering multidisciplinary science and engineering.', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 3, type: 'Announcements', category: 'Admissions', title: 'Admissions Open 2026-27 for All Programmes', date: 'March 5, 2026', excerpt: 'Applications for all UG, PG, and PhD programmes for the 2026–27 academic year are now open. Apply before the deadline.', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 4, type: 'News', category: 'Achievement', title: 'KSV Students Win National Innovation Challenge', date: 'Feb 22, 2026', excerpt: 'A team of four engineering students from LDRP-ITR, KSV, secured 1st place at the prestigious Smart India Hackathon 2026.', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 5, type: 'Events', category: 'Cultural', title: 'Annual Sports Meet 2026 — A Grand Success', date: 'Feb 14, 2026', excerpt: "Over 2,000 students participated in the university's annual sports festival spread across the Gandhinagar and Kadi campuses.", img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 6, type: 'Announcements', category: 'Exam', title: 'Winter Examination 2025 Results Declared', date: 'Jan 30, 2026', excerpt: 'Results for all UG and PG programmes for the Winter 2025 examination have been officially published on the Examination Portal.', img: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];

const tabs = ['All', 'News', 'Events', 'Announcements'];

const catColors = {
  Academic: 'bg-blue-100 text-blue-700',
  Festival: 'bg-purple-100 text-purple-700',
  Admissions: 'bg-emerald-100 text-emerald-700',
  Achievement: 'bg-amber-100 text-amber-700',
  Cultural: 'bg-pink-100 text-pink-700',
  Exam: 'bg-red-100 text-red-700',
};

export default function NewsGrid() {
  const [activeTab, setActiveTab] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = allNews.filter(item => {
    const matchesTab = activeTab === 'All' || item.type === activeTab;
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || item.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section className="py-20 bg-ksv-light">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Controls Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          <div className="flex flex-wrap gap-2">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full font-heading font-semibold text-sm transition-all ${
                  activeTab === tab
                    ? 'bg-ksv-primary text-ksv-white shadow-md'
                    : 'bg-ksv-white border border-ksv-border text-ksv-dark hover:bg-ksv-primary/10'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ksv-dark/40" />
            <input
              type="text"
              placeholder="Search news & events..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-ksv-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-ksv-primary/30 bg-ksv-white"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="@container w-full">
          <div className="grid grid-cols-1 @md:grid-cols-2 @4xl:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-ksv-white rounded-radius-lg overflow-hidden border border-ksv-border shadow-card hover:shadow-hover hover:-translate-y-1 transition-all group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-ksv-primary text-ksv-white text-xs font-heading font-bold px-3 py-1 rounded-full">{item.type}</span>
                    <span className={`text-xs font-heading font-semibold px-3 py-1 rounded-full ${catColors[item.category] || 'bg-gray-100 text-gray-700'}`}>{item.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-body text-ksv-dark/50 mb-3">
                    <CalendarDays size={14} />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-ksv-dark leading-tight mb-3 group-hover:text-ksv-primary transition-colors">{item.title}</h3>
                  <p className="font-body text-sm text-ksv-dark/70 leading-relaxed mb-5 line-clamp-3">{item.excerpt}</p>
                  <a href="#" className="text-ksv-primary font-heading font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all group/link">
                    Read More <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
          </div>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-ksv-dark/40 font-body text-lg">
            No results found for "<span className="font-semibold text-ksv-dark/60">{search}</span>"
          </div>
        )}
      </div>
    </section>
  );
}

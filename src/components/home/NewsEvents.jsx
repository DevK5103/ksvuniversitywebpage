import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredEvent = {
  title: 'Annual KSV Gyanotsav 2024: National Tech & Cultural Fest',
  date: 'March 15-17, 2024',
  location: 'Gandhinagar Campus',
  image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
  summary: 'Join us for three days of innovation, culture, and sports as students from across India converge at KSV for our flagship annual festival.',
  link: '/news-events'
};

const recentNews = [
  {
    date: 'Feb 10, 2024',
    title: 'KSV signs MoU with TCS for advanced AI/ML Training Lab',
    category: 'Academic'
  },
  {
    date: 'Jan 28, 2024',
    title: 'Pharm.D students publish ground-breaking research in International Journal',
    category: 'Research'
  },
  {
    date: 'Jan 15, 2024',
    title: 'University athletes win Gold at State Level Swimming Championship',
    category: 'Sports'
  }
];

export default function NewsEvents() {
  return (
    <div className="py-24 bg-ksv-light">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-ksv-primary mb-4">News & Events</h2>
            <div className="w-24 h-1 bg-ksv-secondary rounded-full"></div>
          </div>
          <Link 
            to="/news-events"
            className="hidden md:inline-flex items-center gap-2 text-ksv-secondary font-heading font-bold hover:text-ksv-primary transition-colors group"
          >
            View All Updates
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Featured Event (Takes up 2 columns on lg) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 group bg-ksv-white rounded-radius-lg overflow-hidden shadow-shadow-card hover:shadow-shadow-hover transition-all border border-ksv-border"
          >
            <div className="h-64 sm:h-80 relative overflow-hidden">
              <img 
                src={featuredEvent.image} 
                alt="Featured Event" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-ksv-secondary text-ksv-dark font-heading font-bold px-4 py-2 rounded-radius-sm shadow-md flex flex-col items-center">
                <span className="text-2xl leading-none">15</span>
                <span className="text-xs uppercase tracking-wider">March</span>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex flex-wrap gap-4 mb-4 text-sm font-body text-ksv-dark/70">
                <div className="flex items-center gap-1.5">
                  <Calendar size={16} className="text-ksv-secondary" />
                  <span>{featuredEvent.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={16} className="text-ksv-secondary" />
                  <span>{featuredEvent.location}</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-display font-bold text-ksv-primary mb-3 group-hover:text-ksv-secondary transition-colors">
                {featuredEvent.title}
              </h3>
              
              <p className="font-body text-ksv-dark/80 mb-6">
                {featuredEvent.summary}
              </p>
              
              <Link 
                to={featuredEvent.link}
                className="inline-flex items-center gap-2 bg-ksv-primary text-ksv-white font-heading font-bold px-6 py-3 rounded-radius-sm hover:bg-ksv-dark transition-colors group/btn"
              >
                Register Now
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Recent News List (1 column) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-ksv-primary text-ksv-white p-6 rounded-radius-md shadow-md">
              <h3 className="font-heading font-bold text-xl flex items-center gap-2">
                <Clock size={20} className="text-ksv-secondary" /> Latest Announcements
              </h3>
            </div>
            
            <div className="flex flex-col gap-4 flex-grow">
              {recentNews.map((news, idx) => (
                <Link 
                  key={idx} 
                  to="/news-events"
                  className="bg-ksv-white p-6 rounded-radius-md border border-ksv-border shadow-sm hover:shadow-md hover:border-ksv-secondary/50 transition-all group block h-full flex-grow flex flex-col"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-heading font-bold text-ksv-primary bg-ksv-primary/10 px-2 py-1 rounded">
                      {news.category}
                    </span>
                    <span className="text-xs font-body text-ksv-dark/60">{news.date}</span>
                  </div>
                  <h4 className="font-heading font-bold text-ksv-dark group-hover:text-ksv-secondary transition-colors leading-snug">
                    {news.title}
                  </h4>
                </Link>
              ))}
            </div>
          </motion.div>

        </div>

        <div className="mt-12 text-center md:hidden">
          <Link 
            to="/news-events"
            className="inline-flex items-center gap-2 text-ksv-secondary font-heading font-bold"
          >
            View All Updates
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

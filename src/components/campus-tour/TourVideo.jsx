import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function TourVideo() {
  return (
    <section className="py-24 bg-ksv-dark text-ksv-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-4"
          >
            Virtual Campus Tour
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-ksv-white/70 font-body text-lg max-w-2xl mx-auto"
          >
            Explore the vibrant academic environment, state-of-the-art facilities, and lush green campuses of Kadi Sarva Vishwavidyalaya.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto aspect-video rounded-radius-lg overflow-hidden shadow-2xl border-4 border-ksv-white/10 group cursor-pointer"
        >
          {/* We use a placeholder image and a play button overlay to simulate a lazy-loaded YouTube Iframe */}
          <div className="absolute inset-0 bg-ksv-dark/40 group-hover:bg-ksv-dark/20 transition-all z-10 flex items-center justify-center">
            <div className="bg-ksv-secondary text-ksv-dark w-20 h-20 rounded-full flex items-center justify-center pl-2 shadow-[0_0_30px_rgba(252,163,17,0.5)] transform group-hover:scale-110 transition-transform">
              <Play size={40} fill="currentColor" />
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Campus Tour Thumbnail" 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
}

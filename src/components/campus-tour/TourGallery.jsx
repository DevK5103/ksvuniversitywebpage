import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { url: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", caption: "Main Library", height: "h-64" },
  { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", caption: "Central Campus", height: "h-96" },
  { url: "https://images.unsplash.com/photo-1577415124269-b9140d10b714?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", caption: "Laboratories", height: "h-80" },
  { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", caption: "Student Life", height: "h-72" },
  { url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", caption: "Computing Center", height: "h-64" },
  { url: "https://images.unsplash.com/photo-1519452314544-1d0d970e5b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", caption: "Seminar Halls", height: "h-80" }
];

export default function TourGallery() {
  return (
    <section className="py-24 bg-ksv-white">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-ksv-primary mb-4">Glimpses of KSV</h2>
          <div className="w-16 h-1 bg-ksv-secondary mx-auto rounded-full"></div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className={`relative rounded-radius-md overflow-hidden group break-inside-avoid ${img.height}`}
            >
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ksv-dark/90 via-ksv-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-ksv-white font-heading font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.caption}</h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

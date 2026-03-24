import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const photos = [
  { id: 1, url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800', span: 'col-span-1 row-span-2' },
  { id: 2, url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600', span: 'col-span-1 row-span-1' },
  { id: 3, url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600', span: 'col-span-1 row-span-1' },
  { id: 4, url: 'https://images.unsplash.com/photo-1558222218-b7b54eede3f3?auto=format&fit=crop&q=80&w=600', span: 'col-span-1 row-span-1' },
  { id: 5, url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800', span: 'col-span-2 row-span-1 md:col-span-1' }
];

export default function PhotoGallery() {
  return (
    <div className="py-24 bg-ksv-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-ksv-primary mb-4">Life at KSV</h2>
            <div className="w-24 h-1 bg-ksv-secondary rounded-full"></div>
            <p className="text-ksv-dark/70 font-body mt-6 max-w-xl text-lg">
              A glimpse into our vibrant campus, cultural events, and academic excellence.
            </p>
          </div>
          <Link 
            to="/campus-tour"
            className="hidden md:inline-flex items-center gap-2 text-ksv-secondary font-heading font-bold hover:text-ksv-primary transition-colors group whitespace-nowrap"
          >
            View Full Gallery
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {photos.map((photo, idx) => (
            <motion.div 
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative group overflow-hidden rounded-radius-md shadow-sm ${photo.span}`}
            >
              <img 
                src={photo.url} 
                alt={`KSV Campus Life ${idx + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-ksv-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-ksv-white rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ImageIcon size={24} className="text-ksv-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link 
            to="/campus-tour"
            className="inline-flex items-center gap-2 text-ksv-secondary font-heading font-bold"
          >
            View Full Gallery
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

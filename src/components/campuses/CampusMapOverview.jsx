import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

export default function CampusMapOverview() {
  return (
    <section className="relative w-full h-[50vh] min-h-[400px] bg-ksv-dark">
      {/* Map Embed (Iframe pointing to KSV Gandhinagar generally) */}
      <div className="absolute inset-0 opacity-60 mix-blend-luminosity">
        <iframe
          title="KSV Campus Locations"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.4338435166316!2d72.634629!3d23.235948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2c0000000001%3A0x6b1db97217311c1e!2sKadi%20Sarva%20Vishwavidyalaya!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-gradient-to-t from-ksv-dark via-ksv-dark/40 to-transparent"></div>
      
      <div className="relative z-10 w-full h-full flex items-end justify-center pb-16 px-6">
        <div className="bg-ksv-white p-8 rounded-radius-lg shadow-hover max-w-4xl w-full flex flex-col md:flex-row justify-between items-center gap-8 border-b-4 border-ksv-secondary">
          <div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-ksv-primary mb-2">Our Campuses</h1>
            <p className="font-body text-ksv-dark/70">A sprawling educational ecosystem spanning across Gandhinagar & Kadi.</p>
          </div>
          
          <div className="flex gap-4 shrink-0">
            <div className="bg-ksv-light border border-ksv-border p-4 rounded-radius-md flex items-center gap-3">
              <div className="bg-ksv-secondary/20 p-2 rounded-full text-ksv-secondary"><MapPin size={20} /></div>
              <div>
                <h4 className="font-heading font-bold text-sm text-ksv-dark">Gandhinagar</h4>
                <p className="font-body text-xs text-ksv-dark/60">14 Institutes</p>
              </div>
            </div>
            <div className="bg-ksv-light border border-ksv-border p-4 rounded-radius-md flex items-center gap-3">
              <div className="bg-ksv-secondary/20 p-2 rounded-full text-ksv-secondary"><Navigation size={20} /></div>
              <div>
                <h4 className="font-heading font-bold text-sm text-ksv-dark">Kadi</h4>
                <p className="font-body text-xs text-ksv-dark/60">10 Institutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

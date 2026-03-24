import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Clock } from 'lucide-react';

export default function ContactInfo() {
  return (
    <section className="py-20 bg-ksv-white">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-ksv-primary mb-4">Get in Touch</h2>
          <div className="w-16 h-1 bg-ksv-secondary mx-auto rounded-full mb-6"></div>
          <p className="font-body text-ksv-dark/70 text-lg max-w-2xl mx-auto">
            We are here to help and answer any questions you might have. We look forward to hearing from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Main Campus Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-ksv-light border-t-4 border-ksv-primary rounded-b-radius-lg p-8 shadow-card hover:shadow-hover transition-shadow"
          >
            <h3 className="text-2xl font-heading font-bold text-ksv-dark mb-6 flex items-center gap-3">
              <span className="bg-ksv-primary/10 p-2 rounded-full text-ksv-primary"><MapPin size={24} /></span>
              Main Campus (Gandhinagar)
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-ksv-secondary shrink-0 mt-1" size={20} />
                <p className="font-body text-ksv-dark/80">LDRP Institute of Technology and Research, Sector-15, Near KH-5, Gandhinagar - 382015, Gujarat, India</p>
              </li>
              <li className="flex gap-4">
                <Phone className="text-ksv-secondary shrink-0 mt-1" size={20} />
                <p className="font-body text-ksv-dark/80">+91 - 079 - 2324 4690<br />+91 - 09408801690</p>
              </li>
              <li className="flex gap-4">
                <Mail className="text-ksv-secondary shrink-0 mt-1" size={20} />
                <a href="mailto:info@ksv.ac.in" className="font-body text-ksv-primary hover:underline">info@ksv.ac.in</a>
              </li>
            </ul>
          </motion.div>

          {/* Global Office Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-ksv-light border-t-4 border-ksv-secondary rounded-b-radius-lg p-8 shadow-card hover:shadow-hover transition-shadow"
          >
            <h3 className="text-2xl font-heading font-bold text-ksv-dark mb-6 flex items-center gap-3">
              <span className="bg-ksv-secondary/20 p-2 rounded-full text-ksv-dark"><MapPin size={24} /></span>
              Kadi Campus
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-ksv-primary shrink-0 mt-1" size={20} />
                <p className="font-body text-ksv-dark/80">B/h Railway Station,<br />Kadi - 382715,<br />District Mehsana, North Gujarat, India</p>
              </li>
              <li className="flex gap-4">
                <Phone className="text-ksv-primary shrink-0 mt-1" size={20} />
                <p className="font-body text-ksv-dark/80">+91 - 079 - 2324 4690</p>
              </li>
              <li className="flex gap-4">
                <Clock className="text-ksv-primary shrink-0 mt-1" size={20} />
                <p className="font-body text-ksv-dark/80">Mon-Fri: 9:00 AM - 5:00 PM IST</p>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Quick Links Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-ksv-primary to-ksv-dark text-ksv-white rounded-radius-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-20 shadow-lg relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs><pattern id="dots2" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="currentColor" /></pattern></defs>
              <rect width="100%" height="100%" fill="url(#dots2)" />
            </svg>
          </div>
          
          <div className="relative z-10 w-full md:w-2/3">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">Essential Quick Links</h3>
            <p className="text-ksv-white/70 font-body text-sm md:text-base">Direct access portals for staff, alumni, and prospective employees.</p>
          </div>
          <div className="relative z-10 w-full md:w-auto shrink-0 flex flex-wrap gap-4">
            <a href="http://webmail.ksv.ac.in/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white font-heading font-semibold px-6 py-3 rounded border border-white/20 transition-colors tracking-wide text-sm flex items-center gap-2">
              <Mail size={16} /> Webmail
            </a>
            <a href="http://14.139.122.102/onlinejobportal/" target="_blank" rel="noopener noreferrer" className="bg-ksv-secondary hover:bg-white text-ksv-dark font-heading font-semibold px-6 py-3 rounded transition-colors tracking-wide text-sm flex items-center gap-2">
              <Globe size={16} /> Job Portal
            </a>
          </div>
        </motion.div>

        {/* Google Maps Embed */}
        <div className="w-full h-96 md:h-[500px] rounded-radius-lg overflow-hidden border-4 border-ksv-light shadow-md">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x395c2b0e6e7d695b%3A0xf695da7cc411648a!2sKadi%20Sarva%20Vishwavidyalaya!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="KSV Main Campus Location"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

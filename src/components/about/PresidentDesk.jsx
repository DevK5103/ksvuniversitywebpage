import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import AlertBanner from '../layout/AlertBanner';

export default function PresidentDesk() {
  return (
    <section id="president-desk" className="py-24 bg-ksv-light scroll-mt-24">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-ksv-primary mb-4">From the President's Desk</h2>
          <div className="w-24 h-1 bg-ksv-secondary mx-auto rounded-full"></div>
        </div>

        <AlertBanner 
          type="info" 
          message="Notice: The full text of the President's message is pending final approval from the university administration." 
        />

        <div className="bg-ksv-white rounded-radius-lg shadow-card border border-ksv-border/40 overflow-hidden mt-6">
          <div className="flex flex-col md:flex-row">
            
            {/* Image Column */}
            <div className="w-full md:w-2/5 relative">
              <div className="absolute inset-0 bg-ksv-primary/10"></div>
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=600" 
                alt="Shri Vallabhbhai M. Patel" 
                className="w-full h-full object-cover min-h-[400px]"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ksv-dark/90 to-transparent p-6 text-ksv-white">
                <h3 className="font-heading font-bold text-xl">Shri Vallabhbhai M. Patel</h3>
                <p className="font-body text-sm text-ksv-secondary">President, Kadi Sarva Vishwavidyalaya</p>
                <p className="font-body text-xs text-ksv-white/70">Chairman, SVKM</p>
              </div>
            </div>

            {/* Message Column */}
            <div className="w-full md:w-3/5 p-8 md:p-12 relative">
              <Quote className="absolute top-8 left-8 text-ksv-secondary/10" size={80} />
              
              <div className="relative z-10 space-y-6 font-body text-ksv-dark/80 leading-relaxed text-lg">
                <p>
                  Welcome to <strong>Kadi Sarva Vishwavidyalaya</strong>. Education is the most powerful weapon which you can use to change the world. At KSV, we are continuously striving to provide quality education to the youth of Gujarat, empowering them to become leaders of tomorrow.
                </p>
                <p>
                  Since the inception of the Sarva Vidyalaya Kelavani Mandal in 1919, our sole objective has been <em>"Kar Bhala Hoga Bhala"</em>. We do not look at education as a commercial venture, but as our humble contribution to building a stronger, more capable nation.
                </p>
                <p>
                  It gives me immense pride to see our students innovating, leading, and excelling across the globe. Our dedicated faculty, state-of-the-art infrastructure, and deeply rooted value system ensure holistic development of every student who walks through our gates.
                </p>
                <p className="pt-4 font-heading font-bold text-ksv-primary text-xl">
                  Dream big, work hard, and the university will always stand by you to help you achieve your goals.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

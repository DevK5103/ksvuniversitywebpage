import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, integrate React Hook Form + Zod and API call here.
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-24 bg-ksv-light relative">
      <div className="max-w-[800px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-ksv-primary mb-4">Send Us a Message</h2>
          <p className="font-body text-ksv-dark/70 text-lg">Use the form below to reach out for admissions, general inquiries, or feedback.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-ksv-white rounded-radius-lg shadow-xl border border-ksv-border p-8 md:p-12"
        >
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 flex flex-col items-center justify-center text-center"
            >
              <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-display font-bold text-ksv-dark mb-2">Message Sent Successfully!</h3>
              <p className="font-body text-ksv-dark/70">Thank you for reaching out. Our team will get back to you shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-heading font-semibold text-ksv-dark text-sm block">Full Name <span className="text-red-500">*</span></label>
                  <input required type="text" className="w-full border border-ksv-border rounded px-4 py-3 font-body text-ksv-dark focus:outline-none focus:border-ksv-primary focus:ring-1 focus:ring-ksv-primary transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="font-heading font-semibold text-ksv-dark text-sm block">Email Address <span className="text-red-500">*</span></label>
                  <input required type="email" className="w-full border border-ksv-border rounded px-4 py-3 font-body text-ksv-dark focus:outline-none focus:border-ksv-primary focus:ring-1 focus:ring-ksv-primary transition-all" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-heading font-semibold text-ksv-dark text-sm block">Mobile Number <span className="text-red-500">*</span></label>
                  <input required type="tel" className="w-full border border-ksv-border rounded px-4 py-3 font-body text-ksv-dark focus:outline-none focus:border-ksv-primary focus:ring-1 focus:ring-ksv-primary transition-all" placeholder="+91 98765 43210" />
                </div>
                <div className="space-y-2">
                  <label className="font-heading font-semibold text-ksv-dark text-sm block">Subject / Inquiry Type</label>
                  <select className="w-full border border-ksv-border rounded px-4 py-3 font-body text-ksv-dark focus:outline-none focus:border-ksv-primary focus:ring-1 focus:ring-ksv-primary transition-all bg-white appearance-none">
                    <option value="">Select an option...</option>
                    <option value="admission">Admissions</option>
                    <option value="academic">Academic Programs</option>
                    <option value="research">Research & Ph.D</option>
                    <option value="alumni">Alumni Relations</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-heading font-semibold text-ksv-dark text-sm block">Your Message <span className="text-red-500">*</span></label>
                <textarea required rows={5} className="w-full border border-ksv-border rounded px-4 py-3 font-body text-ksv-dark focus:outline-none focus:border-ksv-primary focus:ring-1 focus:ring-ksv-primary transition-all resize-y" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="w-full bg-ksv-primary hover:bg-ksv-dark text-ksv-white font-heading font-bold text-lg py-4 rounded transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                <Send size={20} /> Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Construction } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-ksv-light px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-24 h-24 bg-ksv-primary/10 rounded-full flex items-center justify-center text-ksv-primary mb-8"
      >
        <Construction size={48} />
      </motion.div>
      
      <h1 className="text-6xl md:text-8xl font-display font-bold text-ksv-primary mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-ksv-dark mb-6">Page Not Found</h2>
      
      <p className="font-body text-ksv-dark/70 max-w-md mx-auto mb-10">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center justify-center gap-2 px-6 py-3 border border-ksv-border rounded hover:bg-white text-ksv-dark font-heading font-semibold transition-all shadow-sm"
        >
          <ArrowLeft size={18} /> Go Back
        </button>
        <Link 
          to="/"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-ksv-primary hover:bg-ksv-dark rounded text-ksv-white font-heading font-semibold transition-all shadow-md"
        >
          <Home size={18} /> Return Home
        </Link>
      </div>
    </div>
  );
}

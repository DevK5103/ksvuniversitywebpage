import React from 'react';
import { motion } from 'framer-motion';

export default function PageLoader() {
  return (
    <div className="w-full flex-grow flex items-center justify-center bg-ksv-white min-h-[60vh]">
      <div className="flex flex-col items-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-ksv-light border-t-ksv-primary rounded-full mb-4"
        />
        <h2 className="font-display text-ksv-primary font-bold text-xl tracking-wider">KSV</h2>
      </div>
    </div>
  );
}

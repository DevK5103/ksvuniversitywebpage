import React from 'react';
import { motion } from 'framer-motion';

export default function PageLoader() {
  return (
    <div
      className="w-full flex-grow flex items-center justify-center min-h-[60vh] overflow-hidden"
      style={{ background: 'radial-gradient(circle at center, #173561 0%, #0d1b2a 58%, #081321 100%)' }}
    >
      <div className="relative w-[360px] h-[360px] flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'conic-gradient(from 0deg, rgba(96,193,255,0.08), rgba(96,193,255,0.75), rgba(255,255,255,0.15), rgba(96,193,255,0.08))',
            WebkitMask:
              'radial-gradient(farthest-side, transparent calc(100% - 10px), #000 calc(100% - 10px))',
            mask: 'radial-gradient(farthest-side, transparent calc(100% - 10px), #000 calc(100% - 10px))',
          }}
        />

        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.72, 0.3] }}
          transition={{ duration: 2.1, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-[270px] h-[270px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(96,193,255,0.25) 0%, rgba(96,193,255,0) 74%)',
          }}
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[272px] h-[272px] rounded-full border border-white/15"
        />

        <motion.div
          animate={{ scale: [1, 1.14, 1], opacity: [0.2, 0.95, 0.2] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-[340px] h-[340px] rounded-full border border-[#8dd6ff]/40"
        />

        <motion.div
          animate={{ scale: [1.12, 1, 1.12], opacity: [0.85, 0.25, 0.85] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-[232px] h-[232px] rounded-full border border-white/30"
        />

        <div className="absolute w-[224px] h-[224px] rounded-full border border-white/10" />

        <div className="relative z-10 w-[172px] h-[172px] rounded-full bg-white/10 backdrop-blur-[1px] border border-white/25 shadow-[0_0_26px_rgba(96,193,255,0.35)] flex items-center justify-center p-5">
          <img src="/logos/ksv-logo.svg" alt="KSV Logo" className="w-full h-full object-contain drop-shadow-[0_0_6px_rgba(255,255,255,0.55)]" />
        </div>

        <motion.div
          animate={{ opacity: [0.45, 1, 0.45], y: [0, -2, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-12 text-center"
        >
          <p className="font-heading text-ksv-white/85 text-xs tracking-[0.24em] uppercase">Loading KSV Experience</p>
        </motion.div>
      </div>
    </div>
  );
}

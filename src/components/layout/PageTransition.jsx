import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0, scale: 0.98, y: 10 },
  in: { opacity: 1, scale: 1, y: 0 },
  out: { opacity: 0, scale: 1.02, y: -10 }
};

const pageTransition = {
  type: "tween",
  ease: "circOut",
  duration: 0.4
};

export default function PageTransition({ children }) {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full flex-grow flex flex-col"
    >
      {children}
    </motion.div>
  );
}

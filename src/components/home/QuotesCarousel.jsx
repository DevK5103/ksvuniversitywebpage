import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  {
    id: 1,
    text: "True education must correspond to the surrounding circumstances or it is not a healthy growth.",
    author: "Mahatma Gandhi",
    date: "27 July 1929",
    context: "Speaking on the ethos of Sarva Vidyalaya"
  },
  {
    id: 2,
    text: "The dedication to providing quality education here is truly inspiring. It's the foundation for our future explorers and leaders.",
    author: "Astronaut Sunita Williams",
    date: "21 Sep 2007",
    context: "During her visit to the KSV campus"
  },
  {
    id: 3,
    text: "Education is the basis of all progress. The work done by this institution is a service to the nation.",
    author: "Sir Sayajirao Gaekwad III",
    date: "04 Jan 1926",
    context: "Acknowledging the trust's early efforts"
  }
];

export default function QuotesCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-24 bg-ksv-primary relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
      <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
        <div className="mb-4">
          <span className="font-display font-bold text-8xl text-ksv-secondary/30 leading-none block transform translate-y-6">“</span>
        </div>
        
        <div className="relative h-[250px] md:h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <h3 className="font-display italic text-2xl md:text-4xl text-white mb-8 leading-relaxed max-w-4xl mx-auto shadow-sm">
                {quotes[current].text}
              </h3>
              
              <div className="flex flex-col items-center">
                <span className="font-heading font-bold text-ksv-secondary text-lg uppercase tracking-wider">
                  — {quotes[current].author}
                </span>
                <span className="font-body text-white/50 text-sm mt-1">
                  {quotes[current].date} | {quotes[current].context}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === idx ? 'bg-ksv-secondary w-8' : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Show quote ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

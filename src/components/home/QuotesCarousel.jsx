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
    <div className="py-24 bg-ksv-accent">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <div className="mb-8">
          <span className="font-display font-bold text-6xl text-ksv-secondary/40 leading-none">“</span>
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
              <h3 className="font-display italic text-2xl md:text-3xl text-ksv-primary mb-8 leading-relaxed">
                {quotes[current].text}
              </h3>
              
              <div className="flex flex-col items-center">
                <span className="font-heading font-bold text-ksv-dark text-lg uppercase tracking-wider">
                  — {quotes[current].author}
                </span>
                <span className="font-body text-ksv-dark/60 text-sm mt-1">
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
              className={`w-2 h-2 rounded-full transition-all ${
                current === idx ? 'bg-ksv-primary w-6' : 'bg-ksv-primary/30 hover:bg-ksv-primary/50'
              }`}
              aria-label={`Show quote ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

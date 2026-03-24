import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: "KSV – Your Door To The Future",
    subtitle: "Empowering minds, transforming lives since 2007.",
    cta: "Explore Admissions",
    link: "/academics/admission",
    gradient: "from-ksv-primary/90 to-black/80",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 2,
    title: "Campus Tour",
    subtitle: "Experience our world-class facilities and vibrant campus life.",
    cta: "Take Virtual Tour",
    link: "/campus-tour",
    gradient: "from-blue-900/90 to-black/80",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=2086"
  },
  {
    id: 3,
    title: "Backed and Managed By Nine Decade Old Trust",
    subtitle: "Sarva Vidyalaya Kelavani Mandal (SVKM) – Serving society since 1919.",
    cta: "About the Trust",
    link: "/about#svkm-trust",
    gradient: "from-slate-900/90 to-black/80",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 4,
    title: "More than 20 Constituent Colleges",
    subtitle: "A diverse ecosystem of academic excellence across Gandhinagar and Kadi.",
    cta: "View Campuses",
    link: "/campuses",
    gradient: "from-emerald-900/90 to-black/80",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 5,
    title: "Multidisciplinary Professional Courses",
    subtitle: "Offering cutting-edge programmes designed for the modern world.",
    cta: "Browse Academics",
    link: "/academics",
    gradient: "from-purple-900/90 to-black/80",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1974"
  },
  {
    id: 6,
    title: "World Class Infrastructure",
    subtitle: "State-of-the-art laboratories, libraries, and sports complexes.",
    cta: "Discover Facilities",
    link: "/campus-tour",
    gradient: "from-ksv-dark/90 to-black/80",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=2069"
  },
  {
    id: 7,
    title: "State of the Art Education",
    subtitle: "Fostering innovation, research, and holistic development.",
    cta: "Our Research",
    link: "/research",
    gradient: "from-ksv-secondary/80 to-black/90",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2070"
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Autoplay
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div 
      className="relative w-full h-[90vh] min-h-[600px] overflow-hidden bg-ksv-dark"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image & Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${slides[current].gradient}`} />

          {/* Content */}
          <div className="relative z-10 w-full h-full max-w-[1280px] mx-auto px-6 flex flex-col justify-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-3xl"
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-ksv-white leading-tight mb-4">
                {slides[current].title}
              </h2>
              <p className="text-lg md:text-2xl text-ksv-white/90 font-body mb-8 max-w-2xl">
                {slides[current].subtitle}
              </p>
              <Link 
                to={slides[current].link}
                className="inline-flex items-center gap-2 bg-ksv-secondary hover:bg-yellow-500 text-ksv-dark font-heading font-bold px-8 py-4 rounded-radius-sm transition-all shadow-md group"
              >
                {slides[current].cta}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-ksv-secondary/90 text-white hover:text-ksv-dark backdrop-blur transition-all disabled:opacity-50"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-ksv-secondary/90 text-white hover:text-ksv-dark backdrop-blur transition-all disabled:opacity-50"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Pill Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-300 rounded-full h-2 ${
              current === idx ? 'w-8 bg-ksv-secondary' : 'w-2 bg-ksv-white/50 hover:bg-ksv-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useAnimation, animate } from 'framer-motion';
import { Building2, GraduationCap, Users, Map } from 'lucide-react';

const stats = [
  { label: 'Acre Campus', value: 100, suffix: '+', icon: Map },
  { label: 'Institutes', value: 30, suffix: '+', icon: Building2 },
  { label: 'Teachers', value: 5000, suffix: '+', icon: Users },
  { label: 'Students', value: 50000, suffix: '+', icon: GraduationCap }
];

function Counter({ from, to, duration = 2 }) {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.floor(value).toLocaleString();
          }
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return <span ref={nodeRef}>{from}</span>;
}

export default function StatsCounter() {
  return (
    <div className="relative bg-ksv-primary py-16 overflow-hidden">
      {/* Subtle Geometric Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(60deg, #ffffff77 25%, transparent 25.5%, transparent 75%, #ffffff77 75%, #ffffff77), linear-gradient(60deg, #ffffff77 25%, transparent 25.5%, transparent 75%, #ffffff77 75%, #ffffff77)',
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px'
        }}
      />
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-ksv-white/20">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
                className="flex flex-col items-center justify-center pt-8 md:pt-0"
              >
                <div className="bg-ksv-secondary/20 p-4 rounded-full mb-4 group-hover:bg-ksv-secondary/30 transition-colors">
                  <Icon size={40} className="text-ksv-secondary" />
                </div>
                <div className="flex items-baseline gap-1 text-ksv-white font-data text-4xl lg:text-5xl font-bold mb-2">
                  <Counter from={0} to={stat.value} duration={2.5} />
                  <span className="text-ksv-secondary">{stat.suffix}</span>
                </div>
                <p className="text-ksv-white/80 font-heading text-sm uppercase tracking-wider font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

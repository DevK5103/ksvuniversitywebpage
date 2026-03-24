import React from 'react';
import { Link } from 'react-router-dom';

export default function AcademicProgrammes() {
  return (
    <section className="py-20 bg-ksv-white">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-ksv-dark mb-4">Admissions 2026</h2>
          <p className="font-body text-ksv-dark/80 max-w-3xl mx-auto text-lg">
            KSV offers multiple courses ranging from Engineering and Technology, Sciences, Humanities, Law and Management.
          </p>
        </div>

        {/* 3-Column Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 rounded-xl overflow-hidden shadow-lg w-full">
          
          {/* Left: Undergraduate */}
          <div className="bg-ksv-primary text-white p-10 md:p-12 flex flex-col justify-between min-h-[400px]">
            <h3 className="text-2xl md:text-3xl font-heading font-semibold leading-tight hover:text-ksv-secondary transition-colors cursor-pointer">
              Undergraduate <br /> Admissions
            </h3>
            
            <p className="font-body text-white/90 text-sm md:text-base leading-relaxed my-8">
              B.Tech., B.Sc., BA LLB., LLB, B.A. (Hons.), B.B.A. (Hons.), B.Com. (Hons.)
            </p>
            
            <div>
              <Link 
                to="/academics/courses?program=undergraduate" 
                className="inline-flex items-center justify-center border-2 border-white px-8 py-3 rounded text-sm font-heading font-semibold hover:bg-white hover:text-ksv-primary transition-all duration-300"
              >
                Know More
              </Link>
            </div>
          </div>

          {/* Middle: Photo */}
          <div className="h-64 md:h-auto relative w-full">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Students in classroom" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: Postgraduate */}
          <div className="bg-ksv-primary text-white p-10 md:p-12 flex flex-col justify-between min-h-[400px]">
            <h3 className="text-2xl md:text-3xl font-heading font-semibold leading-tight hover:text-ksv-secondary transition-colors cursor-pointer">
              Postgraduate <br /> Admissions
            </h3>
            
            <p className="font-body text-white/90 text-sm md:text-base leading-relaxed my-8">
              M.A., M.Com., M.B.A., M.Sc., M.Tech.
            </p>
            
            <div>
              <Link 
                to="/academics/courses?program=postgraduate" 
                className="inline-flex items-center justify-center border-2 border-white px-8 py-3 rounded text-sm font-heading font-semibold hover:bg-white hover:text-ksv-primary transition-all duration-300"
              >
                Know More
              </Link>
            </div>
          </div>

        </div>

        {/* Global CTA */}
        <div className="mt-12 text-center">
          <Link 
            to="/academics/courses"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-ksv-primary hover:bg-ksv-primary hover:text-white text-ksv-primary font-heading font-bold px-8 py-3 rounded text-sm transition-all duration-300 shadow-sm"
          >
            Know More About Admission
          </Link>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const admissionCards = [
  {
    title: 'Undergraduate',
    description: 'B.E. · BBA · BCA · B.Pharm B.Ed. · B.Com',
    link: '/academics/courses?program=undergraduate',
    img: '/images/campus/campus-1.jpg'
  },
  {
    title: 'Postgraduate',
    description: 'MBA · M.E. · MCA · M.Pharm M.Sc · MSW M.Com & more',
    link: '/academics/courses?program=postgraduate',
    img: '/images/campus/campus-2.jpg'
  },
  {
    title: 'PhD / Research',
    description: '17 Doctoral Disciplines. NET/GATE exemption',
    link: '/academics/courses?program=phd',
    img: '/images/campus/campus-3.jpg'
  },
  {
    title: 'Certificate & Diploma',
    description: 'Vocational Short Courses',
    link: '/academics/courses?program=certificate',
    img: '/images/campus/campus-4.jpg'
  }
];

export default function AdmissionsSection() {
  return (
    <section className="py-20 bg-ksv-light">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl text-ksv-primary mb-4">Admissions</h2>
          <p className="font-body text-ksv-dark/80 text-lg">Find your programme at KSV</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {admissionCards.map((card, idx) => (
            <Link 
              key={idx} 
              to={card.link}
              className="group bg-white rounded-radius-lg overflow-hidden shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 border-l-4 border-transparent hover:border-ksv-secondary flex flex-col"
            >
              <div className="h-48 overflow-hidden bg-ksv-border/30 relative">
                <div className="absolute inset-0 bg-ksv-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                {/* Fallback pattern if image is missing */}
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading font-bold text-xl text-ksv-primary mb-3">
                  {card.title}
                </h3>
                <p className="font-body text-sm text-ksv-dark/70 mb-6 flex-grow">
                  {card.description}
                </p>
                <div className="flex items-center text-ksv-secondary font-heading font-semibold text-sm group-hover:text-ksv-primary transition-colors mt-auto">
                  Know More 
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

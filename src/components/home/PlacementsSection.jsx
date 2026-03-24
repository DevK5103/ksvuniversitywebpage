import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const stats = [
  { value: '18', suffix: ' LPA', label: 'Highest Package' },
  { value: '300', suffix: '+', label: 'Companies Visited' },
  { value: '1500', suffix: '+', label: 'Offers Made' }
];

const recruiterLogos = [
  'TCS', 'Infosys', 'Wipro', 'HCL', 'Deloitte', 'EY', 'KPMG', 'Abbott', 'Google', 'IBM', 'Cognizant', 'Tech Mahindra'
];

const studentStories = [
  { name: 'Rahul Patel', program: 'B.E. Computer Eng', company: 'Google', quote: '"KSV transformed my technical skills and provided excellent placement support."' },
  { name: 'Priya Shah', program: 'MBA Finance', company: 'Deloitte', quote: '"The faculty mentorship was instrumental in securing my dream role."' },
  { name: 'Amit Kumar', program: 'B.Pharm', company: 'Abbott', quote: '"State-of-the-art labs and industry connections opened doors for me."' }
];

export default function PlacementsSection() {
  return (
    <section className="py-20 bg-ksv-light relative overflow-hidden text-ksv-dark">
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Row 1: Headline + Stats */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-16">
          <div className="lg:w-1/3">
            <h2 className="font-display font-bold text-4xl mb-4 text-ksv-primary">Our Placements</h2>
            <p className="font-body text-ksv-dark/80">Connecting KSV graduates with industry leaders across the globe.</p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white shadow-sm border border-ksv-border p-6 rounded-radius-lg text-center">
                <div className="font-display font-bold text-3xl md:text-4xl text-ksv-secondary mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="font-body text-sm text-ksv-dark font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Recruiter Logo Marquee */}
        <div className="mb-20 overflow-hidden relative w-full">
          {/* Fading edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-ksv-light to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-ksv-light to-transparent z-10"></div>
          
          <div className="flex w-fit animate-marquee hover:animation-paused">
            {[...recruiterLogos, ...recruiterLogos].map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 w-40 h-24 mx-4 bg-white border border-ksv-border rounded-radius-md flex items-center justify-center font-heading font-bold text-xl text-ksv-dark/50 shadow-sm hover:text-ksv-primary hover:shadow-hover hover:border-ksv-secondary transition-all duration-300">
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Row 4: Student Success Stories */}
        <div className="mb-16">
          <h3 className="font-heading font-bold text-2xl text-center mb-10 text-ksv-primary">Alumni Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentStories.map((story, idx) => (
              <div key={idx} className="bg-white rounded-radius-lg p-6 shadow-card hover:-translate-y-2 transition-transform duration-300 relative border-l-4 border-ksv-secondary text-ksv-dark">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-ksv-border/50 flex-shrink-0 overflow-hidden">
                    <img src={`/images/people/alumni-${(idx % 3) + 1}.jpg`} alt={story.name} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-ksv-primary">{story.name}</h4>
                    <p className="font-body text-xs text-ksv-dark/60">{story.program}</p>
                    <p className="font-body text-sm font-semibold text-ksv-secondary mt-1">{story.company}</p>
                  </div>
                </div>
                <p className="font-body italic text-ksv-dark/80 text-sm">
                  {story.quote}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/placements" 
            className="inline-flex items-center gap-2 bg-ksv-primary text-white px-8 py-4 rounded-full font-heading font-bold hover:bg-ksv-secondary transition-colors duration-300 shadow-md hover:shadow-hover"
          >
            Explore Full Placements
            <ArrowRight size={20} />
          </Link>
        </div>

      </div>
    </section>
  );
}

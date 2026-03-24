import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Users, Briefcase, ExternalLink, ArrowRight } from 'lucide-react';

const alumniStories = [
  { name: 'Sumit Khamar', program: 'B.E. Computer Eng, Batch 2018', role: 'Senior Software Engineer @ Accenture', image: '/images/people/sumit_alumni.png', quote: '"KSV shaped both my technical skills and my character. The faculty helped me land my dream job."' },
  { name: 'Hirva Patel', program: 'MBA, Batch 2019', role: 'Business Analyst @ Goldmansachs', image: '/images/people/hirva_alumni.jpeg', quote: '"The management program provided a strong foundation and incredible industry exposure."' },
  { name: 'Shubhamkumar chandravanshi', program: 'B.Pharm, Batch 2020', role: 'Quality Control Lead @ Deloitte', image: '/images/people/shubham_alumni.jpeg', quote: '"State-of-the-art labs and hands-on training prepared me for advanced research."' }
];

export default function AlumniSection() {
  return (
    <section className="py-20 bg-ksv-accent">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* LEFT: Stats Block */}
          <div className="lg:w-2/5">
            <h2 className="font-display font-bold text-4xl text-ksv-primary mb-4">Our Alumni</h2>
            <p className="font-body text-ksv-dark/80 text-lg mb-10">Proud graduates making their mark across the world.</p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-ksv-secondary shadow-sm flex-shrink-0">
                  <Users size={28} />
                </div>
                <div>
                  <div className="font-display font-bold text-4xl text-ksv-primary">50,000+</div>
                  <div className="font-heading text-sm text-ksv-dark/60 uppercase tracking-wider font-semibold">Alumni Network</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-ksv-secondary shadow-sm flex-shrink-0">
                  <Globe size={28} />
                </div>
                <div>
                  <div className="font-display font-bold text-4xl text-ksv-primary">25+</div>
                  <div className="font-heading text-sm text-ksv-dark/60 uppercase tracking-wider font-semibold">Countries Represented</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-ksv-secondary shadow-sm flex-shrink-0">
                  <Briefcase size={28} />
                </div>
                <div>
                  <div className="font-display font-bold text-4xl text-ksv-primary">40+</div>
                  <div className="font-heading text-sm text-ksv-dark/60 uppercase tracking-wider font-semibold">Industries</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Alumni Spotlight Cards */}
          <div className="lg:w-3/5 w-full">
            <div className="flex overflow-x-auto pb-8 -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-2 gap-6 snap-x">
              {alumniStories.map((story, idx) => (
                <div key={idx} className="bg-white rounded-radius-lg p-6 shadow-card min-w-[300px] lg:min-w-0 snap-center border-l-4 border-transparent hover:border-ksv-secondary transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-ksv-border/40 flex-shrink-0 overflow-hidden">
                      <img src={story.image} alt={story.name} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-ksv-primary">{story.name}</h4>
                      <p className="font-body text-xs text-ksv-dark/50">{story.program}</p>
                    </div>
                  </div>
                  <p className="font-body font-semibold text-ksv-secondary text-sm mb-3">{story.role}</p>
                  <p className="font-body italic text-ksv-dark/70 text-sm border-l-2 border-ksv-border/50 pl-3">
                    {story.quote}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://alumni.ksv.ac.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-ksv-secondary text-ksv-secondary px-8 py-3 rounded-full font-heading font-bold hover:bg-ksv-secondary hover:text-white transition-colors duration-300 w-full sm:w-auto">
            Join the Alumni Network
            <ExternalLink size={18} />
          </a>
          <Link to="/alumni" className="inline-flex items-center justify-center gap-2 bg-ksv-secondary text-white px-8 py-3 rounded-full font-heading font-bold hover:bg-ksv-primary transition-colors duration-300 w-full sm:w-auto">
            View All Alumni Stories
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}

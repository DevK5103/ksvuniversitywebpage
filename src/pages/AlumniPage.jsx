import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Globe, Users, Briefcase } from 'lucide-react';

const alumniStories = [
  { name: 'Aditi Sharma', program: 'B.E. Computer Eng, Batch 2019', role: 'Software Engineer @ Google', quote: '"KSV shaped both my technical skills and my character. The faculty helped me land my dream job."' },
  { name: 'Vikram Joshi', program: 'MBA, Batch 2016', role: 'Marketing Head @ Reliance', quote: '"The management program provided a strong foundation and incredible industry exposure."' },
  { name: 'Neha Patel', program: 'B.Pharm, Batch 2020', role: 'Researcher @ Sun Pharma', quote: '"State-of-the-art labs and hands-on training prepared me for advanced research."' },
  { name: 'Sameer Khan', program: 'MCA, Batch 2018', role: 'Tech Lead @ TCS', quote: '"The practical approach to learning at KSV gave me a competitive edge in my career."' },
  { name: 'Pooja Desai', program: 'B.Sc. Nursing, Batch 2021', role: 'Registered Nurse @ Apollo Hospitals', quote: '"Clinical exposure and mentorship from experienced faculty were the highlights of my journey."' },
  { name: 'Rahul Mehta', program: 'B.Com, Batch 2017', role: 'Financial Analyst @ HDFC Bank', quote: '"The commerce program at KSV is top-notch, blending theory with real-world applications."' }
];

export default function AlumniPage() {
  const [activeTab, setActiveTab] = useState('All');
  
  return (
    <div className="pt-32 pb-24 bg-ksv-light min-h-screen">
      
      {/* Hero Banner */}
      <div className="relative bg-ksv-primary h-[400px] flex items-center justify-center -mt-32 pt-32 mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-ksv-dark/70 z-10"></div>
        <img src="/images/hero/hero-bg-4.jpg" alt="KSV Alumni" className="absolute inset-0 w-full h-full object-cover" />
        
        <div className="relative z-20 text-center px-6 max-w-[1280px] mx-auto w-full">
          <div className="text-sm font-body text-white/70 mb-4 tracking-wider uppercase">
            <Link to="/" className="hover:text-white transition-colors">Home</Link> &gt; Alumni
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">KSV Alumni</h1>
          <p className="font-body text-lg md:text-xl text-white/90 max-w-2xl mx-auto">A legacy of excellence — our graduates shaping the world.</p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Alumni Stats Bar */}
        <div className="bg-white rounded-radius-lg shadow-card p-10 flex flex-col md:flex-row justify-around gap-8 -mt-24 relative z-30 mb-20 border-t-4 border-ksv-secondary">
          <div className="text-center">
            <div className="font-display font-bold text-4xl text-ksv-primary mb-2">50,000+</div>
            <div className="font-body text-sm font-semibold text-ksv-dark/60 uppercase tracking-wider">Alumni Worldwide</div>
          </div>
          <div className="hidden md:block w-px h-16 bg-ksv-border"></div>
          <div className="text-center">
            <div className="font-display font-bold text-4xl text-ksv-primary mb-2">25+</div>
            <div className="font-body text-sm font-semibold text-ksv-dark/60 uppercase tracking-wider">Countries</div>
          </div>
          <div className="hidden md:block w-px h-16 bg-ksv-border"></div>
          <div className="text-center">
            <div className="font-display font-bold text-4xl text-ksv-primary mb-2">40+</div>
            <div className="font-body text-sm font-semibold text-ksv-dark/60 uppercase tracking-wider">Industries</div>
          </div>
          <div className="hidden md:block w-px h-16 bg-ksv-border"></div>
          <div className="text-center">
            <div className="font-display font-bold text-4xl text-ksv-primary mb-2">15+</div>
            <div className="font-body text-sm font-semibold text-ksv-dark/60 uppercase tracking-wider">Years of Legacy</div>
          </div>
        </div>

        {/* Network CTA Banner */}
        <div className="bg-ksv-secondary rounded-radius-lg p-12 text-center text-white mb-20 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Are you a KSV Alumnus?</h2>
            <p className="font-body text-lg text-white/90 mb-8">Join the official KSV Alumni Network — reconnect, mentor, and grow.</p>
            <a href="https://alumni.ksv.ac.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-ksv-primary font-heading font-bold px-8 py-4 rounded-full hover:shadow-hover hover:-translate-y-1 transition-all duration-300">
              Join Alumni Network <ExternalLink size={20} />
            </a>
          </div>
        </div>

        {/* Featured Stories & Institute Filter */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-4xl text-ksv-primary mb-4">Alumni Spotlight</h2>
            <p className="font-body text-ksv-dark/80 max-w-2xl mx-auto">Discover the inspiring journeys of our graduates making a difference across various sectors.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['All', 'LDRP', 'VSITR', 'SKPIMCS', 'KBIPER', 'CMPATEL', 'Other'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-heading font-semibold text-sm transition-colors ${activeTab === tab ? 'bg-ksv-primary text-white shadow-md' : 'bg-white text-ksv-dark/70 border border-ksv-border hover:border-ksv-secondary hover:text-ksv-primary'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumniStories.map((story, idx) => (
              <div key={idx} className="bg-white rounded-radius-lg p-8 shadow-card border-l-4 border-ksv-secondary hover:-translate-y-2 hover:shadow-hover transition-all duration-300 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-ksv-border/40 flex-shrink-0 overflow-hidden">
                    <img src={`/images/people/alumni-${(idx % 6) + 1}.jpg`} alt={story.name} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-ksv-primary leading-tight">{story.name}</h4>
                    <p className="font-body text-xs text-ksv-dark/50 mt-1">{story.program}</p>
                  </div>
                </div>
                <div className="font-body font-semibold text-ksv-secondary text-sm mb-4 pb-4 border-b border-ksv-border/50">
                  Current: {story.role}
                </div>
                <p className="font-body italic text-ksv-dark/70 text-sm flex-grow mb-6">
                  {story.quote}
                </p>
                <Link to={`/alumni/${idx}`} className="font-heading font-bold text-sm text-ksv-primary hover:text-ksv-secondary transition-colors uppercase tracking-wider mt-auto inline-flex items-center">
                  Read Full Story &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Notable Alumni Quote */}
        <div className="bg-white p-12 rounded-radius-lg shadow-sm border border-ksv-border text-center relative overflow-hidden mb-24">
          <div className="absolute top-4 left-4 text-[120px] font-display text-ksv-secondary opacity-10 leading-none">"</div>
          <h3 className="font-display font-medium italic text-2xl md:text-3xl text-ksv-dark mb-8 relative z-10">
            "The Trust Provided Free Education to my Father & Uncle and this is the reason why I am Sunita Williams."
          </h3>
          <p className="font-heading font-bold text-ksv-secondary uppercase tracking-widest text-sm relative z-10">
            — Astronaut Sunita Williams, 21 September 2007
          </p>
        </div>

        {/* Reconnect Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-radius-lg shadow-card p-10 border-t-8 border-ksv-primary">
          <h2 className="font-display font-bold text-3xl text-ksv-primary mb-2 text-center">Let's Reconnect</h2>
          <p className="font-body text-ksv-dark/70 text-center mb-8">Update your details to stay connected with your alma mater.</p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-heading font-semibold text-sm text-ksv-dark mb-2">Full Name</label>
                <input type="text" className="w-full bg-ksv-light border border-ksv-border rounded px-4 py-3 focus:outline-none focus:border-ksv-secondary" />
              </div>
              <div>
                <label className="block font-heading font-semibold text-sm text-ksv-dark mb-2">Email Address</label>
                <input type="email" className="w-full bg-ksv-light border border-ksv-border rounded px-4 py-3 focus:outline-none focus:border-ksv-secondary" />
              </div>
              <div>
                <label className="block font-heading font-semibold text-sm text-ksv-dark mb-2">Graduation Year</label>
                <input type="text" className="w-full bg-ksv-light border border-ksv-border rounded px-4 py-3 focus:outline-none focus:border-ksv-secondary" />
              </div>
              <div>
                <label className="block font-heading font-semibold text-sm text-ksv-dark mb-2">Programme/Institute</label>
                <input type="text" className="w-full bg-ksv-light border border-ksv-border rounded px-4 py-3 focus:outline-none focus:border-ksv-secondary" />
              </div>
            </div>
            <div>
              <label className="block font-heading font-semibold text-sm text-ksv-dark mb-2">Current Company & Role</label>
              <input type="text" className="w-full bg-ksv-light border border-ksv-border rounded px-4 py-3 focus:outline-none focus:border-ksv-secondary" />
            </div>
            <div>
              <label className="block font-heading font-semibold text-sm text-ksv-dark mb-2">Message (Optional)</label>
              <textarea rows={4} className="w-full bg-ksv-light border border-ksv-border rounded px-4 py-3 focus:outline-none focus:border-ksv-secondary"></textarea>
            </div>
            <button type="button" className="w-full bg-ksv-primary text-white font-heading font-bold py-4 rounded-md hover:bg-ksv-secondary transition-colors text-lg">
              Reconnect with KSV &rarr;
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

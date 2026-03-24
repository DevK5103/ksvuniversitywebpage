import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Building2 } from 'lucide-react';

const stats = [
  { value: '18', suffix: ' LPA', label: 'Highest Package' },
  { value: '4.5', suffix: ' LPA', label: 'Avg. Package' },
  { value: '300', suffix: '+', label: 'Companies Visited' },
  { value: '1500', suffix: '+', label: 'Total Offers' }
];

const recruiterLogos = [
  'TCS', 'Infosys', 'Wipro', 'HCL', 'Deloitte', 'EY', 'KPMG', 'Abbott', 'Google', 'IBM', 'Cognizant', 'Tech Mahindra',
  'Amazon', 'Microsoft', 'Reliance', 'Adani', 'L&T', 'Torrent Power', 'Zydus', 'Intas', 'Sun Pharma', 'Tata Motors'
];

export default function PlacementsPage() {
  return (
    <div className="pt-32 pb-24 bg-ksv-light min-h-screen">
      
      {/* Hero Banner */}
      <div className="relative bg-ksv-primary h-[400px] flex items-center justify-center -mt-32 pt-32 mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-ksv-dark/60 z-10"></div>
        <img src="/images/hero/hero-bg-2.jpg" alt="Placements at KSV" className="absolute inset-0 w-full h-full object-cover" />
        
        <div className="relative z-20 text-center px-6 max-w-[1280px] mx-auto w-full">
          <div className="text-sm font-body text-white/70 mb-4 tracking-wider uppercase">
            <Link to="/" className="hover:text-white transition-colors">Home</Link> &gt; Placements
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">Placements at KSV</h1>
          <p className="font-body text-lg md:text-xl text-white/90 max-w-2xl mx-auto">Bridging KSV graduates with industry leaders. Building careers that shape the future.</p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Key Statistics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-24 relative z-30 mb-20">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-radius-lg p-8 shadow-card text-center border-t-4 border-ksv-secondary hover:-translate-y-2 transition-transform duration-300">
              <div className="font-display font-bold text-4xl lg:text-5xl text-ksv-secondary mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="font-heading font-semibold text-sm text-ksv-primary uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* School-wise Placement Tabs (Simplified) */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ksv-primary mb-4">Placement by School</h2>
            <p className="font-body text-ksv-dark/70">Explore opportunities and statistics across different disciplines.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {['All', 'Engineering', 'Management', 'Pharmacy', 'Computer Science', 'Commerce'].map((tab, idx) => (
              <button key={idx} className={`px-6 py-2 rounded-full font-heading font-semibold text-sm transition-colors ${idx === 0 ? 'bg-ksv-secondary text-white shadow-md' : 'bg-white text-ksv-dark/70 hover:bg-ksv-border/30 hover:text-ksv-primary'}`}>
                {tab}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-radius-lg shadow-sm border border-ksv-border p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-heading font-bold text-2xl text-ksv-primary mb-4">Engineering & Technology</h3>
                <p className="font-body text-ksv-dark/70 mb-6">Top tech companies and core engineering firms actively recruit from our engineering programs, offering roles in software development, core manufacturing, and IT consulting.</p>
                <div className="flex items-center text-ksv-secondary font-bold font-heading">
                  <span className="text-3xl mr-2">92%</span> 
                  <span className="text-sm uppercase tracking-wider text-ksv-dark/60">Placement Rate</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {['TCS', 'Infosys', 'L&T', 'Tech Mahindra', 'Reliance', 'Wipro'].map((logo, idx) => (
                  <div key={idx} className="bg-ksv-light border border-ksv-border h-20 rounded flex items-center justify-center font-heading font-bold text-ksv-dark/40 text-sm">
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* For Recruiters CTA */}
        <div className="bg-ksv-primary rounded-radius-lg overflow-hidden flex flex-col md:flex-row mb-24 shadow-card">
          <div className="md:w-1/2 p-12 text-white flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-ksv-secondary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <h2 className="font-display font-bold text-3xl mb-4">Partner with KSV</h2>
            <p className="font-body text-white/80 mb-8 max-w-md">Access 50,000+ students across 30+ institutes. Discover the next generation of bright minds and future leaders for your organization.</p>
            
            <div className="flex items-center gap-4 text-white/90 font-body mb-2">
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Building2 size={20} />
              </span>
              <div>
                <p className="text-xs text-white/60">Contact Placement Cell</p>
                <p className="font-semibold">placements@ksv.ac.in | +91 079 2324 4690</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-white p-12">
            <h3 className="font-heading font-bold text-2xl text-ksv-primary mb-6">Recruiter Registration</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Company Name" className="w-full bg-ksv-light border border-ksv-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-ksv-secondary" />
                <input type="text" placeholder="Contact Person" className="w-full bg-ksv-light border border-ksv-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-ksv-secondary" />
              </div>
              <input type="email" placeholder="Official Email Address" className="w-full bg-ksv-light border border-ksv-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-ksv-secondary" />
              <select className="w-full bg-ksv-light border border-ksv-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-ksv-secondary text-ksv-dark/70">
                <option value="">Programme Interest</option>
                <option value="engineering">Engineering</option>
                <option value="management">Management</option>
                <option value="pharmacy">Pharmacy</option>
                <option value="other">Other</option>
              </select>
              <button type="button" className="w-full bg-ksv-secondary text-white font-heading font-bold py-3 rounded-md hover:bg-ksv-primary transition-colors mt-2">
                Register as Recruiter &rarr;
              </button>
            </form>
          </div>
        </div>

        {/* Download Placement Reports */}
        <div>
          <h2 className="font-display font-bold text-3xl text-ksv-primary mb-8 text-center">Placement Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[2024, 2023, 2022].map((year) => (
              <a href={`/docs/placement-${year}.pdf`} key={year} className="group bg-white border border-ksv-border rounded-radius-md p-6 flex items-center justify-between hover:border-ksv-secondary hover:shadow-hover transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded bg-ksv-accent text-ksv-primary flex items-center justify-center group-hover:bg-ksv-secondary group-hover:text-white transition-colors">
                    <Download size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-ksv-dark">Placement Report {year}</h4>
                    <p className="font-body text-xs text-ksv-dark/50 mt-1">PDF Document • 2.4 MB</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

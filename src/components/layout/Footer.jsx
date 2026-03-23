import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ksv-dark text-ksv-white border-t-4 border-ksv-secondary pt-16">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-ksv-white rounded-full flex items-center justify-center shrink-0 overflow-hidden shadow-sm p-1">
                <img src="/ksv.svg" alt="KSV Logo" className="w-14 h-14 object-contain" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg leading-tight">Kadi Sarva<br />Vishwavidyalaya</h3>
                <p className="font-body text-xs text-ksv-white/60">Established vide Act 21 of 2007</p>
              </div>
            </div>
            <p className="font-body text-ksv-white/70 text-sm leading-relaxed">
              Serving the society through education since 1919 under the aegis of Sarva Vidyalaya Kelavani Mandal (SVKM).
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-ksv-white/10 hover:bg-ksv-secondary hover:text-ksv-dark flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-ksv-white/10 hover:bg-ksv-secondary hover:text-ksv-dark flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-ksv-white/10 hover:bg-ksv-secondary hover:text-ksv-dark flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-ksv-white/10 hover:bg-ksv-secondary hover:text-ksv-dark flex items-center justify-center transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-ksv-secondary"></div>
              University Links
            </h4>
            <ul className="space-y-3 font-body text-sm text-ksv-white/80">
              <li><Link to="/about" className="hover:text-ksv-secondary transition-colors inline-block">About KSV & Trust</Link></li>
              <li><Link to="/campuses" className="hover:text-ksv-secondary transition-colors inline-block">Campuses & Infrastructure</Link></li>
              <li><Link to="/academics/admission" className="hover:text-ksv-secondary transition-colors inline-block">Admissions 2024-25</Link></li>
              <li><Link to="/examination/results" className="hover:text-ksv-secondary transition-colors inline-block">Examination Results</Link></li>
              <li><Link to="/research" className="hover:text-ksv-secondary transition-colors inline-block">Research & Ph.D.</Link></li>
              <li><Link to="/recruitment" className="hover:text-ksv-secondary transition-colors inline-block">Careers at KSV</Link></li>
              <li><a href="#" className="hover:text-ksv-secondary transition-colors inline-flex items-center gap-1">Student Portal <ExternalLink size={12} /></a></li>
            </ul>
          </div>

          {/* Col 3: Constituent Institutes */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-ksv-secondary"></div>
              Key Institutes
            </h4>
            <ul className="space-y-3 font-body text-sm text-ksv-white/80">
              <li><a href="#" className="hover:text-ksv-secondary transition-colors inline-block">LDRP Institute of Technology</a></li>
              <li><a href="#" className="hover:text-ksv-secondary transition-colors inline-block">KB Institute of Pharmaceutical Educ.</a></li>
              <li><a href="#" className="hover:text-ksv-secondary transition-colors inline-block">BP College of Business Admin</a></li>
              <li><a href="#" className="hover:text-ksv-secondary transition-colors inline-block">SM Patel Institute of Commerce</a></li>
              <li><a href="#" className="hover:text-ksv-secondary transition-colors inline-block">Aashka Institute of Nursing</a></li>
              <li><a href="#" className="hover:text-ksv-secondary transition-colors inline-block">Vidush Somany Institute</a></li>
            </ul>
            <Link to="/campuses" className="inline-block mt-4 text-sm font-bold text-ksv-secondary hover:underline">View all 20+ institutes →</Link>
          </div>

          {/* Col 4: Contact Us */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-ksv-secondary"></div>
              Contact Us
            </h4>
            <div className="space-y-4 font-body text-sm text-ksv-white/80">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-ksv-secondary shrink-0 mt-1" />
                <p>
                  <strong className="text-ksv-white font-semibold">University Office:</strong><br />
                  Sector-15, Near Kh-5 Circle,<br />
                  Gandhinagar - 382015,<br />
                  Gujarat, India.
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Phone size={18} className="text-ksv-secondary shrink-0" />
                <p>+91 79 2328 6500</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-ksv-secondary shrink-0" />
                <p>info@ksv.ac.in</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="border-t border-ksv-white/10 bg-black/20">
        <div className="max-w-[1280px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-ksv-white/50 text-center md:text-left">
            &copy; {new Date().getFullYear()} Kadi Sarva Vishwavidyalaya. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 font-body text-xs text-ksv-white/50">
            <Link to="/privacy" className="hover:text-ksv-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-ksv-white transition-colors">Terms of Use</Link>
            <Link to="/sitemap" className="hover:text-ksv-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

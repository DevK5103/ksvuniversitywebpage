import React, { useState } from 'react';
import { Play } from 'lucide-react';

const campuses = [
  { id: 1, name: 'LDRP Institute of Technology & Research', image: '/images/campus/campus-1.jpg', duration: '2:15' },
  { id: 2, name: 'S. K. Patel Institute of Management', image: '/images/campus/campus-2.jpg', duration: '1:45' },
  { id: 3, name: 'CMPATEL College of Nursing', image: '/images/campus/campus-3.jpg', duration: '3:05' },
  { id: 4, name: 'K.B. Institute of Pharmaceutical Ed.', image: '/images/campus/campus-4.jpg', duration: '2:30' }
];

export default function CampusTourSection() {
  const [activeVideo, setActiveVideo] = useState(campuses[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-ksv-light">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl text-ksv-primary mb-4">Our Campus Tour</h2>
          <p className="font-body text-ksv-dark/80 max-w-2xl mx-auto">Experience state-of-the-art infrastructure spread across a lush green environment.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left: Thumbnails */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {campuses.map((campus) => (
              <button
                key={campus.id}
                onClick={() => {
                  setActiveVideo(campus);
                  setIsPlaying(false);
                }}
                className={`flex gap-4 p-3 rounded-radius-md text-left transition-all duration-300 ${activeVideo.id === campus.id ? 'bg-white shadow-md border-l-4 border-ksv-secondary' : 'hover:bg-ksv-border/30 border-l-4 border-transparent'}`}
              >
                <div className="w-24 h-16 rounded overflow-hidden flex-shrink-0 relative">
                  <img src={campus.image} alt={campus.name} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                  <div className="absolute inset-0 bg-ksv-dark/40 flex items-center justify-center">
                    <Play size={16} className="text-white fill-white" />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className={`font-heading font-semibold text-sm line-clamp-2 ${activeVideo.id === campus.id ? 'text-ksv-primary' : 'text-ksv-dark/80'}`}>
                    {campus.name}
                  </h4>
                  <span className="font-body text-xs text-ksv-dark/50 mt-1">{campus.duration}</span>
                </div>
              </button>
            ))}
            
            <button className="mt-4 text-center font-heading font-bold text-sm text-ksv-secondary hover:text-ksv-primary transition-colors">
              View All Campuses &rarr;
            </button>
          </div>

          {/* Right: Large Video Player */}
          <div className="lg:w-2/3">
            <div className="relative rounded-radius-lg overflow-hidden shadow-2xl aspect-video bg-ksv-dark group">
              <img 
                src={activeVideo.image} 
                alt={activeVideo.name} 
                className={`w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100 group-hover:scale-105 transition-transform'}`}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              
              {!isPlaying && (
                <div className="absolute inset-0 bg-ksv-dark/30 flex items-center justify-center">
                  <a 
                    href="https://www.google.com/maps/@23.2397173,72.6389291,3a,75y,332h,3.44t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgIDy9pOKDA!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAFfmt2YjnZyiyeqJR5uN7sRtLPnRam-oYW70bWm5hWTySCV5PgaxivMLDjEEzICKpr-TG7BghjUE0jQGEaopWbX4XOxW2Shda-ZPY0pAMHyIoaYAiJwGkKT5tyxasBcZs7ro_ShhNEI%3Dw900-h600-k-no-pi86.56340483666577-ya332.0031733927979-ro0-fo100!7i4096!8i2048?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-20 h-20 bg-ksv-secondary/90 hover:bg-ksv-secondary rounded-full flex items-center justify-center text-white shadow-lg transform transition-transform hover:scale-110 cursor-pointer z-20"
                    aria-label="Play video"
                  >
                    <Play size={32} className="fill-white ml-2" />
                  </a>
                </div>
              )}

              {/* Mock iframe for when playing */}
              {isPlaying && (
                <div className="absolute inset-0 bg-ksv-dark flex items-center justify-center text-white font-body text-xl">
                  Video Simulation ({activeVideo.name})
                </div>
              )}

              {/* Top gradient for text readability */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-ksv-dark/80 to-transparent pointer-events-none"></div>
              <h3 className="absolute top-6 left-8 font-heading font-bold text-2xl text-white drop-shadow-md z-10 pointer-events-none">
                {activeVideo.name}
              </h3>

              {/* Bottom Stat Box Overlay */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-radius-md shadow-lg border-l-4 border-ksv-secondary transform transition-transform translate-y-0 opacity-100 md:group-hover:-translate-y-2">
                <div className="font-display font-bold text-2xl text-ksv-primary leading-none">100+</div>
                <div className="font-heading font-semibold text-xs text-ksv-dark/70 uppercase tracking-wide mt-1">Acres of Green Campus</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

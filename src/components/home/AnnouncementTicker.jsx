import React from 'react';
import { Link } from 'react-router-dom';

const announcements = [
  {
    id: 1,
    type: 'urgent',
    text: 'UNIVERSITY PROVISIONAL DEGREE CERTIFICATE FORM',
    link: '/examination'
  },
  {
    id: 2,
    type: 'notice',
    text: 'PHD ADMISSIONS-2025 — Apply Now',
    link: '/academics/research'
  },
  {
    id: 3,
    type: 'urgent',
    text: 'NEP 2020: UG Curriculum Revised Guidelines Available',
    link: '/academics/nep'
  },
  {
    id: 4,
    type: 'notice',
    text: 'KSV Gyanotsav 2024 Registration Open',
    link: '/journals'
  }
];

export default function AnnouncementTicker() {
  return (
    <div className="bg-ksv-white border-b border-ksv-border py-2 overflow-hidden flex items-center relative z-10">
      <div className="px-4 font-heading font-bold text-sm text-ksv-white bg-ksv-primary h-full absolute left-0 z-20 flex items-center shadow-md">
        UPDATES
      </div>
      
      {/* Ticker Container */}
      <div className="w-full pl-28 pr-4 overflow-hidden relative group">
        <div className="flex animate-ticker whitespace-nowrap group-hover:pause">
          {/* We duplicate the list to make a seamless loop */}
          {[...announcements, ...announcements].map((item, idx) => (
            <div key={`${item.id}-${idx}`} className="inline-flex items-center mx-6">
              <span className={`w-2 h-2 rounded-full mr-2 ${item.type === 'urgent' ? 'bg-red-500' : 'bg-yellow-500'} animate-pulse`} />
              <Link 
                to={item.link} 
                className="font-body text-sm font-medium hover:text-ksv-secondary hover:underline transition-colors"
              >
                {item.text}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

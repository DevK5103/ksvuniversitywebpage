import React from 'react';
import { Link } from 'react-router-dom';

export default function ApplyNowButton({ isTransparent }) {
  return (
    <Link 
      to="/academics#admission"
      className={`font-heading font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-300 ml-4 ${
        isTransparent 
          ? 'border-2 border-ksv-white text-ksv-white bg-transparent hover:bg-ksv-white hover:text-ksv-primary' 
          : 'bg-ksv-secondary text-ksv-white hover:bg-ksv-primary hover:shadow-lg'
      }`}
    >
      Apply Now
    </Link>
  );
}

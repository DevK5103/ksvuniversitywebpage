import React from 'react';
import AdmissionAccordion from '../home/AdmissionAccordion';

export default function DetailedAdmissionPolicy() {
  return (
    <div className="bg-ksv-light pb-24">
      {/* We reuse the AdmissionAccordion from the home section, 
          but adding an extra header or wrapper if needed to fit the Academics page context perfectly. */}
      
      <div className="max-w-[1280px] mx-auto px-6 pt-24 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-ksv-primary mb-4">University Admission Policy</h2>
        <div className="w-24 h-1 bg-ksv-secondary mx-auto rounded-full mb-6"></div>
        <p className="font-body text-ksv-dark/70 max-w-2xl mx-auto mb-12">
          Review our comprehensive, transparent, and merit-based policies designed to ensure equal opportunity and recognize academic excellence.
        </p>
      </div>
      
      {/* The component itself already has a max-w layout inside it, so we just render it */}
      <div className="mt-[-100px]">
        <AdmissionAccordion />
      </div>
    </div>
  );
}

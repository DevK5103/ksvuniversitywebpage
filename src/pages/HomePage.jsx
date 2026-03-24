import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import AnnouncementTicker from '../components/home/AnnouncementTicker';
import StatsCounter from '../components/home/StatsCounter';
import AboutSection from '../components/home/AboutSection';
import PresidentMessage from '../components/home/PresidentMessage';
import AcademicProgrammes from '../components/home/AcademicProgrammes';
import CampusesSection from '../components/home/CampusesSection';
import QuotesCarousel from '../components/home/QuotesCarousel';
import CellsHighlights from '../components/home/CellsHighlights';
import ResearchSection from '../components/home/ResearchSection';
import AdmissionsSection from '../components/home/AdmissionsSection';
import NewsEvents from '../components/home/NewsEvents';
import RecruitmentCTA from '../components/home/RecruitmentCTA';
import PhotoGallery from '../components/home/PhotoGallery';
import AdmissionAccordion from '../components/home/AdmissionAccordion';
import PlacementsSection from '../components/home/PlacementsSection';
import AlumniSection from '../components/home/AlumniSection';
import CampusTourSection from '../components/home/CampusTourSection';

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AnnouncementTicker />
      <StatsCounter />
      <AboutSection />
      <PresidentMessage />
      <AcademicProgrammes />
      <CampusesSection />
      <CellsHighlights />
      <ResearchSection />
      <AdmissionsSection />
      <PlacementsSection />
      <AlumniSection />
      <QuotesCarousel />
      <CampusTourSection />
      <PhotoGallery />
      <NewsEvents />
      <RecruitmentCTA />
      <AdmissionAccordion />
    </>
  );
}

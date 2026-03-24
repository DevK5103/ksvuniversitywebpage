import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import AnnouncementTicker from '../components/home/AnnouncementTicker';
import StatsCounter from '../components/home/StatsCounter';
import QuickLinks from '../components/home/QuickLinks';
import AboutSection from '../components/home/AboutSection';
import PresidentMessage from '../components/home/PresidentMessage';
import AcademicTabs from '../components/home/AcademicTabs';
import CampusesSection from '../components/home/CampusesSection';
import QuotesCarousel from '../components/home/QuotesCarousel';
import CellsHighlights from '../components/home/CellsHighlights';
import ResearchSection from '../components/home/ResearchSection';
import NewsEvents from '../components/home/NewsEvents';
import RecruitmentCTA from '../components/home/RecruitmentCTA';
import PhotoGallery from '../components/home/PhotoGallery';
import AdmissionAccordion from '../components/home/AdmissionAccordion';

export default function HomePage() {
  return (
    <>
      <AnnouncementTicker />
      <HeroSlider />
      <StatsCounter />
      <QuickLinks />
      <AboutSection />
      <PresidentMessage />
      <AcademicTabs />
      <CampusesSection />
      <QuotesCarousel />
      <CellsHighlights />
      <ResearchSection />
      <NewsEvents />
      <RecruitmentCTA />
      <PhotoGallery />
      <AdmissionAccordion />
    </>
  );
}

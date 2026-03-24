import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout
import TopBar from './components/layout/TopBar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import PageTransition from './components/layout/PageTransition';

import PageLoader from './components/layout/PageLoader';
import ChatbotWidget from './components/chatbot/ChatbotWidget';

// Lazy Loaded Pages
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const AcademicsPage = React.lazy(() => import('./pages/AcademicsPage'));
const CoursesPage = React.lazy(() => import('./pages/CoursesPage'));
const PlacementsPage = React.lazy(() => import('./pages/PlacementsPage'));
const AlumniPage = React.lazy(() => import('./pages/AlumniPage'));
const CampusesPage = React.lazy(() => import('./pages/CampusesPage'));
const SisterConcernsPage = React.lazy(() => import('./pages/SisterConcernsPage'));
const CellsCentersPage = React.lazy(() => import('./pages/CellsCentersPage'));
const ResearchPage = React.lazy(() => import('./pages/ResearchPage'));
const FundedProjectsPage = React.lazy(() => import('./pages/FundedProjectsPage'));
const ResearchProjectsPage = React.lazy(() => import('./pages/ResearchProjectsPage'));
const ExaminationPage = React.lazy(() => import('./pages/ExaminationPage'));
const SustainabilityPage = React.lazy(() => import('./pages/SustainabilityPage'));
const JournalsPage = React.lazy(() => import('./pages/JournalsPage'));
const CampusTourPage = React.lazy(() => import('./pages/CampusTourPage'));
const NewsEventsPage = React.lazy(() => import('./pages/NewsEventsPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const RecruitmentPage = React.lazy(() => import('./pages/RecruitmentPage'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function AnimatedRoutes() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.hash]);

  return (
    <AnimatePresence mode="wait">
      <React.Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
          <Route path="/academics" element={<PageTransition><AcademicsPage /></PageTransition>} />
          <Route path="/academics/courses" element={<PageTransition><CoursesPage /></PageTransition>} />
          <Route path="/placements" element={<PageTransition><PlacementsPage /></PageTransition>} />
          <Route path="/alumni" element={<PageTransition><AlumniPage /></PageTransition>} />
          <Route path="/campuses" element={<PageTransition><CampusesPage /></PageTransition>} />
          <Route path="/sister-concerns" element={<PageTransition><SisterConcernsPage /></PageTransition>} />
          <Route path="/cells-centers" element={<PageTransition><CellsCentersPage /></PageTransition>} />
          <Route path="/research" element={<PageTransition><ResearchPage /></PageTransition>} />
          <Route path="/research/funded-projects" element={<PageTransition><FundedProjectsPage /></PageTransition>} />
          <Route path="/research/projects" element={<PageTransition><ResearchProjectsPage /></PageTransition>} />
          <Route path="/examination" element={<PageTransition><ExaminationPage /></PageTransition>} />
          <Route path="/sustainability" element={<PageTransition><SustainabilityPage /></PageTransition>} />
          <Route path="/journals" element={<PageTransition><JournalsPage /></PageTransition>} />
          <Route path="/campus-tour" element={<PageTransition><CampusTourPage /></PageTransition>} />
          <Route path="/news-events" element={<PageTransition><NewsEventsPage /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
          <Route path="/recruitment" element={<PageTransition><RecruitmentPage /></PageTransition>} />
          <Route path="/search" element={<PageTransition><SearchPage /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </React.Suspense>
    </AnimatePresence>
  );
}

import SEO from './components/layout/SEO';

function App() {
  return (
    <Router>
      <SEO />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[9999] bg-ksv-primary text-ksv-white px-4 py-2 font-bold font-heading rounded outline-none border-2 border-ksv-secondary shadow-lg">
        Skip to content
      </a>
      <div className="min-h-screen flex flex-col font-body bg-ksv-light text-ksv-dark antialiased selection:bg-ksv-primary/10">
        <TopBar />
        <Header />
        
        <main id="main-content" className="flex-grow flex flex-col bg-ksv-white">
          <AnimatedRoutes />
        </main>

        <Footer />
        <ChatbotWidget />
      </div>
    </Router>
  );
}

export default App;

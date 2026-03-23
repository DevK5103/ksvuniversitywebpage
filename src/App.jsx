import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import TopBar from './components/layout/TopBar';
import Header from './components/layout/Header';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';
import CampusesPage from './pages/CampusesPage';
import SisterConcernsPage from './pages/SisterConcernsPage';
import CellsCentersPage from './pages/CellsCentersPage';
import ResearchPage from './pages/ResearchPage';
import ExaminationPage from './pages/ExaminationPage';
import SustainabilityPage from './pages/SustainabilityPage';
import JournalsPage from './pages/JournalsPage';
import CampusTourPage from './pages/CampusTourPage';
import NewsEventsPage from './pages/NewsEventsPage';
import ContactPage from './pages/ContactPage';
import RecruitmentPage from './pages/RecruitmentPage';

import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-body bg-ksv-light text-ksv-dark antialiased selection:bg-ksv-primary/10">
        <TopBar />
        <Header />
        
        <main className="flex-grow flex flex-col pt-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/campuses" element={<CampusesPage />} />
            <Route path="/sister-concerns" element={<SisterConcernsPage />} />
            <Route path="/cells-centers" element={<CellsCentersPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/examination" element={<ExaminationPage />} />
            <Route path="/sustainability" element={<SustainabilityPage />} />
            <Route path="/journals" element={<JournalsPage />} />
            <Route path="/campus-tour" element={<CampusTourPage />} />
            <Route path="/news-events" element={<NewsEventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/recruitment" element={<RecruitmentPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

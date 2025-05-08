import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ForStylists from './pages/ForStylists';
import StylistApplicationForm from './components/Stylist/StylistApplicationForm';
import { AnimatePresence } from 'framer-motion';
import DigitizationService from './pages/DigitizationService';
import Landing from './pages/Landing';
//import Terms from './pages/Terms';

function AppContent() {
  const [showStylistApplication, setShowStylistApplication] = useState(false);
  const location = useLocation();
  const isLandingPage = location.pathname === '/landing';

  const handleStylistApplicationOpen = () => {
    setShowStylistApplication(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {!isLandingPage && <Navbar onApplyClick={handleStylistApplicationOpen} />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/for-stylists" element={<ForStylists showApplicationForm={showStylistApplication} setShowApplicationForm={setShowStylistApplication} />} />
          <Route path="/wardrobe-digitization" element={<DigitizationService />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </main>
      {!isLandingPage && <Footer />}
      <AnimatePresence>
        {showStylistApplication && (
          <StylistApplicationForm onClose={() => setShowStylistApplication(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

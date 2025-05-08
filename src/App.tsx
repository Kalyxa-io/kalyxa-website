import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
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

function App() {
  const [showStylistApplication, setShowStylistApplication] = useState(false);

  const handleStylistApplicationOpen = () => {
    setShowStylistApplication(true);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar onApplyClick={handleStylistApplicationOpen} />
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
        <Footer />
        <AnimatePresence>
          {showStylistApplication && (
            <StylistApplicationForm onClose={() => setShowStylistApplication(false)} />
          )}
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

export default App;

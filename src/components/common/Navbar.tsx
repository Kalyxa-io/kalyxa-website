import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import WaitlistForm from '../home/WaitlistForm';

interface NavbarProps {
  onApplyClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onApplyClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showWaitlistForm, setShowWaitlistForm] = useState(false);
  const location = useLocation();
  
  const isForStylistsPage = location.pathname === '/for-stylists';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWaitlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowWaitlistForm(true);
  };

  const renderNavButtons = () => {
    if (isForStylistsPage) {
      return (
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/"
            className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
          >
            Home
          </Link>
          <button
            onClick={onApplyClick}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-shadow duration-300"
          >
            Apply Today
          </button>
        </div>
      );
    }

    return (
      <div className="hidden md:flex items-center space-x-4">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full opacity-0 group-hover:opacity-10 blur transition-all duration-300"></div>
          
          <Link
            to="/for-stylists"
            className="relative px-6 py-2 text-gray-800 hover:text-purple-600 font-medium transition-all duration-300 flex items-center space-x-1 group border-2 border-purple-600 rounded-full hover:border-indigo-600"
          >
            <span>For Stylists</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">✨</span>
          </Link>
        </div>
        
        <button
          onClick={handleWaitlistClick}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-shadow duration-300"
        >
          Join Waitlist
        </button>
      </div>
    );
  };

  const renderMobileMenuItems = () => {
    if (isForStylistsPage) {
      return (
        <div className="px-4 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 text-gray-600 hover:text-purple-600 transition-colors duration-300"
          >
            Home
          </Link>
          <button
            onClick={onApplyClick}
            className="block w-full px-4 py-3 text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg mt-4"
          >
            Apply Today
          </button>
        </div>
      );
    }

    return (
      <div className="px-4 pt-2 pb-3 space-y-1">
        <Link
          to="/for-stylists"
          className="block px-3 py-2 text-gray-600 hover:text-purple-600 transition-colors duration-300"
        >
          For Stylists
        </Link>
        <button
          onClick={handleWaitlistClick}
          className="block w-full px-4 py-3 text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg mt-4"
        >
          Join Waitlist
        </button>
      </div>
    );
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo and Company Name */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 py-2">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/kalyxa-logo.png`}
                  alt="Kalyxa Logo" 
                  className="h-16 w-auto mt-2"
                />
                <span className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Kalyxa
                </span>
              </Link>
            </div>

            {/* Navigation Buttons */}
            {renderNavButtons()}

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              {renderMobileMenuItems()}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Add Waitlist Form */}
      <AnimatePresence>
        {showWaitlistForm && (
          <WaitlistForm onClose={() => setShowWaitlistForm(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
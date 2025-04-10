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
  
  const isHomePage = location.pathname === '/';
  const isWardrobePage = location.pathname === '/wardrobe-digitization';
  const isStylistPage = location.pathname === '/for-stylists';

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

  const getNavLinkClasses = (isActive: boolean) => `
    text-gray-800 font-medium transition-all duration-300 relative group
    ${isActive ? 'text-purple-600' : 'hover:text-purple-600'}
  `;

  const renderNavButtons = () => {
    if (isStylistPage) {
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
        <Link
          to="/wardrobe-digitization"
          className="text-gray-800 hover:text-purple-600 transition-colors duration-300"
        >
          Wardrobe Service
        </Link>
        
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
        
        <a
          href="https://apps.apple.com/us/app/kalyxa/id6738635909"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-shadow duration-300"
        >
          Download App
        </a>
      </div>
    );
  };

  const renderMobileMenuItems = () => {
    if (isStylistPage) {
      return (
        <div className="px-4 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 text-gray-600 hover:text-purple-600 transition-colors duration-300"
          >
            Home
          </Link>
          <a
            href="https://apps.apple.com/us/app/kalyxa/id6738635909"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-4 py-3 text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg mt-4"
          >
            Download App
          </a>
        </div>
      );
    }

    return (
      <div className="px-4 pt-2 pb-3 space-y-1">
        <Link
          to="/wardrobe-digitization"
          className="block px-3 py-2 text-gray-600 hover:text-purple-600 transition-colors duration-300"
        >
          Wardrobe Service
        </Link>
        <Link
          to="/for-stylists"
          className="block px-3 py-2 text-gray-600 hover:text-purple-600 transition-colors duration-300"
        >
          For Stylists
        </Link>
        <a
          href="https://apps.apple.com/us/app/kalyxa/id6738635909"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full px-4 py-3 text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg mt-4"
        >
          Download App
        </a>
      </div>
    );
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo and Company Name */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 py-2 group"
            >
              <motion.img 
                src={`${process.env.PUBLIC_URL}/images/kalyxa-logo.png`}
                alt="Kalyxa Logo" 
                className="h-12 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <span className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Kalyxa
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Regular Links */}
              <div className="flex items-center space-x-6">
                {/* Conditional Home Link */}
                {!isHomePage && (
                  <Link
                    to="/"
                    className={getNavLinkClasses(isHomePage)}
                  >
                    Home
                    <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    {isHomePage && (
                      <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-purple-600"></div>
                    )}
                  </Link>
                )}
                
                <Link
                  to="/wardrobe-digitization"
                  className={getNavLinkClasses(isWardrobePage)}
                >
                  Wardrobe Service
                  <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  {isWardrobePage && (
                    <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-purple-600"></div>
                  )}
                </Link>
                
                <Link
                  to="/for-stylists"
                  className={getNavLinkClasses(isStylistPage)}
                >
                  For Stylists
                  <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  {isStylistPage && (
                    <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-purple-600"></div>
                  )}
                </Link>
              </div>

              {/* CTA Button */}
              <motion.a
                href="https://apps.apple.com/us/app/kalyxa/id6738635909"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Download App</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {!isMobileMenuOpen ? (
                <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-lg border-t"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
                {/* Conditional Home Link in Mobile Menu */}
                {!isHomePage && (
                  <Link
                    to="/"
                    className={`block px-4 py-2.5 rounded-lg hover:bg-purple-50 transition-all duration-300 
                      ${isHomePage ? 'text-purple-600 bg-purple-50' : 'text-gray-800 hover:text-purple-600'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                )}
                
                <Link
                  to="/wardrobe-digitization"
                  className={`block px-4 py-2.5 rounded-lg hover:bg-purple-50 transition-all duration-300 
                    ${isWardrobePage ? 'text-purple-600 bg-purple-50' : 'text-gray-800 hover:text-purple-600'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Wardrobe Service
                </Link>
                
                <Link
                  to="/for-stylists"
                  className={`block px-4 py-2.5 rounded-lg hover:bg-purple-50 transition-all duration-300 
                    ${isStylistPage ? 'text-purple-600 bg-purple-50' : 'text-gray-800 hover:text-purple-600'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  For Stylists
                </Link>
                <motion.a
                  href="https://apps.apple.com/us/app/kalyxa/id6738635909"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-3 text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Download App
                </motion.a>
              </div>
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
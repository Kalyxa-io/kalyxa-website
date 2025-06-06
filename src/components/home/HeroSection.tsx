import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WaitlistForm from '../home/WaitlistForm';

const HeroSection = () => {
  const [showWaitlistForm, setShowWaitlistForm] = useState(false);

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0"></div>        
        {/* Larger animated blobs */}
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
              Welcome to Kalyxa
            </span>
            {/* Product Hunt Badge */}
            <div className="mt-2 mb-4">
              <a href="https://www.producthunt.com/posts/kalyxa?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-kalyxa" target="_blank" rel="noopener noreferrer">
                <img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=958501&theme=light&period=daily&t=1746468316422" alt="Kalyxa Product Hunt Top 5" style={{ width: 250, height: 54 }} width="250" height="54" />
              </a>
            </div>
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Transform Your Style</span>
              <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                With AI & Expert Stylists
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg text-gray-600 max-w-3xl"
            >
              Personalized wardrobe management, Daily Outfit recommendations, and Professional Fashion consultations in one seamless platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-col space-y-6"
            >
              {/* Main CTA Container */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
                {/* Download App Button */}
                <motion.a
                  href="https://services.kalyxa.io/auth/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex justify-center items-center px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 transition-all duration-300"
                >
                  <span>Book a Service Today</span>
                </motion.a>

                {/* Home Visit Button with Enhanced Design - Commented Out
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                  
                  <motion.a
                    href="https://calendly.com/admin-kalyxa/in-person-wardrobe-service-san-francisco?month=2025-04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-between px-6 py-4 rounded-xl bg-white border-2 border-purple-600 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">📸</span>
                      <div className="flex flex-col text-left">
                        <span className="text-purple-600 font-semibold">Book Home Visit</span>
                        <span className="text-xs text-purple-500">Professional Wardrobe Digitization</span>
                      </div>
                    </div>
                    <span className="ml-4 text-purple-600 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </motion.a>
                </motion.div>
                */}
              </div>

              {/* Enhanced Service Info Box - Commented Out
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="max-w-md bg-gradient-to-br from-purple-50 to-white rounded-xl p-5 shadow-lg border border-purple-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Expert Digitization Service</h4>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      Founders visit your home to digitize your wardrobe—no stress, no manual uploads, just seamless styling setup.
                    </p>
                  </div>
                </div>
              </motion.div>
              */}
            </motion.div>

            {/* Interactive Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              {[
                { 
                  label: 'Available Now', 
                  value: 'Live', 
                  description: 'Start Styling'
                },
                { 
                  label: 'AI-Powered Matches', 
                  value: '98%', 
                  description: 'Style Accuracy'
                },
                { 
                  label: 'Style Revolution', 
                  value: '2025', 
                  description: 'Get Started'
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-purple-600">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                  <div className="text-xs text-purple-500 mt-1">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Illustration Area */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-[600px]">
              {/* Main Visual Element */}
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-80 h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden">
                  {/* Phone-like frame */}
                  <div className="absolute top-0 left-0 right-0 h-6 bg-gray-100 flex justify-center items-center">
                    <div className="w-20 h-4 bg-gray-200 rounded-full"></div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-4 mt-6">
                    <div className="w-full h-60 bg-purple-100 rounded-xl mb-4 flex items-center justify-center">
                      <img 
                        src="/images/jacket.png" 
                        alt="Stylish Jacket"
                        className="w-62 h-62 object-contain"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
                      <div className="h-4 w-1/2 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Existing Floating Elements */}
              <motion.div
                animate={{
                  y: [-20, 20, -20],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute top-20 right-20 w-32 h-32 bg-purple-100 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <img 
                  src="/images/miniskirt.png" 
                  alt="Stylish skirt"
                  className="w-36 h-36 object-contain"
                />
              </motion.div>
              
              <motion.div
                animate={{
                  y: [20, -20, 20],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute bottom-40 left-20 w-28 h-28 bg-indigo-100 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-5xl">✨</span>
              </motion.div>

              {/* New Floating Elements */}
              <motion.div
                animate={{
                  x: [-10, 10, -10],
                  rotate: [0, 15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute top-40 left-0 w-24 h-24 bg-pink-100 rounded-lg flex items-center justify-center shadow-lg transform rotate-12"
              >
                <img 
                  src="/images/bag.png" 
                  alt="Stylish Bag"
                  className="w-24 h-24 object-contain"
                />
              </motion.div>

              <motion.div
                animate={{
                  y: [-15, 15, -15],
                  x: [5, -5, 5],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute bottom-20 right-40 w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center shadow-lg"
              >
                <img 
                  src="/images/shoes.png" 
                  alt="Stylish Shoes"
                  className="w-28 h-28 object-contain"
                />
              </motion.div>

              {/* Decorative Circles */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute top-10 left-40 w-6 h-6 bg-purple-400 rounded-full"
              />
              
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute bottom-40 right-10 w-8 h-8 bg-indigo-400 rounded-full"
              />

              {/* Fashion-related text elements */}
              <motion.div
                animate={{
                  y: [-5, 5, -5],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute top-60 right-0 bg-white px-4 py-2 rounded-lg shadow-lg"
              >
                <span className="text-purple-600 font-semibold">Style Match: 98%</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [5, -5, 5],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute bottom-80 left-10 bg-white px-4 py-2 rounded-lg shadow-lg"
              >
                <span className="text-indigo-600 font-semibold">Perfect Match! ⭐</span>
              </motion.div>

              {/* OOTD keyword - Adjusted position */}
              <motion.div
                animate={{
                  y: [5, -5, 5],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute top-[400px] left-[-30px] bg-white px-4 py-2 rounded-lg shadow-lg"
              >
                <span className="text-pink-600 font-semibold">OOTD! 🌟</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [-5, 5, -5],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute bottom-40 right-[-20px] bg-white px-4 py-2 rounded-lg shadow-lg"
              >
                <span className="text-purple-600 font-semibold">Stylist Approved ✓</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [5, -5, 5],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute top-20 left-20 bg-white px-4 py-2 rounded-lg shadow-lg"
              >
                <span className="text-indigo-600 font-semibold">Stress Free Mornings ☀️</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="w-6 h-10 border-2 border-purple-600 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-purple-600 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {showWaitlistForm && (
          <WaitlistForm onClose={() => setShowWaitlistForm(false)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
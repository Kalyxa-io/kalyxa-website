import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const HowItWorksSection = () => {
  const aiSteps = [
    {
      number: "01",
      title: "Upload Your Wardrobe",
      description: "Take photos of your clothes or import them from your favorite stores to create your digital wardrobe.",
      image: `${process.env.PUBLIC_URL}/images/2.jpeg`
    },
    {
      number: "02",
      title: "Get Daily Suggestions",
      description: "Our AI analyzes your style, weather, and calendar to suggest perfect outfits every day.",
      image: `${process.env.PUBLIC_URL}/images/1.jpeg`
    },
    {
      number: "03",
      title: "Mix and Match",
      description: "Discover new combinations from your existing wardrobe and save your favorite looks.",
      image: `${process.env.PUBLIC_URL}/images/3.jpeg`
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const freelanceSteps = [
    {
      number: "01",
      title: "Choose Your Stylist",
      description: "Browse through profiles of professional stylists and fashion influencers.",
      image: `${process.env.PUBLIC_URL}/images/professional-stylist1.jpeg`
    },
    {
      number: "02",
      title: "Select Your Service",
      description: "Pick between occasion styling or personal shopping guidance.",
      image: `${process.env.PUBLIC_URL}/images/professional-stylist2.jpeg`
    },
    {
      number: "03",
      title: "Get Personalized Advice",
      description: "Receive expert recommendations tailored to your style and needs.",
      image: `${process.env.PUBLIC_URL}/images/professional-stylist3.jpeg`
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % freelanceSteps.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + freelanceSteps.length) % freelanceSteps.length);
  };

  return (
    <>
      {/* AI Section */}
      <section id="ai-powered-styling" className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-purple-600 tracking-wider uppercase mb-2 block">
                How It Works
              </span>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                AI-Powered OOTD
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the future of fashion with our AI styling technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
                  
                  <div className="relative h-[700px] rounded-lg shadow-xl overflow-hidden group/card">
                    <div className="absolute inset-0 p-3">
                      <img 
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>

                    <div className="absolute inset-x-3 bottom-3 rounded-b-lg transition-opacity duration-300 ease-in-out group-hover/card:opacity-0">
                      <div className="absolute inset-0 h-[400px] bg-gradient-to-t from-white/95 via-white/50 to-transparent"></div>
                      <div className="absolute inset-0 h-[250px] bg-gradient-to-t from-white/98 via-white/95 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-white via-white/98 to-white/95"></div>

                      <div className="relative h-[400px] flex flex-col justify-end p-6">
                        <div className="text-purple-600 font-bold text-2xl mb-4">
                          {step.number}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 mb-2">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Stylists Section - Add id here */}
      <section 
        id="expert-stylists"
        className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-purple-50 to-white py-20"
      >
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-purple-600 tracking-wider uppercase mb-2 block">
                How It Works
              </span>
              <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
                Styling Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Connect with expert fashion stylists for personalized guidance
              </p>
            </div>

            {/* Slideshow Container - Increased width */}
            <div className="relative max-w-[1800px] mx-auto">
              {/* Navigation Arrows - Adjusted position for wider container */}
              <button 
                onClick={prevSlide}
                className="absolute left-[-120px] top-1/2 transform -translate-y-1/2 z-20 bg-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-[-120px] top-1/2 transform -translate-y-1/2 z-20 bg-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Card Container - Decreased height, Increased width */}
              <div className="relative h-[600px] rounded-xl shadow-xl overflow-hidden group bg-white">
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    {/* Image Container - Optimized for wider display */}
                    <div className="absolute inset-0 p-4">
                      <img 
                        src={freelanceSteps[currentSlide].image}
                        alt={freelanceSteps[currentSlide].title}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>

                    {/* Text Overlay - Adjusted for new dimensions */}
                    <div className="absolute inset-x-4 bottom-4 rounded-lg transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                      {/* Gradient Overlays - Adjusted heights */}
                      <div className="absolute inset-0 h-[300px] bg-gradient-to-t from-white/95 via-white/50 to-transparent"></div>
                      <div className="absolute inset-0 h-[200px] bg-gradient-to-t from-white/98 via-white/95 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-white via-white/98 to-white/95"></div>

                      {/* Content - Adjusted spacing */}
                      <div className="relative h-[300px] flex flex-col justify-end p-8">
                        <div className="text-purple-600 font-bold text-3xl mb-6">
                          {freelanceSteps[currentSlide].number}
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          {freelanceSteps[currentSlide].title}
                        </h3>
                        <p className="text-lg text-gray-600 max-w-2xl">
                          {freelanceSteps[currentSlide].description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HowItWorksSection;
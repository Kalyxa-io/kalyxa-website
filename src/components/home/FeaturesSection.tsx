import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import AiStylistIcon from '../common/vectors/icons/AiStylistIcon';
import OutfitSuggestionIcon from '../common/vectors/icons/OutfitSuggestionIcon';
import WeatherAdaptiveIcon from '../common/vectors/icons/WeatherAdaptiveIcon';
import CalendarSyncIcon from '../common/vectors/icons/CalendarSyncIcon';
import OccasionStylingIcon from '../common/vectors/icons/OccasionStylingIcon';
import PersonalShoppingIcon from '../common/vectors/icons/PersonalShoppingIcon';
import { Link as ScrollLink } from 'react-scroll';

const FeaturesSection = () => {
  // Define your feature data
  const aiFeatures = [
    {
      icon: <AiStylistIcon />,
      title: "AI-Powered Styling",
      description: "Get personalized outfit recommendations powered by advanced AI technology."
    },
    {
      icon: <OutfitSuggestionIcon />,
      title: "Daily Outfit Suggestions",
      description: "Receive curated outfit combinations from your existing wardrobe."
    },
    {
      icon: <WeatherAdaptiveIcon />,
      title: "Weather-Adaptive",
      description: "Weather-appropriate outfit suggestions based on local forecast."
    },
    {
      icon: <CalendarSyncIcon />,
      title: "Calendar Integration",
      description: "Outfit recommendations tailored to your scheduled events."
    }
  ];

  const stylistFeatures = [
    {
      icon: <OccasionStylingIcon />,
      title: "Occasion Styling",
      description: "Get personalized styling advice from styling experts for your special events."
    },
    {
      icon: <PersonalShoppingIcon />,
      title: "Personal Shopping Guide",
      description: "Connect with stylists who help you shop smart and build a cohesive wardrobe."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* AI Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ 
            once: false,
            amount: 0.3
          }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
              AI-Powered Features
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Smart Wardrobe Assistant
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of personal styling with our AI-powered recommendations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ 
                  once: false,
                  amount: 0.3
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>

          {/* New CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <ScrollLink
                to="ai-powered-styling"
                smooth={true}
                duration={800}
                offset={-100}
                className="relative inline-flex items-center px-8 py-4 bg-white rounded-full cursor-pointer group-hover:scale-[1.02] transition-transform duration-300"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 font-semibold text-lg">
                  See How It Works
                </span>
                <svg
                  className="ml-2 w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </ScrollLink>
            </div>
          </motion.div>
        </motion.div>

        {/* Stylist Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ 
            once: false,
            amount: 0.3
          }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
              Expert Stylists 
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Connect with Fashion Experts
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Get personalized styling advice from top fashion influencers and fashion stylists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stylistFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ 
                  once: false,
                  amount: 0.3
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>

          {/* New CTA Button for Stylist Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <ScrollLink
                to="expert-stylists"
                smooth={true}
                duration={800}
                offset={-100}
                className="relative inline-flex items-center px-8 py-4 bg-white rounded-full cursor-pointer group-hover:scale-[1.02] transition-transform duration-300"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 font-semibold text-lg">
                  See How It Works
                </span>
                <svg
                  className="ml-2 w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </ScrollLink>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
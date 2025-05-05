import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EarningCalculator from '../components/Stylist/EarningCalculator';
import OnboardingTimeline from '../components/Stylist/OnboardingTimeline';
import JoinStylistCTA from '../components/home/JoinStylistCTA';
import StylistApplicationForm from '../components/Stylist/StylistApplicationForm';

// Only define HeroSection props since JoinStylistCTA is imported
interface HeroSectionProps {
  onApplyClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onApplyClick }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-indigo-50 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
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

      {/* Main Content - Remove any overflow restrictions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text Content (Keep existing) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Product Hunt Badge */}
            <div className="mt-2 mb-4">
              <a href="https://www.producthunt.com/posts/kalyxa?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-kalyxa" target="_blank" rel="noopener noreferrer">
                <img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=958501&theme=light&period=daily&t=1746468316422" alt="Kalyxa Product Hunt Top 5" style={{ width: 250, height: 54 }} width="250" height="54" />
              </a>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Grow Your Styling</span>
              <span className="block text-purple-600">Business With Kalyxa</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl">
              Join our platform of professional stylists and fashion influencers. 
              Expand your reach, manage clients efficiently, and grow your business.
            </p>
            <div className="mt-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                onClick={onApplyClick}
              >
                Apply Now
              </motion.button>
            </div>
          </motion.div>

          {/* Right side - Modified container structure */}
          <div className="relative">
            {/* Container for floating elements and dashboard */}
            <div className="relative h-[600px] w-full">
              {/* Main Dashboard Frame */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full h-full bg-white rounded-2xl shadow-2xl"
              >
                {/* Top Navigation Bar */}
                <div className="h-14 bg-purple-600 flex items-center justify-between px-6">
                  <motion.div 
                    className="text-white font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Stylist Dashboard
                  </motion.div>
                  <div className="flex space-x-2">
                    {['bg-red-500', 'bg-yellow-500', 'bg-green-500'].map((color, i) => (
                      <motion.div
                        key={i}
                        className={`w-3 h-3 rounded-full ${color}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                      />
                    ))}
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 grid grid-cols-2 gap-4">
                  {/* Client Requests Panel */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="col-span-2 bg-purple-50 rounded-xl p-4"
                  >
                    <h3 className="text-purple-800 font-semibold mb-3">New Styling Requests</h3>
                    <div className="space-y-2">
                      {[
                        { name: "Sarah M.", event: "Wedding Guest", time: "2h ago" },
                        { name: "James L.", event: "Business Casual", time: "5h ago" }
                      ].map((request, i) => (
                        <motion.div
                          key={i}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 1 + i * 0.2 }}
                          className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm"
                        >
                          <div>
                            <div className="font-medium text-gray-800">{request.name}</div>
                            <div className="text-sm text-gray-500">{request.event}</div>
                          </div>
                          <div className="text-xs text-purple-600">{request.time}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Stats Cards */}
                  {[
                    { label: "Active Clients", value: "24", icon: "👥" },
                    { label: "Completed Looks", value: "127", icon: "✨" },
                    { label: "Earnings", value: "$15k", icon: "💰" },
                    { label: "Rating", value: "4.9", icon: "⭐" }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.2 + i * 0.1 }}
                      className="bg-white p-4 rounded-xl shadow-sm border border-purple-100"
                    >
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                      <div className="text-xl font-bold text-purple-600">{stat.value}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Elements - Now siblings to the dashboard instead of children */}
              <motion.div
                animate={{
                  y: [-5, 5, -5],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute top-10 -right-32 bg-white px-4 py-2 rounded-lg shadow-lg z-20"
              >
                <span className="text-purple-600 font-semibold whitespace-nowrap">New Client Match! 🎯</span>
              </motion.div>

              {/* Adjusted position for Styling Success notification */}
              <motion.div
                animate={{
                  y: [5, -5, 5],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute bottom-40 -left-32 bg-white px-4 py-2 rounded-lg shadow-lg z-20"
              >
                <span className="text-indigo-600 font-semibold whitespace-nowrap">Styling Success! ⭐</span>
              </motion.div>

              {/* Add more floating elements with absolute positioning */}
              <motion.div
                animate={{
                  y: [-8, 8, -8],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute top-40 -right-36 bg-white px-4 py-2 rounded-lg shadow-lg z-20"
              >
                <span className="text-green-600 font-semibold whitespace-nowrap">$500 Earned Today! 💰</span>
              </motion.div>

              {/* Continue with more floating elements... */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// In the BenefitsSection component, add onApplyClick prop
interface BenefitsSectionProps {
  onApplyClick: () => void;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onApplyClick }) => {
  const benefits = [
    {
      title: "Expand Your Reach",
      description: "Connect with clients globally and grow your styling business beyond geographical boundaries.",
      icon: "🌍",
      stats: ["500+ Active Stylists", "50+ Countries", "10k+ Global Clients"],
      metrics: {
        value: "Join Now",
        label: "Be Our Founding Stylists"
      }
    },
    {
      title: "Flexible Schedule",
      description: "Work on your own terms. Choose your availability and manage appointments that fit your lifestyle.",
      icon: "⏰",
      stats: ["24/7 Platform Access", "Custom Availability", "Work From Anywhere"],
      metrics: {
        value: "100%",
        label: "Schedule Freedom"
      }
    },
    {
      title: "Service Options",
      description: "Offer personalized fashion solutions with two distinct options: Occasion-Specific Styling & Personal Shopping Guide",
      icon: "✨",
      stats: ["2 Service Types", "Custom Packages", "Flexible Pricing"],
      metrics: {
        value: "2",
        label: "Service Types"
      }
    },
    {
      title: "Secure Payments",
      description: "Get paid securely and on time. Focus on what you do best while we handle the transactions.",
      icon: "💳",
      stats: ["Instant Payouts", "Secure Platform", "0% Platform Fee"],
      metrics: {
        value: "48h",
        label: "Fast Payouts"
      }
    }
  ];

  return (
    <section className="min-h-screen relative bg-gradient-to-b from-white to-purple-50 py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with fixed alignment */}
        <div className="text-center mb-24 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-8 text-center">
              Why Join Kalyxa?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
              Everything you need to succeed as a fashion professional
            </p>
          </motion.div>
        </div>

        {/* Benefits Grid with adjusted spacing */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-full"
            >
              {/* Card Content - Added fixed height and flex column */}
              <div className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 h-full flex flex-col">
                {/* Static Icon */}
                <div className="text-5xl mb-4 flex-shrink-0">
                  {benefit.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex-shrink-0">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 mb-6 flex-grow">
                  {benefit.description}
                </p>

                {/* Metrics Display */}
                <div className="flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    className="text-3xl font-bold text-purple-600"
                  >
                    {benefit.metrics.value}
                  </motion.div>
                  <div className="text-sm text-gray-500">
                    {benefit.metrics.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* New Interactive CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative inline-block group cursor-pointer">
            {/* Animated background blur effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition duration-300"
              animate={{
                scale: [1, 1.02, 1],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />

            {/* Main CTA Content */}
            <div className="relative flex flex-col items-center bg-white rounded-xl p-8 shadow-xl">
              <motion.div
                className="text-4xl mb-4"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0] 
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                🚀
              </motion.div>
              
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                Launch Your Styling Career!
              </h3>
              
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {["Early Access", "Premium Features", "Founding Member Benefits"].map((perk, index) => (
                  <motion.span
                    key={perk}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-600"
                  >
                    <span className="mr-1">✓</span> {perk}
                  </motion.span>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onApplyClick}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Join Our Founding Team
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 text-sm text-gray-600"
              >
                Limited spots available for founding stylists
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceProcess = () => {
  const services = [
    {
      title: "Personal Shopping Guide",
      description: "Help clients build versatile wardrobes",
      steps: [
        "Review client's virtual wardrobe",
        "Analyze style preferences and lifestyle",
        "Suggest versatile pieces that complement existing items",
        "Create multiple outfit combinations",
        "Provide shopping links and alternatives"
      ],
      icon: "🛍️"
    },
    {
      title: "Occasion Styling",
      description: "Event-specific styling solutions",
      steps: [
        "Review event details and itinerary",
        "Assess client's wardrobe",
        "Create event-specific looks",
        "Recommend new pieces if needed",
        "Provide styling instructions"
      ],
      icon: "✨"
    }
  ];

  return (
    <section className="min-h-screen bg-white py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-8">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guide your clients through their style journey with our innovative virtual wardrobe platform
          </p>
        </div>

        {/* Service Flow with adjusted spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
              <div className="relative bg-white p-8 rounded-lg shadow-xl">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3">
                  {service.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <span className="text-sm text-purple-600 font-medium">{stepIndex + 1}</span>
                      </div>
                      <p className="text-gray-600">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform Features with adjusted spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Virtual Wardrobe Access",
              description: "View clients' complete wardrobes with detailed item information",
              icon: "👕"
            },
            {
              title: "Styling Dashboard",
              description: "Manage requests, create looks, and track client interactions",
              icon: "📊"
            },
            {
              title: "Direct Communication",
              description: "Chat with clients and share recommendations in real-time",
              icon: "💬"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Add this interface at the top of the file
interface ForStylistsProps {
  showApplicationForm: boolean;
  setShowApplicationForm: React.Dispatch<React.SetStateAction<boolean>>;
}

// Update the component definition to use the props
const ForStylists: React.FC<ForStylistsProps> = ({ showApplicationForm, setShowApplicationForm }) => {
  const handleApplyClick = () => {
    setShowApplicationForm(true);
  };

  return (
    <div className="min-h-screen">
      <HeroSection onApplyClick={handleApplyClick} />
      <BenefitsSection onApplyClick={handleApplyClick} />
      <ServiceProcess />
      <EarningCalculator />
      <OnboardingTimeline />
      <JoinStylistCTA onApplyClick={handleApplyClick} />
      
      <AnimatePresence>
        {showApplicationForm && (
          <StylistApplicationForm onClose={() => setShowApplicationForm(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ForStylists;
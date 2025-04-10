import React from 'react';
import { motion } from 'framer-motion';

const DigitizationService = () => {
  const features = [
    {
      icon: "📸",
      title: "Wardrobe Digitization",
      description: "Professional photography and upload of your entire wardrobe directly into your app"
    },
    {
      icon: "🗂️",
      title: "Smart Organization",
      description: "Categorized sorting for effortless daily outfit generation"
    },
    {
      icon: "💡",
      title: "App Mastery",
      description: "Detailed walkthrough to maximize your Kalyxa experience"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
                Exclusive Service
              </span>
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Let Us Do The</span>
                <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Heavy Lifting
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-xl text-gray-600 leading-relaxed"
              >
                Experience the magic of Kalyxa, live and in person. We'll come to your home in Bay Area and transform your physical wardrobe into a digital style powerhouse.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8"
              >
                <motion.a
                  href="https://calendly.com/admin-kalyxa/in-person-wardrobe-service-san-francisco"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 transition-all duration-300"
                >
                  Book Your Visit
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </motion.div>

              {/* Location Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-6 inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md"
              >
                <span className="text-purple-600">📍</span>
                <span className="text-sm font-medium text-gray-600">Currently serving Bay Area</span>
              </motion.div>
            </motion.div>

            {/* Image/Visual Section */}
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
                  {/* Split Display showing physical to digital transformation */}
                  <div className="relative w-full flex items-center justify-between space-x-4">
                    {/* Physical Wardrobe Side */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative w-72 h-[400px] bg-white rounded-2xl shadow-xl overflow-hidden"
                    >
                      <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full shadow-sm">
                        <span className="text-sm font-medium text-purple-600">Physical Wardrobe</span>
                      </div>
                      <div className="h-full w-full p-4 flex flex-col space-y-2">
                        <img 
                          src="/images/physical_wardrobe.png" 
                          alt="Physical Wardrobe"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </motion.div>

                    {/* Transform Arrow */}
                    <motion.div
                      animate={{
                        x: [-5, 5, -5],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      className="flex flex-col items-center justify-center"
                    >
                      <div className="bg-purple-100 rounded-full p-4">
                        <span className="text-3xl">→</span>
                      </div>
                      <span className="text-sm font-medium text-purple-600 mt-2">Digitization</span>
                    </motion.div>

                    {/* Digital Wardrobe Side */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative w-72 h-[400px] bg-white rounded-2xl shadow-xl overflow-hidden"
                    >
                      {/* Phone-like frame */}
                      <div className="absolute top-0 left-0 right-0 h-6 bg-gray-100 flex justify-center items-center">
                        <div className="w-20 h-4 bg-gray-200 rounded-full"></div>
                      </div>
                      
                      <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full shadow-sm">
                        <span className="text-sm font-medium text-purple-600">Digital Wardrobe</span>
                      </div>

                      {/* App Content */}
                      <div className="p-4 mt-6">
                        <div className="grid grid-cols-2 gap-3">
                          {['/images/jacket.png', '/images/miniskirt.png', '/images/bag.png', '/images/shoes.png'].map((item, index) => (
                            <motion.div
                              key={index}
                              whileHover={{ scale: 1.05 }}
                              className="bg-purple-50 rounded-lg p-2 flex items-center justify-center"
                            >
                              <img 
                                src={item}
                                alt="Wardrobe Item"
                                className="w-full h-32 object-contain"
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg"
                >
                  <span className="text-purple-600 font-semibold">✨ Professional Photos</span>
                </motion.div>

                <motion.div
                  animate={{
                    y: [10, -10, 10],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute bottom-20 left-0 bg-white px-4 py-2 rounded-lg shadow-lg"
                >
                  <span className="text-indigo-600 font-semibold">🎯 Smart Organization</span>
                </motion.div>

                <motion.div
                  animate={{
                    y: [-15, 15, -15],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute top-20 left-10 bg-white px-4 py-2 rounded-lg shadow-lg"
                >
                  <span className="text-purple-600 font-semibold">📱 Instant Setup</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              What's Included
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Everything you need for a seamless style transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
                <div className="relative p-6 bg-white rounded-lg shadow-xl">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Promo Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            {/* Trial Offer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-1 bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-600 to-indigo-600 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                Limited Time
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🎁</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">7-Day Free Trial</h3>
                  <p className="text-gray-600">
                    Experience stress-free mornings with our Outfit of the Day service, starting immediately after digitization.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Styling Discount */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1 bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-600 to-indigo-600 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                75% OFF
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-4xl">👗</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    $15 Styling Services
                  </h3>
                  <p className="text-gray-600">
                    Get personalized styling from real stylists who can see your entire wardrobe. Includes occasion-specific and shopping guidance.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Value Proposition Tags */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {[
              "✨ Real Stylist Consultation",
              "🎯 Personalized Recommendations",
              "⚡ Immediate Setup",
              "💫 Wardrobe-Based Advice"
            ].map((tag, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-purple-700 shadow-sm"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 p-0.5">
            <div className="relative rounded-2xl bg-white px-8 py-12 md:px-12 md:py-16">
              <div className="max-w-3xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Ready to Transform Your Wardrobe?
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Limited slots available weekly. Book your visit now and step into your most stylish self.
                  </p>
                  <motion.a
                    href="https://calendly.com/admin-kalyxa/in-person-wardrobe-service-san-francisco"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Schedule Your Session
                    <span className="ml-2">→</span>
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitizationService;
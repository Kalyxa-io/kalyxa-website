import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-32 relative">
      {/* Connecting Element from Previous Section */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          className="w-4 h-24 bg-gradient-to-b from-purple-600 to-transparent rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 mix-blend-multiply opacity-90" />
          </div>

          <div className="relative px-8 py-24 sm:px-16 sm:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold text-white sm:text-5xl mb-8">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-purple-100 mb-12">
                Join our community of professional stylists and start growing your business today
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-purple-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Apply Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
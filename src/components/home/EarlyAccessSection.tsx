import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WaitlistForm from './WaitlistForm';

const EarlyAccessSection = () => {
  const [showWaitlistForm, setShowWaitlistForm] = useState(false);

  const betaFeedback = [
    {
      quote: "As a beta tester, I'm amazed by how accurately the AI understands my style preferences. Can't wait for the full launch!",
      name: "Sarah M.",
      role: "Early Access Member",
      avatar: "/images/Sarah.jpeg",
      rating: 5,
      tag: "AI Styling"
    },
    {
      quote: "The connection with professional stylists adds a personal touch that sets Kalyxa apart from other fashion apps I've tried.",
      name: "Michael K.",
      role: "Beta Program Member",
      avatar: "/images/Mike.jpeg",
      rating: 5,
      tag: "Stylist Platform"
    },
    {
      quote: "Being part of the beta testing has shown me the future of personal styling. The AI recommendations are spot-on!",
      name: "Emma R.",
      role: "Fashion Enthusiast",
      avatar: "/images/Emma.jpeg",
      rating: 5,
      tag: "AI Styling"
    }
  ];

  const handleEarlyAccessClick = () => {
    setShowWaitlistForm(true);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
            Early Access Feedback
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Beta Users Are Saying
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Join our growing community of fashion enthusiasts and be part of the future of personal styling
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {betaFeedback.map((feedback, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
              <div className="relative p-8 bg-white rounded-2xl shadow-xl">
                {/* Beta Tag */}
                <div className="absolute -top-3 -right-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                    {feedback.tag}
                  </span>
                </div>

                {/* Quote */}
                <div className="mb-4">
                  <img 
                    src={feedback.avatar} 
                    alt={feedback.name}
                    className="w-20 h-20 rounded-full object-cover mb-4"
                    loading="lazy"
                  />
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(feedback.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{feedback.quote}"</p>
                </div>

                {/* Author */}
                <div className="mt-6">
                  <p className="font-semibold text-gray-900">{feedback.name}</p>
                  <p className="text-purple-600 text-sm">{feedback.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-lg">
            <span className="text-gray-600">Download App Now!</span>
            <motion.a
              href="https://apps.apple.com/us/app/kalyxa/id6738635909"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Download App
            </motion.a>
          </div>
          <p className="mt-4 text-gray-500">Available now on the App Store</p>
        </motion.div>

        {/* Add Waitlist Form */}
        <AnimatePresence>
          {showWaitlistForm && (
            <WaitlistForm onClose={() => setShowWaitlistForm(false)} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EarlyAccessSection;
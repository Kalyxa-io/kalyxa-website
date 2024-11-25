import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface JoinStylistCTAProps {
  onApplyClick: () => void;
}

const JoinStylistCTA: React.FC<JoinStylistCTAProps> = ({ onApplyClick }) => {
  const benefits = [
    { icon: "💰", text: "Earn on Your Terms" },
    { icon: "🌍", text: "Work with clients globally" },
    { icon: "⭐", text: "Build your personal brand" },
    { icon: "📱", text: "Shape the Platform" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 p-0.5">
          <div className="relative rounded-2xl bg-white px-8 py-12 md:px-12 md:py-16">
            <div className="absolute top-0 right-0 -mt-4 mr-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              >
                Limited Time: Early Access Benefits 🎉
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-4xl font-bold text-gray-900">
                    Fashion Stylists: <br/>
                    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      Your Next Big Opportunity
                    </span>
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                  Be among the first to connect with clients, build your brand, and grow your reach globally.
                  </p>

                  {/* Benefits Grid */}
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <span className="text-2xl">{benefit.icon}</span>
                        <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="/for-stylists"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 w-full justify-center text-lg font-semibold"
                        onClick={onApplyClick}
                      >
                        Start Earning Today
                        <svg
                          className="ml-2 -mr-1 w-5 h-5"
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
                      </Link>
                    </motion.div>
                    <p className="text-center text-sm text-gray-500">
                      Already a stylist? <Link to="/login" className="text-purple-600 hover:text-purple-700 font-medium">Sign in here</Link>
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-10"
                >
                  {/* Social Proof */}
                  <div className="bg-white rounded-xl shadow-xl p-6 mb-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                        👩‍💼
                      </div>
                      <div>
                        <h4 className="font-semibold">Sarah Mitchell</h4>
                        <p className="text-sm text-gray-600">Professional Stylist</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">
                      "Being part of Kalyxa's beta program is a game-changer! I'm excited to shape the future of styling."
                    </p>
                    <div className="mt-2 flex text-yellow-400">
                      {"★".repeat(5)}
                    </div>
                  </div>

                  {/* Growth Opportunity Card - Replacing Stats Card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white"
                  >
                    <h3 className="text-2xl font-bold mb-4">Grow With Us</h3>
                    <div className="space-y-4">
                      {[
                        {
                          text: "Work with a platform at the forefront of fashion-tech innovation",
                          icon: "🚀"
                        },
                        {
                          text: "Be a founding member as we grow into a global network",
                          icon: "🌟"
                        },
                        {
                          text: "Collaborate with us to create the ultimate platform for stylists",
                          icon: "✨"
                        }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <span className="text-xl flex-shrink-0">{item.icon}</span>
                          <p className="text-sm font-medium opacity-90 leading-relaxed">
                            {item.text}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
                <div className="absolute -bottom-8 -left-4 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinStylistCTA;
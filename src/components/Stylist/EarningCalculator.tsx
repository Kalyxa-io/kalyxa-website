import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EarningCalculator = () => {
  const [clientsPerMonth, setClientsPerMonth] = useState(10);
  const [averagePrice, setAveragePrice] = useState(100);

  const monthlyEarnings = clientsPerMonth * averagePrice;
  const yearlyEarnings = monthlyEarnings * 12;

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-purple-50 py-32 relative">
      {/* Connecting Element from Previous Section */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          className="w-4 h-24 bg-gradient-to-b from-purple-600 to-transparent rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-8">
            Calculate Your Potential Earnings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much you could earn as a Kalyxa stylist
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Calculator Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            {/* Clients Per Month Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-2">
                <label className="text-lg font-medium text-gray-900">
                  Clients per Month
                </label>
                <span className="text-2xl font-bold text-purple-600">
                  {clientsPerMonth}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={clientsPerMonth}
                onChange={(e) => setClientsPerMonth(Number(e.target.value))}
                className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>1 client</span>
                <span>50 clients</span>
              </div>
            </div>

            {/* Average Price Per Service Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-2">
                <label className="text-lg font-medium text-gray-900">
                  Average Price Per Service
                </label>
                <span className="text-2xl font-bold text-purple-600">
                  ${averagePrice}
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="500"
                step="10"
                value={averagePrice}
                onChange={(e) => setAveragePrice(Number(e.target.value))}
                className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>$50</span>
                <span>$500</span>
              </div>
            </div>
          </motion.div>

          {/* Earnings Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8 space-y-8"
          >
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Monthly Potential
              </h3>
              <motion.div
                key={monthlyEarnings}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-4xl font-bold text-purple-600"
              >
                ${monthlyEarnings.toLocaleString()}
              </motion.div>
            </div>

            <div className="text-center p-6 bg-indigo-50 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Yearly Potential
              </h3>
              <motion.div
                key={yearlyEarnings}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-4xl font-bold text-indigo-600"
              >
                ${yearlyEarnings.toLocaleString()}
              </motion.div>
            </div>

            <div className="text-center text-sm text-gray-500 mt-4">
              *Earnings may vary based on various factors including market conditions and service quality
            </div>
          </motion.div>
        </div>
      </div>

      {/* Connecting Element to Next Section */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="w-4 h-24 bg-gradient-to-b from-transparent to-purple-600 rounded-full"
        />
      </div>
    </section>
  );
};

export default EarningCalculator;
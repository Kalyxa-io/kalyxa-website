import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ServiceBuilder = () => {
  const [services, setServices] = useState<string[]>([]);

  const serviceOptions = [
    'Personal Styling',
    'Wardrobe Consultation',
    'Color Analysis',
    'Shopping Assistance',
    'Event Styling',
    'Virtual Styling',
  ];

  return (
    <motion.div 
      className="p-8 bg-white rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h3 className="text-2xl font-bold mb-6">Build Your Service Package</h3>
  
      <div className="space-y-4">
        <div className="flex gap-2 flex-wrap">
          {serviceOptions.map((option) => (
            <motion.button
              key={option}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setServices(prev => [...prev, option])}
              className={`px-4 py-2 rounded-full text-sm ${
                services.includes(option)
                  ? 'bg-purple-600 text-white'
                  : 'bg-purple-100 text-purple-600'
              }`}
            >
              {option}
            </motion.button>
          ))}
        </div>
  
        <div className="mt-6">
          <h4 className="font-semibold mb-3">Your Service Package:</h4>
          <div className="space-y-2">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center justify-between p-3 bg-purple-50 rounded-lg"
              >
                <span>{service}</span>
                <button
                  onClick={() => setServices(prev => prev.filter((_, i) => i !== index))}
                  className="text-red-500 hover:text-red-600"
                >
                  ✕
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceBuilder;
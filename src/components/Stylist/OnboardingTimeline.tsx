import React, { useState } from 'react';
import { motion } from 'framer-motion';

const OnboardingTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "Application",
      description: "Submit your portfolio and professional details",
      duration: "5-10 minutes"
    },
    {
      title: "Review",
      description: "Our team reviews your application",
      duration: "24-48 hours"
    },
    {
      title: "Onboarding",
      description: "Complete platform training and setup",
      duration: "1-2 hours"
    },
    {
      title: "Launch",
      description: "Start accepting clients and growing your business",
      duration: "Immediate"
    }
  ];

  return (
    <div className="p-8">
      <h3 className="text-2xl font-bold mb-8">Your Journey to Success</h3>
      
      <div className="relative">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`relative pl-10 pb-8 border-l-2 ${
              index <= activeStep ? 'border-purple-600' : 'border-gray-200'
            }`}
            onHoverStart={() => setActiveStep(index)}
          >
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-purple-600" />
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h4 className="font-bold text-lg">{step.title}</h4>
              <p className="text-gray-600">{step.description}</p>
              <span className="text-sm text-purple-600 mt-2 block">
                {step.duration}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OnboardingTimeline;
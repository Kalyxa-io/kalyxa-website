import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import HowItWorksSection from '../components/home/HowItWorks';
import EarlyAccessSection from '../components/home/EarlyAccessSection';
import JoinStylistCTA from '../components/home/JoinStylistCTA';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <EarlyAccessSection />
      
    </div>
  );
};

export default Home;
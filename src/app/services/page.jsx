import React from 'react';


import ServicesSection from '../components/features/services/ServicesSection';
import Testimonial from '../components/features/services/Testimonial';
import Features from '../components/features/home/Features';
import HeroServices from '../components/features/services/HeroServices';

const ServicesPage = () => {
  return (
    <main>
      <HeroServices />
      <Features />
      <ServicesSection />
      <Testimonial />
    </main>
  );
};

export default ServicesPage;
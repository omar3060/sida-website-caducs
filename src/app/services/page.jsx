import React from 'react'
import HeroServices from '../components/features/services/HeroServices'
import Features from '../components/features/home/Features'
import ServicesSection from '../components/features/services/ServicesSection'
import Testimonial from '../components/features/services/Testimonial'

const ServicesPage = () => {
  return (
    <main>
      <HeroServices />
      <Features />
      <ServicesSection />
      <Testimonial />
    </main>
  )
}

export default ServicesPage
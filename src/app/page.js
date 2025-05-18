import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Partners from './components/Partners'
import FeaturesTables from './components/FeaturesTables'
import ServicesSlider from './components/ServicesSlider'
import SidaOffers from './components/SidaOffers'
import WhoWeServe from './components/WhoWeServe'
import ImageComparison from './components/ImageComparison'
import DownloadSida from './components/DownloadSida'
import ContactForm from './components/ContactForm'
import PricingSection from './components/PricingSection'

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Partners />
      <FeaturesTables />

      <SidaOffers />
      <WhoWeServe />
      <ServicesSlider />
      <ImageComparison />
      <DownloadSida />
      <ContactForm />
      <PricingSection />
    </div>
  )
}

export default Home

import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Partners from './components/Partners'
import FeaturesTables from './components/FeaturesTables'

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Partners />
      <FeaturesTables />
    </div>
  )
}

export default Home
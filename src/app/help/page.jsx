import React from 'react'
import HeroHelp from '../components/features/help/HeroHelp'
import MostCommon from '../components/features/help/MostCommon'
import AllProducts from '../components/features/help/AllVideos'

export const metadata = {
  title: 'SIDA - Help Center',
  description: 'Get help and support for all SIDA products and services. Find step-by-step guides, tutorials, and answers to common questions.',
}

const Help = () => {
  return (
    <main>
      <HeroHelp />
      <MostCommon />
      <AllProducts />
    </main>
  )
}

export default Help
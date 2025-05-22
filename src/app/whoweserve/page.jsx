import React from 'react'
import WhoWeServe from '../components/features/home/WhoWeServe'
import ServiceLayout from '../components/features/whoweserve/ServiceLayout'

const page = () => {
  return (
    <main className="section-style pt-18 md:pt-26 lg:pt-30">
        <WhoWeServe />
        <ServiceLayout />
    </main>
  )
}

export default page
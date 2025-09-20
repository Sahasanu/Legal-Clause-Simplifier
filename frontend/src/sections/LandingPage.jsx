import React from 'react'
import Herosection from './HeroSection'
import Features from './Features'
import LegalCategories from './LegalCategories'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <div>
        <Herosection/>
        <Features/>
        <LegalCategories/>
        <Footer/>
    </div>
  )
}

export default LandingPage

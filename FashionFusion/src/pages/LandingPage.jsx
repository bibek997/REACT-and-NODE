import React from 'react'
import Navbar from '../components/Navbar'
import Slideshow from '../components/SlideShow'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">OOTD Calendar</h1>
      <Slideshow />
    </div>
    </div>
  )
}
export default LandingPage


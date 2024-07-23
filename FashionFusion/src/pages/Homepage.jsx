import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Slideshow from '../components/SlideShow.jsx'


const Homepage = () => {
  return (
    <div className='min-h-screen'>
    <Navbar/>
    <div className="container mx-auto mt-10">
    <h1 className="text-2xl font-bold text-center mb-6">OOTD Calendar</h1>
    <Slideshow/>
  </div>
  </div>
  )
}

export default Homepage

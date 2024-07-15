import React from 'react'
import Home from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Contact/>
        <Footer/>
        
    </div>
  )
}

export default Homepage

import React from 'react'
import Navbar from '../components/Navbar.jsx'
import HeroSection from '../components/HeroSection.jsx'
import Footer from '../components/Footer.jsx'
import Contact from '../components/Contact.jsx'
import Drawer from '../components/Drawer.jsx'

const Homepage = () => {
  return (
  <>
  <Navbar/>
  <Drawer/>
  <HeroSection/>
  <Contact/>
  <Footer/>
  </>
  )
}

export default Homepage

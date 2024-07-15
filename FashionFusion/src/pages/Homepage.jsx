import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Home from '../components/Home.jsx'
import Thrifts from '../components/Thrifts.jsx'


const Homepage = () => {
  return (
    <div>
       <Navbar/>
       <Home/>
       <Thrifts/>
    </div>
  )
}

export default Homepage

import React from 'react'
import Home from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Timer from '../components/Timer.jsx'
import Card from '../components/Card.jsx'
import Drawer from '../components/Drawer.jsx'
import Pagination from '../components/Pagination.jsx'
import ToggleParent from '../components/Assignment/ToggleParent.jsx'
import CounterParent from '../components/Assignment/CounterParent.jsx'
import MessageParent from '../components/Assignment/MessageParent.jsx'

const Homepage = () => {
  return (
    <div>
        {/* <Navbar/>
        <Home/>
        <Contact/>
        <Footer/>
        <Timer/> 
        <Card/>
        <Drawer/> 
        <Pagination/> */}
     <ToggleParent/>
     <CounterParent/>
     <MessageParent/>

    </div>
  )
}

export default Homepage


// import React, { useState } from 'react';
// import MessageComponent from '../components/MessageComponent.jsx';

// const HomePage = () => {
//   const [showMessage, setShowMessage] = useState(false);

//   const toggleMessage = () => {
//     setShowMessage(!showMessage);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <button
//         onClick={toggleMessage}
//         className="bg-blue-500 text-white px-4 py-2 rounded shadow"
//       >
//         Login
//       </button>
//       {showMessage && <MessageComponent onClose={toggleMessage} />}
//     </div>
//   );
// };

// export default HomePage;




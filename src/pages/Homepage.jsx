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
import Image from '../assets/bibek.jpg'

const Homepage = () => {
  const cards = [
    {
      name: "Bibek Burja Magar",
      rollno: "2306112110",
    },
    {
      name: "Ram Udgar yadav",
      rollno: "2306112110",
    },
    {
      name: "Santosh LhoTamang",
      rollno: "2306112110",
    },
    {
      name: "Pramit Pande",
      rollno: "2306112110",
    },
  ];

  return (
    <div className="flex min-h-screen items-center p-4 bg-gray-100">
      <div className="grid p-4 gap-4 grid-cols-4">
        {cards.map((book, index) => {
          return (
            <Card
              key={index} 
              img={Image}
              name={book.name} 
              rollno={book.rollno}
            />
          );
        })}
      </div>
    </div>
  )
}
export default Homepage


// import ShopComponent from '../components/ShopComponent.jsx'
// import FunctionalProps from '../components/FunctionalProps.jsx'
// import ComA from '../components/ComA.jsx'

// const Homepage = () => {
//   return (
//     <div>
//       <ShopComponent/>
//       <FunctionalProps/>
//       <ComA/>
//     </div>
//   )
// }

// export default Homepage

import React from 'react'
import CardComponent from '../components/CardComponent.jsx'
import Image from '../assets/bibek.jpg'

const card = () => {
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
            <CardComponent
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
export default Card


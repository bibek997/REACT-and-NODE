import React, { useState } from 'react';
import './css/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-red-600 p-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Title */}
        <div className="flex-shrink-0">
          <a href="#home" className="text-white text-3xl font-medium">PCPS College</a>
        </div>
        {/* Title End */}

        {/* Menu Item */}
        <div className="hidden md:flex space-x-10">
          <a
            href="#home"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-red-900 hover:text-white"
          >Home</a>
          <a
            href="#product"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-red-900 hover:text-white"
          >About</a>
          <a
            href="#review"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-red-900 hover:text-white"
          >Services</a>
          <a
            href="#contact"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-red-900 hover:text-white"
          >Contact</a>
        </div>
        {/* Menu Item End */}

        {/* Login and Register */}
        <div className="hidden md:block">
          <div className="ml-4 flex items-center space-x-4 md:ml-6">
            <button
              className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-6 border border-gray-600 rounded-lg"
            >
              Login
            </button>
            <button
              className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-6 border border-gray-600 rounded-lg"
            >
              Register
            </button>
          </div>
        </div>
        {/* Login and Register End */}

        {/* Toggle logo */}
        <div className="md:hidden">
          <button id="menu-button" className="text-white focus:outline-none" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        {/* Toggle logo end */}
      </div>
      {/* Toggle Item */}
      <div id="menu" className={`md:hidden flex flex-col space-y-4 mt-4 ${isOpen ? 'block' : 'hidden'}`}>
        <a href="#home" className="text-white">Home</a>
        <a href="#product" className="text-white">Product</a>
        <a href="#review" className="text-white">Review</a>
        <a href="#contact" className="text-white">Contact</a>
      </div>
      {/* Toggle logo End*/}
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="p-2 bg-gray-800 text-white rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Open'} Drawer
      </button>
      <div
        className={`fixed top-0 left-0 h-full bg-gray-200 w-64 p-4 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          className="p-2 bg-gray-800 text-white rounded-md mb-4"
          onClick={() => setIsOpen(false)}
        >
          Close
        </button>
        <ul>
          <li className="py-2"><a href="#">All</a></li>
          <li className="py-2"><a href="#">Science</a></li>
          <li className="py-2"><a href="#">Fiction</a></li>
          <li className="py-2"><a href="#">Non-Fiction</a></li>
          <li className="py-2"><a href="#">Fantasy</a></li>
          <li className="py-2"><a href="#">Mystery</a></li>
          <li className="py-2"><a href="#">Romance</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;

import React from 'react';
import CalenderImage from '../assets/calander.png';

const WeekCardComponent = ({ day, date }) => {
  return (
    <div className='min-h-screen'>
    <div className="flex items-center bg-gray-100 rounded-lg shadow-lg p-5">
      {/* Left Side */}
      <div className="flex flex-col items-start mx-5">
        <div className="text-gray-700 font-medium">{day}</div>
        <div className="text-gray-500">{date}</div>
      </div>
      {/* Right Side */}
      <div className="flex-grow flex justify-end">
        <img src={CalenderImage} alt="Calender logo" className="h-11 cursor-pointer" />
      </div>
    </div>
    </div>
    
  );
};

export default WeekCardComponent;

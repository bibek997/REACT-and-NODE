import React from 'react';
import CalenderImage from '../assets/calander.png';

const WeekCardComponent = ({ day, date }) => {
  return (
      <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg shadow-lg p-5 mx-5 w-full max-w-md">
        {/* Left Side */}
        <div className="flex flex-col items-start mb-4 md:mb-0 md:mr-4">
          <div className="text-gray-700 font-medium text-lg">{day}</div>
          <div className="text-gray-500 text-sm">{date}</div>
        </div>
        {/* Right Side */}
        <div className="flex-grow flex justify-end">
          <img src={CalenderImage} alt="Calender logo" className="h-11 cursor-pointer" />
        </div>
      </div>
  );
};

export default WeekCardComponent;

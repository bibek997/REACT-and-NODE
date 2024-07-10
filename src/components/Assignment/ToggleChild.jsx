import React from 'react';

const ToggleChild = ({ isOn, toggleState }) => {
  return (
    <div className="flex flex-col items-center">
      <p className={`text-2xl ${isOn ? 'text-blue-500' : 'text-red-500'}`}>
        The switch is {isOn ? 'ON' : 'OFF'}
      </p>
      <button 
        onClick={toggleState} 
        className="mt-4 px-4 py-2 bg-red-700 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none"
      >
        Toggle from Child
      </button>
    </div>
  );
};

export default ToggleChild;

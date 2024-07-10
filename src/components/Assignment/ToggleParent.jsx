import React, { useState } from 'react';
import ToggleChild from '../Assignment/ToggleChild.jsx';

const ToggleParent = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleState = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button 
        onClick={toggleState} 
        className="mb-4 px-4 py-2 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
      >
        Toggle
      </button>
      <ToggleChild isOn={isOn} toggleState={toggleState} />
    </div>
  );
};

export default ToggleParent;

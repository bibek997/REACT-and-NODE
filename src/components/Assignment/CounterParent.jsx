import React, { useState } from 'react';
import CounterChild from '../Assignment/CounterChild.jsx';

const CounterParent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="mb-4">
        <button 
          onClick={increment} 
          className="px-4 py-2 mx-2 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
        >
          Increment
        </button>
        <button 
          onClick={decrement} 
          className="px-4 py-2 mx-2 bg-red-700 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none"
        >
          Decrement
        </button>
      </div>
      <CounterChild count={count} increment={increment} decrement={decrement} />
    </div>
  );
};

export default CounterParent;

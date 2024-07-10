import React from 'react';

const CounterChild = ({ count, increment, decrement }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl mb-4">Current Count: {count}</p>
      <div>
        <button 
          onClick={increment} 
          className="px-4 py-2 mx-2 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
        >
          Increment from Child
        </button>
        <button 
          onClick={decrement} 
          className="px-4 py-2 mx-2 bg-red-700 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none"
        >
          Decrement from Child
        </button>
      </div>
    </div>
  );
};

export default CounterChild;

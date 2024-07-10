import React from 'react';

const MessageChild = ({ message, updateMessage }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl mb-4">Current Message: {message}</p>
      <button 
        onClick={updateMessage} 
        className="px-4 py-2 bg-red-700 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none"
      >
        Update Message from Child
      </button>
    </div>
  );
};

export default MessageChild;

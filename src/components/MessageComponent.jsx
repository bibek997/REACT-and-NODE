
import React from 'react';

const MessageComponent = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-96">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Login Successful</h2>
          <p className="text-gray-700 mb-4">Welcome to PCPS Library</p>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded shadow"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;

import React from "react";

const MessageComponent = ({ onClose, message, title }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-96">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
          <p className="text-gray-700 mb-4">{message}</p>
          <button
            className="bg-black text-white px-4 py-2 rounded shadow"
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

import React, { useState } from 'react';
import MessageChild from '../Assignment/MessageChild.jsx';

const MessageParent = () => {
  const [message, setMessage] = useState('Yohohohohohoho');

  const updateMessage = () => {
    setMessage('Message Updated');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button 
        onClick={updateMessage} 
        className="mb-4 px-4 py-2 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
      >
        Update Message
      </button>
      <MessageChild message={message} updateMessage={updateMessage} />
    </div>
  );
};

export default MessageParent;

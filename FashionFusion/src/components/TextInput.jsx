import React from 'react';

const TextInput = ({ label, type, placeholder }) => {
  return (
    <div className="mb-5">
      <label className="block text-white text-sm">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder} 
        className="w-full my-2 px-4 py-2 border border-gray-300 rounded-lg text-sm bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500" 
      />
    </div>
  );
}

export default TextInput;

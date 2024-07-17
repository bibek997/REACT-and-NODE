import React, { useState } from 'react';

const Step1 = ({ onNext, onDataChange }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) {
      newErrors.email = "Email is required";
    }
    else if  (!email.includes('@gmail.com')){
      newErrors.email = 'Email must be a valid @gmail.com address';
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onDataChange('personalInfo', { name, email });
      onNext();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="border p-2 w-full mb-2 rounded bg-white text-black"
      />
      {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2 w-full mb-2 rounded bg-white text-black"
      />
      {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
      <button onClick={handleNext} className="bg-blue-500 text-white py-2 px-4 rounded mt-4 w-full">
        Next
      </button>
    </div>
  );
};

export default Step1;

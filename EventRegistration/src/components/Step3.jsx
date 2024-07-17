import React, { useState } from 'react';

const Step3 = ({ onNext, onPrev, onDataChange }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const newErrors = {};
    if (!cardNumber) {
      newErrors.cardNumber = 'Card number is required';
    } else if (!/^\d+$/.test(cardNumber)) {
      newErrors.cardNumber = 'Card number must be numeric';
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onDataChange('paymentInfo', { cardNumber });
      onNext();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Payment Information</h2>
      <input
        type="text"
        value={cardNumber}w
        onChange={(e) => setCardNumber(e.target.value)}
        placeholder="Card Number"
        className="border p-2 w-full mb-2 rounded bg-white text-black"
      />
      {errors.cardNumber && <span className="text-red-500 text-sm">{errors.cardNumber}</span>}
      <div className="flex justify-between mt-4">
        <button onClick={onPrev} className="bg-gray-300 text-gray-700 py-2 px-4 rounded">
          Previous
        </button>
        <button onClick={handleNext} className="bg-blue-500 text-white py-2 px-4 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3;

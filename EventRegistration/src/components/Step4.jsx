import React from 'react';

const Step4 = ({ formData, onPrev }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Confirmation</h2>
      <p className="mb-2 text-gray-500"><strong>Name:</strong> {formData.personalInfo.name}</p>
      <p className="mb-2 text-gray-500"><strong>Email:</strong> {formData.personalInfo.email}</p>
      <p className="mb-2 text-gray-500"><strong>Event:</strong> {formData.eventSelection.event}</p>
      <p className="mb-2 text-gray-500"><strong>Card Number:</strong> {formData.paymentInfo.cardNumber}</p>
      <div className="flex justify-between mt-4">
        <button onClick={onPrev} className="bg-gray-300 text-gray-700 py-2 px-4 rounded">
          Previous
        </button>
        <button onClick={() => alert('Registration Complete!')} className="bg-green-500 text-white py-2 px-4 rounded">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Step4;

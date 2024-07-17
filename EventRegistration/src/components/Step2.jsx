import React, { useState } from 'react';

const Step2 = ({ onNext, onPrev, onDataChange }) => {
  const [event, setEvent] = useState('');
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const newErrors = {};
    if (!event) newErrors.event = 'Event selection is required';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onDataChange('eventSelection', { event });
      onNext();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Event Selection</h2>
      <select value={event} onChange={(e) => setEvent(e.target.value)} className="border p-2 w-full mb-2 rounded bg-white text-black">
        <option value="">Select Event</option>
        <option value="event1">Event 1</option>
        <option value="event2">Event 2</option>
      </select>
      {errors.event && <span className="text-red-500 text-sm">{errors.event}</span>}
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

export default Step2;

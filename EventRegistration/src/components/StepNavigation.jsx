import React from 'react';

const StepNavigation = ({ currentStep }) => {
  return (
    <div className="flex justify-between mb-6">
      <span className={`step ${currentStep === 1 ? 'text-blue-900 font-bold' : 'text-gray-600'}`}>Step 1</span>
      <span className={`step ${currentStep === 2 ? 'text-blue-900 font-bold' : 'text-gray-600'}`}>Step 2</span>
      <span className={`step ${currentStep === 3 ? 'text-blue-900 font-bold' : 'text-gray-600'}`}>Step 3</span>
      <span className={`step ${currentStep === 4 ? 'text-blue-900 font-bold' : 'text-gray-600'}`}>Step 4</span>
    </div>
  );
};

export default StepNavigation;

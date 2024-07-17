import React, { useState } from 'react';
import StepNavigation from './components/StepNavigation';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {},
    eventSelection: {},
    paymentInfo: {},
  });

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleDataChange = (step, data) => {
    setFormData((prevData) => ({ ...prevData, [step]: data }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <StepNavigation currentStep={currentStep} />
        {currentStep === 1 && <Step1 onNext={handleNextStep} onDataChange={handleDataChange} />}
        {currentStep === 2 && <Step2 onNext={handleNextStep} onPrev={handlePreviousStep} onDataChange={handleDataChange} />}
        {currentStep === 3 && <Step3 onNext={handleNextStep} onPrev={handlePreviousStep} onDataChange={handleDataChange} />}
        {currentStep === 4 && <Step4 formData={formData} onPrev={handlePreviousStep} />}
      </div>
    </div>
  );
}

export default App;

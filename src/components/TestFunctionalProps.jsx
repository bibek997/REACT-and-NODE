import React from 'react';

const TestFunctionalProps = ({ onButtonClick }) => {
  return (
    <>
      <div className='mx-20'>TestFunctionalProps</div>
      <button
        onClick={onButtonClick}
        className="bg-blue-700 text-white font-medium py-2 px-4 mx-20 rounded-lg"
      >
        Test Functional
      </button>
    </>
  );
};

export default TestFunctionalProps;

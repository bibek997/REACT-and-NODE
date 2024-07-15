import React from 'react';
import TestFunctionalProps from '../components/TestFunctionalProps.jsx';

const FunctionalProps = () => {
  const HandleClick = () => {
    alert("Function is passed as props");
  };

  return (
    <>
      <div>Functional Props</div>
      <TestFunctionalProps onButtonClick={HandleClick} />
    </>
  );
};

export default FunctionalProps;

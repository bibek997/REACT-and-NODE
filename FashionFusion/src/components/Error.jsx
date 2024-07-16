import React from "react";

const ErrorMessage = (props) => {
  return (
    <>
      <p className="text-md text-red-500">{props.message}</p>
    </>
  );
};

export default ErrorMessage;

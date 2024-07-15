import React from 'react';

const CardComponent = ({ image, productName, sellername, price, condition }) => {
  return (
    <div className="bg-white border border-gray-200 max-w-sm mx-auto rounded overflow-hidden shadow-lg cursor-pointer">
      <div className="flex justify-center items-center">
        <img className="w-full h-auto" src={image} alt={productName} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{productName}</div>
        {/* <p className="text-gray-700 text-base mb-2">{sellername}</p> */}
        {condition && <div className="text-gray-900 mb-2">Condition:{condition}</div>}
        <span className="text-gray-900 font-bold text-xl">${price}</span>
      </div>
    </div>
  );
};

export default CardComponent;

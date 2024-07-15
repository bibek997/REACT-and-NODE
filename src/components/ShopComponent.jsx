import React from "react";  
  const ShopComponent = () => {
    const HandleClick = () => {
      alert("Yhohohohohoho");
    }
  
    return (
      <>
        <button
          className="bg-blue-700 text-white font-medium py-2 px-4 rounded mr-2 uppercase hover:bg-blue-900"
          onClick={HandleClick}
        >
          Button
        </button>
      </>
    );
  }
  
  export default ShopComponent;
  

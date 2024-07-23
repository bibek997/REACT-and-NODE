import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx'

const Product = () => {
  const [username, setUsername] = useState('');

  return (
    <>
      <Navbar />
      <div className='text-center bg-blue-500 text-white text-lg px-5 py-2'>
        Add Product:
      </div>
      <h1 className='text-center text-2xl mt-4'>{username}</h1>
      <form className='m-4'>
        <label className='text-lg' htmlFor="username">
          UserName:
        </label>
        <input
          id="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          className='border-2 border-gray-200 rounded w-40 p-1'
        />
      </form>
    </>
  );
}

export default Product;

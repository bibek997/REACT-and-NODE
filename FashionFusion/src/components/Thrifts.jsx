import React from 'react';
import Image from '../assets/shirt.png'
import Image2 from '../assets/jacket.png'
import CardComponent from './CardComponent.jsx';


const products = [
  {
    image: Image,
    productName: 'Huba Shirt',
    sellername: 'Bibek Magar',
    condition: '4/5',
    price: '95.50',
  },
  {
    image: Image,
    productName: 'Huba Shirt',
    sellername: 'Bibek Magar',
    condition: '4/5',
    price: '95.50',
  },
  {
    image: Image,
    productName: 'Huba Shirt',
    sellername: 'Bibek Magar',
    condition: '4/5',
    price: '95.50',
  },
  {
    image: Image,
    productName: 'Huba Shirt',
    sellername: 'Bibek Magar',
    condition: '4/5',
    price: '95.50',
  },
  {
    image: Image2,
    productName: 'Brown Leather Jacket',
    sellername: 'Lady gaga',
    condition: '4/5',
    price: '95.50',
  },
  {
    image: Image2,
    productName: 'Brown Leather Jacket',
    sellername: 'Lady gaga',
    condition: '4/5',
    price: '95.50',
  },
  {
    image: Image2,
    productName: 'Brown Leather Jacket',
    sellername: 'Lady gaga',
    condition: '4/5',
    price: '95.50',
  },
  {
    image: Image2,
    productName: 'Brown Leather Jacket',
    sellername: 'Lady gaga',
    condition: '4/5',
    price: '95.50',
  },

 
  // Add more product objects as needed
];

const Thrifts = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">New Thrifts</h1>
      <p className="text-center mb-8">
        We're excited to announce that our new thrift items are here! Discover fresh and unique pieces at great prices. Don’t miss out on the latest finds. Check them out now!
      </p>
      <h1 className="text-3xl font-bold text-center mb-8">Browse by Categories</h1>
      <div className="flex justify-center mb-8">
        <button className="bg-black px-4 text-white py-2 mx-2 rounded">Men's Fashion</button>
        <button className="bg-gray-200 px-4 py-2 mx-2 rounded">Women's Fashion</button>
        <button className="bg-gray-200 px-4 py-2 mx-2 rounded">Women Accessories</button>
        <button className="bg-gray-200 px-4 py-2 mx-2 rounded">Men Accessories</button>
        <button className="bg-gray-200 px-4 py-2 mx-2 rounded">Discount Deals</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => ( 
          <CardComponent key={index} {...product} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-black text-white px-6 py-3 rounded">View More</button>
      </div>
    </div>
  );
};

export default Thrifts;

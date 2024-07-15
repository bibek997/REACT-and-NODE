import React from "react";
import Image from '../assets/bibek.jpg'
export default function Card({ img, name, rollno }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
      <div className="flex justify-center items-center">
        <img
          src={Image}
          alt="Profile"
          className="h-80 w-96 object-cover px-10 mt-6"
        />
      </div>
      <div className="p-4 text-center">
        <p className="font-semibold text-xl text-gray-800">{name}</p>
        <p className="text-gray-500">{rollno}</p>
      </div>
    </div>
  );
}

// import React from "react";

// const Card = () => {
//   const beautyProduct = [
//     {
//       imgUrl:
//         "https://plus.unsplash.com/premium_photo-1680012589533-9ba597be37b1?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "The Coldest Sunset",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
//     },
//     {
//       imgUrl:
//         "https://plus.unsplash.com/premium_photo-1705554519595-c1143c7fef97?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "The Coolest Dress",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
//     },
//     {
//       imgUrl:
//         "https://plus.unsplash.com/premium_photo-1680012589533-9ba597be37b1?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "The Coldest Sunset",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
//     },
//     {
//       imgUrl:
//         "https://plus.unsplash.com/premium_photo-1705554519595-c1143c7fef97?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "The Coolest Dress",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
//     },
     
//   ];

//   return (
//     <>
//       <div className="flex flex-wrap justify-around items-center my-2">
//         {beautyProduct.map((product, index) => {
//           return (
//             <div className="max-w-sm rounded-lg  overflow-hidden shadow-lg">
//               <img
//                 className="w-full h-64 object-cover p-5 bg-cover rounded "
//                 src={product.imgUrl}
//                 alt="fashion beauty"
//               />
//               <div className="px-6 py-4">
//                 <div className="font-bold text-xl mb-2"> {product.title}</div>
//                 <p className="text-gray-700 text-base">{product.description}</p>
//               </div>
//               <div className="px-6 py-4 text-left">
//                 <button className="bg-black text-white px-5 py-2 text-center">
//                   Learn more..
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Card;
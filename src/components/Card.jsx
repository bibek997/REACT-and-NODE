import React from "react";

export default function Card({ img, name, author }) {
  return (<>
  <div className="border rounded-md w-full">
      <div className="flex justify-center items-center">
        <img
          src={img}
          alt="img"
          className="h-72 w-52 mt-3 border object-cover"
        />
      </div>
      <div className="p-4 mt-3 w-full">
        <div className="w-full justify-center items-center">
          <p className="font-medium text-lg">{name}</p>
          <p className="font-bold text-lg">{author}</p>
        </div>
      </div>
    </div>
  </>
    
  );
}

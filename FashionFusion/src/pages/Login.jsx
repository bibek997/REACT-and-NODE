import React, { useState } from "react";
import EmailPassword from "../components/EmailPassword.jsx";
import MessageComponent from "../components/MessageComponent.jsx";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar.jsx'
import Image from '../assets/home.jpg'

const ParentComponent = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  return ( 
    <div className=""> 
    <Navbar/>
    <div className="flex justify-center h-[480px]">
    <div className="w-4/5">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
    <div className="my-8">
    <h1 className="text-2xl font-bold my-5">Login</h1>
    <EmailPassword
      values={values}
      setValues={setValues}
      errors={errors}
      setErrors={setErrors}
    />
    {/* Email password form end */}
    <Link to={"/home"}>
    <button
    className="my-4 md:mx-4 border rounded-lg py-2 px-16 md:px-24 bg-black text-white"
    >
    Login
    </button>
    </Link>
    
    {/* signup button */}
    <Link to={"/home"}>
      <button className="my-4 md:mx-4 border rounded-lg py-2 px-16 md:px-24 bg-black text-white">
         Sign Up
       </button>
    </Link>
    
      </div>
      <img
              src={Image}
              alt="library"
              className="hidden md:block rounded-lg w-[1000px] h-[400px] object-cover"
            />
      </div>
    </div>
    </div>
  </div>
  );
};

export default ParentComponent;

import React, { useState } from "react";
import NavbarItem from "./NavbarItem.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <div className="flex justify-center items-center sticky top-0 bg-white py-4 shadow z-50">
      <div className="container flex justify-between items-center mx-7">
        <Link to="/" className="text-lg font-bold text-black">
          FashionFusion
        </Link>
        <div className="md:hidden" onClick={handleClick}>
          <i className={`fas ${click ? "fa-times" : "fa-bars"} text-2xl cursor-pointer`} />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <NavbarItem click={click} closeMobileMenu={closeMobileMenu} />
        </div>
      </div>
      <div className={`${click ? "block" : "hidden"} md:hidden absolute top-16 left-0 w-full bg-white`}>
        <NavbarItem click={click} closeMobileMenu={closeMobileMenu} />
      </div>
    </div>
  );
};

export default Navbar;

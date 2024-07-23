import React from "react";
import { Link } from "react-router-dom";

const NavbarItem = ({ click, closeMobileMenu }) => {
  return (
    <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8 md:ml-auto">
      <li className="nav-item">
        <Link to="/" className="nav-links text-black hover:text-gray-500 py-2 md:py-0" onClick={closeMobileMenu}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/wardrobe" className="nav-links text-black hover:text-gray-500 py-2 md:py-0" onClick={closeMobileMenu}>
          Wardrobe
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/outfits" className="nav-links text-black hover:text-gray-500 py-2 md:py-0" onClick={closeMobileMenu}>
          Outfits
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/wishlist" className="nav-links text-black hover:text-gray-500 py-2 md:py-0" onClick={closeMobileMenu}>
        Wishlist
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/profile" className="nav-links text-black hover:text-gray-500 py-2 md:py-0" onClick={closeMobileMenu}>
        <img src="src/assets/profileicon.png" alt="Profile Icon" className="h-7" />
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link to="/product" className="nav-links text-black hover:text-gray-500 py-2 md:py-0" onClick={closeMobileMenu}>
          Product
        </Link>
      </li> */}
    </ul>
  );
};

export default NavbarItem;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-black fixed w-full top-0 shadow-lg">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        <div className="w-1/2">
          <Link to="/">
            {/* <img src="logo.svg" alt="logo" className="w-16" /> */}
            <h1 className="w-full text-3xl font-bold text-black">LOGO</h1>
          </Link>
        </div>
        <div className="w-1/2 block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-black hover:text-black hover:border-black"
          >
            {isOpen ? (
              <AiOutlineClose className="w-6 h-6 text-black" />
            ) : (
              <AiOutlineMenu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
        <div
          className={`w-full lg:w-auto ${
            isOpen ? "block" : "hidden"
          } lg:block lg:items-center lg:justify-end`}
        >
          <Link
            to="/services"
            className={`block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-4 ${
              location.pathname === "/services" ? "font-bold text-black" : ""
            }`}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={`block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-4 ${
              location.pathname === "/about" ? "font-bold text-black" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black ${
              location.pathname === "/contact" ? "font-bold text-black" : ""
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

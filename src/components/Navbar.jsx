import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-300 py-1 shadow-md">
      <div className="flex justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] p-1 items-center flex-wrap w-full">
        <div className="w-[4rem] cursor-pointer rounded-full text-4xl">
          <Link to="/">
            <img src="/logo.png" alt="logo" className="rounded-full text-4xl" />
          </Link>
        </div>

        {/* {open ? (
        <FiMenu className='lg:hidden block h-6 w-6 cursor-pointer' onClick={() => setOpen(!open)} /> ) : (
          <GrClose />
        )
      } */}

        <div
          className="lg:hidden block text-2xl cursor-pointer transition-colors duration-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <GrClose /> : <FiMenu />}
        </div>

        <nav
          className={`${
            open ? "block" : "hidden"
          } lg:flex lg:items-center lg:w-auto w-full transition-all duration-800`}
        >
          <ul className="text-lg text-gray-600 lg:flex lg:justify-between">
            <li className="lg:px-5 py-2 block text-center hover:text-yellow-700 font-semibold">
              <NavLink to="/" className="pb-1" onClick={() => setOpen(!open)}>
                Home
              </NavLink>
            </li>
            <li className="lg:px-5 py-2 block text-center hover:text-yellow-700 font-semibold">
              <NavLink
                to="/about"
                className="pb-1"
                onClick={() => setOpen(!open)}
              >
                About Us
              </NavLink>
            </li>
            {/* <li className="lg:px-5 py-2 block text-center hover:text-yellow-700 font-semibold">
              <NavLink
                to="/glossary"
                className="pb-1"
                onClick={() => setOpen(!open)}
              >
                Glossary
              </NavLink>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

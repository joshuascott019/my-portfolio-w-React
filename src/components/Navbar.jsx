import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'font-Montserrat text-sm p-2 mx-2 md:text-1xl md:mx-4 md:p-3 xl:py-2 xl:px-4 xl:m-8 xl:text-3xl rounded-lg bg-blue-600 text-white shadow-md'
      : 'font-Montserrat text-sm p-2 mx-2 md:text-1xl md:mx-4 md:p-3 xl:py-2 xl:px-4 xl:m-8 xl:text-3xl hover:text-blue-600 transition-all duration-300';

  return (
    <div className="flex justify-between items-center w-full m-auto p-6 xl:px-12 sticky top-0 bg-gray-950 shadow-lg shadow-blue-800 z-10">
      <h1 className="font-Montserrat w-min text-blue-300 text-2xl md:text-4xl xl:text-6xl font-bold tracking-tighter leading-none">
        JOSHUA SCOTT
      </h1>
      <div className="flex space-x-2 md:space-x-4 xl:space-x-8">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/portfolio" className={linkClass}>
          Portfolio
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

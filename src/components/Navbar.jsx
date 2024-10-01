import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'font-Montserrat text-sm p-2 mx-2 md:text-2xl md:mx-4 md:p-3 xl:py-2 xl:px-4 xl:m-8 xl:text-3xl rounded-lg bg-blue-600'
      : 'font-Montserrat text-sm p-2 mx-2 md:text-2xl md:mx-4 md:p-3 xl:py-2 xl:px-4 xl:m-8 xl:text-3xl hover:text-blue-600';

  return (
    <div className="flex justify-between items-center w-11/12 xl:w-4/5 m-auto p-2 xl:p-12">
      <h1 className="font-Montserrat w-min text-blue-300 text-2xl md:text-4xl xl:text-6xl font-bold tracking-tighter">
        JOSHUA SCOTT
      </h1>
      <div>
        <div>
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/portfolio" className={linkClass}>
            Portfolio
          </NavLink>
          {/* <NavLink to="/" className={linkClass}>
            Contact
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

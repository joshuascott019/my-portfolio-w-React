import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'font-Montserrat py-2 px-4 m-8 text-3xl rounded-lg bg-blue-600'
      : 'font-Montserrat py-2 px-4 m-8 text-3xl hover:text-blue-600';

  return (
    <div className="flex justify-between items-center w-4/5 m-auto p-12">
      <h1 className="font-Montserrat w-min text-blue-300 text-6xl font-bold tracking-tighter">
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

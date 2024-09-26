import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-3/4 m-auto p-6">
      <h1 className="w-min text-blue-300 text-6xl font-bold tracking-tighter">
        JOSHUA SCOTT
      </h1>
      <div>
        <div>
          <NavLink to="/" className="m-8 text-3xl">
            About
          </NavLink>
          <NavLink to="/portfolio" className="m-8 text-3xl">
            Portfolio
          </NavLink>
          <NavLink to="/" className="m-8 text-3xl">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

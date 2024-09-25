import React from 'react';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-3/4 m-auto p-6">
      <h1 className="w-min text-blue-300 text-6xl font-bold tracking-tighter">
        JOSHUA SCOTT
      </h1>
      <div>
        <div>
          <button className="m-8 text-3xl">About</button>
          <button className="m-8 text-3xl">Portfolio</button>
          <button className="m-8 text-3xl">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

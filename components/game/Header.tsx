import React, { useState } from "react";

const Header: React.FC = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal p-6 bg-red-300">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <img className='m-1 w-10 h-8' src='/images/LOGO.png'/>
          <span className="font-semibold text-xl tracking-tight">Curious Jeager</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
            <svg
              className="h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;

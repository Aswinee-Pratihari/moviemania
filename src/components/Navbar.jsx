import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import GenreList from "./GenreList";
const Navbar = () => {
  const [menuOpen, SetMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 z-30 glassmorph w-full">
      <div className=" flex  items-center justify-between bg-dark-2 px-6 py-3 container mx-auto ">
        <Link to="/" className="left flex gap-5 items-center">
          <img src={logo} alt="" className="w-16" />
          <h1 className="text-2xl font-bold max-sm:hidden">MOVIEMANIA</h1>
        </Link>
        {/* <div className="right w-[300px] flex bg-white px-4 py-2 rounded-lg">
          <input
            type="text"
            placeholder="Search for your favourite movie"
            className="w-full bg-white text-black"
          />
        </div> */}

        <div className="flex items-center space-x-6 max-md:hidden">
          <Link to="/" className="bg-red-700 px-3 py-2 rounded-lg">
            Home
          </Link>
          <Link to="/movies" className="bg-red-700 px-3 py-2 rounded-lg">
            Movie
          </Link>
        </div>
        <GenreList />

        <div
          className="relative inline-block text-left mr-4  md:hidden"
          onClick={() => {
            SetMenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? (
            <XMarkIcon className="w-7 h-7 block" />
          ) : (
            <Bars3Icon className="w-7 h-7 " />
          )}
          {menuOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <Link
                  to="/"
                  className="block px-4 py-2 text-xl text-white hover:text-gray-900 "
                  role="menuitem"
                >
                  Home
                </Link>
                <Link
                  to="/movies"
                  className="block px-4 py-2 text-xl text-white "
                >
                  Movies
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

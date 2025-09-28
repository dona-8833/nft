import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div
        className="flex relative justify-between items-center p-4 "
        data-theme="skibidinova"
      >
        <div>
          <img src="/nav.png" className="h-[42px]" />
        </div>
        <label className="relative hidden  overflow-hidden z-10 md:block w-full max-w-md rounded-2xl border border-primary">
          <input
            type="text"
            placeholder="Search for Collections, Creator, Wallet and more..."
            className="w-full p-3 pr-14 text-white bg-transparent focus:ring-0 focus:outline-none"
          />
          <button
            type="button"
            className="absolute -right-5 rounded-full top-1/2 -translate-y-1/2 bg-secondary py-5 px-6"
          >
            <FaSearch className="text-2xl" />
          </button>
        </label>
        <div className="md:flex items-center gap-6 hidden  rounded-full px-6 py-3 text-gray-300 ">
          <Link to = "/collections" className="hover:text-primary text-md font-medium">
            Collections
          </Link>
          <Link to="/launchpad" className="hover:text-primary text-md font-medium">
            LaunchPad
          </Link>
          <a href="#" className="hover:text-primary text-md font-medium">
            Listing
          </a>
        </div>

        <div>
          <button className="btn btn-primary">connect wallet</button>
        </div>
      </div>

      <div className="flex items-center gap-6 md:hidden justify-center rounded-full px-6 py-2 text-gray-300 ">
        <Link to="/collections" className="hover:text-primary text-md font-medium">
          Collections
        </Link>
        <Link to="/launchpad" className="hover:text-primary text-md font-medium">
          LaunchPad
        </Link>
        <a href="#" className="hover:text-primary text-md font-medium">
          Listing
        </a>
      </div>
    </div>
  );
}

export default Nav;

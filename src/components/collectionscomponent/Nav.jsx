import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>

    <div
      className="flex relative justify-between p-4 "
      data-theme="skibidinova"
      >
      <div>
        <img src="/nav.png" className="h-[42px]" />
      </div>
        <div className="md:flex items-center gap-6 space-x-6 hidden   rounded-full px-6 py-3 text-white">
          <Link to="/" className="hover:text-primary text-md text-gray-200 font-medium">
            Home
          </Link>
          <a href="#" className="hover:text-primary text-md text-gray-200 font-medium">
            Collection
          </a>
          <a href="#" className="hover:text-primary text-md text-gray-200 font-medium">
            LaunchPad
          </a>
          <a href="#" className="hover:text-primary text-md text-gray-200 font-medium">
            Listing
          </a>
      </div>



      <div>
        <button className="btn btn-primary">connect wallet</button>
      </div>
    </div>
        <div className="flex items-center gap-6 md:hidden space-x-6 mx-auto justify-center rounded-full px-6 py-3 text-white">
          <Link to="/" className="hover:text-primary text-md font-medium">
            Home
          </Link>
          <a href="#" className="hover:text-primary text-md font-medium">
            Collection
          </a>
          <a href="#" className="hover:text-primary text-md font-medium">
            LaunchPad
          </a>
          <a href="#" className="hover:text-primary text-md font-medium">
            Listing
          </a>
        </div>
      </nav>
  );
}

export default Nav;

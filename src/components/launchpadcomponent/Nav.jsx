import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

function Nav() {
      const [isOpen, setIsOpen] = useState(false);


  return (
    <nav>

    <div
      className="flex relative justify-between p-4 "
      data-theme="Nft"
      >
      <div>
        <img src="/nav.png" className="h-[42px]" />
      </div>
        <div className="md:flex items-center gap-6 space-x-6 hidden   rounded-full px-6 py-3 text-white">
          <Link to="/" className="hover:text-primary text-md text-gray-200 font-medium">
            Home
          </Link>
          <Link to="/collections" className="hover:text-primary text-md text-gray-200 font-medium">
            Collection
          </Link>
          <a href="#" className="hover:text-primary text-md text-gray-200 font-medium">
            LaunchPad
          </a>
          <a href="#" className="hover:text-primary text-md text-gray-200 font-medium">
            Listing
          </a>
      </div>


        <div className="hidden md:block">
          <button className="btn btn-primary">connect wallet</button>
        </div>
        <div className="md:hidden text-3xl text-white">
          <RxHamburgerMenu onClick={() => setIsOpen(!isOpen)}/>
        </div>
    </div>
    {isOpen &&(  
            <div className="flex absolute right-0 bg-base-100 transition-all duration-300 ease-in-out top-15  z-20 items-center flex-col gap-6 md:hidden justify-center rounded-2xl px-6 py-4 text-gray-300 ">
        <Link to="/collections" className="hover:text-primary text-md font-medium">
          Collections
        </Link>
        <Link to="/launchpad" className="hover:text-primary text-md font-medium">
          LaunchPad
        </Link>
        <a href="#" className="hover:text-primary text-md font-medium">
          Listing
        </a>
                <div className="">
          <button className="btn btn-primary">connect wallet</button>
        </div>
      </div>
    )}      
</nav>
  );
}

export default Nav;

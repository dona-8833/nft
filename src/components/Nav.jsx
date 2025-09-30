import React, { useState } from "react";
import Layout from "./Layout";
import { RxHamburgerMenu } from "react-icons/rx";

function Nav() {
      const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div
      className="flex relative justify-between p-4 "
      data-theme="NFT"
    >
      <div>
        <img src="/nav.png" className="h-[42px]" />
      </div>
      <div className="p-[2px] hidden  rounded-full bg-gradient-to-r from-primary to-secondary md:inline-block">
        <div className="flex items-center gap-6 bg-base-200 rounded-full px-6 py-3 text-white">
          <a href="#" className="hover:text-primary text-md font-medium">
            Home
          </a>
          <a href="#explore" className="hover:text-primary text-md font-medium">
            Explore
          </a>
          <a href="#about" className="hover:text-primary text-md font-medium">
            About
          </a>
          <a href="#How" className="hover:text-primary text-md font-medium">
            How it works
          </a>
        </div>
      </div>

      <div className="absolute rounded-full z-10 right-0 flex justify-center">
        <div className="w-40 h-40 bg-primary/50 blur-3xl rounded-full"></div>
      </div>


        <div className="hidden md:block">
          <button className="btn btn-primary">connect wallet</button>
        </div>
        <div className="md:hidden text-3xl text-white">
          <RxHamburgerMenu onClick={() => setIsOpen(!isOpen)}/>
        </div>
        {isOpen && (
                  <div className=" bg-base-200/50    flex absolute right-0  transition-all duration-300 ease-in-out top-15  z-20 items-center flex-col gap-6 md:hidden justify-center rounded-2xl px-6 py-4 text-gray-300 ">
          <a href="#" className="hover:text-primary text-md font-medium">
            Home
          </a>
          <a href="#explore" className="hover:text-primary text-md font-medium">
            Explore
          </a>
          <a href="#about" className="hover:text-primary text-md font-medium">
            About
          </a>
          <a href="#How" className="hover:text-primary text-md font-medium">
            How it works
          </a>
          
        <div className="">
          <button className="btn btn-primary">connect wallet</button>
        </div>
        </div>
        )}
    </div>
  );
}

export default Nav;

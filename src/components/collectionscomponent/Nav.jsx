import React from "react";

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
      <div className="p-[2px] hidden  rounded-full bg-gradient-to-r from-primary to-secondary md:inline-block">
        <div className="flex items-center gap-6 space-x-6 bg-base-200 rounded-full px-6 py-3 text-white">
          <a href="#" className="hover:text-primary text-xs font-medium">
            Home
          </a>
          <a href="#" className="hover:text-primary text-xs font-medium">
            Collection
          </a>
          <a href="#" className="hover:text-primary text-xs font-medium">
            LaunchPad
          </a>
          <a href="#" className="hover:text-primary text-xs font-medium">
            Listing
          </a>
        </div>
      </div>



      <div>
        <button className="btn btn-primary">connect wallet</button>
      </div>
    </div>
      <div className="p-[2px] md:hidden  rounded-full bg-gradient-to-r from-primary to-secondary ">
        <div className="flex items-center gap-6 space-x-6 bg-base-200 rounded-full px-6 py-3 text-white">
          <a href="#" className="hover:text-primary text-xs font-medium">
            Home
          </a>
          <a href="#" className="hover:text-primary text-xs font-medium">
            Collection
          </a>
          <a href="#" className="hover:text-primary text-xs font-medium">
            LaunchPad
          </a>
          <a href="#" className="hover:text-primary text-xs font-medium">
            Listing
          </a>
        </div>
      </div>
      </nav>
  );
}

export default Nav;

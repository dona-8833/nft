import React from "react";

function Features() {
  return (
    <div className="relative overflow-hidden pt-10 mt-10 p-2">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 flex justify-center">
        <div className="w-100 h-40 bg-primary/30 blur-3xl rounded-full"></div>
      </div>

      <p className="text-xs text-gray-200 font-light text-center">
        How Mintellect Works{" "}
      </p>
      <h1 className="text-center font-bold text-4xl pt-5">
        Learn, Take a Quiz, and Mint Your{" "}
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          NFT
        </span>
      </h1>
      <div className="w-full flex items-center justify-center pt-5">
        <button className="btn btn-primary">Explore Marketplace</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 my-9">
        <div className="bg-base-300 col-span-3 p-2 rounded-xl border-1 border-secondary/20 ">
          <div>

          </div>
          <div>
            <p className="text-sm font-medium text-secondary">Step 1</p>
            <p className="text-2xl font-bold">Explore Collections</p>
            <p className="font-light text-gray-200" >Discover unique NFT collections and choose your favorite.</p>
          </div>
        </div>
        <div className="bg-base-300 col-span-2 p-2 rounded-xl border-1 border-secondary/20 ">
          Card 2
        </div>
        <div className="bg-base-300 col-span-2 p-2 rounded-xl border-1 border-secondary/20 ">
          Card 3
        </div>
        <div className="bg-base-300 col-span-3 p-2 rounded-xl border-1 border-secondary/20 ">
          Card 4
        </div>
      </div>
    </div>
  );
}

export default Features;

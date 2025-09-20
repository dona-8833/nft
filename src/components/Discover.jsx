import React from "react";
import CardStack from "./ui/CardStack";

function Discover() {
  return (
    <>
      <div className=" mt-8 relative overflow-hidden">
        <div className="absolute -top-0 left-1/2 -translate-x-1/2 z-10 flex justify-center">
          <div className="w-100 h-40 bg-secondary/10 blur-3xl rounded-full"></div>
        </div>
        <div>
          <p className="text-xs pt-5 text-gray-200 font-light text-center">
            Discover Top NFT Collections{" "}
          </p>
          <h1 className="text-center font-bold text-4xl pt-5">
            Featured on{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mintellect
            </span>
          </h1>
        </div>

        <CardStack />
      </div>
    </>
  );
}

export default Discover;

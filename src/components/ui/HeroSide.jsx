import React from "react";

function HeroSide() {
  return (
    <div className="flex w-full items-center justify-between absolute top-100 bg-transparent " data-theme="NFT">
      <div className="flex items-center justify-center gap-4">
        <div className="md:h-35 md:w-10 rounded-xl backdrop-blur-2xl  border border-primary bg-base-300"></div>
        <div className="md:h-7 md:w-10 rounded-xl backdrop-blur-2xl  border border-secondary bg-base-300"></div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="md:h-7 md:w-10 rounded-xl backdrop-blur-2xl  border border-secondary bg-base-300"></div>
        <div className="md:h-35 md:w-10 rounded-xl backdrop-blur-2xl  border border-primary bg-base-300"></div>
      </div>
    </div>
  );
}

export default HeroSide;

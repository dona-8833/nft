import React from "react";
import Layout from "./Layout";
import NftCard from "./ui/NftCard";
import HeroSide from "./ui/HeroSide";

function Hero() {
  return (
    <div data-theme="NFT" className="mt-8 relative z-0">
      <p className="text-gray-200 font-extralight text-[10px] text-center ">
        Reinventing the NFT Experience
      </p>
      <div className="flex md:flex-row flex-col items-center justify-center mt-5">
        <p className="text-4xl font-bold">Mint with</p>
        <div className="overflow-hidden w-fit rounded-full object-contain bg-gray-100">
          <img src="/hero.png" className="hidden md:block" alt="" />
        </div>
        <p className="text-4xl font-bold">Knowledge,</p>
      </div>
      <p className="text-4xl md:mt-3 font-bold text-center">
        Own <span className="text-4xl text-secondary font-bold">Smarter</span>
      </p>

      <NftCard />

      <HeroSide />
      <div className="mt-8">
        <p className="text-center font-bold">Trusted by</p>

        <div className="flex flex-wrap justify-around mt-5">
          <div className="w-30 h-15 ">
            <img src="/base.png" alt="" />
          </div>
          <div className="w-30 h-15">
            <img src="/Novous.png" alt="" />
          </div>
          <div className="w-30 h-15">
            <img src="/vista.png" alt="" />
          </div>
          <div className="w-30 h-15">
            <img src="/africa.png" alt="" />
          </div>
        </div>
            <div className="w-10 md:w-15 absolute md:top-45 md:right-65 top-50 right-1 ">
                <img src="/star.png" alt="" />
            </div>
            <div className="w-10 md:w-15 rounded-2xl overflow-hidden absolute md:top-5 md:left-40 rotate-20 top-0 left-2 ">
                <img src="/ugly.png" alt="" />
            </div>
        {/* <svg
          class="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 297 297"
        >
          <circle
            cx="148.5"
            cy="148.5"
            id="Ellipse 72"
            r="148"
            stroke="url(#paint0_linear_1_559)"
          ></circle>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_1_559"
              x1="148.5"
              x2="148.5"
              y1="0"
              y2="297"
            >
              <stop stop-color="#B3B3B8"></stop>
              <stop
                offset="0.591346"
                stop-color="#3A0CA3"
                stop-opacity="0.7"
              ></stop>
              <stop offset="1" stop-color="#E4E4E7"></stop>
            </linearGradient>
          </defs>
        </svg> */}
      </div>
    </div>
  );
}

export default Hero;

import React from "react";

function NftCard() {
  return (
    <div
      className="flex items-center justify-center mt-10 relative  mx-4"
      data-theme="skibidinova"
    >
      {/* Blurred background glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[200px] bg-secondary/20 blur-3xl rounded-full"></div>
      </div>

      <img src="/cube.png" className="absolute -top-15 w-[200px] h-[200px] md:w-[239px] md:h-[239px] left-5 lg:left-60 md:left-0"  alt="" />
      <img src="/cube.png" className="absolute -bottom-10  w-[200px] h-[200px] md:w-[239px] md:h-[239px] right-10 lg:right-75 md:right-10" alt="" />

      {/* Left Card */}
      <div className="md:-rotate-20 -rotate-10 left-20 md:left-10  transition-transform duration-300 flex flex-col gap-2 items-center p-3 md:p-4 rounded-xl bg-info  backdrop-blur-xs  border border-primary/30 w-57 relative z-10">
        {/* Avatar + Info */}
        <div className="flex items-center gap-2 justify-start w-full">
          <div className="rounded-full overflow-hidden h-10 w-10 border border-white/20">
            <img
              src="/pepeKing.jpg"
              alt="avatar"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="text-white">
            <p className="font-medium text-[12px]">Zappier Tariq</p>
            <p className="font-extralight text-[10px] opacity-70">Creator</p>
          </div>
        </div>

        {/* NFT Image */}
        <div className="w-full relative rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:scale-103">
          <img
            src="/NftGuy.jpg"
            alt="NFT"
            className="object-cover w-full h-full"
          />
          <div className="absolute top-2 left-2 px-2 py-1 rounded-full backdrop-blur-md bg-gray-400/50 text-white shadow">
            <p className="text-xs">New</p>
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex justify-between gap-10 items-center">
          <div className="text-white  flex flex-col w-full">
            <p className="font-medium text-[12px]">!1914 0G Collection</p>
            <p className="font-medium text-[12px] opacity-70">#3454</p>
          </div>
          <div className="p-1 rounded-xl backdrop-blur-md flex items-center justify-center gap-1 bg-gray-400/50 w-fit text-white ">
            <p className="text-xs">500</p>
            <div className="w-3">
              <img src="/edu.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Middle Card */}
      <div className=" transition-transform duration-300 flex flex-col gap-2 items-center p-3 md:p-4 rounded-xl bg-info backdrop-blur-xs border border-primary/30 w-57 relative z-10">
        <div className="flex items-center gap-2 justify-start w-full">
          <div className="rounded-full overflow-hidden h-10 w-10 border border-white/20">
            <img
              src="/pepeKing.jpg"
              alt="avatar"
              className="object-cover h-full w-full "
            />
          </div>
          <div className="text-white">
            <p className="font-medium text-[12px]">Zappier Tariq</p>
            <p className="font-extralight text-[10px] opacity-70">Creator</p>
          </div>
        </div>

        <div className="w-full relative rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:scale-103">
          <img
            src="/quiz.jpg"
            alt="NFT"
            className="object-cover w-full h-full"
          />
          <div className="absolute top-2 left-2 px-2 py-1 rounded-full backdrop-blur-md bg-gray-400/50 text-white shadow">
            <p className="text-xs">New</p>
          </div>
        </div>

        <div className="flex justify-between gap-10 items-center">
          <div className="text-white  flex flex-col w-full">
            <p className="font-medium text-[12px]">!1914 0G Collection</p>
            <p className="font-medium text-[12px] opacity-70">#3454</p>
          </div>
          <div className="p-1 rounded-xl backdrop-blur-md flex items-center justify-center gap-1 bg-gray-400/50 w-fit text-white ">
            <p className="text-xs">500</p>
            <div className="w-3">
              <img src="/edu.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Card */}
      <div className="md:rotate-20 rotate-10 right-20 md:right-10 z-0 transition-transform duration-300 flex flex-col gap-2 items-center p-3 md:p-4 rounded-xl bg-info backdrop-blur-xs border border-primary/30 w-57 relative ">
        <div className="flex items-center gap-2 justify-start w-full">
          <div className="rounded-full overflow-hidden h-10 w-10 border border-white/20">
            <img
              src="/pepeKing.jpg"
              alt="avatar"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="text-white">
            <p className="font-medium text-[12px]">Zappier Tariq</p>
            <p className="font-extralight text-[10px] opacity-70">Creator</p>
          </div>
        </div>

        <div className="w-full relative rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:scale-105">
          <img
            src="/rain.jpg"
            alt="NFT"
            className="object-cover w-full h-full"
          />
          <div className="absolute top-2 left-2 px-2 py-1 rounded-full backdrop-blur-md bg-gray-400/50 text-white shadow">
            <p className="text-xs">New</p>
          </div>
        </div>
        <div className="flex justify-between gap-10 items-center">
          <div className="text-white  flex flex-col w-full">
            <p className="font-medium text-[12px]">!1914 0G Collection</p>
            <p className="font-medium text-[12px] opacity-70">#3454</p>
          </div>
          <div className="p-1 rounded-xl backdrop-blur-md flex items-center justify-center gap-1 bg-gray-400/50 w-fit text-white ">
            <p className="text-xs">500</p>
            <div className="w-3">
              <img src="/edu.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NftCard;

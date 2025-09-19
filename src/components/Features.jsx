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
        {/* Step 1 */}
        <div className="bg-base-300/30 md:col-span-3 flex flex-col col-span-1 md:flex-row items-center justify-evenly p-4 rounded-xl border border-secondary/20">
          <div className="transition-all duration-300 hover:scale-105">
            <img src="/nocoral.png" alt="" />
          </div>
          <div className="mt-4 md:mt-0 md:ml-4">
            <p className="text-sm font-medium text-secondary">Step 1</p>
            <p className="text-2xl font-bold">Explore Collections</p>
            <p className="font-light text-gray-200">
              Discover unique NFT collections and choose <br /> your favorite.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-base-300/30 md:col-span-2 col-span-1 p-6 md:p-8 overflow-hidden  rounded-xl border border-secondary/20 relative">
          {/* Floating circles */}
          <div className="absolute top-6 left-16 w-12 h-12 rounded-full overflow-hidden border z-10 sm:w-16 sm:h-16">
            <img
              src="/freepik.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-2 left-32 w-12 h-12 opacity-50 rounded-full overflow-hidden border z-10 sm:left-44 sm:w-16 sm:h-16">
            <img
              src="/freepik2.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-2 -left-2 w-12 h-12 opacity-50 rounded-full overflow-hidden border z-10 sm:-top-2 sm:-left-3 sm:w-16 sm:h-16">
            <img
              src="/freepik3.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-2 right-20 w-12 h-12 opacity-50 rounded-full overflow-hidden border z-10 sm:-top-2 sm:-right-3 sm:w-16 sm:h-16">
            <img
              src="/freepik4.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text content */}
          <div className="relative z-20 mt-24 md:mt-0 md:absolute bottom-4 right-4 text-center md:text-right">
            <p className="text-sm font-medium text-secondary">Step 2</p>
            <p className="text-2xl font-bold text-white">
              Learn About the Project
            </p>
            <p className="font-light text-gray-200">
              Get key insights about the collection or <br /> general Web3
              knowledge.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-base-300/30 md:col-span-2 p-4 col-span-1 flex flex-col items-center justify-center rounded-xl border border-secondary/20">
          <div className="relative w-fit py-4">
            {/* Neon circle */}
            <div className="bg-error w-fit p-6 rounded-full shadow-[0_0_10px_#FF4D4F,0_0_20px_#FF4D4F,0_0_30px_#FF4D4F]">
              <p className="font-bold text-4xl text-white drop-shadow-[0_0_10px_#FF4D4F]">
                1 + 1 = 11
              </p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm font-medium text-secondary">Step 3</p>
            <p className="text-2xl font-bold">Complete a Quick Quiz</p>
            <p className="font-light text-gray-200">
              Answer a few questions to show what <br /> you’ve learned.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="bg-base-300/30 md:col-span-3 p-4 col-span-1 flex relative overflow-hidden items-center justify-center rounded-xl border border-secondary/20">
          {/* Floating circles */}
          <div className="absolute top-2 right-8 w-12 h-12 opacity-50 rounded-full overflow-hidden border z-10 sm:w-16 sm:h-16">
            <img
              src="/rain.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top- right-20 w-12 h-12 opacity-50 rounded-full overflow-hidden border z-10 sm:w-16 sm:h-16">
            <img
              src="/ugly.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-4 right-8 w-12 h-12 opacity-50 rounded-full overflow-hidden border z-10 sm:w-16 sm:h-16">
            <img
              src="/pepeKing.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-2 left-8 w-12 h-12 opacity-50 rounded-full overflow-hidden border z-10 sm:w-16 sm:h-16">
            <img
              src="/rain.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top- left-20 w-12 h-12 opacity-50 rounded-full overflow-hidden border z-10 sm:w-16 sm:h-16">
            <img
              src="/ugly.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-8 w-12 h-12 opacity-50 rounded-full overflow-hidden border z-10 sm:w-16 sm:h-16">
            <img
              src="/pepeKing.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="relative z-20 mt-24 md:mt-0 text-center">
            <p className="text-sm font-medium text-secondary">Step 4</p>
            <p className="text-2xl font-bold text-white">
              Mint Your NFT Securely
            </p>
            <p className="font-light text-gray-200">
              Unlock access and mint your NFT directly on EduChain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

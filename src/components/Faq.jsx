import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function Faq() {
  return (
    <>
      <div className="px-4 relative max-w-full overflow-x-hidden mb-10 mt-10">
        <h1 className="text-center text-2xl md:text-4xl font-bold pt-5 leading-snug break-words">
          Got Questions? We’ve Got
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {" "}
            Answers.
          </span>
        </h1>
      </div>
      <div className="relative">
        <div className="absolute rounded-full z-10 right-0 -bottom-80 flex justify-center">
          <div className="w-40 h-40 bg-secondary/30 blur-3xl rounded-full"></div>
        </div>

        <div className="absolute rounded-full z-10 left-0 flex justify-center">
          <div className="w-40 h-40 bg-primary/30 blur-3xl rounded-full"></div>
        </div>
      </div>

      <div className="mt-5 md:mx-30 flex flex-col gap-3">
        <div className="flex  justify-between items-center p-4 border border-gray-200/30 rounded-3xl">
          <h1 className="font-medium">What is Mintellect ?</h1>
          <MdKeyboardArrowDown />
        </div>
        <div className="flex  justify-between items-center p-4 border border-gray-200/30 rounded-3xl">
          <h1 className="font-medium">
            How does the Learn-to-Mint process work?{" "}
          </h1>
          <MdKeyboardArrowDown />
        </div>
        <div className="flex  justify-between items-center p-4 border border-gray-200/30 rounded-3xl">
          <h1 className="font-medium">Do I need crypto to use Mintellect? </h1>
          <MdKeyboardArrowDown />
        </div>
        <div className="flex  justify-between items-center p-4 border border-gray-200/30 rounded-3xl">
          <h1 className="font-medium">
            Why should I use Mintellect instead of other NFT marketplaces?
          </h1>
          <MdKeyboardArrowDown />
        </div>
        <div className="flex mb-20  justify-between items-center p-4 border border-gray-200/30 rounded-3xl">
          <h1 className="font-medium">What is Mintellect ?</h1>
          <MdKeyboardArrowDown />
        </div>
      </div>
    </>
  );
}

export default Faq;

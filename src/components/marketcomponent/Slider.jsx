import React from 'react'

function Slider() {
  return (
<div className="carousel w-full py-10">
<div id="slide1" className="carousel-item bg-base-300/30 relative w-full">
  <div className="flex flex-row items-center justify-between w-full px-4 md:px-20 border rounded-2xl border-secondary py-6 md:py-10 gap-4 md:gap-10 overflow-hidden">
    
    {/* Left Side */}
    <div className="flex-1 flex flex-col space-y-3 md:space-y-5 text-left">
      <h1 className="text-lg sm:text-xl md:text-4xl font-black leading-snug">
        World of <span className='text-[#FFC845]'>The Knowls</span>  – Guardians <br className="hidden sm:block" />
        of Knowledge on <span className='text-secondary'>EduChain</span> 
      </h1>
      <p className="text-sm sm:text-base text-gray-300">
        Collect wisdom, embrace learning, and mint art that empowers your mind.
      </p>
      <button className="btn btn-secondary w-fit text-white text-sm sm:text-base">
        Mint Now
      </button>
    </div>

    {/* Right Side (Image) */}
    <div className=" h-40 w-35  md:h-50 md:w-50 rounded-2xl overflow-hidden flex items-center justify-center">
      <img src="/slide1.jpg" alt="" className="w-full h-full object-cover" />
    </div>
  </div>

  {/* Carousel Controls */}
  <div className="absolute left-1 right-1 top-1/2 flex -translate-y-1/2 transform justify-between">
    <a href="#slide3" className="">❮</a>
    <a href="#slide2" className="">❯</a>
  </div>
</div>
<div id="slide2" className="carousel-item bg-base-300/30 relative w-full">
  <div className="flex flex-row items-center justify-between w-full px-4 md:px-20 border rounded-2xl border-secondary py-6 md:py-10 gap-4 md:gap-10 overflow-hidden">
    
    {/* Left Side */}
    <div className="flex-1 flex flex-col space-y-3 md:space-y-5 text-left">
      <h1 className="text-lg sm:text-xl md:text-4xl font-black leading-snug">
Capy Friends listing coming soon <br /> on <span className='bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text'>MINTELLECT</span> 
      </h1>
      <p className="text-sm sm:text-base text-gray-300">
Track and trade te heart of $EDU and position for a lot of <span className='text-[#FFC845]'>YUZU.</span>       </p>

    </div>

    {/* Right Side (Image) */}
    <div className=" h-40 w-35  md:h-50 md:w-50 rounded-2xl overflow-hidden flex items-center justify-center">
      <img src="/slide2.jpg" alt="" className="w-full h-full object-cover" />
    </div>
  </div>

  {/* Carousel Controls */}
  <div className="absolute left-1 right-1 top-1/2 flex -translate-y-1/2 transform justify-between">
    <a href="#slide1" className=" ">❮</a>
    <a href="#slide3" className="">❯</a>
  </div>
</div>
<div id="slide3" className="carousel-item relative bg-base-300/30 w-full">
  <div className="flex flex-row items-center justify-between w-full px-4 md:px-20 border rounded-2xl border-secondary py-6 md:py-10 gap-4 md:gap-10 overflow-hidden">
    
    {/* Left Side */}
    <div className="flex-1 flex flex-col space-y-3 md:space-y-5 text-left">
      <h1 className="text-lg sm:text-xl md:text-4xl font-black leading-snug">
Fake <span className='bg-gradient-to-r from-[#6977E7] to-[#68B3F3] text-transparent bg-clip-text'>CryptoPunks:</span>  The Originals of Web3 Art
      </h1>
      <p className="text-sm sm:text-base text-gray-300">
Mint the pioneers of NFT culture and secure your legacy on-chain.      </p>
      <button className=" text-gray-500 btn text-shadow-2xs w-fit bg-white text-sm sm:text-base">
        Listing Soon
      </button>
    </div>

    {/* Right Side (Image) */}
    <div className=" h-40 w-35  md:h-50 md:w-50  rounded-2xl overflow-hidden flex items-center justify-center">
      <img src="/slide3.jpg" alt="" className="w-full h-full object-cover" />
    </div>
  </div>

  {/* Carousel Controls */}
  <div className="absolute left-1 right-1 top-1/2 flex -translate-y-1/2 transform justify-between">
    <a href="#slide2" className="">❮</a>
    <a href="#slide3" className="">❯</a>
  </div>
</div>

</div>  )
}

export default Slider

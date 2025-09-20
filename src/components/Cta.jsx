import React from 'react'

function Cta() {
  return (

<div className="relative h-[320px] w-full overflow-hidden flex items-center justify-center" data-theme="NFT">
  {/* Background Image */}
  <img
    src="/cta.png"
    alt="NFT Jelly"
    className="h-full w-full object-cover"
  />

  {/* Overlay Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40">
    <h1 className="text-2xl md:text-4xl font-bold mb-4">
      Start Your Journey with{" "} Mintellect

    </h1>
    <button className="btn btn-primary">Explore Collections</button>
  </div>
</div>

  )
}

export default Cta
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function LaunchSlide() {
      const [activeIndex, setActiveIndex] = useState(0);

  const thumbnails = ["launch1.png", "launch2.png", "launch3.png", "launch4.png"];

  return (
    <div className="w-full">
      <div className="carousel w-full">
        <div
          id="item1"
          className="carousel-item rounded-2xl overflow-hidden h-60 md:h-90 relative w-full"
        >
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-20 pb-8 bg-gradient-to-t from-black/40 via-black/40 to-black/40">
            {/* Live Tag */}
            <button className="btn bg-transparent border border-secondary w-fit mb-4">
              <img src="/live.png" className="w-5 h-5" alt="live" />
              Live
            </button>

            {/* Text + CTA */}
            <div className="flex items-end justify-between gap-3 ">
              <div>
                <h1 className="text-2xl md:text-4xl font-black">
                  Just In:{" "}
                  <span className="text-[#B8EB61] underline">The Knowls</span>
                </h1>
                <p className="text-gray-300 my-4 max-w-lg text-sm md:text-base">
                  Collect wisdom, embrace learning, and mint art that empowers
                  your mind.
                </p>
              </div>
              <button className="btn btn-primary w-fit">View Now</button>
            </div>

            {/* timer */}
            <div>
              <button className="absolute top-2 right-2 btn bg-transparent border border-white w-fit ">
                34h:54m:25s
              </button>
            </div>
          </div>

          {/* Background Image */}
          <img
            src="/launch1.png"
            className="w-full object-cover"
            alt="carousel background"
          />
        </div>
        <div
          id="item2"
          className="carousel-item rounded-2xl overflow-hidden h-60 md:h-90 relative w-full"
        >
          <div className="absolute inset-0 flex flex-col justify-end  p-4 pb-2 bg-gradient-to-t from-black/40 via-black/40 to-black/40">
            {/* Live Tag */}
            <button className="btn bg-transparent border border-white w-fit ">
              Launching soon
            </button>

            {/* Text + CTA */}

            {/* timer */}
            <div>
              <button className="absolute top-2 right-2 btn bg-transparent border border-white w-fit ">
                34h:54m:25s
              </button>
            </div>
          </div>
          <img src="/launch2.png" className="w-full" />
        </div>
        <div
          id="item3"
          className="carousel-item rounded-2xl overflow-hidden h-60 md:h-90 relative w-full"
        >
          <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-20 pb-8 bg-gradient-to-t from-black/40 via-black/40 to-black/40">
            {/* Live Tag */}
            <button className="btn bg-transparent border border-secondary w-fit mb-2">
              coming soon
            </button>

            {/* Text + CTA */}
            <div className="flex items-end justify-between gap-3 ">
              <div className="flex flex-col items-end justify-end">
                <h1 className="text-2xl md:text-4xl font-black">
                  Saga based COllection
                </h1>
                <p className="text-gray-300 my-4 max-w-lg text-sm md:text-base">
                  Collect wisdom, embrace learning, and mint art that empowers
                  your mind.
                </p>
              </div>
              <button className="btn btn-primary w-fit">34h:54m:25s</button>
            </div>

            {/* timer */}
          </div>
          <img src="/launch3.png" className="w-full" />
        </div>
        <div
          id="item4"
          className="carousel-item rounded-2xl overflow-hidden h-60 md:h-90 relative w-full"
        >
          <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-20 pb-8 bg-gradient-to-t from-black/40 via-black/40 to-black/40"></div>

          <img src="/launch4.png" className="w-full" />
        </div>
      </div>
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 mt-10 mb-10">
      {/* Search Bar */}
      <label className="relative z-10 block w-full md:w-2/3 rounded-2xl border border-primary overflow-hidden">
        <input
          type="text"
          placeholder="Search for Collections, Creator, Wallet and more..."
          className="w-full p-3 md:p-4 pr-14 text-white bg-transparent focus:ring-0 focus:outline-none"
        />
        <button
          type="button"
          className="absolute -right-5 top-1/2 -translate-y-1/2 rounded-full bg-secondary py-4 px-6"
        >
          <FaSearch className="text-xl md:text-2xl" />
        </button>
      </label>

      {/* Thumbnail Navigation */}
      <div className="flex flex-wrap justify-center md:justify-start gap-2 w-full md:w-auto">
        {thumbnails.map((img, i) => (
          <a
            key={i}
            href={`#item${i + 1}`}
            onClick={() => setActiveIndex(i)}
            className="block"
          >
            <div
              className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden flex items-center justify-center border-2 transition-all duration-300 ${
                activeIndex === i
                  ? "border-secondary shadow-[0_0_15px_#20f7a7]"
                  : "border-secondary/40"
              }`}
            >
              <img
                src={`/${img}`}
                alt={`Launch ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </a>
        ))}
      </div>
    </div>

    </div>
  );
}

export default LaunchSlide;

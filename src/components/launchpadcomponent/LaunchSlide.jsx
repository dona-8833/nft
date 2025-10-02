import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

function LaunchSlide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const thumbnails = [
    {
      img: "launch1.png",
      title: "Just In: The Knowls",
      description: "Collect wisdom, embrace learning, and mint art that empowers your mind.",
      status: "Live",
      ctaText: "View Now",
      hasTimer: true,
    },
    {
      img: "launch2.png",
      title: "Upcoming Collection",
      description: "Stay tuned for an exciting new collection!",
      status: "Launching soon",
      ctaText: "Learn More",
      hasTimer: false,
    },
    {
      img: "launch3.png",
      title: "Saga based Collection",
      description: "Collect wisdom, embrace learning, and mint art that empowers your mind.",
      status: "Coming soon",
      ctaText: "34h:54m:25s",
      hasTimer: false,
    },
  ];

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex >= thumbnails.length) {
          // Reset to first slide after reaching the last one
          if (carouselRef.current) {
            carouselRef.current.scrollTo({ left: 0, behavior: "auto" });
          }
          return 0;
        }
        if (carouselRef.current) {
          carouselRef.current.scrollTo({
            left: nextIndex * carouselRef.current.offsetWidth,
            behavior: "smooth",
          });
        }
        return nextIndex;
      });
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [thumbnails.length]);

  // Handle thumbnail click
  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  // Sync scroll position with activeIndex
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: activeIndex * carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={carouselRef}
        className="carousel w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {[...thumbnails, thumbnails[0]].map((slide, i) => (
          <div
            key={i}
            id={`item${(i % thumbnails.length) + 1}`}
            className="carousel-item rounded-2xl overflow-hidden h-60 md:h-90 relative w-full flex-shrink-0 snap-center"
          >
            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-20 pb-8 bg-gradient-to-t from-black/40 via-black/40 to-black/40">
              <button
                className={`btn bg-transparent border w-fit mb-4 ${
                  slide.status === "Live" || slide.status === "Coming soon"
                    ? "border-secondary"
                    : "border-white"
                }`}
              >
                {slide.status === "Live" && (
                  <img src="/live.png" className="w-5 h-5" alt="live" />
                )}
                {slide.status}
              </button>
              <div className="flex items-end justify-between gap-3">
                <div>
                  <h1
                    className={`text-2xl md:text-4xl ${
                      slide.title === "Saga based Collection" ? "font-black" : ""
                    }`}
                  >
                    {slide.title.includes("The Knowls") ? (
                      <>
                        Just In: <span className="text-[#B8EB61] underline">The Knowls</span>
                      </>
                    ) : (
                      slide.title
                    )}
                  </h1>
                  <p className="text-gray-300 my-4 max-w-lg text-sm md:text-base">
                    {slide.description}
                  </p>
                </div>
                <button className="btn btn-primary w-fit">{slide.ctaText}</button>
              </div>
              {slide.hasTimer && (
                <button className="absolute top-2 right-2 btn bg-transparent border border-white w-fit">
                  34h:54m:25s
                </button>
              )}
            </div>
            <img
              src={`/${slide.img}`}
              className="w-full h-full object-cover"
              alt={`Carousel slide ${i + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 mt-10 mb-10">
        <label className="relative z-10 block w-full md:w-2/3 rounded-2xl border border-primary overflow-hidden">
          <input
            type="text"
            placeholder="Search for Collections..."
            className="w-full p-3 md:p-4 pr-14 text-white bg-transparent focus:ring-0 focus:outline-none"
          />
          <button
            type="button"
            className="absolute -right-3 rounded-full top-1/2 -translate-y-1/2 bg-[#068C5A] py-5 pr-5 pl-5"
          >
            <FaSearch className="text-2xl" />
          </button>
        </label>
        <div className="flex flex-wrap justify-center md:justify-start gap-2 w-full md:w-auto">
          {thumbnails.map((slide, i) => (
            <a
              key={i}
              href={`#item${i + 1}`}
              onClick={(e) => {
                e.preventDefault();
                handleThumbnailClick(i);
              }}
              className="block"
              role="tab"
              aria-selected={activeIndex === i}
            >
              <div
                className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden flex items-center justify-center border-2 transition-all duration-300 ${
                  activeIndex === i
                    ? "border-secondary shadow-[0_0_15px_#20f7a7]"
                    : "border-secondary/40"
                }`}
              >
                <img
                  src={`/${slide.img}`}
                  alt={`Launch ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Inline CSS to hide scrollbar */}
      <style>
        {`
          .carousel::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
}

export default LaunchSlide;
import React, { useState, useEffect, useRef } from "react";

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const slides = [
    {
      img: "slide1.jpg",
      title: "World of The Knowls – Guardians of Knowledge on EduChain",
      description: "Collect wisdom, embrace learning, and mint art that empowers your mind.",
      status: "Mint Now",
      statusClass: "btn btn-secondary w-fit text-white text-sm sm:text-base",
      titleHighlight: { text: "The Knowls", class: "text-[#FFC845]" },
      subtitleHighlight: { text: "EduChain", class: "text-secondary" },
    },
    {
      img: "slide2.jpg",
      title: "Capy Friends listing coming soon on MINTELLECT",
      description: "Track and trade the heart of $EDU and position for a lot of YUZU.",
      status: "Listing Soon",
      statusClass: "btn text-gray-500 text-shadow-2xs w-fit bg-white text-sm sm:text-base",
      titleHighlight: { text: "MINTELLECT", class: "bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text" },
      subtitleHighlight: { text: "YUZU", class: "text-[#FFC845]" },
    },
    {
      img: "slide3.jpg",
      title: "Fake CryptoPunks: The Originals of Web3 Art",
      description: "Mint the pioneers of NFT culture and secure your legacy on-chain.",
      status: "Listing Soon",
      statusClass: "btn text-gray-500 text-shadow-2xs w-fit bg-white text-sm sm:text-base",
      titleHighlight: { text: "CryptoPunks", class: "bg-gradient-to-r from-[#6977E7] to-[#68B3F3] text-transparent bg-clip-text" },
    },
  ];

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex >= slides.length) {
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

    return () => clearInterval(interval);
  }, [slides.length]);

  // Handle navigation clicks
  const handlePrev = () => {
    setActiveIndex((prev) => {
      const newIndex = prev === 0 ? slides.length - 1 : prev - 1;
      if (carouselRef.current) {
        carouselRef.current.scrollTo({
          left: newIndex * carouselRef.current.offsetWidth,
          behavior: "smooth",
        });
      }
      return newIndex;
    });
  };

  const handleNext = () => {
    setActiveIndex((prev) => {
      const newIndex = prev + 1;
      if (newIndex >= slides.length) {
        if (carouselRef.current) {
          carouselRef.current.scrollTo({ left: 0, behavior: "auto" });
        }
        return 0;
      }
      if (carouselRef.current) {
        carouselRef.current.scrollTo({
          left: newIndex * carouselRef.current.offsetWidth,
          behavior: "smooth",
        });
      }
      return newIndex;
    });
  };

  // Handle dot click
  const handleDotClick = (index) => {
    setActiveIndex(index);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full overflow-hidden py-10">
      <div
        ref={carouselRef}
        className="carousel w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {[...slides, slides[0]].map((slide, i) => (
          <div
            key={i}
            id={`slide${(i % slides.length) + 1}`}
            className="carousel-item bg-base-300/30 relative w-full flex-shrink-0 snap-center"
          >
            <div className="flex flex-row items-center justify-between w-full px-4 md:px-20 border rounded-2xl border-secondary py-6 md:py-10 gap-4 md:gap-10">
              {/* Left Side */}
              <div className="flex-1 flex flex-col space-y-3 md:space-y-5 text-left">
                <h1 className="text-lg sm:text-xl md:text-4xl font-black leading-snug">
                  {slide.title.split(slide.titleHighlight.text).map((part, index, array) => (
                    <React.Fragment key={index}>
                      {part}
                      {index < array.length - 1 && (
                        <span className={slide.titleHighlight.class}>
                          {slide.titleHighlight.text}
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                  {slide.subtitleHighlight && (
                    <>
                      <br className="hidden sm:block" />
                      {slide.subtitleHighlight.text.split(slide.subtitleHighlight.text).map((part, index, array) => (
                        <React.Fragment key={index}>
                          {part}
                          {index < array.length - 1 && (
                            <span className={slide.subtitleHighlight.class}>
                              {slide.subtitleHighlight.text}
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </>
                  )}
                </h1>
                <p className="text-sm sm:text-base text-gray-300">
                  {slide.description.split(slide.subtitleHighlight?.text || "").map((part, index, array) => (
                    <React.Fragment key={index}>
                      {part}
                      {index < array.length - 1 && slide.subtitleHighlight && (
                        <span className={slide.subtitleHighlight.class}>
                          {slide.subtitleHighlight.text}
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </p>
                <button className={slide.statusClass}>{slide.status}</button>
              </div>
              {/* Right Side (Image) */}
              <div className="h-40 w-36 md:h-60 md:w-48 rounded-2xl overflow-hidden flex items-center justify-center">
                <img
                  src={`/${slide.img}`}
                  alt={`Slide ${i + 1} image`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}


      {/* Dot Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === i ? "bg-secondary scale-125" : "bg-gray-500"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
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

export default Slider;
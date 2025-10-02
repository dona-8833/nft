import React, { useState, useEffect } from "react";

const cards = [
  {
    id: 1,
    img: "/char1.jpg",
    title: "Azuki",
    status: "Live",
    desc: "Complete a quick quiz to unlock this exclusive NFT.",
    extra: "🔺",
  },
  {
    id: 2,
    img: "/owl.jpg",
    title: "Neon Realities",
    status: "Launching Soon",
    desc: "A vibrant journey through futuristic art and immersive design.",
    extra: "★",
  },
  {
    id: 3,
    img: "/pixel.jpg",
    title: "Pixel Warriors",
    status: "Live",
    desc: "Retro-inspired digital art redefining on-chain nostalgia.",
    extra: "🔴➡️",
  },
];

function CardCarousel() {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  // Auto-scroll every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Handle swipe start
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  // Handle swipe end
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    if (distance > 50) {
      setActive((prev) => (prev + 1) % cards.length);
    } else if (distance < -50) {
      setActive((prev) => (prev - 1 + cards.length) % cards.length);
    }
    setTouchStart(null);
  };

  // Handle dot click
  const handleDotClick = (index) => {
    setActive(index);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        setActive((prev) => (prev - 1 + cards.length) % cards.length);
      } else if (e.key === "ArrowRight") {
        setActive((prev) => (prev + 1) % cards.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className="flex items-center justify-center h-160 overflow-hidden relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
      role="region"
      aria-label="Card carousel"
    >
      <div className="relative w-full max-w-5xl perspective-1000">
        {cards.map((card, index) => {
          const isActive = index === active;
          const angle = (index - active) * 120; // 120deg apart for 3 cards
          const radius = 250; // Distance from center for circular effect

          return (
            <div
              key={card.id}
              className={`
                absolute top-1/2 left-1/2 w-60 sm:w-72 h-80 sm:h-96 transition-all duration-700 ease-in-out
                ${isActive ? "z-20 scale-100 opacity-100" : "z-10 scale-90 opacity-100 "}
              `}
              style={{
                transform: `
                  translateX(-50%) translateY(-50%) 
                  rotateY(${angle}deg) translateZ(${radius}px)
                `,
              }}
            >
              <div className={`w-full h-full rounded-2xl overflow-hidden shadow-xl border border-white/20 bg-white/5 backdrop-blur-sm relative `}>
                <img
                  src={card.img}
                  alt={`${card.title} card image`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 flex flex-col items-center justify-end text-center backdrop-blur-sm text-white bg-gradient-to-t from-black/60 via-black/20 to-transparent w-full  ">
                  <h3 className="font-bold text-lg">{card.title}</h3>
                  <p className="mt-1 text-sm font-light opacity-80">{card.desc}</p>
                  <p
                    className={`
                      mt-1 text-sm px-3 py-1 rounded-full font-medium mb-2
                      ${
                        card.status === "Live"
                          ? "border border-white text-white"
                          : card.status === "Launching Soon"
                          ? "bg-primary/70 text-white"
                          : "border-red-400 text-red-300 border-2 border-dotted"
                      }
                    `}
                  >
                    {card.status}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>



      {/* Inline CSS for perspective */}
      <style>
        {`
          .perspective-1000 {
            perspective: 1000px;
          }
        `}
      </style>
    </div>
  );
}

export default CardCarousel; 

// import React, { useEffect, useState } from "react";

// const cards = [
//   {
//     id: 1,g
//     img: "/char1.jpg",
//     title: "Azuki",
//     status: "Live",
//     desc: "Complete a quick quiz to unlock this exclusive NFT.",
//     extra: "🔺",
//   },
//   {
//     id: 2,
//     img: "/owl.jpg",
//     title: "Neon Realities",
//     status: "Launching Soon",
//     desc: "A vibrant journey through futuristic art and immersive design.",
//     extra: "★",
//   },
//   {
//     id: 3,
//     img: "/pixel.jpg",
//     title: "Pixel Warriors",
//     status: "Live",
//     desc: "Retro-inspired digital art redefining on-chain nostalgia.",
//     extra: "🔴➡️",
//   },
// ];

// function CardCarousel() {
//   const [active, setActive] = useState(0);
//   const [touchStart, setTouchStart] = useState(null);

//   // auto-slide every 3s
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActive((prev) => (prev + 1) % cards.length); // loops infinitely
//     }, 6000);

//     return () => clearInterval(interval);
//   }, []);

//   // handle swipe start
//   const handleTouchStart = (e) => {
//     setTouchStart(e.touches[0].clientX);
//   };

//   // handle swipe end
//   const handleTouchEnd = (e) => {
//     if (!touchStart) return;
//     const touchEnd = e.changedTouches[0].clientX;
//     const distance = touchStart - touchEnd;

//     if (distance > 50) {
//       // swipe left → next card
//       setActive((prev) => (prev + 1) % cards.length);
//     } else if (distance < -50) {
//       // swipe right → prev card
//       setActive((prev) => (prev - 1 + cards.length) % cards.length);
//     }
//     setTouchStart(null);
//   };

//   return (
//     <div
//       className="flex items-center justify-center h-160 overflow-hidden"
//       onTouchStart={handleTouchStart}
//       onTouchEnd={handleTouchEnd}
//     >
//       <div className="relative flex items-center justify-center w-full max-w-5xl">
//         {cards.map((card, index) => {
//           const isActive = index === active;
//           const isLeft = index < active;
//           const isRight = index > active;

//           return (
//             <div
//               key={card.id}
//               className={`
//                 cursor-pointer absolute top-1/2 transition-all duration-700 ease-in-out
//                 ${
//                   isActive
//                     ? "z-20 scale-105 -translate-y-2/3 animate-fadeInUp"
//                     : "z-10 scale-90 -translate-y-1/3 opacity-70"
//                 }
//                 ${isLeft ? "md:-translate-x-75 -translate-x-40 -skew-y-[20deg]" : ""}
//                 ${isRight ? "md:translate-x-75 translate-x-40 skew-y-[20deg]" : ""}
//                 ${isActive ? "translate-x-0 rotate-0 skew-x-0" : ""}
//               `}
//             >
//               <div className="w-60 sm:w-72 h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl border border-white/20 bg-white/5 backdrop-blur-sm relative">
//                 <img
//                   src={card.img}
//                   alt={card.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute bottom-0 flex flex-col items-center justify-end text-center backdrop-blur-sm text-white bg-gradient-to-t from-black/60 via-black/20 to-transparent">
//                   <h3 className="font-bold text-lg animate-slideIn">{card.title}</h3>
//                   <p className="mt-1 text-sm font-light opacity-80">{card.desc}</p>
//                   <p
//                     className={`
//                       mt-1 text-sm px-3 py-1 rounded-full font-medium mb-2 animate-pulse
//                       ${
//                         card.status === "Live"
//                           ? "border border-white text-white"
//                           : card.status === "Launching Soon"
//                           ? "bg-primary/70 text-white"
//                           : "border-red-400 text-red-300 border-2 border-dotted"
//                       }
//                     `}
//                   >
//                     {card.status}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default CardCarousel;
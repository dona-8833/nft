import React, { useState } from "react";

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

function CardStack() {
  const [active, setActive] = useState(1); // middle card index

  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden">
      <div className="relative flex items-center justify-center w-full max-w-5xl">
        {cards.map((card, index) => {
          const isActive = index === active;
          const isLeft = index < active;
          const isRight = index > active;

          return (
            <div
              key={card.id}
              onClick={() => setActive(index)}
              className={`
                cursor-pointer transition-all duration-500 ease-in-out
                absolute top-1/2
                ${
                  isActive
                    ? "z-20 scale-105 -translate-y-2/3"
                    : "z-10 scale-90 -translate-y-1/2"
                }
                ${
                  isLeft
                    ? "md:-translate-x-65 -translate-x-40  -skew-x-6 -skew-y-[16deg] opacity-80"
                    : ""
                }
                ${
                  isRight
                    ? "md:translate-x-65 translate-x-40  skew-x-6 skew-y-[16deg] opacity-80"
                    : ""
                }
                ${isActive ? "translate-x-0 rotate-0 skew-x-0" : ""}
              `}
            >
              <div className="w-60 sm:w-72 h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl border border-white/20 bg-white/5 backdrop-blur-sm relative">
                {/* Full image background */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay text */}
                <div className="absolute bottom-0 flex flex-col items-center justify-end  text-center backdrop-blur-sm text-white bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                  <h3 className="font-bold text-lg">{card.title}</h3>
                  <p className="mt-1 text-sm font-light opacity-80">
                    {card.desc}
                  </p>
                  <p
                    className={`
        mt-1 text-sm px-3 py-1 rounded-full font-medium mb-2
        ${
          card.status === "Live"
            ? "border"
            : card.status === "Launching Soon"
            ? "btn btn-primary"
            : "border-red-400 text-red-300 border-2 border-dotted"
        }
      `}
                  >
                    {card.status}
                  </p>{" "}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardStack;

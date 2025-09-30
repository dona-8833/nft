import React, { useEffect, useState } from "react";

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

  // auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length); // loops infinitely
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-160 overflow-hidden">
      <div className="relative flex items-center justify-center w-full max-w-5xl">
        {cards.map((card, index) => {
          const isActive = index === active;
          const isLeft = index < active;
          const isRight = index > active;

          return (
            <div
              key={card.id}
              className={`
                cursor-pointer absolute top-1/2 transition-all duration-700 ease-in-out
                ${isActive ? "z-20 scale-105 -translate-y-2/3 animate-fadeInUp" : "z-10 scale-90 -translate-y-1/3 opacity-70"}
                ${isLeft ? "md:-translate-x-75 -translate-x-40 -skew-y-[20deg]" : ""}
                ${isRight ? "md:translate-x-75 translate-x-40 skew-y-[20deg]" : ""}
                ${isActive ? "translate-x-0 rotate-0 skew-x-0" : ""}
              `}
            >
              <div className="w-60 sm:w-72 h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl border border-white/20 bg-white/5 backdrop-blur-sm relative">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 flex flex-col items-center justify-end text-center backdrop-blur-sm text-white bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                  <h3 className="font-bold text-lg animate-slideIn">{card.title}</h3>
                  <p className="mt-1 text-sm font-light opacity-80">{card.desc}</p>
                  <p
                    className={`
                      mt-1 text-sm px-3 py-1 rounded-full font-medium mb-2 animate-pulse
                      ${
                        card.status === "Live"
                          ? "border border-green-400 text-green-300"
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
    </div>
  );
}

export default CardCarousel;

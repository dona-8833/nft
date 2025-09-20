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
    <div className="flex items-center justify-center h-160 overflow-hidden">
      <div className="relative flex items-center justify-center w-full max-w-5xl">
        <svg
          width="224"
          height="152"
          viewBox="0 0 224 152"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-80 right-0 z-120"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M149.649 137.872C167.972 140.926 186.888 142.705 203.574 151.502C204.569 152.022 205.798 151.644 206.326 150.648C206.846 149.651 206.47 148.419 205.476 147.89C188.4 138.89 169.068 136.97 150.319 133.847C149.211 133.656 148.158 134.413 147.975 135.525C147.785 136.635 148.541 137.682 149.649 137.872Z"
            fill="#D5D5D5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M151.794 110.885C158.276 106.414 165.093 103.343 172.932 102.454C174.052 102.328 174.853 101.317 174.732 100.198C174.604 99.0792 173.591 98.2738 172.48 98.4011C163.955 99.3666 156.538 102.667 149.492 107.525C148.562 108.162 148.324 109.433 148.966 110.362C149.599 111.288 150.873 111.524 151.794 110.885Z"
            fill="#D5D5D5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M144.041 50.9257C147.95 42.2714 154.127 35.9442 162.783 31.9704C163.804 31.5013 164.255 30.2898 163.784 29.2661C163.32 28.2435 162.11 27.7931 161.089 28.2622C151.509 32.6627 144.661 39.6627 140.332 49.2447C139.866 50.2696 140.327 51.4806 141.347 51.9434C142.375 52.4082 143.582 51.9517 144.041 50.9257Z"
            fill="#D5D5D5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M55.2171 25.8179C53.3915 27.4401 51.7068 29.2282 50.2135 31.1745C49.5478 32.0409 48.3286 33.9099 47.9398 35.6059C47.519 37.4119 47.9205 39.043 49.4012 40.0822C51.3682 41.4608 53.077 41.5888 54.4753 41.1223C55.8217 40.6747 56.9797 39.584 57.8345 38.0225C59.467 35.0379 59.9737 30.1941 59.7434 27.3562C61.6569 25.8676 63.7088 24.5626 65.8651 23.4496C81.9257 15.1606 102.785 22.0188 117.054 39.8471C122.047 46.0889 123.203 57.8727 122.902 70.3668C122.434 89.8206 118.119 111.01 117.053 117.246C116.793 118.787 116.808 119.725 116.862 119.92C117.113 120.875 117.749 121.204 118.204 121.36C118.864 121.577 119.422 121.524 119.889 121.36C120.522 121.133 121.083 120.656 121.428 119.845C121.615 119.397 121.739 118.754 121.821 118.061C121.873 117.58 121.851 117.042 121.996 116.713C122.937 114.603 124 112.564 125.048 110.506C128.555 103.588 132.722 97.2302 137.243 90.9306C151.605 70.9135 165.77 49.6199 186.624 35.7762C187.559 35.155 187.821 33.8885 187.198 32.9495C186.583 32.0117 185.32 31.755 184.377 32.3759C163.106 46.4925 148.586 68.1372 133.938 88.5504C130.093 93.9092 126.498 99.3117 123.332 105.047C125.088 94.3557 127.107 79.498 127.012 66.0849C126.93 54.156 125.082 43.3619 120.228 37.294C104.598 17.7634 81.5908 10.7421 64.0033 19.8239C62.1219 20.7962 60.3041 21.9012 58.5829 23.1353C52.3712 6.82243 35.337 -1.78053 18.4948 3.20914C17.4135 3.52784 16.7999 4.66371 17.1155 5.74273C17.4391 6.8229 18.5685 7.4398 19.6499 7.1211C34.8267 2.62515 50.1626 10.7373 55.2171 25.8179ZM55.667 31.0479C54.8829 31.8794 54.1423 32.7516 53.4374 33.6619C53.0637 34.1511 52.4028 35.0998 52.0432 36.069C51.9615 36.2964 51.9015 36.6619 51.8774 36.8316C52.3946 37.1852 52.811 37.3795 53.191 37.2513C53.6655 37.0945 53.9647 36.6095 54.2643 36.0629C55.0182 34.6915 55.4682 32.7956 55.667 31.0479Z"
            fill="#D5D5D5"
          />
        </svg>





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

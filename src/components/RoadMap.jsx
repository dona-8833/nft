import React from "react";
import { motion } from "framer-motion";

function RoadMap() {
  return (
    <>
    <div className="flex justify-center items-center pt-10">

    <div className="relative " id="roadmap">
      <div className="px-4 relative max-w-full overflow-x-hidden">
        <motion.p
          className="text-sm text-center text-gray-200 font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          We’re building the future of knowledge-driven NFTs
        </motion.p>
        <motion.h1
          className="text-center text-2xl md:text-4xl font-bold pt-5 leading-snug break-words"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Roadmap to Smarter{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {" "}
            Ownership
          </span>
        </motion.h1>
      </div>
      <svg
        width="90"
        height="148"
        viewBox="0 0 90 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute md:top-0 md:right-0 top-10 right-0 w-20"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M69.1004 37.556C56.1531 28.5562 41.8994 27.6415 25.9771 28.4453C23.2887 28.5816 16.7382 29.1522 11.838 31.058C8.37258 32.4047 5.75514 34.456 5.57637 37.3505C5.41822 39.88 7.05243 41.8527 9.62172 43.3172C15.2004 46.4981 25.2322 47.3274 28.3126 47.3228C42.1882 47.2974 56.1714 44.2967 68.9629 38.8704C69.7513 39.4341 70.5375 40.0301 71.319 40.6584C73.6706 42.5549 76.2788 45.0544 78.0918 47.9119C79.8543 50.6885 80.8696 53.8071 80.0812 57.0318C78.4379 63.7609 71.1815 68.91 62.2291 72.74C60.2787 73.5762 58.248 74.3455 56.1714 75.0546C54.9704 74.2276 53.6044 73.4676 52.1078 72.7723C40.4967 67.3761 21.1801 65.7083 15.3424 65.9994C12.7434 66.1287 7.95776 66.3019 4.47398 67.8081C1.98262 68.8845 0.1467 70.6309 0.0068906 73.4029C-0.119167 75.8723 1.49438 77.7412 4.02471 79.0925C9.48874 82.0101 19.2938 82.5299 22.4842 82.5021C29.7382 82.4421 43.5725 80.4878 56.0064 76.3275C58.3786 78.0507 59.9509 80.0627 60.2466 82.4328C60.6591 85.7292 58.2778 88.7531 54.6312 91.4581C53.5311 92.2735 52.3164 93.0589 51.0214 93.805C50.8999 93.7704 50.7807 93.7381 50.6593 93.7034C40.8978 90.9892 28.5304 90.8644 23.0801 91.2918C20.6208 91.4835 16.1905 92.1419 13.0413 93.8813C10.7952 95.1241 9.19998 96.9143 9.20915 99.3953C9.21832 101.943 11.1344 103.345 13.7128 104.013C17.231 104.921 21.9731 104.468 23.7333 104.288C28.6908 103.784 41.8307 100.299 51.1612 95.0502C54.0101 95.898 56.6024 96.9836 58.6674 98.372C60.8494 99.8342 62.4423 101.631 63.0863 103.851C64.6701 109.328 60.6133 113.93 54.6748 117.541C52.8664 118.64 50.8816 119.645 48.812 120.548C47.2695 118.887 45.0532 117.52 42.4564 116.45C36.3368 113.932 28.1087 113.031 22.0304 113.57C19.9332 113.754 16.3234 114.274 13.8137 115.739C11.9985 116.797 10.7493 118.34 10.8433 120.53C10.9556 123.191 12.7388 124.836 15.1637 125.817C18.5374 127.18 23.1695 127.245 25.615 127.303C30.4167 127.414 40.0406 125.492 48.498 121.934C49.0664 122.666 49.4904 123.456 49.7425 124.311C50.6959 127.527 49.1626 131.535 43.8728 136.499C41.3104 138.901 38.505 141.029 35.3559 142.579C30.8178 144.815 26.1032 145.993 21.1548 146.852C20.8431 146.908 20.6323 147.206 20.6873 147.52C20.74 147.834 21.038 148.047 21.3497 147.991C26.4057 147.113 31.2235 145.901 35.8601 143.616C39.1101 142.015 42.0094 139.823 44.6543 137.344C50.4117 131.941 51.8786 127.481 50.8426 123.981C50.5768 123.087 50.1459 122.251 49.5752 121.47C51.5829 120.583 53.5059 119.601 55.2661 118.529C61.718 114.607 65.9077 109.476 64.1864 103.528C62.9144 99.1343 58.3282 96.1636 52.5089 94.2624C53.5013 93.6572 54.441 93.0335 55.3097 92.389C59.3527 89.3906 61.8417 85.9418 61.3856 82.2896C61.0808 79.8572 59.5934 77.725 57.2945 75.8862C59.135 75.2417 60.9387 74.5488 62.6783 73.8026C72.0112 69.8086 79.4807 64.3246 81.1951 57.3067C81.8895 54.4654 81.3372 51.6957 80.0926 49.1339C78.2751 45.4032 74.9701 42.123 72.0341 39.7575C71.4244 39.2655 70.8102 38.7919 70.1937 38.3392C71.6124 37.7155 73.0174 37.0641 74.404 36.3803C77.8351 34.6917 81.8896 32.5202 84.9975 29.6212C87.1199 27.6392 88.8022 25.3199 89.5814 22.5917C90.7022 18.6855 89.4622 15.3591 87.1703 12.6171C84.9539 9.96287 81.7406 7.86306 78.816 6.31996C66.0154 -0.434537 50.9298 -2.30565 37.3017 3.31925C37.0107 3.43937 36.8708 3.77663 36.99 4.07232C37.1092 4.36569 37.4438 4.50894 37.7372 4.3865C51.0466 -1.10672 65.7816 0.745868 78.2843 7.34329C81.0851 8.81939 84.17 10.8199 86.2947 13.3609C88.3414 15.8118 89.4828 18.7779 88.4812 22.2707C87.5736 25.44 85.3321 27.9995 82.6505 30.1132C79.9047 32.2777 76.6914 33.9709 73.8998 35.3431C72.3206 36.1193 70.7186 36.8584 69.1004 37.556ZM47.6912 121.026C46.2724 119.615 44.2968 118.455 42.0232 117.52C36.0641 115.067 28.0513 114.196 22.1312 114.72C20.1555 114.896 16.7497 115.358 14.389 116.737C12.9565 117.573 11.9136 118.753 11.987 120.481C12.081 122.657 13.6074 123.942 15.5922 124.745C18.8354 126.055 23.291 126.092 25.6425 126.148C30.2769 126.254 39.4974 124.417 47.6912 121.026ZM49.5775 94.6066C40.0841 92.1349 28.3974 92.0333 23.1672 92.4422C20.8248 92.6246 16.5938 93.2345 13.5914 94.8954C11.7372 95.9187 10.346 97.3417 10.3551 99.3907C10.362 101.389 11.9755 102.371 13.997 102.893C17.3754 103.766 21.9295 103.311 23.6187 103.14C28.3149 102.662 40.4967 99.4623 49.5775 94.6066ZM54.7917 75.512C53.829 74.9114 52.7656 74.3501 51.6288 73.8211C40.1873 68.5034 21.1503 66.8656 15.3997 67.1521C12.8946 67.2768 8.28321 67.42 4.92549 68.8707C2.85585 69.7624 1.26752 71.1599 1.15063 73.463C1.08417 74.782 1.67088 75.8677 2.6633 76.771C3.73823 77.7527 5.27384 78.5173 7.01802 79.1272C12.4225 81.0168 19.814 81.3702 22.475 81.3471C29.4861 81.2894 42.7153 79.439 54.7917 75.512ZM67.8399 38.092C55.273 29.6327 41.441 28.8196 26.0344 29.598C23.4147 29.732 17.027 30.2795 12.2506 32.1344C10.7081 32.735 9.33519 33.4673 8.33131 34.3798C7.40078 35.2276 6.7934 36.2255 6.72006 37.4221C6.63525 38.792 7.2312 39.9377 8.24654 40.9079C9.34439 41.9543 10.9144 42.7952 12.6975 43.479C18.212 45.5926 25.7434 46.1724 28.3104 46.1678C41.7894 46.1424 55.3739 43.278 67.8399 38.092Z"
          fill="white"
        />
      </svg>
      <div className="flex flex-col gap-8 md:gap-0 mt-20 md:mx-20">
        <motion.div
          className="flex items-center gap-30  flex-col md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="border border-secondary/40 rounded-4xl p-4 flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-b w-fit rounded-full p-1 from-primary to-secondary">
              <img src="/gear.png" className="w-15 h-15" alt="" />
            </div>
            <p className="text-secondary font-medium">phase 1</p>
            <h4 className="text-2xl font-bold">Testnet Launch</h4>
            <p className="text-sm text-gray-300/60 text-center">
              Deploy Mintellect on EduChain testnet, <br /> allow users to
              explore, learn, and mint <br /> demo NFTs.
            </p>
          </motion.div>

          <svg
            width="199"
            height="18"
            viewBox="0 0 199 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-90 md:rotate-0  md:h-auto w-30"
          >
            <path
              d="M198.66 9L190 0.339746L181.34 9L190 17.6603L198.66 9ZM190 9V7.5H186.042V9V10.5H190V9ZM178.125 9V7.5H170.208V9V10.5H178.125V9ZM162.292 9V7.5L154.375 7.5V9V10.5H162.292V9ZM146.458 9V7.5H138.542V9V10.5H146.458V9ZM130.625 9V7.5L122.708 7.5V9V10.5H130.625V9ZM114.792 9V7.5H106.875V9V10.5H114.792V9ZM98.9583 9V7.5H91.0417V9V10.5H98.9583V9ZM83.125 9V7.5H75.2083V9V10.5H83.125V9ZM67.2917 9V7.5L59.375 7.5V9V10.5H67.2917V9ZM51.4583 9V7.5H43.5417V9V10.5L51.4583 10.5V9ZM35.625 9V7.5H27.7083V9V10.5H35.625V9ZM19.7917 9V7.5H11.875V9V10.5H19.7917V9ZM3.95831 9V7.5H0V9V10.5H3.95831V9Z"
              fill="url(#paint0_linear_217_242)"
              fill-opacity="0.56"
            />
            <defs>
              <linearGradient
                id="paint0_linear_217_242"
                x1="0"
                y1="8.5"
                x2="190"
                y2="8.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#999999" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
            </defs>
          </svg>

          <motion.div
            className="border border-secondary/40 rounded-4xl p-4 flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-b w-fit rounded-full p-1 from-primary to-secondary">
              <img src="/rocket.png " className="w-15 h-15" alt="" />
            </div>
            <p className="text-secondary font-medium">phase 2</p>
            <h4 className="text-2xl font-bold">Mainnet Launch</h4>
            <p className="text-sm text-gray-300/60 text-center">
              Official Mintellect launch on EduChain <br /> mainnet with core
              features: Browse, Learn, <br /> Quiz, Mint.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="md:relative md:my-30 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/bunny.png"
            className="md:absolute hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:block"
            alt=""
          />
          <svg
            width="18"
            height="199"
            viewBox="0 0 18 199"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:absolute right-40  h-30"
          >
            <path
              d="M9 198.66L17.6603 190L9 181.34L0.339746 190L9 198.66ZM9 190H10.5V186.042H9H7.5L7.5 190H9ZM9 178.125H10.5L10.5 170.208H9H7.5L7.5 178.125H9ZM9 162.292H10.5V154.375H9H7.5L7.5 162.292H9ZM9 146.458H10.5L10.5 138.542H9H7.5L7.5 146.458H9ZM9 130.625H10.5V122.708H9H7.5L7.5 130.625H9ZM9 114.792H10.5L10.5 106.875H9H7.5L7.5 114.792H9ZM9 98.9583H10.5L10.5 91.0417H9H7.5L7.5 98.9583H9ZM9 83.125H10.5L10.5 75.2083H9H7.5L7.5 83.125H9ZM9 67.2917H10.5V59.375H9H7.5L7.5 67.2917H9ZM9 51.4583H10.5L10.5 43.5417H9H7.5L7.5 51.4583H9ZM9 35.625H10.5L10.5 27.7083H9H7.5L7.5 35.625H9ZM9 19.7917H10.5L10.5 11.875H9H7.5L7.5 19.7917H9ZM9 3.95831H10.5V0H9H7.5L7.5 3.95831H9Z"
              fill="white"
              fill-opacity="0.56"
            />
          </svg>
        </motion.div>
        <motion.div
          className="flex items-center gap-30  flex-col-reverse md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="border border-secondary/40 rounded-4xl p-4 flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-b w-fit rounded-full p-1 from-primary to-secondary">
              <img src="/growth.png" className="w-15 h-15" alt="" />
            </div>
            <p className="text-secondary font-medium">phase 4</p>
            <h4 className="text-2xl font-bold">Edu Growth & Rewards</h4>
            <p className="text-sm text-gray-300/60 text-center">
              Partnerships, learning challenges, and <br /> reward programs for
              active edu-chain <br /> collectors.
            </p>
          </motion.div>

          <svg
            width="199"
            height="18"
            viewBox="0 0 199 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-90 md:rotate-180 md:h-auto w-30"
          >
            <path
              d="M198.66 9L190 0.339746L181.34 9L190 17.6603L198.66 9ZM190 9V7.5H186.042V9V10.5H190V9ZM178.125 9V7.5H170.208V9V10.5H178.125V9ZM162.292 9V7.5L154.375 7.5V9V10.5H162.292V9ZM146.458 9V7.5H138.542V9V10.5H146.458V9ZM130.625 9V7.5L122.708 7.5V9V10.5H130.625V9ZM114.792 9V7.5H106.875V9V10.5H114.792V9ZM98.9583 9V7.5H91.0417V9V10.5H98.9583V9ZM83.125 9V7.5H75.2083V9V10.5H83.125V9ZM67.2917 9V7.5L59.375 7.5V9V10.5H67.2917V9ZM51.4583 9V7.5H43.5417V9V10.5L51.4583 10.5V9ZM35.625 9V7.5H27.7083V9V10.5H35.625V9ZM19.7917 9V7.5H11.875V9V10.5H19.7917V9ZM3.95831 9V7.5H0V9V10.5H3.95831V9Z"
              fill="url(#paint0_linear_217_242)"
              fill-opacity="0.56"
            />
            <defs>
              <linearGradient
                id="paint0_linear_217_242"
                x1="0"
                y1="8.5"
                x2="190"
                y2="8.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#999999" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
            </defs>
          </svg>

          <motion.div
            className="border border-secondary/40 rounded-4xl p-4 flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-b w-fit rounded-full p-1 from-primary to-secondary">
              <img src="/more.png" className="w-15 h-15" alt="" />
            </div>
            <p className="text-secondary font-medium">phase 3</p>
            <h4 className="text-2xl font-bold">Marketplace & more</h4>
            <p className="text-sm text-gray-300/60 text-center">
              Enable NFT trading and tools for creators <br /> to launch their
              own Learn-to-Mint <br /> collections.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
    </div>
    </>
  );
}

export default RoadMap;
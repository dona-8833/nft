import React from "react";
import { PiStarFourBold } from "react-icons/pi";
import { motion } from "framer-motion";

function Reasson() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="w-full relative pb-10 " id="about">
      <div className="flex items-center w-full md:gap-10  gap-4 flex-col-reverse md:flex-row justify-center">
        {/* Text Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h1 className="text-3xl md:text-3xl   text-center md:text-left font-black">
            <svg
              width="162"
              height="22"
              viewBox="0 0 162 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-2"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M43.1785 9.04427C36.2186 7.05616 28.183 5.07762 20.4527 4.58359C13.8455 4.16192 7.46356 4.81685 2.23983 7.60343C1.50347 7.99579 0.581354 7.72606 0.183125 6.99996C-0.215712 6.27446 0.0586752 5.36591 0.795035 4.97296C6.49348 1.93398 13.4418 1.13908 20.6488 1.59962C28.5181 2.10203 36.6988 4.09376 43.7983 6.11058C44.6221 4.46638 46.3279 2.93343 49.3329 1.80241C53.9483 0.064913 60.2502 0.086447 66.8889 1.06555C76.5175 2.48486 86.8751 5.86953 93.5345 8.27452C93.8077 8.37261 94.2144 8.5287 94.7122 8.73445C94.8639 8.4043 95.0339 8.07892 95.2221 7.75953C96.8551 4.97594 99.7447 2.72528 102.689 1.92142C121.362 -3.17565 143.155 2.93164 160.9 7.9019C161.701 8.12739 162.168 8.95514 161.944 9.74883C161.713 10.5425 160.875 11.0037 160.068 10.7782C142.821 5.94667 121.647 -0.149208 103.496 4.80372C101.262 5.41378 99.089 7.14349 97.8506 9.256C97.711 9.49166 97.5896 9.73269 97.4743 9.97732C99.9207 11.1717 102.798 12.8369 104.346 14.6192C105.937 16.4464 106.331 18.3969 104.947 20.239C103.757 21.8138 101.954 21.9478 100.079 21.1314C98.057 20.257 95.9748 18.2127 95.301 17.2533C94.0383 15.4614 93.6377 13.5175 93.8684 11.6221C93.2734 11.3745 92.7902 11.1903 92.4922 11.0826C85.9785 8.73088 75.8546 5.41136 66.4397 4.02315C60.3819 3.12958 54.6276 3.01058 50.4158 4.59556C48.6196 5.27202 47.4327 6.0615 46.7887 6.9778C48.0598 7.35222 49.2855 7.72066 50.4565 8.07235C52.7724 8.76795 57.5943 9.91929 61.0393 11.9714C63.779 13.603 65.6366 15.8226 65.5285 18.605C65.4733 20.0345 64.6337 20.9885 63.2976 21.5232C61.301 22.3217 57.848 21.9353 56.5623 21.6661C52.6626 20.8515 47.4577 17.4794 44.8825 13.6796C43.8548 12.1634 43.2435 10.5772 43.1785 9.04427ZM46.3819 9.97852C47.4837 10.3051 48.5485 10.6257 49.5714 10.9331C51.7332 11.5826 56.2521 12.6144 59.4689 14.5307C61.1723 15.5451 62.563 16.7605 62.4957 18.4908C62.4902 18.6253 62.3548 18.6636 62.2352 18.7186C62.0501 18.803 61.8382 18.861 61.6124 18.9065C60.0844 19.2139 58.032 18.9166 57.1918 18.7408C53.9198 18.0572 49.5672 15.2072 47.4066 12.0187C46.9501 11.3452 46.5865 10.6592 46.3819 9.97852ZM96.8672 12.999C98.2938 13.7221 99.7872 14.5965 100.965 15.5481C101.59 16.0535 102.118 16.5732 102.452 17.1127C102.731 17.5589 102.841 18.0159 102.507 18.4573C102.373 18.6361 102.173 18.6397 101.967 18.6062C101.748 18.5703 101.523 18.4938 101.299 18.3951C99.8175 17.7527 98.2877 16.2521 97.796 15.5481C97.2193 14.7317 96.934 13.868 96.8672 12.999Z"
                fill="white"
              />
            </svg>
            Why Start Your NFT <br /> Journey with <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mintellect?
            </span>
          </h1>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="h-[500px] w- md:w-[800px] overflow-hidden md:rounded-3xl rounded-none mb-10 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src="/jelly.png" alt="NFT Jelly" className="h-full w-full" />
        </motion.div>
      </div>

      {/* Stars */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        className="md:absolute top-0 left-5"
      >
        <PiStarFourBold className="text-white text-2xl" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        className="md:absolute md:top-[90px] top-[150px] right-0 md:left-[50px]"
      >
        <PiStarFourBold className="text-white text-2xl" />
      </motion.div>

      {/* Bottom Features */}
      <div className="flex flex-col md:flex-row gap-3 w-full py-9 items-center justify-between">
        {/* Feature 1 */}
        <motion.div
          className="flex relative flex-col items-center justify-center text-center max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ delay: 0 }}
        >
          {/* SVG stays the same */}
          <p className="text-2xl md:text-2xl font-extrabold text-secondary mb-4">
            Learn to Own
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Mintellect makes NFT ownership <br /> educational with gamified
            learning <br /> and quizzes tied to real rewards.
          </p>
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          className="flex relative flex-col items-center justify-center text-center max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          <p className="text-2xl md:text-2xl font-extrabold text-secondary mb-4">
            Knowledge-Backed NFTs
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Get access to limited-edition <br /> collections designed to combine
            art, <br /> knowledge, and utility.
          </p>
        </motion.div>

        {/* Feature 3 */}
        <motion.div
          className="flex relative flex-col items-center justify-center text-center max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ delay: 0.4 }}
        >
          <p className="text-2xl md:text-2xl font-extrabold text-secondary mb-4">
            Community-Powered Growth
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Join a growing ecosystem of creators, <br /> learners, and
            collectors shaping the <br /> next wave of digital ownership.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Reasson;

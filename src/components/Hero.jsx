import React from "react";
import { motion } from "framer-motion";
import Layout from "./Layout";
import NftCard from "./ui/NftCard";
import HeroSide from "./ui/HeroSide";

function Hero() {
  return (
    <div data-theme="NFT" className="mt-8 relative z-0">
      {/* Small subtitle */}
      <motion.p
        className="text-gray-200 font-extralight text-[10px] text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Reinventing the NFT Experience
      </motion.p>

      {/* Main headline */}
      <motion.div
        className="flex md:flex-row flex-col items-center justify-center mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.p
          className="text-4xl font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Mint with
        </motion.p>

        <motion.div
          className="overflow-hidden w-fit rounded-full object-contain bg-gray-100"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <img src="/hero.png" className="hidden md:block" alt="" />
        </motion.div>

        <motion.p
          className="text-4xl font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Knowledge,
        </motion.p>
      </motion.div>

      <motion.p
        className="text-4xl md:mt-3 font-bold text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        Own{" "}
        <span className="text-4xl text-secondary font-bold">
          Smarter
        </span>
      </motion.p>

      {/* NFT Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <NftCard />
      </motion.div>

      {/* HeroSide */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <HeroSide />
      </motion.div>

      {/* Trusted by logos */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
      >
        <p className="text-center font-bold">Trusted by</p>
        <div className="flex flex-wrap justify-around mt-5">
          <div className="w-30 h-15">
            <img src="/base.png" alt="" />
          </div>
          <div className="w-30 h-15">
            <img src="/Novous.png" alt="" />
          </div>
          <div className="w-30 h-15">
            <img src="/vista.png" alt="" />
          </div>
          <div className="w-30 h-15">
            <img src="/africa.png" alt="" />
          </div>
        </div>

        <motion.div
          className="w-10 md:w-15 absolute md:top-45 md:right-65 top-50 right-1"
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.9 }}
        >
          <img src="/star.png" alt="" />
        </motion.div>

        <motion.div
          className="w-10 md:w-15 rounded-2xl overflow-hidden absolute md:top-5 md:left-40 rotate-20 top-0 left-2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 2.1 }}
        >
          <img src="/ugly.png" alt="" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;

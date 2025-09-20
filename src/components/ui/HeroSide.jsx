import React from "react";
import { motion } from "framer-motion";

function HeroSide() {
  const slideFade = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="flex w-full items-center justify-between absolute top-100 bg-transparent"
      data-theme="NFT"
      variants={slideFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="flex items-center justify-center gap-4">
        <motion.div
          className="md:h-35 md:w-10 rounded-xl backdrop-blur-2xl border border-primary bg-base-300"
          variants={slideFade}
        />
        <motion.div
          className="md:h-7 md:w-10 rounded-xl backdrop-blur-2xl border border-secondary bg-base-300"
          variants={slideFade}
        />
      </div>
      <div className="flex items-center justify-center gap-4">
        <motion.div
          className="md:h-7 md:w-10 rounded-xl backdrop-blur-2xl border border-secondary bg-base-300"
          variants={slideFade}
        />
        <motion.div
          className="md:h-35 md:w-10 rounded-xl backdrop-blur-2xl border border-primary bg-base-300"
          variants={slideFade}
        />
      </div>
    </motion.div>
  );
}

export default HeroSide;

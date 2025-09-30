import React from "react";
import CardStack from "./ui/CardStack";
import { motion } from "framer-motion";

function Discover() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <div className="mt-8 relative overflow-hidden" id="explore" >
        <div className="absolute -top-0 left-1/2 -translate-x-1/2 z-10 flex justify-center">
          <div className="w-100 h-40 bg-secondary/10 blur-3xl rounded-full"></div>
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="text-xs pt-5 text-gray-200 font-light text-center">
            Discover Top NFT Collections
          </p>
          <h1 className="text-center font-bold text-4xl pt-5">
            Featured on{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mintellect
            </span>
          </h1>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <CardStack />
        </motion.div>
      </div>
    </>
  );
}

export default Discover;

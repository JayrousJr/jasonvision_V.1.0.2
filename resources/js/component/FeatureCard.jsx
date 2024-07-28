import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
const FeatureCard = ({ item, index }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="flex flex-col shadow-xl justify-center items-center p-4 mt-14 border border-semi-dark  rounded-xl"
    >
      <img src={item.imgURL} alt={item.label} className="self-start w-12" />
      <p className="self-start text-2xl font-montserrat font-bold mt-4">
        {item.label}
      </p>
      <p className="self-start text-lg font-montserrat mt-4">{item.subtext}</p>
    </motion.div>
  );
};

export default FeatureCard;

import FeatureCard from "@/component/FeatureCard";
import React from "react";
import { services } from "@/constants";
import { staggerContainer, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { HigherOrderComponentWrapper } from "@/hoc";
const Features = () => {
  return (
    <motion.section>
      <section id="features" className="gap-10 w-full max-container">
        <motion.div
          variants={textVariant()}
          className="pt-1 flex flex-1 flex-col"
        >
          <h1 className="font-palanquin text-4xl font-black sm:max-w-lg">
            Why Let <span className="text-semi-dark inline-block"> Us </span>
            <br />
            <span className="text-semi-dark inline-block"> Serve </span> You
          </h1>
        </motion.div>
        <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-12 pb-10 px-4">
          {services.map((item, index) => (
            <Tilt
              key={item.label}
              options={{
                max: 20,
                scale: 1,
                speed: 450,
              }}
            >
              <FeatureCard item={item} index={index} />
            </Tilt>
          ))}
        </div>
      </section>
    </motion.section>
  );
};

export default HigherOrderComponentWrapper(Features, "features");

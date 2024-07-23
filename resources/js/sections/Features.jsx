import FeatureCard from "@/component/FeatureCard";
import React from "react";
import { services } from "@/constants";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
const Features = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      variants={staggerContainer()}
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl relative z-0"
    >
      <section
        id="features"
        className="border-t border-semi-dark gap-10 w-full max-container mt-10"
      >
        <div className="pt-1 flex flex-1 flex-col">
          <h1 className="mt-10 font-palanquin text-4xl font-bold sm:max-w-lg">
            Why Let <span className="text-semi-dark inline-block"> Us </span>
            <br />
            <span className="text-semi-dark inline-block"> Serve </span> You
          </h1>
        </div>
        <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-12 pb-10 px-4">
          {services.map((item) => (
            <Tilt
              key={item.label}
              options={{
                max: 20,
                scale: 1,
                speed: 450,
              }}
            >
              <FeatureCard item={item} />
            </Tilt>
          ))}
        </div>
      </section>
    </motion.section>
  );
};

export default Features;

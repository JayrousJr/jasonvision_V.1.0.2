import ServiceCard from "@/component/ServiceCard";
import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { staggerContainer, textVariant } from "@/utils/motion";
const Services = ({ service }) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-16 px-6 sm:py-4 py-10 max-w-7xl mx-auto relative z-0 max-container max-sm:mt-12"
      id="service"
    >
      <motion.div
        variants={textVariant()}
        className="flex flex-col justify-start pt-16"
      >
        <h2 className="text-4xl font-palanquin font-black text-white">
          Our <span className="text-semi-dark"> Services </span>
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-white font-semibold">
          Discover the Best services we offer from out experienced Designers,
          Programmers and Engineers
        </p>
      </motion.div>
      <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 sm:gap-4 gap-4">
        {service?.service?.data.map((item, index) => (
          <Tilt
            key={index}
            options={{
              max: 20,
              scale: 1,
              speed: 450,
            }}
          >
            <ServiceCard
              key={item.name}
              service={item}
              baseURl={service.baseUrl}
              index={index}
            />
          </Tilt>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;

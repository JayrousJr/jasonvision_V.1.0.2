import ButtonTwo from "@/component/ButtonTwo";
import React, { useEffect, useState } from "react";
import { slides } from "@/constants";
import { HigherOrderComponentWrapper } from "@/hoc";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "@/utils/motion";
const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % slides.length);
  };
  useEffect(() => {
    const intervalID = setInterval(nextImage, 5000);
    return () => clearInterval(intervalID);
  }, []);
  return (
    <motion.section
      id="about"
      className="flex justify-between max-lg:flex-col items-center gap-12 max-container overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex flex-1 flex-col"
      >
        <motion.h1
          variants={textVariant()}
          className="mt-10 font-palanquin text-4xl font-black sm:max-w-lg"
        >
          We Provide{" "}
          <span className="text-semi-dark inline-block"> Super </span>
          <br />
          Products
          <span className="text-semi-dark inline-block"> Quality </span>{" "}
        </motion.h1>

        <p className="text-md mt-6 font-montserrat sm:max-w-lg flex flex-col gap-4">
          <span className="">
            We revolutionize the way you approach business growth. Our
            innovative solutions in LED installation, software development, and
            smart parking systems are designed to transform your operations and
            enhance efficiency.
          </span>
          <span>
            We empower you to think beyond traditional boundaries, equipping you
            with the tools and expertise to scale new heights. Get ready to
            redefine your success with Jason Vision Technology, where your
            growth is our mission.
          </span>
        </p>
        <div className="mt-11 sm:max-w-sm">
          <ButtonTwo label="Get More Details" href="#contact" />
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex justify-center items-center"
      >
        <img
          src={slides[currentImageIndex]}
          alt="About Image"
          className="object-cover mt-14 transition-all ease-in-out duration-300 w-[720px] h-[440px] rounded-2xl"
        />
      </motion.div>
    </motion.section>
  );
};

export default HigherOrderComponentWrapper(About, "about");

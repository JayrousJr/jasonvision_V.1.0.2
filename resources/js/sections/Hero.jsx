import ButtonTwo from "@/component/ButtonTwo";
import arrowRight from "../../../public/assets/icons/chevron-right.svg";
import React, { useState } from "react";
import { heroEmage, statistics } from "@/constants";
import bg2 from "../../../public/assets/images/bg2.png";
import ImageCard from "@/component/ImageCard";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";

const Hero = () => {
  const [image, setImage] = useState(bg2);
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <section className="w-full relative flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-[208px] ">
          <p className="text-xl mt-4 font-montserrat text-slate-100">
            Everything you need to grow your business
          </p>
          <motion.h1
            variants={textVariant()}
            className="mt-10 font-palanquin text-8xl max-sm:text-[72px] leading-none font-bold text-white"
          >
            <span className="xl:whitespace-nowrap relative z-10 pr-10">
              Let us <span className="text-semi-dark inline-block"> Take </span>
            </span>
            <br />
            You Through
          </motion.h1>
          <motion.p
            variants={textVariant()}
            className="font-montserrat text-slate-100 text-lg leading-8 mt-6 mb-10 sm:max-w-sm"
          >
            Discover the quality, affordable and effective ways to grow your
            business.
          </motion.p>
          <ButtonTwo
            label="View Our Services"
            iconUrl={arrowRight}
            href="/#service"
          />
          <motion.div
            variants={textVariant()}
            className="flex justify-start items-center max-md:flex-col flex-wrap w-full mt-16 gap-16"
          >
            {statistics.map((item) => (
              <div key={item.label}>
                <p className="text-white text-4xl font-bold font-palanquin">
                  {item.value}
                </p>
                <p className="text-white text-md leading-6 font-montserrat">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="relative flex flex-1 flex-col justify-center items-center xl:min-h-screen max-xl:pt-10  bg-center bg-cover max-sm:px-4 gap-10">
          <img
            src={image}
            alt="Service Collection"
            className="object-cover relative z-10 h-[400px] w-[610px] rounded-md"
          />
          <div className="flex sm:gap-6 gap-4 ">
            {heroEmage.map((item) => (
              <div key={item.image}>
                <ImageCard
                  imgUrl={item}
                  changeImage={(item) => {
                    setImage(item);
                  }}
                  bigImage={image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default Hero;

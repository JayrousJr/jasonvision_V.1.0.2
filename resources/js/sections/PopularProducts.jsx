import React from "react";
import BlogPost from "@/component/BlogPost";
import { Link } from "@inertiajs/react";
import cheveronRight from "../../../public/assets/icons/chevron-right.svg";
import Button from "@/component/Button";
import { Tilt } from "react-tilt";
import { staggerContainer, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
const PopularProducts = (post) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-16 px-6 sm:py-4 py-10 max-w-7xl mx-auto relative z-0 max-container max-sm:mt-12"
      id="popular"
    >
      <motion.div
        variants={textVariant()}
        className="flex flex-col justify-start"
      >
        <h2 className="text-4xl font-palanquin font-black text-white">
          Our <span className="text-semi-dark"> Popular </span> OnSite Services
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-white font-semibold">
          Experience top-notch quality LED Screens, Software systems and Smart
          Parking
        </p>
      </motion.div>
      <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-4">
        {post.post?.data.map((item, index) => (
          <Tilt
            key={index}
            options={{
              max: 20,
              scale: 1,
              speed: 450,
            }}
          >
            <BlogPost {...item} baseUrl={post.baseUrl} index={index} />
          </Tilt>
        ))}
      </div>
      <div className="mt-8 ml-2 lg:text-xl sm:text-xl font-montserrat  text-dark-background hover:text-semi-dark sm:max-w-sm">
        {post.post?.data.length < 5 && (
          <Button
            label="View More Posts"
            iconUrl={cheveronRight}
            href={route("blog")}
          />
        )}
      </div>
    </motion.section>
  );
};

export default PopularProducts;
// export default PopularProducts;

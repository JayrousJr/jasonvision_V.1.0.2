import React from "react";
import BlogPost from "@/component/BlogPost";
import { Link } from "@inertiajs/react";
import cheveronRight from "../../../public/assets/icons/chevron-right.svg";
import Button from "@/component/Button";
import { Tilt } from "react-tilt";
const PopularProducts = (post) => {
  return (
    <section
      id="popular"
      className="max-container max-sm:mt-12 border-t border-semi-dark"
    >
      <div className="flex flex-col justify-start pt-16">
        <h2 className="text-4xl font-palanquin font-bold text-white">
          Our <span className="text-semi-dark"> Popular </span> OnSite Services
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-white font-semibold">
          Experience top-notch quality LED Screens, Software systems and Smart
          Parking
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-4">
        {post.post.data.map((item, index) => (
          <Tilt
            options={{
              max: 20,
              scale: 1,
              speed: 450,
            }}
          >
            <BlogPost key={index} {...item} baseUrl={post.baseUrl} />
          </Tilt>
        ))}
      </div>
      <div className="mt-8 ml-2 lg:text-xl sm:text-xl font-montserrat  text-dark-background hover:text-semi-dark sm:max-w-sm">
        {post.post.data.length < 5 && (
          <Button
            label="View More Posts"
            iconUrl={cheveronRight}
            href={route("blog")}
          />
        )}
      </div>
    </section>
  );
};

export default PopularProducts;

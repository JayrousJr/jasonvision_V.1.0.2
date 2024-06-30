import Button from "@/component/Button";
import { bg4 } from "../../../public/assets/images/index";
import React, { useEffect, useState } from "react";
import { slides } from "@/constants";
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
    <section
      id="about"
      className="border-t border-semi-dark flex justify-between max-lg:flex-col items-center gap-10 w-full max-container"
    >
      <div className="pt-14 flex flex-1 flex-col">
        <h1 className="mt-10 font-palanquin text-4xl font-bold sm:max-w-lg">
          We Provide{" "}
          <span className="text-semi-dark inline-block"> Super </span>
          <br />
          <span className="text-semi-dark inline-block"> Quality </span>{" "}
          Products
        </h1>

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
          <Button label="Get More Details" href="#contact" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={slides[currentImageIndex]}
          alt="About Image"
          className="object-cover mt-14 ease-in-out duration-300 w-[720px] h-[440px]"
        />
      </div>
    </section>
  );
};

export default About;

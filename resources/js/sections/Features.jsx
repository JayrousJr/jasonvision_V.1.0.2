import Button from "@/component/Button";
import FeatureCard from "@/component/FeatureCard";
import React from "react";
import { services } from "@/constants";
const Features = () => {
  return (
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
          <FeatureCard item={item} />
        ))}
      </div>
    </section>
  );
};

export default Features;

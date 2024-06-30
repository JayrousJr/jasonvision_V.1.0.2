import ServiceCard from "@/component/ServiceCard";
import React from "react";

const Services = ({ service }) => {
  return (
    <section
      id="service"
      className="max-container max-sm:mt-12  border-t border-semi-dark"
    >
      <div className="flex flex-col justify-start pt-16">
        <h2 className="text-4xl font-palanquin font-bold text-white">
          Our <span className="text-semi-dark"> Services </span>
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-white font-semibold">
          Discover the Best services we offer from out experienced Designers,
          Programmers and Engineers
        </p>
      </div>
      <div className="mt-16 grid  lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 sm:gap-4 gap-4">
        {service.service.data.map((item) => (
          <ServiceCard
            key={item.name}
            service={item}
            baseURl={service.baseUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;

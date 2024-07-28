import { Link } from "@inertiajs/react";
import React from "react";
import Button from "./Button";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
const ServiceCard = ({ service, baseURl, index }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="flex flex-col justify-center items-center border border-semi-dark p-4 rounded-xl my-6"
    >
      <img
        src={baseURl + "/storage/" + service.image}
        alt={service.name}
        className="rounded-xl"
      />
      <h1 className="flex self-start mt-4 text-2xl font-montserrat font-bold">
        {service.name}
      </h1>
      <p
        className="text-md font-montserrat mt-6"
        // dangerouslySetInnerHTML={{
        //   __html: service.description.substring(3, 120),
        // }}
      >
        {service.description.substring(3, 120) + " .... "}
        <Link className="info-text" href={route("service", service.slug)}>
          {" "}
          read more
        </Link>
      </p>
      <div className="flex items-center self-start mt-4 gap-2">
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarHalf />
      </div>
      <div className="mt-11 self-start">
        <Button label="Read More" href={route("service", service.slug)} />
      </div>
    </motion.div>
  );
};

export default ServiceCard;

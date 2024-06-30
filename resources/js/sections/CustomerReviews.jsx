import ReviewCard from "@/component/ReviewCard";
import { reviews } from "@/constants";
import React from "react";

const CustomerReviews = () => {
  return (
    <section className="max-container  border-t border-semi-dark">
      <h2 className="text-4xl font-palanquin font-bold text-white mt-14">
        What Our <span className="text-semi-dark"> Customers </span>Say?
      </h2>
      <p className=" font-montserrat text-pale-blue mt-4 max-w-lg ">
        Hear the genuine stories from our satisfied customers about their
        exceptional experience with us.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((item) => (
          <ReviewCard key={item.customerName} {...item} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;

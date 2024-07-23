import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="Customer"
        className="rounded-full object-cover w-[120px] h-[120px] "
      />
      <p className="mt-6 max-w-sm text-center font-montserrat">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-4 font-montserrat mb-4">
        <BsStarFill className="text-xl text-light-bg" />
        <p className="font-montserrat">({rating})</p>
      </div>
      <h3 className="font-montserrat text-xl font-bold">{customerName}</h3>
    </div>
  );
};
export default ReviewCard;

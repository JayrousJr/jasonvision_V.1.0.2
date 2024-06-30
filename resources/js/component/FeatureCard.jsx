import React from "react";

const FeatureCard = ({ item }) => {
  return (
    <div className="flex flex-col shadow-xl justify-center items-center p-4 mt-14 border border-semi-dark  rounded-xl">
      <img src={item.imgURL} alt={item.label} className="self-start w-12" />
      <p className="self-start text-2xl font-montserrat font-bold mt-4">
        {item.label}
      </p>
      <p className="self-start text-lg font-montserrat mt-4">{item.subtext}</p>
    </div>
  );
};

export default FeatureCard;

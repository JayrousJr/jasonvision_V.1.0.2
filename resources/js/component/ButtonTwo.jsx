import { Link } from "@inertiajs/react";
import React from "react";

const ButtonTwo = ({ label, iconUrl, href }) => {
  return (
    <a
      className="bg-semi-dark flex justify-center items-center rounded-full px-7 py-3 gap-2 border border-semi-dark hover:bg-dark-background font-montserrat leading-none text-md text-white"
      href={href}
    >
      {label}
      {iconUrl && (
        <img src={iconUrl} alt="Button Image" className="ml-2 w-5 h-5" />
      )}
    </a>
  );
};

export default ButtonTwo;

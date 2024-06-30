import React from "react";
import logo from "../../../public/assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "@inertiajs/react";
import { navigation } from "@/constants";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="padding-x py-6 z-20 w-full fixed  top-0 bg-gradient-custom shadow-2xl">
      <nav className="flex justify-between max-container ">
        <Link href="/">
          <img src={logo} alt="logo" width={40} />
        </Link>
        <ul className="flex flex-1 justify-end pr-8 items-center gap-12 max-lg:hidden">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                arial-current={item.current ? "page" : undefined}
                className="text-white font-montserrat leading-normal text-md hover:text-light-bg"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="hidden max-lg:block flex self-center cursor-pointer z-20"
        >
          {isOpen ? (
            <IoMdClose className="text-white text-3xl" />
          ) : (
            <GiHamburgerMenu className="text-white text-3xl" />
          )}
        </div>

        <div
          className={`w-[80vw] h-full bg-dark-background bg-gradient-custom z-12 top-0 left-0 fixed  border border-semi-dark ease-in-out duration-300 ${
            isOpen ? "translate-x-0" : " -translate-x-full"
          }`}
        >
          <div className="mt-5 ml-7">
            <Link href="/" className="relative">
              <img src={logo} alt="logo" width={40} />
            </Link>
          </div>
          <ul className="mt-10 ml-7 gap-5 flex flex-col items-start justify-center">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  arial-current={item.current ? "page" : undefined}
                  className="text-light-bg hover:text-light-bg font-bold font-montserrat leading-normal text-xl"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;

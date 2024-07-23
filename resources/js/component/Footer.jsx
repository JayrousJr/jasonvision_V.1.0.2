import { Link } from "@inertiajs/react";
import logo from "../../../public/assets/images/logo.png";
import React from "react";
import {
  BsLinkedin,
  BsTwitterX,
  BsWhatsapp,
  BsGithub,
  BsTiktok,
  BsYoutube,
  BsInstagram,
  BsDiscord,
} from "react-icons/bs";
import DynamicIcons from "./DynamicIcon";
import { navigation } from "@/constants";
const Footer = ({ social, service }) => {
  const date = new Date().getFullYear("Y");
  return (
    <section className="max-container border-t border-semi-dark pb-6 padding">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <Link href="/" className="flex justify-center items-center gap-4">
            <img src={logo} alt="Logo" width={40} />{" "}
            <span className="text-white font-montserrat font-light">
              Jason Vision Technologies
            </span>
          </Link>
          <p className="text-white font-montserrat mt-6 text-base sm:max-w-sm">
            Get the Best services from our official service Providers in
            Tanzania{" "}
          </p>
          <div className="flex items-center gap-5 mt-8 max-md:flex-wrap">
            {social.data.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                className="text-light-bg hover:text-white dark:hover:text-white border border-light-bg p-2 rounded-full"
              >
                <DynamicIcons iconName={item.icon} />
                <span className="sr-only">Icon</span>
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-end max-md:justify-start lg:gap-10 gap-20 flex-wrap">
          <div>
            <h1 className="mb-2 font-bold font-montserrat">Quick Links</h1>
            <div className="flex flex-col gap-2">
              {" "}
              {navigation.map((item) => (
                <Link
                  href={item.href}
                  className="hover:text-light-bg font-montserrat"
                  key={item.name}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h1 className="mb-2 font-bold font-montserrat">Services</h1>
            <div className="flex flex-col gap-2">
              {" "}
              {service.data.map((item) => (
                <Link
                  href={route("service", item.slug)}
                  className="hover:text-light-bg font-montserrat"
                  key={item.name}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="flex justify-between items-center mt-6 border-t border-slate-700">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mt-12">
          © 2018 - {date}{" "}
          <a
            href="https://jasonvisiontechnologies.com"
            className="text-semi-dark hover:text-light-bg"
          >
            Jason Vision Technologies™.
          </a>{" "}
          All Rights Reserved.
        </span>
      </div>
    </section>
  );
};

export default Footer;

import { Link } from "@inertiajs/react";
import logo from "../../../public/assets/images/logo.png";

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
import { useEffect } from "react";
import DynamicIcons from "./DynamicIcon";
function Footer({ props, social }) {
  const net = social.data;
  const navigation = [
    {
      name: "Home",
      href: route("home"),
      current: false,
      active: route().current("home"),
    },

    {
      name: "Contact Us",
      href: route("contact"),
      current: false,
      active: route().current("contact"),
    },
    {
      name: "About Us",
      href: route("about"),
      current: false,
      active: route().current("home"),
    },

    {
      name: "Blog",
      href: route("blog"),
      current: false,
      active: route().current("blog"),
    },
  ];

  const date = new Date().getFullYear("Y");
  const data = props.data;
  return (
    <>
      <footer className="bg-white dark:bg-white border-top border-2 py-20 ">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href={route("home")} className="flex items-center">
                <img src={logo} className="h-8 me-3" alt="Comapny Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-slate-900">
                  Jason Vision Technologies
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-8 sm:grid-cols-2">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-slate-900">
                  Our Services
                </h2>
                <ul className="text-gray-500 dark:text-gray-600 font-medium">
                  {data.map((item, index) => (
                    <li className="mb-4" key={index}>
                      <Link
                        href={route("service", item.slug)}
                        className="hover:text-slate-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-slate-900">
                  Quick Pages
                </h2>
                <ul className="text-gray-700 dark:text-gray-700 font-medium">
                  {navigation.map((item, index) => (
                    <li className="mb-4" key={index}>
                      <Link href={item.href} className="hover:text-slate-900 ">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-slate-900">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-500 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:text-slate-900">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-slate-900">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2018 - {date}{" "}
              <a
                href="https://flowbite.com/"
                className="text-slate-900 hover:text-slate-500"
              >
                Jason Vision Technologies
                {/* ™ */}
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              {net.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-slate-900 pl-3"
                >
                  <DynamicIcons iconName={item.icon} />
                  <span className="sr-only">Icon</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

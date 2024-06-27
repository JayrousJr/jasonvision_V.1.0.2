import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BsXLg, BsList, BsEmojiHeartEyesFill } from "react-icons/bs";
import logo from "../../../public/assets/images/logo.png";
import { Link } from "@inertiajs/react";
const navigation = [
  {
    name: "Home",
    href: route("home"),
    current: false,
    active: route().current("home"),
  },
  // {
  //   name: "Our Services",
  //   href: "/#service",
  //   current: false,
  //   active: route().current("home"),
  // },
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
    active: route().current("about"),
  },

  {
    name: "Blog",
    href: route("blog"),
    current: false,
    active: route().current("blog"),
  },

  {
    name: "Job",
    href: route("job"),
    current: false,
    active: route().current("job"),
  },
];

const userNavigationLogged = [
  { name: "Your Profile", href: route("dashboard") },
  { name: "Log out", href: route("logout"), type: "button", as: "button" },
];

const userNavigationNotLogged = [
  { name: "Sign In", href: route("login") },
  { name: "Register", href: route("register") },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation({ props }) {
  const auth = props.auth;
  const userdata = props.auth.user;
  const baseUrl = props.baseUrl;
  const user = {
    name: auth === userdata?.name,
    email: auth === userdata?.email,
    imageUrl: baseUrl + "/storage/" + userdata?.profile_photo_path,
  };
  return (
    <>
      <div className="min-h-full w-full z-10 shadow-md sticky">
        <Disclosure as="nav" className="bg-white">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl py-3 px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex-shrink-0">
                    <img className="h-8 w-8" src={logo} alt="Your Company" />
                  </div>
                  <div className="flex items-center">
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="text-slate-900 hover:bg-gray-100 rounded-md px-3 py-2 text-sm font-medium "
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <BsXLg className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <BsList className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={
                        "text-slate-900 block  hover:bg-gray-100 rounded-md px-3 py-2 text-base font-medium"
                      }
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}

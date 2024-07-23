import { BsEnvelope, BsPhone, BsWhatsapp } from "react-icons/bs";
import { shieldTick, support, truckFast } from "../../../public/assets/icons";
import {
  customer,
  customer2,
  bg1,
  bg2,
  bg3,
  bg4,
  car,
  bg6,
  soft,
  customer3,
} from "../../../public/assets/images";
export const slides = [soft, bg4, bg6, car];
export const contacts = [
  {
    icon: BsEnvelope,
    description: "jasonvision2015@gmail.com",
    link: "https://jasonvision2015@gmail.com",
    target: "_blank",
  },
  {
    icon: BsWhatsapp,
    description: "+255 689 715 030",
    link: "https://w.app/255689715030",
    target: "_blank",
  },
  {
    icon: BsPhone,
    description: "+255 623 160 165",
    link: "tel:+255623160165",
    target: "_blank",
  },
];
export const navigation1 = [
  {
    name: "Home",
    href: "/#home",
    current: false,
    active: route().current("home"),
  },
  {
    name: "Services",
    href: "/#service",
    current: false,
    active: route().current("home"),
  },
  {
    name: "About Us",
    href: "/#about",
    current: false,
    active: route().current("about"),
  },
  {
    name: "Site Service",
    href: "/#popular",
    current: false,
    active: route().current("home"),
  },
  {
    name: "Contact Us",
    href: "/#contact",
    current: false,
    active: route().current("contact"),
  },
];
export const navigation = [
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
export const heroEmage = [
  {
    thumbnail: bg2,
    image: bg2,
  },
  {
    thumbnail: bg1,
    image: bg1,
  },
  {
    thumbnail: bg3,
    image: bg3,
  },
];

export const statistics = [
  { value: "99+", label: "Software" },
  { value: "500+", label: "LED Installed" },
  { value: "250k+", label: "Vehicles Served" },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free delivery",
    subtext:
      "Enjoy seamless free delivery whenever you get a service from us, you don't have to worry.",
  },
  {
    imgURL: shieldTick,
    label: "Security",
    subtext:
      "Experience secured softwares deom us, we dedicate to your business grow, Privacy is the first.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext:
      "Our dedicated customer service are happy and ready to help you choose the best service..",
  },
];

export const reviews = [
  {
    imgURL: customer2,
    customerName: "Abdulkadri Omari",
    rating: "5.0",
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
  {
    imgURL: customer,
    customerName: "Joshua Jayrous",
    rating: "4.0",
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },

  {
    imgURL: customer3,
    customerName: "Emile Jay",
    rating: "4.5",
    feedback:
      "I have now managed to get three times the profit within a week unlikely before i used your software!",
  },
];

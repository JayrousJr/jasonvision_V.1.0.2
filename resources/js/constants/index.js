import { BsEnvelope, BsPhone, BsWhatsapp } from "react-icons/bs";
import { shieldTick, support, truckFast } from "../../../public/assets/icons";
import {
  customer1,
  customer2,
  bg1,
  bg2,
  bg3,
  bg4,
  car,
  bg6,
  soft,
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
export const navigation = [
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
    name: "Popular",
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

export const shoes = [
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
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Kassim Same",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Ohio Rama",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
  ,
  {
    imgURL: customer2,
    customerName: "Franklyne Jay",
    rating: 4.5,
    feedback:
      "I have now managed to get three times the profit within a week unlikely before i used your software!",
  },
];

import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import {
  BsActivity,
  BsBuilding,
  BsChevronDown,
  BsEnvelope,
  BsPhone,
  BsWhatsapp,
} from "react-icons/bs";
import { Link, useForm, usePage } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import TextArea from "@/Components/TextArea";
import InputError from "@/Components/InputError";
import Modal from "@/Components/Modal";
import PopUp from "../../component/PopUp";

export default function ContactForm({ props }) {
  const { data, setData, post, errors, reset, processing, onSuccess } = useForm(
    {
      name: "",
      email: "",
      content: "",
      subject: "",
    }
  );
  const features = [
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
  function onSubmit(e) {
    e.preventDefault();
    post(route("message"), {
      preserveScroll: true,
      onSuccess: () => reset("name", "email", "content", "subject"),
    });
  }
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <PopUp props={props} />
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact Us
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Do you have any question or Comment, Leave it to us.
        </p>
      </div>
      <div className="mx-auto grid max-w-2xl sm:grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-10 lg:max-w-7xl lg:grid-cols-3 lg:px-8">
        <div className=" col-span-1">
          <h2 className="text-xl text-center font-bold tracking-tight text-gray-900 sm:text-xl">
            Contact Us Here
          </h2>
          <p className="mt-4 text-gray-500 text-center">
            Get in touch with us for quick help and Services.
          </p>
          <dl className="mt-16 grid lg:grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <a
                key={feature.name}
                href={feature.link}
                target={feature.target}
                className="inline-flex items-center gap-2 hover:text-[#FFBC42]"
              >
                <feature.icon className="h-6 w-6" aria-hidden="true" />
                {feature.description}
              </a>
            ))}
            <span className="inline-flex items-center gap-2 ">
              <BsBuilding className=" h-6 w-6" /> Sinza Kijiweni, Near Delux.
            </span>
            <span className="inline-flex items-center gap-2 ">
              <BsBuilding className=" h-6 w-6" /> Dar Es Salaam, Tanzania.
            </span>
          </dl>
        </div>
        <div className="col-span-2" aria-hidden="true">
          <h2 className="text-xl text-center font-bold tracking-tight text-gray-900 sm:text-xl">
            Drop your message
          </h2>
          <form
            onSubmit={onSubmit}
            method="POST"
            className="mx-auto mt-16 max-w-xl sm:mt-20"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1">
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <TextInput
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Full Names"
                    className="block w-full rounded-md border-0 px-3.5 py-2 !text-gray-900  !bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setData("name", e.target.value)}
                    value={data.name}
                  />
                  <InputError
                    message={errors.name}
                    className="mt-2 text-[red]"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <TextInput
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email / name@example.com"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 !text-gray-900  !bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                  />
                  <InputError
                    message={errors.email}
                    className="mt-2 text-[red]"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <TextInput
                    type="text"
                    name="subject"
                    placeholder="Type your Message Subject"
                    id="subject"
                    className="block w-full rounded-md border-0 px-3.5 py-2 !text-gray-900  !bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setData("subject", e.target.value)}
                    value={data.subject}
                  />
                  <InputError
                    message={errors.subject}
                    className="mt-2 text-[red]"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <TextArea
                    name="content"
                    placeholder="Type your message here"
                    id="content"
                    onChange={(e) => setData("content", e.target.value)}
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 !text-gray-900  !bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                    value={data.content}
                  />
                  <InputError
                    message={errors.content}
                    className="mt-2 text-[red]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-slate-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                disabled={processing}
              >
                Leave us a message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

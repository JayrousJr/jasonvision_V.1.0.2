import InputError from "@/Components/InputError";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import PopUp from "@/component/PopUp";
import { contacts } from "@/constants";
import { HigherOrderComponentWrapper } from "@/hoc";
import { useForm } from "@inertiajs/react";
import React from "react";
import { BsBuilding } from "react-icons/bs";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
const Contact = ({ success }) => {
  const { data, setData, post, errors, reset, processing, onSuccess } = useForm(
    {
      name: "",
      email: "",
      content: "",
      subject: "",
    }
  );
  function onSubmit(e) {
    e.preventDefault();
    post(route("message"), {
      preserveScroll: true,
      onSuccess: () => reset("name", "email", "content", "subject"),
    });
  }
  return (
    <motion.section
      id="contact"
      className=" gap-10 w-full max-container grid lg:grid-cols-2 overflow-hidden"
    >
      <PopUp props={success} />
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex flex-1 flex-col"
      >
        <h1 className="mt-10 font-palanquin text-4xl font-black sm:max-w-lg">
          Contact <span className="text-semi-dark inline-block"> Us </span>
        </h1>
        <p className=" text-lg font-montserrat mt-4">
          Contact Our Customer care service any time 24/7.
        </p>
        <div className="flex flex-col justify-center items-center gap-3 mt-6">
          {contacts.map((item) => (
            <a
              key={item.link}
              href={item.link}
              target={item.target}
              className="inline-flex items-center self-start font-montserrat gap-2 hover:text-light-bg md:grid-cols-1"
            >
              <item.icon className="h-6 w-6" aria-hidden="true" />
              {item.description}
            </a>
          ))}
          <span className="inline-flex items-center gap-2 self-start font-montserrat">
            <BsBuilding className=" h-6 w-6" /> Sinza Kijiweni, Near Delux.
          </span>
          <span className="inline-flex items-center gap-2 self-start font-montserrat">
            <BsBuilding className=" h-6 w-6" /> Dar Es Salaam, Tanzania.
          </span>
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="self-start"
        aria-hidden="true"
      >
        <h2 className="text-xl text-center font-bold tracking-tight text-white font-montserrat sm:text-xl lg:pt-20">
          Drop your message
        </h2>
        <form
          onSubmit={onSubmit}
          method="POST"
          className="mx-auto  max-w-3xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1">
            <div className="sm:col-span-2">
              <div className="mt-2.5">
                <TextInput
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Full Names"
                  className="block w-full rounded-md border-0 px-3.5 py-2 !text-white font-montserrat  !bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset !focus:ring-semi-dark sm:text-sm sm:leading-6"
                  onChange={(e) => setData("name", e.target.value)}
                  value={data.name}
                />
                <InputError message={errors.name} className="mt-2 text-[red]" />
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
                  className="block w-full rounded-md border-0 px-3.5 py-2 !text-white font-montserrat  !bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset !focus:ring-semi-dark sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md border-0 px-3.5 py-2 !text-white font-montserrat  !bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset !focus:ring-semi-dark sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md border-0 px-3.5 py-2 !text-white font-montserrat  !bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset !focus:ring-semi-dark sm:text-sm sm:leading-6"
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
              className="bg-semi-dark flex justify-center items-center rounded-full px-7 py-3 gap-2 border border-semi-dark hover:bg-dark-background font-montserrat leading-none text-md text-white w-full"
              disabled={processing}
            >
              Leave us a message
            </button>
          </div>
        </form>
      </motion.div>
    </motion.section>
  );
};

export default HigherOrderComponentWrapper(Contact, "contact");

import { Link } from "@inertiajs/react";
import React from "react";
import {
  BsArrowRight,
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import { IoMdPin } from "react-icons/io";

const BlogPost = ({
  content,
  created_at,
  facebook,
  slug,
  image,
  instagram,
  location,
  title,
  twitter,
  youtube,
  baseUrl,
}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full text-white p-4 shadow-xl rounded-xl border border-semi-dark">
      <Link href={route("post", slug)}>
        <img
          src={"/storage/" + image}
          className="h-[300px] object-cover rounded-xl shadow-md"
        />
      </Link>
      <div className="flex justify-between sm:flex-wrap sm:gap-4 items-center mt-4">
        <p className="font-montserrat">{created_at}</p>
        <p className="flex justify-center font-montserrat items-center gap-1 border border-semi-dark px-3 py-1 rounded-xl">
          <IoMdPin className="text-light-bg" />
          {location}
        </p>
      </div>
      <div className="my-4 flex text-md font-montserrat font-semibold ">
        <Link href={route("post", slug)}>{title}</Link>
      </div>
      <div className="flex flex-row gap-x-3 text-2xl justify-between items-center mb-4 border-t border-slate-700 pt-4 sm:flex-wrap sm:gap-4">
        <div className="flex flex-row gap-x-3">
          <Link
            href={facebook}
            target="_blank"
            className=" hover:text-blue-500"
          >
            <BsFacebook />
          </Link>
          <Link
            href={instagram}
            target="_blank"
            className=" hover:text-rose-600"
          >
            <BsInstagram />
          </Link>
          <Link href={twitter} target="_blank" className="hover:text-black">
            <BsTwitterX />
          </Link>
          <Link
            href={youtube}
            target="_blank"
            className=" hover:text-rose-600 text-3xl"
          >
            <BsYoutube />
          </Link>
        </div>
        <div className="">
          <Link
            href={route("post", slug)}
            className="text-sm font-montserrat flex justify-center items-center gap-2 border border-semi-dark px-4 py-2 rounded-xl hover:bg-semi-dark hover:text-white"
          >
            More <BsArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

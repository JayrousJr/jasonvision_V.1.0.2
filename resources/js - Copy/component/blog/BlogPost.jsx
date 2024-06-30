import { Link } from "@inertiajs/react";
import img3 from "../../../../public/assets/images/bg2.jpg";
import Panination from "../../component/Pagination";
import { IoMdPin } from "react-icons/io";
import {
  BsArrowRight,
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";

export default function BlogPost({ props }) {
  const post = props?.post?.data;
  const baseUrl = props?.baseUrl;
  const paginate = props?.post?.meta;
  return (
    <>
      <div className="max-w-7xl text-center mt-12 text-5xl sm:text-6xl font-bold">
        Our Blog Page
      </div>

      <div className="bg-white py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Welcome to Our Blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Stay informed and inspired with the latest insights, innovations,
              and updates from Jason Vision Technology. Explore expert articles
              and tips designed to help you maximize the potential of LED
              installations, software development, and smart parking systems.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16  lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {post?.map((post, index) => (
              <div key={index} className="shadow-xl p-3 rounded-2xl">
                <img
                  className="w-full h-[16rem] object-cover object-center max-w-none mb-3 bg-gray-900 shadow-sm rounded-xl ring-1 ring-gray-400/10 sm:w-full my-6"
                  src={baseUrl + "/storage/" + post.image}
                  alt="App Image"
                />
                <article className="flex max-w-xl flex-col items-start justify-between">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.created_at} className="text-gray-500">
                      {post.created_at}
                    </time>
                    <p className="relative inline-flex gap-5 z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      <IoMdPin className="text-[1rem] text-[#f43f5e]" />{" "}
                      {post.location}
                    </p>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href={route("post", post?.slug)}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p
                      className="my-5 line-clamp-3 text-sm leading-6 text-gray-600"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    ></p>
                    <div className="w-full mt-2">
                      <Link className="inline-flex rounded-2xl text-gray-900 bg-gray-100 hover:bg-gray-300 gap-3 items-center py-2 px-4">
                        Read More <BsArrowRight />
                      </Link>
                    </div>
                  </div>
                  <div className="relative my-8 flex text-2xl gap-x-4 mx-8">
                    <Link
                      className="hover:text-[#fb7185] text-[#be123c]"
                      href={post.instagram}
                      target="_blank"
                    >
                      <BsInstagram />
                    </Link>
                    <Link href={post.twitter} target="_blank">
                      <BsTwitterX />
                    </Link>
                    <Link
                      className="hover:text-[#ef4444] text-[#b91c1c]"
                      href={post.youtube}
                      target="_blank"
                    >
                      <BsYoutube />
                    </Link>
                    <Link
                      className="hover:text-[#1e40af] text-[#1d4ed8]"
                      href={post.facebook}
                      target="_blank"
                    >
                      <BsFacebook />
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Panination props={paginate} />
    </>
  );
}

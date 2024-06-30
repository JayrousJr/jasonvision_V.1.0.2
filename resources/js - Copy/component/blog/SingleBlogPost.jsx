import { Link, useForm } from "@inertiajs/react";
import { BsCalendar3, BsCheck2Circle } from "react-icons/bs";
import { IoMdPin } from "react-icons/io";
import img3 from "../../../../public/assets/images/bg2.jpg";
import Pagination from "../../component/Pagination";
import PopUp from "../../component/PopUp";
import InputError from "@/Components/InputError";
import logo from "../../../../public/assets/images/logo.png";
export default function SingleBlogPost({ props }) {
  const success = props.success;
  const posts = props.post.data;
  const comment = props.comment.data;
  const service = props.service.data;
  const popularPosts = props.posts.data;
  const paginate = props.comment.meta;
  const id = props.auth.user?.id;
  const {
    data,
    setData,
    post,
    processing,
    reset,
    progress,
    errors,
    transform,
  } = useForm({
    content: "",
    user_id: "",
    post_id: "",
  });
  transform((data) => ({
    ...data,
    user_id: id,
    post_id: posts.id,
  }));
  const submitForm = (event) => {
    event.preventDefault();
    post(route("posting", posts.slug), {
      preserveScroll: true,
      onSuccess: reset("content"),
    });
  };
  return (
    <>
      <div className="isolate overflow-hidden bg-white px-6 py-0 lg:overflow-visible lg:px-0">
        <PopUp props={success} />
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[90rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="max-w-7xl text-center pt-12 text-5xl sm:text-6xl font-bold">
          Blog Page
        </div>
        <div className="mx-auto grid max-w-2xl items-start sm:grid-cols-1 gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-20 lg:max-w-7xl lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            <h2 className="text-3xl mb-6  font-bold tracking-tight text-gray-700 capitalize text-center sm:text-4xl">
              {posts.title}
            </h2>
            <img
              className="w-full h-[22rem] rounded-xl mt-3 object-cover object-center max-w-none  bg-gray-900 shadow-sm ring-1 ring-gray-400/10 sm:w-full"
              src={props.baseUrl + "/storage/" + posts.image}
              alt="Blog Image"
            />
            <p
              className="mt-4 text-gray-500"
              dangerouslySetInnerHTML={{ __html: posts.content }}
            />

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-y-16 lg:gap-x-8">
              {/* Location Stamp */}
              <div className="inline-flex items-center gap-4 border-t border-gray-200 pt-4">
                <dt>
                  <IoMdPin className="text-[1.2rem] text-[#f43f5e]" />
                </dt>
                <dd className="text-md font-bold uppercase text-gray-500">
                  {posts.location}
                </dd>
              </div>
              {/* Created at stamp */}
              <div className="inline-flex items-center gap-4 border-t border-gray-200 pt-4">
                <dt>
                  <BsCalendar3 className="text-[1.2rem] text-[#f43f5e]" />
                </dt>
                <dd className="text-md font-bold text-gray-500">
                  {posts.created_at}
                </dd>
              </div>
              {/* Location Stamp */}
              <div className="inline-flex items-center gap-4 border-t border-gray-200 pt-4">
                <dt className="text-[1.2rem]  font-bold text-gray-500">
                  {paginate.total}
                </dt>
                <dd className="text-md font-bold text-gray-500">Comments</dd>
              </div>
            </dl>
            <div className="my-6">
              {comment.map((item, index) => (
                <div key={index} className="inline-flex gap-8 my-6">
                  <img
                    className="w-16 h-16 rounded-full"
                    src={props.baseUrl + "/storage/" + item.user_id.image}
                    alt="User Image "
                  />
                  <div className="">
                    <p className="text-gray-500 font-normal text-[1.3rem]">
                      {item.user_id.name}
                    </p>
                    <p className="text-gray-400 capitalize items-center inline-flex gap-4">
                      <BsCalendar3 className="text-[#113f5e]" />
                      {item.created_at}
                    </p>
                    <p className="text-gray-900 text-[.9rem]">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <Pagination props={paginate} />
            <div className="bg-slate-50 p-6  border-2">
              <form onSubmit={submitForm} className="mx-auto max-w-xl ">
                <p className="text-2xl text-center font-semibold">Comment</p>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <div className="mt-2.5">
                      <input
                        type="text"
                        value={id}
                        hidden
                        onChange={(event) =>
                          setData("user_id", event.target.value)
                        }
                        id="user_id"
                        name="user_id"
                      />
                      <input
                        type="text"
                        value={posts.id}
                        hidden
                        onChange={(event) =>
                          setData("post_id", event.target.value)
                        }
                        id="post_id"
                        name="post_id"
                      />
                      <textarea
                        name="content"
                        id="content"
                        rows={4}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                        value={data.content}
                        onChange={(event) =>
                          setData("content", event.target.value)
                        }
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
                    className="capitalize block w-full rounded-md bg-slate-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                    disabled={processing}
                  >
                    Send your Comment
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="sm:mx-6 lg:col-span-2 bg-gray-50 border border-3 p-8 grid grid-cols-1 ">
            <hr className="border-1 border-gray-400 my-8" />
            <p className=" text-2xl bg-[#D81159] text-[#D81159] py-2 px-3">.</p>

            <div className="mt-8 border border-1 rounded-xl py-8">
              <img
                src={logo}
                alt="Image"
                className="flex self-center mx-auto w-[8rem] h-[8rem] object-cover rounded-full"
              />
              <div className="text-center font-semibold text-xl text-gray-400 mt-4">
                Jason Vision Technologies
              </div>
              <div className="text-center text-gray-400 mb-4">
                Your First Priority
              </div>
              <p className="text-center mx-2 text-gray-500">
                At Jason Vision Technology, we lead in LED installation,
                software development, and smart parking systems. Our expert team
                delivers innovative, efficient, and reliable solutions tailored
                to your needs. With cutting-edge technology and a passion for
                excellence, we exceed expectations and set industry standards.
                Trust us to illuminate your path to success and revolutionize
                your operations.
              </p>
            </div>
            <hr className="border-1 border-gray-400 my-8" />
            <div className="">
              <p className="text-gray-50 text-2xl bg-[#D81159] py-2 px-3">
                Popular Posts
              </p>
              {popularPosts.map((item, index) => (
                <div
                  className="grid grid-cols-2 gap-3 items-center"
                  key={index}
                >
                  <img
                    src={props.baseUrl + "/storage/" + item.image}
                    alt="Post Image"
                    className="w-full h-[5rem] rounded-md mt-3 object-cover object-center max-w-none  bg-gray-900 shadow-sm ring-1 ring-gray-400/10 sm:w-full"
                  />
                  <div className="">
                    <Link
                      href={route("post", item?.slug)}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {item.title}
                    </Link>
                    <p className="text-gray-400">{item.created_at}</p>
                  </div>
                </div>
              ))}
            </div>
            <hr className="border-1 border-gray-400 my-8" />
            <div className="">
              <p className="text-gray-50 text-2xl bg-[#D81159] py-2 px-3">
                Quick Visit
              </p>
              <div className="flex flex-col my-6">
                {service.map((item, index) => (
                  <Link
                    key={index}
                    className="text-gray-500 inline-flex items-center gap-4 hover:text-gray-900 hover:underline"
                  >
                    <BsCheck2Circle className="text-[green]" /> {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

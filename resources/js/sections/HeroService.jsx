import Button from "@/component/Button";
import arrowRight from "../../../public/assets/icons/chevron-right.svg";
import React, { useState } from "react";
import SubServiceCard from "@/component/SubServiceCard";

const HeroService = ({ service, sub }) => {
  const servDetails = service.data;
  const subService = sub.data;
  console.log(subService);
  const [content, setContent] = useState(subService[0]);
  return (
    <section className="w-full flex flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative flex max-lg:flex-col justify-between items-center w-full max-xl:padding-x  pt-28 gap-10 max-md:px-12">
        <div className="flex justify-start flex-col items-start gap-10">
          <h1 className="mt-10 font-palanquin text-4xl leading-none font-bold text-white mb-6">
            {servDetails.name.split(" ")[0]}{" "}
            <span className="text-semi-dark">
              {" "}
              {servDetails.name.split(" ")[1]}
            </span>{" "}
            <span className="xl:whitespace-nowrap relative z-10 pr-10">
              {servDetails.name.split(" ")[2]}
            </span>
            {servDetails.name.split(" ")[3]}
            <br />
          </h1>
          <img src={"/storage/" + servDetails.image} alt="" width={670} />
          <Button
            label="View Our Services"
            iconUrl={arrowRight}
            href="#service"
          />
        </div>
        <div className="flex flex-col justify-start mt-16 max-lg:mr-20">
          <h1 className="font-montserrat font-bold text-2xl">
            {" "}
            Service Description
          </h1>
          <p
            className="font-montserrat text-slate-100 text-md leading-8 mt-6 mb-10 sm:max-w-2xl"
            dangerouslySetInnerHTML={{
              __html: servDetails.description,
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 border border-semi-dark max-lg:px-12 px-12 pb-12">
        <div className="pt-14 flex flex-1 flex-col">
          <h1 className="font-palanquin text-4xl font-bold sm:max-w-lg">
            Sub<span className="text-semi-dark inline-block">Service </span> on.
          </h1>
          <h1 className="mt-4 font-palanquin text-lg leading-none font-bold text-white ">
            {servDetails.name.split(" ")[0]}{" "}
            <span className="text-semi-dark">
              {" "}
              {servDetails.name.split(" ")[1]}
            </span>{" "}
            <span className="xl:whitespace-nowrap relative z-10 pr-10">
              {servDetails.name.split(" ")[2]}
            </span>
            {servDetails.name.split(" ")[3]}
            <br />
          </h1>
        </div>
        <div className="relative flex flex-1 flex-col justify-center items-center bg-center bg-cover">
          <div className="flex max-lg:flex-col-reverse justify-between items-center gap-10">
            <div className="">
              <h1 className="font-montserrat font-semibold text-3xl">
                {content?.name}
              </h1>
              <p
                className="font-montserrat"
                dangerouslySetInnerHTML={{
                  __html: content?.description,
                }}
              />
            </div>
            <img
              src={"/storage/" + content?.image}
              alt="Service Collection"
              width={610}
              height={500}
              className="object-contain relative z-10"
            />
          </div>
          <div className="flex flex-wrap sm:gap-6 gap-4 mt-10 max-sm:px-6">
            {subService?.map((item) => (
              <div key={item.slug}>
                <SubServiceCard
                  imgUrl={item}
                  changeDetail={(item) => {
                    setContent(item);
                  }}
                  bigImage={content}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroService;

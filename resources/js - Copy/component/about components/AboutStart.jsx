import img from "../../../../public/assets/images/led.png";
import img2 from "../../../../public/assets/images/car.jpg";
import img3 from "../../../../public/assets/images/bg4.jpg";
import { useEffect, useState } from "react";
function AboutStart() {
  const images = [img, img2, img3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  useEffect(() => {
    const intervalID = setInterval(nextImage, 5000);
    return () => clearInterval(intervalID);
  }, []);
  const data1 = {
    head: "We change how you have to think about growing your busines, Get ready!",
    text: "We revolutionize the way you approach business growth. Our innovative solutions in LED installation, software development, and smart parking systems are designed to transform your operations and enhance efficiency. We empower you to think beyond traditional boundaries, equipping you with the tools and expertise to scale new heights. Get ready to redefine your success with Jason Vision Technology, where your growth is our mission.",
  };
  const data2 = {
    mission: "Our mission is to deliver innovative and reliable solutions in LED installation, software development, and smart parking systems. We are dedicated to enhancing our clients' operational efficiency and business growth through cutting-edge technology and exceptional service. Our commitment to excellence drives us to exceed expectations and build lasting partnerships.",
    vision: "Our vision is to be the global leader in technology solutions, setting the standard for excellence in LED installations, software development, and smart parking systems. We aim to continuously innovate, inspire, and empower businesses to achieve their full potential, fostering a smarter, more connected world.",
  };
  return (
    <>
      <div className="max-w-7xl text-center mt-12 text-5xl sm:text-6xl font-bold">
        About Us
      </div>
      <div className="relative isolate overflow-hidden bg-white px-6 py-19  sm:py-10 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[100rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
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

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 pt-11">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {data1.head}
                </h1>
                <p className="mt-6 text-xl mb-5 leading-8 text-gray-700">
                  {data1.text}
                  <br />
                  {data1.text}
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] h-[25rem] object-cover max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[45rem]"
              src={images[currentImageIndex]}
              alt=""
            />
          </div>
        </div>
        <hr className="my-6 border-gray-100 sm:mx-auto dark:border-gray-300 lg:my-8" />
      </div>

      <div className="px-6 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 pt-11">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Our Mission
              </h1>
              <p className="mt-6 text-xl mb-5 leading-8 text-gray-700">
                {data2.mission}
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Our Vision
              </h1>
              <p className="mt-6 text-xl mb-5 leading-8 text-gray-700">
                {data2.vision}
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-100 sm:mx-auto dark:border-gray-300 lg:my-8" />
    </>
  );
}

export default AboutStart;

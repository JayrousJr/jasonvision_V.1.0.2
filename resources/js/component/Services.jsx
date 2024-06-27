import { Link } from "@inertiajs/react";
import { BsArrowRight } from "react-icons/bs";
export default function Service({ service }) {
  const data = service.data;
  return (
    <>
      <div className="mx-auto max-w-2xl lg:text-center" id="services">
        <p className="mt-2 text-2xl uppercase font-bold tracking-tight text-gray-900 sm:text-5xl text-center">
          Our Services
        </p>
      </div>
      <div className="relative isolate overflow-hidden bg-white px-6 py-19  sm:py-20 lg:overflow-visible lg:px-0">
        {data.map((item, index) => (
          <div key={index}>
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

            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="lg:max-w-lg">
                    <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                      {item.name}
                    </h1>
                    <p className="mt-6 text-l mb-5 leading-8 text-gray-700">
                      <span
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </p>
                    <Link
                      href={route("service", item.slug)}
                      className={`inline-flex items-center px-4 py-2 bg-gray-500 border border-transparent rounded-md  text-xs text-white capitalize tracking-widest hover:bg-gray-900 transition ease-in-out duration-150`}
                    >
                      View More Details <BsArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <img
                  className="w-[24rem] h-[25rem] object-cover max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[45rem]"
                  src={"/storage/" + item.image}
                  alt={item.name}
                />
              </div>
            </div>
            <hr className="my-6 border-gray-100 sm:mx-auto dark:border-gray-300 lg:my-8" />
          </div>
        ))}
      </div>
    </>
  );
}

// export default function Service() {
//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-10xl py-1 sm:px-6 sm:py-20 ">
//         <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-l sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
//           <svg
//             viewBox="0 0 1024 1024"
//             className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
//             aria-hidden="true"
//           >
//             <circle
//               cx={512}
//               cy={512}
//               r={512}
//               fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
//               fillOpacity="0.7"
//             />
//             <defs>
//               <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
//                 <stop stopColor="#7775D6" />
//                 <stop offset={1} stopColor="#E935C1" />
//               </radialGradient>
//             </defs>
//           </svg>
//           <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
//             <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
//               Boost your productivity.
//               <br />
//               Start using our app today.
//             </h2>
//             <p className="mt-6 text-lg leading-8 text-gray-300">
//               Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
//               Malesuada adipiscing sagittis vel nulla.
//             </p>
//             <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
//               <a
//                 href="#"
//                 className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
//               >
//                 Get started
//               </a>
//               <a
//                 href="#"
//                 className="text-sm font-semibold leading-6 text-white"
//               >
//                 Learn more <span aria-hidden="true">→</span>
//               </a>
//             </div>
//           </div>
//           <div className="relative mt-16 h-80 lg:mt-8">
//             <img
//               className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
//               src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
//               alt="App screenshot"
//               width={1824}
//               height={1080}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

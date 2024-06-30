import img3 from "../../../../public/assets/images/bg2.jpg";
export default function Image({ prop }) {
  const service = prop.services.data;
  const sub = prop.sub;
  return (
    <>
      <div className="mx-auto max-w-10xl pb-6 ">
        <img
          className="w-full h-[35rem] object-cover object-center max-w-none  bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-full"
          src={prop.baseUrl + "/storage/" + service.image}
          alt="App Image"
        />
      </div>
      <div className="bg-white py-10 sm:py-10">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-1">
          <div className="max-w-8xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">
              {service.name}
            </h2>

            <p
              className="mt-6 text-lg leading-8 text-gray-600"
              dangerouslySetInnerHTML={{ __html: service.description }}
            ></p>
          </div>
        </div>
        <div className="relative isolate overflow-hidden bg-white px-0 sm:px-6 py-19  sm:py-20 lg:overflow-visible lg:px-0">
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
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 max-w-7xl m-auto sm:grid-cols-3 sm:gap-y-16 xl:col-span-2 pt-8 px-6"
          >
            {sub.data.map((item, index) => (
              <li
                key={index}
                className="shadow-xl p-6 border border-3 rounded-md"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-x-4">
                    <img
                      className="h-[6rem] w-[12rem] rounded-md object-cover flex"
                      src={prop.baseUrl + "/storage/" + item.image}
                      alt="Team Member Photo"
                    />
                    <p className="text-sm sm:text-xl font-normal uppercase">
                      {item.name}
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <h3 className="text-base text-md leading-7 tracking-tight text-gray-900">
                      <span
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </h3>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

// import { Link } from "@inertiajs/react";
// import { BsArrowRight } from "react-icons/bs";
// export default function Service({ service }) {
//   const data = service.data;
//   return (
//     <>
//       <div className="mx-auto max-w-2xl lg:text-center" id="services">
//         <p className="mt-2 text-2xl uppercase font-bold tracking-tight text-gray-900 sm:text-5xl text-center">
//           Our Services
//         </p>
//       </div>
//       <div className="relative isolate overflow-hidden bg-white px-6 py-19  sm:py-20 lg:overflow-visible lg:px-0">
//         {data.map((item, index) => (
//           <div key={index}>
//             <div className="absolute inset-0 -z-10 overflow-hidden">
//               <svg
//                 className="absolute left-[max(50%,25rem)] top-0 h-[90rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
//                 aria-hidden="true"
//               >
//                 <defs>
//                   <pattern
//                     id="e813992c-7d03-4cc4-a2bd-151760b470a0"
//                     width={200}
//                     height={200}
//                     x="50%"
//                     y={-1}
//                     patternUnits="userSpaceOnUse"
//                   >
//                     <path d="M100 200V.5M.5 .5H200" fill="none" />
//                   </pattern>
//                 </defs>
//                 <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
//                   <path
//                     d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
//                     strokeWidth={0}
//                   />
//                 </svg>
//                 <rect
//                   width="100%"
//                   height="100%"
//                   strokeWidth={0}
//                   fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
//                 />
//               </svg>
//             </div>

//             <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
//               <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
//                 <div className="lg:pr-4">
//                   <div className="lg:max-w-lg">
//                     <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
//                       {item.name}
//                     </h1>
//                     <p className="mt-6 text-l mb-5 leading-8 text-gray-700">
//                       <span
//                         dangerouslySetInnerHTML={{ __html: item.description }}
//                       />
//                     </p>
//                     <Link
//                       href={route("service", item.slug)}
//                       className={`inline-flex items-center px-4 py-2 bg-gray-500 border border-transparent rounded-md  text-xs text-white capitalize tracking-widest hover:bg-gray-900 transition ease-in-out duration-150`}
//                     >
//                       View More Details <BsArrowRight />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//               <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
//                 <img
//                   className="w-[24rem] h-[25rem] object-cover max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[45rem]"
//                   src={"/storage/" + item.image}
//                   alt={item.name}
//                 />
//               </div>
//             </div>
//             <hr className="my-6 border-gray-100 sm:mx-auto dark:border-gray-300 lg:my-8" />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

import { Link } from "@inertiajs/react";
import { BsArrowRight } from "react-icons/bs";
export default function Service({ service }) {
  const data = service.data;
  return (
    <>
      <div className="bg-white">
        {data.map((item, index) => (
          <div className="pt-6" key={index}>
            {/* Image gallery */}
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
              <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                  <img
                    src={"/storage/" + item.image}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Product info */}
            <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {item.name}
                </h1>
              </div>

              {/* Options */}
              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">
                  {product.price}
                </p>

                {/* Reviews */}
                <div className="mt-6">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <BsArrowRight
                          key={rating}
                          className={classNames(
                            reviews.average > rating
                              ? "text-gray-900"
                              : "text-gray-200",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                    <a
                      href={reviews.href}
                      className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {reviews.totalCount} reviews
                    </a>
                  </div>
                </div>
              </div>

              <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                {/* Description and details */}
                <div>
                  <h3 className="sr-only">Description</h3>

                  <div className="space-y-6">
                    <p className="text-base text-gray-900">
                      <span
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-sm font-medium text-gray-900">
                    Highlights
                  </h3>

                  <div className="mt-4">
                    <ul
                      role="list"
                      className="list-disc space-y-2 pl-4 text-sm"
                    >
                      {product.highlights.map((highlight) => (
                        <li key={highlight} className="text-gray-400">
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">Details</h2>

                  <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600">{product.details}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

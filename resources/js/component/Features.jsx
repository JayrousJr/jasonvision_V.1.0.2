import {
  BsFingerprint,
  BsCloudArrowUpFill,
  BsLock,
  BsArrowRepeat,
} from "react-icons/bs";
const style = {
  backgroundImage:
    "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
  borderColor: "rgb(93, 79, 240)",
};
const features = [
  {
    name: "Cross-Platform Compatibility",
    description:
      "Our software development services prioritize cross-platform compatibility, ensuring that your applications run seamlessly across various devices and operating systems.",
    icon: BsCloudArrowUpFill,
  },
  {
    name: "Real-Time Space Availability",
    description:
      "Our Parking Management System offers real-time space availability information, allowing users to quickly find and reserve parking spots with ease. With accurate occupancy data updated in real-time, drivers can save time and reduce frustration.",
    icon: BsLock,
  },

  {
    name: "High-Resolution Visuals",
    description:
      "Our LED displays feature high-resolution visuals that ensure stunning clarity and vividness, even from a distance. Whether indoors or outdoors, our displays deliver crisp images and vibrant colors.",
    icon: BsArrowRepeat,
  },
];

export default function Example() {
  return (
    <div className="bg-white py-20 sm:py-30">
      <div className="mx-auto max-w-7xl px-10 lg:px-7">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Everything you need to grow your business
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We have all you need to make your business grow up, from developing
            a robust information system for your business to branding your
            business using LED and make your vehicles safe by our smart parking
            service.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative p-6 shadow-xl border border-2 rounded-xl"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="pl-16">{feature.name}</div>
                </dt>
                <dd className="mt-5 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

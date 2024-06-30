const stats = [
  { id: 1, name: "Software Developed", value: "99 +" },
  { id: 2, name: "LED Installed", value: "120K" },
  { id: 3, name: "Vehicles Housed", value: "177,000 +" },
];

export default function Starts() {
  return (
    <div className="bg-white py-24 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <hr className="my-6 border-gray-100 sm:mx-auto dark:border-gray-300 lg:my-8" />
    </div>
  );
}

export default function Team({ user }) {
  const userdata = user.data;
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-1">
        <div className="max-w-8xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center">
            Meet our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
            Jason Vision Technologies Team. 
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-4 sm:gap-y-16 xl:col-span-2"
        >
          {userdata.map((item, index) => (
            <li key={index}>
              <div className="flex flex-col gap-4">
                <img
                  className="h-[10rem] w-[10rem] rounded-full flex mx-auto"
                  src={"storage/" + item.image}
                  alt="Team Member Photo"
                />
                <div className="flex flex-col items-center">
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 uppercase text-slate-600">
                    {item.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

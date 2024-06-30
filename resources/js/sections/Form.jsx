import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import PopUp from "@/component/PopUp";
import { useForm } from "@inertiajs/react";
export default function Form({ props }) {
  const { data, setData, post, processing, errors, progress, reset } = useForm({
    fname: "",
    sname: "",
    email: "",
    phone: "",
    attachment: "",
  });
  function submitForm(e) {
    e.preventDefault();
    post(route("apply"), {
      preserveScroll: true,
      onSuccess: () => reset("fname", "sname", "email", "phone", "attachment"),
    });
  }
  return (
    <section className="max-container max-sm:mt-12 border-semi-dark">
      <PopUp props={props} />
      <div className="flex flex-col justify-start pt-16">
        <h2 className="text-4xl font-palanquin font-bold text-white ">
          Apply for <span className="text-semi-dark"> Job </span>
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-white font-semibold">
          Are you an experienced Technician in the service we provide or an
          experienced programmer? Apply for the job now.
        </p>
      </div>
      <form onSubmit={submitForm}>
        <div className="max-w-5xl mx-auto my-8">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
            <div className="mt-4">
              <InputLabel
                htmlFor="fname"
                className="!text-white font-montserrat"
              >
                First Name
              </InputLabel>
              <TextInput
                className="!bg-dark-background w-full !text-white font-montserrat"
                type="text"
                name="fname"
                id="fname"
                placeholder="First Name"
                value={data.fname}
                onChange={(e) => setData("fname", e.target.value)}
              />
              <InputError message={errors.fname} className="text-[red] pt-2" />
            </div>
            <div className="mt-4">
              <InputLabel
                htmlFor="sname"
                className="!text-white font-montserrat"
              >
                Second Name
              </InputLabel>
              <TextInput
                className="!bg-dark-background w-full !text-white font-montserrat"
                name="sname"
                id="sname"
                type="text"
                placeholder="Second Name"
                value={data.sname}
                onChange={(e) => setData("sname", e.target.value)}
              />
              <InputError message={errors.sname} className="text-[red] pt-2" />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
            <div className="mt-4">
              <InputLabel
                htmlFor="email"
                className="!text-white font-montserrat"
              >
                Email address
              </InputLabel>
              <TextInput
                className="!bg-dark-background w-full !text-white font-montserrat"
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
              />
              <InputError message={errors.email} className="text-[red] pt-2" />
            </div>
            <div className="mt-4">
              <InputLabel
                htmlFor="phone"
                className="!text-white font-montserrat"
              >
                Phone Number
              </InputLabel>
              <TextInput
                className="!bg-dark-background w-full !text-white font-montserrat"
                name="phone"
                id="phone"
                type="tel"
                placeholder="Phone Number"
                value={data.phone}
                onChange={(e) => setData("phone", e.target.value)}
              />
              <InputError message={errors.phone} className="text-[red] pt-2" />
            </div>
          </div>

          <div className="grid lg:grid-cols-1 md:grid-cols-1 gap-4">
            <div className="mt-4">
              <InputLabel
                htmlFor="attachment"
                className="!text-white font-montserrat"
              >
                Upload Your CV in PDF format max size 10MB
              </InputLabel>
              <TextInput
                className="!bg-dark-background w-full !text-white font-montserrat  border border-21 p-1"
                type="file"
                name="attachment"
                id="attachment"
                placeholder="Attach Your CV Here"
                onChange={(e) => setData("attachment", e.target.files[0])}
              />
              {progress && (
                <progress value={progress.percentage} max="100">
                  {progress.percentage}%
                </progress>
              )}
              <InputError
                message={errors.attachment}
                className="text-[red] pt-2"
              />
            </div>
          </div>
          <div className="mt-4">
            <PrimaryButton
              className="!bg-semi-dark !text-white font-montserrat font-montserrat hover:!bg-light-bg my-6 border p-1"
              type="submit"
            >
              Send Application
            </PrimaryButton>
          </div>
        </div>
      </form>
    </section>
  );
}

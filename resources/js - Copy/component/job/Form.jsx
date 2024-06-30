import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import PopUp from "../../component/PopUp";
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
    <div className="grid grid-cols-1 mx-10 items-center justify-center">
      <PopUp props={props} />;
      <form onSubmit={submitForm}>
        <div className="max-w-5xl mx-auto my-8">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
            <div className="mt-4">
              <InputLabel htmlFor="fname" className="!text-slate-900">
                First Name
              </InputLabel>
              <TextInput
                className="!bg-white w-full !text-slate-900"
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
              <InputLabel htmlFor="sname" className="!text-slate-900">
                Second Name
              </InputLabel>
              <TextInput
                className="!bg-white w-full !text-slate-900"
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
              <InputLabel htmlFor="email" className="!text-slate-900">
                Email address
              </InputLabel>
              <TextInput
                className="!bg-white w-full !text-slate-900"
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
              <InputLabel htmlFor="phone" className="!text-slate-900">
                Phone Number
              </InputLabel>
              <TextInput
                className="!bg-white w-full !text-slate-900"
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
              <InputLabel htmlFor="attachment" className="!text-slate-900">
                Upload Your CV in PDF format max size 10MB
              </InputLabel>
              <TextInput
                className="!bg-white w-full !text-slate-900  border border-21 p-1"
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
              className="!bg-slate-800 !text-white hover:!bg-slate-600 my-6 border border-21 p-1"
              type="submit"
            >
              Send Application
            </PrimaryButton>
          </div>
        </div>
      </form>
    </div>
  );
}

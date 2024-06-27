import Navbar from "../../component/Navigation";
import Footer from "../../component/Footer";
import Form from "../../component/job/Form";
import { Head } from "@inertiajs/react";
export default function Job({ auth, service, baseUrl, success, social }) {
  return (
    <>
      <Head title="Job Application" />

      <Navbar props={{ auth, baseUrl }} />
      <Form props={success} />
      <Footer props={service} social={social} />
    </>
  );
}

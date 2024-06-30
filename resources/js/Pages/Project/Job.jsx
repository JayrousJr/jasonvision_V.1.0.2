import Navbar from "../../component/Navigation";
import { Head } from "@inertiajs/react";
import Layouts from "@/Layouts/Layouts";
import Form from "@/sections/Form";
import Footer from "@/component/Footer";
import { CustomerReviews } from "@/sections";
export default function Job({ auth, service, baseUrl, success, social }) {
  return (
    <Layouts>
      <Head title="Job Application" />
      <div class="fixed inset-0 bg-gradient-custom opacity-70 blur-xl pointer-events-none"></div>
      <section className="padding relative">
        <Form props={success} />
      </section>

      <section className="padding relative">
        <CustomerReviews />
      </section>
      <footer className=" relative">
        <Footer social={social} service={service} />
      </footer>
    </Layouts>
  );
}

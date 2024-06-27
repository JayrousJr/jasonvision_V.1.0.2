import { Head } from "@inertiajs/react";
import Navbar from "../../component/Navigation";
import Footer from "../../component/Footer";
import Contactform from "../../component/contact/ContactForm";
function Cntact({ baseUrl, service, auth, success, social }) {
  return (
    <>
      <Head title="About Us" />
      <Navbar props={{ auth, baseUrl, service }} />
      <Contactform props={success} />
      <Footer props={service} social={social} />
    </>
  );
}

export default Cntact;

import Navbar from "../../component/Navigation";
import Footer from "../../component/Footer";
import Image from "../../component/service components/Image";
import { Head } from "@inertiajs/react";
function ServiceSingle({ auth, sub, services, service, baseUrl, social }) {
  return (
    <>
      <Head title="Service" />
      <Navbar props={{ auth, baseUrl }} />
      <Image prop={{ sub, services, baseUrl }} />
      <Footer props={service} social={social} />
    </>
  );
}

export default ServiceSingle;

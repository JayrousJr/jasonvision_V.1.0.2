import { Head } from "@inertiajs/react";
import Team from "../../component/about components/Team";
import AboutStarts from "../../component/about components/AboutStart";
import Starts from "../../component/about components/Starts";
import Navbar from "../../component/Navigation";
import Footer from "../../component/Footer";

function About({ auth, user, baseUrl, service, social }) {
  return (
    <>
      <Head title="About Us" />
      <Navbar props={{ auth, baseUrl, service }} />
      <AboutStarts />
      <Starts />
      <Team user={user} />
      <Footer props={service} social={social} />
    </>
  );
}

export default About;

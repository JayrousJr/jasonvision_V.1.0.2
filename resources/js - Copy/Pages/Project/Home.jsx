import { Head } from "@inertiajs/react";
import Navbar from "../../component/Navigation";
import Footer from "../../component/Footer";
import Services from "../../component/Services";
import Features from "../../component/Features";
import Video from "../../component/Video";
function Home({ auth, service, baseUrl, social }) {
  return (
    <>
      <Head title="Home" />
      <Navbar props={{ auth, baseUrl }} />
      <main>
        {/* <Video /> */}
        <Features />
        <Services service={service} />
        <Footer props={service} social={social} />
      </main>
    </>
  );
}

export default Home;

import Layouts from "@/Layouts/Layouts";
import { Head } from "@inertiajs/react";
import React from "react";
import { motion, useScroll } from "framer-motion";
import {
  Hero,
  PopularProducts,
  About,
  Services,
  CustomerReviews,
  Features,
  Contact,
} from "../../sections/index";
import Footer from "@/component/Footer";

const Home = ({ post, baseUrl, service, success, social }) => {
  return (
    <>
      <Layouts>
        <Head title="Home" />
        <div className="">
          <div className="fixed inset-0 bg-gradient-custom opacity-70 blur-xl pointer-events-none"></div>
          <section className="xl:padding-l wide:padding-r padding-b ">
            <Hero />
          </section>
          <section className="padding-x py-6 w-full relative">
            <Features />
          </section>
          <section className="padding-x py-10 relative">
            <Services service={{ service, baseUrl }} />
          </section>
          <section className="padding relative">
            <About />
          </section>
          <section className="padding relative">
            <PopularProducts post={post} baseUrl={baseUrl} />
          </section>
          <section className="padding relative">
            <CustomerReviews />
          </section>
          <section className="padding relative">
            <Contact success={success} />
          </section>
          <footer className="relative">
            <Footer social={social} service={service} />
          </footer>
        </div>
      </Layouts>
    </>
  );
};

export default Home;

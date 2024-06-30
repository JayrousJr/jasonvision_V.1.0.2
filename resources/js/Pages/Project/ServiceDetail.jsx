import Layouts from "@/Layouts/Layouts";
import Footer from "@/component/Footer";
import { Features, HeroService } from "@/sections";
import { Head } from "@inertiajs/react";
import React from "react";

const ServiceDetail = ({ social, services, service, sub }) => {
  return (
    <Layouts>
      <Head title={"Service | " + services.data.name} />
      <section className="xl:padding-l wide:padding-r padding-b">
        <HeroService service={services} sub={sub} />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full ">
        <Features />
      </section>
      <footer className="bg-dark-background">
        <Footer social={social} service={service} />
      </footer>
    </Layouts>
  );
};

export default ServiceDetail;

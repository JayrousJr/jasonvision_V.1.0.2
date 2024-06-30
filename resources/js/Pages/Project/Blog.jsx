import Layouts from "@/Layouts/Layouts";
import Footer from "@/component/Footer";
import { PopularProducts } from "@/sections";
import { Head } from "@inertiajs/react";
import React from "react";

const Blog = ({ service, post, social }) => {
  return (
    <Layouts>
      <Head title="Blog" />
      <div class="fixed inset-0 bg-gradient-custom opacity-70 blur-xl pointer-events-none"></div>
      <section className="padding relative">
        <PopularProducts post={post} />
      </section>
      <footer className="relative">
        <Footer social={social} service={service} />
      </footer>
    </Layouts>
  );
};

export default Blog;

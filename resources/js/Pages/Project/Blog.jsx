import { Head } from "@inertiajs/react";
import Navbar from "../../component/Navigation";
import BlogPost from "../../component/blog/BlogPost";
import Footer from "../../component/Footer";

function Blog({ auth, service, baseUrl, post, services, social }) {
  return (
    <>
      <Head title="About Us" />
      <Navbar props={{ auth, baseUrl, service }} />
      <BlogPost props={{ post, service, services, baseUrl }} />
      <Footer props={service} social={social} />
    </>
  );
}

export default Blog;

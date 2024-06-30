import { Head } from "@inertiajs/react";
import Navbar from "../../component/Navigation";
import Footer from "../../component/Footer";
import SingleBlogPost from "../../component/blog/SingleBlogPost";
function SinglePost({
  post,
  posts,
  auth,
  service,
  comment,
  baseUrl,
  success,
  social,
}) {
  return (
    <>
      <Head title="Blog Post" />
      <Navbar props={{ auth, baseUrl }} />
      <SingleBlogPost
        props={{ post, baseUrl, posts, service, comment, auth, success }}
      />
      <Footer props={service} social={social} />
    </>
  );
}

export default SinglePost;

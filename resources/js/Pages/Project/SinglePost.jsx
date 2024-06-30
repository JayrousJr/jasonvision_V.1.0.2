import Layouts from "@/Layouts/Layouts";
import Footer from "@/component/Footer";
import SingleBlogPost from "@/component/SingleBlogPost";
import { Head } from "@inertiajs/react";

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
    <Layouts>
      <Head title="Blog Post" />
      <section className="padding ">
        <SingleBlogPost
          props={{ post, baseUrl, posts, service, comment, auth, success }}
        />
      </section>

      <Footer social={social} service={service} />
    </Layouts>
  );
}

export default SinglePost;

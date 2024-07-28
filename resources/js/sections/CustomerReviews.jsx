import ReviewCard from "@/component/ReviewCard";
import { reviews } from "@/constants";
import { HigherOrderComponentWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";

const CustomerReviews = () => {
  return (
    <motion.section className="max-container bg-black rounded-2xl">
      <motion.div
        variants={textVariant()}
        className=" bg-tertiary px-10 pb-20 pt-10  rounded-2xl"
      >
        <h2 className="text-4xl font-palanquin font-black text-white">
          What Our <span className="text-semi-dark"> Customers </span>Say?
        </h2>
        <p className="font-montserrat text-pale-blue mt-4 max-w-lg ">
          Hear the genuine stories from our satisfied customers about their
          exceptional experience with us.
        </p>
      </motion.div>

      <div className="-mt-20 mx-10 py-8 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((item, index) => (
          <ReviewCard key={item.customerName} {...item} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

export default HigherOrderComponentWrapper(CustomerReviews, "reviews");

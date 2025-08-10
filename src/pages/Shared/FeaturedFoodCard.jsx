import React from "react";
import { motion } from "framer-motion";

const FeaturedFoodCard = ({ food, index }) => {
  const { food_photo, food_name, notes, quantity } = food;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        delay: index * 0.1,
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-11/12 mx-auto bg-[#f5f9f1]  rounded-lg shadow-md "
    >
      <a href="#">
        <img
          className="rounded-t-lg w-full h-[350px] object-cover"
          src={food_photo}
          alt={food_name}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {food_name}
          </h5>
        </a>
        {/* <p className="mb-3 font-normal text-gray-700 ">
          {notes}
        </p> */}
        <div className="flex ">
          <h2 className=" text-orange-400 font-semibold text-center my-4">
            Available Quantity:{" "}
            <span className="text-emerald-400 font-extrabold ">{quantity}</span>
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedFoodCard;

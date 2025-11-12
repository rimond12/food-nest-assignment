import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const FeaturedFoodCard = ({ food, index }) => {
  const { food_photo, food_name, notes, quantity, _id } = food;
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
      className="max-w-11/12 mx-auto bg-gradient-to-b from-[#f7f5f2] to-[#ece9e6]  rounded-lg shadow-md "
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
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center ">
            {food_name}
          </h5>
        </a>
        {/* <p className="mb-3 font-normal text-center text-gray-700 ">
          {notes}
        </p> */}
        <div className="flex items-center justify-center ">
          <h2 className=" text-orange-400 font-semibold text-center my-4 ">
            Available Quantity:{" "}
            <span className="text-emerald-600 font-extrabold ">{quantity}</span>
          </h2>

        </div>
        <div className="flex justify-center items-center">
          <Link to={`/availableFoods/${_id}`}>
            <button className="relative flex h-[50px] p-5  items-center justify-center text-xl  overflow-hidden bg-amber-300 rounded-full text-green-700 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-green-600 before:duration-300 before:ease-out cursor-pointer hover:text-white hover:before:h-56 hover:before:w-full">
              <span className="relative z-10">See More ➺</span>
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedFoodCard;

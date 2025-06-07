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
        delay: index * 0.1, // stagger effect if multiple cards
      }}
      viewport={{ once: true, amount: 0.3 }} // triggers when 30% of the card is in view
      className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
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
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {food_name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {notes}
        </p>
        <div className="flex ">
        <h2 className="bg-amber-500 p-2 rounded-full text-white font-semibold text-center my-4">
          Available Quantity:{" "}
          <span className="text-emerald-400 font-extrabold ">{quantity}</span>
        </h2>
      </div>
      </div>
      
    </motion.div>
  );
};

export default FeaturedFoodCard;

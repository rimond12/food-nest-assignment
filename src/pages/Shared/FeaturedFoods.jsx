import React from "react";
import FeaturedFoodCard from "./FeaturedFoodCard";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const FeaturedFoods = ({ featuredFoods }) => {
  return (
    <div className="max-w-11/12 mx-auto my-30 ">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-5xl font-bold text-center my-5"
      >
        Top Featured Foods
      </motion.h2>
      <p className="text-center my-10 text-lg md:text-xl font-medium text-gray-700">
        <span className="text-emerald-700 text-xl font-semibold">
          <Typewriter
            words={[
              "Discover the most appreciated food donations from our community....",
              "These meals have been handpicked for their freshness, generous portions, and thoughtful sharing -",
              "making a difference, one plate at a time..",
            ]}
            loop={0}
            cursor
            cursorColor="orange"
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </span>
      </p>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
        {featuredFoods?.map((food, index) => (
          <FeaturedFoodCard
            index={index}
            key={food._id}
            food={food}
          ></FeaturedFoodCard>
        ))}
      </div>
      <div className="flex justify-center my-10">
        <NavLink to="/availableFoods">
          <button className="relative flex h-[50px] p-10  items-center justify-center text-xl  overflow-hidden bg-green-500 rounded-full text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-amber-300 before:duration-300 before:ease-out cursor-pointer hover:text-green-700 hover:before:h-56 hover:before:w-full">
            <span className="relative z-10">Show All Foods ➺</span>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default FeaturedFoods;

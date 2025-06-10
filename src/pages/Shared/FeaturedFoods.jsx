import React from "react";
import FeaturedFoodCard from "./FeaturedFoodCard";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const FeaturedFoods = ({ featuredFoods }) => {
  console.log(featuredFoods);

  return (
    <div className="max-w-11/12 mx-auto my-20 ">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-5xl font-bold text-center my-5"
      >
        Feautured Foods
      </motion.h2>
      <p className="text-center my-10 text-lg md:text-xl font-medium text-gray-700">
        <span className="text-emerald-700 font-semibold">
          <Typewriter
            words={[
              "Join our most active and inspiring communities...",
              "Handpicked just for you.",
              "Explore, connect, and grow together.",
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
        <NavLink
          to="/availableFoods"
          className="btn rounded-full px-10 py-8 bg-green-500 text-white text-xl"
        >
          Show All Foods ➟
        </NavLink>
      </div>
    </div>
  );
};

export default FeaturedFoods;

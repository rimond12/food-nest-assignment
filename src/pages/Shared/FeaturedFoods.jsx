import React from "react";
import FeaturedFoodCard from "./FeaturedFoodCard";
import { NavLink } from "react-router";

const FeaturedFoods = ({ featuredFoods }) => {
  console.log(featuredFoods);

  return (
    <div className="max-w-11/12 mx-auto mt-10 ">
      <h2 className="text-5xl font-bold text-center my-5">Feautured Foods</h2>
      <p className="text-center my-5">
        Join our most active and inspiring communities—handpicked for you.
        Explore, connect, and grow together...
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
        <NavLink to='/availableFoods' className="btn rounded-full px-10 py-8 bg-green-500 text-white text-xl">Show All Foods ➟</NavLink>
      </div>
    </div>
  );
};

export default FeaturedFoods;

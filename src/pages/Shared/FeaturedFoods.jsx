import React from "react";
import FeaturedFoodCard from "./FeaturedFoodCard";

const FeaturedFoods = ({featuredFoods}) => {
    console.log(featuredFoods);
    
  return (
   <div className="max-w-11/12 mx-auto mt-10 ">
    <h2 className="text-5xl font-bold text-center my-5">Feautured Foods</h2>
    <p className="text-center my-5">
        Join our most active and inspiring communities—handpicked for you.
        Explore, connect, and grow together...
      </p>
      <div className="grid  grid-cols-1 md:grid-cols-3  gap-10">
        {
            featuredFoods?.map((food) => <FeaturedFoodCard key={food._id} food={food}></FeaturedFoodCard>)
        }

      </div>
   </div>
  );
};

export default FeaturedFoods;

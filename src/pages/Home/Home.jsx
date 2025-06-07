import React, { Suspense } from "react";
import Slider from "../Shared/Slider";
import FeaturedFoods from "../Shared/FeaturedFoods";
import { useLoaderData } from "react-router";

const Home = () => {
  const featuredFoods = useLoaderData();
  console.log(featuredFoods);

  return (
    <div>
      <Slider></Slider>

      <FeaturedFoods featuredFoods={featuredFoods}></FeaturedFoods>
    </div>
  );
};

export default Home;

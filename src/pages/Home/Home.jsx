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
      <Suspense fallback={<div>Loading...</div>}>
        <FeaturedFoods featuredFoods={featuredFoods}></FeaturedFoods>
      </Suspense>
    </div>
  );
};

export default Home;

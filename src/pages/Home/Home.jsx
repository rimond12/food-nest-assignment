import React from "react";
import Slider from "../Shared/Slider";
import FeaturedFoods from "../Shared/FeaturedFoods";
import { useLoaderData } from "react-router";
import OurImpactSection from "../Shared/OurImpactSection";
import FoodNewsLetter from "../Shared/FoodNewsLetter";
import TestimonialSlider from "../Shared/TestimonialSlider";

const Home = () => {
  const featuredFoods = useLoaderData();
  console.log(featuredFoods);

  return (
    <div>
      <Slider></Slider>
      <FeaturedFoods featuredFoods={featuredFoods}></FeaturedFoods>
      <OurImpactSection></OurImpactSection>
      <TestimonialSlider></TestimonialSlider>
      <FoodNewsLetter></FoodNewsLetter>
    </div>
  );
};

export default Home;

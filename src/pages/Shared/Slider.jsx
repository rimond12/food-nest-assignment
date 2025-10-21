import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./Slider.css";

const Slider = () => {
 const slides = [
  {
    img: "https://i.ibb.co.com/4n7gffMK/happy-family-havinf-dinner-together-1-2.webp",
    title: "Share a Meal, Share Happiness",
    desc: "Bringing families closer together by sharing nutritious, delicious meals that create lasting memories and strengthen bonds."
  },
  {
    img: "https://i.ibb.co.com/0VMKXR8M/enjoying-dinner-with-friends-top-view-group-people-having-dinner-together.webp",
    title: "Friends at One Table",
    desc: "Celebrating friendship and connection through shared meals, laughter, and stories — making every gathering a special occasion."
  },
  {
    img: "https://i.ibb.co.com/HTnWYr64/merchant-giving-package-courier.webp",
    title: "Delivering Kindness",
    desc: "Providing fast, dependable food delivery services that bring warmth and comfort directly to the doorsteps of those in need."
  },
  {
    img: "https://i.ibb.co.com/LdL36zYj/medium-shot-people-collecting-food.webp",
    title: "Community Food Drive",
    desc: "Uniting communities to collect and redistribute surplus food, minimizing waste while supporting families and individuals facing food insecurity."
  },
  {
    img: "https://i.ibb.co.com/d0SJ98B5/close-up-delivery-man-with-food-crate.webp",
    title: "Fresh & Healthy for All",
    desc: "Ensuring every household has access to fresh, healthy, and nutritious food, empowering people to lead happier, healthier lives."
  }
];


  return (
    <div className="w-full mx-auto md:-mt-25 mt-0">
      <Swiper
        modules={[EffectFade, Pagination, Autoplay, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        navigation={true}
        loop={true}
        autoplay={{ delay: 6000 }}
        pagination={{ clickable: true }}
        className="shadow-xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img src={slide.img} alt={slide.title} className="slider-image" />
              <div className="slider-overlay">
                <h3>{slide.title}</h3>
                <p>{slide.desc}</p>
                <button className="relative flex h-[50px] md:w-45 w-45 items-center justify-center text-xl overflow-hidden bg-green-500 rounded-full text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-amber-300 before:duration-500 before:ease-out cursor-pointer hover:text-green-700 hover:before:h-56 hover:before:w-56">
                  <span className="relative z-10">Learn more ➺</span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

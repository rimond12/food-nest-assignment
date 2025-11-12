import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "react-loading-skeleton/dist/skeleton.css";
import "./Slider.css";
import SkeletonImageLoader from "./SkeletonImageLoader";

const Slider = () => {
  const slides = [
    {
      img: "https://i.ibb.co.com/S7sFphxJ/2151461676.jpg",
      title: "Share a Meal, Share Happiness",
      desc: "Bringing families closer together by sharing nutritious, delicious meals that create lasting memories and strengthen bonds."
    },
    {
      img: "/images/1.jpg",
      title: "Friends at One Table",
      desc: "Celebrating friendship and connection through shared meals, laughter, and stories — making every gathering a special occasion."
    },
    {
      img: "/images/3.jpg",
      title: "Delivering Kindness",
      desc: "Providing fast, dependable food delivery services that bring warmth and comfort directly to the doorsteps of those in need."
    },
    {
      img: "/images/2.jpg",
      title: "Community Food Drive",
      desc: "Uniting communities to collect and redistribute surplus food, minimizing waste while supporting families and individuals facing food insecurity."
    },
    {
      img: "/images/3.jpg",
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
            <SlideItem slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// 🔹 SlideItem with react-loading-skeleton, structure unchanged
const SlideItem = ({ slide }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative">
      {/* Skeleton while image is loading */}
      {loading && <SkeletonImageLoader className="w-full min-h-screen rounded-lg" />}

      <img
        src={slide.img}
        alt={slide.title}
        className={`slider-image transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        loading="lazy"
        onLoad={() => setLoading(false)}
      />

      {/* Overlay text */}
      {!loading && (
        <div className="slider-overlay">
          <h3>{slide.title}</h3>
          <p>{slide.desc}</p>
          <button className="relative flex h-[50px] md:w-45 w-45 items-center justify-center text-xl overflow-hidden bg-green-500 rounded-full text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-amber-300 before:duration-500 before:ease-out cursor-pointer hover:text-green-700 hover:before:h-56 hover:before:w-56">
            <span className="relative z-10">Learn more ➺</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Slider;

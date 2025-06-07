import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Slider = () => {
  return (
    <div className="w-full mx-auto md:-mt-25  mt-0">
      <Swiper
        modules={[EffectCoverflow, Pagination, Autoplay]}
        effect="coverflow" 
        grabCursor={true} 
        centeredSlides={true} 
        slidesPerView={"auto"} 
        coverflowEffect={{
         
          rotate: 50,
          stretch: 0, 
          depth: 100,
          modifier: 1, 
          slideShadows: true,
        }}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className=" shadow-xl"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/BV2MbCr3/happy-family-havinf-dinner-together.webp"
            alt="Slide 1"
            className="w-full rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/LDntgMXY/enjoying-dinner-with-friends-top-view-group-people-having-dinner-together.jpg"
            alt="Slide 2"
            className="w-full rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/JWy8sCL7/full-shot-gamer-sitting-chair.jpg"
            alt="Slide 3"
            className="w-full rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/7dK4NWBx/man-cook-holds-pan-with-vegetables-flying-air.jpg"
            alt="Slide 4"
            className="w-full rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/bgJPBPDd/healthy-lifestyle-running-outdoors.jpg"
            alt="Slide 5"
            className="w-full rounded-xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

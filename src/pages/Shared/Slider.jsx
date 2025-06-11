import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Slider = () => {
  return (
    <div className="w-full mx-auto md:-mt-25  mt-0">
      <Swiper
        modules={[EffectFade, Pagination, Autoplay, Navigation]}
        effect="EffectFade"
        navigation={true} 
        grabCursor={true} 
        centeredSlides={true} 
        slidesPerView={"auto"} 
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className=" shadow-xl"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/BV2MbCr3/happy-family-havinf-dinner-together.webp"
            alt="Slide 1"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/LDntgMXY/enjoying-dinner-with-friends-top-view-group-people-having-dinner-together.jpg"
            alt="Slide 2"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/0RPXLVYK/merchant-giving-package-courier.jpg"
            alt="Slide 3"
            className="w-full "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/60Q9Y4C2/medium-shot-people-collecting-food.jpg"
            alt="Slide 4"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/Kp4PvmtW/close-up-delivery-man-with-food-crate.jpg"
            alt="Slide 5"
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

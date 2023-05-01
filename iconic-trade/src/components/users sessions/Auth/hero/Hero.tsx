import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import { Pagination } from "swiper";
import Swippper from "./Swippper";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="mb-4">
      <div className="h-40 w-full bg-slate-800 rounded-sm border border-slate-200/10">
        <Swiper
          className="mySwiper h-full"
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <Swippper bg="bg-red-100" />
          </SwiperSlide>
          <SwiperSlide>
            <Swippper bg="bg-blue-100" />
          </SwiperSlide>
          <SwiperSlide>
            <Swippper bg="bg-green-100" />
          </SwiperSlide>
          <SwiperSlide>
            <Swippper bg="bg-stone-100" />
          </SwiperSlide>
          <SwiperSlide>
            <Swippper bg="bg-slate-100" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;

// 640: {
//   slidesPerView: 2,
//   spaceBetween: 20,
// },
// 768: {
//   slidesPerView: 4,
//   spaceBetween: 40,
// },
// 1024: {
//   slidesPerView: 5,
//   spaceBetween: 50,
// },
// breakpoints={{
//   1024: {
//     slidesPerView: 2,
//     spaceBetween: 50,
//   },
// }}

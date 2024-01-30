
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { testimonialData } from "../data";
import TestimonialCard from "./TestimonialCard";

const TestimonialCarousel = () => {


  return (
    <div className="flex  flex-col h-[600px] bg-cream">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 1,
          },
          1100: {
            slidesPerView: 2,
            spaceBetween: 1,
          },
          
          1620: {
            slidesPerView: 3,
            spaceBetween: 15,
          },

        }}
        freeMode={true}
        pagination={{
          clickable: true,
          
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] items-center justify-center flex lg:max-w-[80%] pb-7"
      >
        {testimonialData.map((item) => (
          <SwiperSlide key={item.id} className="items-center justify-center flex">
            <TestimonialCard text={item.text} name={item.name} position={item.position} pic={item.picture}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default TestimonialCarousel;

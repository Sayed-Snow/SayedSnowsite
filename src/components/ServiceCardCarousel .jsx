
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { serviceData } from "../data";
import ServiceCard from "./ServiceCard";

const ServiceCardCarousel = () => {


  return (
    <div className="flex items-center justify-center flex-col h-[600px] bg-cream">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%] pb-7"
      >
        {serviceData.map((item) => (
          <SwiperSlide key={item.id} className="">
            <ServiceCard  text={item.text} title={item.title} catergory={item.category}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ServiceCardCarousel;

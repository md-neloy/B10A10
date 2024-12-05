import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import bannerimg1 from "../../assets/banner.jpg";
import bannerimg2 from "../../assets/banner2.webp";
import bannerimg3 from "../../assets/banner3.webp";

const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="relative">
      <div className="absolute top-1/3 left-2/3 -translate-x-2/3 z-30 w-max">
        <h1 className="text-3xl lg:text-8xl text-white font-extrabold">
          Join the journey for <br /> idea to market
        </h1>
      </div>
      <div>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 h-[800px]"
        >
          <SwiperSlide className="w-full ">
            <img src={bannerimg1} className="w-full " />
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative ">
              <div className="absolute w-full h-full bg-[#797C8B] opacity-50 z-10"></div>
              <img src={bannerimg2} className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative ">
              <div className="absolute w-full h-full bg-[#797C8B] opacity-50 z-10"></div>
              <img src={bannerimg3} className="w-full" />
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper h-16"
        >
          <SwiperSlide className="!w-fit !mr-0 cursor-pointer">
            <img src={bannerimg1} className="w-24 !h-full" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit !mr-0 cursor-pointer">
            <img src={bannerimg2} className="w-24 !h-full" />
          </SwiperSlide>
          <SwiperSlide className="!w-fit !mr-0 cursor-pointer">
            <img src={bannerimg3} className="w-24 !h-full" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;

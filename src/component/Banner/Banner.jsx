import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import bannerimg1 from "../../assets/banner.jpg";
import bannerimg2 from "../../assets/banner2.webp";
import bannerimg3 from "../../assets/banner3.webp";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="relative">
      {/* Overlay text */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 z-30 text-center w-[90%] max-w-xl">
        <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-6xl text-white font-extrabold">
          Join the journey for
          <br />
          <span className="text-yellow-300">
            <Typewriter
              words={["idea to market"]}
              loop={"infinitely"}
            ></Typewriter>
          </span>
        </h1>
      </div>

      {/* Main Swiper */}
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
        className="mySwiper2"
      >
        <SwiperSlide className="relative">
          <img
            src={bannerimg1}
            alt="Banner 1"
            className="w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute inset-0 bg-[#797C8B] opacity-50 z-10"></div>
          <img
            src={bannerimg2}
            alt="Banner 2"
            className="w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute inset-0 bg-[#797C8B] opacity-50 z-10"></div>
          <img
            src={bannerimg3}
            alt="Banner 3"
            className="w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px] object-cover"
          />
        </SwiperSlide>
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper h-16"
      >
        <SwiperSlide className="!w-fit cursor-pointer">
          <img
            src={bannerimg1}
            alt="Thumbnail 1"
            className="w-20 h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="!w-fit cursor-pointer">
          <img
            src={bannerimg2}
            alt="Thumbnail 2"
            className="w-20 h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="!w-fit cursor-pointer">
          <img
            src={bannerimg3}
            alt="Thumbnail 3"
            className="w-20 h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;

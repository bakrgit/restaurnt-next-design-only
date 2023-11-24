import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../style/rest-details.css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import Image from "next/image";
export const RestaurantSlider = () => {
  const imgUrls = [
    "https://picsum.photos/400",
    "https://picsum.photos/401",
    "https://picsum.photos/402",
    "https://picsum.photos/403",
    "https://picsum.photos/404",
    "https://picsum.photos/405",
    "https://picsum.photos/406",
    "https://picsum.photos/407",
    "https://picsum.photos/408",
    "https://picsum.photos/409",
    "https://picsum.photos/410",
    "https://picsum.photos/411",
    "https://picsum.photos/412",
    "https://picsum.photos/413",
  ];
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      autoplay={{ delay: 1000 }}
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="mySwiper"
    >
      {imgUrls?.map((url, index) => {
        return (
          <SwiperSlide key={index}>
            <Image
              src={url}
              className="slide-img"
              width={400}
              height={400}
              alt=""
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

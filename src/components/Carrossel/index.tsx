import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { commentsData } from "../../data/data";
import Comment from "../Comment";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carrossel() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true

       }}
      spaceBetween={50}
      slidesPerView={1}
      className="w-full max-w-4xl mx-auto"
    >
        {commentsData.map((comment, index) => (
      <SwiperSlide key={index} className="flex bg-amber-950">
          <Comment
            client={comment.client}
            comment={comment.comment}
            position={comment.position}
            
          />
      </SwiperSlide>
        ))}
    </Swiper>
  );
}

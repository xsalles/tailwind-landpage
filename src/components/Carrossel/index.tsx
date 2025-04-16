import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { commentsData } from "../../data/data";
import Comment from "../Comment";


export default function Carrossel() {
  return (
    <div className="relative w-full max-w-[1250px] mx-auto">
      <Swiper
        modules={[Navigation]}
        navigation

        spaceBetween={0} 
        slidesPerView={1.8} 
        centeredSlides={true} 
        className="w-full"
      >
        {commentsData.map((comment, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <Comment
              client={comment.client}
              comment={comment.comment}
              position={comment.position}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
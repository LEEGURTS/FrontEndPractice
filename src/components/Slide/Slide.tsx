import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  EffectCards,
  EffectCoverflow,
  EffectCreative,
  EffectCube,
  EffectFlip,
} from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-creative";
import "swiper/css/effect-cube";
import "swiper/css/effect-flip";

const Slide: React.FunctionComponent = () => {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const SwiperSlideList = Array(10)
    .fill(0)
    .map((_, idx) => {
      return (
        <SwiperSlide key={idx} className="max-w-[600px]">
          <img src={"https://picsum.photos/600/600/?random=" + idx}></img>
        </SwiperSlide>
      );
    });

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      <Swiper
        onSwiper={setSwiper}
        modules={[
          EffectFade,
          EffectCards,
          EffectCoverflow,
          EffectCreative,
          EffectCube,
          EffectFlip,
        ]}
        effect={
          localStorage.getItem("SwiperEffect") as
            | "slide"
            | "fade"
            | "cube"
            | "coverflow"
            | "flip"
            | "creative"
            | "cards"
        }
        className="max-w-[600px] flex items-center justify-center shadow-xl"
        centeredSlides={true}
      >
        {SwiperSlideList}
      </Swiper>
      <section className="mt-[4em] flex flex-row items-center justify-around w-[80%]">
        <button
          className="shadow-xl rounded-[10px] p-4 flex items-center justify-center bg-[#FAFAFA]"
          onClick={() => {
            localStorage.setItem("SwiperEffect", "slide");
            window.location.reload();
          }}
        >
          slide
        </button>
        <button
          className="shadow-xl rounded-[10px] p-4 flex items-center justify-center bg-[#FAFAFA]"
          onClick={() => {
            localStorage.setItem("SwiperEffect", "fade");
            window.location.reload();
          }}
        >
          fade
        </button>
        <button
          className="shadow-xl rounded-[10px] p-4 flex items-center justify-center bg-[#FAFAFA]"
          onClick={() => {
            localStorage.setItem("SwiperEffect", "cube");
            window.location.reload();
          }}
        >
          Cube
        </button>
        <button
          className="shadow-xl rounded-[10px] p-4 flex items-center justify-center bg-[#FAFAFA]"
          onClick={() => {
            localStorage.setItem("SwiperEffect", "coverflow");
            window.location.reload();
          }}
        >
          coverflow
        </button>
        <button
          className="shadow-xl rounded-[10px] p-4 flex items-center justify-center bg-[#FAFAFA]"
          onClick={() => {
            localStorage.setItem("SwiperEffect", "flip");
            window.location.reload();
          }}
        >
          flip
        </button>
        <button
          className="shadow-xl rounded-[10px] p-4 flex items-center justify-center bg-[#FAFAFA]"
          onClick={() => {
            localStorage.setItem("SwiperEffect", "creative");
            window.location.reload();
          }}
        >
          creative
        </button>
        <button
          className="shadow-xl rounded-[10px] p-4 flex items-center justify-center bg-[#FAFAFA]"
          onClick={() => {
            localStorage.setItem("SwiperEffect", "cards");
            window.location.reload();
          }}
        >
          cards
        </button>
      </section>
    </main>
  );
};

export default Slide;

"use client";

import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "./styles.css";

interface Props {
  images: string[];
  styles: string;
}

export default function PreviewImage(props: Props) {
  const { images, styles } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const handleThumbsSwiper = (swiper: SwiperClass) => {
    setThumbsSwiper(swiper);
  };

  return (
    <div className={styles}>
      {/* main swiper */}
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image, index) => (
          <SwiperSlide key={`key-of-swiper-main-${index}`}>
            <Image height={300} width={300} alt="img" src={image} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* preview swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        navigation={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={`key-of-swiper-preview-${index}`}>
            <Image height={100} width={100} alt="preview-img" src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

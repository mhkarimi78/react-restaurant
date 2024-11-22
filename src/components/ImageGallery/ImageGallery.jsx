import React, { useState } from 'react';
import './ImageGallery.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import ImageGallery1 from '../../utils/images/gallery1.jpg';
import ImageGallery2 from '../../utils/images/gallery2.jpg';
import ImageGallery3 from '../../utils/images/gallery3.jpg';
import ImageGallery4 from '../../utils/images/gallery4.jpg';
import ImageGallery5 from '../../utils/images/gallery5.jpg';
import ImageGallery6 from '../../utils/images/gallery6.jpg';
import ImageGallery7 from '../../utils/images/gallery7.jpg';
import ImageGallery8 from '../../utils/images/gallery8.jpg';
import ImageGallery9 from '../../utils/images/gallery9.jpg';
import ImageGallery10 from '../../utils/images/gallery10.jpg';

export default function ImageGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 my-5"
      >
        <SwiperSlide>
          <img src={ImageGallery1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageGallery2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageGallery3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageGallery4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageGallery5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageGallery6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageGallery7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageGallery8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageGallery9} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageGallery10} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mb-5"
      >
        <SwiperSlide>
          <img src={ImageGallery1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageGallery2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageGallery3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageGallery4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageGallery5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageGallery6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageGallery7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageGallery8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageGallery9} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageGallery10} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
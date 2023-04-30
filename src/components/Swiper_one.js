import React from 'react';
import { Navigation,Pagination,Scrollbar,A11y } from 'swiper';
import { Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import '../style.css';
import slide1 from "../photo/slide1.jpg";
import slide2 from "../photo/slide2.jpg"
import slide3 from "../photo/slide3.jpg"
import slide4 from "../photo/slide4.jpg"
import slide5 from "../photo/slide5.jpg"
import slide6 from "../photo/slide6.jpg"


function Swiper_one() {
  return (
    <div className='container'>
      <div className='child_swiper'>
          <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination,A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
    }}>
      
      <SwiperSlide><img src={slide1} /></SwiperSlide>
      <SwiperSlide><img src={slide2} /></SwiperSlide>
      <SwiperSlide><img src={slide3} /></SwiperSlide>
      <SwiperSlide><img src={slide4} /></SwiperSlide>
      <SwiperSlide><img src={slide5} /></SwiperSlide>
      <SwiperSlide><img src={slide6} /></SwiperSlide>
     
    </Swiper>
    </div>
    </div>
  )
}

export default Swiper_one

import React from 'react'
import Header from './Header';
import Header_bottom from './Header_bottom';
import Header_bottom_child from './Header_bottom_child';
import Humburger from './Humburger';
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from 'react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import '../style.css';
import { FreeMode, Navigation, Thumbs } from "swiper";
import phone1 from "../photo/phone1.jpg";
import phone2 from "../photo/phone2.jpg";
import phone3 from "../photo/phone3.jpg";
import phone4 from "../photo/phone4.jpg";
import phone5 from "../photo/phone5.jpg";
import { InputNumber } from 'rsuite';



function PhotoMenu() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
     <Header />
   <Humburger />
   <Header_bottom />
   <Header_bottom_child />
    <div className='container'>
      <div className='header_swapper'>
      <div className='big_swapper' >
      <div className='big_swapper1'>
    <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <div className='swiper_slide_img1'>
        <SwiperSlide>
          <img src={phone1} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={phone2} />

        </SwiperSlide>
        <SwiperSlide>
          <div className='Swiper_slide_img1'>
          <img src={phone3} />

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='Swiper_slide_img1'>
          <img src={phone4} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='Swiper_slide_img1'>
          <img src={phone5} />
          </div>
        </SwiperSlide>
        </div>
      </Swiper>
      </div>
      <div className='big_swapper2'>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper3"
      >
        
          <SwiperSlide>
          <div className='Swiper_slide_img2'>
          <img src={phone1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='Swiper_slide_img2'>
          <img src={phone2} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='Swiper_slide_img2'>
          <img src={phone3} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='Swiper_slide_img2'>
          <img src={phone4} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='Swiper_slide_img2'>
          <img src={phone5} />
          </div>
        </SwiperSlide>
       
      </Swiper>
      </div>     
    </div>  
        <div className='swiper_right_item'>
            <div className='swiper_header_info'>
              <div className='swiper_header_info1'>
                <p>5.0 (20 оценок) Более 200 заказов</p>
                <p>В желания</p>
              </div>
              <h1 id='h1'>Пылесос Bosch BGC21X300</h1>
              <div className='about_solder'>
                <p>Продавес:</p>
                <p>Bosch</p>
              </div>
              <div className='dastafka'>
                <p>Достафка:</p>
                <p>1 день, бесплатно</p>
              </div>
            </div>
            <div className='list1'></div>
            <div className='swiper_main_item'>
                <div className='swiper-input'>
                  <p>Количество:</p>
                  <div className='input1' style={{ width: 190}}>
                    <InputNumber defaultValue={0} max={6} min={0} />
                    <p style={{color: "#00C853"}}>В наличии 6</p>
                  </div>
                </div>
                <p>Цена:</p>
                <div className='swiper_price'>
                  <p>1 762 000 сум</p>
                  <span>2 181 000 сум</span>
                  <button>Акция</button>
                </div>
                <div className='swiper_price_niput'>
                  <span>От 211 440 сум/мес</span>
                  <p>в рассрочку</p>
                </div>
                <div className='swiper_button'>
                  <button id='but1'>Добавить в корзину</button>
                  <button id='but2'>Купить в 1 клик</button>
                </div>
                <div className='swiper_buy_people'>
                  <p>61 человек купил на этой неделе</p>
                </div>
            </div>
            <div className='swiper_footer_item'>
                <h4>Кратко о товаре:</h4>
                <p>Потребляемая мощности 550 Вт</p>
                <p>Тип пылесборника контейнер</p>
                <p>Региловка Мощности: на корпуси</p>
                <p>Уровень шума: 76 дБ</p>
                <p>Емкость пылесборника:2Л</p>
                
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default PhotoMenu
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from '/src/assets/things-to-do/attraction-1.png';
import slide_image_2 from '/src/assets/things-to-do/artactivities-1.png';
import slide_image_3 from '/src/assets/things-to-do/museum-1.png';
import slide_image_4 from '/src/assets/things-to-do/food-1.png';
import slide_image_5 from '/src/assets/things-to-do/drinks-1.png';
import slide_image_6 from '/src/assets/things-to-do/hotels-1.png';
import slide_image_7 from '/src/assets/things-to-do/souvenir-1.png';


import './tngcarousel.css'

const TngCarousel = () => {
  return (
    <div>
      <div className="container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <a href="">
            <img src={slide_image_1} alt="slide_image" />
            <h2 className='text-center font-Poppins font-semibold text-[20px]'>Attraction</h2>
          </a>
          <button className='absolute flex items-center justify-center bg-button2 rounded-br-[8px] rounded-tl-[8px] text-button right-[-1px] bottom-0 w-[3rem] h-[3rem] text-2xl'>
            <ion-icon name="heart-outline"></ion-icon>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img src={slide_image_2} alt="slide_image" />
            <h2 className='text-center font-Poppins font-semibold text-[20px]'>Art Activities</h2>
          </a>
          <button className='absolute flex items-center justify-center bg-button2 rounded-br-[8px] rounded-tl-[8px] text-button right-[-1px] bottom-0 w-[3rem] h-[3rem] text-2xl'>
            <ion-icon name="heart-outline"></ion-icon>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img src={slide_image_3} alt="slide_image" />
            <h2 className='text-center font-Poppins font-semibold text-[20px]'>Museum</h2>
          </a>
          <button className='absolute flex items-center justify-center bg-button2 rounded-br-[8px] rounded-tl-[8px] text-button right-[-1px] bottom-0 w-[3rem] h-[3rem] text-2xl'>
            <ion-icon name="heart-outline"></ion-icon>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img src={slide_image_4} alt="slide_image" />
            <h2 className='text-center font-Poppins font-semibold text-[20px]'>Foods</h2>
          </a>
          <button className='absolute flex items-center justify-center bg-button2 rounded-br-[8px] rounded-tl-[8px] text-button right-[-1px] bottom-0 w-[3rem] h-[3rem] text-2xl'>
            <ion-icon name="heart-outline"></ion-icon>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img src={slide_image_5} alt="slide_image" />
            <h2 className='text-center font-Poppins font-semibold text-[20px]'>Drinks</h2>
          </a>
          <button className='absolute flex items-center justify-center bg-button2 rounded-br-[8px] rounded-tl-[8px] text-button right-[-1px] bottom-0 w-[3rem] h-[3rem] text-2xl'>
            <ion-icon name="heart-outline"></ion-icon>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img src={slide_image_6} alt="slide_image" />
            <h2 className='text-center font-Poppins font-semibold text-[20px]'>Hotels</h2>
          </a>
          <button className='absolute flex items-center justify-center bg-button2 rounded-br-[8px] rounded-tl-[8px] text-button right-[-1px] bottom-0 w-[3rem] h-[3rem] text-2xl'>
            <ion-icon name="heart-outline"></ion-icon>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img src={slide_image_7} alt="slide_image" />
            <h2 className='text-center font-Poppins font-semibold text-[20px]'>Souvenir</h2>
          </a>
          <button className='absolute flex items-center justify-center bg-button2 rounded-br-[8px] rounded-tl-[8px] text-button right-[-1px] bottom-0 w-[3rem] h-[3rem] text-2xl'>
            <ion-icon name="heart-outline"></ion-icon>
          </button>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  </div>
  )
}

export default TngCarousel

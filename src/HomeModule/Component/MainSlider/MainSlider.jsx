'use client';
import React, { useRef, useState } from 'react';
import styles from "./mainSlider.module.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import slide1 from "../../../assets/mp4.jpg";

const MainSlider = () => {
    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 500)}s`;
  };
  return (
    <>
    <div className={styles.mainWrapper}>
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
       
        <SwiperSlide>
          <div className={styles.imageWrapper}>
          </div>
          <Image src={slide1} />
          <div className={styles.content}>
            <h3>Wedding Planner</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sed at perspiciatis nesciunt consequatur, deleniti voluptatibus nisi impedit nemo quos tempora quas dicta, debitis unde molestiae consectetur iusto quisquam laborum?</p>
          </div>
        </SwiperSlide>
       
        
        <div className={styles.autoplayProgress} slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>

    </>
  )
}

export default MainSlider

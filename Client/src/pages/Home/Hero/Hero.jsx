import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Hero.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className='h-[39rem] mt-20 mb-20'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
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
          <img className='h-96' src="https://www.wallpapertip.com/wmimgs/0-3795_wallpaper-books-library-shelves-lighting-hd-book-library.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide><img className='h-96' src="https://th.bing.com/th/id/R.44f210f03fd54fd0244de856f3538d8a?rik=xA3Yht1qrOq3%2bw&pid=ImgRaw&r=0" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-96' src="https://images.e-flux-systems.com/295608_6f272bb3d61dc0a59f9a297fa198807e.jpg,2000x2000" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-96' src="https://theartssociety.org/sites/default/files/1%20Gladstones%20Library%20Extra%20Large%20Size.jpg" alt="" /></SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}

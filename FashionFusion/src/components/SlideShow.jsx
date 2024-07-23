// Slideshow.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import WeekCardComponent from './WeekCardComponent';

const Slideshow = () => {
  const weekData = [
    { day: "Sun", date: "Jul 21"},
    { day: "Mon", date: "Jul 22"},
    { day: "Tue", date: "Jul 23"},
    { day: "Wed", date: "Jul 24"},
    { day: "Thu", date: "Jul 25"},
    { day: "Fri", date: "Jul 26"},
    { day: "Sat", date: "Jul 27"},
  ];

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {weekData.map((data, index) => (
          <SwiperSlide key={index}>
            <WeekCardComponent day={data.day} date={data.date}/>
          </SwiperSlide>
        ))}
        <div>
          write here
        </div>
      </Swiper>
    </div>
  );
};

export default Slideshow;

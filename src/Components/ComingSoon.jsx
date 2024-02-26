import React from 'react';
import '../Styles/ComingSoon.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ComingSoon = ({ movieData, clickHandler }) => {
  return (
    <div className='comingSoonContainer scrollmenu'>
      <Swiper slidesPerView={6} spaceBetween={30} navigation={true} loop={true} modules={[Navigation]} className='mySwiper'>
        {movieData.results.map((movie, index) => (
          <SwiperSlide key={index} className='movie'>
            <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} onClick={() => clickHandler(movie.title, movie.id)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ComingSoon;

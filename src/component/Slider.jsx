import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// Import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <>
      <div className="sliderbox">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="image/hr3.jpg" alt="Basic Collections - Skin care and Body care" />
            <h6 className='sliderhead'>BASIC COLLECTIONS</h6>
            <h1 className='sliderhead2'>Skin care</h1>
            <span className='textslider'>and Body care</span>
            <span className='textslider_spne'>
              We're all up in your bathroom with products that are good for 
              <br /> your body and the environment.
            </span>
            <button type='button' className='btn12'>
              <span className='btnspane'>Save</span>
            </button>
          </SwiperSlide>
          {/* Add more SwiperSlide components here if needed */}
          <SwiperSlide>
            <img src="image/hr3.jpg" alt="Basic Collections - Skin care and Body care" />
            <h6 className='sliderhead'>BASIC COLLECTIONS</h6>
            <h1 className='sliderhead2'>Skin care</h1>
            <span className='textslider'>and Body care</span>
            <span className='textslider_spne'>
              We're all up in your bathroom with products that are good for 
              <br /> your body and the environment.
            </span>
            <button type='button' className='btn12'>
              <span className='btnspane'>Save</span>
            </button>
          </SwiperSlide>
          {/* Uncomment and use the SwiperSlide below if needed */}
          {/* <SwiperSlide><img src="image/hr6_1728x copy.jpg" alt="Another image description" /></SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;

import React from "react";
import './styling.css';
import image1 from '../Images/Sidebar/sideBanner.jpg';
import image2 from '../Images/Sidebar/sideBanner2.jpg';
import image3 from '../Images/Sidebar/sideBanner3.jpg';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules';
import  'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';

const LeftSideBar = () => {

    return (
        <aside id="sideBar">
            <Swiper 
                effect={'flip'}
                modules = {[Autoplay, Pagination]}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: true,
                }}
                pagination = {{clickable: true}}
                spaceBetween={20} 
                slidesPerView={1}
                >
                <SwiperSlide><img src={image1} alt='img1' className='carousel-img' /></SwiperSlide>
                <SwiperSlide><img src={image2} alt='img2' className='carousel-img' /></SwiperSlide>
                <SwiperSlide><img src={image3} alt='img3' className='carousel-img' /></SwiperSlide>
            </Swiper>

        </aside>
    );
}

export default LeftSideBar;

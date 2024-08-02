import React, { useRef, useEffect } from "react";
import './styling.css';
import image1 from '../Images/Sidebar/One.jpg';
import image2 from '../Images/Sidebar/Two.jpg';
import image3 from '../Images/Sidebar/Three.jpg';
import image4 from '../Images/Sidebar/Four.jpg';
import image5 from '../Images/Sidebar/Five.jpg';
import image6 from '../Images/Sidebar/Six.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';

const LeftSideBar = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        const handleMouseEnter = () => {
            if (swiperRef.current && swiperRef.current.autoplay) {
                swiperRef.current.autoplay.stop();
            }
        };

        const handleMouseLeave = () => {
            if (swiperRef.current && swiperRef.current.autoplay) {
                swiperRef.current.autoplay.start();
            }
        };

        const swiperContainer = swiperRef.current && swiperRef.current.el;
        if (swiperContainer) {
            swiperContainer.addEventListener('mouseenter', handleMouseEnter);
            swiperContainer.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                swiperContainer.removeEventListener('mouseenter', handleMouseEnter);
                swiperContainer.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, []);

    return (
        <aside id="sideBar">
            <Swiper
                ref={swiperRef}
                effect={'flip'}
                modules={[Autoplay, Pagination]}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: true,
                }}
                pagination={{ dynamicBullets: true, clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                <SwiperSlide className='slider' onClick={() => { window.location.href = 'mailto:info@tmstaffing.ca'; }}>
                    <img src={image1} alt='img1' className='carousel-img' />
                </SwiperSlide >
                
                <SwiperSlide className='slider' onClick={() => { window.location.href = 'mailto:info@tmstaffing.ca'; }}>
                    <img src={image2} alt='img2' className='carousel-img' />
                </SwiperSlide>
                
                <SwiperSlide className='slider' onClick={() => { window.location.href = 'mailto:info@tmstaffing.ca'; }}>
                    <img src={image3} alt='img3' className='carousel-img' />
                </SwiperSlide>
                
                <SwiperSlide className='slider' onClick={() => { window.location.href = 'mailto:info@tmstaffing.ca'; }}>
                    <img src={image4} alt='img4' className='carousel-img' />
                </SwiperSlide>
                
                <SwiperSlide className='slider' onClick={() => { window.location.href = 'mailto:info@tmstaffing.ca'; }}>
                    <img src={image5} alt='img5' className='carousel-img' />
                </SwiperSlide>
                
                <SwiperSlide className='slider' onClick={() => { window.location.href = 'mailto:hr@tmstaffing.ca'; }}>
                    <img src={image6} alt='img6' className='carousel-img' />
                </SwiperSlide>
            </Swiper>
        </aside>
    );
}

export default LeftSideBar;

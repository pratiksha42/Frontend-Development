import React from "react";
import headerCSS from "./../Header/Header.module.css"

import {Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import {Autoplay} from 'swiper/modules'

import destinationImg1 from './../../assets/tour01.jpg'
import destinationImg2 from './../../assets/tour02.jpg'
import destinationImg3 from './../../assets/tour03.jpg'
import destinationImg4 from './../../assets/tour04.jpg'
import destinationImg5 from './../../assets/tour05.jpg'
import destinationImg6 from './../../assets/tour06.jpg'

function Header(){
    return(
        <div className={`${headerCSS.header_wrapper} section`} id="home">
            <div className={headerCSS.imageContainer}>
                <h2>Escape the Ordinary<br />  Embrace the Extraordinary. </h2>
            </div>

            <Swiper 
                spaceBetween={30}
                slidesPerView={5}
                loop={true}
                autoplay={
                    {
                        delay: 1500,
                    }
                }
                breakpoints={
                    {
                        0:{
                            slidesPerView: 1,
                        },
                        500:{
                            slidesPerView: 2,
                        },
                        768:{
                            slidesPerView: 3,
                        },
                        1024:{
                            slidesPerView: 4,
                        },
                        1200:{
                            slidesPerView: 5,
                        }
                    }
                }
                modules={[Autoplay]}
            
            className={headerCSS.swiper}>
                <SwiperSlide>
                    <div className={headerCSS.DestinationsCard}>
                        <img src={destinationImg1} alt="India" />
                        <h3>India</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={headerCSS.DestinationsCard}>
                        <img src={destinationImg2} alt="Singapore" />
                        <h3>Singapore</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={headerCSS.DestinationsCard}>
                        <img src={destinationImg3} alt="China" />
                        <h3>China</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={headerCSS.DestinationsCard}>
                        <img src={destinationImg4} alt="Thailand" />
                        <h3>Thailand</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={headerCSS.DestinationsCard}>
                        <img src={destinationImg5} alt="Indonesia" />
                        <h3>Indonesia</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={headerCSS.DestinationsCard}>
                        <img src={destinationImg6} alt="Europe" />
                        <h3>Europe</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Header
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

function Brandsworked() {

  const router = useNavigate()
    return (
        <section>
            <div className="container text-white">
                <div className="brand-work text-center ">
                    <h4>BRANDS</h4>
                </div>
                <div className="brand-slides">
                <Swiper
                        spaceBetween={10}
                        slidesPerView={5}
                        freeMode={true}
                        autoplay={{
                          delay: 4000,
                          disableOnInteraction: false,
                        }}
                        breakpoints={{
                          320: {
                            slidesPerView: 1
                          },
                          576: {
                            slidesPerView: 2
                          },
                          768:{
                            slidesPerView: 3
                          },
                          1200: {
                            slidesPerView: 4
                          }
                        }}
                        modules={[Autoplay]}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                        className="main_slider33"
                      >
                        <SwiperSlide>
                            <div className="patch-bname" onClick={()=>{router('/works')}}>
                                <h5 >OUTLAST</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="patch-bname" onClick={()=>{router('/works')}}>
                                <h5 >OUTLAST INFRA</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="patch-bname" onClick={()=>{router('/works')}}>
                                <h5>JENNIS CATERING</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="patch-bname"  onClick={()=>{router('/works')}}>
                                <h5>WHITE SHADOWS ACADEMY</h5>
                            </div>
                        </SwiperSlide>
                      </Swiper>
                </div>

            </div>
        </section>
    )
}

export default Brandsworked

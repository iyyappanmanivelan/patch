import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay } from "swiper/modules";

function Worklist() {
  const [rotate, setRotate] = useState(0);


  const handler = useSwipeable({
    onSwipedLeft: () => {
      setRotate(rotate - 90);
    },
    onSwipedRight: () => {
      setRotate(rotate + 90);
    },
    trackMouse: true,
  });

  useEffect(()=>{
    if(rotate >= 360){
      setTimeout(() => {
        setRotate(90)
      }, 3000);
    }
    else{
      setTimeout(() => {
        setRotate(rotate + 90);
      }, 3000);
    }
  
  },[rotate])

  

  return (
    <section  className="section-part">
      <div className="container wrkpd">
      <div className="alums-tit text-center " >
              <h2>Our Works</h2>
            </div>
        <div className="ourwrk-bg position-relative pt-5">
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
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 1,
              },
              992: {
                slidesPerView: 1,
              },
              1200: {
                slidesPerView: 1,
              },
            }}
            modules={[Autoplay]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="main_slider33"
          >
            <SwiperSlide>
              <div className="wrkbg-img">
                <img src="\assets\wrkbg1.jpeg" className="img-fluid" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="wrkbg-img">
                <img src="\assets\wrkbg2.webp" className="img-fluid" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="wrkbg-img">
                <img src="\assets\wrkbg3.jpeg" className="img-fluid" />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="worksilder position-absolute">
            <div className="scene text-dark">
              <div
                className="cube"
                style={{ transform: `rotateY(${rotate}deg)` }}
                {...handler}
              >
                <div className="cube__face cube__face--1 bg1 overflow-hidden">
                  <div>
                    <div className="work-tit">
                      <h6>Landscape Photography</h6>
                    </div>
                    <div className="work-desc">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Explicabo error repellendus sit et corrupti
                        tempore facere quos ipsam eius
                      </p>
                    </div>
                  </div>
                </div>
                <div className="cube__face cube__face--2 bg1">
                  <div>
                    <div className="work-tit">
                      <h6>Landscape Photography</h6>
                    </div>
                    <div className="work-desc">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Explicabo error repellendus sit et corrupti
                        tempore facere quos ipsam eius
                      </p>
                    </div>
                  </div>
                </div>
                <div className="cube__face cube__face--3 bg1">
                  <div>
                    <div className="work-tit">
                      <h6>Landscape Photography</h6>
                    </div>
                    <div className="work-desc">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Explicabo error repellendus sit et corrupti
                        tempore facere quos ipsam eius
                      </p>
                    </div>
                  </div>
                </div>
                <div className="cube__face cube__face--4 bg1">
                  <div>
                    <div className="work-tit">
                      <h6>Landscape Photography</h6>
                    </div>
                    <div className="work-desc">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Explicabo error repellendus sit et corrupti
                        tempore facere quos ipsam eius
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Worklist;

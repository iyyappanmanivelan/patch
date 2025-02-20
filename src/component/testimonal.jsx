import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { PersonCircle, StarFill } from "react-bootstrap-icons";
import { Autoplay } from "swiper/modules";

function Testimonal() {

  return (
    <>
      <section className="section-part tsp">
        <div className="container ">
          <div className="testimonal-top text-center text-white">
            <h3 className="bm-0">smiles and stories from</h3>
          </div>
          <div className="alums-tit text-center ">
            <h2>Our Clients</h2>
          </div>
          <div className="customer-review pt-5">
            <Swiper
              spaceBetween={10}
              slidesPerView={5}
              freeMode={true}
              // autoplay={{
              //   delay: 4000,
              //   disableOnInteraction: false,
              // }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 3,
                },
                1400:{
                  slidesPerView:4,
                }
              }}
              modules={[Autoplay]}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              className="main_slider33"
            >
              <SwiperSlide>
                <div className="review-box text-white ">
                  <div className="rev-img  text-start position-relative">
                     <img src="\assets\pro-1.webp" className="img-fluid" />
                     <div className="t1 position-absolute"></div>
                     <div className="t2 position-absolute"></div>
                     <div className="r1 position-absolute"></div>
                     <div className="r2 position-absolute"></div>
                     <div className="l1 position-absolute"></div>
                     <div className="l2 position-absolute"></div>
                     <div className="b1 position-absolute"></div>
                     <div className="b2 position-absolute"></div>
                  </div>
                  <div className="rev-content  border-bottom pt-3">
                    <p>
                    Thanks you, our product images have never looked better! They have a keen eye for detail and a talent 
                    for capturing our products in the best possible light. We couldn't be happier with the results!
                    </p>
                  </div>
                  <div className="rev-name pt-3">
                    <h5>Michel</h5>
                    <p>London</p>
                  </div>
                  <div className="rev-star">
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="review-box text-white ">
                  <div className="rev-img text-start position-relative ">
                     <img src="\assets\pro-2.jpeg" className="img-fluid" />
                     <div className="t1 position-absolute"></div>
                     <div className="t2 position-absolute"></div>
                     <div className="r1 position-absolute"></div>
                     <div className="r2 position-absolute"></div>
                     <div className="l1 position-absolute"></div>
                     <div className="l2 position-absolute"></div>
                     <div className="b1 position-absolute"></div>
                     <div className="b2 position-absolute"></div>
                  </div>
                  <div className="rev-content border-bottom pt-3">
                    <p>
                    Thanks you, our product images have never looked better! They have a keen eye for detail and a talent 
                    for capturing our products in the best possible light. We couldn't be happier with the results!
                    </p>
                  </div>
                  <div className="rev-name pt-3">
                    <h5>Michel</h5>
                    <p>London</p>
                  </div>
                  <div className="rev-star">
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="review-box text-white ">
                  <div className="rev-img text-start position-relative ">
                     <img src="\assets\pro-3.jpeg" className="img-fluid" />
                     <div className="t1 position-absolute"></div>
                     <div className="t2 position-absolute"></div>
                     <div className="r1 position-absolute"></div>
                     <div className="r2 position-absolute"></div>
                     <div className="l1 position-absolute"></div>
                     <div className="l2 position-absolute"></div>
                     <div className="b1 position-absolute"></div>
                     <div className="b2 position-absolute"></div>
                  </div>
                  <div className="rev-content border-bottom pt-3">
                    <p>
                    Thanks you, our product images have never looked better! They have a keen eye for detail and a talent 
                    for capturing our products in the best possible light. We couldn't be happier with the results! 
                    </p>
                  </div>
                  <div className="rev-name pt-3">
                    <h5>Michel</h5>
                    <p>London</p>
                  </div>
                  <div className="rev-star">
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="review-box text-white ">
                  <div className="rev-img  text-start position-relative">
                     <img src="\assets\pro-1.webp" className="img-fluid" />
                     <div className="t1 position-absolute"></div>
                     <div className="t2 position-absolute"></div>
                     <div className="r1 position-absolute"></div>
                     <div className="r2 position-absolute"></div>
                     <div className="l1 position-absolute"></div>
                     <div className="l2 position-absolute"></div>
                     <div className="b1 position-absolute"></div>
                     <div className="b2 position-absolute"></div>
                  </div>
                  <div className="rev-content  border-bottom pt-3">
                    <p>
                    Thanks you, our product images have never looked better! They have a keen eye for detail and a talent 
                    for capturing our products in the best possible light. We couldn't be happier with the results!
                    </p>
                  </div>
                  <div className="rev-name pt-3">
                    <h5>Michel</h5>
                    <p>London</p>
                  </div>
                  <div className="rev-star">
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="review-box text-white ">
                  <div className="rev-img text-start position-relative ">
                     <img src="\assets\pro-2.jpeg" className="img-fluid" />
                     <div className="t1 position-absolute"></div>
                     <div className="t2 position-absolute"></div>
                     <div className="r1 position-absolute"></div>
                     <div className="r2 position-absolute"></div>
                     <div className="l1 position-absolute"></div>
                     <div className="l2 position-absolute"></div>
                     <div className="b1 position-absolute"></div>
                     <div className="b2 position-absolute"></div>
                  </div>
                  <div className="rev-content border-bottom pt-3">
                    <p>
                    Thanks you, our product images have never looked better! They have a keen eye for detail and a talent 
                    for capturing our products in the best possible light. We couldn't be happier with the results!
                    </p>
                  </div>
                  <div className="rev-name pt-3">
                    <h5>Michel</h5>
                    <p>London</p>
                  </div>
                  <div className="rev-star">
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="review-box text-white ">
                  <div className="rev-img text-start position-relative ">
                     <img src="\assets\pro-3.jpeg" className="img-fluid" />
                     <div className="t1 position-absolute"></div>
                     <div className="t2 position-absolute"></div>
                     <div className="r1 position-absolute"></div>
                     <div className="r2 position-absolute"></div>
                     <div className="l1 position-absolute"></div>
                     <div className="l2 position-absolute"></div>
                     <div className="b1 position-absolute"></div>
                     <div className="b2 position-absolute"></div>
                  </div>
                  <div className="rev-content border-bottom pt-3">
                    <p>
                    Thanks you, our product images have never looked better! They have a keen eye for detail and a talent 
                    for capturing our products in the best possible light. We couldn't be happier with the results! 
                    </p>
                  </div>
                  <div className="rev-name pt-3">
                    <h5>Michel</h5>
                    <p>London</p>
                  </div>
                  <div className="rev-star">
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                    <StarFill />
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonal;

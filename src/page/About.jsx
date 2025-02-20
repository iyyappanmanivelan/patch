

import React, { useEffect } from "react";
import { Arrow90degUp, ArrowRight, List, X } from "react-bootstrap-icons";
import Header from "../component/Header";
import { useSwipeable } from "react-swipeable";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay } from "swiper/modules";


function About() {


  return (
    <>
      <Header />

      <section>
        <div className="container">
        <div className="work-sect text-center text-white position-relative"  >
                <h3 data-aos="fade-up"  >ABOUT US</h3>
                <div className="hang-came" data-aos="fade-down" >
                  <img src="\assets\hangimg.avif" className="img-fluid"/>
                </div>
              </div>
          <div className="about-team  d-flex justify-content-center">
            <p >
              Hi there! I’m Finnegan Manroe, a passionate photographer based in
              the vibrant city of Seattle. With over a decade of experience
              behind the lens, I specialize in capturing the unique beauty of
              life’s fleeting moments, from intimate portraits and breathtaking
              landscapes to dynamic product shots and lively events.
            </p>
          </div>
        </div>
      </section>

      <section className="section-part" >
        <div className="container">
          <div className="abt-slide">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="abt-content">
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
                        <img src="\assets\about1.avif" className="img-fluid" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="wrkbg-img">
                        <img src="\assets\about2.jpeg" className="img-fluid" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="wrkbg-img">
                        <img src="\assets\about3.jpeg" className="img-fluid" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="wrkbg-img">
                        <img src="\assets\about4.jpeg" className="img-fluid" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div  className="abt-image py-xxl-4 py-xl-0 text-white py-md-2 py-5">
                  <p>
                    My journey into photography began as a curious child with a
                    disposable camera, fascinated by the world’s colors and
                    light. Over the years, this hobby transformed into a
                    full-blown love affair with visual storytelling. Each click
                    of the shutter is my way of freezing time, preserving
                    emotions, and narrating stories that words alone can’t
                    convey.
                  </p>
                  <h3 className="py-xl-5 py-lg-4" >
                    <span>I’ve had the privilege of working with</span> amazing
                    clients <span>and have been</span> honored with several
                    awards <span>for my work.</span>
                  </h3>
                  <p>
                    Let’s create something extraordinary together. Whether
                    you’re looking to capture a special moment, need stunning
                    visuals for your brand, or simply want to explore the world
                    through my lens, I’d love to hear from you! Feel free to
                    reach out, and let’s make magic happen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
      <div className="alums-tit text-center">
            <h2>OUR TEAMS</h2>
          </div>
          <div className="team-members">
            
          </div>

      </section>




       {/* <section>
       <div className="subtitle text-light text-center">
            <h2>OUR TEAMS</h2>
          </div>
          <div className="container-fluid bgpost">
              <div className="container">
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
                        slidesPerView: 2,
                      },
                      576: {
                        slidesPerView: 3,
                      },
                      992: {
                        slidesPerView: 3,
                      },
                      1200: {
                        slidesPerView: 3,
                      },
                    }}
                    modules={[Autoplay]}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="main_slider33"
                  >
                    <SwiperSlide>
                      <div className="wrkbg-img2">
                        <img src="\assets\ex1.png" className="img-fluid" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="wrkbg-img2">
                        <img src="\assets\ex2.png" className="img-fluid" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="wrkbg-img2">
                        <img src="\assets\ex3.png" className="img-fluid" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="wrkbg-img2">
                        <img src="\assets\ex1.png" className="img-fluid" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="wrkbg-img2">
                        <img src="\assets\ex2.png" className="img-fluid" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="wrkbg-img2">
                        <img src="\assets\ex3.png" className="img-fluid" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="wrkbg-img2">
                        <img src="\assets\ex3.png" className="img-fluid" />
                      </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                      <div className="wrkbg-img2">
                        <img src="\assets\ex3.png" className="img-fluid" />
                      </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                      <div className="wrkbg-img2">
                        <img src="\assets\ex3.png" className="img-fluid" />
                      </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                      <div className="wrkbg-img">
                        <img src="\assets\ex3.png" className="img-fluid" />
                      </div>
                    </SwiperSlide>
                    
                    
              
                  </Swiper>
              </div>
          </div>
       </section> */}

      {/* <section>
        <div className="container">
            <div className="whatyou text-center text-white pb-5">
                <h2>What you will find in me</h2>
            </div>
          <section id="slider">
            <input type="radio" name="slider" id="s1" />
            <input type="radio" name="slider" id="s2" />
            <input type="radio" name="slider" id="s3" checked />
            <input type="radio" name="slider" id="s4" />
            <input type="radio" name="slider" id="s5" />
            <label for="s1" id="slide1">
                  <img src="\assets\about1.avif"/>
                  <h5>PASSION</h5>
            </label>
            <label for="s2" id="slide2">
            <img src="\assets\about4.jpeg" />
            <h5>CREATIVE VISSION</h5>
            </label>
            <label for="s3" id="slide3">
            <img src="\assets\about3.jpeg" />
            <h5>PROFESSINOLISM</h5>
            </label>
            <label for="s4" id="slide4">
            <img src="\assets\about2.jpeg" />
            <h5>ADAPTABILITY</h5>
            </label>
            <label for="s5" id="slide5">
            <img src="\assets\wrkbg2.webp" />
            <h5>TRENDING PIC</h5>
            </label>
          </section>
        </div>
      </section> */}

    </>
  );
}

export default About;

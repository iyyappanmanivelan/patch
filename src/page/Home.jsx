"use client"
import React, { useEffect } from "react";
import Frontslide from "../component/Frontslide";
import Albums from "../component/Albums";
import Worklist from "../component/worklist";
import Testimonal from "../component/testimonal";
import Faq from "../component/Faq";


function Home() {


    return (
    <>
      <section className="video-place position-relative">
        <section>
            <div className="container-fluid p-0">
            <video
            src="\video\19598792-hd_1080_1920_30fps.mp4"
            autoPlay
            loop
            muted
          />
            </div>
        </section>

        <section className="video-sec position-absolute" >
          <Frontslide />
        </section>
      </section>
      
      <Albums />

      <Worklist />

      <Testimonal />

      <Faq/>
    </>
  );
}

export default Home;

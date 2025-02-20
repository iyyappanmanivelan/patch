import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import camera from '../frontcamera.json'
import camerapad from "../camerapad.json";
import Lottie from "lottie-react";

function Openview() {


  const route = useNavigate()


  return (

    <section className="openpage">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4  col-md-4 col-sm-12  p-0">
            <div className="op1 position-relative" data-aos="zoom-in">
              <img src="\assets\op1.jpeg" />
              <div className="enter-link clk-txt  position-absolute">
                <Link to="/service"><h2>WORKS</h2></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-md-4 col-sm-12 p-0">
            <div className="camestand" onClick={()=>{route('/portfolio')}}>
              <div className="brand-logo d-flex justify-content-center"  data-aos="zoom-out">
                <img src="\assets\brand_logo.jpg" />
              </div>
              <div className="came d-flex justify-content-center" >
                <Lottie animationData={camerapad} className="cameimg" data-aos="zoom_out" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4  col-sm-12 p-0">
            <div className="op1 position-relative" data-aos="zoom-in">
              <img src="\assets\op2.webp" />
              <div className="enter-link clk-txt  position-absolute">
              <Link to="/works"><h2>RESULTS</h2></Link>         
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Openview;

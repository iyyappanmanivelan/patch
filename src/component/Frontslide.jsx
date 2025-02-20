import React from "react";
import Expericenebox from "./Expericenebox";
import { ArrowRight, List, X } from "react-bootstrap-icons";
import Brandsworked from "./Brandsworked";
import { useNavigate } from "react-router-dom";

function Frontslide() {
  const router = useNavigate();

  return (
    <>
      <section>
        <div className="container">
          <header id="headview">
            <div className="container cont">
              <div className="row py-3">
                <div className="col-lg-6 col-md-6 col-6">
                  <div className="brand d-flex align-items-center justify-content-start">
                    <img
                      src="\assets\brand_logo.jpg"
                      className="img-fluid"
                      onClick={() => {
                        router("/");
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-6">
                  <div className="menu-page d-flex align-items-center justify-content-end">
                    <h4
                      onClick={() => {
                        document.getElementById("navbarbtn").click();
                      }}
                    >
                      <List />
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <section>
              <button
                class="btn btn-primary d-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                id="navbarbtn"
              >
                Toggle right offcanvas
              </button>

              <div
                class="offcanvas offcanvas-top nav-topbar p-3 d"
                tabindex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
              >
                <div className="nav-heading d-flex justify-content-between">
                  <div className="nav-view" >
                    <h2
                   
                      onClick={() => {
                        document.getElementById("navbarbtn").click();
                        router("/about");
                      }}
                    >
                      ABOUT
                    </h2>
                    <h2
                      onClick={() => {
                        document.getElementById("navbarbtn").click();
                        router("/works");
                      }}
                    >
                      WORKS
                    </h2>
                    <h2
                      onClick={() => {
                        document.getElementById("navbarbtn").click();
                        router("/blogs");
                      }}
                    >
                      BLOGS
                    </h2>
                    <h2
                      onClick={() => {
                        document.getElementById("navbarbtn").click();
                        router("/contacts");
                      }}
                    >
                      CONTACT US
                    </h2>
                  </div>
                  <div
                    className="nav-cancel text-white"
                    onClick={() => {
                      document.getElementById("navbarbtn").click();
                    }}
                  >
                    <h2>
                      <X />
                    </h2>
                  </div>
                </div>

                <div className="nav-contact d-flex align-items-center flex-wrap justify-content-md-start justify-content-lg-around text-white py-xl-3 py-lg-4">
                  <div className="contact-slide d-flex ">
                    <p>Instagram</p>
                    <p className="p-2">
                      <ArrowRight />
                    </p>
                  </div>
                  <div className="contact-slide d-flex">
                    <p>Youtube</p>
                    <p className="p-2">
                      <ArrowRight />
                    </p>
                  </div>
                  <div className="contact-slide d-flex">
                    <p>X</p>
                    <p className="p-2">
                      <ArrowRight />
                    </p>
                  </div>
                  <div className="contact-slide d-flex">
                    <p>Twitter</p>
                    <p className="p-2">
                      <ArrowRight />
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </header>
          <div className="front-video">
            <div className="intro-patch d-flex align-items-center justify-content-end" >
              <p>
                HI, TEAM PATCHWORK HERE. WE ARE FREELANCE PHOTOGRAPHER IN NY AND
                THE SHUTTERBUG CAPTURING LIFE'S MAGICAL MOMENTS ONE{" "}
              </p>
            </div>
            <div className="head-view" >
              <h1>Capturing Life's Best Moments</h1>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-lg-5 py-md-3">
          <Expericenebox />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="about-team" >
            <div className="row">
              <div className="col-lg-6 col-md-4 col-3">
                <div className="introduce">
                  <h4>We...</h4>
                </div>
              </div>
              <div className="col-lg-6 col-md-8 col-9">
                <div className="intro-detail text-end">
                  <p className="text-start" >
                    Are Passionate photographer dedicated to capturing life's
                    most precious moments. With a keen eye for detail and a{" "}
                    <span>love for storytelling</span>, I strive to create
                    images that are not just beautiful, but that also evoke
                    emotion and tell a compelling story.
                  </p>
                </div>
                <div className="patch-btn">
                  <button className="btn border px-md-5 px-sm-3 py-md-2 py-sm-1 rounded text-white" onClick={()=>{router('/works')}}>
                    Explore{" "}
                    <span>
                      <ArrowRight />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="about-slider">
          <Brandsworked />
        </div>
      </section>
    </>
  );
}

export default Frontslide;

import React from "react";
import { Arrow90degUp, ArrowRight, List, X } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function Header() {
  const router = useNavigate()

  return (
    <header id="headview">
      <div className="container">
        <div className="row py-3">
          <div className="col-lg-6 col-md-6 col-6">
            <div className="brand d-flex align-items-center justify-content-start">
              <img src="\assets\brand_logo.jpg" className="img-fluid"  onClick={()=>{router('/')}}/>
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
          class="offcanvas offcanvas-top nav-topbar p-3"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
         <div className="nav-heading d-flex justify-content-between">
         <div className="nav-view">
         <h2 onClick={()=>{document.getElementById('navbarbtn').click() ; router('/about')}}>ABOUT US</h2>
            <h2 onClick={()=>{document.getElementById('navbarbtn').click() ; router('/works')}}>WORKS</h2>
            <h2 onClick={()=>{document.getElementById('navbarbtn').click() ; router('/service')}}>SERVICES</h2>
            <h2 onClick={()=>{document.getElementById('navbarbtn').click() ; router('/contacts')}}>CONTACT US</h2>
          </div>
          <div className="nav-cancel text-white" onClick={()=>{document.getElementById('navbarbtn').click()}}>
            <h2><X/></h2>
          </div>
         </div>

         <div className="nav-contact d-flex flex-wrap align-items-center justify-content-md-start justify-content-lg-around text-white py-xl-3 py-lg-4">
            <div className="contact-slide d-flex ">
              <p>Instagram</p>
              <p className="p-2">
               <ArrowRight/>
              </p>
            </div>
            <div className="contact-slide d-flex">
              <p>Youtube</p>
              <p className="p-2">
               <ArrowRight/>
              </p>
            </div>
            <div className="contact-slide d-flex">
              <p>X</p>
              <p className="p-2">
               <ArrowRight/>
              </p>
            </div>
            <div className="contact-slide d-flex">
              <p>Twitter</p>
              <p className="p-2">
               <ArrowRight/>
              </p>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;

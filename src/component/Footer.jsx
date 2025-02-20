import React, { useEffect } from "react";
import {
  Envelope,
  EnvelopeFill,
  Facebook,
  GeoAlt,
  GeoAltFill,
  Google,
  Instagram,
  Linkedin,
  Telegram,
  TelephoneFill,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";
import { useNavigate, useLocation } from "react-router-dom";

function Footer() {
  const router = useNavigate();

  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    if (pathname == "/contacts" || pathname == "/") {
      document.getElementById("footsec").style.display = "none";
    } else {
      document.getElementById("footsec").style.display = "block";
    }
  }, [pathname]);
  return (
    <section className="section-part mb-0 " id="footsec">
      <div className="container">
        <div className="ft1">
          <div className="row text-white">
            <div className="col-md-4  col-sm-6  d-flex justify-content-md-center">
              <div className="find-us d-flex gap-3">
                <div className="fiitimg">
                  <h4>
                    <GeoAltFill />
                  </h4>
                </div>
                <div className="foot-det">
                  <h4>FIND US</h4>
                  <h6>No-111 3rd main road, alvarthirunagar , chennai -107.</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6   d-flex justify-content-md-center justify-content-sm-end">
              <div className="find-us d-flex gap-3">
                <div className="fiitimg">
                  <h4>
                    <TelephoneFill />
                  </h4>
                </div>
                <div className="foot-det">
                  <h4>CALL</h4>
                  <h6>0-44 340904040</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4  col-sm-6 d-flex justify-content-md-center mt-sm-3 mt-md-0">
              <div className="find-us d-flex gap-3">
                <div className="fiitimg">
                  <h4>
                    <EnvelopeFill />
                  </h4>
                </div>
                <div className="foot-det">
                  <h4>EMAIL</h4>
                  <h6>teampatchworkps@gmail.com</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ft2">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="ft2sub text-white">
                <div className="brand d-flex align-items-center justify-content-start">
                  <img
                    src="\assets\brand_logo.jpg"
                    className="img-fluid"
                    onClick={() => {
                      router("/");
                    }}
                  />
                </div>
                <div className="ftintro py-3">
                  <p>
                    {" "}
                    HI, TEAM PATCHWORK HERE. WE ARE FREELANCE PHOTOGRAPHER IN NY
                    AND THE SHUTTERBUG CAPTURING LIFE'S MAGICAL MOMENTS ONE
                  </p>
                </div>
                <div className="ftlink d-flex gap-3">
                  <h5>
                    <Instagram />
                  </h5>
                  <h5>
                    <Linkedin />
                  </h5>
                  <h5>
                    <Twitter />
                  </h5>
                  <h5>
                    <Youtube />
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 d-flex justify-content-md-center justify-content-sm-end">
              <div className="ft2sub text-white my-3">
                <div className="foot-det">
                  <h4>USEFULL LINK</h4>
                </div>
                <div className="ftpglst pt-3">
                <h6  className = {pathname == '/' ? 'active' : ''} onClick={()=>{router('/')}}>HOME</h6>
                <h6  className = {pathname == '/about' ? 'active' : ''} onClick={()=>{router('/about')}}>ABOUT US</h6>
                <h6  className = {pathname == '/works' ? 'active' : ''} onClick={()=>{router('/works')}}>WORKS</h6>
                <h6  className = {pathname == '/service' ? 'active' : ''} onClick={()=>{router('/service')}}>SERVICES</h6>
                <h6  className = {pathname == '/contacts' ? 'active' : ''} onClick={()=>{router('/contacts')}}>CONTACT US</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="ft2sub text-white my-3">
                <div className="foot-det">
                  <h4>SUBSCRIBE</h4>
                </div>
                <div className="ftinput pt-3 position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                  <div className="telegram position-absolute">
                    <h5>
                      <Telegram />
                    </h5>
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

export default Footer;

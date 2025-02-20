import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import {
  Check,
  CheckCircleFill,
  Facebook,
  Google,
  Instagram,
  Linkedin,
  Twitter,
  X,
  Youtube,
} from "react-bootstrap-icons";
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function Contacts() {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [enquiry, setenquiry] = useState();
  const [message, setmessage] = useState();
  const [emailres, setemailres] = useState();

  const router = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_l4cd7ro";
    const templateId = "template_pyxeq6t";
    const publicKey = "gL4z2hKi0PKtkJdXz";

    const templateParams = {
      from_name: name,
      from_email: email,
      from_enquiry: enquiry,
      to_name: "Teampatchwork",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        setemailres(res.status);
        document.getElementById("frmname").value = null;
        document.getElementById("frmemail").value = null;
        document.getElementById("frmmsg").value = null;
        document.getElementById("frmenquiry").value = null;
      })
      .catch((err) => {
        setemailres(500);
      });
  };
  const { pathname } = useLocation();

  return (
    <>
      <Header />

      <section>
        <div className="container">
          <div className="work-sect text-center text-white position-relative">
            <h3 data-aos="fade-up">LET'S TALK</h3>
            <div className="hang-came3" data-aos="fade-down">
              <img src="\assets\hangimg.avif" className="img-fluid" />
            </div>
          </div>
          <div className="d-flex justify-content-center ct-top">
            <div className="contact-team">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="ct-box">
                    <p>EMAIL</p>
                    <h4>teampatchwork360@gmail.com</h4>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="ct-box">
                    <p>PHONE</p>
                    <h4>91+893969455</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-4 ">
                  <div className="ct-box">
                    <h3>
                      <Instagram />
                    </h3>
                    <h6>INSTAGRAM</h6>
                  </div>
                  <div className="ct-box">
                    <h3>
                      <Facebook />
                    </h3>
                    <h6>FACEBOOK</h6>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-4">
                  <div className="ct-box">
                    <h3>
                      <Twitter />
                    </h3>
                    <h6>TWITTER</h6>
                  </div>
                  <div className="ct-box">
                    <h3>
                      <Youtube />
                    </h3>
                    <h6>YOUTUBE</h6>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4  col-4">
                  <div className="ct-box">
                    <h3>
                      <Linkedin />
                    </h3>
                    <h6>LINKED IN</h6>
                  </div>
                  <div className="ct-box">
                    <h3>
                      <Google />
                    </h3>
                    <h6>GOOGLE</h6>
                  </div>
                </div>
              </div>
              <div className="cust-info">
                {emailres == "200" ? (
                  <div class="alert alert-success" role="alert">
                    Email sendend Successfully <span><CheckCircleFill/></span>
                  </div>
                ) : emailres == "500" ? (
                  <div class="alert alert-danger" role="alert">
                    something error ! Check Network
                  </div>
                ) : (
                  ""
                )}
                <form onSubmit={handlesubmit}>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          id="frmname"
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          onChange={(e) => {
                            setname(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          id="frmemail"
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          onChange={(e) => {
                            setemail(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 ">
                      <div className="form-group">
                        <select
                          id="frmenquiry"
                          class="form-select"
                          aria-label="Default select example"
                          onChange={(e) => {
                            setenquiry(e.target.value);
                          }}
                        >
                          <option selected>Select Your Enquiry</option>
                          <option value="Graphic Design">Graphic Design</option>
                          <option value="Video Editing">Video Editing</option>
                          <option value="Video Shooting">Video Shooting</option>
                          <option value="Digital Marketing">
                            Digital Marketing
                          </option>
                          <option value="Web Development">
                            Web Development
                          </option>
                          <option value="Content Creation">
                            Content Creation
                          </option>
                          <option value="PodCasting">PodCasting</option>
                          <option value="Social media Handling">
                            Social media Handling
                          </option>
                          <option value="Business Analysis">
                            Business Analysis
                          </option>
                          <option value="Photography">Photography</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <textarea
                          id="frmmsg"
                          className="form-control"
                          rows={5}
                          placeholder="Type message"
                          onChange={(e) => {
                            setmessage(e.target.value);
                          }}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <button className="btn" type="submit">
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-5">
          <div className="footer-navbar d-flex align-items-center text-white gap-md-5 gap-3 justify-content-center">
            <h6
              className={pathname == "/" ? "active" : ""}
              onClick={() => {
                router("/");
              }}
            >
              HOME
            </h6>
            <h6
              className={pathname == "/about" ? "active" : ""}
              onClick={() => {
                router("/about");
              }}
            >
              ABOUT US
            </h6>
            <h6
              className={pathname == "/works" ? "active" : ""}
              onClick={() => {
                router("/works");
              }}
            >
              WORKS
            </h6>
            <h6
              className={pathname == "/service" ? "active" : ""}
              onClick={() => {
                router("/service");
              }}
            >
              SERVICES
            </h6>
            <h6
              className={pathname == "/contacts" ? "active" : ""}
              onClick={() => {
                router("/contacts");
              }}
            >
              CONTACT US
            </h6>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="conatiner-fluid">
        <marquee> <h1 className="text-white">TEAM PATCH WORK TEAM PATCH WORK </h1></marquee>
        </div>
      </section> */}
    </>
  );
}

export default Contacts;

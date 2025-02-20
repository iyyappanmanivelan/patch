import React from "react";
import Header from "../component/Header";
import { useNavigate } from "react-router-dom";

function Blogs() {
  const router = useNavigate();

  const services = [
    {
      id: 1,
      name: "Graphic Designs",
    },
    {
      id: 2,
      name: "Video Editing",
    },
    {
      id: 3,
      name: "Video Shotting",
    },
    {
      id: 4,
      name: "Digital Marketing ",
    },
    {
      id: 5,
      name: "Website Development",
    },
    {
      id: 6,
      name: "Content Creation",
    },
    {
      id: 7,
      name: "BordCasting",
    },
    {
      id: 8,
      name: "Social Media Handing",
    },
    {
      id: 9,
      name: "Business Analysis",
    },
    {
      id: 10,
      name: "Portrait Photography",
    },
  ];

  return (
    <>
      <Header />

      <secion>
        <div className="container-fluid">
          <div
            className="work-sect text-center text-white position-relative"
            
          >
            <h3 data-aos="fade-up">SERVICES</h3>
            <div className="hang-came1" data-aos="fade-down">
              <img src="\assets\hangimg.avif" className="img-fluid" />
            </div>
          </div>

          <div className="blogs-team text-white">
            <div className="row">
              {services.map((r) => (
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="blog-box">
                    <div className="blog-pic">
                      {r.id == "1" ? (
                        <img src="\assets\gp.jpg" className="img-fluid"   onClick={() => {
                          router(`/view/${r.id}`);
                        }} />
                      ) : r.id == "2" ? (
                        <img src="\assets\vde.jpg" className="img-fluid"    onClick={() => {
                          router(`/view/${r.id}`);
                        }}/>
                      ) : r.id == "3" ? (
                        <img src="\assets\shoot.jpg" className="img-fluid"    onClick={() => {
                          router(`/view/${r.id}`);
                        }}/>
                      ) : r.id == "4" ? (
                        <img src="\assets\dm.webp" className="img-fluid"    onClick={() => {
                          router(`/view/${r.id}`);
                        }}/>
                      ) : r.id == "5" ? (
                        <img src="\assets\webdp.jpg" className="img-fluid"   onClick={() => {
                          router(`/view/${r.id}`);
                        }} />
                      ) : r.id == "6" ? (
                        <img
                          src="\assets\contentc.jpeg"
                          className="img-fluid"
                          onClick={() => {
                            router(`/view/${r.id}`);
                          }}
                        />
                      ) : r.id == "7" ? (
                        <img
                          src="\assets\bordcasting.jpg"
                          className="img-fluid"
                          onClick={() => {
                            router(`/view/${r.id}`);
                          }}
                        />
                      ) : r.id == "8" ? (
                        <img src="\assets\socialmd.jpg" className="img-fluid"   onClick={() => {
                          router(`/view/${r.id}`);
                        }} />
                      ) : r.id == "9" ? (
                        <img
                          src="\assets\business analysis.jpg"
                          className="img-fluid"
                          onClick={() => {
                            router(`/view/${r.id}`);
                          }}
                        />
                      ) : (
                        <img src="\assets\photogp.jpeg" className="img-fluid"    onClick={() => {
                            router(`/view/${r.id}`);
                          }}/>
                      )}
                    </div>
                    <div className="blog-info">
                      <h5>{r.name}</h5>
                      <div className="bg-tips d-flex align-items-center justify-content-start gap-3 pt-4">
                        <p
                          onClick={() => {
                            router(`/view/${r.id}`);
                          }}
                        >
                          View
                        </p>
                        <p
                          onClick={() => {
                            router("/contacts");
                          }}
                        >
                          Contact
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </secion>
    </>
  );
}

export default Blogs;

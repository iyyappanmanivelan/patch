import React, { useEffect } from "react";


function Albums() {

  return (
    <>
      <section className="ab-sect">
        <div className="container">
          <div className="alums-tit text-center">
            <h2>ALBUMS</h2>
          </div>
          <div className="albm-img pt-lg-5 pt-2">
            <div className="row">
              <div className="col-lg-12 d-sm-block d-md-flex align-items-center justify-content-xxl-between justify-content-xl-evenly" >
                <div
                  className="img-albm position-relative p-2"
                 
                >
                  <img src="\assets\album2.webp" className="img-fluid" />
                  <div className="le1 position-absolute"></div>
                  <div className="le2 position-absolute"></div>
                  <div className="rh1 position-absolute"></div>
                  <div className="rh2 position-absolute"></div>
                  <div className="bt1 position-absolute"></div>
                  <div className="bt2 position-absolute"></div>
                  <div className="tp1 position-absolute"></div>
                  <div className="tp2 position-absolute"></div>
                </div>
                <div
                  className="albm-review"
                
                >
                  <p>
                
                  <span className="rightql"   >
                      <img
                        src="\assets\quotation-mark.png"
                        className="img-fluid"
                      />
                    </span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ad, pariatur sunt? Amet, numquam. Architecto voluptatum
                    iusto itaque quis culpa numquam laudantium ipsam dolorum,
                    deserunt assumenda, delectus provident, dolorem illo nisi.{" "}
                    <span className="leftqt">
                      <img
                        src="\assets\quotation-mark.png"
                        className="img-fluid"
                      />
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-lg-12 d-sm-block d-md-flex align-items-center justify-content-xxl-between justify-content-xl-evenly flex-row-reverse">
                <div
                  className="img-albm hriz position-relative p-2"
                
                >
                  <img src="\assets\album3.jpeg" className="img-fluid" />
                  <div className="le1 position-absolute"></div>
                  <div className="le2 position-absolute"></div>
                  <div className="rh1 position-absolute"></div>
                  <div className="rh2 position-absolute"></div>
                  <div className="bt1 position-absolute"></div>
                  <div className="bt2 position-absolute"></div>
                  <div className="tp1 position-absolute"></div>
                  <div className="tp2 position-absolute"></div>
                </div>
                <div
                  className="albm-review"
                 
                >
                  <p>
                    <span className="rightql">
                      <img
                        src="\assets\quotation-mark.png"
                        className="img-fluid"
                      />
                    </span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ad, pariatur sunt? Amet, numquam. Architecto voluptatum
                    iusto itaque quis culpa numquam laudantium ipsam dolorum,
                    deserunt assumenda, delectus provident, dolorem illo nisi.{" "}
                    <span className="leftqt">
                      <img
                        src="\assets\quotation-mark.png"
                        className="img-fluid"
                      />
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-lg-12  d-sm-block d-md-flex align-items-center justify-content-xxl-between justify-content-xl-evenly">
                <div
                  className="img-albm position-relative p-2"
                 
                >
                  <img src="\assets\album5.jpeg" className="img-fluid" />
                  <div className="le1 position-absolute"></div>
                  <div className="le2 position-absolute"></div>
                  <div className="rh1 position-absolute"></div>
                  <div className="rh2 position-absolute"></div>
                  <div className="bt1 position-absolute"></div>
                  <div className="bt2 position-absolute"></div>
                  <div className="tp1 position-absolute"></div>
                  <div className="tp2 position-absolute"></div>
                </div>
                <div
                  className="albm-review"
                
                >
                  <p>
                    <span className="rightql">
                      <img
                        src="\assets\quotation-mark.png"
                        className="img-fluid"
                      />
                    </span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ad, pariatur sunt? Amet, numquam. Architecto voluptatum
                    iusto itaque quis culpa numquam laudantium ipsam dolorum,
                    deserunt assumenda, delectus provident, dolorem illo nisi.{" "}
                    <span className="leftqt">
                      <img
                        src="\assets\quotation-mark.png"
                        className="img-fluid"
                      />
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-lg-12  d-sm-block d-md-flex align-items-center justify-content-xxl-between justify-content-xl-evenly flex-row-reverse">
                <div
                  className="img-albm position-relative p-2"
                
                >
                  <img src="\assets\album8.webp" className="img-fluid" />
                  <div className="le1 position-absolute"></div>
                  <div className="le2 position-absolute"></div>
                  <div className="rh1 position-absolute"></div>
                  <div className="rh2 position-absolute"></div>
                  <div className="bt1 position-absolute"></div>
                  <div className="bt2 position-absolute"></div>
                  <div className="tp1 position-absolute"></div>
                  <div className="tp2 position-absolute"></div>
                </div>
                <div
                  className="albm-review"
                 
                >
                  <p>
                    <span className="rightql">
                      <img
                        src="\assets\quotation-mark.png"
                        className="img-fluid"
                      />
                    </span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ad, pariatur sunt? Amet, numquam. Architecto voluptatum
                    iusto itaque quis culpa numquam laudantium ipsam dolorum,
                    deserunt assumenda, delectus provident, dolorem illo nisi.
                    <span className="leftqt">
                      <img
                        src="\assets\quotation-mark.png"
                        className="img-fluid"
                      />
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-lg-12  d-sm-block d-md-flex align-items-center justify-content-xxl-between justify-content-xl-evenly">
                <div
                  className="img-albm  hriz position-relative p-2"
                 
                  
                >
                  <img src="\assets\album4.jpeg" className="img-fluid" />
                  <div className="le1 position-absolute"></div>
                  <div className="le2 position-absolute"></div>
                  <div className="rh1 position-absolute"></div>
                  <div className="rh2 position-absolute"></div>
                  <div className="bt1 position-absolute"></div>
                  <div className="bt2 position-absolute"></div>
                  <div className="tp1 position-absolute"></div>
                  <div className="tp2 position-absolute"></div>
                </div>
                <div
                  className="albm-review"
                
                >
                  <p>
                    <span className="rightql">
                      <img
                        src="\assets\quotation-mark.png"
                        className="img-fluid"
                      />
                    </span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ad, pariatur sunt? Amet, numquam. Architecto voluptatum
                    iusto itaque quis culpa numquam laudantium ipsam dolorum,
                    deserunt assumenda, delectus provident, dolorem illo nisi.{" "}
                    <span className="leftqt">
                      <img
                        src="\assets\quotation-mark.png"
                        className="img-fluid"
                      />
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-lg-12  d-sm-block d-md-flex align-items-center justify-content-xxl-between justify-content-xl-evenly flex-row-reverse">
                <div
                  className="img-albm  position-relative hriz p-2"
                
                >
                  <img src="\assets\album9.jpeg" className="img-fluid" />
                  <div className="le1 position-absolute"></div>
                  <div className="le2 position-absolute"></div>
                  <div className="rh1 position-absolute"></div>
                  <div className="rh2 position-absolute"></div>
                  <div className="bt1 position-absolute"></div>
                  <div className="bt2 position-absolute"></div>
                  <div className="tp1 position-absolute"></div>
                  <div className="tp2 position-absolute"></div>
                </div>
                <div
                  className="albm-review"
                 
                >
                  <p>
                    <span className="rightql">
                      <img
                        src="\assets\quotation-mark.png"
                        className="img-fluid"
                      />
                    </span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ad, pariatur sunt? Amet, numquam. Architecto voluptatum
                    iusto itaque quis culpa numquam laudantium ipsam dolorum,
                    deserunt assumenda, delectus provident, dolorem illo nisi.{" "}
                    <span className="leftqt">
                      <img
                        src="\assets\quotation-mark.png"
                        className="img-fluid"
                      />
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-lg-12  d-sm-block d-md-flex align-items-center justify-content-xxl-between justify-content-xl-evenly">
                <div
                  className="img-albm position-relative p-2"
                 
                >
                  <img src="\assets\album10.jpeg" className="img-fluid" />
                  <div className="le1 position-absolute"></div>
                  <div className="le2 position-absolute"></div>
                  <div className="rh1 position-absolute"></div>
                  <div className="rh2 position-absolute"></div>
                  <div className="bt1 position-absolute"></div>
                  <div className="bt2 position-absolute"></div>
                  <div className="tp1 position-absolute"></div>
                  <div className="tp2 position-absolute"></div>
                </div>
                <div
                  className="albm-review"
                
                >
                  <p>
                    <span className="rightql">
                      <img
                        src="\assets\quotation-mark.png"
                        className="img-fluid"
                      />
                    </span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ad, pariatur sunt? Amet, numquam. Architecto voluptatum
                    iusto itaque quis culpa numquam laudantium ipsam dolorum,
                    deserunt assumenda, delectus provident, dolorem illo nisi.{" "}
                    <span className="leftqt">
                      <img
                        src="\assets\quotation-mark.png"
                        className="img-fluid"
                      />
                    </span>
                  </p>
                </div>
              </div>
              {/* <div className="col-lg-4">
                        <div className="img-albm">
                                <img src='\assets\album3.jpeg' className='img-fluid'/>
                            </div>
                        </div>
                        <div className="col-lg-8">
                        <div className="img-albm">
                                <img src='\assets\album5.jpeg' className='img-fluid'/>
                            </div>
                        </div>
                        <div className="col-lg-7">
                      
                        </div>
                        <div className="col-lg-5">
                      
                        </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Albums;

import React from 'react'
import CountUp from 'react-countup'

function Expericenebox() {
    return (
        <div className="team-experience p-1 p-sm-3"
        >
        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-6 col-12">
            <div className="ex-box">
              <div className="exp-tit ">
                <h6>Hours Behind the Lens</h6>
              </div>
              <div className="exp-count ep1">
                  <CountUp start={0} end={20} duration={5} /><span>+</span>
               </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="ex-box">
              <div className="exp-tit">
                <h6>Years of Experience</h6>
              </div>
              <div className="exp-count ep1">
                  <CountUp start={0} end={20} duration={5} /><span>+</span>
               </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="ex-box">
              <div className="exp-tit">
                <h6>Awards and Recognitions</h6>
              </div>
              <div className="exp-count ep1">
                  <CountUp start={0} end={20} duration={5} /><span>+</span>
               </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-6 col-sm-6 col-12">
            <div className="ex-box">
              <div className="exp-tit">
                <h6>Happy Clients Served</h6>
              </div>
              <div className="exp-count ep1">
                  <CountUp start={0} end={20} duration={5} /><span>+</span>
               </div>
            </div>
          </div>
        </div>
      </div>

    )
}

export default Expericenebox

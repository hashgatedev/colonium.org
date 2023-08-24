import React from "react";
import BlockchainInfo from "../BlockchainInfo/BlockchainInfo";
import './Banner.css';


const Banner = (props) => {
  return (
    <section className="banner-area banner-bg">
      <div className="banner-shape-wrap">
        <img src="/img/banner/banner_shape01.png" alt="" className="img-one"  id="ball1"/>
        <img src="/img/banner/banner_shape02.png" alt="" className="img-two" id="ball2" />
        <img src="/img/banner/banner_shape01.png" alt="" className="img-three" />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content text-center">
              <img id="firepng" src="/img/icon/fire.png" alt="" />
              <div className="title">
                <h1>
                  COLONIUME
                </h1>
                <h4 sx={{ fontSize: "10px" }}>
                  Decentralized and Alternative Free Network
                </h4>              
              </div>
              
            </div>
            <div className="banner-progress-wrap">
              <ul>
                
              </ul>
              <div >
                
              
              </div>
              
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="banner-countdown-wrap text-center">
              <h2 className="title"></h2>

              <BlockchainInfo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

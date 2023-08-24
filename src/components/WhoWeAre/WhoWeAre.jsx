import React from "react";

const WhoWeAre = (props) => {
  return (
    <section id="about" className="about-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
              <img src="/img/images/about_img01.png" alt="" />
              <img src="/img/images/about_img02.png" alt="" className="img-two" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight" data-wow-delay=".2s">
              <div className="section-title mb-30">
                <span className="sub-title"> COLONIUME</span>
                
              </div>
              <p style={{fontSize:"18px"}}>
              Coloniume is a free, secure and independent network. By joining together, "U" and "Me" create "Coloniume," a global colony that meets our interests and needs. Coloniume will be developed and expanded by individuals and organizations, providing a completely free and secure communication platform. With Coloniume, users will be able to exchange information and data locally, even in areas with network disconnection. Each one will act as a bridge between the local network and the Internet, helping to promote global connectivity.
              </p>
        
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

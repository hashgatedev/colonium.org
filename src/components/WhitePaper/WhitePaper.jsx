import React from "react";
import { Link } from "react-router-dom";

import './white.css';

const WhitePaper = () => {
  return (
    <section className="document-area pt-60" id="WhitePaper">
      <div className="container" >
        <div className="row justify-content-center">
          <div className="col-lg-7 order-2 order-lg-0">
            <div
              className="document-img text-center wow fadeInUp"
              data-wow-delay=".2s"
            >
              <img src="/img/images/document_img.png" alt="" />
            </div>
          </div>

          <div className="col-lg-5 col-md-7">
            <div
              className="document-content mt-50 wow fadeInRight"
              data-wow-delay=".2s">
              <div className="section-title mb-35" id="t4">
                <span className="sub-title">Whitepaper</span>
                <h2 className="title">
                  Read <span  id="do">coloniume </span><br></br>Documents
                </h2>
              </div>

              <ul className="document-list">
                <li> <Link to="/Whitepaper" className="whitefont">White Paper</Link></li>
                <li> <Link to="/terms-and-condition" className="whitefont">Terms and conditions</Link></li>
              </ul>

              <a href="/files/coloniume_white_paper.pdf" download="coloniume white paper.pdf" rel="noreferrer"  ><button  className="btn"  download id="btn">
           Download Doc
              </button></a>
          
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitePaper;

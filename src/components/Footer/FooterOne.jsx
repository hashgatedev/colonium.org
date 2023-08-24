import React from "react";
import { Link } from "react-router-dom";
import { scrollToTop, handleClickScroll } from "../../lib/helpers";
import cn from "classnames";
import style from "./FooterOne.module.css";

const FooterOne = () => {
  return (
    <footer>
      <div className="footer-area">
        <div className="container">
          <div className="footer-scroll-wrap">
            <button
              className="scroll-to-target"
              data-target="html"
              onClick={scrollToTop}
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
          <div className="footer-top">
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <Link to="/" className="f-logo">
                    <img className={style.logo} src="/img/logo/logo.svg" alt="Coloniume Logo" />
                  </Link>
                  <div className="footer-content">
                    <p>
                      Coloniume's primary objective in the project is to establish a revolutionary
                      global network that caters to the fundamental needs of the people worldwide - access to free internet.
                      This network will be a unique, extensive, and robust chain that aims to bridge the digital
                      gap in the world.</p>
                    {/*}  <ul className="footer-social">
                    <li>
                        <a href="https://www.youtube.com/channel/UCfQvm7UDnMhyyRR9FOv_YwA?themeRefresh=1">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="ttps://twitter.com/coloniume">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://m.facebook.com/story.php?story_fbid=110424564603797&substory_index=0&id=100069087624060">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/coloniume?trk=public_profile_topcard-current-company">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/coloniume/">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
  </ul>*/}
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div
                  className="footer-widget  wow fadeInUp"
                  data-wow-delay=".4s" >
                  <h4 className="fw-title">Quick Links</h4>
                  <div className="footer-link">
                    <ul>
                      <li className={cn(

                        "menu-item-has-children"
                      )}>
                        <Link to="/#header"
                          className={"section-link"}
                          onClick={() => handleClickScroll("header")}
                        >What is Coloniume ?</Link>
                      </li>
                      <li className={cn(

                        "menu-item-has-children"
                      )}>
                        <Link to="https://coloniume.io" target="_blank">Coloniume Explorer</Link>
                      </li>
                      <li className={("#roadmap")}>
                        <Link to="/#roadmap"
                          className={"section-link"}
                          onClick={() => handleClickScroll("roadmap")}>Roadmap</Link>
                      </li>
                      <li className={cn(

                        "menu-item-has-children"
                      )}>
                        <Link to="/wallet">Wallet</Link>
                      </li>

                      <li className={("#sales")}>
                        <Link to="/maps"
                          className={"section-link"}
                          onClick={() => handleClickScroll("mteam")}>Maps</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <h4 className="fw-title">Policy</h4>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link to="/terms-and-condition" >Terms & Conditions</Link>
                      </li>
                      <li>
                        <Link to="/privacy-and-policy" >Privacy & Policy</Link>
                      </li>

                      <li>
                        <Link to="/Faq">FAQs</Link>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  {/* <h4 className="fw-title">Join Us and get the latest updates</h4> */}
                  <div className="footer-newsletter">
                    {/* <p>
                      Subscribe to coloniume network newsletter and stay in the release cycle.
                    </p>
                    <form action="#">
                      <input
                        type="email"
                        placeholder="coloniume.org"
                        required
                      />
                      <button type="submit">
                        <i className="fas fa-paper-plane"></i>
                      </button>
                    </form> */}
                    <div className="footer-content">

                      <br></br>
                      <ul className="footer-social" >
                        <li >
                          <a href="mailto:info@coloniume.org" id="email" title="E-Mail">
                            <i className="fa fa-envelope"></i>
                          </a>
                        </li>
                        <li >
                          <a href="https://www.youtube.com/@coloniumenetwork" id="youtube" title="Youtube">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                        <li >
                          <a href="https://twitter.com/coloniume" id="twitter" title="Twitter">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li >
                          <a href="https://www.facebook.com/coloniume/" id="fb" title="Facebook">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li >
                          <a href="https://www.linkedin.com/company/coloniume" id="linkedin" title="Linkedin">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </li>
                        <li >
                          <a href="https://www.instagram.com/coloniume/" id="instagram" title="Instagram">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li >
                          <a href="https://t.me/coloniume" id="telegram" title="Telegram">
                            <i className="fab fa-telegram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="copyright-text">
                  <p>Made with <span class="heart">&hearts;</span> in Coloniume</p>
                </div>
              </div>
              <div className="col-lg-6 d-none d-sm-block">
                <div className="footer-menu">
                  <ul>
                    <li className="footercont" style={{ fontSize: "15px", color: "#fff" }}>© Coloniume 2021-2023 | Decentralized and Alternative Network (C.D.A.N)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";
import $ from "jquery";
import { handleClickScroll } from "../../lib/helpers";
import style from "./HeaderOne.module.css";

const HeaderOne = () => {
  // sticky nav bar
  const [stickyClass, setStickyClass] = useState({
    fixed: "",
    header: "",
  });

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight < 245
        ? setStickyClass({ fixed: "", header: "" })
        : setStickyClass({ fixed: "active-height", header: "sticky-menu" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  // mobile menu
  useEffect(() => {
    //SubMenu Dropdown Toggle
    if ($(".menu-area li.menu-item-has-children ul").length) {
      $(".menu-area .navigation li.menu-item-has-children").append(
        '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
      );
    }

    //Mobile Nav Hide Show
    if ($(".mobile-menu").length) {
      let mobileMenuContent = $(".menu-area .main-menu").html();
      $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

      //Dropdown Button
      $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
        "click",
        function () {
          $(this).toggleClass("open");
          $(this).prev("ul").slideToggle(500);
        }
      );
      //Menu Toggle Btn
      $(".mobile-nav-toggler").on("click", function () {
        $("body").addClass("mobile-menu-visible");
      });

      //Menu Toggle Btn
      $(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
        $("body").removeClass("mobile-menu-visible");
      });
    }
  }, []);

  // active link switching
  const { hash, pathname } = useLocation();
  const isActiveLink = (link, exactPath) => {
    if (exactPath)
      return `${pathname}${hash}` === link ? "active" : "";
    return `${pathname}${hash}`.startsWith(link) ? "active" : "";
  };

  return (
    <header id="header">
      <div id="header-fixed-height" className={cn(stickyClass.fixed)} />

      <div id="sticky-header" className={cn("menu-area", stickyClass.header)}>
        <div className={cn("container custom-container")}>
          <div className="row">
            <div className="col-12">
              <div className={"mobile-nav-toggler"}>
                <i className="fas fa-bars" />
              </div>

              <div className="menu-wrap">
                <nav className={"menu-nav"}>
                  <div className={"logo " + style.logo}>
                    <Link to={"/"}>
                      <img className={style.logoimg} src="/img/logo/logo.svg" alt="Coloniume Logo" />
                    </Link>
                    <span className={style.logosub}>U+M=Coloniume</span>
                  </div>

                  <div className={cn("navbar-wrap main-menu d-none d-lg-flex")}>
                    <ul className={"navigation"}>
                      <li
                        className={cn(
                          isActiveLink("/#InfoSection", true),
                          "menu-item-has-children"
                        )}
                      >
                        <Link
                          to="/#InfoSection"
                          className={"section-link"}
                          onClick={() => handleClickScroll("InfoSection")}
                        >
                          What is Coloniume ?
                        </Link>
                        
                      </li>
                      <li className={isActiveLink("/#WhitePaper")}>
                        <Link
                          to="/#WhitePaper"
                          className={"section-link"}
                          onClick={() => handleClickScroll("WhitePaper")}
                        >
                          White Paper
                        </Link>
                      </li>
                      
                      <li className={isActiveLink("/maps")}>
                        <Link
                          to="/maps"
                          className={"section-link"}
                          onClick={() => handleClickScroll("mteam")}
                        >
                          Maps
                        </Link>
                      </li>
                      <li className={isActiveLink("/#roadmap")}>
                        <Link
                          to="/#roadmap"
                          className={"section-link"}
                          onClick={() => handleClickScroll("roadmap")}
                        >
                          Roadmap
                        </Link>
                      </li>
                      <li className={isActiveLink("/wallet")}>
                        <Link to="/wallet">Wallet</Link>
                      
                      </li>
                      <li className={isActiveLink("#contact")}>
                        <Link
                          to="https://coloniume.io/"
                          className={"section-link"}
                          target="blank"
                          onClick={() => handleClickScroll("contact")}
                        >
                        Explorer
                        </Link>
                      </li>
                      <li className={isActiveLink("#contact")}>
                        <Link
                          to="https://coloniume.ae/"
                          className={"section-link"}
                          target="blank"
                          onClick={() => handleClickScroll("contact")}
                        >
                      Buy modem
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  <div className={cn("header-action", "d-none d-md-block")} id="language">
                    <ul>
                  
                      {/* <li className={"header-lang"} id="language">
                        <span className={"selected-lang"}>ENG</span>
                        <ul className={"lang-list"}>
                          <li>
                            <Link to="#">English</Link>
                          </li>
                          <li>
                            <Link to="#">Arabic</Link>
                          </li>
                        </ul>
                      </li> */}
                      <li className={"header-btn"}>
                        <Link to="https://coloniu.me/"target="blank" className="btn" id='bluebtn'>
                          Blue Angels Zone
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              {/* <!-- Mobile Menu  --> */}
              <div className={"mobile-menu"}>
                <nav className={"menu-box"}>
                  <div className={"close-btn"}>
                    <i className="fas fa-times"></i>
                  </div>
                  <div className={"nav-logo"}>
                    <Link to="/">
                      <img src="/img/logo/logo.svg" alt="Coloniume Logo" title="" />
                    </Link>
                  </div>

                  <div className={"menu-outer"}>
                    {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->  */}
                  </div>

                  <div className={"social-links"}>
                    <ul className="clearfix">
                      <li >
                        <a href="mailto:info@coloniume.org" id="email" title="E-Mail">
                          <i className="fa fa-envelope"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/coloniume/">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/coloniume">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/coloniume/">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/coloniume">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/@coloniumenetwork">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li >
                        <a href="https://t.me/coloniume" id="telegram">
                          <i className="fab fa-telegram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div className={"menu-backdrop"} />
              {/* <!-- End Mobile Menu --> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;

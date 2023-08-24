import React, { useEffect, useState } from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import WhyChooseUsItem from "./WhyChooseUsItem";
import './choose.css';

const WhyChooseUs = () => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const slider_items = [
    {
      src: "/img/icon/choose_icon01.svg",
      alt: "",
      link: "/",
      title: "Free flow of information",
      description: "Coloniume enables unrestricted and decentralized communication, facilitating the free flow of information and knowledge sharing.",
    },
    {
      src: "/img/icon/choose_icon02.svg",
      alt: "",
      link: "/",
      title: "Free internet access",
      description: "Coloniume bridges the digital divide by offering free internet access, increasing access to information and resources.",
    },
    {
      src: "/img/icon/choose_icon03.svg",
      alt: "",
      link: "/",
      title: "Improve quality of life",
      description: "Coloniume's increased access to information and resources can improve lives by offering access to education, healthcare, and essential services",
    },
    {
      src: "/img/icon/choose_icon04.svg",
      alt: "",
      link: "/",
      title: "Expand Internet businesses",
      description: "Coloniume's decentralized platform enables entrepreneurs to start low-cost businesses without traditional internet infrastructure expenses.",
    },
    {
      src: "/img/icon/choose_icon05.svg",
      alt: "",
      link: "/",
      title: "Internet prosperity",
      description: "Coloniume's expansion can stimulate the internet economy and create new jobs. Additionally, it has the potential to provide free public education, removing barriers of cost and accessibility",
    },
    {
      src: "/img/icon/choose_icon06.svg",
      alt: "",
      link: "/",
      title: "Free public education",
      description: "Coloniume has the potential to provide free public education, enabling people to learn and grow without the barriers of cost and accessibility.",
    },
    {
      src: "/img/icon/choose_icon07.svg",
      alt: "",
      link: "/",
      title: "Industrial prosperity",
      description: "Coloniume's ability to share resources and reduce energy consumption can promote industrial prosperity and reduce waste.",
    },
 
  {
    src: "/img/icon/choose_icon08.svg",
    alt: "",
    link: "/",
    title: "Internet backup",
    description: "Coloniume's decentralized network can serve as a reliable means of communication during emergencies and crises.",
  },
];

  const initalState = 0;
  const [count, setCount] = useState(initalState);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((old) => (old == 6 ? 0 : old + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toMultiply = 100 / slider_items.length;

  return (
    <section className="choose-area pb-5">
      <div className="container">
        <div className="row justify-content-center">
         {/*} <div className="col-xl-6">
            <div className="section-title text-center mb-50">
              <span className="sub-title">why Choose us </span>
              <h2 className="title" id="t2">
                Why choose our Coloniume <span>Token</span>
              </h2>
            </div>
           </div> */}
        </div>

        <div className="row choose-active">
          <SlickSlider settings={slickSettings}>
            {slider_items.map((item, index) => (
              <div key={index} className="col-lg-3">
                <WhyChooseUsItem item={item} />
              </div>
            ))}
          </SlickSlider>
        </div>

        <div className="slide-progressbar">
          <div
            style={{
              // width: `${count * toMultiply}%`,
              backgroundSize: `${count * toMultiply}% 100%`,
            }}
            className="slide-filler"
          />
        </div>

        {/* <div
          className="slide-progress"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <span className="slider__label sr-only"></span>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;

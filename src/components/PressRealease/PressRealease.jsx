import React from "react";
import Slider from 'react-slick';

const PressRealease = () => {

  const marque = [
    { src: "/img/marquee img/Adventure.png", title: "", href: "https://cryptoadventure.com/coloniume-the-decentralized-free-communication-network-for-all/" },
    { src: "/img/marquee img/Bitcoin gress.png", title: "", href: "https://bitcoingress.com/coloniume-network-a-rewarding-eco-friendly-way-to-share-internet-globally/" },
    { src: "/img/marquee img/Chain buz.png", title: "", href: "https://chain.buzz/coloniume-bringing-decentralized-free-and-uncensored-internet-for-all/" },
    { src: "/img/marquee img/Coin opening.png", title: "", href: "https://coinopening.com/coloniume-network-a-rewarding-eco-friendly-way-to-share-internet-globally/" },
    { src: "/img/marquee img/Coin press.png", title: "", href: "https://coinpress.media/coloniume-network-a-rewarding-eco-friendly-way-to-share-internet-globally/" },
    { src: "/img/marquee img/Cyptonic.png", title: "", href: "https://cyptonic.com/coloniume-network-a-rewarding-eco-friendly-way-to-share-internet-globally/" },
    { src: "/img/marquee img/Finance.png", title: "", href: "https://finance.yahoo.com/news/coloniume-transforms-internet-decentralized-communication-130400097.html" },
    { src: "/img/marquee img/Insider.png", title: "", href: "https://www.streetinsider.com/Globe+Newswire/Coloniume+Transforms+the+Internet+with+Decentralized+Communication+and+Computing+Network/21463731.html" },
    { src: "/img/marquee img/Journal.png", title: "", href: "https://www.digitaljournal.com/pr/news/coloniume-transforms-the-internet-with-decentralized-communication-and-computing-network" },
    { src: "/img/marquee img/Market watch.png", title: "", href: "https://www.marketwatch.com/press-release/coloniume-transforms-the-internet-with-decentralized-communication-and-computing-network-2023-04-04?mod=search_headline" },
    { src: "/img/marquee img/Unfolded.png", title: "", href: "https://cryptounfolded.com/coloniume-bringing-decentralized-free-and-uncensored-internet-for-all/" },
    { src: "/img/marquee img/benzinga.png", title: "", href: "https://www.benzinga.com/pressreleases/23/04/g31655794/coloniume-transforms-the-internet-with-decentralized-communication-and-computing-network" },
    { src: "/img/marquee img/bloomberg.png", title: "", href: "https://www.bloomberg.com/press-releases/2023-04-04/coloniume-transforms-the-internet-with-decentralized-communication-and-computing-network" },
    { src: "/img/marquee img/curnches.png", title: "", href: "https://cryptocrunches.com/a-coloniume-bringing-decentralized-free-and-uncensored-internet-for-all/" },
    { src: "/img/marquee img/entertainment.png", title: "", href: "https://www.yahoo.com/entertainment/coloniume-transforms-internet-decentralized-communication-130400097.html" },
    { src: "/img/marquee img/folds.png", title: "", href: "https://www.cryptofolds.org/a-coloniume-bringing-decentralized-free-and-uncensored-internet-for-all" },
    { src: "/img/marquee img/news.png", title: "", href: "https://cryptonews.direct/a-coloniume-bringing-decentralized-free-and-uncensored-internet-for-all/" },
    { src: "/img/marquee img/press.png", title: "", href: "https://cryptopress.news/a-coloniume-bringing-decentralized-free-and-uncensored-internet-for-all/" },
    { src: "/img/marquee img/sports.png", title: "", href: "https://sports.yahoo.com/news/coloniume-transforms-internet-decentralized-communication-130400097.html" },

  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    autoSlidesToShow: true,
    variableWidth: true,
  };

  return (
    <div className="container">
      <div className="section-title text-center mb-30" id="main">
        <span className="sub-title" id="titlem" style={{ fontSize: "25px" }}>Press release</span>
      </div>
      {/* <marquee className="marqu" direction="left" loop="infinite" left="-100%">
        <div className="rotate1" >
          {marque.map((item, index) => (
            <li key={index}>
              <a href={item.href} target="blank"><img style={{ paddingRight: "30px" }} src={item.src} alt={item.title} className="marqueimg" /></a>
            </li>
          ))}
        </div>
        <div>

        </div>
      </marquee> */}
      <Slider {...sliderSettings}>
        {marque.map((item, index) => (
          <li key={index}>
            <a href={item.href} target="blank"><img style={{ paddingRight: "30px" }} src={item.src} alt={item.title} className="marqueimg" /></a>
          </li>
        ))}
      </Slider>

    </div>



  )
}

export default PressRealease;
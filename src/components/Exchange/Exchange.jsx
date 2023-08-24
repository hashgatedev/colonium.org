import React from "react";
import './partner.css';

const Exchange = () => {
  const partners_list = [
    { src: "/img/lgimg/p2b.png", title: "", href:"https://p2pb2b.com/trade/CLNX_USDT/"},
    // { src: "/img/lgimg/pancakeswap.png", title: "", href:"https://pancakeswap.finance/swap?outputCurrency=0x9Ece397eC3d23Fc6aE356545d63Fa4348dBB038d&inputCurrency=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" },
  ];

  return (
    <div className="partner-area pb-130" id="exchange" >
      <div className="container">
      
        <div className="row justify-content-center" >
          <div className="col-lg-8">
            <div className="section-title text-center mb-10">
              <span className="sub-title" >Exchange</span>
            </div>
          </div>
        </div>
      
        <div className="row">
          <div className="col-lg-12">
            <div className="partner-wrap justify-content-center" id="row2">
              <ul className="justify-content-center">
                {partners_list.map((item, index) => (
                  <li key={index}>
                   <a href={item.href} target="blank"> <img src={item.src} alt={item.title} /></a>
                  </li>
                ))}
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;

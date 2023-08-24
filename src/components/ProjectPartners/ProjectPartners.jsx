import React from "react";
import './partner.css';

const ProjectPartners = () => {
  const partners_list = [
    { src: "/img/lgimg/binance.png", title: "", href: "https://www.binance.com/en/price/coloniume-network" },
    { src: "/img/lgimg/coinbase.png", title: "", href: "https://www.coinbase.com/price/coloniume-network" },
    { src: "/img/lgimg/coinmarketcap.png", title: "", href: "https://coinmarketcap.com/currencies/coloniume-network/" },
    { src: "/img/lgimg/coincarp.png", title: "", href: "https://www.coincarp.com/currencies/coloniume-network/" },
    { src: "/img/lgimg/symlix.png", title: "", href: "https://symlix.com/price/coloniume-network/usd" },
    { src: "/img/lgimg/btcc.png", title: "", href: "https://www.btcc.com/en-US/markets/Coloniume%20Network" },
    { src: "/img/lgimg/coinpaprika.png", title: "", href: "https://coinpaprika.com/coin/clnx-colonix/" },
    { src: "/img/lgimg/livecoinwatch.png", title: "", href: "https://www.livecoinwatch.com/price/Coloniume-CLNX" },
    { src: "/img/lgimg/coincodex.png", title: "", href: "https://coincodex.com/crypto/coloniume/" },
    { src: "/img/lgimg/tokeninsight.png", title: "", href: "https://tokeninsight.com/en/coins/coloniume/overview" },
    { src: "/img/lgimg/coincheckup.png", title: "", href: "https://coincheckup.com/coins/coloniume" },
    { src: "/img/lgimg/blockspot.png", title: "", href: "https://blockspot.io/coin/coloniume/" },
    { src: "/img/lgimg/digitalcoinprice.png", title: "", href: "https://digitalcoinprice.com/coins/coloniume-network" },
    { src: "/img/lgimg/crypto_com.png", title: "", href: "https://crypto.com/price/coloniume-network" },
    { src: "/img/lgimg/cryptorank.png", title: "", href: "https://cryptorank.io/price/coloniume-network" },
    { src: "/img/lgimg/coinranking.png", title: "", href: "https://coinranking.com/coin/GAtafA6Hf+colonix-clnx" },
    { src: "/img/lgimg/webgiacoin.png", title: "", href: "https://hi.webgiacoin.com/chart/coloniume-network" },
    { src: "/img/lgimg/coinmarketfees.png", title: "", href: "https://coinmarketfees.com/coloniume-network" },
  ];

  return (
    <div className="partner-area pb-130" id="coin">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-10" id="partner_title">
              <span className="sub-title" id="Price">Our Partners</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="partner-wrap" id="row2">
              <ul>
                {partners_list.map((item) => (
                  <li key={item.src}>
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

export default ProjectPartners;

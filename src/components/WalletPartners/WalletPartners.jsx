import React from "react";
import './WalletPartners.css';

const WalletPartners = () => {
  const partners_list = [
    { src: "/img/partner/partner_img01.png", title: "", href: "" },
    { src: "/img/partner/partner_img02.png", title: "", href: "https://bitkeep.com/" },
    { src: "/img/partner/partner_img03.png", title: "", href: "https://coins.coinpaprika.com/" },
    { src: "/img/partner/partner_img04.png", title: "", href: "https://wallet.coin98.com/" },
    { src: "/img/partner/partner_img05.png", title: "", href: "https://guarda.com/" },
    { src: "/img/partner/partner_img06.png", title: "", href: "https://www.ledger.com/" },
    { src: "/img/partner/partner_img07.png", title: "", href: "https://mathwallet.org/" },
    { src: "/img/partner/partner_img08.png", title: "", href: "https://metamask.io/" },
    { src: "/img/partner/partner_img09.png", title: "", href: "https://nabox.io/" },
    { src: "/img/partner/partner_img10.png", title: "", href: "https://www.safepal.com/" },
    { src: "/img/partner/partner_img11.png", title: "", href: "https://www.tokenpocket.pro/" },
    { src: "/img/partner/partner_img12.png", title: "", href: "https://unstoppable.money/" },
    { src: "/img/partner/partner_img13.png", title: "", href: "https://trustwallet.com/" },
    { src: "/img/partner/partner_img14.png", title: "", href: "https://trezor.io/" },

  ];

  return (
    <div className="partner-area pb-130" >
      <div className="container" id="partner1">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-10">
              <br />
              <span className="sub-title">Wallets</span>
            </div>
          </div>
        </div>
        <div className="row" >
          <div className="col-lg-12">
            <div className="partner-wrap" id="row2">
              <ul>
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

export default WalletPartners;

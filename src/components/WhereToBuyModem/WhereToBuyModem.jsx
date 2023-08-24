import React from "react";
import styles from './WhereToBuyModem.module.css';

const WhereToBuyModem = () => {

  return (
    <div className={styles.wtb_container + " pt-30 mb-30"}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <span className="sub-title" id="Price">Get your modem</span>
            </div>
          </div>
        </div>
        <div className={styles.btn_container}>
          <a href="https://coloniume.ae/" target="blank" className={"btn "+styles.gts_link}> Go to store<img src="/img/lgimg/hashgate.png" alt="Where to Buy Modem" /></a>
        </div>
      </div>
    </div>
  );
};

export default WhereToBuyModem;

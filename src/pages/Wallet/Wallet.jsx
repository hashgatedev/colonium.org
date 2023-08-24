import React from "react";
import './Wallet.css';
import LayoutOne from "../../Layouts/LayoutOne";
import { Link } from "react-router-dom";


const Wallet = () => {

  const handleClick = () => {
    const copyText = document.getElementById("mycopytext");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  }

  const handleBSCOpenClick = () => {
    window.open("https://bscscan.com/address/0x9ece397ec3d23fc6ae356545d63fa4348dbb038d", "_blank");
  }

  return (
    <LayoutOne >
      <section className="blog-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <center>
                <div className="row justify-content-center">
                  <center className="wallet1">
                    <div className="title1"  >
                      <h5>Coloniume cross-chain smart contract address on binance chain</h5>

                      <div className="bsc-content">
                        <input id="mycopytext" className="btn mybutton" defaultValue={"0x9Ece397eC3d23Fc6aE356545d63Fa4348dBB038d"} onClick={handleClick}></input>
                        <button className="btn butt" onClick={handleClick}><i className="fa fa-clone" aria-hidden="true"></i></button>
                        <button className="btn butt" onClick={handleBSCOpenClick}><i className="fa fa-external-link-alt" aria-hidden="true"></i></button>
                      </div>

                    </div>
                    <div>
                      <h2 id="walleth2">CLNX Wallet Web Extension</h2>
                    </div>
                    <div className="container" >
                      <ul className="walleth3">
                        <li><>CLNX Wallet Chrome Extension </>
                          <a href="https://chrome.google.com/webstore/detail/clnx-wallet/heiogpnffonokfkoginfnmmgglfipjld" target="blank"><button className="walletbtn1 btn02 btn dwnld" id="btn46">Download</button></a></li>
                        <li className="walleth4" id="wallet4"><>CLNX Wallet Microsoft Edge Add-on</>
                          <a href="https://microsoftedge.microsoft.com/addons/detail/clnx-wallet/gmjohaflbkhllhkbfoabmnbmhkeljhim" target="blank"> <button className="walletbtn1 btn03 btn dwnld" id="btn47">Download</button></a>

                        </li>
                      </ul>
                    </div>


                    <div className="container">
                      <ul className="warning">
                        <li className="warning1">WARNING: Never disclose your Secret Key.</li>
                        <li>Your Secret Key is the only way to back up and restore your account.</li>
                        <li>Anyone with this key can take your CLNX forever.</li>
                        <li>Please copy and store your Secret Key in a secure place, and never share it anywhere with anybody!</li>
                      </ul>
                    </div>

                    <div className="ytv-container">
                      <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="YouTube video player" src="https://www.youtube.com/embed/eWP_vTnOdGM"></iframe>
                    </div>
                  </center>
                </div>
              </center>
            </div>
            <div className="col-lg-4">
            </div>
          </div>
        </div>
      </section>
    </LayoutOne>
  );
};

export default Wallet;

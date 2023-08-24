import React, { useState } from "react";
import './RewardClaim.css';
import LayoutOne from "../../Layouts/LayoutOne";
import { Link, useParams } from "react-router-dom";
import cn from "classnames";
import config from "../../config";


const RewardClaim = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [walletAddressError, setWalletAddressError] = useState('');
  const [rewardClaimMessage, setRewardClaimMessage] = useState();
  const [submitting, setSubmitting] = useState(false);

  const { rid } = useParams();

  const handleSubmit = () => {
    if (!rid || rid.length !== 24 || submitting) return;
    setSubmitting(true);

    fetch(`${config.API_BASE_URL}/reward/claim/${rid}/${walletAddress}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
      }
    }).then((response) => {
      return response.json();
    }).then((data) => {
      if (!data) {
        setRewardClaimMessage({ message: 'Oops! something went wrong! please try again later.', type: 'error' });
        return;
      }
      if (data.error && (data.error === 'notValid' || data.error === 'alreadyClamed')) {
        setRewardClaimMessage({ message: 'Reward code is not valid or has been claimed!', type: 'error' });
        return;
      } else if (data.error) {
        setRewardClaimMessage({ message: 'Oops! something went wrong! please try again later.', type: 'error' });
        return;
      }

      if (data.result && data.result === 'ok') {
        setRewardClaimMessage({ message: `Reward transferred to wallet address: ${walletAddress}`, type: 'success' });
      }
    }).catch((_error) => {
      setRewardClaimMessage({ message: 'Oops! something went wrong! please try again later.', type: 'error' });
    }).then(()=>{
      setSubmitting(false);
    });
  }

  const notValidWallet = () => {
    return !walletAddress || walletAddress.length !== 48 || !walletAddress.toLowerCase().startsWith('0xc');
  }

  const handleWalletAddressChange = (event) => {
    setWalletAddress(event.target.value);
    setWalletAddressError('');
  }

  const checkWalletAddress = () => {
    if (walletAddress && notValidWallet()) {
      setWalletAddressError("Please enter a valid CLNX wallet address!");
    }
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
                      <h5>Claim Your Reward</h5>
                    </div>
                    {!rewardClaimMessage &&

                      <div className="pt-50">
                        <div>
                          Please enter your CLNX wallet address below to claim your tokens:
                        </div>
                        <div className="wa-container">
                          <div className="winput">
                            <input id="mycopytext" className="btn walletaddress" placeholder="CLNX Wallet address: 0xC..." value={walletAddress} onChange={handleWalletAddressChange} onBlur={checkWalletAddress}></input>
                            {walletAddressError && <div className="error">{walletAddressError}</div>}
                          </div>
                          <button id="myButton" className="btn btn-claim" onClick={handleSubmit} disabled={notValidWallet()}>
                            {submitting && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                            {!submitting && <span>Claim</span>}
                          </button>

                        </div>
                        <div>
                          Don't have a CLNX wallet yet? <Link to="/wallet" >Download Wallet!</Link>
                        </div>
                      </div>
                    }
                    {rewardClaimMessage && <div className={cn(rewardClaimMessage.type === 'error' ? "error-box error" : "success-box success")}>{rewardClaimMessage.message}</div>}

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

export default RewardClaim;

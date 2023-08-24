import React, { useEffect, useState } from "react";

import './BlockchainInfo.css';
import config from "../../config";

const BlockchainInfo = () => {

  const [networkStat, setNetworkStat] = useState();

  useEffect(() => {
    fetch(`${config.EXPLORER_BASE_URL}/netInfo`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
      }
    }).then((response) => {
      return response.json();
    }).then((data) => {
      if (!data || !data.info) return;
      setNetworkStat(data.info);
    }).catch((_error) => {
    });

  }, []);


  return (
    <div className="container">
      <div className="main-box">
        <div className="boxes row" >
          <div className="box col-lg-4 col-md-4   col-sm-12" >
            <h5>Network Average Speed:</h5>
            <h5 ><span className="calcps">{networkStat?.networkAvgSpeed}</span></h5>
            <h5>Total Used Data:</h5>
            <h5 ><span className="calcps">{networkStat?.totalDataUsed}</span></h5>
            <h5>Total Transactions:</h5>
            <h5 ><span className="calcps">{networkStat?.transactions}</span></h5>
          </div>

          <div className="box col-lg-4  col-md-6 col-lg-3 col-sm-12">
            <h5>Difficulty:</h5>
            <h5 ><span className="calcps">{networkStat?.networkDifficulty}</span></h5>
            <h5>Mined Blocks:</h5>
            <h5 ><span className="calcps">{networkStat?.blocks}</span></h5>
            <h5>Max Supply:</h5>
            <h4><span className="calcps">1,000,000,000 CLNX</span></h4>
          </div>

          <div className="box col-lg-4  col-md-6 col-lg-3 col-sm-12">
            <h5>CLNX Price:</h5>
            <h5 ><span className="calcps">{networkStat?.clnxPrice}</span></h5>
            <h5>Market Cap:</h5>
            <h5 ><span className="calcps">{networkStat?.clnxMarketcap}</span></h5>
            <h5>24H Volume:</h5>
            <h5><span className="calcps">calculating USD</span></h5>
          </div>
        </div>
      </div>
    </div>

  )
};
export default BlockchainInfo;

import React, { useEffect, useState } from "react";
import "./style.css";
import config from "../../config";

const Calculator = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [networkStat, setNetworkStat] = useState(null);
  const [result, setResult] = useState(0);
  const [resultInput2, setresultInput2] = useState(0);
  const [timeRequired, setTimeRequired] = useState(0);

  useEffect(() => {
    fetch(`${config.EXPLORER_BASE_URL}/netInfo`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.info) {
          setNetworkStat(data.info);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleInputChange1 = (e) => {
    setInput1(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setInput2(e.target.value);
  };

 

  const handleReset = () => {
    setInput1("");
    setInput2("");
    setResult(0);
    setresultInput2(0);
    setTimeRequired(0);
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const inputValue = parseFloat(input1);
    const numberOfUsers = parseInt(input2) || 1;
  
    const difficulty = parseFloat(networkStat?.networkDifficulty.match(/\d+(\.\d+)?/)[0]);
    const result = inputValue / difficulty;

    console.log("Result:", result);

    const clnxPrice = parseFloat(networkStat?.clnxPrice?.replace(/[^0-9.]/g, ''));
    const resultInput2 = parseFloat(clnxPrice * result);
    
    
    const maxSpeedPerUser = 16;
    const timeRequired = (inputValue * 1000) / (maxSpeedPerUser / 8) / numberOfUsers / 3600;
    console.log("timeRequired:",timeRequired.toFixed(2));
   
    
  
    setResult(result);
    setresultInput2(resultInput2);
    setTimeRequired(timeRequired);
  };
  
  
  return (
    <div className="container mt-5 col-lg-4">
    <div className="row">
      <div className="col-lg-12" style={{ border: "2px solid grey", borderRadius: "25px",padding:"20px 15px 0 15px" }}>
        <center style={{ padding: "5px 0 0 0" }}>
          <h4>Profit Calculator</h4>
        </center>
        <div className="row py-" style={{paddingTop:"40px"}}>
          <div className="d-flex" style={{margin:"-35px 0 20px"}}>
            <div className="speed_title">Max Speed/User:</div>
            <span className="calcps" style={{ fontWeight: "bold", margin: "0 20px" }}>
              16 Mbps
            </span>
          </div>
          <div className=" diffy-clnx ro mb-1" style={{marginTop:"-10px"}}>
            <div className="col-sm-6 col-lg-6">
              <div className="cal_side2">Difficulty:</div>
              <div className="col-12">
                <h5>
                  <span className="calcps" id="difficulty">
                    {networkStat?.networkDifficulty}
                  </span>
                </h5>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div className="cal_side2 col-lg-12">CLNX Price:</div>
              <div>
                <h5>
                  <span className="calcps" id="clnxprice">
                    {networkStat?.clnxPrice}
                  </span>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-12"  >
            <form onSubmit={handleSubmit} >
              <div style={{display:"flex",justifyContent:"center"}}>
              <div className="form-group col-lg-6">
                <label className="input0001" htmlFor="input1" style={{ color: "#fff" }}>
                  Data Usage Consumption (GB):
                </label>
                <input
                  id="input1"
                  className="form-control"
                  type="number"
                  value={input1}
                  onChange={handleInputChange1}
                  placeholder=""
                  required
                  style={{ borderRadius: "20px !important" }}
                />
              </div>
              <div className="form-group col-lg-6">
                <label className="input0001" htmlFor="input2" style={{ color: "#fff" }}>
                  Number Of Users:
                </label>
                <select
                  id="input2"
                  className="form-control"
                  value={input2}
                  onChange={handleInputChange2}
                  required
                  style={{ borderRadius: "20px !important" }}
                >
                  {Array.from({ length: 20 }, (_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </div>
              </div>
              <center>
                <div className="d-flex" style={{ justifyContent: "space-evenly", margin: "15px 0" }}>
                  <button className="btn btn-danger" type="button" onClick={handleReset}  style={{
                    padding: "8px 10px",
                    minHeight: "0px",
                    maxWidth: "150px",
                    minWidth: "100px",
                    
                    borderColor: "#2add84",
                    borderTop: "2px solid #2add84",
                    textAlign: "left",
                    position: "relative",
                    fontSize: "15px",
                  }}>
                    <center>Reset</center>
                  </button>
                  <button className="btn btn-success" type="submit"   style={{
                    padding: "8px 10px",
                    minHeight: "0px",
                    maxWidth: "150px",
                    borderColor: "#2add84",
                    borderTop: "2px solid #2add84",
                    textAlign: "left",
                    position: "relative",
                    fontSize: "15px",
                  }}>
                    Calculate
                  </button>
                </div>
              </center>
            </form>
            
          </div>
          <div className="col-lg-12">
            <center>
              <span style={{ fontSize: "18px", fontWeight: "bold", color: "#fff" }}>
                RESULT
              </span>
            </center>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>
                <center>CLNX</center>
                <input
                  className="btn btn-success"
                  placeholder="CLNX"
                  id="resultInput"
                  style={{
                    padding: "8px 10px",
                    minHeight: "0px",
                    maxWidth: "150px",
                    borderColor: "#2add84",
                    borderTop: "2px solid #2add84",
                    textAlign: "left",
                    position: "relative",
                    fontSize: "15px",
                  }}
                  readOnly
                  value={result.toFixed(2)}
                />
              </div>
              <div>
                <center>USD</center>
                <input
                  id="resultInput2"
                  className="btn btn-success col"
                  placeholder="USD"
                  style={{
                    padding: "10px",
                    minHeight: "00px",
                    maxWidth: "150px",
                    borderColor: "#2add84",
                    borderTop: "2px solid #2add84",
                    textAlign: "left",
                    position: "relative",
                    fontSize: "15px",
                  }}
                  readOnly
                  value={resultInput2}
                />
              </div>
            </div>
            <center className="col-lg-12" style={{ color: "#fff", padding: "15px 0 10px 0" }}>
  <div>
    Minimum Time Required:{" "}
    <span id="timeRequired">
      {timeRequired < 1
        ? `${(timeRequired * 60).toFixed(2)} Minute(s)`
        : `${timeRequired.toFixed(2)} Hour(s)`}
    </span>
  </div>
</center>


          </div>
        </div>
      </div>
    </div>
  </div>
);
};


export default Calculator;
import React from "react";
import './Angel.css';


const Angels = () => {
  const marque = [
    { src: "/img/images/angels.png", title: "" },
  ];
  return (
    <>
      <div className="container">
        <div className="angelbox">
          <div className="texts">
            <div className="section-title text-center mb-60">
              <span className="sub-title t1angel" id="titlem2" style={{ fontSize: "25px" }}><span style={{ color: "black", margin: "0 5px 0 " }}>The Blue Angels</span></span>
            </div>
            <div>
              <div className="container-fluid" id="angelp p">
                <p className="angelp1" style={{ marginTop: "-51px" }}>The Blue Angels are a group of people who embody kindness, duty, helpfulness, justice,
                  knowledge, and awareness. They champion continuous internet connection and provide free
                  internet access to those who cannot afford it, from the poorest child to a lost person in the forest
                  or a scientist in need. Though they are human beings, they embody the qualities of purity,
                  peace, communication, justice, leadership, and problem-solving that are often associated with
                  angels. The Coloniume Foundation honors them as heroes for their selfless actions and
                  recognizes their contribution as the driving force behind the Coloniume network. Their
                  unwavering commitment to progress and excellence helps make the world a better place.</p>
              </div>
            </div>
          </div>
          <div className="image">
            <center>
              <ul className="boximgli">
                {marque.map((item, index) => (
                  <li key={index} className="image_angel">
                    <img src={item.src} alt={item.title} className="img" />
                  </li>
                ))}
                <li>
                  <a href="https://coloniu.me/" target="blank">
                    <button className=" btn angelbtn">
                      Join Now
                    </button>
                  </a>
                </li>
              </ul>
            </center>
          </div>
        </div>
      </div>
    </>
  )
}
export default Angels;

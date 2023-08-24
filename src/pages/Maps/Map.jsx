import React from "react";
import './Map.css';
import LayoutOne from "../../Layouts/LayoutOne";
 

const maps =()=>{
return(
<LayoutOne >
   <div className="container">
   <div className="mapbox">
    <div className="mapboxins">
      <h4>Share your internet via Hotspot and earn Colonix</h4>
      <p>By sharing their internet connection via hotspot, individuals can create their own communication network using mobile phones or network equipment and provide 
        free Wi-Fi to others. This not only contributes to the reliability of internet connectivity but also enables individuals to become part of the Coloniume
         network and earn rewards. Moreover, even in the event of internet disconnection, network members can continue to freely exchange data within the network.</p>
    </div>
   </div>
   <div className="coveredmap">
    <h4>Coverage Map <span style={{fontSize:"10px"}}>(Disabled, until the project starts)</span></h4>
     <div className="map">
          <iframe title="map1" className="googlemap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.58518529957!2d-0.2664028309972148!3d51.52852620421266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sae!4v1683519768338!5m2!1sen!2sae" width="100%" height="450" allowFullScreen=""  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     </div>
        </div>

   <div className="hotpoint">
    <div className="hotbox1">
      <div className="hottext">
         <h4> The universal challenge of expanding free internet in deprived areas Hot Point: </h4>
         <p  className="hottextp">One of the biggest challenges facing society is expanding access to free internet in underserved areas. One of the key features of the Coloniume Network is to enable residents of different regions to increase the network's reward ratio in those areas. Another feature is the ability to draw attention to underdeveloped regions by marking them on the map, thus attracting the interest of the Blue Angels or Coloniume Network developers. Investors can then travel to these areas to help develop communication infrastructure, install telecommunications equipment, and provide free internet to local residents.
To mark an area on the map and become part of this effort, individuals can simply log in to the Coloniume website and designate the area as a HOT POINT. By doing so, they can contribute to the expansion of free internet in less developed regions while also earning rewards.

</p>
      </div>
      <div className="hotmap">
            <iframe title="map2" className="googlemap2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158851.13266517967!2d-0.061095830650378685!3d51.53066205047003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sae!4v1683519983926!5m2!1sen!2sae" width="100%" height="450" allowFullScreen=""  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>

    </div>


   </div>


   </div>

</LayoutOne>

)

}
export default maps
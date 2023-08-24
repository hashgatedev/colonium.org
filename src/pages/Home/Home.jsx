import React from "react";
import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import Roadmap from "../../components/Roadmap/Roadmap";
import WalletPartners from "../../components/WalletPartners/WalletPartners";
import Exchange from "../../components/Exchange/Exchange";
import ProjectPartners from "../../components/ProjectPartners/ProjectPartners";
import WhitePaper from "../../components/WhitePaper/WhitePaper";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import LayoutOne from "../../Layouts/LayoutOne"
import PressRealease from "../../components/PressRealease/PressRealease";
import Angels from "../../components/Angels/Angels";
import MediaList from "../../components/MediaList/MediaList";
import InfoSection from "../../components/InfoSection/InfoSection";
import WhereToBuyModem from "../../components/WhereToBuyModem/WhereToBuyModem";
import Calculator from '../../components/calculator/calculator';
import Realtime from '../../components/real-time/Barchart'
const Home = () => {

  React.useEffect(() => {
    const anchor = window.location.hash.slice(1);
    if (anchor) {
      const anchorEl = document.getElementById(anchor);
      if (anchorEl) {
        setTimeout(() => {
          anchorEl.scrollIntoView();
        }, 0);
      }
    }
  }, []);

  return (
    <LayoutOne>
      <main className="fix">
        <Banner />
       
        
        <WhoWeAre />
        <WhyChooseUs />
      
        <InfoSection />
        {/* <WhereToBuyModem /> */}
        <PressRealease />
        <Exchange />
        <ProjectPartners />
        <div className="area-bg">
          <Roadmap />
          <WalletPartners />
          <WhitePaper />
        </div>
        <MediaList />
        <Angels />
        <div className="container">
        <center style={{display:"flex"}}>
        <div className="container calculator_graph col-md-12 col-lg-12" >
        <Calculator  className=" col-md-12 col-lg-12" style={{maxWidth:"100%"}}> </Calculator>
        <Realtime  className="col-md-6 col-lg-6" > </Realtime>
        </div>
        </center>
        </div>
        <Contact />
      </main>
    </LayoutOne>
  );
};

export default Home;

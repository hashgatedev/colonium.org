import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import WOW from "wow.js";
import Wallet from "./pages/Wallet/Wallet";
import Faq from "./pages/Faq/Faq";
import TermsConditions from "./pages/TermsConditions/TermsConditions";
import Maps from "./pages/Maps/Map";
import WhitePaper from "./pages/WhitePaper/WhitePaper";
import RewardClaim from "./pages/RewardClaim/RewardClaim";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import './app.css';

function App() {
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }, []);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Wallet" element={<Wallet />} />
        <Route path="Faq" element={<Faq />} />
        <Route path="Maps" element={<Maps />} />
        <Route path="WhitePaper" element={<WhitePaper />} />
        <Route path="Terms-and-Condition" element={<TermsConditions />} />
        <Route path="privacy-and-policy" element={<PrivacyPolicy />} />
        <Route path="claimreward/:rid" element={<RewardClaim />} />
        {/* to-do 404 page */}
        <Route path='*' exact={true} element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

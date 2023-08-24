import React from "react";
import FooterOne from "../components/Footer/FooterOne";
import HeaderOne from "../components/Header/HeaderOne";
import cn from "classnames";

const LayoutOne = (props) => {
  return (
    <div className={cn("")}>
      <HeaderOne />

      {props.children}

      <FooterOne />
    </div>
  );
};

export default LayoutOne;

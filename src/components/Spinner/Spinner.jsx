import React from "react";
import cn from "classnames";
import styles from "./Spinner.module.css";

const Spinner = (props) => {

  if (props.loading) {
    return (
      <div className={cn(styles.spinner)}>
        <div className={cn(styles.rect1)}></div>
        <div className={cn(styles.rect2)}></div>
        <div className={cn(styles.rect3)}></div>
        <div className={cn(styles.rect4)}></div>
        <div className={cn(styles.rect5)}></div>
      </div>
    );
  } else {
    return null;
  }
};

export default Spinner;

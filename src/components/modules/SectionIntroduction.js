import React from "react";
import styles from "@/src/components/modules/SectionIntroduction.module.scss";

function SectionIntroduction({ title, text, color }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.wrapper__title}> {title} </h2>
      <p className={styles.wrapper__text} style={color ? {color: color} : {color: "#333333"}}> {text} </p>
      <div className={styles.wrapperBorder}>
        <span className={styles.wrapperBorder__span}></span>
        <span
          className={`${styles.wrapperBorder__span} ${styles.wrapperBorder__centralSpan} `}
        ></span>
        <span className={styles.wrapperBorder__span}></span>
      </div>
    </div>
  );
}

export default SectionIntroduction;

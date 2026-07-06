import React, { useEffect, useState } from "react";
import styles from "@/src/components/modules/ResumeSpecifications.module.scss";

function ResumeSpecifications({ title, date, headline, description }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);

    const timer = setTimeout(() => {
      setVisible(true);
    }, 10); // it is 10ms

    return () => clearTimeout(timer);
  }, [title]);

  return (
    <div key={title} className={`${styles.specificationsItem} ${visible ? styles.show : ""}`}>
      <div className={styles.specificationsItem__circle}></div>
      <div className={styles.caption}>
        <div className={styles.captionTitle}>
          <h5> {title} </h5>
          <span> {date} </span>
        </div>

        <p className={styles.captionHeadline}>{headline}</p>
        <p className={styles.captionDescription}>{description}</p>
      </div>
    </div>
  );
}

export default ResumeSpecifications;

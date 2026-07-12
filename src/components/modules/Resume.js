"use client";

import React, { useState } from "react";
import styles from "@/src/components/modules/Resume.module.scss";
import SectionIntroduction from "./SectionIntroduction";
import resumeList from "@/src/constants/ResumeList";
import ResumeSpecifications from "@/src/components/modules/ResumeSpecifications";
import resumeSpecification from "@/src/constants/ResumeSpecifications";
import Link from "next/link";

function Resume() {
  const primarySpecification = resumeSpecification.filter(
    (specification) => specification.title === "Envato University",
  );

  const [resumeState, setResumeState] = useState(resumeList);
  // const [title, setTitle] = useState("Education");
  const [specificationOfResume, setSpecificationOfResume] =
    useState(primarySpecification);
  const [animationKey, setAnimationKey] = useState(0);

  const fieldHandler = (item) => {
    setAnimationKey((prev) => prev + 1);

    if (item.title === "Education") {
      const newSpecification = resumeSpecification.filter(
        (specification) => specification.title === "Envato University",
      );

      setSpecificationOfResume(newSpecification);
    } else {
      const newSpecification = resumeSpecification.filter(
        (specification) => specification.title == item.title,
      );

      setSpecificationOfResume(newSpecification);
    }

    setResumeState((prevState) =>
      // prevState is the last amount of ResumeState
      prevState.map((resumeItem) => ({
        ...resumeItem,
        selected: resumeItem.key === item.key,
      })),
    );
  };
  // const showSpecification = resumeState.find(
  //   (state) => state.selected === true,
  // );
  // console.log(showSpecification);
  return (
    <section className={styles.resumeSection} id="Resume">
      <div className={styles.container}>
        <SectionIntroduction title="Resume" text="My Formal Bio Details" />
        <div className={styles.wrapper}>
          <div
            className={`${styles.wrapperCharacteristics} ${styles.col_12} ${styles.col_lg_4}`}
          >
            <ul className={styles.list}>
              {resumeState.map((item) => (
                <li key={item.key} className={styles.list__item} style={{"boxShadow": item.selected === true ? "0 0 4rem #60e9ff27" : null}}>
                  <Link
                    href="#"
                    className={
                      item.selected === true
                        ? `${styles.list__link} ${styles.list__link_selected}`
                        : styles.list__link
                    }
                    onClick={() => fieldHandler(item)}
                  >
                    <span> {item.svg} </span> <span> {item.title} </span>{" "}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.navBar}></div>
          </div>

          <div
            className={`${styles.wrapperSpecifications} ${styles.col_12} ${styles.col_lg_8}`}
          >
            {/* این همان خط عمودی است */}
            <div className={styles.verticalLine}></div>

            {specificationOfResume.map((item) => (
              <ResumeSpecifications
                key={`${item.key}-${animationKey}`}
                title={item.title}
                date={item.date}
                headline={item.headline}
                description={item.description}
              />
            ))}

            {/* می‌توانید آیتم‌های بعدی را اینجا تکرار کنید */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;

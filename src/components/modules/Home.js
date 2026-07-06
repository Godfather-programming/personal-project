import React from "react";
import styles from "@/src/components/modules/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import ButtonLink from "../elements/ButtonLink";

function Home() {
  return (
    <section className={styles.homeSection}>
      <div className={`${styles.container}`} id="Home">
        <div className={`${styles.row} ${styles.home}`}>
          <div
            className={`${styles.introductionText} ${styles.col_12} ${styles.col_lg_7}`}
          >
            <div className={styles.textPart}>
              <div className={styles.texts}>
                <h2 className={styles.texts__green}> Hello, IM </h2>
                <h2 className={styles.texts__orange}> White Alexa </h2>
              </div>

              <h3> Creative Designer </h3>

              <p> Freelancer Web/Mobile UI/UX Designer with Motion Graphics </p>
            </div>

            <div className={styles.buttonsPart}>
              <ButtonLink
                text="Hire Me"
                color={"#0ABEAD"}
                shadowColor={"#0ABEAD41"}
              />

              <ButtonLink text="Get Resume" />
            </div>
          </div>

          <div className={`${styles.col_12} ${styles.col_lg_5}`}>
            {/* <Image
              src={"/images/header-avatar.jpg"}
              alt="header image"
              width={500}
              height={500}
              className={styles.introductionImage__img}
            /> */}

            <div className={styles.introductionImage}></div>
          </div>
        </div>
      </div>



    </section>
  );
}

export default Home;

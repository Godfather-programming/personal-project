import React from "react";
import styles from "@/src/components/modules/AboutUs.module.scss";
import AboutUsList from "@/src/constants/AboutUsList";
import ButtonLink from "@/src/components/elements/ButtonLink";
import SectionIntroduction from "@/src/components/modules/SectionIntroduction";

function AboutUs() {
  return (
    <section id="About Us" className={styles.aboutUs}>
      <div className={styles.container}>

      <SectionIntroduction title="About Us" text="Why Choose Me?" color="#0ABEAD"/>
  
        <div className={styles.aboutUsInfo}>
          <div className={`${styles.aboutUsInfo__picture} `}>
          <img src="/images/about-us-man.jpg"/>
            {" "}
          </div>

          <div className={`${styles.aboutUsInfo__description} `}>
            <div className={styles.aboutUsInfoCaption}>
              <h4 className={styles.aboutUsInfoCaption__title}> Why Choose me? </h4>
              <p className={styles.aboutUsInfoCaption__text}>
                {" "}
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book.{" "}
              </p>
            </div>

            <div className={styles.aboutUsInfoList}>
              <h5 className={styles.aboutUsInfoList__text}> Here is Few Features: </h5>

              <ul className={styles.aboutUsInfoList__menu}>
                {
                  AboutUsList.aboutUsList.map(item => (<li className={styles.aboutUsInfoList__item} key={item.id}> {item.text} </li>))
                }
              </ul>
            </div>

            <div className={styles.aboutUsInfo__buttons}>
              <ButtonLink text="Hire Me" color="#09BEAD" shadowColor="#0BBEAD41"/>
              <ButtonLink text="get Resume"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

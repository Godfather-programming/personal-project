import React from "react";
import styles from "@/src/layouts/Footer.module.scss";
import contactUsIcons from "@/src/constants/ContactUsIcons";
import Link from "next/link";
import SwitchLink from "../components/elements/SwitchLink";

function Footer() {


  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copy}>
          <span className={styles.copy__text}>
            {" "}
            © 2019 createuiux. All rights reserved.{" "}
          </span>

          <div className={styles.copyIcons}>
            {contactUsIcons.map((icon) => (
              <Link href="#" key={icon.key} className={styles.copyIcons__icon}>
                {" "}
                {icon.svg}{" "}
              </Link>
            ))}

             <SwitchLink />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

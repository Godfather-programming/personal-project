"use client"

import { useState } from "react";
import Link from "next/link";
import styles from "@/src/layouts/Header.module.scss";
import listNav from "@/src/constants/ListNav";

function Header() {
  const [list, setList] = useState(false);

  const listHandler = () => {
    setList((list) => !list);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <h1 className={`${styles.nav__logo}`}>WA.</h1>

            <ul
              className={
                list ? `${styles.list} ${styles.list_open}` : styles.list
              }
            >
              {listNav.map((word) => (
                <li className={styles.list__item} key={word}>
                  {" "}
                  <Link
                    href={`/#${word}`}
                    className={
                      word === "Home"
                        ? `${styles.list__link} ${styles.list__link_active}`
                        : styles.list__link
                    }
                  >
                    {" "}
                    {word}{" "}
                  </Link>{" "}
                </li>
              ))}
            </ul>

            <div
              className={
                list ? `${styles.icon} ${styles.icon_open}` : styles.icon
              }
              onClick={listHandler}
            >
              <span className={styles.icon__line}></span>
            </div>

          </nav>
        </div>
      </header>

      {list ? <div className={styles.cover}></div> : null}
    </>
  );
}

export default Header;

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "@/src/layouts/Header.module.scss";
import listNav from "@/src/constants/ListNav";

function Header() {
  const [list, setList] = useState(false);
  const [menu, setMenu] = useState(listNav);
  const scrollingTarget = useRef(null);

  const listHandler = () => {
    setList((list) => !list);
  };

  const selectHandler = (word) => {
    scrollingTarget.current = word;
    const newListNav = menu.map((item) => ({ ...item, selected: false }));
    const recentList = newListNav.map((item) => ({
      ...item,
      selected: word === item.word,
    }));
    setMenu(recentList);

    const element = document.getElementById(word);
    const distance = element?.offsetTop;
    // console.log(element);

    window.scrollTo({
      top: element.offsetTop - 120,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const observerSwitcher = (sections) => {
      sections.forEach((section) => {
        if (!section.isIntersecting) return;

        // اگر هنوز به مقصد نرسیده‌ایم، هیچ کاری نکن
        if (
          scrollingTarget.current &&
          section.target.id !== scrollingTarget.current
        ) {
          return;
        }

        // به مقصد رسیدیم
        if (section.target.id === scrollingTarget.current) {
          scrollingTarget.current = null;
        }

        const newListNav = menu.map((item) => ({ ...item, selected: false }));
        const recentListNav = newListNav.map((item) => ({
          ...item,
          selected: item.word === section.target.id,
        }));
        setMenu(recentListNav);
      });
    };

    const observer = new IntersectionObserver(observerSwitcher, {
      threshold: 0.3,
    });

    const sections = document.querySelectorAll("main > section");

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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
              {menu.map((item) => (
                <li className={styles.list__item} key={item.word}>
                  {" "}
                  <Link
                    // href={`/#${item.word}`}
                    href="#"
                    className={
                      item.selected === true
                        ? `${styles.list__link} ${styles.list__link_active}`
                        : styles.list__link
                    }
                    onClick={() => selectHandler(item.word)}
                  >
                    {" "}
                    {item.word}{" "}
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

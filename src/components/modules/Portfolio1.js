"use client";

import React, { use, useEffect, useState } from "react";
import styles from "@/src/components/modules/Portfolio1.module.scss";
import SectionIntroduction from "./SectionIntroduction";
import { portfolioList, portfolioImages } from "@/src/constants/PortfolioPart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

function Portfolio1() {
  const [list, setList] = useState(portfolioList);
  const [images, setImages] = useState(portfolioImages);
  // const [title, setTitle] = useState(false);

  const selectHandler = (desiredItem) => {
    // setTitle(desiredItem.option);
    const newList = list.map((item) => ({
      ...item,
      selected: item.key === desiredItem.key,
    }));
    setList(newList);

    if (desiredItem.option === "All Work") {
      setImages(portfolioImages);
    } else {
      const newImages = portfolioImages.filter(
        (image) => image.title === desiredItem.option,
      );
      console.log(newImages);
      setImages(newImages);
    }
  };

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);

    const timer = setTimeout(() => {
      setVisible(true);
    }, 10); // it is 10ms

    return () => clearTimeout(timer);
  }, [images]);

  return (
    <section>
      <div className={styles.container}>
        <SectionIntroduction
          title="Portfolio"
          text="Check In Our Latest Works"
        />

        <ul className={styles.menu}>
          {list.map((item) => (
            <Link key={item.key} href="#" className={styles.menu__link}>
              <li
                className={
                  item.selected === true
                    ? `${styles.menu__item} ${styles.menu__item_selected}`
                    : styles.menu__item
                }
                onClick={() => selectHandler(item)}
              >
                {" "}
                {item.option}{" "}
              </li>
            </Link>
          ))}
        </ul>

<Swiper
  key={list.find(item => item.selected)?.option}
  className={styles.swiper}
  modules={[Pagination]}
  spaceBetween={30}
  pagination={{ clickable: true }}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  }}
>
  {images.map((item) => (
    <SwiperSlide key={item.key}>
      <div
        style={{ backgroundImage: `url(${item.src})` }}
        className={`${styles.wrapper__image} ${visible ? styles.show : ""} `}
      />
    </SwiperSlide>
  ))}
</Swiper>
      </div>
    </section>
  );
}

export default Portfolio1;

{
  /* <div className={styles.wrapper}>
  {portfolioImages.map((item) => (
    <div
      key={item.key}
      style={{ backgroundImage: `url(${item.src})` }}
      className={`${styles.wrapper__image} ${styles.col_4}`}
      >
      {" "}
      </div>
    ))}
    </div> */
}
{
  /* <div className={styles.circles}>
      <span className={styles.circle}> </span>
      <span className={styles.circle}> </span>
      <span className={styles.circle}> </span>
    </div> */
}
